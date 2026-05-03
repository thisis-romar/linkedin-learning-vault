---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: sql-server-intelligence-cracking-the-code-of-enterprise-data
url: "https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data"
duration_minutes: 135
duration: 2h 15m
level: Beginner
updated: 5/23/2024
learners: 300467
skills:
  - SQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGpN01DNvFKCA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719008952462?e=2147483647&amp;v=beta&amp;t=qQRo8X3UPedx88r4iGvp584FHqrvDAicllcC1VMXjPE"
linkedin_topic: Data Science
learning_paths:
  - '[[Explore a Career in SQL Development]]'
  - '[[The Top Skills IT Professionals Have Right Now]]'
prev_courses:
  - '[[SQL Queries Made Easy]]'
  - '[[Windows Server 2022 Essential Training]]'
next_courses:
  - '[[SQL for Data Analysis]]'
  - '[[Microsoft Entra ID Fundamentals]]'
path_nav: '[{"path":"Explore a Career in SQL Development","position":4,"total":8,"prev":"SQL Queries Made Easy","next":"SQL for Data Analysis"},{"path":"The Top Skills IT Professionals Have Right Now","position":3,"total":10,"prev":"Windows Server 2022 Essential Training","next":"Microsoft Entra ID Fundamentals"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - topic/devops
  - topic/network-and-system-administration
  - skill/sql
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/SQL%20Server%20Intelligence-%20Cracking%20the%20Code%20of%20Enterprise%20Data.md)

