---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: top-five-things-to-know-in-advanced-sql
url: "https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql"
level: Advanced
updated: 8/24/2023
learners: 69594
skills:
  - SQL
exercise_files: true
github: "https://github.com/LinkedInLearning/top-5-things-to-know-in-advanced-sql-4403486"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQG_j9tunegTdQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692730198805?e=2147483647&amp;v=beta&amp;t=-XcdVOOA36tbBgp5o9zEYLiYLY70z3iDw1gEqqV5No4"
linkedin_topic: Data Science
learning_paths:
  - '[[Master SQL Development]]'
next_courses:
  - '[[Advanced SQL- Logical Query Processing, Part 1]]'
path_nav: '[{"path":"Master SQL Development","position":1,"total":8,"prev":null,"next":"Advanced SQL- Logical Query Processing, Part 1"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/sql
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Top%20Five%20Things%20To%20Know%20In%20Advanced%20Sql.md)

![Top Five Things To Know In Advanced Sql](https://media.licdn.com/dms/image/v2/D560DAQG_j9tunegTdQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692730198805?e=2147483647&amp;v=beta&amp;t=-XcdVOOA36tbBgp5o9zEYLiYLY70z3iDw1gEqqV5No4)

# Top Five Things To Know In Advanced Sql

> In this course, Kendall Ruber shows you how to build on your existing knowledge of basic SQL commands by introducing advanced SQL concepts and providing hands-on exercises for you to apply these skills to common business problems. By the end of this course, students should understand the different use cases and limitations for various advanced functions in SQL, as well as be able to appropriately 

> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql) | Advanced | 70K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (5 videos)
  - [The importance of SQL in a data-driven world](#the-importance-of-sql-in-a-data-driven-world)
  - [Prerequisite knowledge](#prerequisite-knowledge)
  - [Navigating the exercise files on GitHub](#navigating-the-exercise-files-on-github)
  - [Setting up Microsoft SQL Server](#setting-up-microsoft-sql-server)
  - [Adding primary key constraints](#adding-primary-key-constraints)
- [**1. Subqueries**](#1-subqueries) (7 videos)
  - [What is a subquery?](#what-is-a-subquery)
  - [Syntax of a scalar subquery](#syntax-of-a-scalar-subquery)
  - [Syntax of a multiple-row subquery](#syntax-of-a-multiple-row-subquery)
  - [Uncorrelated subquery](#uncorrelated-subquery)
  - [Correlated subquery](#correlated-subquery)
  - [Challenge: Create a subquery](#challenge-create-a-subquery)
  - [Solution: Create a subquery](#solution-create-a-subquery)
- [**2. Common Table Expressions (CTE)**](#2-common-table-expressions-cte) (5 videos)
  - [Syntax of CTEs](#syntax-of-ctes)
  - [Recursive CTEs](#recursive-ctes)
  - [Challenge: Create a CTE](#challenge-create-a-cte)
  - [Solution: Create a CTE](#solution-create-a-cte)
  - [Difference between a CTE and a subquery](#difference-between-a-cte-and-a-subquery)
- [**3. Windows Functions: ROW_NUMBER()**](#3-windows-functions-row_number) (4 videos)
  - [Introduction to window functions](#introduction-to-window-functions)
  - [Diving into ROW_NUMBER()](#diving-into-row_number)
  - [Challenge: Calculate a ROW_NUMBER](#challenge-calculate-a-row_number)
  - [Solution: Calculate a ROW_NUMBER](#solution-calculate-a-row_number)
- [**4. Windows Functions: LAG() and LEAD()**](#4-windows-functions-lag-and-lead) (4 videos)
  - [Use cases and syntax of LAG() and LEAD()](#use-cases-and-syntax-of-lag-and-lead)
  - [Using LAG() and LEAD() in tandem](#using-lag-and-lead-in-tandem)
  - [Challenge: Using LAG() and LEAD() to determine most recent order quantities](#challenge-using-lag-and-lead-to-determine-most-recent-order-quantities)
  - [Solution: Using LAG() and LEAD() to determine most recent order quantities](#solution-using-lag-and-lead-to-determine-most-recent-order-quantities)
- [**5. Ranking Windows Functions**](#5-ranking-windows-functions) (4 videos)
  - [Introduction to ranking window functions](#introduction-to-ranking-window-functions)
  - [Demonstrating the distinction between RANK() and DENSE_RANK()](#demonstrating-the-distinction-between-rank-and-dense_rank)
  - [Challenge: RANK() and DENSE_RANK()](#challenge-rank-and-dense_rank)
  - [Solution: RANK() and DENSE_RANK()](#solution-rank-and-dense_rank)
- [**Conclusion**](#conclusion) (1 videos)
  - [Wrap-up](#wrap-up)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### The importance of SQL in a data-driven world
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/the-importance-of-sql-in-a-data-driven-world?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/the-importance-of-sql-in-a-data-driven-world?u=76281980&t=0)** - Data analytics has become a booming field as organizations look to make data-driven decisions.
>
> **[0:06](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/the-importance-of-sql-in-a-data-driven-world?u=76281980&t=6)** To do that, companies need employees who can extract and manipulate data to gain insights.
>
> **[0:11](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/the-importance-of-sql-in-a-data-driven-world?u=76281980&t=11)** Whether you interact with data as an analyst, scientist, or engineer, SQL is an essential skill for any data role, and SQL isn't going anywhere.
>
> **[0:19](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/the-importance-of-sql-in-a-data-driven-world?u=76281980&t=19)** Knowledge of joins and basic commands can take you pretty far but these concepts aren't all-encompassing and often you'll need to build upon them with more advanced functions.
>
> **[0:28](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/the-importance-of-sql-in-a-data-driven-world?u=76281980&t=28)** I'm Kendall Ruber, and my work has spanned across HR, cybersecurity, and operations.
>
> **[0:33](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/the-importance-of-sql-in-a-data-driven-world?u=76281980&t=33)** And in every data role I've had, using SQL has been a constant.
>
> **[0:37](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/the-importance-of-sql-in-a-data-driven-world?u=76281980&t=37)** Whether you're someone wanting to take your SQL skillset to the next level, you're an advanced user who wants more hands-on practice, or a data professional prepping for your next interview, this course is for you.
>
> **[0:48](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/the-importance-of-sql-in-a-data-driven-world?u=76281980&t=48)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), [[SQL]] (4), next (2), [[Analytics]] (1), hr (1)
> **Env Vars:** sql (4)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - data (1)

#### Prerequisite knowledge
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/prerequisite-knowledge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/prerequisite-knowledge?u=76281980&t=0)** - This course focuses on more advanced topics like subqueries, CTEs, and several types of Windows functions.
>
> **[0:07](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/prerequisite-knowledge?u=76281980&t=7)** The data sets we'll be using come from the fictitious Red30Tech Conference.
>
> **[0:11](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/prerequisite-knowledge?u=76281980&t=11)** A variety of data has been collected from the conference such as a list of attendees, records of product sales, and speaker and session information.
>
> **[0:19](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/prerequisite-knowledge?u=76281980&t=19)** Because this is an advanced course, it's expected that you have a solid understanding of foundational SQL concepts like joins and basic commands like select, from, where, having and grouped by before beginning.
>
> **[0:32](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/prerequisite-knowledge?u=76281980&t=32)** This course uses Microsoft SQL Server, but if your primary SQL experience is in a different dialect like PostgreSQL, you'll still benefit from the course; the syntax just may be slightly different than what you're used to although the concepts are still the same.
>
> **[0:46](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/prerequisite-knowledge?u=76281980&t=46)** If this sounds like you, you're in luck.
>
> **[0:49](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/prerequisite-knowledge?u=76281980&t=49)** This course explains the inner workings of more advanced SQL concepts and includes hands-on, practical examples to supplement your learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), data (2), [[Windows]] (1), product (1), [[Microsoft SQL Server]] (1)
> **Env Vars:** sql (4)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - this (1)

#### Navigating the exercise files on GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/navigating-the-exercise-files-on-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/navigating-the-exercise-files-on-github?u=76281980&t=0)** - [Host] The materials for this course can be accessed using GitHub.
>
> **[0:04](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/navigating-the-exercise-files-on-github?u=76281980&t=4)** To follow along, you can fork this repository directly from the main branch.
>
> **[0:09](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/navigating-the-exercise-files-on-github?u=76281980&t=9)** Toward the top right hand corner, select "Fork" and then "Create a new fork".
>
> **[0:14](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/navigating-the-exercise-files-on-github?u=76281980&t=14)** Forking lets you create your own copy of the repository on your account, so that you can keep any changes that you've made.
>
> **[0:21](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/navigating-the-exercise-files-on-github?u=76281980&t=21)** This forked repository can be a place for you to store copies of your exercise files and notes for your own reference, or it can serve as a place to build a portfolio for a future employer to get an idea of your SQL skills.
>
> **[0:33](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/navigating-the-exercise-files-on-github?u=76281980&t=33)** Each branch corresponds to a video in the course.
>
> **[0:36](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/navigating-the-exercise-files-on-github?u=76281980&t=36)** In the main branch, if you scroll down, you'll find the data sets that we'll be using in the course.
>
> **[0:41](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/navigating-the-exercise-files-on-github?u=76281980&t=41)** If you scroll all the way to the bottom, you'll see the setup instructions, where we have the links to download the tools that you'll need.
>
> **[0:49](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/navigating-the-exercise-files-on-github?u=76281980&t=49)** If you head to a specific branch, you'll see the final code files for each associated video.
>
> **[0:57](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/navigating-the-exercise-files-on-github?u=76281980&t=57)** For example, in Branch 02_01, you'll find the final code file for this video in the course.
>
> **[1:05](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/navigating-the-exercise-files-on-github?u=76281980&t=65)** Please note that this course is designed for you to type along with me as we discuss the material, but should you get lost or want to see other examples, these files are here for your reference.
>
> **[1:16](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/navigating-the-exercise-files-on-github?u=76281980&t=76)** Now that we've set up our repository and can access the course materials, let's set up Microsoft SQL Server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1), [[SQL]] (1), data (1), [[Microsoft SQL Server]] (1)
> **Prerequisites:** set up (2), setup (1), you'll need (1)
> **CLI Commands:** find (2)
> **Env Vars:** sql (2)
> **Exercise Files:** exercise files (1), download the (1)
> **Tools:** github (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** for example (1)

#### Setting up Microsoft SQL Server
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=0)** - [Narrator] Next, a walkthrough how to set up the Microsoft SQL Server database that we'll be using in this course.
>
> **[0:05](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=5)** This is also commonly called SSMS.
>
> **[0:08](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=8)** In the main branch of the GitHub repository, you'll see several Excel files starting with Red30 Tech.
>
> **[0:13](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=13)** Download each of those to your computer.
>
> **[0:15](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=15)** Those are the data sets that we're going to be using in this course.
>
> **[0:19](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=19)** First, you'll need to download Microsoft SQL Server Management Studio.
>
> **[0:23](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=23)** The link to download this tool is at the bottom of the main branch.
>
> **[0:26](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=26)** Once you click on that link, you'll be taken to this page where you'll see a link to get a free download of SSMS.
>
> **[0:33](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=33)** Click on that and the program will start to install.
>
> **[0:37](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=37)** You can keep all of the default settings if prompted.
>
> **[0:40](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=40)** This may take a minute or two to fully set up.
>
> **[0:43](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=43)** You'll see this executable file installing in the bottom left-hand corner, and once that's ready, click on it and the program will begin to install.
>
> **[0:55](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=55)** Once you get to this pop-up window, click install to continue.
>
> **[1:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=60)** If you get this message that says do you want to allow this app to make changes to your device, click yes, and now the packages will start to install.
>
> **[1:15](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=75)** Once you get to this step, you've completed the setup, and you can click close to close out of this window.
>
> **[1:22](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=82)** Next, you'll need to install Microsoft SQL Server 2017 Express.
>
> **[1:26](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=86)** The link for this tool is also located on the main branch.
>
> **[1:30](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=90)** Your browser will open a new window where you can click the download button to install the tool.
>
> **[1:37](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=97)** And you can click on this executable file in the bottom left-hand corner to begin the installation process.
>
> **[1:43](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=103)** Once you get to this pop-up window, also select yes to continue.
>
> **[1:49](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=109)** Here, you can start by choosing the basic installation.
>
> **[1:54](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=114)** Click accept.
>
> **[1:57](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=117)** And install.
>
> **[2:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=120)** This process may also take a few minutes.
>
> **[2:09](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=129)** All right, so the installation has completed.
>
> **[2:11](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=131)** Once you get to this window, you're going to go ahead and click on connect now in the bottom left hand corner and that's going to open up a SQL Command prompt.
>
> **[2:19](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=139)** Now, we're not really going to do a whole lot here but what we do need from this terminal window is this information up here towards the top.
>
> **[2:29](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=149)** This right here is going to serve as your credentials for what you'll need to log into SSMS.
>
> **[2:35](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=155)** This is your username.
>
> **[2:36](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=156)** So in this case mine is this LCP4, and then ending with SQL Express.
>
> **[2:41](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=161)** You're going to want to copy all of the text here that's highlighted and now we're ready to head over to SSMS.
>
> **[2:50](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=170)** You can access the tool by going to your start bar, typing SSMS and then clicking on SQL Server Management Studio 19.
>
> **[3:01](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=181)** Copy and paste your username into the box in SQL Server Management Studio.
>
> **[3:06](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=186)** You can leave all of the other settings as the default and now we're ready to connect.
>
> **[3:12](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=192)** Now that we have the required tools, we can start to populate our database.
>
> **[3:16](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=196)** To create the new database, click on new query and you'll want to run the following commands.
>
> **[3:24](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=204)** Write use master.
>
> **[3:29](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=209)** On the next line write go.
>
> **[3:32](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=212)** Now you'll highlight the statements and click execute.
>
> **[3:36](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=216)** Next, we'll want to create a new database for all of our Red30 Tech data sets.
>
> **[3:40](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=220)** In order to do that, you'll want to run the command create database Red30 Tech.
>
> **[3:53](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=233)** Highlight this command and click execute.
>
> **[3:56](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=236)** Now, in order to switch to using this database, you'll want to run the command use Red30 Tech.
>
> **[4:10](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=250)** You can highlight and execute this statement as well.
>
> **[4:15](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=255)** Now we're ready to populate some data into our database.
>
> **[4:19](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=259)** You're going to want to open up the SQL Server 2017 import and export data wizard.
>
> **[4:24](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=264)** To do that, you'll head to the start menu, type 2017 and open the application.
>
> **[4:33](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=273)** Here it'll take you to this pop-up window where you'll want to select next to continue.
>
> **[4:38](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=278)** For your data source, we're going to want to select Microsoft Excel, and then browse to the path where you have your Excel files from the Red30 Tech database stored on your machine.
>
> **[4:51](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=291)** We'll collect the file that we want to upload, and then click open.
>
> **[4:57](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=297)** Click next.
>
> **[4:59](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=299)** Now, for our destination, we'll want to select SQL Server native Client 11.0.
>
> **[5:05](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=305)** Down here at the bottom where it says database, you'll want to ensure that Red30 Tech database you just created is selected and then click next.
>
> **[5:15](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=315)** Next, next again, next again and then finish.
>
> **[5:21](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=321)** And also click finish again.
>
> **[5:25](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=325)** So here in this execution report, if you want to ensure that the number of rows that were supposed to be transferred into SSMS were actually transferred, you can confirm that here and now our execution was successful and we can close the report.
>
> **[5:42](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=342)** in order to confirm that your data was properly uploaded, you can come over to SSMS and run select Star from Red30 Tech DBO Sessioninfo and execute the statement and you can see that all of the data from the Excel file is now present in the table.
>
> **[5:58](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=358)** So from here, you'll want to repeat these steps for each of the data sets in the database.
>
> **[6:03](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/setting-up-microsoft-sql-server?u=76281980&t=363)** You can take a moment to pause the video and then return to the course when you're ready.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (11), next (10), data (8), [[Microsoft SQL Server|Sql server]] (4), [[Microsoft SQL Server]] (3)
> **Env Vars:** sql (9), ssms (7), lcp4 (1), dbo (1)
> **Prerequisites:** install (7), you'll need (3), set up (2), setup (1)
> **UI Navigation:** click on (6), switch to (1), open the (1)
> **Tools:** github (1), command prompt (1), terminal (1)
> **CLI Commands:** make (1)
> **Versions:** 11.0 (1)
> **Speakers:** - [narrator] (1)

#### Adding primary key constraints
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/adding-primary-key-constraints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/adding-primary-key-constraints?u=76281980&t=0)** - [Tutor] Now that you've uploaded each of your tables to the database, you'll want to confirm that all of the tables that you intended to upload are actually here in the database.
>
> **[0:10](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/adding-primary-key-constraints?u=76281980&t=10)** So go to Object Explorer, click databases 'Red30Tech', tables, and you should see the six tables that you uploaded from the Excel files.
>
> **[0:19](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/adding-primary-key-constraints?u=76281980&t=19)** If you don't see all six tables here, try exiting out completely of SSMS and going back in.
>
> **[0:26](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/adding-primary-key-constraints?u=76281980&t=26)** If you still don't see all six tables at that point go back to the GitHub repo and make sure that you didn't miss one of the file downloads.
>
> **[0:33](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/adding-primary-key-constraints?u=76281980&t=33)** And so now up until this point, you may have noticed that this table doesn't have any primary key constraints.
>
> **[0:39](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/adding-primary-key-constraints?u=76281980&t=39)** And so the last step that we'll want to do is set those by running the entire SQL syntax, located in the 'environment_setup.SQL' file.
>
> **[0:49](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/adding-primary-key-constraints?u=76281980&t=49)** You'll paste all of the text from that file and then start at steps three and four.
>
> **[0:58](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/adding-primary-key-constraints?u=76281980&t=58)** We're going to skip steps one and two, just because that's the same logic that we've already run when we were setting up our database.
>
> **[1:05](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/adding-primary-key-constraints?u=76281980&t=65)** So here you'll highlight all of this text and run it all in one go.
>
> **[1:11](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/adding-primary-key-constraints?u=76281980&t=71)** Now you've correctly executed the SQL statement.
>
> **[1:14](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/adding-primary-key-constraints?u=76281980&t=74)** Alright, so now that you've added the primary key constraints to this table, you've finished the database set up.
>
> **[1:20](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/adding-primary-key-constraints?u=76281980&t=80)** If you missed a step, or you'd prefer to have written instructions, I've provided supplemental written materials with helpful screenshots and links in the how to access SSMS credentials and 'environment_setup' Word document in the main branch of the repo.
>
> **[1:34](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/adding-primary-key-constraints?u=76281980&t=94)** Now we're ready to get to the exciting part, the course content.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (4), [[SQL]] (3), [[Databases]] (1), [[Microsoft Excel|Excel]] (1), [[GitHub]] (1)
> **Env Vars:** sql (3), ssms (2)
> **Code Identifiers:** environment_setup (2)
> **File Paths:** environment_setup.sql (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Tools:** github (1)
> **UI Navigation:** go to (1)


### 1. Subqueries

[↑ Back to Table of Contents](#table-of-contents)

#### What is a subquery?
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/what-is-a-subquery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/what-is-a-subquery?u=76281980&t=0)** - [Presenter] The first advanced SQL function we'll learn about is the subquery.
>
> **[0:04](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/what-is-a-subquery?u=76281980&t=4)** Often subqueries are among the first set of functions that a user begins to learn when they transition from more basic SQL commands to more advanced operations.
>
> **[0:12](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/what-is-a-subquery?u=76281980&t=12)** So if you've made it this far, congratulations!
>
> **[0:15](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/what-is-a-subquery?u=76281980&t=15)** You're already on your way to expanding your skillset.
>
> **[0:18](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/what-is-a-subquery?u=76281980&t=18)** And so what exactly is the subquery anyways?
>
> **[0:21](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/what-is-a-subquery?u=76281980&t=21)** At a high-level, a subquery is exactly what it sounds like.
>
> **[0:26](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/what-is-a-subquery?u=76281980&t=26)** It's a query within another query.
>
> **[0:28](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/what-is-a-subquery?u=76281980&t=28)** Subqueries can appear in the select where, having, and from clauses of an outer or main query.
>
> **[0:35](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/what-is-a-subquery?u=76281980&t=35)** They can also be used with the update, insert, and delete statements.
>
> **[0:40](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/what-is-a-subquery?u=76281980&t=40)** Subqueries are used when you want to filter the results of the outer query based on the subset, keyword, sub of information that is extracted from the inner query.
>
> **[0:50](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/what-is-a-subquery?u=76281980&t=50)** And these words may not mean a whole lot at the moment but as we work through some examples together, the concept of a subquery should become less intimidating.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2)
> **Env Vars:** sql (2)
> **Speakers:** - [presenter] (1)

#### Syntax of a scalar subquery
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=0)** - [Instructor] Two of the most common types of subqueries are scalar and multiple row.
>
> **[0:03](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=3)** Scalar subqueries return a single result, usually the result of an aggregate function like average, min, max, or count, and that result is then used as criteria to filter the outer query.
>
> **[0:14](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=14)** This type of subquery is typically used in the select or where statements.
>
> **[0:18](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=18)** For example, in the query to the right, we show how the subquery can be implemented into the where clause.
>
> **[0:25](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=25)** This query uses a scalar subquery to identify orders whose total is the same or higher than the average total price of all other orders.
>
> **[0:33](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=33)** Let's head over to the database to set up this query for ourselves.
>
> **[0:37](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=37)** This exercise uses the Red 30 Tech US online retail sales file where we have different information for products sold at the Red 30 Tech conference, such as the order date, order type, product names, quantities, and prices.
>
> **[0:50](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=50)** If you need to preview this table, you can run this command here.
>
> **[0:55](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=55)** But now let's get started with our subquery.
>
> **[0:57](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=57)** So just as a reminder, our task is to write a query that uses a scalar subquery to identify orders whose total is the same or higher than the average price of all others.
>
> **[1:07](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=67)** Since our request doesn't specify that we only want certain columns, I'm going to go ahead and just do a select star.
>
> **[1:13](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=73)** We want to select star from the online retail sales table, and so, so far, this looks like a query that you've seen before.
>
> **[1:21](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=81)** The next portion is where we'll see our subquery come into play.
>
> **[1:25](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=85)** Since we're only interested in orders where the order total is greater than the average price of all other orders, we can specify this logic in the subquery.
>
> **[1:34](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=94)** So we'll write where order total is greater than or equal to, and then we'll write select the average
>
> **[1:58](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=118)** order total
>
> **[2:07](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=127)** from our Red 30 Tech online retail sales table.
>
> **[2:13](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=133)** Now we're ready to run the query.
>
> **[2:20](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=140)** So that's it.
>
> **[2:22](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=142)** In summary, this query, the subquery, calculates the average price of the order totals, which is the value that we use to filter the outer query on.
>
> **[2:30](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=150)** I want to note here that this subquery can actually be run as a query on its own.
>
> **[2:35](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=155)** If we execute the statement, we see that the average price of the orders is $1,386, so knowing this can greatly help you in the debugging stage and it can help to ensure that you're filtering on the results that you want to be filtering on here.
>
> **[2:50](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=170)** Once we run our sub query and see that the average price of the order is 1,386 and then go back to run this query in its entirety, we can confirm that everything that's coming back in this table is greater than the 1,386 total.
>
> **[3:10](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=190)** And lastly, although here we have this query as part of the where statement, we can also use it as part of the select statement to help in the debugging process too.
>
> **[3:19](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=199)** So in order to do that, I'll take the entire subquery, copy it, and add it as its own line to the select statement.
>
> **[3:29](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=209)** You also want to give this subquery its own alias, and here, I'll just call it something simple like average total.
>
> **[3:37](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=217)** Now, when we run the query in its entirety again, we see that our average total column has output this 1,386 as its own column value.
>
> **[3:47](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=227)** And so here, this is just another tip that's helpful for debugging for you to go through and confirm that the order totals that we're receiving back are in fact greater than this average total.
>
> **[3:58](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=238)** But also this can be helpful down the line if you want to use this column value as a value to perform additional operations.
>
> **[4:06](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=246)** And so take a moment to think of other use cases for this particular type of function.
>
> **[4:11](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-scalar-subquery?u=76281980&t=251)** Next, we'll get into another popular type of subquery, the multi-row subquery.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Debugging]] (3), next (2), database (1), [[Microsoft Products|Products]] (1), product (1)
> **Analogies:** for example (1), such as (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Syntax of a multiple-row subquery
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=0)** - [Instructor] Multiple row subqueries are just as they sound, it's a subquery whose results set contains multiple rows, similar to a scaler subquery.
>
> **[0:08](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=8)** These multiple rows are used as filters on the outer query.
>
> **[0:11](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=11)** They're typically used in the WHERE clause with operators including IN and NOT IN EXISTS and NOT EXISTS and ANY and ALL.
>
> **[0:19](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=19)** For example, in the query below, a company called Two Trees Olive Oil wants to know the session name, start date, end date, and room that their employees will be delivering their presentations in.
>
> **[0:30](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=30)** One way to solve this problem is by writing a subquery that uses the IN operator.
>
> **[0:34](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=34)** To extract this information, let's head over to the database and run this query for ourselves.
>
> **[0:39](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=39)** In this query we'll use the Red 30 Tech conference session Info and speaker info Data sets.
>
> **[0:45](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=45)** The session info dataset contains information about each session that's being delivered at the conference, including the location, dates and times speaker info and a description.
>
> **[0:59](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=59)** The speaker info dataset has information regarding each of the speakers, their places of employment, job titles and short biographies.
>
> **[1:08](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=68)** To remind you of our example problem a company called Two Trees Olive Oil wants to know the session name, start date, end date, and room that their employees will be delivering their presentations in.
>
> **[1:19](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=79)** Let's select our fields of interest from the session info table.
>
> **[1:25](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=85)** So we're right.
>
> **[1:27](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=87)** Select speaker name, session name, start date, end date, and room name from the session info table.
>
> **[2:04](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=124)** Since the speaker's employer is not included in the session info dataset that is where we'll rely on the subquery to pull in that criteria from the speaker info table.
>
> **[2:13](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=133)** Now, in the where clause is where we'll want to implement our subquery, remember that in the prompt we're interested in only returning results for speakers who are employed by Two Trees Olive Oil.
>
> **[2:25](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=145)** Since the speaker's employers not included in the session info dataset, that's where we'll rely on the subquery to pull in that criteria.
>
> **[2:32](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=152)** From the speaker info table, in our subquery we'll write select where the speaker name
>
> **[2:47](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=167)** is in, select name from the speaker info table
>
> **[3:08](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=188)** where the organization is Two Trees Olive Oil,
>
> **[3:26](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=206)** and then we'll close out the subquery with the parentheses, you can run the subquery as a standalone query to ensure that you're getting the intended results back.
>
> **[3:35](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=215)** If we run the subquery on its own we see that Anna Rossi, Darren Sealy and Jonathan Kim are Two Trees Olive Oil employees.
>
> **[3:46](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=226)** This list of individuals is what is passed to the outer query.
>
> **[3:51](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=231)** Once we run the query as a whole We can see that sessions for only those three employees are returned.
>
> **[4:01](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=241)** In this first example, we've used the subquery as part of the WHERE clause, but I also want to demonstrate how these same results can be achieved by executing the subquery with an inner join.
>
> **[4:12](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=252)** First, we can keep the initial structure that we have of this query where we're selecting the fields that we want.
>
> **[4:24](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=264)** Here I'm going to give this query an alias just for readability down the road.
>
> **[4:30](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=270)** In the next portion I'll incorporate the speaker info table multiple row subquery with an inner join statement and we'll give that an alias too.
>
> **[4:40](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=280)** So we'll want to write inner join and then we'll take our subquery selecting the name from the speaker info table where the organization is Two Trees Olive Oil.
>
> **[5:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=300)** I'll backspace this just to have it look a little better and then also give this an alias, as speak.
>
> **[5:09](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=309)** And finally, the last step of this query will be to give it a joint criteria we'll want to join on, SES speaker name equals speak name.
>
> **[5:32](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=332)** Now, before I run this, I just want to pause to say that normally I would not recommend that someone joins on name fields alone, in large data sets.
>
> **[5:41](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=341)** It's common that employees, customers or entities could have repeating names which would yield incorrect results, but based on this dataset that's on an issue, so we can proceed.
>
> **[5:52](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=352)** Now, let's go ahead and run this query, and here you go.
>
> **[5:58](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=358)** Now you can see that the query executed with the inner join statement returns the same results as the one executed in the WHERE clause.
>
> **[6:05](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=365)** Both approaches are valid and you may choose whichever is the most intuitive to you the developer, or which best suits your use case.
>
> **[6:13](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-a-multiple-row-subquery?u=76281980&t=373)** Next, we'll cover two additional concepts of Subqueries, correlated and uncorrelated subqueries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), next (2), database (1), prompt (1)
> **Env Vars:** where (3), exists (2), ses (1)
> **SQL:** where (3)
> **Analogies:** similar to (1), for example (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Uncorrelated subquery
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/uncorrelated-subquery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/uncorrelated-subquery?u=76281980&t=0)** - [Instructor] I want to stay on the screen from the previous video, because although you may not have heard of an uncorrelated subquery before, you've actually already been exposed to some.
>
> **[0:09](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/uncorrelated-subquery?u=76281980&t=9)** I want to highlight that in this particular example, on top of being a multiple row subquery, our query is also considered an uncorrelated subquery.
>
> **[0:17](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/uncorrelated-subquery?u=76281980&t=17)** Uncorrelated subqueries may also be referred to as nested subqueries.
>
> **[0:21](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/uncorrelated-subquery?u=76281980&t=21)** And so what exactly does that mean, and how do you identify one?
>
> **[0:25](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/uncorrelated-subquery?u=76281980&t=25)** Remember what I said earlier about inner queries and outer queries?
>
> **[0:28](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/uncorrelated-subquery?u=76281980&t=28)** In an uncorrelated subquery, an inner query is independent of its outer query.
>
> **[0:34](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/uncorrelated-subquery?u=76281980&t=34)** Said in simpler terms, you can run the inner query as its own standalone query and still get results.
>
> **[0:41](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/uncorrelated-subquery?u=76281980&t=41)** In this example, if we run the subquery, we can see the three employees of Two Trees Olive Oil, Anna Rossi, Darren Seeley, and Jonathan Kim.
>
> **[0:50](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/uncorrelated-subquery?u=76281980&t=50)** Most subqueries are this type, and knowing that an uncorrelated subquery can be run separately is a huge advantage in debugging your SQL statements.
>
> **[0:59](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/uncorrelated-subquery?u=76281980&t=59)** In the next video, we'll discuss the opposite of an uncorrelated subquery, the correlated subquery.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Debugging]] (1), [[SQL]] (1), next (1)
> **Cross-References:** previous video (1), in the next (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Correlated subquery
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=0)** - [Instructor] Correlated subqueries are different from uncorrelated subqueries in that the subquery cannot be run independently.
>
> **[0:07](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=7)** The style of execution of a correlated subquery is different, too.
>
> **[0:10](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=10)** A correlated subquery runs once for each row in the outer query.
>
> **[0:14](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=14)** Rather than being run all at once, it then uses criteria like in uncorrelated subquery.
>
> **[0:20](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=20)** Because correlated subqueries are run for each row in the outer query, it's not the best choice in terms of speed and optimization, but it's still a good tool to know to have in your skillset if a use case for it exists.
>
> **[0:31](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=31)** What exactly does this look like in practice?
>
> **[0:33](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=33)** Let's walk through an example together in SSMS.
>
> **[0:38](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=38)** Red 30 Tech has noticed that they have received online sales from customers from all 50 states except Rhode Island and Vermont.
>
> **[0:45](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=45)** The conference organizers are interested in why exactly customers from those states seem uninterested in their products.
>
> **[0:51](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=51)** Is their marketing being received differently?
>
> **[0:54](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=54)** Are there other strong competitors in the area?
>
> **[0:56](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=56)** What is it?
>
> **[0:57](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=57)** The organizers would like to see if any of the conference attendees came from those states so they can follow up with them and learn more about where they may be going wrong.
>
> **[1:05](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=65)** Your task is to write a query that outputs the first and last name, state, email address, and phone number of conference attendees who came from states that have no online retail sales.
>
> **[1:16](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=76)** To complete this task, we'll use the Red 30 Tech online retail sales dataset from an earlier example and a new dataset, the convention attendees table.
>
> **[1:26](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=86)** The online retail sales dataset stores information about the customer who has placed an online order such as their name, state, and customer type.
>
> **[1:39](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=99)** And the convention attendees table has location and contact information for everyone who attended the conference.
>
> **[1:49](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=109)** The select statement in the outer query will contain the columns we wish to output.
>
> **[1:54](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=114)** So we can start by writing select, first name, last name, state, email, and phone number from the convention attendees table.
>
> **[2:36](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=156)** And we can go ahead and give this an alias as C.
>
> **[2:39](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=159)** But how exactly do we determine which states appear in the conference attendee table and not in the online retail sales table?
>
> **[2:46](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=166)** This is where our friend, the not exist operator, comes in handy.
>
> **[2:50](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=170)** Not exist is used to isolate rows from the subquery where a match does not exist in the outer query.
>
> **[2:56](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=176)** In this example, we'll use where not exist to extract what states from the online retail sales are not present in the conference attendees table.
>
> **[3:10](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=190)** So we'll write where not exist, select customer state from the online retail sales table
>
> **[3:35](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=215)** as O where the C state equals O dot customer state and then close out the subquery with parentheses.
>
> **[3:58](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=238)** When you run this query, notice that the results we get back are only for attendees living in Rhode Island or Vermont without us having to explicitly filter on them.
>
> **[4:10](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=250)** This makes the query more flexible in the future if customers from either state were to start making purchases.
>
> **[4:17](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=257)** Now, the part where we confirmed that this query is indeed a correlated subquery.
>
> **[4:22](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=262)** Try to run the subquery on your own.
>
> **[4:24](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=264)** You get an error, right?
>
> **[4:30](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=270)** The inability of this subquery to be run on its own is what defines a correlated subquery.
>
> **[4:36](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=276)** One way that I remember this difference is remembering that co-related is like codependent.
>
> **[4:41](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=281)** These queries are fully dependent on each other to return results.
>
> **[4:44](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=284)** And that brings us to the end of the chapter.
>
> **[4:47](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/correlated-subquery?u=76281980&t=287)** Now that you've learned about the various types of subqueries, it's time to put your knowledge to the test with a challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **Env Vars:** ssms (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Create a subquery
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-create-a-subquery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-create-a-subquery?u=76281980&t=0)** - [Instructor] All right, let's start our first challenge.
>
> **[0:08](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-create-a-subquery?u=76281980&t=8)** In this problem, we'll be using a new table, the Inventory Table.
>
> **[0:12](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-create-a-subquery?u=76281980&t=12)** This table consists of basic inventory information, such as in stock quantities and number of units, and in terms of dollar amount for each product the convention sells.
>
> **[0:21](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-create-a-subquery?u=76281980&t=21)** Often, a company engages in some form of inventory management to ensure that they have enough supplies on hand to meet the demand from their customers.
>
> **[0:28](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-create-a-subquery?u=76281980&t=28)** If they're running low on a particular item, that might be a sign that it's time to order it again.
>
> **[0:33](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-create-a-subquery?u=76281980&t=33)** So your task will be to write a query that uses a subquery to return the ProdCategory, ProdNumber, ProdName, and In Stock of items that have less than the average amount of products left in stock to help the business know which products they're running low on.
>
> **[0:50](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-create-a-subquery?u=76281980&t=50)** Pause the video to give yourself enough time to solve this and head to the next video when you're ready for the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), product (1), management (1), business (1), next (1)
> **Cross-References:** next video (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Create a subquery
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-subquery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-subquery?u=76281980&t=0)** - [Instructor] Here, the resulting data set shows only the products that have lower than average quantities in stock.
>
> **[0:10](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-subquery?u=76281980&t=10)** You should have 47 rows in your output.
>
> **[0:14](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-subquery?u=76281980&t=14)** Now, we'll head over to the database to walk through the solution.
>
> **[0:17](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-subquery?u=76281980&t=17)** In our solution, we want to select the product category, the product number,
>
> **[0:37](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-subquery?u=76281980&t=37)** product name, and in stock
>
> **[0:52](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-subquery?u=76281980&t=52)** from the Red 30 Tech inventory table.
>
> **[0:59](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-subquery?u=76281980&t=59)** Remember that we want to only extract products that have less than the average amount left in stock, so in our subquery, we'll want to instruct SQL to select where the in-stock quantity is less than select the average in-stock quantity from the inventory table.
>
> **[1:39](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-subquery?u=76281980&t=99)** Here, we can rerun the subquery and see that our average in stock quantity is about 362.
>
> **[1:49](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-subquery?u=76281980&t=109)** Now, once we run the query in its entirety, we can see that we're only left with the items that have below 362 in stock.
>
> **[2:01](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-subquery?u=76281980&t=121)** By being able to write a query that extracts items that are low in stock, you can allow the business to prioritize ordering the items that they need the most.
>
> **[2:09](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-subquery?u=76281980&t=129)** I want to pause here and remind you that there are multiple ways to solve this problem, so if your syntax doesn't exactly match mine, that's okay, as long as the output does.
>
> **[2:19](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-subquery?u=76281980&t=139)** If your output matches mine, then great job.
>
> **[2:22](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-subquery?u=76281980&t=142)** This concept can be hard for many learners to grasp.
>
> **[2:24](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-subquery?u=76281980&t=144)** If your outcome doesn't match mine, then attempt to look at the solution syntax to identify where you may have made a mistake.
>
> **[2:30](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-subquery?u=76281980&t=150)** Once you're ready, we'll move on to the next chapter, CTEs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (3), [[Microsoft Products|Products]] (2), data (1), database (1), [[SQL]] (1)
> **Env Vars:** sql (1)
> **Cross-References:** next chapter (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Common Table Expressions (CTE)

[↑ Back to Table of Contents](#table-of-contents)

#### Syntax of CTEs
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=0)** - [Instructor] Common table expressions, referred to as CTEs, are another powerful tool to use in SQL.
>
> **[0:06](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=6)** CTEs are actually really similar to subqueries in terms of their uses, and many times they can be used interchangeably.
>
> **[0:13](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=13)** CTEs are a named temporary result set that can be referenced in a query, typically used when the output you are trying to achieve involves complex query operations, like multiple subqueries or temp tables intertwined.
>
> **[0:25](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=25)** This single named result set can be referenced multiple times within the same query.
>
> **[0:30](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=30)** While the subquery is a query within a query, CTEs are different in that they're accompanied by the WITH clause and placed at the beginning of a query statement.
>
> **[0:38](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=38)** Let's look at an example from earlier.
>
> **[0:40](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=40)** In this example, we are rewriting the query from video 01/02 using a CTE.
>
> **[0:46](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=46)** Here, you can see how this has a bit of a different structure than what we saw in video 01/02, starting with the WITH clause.
>
> **[0:53](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=53)** Let's head over to the database to write this query out and discuss more about its syntax.
>
> **[0:59](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=59)** As a reminder, this exercise uses the Red 30 Tech online retail sales table where we have different information for products sold at the Red 30 Tech Conference, such as the order date, order type, product names, quantities, and prices.
>
> **[1:13](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=73)** So, let's write out the query we had from the slides.
>
> **[1:17](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=77)** Here, we're going to rewrite the query from video 01/02 that outputs orders whose order total is the same or higher than the average total price of all other orders.
>
> **[1:27](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=87)** Since we're constructing a CTE this time, the first thing we'll want to do is start with the WITH clause.
>
> **[1:33](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=93)** Then we give our CTE a name.
>
> **[1:35](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=95)** In this case, I'll call it average total, followed by the column from our expression that we want to extract, which is average underscore total.
>
> **[1:50](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=110)** And finally, we end this line with the as clause.
>
> **[1:53](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=113)** The next portion is where we'll see our CTE come into play.
>
> **[1:56](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=116)** Since we're only interested in orders where the order total is greater than the average price of all orders, we can specify that in our CTE.
>
> **[2:06](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=126)** We'll write select average order total
>
> **[2:20](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=140)** as average underscore total from the Red 30 Tech
>
> **[2:31](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=151)** online retail sales table.
>
> **[2:42](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=162)** Notice how here the CTE expression is enclosed in a set of parentheses, just like it was when we used the subquery.
>
> **[2:49](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=169)** Before we move on to the rest of the query, I want to point out that you can check the output of your CTE by running the CTE expression as its own standalone query, just like we did in our uncorrelated subquery example.
>
> **[3:04](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=184)** Here, we get the same amount back that our average total is $1,386.
>
> **[3:10](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=190)** Next, is where we'll incorporate our CTE with the rest of the online retail sales table.
>
> **[3:17](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=197)** In a new line, we want to select all fields
>
> **[3:26](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=206)** from the online retail sales table, like we did before, and then we'll also add comma average total, directly referencing the CTE as if it's a table in the database.
>
> **[3:44](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=224)** Once we've referenced the query, we're able to use it to filter the result set by writing where order total
>
> **[3:57](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=237)** is greater than or equal to the average total column.
>
> **[4:05](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=245)** And here we go.
>
> **[4:09](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=249)** Notice our query results are exactly the same as what we achieved when we wrote this query as a scaler subquery with 852 rows.
>
> **[4:17](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=257)** This syntax contains an example of a CTE called a non-recursive CTE.
>
> **[4:22](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=262)** Non-recursive CTEs are CTEs that do not reference themselves within the CTE expression, like we do here.
>
> **[4:29](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=269)** These are the most common types of CTEs you'll see in practice.
>
> **[4:33](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/syntax-of-ctes?u=76281980&t=273)** In order to best understand what a non-recursive CTE is, it's helpful to view an example of its counterpart, the recursive CTE, which we'll cover in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (3), database (2), [[Representational State Transfer (REST)|Rest]] (2), [[SQL]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** cte (15), sql (1)
> **Analogies:** just like (2), similar to (1), such as (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Recursive CTEs
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=0)** - [Instructor] The next type of CTE that we'll discuss is a recursive CTE.
>
> **[0:04](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=4)** Recursive CTEs are often used to model data composed of relationship structures, such as network graphs and hierarchical data like organizational charts.
>
> **[0:14](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=14)** In a recursive CTE, you define two select statements.
>
> **[0:17](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=17)** The first select statement is called the anchor member and it returns the base result set for the query.
>
> **[0:23](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=23)** The second select statement is called the recursive member and it references the CTE itself, building on the base result set returned by the anchor member.
>
> **[0:32](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=32)** An optional break condition in the recursive member tells the query a condition which it can stop running if your use case requires it.
>
> **[0:40](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=40)** Anchor and recursive members are separated by operators like UNION, UNION ALL, intersect or accept.
>
> **[0:47](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=47)** For example, you may have a data set like the Red 30 Tech employee directory, where you have a list of employees, their title, department, and who they report to.
>
> **[0:56](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=56)** The network graph to the right models the reporting relationship of each employee and shows how each employee fits into the overall business.
>
> **[1:04](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=64)** But say from the status set, we're interested in identifying how many direct reports each employee has by counting the number of employees who reports into each individual.
>
> **[1:13](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=73)** If you were to construct a network graph of the dataset, likely using a tool like Python or R, you would calculate a measure called the in degrees in network analysis to see that Grant Nguyen has 11 direct reports, Samuel Brooks has 10 direct reports, and so on.
>
> **[1:28](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=88)** And bonus material, if you're interested in seeing how I made this network graph in Python, a Jupyter Notebook is included in the GitHub repo page for this course.
>
> **[1:38](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=98)** But wait a minute, you might be thinking, isn't this a SQL course?
>
> **[1:42](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=102)** How can we extract these same results using SQL?
>
> **[1:45](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=105)** Let's head over to the SSMS database to tackle a problem together.
>
> **[1:50](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=110)** In this example, we want to return a count of how many employees report to Grant Nguyen.
>
> **[1:55](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=115)** First, we'll start out the CTE by writing with direct reports as.
>
> **[2:06](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=126)** Next, we want to construct the anchor member, which serves as the base set or somewhat of a starting point for our recursive query to begin.
>
> **[2:16](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=136)** This is where you'll want to select the employee ID,
>
> **[2:25](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=145)** first name, last name, and manager from our Red 30 Tech employee directory.
>
> **[2:48](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=168)** Here, we're going to want to select only where the employee ID equals 42, Grant's ID.
>
> **[3:05](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=185)** The next part is where we'll incorporate a function we haven't discussed yet, UNION ALL.
>
> **[3:09](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=189)** UNION ALL is used to join two separate select statements together, which is exactly what we want to do with this type of query.
>
> **[3:21](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=201)** The next part of the query will contain the recursive member.
>
> **[3:24](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=204)** The recursive member is set to build on the results returned by the anchor member, generating a hierarchical result set.
>
> **[3:31](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=211)** So we'll structure the beginning of the recursive member just like we structured the anchor member by writing select employee id, first name, last name, and manager from the employee directory table.
>
> **[3:49](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=229)** Here we'll do something slightly different where we're going to give this portion alias as E and because we're giving an alias, we can go back and make sure that each of our columns have that alias with it.
>
> **[4:12](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=252)** The next part is key in getting this recursion to work.
>
> **[4:15](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=255)** Here, you'll need to interjoin back on the direct report CTE and join on manager ID equals employee ID.
>
> **[4:43](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=283)** Then, we'll close the statement with another parentheses.
>
> **[4:52](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=292)** This part is a bit tricky, so I want to stop and discuss before moving on to the final portion of the query.
>
> **[4:58](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=298)** In a recursive CTE, the recursive member references itself, either directly or indirectly.
>
> **[5:05](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=305)** The recursive member typically contains a join that shows the relationship between the rows generated and the current iteration to the rows generated in the previous iteration, which is what we did here when we joined the manager ID to the employee id.
>
> **[5:23](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=323)** This joint condition is important because it controls the recursion and ensures that this process stops at some point once all conditions have been satisfied.
>
> **[5:31](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=331)** Now that we've summarized that, onto the final step.
>
> **[5:35](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=335)** Because here we're interested in calculating exactly how many employees report to Grant, we'll want to do account star to see how many employees were returned by the CTE.
>
> **[5:45](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=345)** So we'll write select count, star, and give our column a name, as direct underscore reports from our direct reports CTE as D, where D employee ID is not equal to 42.
>
> **[6:21](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=381)** And there you have it.
>
> **[6:22](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=382)** 11 employees report to Grant, the same number of in degrees that was calculated in Python.
>
> **[6:29](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=389)** Again, although this query type is less common, if you work in industries like human resources or social media that frequently deal with hierarchical relationships or network graphs, you may run into this concept more often.
>
> **[6:41](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=401)** To summarize, remember that the recursive member builds upon the results returned by the anchor member by going through a recursive process to output the final results set.
>
> **[6:51](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/recursive-ctes?u=76281980&t=411)** Now that you've been exposed to various types of CTEs and their use cases, it's time for another challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (5), data (3), [[Python (Programming Language)|Python]] (3), [[SQL]] (2), business (1)
> **Env Vars:** cte (9), union (4), sql (2), ssms (1)
> **CLI Commands:** python (3), make (1)
> **Definitions:** is a  (2), is called (2)
> **Analogies:** such as (1), for example (1), just like (1)
> **Tools:** jupyter (1), github (1)
> **UI Navigation:** select the (1)
> **Exercise Files:** github repo (1)

#### Challenge: Create a CTE
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-create-a-cte?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-create-a-cte?u=76281980&t=0)** - [Instructor] And now it's time for our second challenge.
>
> **[0:03](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-create-a-cte?u=76281980&t=3)** Similar to how I demonstrated how to convert a subquery from an earlier chapter to a CTE in Video 0201, I would like you to convert the subquery that you created in our first challenge into a CTE.
>
> **[0:16](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-create-a-cte?u=76281980&t=16)** In this problem, we'll be using the same table as we did in our first challenge, the Inventory Table.
>
> **[0:21](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-create-a-cte?u=76281980&t=21)** As a reminder, this table consists of basic inventory information, such as in stock quantities and number of units, and in terms of dollar amounts for each product the convention sells.
>
> **[0:31](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-create-a-cte?u=76281980&t=31)** So your new task is to write a query that uses a CTE to return the product category, product number, product name and In Stock of items that have less than the average amount of products left in stock to help the business know which products they're running low on.
>
> **[0:47](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-create-a-cte?u=76281980&t=47)** Pause the video and give yourself enough time to solve this and go to the next video when you're ready for the solution.
>
> **[0:52](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-create-a-cte?u=76281980&t=52)** As a hint, you can reference the subquery you wrote in chapter one to help you get started on this problem.
>
> **[0:58](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-create-a-cte?u=76281980&t=58)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (4), [[Microsoft Products|Products]] (2), business (1), next (1)
> **Env Vars:** cte (3)
> **Analogies:** similar to (1), such as (1)
> **Cross-References:** next video (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Solution: Create a CTE
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-cte?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-cte?u=76281980&t=0)** - [Instructor] Here, the resulting dataset shows only the products that have lower than average quantities in stock.
>
> **[0:10](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-cte?u=76281980&t=10)** Again, you should have 47 rows in your output.
>
> **[0:13](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-cte?u=76281980&t=13)** Same as what we had when we wrote this as a subquery.
>
> **[0:16](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-cte?u=76281980&t=16)** In case you didn't get the correct results or want an explanation of how I arrived at the solution, we'll head over to the database to walk through the solution together.
>
> **[0:25](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-cte?u=76281980&t=25)** To arrive at this answer, we'll first want to construct a CTE expression which I'll call low stock that starts with the with clause and it extracts a column called stock.
>
> **[0:39](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-cte?u=76281980&t=39)** The CTE will contain what we use as a subquery in the last example where we'll select the average in stock as stock from the Red30Tech inventory table.
>
> **[1:18](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-cte?u=76281980&t=78)** This is what we use to calculate the average inventory levels.
>
> **[1:25](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-cte?u=76281980&t=85)** In the last portion of the query, we'll select only the product category,
>
> **[1:36](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-cte?u=76281980&t=96)** product number,
>
> **[1:44](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-cte?u=76281980&t=104)** product name and in stock from the Red30Tech inventory table comma our lowStock CTE.
>
> **[2:08](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-cte?u=76281980&t=128)** And lastly, you'll want to filter the query results where the in stock quantity is less than the average stock level which we named stock in the CTE expression
>
> **[2:25](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-cte?u=76281980&t=145)** and we're done!
>
> **[2:30](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-cte?u=76281980&t=150)** Hopefully, your output matches mine.
>
> **[2:33](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-cte?u=76281980&t=153)** Again here, your syntax might look slightly different but because there are multiple ways you could go about solving this problem.
>
> **[2:39](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-cte?u=76281980&t=159)** If you have the same output as me, you're doing great.
>
> **[2:41](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-cte?u=76281980&t=161)** If your output doesn't match mine attempt to look at the solution and identify where you may have made a mistake.
>
> **[2:47](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-cte?u=76281980&t=167)** Now that you've written this query out both ways, take a moment to think about the differences in the subquery versus the CTE approach and notice what you like in one approach compared to the other.
>
> **[2:57](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-create-a-cte?u=76281980&t=177)** In the next chapter, we'll discuss the advantages and disadvantages of each approach and why you might choose one method over the other.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (3), [[Microsoft Products|Products]] (1), database (1), next (1)
> **Env Vars:** cte (5)
> **Cross-References:** in the last (2), in the next (1)
> **Code Identifiers:** lowstock (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Difference between a CTE and a subquery
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/difference-between-a-cte-and-a-subquery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/difference-between-a-cte-and-a-subquery?u=76281980&t=0)** - [Instructor] With all of this talk about the similarities of subqueries and CTEs, you might be wondering, what's the difference and how should I go about deciding when to use one versus the other?
>
> **[0:09](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/difference-between-a-cte-and-a-subquery?u=76281980&t=9)** Aside from the obvious syntactical differences, there are a few other defining characteristics of each type of operation, but as it turns out, a lot of it depends on the use case you're dealing with and your preferences.
>
> **[0:21](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/difference-between-a-cte-and-a-subquery?u=76281980&t=21)** On one hand, CTEs are generally more readable and organized than subqueries, because they can break more complex queries down into smaller, more manageable chunks.
>
> **[0:31](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/difference-between-a-cte-and-a-subquery?u=76281980&t=31)** Because CTEs can continue to be referenced multiple times throughout the query, they can also cut down on query length.
>
> **[0:37](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/difference-between-a-cte-and-a-subquery?u=76281980&t=37)** And since they don't depend on the main query, CTEs can be easier to reuse in future queries for other use cases.
>
> **[0:44](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/difference-between-a-cte-and-a-subquery?u=76281980&t=44)** Subqueries tend to be more concise for simple queries.
>
> **[0:48](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/difference-between-a-cte-and-a-subquery?u=76281980&t=48)** Since they're older, subqueries are better supported across most database engines.
>
> **[0:52](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/difference-between-a-cte-and-a-subquery?u=76281980&t=52)** Subqueries have been around since SQL's creation in the '70s.
>
> **[0:55](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/difference-between-a-cte-and-a-subquery?u=76281980&t=55)** While CTEs have only been around since the late '90s.
>
> **[0:59](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/difference-between-a-cte-and-a-subquery?u=76281980&t=59)** since the CTE appeared later, it's not always supported by some older database engines or the tools that came before it.
>
> **[1:06](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/difference-between-a-cte-and-a-subquery?u=76281980&t=66)** Subqueries also take up less memory.
>
> **[1:08](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/difference-between-a-cte-and-a-subquery?u=76281980&t=68)** Since Subqueries cannot be referenced multiple times like CTEs, they're not stored in memory and they're discarded once they're used.
>
> **[1:15](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/difference-between-a-cte-and-a-subquery?u=76281980&t=75)** This can be an advantage in working with large data sets or instances where memory allocation is a concern.
>
> **[1:21](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/difference-between-a-cte-and-a-subquery?u=76281980&t=81)** Overall, the performance differences across CTEs and subqueries vary depending on the use case it's applied to, as well as how well optimized the query is written by the developer.
>
> **[1:31](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/difference-between-a-cte-and-a-subquery?u=76281980&t=91)** In general, subqueries tend to be more efficient when working with smaller data sets, while CTEs tend to be more efficient with larger data sets.
>
> **[1:39](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/difference-between-a-cte-and-a-subquery?u=76281980&t=99)** And that wraps up this chapter.
>
> **[1:42](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/difference-between-a-cte-and-a-subquery?u=76281980&t=102)** The next few chapters will take a deep dive into one of the most important concepts in advanced SQL, windows functions.
>
> **[1:48](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/difference-between-a-cte-and-a-subquery?u=76281980&t=108)** Because the use cases of windows functions are so vast, we've broken this concept up into multiple videos with several common functions within them.
>
> **[1:56](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/difference-between-a-cte-and-a-subquery?u=76281980&t=116)** So if you've made it this far, congrats.
>
> **[1:59](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/difference-between-a-cte-and-a-subquery?u=76281980&t=119)** The fun is just beginning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), database (2), [[SQL]] (2), [[Windows]] (2), next (1)
> **Env Vars:** sql (2), cte (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Windows Functions: ROW_NUMBER()

[↑ Back to Table of Contents](#table-of-contents)

#### Introduction to window functions
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-window-functions?u=76281980&t=0)** - [Instructor] The next types of functions we'll introduce are examples of Windows functions.
>
> **[0:04](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-window-functions?u=76281980&t=4)** Early in my SQL journey, I heard the term Windows functions thrown around a lot, yet I had no idea what they meant.
>
> **[0:11](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-window-functions?u=76281980&t=11)** Windows functions are some of the most challenging yet most useful tools in SQL, but knowing when to use them is often half the battle.
>
> **[0:18](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-window-functions?u=76281980&t=18)** They're used often in a task such as pulling a most recent event, calculating moving averages, or counting the occurrences of a specific combination of criteria, which are all common tasks in data analytics.
>
> **[0:29](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-window-functions?u=76281980&t=29)** Windows functions are a concept that I believe takes a developer's SQL skills from basic to advanced, and there are three main types of Windows functions that we have: aggregate, ranking and values functions.
>
> **[0:41](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-window-functions?u=76281980&t=41)** Windows functions are applied to a set of rows called a window or frame.
>
> **[0:45](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-window-functions?u=76281980&t=45)** The difference between a standard aggregate function like min, max and average versus a Windows function is that a standard aggregate function operates on the entire result set, where Windows functions perform calculations based on a subset of the result set defined by a window or frame.
>
> **[1:01](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-window-functions?u=76281980&t=61)** Before we walk through an example using the Red30 Tech database, let's first review the different components of a Windows function.
>
> **[1:08](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-window-functions?u=76281980&t=68)** First, we have the function name.
>
> **[1:10](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-window-functions?u=76281980&t=70)** This is the specific type of Windows function that you're wanting to construct, like row number, sum or rank.
>
> **[1:16](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-window-functions?u=76281980&t=76)** Next, we have the partition by.
>
> **[1:18](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-window-functions?u=76281980&t=78)** This clause tells SQL over which set of data you want to apply the operation on, similar to a group by clause.
>
> **[1:26](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-window-functions?u=76281980&t=86)** For example, if you're wanting to return the sales information across a given market and date pair, your partition by would likely include fields that identify unique market and date pairs.
>
> **[1:36](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-window-functions?u=76281980&t=96)** This clause is optional in a Windows function.
>
> **[1:39](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-window-functions?u=76281980&t=99)** Next, we have the order by clause.
>
> **[1:42](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-window-functions?u=76281980&t=102)** This clause is also optional, but it is essential if the order of the result set of your query matter.
>
> **[1:47](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-window-functions?u=76281980&t=107)** For example, if you're using a ranking function to identify when an employee in each department has the most seniority, you will likely need to order by the employee's hire date.
>
> **[1:58](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-window-functions?u=76281980&t=118)** Next, we have the frame specification.
>
> **[2:01](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-window-functions?u=76281980&t=121)** The frame specification is a set of rows or range to limit the results of your Windows function.
>
> **[2:06](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-window-functions?u=76281980&t=126)** Some options for frame keywords include current row, unbounded preceding and preceding.
>
> **[2:12](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-window-functions?u=76281980&t=132)** For example, if you have a dataset that is broken down at the daily level and want to calculate a seven-day moving average, you'll want to set the range to look at the current row and values for the preceding six rows.
>
> **[2:24](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-window-functions?u=76281980&t=144)** And now that you have an idea of the components of a Windows function, it's time for us to create one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (13), next (4), [[SQL]] (4), data (2), [[Analytics]] (1)
> **Analogies:** for example (3), such as (1), similar to (1)
> **Env Vars:** sql (4)
> **Documentation:** specification (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Diving into ROW_NUMBER()
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=0)** - [Instructor] In this example, we want to write a query using a specific type of function, row number, to return each customer's most recent order.
>
> **[0:08](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=8)** Before getting started, if we write select cust name and then a count distinct of the order number
>
> **[0:28](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=28)** from our online retail sales table, and then we group by our customer names,
>
> **[0:45](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=45)** we can see that there are customers who have numerous orders, and then there are also a lot of customers that may only have one order.
>
> **[0:55](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=55)** Now, let's start to craft our Windows function.
>
> **[0:58](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=58)** Although we're really only interested in pulling the most recent order number for each customer, I'm going to include some other fields like product name and quantity to give us more context of what actually was in the order.
>
> **[1:10](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=70)** So to do that, I'll write select, order number, order date, the customer name, the product name, and the quantity.
>
> **[1:38](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=98)** Now we're ready for the Windows function logic.
>
> **[1:41](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=101)** Remember, the first component to the Windows function is the function name itself.
>
> **[1:45](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=105)** So here, we're going to start out by saying row number.
>
> **[1:51](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=111)** By using row number, we're able to assign a numerical value to each set of values in our window, or the frame.
>
> **[1:58](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=118)** We next set the frame in the over clause.
>
> **[2:01](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=121)** Because we're interested in the most recent order per each customer, we'll also want to partition by the customer name.
>
> **[2:22](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=142)** Next, because the order of the dates matters in determining which order is the most recent for each customer, we'll want to add an order-by order date to this clause.
>
> **[2:40](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=160)** And here we'll give it an alias like row_num.
>
> **[2:44](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=164)** Now, the query at this stage is not complete, but I do want to run this query just so we can go ahead and preview the results before we move on.
>
> **[2:57](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=177)** Once we run and see the intermediate results, you can have a better understanding of what exactly the row number function is doing.
>
> **[3:04](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=184)** Take a look here at the orders for the Abbott Group.
>
> **[3:08](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=188)** This is a customer that has more than one order.
>
> **[3:11](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=191)** Notice that for each order from this customer a row number is assigned one through seven.
>
> **[3:19](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=199)** The order assigned number one is their most recent order for March 26th, 2019, and then their second most recent order is assigned number two from March 12th, 2019, and so on, until there is a sequential value assigned to each of their orders.
>
> **[3:34](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=214)** One thing that's important to point out about the row number function is that if there are ties or maybe even duplicates between your criteria and no clear tie breakers, in this example, it would be like a customer placing two separate orders on the same day, then row number will continue to numerate each row in the results set without skipping values.
>
> **[3:54](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=234)** We'll get more into where this becomes an issue when we get to ranking Windows functions.
>
> **[3:58](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=238)** But in the case of the Abbott Group, it doesn't matter much since they have no repeating order dates.
>
> **[4:03](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=243)** But depending on the structure of your data and the specific use case that you're working with, it is something to look out for, as this can impact your results.
>
> **[4:11](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=251)** Also, although a unique sequential value is assigned to each row in the frame, I want to highlight that using the row number function is not a substitute for creating unique identifiers like primary keys in a database.
>
> **[4:23](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=263)** For one, we've already discussed that although row number continues to provide unique sequential values when faced with ties, the contents of each record may not actually be unique, and this violates one of the assumptions of the function of a primary key.
>
> **[4:36](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=276)** In addition, as customers continue to place orders, the results of row number can change each time the query is run.
>
> **[4:43](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=283)** If Abbott Group returns one of their orders, this will change to the values assigned to the proceeding orders.
>
> **[4:48](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=288)** If they place a new order, the range of their row numbers will go from one to seven to one to eight.
>
> **[4:53](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=293)** Since row number is not immutable, that's another reason it's not suitable for a primary key.
>
> **[4:59](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=299)** Although these concepts seem similar, these examples highlight why row number is not a replacement for creating primary keys in database management.
>
> **[5:07](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=307)** And I wanted to mention this because it's a common point of confusion for beginners.
>
> **[5:12](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=312)** Okay, onto the final part of the query.
>
> **[5:15](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=315)** Now that we've established that row number has assigned values that determine the sequence of each order from each customer, it's time to filter on the most recent order.
>
> **[5:25](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=325)** At this point, you may be tempted to use the where clause to filter down to the most recent order by adding where row number equals one, but if we try that and then attempt to run our query, we can see that that, in fact, doesn't work.
>
> **[5:42](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=342)** So why is that?
>
> **[5:44](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=344)** It might be surprising to see that the Windows function column cannot be filtered on using the where clause, but the reason for this is that in the SQL order of operations, the where clause is actually executed before the Windows function.
>
> **[5:57](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=357)** So at the time where the where clause is executed, the Windows column does not yet exist, and that's why we receive this error.
>
> **[6:05](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=365)** But have no fear.
>
> **[6:06](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=366)** There's other ways where we can filter on this result set without using the where clause.
>
> **[6:11](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=371)** Like remember subqueries and CTEs from earlier?
>
> **[6:14](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=374)** Yes, they are making a comeback.
>
> **[6:17](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=377)** Because it's my personal preference, I'm going to solve this problem with a CTE to filter the query based on the row number column.
>
> **[6:23](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=383)** But remember that the same goal can also be accomplished using the subquery if that's what you prefer and if you'd like to try it out on your own.
>
> **[6:32](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=392)** So starting a new line, let's use a CTE to solve this problem.
>
> **[6:38](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=398)** All right, so first thing that we want to do is establish our CTE using the with clause.
>
> **[6:43](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=403)** And I'm just going to call this CTE row numbers, write as, we leave our parentheses.
>
> **[6:52](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=412)** And then we can just go ahead and copy and paste the query from earlier as our CTE function.
>
> **[7:01](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=421)** Now, we close the parentheses, and here in the final part of our query, we're able to select star from row numbers where row_num equals one.
>
> **[7:21](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=441)** This will return the most recent order for each customer.
>
> **[7:26](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=446)** And now when we highlight our query and execute it, we can see that only that most recent value is returned.
>
> **[7:34](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=454)** And in the case of our example with the Abbott Group from earlier, we're returning their most recent order from March 26th, 2019.
>
> **[7:43](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=463)** That wasn't so bad, was it?
>
> **[7:45](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=465)** Okay, maybe it was.
>
> **[7:47](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=467)** But over time with practice, using these functions will become second nature to you.
>
> **[7:52](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/diving-into-row-number?u=76281980&t=472)** That being said, next, you'll get to practice creating a Windows function using row number all on your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (8), next (3), product (2), database (2), data (1)
> **Env Vars:** cte (5), sql (1)
> **Code Identifiers:** row_num (2)
> **Definitions:** is a  (2)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Calculate a ROW_NUMBER
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-calculate-a-row-number?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-calculate-a-row-number?u=76281980&t=0)** (light music)
>
> **[0:05](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-calculate-a-row-number?u=76281980&t=5)** - [Instructor] Let's start our next challenge.
>
> **[0:07](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-calculate-a-row-number?u=76281980&t=7)** Boehm Inc. has been one of the most consistent online customers for Red30 Tech.
>
> **[0:12](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-calculate-a-row-number?u=76281980&t=12)** Boehm Inc.'s account representative would like to understand more about their spending habits and has asked you to pull data that shows the largest three orders from each product category that the firm has placed.
>
> **[0:24](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-calculate-a-row-number?u=76281980&t=24)** To pull this data and provide additional fields to give the account rep more context from each order, Write a query using ROW-NUMBER that returns the order number, order date, customer name, product category, product name and order total of the orders that have the three highest order totals from each product category purchased by Boehm Inc.
>
> **[0:46](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-calculate-a-row-number?u=76281980&t=46)** Pause to give yourself enough time to solve this and go to the next video when you're ready for the solution.
>
> **[0:51](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-calculate-a-row-number?u=76281980&t=51)** As a hint to make sure that you're getting the correct results back, it may be a good idea to preview all orders from Boehm Inc. first before starting this problem.
>
> **[1:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-calculate-a-row-number?u=76281980&t=60)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (4), next (2), data (2)
> **Env Vars:** row (1), number (1)
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light music) (1)

#### Solution: Calculate a ROW_NUMBER
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=0)** - [Instructor] Now it's time to go over our solution.
>
> **[0:07](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=7)** Your results set should have 17 rows that shows the Order Number, Order Date, Customer Name, Product Category, Product Name, and Order Total, of the top three orders that have the highest totals from each product category purchased by Boehm Inc.
>
> **[0:22](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=22)** Let's go over to SSMS to review the solution together.
>
> **[0:26](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=26)** Now, I'm going to set this problem up in a similar way that I did with our last example.
>
> **[0:31](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=31)** Using a CTE to eventually be able to filter on the row number column.
>
> **[0:36](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=36)** But remember, you can use a subquery to get the same results.
>
> **[0:40](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=40)** So if that was the route that you chose, then your solution will look slightly different than mine.
>
> **[0:45](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=45)** So here I'll start out with constructing our CTE.
>
> **[0:49](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=49)** I'll call it the same thing that we called before, ROW_NUMBERS as, and then we'll get into the main query.
>
> **[0:57](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=57)** Because the prompt asks us to provide additional context like the Order Number and Order Date, I'll include those fields here.
>
> **[1:27](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=87)** Next is where I'll construct the windows function.
>
> **[1:29](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=89)** Here again, we're going to use Row_Number to number the orders for each product category according to their order totals.
>
> **[1:36](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=96)** So starting out, we name our function and for the next parts, remember that the component are Windows function are the function name, partition by, order by and framing.
>
> **[1:48](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=108)** So next, in our partition by statement, remember how our task was to return the top three largest orders for each product category?
>
> **[1:55](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=115)** Therefore, we're going to want to partition by the product category.
>
> **[2:06](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=126)** This partition by allows us to essentially group by each product category in our frame.
>
> **[2:11](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=131)** Next, we have the order by clause.
>
> **[2:14](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=134)** Because we're interested in returning the orders with the highest totals per each product category, we'll want to order by the order total in descending order.
>
> **[2:30](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=150)** Close your parentheses and then give this column an alias like row_num.
>
> **[2:35](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=155)** And ultimately we'll be selecting this from the online retail sales table.
>
> **[2:42](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=162)** Where our customer is Boehm Inc.
>
> **[2:55](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=175)** Here on Boehm Inc, make sure that you include the period at the end.
>
> **[2:58](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=178)** I've left that out several times, so make sure that you catch that and now we're ready to close our CTE.
>
> **[3:08](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=188)** Now, for the final part of the query, we're going to go through and select the order number.
>
> **[3:15](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=195)** Order date.
>
> **[3:19](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=199)** Customer name.
>
> **[3:21](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=201)** Product category.
>
> **[3:24](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=204)** Product name.
>
> **[3:27](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=207)** And the order total.
>
> **[3:34](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=214)** From our row number CTE.
>
> **[3:40](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=220)** Next, remember how in the original problem statement, we wanted to filter on the top three orders?
>
> **[3:46](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=226)** Here we'll add a where clause that says we want all of the row numbers that are either assigned the values of one, two, or three.
>
> **[3:58](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=238)** And finally, although this part isn't required, I'm going to go ahead and order by the product category and the order total, just so we have the highest orders listed first and also all of the product categories are kind of grouped together next to each other in the output.
>
> **[4:20](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=260)** Now let's run the query.
>
> **[4:26](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=266)** Remember that your results may print out a little differently than mine, depending on if you added that order by clause at the end but you should still have 17 rows in the output.
>
> **[4:35](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=275)** Check your answers by comparing your values to mine.
>
> **[4:39](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=279)** And there you have it.
>
> **[4:40](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=280)** Hopefully now that you've practiced using row number on your own, the concepts of how to construct and when to use this type of function are more clear.
>
> **[4:48](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=288)** This type of function can be really challenging to grasp, so you might find it helpful to rewatch this section or work on more practice problems to solidify your knowledge.
>
> **[4:56](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-calculate-a-row-number?u=76281980&t=296)** In the next chapter, we'll investigate another type of Windows function, lag and lead.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (12), next (7), [[Windows]] (3), prompt (1)
> **Env Vars:** cte (4), ssms (1), row_numbers (1)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** row_num (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Windows Functions: LAG() and LEAD()

[↑ Back to Table of Contents](#table-of-contents)

#### Use cases and syntax of LAG() and LEAD()
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/use-cases-and-syntax-of-lag-and-lead?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/use-cases-and-syntax-of-lag-and-lead?u=76281980&t=0)** - [Instructor] The next set of Windows functions we'll review are LAG and LEAD.
>
> **[0:03](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/use-cases-and-syntax-of-lag-and-lead?u=76281980&t=3)** Because these functions are so similar I'd like to discuss them together.
>
> **[0:07](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/use-cases-and-syntax-of-lag-and-lead?u=76281980&t=7)** In SQL, the LEAD function is used to retrieve data from the next row, while LAG is used to retrieve data from the previous row.
>
> **[0:15](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/use-cases-and-syntax-of-lag-and-lead?u=76281980&t=15)** Concepts of LAG and LEAD constantly come up in data analytics.
>
> **[0:18](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/use-cases-and-syntax-of-lag-and-lead?u=76281980&t=18)** Often a person is asking, "How do I compare it to last time?"
>
> **[0:22](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/use-cases-and-syntax-of-lag-and-lead?u=76281980&t=22)** Or they want to know what comes next in an analysis.
>
> **[0:26](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/use-cases-and-syntax-of-lag-and-lead?u=76281980&t=26)** The image below shows what exactly these concepts look like in practice.
>
> **[0:30](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/use-cases-and-syntax-of-lag-and-lead?u=76281980&t=30)** Let's say that Red 30 Tech wants to add a billboard in each conference room that displays the last session that took place, as well as the next session to take place.
>
> **[0:39](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/use-cases-and-syntax-of-lag-and-lead?u=76281980&t=39)** And let's start with the first session, AI and Education.
>
> **[0:43](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/use-cases-and-syntax-of-lag-and-lead?u=76281980&t=43)** Developing a data strategy on July 27th, starting at 10:30 AM.
>
> **[0:48](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/use-cases-and-syntax-of-lag-and-lead?u=76281980&t=48)** This is the first session to occur in its conference room.
>
> **[0:51](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/use-cases-and-syntax-of-lag-and-lead?u=76281980&t=51)** Therefore, when we attempt to use LAG to get information about the previous session, a null result is returned.
>
> **[0:57](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/use-cases-and-syntax-of-lag-and-lead?u=76281980&t=57)** This is expected because a previous session in this room does not exist.
>
> **[1:01](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/use-cases-and-syntax-of-lag-and-lead?u=76281980&t=61)** But what about the next session?
>
> **[1:02](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/use-cases-and-syntax-of-lag-and-lead?u=76281980&t=62)** Well, you can see that the next session to occur in that room is managing virtual teams starting at 1400 or 2:00 PM.
>
> **[1:10](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/use-cases-and-syntax-of-lag-and-lead?u=76281980&t=70)** In the next video, I'll show you how to go about writing a query to get these results yourself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (7), data (4), [[Windows]] (1), [[SQL]] (1), [[Analytics]] (1)
> **Env Vars:** lag (4), lead (3), sql (1)
> **Ports:** :30 (1), :00 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Using LAG() and LEAD() in tandem
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=0)** - [Instructor] Remember from our problem statement that Red30 Tech wants to add a billboard in each conference room that displays the last session that took place as well as the session that's coming next.
>
> **[0:10](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=10)** To keep this example simple, we'll only worry about the sessions in room 102.
>
> **[0:15](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=15)** First, we'll want to select the start date,
>
> **[0:28](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=28)** end date, and session name of the current session.
>
> **[0:39](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=39)** To extract what the previous session was with respect to each row, we're going to use the lag function.
>
> **[0:45](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=45)** Because lag and lead are also Windows functions, their syntax is similar to what we just saw with row number.
>
> **[0:51](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=51)** So first, we're going to start out by naming the function we want to use which is lag, inside the parentheses.
>
> **[0:59](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=59)** Because we're wanting to pull the session name of the session immediately proceeding this one, we will write (Session Name),1.
>
> **[1:10](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=70)** Session name is our column of interest called the scalar expression.
>
> **[1:14](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=74)** The one is used to indicate that we want the immediate last results, but this value can be changed to two if you want to go two sessions back, five if you want to go five sessions back and so on.
>
> **[1:25](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=85)** This value is called the offset.
>
> **[1:27](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=87)** If you don't put a specific value for the offset, SQL will default to an offset of one.
>
> **[1:31](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=91)** The next part of this query is the partition by statement.
>
> **[1:35](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=95)** Here, since we're interested in returning the results by room number, I could put the room number here as one way of solving the problem, but because later on, I'll add the room number to the where statement, it's not really necessary here.
>
> **[1:46](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=106)** So we're going to skip the partition by clause in this function because remember, not all components of a Windows function are required depending on your use case and the specific Windows function that you're using.
>
> **[1:58](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=118)** Next comes the order by clause.
>
> **[2:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=120)** In lag and lead functions, the order by clause is required.
>
> **[2:04](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=124)** Why exactly?
>
> **[2:05](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=125)** Well, remember that the whole point of these functions is to identify subsequent events.
>
> **[2:10](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=130)** So if you don't have an order by clause, SQL doesn't know what to consider as the last or the next event.
>
> **[2:26](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=146)** Because we want to choose the next or last session with respect to the start date, we want to order by start date in ascending order.
>
> **[2:40](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=160)** And we close the parentheses and then give this column an alias.
>
> **[2:44](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=164)** We can call it previous session.
>
> **[2:47](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=167)** We'll also want to include the date value from the time that the last session started.
>
> **[2:53](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=173)** Extracting this information can be accomplished by changing only the scalar expression to start date, and of course, changing the column name to something else too.
>
> **[3:19](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=199)** We can call this previous session start time.
>
> **[3:27](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=207)** Okay, now that we've taken care of the values from the previous session, we're ready to extract the values for the next session.
>
> **[3:33](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=213)** Similarly, we can use the syntax that we've already written for the previous sessions and make minor changes to adapt the syntax to grab values for the next session.
>
> **[3:42](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=222)** So I'll go ahead and do that and then copy the syntax below.
>
> **[3:48](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=228)** Here, instead of using lag for these functions, we're going to change both of these to lead.
>
> **[4:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=240)** Every other component of these functions remains the same.
>
> **[4:04](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=244)** And then finally, we'll want to change the column names to show that these are values from the next session.
>
> **[4:10](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=250)** So here, I'll change previous session to next session and then change the previous session start time to next session start time.
>
> **[4:24](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=264)** And finally, we'll get this information from the Red30 Tech session info table.
>
> **[4:56](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=296)** And then lastly, we'll want to filter where the room name is room 102.
>
> **[5:12](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=312)** Now we're ready to run the query.
>
> **[5:18](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=318)** Okay, so notice here that you're getting the same results as the image that I showed in the previous video.
>
> **[5:24](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=324)** Before we move on to the next chapter, I want to point out that although there are null values for the first and last session in the room, having null values may not always be ideal for your use case.
>
> **[5:36](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=336)** If you want a specific value to be populated whenever the result would otherwise be null, you can add what is called a default value after the scalar expression and offset arguments.
>
> **[5:46](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=346)** This is an optional argument and it depends on your use case.
>
> **[5:50](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/using-lag-and-lead-in-tandem?u=76281980&t=350)** All right, now that we've shown how we can use lag and lead to extract information about the previous and next records, you're now ready to try an example out on your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (12), [[Windows]] (3), [[SQL]] (2)
> **Definitions:** is called (2), is an  (1)
> **Env Vars:** sql (2)
> **Cross-References:** previous video (1), next chapter (1)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Using LAG() and LEAD() to determine most recent order quantities
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980)

#### Solution: Using LAG() and LEAD() to determine most recent order quantities
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=0)** (exciting music)
>
> **[0:05](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=5)** - [Instructor] Hello again!
>
> **[0:06](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=6)** Are you ready to get into the solution for this problem?
>
> **[0:10](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=10)** As a reminder, your task here was to write a query that shows the quantity of drones needed for each order date and the quantities for the last five order dates before it.
>
> **[0:20](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=20)** If we preview the data by writing select star from the online retail sales database where the product category equals drones, we can see that there are multiple orders placed for drones from different customers on the same day, like we see here on September 2nd.
>
> **[0:39](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=39)** So, the first thing that we'll need to do is write a query that totals up how many drones were needed on each order date.
>
> **[0:47](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=47)** For that, I'll write select order date,
>
> **[0:55](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=55)** and we'll want a sum of the quantity, and we can give that an alias as quantity by day,
>
> **[1:13](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=73)** from our Red 30 Tech online retail sales table.
>
> **[1:21](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=81)** We'll also want to keep where product category equals drones, so I'll grab that from above.
>
> **[1:30](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=90)** And then finally, we'll group by order date.
>
> **[1:35](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=95)** Since these values are the values that we'll want to reference as the daily order quantities, I'm going to make this query a CTE so we can reference it the same way that we would reference a table.
>
> **[1:46](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=106)** To do that, remember that we'll start with our width clause, give our CTE a name, and then wrap our CTE in parentheses.
>
> **[2:03](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=123)** And just to make this a little bit more readable, I'm going to indent the portion with our CTE statement.
>
> **[2:14](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=134)** Okay, so on to the next step.
>
> **[2:16](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=136)** Now that we have our orders by day CTE that calculates order quantities by order date, we're able to solve the rest of the challenge.
>
> **[2:25](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=145)** Now, I want to select order date and quantity by day for the current order.
>
> **[2:31](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=151)** So we'll write select order date and quantity by day.
>
> **[2:42](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=162)** To get the values for the past five order dates, I'll use the lag function.
>
> **[2:49](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=169)** So we'll identify that we want to lag.
>
> **[2:54](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=174)** Our value is the quantity by day, and that'll be our scalar expression, since that's the value we're interested in.
>
> **[3:05](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=185)** And to get the next immediate value, we will set the offset to one.
>
> **[3:12](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=192)** Next, because we want these values over each order date, we'll write over order by order date,
>
> **[3:27](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=207)** and we'll also want that in ascending order.
>
> **[3:31](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=211)** Now we'll want to give this column an alias, and I'll call it "LastDATEQuantity_1".
>
> **[3:45](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=225)** Now, here comes the tricky part.
>
> **[3:47](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=227)** To get the values for the past 2, 3, 4, and 5 orders, we can take this line that we've just written and create new columns for each value, only needing to change the offset and the alias name.
>
> **[4:10](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=250)** All right, so here in our lag statement, to get the second order, we'll change our offset to two, change our alias name, and then repeat these processes down the line until you get to the fifth order.
>
> **[4:37](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=277)** And finally, we'll get these values from our order by days CTE.
>
> **[4:54](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=294)** And now we've finished the query.
>
> **[5:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=300)** Okay, so once we've run these results, you can see a nice output that identifies the order values for each order date as well as the five preceding it.
>
> **[5:10](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=310)** To check your work, you can choose one row of the dataset and ensure that the values from the five rows preceding it match the output that you're getting in the new columns you've just created.
>
> **[5:19](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=319)** Before we move on to the next chapter, I also want to highlight that these same results can be calculated in a different way using the lead function.
>
> **[5:27](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=327)** The solution for that approach is located in the branch for this video in the GitHub repo.
>
> **[5:32](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=332)** Now that we've covered lag and lead, you have two more powerful SQL commands to add to your skillset list.
>
> **[5:38](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=338)** Uses of lag and lead come up frequently in my work, and I hope that you're able to apply them soon to yours.
>
> **[5:44](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=344)** In the next chapter, we'll hone our skills on two additional important Windows functions, rank and dense rank.
>
> **[5:50](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-using-lag-and-lead-to-determine-most-recent-order-quantities?u=76281980&t=350)** See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (5), product (2), data (1), database (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** cte (6), sql (1)
> **CLI Commands:** make (2)
> **Cross-References:** next chapter (1), in the next (1)
> **Tools:** github (1)
> **Exercise Files:** github repo (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (exciting music) (1)


### 5. Ranking Windows Functions

[↑ Back to Table of Contents](#table-of-contents)

#### Introduction to ranking window functions
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-ranking-window-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-ranking-window-functions?u=76281980&t=0)** - [Instructor] The windows functions we've discussed so far have been largely based on the next sequential order.
>
> **[0:05](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-ranking-window-functions?u=76281980&t=5)** In this chapter, we'll look at ordering values in SQL in a slightly different way, through a ranking Windows function called rank and dense_rank.
>
> **[0:13](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-ranking-window-functions?u=76281980&t=13)** Like lag and lead, the rank and dense_rank functions are similar enough to each other that we can discuss them both in the same chapter here.
>
> **[0:20](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-ranking-window-functions?u=76281980&t=20)** And so, what exactly does the ranking function do?
>
> **[0:23](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-ranking-window-functions?u=76281980&t=23)** Since I'm from Kentucky, I'm going to use horse racing to help explain this concept.
>
> **[0:27](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-ranking-window-functions?u=76281980&t=27)** So, imagine that you're watching a horse race and the horse with the quickest runtime wins.
>
> **[0:32](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-ranking-window-functions?u=76281980&t=32)** Then the following horses are assigned second, third, fourth, and fifth place.
>
> **[0:36](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-ranking-window-functions?u=76281980&t=36)** This sounds simple enough, right?
>
> **[0:38](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-ranking-window-functions?u=76281980&t=38)** Giving each horse a sequential place is how the row_number command would handle this problem.
>
> **[0:43](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-ranking-window-functions?u=76281980&t=43)** Well, what happens in the event of a tie?
>
> **[0:45](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-ranking-window-functions?u=76281980&t=45)** That's where rank and dense_rank handle this problem differently.
>
> **[0:49](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-ranking-window-functions?u=76281980&t=49)** If you take a closer look, horses Top-N and QueryOptimization actually finish the race in the same amount of time.
>
> **[0:56](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-ranking-window-functions?u=76281980&t=56)** But, because row_number assigns a sequential value for every row in the results set, one of them was assigned second place, and one of them third, even though they tied.
>
> **[1:05](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-ranking-window-functions?u=76281980&t=65)** To incorporate ties into the results, we can use the rank function.
>
> **[1:08](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-ranking-window-functions?u=76281980&t=68)** The rank function still provides an ordered ranking that describes how each horse placed.
>
> **[1:13](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-ranking-window-functions?u=76281980&t=73)** But in the event of ties it assigns the values the same number, and then skips to the next number for subsequent ranks.
>
> **[1:20](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-ranking-window-functions?u=76281980&t=80)** In this example, horses are ranked one, two, two, four, and five.
>
> **[1:25](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-ranking-window-functions?u=76281980&t=85)** Notice how the ranking of three was skipped, and the following rank continues at four.
>
> **[1:30](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-ranking-window-functions?u=76281980&t=90)** On the other hand, dense_rank does not skip numbers when assigning ranks.
>
> **[1:34](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-ranking-window-functions?u=76281980&t=94)** Instead, it will rank the horses one, two, two, three, and four.
>
> **[1:40](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-ranking-window-functions?u=76281980&t=100)** Here, there's no fifth place winner.
>
> **[1:42](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-ranking-window-functions?u=76281980&t=102)** The way that each command handles ties will remain, whether there's a two-way, three-way, or even a 10-way tie in your data.
>
> **[1:49](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-ranking-window-functions?u=76281980&t=109)** In practice, deciding to use rank or dense_rank will largely depend on the unique problem that you're trying to solve.
>
> **[1:56](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/introduction-to-ranking-window-functions?u=76281980&t=116)** So now let's do a walkthrough example using the Red30 Tech database to see what the syntax of these functions looks like.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), next (2), [[SQL]] (1), data (1), database (1)
> **Code Identifiers:** dense_rank (5), row_number (2)
> **Env Vars:** sql (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Demonstrating the distinction between RANK() and DENSE_RANK()
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=0)** - [Instructor] Ranking Windows functions rank your data in order based on criteria.
>
> **[0:04](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=4)** Determining whether you want to use the rank or dense rank command largely depends on your use case and how you want to handle tied values.
>
> **[0:11](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=11)** In this example, I'm going to write a query using both rank and dense rank so we can compare the results side by side.
>
> **[0:18](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=18)** Let's take a look at the Red 30 Tech employee directory.
>
> **[0:22](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=22)** This is the data set we'll be using for this problem.
>
> **[0:25](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=25)** Here, we have information about everyone who works for the conference, such as their title, employee ID and also their department.
>
> **[0:33](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=33)** Let's say we'd like to use a ranking Windows function to rank the employees in alphabetical order by their last name.
>
> **[0:41](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=41)** For simplicity, I'll do a select star to grab all of the columns on this table.
>
> **[0:50](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=50)** Now, for the ranking portion.
>
> **[0:52](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=52)** Rank and dense rank have the same main syntax components as the other windows functions we've looked at.
>
> **[0:57](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=57)** The function name, over, partition by and order by components.
>
> **[1:01](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=61)** And just like in lag and lead, the function name, over and order by components are required when using this function.
>
> **[1:08](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=68)** First, let's start with rank.
>
> **[1:12](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=72)** We next include the over clause.
>
> **[1:18](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=78)** And this example is actually pretty simple.
>
> **[1:21](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=81)** Because we're looking at alphabetizing all employees, we don't need to put anything in the partition by clause.
>
> **[1:27](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=87)** Remember that some of the function components are optional, while some are required.
>
> **[1:31](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=91)** So here we'll move forward and we just need to order by last name.
>
> **[1:44](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=104)** Let's call this function "rank" with an underscore at the end.
>
> **[1:49](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=109)** We can copy the same syntax for dense rank and just change the name and alias of the code.
>
> **[2:02](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=122)** So here, we'll switch our function name and then also give our column a different name.
>
> **[2:13](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=133)** And finally, we'll want to select these values from the Red 30 Tech table employee directory.
>
> **[2:37](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=157)** And now we're ready to run the query.
>
> **[2:45](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=165)** In the results set, you notice that the first several rows for rank and dense rank, are actually the same.
>
> **[2:51](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=171)** But let's look at our first set of tie values, which occurs once we get to the Davenports.
>
> **[2:57](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=177)** Here, both Logan and Julie Davenport are given a rank value of 16, since they're ties.
>
> **[3:03](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=183)** But in the rank column, the value for the next row, which is for Devon David, starts at 18.
>
> **[3:11](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=191)** While in the dense rank column, Devon's value picks back up at 17.
>
> **[3:16](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=196)** I hope that this example illustrates the difference between these two functions for you.
>
> **[3:21](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=201)** Rank skips values and dense rank does not.
>
> **[3:24](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=204)** For another example of this, we can scroll to Cadman and Gale Powers.
>
> **[3:36](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=216)** Tucker Quinn's value skips to 70 in the rank column, while in the dense rank column, it remains sequential at 65.
>
> **[3:45](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=225)** So what other uses can these functions provide besides ranking?
>
> **[3:49](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=229)** Well, as we've seen in this example, it can help identify potential duplicates in your dataset.
>
> **[3:55](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=235)** Maybe in this example, the company could add a tiebreaker, like ordering by first name or employee ID to prevent these duplicate values.
>
> **[4:03](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=243)** Also, rank and dense rank functions can be used to identify trends in your data, such as percentiles and top performing entities over time.
>
> **[4:10](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/demonstrating-the-distinction-between-rank-and-dense-rank?u=76281980&t=250)** So now that you've seen rank and dense rank side by side, it's time to practice by writing a query of your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), data (3), next (2)
> **Analogies:** such as (2), just like (1)
> **Speakers:** - [instructor] (1)

#### Challenge: RANK() and DENSE_RANK()
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-rank-and-dense-rank?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-rank-and-dense-rank?u=76281980&t=0)** - [Instructor] Now you'll get to practice applying RANK and DENSE_RANK.
>
> **[0:08](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-rank-and-dense-rank?u=76281980&t=8)** For this challenge, The Red30 Tech Conference wants to promote their conference by sending gift baskets to the first three people to register for the conference from each state.
>
> **[0:17](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-rank-and-dense-rank?u=76281980&t=17)** In order to accomplish this, write a query using RANK or DENSE_RANK that pulls all of the attendees registration information for these individuals using the convention attendees table.
>
> **[0:28](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/challenge-rank-and-dense-rank?u=76281980&t=28)** Once you're ready, head over to the solution video.

> [!info]- Semantic Content
>
> **Env Vars:** rank (2), dense_rank (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: RANK() and DENSE_RANK()
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=0)** - [Lecturer] Ready for the solution?
>
> **[0:07](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=7)** This problem can be solved using rank or dense rank depending on how you would like to handle ties.
>
> **[0:13](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=13)** Based on the problem statement my mind went to solving this with dense rank first.
>
> **[0:17](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=17)** So, that's the method I'll show you first in this video.
>
> **[0:20](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=20)** Since we want to pull all of the registration information for these people I'll start out with a select star.
>
> **[0:32](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=32)** Next comes the ranking.
>
> **[0:34](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=34)** We'll start by naming the dense rank function.
>
> **[0:39](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=39)** In the prompt we were asked to rank the attendees by who registered first in each state because we want to separate each ranking out by state we'll want to rank over and partition by state.
>
> **[1:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=60)** Next, since we're wanting to rank the earliest registrants first we'll order by registration date.
>
> **[1:15](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=75)** And finally, we can call this column dense_frank_.
>
> **[1:23](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=83)** Finally, we can add that we want to extract this information from the Red 30 Tech Convention attendees table.
>
> **[1:48](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=108)** Oh, forgot my comma up here at the top.
>
> **[1:51](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=111)** All right, and so, this query isn't finished but I want to go ahead and run this to check our results so far and ensure that we're getting the intended output.
>
> **[2:03](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=123)** The first state that we're ranking is Alabama.
>
> **[2:06](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=126)** Notice that here, Luelle Beals registered on March 2nd, 2020 and if we scroll over to the rank column she's ranked number one.
>
> **[2:16](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=136)** If we scroll back over if we look at the dates for all of the registrants that come from Alabama we notice that Luelle Beals' date of March 2nd, 2020 comes the earliest.
>
> **[2:27](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=147)** The next dates that we see are March 4th, fifth, and so on.
>
> **[2:32](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=152)** So this is good.
>
> **[2:33](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=153)** This is the output that we would expect to receive.
>
> **[2:36](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=156)** Now we can move on to the final step of the query only returning the first three registrants.
>
> **[2:41](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=161)** At this step, you might be tempted to filter by where.
>
> **[2:44](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=164)** Dense rank is one, two or three in the where clause.
>
> **[2:48](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=168)** But remember, that as we've seen another videos you can not filter on columns created by a Windows function in the where clause without a subquery or a CTE.
>
> **[2:56](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=176)** And because I prefer the syntax of a CTE I'm going to wrap this query in a CTE and call it ranks.
>
> **[3:05](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=185)** To do that, we'll start with our with clause give our CTE name and wrap in parentheses.
>
> **[3:17](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=197)** And here again, just for readability sake I'm going to tab over on the CTE statement.
>
> **[3:23](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=203)** Now that our query is wrapped in the CTE we're able to select star from ranks where dense rank is one, two, or three.
>
> **[3:48](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=228)** And we run the query and here we go.
>
> **[3:52](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=232)** We can see that in our results there's 229 individuals that we should send baskets to.
>
> **[3:59](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=239)** If you scroll over to the right hand side and look at the ranks you can confirm that only those who rank one, two or three are included in this final result set.
>
> **[4:10](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=250)** Now, this query can also be solved using the rank function.
>
> **[4:14](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=254)** To preview what this would look like I'll copy the query that we've written above and replace dense rank with rank.
>
> **[4:28](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=268)** Here, we'll just need to change out the function name and our aliases.
>
> **[4:40](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=280)** And then, we're ready to run the query.
>
> **[4:44](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=284)** Okay, so what do you notice that's different about this result set versus the last one?
>
> **[4:50](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=290)** Well, here we only have 171 registrants that we should be sending the gift baskets to.
>
> **[4:57](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=297)** So why the difference?
>
> **[5:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=300)** This is because rank and dense rank functions handle ties differently.
>
> **[5:04](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=304)** Because the dense rank doesn't skip values it has more records meeting the one, two or three criteria requirement.
>
> **[5:13](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=313)** In practice, the function that you will use will depend largely on your use case.
>
> **[5:18](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=318)** And with that, that wraps up our last challenge.
>
> **[5:21](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=321)** I want to congratulate you for making it to this point in the course.
>
> **[5:24](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=324)** I hope you feel like you've learned a lot and are ready to apply these advanced functions to your work.
>
> **[5:29](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/solution-rank-and-dense-rank?u=76281980&t=329)** In the final session I'll explain how you can save your work to keep as a reference or to show off to a future employer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (3), prompt (1), [[Windows]] (1)
> **Env Vars:** cte (6)
> **Speakers:** - [lecturer] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Wrap-up
> [LinkedIn Learning](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/wrap-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/wrap-up?u=76281980&t=0)** - And here we are.
>
> **[0:02](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/wrap-up?u=76281980&t=2)** You've made it to the end of the course.
>
> **[0:04](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/wrap-up?u=76281980&t=4)** To recap what all we've learned, first we started learning the intricacies of subqueries and common table expressions.
>
> **[0:11](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/wrap-up?u=76281980&t=11)** Then we spring into the wonderful world of Windows functions.
>
> **[0:14](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/wrap-up?u=76281980&t=14)** Before we close out, I want to remind you to commit your exercise files to your personal repository.
>
> **[0:19](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/wrap-up?u=76281980&t=19)** Those are yours to keep.
>
> **[0:21](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/wrap-up?u=76281980&t=21)** Publishing your work to an online repository is a great resource to have while applying for data related roles.
>
> **[0:27](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/wrap-up?u=76281980&t=27)** Having an online portfolio is one way to show that you're dedicated to growing in the field and sharpening your skills, which is a highly desirable characteristic of any data practitioner.
>
> **[0:37](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/wrap-up?u=76281980&t=37)** In addition, saving your work can also serve as a reference as you begin to build these queries in additional projects or on the job.
>
> **[0:45](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/wrap-up?u=76281980&t=45)** So, how do you feel?
>
> **[0:47](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/wrap-up?u=76281980&t=47)** I hope that you leave this course feeling proud of yourself for investing in your professional growth.
>
> **[0:52](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/wrap-up?u=76281980&t=52)** Above all, investing in yourself is something that will pay constant dividends.
>
> **[0:56](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/wrap-up?u=76281980&t=56)** Also, I hope that this course has helped better prepare you for how to apply these commands to your role.
>
> **[1:01](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/wrap-up?u=76281980&t=61)** Whether you've joined this course to learn new skills, reaffirm existing skills, or prepare for an interview I hope that the practice problems we've worked through here today can inspire you to apply these concepts in ways you may not have considered before.
>
> **[1:14](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/wrap-up?u=76281980&t=74)** And finally, keep sharpening your SQL skills.
>
> **[1:17](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/wrap-up?u=76281980&t=77)** LinkedIn Learning has several other courses for you to keep the fun going.
>
> **[1:20](https://www.linkedin.com/learning/top-five-things-to-know-in-advanced-sql/wrap-up?u=76281980&t=80)** Thank you for learning with me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), [[Windows]] (1), [[SQL]] (1), [[LinkedIn]] (1)
> **Definitions:** is a  (2)
> **Env Vars:** sql (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - and (1)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/top-5-things-to-know-in-advanced-sql-4403486)

## Skills Covered

- SQL

## Path Context

### In [[Master SQL Development]]
**1 of 8** | [[Advanced SQL- Logical Query Processing, Part 1]] →

## Appears In

- [[Master SQL Development]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL

---

[↑ Back to top](#)