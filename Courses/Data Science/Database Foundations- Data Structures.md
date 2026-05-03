---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: database-foundations-data-structures
url: "https://www.linkedin.com/learning/database-foundations-data-structures"
duration_minutes: 221
duration: 3h 41m
level: Beginner
updated: 10/24/2024
learners: 196483
skills:
  - Data Structures
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFLnUPEBQ2s9g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1728593253052?e=2147483647&amp;v=beta&amp;t=xeFxgWZpjzfcOe-I1Bx_1PWTk0CtQqDgUZCjKOJ1KSg"
linkedin_topic: Data Science
learning_paths:
  - '[[Database Foundations- From Concepts to Applications]]'
  - '[[Advance Your Database Administration Skills]]'
prev_courses:
  - '[[Database Foundations Intro To Databases]]'
  - '[[Database Foundations Intro To Databases]]'
next_courses:
  - '[[Database Foundations Database Management]]'
  - '[[Database Foundations Database Management]]'
path_nav: '[{"path":"Database Foundations- From Concepts to Applications","position":2,"total":5,"prev":"Database Foundations Intro To Databases","next":"Database Foundations Database Management"},{"path":"Advance Your Database Administration Skills","position":2,"total":11,"prev":"Database Foundations Intro To Databases","next":"Database Foundations Database Management"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/data-structures
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Database%20Foundations-%20Data%20Structures.md)