![SQL Server Intelligence: Cracking the Code of Enterprise Data](https://media.licdn.com/dms/image/v2/D560DAQGpN01DNvFKCA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719008952462?e=2147483647&amp;v=beta&amp;t=qQRo8X3UPedx88r4iGvp584FHqrvDAicllcC1VMXjPE)

# SQL Server Intelligence: Cracking the Code of Enterprise Data

> Now, more than ever, businesses need people who know data—how to warehouse, access, and analyze it quickly and efficiently. Getting up to speed with Microsoft SQL Server—the widely used database management system—can help you become a key player in today’s data-driven business world. In this course, instructor Walter Shields teaches you the five most important skills to know if you want to be a tr

> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data) | 2h 15m | Beginner | 300K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Why data? The role of SQL and how you can get involved](#why-data-the-role-of-sql-and-how-you-can-get-involved)
  - [What you should know: Microsoft SQL Server and installation](#what-you-should-know-microsoft-sql-server-and-installation)
  - [Environment orientation](#environment-orientation)
  - [Introduction to CoderPad](#introduction-to-coderpad)
- [**1. How to Optimize Your DB Software**](#1-how-to-optimize-your-db-software) (2 videos)
  - [Tweaking your settings](#tweaking-your-settings)
  - [Loading the database file](#loading-the-database-file)
- [**2. Get Familiar with Your Database and Its Data**](#2-get-familiar-with-your-database-and-its-data) (5 videos)
  - [Getting familiar with your database](#getting-familiar-with-your-database)
  - [The basic query structure and using aliases](#the-basic-query-structure-and-using-aliases)
  - [Aliases and sorting](#aliases-and-sorting)
  - [Common mistakes](#common-mistakes)
  - [Solution: Crafting queries](#solution-crafting-queries)
- [**3. Understand Simple and Powerful Syntax to Filter and Analyze Data**](#3-understand-simple-and-powerful-syntax-to-filter-and-analyze-data) (5 videos)
  - [The WHERE clause: Finding numeric data](#the-where-clause-finding-numeric-data)
  - [The WHERE clause: Operators IN and BETWEEN](#the-where-clause-operators-in-and-between)
  - [The WHERE clause: Finding text data and using Wildcards](#the-where-clause-finding-text-data-and-using-wildcards)
  - [The WHERE clause: Finding data using dates](#the-where-clause-finding-data-using-dates)
  - [Solution: Date range and set analysis](#solution-date-range-and-set-analysis)
- [**4. Filter Data Based on More than One Condition**](#4-filter-data-based-on-more-than-one-condition) (2 videos)
  - [Introducing AND and OR](#introducing-and-and-or)
  - [Solution: Filtering with logical operators](#solution-filtering-with-logical-operators)
- [**5. Analyze Data with Flexibility, Efficiency, and Calculated Fields**](#5-analyze-data-with-flexibility-efficiency-and-calculated-fields) (3 videos)
  - [Calculated columns](#calculated-columns)
  - [The CASE statement](#the-case-statement)
  - [Solution: Calculated columns and conditional logic](#solution-calculated-columns-and-conditional-logic)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why data? The role of SQL and how you can get involved](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-data-it-significance-sql-s-role-and-how-you-can-become-part-of-it?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-data-it-significance-sql-s-role-and-how-you-can-become-part-of-it?u=76281980&t=0)** - More data has been collected in the last two years than the entire history of the human race.
>
> **[0:08](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-data-it-significance-sql-s-role-and-how-you-can-become-part-of-it?u=76281980&t=8)** Now, that's pretty staggering.
>
> **[0:10](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-data-it-significance-sql-s-role-and-how-you-can-become-part-of-it?u=76281980&t=10)** In just 60 seconds, 2.4 million [[Google]] searches take place, 39,000 [[Instagram]] posts and 72,000 Tinder swipes.
>
> **[0:20](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-data-it-significance-sql-s-role-and-how-you-can-become-part-of-it?u=76281980&t=20)** Well, this is where [[SQL]] comes in.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-data-it-significance-sql-s-role-and-how-you-can-become-part-of-it?u=76281980&t=23)** SQL allows us to communicate with this massive repository of data and make sense out of it.
>
> **[0:31](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-data-it-significance-sql-s-role-and-how-you-can-become-part-of-it?u=76281980&t=31)** We're now able to make more informed decisions, more data-driven decisions, when we are able to apply queries through SQL.
>
> **[0:40](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-data-it-significance-sql-s-role-and-how-you-can-become-part-of-it?u=76281980&t=40)** My name is Walter Shields.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-data-it-significance-sql-s-role-and-how-you-can-become-part-of-it?u=76281980&t=41)** I am a bestselling author and a data professional for the past 20 years.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-data-it-significance-sql-s-role-and-how-you-can-become-part-of-it?u=76281980&t=47)** In this course, you're going to learn the top five things that you should be focused on to be competent in SQL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Google]] (1), [[Instagram]] (1)
> **Env Vars:** sql (4)
> **CLI Commands:** make (2)
> **Versions:** 2.4 (1)
> **Cross-References:** in the last (1)
> **Speakers:** - more (1)

#### [What you should know: Microsoft SQL Server and installation](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=0)** - [Instructor] Before we get into the course, here is what you should know.
>
> **[0:05](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=5)** With regard to prior database knowledge or prior [[SQL]] knowledge, do you need to have any?
>
> **[0:12](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=12)** The answer is no, this course the objective is to keep you on the path of learning the components and the skills, in a manner that anticipates that you're going to be using them in a professional work environment, like a corporation or a business.
>
> **[0:29](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=29)** And with that in mind, we want to give you the skills that you'll need completely to operate effectively in an environment after you go through this course.
>
> **[0:43](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=43)** So you do not need to have any prior database knowledge.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=47)** Of course, if you do, that will be helpful, but you do not have to rely on that to be successful in this course.
>
> **[0:54](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=54)** The software that we'll be using throughout the duration of this course is [[Microsoft SQL Server]].
>
> **[1:01](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=61)** This is the software of choice, and we specifically are going to be working with this because Microsoft SQL Server is one of the most widely adopted [[Database Management]] systems by corporations throughout the world.
>
> **[1:15](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=75)** And one of the objectives with this course is to keep you in line with that real world component.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=82)** So of course, Microsoft SQL Server Management Studio is a natural choice, and we will be working with this software as you engage with SQL queries, and learn the skill of data analysis.
>
> **[1:40](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=100)** With regard to the minimum system requirements, you will be given the download instructions, and one of the components of those instructions is to navigate to the Microsoft SQL Server download site.
>
> **[1:59](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=119)** In this site, you will have the detail on the minimum system requirements, and I highly recommend that you walk through that.
>
> **[2:07](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=127)** One of the components that I would like to point out, however, is that [[Microsoft SQL Server|SQL Server]] is a [[Windows]]-based software.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=135)** So with regard to the Mac folks out there, we do have a step which I will mention, remember, this particular software, it is designed for Windows operating systems.
>
> **[2:29](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=149)** For all the Mac folks, we've got you covered as well, even though SQL Server is a Windows-based software.
>
> **[2:37](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=157)** There is Bootcamp Assistant for Macs, and this allows you to install [[Windows 10]] on your Mac, which then allows you to install SQL Server on your Mac.
>
> **[2:51](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=171)** I've included the link to the instructions on the Apple site, which tells you how to install Bootcamp Assistant on your Mac.
>
> **[3:05](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=185)** You could download the script files that have been provided for the examples displayed during the course.
>
> **[3:12](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=192)** However, I highly recommend that you type out each and every SQL query that is introduced in the course, this reinforces the syntax and concepts, and gets you into the mindset and mode for data analysis.
>
> **[3:30](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=210)** The first step to installing Microsoft SQL Server is to navigate to the link provided, where we will encounter a page similar to this, and we will then proceed to download the version of the software that we need by simply clicking on the Download button.
>
> **[3:48](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=228)** That will trigger the download sequence, which puts a executable file in our Download folder.
>
> **[3:55](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=235)** If I open this folder here, and I will see that I have my downloaded file in my folder.
>
> **[4:05](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=245)** At this point, all I need to do to trigger the start of this software being installed is to double click on that file, and that is going to give me my security prompt, to say a new file is going to be installed.
>
> **[4:24](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=264)** And at this point I want to select Basic from the three choices that I am presented with.
>
> **[4:31](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=271)** And once I click Basic, that gives me the very next screen, which is the SQL Server License Terms.
>
> **[4:41](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=281)** Feel free if you want to read through this.
>
> **[4:43](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=283)** Scroll to the end, hit Accept.
>
> **[4:46](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=286)** And at this point I'm just shown the location that the software will be installed.
>
> **[4:53](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=293)** And I just want to click on Install at this point.
>
> **[4:58](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=298)** Okay, awesome.
>
> **[4:59](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=299)** We have successfully completed the installation of Microsoft SQL Server, and now we must take one last step before we have completed the installation process.
>
> **[5:12](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=312)** And that is to click on this option down here, which is called Install SSMS, which is an acronym for SQL Server Management Studio.
>
> **[5:23](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=323)** So let's go ahead and click on that.
>
> **[5:28](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=328)** Then let's scroll on down to right below where it says Download SSMS, click on the link.
>
> **[5:36](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=336)** That's going to trigger the download sequence for SQL Server Management Studio, just as we did for SQL Server itself.
>
> **[5:49](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=349)** And now that our download has completed, we will open this file, and trigger the running of the file.
>
> **[5:58](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=358)** And we want to simply select on Install once we're greeted with this screen.
>
> **[6:06](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=366)** So we click on Install, and that triggers the installation process for our SQL Server Management Studio.
>
> **[6:19](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=379)** At this point, you have successfully installed Microsoft SQL Server Management Studio.
>
> **[6:26](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=386)** This is the completion screen that you want to see, all we do at this point is simply close the dialogue.
>
> **[6:38](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=398)** We can verify that SQL Server Management Studio has been successfully installed by going to our Windows menu, and start typing SQL.
>
> **[6:49](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/why-use-microsoft-sql-server-and-installing-sql-server-23861204?u=76281980&t=409)** And what pops up is what we have just indeed installed, which is Microsoft SQL Server Management Studio.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (9), [[Microsoft SQL Server]] (8), [[SQL]] (4), [[Windows]] (4), [[Database Management]] (1)
> **Env Vars:** sql (21), ssms (2)
> **Prerequisites:** install (7), you need to have (1), you'll need (1)
> **UI Navigation:** click on (6), navigate to (2)
> **Definitions:** is a  (3), is called (1), is an  (1)
> **Exercise Files:** download the (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Environment orientation](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=0)** - [Instructor] All right, we are doing excellent.
>
> **[0:03](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=3)** Now that we've taken two major steps, which is number one, we've downloaded and installed our software that we're going to be working with, and that's [[Microsoft SQL Server]] Management Studio, and secondly we've also downloaded our sample database file, and that is the digital evidence file.
>
> **[0:22](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=22)** With those two steps taken, let's now get a little more familiar with the environment we're going to be spending a lot of time in, and that's our software, Microsoft SQL Server Management Studio.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=32)** To do so, let's go to our Start menu and start typing in [[SQL]], and that pulls up what we actually want, which is Microsoft SQL Server Management Studio.
>
> **[0:45](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=45)** So let's click on this software to get it started, and we will take our walkthrough of the various components that we should be keeping our eye on.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=55)** All right, our first popup is the Connect to Server window, and we have a few components that we want to pay some attention to, which is firstly, the server type, and if I click on this dropdown here, we see there's a number of different server types, but the one that we want to keep our focus on is the database engine, and it simply means that we are going to be working with data which is housed within a database.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=82)** Secondly, we are going to be looking at the server name, and this really refers to the location, where everything is stored.
>
> **[1:31](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=91)** This is the location that our database is actually stored and our data is stored in.
>
> **[1:38](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=98)** So that's our server name, and thirdly we have the authentication, au-then-ti-ca-tion, and I always get a little tripped up on the [[Microsoft Word|word]], but all it simply means is security, which is a very important aspect when it comes to data, how are you accessing this data?
>
> **[1:57](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=117)** Is it in a secure way?
>
> **[1:59](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=119)** And we are going to go with what is already selected, [[Windows]] Authentication, though there are others, but we are going to go with Windows Authentication, and what this refers to is the username and password that we use to actually log into our computer.
>
> **[2:17](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=137)** [[Microsoft SQL Server|SQL Server]] Management Studio is going to inherit that username and password and use it as the secure access to our database.
>
> **[2:29](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=149)** All right, with those three steps, we are now ready to click on Connect.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=158)** Clicking on Connect brings us to our main environment here.
>
> **[2:42](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=162)** We see at the top left, we have identified Microsoft SQL Server Management Studio and right below that, we have a few different menu items, File, Edit, View, et cetera.
>
> **[2:53](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=173)** We want to pay attention to Tools, and we'll talk about Tools a little more in a subsequent video, but it is one of the areas that we want to pay attention to when we are thinking of being quick and efficient in terms of our query-writing abilities.
>
> **[3:12](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=192)** All right, going along the bottom here, we have some other icons, which we will talk to a little more as well, but for now we're just making note of them and the positioning of things, a relatively simple layout in terms of the Ribbon up here.
>
> **[3:30](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=210)** Down here to the left, we have an important area called the Object Explorer.
>
> **[3:38](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=218)** Now, the Object Explorer shows pretty much everything that is within your SQL Server database.
>
> **[3:47](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=227)** So it shows all of the [[Databases]], the security that is configured for each one of those databases as well as other objects.
>
> **[3:56](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=236)** Now, these folders that I'm highlighting here, even though yes, they are folders in terms of the icon.
>
> **[4:02](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=242)** Within the world of SQL Server Management Studio, they're referred to as objects, and we are going to be focused on the database objects and the database that we are going to be working with throughout this course.
>
> **[4:17](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=257)** Okay, last area that we want to pay attention to is a very huge blue area here, but it is our canvas, so to speak.
>
> **[4:29](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=269)** We are going to be composing our SQL statements, Sequel, SQL, by the way, same thing.
>
> **[4:36](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=276)** Our SQL statements, we're going to posing them in this area here, and as I mentioned with other areas in subsequent videos, we're going to go more extensively into this area but with that covered, we are now looking at the main components of our SQL Server Management Studio software, and it is the area we are going to be spending pretty much the remainder of our time in the course here.
>
> **[5:03](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=303)** So I'm pretty excited.
>
> **[5:06](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=306)** The next thing we're going to look at, now that we have taken a high-level overview, is how we are actually going to start working within this environment.
>
> **[5:14](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/environment-orientation-23856618?u=76281980&t=314)** Let's learn what some of the other components that we've overviewed really mean and see how we could actually use them to start composing our queries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server]] (4), [[SQL]] (4), [[Microsoft SQL Server|Sql server]] (4), [[Windows]] (2), [[Databases]] (2)
> **Env Vars:** sql (12)
> **UI Navigation:** click on (3), go to (1), dropdown (1)
> **Definitions:** refers to (2), is a  (2)
> **Speakers:** - [instructor] (1)

#### [Introduction to CoderPad](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-intro-video?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-intro-video?u=76281980&t=0)** - [Tutor] This course includes automated code challenges that appear when you click on the challenge links in the course's table of contents.
>
> **[0:08](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-intro-video?u=76281980&t=8)** Now each challenge includes instructions and a code editor you can use to create and test your own solutions.
>
> **[0:17](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-intro-video?u=76281980&t=17)** These challenges appear in the same area as the course page where you watch the course's videos.
>
> **[0:24](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-intro-video?u=76281980&t=24)** I recommend using a desktop browser for the best experience with code challenges but know that you can also use the [[LinkedIn]] Learning mobile app if you prefer.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-intro-video?u=76281980&t=36)** The code environment has three areas; instructions on the top left, a console for output on the bottom left, and a code editor for your answer on the right.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-intro-video?u=76281980&t=50)** You can use these drag handles to allocate more space as you like.
>
> **[1:03](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-intro-video?u=76281980&t=63)** To get even more horizontal space for the code editor, you can collapse the course's table of contents on the left.
>
> **[1:12](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-intro-video?u=76281980&t=72)** Each question has instructions that include a description and the expected result.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-intro-video?u=76281980&t=78)** Create your answer in the code editor.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-intro-video?u=76281980&t=82)** Now when you click test my code in the bottom right, you'll see a message indicating whether your code returned a correct result and a tabular version of the returned data.
>
> **[1:40](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-intro-video?u=76281980&t=100)** If your answer doesn't create the correct result, you'll see a message telling you the code is incorrect.
>
> **[1:49](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-intro-video?u=76281980&t=109)** If any messages are too long to fit in the console, you can scroll sideways to see all of the text.
>
> **[1:56](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-intro-video?u=76281980&t=116)** When you're finished each code challenge, return to the course's table of contents and click the next video to see a walkthrough of my solution.
>
> **[2:07](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-intro-video?u=76281980&t=127)** Lastly, the challenges assume a [[MySQL]] relational [[Database Management]] system and expects your [[SQL]] code to be composed for this environment.
>
> **[2:18](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-intro-video?u=76281980&t=138)** It's a purposeful deviation from [[Microsoft SQL Server]], which is the syntax the course is based on.
>
> **[2:25](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-intro-video?u=76281980&t=145)** Many times in the real work environment, a company may have [[Microsoft SQL Server|SQL server]] as their predominant database system but there is almost always secondary database management systems like MySQL and Oracle, and as a data analyst, you'll be expected to retrieve data regardless of the system.
>
> **[2:47](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-intro-video?u=76281980&t=167)** All right, best of luck with the challenges as you level up your SQL skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (2), [[Database Management]] (2), [[SQL]] (2), [[LinkedIn]] (1), [[Microsoft SQL Server]] (1)
> **Env Vars:** sql (4)
> **CLI Commands:** mysql (2)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [tutor] (1)


### 1. How to Optimize Your DB Software

[↑ Back to Table of Contents](#table-of-contents)

#### [Tweaking your settings](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=0)** (soft music)
>
> **[0:01](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=1)** - A theft has just taken place.
>
> **[0:03](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=3)** Someone has stolen the picture from one of our museums and we have been given the security file to figure out who the mastermind is.
>
> **[0:13](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=13)** We're going to learn five top skills that we should be focused on to solve this crime.
>
> **[0:20](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=20)** We're going to learn how to manipulate the data and write queries so that we can figure out who the mastermind is.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=27)** Stick with us and let's figure this out.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=30)** Time is of the essence.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=32)** Remember, we are trying to solve our mystery of who stole our paintings.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=41)** And just as in the real world, there is a certain degree of urgency where you as a data analyst are expected to hit the ground running.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=50)** So there are a couple of steps that I'd recommend that would assist us to do so to hit the ground running.
>
> **[0:58](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=58)** Let's take a look at some of the settings tweaks or adjustments that we should make before even composing anything in our database environment.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=70)** So let's revisit our menu item called tools, and let's go all the way down to the last item called options.
>
> **[1:21](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=81)** In here, we have to the left a bunch of different choices under environment, as well as other areas that we see here.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=93)** So let's take our first step into the area that we should not ignore.
>
> **[1:39](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=99)** So let's go, within environment, to an area called fonts and colors.
>
> **[1:47](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=107)** So in here, we see we have a number of different items here and feel free to explore a bit, but we're going to keep on the path of keeping us accurate and [[Swift (Programming Language)|swift]] and able to quickly respond in our investigative measures as a data analyst.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=128)** So let's first increase our size here by a few.
>
> **[2:12](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=132)** I'm going to go to 14, maybe a little excessive, but in my instance, I want to make sure that you can see clearly everything that I write in my query composition area.
>
> **[2:23](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=143)** But feel free to adjust it to a size that's more appropriate for you.
>
> **[2:27](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=147)** Over here, we have other items that are pretty straightforward in terms of the color of the font, the background color, the foreground color.
>
> **[2:35](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=155)** So feel free to explore there a bit as well.
>
> **[2:39](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=159)** All right, with that set, let's close up environment.
>
> **[2:43](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=163)** Let's go down to another item that we should not ignore and that is in the text editor area.
>
> **[2:50](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=170)** So let's expand the text editor, and go to an area called all languages.
>
> **[2:57](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=177)** Now, we have a number of different items here, but the one we want to focus on is this one called line numbers.
>
> **[3:04](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=184)** And we want to make sure that this item is checked, that we do check it off because this is again another critical item that as we will see is a very important component in helping us be efficient and be accurate in terms of our query writing abilities.
>
> **[3:23](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=203)** So we want to make sure that line numbers are checked.
>
> **[3:26](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=206)** And then we also want to go down to another item within text editor called [[Transact-SQL (T-SQL)|Transact-SQL]].
>
> **[3:35](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=215)** And with Transact-SQL, we want to make sure that an item called, let me just expand Transact-SQL, IntelliSense.
>
> **[3:47](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=227)** And it is already enabled in my instance here, but you want to make sure if yours does not look enabled in the first time that you visit the screen, you want to make sure that it is indeed enabled and you check it off.
>
> **[4:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=240)** And again, this is one of those items that I would recommend as a not-to-skip item because it's just going to help you be that much more of an efficient data analyst and query composer.
>
> **[4:13](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=253)** All right.
>
> **[4:14](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=254)** So those are the recommended steps.
>
> **[4:17](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=257)** Once you've made those selections, you want to hit Okay, make sure that they have taken effect.
>
> **[4:22](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=262)** And with those steps taken, we are now ready to move on.
>
> **[4:26](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=266)** We have taken the steps that we are going to make a much quicker, much more accurate, much more efficient job at creating solutions as a data analyst.
>
> **[4:40](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=280)** So let's move forward to the next step.
>
> **[4:44](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=284)** All right, great.
>
> **[4:45](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=285)** Now that we have tweaked our environment and given ourselves the best opportunity to be efficient, as well as accurate, now, let's talk about one more thing that is sort of a prerequisite before we get into our actual query writing.
>
> **[5:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=300)** And what I'm referring to is comments.
>
> **[5:03](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=303)** Now, what are comments?
>
> **[5:04](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=304)** Comments are something that fall into what's called a best practice.
>
> **[5:09](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=309)** It's something that is not forced, or you are not required to do so as you start creating your [[SQL]] statements in SQL queries, but it is considered an industry best practice to leave comments and make sure that you are being as efficient as possible by doing so.
>
> **[5:28](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=328)** So what are comments?
>
> **[5:29](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=329)** It's a plain way of describing what you have composed in terms of a query statement or a sequel script.
>
> **[5:41](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=341)** So let's take a quick look at what I'm referring to.
>
> **[5:46](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=346)** Let's revisit this item that we saw in our overview and it is called the new query.
>
> **[5:53](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=353)** Let's click on that New Query.
>
> **[5:55](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=355)** And let us take a look at the first type of comment.
>
> **[6:01](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=361)** Now, if I do two dashes like this and I type...
>
> **[6:10](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=370)** This is what's called a single-line comment, meaning it just occurs in a single line.
>
> **[6:16](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=376)** If I attempt to do this without those two dashes, you will see it's quite different.
>
> **[6:24](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=384)** I get these little squiggly lines, I call them, but it is quite different from when it's preceded with two dashes like this.
>
> **[6:35](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=395)** All right, so this is what's called a single-line comment.
>
> **[6:39](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=399)** The other comment type is what's referred to as a comment block.
>
> **[6:44](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=404)** So if I do a front slash and a star and I go a couple lines down and I do a star and front slash and I go between these two items here, I can type...
>
> **[7:01](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=421)** And you can notice here, I don't have the two dashes as I did before.
>
> **[7:05](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=425)** I can freely type anything between the front slash and star, and star and front slash and it will be a comment.
>
> **[7:17](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=437)** All right.
>
> **[7:18](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=438)** So not very informative as we have it here, but in the real world, you would do a comment that may look something like this.
>
> **[7:29](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=449)** It will have who created it.
>
> **[7:37](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=457)** It will have when it was created.
>
> **[7:43](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=463)** And you will probably have some month by, followed by some day, followed by some year.
>
> **[7:52](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=472)** And you'd probably have a description.
>
> **[7:59](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=479)** And description is a brief summary of what this script may be doing.
>
> **[8:05](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=485)** Something like this.
>
> **[8:07](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=487)** So a brief description, that is in plain language, that tells us now why is this important.
>
> **[8:14](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=494)** Now, as you will see, SQL scripts can be either very short or quite long.
>
> **[8:21](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=501)** And particularly in the case of the long SQL scripts, we want to have a quick way of referencing what exactly the script may be doing.
>
> **[8:32](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=512)** Without the comment, we have a task to go through maybe hundreds of lines of SQL script to understand what this particular function might be doing.
>
> **[8:47](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/tweaking-your-settings-23855688?u=76281980&t=527)** So the comment actually saves us a lot of time, helps us be efficient, and helps us be in line with what's considered an industry best practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Transact-SQL (T-SQL)|Transact-sql]] (3), [[Swift (Programming Language)|Swift]] (1)
> **CLI Commands:** make (10), composer (1)
> **Env Vars:** sql (8)
> **Definitions:** is a  (3), is called (1)
> **Best Practices:** best practice (3), recommended (1)
> **UI Navigation:** go to (2), click on (1)
> **Prerequisites:** prerequisite (1), required to (1)
> **Analogies:** picture (1)

#### [Loading the database file](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=0)** - [Instructor] Our next move is to load our digital evidence file.
>
> **[0:04](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=4)** If you recall the file that we downloaded earlier, we are now going to load it to our [[Microsoft SQL Server]] Management Studio database environment.
>
> **[0:15](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=15)** Okay, the first step to do that is to go to our icon up in our ribbon here and click on the open file icon.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=27)** That's going to pull up our window and we want to navigate to that file's location that we downloaded our digital evidence file to.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=37)** In my case, I've downloaded, I've sent it to my download folder, and I'm just going to click on that file.
>
> **[0:44](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=44)** And once I've clicked on it, I'm going to select open.
>
> **[0:49](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=49)** Now, that has pulled up a query window with the contents of that file.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=56)** And I am now looking at a [[SQL]] script.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=62)** This is what's referred to as a script file.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=66)** And we have some of the typical things that we have just talked about in terms of comments.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=71)** Here we have the comments for this file, and it tells us the created by, the created on, and probably the most important aspect is the description.
>
> **[1:21](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=81)** And this file will create your Digital Evidence Database.
>
> **[1:25](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=85)** Now I'm going to scroll down a little, not all the way, but just to emphasize a point that was mentioned earlier when we took a look at comments.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=94)** A script file could be really long, like hundreds of lines literally.
>
> **[1:39](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=99)** This comment at the top right here saves us the trouble and the time of having to go through what might be a very large file just to figure out what it might be doing.
>
> **[1:50](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=110)** So a simple comment like this, the script will create your Digital Evidence Database lets us immediately know what this script's purpose is, and it saves us the time, and it also saves others who might be inheriting this script from us the time of knowing what exactly it is doing, okay.
>
> **[2:13](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=133)** Now we are at the time we want to execute this script and this is a term that we use.
>
> **[2:17](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=137)** It's not meant to be menacing, but it's a very common term used within the industry as far as running your script.
>
> **[2:25](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=145)** And to do so within this environment, we can click on the execute icon here that I'm highlighting or you can hit F5 on your keyboard.
>
> **[2:34](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=154)** So let's click on execute, and what does that do?
>
> **[2:39](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=159)** Okay, a couple of things to point out here.
>
> **[2:42](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=162)** Now we have a new window that just appeared and we have some messages, one row affected going on going down here, I could scroll down the line here.
>
> **[2:53](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=173)** But it is what's called the results pane.
>
> **[2:57](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=177)** And it's a very important aspect of the environment here and what its job is, is to tell us, as SQL developers, the results of our SQL statement.
>
> **[3:11](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=191)** In this case, we just ran our SQL statement and it tells us, if you look a little further down, query executed successfully, and that's what we want to see.
>
> **[3:20](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=200)** It tells us if there is an issue, we would see an error message appearing in the same area.
>
> **[3:27](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=207)** But in our case here, we have successfully executed our query.
>
> **[3:31](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=211)** And in this case, it would've created our digital evidence file.
>
> **[3:35](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=215)** Okay, I want to segue over to this area that we talked about in our brief overview, but let's spend a little more time in the Object Explorer.
>
> **[3:45](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=225)** So how do we know that our database has just been created?
>
> **[3:49](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=229)** Well, as I mentioned, this is sort of our nerve, the nerve of where you navigate and find different areas within your database.
>
> **[4:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=240)** And as we mentioned before, this is the top level here.
>
> **[4:04](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=244)** This is the location or the server location of where your database is stored and the data that is within that database.
>
> **[4:13](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=253)** Under this server location, we see that we have a number of different folders which are referred to as objects.
>
> **[4:19](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=259)** And as we said before, we want to focus on this, the database object folder.
>
> **[4:28](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=268)** And what I just did is clicked on the little plus sign next to it, and this is a very important aspect.
>
> **[4:35](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=275)** The overall operation of this area, the Object Explorer, is this treelike view and this treelike functionality.
>
> **[4:43](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=283)** And I'm just clicking on and off the plus sign.
>
> **[4:46](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=286)** And that's one component that you're going to see throughout this area.
>
> **[4:50](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=290)** And it allows you to drill in to the various objects within the Object Explorer, and I'm drilling into the database area here.
>
> **[4:58](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=298)** And this is how we are going to discover how our script performed.
>
> **[5:03](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=303)** At the moment, we see that we have other [[Databases]] here, so let us do one thing.
>
> **[5:11](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=311)** We're going to right click and select refresh.
>
> **[5:17](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=317)** And one other thing before we do that is the right click functionality within this software is something that's common as well.
>
> **[5:25](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=325)** As you see, we have a number of different menu items and that's a common trait that you'll see when you right click, particularly in the Object Explorer area.
>
> **[5:35](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=335)** We want to focus on refresh.
>
> **[5:38](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=338)** So when we click on refresh, what has happened?
>
> **[5:41](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=341)** We have now the database that our script just successfully created called the Digital Evidence Database.
>
> **[5:51](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=351)** So our script successfully created our database.
>
> **[5:56](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/loading-the-database-file-23860266?u=76281980&t=356)** We're now in a position to now start investigating the contents of this database, the objects within our Digital Evidence Database, and we'll see how to do that in subsequent steps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Microsoft]] (1), [[Databases]] (1)
> **UI Navigation:** click on (5), scroll down (2), go to (1), navigate to (1)
> **Env Vars:** sql (5)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** we talked about (1), we mentioned (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 2. Get Familiar with Your Database and Its Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting familiar with your database](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=0)** - Okay, we're doing excellent.
>
> **[0:03](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=3)** Now that we have tweaked our settings and set ourselves up for success in terms of how optimized we are in our query writing ability, let's see what's next.
>
> **[0:14](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=14)** Where do we go from here?
>
> **[0:16](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=16)** Well, let's get into the environment that we're going to be spending most of our time in, and let's furthermore see how we're going to step through a brand new database that we may not have any clue what's inside of it.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=30)** In this video, we're going to take a look at the key aspects that we need to focus on, where we should look, what we should be doing, when we encounter a brand new database.
>
> **[0:40](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=40)** Let's take a look.
>
> **[0:42](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=42)** Now that we have our Digital Evidence Database loaded to our environment, it's time to get familiar with it.
>
> **[0:51](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=51)** And this is something that we should pay attention to because it's something that we are going to do often in terms of the professional environments that you're going to exercise these skills in.
>
> **[1:04](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=64)** You're going to encounter [[Databases]] you know nothing about, and how you get familiar with them in a quick and efficient way matters in terms of your ability to start working with that database.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=79)** So, let me walk you through some of the methods I've been using over my past 20 years and still employ today to get familiar with strange or new databases.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=90)** So let's take a look within our Object Explorer area here again and navigate down to our digital evidence database.
>
> **[1:40](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=100)** And that's the database we just created with our script, and as we saw, we have these plus signs next to all the objects within our Object Explorer, and we want to start getting familiar with our database.
>
> **[1:56](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=116)** So let's expand that plus sign, which gives us a view into what's within our digital evidence database, and that's database diagrams, tables, views, external resources, et cetera.
>
> **[2:12](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=132)** We want to keep on a path that's going to get us efficient and accurate, so we want to stay within the objects that matter, at least at first.
>
> **[2:22](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=142)** So let's take a look at our tables object and drill within that object.
>
> **[2:30](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=150)** So within here, now, we see we have, again, a number of other objects.
>
> **[2:34](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=154)** System tables, file tables, so forth.
>
> **[2:37](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=157)** But let's take our focus to this area here and these objects that have this grid-like symbol and these are our actual tables.
>
> **[2:48](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=168)** These are the tables that are within our digital evidence database.
>
> **[2:54](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=174)** And this is our first step to starting to get familiar with this database.
>
> **[3:01](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=181)** So, our first look is, number one, let's drill into the tables and our high level look is how many tables are in this database?
>
> **[3:10](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=190)** Is it very extensive?
>
> **[3:12](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=192)** Are there a ton of tables in there?
>
> **[3:14](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=194)** Are there not so many?
>
> **[3:16](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=196)** And in looking at these tables, let's take a further look at, well, what are the names of these tables?
>
> **[3:23](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=203)** Which gives us further clues as to the type of data that might be saved within these tables.
>
> **[3:30](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=210)** So, in looking at our instance here, we have a bank accounts table, a bank transactions table, cell phone details.
>
> **[3:39](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=219)** And this sort of gives us a overview of well, this database may be housing this particular type of data, and it starts to get us a little more familiar with well, what might be included in this database.
>
> **[3:57](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=237)** Okay.
>
> **[3:58](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=238)** In looking further, we might isolate one of these tables, let's say, for instance, the bank account table, and again, expand that table.
>
> **[4:06](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=246)** So, once again, we have a number of objects within the expanded object, and we are going to focus on the one that we are going to be keeping our accuracy and speed intact.
>
> **[4:21](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=261)** So let's look at our columns table.
>
> **[4:23](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=263)** Let's expand that table, and we have, again, a number of objects within the columns folder.
>
> **[4:32](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=272)** We have account number pk and customer id, city.
>
> **[4:38](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=278)** So let's take a look at one of these.
>
> **[4:41](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=281)** These are the columns within the bank accounts table.
>
> **[4:46](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=286)** So again, on a high level, just from a numbers perspective, there are three columns in this table.
>
> **[4:54](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=294)** And if we take a look at any given column, so let's take a look at the account number pk, we see that that's the style in which it's formatted, meaning this is a name of this column, account number pk, and within these parentheses, if we look closely, we have one specific value, int, and that clues us in as to the type of data that's stored within the account number pk column.
>
> **[5:21](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=321)** And we will take a little closer look at this data type, but this is just telling us that this is an integer, int short for integer, meaning a number is stored in the account number pk column.
>
> **[5:35](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=335)** Taking a further look at the customer id, we see it too is an int or an integer type column, meaning it stores numbers in this column, and the name of it is customer_id.
>
> **[5:49](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=349)** Third column is called city, and we have something slightly different.
>
> **[5:53](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=353)** It's called nvar char, and as we'll see again in subsequent videos, we'll see that this refers to our text or variable text, meaning it holds data that is both text and numbers.
>
> **[6:11](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=371)** Okay.
>
> **[6:12](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=372)** So, what are we doing here?
>
> **[6:14](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=374)** We're investigating, we're taking a look at the various components or the various objects within our database, and we're stepping through and getting familiar.
>
> **[6:25](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=385)** We're starting to understand what might be stored in the various tables.
>
> **[6:29](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=389)** What are the various types of columns that might be within a table?
>
> **[6:34](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=394)** How many columns?
>
> **[6:36](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=396)** What are the types of data, integer or text data, that might be stored within these columns?
>
> **[6:41](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=401)** So slowly but surely, we are starting to get familiar with our database, and this is a method that I still employ 'til today because it might seem a little slow, but it is efficient in terms of you getting a quick and really robust hands on understanding of what might be in your database.
>
> **[7:01](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=421)** So we would repeat that process for some or a few of the other tables, and get a good sense as what might be stored in there, the type of columns, how many there are, and so forth.
>
> **[7:13](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/getting-familiar-with-your-database-23857340?u=76281980&t=433)** So, in this manner, we are getting very familiar with our database, we are orienting ourselves to what is within our database, and we are now starting to get ourselves in a position to start to query and make inquiries as to what might be stored within these tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2)
> **Definitions:** is a  (2), is an  (2), short for (1), is called (1), refers to (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** customer_id (1)
> **Cross-References:** as we saw (1)
> **Analogies:** for instance (1)
> **Speakers:** - okay (1)
> **Non-Speech:** (upbeat music) (1)

#### [The basic query structure and using aliases](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=0)** - [Instructor] Okay, we are finally at the good part, where we are now able to [[Jetpack Compose|compose]], actually compose an [[SQL]] or SQL statement.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=12)** So let's see how we do that.
>
> **[0:15](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=15)** The first step is, in [[Microsoft SQL Server]] Management Studio, is to click on New Query.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=23)** As we saw before, that starts up our new canvas.
>
> **[0:26](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=26)** So a couple things I want to point out as we go along.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=30)** We're going to be composing our SQL statement most importantly within what's called the best practice standard.
>
> **[0:39](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=39)** So, to do that, I want to point out the first statement that we will use is called the USE statement.
>
> **[0:48](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=48)** Now, I'll pause here for a sec and just point out we don't only have our database that we're interested in, which is the DigitalEvidence file.
>
> **[0:58](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=58)** We also have other [[Databases]] that reside on our server.
>
> **[1:03](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=63)** And this is very, very normal, and you will see this most likely when you step into a real-world environment.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=71)** You don't only have one database that resides on a given server, but you would most likely encounter many.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=78)** And when that's the case, it's very important when you start querying your databases that you query the correct database.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=87)** Many times, there's an environment where you have the same database that represents different stages of an environment, so you want to be able to query, again, the correct database.
>
> **[1:40](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=100)** So, in order to do that, the USE statement comes in very handy.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=104)** So we say USE, and we specify the database that we're interested in using.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=111)** So let me pause here and explain one more thing, this little popup here.
>
> **[1:56](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=116)** We have a number of different choices that came up here when I typed the letter d, and this is as a result of our tweak that we made a little while ago, where we included IntelliSense.
>
> **[2:09](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=129)** And this is what IntelliSense does.
>
> **[2:11](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=131)** It saves us from typing.
>
> **[2:13](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=133)** It starts to make intelligent guesses as to what it thinks we mean when we start typing our SQL statements here.
>
> **[2:21](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=141)** And if I continue typing digital here, it narrows down.
>
> **[2:27](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=147)** So I want to just now, at this point, click on DigitalEvidence, and I no longer have to type the entire [[Microsoft Word|word]].
>
> **[2:36](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=156)** So that's IntelliSense at work for us.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=158)** And we have USE DigitalEvidence specified here.
>
> **[2:43](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=163)** And this statement now ensures that, when we write any other queries, we are querying the DigitalEvidence database and no other.
>
> **[2:55](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=175)** Okay, so now that we are specifying the correct database via this USE statement, we can do the same thing up here.
>
> **[3:05](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=185)** If we look in our menu here, we have the Available Databases dropdown, and here is a list of all those same databases that we see in our Object Explorer.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=196)** And we can simply select the DigitalEvidence file database, and it's the same effect.
>
> **[3:24](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=204)** But, again, I would recommend ensuring that you include it in the written form as we have done here.
>
> **[3:31](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=211)** Okay, our next step is to start querying our actual database.
>
> **[3:38](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=218)** So, again, using the Object Explorer, we're able to expand our DigitalEvidence database, and take a look, again, at that Tables object folder.
>
> **[3:49](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=229)** So we have, as we saw before, a number of different tables that's in here, and our basic query is going to allow us to start to communicate with the data that might be stored in any given table.
>
> **[4:03](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=243)** So let's just pick a random table.
>
> **[4:06](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=246)** Let's go with customer_details.
>
> **[4:10](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=250)** If we expand customer_details, we see in the columns we have a number of different columns here, an ID column, firstName, city, age, and LastName.
>
> **[4:23](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=263)** So let's take a look at how we can access this data that's stored in this table.
>
> **[4:32](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=272)** The first step is, in our query area, start with the keyword FROM.
>
> **[4:41](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=281)** And what does this do?
>
> **[4:43](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=283)** Firstly, if we see, again, our tree structure here, we're communicating with every database that might be residing on this server.
>
> **[4:55](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=295)** We have now through our USE statement specified the specific database that we actually want to work with, which is our DigitalEvidence.
>
> **[5:03](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=303)** Now, within this database, we've targeted our customer_details table that we'd like to start querying.
>
> **[5:11](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=311)** So we've now started with the keyword FROM, which is saying, where or what table would you like me to start looking in?
>
> **[5:21](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=321)** And, as we said, we're looking to add some queries to our customer_details.
>
> **[5:34](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=334)** Okay.
>
> **[5:36](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=336)** So, with this, we're not yet there, but we've now said, hey, out of all of the possible tables within our DigitalEvidence database, we have targeted our customer_details.
>
> **[5:49](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=349)** Now, if we look again here, we see within the columns we have a number of different columns that we can now specify that we'd like to take a look at.
>
> **[6:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=360)** How do we do this?
>
> **[6:02](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=362)** So we, again, introduce another keyword, SELECT, and we put this above the FROM keyword that we first started with.
>
> **[6:12](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=372)** And now, we can specify what column we're interested in.
>
> **[6:17](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=377)** So let's start with the first name.
>
> **[6:20](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=380)** If I say firstName, again, IntelliSense to the rescue.
>
> **[6:25](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=385)** And we have a popup with all the possible choices when I type the letter f.
>
> **[6:31](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=391)** I already see firstName, but if I start typing more letters of the firstName word, I get a narrowed down choice.
>
> **[6:41](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=401)** So I'll just select firstName at this point.
>
> **[6:44](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=404)** And, right here, I have a complete SQL statement.
>
> **[6:49](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=409)** I'm saying go to that customer_details table when I selected FROM customer_details, and, after the SELECT keyword, I've now specified the first name.
>
> **[7:01](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=421)** So, now, let's run or execute this query.
>
> **[7:04](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=424)** And, as we saw before, we can do that by hitting F5 on the keyboard or clicking Execute.
>
> **[7:11](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=431)** All right, so what have we here?
>
> **[7:14](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=434)** We now have the result of running our SQL statement.
>
> **[7:19](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=439)** And down here in the results pane, as we saw before when we first installed our database, we now have results of a table within that database, and that is the customer_details table, and we've specified that we're interested for now in just the first name, and here we have in our results the first names.
>
> **[7:43](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=463)** We can scroll down here and take a look at all of those results, but a couple of things to point out.
>
> **[7:47](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=467)** As we saw before, query executed successfully.
>
> **[7:50](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=470)** That tells us our query ran well. Our syntax is correct.
>
> **[7:55](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=475)** If we look over here as well, it tells us the number of rows that have been returned from our query.
>
> **[8:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=480)** In this case, it's 126.
>
> **[8:03](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=483)** So let's move on.
>
> **[8:05](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=485)** We can even start looking at more columns.
>
> **[8:09](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=489)** If we go back to our Object Explorer and look at our customer_details, we see other columns that we may be interested in.
>
> **[8:17](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=497)** So let's look at the last name.
>
> **[8:20](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=500)** Seems like a natural next choice.
>
> **[8:22](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=502)** So let's introduce another column in our SQL syntax here.
>
> **[8:28](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=508)** So, what have I done?
>
> **[8:30](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=510)** I put a comma and then a space.
>
> **[8:32](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=512)** Just do that again. Comma, space.
>
> **[8:36](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=516)** And now, this is telling SQL, well, get ready for the introduction of another column.
>
> **[8:43](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=523)** And we have already identified LastName, and here is LastName, by the column symbol next to it.
>
> **[8:52](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=532)** And I can just highlight and save myself from typing because of IntelliSense.
>
> **[8:58](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=538)** Okay, now, I'm going to execute our brand new statement here, and we have a modification in our result.
>
> **[9:07](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=547)** We now see our first name is joined by the new column, LastName.
>
> **[9:11](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=551)** And here, we have a small snapshot of the first and last names in our customer_details table.
>
> **[9:20](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=560)** Okay, so let's introduce yet another column.
>
> **[9:24](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=564)** I'm going to do that in a slightly different way.
>
> **[9:26](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=566)** I'm going to go over to the Object Explorer, and I'm going to click and drag and drop the age column right next to it.
>
> **[9:38](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=578)** Not going to forget my comma and a space.
>
> **[9:41](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=581)** Okay, what have we here?
>
> **[9:43](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=583)** We have another column, but this is slightly different.
>
> **[9:47](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=587)** I drag and drop this column over, the age column, but it has done so with some square brackets around it.
>
> **[9:55](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=595)** And this is just a default way that [[Microsoft SQL Server|SQL Server]] Management Studio introduces columns that you may drag and drop onto the canvas in this way.
>
> **[10:05](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=605)** Okay, let us execute this, and we see we now have a third column, the age column.
>
> **[10:13](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=613)** So, now, we have the firstName, LastName, age column, and let me just introduce one more column.
>
> **[10:21](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=621)** Let's do the city.
>
> **[10:23](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=623)** Here's the city.
>
> **[10:25](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=625)** I do the same, execute, and here we have firstName, LastName, age, and city.
>
> **[10:30](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=630)** So just like that, we have some insight into the data that has been stored in our customer_details table.
>
> **[10:37](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=637)** And our SELECT statement here is, again, saying go to that customer_details table with our FROM, and then we're now specifying after the SELECT the individual columns that we're interested in seeing, whether that we type it and are assisted by IntelliSense or we drag and drop and have SQL default the column name for us.
>
> **[11:06](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=666)** Okay, now that we have this and have a little insight, let's do a couple of things.
>
> **[11:13](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=673)** Our table here has one, two, three, four, five columns.
>
> **[11:19](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=679)** There's quite a possibility you may run into tables that have many columns, or you're working with multiple tables that you have to specify quite a number of columns in the SELECT statement.
>
> **[11:32](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=692)** Let's format this in a little more best practice standard, and that is not from left to right or horizontally as we have it at the moment.
>
> **[11:43](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=703)** We want to go more vertically.
>
> **[11:46](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=706)** And I can do that by just putting my [[Cursor]] at the beginning of the column name and hitting Enter and getting it formatted much more in line with what's known as an industry practice in terms of the creation of your SQL statements.
>
> **[12:05](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=725)** So, here, we have a basic SQL statement, a basic SQL statement.
>
> **[12:11](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=731)** We have done so successfully, and we are, by doing so, starting our analysis journey.
>
> **[12:20](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-basic-query-structure-using-aliases-23858346?u=76281980&t=740)** By just doing this, creating some simple, basic structures in terms of a SQL statement, we have gained insight into our customer_details table, we are starting to perform analysis, and we're starting to see that we are going to get a little more deeper into our knowledge and understanding of SQL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (14), [[Databases]] (4), [[Jetpack Compose|Compose]] (2), [[Microsoft Word|Word]] (2), [[Microsoft SQL Server]] (1)
> **Env Vars:** sql (16), select (5)
> **Code Identifiers:** customer_details (13), firstname (7)
> **UI Navigation:** drag and drop (3), click on (2), go to (2), dropdown (1), select the (1)
> **Cross-References:** as we saw (5), go back to (1)
> **SQL:** select (5)
> **Definitions:** is called (1), is a  (1), known as (1)
> **Best Practices:** best practice (2)

