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
  - Explore a Career in Database Development
  - Data Engineering Foundations Professional Certificate by Astronomer
  - Become a Software Developer
path_count: 3
tags:
  - course
  - topic/database-management
  - topic/software-development
  - topic/data-science
  - skill/sql
status: not-started
created: 2026-04-19
---

![Learning SQL Programming](https://media.licdn.com/dms/image/v2/D4D0DAQGAqoJIz-W-wA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702690438853?e=2147483647&amp;v=beta&amp;t=qDz6L00bvr_LCysHubqU3mGGX8TwhC3El8rynmyKzmo)

# Learning SQL Programming

> Structured Query Language (SQL) is a common tool for retrieving data from relational databases such as SQL Server, MySQL, MariaDB, and PostgreSQL. This course provides an introduction to this core programming language. Learn how to request data from a database, limit and sort the responses, aggregate data from multiple tables with joins, and edit and delete data. Instructor Scott Simpson also show

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385) | 1h 48m | Beginner | 66K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Scott Simpson]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/learningsql-2875059)

## Skills Covered

- SQL

## Table of Contents

### Introduction

#### Learning SQL programming
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/learning-sql-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/learning-sql-programming?u=76281980&t=0)** - [Scott] Our world is driven by data, and a lot of that data is stored in databases.
>
> **[0:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/learning-sql-programming?u=76281980&t=5)** In order to unlock the information and insights stored in databases, we need a way of asking for data.
>
> **[0:10](https://www.linkedin.com/learning/learning-sql-programming-8382385/learning-sql-programming?u=76281980&t=10)** One common language for asking about and modifying data in databases is SQL.
>
> **[0:16](https://www.linkedin.com/learning/learning-sql-programming-8382385/learning-sql-programming?u=76281980&t=16)** In this course, I'll explain what SQL is, and I'll take you through an introduction to the language.
>
> **[0:22](https://www.linkedin.com/learning/learning-sql-programming-8382385/learning-sql-programming?u=76281980&t=22)** You'll see how to ask questions of databases in a structured way to get the information you need.
>
> **[0:27](https://www.linkedin.com/learning/learning-sql-programming-8382385/learning-sql-programming?u=76281980&t=27)** We'll focus on the language itself, not any particular tool.
>
> **[0:30](https://www.linkedin.com/learning/learning-sql-programming-8382385/learning-sql-programming?u=76281980&t=30)** And the amount of setup you'll need to do in order to get started is minimal.
>
> **[0:34](https://www.linkedin.com/learning/learning-sql-programming-8382385/learning-sql-programming?u=76281980&t=34)** The goal of this course is to get you comfortable working with the basics of the language using a database that already exists.
>
> **[0:41](https://www.linkedin.com/learning/learning-sql-programming-8382385/learning-sql-programming?u=76281980&t=41)** We'll look at how to get information from more than one database table, and I'll introduce some more features and functions of SQL.
>
> **[0:47](https://www.linkedin.com/learning/learning-sql-programming-8382385/learning-sql-programming?u=76281980&t=47)** After that, we'll take a look at adding and modifying data in tables that already exist in a database.
>
> **[0:52](https://www.linkedin.com/learning/learning-sql-programming-8382385/learning-sql-programming?u=76281980&t=52)** We'll end with a quick look at overcoming some common pitfalls in working with SQL.
>
> **[0:57](https://www.linkedin.com/learning/learning-sql-programming-8382385/learning-sql-programming?u=76281980&t=57)** This course will help prepare you to work with SQL in programming, data science, or data reporting applications.
>
> **[1:04](https://www.linkedin.com/learning/learning-sql-programming-8382385/learning-sql-programming?u=76281980&t=64)** And it will provide a foundation for deeper learning about database administration, advanced SQL, and developing with data.
>
> **[1:10](https://www.linkedin.com/learning/learning-sql-programming-8382385/learning-sql-programming?u=76281980&t=70)** Let's go.

> [!info]- Semantic Content
>
> **Env Vars:** sql (6)
> **Prerequisites:** setup (1), you'll need (1)
> **Code Keywords:** let (1)
> **Speakers:** - [scott] (1)

#### Exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=0)** - [Instructor] The exercise files for this course, which contain the database that we'll be working with as we learn SQL, are available through GitHub to anyone watching the course.
>
> **[0:09](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=9)** The files are divided into a few folders and I want to take a moment to explain those before we explore the database and take a look at the options for following along with this course.
>
> **[0:18](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=18)** To use the exercise files on your computer, you'll need to download and unzip the exercise files.
>
> **[0:24](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=24)** To do that, I'll visit the GitHub repository for this course and I'll click here on the green button and make sure I'm on the local tab.
>
> **[0:32](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=32)** Then I'll find the option to download the zip file.
>
> **[0:35](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=35)** Once that's downloaded, I'll find that on my computer, and I'll extract that zip file so I can use the files inside of it.
>
> **[0:47](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=47)** As I mentioned, the exercise files are divided into three folders, one called SQLite, one called Other DBMS, and one called Notes.
>
> **[0:55](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=55)** The SQLite folder contains the database file that I'll be using in the course, and it's the one that I recommend you use as well.
>
> **[1:02](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=62)** The other DBMS folder contains the same database but in formats that can be imported into software like Microsoft SQL Server or other database management systems.
>
> **[1:11](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=71)** And the Notes folder contains a text document with all the commands that I use in the course for your reference.
>
> **[1:18](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=78)** You'll be able to open this file in any plain text editor, though I recommend you view it on GitHub.
>
> **[1:27](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=87)** It can also be helpful to keep notes as you go along.
>
> **[1:30](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=90)** If you plan to do so, I recommend Visual Studio Code for Mac, Windows, or Linux, or you can use the plain text mode of your systems text editor.
>
> **[1:38](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=98)** The database that the course uses, which is called Quiz Data, includes two tables.
>
> **[1:43](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=103)** One called people and one called states.
>
> **[1:45](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=105)** The people table contains some information for a thousand people in the US who participated in a fictional quiz competition.
>
> **[1:53](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=113)** The table includes their scores, what team they signed up to be part of, an ID number, whether they chose to get a shirt or a hat for participating in the competition and some other information.
>
> **[2:04](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=124)** The states table includes abbreviations and full names of states in the US and information about what census region and division each state is part of.
>
> **[2:13](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=133)** Throughout the course, we'll use this information in different ways to explore how SQL works.
>
> **[2:19](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=139)** As you might have guessed by now, there are a few different ways of following along with this course and I'd like to take a moment to discuss each of them so you can choose which option is best for you.
>
> **[2:28](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=148)** The first way of following the course is to download and install a free program called DB Browser for SQLite on your computer and use it to open the exercise files.
>
> **[2:37](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=157)** This is the method that I'll be using in the videos for the course, and I recommend that you also use this method if you're able to do so.
>
> **[2:43](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=163)** In fact, the next video covers how to use that software in more depth.
>
> **[2:47](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=167)** The second way to follow the course is to import the appropriate SQL file into other database management software.
>
> **[2:53](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=173)** I don't necessarily recommend this method because it can become somewhat complicated, but the files are available if you need to take this route.
>
> **[3:01](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=181)** The third option, which is useful if you aren't able to install software on your computer or if you want to work in an environment that isn't stuck on one computer, is to use GitHub Codespaces.
>
> **[3:10](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=190)** GitHub Codespaces is an environment that runs in the browser without any software needing to be installed on your local machine.
>
> **[3:17](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=197)** Anyone with a free or paid GitHub account can use GitHub Codespaces.
>
> **[3:22](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=202)** Let's take a brief look at how that works.
>
> **[3:24](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=204)** To launch a Codespace, I'll visit the courses GitHub repository.
>
> **[3:28](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=208)** I'll create a fork or a copy of this repository in my own GitHub account by clicking the fork button up here, and I'll go through that process.
>
> **[3:39](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=219)** When I have my own fork, I'll click on the green button up here and make sure I'm on the Codespaces tab.
>
> **[3:45](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=225)** Then I'll click create Codespace on main.
>
> **[3:49](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=229)** This starts up the in-browser Codespaces environment, and when it does, you'll be prompted to install the SQLite viewer extension.
>
> **[3:56](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=236)** I recommend that you do so that you can use it to explore the database.
>
> **[4:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=240)** I'll click install.
>
> **[4:02](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=242)** I'll close this terminal down here because we won't be using that and I'll move back to my readme.
>
> **[4:09](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=249)** In this environment, we don't need to do anything special to get the exercise files.
>
> **[4:14](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=254)** The database is already right here in the SQLite folder.
>
> **[4:17](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=257)** I'll open that up.
>
> **[4:18](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=258)** I'll click open anyway, and then choose the SQLight Viewer.
>
> **[4:23](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=263)** And there's my tables.
>
> **[4:25](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=265)** To work with the database, we'll need to connect to it, so I'll open the command palette here with Command + Shift+ P on a Mac or Control + Shift + P on Windows.
>
> **[4:33](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=273)** There I'll type SQLight and find the open database option.
>
> **[4:41](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=281)** Then I'll select quizdata.db.
>
> **[4:45](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=285)** To write the queries that you'll see in the course, you can create a blank file here on the left by right clicking and choosing new file, and then call that something like working.sql.
>
> **[5:02](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=302)** I'll split my window here by finding the split editor button and holding the alt key and then clicking it.
>
> **[5:09](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=309)** Then in the top copy of the working file, we can write a query.
>
> **[5:14](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=314)** Like SELECT * from people.
>
> **[5:16](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=316)** Don't worry about what this does right now.
>
> **[5:18](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=318)** We'll explore that in just a little bit.
>
> **[5:21](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=321)** To run the query, I'll open the command palette again and find SQLight: Run Query.
>
> **[5:34](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=334)** When I do, I'll see the results down here in the lower area.
>
> **[5:38](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=338)** Again, GitHub Codespaces is a useful tool for following the course if you don't want to install software in your computer or if you want to work in a cloud environment that isn't tied to one computer, but it's one of three options available for following along with me.
>
> **[5:52](https://www.linkedin.com/learning/learning-sql-programming-8382385/exercise-files-19872824?u=76281980&t=352)** I'll be using the DB browser software on my computer and we'll explore that in the next video.

> [!info]- Semantic Content
>
> **Tools:** github (10), visual studio (1), terminal (1)
> **Exercise Files:** exercise files (6), zip file (2), download the (1)
> **CLI Commands:** find (4), make (2), unzip (1)
> **Env Vars:** sql (4), dbms (2), select (1)
> **Prerequisites:** install (5), you'll need (1)
> **UI Navigation:** open the (3), click on (1)
> **Definitions:** is called (1), is an  (1), is a  (1)
> **Cross-References:** next video (1), in the next (1)

#### Exploring DB Browser for SQLite
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=0)** - [Instructor] When we work with SQL, we need some kind of tool that lets us write a statement and then send that statement to database software that will interpret it and give us a result.
>
> **[0:08](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=8)** There are many different programs and applications that can understand SQL.
>
> **[0:12](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=12)** And often, an SQL statement will be embedded inside of the code for an application or program.
>
> **[0:17](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=17)** Because I can't cover all the software someone might use to write SQL, I've chosen an application that works on all major platforms and is free.
>
> **[0:24](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=24)** Many applications that use SQL take a lot of setup.
>
> **[0:27](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=27)** And I don't want to get bogged down with that here at the beginning.
>
> **[0:30](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=30)** You can follow along with this course on your desktop or laptop computer with a free application for Windows, Mac and Linux called DB Browser for SQLite.
>
> **[0:38](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=38)** It's available from [SQLitebrowser.org/dl](https://SQLitebrowser.org/dl).
>
> **[0:42](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=42)** Download the file and install it according to the instructions for your platform.
>
> **[0:46](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=46)** If you're using Windows, chances are you'll want this one, the installer for the 64-bit version.
>
> **[0:50](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=50)** If you're using Windows, but you're not able to install software on the computer that you're using, you can try out the zip version or the standalone version of the software instead.
>
> **[0:59](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=59)** On a Mac, this is the one you want.
>
> **[1:01](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=61)** And if you're using Linux, you can find instructions for your system down below.
>
> **[1:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=65)** Install the software and then open it up.
>
> **[1:08](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=68)** I already have the exercise files downloaded here on my system.
>
> **[1:11](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=71)** So if you don't have them, be sure to download them and unzip them if need be.
>
> **[1:15](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=75)** After downloading and unpacking the exercise files, find the open database option in the toolbar, and browse to where you downloaded the exercise files.
>
> **[1:23](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=83)** Open up that folder and browse to the SQLite folder and then find the quiz data file.
>
> **[1:29](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=89)** Click open.
>
> **[1:30](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=90)** And that will open the database here in DB Browser.
>
> **[1:33](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=93)** Let's take a quick tour of the software.
>
> **[1:35](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=95)** Here under the database structure tab, we see the database structure.
>
> **[1:39](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=99)** It's a pretty simple database with a couple of table.
>
> **[1:43](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=103)** We'll get more into those details as we explore the data in a little bit.
>
> **[1:47](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=107)** Here, you can see the create statement for the tables.
>
> **[1:51](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=111)** We can browse through the data in each table using this next tab.
>
> **[1:55](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=115)** And then if we click over to the execute SQL tab, we have an area where we can write and run SQL statements.
>
> **[2:01](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=121)** I want to make sure my font is large enough.
>
> **[2:03](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=123)** So I'll go into the preferences.
>
> **[2:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=125)** In this version of DB Browser, it's under edit and then preferences.
>
> **[2:09](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=129)** In the SQL section, there's options for the SQL editor font size and log size.
>
> **[2:17](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=137)** I'll set these to something larger.
>
> **[2:19](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=139)** You can pick something that looks good to you, or you can leave it set as is.
>
> **[2:22](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=142)** I'll try 16.
>
> **[2:25](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=145)** And I'll change the color of strings that we type from this really bright red to a more muted orange.
>
> **[2:35](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=155)** That's just a preference and you don't need to do that.
>
> **[2:37](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=157)** And you don't need to change the font size if you don't want to either.
>
> **[2:40](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=160)** These changes just help things look a little nicer here on my screen.
>
> **[2:43](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=163)** I'll click save and go back to the editor.
>
> **[2:45](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=165)** Now, I'll write a very quick SQL statement here in the execute SQL tab to check things out.
>
> **[2:50](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=170)** I'll explain the statement later.
>
> **[2:55](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=175)** But for now, this will show us how some other parts of the interface work.
>
> **[2:59](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=179)** Throughout the course, we'll be writing SQL statements and running them.
>
> **[3:02](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=182)** So to run the statement, I'll either click the play button up here or press F5 on my keyboard.
>
> **[3:08](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=188)** On a Mac and on some PC laptops with media keys, you may need to hold the function key to get F5 to work.
>
> **[3:14](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=194)** And on a Mac, you can press command + R or command + return to run the statement too.
>
> **[3:19](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=199)** Here's the result of our query.
>
> **[3:21](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=201)** Again, don't worry about exactly what this is right now.
>
> **[3:23](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=203)** We'll explore it later on.
>
> **[3:25](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=205)** Down here at the bottom of the window is a status message back from the database server about what happened.
>
> **[3:30](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=210)** This is useful for troubleshooting.
>
> **[3:32](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=212)** And it's good to keep an eye on this to see what the database did when we asked it to run a statement.
>
> **[3:36](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=216)** Over here on the right side, are some panels we can get rid of if we want to.
>
> **[3:40](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=220)** Click the X button to send them away, or pop the panel out so it floats on its own.
>
> **[3:44](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=224)** You can click the icon with the two overlapping boxes, and you can put it back by dragging.
>
> **[3:49](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=229)** To toggle these side panels, we can also go to the view menu and choose them from the list.
>
> **[3:54](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=234)** I'm going to get rid of all of these by going down to window layout and choosing simplify window layout.
>
> **[3:59](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=239)** I want to draw attention to one panel you might want to use, the SQL log.
>
> **[4:09](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=249)** It keeps a record of every command sent to the database for this project.
>
> **[4:12](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=252)** I'll make sure I'm looking at the user section.
>
> **[4:15](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=255)** So I have a running history of everything that I've typed.
>
> **[4:17](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=257)** This is useful because if I go over here and type another statement in the query window,
>
> **[4:30](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=270)** and run it, all of the statements in this query box run.
>
> **[4:33](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=273)** So if I just wanted to run one statement, I would need to erase what I had before, and then run my single query.
>
> **[4:47](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=287)** You can also select one query by painting it with the mouse and run it just by itself.
>
> **[4:52](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=292)** But the log gives us a running history.
>
> **[4:56](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=296)** So if you delete a statement that you ran in the query window, it's not gone forever.
>
> **[5:11](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=311)** You can copy and paste from the log back into the query window.
>
> **[5:15](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=315)** The DB Browser for SQL Lite software is focused on writing SQL and managing one type of database, SQL Lite, which is popular for storing data in mobile and desktop applications.
>
> **[5:25](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=325)** So there's all kinds of features in the software that we won't be using in this course.
>
> **[5:28](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=328)** But I really like the software because it makes it easy to have an offline database on your computer without having to set up developer tools and database servers and all kinds of complicated, extra stuff.
>
> **[5:38](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=338)** You may need to do that down the road, but we're not focusing on that right now.
>
> **[5:41](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=341)** I also like the software because it's consistent across all three major platforms and it's free.
>
> **[5:46](https://www.linkedin.com/learning/learning-sql-programming-8382385/exploring-db-browser-for-sqlite?u=76281980&t=346)** If you want to use different software, that's fine, but you're on your own for setting that up.

> [!info]- Semantic Content
>
> **Env Vars:** sql (16)
> **CLI Commands:** find (3), make (2), unzip (1)
> **Prerequisites:** install (3), setup (1), set up (1)
> **Code Keywords:** let (1), interface (1), function (1), delete (1)
> **UI Navigation:** in the toolbar (1), open the (1), toggle (1), go to (1)
> **Exercise Files:** exercise files (3), download the (1)
> **URLs:** [sqlitebrowser.org](https://sqlitebrowser.org) (1)
> **Cross-References:** go back to (1)

#### CoderPad tour
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/coderpad-tour?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/coderpad-tour?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the challenge links in the courses table of contents.
>
> **[0:06](https://www.linkedin.com/learning/learning-sql-programming-8382385/coderpad-tour?u=76281980&t=6)** Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge.
>
> **[0:13](https://www.linkedin.com/learning/learning-sql-programming-8382385/coderpad-tour?u=76281980&t=13)** These challenges are hosted by CoderPad, and they appear in the same area of the course page where you watch the courses videos.
>
> **[0:19](https://www.linkedin.com/learning/learning-sql-programming-8382385/coderpad-tour?u=76281980&t=19)** We recommend using a desktop browser for the best experience with code challenges, but you can use the LinkedIn Learning mobile app if you prefer.
>
> **[0:25](https://www.linkedin.com/learning/learning-sql-programming-8382385/coderpad-tour?u=76281980&t=25)** The code challenge has three areas, instructions in the top left, a console for output in the bottom left, and the code editor for your answer on the right.
>
> **[0:37](https://www.linkedin.com/learning/learning-sql-programming-8382385/coderpad-tour?u=76281980&t=37)** You can use these drag handles to allocate space as you like.
>
> **[0:42](https://www.linkedin.com/learning/learning-sql-programming-8382385/coderpad-tour?u=76281980&t=42)** To get even more horizontal space for the code editor, you can collapse the courses table of contents on the left.
>
> **[0:47](https://www.linkedin.com/learning/learning-sql-programming-8382385/coderpad-tour?u=76281980&t=47)** Each challenge has instructions that include a description of the challenge and the challenge's desired result.
>
> **[0:52](https://www.linkedin.com/learning/learning-sql-programming-8382385/coderpad-tour?u=76281980&t=52)** Create your answer in the code editor.
>
> **[0:58](https://www.linkedin.com/learning/learning-sql-programming-8382385/coderpad-tour?u=76281980&t=58)** When you click Test my code, you'll see a message indicating whether your code returned a correct result, and a text-based version of the return data.
>
> **[1:12](https://www.linkedin.com/learning/learning-sql-programming-8382385/coderpad-tour?u=76281980&t=72)** If your answer doesn't create a correct result, you'll see a message telling you that the code is incorrect and showing the data that was returned.
>
> **[1:26](https://www.linkedin.com/learning/learning-sql-programming-8382385/coderpad-tour?u=76281980&t=86)** If your answer doesn't create a correct result, you'll see a message telling you that the code is incorrect and showing the data that was returned.
>
> **[1:36](https://www.linkedin.com/learning/learning-sql-programming-8382385/coderpad-tour?u=76281980&t=96)** If any messages are too long to fit in the console, you can scroll sideways to see all of the text.
>
> **[1:42](https://www.linkedin.com/learning/learning-sql-programming-8382385/coderpad-tour?u=76281980&t=102)** When you finish each code challenge, return to the course's table of contents and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### What is a database?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-a-database?u=76281980&t=0)** - [Instructor] Before we start learning about a language used to talk to a database, we need to have an understanding of what a database is.
>
> **[0:07](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-a-database?u=76281980&t=7)** At the most basic, a database is a collection of information.
>
> **[0:11](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-a-database?u=76281980&t=11)** Think about a list of people, the city they live in, and their favorite color.
>
> **[0:16](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-a-database?u=76281980&t=16)** This gives us three kinds of information, a name, a city, and a color.
>
> **[0:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-a-database?u=76281980&t=20)** In a database, the individual kinds of information are organized into columns, and each set of information is organized into rows.
>
> **[0:29](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-a-database?u=76281980&t=29)** Often, the columns are called fields, and the rows are called records.
>
> **[0:34](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-a-database?u=76281980&t=34)** You can think of a record like a card with an individual person's information on it.
>
> **[0:38](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-a-database?u=76281980&t=38)** The cards all have the same spaces for information.
>
> **[0:41](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-a-database?u=76281980&t=41)** They have the same fields.
>
> **[0:43](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-a-database?u=76281980&t=43)** But each card pertains to one person, and each one is an individual record.
>
> **[0:48](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-a-database?u=76281980&t=48)** Together, fields and records make up a table, and one or more tables make up a database.
>
> **[0:54](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-a-database?u=76281980&t=54)** With this kind of basic information in one table, we could use a spreadsheet like Excel to keep track of our data.
>
> **[1:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-a-database?u=76281980&t=60)** But databases allow us not only to add more tables, but also to set up rules and relationships between the tables.
>
> **[1:07](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-a-database?u=76281980&t=67)** The layout and definition of how fields, tables, and relationships are set up is called the schema of the database.
>
> **[1:14](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-a-database?u=76281980&t=74)** Creating setups with relationships and other parameters is beyond the scope of this course, but if you want to learn more about how these relational databases work, be sure to check out Programming Foundations: Databases here on LinkedIn Learning.
>
> **[1:27](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-a-database?u=76281980&t=87)** While the row and column arrangement of data in a table can look like a spreadsheet, it's difficult to ask some kinds of questions about this data using a spreadsheet.
>
> **[1:36](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-a-database?u=76281980&t=96)** With a spreadsheet, we can easily say what the sum total of a row or column is or sort information alphabetically.
>
> **[1:42](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-a-database?u=76281980&t=102)** But if we wanted to ask how many people in New York like the color purple, it gets a little bit more complicated.
>
> **[1:48](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-a-database?u=76281980&t=108)** That's where databases become helpful, and that's why we have SQL.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is an  (1), is called (1)
> **Prerequisites:** set up (2), before we start (1)
> **CLI Commands:** make (2)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### What is SQL?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=0)** - [Instructor] SQL stands for Structured Query Language, which is a language for manipulating and defining data in databases.
>
> **[0:07](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=7)** It first came into use in 1974 and became a standard in 1986.
>
> **[0:12](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=12)** SQL gives us a standardized way of asking a specific question of a database, or for making a structured query that a database knows how to respond to.
>
> **[0:22](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=22)** There's a whole lot of formal math behind how SQL was designed and defined, but in this course, we're not going to cover that.
>
> **[0:29](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=29)** We'll focus on the practical usage of the language.
>
> **[0:32](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=32)** And if you want to explore the academic history of SQL, I encourage you to do so.
>
> **[0:37](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=37)** SQL gives us a way of writing questions a database can understand.
>
> **[0:41](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=41)** Databases aren't clever and they can't figure out meaning from a question the way a human can.
>
> **[0:46](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=46)** If I were to ask you a question like, "How many people on the winning team asked for shirts?", you, a person, could pretty easily understand what I'm asking you.
>
> **[0:56](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=56)** Even given just a list of team members, points, and shirt preferences, you could eventually figure it out.
>
> **[1:01](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=61)** But give that same list to a database and ask the same question, and you'll probably get whatever the computer equivalent of a blank stare is.
>
> **[1:09](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=69)** The computer doesn't know how to understand the meaning or intention of my question.
>
> **[1:14](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=74)** To make questions like this approachable for a database, we need to break them down into a series of smaller questions that are structured in a way that the database software can understand.
>
> **[1:23](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=83)** Because it's such a powerful way of thinking about data, SQL has been adopted into many database products.
>
> **[1:30](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=90)** Some products support the SQL standard and add other features on top of it, and some support part, though not all, of the SQL standard.
>
> **[1:38](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=98)** In this course, I'll cover the basic and widely supported parts of SQL that you're likely to use, whether you're working with Microsoft Transact-SQL or T-SQL, MySQL, Postgres, SQLite, and others.
>
> **[1:51](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=111)** The way we say the name of this language can sometimes be a little bit confusing.
>
> **[1:56](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=116)** The language is called SQL, or Structured Query Language, but was originally called SEQUEL, for Structured English Query Language.
>
> **[2:04](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=124)** Maybe because of this, or because the letters themselves look a little bit like the English word sequel, some people pronounce the name of the language this way instead.
>
> **[2:12](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=132)** This confusion extends to products with the name of the language in their names, like MySQL or MySQL or Microsoft SQL Server.
>
> **[2:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=140)** I tend to prefer switching back and forth a little bit, calling the language itself by the letters and saying sequel when it's easier to pronounce that way, or when it flows better as part of the name of a product.
>
> **[2:31](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=151)** Both ways are acceptable, though some people have strong opinions about it.
>
> **[2:35](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=155)** Just don't call it squeal or squirrel or anything like that.
>
> **[2:39](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=159)** Before we start building SQL statements, we need to understand what the basic parts of a statement are.
>
> **[2:44](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=164)** Overall, something you write in SQL to get an answer from a database or to make a change to it is called a statement.
>
> **[2:51](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=171)** SQL is generally white space independent, meaning that if you want to add some space or lines between clauses or expressions to make your statement easier to read, you can do so.
>
> **[3:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=180)** In this course, I'll break statements across various lines in order to make them more clearly readable.
>
> **[3:06](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=186)** You can do this too.
>
> **[3:07](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=187)** I find it really helpful when I'm putting together a more complicated statement so I can see what's going on.
>
> **[3:13](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=193)** A statement is made up of clauses.
>
> **[3:15](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=195)** Don't worry about what this actual statement does right now.
>
> **[3:18](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=198)** We'll see how to make clauses on statements later in the course.
>
> **[3:21](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=201)** Clauses are the basic components of statements, the smaller building blocks that make up the whole thing.
>
> **[3:27](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=207)** These clauses are constructed out of various elements including keywords, which are special or reserved words which tell the database to take some action, field names, which let us refer to fields or columns of data whose values we want to use, table names, which tell the database which table to use, and predicates, which we use to specify what information or condition we're looking for.
>
> **[3:50](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=230)** Predicates include a value or condition called an expression.
>
> **[3:54](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=234)** A clause can be a statement if you're writing a really basic one.
>
> **[3:58](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=238)** There are also operators, as we'll see later on, which let us compare equality or ranges of data or treat information in other ways.
>
> **[4:06](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=246)** These keywords and operators are customarily written as uppercase, though usually they don't have to be.
>
> **[4:11](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=251)** But it helps to distinguish the SQL from your expressions and field names at a glance.
>
> **[4:17](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=257)** In this course, I'll follow the custom of writing them in uppercase, even though we have some syntax highlighting that will also help differentiate them.
>
> **[4:24](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=264)** At the end of a statement, we put a semi-colon.
>
> **[4:27](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=267)** This tells the database that a statement has ended.
>
> **[4:30](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=270)** That's important because we can reconfigure some of the clauses in different ways and add more to the end of a statement.
>
> **[4:36](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=276)** So we need to be able to tell the database that we're done and that it can start figuring out what we're asking for.
>
> **[4:42](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=282)** While the semi-colon is often required in order for database software to accept the statement as valid, not all database software enforces this.
>
> **[4:50](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=290)** So it's a good idea to just get into the habit of using a semi-colon to end a statement as you would use a period to end a sentence.
>
> **[4:58](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=298)** Any SQL we write that takes some kind of action is a statement.
>
> **[5:01](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=301)** And sometimes you'll see a statement using the select keyword called a query instead.
>
> **[5:06](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=306)** A query suggests that we're asking a question and when we're using the select keyword, that's generally the case.
>
> **[5:12](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=312)** SQL statements can also be used to add, modify, or delete data in a database or even to create, modify, and remove tables.
>
> **[5:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=320)** When we use SQL to work with data in existing tables, that's SQL being used as a DML, or data manipulation language.
>
> **[5:28](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=328)** These operations where we change data are generally called CRUD, short for create, read, update, and delete.
>
> **[5:36](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=336)** CRUD is a common shorthand for referring to modifying data in a database.
>
> **[5:41](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=341)** And the CRUD operations are central to working with databases.
>
> **[5:44](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=344)** Crud is also something fun to say if you make a typo or mistake when working with SQL.
>
> **[5:50](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=350)** When we write SQL to make changes to the structure of tables themselves or to change the database, that's SQL being used as a DDL, or data definition language.
>
> **[6:01](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=361)** In this course, we'll focus on SQL as a data manipulation language working within existing tables.
>
> **[6:07](https://www.linkedin.com/learning/learning-sql-programming-8382385/what-is-sql?u=76281980&t=367)** Once you're comfortable with that, you'll be ready to move onto courses which focus on the structure of databases.

> [!info]- Semantic Content
>
> **Env Vars:** sql (25), crud (3), sequel (1), dml (1), ddl (1)
> **CLI Commands:** make (8), mysql (3), find (1)
> **Code Keywords:** let (2), for. (2), delete (2), this, (1), extends (1)
> **Definitions:** is a  (3), is called (2), stands for (1), short for (1)
> **Cross-References:** later in (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)


### 1. Ask for Data from a Database

#### Ask for data with SELECT
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=0)** - [Instructor] The most basic way of asking for information with SQL is to use a select statement.
>
> **[0:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=5)** Select statements start with the select keyword, which tells the database software that we want it to select, or choose, or collect specific information from the database and return it to us.
>
> **[0:16](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=16)** In fact, we can use it to return information that isn't even part of the database.
>
> **[0:21](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=21)** For example, if I wanted the database software to send me back some text, I could write select and put hello world or any other texts inside single quotes and end that with a semi-colon and I would get that text back regardless of the data stored in the database.
>
> **[0:39](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=39)** Try it out for yourself.
>
> **[0:41](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=41)** Anything you put in single quotes will get returned to you as text.
>
> **[0:46](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=46)** Returning explicit text can be useful for some queries but we won't focus on it here.
>
> **[0:52](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=52)** Instead, we can replace that statement in single quotes with some parameters that will tell the database software to start sending us information from the database.
>
> **[1:01](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=61)** First, let's take a look at what the information in the database looks like.
>
> **[1:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=65)** I'll click on browse data and make sure I have the people table selected.
>
> **[1:10](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=70)** Here I can see the field names in my database across the top of this interface and each of those field names is something I can use to ask the database for information.
>
> **[1:21](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=81)** So to see all of the first names in the database, all of the values in the first name field in the people table, I can write SELECT first_name FROM people;
>
> **[1:39](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=99)** and the result here is a listing of every value in the first name field in my database.
>
> **[1:47](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=107)** If I wrap that field identifier in single quotes, I'd get back the text string instead.
>
> **[1:56](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=116)** Remember single quotes are for literal text.
>
> **[1:59](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=119)** Though you may see back ticks, the little diagonal apostrophe character, around identifiers on certain database platforms here and there as well.
>
> **[2:11](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=131)** I'll get rid of those and select the last name field instead of the first name.
>
> **[2:19](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=139)** I can ask for results from more than one field by adding multiple fields separated by commas.
>
> **[2:26](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=146)** Let's return the first name and last name for each row in the people table.
>
> **[2:32](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=152)** To do that, I'll write SELECT first_name, last_name FROM people; and end that with a semi-colon.
>
> **[2:42](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=162)** I can change the order of the fields too.
>
> **[2:44](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=164)** Whatever order these fields appear in the query will be the order of the fields in the output.
>
> **[2:50](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=170)** For example, I'll take last name and put that as the first field.
>
> **[3:02](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=182)** Then I'll run the query and I can see the result here.
>
> **[3:06](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=186)** Last name and then first name.
>
> **[3:08](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=188)** If we want to get a response that shows all of the fields in a table instead of just listing them one by one, we can use a wild card operator, the star or asterisk, which represents all of the fields in a specified table.
>
> **[3:26](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=206)** Using the asterisk is useful when you're exploring data but we'll rarely use it in an app or report because it returns a lot of information and usually we want to do more interesting things with our data than just dump all of the information into one big result.
>
> **[3:40](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=220)** Let's use the select statement to get a little more familiar with it.
>
> **[3:44](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=224)** From the select star statement that I just wrote, I can see the column names in the table that I'm working with.
>
> **[3:50](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=230)** Let's experiment with some of these names.
>
> **[3:53](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=233)** I'll look at first name, the state code, and company
>
> **[4:01](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=241)** and then company, first name, and quiz points.
>
> **[4:06](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=246)** (keyboard clicking) If you'd like, take some time to try out other combinations.
>
> **[4:16](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=256)** Selecting data doesn't change anything in the database so it's a great way to explore this data set and any other data set that you might be working with in the future.
>
> **[4:26](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=266)** The select statement gives us the ability to read data and that's one of the actions that's represented by the acronym CRUD.
>
> **[4:33](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-with-select?u=76281980&t=273)** For the rest of this chapter, we'll take a look at how to add on to basic select statements to find the data we need and get it in the form we want.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (1)
> **Env Vars:** select (2), sql (1), crud (1)
> **Code Identifiers:** first_name (2), last_name (1)
> **CLI Commands:** make (1), find (1)
> **SQL:** select (2)
> **UI Navigation:** click on (1), select the (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)

#### Narrow down a query with WHERE
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=0)** - [Instructor] When we're asking the database for information, it's very helpful to be able to give some parameters.
>
> **[0:06](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=6)** We can use the WHERE keyword to add a condition to a SELECT statement.
>
> **[0:11](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=11)** For example, if I wanted to see all of the records only for people who live in California, I could use my SELECT * statement and then add a WHERE clause with a predicate or condition, state_code=CA.
>
> **[0:30](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=30)** In this predicate, CA is an expression.
>
> **[0:33](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=33)** In this case, the text we use here in the expression is case-sensitive which means that if the capitalization differs from what's in the database, it won't match.
>
> **[0:42](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=42)** We might look at lower-case ca and upper-case CA and think of them as the same thing, but to the database, they're completely different.
>
> **[0:50](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=50)** Whether a field is treated as case-sensitive or not is something that can be defined when constructing the table as part of the database schema.
>
> **[0:58](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=58)** I'll change capital CA here, to lower-case ca and run my query again.
>
> **[1:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=65)** No results.
>
> **[1:09](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=69)** But upper-case CA works because it matches these values in the state_code field.
>
> **[1:16](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=76)** We can try this out with a different state by changing the expression.
>
> **[1:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=80)** I'll change CA to FL and there's the participants from Florida.
>
> **[1:27](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=87)** We'll change that to WA and there's the Washingtonians.
>
> **[1:35](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=95)** And if I change it to NY, I can see everyone who participated in our quiz who lives in New York.
>
> **[1:41](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=101)** We can also use a different field.
>
> **[1:44](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=104)** Let's change the field in our predicate to ask, instead, who all in our database had asked for a shirt, as opposed to a hat when they signed up for our contest.
>
> **[1:53](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=113)** The field that contains that is called shirt_or_hat and I'll set the match condition to shirt.
>
> **[2:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=125)** Looking at the result in the shirt_or_hat column, I can see that every record that was returned is for shirt, and none are for hat.
>
> **[2:13](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=133)** I know that the values in this field are only lower-case shirt and lower-case hat.
>
> **[2:18](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=138)** If I had asked for something that didn't appear in this field in any of the records, like a mug, I'd get no results back.
>
> **[2:29](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=149)** We can start to see how this might be helpful if we want to use this data for something but we still have a lot of fields displayed in the output.
>
> **[2:37](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=157)** Let's narrow it down a little bit by using just a few fields, instead.
>
> **[2:42](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=162)** (keyboard keys tapping)
>
> **[2:51](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=171)** So here's a list of the names of people who had wanted a shirt.
>
> **[2:55](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=175)** We can verify that by adding on the shirt_or_hat field here, in the SELECT clause.
>
> **[3:03](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=183)** And all of the fields for all of the records we see here are, in fact, shirt.
>
> **[3:10](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=190)** But we know that, so we can remove that field from the query if we don't need to use it later, down the line.
>
> **[3:16](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=196)** And of course, if we ask for a value where that value doesn't exist, we'll get no results, as we would expect.
>
> **[3:25](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=205)** It's important to point out that these clauses need to be in this order to work.
>
> **[3:31](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=211)** If I switch them around, for example, putting the WHERE clause first, it still makes sense to a human: WHERE shirt_or_hat a shirt, select some values, we know what that means, but the database doesn't and it'll give us an error.
>
> **[3:45](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=225)** The same is true if we move the order around in another way that makes sense to humans.
>
> **[3:54](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=234)** That totally makes sense.
>
> **[3:56](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=236)** FROM people SELECT these fields WHERE this is true.
>
> **[3:59](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=239)** But again, this is not how the database software needs it so it's not valid SQL, so it fails.
>
> **[4:07](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=247)** Remembering the ordering of clauses can be tricky and it's worth practicing.
>
> **[4:11](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=251)** This is one place where adding white space as I'm doing here, can really help to solve problems with syntax.
>
> **[4:18](https://www.linkedin.com/learning/learning-sql-programming-8382385/narrow-down-a-query-with-where?u=76281980&t=258)** When things are all on one, long line, it can be more difficult to visualize what you're asking the database to do.

> [!info]- Semantic Content
>
> **Env Vars:** where (5), select (4), sql (1)
> **SQL:** where (5), select (4)
> **Code Identifiers:** shirt_or_hat (4), state_code (2)
> **Code Keywords:** let (2), case, (1), match. (1), switch (1)
> **Definitions:** is an  (1), means that (1), is called (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Adding more criteria to a statement
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=0)** - [Instructor] When we're asking for a set of fields from a database, we can pretty easily find values that match a term exactly.
>
> **[0:07](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=7)** All the people who signed up to get T-shirts or all the people in California.
>
> **[0:11](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=11)** But we can add a little bit of logic to our statements, too, in order to start to ask more interesting questions about the data.
>
> **[0:17](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=17)** For example, we could ask for the names of everyone who is in California and who asked for a shirt.
>
> **[0:24](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=24)** To do that, I would write SELECT first_name comma last_name FROM people WHERE state_code=CA AND shirt_or_hat=shirt.
>
> **[0:37](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=37)** This AND here, is a logical operator and SQL supports these logical operators as part of a predicate.
>
> **[0:44](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=44)** You can chain logical conditions together if you want to ask for records that have more conditions fulfilled.
>
> **[0:51](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=51)** I'll add a team here, as another condition and I'll add it to my SELECT statement as well, so we can see the result.
>
> **[0:59](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=59)** This will search for people in California who wanted a shirt, who signed up for the Angry Ants team.
>
> **[1:06](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=66)** We could also take this last condition here, and write != which means not equal.
>
> **[1:16](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=76)** So as I can see from browsing the data here, that shows me every matching record for people in California who wanted a shirt but who is not on the Angry Ants team.
>
> **[1:27](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=87)** We can also use the operator IS which can operate like the equals sign.
>
> **[1:33](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=93)** And here, we have the same result as using team=Angry Ants.
>
> **[1:38](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=98)** Or we can switch out IS for IS NOT and get the records that have anything except Angry Ants in the team field.
>
> **[1:47](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=107)** We can use the less-than and great-than signs right together, as a not equals operator, as well.
>
> **[1:54](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=114)** Rather than asking for many conditions that are all true, we can use the OR operator to tell the database that I want results where one of two conditions is true.
>
> **[2:03](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=123)** Let's say we wanted to see everyone who wanted a shirt but only those who are in California or Colorado.
>
> **[2:10](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=130)** I'll modify my statement here to say WHERE state_code=CA OR state_code=CO AND shirt_or_hat=shirt.
>
> **[2:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=140)** In the SELECT clause, I'll make sure to look for shirt_or_hat and the state_code, along with a first and last name.
>
> **[2:29](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=149)** I'll run this and, well, that's not what I was looking for.
>
> **[2:32](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=152)** There's all kinds of hat people in here, and I just wanted shirt people.
>
> **[2:36](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=156)** Why is that?
>
> **[2:38](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=158)** The database is interpreting each of my conditions as it goes along, so it's giving me records where the state is California or the state is Colorado, and also the records where shirt_or_hat is shirt.
>
> **[2:50](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=170)** The database is thinking about those last two conditions as being paired together, so we see every record where California is the state, including the ones where hat is in the shirt_or_hat field in addition to records where the state is Colorado and the shirt_or_hat field is shirt.
>
> **[3:11](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=191)** What we want to see is the state being either California or Colorado and within that group of records, only the ones where shirt_or_hat is shirt.
>
> **[3:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=200)** So we need to add some parentheses here, around the state selection to make it clear that we want to get back either California or Colorado and then ask within that set for records that match shirt.
>
> **[3:33](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=213)** Parentheses around conditions let us tell the database what to interpret first, similar to how we'd use parentheses in algebra to say do this part first before evaluating the rest of the problem.
>
> **[3:45](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=225)** Now I have what I expected, no hats, only shirts and only in California and Colorado.
>
> **[3:52](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=232)** If I move these parentheses over to the right a little bit, I can replicate the effect I was getting before, though now with more explicit focus on what's going on.
>
> **[4:01](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=241)** Parentheses are a really useful tool for shaping the meaning of your question for the database.
>
> **[4:06](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=246)** You can use more than one set if your query is extra complicated, too.
>
> **[4:10](https://www.linkedin.com/learning/learning-sql-programming-8382385/adding-more-criteria-to-a-statement?u=76281980&t=250)** Incorrect grouping is a very common mistake in writing statements, and it can be a tricky thing to troubleshoot.

> [!info]- Semantic Content
>
> **Code Identifiers:** shirt_or_hat (7), state_code (4), first_name (1), last_name (1)
> **Env Vars:** select (3), where (2), sql (1)
> **SQL:** select (3), where (2)
> **Code Keywords:** let (2), switch (1), for. (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), similar to (1)
> **Warnings:** common mistake (1), troubleshoot (1)

#### Broadening and limiting responses
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=0)** - [Instructor] While we usually want to be very specific when we're setting the conditions for what data we want back from the database, sometimes instead we need to be a little bit less specific about what we're asking to match, and to look for values that match some part of a field, but not all of it.
>
> **[0:15](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=15)** For that, there's the LIKE operator.
>
> **[0:17](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=17)** The LIKE operator works with a percent sign representing the part of the field we don't really care about.
>
> **[0:24](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=24)** If we wanted to say, show me all the records whose state_code starts with the letter C, we could write out a long statement with logical OR operators, with state_code="CA", OR state_code="CO", OR state_code="CT", and so on.
>
> **[0:39](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=39)** Or we could say state_code LIKE 'C%' This tells the database to match the letter C, and then whatever comes after it, we don't care about, regardless of how much information follows the letter C.
>
> **[0:54](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=54)** We just care about records whose value in this field matches the first character.
>
> **[0:59](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=59)** Or we can change that around and put N first, for example.
>
> **[1:06](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=66)** Or put the percent at the beginning, to match any state whose code ends with N, states like Indiana, Minnesota, Tennessee, and so on.
>
> **[1:18](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=78)** Or we could say, give me all the first names, that start with A.
>
> **[1:31](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=91)** Or with J.
>
> **[1:34](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=94)** And you can add a percent to each end of the string too if you want to match the text somewhere in the middle of the field.
>
> **[1:40](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=100)** This is a little bit subtle.
>
> **[1:44](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=104)** I'll scroll down to record number 594.
>
> **[1:47](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=107)** And I can see that while some of the match names are Jack, Jacquelyn, Joyce, and another Jacqueline, having a percent at each end with a J in the middle also matched the string, "Benjamin."
>
> **[1:58](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=118)** Let's switch out the condition for some other texts, and you can see how it works.
>
> **[2:02](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=122)** For example, I'll replace J with ON.
>
> **[2:07](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=127)** And here I have Bonnie, Jonathan, Donna, Sharon, Raymond, and many other people whose names contain ON.
>
> **[2:15](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=135)** Notice here that this isn't case sensitive, I'm using capital letters in my condition, but it's matching lowercase ones.
>
> **[2:22](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=142)** Columns can be defined to be case sensitive or not, and that depends both on which variety of database software you're using, and whether the column has been set to case sensitive collation or not.
>
> **[2:32](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=152)** We're not going to worry about that here though, and we'll use LIKE in a case insensitive way.
>
> **[2:38](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=158)** We can also put the percent sign in between characters, like this.
>
> **[2:42](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=162)** I'll change the condition to LIKE 'B%N' I'll run that, and now I have the names starting with B and ending with N, regardless of how long they are.
>
> **[2:55](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=175)** Let's look in the company field instead, and say, look for all of the company names that end in LLC.
>
> **[3:08](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=188)** We can also tell the database how many responses we'd like to see with the LIMIT keyword.
>
> **[3:14](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=194)** LIMIT tells the database to stop returning results after a given number of them have met our search criteria.
>
> **[3:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=200)** So if I wanted to only see the first five records in the database that matched this last query, I can do that by adding LIMIT 5.
>
> **[3:30](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=210)** And now I only have five records.
>
> **[3:34](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=214)** Or I could ask for the first 10.
>
> **[3:39](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=219)** And if I wanted to see a specific range of them, like the second set of five, these here, I can use the offset command to tell the database to skip some records before counting off my five.
>
> **[3:52](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=232)** I'll change this to LIMIT 5 OFFSET 5.
>
> **[3:57](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=237)** And here's the second set of five in the database.
>
> **[4:01](https://www.linkedin.com/learning/learning-sql-programming-8382385/broadening-and-limiting-responses?u=76281980&t=241)** The limit keyword can be useful in conjunction with some other tests where value is involved, as we'll see in the video about math, or when interacting with a very large database.

> [!info]- Semantic Content
>
> **Env Vars:** limit (4), llc (1), offset (1)
> **Code Keywords:** let (2), match, (1), switch (1), this. (1)
> **Code Identifiers:** state_code (5)
> **Analogies:** for example (2)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Organize responses with ORDER BY
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=0)** - [Instructor] When we get information back from a query, it can be in an order that isn't always helpful.
>
> **[0:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=5)** So to sort data, we can use the ORDER BY keyword.
>
> **[0:09](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=9)** Let's write a statement that will return a lot of rows.
>
> **[0:15](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=15)** We'll get the first name and last name from every record in the people table.
>
> **[0:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=20)** Looking at the result, it looks like it's all over the place in terms of sorting.
>
> **[0:25](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=25)** This is the order that the records are stored in the database, sure, but that's not how I want to see them.
>
> **[0:30](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=30)** So to change how they're sorted, I'll add an ORDER BY clause here at the end, and I need to give it a field with which to sort.
>
> **[0:39](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=39)** Let's sort by first name for now.
>
> **[0:42](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=42)** There we go.
>
> **[0:43](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=43)** These first names are sorted alphabetically.
>
> **[0:47](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=47)** These are sorted in an order called ascending which means that the lower the value, the earlier in the list it comes and the larger, the later it comes in the list.
>
> **[0:58](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=58)** As we go through the list, the values ascend higher, or in this case later in the alphabet.
>
> **[1:04](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=64)** Ascending order is the default which means that that's what I'll get if I don't tell the database to do it another way.
>
> **[1:12](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=72)** I can also specifically tell the database to sort in ascending order by adding ASC.
>
> **[1:21](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=81)** Or I can switch the order to descending with DESC.
>
> **[1:30](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=90)** Descending order puts large values first in the list and then the value descends or declines to the smallest values at the end.
>
> **[1:37](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=97)** We can add more fields to sort on after the first one as well if we want to add a secondary or tertiary sort order.
>
> **[1:44](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=104)** For example, we could sort first by state and then within state, sort by last name.
>
> **[1:50](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=110)** To do that, I'll write SELECT state_code, last_name, first_name FROM people ORDER BY state_code, last_name.
>
> **[2:09](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=129)** And here I have the data listed alphabetically by state.
>
> **[2:14](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=134)** And then within that for each state, the data are sorted by the last name in ascending alphabetical order.
>
> **[2:22](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=142)** I can change the last name sort to descending order while the state is still in the default, ascending order.
>
> **[2:32](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=152)** And here I can see that the sort order of the states is still the same but now the records are reordered in reverse alphabetical sequence by last name within the state.
>
> **[2:43](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=163)** Returning data in a particular order is a useful thing to do in reporting and when you're working with data in an application.
>
> **[2:50](https://www.linkedin.com/learning/learning-sql-programming-8382385/organize-responses-with-order-by?u=76281980&t=170)** You might, for example, want to return records about customer support cases in descending order by ticket ID or date to save the end user having to sort the data you provide themselves in order to find recent tickets.

> [!info]- Semantic Content
>
> **Env Vars:** order (3), asc (1), desc (1), select (1)
> **Code Identifiers:** state_code (2), last_name (2), first_name (1)
> **Code Keywords:** let (2), switch (1), default, (1)
> **SQL:** order by (3), select (1)
> **Definitions:** means that (2), is a  (1)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Cross-References:** earlier in (1)

#### Find information about the data
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=0)** - [Instructor] Instead of just getting back records that match our queries, we can use some other functions and commands to find out more about the data itself.
>
> **[0:08](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=8)** Let's take a look at ways of describing the data by finding out how long the values and fields are, how many distinct values a field contains, and how many values match some criteria.
>
> **[0:19](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=19)** I'll write a simple query here to get the first name of everyone in our database.
>
> **[0:25](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=25)** And let's add the first_name field here in the SELECT clause again.
>
> **[0:31](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=31)** But this time I'll wrap it in a function called LENGTH, which will tell us how long the information in the given field is in characters, rather than the value of the field itself.
>
> **[0:44](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=44)** And checking just a little bit here, I can see that this matches up with what I'd expect.
>
> **[0:48](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=48)** Janice is six characters long.
>
> **[0:50](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=50)** Wanda is five characters long.
>
> **[0:52](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=52)** Jack and Ryan are both four characters long, and so on.
>
> **[0:56](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=56)** We can use that on some other fields too if we wanted to explore a little bit.
>
> **[1:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=60)** It can be helpful to get a listing of unique values in a field as well.
>
> **[1:04](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=64)** We have 1,000 rows in the people table, but I know there's many people with the same first or last name.
>
> **[1:10](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=70)** Let's take a look at pulling out only the unique values, or the values that are distinct from one another with the DISTINCT function.
>
> **[1:19](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=79)** This will filter the information that I get back from the database, and I'll get one result for each unique first name in the table.
>
> **[1:27](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=87)** If it finds a second instance of a name that it's already seen, it ignores it, so I'd just get one result if there's one name, and one result if there's 100 records with the same name in the field I'm asking about.
>
> **[1:38](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=98)** Notice here in the size of my result it's 198 instead of the 1,000 records I know exist in this table.
>
> **[1:45](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=105)** That's because some of my participants have the same first name.
>
> **[1:49](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=109)** So if I've counted an Aaron, and the query comes across another Aaron that Aaron and all subsequent Aarons are skipped in this result.
>
> **[1:57](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=117)** I can make that a little bit more clear here with an ORDER BY clause at the end of my statement.
>
> **[2:08](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=128)** Here, I can see only one Aaron, only one Adam, and so on, even though I know there are more than one records with each of those names in this table.
>
> **[2:17](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=137)** This is also a helpful way of seeing what all the values in a given field might be.
>
> **[2:21](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=141)** Names, of course, will vary.
>
> **[2:23](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=143)** But if we wanted to check that we really do only have shirt or hat in the field called shirt or hat, we can take a look at the distinct values there.
>
> **[2:32](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=152)** And in this case, I'll remove the ORDER BY.
>
> **[2:36](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=156)** I'll run the query, and I get back two results, shirt and hat.
>
> **[2:41](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=161)** It looks like this field is being used correctly.
>
> **[2:44](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=164)** We also use the COUNT function to see how many records match a given criteria.
>
> **[2:49](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=169)** If I wanted to count how many people are from California in our database, I could write SELECT and then use the COUNT function on a specific field, or on all fields FROM people WHERE state_code equals CA.
>
> **[3:03](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=183)** And I see that I have 127 records where the state is California.
>
> **[3:08](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=188)** Because I care how many records match this condition, I can also use the field that I'm looking for, or another field where I know there will be data.
>
> **[3:21](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=201)** But if I choose a field that doesn't have data in all of the rows, as we'll see in a little bit, I get a different number.
>
> **[3:30](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=210)** That's because while there are still 127 records that have the state code of CA, there aren't that many values where the state code is CA, and which have a value in the company field.
>
> **[3:41](https://www.linkedin.com/learning/learning-sql-programming-8382385/find-information-about-the-data?u=76281980&t=221)** We'll use the COUNT function more later on, and it'll start to become even more useful combined with some other approaches.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (3), case, (1), for, (1)
> **Env Vars:** count (3), select (2), order (2), length (1), distinct (1)
> **SQL:** select (2), order by (2), where (1)
> **CLI Commands:** find (1), make (1)
> **Code Identifiers:** first_name (1), state_code (1)
> **Speakers:** - [instructor] (1)

#### Solution: Retrieve data from the database
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-retrieve-data-from-the-database-19873799?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-retrieve-data-from-the-database-19873799?u=76281980&t=0)** - [Instructor] Here's how I solve this challenge.
>
> **[0:03](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-retrieve-data-from-the-database-19873799?u=76281980&t=3)** First, I used SELECT to create the output columns that the challenge asked for.
>
> **[0:07](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-retrieve-data-from-the-database-19873799?u=76281980&t=7)** Team, shirt_or_hat, first_name, and last_name.
>
> **[0:11](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-retrieve-data-from-the-database-19873799?u=76281980&t=11)** Those are from the people table, so that's my FROM clause.
>
> **[0:14](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-retrieve-data-from-the-database-19873799?u=76281980&t=14)** And the challenge asked for only participants from Colorado, which I used state_code = 'CO' to narrow down.
>
> **[0:21](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-retrieve-data-from-the-database-19873799?u=76281980&t=21)** The challenge also asked us to sort the data in a pretty specific way.
>
> **[0:25](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-retrieve-data-from-the-database-19873799?u=76281980&t=25)** To do that, I used an ORDER BY clause and provided three fields.
>
> **[0:29](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-retrieve-data-from-the-database-19873799?u=76281980&t=29)** First is team, which will sort the people alphabetically by the team field.
>
> **[0:34](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-retrieve-data-from-the-database-19873799?u=76281980&t=34)** Next is shirt_or_hat, and this will have the effect of sorting people first with hat, and then with shirt, within each team.
>
> **[0:40](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-retrieve-data-from-the-database-19873799?u=76281980&t=40)** Finally, I wrote last_name DESC to sort the people of each hat or shirt group for each team in reverse alphabetical order as the challenge requested.
>
> **[0:49](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-retrieve-data-from-the-database-19873799?u=76281980&t=49)** So, let's test my solution here.
>
> **[0:54](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-retrieve-data-from-the-database-19873799?u=76281980&t=54)** There we go. It's correct.
>
> **[0:56](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-retrieve-data-from-the-database-19873799?u=76281980&t=56)** And here, we can see the effects of these various ORDER BY conditions.
>
> **[0:59](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-retrieve-data-from-the-database-19873799?u=76281980&t=59)** If you got the same output, congratulations.
>
> **[1:02](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-retrieve-data-from-the-database-19873799?u=76281980&t=62)** If not, spend some time revisiting your solution and try again.

> [!info]- Semantic Content
>
> **Code Identifiers:** shirt_or_hat (2), last_name (2), first_name (1), state_code (1)
> **Env Vars:** order (2), select (1), desc (1)
> **Code Keywords:** for. (1), finally, (1), let (1)
> **SQL:** order by (2), select (1)
> **Speakers:** - [instructor] (1)


### 2. Ask for Data from Two or More Tables

#### Ask for data across two or more tables
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=0)** - [Instructor] One advantage of working with databases is that we can use data for more than one table to answer a query.
>
> **[0:06](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=6)** Of course, you can work with data across many spreadsheets using a lookup function, and in a database, to accomplish the same thing, we use the join keyword.
>
> **[0:15](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=15)** There are a few kinds of joins, a few different ways of using join to attach data together.
>
> **[0:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=20)** But we'll just look at one in this video, the inner join, which is often just called a join.
>
> **[0:26](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=26)** The idea behind a join is that we're asking for pieces of data or records that somehow associate with each other, that connect or correlate in some way by way of some common piece of information that we tell the database to match up from one table to the next.
>
> **[0:41](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=41)** For example, this diagram shows how we might join the people and states tables using the state code and the state abbreviation as that common piece of information.
>
> **[0:50](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=50)** In one table, I have information about some people, and in another table, called states, I have information about states in the US.
>
> **[0:58](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=58)** Running this query here would result in this response, showing records from both tables snapped together based on that connection I made between the state code on the people table and the state abbreviation from the states table.
>
> **[1:10](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=70)** Don't worry too much about the SQL statement here, though.
>
> **[1:12](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=72)** We'll build up to this in just a moment.
>
> **[1:15](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=75)** We could perhaps use this information to print out regionally-customized t-shirts for people who participated in our contest, with mountains on the shirt for people in the mountain division, and maybe a nice lighthouse logo for the New Englanders.
>
> **[1:27](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=87)** Of course, what you do with your data will be different, but everybody likes a free t-shirt.
>
> **[1:32](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=92)** Let's take a quick look at the states table so we know what we're working with.
>
> **[1:36](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=96)** Here's the state abbreviation, the full name of the state, and the census region and division.
>
> **[1:43](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=103)** I have 50 records here, one for each of the 50 states.
>
> **[1:49](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=109)** To start out with, let's get a list of first names from the people table and the abbreviation of the state that they're from.
>
> **[1:56](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=116)** To do that, I'll write select first name, comma, state code from people.
>
> **[2:01](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=121)** And then we'll connect that to the states table and associate the census division to each record as well.
>
> **[2:07](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=127)** To do that, I'll use the join keyword.
>
> **[2:09](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=129)** I'll make a new clause here so we can see it better.
>
> **[2:12](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=132)** After the from clause, I'll write join states.
>
> **[2:16](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=136)** That tells the database that we're going to be associating the states table in the statement.
>
> **[2:21](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=141)** And if I run this, it'll work.
>
> **[2:22](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=142)** Or more specifically, it won't cause an error, but it returns us 50,000 records, because we haven't been specific enough.
>
> **[2:30](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=150)** So we'll get back a copy of all the records in the states table for each record in the people table.
>
> **[2:35](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=155)** Not too helpful.
>
> **[2:38](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=158)** To be more specific we need to tell the database what pieces of information we want to associate from one table to the next.
>
> **[2:46](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=166)** To do that, here in the join clause, I'll add ON people.state_code equals states.state_ abbreviation.
>
> **[2:56](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=176)** This dot notation with the table, a period or dot, and the field name from that table lets us avoid confusion by telling the database which table to use to find each field.
>
> **[3:09](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=189)** Nothing in this database has the same field name across different tables.
>
> **[3:12](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=192)** But if it did, I would definitely need to be specific, or I'd get an error.
>
> **[3:17](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=197)** So it's a good practice to just use this notation all the time.
>
> **[3:21](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=201)** I could say state code equals state abbreviation, and that would work here, but I'll stick with using table names.
>
> **[3:27](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=207)** This statement now says whenever you return a record from the people table, for the associated record in the states table, use the state value in the people table and match it to the state abbreviation value in the states table.
>
> **[3:38](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=218)** These two values need to be identical.
>
> **[3:40](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=220)** Otherwise, the database won't be able to match them.
>
> **[3:43](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=223)** Okay, we have a way of looking up values, so let's add one of the values from the states table to our results, so we can see that it's working the way we expect.
>
> **[3:52](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=232)** Here in the select clause, I'll add states.division, and to keep with best practices, I'll add the people table name to the front of the other fields.
>
> **[4:03](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=243)** Again, in this case, it would work without them, but it's a good idea to be thorough and specific.
>
> **[4:09](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=249)** Then I'll run the query, and there we go.
>
> **[4:12](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=252)** We have two columns from the people table and then one from the states table.
>
> **[4:17](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=257)** If we wanted to have some fun, we could use the star operator in the select clause instead of individual fields.
>
> **[4:25](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=265)** This returns all of the fields on both tables.
>
> **[4:29](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=269)** Here's the fields from my people table, and over here on the right are the four fields from the states table You may recognize that this is the statement for my diagram earlier in the video.
>
> **[4:41](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=281)** Because this is one data set that gets returned, we can treat it like it's all one table, too, and make queries based on any of the columns here.
>
> **[4:49](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=289)** So I could look for people whose names start with J and who are in the South.
>
> **[4:58](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=298)** It looks like 65 records match that search.
>
> **[5:01](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=301)** Here we can see the power of using data that we have to gain insights.
>
> **[5:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=305)** We could accomplish a similar goal if we knew which states were in the South and wrote a long where clause listing each one, but we already have information about which states are in the South, and we can let the database do the work for us.
>
> **[5:18](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=318)** You can also join across more than two tables, but that's not something we're going to do here.
>
> **[5:22](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=322)** It works the same way, though, and you just add another join clause before your where clause.
>
> **[5:28](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=328)** We can also ask for data across tables without using the join keyword and just using the dot notation for the table names and the fields on them.
>
> **[5:48](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=348)** Well, that works just the same as writing join explicitly.
>
> **[5:51](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=351)** In fact, this is called an implicit joint, when we don't write it.
>
> **[5:55](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=355)** It's usually best to use the explicit join syntax, just to keep things clear.
>
> **[5:59](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=359)** It's also possible to end up with unintended consequences, like a cross join, when using an implicit join, so be sure to use explicit join syntax to avoid that.
>
> **[6:09](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=369)** And if the tables have long names, we can give a nickname to the tables as well, to make it easier to use fields across both tables without typing the table name every time.
>
> **[6:19](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=379)** Here, PPL is an alias for the people table, and ST is an alias for the states table.
>
> **[6:32](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=392)** And these can be more descriptive if you'd like, but the reason we'd use these as to reduce verbosity.
>
> **[6:36](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=396)** so you may want to stick with something short.
>
> **[6:39](https://www.linkedin.com/learning/learning-sql-programming-8382385/ask-for-data-across-two-or-more-tables?u=76281980&t=399)** Joins enable us to work with data in more than one table, and that's often a very important part of working with data, whether you're an analyst, a developer, a data scientist, or pretty much anything else.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (1), from. (1), this, (1), case, (1)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is an  (2), is called (1)
> **Env Vars:** sql (1), ppl (1)
> **Code Identifiers:** state_code (1)
> **Cross-References:** earlier in (1)
> **Analogies:** for example (1)
> **Best Practices:** good practice (1)

#### Understand JOIN types
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=0)** - [Instructor] When we use a join to associate data across tables, there are a few ways we can go about it.
>
> **[0:06](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=6)** Let's think about our two tables as being on the left and the right in some kind of imaginary workspace.
>
> **[0:12](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=12)** Left and right in this sense are the table named first in the select statement on the left and the table we're joining to on the right.
>
> **[0:19](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=19)** If we just leave a statement without any kind of qualifying parameters, we get a resulting table that's the size of the left table times the right table.
>
> **[0:27](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=27)** We get back one of every row from the right table for every row of the left table.
>
> **[0:32](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=32)** Notice how here in the result there's three results for Marcus and California, one associated with each of the entries from the states, and then when that's finished, there's three entries for Jennifer and Virginia, and so on.
>
> **[0:45](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=45)** This was called a cross join, and we won't use it too much.
>
> **[0:49](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=49)** When we ask to join tables based on some given criteria, that creates overlap between the tables where the criteria match.
>
> **[0:57](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=57)** The state abbreviation, CA, for example, on one table would be equated to CA in the other table, thereby joining those records together and associating data from the left table to data the right table.
>
> **[1:09](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=69)** It's not a one-to-one relationship necessarily.
>
> **[1:12](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=72)** We could have one key on the right side match that same key in more than one row on the left, but we might also have a condition where the records on the right or the left don't have a corresponding key to the other side.
>
> **[1:24](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=84)** That's why we have other types of joins to account for situations like that.
>
> **[1:28](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=88)** This basic join where we're asking for results from both tables where the state code field from the people table is set to match up with the abbreviation field and the states table is actually what's called an inner join.
>
> **[1:40](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=100)** Inner and outer refer to the space where the records match or overlap.
>
> **[1:45](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=105)** Here, CA and VA match up, but DE and MA don't match up.
>
> **[1:51](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=111)** CA and VA would be considered inner because they're in the overlap space, and DE and MA would be considered outer.
>
> **[1:59](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=119)** The inner join asks for the records that overlap, so that's what we see in the result over here.
>
> **[2:04](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=124)** If we wanted to see all of the data from one table or another and then just get the matches from the other table where there's a match happening, we can use this outer concept to make that happen.
>
> **[2:15](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=135)** To get back a result for every row in the left table, I'd use left join, which was also referred to as left outer join.
>
> **[2:23](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=143)** And here in the result, there's a row for every row in the left table, the people table, and wherever there's a match for the right table, I have that information too, but if there's no match for the state abbreviation, for example, here with MA, I get back null values because there's no information about the key in the right table.
>
> **[2:41](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=161)** So my result is the same length as the left hand table with the left join.
>
> **[2:46](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=166)** If I wanted to make sure that I saw all the values in the right table instead, I could use right join.
>
> **[2:52](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=172)** And in this case, I can see all the record values from the right table, some of which match the values in the left hand table.
>
> **[2:57](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=177)** And if there isn't a match, I just see the values from the right table with null in the fields for the left hand table where there's no data.
>
> **[3:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=185)** Delaware here appears in the right table but doesn't have a corresponding row in the left table, and Devin from Massachusetts doesn't appear because Massachusetts isn't in the rightmost table and there's no match on MA.
>
> **[3:18](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=198)** And we can ask for a row representing each record in both tables using a full outer join.
>
> **[3:24](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=204)** This gives us the matches and also unmatched records from both the left and right tables.
>
> **[3:30](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=210)** There are more complex kinds of joins that you may come across as you extend your skills with SQL, but these are the basics.
>
> **[3:36](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=216)** You should also be aware that not all software supports all of the kinds of joins that are available in SQL.
>
> **[3:42](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=222)** For example, my SQL doesn't support full outer join, and SQLite doesn't support right join or full outer join.
>
> **[3:50](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=230)** We can practice with some of these joins here in the database software.
>
> **[3:54](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=234)** Let's join up our quiz participants' names and state abbreviations with the full state name from the states table.
>
> **[4:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=240)** This is pretty similar to what we saw in the last video.
>
> **[4:18](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=258)** There we go.
>
> **[4:19](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=259)** We can switch up the order that we're joining the tables too, and we'll see that we get a different order of records.
>
> **[4:24](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=264)** I'll switch the states and people tables here around the join keyword.
>
> **[4:33](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=273)** Before I run this query, notice that Janice Howell is record number one.
>
> **[4:38](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=278)** I'll run the query, and there we go.
>
> **[4:41](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=281)** Notice that the association didn't have to change though because it's using the dot notation for clarity and because equality works both ways.
>
> **[4:49](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=289)** It can be a good idea though, for clarity, to keep the instances where you refer to fields on different tables in the same order in which you're joining them, but it's not necessary.
>
> **[4:59](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=299)** Now that the states table is on the left and the people table is on the right, let's switch this to a left join so we get all of the records from the states table instead of just the ones that match.
>
> **[5:10](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=310)** I'll run this, and I notice that I have 1003 rows instead of the 1000 we had before.
>
> **[5:17](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=317)** Scrolling down to the bottom of the result, I can start to see why that is.
>
> **[5:22](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=322)** There's at least one record here in the states table that doesn't correspond to something in the people table.
>
> **[5:27](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=327)** I don't seem to have any quiz participants from Wyoming, and given that I have 1003 records, I'm willing to bet there are two other states that don't match up with people in our people table.
>
> **[5:38](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=338)** Let's write a query to match up the state abbreviations and the people table with those in the states table so we can see what else is missing.
>
> **[5:45](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=345)** I don't need all these rows, so I'll use the distinct function to throw out duplicates and reduce the size of our result.
>
> **[5:55](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=355)** I'll change the select clause to read select, distinct, people.state code comma states.state abbreviation, and we'll run that.
>
> **[6:07](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=367)** And to make the difference more clear, I'll add order by people.state code.
>
> **[6:16](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=376)** Now, here at the top, I can see that there's three values from the states table that don't match the people table.
>
> **[6:23](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=383)** None of our quiz participants live in Maine, Rhode Island, or Wyoming.
>
> **[6:27](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=387)** Interesting.
>
> **[6:28](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=388)** Joins can be confusing, but they're also extremely helpful for making use of the power of databases to represent and retrieve data.
>
> **[6:35](https://www.linkedin.com/learning/learning-sql-programming-8382385/understand-join-types?u=76281980&t=395)** It can be helpful to draw out diagrams to support your thinking about joins as well.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), switch (3), match. (2), case, (1), match, (1)
> **Analogies:** for example (3), similar to (1)
> **CLI Commands:** make (3)
> **Env Vars:** sql (3)
> **Cross-References:** in the last (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Grouping results
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=0)** - [Instructor] When we need to divide results in various ways, we can use the GROUP BY keyword to change the way that a query works.
>
> **[0:07](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=7)** Let's say we wanted to count up how many of each first name we have in our database.
>
> **[0:13](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=13)** I'll write SELECT first_name, COUNT (first_name) FROM people.
>
> **[0:17](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=17)** That should work, right?
>
> **[0:19](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=19)** Hmm. That's a lot of Jameses.
>
> **[0:21](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=21)** Why isn't this working like I expect?
>
> **[0:24](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=24)** That's because when we ask the database to give us a count of the items in the first name field, we get one result, the number 1,000, and then that informs the size of the response, so we just get the first name value from the last record in the set.
>
> **[0:37](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=37)** But if we add a clause to the end using the GROUP BY keyword, we can tell the database to run our SELECT clause against each individual grouping by the field that we specify.
>
> **[0:47](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=47)** So I'll add that on the end here.
>
> **[0:50](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=50)** At the end of the query, I'll write GROUP BY first_name, and then I'll run the query again.
>
> **[0:56](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=56)** And that looks like what we want.
>
> **[0:59](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=59)** This is a count of how many times each first name appears in the table.
>
> **[1:03](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=63)** We can change this GROUP BY field to a different field.
>
> **[1:06](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=66)** Instead of first_name, I'll use last_name, and I'll run the query.
>
> **[1:11](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=71)** The only problem is that this is garbage information, because while we're grouping by last name and counting the occurrences of each, we're still returning the first name, which will be the initial first name in each of the groups of last names, which isn't at all useful.
>
> **[1:24](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=84)** So I'll switch the other fields to last_name too, run the query, and now the result shows us useful information again.
>
> **[1:35](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=95)** Let's change this to count up how many of our quiz participants come from each state in the US.
>
> **[1:41](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=101)** I'll change my query to read SELECT state_code, COUNT (state-code) FROM people, GROUP BY state-code.
>
> **[1:50](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=110)** Here's the result, and it looks like I have the most participants from California and Texas, which seems pretty reasonable.
>
> **[1:59](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=119)** When we group responses, we need to be careful that what we're asking for makes sense.
>
> **[2:04](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=124)** The database will give us a response in a lot of cases, but it doesn't know if the response makes any sense to a person.
>
> **[2:11](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=131)** Let's ask how many people from each state got which score.
>
> **[2:15](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=135)** I'll write SELECT state_code, quiz_points, COUNT (quiz_points), FROM people, GROUP BY (quiz_points).
>
> **[2:24](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=144)** The statement looks like it makes sense.
>
> **[2:26](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=146)** We want to see the state and how many people got each score in each state.
>
> **[2:30](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=150)** Select the state, count the quiz points, group by quiz points.
>
> **[2:34](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=154)** The database will run this without a problem, and it gives us this result.
>
> **[2:38](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=158)** Great, but there's just one problem.
>
> **[2:41](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=161)** Once again, this data is garbage.
>
> **[2:43](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=163)** I wanted to see how many people in each state got in which score, and I can already tell by looking at the data that's not what I have here.
>
> **[2:50](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=170)** For one thing, I only have 36 rows.
>
> **[2:53](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=173)** I know my data is missing a few states, but it's not missing that many, something's wrong.
>
> **[2:58](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=178)** In order to make this grouping make sense, we need to add another criteria to group the results by.
>
> **[3:03](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=183)** We need to group the results by state, and then we need to group by quiz points.
>
> **[3:07](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=187)** So the COUNT keyword counts scores of each quiz value within each state.
>
> **[3:12](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=192)** Here in the GROUP BY clause, I'll add state_code in front of quiz_points, and again, I'll run the query.
>
> **[3:21](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=201)** There we go, that's what we actually wanted to see.
>
> **[3:24](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=204)** And if you go do the manual work of checking these results yourself, you'll see we've solved the problem.
>
> **[3:30](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=210)** So be cautious about how you group your results.
>
> **[3:33](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=213)** If you're not, you'll get a response that's basically meaningless.
>
> **[3:36](https://www.linkedin.com/learning/learning-sql-programming-8382385/grouping-results?u=76281980&t=216)** The database will dutifully report back what you asked for, so be sure to word your questions carefully.

> [!info]- Semantic Content
>
> **Env Vars:** group (7), select (4), count (4)
> **Code Identifiers:** first_name (4), quiz_points (4), state_code (3), last_name (2)
> **SQL:** group by (7), select (4)
> **Code Keywords:** let (3), switch (1), for, (1)
> **CLI Commands:** make (2)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)

#### Solution: Practice with JOINs
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-practice-with-joins-19873791?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-practice-with-joins-19873791?u=76281980&t=0)** - [Instructor] To solve this challenge, we need to use information from both of the tables in our database.
>
> **[0:06](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-practice-with-joins-19873791?u=76281980&t=6)** So here in the middle of the query, I'm using a join statement.
>
> **[0:09](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-practice-with-joins-19873791?u=76281980&t=9)** And then with on, I'm saying that the state_abbreviation field on the states table corresponds with the state_code field on the people table.
>
> **[0:16](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-practice-with-joins-19873791?u=76281980&t=16)** So that's how we'll connect the tables and use them both at the same time.
>
> **[0:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-practice-with-joins-19873791?u=76281980&t=20)** In the SELECT statement, I'm using the region field from the states table because the challenge asked us for the region, and I'm using the team field from the people table because we also need to consider the teams when we're counting up the number of people on each team in each region.
>
> **[0:34](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-practice-with-joins-19873791?u=76281980&t=34)** The last value here is a count of members of the team on the people table.
>
> **[0:38](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-practice-with-joins-19873791?u=76281980&t=38)** These are the fields we want, but we need to add a GROUP BY clause to actually have them be used the way that the challenge requires.
>
> **[0:45](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-practice-with-joins-19873791?u=76281980&t=45)** In the GROUP BY clause, I'll use the region field from the states table, so we'll get our fields condensed into regions, and I'll also use the team field from the people table to break out the regions by team.
>
> **[0:55](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-practice-with-joins-19873791?u=76281980&t=55)** This way, the count of participants from each team in each region will make sense, and that's what the challenge asked for.
>
> **[1:02](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-practice-with-joins-19873791?u=76281980&t=62)** Let's run this and see if it solves the challenge.
>
> **[1:08](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-practice-with-joins-19873791?u=76281980&t=68)** Looks like it does, and here's the result.
>
> **[1:10](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-practice-with-joins-19873791?u=76281980&t=70)** If you got the same result, congratulations.
>
> **[1:12](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-practice-with-joins-19873791?u=76281980&t=72)** And if not, spend some time coming up with another solution and try again.

> [!info]- Semantic Content
>
> **SQL:** group by (2), select (1)
> **Env Vars:** group (2), select (1)
> **Code Keywords:** for. (1), let (1)
> **Code Identifiers:** state_abbreviation (1), state_code (1)
> **CLI Commands:** make (1)
> **Cross-References:** coming up (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Data Types, Math, and Helpful Features

#### Data types in SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=0)** - [Instructor] Fields in a database represent specific kinds of data, like a name, a date, an ID number, or an amount of points in a competition.
>
> **[0:08](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=8)** Depending on how we use these fields, we may not really care what kind of information they represent.
>
> **[0:13](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=13)** But most databases require us to define what kind of data a particular field will hold when we build a table.
>
> **[0:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=20)** Different kinds of data are stored in different ways, and that's something the database software mostly takes care of.
>
> **[0:25](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=25)** But these different kinds of information storage, these data types offer us certain abilities when writing SQL statements.
>
> **[0:32](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=32)** For example, it doesn't make sense to ask the database to add up the value of all the names in a table.
>
> **[0:38](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=38)** But it might make sense to add up all the points won in a game.
>
> **[0:42](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=42)** Generally speaking, SQL has a few categories of data types you should be aware of, those dealing with binary information, with dates and times, with numbers, and with text.
>
> **[0:52](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=52)** Within each of those general categories, there are specific types with specific purposes.
>
> **[0:56](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=56)** And, as you learn more about using SQL in your field and in your software of choice, you'll get a better understanding of which types are helpful for you and which ones are supported in your database.
>
> **[1:07](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=67)** Not all of them are supported in every implementation of SQL.
>
> **[1:10](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=70)** So be sure to check the documentation for the tools you're using.
>
> **[1:15](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=75)** The data type indicates what a field is optimized to store and what operations are possible on it.
>
> **[1:21](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=81)** The binary fields are optimized to store ones and zeros, representing whatever data that might be, in either a fixed, variable, or long way.
>
> **[1:30](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=90)** Binary fields are often used to store specific binary sequences, 10010, that kind of thing, which is often used for bitmasks or sequences that represent a coded series of information.
>
> **[1:42](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=102)** And much longer binary fields are used to store files, things like images or zip files, or any other kind of data that isn't going to be treated as plain text or another kind of special data, like numbers or dates and times.
>
> **[1:55](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=115)** The date and time types indicate that the data in a field should be treated as a time value, and that's reflected in the way they're stored, compared, and used.
>
> **[2:03](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=123)** The number types represent different kinds of numeric values, including integers of different lengths, floating points of various lengths and precisions, and so on.
>
> **[2:12](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=132)** To store a quiz score like eight or 10, we'd probably use an integer type, because we aren't concerned about decimals points there.
>
> **[2:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=140)** Though, to store other numbers like 7.5 or 3.14159, we'd use different types, decimal or floating point, depending on what data types the database software we're using offers.
>
> **[2:32](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=152)** The text types represent different lengths of characters treated as text, rather than as numbers or binary data.
>
> **[2:39](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=159)** So, to store a person's name, we would use a text type with a variable length, usually varchar or varchar, depending on how you'd like to pronounce it.
>
> **[2:48](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=168)** That stands for variable character length up to a given limit.
>
> **[2:51](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=171)** As compared with char or char, which is a fixed length of characters.
>
> **[2:56](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=176)** If we had a varchar field for a name, and someone was called Abigail, that would take up seven characters.
>
> **[3:02](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=182)** If we used a char field for a name with a length of 50, Abigail would take up 50 characters, because the database would store empty spaces for the other 43 characters in the field.
>
> **[3:12](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=192)** Using varchars is often more flexible and space-efficient, but it can be slower to use under heavy load.
>
> **[3:18](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=198)** But those kinds of details aren't really the point here.
>
> **[3:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=200)** You'll get into things like that as you extend your learning into programming or analysis.
>
> **[3:25](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=205)** We could represent true or false as binary, but there's a special type available called Boolean that's usually a better choice.
>
> **[3:32](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=212)** And there's a special value that I want to mention here too, and it's called null.
>
> **[3:36](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=216)** Null is a value that represents nothing in a particular field.
>
> **[3:40](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=220)** It's a value different than zero and different than no or false in Boolean.
>
> **[3:45](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=225)** It means we don't have a value for something.
>
> **[3:48](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=228)** And so, it's treated differently than other values.
>
> **[3:50](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=230)** Because of this, I'll be sure to point out where null is used and how it's treated differently throughout the course.
>
> **[3:56](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=236)** But, for now, just remember, null is not zero and null is not no.
>
> **[4:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=240)** This value can appear in any field designated for any data type, and we can also define a database in such a way that it will reject entries where there's a null value.
>
> **[4:10](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=250)** Data types come into play mostly when we're creating a table, so we can tell the system how to treat data that's going to be added.
>
> **[4:16](https://www.linkedin.com/learning/learning-sql-programming-8382385/data-types-in-sql?u=76281980&t=256)** But, as I mentioned earlier, it's also important to know how data is stored when you go to use it.

> [!info]- Semantic Content
>
> **Code Keywords:** type, (2), require (1), this, (1)
> **Env Vars:** sql (4)
> **Definitions:** is a  (2), stands for (1)
> **CLI Commands:** make (2)
> **Versions:** 7.5 (1), 3.14159 (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)

#### Math in SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=0)** - [Narrator] SQL supports various ways of doing math, and using mathematical functions on values and records.
>
> **[0:06](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=6)** The most basic way of doing math and SQL is with a select statement and a mathematical expression.
>
> **[0:12](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=12)** SQL supports the standard arithmetic operations, addition, subtraction, multiplication, and division, and also modulo.
>
> **[0:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=20)** Mathematical operations are assumed to involve integers, and thus one or more of the terms is expressed in floating point.
>
> **[0:27](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=27)** So you may get unexpected results if you don't pay attention to that.
>
> **[0:31](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=31)** We can also use logical comparison operators like greater than, less than, greater than, or equal, less than or equal, equal and not equal to ask the database to give us results which match or fulfill those conditions.
>
> **[0:44](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=44)** Like we might, if we wanted to see records with a quiz score greater than 70 points or where the state was not New York.
>
> **[0:52](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=52)** We've used the equals operator already, but we can use these other competitors as well.
>
> **[0:56](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=56)** Database management systems also provide mathematical functions that we can use, and to see which ones your software supports, take a look at its documentation.
>
> **[1:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=65)** Let's take a quick look at doing some addition with integers.
>
> **[1:08](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=68)** I'll right select four plus two, and run that query.
>
> **[1:12](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=72)** And here in the result, I see the answer, six.
>
> **[1:16](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=76)** Let's do some division.
>
> **[1:18](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=78)** I'll divide one by three.
>
> **[1:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=80)** I'll run that, and the result that I get is zero.
>
> **[1:24](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=84)** One divided by three in the integer space is zero, but one divided by 3.0, making it a floating point value, comes back as the value we would expect, 0.333 and so on.
>
> **[1:37](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=97)** The precision of the result is still limited though, so if you need high precision calculations, like you'd have with certain financial or scientific operations, it's a good idea to let another language like your application code, handle the math to ensure you're not losing precision.
>
> **[1:51](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=111)** We can also use comparison operators and ask logical questions, and there are functions available to find the minimum, maximum, sum, and other aspects of numeric fields.
>
> **[2:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=120)** For example, we can ask if three is greater than two.
>
> **[2:06](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=126)** The result here is one, a logical expression for true.
>
> **[2:12](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=132)** Is two greater than three, we might ask.
>
> **[2:15](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=135)** And the result comes back zero, false.
>
> **[2:19](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=139)** Is three equal to three?
>
> **[2:21](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=141)** That's true.
>
> **[2:23](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=143)** Is five not equal to three?
>
> **[2:28](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=148)** That's also true.
>
> **[2:30](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=150)** We can use these operators to help us return information from the database as well.
>
> **[2:35](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=155)** I'll ask for a first name and a quiz score from our people table.
>
> **[2:38](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=158)** And I'll ask for the records which have a quiz score of more than 70.
>
> **[2:44](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=164)** That's a lot, that's most of our participants, and they mostly did pretty well.
>
> **[2:48](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=168)** If we wanted to include the people whose score is exactly 70, we could change the query to greater than or equal to.
>
> **[2:56](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=176)** I'll combine this with an order by clause so we can see those more easily.
>
> **[3:03](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=183)** It looks like Kevin, the Betty's and Kelly would have been left out of the previous query where we were only asking for scores greater than 70.
>
> **[3:12](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=192)** Let's flip the comparison around and see who got 70 or less.
>
> **[3:16](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=196)** I'll change this to less than or equal to 70.
>
> **[3:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=200)** I'll run it, and there's not too many.
>
> **[3:22](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=202)** That's good.
>
> **[3:22](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=202)** If we wanted to find out what the maximum and minimum scores on the quiz were, we could use the max and min functions, two aggregate functions which return the greatest and smallest value in whatever field they're given.
>
> **[3:34](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=214)** All right, select max quiz points, min quiz points from people.
>
> **[3:40](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=220)** And I can see that the maximum score on the quiz was 100 and the minimum was 63.
>
> **[3:45](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=225)** If we wanted to figure out the total number of points earned in our quiz, we could also use the sum function.
>
> **[3:56](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=236)** That's a lot of points.
>
> **[3:57](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=237)** Let's take a little bit of time and combine some of what we know so far.
>
> **[4:01](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=241)** It's nice to have all of this information, but it's even better to get some kind of insights from it.
>
> **[4:06](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=246)** Let's build a little report that shows the breakdown of how many people are on each team, the total points earned by each team, and the team's average score.
>
> **[4:14](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=254)** Because we're breaking down the data by team, we know that we want to use a group by clause on the team field.
>
> **[4:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=260)** So I'll start kind of backwards with that.
>
> **[4:24](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=264)** And then to get the team name, we can add team here in the select clause.
>
> **[4:30](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=270)** And adding in our other fields, let's start with a count function, with a star because we just need the number of rows.
>
> **[4:38](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=278)** And because this is working with a group by clause, this count will apply to each team, not to the whole table.
>
> **[4:44](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=284)** If we took off the group by clause, we'd get back just one row because count returns one value for the whole set.
>
> **[4:50](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=290)** And then let's add in the total points that each team got with some quiz points.
>
> **[4:54](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=294)** And now for the average, we want the average, which is the sum of the items divided by the number of items.
>
> **[5:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=300)** And we'll use parentheses to group the expression together.
>
> **[5:04](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=304)** I'll get the sum of the points and divide that by the count of number of records, like we have in the previous columns.
>
> **[5:10](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=310)** Let's run this.
>
> **[5:13](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=313)** While these results are close to correct, we're experiencing the result of something I mentioned earlier.
>
> **[5:18](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=318)** These averages are perfectly round.
>
> **[5:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=320)** That seems a little suspicious.
>
> **[5:22](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=322)** Remember, these math operations that we can do, in this case division, are integer operations if they're being performed on the integer values.
>
> **[5:29](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=329)** And in that case, they don't give us precisely the result we need here.
>
> **[5:33](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=333)** In most cases, we don't want to construct calculations ourselves when there's something that can handle the math for us.
>
> **[5:39](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=339)** So instead of making an average ourselves, we can use another aggregate function, AVG, which gives us the average to a higher precision.
>
> **[5:47](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=347)** And without having to remember the formula for calculating an average or a dealing with precision.
>
> **[5:53](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=353)** I'll change the last term in my select clause to AVG quiz points.
>
> **[6:01](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=361)** There, that's better.
>
> **[6:02](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=362)** In this case, it doesn't actually change who won, but you can see how that difference could be problematic when it comes to scientific, financial, or other values.
>
> **[6:11](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=371)** But for now, I can see that we have a clear winner of our quiz competition, both in points and average score.
>
> **[6:17](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=377)** Good for the cosmic cobras.
>
> **[6:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=380)** It's a best practice to use dedicated functions when they're available.
>
> **[6:23](https://www.linkedin.com/learning/learning-sql-programming-8382385/math-in-sql?u=76281980&t=383)** And depending on the flavor of SQL you're using, and what database software you have, you can look up what functions are available for them in your documentation.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (3), case, (2), this. (1)
> **Env Vars:** sql (4), avg (2)
> **CLI Commands:** find (2)
> **Versions:** 3.0 (1), 0.333 (1)
> **Analogies:** for example (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [narrator] (1)

#### Compound Select
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=0)** - [Instructor] Sometimes we need to use more than one select statement to get the information we want.
>
> **[0:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=5)** It's often the case that we want to set up a query that relies on the result of another query.
>
> **[0:10](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=10)** Using a secondary select statement inside of another query is called a sub-query or sub-select, and it helps us to narrow down or zero in on a specific set of data to use in that larger query.
>
> **[0:21](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=21)** Let's get a listing of all the people in our database who achieved the highest score on our quiz.
>
> **[0:29](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=29)** It might occur to us to write select first_name, last_name, quiz_points, from people where quiz_points equals max quiz_points.
>
> **[0:38](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=38)** But when I run that, I have an error.
>
> **[0:41](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=41)** Misuse of aggregate function max.
>
> **[0:44](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=44)** This max function, like the other aggregate functions, min, average, and so on, won't work this way as part of a where condition.
>
> **[0:52](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=52)** So instead of just max here, I'll wrap it inside a select statement inside of parentheses.
>
> **[0:59](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=59)** So my where condition becomes where quiz_points equals select max quiz_points from people.
>
> **[1:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=65)** That inner select statement, the sub-select or sub-query, will give us back one value, the highest number in the quiz points column, and then in our outer select statement, we'll have one value to look for in the where clause.
>
> **[1:21](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=81)** There we go.
>
> **[1:22](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=82)** That's the people who got the highest score on the quiz.
>
> **[1:25](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=85)** Of course, we could also write this statement to just look for people where the quiz points equal 100, which from working with the data I know is the case.
>
> **[1:34](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=94)** But using a secondary select statement lets us not have to know about what specific values are in the data.
>
> **[1:40](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=100)** That makes the statement portable, maybe for another quiz that goes up to 200 points instead of just 100.
>
> **[1:46](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=106)** We wouldn't want to have the wrong explicit value in there and assume that 100 will always be correct, or it may be the case that there's a 100 point quiz where nobody gets the maximum points because it's really tricky.
>
> **[1:58](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=118)** Using a sub-select like this will always get the list of people who scored the highest, regardless of what that score is.
>
> **[2:04](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=124)** We can also use a sub-query to use information from one table to inform a search on another one.
>
> **[2:10](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=130)** Let's say you want to find all of the participants for Minnesota, but you can never remember what the state abbreviation for Minnesota is.
>
> **[2:17](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=137)** Is it M-I, M-A, M-N?
>
> **[2:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=140)** There's so many that are so similar.
>
> **[2:22](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=142)** Instead of specifying a state abbreviation, let's look up the name of Minnesota in the States table, get its abbreviation, and then use that value to look up people from Minnesota.
>
> **[2:36](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=156)** There we go.
>
> **[2:37](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=157)** The state code is M-N and here's all the results which match what I was looking for.
>
> **[2:41](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=161)** And just so I'm not picking on Minnesota, let's change the query to look up Kansas instead, and there we go.
>
> **[2:49](https://www.linkedin.com/learning/learning-sql-programming-8382385/compound-select?u=76281980&t=169)** Without knowing the exact value for the state abbreviation, we used a sub-query to look it up first and then use that result to get what we needed.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (2), case. (1), for. (1)
> **Code Identifiers:** quiz_points (5), first_name (1), last_name (1)
> **CLI Commands:** find (1)
> **Definitions:** is called (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Transforming data
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=0)** - [Instructor] Just because data is stored one way in the database doesn't mean we can't transform it into something we need with our query.
>
> **[0:07](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=7)** Some common functions we'll look at are changing the case of a string, converting a value to a different type, trimming a value, and replacing a particular string in a field.
>
> **[0:17](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=17)** Let's start with a basic query like we've seen before.
>
> **[0:22](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=22)** I'll write, SELECT first_name, last_name FROM people.
>
> **[0:25](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=25)** And let's take a few liberties with the capitalization here.
>
> **[0:29](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=29)** On the first field, I'll use the LOWER function to tell the database to give me a lowercase representation of the contents of the field.
>
> **[0:37](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=37)** And on the last_name field, I'll add an UPPER function to transform the text into its uppercase equivalent.
>
> **[0:45](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=45)** I'll run this, and I can see that the data has been transformed.
>
> **[0:49](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=49)** These functions are fairly straightforward, and they can be useful when we need to present information in a particular way.
>
> **[0:57](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=57)** We can also chop up pieces of a string.
>
> **[0:59](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=59)** For example, if you need to get the first five characters of a name for some reason.
>
> **[1:03](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=63)** And for that, we'll use the substring function, referring to a smaller piece of a larger string of text.
>
> **[1:09](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=69)** In most SQL implementations, substring is the name of the function.
>
> **[1:14](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=74)** But here in SQLite, it's SUBSTR, which is a substring of the word substring.
>
> **[1:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=80)** Let's use substring on the last name.
>
> **[1:26](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=86)** Let's again start out with a very basic query and then we'll use substring on the last_name field.
>
> **[1:33](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=93)** I'll use the function name, and whether here in SQLite or in another dialect of SQL, the substring function takes a few arguments.
>
> **[1:41](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=101)** First, the field or a string literal that represents the string that we want to work with.
>
> **[1:46](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=106)** In this case, the last_name field.
>
> **[1:48](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=108)** And then, a number representing at which character in the longer string to start counting, and the length after which to stop in characters.
>
> **[1:57](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=117)** I want to start at the first character and then proceed five characters after that to get the first five characters of the last_name field.
>
> **[2:06](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=126)** Let's take a look at that.
>
> **[2:08](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=128)** Looks like that did what it says on the tin.
>
> **[2:10](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=130)** We can change the numbers around too to get a sense of how this function works.
>
> **[2:15](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=135)** Instead of starting at the first character, I'll start at the second and run for four characters from that.
>
> **[2:22](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=142)** And here, I can see the results.
>
> **[2:24](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=144)** So that's a little different segment there.
>
> **[2:26](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=146)** If we leave off the last field, the length, we just get back a string beginning with whatever character would represent the start of the range and running to the end of the field.
>
> **[2:42](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=162)** And if we turn that number negative, we get a count coming from the end of the string instead of the beginning.
>
> **[2:47](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=167)** So negative two gives us the last two letters of the string.
>
> **[2:51](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=171)** Negative four gives us the last four and so on.
>
> **[2:54](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=174)** If for some reason we need to replace text in a string as we return it from the database, we can do that with the REPLACE function.
>
> **[3:03](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=183)** I'll write REPLACE here, and as the first field in the function, I'll pass in the field I want to work with.
>
> **[3:09](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=189)** As with the other functions, this could be a string literal too, a string that isn't a value in the database but is just specific text.
>
> **[3:16](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=196)** The next item that I'll give the function is the string to replace.
>
> **[3:19](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=199)** In this case, I'll say the letter a.
>
> **[3:23](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=203)** But it could be a longer string.
>
> **[3:26](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=206)** And the third value I'll give here is the string to replace that previous string with.
>
> **[3:30](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=210)** I'll use a dash character so it's really clear when the substitution is happening.
>
> **[3:35](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=215)** This can also be a longer string or an empty string if you just want to omit a particular string from your results.
>
> **[3:43](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=223)** I'll run that, and there we go.
>
> **[3:45](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=225)** There's a dash replacing all of the lowercase a characters.
>
> **[3:49](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=229)** Notice it affected some values but not others if they didn't have an a in them.
>
> **[3:54](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=234)** This replacement is case sensitive, so keep an eye out for that.
>
> **[3:58](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=238)** In fact, if I scroll down here to row 53, Anne still has a capital A because capital A is a different character than lowercase a.
>
> **[4:08](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=248)** We can use the CAST keyword to tell the database to interpret one data type as another.
>
> **[4:14](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=254)** This can be useful if we don't have control over the schema of the database, and we can't make changes to how data is stored.
>
> **[4:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=260)** To use CAST, we'd write CAST and then put in a field name, and the AS keyword and a data type.
>
> **[4:26](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=266)** The type could be any of the types we saw before.
>
> **[4:28](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=268)** Though, in some cases, the result won't make sense, like casting a date to a Boolean.
>
> **[4:33](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=273)** One way we can see a difference in how data types work is to take something we know is a number, like the quiz_points here in the database, and sort them.
>
> **[4:44](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=284)** That makes sense.
>
> **[4:45](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=285)** The numbers are in sequence all the way up through 100.
>
> **[4:50](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=290)** But if I take this quiz_points field and tell the ORDER BY clause to treat it as character data,
>
> **[5:02](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=302)** rather than its normal numeric value, I can see how that changes how this works.
>
> **[5:07](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=307)** Now it treats these values as characters rather than numbers, sorting them using alphanumeric sort, looking at how the first character of one field compares with the first character of the next field, and then going on to look at the second character if the first character in the two fields match.
>
> **[5:22](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=322)** Just like how a comes before b in alphanumeric sorting, one comes before two and certainly before six here.
>
> **[5:29](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=329)** And that's why we see 100 before 63 because all these values we see as 100 are one, zero, zero, so they sort here together at the top, where one belongs.
>
> **[5:39](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=339)** And then, the later characters come after that.
>
> **[5:42](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=342)** We can check out this behavior another way too with the MAX function.
>
> **[5:52](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=352)** If I compare the values as character values, the max is 99, even though I know the points go up to 100.
>
> **[5:59](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=359)** That's because a text string that starts with nine will sort with a higher value than one that starts with a one.
>
> **[6:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=365)** So 99 would be considered higher than 100, 1000, or even 1 million.
>
> **[6:11](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=371)** If I change the type to an integer, I get the result that I expect.
>
> **[6:17](https://www.linkedin.com/learning/learning-sql-programming-8382385/transforming-data?u=76281980&t=377)** Treating data differently than it's stored in the database is something you can do in SQL, or something you or your developers can do later on down the line when you're working with data in a different program, like a web app or reporting software.

> [!info]- Semantic Content
>
> **Code Keywords:** function (11), let (5), case, (2), type, (1), this, (1)
> **Env Vars:** sql (3), cast (3), replace (2), select (1), lower (1)
> **Code Identifiers:** last_name (5), quiz_points (2), first_name (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **SQL:** select (1), order by (1)
> **Analogies:** for example (1), just like (1)
> **UI Navigation:** scroll down (1)

#### Creating aliases with AS
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/creating-aliases-with-as?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/creating-aliases-with-as?u=76281980&t=0)** - [Instructor] It's been a little bit subtle so far, but the names of the fields that we get back when we make a query, and subsequently the names of the field we get in a program or something we'd write, are the names of fields or expressions that we put into the statement to begin with.
>
> **[0:14](https://www.linkedin.com/learning/learning-sql-programming-8382385/creating-aliases-with-as?u=76281980&t=14)** Usually this makes sense, but sometimes if we have a little bit of a lengthy way of creating a field, or want to be more clear on our output, for example, if we're taking the results directly into a spreadsheet that someone else is going to use or into the data processing portion of an app, we can change the returned name of a field with the AS keyword.
>
> **[0:31](https://www.linkedin.com/learning/learning-sql-programming-8382385/creating-aliases-with-as?u=76281980&t=31)** Let's take a basic look at that with a statement that will get us the first_name and last_name of the participants in our people table.
>
> **[0:37](https://www.linkedin.com/learning/learning-sql-programming-8382385/creating-aliases-with-as?u=76281980&t=37)** This is a result we've seen before.
>
> **[0:39](https://www.linkedin.com/learning/learning-sql-programming-8382385/creating-aliases-with-as?u=76281980&t=39)** Notice how the column headers here are the same as the field names I asked for.
>
> **[0:49](https://www.linkedin.com/learning/learning-sql-programming-8382385/creating-aliases-with-as?u=76281980&t=49)** And if I transform the names a little bit, that comes through here in the column header.
>
> **[0:55](https://www.linkedin.com/learning/learning-sql-programming-8382385/creating-aliases-with-as?u=76281980&t=55)** That can be helpful if you want to see what you asked for specifically, but when you're providing this output to an application or exporting it to a spreadsheet, it can be a lot easier to give it a more friendly name.
>
> **[1:06](https://www.linkedin.com/learning/learning-sql-programming-8382385/creating-aliases-with-as?u=76281980&t=66)** So in my SELECT clause, after UPPER(last_name), I'll add AS and a short name that I want to use to refer to this field.
>
> **[1:14](https://www.linkedin.com/learning/learning-sql-programming-8382385/creating-aliases-with-as?u=76281980&t=74)** Let's call it surname.
>
> **[1:17](https://www.linkedin.com/learning/learning-sql-programming-8382385/creating-aliases-with-as?u=76281980&t=77)** We don't have to reserve the AS keyword only for long functions though, we can rename any field.
>
> **[1:21](https://www.linkedin.com/learning/learning-sql-programming-8382385/creating-aliases-with-as?u=76281980&t=81)** Let's make first_name a little nicer too and return it as firstname with no underscore.
>
> **[1:28](https://www.linkedin.com/learning/learning-sql-programming-8382385/creating-aliases-with-as?u=76281980&t=88)** And then when I run the query again, I see that name here instead of the function and field name that I'm actually using.
>
> **[1:36](https://www.linkedin.com/learning/learning-sql-programming-8382385/creating-aliases-with-as?u=76281980&t=96)** This name should have no spaces in it, but if you want to use spaces you need to wrap the name up in apostrophes, though developers and analysts will appreciate having fields without spaces or special characters in them, so it's a good idea to keep names without spaces.
>
> **[1:50](https://www.linkedin.com/learning/learning-sql-programming-8382385/creating-aliases-with-as?u=76281980&t=110)** It's also useful to use the result of the AS keyword within a query, like I can do here, because the alias functions as a stand in for the original field.
>
> **[2:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/creating-aliases-with-as?u=76281980&t=120)** When working with longer and more complex queries, you may see this feature used frequently.
>
> **[2:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/creating-aliases-with-as?u=76281980&t=125)** While the presentation of data is usually best left to reporting software, apps, or some other end user focused solution, We can do a little bit within our queries to ensure that our outputs are organized and accessible.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), for. (1), function (1)
> **Code Identifiers:** first_name (2), last_name (2)
> **CLI Commands:** make (2)
> **Env Vars:** select (1), upper (1)
> **SQL:** select (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Solution: State score metrics
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-state-score-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-state-score-metrics?u=76281980&t=0)** - [Instructor] The challenge asked for the state name, so I'm including that in the select clause here.
>
> **[0:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-state-score-metrics?u=76281980&t=5)** I'm also using the as keyword to assign aliases or names to these values.
>
> **[0:10](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-state-score-metrics?u=76281980&t=10)** This satisfies the challenge's request for these fields to be named max points and average points.
>
> **[0:15](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-state-score-metrics?u=76281980&t=15)** It also allows us to use the name average points down in the order by clause to sort the results by that value.
>
> **[0:21](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-state-score-metrics?u=76281980&t=21)** The quiz points values come from the people table, but the state name comes from the state's table.
>
> **[0:26](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-state-score-metrics?u=76281980&t=26)** So I'm joining that table here on the common values state abbreviation and state code.
>
> **[0:32](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-state-score-metrics?u=76281980&t=32)** The challenge wanted information about each state, so we'll group by state code or we could group by state abbreviation for one row per state and finally, we'll use the average points to order the rows by that value as the challenge requested.
>
> **[0:45](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-state-score-metrics?u=76281980&t=45)** Let's see if this works.
>
> **[0:49](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-state-score-metrics?u=76281980&t=49)** It does. Great.
>
> **[0:51](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-state-score-metrics?u=76281980&t=51)** If you got the same result, congratulations and if not, spend some time working on your solution and try again.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), let (1)
> **Speakers:** - [instructor] (1)


### 4. Add or Modify Data

#### Add data to a table
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=0)** - [Narrator] To add new data to a database table, we can use the insert keyword.
>
> **[0:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=5)** To add information, we need to tell the database a few important things.
>
> **[0:08](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=8)** So the insert clause has a few components in addition to just insert.
>
> **[0:13](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=13)** We need to tell it what table to add data to, what field or fields to add information in, and then the values to put in those fields.
>
> **[0:22](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=22)** All right, insert into people.
>
> **[0:24](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=24)** First name, values, Bob.
>
> **[0:27](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=27)** That ran successfully, and let's take a look at the result with select star from people.
>
> **[0:35](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=35)** Here, all the way down at the bottom is our new information.
>
> **[0:40](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=40)** The first name field is what we added, and the rest of the fields have null in them.
>
> **[0:46](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=46)** Because we didn't set any information, so they have no value stored in them.
>
> **[0:50](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=50)** Let's write another insert statement to add some more information.
>
> **[0:54](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=54)** I'll write insert into people, first name, last name, state code, city, shirt or hat.
>
> **[1:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=65)** Values, Mary, Hamilton, OR, Portland and hat.
>
> **[1:15](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=75)** I'll run that.
>
> **[1:17](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=77)** And let's take a look at the table now with select star from people.
>
> **[1:24](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=84)** And there's Mary.
>
> **[1:27](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=87)** We can add more than one record at a time too, either by running many insert statements at once or by giving the field names, and then a series of entries in parentheses.
>
> **[1:35](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=95)** I'll write an insert statement with just a few fields so we can see how that works.
>
> **[1:47](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=107)** Each of those parenthetical groupings will become their own record when this executes, with the first name going to the first field, and the last name going to the last field, before moving on to the next pair.
>
> **[1:59](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=119)** I've left Carol's last name off here, and I'll try to run the statement.
>
> **[2:03](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=123)** When I do, I have an error because when I provide fields to accept data, I need to give them data, simply leaving off information, whether it's the last item like this or a value in the middle of a list of fields doesn't work.
>
> **[2:16](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=136)** If there is supposed to not be a value such as if Carol here either doesn't have or doesn't want to provide a last name, we'll use null in most cases, as a placeholder for nothingness.
>
> **[2:27](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=147)** Other tables may be defined in such a way that an empty or default value might be zero, or such that null isn't allowed, in which case you'd need to follow whatever business logic is behind the database in order to add entries.
>
> **[2:39](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=159)** With each field having a corresponding value, now over in the statement.
>
> **[2:44](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=164)** My query ran successfully, and once again, let's take a look at the data.
>
> **[2:54](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=174)** Notice that we can selectively add information to fields.
>
> **[2:57](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=177)** We don't necessarily need to have all of the information for a record.
>
> **[3:01](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=181)** Sometimes though, tables require data be entered in a particular format.
>
> **[3:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=185)** And when you construct a table, you can choose to enforce certain standards on data coming into the table, like whether a certain field has a unique value or has a non null value, and so on.
>
> **[3:16](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=196)** In fact, this column, the ID number column, has a special rule applied to it that tells the database to add a new number for new records.
>
> **[3:24](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=204)** We didn't tell the database to add that number in the insert statement, but there it is.
>
> **[3:29](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=209)** Auto incrementation, and constraints like uniqueness are more advanced than we'll get into here.
>
> **[3:34](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=214)** These constraints help to preserve the integrity of the database, and there's something you'll learn about in a course on relational databases like [[Programming Foundations Databases]].
>
> **[3:43](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=223)** And something you'll work with when you move on to using SQL is a data definition language to build your own tables.
>
> **[3:49](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=229)** We'll continue to focus on using existing tables in this course.
>
> **[3:53](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=233)** Inserting new data or creating it represents one of the most frequently performed operations when working with the database, the crud operations I mentioned earlier.
>
> **[4:02](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=242)** Those are operations we do with data in a database.
>
> **[4:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=245)** And so far we've covered R, reading with a select statement and C, create with the insert statement.
>
> **[4:11](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=251)** Take some time and explore creating records in this database.
>
> **[4:16](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=256)** Here in DB browser, changes aren't made to the database unless you go up here and click write changes.
>
> **[4:22](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=262)** So you can add all sorts of records just to practice, and then hit revert changes, and the changes will disappear.
>
> **[4:28](https://www.linkedin.com/learning/learning-sql-programming-8382385/add-data-to-a-table?u=76281980&t=268)** But if you do make changes you want to save, click write changes and they'll be saved to the SQL database file.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), require (1), continue (1)
> **Env Vars:** sql (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### Modify data in a table
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=0)** - [Instructor] Data in the database can be modified using the update keyword.
>
> **[0:04](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=4)** Update is useful where we want to change information that's already there, rather than adding new records with different information.
>
> **[0:11](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=11)** To update information, we have to tell the database which table we're using, what fields to update with what values, and optionally, a where clause to specify how to find records to update.
>
> **[0:22](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=22)** If you leave off a where clause, the change will apply to all the records in the whole table.
>
> **[0:27](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=27)** So be careful with that.
>
> **[0:29](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=29)** Let's say we were contacted by one of our participants who noticed they had entered their name incorrectly.
>
> **[0:35](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=35)** Carlos Morrison of Houston, Texas accidentally typed too many Rs.
>
> **[0:41](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=41)** Since Carlos has already taken our quiz and already provided other information, it's best to just go in and change the last name field rather than delete Carlos and add a new, correct record.
>
> **[0:51](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=51)** I'll write an update statement to change the last name to Morrison, spelled correctly, for the first name, Carlos.
>
> **[0:59](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=59)** But before I run that, we need to pause a moment.
>
> **[1:02](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=62)** Is Carlos Morrison, the only Carlos in our table?
>
> **[1:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=65)** It's best to check.
>
> **[1:07](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=67)** To do that, I'll translate the condition this would match into a select statement instead.
>
> **[1:14](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=74)** Uh oh, it looks like we have a lot of Carloses.
>
> **[1:17](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=77)** So we need to be more specific about which record to update.
>
> **[1:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=80)** And we have a few choices.
>
> **[1:22](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=82)** Because we know that Carlos's last name was misspelled, we can find that misspelling and replace the value like this.
>
> **[1:36](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=96)** I know that we'll work with this dataset.
>
> **[1:38](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=98)** And you can confirm that by running a select on records with the last name Morrrison.
>
> **[1:44](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=104)** A better way to update this record is to match more information by adding other fields that identify this particular participant.
>
> **[1:58](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=118)** Writing a select statement with more information confirms that this one participant is named Carlos and is from Houston.
>
> **[2:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=125)** We'd write an update statement that uses both the first name and city as conditions to update the last name this way.
>
> **[2:13](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=133)** But there's an even better way to approach this.
>
> **[2:16](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=136)** The people table has a unique number for each participant, and that's something you'll find is the case in many databases, which deal with people's information.
>
> **[2:24](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=144)** So we can use that to be absolutely certain we have the right participant record.
>
> **[2:29](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=149)** This Carlos has an ID number of 175.
>
> **[2:32](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=152)** So using SQL, we can first write a select statement to check that we're working with a record that we intend to.
>
> **[2:38](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=158)** Looks good.
>
> **[2:39](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=159)** Once we've checked that, let's finally write the update statement that will make this change.
>
> **[2:44](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=164)** I'll write, update people, set last name equals Morrison, spelled correctly, where ID number equals 175.
>
> **[2:54](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=174)** I'll select this and then I'll run the query.
>
> **[2:58](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=178)** Then I'll select my previous query to take a look at Carlos's record.
>
> **[3:02](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=182)** Run that, and I can see the change has been made.
>
> **[3:07](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=187)** The where clause here is important because it targets only the correct record.
>
> **[3:10](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=190)** And if I left it off, I'd set the last name to Morrison for every record in the table.
>
> **[3:15](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=195)** That's not what I want to do.
>
> **[3:16](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=196)** And when working with most databases, there's often no undo feature.
>
> **[3:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=200)** Here in DB Browser, we have one, but in the real world, we won't.
>
> **[3:24](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=204)** So we need to be as specific as possible with our statement and check our logic first, before changing data in the database.
>
> **[3:31](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=211)** Because we have a where clause that we can use to make updates, we can make changes to more than one record at a time if we want to.
>
> **[3:38](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=218)** Let's say one of the companies that our participants work for got bought out and the name has changed Fisher LLC is now Megacorp Incorporated.
>
> **[3:46](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=226)** Let's find records where the company is Fisher LLC.
>
> **[3:52](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=232)** And then we'll make the change, setting the company name to Megacorp, where the company is currently Fisher with update people set company equals Megacorp Incorporated where company equals Fisher LLC.
>
> **[4:09](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=249)** Again, I'll highlight that line.
>
> **[4:11](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=251)** I'll run it.
>
> **[4:12](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=252)** And our query executed successfully.
>
> **[4:16](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=256)** Now, if we look for people at Fisher, there is no results.
>
> **[4:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=260)** But we do have results for Megacorp.
>
> **[4:27](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=267)** Changing or updating existing data represents the U in CRUD.
>
> **[4:31](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=271)** And now we've covered creating, reading and updating data.
>
> **[4:35](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=275)** Take some time to explore updating data in this table.
>
> **[4:39](https://www.linkedin.com/learning/learning-sql-programming-8382385/modify-data-in-a-table?u=76281980&t=279)** Remember the changes you make here in DB Browser aren't permanent until you hit the right changes button, and you can throw out unsaved changes with revert changes.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), find (4)
> **Code Keywords:** let (4), this. (2), delete (1), new, (1), throw (1)
> **Env Vars:** llc (3), sql (1), crud (1)
> **Best Practices:** it's best to (2)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Removing data from a table
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=0)** - [Instructor] Removing a row of data from a table can be accomplished with the DELETE keyword.
>
> **[0:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=5)** As with an UPDATE statement, we need to tell the database from where it should delete something, and it's a good idea to add a condition to set the scope of deletion; otherwise, we'll delete everything in the table.
>
> **[0:15](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=15)** For example, this is a completely valid DELETE statement and would remove all the records from the people table.
>
> **[0:21](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=21)** That's not something we want to do right now though.
>
> **[0:23](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=23)** So let's add some more context to the statement and target specific records to delete.
>
> **[0:29](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=29)** First though, let's take a look at our table and find some unlucky records to delete.
>
> **[0:35](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=35)** I'll remove some of these incomplete records that we've just added.
>
> **[0:39](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=39)** Let's start with Bob.
>
> **[0:43](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=43)** And before we delete, let's make sure to test our logic so we know that we're only getting the record that we intend to work with.
>
> **[0:49](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=49)** Bob's ID number is 1001.
>
> **[0:51](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=51)** So I'll write SELECT * FROM people WHERE id_number=1001.
>
> **[0:57](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=57)** That looks like my WHERE condition matches only what I want to delete.
>
> **[1:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=60)** So we're ready to convert this into a DELETE statement.
>
> **[1:03](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=63)** To do that, I'll create a statement that says DELETE FROM people WHERE id_number=1001.
>
> **[1:15](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=75)** My query ran successfully.
>
> **[1:17](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=77)** And now if I take a look at the data in the table,
>
> **[1:25](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=85)** there's no more Bob.
>
> **[1:27](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=87)** We can remove more than one record at a time too with a condition that matches more than one record.
>
> **[1:32](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=92)** This is useful in many cases, but as we saw before it can be dangerous as well.
>
> **[1:37](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=97)** These incomplete records we recently added all have something in common, their quiz_points field is empty, it's NULL.
>
> **[1:44](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=104)** So that's not too useful to us in a table constructed to store quiz points.
>
> **[1:48](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=108)** Let's put together a statement to get rid of any records with a NULL score.
>
> **[1:53](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=113)** But first we'll test our logic with a SELECT statement.
>
> **[1:56](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=116)** When we're working with NULL values, we don't ask for values equal to or unequal to NULL, we ask for records where the field IS NULL or IS NOT NULL.
>
> **[2:06](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=126)** Further values though, like strings or numbers or dates, we use a equality comparison operators.
>
> **[2:12](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=132)** Okay, that looks reasonable.
>
> **[2:14](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=134)** There's the records that have no quiz points listed, and I don't see any surprises.
>
> **[2:19](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=139)** Let's switch this to a DELETE statement.
>
> **[2:21](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=141)** The result will be DELETE FROM people where quiz_points IS NULL.
>
> **[2:28](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=148)** And once again, let's take a look at the data in our table.
>
> **[2:34](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=154)** There we go.
>
> **[2:35](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=155)** Now, all the records have a value for quiz_points and anything that doesn't is gone.
>
> **[2:40](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=160)** This covers the last letter of the CRUD acronym, delete, and it rounds out our basic set of operations that we'll use SQL for as a DML, a data manipulation language.
>
> **[2:51](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=171)** There are other keywords in the SQL standard including those where SQL is used as a DDL, a data definition language, which we use to create and modify databases and tables themselves.
>
> **[3:01](https://www.linkedin.com/learning/learning-sql-programming-8382385/removing-data-from-a-table?u=76281980&t=181)** And individual flavors of SQL provides still different options, but all versions of SQL support SELECT, INSERT, UPDATE, and DELETE.

> [!info]- Semantic Content
>
> **Env Vars:** delete (7), null (7), sql (5), select (3), where (3)
> **Code Keywords:** delete (14), let (7), switch (1)
> **SQL:** select (3), where (3), update (2), delete from (2)
> **API Endpoints:** delete  (6)
> **Code Identifiers:** quiz_points (3), id_number (2)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** as we saw (1)
> **Definitions:** is a  (1)

#### Solution: Identifying the correct record
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-identifying-the-correct-record?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-identifying-the-correct-record?u=76281980&t=0)** - [Instructor] This challenge asked us to find the unique identifier for one record so that if we were to alter or delete that record, we'd know that we're working with precisely the record we want and that we're not accidentally modifying other records that match some non-unique criteria.
>
> **[0:14](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-identifying-the-correct-record?u=76281980&t=14)** To start, I added the fields that we'll be using to locate the record.
>
> **[0:17](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-identifying-the-correct-record?u=76281980&t=17)** First name, state code, and team in the select clause, and I added ID number, which is the unique identifier for records in the people table.
>
> **[0:26](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-identifying-the-correct-record?u=76281980&t=26)** I'll be using records from the people table, so that will be my from clause.
>
> **[0:31](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-identifying-the-correct-record?u=76281980&t=31)** And then I'll use the values, the challenge provided to filter the records.
>
> **[0:35](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-identifying-the-correct-record?u=76281980&t=35)** The challenge said Florida and I happen to know that the state code for Florida is fl.
>
> **[0:40](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-identifying-the-correct-record?u=76281980&t=40)** If you didn't, you might have joined the state's table and used the full name.
>
> **[0:43](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-identifying-the-correct-record?u=76281980&t=43)** That's fine.
>
> **[0:44](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-identifying-the-correct-record?u=76281980&t=44)** The challenge also said this participant was a member of the Cobras, but that's not the team's full name.
>
> **[0:49](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-identifying-the-correct-record?u=76281980&t=49)** So I'm using like here to match just part of the team name in case I don't remember what it is.
>
> **[0:55](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-identifying-the-correct-record?u=76281980&t=55)** Okay, let's see if this returns just one record.
>
> **[1:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-identifying-the-correct-record?u=76281980&t=60)** It does, and I can see that this participant's unique ID is 931.
>
> **[1:04](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-identifying-the-correct-record?u=76281980&t=64)** If this query had returned more than one record, I'd need to further refine my search to identify just the one ID number for the one record that I'd need to work with.
>
> **[1:13](https://www.linkedin.com/learning/learning-sql-programming-8382385/solution-identifying-the-correct-record?u=76281980&t=73)** If you got the same result, congratulations and if not, work on your solution and try again.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (1), let (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Overcoming common SQL mistakes
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=0)** - [Instructor] When working with SQL, there are a few common mistakes that it's easy to make.
>
> **[0:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=5)** SQL is not a very forgiving language if you don't have the syntax just right.
>
> **[0:09](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=9)** And the errors that you'll get back from the database software if you miss type something can be cryptic at best.
>
> **[0:15](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=15)** So if you're getting an error message, be sure to read it carefully and see if it points you in the right direction.
>
> **[0:21](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=21)** If you have a syntax error that you just can't find, start breaking down the statement into pieces that do work, and then put the statement together again, keeping an eye on when an error happens.
>
> **[0:31](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=31)** It's easy to mix up parentheses or misspell a field name.
>
> **[0:34](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=34)** And when you're learning, it can be tricky to remember the order of clauses or whether a keyword is missing an important part.
>
> **[0:41](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=41)** Keep in mind that if you're using a text string, you need to put it in single quotes for it to be treated as text.
>
> **[0:47](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=47)** And if for some reason your database has spaces in field names, which is allowed, but isn't really a best practice, you'll need to put backticks around the name of your field when you use it in a statement.
>
> **[0:57](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=57)** Depending on the software you're using, it could interpret table and field names as case sensitive too, so watch out for that.
>
> **[1:04](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=64)** Some development environments will give you hints when it can figure out what you're trying to do.
>
> **[1:08](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=68)** But often there's not much in the way of support if you're writing statements outside of an environment designed to help you out.
>
> **[1:14](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=74)** For that reason, it's usually a good idea to keep an SQL focused app around, so you can connect to your database and just work with it directly rather than troubleshooting through another tool.
>
> **[1:24](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=84)** When you get a statement working the way you want it to, copy and paste it into a note or some other documentation that you keep as you build and learn.
>
> **[1:31](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=91)** When you're copying and pasting SQL statements, it's important to make sure that you're doing so using plain text.
>
> **[1:37](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=97)** Many text editors that aren't designed for software development, things like Word or Pages or Stickies, or even many note taking applications, will make changes to text that cause problems.
>
> **[1:48](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=108)** One of the most irritating problems to me is when a text editor changes quotation characters into so-called smart quotes.
>
> **[1:54](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=114)** They may look better when printed on an elegant invitation, but smart quotes and the single straight quote are different characters, and SQL interpreters don't know what to do with fancy punctuation.
>
> **[2:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=125)** So if you've copied some SQL from somewhere and it looks right, but it doesn't work, check for smart quotes.
>
> **[2:11](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=131)** If you're sharing SQL queries with team members or someone else, it's a good idea to use plain text files to contain them rather than pasting them into an email or chat message for the same reason.
>
> **[2:21](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=141)** Not only does attaching statements as files keep your actual communication clean, it can also make them easier to find and share later on.
>
> **[2:29](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=149)** Treating null values incorrectly can cause errors or unexpected behavior.
>
> **[2:34](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=154)** Remember that a null value is not the same as zero, or no, or false.
>
> **[2:38](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=158)** So if you're looking for employees that don't have ID numbers, checking for those equal to zero isn't the same as asking for those that are null.
>
> **[2:46](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=166)** You don't want to use an equality operator to look for null values.
>
> **[2:48](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=168)** You want to use IS NULL or IS NOT NULL.
>
> **[2:53](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=173)** If you're making a change to a table, be sure that you're using a condition that will scope your change how you intend.
>
> **[2:59](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=179)** Turn it into a select statement first to make sure that you aren't going to have unexpected behavior due to a typo or a logic mistake.
>
> **[3:06](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=186)** Remember too, that most software will run all of the statements in a console window.
>
> **[3:10](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=190)** So if you're writing more than one at a time, keep them in a scratch pad and switch them in one by one, or be sure to select the one you want to run and run it.
>
> **[3:19](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=199)** Even the pros make typos and other mistakes, and the only way to improve is with practice.
>
> **[3:24](https://www.linkedin.com/learning/learning-sql-programming-8382385/overcoming-common-sql-mistakes?u=76281980&t=204)** So if you make a mistake or 12 while you're learning, don't feel bad, we've all been there.

> [!info]- Semantic Content
>
> **CLI Commands:** make (7), find (2)
> **Env Vars:** sql (7), null (2)
> **Code Keywords:** else, (1), switch (1)
> **Warnings:** keep in mind (1), watch out (1)
> **UI Navigation:** select the (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-sql-programming-8382385/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-sql-programming-8382385/next-steps?u=76281980&t=0)** - [Instructor] In this course, we've seen how to use SQL to work with an existing database.
>
> **[0:05](https://www.linkedin.com/learning/learning-sql-programming-8382385/next-steps?u=76281980&t=5)** Depending on what your goal is, your next steps for learning can take a few different paths.
>
> **[0:09](https://www.linkedin.com/learning/learning-sql-programming-8382385/next-steps?u=76281980&t=9)** If you're interested in learning how to create databases and how to administer them, take a look at our courses on database management systems, like SQL Server, MySQL, Oracle and others.
>
> **[0:20](https://www.linkedin.com/learning/learning-sql-programming-8382385/next-steps?u=76281980&t=20)** If you're interested in digging deeper into SQL itself, check out our courses on more advanced SQL.
>
> **[0:26](https://www.linkedin.com/learning/learning-sql-programming-8382385/next-steps?u=76281980&t=26)** Before you do that, though, you may want to brush up on one of the database management systems they use, either SQL Server or MySQL, in order to be able to follow along better.
>
> **[0:36](https://www.linkedin.com/learning/learning-sql-programming-8382385/next-steps?u=76281980&t=36)** The DBMS and the variety of SQL it uses go hand in hand.
>
> **[0:40](https://www.linkedin.com/learning/learning-sql-programming-8382385/next-steps?u=76281980&t=40)** Or if you're looking to build an application that uses SQL in it, have a look at our courses about using SQL with popular languages like Python, Java, and others.
>
> **[0:50](https://www.linkedin.com/learning/learning-sql-programming-8382385/next-steps?u=76281980&t=50)** Whichever path you take, have fun learning and good luck.
>
> **[0:52](https://www.linkedin.com/learning/learning-sql-programming-8382385/next-steps?u=76281980&t=52)** See you next time.

> [!info]- Semantic Content
>
> **Env Vars:** sql (8), dbms (1)
> **CLI Commands:** mysql (2), python (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Explore a Career in Database Development]]
← [[Quick Start Guide to SQL]] | **3 of 5** | [[Learning MySQL Development]] →

### In [[Data Engineering Foundations Professional Certificate by Astronomer]]
**1 of 6** | [[Complete Guide to Python for Data Engineering- From Beginner to Advanced]] →

### In [[Become a Software Developer]]
← [[Learning C-]] | **11 of 12** | [[Programming Foundations- Web Security]] →

## Part of

- [[Data Engineering Foundations Professional Certificate by Astronomer]]

## Appears In

- [[Explore a Career in Database Development]]
- [[Data Engineering Foundations Professional Certificate by Astronomer]]
- [[Become a Software Developer]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL

---

[↑ Back to top](#)