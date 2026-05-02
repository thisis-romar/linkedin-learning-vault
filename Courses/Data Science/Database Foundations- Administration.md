---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: database-foundations-administration-8375189
url: "https://www.linkedin.com/learning/database-foundations-administration-8375189"
duration_minutes: 129
duration: 2h 9m
level: Beginner
updated: 2/11/2025
learners: 196483
skills:
  - Database Administration
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGClEsPFBuuow/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1615489383878?e=2147483647&amp;v=beta&amp;t=rA78ksZYVHT9Gt2kH9vpzMK_X2CD1pWDOXxn2nRQcE8"
linkedin_topic: Data Science
learning_paths:
  - '[[Introduction to Fundamental Skills for Data Work- Data Management]]'
  - '[[Database Foundations- From Concepts to Applications]]'
  - '[[Advance Your Database Administration Skills]]'
prev_courses:
  - '[[Data Management Essential Training]]'
  - '[[Database Foundations Database Management]]'
  - '[[Database Foundations Database Management]]'
next_courses:
  - '[[Learning Data Governance]]'
  - '[[Database Foundations- Application Development]]'
  - '[[Database Foundations- Application Development]]'
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Management","position":3,"total":6,"prev":"Data Management Essential Training","next":"Learning Data Governance"},{"path":"Database Foundations- From Concepts to Applications","position":4,"total":5,"prev":"Database Foundations Database Management","next":"Database Foundations- Application Development"},{"path":"Advance Your Database Administration Skills","position":4,"total":11,"prev":"Database Foundations Database Management","next":"Database Foundations- Application Development"}]'
path_count: 3
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/database-administration
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Database%20Foundations-%20Administration.md)