#### [Aliases and sorting](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=0)** - [Instructor] All right, awesome.
>
> **[0:02](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=2)** We are off to the races.
>
> **[0:04](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=4)** Let us keep going.
>
> **[0:06](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=6)** So one of the things we do not want to omit as we push forward here is to include what's called our best practice.
>
> **[0:14](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=14)** And that is, as we saw, including a comment, created by, create date,
>
> **[0:28](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=28)** and that'll be a month followed by a day followed by a year, and then we have the description, and that'll be structure of a basic query.
>
> **[0:39](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=39)** Okay.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=41)** Now we have our comments.
>
> **[0:43](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=43)** We have our use statement and now let's move on to something that's equally as important which is our ability to communicate with our audience.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=52)** Now, oftentimes, we're going to encounter tables just like our customer details where the columns may not be formatted or even named something that our audience would recognize.
>
> **[1:05](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=65)** And we as [[SQL]] developers, it's on us to create clear communication channel with those who are the recipients of our query results.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=79)** So, one of the cool ways that we have to do that in SQL is the introduction of what's called an alias.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=87)** So if I put the as keyword after my column, I follow that by open and closed square brackets, and I say, in this case, First Name, capitalize and spaced.
>
> **[1:40](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=100)** And now if I execute this query, hit F5 or hit execute, I have nicely formatted as I've specified here First Name capitalized very nicely.
>
> **[1:53](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=113)** So in this way, I'm now moving away from what this may be natively called in the database, at least in the customer details table, and I'm now specifying it in a language that I'm creating and this language will be a language that my audience most likely understands a lot better.
>
> **[2:13](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=133)** Okay.
>
> **[2:14](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=134)** Let's do the same for Last Name, and let's execute that.
>
> **[2:23](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=143)** Last Name looks great.
>
> **[2:25](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=145)** Let's do the same for age, but let's just capitalize Age.
>
> **[2:30](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=150)** So in the case of Age, I don't have a square bracket and that is because it's a single [[Microsoft Word|word]], and I know I don't have a space as I do with my other aliases, and therefore I don't need my square bracket.
>
> **[2:43](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=163)** So let me run this.
>
> **[2:45](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=165)** And I have age capitalized nicely.
>
> **[2:47](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=167)** And last but not least, I have city.
>
> **[2:53](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=173)** Let's run that, and we have all four columns looking really great.
>
> **[2:58](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=178)** All right.
>
> **[2:59](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=179)** We are communicating nicely with our audience via our aliases, but now let's say we have a task of finding out well, who is the youngest person in this database or who is the oldest person in this table called the customer details?
>
> **[3:18](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=198)** As it is, I can go through my results pane, and sort of eyeball and scroll through and see if I can figure out who is the youngest, who is the oldest by eyeballing and scrolling through all 126 records.
>
> **[3:32](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=212)** What if I had 1,200 records or even more?
>
> **[3:38](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=218)** Point being, we can do this an easier way by introducing a new keyword after the from, and that is ordering our records.
>
> **[3:46](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=226)** We can do so by either ordering our records in ascending or descending order.
>
> **[3:51](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=231)** So let's introduce our new keyword order by, and that is to say let's order our results by a particular column, and that column is the age column.
>
> **[4:05](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=245)** So, by default, as it is, Age is now going to be ordered in ascending order and that is from the smallest value to the largest value.
>
> **[4:16](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=256)** So let us now hit execute.
>
> **[4:18](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=258)** And we see in row number one, we have the smallest value which seems to be number one.
>
> **[4:26](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=266)** So the youngest person in our database, that person's age is one year old, and we scroll all the way down to the last record and we can see the oldest person is 96 years old.
>
> **[4:39](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=279)** And here we have ordered our results in ascending order and easily answering our question, who is the oldest and who is the youngest person in our database.
>
> **[4:48](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=288)** Just as easily, we could have ordered our results in descending order by adding Desc after the column that we've specified that we want to order by, which is the Age column.
>
> **[5:02](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=302)** Now let's hit execute here, and in row number one, we have our oldest person in this database or the oldest record, which is 96, a 96 year old.
>
> **[5:15](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=315)** So, just by adding our order by clause, we're now able to manipulate our records, further adding to our ability to perform analysis on this particular table.
>
> **[5:29](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=329)** So we've now introduced our aliasing, we've introduced our ability to order our records.
>
> **[5:35](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=335)** Now, one last thing.
>
> **[5:38](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=338)** If we wanted to limit our records instead of having all 126 as we do here, and let me just rerun this in ascending order.
>
> **[5:52](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=352)** What if we wanted just the top 10, the very top 10.
>
> **[5:56](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=356)** Not all 126, just the top 10 records so that we can see maybe who are the top 10 youngest people in the database.
>
> **[6:06](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=366)** So now that we have ordered by age in ascending order, let's introduce a new keyword right after the select and say top 10 and top keyword followed by the number of records that we'd like to see shown in our results.
>
> **[6:24](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=384)** Now let's hit execute, and sure enough, instead of 126, we have 10 records being displayed.
>
> **[6:32](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=392)** Let me just give ourselves a little more real estate here in our results and we see what those 10 records are here.
>
> **[6:39](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/aliases-and-sorting-23859324?u=76281980&t=399)** Here are our top 10 records ordered by age, and just like this, we have extended our basic SQL statement, given ourselves the ability to perform even more analysis, and now we can dig even deeper into our knowledge of SQL query composition.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Microsoft Word|Word]] (1)
> **Env Vars:** sql (4)
> **Analogies:** just like (2)
> **Cross-References:** as we saw (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Common mistakes](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=0)** - [Instructor] Awesome.
>
> **[0:01](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=1)** Now that we've gotten this far, let's pause a little and talk about some of the common rookie mistakes that we make as we start to get more familiar with our query writing abilities.
>
> **[0:13](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=13)** As we start practicing, we're going to run into some errors that we have all run into when we start learning this thing called [[SQL]].
>
> **[0:22](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=22)** I've certainly run into them.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=23)** And it is absolutely a great thing because it shows that you are actually making progress and learning more about SQL.
>
> **[0:35](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=35)** So, one of the top things that I've run into quite a lot is the omission of a letter in the name of a column.
>
> **[0:45](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=45)** This is particularly important with regard to our enabling IntelliSense earlier as one of our settings changes.
>
> **[0:54](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=54)** If we do not enable IntelliSense, chances are we're going to make a higher degree of errors with regard to our table names or our column names, because we're not getting assisted in terms of what the IntelliSense might suggest that we may mean when we're specifying our column names.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=73)** So if I omit or make an error in typing my column name like this.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=78)** And I hit Execute.
>
> **[1:20](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=80)** I get an error.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=82)** And here we see for the first time our Results pane showing us an error and giving us a clue as to what might be wrong in our syntax.
>
> **[1:31](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=91)** And this is where the Results pane plays a very important role.
>
> **[1:36](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=96)** It not only shows us our successfully running queries, but it clues us in when we have errors and how we might go about fixing them.
>
> **[1:43](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=103)** So it's telling us we have an invalid column name called firstName, without the e, Nam.
>
> **[1:52](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=112)** If I double click on this message, I can see that it has now highlighted in my SQL syntax the area that has the error.
>
> **[2:02](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=122)** I also have this underlying line here.
>
> **[2:06](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=126)** Which is highlighted in red.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=128)** And this tells us it is indeed some sort of error with your syntax.
>
> **[2:13](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=133)** And it tells us here, if I highlight, "Invalid column name 'firstNam'."
>
> **[2:18](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=138)** So, quite a lot of assistance in terms of where I might be going wrong in my syntax.
>
> **[2:24](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=144)** And as I know, if I were to now correct the name here and add the e back, IntelliSense also pops up to give me the correct name of that column.
>
> **[2:34](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=154)** My line disappears.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=156)** And if I execute.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=158)** I now have a successfully running query again.
>
> **[2:42](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=162)** Very common error... as we now start familiarizing ourselves with SQL.
>
> **[2:48](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=168)** Another error is the omission of a comma.
>
> **[2:53](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=173)** And I think this one was particularly frustrating for me because there's often times when I would be very zealous in my creation of queries.
>
> **[3:02](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=182)** But omit something as simple as a comma.
>
> **[3:04](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=184)** And I try to execute, and I get an error very similar to this.
>
> **[3:08](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=188)** And it tells us, "Hey, there's an error going on near 'LastName'."
>
> **[3:14](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=194)** If I double click again it highlights the area that it believes I have an error.
>
> **[3:20](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=200)** And as I know I have omitted the comma.
>
> **[3:23](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=203)** Once I put that comma back and I hit Execute.
>
> **[3:26](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=206)** I have a successfully running query.
>
> **[3:28](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=208)** Okay.
>
> **[3:29](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=209)** So very common mistakes that we make as we start getting our knowledge about SQL increased.
>
> **[3:38](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=218)** Here is one more that I'd like to highlight.
>
> **[3:41](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=221)** So, as we saw before, I had taken the Age column from our Object Explorer, and drag and dropped it into the canvas area here.
>
> **[3:53](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=233)** So I'll do something similar with the ID column.
>
> **[3:57](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=237)** So if I drag and drop this column, as I did before.
>
> **[4:03](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=243)** And I don't forget to put my comma.
>
> **[4:06](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=246)** So I put my comma in there.
>
> **[4:08](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=248)** And I say, "Hey, you know what? This ID column, I want to see what else it brings to my query result."
>
> **[4:16](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=256)** And I go over here and I attempt to run my query.
>
> **[4:21](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=261)** What happens? I get an error.
>
> **[4:23](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=263)** Why is this?
>
> **[4:24](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=264)** I have a perfectly normal syntax.
>
> **[4:26](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=266)** This is in check.
>
> **[4:28](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=268)** Nothing has been omitted.
>
> **[4:30](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=270)** It is very much the legal way of putting a column name, as I do have it with age.
>
> **[4:35](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=275)** Why is it doing this?
>
> **[4:38](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=278)** So, one of the things to point out here is SQL or [[Microsoft SQL Server|SQL Server]] Management Studio's ability to highlight portions of your SQL query, and run that portion that is highlighted.
>
> **[4:52](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=292)** So, as it stands, I have ID only highlighted.
>
> **[4:57](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=297)** So, to SQL server, it interprets ID as my full SQL statement, and attempts to run it as though it's a full SQL statement.
>
> **[5:07](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=307)** And then I get my error here, where it says, "Could not find stored procedure 'id'."
>
> **[5:12](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=312)** Is looking for some sort of procedure that it thinks is called ID.
>
> **[5:16](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=316)** So, I get an error.
>
> **[5:18](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=318)** My legal statement starts from SELECT all the way down to Age.
>
> **[5:23](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=323)** So if I were to actually highlight that entire area.
>
> **[5:28](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=328)** And I hit Execute.
>
> **[5:30](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=330)** I have a successfully running statement.
>
> **[5:32](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=332)** And that is the ability of SQL to use the highlighting feature and run your SQL statement.
>
> **[5:38](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=338)** This comes in really handy if you have multiple SQL statements in the same canvas area, and you are only interested in running one of those SQL statements, or a couple of them.
>
> **[5:50](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=350)** You could highlight those areas that you want to run and hit Execute, just as we are now, and we would run that.
>
> **[5:56](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=356)** But look out for the errors though, because if you incorrectly highlight or highlight some portion of this SQL, SQL Server Management Studio will think that you're trying to run a statement, and you get a similar type of error generated here.
>
> **[6:13](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=373)** All right.
>
> **[6:14](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=374)** Those are some of the common rookie mistakes, common errors.
>
> **[6:19](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=379)** Please note that if you are making mistakes, it means that you are making progress.
>
> **[6:25](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=385)** And that is something that is vital.
>
> **[6:27](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=387)** I learned that a bit late.
>
> **[6:29](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=389)** But these are some things to look out for if you were to encounter them.
>
> **[6:33](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/common-mistakes-23856621?u=76281980&t=393)** And things that are similar, you'll see that they would pop up in your error messages area here, and assist you in finding out how you could correct your syntax.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (14), [[Microsoft SQL Server|Sql server]] (3)
> **Env Vars:** sql (17), select (1)
> **CLI Commands:** make (4), find (1)
> **Code Identifiers:** firstname (1), firstnam (1)
> **UI Navigation:** click on (1), drag and drop (1)
> **Definitions:** is called (1), means that (1)
> **Warnings:** common error (1), note that (1)
> **SQL:** select (1)