![Database Foundations: Data Structures](https://media.licdn.com/dms/image/v2/D560DAQFLnUPEBQ2s9g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1728593253052?e=2147483647&amp;v=beta&amp;t=xeFxgWZpjzfcOe-I1Bx_1PWTk0CtQqDgUZCjKOJ1KSg)

# Database Foundations: Data Structures

> This course focuses on seven core concepts: data types, designing a normalized database, identifying rows with primary keys, linking data with foreign keys, formalizing data relationships, indexes, and constraints. Database expert Adam Wilbert describes techniques that database developers use to protect their data. He explains why data types are important in creating a consistent data storage envi

> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-data-structures) | 3h 41m | Beginner | 196K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (5 videos)
  - [Organizing data in a database](#organizing-data-in-a-database)
  - [What you should know](#what-you-should-know)
  - [Making the most of the exercise files](#making-the-most-of-the-exercise-files)
  - [Set up the database servers](#set-up-the-database-servers)
  - [CoderPad tour](#coderpad-tour)
- [**1. Data Types**](#1-data-types) (9 videos)
  - [Data integrity concepts](#data-integrity-concepts)
  - [The role of data types](#the-role-of-data-types)
  - [Numeric data types](#numeric-data-types)
  - [Character data types](#character-data-types)
  - [Date and time data types](#date-and-time-data-types)
  - [Additional common types](#additional-common-types)
  - [Challenge: Choosing data types](#challenge-choosing-data-types)
  - [Solution: Choosing data types](#solution-choosing-data-types)
  - [Solution: Store data in a table](#solution-store-data-in-a-table)
- [**2. Design a Normalized Database**](#2-design-a-normalized-database) (6 videos)
  - [Protect data integrity with normalization](#protect-data-integrity-with-normalization)
  - [First normal form](#first-normal-form)
  - [Second normal form](#second-normal-form)
  - [Third normal form](#third-normal-form)
  - [Denormalization considerations](#denormalization-considerations)
  - [Solution: Normalize a data table](#solution-normalize-a-data-table)
- [**3. Identify Rows with Primary Keys**](#3-identify-rows-with-primary-keys) (8 videos)
  - [Purpose of a primary key](#purpose-of-a-primary-key)
  - [Establish the table's primary key](#establish-the-tables-primary-key)
  - [Natural keys](#natural-keys)
  - [Composite keys](#composite-keys)
  - [Surrogate keys](#surrogate-keys)
  - [Challenge: Add a primary key to a table](#challenge-add-a-primary-key-to-a-table)
  - [Solution: Add a primary key to a table](#solution-add-a-primary-key-to-a-table)
  - [Solution: Alter a table's design](#solution-alter-a-tables-design)
- [**4. Link Data with Foreign Keys**](#4-link-data-with-foreign-keys) (5 videos)
  - [What are foreign keys?](#what-are-foreign-keys)
  - [Add a foreign key column to a table](#add-a-foreign-key-column-to-a-table)
  - [Create a relationship between tables](#create-a-relationship-between-tables)
  - [IDENTITY column sequences](#identity-column-sequences)
  - [Solution: Create a table constraint](#solution-create-a-table-constraint)
- [**5. Formalize Data Relationships**](#5-formalize-data-relationships) (8 videos)
  - [One-to-many relationships](#one-to-many-relationships)
  - [One-to-one relationships](#one-to-one-relationships)
  - [Many-to-many relationships](#many-to-many-relationships)
  - [Self-referencing relationships](#self-referencing-relationships)
  - [Cascade updates and deletes](#cascade-updates-and-deletes)
  - [Challenge: Link tables with keys](#challenge-link-tables-with-keys)
  - [Solution: Link tables with keys](#solution-link-tables-with-keys)
  - [Solution: Build a relationship between tables](#solution-build-a-relationship-between-tables)
- [**6. Indexes**](#6-indexes) (3 videos)
  - [Table indexes](#table-indexes)
  - [Add indexes to a table](#add-indexes-to-a-table)
  - [View index statistics](#view-index-statistics)
- [**7. Constraints**](#7-constraints) (8 videos)
  - [Validate data with constraints](#validate-data-with-constraints)
  - [Null constraints](#null-constraints)
  - [Unique constraints](#unique-constraints)
  - [Setting default values](#setting-default-values)
  - [Check constraints](#check-constraints)
  - [Challenge: Add constraints to a table](#challenge-add-constraints-to-a-table)
  - [Solution: Add constraints to a table](#solution-add-constraints-to-a-table)
  - [Solution: Set additional constraints on the data](#solution-set-additional-constraints-on-the-data)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Organizing data in a database](https://www.linkedin.com/learning/database-foundations-data-structures/organizing-data-in-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/organizing-data-in-a-database?u=76281980&t=0)** - [Adam] The most important part of [[Database Development]] is building a solid framework for housing your valuable data.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-data-structures/organizing-data-in-a-database?u=76281980&t=7)** Poorly designed data tables can make a database inefficient or worse, it could completely compromise the integrity of your data and make the contents untrustworthy.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-data-structures/organizing-data-in-a-database?u=76281980&t=17)** By learning how to properly structure your data tables, you'll go a long way towards creating a database that protects your data and increases its utility.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-data-structures/organizing-data-in-a-database?u=76281980&t=26)** Hi, my name is Adam Wilbert and I've been introducing people to the world of [[Databases]] for well over a decade.
>
> **[0:33](https://www.linkedin.com/learning/database-foundations-data-structures/organizing-data-in-a-database?u=76281980&t=33)** In my second course of the [[LinkedIn]] Learning Database Foundation series, we're going to be covering the all-important data table from top to bottom.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-data-structures/organizing-data-in-a-database?u=76281980&t=42)** If you've ever wondered how to move from a spreadsheet to a relational database, then this is the course for you.
>
> **[0:48](https://www.linkedin.com/learning/database-foundations-data-structures/organizing-data-in-a-database?u=76281980&t=48)** There's a lot of topics to cover and many tables that need building.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-data-structures/organizing-data-in-a-database?u=76281980&t=52)** So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Database Development]] (1), [[Databases]] (1), [[LinkedIn]] (1)
> **CLI Commands:** make (2)
> **Speakers:** - [adam] (1)

#### [What you should know](https://www.linkedin.com/learning/database-foundations-data-structures/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is the second in the Database Foundation series, and because of this, I expect that you're coming in with a little bit of database experience already under your belt.
>
> **[0:10](https://www.linkedin.com/learning/database-foundations-data-structures/what-you-should-know?u=76281980&t=10)** In the first course, we installed a couple of different database servers in Docker containers, connected a front-end graphical interface, and explored some concepts around creating database objects and querying data.
>
> **[0:23](https://www.linkedin.com/learning/database-foundations-data-structures/what-you-should-know?u=76281980&t=23)** If you feel comfortable with all of those topics, then you're ready to move forward here.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-data-structures/what-you-should-know?u=76281980&t=27)** If you need a refresher, on the other hand, or if you're looking at starting your journey in relational [[Database Development]], then I'd suggest beginning with Database Foundation's Intro to [[Databases]] first before continuing on here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Database Development]] (1), [[Databases]] (1)
> **CLI Commands:** docker (1)
> **Speakers:** - [instructor] (1)

#### [Making the most of the exercise files](https://www.linkedin.com/learning/database-foundations-data-structures/making-the-most-of-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/making-the-most-of-the-exercise-files?u=76281980&t=0)** - [Instructor] If you'd like to follow along throughout this course, you can find a link to download the same exercise files that I'll be using from the course's main overview page.
>
> **[0:09](https://www.linkedin.com/learning/database-foundations-data-structures/making-the-most-of-the-exercise-files?u=76281980&t=9)** Once downloaded and unzipped, you'll find this Exercise Files folder that I've placed here on my desktop, and inside are subfolders for each chapter in the course.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-data-structures/making-the-most-of-the-exercise-files?u=76281980&t=17)** Inside of here are the individual files that we'll be using.
>
> **[0:21](https://www.linkedin.com/learning/database-foundations-data-structures/making-the-most-of-the-exercise-files?u=76281980&t=21)** Some of these are going to be plain text files that can be opened up in any text editor.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-data-structures/making-the-most-of-the-exercise-files?u=76281980&t=25)** Other files have the .[[SQL]] extension, and they can be opened right inside of the RDBMS graphical interface application that we'll be using, [[Microsoft Azure|Azure]] Data Studio.
>
> **[0:35](https://www.linkedin.com/learning/database-foundations-data-structures/making-the-most-of-the-exercise-files?u=76281980&t=35)** Some of these files were written specifically for a [[Microsoft SQL Server|SQL server]] platform, and they'll have -SQLServer at the end of the file name, and other ones were written specifically for POST for SQL, and you'll see that in their name, as well.
>
> **[0:48](https://www.linkedin.com/learning/database-foundations-data-structures/making-the-most-of-the-exercise-files?u=76281980&t=48)** Now if you don't have access to the exercise files, that's all right.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-data-structures/making-the-most-of-the-exercise-files?u=76281980&t=51)** All of the commands that they contain will be displayed on the screen so you can follow along by typing and executing what's shown in each video, or if you prefer, feel free to just simply sit back and watch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Microsoft Azure|Azure]] (1), [[Microsoft SQL Server|Sql server]] (1)
> **Env Vars:** sql (3), rdbms (1), post (1)
> **Exercise Files:** exercise files (3), download the (1)
> **CLI Commands:** find (2)
> **API Endpoints:** post  (1)
> **Speakers:** - [instructor] (1)

#### [Set up the database servers](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=0)** - [Instructor] If you followed along with the first course in this series, then you probably have a couple of database servers running in Docker containers and an [[Microsoft Azure|Azure]] Data Studio environment that looks something like what I have here on the screen right now.
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=13)** Now, if you're already at this point, then you can skip this movie and go straight into chapter one.
>
> **[0:19](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=19)** For everyone else I'm going to throw all of this away and rebuild it again from scratch.
>
> **[0:24](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=24)** This will ensure that everyone is starting out on the same page so that you can follow right along with me.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=30)** First, I need to delete all of my existing connections.
>
> **[0:33](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=33)** So I'll right click on each server and choose Delete Connection and then press yes to the dialog message.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=38)** We'll do that for the [[PostgreSQL|Postgres]] server connection as well as this extra [[Microsoft SQL Server|SQL Server]] connection that I have.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=45)** Then we're not going to need the red Kinetico server group moving forward, so I'm going to right click on that and delete the group.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=52)** If you wanted to create your own SQL server and [[PostgreSQL]] groups, you would press this button that should appear right here, but in the current version of Azure Data Studio, for some reason, this icon is missing but the button is still there.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=63)** Click on that button.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=64)** You can add in your server group and choose a color that you like.
>
> **[1:07](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=67)** I've already have my two server groups so I'll just leave those in place.
>
> **[1:11](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=71)** Now we can turn our attention to Docker.
>
> **[1:14](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=74)** I want to discard all of the existing Docker containers and I can do that from the Docker dashboard.
>
> **[1:19](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=79)** You'll click on the stop button here for each of these three containers.
>
> **[1:23](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=83)** And then press the trashcan icon to delete each of them.
>
> **[1:27](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=87)** You can also perform the same tasks from the command line, and actually that's my preferred method of working.
>
> **[1:32](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=92)** So in the course exercise files in the chapter zero folder, I have a file called Server_Setup.txt.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=98)** Let's go ahead and take a look at that.
>
> **[1:40](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=100)** Now, here at the very top, I have a couple of links just to get the software if you need it.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=104)** So we have a link to Docker Desktop as well as the link to download Azure Data Studio.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=109)** Below that, we have the links to the Docker commands that we need to run.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=113)** So first, we're going to stop each of the containers and then remove them with docker rm.
>
> **[1:59](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=119)** Let me open up my command prompt tool so I can execute all of those commands.
>
> **[2:04](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=124)** So we'll start by stopping all three of our servers with docker stop, then the name of each connection.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=130)** So the first one is sqlserver2019.
>
> **[2:14](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=134)** Next, I need to stop my PostgreSQL server, and finally the Kinetico server.
>
> **[2:23](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=143)** Now we can remove all three of those containers with docker rm.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=151)** Once the three containers are removed from the system, we can recreate the two that we want for the course moving forward.
>
> **[2:36](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=156)** For that, I'm going to go back into that text file and take a look at the commands here.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=162)** Now, there's different commands whether you're running this on a [[Windows]] PC or Mac OS.
>
> **[2:46](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=166)** And really the only difference is on Windows you'll use double quotation marks here, whereas on Mac OS or [[Linux]], you'll use a single quotation mark.
>
> **[2:54](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=174)** The only other difference that we have here from what you've previously seen is we're using MSSQL_SQ_PASSWORD here to set the password for the SQL Server container.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=185)** Previously, we just used the variable name SA_PASSWORD.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=189)** [[Microsoft]] has recently changed this and just renamed it to MSSQL_SA_PASSWORD.
>
> **[3:15](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=195)** SA_PASSWORD is still going to work for the time being, but it's technically been depreciated.
>
> **[3:20](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=200)** So for any new containers moving forward, you'll want to specify MSSQL_SA_PASSWORD instead.
>
> **[3:27](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=207)** Okay, so that's the only other change from what we've seen previously.
>
> **[3:30](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=210)** I'm just going to highlight this first docker run command, which will create the SQL Server container on my system.
>
> **[3:35](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=215)** And for this we're using the 2019-latest version of SQL Server.
>
> **[3:40](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=220)** So I'll copy this to my clipboard, return back to my command prompt, and I'll execute that to create the container.
>
> **[3:48](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=228)** Once that's done, we'll go back into that script file.
>
> **[3:51](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=231)** I'll grab the second command, which is going to create our PostgreSQL container.
>
> **[3:55](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=235)** And for this, I'm using Postgres version 14.8.
>
> **[3:59](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=239)** So I'll copy that, come down to my command prompt, paste it in, and press enter to create that container.
>
> **[4:06](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=246)** At this point, we're done with the command prompt tool.
>
> **[4:07](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=247)** I'll go ahead and close this, and I'll close my script file.
>
> **[4:10](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=250)** We can now take a look inside of Docker Desktop and we should see our two containers are up and running, so everything's good there.
>
> **[4:17](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=257)** We can return back to Azure Data Studio.
>
> **[4:20](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=260)** Now we need to make the connections to those two containers here in Azure Data Studio.
>
> **[4:25](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=265)** First, I'm going to switch over to the extensions marketplace and make sure that I have the PostgreSQL extension installed.
>
> **[4:32](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=272)** If you don't have this, just do a search here and then install it when it brings up the page.
>
> **[4:37](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=277)** Now that that's installed, we go back over here to connections, and I'll actually close this tab there.
>
> **[4:42](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=282)** I'll click on this button here to create a new connection and we'll start with the SQL Server container.
>
> **[4:47](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=287)** The server is localhost.
>
> **[4:49](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=289)** We'll use the authentication type of [[SQL]] login, the username sa, and the password Adam123456 with a capital A.
>
> **[5:00](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=300)** You might have used a different password when you created your own containers.
>
> **[5:05](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=305)** I'll choose this option to remember the password.
>
> **[5:07](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=307)** For the Encrypt property, which is a new property here in Azure Data Studio, I'm going to change this to optional or false.
>
> **[5:13](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=313)** We're not going to worry about data encryption between our connection here in Azure Data Studio.
>
> **[5:19](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=319)** Then I'll add this into the server group of SQL Server and we'll name our connection SQL Server 2019.
>
> **[5:28](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=328)** Finally, I'll press over to the advanced options and I'll scroll down to find the port property here.
>
> **[5:33](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=333)** And we'll connect to port 1401 and press okay.
>
> **[5:37](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=337)** Press the connect button, and that should connect over here and place it over in the connection right there.
>
> **[5:43](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=343)** I can expand that and see the [[Databases]] folder for that connection.
>
> **[5:46](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=346)** All right, let's close this tab, and we'll create one more connection to the PostgreSQL container.
>
> **[5:51](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=351)** We'll switch the connection type to PostgreSQL.
>
> **[5:54](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=354)** The server name is also localhost.
>
> **[5:57](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=357)** The authentication type will be password, username Postgres.
>
> **[6:02](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=362)** The password is, again, Adam123456 with a Capital A.
>
> **[6:06](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=366)** We'll remember the password.
>
> **[6:08](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=368)** We'll place this into the PostgreSQL server group over here in the sidebar, and I'll name it PostgreSQL.
>
> **[6:16](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=376)** Finally, we'll go to the advanced tab, we'll put in the port, 5401.
>
> **[6:21](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=381)** Press okay, and press connect.
>
> **[6:23](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=383)** And that should create another connection here for the Postgres server over there.
>
> **[6:27](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=387)** So now the only other thing we need to do is create our databases on each of these servers.
>
> **[6:32](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=392)** Let's start with SQL Server.
>
> **[6:33](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=393)** I'll right click on it and choose new query.
>
> **[6:36](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=396)** And I'll create a new database called TwoTrees.
>
> **[6:41](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=401)** I'll press run to create that database.
>
> **[6:43](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=403)** When the command completes successfully, I can refresh my server connection list over here and see that database appear there in the list.
>
> **[6:50](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=410)** I'll close this tab and we'll do the same thing for PostgreSQL.
>
> **[6:53](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=413)** Right click on it, choose new query, create database twotrees.
>
> **[7:01](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=421)** I'll press the run button here.
>
> **[7:02](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=422)** That will create the database on the server.
>
> **[7:05](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=425)** There it is, and I can refresh my connection and make sure that it appears here in the list of databases.
>
> **[7:10](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=430)** And with that, we've got everything set up and ready to go.
>
> **[7:14](https://www.linkedin.com/learning/database-foundations-data-structures/set-up-the-database-servers-19276081?u=76281980&t=434)** If you want a more thorough explanation of all of these steps, I'll refer you to the corresponding movies in the course, Database Foundations, Intro to Databases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (9), [[PostgreSQL]] (9), [[Microsoft Azure|Azure]] (7), [[PostgreSQL|Postgres]] (4), [[Databases]] (4)
> **CLI Commands:** docker (11), make (3), rm (2), find (1)
> **Env Vars:** sql (10), sa_password (2), mssql_sa_password (2), mssql_sq_password (1)
> **UI Navigation:** click on (6), scroll down (1), in the sidebar (1), go to (1)
> **Tools:** command prompt (4), docker desktop (2), command line (1)
> **Prerequisites:** install (1), set up (1)
> **File Paths:** server_setup.txt (1)
> **Ports:** port 1401 (1)

#### [CoderPad tour](https://www.linkedin.com/learning/database-foundations-data-structures/coderpad-tour?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/coderpad-tour?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the challenge links in the courses table of contents.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-data-structures/coderpad-tour?u=76281980&t=7)** Each challenge includes instructions and a code editor that you can use to create and test your own solution to the challenge.
>
> **[0:15](https://www.linkedin.com/learning/database-foundations-data-structures/coderpad-tour?u=76281980&t=15)** These challenges are hosted by Coder Pad and they appear in the same area of the course page where you watch the videos.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-data-structures/coderpad-tour?u=76281980&t=22)** We recommend using a desktop browser for the best experience with code challenges, but you can use the [[LinkedIn]] Learning mobile app if you prefer.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-data-structures/coderpad-tour?u=76281980&t=30)** Now, the code Challenge screen has three different areas.
>
> **[0:33](https://www.linkedin.com/learning/database-foundations-data-structures/coderpad-tour?u=76281980&t=33)** We have the instructions in the top left, a console for the output in the bottom left, and a code editor for your answer on the right.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-data-structures/coderpad-tour?u=76281980&t=41)** You can use the drag handles between each of these panels in order to reallocate space however you'd like.
>
> **[0:48](https://www.linkedin.com/learning/database-foundations-data-structures/coderpad-tour?u=76281980&t=48)** To get even more horizontal space for the code editor, you can collapse the Chorus's table of contents on the left.
>
> **[0:55](https://www.linkedin.com/learning/database-foundations-data-structures/coderpad-tour?u=76281980&t=55)** Now, each challenge has instructions that include a description of the challenge and the challenge's desired result.
>
> **[1:00](https://www.linkedin.com/learning/database-foundations-data-structures/coderpad-tour?u=76281980&t=60)** Your job is to create your answer in the code editor on the right.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-data-structures/coderpad-tour?u=76281980&t=64)** When you click on the test my code button, you'll see a message indicating whether your code returned a correct result and a text-based version of the return data.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-data-structures/coderpad-tour?u=76281980&t=73)** Now, if your answer does not create a correct result, you'll see a message indicating that here.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-data-structures/coderpad-tour?u=76281980&t=78)** Your task is to update the code in order to get a correct answer.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-data-structures/coderpad-tour?u=76281980&t=82)** I'll change the select statement to SELECT MAX(price) As Price From Dishes.
>
> **[1:30](https://www.linkedin.com/learning/database-foundations-data-structures/coderpad-tour?u=76281980&t=90)** I'll test my code again, and this time I get the correct output for this challenge.
>
> **[1:36](https://www.linkedin.com/learning/database-foundations-data-structures/coderpad-tour?u=76281980&t=96)** Now, if any messages are too long to fit in this console window, you can scroll sideways to see all of the text using a slider here on the bottom.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-data-structures/coderpad-tour?u=76281980&t=104)** When you finish each code challenge, return to the courses table of contents, and click to the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Env Vars:** select (1), max (1)
> **UI Navigation:** click on (2)
> **SQL:** select (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)


### 1. Data Types

[↑ Back to Table of Contents](#table-of-contents)

#### [Data integrity concepts](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=0)** - [Instructor] [[Databases]] are built to store data.
>
> **[0:02](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=2)** And when you go through all of the trouble of setting up a server and preparing a database, you want to ensure that the data that eventually goes in is trustworthy and that it has integrity.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=14)** But what does it mean for data to have integrity?
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=17)** To me, it means that I can rely on the data being accurate, complete, and consistent.
>
> **[0:23](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=23)** With proper [[Database Design]], we can build in a number of different systems that help maintain a trustworthy data repository.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=31)** To do so, we need to approach database design without a well-thought-through plan, a construction blueprint of sorts, and not just start putting pieces together on the fly.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=42)** By planning ahead and taking advantage of the technologies provided by modern relational [[Database Management]] systems, we can build a solid home for our data that protects it from becoming untrustworthy.
>
> **[0:55](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=55)** So this is the overarching theme for this course, learning how to build a database that maintains the integrity of your valuable data.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=64)** The [[Data Structures]] that you create to house your data will go a long way to providing these kinds of protections.
>
> **[1:10](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=70)** Let's take a look at some examples.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=73)** Accuracy describes how close a stored value is to its intended value.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=78)** In an ideal world, these would be exactly the same, but we've all made typos, accidentally misspelled a [[Microsoft Word|word]], or typed in a number incorrectly.
>
> **[1:27](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=87)** Automated sensors can have bugs or become uncalibrated and start recording incorrect measurements.
>
> **[1:33](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=93)** Rather than just accepting every value that's entered, the database can be built in a way that's smarter.
>
> **[1:39](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=99)** By evaluating data for accuracy at the point of entry, you can build in validation rules and checks to help identify potentially inaccurate values and then not allow it to be stored in the first place.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=112)** Completeness is a measure of how thorough every record is.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=116)** Incomplete data impacts the usefulness of the entire dataset beyond just the row that might be affected.
>
> **[2:03](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=123)** There shouldn't be any gaps or missing values in the data whenever possible.
>
> **[2:08](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=128)** For instance, if I wanted to find out how much revenue a particular store made in March and that value is missing from the database, then not only can I not answer that specific question, but I also can't find out how much money the company made for the entire quarter or how much tax to pay for the fiscal year.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=145)** Even if every other store has revenue reported, the entire dataset is useless for these kinds of larger questions, all because of one missing value.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=155)** There's a trickle-down effect that happens when important values are absent from a dataset, so preventing this situation from occurring is critical to having a useful, trustworthy database.
>
> **[2:46](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=166)** And finally, there's the problem of consistency.
>
> **[2:50](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=170)** When you find two values in a database that should be the same but aren't, it's difficult to know which one is correct.
>
> **[2:57](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=177)** Let's say that I have the monthly sales for a store recorded as $1,000 every day for an entire week, but then I also have the total weekly sales reported as $10,000.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=189)** Clearly there's a discrepancy here where the numbers just don't add up.
>
> **[3:13](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=193)** So did the store make $7,000 as indicated by adding up the reported daily revenues or 10,000 for the entire week?
>
> **[3:22](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=202)** Which one of these is correct?
>
> **[3:24](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=204)** Once you have to ask that question, you start wondering if perhaps both are wrong and the true value is something else entirely.
>
> **[3:31](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=211)** Data discrepancies immediately call the integrity of the entire dataset into question.
>
> **[3:37](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=217)** And you never want to be in a position where you can't separate truth from fiction.
>
> **[3:42](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=222)** Luckily, many of these issues can be addressed through the careful design of the database right from the beginning.
>
> **[3:48](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=228)** To address accuracy problems, constraints and rules can be added.
>
> **[3:53](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=233)** Values must fall within an acceptable range before they're stored and follow the rules dictated by specific data types.
>
> **[4:02](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=242)** For completeness, you can enforce required data columns and maintain relationships to data that's already stored as a way to minimize the amount of new values that need to be entered for every row.
>
> **[4:13](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=253)** And to make sure that your data is consistent, it's possible to establish standardized data formats and lookup lists of acceptable values.
>
> **[4:21](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=261)** For instance, names must be spelled according to a verified list.
>
> **[4:25](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=265)** Also, you can not store the results of calculations, but instead store the raw input values only, and rerun calculations whenever you need them.
>
> **[4:36](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=276)** With this kind of approach to [[Database Development]], you can address and prevent many of the problems that make a dataset untrustworthy.
>
> **[4:44](https://www.linkedin.com/learning/database-foundations-data-structures/data-integrity-concepts?u=76281980&t=284)** Databases that are thoughtfully designed are easier to full useful information from, easier to manage, and easier to maintain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2), [[Database Design]] (2), [[Database Management]] (1), [[Data Structures]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** find (3), make (3)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** for instance (2)
> **Speakers:** - [instructor] (1)

#### [The role of data types](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=0)** - [Instructor] When we begin building [[Databases]], one of the first questions we'll need to answer is what kind of data will need to be stored.
>
> **[0:08](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=8)** Being specific about the type is the first line of defense in protecting the integrity of your data.
>
> **[0:15](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=15)** The basic Structured Query Language table-creation statement looks something like this.
>
> **[0:20](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=20)** After the keywords CREATE TABLE, you'll name the new table.
>
> **[0:24](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=24)** This part is easy because you can name it whatever you want.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=28)** Choose a name that's descriptive of the data that will be stored in it and make it meaningful to your business.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=34)** Next, list out all of the different columns that'll hold information about the various attributes that'll make up each data row.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=42)** In this table for product data, I want to store each product's ID number, it's name, the supplier that manufactures the product, and its price.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=52)** Just like the table name, column names can be whatever makes sense for your business.
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=57)** Finally, we come to the data type declarations for each of these columns.
>
> **[1:01](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=61)** This is really the only part of the CREATE TABLE command that requires a knowledge of relational [[Database Design]].
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=68)** So let's focus on what all of this means and see how the decisions that you make at this point in the table-creation process can help maintain a trustworthy dataset.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=78)** A data type is simply a specification of what kinds of information the database will allow in each table column.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=85)** In broad terms, it's the data type that determines whether a column is storing text or numbers or dates or image files or a video clip or, well, whatever else it is that you want to store.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=97)** By specifying the type of data that will be allowed in each column, you go a long way towards keeping everything organized.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=104)** So when you want to go looking for that price of a product, you won't accidentally find the supplier name instead since text values cannot be stored in a column that will only accept numeric data.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=116)** In a roundabout way, data types also determine how much disc space to allocate to the storage of your information.
>
> **[2:02](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=122)** And we'll how that comes into play as we dig deeper into the data type options.
>
> **[2:07](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=127)** Data types can get pretty specific.
>
> **[2:09](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=129)** Some data types will only allow you to store whole numbers and others will allow you to store special international text characters that support a wide variety of languages.
>
> **[2:19](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=139)** Data types also come in a variety of precisions.
>
> **[2:22](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=142)** For instance, some time-based data types are accurate to the second and others will keep perfect time down to 100 nanoseconds.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=151)** While it might seem that being more accurate is always better, keep in mind that higher precision comes at a cost of longer processing times and higher storage requirements.
>
> **[2:41](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=161)** Choosing the best data types for your data comes down to the business needs and rules that you establish for your data.
>
> **[2:48](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=168)** For instance, if you want to record when employees are hired, do you really need to be precise down to the exact hour, minute, and second that they signed their acceptance paperwork?
>
> **[2:58](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=178)** Probably not.
>
> **[2:59](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=179)** Choosing a data type that allows you to store just the date is almost certainly the better option here.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=185)** Every relational [[Database Management]] platform includes built-in data types, which can be grouped into a couple of different categories.
>
> **[3:13](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=193)** We'll look at the details of each category throughout this chapter.
>
> **[3:16](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=196)** As with the other courses in this database foundation series, we're going to be using two different database platforms to explore these concepts.
>
> **[3:25](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=205)** [[Microsoft SQL Server|SQL Server]] is a licensed, enterprise, great RDBMS from [[Microsoft]], and [[PostgreSQL]] is an open source database platform that's popular in enterprise, academic, and scientific circles.
>
> **[3:38](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=218)** Together, they represent two of the most popular platforms in use today.
>
> **[3:42](https://www.linkedin.com/learning/database-foundations-data-structures/the-role-of-data-types?u=76281980&t=222)** By comparing these two database platforms, SQL Server and PostgreSQL, you'll see that there are many commonalities between them and also some areas where they take slightly different approaches to storing data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (2), [[PostgreSQL]] (2), [[Databases]] (1), [[Database Design]] (1), [[Database Management]] (1)
> **Env Vars:** create (2), table (2), sql (2), rdbms (1)
> **CLI Commands:** make (3), find (1)
> **Analogies:** for instance (2), just like (1)
> **SQL:** create table (2)
> **Definitions:** is a  (1), is an  (1)
> **Documentation:** specification (1)
> **Warnings:** keep in mind (1)

#### [Numeric data types](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=0)** - [Instructor] The most common type of data stored in a database is almost certainly numeric values.
>
> **[0:06](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=6)** Everything from [[Financial Data]] to scientific measurements, to video game scores are recorded as numbers, and [[Relational Databases]] provide many different ways to store these values.
>
> **[0:18](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=18)** Now at first you might be thinking that numbers are numbers.
>
> **[0:21](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=21)** How many different ways can you possibly store a number?
>
> **[0:24](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=24)** But when you look really close at their details, you'll find that numeric data can be categorized in different ways.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=30)** And building a database table that focuses on the one, single category of a number needed for a particular task will help keep things organized and efficient.
>
> **[0:40](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=40)** There are three main variations to choose from when storing numeric data: exact integers, exact decimals, and approximate numbers.
>
> **[0:50](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=50)** Let's take a look at each one.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=52)** Exact integers are going to be used most often.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=56)** Integers are whole numbers that do not include a fractional component.
>
> **[0:59](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=59)** So, nothing after a decimal point.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=62)** In this category, you'd have some decisions to make based off of the range of values that you need to store.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=68)** If the numbers that you'll be storing in your table will always be within the range of -32,768 up to positive +32,767, then you can use these smallint datatype to store these values.
>
> **[1:24](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=84)** These range cutoffs might seem arbitrary at first, but it's actually very significant in computer science.
>
> **[1:31](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=91)** This range includes 65,536 unique values, which is the capacity of 16 bits or two bytes of computer storage.
>
> **[1:41](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=101)** In fact, each step up in a datatype scale represents an incremental step in the amount of storage required to accommodate all of those possible values.
>
> **[1:51](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=111)** In [[Database Design]], everything is eventually dictated by the fundamentals of computing, and choosing the smallest datatype that will accommodate your needs will keep your file sizes down and access speeds up.
>
> **[2:04](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=124)** If the range of numbers that you need to store will exceed those available in the smallint datatype, then you can move up to the standard four byte integer.
>
> **[2:13](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=133)** Often abbreviated as just int, this datatype will allow you to store values from about negative 2 billion up to just above positive 2 billion.
>
> **[2:24](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=144)** The integer datatype is the most common found in relational databases.
>
> **[2:29](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=149)** And if you need to store integers outside of this range, then you can move up to the bigint datatype.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=155)** This will accept values between negative and positive nine quintillion.
>
> **[2:40](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=160)** Doing so will double the storage requirements again.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=162)** And each value stored in a column with this datatype will consume eight bytes of storage.
>
> **[2:48](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=168)** So these are the common integer datatypes, but what if you do need to store fractions or decimals?
>
> **[2:55](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=175)** Well, there are separate datatypes for those cases.
>
> **[2:58](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=178)** Decimal and numeric are functionally identical, and most RDBMS platforms support either datatype name.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=185)** These are configurable using two parameters that you'll define when you create your data column.
>
> **[3:10](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=190)** Because of this, they are sometimes referred to as arbitrary precision numbers.
>
> **[3:15](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=195)** To create a column with this datatype, inside a parenthesis, you'll first specify the precision or how many significant digits, from one to 38, your column will allow.
>
> **[3:26](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=206)** This is the total number of digits in the number.
>
> **[3:29](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=209)** Once the precision is established, you'll also specify a scale, or how many of those digits will fall after the decimal point.
>
> **[3:37](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=217)** It could be none of them, all of them, or something in between.
>
> **[3:42](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=222)** For instance, in order to store the value of PI to five decimal places, you would need a decimal (6,5) datatype.
>
> **[3:51](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=231)** This will allow six total digits with five of those falling after the decimal point.
>
> **[3:57](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=237)** Since the specific configuration of the decimal or numeric datatypes are configurable, they'll vary in the amount of storage space required depending on how many digits or the precision that they're using.
>
> **[4:09](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=249)** One to nine digits will consume five bytes of storage for every value stored in the table.
>
> **[4:14](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=254)** Between 10 and 19 digits will consume nine bytes each and so on.
>
> **[4:19](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=259)** Again, limiting the datatype to just the size needed for your data will keep your database file sizes small, and your database efficient.
>
> **[4:28](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=268)** The approximate number types are used far less often than the exact numeric types.
>
> **[4:33](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=273)** They go by different names depending on the RDBMS platform that you're working with and can include float, real, single and double precision.
>
> **[4:42](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=282)** These number types are used in specialized computer science applications, and store data values inexactly.
>
> **[4:49](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=289)** These values can also change depending on the processor and the operating system configurations that they're used with.
>
> **[4:55](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=295)** So they're not really appropriate to use in most circumstances, and especially without a deep understanding of the benefits and limitations of floating point mathematics.
>
> **[5:05](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=305)** Generally, you're going to stick with the exact integer or exact decimal datatypes for all of your number of storage needs.
>
> **[5:12](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=312)** While all relational [[Database Management]] platforms accept these datatypes, they may sometimes go by different names depending on the platform.
>
> **[5:21](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=321)** Some platforms even allow you to call the datatype by alternate names.
>
> **[5:26](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=326)** I've listed out the preferred names for each of the platforms that we'll work with in this course, and the alternate names in parentheses.
>
> **[5:33](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=333)** For instance, [[Microsoft SQL Server|SQL server]] prefers the int datatype, but you can also create a table using the integer datatype, spelled out, as an acceptable alternative, and the database engine will understand that these are the same thing.
>
> **[5:46](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=346)** The PostgresSQL platform, on the other hand, prefers the term integer, but will also accept int or int4 as alternative names.
>
> **[5:55](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=355)** On SQL Server, you would typically use the decimal datatype, but could also specify numeric.
>
> **[6:02](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=362)** On [[PostgreSQL]], you would normally do the opposite, with numeric being the preferred standard, but decimal is also acceptable.
>
> **[6:10](https://www.linkedin.com/learning/database-foundations-data-structures/numeric-data-types?u=76281980&t=370)** So here and there you'll find slight differences in how each platform handles numeric data, but the fundamentals of how they work and the values that they'll store will be exactly the same.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Relational Databases]] (2), [[Microsoft SQL Server|Sql server]] (2), [[Financial Data]] (1), [[Database Design]] (1), [[Database Management]] (1)
> **Env Vars:** rdbms (2), sql (2)
> **CLI Commands:** find (2), make (1)
> **Analogies:** for instance (2)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Character data types](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=0)** - [Instructor] From employee names to product descriptions, much of the data that you'll want to store is text-based.
>
> **[0:06](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=6)** In database terminology, these are called character strings.
>
> **[0:11](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=11)** When working with character data, we're mainly concerned with the number of individual characters that we need in order to store each value.
>
> **[0:19](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=19)** This is like counting up the number of letter tiles in your hand while playing a crossword board game.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=25)** In order to play longer words, you'll need more tiles.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=28)** To play a shorter [[Microsoft Word|word]], you'll need fewer tiles.
>
> **[0:32](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=32)** To store text in the database, the [[SQL]] standard defines two main data types, fixed length and variable length, and each of these are configurable to meet your needs.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=43)** Char is a fixed length data type that'll store exactly the number of characters that you specify by replacing the letter N with your number in the parentheses.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=52)** If the number of characters in the string is less than the number allowed, then the remainder is filled in with empty space characters and the actual storage on the hard drive is not reduced.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=63)** Varchar, on the other hand, is a variable length data type.
>
> **[1:07](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=67)** You can store up to the number of characters specified in the parentheses, but the storage requirements are tied to the actual number of characters used in each string.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=77)** If we use these two data types to create a couple of columns, you can see the difference.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=82)** Here I have two columns to store first name values.
>
> **[1:26](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=86)** The first one uses a fixed length char(5) datatype.
>
> **[1:30](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=90)** The second one uses the variable length varchar(5).
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=94)** All of these names can be you stored in either column, but the shorter names of Adam and Joe are padded with extra spaces in the first column so that every text string in the first column consists of exactly five characters.
>
> **[1:48](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=108)** The varchar column only stores the actual characters used.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=112)** So, we have four characters in the first row for Adam, then three characters for Joe, and five for Susan and James.
>
> **[2:00](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=120)** This makes varchar a little bit more efficient when storing text strings with different numbers of characters.
>
> **[2:07](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=127)** There are some considerations to make when deciding on the appropriate data type for your text-based data.
>
> **[2:13](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=133)** In most applications, the varchar data type is the one that you should be choosing, unless you know for a fact that each value in the column will be exactly the same number of characters.
>
> **[2:23](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=143)** Columns that store things like a 16 character serial number, or a two letter state abbreviation, where you know for certain that every value in the column will have the same number of characters are good candidates for the fixed length data type char.
>
> **[2:39](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=159)** Some [[Database Management]] platforms, like [[Microsoft SQL Server|SQL Server]], will see a performance increase when using the char data type over varchar.
>
> **[2:47](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=167)** Others, like [[PostgreSQL]], will have no such performance benefit, so it's best to just choose based off of your data.
>
> **[2:54](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=174)** If it's variable in nature, then use varchar, if it's not, then use char.
>
> **[3:01](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=181)** As far as the number of characters to allow, you need to consider your own data.
>
> **[3:06](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=186)** You should aim to provide enough space for every value that you're likely to need to store.
>
> **[3:11](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=191)** Now, this can be a bit of a guessing game, but choosing a value for N that's too small can be problematic.
>
> **[3:17](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=197)** If you try and add a value that exceeds the number of characters allowed, the database engine will return an error and the value will not be saved into the table.
>
> **[3:26](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=206)** Neither column in the previous example would allow you to store the name Bethany, for example, since it would require more than five letters.
>
> **[3:34](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=214)** But how many letters do you need?
>
> **[3:36](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=216)** Is 20 enough for a first name?
>
> **[3:38](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=218)** Certainly 100 would be plenty, right?
>
> **[3:41](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=221)** This is a question that can only be answered with an analysis of your own data and by making some projections into the values that you might need to store in the future.
>
> **[3:50](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=230)** Ideally. you would want to allow enough space to store all of the text that you need for each column, but not by an excessive amount.
>
> **[3:58](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=238)** Sometimes though, you won't want to set a limit, and relational database platforms provide ways for handling that situation, as well.
>
> **[4:06](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=246)** When you need to store unlimited number of characters, the kinds of long form texts needed for full blog posts or the text of a manuscript or a book, you want to make use of the data type specific to your RDBMS.
>
> **[4:18](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=258)** In SQL server, the varchar max data type would be used for this.
>
> **[4:23](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=263)** On PostgreSQL, the text data type allows for a similar unlimited length character string.
>
> **[4:29](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=269)** Other database platforms might use a different name for this type of data, so consult your documentation for the unlimited text length option to use on other systems.
>
> **[4:39](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=279)** Like with the numeric data types, each RDBMS may use slightly different names for character data types.
>
> **[4:46](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=286)** SQL Server typically uses char and varchar.
>
> **[4:50](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=290)** PostgreSQL tends to use character and character vary for the names.
>
> **[4:55](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=295)** Although each name is technically interchangeable and will be recognized on either platform, it's best to stick with the standard conventions for your RDBMS whenever possible.
>
> **[5:05](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=305)** Now, there's one more consideration that you might need to make when storing text strings, depending on the platform that you're working on.
>
> **[5:12](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=312)** SQL Server and a few other platforms make a distinction between standard text characters and Unicode characters.
>
> **[5:20](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=320)** The specific character sets used by char and varchar depend on the correlation settings of the database.
>
> **[5:26](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=326)** For [[Databases]] that need to support multiple languages, say a mix of Arabic, Latin and Japanese characters, then you'll need to switch to the nchar and nvarchar variations.
>
> **[5:38](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=338)** The letter N prefix in these names stands for the word national and this provides support for the full set of Unicode characters in the same data column.
>
> **[5:48](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=348)** Databases built on the PostgreSQL platform though, support Unicode with the standard char and varchar, so there's really no equivalent of this in [[PostgreSQL|Postgres]].
>
> **[5:58](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=358)** Finally, when we talk about text characters, we're not limiting ourselves to just letters.
>
> **[6:03](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=363)** Occasionally, you'll see what looks like numerical fields stored as text.
>
> **[6:08](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=368)** Postal codes and phone numbers are commonly stored in text fields of a fixed length.
>
> **[6:14](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=374)** The general rule is if you wouldn't perform math operations against the number, then treat it as a character string in your database.
>
> **[6:22](https://www.linkedin.com/learning/database-foundations-data-structures/character-data-types?u=76281980&t=382)** And that makes sense, since you would never find yourself in a situation where you would need to add two phone numbers together, so in that sense, they act more like words, the numbers anyway.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (4), [[PostgreSQL]] (4), [[Microsoft Word|Word]] (2), [[Databases]] (2), [[SQL]] (1)
> **Env Vars:** sql (5), rdbms (3)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is a  (3), stands for (1)
> **Best Practices:** it's best to (2), general rule (1)
> **Prerequisites:** you'll need (3)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Date and time data types](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=0)** - [Instructor] Dates and times are another common type of data that you'll need to store in your [[Relational Databases]], and the [[SQL]] language provides a number of different options, depending on the granularity that you require.
>
> **[0:12](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=12)** You have the option of only storing a date without a time component, or just a time with no date component.
>
> **[0:19](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=19)** All RDBMS platforms support these basic date and time datatypes.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=25)** Where things get a little bit trickier is when you want to combine a date and a time in a single column.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=31)** For this, different RDBMS platforms will use a variety of different datatype names.
>
> **[0:36](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=36)** On [[PostgreSQL]], you'll either use the timestamp or timestamp with time zone datatypes, depending on whether or not you want to include the time zone information as well.
>
> **[0:48](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=48)** On [[Microsoft SQL Server|SQL Server]], the same values will be stored in columns with the datetime2, or datetimeoffset datatypes.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=56)** There are additional options on each of these datatypes that allow you to customize the precision.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=62)** And in fact, the default is to record times down to 100 nanoseconds in SQL Server and one microsecond in PostgreSQL, but for most use cases recording the time to the second is precise enough, so you might specify a zero in parentheses after the datatype name in order to only record time to the exact second.
>
> **[1:24](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=84)** So, let's take a look at that on our database servers.
>
> **[1:28](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=88)** In [[Microsoft Azure|Azure]] Data Studio, I'm going to select the two trees database that's in the SQL Server instance.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=94)** And then we'll come up to the file menu and choose open file.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=98)** In the chapter one folder, I have two different files: one that's set up for SQL Server and the other one that's set up for PostgreSQL.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=105)** I'm working on the SQL Server database, so I'll select date, time, SQL Server and press open.
>
> **[1:51](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=111)** That'll load up a script that'll allow us to experiment with our date and time datatypes.
>
> **[1:57](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=117)** First, I'm going to set up a new table called time experiment, and it's just going to have two columns: one called column A and one called column B.
>
> **[2:06](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=126)** Column A will use the date, time offset datatype.
>
> **[2:09](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=129)** So this'll store dates and times with time zones.
>
> **[2:13](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=133)** And it'll be precise to 100 nanoseconds.
>
> **[2:17](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=137)** Column B is going to use the date, time offset, but will specify a precision of zero.
>
> **[2:22](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=142)** This'll round the times to the nearest second.
>
> **[2:26](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=146)** Once I create this table, we're going to insert a new row into it.
>
> **[2:29](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=149)** I'm going to use the current system date and time, and apply that into both columns.
>
> **[2:34](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=154)** To do that, I'm using the get date function in SQL Server.
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=158)** Finally, we'll select that row back out of the table.
>
> **[2:41](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=161)** Let's highlight lines two through 12, and press run to execute all of that.
>
> **[2:46](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=166)** And here I can see the result.
>
> **[2:48](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=168)** The times are being stored in UTC time.
>
> **[2:50](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=170)** So this is effectively equivalent to Greenwich Mean Time.
>
> **[2:54](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=174)** In column A, you can see that the time is recorded to 100 nanoseconds.
>
> **[2:59](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=179)** If I take a look at the time in column B, you can see that it's been rounded down.
>
> **[3:03](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=183)** Now, date and time values can be entered into your database in a variety of different ways.
>
> **[3:08](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=188)** Let's scroll down in the script a little bit until I get to line number 14.
>
> **[3:13](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=193)** When entering in data, you're going to want to make sure that your dates and times get wrapped inside of single quotation marks.
>
> **[3:19](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=199)** The default value for dates follows the ISO standard of a four-digit year, a hyphen, a two-digit month, another hyphen and a two-digit day, but most [[Database Systems]] will also understand other formats, such as this one here that uses the abbreviation for January.
>
> **[3:37](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=217)** Depending on your computer's region settings, things can get a little bit confusing when using just numbers.
>
> **[3:43](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=223)** For instance, the date 01/02/03 could refer to January 2nd, 2003; February 1st, 2003; or February 3rd, 2001, depending on the mode that your database is in.
>
> **[3:59](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=239)** So for the best results, you'll want to stick with the standard four-digit year, two-digit month and two-digit day, all separated by hyphens when entering in your dates.
>
> **[4:09](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=249)** Times on the other hand, are usually entered in on a 24 hour clock, like I have here on line number 19.
>
> **[4:16](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=256)** If you wanted to use a 12 hour clock, you could specify PM after it.
>
> **[4:20](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=260)** So for instance, here on line 20, I'm specifying 2:25 PM.
>
> **[4:25](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=265)** Let's highlight lines 15 all the way down to 21 to insert some new rows into that table.
>
> **[4:31](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=271)** Then, I'm going to scroll back up here and rerun line number 12 in order to see the results.
>
> **[4:36](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=276)** So here I can see all of the new values that we just entered in column A.
>
> **[4:40](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=280)** They've all been entered in correctly as January 2nd, 2020, regardless of the format that I supplied up here in the script.
>
> **[4:48](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=288)** We can also see that the two times that I supplied are equivalent at 14 hours and 25 minutes on a 24 hour clock.
>
> **[4:56](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=296)** So that's how you would work with your date and time data inside of SQL Server database.
>
> **[5:01](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=301)** Let's take a look at the PostgreSQL database now.
>
> **[5:04](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=304)** I'm going to select the two trees database in the [[PostgreSQL|PostgreS]] Server, and then come up to file and choose open file again.
>
> **[5:10](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=310)** This time I'll choose date, time PostgreSQL, and press open.
>
> **[5:15](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=315)** Now this script is identical to the script that we ran on the SQL Server instance.
>
> **[5:19](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=319)** The only difference here is that we're using different data types.
>
> **[5:23](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=323)** So column A is going to be timestamp with time zone and column B will be timestamp zero with time zone.
>
> **[5:31](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=331)** We're going to insert these same values using the now function in PostgreSQL, and take a look at the table again.
>
> **[5:37](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=337)** So let's highlight lines two through 12 and press run.
>
> **[5:40](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=340)** And we can see similar results to what we got on our SQL Server instance.
>
> **[5:44](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=344)** Here, we have the full version of the time.
>
> **[5:47](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=347)** And here, in column B, we have the rounded version of the time.
>
> **[5:50](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=350)** Just like on SQL server, though, all of the data gets entered in, in exactly the same way.
>
> **[5:55](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=355)** So we can enter in the exact same date and times that we entered previously.
>
> **[6:00](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=360)** Let's highlight lines 15 through 21 and press run.
>
> **[6:03](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=363)** Then I'll scroll back up and select everything out of the table again.
>
> **[6:08](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=368)** Here, we'll see the exact same results we got on the SQL Server instance.
>
> **[6:12](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=372)** So that's how you can work with your dates and times in PostgreSQL.
>
> **[6:16](https://www.linkedin.com/learning/database-foundations-data-structures/date-and-time-data-types?u=76281980&t=376)** When you're done experimenting with both of these, make sure you scroll down to the bottom of the script and run line number 23 to drop this table when you're finished.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (12), [[PostgreSQL]] (7), [[Relational Databases]] (1), [[SQL]] (1), [[Microsoft Azure|Azure]] (1)
> **Env Vars:** sql (13), rdbms (2), utc (1), iso (1)
> **UI Navigation:** select the (2), scroll down (2)
> **Analogies:** for instance (2), such as (1), just like (1)
> **Prerequisites:** set up (3), you'll need (1)
> **CLI Commands:** make (2)
> **Ports:** :25 (1)
> **Speakers:** - [instructor] (1)

#### [Additional common types](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=0)** - [Instructor] There are many additional types of data that can be stored in a relational database, and they can get quite specialized.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=7)** Support for these types will vary among different RDBMS platforms, though.
>
> **[0:11](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=11)** So not every platform will have built-in support for every type.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=16)** One common type is called a Boolean.
>
> **[0:19](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=19)** This is used to store values such as true/false or on/off.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=25)** This kind of data is often represented in user interfaces as a checkbox or a radio button where the value is either selected or not selected.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=34)** In [[PostgreSQL]], you would use the Boolean data type for this.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=38)** But in [[Microsoft SQL Server|SQL Server]], it's called a bit data type.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=42)** When you want to store currency values, you'll add a money column to your tables.
>
> **[0:47](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=47)** This type is interesting because it has different behaviors between SQL Server and PostgreSQL.
>
> **[0:53](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=53)** On SQL Server, money values are stored as decimals and they're accurate to 1/10000 of the monetary unit that they represent.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=62)** However, there is no distinction between the currency type and no currency symbols are stored with the number.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=68)** In PostgreSQL, the money data type does not support fractional cents and is tied to the region setting of the server that it's implemented on.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=77)** So here in the United States, the money data type would report U.S. dollars.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=82)** But if you move the same database to a server in Japan, it would suddenly start reporting values in Yen.
>
> **[1:29](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=89)** For these reasons, many developers working with PostgreSQL suggest avoiding the money data type for storing currency values, and instead, use the regular numeric data type instead.
>
> **[1:41](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=101)** When you want to store files inside of your database, you can embed the binary data right in your table.
>
> **[1:47](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=107)** In a table storing employee information, for example, you could create a column to store the photograph used on the employee's ID badge.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=116)** In PostgreSQL, this type of data uses the bytea type and in SQL Server, you would use the varbinary(max) data type.
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=125)** [[Relational Databases]] can also store information about geometry.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=130)** [[PostgreSQL|Postgres]] supports separate data types for storing (x,y) coordinate pairs as points, lines, or polygons.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=138)** SQL Server bundles all of these together into a single geometry data type.
>
> **[2:23](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=143)** These are all some of the common types that have shared support in PostgreSQL and SQL Server, even if there is some variation in how they're implemented.
>
> **[2:32](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=152)** But RDBMS vendors also create additional data types that aren't common on other platforms.
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=158)** And it's one of the ways that they try and differentiate their product from other servers on the market.
>
> **[2:44](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=164)** On the SQL Server side, [[Microsoft]] supports a type called tinyint.
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=169)** This is an integer data type, but it has a very small range of numbers that you can store with it, only the numbers between 0 and 255.
>
> **[2:58](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=178)** If your data will always be within this range, then using this data type will do the job with only one byte per value, half of what you would need to use with the small int data type.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=189)** There isn't an equivalent in PostgreSQL.
>
> **[3:12](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=192)** Likewise, smalldatetime stores dates and times precise to the minute.
>
> **[3:18](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=198)** Seconds are always stored as zero and there are no fractional seconds stored.
>
> **[3:23](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=203)** If you need to store a date and time, but don't need the precision down to an exact second, then this data type would be a good fit.
>
> **[3:30](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=210)** Again, PostgreSQL doesn't have a data type like this.
>
> **[3:34](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=214)** SQL Server also has a specific data type for storing geographic coordinates used in creating maps.
>
> **[3:40](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=220)** These include GPS latitude and longitude points and other shapes used in cartography.
>
> **[3:47](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=227)** Postgres has its own set of vendor specific data types.
>
> **[3:50](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=230)** CIDR and macaddr are used to store computer network addresses.
>
> **[3:56](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=236)** To store these kinds of values in SQL Server, you'd have to choose a standard character data type.
>
> **[4:01](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=241)** PostgreSQL has a data type specifically designed for storing [[JSON]] data files, which are commonly used on the web.
>
> **[4:08](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=248)** SQL Server developers don't have an equivalent and you would need to use the more generic varchar(max) data type to do the same job.
>
> **[4:16](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=256)** These are just a few examples of some vendor-specific data types, but there are many more.
>
> **[4:23](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=263)** For the full reference on data types, I recommend locating and bookmarking the official documentation for your RDBMS.
>
> **[4:31](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=271)** This page lists out all of these SQL Server data types.
>
> **[4:34](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=274)** If I scroll down on the page, you'll see that we have different categories.
>
> **[4:38](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=278)** Here's one for exact numerics, approximate numerics, date and time, and so on.
>
> **[4:43](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=283)** Inside of each category we have the individual data types and these all link to their respective pages that describe how to use them.
>
> **[4:51](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=291)** This is where you would find examples and information about any customizable parameters that the data type might have.
>
> **[4:58](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=298)** For PostgreSQL developers, take a look at this URL.
>
> **[5:02](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=302)** The index at the top of the page lists out all the different categories and types and at the bottom of the page is a handy table that shows all the different data types, their aliases or synonyms, and a brief description.
>
> **[5:14](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=314)** If you're working on a another RDBMS platform, then there is most certainly a similar reference guide for you.
>
> **[5:21](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=321)** So turn to your favorite search engine and seek it out.
>
> **[5:24](https://www.linkedin.com/learning/database-foundations-data-structures/additional-common-types?u=76281980&t=324)** These kinds of resources are incredibly helpful whenever you're building a database and referring back to them will help ensure that you're getting the most out of your chosen platform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (11), [[PostgreSQL]] (10), [[PostgreSQL|Postgres]] (2), [[Relational Databases]] (1), [[Microsoft]] (1)
> **Env Vars:** sql (11), rdbms (4), gps (1), cidr (1), json (1)
> **Definitions:** is called (1), is an  (1), is a  (1)
> **UI Navigation:** checkbox (1), scroll down (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** find (1)
> **Documentation:** reference guide (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Choosing data types](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-choosing-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-choosing-data-types?u=76281980&t=0)** - [Instructor] We've covered a lot of information about the different options that you have when choosing the type of data that your tables will hold.
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-choosing-data-types?u=76281980&t=13)** Let's put what we've learned into practice with the first challenge for the course.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-choosing-data-types?u=76281980&t=17)** I'd like you to create a table in the Two Trees database to hold information about the company's employees.
>
> **[0:24](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-choosing-data-types?u=76281980&t=24)** You'll need separate columns to store the following information, the employees first and last names, phone number, the cubicle or [[Microsoft Office|office]] number that they're assigned to, their hire date, and their annual salary.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-choosing-data-types?u=76281980&t=38)** Your goal is to think through the kinds of information that needs to be stored and choose an appropriate data type for each column.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-choosing-data-types?u=76281980&t=46)** Once you've created the table, insert a new row for the first employee.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-choosing-data-types?u=76281980&t=51)** The specific values that you use isn't important as long as they represent the kinds of data that you're likely to come across in the real world.
>
> **[0:59](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-choosing-data-types?u=76281980&t=59)** Verify that each column is in fact able to hold the data that you intended.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-choosing-data-types?u=76281980&t=64)** And if you run into issues, drop the table and rebuild it to address any shortcomings.
>
> **[1:10](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-choosing-data-types?u=76281980&t=70)** I estimate that this challenge should take 10 minutes or less to complete.
>
> **[1:14](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-choosing-data-types?u=76281980&t=74)** Have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Choosing data types](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=0)** - [Instructor] I hope you were able to create the table for the Two Trees company's employees.
>
> **[0:10](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=10)** Let's walk through the solution together.
>
> **[0:12](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=12)** Now, I didn't specify which server to perform this exercise on.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=16)** So you could have either chosen [[Microsoft SQL Server|SQL Server]] or [[PostgreSQL]].
>
> **[0:20](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=20)** I'm going to start this on PostgreSQL and we'll use the syntax conventions for that database platform.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=26)** And then I'm going to copy the exercise over to SQL Server and we'll make some modifications for that platform.
>
> **[0:32](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=32)** So let's go ahead and start with PostgreSQL.
>
> **[0:35](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=35)** I'm going to right click on the twotrees database over here and choose New Query and we'll start our CREATE TABLE statement.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=42)** Now, in PostgreSQL, they typically put everything as lowercase letters.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=46)** So we're going to create a table called employees and that'll be all lowercase letters.
>
> **[0:50](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=50)** Open up a parenthesis.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=52)** And I'll add my semicolon to the end.
>
> **[0:54](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=54)** Okay, so we can start filling in the different columns that we need.
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=57)** So I asked for a first_name.
>
> **[0:59](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=59)** And in PostgreSQL, we tend to use an underscore between words here.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=63)** So I'm just going to follow that same convention.
>
> **[1:05](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=65)** So we have first_name and for this, this is going to be variable data because everybody's name is a different length, so I'll use the character varying data type and I'm going to estimate that 50 characters is going to be plenty for our first_name data.
>
> **[1:20](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=80)** So that'll be my first column.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=82)** Next, I need a column for the last name.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=85)** We'll do that all lowercase again.
>
> **[1:28](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=88)** Last_name and let's also do that as character varying.
>
> **[1:33](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=93)** This time though I'm going to expand that out to 100 characters, just in case we have people with perhaps they might have hyphenated last names or something like that.
>
> **[1:40](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=100)** Rather have more characters.
>
> **[1:41](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=101)** So this should give us plenty of room to store all of that data.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=105)** So that'll be the last_name column.
>
> **[1:47](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=107)** Next, I asked for the phone_number and for this, it might look like we want to store this as a number but we actually want to store this as character data.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=116)** And I'm going to store this as not a varying character.
>
> **[2:00](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=120)** Let's just do this as a regular character.
>
> **[2:02](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=122)** And let's store eight characters and that'll allow me to put in the seven-digit number plus the hyphen.
>
> **[2:08](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=128)** So I'll be able to store that all in a single column.
>
> **[2:11](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=131)** So that has character eight.
>
> **[2:13](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=133)** Office_number is next.
>
> **[2:16](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=136)** And for this, we'll do that as character again.
>
> **[2:19](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=139)** And for this, let's say that my [[Microsoft Office|office]] building uses three-digit numbers for the office numbers.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=145)** So I could store this as a character three.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=147)** Let's come down here and next, I asked for the hire_date.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=151)** This one's easy.
>
> **[2:32](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=152)** This is going to be the date data type.
>
> **[2:34](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=154)** And finally, we have annual_salary.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=157)** Now, we could use the money data type for this but as I explained in one of the previous movies, the money data type really isn't used that much inside of PostgreSQL.
>
> **[2:48](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=168)** So instead, what I might want to do is use the numeric data type and let's just do this as a numeric 10, 2.
>
> **[2:56](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=176)** That'll give me plenty of digits with two digits after the decimal point in case I want to store cents.
>
> **[3:02](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=182)** Okay, so that fills in the different columns that I want.
>
> **[3:04](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=184)** Let's go ahead and bring that up and make sure I have all my commas here at the very end of each line.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=189)** And one thing that we can do is actually tab all these over.
>
> **[3:12](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=192)** Sometimes it makes it a little easier to read all of these when they line up.
>
> **[3:16](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=196)** So I can see all my data types right there in this nice little column.
>
> **[3:19](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=199)** All right, that looks good.
>
> **[3:21](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=201)** Let's go ahead and create that table.
>
> **[3:23](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=203)** All right, it's completed successfully, so that's great.
>
> **[3:26](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=206)** And now I can go ahead and insert a value.
>
> **[3:30](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=210)** So we're going to insert into employees.
>
> **[3:33](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=213)** And we're going to insert some VALUES.
>
> **[3:36](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=216)** And I'm just going to fill in data for myself.
>
> **[3:37](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=217)** So first name is Adam.
>
> **[3:39](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=219)** Remembering since we're entering in character data, I need to wrap it in single quotation marks.
>
> **[3:45](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=225)** There's my last name.
>
> **[3:46](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=226)** Let's put in a phone number.
>
> **[3:48](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=228)** 555-0123.
>
> **[3:51](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=231)** And I'm putting a hyphen in between those so that makes up the eight characters that are going to go into the phone_number field.
>
> **[3:57](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=237)** So finish that.
>
> **[3:58](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=238)** Next up, we have the office_number.
>
> **[4:00](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=240)** Let's say I'm in office number 201.
>
> **[4:02](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=242)** And a hire_date.
>
> **[4:03](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=243)** Again, we enter this again with single quotation marks and I'm just going to put in 2020, how about October 15th?
>
> **[4:11](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=251)** And finally, the annual_salary.
>
> **[4:12](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=252)** Now, this is a numeric number, so I'm not going to wrap it in single quotation marks and I'll just put in 45,000.
>
> **[4:19](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=259)** All right, so that should finish my INSERT INTO statement.
>
> **[4:23](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=263)** Let's go ahead and run this.
>
> **[4:25](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=265)** All right, completed successfully so that's great.
>
> **[4:28](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=268)** Then we'll come down and we'll just check everything out.
>
> **[4:33](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=273)** So we'll select everything out of the table again and we'll run line 13 and there is my data saved into the table.
>
> **[4:40](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=280)** So my name, the phone_number, the eight characters there, the three-digit office_number stored as character data.
>
> **[4:47](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=287)** The hire_date stored as a date and the annual_salary as a numeric 10, 2 data type.
>
> **[4:51](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=291)** So that is how that would work inside of PostgreSQL.
>
> **[4:54](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=294)** Let me copy all of this now and we're going to create a new tab in the SQL Server database.
>
> **[5:02](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=302)** So I'll right click on twotrees over here.
>
> **[5:04](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=304)** Choose New Query.
>
> **[5:06](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=306)** And I'm just going to paste that in.
>
> **[5:08](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=308)** So now we can make some modifications here to correspond with the syntax that we would normally see inside of SQL Server.
>
> **[5:14](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=314)** So normally, in SQL Server, you use capital letters for things.
>
> **[5:17](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=317)** So I might change this to Employees with a capital E.
>
> **[5:21](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=321)** FirstName with a capital F and a capital N but without the underscore.
>
> **[5:24](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=324)** In fact, I'm just going to remove the underscore from all of these.
>
> **[5:27](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=327)** So this will be something a little bit more similar to what you would typically see in a SQL Server database.
>
> **[5:34](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=334)** So OfficeNumber.
>
> **[5:37](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=337)** Change HireDate.
>
> **[5:40](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=340)** And we'll change AnnualSalary.
>
> **[5:43](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=343)** Okay, now let's take a look at these data types.
>
> **[5:45](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=345)** We could use character varying.
>
> **[5:46](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=346)** This would still work inside of SQL Server.
>
> **[5:49](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=349)** In fact, if I just run it right now, it completes successfully, so we could use the exact same data types but these aren't the standard way of typing in these data types inside of SQL Server.
>
> **[5:59](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=359)** So let's go ahead and drop that table.
>
> **[6:02](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=362)** DROP TABLE Employees.
>
> **[6:06](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=366)** All right, so I'll just recreate it again.
>
> **[6:08](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=368)** So because this isn't the standard way that you would finish this off inside of SQL Server, I'm going to change these to the standard SQL Server syntax.
>
> **[6:17](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=377)** In which case, this would be varchar instead of character varying.
>
> **[6:22](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=382)** So I'll do the same thing with this one.
>
> **[6:25](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=385)** So varchar 100.
>
> **[6:26](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=386)** And then the character one would just be char.
>
> **[6:29](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=389)** And we'll change this one to char as well.
>
> **[6:32](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=392)** Now, the date data type is exactly the same on both platforms, so we can leave that one there.
>
> **[6:36](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=396)** But numeric, you typically see this as decimal inside of SQL Server.
>
> **[6:40](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=400)** So we'll change that there.
>
> **[6:42](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=402)** But other than that, it should still create the exact same table.
>
> **[6:44](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=404)** Let me go ahead and run this.
>
> **[6:46](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=406)** All right, completely successfully again, so we've got the table built again.
>
> **[6:49](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=409)** I can even start the exact same values in exactly the same way.
>
> **[6:52](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=412)** So we'll just run lines 11 and 12.
>
> **[6:55](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=415)** That'll insert the row into the table and now if I select everything, in fact, these should actually technically be capitalized but it doesn't really matter.
>
> **[7:03](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=423)** All right, now select everything out of Employees again and there is the data stored in the SQL Server version of the twotrees database.
>
> **[7:11](https://www.linkedin.com/learning/database-foundations-data-structures/solution-choosing-data-types?u=76281980&t=431)** So that's my solution based off of both database platforms and I'll save all of this text in the exercise files as ChallengeOne-Complete.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (12), [[PostgreSQL]] (7), [[Microsoft Office|Office]] (3)
> **Env Vars:** sql (12), table (2), create (1), values (1), insert (1)
> **Code Identifiers:** first_name (3), phone_number (3), hire_date (3), annual_salary (3), office_number (2)
> **CLI Commands:** make (3)
> **SQL:** create table (1), insert into (1), drop table (1)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (2)
> **Exercise Files:** exercise files (1)

#### [Solution: Store data in a table](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=0)** - [Instructor] For this challenge, we need to create a table to store information about the shows that local bands are putting on in local venues around the city.
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=13)** We were given a table with some column names, but it was left to us to determine the correct data types for each one depending on the data that each one needs to store.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=22)** So we can get started here by typing in our CREATE TABLE statement.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=26)** And the name of the table that we were told to create is called EventSchedule.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=30)** And I'll just open up a parentheses, and I'll move the closing parentheses down just a couple of lines to get it out of the way.
>
> **[0:36](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=36)** And I might as well also type in the finishing semicolon here at the end, just so I don't forget.
>
> **[0:40](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=40)** Okay, we'll come back up to line number four, and we'll start typing in the individual columns that we were asked to put in.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=46)** So the first one was named EventID.
>
> **[0:49](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=49)** And for this we're told that it needs to store a whole number, so that means an integer is probably the best choice for this data type.
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=57)** And I can also specify primary key for this particular column.
>
> **[1:01](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=61)** We'll talk about primary keys later on in the course.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=63)** You can omit that if you'd like, but I'm just going to go ahead and put that in now.
>
> **[1:07](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=67)** All right, we'll type in a comma and come down to column number two.
>
> **[1:11](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=71)** This column is the EventName.
>
> **[1:15](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=75)** And for this one, we're told that it needs to store text data up to a hundred characters.
>
> **[1:20](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=80)** So there's a couple of different options here.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=82)** I'm going to choose to use the varchar or the variable character data type, and in parentheses will specify that we can store up to a hundred characters for each of these event names.
>
> **[1:33](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=93)** So that is the second column.
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=95)** And the same thing applies to the venue column, which is the next one.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=98)** So VenueName and also specify this as a varchar 100.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=105)** All right, next up we have max attendees.
>
> **[1:50](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=110)** And this one we're told that each of these small venues can hold up to 250 people.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=116)** So we could use an integer here, but that would allow us to store numbers up to 2 billion.
>
> **[2:02](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=122)** And obviously 2 billion people aren't going to fit into one of these small venues, so that's way more than what we need.
>
> **[2:08](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=128)** We could optionally specify smallint as a data type, and this will give us a range up to 32,000, which is still more than what we need, but it does so in half the amount of space on the database server.
>
> **[2:21](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=141)** So we can store the number of attendees for each venue as a small integer.
>
> **[2:26](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=146)** Now if you're on the [[Microsoft SQL Server|SQL Server]] platform, there is another data type you could use called tinyint, and that would store numbers between zero and 255.
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=158)** So that would be enough room to store the up to 250 people that each of these venues will allow.
>
> **[2:44](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=164)** But unfortunately that is different between SQL Server and the ANSI [[SQL]] Standard that we're using here in this challenge.
>
> **[2:51](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=171)** In ANSI SQL, the tinyint will store numbers between negative 128 up to positive 127.
>
> **[3:00](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=180)** So it's still a range of 255 numbers, it's just that in the ANSI SQL Standard, it starts negative and goes positive.
>
> **[3:07](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=187)** Whereas on SQL Server it starts at zero and goes to 255.
>
> **[3:12](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=192)** So there's a slight discrepancy between the two different platforms there.
>
> **[3:15](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=195)** So that's why we can't use tinyint here for the max attendees because these challenges have to be done in the ANSI SQL Standard.
>
> **[3:23](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=203)** So we will just stick with the smallint for this and move on down to the TicketPrice.
>
> **[3:30](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=210)** For this one, we're told that the tickets are never more than $200, so we just need to count up the number of digits in that.
>
> **[3:37](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=217)** So $200, including cents, is a total of five digits, with two of those digits occurring to the right of the decimal point.
>
> **[3:46](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=226)** So that tells me I need either a decimal or a numeric data type.
>
> **[3:50](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=230)** You can use either one. I'll just say numeric.
>
> **[3:53](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=233)** And we need five total digits, comma, and two of those are to the right of the decimal.
>
> **[3:58](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=238)** So that is our numeric five two data type.
>
> **[4:01](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=241)** So we'll type in a comma there, come down to the next line, which will be our EventDate column.
>
> **[4:07](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=247)** And this one we'll just use the ANSI SQL Standard date data type.
>
> **[4:12](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=252)** And likewise EventTime, we'll use the standard time data type, and that is the last one.
>
> **[4:18](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=258)** So I don't need a comma at the end.
>
> **[4:20](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=260)** I'll just bring that parentheses and the semicolon up.
>
> **[4:23](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=263)** And that is all I need.
>
> **[4:24](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=264)** So let me test my code.
>
> **[4:25](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=265)** That'll create the table, run this insert into statement to input a couple of records for some events, and then select everything out of the table that we just created.
>
> **[4:34](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=274)** So over here on the left, I see a correct output.
>
> **[4:37](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=277)** I see the table structure.
>
> **[4:38](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=278)** There is the columns and the rows of data that was entered.
>
> **[4:42](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=282)** And I can see we have our attendees, ticket price, event date and the times all put in correctly.
>
> **[4:47](https://www.linkedin.com/learning/database-foundations-data-structures/solution-store-data-in-a-table?u=76281980&t=287)** So there is my CREATE TABLE statement, which is my solution to this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Microsoft SQL Server|Sql server]] (3)
> **Env Vars:** sql (8), ansi (5), create (2), table (2)
> **SQL:** create table (2)
> **Definitions:** is called (1), is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Design a Normalized Database

[↑ Back to Table of Contents](#table-of-contents)

#### [Protect data integrity with normalization](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=0)** - [Instructor] You won't get very far on the path of [[Database Development]] before you run across the term, database normalization.
>
> **[0:08](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=8)** Normalization is the process of removing redundancy from a database.
>
> **[0:12](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=12)** At the dawn of the computer sciences, the cost of storing data was far greater than it is today, so efficiencies were developed in order to maintain data in the least amount of space possible.
>
> **[0:24](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=24)** This led to the development of normalization rules, or what's referred to as normal [[Forms]].
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=31)** While the cost of storing and accessing data in a database have decreased dramatically in the past decades, the efficiencies of normalizing your tabular data are still important due to the sheer volume of data that's collected today.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=45)** The process of normalizing your database first requires you to think about the types of information that you need to store.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=52)** You'll want to ask yourself if it's possible for a certain attribute, or a group of columns, to apply more than once to a single record.
>
> **[1:00](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=60)** For instance, if a single customer can have multiple credit cards saved for an online store, or if a single product can have multiple suppliers.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=69)** Once you've gotten a clear picture for your [[Data Storage]] needs, the next step involves moving attributes or columns into separate tables.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=77)** This process effectively takes a single wide table with many columns and breaks it down into multiple narrower tables with a few columns in each.
>
> **[1:27](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=87)** At their core, the normalization guidelines provide the foundation for how the entire relational database model works.
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=95)** Whenever you're thinking about how to divide your data into multiple tables, you'll return to the normal forms and use them as a guide for the best way to create your [[Data Structures]].
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=105)** Their main purpose is to isolate information in a single place in the database, so that additions, modifications or deletions can be made in a single location.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=116)** This has the added benefit of eliminating the possibility of having inconsistent information stored in the database, where one location says one thing and another table says something different about the same entity.
>
> **[2:09](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=129)** It's important to note that after the normalization process is complete, there should be no loss of information from the original structure.
>
> **[2:17](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=137)** It'll just be organized differently.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=140)** So what are these guidelines, or normal forms?
>
> **[2:23](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=143)** For most [[Database Applications]], understanding and applying the first three normal forms to your data tables is sufficient for a well-organized system.
>
> **[2:33](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=153)** In order to meet the requirements of the first normal form, or what's called 1NF, we'll need to eliminate repeating columns or groups of data.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=162)** This means that we'll look through our data tables and break elements into their smallest pieces and provide a column for each piece.
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=169)** We'll also look for areas where we might want to store multiple instances of the same type of data and remove them from our tables by creating multiple records.
>
> **[2:57](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=177)** Once we satisfied the of 1NF, we can progress to satisfying the second normal form by eliminating redundant data that may have been introduced in our conversion to 1NF.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=189)** Here, we'll break out our data table into multiple related tables in order to minimize the redundant information that's stored in each record.
>
> **[3:17](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=197)** At this point, we'll introduce the concept of foreign keys to tie related tables together.
>
> **[3:22](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=202)** We'll talk more about foreign key fields in the next few chapters.
>
> **[3:26](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=206)** Next, we'll look for columns or attributes that aren't specifically about the primary topic or key for each table.
>
> **[3:33](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=213)** Removing these columns and placing them in additional tables will help satisfy the requirements of third normal form.
>
> **[3:40](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=220)** Once all of your tables satisfy the requirements of 3NF, your relational database will be in good shape.
>
> **[3:47](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=227)** There are additional normal forms beyond 3NF that tackle more complicated relationships scenarios, but those are usually unnecessary to consider for most database applications.
>
> **[3:59](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=239)** Now we know a little bit of the theory behind database normalization, and it's time to put it into practice.
>
> **[4:05](https://www.linkedin.com/learning/database-foundations-data-structures/protect-data-integrity-with-normalization?u=76281980&t=245)** So let's take a look at applying each of these normal forms to the structure for our data tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (6), [[Database Applications]] (2), [[Database Development]] (1), [[Data Storage]] (1), [[Data Structures]] (1)
> **Analogies:** for instance (1), picture (1)
> **Cross-References:** in the next (1)
> **Definitions:** means that (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [First normal form](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=0)** - [Instructor] Let's take a look at meeting the requirements of the first normal form.
>
> **[0:04](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=4)** In order to get our data table into 1NF, we need to make sure that it's in an entity format and remove repeating groups of values.
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=13)** We can do this by ensuring that at least one column will store a unique identifier for each record, and then remove the ability to store multiple values in a single field, or have repeating lists of the same kind of data.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=26)** Let's think about what all this means by creating a simple database to store information about pets and their owners.
>
> **[0:33](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=33)** Here I have a simple spreadsheet with the information for a single pet owner named Tabitha.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=38)** She lives in Houston, Texas, and has two pets, a goldfish named Bubbles and a dog named Buddy.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=45)** The first step in the database normalization process is to make sure that no single column holds multiple values.
>
> **[0:53](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=53)** So instead of storing Tabitha's first and last name in a single column, we can break that data into two columns, one for the first name only, and one for the last name only.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=64)** The address information would need to follow the same pattern, instead of storing all of that in a single column, we can break each component into its own column.
>
> **[1:12](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=72)** This makes a separate column for the street address, the city, state, and country.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=78)** Now, let's fix the pet information.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=81)** This column is currently showing four pieces of information, pet number one's name and species and pet number two's name and species.
>
> **[1:29](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=89)** We could separate that out into four different columns like this, but this isn't really a sustainable model.
>
> **[1:36](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=96)** What happens if Tabitha gets a new cat?
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=98)** We would need to modify the structure of the table to add columns for pet three's name and species.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=105)** Doing so gets you into an endless loop of trying to figure out how many of these pet columns would be necessary for everyone in this database.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=113)** Would you need five pairs, 10 pairs?
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=116)** There's a better way to store this information.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=118)** Instead, we're going to separate this out into multiple rows, one for each pet.
>
> **[2:04](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=124)** Now we only need a single pair of pet name and pet species columns.
>
> **[2:08](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=128)** And following this model, every time Tabitha gets a new pet, we just insert a new row into the table.
>
> **[2:14](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=134)** Now we're no longer or storing multiple pieces of information in any single column in this table.
>
> **[2:21](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=141)** The last thing that we need to do in order to satisfy the requirements of the first normal form is to add a unique identifier for each row.
>
> **[2:29](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=149)** We can do that by adding in a simple row ID column to the table.
>
> **[2:33](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=153)** This will allow the database engine to separate the data about Tabitha's first pet from the details about her second pet.
>
> **[2:41](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=161)** Now, at this point, our table is fully compliant with the requirements of first normal form, but I'm sure you spot the problem with this arrangement.
>
> **[2:50](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=170)** We have a lot of redundant information now.
>
> **[2:53](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=173)** Every time Tabitha gets a new pet, we're recording her first and last name and her full address again.
>
> **[2:59](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=179)** So this isn't yet an ideal way to structure this data, and we have some more work to do.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-data-structures/first-normal-form?u=76281980&t=185)** We'll need to turn to the requirements of second normal form to resolve this redundancy issue, and simultaneously provide a better storage space for owners that have multiple pets.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), cat (1)
> **Speakers:** - [instructor] (1)

