---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: database-foundations-intro-to-databases
url: "https://www.linkedin.com/learning/database-foundations-intro-to-databases"
level: Beginner
updated: 10/18/2024
learners: 67055
skills:
  - Databases
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHKDo5Z5gFCAA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1730492695783?e=2147483647&amp;v=beta&amp;t=x6X7QdGFbjwaYZDEJUY1AKm7z1e9ow-Cp6_rHZNKl0Y"
linkedin_topic: Data Science
learning_paths:
  - '[[Database Foundations- From Concepts to Applications]]'
  - '[[Advance Your Database Administration Skills]]'
next_courses:
  - '[[Database Foundations- Data Structures]]'
  - '[[Database Foundations- Data Structures]]'
path_nav: '[{"path":"Database Foundations- From Concepts to Applications","position":1,"total":5,"prev":null,"next":"Database Foundations- Data Structures"},{"path":"Advance Your Database Administration Skills","position":1,"total":11,"prev":null,"next":"Database Foundations- Data Structures"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/databases
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Database%20Foundations%20Intro%20To%20Databases.md)

![Database Foundations Intro To Databases](https://media.licdn.com/dms/image/v2/D560DAQHKDo5Z5gFCAA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1730492695783?e=2147483647&amp;v=beta&amp;t=x6X7QdGFbjwaYZDEJUY1AKm7z1e9ow-Cp6_rHZNKl0Y)

# Database Foundations Intro To Databases

> What is a database? How can you build one? Do you want to learn more? In this course, database expert Adam Wilbert shows you how to set up container-based servers, connect a management GUI, and start building a database for your valuable data. You don’t need to come with any specific prior knowledge or have any specific software pre-installed. This course’s content is applicable to learners on any

> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases) | Beginner | 67K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [An introduction to database foundations](#an-introduction-to-database-foundations)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
  - [CoderPad tour](#coderpad-tour)
- [**1. Database Core Concepts**](#1-database-core-concepts) (4 videos)
  - [What is a database?](#what-is-a-database)
  - [Storing data efficiently](#storing-data-efficiently)
  - [Relational database management systems](#relational-database-management-systems)
  - [The client-server model](#the-client-server-model)
- [**2. Set Up a Database Playground**](#2-set-up-a-database-playground) (7 videos)
  - [Purpose of the playground](#purpose-of-the-playground)
  - [Install Docker](#install-docker)
  - [Database server containers](#database-server-containers)
  - [Local installation alternatives to Docker](#local-installation-alternatives-to-docker)
  - [RDBMS command-line interfaces](#rdbms-command-line-interfaces)
  - [Challenge: Create a server container](#challenge-create-a-server-container)
  - [Solution: Create a server container](#solution-create-a-server-container)
- [**3. Graphical Interfaces**](#3-graphical-interfaces) (7 videos)
  - [Management interfaces](#management-interfaces)
  - [Install Azure Data Studio](#install-azure-data-studio)
  - [Connect to a database server](#connect-to-a-database-server)
  - [Explore the server’s contents](#explore-the-servers-contents)
  - [Create a database](#create-a-database)
  - [Challenge: Create a database](#challenge-create-a-database)
  - [Solution: Create a database](#solution-create-a-database)
- [**4. Create Table Objects**](#4-create-table-objects) (9 videos)
  - [Structured Query Language](#structured-query-language)
  - [Organize a database with schemas](#organize-a-database-with-schemas)
  - [Table columns](#table-columns)
  - [Create tables](#create-tables)
  - [Alter tables](#alter-tables)
  - [Reserved keywords](#reserved-keywords)
  - [Challenge: Create a table](#challenge-create-a-table)
  - [Solution: Create a table](#solution-create-a-table)
  - [Solution: Tables and data types](#solution-tables-and-data-types)
- [**5. Add Data to a Table**](#5-add-data-to-a-table) (7 videos)
  - [Table rows](#table-rows)
  - [Add records](#add-records)
  - [Update and delete records](#update-and-delete-records)
  - [Saving and using SQL scripts](#saving-and-using-sql-scripts)
  - [Challenge: Add data to a table](#challenge-add-data-to-a-table)
  - [Solution: Add data to a table](#solution-add-data-to-a-table)
  - [Solution: Correct recorded information](#solution-correct-recorded-information)
- [**6. Retrieve Information**](#6-retrieve-information) (7 videos)
  - [Querying data](#querying-data)
  - [Return data with SELECT and FROM](#return-data-with-select-and-from)
  - [Filter rows with WHERE](#filter-rows-with-where)
  - [Sort values with ORDER BY](#sort-values-with-order-by)
  - [Combine data with JOIN](#combine-data-with-join)
  - [Limiting the number of rows returned](#limiting-the-number-of-rows-returned)
  - [Solution: Write a SQL SELECT query](#solution-write-a-sql-select-query)
- [**7. Manipulate Data**](#7-manipulate-data) (8 videos)
  - [Display column aliases with AS](#display-column-aliases-with-as)
  - [Mathematical operations](#mathematical-operations)
  - [Use built-in functions](#use-built-in-functions)
  - [Aggregate data with GROUP BY](#aggregate-data-with-group-by)
  - [Filtering groups with HAVING](#filtering-groups-with-having)
  - [Challenge: Query data](#challenge-query-data)
  - [Solution: Query data](#solution-query-data)
  - [Solution: Query summary statistics](#solution-query-summary-statistics)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### An introduction to database foundations
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/an-introduction-to-database-foundations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/an-introduction-to-database-foundations?u=76281980&t=0)** - [Adam] Experience with databases is one of the most sought-after skills in IT, but it can be hard to know where to start.
>
> **[0:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/an-introduction-to-database-foundations?u=76281980&t=8)** There's a wide variety of competing database platforms to choose from, and the process of installing one to test it out can be complicated or expensive or both.
>
> **[0:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/an-introduction-to-database-foundations?u=76281980&t=18)** Well, not anymore.
>
> **[0:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/an-introduction-to-database-foundations?u=76281980&t=19)** In my Database Foundations series, I'll show you everything that you need to kickstart a career in the world of databases.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/an-introduction-to-database-foundations?u=76281980&t=26)** In this first course, Intro to Databases, I'll guide you through a container-based configuration process.
>
> **[0:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/an-introduction-to-database-foundations?u=76281980&t=32)** This greatly simplifies the installation and sets up a system that'll grow with you as you continue on your learning journey.
>
> **[0:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/an-introduction-to-database-foundations?u=76281980&t=40)** Hi, my name is Adam Wilbert, and I've been introducing people to the world of databases for well over a decade.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/an-introduction-to-database-foundations?u=76281980&t=46)** If you've never created or managed a database before, then this course is a great place to start.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/an-introduction-to-database-foundations?u=76281980&t=52)** So join me on LinkedIn Learning, and get ready to dive into database development.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (4), database (3), career (1), [[LinkedIn]] (1), [[Database Development]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [adam] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-you-should-know?u=76281980&t=0)** - [Instructor] I've created this course to introduce you to the foundations of relational databases no matter what platform you want to work with or which operating systems you use.
>
> **[0:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-you-should-know?u=76281980&t=10)** So I don't expect you to come in with any prior experience with databases or have any specific hardware or software installed.
>
> **[0:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-you-should-know?u=76281980&t=18)** We're literally going to start at the very beginning, and I'll walk you through the process of obtaining and installing all of the tools that you'll need.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-you-should-know?u=76281980&t=26)** Other than that, if you have some data of your own that you can apply to the lessons as we go along, that'll definitely help reinforce your learning experience.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Relational Databases]] (1), [[Databases]] (1), [[Hardware]] (1), data (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/using-the-exercise-files?u=76281980&t=0)** - You can find a link to download the same exercise files that I'll be using in this course from the main overview page.
>
> **[0:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/using-the-exercise-files?u=76281980&t=6)** I've downloaded them and placed them here on my desktop and inside of the Exercise Files folder is a folder for each chapter in the course, and inside of there are the individual files themselves.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/using-the-exercise-files?u=76281980&t=17)** Now most of these are just plain text files.
>
> **[0:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/using-the-exercise-files?u=76281980&t=19)** You can open them up inside of any text editor.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/using-the-exercise-files?u=76281980&t=22)** Then you'll want to copy the text out of it to paste into your management program.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/using-the-exercise-files?u=76281980&t=27)** Let's go ahead and close this down.
>
> **[0:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/using-the-exercise-files?u=76281980&t=29)** Some of the files you'll notice, have the word Complete at the end of them.
>
> **[0:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/using-the-exercise-files?u=76281980&t=33)** These represent the final state of the script at the end of the movie.
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/using-the-exercise-files?u=76281980&t=37)** Now, if you don't have access to the exercise files, that's okay.
>
> **[0:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/using-the-exercise-files?u=76281980&t=40)** You can follow along by typing the same commands that you see on the screen, or simply sit back and watch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** management (1), [[Microsoft Word|Word]] (1)
> **Exercise Files:** exercise files (3), download the (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - you (1)

#### CoderPad tour
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/coderpad-tour?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/coderpad-tour?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the challenge links in the course's table of contents.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/coderpad-tour?u=76281980&t=7)** Each challenge includes instructions and a code editor that you can use to create and test your own solution to the challenge.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/coderpad-tour?u=76281980&t=14)** These challenges are hosted by CoderPad, and they appear in the same area of the course page where you watch the videos.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/coderpad-tour?u=76281980&t=22)** We recommend using a desktop browser for the best experience with code challenges, but you can use the LinkedIn Learning mobile app if you prefer.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/coderpad-tour?u=76281980&t=30)** Now, the code challenge screen has three different areas.
>
> **[0:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/coderpad-tour?u=76281980&t=32)** We have the instructions in the top left, a console for the output in the bottom left, and a code editor for your answer on the right.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/coderpad-tour?u=76281980&t=41)** You can use the drag handles between each of these panels in order to reallocate space however you'd like.
>
> **[0:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/coderpad-tour?u=76281980&t=47)** To get even more horizontal space for the code editor, you can collapse the course's table of contents on the left.
>
> **[0:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/coderpad-tour?u=76281980&t=54)** Now, each challenge has instructions that include a description of the challenge and the challenge's desired result.
>
> **[1:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/coderpad-tour?u=76281980&t=60)** Your job is to create your answer in the code editor on the right.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/coderpad-tour?u=76281980&t=64)** When you click on the Test my code button, you'll see a message indicating whether your code returned a correct result and a text-based version of the returned data.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/coderpad-tour?u=76281980&t=73)** Now, if your answer does not create a correct result, you'll see a message indicating that here.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/coderpad-tour?u=76281980&t=78)** Your task is to update the code in order to get a correct answer.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/coderpad-tour?u=76281980&t=82)** I'll change the select statement to: SELECT MAX(price) AS (price) FROM Dishes; I'll test my code again, and this time I get the correct output for this challenge.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/coderpad-tour?u=76281980&t=94)** Now, if any messages are too long to fit in this console window, you can scroll sideways to see all of the text using a slider here on the bottom.
>
> **[1:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/coderpad-tour?u=76281980&t=103)** When you finished each code challenge, return to the course's table of contents, and click to the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1), data (1), next (1)
> **Env Vars:** select (1), max (1)
> **UI Navigation:** click on (2)
> **SQL:** select (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)


### 1. Database Core Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### What is a database?
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=0)** - [Instructor] Its common to start an introductory course with a big picture question, such as, what is a database?
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=7)** Now, it sounds like an easy question, right?
>
> **[0:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=9)** We might say that a database is a system used to store data.
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=13)** But there's many different ways to store data.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=16)** A shoebox full of receipts can be used to store data about business expenses.
>
> **[0:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=21)** But I wouldn't consider this to be a database.
>
> **[0:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=24)** A wall full of stick notes can also be used to store data.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=27)** But that's not really what a database is either.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=30)** So, our definition needs a little work.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=34)** We can focus our definition by restricting it to the real of digital data.
>
> **[0:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=39)** We might instead say that a database is a computer system for storing data.
>
> **[0:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=44)** Under this definition, all of the files on our computer's entire hard drive would qualify.
>
> **[0:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=50)** And while they certainly store digital data, they don't collectively make up a database.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=56)** What about a single file?
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=57)** Like a spreadsheet.
>
> **[0:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=59)** Is this a database?
>
> **[1:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=60)** The short answer is yes.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=62)** A spreadsheet is a kind of database.
>
> **[1:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=65)** What specifically sets spreadsheets apart from the other files on your computer is that they store data in organized arrangement of rows and columns.
>
> **[1:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=76)** In addition to storing data, organization is a critical component of a database.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=81)** So, let's add that in to our definition.
>
> **[1:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=84)** A database is a computer system used to organize and store data.
>
> **[1:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=89)** This definition gets us really close to pinpointing what a database is.
>
> **[1:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=93)** But it doesn't address a second and more interesting question.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=97)** Why?
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=98)** Why would you want to store and organize data?
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=102)** The entire reason you would store data in the first place is to make use of it again later.
>
> **[1:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=107)** Databases store data so that it can be retrieved, analyzed and acted upon.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=113)** After all, if you're not going to actually do anything with your data, then why go through the hassle of storing it in the first place.
>
> **[2:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=121)** The retrieval of data is the last critical component that we need to add in to our definition.
>
> **[2:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=126)** This gets us to a final working understanding of what a database is.
>
> **[2:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=131)** A database is a computer system that organizes and stores data so that it can be useful at a later point in time.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=140)** Now, as we saw, a spreadsheet can be considered a type of database.
>
> **[2:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=144)** They store organized data so they can be used later.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=147)** But that's not really what we're going to be learning about in this course.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=151)** When most people talk about databases, what they really mean is a more specific system called a relational database.
>
> **[2:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=160)** A relational database enforces specific rules on the system that govern how the data is structured, stored and retrieved.
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=169)** In a relational database data is organized in to tables.
>
> **[2:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=172)** Just like a spreadsheet that contain rows and columns.
>
> **[2:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=176)** But unlike a traditional spreadsheet, a relational database contains many different tables that all relate to each other.
>
> **[3:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=184)** This system of related table allows data to be stored in an efficient manner.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=189)** Reduces duplication and inconsistencies.
>
> **[3:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=192)** Makes retrieval faster.
>
> **[3:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=194)** And allows the data to be sliced and diced in to an infinite number of arrangements so that a skilled analyst can turn that data in to useful, valuable and actionable information.
>
> **[3:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=207)** And this is what this course is all about.
>
> **[3:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/what-is-a-database?u=76281980&t=210)** I'll show you how to move beyond the spreadsheet to increase the value of your data by structuring it according to the principles of a relational database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (23), database (19), [[Databases]] (2), business (1)
> **Definitions:** is a  (8)
> **Analogies:** picture (1), such as (1), just like (1)
> **CLI Commands:** make (2)
> **Cross-References:** as we saw (1)
> **Speakers:** - [instructor] (1)

#### Storing data efficiently
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980&t=0)** - [Instructor] I mentioned that a spreadsheet could be considered a type of database, but that it isn't the best choice from an efficiency perspective when you need to store large amounts of data.
>
> **[0:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980&t=11)** Let's explore this a little bit by taking a look at some data about people and their pets.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980&t=16)** Here, I have a single data table, or what's sometimes referred to as a flat file database.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980&t=22)** It has columns that define the type of information that we're storing, and then we have four different rows of actual data.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980&t=28)** This allows me to store an owner's first and last name, their phone number, their pet's name, and the type of animal that it is.
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980&t=37)** Reading across each row, I can easily see that Macy Bishop has three pets, and that Elijah Knight has one.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980&t=45)** If you count up all of the data cells in this table, you'll see that there are 20 cells needed to store all of this information when it's structured in a single table.
>
> **[0:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980&t=54)** Now let's rearrange things a little bit.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980&t=56)** This time, I'll make one table for the owner information, and a second table for the pet information.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980&t=63)** In order to get to the same level of detail and be able to figure out which pet belongs to which owner, I'll need an additional column in each table.
>
> **[1:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980&t=72)** I'll call it owner ID and it'll just store a unique identifier for each owner.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980&t=77)** So Macy is owner number one, and Elijah is owner number two.
>
> **[1:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980&t=83)** By matching the numbers up between both tables, I can still figure out that Macy has three pets and that Elijah has one.
>
> **[1:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980&t=90)** This relationship between the data in the owner's table and the data in the pets table is what makes this an example of a relational database.
>
> **[1:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980&t=99)** The interesting thing about this is that even though we added two additional columns that weren't present in the flat file database, we're still only using 20 cells to store all of this information, exactly the same as before.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980&t=113)** If we take this a step further and add some more information to our database, say the owner's home address, then we just need two additional cells in this database.
>
> **[2:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980&t=122)** If you were to add the same information to the previous flat file structure, you'd find that you'd have to add four cells to do the same thing.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980&t=130)** So already with this very small example, we're starting to see some efficiency gains by splitting the data into multiple related tables.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980&t=138)** These gains are the direct result of limiting the redundancy that was present in the first example where we had the store Macy's first name, last name and phone number multiple times, once for each pet.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980&t=151)** Now we only need that information once and we can match it to each pet through the owner ID.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980&t=157)** The other benefit to this arrangement is that it makes updates much easier.
>
> **[2:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980&t=161)** If Macy were to change their phone number or move to a new address, we only need to update that information in a single place.
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980&t=169)** In the prior example, we would have had to make those changes three different times.
>
> **[2:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980&t=174)** This illustrates the reason why a relational database provides an efficient structure for storing data.
>
> **[3:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/storing-data-efficiently?u=76281980&t=180)** By minimizing redundancy, data can be stored in less space and be easier to maintain and update.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (10), database (7)
> **CLI Commands:** make (2), find (1)
> **Speakers:** - [instructor] (1)

#### Relational database management systems
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=0)** - [Instructor] When you start splitting your tabular data across multiple tables, it's important to stay organized and ensure that all of the components of your data structure fit together as intended.
>
> **[0:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=11)** This is where a Relational Database Management System comes into play.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=16)** a Relational Database Management System, or RDBMS, for short, gives you the tools that you need in order to build a database to meet your unique set of requirements.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=27)** Here are just a few of the tasks that an RDBMS will help you out with.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=31)** A primary importance is the ability to create new data tables and connect them together.
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=37)** The RDBMS will help you to find the columns that make up each table and formerly link them together.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=43)** Then it'll place rules on the table so that the data that's stored meets your quality expectations.
>
> **[0:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=48)** All of this helps ensure that your data is trustworthy and complete.
>
> **[0:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=53)** Once the table is created, the RDBMS will help you store and organize your data.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=58)** It'll build indexes so that you can quickly locate individual pieces of information.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=63)** And it can make redundant copies of your data or store regular backups to protect against data loss in the face of catastrophic events like a server crash or a natural disaster.
>
> **[1:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=75)** Next, the RDBMS secures your data by controlling who has access to it.
>
> **[1:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=80)** By managing user logins and permissions, it makes sure that people can read and write data that they're allowed to view and keeps people away from data that they're not authorized to view.
>
> **[1:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=91)** And even when people do have permission to access data, the RDBMS can provide logging and auditing tools so that activities can be monitored in order to meet industry compliance and security standards.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=104)** This is particularly helpful when your database contains sensitive financial or medical data that's often subject to government regulations.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=113)** So structure, store and secure, those are the three main responsibilities.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=118)** But this is just a start to the tasks given to the Relational Database Management System.
>
> **[2:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=124)** As you can see, a relational database does a lot more than just keep your valuable data in tables.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=130)** So it's important to choose to work with an RDBMS that's compatible with your requirements.
>
> **[2:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=136)** Picking one is a lot like buying a new vehicle.
>
> **[2:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=139)** All of the vehicles in the showroom basically do the same thing.
>
> **[2:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=142)** They all have four wheels and an engine.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=145)** But a pickup truck meets a different set of requirements than a sedan or a sports car.
>
> **[2:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=150)** Just like different car manufacturers produce different kinds of cars for different kinds of people.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=155)** There's many different companies that produce competing Relational Database Management Systems that are aimed at different users with different priorities.
>
> **[2:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=164)** If you're building a database for a personal project or a small business, then you might be well served with a Desktop RDBMS such as Microsoft Access, FileMaker or Open Office Base.
>
> **[2:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=176)** For medium to large businesses and enterprise customers with their own data centers, Microsoft SQL Server, Oracle, PostgreSQL or MySQL might be a better fit.
>
> **[3:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=188)** If you want your data stored in the Cloud, so that it's easily accessible from all over the world, you might choose Microsoft Azure SQL Database, Amazon Relational Database, Oracle Database Cloud, or Google Cloud SQL.
>
> **[3:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=201)** These are just a few of the major providers of RDBMS software.
>
> **[3:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=206)** For a more complete list, take a look at the rankings maintained by [DB-Engines.com](https://DB-Engines.com).
>
> **[3:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=212)** Here you can see which platforms are the most popular from month to month, and then click through to each one in order to compare their capabilities against one another.
>
> **[3:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=222)** Now, a quick note about this course, and in fact, the entire database foundation series, it's important to me that I make this content as platform independent as possible and not focus on the capabilities of a single platform.
>
> **[3:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=236)** I'm mostly going to focus on the core components that are shared across almost all of these options.
>
> **[4:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=241)** So it won't matter if you're working on a PC, or a Mac or Linux or using SQL Server or Oracle or one of the Cloud platforms.
>
> **[4:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=249)** The concepts that we'll look at in this course will apply to any of these options.
>
> **[4:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=254)** Now with that said, though, we do need to pick something that we can play around and experiment with.
>
> **[4:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=259)** So I'm going to show you how to set up both a SQL Server and a PostgreSQL RDBMS in the next chapter.
>
> **[4:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/relational-database-management-systems?u=76281980&t=266)** That'll give us the tools that we need in order to compare the two platforms to one another and give you a good idea about the breadth of options that are available.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (16), database (12), management (4), cloud (3), next (2)
> **Env Vars:** rdbms (10), sql (5)
> **CLI Commands:** make (3), find (1), mysql (1)
> **Analogies:** just like (1), such as (1)
> **URLs:** [db-engines.com](https://db-engines.com) (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)

#### The client-server model
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=0)** - Before we turn our attention to installing some software, there's one more concept that we need to dive into.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=7)** All relational database management systems operate on a client server model.
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=13)** This means that there's two components that work together to form a complete system.
>
> **[0:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=18)** First is the database server.
>
> **[0:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=20)** This is the component that performs all of the relational database management work.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=25)** The server is where your data is structured, stored and secured.
>
> **[0:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=29)** The second component is the client.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=31)** It's the interface that allows users to connect to the server to send commands and control it's operation.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=38)** This interface can be a command line or a text based interface, or a graphical interface, or a custom written application that's specifically tailored to the needs of the user.
>
> **[0:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=49)** If you think about these two components like parts of a car, the server is the vehicle's engine.
>
> **[0:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=55)** It's where all of the work is performed that moves the car down the road.
>
> **[1:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=60)** The client is the vehicle's interior cabin.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=63)** This provides the controls needed to keep the driver comfortable, while telling the car what to do.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=69)** Speed up, slow down, turn left, turn right.
>
> **[1:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=72)** Both components work together to operate car.
>
> **[1:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=75)** And both a client and a server are required to create a complete relational database management system.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=82)** The nice thing about this arrangement is that you can mix and match the pieces to suit different needs by choosing from a number of different clients.
>
> **[1:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=90)** If you're performing server maintenance using a terminal window, you can connect with a Command-line interface or a CLI.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=97)** If you prefer a more traditional desktop application experience, you can choose to use a graphical interface that provides toolbars and buttons to perform different tasks.
>
> **[1:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=107)** If you want to use an internet based client through your web browser, there are clients built for that.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=113)** Even custom written applications that use a database back end, such as an internet storefront or a video game, also serve as a client that connects to the database server.
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=125)** One of the other nice benefits of this client server model is that you can have multiple clients that all connect to the same server.
>
> **[2:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=132)** Consider a popular online multiplayer game, that may have to have millions of simultaneous players all connected to a shared server.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=140)** Or an office full of employees that are evaluating company wide financial data.
>
> **[2:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=146)** Since everyone is connected to the same database server, they all have access to the same up to date information.
>
> **[2:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=153)** The flip side to this is that you can use a single client to connect to multiple servers.
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=158)** If you're managing supply levels for your business, you can use the same graphical interface client to log into your company's inventory management database, a vendor's manufacturing database, and the transportation company's shipping database.
>
> **[2:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=172)** All at the same time from the same application.
>
> **[2:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=175)** This allows you to make connections across separate systems and pull information together in powerful new ways.
>
> **[3:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=182)** Often a vendor supplied client comes with your RDBMS when you install it, so it's easy to get started right out of the box.
>
> **[3:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=190)** But you can choose to install and use a third party client if you prefer a different feature set, or are accustomed to a different workflow.
>
> **[3:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=198)** Feel free to try alternative clients as you see fit.
>
> **[3:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=203)** Just like with the different RDBMS options that are on the market, there's a wide variety of database client applications to choose from.
>
> **[3:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=210)** Wikipedia has a nice comparison chart that covers some of the more popular products.
>
> **[3:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=215)** Along the top of this chart you can see the different operating system that each client can be run on, for instance runs on Windows, Mac OS or Linux.
>
> **[3:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=224)** You can also see the different RDBMSs that they're compatible with.
>
> **[3:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=227)** So here we have Oracle, MySQL, PostgreSQL and SQL Server.
>
> **[3:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=232)** For instance if I scroll down here on this chart I can find the line for Microsoft SQL Server Management Studio.
>
> **[3:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=238)** This is the most popular interface client for a SQL Server.
>
> **[4:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=242)** But it can only be run on Windows, and only works with SQL Server.
>
> **[4:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=246)** Another application called DBeaver, is a popular application that could be run on any operating system and works with a wide variety of different RDBMSs.
>
> **[4:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=257)** So the client and the server are the two components that we need to get a fully functioning relational database management system.
>
> **[4:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=265)** Later on in this course in chapter three, we're going to work with a graphical client called Azure Data Studio, which is a relatively new product from Microsoft.
>
> **[4:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=273)** Azure Data Studio provides a modern set of tools that currently supports both SQL Server and PostgreSQL relational databases.
>
> **[4:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=283)** And it can be run on Windows, Mac OS and Linux.
>
> **[4:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/the-client-server-model?u=76281980&t=286)** So I think it's a good choice for a wide variety of learners taking their first steps in the foundations of databases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (12), management (6), application (5), [[Microsoft SQL Server|Sql server]] (4), data (3)
> **Env Vars:** sql (5), rdbms (2), cli (1)
> **Analogies:** for instance (2), such as (1), just like (1)
> **CLI Commands:** make (1), mysql (1), find (1)
> **Definitions:** is a  (2), means that (1)
> **Tools:** command line (1), terminal (1)
> **Prerequisites:** install (2)
> **UI Navigation:** scroll down (1)


### 2. Set Up a Database Playground

[↑ Back to Table of Contents](#table-of-contents)

#### Purpose of the playground
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=0)** - [Illustrator] One of the biggest hurdles to learning about databases is simply having the proper software installed and configured so that you can experiment and poke around.
>
> **[0:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=11)** So in this chapter, I'm going to walk you through the process of creating your very own database playground.
>
> **[0:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=18)** This playground will solve two different problems.
>
> **[0:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=21)** First, database servers typically expect to be run on dedicated hardware.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=26)** This is usually a standalone computer, or in a data center, or in a virtual machine in the cloud.
>
> **[0:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=33)** But it isn't realistic of me to expect that you just have a spare computer lying around.
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=37)** And paying for cloud computer and storage resources can get expensive.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=41)** So we'll need a way to install the software on your regular desktop or laptop computer.
>
> **[0:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=48)** This is fine to do, but that introduces problem number two.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=52)** The second problem, is that database servers expect to have full control over their hardware.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=58)** When you install the RDBMS on your own personal computer, the installation process reaches deep into your operating system.
>
> **[1:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=66)** And makes changes to the way that your computer functions.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=69)** The installation can open up new communication ports.
>
> **[1:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=72)** Add User Accounts, and adjust performance settings that may conflict with the other software that you continue to need every day.
>
> **[1:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=80)** Worse, these changes are sometimes hard to roll back should you decide to uninstall the database server at a later point.
>
> **[1:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=88)** And if you want to experiment with two different RDBMS platforms, installing both on the same machine can introduce a situation where they're competing for the same limited pool of your computer's resources.
>
> **[1:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=101)** The solution to both of these problems is to install the RDBMS software inside of an isolated container.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=109)** Containers create a place where the RDBMS required components can do whatever they need to do without giving them the ability to make changes to your main system.
>
> **[2:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=120)** There are several benefits to running your database server inside of a container.
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=125)** First, containers can be quickly created, copied and discarded.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=130)** They're designed to be ephemeral.
>
> **[2:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=133)** This means that containers create a safe place to experiment with new tools and techniques, without the fear of messing something up.
>
> **[2:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=141)** If you happen to break something or start getting strange errors, there's no consequences to simply throwing the container away and starting again with a fresh one.
>
> **[2:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=150)** For many people, this can give a new sense of freedom to dive right in and explore systems that they don't fully understand yet.
>
> **[2:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=159)** The other benefit of containers.
>
> **[2:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=160)** Is that they provide very consistent and predictable working environments across all operating systems.
>
> **[2:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=167)** If you run an RDBMS container on any Windows computer, you'll get exactly the same experience if you move that container to a Mac or Linux computer.
>
> **[2:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=176)** With everything running inside of a container, you can bring whatever computer that you have available to this course and be able to follow along.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=185)** I'm being very deliberate in calling this a database playground.
>
> **[3:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=188)** Because I really do think that having the freedom to explore and play with these technologies is a critical part in the learning process.
>
> **[3:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=196)** Containers virtually erase much of the complexity in setting things up and getting the pieces to work together.
>
> **[3:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=202)** However, I do not want to give the impression that this system that we're about to build together is somehow a toy or an approximation of a real world environment.
>
> **[3:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=212)** Yes, containers do encourage serious play.
>
> **[3:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/purpose-of-the-playground?u=76281980&t=215)** But these benefits that make containers attractive for beginners are exactly the same reasons that many database professionals also use the same containerized workflows in their demanding production environments.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (7), [[Hardware]] (2), cloud (2), [[Databases]] (1), data (1)
> **Env Vars:** rdbms (5)
> **Prerequisites:** install (3)
> **CLI Commands:** make (2)
> **Definitions:** means that (1), is a  (1)
> **Speakers:** - [illustrator] (1)