#### [Solution: Crafting queries](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-bootcamp-crafting-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-bootcamp-crafting-queries?u=76281980&t=0)** - [Instructor] In this first challenge, you are asked to create a query that's going to list some customer demographic information.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-bootcamp-crafting-queries?u=76281980&t=9)** Now, as part of the team at Horizon Enterprises, your job is to create this report and develop a solution using an [[SQL]] query.
>
> **[0:20](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-bootcamp-crafting-queries?u=76281980&t=20)** So let's take a look at our approach to a solution.
>
> **[0:24](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-bootcamp-crafting-queries?u=76281980&t=24)** Starting with the FROM clause, we've specified the customer_details table as was asked in our challenge.
>
> **[0:35](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-bootcamp-crafting-queries?u=76281980&t=35)** From here, we go up to the SELECT clause, and in here, we can select the columns from the customer_details table we wish to include.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-bootcamp-crafting-queries?u=76281980&t=47)** And these are the firstName, lastName, city and age.
>
> **[0:53](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-bootcamp-crafting-queries?u=76281980&t=53)** And as we can see, we've aliased, as we were asked, our firstName column as First Name.
>
> **[1:01](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-bootcamp-crafting-queries?u=76281980&t=61)** And we have a pair of double quotes surrounding this alias because of the space in this alias name, followed by lastName, and again, this is aliased with a space, Last Name.
>
> **[1:16](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-bootcamp-crafting-queries?u=76281980&t=76)** Then city as City.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-bootcamp-crafting-queries?u=76281980&t=79)** And that is capitalized City, just being proper in our presentation to management.
>
> **[1:25](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-bootcamp-crafting-queries?u=76281980&t=85)** And just pointing out, as well, that we are not surrounding the [[Microsoft Word|word]] city with double quotes because there is no space in this alias, followed by Age, which is also capitalized, and again, not surrounded by quotes.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-bootcamp-crafting-queries?u=76281980&t=102)** Going down to our last clause, which is the ORDER BY clause, here, we can see that we have specified the Age column and we are sorting our results in ascending, that is, from the smallest to largest value.
>
> **[1:59](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-bootcamp-crafting-queries?u=76281980&t=119)** Now, let's click on Test My Code and observe our result.
>
> **[2:05](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-bootcamp-crafting-queries?u=76281980&t=125)** We can see our result under Console output, and we can see that we do have a list of First Name, Last Name, City, and Age, as was requested.
>
> **[2:17](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-bootcamp-crafting-queries?u=76281980&t=137)** And we can now present this to our management.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[Microsoft Word|Word]] (1)
> **Code Identifiers:** customer_details (2), firstname (2), lastname (2)
> **Env Vars:** sql (1), select (1), order (1)
> **SQL:** select (1), order by (1)
> **UI Navigation:** select the (1), click on (1)
> **Speakers:** - [instructor] (1)