#### [Second normal form](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=0)** - [Instructor] The goal of the second normal form is to remove the redundancy that was introduced when we were converting our data table in to first normal form.
>
> **[0:09](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=9)** We'll do that by first making sure that we've satisfied the requirements of 1NF and then create related tables to store those redundant pieces of information.
>
> **[0:20](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=20)** At this point, our pet owners table is in first normal form, but we have some redundant data issues to work out.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=27)** We need to go through each column in this table and determine if it describes the main topic of the table, or if it's a descriptive attribute of something else.
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=37)** In database terminology, what we're looking for is called functional dependency.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=42)** So if this table is supposed to be storing information about owners, then we can ask if each attribute column is functionally dependent on a specific owner.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=52)** The first and last names are attributes that describe each owner in the table, so they're fine.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=58)** The address information, though, describes a location, not a person, and the information about each pet describes the animal and not the owner.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=68)** So we actually have three different topics that we're storing data about, people, places, and animals.
>
> **[1:15](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=75)** This gives us a clue as to how to better structure our database.
>
> **[1:20](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=80)** To get to second normal form, we'll break out these columns and create separate tables about each topic.
>
> **[1:26](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=86)** So we'll have a table about the owners, a separate table for locations, and a third table for pets.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=94)** We'll need to verify each of these tables is still in first normal form.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=98)** So, check for any multi-value columns and repeating groups and make sure that each table has its own unique identifier.
>
> **[1:46](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=106)** I've added a row ID column to each one and named them Owner ID, Address ID, and Pet ID.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=113)** Now, our single table has turned into three.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=116)** In order to join information together, we need to add some additional columns that'll provide the linking connections.
>
> **[2:03](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=123)** In order to link a person to a specific house, we can add an Address ID column to the owners table.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=130)** In order to link an owner to their pets, we can add an Owner ID column to the pets table.
>
> **[2:16](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=136)** At this point, our data tables meet the requirements of the second normal form.
>
> **[2:21](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=141)** Even though everything is split up, we can still find all of the information about each owner and each pet that we had in the original spreadsheet.
>
> **[2:29](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=149)** You just need to find the linking values and follow them to the related table.
>
> **[2:34](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=154)** For instance, to find out where Tabitha lives, you need to find her Address ID, then you was that value to look up the related information in the locations table to find that she lives at 1414 Main Street in Houston.
>
> **[2:47](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=167)** To find out what pet she owns, take her Owner ID and use it to locate the matching rows in the pets table.
>
> **[2:55](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=175)** This links her back to Bubbles and Buddy.
>
> **[2:58](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=178)** You can read information the other way, as well.
>
> **[3:00](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=180)** To find out where Buddy the dog lives, you could take his Owner ID, match that up to Tabitha, then read across her row to find the Address ID, and then down to the locations table.
>
> **[3:12](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=192)** This reveals buddy's home address.
>
> **[3:14](https://www.linkedin.com/learning/database-foundations-data-structures/second-normal-form?u=76281980&t=194)** So by splitting out the attribute column so that they are functionally dependent on a single entity, we've successfully satisfied the requirements of second normal form for our pet and owner tables.

> [!info]- Semantic Content
>
> **CLI Commands:** find (8), make (1)
> **Definitions:** is called (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Third normal form](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=0)** - [Instructor] Once we've checked our tables to ensure that they satisfy both 1NF and 2NF, we can turn our attention to satisfying the third normal form.
>
> **[0:10](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=10)** 3NF starts with the assumption that the table is in second normal form, and then adds the requirement that every field is non-transitively dependent on the primary key, or the unique identifier, for each row.
>
> **[0:24](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=24)** This ensures that the data contained in an attribute column is not determined by another field that is not part of the key.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=31)** This typically includes calculations and other kinds of derived data.
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=37)** To see an example of this, let's add some new columns to the Pets table.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=41)** I've modified the table to include a column to store each pet's age and the scientific name of their species.
>
> **[0:48](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=48)** To find out if the table is in third normal form, we need to ask if every column is dependent on the unique identifier.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=56)** What we're looking for are columns that have a value that's dictated by values in other columns.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=62)** Pet 1001 is the row that gives you information about Bubbles, the goldfish.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=68)** The name, Bubbles, can only be obtained by looking to that specific row, so it's functionally dependent on the unique identifier.
>
> **[1:16](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=76)** Likewise, the age, two, and species, goldfish, are descriptive attributes about that unique pet.
>
> **[1:24](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=84)** The scientific name, however, is different.
>
> **[1:27](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=87)** The scientific name, Carassius auratus, isn't a description of Bubbles, specifically.
>
> **[1:33](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=93)** It's the scientific name for all goldfish.
>
> **[1:36](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=96)** In fact, if you had other goldfish in this Pets table, then the same scientific name would always follow.
>
> **[1:43](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=103)** So we can say that the scientific name column is transitively dependent on the species column, not the PetID column.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=112)** So this table is in violation of third normal form.
>
> **[1:55](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=115)** In order to fix this, we need to move some columns into a new table.
>
> **[2:00](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=120)** There's two different ways that we could go here, since the transitive dependency goes both directions.
>
> **[2:06](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=126)** The first option is to keep the pet species column in the Pets table and create a related table that pairs the species with the scientific name.
>
> **[2:16](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=136)** This allows us to look up the scientific name by matching to the common species name.
>
> **[2:22](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=142)** The other option is the exact opposite, but it has the same end result.
>
> **[2:26](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=146)** If you keep the scientific name in the Pets table and move the species to a new table, you can still connect all of the pieces.
>
> **[2:34](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=154)** In fact, the new table is exactly the same either way.
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=158)** It doesn't matter which approach you take.
>
> **[2:40](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=160)** In the end, you've removed the transitive dependency from the Pets table and brought it into compliance with third normal form.
>
> **[2:48](https://www.linkedin.com/learning/database-foundations-data-structures/third-normal-form?u=76281980&t=168)** Anytime you add a new table to the database or a new column to an existing table, you should run through this verification process again to make sure that your database continues to meet the requirements of the first three data normalization rules.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [instructor] (1)

#### [Denormalization considerations](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=0)** - [Instructor] The rules of good [[Database Design]] outlined as the three normal [[Forms]] should be treated as guidelines that'll help you arrive at a solid foundation for your data tables.
>
> **[0:10](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=10)** But they're not something that needs to be strictly adhered to in all circumstances.
>
> **[0:15](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=15)** The process of reversing or ignoring the normal forms is called denormalization.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=22)** Denormalization should be approached deliberately.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=25)** It's not just a free pass to go back to creating tables how ever you want.
>
> **[0:29](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=29)** If we consider the locations table that we created while normalizing our pet and orders database, you'll find an opportunity to restructure this a little bit further.
>
> **[0:39](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=39)** Given a large enough database, it's likely that we'll have several people that all live in the same city, state, and country.
>
> **[0:47](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=47)** We could break that information out into its own tables, and create a lookup table of cities.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=52)** Going another step further, we'll have several cities in the same state and country, so we could break those out as well.
>
> **[1:00](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=60)** From a storage efficiency perspective, this makes a lot of sense.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=64)** We now only need to store city, state, and country names a single time, and we'll make reference to those using key values.
>
> **[1:12](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=72)** However, this adds a number of table joins that need to be made anytime that we want to find an owner's address.
>
> **[1:19](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=79)** to find Tabitha's address, for example, we need to look up her location, then look up her city, then look up her state, and finally locate her country.
>
> **[1:29](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=89)** Only then can we piece together that she lives at 1414 Main Street, Houston, Texas, USA.
>
> **[1:36](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=96)** The efficiency of storing data is better in this design, but the process of retrieving data is much worse.
>
> **[1:43](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=103)** The consideration that needs to be made in determining an optimal design is how often you need to drill down into these additional tables.
>
> **[1:51](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=111)** It's not likely that just a street address by itself will ever be something that's useful.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=116)** Knowing the city without knowing the state will also never be that useful.
>
> **[2:02](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=122)** In fact, it's almost certain that anytime that you want to retrieve and owner's location, you'll need all of these address components.
>
> **[2:09](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=129)** In this case, breaking them out into separate tables, just doesn't make a lot of sense from an operational perspective.
>
> **[2:17](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=137)** Denormalizing the table design back into a single table is probably the best option here.
>
> **[2:23](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=143)** Most [[Relational Databases]] are built following a normalized design pattern.
>
> **[2:28](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=148)** They're called OLTP systems, which stands for Online Transaction Processing.
>
> **[2:34](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=154)** These [[Databases]] form the foundation of any system that needs to quickly store information.
>
> **[2:40](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=160)** For instance, an online storefront that's primarily concerned with allowing customers to put items into their shopping cart and quickly process their payment information needs to get that information stored into the database as quickly as possible.
>
> **[2:54](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=174)** When there's potentially thousands of simultaneous shoppers, you don't want anything slowing down that process.
>
> **[3:01](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=181)** OLAP databases on the other hand are designed to support analysis workloads, and are made of denormalized tables.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=189)** OLAP stands for Online Analytical Processing, and databases designed with this model are primarily concerned with retrieval of information.
>
> **[3:18](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=198)** Data in an OLAP database doesn't need to change quickly, if ever.
>
> **[3:23](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=203)** And it's a design pattern that's most commonly used in something called a data warehouse.
>
> **[3:28](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=208)** Think of them as archive databases.
>
> **[3:31](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=211)** Many businesses leverage both types of database design, starting with an OLTP database for daily transactions.
>
> **[3:39](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=219)** Then they convert those tables into an OLAP format later for creating detailed analysis reports and summaries.
>
> **[3:47](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=227)** By taking different approaches to the design of your [[Data Structures]], you can create databases that are built to prioritize different types of usage patterns.
>
> **[3:57](https://www.linkedin.com/learning/database-foundations-data-structures/denormalization-considerations?u=76281980&t=237)** Sometimes emphasizing transaction speed by reducing redundancy and using more table relationships, and other times prioritizing analysis performance by increasing redundancy in limiting the number of tables that need to be joined.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (5), [[Database Design]] (2), [[Forms]] (2), [[Relational Databases]] (1), [[Data Structures]] (1)
> **Env Vars:** olap (4), oltp (2), usa (1)
> **CLI Commands:** find (3), make (2)
> **Definitions:** stands for (2), is called (1)
> **Analogies:** for example (1), for instance (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Normalize a data table](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=0)** - [Instructor] For this challenge, we were given a single table that is in an un-normalised state, and we're asked to take the columns and break them out into two different tables so that the design meets the requirements of the third normal form.
>
> **[0:19](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=19)** So we are told that we need to take a single table and break that out into two tables called rentals and customers.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=27)** So I'm just going to get started here by typing out the create table statement for each of those.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=31)** So we'll say create table customers, and I'll open up a parentheses and I'm just going to move that one down to line number six and type in a semicolon at the end of that.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=42)** And then just come down to line number eight and say, create table rentals and do the same thing.
>
> **[0:48](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=48)** Open up a parentheses, move it down, and then add the semicolon at the very end.
>
> **[0:53](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=53)** So this is the shell for the two different tables that we're going to create.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=56)** And so now I just need to go through that original data table and go through each of the columns in that original table and decide whether they belong in the new rentals table or if they belong in the customer's table instead.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=69)** So we'll just start at the top and the first column in the original table was the rental ID.
>
> **[1:16](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=76)** And that sounds a lot to me like that should go into the rentals table.
>
> **[1:20](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=80)** So I'll place it there.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=81)** So a rental ID is an integer data type and it's the primary key.
>
> **[1:26](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=86)** Okay, type of comma into that.
>
> **[1:29](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=89)** The next column that we come across is called customer name, and that sounds like that belongs in the customer's table.
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=95)** So I'll add that one up here on line number four.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=98)** So customer name is a varchar 100 data type.
>
> **[1:43](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=103)** The next column that we're given is the customer phone number, and that also sounds like it describes our customer, not a particular rental.
>
> **[1:50](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=110)** So we'll call it customer phone up in this table.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=113)** And that is a varchar 20 data type.
>
> **[1:57](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=117)** The next column is the customer email address.
>
> **[2:00](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=120)** And once again, that is something that's going to describe our customer, not the rental itself.
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=125)** So we'll place that up in this table.
>
> **[2:06](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=126)** So customer email is a varchar 100 data type.
>
> **[2:12](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=132)** The next column in the original table is called car model, and that does not describe one of our customers, that describes the rental that they made.
>
> **[2:21](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=141)** So we'll place that column down here in the rentals table.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=145)** So car model is stored as a varchar 100.
>
> **[2:30](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=150)** The next column is the rental start date and the rental end date as two different columns.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=155)** And both of those describe the rental itself.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=157)** So rental start date is a date data type and rental end date is also a date data type.
>
> **[2:48](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=168)** We'll place both of those in the rentals table.
>
> **[2:50](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=170)** And then finally, total cost.
>
> **[2:51](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=171)** And that is not something that describes the customer, it describes the rental agreement itself.
>
> **[2:56](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=176)** So we'll place that one down here.
>
> **[2:58](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=178)** So total cost is a decimal 8, 2 is that data type.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=185)** And so that takes care of all of the columns from the original data table.
>
> **[3:08](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=188)** We split them between these two new tables.
>
> **[3:11](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=191)** Now we're also told that we need to add in a field that can be used to relate the two data tables together again.
>
> **[3:19](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=199)** And that is going to be the customer ID, which we do not have up here in the customer's table right now.
>
> **[3:24](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=204)** So let me go ahead and add that onto line number four.
>
> **[3:28](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=208)** I'll just place a new column called customer ID as an integer.
>
> **[3:32](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=212)** And I'll call it the primary key.
>
> **[3:36](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=216)** And it doesn't really matter if it's on the first column of the table, it could be the last one of the table.
>
> **[3:41](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=221)** It doesn't really matter which sequence these columns get created in.
>
> **[3:45](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=225)** It's just typical that you'll find the ID column as the first column listed in your create table statement.
>
> **[3:51](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=231)** So I'll just place it there and then make sure you type a comma at the very end of that before these other ones.
>
> **[3:55](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=235)** And that finishes the customer's table.
>
> **[3:58](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=238)** So now we also need to have a way to relate these customers to the rentals.
>
> **[4:03](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=243)** And that means we also need a copy of the customer ID column in this rentals table.
>
> **[4:08](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=248)** And these related keys are typically found as the second column in the other table.
>
> **[4:14](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=254)** So I'll come down here after the rental ID and put in a column for customer ID here as well.
>
> **[4:21](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=261)** And it's going to be the same data type integer.
>
> **[4:23](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=263)** It is not a primary key though because the primary key is the rental ID and the rental stable, not a period there, comma.
>
> **[4:30](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=270)** Okay, so we have commas at the end of each of these and that I think finishes it off.
>
> **[4:35](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=275)** Let me test my code here.
>
> **[4:37](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=277)** And there we go, I got a correct output.
>
> **[4:40](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=280)** So we're creating a table customers, we're creating a new table called rentals.
>
> **[4:44](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=284)** Then we have these insert into statements where we're adding our customer and rental data back together again.
>
> **[4:50](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=290)** And then we are selecting all of the data out of both of those tables are joined together based on that column field.
>
> **[4:57](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=297)** The Rentals.CustomerID is equal to Customers.CustomerID.
>
> **[5:01](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=301)** And so it's piecing the data back together again so that it looks like the original data table that we had that was in an un-normalised state where all of these columns were gathered together in a single table, but now we've broken them out into two separate tables to better meet the normalization rules.
>
> **[5:19](https://www.linkedin.com/learning/database-foundations-data-structures/solution-normalize-a-data-table?u=76281980&t=319)** So this is my solution to this challenge.

> [!info]- Semantic Content
>
> **Definitions:** is a  (5), is called (2), is an  (1)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Identify Rows with Primary Keys

[↑ Back to Table of Contents](#table-of-contents)

#### [Purpose of a primary key](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=0)** - [Instructor] We've touched on the topic of primary key fields a couple of times now, and they're vitally important when creating a properly normalized [[Database Design]].
>
> **[0:10](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=10)** They're the glue that holds all of your data together when it's spread out across related tables.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=16)** Each cell in a data table must be uniquely identifiable.
>
> **[0:20](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=20)** In a spreadsheet application, this is easy.
>
> **[0:23](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=23)** The spreadsheet has built in column letters and row numbers so that I can refer specifically to whatever value is stored in cell A1, or make a reference to the value that's in cell D8.
>
> **[0:36](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=36)** [[Relational Databases]] don't use these same row and column identifiers, so we need a slightly different approach.
>
> **[0:44](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=44)** In a relational database table, each column has a unique name, so that part is already taken care of, but the rows of data can appear in any order.
>
> **[0:54](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=54)** They can get filtered out of the results using SELECT queries or sorted into different sequences with an ORDER BY clause.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=62)** There is no row identifier built into the interface of a relational [[Database Management]] system like we have with a normal spreadsheet application, so we need to include one within the data itself.
>
> **[1:15](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=75)** This means that there needs to be some piece of information that I can give the system and have it return one very specific record or row from the data table.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=85)** This is the role of a primary key, to guarantee that there's a unique value or a set of values that will allow us to reference one row as a separate entity from every other row in the table.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=97)** We include primary keys in a table by giving a special designation to one or more columns that will hold the data that fulfills this role.
>
> **[1:47](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=107)** To illustrate how critical primary keys are to the operation of a database, consider this table without a primary key.
>
> **[1:54](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=114)** I've got some data on people and their age, and I have run a SELECT query to filter out the results to just see two records that happen to have the same name, Jerome Whitmore.
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=125)** Both of these people have the same age, but I need to update one of them.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=130)** In a spreadsheet, you would just click on the cell that you want and make the change, but in a relational database, we need to use the [[SQL]] language to edit the value.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=140)** So I start to write out the command, UPDATE People SET Age = 33 WHERE, and this is where I run into an issue.
>
> **[2:29](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=149)** With no unique identifier, there's no way to target this change to just one of these rows.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=155)** Any selection criteria that I use will make the same change to both rows simultaneously.
>
> **[2:41](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=161)** With a primary key added to the table, the solution becomes clear.
>
> **[2:45](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=165)** I only want to update the age for the row with the PersonID of 16.
>
> **[2:50](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=170)** Now the database engine is able to separate these two rows from each other, and the change can be made to just one of the age values.
>
> **[2:58](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=178)** Primary key values have another role, and that's to allow the database to properly join related tables together again.
>
> **[3:06](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=186)** Consider these two tables for people in cities.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=189)** If we know that Jerome lives in Portland and take that information to the Cities table, we're going to have a problem.
>
> **[3:15](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=195)** There's no way to tell if he lives in Portland, Oregon, Portland, Maine, Portland, Texas, or some other Portland anywhere else in the world.
>
> **[3:24](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=204)** But when we add a unique primary key to the Cities table, now we can confidently attach Jerome to a specific city by referencing the ID value in the People table instead.
>
> **[3:34](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=214)** Now it's easy to see that Jerome lives in Portland, Maine.
>
> **[3:38](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=218)** So that's an overview of the role that key fields serve in the database.
>
> **[3:42](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=222)** They provide a way for the database to keep all of the records straight and allow related records to be joined back together again down the road.
>
> **[3:49](https://www.linkedin.com/learning/database-foundations-data-structures/purpose-of-a-primary-key?u=76281980&t=229)** Let's take a closer look and see how we can define columns as primary keys in our relational database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Database Design]] (1), [[Relational Databases]] (1), [[Database Management]] (1), [[SQL]] (1)
> **Env Vars:** select (2), order (1), sql (1), update (1), set (1)
> **SQL:** select (2), order by (1), update (1), where (1)
> **CLI Commands:** make (3)
> **UI Navigation:** click on (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Establish the table's primary key](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=0)** - [Instructor] There are several ways to establish a table's primary key using [[SQL]] commands.
>
> **[0:06](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=6)** I currently have the file called PrimaryKey-SQLServer from the chapter three folder here opened up on my [[Microsoft Azure|Azure]] Data Studio instance.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=14)** If you're following along, make sure that you have the TwoTrees database in the [[Microsoft SQL Server|SQL Server]] container selected before you open this file.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=22)** And then double-check that the connection type says TwoTrees here in this dropdown menu.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=27)** Now, the first way to establish a primary key is to identify it right when you create the column in the table.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=34)** Here, starting on line number four, I'm creating a new table called customers.
>
> **[0:39](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=39)** It has a number of different columns.
>
> **[0:40](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=40)** And the first one, the customer ID, will be the primary key for this table.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=46)** A table can only have one primary key.
>
> **[0:49](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=49)** It must be a unique value within the table, and it cannot be left blank or null when saving a record.
>
> **[0:55](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=55)** Because of this, it's referred to as a constraint, since it places restrictions on the data that can be entered into this column.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=63)** I'm also adding a not-null constraint to this column.
>
> **[1:06](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=66)** We'll talk more about what this means later on in the course, but it basically just means that we can't enter in a null value or an empty space when we enter in a row into the table.
>
> **[1:16](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=76)** So this column is called customer_id.
>
> **[1:19](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=79)** It'll use the char5 data type.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=81)** It has a not-null constraint.
>
> **[1:24](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=84)** And it'll be the primary key for the table.
>
> **[1:27](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=87)** Let's run lines four through 11 to create this table on the server.
>
> **[1:32](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=92)** Now we can take a look at it over here in the connection sidebar in Azure Data Studio.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=97)** I'm going to right-click on the TwoTrees database and choose refresh.
>
> **[1:40](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=100)** Then we'll expand the tables folder, and we'll find the new customers table right there.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=105)** We didn't specify any special schema, so it's just going into the DBO schema, which is the default for a SQL Server.
>
> **[1:51](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=111)** So inside of the customer's table, I can expand the columns, and we'll see all those columns right there.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=116)** The customer_id is identified as the primary key here in parentheses with this PK notation.
>
> **[2:03](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=123)** We can also take a look inside of the keys folder, and we'll see our primary key right there.
>
> **[2:08](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=128)** Because we didn't specify otherwise, the key got a name with this unique serial number appended to it.
>
> **[2:14](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=134)** Now, the exact same commands that we just ran will also work on [[PostgreSQL]] in order to create the table and the primary key.
>
> **[2:21](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=141)** But the display here in Azure Data Studio will be a little bit different.
>
> **[2:26](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=146)** The PostgreSQL plugin that we're using is still in a beta-testing stage.
>
> **[2:30](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=150)** So it's not quite complete, and it won't display the proper constraint and key information in the sidebar.
>
> **[2:36](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=156)** But the commands will still work, and it'll still configure the table with the primary key.
>
> **[2:41](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=161)** So this is the first way to add in a primary key column to your tables.
>
> **[2:46](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=166)** You just specify primary key right when you name the column.
>
> **[2:50](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=170)** The second way is to add the primary key constraint at the end of the create-table statement.
>
> **[2:54](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=174)** So let's take a look at that.
>
> **[2:55](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=175)** I'm going to move this messages window down, and I'm going to run line number 13 that says drop table.
>
> **[3:00](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=180)** We're going to recreate it starting on line 18.
>
> **[3:04](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=184)** This method goes through the steps of creating all the different columns like we've done before.
>
> **[3:08](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=188)** We have customer_id to char5, and it has the not-null constraint.
>
> **[3:12](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=192)** Then I list out all the different columns there.
>
> **[3:14](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=194)** At the end of the whole thing, I make sure that I type in a comma here at the last column.
>
> **[3:19](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=199)** And then we have the key [[Microsoft Word|word]], constraint.
>
> **[3:21](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=201)** This method allows us to name the constraint rather than getting an auto-assigned generic name for it.
>
> **[3:27](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=207)** Here, I'm naming the constraint PK_Customers_CustomerID.
>
> **[3:33](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=213)** This will help me identify it as the primary key constraint.
>
> **[3:36](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=216)** It's on the customer's table and the customer ID column.
>
> **[3:40](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=220)** Then we have the key words, primary key.
>
> **[3:43](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=223)** And in parentheses, we specify which column will be the primary key.
>
> **[3:47](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=227)** In this case, it's the customer_id column.
>
> **[3:50](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=230)** Naming the primary constraint with this method will make it easier to recognize in the sidebar and in code if I decide to work with it later.
>
> **[3:58](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=238)** So if I run lines 18 down to 26, that's going to create the exact same table.
>
> **[4:03](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=243)** And if I come over here into the sidebar and refresh my database and take a look inside of the tables folder and the customer's table, I can now go into the keys folder, and I'll find the named primary key right there.
>
> **[4:15](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=255)** You can see that the name makes it a lot easier to recognize.
>
> **[4:19](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=259)** So that's the second method.
>
> **[4:21](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=261)** Let's go ahead and run line number 28 to drop the table again.
>
> **[4:24](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=264)** Then I'm going to scroll down and find line number 33.
>
> **[4:28](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=268)** The third way to add in a primary key constraint is after the table is created.
>
> **[4:33](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=273)** First, you'll create the table as normal with just the column names and the data types.
>
> **[4:38](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=278)** So I can do that by running lines 33 down to 40.
>
> **[4:42](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=282)** Then once the table is created, we can alter the table.
>
> **[4:45](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=285)** I'm going to alter table customers, and then we can add in the constraint.
>
> **[4:49](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=289)** I'll name the constraint the same way.
>
> **[4:50](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=290)** It will be a primary key constraint, and it'll be on the customer_id column.
>
> **[4:55](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=295)** Let's run lines 42 through 43 to add in the constraint to the table that we just created.
>
> **[5:01](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=301)** Once again, I can refresh the database over here in the sidebar and take a look in the tables.
>
> **[5:07](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=307)** Here is my customer's table.
>
> **[5:08](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=308)** And if I expand the columns, you'll see the customer_id is still listed as the primary key.
>
> **[5:12](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=312)** And if I go into the keys folder, you'll see the primary key listed right there.
>
> **[5:17](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=317)** No matter which method of these you choose, the end result is the same.
>
> **[5:21](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=321)** Your table is created, and there are some constraints put on the primary key column.
>
> **[5:25](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=325)** Most importantly, it will now no longer allow duplicate values.
>
> **[5:29](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=329)** Let's test that out.
>
> **[5:31](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=331)** I'm going to scroll down here on my script and find line 47.
>
> **[5:34](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=334)** First, we're going to insert a row into the customer's table for Flavorville.
>
> **[5:39](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=339)** Flavorville will have a customer ID of FV418.
>
> **[5:44](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=344)** I'll go ahead and run line 47 and 48 to insert that row into the table.
>
> **[5:50](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=350)** All right, one row is affected.
>
> **[5:51](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=351)** So that row has been entered into the database.
>
> **[5:54](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=354)** Now let's try and enter in a second row.
>
> **[5:57](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=357)** This one is going to be for a company called Wild Rose, but we're going to use the same company ID that we just inserted, FV418.
>
> **[6:06](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=366)** If I try and run lines 50 and 51 with the duplicate ID value, you'll see the result.
>
> **[6:12](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=372)** The server tells me that I have a violation of the primary key constraint.
>
> **[6:16](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=376)** It names the constraint here, and it tells me that we have a duplicate key value.
>
> **[6:21](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=381)** In order to fix this, we need to make sure that all of our primary keys are unique.
>
> **[6:25](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=385)** So I'm going to change this value from FV418 to WR421.
>
> **[6:31](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=391)** Now I can insert this row into the table without a violation of that constraint.
>
> **[6:36](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=396)** I get the message that one row is affected again.
>
> **[6:38](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=398)** And now if I select everything from the customer's table, we'll see that both rows have been successfully entered.
>
> **[6:44](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=404)** So that's how you add a primary key to your data tables using SQL data definition language commands.
>
> **[6:51](https://www.linkedin.com/learning/database-foundations-data-structures/establish-the-table-s-primary-key?u=76281980&t=411)** You can either create the primary key with a new table or use the alter-table statement paired with add constraint.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[SQL]] (2), [[Microsoft SQL Server|Sql server]] (2), [[PostgreSQL]] (2), [[Microsoft Word|Word]] (1)
> **Env Vars:** sql (4), fv418 (3), dbo (1), wr421 (1)
> **CLI Commands:** make (4), find (4)
> **UI Navigation:** in the sidebar (3), scroll down (2), dropdown (1), right-click (1)
> **Code Identifiers:** customer_id (6)
> **Definitions:** means that (1), is called (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Natural keys](https://www.linkedin.com/learning/database-foundations-data-structures/natural-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/natural-keys?u=76281980&t=0)** - [Instructor] Now that we know how to create a primary key column, it's worth spending a few minutes to discuss the different kinds of data that work well for providing the tables key values.
>
> **[0:10](https://www.linkedin.com/learning/database-foundations-data-structures/natural-keys?u=76281980&t=10)** The first kind of information that you should consider is called a natural primary key.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-data-structures/natural-keys?u=76281980&t=16)** The only requirement for a primary key is that each row will have a unique value in that column.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-data-structures/natural-keys?u=76281980&t=22)** Sometimes you'll find that you're already storing a column in your dataset that's guaranteed to be unique for every record.
>
> **[0:29](https://www.linkedin.com/learning/database-foundations-data-structures/natural-keys?u=76281980&t=29)** In these situations, there's no reason to reinvent the wheel, you can simply designate that column as the table's primary key.
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-data-structures/natural-keys?u=76281980&t=37)** Here's an example.
>
> **[0:39](https://www.linkedin.com/learning/database-foundations-data-structures/natural-keys?u=76281980&t=39)** When you sign up for an account with an online store, you're often asked to give your email address and create a password.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-data-structures/natural-keys?u=76281980&t=46)** Email addresses are often treated as unique identifiers in a customer database, since two people can never have the same email address.
>
> **[0:54](https://www.linkedin.com/learning/database-foundations-data-structures/natural-keys?u=76281980&t=54)** In this case, creating a unique serial number for the primary key is unnecessary.
>
> **[1:00](https://www.linkedin.com/learning/database-foundations-data-structures/natural-keys?u=76281980&t=60)** Instead, just use the unique email address that you're already going to be storing.
>
> **[1:05](https://www.linkedin.com/learning/database-foundations-data-structures/natural-keys?u=76281980&t=65)** When determining which column to use for your primary key, you need to look beyond the data that you already have and project your needs far into the future.
>
> **[1:14](https://www.linkedin.com/learning/database-foundations-data-structures/natural-keys?u=76281980&t=74)** Ask yourself if this table is storing millions of rows, is there even the slightest possibility that a value might be repeated in this column?
>
> **[1:23](https://www.linkedin.com/learning/database-foundations-data-structures/natural-keys?u=76281980&t=83)** If not, then it's a good candidate for serving as the table's natural primary key.
>
> **[1:29](https://www.linkedin.com/learning/database-foundations-data-structures/natural-keys?u=76281980&t=89)** You have to be careful with this question though, in a small [[Microsoft Office|office]], you might think that you can get away with having employee names be the unique identifier, but it's not uncommon for two people to share the same name and you never know who's going to be hired next week.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-data-structures/natural-keys?u=76281980&t=105)** It's also not unheard of for two employees to have the same birthday.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-data-structures/natural-keys?u=76281980&t=109)** In fact, it's not impossible for two employees to have the same name and the same birthday, given an infinitely large population.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-data-structures/natural-keys?u=76281980&t=118)** So those kinds of values are not good candidates for a table's primary key, but social security numbers are unique, driver's license numbers are unique, either of those would work well if you're already storing them in your database.
>
> **[2:12](https://www.linkedin.com/learning/database-foundations-data-structures/natural-keys?u=76281980&t=132)** When identifying whether or not you can use a column in your table as a natural primary key, your goal is to find data that's impossible to duplicate, not just unlikely or improbable.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-data-structures/natural-keys?u=76281980&t=145)** So the first type of data that you should consider for your primary keys is something that you're going to be storing anyway.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-data-structures/natural-keys?u=76281980&t=151)** Look for unique values that are naturally occurring in your data already to identify each row and create the connective tissue that binds your data tables together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1)
> **CLI Commands:** find (2)
> **Definitions:** is called (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Composite keys](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=0)** - [Instructor] When establishing the unique primary key for each table, you might need to look beyond a single column.
>
> **[0:06](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=6)** Primary keys can be made up of multiple attribute columns that together provide the unique identifier for a row.
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=13)** And these are called composite keys.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=16)** Often composite keys are useful when you have a situation where you want to make sure that two rows never have the same combination of values across two or more columns.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=26)** For instance, in a hotel database, you wouldn't want to rent out the same room twice, on the same night, to two different guests.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=34)** By establishing a composite key, that involves the check-in date and room number columns, we can guarantee that we don't double book a room.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=42)** Let's experiment with how that works by mocking it up in [[Microsoft Azure|Azure]] Data Studio.
>
> **[0:48](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=48)** I'm going to right-click on my twotrees database in the [[Microsoft SQL Server|SQL Server]] instance and open up a new query window.
>
> **[0:54](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=54)** Let's first create a table to hold some hotel room booking information.
>
> **[0:59](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=59)** I'll call it hotel rooms.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=62)** Inside will be three columns.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=63)** One for the check-in date, it'll be a date data type, and I'll specify that it will not allow null values or empty cells.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=73)** Next we'll have a column for the room number.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=77)** This little store char three data type, and again, not null.
>
> **[1:23](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=83)** Finally, we'll have a column for the guest name.
>
> **[1:27](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=87)** I'll specify this as a varchar 50 data type.
>
> **[1:31](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=91)** Now creating composite primary keys in your database is done in much the same way as adding a regular single column primary key.
>
> **[1:39](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=99)** I'll type in a comma after my last column here, guest name, and come down to the next line.
>
> **[1:43](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=103)** Then we'll add in our constraint keyword, followed by the name of the constraint that I want to make.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=109)** I'll name this PK underscore CheckinRooms.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=113)** Then this is going to be a primary key constraint.
>
> **[1:57](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=117)** And inside parenthesis I'll list out the two columns that I want to be combined in the composite primary key.
>
> **[2:04](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=124)** For this table, that'll be the check-in date column and the room number column.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=130)** I'll press the run button up here to create that table.
>
> **[2:13](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=133)** And then we can go ahead and take a look inside of the tables folder and we'll find it.
>
> **[2:16](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=136)** Let's actually refresh this.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=140)** And if I go back into the tables folder, there is my new hotel rooms table.
>
> **[2:24](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=144)** And if I go into the keys folder, we'll see our primary key right there.
>
> **[2:28](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=148)** So now we can test it out by adding in a few rows for some guests that want to visit our hotel.
>
> **[2:33](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=153)** I'll come over here, back down to line number eight and we'll insert a new row of data.
>
> **[2:46](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=166)** First, I'll fill in a row for Dr. White, who's going to be checking in to room 201 on October 15th, 2020.
>
> **[2:55](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=175)** I'll highlight lines eight and nine and run it, and that row gets inserted into the table.
>
> **[3:01](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=181)** Now we can add in another row for someone on the same day, but in a different room.
>
> **[3:12](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=192)** Ms. Green will be visiting on the same day as Dr. White, October 15th, but she's going to be put into a different room, room umber 315.
>
> **[3:20](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=200)** If I highlight lines 11 and 12 and run this, again, that row gets inserted into the table without any problems.
>
> **[3:27](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=207)** We can also add someone to the same room but on a different day.
>
> **[3:40](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=220)** Mr. Brown will be staying in the same room that Dr. White had, room number 201 but it'll be on the following day, the 16th of October instead of the 15th.
>
> **[3:50](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=230)** Again, if I highlight lines at 14 and 15 and run this, that row will get inserted into the table without any issue.
>
> **[3:57](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=237)** However, what happens if we try and book the same room on the same day?
>
> **[4:07](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=247)** Now we're trying to put Mrs. Blue in the same room as Dr. White, on the same day.
>
> **[4:12](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=252)** So she's going to be booked into room 201 again, on the same day, October 15th.
>
> **[4:18](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=258)** If I run line 17 and 18, you'll see what happens.
>
> **[4:21](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=261)** We get a violation of the primary key.
>
> **[4:24](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=264)** In fact, it tells us exactly what the duplicate key value is.
>
> **[4:27](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=267)** And it's a combination of the date and the room number.
>
> **[4:31](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=271)** The database simply won't allow two records to have the same date and room combination.
>
> **[4:36](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=276)** This is due to the unique constraint created by the composite primary key.
>
> **[4:41](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=281)** It will only ever be a maximum of one row in this table for each room on a particular day.
>
> **[4:48](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=288)** If I select everything out of the database table, you'll see the three rows that were successfully entered in.
>
> **[4:56](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=296)** I'll select everything from hotel rooms and you'll see our three successful check-ins.
>
> **[5:01](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=301)** When you're done playing around with the different combinations of room and check in dates, make sure you remove the table from the database.
>
> **[5:09](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=309)** Run the command DROP TABLE HotelRooms, and that'll remove it from the twotrees database.
>
> **[5:15](https://www.linkedin.com/learning/database-foundations-data-structures/composite-keys?u=76281980&t=315)** So when there is no single attribute that can serve as the tables primary key, and you want to avoid adding another serialized number to the system, consider using a composite key made up of two or more naturally occurring columns in your table and investigate the implications that that might have on your database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (1), [[Microsoft SQL Server|Sql server]] (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** sql (1), drop (1), table (1)
> **SQL:** drop table (1)
> **UI Navigation:** right-click (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Surrogate keys](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=0)** - [Instructor] If there aren't any good candidates for naturally occurring primary keys or composite primary keys already present in your data, then you have no choice but to create a new column that contains new made up values pulled out of thin air.
>
> **[0:15](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=15)** These are called surrogate keys.
>
> **[0:18](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=18)** The values stored in a surrogate primary key column have no real world meaning.
>
> **[0:23](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=23)** Their entire purpose is to create a unique column in a data table, and that's it.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=28)** Typically, these take the form of an incrementing serial number or integer, but they can also use randomly generated values as well.
>
> **[0:36](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=36)** If you think about your bank account number, then you'll have a good idea about what a surrogate key can look like.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=42)** That number did not exist in the bank's records until you opened your account.
>
> **[0:48](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=48)** Then they generated your unique bank account number and assigned it to you.
>
> **[0:53](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=53)** No other customer will get the same number and that number doesn't have any other meaning than to be able to identify your account in their database.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=62)** Surrogate keys are everywhere.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=64)** Your library card number, credit card number, driver's license number, all of these are just surrogate keys that were made up by some organization or government as an easy way to be able to uniquely identify you and your accounts.
>
> **[1:20](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=80)** In fact, surrogate keys are so common that most [[Database Management]] systems provide ways to create and assign them automatically.
>
> **[1:28](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=88)** I want you to open up a new query window for my [[PostgreSQL]], two trees database.
>
> **[1:33](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=93)** Then I can create a simple table that'll store information about different types of fruit.
>
> **[1:40](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=100)** I'll create two columns in this table.
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=102)** One called fruit ID and the other one called type.
>
> **[1:48](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=108)** Right now our fruit ID column will be storing a basic integer and it'll be the primary key for the table.
>
> **[1:55](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=115)** If I were to add rows to this table, I need to supply a unique value for each row since it's the tables primary key, but we can have the RDBMS do the work of generating new ID numbers for each row so that I don't have to remember which numbers have already been used and which ones are still available.
>
> **[2:12](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=132)** In PostgreSQL, You do that by adding in a few keywords after the integer data type.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=138)** I'll click my mouse here right before our primary key and enter in the keywords generated always as identity.
>
> **[2:26](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=146)** Then inside of parentheses, you can put some parameters on the numbers that'll get generated.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=151)** For instance, you can start with the number 100 and increment each new row by 10, by typing in start with 100 increment by 10.
>
> **[2:41](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=161)** Let's run this command to create the table, and then we can start filling in some new rows.
>
> **[2:46](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=166)** I'm going to fill in three rows, but I'm only going to provide data for the type column.
>
> **[2:55](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=175)** We'll insert a row for apple, one for grape and one for watermelon.
>
> **[2:59](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=179)** Let's highlight these two lines and run them.
>
> **[3:01](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=181)** It tells me that the commands are completed successfully, and now I can select everything out of the table.
>
> **[3:10](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=190)** When I select everything from the fruit table, you'll get these results.
>
> **[3:14](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=194)** Notice that even though I didn't supply the fruit ID number, the PostgreSQL database system was automatically generating these numbers.
>
> **[3:21](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=201)** It started with the first row at number 100 and each successive row was incremented by 10.
>
> **[3:27](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=207)** [[Microsoft SQL Server|SQL Server]] uses a very similar syntax, although it's a bit more concise.
>
> **[3:31](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=211)** Let me scroll up to the top and I'm going to copy all of this to my clipboard, and then we'll start up a new query window inside of my SQL Server database.
>
> **[3:39](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=219)** Then I'll paste it in the exact same command.
>
> **[3:41](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=221)** In SQL Server, instead of saying generated always as identity start with 100 increment by 10, it's actually gets simplified down to just identity, and then in parentheses 100 comma 10.
>
> **[3:58](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=238)** Other than that small change, this command would work identically to the command that we just ran in PostgreSQL.
>
> **[4:04](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=244)** I'll highlight lines one through four and run it to create the table.
>
> **[4:08](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=248)** Then we'll insert the three rows and finally select everything out of the table again.
>
> **[4:14](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=254)** So there we go.
>
> **[4:15](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=255)** Our fruit IDs are being automatically generated by the SQL Server RDBMS.
>
> **[4:20](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=260)** So as you can see, when you do need to rely on unique surrogate primary keys, you can have the database engine do the work of generating the serial numbers and auto-assigning them to each row as they're added to the database.
>
> **[4:33](https://www.linkedin.com/learning/database-foundations-data-structures/surrogate-keys?u=76281980&t=273)** I'll save both of these scripts into the chapter three folder of the exercise files in case you want to play around with these identity commands.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL]] (4), [[Microsoft SQL Server|Sql server]] (4), [[Database Management]] (1)
> **Env Vars:** sql (4), rdbms (2)
> **UI Navigation:** scroll up (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Add a primary key to a table](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-add-a-primary-key-to-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-add-a-primary-key-to-a-table?u=76281980&t=0)** - [Instructor] It's time for another challenge.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-add-a-primary-key-to-a-table?u=76281980&t=7)** I'd like you to build on the employee's table that you started in the last challenge and now add on a new column for the table's primary key.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-add-a-primary-key-to-a-table?u=76281980&t=16)** None of the columns that are already present will work as a natural key, so you'll need to generate a new serial number for each row.
>
> **[0:24](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-add-a-primary-key-to-a-table?u=76281980&t=24)** Make use of the RDBMS IDENTITY functionality to automatically create and assign numbers to each employee.
>
> **[0:32](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-add-a-primary-key-to-a-table?u=76281980&t=32)** To complete this challenge, you'll need to recall the [[SQL]] command for adding additional columns to an existing table.
>
> **[0:39](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-add-a-primary-key-to-a-table?u=76281980&t=39)** We went over it in the previous course, but it may have been a while since you've last used it.
>
> **[0:44](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-add-a-primary-key-to-a-table?u=76281980&t=44)** The command ALTER TABLE ADD will get you started.
>
> **[0:48](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-add-a-primary-key-to-a-table?u=76281980&t=48)** I estimate that this challenge will take 10 minutes or less to complete.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-add-a-primary-key-to-a-table?u=76281980&t=52)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** rdbms (1), identity (1), sql (1), alter (1), table (1)
> **Prerequisites:** you'll need (2)
> **CLI Commands:** make (1)
> **SQL:** alter table (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Add a primary key to a table](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=0)** - [Instructor] I hope you were successful in adding in a new primary key column to the TwoTrees employees table.
>
> **[0:12](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=12)** Let's walk through the solution together.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=14)** I'm going to start by taking a look inside of my TwoTrees database that I have on the [[Microsoft SQL Server|SQL server]] instance.
>
> **[0:19](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=19)** You can do the same thing in the Postgre [[SQL]] database if you want it to.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=22)** Some expand the tables folder.
>
> **[0:24](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=24)** And there is the employees table that we created in the last challenge.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=28)** If I take a look inside the columns folder I can see the existing columns, or another way to do this is just to create a new query, and select everything out of the table.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=38)** So I'll just go ahead and run that real quick.
>
> **[0:40](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=40)** And so this is our starting point.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=41)** So we have first name, last name, phone number, [[Microsoft Office|office]] number, hire date, and the annual salary.
>
> **[0:47](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=47)** Now, none of these columns are likely to be unique in a large table.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=51)** We might eventually have somebody with the same first or last name, or first and last name.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=56)** We might use the same phone number for multiple employees.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=58)** So, none of these are going to work as the primary key for this table.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=63)** So that's why we need to add in a new column, that'll store an integer serial number.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=68)** So let's go ahead and get started with that.
>
> **[1:10](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=70)** There is multiple ways that we can do this.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=73)** We can do it in one step, or we can do it in two steps.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=77)** So I'm just going to make some notes here.
>
> **[1:20](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=80)** So the one-step method will look something like this.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=82)** First of all, alter the table, employees, and we'll add a new column.
>
> **[1:29](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=89)** I'm going to call this new column employee ID, and it's going to be an integer value.
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=95)** And we need to make use of the identity feature of SQL server, in order to automatically generate those serial numbers for each employee.
>
> **[1:43](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=103)** So, I don't need to do that every time I add a new person to this table.
>
> **[1:47](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=107)** So, in SQL server the way that we do that is by saying identity.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=112)** And then inside of parentheses the starting number, (mumbles) at number 1000, and then a comma, and the number that we want to increment each one by.
>
> **[2:01](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=121)** And I'll just say increment every one by one.
>
> **[2:03](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=123)** So, the first name will be a thousand.
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=125)** The next win will be 1,001 and so on.
>
> **[2:08](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=128)** And so that's all I need to do here, on SQL server in order to make this the identity column.
>
> **[2:14](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=134)** And then I can specify this as the primary key right when we create it.
>
> **[2:19](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=139)** So, if I ran this alter table statement it'll create a new column called employee ID.
>
> **[2:24](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=144)** It will be an integer data type.
>
> **[2:26](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=146)** It'll use the identity functionality to automatically assign numbers, starting at a thousand, and incrementing by one.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=151)** And it'll also set it as the primary key for the table.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=155)** So, that's how you can do it in a single step.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=157)** To do this in two steps, you would just have to run alter table twice.
>
> **[2:41](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=161)** So the first step might be altered table employees, and then we'll add in the column, something like that.
>
> **[2:52](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=172)** And then as a second step, we could add in the primary key cone straight.
>
> **[2:56](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=176)** So that would be another alter table statement.
>
> **[3:01](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=181)** And this time we'll add in a constraint, and this will allow us to name the constraint.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=185)** I could say PK underscore, let's just call it employee ID.
>
> **[3:11](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=191)** And it's going to be a primary key constraint.
>
> **[3:14](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=194)** And it'll be on the employee ID column that we're creating up here, and the first step of this two step process.
>
> **[3:23](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=203)** So, it would look like that.
>
> **[3:24](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=204)** So this is how we would do it in two steps.
>
> **[3:26](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=206)** The first one to add the column, and the second one to establish that column as the primary key for the table.
>
> **[3:33](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=213)** So it doesn't really matter which way you take, this one's a little bit simpler, but this one's a little bit clear if you're doing it at two different stages.
>
> **[3:39](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=219)** So I'm just going to run this one here and do it in two steps.
>
> **[3:43](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=223)** So I'll say run, that'll complete successfully.
>
> **[3:45](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=225)** So that added in the column to the table.
>
> **[3:47](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=227)** And now I can establish that column as the primary key for the table.
>
> **[3:51](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=231)** Good run that.
>
> **[3:52](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=232)** And I complete successfully.
>
> **[3:54](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=234)** So now if I select everything out of the employee stable again, we'll see that we have the new column over here.
>
> **[3:59](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=239)** This is the primary key for the table now.
>
> **[4:01](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=241)** And it automatically assigned the rows that were present in the database, starting at a thousand and incrementing them by one.
>
> **[4:06](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=246)** If you have more than one employee.
>
> **[4:09](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=249)** (mumbles) go through and test it out a new employee.
>
> **[4:14](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=254)** So we can add in a new employee if we want to, so insert into the employee's table, or answer the values.
>
> **[4:23](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=263)** If like let's just fill in the name columns.
>
> **[4:26](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=266)** I don't need to add values for everything.
>
> **[4:27](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=267)** So we'll supply a first name and a last name, and then we can say values, and we'll insert the values about Judith, and Judith's last name Leonard.
>
> **[4:42](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=282)** Okay. Is there an answered a new row into the employee's table.
>
> **[4:45](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=285)** And we're just going to fill it in the first name and last name values with Judith and Leonard.
>
> **[4:49](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=289)** If you had to run that, okay, one row is affected.
>
> **[4:52](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=292)** And if I select everything out of that table again, you'll see that Judith was automatically assigned to the employee ID number 1001.
>
> **[4:59](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=299)** And so that's how you would do this inside of SQL server.
>
> **[5:03](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=303)** The only difference if you are running this in [[PostgreSQL]], is with the identity specification up here, instead of just saying identity 1000 comma one you would need to say generated, always has identity.
>
> **[5:19](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=319)** And then inside of parentheses start with 1000, and then increment by one.
>
> **[5:27](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=327)** There's a little bit longer and [[PostgreSQL|Postgres]] SQL but this does exactly the same thing as the command identity.
>
> **[5:33](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=333)** 1000 comma one, in SQL server.
>
> **[5:36](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=336)** So that's the only difference you have to make.
>
> **[5:37](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=337)** If you were running this inside a Postgre queue app.
>
> **[5:40](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=340)** So I'm going to go ahead and save this as ChallengeTwo-Complete.txt inside of the chapter three folder of the exercise files.
>
> **[5:48](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-a-primary-key-to-a-table?u=76281980&t=348)** And you can compare my solution against yours.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (6), [[SQL]] (2), [[Microsoft Office|Office]] (1), [[PostgreSQL]] (1), [[PostgreSQL|Postgres]] (1)
> **Env Vars:** sql (8)
> **CLI Commands:** make (4)
> **File Paths:** challengetwo-complete.txt (1)
> **Cross-References:** in the last (1)
> **Documentation:** specification (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Alter a table's design](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=0)** (upbeat bright music)
>
> **[0:05](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=5)** - [Instructor] In this challenge, we're given a table that maintains a record of creative projects at a [[Graphic Design]] agency.
>
> **[0:11](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=11)** But this table has a fatal flaw and it's that it doesn't have a primary key.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=17)** And so our task is to add a surrogate key to this table that'll automatically add a value for every record that's added into the table.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=27)** So we can get started just by running the select statement.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=28)** We're just going to select all of the original columns that we have from the design projects table.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=34)** I'll test my code here to see what we're starting with.
>
> **[0:36](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=36)** So we have a column called PROJECTNAME, CLIENTNAME.
>
> **[0:40](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=40)** We have a CONTACTEMAIL, PROJECTSTARTDATE, PROJECTENDDATE, and the BUDGET.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=45)** And so you can see there is no primary key for this table.
>
> **[0:49](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=49)** It's a potential that we could have two projects with the same client name, and in fact we actually do, we could also have two projects with the same name if they're the same type of activity, like they have two different rebranding campaigns for two different clients, for example.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=63)** So there's lots of opportunity to have duplicate information in the values that are already here.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=68)** And so that is why we need a primary key for the table.
>
> **[1:12](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=72)** And that'll allow us to uniquely identify each of these individual rows.
>
> **[1:16](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=76)** So let's get started.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=78)** And I am actually going to put this above the select statement.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=81)** We'll keep that select statement so we can test how things are going as we move along.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=85)** Okay, so the first thing we need to do is to alter the table.
>
> **[1:29](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=89)** So ALTER TABLE DesignProjects.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=94)** And what I need to do is add in a new column called ProjectID.
>
> **[1:41](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=101)** Now, this is going to use the automatic key generation.
>
> **[1:46](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=106)** It's going to create a new key value that is an integer using the ANSI [[SQL]] standard.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=112)** So we'll say ADD ProjectID, it's going to store an integer value.
>
> **[1:57](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=117)** And then we can say, GENERATED ALWAYS AS IDENTITY And then in parentheses, in fact, I'm going to put this part on the next line just to keep everything on the screen.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=130)** So in parentheses we say, START WITH, the number that we want to start with.
>
> **[2:15](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=135)** And in the instructions, we're told to start all of these keys with the number 1000, and we'll say INCREAMENT by one.
>
> **[2:23](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=143)** So the first one will be a thousand, the next one will be 1,001 and so on.
>
> **[2:28](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=148)** And then this will be the primary key for the table.
>
> **[2:30](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=150)** So after the parentheses, PRIMARY KEY, and type in a comma.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=155)** So all of that defines the column that we're going to add into this table called ProjectID.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=162)** And actually let me, not a comma at the end, let me type in a semicolon because that finishes the alter table statement.
>
> **[2:48](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=168)** So let me run this now, we'll alter the table and select everything out of it again.
>
> **[2:51](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=171)** So I'll test the code.
>
> **[2:53](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=173)** Oh, and I have a typo here.
>
> **[2:57](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=177)** DesignProjects. I have an extra T there.
>
> **[3:01](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=181)** Okay, ALTER TABLE DesignProjects. Let's test it again.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=185)** Okay, so there we go.
>
> **[3:06](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=186)** So now we have the original columns, but if I scroll over here to the far right, we have the new PROJECTID, and it is automatically assigning those ID numbers.
>
> **[3:16](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=196)** So a thousand, 1,001, 1, 2, 3, and 1,004 for the five projects that we had originally in that table.
>
> **[3:23](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=203)** So that is the first part, is to add that column into the table.
>
> **[3:28](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=208)** Next we are asked to, let me come back over here and go into my answer section.
>
> **[3:33](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=213)** We are asked to add in a new project into the table.
>
> **[3:37](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=217)** So we need to do an insert statement.
>
> **[3:40](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=220)** So I'll say INSERT into DesignProjects, and we'll insert into the columns PROJECTNAME.
>
> **[3:51](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=231)** And the next one is CLIENTNAME.
>
> **[3:54](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=234)** Not sure why the IntelliSense didn't pop up there, but that's okay, we'll just type it in manually.
>
> **[3:59](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=239)** In fact, let me come down to the next line here and keep typing these in.
>
> **[4:02](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=242)** We have ContactEmail.
>
> **[4:05](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=245)** Next up we have the ProjectStartDate, the ProjectEndDate, and the Budget columns.
>
> **[4:18](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=258)** Okay, so those are the columns that we're going to be entering into.
>
> **[4:21](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=261)** And then we need their values clause.
>
> **[4:24](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=264)** So what do we want to enter in?
>
> **[4:25](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=265)** We want to enter in the values.
>
> **[4:27](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=267)** And the first value for the project name is App Icon Refresh.
>
> **[4:35](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=275)** It is for a company called KinetEco.
>
> **[4:37](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=277)** And these all go in single quotation marks.
>
> **[4:41](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=281)** The next is the email address.
>
> **[4:44](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=284)** So contact@[kinetico.com](https://kinetico.com) and I'll type in comma here and just come down to the next line.
>
> **[4:53](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=293)** Let me press escape to get rid of that window there.
>
> **[4:56](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=296)** Oh, let me press escape again to get rid of that one.
>
> **[4:59](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=299)** Okay, next up we have two nulls for the project start date and end date.
>
> **[5:04](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=304)** 'Cause we have not started it and we have obviously not finished it.
>
> **[5:08](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=308)** And then finally, the budget is $3,500 and I'll type in a parenthesis after that to finish off the values clause and a semicolon at the very end.
>
> **[5:18](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=318)** So we're going to insert into the DesignProjects table all of these columns, and then we'll insert the values that I have listed out right here.
>
> **[5:25](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=325)** Let me just scroll over to the right so you can see all of that there.
>
> **[5:29](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=329)** Okay, let's go ahead and test my code again.
>
> **[5:31](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=331)** It's going to alter the table again, insert this new row.
>
> **[5:35](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=335)** So here is our new App Icon Refresh row down at the very bottom, for the KinetEco company.
>
> **[5:41](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=341)** And it was automatically assigned the new project ID 1005.
>
> **[5:45](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=345)** So that was not included in our insert statement.
>
> **[5:48](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=348)** It's being generated automatically by the project ID column up above.
>
> **[5:53](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=353)** And so that is the second part of the challenge.
>
> **[5:57](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=357)** And then finally, we're just asked to return just a couple of columns instead of selecting everything.
>
> **[6:01](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=361)** So I'm going to change this from SELECT * from DesignProjects, and we'll just select the columns that we were asked for.
>
> **[6:07](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=367)** So the ProjectID, ProjectName, ClientName, and Budget from the DesignProjects table.
>
> **[6:18](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=378)** Once again, we'll test the code and there we go.
>
> **[6:20](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=380)** We have a correct output.
>
> **[6:21](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=381)** It is just the columns that we were asked for.
>
> **[6:24](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=384)** One, two, three, and four.
>
> **[6:26](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=386)** We have the new row added to the bottom.
>
> **[6:29](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=389)** We have the ProjectID column selected first, based on this select statement there.
>
> **[6:33](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=393)** And so we can see the automatic ID generation.
>
> **[6:36](https://www.linkedin.com/learning/database-foundations-data-structures/solution-alter-a-table-s-design?u=76281980&t=396)** So here is our new primary key column that we have added into this table, and that is my solution to this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Graphic Design]] (1), [[SQL]] (1)
> **Env Vars:** projectname (2), clientname (2), alter (2), table (2), contactemail (1)
> **SQL:** alter table (2), primary key (1), select (1)
> **URLs:** [kinetico.com](https://kinetico.com) (1)
> **UI Navigation:** select the (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 4. Link Data with Foreign Keys

[↑ Back to Table of Contents](#table-of-contents)

#### [What are foreign keys?](https://www.linkedin.com/learning/database-foundations-data-structures/what-are-foreign-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/what-are-foreign-keys?u=76281980&t=0)** - [Instructor] There's one more type of key value that's important to the structure of a relational database, and they're called foreign keys.
>
> **[0:08](https://www.linkedin.com/learning/database-foundations-data-structures/what-are-foreign-keys?u=76281980&t=8)** Believe it or not, you've already seen them in action throughout this course.
>
> **[0:12](https://www.linkedin.com/learning/database-foundations-data-structures/what-are-foreign-keys?u=76281980&t=12)** Think back to our normalization of the pet and owner database.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-data-structures/what-are-foreign-keys?u=76281980&t=16)** We wound up with three tables, one for owners, one for locations where they live, and one for their pets.
>
> **[0:23](https://www.linkedin.com/learning/database-foundations-data-structures/what-are-foreign-keys?u=76281980&t=23)** These three tables were given a unique primary key column to identify every row in each of these tables.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-data-structures/what-are-foreign-keys?u=76281980&t=30)** Now, in order to relate information together, we added two additional columns to the [[Databases]] structure, one column in and the owners table that points to the related address information for each person, and we also had a column in the pets table that points to the related owner information for each pet.
>
> **[0:49](https://www.linkedin.com/learning/database-foundations-data-structures/what-are-foreign-keys?u=76281980&t=49)** These columns are the foreign keys, and they're used to connect related rows back together again.
>
> **[0:55](https://www.linkedin.com/learning/database-foundations-data-structures/what-are-foreign-keys?u=76281980&t=55)** Foreign key columns store the primary keys value of the rows that they're related to.
>
> **[1:01](https://www.linkedin.com/learning/database-foundations-data-structures/what-are-foreign-keys?u=76281980&t=61)** Because they need to store the same value, their data type needs to be the same as the primary key's data type in the related table.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-data-structures/what-are-foreign-keys?u=76281980&t=68)** So if the primary key in one table uses an integer data type, the foreign key columns in the other tables also need to use an integer data type.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-data-structures/what-are-foreign-keys?u=76281980&t=78)** If your primary key uses character data, then the related foreign keys must also be a character data type.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-data-structures/what-are-foreign-keys?u=76281980&t=85)** Creating the foreign key column and storing the matching values is only the first step of the process though.
>
> **[1:31](https://www.linkedin.com/learning/database-foundations-data-structures/what-are-foreign-keys?u=76281980&t=91)** To get the most out of your foreign keys, you need to let the RDBMS know that there's a formal link between the data in the foreign key column and the data in the primary key column.
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-data-structures/what-are-foreign-keys?u=76281980&t=102)** This way, the database engine can help maintain that relationship and enforce certain constraints on the values that get stored in each column.
>
> **[1:51](https://www.linkedin.com/learning/database-foundations-data-structures/what-are-foreign-keys?u=76281980&t=111)** The foreign key constraint will make sure that the values in each column stay synchronized and point to the correct rows, even as data is added or updated.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** rdbms (1)
> **Speakers:** - [instructor] (1)

#### [Add a foreign key column to a table](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=0)** - [Tutor] The first step in creating a foreign key relationship is to add the column that will hold values that relates back to another table.
>
> **[0:08](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=8)** Previously, we created a table for the TwoTrees customers Now we want to add a new table that will store order information that relates to those customers.
>
> **[0:18](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=18)** I'm going to select the TwoTrees database in my [[Microsoft SQL Server|SQL server]] instance and then come up to the file menu and choose open file.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=25)** Then inside of the exercise files, chapter four folder, we're going to find a file called foreignkey.[[SQL]].
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=31)** Let's go ahead and open that up.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=34)** So the first thing I want to do is review the existing customers table.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=38)** So let me run my number two here.
>
> **[0:40](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=40)** This shows us our starting position.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=43)** The customer's table was created with a primary key and it uses the char five data type in this column here for customer ID.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=51)** If you need a reminder of this, you can go over to the connection sidebar and expand the tables folder and then expand the customer's table and you'll find the customer ID here.
>
> **[1:00](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=60)** It's the primary key PK and it's a char five data type.
>
> **[1:05](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=65)** Now I can create an orders table that leads back to this customer data.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=69)** Let me move the results window down on the screen a little bit here and we'll focus on lines five through 10.
>
> **[1:16](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=76)** We're going to create a new table called orders.
>
> **[1:19](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=79)** It'll have four columns in it.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=81)** Order_id will be the primary key for the table, and it'll be an integer value.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=85)** It'll also use the identity function in order to create new numbers that started a hundred and are incremented by one for every new row that's added to this table.
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=95)** Now, again, if you're using [[PostgreSQL]], you want to scroll over here to the right and use this syntax instead, generated always as identity start with 100 increment by one.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=105)** All right, let's go back here to the left.
>
> **[1:48](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=108)** The next column will be the order_date.
>
> **[1:50](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=110)** It'll use a date data type.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=112)** After that, we're going to store the total price for the order as a decimal 10, two.
>
> **[1:57](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=117)** And finally we have a column called customer_id and it'll store the char five data type.
>
> **[2:02](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=122)** The customer_id column is the foreign key that will point back to the customer's table so that we can see more information about who placed each of these orders.
>
> **[2:12](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=132)** So let's run lines five through 10 to create that table.
>
> **[2:16](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=136)** Next, we can insert a few rows of data.
>
> **[2:19](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=139)** I'm going to run lines 12 through 17.
>
> **[2:22](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=142)** These represent four new orders that were received by the TwoTrees olive oil company.
>
> **[2:28](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=148)** Now, if I scroll down into my script a little bit, we'll find these two lines on 20 and 21.
>
> **[2:33](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=153)** It's simply going to select everything from the customer's table and then select everything from the orders table.
>
> **[2:39](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=159)** This will allow me to review the current state of each of the two tables.
>
> **[2:43](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=163)** Now we can start to see the bigger picture of what's going on.
>
> **[2:45](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=165)** For instance, I have an order here for order number 101, it was placed on October 19th for $128.76 and it was placed by customer FV418.
>
> **[2:57](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=177)** If I want more information about this customer, I'll just take this value up to the customer's table and I locate it right there.
>
> **[3:04](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=184)** That tells me that the order was placed by Flavorville and there's their address.
>
> **[3:08](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=188)** So we can manually follow the thread between these two tables but a better option is to write out a select query with a join to display the related information together.
>
> **[3:19](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=199)** I got that written out starting on line 24.
>
> **[3:23](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=203)** This time we'll select a number of different columns from each of the two tables.
>
> **[3:27](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=207)** From the orders table, we'll grab the order_id and the order_date.
>
> **[3:31](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=211)** From the customer's table, we'll get the company, customer_id, address, city and state.
>
> **[3:37](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=217)** And then from the orders table again, we'll grab the total price column.
>
> **[3:41](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=221)** The link between the foreign key and the primary key is established in the from clause of this query.
>
> **[3:47](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=227)** So this says that we're pulling information from the customer's table and we're joining it to the orders table.
>
> **[3:52](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=232)** The two fields that are related are listed in the on clause.
>
> **[3:56](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=236)** Customers.customer_id is the primary key and orders.customer_id is the foreign key.
>
> **[4:04](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=244)** When you execute this query, you'll see the result.
>
> **[4:07](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=247)** It'll show me all of the related information joined together in an easy to read format.
>
> **[4:12](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=252)** So here's that same order.
>
> **[4:13](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=253)** Number 101, there's the date, the company name, the customer ID and the address all listed on a single row.
>
> **[4:21](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=261)** So that's the first part of creating a foreign key relationship.
>
> **[4:24](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=264)** Set up the columns and their related table to hold the values with the same data type.
>
> **[4:30](https://www.linkedin.com/learning/database-foundations-data-structures/add-a-foreign-key-column-to-a-table?u=76281980&t=270)** The next step is to let your RDBMS know about the relationship so that the proper constraints can be enforced on that data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (1), [[SQL]] (1), [[PostgreSQL]] (1)
> **Code Identifiers:** customer_id (5), order_date (2), order_id (1)
> **CLI Commands:** find (3)
> **Env Vars:** sql (1), fv418 (1), rdbms (1)
> **UI Navigation:** select the (1), scroll down (1)
> **Analogies:** picture (1), for instance (1)
> **File Paths:** foreignkey.sql (1)
> **Versions:** 128.76 (1)

#### [Create a relationship between tables](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=0)** - [Instructor] Adding the foreign key column to a table is the first step in creating a relationship.
>
> **[0:05](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=5)** Now, we need to tell the RDBMS about the link between our orders and customers tables so that it can enforce the connection between rows.
>
> **[0:15](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=15)** Make sure that you have the two trees database selected in the [[Microsoft SQL Server|SQL server]] instance, and then come up to file and open file.
>
> **[0:21](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=21)** In the chapter four folder, find the relationship dot [[SQL]] file and open it up.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=27)** Now, before we go on, you might have a number of red underlines that are appearing throughout this script.
>
> **[0:32](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=32)** As your data studio keeps track of the object names that you've used in your [[Databases]] so that it can help you write commands, but it sometimes needs to be manually updated.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=42)** Right click anywhere here on the main portion of the screen and choose command pallet from the pop-up menu.
>
> **[0:47](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=47)** Then do a search for refresh IntelliSense cache.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=52)** When you find it, go ahead and give that a click and as your Data Studio will refresh the cache that it's using for all of your object names.
>
> **[0:59](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=59)** After a moment, all of those red underlines will disappear.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=63)** Okay, now we can turn our attention back to the script.
>
> **[1:06](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=66)** Let's take it quick look at both the customers and the orders tables to see what we have so far.
>
> **[1:11](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=71)** I'm just going to select everything from each of these tables.
>
> **[1:15](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=75)** Right now we have four orders and you can see those down here at the bottom.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=78)** You can locate the company name and address by following the related customer ID values between each table.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=85)** You and I know that there's a relationship here, but we haven't yet told the database server about it.
>
> **[1:31](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=91)** And this can cause problems with regard to the integrity of the data.
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=95)** For instance, what happens when we add in an order for a brand new company?
>
> **[1:40](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=100)** On line number six, I'm going to insert a new row into the order's table.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=104)** It'll be for October 22nd, 2020, the price $397 and 54 cents and the customer ID number of DF399.
>
> **[1:55](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=115)** Let's highlight these two lines and run them and that'll get inserted into the table.
>
> **[2:00](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=120)** Now, if I select everything out of each table again, you'll see what happens.
>
> **[2:04](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=124)** Here on order number 104, we have the data that we just entered.
>
> **[2:08](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=128)** If we take this customer ID value up to the customer's table and try and find out who it's for and where to ship this order, we're going to have a big problem.
>
> **[2:17](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=137)** There is no matching row here to give us the information that we need.
>
> **[2:21](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=141)** When you have a relationship in a database, the table that's linked by the primary key field is often called the parent table.
>
> **[2:29](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=149)** The table that's linked by the foreign key is called the child table.
>
> **[2:34](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=154)** When you have a row in a child table that has no corresponding row in the parent table, it's referred to as an orphaned row.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=162)** Orphans are a big problem in the usability of any database.
>
> **[2:45](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=165)** So we need to prevent this kind of situation from happening.
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=169)** To do this, we need to add a constraint that says that rows can only be added to the orders table, if they point to an existing value in the customer's table.
>
> **[3:00](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=180)** This is called a foreign key constraint.
>
> **[3:03](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=183)** So let's remove this new row from the database.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=185)** Let's scroll down on my script here and run line number 12 that is delete from the orders table, where the customer ID is DF399.
>
> **[3:14](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=194)** Now we can add in the constraints.
>
> **[3:16](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=196)** We use the same syntax as when we added the primary key constraint to an existing table.
>
> **[3:22](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=202)** We'll alter the table orders and add constraint.
>
> **[3:26](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=206)** You can name the constraint, whatever you want.
>
> **[3:28](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=208)** A typical name would start with FK underscore, then the name of the table the relationship is on the customer's table and the column that's being linked, the customer ID column.
>
> **[3:39](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=219)** So this is the name of the constraint, so that we can recognize it later on in the connection sidebar over here on the left, once it's created.
>
> **[3:47](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=227)** Next, this is going to be a foreign key constraint.
>
> **[3:50](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=230)** And then we have the name of the column in this table, that's the foreign key column and that's customer ID.
>
> **[3:57](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=237)** After that, we need to tell the server, which column in the other table holds the related values.
>
> **[4:02](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=242)** And we do that with the references keyword, the name of the table, customers, and the name of the column in that table, which is also customer ID.
>
> **[4:12](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=252)** Now we should point out here that we're using the same column names in both tables.
>
> **[4:17](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=257)** The primary key in the customer's table is the customer ID column and the foreign key column in the orders table is also named customer ID.
>
> **[4:26](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=266)** It's often convenient to have both columns use the same name, but that's not a requirement.
>
> **[4:32](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=272)** As long as the data values stored in each column match up, the actual names of the columns can be different.
>
> **[4:40](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=280)** So let's run line 16 through 19 in order to create the constraint on the orders table.
>
> **[4:45](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=285)** Now we can locate it in the connection sidebar.
>
> **[4:48](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=288)** Let's come over here and refresh the two trees database.
>
> **[4:52](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=292)** Then I'll open up the tables folder and the orders table and inside of the keys folder, you'll see the new constraint that we just created right there.
>
> **[5:00](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=300)** If you ever needed to remove the constraint, the command would be alter table orders, drop constraint and then this name FK customers, customer ID.
>
> **[5:11](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=311)** So now that we have our constraint, let's try and add in that orphan row again.
>
> **[5:15](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=315)** Let's scroll down here on the script to line number 22.
>
> **[5:19](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=319)** So we're going to insert the new row into the orders table again and we're going to use the same details as before, specifically customer ID DF399.
>
> **[5:30](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=330)** When I try and run lines 22 and 23, this time I get an error.
>
> **[5:34](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=334)** The data that I just tried to enter is not saved into the database.
>
> **[5:38](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=338)** The foreign key constraint recognized that there would be no matching row in the customer's table.
>
> **[5:43](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=343)** So it prevents the insert from being successful.
>
> **[5:47](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=347)** If this was a valid order for a new customer, we would need to add the customer's details to the database first.
>
> **[5:54](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=354)** To do that, I'll insert a new row into the customer's table and we'll insert the row for Delish food.
>
> **[6:00](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=360)** There, the customer that has the ID of DF399.
>
> **[6:04](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=364)** So we'll insert them into the customer's table.
>
> **[6:07](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=367)** Once they're safely in that table, we can then enter in their first order.
>
> **[6:11](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=371)** I'll run this line here 29 and 30 insert the order details and this time it's successful.
>
> **[6:19](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=379)** Let's take one final look at the contents of both tables and there is the final result.
>
> **[6:25](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=385)** Here's the row with the new customer and here is the row with their first order.
>
> **[6:31](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=391)** Once formal foreign key constraints are created between two tables, the RDBMS can enforce referential integrity between the tables.
>
> **[6:40](https://www.linkedin.com/learning/database-foundations-data-structures/create-a-relationship-between-tables?u=76281980&t=400)** From this point on the database server will verify the existence of a matching value in the parent table before new rows are allowed to be added into the child table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (1), [[SQL]] (1), [[Databases]] (1)
> **Env Vars:** df399 (4), rdbms (2), sql (2)
> **CLI Commands:** find (3), make (1)
> **UI Navigation:** scroll down (2)
> **Definitions:** is called (2)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [IDENTITY column sequences](https://www.linkedin.com/learning/database-foundations-data-structures/identity-column-sequences?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/identity-column-sequences?u=76281980&t=0)** - [Instructor] I'd like to take a quick aside and point out something that you might have noticed as we went through the process of adding and removing new rows in our orders table.
>
> **[0:10](https://www.linkedin.com/learning/database-foundations-data-structures/identity-column-sequences?u=76281980&t=10)** Let's take a quick look at the data.
>
> **[0:12](https://www.linkedin.com/learning/database-foundations-data-structures/identity-column-sequences?u=76281980&t=12)** I'm going to right-click on the TwoTrees database and choose New Query, and then we'll simply select everything from the orders table.
>
> **[0:20](https://www.linkedin.com/learning/database-foundations-data-structures/identity-column-sequences?u=76281980&t=20)** If you read through the order ID values, you might spot something concerning.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-data-structures/identity-column-sequences?u=76281980&t=25)** There's a gap in the sequence.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-data-structures/identity-column-sequences?u=76281980&t=28)** Yours might be different from mine, but mine goes 103, then jumps to 106, so it looks like we're missing a few rows.
>
> **[0:36](https://www.linkedin.com/learning/database-foundations-data-structures/identity-column-sequences?u=76281980&t=36)** That is not what's happening here though.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-data-structures/identity-column-sequences?u=76281980&t=38)** Think back to the reason that we added this column to the table.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-data-structures/identity-column-sequences?u=76281980&t=42)** These values are surrogate keys and they have no real world meaning, and their only purpose is to provide a unique value for each row.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-data-structures/identity-column-sequences?u=76281980&t=51)** Likewise, a gap in the sequence, also has no real world significance.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-data-structures/identity-column-sequences?u=76281980&t=56)** Because we're using the IDENTITY function to automatically generate new ID numbers for each row, the RDBMS will never reuse a number that is assigned previously.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-data-structures/identity-column-sequences?u=76281980&t=68)** So when you add a row and then delete the row, that identity value is also removed, and the database server will not use that number again.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-data-structures/identity-column-sequences?u=76281980&t=78)** That's why you'll find gaps in the sequences like this, but [[Representational State Transfer (REST)|rest]] assured there are no missing rows and everything is still functioning as it should.
>
> **[1:27](https://www.linkedin.com/learning/database-foundations-data-structures/identity-column-sequences?u=76281980&t=87)** The only problem is that we, as human beings, like to find patterns of things that are actually insignificant to the operation of the database engine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** find (2)
> **Env Vars:** identity (1), rdbms (1)
> **UI Navigation:** right-click (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Create a table constraint](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980&t=5)** - [Person] In this challenge, we find ourselves working for a pet adoption organization that needs some help with their record-keeping database.
>
> **[0:12](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980&t=12)** We're tasked with adding a relationship between the "Owners" table and the "Pets" table, so that they can determine who owns who.
>
> **[0:20](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980&t=20)** So in the instructions, we're given two tables, we have the "Owners" table, and I'm just going to select everything out of it to see what we have to work with.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980&t=28)** So we have some information about our owners, we have Alex Johnson is owner one, Maria Lopez is two, and Sam Patel is three, and we have their phone number, so that is the owner information, but it doesn't tell us anything about their pets.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980&t=42)** And then, if I switch this over to select everything from the "Pets" table, and take a look at that one, we have pet information, we have their ID, the pet's name, their species, and the pet's birth date, but it doesn't tell us who owns them, and so, what we need to do is create a relationship between these two tables that will link everything together based on some information that we were able to gather from the people that worked in the [[Microsoft Office|office]].
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980&t=69)** Maybe they had things written down on a post-it note, or on a whiteboard, or however they had it, it was not in their database, so we need to add it into the database, and that is our challenge here.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980&t=81)** So the first thing we need to do is alter this pet table and add in a column that will relate each of these animals to their owner by storing the owner ID as a new column in this table, so let's go ahead and get started with that, we're going to alter "TABLE Pets," and all we need to do here is say, "ADD OwnerID."
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980&t=102)** That is a new column that'll store an integer data type, and let me just select everything out of the "Pets" table just so we can see what that looks like.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980&t=113)** So I'll go ahead and test my code, and there is the new column, so now, all we need to do is fill in the integer values for each of the owner IDs that relate back to each of these animals.
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980&t=125)** So we can get started with that by updating that column, so "UPDATE Pets," and we're going to set "OwnerID" equal to the number one for all of Alex Johnson's pets, and we are told that Alex Johnson owns Buddy the dog and Rex the dog, so that is "PetIDs" number one and three, so I'll say, "WHERE PetID = 1 OR PetID = 3."
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980&t=158)** Type that semicolon, let's go ahead and test it again.
>
> **[2:41](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980&t=161)** Okay, so that fills in Alex Johnson's ID number here, so we can see that he owns Buddy and Rex.
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980&t=169)** Next step, we need the second person, so once again, we'll update the "Pets" table, set "OwnerID" equal to two, and this is for Maria Lopez, we're told that Maria owns Whiskers the cat, or "PetID" number two, so "WHERE PetID = 2."
>
> **[3:08](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980&t=188)** Type that semicolon and test it again, and that updates the record for Maria's animal.
>
> **[3:14](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980&t=194)** And finally, we need to update "Pets" one more time, we're going to set the "OwnerID" equal to three, and this is Sam Patel's record, and Sam owns Cocoa the parrot and Luna the rabbit, so "PetIDs" four and five, so I can say, "WHERE PetID = 4 OR PetID = 5," there is another way that we can do this, though.
>
> **[3:39](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980&t=219)** If we have two, we could say where "PetID" is in, and use an "IN" function and say, "IN(4, 5)," so that's just an alternate way if you have two different records you need to set.
>
> **[3:50](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980&t=230)** We could do it like we have up here, where we have an "OR" statement, or we can use an "IN" statement and just list out... Them out there like that, so that's just a different way we can get to the same information.
>
> **[4:00](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980&t=240)** All right, I'll type in a semicolon there, test it again, and that adds in the owner-ID number three for Sam Patel, for Coco and Luna, so that fills in all of our owner IDs, we can now know who owns which animal.
>
> **[4:15](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980&t=255)** Now that that information is stored in the data table, we can add in a formalized constraint, and this way, any new pets that are added into the table will be required to have their owners recorded at the same time, and that way, we won't run into the issue again where we don't know which pet goes with which owner, so in order to add in a formal foreign-key restraint, we need to say, "ALTER TABLE Pets."
>
> **[4:42](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980&t=282)** This time, we're going to add in a constraint, and we can name this constraint whatever you want, doesn't really matter, I'm just going to say, "FK," because it's a foreign key constraint and it's between the "Owners" table and the "Pets" table, so I'll just call it "FK_Owners_Pets," it is a foreign key constraint, and in the "Pets" table, we're going to place this foreign key constraint on the "OwnerID" column, and it's going to refer, or reference, with the keyword "REFERENCES," the "Owners" table, and the name of the column in that table is also "OwnerID."
>
> **[5:28](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980&t=328)** So this will set up the foreign key constraint on the "Pets" table so that every new record will be required to have a valid owner ID before each new pet can be added into that table.
>
> **[5:41](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980&t=341)** All right, and now, once that is in place, we are asked to select just a couple of tables... Or a couple of columns from those two tables joined together, so I'm going to get rid of the "SELECT" asterisk and I'll move that from-line down here, so we're going to asked for a couple of columns here, I'm just going to say, "SELECT Pets.PetName."
>
> **[6:03](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980&t=363)** From the "Pets" table, we're also asked for the species, as well as the birth date, then from the "Owners" table, we were asked for the owner name as well as the phone number, and this is coming from the "Pets" table, but now that we have that owner ID foreign-key relationship, we can join them together, so we're going to "INNER JOIN" the "Pets" table to the "Owners" table on the related column, "Pets.OwnerID = Owners.OwnerID,"
>
> **[6:49](https://www.linkedin.com/learning/database-foundations-data-structures/solution-create-a-table-constraint?u=76281980&t=409)** and that finishes my "SELECT" statement, we're able to join them together and we can test everything out here, and there, we have a correct output, so I'm getting the pet name, species, and birthdate from the "Pets" table, and the owner's name and phone number coming out of the related "Owners" table, and we're joining everything together based on the foreign key relationship that we just created in a column called "OwnerID" in both tables, and so, that is my solution to this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1)
> **Env Vars:** where (3), select (3), table (2), add (1), update (1)
> **SQL:** where (3), select (3), update (1), alter table (1), inner join (1)
> **Prerequisites:** required to (2), set up (1)
> **CLI Commands:** find (1), cat (1)
> **Definitions:** is a  (2)
> **Speakers:** - [person] (1)
> **Non-Speech:** (upbeat electronic music) (1)


### 5. Formalize Data Relationships

[↑ Back to Table of Contents](#table-of-contents)

#### [One-to-many relationships](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-many-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-many-relationships?u=76281980&t=0)** - [Instructor] In a relational database, there are three different kinds of relationships that can be made between the rows in two different tables.
>
> **[0:08](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-many-relationships?u=76281980&t=8)** The most common, by a large margin, is a one-to-many relationship.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-many-relationships?u=76281980&t=14)** If you think about your own life, you'll easily find one-to-many relationships all around.
>
> **[0:19](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-many-relationships?u=76281980&t=19)** Your one library card has been used to check out many books.
>
> **[0:24](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-many-relationships?u=76281980&t=24)** Your one bank account has had many transactions.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-many-relationships?u=76281980&t=28)** A single customer can make multiple purchases.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-many-relationships?u=76281980&t=31)** One-to-many relationships are everywhere.
>
> **[0:35](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-many-relationships?u=76281980&t=35)** A one-to-many relationship doesn't mean that there are absolutely multiple related records, though.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-many-relationships?u=76281980&t=41)** It simply means that the database tables are configured to support the possibility.
>
> **[0:47](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-many-relationships?u=76281980&t=47)** The relationship describes the tables, not the data.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-many-relationships?u=76281980&t=51)** Consider the pet owners database again.
>
> **[0:53](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-many-relationships?u=76281980&t=53)** In the beginning, our friend Tabitha has no pets.
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-many-relationships?u=76281980&t=57)** Her record is added to the owners table, but there are no matching records in the pets table.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-many-relationships?u=76281980&t=63)** The relationship between these two tables is between the primary key in the owners table and the foreign key in the pets table.
>
> **[1:11](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-many-relationships?u=76281980&t=71)** Since the primary key value must be unique, but there is no unique constraint on the foreign keys value, the relationship between these two tables is one-to-many.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-many-relationships?u=76281980&t=82)** It doesn't matter how many rows are actually matched.
>
> **[1:26](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-many-relationships?u=76281980&t=86)** Then Tabitha gets her first pet.
>
> **[1:29](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-many-relationships?u=76281980&t=89)** A row is inserted in the pets table to add her new goldfish.
>
> **[1:33](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-many-relationships?u=76281980&t=93)** Now Tabitha's row matches to a single row in the pets table, but the relationship between these two tables is still one-to-many.
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-many-relationships?u=76281980&t=102)** Later, Tabitha adopts a new dog and the pets table is updated again.
>
> **[1:47](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-many-relationships?u=76281980&t=107)** None of these row inserts affects the structure of these tables.
>
> **[1:51](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-many-relationships?u=76281980&t=111)** They're designed to support one-to-many relationships, regardless of the data that they actually contain.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-many-relationships?u=76281980&t=118)** The type of join is dictated by the presence or absence of unique constraints on the attribute columns.
>
> **[2:04](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-many-relationships?u=76281980&t=124)** A join between a column with a unique constraint and one without a unique constraint will always be a one-to-many relationship.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1), means that (1)
> **Speakers:** - [instructor] (1)