#### Install Docker
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=0)** - [Instructor] We're going to install a couple of different relational database management systems inside of containers, and the application that's used to create and manage your containers is called Docker.
>
> **[0:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=11)** To get this set up, we're going to start at [docker.com](https://docker.com).
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=14)** Along the top of the page are links to information about the various products, the documentation.
>
> **[0:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=20)** and information on pricing if you want to use Docker in a larger commercial environment.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=25)** But as long as you're a small business, individual developer, or are using Docker for educational or open source projects, it's free to use, which is great.
>
> **[0:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=35)** Below we have options for downloading the Docker desktop installer.
>
> **[0:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=39)** It should auto detect your current operating system, but there are other links if you want to install Docker on a different OS.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=46)** I'm going to be working on a Windows PC so I'll click on this button in just a moment.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=51)** But first I want to take a look at the options for Linux.
>
> **[0:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=54)** It's a little bit different than the others.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=56)** There are different builds of Docker for the different distributions of Linux.
>
> **[1:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=60)** So here we have links for Ubuntu, Debian, and Fedora Linux.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=64)** Each of these links will give you the installation procedure and specific commands needed for that particular distribution.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=73)** So that's the Linux process.
>
> **[1:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=75)** I'm going to close this tab and return back to the main page.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=78)** Then I'll click on the button here to download Docker desktop installer for Windows.
>
> **[1:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=83)** That'll place it in my downloads folder.
>
> **[1:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=89)** Once it's completed it's download, I'll close web browser and we can start up the installation procedure.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=94)** I'll go into my downloads folder and I'll double click on the installer.
>
> **[1:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=101)** I'll allow the installer to make changes to my system.
>
> **[1:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=106)** Then I'm given a couple of options.
>
> **[1:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=108)** If you have this option to use WSL2 instead of Hyper-V, make sure that it stays checked.
>
> **[1:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=115)** WSL, or Windows subsystem for Linux, is a newer and much better way to work with virtualized environments than the old Hyper-V technology.
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=125)** I'll leave both of these options checked and press okay.
>
> **[2:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=129)** That'll unpack all the files and set everything up.
>
> **[2:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=132)** When that's complete, I'm prompted to close and restart my computer, so go ahead and do that now.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=138)** Okay, my computer just rebooted and it automatically started up the Docker desktop application.
>
> **[2:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=144)** Here, we need to accept the service agreement which just reiterates the licensing costs for larger organizations.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=151)** I'll press the accept button to move on.
>
> **[2:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=154)** Then I see this message, which you may or may not get.
>
> **[2:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=159)** It tells me that I need to update the Windows subsystem for Linux on my PC.
>
> **[2:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=164)** There's a link to more information if you're curious about what this means exactly, but conveniently it also gives us the exact command that we need to run, WSL dash dash update.
>
> **[2:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=174)** Okay, I'm going to press the click button here and close out of Docker desktop.
>
> **[2:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=178)** Then I'll come down and I'll start up a command prompt, and I'll type in that command.
>
> **[3:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=184)** WSL space dash dash update.
>
> **[3:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=188)** Press update and Windows will update those components.
>
> **[3:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=192)** Once that's done, I'll close out of the command prompt and we'll start up Docker desktop again.
>
> **[3:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=198)** After a moment of processing, Docker desktop starts up without any further complaints.
>
> **[3:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=203)** Docker desktop is a graphical front end to the Docker engine, which is also started automatically.
>
> **[3:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=208)** You'd see a green status bar on the bottom left hand corner, and if I take a look at my Windows system tray, you'll also see an indication here that Docker desktop is running.
>
> **[3:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=219)** In Docker desktop on the left hand side, you have some menus to take a look at your existing containers, as well as any images that you've already downloaded.
>
> **[3:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=229)** I'll share more on those in the next video.
>
> **[3:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=232)** Now, while you can create new containers or download images here, I find that it's easier and faster to do so from the command line.
>
> **[4:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=240)** So let's close the Docker desktop application.
>
> **[4:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=243)** That should leave the engine running in the background, and if I take a look at my system tray, you'll see that the engine is still running.
>
> **[4:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=249)** Alright, we'll go back into the command prompt now.
>
> **[4:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=252)** On MAC OS or Linux, you're going to use the terminal application for this.
>
> **[4:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=257)** We'll start with the command docker version.
>
> **[4:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=262)** This gives us some information about the various components.
>
> **[4:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=265)** We'll see that I'm working with Docker version 24.0.2.
>
> **[4:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=271)** I'll type CLS to clear out my screen and we'll try another command.
>
> **[4:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=274)** This time I'll just say Docker all by itself.
>
> **[4:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=278)** This displays all of the different options and commands that are available, and you can see it's a pretty long list.
>
> **[4:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=283)** I can scroll back in the buffer all the way back up to the top and we'll see a list of all of the different commands.
>
> **[4:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=288)** For instance, we could say Docker run, or Docker execute.
>
> **[4:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=293)** Once again, I'll type in CLS to clear the screen and that brings me back up to the top.
>
> **[4:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=297)** To find out more information about each command, you could type Docker, the name of the command, for instance pull, and then dash dash help.
>
> **[5:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=306)** This returned specific help about that exact command.
>
> **[5:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=309)** So here's how to use the Docker pull command.
>
> **[5:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=312)** So at this point we've got Docker installed and running and we can send commands to the Docker engine and we're getting back the expected feedback.
>
> **[5:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-docker-22836043?u=76281980&t=320)** So now we can use it to create our own personal database containers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (7), [[Windows]] (6), application (4), prompt (3), database (2)
> **CLI Commands:** docker (26), make (2), find (2)
> **Tools:** docker desktop (10), command prompt (3), command line (1), terminal (1)
> **Env Vars:** wsl (3), cls (2), wsl2 (1), mac (1)
> **UI Navigation:** click on (3)
> **Definitions:** is a  (2), is called (1)
> **Prerequisites:** install (2), set up (1)
> **Versions:** version 24 (1), 0.2 (1)

#### Database server containers
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=0)** - [Narrator] The companies that create different relational database management systems often make official Docker images available for you to use.
>
> **[0:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=8)** And from these, we'll build our own personal containers.
>
> **[0:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=11)** You can think of an image as the blueprint or the model.
>
> **[0:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=15)** An image is a software package that describes a default installation of the software and all of the components that it needs to run.
>
> **[0:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=23)** From this blueprint or image, you'll build a container.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=27)** The container will act like a fully encapsulated networked computer that's running the software described in the image.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=34)** The neat thing about this arrangement is that you only need one copy of the image or one blueprint.
>
> **[0:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=40)** And from that, you can build multiple containers that are all identical copies.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=45)** Each one acts as its own virtual computer.
>
> **[0:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=48)** You can have multiple containers running at the same time to create a virtual network, and you can delete containers and rebuild them whenever you want.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=58)** The process starts with getting the image.
>
> **[1:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=60)** You can find them by searching the Docker Hub.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=63)** Right now, I'm viewing the Docker Hub page for Microsoft's SQL Server.
>
> **[1:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=67)** This page describes the different images that are available for the SQL Server relational database management system, and it gives you some instructions on how to download and use them.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=77)** Also on the Docker Hub is a similar page for PostgreSQL relational databases.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=82)** Again, we have some information about the commands needed to download and use them on this page.
>
> **[1:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=88)** So let's use all of this information to create a couple of containers for our own personal use.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=94)** In the chapter two folder of the course exercise files is a file called Docker_Containers.txt.
>
> **[1:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=101)** It has the commands that we need to run in a command prompt or a PowerShell window if you're on Windows or in your terminal application if you're on a Mac or Linux computer.
>
> **[1:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=111)** So let's read through this document to see what it contains.
>
> **[1:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=115)** There's two different sections.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=116)** One here at the top for setting up a SQL Server instance.
>
> **[1:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=119)** And down below, we have the commands for setting up a PostgreSQL instance.
>
> **[2:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=123)** I have the links to the respective Docker Hub pages if you want those for easy reference.
>
> **[2:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=128)** Then we have the specific Docker commands we need to run to set up the container.
>
> **[2:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=133)** For SQL Server, there's two different commands depending on if you're on a PC or a Mac computer.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=138)** And really the only difference is here we have double quotation marks that are used if you're on Windows or a single quotation mark if you're on macOS and Linux.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=147)** Other than that small change, these two commands are identical.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=151)** So let's read through the first one to see what it is.
>
> **[2:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=154)** We'll start with docker run and then we'll name our new container.
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=158)** I'll name mine sqlserver2019.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=162)** Then we need to accept the end user licensing agreement and you can read that licensing agreement back at the hub page if you'd like.
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=169)** Next up, we'll set up the password for the system administrator account.
>
> **[2:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=174)** I'm using the password Adam123456.
>
> **[2:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=179)** This needs to be a strong password with capital letters, lowercase letters and numbers and symbols, and it also needs to be more than eight characters in length.
>
> **[3:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=188)** Now you can change this password to something else if you'd prefer.
>
> **[3:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=192)** Just make sure that it matches those strong password requirements.
>
> **[3:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=195)** If your password isn't strong enough, then the SQL Server container actually won't even start.
>
> **[3:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=201)** After setting up the password, we're going to establish the communication ports that the container will use.
>
> **[3:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=207)** SQL Server defaults to port 1433.
>
> **[3:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=210)** So this is the port number that's going to be used inside of the container.
>
> **[3:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=214)** The port that we use to communicate with the container can be something slightly different and in this case I'm going to use port 1401.
>
> **[3:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=221)** I like using a slightly different port outside of the container from the port that's being used inside of the container so that it gives me some flexibility in setting up multiple different containers.
>
> **[3:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=233)** So for instance, the first one I might use port 1401, the second one I would say 1402, and then 1403 for my third container.
>
> **[4:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=242)** I'll just switch this back to 1401.
>
> **[4:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=245)** After setting up the communication ports, we need to specify the image that we're going to use for the container, and that's the path that came from the Docker Hub.
>
> **[4:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=253)** For SQL Server, that's mcr.[microsoft.com/mssql/server](https://microsoft.com/mssql/server).
>
> **[4:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=259)** Now I'm going to use a specific version of SQL Server that's 2019-latest.
>
> **[4:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=265)** SQL Server 2019 is not the most recent version of SQL Server.
>
> **[4:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=270)** At the time that I'm recording this, SQL Server 2022 is available, but the 2019 version is stable and it's had most of the bugs worked out of it.
>
> **[4:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=280)** So in the interest of providing a consistent experience for you so that what you see on your system matches what I'm doing, I want to make sure that we're all using the same version.
>
> **[4:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=290)** And this will just help us avoid any incompatibilities or inconsistencies that may crop up when using software that's on the cutting edge of the release cycle.
>
> **[5:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=300)** So this is the complete Docker command that'll set up our SQL Server container.
>
> **[5:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=304)** We have a similar command for setting up PostgreSQL.
>
> **[5:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=306)** Let me just scroll down here and we can take a look at that.
>
> **[5:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=308)** It's docker run.
>
> **[5:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=310)** We'll name the container postgresql.
>
> **[5:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=312)** We'll set up the ports.
>
> **[5:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=314)** Postgres by default uses port 5432, so that's the port inside of the container.
>
> **[5:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=319)** And outside of the container, we'll communicate on port 5401.
>
> **[5:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=324)** We also need to set up a password this time for the Postgres user account.
>
> **[5:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=328)** And again, I'll use the same password, Adam123456.
>
> **[5:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=333)** And finally, we'll need to use an image.
>
> **[5:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=334)** It's simply postgres is the path and I'll specify the version of 14.8.
>
> **[5:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=341)** So those are the commands that we need to run.
>
> **[5:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=343)** Let's go ahead and set everything up.
>
> **[5:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=344)** I'm going to scroll up here and I'll grab the command for the Windows PC to set up Microsoft SQL Server and I'll just copy that to my clipboard.
>
> **[5:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=352)** Then I'll start up a command prompt.
>
> **[5:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=353)** I'll just search for cmd to start up the command prompt application.
>
> **[5:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=357)** Again, if you're on a Mac, you'll use the terminal application.
>
> **[6:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=361)** I'll paste in that command there and press Enter.
>
> **[6:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=365)** Now it tells me that it's unable to find the image which just means that it's not downloaded to my computer yet, so it needs to download it from the servers in order to install everything.
>
> **[6:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=374)** Once that's done, I'll have a container running SQL Server up and running inside of Docker.
>
> **[6:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=379)** All right, that's it for that.
>
> **[6:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=380)** Let's go ahead and go back to that text file and I'll copy the command to set up my Postgres container.
>
> **[6:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=386)** I'll just copy that to my clipboard.
>
> **[6:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=388)** I'll return to the command prompt.
>
> **[6:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=390)** I'll paste that one in and press Enter.
>
> **[6:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=393)** Again, it can't find the Postgres image locally on my machine, so it needs to download it from the hub.
>
> **[6:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=398)** Okay, that's complete.
>
> **[6:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=399)** And now I have a Postgres database all set up.
>
> **[6:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=402)** I can close the command prompt tool and I'll also close out of this text file and I don't need to save any changes to it.
>
> **[6:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=408)** Now we can start up the Docker desktop application.
>
> **[6:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=412)** This will allow us to manage the new containers that we just created.
>
> **[6:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=415)** So here's the SQL Server container and there's the Postgres container.
>
> **[6:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=419)** Over on the right, we have action options for stopping the container and restarting it.
>
> **[7:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=423)** And we can also delete the container if we want to when we no longer want the databases that they contain.
>
> **[7:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=430)** You can also perform these same management tasks on the terminal or the command line and I've made notes about the specific commands in the Docker_Containers.txt file if you want to see how those would work.
>
> **[7:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=442)** So now I have two different database servers running inside of their isolated containers.
>
> **[7:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=447)** As we learned earlier, the database server is just one part of the complete relational database management system.
>
> **[7:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/database-server-containers-22830995?u=76281980&t=454)** The next step is to connect using a client so that we can start telling the servers what we want them to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (14), [[PostgreSQL|Postgres]] (7), database (6), prompt (5), management (4)
> **CLI Commands:** docker (12), make (3), find (3)
> **Env Vars:** sql (15)
> **Tools:** command prompt (5), terminal (3), powershell (1), docker desktop (1), command line (1)
> **Prerequisites:** set up (8), install (1)
> **Ports:** port 1401 (2), port 1433 (1), port 5432 (1), port 5401 (1)
> **Definitions:** is a  (3), means that (1)
> **File Paths:** docker_containers.txt (2)

#### Local installation alternatives to Docker
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=0)** - [Instructor] You can probably already tell that I'm a big fan of working with Docker containers for setting up and experimenting with a wide variety of database platforms.
>
> **[0:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=9)** It can streamline the setup and it makes it easy to create repeatable workflows.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=14)** Best of all though, if I make a mistake and misconfigure something, I don't need to spend any time troubleshooting or trying to undo a complicated configuration.
>
> **[0:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=23)** I'll just throw away the offending container and create it again fresh.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=28)** That's why I refer to it as a database playground.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=31)** Now, with that said, I know that a containerized workflow is not for everyone.
>
> **[0:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=35)** Docker does have some hardware and operating system requirements that not everyone's computer will satisfy or maybe you just feel more comfortable working with traditionally installed software instead.
>
> **[0:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=48)** If that's the case, then here's a quick overview of some alternatives for working with SQL Server and PostgreSQL on your local computer.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=56)** We'll start with SQL Server at this URL.
>
> **[0:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=59)** Click on the link to try now.
>
> **[1:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=61)** This gives you a couple of other options for running the SQL Server database engine.
>
> **[1:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=66)** The first option here, SQL Server on Azure, will allow you to install the database engine on Microsoft's cloud hosted servers.
>
> **[1:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=75)** You would then log in and do everything remotely using your web browser and the actual computing resources are all handled by Microsoft.
>
> **[1:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=83)** This is a perfect solution if your primary computing device isn't capable of running server grade software but it does require a paid Azure subscription.
>
> **[1:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=93)** The other option is to download SQL Server and install it on your local computer.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=97)** And here are two different editions that are provided free of charge to do exactly that.
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=102)** The Developer edition is full featured and free to use for any educational or development work.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=109)** If you want to use your database server for commercial applications such as in support of a small business, you can get the Express Edition instead.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=118)** This one is also free to use and it's very capable but it doesn't come with all of the advanced bells and whistles that the paid commercial and enterprise editions have.
>
> **[2:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=128)** So those are your options for working with SQL Server either in the cloud or installed locally.
>
> **[2:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=134)** I'm not going to go through the install steps here.
>
> **[2:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=136)** If this is a path that you'd like to investigate, take a look at my SQL Server 2022 Essential Training course where I have videos that walk through the full installation procedure.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=147)** Likewise, if you want to install Postgres locally rather than work with it in a container, you have that option as well.
>
> **[2:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=154)** Head over to [postgresql.org](https://postgresql.org), click on the download button, then choose your platform.
>
> **[2:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=164)** Next, click on the link to download the installer here at the top of the page.
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=169)** Postgres installation files are hosted by a separate company called Enterprise DB and here, you can choose the version and platform that you want.
>
> **[2:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=179)** For a full video walkthrough of that process, look at my PostgreSQL Essential Training course.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=185)** So while I strongly encourage you to leverage the flexibility that Docker containers bring to your database education journey, I fully understand that it's not a platform for everyone.
>
> **[3:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/local-installation-alternatives-to-docker?u=76281980&t=196)** Installing the server software locally is a well-established method that's been used for decades by database professionals at all levels and it still stands as a viable alternative to a containerized workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (7), [[Microsoft SQL Server|Sql server]] (7), [[PostgreSQL]] (3), [[Microsoft Azure|Azure]] (2), [[Microsoft]] (2)
> **Env Vars:** sql (7), url (1)
> **Prerequisites:** install (4), setup (1)
> **CLI Commands:** docker (3), make (1)
> **UI Navigation:** click on (3)
> **Definitions:** is a  (3)
> **URLs:** [postgresql.org](https://postgresql.org) (1)
> **Exercise Files:** download the (1)

#### RDBMS command-line interfaces
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=0)** - [Instructor] We just created two different database servers with the help of Docker containers.
>
> **[0:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=5)** Both of these have their own native command line interface tools for working with the database server.
>
> **[0:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=10)** These will both use the same terminal window or the command line application that you're currently using to work with Docker.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=17)** Now, the command line interface is not the easiest way to get started working with a database server, but it is a powerful tool that comes with your server software.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=27)** I want to run through a quick example of how to use them, before we get into working in a more traditional graphical interface.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=34)** If I type in Docker ps, it'll show me that I currently have two servers running, one called PostgreSQL and the other one called SQL Server 2019.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=43)** I can tell that they're running by verifying the status here and they're both listed as up.
>
> **[0:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=49)** So let's log into each one of these, one at a time and take a quick look around.
>
> **[0:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=53)** I'm going to start with SQL Server container.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=56)** Now I've written out all of the commands that I'm going to run and included them in the exercise files in a file called Docker_CLI_Tools.txt.
>
> **[1:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=65)** I actually have it hidden here on my screen right behind this window.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=68)** I'm going to rearrange things a little bit, so that I can see both the text file as well as my PowerShell window at the same time.
>
> **[1:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=74)** This will help you follow along with the commands that I'm about to execute.
>
> **[1:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=79)** So the first thing I need to do is log into the SQL Server 2019 Docker container.
>
> **[1:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=84)** We do that with the command, Docker EXCC followed by a space and a hyphen it to start up an interactive text environment.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=94)** Then we have the name of the server that we want to connect to or our Docker container and that is SQL Server 2019.
>
> **[1:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=101)** And then finally we want to use the bash shell.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=104)** Each of these containers contains a lightweight version of Linux, that's providing the operating system for the database server inside of the container.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=112)** In order to work with it we just need to specify which shell that we want to use inside of that container.
>
> **[1:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=117)** In this case we going to use the bash shop.
>
> **[1:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=119)** So press Enter and that moves me into my container and you'll notice that my command prompt has changed.
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=125)** I'm now inside of the container.
>
> **[2:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=127)** You can think of it as moving inside of a little isolated bubble.
>
> **[2:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=131)** Any commands that I send now, will be executed inside of the container and not on my personal computer.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=138)** To view what version of Linux is running in the container, we can say cat forward slash etc forward slash OS dash release.
>
> **[2:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=148)** When I press Enter, it tells me that the SQL Server container is running a bunch to version 18.04.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=155)** So now that we're inside of the container, we can log into the server that's also running in the container.
>
> **[2:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=160)** SQL Server it uses a command line tool called SQL CMD or SQL command.
>
> **[2:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=167)** It's in the folder, opt slash MSSQL dash tools slash bin.
>
> **[2:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=172)** So let's go ahead and go into that folder.
>
> **[2:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=175)** Then I'll start the tool SQL CMD followed by a couple of options.
>
> **[3:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=181)** I need a dash capital letter U to specify the user account that I want to log in with.
>
> **[3:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=186)** This is going to be the system administrator or the SA account.
>
> **[3:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=190)** Then I need a dash capital P to type in the password.
>
> **[3:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=195)** This is the same password that we used when we created the Docker container in the last movie.
>
> **[3:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=200)** For me, that was Adam one, two, three, four, five, six.
>
> **[3:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=203)** You might have used a different password.
>
> **[3:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=206)** When I press Enter, you'll notice that my command prompt changes once again.
>
> **[3:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=210)** Now it indicates that we're logged into the SQL Server instance and then it's a waiting the first line of our command.
>
> **[3:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=216)** I can view the version information of SQL Server that we're working with by running the command select @@ version.
>
> **[3:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=223)** That takes me down to line number two and I can say go, when I press Enter again, it returns the version information of SQL Server.
>
> **[3:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=230)** So it tells me I'm working with SQL Server 2019 it's version number 15.0 0.4063.
>
> **[3:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=236)** And it's the developer edition running on Linux.
>
> **[4:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=240)** I can list out the databases that are currently on the server with select name from sys dot databases.
>
> **[4:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=249)** Opera center that moves me down to line number two and I'll type in go, and here is a list of the databases that currently exist on my SQL Server instance.
>
> **[4:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=257)** We have the master database, temp DB model, and MSDB.
>
> **[4:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=262)** Each database server can have multiple databases on it.
>
> **[4:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=265)** And these are the SQL Server databases that are default on every system.
>
> **[4:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=270)** We can create a new database on this server with create database, and then the name of the database.
>
> **[4:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=276)** I'll just do my test DB, opera center that moves me down to line number two, and I'll issue the command, go press Enter again, and it creates my database.
>
> **[4:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=285)** You'll notice that the command prompt returned back to line number one.
>
> **[4:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=288)** Once again we can select name from sys dot databases and here I'll see I have master temp DB model, MSTB and my new test database.
>
> **[5:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=301)** When you're done working in SQL Server, you can issue the command exit, that'll take you out of the SQL Server instance and return you back into the Ubuntu Linux container.
>
> **[5:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=310)** In order to get out of this, we'll type exit again and that returns me back into my Windows system.
>
> **[5:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=316)** You'll notice that my command prompt is returned back to my C drive and I'll issue the command clear here, just to clear out the screen and move it back up to the top.
>
> **[5:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=324)** And that's how you can work with the SQL Server command line tool.
>
> **[5:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=327)** Let's do the same thing real quick with the Postgres server.
>
> **[5:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=330)** Scroll down here on my text file, and we'll take a look at these lines.
>
> **[5:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=334)** So the first thing we need to do is log into the Postgres SQL Docker container.
>
> **[5:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=339)** We'll do that with Docker EXEC dash it, the name of the container PostgreSQL, and once again we're going to use the bash shell.
>
> **[5:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=348)** That changes my command prompt, so I'm now inside of the container, we can check out which version of Linux this container is running.
>
> **[5:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=357)** We do that with cat forward slash etc forward slash OS dash release.
>
> **[6:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=362)** This container is running a version of Debbie and Linux.
>
> **[6:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=366)** Now we can log into the Postgres server using the PSQL command line tool.
>
> **[6:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=372)** We don't need to go into a special folder for this one, so I just type in PSQL a dash capital letter U to define the user account I want to use, and that is Postgres.
>
> **[6:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=382)** This is the default user in almost all Postgres databases.
>
> **[6:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=386)** I'll do that and it moves me into the Postgres server.
>
> **[6:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=389)** Now I could use some help information by typing in the word "help."
>
> **[6:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=393)** Here are some simple commands that I can run using the PSQL tool.
>
> **[6:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=397)** If I want to list out the databases on the server, I'll type in a backslash and a lowercase l, that shows me that there's three databases currently on the server, one called Postgres and two template databases.
>
> **[6:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=410)** If I want to add my own databases, we'll use these same create database command.
>
> **[6:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=415)** I'll say, create database, my test DB.
>
> **[6:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=418)** I'll finish the line with a semi-colon and press Enter, Postgres tells me that the database was created.
>
> **[7:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=424)** And if I list everything out again with a backslash l, I can now see that that's been added to the list of databases.
>
> **[7:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=431)** In order to quit the PSQL tool, you'll type in a backslash Q, that returns me back into my Linux container and to get out of this, I'll type in exit, and that returns me back into windows.
>
> **[7:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=443)** Once again, I'll clear the screen and that returns me back up to the very top.
>
> **[7:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=447)** So as you can see the command line tools for each RDBMS can perform similar functions.
>
> **[7:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=453)** Although the specific commands are slightly different between the two platforms.
>
> **[7:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=457)** Using them allowed us to perform some basic tasks, like looking around the server and creating a new database on each one.
>
> **[7:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=464)** But as I said earlier, the command line tools, aren't great for introducing people to a new database platform.
>
> **[7:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=470)** And I certainly don't expect you to memorize a bunch of commands right off the bat.
>
> **[7:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=476)** So we'll be moving into a graphical interface for our servers in the next chapter.
>
> **[8:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/rdbms-command-line-interfaces?u=76281980&t=480)** For now, just know that the native command line tools are just one option out of many that you have for your database client.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (17), [[Microsoft SQL Server|Sql server]] (15), [[Databases]] (12), [[PostgreSQL|Postgres]] (8), [[Linux]] (7)
> **Env Vars:** sql (19), psql (4), cmd (2), excc (1), mssql (1)
> **Tools:** command line (9), command prompt (5), bash (3), terminal (1), powershell (1)
> **CLI Commands:** docker (9), psql (4), cat (2)
> **Versions:** version 18 (1), 15.0 (1), 0.4063 (1)
> **Cross-References:** in the last (1), in the next (1)
> **Exercise Files:** exercise files (1), template (1)
> **Definitions:** is a  (2)