### 3. Understand Simple and Powerful Syntax to Filter and Analyze Data

[↑ Back to Table of Contents](#table-of-contents)

#### [The WHERE clause: Finding numeric data](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=0)** (slow bounce groove music)
>
> **[0:01](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=1)** - So awesome.
>
> **[0:01](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=1)** Everyone is doing so excellent.
>
> **[0:04](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=4)** Very proud of the strides we took so far.
>
> **[0:07](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=7)** Now that we have gotten familiar with our environment we have tweaked our settings and now we've optimized our area.
>
> **[0:15](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=15)** We've gotten familiar with our database and on a high level kind of know the environment that we are working in.
>
> **[0:22](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=22)** Let us now look forward to see the steps we need to take to start actually creating our [[SQL]] statement.
>
> **[0:31](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=31)** We're going to take a look at the structure of a basic query, how we can start filtering our data, analyzing our data and basically performing data analysis.
>
> **[0:42](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=42)** Let's get started.
>
> **[0:45](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=45)** - Okay. Let's keep on pushing further and introduce something new to the mix here.
>
> **[0:51](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=51)** Let's talk about the where clause.
>
> **[0:54](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=54)** What is it?
>
> **[0:55](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=55)** Why is it used?
>
> **[0:56](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=56)** Well, let's revisit our original query here and we, if we recall, selected a few columns from our customer details table and when we ran this query we got a total count of 126 rows.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=73)** And this is the actual total number of records that are stored in our customer details table.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=79)** Now, what if we were interested in a subset of these records?
>
> **[1:24](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=84)** Not all 126 rows, but let's say we were interested in the customers that were say three years old.
>
> **[1:32](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=92)** How would we go about filtering down these records?
>
> **[1:36](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=96)** Well this is what the where clause allows us to do.
>
> **[1:40](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=100)** It allows us to filter down to the records that we may be interested in.
>
> **[1:45](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=105)** To do that we introduce the where clause after the from and before the order by.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=114)** So I just insert the keyword where and I just specify now the column.
>
> **[2:01](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=121)** And we are after the folks who are three years old so where age equal three.
>
> **[2:09](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=129)** Now let's execute this statement and we've gone from 126 rows to three rows and three rows satisfy our criteria, which is what the where clause is referred to as.
>
> **[2:25](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=145)** The criteria which is now stating the folks who are three years old and there are three records that satisfy this criteria.
>
> **[2:34](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=154)** All right, now let us zero in on the syntax of the where clause a bit We have as we saw age specified an equal to sign and the value that we are after, which is three.
>
> **[2:52](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=172)** The equal to sign is referred to as an operator.
>
> **[2:58](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=178)** A comparison operator to be specific.
>
> **[3:02](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=182)** So in SQL, there are a number of different operators that we could now include in our where clause which gives us different results and filters our records differently.
>
> **[3:15](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=195)** Let's now take a look at what those are.
>
> **[3:18](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=198)** Here we are at our comparison operators.
>
> **[3:22](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=202)** Here are a list of what's considered to be comparison operators and they are equal to, greater than, less than, greater than or equal to, less than or equal to, and not equal to.
>
> **[3:38](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=218)** And as we will see, once we start employing some of these operators within our where clause, they will greatly impact the result of our query.
>
> **[3:47](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=227)** All right. So now that we've over viewed this let's go back over to our query and start employing some of these comparison operators and see the impact that it has on our query results.
>
> **[4:02](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=242)** All right, we are now back at our now modified query which now includes our where clause.
>
> **[4:10](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=250)** And at the moment we have a specific criteria set where we are interested in folks that are equal to three years old.
>
> **[4:18](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=258)** And we see we have three rows that satisfy this criteria.
>
> **[4:23](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=263)** We could easily change the age.
>
> **[4:25](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=265)** Maybe we're interested in nine year olds.
>
> **[4:28](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=268)** We have one record that satisfies that criteria or let's say 23 year olds.
>
> **[4:34](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=274)** And we have two records that satisfy that criteria.
>
> **[4:37](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=277)** Okay, great.
>
> **[4:40](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=280)** Now let's start using some other operators.
>
> **[4:45](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=285)** How about if we were interested in folks that are not equal to but greater than 23 years old.
>
> **[4:54](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=294)** Let's execute this query and we see we now have 92 records that satisfy this criteria where the folks are now greater than 23 years old.
>
> **[5:04](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=304)** And if we do look at record number one, because our records are sorted in ascending order by age, that smallest value and ascending, if we recall, means from the smallest value to the largest value and the smallest value where our criteria is satisfied and that is age is greater than 23, that age is 24.
>
> **[5:30](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=330)** And that verifies that our query is indeed working as we specified.
>
> **[5:36](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=336)** What if we now included greater than or equal to and simply by adding an equal to sign in front of our greater than symbol.
>
> **[5:47](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=347)** And now let's execute this.
>
> **[5:50](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=350)** And we went from 92 to 94 and, if we recall, when we had our criteria where age is equal to 23, we had two records.
>
> **[6:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=360)** So those two records have now been added and we now have a total of 94 records satisfying our criteria.
>
> **[6:09](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=369)** One more we'll take a look at really quickly and this is not equal to.
>
> **[6:14](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=374)** So now we're just interested in the folks who are not equal to 23 years old.
>
> **[6:20](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=380)** Let's run this.
>
> **[6:21](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=381)** And we now went to 124 rows here and that has now satisfied our criteria.
>
> **[6:28](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-numeric-data-23857339?u=76281980&t=388)** So here we see a simple manipulation of our operator allows us to be quite flexible in the way that we can manipulate the results and make ourselves as sequel developers much more flexible much more capable in our abilities to answer any query task.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2)
> **Env Vars:** sql (2)
> **Speakers:** - so (1), - okay (1)
> **CLI Commands:** make (1)
> **Cross-References:** as we saw (1)
> **Non-Speech:** (slow bounce groove music) (1)