![Database Foundations: Administration](https://media.licdn.com/dms/image/v2/C4E0DAQGClEsPFBuuow/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1615489383878?e=2147483647&amp;v=beta&amp;t=rA78ksZYVHT9Gt2kH9vpzMK_X2CD1pWDOXxn2nRQcE8)

# Database Foundations: Administration

> Ongoing, regular administration is critical to the security and performance of databases such as SQL Server. In this course—the fourth installment in the Database Foundations series—explore vital techniques and best practices for administering a database. Instructor Adam Wilbert covers a variety of core concepts, including how to secure a server with user authentication and roles, protect your dat

> [LinkedIn Learning](https://www.linkedin.com/learning/database-foundations-administration-8375189) | 2h 9m | Beginner | 196K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Administer a database server](#administer-a-database-server)
  - [What you should know](#what-you-should-know)
  - [How to work with the exercise files](#how-to-work-with-the-exercise-files)
- [**1. Backup and Restore**](#1-backup-and-restore) (8 videos)
  - [Backup plans](#backup-plans)
  - [Create a PostgreSQL backup](#create-a-postgresql-backup)
  - [Use pg_dump in the Postgres container](#use-pg_dump-in-the-postgres-container)
  - [Restore a Postgres database](#restore-a-postgres-database)
  - [Create a full SQL Server backup](#create-a-full-sql-server-backup)
  - [Restore a SQL Server database](#restore-a-sql-server-database)
  - [Incremental and differential backups](#incremental-and-differential-backups)
  - [Point-in-time restores](#point-in-time-restores)
- [**2. Server Security**](#2-server-security) (5 videos)
  - [Principals and securables](#principals-and-securables)
  - [Server authentication and login accounts](#server-authentication-and-login-accounts)
  - [Granting and revoking permissions](#granting-and-revoking-permissions)
  - [PostgreSQL role permissions](#postgresql-role-permissions)
  - [SQL Server user permissions](#sql-server-user-permissions)
- [**3. Database Security**](#3-database-security) (4 videos)
  - [View permissions on PostgreSQL](#view-permissions-on-postgresql)
  - [View permissions on SQL Server](#view-permissions-on-sql-server)
  - [Column-level permissions](#column-level-permissions)
  - [Group permissions](#group-permissions)
- [**4. High Availability**](#4-high-availability) (4 videos)
  - [Managing server uptime](#managing-server-uptime)
  - [Standby servers](#standby-servers)
  - [Synchronize servers with log shipping](#synchronize-servers-with-log-shipping)
  - [Server failover clusters](#server-failover-clusters)
- [**5. Health and Maintenance of the System**](#5-health-and-maintenance-of-the-system) (4 videos)
  - [Server maintenance tasks](#server-maintenance-tasks)
  - [Closing user sessions](#closing-user-sessions)
  - [Reviewing system statistics](#reviewing-system-statistics)
  - [Reading system logs](#reading-system-logs)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Administer a database server](https://www.linkedin.com/learning/database-foundations-administration-8375189/administer-a-database-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/administer-a-database-server?u=76281980&t=0)** - [Adam] Database administrators are tasked with protecting the valuable data that their organization has collected.
>
> **[0:08](https://www.linkedin.com/learning/database-foundations-administration-8375189/administer-a-database-server?u=76281980&t=8)** In a world filled with hostile threats, this is an extremely important job that cannot be overlooked.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-administration-8375189/administer-a-database-server?u=76281980&t=14)** You should consider that your database will eventually encounter [[Hardware]] failures, or even sophisticated intrusion attempts by unauthorized hackers.
>
> **[0:24](https://www.linkedin.com/learning/database-foundations-administration-8375189/administer-a-database-server?u=76281980&t=24)** The time and effort spent securing your systems will eventually pay off.
>
> **[0:29](https://www.linkedin.com/learning/database-foundations-administration-8375189/administer-a-database-server?u=76281980&t=29)** Hi, my name is Adam Wilbert.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-administration-8375189/administer-a-database-server?u=76281980&t=31)** I'm a [[LinkedIn]] Learning instructor that's introduced people all over the world to [[Relational Databases]].
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-administration-8375189/administer-a-database-server?u=76281980&t=37)** In the fourth course in my database foundation series, we're going to explore the administration topics that'll help you secure and protect your data.
>
> **[0:47](https://www.linkedin.com/learning/database-foundations-administration-8375189/administer-a-database-server?u=76281980&t=47)** I'll discuss the importance of making regular backups, setting up permissions for authorized user accounts, weathering a storm of hardware failures, and more.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-administration-8375189/administer-a-database-server?u=76281980&t=56)** I'm happy to have you along for this journey.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-administration-8375189/administer-a-database-server?u=76281980&t=58)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[LinkedIn]] (1), [[Relational Databases]] (1)
> **Definitions:** is an  (1)
> **Speakers:** - [adam] (1)

#### [What you should know](https://www.linkedin.com/learning/database-foundations-administration-8375189/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/what-you-should-know?u=76281980&t=0)** - [Instructor] Since this is the fourth course in the Database Foundations series, I'm expecting that you have some prior experience before we get started.
>
> **[0:08](https://www.linkedin.com/learning/database-foundations-administration-8375189/what-you-should-know?u=76281980&t=8)** I assume that you feel comfortable with the structure of a relational database and know how tables, views, and queries work.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-administration-8375189/what-you-should-know?u=76281980&t=16)** You should be able to read and write [[SQL]] statements and know how to execute them on the server.
>
> **[0:21](https://www.linkedin.com/learning/database-foundations-administration-8375189/what-you-should-know?u=76281980&t=21)** This series is intended to be taken in order, so if you haven't done so yet, I recommend starting with the Intro to [[Databases]] course, then [[Data Structures]], and Management, before continuing here in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[Databases]] (1), [[Data Structures]] (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### [How to work with the exercise files](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=0)** - [Instructor] If you'd like to follow along on your own computer, then you're going to want to download the exercise files from the course overview page.
>
> **[0:08](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=8)** Once it's unzipped, you'll find a folder for each chapter inside of this course.
>
> **[0:12](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=12)** And then inside of each of these chapter folders, are the individual files that we'll work with.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=16)** Now, throughout this database foundation series, we've been using a couple of database servers running inside of Docker containers, and we connected them with a program called [[Microsoft Azure|Azure]] data studio.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=27)** We're going to continue with this setup for this course.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=30)** So I assume that you probably have a working environment that looks something like what I have here on the screen right now.
>
> **[0:36](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=36)** In the connection sidebar over on the left side of the screen, I'm connected with both the RDBMS server for [[Microsoft SQL Server|SQL server]] as well as our [[PostgreSQL]] database.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=45)** Now, if you're already at this point, then fantastic.
>
> **[0:48](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=48)** If you need to get everything set up though, you'll want to review the instructions in the server setup.txt file, that you'll find inside of the chapter zero folder of the exercise files.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=58)** This file will describe all the software that you need and the commands to create and start these two servers.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=64)** For a video walkthrough, check through the first course in the series database foundations, intro to [[Databases]].
>
> **[1:11](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=71)** The movies in chapter two, will set up a database playground which we'll show you the entire process step by step.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=78)** Now for this course, we're going to continue working with the data for a company called Two Trees that manufactures a line of olive oil [[Microsoft Products|products]].
>
> **[1:26](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=86)** I want to make sure that everyone gets the same results as I do when we're working with the data.
>
> **[1:31](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=91)** And I don't want things to get mixed up with databases that you may have created in the prior courses.
>
> **[1:36](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=96)** So let's take a moment and create a fresh copy of the database that we can work with.
>
> **[1:41](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=101)** First, I'm going to right click on my SQL server database instance and say new query.
>
> **[1:46](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=106)** Then we can create a new database.
>
> **[1:50](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=110)** I'll call it Two Trees_DBF4.
>
> **[1:54](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=114)** This will make it clear that this is the database that we're going to use, for this forest course in database foundation series.
>
> **[2:02](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=122)** Feel free to name the database whatever you'd like though.
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=125)** I'll press the run button to create the database on the SQL server instance, and then we'll run the same command on our PostgreSQL server.
>
> **[2:15](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=135)** Now that they're both created, we need to populate them with the tables and data that we have to work with.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=140)** I'm going to go ahead and close both of these tabs and not save the changes.
>
> **[2:24](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=144)** Then we'll go back out to the exercise files and I'll open up the file called Two_Trees.databas.txt.
>
> **[2:30](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=150)** Let's copy everything out of it to our clipboard, and then we can close was the file.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=155)** Then we can go into our database server.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=157)** I'm going to right click on the SQL server instance and choose refresh, then we'll go into the databases folder and we'll find it right there.
>
> **[2:44](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=164)** Now right click on it and choose new query.
>
> **[2:47](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=167)** Then I'll paste everything in, and that pace in lines number one, down to 329.
>
> **[2:52](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=172)** Let me just scroll here to the very top, so you can see what it starts with here at the top.
>
> **[2:55](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=175)** I'll press the run button, and then we'll go through and create all the tables and them with data.
>
> **[3:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=180)** So that takes care of the database for the SQL server instance.
>
> **[3:04](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=184)** Let's go ahead and close this tab.
>
> **[3:06](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=186)** We need to do the same thing for the PostgreSQL server.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=189)** So once again, I'll right click on the PostgreSQL server or the databases folder and choose refresh.
>
> **[3:14](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=194)** Then I'll right click on the Two_Trees.DBS4 database and choose new query and paste in all that text again.
>
> **[3:21](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=201)** This time though we need to make a couple of changes to the script.
>
> **[3:24](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=204)** So I'll scroll up here to the very top, and we'll see that I have outlines online three and four, for the things that we need to change.
>
> **[3:31](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=211)** So I need to comment outlines number 23, 25 and 27.
>
> **[3:36](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=216)** Let me scroll down and make those changes here just by typing in two dashes on line 23, 25 and 27.
>
> **[3:46](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=226)** Then back at the very top, I also need to modify lines 63 and 76.
>
> **[3:52](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=232)** Let's go down to those lines.
>
> **[3:55](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=235)** And the thing that we need to change here is this identity statement.
>
> **[3:58](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=238)** Inside of PostgreSQL it uses a slightly different syntax, and I have that over here on the far right.
>
> **[4:03](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=243)** So I'm just going to copy generated always as identity, start with 100 increment by one, and I'll copy that to my clipboard, and then I'll come back to the beginning and replace identity 100,1 with all that text.
>
> **[4:16](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=256)** We'll do the same thing down here on line number 76.
>
> **[4:19](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=259)** So I'll copy this generated always statement.
>
> **[4:22](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=262)** We'll come back here to the beginning and paste it over this identity statement.
>
> **[4:27](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=267)** That'll make the script that we used on the SQL server database, compatible with PostgreSQL.
>
> **[4:32](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=272)** Now, I'll make sure that nothing is selected and press the run button, and we should get all the tables and the data put into the database.
>
> **[4:40](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=280)** So that finishes entering in the data.
>
> **[4:41](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=281)** Let's go ahead and close this tab, so that's all we need to do to create the new databases for this course.
>
> **[4:48](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=288)** If you want to, feel free to delete the prior databases from the older courses if you're no longer using them.
>
> **[4:54](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=294)** To do that, right click on each server and choose new query and then issue the command drop database, and the name of the databases that you no longer need.
>
> **[5:07](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=307)** In this case, I'll get rid of DBF three from the third course in the series.
>
> **[5:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=313)** That'll remove it from the server, and if I refresh things you'll see that it's no longer there.
>
> **[5:18](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=318)** Now, if you run into any errors with these commands, especially with the PostgreSQL server, you might need to stop the Docker container and then restart it before deleting the database.
>
> **[5:28](https://www.linkedin.com/learning/database-foundations-administration-8375189/how-to-work-with-the-exercise-files?u=76281980&t=328)** So now we have a fully fleshed out database that we can use to explore some relational [[Database Administration]] concepts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL]] (7), [[Databases]] (7), [[Microsoft SQL Server|Sql server]] (6), [[Microsoft Azure|Azure]] (1), [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (6), find (3), docker (2)
> **Env Vars:** sql (6), rdbms (1), dbs4 (1), dbf (1)
> **UI Navigation:** click on (4), scroll up (1), scroll down (1)
> **Exercise Files:** exercise files (3), download the (1)
> **Prerequisites:** setup (2), set up (2)
> **File Paths:** setup.txt (1), two_trees.databas.txt (1)
> **Speakers:** - [instructor] (1)


### 1. Backup and Restore

[↑ Back to Table of Contents](#table-of-contents)

#### [Backup plans](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=0)** - [Instructor] Computer [[Hardware]] is prone to failures and accidents can happen at any point.
>
> **[0:05](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=5)** To assume otherwise is setting yourself up for a disaster.
>
> **[0:10](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=10)** Anyone that has administrative responsibility over their organizations valuable data needs to have a backup strategy, a documented plan for when the unthinkable eventually happens.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=22)** On the surface, the idea of a backup is pretty simple.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=25)** It's just a redundant copy of your database that you can keep in a secure location.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=31)** Should something go wrong with your primary database, you can recover your system using the backup copy.
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=37)** Now, while the idea of a backup of a database is straightforward, actually implementing a backup strategy involves making a number of decisions based on how you use the database and weighing some costs against potential benefits.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=52)** The problem is that many [[Databases]] change very quickly.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=56)** Sometimes many thousands of edits are made every second.
>
> **[1:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=60)** In an ideal situation your backup copies would be exact duplicates of your primary database at all times.
>
> **[1:07](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=67)** For databases that aren't updated very often, this is easy to achieve.
>
> **[1:11](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=71)** But for very active databases or very large databases, making identical duplicates every time a change is made takes time and can get prohibitively expensive.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=82)** This means that depending on your usage patterns, you may need to ask yourself some hard questions about what your data is actually worth and how much of it you're willing to lose.
>
> **[1:33](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=93)** Let's consider a database that's used by a financial institution like a bank.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=98)** They probably would have a very low tolerance for any data loss.
>
> **[1:43](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=103)** In the event of a hardware failure or a natural disaster, it would be important for the bank to always have a backup that contains a complete 100% up-to-date accounting of every customer's finances.
>
> **[1:55](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=115)** In order to meet this requirement, the bank needs to make backups constantly so that they're always identical to the current state of the database.
>
> **[2:03](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=123)** This implementation detail can be very expensive to maintain but it's worthwhile for the bank to do so in order to meet their obligations to their customers.
>
> **[2:14](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=134)** Now let's consider a different business.
>
> **[2:16](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=136)** This one uses a smaller database that stores the work product of individuals in a small [[Microsoft Office|office]].
>
> **[2:23](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=143)** They have a much higher tolerance for data loss and could get by with a much more relaxed backup strategy.
>
> **[2:30](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=150)** If the database fails and needs to be restored from a backup that's a day or two old, it might not be that much of a burden to the organization.
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=158)** Of course having to redo work that was lost would be annoying for any employee but there's no need to take on the added expense of constant database backups at the same scale as the bank.
>
> **[2:50](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=170)** For the small business, the cost of losing a couple of days worth of work may be far cheaper in the long run.
>
> **[2:57](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=177)** When a database backup copy is first made, it's identical to the primary database.
>
> **[3:02](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=182)** As backups age, their contents lag farther behind the primary database and their usefulness decreases.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=189)** For some businesses like the bank, a database backup that's even a few minutes out of date is unacceptable and worthless.
>
> **[3:17](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=197)** For others like the small office, a backup that's made once at the end of each business day may provide a satisfactory level of protection at a much lower cost.
>
> **[3:27](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=207)** As your RDBMS platform gets more sophisticated, new techniques become available that'll make the process of creating a backup faster, smaller and therefore cheaper.
>
> **[3:38](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=218)** This allows them to be made more often.
>
> **[3:40](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=220)** We'll take a look at some of those techniques later on in this chapter.
>
> **[3:45](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=225)** The key to a good backup strategy is finding the right balance for you.
>
> **[3:49](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=229)** Determining your acceptable level of data loss tolerance is an important first step in developing a backup strategy for your database.
>
> **[3:57](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=237)** Making frequent backups is a great idea but it could be expensive in terms of time and storage costs.
>
> **[4:03](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=243)** Finding your ideal balance point between those two concerns between potential data loss and your operating budget is the job of any good database administrator.
>
> **[4:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=253)** I encourage you to keep this balance in mind when you think about protecting your valuable data as we move through the next couple of movies.
>
> **[4:21](https://www.linkedin.com/learning/database-foundations-administration-8375189/backup-plans?u=76281980&t=261)** Now let's see how to create backups on each of our two RDBMS platforms so that we could compare the actual process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (4), [[Hardware]] (2), [[Microsoft Office|Office]] (2)
> **Definitions:** means that (1), is an  (1), is a  (1)
> **CLI Commands:** make (2)
> **Env Vars:** rdbms (2)
> **Speakers:** - [instructor] (1)

#### [Create a PostgreSQL backup](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=0)** - [Instructor] The [[PostgreSQL]] platform uses a program called PG dump, for creating a database backup.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=7)** It's usually executed on the command line, but graphical user interfaces, such as [[Microsoft Azure|Azure]] Data Studio, often provide a workflow that'll help you through some of the many configuration options that PG dump supports.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=22)** To get there, let's right click on the two trees database that's inside of the PostgreSQL server, and choose manage.
>
> **[0:29](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=29)** Then on the toolbar, click on the backup button.
>
> **[0:33](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=33)** That'll open up the backup database panel, here on the right side of the screen.
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=37)** At the top are two of the general options that are both required.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=41)** We need to specify a backup type and an output path.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=46)** The backup type has a few different options.
>
> **[0:48](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=48)** The [[SQL]] file will create a plain text file that's easy to read, so I'm going to stick with that option.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=56)** The alpha path defines where the file is going to be saved.
>
> **[1:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=60)** Now there's one important thing to keep in mind here, remember that our PostgreSQL server is running inside of a Docker container.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=68)** The output path here is relative to the server, so it's also inside of the container.
>
> **[1:15](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=75)** In other words, this output path refers to the [[Linux]] file system that exists inside of the Docker containers self-contained bubble.
>
> **[1:23](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=83)** It's not the file system that your desktop or laptop computer is using.
>
> **[1:28](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=88)** Let's export our backup to the root of the container, and I'll just call it, first backup at SQL.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=97)** The [[Representational State Transfer (REST)|rest]] of these options give you access to fine tune the specific configuration of your backup file.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=104)** For instance, the data only option, will allow you to export just the data, but not the table structures and relationships.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=112)** When you click through each of these options, you'll see descriptive text at the bottom, that clarifies each of these options.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=118)** I'm going to go ahead and leave all of these blank, and if I scroll through, you'll see that there's lots of different options that we can configure.
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=125)** To get a full backup of everything in the database, including all of the commands needed to recreate all the tables, views and other objects from scratch, just leave all of these blank, which will use the default options.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=138)** Press the OK button at the bottom of the screen, to create the backup file inside of the Docker container.
>
> **[2:24](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=144)** I get the message here in the output window, that says the backup succeeded.
>
> **[2:29](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=149)** Now at the time of this recording, there is a compatibility issue that I need to mention for the most recent version of PostgreSQL.
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=158)** If you get an error when generating the backup, it's most likely that Azure Data Studio hasn't yet been updated to support [[PostgreSQL|Postgres]] version 13, and the error message will indicate the incompatibility with the PG dump application.
>
> **[2:54](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=174)** To verify what version of Postgres that you're using, go ahead and right click on the two trees database and choose new query.
>
> **[3:01](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=181)** Then execute the command, select version, and then an open and close parentheses.
>
> **[3:07](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=187)** When you run this, it'll tell you what version of Postgres you're working with.
>
> **[3:11](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=191)** I'm using PostgreSQL 12.4, which is why I didn't get an error.
>
> **[3:16](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=196)** If you're using version 13 and get an error, then we're going to need to take a different approach.
>
> **[3:22](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-postgresql-backup?u=76281980&t=202)** We can approach the backup process from another direction, but this requires a trip to the command line tools, and we're going to take a look at that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL]] (5), [[PostgreSQL|Postgres]] (3), [[Microsoft Azure|Azure]] (2), [[SQL]] (2), [[Linux]] (1)
> **CLI Commands:** docker (3)
> **Versions:** version 13 (2), 12.4 (1)
> **UI Navigation:** click on (3)
> **Definitions:** in other words (1), refers to (1), is a  (1)
> **Env Vars:** sql (2)
> **Tools:** command line (2)
> **Analogies:** such as (1), for instance (1)

#### [Use pg_dump in the Postgres container](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=0)** - [Instructor] It's always a good idea to know alternative methods for working with a database server.
>
> **[0:05](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=5)** While graphical interfaces can simplify many procedures, they add a layer between you and the server that can sometimes break down.
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=13)** Because of this, it's important to get comfortable with the native command line tools.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=17)** Instead of using the [[Microsoft Azure|Azure]] Data Studio graphical user interface for creating a [[PostgreSQL]] database backup, we can send our instructions directly to the server using a text interface.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=30)** If you're on Mac OS or [[Linux]], you can use the terminal application.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=34)** If you're on [[Windows]], you can use the [[Powershell]] application.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=38)** These are the same applications that we use to initially set up our Docker containers.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=43)** The other option is to use the built-in terminal window, right here inside of Azure data studio.
>
> **[0:49](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=49)** It doesn't matter which method you choose, they'll all give you access to the same tools and give you the same results.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=56)** I'm going to stay here inside of Azure data studio and come up to the view menu and use its terminal.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=63)** Then over here on the far right, I'll just click on this upward arrow to maximize the view.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=68)** Now when you start it up, it'll place you at the command prompt on your local file system.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=73)** For me, it's inside of my windows user folder.
>
> **[1:16](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=76)** The first thing that we need to do is move inside of the Docker container.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=81)** We do that with the command Docker E X E C Then the flags dash I T followed by the name of the server we want to go inside of.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=94)** Our Docker container is called PostgreSQL.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=98)** Then we're going to use the bash shell to send commands inside of the terminal.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=105)** When I press enter that moves me inside of the Docker container and it tells me that I'm at the root folder.
>
> **[1:51](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=111)** Now we're working with the Linux file system inside of the container.
>
> **[1:55](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=115)** So if you issue the DIR command it'll list out the folders and the files that exist in the container.
>
> **[2:02](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=122)** Let's make a new folder to store our database backups.
>
> **[2:06](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=126)** We do that with MK DIR and then the name of the folder.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=130)** I'll call it backups.
>
> **[2:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=133)** Now we can move into the backups folder with CD backups.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=138)** Now I'll type in the DIR command again to view the backups folder and you can see that it's currently empty.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=145)** Now we can use the PG dump command to create the database backup and store it inside of this new folder.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=151)** I'll type in PG underscore dump.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=155)** Then some options, dash capital U will specify the user account that we want to use for logging into our PostgreSQL database server.
>
> **[2:43](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=163)** The user account is simply [[PostgreSQL|postgres]].
>
> **[2:48](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=168)** Then we need the name of the database that we want to make the backup of.
>
> **[2:53](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=173)** That's the two trees DBF 4 database.
>
> **[2:59](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=179)** Next we need a greater than symbol to specify the file location for the export of the backup file.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=185)** I'm going to place this inside of our backups folder that we just created.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=189)** So I'll type in a forward slash backups.
>
> **[3:12](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=192)** Then another forward slash and the name of the output file.
>
> **[3:16](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=196)** Let's call this two trees backup dot [[SQL]] I'll press enter and the PG dump application creates a database backup and exports it to the file that we just specified.
>
> **[3:31](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=211)** Now, PG dump has a lot of configuration options.
>
> **[3:34](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=214)** As we saw with the gooey approach.
>
> **[3:36](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=216)** You can certainly dive into the documentation to see how to implement all of those using the command line but this simplified command will give us a full database backup with all the default options, which is perfect for our purposes.
>
> **[3:50](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=230)** Now let's verify that the backup file was created.
>
> **[3:53](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=233)** I'll type in the DIR command again to explore the backups folder.
>
> **[3:57](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=237)** And there is the file inside of that folder.
>
> **[4:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=240)** Finally, we just need to get this backup file out of the container so that we can work with it.
>
> **[4:06](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=246)** Let's exit out of the container.
>
> **[4:08](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=248)** This places us back in our own computer's file system.
>
> **[4:11](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=251)** And you can see I'm inside of my user's home folder.
>
> **[4:15](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=255)** Now we'll use the Docker CP command to copy a file from inside the container to somewhere else on our computer.
>
> **[4:24](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=264)** I'll say Docker CP the name of the container, PostgreSQL, followed by a colon.
>
> **[4:32](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=272)** Then the file path to the file inside of the container and that is slash backups slash two trees backup dot SQL.
>
> **[4:46](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=286)** Then a space and the file path on our local computer where you want to copy it to.
>
> **[4:50](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=290)** I'll place it into my desktop.
>
> **[4:53](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=293)** For that, I'm going to go C colon backslash users backslash my user account name, backslash desktop, backslash two trees backup dot SQL.
>
> **[5:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=309)** If you're on Mac OS or Linux, you're going to use tilda forward slash desktop to get to the same relative location.
>
> **[5:16](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=316)** I'll press the enter command, oh and it looks like it had a typo in the file pass so I'm going to press the up key to go back to the last command.
>
> **[5:23](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=323)** And it's actually just W I L B E for my personal user accounts desktop folder.
>
> **[5:28](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=328)** So I'll make that change there, press enter.
>
> **[5:31](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=331)** All right, that time it copied the file without any issues.
>
> **[5:34](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=334)** Now we can minimize the Azure data studio interface and here on my desktop is the backup file that I just copied out of the Docker container.
>
> **[5:43](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=343)** I'll double click on it to open it.
>
> **[5:44](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=344)** And you can see here is all of the texts that it contains.
>
> **[5:47](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=347)** It tells me it's a full database dump out of my PostgreSQL database server.
>
> **[5:52](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=352)** So that's the backup file.
>
> **[5:54](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=354)** Using the PG dump command line tool, we're able to create the backup.
>
> **[5:59](https://www.linkedin.com/learning/database-foundations-administration-8375189/use-pg-dump-in-the-postgres-container?u=76281980&t=359)** Then using some Docker commands, we're able to move it off of the server's container and into our own file system where we can open it, explore its contents and archive it with all of our other documents.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL]] (5), [[Microsoft Azure|Azure]] (4), [[Linux]] (3), [[SQL]] (3), [[Windows]] (2)
> **CLI Commands:** docker (9), make (3), cp (2), cd (1)
> **Tools:** terminal (4), command line (3), powershell (1), command prompt (1), bash (1)
> **Env Vars:** dir (4), sql (3), dbf (1)
> **Cross-References:** as we saw (1), go back to (1)
> **UI Navigation:** click on (2)
> **Documentation:** the documentation (1)
> **Definitions:** is called (1)

#### [Restore a Postgres database](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=0)** - [Instructor] Anyone that has management responsibility over the valuable data stored in a database, needs to be very familiar with the process of restoring a database from the backup files that have been archived.
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=13)** After all, database backups are worthless.
>
> **[0:15](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=15)** If you don't know how to make use of them when a disaster strikes.
>
> **[0:19](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=19)** So, let's pretend that the unthinkable has actually happened to our original server.
>
> **[0:24](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=24)** It was struck by lightning and fried to a crisp.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=27)** The entire business is now shut down and losing money, and we need to get the two trees database back up and running on a brand new server as fast as possible.
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=37)** On the [[PostgreSQL]] platform, this means turning once again to the command line for moving files into place and restoring them to the server.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=45)** There's a bunch of commands that we need to execute, and I've written all of them out for you in the Restore_ PostgreSQL.txt file that you'll find in the course exercise files.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=56)** I encourage you to pull that file up and follow along as we move through the process, one step at a time.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=62)** Now you can use the terminal application that's built into your OS, for instance, terminal or [[Powershell]] here on [[Windows]], or you can use the terminal window inside of [[Microsoft Azure|Azure]] Data Studio.
>
> **[1:12](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=72)** It doesn't really matter which one you choose.
>
> **[1:14](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=74)** I'm just going to use PowerShell here on Windows.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=77)** Now, the first thing we need to do is create a new PostgreSQL database server container using docker commands.
>
> **[1:24](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=84)** To do that, I'll use the Docker run command.
>
> **[1:27](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=87)** I'll give it a name and we'll call this new server two_trees_phoenix.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=94)** This is the database server that's rising from the ashes to live again.
>
> **[1:39](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=99)** Next, we need to specify a port number for this new server.
>
> **[1:43](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=103)** So that we don't have conflicts with the other servers that we're currently running inside of Docker, I'm going to put this on port 5402.
>
> **[1:50](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=110)** Then I'll type in a colon and the default PostgreSQL port is 5432.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=118)** Next, we need a -e followed by a POSTGRESQL_PASSWORD in all capital letters, an equal sign followed by the password that we want to use for our administrator account.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=130)** I'm just going to stick with my default password which is Adam123456.
>
> **[2:15](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=135)** You can feel free to choose any password that you prefer.
>
> **[2:18](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=138)** Finally, I need a -d followed by the keywords [[PostgreSQL|Postgres]]:latest.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=145)** This will use the Postgres image to create the new container.
>
> **[2:28](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=148)** I'll press the Enter button and Docker will go through and create that container for us to work with.
>
> **[2:33](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=153)** Now we can log into the container with docker exec -it, the name of the server, two_trees_phoenix followed by bash.
>
> **[2:47](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=167)** This'll use the bash shell to send commands into the server.
>
> **[2:53](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=173)** We are now logged into our new PostgreSQL container and my command prompt has changed.
>
> **[2:58](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=178)** Next, we need to create a new empty database inside of this PostgreSQL RDBMS.
>
> **[3:04](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=184)** To do that, we use the psql command.
>
> **[3:08](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=188)** I need a dash capital letter U to specify the user account that I want to use.
>
> **[3:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=193)** The default user account is just Postgres, I'll press Enter and that moves me inside of the RDBMS and my command prompt changes once again.
>
> **[3:23](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=203)** Now I can type in [[SQL]] commands.
>
> **[3:25](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=205)** We want to create a new database.
>
> **[3:30](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=210)** We'll call this two_trees_db.
>
> **[3:33](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=213)** Make sure to type these semi-colon at the end and press Enter and the new database is created inside of the server.
>
> **[3:39](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=219)** Now he'd get out of this by typing in a \q and that returns me back into the container.
>
> **[3:46](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=226)** Next, we need to make a new folder inside of the file system.
>
> **[3:50](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=230)** We can do that with mkdir and the name of the folder we want to create.
>
> **[3:54](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=234)** I'll just create a new folder called backups.
>
> **[3:59](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=239)** If I type in the dir command, you'll see the full directory listing and there is our backup folder listed right there.
>
> **[4:05](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=245)** If I wanted to move into it, I could say cd_backups and type dir again and you'll see that it's currently empty.
>
> **[4:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=253)** So this takes care of everything we need to do inside of our container.
>
> **[4:17](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=257)** Let's go ahead and exit out of this and that'll take me back into my roots folder for my current user account here on windows.
>
> **[4:24](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=264)** This means that we're back on our local file system.
>
> **[4:27](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=267)** Now I need to copy the database backup that we made in the prior movie into our new container.
>
> **[4:34](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=274)** We do that with the docker cp command.
>
> **[4:37](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=277)** Then I need the file path of where the file is currently located, and I'm just going to use the one that's right here on my desktop, export it in the previous movie.
>
> **[4:46](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=286)** There's also a copy of this inside of the exercise files for the course, if you want to use that one instead.
>
> **[4:51](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=291)** So this one on my computer is located at C:\Users\ my username backslash desktop.
>
> **[5:04](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=304)** I'll type in another backslash and the name of the file two_trees_backup.sql.
>
> **[5:12](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=312)** You'll have to customize this path to whatever matches your path on your system.
>
> **[5:17](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=317)** If you're on macOS or [[Linux]], you can use Tilda/Desktop/two_trees_backup.sql to get to the same relative location on your desktop.
>
> **[5:28](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=328)** So this is the file path to the current file of where it is right now.
>
> **[5:32](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=332)** Then I need to specify where I want it to be moved to.
>
> **[5:35](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=335)** We want to move it into our new container which was two_trees_phoenix.
>
> **[5:43](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=343)** After that, I type in a colon followed by the file path inside of the container.
>
> **[5:48](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=348)** We're going to put this in the new backups folder that we just created.
>
> **[5:50](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=350)** So I'll type a forward slash backups and another forward slash then the name of the file inside of the container.
>
> **[5:58](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=358)** We'll just name it the same thing, two_trees_backup.sql.
>
> **[6:04](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=364)** The tricky bit here if you're on windows, is that, Linux uses forward slashes as directory separators.
>
> **[6:10](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=370)** So here on the windows file path, we're using backs slashes and here on the Linux file path we're using forward slashes.
>
> **[6:18](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=378)** The other thing I want to point out is this colon here right after the name of the server.
>
> **[6:21](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=381)** It's right on the edge here, let me make this a little wider, so it's a little easier to see.
>
> **[6:25](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=385)** So, there's the name of the server container colon and then the file path inside of that container.
>
> **[6:31](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=391)** I'll press Enter and Docker moves that file into position inside of the container.
>
> **[6:37](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=397)** Next, we need to go back into the container again.
>
> **[6:47](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=407)** So once again, we'll execute docker exec-it two_trees_phoenix bash, press Enter and that moves us back into the root folder of our container.
>
> **[6:58](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=418)** Just to verify that everything's working so far I'll say cd backups, and then dir to see that the SQL file was in fact moved into the container.
>
> **[7:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=429)** Now we can restore this backup into the empty database that we created a few minutes ago.
>
> **[7:14](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=434)** To restore the database backup, you'll use the psql command.
>
> **[7:20](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=440)** Once again, we need to specify our user account with dash capital U and then Postgres.
>
> **[7:27](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=447)** Then we specify the name of the database that we want to restore.
>
> **[7:30](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=450)** In this case, the database that we just created was called two_trees db.
>
> **[7:35](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=455)** This time we need a less than symbol to point to the database, and we're going to specify the location of the backup file.
>
> **[7:44](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=464)** We put that in forward slash backups, forward slash two_trees_backup.sql.
>
> **[7:53](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=473)** Press Enter, and you'll get a lot of commands.
>
> **[7:55](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=475)** This tells me that all those tables were created and altered and all the files were restored.
>
> **[8:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=480)** Then we can exit out of the container.
>
> **[8:03](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=483)** This puts us back into our local file system and we're done with the PowerShell or the terminal application.
>
> **[8:10](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=490)** Now we can connect to the server inside of Azure Data Studio.
>
> **[8:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=493)** We'll do this just like we connect it to our other servers.
>
> **[8:16](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=496)** I'll press this button up here at the top for a new connection.
>
> **[8:19](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=499)** Our connection type this time is going to be a PostgreSQL server.
>
> **[8:23](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=503)** The server is still on our local host.
>
> **[8:26](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=506)** We're going to use the password authentication.
>
> **[8:28](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=508)** The username is Postgres.
>
> **[8:31](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=511)** The password is what we typed in a moment ago.
>
> **[8:33](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=513)** For me, that was Adam123456.
>
> **[8:37](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=517)** I'll check this box to remember the password and we'll give this connection a name I'll call it two_trees_phoenix.
>
> **[8:47](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=527)** Then we need to switch over to the Advanced tab or we can type in our custom port number 5402.
>
> **[8:54](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=534)** I'll press the OK button down here at the bottom and then press the Connect button to connect into that new server and there it is here at the top.
>
> **[9:01](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=541)** If I expand the [[Databases]] folder, you'll see the Two_trees_db that was restored, I can expand that and find all the tables and I can right click on one of the tables and choose, Select Top 1000 to verify that it actually contains our data.
>
> **[9:15](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=555)** So there is our new Two Trees Phoenix database restored from the backup that we took in the previous movie.
>
> **[9:22](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=562)** I can't stress enough how important making regular database backups and knowing exactly how to restore them is.
>
> **[9:30](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=570)** The procedure may at first seem a little bit complicated.
>
> **[9:32](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=572)** You have to shift your working context between your local file system, the file system on your server or the container and sending commands to the RDBMS itself.
>
> **[9:43](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=583)** But I encourage you to work through these steps multiple times.
>
> **[9:47](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=587)** Set up a new server container, restore the database, connect to it and verify that everything worked, then delete the container and do it all again.
>
> **[9:56](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=596)** Running through the exercise multiple times will help cement the process into your memory.
>
> **[10:02](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-postgres-database?u=76281980&t=602)** In this way, during a real emergency, where seconds count, you'll be able to recover your system through your instincts rather than have to think about each and every step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL]] (7), [[SQL]] (6), [[Windows]] (5), [[PostgreSQL|Postgres]] (5), [[Powershell]] (3)
> **CLI Commands:** docker (8), make (4), find (2), psql (2), mkdir (1)
> **Code Identifiers:** two_trees_phoenix (5), two_trees_backup (4), two_trees_db (1), cd_backups (1), macos (1)
> **Tools:** terminal (4), powershell (3), bash (3), command prompt (2), command line (1)
> **Env Vars:** rdbms (3), sql (2), postgresql_password (1)
> **File Paths:** two_trees_backup.sql (3), postgresql.txt (1), tilda/desktop/two_trees_backup.sql (1)
> **Exercise Files:** exercise files (2)
> **Analogies:** for instance (1), just like (1)

#### [Create a full SQL Server backup](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=0)** - [Instructor] [[Microsoft]]'s [[Microsoft SQL Server|SQL server]] takes a slightly different approach to making database backups and restoring them.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=7)** Unlike [[PostgreSQL]], which relies on external command line tools, SQL server uses [[SQL]] commands that you can execute right inside of the RDBMS, just like any other query that you might want to run.
>
> **[0:20](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=20)** However, the main concepts are exactly the same.
>
> **[0:24](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=24)** The backup procedure makes a copy of all of the object structures and data that are currently stored and packages it into a single file that can be archived.
>
> **[0:33](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=33)** Everything that the RDBMS needs to restore the database to its current state is contained in the backup file.
>
> **[0:40](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=40)** This allows you to move it to a protected offsite location for safekeeping, and use it to recover from, should you ever need it.
>
> **[0:49](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=49)** Let's take a look at this process here in [[Microsoft Azure|Azure]] Data Studio.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=52)** First, I'm going to right-click on the two trees database that's in the SQL server instance and choose Manage.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=58)** You can also get to this tab simply by double-clicking on the database's name and it'll open up just like this.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=64)** This gives us access to the backup button here at the very top.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=69)** That'll open up a graphical interface to the commands that are needed to be executed.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=73)** Now, everything that's required has already been filled in for us.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=77)** So the backup name includes the current date and time that the backup is being taken, which is pretty convenient.
>
> **[1:23](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=83)** The type here is set to full.
>
> **[1:26](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=86)** This will be a complete copy of everything in the database right now.
>
> **[1:30](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=90)** The other option that we have is differential or transaction log.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=94)** We'll talk about what these mean in an upcoming movie.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=97)** For now, just make sure that this is set to full.
>
> **[1:40](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=100)** The backup files box lists out the file path where the backup will be stored.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=105)** Just like with PostgreSQL, it's important to remember that this file path is referring to the file system the server is running on.
>
> **[1:54](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=114)** This is not the local file system of our personal computer.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=118)** So this folder path, VAR/OPT/MSSQL/data exists on the [[Linux]] file system that's inside of our docker container.
>
> **[2:08](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=128)** The [[Representational State Transfer (REST)|rest]] of the options below will allow us to fine tune the backup.
>
> **[2:12](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=132)** You can apply encryption if you have the appropriate keys available, for example, or include the backup in something that SQL server calls a backup media set.
>
> **[2:21](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=141)** Essentially, this is a feature of SQL server that helps you manage multiple backups of the same database.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=147)** Many of these options down below are unique to SQL server, and each RDBMS platform has different technologies that they use for making and protecting your backups.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=157)** So I don't want to get too far into the specifics of our platform.
>
> **[2:40](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=160)** We can just stick to the defaults and stay focused on the larger picture.
>
> **[2:45](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=165)** Now this entire panel, and all of these options, are used to collect information so that Azure Data Studio can write out the appropriate SQL command.
>
> **[2:54](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=174)** To see what this looks like, press the script button here at the very bottom.
>
> **[3:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=180)** This opens up a new query window and populates it with the exact command needed to create our database backup.
>
> **[3:08](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=188)** We can modify it just like any other query command.
>
> **[3:10](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=190)** For instance, I'm going to space things out a little bit by entering in a couple of line breaks.
>
> **[3:15](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=195)** This will make it easier to read.
>
> **[3:19](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=199)** So the command is going to be backup database, the name of the database, then we have the option of to disc, and it lists out to the exact file path where the backup file will be located, and it includes the .bak file extension.
>
> **[3:33](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=213)** Then we have some additional parameters that list out all of the different options that we had in that dialog window that we had on the right side of the screen just a moment ago.
>
> **[3:40](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=220)** Now, just like any other query, we can copy this text, include it in a store procedure, or save it to an external script file.
>
> **[3:49](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=229)** This allows us to bypass the graphical interface altogether.
>
> **[3:53](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=233)** In fact, let's just go ahead and copy all of this text to our clipboard.
>
> **[3:56](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=236)** Then I can close out of this tab, and I'm not going to save any changes to it.
>
> **[4:01](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=241)** I can also close this manage tab.
>
> **[4:03](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=243)** Now, anytime I want to do a backup of the two trees database, I simply right-click on the server, choose new query and type in that text.
>
> **[4:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=253)** I'll just paste it from the clipboard.
>
> **[4:15](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=255)** You might also want to change the name of the output file.
>
> **[4:17](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=257)** So I'm going to leave it on the same file path, but I'll change the file's name to two_trees_sql_server.bak.
>
> **[4:28](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=268)** When you're ready, just like any other query, press the run button to execute this command.
>
> **[4:33](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=273)** That'll go through the process of creating our backup and you can see that it finished with a backup being created on the file system.
>
> **[4:40](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=280)** Now we can use the terminal window to [[Fetch]] that file and pull it out of the container and store it on our local file system.
>
> **[4:47](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=287)** If you don't have the terminal tab opened up here, you can go up to the view menu and choose terminal here to open it.
>
> **[4:56](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=296)** Then we'll use the Docker CP command to reach into the container and copy out that file.
>
> **[5:02](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=302)** The command is Docker CP.
>
> **[5:04](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=304)** The name of the container, which in this case is SQL server 2019, a colon followed by the file path within the server that we want to go to.
>
> **[5:14](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=314)** This file path is /var/opt /mssql /data and another forward slash followed by the file name: two_trees_sql_server.bak.
>
> **[5:31](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=331)** Followed by a space, then we list out the local file system path where we want to copy the file to.
>
> **[5:37](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=337)** On my [[Windows]] computer, that's going to be C:\users, backslash my username \desktop and backslash and the file name: two_trees_sql_server.bak.
>
> **[5:55](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=355)** As always, you'll want to modify this file path to match a location on your computer.
>
> **[6:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=360)** I'll press the enter button and the Docker CP command will reach into the server and pull out the file.
>
> **[6:06](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=366)** Now we can minimize Azure Data Studio and take a look here on the desktop.
>
> **[6:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=369)** And there is the backup file that we just pulled out of the container.
>
> **[6:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=373)** So I hope this gives you a good idea about the breadth of techniques that are used by various RDBMS platforms.
>
> **[6:20](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=380)** SQL server uses query commands executed within the RDBMS, where PostgreSQL uses file system commands executed on the server's operating system.
>
> **[6:31](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=391)** Though the specific procedure is very different between these two platforms, the end result is the same.
>
> **[6:37](https://www.linkedin.com/learning/database-foundations-administration-8375189/create-a-full-sql-server-backup?u=76281980&t=397)** We wind up with a single file that could be archived and protected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (8), [[PostgreSQL]] (3), [[Microsoft Azure|Azure]] (3), [[SQL]] (2), [[Microsoft]] (1)
> **Env Vars:** sql (10), rdbms (5), var (1), opt (1), mssql (1)
> **CLI Commands:** docker (4), cp (3), make (2)
> **Analogies:** just like (6), for example (1), picture (1), for instance (1)
> **Tools:** terminal (3), command line (1)
> **Code Identifiers:** two_trees_sql_server (3)
> **UI Navigation:** right-click (2), go to (1)
> **Definitions:** is a  (1)

#### [Restore a SQL Server database](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=0)** - Restoring a database on [[Microsoft SQL Server|SQL server]] requires a similar procedure as making the initial backup.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=7)** You use an [[SQL]] command to read the backup file and recreate the database.
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=13)** One of the major differences between SQL server and [[PostgreSQL]] in this area is that PostgreSQL needs an empty database to restore into whereas SQL server creates the database as part of the restoration process.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=28)** Now, instead of creating yet another Docker container, I'm just going to demonstrate with the SQL server instance that we already have.
>
> **[0:35](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=35)** In the previous movie, I created a backup for the Two Trees database.
>
> **[0:40](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=40)** Let's delete it from the server and then restore it from the backup.
>
> **[0:44](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=44)** Now, I wouldn't say that deleting a mission critical database is a common operation but let's suppose that we have a disgruntled employee on our hands and they decided to wreck havoc on the company, they right click on the server and choose new query, then they issue the following commands.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=63)** First, they alter the database two_trees_dbf4 and set the mode to single user.
>
> **[1:10](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=70)** This will effectively kick all current users out of the database then they can drop the database.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=81)** They run both of these commands together and the server deletes the database from the system.
>
> **[1:27](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=87)** We can now go ahead and close this tab and take a look at the damage that they've done.
>
> **[1:31](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=91)** I'm going to right click on the database's folder and choose refresh and you can see sure enough our Two Trees database no longer exists.
>
> **[1:39](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=99)** After the dust settles, it's your job to get things back to normal.
>
> **[1:43](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=103)** To do this, we can open up a new query window and connect it to the master database.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=109)** Make sure that the master database is the one listed here in the drop down menu in our new query window then we just need a simple command.
>
> **[2:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=120)** We're going to restore the database, two_trees_dbf4
>
> **[2:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=129)** from the file that we previously saved to disk.
>
> **[2:15](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=135)** We do that with an equal sign, a capital letter N and then inside of single quotation marks, we'll list out the full file path to the backup file.
>
> **[2:24](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=144)** Inside of the Docker container, our backup file was stored at /var/opt/mssql/data
>
> **[2:34](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=154)** and the file was named two_trees_sql_server.bak.
>
> **[2:43](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=163)** And that's all you need for a basic SQL server database restoration.
>
> **[2:47](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=167)** Press the Run button and your database is recreated exactly as it was when the backup was made.
>
> **[2:54](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=174)** If I go back over to the SQL server instance and refresh it, you'll see that the [[Databases]] folder now contains our Two Trees database back where it was originally.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=185)** And that's what a basic database restoration looks like on SQL server.
>
> **[3:10](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=190)** There are a number of advanced options that you can include in this command depending on the specifics of your databases configuration.
>
> **[3:17](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=197)** So a full review of your chosen RDBMS platforms documentation will still need to be required before you can roll out a tailor-made workflow to your organization.
>
> **[3:27](https://www.linkedin.com/learning/database-foundations-administration-8375189/restore-a-sql-server-database?u=76281980&t=207)** And as always, you'll want to make sure that any backup and restore procedures are fully tested and documented as part of your disaster preparedness preparations so that you're ready to jump into action should the need ever arise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (7), [[PostgreSQL]] (2), [[Databases]] (2), [[SQL]] (1)
> **Env Vars:** sql (8), rdbms (1)
> **CLI Commands:** docker (2), make (2)
> **UI Navigation:** click on (2)
> **Code Identifiers:** two_trees_sql_server (1)
> **Definitions:** is a  (1)
> **Speakers:** - restoring (1)

#### [Incremental and differential backups](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=0)** - [Instructor] In addition to making a full backup of everything the database contains, many RDBMS platforms have support for making partial or incremental backups.
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=13)** As a database grows in size from a few megabytes up to terabytes, gigabytes, and potentially, many petabytes of data, the costs associated with backing up all of that data, also increase.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=26)** Not only do you need many multiples worth of available storage capacity, but the time required to make the backup copy can stretch out from seconds to hours, or even days.
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=37)** It's not uncommon to find that the length of time required for each backup to complete, exceeds the frequency at which you'd want to make them.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=46)** Obviously, if you're trying to make a backup every hour and each backup takes a full day to complete, that's not a viable backup strategy.
>
> **[0:54](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=54)** You'll be nearly a month behind schedule at the end of your very first day.
>
> **[0:59](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=59)** The solution is to reduce the volume of data that needs to be backed up by focusing on just the items that have changed since the last backup was made.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=69)** By targeting just the changes, often referred to as the Delta, that have occurred between two points in time, you can minimize the backup size and duration.
>
> **[1:20](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=80)** These kinds of backups are called incremental or differential backups.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=85)** Different RDBMS platforms will use different terminology here for this type of backup strategy, but they're effectively the same thing.
>
> **[1:32](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=92)** Here's how an incremental backup strategy will work.
>
> **[1:36](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=96)** Our primary database starts out at a certain size.
>
> **[1:39](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=99)** This bar represents all of the data that it contains.
>
> **[1:43](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=103)** We first need to make one full backup that contains everything.
>
> **[1:47](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=107)** At this point, both the backup and the primary database are identical.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=112)** This full backup will serve as our starting point.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=116)** Then as the primary database continues to get used, it begins to change.
>
> **[2:01](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=121)** Data is added, updated, or deleted, tables are created or dropped, new users are established, and old ones are removed.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=130)** Over time, the difference between the primary database and the backup, gets larger.
>
> **[2:16](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=136)** Rather than make another full backup that contains everything again, we can just focus on the items that are different.
>
> **[2:22](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=142)** This is our first incremental backup.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=145)** It contains just the Delta, or the information needed to modify the full backup and synchronize it with the primary database again.
>
> **[2:33](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=153)** This process is repeated.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=155)** The primary database continues to change and another incremental backup is made to capture those changes.
>
> **[2:41](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=161)** None of these three backups alone will contain everything that the primary database now contains, but as a group, they will allow you to recover your database entirely.
>
> **[2:52](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=172)** Since the incremental backups are small, they complete much quicker, and because they complete quicker, it's easier to make them more often, ensuring that the contents of your backups never strays too far from the current state of your primary database.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=189)** There is a downside to this approach, though.
>
> **[3:11](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=191)** It adds up some additional complexity to the restoration process.
>
> **[3:15](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=195)** Should you need to restore your database from the backup, you now need to perform multiple operations.
>
> **[3:21](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=201)** First, restore the full database backup, then apply each incremental backup in the proper sequence.
>
> **[3:29](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=209)** If you make one full backup on January 1st and then and only make incremental backups every day for the [[Representational State Transfer (REST)|rest]] of the year, you would potentially have hundreds of incremental backup files that need to be kept track of.
>
> **[3:41](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=221)** Restoring from hundreds of incremental backups will increase the length of time required to recover the database, and if any one of the incremental backup files goes missing, or gets corrupted, then the entire restoration process will fail and you'll be left with nothing.
>
> **[3:58](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=238)** The most common way to incorporate incremental backups, is to alternate between different types.
>
> **[4:04](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=244)** For instance, you can make a single full backup at night when the database activities are low, then make hourly incremental backups throughout the day.
>
> **[4:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=253)** The next evening you'll make another full backup and then switch back to hourly incremental backups throughout the next workday.
>
> **[4:20](https://www.linkedin.com/learning/database-foundations-administration-8375189/incremental-and-differential-backups?u=76281980&t=260)** This provides a good balance, and ensures that any potential restorations will, at most, require only a couple of dozen backup files in the process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (11), find (1)
> **Env Vars:** rdbms (2)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Point-in-time restores](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=0)** - [Instructor] Full and incremental backup files are useful for recovering the database to the exact state that it was in when the backup was made.
>
> **[0:10](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=10)** But what if something happens between backups and you need to restore to an arbitrary point in time?
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=16)** Well, the more advanced RDBMS platforms have a solution for this situation as well.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=22)** The first thing we need to understand is that our [[Relational Databases]] are made up of two separate kinds of files on our discs.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=30)** The data file stores the current state of your database.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=34)** Whenever you create a new table or add a lot of data the data file is updated to reflect those changes.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=41)** The second type of file that we have is called the transaction log.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=46)** The log maintains a list of all the changes that are made to your database.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=51)** You can think of the transaction log like the receipt tape that comes out of an old style adding machine.
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=57)** The log contains a sequential record of every change that's made to the database.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=62)** And it includes a time and date stamp for when each change was made.
>
> **[1:07](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=67)** A tastier analogy, would be to think about these two types of files as your favorite dessert.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=73)** The data file is a finished cake, ready to eat.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=77)** The log file is the recipe and all of the ingredients and steps that were used to make the cake.
>
> **[1:24](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=84)** If you have a recipe and the ingredients, you can always follow the directions and bake another cake.
>
> **[1:29](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=89)** But if all you have is the cake, then it's difficult to work backwards and figure out what the recipe was that made it.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=97)** Sequel server has a function that will allow us to take a peek at the transaction log for our [[Databases]].
>
> **[1:43](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=103)** Let's right click on the two trees database in the [[Microsoft SQL Server|SQL Server]] instance and choose New Query and then we can issue the following command.
>
> **[1:51](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=111)** SELECT*FROM fn_dblog, and then inside of parentheses NULL, NULL.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=118)** The results will display information from the databases transaction log.
>
> **[2:03](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=123)** Now all of this information isn't meant to be very user-friendly.
>
> **[2:06](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=126)** The results are mostly stored for the RDBMS to make use of.
>
> **[2:11](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=131)** But there's some interesting things that we could take a look at here.
>
> **[2:14](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=134)** The first column LSN, stands for log sequence number.
>
> **[2:19](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=139)** This tells the database engine, which steps took place in which order.
>
> **[2:23](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=143)** The next column operation, gives information about what the steps did.
>
> **[2:28](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=148)** If you read through you'll find references to things like begin checkpoint or end checkpoint.
>
> **[2:33](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=153)** We have some bits that are set here, we have some modified columns there and so on.
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=158)** So these are all of the operations that have modified our database in some way.
>
> **[2:43](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=163)** Now, how does this help us in the backup and restore process?
>
> **[2:48](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=168)** Well, if the transaction log is the recipe that's used to create your database, you can see that having a copy of it would be handy for rebuilding it from scratch.
>
> **[2:58](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=178)** Making a copy of the transaction log is like passing a favorite family recipe down from one generation to the next.
>
> **[3:06](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=186)** Just like following grandma's favorite cake recipe, recovering a database using the transaction log, involves starting at the beginning and replaying each operation in sequence.
>
> **[3:17](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=197)** This will get you to the exact same state as a full backup of the data file.
>
> **[3:21](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=201)** Here's the difference though?
>
> **[3:23](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=203)** You don't need to complete all of the steps when restoring a database using the transaction log.
>
> **[3:29](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=209)** You can stop performing operations at any arbitrary point in time.
>
> **[3:34](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=214)** This allows you to rewind the databases state and effectively undo the last operations that were made.
>
> **[3:41](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=221)** This type of restore isn't typically useful in situations where the entire database is lost due to a disaster.
>
> **[3:48](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=228)** It's more for recovering from less severe accidents or those oops moments where someone inadvertently deletes an important table.
>
> **[3:57](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=237)** A transaction log backup and restore can allow you to go back right before the accidental deletion occurred, and start again from that point.
>
> **[4:06](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=246)** I'm sure you can think of many times in your life where you'd like to rewind just a few minutes and do something over again.
>
> **[4:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/point-in-time-restores?u=76281980&t=253)** Transaction log backups, and point in time restores allow your database to do exactly that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (3), [[Relational Databases]] (1), [[Microsoft SQL Server|Sql server]] (1)
> **Env Vars:** rdbms (2), null (2), sql (1), select (1), lsn (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is called (1), is a  (1), stands for (1)
> **Code Identifiers:** fn_dblog (1)
> **SQL:** select (1)
> **UI Navigation:** click on (1)
> **Analogies:** just like (1)


### 2. Server Security

[↑ Back to Table of Contents](#table-of-contents)

#### [Principals and securables](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=0)** - [Instructor] In addition to protecting a database from external calamities with a robust backup and restore strategy, administrators are also responsible for securing the information within the database.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=14)** The security of the server's contents is maintained through access permissions and user accounts.
>
> **[0:20](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=20)** It should be no surprise that [[Databases]] often store sensitive information.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=25)** They might be trade secrets or personal information about users or anything else that should not be made available to the general public.
>
> **[0:33](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=33)** Controlling who has access to what is an important thing to think about.
>
> **[0:39](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=39)** Not every user of the database needs to have full access to everything that it contains.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=45)** Just like in the real world, database users will have specific areas of responsibility.
>
> **[0:50](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=50)** A [[Human Resources (HR)|human resources]] manager probably shouldn't be able to edit product inventory quantities, and a customer service agent probably shouldn't be able to adjust employee salaries.
>
> **[1:01](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=61)** By compartmentalizing the contents of the database and assigning permissions to different users, you can secure the information that it contains and ensure that only the appropriate people have access.
>
> **[1:14](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=74)** [[Microsoft]] uses two terms in the documentation for [[Microsoft SQL Server|SQL server]] that I think are really useful, principals and securables.
>
> **[1:23](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=83)** Though other RDBMS platforms don't use these terms specifically, the general concepts still apply, and I think they're helpful in understanding how a database is protected from unauthorized access.
>
> **[1:36](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=96)** Principals are generally thought of as individual people.
>
> **[1:40](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=100)** Each end user is a principal.
>
> **[1:43](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=103)** They don't have to be an actual human, though.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=105)** They could be a client application or an automated terminal.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=109)** Principals can also be groups of users and individuals may have membership in a number of different groups.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=116)** By grouping users together, you can manage their access as a single unit.
>
> **[2:02](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=122)** Everyone that's a member of the group will have the same ability to access the database's contents.
>
> **[2:08](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=128)** Securables are any of the database's resources.
>
> **[2:12](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=132)** Objects, such as tables, views, or stored procedures are considered securable objects.
>
> **[2:19](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=139)** Like with principles, you can group securable objects together to make management easier.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=145)** We've actually been using these groups all along in the organization of our Two Trees database.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=151)** Schemas, such as the inventory schema, are used to group related tables and other objects together in the structure of the database.
>
> **[2:40](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=160)** So principals are the individual users or groups.
>
> **[2:44](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=164)** Securables are the database objects and schemas.
>
> **[2:48](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=168)** The way that they connect is through a system of permissions.
>
> **[2:52](https://www.linkedin.com/learning/database-foundations-administration-8375189/principals-and-securables?u=76281980&t=172)** By explicitly giving permission for a principal to access a securable, you can control who can access what.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[Human Resources (HR)|Human resources]] (1), [[Microsoft]] (1), [[Microsoft SQL Server|Sql server]] (1)
> **Analogies:** such as (2), just like (1)
> **Env Vars:** sql (1), rdbms (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Documentation:** the documentation (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Server authentication and login accounts](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-authentication-and-login-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-authentication-and-login-accounts?u=76281980&t=0)** - [Instructor] The first step in securing the contents of a database is to be able to identify different users so that you know exactly who they are.
>
> **[0:10](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-authentication-and-login-accounts?u=76281980&t=10)** This will allow the relational [[Database Management]] system to assign the proper permissions.
>
> **[0:15](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-authentication-and-login-accounts?u=76281980&t=15)** The simplest way to verify that a principal user is who they say they are is with a username and password.
>
> **[0:23](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-authentication-and-login-accounts?u=76281980&t=23)** These are typically stored within the database server itself.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-authentication-and-login-accounts?u=76281980&t=26)** Then in order to log in, all the user needs to know is their assigned name and password and the credentials are matched against a known principal's account that was created previously.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-authentication-and-login-accounts?u=76281980&t=38)** When we created our database servers in Docker, we created a default administrator login account with this method.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-authentication-and-login-accounts?u=76281980&t=45)** In [[Microsoft SQL Server|SQL server]], that user has the name sa, which stands for system administrator.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-authentication-and-login-accounts?u=76281980&t=52)** [[PostgreSQL]] uses the default name [[PostgreSQL|postgres]] for its administrator account.
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-authentication-and-login-accounts?u=76281980&t=57)** These are the two accounts that we've been using all along and since they have full administrator privileges, they can perform any task on the server.
>
> **[1:07](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-authentication-and-login-accounts?u=76281980&t=67)** These top level accounts also have the ability to create new principal user accounts and assign permissions to database securables.
>
> **[1:15](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-authentication-and-login-accounts?u=76281980&t=75)** Basic username and password authentication is simple to set up, because the RDBMS platforms have support built right in.
>
> **[1:24](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-authentication-and-login-accounts?u=76281980&t=84)** There's no need for external resources or connecting to authentication servers, but they're also the least secure.
>
> **[1:31](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-authentication-and-login-accounts?u=76281980&t=91)** Anyone that obtains a valid name and password legally or illegally can access the database.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-authentication-and-login-accounts?u=76281980&t=98)** And it's difficult to protect against user account credentials that have been hacked or stolen.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-authentication-and-login-accounts?u=76281980&t=104)** And finally, they're difficult to manage for organizations that might have hundreds or thousands of discrete user accounts.
>
> **[1:51](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-authentication-and-login-accounts?u=76281980&t=111)** Because of this, the more advanced RDBMS platforms also support alternative authentication protocols.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-authentication-and-login-accounts?u=76281980&t=118)** Large organizations may use [[Microsoft]]'s [[Active Directory]] domain services to identify users or a protocol named Kerberos.
>
> **[2:07](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-authentication-and-login-accounts?u=76281980&t=127)** These systems allow organizations to efficiently manage very large workforces and use cryptographic keys and certificates to ensure the correct access permissions are applied to each individual user as they access resources across the entire organization.
>
> **[2:24](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-authentication-and-login-accounts?u=76281980&t=144)** And there's a benefit to end users, as well.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-authentication-and-login-accounts?u=76281980&t=147)** Domain authentication protocols create single sign-on experiences that provide access to their computer operating system, their email account, and their [[Databases]] all at once.
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-authentication-and-login-accounts?u=76281980&t=158)** Further, the incorporation of biometric authentication, such as facial recognition or fingerprint scanners, or physical security badges can be used to create an environment that is much more difficult to hack than a simple password.
>
> **[2:53](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-authentication-and-login-accounts?u=76281980&t=173)** These enterprise-grade authentication methods are important in today's world, where the threat of ransomware attacks and other intrusion hacks are a very real concern.
>
> **[3:04](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-authentication-and-login-accounts?u=76281980&t=184)** For our purposes, though, in this course, we're going to stick with the built-in support for the basic username and password login accounts.
>
> **[3:12](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-authentication-and-login-accounts?u=76281980&t=192)** This will allow us to create accounts for some additional users with limited permissions, then jump into their shoes and explore how the database looks from their perspective.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Database Management]] (1), [[Microsoft SQL Server|Sql server]] (1), [[PostgreSQL]] (1), [[PostgreSQL|Postgres]] (1), [[Microsoft]] (1)
> **Env Vars:** rdbms (2), sql (1)
> **CLI Commands:** docker (1)
> **Definitions:** stands for (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Granting and revoking permissions](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=0)** - [Instructor] As a system administrator, you have the ability to say who can do what in your database.
>
> **[0:06](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=6)** Once a user has authenticated with the server, the RDBMS looks to see what set of permissions have been granted and what activities there'll be allowed to perform.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=16)** You may be familiar with read write permissions on your computer's file system.
>
> **[0:21](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=21)** If you set a file as read only, it means that you can open and review it but you can't make any changes to it.
>
> **[0:29](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=29)** The same granular level of control applies with database permissions and securables.
>
> **[0:35](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=35)** Just like with creating a new table object within the database, you can add users and define permissions using [[SQL]] commands and keywords.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=43)** The grant command is used to give a specific permission to a specific principal user or group account.
>
> **[0:50](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=50)** The grant command is how you define what users are allowed to do.
>
> **[0:55](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=55)** The opposite of that is the revoke command.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=58)** It's used to remove a previously granted permission from a user's account.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=63)** New user accounts in a database are typically given only the bare minimum of permissions.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=69)** This means that their login won't fail but they won't be able to actually do anything after the RDBMS lets them in.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=77)** It's up to you, the database administrator to explicitly grant them access so that they can perform the actions related to their job.
>
> **[1:27](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=87)** These specific actions that you're granting to users are the ability to execute the same SQL command keywords that we've been working with since the very beginning, select, insert, update, delete, truncate and so on.
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=102)** All of these commands require permissions in order to run on a securable object.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=109)** Put everything together and you wind up with some straightforward commands to give permissions to your database users.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=116)** Now as always, the specific syntax for how this is accomplished will vary from platform to platform.
>
> **[2:02](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=122)** But in general, it'll look something like this.
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=125)** Say you want to allow username alan to be able to read information in a table called employees.
>
> **[2:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=133)** The command to allow that would be GRANT SELECT ON TABLE employees TO Alan.
>
> **[2:19](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=139)** Alan will now be allowed to read any information from that table but they won't be able to make modifications.
>
> **[2:26](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=146)** Specifically they can't update, delete or insert any data because we didn't specifically grant those activities with the grant statement.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=155)** Alan will now be allowed to read any information from that table but they won't be able to make modifications.
>
> **[2:41](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=161)** Specifically they can't update, delete or insert any data because we didn't specify those activities in the grant statement.
>
> **[2:50](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=170)** To undo this action, you would execute the command REVOKE SELECT ON TABLE employees FROM alan.
>
> **[2:58](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=178)** Now Alan doesn't have any permissions to access that table again.
>
> **[3:02](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=182)** Alternatively you could choose to allow a different permission.
>
> **[3:05](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=185)** For instance, GRANT INSERT ON TABLE employees TO alan.
>
> **[3:10](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=190)** If this was their only permission, Alan would be able to add new rows to the table but they wouldn't be able to update that row or read it back out of the table.
>
> **[3:19](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=199)** To be able to read and insert a row, you could give them this permission, GRANT SELECT, INSERT ON TABLE employees TO alan.
>
> **[3:28](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=208)** This will allow Alan to read existing data and add new rows but they still can't change anything or delete any rows.
>
> **[3:36](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=216)** Finally, if you wanted to give Alan full access to the table you could say either GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE employees TO alan or more simply GRANT ALL PRIVILIGES ON TABLE employees TO alan.
>
> **[3:51](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=231)** Now Alan can do whatever they want with the employees table with no restrictions.
>
> **[3:56](https://www.linkedin.com/learning/database-foundations-administration-8375189/granting-and-revoking-permissions?u=76281980&t=236)** Those are just a few examples of how you grant and revoke specific permissions to securable objects in your database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2)
> **Env Vars:** table (6), grant (5), select (4), insert (3), rdbms (2)
> **SQL:** select (4), update (1)
> **CLI Commands:** make (3)
> **Definitions:** means that (2)
> **Analogies:** just like (1), for instance (1)
> **API Endpoints:** delete
 (1)
> **Speakers:** - [instructor] (1)

#### [PostgreSQL role permissions](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=0)** - [Instructor] We've talked a lot about some of the concepts around managing database security through principal user accounts.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=7)** Let's put that into practice in the [[PostgreSQL]] database.
>
> **[0:11](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=11)** The first thing that we need to know is that PostgreSQL doesn't make a distinction between individual users and user groups.
>
> **[0:19](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=19)** Every principal account is considered a role, and every role can have several members.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=26)** If you take a look at the connection sidebar in the PostgreSQL server, below the [[Databases]] folders, you'll find a folder for the roles.
>
> **[0:35](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=35)** Inside are a number of different roles that come pre-configured on the server.
>
> **[0:39](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=39)** One of them at the very bottom is the [[PostgreSQL|postgres]] role.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=43)** This is the administrator account that we've been using since the very beginning to log into the server and execute commands.
>
> **[0:50](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=50)** If you go back up and right click on the two_trees database and choose New Query, the query tab uses the permissions of the postgres role.
>
> **[0:59](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=59)** You can see that in the name of the tab up here at the top.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=62)** Now it might be cut off, but if you hover your mouse over it, you'll see the full text.
>
> **[1:07](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=67)** And at the very end, you'll see the name of the user account that we're using.
>
> **[1:11](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=71)** Inside the parentheses, it says postgres.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=73)** So any [[SQL]] commands that we run in this tab will execute with the permissions given to the postgres account.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=81)** So now let's create a new user.
>
> **[1:24](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=84)** To do that, I'll send the command CREATE ROLE, and we'll name it, I'll call this person samantha WITH LOGIN, then PASSWORD.
>
> **[1:36](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=96)** And inside of single quotation marks, we'll put Samantha's new login password.
>
> **[1:40](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=100)** I'll just use sam123.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=104)** I'll press the Run button, and that creates Sam's role.
>
> **[1:48](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=108)** Now we can go back over here to the Roles folder and right click it and choose Refresh.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=112)** And there she is down here at the bottom.
>
> **[1:55](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=115)** Now we can create a new connection to the database server but use Samantha's login credentials instead.
>
> **[2:01](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=121)** To do this, I'll come up here to the very top and press this button with the plus to create a new connection.
>
> **[2:07](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=127)** Then, we'll fill in the details.
>
> **[2:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=129)** The connection type will be PostgreSQL.
>
> **[2:11](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=131)** The server name is the same as what we've been using before.
>
> **[2:15](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=135)** It's just localhost.
>
> **[2:17](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=137)** We'll use password authentication.
>
> **[2:19](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=139)** The username is samantha.
>
> **[2:22](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=142)** Her password is sam123.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=145)** And I'll choose to remember the password.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=147)** Next, we'll put this in the PostgreSQL group, just so it's combined over here on the left-hand sidebar, and we'll give it a name.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=155)** I'll call this Samantha's Login.
>
> **[2:39](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=159)** Then, we need to make sure we set the port.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=162)** So I'll press the Advanced button here and then come up to Port.
>
> **[2:45](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=165)** And the port for our PostgreSQL server was 5401.
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=169)** All right, let's press Okay and then press Connect, and it should connect to the database server again.
>
> **[2:55](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=175)** So now the connection sidebar has two connections in the same server.
>
> **[2:59](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=179)** This one here at the top uses the administrator credentials, and the one at the bottom uses Samantha's credentials.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=189)** I'm going to close this management tab that just opened for Samantha's login.
>
> **[3:12](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=192)** Going to close that down there.
>
> **[3:14](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=194)** And then, I'm going to expand the Databases folder underneath Samantha's login, right click on the two_trees database and choose New Query.
>
> **[3:21](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=201)** The tab name of this one will confirm the user account that we're using.
>
> **[3:25](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=205)** Inside the parentheses, it says Samantha.
>
> **[3:28](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=208)** Now I'm going to drag this tab to the right-hand side of the screen, so that we can see both tabs at the same time.
>
> **[3:33](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=213)** Any commands written in the left-hand tab are executed with the administrator permissions.
>
> **[3:39](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=219)** Any commands executed in the right tab will use Samantha's permissions.
>
> **[3:44](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=224)** Let's first see if Samantha can access any data.
>
> **[3:48](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=228)** Over in her tab, on the right-hand side of the screen, I'll say SELECT star FROM inventory.categories.
>
> **[3:59](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=239)** When I press the Run button, we're going to get an error message that says permission was denied for the schema inventory.
>
> **[4:06](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=246)** This makes sense , because we haven't yet given her any permissions to access any of the databases' objects.
>
> **[4:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=253)** Turning back to the administrator account, we can elevate Samantha's permissions so that she can read some data out of the database.
>
> **[4:22](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=262)** I'll click my mouse here at the very end then come down to line number 2.
>
> **[4:26](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=266)** Then, we can GRANT usage ON SCHEMA.
>
> **[4:30](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=270)** We'll allow Samantha to access the inventory schema.
>
> **[4:36](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=276)** And I say TO samantha.
>
> **[4:40](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=280)** Then, on line number 3, we can grant the specific permissions.
>
> **[4:45](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=285)** So SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA inventory
>
> **[5:02](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=302)** TO samantha.
>
> **[5:05](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=305)** Now I can highlight lines 2 down through 5 to grant her the permissions on the inventory schema.
>
> **[5:11](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=311)** Press the Run button and everything is completed successfully.
>
> **[5:15](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=315)** Now if we go back over to the right to Samantha's connection and re-execute the SELECT statement, this time we get the results back.
>
> **[5:24](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=324)** She's now been given permission to select data out of any table in the inventory schema.
>
> **[5:29](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=329)** What about the other tables in the database though?
>
> **[5:32](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=332)** Let's try and select everything out of the sales.customers table.
>
> **[5:38](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=338)** This time, when I run this SELECT statement, we get the permission denied error again.
>
> **[5:42](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=342)** As you'd expect, she's still blocked from accessing the tables in the sales schema, because we didn't explicitly say that she was allowed to.
>
> **[5:52](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=352)** Now if you want us to remove those permissions from Samantha's account, we just need to revoke each one in turn.
>
> **[5:57](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=357)** Let me come down here to line number 7 and move this around so I can see a little bit more of the screen.
>
> **[6:04](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=364)** To remove her permissions, we can just say REVOKE ALL PRIVILEGES ON SCHEMA inventory FROM samantha and REVOKE USAGE ON SCHEMA inventory FROM samantha.
>
> **[6:28](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=388)** All right, lines 7 and 8.
>
> **[6:30](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=390)** We've now removed the permissions from Samantha's account.
>
> **[6:33](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=393)** And if we try and pull information out of the table again, I'll change this back to inventory.categories.
>
> **[6:41](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=401)** And when I run it, once again, she has permission denied for schema inventory.
>
> **[6:48](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=408)** Finally, if you wanted to remove Samantha's user account altogether, you can execute the following commands: DROP OWNED BY samantha and DROP ROLE samantha.
>
> **[7:05](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=425)** I'll execute lines 10 and 11, and that'll remove Samantha's account from the Roles folder.
>
> **[7:10](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=430)** If I go back over here on the left and expand the Roles folder, underneath my PostgreSQL database... Actually, if I right click and choose Refresh, and you'll see that she's been removed.
>
> **[7:19](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=439)** Now that Samantha no longer has a login account, we can remove her connection from the [[Microsoft Azure|Azure]] Data Studio sidebar.
>
> **[7:25](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=445)** Just right click on Samantha's login and choose Delete Connection.
>
> **[7:30](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=450)** This puts us right back to where we were at the beginning of the exercise, and we've come full circle.
>
> **[7:35](https://www.linkedin.com/learning/database-foundations-administration-8375189/postgresql-role-permissions?u=76281980&t=455)** Adding user accounts to your PostgreSQL database and assigning a limited set of permissions allows you to maintain control over the tables and data that each user can access.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL]] (8), [[PostgreSQL|Postgres]] (4), [[Databases]] (3), [[SQL]] (1), [[Microsoft Azure|Azure]] (1)
> **Env Vars:** select (4), schema (4), role (2), revoke (2), drop (2)
> **SQL:** select (4), update (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** click on (3)
> **Code Identifiers:** two_trees (2)
> **API Endpoints:** delete
 (1)
> **Speakers:** - [instructor] (1)

#### [SQL Server user permissions](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=0)** - [Instructor] Creating user accounts and assigning permissions in [[Microsoft SQL Server|SQL server]] is similar to [[PostgreSQL]], but there's a few minor differences.
>
> **[0:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=9)** The first difference is that SQL server treats individual users and groups separately.
>
> **[0:15](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=15)** In the sidebar for the SQL server instance, expand the Security folder and you'll find a folder for Logins.
>
> **[0:23](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=23)** These are the individual user accounts.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=26)** Below that we have a folder for Server Roles.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=30)** These are the group accounts.
>
> **[0:32](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=32)** Each login can be assigned to one or more server roles and these will confer a number of different permissions that help split up administrative responsibilities.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=43)** For instance, there's a role for the security administrators, which will give access to a different set of tools and permissions from the disk administrators.
>
> **[0:53](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=53)** For now, we're going to focus on just the individual accounts found in the logins folder.
>
> **[0:59](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=59)** Here, just like in PostgreSQL, we see a number of different login accounts.
>
> **[1:03](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=63)** The SA account is the system administrator account that we've been using throughout this series.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=69)** The other thing that's different here in SQL server is that server logins are treated separately from database users.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=77)** It's entirely possible to be able to log into a server, but not have access to any [[Databases]].
>
> **[1:24](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=84)** This allows people to have permissions to perform server maintenance without being able to actually access any data that may be stored on the server.
>
> **[1:32](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=92)** If you expand the two trees database in the Databases folder, you'll find that it has its own Security folder.
>
> **[1:40](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=100)** Inside of here we have a folder for Users.
>
> **[1:43](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=103)** This is where you'll find the database user accounts that are separate from the server login accounts.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=109)** To see how these all work together, let's create a new account for a person named Bradley.
>
> **[1:55](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=115)** I'm going to collapse all these folders again and then right click on the two trees database and choose New Query.
>
> **[2:01](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=121)** To create this account, we'll say, CREATE LOGIN.
>
> **[2:06](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=126)** I'll name it Bradley.
>
> **[2:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=129)** Then with password equals, and in single quotation marks, a strong password.
>
> **[2:16](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=136)** So Brad, with a capital B, one, two, three, four.
>
> **[2:22](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=142)** I'll run this command to create the login account on the SQL server instance.
>
> **[2:28](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=148)** If I go back into the Logins folder and right-click and choose Refresh, you'll see Bradley's account here, but if you go into the two trees database and into the Security folder here, and the Users folder, if I choose right click and Refresh here, you're not going to see any entry for Bradley.
>
> **[2:46](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=166)** We can now connect to the SQL server instance using Bradley's credentials.
>
> **[2:51](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=171)** Let's come up to the top of the server connection sidebar and click the New Connection button.
>
> **[2:56](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=176)** We're going to connect to a [[Microsoft SQL Server]] instance.
>
> **[2:59](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=179)** It's going to be the localhost server.
>
> **[3:03](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=183)** We'll use the [[SQL]] Login authentication, the user name Bradley, the password Brad with a capital B, one, two, three, four, and I'll choose to remember the password.
>
> **[3:16](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=196)** Let's put this in the SQL Server group just so that they stay connected over here in the left-hand sidebar and we'll name this Bradley's Login.
>
> **[3:28](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=208)** Then I need to click over to the Advanced button and find the Port setting and we'll set the port to 1401.
>
> **[3:37](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=217)** I'll press OK, then Connect, and then I'll create a new connection using Bradley's Login information to the SQL server database server.
>
> **[3:47](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=227)** So just to be clear, the connection that we have here at the top uses the system administrator account and the one that we have here at the bottom uses Bradley's credentials.
>
> **[3:57](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=237)** If you try and explore the database's contents in Bradley's connection, by expanding the Databases folder, you'll see the two trees database here, but if you try and expand it, you'll get a message that says that "The database is not accessible."
>
> **[4:10](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=250)** We gave Bradley a server login, but did not grant access to the database.
>
> **[4:15](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=255)** So, let's go ahead and do that.
>
> **[4:16](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=256)** I'm going to close this management tab that opened up for Bradley and come back to the tab that's running commands based off of the SA privileges.
>
> **[4:25](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=265)** Make sure that your target database is the two trees DBF4 database of this window.
>
> **[4:30](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=270)** And then we'll come down to line number three.
>
> **[4:32](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=272)** I'll issue the command, CREATE USER Bradley FOR LOGIN Bradley.
>
> **[4:43](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=283)** This looks a little bit weird, but basically what we're doing is we're taking the login account that we just created and applying it as a new user account that's in the two trees database.
>
> **[4:54](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=294)** Let me go ahead and highlight line three and press the Run button.
>
> **[4:57](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=297)** That'll execute that statement.
>
> **[4:59](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=299)** And now, if I go back into the SQL server instance up here that's using the SA credentials and expand the Databases folder here.
>
> **[5:05](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=305)** Then the two trees database, then the Security folder, and finally Users, I'll right click on it and choose Refresh and there you'll see that Bradley is now a user of the two trees database.
>
> **[5:17](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=317)** Let me collapse all of this back down again and we'll take a look back at Bradley's login.
>
> **[5:22](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=322)** Now, if I right click on the two trees database here and choose Refresh, well, it tells me that it's still not accessible.
>
> **[5:28](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=328)** What I need to do is actually log out and reconnect.
>
> **[5:31](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=331)** So, let's right click on Bradley's Login, choose Disconnect, then double click on it to reconnect.
>
> **[5:39](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=339)** Now, if I expand the Databases folder and expand the two trees folder, I can get in.
>
> **[5:46](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=346)** So now, we don't get any errors when we try and go into the database, but if you try and expand the Tables folder, you're not going to see anything.
>
> **[5:54](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=354)** Even if you right click and choose Refresh here, it's not going to show you any contents.
>
> **[6:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=360)** At this point, Bradley can log into the server and access the database, but he still doesn't have any permission to access any schema level objects.
>
> **[6:10](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=370)** One more time, we need to elevate Bradley's permissions.
>
> **[6:14](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=374)** Once again, I'm going to close this management tab that opened up and come back into the tab that's executing commands based off of the credentials of the SA account.
>
> **[6:24](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=384)** So, let's give Bradley access to any tables in the sales schema.
>
> **[6:28](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=388)** In SQL server, we do that with the command GRANT SELECT ON SCHEMA, then two colons, the name of the schema, sales, and then TO, and the user account, Bradley.
>
> **[6:39](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=399)** Let me highlight line five and run it.
>
> **[6:42](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=402)** That'll elevate Bradley's permissions.
>
> **[6:44](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=404)** And now, if we come back over here to his connection, find the two trees database, right click on the Tables and choose Refresh.
>
> **[6:51](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=411)** You'll now see the different tables in the sales schema.
>
> **[6:56](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=416)** But, you'll quickly realize that this isn't all of the tables in the database.
>
> **[7:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=420)** It's only listing the tables that Bradley has been granted permissions on, the ones in the sales schema.
>
> **[7:06](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=426)** We're not seeing anything in the inventory schema.
>
> **[7:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=429)** We did grant select permissions though.
>
> **[7:11](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=431)** So, Bradley can right click on any of these tables in the sales schema, choose Select Top 1000, and he should get some results back.
>
> **[7:23](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=443)** Or, he can write out his own select queries.
>
> **[7:26](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=446)** But, we didn't grant any permission to modify data or delete rows.
>
> **[7:31](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=451)** For that, we need to grant additional permissions.
>
> **[7:35](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=455)** So, I think you probably get the idea.
>
> **[7:37](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=457)** SQL Server compartmentalizes access a little bit more than PostgreSQL, but the big picture is the same.
>
> **[7:45](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=465)** Users will only have access to the database resources that an administrator has explicitly allowed.
>
> **[7:53](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=473)** Let's wrap this up by undoing all of the changes that we've made to the user accounts on this system.
>
> **[7:59](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=479)** To remove Bradley's permissions, we can execute the command, REVOKE SELECT ON SCHEMA sales FROM Bradley.
>
> **[8:15](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=495)** I'll run this line and that removes his permissions.
>
> **[8:19](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=499)** We can then remove Bradley from the two trees database with DROP USER Bradley.
>
> **[8:26](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=506)** When I run line number nine and then take a look inside of the Databases folder, the two trees database, the Security folder, and then Users, when we right click and choose Refresh, you'll see that Bradley is removed from the list.
>
> **[8:39](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=519)** And finally, we can try to drop his account.
>
> **[8:42](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=522)** We come down here to line number 11 and say, DROP LOGIN Bradley.
>
> **[8:49](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=529)** Now, this one is probably going to fail.
>
> **[8:51](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=531)** Let me run it.
>
> **[8:52](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=532)** And sure enough, it cannot drop login Bradley as the user is currently logged in.
>
> **[8:57](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=537)** What we can do is disconnect Bradley's login.
>
> **[8:59](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=539)** So, we right click on this and choose Disconnect.
>
> **[9:01](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=541)** In fact, we can go ahead and just delete it.
>
> **[9:03](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=543)** Right click and choose Delete Connection.
>
> **[9:06](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=546)** Let me try dropping the login again and we still get the message that he's logged in.
>
> **[9:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=553)** This actually gets a little bit tricky in SQL server because of the way that SQL server opens up multiple connections for the same user.
>
> **[9:21](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=561)** We can check for a current sessions for a login account with a command that queries out information from a system resource table.
>
> **[9:44](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=584)** So, I'll select the session ID column from sys.dm exec sessions where the login name is equal to Bradley.
>
> **[9:53](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=593)** This will show me that we currently have a number of different sessions that are open for this user.
>
> **[9:58](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=598)** Then I just need to kill each one of these.
>
> **[10:01](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=601)** We do that with the simple command, KILL, followed by each of these numbers.
>
> **[10:05](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=605)** So, 52, 55, 58, and 59 on my system.
>
> **[10:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=609)** Yours will probably be different.
>
> **[10:32](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=632)** Let me run this select statement again.
>
> **[10:35](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=635)** Looks like we have no more open connections for Bradley.
>
> **[10:38](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=638)** At this point, we should be able to drop the login.
>
> **[10:41](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=641)** This time it was successful and if I expand the security folder and logins, I'll right click and choose Refresh, and sure enough, he has been removed from there as well.
>
> **[10:51](https://www.linkedin.com/learning/database-foundations-administration-8375189/sql-server-user-permissions?u=76281980&t=651)** So, that's how you work with user permissions in SQL server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (14), [[Databases]] (6), [[PostgreSQL]] (3), [[Microsoft SQL Server]] (1), [[SQL]] (1)
> **Env Vars:** sql (16), login (3), create (2), user (2), select (2)
> **UI Navigation:** click on (8), in the sidebar (1), right-click (1), select the (1)
> **CLI Commands:** find (5), make (1)
> **Analogies:** similar to (1), for instance (1), just like (1), picture (1)
> **SQL:** select (2)
> **Speakers:** - [instructor] (1)


### 3. Database Security

[↑ Back to Table of Contents](#table-of-contents)

#### [View permissions on PostgreSQL](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=0)** - [Instructor] Performing security audits is an important part of any database administrator's job.
>
> **[0:06](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=6)** Once you begin incorporating user accounts into your database, you'll need a way of auditing the access privileges that have been granted to each one.
>
> **[0:16](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=16)** This will be the first step in making sure that every user has an appropriate level of access to the database that's suited to their current areas of responsibility.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=27)** To do this, we'll need to dive into the RDBMS system tables and views once again.
>
> **[0:33](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=33)** Because the table names used by each platform are different, this requires a different set of commands for each one.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=41)** But as you'll see, the overarching concepts are exactly the same.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=45)** Let's start by taking a look at the [[PostgreSQL]] server.
>
> **[0:48](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=48)** I'll expand the database's folder here and right-click on the two trees database to start up a new query.
>
> **[0:55](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=55)** Now to save some typing, I'll paste in the script from the permission's PostgreSQL text file that you can find inside of the course's exercise files.
>
> **[1:05](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=65)** The first thing we're going to do is create a new user account and then grant some privileges.
>
> **[1:10](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=70)** We'll create a new role for a person named Amir.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=73)** Then we'll grant Amir usage on the schema inventory and usage on the schema sales.
>
> **[1:21](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=81)** Next, we're going to grant all privileges on every table that's in the inventory schema, but we'll also grant just select permission on the tables in the sales schema.
>
> **[1:33](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=93)** This way, Amir can do anything that he wants with the inventory tables, but he can only read the tables in the sales schema.
>
> **[1:41](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=101)** Okay, let's go ahead and highlight lines four down to 15 and run them to create the account and grant the permissions.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=109)** Now we can find information about the users of our database by opening up the roles folder inside of the PostgreSQL server.
>
> **[1:57](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=117)** I'm actually going to right-click on it and choose refresh.
>
> **[1:59](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=119)** And there's Amir's account right there.
>
> **[2:03](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=123)** Now, while this shows the names, it's not a reliable way of getting any details about the role.
>
> **[2:08](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=128)** Different GUI applications may provide pop-up [[Windows]] when you click on them.
>
> **[2:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=133)** But here in [[Microsoft Azure|Azure]] Data Studio, we don't get any help.
>
> **[2:16](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=136)** If you right-click on it, you'll see you don't get any options here either.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=140)** So basically, this is just a list of roles and that's about it.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=145)** The more reliable method of getting information about your database, as always, is to query the system objects.
>
> **[2:32](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=152)** I'm going to select everything out of a system object called pg_user by running line 18 in the script.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=162)** This shows us a list of all the server roles that have login permissions; in other words, roles that have a password.
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=169)** Let me adjust this on the screen a little bit to bring it up higher on the window.
>
> **[2:56](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=176)** You'll notice in the sidebar that there's many other roles listed here.
>
> **[3:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=180)** You'll also notice that the ones that we're not seeing in this list all have an icon with a red X.
>
> **[3:06](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=186)** This means that these roles don't have login passwords; they're predefined group roles that you can assign other users to, but you can't actually login to the server directly with these user roles.
>
> **[3:18](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=198)** So right now my server just has two login accounts: The [[PostgreSQL|Postgres]] administrator, or what's known as a super user by looking at this value here where it says True in the usesuper column, and then we also have Amir's account that we just created.
>
> **[3:33](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=213)** So this is a good start for reviewing who has access to the server using a [[SQL]] select command.
>
> **[3:39](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=219)** Now let's dive into Amir's account and see what privileges he's been granted.
>
> **[3:44](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=224)** To do that, we can pull information out of information_schema.role_table_grants.
>
> **[3:49](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=229)** Instead of reviewing all the table's contents though, I want to retrieve just the rows where the grantee, or the person that's received permission, is Amir.
>
> **[3:59](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=239)** Let me run lines 21 and 22 and take a look at those results.
>
> **[4:04](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=244)** And here we go.
>
> **[4:05](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=245)** The results will tell us who gave permission to Amir in the grantor column.
>
> **[4:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=249)** In this case, the Postgres user gave permission to Amir.
>
> **[4:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=253)** Each row that's returned gives details about which specific permission has been granted on each object in the database.
>
> **[4:20](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=260)** Each table in the inventory schema, for instance, the inventory.categories table, has been granted insert, select, update, delete, truncate, references, and trigger permissions.
>
> **[4:33](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=273)** I can scroll through this result list, and down here at the bottom, we'll find these sales schema and you can see that each of these tables were just granted select permission.
>
> **[4:44](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=284)** Now, this result is a little bit cumbersome to read.
>
> **[4:46](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=286)** We can get a more compact view of the same information by reconfiguring the select query just a little bit.
>
> **[4:53](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=293)** I've written that out on lines 24 down to 31.
>
> **[4:56](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=296)** This is a modified version of the script that'll consolidate all of the permissions granted for each object.
>
> **[5:03](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=303)** Let me go ahead and run it and we can see what it looks like.
>
> **[5:06](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=306)** This time, we just get a single row for each table.
>
> **[5:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=309)** So here we have the inventory.categories table, or the inventory.[[Microsoft Products|products]] table.
>
> **[5:14](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=314)** Each of the privileges is then listed out as a comma-separated list.
>
> **[5:18](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=318)** So here are all of the privileges for the categories table and here is just the select privilege that's been granted on the sales schema tables.
>
> **[5:26](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=326)** This query makes it much easier to read through and see exactly what Amir can do with each object in the database.
>
> **[5:33](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-postgresql?u=76281980&t=333)** And that's how you can access the system catalog role_table_grants to review the access permissions that have been granted to each user in your PostgreSQL database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL]] (4), [[PostgreSQL|Postgres]] (2), [[Windows]] (1), [[Microsoft Azure|Azure]] (1), [[SQL]] (1)
> **Definitions:** is a  (3), is an  (1), in other words (1), means that (1), known as (1)
> **UI Navigation:** right-click (3), click on (1), in the sidebar (1)
> **Code Identifiers:** role_table_grants (2), pg_user (1), information_schema (1)
> **CLI Commands:** find (3)
> **Env Vars:** rdbms (1), gui (1), sql (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for instance (1)

#### [View permissions on SQL Server](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=0)** - [Instructor] Like in [[PostgreSQL]], finding information about your user accounts in [[Microsoft SQL Server|SQL Server]] requires a couple of queries to the system catalog views.
>
> **[0:10](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=10)** I'm going to go into the Two Trees database, up here in the SQL Server instance, and right-click on it and choose New Query.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=17)** Then I'm going to paste in the contents from the exercise file called Permissions.SQLServer.txt.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=25)** Now, the first thing we need to do here, is create a user account that we can look at.
>
> **[0:29](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=29)** We're going to create a user named Hiroshi, and I'm using the WITH LOGIN keywords here, after the CREATE USER statement.
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=37)** The WITHOUT LOGIN keywords, allows us to create a user within the database that's not connected to a SQL Server login account.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=45)** This is kind of a shortcut here, since we won't actually be trying to gain access to the database with Hiroshi's account.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=51)** In this exercise, we don't technically need a server login and a database user.
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=57)** So this will allow us to create a database user without a corresponding login account.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=62)** After we create the Hiroshi user, we're going to grant him some permissions.
>
> **[1:07](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=67)** We'll allow him to read and modify data in any table in the inventory schema.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=73)** We'll also allow him to read any table in the sales schema.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=78)** Finally, let's also give Hiroshi the ability to update data in just the sales.orders table, specifically.
>
> **[1:26](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=86)** This will allow him to read and edit existing data, but he won't be able to add or remove anything from the orders table.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=94)** So let me run lines four down through nine to create Hiroshi's account and set those permissions.
>
> **[1:40](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=100)** Okay, with those permissions granted, we can start exploring the SQL Server system catalog views.
>
> **[1:46](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=106)** The sys.database.principles view, will show us information about user accounts.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=112)** When filtered to adjust the SQL_USER type, we're going to be seeing just the accounts that use a server authentication.
>
> **[2:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=120)** Let me go ahead and run lines 12 and 13, and we could take a look at those results.
>
> **[2:06](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=126)** The dbo account is the one that's being used by our system administrator account, and then down here, we have Hiroshi's account.
>
> **[2:14](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=134)** This catalog view will give you the list of user accounts that you should review during a security audit.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=140)** To find out what Hiroshi has access to, we can turn to a different catalog view, the sys.database.permissions view.
>
> **[2:30](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=150)** This query on line 16 and 17, will filter that view to just the lines that correspond to Hiroshi's account.
>
> **[2:40](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=160)** Let me run it, and we'll take a look at the results.
>
> **[2:44](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=164)** The two columns that I want to focus on, are the class description and the permission, over here on the right.
>
> **[2:50](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=170)** The class description defines the type of object that we're working with, and the permission tells us what specific permission has been granted.
>
> **[2:58](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=178)** So, for the database, Hiroshi has connect permission.
>
> **[3:01](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=181)** On the object with this ID number, he has update permissions, and on the schema number five, we have delete, insert, select and update permissions, and on schema number six, we have just select permissions.
>
> **[3:16](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=196)** Now these results, list the type of object and permission name that's been granted, and the major ID number refers to the different database objects.
>
> **[3:24](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=204)** In order to make this more legible though, we need to expand on these ID numbers, in order to get the actual object IDs that they refer to.
>
> **[3:32](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=212)** We can convert the object ID numbers into actual names with a couple of functions.
>
> **[3:37](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=217)** I have them listed here on lines 20 and 21.
>
> **[3:42](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=222)** This select query, starting on line 19 down to 25, reworks the query to return the appropriate object names for the permissions.
>
> **[3:51](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=231)** Let me go ahead and run this instead, and we'll see the difference.
>
> **[3:57](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=237)** This makes it much easier to read what each of these permissions is doing.
>
> **[4:01](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=241)** So once again, Hiroshi has connect permission on the database.
>
> **[4:05](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=245)** We have update permission on the orders table, the object orders.
>
> **[4:10](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=250)** We have delete, insert, select, and update permission on the inventory schema, as well as, just select permission on the sales schema, and that's what a quick security review would look like in SQL Server.
>
> **[4:24](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=264)** Though the general procedure is the same as in PostgreSQL, I'll admit that the system catalog views that SQL Server uses, are a little bit more convoluted, since they reference ID numbers that you have to track down and decode.
>
> **[4:39](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=279)** Your primary goal here, should be to understand the general process for retrieving these kinds of details from your RDBMS, but I wouldn't spend too much time on committing the specific syntax of each platform to memory.
>
> **[4:53](https://www.linkedin.com/learning/database-foundations-administration-8375189/view-permissions-on-sql-server?u=76281980&t=293)** If you understand what it is that you're trying to accomplish, searching for and finding the appropriate commands on the Internet becomes much easier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (6), [[PostgreSQL]] (2)
> **Env Vars:** sql (6), login (2), create (1), user (1), without (1)
> **CLI Commands:** find (1), make (1)
> **File Paths:** permissions.sqlserver.txt (1)
> **UI Navigation:** right-click (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### [Column-level permissions](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=0)** - [Lecturer] User permissions can get very specific.
>
> **[0:03](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=3)** We've looked at granting permissions to an entire schema, which will include all tables, views and other objects within the schema.
>
> **[0:11](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=11)** We've also seen that you can grant permissions to specific objects such as a single table.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=17)** Access privileges can get even finer-grained though.
>
> **[0:21](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=21)** Most RDBMS platforms support granting permissions down to the column level.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=27)** I've got the Column_Permissions text file open in a new query.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=30)** It's attached to my [[Microsoft SQL Server|SQL server]] database.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=34)** Let's first create a new user with the name Yusef.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=38)** Now we can grant read-only access to a single column in a table with the command that I have listed here on line 7.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=46)** This specifically targets only the company column in the sales.customers table.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=51)** So we're going to grant SELECT permission on the object sales.customers and then in parentheses company to Yusef.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=58)** Let me go ahead and run my number 7.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=62)** Now the [[PostgreSQL]] RDBMS supports column level permissions as well.
>
> **[1:07](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=67)** The command on that platform places the column name first.
>
> **[1:10](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=70)** When I have it written out here on line number 10 of what that would look like in PostgreSQL.
>
> **[1:15](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=75)** So we would GRANT SELECT on the company column on the table sales.customers to Yusef.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=82)** So the syntax is slightly rearranged.
>
> **[1:24](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=84)** But it would do the same thing.
>
> **[1:27](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=87)** Okay, back to our SQL server example.
>
> **[1:30](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=90)** We've now granted Yusef permission to read only the company name column out of the customers table.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=98)** To test this out, I'm going to use a feature of SQL server that allows us to impersonate another user.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=104)** The EXECUTE AS USER command will tell the database engine to pretend temporarily that we are Yusef.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=113)** It'll respond to our requests with his level of permissions.
>
> **[1:57](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=117)** So let me run line 13 to execute as user Yusef.
>
> **[2:06](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=126)** Then just to verify who the server thinks we are now, we can run SELECT CURRENT_USER.
>
> **[2:14](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=134)** The results will say that we're now being treated as Yusef and no longer as the assistant administrator or the database owner account.
>
> **[2:22](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=142)** So let's see what Yusef can do with his new permissions.
>
> **[2:26](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=146)** Let me scroll down in the script a little bit and try and select everything or all of the columns from the sales.customers table.
>
> **[2:33](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=153)** Doing so results in a bunch of errors.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=155)** Since we're asking to retrieve columns that we weren't granted SELECT permission on.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=162)** If we just try and ask for the company column by running SELECT company FROM sales.customers, this time we get results.
>
> **[2:51](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=171)** SQL server recognizes that Yusef was granted permission to access this column.
>
> **[2:56](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=176)** So it sends the requested information back.
>
> **[2:59](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=179)** If we try and ask for the company column by name, along with additional columns that we weren't granted permission on such as SELECT company, address FROM sales.customers.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=189)** Once again, we're going to be treated to some errors.
>
> **[3:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=193)** Now, in order to switch back to the administrator account, we can run this REVERT command.
>
> **[3:17](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=197)** Let me go ahead and execute that.
>
> **[3:19](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=199)** That'll switch us back into the database user.
>
> **[3:21](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=201)** And just to verify, we can SELECT CURRENT_USER again.
>
> **[3:26](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=206)** This will tell us that we're now being treated back as the DBO account or the database owner, which is the user account that the assistant administrator login is mapped to.
>
> **[3:36](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=216)** Now, at this point, we can remove Yusef from the system by running lines 28 and 29.
>
> **[3:43](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=223)** So with column level permissions, you can get very fine-grained control over your user's capabilities.
>
> **[3:49](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=229)** One common technique is to allow SELECT permission on the entire table so that a user can read everything, but then target UPDATE permissions to specific columns.
>
> **[4:01](https://www.linkedin.com/learning/database-foundations-administration-8375189/column-level-permissions?u=76281980&t=241)** That way they can only edit a couple of columns and are not granted permission to change values in every column of the table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (4), [[PostgreSQL]] (2)
> **Env Vars:** select (8), sql (4), rdbms (2), current_user (2), grant (1)
> **SQL:** select (8), update (1)
> **Analogies:** such as (2)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [lecturer] (1)

#### [Group permissions](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=0)** - [Instructor] Just like you can use schemas to group multiple tables together, you can group multiple individual users together as well.
>
> **[0:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=9)** This makes managing permissions easier when the responsibilities of your users fall into distinct categories.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=17)** When you think about your own organization or business, you probably have different departments that handle separate aspects of the business.
>
> **[0:25](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=25)** You might have a shipping department, and a customer service department, and a marketing department.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=30)** Each of these departments would have their own group of dedicated employees, but each department's employees all require access to the same set of tables within the database.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=41)** You can follow the same departmental model when setting up your user access permissions.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=46)** Each database user gets their own unique username and password login account.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=52)** You can then create a single group role account for each department.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=56)** Next, each individual user gets added as a member of the group.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=62)** Now, when you grant permissions to the group, each member will automatically inherit the same set of permissions.
>
> **[1:10](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=70)** This way you don't have to grant and revoke the same set of permissions over and over again for every employee that has the same type of job within the business.
>
> **[1:19](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=79)** If one specific user needs elevated permissions, say they're the department manager, then you can always grant additional access as needed.
>
> **[1:28](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=88)** In this way, for example, all of the members of the group can select existing data and insert new data, but only the manager can update and delete data.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=98)** Finally, if a member of the group changes departments, all you need to do is remove them from the group and their associated permissions are removed as well.
>
> **[1:48](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=108)** You can then attach their user account as a member of a different department's group as needed.
>
> **[1:54](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=114)** In [[Microsoft SQL Server|SQL Server]] you create a single user account, say for an employee named Tabitha, then you create a group role account for the department, such as the [[Human Resources (HR)|human resources]] department.
>
> **[2:06](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=126)** To assign Tabitha to the human_resources role, you would alter the role and add her as a member.
>
> **[2:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=133)** In this way, Tabitha would automatically obtain all of the permissions given to the human_resources role.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=140)** The [[PostgreSQL]] platform throws a slight curve ball into the process, since it treats individual users and group accounts as exactly the same thing.
>
> **[2:29](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=149)** Everything is a role in [[PostgreSQL|Postgres]] regardless of whether it's intended to be used by a single person or by a group of people.
>
> **[2:37](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=157)** So you would create a role for Tabitha and a role for the human resources department.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=162)** Finally, you would grant the human_resources role's permissions to the tabitha role.
>
> **[2:48](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=168)** The end result is the same on both RDBMS platforms.
>
> **[2:52](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=172)** All of the permissions granted to the group are inherited by the individual.
>
> **[2:57](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=177)** The end result is the same on both RDBMS platforms.
>
> **[3:01](https://www.linkedin.com/learning/database-foundations-administration-8375189/group-permissions?u=76281980&t=181)** All of the permissions granted to the group are inherited by the individual.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Human Resources (HR)|Human resources]] (2), [[Microsoft SQL Server|Sql server]] (1), [[PostgreSQL]] (1), [[PostgreSQL|Postgres]] (1)
> **Code Identifiers:** human_resources (3)
> **Env Vars:** rdbms (2), sql (1)
> **Analogies:** just like (1), for example (1), such as (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. High Availability

[↑ Back to Table of Contents](#table-of-contents)

#### [Managing server uptime](https://www.linkedin.com/learning/database-foundations-administration-8375189/managing-server-uptime?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/managing-server-uptime?u=76281980&t=0)** - [Instructor] A robust backup and recovery strategy will protect you from catastrophic data loss, but it does nothing for preventing downtime.
>
> **[0:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/managing-server-uptime?u=76281980&t=9)** Database administrators must plan ahead to ensure that their database is available as often as possible.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-administration-8375189/managing-server-uptime?u=76281980&t=17)** Servers become unavailable for a wide variety of reasons, a [[Hardware]] or a software failure, natural disaster, or a malicious attack can take your system down, making it inaccessible by your users or customers.
>
> **[0:32](https://www.linkedin.com/learning/database-foundations-administration-8375189/managing-server-uptime?u=76281980&t=32)** The cost of a server outage can range from a mere inconvenience up to significant financial losses from missed business opportunities.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-administration-8375189/managing-server-uptime?u=76281980&t=41)** In an emergency, when a server goes down, it's typically an all-hands-on-deck event to restore the system to full operational status as quickly as possible.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-administration-8375189/managing-server-uptime?u=76281980&t=52)** Knowing how to recover is important, but it's often much better to take a more proactive approach to prevent downtime in the first place.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-administration-8375189/managing-server-uptime?u=76281980&t=62)** Server uptime is reported as a percentage and often categorized by the number of nines.
>
> **[1:08](https://www.linkedin.com/learning/database-foundations-administration-8375189/managing-server-uptime?u=76281980&t=68)** For instance, a server that is available 99.9% of the time, or what's called three nines availability, will only be down for about eight hours and 45 minutes in total over the course of a year.
>
> **[1:22](https://www.linkedin.com/learning/database-foundations-administration-8375189/managing-server-uptime?u=76281980&t=82)** Compare that to a server that has five nines availability which could be down for only about five minutes per year.
>
> **[1:29](https://www.linkedin.com/learning/database-foundations-administration-8375189/managing-server-uptime?u=76281980&t=89)** In order to move from one service level up to the next, more safeguards need to be put in place and significantly more capital expenditures need to be made.
>
> **[1:40](https://www.linkedin.com/learning/database-foundations-administration-8375189/managing-server-uptime?u=76281980&t=100)** There are a number of options available for database administrators to consider.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-administration-8375189/managing-server-uptime?u=76281980&t=105)** They range from relatively inexpensive techniques that can provide a low level of protection up to very complex, enterprise-grade solutions that very nearly eliminate all risk of server outages.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-administration-8375189/managing-server-uptime?u=76281980&t=118)** Like with developing a backup and restore plan, administrators must identify their acceptable level of risk and balance those concerns against the costs required to mitigate those risks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1)
> **Versions:** 99.9 (1)
> **Analogies:** for instance (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Standby servers](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=0)** - [Narrator] The most common technique for ensuring [[Databases]] are highly available is to create a duplicate server called a standby.
>
> **[0:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=9)** A standby server duplicates the [[Hardware]] of your primary database server.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=14)** If the primary server fails and goes down, the standby server gets promoted to the role of the primary server.
>
> **[0:21](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=21)** And it takes over the responsibilities of maintaining the RDBMS.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=26)** For the most effective standby, It's important that they're as identical as possible.
>
> **[0:31](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=31)** So they're built from the same physical components, using the same brands and capacities.
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=37)** This will minimize the possibility of encountering conflicts during the transition period.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=42)** And trust me, when the database is down and your managers and customers are not able to connect, and looking to you for an ETA on when services will be restored, you'll want that transition to happen as smoothly as possible.
>
> **[0:56](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=56)** Depending on your available resources and budget, there are three different levels of standby server that you can consider when developing your disaster recovery plans.
>
> **[1:06](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=66)** The simplest is called a cold standby.
>
> **[1:10](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=70)** It's just a physical replacement for your primary server.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=73)** You can think of it as a second computer that's just sitting in the corner.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=77)** When the primary server goes down, you drag it over, install the same operating system, and RDBMS software versions.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=85)** Then restore your latest database backup and plug it in.
>
> **[1:29](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=89)** The advantage of a cold standby is that you don't have to wait for a replacement parts or a service technician to repair the primary machine.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=97)** You can get to work on implementing the restoration plan as soon as the outage is noted.
>
> **[1:43](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=103)** A warm standby takes things up a notch.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=105)** With this configuration, the standby server is actively running all the time.
>
> **[1:51](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=111)** The RDBMS server is already installed, and it's kept up to date with these same service patches that are applied to the primary server.
>
> **[1:58](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=118)** A warm standby is also actively restoring database backups that are made on the primary server.
>
> **[2:05](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=125)** Every time a backup is made, it's immediately restored on the standby.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=130)** This way when the primary server goes down, the standby is already configured.
>
> **[2:15](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=135)** The backups are already restored, and it's ready to be put into immediate service.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=140)** There is a chance to have some data loss with this method though.
>
> **[2:23](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=143)** Since there is typically a lag between when a backup is created on the primary server, and when it can be restored on the warm standby.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=151)** Finally, we have the hot standby.
>
> **[2:34](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=154)** This configuration keeps two identical servers in active use.
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=158)** And any changes made to the database, are applied on both servers simultaneously.
>
> **[2:43](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=163)** So when you send a command to add a row of data or edit a record, that command is split and sent to both servers.
>
> **[2:51](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=171)** This avoids the delay that you get with the warm standby configuration.
>
> **[2:55](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=175)** Since you're not relying on a backup and restore to synchronize the two machines.
>
> **[3:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=180)** Since the hot standby is processing these same transactions as the primary server, at the same time, they're kept in a constant state of synchronization.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=189)** If the primary database fails, the hot standby takes over immediately.
>
> **[3:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=193)** And your users will not even notice that a transition has taken place.
>
> **[3:19](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=199)** Having a standby server will help minimize the downtime during an outage.
>
> **[3:24](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=204)** There's an additional advantage to having a warm or hot standby though.
>
> **[3:28](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=208)** Since they contain duplicate copies of the database, they can be used for read-only queries.
>
> **[3:34](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=214)** Any reporting or analysis workloads that users are performing, can be directed to the standby server for handling.
>
> **[3:41](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=221)** This reduces the number of connections and resource loads placed on the primary server.
>
> **[3:47](https://www.linkedin.com/learning/database-foundations-administration-8375189/standby-servers?u=76281980&t=227)** This way the primary server can focus its attention on activities that add and modify data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[Hardware]] (1)
> **Env Vars:** rdbms (3), eta (1)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** think of it as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)