#### Challenge: Create a server container
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-server-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-server-container?u=76281980&t=0)** - [Instructor] Running a database server inside of a Docker container greatly simplifies the installation and configuration needed in order to get up and running.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-server-container?u=76281980&t=14)** Because of this i want to make this process the subject of your first challenge.
>
> **[0:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-server-container?u=76281980&t=19)** Your goal is to create a new RDBMS container for either SQL server or PostgreSQL.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-server-container?u=76281980&t=26)** There are a couple of things to keep in mind if you've been following along.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-server-container?u=76281980&t=30)** Docker containers must have unique names and your database server containers must listen on unique communication ports.
>
> **[0:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-server-container?u=76281980&t=39)** This way, you can have multiple containers running at the same time and you'll be able to distinguish them on your virtual network.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-server-container?u=76281980&t=46)** After you've created your new server, verify that it's running.
>
> **[0:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-server-container?u=76281980&t=50)** Stop the container and then remove it.
>
> **[0:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-server-container?u=76281980&t=53)** Feel free to practice these steps until you feel comfortable with the procedure.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-server-container?u=76281980&t=58)** Finally, keep in mind that the Docker image for your RDBMS only needs to be downloaded a single time.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-server-container?u=76281980&t=64)** So don't be surprised if the process completes much quicker the second time you do it, since the image will already be saved on your local computer.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-server-container?u=76281980&t=73)** I estimate this challenge should take about 10 minutes or less to complete.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-server-container?u=76281980&t=77)** In the next movie, i'll walk through my solution to the challenge.
>
> **[1:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-server-container?u=76281980&t=80)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (2), [[Microsoft SQL Server|Sql server]] (1), [[PostgreSQL]] (1), next (1)
> **CLI Commands:** docker (3), make (1)
> **Env Vars:** rdbms (2), sql (1)
> **Warnings:** keep in mind (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Create a server container
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=0)** (exciting techno music)
>
> **[0:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=5)** - [Instructor] I hope you were able to go through the challenge and create a new container for another database server on your system.
>
> **[0:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=11)** Let's walk through the solution together.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=14)** Now, the first thing that I want to do is just verify that Docker is running.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=17)** So I'll take a look down here at my little system tray, and I can see that the icon is there and it says.
>
> **[0:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=21)** "Docker desktop is running."
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=22)** So now I can open up my PowerShell window.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=26)** And again, if you're on a Mac or a Linux computer, you'd use the terminal application for this.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=31)** And I'm going to quickly take a look at my Docker containers just to see what's here currently.
>
> **[0:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=35)** So I'll run Docker PS, and that shows me the names here.
>
> **[0:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=39)** And again, this is just wrapping onto multiple lines.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=41)** Let's stretch this out here.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=42)** So I can see, I have two containers, PostgresSQL, and SQLServer2019.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=46)** And these are the names, so these need to be unique.
>
> **[0:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=49)** So any container that I make needs to have a different name from these.
>
> **[0:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=53)** The other thing I need to verify are the communication ports that we've set up on our existing servers.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=58)** And I can see here that PostgresSQL is using 5401, and SQL server is using 1401.
>
> **[1:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=66)** Now, inside of the container we're using different port numbers.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=69)** And these are the default ports for these different server platforms.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=73)** So SQLserver almost always uses 1433, and PostgresSQL almost always uses 5432.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=81)** So essentially what we're doing here is we're communicating with the container on these ports, and then Docker is sending any communication received on these ports and it's sending it into the container on these ports over here.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=94)** So that's how we're communicating into our Docker containers on these ports here.
>
> **[1:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=99)** So these are the numbers that I need to make sure are unique on my system.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=104)** So let's go ahead and create our Docker container.
>
> **[1:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=108)** And for this example, I asked for either a PostgresSQL or a SQLserver container, it doesn't really matter which one you do.
>
> **[1:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=114)** The syntax is almost identical in each case.
>
> **[1:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=117)** And I'm just going to run through the exercise and duplicate a SQLserver container.
>
> **[2:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=122)** So to create a new container from an image we say, "Docker run," and then we have a couple of options here.
>
> **[2:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=129)** So the first one is dash dash name, and this is the name of the container.
>
> **[2:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=134)** So again, this has to be unique from these other two names that we have here.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=138)** And let's call this one MySecondSQLServerContainer.
>
> **[2:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=143)** That's a long name, but that'll work for us there.
>
> **[2:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=146)** Then the next flag that we need is a dash E, and inside of quotation marks, and on Windows I have to use double quotation marks, and on Mac and Linux you would use single quotation marks here.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=157)** We need to accept the end user license agreement, or EULA.
>
> **[2:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=163)** And we say equals Y, and I believe this all has to be capital letters.
>
> **[2:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=167)** If you get failures here, try running this with capital letters, and I believe it does make a difference in some cases.
>
> **[2:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=174)** So that finishes the accept EULA argument there.
>
> **[2:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=177)** So now we have a dash E.
>
> **[2:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=178)** Next, we need to set the password for the assistant administrator account.
>
> **[3:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=183)** So I'll say SA underscore password is equal to, and then whatever strong password you like to use.
>
> **[3:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=190)** And I'm just going to set this to equals Adam123456 again.
>
> **[3:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=194)** Again, make sure that you use a strong password.
>
> **[3:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=196)** So that means capital letters, lowercase letters, numbers, and more than eight characters in length.
>
> **[3:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=203)** That's the password.
>
> **[3:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=204)** Next step, we need to set our ports.
>
> **[3:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=205)** So we do dash P, and again, the ports need to be different than the two that were used previously.
>
> **[3:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=212)** And it doesn't really matter, you can just pick any number kind of in the range of one to 10,000 or so.
>
> **[3:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=218)** So for SQLserver, I'm just going to pick 1420, and we'll send that into the container on 1433, which is SQLserver's default port.
>
> **[3:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=227)** So we'll send that in, and then finally we specify dash D and the path to the image that we're going to be pulling from, and for SQLserver that comes from mcr.[microsoft.com](https://microsoft.com), forward slash MSSQL, forward slash server, and then a tag after a colon to indicate which version of the server you want.
>
> **[4:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=249)** And we've been working with 2019 dash latest.
>
> **[4:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=253)** Incidentally, if you did want to work with a prior version of SQLserver, you could specify server colon, I believe 2016 or 2017 in here.
>
> **[4:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=261)** So you can pick different versions of a server if you need to use a specific version.
>
> **[4:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=266)** I'm just going to use the latest release of 2019, so whatever version that happens to be is the most current, we'll use that one.
>
> **[4:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=273)** So I'll press enter here, and that's it.
>
> **[4:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=275)** It doesn't have to download again because that image is already on my computer.
>
> **[4:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=278)** So this long string here is that unique identifier for the new container.
>
> **[4:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=284)** In fact, if I say Docker PS, again, you'll see that container.
>
> **[4:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=288)** So you'll see that the first bit of the container ID here starts with 9d26, and you can see that it's the same number here, 9d26 So this is our container ID.
>
> **[4:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=297)** Here's the image.
>
> **[4:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=298)** Now we've got two SQLserver containers from the same image, and I can see their names here and the communication ports there.
>
> **[5:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=305)** So I can verify that it's running.
>
> **[5:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=307)** If I wanted to stop the image, you say, "Docker stop," and the name of it, MySecondSQLServerContainer.
>
> **[5:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=317)** And I'll present enter there, and it just returns the name of the container that it stopped.
>
> **[5:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=321)** And if I say Docker PS again, you'll see that it's no longer listed on this list.
>
> **[5:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=327)** Incidentally, if you wanted to restart it, Docker start, and then MySecondSQLServerContainer, you could also make use of the container ID number that I put up here.
>
> **[5:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=337)** So I could say Docker start 9d262019, for instance, because that's the first few numbers here in the container ID.
>
> **[5:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=347)** And let's where I enter here and move my cursor here to the end, press enter.
>
> **[5:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=351)** It'll know which one I'm talking about, just because it's the unique identifier.
>
> **[5:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=355)** So if I say, "Docker PS," again, you'll see that that server is currently up again.
>
> **[5:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=359)** So that is how you would start and stop your servers.
>
> **[6:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=363)** And getting used to the process of starting and stopping your containers is going to be important since they won't automatically restart when you reboot your computer.
>
> **[6:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=373)** So whenever your computer starts up again, you're going to need to open up Docker and then use the command line here to restart your containers before you can use your database servers.
>
> **[6:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=384)** That's why I like going through the process of starting and stopping the servers a lot.
>
> **[6:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=389)** So the next thing I need to do is remove the container.
>
> **[6:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=393)** So I'll say "Docker RM," that's the command to remove a container, and then the name of the container again.
>
> **[6:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=398)** So MySecondSQLServerContainer, press enter, and, oh, can't remove a running container.
>
> **[6:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=406)** So I need to stop it again, Docker stop, my second server container, and then I'm going to go ahead and stop it.
>
> **[6:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=414)** And let me just clear this out here so we return to the top, and then we can say Docker RM and the name of the container, and it should be gone.
>
> **[7:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=425)** So DockerPS-A will show me all of my containers and I just have those two containers right now.
>
> **[7:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=432)** So that's how I would solve the challenge here.
>
> **[7:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-server-container?u=76281980&t=435)** And I'm going to say all of the texts of the commands that I just executed in a file called SolutionContainers.TXT in the chapter two folder of the exercise files and you can take a look at that if you need a refresher on how I did this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (4), database (2), [[Linux]] (2), [[Powershell]] (1), application (1)
> **CLI Commands:** docker (18), make (5), rm (2)
> **Env Vars:** eula (2), sql (1), mssql (1), txt (1)
> **Tools:** docker desktop (1), powershell (1), terminal (1), command line (1)
> **File Paths:** solutioncontainers.txt (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)


### 3. Graphical Interfaces

[↑ Back to Table of Contents](#table-of-contents)

#### Management interfaces
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=0)** - [Instructor] Our two database servers are currently running, isolated from one another and the rest of our computer inside of their respective docker containers.
>
> **[0:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=9)** And while we can use the command line tools that they ship with inside of the container, it's easier to use a graphical interface client, they can work with both the SQL server and PostgreSQL platforms simultaneously.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=22)** This way we can log into each server from outside of the container, exactly the same way that we would log into a traditional database server, that was running on standalone hardware on our organization's network.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=34)** The Docker containers allow us to simulate a much more complex multi-server environment.
>
> **[0:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=40)** The other nice thing about using a single graphical interface, is that we only have to learn one set of tools, to communicate with both servers and experiment with their features.
>
> **[0:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=50)** This will help us compare the two platforms together to see where they're the same and where they're different.
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=57)** Now when it comes to choosing a graphical client for your RDBMS, you have lots of different options.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=63)** Let's take a quick look at a few before installing one.
>
> **[1:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=66)** First up is SQL Server Management Studio.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=69)** This client is from Microsoft and it's specifically created for SQL server.
>
> **[1:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=74)** It only runs on windows though.
>
> **[1:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=75)** So there's no version for Mac iOS or Linux.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=78)** If I scroll down on this page, you can see a sample screenshot of what the interface looks like.
>
> **[1:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=84)** The layout of the application uses a tree structure on the left-hand side of the screen that allows you to navigate through the different components of your database server.
>
> **[1:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=93)** This includes the individual data tables, indexes, user accounts, functions, and all of the other pieces that make the database work.
>
> **[1:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=101)** On the right hand side of the interface, is a large workspace, where you can type in commands and view data tables.
>
> **[1:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=108)** The next client that I want to look at is called pgAdmin.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=112)** This one is built specifically for PostgreSQL servers.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=116)** If you look at this interface screenshot, you'll see that there's a tree structure on the left-hand side that allows you to navigate the servers contents, and then a large workspace on the right.
>
> **[2:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=126)** This screenshot of the interface is showing some statistics about server activity, which is something that's useful when you're evaluating the performance of your server.
>
> **[2:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=135)** Let's look at another client option, this time, DBeaver.
>
> **[2:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=139)** DBeaver is a popular universal client, that'll work with a number of different database platforms.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=145)** Now the screenshots of the interface on this page are pretty small, but you can kind of see it, that there is a tree structure on the left and then a large workspace on the right.
>
> **[2:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=154)** So I hope you're seeing a pattern here, almost all graphical front end clients for relational databases, follow the same general layout, a navigation tree on the left, a large workspace on the right.
>
> **[2:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=166)** Once you've gotten to know one client, you'll be able to try out another, without having to start at square one again, since the major components of the interface, will be familiar.
>
> **[2:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=175)** The differences between clients lie in how go about executing different tasks on the servers.
>
> **[3:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=183)** Some clients provide more wizards that guide you through the options and allow you to navigate with your mouse.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=189)** Others might be aimed at programmers and provide automatic code completion, syntax highlighting, and version control integration.
>
> **[3:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=197)** There's a lot of variety out there, and I encourage you to explore the options and find the application that's best fit for your style of working.
>
> **[3:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=205)** With all of that said, the graphical interface that I really like is called Azure Data Studio.
>
> **[3:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=212)** It's a cross platform interface that works with SQL server and Postgres database servers, so we can hook it right into our two Docker containers.
>
> **[3:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=221)** You can read through some of the documentation about the software at this URL.
>
> **[3:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/management-interfaces?u=76281980&t=225)** And in the next movie, we'll install it and start using Azure Data Studio to manage our RDBMS servers through a graphical interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (6), [[Microsoft SQL Server|Sql server]] (4), data (4), [[PostgreSQL]] (2), application (2)
> **Env Vars:** sql (4), rdbms (2), url (1)
> **CLI Commands:** docker (3), make (1), find (1)
> **Definitions:** is a  (3), is called (2)
> **Code Identifiers:** ios (1), pgadmin (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Tools:** command line (1)

#### Install Azure Data Studio
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=0)** - [Instructor] We're going to install Azure Data Studio as the graphical user interface client or Gooey, that'll help us manage our RDBMS servers.
>
> **[0:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=10)** Some of the features that I find attractive about this particular tool include it's SQL code editor.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=16)** A lot of database management involves writing out instructions like we saw when using the command line tool.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=22)** And the code editor that Azure data studio includes has some nice features that help me write and troubleshoot these commands.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=30)** The software also has an integrated terminal environment.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=34)** This allows me to easily work with my Docker containers, right within Azure data studio without having to switch to a separate program.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=43)** And there's a rich community of third-party developers that are building extensions for Azure Data Studio to bring additional functionality to the software so that I can customize it to better meet my needs.
>
> **[0:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=55)** Let's head back up to the top of the page and click on the download link, and I'll show you my last favorite feature.
>
> **[1:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=61)** Azure Data Studio is a cross-platform application which means that it can be run on Windows, macOS, and Linux.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=69)** I actually spend most of my time working on a Mac computer.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=73)** So having the same software available on both windows and macOS, makes it much easier to switch between the two operating systems.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=82)** For Linux users, there's a separate installer depending on whether you're running Debian, Redhat or the Ubuntu distributions.
>
> **[1:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=90)** If you scroll down on this page, you'll find some specific instructions for Linux users.
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=95)** We have the different commands depending on which distribution you're running.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=98)** And if you scroll down a little bit further, there's some notes about potential dependencies that you'll want to pay attention to.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=105)** For Mac users backup at the top of the page, there's a simple zip file that you can download.
>
> **[1:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=111)** When you unzip this file, it'll contain the application and all you need to do is move it into your applications folder.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=118)** For windows users like myself currently, you'll want to use the user installer file.
>
> **[2:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=123)** I'll click on that to download it to my computer.
>
> **[2:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=127)** When that's done, I can close out of my browser and we'll start the installation process.
>
> **[2:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=132)** First we'll go into my downloads folder and I'll find the file that we just downloaded and double click on it to start it up.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=138)** I'll accept the licensing agreement, I'll put it into the default storage location.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=145)** It's going to make a couple of program shortcuts and I'll just accept the defaults and press next.
>
> **[2:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=150)** I'll press next again.
>
> **[2:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=152)** We'll read through the summary to make sure that all of the choices that I've made are as I want and I'll press the install button.
>
> **[2:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=159)** When that's finished, we have the option to launch Azure Data Studio, so I press the finish button and the program will start up.
>
> **[2:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=165)** At the bottom right hand side of your screen, you should see this little pop-up window that says that preview features are required in order for extensions to be fully supported.
>
> **[2:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=173)** Do you want to enable the preview features?
>
> **[2:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=175)** Go ahead and press yes to this button.
>
> **[2:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=178)** That'll enable the preview features that we'll need later on in the course.
>
> **[3:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=182)** Now let's take a quick look around the interface.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=185)** On the left hand side of the screen we have something called the activity bar.
>
> **[3:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=188)** Here at the very top, we have a link to our connections.
>
> **[3:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=191)** This is where it will view a data tree view of all of our database connections and be able to peruse their contents.
>
> **[3:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=198)** We also have activities for search, notebooks, explore, source control and the extension marketplace.
>
> **[3:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=207)** Let's switch back up here again to the connections activity.
>
> **[3:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=211)** On the right hand side of the screen is a tabbed interface that'll allow us to put in different commands for our database servers.
>
> **[3:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=217)** Right now it's currently displaying a welcome screen.
>
> **[3:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=220)** You can close this tab out and we'll fill it with different commands as we move through the program.
>
> **[3:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=225)** Now I want to make a couple of quick changes to this interface before we move on.
>
> **[3:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=229)** First, I'm going to enlarge the icons on the screen by coming up here to the view menu, coming down to appearance, and then choosing zoom in.
>
> **[3:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=237)** I'm going to do this twice.
>
> **[4:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=240)** That'll make the icons a little bit bigger and easier to read.
>
> **[4:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=244)** Next in my connections panel, I want to remove these two sections at the bottom of the screen.
>
> **[4:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=248)** These are four different database server connections that we're not going to be using.
>
> **[4:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=252)** To do that, come up here to the ellipsis button at the top, point of views and we'll turn off Azure, as well as SQL Server, Big Data Clusters.
>
> **[4:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=261)** That'll simplify our interface a little bit.
>
> **[4:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=264)** Finally, I need to make a change to our font sizes that are being used.
>
> **[4:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=268)** For that, come up here to the file menu, then down to preferences and settings, then I'm going to search for settings that include the word font.
>
> **[4:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=278)** I'm going to change the editor font size up to 16 points.
>
> **[4:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=281)** Then I'll scroll down to the bottom and find the property for my results grid font size, and change that to 16 as well.
>
> **[4:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=288)** Then we can close out of the settings tab and that'll save into our program.
>
> **[4:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/install-azure-data-studio?u=76281980&t=292)** So now we're ready to connect to our database servers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (7), data (7), database (5), [[Windows]] (3), [[Linux]] (3)
> **CLI Commands:** make (5), find (4), docker (1), unzip (1)
> **UI Navigation:** click on (3), scroll down (3), switch to (1)
> **Env Vars:** sql (2), rdbms (1)
> **Definitions:** is a  (2), means that (1)
> **Code Identifiers:** macos (2)
> **Tools:** command line (1), terminal (1)
> **Prerequisites:** install (2)