#### [The WHERE clause: Operators IN and BETWEEN](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=0)** - [Instructor] Let's continue working with our WHERE clause and introduce a whole new category of operators called logical operators.
>
> **[0:11](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=11)** Now, before stepping through the list here, if you recall thus far, we've worked with arithmetic operators and comparison operators.
>
> **[0:19](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=19)** Logical operators check to see whether or not a condition holds true.
>
> **[0:25](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=25)** So let's step through our list here starting with BETWEEN.
>
> **[0:29](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=29)** BETWEEN holds true if the operand is within a range of values.
>
> **[0:35](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=35)** The IN operator holds true if the operand is equal to one of a list of expressions.
>
> **[0:44](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=44)** And lastly, the NOT operator displays a record if the condition or conditions is not true.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=52)** Now, these are very standard descriptions of the operators.
>
> **[0:57](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=57)** Let us put this theory to practice and see how, when implemented within the WHERE clause of our [[SQL]] statement, how these logical operators manipulate and change the outcome of our results.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=73)** Okay, awesome, so here we are back at our [[Microsoft SQL Server|SQL Server]] Management Studio interface where we have begun constructing our SQL statement.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=84)** We've just taken a look at a new category of operators called logical operators, and let's now see the logical operator put to practice.
>
> **[1:35](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=95)** Now, if we recall, our last SQL statement, which is still here, we had constructed a statement that is now filtering via our WHERE clause for customers who are not equal to the age of 23.
>
> **[1:52](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=112)** Now, let's say we were interested in a range of customers, more specifically, let's say we were interested in all customers who were between the ages of two and 10.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=128)** How would we go about constructing our SQL statements to give us these results?
>
> **[2:13](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=133)** Well, let's start by altering our WHERE clause and including the keyword BETWEEN, so WHERE age BETWEEN two and 10.
>
> **[2:28](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=148)** So with this syntax added to our WHERE clause, let's now hit Execute and see the impact.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=156)** We went from 124 rows to 14 rows, and these values show that our minimum value being two, and if I scroll all the way down to the 14th row, our maximum value is 10.
>
> **[2:51](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=171)** And we have satisfied our WHERE clause which has now filtered for customers between the ages of two and 10.
>
> **[3:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=180)** So this has now implemented our logical operator, the BETWEEN operator, and given us as our result a range of values, specifically 14 rows of values that satisfy our criteria, great.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=196)** Now, let's see if we were after a different type of scenario.
>
> **[3:21](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=201)** In our current result, we have all our customers that fit between the ages of two and 10.
>
> **[3:29](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=209)** Now, what if we were only interested in certain customers, not all of them, that fell between this range, but let's say we were interested in the two-year-olds.
>
> **[3:41](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=221)** If I scroll down here, the five-year-olds, and the 10-year-olds, two, five, and 10 year olds.
>
> **[3:48](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=228)** How would we go about giving ourselves this specific result?
>
> **[3:53](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=233)** Now, this scenario calls for a new logical operator called the IN clause.
>
> **[4:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=240)** Now, if I erase this part of our current WHERE clause and I put the keyword in open parenthesis, and we said the values we are now interested in is two, five, and 10.
>
> **[4:18](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=258)** Let me pause a little bit and just look at the syntax here.
>
> **[4:21](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=261)** These are the values I'm interested in.
>
> **[4:23](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=263)** So they fall between the parenthesis, and they are separated by commas.
>
> **[4:28](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=268)** So in doing so, let's now look at the result when I hit Execute.
>
> **[4:34](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=274)** Just take a quick look.
>
> **[4:35](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=275)** We are now at 14 rows, let's hit Execute, and we've now gone from 14 to six rows.
>
> **[4:41](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=281)** And if I look at my results, I have ages of two, five, and 10 specified only, which satisfies the new criteria with the inclusion of the IN operator, awesome.
>
> **[4:58](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=298)** Our final operator that we took a look at in terms of logical operators on our list was the NOT operator.
>
> **[5:06](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=306)** So conversely, where we are currently interested in only the customers that are two, five, and 10 years old, let's say we are interested in the customers who are not two, five, and 10 years old.
>
> **[5:23](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=323)** And we accomplish this by just including the keyword NOT before the IN, and now, let's again take a look at our six rows.
>
> **[5:33](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=333)** And when I hit Execute, we've gone to 120 rows, and this satisfies the criteria which is now stating that we are only interested in customers who are not two, five, and 10 years old.
>
> **[5:52](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/where-clause-operators-in-and-between-23857341?u=76281980&t=352)** And by introducing the logical operators in this way, we have now extended our range of flexibility and our ability to perform as data analysts with SQL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Microsoft SQL Server|Sql server]] (1)
> **Env Vars:** where (8), sql (6), between (5)
> **SQL:** where (8)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [The WHERE clause: Finding text data and using Wildcards](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=0)** - [Instructor] All right, excellent.
>
> **[0:02](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=2)** Let's continue the work with the WHERE clause and switch it up and start working with a brand new data type.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=9)** Thus far, we've been working with our age column within our customer_details table, and that data stored in this column is numeric or integer.
>
> **[0:21](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=21)** Now, if we go over to our Object Explorer here and we look within our DigitalEvidence database, within the Tables, and we zero in on our customer.details table, we can see that our age column has int next to it, and that is to say it is an integer data type and again, that's numbers.
>
> **[0:44](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=44)** Now, there are other data types, and if we look a little higher up at our firstName column, we see that it has a data type specified, nvarchar.
>
> **[0:54](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=54)** And that means variable character.
>
> **[0:57](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=57)** Next to it is the number 255 and that is the size of the data that can be stored in this column.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=66)** So this is specifically text data that can be stored in this specific column, and as we would imagine, first names would hold text data.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=78)** So let's now start working with our WHERE clause and this new data type.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=84)** So I can erase this entire line here, and now let's say we had a specific request where we are after everyone in our customer database whose first name is Lewis.
>
> **[1:41](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=101)** Let's just say that's our quest.
>
> **[1:43](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=103)** How do we start this?
>
> **[1:45](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=105)** Well, we want to say WHERE firstName,
>
> **[1:53](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=113)** use our equal operator, and when we're working with our text, we have the introduction of the single quotes.
>
> **[2:02](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=122)** So we specify single quotes and within those quotes specify the text or the string that we are looking for.
>
> **[2:12](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=132)** So that is Lewis.
>
> **[2:17](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=137)** Now, let's run this.
>
> **[2:20](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=140)** All right, we actually have one customer by the name of Lewis Thomas and here he is.
>
> **[2:28](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=148)** A 30-year-old customer.
>
> **[2:31](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=151)** And just let's take a pause and look at our syntax here.
>
> **[2:35](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=155)** Now that we have switched to start working with our string or text data.
>
> **[2:41](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=161)** We have again our firstName, which we see here is nvarchar, and we're using our equal operator, and within our single quotes, we have the value that we are seeking to find.
>
> **[2:55](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=175)** And our results show that we now have Lewis Thomas, age 30.
>
> **[3:01](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=181)** Great, okay, we're now starting to work with string data.
>
> **[3:06](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=186)** Let's say we wanted to get a little more flexible and not just look for specifically our customer whose first name is Lewis but what if we were interested in folks whose first name started with L?
>
> **[3:20](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=200)** We didn't care who the name was, but once the name started with L.
>
> **[3:27](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=207)** Okay, how do we accomplish this?
>
> **[3:30](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=210)** Well, let's first start by introducing a new logical operator, and that operator is called LIKE.
>
> **[3:39](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=219)** So we replace our equal to sign with LIKE and we are interested in everyone whose firstName starts with L.
>
> **[3:48](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=228)** So we keep the single quotes, we have L and we don't care what comes after the L.
>
> **[3:56](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=236)** So in [[SQL]], there's a specific way of actually saying we don't care what comes after the L.
>
> **[4:03](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=243)** And that is the percent sign.
>
> **[4:06](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=246)** And that is actually saying I want everything that starts with L, and I don't care what comes after it, and that is denoted with the percent sign.
>
> **[4:17](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=257)** So now let's execute this query.
>
> **[4:21](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=261)** And let's examine the results.
>
> **[4:23](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=263)** If we take a look at our first name column here, we see that we have pretty much the query being satisfied.
>
> **[4:32](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=272)** These 10 rows that have been returned all start with L.
>
> **[4:38](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=278)** And that's pretty cool.
>
> **[4:40](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=280)** And that is the direct effect of our syntax that we have specified within our WHERE clause and that is the firstName LIKE L percent sign within single quotes.
>
> **[4:55](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=295)** Now, let's add a little twist to our query here.
>
> **[4:59](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=299)** What if we were just interested in folks who had an L anywhere in their first name?
>
> **[5:06](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=306)** So that is to say we don't care what comes before the L, we don't care what comes after the L once there is an L somewhere in the firstName.
>
> **[5:17](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=317)** So a slight twist to the syntax that we have here.
>
> **[5:20](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=320)** We're just putting another percent sign and again, that is to say I don't care what comes before the L, and the percent sign after the L is saying I don't care what comes after the L.
>
> **[5:33](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=333)** All that it matters is that there is an L within that first name.
>
> **[5:39](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=339)** So now let's execute this query.
>
> **[5:41](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=341)** Let's take a quick note of our row count, which is currently 10.
>
> **[5:46](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=346)** Hit Execute.
>
> **[5:47](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=347)** We went from 10 to 38, so we know something changed.
>
> **[5:50](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=350)** And let's examine our results a little bit here.
>
> **[5:53](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=353)** We have an L in our first record.
>
> **[5:58](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=358)** Let's just quickly scan going down here.
>
> **[6:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=360)** Yes, there's an L here.
>
> **[6:02](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=362)** I see an L.
>
> **[6:03](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=363)** So pretty much we can tell that our query has been satisfied.
>
> **[6:09](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=369)** And that is by saying %L% within our single quotes.
>
> **[6:17](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=377)** We have now effectively filtered our records to where our first name has an L somewhere within it.
>
> **[6:27](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=387)** So we have now extended our powers as SQL data analysts.
>
> **[6:36](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-text-data-using-wildcards-23856620?u=76281980&t=396)** We have now seen a brand new logical operator, the LIKE, and we've now seen how we can start extending our SQL skills to start working with a new data type, which is string or text data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3)
> **Code Identifiers:** firstname (6), customer_details (1)
> **Env Vars:** where (4), sql (3)
> **SQL:** where (4)
> **Definitions:** is an  (3), is called (1)
> **CLI Commands:** find (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [The WHERE clause: Finding data using dates](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=0)** - [Instructor] So far, we've been working with our where clause, and using it to filter our records based on two main data types.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=9)** When we looked at our age column, we worked with integer data.
>
> **[0:13](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=13)** And when we worked with our first name column, we worked with text or string data.
>
> **[0:19](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=19)** So now let's introduce a new data type within our where clause, and start working with dates.
>
> **[0:26](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=26)** To do that, we're going to construct a brand new query.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=30)** Let's go over here and click on this new query button that will pull up a brand new window for us to work in.
>
> **[0:39](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=39)** Lets employ some best practices, starting with our use statement and we select the right database.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=47)** We put our comments here within a block, and say created by, and let's say create date, and that'll be a month followed by a day followed by a year and a description, and working with dates.
>
> **[1:16](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=76)** Okay.
>
> **[1:17](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=77)** Now, let's go over here to our Object Explorer, and select a brand new table.
>
> **[1:25](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=85)** And that is that flight details table.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=88)** So if we take a look over here, we see we have a flight date column within the flight details table and the data type assigned to this column is called date time.
>
> **[1:40](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=100)** All right, let's begin constructing our statement, and let's go with the from, and if you recall by saying that we are saying let's go to the flight details table and I'm just going to drag and drop this table name right over here on our canvas.
>
> **[1:57](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=117)** Above it, I'm going to say select, and now I want to specify the columns I wish to select.
>
> **[2:07](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=127)** I'm going to drag and drop the start city.
>
> **[2:11](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=131)** I'm going to put a comma because I want more than one column.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=135)** I'm going to drag and drop the destination city.
>
> **[2:20](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=140)** Make that a little formatted, and one final column is the flight date.
>
> **[2:28](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=148)** Okay.
>
> **[2:29](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=149)** Got my three columns.
>
> **[2:31](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=151)** I'm also going to alias them.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=156)** And I'll do this nicely as start city, spell that correctly.
>
> **[2:44](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=164)** Let's alias this column as destination city.
>
> **[2:52](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=172)** And finally, flight date.
>
> **[2:57](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=177)** Okay.
>
> **[2:58](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=178)** So we have our three columns aliased.
>
> **[3:02](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=182)** We're also going to add a order by after our from, and we want to order by our flight date column.
>
> **[3:13](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=193)** I'm just going to drag that into the picture here.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=196)** So now we have a reconstructed [[SQL]] statement that has a basic structure without our filtering, and that is without our where clause thus far.
>
> **[3:28](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=208)** So let's just run this really quickly.
>
> **[3:31](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=211)** We see we have a number of different rows here and it's important to take notes of some of these results here, specifically the flight date.
>
> **[3:43](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=223)** Now, we have a nicely returned query, but one of the things that we must be cognizant of when we are working with date data types is the numerous formats that a date might be stored in.
>
> **[4:01](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=241)** Now, a date might be stored as such.
>
> **[4:06](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=246)** Month followed by day followed by year.
>
> **[4:10](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=250)** Let's say 2021.
>
> **[4:13](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=253)** It can also be stored as 01- instead of a slash, 01-2021.
>
> **[4:23](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=263)** That's two different types of date formats.
>
> **[4:26](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=266)** Okay.
>
> **[4:27](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=267)** I'm just going to do two more here.
>
> **[4:30](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=270)** Another is if we were in Europe, we would be day followed by month followed by year, and that's the European format.
>
> **[4:43](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=283)** And last but not least, if we take a look at our results here, we see we have another format which is year followed by month followed by date.
>
> **[5:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=300)** So we have four completely separate types of date formats, and it's important to note this before we start specifying what we'd like to filter when we specify our date filters.
>
> **[5:13](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=313)** Okay.
>
> **[5:15](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=315)** Now let's introduce our where clause, and if we recall the where comes after the from, but before the order by.
>
> **[5:23](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=323)** And we want say where our flight date, and we could specify particular date equal to and dates just like our text is within single quotes.
>
> **[5:43](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=343)** And we're going to do 2021-01-27, which is the first record that I see there.
>
> **[5:52](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=352)** Okay.
>
> **[5:53](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=353)** Let's run this and see our result.
>
> **[5:59](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=359)** All right.
>
> **[5:59](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=359)** We have effectively filtered down to a specific record where the flight date is 2021-01-27, and that's January 27th, 2021.
>
> **[6:11](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=371)** Okay.
>
> **[6:12](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=372)** Now, very similarly to numeric data, we can change this operator.
>
> **[6:19](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=379)** Instead of equal to, we can say greater than.
>
> **[6:23](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=383)** Let's see the impact to our result here.
>
> **[6:26](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=386)** Now we went from one record to 53 rows, and that is where the flight date occurs after January 27th, 2021.
>
> **[6:37](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=397)** And we see the first record is actually after that date, occurring on the 2nd.
>
> **[6:44](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=404)** All right.
>
> **[6:45](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=405)** Let us keep pushing on.
>
> **[6:48](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=408)** What if we wanted to say a range of dates?
>
> **[6:54](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=414)** And just like our between operator was used with numeric data, we can apply flight between, let's say, the 27th of January and the 27th of February.
>
> **[7:16](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=436)** Okay.
>
> **[7:17](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=437)** Let's take our note again, 53 records.
>
> **[7:20](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=440)** And what do we have now?
>
> **[7:22](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=442)** Two records.
>
> **[7:23](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=443)** Okay.
>
> **[7:24](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=444)** So we have a range where two records have fallen between the one that we have specified.
>
> **[7:32](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=452)** So, as we can see with date data, we are now extending yet again our capabilities as SQL developers and working with a brand new data type.
>
> **[7:47](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=467)** Very similarly, it accommodates a lot of the same logical syntax that we've been using with our other data types, like numeric data.
>
> **[7:57](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-where-clause-finding-data-using-dates-23858347?u=76281980&t=477)** So here we have our flight date being filtered in a way that is now going to give you a lot more flexibility and capabilities as a SQL developer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3)
> **UI Navigation:** drag and drop (3), click on (1), select the (1), go to (1)
> **Env Vars:** sql (3)
> **Analogies:** just like (2), picture (1)
> **CLI Commands:** make (1)
> **Definitions:** is called (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Date range and set analysis](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-time-travel-date-range-and-set-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-time-travel-date-range-and-set-analysis?u=76281980&t=0)** - [Instructor] In this challenge, you are an analyst for JetStream Airlines and your task here is to identify flights based on specific operational dates.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-time-travel-date-range-and-set-analysis?u=76281980&t=12)** Now let's take a look at how you would respond to such a request.
>
> **[0:16](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-time-travel-date-range-and-set-analysis?u=76281980&t=16)** Starting with the FROM clause, we've specified the flight details table, which has the data we are after.
>
> **[0:25](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-time-travel-date-range-and-set-analysis?u=76281980&t=25)** With this table selected, we then go up to the SELECT clause and tap into the fields that we're interested in seeing from this table.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-time-travel-date-range-and-set-analysis?u=76281980&t=36)** And these fields are start city, destination city and the flight date.
>
> **[0:43](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-time-travel-date-range-and-set-analysis?u=76281980&t=43)** Now we've alias all three of these fields as follows, with start space city wrapped in a pair of double quotes.
>
> **[0:54](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-time-travel-date-range-and-set-analysis?u=76281980&t=54)** These double quotes are needed because we have a space in this alias.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-time-travel-date-range-and-set-analysis?u=76281980&t=60)** And if we go down to destination city, the same suit follows.
>
> **[1:05](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-time-travel-date-range-and-set-analysis?u=76281980&t=65)** We have a space in between this alias name, so it's wrapped in a pair of double quotes.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-time-travel-date-range-and-set-analysis?u=76281980&t=70)** And we repeat the same with flight date for that alias.
>
> **[1:15](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-time-travel-date-range-and-set-analysis?u=76281980&t=75)** With our columns identified, we then go down to our WHERE clause, and this is where we specify the particular dates that we're trying to zero in on and perform some analysis.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-time-travel-date-range-and-set-analysis?u=76281980&t=87)** And this is the peak time for our flight company, and that is between January 27th, 2021 through February 27th, 2021.
>
> **[1:40](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-time-travel-date-range-and-set-analysis?u=76281980&t=100)** Zeroing in a little more on the syntax used here after the WHERE clause, we've specified the flight date column and with the keyword between, we have our dates, which is separated by the keyword AND.
>
> **[1:56](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-time-travel-date-range-and-set-analysis?u=76281980&t=116)** Pointing out also that our dates are wrapped in single quotes unlike our aliases, which are wrapped in double quotes.
>
> **[2:05](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-time-travel-date-range-and-set-analysis?u=76281980&t=125)** These are the little nuances that we pay attention to when getting familiar with [[SQL]].
>
> **[2:10](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-time-travel-date-range-and-set-analysis?u=76281980&t=130)** Last but not least, we go down to our ORDER BY clause, and here we specify the flight date column and also specify that we want this sorted in ascending order.
>
> **[2:23](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-time-travel-date-range-and-set-analysis?u=76281980&t=143)** Now let's take a look at our result by clicking test my code.
>
> **[2:29](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-time-travel-date-range-and-set-analysis?u=76281980&t=149)** So as we can see below console output, we have the result to our query.
>
> **[2:35](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-time-travel-date-range-and-set-analysis?u=76281980&t=155)** Three columns, start city, destination city, and the flight date.
>
> **[2:40](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-time-travel-date-range-and-set-analysis?u=76281980&t=160)** Pointing out this is not the entire table, but only those records that qualify in our WHERE clause.
>
> **[2:48](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-sql-time-travel-date-range-and-set-analysis?u=76281980&t=168)** So we can return to our management with the query answered.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** where (3), select (1), sql (1), order (1)
> **SQL:** where (3), select (1), order by (1)
> **Speakers:** - [instructor] (1)