#### [One-to-one relationships](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-one-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-one-relationships?u=76281980&t=0)** - - [Narrator] One-to-one relationships are not nearly as common as one to many, but they do have their place in certain circumstances.
>
> **[0:09](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-one-relationships?u=76281980&t=9)** We've already established that the join type is dictated by unique constraints.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-one-relationships?u=76281980&t=14)** A one-to-one relationship exists when both columns in the join have a unique constraint on them.
>
> **[0:20](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-one-relationships?u=76281980&t=20)** This is most commonly seen when joining primary keys in both tables.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-one-relationships?u=76281980&t=26)** Here's an example of when this might occur.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-one-relationships?u=76281980&t=28)** In this [[Human Resources (HR)|human resources]] database, we've got one table to store common information about some employees like their name and the department that they work in.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-one-relationships?u=76281980&t=38)** This information isn't very sensitive and it's made available to everyone in the company.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-one-relationships?u=76281980&t=43)** But the human resources department has a second table that adds some information about each of these employees such as their salary or their government issued tax ID number.
>
> **[0:53](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-one-relationships?u=76281980&t=53)** Since both tables use the employee ID as the primary key, which is by definition unique, they can be joined in a one-to-one relationship.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-one-relationships?u=76281980&t=63)** Each record in one table can be matched with exactly one record in the other.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-one-relationships?u=76281980&t=68)** And since the human resources information is sensitive, different security settings can be applied to the second table to ensure that only people with the proper permissions can read it.
>
> **[1:19](https://www.linkedin.com/learning/database-foundations-data-structures/one-to-one-relationships?u=76281980&t=79)** Applying different security settings to portions of the data is the primary use of one-to-one relationships in [[Relational Databases]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Human Resources (HR)|Human resources]] (3), [[Relational Databases]] (1)
> **Analogies:** such as (1)

#### [Many-to-many relationships](https://www.linkedin.com/learning/database-foundations-data-structures/many-to-many-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/many-to-many-relationships?u=76281980&t=0)** - [Instructor] The third and final type of relationship that you can create is a many-to-many relationship.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-data-structures/many-to-many-relationships?u=76281980&t=7)** If you've been following along, then it's probably no surprise that a many-to-many relationship is created between two columns where neither of them have a unique constraint applied.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-data-structures/many-to-many-relationships?u=76281980&t=17)** A common example of a many-to-many relationship looks like this.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-data-structures/many-to-many-relationships?u=76281980&t=22)** We have a class schedule database with one table to store information about students and a second table that stores information about classes.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-data-structures/many-to-many-relationships?u=76281980&t=31)** We want to allow each student to take many different classes, and we also want each class to have many different students.
>
> **[0:39](https://www.linkedin.com/learning/database-foundations-data-structures/many-to-many-relationships?u=76281980&t=39)** However, there isn't a good way to relate the tables together based off of the columns that we have.
>
> **[0:44](https://www.linkedin.com/learning/database-foundations-data-structures/many-to-many-relationships?u=76281980&t=44)** To create the relationship, we would need a non-unique column in each table and that can get messy if we have multiple Andrea's at the same school or if physics is offered at different times of the day.
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-data-structures/many-to-many-relationships?u=76281980&t=57)** In order to join this type of information together, we need to create a linking table that will serve as a bridge.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-data-structures/many-to-many-relationships?u=76281980&t=64)** This allows us to make two one to many relationships that will join several rows from the Students table to several rows in the Classes table.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-data-structures/many-to-many-relationships?u=76281980&t=73)** You'll often be able to identify these kinds of tables by their name.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-data-structures/many-to-many-relationships?u=76281980&t=77)** A common approach is to name the linking table with a combination of the two tables that they joined together.
>
> **[1:23](https://www.linkedin.com/learning/database-foundations-data-structures/many-to-many-relationships?u=76281980&t=83)** So in this case, the linking table is named Student-Classes.
>
> **[1:27](https://www.linkedin.com/learning/database-foundations-data-structures/many-to-many-relationships?u=76281980&t=87)** This is where our two columns without unique constraints will go.
>
> **[1:33](https://www.linkedin.com/learning/database-foundations-data-structures/many-to-many-relationships?u=76281980&t=93)** If we take a look at how this arrangement works with the data, you can follow the threads of information from the Students table through the linking table and to the courses table.
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-data-structures/many-to-many-relationships?u=76281980&t=102)** This allows you to see that Andrea is enrolled in both biology and physics.
>
> **[1:48](https://www.linkedin.com/learning/database-foundations-data-structures/many-to-many-relationships?u=76281980&t=108)** You can also go the other way to find out who is enrolled in [[Calculus]] by finding its ID number, 503, taking that to the Student-Classes table to find student 101, and then to the Students table to find that Brandon is the only one in the calculus class.
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-data-structures/many-to-many-relationships?u=76281980&t=125)** So that's how many-to-many relationships work.
>
> **[2:08](https://www.linkedin.com/learning/database-foundations-data-structures/many-to-many-relationships?u=76281980&t=128)** There are theoretically possible, but they require a linking table to implement in a relational database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Calculus]] (2)
> **CLI Commands:** find (3), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Self-referencing relationships](https://www.linkedin.com/learning/database-foundations-data-structures/self-referencing-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/self-referencing-relationships?u=76281980&t=0)** - [Narrator] Relationships are almost always made between two different data tables.
>
> **[0:05](https://www.linkedin.com/learning/database-foundations-data-structures/self-referencing-relationships?u=76281980&t=5)** But it is possible for a column in a table to relate to another column in the same table.
>
> **[0:11](https://www.linkedin.com/learning/database-foundations-data-structures/self-referencing-relationships?u=76281980&t=11)** This is called a self-referencing relationship.
>
> **[0:15](https://www.linkedin.com/learning/database-foundations-data-structures/self-referencing-relationships?u=76281980&t=15)** A self-reference also known as a self-join or a recursive relationship follows all of the same rules as the relationships created between two tables.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-data-structures/self-referencing-relationships?u=76281980&t=25)** They can be one-to-one, one-to-many or many-to-many.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-data-structures/self-referencing-relationships?u=76281980&t=30)** The same unique constraints still apply and will dictate the type of relationship made.
>
> **[0:35](https://www.linkedin.com/learning/database-foundations-data-structures/self-referencing-relationships?u=76281980&t=35)** The only difference is that both columns are in the same table instead of two different tables, which sets up a hierarchy that can loop back on itself.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-data-structures/self-referencing-relationships?u=76281980&t=45)** So where might a self-reference be useful?
>
> **[0:49](https://www.linkedin.com/learning/database-foundations-data-structures/self-referencing-relationships?u=76281980&t=49)** They're used to model hierarchies within the same class.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-data-structures/self-referencing-relationships?u=76281980&t=52)** So for instance consider this table of employees.
>
> **[0:55](https://www.linkedin.com/learning/database-foundations-data-structures/self-referencing-relationships?u=76281980&t=55)** Each employee has an ID and the table also stores the ID of the employee's direct supervisor.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-data-structures/self-referencing-relationships?u=76281980&t=62)** If you mentally connect to the supervisor ID column back to the employee ID column, you can see that Jerome and Tabitha both report to Sasha and that Kamal's supervisor is Tabitha.
>
> **[1:16](https://www.linkedin.com/learning/database-foundations-data-structures/self-referencing-relationships?u=76281980&t=76)** You can use this information in this table to build an organizational chart that looks like this.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-data-structures/self-referencing-relationships?u=76281980&t=81)** A branching org chart can we get pretty complicated the larger it gets.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-data-structures/self-referencing-relationships?u=76281980&t=85)** But with a self-join in a relational database table, you can efficiently store the same information in a single data table.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-data-structures/self-referencing-relationships?u=76281980&t=94)** In order to create a self-referencing relationship, you'll add the same foreign key constraint as normal.
>
> **[1:40](https://www.linkedin.com/learning/database-foundations-data-structures/self-referencing-relationships?u=76281980&t=100)** The only difference is that the table that you're altering and the table that you're referencing will be the same.
>
> **[1:47](https://www.linkedin.com/learning/database-foundations-data-structures/self-referencing-relationships?u=76281980&t=107)** And that's how self-joins work.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-data-structures/self-referencing-relationships?u=76281980&t=109)** They're not the most common data structure around, but they can be very efficient when modeling the right kind of information.

> [!info]- Semantic Content
>
> **Definitions:** is called (1), known as (1)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)

#### [Cascade updates and deletes](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=0)** - [Instructor] When records in a table are modified, or deleted, it can have downstream effects on other tables that they're related to.
>
> **[0:08](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=8)** Relational [[Database Management]] systems have features, that can cascade changes to affected tables in order to maintain the integrity of the relationship.
>
> **[0:18](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=18)** Let's see how this works by returning to the two trees, customers, and orders table.
>
> **[0:23](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=23)** I'm going to select everything out of both tables, to see what our starting position looks like.
>
> **[0:29](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=29)** Right now, there's a foreign key relationship, between the customer ID columns in both of these tables.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=34)** And this will protect the integrity of the relationship.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=38)** I want to focus on the company called Wild Rose.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=41)** They currently have a customer ID of WR421.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=46)** This value is used to link to the one order that they've placed down at the orders table, and you can find it right there.
>
> **[0:53](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=53)** Now, what happens if I try and edit that ID value in the customer's table.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=58)** On line six and seven, we're going to update the customer's table, and we'll change their ID number from WR421 to WR521.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=69)** If I try and run lines six and seven, you'll see what happens, and I get an error.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=73)** This states that the change that I'm asking to make, would cause a violation of the foreign key constraint.
>
> **[1:19](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=79)** That's because the row in the orders table, would no longer be pointing to a row in the customer's table.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=85)** The same thing occurs if I were to try and delete the customer outright.
>
> **[1:29](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=89)** I'm going to scroll down to the script here, and we'll find lines 10 and 11, where I delete from the customer's table, where the customer ID is WR421.
>
> **[1:39](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=99)** Again, when I execute the statement, I get an error.
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=102)** The database engine steps in, and prevents that change from happening, because it would cause a foreign key constraint violation.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=109)** So the foreign key constraint that we have right now is doing its job.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=113)** To protect the referential integrity of the database.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=116)** It won't allow changes to be made, that would break a relationship.
>
> **[2:01](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=121)** But what if we do want to make these kinds of changes to the data?
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=125)** We can modified the foreign key constraint, to copy any changes to the parent table, down to the child table.
>
> **[2:11](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=131)** So that both tables are modified at the same time.
>
> **[2:15](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=135)** This is called cascading the update, or cascading the delete.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=140)** To implement this, we first need to remove the existing foreign key constraint.
>
> **[2:24](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=144)** We do that by running alter table orders, and drop constraint, FK customers, customers ID.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=151)** That'll remove the existing constraint from the system, and now we can rebuild it.
>
> **[2:36](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=156)** We're going to add it back in with two small changes, you can see on line's 21 and 22.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=162)** There are two optional parameters when creating a foreign key that can be added, on update cascade and on delete cascade.
>
> **[2:51](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=171)** You don't have to use both of these simultaneously.
>
> **[2:53](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=173)** You can choose to add only one or the other, but they'll control what happens when changes are made, to the linking values in the parent table of this relationship.
>
> **[3:03](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=183)** Let's highlight lines 18 down to 23, to recreate our new foreign key constraint, with the on update cascade, and on delete cascade options.
>
> **[3:12](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=192)** Now we can test it out.
>
> **[3:13](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=193)** Let's scroll down to the script a little bit farther, and we'll edit the customer ID again.
>
> **[3:18](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=198)** Once again, I'm going to change Wild Roses ID, from WR421 to WR521.
>
> **[3:27](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=207)** I'll run lines, 26 and 27, and this time the database server doesn't have a problem with it.
>
> **[3:32](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=212)** It tells me that one row is affected.
>
> **[3:35](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=215)** However, if I take a look at both tables data values again, we can see the change.
>
> **[3:40](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=220)** Here's wild Rose, with their new customer ID value.
>
> **[3:43](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=223)** And we can see that that change was also cascaded, down to the orders table, and updated here as well.
>
> **[3:50](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=230)** The foreign key constraint cascaded the change from the parent table to the child table, so that the related rows would stay connected.
>
> **[3:58](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=238)** The same thing applies if we try and delete Wild Rose from the customer's table.
>
> **[4:02](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=242)** We scroll down here, and this time I'm going to delete from the customer's table, the entire row, WR521.
>
> **[4:09](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=249)** Again, the database engine doesn't have a problem with this.
>
> **[4:12](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=252)** And if we take a look at the data now, we can see that Wild Rose no longer exists in the customer's table, and their order has been removed from the orders table.
>
> **[4:21](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=261)** The delete operation was cascaded to the child table, and performed there as well.
>
> **[4:27](https://www.linkedin.com/learning/database-foundations-data-structures/cascade-updates-and-deletes?u=76281980&t=267)** Doing so maintains the referential integrity of both tables, and prevents any orphaned records from being left behind.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Database Management]] (1)
> **Env Vars:** wr421 (4), wr521 (3)
> **CLI Commands:** find (2), make (2)
> **UI Navigation:** scroll down (3)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Link tables with keys](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-link-tables-with-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-link-tables-with-keys?u=76281980&t=0)** (bouncy techy music)
>
> **[0:05](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-link-tables-with-keys?u=76281980&t=5)** - [Narrator] We've covered a lot of information about relating tables together with primary and foreign keys.
>
> **[0:11](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-link-tables-with-keys?u=76281980&t=11)** So it's time to test your knowledge with another challenge.
>
> **[0:15](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-link-tables-with-keys?u=76281980&t=15)** In the previous challenges, you created a table for employees and then added a primary key column to the employees table.
>
> **[0:23](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-link-tables-with-keys?u=76281980&t=23)** Now I'd like you to create another table to hold related information about quarterly bonuses that each employee earned.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-link-tables-with-keys?u=76281980&t=31)** the new table should store information about the quarter the bonus was earned and the amount paid to each employee.
>
> **[0:40](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-link-tables-with-keys?u=76281980&t=40)** Next, create a foreign key constraint to ensure that every row in the new bonus table relates to exactly one employee.
>
> **[0:49](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-link-tables-with-keys?u=76281980&t=49)** Finally, test out the foreign key constraint by inserting a row for an existing employee and then try and add a row linked to an employee ID that doesn't exist.
>
> **[1:00](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-link-tables-with-keys?u=76281980&t=60)** This challenge should take 10 minutes or less to complete and as always, I'll share my solution in the next movie.
>
> **[1:07](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-link-tables-with-keys?u=76281980&t=67)** Good luck.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (bouncy techy music) (1)

#### [Solution: Link tables with keys](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=0)** - [Narrator] I hope you were able to add in the employee bonus table to the two trees database to expand on information that was stored in the employees table.
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=13)** Let's walk through the different steps in order to accomplish that goal.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=16)** I'm going to right click on the two trees database in my [[Microsoft SQL Server|SQL Server]] instance since that's the database server that I was working on earlier to create the employees table.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=25)** So I right click there and just choose new query.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=28)** And the first thing I want to do is just take a look at my employees table.
>
> **[0:32](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=32)** So I'll just select everything from employees, and I'll just run that.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=38)** So this is the starting point, you're going to have different data in your table, but I have two rows, one for myself and then one for a person named Judith Leonard.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=46)** And we have the employee IDs that we added in, in the last challenge over here on the far right.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=51)** Now I want to make sure that I know the data type of the primary key in this table.
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=57)** So I'm going to take a look here inside of the folder.
>
> **[0:59](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=59)** We'll expand the columns for the employees table and your employee ID is the primary key and it uses an integer data type.
>
> **[1:06](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=66)** So we need to make sure that we're picking a compatible data type for the foreign key column in the table that we're about to create.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=73)** So let's go ahead and start doing that.
>
> **[1:14](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=74)** So we're going to create a new table and I'm going to call this quarterly bonus.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=81)** We input a couple of columns here.
>
> **[1:23](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=83)** We just come down to the end and I'll have my semi-colon so I don't forget.
>
> **[1:26](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=86)** So the first thing I want to do is create a primary key for this table.
>
> **[1:31](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=91)** So I'll call it bonus ID and this'll be an integer value.
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=95)** And I might as well also use the identity functionality in order to auto-generate some new identity values.
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=102)** So, we'll just start at one increment by one for this bonus ID.
>
> **[1:48](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=108)** And then I also want this to be the primary key for the table.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=112)** Alright, so that finishes that row.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=113)** Next, I need a column for the amount of money that each employee has earned for their bonus.
>
> **[1:59](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=119)** So we'll call that bonus amount.
>
> **[2:01](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=121)** And for this we'll use the decimal data type and for a precision and scale, let's just do a 10,2, that'll store a lot of digits.
>
> **[2:12](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=132)** We might be giving out some multi-million dollar bonuses.
>
> **[2:16](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=136)** So that'll accommodate that, okay?
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=138)** So that is our bonus amount.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=140)** Next I need to know what quarter the bonus was paid out in.
>
> **[2:24](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=144)** They'll create a column for a quarter.
>
> **[2:26](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=146)** Now this could be stored in a number of different ways.
>
> **[2:28](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=148)** You could store it as a date, I suppose, if you wanted to track the exact date that this was paid out on.
>
> **[2:33](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=153)** I'm going to store this as a char seven data type.
>
> **[2:36](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=156)** And now allow me to put in for instance, a four digit year and then a hyphen and then Q1 or Q2 to denote which quarter.
>
> **[2:45](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=165)** So that'll work for the quarter value.
>
> **[2:47](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=167)** And then we need to know which employee earned the bonus.
>
> **[2:51](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=171)** So this is where we're going to create our foreign key to link to the employees table.
>
> **[2:56](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=176)** So I'll make this as an employee ID this is the name of the column, it'll store an integer value.
>
> **[3:02](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=182)** And that is all I need to do to create that table.
>
> **[3:06](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=186)** So let's go ahead and create that.
>
> **[3:08](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=188)** All right, so that creates the table, and now we can add in the foreign key constraint.
>
> **[3:13](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=193)** So also table quarterly bonus and we'll add a constraint, let's name the constraint FK since it's a foreign key constraint and we're linking to the employee's table and inside of the employees table we're linking to the employee ID column.
>
> **[3:33](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=213)** So that is what I will need my constraint, I'll name it FK_employees_employee ID, okay?
>
> **[3:40](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=220)** This is going to be a foreign key constraint and it's going to be on the employee ID column in the quarterly bonus table.
>
> **[3:52](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=232)** And then we need to say references and which table we're linking to.
>
> **[3:57](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=237)** So we're linking to the employee table and inside of the employee table we're linking to the employee ID column.
>
> **[4:05](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=245)** And that should finish the alter table statement to create our constraints.
>
> **[4:10](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=250)** Let's run that.
>
> **[4:12](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=252)** Oh, it looks like I have an error here, references invalid table employee.
>
> **[4:16](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=256)** And that's because it's employees of course.
>
> **[4:18](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=258)** So, fix that up there and okay.
>
> **[4:23](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=263)** To run that again, okay, this time successful.
>
> **[4:25](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=265)** So that's great.
>
> **[4:27](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=267)** So now we can test it out.
>
> **[4:28](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=268)** Let's insert into the quarterly bonus table and I'm going to fill in a couple of values since the bonus ID is being auto-generated I'm not going to supply a value for that but I do need to fill in the bonus amount, the quarter and the employee that earned that bonus.
>
> **[4:49](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=289)** And we're going to insert the values.
>
> **[4:51](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=291)** Let's see bonus amount, how about $500?
>
> **[4:53](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=293)** Just make it nice and even.
>
> **[4:55](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=295)** The quarter, let's say 2020-Q1 and for the employee ID, I'm going to give that to myself.
>
> **[5:02](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=302)** And I was employee ID 1000.
>
> **[5:05](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=305)** If you just want to double check your values, you just select everything about employees again.
>
> **[5:09](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=309)** So employee ID 1000 is the person that earned this.
>
> **[5:13](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=313)** So answer that into the quarterly bonus table.
>
> **[5:16](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=316)** Run that, okay, so there's that.
>
> **[5:19](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=319)** And now let's just select everything out of both tables again.
>
> **[5:26](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=326)** Let's run that, just like everything out of both tables.
>
> **[5:28](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=328)** So there is my employees table, here's my quarterly bonus table, and I can see that we have that relationship between the employee ID value here and the employee that earned the bonus right over there.
>
> **[5:39](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=339)** And just to make sure that this works, let's try and enter in a new row for an employee that doesn't exist.
>
> **[5:46](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=346)** So we copy those two lines and paste them down here.
>
> **[5:49](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=349)** And let's try and say employee ID 2000 which isn't somebody that exists in this table.
>
> **[5:56](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=356)** Try and give that person a bonus.
>
> **[5:58](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=358)** And sure enough the foreign key constraint is preventing me from doing that.
>
> **[6:02](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=362)** So everything seems like it's working as intended.
>
> **[6:05](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=365)** So that's my solution to the challenge.
>
> **[6:08](https://www.linkedin.com/learning/database-foundations-data-structures/solution-link-tables-with-keys?u=76281980&t=368)** Let me just run this again so we can see the final state of both of my tables, and I'm going to save all of this text inside of the exercise files, chapter five folder as challenge three complete.txt and you can compare all of this to what you did.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (1)
> **CLI Commands:** make (5)
> **Analogies:** for instance (1), just like (1)
> **File Paths:** complete.txt (1)
> **Env Vars:** sql (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise files (1)

#### [Solution: Build a relationship between tables](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=0)** - [Instructor] For this challenge, we are looking at creating a movie database to help us keep track of the actors that have starred in various films.
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=13)** Now, we've already created a movie table and we have an actor's table.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=17)** But what we need to do is relate those two tables together and we've figured out that we need a many-to-many relationship in order to make that work.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=25)** So our task here is to create a junction table or a linking table that'll sit between those two other tables in the relationship chain.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=34)** So we can get started here by saying CREATE TABLE.
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=37)** And the linking or the junction table is called MovieCast and it's going to have a couple of columns.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=45)** The first one is going to be the PRIMARY KEY from the movies table, which is the MovieID, and that stores an integer value.
>
> **[0:54](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=54)** We also need the PRIMARY KEY from the actor's table, which is ActorID, and that is also an integer value.
>
> **[1:00](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=60)** And then we can add additional columns in this table that can be used to define the particular actor's role in each movie.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=69)** So we're going to start a column called Role and start this as a varchar(100).
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=77)** So those are the columns that we're asked for.
>
> **[1:19](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=79)** Now we just need to add in the various constraints to hook everything together.
>
> **[1:24](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=84)** Now, there are two different ways that I want to show you how to do this.
>
> **[1:28](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=88)** The first way is to do everything right inside of the CREATE TABLE statements.
>
> **[1:32](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=92)** That's one way to do it.
>
> **[1:33](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=93)** The other way to do it is to create the table with the columns like we have it right now, and then add in additional alter table statements to add in the constraints after the fact.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=104)** So let me show you it all in the CREATE TABLE statement first, and then we'll come back and redo it again as multiple different statements instead.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=112)** So the first way after the Role, which is our last column, I'll type in a comma and we can specify the PRIMARY KEY constraint.
>
> **[2:00](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=120)** We could do that right here.
>
> **[2:02](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=122)** This is going to be a composite PRIMARY KEY that combines the MovieID and ActorID columns into a single key.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=130)** So I just type those in here together with a comma separating them.
>
> **[2:15](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=135)** So that sets up our PRIMARY KEY.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=138)** The next constraint is going to be the FORIEGN KEY constraint, and this is going to be on the MovieID column and we'll say REFERENCES the movies table and the MovieID column in that table.
>
> **[2:39](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=159)** And then finally, we need one more FOREIGN KEY constraint to the actor's table.
>
> **[2:45](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=165)** So this is going to be on the ActorID.
>
> **[2:48](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=168)** So these two here, the MovieID and ActorID in the parentheses here are referring to the columns in this table.
>
> **[2:56](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=176)** So I'll say the ActorID in this table references the Actors table ActorID.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=185)** And that finishes that CREATE TABLE statement.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=189)** So I'll type in a semicolon here at the very end.
>
> **[3:11](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=191)** So we'll create the table with the three columns, then we'll add in the PRIMARY KEY for the composite key and the two FOREIGN KEYs to the other table.
>
> **[3:20](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=200)** And that's all we need to do.
>
> **[3:21](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=201)** Then we'll insert the values into those, the movie cast table to connect everything together.
>
> **[3:26](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=206)** And we'll select everything out of the three tables joined together, movies joined to movie cast, and join to actors.
>
> **[3:35](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=215)** So let me go up here and test my code.
>
> **[3:37](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=217)** And so there is a correct output.
>
> **[3:39](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=219)** So I'm getting the six rows.
>
> **[3:41](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=221)** We have our three different movies, our six different actors, and we can see who is a lead and who is a supporting cast member in each of the movies.
>
> **[3:50](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=230)** So this is the first way to create this table and set up those FOREIGN KEY and PRIMARY KEY constraints all together in that CREATE TABLE statement.
>
> **[4:01](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=241)** So that is one option.
>
> **[4:02](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=242)** The second option is to break these PRIMARY KEY and FOREIGN KEY constraints into their own ultra table statements.
>
> **[4:09](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=249)** So let me show you what that looks like.
>
> **[4:11](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=251)** We're going to actually get rid of those and just come up here and say CREATE TABLE and add in the three columns.
>
> **[4:18](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=258)** So MovieID, ActorID, and the Role columns.
>
> **[4:21](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=261)** And that's it.
>
> **[4:22](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=262)** We'll just end that CREATE TABLE statement with that.
>
> **[4:25](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=265)** Then as a separate step, we can add in the PRIMARY KEY.
>
> **[4:32](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=272)** And to do that, we need to ALTER the TABLE MovieCast.
>
> **[4:38](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=278)** Then we're going to add in a constraint.
>
> **[4:41](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=281)** We'll name the constraint whatever we want.
>
> **[4:43](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=283)** I'll call mine pk_movieCast.
>
> **[4:48](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=288)** And this is a PRIMARY KEY constraint.
>
> **[4:53](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=293)** And we'll specify the columns that it's going to be on.
>
> **[4:55](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=295)** So that'll be the MovieID and the ActorID.
>
> **[4:59](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=299)** And once again, that'll create that composite key that combines both of those columns together.
>
> **[5:04](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=304)** So that is adding in our PRIMARY KEY.
>
> **[5:07](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=307)** Next up, we can add in the FOREIGN KEY to the MovieID table.
>
> **[5:14](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=314)** And to do that, we ALTER the TABLE MovieCast again.
>
> **[5:20](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=320)** We'll add in another constraint.
>
> **[5:23](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=323)** And this one we can name fk because it's a FOREIGN KEY constraint.
>
> **[5:28](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=328)** And I'll join this from the MovieCast table to the Movies table.
>
> **[5:35](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=335)** Now this is just the name.
>
> **[5:35](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=335)** It could be whatever you want though.
>
> **[5:37](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=337)** And this constraint is going to be a FOREIGN KEY constraint on the MovieID column.
>
> **[5:46](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=346)** And it's going to say REFERENCES the Movies table, MovieID column.
>
> **[5:55](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=355)** And then finally, we need one more FOREIGN KEY constraint to the Actor table.
>
> **[6:06](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=366)** So this is going to be exactly the same ALTER Table MovieCast.
>
> **[6:11](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=371)** We're going to add in one more constraint.
>
> **[6:15](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=375)** I'll call this one fk_MovieCast_Actors.
>
> **[6:25](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=385)** It is a FOREIGN KEY constraint again, and this one is going to be on the ActorID column in the MovieCast table.
>
> **[6:35](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=395)** And it's going to reference or REFERENCES the Actors table and the ActorID column in that table.
>
> **[6:47](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=407)** And make sure to type in a semicolon at the end of that.
>
> **[6:49](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=409)** So this does it in four steps, whereas before we did it in a single step.
>
> **[6:53](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=413)** Let me just test my code to make sure we have a correct output.
>
> **[6:56](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=416)** Oh, and I have a error here.
>
> **[6:58](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=418)** It says that the column MovieID must not be nullable.
>
> **[7:03](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=423)** So the one downside to doing this this way is that when we create the table and then create the PRIMARY KEY constraint later, is that the PRIMARY KEY constraint doesn't automatically create these two columns up here as not null.
>
> **[7:19](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=439)** So I actually need to put that into the CREATE TABLE statement here at the top.
>
> **[7:21](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=441)** So MovieID int NOT NULL.
>
> **[7:25](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=445)** And the ActorID int NOT NULL.
>
> **[7:27](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=447)** So we'll just define that in the original CREATE TABLE statement.
>
> **[7:30](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=450)** All right, we'll test my code again, and there we go.
>
> **[7:33](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=453)** We get a correct output again.
>
> **[7:34](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=454)** So this way we do it in four steps, whereas before we did it all in a single step in a single CREATE TABLE statement.
>
> **[7:41](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=461)** The difference is, is that sometimes you want to make these changes and add these constraints after the fact.
>
> **[7:47](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=467)** So after the table has already been created, you would need to do it this way with the ALTER TABLE statements.
>
> **[7:53](https://www.linkedin.com/learning/database-foundations-data-structures/solution-build-a-relationship-between-tables?u=76281980&t=473)** But either method gets us to a correct output for this challenge and you can choose whichever one you prefer.

> [!info]- Semantic Content
>
> **Env Vars:** key (22), table (13), primary (13), create (10), foreign (9)
> **SQL:** primary key (13), create table (10), foreign key (8), alter table (1)
> **Definitions:** is a  (5), is called (1)
> **CLI Commands:** make (4)
> **Best Practices:** make sure to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Indexes

[↑ Back to Table of Contents](#table-of-contents)

#### [Table indexes](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=0)** - [Instructor] [[Databases]] are built to store data so that information is available at a later point in time.
>
> **[0:06](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=6)** When you have a lot of stored data, it's important to be able to quickly locate the specific rows that you're after, and adding indexes to your tables can help the RDBMS in that search.
>
> **[0:18](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=18)** Indexes in a relational database work in exactly the same way as indexes at the back of a school textbook.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=26)** Rather than page through the entire book from beginning to end, you can find a topic of interest listed alphabetically in the index, and it'll point you directly to the pages with the content that you're interested in.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=38)** [[Relational Databases]] store data in the same way with index is made up of the key values from your tables.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=45)** This allows the database engine to search the index, which will be point to the area on disk where the [[Representational State Transfer (REST)|rest]] of the information for the row is actually stored.
>
> **[0:55](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=55)** Database indexes can take several [[Forms]], but the most commonly used technique is called a B-tree index.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=62)** Indexes that use this method organize data into a branching tree like structure.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=68)** It might look something like this.
>
> **[1:10](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=70)** Say I'm storing rows of data that use integers for their primary keys.
>
> **[1:14](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=74)** I have rows numbered one through 12.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=77)** At the top of the index is a collection of all of these primary key values.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=82)** The next level of the tree, we'll split them into two groups.
>
> **[1:26](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=86)** The numbers one through six on the left and seven through 12 on the right.
>
> **[1:31](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=91)** The next level of the tree splits the numbers again into smaller groups.
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=95)** And the final level includes a separate entry for each individual number.
>
> **[1:40](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=100)** This bottom level is called the leaf level of the tree, and it's where all of the values for each row in your table are stored.
>
> **[1:48](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=108)** In order to use the index, you just need to traverse the tree from top to bottom.
>
> **[1:54](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=114)** In this example, it means that you would only ever need to take three steps to find any number that's being stored.
>
> **[2:01](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=121)** Say you're looking to find the data for the row with a primary key value of five.
>
> **[2:07](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=127)** First, you had moved to the group one through six, then down to four through six, and finally, you'll be able to easily find the row of data that you're looking for.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=138)** In the first course of this series, intro to databases, I described the rows of data like individual playing cards in a deck.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=145)** If you were to try and find the ACE of spades in a shuffled deck, you'd have to search through the entire pile until you happened to find it.
>
> **[2:34](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=154)** That's the same method the database engine will need to use to find a row without the aid of an index.
>
> **[2:41](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=161)** Now, split that deck of cards into two piles, one for each color, and your job of finding a specific card is a lot easier.
>
> **[2:48](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=168)** Split the deck into four piles, one for each suit, and you've suddenly reduced the time it will take on average to find any specific card by 75%.
>
> **[2:58](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=178)** That's the power of table indexes and why they're important to include for columns that you use regularly in searches.
>
> **[3:06](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=186)** The database engine automatically creates indexes on your primary key columns since they're used in table joins and for identifying unique rows in the table.
>
> **[3:17](https://www.linkedin.com/learning/database-foundations-data-structures/table-indexes?u=76281980&t=197)** But if there are other columns that you use frequently for searches and specifically, in the where clause of a select query, then the performance of the system might benefit from additional indexes added on those columns as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2), [[Relational Databases]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Forms]] (1)
> **CLI Commands:** find (8)
> **Definitions:** is called (2), is a  (2), means that (1)
> **Env Vars:** rdbms (1), ace (1)
> **Speakers:** - [instructor] (1)

#### [Add indexes to a table](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=0)** - [Instructor] Adding indexes to your data tables only requires a single command.
>
> **[0:05](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=5)** First, you need to identify a situation, where an index would be helpful.
>
> **[0:10](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=10)** Let's take a look at the customer's table on the Two Trees database that's in the [[Microsoft SQL Server|SQL server]] instance.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=16)** The primary key for this table is on the customer ID column.
>
> **[0:20](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=20)** So, we know there's already an index that's used for searching for rows based off of these values.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=26)** Let's suppose that another way that we often find information about the Two Trees Olive Oil Company's customers is by searching for it based off of the state values.
>
> **[0:36](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=36)** Now, to be clear, searches don't always have to be one off queries that are written with a select statement, and a where clause.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=43)** Any automated reporting system that pulls data and organizes it into groups based off of the state values or a dashboard that displays aggregate information across the state would also benefit from an index on this column.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=58)** To add one in, we run the [[SQL]] command CREATE INDEX.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=62)** I have that written out starting on line five in the script.
>
> **[1:06](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=66)** After the CREATE INDEX keywords, we have the opportunity to name the index.
>
> **[1:12](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=72)** If you don't provide a name, the RDBMS will make one up for you.
>
> **[1:16](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=76)** And there's a good chance that it'll have a long serial number, or be otherwise not very useful, depending on the behaviors of your chosen platform.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=85)** So, I suggest that you always give your indexes a good, clear name.
>
> **[1:29](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=89)** In SQL server, indexes are typically named with the letters IX followed by the table and column name that they're on.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=98)** So, in this case, I'm naming it, IX_Customers_State.
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=102)** [[PostgreSQL]] [[Databases]] tend to flip that around and use the table name followed by the column name and then _IDX.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=112)** Either way, you can name your index whatever you want.
>
> **[1:54](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=114)** But these are the typical patterns used on each platform.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=118)** Now, after we name the index, we have the on keyword.
>
> **[2:02](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=122)** And that's followed by the table name and, in parentheses, the column name that the index will be on, and that's it.
>
> **[2:08](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=128)** Let's go ahead and run lines five and six to create the index on the customer's table.
>
> **[2:13](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=133)** From now on the database engine will be able to make use of the index when it's determined that it'll speed up search performance.
>
> **[2:21](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=141)** Now, if you ever need to remove an index all you need to do is run the command DROP INDEX followed by its name.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=147)** The question that you might be asking at this point is, if indexes speed up searches, then why don't we just add an index on every column in the table?
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=157)** The reason that that might not be a good idea is that adding additional indexes slows down the right performance of the database.
>
> **[2:45](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=165)** Think about what happens when you add in a new row to data table, if there's three or four indexes on that table every time you add a new row, all three or four indexes also need to be updated to reflect the change to the data.
>
> **[3:00](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=180)** So, for data tables that are updated frequently, the additional time required to maintain all of those indexes can, substantially, slow down right performance of the system.
>
> **[3:11](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=191)** On the other hand, if your data tables only store archived information that isn't going to change then additional indexes won't be much of a problem since there'll be created once and never need to be updated.
>
> **[3:24](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=204)** So, there's a performance balance that needs to be struck.
>
> **[3:27](https://www.linkedin.com/learning/database-foundations-data-structures/add-indexes-to-a-table?u=76281980&t=207)** And the optimum number of indexes is going to vary depending on the types of information that you store and the frequency with which that data is updated and read.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (2), [[SQL]] (1), [[PostgreSQL]] (1), [[Databases]] (1)
> **Env Vars:** sql (3), index (3), create (2), rdbms (1), drop (1)
> **CLI Commands:** make (2), find (1)
> **SQL:** index (3)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [View index statistics](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=0)** - [Instructor] Indexes exist to help speed up query performance, but they come at a cost.
>
> **[0:06](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=6)** Having too many indexes or indexes on the wrong columns can be detrimental to the operation of your database, since they'll negatively impact write performance.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=16)** Because of this, it's going to be in your best interest to periodically review the indexes created in your database to make sure that they're still beneficial to the system.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=26)** Finding indexes that are not used very often and removing them from tables with lots of activity is a good first step in index management.
>
> **[0:36](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=36)** The ways that you do this aren't standardized across the various RDBMS platforms though.
>
> **[0:40](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=40)** So the specific techniques and commands will vary.
>
> **[0:44](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=44)** Let's take a look at [[PostgreSQL]] first, and then we'll look at some similar commands on [[Microsoft SQL Server|SQL server]].
>
> **[0:50](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=50)** I'm going to select the two trees database in my PostgreSQL server.
>
> **[0:54](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=54)** And then come up to file and open file.
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=57)** And in the Chapter Six folder, we'll find IndexStats-PostgreSQL let's select it and open it up.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=64)** Now in PostgreSQL, you can find out which indexes are created in your database by querying a system catalog view called PG_indexes.
>
> **[1:14](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=74)** When you do that, you're going to get back a lot of rows.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=77)** Most of these describe indexes that [[PostgreSQL|Postgres]] uses for its own internal purposes.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=82)** It's best just to let the server manage these on its own.
>
> **[1:26](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=86)** There are two columns that are useful to us though: schema name and table name.
>
> **[1:31](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=91)** We can use these to filter the results to the indexes of interest to our own [[Databases]].
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=97)** For instance, I can locate all of the indexes where the table name is equal to customers.
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=102)** Let me highlight lines five and six and execute this query.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=105)** And you'll see that we don't have any indexes on that table.
>
> **[1:48](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=108)** If you're using schemas in your [[Database Design]], you can find all of the indexes on all of the tables in a particular schema.
>
> **[1:55](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=115)** We didn't set up any schemas in this course.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=118)** So all of the tables that we've created have been placed in the public schema.
>
> **[2:02](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=122)** So this time I'll select everything from PG_indexes where are the schema name is equal to public.
>
> **[2:09](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=129)** This time I get back a couple of results.
>
> **[2:11](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=131)** These are the two indexes that were created on the primary key columns in the employees table and the table that I made earlier called fruit.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=140)** If you expand the index definition column over here on the far right, it'll reveal exactly which column the index is on at the very end.
>
> **[2:28](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=148)** You might have to scroll over and you window a little bit and try expanding it a little bit further.
>
> **[2:33](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=153)** Here in the parentheses, I can see that the first index was on the employee ID column and the second one was on the column called fruit ID.
>
> **[2:41](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=161)** And of course, if you're using clear naming conventions for each of these indexes, you should also be able to get that same information by reviewing the index names that you saved when you created them.
>
> **[2:52](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=172)** So this lists out all of the indexes in the database.
>
> **[2:55](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=175)** To find out some [[Statistics]] about these indexes, we have another catalog view called PG_stat_user_indexes.
>
> **[3:03](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=183)** Let's select everything out of that.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=185)** This shows the schema, the name of the table, or what sometime is referred to as a relation, and the index name for all of the user-generated tables in the current database.
>
> **[3:17](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=197)** The important column to look at though is idx_scan.
>
> **[3:21](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=201)** This'll tell you how many times the index has been used by the query processor.
>
> **[3:26](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=206)** Now, we haven't been using this database very much.
>
> **[3:28](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=208)** So these are both listed as zero.
>
> **[3:30](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=210)** We haven't run any queries that have used these indexes.
>
> **[3:34](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=214)** If you find that this number isn't increasing very much and it's on a table that's written too frequently, it's a good sign that the index is causing more harm to the database's performance than good.
>
> **[3:45](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=225)** Consider dropping the index to speed up write performance.
>
> **[3:50](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=230)** SQL server has some similar functionality, so let's switch our database platform and take a look.
>
> **[3:55](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=235)** I'm going to select the two trees database in the SQL server instance now.
>
> **[3:59](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=239)** And this time go up to file, open file, and choose IndexStats-SQLServer.
>
> **[4:05](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=245)** First, there's a system catalog view here as well called sys.indexes.
>
> **[4:10](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=250)** Let's select everything out of it.
>
> **[4:12](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=252)** When you do, you'll find that it's not very useful all by itself.
>
> **[4:16](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=256)** The structure relies on object identifiers rather than displaying actual table and index names.
>
> **[4:22](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=262)** So we need to combine this view with another one to get some useful information.
>
> **[4:27](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=267)** You can see starting on line number five that this makes for a much more complicated command.
>
> **[4:33](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=273)** What I'm doing here is combining the columns in sys.indexes with sys.objects.
>
> **[4:39](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=279)** Then we're filtering to just the rows where the type description is user table.
>
> **[4:45](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=285)** I'm going to highlight lines five all the way down to 18 and run this, and we'll see a better result.
>
> **[4:51](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=291)** This gives us something that's much closer to what we got and PostgreSQL.
>
> **[4:56](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=296)** In this result, you can see a list of all of the indexes on all of the tables in the database.
>
> **[5:02](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=302)** The ones with a type clustered will typically be your primary key indexes.
>
> **[5:06](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=306)** And anything that says non-clustered will be additional indexes that you've added to the table.
>
> **[5:13](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=313)** This one here is the index that we added in the last movie on the state column in the customer's table.
>
> **[5:19](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=319)** In order to view usage statistics, we can access one SQL server's dynamic management views called sys.dm_db_index_usage_stats.
>
> **[5:30](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=330)** Let me scroll down in the script here, and I'll find that online number 21.
>
> **[5:35](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=335)** Again, though, if you run it by itself, you're not going to get much useful information.
>
> **[5:39](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=339)** So I've written out another query that combines this information with sys.indexes.
>
> **[5:46](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=346)** Let's run lines 23 down to 32 instead.
>
> **[5:51](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=351)** This will show you how many times each index was used in the seek and scan columns.
>
> **[5:58](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=358)** These numbers do reset if the database server restarts.
>
> **[6:00](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=360)** So don't be alarmed if they dropped to zero one day.
>
> **[6:04](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=364)** The last two columns in this result will give you the exact time and date that each index was last accessed.
>
> **[6:12](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=372)** To get a sense for which index might be detrimental to the operation of the system, look for any that have a user update count that's way larger than the number of user scans or seeks.
>
> **[6:23](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=383)** This indicates that the maintenance overhead of keeping the index in place might be too high and the database might perform better if the index is dropped from the table.
>
> **[6:33](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=393)** So that's how you can check up on your index usage statistics in PostgreSQL and SQL server.
>
> **[6:39](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=399)** Every relational [[Database Management]] system is going to have a different set of commands that are useful in this area of [[Database Development]].
>
> **[6:48](https://www.linkedin.com/learning/database-foundations-data-structures/view-index-statistics?u=76281980&t=408)** So if you're working on a different platform, I'd encourage you to seek out the techniques that are available for similar kinds of index management on your platform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL]] (6), [[Microsoft SQL Server|Sql server]] (5), [[Statistics]] (3), [[PostgreSQL|Postgres]] (1), [[Databases]] (1)
> **CLI Commands:** find (7), make (1)
> **Env Vars:** sql (5), rdbms (1)
> **UI Navigation:** select the (2), scroll down (1)
> **Code Identifiers:** idx_scan (1), dm_db_index_usage_stats (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)


### 7. Constraints

[↑ Back to Table of Contents](#table-of-contents)

#### [Validate data with constraints](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980&t=0)** - [Instructor] Constraints place restrictions on the values that will be allowed in a column.
>
> **[0:05](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980&t=5)** This helps you specify the rules that each value must meet before it will be stored in the database.
>
> **[0:11](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980&t=11)** You can think of constraints as a form of [[Data Validation]].
>
> **[0:15](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980&t=15)** When you establish the boundaries that values must fall within, you can have the database engine automatically reject any values that fall outside.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980&t=25)** Doing so make sure that the values that actually make it past the constraint verification process will meet your expectations for [[Data Quality]] and completeness.
>
> **[0:35](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980&t=35)** The addition of constraints to your table designs should be approached with care.
>
> **[0:39](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980&t=39)** The more you can precisely define the kinds of values that will be acceptable and which kinds will not be acceptable for every column, we'll help you determine the kinds of constraints to place on the table.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980&t=51)** Look for patterns that are guaranteed to be true for every valid piece of data.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980&t=56)** For instance, credit card numbers are always 16 digits long.
>
> **[1:01](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980&t=61)** If a person tries to input a 15 digit credit card number or a 17 digit number, you know there's a problem.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980&t=68)** The database can reject the entry and the end user will need to review their row insert and try again with valid information.
>
> **[1:15](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980&t=75)** Your data will be more trustworthy if you can restrict and limit the values to a specific and known pattern.
>
> **[1:23](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980&t=83)** But there's a danger here as well, adding to too many constraints or the wrong kinds of constraints can make your database frustrating to use.
>
> **[1:31](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980&t=91)** You need to be extra careful that you're not making assumptions about the ideal values that a column will hold.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980&t=98)** Think carefully about edge cases and values that are not typical, but still acceptable.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980&t=104)** For instance, the length and composition of people's names can vary widely around the world.
>
> **[1:50](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980&t=110)** Some people have very long names, some people have names with only one or two characters.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980&t=116)** Some people only have a first name and no last name and others only use a last name but no first.
>
> **[2:03](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980&t=123)** Be careful not to add constraints to your data tables that would block these kinds of extremes.
>
> **[2:09](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980&t=129)** If you've ever had to fill out a poorly designed online form that rejected your entry because it didn't fit their preconceived notion of how it should be formatted then you know the frustration that incorrect constraints can have on the end user.
>
> **[2:23](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980&t=143)** We've already seen a couple of constraints throughout this course.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980&t=147)** Data types constrain values to a specific kind of information; numeric, text, date, and so on.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980&t=155)** Primary keys are a constraint that ensures that every value in a column only appears once, and foreign keys are a constraint that makes sure that every value matches to an existing value in another column, somewhere else in the database.
>
> **[2:50](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980&t=170)** Beyond those, we can control whether a column will allow empty cells or no values, whether values fall within a range of numbers or meet some other criteria and more.
>
> **[3:00](https://www.linkedin.com/learning/database-foundations-data-structures/validate-data-with-constraints?u=76281980&t=180)** So let's take a tour through some of the ways that you can add constraints to your tables to make sure that the data stored meets your expectations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Validation]] (1), [[Data Quality]] (1)
> **CLI Commands:** make (4)
> **Analogies:** for instance (2)
> **Tools:** notion (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Null constraints](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=0)** - [Instructor] The absence of data is in itself a special kind of information that's commonly found in a database.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=7)** You can determine whether a column will allow or not allow these empty cells called null values.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=14)** I've opened up the script called NullConstraints.[[SQL]] and connected it to my [[Microsoft SQL Server|SQL server]] container.
>
> **[0:20](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=20)** Let's review the customer's table.
>
> **[0:23](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=23)** I currently have two rows of data and every column is filled in for each customer.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=28)** If I go over to the connection sidebar and open up the tables folder and find the customer's table and then expand the columns folder, I can find the description of each of these columns.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=38)** Currently, all of the columns will allow cells to be left empty in a row, except for the primary key column.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=46)** You can see that by the presence of the null keyword here in each of these descriptions.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=52)** The primary key column is the only one that will not allow empty cells and it's specifying not null.
>
> **[0:59](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=59)** What this means is that the database as it's currently designed will allow me to enter in a new customer and only provide a customer ID.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=68)** It won't be a requirement to fill in the company name or any address details.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=73)** Whether this is a problem or not depends on the business rules that you have for your own data.
>
> **[1:19](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=79)** Maybe that's acceptable and maybe it's not.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=82)** If you decide that at a minimum, we need to also know the company name then we can add a not null constraint to that column.
>
> **[1:31](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=91)** To do that we need to alter the table.
>
> **[1:33](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=93)** And I have that script on lines five and six.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=97)** We can alter the table customers then we'll alter the column company.
>
> **[1:41](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=101)** We're going to leave the datatype exactly the same.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=104)** So it's still going to be a vachar 100 but we're going to add a not null constraint to the column.
>
> **[1:51](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=111)** If I run these two lines that'll make that change to the design of the table.
>
> **[1:54](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=114)** And then I can come back over here to the database and refresh it.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=118)** And now you'll see that company is listed as not null.
>
> **[2:03](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=123)** Another way that we could add in that constraint is to build it into the table when we initially create it.
>
> **[2:08](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=128)** I have an example of that starting on line number nine.
>
> **[2:11](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=131)** So if I created the table customers, I could put in the not null constraint right here in the column description.
>
> **[2:19](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=139)** So that's how you would add in the constraint to a brand new table.
>
> **[2:22](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=142)** So now that we have the constraint, let's test it out.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=145)** I'm going to try it and enter in a row with no company name.
>
> **[2:28](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=148)** We're only going to enter in a new customer ID value.
>
> **[2:32](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=152)** Let's run line 16 and 17 and see what happens.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=155)** I get an error message and it tells me that I cannot insert the value null into the company column.
>
> **[2:41](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=161)** If I try again by just entering in a new customer ID and a company name, it'll be successful.
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=169)** Now I can select everything out of the customer's table to see the result.
>
> **[2:52](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=172)** And here is my new customer.
>
> **[2:54](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=174)** I've got their customer ID and their company but I did not supply in the address information.
>
> **[3:00](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=180)** Now I was able to tell the current status of each of these columns by reviewing the information presented in the connection sidebar over here on the left.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=189)** This works for SQL server [[Databases]].
>
> **[3:11](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=191)** But if you try the same thing with the [[PostgreSQL|Postgres]] server, you're going to find that you aren't given the same level of detail about each column.
>
> **[3:19](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=199)** You're not always going to be working in a graphical interface like [[Microsoft Azure|Azure]] Data Studio.
>
> **[3:24](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=204)** So it's important to be able to get that information using SQL commands.
>
> **[3:28](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=208)** The process will be different for each platform though since each RDBMS will use different internal table names.
>
> **[3:36](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=216)** In SQL server, I can execute a stored procedure called sp_columns.
>
> **[3:40](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=220)** And I have that written out here in the script on line 26.
>
> **[3:44](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=224)** I can execute sp_columns and then pass in the table name of the table that I'm interested in.
>
> **[3:50](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=230)** In this case, the customer's table.
>
> **[3:53](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=233)** When I execute this line it returns information about each column in the table.
>
> **[3:57](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=237)** And I can review its data type over here, the type name and it's precision, length and scale.
>
> **[4:04](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=244)** If I scroll over to the right and the results, I'll find a column here called nullable.
>
> **[4:09](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=249)** This tells me whether there is a null constraint on the column or not.
>
> **[4:13](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=253)** The primary key column and the company name column have zeros here.
>
> **[4:17](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=257)** This means that they will not accept null values.
>
> **[4:20](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=260)** The [[Representational State Transfer (REST)|rest]] of the columns will.
>
> **[4:22](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=262)** We can get similar information from [[PostgreSQL]] using a different command.
>
> **[4:26](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=266)** And let's scroll down to the script here and I'll find it online 29 and 30.
>
> **[4:31](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=271)** Let me copy this to my clipboard, and then I'll open up a new query window on the Postgres server.
>
> **[4:38](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=278)** Then I can paste it in the command and run it.
>
> **[4:40](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=280)** This is going to select all of the columns from information_schema.columns where the table name is equal to employees.
>
> **[4:48](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=288)** I'm running this actually against the employees table because I haven't created a customer's table on this server.
>
> **[4:54](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=294)** But you can see these same sorts of information below.
>
> **[4:57](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=297)** Each row represents a different column in the table.
>
> **[5:00](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=300)** It lists out the data type and size if I scroll over to the right.
>
> **[5:05](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=305)** For instance I have a couple of character varying data types and some other character data types.
>
> **[5:10](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=310)** I also have a column called is_nullable.
>
> **[5:13](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=313)** This will tell me which columns will accept null values and which ones won't.
>
> **[5:18](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=318)** So that's how you can dive into the current design of each column in your tables using SQL commands.
>
> **[5:24](https://www.linkedin.com/learning/database-foundations-data-structures/null-constraints?u=76281980&t=324)** You'll want to carefully review your business needs for the completeness of your data and determine if it's important that a value is always supplied for each column.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Microsoft SQL Server|Sql server]] (3), [[PostgreSQL|Postgres]] (2), [[Databases]] (1), [[Microsoft Azure|Azure]] (1)
> **CLI Commands:** find (5), make (1)
> **Env Vars:** sql (5), rdbms (1)
> **Code Identifiers:** sp_columns (2), information_schema (1), is_nullable (1)
> **Definitions:** is a  (2), means that (1)
> **File Paths:** nullconstraints.sql (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** for instance (1)

#### [Unique constraints](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=0)** - [Instructor] Unique constraints apply to columns where you want to guarantee that every row stores a value that's different from every other row.
>
> **[0:08](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=8)** Primary keys are an example of one unique constraint, but you can also apply them to other columns in your table.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=16)** Unlike the null constraint that's added to the column specification when creating or altering a table, unique constraints are added to a table index.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=26)** If you think about it, it makes sense that the RDBMS would do it this way.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=31)** With an index, the database server can quickly find out whether a value has been used before or not, even if the table has millions of rows in it.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=41)** It doesn't need to read every existing row when a new row is entered.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=45)** It can just review the index to make sure that the new value is unique.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=51)** Let's suppose that I want to make sure that every company name in the customers table is unique.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=56)** We're already enforcing that rule with the primary key column, but I also want to apply that to the actual names as well.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=64)** We can add a unique constraint to this column.
>
> **[1:07](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=67)** To do that, we alter the table customers, add a constraint, and we can name the constraint just like when we're creating our indexes.
>
> **[1:15](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=75)** Make sure that you supply unique constraint names so that you can recognize them and use them later.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=81)** I'm going to call this constraint unique_company, then we have the UNIQUE keyword, followed in parentheses by the name of the column that we want the constraint on.
>
> **[1:30](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=90)** In this case, it's the company column.
>
> **[1:33](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=93)** Let me highlight lines 5 and 6, and we'll add the constraint into the table.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=97)** Now, if you are building a brand new table, you can add the constraint right then.
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=102)** I've got an example of that online number 9.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=104)** So in our CREATE TABLE statement, you would just add the CONSTRAINT line here at the bottom after you list out all of the different columns.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=112)** It would be the exact same syntax though, CONSTRAINT the name of the constraint, the UNIQUE keyword followed by the name of the column in parentheses.
>
> **[2:01](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=121)** So now that we've added the constraint, we can go over to the connection sidebar and see what changed.
>
> **[2:06](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=126)** I'm going to refresh my customers table over here.
>
> **[2:11](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=131)** Then we'll find the customer table and expand the columns folder.
>
> **[2:15](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=135)** Now, you're not going to find anything changed in the column specifications here, or if you go into the constraints folder, you're not going to find anything there.
>
> **[2:23](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=143)** That's because this constraint is made with an index.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=147)** If I expand the indexes folder, you'll find it here.
>
> **[2:30](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=150)** Now this can get a little bit confusing because if you need to remove the constraint, you can't use a DROP INDEX command.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=157)** To remove it, you need to use the ALTER TABLE DROP CONSTRAINT command, and I have an example of that on line 16 and 17.
>
> **[2:44](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=164)** So if I wanted to remove this constraint, I would say ALTER TABLE customers DROP CONSTRAINT and the name of the constraint.
>
> **[2:51](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=171)** So with the database now enforcing unique values in the company column, we should test it out.
>
> **[2:56](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=176)** Let me select everything out of the customer's table again, so we can see our starting position, and we have a certain company called Delish Food.
>
> **[3:04](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=184)** They have a customer_id value of DF399.
>
> **[3:08](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=188)** If I try and enter in a new customer with a different customer_id, but the same company name, you'll see what happens.
>
> **[3:15](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=195)** We'll insert into customers the values DF600, but the company named Delish Food again.
>
> **[3:22](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=202)** when I run lines 22 and 23, we'll see what happens.
>
> **[3:26](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=206)** We get an error from the database server that tells me that we're trying to violate the unique key constraint.
>
> **[3:32](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=212)** It tells me that the duplicate key value is the text Delish Food.
>
> **[3:37](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=217)** And that's the unique constraint.
>
> **[3:39](https://www.linkedin.com/learning/database-foundations-data-structures/unique-constraints?u=76281980&t=219)** It can be added to any column where you want to make sure that specific values don't appear more than once in a table.

> [!info]- Semantic Content
>
> **Env Vars:** constraint (4), table (3), drop (3), unique (2), alter (2)
> **CLI Commands:** find (5), make (4)
> **SQL:** alter table (2), create table (1), index (1)
> **Code Identifiers:** customer_id (2), unique_company (1)
> **Documentation:** specification (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Setting default values](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=0)** - [Instructor] A default value can be automatically saved into a column when one isn't supplied during a row insert.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=7)** If we take a look at the customers table inside of the [[Microsoft SQL Server|SQL Server]] version of the two trees database, we'll see that we have a couple of columns that we can use to store some address information.
>
> **[0:18](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=18)** Let's suppose that most of our customers come from the state of California, we can have the RDBMS, automatically fill in the appropriate two letter state abbreviation for every new row.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=31)** SQL Server and [[PostgreSQL]] take two different approaches to this when you're adding in the constraint to an existing column.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=38)** In SQL Server, we need to alter the table customers, ADD CONSTRAINT, then we can name the constraint, followed by the default keyword, the value that we want inserted, and the two letter state abbreviation for California is CA, then the keyword, FOR, and finally, the column name that we want to apply the constraint on.
>
> **[0:59](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=59)** PostgreSQL takes a different approach, though, in PostgreSQL, you would alter the table customers, then alter the column, state, and set default and followed by the value.
>
> **[1:10](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=70)** This is because the [[PostgreSQL|Postgres]] RDBMS doesn't consider default values to be a constraint, they're just a default value on the column.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=78)** That's why the implementation takes a slightly different syntax.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=82)** Here in SQL Server, though, I'm going to run lines five down through seven, in order to create the default value on the state column.
>
> **[1:29](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=89)** Both RDBMS is though, take the same approach, if you are creating that default value on a new table.
>
> **[1:36](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=96)** In your CREATE TABLE statements, you would just include the keywords DEFAULT, followed by the value right in the same line where you're creating the column in the first place.
>
> **[1:46](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=106)** So any way that you do it, the end result will be identical.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=109)** The RDBMS will now insert the default value whenever an alternate isn't supplied.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=116)** Let's test it out.
>
> **[1:57](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=117)** I'm going to scroll down here on the script and find lines 21 and 22.
>
> **[2:02](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=122)** I'm going to insert a new customer into the table, it'll be for Bread Express with the customer ID, BX305.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=130)** We run both of those lines.
>
> **[2:12](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=132)** That tells me that it was successful and now I can select everything out of the customers table again.
>
> **[2:17](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=137)** So here is the new row that we just inserted.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=140)** Notice that we didn't have to supply the state, but the default value, automatically filled in the value of CA.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=147)** However, we can override this value at any point by supplying our own value.
>
> **[2:32](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=152)** We just scroll down just a little bit more and find lines 27 and 28.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=157)** This time, we're going to insert another customer for a Blue Vine and there are in the state of Florida.
>
> **[2:43](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=163)** Let me highlight these two lines and run it.
>
> **[2:45](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=165)** Then select everything out of the table again, and we can find their row.
>
> **[2:50](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=170)** This time we overrode the default value and put in the correct two letter state abbreviation, FL for Florida.
>
> **[2:58](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=178)** So the default value can speed up data entry by not requiring common attributes to be included in any new row inserts.
>
> **[3:06](https://www.linkedin.com/learning/database-foundations-data-structures/setting-default-values?u=76281980&t=186)** This can standardize the majority of your rows with a certain value, but can easily be overwritten at any time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (4), [[PostgreSQL]] (3), [[PostgreSQL|Postgres]] (1)
> **Env Vars:** sql (4), rdbms (4), add (1), constraint (1), create (1)
> **CLI Commands:** find (3)
> **UI Navigation:** scroll down (2)
> **SQL:** create table (1)
> **Speakers:** - [instructor] (1)

#### [Check constraints](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=0)** - [Instructor] The final type of constraint that you can add to your data tables is called a check constraint.
>
> **[0:06](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=6)** This is the one that most closely resembles the [[Data Validation]] rules that you might be familiar with if you've used a spreadsheet application like [[Microsoft Excel]].
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=17)** Check constraints allow you to specify a numeric range or other types of qualifications that new values must satisfy before there'll be stored in the database.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=27)** This time, we're going to take a look at the TwoTrees orders table.
>
> **[0:32](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=32)** Here, we're storing a row each time a customer places an order.
>
> **[0:36](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=36)** And this includes a total_price column.
>
> **[0:39](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=39)** Let's suppose that the Two Trees company has a minimum order amount and mail orders can be placed if they're below $100.
>
> **[0:48](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=48)** We can build that business rule right into the tables design.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=52)** We do that by running another alter table statement.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=56)** This time we're going to alter the table orders.
>
> **[0:59](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=59)** We'll add a constraint and we'll name the constraint.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=62)** After that, we use the keyword check and then in parentheses we put in a condition.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=68)** This is the condition that must be met in order for data to be considered valid.
>
> **[1:12](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=72)** In the case of the orders data, we want to verify that the value for the total price is greater than 100.
>
> **[1:20](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=80)** If this is true, then the data will get stored in the table.
>
> **[1:23](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=83)** If this is false and the total price is below 100 then the check constraint will step in and prevent the row from being stored.
>
> **[1:31](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=91)** For this condition, you can use the comparison operators, greater than, less than, or equal to, or check text with pattern matching functions that are specific to your RDBMS.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=104)** Now, if you're building a new table and know that you want to incorporate a check constraint, you can add the line, right when you define the column.
>
> **[1:51](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=111)** I have that example here on line 13, or we're putting in the total_price column as a decimal(10,2) data type.
>
> **[1:57](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=117)** And then we have our check constraint after that.
>
> **[2:00](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=120)** And if you're adding multiple constraints to the same column, the sequence doesn't matter.
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=125)** You can add a not null constraint and a default value constraint as well.
>
> **[2:09](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=129)** Just type them out one after the other, in any order.
>
> **[2:13](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=133)** So I'm going to run lines five through seven in order to create the check constraint on the orders table.
>
> **[2:19](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=139)** Then we can test it out.
>
> **[2:21](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=141)** On line 18 and 19, I'm going to try and insert a new row that violates the check constraint.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=147)** This'll be for an order that's only for our $50.
>
> **[2:30](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=150)** That's how it designs and run it.
>
> **[2:32](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=152)** And you'll see that the check constraint has stepped in and prevented that row from getting saved into the database.
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=158)** It tells me that the insert statement conflicted with the check constraint.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=162)** If I try and insert a different row that doesn't violate the check constraint, this one here with an order of $150, you'll see that that's successful.
>
> **[2:51](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=171)** If I select everything out of the orders table now, you'll see the one row that wasn't inserted is not present, but the one that was successful is right here.
>
> **[3:00](https://www.linkedin.com/learning/database-foundations-data-structures/check-constraints?u=76281980&t=180)** So with a check constraint, you can fine tune the rules that your data must meet in order to be considered valid for your business.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Validation]] (1), [[Microsoft Excel]] (1)
> **Code Identifiers:** total_price (2)
> **Env Vars:** rdbms (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Add constraints to a table](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-add-constraints-to-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-add-constraints-to-a-table?u=76281980&t=0)** (upbeat, techno music)
>
> **[0:05](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-add-constraints-to-a-table?u=76281980&t=5)** - [Instructor] We are almost at the end of the course, so let's wrap things up with one final challenge.
>
> **[0:11](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-add-constraints-to-a-table?u=76281980&t=11)** This time, I'd like you to add some constraints to the Employee's table that you've worked on in the previous challenges.
>
> **[0:18](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-add-constraints-to-a-table?u=76281980&t=18)** Your First and Last Name columns should not allow null values.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-add-constraints-to-a-table?u=76281980&t=22)** The phone number should default to a main [[Microsoft Office|office]] number if a custom number isn't supplied.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-add-constraints-to-a-table?u=76281980&t=28)** And finally, check that each employee's salary is not set below $30,000.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-add-constraints-to-a-table?u=76281980&t=34)** After you've made the modifications to your table, test it out by inserting a new employee.
>
> **[0:40](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-add-constraints-to-a-table?u=76281980&t=40)** I estimate that this challenge should take between 10 and 15 minutes to complete.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-data-structures/challenge-add-constraints-to-a-table?u=76281980&t=45)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat, techno music) (1)