#### Connect to a database server
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=0)** - [Instructor] In order to connect a client to a server, you need a couple of pieces of information.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=7)** First, you need to know where that server is and how to communicate with it.
>
> **[0:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=11)** You do that by getting the server's network IP address and its communication port.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=17)** For that, we can review our Docker containers.
>
> **[0:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=20)** Now, rather than going back into PowerShell though, we can use the integrated terminal window here in Azure Data Studio.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=27)** To open it, come up to the View menu, and come down to Terminal.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=31)** If you use this feature a lot, you'll notice it has a shortcut key.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=34)** In Windows it's Ctrl + ', and on macOS and Linux it's Ctrl + `.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=41)** I'll go ahead and click on that.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=42)** That'll start up my terminal at the bottom of the main portion of the screen.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=46)** Now I can run the standard Docker commands that we've previously used.
>
> **[0:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=49)** For instance, docker ps, that shows me my different containers and it's a little bit wide, so let me minimize the width here of the sidebar to fit everything on a single line.
>
> **[1:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=60)** So here is my Postgres container, and here is my SQL Server container.
>
> **[1:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=65)** The information that we're after is listed underneath the ports column.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=69)** This is showing the IP address of both of these containers as 0.0.0.0.
>
> **[1:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=76)** This is simply a shortcut way of saying that these containers are running on my local machine.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=81)** When we connect to our server containers, we're going to use the keyword localhost instead of an IP address for these.
>
> **[1:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=89)** If you wanted to connect to a server running on a different computer on your network, you would have to locate that computer's IP address.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=97)** The port numbers that we're going to use were established when we created our containers.
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=102)** For SQL Server, we're using port 1401.
>
> **[1:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=106)** For the Postgres container, it communicates on port 5401.
>
> **[1:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=111)** As a quick aside, you can also get this information with the Docker port command.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=116)** For instance, docker port, and the name of the container, sqlserver2019.
>
> **[2:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=121)** This returns just the IP address and the port number that we're after.
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=125)** I can also do the same thing with our Postgres container.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=130)** And once again, I get its IP address and its port.
>
> **[2:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=133)** You'll want to write these numbers down or commit them to memory, as well need them in a few minutes.
>
> **[2:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=139)** The second thing that you need is a user account.
>
> **[2:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=142)** All database servers start out with a single user account that has full administrative control over the entire server.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=151)** These user accounts essentially have the master keys, and can go anywhere, change any setting, or perform any task on the server.
>
> **[2:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=160)** The username that SQL server uses is SA, which stands for system administrator.
>
> **[2:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=166)** The PostgreSQL server's username is simply postgres.
>
> **[2:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=171)** Later on, you can create additional user accounts with more limited permissions so that people can log in to view data, for example, but they don't have the ability to delete the database.
>
> **[3:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=183)** For now, we're going to use the main administrator accounts, and we set up the passwords for those accounts when we created the Docker containers.
>
> **[3:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=191)** I hope you remember what you used because we're going to need them to log in.
>
> **[3:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=196)** So now that I have the IP address, port number, username, and password, we're ready to log into our servers.
>
> **[3:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=204)** Let's close the terminal window by clicking on the X over here on the right-hand side of the screen, then I'm going to make my sidebar wider again, and then press the big blue Add Connection button.
>
> **[3:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=215)** That opens up this panel over here on the right.
>
> **[3:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=218)** The first server we're going to connect to is the Microsoft SQL Server, so make sure you've selected that from the dropdown list.
>
> **[3:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=224)** For the server, this is where you would type in the IP address.
>
> **[3:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=227)** Now, since our containers are on our local machine, I'm going to use the keyword localhost.
>
> **[3:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=233)** For the authentication type, we're going to choose SQL login.
>
> **[3:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=237)** The username for SQL Server is SA.
>
> **[4:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=242)** The password is the one that we established when we created the Docker container.
>
> **[4:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=246)** I used Adam with a capital A, 1-2-3-4-5-6.
>
> **[4:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=250)** Check this box here to remember the password, and then we'll give this connection a name.
>
> **[4:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=255)** This will make it so that it's easy to recognize when it appears over in our server connection list on the left-hand side of the screen.
>
> **[4:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=262)** I'll call this SQL Server 2019.
>
> **[4:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=265)** Next, we'll click over to the Advanced section.
>
> **[4:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=268)** In here, I'm going to scroll down until I find the property for the port.
>
> **[4:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=273)** I'll type in 1401 and press enter to return back to the main screen, then I can press the connect button.
>
> **[4:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=280)** If everything worked, it should connect into our Docker container and show me the contents of the SQL Server database server.
>
> **[4:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=287)** I can expand the different folders here, for instance, to view the different databases on the server, and we can see the database that we created using the command line interface earlier on in the course.
>
> **[4:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=298)** So now let's connect to our Postgres server as well.
>
> **[5:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=301)** In order to do that, we actually need to enable an extension here inside of Azure Data Studio.
>
> **[5:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=307)** To do that, come down to the gear icon on the left-hand menu, then click Extensions.
>
> **[5:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=313)** In the Extension Marketplace, we're going to do a search for PostgreSQL.
>
> **[5:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=318)** That'll show me the PostgreSQL extension that's published by Microsoft, and go ahead and click on the install button.
>
> **[5:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=325)** Once it's installed, we can switch back over to our server activity by clicking on the icon here at the top of the screen, and then click on this icon with the server and little plus to add in another new connection.
>
> **[5:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=337)** This time for connection type, I'll use the dropdown menu and choose PostgreSQL.
>
> **[5:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=341)** The server name again is going to be localhost.
>
> **[5:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=344)** The username will be postgres.
>
> **[5:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=347)** The password was established when we created the Docker container.
>
> **[5:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=352)** Once again, I'll remember the password, and we'll give this connection a name.
>
> **[5:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=355)** I'll call it PostgreSQL.
>
> **[5:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=358)** We'll switch over to the advanced tab and find the property for the port.
>
> **[6:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=363)** The port for this container was 5401, and I'll press enter to return back to the main connection screen, I'll press connect, and that should connect to our Postgres database server.
>
> **[6:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=373)** Once again, I can expand the databases and see the test database that we created using the CLI tool.
>
> **[6:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=380)** So now we're connected to both of these servers running in our Docker containers.
>
> **[6:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=385)** I want you to clean up the interface a little bit so that it's easier to recognize which server we're working with, and to do that, we're going to create some server groups.
>
> **[6:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=394)** Come up here to the folder icon, and click the button to add in a new server group.
>
> **[6:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=398)** I'll call the first one SQL Server, and I'll click on the green icon here in order to give it a group color, press OK.
>
> **[6:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=407)** That'll create a new sequel server group, and we'll do that one more time to create a PostgreSQL group.
>
> **[6:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=413)** I'll give this one the color of this dark blue or a dark purple color, let's hit OK, and we've got a second group.
>
> **[7:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=420)** Now I can just drag my server connections into the appropriate groups.
>
> **[7:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=424)** Now, as I open and close tabs for each of these database servers, they'll be color-coded in the interface, which will make it easier to recognize which tab we're working with.
>
> **[7:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=434)** I'm going to close out all three of these tabs, and it looks like I need to reconnect to my servers, so I'll just double-click on each one and that will reconnect.
>
> **[7:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/connect-to-a-database-server?u=76281980&t=442)** So now we've connected to our database servers running in the Docker containers, and we can start to explore their contents.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (8), [[PostgreSQL|Postgres]] (7), [[Microsoft SQL Server|Sql server]] (7), [[PostgreSQL]] (6), data (3)
> **CLI Commands:** docker (11), make (4), find (2)
> **Env Vars:** sql (9), cli (1)
> **UI Navigation:** click on (4), dropdown (2), scroll down (1), double-click (1)
> **Tools:** terminal (4), powershell (1), command line (1)
> **Analogies:** for instance (3), for example (1)
> **Ports:** port 1401 (1), port 5401 (1)
> **Definitions:** is a  (1), stands for (1)

#### Explore the server’s contents
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=0)** - [Instructor] The contents of each of the database servers can be explored using the Connection sidebar on the left-hand side of the screen.
>
> **[0:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=8)** Now, I've gone ahead and closed any open tabs and the terminal window so that we can focus on this portion of the interface.
>
> **[0:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=15)** For SQL Server, we have three main folders: Databases, Security, and Server Objects.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=22)** Databases is exactly that.
>
> **[0:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=24)** This is where all of the individual databases that the server contains will go.
>
> **[0:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=29)** This includes the one that we created ourselves as well as any system databases that SQL Server uses to manage itself.
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=37)** Inside of each of the database folders, you'll find all of the components that make the database work.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=43)** At the top of that list are the data tables.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=46)** This is where your actual data will live.
>
> **[0:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=49)** We also have other objects such as views, which are virtual tables that are made up of components of your main tables.
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=57)** The Programmability folder will store functions and other types of programming routines that your database can execute.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=64)** In the Security folder, You'll find a folder for the different user accounts that are allowed access to the database.
>
> **[1:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=71)** Inside the Security folder, you also have a number of folders that are used to store encryption keys.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=77)** These will protect the data from unauthorized access.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=81)** So that's a number of things that live inside of a SQL Server database.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=85)** Let's collapse all of these folders and turn our attention to PostgreSQL.
>
> **[1:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=90)** A database that's built on the Postgres SQL platform has some similarities and some differences from SQL Server.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=97)** Once again, there's a main Databases folder.
>
> **[1:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=100)** In Postgres, this'll hold all of the users' databases.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=104)** The System Databases folder contains the templates that all other databases are built from on the Postgres platform.
>
> **[1:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=111)** PostgreSQL stores all of the user account information in a folder called Roles.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=116)** And this is where you can set the permissions for different login accounts, including the Postgres account that we're currently logged in with.
>
> **[2:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=123)** At the bottom of the list is the Table Spaces folder.
>
> **[2:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=126)** And this contains a few objects that describe the physical location on your hard drive where the data will be stored.
>
> **[2:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=133)** Now, I encourage you to explore some of these folders and poke around to see what they contain.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=138)** A lot of the terminology is going to be unfamiliar.
>
> **[2:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=141)** And that's completely fine right now.
>
> **[2:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=143)** Just start to get used to the terms that are used and pay attention to the ones that are shared between these two different platforms.
>
> **[2:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=150)** There's a lot of similarity between how each RDBMS platform structures their database.
>
> **[2:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=156)** And all of the objects that a server contains can be accessed through their different group folders.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=162)** For the rest of the course, we're going to focus in on an area where both platforms are nearly identical.
>
> **[2:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/explore-the-server-s-contents?u=76281980&t=168)** And that's how they structure their data tables within each individual database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (9), [[Databases]] (8), data (5), [[Microsoft SQL Server|Sql server]] (4), [[PostgreSQL|Postgres]] (4)
> **Env Vars:** sql (5), rdbms (1)
> **CLI Commands:** find (2), make (1)
> **Tools:** terminal (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Create a database
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=0)** - [Instructor] Database servers don't really do anything all by themselves, they just sit there, quietly in the background, waiting for someone to reach out and ask them to do something.
>
> **[0:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=11)** Whether that's creating new objects like a table, writing a piece of data to that table, or retrieving stored information, the database server just needs to know what you want to happen.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=22)** The way that you communicate with an RBDMS server is through text commands written in Structured Query Language.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=30)** This language is what puts the SQL in SQL Server and PostgreSQL.
>
> **[0:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=36)** The SQL language has been in use for over 30 years, ever since it became an ANSI standard in 1986, and all of the relational database platforms make use of this common language.
>
> **[0:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=50)** Now, while some GUI client will provide wizards and other tools for walking you through different processes, the most common way to tell the database server what to do is through a query window.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=62)** If you right-click on a server name, for instance, the SQL Server 2019 server, you could choose New Query from the pop-up menu.
>
> **[1:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=71)** That opens up a new query window inside of a tab.
>
> **[1:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=74)** A query is a text interface for writing out the commands that you want the server to execute.
>
> **[1:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=80)** It's important to note that a query window is connected to the server that you started it from.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=85)** So, if I write a command here and execute it, it'll run on the SQL Server database.
>
> **[1:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=91)** I can't write a command in this window and have it execute on the PostgreSQL server.
>
> **[1:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=96)** To make this connection more apparent, I want to make a small change to the interface.
>
> **[1:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=101)** In the Action bar in the far left-hand side of your screen, come down to the bottom and click on the Gear icon, then come up and click Settings.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=109)** In the Search bar, do a search for tab color.
>
> **[1:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=114)** That'll reveal one property called Query Editor: Tab Color Mode, and I'm going to change its property to a fill.
>
> **[2:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=120)** When you chose the Settings tab, you'll notice that the tab color for the open Query Editor has changed to green, and this connects it to the server color that we applied earlier on in the course.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=130)** If I open up a new Query Editor for my Postgres database by right-clicking on it and choosing New Query, you'll see it gets the same purple color.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=138)** This makes it much easier to visually tell which database server the query will run against.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=145)** So, what are the commands that we can execute?
>
> **[2:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=148)** Well, as you'd expect, there's a bunch.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=151)** Anything that you could do on a server, from creating objects to writing and retrieving data to adding new users or making database backups, is completed through various SQL commands.
>
> **[2:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=163)** We've already seen a couple when we were using the command-line interfaces.
>
> **[2:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=167)** I'll switch over to the green tab for my SQL Server instance, and we'll write one out.
>
> **[2:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=173)** In order to view all of the databases on the server, we can ask for some data from one of the system tables.
>
> **[3:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=180)** I'll type in the command Select Star From sys.databases.
>
> **[3:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=187)** You then finish the command with a semicolon.
>
> **[3:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=190)** To execute the command, press the Run button on the toolbar.
>
> **[3:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=194)** At the bottom of the screen, you'll see the results.
>
> **[3:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=196)** These show the information about all of the databases on this server which shows the same names you can get by perusing the Connection sidebar and expanding the databases folders.
>
> **[3:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=206)** So here, in the table, I see master, tempdb, model, msdb and mytestdb, and those are the same database names that I see over here in the tree.
>
> **[3:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=216)** The Select command requests information that's stored in a table.
>
> **[3:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=220)** The asterisk specifies that we want to see all the columns in a table.
>
> **[3:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=225)** And the From clause specifies the name of the table that we're looking for, in this case, the sys.databases table.
>
> **[3:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=232)** This basic Select statement structure makes up the core of the SQL language's ability to retrieve stored data.
>
> **[4:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=240)** We can run a similar query in the Postgres server.
>
> **[4:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=242)** I'll switch over to the other tab.
>
> **[4:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=245)** The only different is that the system table has a different name on the Postgres platform.
>
> **[4:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=250)** Here, I'll write Select star from pg_database.
>
> **[4:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=256)** We'll finish the statement with a semicolon and press the Run button, and you'll see some similar information.
>
> **[4:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=261)** Here, we have the database names: postgres, mytestdb, template1 and template0.
>
> **[4:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=267)** Again, if we peruse the database tree over here and expand the database's folder, we'll see those, and then we have the system databases that are the templates.
>
> **[4:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=275)** So that's an example of using SQL language to retrieve some information.
>
> **[4:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=280)** The language is also used to build the structure of the database.
>
> **[4:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=284)** In order to create a new database on both platforms, the command is identical.
>
> **[4:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=289)** Let's switch back over to our SQL Server database.
>
> **[4:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=292)** I'll highlight all this text and get rid of it and type in a new command.
>
> **[4:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=296)** I'll say Create Database TwoTrees.
>
> **[4:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=299)** I'll press the Run button, and it tells me that the command was completed successfully.
>
> **[5:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=304)** I just created a new database on my SQL Server instance.
>
> **[5:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=309)** Now, when you create new objects, it's common that they won't immediately appear in the Connection sidebar.
>
> **[5:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=314)** You might need to right-click on the database server name and choose Refresh.
>
> **[5:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=319)** Then you could expand the database's folder again, and you should see it right there.
>
> **[5:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=324)** We can execute the exact same query over here in Postgres.
>
> **[5:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=328)** Let's highlight the old query and type in Create Database TwoTrees.
>
> **[5:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=333)** I'll finish with the semicolon and press the Run button, and, oh, this time, I had a typo, let's go ahead and spell Database correctly, I'll press the Run button again, it tells me that it's completed successfully, and this time, I will right-click on the database's folder and choose Refresh, and there is my new TwoTrees database.
>
> **[5:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=351)** So, learning the SQL language will be a valuable skill because it's used by so many different platforms.
>
> **[5:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-a-database?u=76281980&t=358)** Once you know the basics, you can apply those skills to any relational database management system on the market.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (24), [[SQL]] (6), [[Microsoft SQL Server|Sql server]] (6), [[Databases]] (6), [[PostgreSQL|Postgres]] (5)
> **Env Vars:** sql (12), rbdms (1), ansi (1), gui (1)
> **UI Navigation:** right-click (3), click on (1)
> **CLI Commands:** make (3)
> **Code Identifiers:** pg_database (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Warnings:** note that (1)

#### Challenge: Create a database
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-database?u=76281980&t=0)** - [Instructor] It's time for another challenge.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-database?u=76281980&t=7)** I want you to start putting together a storage solution for the data collected by a new company called KinetEco.
>
> **[0:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-database?u=76281980&t=15)** To do this, create a new SQL Server container just for the KinetEco company.
>
> **[0:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-database?u=76281980&t=21)** This will keep it separated from everything else that we've done in this course.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-database?u=76281980&t=25)** Once the container is created, connect to it in Azure Data Studio.
>
> **[0:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-database?u=76281980&t=29)** Then, create the KinetEco database.
>
> **[0:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-database?u=76281980&t=32)** We'll continue to build on this initial foundation with tables and data in upcoming challenges.
>
> **[0:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-database?u=76281980&t=39)** I estimate that this challenge should take about 10 minutes or less to complete.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-database?u=76281980&t=43)** In the next movie, I'll walk through the steps so that you can see how I'd accomplish these goals.
>
> **[0:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-database?u=76281980&t=47)** Have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), [[Microsoft SQL Server|Sql server]] (1), [[Microsoft Azure|Azure]] (1), database (1), next (1)
> **Env Vars:** sql (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Create a database
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=0)** - [Narrator] I hope you were able to create a new database container, and then create a database within the container for the Kinetico company.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=14)** Let's walk through the solution together.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=16)** If you still had tabs open from the prior movie, then you can go ahead and close those out, and you'll be prompted to save the text of your query editor, and you can just say no to all of that.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=26)** Next, I need to open up a new terminal window.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=28)** So I'll come up here to view, and come down to terminal.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=31)** That'll start up my powershell terminal.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=34)** And we're going to create a new container, so we use the docker run command for that.
>
> **[0:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=40)** I'm going to name my container Kinetico, then I'll type in a dash E.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=45)** We need to accept the end user license agreement, so I'll say accept EULA equals Y inside of quotation marks.
>
> **[0:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=54)** Then we need to set the password for the system administrator account.
>
> **[1:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=60)** And I'm just going to use the same password I've been using for everything else in this course.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=64)** Obviously, from a security standpoint, you would want to mix up your passwords and use something unique here, and I put in a double quote here where I shouldn't have, so SA password equals Adam123456, and then the end quote after the end of that.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=78)** Then we need to forward our ports.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=81)** So I need to pick a port that hasn't been used yet, so 1411 I know hasn't been used, and we're going to map that into 1433 inside of the container, that's SQL Server's default port.
>
> **[1:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=93)** Next, we need to specify what image we're going to use.
>
> **[1:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=96)** And this is the MCR dot Microsoft dot com slash MSSQL slash server colon 2019 dash latest.
>
> **[1:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=108)** And that wraps onto the second line, but it doesn't really matter.
>
> **[1:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=110)** As long as everything is spelled correctly, when I press enter, I should get a new unique identifier for the new container.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=116)** And say docker PS, and I should see my new container over here on the right, so there's 1411, and there is the Kinetico container name right there.
>
> **[2:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=127)** So that is all set up, let's go ahead and close out of the terminal window, and we can connect to our server.
>
> **[2:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=133)** So come up here, press the new connection button.
>
> **[2:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=135)** It is a SQL Server connection type.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=138)** The server is on my localhost.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=140)** We're going to use the SQL login for the SA account.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=145)** Type in that password.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=147)** We'll remember the password just so we can save it, so it's easy to reconnect if we get disconnected.
>
> **[2:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=152)** And let's name it Kinetico.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=155)** Next, we can come over here to the advanced tab, and we'll type in that port that I put in, which was 1411.
>
> **[2:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=163)** We'll say okay.
>
> **[2:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=165)** And we just double check everything.
>
> **[2:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=166)** Looks good, let's press connect.
>
> **[2:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=168)** And we are now connected, so now I have a new Kinetico database right up here.
>
> **[2:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=172)** I could put it in a new server group if I wanted to, let's go ahead and just do that.
>
> **[2:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=177)** We'll create a group for it just called Kinetico.
>
> **[3:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=180)** And I'll give it the group color, how about this dark red color.
>
> **[3:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=183)** Say okay, and that creates the new group, and now I just drag the database server connection into the group, and then I'll click on it again to reconnect.
>
> **[3:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=191)** And now, if I right click on it and choose new query, we should get a red tab there.
>
> **[3:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=197)** I can go ahead and close this other tab, the home tab for that database server.
>
> **[3:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=201)** This just gives me some information about the server itself, so it shows me that I'm working on the developer edition of SQL Server, it's running on Linux, the Ubuntu version of Linux.
>
> **[3:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=210)** So some basic information about the server.
>
> **[3:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=213)** Let's go ahead and close out of that tab, and switch over here to our query tab.
>
> **[3:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=217)** And we need to create the Kinetico database now on that server.
>
> **[3:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=221)** So that's simply create database, and then whatever you want to name it, I'll call it Kinetico.
>
> **[3:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=226)** Press run, and it tells me that the command was completed successfully.
>
> **[3:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=230)** And if I expand my databases folder, I can see it sitting right there, safe and sound in its own database server, within its own docker container.
>
> **[3:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=239)** And that's how I would solve the challenge.
>
> **[4:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-database?u=76281980&t=241)** I'll save the text and some notes about this challenge inside of the exercise files as solutiondatabase.txt.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (8), next (3), [[Microsoft SQL Server|Sql server]] (3), [[Linux]] (2), [[Powershell]] (1)
> **Env Vars:** sql (4), eula (1), mcr (1), mssql (1)
> **Tools:** terminal (4), powershell (1)
> **CLI Commands:** docker (3)
> **File Paths:** solutiondatabase.txt (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)


### 4. Create Table Objects

[↑ Back to Table of Contents](#table-of-contents)

#### Structured Query Language
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=0)** - [Instructor] Structured Query Language is the common link between all relational database management platforms.
>
> **[0:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=6)** So learning how it works on one platform will enable you to apply those same skills to other databases that you come across.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=14)** Unlike other programming languages that rise and fall in popularity, SQL is probably the most stable and transferable skill that you can have in IT.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=25)** Here's a couple of reasons why learning SQL might be easier than you think.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=30)** First, SQL is designed to be human readable.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=34)** Command keywords often say exactly what they're going to do.
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=37)** The create command creates objects, the insert command inserts rows into a data table.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=43)** It's very often the case that you can read through a SQL command and know exactly what it's going to do in very plain language.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=51)** Second, with SQL you tell the database server what you want to happen, and the server figures out how to do it.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=58)** This is different from many programming languages, where you need to specifically program each step.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=64)** In fact, you don't even need to know the full process that the server has to go through to end up at your desired outcome.
>
> **[1:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=70)** When you ask for a piece of information using a select statement, the database engine will figure out that it needs to scan through the index, find the key value, then match that to another table, then retrieve the values and store them in memory, then create a record set to display them.
>
> **[1:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=86)** You don't care about any of that.
>
> **[1:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=88)** You just ask for the data that you want, and the server delivers.
>
> **[1:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=93)** And third, SQL is forgiving to write.
>
> **[1:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=96)** The language is case insensitive.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=98)** It doesn't matter if you use capital or lowercase letters.
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=102)** They all get interpreted the same.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=104)** It's also white space insensitive.
>
> **[1:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=107)** You can add extra spaces or new lines and split things out, however you want, so that it's easier to read.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=113)** This allows you to add some breathing room between clauses so that you're not trying to read through and understand a dense block of commands all at once.
>
> **[2:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=122)** Because the language can do so many things on your RDBMS server, it's helpful to break the commands down into two different groups.
>
> **[2:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=131)** Data Definition Language commands, or DDL commands, are used to design and build the components of your database.
>
> **[2:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=139)** These commands are used to create, alter, and drop database objects.
>
> **[2:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=144)** Objects are things like tables, indexes, user accounts.
>
> **[2:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=148)** Things like that.
>
> **[2:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=149)** All of the components that give structure to the database's design.
>
> **[2:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=153)** The other group of commands are called Data Manipulation Language commands or DML.
>
> **[2:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=159)** These commands are used for working with data storage.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=162)** Insert, update, and delete are used to add, modify, and remove rows of data from your database tables.
>
> **[2:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=170)** Here's an example of an SQL Data Definition Language command.
>
> **[2:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=175)** This command will create a new table called Authors.
>
> **[2:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=178)** The table is made up of four columns that will store an ID number for the author, and the first and last name and birth date of the author.
>
> **[3:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=187)** The parts after the column names that read, INT NOT NULL PRIMARY KEY or NVARCHAR (50) NOT NULL?
>
> **[3:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=194)** These describe the kinds of data that can be stored in each column of the table.
>
> **[3:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=198)** And we'll get to what each of these keywords means in an upcoming movie.
>
> **[3:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=202)** Let's also pay attention to the punctuation.
>
> **[3:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=205)** Each of the column lines are separated by a comma at the end, and all of the column names are grouped together inside of a pair of parentheses.
>
> **[3:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=214)** The entire statement is terminated with a semi-colon at the end.
>
> **[3:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=218)** And the first line that starts with two hyphens?
>
> **[3:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=221)** That's a comment that's not part of the code, but it's added to provide helpful descriptions about what the code is doing.
>
> **[3:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=228)** You can add comments anywhere that you want by typing into hyphens.
>
> **[3:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=232)** In Azure Data Studio, comments get written in a green font, so they're easy to identify.
>
> **[3:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/structured-query-language?u=76281980&t=238)** The SQL language provides the gateway to working with relational databases, and investing the time to learn to read and write commands will pay dividends throughout your career.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (8), data (8), database (7), [[Programming]] (2), management (1)
> **Env Vars:** sql (8), null (2), rdbms (1), ddl (1), dml (1)
> **CLI Commands:** find (1)
> **SQL:** primary key (1)
> **Speakers:** - [instructor] (1)

#### Organize a database with schemas
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=0)** - [Instructor] Databases are created to organize data, but that doesn't mean you can just throw everything into a single table and expect to get good results.
>
> **[0:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=8)** To get the most out of a relational database, you need to create an organized structure upfront, before you even add your first piece of data.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=17)** We've discussed how relational databases split information up across multiple tables in order to create efficiencies in the system.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=25)** A common way to illustrate or diagram the tables in a database is to draw a box around the name of the table, and then list the columns that the table includes down below.
>
> **[0:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=35)** For instance, in a database designed for a library, a table about books might get diagrammed like this.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=42)** The table will contain a column to store the unique ID number for each book, the title, the publication date, and have two columns that'll link to values in other tables that identify the author and the publisher.
>
> **[0:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=54)** Then the database will contain another table to store a specific details about the author, and a third table that stores details specific to the publisher.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=64)** The tables are all joined together so that you can find the related information across all three tables.
>
> **[1:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=70)** Because all three of these tables work together to store the full set of information about each book, It's common to group them together using a schema.
>
> **[1:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=79)** Schemas are a container that collects tables and other database objects that go with one another.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=85)** They make management of your data easier and creates the structure for your database that's more organized.
>
> **[1:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=92)** Returning to the library database example, you might group all three of these tables together in a schema called Books.
>
> **[1:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=100)** That'll cause all the tables to appear next to each other in the object tree with navigating the database, using the graphical interface.
>
> **[1:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=107)** Since they all get listed alphabetically.
>
> **[1:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=110)** You'll see them nested like this, Books.Authors, Books.Books and Books.Publishers.
>
> **[1:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=117)** The schema name gets incorporated into the full name of the table.
>
> **[2:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=121)** This is called a two-part naming convention, where you have the schema name, a period, and then the table name.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=130)** Our two RDBMS platforms already have a default schema created for each new database.
>
> **[2:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=137)** On the PostgreSQL server, if I expand the databases folder, and then the Two Trees database, you'll find a folder here for schemas.
>
> **[2:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=144)** Inside of here you'll find a single schema called Public.
>
> **[2:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=148)** If you don't create any additional schemas, then all of the tables that you create in this database, will automatically get added to the Public schema.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=157)** Likewise, in the SQL server platform, we also have a default schema that's created for every new database.
>
> **[2:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=163)** We'll come up here to the other server and expand the databases folder.
>
> **[2:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=167)** And we'll expand the Two Trees database here, then we'll go into the security folder, and here you'll find a folder for all the schemas.
>
> **[2:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=175)** Now SQL server includes a bunch of different schemas for a system objects, but the default user schema is called DBO.
>
> **[3:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=183)** This stands for database owner.
>
> **[3:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=186)** If you don't create your own schemas, then any tables you create will automatically go into the DBO schema.
>
> **[3:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=193)** To create a schema, the syntax is pretty straightforward.
>
> **[3:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=196)** Let me scroll back up here to the very top.
>
> **[3:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=198)** And I'm going to right click on the Two Trees database in the SQL server instance and choose new query.
>
> **[3:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=204)** That'll start up a new query editor for this database.
>
> **[3:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=207)** You want to look at this dropdown menu here and make sure that it says Two Trees.
>
> **[3:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=210)** You can change it to target your queries against other databases on the same server.
>
> **[3:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=215)** In order to create a schema, we just say, create schema and the name of the schema you want to create.
>
> **[3:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=222)** The Two Trees company creates and sells a line of olive oils and related products.
>
> **[3:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=227)** So let's create a schema that'll hold all of the tables that we'll need in order to describe their product line.
>
> **[3:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=233)** I'll call it products.
>
> **[3:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=235)** I'll finish the command with a semicolon and press the Run button.
>
> **[3:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=239)** I get the message back that the command was completed successfully.
>
> **[4:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=242)** And now if I go down into my schemas folder and scroll down, I might need to right click on it and choose refresh.
>
> **[4:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=248)** And there is the new product schema.
>
> **[4:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=251)** We can also create a schema that will group together all of the tables that store information about these sales transactions and customers.
>
> **[4:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=257)** Let's go back up here into our query window, and where it says create schema.
>
> **[4:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=261)** I'm going to change this to sales.
>
> **[4:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=264)** I'll execute this new line by pressing the Run button, again it was completed successfully.
>
> **[4:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=268)** I'll refresh my schemas folder, and there is the new sales schema.
>
> **[4:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=273)** If you make a mistake you can remove a schema with the DROP SCHEMA command.
>
> **[4:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=278)** DROP is the command key word that the SQL language uses for removing database objects.
>
> **[4:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=284)** Now I want to keep the sales schema, so I'm actually not going to run this, we're just going to highlight all of that and get rid of it.
>
> **[4:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=289)** These same exact commands work on the PostgreSQL server as well.
>
> **[4:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=293)** So let me scroll back up here on my database tree and I'll collapse everything here.
>
> **[4:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=296)** In fact, we can go ahead and collapse all of the SQL server instance.
>
> **[4:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=299)** Will come into the PostgreSQL database and right click on Two Trees and choose new query here.
>
> **[5:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=305)** Now we can write out the exact same commands.
>
> **[5:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=307)** And in fact we can run both commands at once.
>
> **[5:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=310)** Make sure that you end both commands with a semicolon and press the Run button.
>
> **[5:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=315)** That'll run both of them.
>
> **[5:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=316)** And if I go into these schemas folder and right click and choose refresh, you should see them appear there.
>
> **[5:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=322)** When you're done, you can close both of these tabs.
>
> **[5:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=325)** At this point, Azure Data Studio is going to prompt you to save the text of your commands if you want, but we don't need to do that.
>
> **[5:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=331)** So you can safely click on the Don't Save button.
>
> **[5:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=334)** This warning dialog box is only referring to the text that you wrote up in the query window.
>
> **[5:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=339)** The actual changes that you made to the database, the creation of these schema in this case, has already occurred and been saved into the databases structure.
>
> **[5:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=348)** So the only thing that that dialogue box is referring to, is the actual text of the instructions that you wrote.
>
> **[5:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=353)** I'll go ahead and close this other tab to return back to a blank slate.
>
> **[5:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/organize-a-database-with-schemas?u=76281980&t=357)** Now, when we start creating our table objects, we can organize them into the appropriate schemas, in each database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (21), [[Databases]] (5), data (4), [[Microsoft SQL Server|Sql server]] (4), [[PostgreSQL]] (3)
> **Env Vars:** sql (5), dbo (2), drop (2), rdbms (1), schema (1)
> **CLI Commands:** find (4), make (4)
> **UI Navigation:** click on (4), dropdown (1), scroll down (1)
> **Definitions:** is called (2), stands for (1)
> **Analogies:** for instance (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Table columns
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=0)** - Before you can store data in a database, you need to build a home for the data to live in.
>
> **[0:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=5)** So let's talk for a few minutes about constructing tables.
>
> **[0:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=9)** Tables are made up of columns and each column stores a single piece of information.
>
> **[0:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=15)** In our libraries books table, we might have a column that stores the unique book identifier number, it's title, publication date and the identifiers that link to the author and publisher tables.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=27)** Each of these columns, stores one piece of information about each book.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=31)** And together, they make up the full set of details that we want to store in the database.
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=37)** In order to create this table using SQL commands, we need to identify a couple of details.
>
> **[0:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=44)** The first one is easy.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=45)** We need a unique name for each column.
>
> **[0:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=49)** The name should be descriptive and not contain any confusing acronyms.
>
> **[0:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=53)** And it's best if the column name doesn't include spaces.
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=57)** When you do, things get a little bit more complicated when there are spaces in the names.
>
> **[1:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=61)** And it's best to just avoid the problem that spaces create whenever possible.
>
> **[1:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=65)** You can use underscores or camel case names if you'd like.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=69)** Some relational database platforms have a preferred style.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=73)** For instance PostgreSQL databases tend to use underscores between words and all lowercase letters for their table and column names.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=81)** SQL server databases, generally use the camel case capitalization scheme for names.
>
> **[1:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=87)** Different platforms will have adopted different styles.
>
> **[1:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=90)** So take a look at what other databases use on your chosen platform and try to mimic those conventions.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=97)** The second piece of information that we need to know about each column, is the type of data that it will store.
>
> **[1:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=103)** It makes a difference for the RDBMS if the column is storing text or numbers or dates or images or whatever else you want to put in a table column.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=113)** And this is where the various relational database platforms diverge a little bit.
>
> **[1:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=117)** In an effort to differentiate their products on the market, the various RDBMS vendors support the storage of different kinds of data.
>
> **[2:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=126)** One database platform might allow you to store geospatial data, like the kind that you would use in creating maps.
>
> **[2:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=132)** Others might support storing time zone information in a date column while others do not.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=138)** There is some variation from platform to platform, but the basic data types are fairly consistent even if they go by different names.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=147)** For instance, to store an unlimited amount of texts on SQL server, you would use a data type called VARCHAR(MAX).
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=155)** On PostgreSQL, you would store the same data in a column with the text data type.
>
> **[2:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=161)** Because of these differences, I want to focus on a couple that are pretty common across most platforms.
>
> **[2:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=167)** The CHAR data type will store character data such as text strings.
>
> **[2:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=171)** In parentheses you'll specify the maximum number of characters the column will hold.
>
> **[2:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=176)** In this case a CHAR of 50, will only store up to 50 characters.
>
> **[3:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=181)** The INT data type stores integer values.
>
> **[3:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=184)** These are whole numbers, but no fractions or decimals.
>
> **[3:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=188)** And the DATE data type stores calendar dates, but not time or time zone information.
>
> **[3:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=195)** These three data types are enough to get started with and should work in the majority of cases.
>
> **[3:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=200)** For a more complete set of data types, you'll want to consult the documentation for your chosen RDBMS platform for the specific types that it supports.
>
> **[3:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-columns?u=76281980&t=209)** Once you've identified the name of each column and the type of data that it will store, you'll have everything that you need to write out your create table command, execute it on your server and start building the home for your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (17), database (5), [[Databases]] (3), [[PostgreSQL]] (2), [[Microsoft SQL Server|Sql server]] (2)
> **Env Vars:** sql (3), rdbms (3), char (2), varchar (1), max (1)
> **Analogies:** for instance (2), such as (1)
> **CLI Commands:** make (1)
> **SQL:** varchar (1)
> **Documentation:** the documentation (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - before (1)

#### Create tables
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=0)** - [Instructor] Let's start building the home for some of our data.
>
> **[0:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=3)** In the Chapter 4 folder of the Exercise Files is this spreadsheet called Two Trees Olive Oil products.
>
> **[0:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=9)** It's an Excel file, but if you don't have Excel or can't otherwise open this file, that's just fine.
>
> **[0:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=15)** You're not going to need it to follow along.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=17)** I just wanted to take a quick look at the kinds of data that I want to store in our database.
>
> **[0:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=23)** In this PRODUCTS spreadsheet, we have a unique product code stored in the column called SKU.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=28)** We also have the name of the product.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=31)** We have the size in ounces and the price in US dollars.
>
> **[0:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=36)** If I scroll down through the spreadsheet, you're going to see that there's three different colored sections.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=41)** These correspond to different product categories.
>
> **[0:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=44)** The green section at the top represents olive oils.
>
> **[0:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=47)** The purple section in the middle contains flavor-infused oils.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=52)** And the yellow section at the bottom contains bath and beauty products that contain olive oil.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=58)** Since our database tables won't be able to structure data like this in different sections within the same table, we should also add a column to capture the type of product to our database table.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=69)** Okay, let's go back up to the top now and think about our data types.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=73)** The SKU column contains character data.
>
> **[1:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=76)** If I look through the SKUs, there are some longer ones towards the bottom, but none are longer than seven characters, so a CHAR 7 data type will be sufficient to store all of these values.
>
> **[1:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=87)** The Product name column contains data that's a little bit longer.
>
> **[1:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=90)** Now, I want to be able to add new products to our database table if we expand the business, so it makes sense to give ourselves a little bit of buffer space here.
>
> **[1:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=99)** A CHAR 50 data type should be plenty of characters for all of our existing and future products.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=105)** The values in the Size column are all integer numbers.
>
> **[1:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=108)** So that one's easy. We'll just use the INT data type.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=112)** The last column, Price, it's a little bit trickier.
>
> **[1:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=115)** Many relational database management systems don't have a specific data type for storing currency values.
>
> **[2:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=121)** Both SQL server and PostgreSQL databases do support a data type called money, but they're region-specific.
>
> **[2:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=128)** So if I create a Money column here in the United States, it's going to act differently from someone following along in a different country.
>
> **[2:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=136)** What we can do instead is use a data type that supports decimal values.
>
> **[2:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=141)** That will allow us to store the price data in a way that's consistent for you if you're following along no matter where you live.
>
> **[2:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=149)** So I think we have all of the information that we need to get started, so let's jump into Azure Data Studio and get to work.
>
> **[2:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=156)** I'm going to build the first table for the SQL server database, the TwoTrees database over here.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=162)** Let's go ahead and right-click on it and choose New Query.
>
> **[2:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=165)** We'll start with the CREATE TABLE syntax.
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=169)** We're going to place our table inside of the products schema that we created in the earlier movie.
>
> **[2:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=174)** I'm also going to name the TABLE products.
>
> **[2:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=178)** Now, this might look a little bit confusing, so if I'm using the same name for both the schema and the table, but it's going to work out just fine.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=185)** So I'll create a table in the products schema called products, I'll open up a parenthesis and then bring the closing parenthesis down to line number four just to give myself some more room.
>
> **[3:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=194)** Then I'll come up to line number two, and we'll start defining our columns.
>
> **[3:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=199)** I like to press the Tab key here just to make things spaced out a little bit, and the first column I'm going to add is the column called SKU.
>
> **[3:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=206)** We said we're going to store this as a CHAR 7 data type.
>
> **[3:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=210)** After the closing parenthesis in CHAR 7, I'll type in a comma and come down, and we'll define the second column, ProductName.
>
> **[3:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=218)** This will be a CHAR 50 data type.
>
> **[3:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=221)** I'll type in a comma at the end, come down to the next line, and type in CategoryID.
>
> **[3:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=227)** Now, for the category, this is where we specify whether the product is for the olive oil category, the flavor-infused oil category, or the bath and beauty category.
>
> **[3:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=237)** Now, we could store the text in this column, but we can also save some space and store a CategoryID number that relates to a second table.
>
> **[4:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=245)** For instance, category number one means olive oil, category number two means flavor-infused.
>
> **[4:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=253)** This way, we only need to store the full text a single time in a second table, rather than storing it in every row in the products table.
>
> **[4:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=261)** This will make things a little bit more efficient for our database.
>
> **[4:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=264)** So for this, instead of text, I'm going to store an INTEGER value.
>
> **[4:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=269)** The Size column is also going to be an INTEGER value.
>
> **[4:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=273)** And finally, we have the Price column.
>
> **[4:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=275)** For this, we'll use the DECIMAL data type.
>
> **[4:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=278)** And inside of parentheses, I'm going to type a 5,2.
>
> **[4:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=283)** The tricky bit about the DECIMAL data type is that we need to define exactly how many digits the column can hold.
>
> **[4:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=290)** The 5,2 means that the entire number can be a maximum of five digits long.
>
> **[4:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=295)** This includes the bit before and after the decimal point.
>
> **[4:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=298)** The number 2 means that there will be two digits after the decimal point.
>
> **[5:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=303)** So essentially, a decimal 5,2 data type will store a number that has three digits to the left and two digits to the right of the decimal.
>
> **[5:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=312)** That will be more than enough space to hold our prices, which don't actually go above $100 and certainly not above $999 and 99 cents.
>
> **[5:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=321)** So this is our basic CREATE TABLE command.
>
> **[5:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=324)** I'm going to come down to line number seven and press the Delete key on my keyboard to bring up the last closing parenthesis up, and I'll add a semicolon at the very end.
>
> **[5:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=332)** Now, we could run this right now and get a table built for our database, but there's a few more optional pieces that we can add to better control the data that's stored.
>
> **[5:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=342)** If you want to require a value for a particular column when entering data, then you can specify that each column cannot allow a null.
>
> **[5:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=350)** Null is a database term for a blank or an empty cell in a table.
>
> **[5:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=355)** For instance, if every row of data absolutely needs to have a SKU, a name, and a price, then we can specify these columns are not null.
>
> **[6:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=364)** To do that, I'll come up here right after the data type definition but before the comma, and I'll type in NOT NULL.
>
> **[6:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=371)** I'll do that for the SKU column, the ProductName column, and the Price column.
>
> **[6:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=377)** Adding the NOT NULL keywords to the column definitions means that these columns cannot be left blank when new rows are being added to the table.
>
> **[6:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=386)** This also means that the Category and the Size columns are optional since they will allow nulls or blanks when a new row is added.
>
> **[6:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=395)** The other thing that we can do is identify the column that provides a unique identifier for each row.
>
> **[6:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=400)** Every row in a data table needs to have at least one piece of information that's guaranteed to be unique.
>
> **[6:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=407)** This is called the table's primary key.
>
> **[6:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=410)** I know that the SKUs for each of these products is unique, so we can mark this as the table's primary key.
>
> **[6:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=416)** Right after the keywords NOT NULL, just type in PRIMARY KEY.
>
> **[7:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=421)** When you do this, the database engine will prevent two products from getting entered into the table if they have the same SKU.
>
> **[7:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=428)** If that ever does occur, that's almost certainly a mistake anyway.
>
> **[7:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=432)** So we added in a little bit more detail into the design of our table.
>
> **[7:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=435)** We now know that no two products will have the same SKU and that every product entered will, at a minimum, contain a SKU, a name, and a price.
>
> **[7:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=445)** Let's press the Run button to execute the query to create our table.
>
> **[7:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=448)** It tells me that the command was completed successfully, so that is great news.
>
> **[7:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=452)** Let's come over to our TwoTrees database over here, and I'm going to expand that.
>
> **[7:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=456)** Let's go ahead and minimize the Security folder, if that's open, and then expand our Tables folder.
>
> **[7:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=461)** You should see the new products table in the products schema right here.
>
> **[7:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=465)** If you're not seeing it, right-click on the Tables folder and choose Refresh.
>
> **[7:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=469)** Now we can dig into this Tables designed here, I'll expand that open, and we could expand the Columns folder.
>
> **[7:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=475)** This shows me all the different columns that we just created, and their data types and their other characteristics.
>
> **[8:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=481)** So the SKU is the primary key, it's a character 7 data type, and it will not allow null values.
>
> **[8:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=487)** We can run this exact same command inside of our PostgreSQL database and create an identical table.
>
> **[8:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=492)** Let's go ahead and copy all of these to our clipboard, then I'll come down into the TwoTrees database that's inside of our PostgreSQL server, I'll right-click on that and choose New Query, then I'll paste in the exact same CREATE TABLE syntax, and press Run.
>
> **[8:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=507)** Again, it tells me that it completed successfully, and I can expand this database, the Tables folder, there is the new table, and there are the Columns.
>
> **[8:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/create-tables?u=76281980&t=516)** So now we have a table in both of our database servers to store our Two Trees Olive Oil Product data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (27), database (16), [[Microsoft Products|Products]] (15), product (8), [[PostgreSQL]] (3)
> **Env Vars:** sku (9), char (5), table (4), create (3), null (3)
> **SQL:** create table (3), integer (2), primary key (1)
> **Definitions:** means that (4), is a  (1), is called (1)
> **UI Navigation:** right-click (3), scroll down (1)
> **CLI Commands:** make (2)
> **Analogies:** for instance (2)
> **Exercise Files:** exercise files (1)

#### Alter tables
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=0)** - [Instructor] It's not uncommon to set up a data table and then later realize that you would like to add an additional column to that table.
>
> **[0:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=8)** When you want to make a change to an object that you've already created, you're going to use the ALTER command.
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=13)** We can see how this works by creating another table.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=16)** And then when we created the product table inside of our two trees database, we added a column for the category ID.
>
> **[0:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=24)** The intent is to store an integer value here and then link that value to another table that'll give us the full description of the category.
>
> **[0:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=32)** So let's create that second table now.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=34)** I'm going to right click on the two trees database and choose new query.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=38)** Then we'll create a new table in the product schema called categories.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=45)** I'll open up my parentheses and the first column that I want to add will be called category ID.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=51)** It'll be an integer value and it will be the primary key for the table.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=56)** Then we'll add a second column called category description.
>
> **[1:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=60)** This will store CHAR(50) data type.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=64)** I'll come down to the end of line four and I'll add my semi-colon after the closing parentheses and press the Run button to create the table.
>
> **[1:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=71)** Then if I refresh the tables folder, we should see it appear right here.
>
> **[1:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=75)** Now we can use one of the features of Azure Data Studio to fill in a few rows of data.
>
> **[1:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=80)** Right click on the table name and choose Edit Data.
>
> **[1:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=84)** That'll open up a new tab where we can type values directly into the table.
>
> **[1:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=89)** So I'll fill in these values, category one corresponds to olive oils, category two corresponds to flavor infused oils and category three is our bath and beauty products.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=105)** As soon as you press enter on the last cell in row number three, all of that data gets saved right into the data table.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=113)** There's no need to press a save button or anything like that, your data is already stored.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=118)** You can go ahead and close this tab when you're done.
>
> **[2:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=121)** To prove that the data is safe, you can right click on the table again and choose select top 1000.
>
> **[2:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=128)** This will return the first 1000 rows of data.
>
> **[2:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=131)** Now our table obviously only has three rows, but you can see that it's easily fetched.
>
> **[2:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=136)** Okay, we can go ahead and close out of this second tab.
>
> **[2:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=139)** So now let's suppose that you want to add another column to expand on the data stored in that table.
>
> **[2:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=144)** I'd like to also store a product line that each category belongs to.
>
> **[2:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=149)** In order to add the column I'll come here on my script and I'll come down to line number six.
>
> **[2:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=154)** This is where we'll use our ALTER table command.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=157)** I'm going to alter the products.categories table.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=162)** Then on the next line down, we'll use the ADD keyword followed by the name of the column that I want to add and its data type.
>
> **[2:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=170)** In this case, the column will be named product line and it'll store CHAR(25) data type.
>
> **[2:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=177)** I'll finish the statement with a closing semi-colon.
>
> **[3:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=180)** Now, if I were in a press Run right now, it's going to run through this entire script.
>
> **[3:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=183)** It's going to create the table again and then alter the table.
>
> **[3:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=186)** And because the table already exists, we're going to get an error.
>
> **[3:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=190)** Here in Azure Data Studio a nice shortcut if you only want to run a couple of lines is to just highlight the lines you want to run in this case line six and seven, and then press the Run button.
>
> **[3:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=200)** Azure Data Studio will only execute the highlighted lines.
>
> **[3:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=204)** Now, if I right click on the categories table and choose refresh and then expand the columns folder again, you'll see the new product line column.
>
> **[3:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=212)** Now I can right Click the table again and choose edit data.
>
> **[3:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=216)** That'll return me back into the interface where I can add my data here and I can fill in the product line for each of my categories.
>
> **[3:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=223)** Let me just expand these columns a little bit so I can see all of the text inside.
>
> **[3:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=226)** So the product line for category one and two, they both belong to our gourmet chef product line, category three belongs to our cosmetics product line.
>
> **[4:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=240)** I'll press enter on the last cell.
>
> **[4:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=241)** That data is saved into the database and I can close out of this tab.
>
> **[4:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=245)** And that's how you add additional columns to existing tables with an ALTER statement.
>
> **[4:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/alter-tables?u=76281980&t=250)** Remember to use the same column naming rules and data types as when you initially created the table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (19), product (9), database (3), [[Microsoft Azure|Azure]] (3), [[Microsoft Products|Products]] (2)
> **Env Vars:** alter (3), char (2), add (1)
> **UI Navigation:** click on (4)
> **CLI Commands:** make (1)
> **Best Practices:** remember to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Reserved keywords
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=0)** - [Instructor] The SQL language includes a large number of commands and other keywords that have special meaning to the database engine.
>
> **[0:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=8)** We've already seen a few of them, words like Create, Alter, Schema, Table.
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=13)** These command keywords, instruct the server to do something, to build something or edit something.
>
> **[0:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=19)** Words like these are called reserved keywords, and it's important to avoid using them in the names of your database objects, like tables or columns.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=28)** It can be downright confusing to read if you do use these reserved keywords as object names.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=34)** Consider the command create table, create.table.
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=37)** Here we're asking for a table named table and a schema named create.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=43)** While you can kind of make sense of what's going on, it's a struggle.
>
> **[0:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=47)** Worse, the database engine can get confused as it tries to interpret what you're asking for.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=52)** In fact, in order to actually accomplish this task, you'd have to wrap the names in square brackets or quotation marks, a process that's known as delimiting the identifier.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=63)** This way the database engine knows that these are object names and not command keywords.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=68)** But even though this may be understood, it's still not a great idea since it's still confusing to read.
>
> **[1:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=75)** The best advice is to simply avoid using reserved keywords altogether.
>
> **[1:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=79)** A common reserve word that I see a lot of database designers try and use is the word date.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=85)** For example, in a table for invoices, you might want to store the invoice ID, the customer ID that's being billed, and the date of the invoice.
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=95)** This makes logical sense for the data, but the word date is I reserved keyword since it also corresponds to the name of the date data type.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=104)** In this case, it's best just to pick a different name rather than have to write out the column name in quotation marks every time it's used.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=112)** The column named date, isn't very specific either.
>
> **[1:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=115)** It's much better to be overly explicit about what this column is storing.
>
> **[2:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=120)** A revised name of invoice date, not only avoids the reserved word problem, but it's much more descriptive about the data.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=130)** Now, each database platform is going to have its own list of reserved keywords that you should avoid.
>
> **[2:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=135)** On this page, you can find the list for PostgreSQL databases.
>
> **[2:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=139)** The chart shows which words are reserved and which ones are non-reserved.
>
> **[2:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=144)** It also shows how this list compares to the various SQL language standards.
>
> **[2:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=149)** If a particular word is on this list, but marked non-reserved, it's probably okay to use it, but I would still think about alternatives.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=157)** Microsoft maintains a similar page for the reserved words on the SQL server platform.
>
> **[2:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=163)** Interestingly, there's also a section over here, if you click on the right-hand side for future keywords.
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=169)** This includes words that may be added to the reserved word list as new features are developed.
>
> **[2:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/reserved-keywords?u=76281980&t=175)** Again, if a word appears on this list, avoid using it in your table and column names for the best results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (7), database (6), data (3), [[SQL]] (2), [[PostgreSQL]] (1)
> **Env Vars:** sql (3)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** click on (1)
> **Definitions:** known as (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Create a table
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-table?u=76281980&t=0)** - [Instructor] For your next challenge, I'd like you to continue working on the Kinetico database that you set up in the prior challenge.
>
> **[0:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-table?u=76281980&t=12)** This time, your goal is to add in a new schema and the first data table using SQL commands.
>
> **[0:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-table?u=76281980&t=18)** First, create a schema called HumanResources.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-table?u=76281980&t=22)** Then create a table for the company's employees in that schema.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-table?u=76281980&t=27)** The employee table should have a column for the employee ID, their first and last name, department, and their hire date.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-table?u=76281980&t=34)** I estimate that this challenge will take about 10 minutes or less to complete and in the next movie I'll show you how I'd accomplished these goals.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-create-a-table?u=76281980&t=42)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (2), database (1), data (1), [[SQL]] (1)
> **Env Vars:** sql (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Create a table
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=0)** - I hope you were able to add the requested schema and table into the Kinettico database.
>
> **[0:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=11)** Let's walk through the steps to getting this done.
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=13)** Here in Azure Data Studio, the first thing I'm going to do is find the database I want to work with.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=17)** So I'm just going to collapse everything on the left hand side of my Connections sidebar.
>
> **[0:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=21)** And then expand into my Kinettico server.
>
> **[0:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=24)** There is the databases folder and there is the database we created in the prior challenge.
>
> **[0:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=29)** All right, right now there's no tables in here.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=31)** And if I expand the Security folder and find the Schemas folder, you'll see that there's lots of schemas but there's nothing in here yet except the standard dbo schema that is used for our user databases.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=42)** So let's get started.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=43)** You're going to right click on the database, and choose New Query.
>
> **[0:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=47)** And the first thing we're going to do is create our schema.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=51)** So that's CREATE SCHEMA.
>
> **[0:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=53)** And the schema that I asked for was called HumanResources.
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=57)** So I'll finish that with a semicolon.
>
> **[0:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=59)** And if I press the Run button, that'll create my schema.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=62)** And I can come down here and refresh this folder.
>
> **[1:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=65)** And just verify that it is indeed in place.
>
> **[1:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=67)** And there it is.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=68)** So that is the first part of the challenge.
>
> **[1:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=71)** The next part of the challenge is to create a table.
>
> **[1:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=74)** I'm going to give myself some more room here in the script.
>
> **[1:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=76)** In fact, I can move this Messages window down on the screen just to get it out of the way.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=81)** So come here onto line number three.
>
> **[1:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=83)** And we're going to create a table.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=85)** And the table is going to go into the HumanResources schema that we just created.
>
> **[1:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=90)** In the IntelliSense you can see that was popping up.
>
> **[1:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=92)** Let me actually just backspace off of this again.
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=95)** So if I start typing HumanResources, you'll notice that the IntelliSense feature of Azure Data Studio is automatically recognizing that something that I just typed in.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=105)** So it's suggesting that.
>
> **[1:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=106)** So as soon as I see this, I can actually just press the Tab key on my keyboard.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=109)** And it fills in the rest of that, which is really handy.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=112)** So HumanResources is the schema. I'll type in a period.
>
> **[1:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=115)** And then Employees.
>
> **[1:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=117)** That's the table we're going to make.
>
> **[1:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=119)** I'll open up my parenthesis and bring that other one down a line.
>
> **[2:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=122)** And then we can start filling in our columns.
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=125)** So columns that I asked for, the first one was the EmployeeID.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=130)** And I didn't give you the data types, but we can go through kind of what we know already about data types and pick some that make sense for this.
>
> **[2:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=137)** So an EmployeeID is going to be, usually it's an integer value.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=140)** So I'll type that in as an INT.
>
> **[2:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=142)** We should also have an EmployeeID for every employee.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=145)** So I'll specify this is, NOT NULL.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=147)** And this will be the PRIMARY KEY for the table.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=151)** Type in a comma.
>
> **[2:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=152)** Come down to the next column definition.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=155)** I asked for their first and last name.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=157)** So, make a column for FirstName.
>
> **[2:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=159)** This should store character data.
>
> **[2:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=161)** And you can pick however many characters you think is plenty.
>
> **[2:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=165)** I think 50 characters is hopefully plenty for a name.
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=169)** So I'll type in the CHAR(50) data type here.
>
> **[2:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=172)** And we'll specify this is also, NOT NULL.
>
> **[2:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=174)** You can always come in if you do find that you do need more characters after you start entering some of your data.
>
> **[3:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=180)** You can issue an alter table statement.
>
> **[3:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=182)** Then you can alter this column and the, specifically the data type here.
>
> **[3:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=186)** You can make that more characters if you need to later.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=189)** So you're not stuck with whatever you fill in originally.
>
> **[3:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=192)** So the next column is going to be our LastName.
>
> **[3:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=195)** And let's also set this as a Char(50).
>
> **[3:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=198)** We'll say, NOT NULL, here.
>
> **[3:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=200)** The next column, Department.
>
> **[3:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=204)** We'll set this as a CHAR(20).
>
> **[3:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=207)** And again, let's make this required as well. Say, NOT NULL.
>
> **[3:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=211)** And the HireDate.
>
> **[3:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=213)** We'll use the DATE data type for this.
>
> **[3:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=216)** And might as well just say this is, NOT NULL, as well.
>
> **[3:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=219)** So what we're doing essentially, is setting up a situation where every column is going to be required in order to enter any employee into this table.
>
> **[3:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=227)** So every time we enter a new employee, we'll have to supply all of these values.
>
> **[3:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=231)** EmployeeID, FirstName, LastName, Department and HireDate.
>
> **[3:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=234)** And if you don't have any of these pieces of information, the database engine won't let that row be saved into the database. So it won't allow us to have incomplete rows in the database.
>
> **[4:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=244)** So that finishes the create table statement.
>
> **[4:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=248)** And let me just highlight all of this.
>
> **[4:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=250)** And we'll go ahead and press the Run button.
>
> **[4:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=252)** That'll create my table.
>
> **[4:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=253)** And so now let's collapse the Schemas folder.
>
> **[4:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=256)** And we'll go into our Tables folder.
>
> **[4:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=257)** Let's refresh this.
>
> **[4:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=259)** And there is the new employees table and all of our columns.
>
> **[4:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=263)** So that's how I solved the challenge.
>
> **[4:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=266)** I'm going to go out and save all this text in a file in the chapter four folder called, SolutionTable.txt.
>
> **[4:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-create-a-table?u=76281980&t=272)** And you can compare my solution against yours.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), database (7), next (4), [[Microsoft Azure|Azure]] (2), [[Databases]] (2)
> **Env Vars:** null (5), char (2), create (1), schema (1), int (1)
> **CLI Commands:** make (5), find (3)
> **File Paths:** solutiontable.txt (1)
> **SQL:** primary key (1)
> **UI Navigation:** click on (1)
> **Speakers:** - i (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Tables and data types
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=0)** - [Instructor] In this code challenge, you are asked to create a table for a new pet care business.
>
> **[0:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=10)** So we need to create a schema to hold and organize everything.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=14)** And then we'll set up the first table to store information about grooming appointments.
>
> **[0:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=18)** So we can get started with creating the schema.
>
> **[0:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=21)** And that is just a CREATE SCHEMA command.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=25)** And the name of the schema that we want to create is called Pets.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=28)** And that's all we need for that, so I'll type in a semicolon to move down to our second statement.
>
> **[0:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=33)** Here we're going to create the table that'll go inside of that new schema.
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=37)** So we'll say CREATE TABLE this time.
>
> **[0:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=40)** It'll go into the Pets schema.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=41)** So we'll type in pets., and the new table name will be called Grooming.
>
> **[0:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=48)** Then we just need to identify each of the individual columns that'll make up this table structure.
>
> **[0:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=54)** So the first column we were given is called GroomingID, and this will store an integer data type.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=62)** We can also specify that this is the primary key for the database by typing in the keywords PRIMARY KEY there.
>
> **[1:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=70)** Type in a comma and come down to the next line.
>
> **[1:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=72)** The next column inside of this table, it's called PetName.
>
> **[1:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=76)** And for this we need to store some character data.
>
> **[1:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=79)** So we'll just say a char(50) data type.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=82)** That way we can store the pet's name as text.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=85)** Next up, the LastGroomingDate.
>
> **[1:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=89)** And this will just be a date data type.
>
> **[1:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=91)** Type any comma after that.
>
> **[1:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=93)** Next up, the GroomingService that was given to that pet.
>
> **[1:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=100)** And we need to store text data for this.
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=102)** So I'll just store it as a char.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=104)** And let's say we need a few extra characters.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=105)** So I'll just say char(100) and type in a comma after that one.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=109)** And then finally the NextAppointmentDate.
>
> **[1:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=115)** And this will be stored as a date data type as well.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=118)** And that is it.
>
> **[1:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=119)** The only other thing I need to do is put all of these columns inside of a set of parentheses.
>
> **[2:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=124)** So we come up here at the very top and type in an open parenthesis, and then we'll come down to the very end and close the parenthesis.
>
> **[2:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=131)** So that list of all of the individual column names goes inside of these parentheses after the CREATE TABLE statement there.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=138)** At the very end, I'll type in a semicolon to finish that Create Table statement.
>
> **[2:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=142)** And we can go ahead and test my code.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=145)** And there we go.
>
> **[2:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=146)** So it created the schema.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=147)** It then created the table in that schema.
>
> **[2:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=149)** And then the rest of the code challenge provided the INSERT statement to add in five rows of data into the new table structure that we just set up.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=157)** And then it selected all of the data out of that.
>
> **[2:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=160)** And so here we go.
>
> **[2:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=161)** There is the table that we created along with the five rows of records.
>
> **[2:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-tables-and-data-types?u=76281980&t=165)** So that is my solution to this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), next (4), business (1), database (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** create (3), table (2), schema (1), primary (1), key (1)
> **SQL:** create table (2), primary key (1)
> **Definitions:** is called (2)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Add Data to a Table

[↑ Back to Table of Contents](#table-of-contents)

#### Table rows
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=0)** - [Instructor] In a table, if columns make up the attributes about the data, then each row represents the individual items that the table is storing information about.
>
> **[0:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=10)** To find out information about a single entity, you need to read across all of the columns in the table.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=17)** For instance, in this table about pets, Brie, the ferret, is three years old.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=22)** It's important to understand that the order that the rows appear in the table is irrelevant.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=27)** The fact that Brie, the ferret, appears at the top of the table has no real-world significance.
>
> **[0:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=33)** It doesn't mean that Brie is better than Wensleydale the cat, or older, or was even entered into the database first.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=41)** Rows can appear in any order at any time.
>
> **[0:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=44)** So avoid the temptation to try and give the sorting of the rows a special meaning.
>
> **[0:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=50)** Right now, the rows are sorted in this view, numerically based off of the PetID number.
>
> **[0:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=55)** So the only thing that you can say about the order of the rows is that Brie has a lower PetID than all of the other animals, but that fact doesn't really have anything to do with the order that the rows appear in.
>
> **[1:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=67)** Brie will always have the lowest PetID of all of these animals, no matter where her record appears in the sorting.
>
> **[1:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=75)** If we instead sort the data based off of the age of the pet, in an ascending manner, then the rows will get shuffled around.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=82)** Now, Wensleydale appears at the top.
>
> **[1:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=84)** We can say that Wensleydale is the youngest animal, and this sorting makes it easy to see that, but that was always the case.
>
> **[1:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=92)** It doesn't matter that the row is displayed at the top.
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=95)** And if we were to find Brie's record again, she's still a ferret and she's still three years old.
>
> **[1:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=101)** The sorting has no effect in your ability to read the various attributes.
>
> **[1:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=106)** You can think of the data in a table like a deck of playing cards.
>
> **[1:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=110)** Each row is a single card in the deck.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=113)** It doesn't matter how you shuffle the cards.
>
> **[1:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=115)** The ace of spades will always be the ace of spades, no matter where it appears in the pile.
>
> **[2:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=120)** Because the sorting of rows can change around at any time, it's important to always have at least one column that's guaranteed to hold a unique value for every row.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=130)** This is called the table's Primary Key.
>
> **[2:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=133)** With a Primary Key, you can identify a single, specific row in a table.
>
> **[2:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=139)** In the Pets Table, it might look like the pet's name is a unique value and asking for the pet with a name, Brie shows us one specific animal, but this is a small dataset.
>
> **[2:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=149)** And if we were to fill out this table with more animals, then it's not inconceivable that we might eventually have two or more pets with the same name.
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=158)** In fact if you filter the table to just show the animals with the name Brie, you might find that there's a whole bunch.
>
> **[2:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=164)** So the pet name, isn't a good candidate for the table's Primary Key.
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=169)** This is why it's often the case that an ID number is assigned to each row when they're entered.
>
> **[2:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=174)** This number is guaranteed to be unique for every row.
>
> **[2:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/table-rows?u=76281980&t=178)** This allows us to ask for PetID number 54, and the server can confidently return information about one specific animal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), database (1)
> **CLI Commands:** find (3), make (1), cat (1)
> **Definitions:** is a  (3), is called (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Add records
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=0)** - [Narrator] In order to add records to a data table, you'll use the insert into command.
>
> **[0:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=6)** In the two trees database that we created on our SQL Server handsets, we previously created a table, in the product schema called Products, and we can see that table contains a number of different columns.
>
> **[0:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=18)** Now, if you wanted to add a data row to this table, you can do that by opening up a new query window, I'll right click on the two trees database, and choose new query.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=28)** Then we can take out the command, insert into the name of the table that we want to insert a row to, that would be product.products.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=38)** Then the keyword values.
>
> **[0:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=40)** I'll come down to the next line and open up a parentheses.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=43)** Then we just list out the values for each of these columns, in the order that they appear in the table.
>
> **[0:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=49)** The first column is SKU, and we can see that stores character data.
>
> **[0:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=54)** In order to store text values or character data, we need to wrap that inside a single quotation marks.
>
> **[0:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=59)** So the first value for our SKU, is going to be FCP008.
>
> **[1:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=65)** We'll close the single quotation mark and type in a comma.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=68)** So that finishes the value for the SKU column.
>
> **[1:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=71)** Next we're going to fill in the product name, which has also character data.
>
> **[1:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=75)** Once again, I'll type in a single quotation Mark, and the text "First Cold Press".
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=81)** We'll close these single quotation Mark, type in a comma.
>
> **[1:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=83)** And then we can fill in the category ID, which is an integer value.
>
> **[1:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=88)** Integer values don't need to be wrapped in quotation marks, so just type in the category ID one and a comma, then we can fill in the size eight, I'll type in another comma, and finally the price, which is 899 for this product.
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=102)** That finishes the last value for the last column in that table.
>
> **[1:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=106)** I'll come here to the very end, and we'll just come down to the next line, and type in our semi-colon to complete the statement.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=112)** Then we can press the run button and we should get the message that one row was affected.
>
> **[1:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=117)** This means that the server understood what we were trying to do, and was able to accomplish that task.
>
> **[2:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=123)** Now, if I right click on the products table, and choose select top 1000, we can view the data that's in the table, and here's our row right there.
>
> **[2:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=131)** If you wanted to add multiple rows in a single command, you just need to separate their values with a comma.
>
> **[2:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=137)** Let's go back here to the first tab, and I'll come down to line number five.
>
> **[2:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=141)** I'm going to start out another insert into command.
>
> **[2:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=146)** Then on line number six, we'll fill in the values for the next row that I want to enter.
>
> **[2:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=152)** This will be for a SKU BI008.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=155)** It's the Basil-Infused Evo or Extra-Virgin Oil, it'll be the category Number two, the eight ounce size and a 1099 price.
>
> **[2:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=165)** So that finishes the next row that I want to enter, here, I'll type in a comma, and come down to the next line.
>
> **[2:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=171)** Then we just need to open up another pair of parentheses, and fill in the data for the next row.
>
> **[2:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=176)** This row will be the GI016 SKU, for the Garlic-Infused Evo.
>
> **[3:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=183)** Again, it's category number two, it has a size of 16 ounces, and the price is 1599.
>
> **[3:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=190)** Since this is the last row, that we're going to enter, inside of this insert into command.
>
> **[3:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=194)** I don't need to type in a comma here at the end.
>
> **[3:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=196)** We'll just come down to the last line here, number eight, and finished with the semi-colon.
>
> **[3:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=201)** Then in order to insert both of these rows, I'll just highlight lines five through eight, and press the run button.
>
> **[3:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=207)** This time I get the message that two rows were affected.
>
> **[3:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=209)** And if I switched back to the other tab, and press the run button again, we'll see all three rows here in the table.
>
> **[3:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=215)** Now, if you only want to add a row, that doesn't fill in every column, you can do that too, but it needs to be specific about, what columns you're providing values for, and in what order.
>
> **[3:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=225)** Let's switch back to the the first tab.
>
> **[3:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=227)** When we created the products table, we specified that the SKU, product name and price, were required.
>
> **[3:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=234)** You can see that they will not allow no values.
>
> **[3:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=237)** The category ID and the size on the other hand, are both optional.
>
> **[4:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=241)** They will allow no values.
>
> **[4:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=244)** If I want to add a row that only includes values, for the three columns that are required, then I could do that like this, let me come down a couple of lines.
>
> **[4:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=252)** And in fact, I'm going to move this messages window down on the screen on.
>
> **[4:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=255)** On my number 10, I'll start a new insert into command.
>
> **[4:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=260)** Instead of jumping right into the values clause though, I'm going to come down to line number 11, and we'll list out the columns, that we're going to be supplying values for.
>
> **[4:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=269)** We do that inside of a pair of parentheses.
>
> **[4:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=271)** So I'm going to supply values for the SKU column, the product name, column, and the price column.
>
> **[4:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=280)** After that we can add in our values clause, and then finally the values in this order, I'll enter the SKU "OGEC004".
>
> **[4:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=292)** This is for our Olive Glow Eye Cream, and the price of 1899.
>
> **[4:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=298)** We'll finish this insert into statement, with a semi-colon at the end, and run lines 10 to 14 by highlighting them.
>
> **[5:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=305)** Oh, and this time I get a syntax error.
>
> **[5:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=307)** and that's because I forgot to include the comma, between this name here, the product name, and the price value.
>
> **[5:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=313)** So come back up, we'll add in that comma, and then we'll rerun these lines.
>
> **[5:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=317)** Alright, this time I get the message one row was affected, and if I switched to the other tab, and rerun this query, will see all four data rows.
>
> **[5:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=325)** The last row has no values or blank cells, for the category ID and the size, because we didn't supply those values when we entered this row.
>
> **[5:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=334)** And that's how you enter data into a table, using structured query language, with the insert into command.
>
> **[5:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/add-records?u=76281980&t=340)** Remember to include the list of columns before the values clause, when you're not supplying values for every column, in the order that they appear in the table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), product (7), next (7), [[Microsoft Products|Products]] (4), database (2)
> **Env Vars:** sku (8), sql (1), fcp008 (1), bi008 (1), gi016 (1)
> **UI Navigation:** click on (2)
> **Definitions:** is an  (1), means that (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [narrator] (1)

#### Update and delete records
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=0)** - [Narrator] When you want to modify the values that are already stored in a table row, then you can use the update command.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=7)** Let's take a look at the data that's already in the products table that we entered in the previous movie.
>
> **[0:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=12)** I'm going to right-click on the products table that's inside of the Two Trees database in the SQL Server instance, and then from the pop-up menu, choose select top 1,000.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=22)** This shows me the four rows of data that we've entered.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=25)** The last row that we entered, we didn't supply a category or a size.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=30)** We can update the row and fill in these values by making reference to the primary key for the table.
>
> **[0:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=36)** In this table, the SKU column provides the primary key and you can see that based off of the PK notation here inside of the connections sidebar.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=45)** So the primary key value for the row that we want to change is OGEC004.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=52)** Now that we have this piece of information, we can start our update command.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=56)** I'm going to right-click on the Two Trees database and choose new query.
>
> **[1:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=61)** Then we can start our update command.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=64)** I'm going to update the products.products table, and then we can set the values for each column that we want modified.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=73)** So I'm going to set the category ID equal to the value of three, then I can type in a comma and come down to the next slide and I also want to set the size column to the value of four.
>
> **[1:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=86)** So I'll type = 4.
>
> **[1:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=88)** Now if I were to run this command right now, it would change the category and the size in every row of the table, so it's critical that we target the update to just the specific row that we want to modify.
>
> **[1:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=101)** We do that by adding a where clause.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=104)** This will describe the condition that a row must meet in order to be updated.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=109)** In this case, we only want to update the row where the SKU is equal to OGEC004.
>
> **[1:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=117)** I can finish the statement with a semicolon and press the run button.
>
> **[2:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=121)** The server tells me that one row was affected and now if I switch back to the other tab and press the run button here, we can see that those values have been updated.
>
> **[2:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=129)** The category ID is now three and the size is now four.
>
> **[2:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=133)** So now let's suppose that I want to remove this entire eye cream row from the table.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=138)** We can do that with a delete command.
>
> **[2:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=141)** Let's switch back to the other tab and I'll come down to line number six and we can type in a delete statement.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=147)** We're going to delete from the table products.products.
>
> **[2:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=152)** Now once again, we need to be really careful here.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=155)** This is a valid command all by itself, which will remove all of the rows from the table.
>
> **[2:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=161)** Once again, we need to be sure to target the delete operation to just the specific row that we want removed.
>
> **[2:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=167)** We do this in exactly the same way as before.
>
> **[2:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=170)** We want to delete the row where the SKU is equal to OGEC004.
>
> **[2:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=177)** Then I can highlight lines six and seven to run just the delete statement.
>
> **[3:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=182)** Once again, one row is affected and if I switch back to the other tab and re-run it, you'll see that I now only have the three rows of data.
>
> **[3:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=190)** The eye cream row has been deleted from the database.
>
> **[3:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=194)** And that is the update and delete commands for modifying existing rows in a data table.
>
> **[3:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/update-and-delete-records?u=76281980&t=199)** Make sure that you always include a where clause to target the specific rows that you want changed or removed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (6), data (4), database (3), [[Microsoft SQL Server|Sql server]] (1), next (1)
> **Env Vars:** sku (3), ogec004 (3), sql (1)
> **UI Navigation:** right-click (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Saving and using SQL scripts
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=0)** - [Instructor] I have the commands that we ended the last movie on still here in a query tab.
>
> **[0:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=5)** And when we attempt to close the tab, as your data studio prompts us to save the file.
>
> **[0:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=10)** So far I've been selecting the option Do Not Save since the commands that we've been working with weren't terribly long and could easily be rewritten if needed.
>
> **[0:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=19)** But what happens when you ask for the file to be saved instead?
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=22)** Let's press the Save button and find out.
>
> **[0:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=24)** That prompts me to save the file with a dot SQL extension.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=28)** Let's go ahead and just drop it onto our desktop and I'll call it "UpdateDelete" I'll press the Save file, and the text of that query is now saved onto my desktop.
>
> **[0:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=39)** This allows you to save your structured query language scripts, so that you can easily rerun the commands again later.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=46)** To retrieve the file, just go up to the File menu and come down to Open file.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=52)** Then we'll browse out to the desktop and we'll find the SQL file that we just saved.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=56)** I'll go ahead and select it and press Open.
>
> **[0:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=59)** Now, this bit is really important, when you reopen the file you'll want to pay special attention to the database that you're targeting in the server that you're connected to.
>
> **[1:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=70)** If you need to change to a different database on the same server, you can use this drop down menu here.
>
> **[1:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=75)** I want to make sure that I'm connected to the TwoTrees database on the SQL Server database.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=81)** If you need to switch to a different server altogether, you can press the Change Connection button, then you'll either pick from a list of recent connections up here at the top, or fill in the same IP address port and username details that we've used previously to connect to a new server.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=97)** I don't need to switch server so I'll just press the Cancel button here.
>
> **[1:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=101)** If you do connect to an X server, then you definitely want to come back up here to the drop down menu and make sure you're connected to the right database on that server.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=109)** This is important because it's really easy to accidentally execute a bunch of commands in a database that you didn't intend to work in.
>
> **[1:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=117)** The ability to save and reload scripts, illustrates the power of writing out text-based commands.
>
> **[2:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=124)** It doesn't take any extra effort to create a full script of all of your interactions with the database server.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=130)** That's something that you just simply can't do with a point and click interface.
>
> **[2:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=135)** So let's see how this could be helpful.
>
> **[2:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=137)** First, I'm going to close this tab.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=140)** Now, early on in the course, we set up two different database servers.
>
> **[2:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=144)** One for SQL Server and one for PostgreSQL.
>
> **[2:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=148)** We then created a database for TwoTrees on both servers and started adding tables and data.
>
> **[2:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=154)** But at some point I stopped updating the database on the PostgreSQL server.
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=158)** It only made changes to the one on the SQL Server instance.
>
> **[2:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=163)** So now these two databases are in a different state.
>
> **[2:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=166)** We can easily fix that with a script.
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=169)** I'm going to come up here to the File menu and then choose Open file.
>
> **[2:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=174)** Then we'll browse out to the desktop, where I have my exercise files, and go into the Chapter 5 file.
>
> **[3:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=180)** Here I have a script called Two Trees Scripts dot sql.
>
> **[3:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=184)** Let's select it and open it up.
>
> **[3:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=186)** Now I want to make sure that I'm working in a green tab here to indicate that I'm working on my SQL Server and since, and that my connection is the two trees database.
>
> **[3:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=195)** This script does a whole bunch of different things, but the vast majority should look familiar to you.
>
> **[3:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=201)** It deletes and rebuilds everything that we've added to the TwoTrees database.
>
> **[3:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=206)** First, we remove all of the objects on the database by running lines three, four, and five.
>
> **[3:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=212)** It's going to drop the products table, the categories table and the product schema.
>
> **[3:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=217)** This sets the database back to the original empty state.
>
> **[3:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=221)** Then we can go through and recreate everything.
>
> **[3:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=224)** First we'll create the schema products.
>
> **[3:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=227)** Now SQL Server has a bit of a quirk here in that it creates schema command must be executed by itself.
>
> **[3:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=233)** So we need to put a go command on either side of it so that the server knows to run through all of the lines of both first, then create the schema, then run through all of the lines below.
>
> **[4:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=244)** When we run the same script on the PostgreSQL server, we need to remove or comment out the two lines on line number eight and 10.
>
> **[4:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=253)** PostgreSQL will just simply get confused by this go command.
>
> **[4:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=257)** After we create the schema, we'll create the products table, including its five columns.
>
> **[4:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=262)** Then we'll create the categories table with it's three columns.
>
> **[4:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=266)** Let's scroll down, starting on my number 29, we start inserting some data.
>
> **[4:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=271)** We'll insert four rows of data into the products table, then three rows of data into the categories table, and finally, we'll review everything that we've done.
>
> **[4:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=281)** Now I can run this entire script without highlighting anything.
>
> **[4:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=284)** And the server will go through, delete and then completely rebuild every object in data row.
>
> **[4:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=289)** Let's do that now.
>
> **[4:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=290)** I'll press the Run button, it runs through everything, inserts the data and shows me the results.
>
> **[4:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=297)** So now that this has done on the SQL Server database, we can connect to the PostgreSQL server.
>
> **[5:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=302)** I'll press the change connection button up here at the top.
>
> **[5:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=305)** Then I'll select by PostgreSQL server from the recent connections list, and press the Connect button at the bottom.
>
> **[5:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=312)** Then I want to make sure I use the drop down menu here to choose the two trees database.
>
> **[5:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=317)** Finally, we can press the Run button again, Oh, and we get a syntax error at or near the word go.
>
> **[5:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=323)** I forgot to comment out those two lines.
>
> **[5:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=325)** So let's go back up here on two lines number eight and 10, and I'll simply add two dashes to the beginning of each of those lines.
>
> **[5:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=335)** That'll comment it out from the script and I can press the Run button again.
>
> **[5:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=339)** There that time it worked, it went through, deleted everything from the database, rebuilt the tables and added in the data.
>
> **[5:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=345)** And just to verify that everything works, we can expand the databases folder in the Postgres server, we'll find the TwoTrees database and inside the tables folder, we see the one table.
>
> **[5:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=355)** So let's go ahead and right click and choose Refresh, and there's both tables there.
>
> **[5:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=359)** If I wanted to, I can right click on either of them and choose Select Top 1000 to verify that the data is safely in place.
>
> **[6:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=367)** Now, at this point we know that both database servers have an identical copy of the TwoTrees database.
>
> **[6:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/saving-and-using-sql-scripts?u=76281980&t=373)** By saving all of our commands in a SQL file, it makes it very simple to re-execute everything in order to build the database again from scratch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (21), data (9), [[Microsoft SQL Server|Sql server]] (6), [[PostgreSQL]] (6), [[SQL]] (4)
> **Env Vars:** sql (9)
> **CLI Commands:** make (4), find (3)
> **UI Navigation:** switch to (1), scroll down (1), click on (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Add data to a table
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-add-data-to-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-add-data-to-a-table?u=76281980&t=0)** - [Instructor] Let's test what you've learned with another challenge.
>
> **[0:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-add-data-to-a-table?u=76281980&t=8)** I'd like you to add some data to the Employees table in the KinetEco database that you've been working on.
>
> **[0:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-add-data-to-a-table?u=76281980&t=15)** You should add a minimum of three rows for some newly hired employees.
>
> **[0:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-add-data-to-a-table?u=76281980&t=19)** The names and other details that you choose don't really matter, so just use the names of your friends or family.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-add-data-to-a-table?u=76281980&t=25)** Next, one of these employees was promoted, change their record to assign them to a different department.
>
> **[0:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-add-data-to-a-table?u=76281980&t=32)** Finally, one of your employees decided to retire early, so I want you to remove their row from the table.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-add-data-to-a-table?u=76281980&t=38)** One hint before we get started, date values can get entered in a number of different ways depending on your region.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-add-data-to-a-table?u=76281980&t=45)** For the best results, treat them like text strings with values wrapped in single quotation marks.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-add-data-to-a-table?u=76281980&t=51)** Then use a four-digit year, two-digit month and a two-digit day, all together with no punctuation.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-add-data-to-a-table?u=76281980&t=58)** I estimate that this challenge should take 10 minutes or less to complete.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-add-data-to-a-table?u=76281980&t=62)** As always, I'll show you how I complete the challenge in the next movie.
>
> **[1:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-add-data-to-a-table?u=76281980&t=66)** Have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (2), data (1), database (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Add data to a table
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=0)** - [Instructor] I hope you had fun working with the data in the Connecticut database.
>
> **[0:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=9)** Let's work through the solution together.
>
> **[0:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=11)** I'm going to come over to my connection sidebar and just collapse everything.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=14)** So clean up my space here and then we can drill into the Connecticut database here.
>
> **[0:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=19)** And I first want to take a look at the table that we built in the last challenge and specifically the different columns that we added into that table.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=26)** So we have employee ID, first name, last name, department and the hire date.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=31)** So these are the columns that we're going to fill in.
>
> **[0:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=32)** So let's get started with that.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=34)** I'll right click on the database.
>
> **[0:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=35)** Choose new query and we can start our insert into command.
>
> **[0:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=40)** We're going to insert into the humanresources.employees table.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=45)** And actually before we get too far into this you'll notice that we have the red little squiggles underneath all of these words here.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=51)** And that's because if I hover my mouse over it, as your data studio is telling me that this is an invalid object name.
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=57)** Which is not true at all because I know that the table called humanresources.employee is right there.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=62)** And the reason we're getting this is because Azure data studio has a cache of the different objects that exist in our database servers.
>
> **[1:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=70)** And it has an updated to reflect the new names that we've added in here.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=73)** So what I can do here is actually just right click anywhere in my query and open up the command palette.
>
> **[1:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=79)** And here I'm going to search for the command refresh.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=82)** I think it's called yes.
>
> **[1:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=83)** Refresh IntelliSense cache.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=85)** I'm going to go ahead and select that from the list there.
>
> **[1:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=87)** And that should go through and refresh the cache and eventually yep.
>
> **[1:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=91)** There it goes.
>
> **[1:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=92)** It's now recognized that humanresources.employees is in fact, a valid table name.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=97)** So we won't see those little red squiggly lines anymore.
>
> **[1:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=101)** Okay.
>
> **[1:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=101)** So we're going to insert into humanresources.employees and I'm going to specify the different columns that we're filling in.
>
> **[1:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=108)** And this part is actually optional.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=109)** Since we're going to supply values for all five of these columns we could leave these out but for completeness sake, I'm just going to fill these in here.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=116)** So we have the employee ID.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=118)** And actually now that I have refreshed the cache and notice that it's popping up immediately with this text.
>
> **[2:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=124)** So all you to do is press the tab key and it fills in employee ID for me.
>
> **[2:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=128)** So there we go, comma first name and there's that press tab, last name LA tab.
>
> **[2:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=135)** And let's see then department tab.
>
> **[2:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=139)** And then we have the hire date HI and press tab again.
>
> **[2:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=141)** That filled all that in.
>
> **[2:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=142)** That was nice and easy with the IntelliSense feature.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=145)** Okay. So that finishes that next we can turn our attention to the different values that we're going to put in here.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=151)** Yeah, let me come up here.
>
> **[2:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=152)** And I'm just going to put a full tab stop in there just to space that out.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=157)** And we'll come down to line number four to put in our data values.
>
> **[2:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=160)** We're going to do three different rows here.
>
> **[2:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=161)** So we're going to wrap each one in parentheses.
>
> **[2:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=164)** So our first employee ID of number 101.
>
> **[2:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=168)** It's going to be the name Robert Boyle.
>
> **[2:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=171)** And Robert is going to go into our chemistry department.
>
> **[2:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=175)** And we hired Robert on March 25th, 2020.
>
> **[2:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=179)** It's a 2020.03.25.
>
> **[3:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=184)** So do that close out of the parentheses see type in a comma and come down to the next time.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=189)** The next employee 102 is going to be Marie Curie.
>
> **[3:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=193)** M A R I E C U R I E.
>
> **[3:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=197)** And she's also going into our chemistry department.
>
> **[3:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=201)** And she was hired 2020, August 25th.
>
> **[3:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=204)** So 2020.08.25.
>
> **[3:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=208)** And we'll come down to line number six, entering in our third employee.
>
> **[3:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=211)** And I will give that to the number 103 and this is going to be Niels Bohr.
>
> **[3:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=218)** And he is going into our physics department.
>
> **[3:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=221)** And you could have chosen whatever departments like I said, you're just making up these numbers here these names and hire dates in departments.
>
> **[3:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=227)** So whatever values you chose are perfectly fine for this exercise.
>
> **[3:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=231)** So 2020.09.23 and we'll fill that in.
>
> **[3:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=237)** And that looks good.
>
> **[3:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=237)** So we don't have a comma at the end here because this is the last row that we're entering in.
>
> **[4:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=242)** and have to put a semi-colon here at the very end.
>
> **[4:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=245)** And that should insert our values.
>
> **[4:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=247)** Let's go ahead and select all that and press run.
>
> **[4:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=249)** And it tells me three rows were effected.
>
> **[4:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=251)** So all three employees are put into the data table now.
>
> **[4:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=254)** So now we're going to promote somebody.
>
> **[4:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=257)** So let's promote Marie Curie.
>
> **[4:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=259)** She's going to move from the chemistry department into physics.
>
> **[4:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=262)** So we can say update the humanresources.employees table.
>
> **[4:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=268)** And we're going to set the department column equal to physics but I don't want to set everybody to physics.
>
> **[4:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=276)** I just want to set Marie Curie.
>
> **[4:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=278)** So we're going to target her employee ID number.
>
> **[4:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=282)** So where employee ID is equal to 102.
>
> **[4:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=287)** I'll finish semi-colon let's go ahead and highlight that and run it.
>
> **[4:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=292)** All right. One row was affected.
>
> **[4:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=293)** So we moved her from chemistry into physics.
>
> **[4:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=298)** And now let's say that Robert Boyle has retired.
>
> **[5:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=304)** So we're going to remove him from the data table.
>
> **[5:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=307)** So delete from humanresources.employees where the employee ID is equal to 101 and let's go ahead and run that.
>
> **[5:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=319)** And one row is affected.
>
> **[5:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=320)** So Robert Boyle should be gone.
>
> **[5:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=322)** So now if I right click on the humanresources.employees table and choose to select the top 1000 rows we should see in the tab.
>
> **[5:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=333)** Let's see there it is.
>
> **[5:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=334)** So we do not have Robert Boyle.
>
> **[5:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=336)** He's been removed.
>
> **[5:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=337)** We start with just 102 and 103.
>
> **[5:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=339)** So Marie Curie and Niels Bohr and both of them are now in the physics department.
>
> **[5:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=344)** So that is my solution to the challenge here on the screen now.
>
> **[5:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-add-data-to-a-table?u=76281980&t=347)** And I'll save all of this text in the exercise files and the chapter five folder as solutiondata.txt

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (6), database (4), next (3), [[Microsoft Azure|Azure]] (1), [[Search]] (1)
> **UI Navigation:** click on (2), select the (1), in the tab (1)
> **Versions:** 2020.03.25 (1), 2020.08.25 (1), 2020.09.23 (1)
> **File Paths:** solutiondata.txt (1)
> **Cross-References:** in the last (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Solution: Correct recorded information
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=0)** - [Instructor] For this code challenge, we were tasked with maintaining the data in a table.
>
> **[0:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=9)** We need to add in a new book to our reading log and update the records for a couple of other books.
>
> **[0:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=15)** So let's get started.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=16)** I'm just going to run the code that was given to us, the select statement, just to see the data that we have.
>
> **[0:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=21)** And here is our book log.
>
> **[0:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=23)** So it looks like we have a total of 10 different books here.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=26)** We have their ID, the book title, author, genre, rating, and then a true or false flag, whether it's completed or not, and the date started and the date completed.
>
> **[0:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=36)** So that is all of the data that we have to work with.
>
> **[0:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=39)** Now our first task is to add in a brand new book into this table.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=43)** And for that, we need an INSERT INTO command.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=46)** We're going to INSERT INTO the table called BookReadingLog.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=52)** And we need to INSERT INTO all of the columns, so I can either omit the parenthetical list of column names.
>
> **[0:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=59)** Since we're going to be putting a value into every single column, we can omit that.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=63)** But for a completeness sake, I'll just add that in.
>
> **[1:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=65)** So we're just going to list out the columns that we'll be adding data to.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=68)** So it'll be the BookID, the BookTitle, the Author, and I'll just come down to the next line here, the Genre, the Rating, IsCompleted, DateStarted, and the DateCompleted.
>
> **[1:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=91)** And so that is the list of columns that we're going to put into.
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=95)** Let me see if I can make that a little bit wider there.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=97)** Okay.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=98)** So there is the full list there.
>
> **[1:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=100)** Then, we just need to say what values we're going to be putting into it.
>
> **[1:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=103)** So we need a values clause and then a parenthetical list of the values that'll go into the columns in the same order that we just identified them up above.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=113)** So the first value is the BookID, which we're given as 11.
>
> **[1:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=119)** The name of the book is "The Crimson Moon."
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=125)** The author is Charlie Woods.
>
> **[2:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=132)** And we'll just come down to the next line here.
>
> **[2:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=134)** Let me get rid of that little pop-up window.
>
> **[2:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=136)** The genre is fantasy.
>
> **[2:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=142)** The rating is going to be eight.
>
> **[2:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=144)** The identification of IsCompleted, this is a book that we have not started yet, so we can say false for that.
>
> **[2:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=154)** The start date that we started reading this book is going to be 2024-08-01.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=162)** And finally, we have not completed this book yet, so we can say null, and that'll put in the null value for the day complete.
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=169)** And I'll type in a semicolon at the very end to finish off that INSERT INTO statement.
>
> **[2:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=173)** And before we go any further, I'll just test my code to see how we're doing.
>
> **[2:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=177)** And it says we have an incorrect output, so we're still not done yet.
>
> **[3:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=181)** But I do have 11 rows now instead of 10.
>
> **[3:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=184)** And here is that new book that we just put in.
>
> **[3:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=186)** So that is the first step of the challenge.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=189)** Next step, we need to update the dates on a book.
>
> **[3:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=191)** We finished reading a book, so we need to put in the updated dates for that.
>
> **[3:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=197)** And the book that we're interested in is called "Echoes of the Past," and that is this one here with the BookID 5.
>
> **[3:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=204)** And if I scroll across here, you can see that we do not have a start date or a complete date for this book, so we're going to fill in those two dates there.
>
> **[3:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=212)** But we're not going to make any changes to the rest of the information for that book.
>
> **[3:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=216)** Okay, so we can do that with an UPDATE statement.
>
> **[3:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=219)** We're going to UPDATE the BookReadingLog, and we're going to set a new value for DateStarted.
>
> **[3:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=229)** And we're going to set that = to the date 2024-07-01.
>
> **[3:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=236)** Then, we're also going to make another change, so I'll type in a comma and come down to the next line.
>
> **[4:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=240)** And we're also going to UPDATE the DateCompleted column.
>
> **[4:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=247)** And we'll set that to the date of 2024-07-15.
>
> **[4:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=254)** Now, I don't want to run this right now because it'll change every date in the table.
>
> **[4:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=258)** So I do need to add in a WHERE clause to make sure that I'm targeting this change to a specific book.
>
> **[4:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=264)** So I can say WHERE BookID = 5, and that'll target just this specific book, "Echoes of the Past."
>
> **[4:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=272)** You could also say where the book title is equal to "Echoes of the Past."
>
> **[4:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=277)** But usually when you have a primary key in the table, in this case the BookID, it's better to use this as the identifier in your WHERE clauses.
>
> **[4:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=285)** So we'll say WHERE BookID = 5.
>
> **[4:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=288)** All right, let's go ahead and test my code.
>
> **[4:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=290)** And that should have updated the table here.
>
> **[4:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=292)** So here is that fifth row.
>
> **[4:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=294)** Let me go ahead and scroll across here.
>
> **[4:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=296)** And so now we have the two dates that we just put in.
>
> **[4:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=298)** So that updates that record.
>
> **[5:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=301)** All right, and finally, we need to remove a book from this table.
>
> **[5:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=305)** And we can do that with a DELETE FROM statement.
>
> **[5:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=307)** So we're going to DELETE FROM BookReadingLog.
>
> **[5:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=312)** And what do we want to delete?
>
> **[5:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=313)** We want to delete the "Beneath the Waves" book, and that is the one with BookID 3 there.
>
> **[5:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=320)** So I'll go ahead and say that as in my WHERE clause.
>
> **[5:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=322)** So WHERE BookID = 3.
>
> **[5:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=328)** Type in a semicolon.
>
> **[5:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=329)** Let's go ahead and test my code again.
>
> **[5:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=331)** And then there we go.
>
> **[5:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=332)** We got a correct output.
>
> **[5:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=333)** So that book has been removed, we updated the dates for the "Echoes of the Past" book, and we added in a new book called "The Crimson Moon."
>
> **[5:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-correct-recorded-information?u=76281980&t=341)** So that is my solution to this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), next (4), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** where (6), insert (4), into (4), update (3), delete (2)
> **SQL:** where (6), insert into (4), update (3), delete from (2)
> **CLI Commands:** make (4)
> **API Endpoints:** delete  (2)
> **Definitions:** is a  (1), is called (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Retrieve Information

[↑ Back to Table of Contents](#table-of-contents)

#### Querying data
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/querying-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/querying-data?u=76281980&t=0)** - [Instructor] The entire point of building a database is so that information is available when you want it.
>
> **[0:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/querying-data?u=76281980&t=6)** The process of asking questions about your data is called querying and it all begins with the SELECT command.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/querying-data?u=76281980&t=14)** SELECT allows you to retrieve rows from your data tables, but the command goes way beyond simply showing you the data as it's currently stored.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/querying-data?u=76281980&t=22)** With a SELECT statement and its various clauses, you can slice and dice your data into any configuration imaginable in order to answer an unlimited number of questions.
>
> **[0:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/querying-data?u=76281980&t=33)** The trick is learning how to ask the right questions.
>
> **[0:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/querying-data?u=76281980&t=36)** Select queries can perform for different tasks in order to help you better understand your data.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/querying-data?u=76281980&t=41)** They're collect, filter, summarize and manipulate.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/querying-data?u=76281980&t=46)** Let's take these one at a time.
>
> **[0:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/querying-data?u=76281980&t=48)** Imagine that you have a table about customers.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/querying-data?u=76281980&t=51)** A basic select query will be able to collect rows of data in order to answer the question, what customers do I have.
>
> **[0:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/querying-data?u=76281980&t=59)** These types of queries simply show you all of the rows exactly as they're stored in your table and you can choose to view as many or as few of the attribute columns as you want.
>
> **[1:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/querying-data?u=76281980&t=71)** Next, queries could be used to filter the data in order to answer questions such as, which customers live in Canada?
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/querying-data?u=76281980&t=78)** Applying filters to the data, returns only the rows that match your desired criteria.
>
> **[1:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/querying-data?u=76281980&t=84)** You can also apply multiple filtering criteria to limit the rows returned even further.
>
> **[1:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/querying-data?u=76281980&t=90)** Queries that summarize data are used to answer questions like, how many customers live in Canada?
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/querying-data?u=76281980&t=97)** Now you're not just asking for information about specific customers, instead, you're asking for a sum total of the number of data rows that belong to a particular group.
>
> **[1:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/querying-data?u=76281980&t=107)** Summary queries analyze data based off of common attribute values in order to find statistical information about the data itself.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/querying-data?u=76281980&t=116)** And finally, queries can be used to manipulate the data.
>
> **[2:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/querying-data?u=76281980&t=120)** Now, I don't mean this in the sense of being deceptive.
>
> **[2:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/querying-data?u=76281980&t=123)** In this case, manipulation means that you're taking the data that you've stored and reconfiguring it for a different format.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/querying-data?u=76281980&t=130)** For instance, if you're storing prices in U.S dollars, a query can quickly show you the equivalent price in euros by running the data through a conversion formula.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/querying-data?u=76281980&t=140)** By reconfiguring the data, you limit the values that you're actually needing to store and can calculate additional pieces of useful information on the fly only when you need it.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/querying-data?u=76281980&t=151)** So collect, filter, summarize and manipulate, these are the four tasks performed by the select query when it comes time to analyze your data.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/querying-data?u=76281980&t=162)** Now let's go out and learn how to ask some questions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (17), database (1), next (1)
> **SQL:** select (3)
> **Env Vars:** select (3)
> **Analogies:** imagine (1), such as (1), for instance (1)
> **CLI Commands:** find (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Return data with SELECT and FROM
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=0)** - [Instructor] Our Two Trees database has a products table that includes data on a couple of different olive oils that we've already entered in.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=7)** In order to make the process of querying the data a little bit more interesting, I want to greatly expand the number of rows that this table contains.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=17)** We can do that by running a script that I've saved in the exercise files.
>
> **[0:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=21)** First, make sure that you selected the Two Trees database in SQL server instance.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=25)** Then come up to the File Menu and choose Open File.
>
> **[0:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=29)** From there, we'll browse into the chapter six folder and find the Two_Trees_Products.sql file.
>
> **[0:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=35)** You can open that up and we'll take a look at what it's going to do.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=38)** First, it's going to remove all the rows from the products table.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=42)** And we're doing that by running a delete statement, but we're not specifying a WHERE clause to limit the delete.
>
> **[0:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=48)** So this is going to remove everything from the table, and then we're going to insert into the products table, a whole bunch of new rows.
>
> **[0:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=55)** Let's press the run button, and it's going to delete the four rows and insert 114 rows.
>
> **[1:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=61)** Now, in order to keep both of our databases in sync, I'm going to do the same thing inside of the Postgres SQL server.
>
> **[1:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=67)** I'll select the Two Trees database, then go up to file and choose Open File again.
>
> **[1:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=72)** We'll select the SQL file and press Open, and then I'll press the Run button.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=77)** So now both of our databases are still in sync.
>
> **[1:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=80)** Okay, we can go ahead and close this tab.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=82)** And I'm going to work on querying the database that's in our SQL server instance.
>
> **[1:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=87)** So we'll come up here, right click on Two Trees and then choose New Query.
>
> **[1:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=92)** So now that we have more rows in the table that we can play with, we can start asking questions about the data that we just added.
>
> **[1:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=100)** First, let's just retrieve a couple of columns from the table.
>
> **[1:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=103)** If you need to review the names of the columns, you can expand the folder over here and then expand the columns folder.
>
> **[1:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=110)** So these are the columns in the products table that we have to work with.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=113)** We can retrieve information from these columns by starting the select command, and then simply listing out the columns you want to see.
>
> **[2:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=121)** In this case, let's see the product name, size, and price columns.
>
> **[2:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=126)** I'll simply list them out and put a comma between each name.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=130)** Now the Azure Data Studio IntelliSense feature, when I type in price is thinking that I'm trying to type in this whole thing, dm_logconsumer.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=138)** If I press Enter, it's just going to fill that in.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=140)** So, what I need to do at this point is actually get rid of all of this, type the name of the column, again, price, and then press the Escape key to get rid of the IntelliSense window.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=151)** Now I can press the Enter key to move down to line number two.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=155)** This is where we add a FROM clause.
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=158)** The FROM clause specifies the name of the table the data is coming from.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=162)** Typically, you're going to want to use the two part name that includes the schema and table name separated by a period.
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=169)** In this case, the schema is products, and the name of the table is also products.
>
> **[2:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=175)** Notice that as soon as I've identified which table we're pulling information from, Azure Data Studio knows that the product name, size and price columns are no longer misspelled.
>
> **[3:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=186)** It can figure out exactly what columns we're referring to over here in the database.
>
> **[3:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=190)** So, I'll finish that off with a semi-colon and I'll press the Run button.
>
> **[3:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=195)** This query corresponds to the question, what are the product name, size and prices of all of our products?
>
> **[3:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=201)** When you run a select query, the database engine fetches the data that matches your request.
>
> **[3:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=207)** In this case, we asked for all of the rows that contain values in those three columns from the products table.
>
> **[3:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=212)** The grid shows the answer to your question, and it's called a result set, or a record set depending on your database platform.
>
> **[3:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=220)** These results sets are only displaying information in different ways.
>
> **[3:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=223)** It's in no way changing any of the data that's stored in the database.
>
> **[3:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=228)** Remember that you can only change data with the insert, update and delete commands.
>
> **[3:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=234)** If you switch over to the messages window, you can find some information about your query.
>
> **[3:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=239)** Here it shows how long it took the database engine to complete the request for information, as well as how many rows were returned.
>
> **[4:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=246)** In this case, 114.
>
> **[4:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=249)** You can also find the number of rows that were returned at the bottom of the screen, in the status bar down here.
>
> **[4:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=255)** Anytime I run a query, I take a quick glance at this number just to verify that the number of rows that are returned matched my expectations.
>
> **[4:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=264)** If you think that you're going to get back 10 rows and you actually get back 1000, it's a good indication that you probably asked a question that's different from the question that you intended to ask.
>
> **[4:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=275)** That'll give you a good idea that you should come back up here at the top and review your query syntax.
>
> **[4:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=281)** Now, if you switched back over to the results tab and you decide that you want to share the results that you retrieved from your database, Azure Data Studio gives you an easy way to export this data to a couple of different file formats using the buttons over here on the right-hand side of the screen.
>
> **[4:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=296)** You can export the results as a CSV, as an Excel file, as a Jason file, or as an XML file.
>
> **[5:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=304)** So this is a handy way to get information out of your database.
>
> **[5:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=309)** Okay.
>
> **[5:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=309)** So let's turn our attention back up to the query.
>
> **[5:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=312)** Notice that the columns in the results are in the same order that we asked for them in the select statement.
>
> **[5:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=317)** We asked for a product name, size, and price, and we got product name, size, and price.
>
> **[5:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=323)** You can rearrange these columns, however you want.
>
> **[5:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=326)** I'll come down to line number four and we'll type in another select statement.
>
> **[5:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=330)** This time we'll ask for size, then price, then product name.
>
> **[5:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=336)** We'll pull them from the same table.
>
> **[5:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=339)** Now, when I run lines four and five, by highlighting them, you'll see we get the results in the other order.
>
> **[5:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=345)** Now we have size then price, then product name.
>
> **[5:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=349)** If you want to see all of the columns in the same order that they appear in the data table, you can use the wildcard asterisk character instead of listing out all the names individually.
>
> **[6:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=360)** Let's write out another select statement on line seven.
>
> **[6:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=363)** This time, I'll say SELECT* FROM products.products.
>
> **[6:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=369)** When I run these lines, it'll show me everything that's in the table, starting at the SKU column, and going to the price column.
>
> **[6:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=376)** So using the asterisk character as a quick way to view everything in the table.
>
> **[6:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=380)** And it's especially helpful when you're not exactly sure what columns are present in the first place.
>
> **[6:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=386)** And that's the basic select statement.
>
> **[6:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/return-data-with-select-and-from?u=76281980&t=388)** The select command is used to request columns and the FROM clause tells the database engine what table to find those columns in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (12), data (12), [[Microsoft Products|Products]] (10), product (7), [[Microsoft SQL Server|Sql server]] (3)
> **Env Vars:** sql (4), where (1), csv (1), xml (1), select (1)
> **CLI Commands:** find (4), make (2)
> **UI Navigation:** select the (2), click on (1)
> **SQL:** where (1), select (1)
> **File Paths:** two_trees_products.sql (1)
> **Code Identifiers:** dm_logconsumer (1)
> **Exercise Files:** exercise files (1)

#### Filter rows with WHERE
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=0)** - [Instructor] When you want to start filtering the rows of data that are returned in a select query, you'll add a where clause.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=7)** The where clause allows you to specify the criteria that rows must meet in order to be included in the results set.
>
> **[0:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=15)** Once again, we're going to query data out of the products table in the TwoTrees database.
>
> **[0:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=19)** So I'll right-click on it and choose new query.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=22)** Let's start by selecting everything from the products table.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=25)** We do that with select star from products.products.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=30)** When I run this query and then take a look down in the status bar, you'll see I have a total of 114 results returned in this result set.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=38)** Now let's suppose that I was only interested in viewing the products that were in category number two.
>
> **[0:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=44)** We can do that by coming up here and right before the semi-colon, I'll just move that down to line number three, I'll add in my where clause anywhere I can say where category ID is equal to two.
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=57)** When I run the query now, we'll see I get a total of 18 rows back.
>
> **[1:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=61)** These are all of the products that are in category number two.
>
> **[1:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=65)** If you wanted to see all of the products that were above $25, you can change the where clause to say where price is greater than 25.
>
> **[1:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=75)** Now, when I run the query, I'll see a total of 12 products.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=78)** And these are all the products that have a price above $25.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=82)** If you wanted to see the opposite set of results, everything except these 12 records, then you can add the not keyword right after where.
>
> **[1:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=90)** So I can say where not price greater than 25.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=94)** When I run this, this will show me the other 102 records.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=98)** Everything that does not have a price about $25.
>
> **[1:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=101)** You can also combine multiple criteria with the and logical operator.
>
> **[1:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=106)** For instance, I could say where the price is greater than 10 and the size is less than 12.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=118)** When I run this, we'll see we have a total of 19 rows that meet both criteria at the same time.
>
> **[2:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=124)** All of these products have a price greater than $10 and a size less than 12 ounces.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=130)** The OR logical operator is useful for applying two different criteria on the same attribute column.
>
> **[2:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=137)** To use that I could say something like this, where the category ID is equal to two OR the category ID is equal to three.
>
> **[2:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=148)** I'll run this to see the results, and I get a total of 25 rows.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=151)** These are all the products that are in category ID number two.
>
> **[2:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=156)** And if I scroll down to the bottom, we'll see the ones that are in category ID number three.
>
> **[2:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=161)** And finally, if you wanted to find rows based off of a text criteria, just make sure that you wrap the text in single quotation marks.
>
> **[2:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=168)** For instance, I wanted to find all of the products where the product name is equal to pure.
>
> **[2:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=175)** We'll put quotation marks around the word pure and press the run button, and here are all of those products.
>
> **[3:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=181)** There's a total of five rows that meet that criteria.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=185)** Now I want to point out that it's possible to get no results if you ask for rows that don't exist.
>
> **[3:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=190)** If I ask for products where the price is greater than 100, when I press run you'll see I get nothing back.
>
> **[3:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=200)** Notice also that I don't get an error, which is what you might expect.
>
> **[3:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=204)** The database engine is giving me exactly what I asked for.
>
> **[3:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=208)** I asked for all of the products that have a price above $100.
>
> **[3:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=211)** There aren't any, so that's what the results are showing.
>
> **[3:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=214)** So don't let an empty result set throw you off.
>
> **[3:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=217)** It just means that there isn't anything left after it's filtered out all of the rows that don't meet your criteria.
>
> **[3:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=224)** And that's how you use a where clause to focus on just the rows that you want to review.
>
> **[3:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=229)** We've seen the where clause previously when deleting or updating existing rows of data.
>
> **[3:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=234)** It works exactly the same way in that context.
>
> **[3:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filter-rows-with-where?u=76281980&t=237)** And you can use the same techniques to target the changes to just the specific rows of data that you want to modify.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (15), data (4), database (2), product (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** find (2), make (1)
> **UI Navigation:** right-click (1), scroll down (1)
> **Analogies:** for instance (2)
> **Cross-References:** coming up (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Sort values with ORDER BY
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=0)** - [Instructor] While the order that rows appear in the result set has no real world meaning, it's often useful to view them in a sequence that's easier to evaluate.
>
> **[0:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=9)** When you want to read through the results in sequence, you can add an order by clause.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=14)** Let's take a look by writing some more queries against our products table.
>
> **[0:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=18)** Now instead of right-clicking on the two trees database and choosing new query, I can just press the control N shortcut on my keyboard.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=25)** That'll jump me right into a query window for whatever database I currently had selected.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=30)** So now let's start by reviewing all of the products that come in an eight ounce package.
>
> **[0:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=35)** To do that, I'll write out a select statement that says select star from products dot products where size is equal to eight.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=42)** When I run the query, it's going to show me how many products I have in the eight ounce size, and looking down here, I can see that we have 24 of them.
>
> **[0:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=50)** Now if you wanted to find out which one was the cheapest, it's a little bit hard to do.
>
> **[0:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=55)** You'd have to read through every row in the results to find the one with the lowest price.
>
> **[1:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=60)** It would be easier to just sort the results.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=63)** We can do that by adding in an order by clause.
>
> **[1:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=66)** The order by clause goes after the where clause, so at the very end of your select statement.
>
> **[1:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=72)** Make sure that you move the semi-colon to the very end, and we'll say order by price.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=78)** This will shuffle the records around so that they're in ascending order based off of the price values.
>
> **[1:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=84)** Now it's easy to see that we have a number of eight ounce products that are all tied for the lowest price of 8.99.
>
> **[1:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=90)** We can flip this order around by adding DESC after the order by clause.
>
> **[1:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=96)** Now we're saying order by the price descending.
>
> **[1:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=99)** This time when I press run, we'll see all of the products with the highest price.
>
> **[1:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=103)** In here, we can see that there's a number of them at 11.99.
>
> **[1:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=107)** If you sort on a text column, the database engine will return the results in alphabetical order.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=112)** So instead of ordering based off of the price, let's order our products based off of the product name.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=118)** Now, when I run it, we achieve all of the products that are an eight ounce size in alphabetical order.
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=125)** You can even include multiple sortings which come into play when values are the same.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=130)** For instance, we can order by the price descending.
>
> **[2:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=134)** I'll type in a comma, and then for all of the products that are the same price, we'll then sort them based off of the product name.
>
> **[2:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=141)** I'll press the run button, and here, we have the price descending, and for all of the products that are the same price, 11.99 for example, we get them in alphabetical order.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/sort-values-with-order-by?u=76281980&t=151)** So the order by clause goes at the very end of your select statement and it's useful for controlling the sequence that the results will be displayed in, either ascending or descending based off of the columns that you specify.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (11), database (3), product (2)
> **CLI Commands:** find (2), make (1)
> **Versions:** 11.99 (2), 8.99 (1)
> **Analogies:** for instance (1), for example (1)
> **Env Vars:** desc (1)
> **Speakers:** - [instructor] (1)

#### Combine data with JOIN
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=0)** - [Instructor] In a relational database, information is split up across multiple related tables.
>
> **[0:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=6)** This provides an efficient way to store the data, but it makes retrieving information a little bit more difficult.
>
> **[0:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=12)** Luckily, queries help us piece everything back together again.
>
> **[0:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=15)** I'm going to start a new query in the two trees database by pressing control N on my keyboard.
>
> **[0:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=20)** That'll pop open a new tab and attach it to the database that I have currently selected over here in the connections pane.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=26)** Now I want to review information about a single product.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=30)** I'll say select star from products dot products where the S-K-U or where the SKU is equal to ALB008.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=42)** This shows me that that product corresponds to the eight ounce size delicate oil in category number one.
>
> **[0:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=49)** But what does category number one mean?
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=51)** We stored that information in a separate table.
>
> **[0:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=54)** We can query that table to find out.
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=57)** Let's write another query here.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=63)** This time, we'll select star from products dot categories where the category ID is equal to one.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=68)** I can highlight lines four and five and run that, and we can see the category ID corresponds to the olive oils category and the gourmet chef product line.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=78)** Now it would be really nice to see all of that information together, and we can do that by joining these two tables together based off of the common attribute, the category ID columns in both tables.
>
> **[1:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=90)** Let's start another query.
>
> **[1:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=92)** We're going to select everything again.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=94)** So select star from products dot products.
>
> **[1:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=99)** Then we can join the products table to the categories table.
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=102)** On line number nine, I'll type in the word join.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=105)** I want to join the products table to the categories table, so that's the product schema dot categories table.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=113)** Then on the next line, we'll use the on keyword to specify which columns those two tables are joined on.
>
> **[2:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=120)** So in the products table, it's the category ID column, and we'll say that's equal to the categories table, and it's also the category ID column over there.
>
> **[2:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=131)** Finally, at the end, we can add in the where clause to just show the one product that we want information about.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=138)** So where the SKU is equal to ALB008.
>
> **[2:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=143)** Now I'll highlight lines seven through 11 and run that, and I see all of those details.
>
> **[2:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=149)** This returns all of the columns from the products table, SKU, product name, category ID, size, and price, and then all of the columns from the categories table.
>
> **[2:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=159)** So we have category ID again, category description, and then the product line.
>
> **[2:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=163)** We can see the values for all of the related data in one result set, even though the actual storage of that data is split between the two tables.
>
> **[2:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=172)** Now that we're pulling columns from multiple tables, if you want to return specific columns, you need to be more explicit in the select statement.
>
> **[3:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=180)** For instance, if I come back up here to the select statement, let me give myself a little bit more room here, instead of asking for all of the columns, what if I wanted to list out just specific columns?
>
> **[3:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=192)** For instance, the product name, category ID, SKU, price, and product line columns.
>
> **[3:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=198)** This time when I try and run this, I'm going to get an error, and it tells me that I have an ambiguous column name category ID.
>
> **[3:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=204)** The database engine isn't sure if you mean the category ID column from the products table or the categories table.
>
> **[3:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=210)** Even though they hold the same value, it makes a difference.
>
> **[3:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=213)** So instead of just using the column name in the select statement, you'll want to include the table name as well.
>
> **[3:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=219)** This gets a little bit long so take advantage of the fact that you can add new lines anywhere you want.
>
> **[3:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=225)** I'm going to split the column selections onto multiple lines.
>
> **[3:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=229)** So we're going to select the products dot product name column, then we also want the products dot category ID column.
>
> **[3:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=238)** Next, I want the SKU column from the products table.
>
> **[4:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=244)** The price column is also from the products table, and finally, the product line is coming out of the categories table.
>
> **[4:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=254)** So now I'm being more specific about where each column is coming from by specifying the table, as well as the column name.
>
> **[4:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=261)** Now I can run line seven through 15 to see the final result, and here are just the columns that I've asked for, even though they're coming from two different tables.
>
> **[4:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=272)** So that's how you return columns from multiple related tables.
>
> **[4:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=275)** The join clause goes inside of the from clause, and it's used to merge tables together.
>
> **[4:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/combine-data-with-join?u=76281980&t=280)** Make sure to also include the on clause to specify exactly which columns create the link.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (14), product (11), database (4), data (3), next (2)
> **Env Vars:** sku (5), alb008 (2)
> **CLI Commands:** find (1), make (1)
> **Analogies:** for instance (2)
> **UI Navigation:** select the (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Limiting the number of rows returned
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=0)** - [Narrator] All of the select queries, that we've looked at so far, will run identically on either SQL Server or PostgreSQL.
>
> **[0:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=8)** The command syntax is exactly the same, for these select, from, join, where and ORDER BY clauses.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=16)** However, this next example is a little bit different.
>
> **[0:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=18)** When you want to limit the number of rows returned by the query, each platform takes a slightly different syntax.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=26)** Let's start with SQL Server.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=28)** I'm going to select something inside of my two trees database and then press control, enter on my keyboard, to open up a new query window attached to that database.
>
> **[0:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=36)** I want to first review all of the product data sorted by price descending.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=45)** To do that we'll select star or select all of the columns from product stock products, ORDER BY price descending.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=52)** When I press run, I can see the following results.
>
> **[0:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=55)** This place is the highest price products at the top of the results.
>
> **[0:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=59)** Now, if I only wanted to see the first five rows of this data, I can add a TOP keyword to the select statement.
>
> **[1:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=66)** It looks something like this, SELECT TOP five star, from products dot products, ORDER BY price descending.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=73)** This time when I run the statement, I only get five rows returned.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=77)** The specific number that you choose can be whatever you want, it could be the top three rows or the top 10.
>
> **[1:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=83)** Also some people will put the number inside a parentheses something like this, top and then in parentheses five, if you run it, you'll get exactly the same results.
>
> **[1:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=93)** You can also ask for a percentage of the records in SQL Server.
>
> **[1:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=96)** So I can ask for the top 10%.
>
> **[1:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=101)** Now, when I run the query, I get a total of 12 rows returned.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=105)** There are 114 total rows in the products table, so 10% of them rounded up gets you to 12, that's exactly how many rows we receive here in this query.
>
> **[1:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=115)** So in SQL Server the TOP keyword allows you to put a restriction on how many rows of data the query will return.
>
> **[2:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=123)** Now let's move over to the PostgreSQL database.
>
> **[2:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=126)** I'll select it over here in the connection sidebar and then press control, enter on my keyboard to open up a new query window attached to that server.
>
> **[2:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=134)** We can start the query in exactly the same way.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=140)** We'll select everything from product stock products, ORDER BY price descending, I'll press the run button and I get these results.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=147)** Now, if you try and use the TOP keyword PostgreSQL, isn't going to understand, if I say SELECT TOP five star and try and run it, I get an error.
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=158)** Instead, PostgreSQL uses the LIMIT clause to do the same thing.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=162)** This goes at the very end of the statement after the ORDER BY clause.
>
> **[2:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=166)** So let's go ahead and get rid of the top five and move it down to the bottom.
>
> **[2:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=171)** I'll say limit five.
>
> **[2:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=173)** Now, when I run the query, I get the results I expected, the first five rows from our sorted list of products.
>
> **[3:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=180)** Now, unfortunately PostgreSQL doesn't support percentages like SQL Server does, so you're only able to limit to a specific number of rows.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=189)** This illustrates one area where SQL Server and PostgreSQL use a slightly different syntax in the SQL commands, even though the functionality is nearly identical.
>
> **[3:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/limiting-the-number-of-rows-returned?u=76281980&t=200)** When using the TOP keyword or the LIMIT clause, it's important to also use an ORDER BY clause, so that the end result is meaningful, otherwise you're just retrieving the first few rows from an arbitrary pile of randomly shuffled records.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (7), [[Microsoft SQL Server|Sql server]] (6), [[PostgreSQL]] (6), database (3), product (3)
> **Env Vars:** sql (7), order (6), top (6), select (2), limit (2)
> **SQL:** order by (6), select (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Solution: Write a SQL SELECT query
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=0)** (bouncy upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=5)** - [Instructor] In this code challenge, we were asked to find some chicken-based recipes that we can prepare quickly from a table of recipes we've got stored.
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=13)** And I'm just going to run the SELECT statement just so we can see the data that we have to work with.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=17)** So we have a total of 25 different recipes here.
>
> **[0:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=21)** I've got spaghetti carbonara, chicken tikka masala.
>
> **[0:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=24)** If I scroll over here to the right, I've got a column for the primary ingredient.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=28)** So this is an identification number for the ingredient, as well as the prep time and the date that this recipe was added into our table.
>
> **[0:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=36)** So that is the recipes table.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=38)** We can also take a look at the ingredients table by changing the SELECT statement to SELECT * FROM Cooking.Ingredients.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=46)** And here we can see the ID numbers for each of our ingredients, as well as the name.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=51)** So here is the one that we're interested for this challenge, chicken, which is ingredient ID number two.
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=57)** All right, with all of that in mind, we can get started on the challenge.
>
> **[1:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=61)** Now, the first thing I'd like to do is get the tables joined together.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=64)** So based on what we just saw and what's on the table design diagram inside of the instructions, we know that the related columns in each table, to create the JOIN on, are the ingredient ID in the ingredients table and the ingredient inside of the recipes table.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=81)** So we can start putting all that in here.
>
> **[1:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=83)** So I'm going to say... Let's just say SELECT * FROM Cooking.Recipes, and then we can say INNER JOIN.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=94)** We're going to join everything to Cooking.Ingredients.
>
> **[1:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=100)** ON, and this is where we specify the columns that are the same in both tables.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=105)** So in the Recipes table, it's called the primary ingredient.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=113)** And the values in that column are equal to the values in the Ingredients table and the IngredientID.
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=125)** And I'm just going to move this semicolon down to the very end to get it out of the way.
>
> **[2:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=129)** And I'm going to change this.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=130)** I don't know why I typed it in.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=130)** I'll capitalize there.
>
> **[2:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=132)** We'll just change that over to lowercase letters.
>
> **[2:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=135)** Okay, Cooking.Ingredients.
>
> **[2:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=137)** All right, let me go ahead and test my code just to make sure I've got a working JOIN so far.
>
> **[2:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=141)** So we're just going to select all the columns from both of those tables joined together.
>
> **[2:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=146)** And so we can see we're still getting 25 rows.
>
> **[2:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=148)** That's all 25 recipes that we have.
>
> **[2:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=150)** We have the columns for the primary ingredient here, out of the Recipes table.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=155)** And if I scroll over here to the right, I also have the ingredient ID and the ingredient name that's coming out of the ingredients table.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=162)** So all of the rows from both tables are being joined together into one large result here.
>
> **[2:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=168)** So now that the JOIN is working, we can return our attention to our query and just grab the individual columns that we need for this challenge.
>
> **[2:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=176)** So instead of SELECT *, we can type in these specific columns that we want.
>
> **[3:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=180)** So I'll change that to the Recipes.RecipeID column, type in comma after that one.
>
> **[3:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=188)** Next we need the RecipeName column from the Recipes table.
>
> **[3:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=195)** Then we want the ingredient name, and that's going to come out of the Ingredients table.
>
> **[3:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=204)** And finally, we want the PrepTime column from the Recipes table.
>
> **[3:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=212)** All right, that's the last one so I don't need a comma after that one.
>
> **[3:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=215)** And once again, I'll just test my code to make sure we're on track here.
>
> **[3:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=218)** And I'm still getting output here, so that's good.
>
> **[3:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=220)** We're still getting all 25 rows, but we are now only receiving the four columns that we've asked for here in the SELECT statement.
>
> **[3:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=228)** All right, so we're making progress.
>
> **[3:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=230)** Next up, we need to find just the recipes where the main ingredient is chicken.
>
> **[3:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=238)** And we can do that in a couple of different ways here.
>
> **[3:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=239)** But I'm going to come down to the end here and say WHERE.
>
> **[4:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=244)** So I only want records where the IngredientName column.
>
> **[4:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=249)** And once again, that's coming out of the Ingredients table.
>
> **[4:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=251)** So we'll say Ingredients.IngredientName.
>
> **[4:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=257)** Is equal to, and in single quotation marks, 'Chicken.'
>
> **[4:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=262)** Okay, let's test my code again.
>
> **[4:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=265)** There we go.
>
> **[4:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=266)** We're down to five rows, or limiting it down to just the ingredients, or just the recipes that include chicken as the primary ingredient.
>
> **[4:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=274)** The next thing we need to do is get just the top three, if you were to sort them by prep time, descending.
>
> **[4:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=282)** And so just looking at the data here, I can see we have one that's 20 minutes, 20 minutes, and this one is 25 minutes.
>
> **[4:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=288)** So these are the three that I want.
>
> **[4:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=289)** I don't want this one, this chicken alfredo, at 30 minutes or the chicken tikka masala, at 45 minutes.
>
> **[4:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=296)** So those are the records that I do want.
>
> **[4:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=299)** And so in order to get those, we need to sort the data.
>
> **[5:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=302)** We can do that with an ORDER BY clause.
>
> **[5:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=305)** So we need to sort them by the prep time, which is in the recipes table.
>
> **[5:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=313)** And I need to sort it ascending.
>
> **[5:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=315)** And that's the default, so you don't need to type in "Ascending" here, but you could just type that in so that's clear.
>
> **[5:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=320)** So you type in ORDER BY Recipes.PrepTime ASC.
>
> **[5:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=325)** Will sort it again.
>
> **[5:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=326)** Okay, so now the records are in the right order.
>
> **[5:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=328)** I've got them in ascending order by the prep time, with the ones that take less time at the top, and the ones that take more time down at the bottom.
>
> **[5:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=336)** And then finally, I just need to grab the top three, and I can do that with a LIMIT clause.
>
> **[5:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=342)** So I'll say LIMIT 3.
>
> **[5:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=343)** Test my code.
>
> **[5:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=345)** And there we go.
>
> **[5:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=346)** We have a correct output.
>
> **[5:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=347)** The three quickest recipes that we can prepare with chicken are the chicken sandwich, the Caesar salad, and the chicken stir fry.
>
> **[5:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-write-a-sql-select-query?u=76281980&t=356)** And so that is my complete solution to this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), next (3)
> **Env Vars:** select (6), join (4), order (2), limit (2), inner (1)
> **SQL:** select (6), join (3), order by (2), inner join (1), where (1)
> **CLI Commands:** find (2), make (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bouncy upbeat music) (1)


### 7. Manipulate Data

[↑ Back to Table of Contents](#table-of-contents)

#### Display column aliases with AS
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=0)** - When you're writing database queries, you're not limited to displaying the data exactly as it's stored in the database.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=7)** You can repurpose the data by applying calculations, functions, groupings, and other types of manipulations in order to meet the needs of whatever analysis you're after.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=17)** Because the data returned in a result set can be modified, it's important to make sure that the column names that are displayed are accurate to the final calculation or the data manipulation.
>
> **[0:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=29)** You can also rename the columns just to clarify their contents or to simply make them more legible.
>
> **[0:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=35)** You do all of this by naming the output columns with an alias, using the AS keyword.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=41)** On the screen, I have the contents of a script called AS_Start.sql that you can find inside of the Chapter 7 folder.
>
> **[0:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=48)** This query will join some columns from our two tables.
>
> **[0:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=50)** And when I press the Run button, you'll see the results.
>
> **[0:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=54)** Here I can see that we have the product name, size, SKU, and price columns coming out of the products table and the category description and the product line coming out of the categories table.
>
> **[1:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=65)** Because we didn't specify otherwise, the column names that are returned are exactly the same as they're stored in the original data tables.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=73)** But we can change that.
>
> **[1:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=75)** I want to make these column names a little bit more descriptive and legible.
>
> **[1:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=79)** In the Select Query, where we list out the columns to return, add the AS keyword after each column identifier, followed by the new name in double quotation marks.
>
> **[1:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=89)** So after a products.productname, I'm going to write AS, and then in double quotes, product name with a space between it.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=97)** Now actually SQL server will allow you to use single quotes, double quotes or square brackets here, but PostgreSQL databases require the use of double quotes here when you're adding aliases that contain spaces.
>
> **[1:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=110)** So I'm just going to use double quotes in order to make a query that's compatible with both platforms.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=116)** Let's continue renaming the other columns here in the query.
>
> **[2:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=120)** Products.size, I'll rename AS size in ounces.
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=125)** We'll call the SKU column product SKU.
>
> **[2:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=131)** The price column is really the price in US dollars.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=138)** I'll add a space in the category description column, and we'll do the same thing with the product line.
>
> **[2:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=148)** Now, when you run the query, you'll get the exact same data as before.
>
> **[2:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=152)** We haven't changed any of that.
>
> **[2:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=154)** But the column names are now a bit more clear.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=157)** You might need to adjust the width of each of these columns in order to see the full text now, just by hovering your mouse here between the two columns and you can drag left or right to resize as needed.
>
> **[2:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=166)** So now this presents the data in a way that's easier to understand.
>
> **[2:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=170)** Renaming the columns and the results also has a security benefit.
>
> **[2:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=174)** Someone that's reviewing these results has no idea what the actual column names in the table, which can help prevent people from trying to snoop around in the table that they shouldn't have access to.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=185)** The AS keyword can also be used to rename tables in your queries in the FROM clause.
>
> **[3:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=191)** This does not have a benefit to the end results that are displayed, but it can make queries shorter to write out.
>
> **[3:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=197)** So what we can do is rename the product.products table AS and a lowercase P.
>
> **[3:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=203)** Go ahead and click off of that to get rid of the IntelliSense window.
>
> **[3:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=206)** We'll also rename the products.categories table AS C.
>
> **[3:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=211)** Now I can go through the rest of my query here and everywhere I referenced the products table, I'll replace it with the letter P and everywhere that I referenced the categories table, I'll replace it with a letter C.
>
> **[3:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=222)** So we'll start up here at the top.
>
> **[3:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=223)** So we'll say select P.productname and P.size and P.SKU and P.price.
>
> **[3:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=232)** Then we'll replace categories with a C, this one with a C, and we'll do the same thing down here in the ON line.
>
> **[3:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=239)** So P.categoryID is equal to C.categoryID.
>
> **[4:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=244)** Now, when I run the query, the results will be identical to what they were a moment ago, but it's a little bit shorter to write it out this way.
>
> **[4:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=252)** You'll see a lot of professional database developers adopt this kind of naming strategy in the queries that they write.
>
> **[4:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=258)** And it's often used in online tutorials that you're sure to come across.
>
> **[4:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=262)** Finally, there's one more trick that we can do with the AS keyword.
>
> **[4:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=266)** The use of AS itself is actually completely optional.
>
> **[4:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=271)** We can perform the same column and table aliasing without the AS keyword at all.
>
> **[4:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=276)** If I go ahead and just remove that from my script, I'm going to remove it on every line.
>
> **[4:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=282)** If I run the query again, you'll see I get the exact same results as before, without the use of AS at all.
>
> **[4:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/display-column-aliases-with-as?u=76281980&t=289)** And that's how you can use the AS keyword or not to provide the column and table aliases that clarify column names and make your queries faster to type out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (6), product (6), [[Microsoft Products|Products]] (6), database (3), [[Data Manipulation]] (1)
> **CLI Commands:** make (6), find (1)
> **Env Vars:** sku (4), sql (1)
> **Code Identifiers:** categoryid (2)
> **File Paths:** as_start.sql (1)
> **Speakers:** - when (1)

#### Mathematical operations
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=0)** - [Instructor] You can include additional columns in a queries results set, that don't come from any data table in your database.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=7)** Consider this query that I'm going to write on line number 10.
>
> **[0:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=10)** Select and then in single quotes, Adam.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=14)** If I run just this little bit here, you might be surprised that we actually get some results back and we just get the name, Adam.
>
> **[0:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=20)** What we're doing is asking for the server to return a single value and not a column of data.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=25)** And that's exactly what we're getting back.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=28)** We can even give this column an alias in the results.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=31)** I'll say as Name.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=34)** Now, when I run this line we'll get a proper column name and the results.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=38)** So this is a neat trick but actually it can be really useful to use inside of your queries.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=43)** Let's get rid of line number 10 here, and I'll turn my attention back to the original query that I had in the math start dot SQL file.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=51)** This query is retrieving a few columns from the products table.
>
> **[0:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=54)** And if we run the query, we'll see the starting point for the query.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=58)** So now let's suppose that I want to know some more information about sales tax.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=62)** I can add a column that displays a static value for every row in these results.
>
> **[1:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=67)** I'll come here on line seven after Price and type in a comma, and then come down to line number eight.
>
> **[1:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=74)** Inside of single quotation marks I'll type 8.5%.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=78)** Then we'll give this column a name as Tax Rate.
>
> **[1:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=83)** If I run this query now, you'll see that we get an additional column that has 8.5% for every row in the results.
>
> **[1:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=90)** This makes it easy to see the associated tax rate for every product.
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=95)** I can take this a step further and start performing mathematical calculations to add to these results.
>
> **[1:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=100)** Back up here on line number eight I'll type in a comma and come down to line nine.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=105)** This time I'm going to calculate the actual sales tax due for each product.
>
> **[1:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=110)** We'll start with the price data that's coming out of the original data set.
>
> **[1:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=114)** Then we'll multiply that by 0.085.
>
> **[1:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=119)** I'll give this column an alias as Sales Tax.
>
> **[2:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=124)** We can make one more column by coming down here to line number 10 and doing another calculation.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=130)** This time we'll add the original price to our sales tax value.
>
> **[2:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=136)** I'll call this column Total Price.
>
> **[2:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=139)** When I run this query, we'll see these results and I have some additional columns that give me more information.
>
> **[2:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=144)** Now I have the original price, the Tax Rates, the Sales Tax value, as well as the Total Price, including tax.
>
> **[2:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=153)** What's really nice about this is that the tax information isn't stored anywhere in the database.
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=158)** It's only being calculated when we run this query and displayed temporarily here in the results set.
>
> **[2:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=165)** If a product price were to change and I rerun this query the calculated values would automatically update based off of the new price information that's stored in the table.
>
> **[2:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=175)** Using queries, you can expand on the data that you're storing, by performing mathematical operations including addition, subtraction, multiplication, and division.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=185)** These calculations bring additional value to your data without increasing the amount of data that you're actually storing.
>
> **[3:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/mathematical-operations?u=76281980&t=192)** And since the calculations are updated every time the query is run, you never have to worry about them becoming out of date when your data changes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), product (3), database (2), [[SQL]] (1), [[Microsoft Products|Products]] (1)
> **Versions:** 8.5 (2), 0.085 (1)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Use built-in functions
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=0)** - [Instructor] Each database platform includes hundreds of built-in functions that you can use to manipulate your data.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=7)** If you've ever applied a formula to your data in a spreadsheet application like Excel then you're familiar with the concept.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=14)** Functions take in values in the form of arguments, process them through some routine and then return new values.
>
> **[0:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=23)** If I select just the Price column from the Products table by running lines three and four, you can see that we get a lot of information back.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=31)** There are 144 values here that correspond to the 144 products in the table.
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=37)** We're just pulling the column straight out of the Products table and displaying it all by itself.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=43)** We can now use some built-in functions to give us statistical information about all of this data.
>
> **[0:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=49)** Let me move this results window down on the screen a little bit so I can see line seven through 11.
>
> **[0:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=54)** First, we're going to use the MAX function.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=58)** Then inside the parenthesis, we can apply it to the price data.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=62)** Functions get written out like this with but the name of the function and then inside of parenthesis, you tell it what values you want it to process.
>
> **[1:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=70)** The MAX function will find the highest value in the Price column.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=73)** So that the results are recognizable, I'm going to add a column alias, maximum price.
>
> **[1:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=79)** The next column in the results will show the minimum price using the MIN function and the third column will display the average price using the AVG function.
>
> **[1:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=90)** When I highlight these rows seven through 11 and press run, you'll see the results.
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=95)** All of that price data is run through those functions and you can see that the maximum price found is 27.99.
>
> **[1:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=101)** The minimum price in that column of data was 6.99.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=104)** And the average price is 17.59.
>
> **[1:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=108)** No, actually this is 17.595263.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=112)** The average price is returning a few more decimal places than I want.
>
> **[1:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=115)** So we can also apply a rounding function to it.
>
> **[1:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=119)** To do that I'll come up here to line number 10 and we'll insert the ROUND function.
>
> **[2:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=123)** I'll open up a parenthesis.
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=125)** We're going to apply it to the Average Price function.
>
> **[2:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=128)** After that I'll type in a comma and the number two.
>
> **[2:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=132)** This tells the Rounding function that I wanted to round to two decimal places.
>
> **[2:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=137)** I'll close the parenthesis after the end of that and then we'll highlight this and run it again.
>
> **[2:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=142)** Now you can see that it's correctly rounding to two decimal places and I get 17.60.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=147)** It's actually including a bunch of more zeros but you get the point.
>
> **[2:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=150)** If you run this exact same query inside of PostgreSQL, you'll get a better result.
>
> **[2:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=156)** So these give us some useful statistical information about the pricing of the Two Trees Olive Oil company's products.
>
> **[2:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=163)** Let's look at another useful technique using these same functions.
>
> **[2:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=167)** Let's suppose that I wanted to find out which products had the highest price.
>
> **[2:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=172)** I'll come down to line number 13 and we'll start writing out a new query.
>
> **[2:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=176)** First, I need to find the maximum price again all by itself.
>
> **[3:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=183)** I'll run select max price from products.products.
>
> **[3:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=188)** This tells me that the highest price item is 27.99.
>
> **[3:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=192)** Now I want to find out which products have this price.
>
> **[3:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=196)** I could write out another query like this.
>
> **[3:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=202)** Select product name, size, price from products.products where price is equal to 27.99.
>
> **[3:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=210)** This query when I run it gives me three different products.
>
> **[3:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=214)** So we're done, right?
>
> **[3:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=216)** Well, the problem with this approach is that it really only answers the question what products are 27.99.
>
> **[3:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=222)** If new products were added with higher prices then this query wouldn't show those.
>
> **[3:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=228)** So instead of hard-coding the 27.99 price into this query, we can instead use a subquery or a query inside of a query to better answer this question.
>
> **[3:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=238)** To do that I'm going to take the select max price query that I have here on line 13 and 14 and copy it to my clipboard.
>
> **[4:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=245)** Then we'll come down into the second query down at the bottom and replace the 27.99 value.
>
> **[4:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=252)** I'll open a parenthesis, paste in the contents of the select query that I just copied and then close the parenthesis after it.
>
> **[4:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=259)** Now I have too many semi colons here so I'm going to get rid of this one inside of the parenthesis.
>
> **[4:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=263)** And let me just space things out a little bit so that it's easier to read.
>
> **[4:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=271)** Now I can run this query on line 16 down to 22.
>
> **[4:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=276)** I get the exact same answers back but this query result gives me a better answer to the question that I intended to ask.
>
> **[4:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=283)** This query answers the question which products have the highest price where the first version didn't?
>
> **[4:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=289)** It's a subtle but important distinction that's important to keep in mind.
>
> **[4:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=293)** It's very easy to write a query that you think answers your question when it's actually answering a different question.
>
> **[5:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=300)** So that's an example of how the MAX function can be used to surface important information about your data.
>
> **[5:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=307)** Now, I mentioned that each database platform includes hundreds of different functions and that wasn't an exaggeration.
>
> **[5:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=313)** There are far too many to go through today but I will point you to a couple of resources.
>
> **[5:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=318)** On this page is the documentation for SQL Server's functions that break them down into categories and you can see the long list here on the left side of the screen.
>
> **[5:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=327)** If you click into the categories, you can find information about different functions.
>
> **[5:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=331)** On each functions page, you'll find information about how to apply it to your data.
>
> **[5:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=336)** PostgreSQL has a similar page to document the built-in functions on that platform.
>
> **[5:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/use-built-in-functions?u=76281980&t=341)** I recommend bookmarking these if you plan on doing continued work in either platform as they're very handy reference to have available when you're building your own databases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (14), data (8), database (2), [[PostgreSQL]] (2), application (1)
> **Versions:** 27.99 (6), 6.99 (1), 17.59 (1), 17.595263 (1), 17.60 (1)
> **Env Vars:** max (3), min (1), avg (1), round (1), sql (1)
> **CLI Commands:** find (6)
> **Documentation:** the documentation (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Aggregate data with GROUP BY
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=0)** - It's not uncommon for many of your data rows to contain the same value.
>
> **[0:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=5)** For instance this query here that takes the CategoryDescription from a categories table, and the SQL column from the product table.
>
> **[0:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=12)** when I run it I get all of my unique skills from the database and the categories that they belong to.
>
> **[0:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=18)** There are olive oils, flavor infused oils, and if I scroll through the list you'll see some products in a Bath and Beauty category.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=27)** And there's a few right there.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=30)** When you have repeating values like this , you can group all the rows together, that have the same value.
>
> **[0:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=36)** And then perform some aggregate calculations on the group.
>
> **[0:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=40)** First, we need to tell the server that I want to collect all of the rows with the same CategoryDescription together.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=46)** We do that with a GROUP BY clause added to the end of the query.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=51)** We move this down and I want to go here on my number 9, I'm still going to move that semi-QL down the row.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=56)** The GROUP BY clause would go after the WHERE Clause, but before the ORDER BY clause if you are using either of those.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=64)** So we're going to group or rows by the CategoryDescription.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=69)** Now if you're trying to run this query right now, you going to get a error.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=73)** It says that the SKU is invalid because it is not contained in either an aggregate function or the GROUP BY clause.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=81)** Aggregate functions include the Min, Max and the average functions that we looked at previously.
>
> **[1:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=87)** Since we are grouping all of this data into essentially three different buckets, based after the CategoryDescription, the database engine needs to know what to do with the other column that we're asking for.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=98)** Now since SKUS are character data, then Min, Max and average functions, don't really apply.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=105)** But what we can't do is use a function called COUNT, to simply count up all of the rows in each of our groups.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=112)** So I'll come up here onto line number 5, where have a product-SKU line and will apply a COUNT function tool.
>
> **[1:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=119)** Then I'll give this column a new Alias.
>
> **[2:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=122)** I'll say as "Number of SKUs."
>
> **[2:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=127)** Now lets run the query again.
>
> **[2:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=129)** This time I get a better result.
>
> **[2:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=131)** This takes all of the rows that have the same category value and bundles them together.
>
> **[2:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=136)** Then it counts up how many rows are in each group.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=140)** Now I have some useful summery data about the distribution of products in the different categories.
>
> **[2:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=146)** You can take this a step further and organize this data, by adding an ORDER BY clause.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=151)** Or do that after the GROUP BY.
>
> **[2:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=153)** I'll order the data based after COUNT.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=157)** And I'll do it in a descending fashion.
>
> **[2:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=161)** This will make it easier to see that the olive oils product category has the most products at 89.
>
> **[2:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=167)** And the Bath and Beauty product category has far fewer.
>
> **[2:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=171)** Finally we can combine this query with the one from previous movie to see the highest ,lowest and average product price in each of our categories.
>
> **[3:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=181)** Right after our COUNT, line on line number 5, I'll add in our Max,Min and average functions.
>
> **[3:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=190)** When you run it ,you should get the results.
>
> **[3:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=192)** The Max ,Min and average functions are applied to each group individually.
>
> **[3:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=197)** All of this works together to provide more ways to analyze the data and give you more insight.
>
> **[3:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=203)** This overview statistical summary will be cumbersome to get when using a traditional spreadsheet program.
>
> **[3:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/aggregate-data-with-group-by?u=76281980&t=209)** But here in a relational database, we did it in just a few lines of SQL

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), product (5), database (3), [[Microsoft Products|Products]] (3), [[SQL]] (2)
> **Env Vars:** group (4), count (4), sql (2), order (2), sku (2)
> **SQL:** group by (4), order by (2), where (1)
> **CLI Commands:** make (1)
> **Analogies:** for instance (1)
> **Speakers:** - it (1)

#### Filtering groups with HAVING
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=0)** - [Instructor] The where clause is used to filter rows of data from your query results.
>
> **[0:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=5)** When you want to filter out entire groups from the results, then you'll use the having clause.
>
> **[0:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=11)** I currently have the query from the prior movie, that groups all of the products together by the category description.
>
> **[0:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=18)** Let's run it to see where we're starting with.
>
> **[0:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=21)** Now this database has 114 unique products.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=25)** They break down like this; We have 89 olive oils, 18 flavor infused oils and seven bath and beauty products.
>
> **[0:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=33)** If you add up all three of these numbers, you'll find that all 114 products are represented in the summary.
>
> **[0:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=40)** Now let's see what happens when you add in a where clause to filter some of the products out.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=46)** The where clause needs to go between the from clause and the group by clause.
>
> **[0:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=50)** So come over here and give myself a new blank line on line number eight.
>
> **[0:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=54)** If you try and put the where clause somewhere else, then the database engine is going to complain and give you an error message.
>
> **[1:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=61)** Now I want to filter out all of the products that have a price over $15.
>
> **[1:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=67)** I could do that with, where product stock price is greater than 15.
>
> **[1:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=74)** When you run this query, you'll see the difference.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=77)** You'll still get the same three groups, but notice that the number of SKUs has decreased.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=82)** We're now only seeing the count of how many products above $15 are in each group.
>
> **[1:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=88)** So the where clause is filtering out rows before they're grouped together.
>
> **[1:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=93)** In order to remove entire groups from these results, you'll use the having clause.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=98)** This goes after the group by clause, but just before order by.
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=102)** So we'll go up here and give myself a new blank line on line 10.
>
> **[1:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=106)** Let's suppose that I only want to see the olive oils group.
>
> **[1:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=110)** I can say this, having category description equals olive oils.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=118)** When you run this query, you'll just get the olive oils line and the number of SKUs presented there.
>
> **[2:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=123)** Or we can get all of the groups except bath and beauty.
>
> **[2:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=126)** Let me go ahead and comment out line number 10, and we'll try a different having clause.
>
> **[2:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=135)** This time I'll type, having not category description equals bath and beauty.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=140)** This will give me everything except the bath and beauty category.
>
> **[2:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=143)** So I just see olive oils and flavor infused oils.
>
> **[2:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=146)** Or maybe I want to see all of the groups that have less than 10 products in them.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=151)** We can do it like this.
>
> **[2:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=152)** Let me comment out this one and give myself a new having clause.
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=158)** Now we're just seeing the groups that have a count of the products, that SKU column, of less than 10.
>
> **[2:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=164)** When I run the query now, we'll see a different result.
>
> **[2:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=166)** Now I'm just seeing the flavor infused oils that have eight products that are greater than $15 and the bath and beauty products.
>
> **[2:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=174)** We only have two of those that are greater than $15.
>
> **[2:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=178)** So there's a couple of ways to filter grouped rows from the results set, using the having clause.
>
> **[3:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=184)** Remember that it immediately follows the group by clause when you use it.
>
> **[3:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/filtering-groups-with-having?u=76281980&t=188)** And that having only applies to groups and where only applies to rows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (11), database (2), data (1), product (1)
> **CLI Commands:** find (1)
> **Env Vars:** sku (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Query data
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-query-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-query-data?u=76281980&t=0)** - [Instructor] Before we call this course complete, I'd like you to try your hand at writing a few queries.
>
> **[0:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-query-data?u=76281980&t=11)** For your last challenge try and find the answers to the following questions using the data in the Two Trees database.
>
> **[0:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-query-data?u=76281980&t=18)** Question one, product sizes are stored in us fluid ounces.
>
> **[0:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-query-data?u=76281980&t=23)** What are the equivalent sizes in milliliters?
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-query-data?u=76281980&t=26)** The conversion formula that you'll need to know is that one ounce is equal to 29.57353 milliliters.
>
> **[0:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-query-data?u=76281980&t=35)** Question two, how many different product skews are available in each size?
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-query-data?u=76281980&t=41)** And question three, what is the highest priced cosmetic product?
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-query-data?u=76281980&t=46)** I estimate that these questions should take 15 minutes, or less to answer.
>
> **[0:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-query-data?u=76281980&t=50)** My advice is to start slow.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-query-data?u=76281980&t=52)** Build your queries one component at a time and test them frequently as you go along.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-query-data?u=76281980&t=58)** I'll show you how I'd approach these questions in the next movie.
>
> **[1:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/challenge-query-data?u=76281980&t=61)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (3), data (1), database (1), next (1)
> **CLI Commands:** find (1)
> **Versions:** 29.57353 (1)
> **Cross-References:** in the next (1)
> **Definitions:** we call this (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Query data
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=0)** - [Instructor] I hope you were able to answer the three questions for the challenge and let's walk through the answers together.
>
> **[0:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=11)** I'm going to select anything inside of the Two Trees database, just to make sure that I get a good query window that's attached to the right database.
>
> **[0:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=18)** So I'll press Control + N to open up a new query window.
>
> **[0:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=21)** All right, let me type out some notes here just so I can remember what it is that we're trying to do.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=25)** So question one was to convert size from ounces to milliliters.
>
> **[0:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=33)** Question two is to find out how many products are in each size and question three was to find the highest priced product in the cosmetic product line.
>
> **[0:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=54)** All right.
>
> **[0:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=55)** So let's go ahead and get started with question one.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=56)** I'm just going to move these down on the screen a little bit.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=58)** So the first thing we need to do is take a quick look through our data tables and we open up a products table and take a look at the columns there and the categories table there.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=68)** So we need to convert sizes from ounces to milliliters.
>
> **[1:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=71)** So we're going to be pulling information from the products table.
>
> **[1:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=74)** We've got our size column there.
>
> **[1:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=76)** So we're going to select.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=78)** Let's see what columns we want, let's take the SKU, the ProductName, let's see, I don't need the CategoryID, I do need the size, price, we can pull that or not, it doesn't really matter for this question.
>
> **[1:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=91)** Let's just do SKU, ProductName and size.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=94)** FROM products.products.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=98)** And I'm just going to run it right now, just to make sure I'm getting good data.
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=102)** Okay, haven't made a mistake yet so that's good.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=104)** So there is the sizes in the U.S fluid ounces and I need to convert these into milliliters.
>
> **[1:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=111)** So let's come up here and I'm going to bring this one down to the next line and we'll give us an alias as, we'll call this size in ounces.
>
> **[2:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=124)** And then we can add in another column, and this is going to be the size, multiplied by our conversion formula, and I gave that to you in this slide, so the size one ounce is equal to 29.57353 milliliters.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=140)** So that is all we need to do, just multiply it by that number there, and let's give this an alias as well, so as size in mls.
>
> **[2:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=149)** All right, let's go ahead and spell it out, just so it's sort of, kind of keeping the same pattern that we have up here.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=155)** So, all right, milliliters.
>
> **[2:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=156)** All right, so there is, I think, the answer to the first question.
>
> **[2:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=160)** So there is our size in ounces and there is the equivalent size in milliliters for all of the products.
>
> **[2:46](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=166)** So that answers question number one.
>
> **[2:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=168)** All right, question two.
>
> **[2:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=170)** How many products are in each size?
>
> **[2:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=172)** So let's go ahead and take a look at better size, better product name.
>
> **[2:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=178)** So I'm asking for how many products are in each size, that tells me that we're going to be grouping some things together.
>
> **[3:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=184)** So let's select, let's start with these SKU, ProductName, let's just do the SKU and the size.
>
> **[3:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=193)** FROM products.products, and let's run this.
>
> **[3:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=199)** Okay, so there's our SKU, there's our sizes.
>
> **[3:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=201)** So we need to group our sizes together.
>
> **[3:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=203)** We can see that there's a lot of eight ounce sizes, a lot of 32 ounce products and so on.
>
> **[3:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=207)** So I want to group all of the sizes together and then count up how many SKUs are in each size category.
>
> **[3:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=214)** So I'm going to come up here, we're going to group by the size.
>
> **[3:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=219)** And if I run it just right now, it's going to give me an error because I haven't done anything with the SKU column.
>
> **[3:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=224)** So let's come back up and we need to apply an aggregate function to the SKU here.
>
> **[3:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=232)** So we're going to do a count function.
>
> **[3:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=234)** So we're going to count up our SKUs and then we're going to group by the size.
>
> **[4:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=240)** Let's try and run that.
>
> **[4:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=241)** All right. And there we go, so there is our size and ounces.
>
> **[4:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=243)** So we have four ounces all the way up to 128 ounces.
>
> **[4:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=247)** And we have the number of products in each size category.
>
> **[4:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=251)** Let's just clean this up with a little aliasing here.
>
> **[4:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=253)** So as we will call this number of products and the size, we might as well call this size in ounces again.
>
> **[4:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=263)** Alright, run this one more time.
>
> **[4:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=265)** And there is our final results.
>
> **[4:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=267)** Number of products, our size in ounces.
>
> **[4:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=270)** It doesn't really matter what order these columns are in.
>
> **[4:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=272)** We could flip these around if it makes it a little bit easier to read.
>
> **[4:35](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=275)** It's like it was cut this to my clipboard, move this down, paste it back in, and then I need to move the comma here.
>
> **[4:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=281)** So get rid of this comma there, bring up the front clause.
>
> **[4:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=285)** Let's run it again, all right.
>
> **[4:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=287)** So now we have sizes on the left and the number of products on the right.
>
> **[4:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=289)** It makes it a little bit more common to read it this way and that I think answers question number two.
>
> **[4:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=296)** All right. Question three.
>
> **[4:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=297)** Let's go ahead and scroll down here.
>
> **[4:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=299)** Highest priced product in the cosmetic product line.
>
> **[5:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=303)** Okay. So the first thing we need to do is pull, let's take a look at the categories so I can figure out some information from that.
>
> **[5:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=312)** So I'm just going to select everything from products, not categories let's run that.
>
> **[5:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=319)** So the cosmetics product line is category ID number three.
>
> **[5:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=324)** And since our data is related, based off of the category ID column, we can just use category ID number three, to filter the information from the product table.
>
> **[5:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=333)** And that'll avoid us having to do a join between the two tables in order to figure out which ones are cosmetics.
>
> **[5:40](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=340)** So we'll just keep category ID number three as the one that we're interested in.
>
> **[5:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=345)** So we need to find the highest price in the cosmetics category.
>
> **[5:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=351)** And we can do that with a max function.
>
> **[5:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=353)** Well, we could do it like this.
>
> **[5:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=354)** We could just say select price from products.products where category ID is equal to three.
>
> **[6:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=366)** And then if we did an order by here, it's order by price descending.
>
> **[6:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=371)** So order the buy the price descending, and if I run this, that'll tell me here's a listing of all the different prices from the products line, where the category ID is equal to three.
>
> **[6:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=381)** So these are just cosmetic categories or just the cosmetic category.
>
> **[6:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=385)** And these are all of our prices.
>
> **[6:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=386)** And so I can see 21.99 is our highest price there, so that's one way to do it.
>
> **[6:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=391)** We can also select the max price from products.products where category ID equals three and get rid of this order by, and this will just return just the single value 2199.
>
> **[6:44](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=404)** So we don't have the rest of them.
>
> **[6:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=407)** Now we know which one is the highest price, and we can use that to filter down our products.
>
> **[6:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=412)** So let me come down and write another query here so we can select and let's see, what columns do I want to see?
>
> **[7:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=420)** We're figuring out highest priced product in the cosmetic product lines.
>
> **[7:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=424)** So we're not asking for specific columns.
>
> **[7:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=426)** So we just want to find out information about the products.
>
> **[7:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=428)** So let's just pull the SKU, the product name, category ID, might as well get the size and the price as well.
>
> **[7:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=437)** Let's just get everything. Okay.
>
> **[7:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=438)** So select all of those columns from products.products.
>
> **[7:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=444)** And we're only interested in the ones where the price is equal to this, that we calculated earlier.
>
> **[7:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=453)** So where price is equal to, then I can open up a parentheses and just copy all of this and paste it inside of the parentheses here.
>
> **[7:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=465)** I'm just going to space this out a little bit, so it's easier to see what's going on.
>
> **[7:51](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=471)** All right. So there is that, let me move this down on the screen.
>
> **[7:54](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=474)** So where the price is equal to whatever the max price is of category ID number three, and let's go ahead and run this.
>
> **[8:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=483)** All right? So that just returns a single product here.
>
> **[8:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=486)** Now here's something to think about, right now, I'm getting the product where the price is equal to the max price of the category ID number three, this doesn't necessarily mean that this product here is in the cosmetics category.
>
> **[8:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=500)** It just happens to be the only one that's at 21.99.
>
> **[8:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=503)** So this could be, you know, all of the products that are 21.99.
>
> **[8:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=507)** So what we really want to do here is add in a second condition to our where clause.
>
> **[8:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=513)** So I want, and the category ID is equal to three again.
>
> **[8:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=519)** Now that's not going to change our results that we're getting right now, but it just protects us from a situation where we just happen to have another product in a different category.
>
> **[8:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=528)** That was the same price.
>
> **[8:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=530)** So we would just want to make sure we're filtering it outside of this price condition right there.
>
> **[8:57](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=537)** So that is a second condition applied to that data, but that answers the question.
>
> **[9:01](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=541)** So we were wanting to find the highest price products in the cosmetic product line.
>
> **[9:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=546)** And it's this one right here, the olive glow night repair.
>
> **[9:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=549)** And I think, is it a cream?
>
> **[9:11](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=551)** I don't know. There we go.
>
> **[9:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=552)** It doesn't have any other texts on it, just olive glow night repair, but that answers question number three.
>
> **[9:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=558)** So this is, let me see if I can get all three on the screen at once.
>
> **[9:21](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=561)** These are the answers that I've came up with for the three questions.
>
> **[9:26](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=566)** And I'll save all of this text in the exercise files as solution query dot TXT.
>
> **[9:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-data?u=76281980&t=571)** And you can compare whatever you filled out to mine, and keep in mind that there's multiple ways to answer these questions, and this is just the way that I came up with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (27), product (15), data (4), database (2), next (1)
> **Env Vars:** sku (8), txt (1)
> **CLI Commands:** find (5), make (3)
> **Versions:** 21.99 (3), 29.57353 (1)
> **UI Navigation:** scroll down (1), select the (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)

#### Solution: Query summary statistics
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=0)** - [Instructor] For this final code challenge of the course, we're tasked with getting some summary statistical information about a music streaming service.
>
> **[0:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=12)** And we need to find the popularity of different music genres.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=16)** So I'm going to start by running the select statement just to see the music tracks data that we have to work with.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=22)** It looks like we have a total of 30 different rows here.
>
> **[0:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=24)** So each of these represents a different musical track.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=27)** We have the track ID, the title, artist name.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=30)** We have the genre that the track is in.
>
> **[0:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=33)** The number of times that particular track has been played by the subscribers of the streaming service.
>
> **[0:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=39)** The album that the track came from, as well as its release date.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=43)** And so this is all the data that we are going to summarize by the various musical genres.
>
> **[0:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=49)** So the first thing we need to do is just get that genre column.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=52)** So I'll say instead of SELECT *, I'll say SELECT Genre FROM MusicTracks, and we need to group everything by the genre.
>
> **[1:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=60)** I'm going to move this semicolon down there on the page a little bit, and we'll say GROUP BY Genre.
>
> **[1:07](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=67)** All right, let's go ahead and test my code.
>
> **[1:10](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=70)** And that gives me a small table of just the genres.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=73)** So these are the individual genres that we have represented inside of the tracks database.
>
> **[1:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=79)** And so you can think of these as grouping all of those individual track records that we saw a moment ago.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=85)** So inside of this one row of this result, Alternative, are all of the music tracks in the Alternative genre.
>
> **[1:32](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=92)** And this one here inside of the EDM genre is all of the tracks in that genre.
>
> **[1:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=99)** So now that we have everything grouped together by these genres, we can start to do some mathematical operations on those grouped records within.
>
> **[1:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=107)** So we need to get a count of how many tracks are in each genre.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=112)** So come back up here to my SELECT statement.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=113)** I'll type in a comma, and we'll add in another column to the query.
>
> **[2:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=120)** And this one's going to use the counting function.
>
> **[2:03](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=123)** And we're going to count up the number of tracks.
>
> **[2:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=126)** And so we can count up the number of track IDs that we have here.
>
> **[2:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=129)** And we'll call this Total_Tracks.
>
> **[2:15](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=135)** So we're using the AS keyword to create an alias.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=138)** So we'll perform this calculation and we'll return that data as a new column named Total_Tracks.
>
> **[2:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=144)** Going to test my code. And there it does that calculation.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=147)** So inside of the Alternative genre, we have four individual tracks.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=151)** EDM has four, Indie Rock has six, and so on.
>
> **[2:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=154)** That's the first calculation.
>
> **[2:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=156)** I'm going to type in a comma here and come down to the next line.
>
> **[2:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=159)** Next up, we want to calculate the total number of times each genre have been played.
>
> **[2:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=165)** So we can do that with a SUM function this time.
>
> **[2:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=168)** And we're going to sum up the PlayCount within each genre.
>
> **[2:55](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=175)** Once again, we'll use the AS keyword to create an alias, and we'll call this Total_Plays.
>
> **[3:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=182)** All right, let's test the code and that'll add in that column.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=185)** So we can see Alternative has a total of 705 plays.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=189)** EDM has over a thousand plays.
>
> **[3:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=192)** All right, next up, add another comma and come down to the next line.
>
> **[3:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=197)** The next thing we're asked for is to count the average number of plays for the tracks within each of those genres.
>
> **[3:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=203)** And we can calculate that with the average or AVG function.
>
> **[3:28](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=208)** So we'll average out the PlayCounts, and we'll name this AS Average_Plays.
>
> **[3:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=219)** Okay, we'll test the code again, adds in one more column here.
>
> **[3:42](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=222)** So now we can see that the four tracks that are in the Alternative genre were played on average, each one was played on average 176 times.
>
> **[3:53](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=233)** All right, so that is the columns that we need to put in.
>
> **[3:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=236)** Now, the challenge instructions also said that we wanted to limit the data that we were looking at, and we only wanted to include tracks that were released after January 1st, 2021.
>
> **[4:08](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=248)** So if the track was released before that date, we don't want it included in these summary calculations.
>
> **[4:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=253)** Now, because we are removing tracks from these grouped records, we can do that with a WHERE clause.
>
> **[4:20](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=260)** So we do that right after the GROUP BY.
>
> **[4:24](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=264)** We can say WHERE the ReleaseDate is greater than the 1st of January, 2021, so 2021-01-01.
>
> **[4:39](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=279)** And I'll test my code.
>
> **[4:41](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=281)** And, oh, there you have this in the wrong spot.
>
> **[4:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=283)** We need to move this WHERE clause after the FROM clause.
>
> **[4:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=288)** There we go.
>
> **[4:49](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=289)** So we're going to select from the genre, we're going to select these columns FROM MusicTracks WHERE the release date is over that, and then we're going to group everything.
>
> **[4:58](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=298)** All right, there we go.
>
> **[4:59](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=299)** So now you might notice that these average plays and the total plays have changed a little bit.
>
> **[5:02](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=302)** We're also down to just two tracks in the Alternative genre.
>
> **[5:06](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=306)** So two of those tracks were released before the 1st of January, 2021, and the other two were released afterwards.
>
> **[5:13](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=313)** Okay, so that takes care of that limitation.
>
> **[5:16](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=316)** And then we also only wanted to return data for genres that have more than 500 total plays.
>
> **[5:22](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=322)** And so there's a couple of these, Alternative, Indie Rock that have less than 500 total plays, and we don't want to see those in the final results.
>
> **[5:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=331)** So that uses the HAVING clause, and that goes after the GROUP BY clause.
>
> **[5:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=336)** So we can say HAVING SUM of PlayCount is greater than 500.
>
> **[5:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=345)** All right, let's go ahead and test my code.
>
> **[5:47](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=347)** And there we go. It removes those two rows.
>
> **[5:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=350)** So now we're only seeing rows for these genres that have total plays over 500.
>
> **[5:56](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=356)** And then the final requirement for the challenge was to sort the results by the total number of plays in descending order.
>
> **[6:04](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=364)** So if I take a look at this data, I would expect the Pop genre to appear at the very top in the sorted output.
>
> **[6:12](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=372)** And we do that by adding in an ORDER BY clause.
>
> **[6:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=374)** So ORDER BY SUM of PlayCount.
>
> **[6:19](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=379)** And I want them, ascending will be the default.
>
> **[6:23](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=383)** I don't want them ascending though, I want them descending.
>
> **[6:25](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=385)** So I need DESC, and then we just have the semicolon at the very end.
>
> **[6:31](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=391)** I'll move that up.
>
> **[6:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=393)** All right, I'll test my code one more time.
>
> **[6:34](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=394)** And there we go. I've got a correct output.
>
> **[6:36](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=396)** I've got the genres that have more than 500 total plays here for tracks that were released after January 1st, 2021.
>
> **[6:45](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=405)** And I'm only seeing the ones that have more than 500, and they're sorted in a descending sequence.
>
> **[6:50](https://www.linkedin.com/learning/database-foundations-intro-to-databases/solution-query-summary-statistics?u=76281980&t=410)** So Pop is here at the top and Rock is down at the bottom, and that is my solution to this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (6), next (5), database (1)
> **Env Vars:** where (4), select (3), group (3), edm (3), sum (3)
> **SQL:** where (4), select (3), group by (3), having (2), order by (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-intro-to-databases/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-intro-to-databases/next-steps?u=76281980&t=0)** - [Instructor] Allow me to be the first to congratulate you on reaching the end of this course.
>
> **[0:05](https://www.linkedin.com/learning/database-foundations-intro-to-databases/next-steps?u=76281980&t=5)** You now have an overview of the database creation process and you've set up a database playground using Docker that will serve you well as you continue your journey.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-intro-to-databases/next-steps?u=76281980&t=14)** Here's some ideas on where to go next.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-intro-to-databases/next-steps?u=76281980&t=17)** First, you can continue experimenting with the SQL Server and PostgreSQL servers that you've already installed or search hub.[docker.com](https://docker.com) for additional platforms to test drive.
>
> **[0:29](https://www.linkedin.com/learning/database-foundations-intro-to-databases/next-steps?u=76281980&t=29)** We barely scratched the surface of the graphical client that we used for this course.
>
> **[0:33](https://www.linkedin.com/learning/database-foundations-intro-to-databases/next-steps?u=76281980&t=33)** If you'd like to learn more about my favorite user interface, look for my Azure Data Studio Essential Training course, and if you didn't like Azure Data Studio, that's fine too.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-intro-to-databases/next-steps?u=76281980&t=43)** There's a whole bunch of alternative clients out there, and I encourage you to explore some of the other options.
>
> **[0:48](https://www.linkedin.com/learning/database-foundations-intro-to-databases/next-steps?u=76281980&t=48)** I've been Adam Wilbert, and I hope you have a fantastic day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (2), [[Microsoft Azure|Azure]] (2), data (2), next (1), [[Microsoft SQL Server|Sql server]] (1)
> **CLI Commands:** docker (2)
> **URLs:** [docker.com](https://docker.com) (1)
> **Env Vars:** sql (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


## Resources

- Exercise files available

## Skills Covered

- Databases

## Path Context

### In [[Database Foundations- From Concepts to Applications]]
**1 of 5** | [[Database Foundations- Data Structures]] →

### In [[Advance Your Database Administration Skills]]
**1 of 11** | [[Database Foundations- Data Structures]] →

## Appears In

- [[Database Foundations- From Concepts to Applications]]
- [[Advance Your Database Administration Skills]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Python- Working with Databases]] — Databases
- [[Learning SnowflakeDB]] — Databases
- [[Programming Foundations Databases]] — Databases

---

[↑ Back to top](#)