### 4. Filter Data Based on More than One Condition

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing AND and OR](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=0)** (smooth music)
>
> **[0:01](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=1)** - Using the skills we've already learned, we're getting that much closer to finding out who stole our painting.
>
> **[0:08](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=8)** So let's learn a little bit more.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=9)** Now that we know how to analyze our data using our WHERE clause, let's go further and deepen our skills.
>
> **[0:16](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=16)** Let's see how we can find out how to analyze data using more than one condition, using something called the AND and the OR.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=27)** Let's learn how to do this.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=30)** Let's kick things off with a reminder of some of the operators that we've been using since the introduction of the WHERE clause.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=37)** If you recall, we've taken a look at some arithmetic operators, some comparison operators, as well as some logical operators.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=50)** Now, to add to our logical operator list, let's now introduce the AND operator and the OR operator.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=60)** The AND operator holds true if the conditions separated by the AND is true.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=69)** The OR operator holds true if any of the conditions separated by the OR is true.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=78)** Now, just as we did before, let's now flip over to our [[Microsoft SQL Server|SQL Server]] Management Studio Environment and introduce the AND and the OR into our WHERE clause and see how this now impacts our query results.
>
> **[1:37](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=97)** We're back at our SQL Server Management Studio Environment, and in front of us, we have a basic [[SQL]] query constructed.
>
> **[1:45](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=105)** We're taking a look at our customer details table and selecting a few columns.
>
> **[1:50](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=110)** Now, let's introduce our WHERE clause, and we know when we do this, we are filtering our current 126 rows.
>
> **[2:01](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=121)** And let's say we are now only interested in customers who are greater than 40 years old.
>
> **[2:09](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=129)** And to do this, we have now our comparison operator, the greater than symbol, and let's execute our query.
>
> **[2:19](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=139)** And we've gone down to 58 records, and that's 58 customers who are above 40 years old.
>
> **[2:27](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=147)** Now let's introduce our AND logical operator, and this now allows us to extend our filter.
>
> **[2:37](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=157)** So let's say we now are interested in customers who are greater than 40 years old and whose first name also start with P.
>
> **[2:48](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=168)** So to do this, we have our AND operator, first name, LIKE, if you recall, our operator, works with our single quotes, and this is because our first name column is a text field, and text is surrounded in single quotes in SQL.
>
> **[3:14](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=194)** So let's say first name starting with P.
>
> **[3:19](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=199)** The wild card, as we recall, just says I don't care what comes after the P.
>
> **[3:25](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=205)** But what I do care about is that the first name does start with a P, and that P could be upper or lower case.
>
> **[3:31](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=211)** It is case insensitive.
>
> **[3:33](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=213)** Let's execute our records, and we've now gone to three rows.
>
> **[3:38](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=218)** We now have our first name, satisfying our first name starting with P, and we have our ages all above 40 years old.
>
> **[3:50](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=230)** All right, let's introduce a new twist, and our new logical operator, which is the OR operator.
>
> **[3:58](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=238)** Let's say our first names can start with P or first names can start with, let's say, D.
>
> **[4:10](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=250)** Just as we did with the P, we have our wild card character.
>
> **[4:14](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=254)** And now let's execute this, and let's take a look.
>
> **[4:19](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=259)** Our first names, either starting with a P or a D, and that looks pretty spot on.
>
> **[4:26](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=266)** Our first names all start with a P or a D.
>
> **[4:29](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=269)** Now with our ages, are all ages above 40?
>
> **[4:34](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=274)** It does not seem so.
>
> **[4:36](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=276)** We have a 14-year-old, three-year-old, six-year-old, 36-year-old.
>
> **[4:42](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=282)** So we definitely have records in here that are not satisfying what we're going for, which is folks who are over 40 years old.
>
> **[4:52](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=292)** Now, this is happening because we have introduced multiple logical operators in our criteria.
>
> **[4:59](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=299)** We have the AND and the OR operators, and when we have multiple operators, we now have to say what part of the criteria we'd like to have executed first.
>
> **[5:11](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=311)** To do this, we surround that part of the criteria with brackets, and we want to say, execute this part of our WHERE clause first.
>
> **[5:26](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=326)** We want anyone whose first name starts with P or starts with a D.
>
> **[5:32](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=332)** Once you have filtered down to this list, then and only then give us the customers who are greater than 40 years old.
>
> **[5:44](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=344)** Let's run this and look at the impact.
>
> **[5:48](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=348)** Our current 12 rows has gone to seven rows, and let's take a look.
>
> **[5:54](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=354)** First name, again, satisfies our criteria, all starting with a P or a D.
>
> **[6:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=360)** And our age this time is now satisfying our second criteria, which is all customers above the age of 40.
>
> **[6:10](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=370)** And we see in every instance that holds true.
>
> **[6:15](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=375)** This is a very important aspect, worth paying some attention to now that we've introduced multiple criteria within our WHERE clause.
>
> **[6:23](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=383)** We now have to be aware of what part of that criteria we'd like to have executed first.
>
> **[6:31](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=391)** Once we surround that area with parentheses, that part of the query is executed first, and then the [[Representational State Transfer (REST)|rest]] of it follows.
>
> **[6:40](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/introducing-the-and-and-or-23855686?u=76281980&t=400)** In this instance, we now have a properly filtered query which gives us our customers whose first names start with P or D, and we have the folks who are greater than 40 years old from that list.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (2), [[SQL]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** where (6), sql (4)
> **SQL:** where (6)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Warnings:** be aware (1)
> **Speakers:** - using (1)
> **Non-Speech:** (smooth music) (1)

#### [Solution: Filtering with logical operators](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980&t=0)** - [Instructor] In this challenge, you work for Urban Lifestyle Retail and your task is to carve out distinct customer segments using [[SQL]].
>
> **[0:11](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980&t=11)** Now, before we dive into how we would approach our solution, I'd like to point out that this and other challenges are written in a [[MySQL]] environment.
>
> **[0:24](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980&t=24)** Now, this is different from the course content, which is for a [[Microsoft SQL Server|SQL Server]]-based environment.
>
> **[0:33](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980&t=33)** Now, this is very deliberate and very real-world.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980&t=37)** Often, when you work for a company that is predominantly employing, let's say, [[Microsoft SQL Server]], they are very well using other relational [[Database Management]] systems, and you as a SQL practitioner or data analyst will be expected to execute SQL in various environments, and this is an excellent opportunity to do so.
>
> **[1:03](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980&t=63)** So, that being said, let's take a look at our solution.
>
> **[1:07](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980&t=67)** Starting with our FROM clause, we can see that we've specified the customer_details table.
>
> **[1:14](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980&t=74)** Now, this is the table that has the data we are interested in.
>
> **[1:17](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980&t=77)** With this table specified, we can go up to the SELECT clause, where we can see that we've employed a CONCAT function and wrap this around a couple of fields.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980&t=90)** And that is the firstName field and the lastName field.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980&t=94)** Between these fields, we have a single quote with a space between, and this effectively creates a space between the first and lastName fields.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980&t=104)** This is all alias as Customer Name, surrounded by a pair of double quotes because there's a space between the alias Customer and Name.
>
> **[1:56](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980&t=116)** Moving on to the second field or column that we are including in our SELECT clause, and that is the Age field.
>
> **[2:06](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980&t=126)** And we've alias this as Age, and we have also wrapped a pair of double quotes around this.
>
> **[2:13](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980&t=133)** I'd like to point out that this is not needed, it's very optional when we have a single [[Microsoft Word|word]] as an alias, but we do not need to wrap this in double quotes.
>
> **[2:26](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980&t=146)** Okay, moving on to our WHERE clause.
>
> **[2:31](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980&t=151)** And we can see we've specified where age is greater than 40, and between a pair of parentheses, we have firstName like P, or firstName like D, and we can observe that we've employed the percent or wildcard symbol in there.
>
> **[2:52](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980&t=172)** Now, this effectively gives us customers' first names who start with P or first names who start with D.
>
> **[3:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980&t=180)** I would like to point out the significance of those parentheses because it first executes what's between the parentheses, and that filters our records down to those that start with P or D in the first name.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980&t=196)** With that filtered list, it then looks for ages of folks that are greater than 40, and then supplies that result to you.
>
> **[3:26](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980&t=206)** Moving down to our last clause, the ORDER BY clause, we are ordering our results in descending order by age, so we should have the oldest folks appearing at the top.
>
> **[3:39](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980&t=219)** Let's now test our code and observe our result.
>
> **[3:45](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980&t=225)** We can see under Console output, we do have our filtered result.
>
> **[3:51](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980&t=231)** We have a Customer Name column, followed by an Age column, and we can see it is sorted in descending order with Philip Allen, the 55-year-old, at the top of the list.
>
> **[4:06](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-filtering-with-logical-operators?u=76281980&t=246)** We could now return to our management with our task completed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[MySQL]] (1), [[Microsoft SQL Server|Sql server]] (1), [[Microsoft SQL Server]] (1), [[Database Management]] (1)
> **Env Vars:** sql (5), select (2), concat (1), where (1), order (1)
> **Code Identifiers:** firstname (3), lastname (2), customer_details (1)
> **SQL:** select (2), where (1), order by (1)
> **CLI Commands:** mysql (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 5. Analyze Data with Flexibility, Efficiency, and Calculated Fields

[↑ Back to Table of Contents](#table-of-contents)

#### [Calculated columns](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=5)** In the last video we took a look at applying multiple conditions using our [[SQL]] statement.
>
> **[0:11](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=11)** In this video, we're going to learn how to apply something called conditional statements or calculated columns, let's dive on in.
>
> **[0:22](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=22)** So let's start talking about calculated columns, what are they, why are they used?
>
> **[0:28](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=28)** How can they help us as SQL developers?
>
> **[0:31](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=31)** Well, a calculated column is also called a derived column and this is where we take data currently stored in a field in our database and perform a arithmetic operation against that to come up with a brand new value thereby creating a calculated column.
>
> **[0:51](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=51)** So let's see what we mean here, let us say in our scenario here we have the current SQL statement, the bank transaction table being queried and we have four columns being displayed here as our result.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=66)** I'm now going to add a calculated column so let's say we have a scenario where this bank decides to charge a transaction fee for each transaction.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=78)** How are we going to reflect this in our SQL statement?
>
> **[1:21](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=81)** Well, let's first get the column that we intend to perform the calculation against, and that's the amount.
>
> **[1:29](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=89)** And now let's simply add our $10 fee onto it using our arithmetic operator, the plus.
>
> **[1:37](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=97)** So add 10, and now we can even alias this column as we would before and say, let's call this amount plus $10 fee.
>
> **[1:55](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=115)** And we could even format our little $10 properly.
>
> **[1:59](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=119)** Okay, let's see what we come up with when we hit execute or F5.
>
> **[2:04](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=124)** We have our brand new column amount plus $10 fee and if we look against our original amount column we could see that our calculation is performing as we would expect, $10 is being added to every amount value that we see in our table.
>
> **[2:24](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=144)** So here we have effectively created a brand new column AKA a calculated column and cause us to have a direct result in our SQL query.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=158)** Okay, let's add one more piece of functionality, as we know we can sort or order our records and now we can order our records here by our calculated column, after the from we include our order by clause and then we want to now order by our amount plus 10.
>
> **[3:02](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=182)** As you can see, our IntelliSense dialogue has given us the amount plus 10 calculated field we just created, we select that field and now let's hit run.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=196)** And we can see starting with the least value $11.93 that is the least value and our highest value is 1,010 because we have now sorted our result by our calculated column.
>
> **[3:33](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=213)** So here we have employed a very important aspect in our SQL development skills and that is a calculated column and a use case that we've just done here on this example is very common where we perform an internal calculation based on some business criteria to the data that we already have stored in our table.
>
> **[3:55](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=235)** So far, we've introduced our calculated column within our select clause and within our order by clause and it's done some pretty cool stuff, added a $10 fee and we see that we can be pretty flexible with our calculated column.
>
> **[4:12](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=252)** What if we wanted to dig a little deeper and start to get even more flexible?
>
> **[4:18](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=258)** Let's say we wanted to filter by a calculated column, how would we go about doing this?
>
> **[4:24](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=264)** Well, when we hear filter, we know to include our where clause and the where clause comes after the from and before the order by and we want to say where that calculated column which is amount plus that $10 fee.
>
> **[4:47](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=287)** And we want to say where this calculated column is greater than 20, so we already see we're clued in as we have done with the order by clause, we've simply placed the amount plus $10 fee column and we were able to order by that column.
>
> **[5:07](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=307)** Now we are in the where clause attempting to do the same thing, putting that amount plus $10 fee greater than 20, we're clued in that we have an error, but let's try to run this.
>
> **[5:19](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=319)** And we are verified that we do indeed have an invalid column name and that error appears in our messages window, so how do we solve this?
>
> **[5:30](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=330)** We cannot pass the alias of our calculated column but rather the calculation itself.
>
> **[5:39](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=339)** So if we now replace this alias name in our where clause with the actual calculation which is amount plus 10 greater than 20, let's now rerun this and we do have a filtered statement with 159 rows displaying in our result.
>
> **[6:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=360)** So, we now see if we verify where amount plus 10 is greater than 20 because of our results being sorted by our amount plus 10 calculated column in ascending order, so that is where our minimum value appears at the top of the list and in our amount plus 10 fee column that first value is 25, which is greater than 20 and we do see that our where clause is satisfied and we are now including a filtering operation within our SQL statement.
>
> **[6:42](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=402)** So awesome power that we are demonstrating with the inclusion of the calculated column and now we have a calculated column in our select, in our order by and in our where clause.
>
> **[7:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=420)** As you start working with more calculated columns it's important to point out a few cautions or nuances that we should be aware of.
>
> **[7:10](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=430)** Let me jump over to this tab here and I have a basic SQL statement which is looking at the customer details table and performing a calculated column as well as just pulling out the age column.
>
> **[7:25](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=445)** I'm just ordering as well by that calculated column age divided by two, below here in my result pane I have the result of this query and I have the age column and I have the age divided by two column.
>
> **[7:41](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=461)** Now, what I am referring to with regard to granularity is the type or the data type that our column is currently set to.
>
> **[7:57](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=477)** Our age column, and let me just expand our customer details table, and if I look at the age column as we saw before, it is currently set to an integer.
>
> **[8:08](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=488)** And an integer as we said before is a numeric data type, it holds numbers, what it does hold as well is whole numbers to be more specific.
>
> **[8:21](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=501)** So a whole number does not show you a part or a fraction of a whole number so one of the things to point out here, if we take a closer look at our age divided by two column, it is what it says it is, age divided by two so one divided by two isn't zero.
>
> **[8:43](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=523)** So that's something that's a bit strange, let's go a little further, right?
>
> **[8:50](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=530)** Five divided by two isn't two, know the fractional part of these numbers are missing and that's due to the integer data type that the age column is set to and because it's set to an integer when we're performing a calculation against this column with another integer as we are at the moment, we are getting an integer result which is not as granular as we need it to be and therefore is plainly incorrect.
>
> **[9:22](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=562)** So how do we solve this?
>
> **[9:24](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=564)** What we need to do is include a different type of numeric data type, which is a decimal data type.
>
> **[9:33](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=573)** And we do that by just simply putting a .0 in our statement here or our calculated column more specifically, and let's see what happens when we execute this.
>
> **[9:48](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=588)** We now have some more granularity, which is obvious by the amount of zeros or decimal places after the point and in the case of our first record which was once zero with a whole or integer data type, now that we've converted that to a decimal we now have the correct answer here.
>
> **[10:14](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=614)** Point five or half is the answer of one divided by two.
>
> **[10:20](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=620)** And when we go down a little further where we first had another answer in row five here we now have the correct 1.5.
>
> **[10:28](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=628)** So the granularity does matter as we start to get into calculated columns and this is a caution worth calling out, so as we start working with our calculated columns we should pay attention to the data types that our data is currently stored as and that will determine if we'll have to add some more granularity as we have done in our example here.
>
> **[10:54](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=654)** Okay, so let's take a look at one more twist with our calculated columns and add to our example that we started.
>
> **[11:04](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=664)** So let's say we as the bank here wanted to add some incentive or reward our customers in some way.
>
> **[11:12](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=672)** So in the case where we have been adding a $10 fee we want to run a promotion for a limited time where we're slashing this amount in half, so we're giving a 50% discount, how would we represent this in our SQL statement?
>
> **[11:30](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=690)** Well let's add our new calculated column and what we'd like to do is now have our calculated column as is, which is amount plus 10.
>
> **[11:45](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=705)** And now we want to divide that by two to get 50%.
>
> **[11:53](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=713)** Now, let's just alias this our 50% off promo.
>
> **[12:03](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=723)** Okay, so let's run this statement and see what we get.
>
> **[12:10](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=730)** Great, we have our brand new column that we just added, our calculated column which is our 50% off promo.
>
> **[12:19](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=739)** Now, what we're expecting to see is 50% off our calculated column meaning in this case here we should see half of 25 which is not 20.
>
> **[12:32](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=752)** And as we go down the line here, 27.99, half isn't 22.99 and so forth, so what is happening here?
>
> **[12:41](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=761)** Well, one of the cautions that we should be aware of when we start introducing multiple operators in our calculated column, as we are doing here in our 50% off promo where we were actually including the plus and the division operators, we have to now direct SQL to say, which order do we want to have this operation calculated in first?
>
> **[13:13](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=793)** So in our case here, we would like to say, first we'd like to have the amount plus 10 calculation performed and the result of this be divided by two.
>
> **[13:27](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=807)** But what is happening instead is we have 10 divided by two happening first and then that result is then added to the amount, so let's take a look.
>
> **[13:40](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=820)** In the case of the amount where it's 15, we have 10 divided by two which is five and now that amount is being added to this which is in this case 15, so 5 plus 15, we get 20.
>
> **[13:59](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=839)** So we have the wrong order of operation occurring in our calculated column, to fix this we introduce our brackets.
>
> **[14:10](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=850)** And the brackets now direct SQL to say, well perform this operation first, which is amount plus 10 then take the result of that and divide it by two.
>
> **[14:22](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=862)** So let's rerun our statement and now we have a little more of what we expect, 25 here, 50% off, 12.50, that seems very correct.
>
> **[14:35](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/calculated-columns-23859325?u=76281980&t=875)** So this is something that is important that we should pay attention to as we include multiple operators in our calculated fields and we start expanding our skillset and working with more and more calculated columns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (11)
> **Env Vars:** sql (11), aka (1)
> **Versions:** 11.93 (1), 1.5 (1), 27.99 (1), 22.99 (1), 12.50 (1)
> **Definitions:** is a  (4)
> **Warnings:** be aware (2), caution (1)
> **Cross-References:** in the last (1), as we saw (1)

#### [The CASE statement](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=0)** - [Instructor] So now, let's add a little twist to our case statement.
>
> **[0:04](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=4)** What if we had a marketing initiative to now target one segment or one bucket that we have now defined?
>
> **[0:14](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=14)** So let's say we are now targeting our minors and going to introduce some sort of ad campaign to this segment.
>
> **[0:24](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=24)** How would we now filter our 126 rows down to just the minors?
>
> **[0:30](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=30)** So when we speak of filtering, we know we have to introduce our where clause.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=37)** And we want to say where the result of this case statement, and I'm just going to grab from the case all the way to the end and I'm going to ignore the alias.
>
> **[0:51](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=51)** As we know, when we are trying to filter down our records, we are not going to use the alias in our where clause, but the actual calculation if it's a calculated column.
>
> **[1:05](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=65)** In this case, the actual case statement as it's a case statement.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=70)** So let's now grab this case statement.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=73)** And I'm going to go into the where clause and just drop that case statement.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=78)** And I want to say where the result of this case statement is equal to minors because that's the segment we'd like to target at the moment.
>
> **[1:32](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=92)** So I'm going to run this statement.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=93)** And I've filtered down to 25 rows.
>
> **[1:37](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=97)** My age category now are all just minors, excellent.
>
> **[1:45](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=105)** Now we can easily filter to the other categories, let's say adults.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=114)** Simply swap that out, I hit execute.
>
> **[1:57](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=117)** And I now have 70 adults I could start marketing to.
>
> **[2:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=120)** Could easily swap out to, let's say the wise folks.
>
> **[2:06](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=126)** Execute this, and I have nine rows.
>
> **[2:11](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=131)** So very easily and very powerfully we can start to manipulate our custom buckets and filter down to these results.
>
> **[2:21](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=141)** One more twist we can do to extend our flexibility here is include our in operator here.
>
> **[2:30](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=150)** So if you recall, the in operator allows us to choose multiple values.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=156)** So not only are we restricted to only the wise folks as we just selected, but we can now choose multiple categories.
>
> **[2:46](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=166)** Let's say the adults as well.
>
> **[2:53](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=173)** And if I select these two buckets of folks, we currently are at nine rows with just the Wise folks.
>
> **[3:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=180)** And I'm going to execute this.
>
> **[3:02](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=182)** And we've gone to a 79 with a mixture of both adults and wise folks.
>
> **[3:10](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=190)** Let's take one more step and order our results by our case statement.
>
> **[3:24](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=204)** And that alias that we called our case statement was the age category.
>
> **[3:31](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=211)** So let's order by that alias.
>
> **[3:37](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=217)** And we see we have age category here.
>
> **[3:40](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=220)** And this, when we execute orders our results.
>
> **[3:45](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=225)** We have our 79 rows.
>
> **[3:47](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=227)** A for adults followed by Ws for the wise.
>
> **[3:52](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=232)** And that is sorted in ascending order from A to Z.
>
> **[3:57](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=237)** So excellent.
>
> **[3:58](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=238)** We have now extended our capabilities.
>
> **[4:03](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=243)** We've introduced our where clause.
>
> **[4:05](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=245)** We've introduced our case statement within the where clause.
>
> **[4:10](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=250)** And we've also reintroduced the in operator which extended our where clause filtering capabilities.
>
> **[4:17](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/the-case-statement-23861203?u=76281980&t=257)** And we've extended our abilities in general as [[SQL]] developers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Calculated columns and conditional logic](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=0)** - [Presenter] In this challenge, your mission is to segment customers by age into predetermined buckets.
>
> **[0:08](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=8)** So let's take a look at how we would go about responding to such a request.
>
> **[0:13](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=13)** Now, management has some predetermined buckets that they've associated with the ages of their customers.
>
> **[0:21](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=21)** So let's start by going to our from clause and we can see that we've specified the customer details table.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=30)** From here, we can tap into the fields of the customer details table via our select clause.
>
> **[0:38](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=38)** Now, we have included a few fields in our select clause, starting with the ID, and we've alias this as customer ID.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=50)** Again, surrounding this customer ID alias with double quotes because of the space between customer and ID, followed by the CONCAT function, which is concatenating, the first name and the last name fields, and placing a space between those fields.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=71)** This singular field is going to be alias as customer name and again, surrounded by a pair of double quotes, followed by the city field, which is alias as a capitalized city and an age field, also capitalized age alias.
>
> **[1:32](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=92)** Both of those last two fields are still surrounded by double quotes, even though this is optional because the alias does not contain a space.
>
> **[1:41](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=101)** Now moving on to the case statement.
>
> **[1:45](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=105)** Here, we have the segments that we are splitting up our customer via the age column.
>
> **[1:52](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=112)** Now we can see the keyword case and now going all the way down to the end, the keyword followed by as, and this entire case statement is alias as customer segment.
>
> **[2:06](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=126)** Now, let's go back up to our first condition.
>
> **[2:10](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=130)** When age is less than 18, then this is going to be labeled minors when this condition holds true.
>
> **[2:18](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=138)** Our second condition when age between 18 and 64, then adults.
>
> **[2:25](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=145)** When this holds true, this label is applied to our data.
>
> **[2:30](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=150)** Next is our else condition, which applies the label wise to all other conditions that don't fall into our previous two.
>
> **[2:40](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=160)** Now, going down to our order by clause, our requirement wanted us to order our results by our calculated or our case statement.
>
> **[2:53](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=173)** Now, we cannot put our alias customer segment that we've applied to our case statement in our order by.
>
> **[3:01](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=181)** Instead, we must repeat the entire case statement in order to order by the calculated column.
>
> **[3:09](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=189)** The other column included in our order by is age.
>
> **[3:14](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=194)** And with that applied, let us now look at our result.
>
> **[3:19](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=199)** By clicking on test my code.
>
> **[3:23](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=203)** Under console output, we can observe our results.
>
> **[3:27](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=207)** We now have the columns we've specified in our select clause, customer ID, customer name, city and age.
>
> **[3:36](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/coderpad-solution-calculated-columns-and-conditional-logic?u=76281980&t=216)** And we also have our customer segment field, which is our calculated column, which is now bucketing or segmenting our customers based on the age specifications we've supplied, we can now return to our management with our request answered.