#### [Solution: Add constraints to a table](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=0)** - [Instructor] I hope you were able to add in the requested constraints to your employees table.
>
> **[0:10](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=10)** Let's walk through the different commands that we need to execute.
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=13)** First. I'm going to find the two trees database in my [[Microsoft SQL Server|SQL server]] instance, which is where I've been working on the employees table.
>
> **[0:19](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=19)** Going to right click on that and choose new query.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=22)** And then as always, I'm just going to select everything from the table, and this will just allow me to quickly see where or what the state of the table is that we're starting with.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=31)** Okay, so I've got two rows in here and I got a whole bunch of different columns that we're going to work with.
>
> **[0:36](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=36)** I'm just going to type in some notes here for the different things that we're trying to accomplish.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=41)** So I want to have the first and last name columns be not null.
>
> **[0:47](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=47)** We also want to have a default value for the phone number, and the last thing that I asked for was that salaries are above $30,000.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=63)** Okay, so those are the three things that I asked for in the challenge.
>
> **[1:07](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=67)** Now we just need to go through the different steps to accomplish these goals.
>
> **[1:10](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=70)** So in order to add in a not null constraint, we need to alter our table, and we're going to then alter the column, and we're adding a not null constraint on both the first name and the last name columns, so we're just going to take these one at a time.
>
> **[1:26](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=86)** So first name, we alter the first name column, and we need to figure out what its data type is and we'll look over here.
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=95)** Take a look and, oh, that's the wrong table.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=97)** Let's take a look at the employees table.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=98)** So the first name was a varchar.
>
> **[1:40](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=100)** The last name that we'll need in a minute is a varchar 100.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=104)** First name is varchar 50, so that's what I need to know.
>
> **[1:48](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=108)** So the first name was the varchar 50.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=109)** We'll leave it the same, but we'll add a not null constraint onto it.
>
> **[1:54](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=114)** So that should finish the not null constraint on the first name column.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=118)** Going to copy that, paste it down again and we're going to change this to last name.
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=125)** And the data type is a varchar 100.
>
> **[2:08](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=128)** So that'll add the not null constraint on both the first name column and the last name column, if I spell it correctly.
>
> **[2:15](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=135)** Okay. So that is the first part of the challenge.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=138)** Let's go down here, we need to add in a default value for phone number.
>
> **[2:22](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=142)** Now this, unlike the not null constraint, gets added in as a constraint on the table.
>
> **[2:28](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=148)** So we're going to alter table, employees again and this time we're going to add a constraint and we get to name our constraint.
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=158)** Let's call it default phone.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=162)** And then we specify the default value that we want.
>
> **[2:44](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=164)** So default, let's see.
>
> **[2:46](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=166)** How about a phone number, 555-0001?
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=169)** All right. That'll be the main [[Microsoft Office|office]] number for the company, and we specify for and the name of the column that we're specifying this on, that's the phone number is the name of the column, and that finishes the default value.
>
> **[3:04](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=184)** All right, next, salaries are above $30,000.
>
> **[3:07](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=187)** This gets implemented almost identically to the default value, so alter table, employees again.
>
> **[3:14](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=194)** There we're going to add constraint.
>
> **[3:16](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=196)** Let's name this check salary, and it's not a default constraint.
>
> **[3:22](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=202)** This is a check constraint, so we need the check keyword here, and inside the parentheses, we've put in the parameters that we want to verify.
>
> **[3:30](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=210)** So I want to verify that the annual salary is above, or greater than 30,000.
>
> **[3:38](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=218)** Greater than 30,000.
>
> **[3:40](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=220)** So you might as well put it in the decimal there, since I believe it is a 10, 2 decimal table so we can put in the cents too if you wanted to.
>
> **[3:46](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=226)** And that should finish that statement.
>
> **[3:50](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=230)** All right, let's try and run these one at a time, just to make sure that everything works.
>
> **[3:53](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=233)** So I'll add in the null constraint on the first column, my first name column.
>
> **[3:58](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=238)** I did a not null constraint on the last name column, so far so good.
>
> **[4:02](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=242)** Let's add in the default value constraint.
>
> **[4:06](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=246)** All right. Completed successfully.
>
> **[4:09](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=249)** And we'll add in the constraint on the salary.
>
> **[4:12](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=252)** All right, all of those were successful, so let's go ahead and test it out.
>
> **[4:18](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=258)** I'm going to try inserting a new row into the employees table.
>
> **[4:25](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=265)** Let's see what columns we want to fill in.
>
> **[4:26](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=266)** Let's try and test the not null constraint on the last name column.
>
> **[4:32](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=272)** So let's just try and fill in a first name and let's try and fill that in all by itself.
>
> **[4:36](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=276)** So I'll say values.
>
> **[4:38](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=278)** Let's pick a name.
>
> **[4:39](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=279)** How about Paige?
>
> **[4:40](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=280)** All right, let's try and insert, just filling in the first name value.
>
> **[4:44](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=284)** And oh, I got an error here.
>
> **[4:46](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=286)** The first name is not supposed to be inside a single quotation mark there.
>
> **[4:49](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=289)** Okay, so insert into employees, the first name column the value of Paige, which is a text value.
>
> **[4:56](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=296)** All right, run it with that time.
>
> **[4:57](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=297)** Okay, that's the error I was expecting to see.
>
> **[4:59](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=299)** So cannot insert the value null into the last name column.
>
> **[5:02](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=302)** So the last name null constraint is working.
>
> **[5:07](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=307)** Let's try and enter in a valid entry now.
>
> **[5:09](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=309)** So first name, last name, and let's see, I don't need to supply an office number.
>
> **[5:14](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=314)** That should be defaulting to this number, so we'll skip that.
>
> **[5:18](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=318)** We can also skip the hire date, since that's going to allow a null value.
>
> **[5:21](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=321)** Let's just jump right over to annual salary.
>
> **[5:25](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=325)** I'll fill in the annual salary value.
>
> **[5:27](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=327)** Okay, so Paige.
>
> **[5:29](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=329)** Her last name, how about about McElroy and let's try and put in an annual salary of 25,000, which is below our $30,000 threshold.
>
> **[5:41](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=341)** We'll try to run that.
>
> **[5:43](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=343)** Okay, our insert failed again.
>
> **[5:44](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=344)** It conflicted with the check constraint on the salary, so that's good.
>
> **[5:48](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=348)** Let's say this is supposed to be 55,000 instead.
>
> **[5:51](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=351)** Now this one should work.
>
> **[5:55](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=355)** And there we go, one row was affected, so that was good.
>
> **[6:01](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=361)** So let's list everything out of the employees table again, just to verify.
>
> **[6:05](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=365)** And there are three employees.
>
> **[6:07](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=367)** So there's Paige McElroy.
>
> **[6:09](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=369)** She has the default phone number that was put in and her annual salary is above the $30,000 minimum threshold.
>
> **[6:16](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=376)** So that's how I solved the challenge for the employees table on the SQL server database.
>
> **[6:21](https://www.linkedin.com/learning/database-foundations-data-structures/solution-add-constraints-to-a-table?u=76281980&t=381)** I'm going to save all of this as challengeFour-complete.txt so that you can review my solution and compare it against yours.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (2), [[Microsoft Office|Office]] (2)
> **Definitions:** is a  (5)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** sql (2)
> **File Paths:** challengefour-complete.txt (1)
> **Code Identifiers:** challengefour (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Set additional constraints on the data](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=5)** - [Instructor] In this challenge, we're given a table for job postings and we need to alter its design to add in a number of different constraints that we want enforced before records can be stored in the table.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=17)** Adding constraints on the data will help ensure that everything is entered in consistently and in a way that aligns with the business rules and formatting expectations that we have.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=27)** So here is the initial CREATE TABLE statement that we have to work with.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=31)** And so now we just need to go through and add in all of the different constraints.
>
> **[0:36](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=36)** So the first one is to add in the primary key constraint.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=41)** I'll just type in a comment there so we can tell where I'm at.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=45)** And this is going to alter the table called JobPostings.
>
> **[0:50](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=50)** And this is the table that's created right here.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=52)** You can see the different columns that are involved with that.
>
> **[0:54](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=54)** So we need to alter the table JobPostings, and we're going to add in our primary key constraints.
>
> **[0:59](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=59)** So ADD CONSTRAINT.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=62)** We can name the constraint whatever we want.
>
> **[1:05](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=65)** Primary key constraints often have the prefix pk_, so I'll just call it PK_JobID.
>
> **[1:14](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=74)** And we specify the type of constraint that we want to make is a primary key constraint.
>
> **[1:20](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=80)** And then in parentheses, the column that we are creating the constraint on, and that's the JobID column.
>
> **[1:26](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=86)** And that finishes the primary key constraint.
>
> **[1:30](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=90)** The next one we're asked for is a unique constraint, and this is going to be on the application URL.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=97)** So every job posting has to have a unique link that people can apply for that [[Java]].
>
> **[1:43](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=103)** And to speed things up, we are going to be doing a lot of different alter table statements.
>
> **[1:47](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=107)** So to speed things up, I'm just going to copy that to my clipboard.
>
> **[1:50](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=110)** And so I can just paste in alter table job postings, we're going to use that over and over again.
>
> **[1:55](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=115)** So we'll alter table job postings, we'll add in another constraint.
>
> **[2:00](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=120)** This one we can name unique constraints, often have the prefix UQ to identify that this is a unique constraint when we see it inside of the database tree listing.
>
> **[2:12](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=132)** And we'll call this application URL.
>
> **[2:17](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=137)** The type of constraint is unique and it's on the application URL column.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=145)** All right, so that's that one.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=147)** Let me scroll down here.
>
> **[2:29](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=149)** The next one we need to add in is some not null constraints.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=157)** So we're going to alter the table job postings.
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=158)** Again, we have a couple of these to add in here.
>
> **[2:40](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=160)** So we're going to alter COLUMN Job Title, and we're going to set that to not null.
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=169)** Then we'll alter the table job postings again.
>
> **[2:52](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=172)** We're going to alter column.
>
> **[2:55](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=175)** This one is going to be the job description column, and we'll set that to not null as well.
>
> **[3:06](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=186)** And we have one more, ALTER COLUMN.
>
> **[3:10](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=190)** This next one is the application URL.
>
> **[3:16](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=196)** And we'll set that to not null.
>
> **[3:19](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=199)** Incidentally, you can also use ALTER TABLE, ALTER COLUMN to change the data type for a column.
>
> **[3:26](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=206)** So if we want to change the application URL, let me scroll up here at the top again, that is being put in as a VARCHAR(100).
>
> **[3:33](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=213)** If I wanted to change the design of the table and redefine that, instead of the set keyword, we can say something like varchar(50) if we wanted to make it a different data type.
>
> **[3:45](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=225)** So that's where you would put that in inside of the ALTER TABLE, ALTER COLUMN statement.
>
> **[3:49](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=229)** But since we don't need to modify any of the data types, we do need to use the set keyword here.
>
> **[3:57](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=237)** So I'll just put those in there.
>
> **[3:59](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=239)** So those are the three columns that we were asked to add in, not null constraints so that we cannot store a record unless it has a value for the job title, job description, and the application URL.
>
> **[4:13](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=253)** Next up, we were asked for some check constraints.
>
> **[4:19](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=259)** So once again, we're going to alter the table JobPostings.
>
> **[4:22](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=262)** We're going to add in a constraint.
>
> **[4:25](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=265)** And check constraints often have the prefix ck_, and this is going to be a check on the salary.
>
> **[4:34](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=274)** The type of constraint is a check constraint.
>
> **[4:37](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=277)** And here we want honey, we just want to make sure that the salary is always greater than or equal to $25,000.
>
> **[4:47](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=287)** So we don't want to be able to put in a job posting for a job that has a salary less than 25,000.
>
> **[4:52](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=292)** Then type in a semicolon at the end of that one.
>
> **[4:55](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=295)** Next up, we need to add in a default value for the posting date.
>
> **[4:59](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=299)** We want all of our job postings to get the date of today automatically when they're entered in unless a different date is specified.
>
> **[5:09](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=309)** So once again, we will alter the table, ALTER TABLE JobPostings.
>
> **[5:16](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=316)** This time it's not a constraint.
>
> **[5:18](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=318)** We need to alter the column.
>
> **[5:20](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=320)** So we need to ALTER COLUMN posting date.
>
> **[5:25](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=325)** And we're going to set a default value.
>
> **[5:27](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=327)** So SET DEFAULT.
>
> **[5:29](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=329)** And then what do we want to the default value for the posting date to be?
>
> **[5:32](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=332)** Well, we want it to be today's date, and we can get that with a built-in function that's built into most and C compatible database platforms called CURRENT_DATE.
>
> **[5:43](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=343)** So I'll take whatever today's date is and place that in automatically.
>
> **[5:47](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=347)** And then finally, we need to, let me put in a comma up here.
>
> **[5:51](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=351)** This is adding the default value.
>
> **[5:58](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=358)** Okay, and then we needed one more default value.
>
> **[6:01](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=361)** So we're going to ALTER TABLE JobPostings, ALTER COLUMN.
>
> **[6:07](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=367)** We needed one more default value on the status of the job posting.
>
> **[6:11](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=371)** So we're going to ALTER COLUMN Status and we'll set default.
>
> **[6:17](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=377)** And for this, we wanted it to automatically get the status of open.
>
> **[6:22](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=382)** So the job posting is automatically considered open unless whoever is entering in the data puts something different in.
>
> **[6:29](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=389)** And that finishes all of my constraints.
>
> **[6:32](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=392)** So below that, we have an insert into statement that's going to insert a couple of postings.
>
> **[6:36](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=396)** We have the ID number, the URL, the type of posting, a description, as well as the salary.
>
> **[6:45](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=405)** But you notice we don't have anything about the status or the posting date in this insert statement.
>
> **[6:52](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=412)** But when I test my code, if I typed everything incorrectly, which I did, we have our table here.
>
> **[6:58](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=418)** And if I scroll to the right, we'll find our two job postings have automatically gotten the posting date of today's date.
>
> **[7:05](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=425)** So this is when I'm running this challenge personally.
>
> **[7:07](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=427)** Your date is going to be different, but they also have a status of open.
>
> **[7:11](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=431)** So even though that wasn't in the insert statement, you can see those values are not here in the insert statement.
>
> **[7:17](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=437)** They're getting automatically populated by the default value constraints that we're adding in here inside of our edits.
>
> **[7:24](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=444)** So this is one way that we can change that table by adding in the different constraints, the default values, the check constraint on the salary, the not null constraints on these columns here, and that gets us to a solution.
>
> **[7:40](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=460)** Now, there is one additional way that we can do this that I want to show you.
>
> **[7:43](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=463)** Let me click on this button here to reset the challenge, and that'll go back to the default way that we originally had here at the very beginning.
>
> **[7:52](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=472)** And the other way to do that is to put all those constraints right into the CREATE TABLE statements right at the beginning.
>
> **[7:59](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=479)** So if you have a brand new table and you want all of those constraints, you can build that right into the CREATE TABLE statement and it makes it a little bit easier.
>
> **[8:07](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=487)** So for instance, the JobID, we want that to be the primary key.
>
> **[8:11](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=491)** So I can just say the JobID, data type INT, the NOT NULL constraint and primary key.
>
> **[8:20](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=500)** For the application URL, you remember, we wanted that to be a unique constraint.
>
> **[8:25](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=505)** So after NOT NULL, I can say UNIQUE and that'll automatically apply a unique constraint to it.
>
> **[8:30](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=510)** Now in this case, we don't have the option to name those particular constraints.
>
> **[8:34](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=514)** So if you wanted to name them, you'd have to go through an alter table statement.
>
> **[8:39](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=519)** But if you don't really care what the name of the constraint is, then you could just do it here in line in the CREATE TABLE statement.
>
> **[8:45](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=525)** For the JobTitle, we said that one was NOT NULL.
>
> **[8:48](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=528)** For the JobDescription, after the TEXT data type, we can say NOT NULL.
>
> **[8:55](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=535)** After the Salary, that one has a constraint, a check constraint to make sure the salary is above 25,000, so we can put that right after the decimal data type.
>
> **[9:06](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=546)** So we can say CHECK, and in parentheses, salary greater than or equal to 25,000.
>
> **[9:13](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=553)** And then the posting date is going to get a default constraint.
>
> **[9:17](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=557)** And that default is current date with an underscore between 'em.
>
> **[9:22](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=562)** And then finally, the status VARCHAR(20), we also wanted to have a default constraint on that, and that will just default to open.
>
> **[9:32](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=572)** And so this gets us to the exact same spot.
>
> **[9:34](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=574)** Let me go ahead and test my code.
>
> **[9:37](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=577)** And you see identical output.
>
> **[9:39](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=579)** So we still have our two rows being entered.
>
> **[9:41](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=581)** If I scroll over here to the right, we still have the posting date and the status getting put in automatically by these default constraints.
>
> **[9:48](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=588)** So you can see that's a lot less typing.
>
> **[9:50](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=590)** If you have the option to add these constraints when you're creating the table, it creates a much simpler batch of code that you need to read and a lot less typing for you.
>
> **[10:00](https://www.linkedin.com/learning/database-foundations-data-structures/solution-set-additional-constraints-on-the-data?u=76281980&t=600)** So that is a second way that you can get to the same options for this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Env Vars:** alter (10), table (8), url (8), column (7), create (4)
> **SQL:** create table (4), alter table (4), varchar (2)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is a  (5)
> **UI Navigation:** scroll down (1), scroll up (1), click on (1)
> **Cross-References:** go back to (1)
> **Analogies:** for instance (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/database-foundations-data-structures/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-data-structures/next-steps?u=76281980&t=0)** - [Adam] Congratulations on reaching the end of this course.
>
> **[0:03](https://www.linkedin.com/learning/database-foundations-data-structures/next-steps?u=76281980&t=3)** I'd like to thank you for joining me for part two of the Database Foundation series.
>
> **[0:08](https://www.linkedin.com/learning/database-foundations-data-structures/next-steps?u=76281980&t=8)** Before you go, I'd like to share a couple of additional courses that I think you might find helpful to expand on the database topics that we've learned so far.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-data-structures/next-steps?u=76281980&t=17)** In my course, [[Relational Databases Essential Training]], I walked through the steps of planning a [[Database Design]] from scratch and show how to draw out and organize the blueprint for your database using graphical [[Diagramming]] software.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-data-structures/next-steps?u=76281980&t=31)** For more in-depth content on the [[PostgreSQL]] RDBMS platform, take a look at my PostgresSQL Essential Training course.
>
> **[0:40](https://www.linkedin.com/learning/database-foundations-data-structures/next-steps?u=76281980&t=40)** I've been Adam Wilbert, and I hope you have a fantastic day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Relational Databases]] (1), [[Database Design]] (1), [[Diagramming]] (1), [[PostgreSQL]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** rdbms (1)
> **Speakers:** - [adam] (1)


## Instructor

- [[Adam Wilbert]]

## Resources

- Exercise files available

## Skills Covered

- Data Structures

## Path Context

### In [[Database Foundations- From Concepts to Applications]]
← [[Database Foundations Intro To Databases]] | **2 of 5** | [[Database Foundations Database Management]] →

### In [[Advance Your Database Administration Skills]]
← [[Database Foundations Intro To Databases]] | **2 of 11** | [[Database Foundations Database Management]] →

## Appears In

- [[Database Foundations- From Concepts to Applications]]
- [[Advance Your Database Administration Skills]]

## Related Courses

_Courses sharing skills:_

- [[Python Data Structures- Trees]] — Data Structures
- [[Python Data Structures- Linked Lists]] — Data Structures
- [[Python Data Structures- Stacks, Deques, and Queues]] — Data Structures
- [[Python Data Structures and Algorithms]] — Data Structures
- [[Java- Data Structures]] — Data Structures

---

[↑ Back to top](#)