#### [Synchronize servers with log shipping](https://www.linkedin.com/learning/database-foundations-administration-8375189/synchronize-servers-with-log-shipping?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/synchronize-servers-with-log-shipping?u=76281980&t=0)** - [Instructor] When you have a warm standby server, the most common method of keeping it in sync with your primary server is called log shipping.
>
> **[0:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/synchronize-servers-with-log-shipping?u=76281980&t=9)** Log shipping takes advantage of the transaction logs that your database server is already using.
>
> **[0:15](https://www.linkedin.com/learning/database-foundations-administration-8375189/synchronize-servers-with-log-shipping?u=76281980&t=15)** These are the same logs that we discussed way back in chapter one in the movie on point-in-time restores.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-administration-8375189/synchronize-servers-with-log-shipping?u=76281980&t=22)** The database's transaction logs are the moment-by-moment records of every change that's made to the database.
>
> **[0:28](https://www.linkedin.com/learning/database-foundations-administration-8375189/synchronize-servers-with-log-shipping?u=76281980&t=28)** By sending those transaction logs from the primary server to the warm standby server, the database on the standby server can step through and apply the exact same changes in the same sequence.
>
> **[0:41](https://www.linkedin.com/learning/database-foundations-administration-8375189/synchronize-servers-with-log-shipping?u=76281980&t=41)** There's three steps to the process here.
>
> **[0:43](https://www.linkedin.com/learning/database-foundations-administration-8375189/synchronize-servers-with-log-shipping?u=76281980&t=43)** First, the primary database makes a differential backup of the transaction log.
>
> **[0:49](https://www.linkedin.com/learning/database-foundations-administration-8375189/synchronize-servers-with-log-shipping?u=76281980&t=49)** Remember that a differential backup only contains the changes that have occurred since the last backup was made, so this step can be done relatively quickly.
>
> **[0:58](https://www.linkedin.com/learning/database-foundations-administration-8375189/synchronize-servers-with-log-shipping?u=76281980&t=58)** Next, the log backup is copied or shipped over the network to the warm standby server.
>
> **[1:05](https://www.linkedin.com/learning/database-foundations-administration-8375189/synchronize-servers-with-log-shipping?u=76281980&t=65)** Finally, the contents of the log is appended onto the transaction log that exists on the standby server in a restore procedure.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/synchronize-servers-with-log-shipping?u=76281980&t=73)** The standby server then deletes the backup files that it just received and awaits the arrival of the next batch of commands.
>
> **[1:20](https://www.linkedin.com/learning/database-foundations-administration-8375189/synchronize-servers-with-log-shipping?u=76281980&t=80)** I like to think of this process like putting a message in a bottle and throwing it into the ocean.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-administration-8375189/synchronize-servers-with-log-shipping?u=76281980&t=85)** Someone finds it on a distant beach and can read the instructions, but it's always going to be a one-way conversation.
>
> **[1:32](https://www.linkedin.com/learning/database-foundations-administration-8375189/synchronize-servers-with-log-shipping?u=76281980&t=92)** Most RDBMS platforms have built-in support for log shipping.
>
> **[1:36](https://www.linkedin.com/learning/database-foundations-administration-8375189/synchronize-servers-with-log-shipping?u=76281980&t=96)** You can configure the database servers to schedule automatic backup, ship, and restore procedures.
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-administration-8375189/synchronize-servers-with-log-shipping?u=76281980&t=102)** Once everything is configured the automation systems manage the transfers and keeps the two [[Databases]] synchronized.
>
> **[1:50](https://www.linkedin.com/learning/database-foundations-administration-8375189/synchronize-servers-with-log-shipping?u=76281980&t=110)** One of the more interesting uses of log shipping is that you can intentionally build in a delay into the process.
>
> **[1:57](https://www.linkedin.com/learning/database-foundations-administration-8375189/synchronize-servers-with-log-shipping?u=76281980&t=117)** For instance, the primary database makes the log backup and ships it across the network.
>
> **[2:03](https://www.linkedin.com/learning/database-foundations-administration-8375189/synchronize-servers-with-log-shipping?u=76281980&t=123)** But the standby server just sits on it for a while, it doesn't do anything right away.
>
> **[2:08](https://www.linkedin.com/learning/database-foundations-administration-8375189/synchronize-servers-with-log-shipping?u=76281980&t=128)** After a predetermined amount of time has passed, it then performs the restore.
>
> **[2:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/synchronize-servers-with-log-shipping?u=76281980&t=133)** In this manner, the contents of the standby server is always a little bit behind.
>
> **[2:19](https://www.linkedin.com/learning/database-foundations-administration-8375189/synchronize-servers-with-log-shipping?u=76281980&t=139)** This can be a convenient buffer to have if a mistake is made in the primary database.
>
> **[2:24](https://www.linkedin.com/learning/database-foundations-administration-8375189/synchronize-servers-with-log-shipping?u=76281980&t=144)** It won't immediately propagate over to the standby server.
>
> **[2:29](https://www.linkedin.com/learning/database-foundations-administration-8375189/synchronize-servers-with-log-shipping?u=76281980&t=149)** If the mistake is found quickly enough, you can find the original data in the standby database and copy it back.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** rdbms (1)
> **Cross-References:** we discussed (1)
> **Definitions:** is called (1)
> **Analogies:** for instance (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Server failover clusters](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=0)** - [Instructor] The ultimate protection against downtime is provided by a technology called a failover cluster.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=7)** A failover cluster is made up of two or more physical servers called nodes and a pool of shared storage.
>
> **[0:14](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=14)** The storage resource typically involves a redundant array of independent disks or raid to avoid a single point of failure there.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=22)** But since there's only a single pool of storage shared by each server in the cluster, there's only one set of database files.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=30)** This means the synchronization problem that's present in other approaches to high availability is entirely avoided.
>
> **[0:37](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=37)** One of the servers in the cluster is designated as the active node and every other server runs in a passive mode.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=46)** Because there's only one set of database files, only the active node can write to them.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=52)** When users connect to the cluster, their requests are directed to the currently active node.
>
> **[0:57](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=57)** It processes their request and writes the data to the storage pool.
>
> **[1:01](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=61)** The passive nodes can handle read only requests for information but they're not allowed to write changes to the storage pool.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=69)** This represents the normal operating state of the cluster.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=73)** During the regular operation of the cluster, each node monitors the status of every other node through a health verification process called a heartbeat.
>
> **[1:24](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=84)** If the active node becomes unresponsive for any reason, one of the passive nodes gets immediately promoted and it assumes the role of the active node.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=94)** It now has write permission to the shared storage pool.
>
> **[1:38](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=98)** And the previously active node is demoted to a passive status.
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=102)** The process of transferring the active status from one node to another is called a failover.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=109)** This happens entirely within the cluster and the end user sees no interruption when the transition occurs.
>
> **[1:57](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=117)** A failover cluster works a lot like a team playing soccer or football.
>
> **[2:01](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=121)** Only one player has control of the ball at any point but the other players are standing by ready to assume control when the ball is passed to them.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=130)** The team works together to move the ball down the field and into the goal.
>
> **[2:15](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=135)** Failover clusters require a tight integration between the RDBMS software and the operating system that it's running on.
>
> **[2:24](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=144)** Configuring the communication between each node, setting up the heartbeat monitoring and establishing the conditions where responsibility is passed between nodes is all handled at the OS level.
>
> **[2:35](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=155)** [[Ubuntu]] [[Linux]], Red Hat Enterprise Linux, SUSE Linux Enterprise Server and [[Windows Server]] all support the creation of failover clusters.
>
> **[2:46](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=166)** It's also possible to create a failover cluster using virtualized [[Hardware]] with tools such as VMware, vSphere, vMotion technologies.
>
> **[2:55](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=175)** A failover cluster made up of two or three nodes can provide a significant level of server uptime.
>
> **[3:02](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-failover-clusters?u=76281980&t=182)** With additional nodes the concept of high availability approaches the realm of continuous availability where complete outages become less and less likely to ever occur.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (3), [[Ubuntu]] (1), [[Windows Server]] (1), [[Hardware]] (1)
> **CLI Commands:** node (10)
> **Code Identifiers:** vsphere (1), vmotion (1)
> **Env Vars:** rdbms (1), suse (1)
> **Definitions:** is called (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 5. Health and Maintenance of the System

[↑ Back to Table of Contents](#table-of-contents)

#### [Server maintenance tasks](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=0)** - [Instructor] We've talked a lot about the responsibilities of a database administrator when preparing for things to go wrong.
>
> **[0:07](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=7)** But what about when the database is functioning normally and the system is humming along nicely?
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=13)** Are administrators just sitting around waiting for the next emergency?
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=17)** Not likely.
>
> **[0:19](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=19)** There are always maintenance tasks and tweaks that can be made to the system to ensure that it's functioning at its peak performance levels.
>
> **[0:26](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=26)** Even though they're similar on the outside, each RDBMS platform is going to have its own internal structures and methods of operation.
>
> **[0:35](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=35)** Some routine maintenance tasks that are critical to run on one platform are actually detrimental or impossible on a different platform, simply because they work differently.
>
> **[0:45](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=45)** It's like trying to change the oil filter on an electric car; it might look like your old combustion engine vehicle on the outside, but they're fundamentally different under the hood.
>
> **[0:55](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=55)** With that said, let's jump into our two trees [[Databases]] to take a look at a couple of maintenance commands that you can use on each platform.
>
> **[1:04](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=64)** Let's start with a new query window on the [[PostgreSQL]] version of the two trees database.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=69)** In [[PostgreSQL|Postgres]], when you update or delete rows of data from a table, the old information isn't immediately removed from your system's discs.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=78)** The old versions are still present.
>
> **[1:20](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=80)** They're just marked internally so that they're no longer accessible.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=85)** Over time, this results in a significant amount of out-of-date information that's not useful but still hanging around, especially on tables that execute lots of updates and deletes on their data rows.
>
> **[1:37](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=97)** The way that the disc space is recovered is through a wonderfully-named operation, Vacuum.
>
> **[1:44](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=104)** Now there's actually two different modes that you can run the vacuum command in.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=109)** The default mode is literally just the [[Microsoft Word|word]] vacuum.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=112)** It takes a light-handed approach to the cleanup process.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=116)** It marks the space taken by expired data as unavailable so that new data can overwrite the same space on disc, but it doesn't actually shrink the size of your data files on disc.
>
> **[2:08](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=128)** This approach doesn't require locking the tables, so it's convenient to run in the background during normal database operations without running the risk of blocking user access.
>
> **[2:19](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=139)** It's recommended that a typical database is vacuumed at least once a day.
>
> **[2:25](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=145)** The other operation is vacuum full.
>
> **[2:28](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=148)** This option will lock database tables, so it can interrupt user access.
>
> **[2:34](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=154)** The trade-off is that vacuum full is able to do a much more thorough job of the cleanup process.
>
> **[2:41](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=161)** Disc space is reclaimed and made available to the operating system again.
>
> **[2:45](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=165)** Now at first, returning disc space to the operating system seems like it's a good idea, but there's really no point if your database is expected to grow again and consume that space again.
>
> **[2:56](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=176)** Vacuum full is useful when the database won't be growing; for instance, if it's being archived.
>
> **[3:03](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=183)** For most routine maintenance, though, you're going to want to stick to the plain vacuum command.
>
> **[3:08](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=188)** When you execute it, or press the run button, Postgres will go through and clean up your tables.
>
> **[3:15](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=195)** It just tells me that the command was completed successfully.
>
> **[3:17](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=197)** So I don't really get any information about what it actually did.
>
> **[3:21](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=201)** If you want detailed information about what the vacuum command is doing, you can run vacuum and then inside the parentheses, the word verbose.
>
> **[3:32](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=212)** This time, it'll give you a readout of each of the tables and the actions that it was performing on your database.
>
> **[3:39](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=219)** Now in our little test database, there's not much to do, so you're going to see lots of lines that say things like, "Zero pages are empty."
>
> **[3:46](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=226)** On an active database, you'll see much more interesting details down here.
>
> **[3:51](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=231)** Now in [[Microsoft SQL Server|SQL server]], things are a little bit different.
>
> **[3:54](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=234)** Manually shrinking tables on that platform can actually be detrimental to system performance.
>
> **[4:01](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=241)** So while there are equivalent commands, it's typically better to let the system manage disc space allocation on its own.
>
> **[4:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=249)** But there is an important maintenance command that you should be aware of if you're working on the SQL server platform.
>
> **[4:15](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=255)** Let's go ahead and open up a new query for the two trees database inside of SQL server.
>
> **[4:21](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=261)** In SQL server, there's a number of DBCC commands, which stands for Database Console Commands, and these will perform routine maintenance tasks.
>
> **[4:31](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=271)** Now, you could learn about each one of them individually, but there's really only one that you need to know: It's DBCC CHECKDB.
>
> **[4:41](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=281)** This one command will go through and execute a number of other maintenance tasks that'll check the consistency of disc space allocation and the integrity of tables and indexes.
>
> **[4:53](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=293)** When you run the DBCC CHECKDB command, it's going to put a bunch of rows into the messages window.
>
> **[5:01](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=301)** You can largely ignore most of this.
>
> **[5:03](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=303)** The information that you need to look at though is at the very bottom.
>
> **[5:08](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=308)** What you want to see is this line here that reads, "CHECKDB found zero allocation errors "and zero consistency errors in the database two_trees."
>
> **[5:18](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=318)** If any errors are reported, this will give you a good starting point for tracking down the issue and repairing the database.
>
> **[5:26](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=326)** So those are a couple of routine maintenance tasks that you can run on your [[Relational Databases]].
>
> **[5:32](https://www.linkedin.com/learning/database-foundations-administration-8375189/server-maintenance-tasks?u=76281980&t=332)** Different RDBMS platforms will have different tools available, but they'll all help you keep your system in tip-top condition.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (4), [[PostgreSQL|Postgres]] (2), [[Microsoft Word|Word]] (2), [[Databases]] (1), [[PostgreSQL]] (1)
> **Env Vars:** sql (4), dbcc (3), checkdb (3), rdbms (2)
> **Definitions:** is an  (1), stands for (1)
> **Analogies:** it's like (1), for instance (1)
> **Code Identifiers:** two_trees (1)
> **Best Practices:** recommended (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Closing user sessions](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=0)** - [Instructor] Sometimes users connect to a database server, perform some tasks and then leave, but the server doesn't drop the connection.
>
> **[0:08](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=8)** These connections can remain open, consuming system resources.
>
> **[0:12](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=12)** You can periodically review and close unneeded connections as part of a routine maintenance activity.
>
> **[0:19](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=19)** In [[PostgreSQL]], we can go ahead and open up a new query, and then we can review connection details by pulling information from the PG stat activity catalog view.
>
> **[0:32](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=32)** This shows me connections to each database on the server in the dat name column.
>
> **[0:38](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=38)** Now it's probably useful to focus on just the two trees database, so I'm going to add a where clause up here to the select query.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=51)** So we'll focus the results to just the rows where the dat name, or the database name, is equal to two trees DBF4.
>
> **[1:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=60)** Each row in this result set, represents an open connection to the two trees database.
>
> **[1:07](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=67)** The PID column lists the unique connection ID number for each of those connections.
>
> **[1:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=73)** Now if you scroll over to the right, and find the state column, you can see the status of each of these connections.
>
> **[1:19](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=79)** One of them is active, that's the one that I'm currently using, and I have three idle connections.
>
> **[1:25](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=85)** The idle connections mean that they're not doing anything at the moment, for these three idle connections you'll want to review the column called state change.
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=95)** This'll tell you the last time the connection was used, in my case today is the 27th of January, and I can see that there are a few connections that haven't been activated for several days.
>
> **[1:47](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=107)** Here's one that was last used on the 23rd of January.
>
> **[1:52](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=112)** We can go ahead and close these connections, in order to do that just keep your eye on that second row, and we'll move back over here to the left, and I'll find the PID for that row.
>
> **[2:02](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=122)** In this case, for me, it's 11794.
>
> **[2:08](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=128)** To close this connection, what we can do is run the command, select PG terminate backend, and then in parentheses that PID number, 11794, yours is almost certainly going to be different.
>
> **[2:27](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=147)** When I run this command, just running line number four by highlighting it, I'm going to get the result true, and then when I select everything from PG stat activity, where the dat name is two trees DBF4 again, you'll see that that ID number no longer exists.
>
> **[2:42](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=162)** The connection has been closed from the server.
>
> **[2:45](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=165)** Now similar operations exist on [[Microsoft SQL Server|SQL server]], so let's take a look at that.
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=169)** I'm going to right-click and open up a new query on the SQL server database.
>
> **[2:53](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=173)** Here, we can run the store procedure, execute SP who2.
>
> **[2:59](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=179)** This will return a lot of information about all the different connections on my SQL server database, in this result set, we want to take a look at the DB name column, and then scroll through until we find the rows that correspond to the two trees database.
>
> **[3:14](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=194)** In my case, it looks like I only have a couple of them, this row here, and this one down there.
>
> **[3:18](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=198)** Then, we want to find the column called last batch, it's right over here.
>
> **[3:24](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=204)** For each of these, we could take a look at the time when this connection was last used.
>
> **[3:28](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=208)** In this case, this one here was connected to the two trees database, but it was last used a couple of days ago.
>
> **[3:35](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=215)** Now that we've identified a individual row that we can remove from the server, let me scroll back over here to the right, and find it's SPID number.
>
> **[3:43](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=223)** For me it's number 51.
>
> **[3:46](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=226)** In order to close this connection we just run this command, kill, followed by the SPID number that I want to get rid of, number 51.
>
> **[3:55](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=235)** Let me execute just line number three to remove that connection.
>
> **[3:59](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=239)** Then if we execute SB who2 again, you should see that it no longer exists.
>
> **[4:04](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=244)** Now we jumped from SPID number 50, up to 52.
>
> **[4:08](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=248)** So when your database servers reboot, or when you stop and start your Docker containers, every connection will automatically be disconnected from the system, and it'll start from a fresh slate again.
>
> **[4:20](https://www.linkedin.com/learning/database-foundations-administration-8375189/closing-user-sessions?u=76281980&t=260)** But over time open connections will get left behind, and it's a good idea to periodically review them, and close anything that's no longer needed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (3), [[PostgreSQL]] (1)
> **Env Vars:** pid (3), sql (3), spid (3), dbf4 (2)
> **CLI Commands:** find (5), docker (1)
> **UI Navigation:** right-click (1)
> **Speakers:** - [instructor] (1)

#### [Reviewing system statistics](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=0)** - [Instructor] Whenever a query request is sent to a database, the RDBMS creates an execution plan that determines how the system will [[Fetch]] the requested values.
>
> **[0:11](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=11)** The quality of the generated plan relies on having up-to-date [[Statistics]] about each table.
>
> **[0:17](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=17)** I discussed the execution plans in the third course of this series, but what we didn't touch on is how the system estimates the number of rows that'll be returned for each step in the plan.
>
> **[0:30](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=30)** When the execution plan is being developed by the RDBMS, it needs to make some educated guesses about the values that are likely to be found in a table before it actually reads the table.
>
> **[0:42](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=42)** It does this by reviewing the statistical distribution of a random sampling of the rows.
>
> **[0:49](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=49)** It works something like this.
>
> **[0:51](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=51)** Let's suppose that you have a table that has 1,000 rows.
>
> **[0:54](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=54)** You know that 75% of the rows have the value A and 25% of the rows have a value B.
>
> **[1:02](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=62)** This represents the statistical data that you have on the table.
>
> **[1:06](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=66)** Now without reading any of the data from the table, you can make the assumption that a query that asks for all of the rows where the value is A will return 750 rows.
>
> **[1:17](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=77)** As long as the statistical information that you have about the table match the actual values stored in the table, you'll be able to make a very accurate estimation.
>
> **[1:27](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=87)** If the statistics are wrong, or out of date though, the accuracy of your estimate will suffer.
>
> **[1:34](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=94)** The RDBMS will maintain these kinds of statistics about the values in each database table, but they're not updated all the time.
>
> **[1:42](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=102)** So as more rows are added or values are changed, the statistics can become outdated and will no longer match the actual distribution of values being stored.
>
> **[1:53](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=113)** And when the query planner doesn't have accurate statistics, it can't optimize query performance.
>
> **[2:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=120)** The problem of outdated statistics can be fixed with a couple of maintenance commands.
>
> **[2:04](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=124)** Let's take a look at [[PostgreSQL]] first.
>
> **[2:07](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=127)** The analyze command will take a random sampling of your data from each table and update the statistics used by the query planner.
>
> **[2:16](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=136)** Just like with the vacuum command, you can add the verbose keyword to the end if you wanted to see messages about what exactly is being done.
>
> **[2:26](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=146)** Let me go ahead and run this command now, and you'll see the results show up in the messages window.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=151)** You'll see a number of lines that tell you how many rows were scanned or how many pages were scanned and what their contents were.
>
> **[2:38](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=158)** It's recommended to analyze active [[Databases]] once per day, as part of a nightly maintenance routine.
>
> **[2:44](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=164)** [[Microsoft SQL Server|SQL server]] has a similar command though it needs to be run on specific tables and columns.
>
> **[2:50](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=170)** Let's take a look at that by opening up a new query window over there.
>
> **[2:55](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=175)** To update these statistics for our customer's table for instance, you can execute updates statistics, then the name of the table, sales.customers.
>
> **[3:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=189)** I'll press the run button and the table is analyzed and the query optimizer is now updated.
>
> **[3:16](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=196)** I will point out though that the need for updating statistics in SQL server is much less than in PostgreSQL because the optimizer on this platform regularly updates statistics all on its own.
>
> **[3:28](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=208)** It does this whenever it finds out that they've become out of date.
>
> **[3:31](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=211)** So it's less of a concern in SQL server.
>
> **[3:34](https://www.linkedin.com/learning/database-foundations-administration-8375189/reviewing-system-statistics?u=76281980&t=214)** The more proactive approach taken by the SQL server query optimizer is one of the many differences that set the two platforms apart.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (11), [[Microsoft SQL Server|Sql server]] (4), [[PostgreSQL]] (2), [[Fetch]] (1), [[Databases]] (1)
> **Env Vars:** sql (4), rdbms (3)
> **CLI Commands:** make (3)
> **Analogies:** just like (1), for instance (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Reading system logs](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=0)** - [Instructor] Every application running on your computer sends information about its health and activities to the operating system's log files.
>
> **[0:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=9)** Your RDBMS servers are no different.
>
> **[0:12](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=12)** It can be helpful to periodically review the logs for status updates and for troubleshooting errors.
>
> **[0:18](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=18)** Since the logs are kept outside of the relational [[Database Management]] system, the procedure for reviewing them will be different on each operating system.
>
> **[0:27](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=27)** Since our two [[Databases]] run inside of Docker containers, we can use the Docker Logs command to review them.
>
> **[0:34](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=34)** To do this, you'll want to return to your terminal or [[Powershell]] window that you've used previously for working with Docker or you can use the terminal that's built into [[Microsoft Azure|Azure]] Data Studio.
>
> **[0:46](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=46)** Now, if yours isn't open on the screen right now, you can go up to the View menu and turn it on here.
>
> **[0:52](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=52)** To review the log's contents, all you need is the command Docker Logs followed by the name of the container.
>
> **[1:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=60)** Let's take a look at the [[PostgreSQL]] container first.
>
> **[1:06](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=66)** When I press Enter, it returns a lot of information.
>
> **[1:09](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=69)** In fact, this is the full system log that's been kept since the very beginning.
>
> **[1:14](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=74)** Typically you're only interested in the most recent activity.
>
> **[1:18](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=78)** And you can get to just those lines with the Tail option of the Docker Logs command.
>
> **[1:23](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=83)** So I'll type in Docker Logs, PostgreSQL again.
>
> **[1:27](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=87)** This time I'll append dash-dash-tail followed by the number of lines that I'd like to see from the end of the log.
>
> **[1:35](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=95)** This number can be whatever you'd like.
>
> **[1:36](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=96)** I'm just going to stick to 10 lines.
>
> **[1:39](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=99)** I'll press Enter and there are the last 10 lines from the Docker log.
>
> **[1:45](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=105)** Let me go ahead and move this up on the screen a little bit so that it's higher up in your window.
>
> **[1:49](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=109)** Now, if you read through these lines, you'll recognize some of the activities that we've recently performed on our databases.
>
> **[1:56](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=116)** For instance, here on my screen are some errors that we received when we were working with different user account permissions.
>
> **[2:02](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=122)** And here is an error that I received when I mistakenly mistyped the name of the PG stat activity procedure.
>
> **[2:10](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=130)** To review the [[Microsoft SQL Server|SQL server]] logs, all we need to do is switch the name of the Docker container that we're looking at.
>
> **[2:20](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=140)** This time, I'll review Docker logs, SQL Server 2019, dash-dash-tail, 10.
>
> **[2:26](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=146)** And here are the last 10 lines from the log from the SQL Server database.
>
> **[2:31](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=151)** Some of the recent activities that I've done there are were to kill a couple of different user accounts and remove some users from the database.
>
> **[2:39](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=159)** Here is a line in the previous movie where I ran check DB.
>
> **[2:43](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=163)** And that's how you access the system logs when running your database servers inside of Docker.
>
> **[2:49](https://www.linkedin.com/learning/database-foundations-administration-8375189/reading-system-logs?u=76281980&t=169)** These are useful for troubleshooting and it should be one of the first resources that you look at any time the database isn't operating as expected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (3), [[Databases]] (2), [[PostgreSQL]] (2), [[Powershell]] (1), [[Microsoft Azure|Azure]] (1)
> **CLI Commands:** docker (10)
> **Env Vars:** sql (3), rdbms (1)
> **Tools:** terminal (2), powershell (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/database-foundations-administration-8375189/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/database-foundations-administration-8375189/next-steps?u=76281980&t=0)** - [Instructor] Congratulations on reaching the end of another course in the Database Foundations series.
>
> **[0:06](https://www.linkedin.com/learning/database-foundations-administration-8375189/next-steps?u=76281980&t=6)** Now, this is the part where I like to give you some ideas about additional content that'll expand your learning journey.
>
> **[0:13](https://www.linkedin.com/learning/database-foundations-administration-8375189/next-steps?u=76281980&t=13)** We talked a bit about operating systems in this course and there's a very strong connection between [[Relational Databases]] and the operating systems that host them.
>
> **[0:22](https://www.linkedin.com/learning/database-foundations-administration-8375189/next-steps?u=76281980&t=22)** If you wanted to learn more about the command line interface used inside of our docker containers, then take a look at the course [[[[Learning [[Linux]] Command Line]] (2023)]].
>
> **[0:32](https://www.linkedin.com/learning/database-foundations-administration-8375189/next-steps?u=76281980&t=32)** And for more information on the high availability technologies supported by different operating systems, head on over to Linux Foundation Cert Prep: System Design and Deployment or [[Windows Server]] 2019: High Availability.
>
> **[0:47](https://www.linkedin.com/learning/database-foundations-administration-8375189/next-steps?u=76281980&t=47)** As always, I've been Adam Wilbert.
>
> **[0:49](https://www.linkedin.com/learning/database-foundations-administration-8375189/next-steps?u=76281980&t=49)** Thanks again for joining me and I hope you have a great day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2), [[Relational Databases]] (1), [[Windows Server]] (1)
> **Tools:** command line (2)
> **CLI Commands:** docker (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Adam Wilbert]]

## Resources

- Exercise files available

## Skills Covered

- Database Administration

## Path Context

### In [[Introduction to Fundamental Skills for Data Work- Data Management]]
← [[Data Management Essential Training]] | **3 of 6** | [[Learning Data Governance]] →

### In [[Database Foundations- From Concepts to Applications]]
← [[Database Foundations Database Management]] | **4 of 5** | [[Database Foundations- Application Development]] →

### In [[Advance Your Database Administration Skills]]
← [[Database Foundations Database Management]] | **4 of 11** | [[Database Foundations- Application Development]] →

## Appears In

- [[Introduction to Fundamental Skills for Data Work- Data Management]]
- [[Database Foundations- From Concepts to Applications]]
- [[Advance Your Database Administration Skills]]

## Related Courses

_Courses sharing skills:_

- [[Database Foundations Database Management]] — Database Administration

---

[↑ Back to top](#)