> [!info]- Semantic Content
>
> **Env Vars:** concat (1)
> **Speakers:** - [presenter] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/next-steps-23857338?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/next-steps-23857338?u=76281980&t=0)** - [Instructor] Congratulations on finishing this course.
>
> **[0:03](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/next-steps-23857338?u=76281980&t=3)** You've applied your newfound [[SQL]] skills to solve the theft of this painting.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/next-steps-23857338?u=76281980&t=9)** It's now safely back in the museum and we've figured out who is the mastermind of this crime.
>
> **[0:16](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/next-steps-23857338?u=76281980&t=16)** It's important to know where you can take these newfound skills.
>
> **[0:21](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/next-steps-23857338?u=76281980&t=21)** You can apply these to a lot of the in-demand positions of today like data analyst, data scientist, or marketing analyst.
>
> **[0:31](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/next-steps-23857338?u=76281980&t=31)** These are some of the areas that SQL is in high demand and are some of the building blocks for these particular positions.
>
> **[0:40](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/next-steps-23857338?u=76281980&t=40)** A good place to apply your newfound SQL skills is in visualizing that data.
>
> **[0:48](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/next-steps-23857338?u=76281980&t=48)** So as we've seen, all of our results from all SQL queries come in the form of rows and columns.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/next-steps-23857338?u=76281980&t=56)** Visualizing data allows you to take that same data stored in rows and columns and apply visualizations, graphs, to it.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/next-steps-23857338?u=76281980&t=66)** And that way you are able to actually tell a much deeper story with the same SQL statement you've created.
>
> **[1:12](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/next-steps-23857338?u=76281980&t=72)** So [[Microsoft Power BI]] is a excellent next step to take your newfound SQL skills.
>
> **[1:20](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/next-steps-23857338?u=76281980&t=80)** If you'd like to get me at a one-stop shop, please visit my Linktree address.
>
> **[1:25](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/next-steps-23857338?u=76281980&t=85)** And that is linktr.ee/waltershields.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/next-steps-23857338?u=76281980&t=94)** I'd like to wish you once again a very heartfelt congratulations for successfully completing this course.
>
> **[1:41](https://www.linkedin.com/learning/sql-server-intelligence-cracking-the-code-of-enterprise-data/next-steps-23857338?u=76281980&t=101)** My name is Walter Shields and I wish you the very best in your next step in your SQL journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Microsoft Power BI]] (1)
> **Env Vars:** sql (7)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Walter Shields]]

## Resources

- Exercise files available

## Skills Covered

- SQL

## Path Context

### In [[Explore a Career in SQL Development]]
← [[SQL Queries Made Easy]] | **4 of 8** | [[SQL for Data Analysis]] →

### In [[The Top Skills IT Professionals Have Right Now]]
← [[Windows Server 2022 Essential Training]] | **3 of 10** | [[Microsoft Entra ID Fundamentals]] →

## Appears In

- [[Explore a Career in SQL Development]]
- [[The Top Skills IT Professionals Have Right Now]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL

---

[↑ Back to top](#)