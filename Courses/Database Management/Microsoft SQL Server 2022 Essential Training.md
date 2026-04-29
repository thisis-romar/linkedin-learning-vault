---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: microsoft-sql-server-2022-essential-training
url: "https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training"
duration_minutes: 360
duration: 6h
level: Beginner
updated: 11/22/2024
learners: 346997
skills:
  - Microsoft SQL Server
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHy_-KDY2HaAQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1732661250561?e=2147483647&amp;v=beta&amp;t=QslvEqwf8KN3JsTLwt8E73fuFvuBL42Z6IhvXH6QBb0"
linkedin_topic: Database Management
learning_paths:
  - '[[Advance Your MS SQL Server Skills]]'
prev_courses:
  - '[[Introduction To Transact Sql]]'
next_courses:
  - '[[Querying Microsoft SQL Server 2022]]'
path_nav: '[{"path":"Advance Your MS SQL Server Skills","position":2,"total":9,"prev":"Introduction To Transact Sql","next":"Querying Microsoft SQL Server 2022"}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/microsoft-sql-server
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Microsoft%20SQL%20Server%202022%20Essential%20Training.md)

![Microsoft SQL Server 2022 Essential Training](https://media.licdn.com/dms/image/v2/D560DAQHy_-KDY2HaAQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1732661250561?e=2147483647&amp;v=beta&amp;t=QslvEqwf8KN3JsTLwt8E73fuFvuBL42Z6IhvXH6QBb0)

# Microsoft SQL Server 2022 Essential Training

> This course with database expert Adam Wilbert introduces you to creating relational databases with SQL Server and the graphical interface, SQL Server Management Studio. Adam walks you through your first steps in the newest edition of Microsoft's database management system. He takes a detailed look at creating efficient tables and adding rows of data, importing existing tabular data from spreadshee

> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training) | 6h | Beginner | 347K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. Getting Started]]** (7 videos)
- **[[#2. Logging in to the Server]]** (4 videos)
- **[[#3. Creating Databases]]** (9 videos)
- **[[#4. Table Design for Healthy Databases]]** (10 videos)
- **[[#5. Structured Query Language]]** (17 videos)
- **[[#6. Writing Efficient Queries]]** (9 videos)
- **[[#7. Backup and Restore]]** (5 videos)
- **[[#8. Security]]** (5 videos)
- **[[#9. Monitoring and Management]]** (5 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Create databases with SQL Server 2022
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-databases-with-sql-server-2022?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-databases-with-sql-server-2022?u=76281980&t=0)** - [Adam] SQL Server 2022 is the newest version of Microsoft's flagship database engine.
>
> **[0:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-databases-with-sql-server-2022?u=76281980&t=6)** It powers some of the largest and most mission critical databases for companies around the globe, yet it's still able to scale down to meet the needs of any small business or independent application developer.
>
> **[0:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-databases-with-sql-server-2022?u=76281980&t=18)** In this course, I'll show you how you can leverage SQL Server's world-class capabilities for yourself.
>
> **[0:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-databases-with-sql-server-2022?u=76281980&t=24)** Hi, my name is Adam Wilbert and I've been walking people through their first steps in the world of databases for over a decade.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-databases-with-sql-server-2022?u=76281980&t=32)** Let me show you how you can get started in SQL Server to create a secure wrapper around your data and ensure that it's complete and reliable.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-databases-with-sql-server-2022?u=76281980&t=40)** I'll also demonstrate creating queries in the Transact-SQL language that'll help you analyze the data you've stored to reveal new insights.
>
> **[0:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-databases-with-sql-server-2022?u=76281980&t=48)** I'm excited about the 2022 release of SQL Server and it's never been easier to learn how to make it work for you.
>
> **[0:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-databases-with-sql-server-2022?u=76281980&t=55)** So join me on this journey of exploration into SQL Server 2022.

> [!info]- Semantic Content
>
> **Env Vars:** sql (6)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [adam] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/what-you-should-know?u=76281980&t=0)** - [Instructor] We're going to cover the essentials of working with SQL Server 2022 in this course, but I don't expect that you'll have any prior database experience.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/what-you-should-know?u=76281980&t=9)** I'll start with some fundamental concepts and build out from there.
>
> **[0:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/what-you-should-know?u=76281980&t=13)** By the end of the course, you should feel comfortable working with SQL Server and the Management Studio application to create simple databases and work with your data tables.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/what-you-should-know?u=76281980&t=23)** To get the most out of the course, you should come prepared with a working knowledge of the Windows operating system and know how to install programs and manage files.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/what-you-should-know?u=76281980&t=33)** It would also be beneficial if you've put some time into identifying your own data storage needs so that you can actively think about how to apply the course's lessons to your own unique situation.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Exploring the code challenge environment
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/exploring-the-code-challenge-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/exploring-the-code-challenge-environment?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the challenge link in the course's table of contents, each challenge includes instructions and a code editor that you can use to create and test your own solution to the challenge.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/exploring-the-code-challenge-environment?u=76281980&t=16)** These challenges are hosted by CoderPad and they appear in the same area of the course page where you watch the course's videos.
>
> **[0:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/exploring-the-code-challenge-environment?u=76281980&t=24)** We recommend using a desktop browser for the best experience with code challenges, but you can use the LinkedIn Learning mobile app if you prefer.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/exploring-the-code-challenge-environment?u=76281980&t=33)** The code challenge has three areas.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/exploring-the-code-challenge-environment?u=76281980&t=35)** We have instructions in the top left, a console for output in the bottom left, and on the right is a code editor for your answers.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/exploring-the-code-challenge-environment?u=76281980&t=44)** You can use the drag handles between these different panes to reallocate space on the screen however you'd like.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/exploring-the-code-challenge-environment?u=76281980&t=50)** To get even more horizontal space for the code editor, you can collapse the course's table of contents on the left.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/exploring-the-code-challenge-environment?u=76281980&t=56)** Now each challenge has instructions that include a description of the challenge and the challenge's desired result.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/exploring-the-code-challenge-environment?u=76281980&t=63)** You'll create your answer in the code editor.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/exploring-the-code-challenge-environment?u=76281980&t=66)** When you click on the test my code button in the bottom right, you'll see a message indicating whether your code returned a correct result and a text-based version of the returned data table.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/exploring-the-code-challenge-environment?u=76281980&t=76)** And you can scroll through this window to see all the data that's returned.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/exploring-the-code-challenge-environment?u=76281980&t=80)** If your code returns an incorrect output, you need to go over to the right and update your answer until you get a corrected answer.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/exploring-the-code-challenge-environment?u=76281980&t=88)** For this, I'm going to SELECT max(price) as price FROM Dishes.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/exploring-the-code-challenge-environment?u=76281980&t=93)** This time when I test my code, I get a correct output with the expected result of the single column showing 10.99.
>
> **[1:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/exploring-the-code-challenge-environment?u=76281980&t=101)** Now if any messages are too long to fit inside of this console window, you can use the scroll bar on the bottom to slide left and right.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/exploring-the-code-challenge-environment?u=76281980&t=109)** When you finish each code challenge, return to the course's table of contents and click to the next video to see my solution.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2)
> **Code Keywords:** this, (1)
> **SQL:** select (1)
> **Env Vars:** select (1)
> **Versions:** 10.99 (1)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Core concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=0)** - [Instructor] SQL Server is used to manage databases that range in size from a small personal database up to enterprise-scale data estates that support some of the largest corporations in the world.
>
> **[0:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=12)** So before we just dive in and start working with the platform, it's important to get familiar with a few key concepts first.
>
> **[0:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=20)** First, let's talk about what SQL Server is.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=23)** You might think that SQL Server is a database, but that's only partially correct.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=28)** Instead, it's better to think of SQL Server as a relational database management system, or what's commonly abbreviated as an RDBMS.
>
> **[0:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=37)** The key word here is management.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=40)** SQL Server manages all of the tasks associated with creating new databases and their components, such as tables, storing and retrieving data from those database tables and acts as a gatekeeper through the management of end user logins and the verification of access permissions.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=60)** SQL Server also provides options for automating services, such as creating database backups on a regular schedule, and it continuously monitors activities and can reconfigure itself to ensure that actions that end users are performing are optimized for peak performance.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=78)** So you can see that SQL Server is much more than just a place to store your valuable data.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=84)** It's an entire management system that provides a number of services to ensure that your data is protected, secure and accessible.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=93)** Because of its nature as a server-class software, SQL Server is typically always running on the computer that it's installed on, and it listens for incoming requests and commands from connected users.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=105)** When it receives communication, the server performs the required tasks and then serves data or information back to the user that requested it.
>
> **[1:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=117)** In most production environments, SQL Server would be installed on a dedicated machine or a clustered group of interconnected machines.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=125)** End users would log in remotely from their own computers to access the databases that they wanted information from.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=133)** However, SQL Server can also be installed on a local personal computer, in the cloud or in an isolated container.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=142)** These approaches provide a lot of flexibility in where the server software is actually running and how users can access them, and I'll show you how to install SQL Server using each of these methods in upcoming movies.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=155)** As a bonus, installing SQL Server on your own PC, in the cloud or using a container is also a much cheaper way to get experience with the platform, without having to purchase dedicated and expensive server-grade hardware.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=171)** A single SQL Server installation is called an instance, and each instance can hold many individual databases under its umbrella.
>
> **[3:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=181)** You might have one database to track your product offerings and inventory and a separate database to contain employee personnel records, all operating from the same SQL Server instance.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=193)** Multiple instances of SQL Server can be installed on a single computer, which helps administrators control access and manage resources, or even run different versions of SQL Server on the same hardware.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=207)** When connecting to a computer writing multiple SQL Server instances, you'll need to specify the name or the IP address of the computer as well as the name of the specific instance that you want to access before you can log in.
>
> **[3:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=221)** Once logged in, you can start sending commands that you want the server to perform.
>
> **[3:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=226)** So how do you do that?
>
> **[3:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=227)** Well, at the heart of SQL Server, as its name would imply, is something called SQL.
>
> **[3:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=233)** SQL stands for Structured Query Language.
>
> **[3:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=236)** It's the standardized way that users interact with most database platforms on the market today.
>
> **[4:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=246)** The specific implementation of SQL that Microsoft SQL Server uses, or the dialect, if you prefer, is called Transact SQL.
>
> **[4:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=256)** You'll often hear people refer to this as Transact SQL or Simply T-SQL, depending on who you're talking to.
>
> **[4:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=263)** With the T-SQL language, you'll be able to ask or query the database for information, filter and sort records and combine tables together in order to retrieve exactly the information that you need in the order and format that's required for any situation.
>
> **[4:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=281)** You'll also use T-SQL to run administrative commands, such as changing the permission granted to a user or creating new tables or other database objects.
>
> **[4:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=291)** To work with SQL Server and send Transact SQL commands, you'll need to install an additional piece of software.
>
> **[4:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=298)** By itself, SQL Server offers a command line interface.
>
> **[5:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=302)** Many system administrators will issue commands using transact SQL scripts sent directly to the server using this command line interface.
>
> **[5:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=311)** However, it's not a very intuitive environment to work with when you're first getting started with the platform.
>
> **[5:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=317)** As an alternative, you can install a graphical interface.
>
> **[5:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=321)** Microsoft provides an additional program called Management Studio that most database professionals use in order to get a graphical user interface similar to the Windows File Explorer.
>
> **[5:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=335)** It's a separate add-on program that isn't required, but we'll install it to help us get used to the server's operation and ease us into writing our own T-SQL commands in a more beginner-friendly environment.
>
> **[5:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=348)** The problem is, is that Management Studio is a Windows-only application.
>
> **[5:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=353)** I'll be using a Windows computer and Management Studio throughout this course, but if you're interested in working with SQL Server on a Linux or a macOS computer, you'll want to take a look at a different graphical interface called Azure Data Studio.
>
> **[6:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=367)** It provides much of the same functionality as Management Studio but is cross-platform and can run on any operating system.
>
> **[6:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=375)** So that's enough to get started.
>
> **[6:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=377)** The next step is to install both of the components that we need to set up our working environment.
>
> **[6:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/core-concepts?u=76281980&t=382)** The SQL Server instance will provide the backend database management services, and Management Studio will give us a user-friendly graphical front end interface.

> [!info]- Semantic Content
>
> **Env Vars:** sql (34), rdbms (1)
> **Code Keywords:** interface (6), let (1), protected (1), from. (1)
> **Prerequisites:** install (5), you'll need (2), getting started (1), set up (1)
> **Definitions:** is called (2), is a  (1), stands for (1)
> **Analogies:** such as (3)
> **Tools:** command line (2)
> **Code Identifiers:** macos (1)
> **Speakers:** - [instructor] (1)

#### Choose a SQL Server 2022 edition
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980&t=0)** - [Instructor] In order to follow along with this course and to give yourself a playground with which you can freely explore the features and capabilities of SQL Server, you're going to want to get your own copy of SQL Server running on hardware that you control.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980&t=15)** To do that, you'll want to pick the right edition for your needs.
>
> **[0:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980&t=20)** SQL Server comes in four principle editions in order to support a wide variety of usage requirements.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980&t=27)** Enterprise Edition is the most fully featured edition and it supports running on an unlimited amount of CPU cores and memory.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980&t=35)** This is the edition used by very large mission critical database applications at scales and performance levels required by some of the largest corporations around.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980&t=46)** The Standard Edition has most of the same features of Enterprise, but is limited in the number of CPU cores and the amount of memory that it can run on.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980&t=56)** This edition's performance is capped at 24 CPU cores and 128 gigabytes of memory.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980&t=63)** This is still a great choice for large organizations and licensing fees at this edition are considerably cheaper than their Enterprise Edition counterparts.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980&t=73)** So those are the two paid editions of SQL Server to choose from in order to support commercial and production database needs.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980&t=81)** Because Enterprise and Standard Editions are paid editions, they're probably not the right choice for creating your own personal database learning environment.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980&t=92)** There are some advanced feature limitations of Express Edition, such as features centered on data redundancy and automated performance monitoring that are available in the paid editions.
>
> **[1:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980&t=103)** But SQL Server Express is still a solid robust choice if you need to run a database server with no upfront costs or licensing fees.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980&t=114)** The advantage to starting with Express Edition is that you can always easily upgrade your system to a paid license in order to add additional capacity when your startup business takes off.
>
> **[2:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980&t=127)** The other free option is the Developer Edition.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980&t=130)** The Developer Edition has a feature set nearly identical to Enterprise.
>
> **[2:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980&t=135)** Developer can support an unlimited number of processor cores and memory allocations and it includes support for all of the advanced performance features.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980&t=145)** Almost everything that Enterprise can do, Developer can do.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980&t=149)** So what's the catch?
>
> **[2:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980&t=150)** Why is this one free?
>
> **[2:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980&t=152)** Microsoft only allows you to run the Developer Edition for educational purposes or to build, test, and demonstrate applications in non-production environments.
>
> **[2:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980&t=163)** This means that you can use Developer Edition to build the applications needed to open your new online shoe store, but you can't use Developer Edition to actually run the store and take orders from customers.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980&t=178)** That also means that Developer Edition will allow you to experiment with all of the features that the expensive paid editions of SQL Server offer as a student new to the SQL Server ecosystem without having to license the product all on your own.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980&t=194)** So these are the two choices I'm recommending that you start with.
>
> **[3:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980&t=198)** If you want to play around with every feature available and will not be using the database you create for real world applications, download and install the Developer Edition.
>
> **[3:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-a-sql-server-2022-edition?u=76281980&t=210)** If on the other hand, you want to immediately apply your knowledge to a business problem that you have, then look for the Express Edition.

> [!info]- Semantic Content
>
> **Env Vars:** sql (7), cpu (3)
> **Definitions:** means that (2)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Install SQL Server on your PC
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=0)** - [Instructor] If you are running a Windows PC and want to get your own copy of the installation materials, you'll start at this URL.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=8)** Click on the Try Now button.
>
> **[0:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=10)** Here we'll have three options for running SQL Server in Microsoft's Azure cloud.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=15)** Scroll down on the page a little bit though and you'll find two options for obtaining a free edition that you can install on your own computer.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=23)** The Express Edition is perfect for people that want to build databases for their small business.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=28)** I'll choose to use the Developer Edition though which is more fully featured.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=32)** It'll be a good choice if you don't plan on using the software for any real world commercial activities.
>
> **[0:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=38)** Either edition though will work well for this course.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=41)** I'll go ahead and click the Download Now button for the Developer Edition and that'll download the installer file.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=47)** When that completes, we can go ahead and close our web browser and take a look inside of our downloads folder.
>
> **[0:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=52)** Here is the installer file.
>
> **[0:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=55)** Notice that the file name indicates that it's for SQL Server 2022, and the name here indicates that I'm going to be working with the Developer Edition.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=64)** Your file name may be a little bit different depending on the version or edition that you've chosen.
>
> **[1:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=69)** In any case, we can double click on this file to get started with the installation on our own computer Here, we have three options for the type of installation that we want to perform.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=82)** The first one is a basic installation and it's actually the one that I'm going to choose in just a moment.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=87)** This is perfect for giving us a standard installation of SQL Server without us having to make a bunch of choices that at this point would be a bit overwhelming.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=96)** If you want to have full control over the specific features that are installed and setting up all of the service accounts that are required then you can choose this custom option.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=106)** This would give you the option to install additional components such as reporting services that can help you develop visually interesting reports for your data or analysis services which can help you build data models and forecasts.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=120)** The third option that we have here is useful if you want to install SQL Server on a lot of different computers.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=125)** You can download the installation media which you can then copy onto a USB drive for later use.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=131)** This option would be much faster than downloading everything over and over again for each new computer.
>
> **[2:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=138)** I'm just going to go ahead and click on the basic option at the far left.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=142)** This will allow the installer to make all of the decisions for me.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=146)** First, I need to accept the license terms then choose the installation location.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=151)** I recommend that you just leave it in the default location inside of your program files folder and a new folder for Microsoft SQL Server.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=159)** Go ahead and press the Install button.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=162)** Now this process will take a bit of time to download all of the installation files and set everything up so feel free to stand up and take a break while this moves through the process.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=176)** All right, everything finished up and we are good to go.
>
> **[2:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=179)** This page lists out some file paths and user account information that you might want to write down for reference later.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=185)** It confirms that the instance name that I'm going to be working with is the default of MSSQL server.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=191)** It also shows me my current sequel administrator name.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=195)** It's using the name of my computer which for me is Windows 10-PC and we have a back slash and my current Windows username, Adam.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=204)** You'll want to keep note of this information that you see on your screen because you'll need it later on.
>
> **[3:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=208)** Now, before we close the installer, take a look at the buttons at the bottom of the screen.
>
> **[3:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=212)** Press the Connect Now button.
>
> **[3:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=215)** This will open up the command line interface using a program called SQL Command.
>
> **[3:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=220)** This is where we can begin issuing commands to the server using Transact-SQL.
>
> **[3:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=225)** It automatically ran one for us.
>
> **[3:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=227)** This one up here at the very top that says select @@VERSION go.
>
> **[3:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=232)** This returns the version information about our server and it confirms that we're working with a SQL Server 2022 instance.
>
> **[3:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=239)** At the command prompt, you can send a command to list the databases currently on the server.
>
> **[4:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=245)** Go ahead and type in SP_databases.
>
> **[4:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=249)** Press enter and on line number two, type go.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=253)** Press Enter again, and you'll get a list of all the databases that exist on our server right now.
>
> **[4:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=258)** We have the four default databases of Master, Model, MSDB and TEMPDB.
>
> **[4:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=264)** These four databases are used by SQL Server for managing information about the personal databases that will soon be adding to the server.
>
> **[4:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=272)** So that's just a taste of the command line interface and what it looks like.
>
> **[4:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=276)** You can go ahead and close this window at this point.
>
> **[4:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=279)** As discussed earlier that interface is not the most user-friendly so we'll want to install SQL Server Management Studio to provide a graphical interface.
>
> **[4:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=289)** There's a button on this installer window at the very bottom to install SSMS and when you click on it, it opens up a webpage in the background that allows us to download the software.
>
> **[4:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=299)** I'll walk through the process of adding that application to our system in the next video.
>
> **[5:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=304)** Now at this point we have SQL Server up and running on our local computer and we confirm that the server is responding to commands.
>
> **[5:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=312)** Because SQL Server needs to fill a wide variety of use cases, there's a lot of customization options available through the installer if you choose the custom option in the beginning.
>
> **[5:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-sql-server-on-your-pc-22141827?u=76281980&t=323)** You can also run an application called SQL Server Installation Center to add or remove components from your existing installation, and you'll find that application has been added into your start menu should you ever need to make adjustments to the server.

> [!info]- Semantic Content
>
> **Env Vars:** sql (13), url (1), usb (1), mssql (1), version (1)
> **Prerequisites:** install (6), you'll need (1)
> **CLI Commands:** make (3), find (2)
> **Code Keywords:** interface (4), case, (1)
> **UI Navigation:** click on (4), scroll down (1)
> **Tools:** command line (2), command prompt (1)
> **Exercise Files:** download the (2)
> **Cross-References:** in the next (1)

#### Install Management Studio
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-management-studio-22153334?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-management-studio-22153334?u=76281980&t=0)** - [Instructor] SQL Server Management Studio will give us a graphical user interface for our database server.
>
> **[0:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-management-studio-22153334?u=76281980&t=6)** You can find the download for SSMS by navigating to this URL, or by clicking the button presented at the end of the SQL Server installation process.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-management-studio-22153334?u=76281980&t=15)** Scroll down on this page to find the download section.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-management-studio-22153334?u=76281980&t=19)** For maximum compatibility with SQL Server 2022, you want to make sure that you're getting SSMS version 19 or higher.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-management-studio-22153334?u=76281980&t=27)** Go ahead and click on the link, and that'll download another installer file onto our system.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-management-studio-22153334?u=76281980&t=33)** When that's done downloading, I'll close my web browser, I can also close the installer for SQL Server, and I'll say yes that I want to exit.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-management-studio-22153334?u=76281980&t=41)** Now, I'll just open up my File Explorer and go into my downloads folder, and here is the SSMS installer that I just downloaded.
>
> **[0:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-management-studio-22153334?u=76281980&t=48)** Let's go ahead and double click on it to start it up.
>
> **[0:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-management-studio-22153334?u=76281980&t=52)** The installation of SSMS is even easier than installing SQL Server.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-management-studio-22153334?u=76281980&t=57)** Here it tells us the location where the files will get installed, and all we need to do is press the big install button.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-management-studio-22153334?u=76281980&t=63)** That'll take a few minutes to download the packages and install the software.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-management-studio-22153334?u=76281980&t=72)** When the setup completes you may be prompted to restart your computer so you should go ahead and do that if it asks you to.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-management-studio-22153334?u=76281980&t=78)** But we're all set.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-management-studio-22153334?u=76281980&t=79)** I'll go ahead and press the close button, and we're done installing Management Studio.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-management-studio-22153334?u=76281980&t=83)** As a final step, I want to pin that to my start menu for easy access.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-management-studio-22153334?u=76281980&t=88)** You can either find it in the recently added section here, or you can scroll down until you get to the Microsoft SQL Server Tools folder, and you'll find SQL Server Management Studio right there.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-management-studio-22153334?u=76281980&t=98)** Let's go ahead and right click on it and pin it to my start menu.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-management-studio-22153334?u=76281980&t=102)** There's no need to launch it quite yet.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-management-studio-22153334?u=76281980&t=104)** We'll take a look at using SSMS extensively starting in the next chapter.

> [!info]- Semantic Content
>
> **Env Vars:** sql (7), ssms (5), url (1)
> **CLI Commands:** find (4), make (1)
> **UI Navigation:** click on (3), scroll down (2)
> **Code Keywords:** let (2), interface (1)
> **Prerequisites:** install (2), setup (1)
> **Versions:** version 19 (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** download the (1)

#### Enable features with Configuration Manager
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=0)** - [Narrator] I've just installed SQL Server, but if I look around on my desktop, I'm not going to find any indication that it's currently running. There is no program button on my task bar, and if I take a look inside of my system icon tray, you're not going to see any icons there related to SQL Server either.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=16)** However, the server is currently running on my computer and it's waiting for users to make a connection.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=22)** To check on the status of the server, I'm going to go over to my Start menu, and I'll find a program inside of the Microsoft SQL Server folder called SQL Server Configuration Manager.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=33)** It's this icon right here with a toolbox.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=36)** In fact, I'm going to right click on it and pin it to my start menu for easy access.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=41)** Then we can start it up.
>
> **[0:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=43)** Configuration Manager will show you a list on the left side of all of the different service types that have been installed.
>
> **[0:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=49)** This is where you would go to adjust network configuration settings, for example, so that other users can connect to the database server that's running on your computer over an office network.
>
> **[1:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=61)** Click on SQL Server Services on the left and we'll take a look at this middle panel.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=66)** The SQL Server Browser is used to help end users connect to the correct instance.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=72)** Next, we have the SQL Server instance itself, which has the name MSSQL Server that you may remember seeing in the installation video.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=82)** Finally, I have an agent service, and this is used for scheduling automated processes.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=88)** Notice that both the browser and the agent are in a stopped state.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=92)** They're not currently running on my machine, which is fine for now because I'm not expecting any other users to connect to my database server, so I don't need the browser and I don't have any automated tasks scheduled yet, so I don't need the agent.
>
> **[1:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=108)** The SQL Server instance in the middle, on the other hand, is currently running.
>
> **[1:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=113)** Notice these small overlay icons on the left.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=116)** These also convey the same settings.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=119)** We see a red square for the services that are stopped, and a green triangle for the service that's running.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=125)** When you click on the SQL Server instance, you'll see four additional buttons appear in the toolbar.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=130)** These will allow you to start the service, pause it, stop the service, or restart the service.
>
> **[2:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=138)** If you right click on the SQL Server instance, and choose properties, you'll see the same buttons down here at the very bottom, to Start, Stop, Pause, or Restart the instance.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=149)** Flip over to the Service tab at the top.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=152)** Here we could take a look at the Start Mode property.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=155)** Mine is set to Automatic.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=158)** This will automatically start SQL Server when my computer boots up, so if I restart my computer, SQL Server will also get restarted and be available as soon as Windows finishes loading.
>
> **[2:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=170)** The other options here are to set Startup to Disabled.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=173)** I'll use the dropdown menu, you'll see those options there.
>
> **[2:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=177)** Disabled will make the service unable to start.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=180)** The other option is to set it to Manual.
>
> **[3:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=183)** In the Manual mode, SQL Server will not automatically start when the computer reboots, and it must be manually started each time.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=191)** Depending on the type of work that you do and how often you require access to your databases, you can decide if it's best to allow SQL Server to start running automatically or to choose to start it manually only when you need it.
>
> **[3:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=205)** I'll leave mine set to Automatic.
>
> **[3:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=208)** While you're here, you can also activate the other tabs in this property sheet.
>
> **[3:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=211)** For instance, the Advanced tab here.
>
> **[3:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=214)** I'd take a quick run through and take a look at all of the different settings that are contained here.
>
> **[3:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=219)** Most of these are grayed out and they can't be changed, but they can give you some useful information about these servers configuration that you may need to reference from time to time.
>
> **[3:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=228)** When you're done looking around, go ahead and say Okay to close the properties window.
>
> **[3:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=234)** At this point, we can also close SQL Server Configuration Manager.
>
> **[3:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=238)** So that's the process of confirming the status of your database server.
>
> **[4:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-features-with-configuration-manager?u=76281980&t=247)** Remember that the instance will need to be running before you'll be able to make a successful connection.

> [!info]- Semantic Content
>
> **Env Vars:** sql (15), mssql (1)
> **UI Navigation:** click on (4), in the toolbar (1), dropdown (1)
> **CLI Commands:** make (3), find (2)
> **Code Keywords:** finally, (1), require (1)
> **Analogies:** for example (1), for instance (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [narrator] (1)

#### Deploy SQL Server 2022 in the Azure cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=0)** - (Narrator) Installing SQL Server the traditional way onto your personal computer or a local server machine is only one way to get up and running.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=9)** But what if you only have access to a low powered machine or you simply don't have enough available hard drive space to accommodate the installation?
>
> **[0:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=16)** Well, in those cases, you can offload the installation to remote machines in the cloud and connect over the internet.
>
> **[0:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=24)** Microsoft's Azure platform allows you to do just that.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=28)** You can provision the resources that you need and get a SQL Server instance up and running by deploying a virtual machine.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=36)** The benefit of this approach is that Microsoft handles all of the work associated with keeping the hardware in a good, healthy state.
>
> **[0:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=43)** They apply any security or feature update patches automatically and make your database available worldwide over the internet.
>
> **[0:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=52)** In this age where more and more people are working remotely, this arrangement can make it extremely easy for everyone to access the databases that they need from wherever they choose to work.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=64)** To explore this option, you'll start at portal.[azure.com](https://azure.com).
>
> **[1:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=69)** You'll need to have a Microsoft account.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=70)** You can sign up for a free trial if you've never accessed the service before.
>
> **[1:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=75)** Once you've logged in and are accessing your main dashboard, access the menu on the left hand side and then choose create a resource.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=84)** Next, we'll search the marketplace for SQL Server 2022.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=92)** Here you should find the option to create a virtual machine for SQL Server 2022 on Windows Server 2022.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=100)** Make sure it's the resource provided by Microsoft and then go ahead and click it to start the process.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=106)** Now, there may be a couple of different plans that you can choose from this dropdown menu.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=109)** I'll just choose the option to install a free SQL Server license of the community technology preview version of SQL Server 2022.
>
> **[1:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=117)** I'll go ahead and choose that and then press Create.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=120)** Then we just need to configure a few settings to set everything up.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=124)** I'll start a new resource group by clicking the Create new button here, and I'll just give it a name.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=129)** I'll call it AW underscore resource group.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=134)** We'll say, okay, and then it'll apply that name.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=137)** Next, we'll give the virtual machine a name.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=139)** I'll call mine AW Virtual Machine.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=145)** We could choose a region.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=146)** I'll just leave it as the default for me in the South Central US.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=149)** And the same with the availability zone.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=151)** Let's scroll down here and we'll find the image.
>
> **[2:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=154)** It's going to be using the community technology preview version of SQL Server 2022, which is fine.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=159)** Next, we'll choose the size for our virtual machine.
>
> **[2:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=163)** I'll use the dropdown menu and then press see all sizes.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=167)** Now, there will be some costs associated with this, so you'll want to make sure that you're paying attention to those costs.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=173)** You can see those by scrolling down here through the list or scrolling over to the right.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=178)** I'm going to scroll through the list of available virtual machine sizes, and I'm going to choose B2s.
>
> **[3:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=184)** This is a general purpose machine that includes two CPUs and four gigabytes of ram.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=190)** I'll choose the select button and that'll place it over here and it'll show me the price.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=195)** To deploy this virtual machine, I can expect to spend about $42 and 27 cents per month.
>
> **[3:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=203)** Let's scroll down a little bit further.
>
> **[3:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=205)** We'll take a look at our administrator account.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=207)** I'll give my admin a username.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=209)** I'll just call him Adam.
>
> **[3:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=211)** We'll set up a password.
>
> **[3:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=215)** And I'll scroll through here, make sure everything else is set.
>
> **[3:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=217)** Everything looks good, and I'll press next to move on to choose some discs information.
>
> **[3:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=223)** I'll leave the default to use some premium SSD discs, but you have other options here depending on the type of hard drives that you'd like to use for your virtual machine.
>
> **[3:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=231)** Let's go ahead and press next and move over to networking.
>
> **[3:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=234)** Everything looks good here.
>
> **[3:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=235)** I'll just accept all the defaults.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=237)** We'll go to management.
>
> **[3:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=239)** Once again, I'll leave all the defaults here and press advanced.
>
> **[4:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=244)** We can scroll through to see if we wanted to add any custom data or custom virtual machine applications.
>
> **[4:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=249)** Once again, I'll just leave the defaults.
>
> **[4:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=251)** We'll go to the SQL server settings now.
>
> **[4:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=255)** For a SQL Server connectivity, we have the option of either leaving it within your virtual network, local within the VM only, or public from the internet.
>
> **[4:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=264)** I'll choose that option to set it to public so that it's easier to make connections from my computer.
>
> **[4:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=269)** I'll also enable SQL authentication, and we'll use the admin name that I typed in previously.
>
> **[4:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=274)** Adam and the password right there.
>
> **[4:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=277)** Let's go ahead and scroll down.
>
> **[4:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=278)** Take a look at these other settings.
>
> **[4:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=280)** Everything looks good here, and I'll press next to go to tags.
>
> **[4:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=284)** I don't need to change anything here, and we'll finally go to the review and create step.
>
> **[4:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=291)** This allows me to confirm the costs that'll be associated with setting up this virtual machine and here they're listed per hour, so it's about a nickel per hour.
>
> **[4:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=299)** I'm going to scroll down here and I'll make sure that I accept all of the terms.
>
> **[5:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=304)** There's all of the settings there.
>
> **[5:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=307)** And finally, I'll press the Create button.
>
> **[5:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=314)** That'll go through the process and set up my virtual machine.
>
> **[5:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/deploy-sql-server-2022-in-the-azure-cloud?u=76281980&t=318)** Once the resources finished deploying, you'll have your own cloud hosted SQL Server instance up and running, and you'll be able to connect to it from Management Studio just like you can with a traditional installation on your own computer.

> [!info]- Semantic Content
>
> **Env Vars:** sql (11), ssd (1)
> **UI Navigation:** scroll down (4), go to (4), dropdown (2)
> **CLI Commands:** make (7), find (2)
> **Code Keywords:** let (4), public (2), this, (1), finally, (1)
> **Prerequisites:** set up (2), you'll need (1), install (1), configure (1)
> **URLs:** [azure.com](https://azure.com) (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)

#### Work with SQL Server in Docker
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=0)** - [Instructor] There is one additional way to get up and running with your own personal SQL Server instance, and that's to run the entire thing in an isolated container, using a program called Docker.
>
> **[0:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=12)** Docker allows you to compartmentalize your applications.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=15)** And by running SQL Server in a container, it makes it very easy to create, duplicate, backup, restore, and completely remove your entire server without ever having to make a change to the rest of your computer.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=29)** Docker containers exist as a single file on your computer, and they contain everything the SQL Server instance needs to operate.
>
> **[0:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=38)** For working with a new platform or experimenting and learning about new features, this is by far my preferred method of deploying SQL Server.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=47)** And the best part is that this is a cross-platform solution, so it'll work on Windows, Linux, and macOS computers, unlike the traditional installation.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=58)** The process starts by installing Docker, which you can find at [docker.com](https://docker.com).
>
> **[1:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=63)** Click on Products in the top menu and then click Docker Desktop from the right-hand column.
>
> **[1:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=69)** Then, I'll click the link to download for the appropriate operating system.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=73)** I'm on Windows, so I'll go ahead and click on that link, and it'll download the file.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=80)** Once the installer is downloaded, I'll close out of the web browser.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=83)** We'll take a look at the Downloads folder and I'll start the installation process.
>
> **[1:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=89)** I'll allow it to make changes to my computer and then, I'll just accept the default configuration and press OK.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=98)** That'll go through and unpack a bunch of files and install it on my system.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=106)** At the end of the process, it tells me that I need to restart Windows to complete the installation, so I'll go ahead and do that now.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=115)** When the computer, reboots, Docker shows me their service agreement.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=118)** I'll go ahead and accept the terms and press the Accept button.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=123)** And then, Docker will attempt to start.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=125)** Now, on Windows, after a few minutes, you'll see this pop up message here.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=129)** There's actually one additional step that we need to move through.
>
> **[2:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=132)** Click on the link that'll open up a Microsoft page.
>
> **[2:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=135)** And while that's opening up in the background, I'm just going to drag this window and drag it to the bottom of the screen.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=139)** We need to download the Linux kernel update package from Microsoft.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=145)** Now, there's a lot of different steps on this particular page, but the only step that we need to do is this one that it takes us to, this step number four.
>
> **[2:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=153)** I'll download the Linux kernel update package for x64 machines by clicking that link there and I'll choose to keep it in my Downloads folder.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=161)** Once it's done downloading, I'll choose to open that file and run the package.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=166)** This will simply move me through the steps.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=167)** I'll go ahead and press Next on this screen, I'll allow it to make changes to my system, and then I'll press Finish.
>
> **[2:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=174)** All right, that's all taken care of.
>
> **[2:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=175)** I can go ahead and close my browser and I'll return back to this message window.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=180)** I'll press the Restart button now.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=186)** That'll restart Docker Desktop.
>
> **[3:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=188)** Once Docker is starting, it'll take me to this page.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=191)** I'll just choose to skip the tutorial and it'll take me back to this page that shows me by various containers.
>
> **[3:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=197)** Now that Docker is running, we need to create our SQL Server container.
>
> **[3:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=201)** To do that, we need to run a short command in the terminal or the command prompt application.
>
> **[3:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=206)** I've got a copy of what we need to run inside of the course exercise files.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=209)** I'll go into the chapter one folder and I'll open this Docker_SQL_Server_2022.txt file.
>
> **[3:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=217)** The command on Windows that I need to run is this one right here.
>
> **[3:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=221)** There's also a command if you're running this on macOS or Linux computers with Intel processors.
>
> **[3:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=226)** Now, at this point in time, there is no SQL Server 2022 image that's compatible with Apple Silicon M1 or M2 based computers.
>
> **[3:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=236)** There is an image that you can use and I have the command to load that right down here, at the very bottom.
>
> **[4:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=241)** But just keep in mind that it's slightly different than SQL Server 2022.
>
> **[4:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=245)** I'm on a Windows computer, though, so I'm going to go ahead and copy this whole command here up at the top.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=250)** I'll just copy all of that and place it on my clipboard.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=253)** Then, I'll close that down.
>
> **[4:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=255)** I can also close the chapter one folder and I'll start up my command prompt.
>
> **[4:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=259)** I'll just do a search for cmd and press Enter to run it.
>
> **[4:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=263)** Then, I'll paste in that text there and press Enter to run it.
>
> **[4:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=268)** That's going to go through and download the image from Microsoft, and it'll create a new Docker container that contains SQL Server.
>
> **[4:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=280)** I will note here that the password that we're using for the system administrator account is Adam123456.
>
> **[4:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=288)** Feel free to change this text here in the command before you run it.
>
> **[4:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=293)** Once that's done, we can close the command prompt and we'll return to Docker Desktop.
>
> **[4:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=298)** Then, the Containers page will update and we'll see our new SQL Server 2022 container listed right there, and it has a status of Running.
>
> **[5:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=306)** There are options over here on the right if you wanted to pause or stop the container, or restart it, or you can completely delete it when you're done working with it.
>
> **[5:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=315)** Now, at this point, I have a SQL Server 2022 instance running inside of an isolated Docker container.
>
> **[5:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=322)** This keeps the processes separated from my main computer, but I can log into it and manage any databases on this instance from Management Studio in exactly the same way that I can access my traditionally installed SQL Server instance.
>
> **[5:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=338)** As you can see, there are lots of options for running SQL Server and you should think about and choose the option that best suits your needs.
>
> **[5:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/work-with-sql-server-in-docker?u=76281980&t=346)** But no matter if you choose a traditional installation, a cloud-hosted installation, or a Docker container installation, the software is exactly the same, and the same procedures will apply with accessing your databases and working with the data that they contain.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (15), make (3), find (1)
> **Env Vars:** sql (12)
> **Tools:** docker desktop (3), command prompt (3), terminal (1)
> **Exercise Files:** download the (4), exercise files (1)
> **UI Navigation:** click on (3)
> **Code Identifiers:** macos (2)
> **Definitions:** is a  (1), is an  (1)
> **File Paths:** docker_sql_server_2022.txt (1)


### 2. Logging in to the Server

> [[#Table of Contents|↑ Back to Table of Contents]]

#### User permissions and authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=0)** - [Instructor] Databases often contain sensitive or proprietary information, and one of the primary responsibilities of SQL Server is to protect your data from unauthorized access.
>
> **[0:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=12)** Each user that connects to the server needs to be authenticated and given a set of permissions that defines what they can do.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=21)** Anyone that accesses a database server is considered a user.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=25)** Often, these are real people like you and me.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=27)** But a user can also be an application or other computer system that's requesting information from the database server.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=35)** Everyone, and everything that accesses the server needs to be authenticated through a login process.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=42)** SQL Server provides two different methods for authenticating user access.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=47)** The first is called Windows Authentication which uses your Windows Operating Systems login account and it passes those credentials over to SQL Server.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=57)** This makes it easy for many users because they won't have to remember a new account name and password.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=64)** This method is also easy for large organizations to manage because the credentials are often stored company wide through services such as Active Directory.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=76)** The second method is called SQL Server Authentication.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=80)** With this method, usernames and passwords are stored on the SQL Server instance itself.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=86)** And users will need to provide those credentials when they connect.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=90)** This method is often easier to implement for smaller organizations that don't use a centralized identity management system.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=100)** Once authenticated and logged in, users will take on several different roles depending on the tasks that they need to perform.
>
> **[1:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=108)** These roles provide a layer of security and allow users to only access areas of the system that they need in order to do their jobs.
>
> **[1:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=117)** At the top of the list are system administrators.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=120)** They oversee the configuration and management of the server itself, and they have full access to do anything that they want.
>
> **[2:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=128)** They will configure and maintain the server's hardware and create and manage other user accounts that are allowed access into the system.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=137)** Then, each individual database will have one or more database administrators that are in charge of creating and maintaining tables and populating them with data, performing backups and establishing user permissions within the database itself.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=152)** Finally, we have database user accounts.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=156)** Users at this level are primarily concerned with adding new rows of data to the database and reading and analyzing data that's previously been stored.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=165)** Database users must be granted specific permissions to access data within the database from the administrators though.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=173)** For instance, a database user might only need to read records from a specific table and should be blocked viewing information stored in other tables that hold data that's not related to their area of responsibility.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=186)** Or a user may be allowed to only read existing data and not add or modify anything.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=193)** There's lots of flexibility here with user permissions that all work together to protect and secure the data.
>
> **[3:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=200)** In this course, we'll look at some of the many tasks that system administrators will be responsible for performing.
>
> **[3:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-permissions-and-authentication?u=76281980&t=206)** Of course, depending on the security requirements of your organization, all of these roles can be performed by a single person or they can be used to carve out specialized areas of responsibility to help ensure that sensitive data remains secure.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5)
> **Definitions:** is called (2)
> **Analogies:** such as (1), for instance (1)
> **Code Keywords:** finally, (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Log in with Management Studio
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=0)** - [Instructor] We've got SQL Server installed.
>
> **[0:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=2)** And we installed Management Studio, our graphical front end for working with the server.
>
> **[0:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=6)** So let's go ahead now and log into the server and take a first look around.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=11)** I'll come down to my start menu, and we'll activate SQL Server Management Studio Version 19 that I previously pinned there.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=17)** That I'll go ahead and start up the application.
>
> **[0:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=20)** And as soon as it loads up, we'll be presented with this connect to server window.
>
> **[0:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=24)** Here we get to define the parameters for connecting to our SQL Server instance, and a lot of these are going to already be filled in for us.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=32)** We have the option of server type, and I'm going to be connecting to a database engine.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=36)** But you have different types of SQL Server services that you can connect to, including reporting services, integration services, or Azure SSIS Integration Runtime.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=47)** Now, I don't have any of these actually installed on my system, so I'll just leave it here to the database engine itself.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=53)** Next up, we have the server name.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=56)** This should be populated with the name of your computer.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=59)** You can the dropdown menu and browse for additional servers if you need to connect to a server on a different computer on your network.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=66)** Mine is installed locally, so I'll just leave it with the name of my pc.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=71)** Next step, we get to choose our authentication method.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=74)** We have Windows authentication, SQL Server authentication, and then we have some options if our organization is using Active Directory right here.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=83)** Now when I installed SQL Server, it added my current Windows user account as a system administrator.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=90)** So by choosing Windows authentication, we don't need to supply a username and password.
>
> **[1:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=95)** And you'll actually notice that the username and password boxes are grayed out.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=100)** It's automatically filling in the username as my Windows operating system login account.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=109)** So that's all I need to log in.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=111)** Before I press the connect button though, you can also press the options button over here on the right.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=119)** This will expand the window and gives us access to some more detailed networking settings that will probably not need to be changed, but depending on the peculiarities of your network, your IT administrators might need you to configure these network and connection settings.
>
> **[2:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=135)** I don't need to make any changes to any of these tabs, so I'll switch back over here to the login tab.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=140)** And then finally, press connect.
>
> **[2:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=143)** Once connected to the database engine, you'll see those results populate over here in the window on the far left called the Object Explorer.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=151)** This area provides a tree view of all of the contents of the SQL Server instance that you've connected to.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=159)** At the top level, we have databases, security items, server objects, and so on.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=166)** You can expand each of these folders to see what they contain.
>
> **[2:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=169)** For instance, inside of the databases folders, we have sub folders for system databases and database snapshots.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=176)** Going into the system databases folder reveals the four default databases that SQL Server installs with: master, model, msdb and tempdb.
>
> **[3:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=187)** You might remember these four names appearing when we were using the command line interface during the installation process.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=195)** At the top of the connection, we have a line that shows us what the instance that we're looking at is.
>
> **[3:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=201)** It has the name of the pc, the name of the server that we're connected to, as well as its version.
>
> **[3:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=206)** And if I expand this window open, you'll see also the login account that we're authenticated with.
>
> **[3:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=213)** If you want to disconnect from the server instance, you'll use this button here at the top of the Object Explorer panel, the one with the plug and the red x.
>
> **[3:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=221)** That'll disconnect from the instance, and it'll remove it from the Object Explorer.
>
> **[3:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=226)** You can then click on this plug icon to reopen the connect to server dialogue window where you can put in your credentials again and reconnect to the same server.
>
> **[3:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=236)** So now I have a connection established to my local SQL Server installation, and we're ready to start sending commands using the tools available here in Management Studio.
>
> **[4:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=246)** Now, before I wrap up this video though, I want to make a couple of changes to the working environment so that it will be easier for you to see what I'm doing.
>
> **[4:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=255)** Let's go up to the tools menu and come down and click options.
>
> **[4:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=261)** Then we'll go into the environment options, and under that click fonts and colors.
>
> **[4:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=269)** Then we'll take a look at the settings for the text editor.
>
> **[4:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=272)** I'm going to change the font size up a bit, so the default is 10 and I'm just going to change this to 14.
>
> **[4:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=279)** Then we'll come back up to this dropdown menu and show the settings for the grid results.
>
> **[4:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=284)** I'll change this default font size from 8 up to 12 points.
>
> **[4:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=288)** And once again, we'll go to show settings for.
>
> **[4:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=290)** I'll change this to text results, and again, I'll put in a size of 12 points.
>
> **[4:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=296)** Finally, I need to come back over here to the left hand side and open up the text editor section.
>
> **[5:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=301)** Then I'll click Transact-SQL.
>
> **[5:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=304)** This brings up a warning that the changes that I just made aren't going to appear until I restart the application, so that's just good to know.
>
> **[5:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=310)** I'll press the OK button here.
>
> **[5:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=311)** Then we'll go into that Transact-SQL folder over on the left.
>
> **[5:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=316)** Finally here, I'm going to place a check mark in this option here to show line numbers when we're reviewing code.
>
> **[5:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=322)** This will make it easier for me to identify specific lines of code later on in the course, so that you can follow along with what I'm doing.
>
> **[5:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=330)** Okay, with all of those changes made, I'll press the OK button.
>
> **[5:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=333)** And I need to remember to restart Management Studio for those changes to make effect.
>
> **[5:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/log-in-with-management-studio?u=76281980&t=337)** So I'll go ahead and do that now.

> [!info]- Semantic Content
>
> **Env Vars:** sql (11), ssis (1)
> **Code Keywords:** let (2), finally, (2), type, (1), switch (1), interface (1)
> **CLI Commands:** make (4)
> **UI Navigation:** dropdown (2), click on (1), go to (1)
> **Versions:** version 19 (1)
> **Tools:** command line (1)
> **Analogies:** for instance (1)
> **Best Practices:** remember to (1)

#### Enable the System Administrator account
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=0)** - [Narrator] By default, SQL Server will only allow Windows Authentication logins to the server.
>
> **[0:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=5)** We can enable SQL Server authentication, that requires a username and password to be used, as an alternative way to gain access into the system.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=15)** Right-click the connection, at the top of the Object Explorer panel, and then come down and choose Properties.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=22)** There are lots of Server Properties that we can configure here, and they're split into different pages that you'll see listed down on the left.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=30)** The one that we're interested in right now, is under Security.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=34)** At the top, there are the authentication options.
>
> **[0:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=37)** And I'll choose to enable SQL Server, and, Windows Authentication modes.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=42)** This is something internally called mixed mode, where either account type can be used to log in.
>
> **[0:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=49)** This setting is great for testing and development, of your database projects.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=53)** But Microsoft actually discourages SQL Server authentication, in production databases, because Windows Authentication only creates a much more rigorous way, to verify the identity, of the people that are accessing your data.
>
> **[1:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=67)** And Windows account types are typically managed, to follow security best practices of the organization, through Active Directory.
>
> **[1:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=75)** Windows Authentication can even integrate with fingerprint scanners, or RFID badges, in some cases.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=82)** And that can make it even more secure.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=86)** With SQL Server authentication, on the other hand, anyone that knows the username and password, can gain access.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=94)** It's not uncommon for several people to use the same SQL Server authentication account, during the development of an application.
>
> **[1:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=103)** But when you're working with real data, you want to be able to review audit logs to see exactly who is accessing, what data, when.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=111)** You need to know, for example, that the warehouse manager can only review data about product inventory.
>
> **[1:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=117)** And not have access, to every customer's credit card information.
>
> **[2:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=121)** That level of control and security of your information, really only comes from Windows Authentication only.
>
> **[2:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=128)** Now, with all of that said, I'm going to leave my server in mixed mode for the time being.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=134)** That's because, frankly, it's easier.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=136)** And I like to have options to explore how SQL Server works, when viewed from the perspective of different users, with different levels of access permissions.
>
> **[2:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=147)** So with this change made in the properties, I'll come down to the bottom and press OK.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=152)** This tells me that I need to restart SQL Server, in order for those changes to take effect.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=157)** Let's go ahead and say OK to that, and we'll restart the server.
>
> **[2:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=160)** Now.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=161)** To do that, I will right-click on the server connection, in the Object Explorer, and I'll choose Restart.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=168)** Windows is going to warn me that it's about to make changes to my system.
>
> **[2:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=172)** So, we'll just say Yes to that.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=173)** And you'll see a couple of messages appear on the screen.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=176)** Am I sure that I want to restart SQL Server?
>
> **[2:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=178)** I'll say Yes to that.
>
> **[3:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=182)** And, after a moment, you'll see the icon here change to, indicate that the server has stopped, and then finally it changes again to indicate that the server has restarted.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=191)** So now the server will accept both a Windows login and, a SQL Server login.
>
> **[3:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=197)** Now we can take a look at a special User account.
>
> **[3:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=200)** SQL Server uses an account named SA, which stands for System Administrator.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=207)** You can find it by drilling into the Security folder, and then opening Logins.
>
> **[3:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=212)** This will show you all of the user accounts that have been authorized to access the server.
>
> **[3:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=217)** Including a couple of internal accounts, that the system uses to manage itself, as well as my Windows account down here at the bottom.
>
> **[3:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=227)** This is the account that I'm currently using.
>
> **[3:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=230)** You'll also see the SA account.
>
> **[3:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=232)** This is the System Administrator.
>
> **[3:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=235)** The red X overlay icon indicates, that this is currently disabled.
>
> **[3:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=239)** So let's right-click on it, and choose Properties.
>
> **[4:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=243)** Next, we need to update the password, for the SA user.
>
> **[4:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=247)** Let's give it a new password that includes lowercase and uppercase characters, numbers, and symbols.
>
> **[4:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=252)** And we'll confirm the same password.
>
> **[4:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=258)** Then we'll take a look at the Status page, by clicking that on the left.
>
> **[4:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=263)** Here, I'll choose to Enable that login.
>
> **[4:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=267)** Press the OK button to save those changes.
>
> **[4:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=270)** And after a moment, you should see this icon update over here, in the Object Explorer panel.
>
> **[4:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=275)** If it doesn't update automatically, you can right-click on the Logins folder, and choose Refresh.
>
> **[4:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=280)** And there it is.
>
> **[4:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=281)** That red X is no longer present.
>
> **[4:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=284)** So now this gives us another option, for logging into the server.
>
> **[4:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=289)** In fact, we can make two different connections, to the same SQL Server instance at the same time, using two different accounts.
>
> **[4:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=298)** I'll press the plug button, at the top of the Object Explorer toolbar, to bring up the Connect To Server dialogue window again.
>
> **[5:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=305)** This time, I'll connect to the same server, on the same PC that I've been working with, and I'll change the authentication method over to, SQL Server Authentication.
>
> **[5:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=314)** I'll provide the SA user account name as the Login name, and I'll type in the strong password that we just created.
>
> **[5:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=325)** Then I can press the connect button, and it'll create a second connection to the same database server.
>
> **[5:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=331)** And it'll see that it adds in the SA account, here.
>
> **[5:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=334)** So now I have two different connections.
>
> **[5:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=336)** If I scroll up here to the top, I have one connection that uses my Windows login, and I have a second connection here, that's using the SA login.
>
> **[5:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=346)** So now I can perform tasks, and browse the server's content, with the authorization of either account.
>
> **[5:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=354)** So these are the two main accounts that we're going to be using.
>
> **[5:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=357)** Our Windows login account, and the SA, System Administrator account.
>
> **[6:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=363)** Both of these are administrator level accounts though, which means that they both have full and open access, to everything on the server.
>
> **[6:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=370)** At this point we're just kicking the tires on SQL Server.
>
> **[6:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=373)** Learning how the system works, and we're not storing any real-world mission critical data.
>
> **[6:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enable-the-system-administrator-account?u=76281980&t=378)** But if and when that time comes, consider coming back into the servers properties and implementing a more secure login protocol, by enforcing Windows Authentication only and disabling this SA account.

> [!info]- Semantic Content
>
> **Env Vars:** sql (14), rfid (1)
> **UI Navigation:** right-click (4), scroll up (1)
> **CLI Commands:** make (3), find (1)
> **Code Keywords:** let (3), default, (1)
> **Definitions:** stands for (1), means that (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [narrator] (1)

#### Connect to Azure and Docker servers
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=0)** - [Instructor] Management Studio will allow you to connect to multiple SQL Server instances at the same time, and they'll just show up one on top of another over here in the Object Explorer panel.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=11)** In the previous chapter, I created two additional database servers, one running in an Azure Cloud hosted virtual machine, and a second one that's running inside of a Docker container.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=23)** So let's connect to both of those instances now.
>
> **[0:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=26)** First, I'll connect to the Azure Virtual Machine.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=30)** There's a couple of pieces of information that we need to gather first.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=34)** Go ahead and log into your Azure portal, and you'll see that the dashboard has now updated to list out all of the different components that have recently been added into the account.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=45)** Find the resource called the Virtual Machine and click on the link.
>
> **[0:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=49)** That'll take you to the overview page where you can locate the public IP address for this machine.
>
> **[0:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=55)** Go ahead and write this number down or copy it into your clipboard.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=59)** Next, we need the port that SQL Server is using.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=63)** Go back to the dashboard and then find the link for the SQL Virtual Machine.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=68)** Go ahead and click that.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=71)** Then, in the side panel on the left, scroll down to security configuration.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=76)** Click that and that'll reveal the port that SQL Server is using on this Virtual Machine, and it's 1433.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=83)** In fact, it's almost always going to be 1433 for SQL Server.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=87)** It's just good to verify it here.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=90)** The only other thing that we need to know is the administrator user account name and password, and those were set up when I deployed the Virtual Machine.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=99)** Hopefully you remember or wrote down the information that you used.
>
> **[1:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=103)** So now we're ready to log in from Management Studio.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=106)** In the Object Explorer panel, I'll click on the plug icon.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=110)** For the server name, we'll type in the IP address that we just wrote down.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=119)** Next, I'll type in a comma and a space followed by the port that SQL Server is using, 1433.
>
> **[2:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=126)** We'll leave it set to the authentication mode of SQL Server authentication, and we'll type in the administrator's login and password that were established when the Virtual Machine was created.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=136)** I used the administrator name Adam and I had the password of Adam123456789.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=146)** Go ahead and press connect, and it should make a connection into the Virtual Machine's database server.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=152)** After a moment, it'll display it over here in the sidebar, and just like with our local instance, we can browse its contents by expanding the different folders.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=162)** You can see that this instance is running a version of SQL Server that's exactly the same as the version that I installed locally.
>
> **[2:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=169)** You can see those version numbers match up right there.
>
> **[2:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=172)** So there's the connection to the Virtual Machine.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=176)** Let's now create one more connection into the Docker instance.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=180)** Let's go ahead and open up the chapter one folder of the exercise files again and take a quick look at that text file that we used to set it up.
>
> **[3:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=189)** Here, we established that we're going to be using the SA user account, and we set up a password here.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=195)** In this case, I used Adam123456.
>
> **[3:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=198)** You might have used a slightly different password if you changed it.
>
> **[3:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=202)** The other piece of information that we can get here is the port that was set up.
>
> **[3:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=206)** In this case, I used port 1401.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=209)** You can also see that port information by going down and taking a look at the container that's running inside of Docker Desktop.
>
> **[3:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=217)** So here's my SQL Server 2022 container, and it's using port 1401.
>
> **[3:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=223)** Since Docker is running on my personal computer, I don't actually need an IP address for this one.
>
> **[3:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=228)** I can instead use the word local host in our connection string.
>
> **[3:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=233)** Okay, so that's all the information I need.
>
> **[3:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=235)** Let's go ahead and go back into Management Studio.
>
> **[3:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=238)** Once again, I'll click the plug icon to open up the connect to server dialogue window.
>
> **[4:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=242)** In this slide, we'll type in the new server name of local host, comma, the port 1401.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=250)** Once again, we'll use SQL authentication.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=253)** The login account is SA and the password was Adam123456.
>
> **[4:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=260)** I'll press connect and we get a fourth connection appear over here in the Object Explorer.
>
> **[4:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=265)** This one connects me into the SQL Server instance that's running inside Docker.
>
> **[4:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=269)** In fact, if you look at the icon for this connection, you'll see that we have a very tiny little penguin.
>
> **[4:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=275)** This is the Linux mascot, which indicates that this server is running on Linux inside of the container.
>
> **[4:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=282)** So as you can see, we have lots of options for how you can run SQL Server.
>
> **[4:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=286)** Either locally, remotely, in a virtual machine, or in a container.
>
> **[4:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/connect-to-azure-and-docker-servers?u=76281980&t=291)** Once you know the IP address, port and login credentials, you can connect and work with any instance from the same interface here in Management Studio.

> [!info]- Semantic Content
>
> **Env Vars:** sql (12)
> **CLI Commands:** docker (5), find (2), make (1)
> **Code Keywords:** let (4), case, (2), public (1), interface (1)
> **UI Navigation:** click on (2), scroll down (1), in the sidebar (1)
> **Ports:** port 1401 (3)
> **Prerequisites:** set up (3)
> **Cross-References:** previous chapter (1), go back to (1)
> **Tools:** azure portal (1), docker desktop (1)


### 3. Creating Databases

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Create the first database
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=0)** - [Instructor] SQL Server is not a database.
>
> **[0:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=2)** It's a database management system.
>
> **[0:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=5)** That means that it's the application that you use to create and manage your databases.
>
> **[0:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=10)** SQL Server is just a tool that you can create databases with, and it does the work of controlling user access to those databases.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=16)** It does the work of adding data to a database and retrieving information when it's requested.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=22)** It also automates backups and generally ensures that your data remains in a healthy, secure state.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=28)** So SQL Server, the database engine, is the application that does all of that work.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=35)** Your databases, the container that includes all of your actual data, are nothing more than a couple of files that SQL Server manages which are stored on your file system.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=45)** In this chapter, we're going to start creating a couple of databases that will be managed by SQL Server.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=51)** Now, there are many different ways that you could do this.
>
> **[0:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=54)** We could use Management Studio, in the graphical interface here on the screen.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=59)** But I'd like to take a step back a moment and return to the command-line tool, SQL Command.
>
> **[1:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=65)** We saw this tool very briefly when I first introduced SQL Server and installed it on my machine.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=72)** I want to show this tool again to simply reinforce the idea that Management Studio is nothing more than an interface to SQL Server's capabilities, and it's one option of many.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=84)** You could also use a program called Azure Data Studio to perform many of these same tasks.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=90)** SQL Server largely doesn't care how it receives your instructions, just that they're formatted in a way that it understands.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=98)** And these separate front-ends, these graphical and text-based interfaces, can all perform the same sorts of tasks on the server.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=107)** So let's leave the Management Studio graphical interface for just a moment, and I'll come down to my Start menu, and I'll do a search for cmd.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=116)** Then I'll bring up the Windows Command Prompt application.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=119)** Then I'll type in sqlcmd to get to the SQL Command tool.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=125)** I'll follow that with a space hyphen question mark and press Enter.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=131)** This will reveal all of the different parameters that we can pass to the SQL Command tool.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=137)** All of these parameters allow you to connect to specific servers or to use different login accounts.
>
> **[2:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=143)** Now, since I'm going to be connecting to the default SQL Server instance on this machine and I'm going to use my current Windows user account to authenticate my identity, I actually don't need to use any other parameters to make a connection to my database engine.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=159)** Let me type cls here at the bottom and press Enter just to clear the screen, and bring my command prompt up here to the top again.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=167)** Then I'll type sqlcmd and press Enter.
>
> **[2:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=172)** That connects me to my default SQL Server instance.
>
> **[2:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=175)** And you'll notice that the prompt has changed to indicate that I'm now on line number one of a new command to SQL Server.
>
> **[3:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=183)** Now, we have direct access to start telling SQL Server what we want it to do.
>
> **[3:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=188)** Let's issue a command.
>
> **[3:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=192)** I'll type in CREATE DATABASE KinetEco.
>
> **[3:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=196)** This is an example of a Transact-SQL command which is the language that you'll use to communicate with SQL Server, regardless of whether you're using the SQL Command tool like we are now, or through Management Studio, or any other interface.
>
> **[3:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=210)** We'll talk a lot about Transact-SQL later on in the course.
>
> **[3:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=214)** There's lots of additional options that we could specify here in our CREATE DATABASE command, such as the size of the database that we want to make and where to store those files.
>
> **[3:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=224)** But this is enough to build a generic, empty database that we can start filling up with tables and data.
>
> **[3:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=231)** So I'll press the Enter button.
>
> **[3:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=232)** That takes me down to line number two.
>
> **[3:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=234)** I'll issue the command GO and press Enter again.
>
> **[3:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=238)** The GO command tells SQL Server to execute my commands, and it creates the empty database files.
>
> **[4:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=244)** Notice that the prompt changes back to a line number one again, indicating that the server is ready to accept another instruction.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=253)** This time, I'll type sp_databases.
>
> **[4:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=257)** I'll press Enter.
>
> **[4:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=258)** On my number two, I'll type GO again and press Enter again.
>
> **[4:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=263)** This will run a stored procedure that returns a list of all of the databases on the server.
>
> **[4:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=268)** Here's the four default databases: master, model, msdb, and tempdb.
>
> **[4:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=273)** And at the very top is our custom user database for KinetEco that we just created.
>
> **[4:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=280)** This second column shows its size.
>
> **[4:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=282)** And you can see that that database, even though that it's empty, is taking up about 16 megabytes on my hard drive.
>
> **[4:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=290)** The Command Prompt is back to line number one down here at the very bottom of my screen again.
>
> **[4:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=295)** And this time, I'll issue the command exit and press Enter, and that quits the SQL Command tool and returns me back to my system's command prompt.
>
> **[5:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=304)** Let's now take a quick look and see exactly what happened on the file system when we created our database.
>
> **[5:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=310)** I'll close the command tool and return back here to SQL Server Management Studio.
>
> **[5:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=315)** Let me just minimize that, and I'll open up my File Explorer.
>
> **[5:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=319)** Then I'll find my C drive.
>
> **[5:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=322)** We'll go into the Program Files folder, then Microsoft SQL Server.
>
> **[5:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=330)** Inside of here, we'll find a folder for our database instance.
>
> **[5:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=334)** The folder name is going to be similar to this one right here.
>
> **[5:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=337)** It starts with the version of SQL Server that we're working with, and SQL Server 2022 is version 16 of Microsoft SQL Server.
>
> **[5:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=345)** Then we have a period, followed by the name of the instance.
>
> **[5:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=349)** My instance is named MSSQLSERVER.
>
> **[5:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=352)** So this is the folder that I want to go in.
>
> **[5:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=355)** Remember that you could have multiple instances installed on a same machine, so you might have several different folders with similar names.
>
> **[6:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=362)** I'm going to go into the one that represents the server that I'm working with.
>
> **[6:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=366)** Then inside of that, I'll go into the MSSQL folder, and finally, I'll find the DATA folder and go into there.
>
> **[6:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=374)** Windows tells me that I don't currently have permission to access this folder.
>
> **[6:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=377)** But if you press the Continue button, you should be allowed in.
>
> **[6:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=381)** If it doesn't let you in, you might have to right-click on that folder and go into Properties and adjust the security settings for the DATA folder.
>
> **[6:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=389)** But once you get in, you'll see all of the data files that make up the various databases on your system.
>
> **[6:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=395)** You can see that there are actually multiple files for each database.
>
> **[6:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=399)** Here are the two files that we just created for the KinetEco database.
>
> **[6:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=403)** There's one for the mdf file and one for file that ends in an ldf extension.
>
> **[6:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=409)** The mdf file is the file that stores your actual data and other objects that make up the database.
>
> **[6:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=415)** The ldf file is a log file that stores transaction information.
>
> **[7:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=420)** So every time a table gets created in the database or a record gets added to a table or a piece of information gets edited, the transaction log will store a time-stamped note about what happened in the database and when.
>
> **[7:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=435)** So those are the two files that make up our first user database.
>
> **[7:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=439)** If I go back into Management Studio, we could find it there as well.
>
> **[7:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=443)** I'll go up here to the Databases folder for the server and expand it.
>
> **[7:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=447)** Then I'll right-click on the Databases folder and choose Refresh.
>
> **[7:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=452)** Then I'll search through the system again and update the contents that we see here in the Object Explorer.
>
> **[7:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=457)** And sure enough, there is the empty KinetEco database waiting for us to fill it up with data.
>
> **[7:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=462)** So there's our first database that will be managed by SQL Server.
>
> **[7:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-the-first-database?u=76281980&t=466)** Anything that you can do using the graphical interface, you can also do using the text-based interface as long as you know the correct commands to type.

> [!info]- Semantic Content
>
> **Env Vars:** sql (27), create (2), database (2), data (2), mssqlserver (1)
> **Code Keywords:** interface (6), let (6), this. (1), pass (1), finally, (1)
> **CLI Commands:** make (5), find (4)
> **Tools:** command prompt (4)
> **Definitions:** means that (1), is an  (1), is a  (1)
> **UI Navigation:** right-click (2)
> **Analogies:** such as (1), similar to (1)
> **Code Identifiers:** sp_databases (1)

#### Database configuration options
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=0)** - [Instructor] The graphical interface here in Management Studio gives us an opportunity to explore some of the other configuration options that are available when creating a new database without having to know all of the intricacies of the create database transact SQL command.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=16)** To do this, right click on the databases folder underneath your connected instance and then choose new database from the popup menu.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=25)** That'll open up the new database graphical workflow, and we have a number of different options that we can move through that are separated into these three pages, general, options and file groups.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=35)** So let's start at the top on the general page.
>
> **[0:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=38)** The first thing we need to do is name our new database.
>
> **[0:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=43)** I'll create a database for another company that I want to work with called Red30 Tech.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=51)** Notice that when I fill the name up here in the top, it updates the name of the database files that are going to be created.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=59)** These are the same MDF and LDF files that we saw with the Kinetico database that will store either the row data tables or the log information.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=70)** In this window down below, we can also control some of the additional parameters for these two files.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=77)** The file group parameters allows us to create multiple data files for our database.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=83)** In large databases, it's often advantageous to split data across files so that they can be placed on separate hard drives to increase the speed at which files can be searched.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=94)** Or you can place the data files in different geographic regions so that they're physically closer to end users.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=100)** For instance, if you want your East Coast operational data stored in a data center in New York and your West Coast data stored in San Francisco.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=110)** Collectively, the data will all be part of the same database but just stored in separate physical locations.
>
> **[1:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=117)** For our purposes though, we'll just stick with a single data file in the primary file group.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=124)** Next up, we have the initial size of the database in megabytes.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=129)** SQL Server will reserve space on the hard drive, even though we're not filling it up right away.
>
> **[2:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=135)** When we do fill up the initial space reservation, the database will automatically grow based on the settings in the next column, the auto growth setting.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=145)** The default is to grow the space being reserved by an additional 64 megabytes whenever we hit the reservation allotment and will continue to do so until the entire hard drive is filled up.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=158)** That's the auto growth size here and the max size there.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=162)** You can see it's listed as unlimited.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=168)** If you wanted to change either of these settings, you can click on the ellipsis button to the right and you can specify the size or the percent for the file growth, as well as the maximum file size that you want things to grow to.
>
> **[3:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=181)** I'll just leave the default settings and press okay, and we'll come back to the screen.
>
> **[3:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=187)** I'll scroll over to the right and we'll see that we have the actual file path for the two files that are going to be created.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=193)** And if I continue scrolling over here to the right, you'll see it's in the same data folder that we previously saw.
>
> **[3:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=201)** And finally, if you have a reason to give these two files a different name, you could do that in the final column.
>
> **[3:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=206)** There's probably very little reason to do this though, but the option is available.
>
> **[3:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=213)** Next, let's switch over to the options page.
>
> **[3:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=218)** Here we have a number of additional settings that we can apply to the database.
>
> **[3:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=224)** The first one up at the top is collation.
>
> **[3:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=228)** This is the way that SQL Server will sort information when you ask for it to be returned in ascending or descending order.
>
> **[3:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=236)** So for instance, will capital letters sort before lowercase or will a vowel with an umlaut or another accent mark sort before or after letters without?
>
> **[4:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=247)** And where in the ordering will letters from non-Latin character sets get placed?
>
> **[4:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=252)** All of this is important for SQL Server to know, and the default option is most likely going to be the right choice, but this will differ depending on the region settings of your computer or your business.
>
> **[4:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=264)** The recovery model defines how backups are made.
>
> **[4:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=269)** The default option here of full means that everything will be backed up.
>
> **[4:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=274)** For large databases, it might make more sense to only back up the changes that are made to the data since the last backup.
>
> **[4:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=282)** There's several strategies and we'll cover those later on in the course.
>
> **[4:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=288)** The compatibility level is fairly straightforward.
>
> **[4:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=291)** If you need the database that you're creating to be compatible with prior versions of SQL Server, you can specify that here, or we can just leave our database to be compatible with SQL Server 2022 and later.
>
> **[5:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=303)** And finally, we have the containment type.
>
> **[5:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=306)** When set to none, this means that the database will fully require SQL Server for maintenance.
>
> **[5:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=312)** Setting this to partial will move some of the management tasks into the database container.
>
> **[5:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=317)** For instance, you can have the database manage verifying login credentials rather than the SQL Server engine.
>
> **[5:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=324)** Again, unless you know differently, the default option of none is probably your best bet at this point.
>
> **[5:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=331)** Below that, we have a long scrolling list of other options that you can take a look at.
>
> **[5:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=335)** At this stage, there's no reason to adjust any of these settings though, and they can always be modified later if and when your needs require it.
>
> **[5:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=344)** Finally, let's switch over to the file groups page.
>
> **[5:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=349)** Here, we have options for setting up or selecting file groups if we're creating multiple data files.
>
> **[5:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=356)** I've already decided that we're only going to have a single data file, so we don't need to set up multiple groups here.
>
> **[6:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=365)** So once everything is configured to your liking, all we need to do is come down and press okay.
>
> **[6:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=370)** SQL Server will go through and create that database, and then it'll update the Object Explorer and you can see that the new database is created and it's listed right here in the tree view.
>
> **[6:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=380)** If you want to see exactly what Management Studio instructed the server to do, you can right click on the database, point to script database as, then create to, and choose to script it to a new query editor window.
>
> **[6:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=395)** Now that'll bring up a connect to database engine dialogue box.
>
> **[6:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=398)** We can just press the connect button here and it'll script out the databases create database command.
>
> **[6:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=405)** This is the exact transact SQL commands that were sent.
>
> **[6:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=409)** You can see that it starts with the same create database command here on line number five that we used when we created the Kinetico database using the command line interface.
>
> **[6:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=419)** However, it goes into much more detail about the specifics of the files that are going to be created, as well as all of the optional parameters that we didn't even adjust.
>
> **[7:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=429)** When you're done reviewing this code, you can go ahead and close the tab by clicking the X in the upper right hand corner.
>
> **[7:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-configuration-options?u=76281980&t=439)** So now we have two different user databases created on our SQL Server instance, and we created them through two drastically different methods.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), finally, (3), interface (2), continue (2), switch (2)
> **Env Vars:** sql (11), mdf (1), ldf (1)
> **UI Navigation:** click on (3)
> **Analogies:** for instance (3)
> **Definitions:** means that (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Tools:** command line (1)

#### Table structures
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=0)** - [Instructor] Before we can start adding data to our database, we need to give it a structured place to go.
>
> **[0:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=6)** This means it's time to create a table.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=9)** Tables in a SQL Server database are created by defining the columns of information that you want to store.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=16)** These columns called fields break down the details about the data into individual attributes.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=23)** For instance, in a table that will store customer contact information, you would have separate columns to store each customer's first and last name, their address, city, and state.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=34)** These column attributes make up the structure of the table.
>
> **[0:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=38)** Then later, once your table structure is created and saved into the database, you can start adding in your data.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=45)** This creates horizontal rows called records, and each record will be made up of the values stored in those columns.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=53)** In our customer's table, each row corresponds to the detailed information about a single customer, and I've gone ahead and filled in details about four customers here.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=63)** For maximum flexibility later, it's in your best interest to break attribute columns into these smallest components possible.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=71)** For instance, when storing the address of your customers, you'll want to separate out the columns for their house number and street, one for the city, one for the state, and last column for the postal code.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=84)** By breaking out the data into discrete components or individual columns, it makes it easier to search through the data later and find all of the customers that live in the state of California for example because you only need to read the values from a single column to find those customer records that you're interested in.
>
> **[1:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=101)** If all of your address data is stored in a single column, that common request for information becomes much more difficult to obtain an answer for.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=111)** When defining the columns that make up your table, you need to make a few decisions.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=115)** The first is the name of the column.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=118)** You obviously want to make it clear what data the column is storing or what its purpose is, so a clear name that avoids ambiguous acronyms is best.
>
> **[2:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=128)** It's typically a good idea to avoid spaces or special characters in your column names as these unusual characters can cause unexpected problems or conflicts behind the scenes.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=140)** Finally, pick a capitalization system that you can apply consistently across all of the tables that you'll create in your database.
>
> **[2:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=148)** If you want to use all capital letters or all lowercase letters or just initial capital letters, that's all fine.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=155)** Just be deliberate and make a choice that you can stick with.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=159)** I prefer to use a formatting technique called Pascal case where the first letter of compound words are capitalized and multiple words are pushed together with no spaces, but feel free to make a different choice if you prefer.
>
> **[2:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=172)** Next, you'll need to tell your SQL Server instance what type of data the column will store.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=178)** Is the data going to be text or a number or a date or latitude and longitude coordinates?
>
> **[3:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=184)** The more SQL server knows about the type of data each column will contain, the better job it can do in storing and retrieving that data efficiently.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=193)** And the data types that SQL Server allows you to choose from can get very specific.
>
> **[3:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=198)** If you're storing text, SQL Server wants to know how much text and how many characters and will they be standard Latin characters or will there potentially be characters from other languages found in the extended Unicode character set?
>
> **[3:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=213)** If you're storing numbers, will they always be hold numbers or integers or will they need to be stored as fractional numbers that include a decimal point?
>
> **[3:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=223)** Will there possibly be a range of values that's very small, say between zero and 255?
>
> **[3:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=229)** Or will you need to be able to store numbers up in the billions?
>
> **[3:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=234)** In order to create a table in SQL server, you're going to need to make a decision here, and this isn't one that you'll be able to easily change later, so it's in your best interest to think through your data storage needs carefully and build the table correctly the first time.
>
> **[4:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=249)** And finally the last piece of information that SQL Server needs to know about your table's columns is whether it will be acceptable for a value to be left blank when entering in new records.
>
> **[4:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=261)** If you want to make a piece of information required before the record will be saved to the database, then in SQL Server's terminology, you do not want to allow nulls.
>
> **[4:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=271)** A null value is any piece of information that is blank or unknown.
>
> **[4:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=276)** By allowing nulls in a column, you're saying that it's okay to skip this piece of information when entering in a record.
>
> **[4:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=283)** For instance, you may want to require a customer's last name in order to save their record, so that column would not allow null values, but their first name is an optional piece of information that you do not require.
>
> **[4:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=297)** The first name column would then be set up to allow null values for that customer.
>
> **[5:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=301)** For any customer that does not want to supply their first name.
>
> **[5:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/table-structures?u=76281980&t=306)** There are additional properties that we can assign to each column of a data table, but those three, the name data type, and whether null values will be allowed, are the required pieces that you'll need to provide for every column of every table that you'll create in SQL Server.

> [!info]- Semantic Content
>
> **CLI Commands:** make (8), find (2)
> **Env Vars:** sql (9)
> **Code Keywords:** require (2), for. (1), finally, (1), type, (1)
> **Analogies:** for instance (3), for example (1)
> **Prerequisites:** you'll need (2), set up (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Create a simple table
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=0)** - [Instructor] I'd like to create a table in the Red30 Tech database to store information about their customers.
>
> **[0:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=6)** In Management Studio, we can create a table by going into the Databases folder and finding the folder that will represent our tables.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=14)** Right-click on it and point to New, and you'll see that we have lots of different options.
>
> **[0:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=18)** The first one that just says Table is the standard type of data table used in most relational databases.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=25)** But you can also create memory optimized tables, which will store data in system memory as well as on disc so that it's faster to read and write.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=34)** Temporal tables maintain time and date stamps for every change made to the data that they store.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=40)** This allows you to essentially look back in time and see the state of the data as it was at any point.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=47)** Regular data tables don't include this capability and can only show you the current state of the data.
>
> **[0:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=52)** Ledger tables are a new feature for SQL Server 2022.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=56)** They use cryptography and blockchain technologies to securely protect data from unauthorized changes.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=63)** The data stored in a ledger table will show evidence of tampering during an audit and maintains a historical record of previous values so that any alterations that are made during an attack can be identified and corrected.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=78)** Graph tables are structured differently than tables that follow the relational model of storing data.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=83)** With graph tables, you store things called nodes and edges that define a web of interrelated connections.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=90)** Finally, we have external tables, which are for connecting to Hadoop and Azure Blob Storage locations and file tables for storing files inside of a SQL Server database.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=102)** So those are a lot of advanced options that you can leverage depending on the kinds of data that you'll be storing and your specific requirements.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=109)** We're going to stick with the standard relational database model for this course.
>
> **[1:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=113)** So come up here to the very top and just click the option that says Table.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=118)** That will open up a new tab on the right where we can supply the name, data type, and other details for each column that'll make up our new table's structure.
>
> **[2:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=128)** So let's define the columns that will allow us to store the names and addresses of the company's customers.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=134)** We'll start with a column named FirstName.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=139)** Remember our naming conventions.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=141)** I'm not going to use any spaces between the two words here, and I'm going to capitalize the first letter of each word.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=149)** So that's the column name.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=150)** We now need to choose a data type, or the type of information that will get stored inside of this column.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=158)** SQL Server suggests the nchar 50 data type by default.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=162)** This is a little cryptic if you've never been exposed to it before, so let me break down what this means.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=168)** The letter N at the beginning indicates that this data type will allow characters from the full Unicode character set, which is a great choice for people's names, since it's likely that you'll need to store information about people with names that include letters from non-Latin-based languages.
>
> **[3:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=184)** The char, or C-H-A-R portion of the data type's name, means that this is going to store character data or text.
>
> **[3:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=192)** Specifically, char is a fixed-length text, and the 10 in parentheses indicates the number of characters that will be stored in this column.
>
> **[3:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=200)** If the name that we type in for any customer's record is less than 10 characters, then SQL Server will add spaces to the end and pad it out to 10 characters.
>
> **[3:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=211)** However, if we try and type in a name that has more than 10 characters, it's not going to allow it.
>
> **[3:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=216)** It'll just chop off the name at the 10 character limit.
>
> **[3:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=219)** This is not quite ideal, so I'm going to change the data type using the drop-down menu.
>
> **[3:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=224)** I'll choose the option of nvarchar 50 instead.
>
> **[3:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=229)** This will keep the Unicode support with the letter N at the very beginning, but it turns it into a variable-length character field.
>
> **[3:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=236)** That's what the varchar portion of the name means.
>
> **[3:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=239)** With this data type, the 50 in parentheses now means that the field will allow a maximum of 50 characters.
>
> **[4:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=247)** As you can see from this drop-down menu though, there's a long list of different data types that we could choose from.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=253)** And I'll go more into detail about these options later on in an upcoming chapter.
>
> **[4:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=257)** Let's now think about the Allow Nulls column.
>
> **[4:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=260)** I do want to make sure that I capture our customer's full name, so I'll uncheck the box here to force this piece of information to be supplied before SQL Server will store the record in the database.
>
> **[4:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=272)** So essentially, we're saying do not allow null values or blanks in this particular column.
>
> **[4:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=278)** So that finishes the details that we need for the first column.
>
> **[4:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=281)** Let's go ahead and add a second column to this table's structure.
>
> **[4:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=284)** We'll store the last name data now.
>
> **[4:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=288)** Once again, I'll choose the nvarchar 50 data type from the drop-down menu, and also, I'll uncheck this option to allow nulls.
>
> **[4:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=296)** Next up, we need a column to store the customer's address.
>
> **[5:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=303)** For this, I'll choose the nvarchar 50 data type again, but I actually want to store more than 50 characters.
>
> **[5:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=309)** So with this selected, I'll click off of it to populate that change to the data type, and then we'll come down and take a look at the column properties below.
>
> **[5:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=316)** You can see, we have the data type listed as an nvarchar here, and the length is specified as 50.
>
> **[5:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=323)** I can make a change here.
>
> **[5:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=324)** If I want to change it to allow more characters in this column, I could just type in 100, for example, and press Enter, and you'll see that the data type up above gets updated.
>
> **[5:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=334)** So now this column will allow a maximum of 100 characters instead of just 50.
>
> **[5:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=340)** Now, I want our address information to be optional for each customer, so I'll leave the check here for allowing nulls in that particular column.
>
> **[5:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=348)** Next up, let's create a column to store the city data.
>
> **[5:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=352)** For this, an nvarchar 50 should be sufficient for the data I want to store.
>
> **[5:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=356)** And once again, I'll allow nulls.
>
> **[5:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=358)** Finally, I'll create a column to store the state data.
>
> **[6:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=363)** Once again, I'll choose an nvarchar 50 and leave Allow Nulls checked.
>
> **[6:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=368)** So that's enough columns to get us started with our new table.
>
> **[6:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=370)** Let's go ahead and save it now.
>
> **[6:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=374)** You can press Control + S on your keyboard to bring up the Save dialog box, and I'll name this table Customers.
>
> **[6:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=381)** I'll press Enter, and then I can go ahead and close the tab.
>
> **[6:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=385)** Now if I expand the Tables folder, you should see the new Customers table that's been added into our database's design.
>
> **[6:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=391)** Now, you might be wondering what this dbo is before the name.
>
> **[6:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=395)** This is called a schema, and it's a way for SQL Server to group tables together in order to make them easier to manage.
>
> **[6:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=402)** We didn't provide a specific schema for this table, so it got placed in the default dbo, or database owner schema.
>
> **[6:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=410)** In larger databases, schemas can help control user access.
>
> **[6:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=414)** So for instance, if you have a warehouse manager as one of your database users, you could group all of the tables that they need access to under a warehouse schema and then give the manager ownership of that schema.
>
> **[7:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=428)** This will allow them to access all of the tables within the schema group, but keep them out of the tables in the human resources schema, for example.
>
> **[7:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=436)** Until we get around to creating custom schemas in our database, all of our tables will be placed in the same dbo schema group.
>
> **[7:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=444)** So at this point, we have our table started.
>
> **[7:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=446)** If you need to get back into the designer to make changes to the table, right-click on the table name and choose Design from the pop-up menu, and that'll bring you right back into that tab.
>
> **[7:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=457)** Let's go ahead and close the tab again, and this time, I'll right-click the table and choose Select Top 1000 Rows.
>
> **[7:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=465)** This will usually bring up the first 1000 records of data stored in the table.
>
> **[7:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=469)** Now, obviously, we haven't added any data yet, but it will allow us to see the structure of the table in the typical orientation, with the column names listed here in this grid at the bottom of the screen.
>
> **[8:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-simple-table?u=76281980&t=481)** So at this point, we're well on our way to providing a permanent home for the data that we've collected on the customers for Red30 Tech.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), type, (4), finally, (2), this, (2), new, (1)
> **Env Vars:** sql (6)
> **CLI Commands:** make (5)
> **Definitions:** is a  (3), means that (1), is called (1)
> **UI Navigation:** right-click (3)
> **Analogies:** for example (2), for instance (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Edit a table's structure
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/edit-a-table-s-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/edit-a-table-s-structure?u=76281980&t=0)** - Occasionally you'll want to make a change to the structure of a table and management studio will step in and prevent you from saving the change.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/edit-a-table-s-structure?u=76281980&t=8)** This is especially true when you're just starting out with SQL Server and you're building things on the fly and then go back and revise your database after the fact.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/edit-a-table-s-structure?u=76281980&t=16)** For instance, let's go back into the customer's table that we just created and I'll right click on it and open it back up in the design tool.
>
> **[0:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/edit-a-table-s-structure?u=76281980&t=24)** Now, if I've decided that 100 characters for the address data isn't going to be enough for the data that I want to store I might want to come in and make a change to that.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/edit-a-table-s-structure?u=76281980&t=33)** I'll click on this column and then come down into the column properties and change its length.
>
> **[0:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/edit-a-table-s-structure?u=76281980&t=38)** For instance, I'll change this up to store 150 characters instead.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/edit-a-table-s-structure?u=76281980&t=42)** Seems like a simple change to make here but when I come back up into the toolbar and click the save icon or press Control S on my keyboard you'll see that we get an error message and it says that saving changes is not permitted.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/edit-a-table-s-structure?u=76281980&t=56)** The changes that we've made here require the table to be dropped and then recreated.
>
> **[1:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/edit-a-table-s-structure?u=76281980&t=61)** Essentially, in order to do this SQL Server needs to delete the entire table and recreate it again from scratch with the new data type in place.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/edit-a-table-s-structure?u=76281980&t=71)** To get around this restriction, we can make one small change to the settings here in Management Studio.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/edit-a-table-s-structure?u=76281980&t=77)** Let's go ahead and press cancel to dismiss this dialogue window.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/edit-a-table-s-structure?u=76281980&t=81)** Then I'll come up to the tools menu and click options.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/edit-a-table-s-structure?u=76281980&t=87)** In the left hand menu I'll scroll down and find the Designers section and expand it open.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/edit-a-table-s-structure?u=76281980&t=94)** Then with this section selected I can find this check box at the bottom.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/edit-a-table-s-structure?u=76281980&t=98)** This says Prevent saving changes that require table recreation.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/edit-a-table-s-structure?u=76281980&t=102)** I'll go ahead and uncheck that box and say okay.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/edit-a-table-s-structure?u=76281980&t=106)** Now when I come back into my dialogue window with the designer for the customer's table with the change still in place I can press the save icon on the toolbar again and this time it saves the changes to my customer's table.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/edit-a-table-s-structure?u=76281980&t=119)** Just to verify that we can close the design tab and then expand the customer's folder here and expand the columns folder.
>
> **[2:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/edit-a-table-s-structure?u=76281980&t=127)** Here it lists out all the columns that make up the table structure, and we can verify that the address column is now set to an nvarchar 150 data type instead of 100 that it was previously.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/edit-a-table-s-structure?u=76281980&t=139)** When we saved the changes to the table the table was actually deleted and completely rebuilt.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/edit-a-table-s-structure?u=76281980&t=145)** This change should make your early steps in SQL Server a little bit easier, but keep in mind that it also opens the door to you messing up the design of your tables as well, since we've essentially bypassed one of the built in security features.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/edit-a-table-s-structure?u=76281980&t=159)** If you have any data stored in the table, it should be copied into the updated table structures automatically but there is always a chance of that process getting messed up and losing some data.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/edit-a-table-s-structure?u=76281980&t=171)** I'll leave it to you to decide whether that's a risk worth taking on your own in your own databases.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6), find (2)
> **Code Keywords:** let (2), require (2), delete (1)
> **Env Vars:** sql (3)
> **UI Navigation:** click on (2), scroll down (1)
> **Analogies:** for instance (2)
> **Speakers:** - occasionally (1)

#### Enter data into a table using the GUI
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=0)** - [Instructor] We can use Management Studio's graphical interface to start entering data into our Red30Tech customers table.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=7)** We first need to locate it in the Object Explorer panel.
>
> **[0:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=10)** Remember, it's underneath the database file, and then in the tables folder, and you'll find the customers table there.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=15)** Then right click on it, and choose edit top 200 rows from the popup menu.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=21)** This will bring up a table grid on the right and display the column names that we created along the top.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=27)** On the next line is the space for our first record, and currently every cell on the table is empty or null.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=35)** I'll type in the first name of our first customer, Katherine.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=41)** Notice that as soon as you start typing, a new line appears for the next empty record below.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=46)** You can just ignore this line for a moment and continue working on the first record's values.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=51)** You'll also notice that the icon in the box on the left changes to a pencil.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=56)** This indicates that this information has not yet been saved into our database.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=63)** When you press the tab key on your keyboard to move over to the next cell in the LastName column, you'll also get a red warning icon on the first cell.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=71)** This is another visual indication that your data hasn't yet been saved.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=77)** So let's go ahead and finish filling in all the details for Katherine's record.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=80)** Her last name is Reed.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=84)** She lives at 8 Maple Parkway in the city of Redding, California.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=92)** After typing in CA for the state field, I'll press tab one more time, and that'll move me down into record number two.
>
> **[1:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=101)** At this point, the data for the first record is saved into the database.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=105)** And you'll notice that those red icons and the pencil icon on the left both have disappeared.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=111)** So now no matter what happens, if you close the editor, the power to your office shuts off, or whatever, the data that we just typed in for Katherine's record has already been saved into the database.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=123)** You don't need to go through a separate step or click on a save button on a toolbar to actually save changes that you're making to your data here.
>
> **[2:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=132)** So let's go ahead and add one more person.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=134)** This time I'm just going to type in the first name Eric.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=139)** I'll press tab to move over to the next cell and then try and close this tab.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=145)** This time I get a message box telling me that nothing was saved.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=149)** If you read through this text here, you'll see why.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=152)** We're asking SQL Server to store a null value into the LastName column for record number two.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=159)** When we created the table, we specifically said that nulls were not allowed in that column.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=165)** Press the okay button to dismiss this window.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=168)** Now we have two choices.
>
> **[2:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=170)** We can either supply the required information or the last name for Eric if we know it, or we can back out all together and abandon the attempt to enter Eric's data.
>
> **[3:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=181)** If we choose that option you can simply press the escape key on your keyboard to return the record to its last saved state.
>
> **[3:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=188)** Otherwise, if we know Eric's last name, we can enter it in.
>
> **[3:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=192)** I'll go ahead and fill in the name Eric again, press tab, and we'll enter the last name Bryant.
>
> **[3:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=201)** This time I can click off of that cell and come down to record number three and Eric Bryant's record gets saved.
>
> **[3:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=208)** This second record got saved even though we didn't supply values for the address, city, and state column because when we created the table, we specified that the address information was optional and would allow null values in these three columns.
>
> **[3:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=222)** So you can continue adding in records for additional people if you'd like.
>
> **[3:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=225)** And when you're done, go ahead and close the tab.
>
> **[3:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=229)** Now, if I right click on the customers table in the Object Explorer window on the left and choose select top 1000 rows, it's going to return the data that we just entered into the table.
>
> **[4:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/enter-data-into-a-table-using-the-gui?u=76281980&t=240)** Here you can see the data that's been saved into our table for our two customers, as well as the Transact-SQL command at the top that returns this information from the database.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (2), let (2), interface (1)
> **UI Navigation:** click on (3)
> **Env Vars:** sql (2)
> **CLI Commands:** find (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Import data from CSV files
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=0)** - [Instructor] If you have data stored in a spreadsheet format such as Excel or Google Sheets, or another database system such as Microsoft Access, then you can export that data as a CSV file from their native program to easily bring it into SQL Server.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=17)** CSV stands for comma separated values, and it's an example of what's often called a flat file data table.
>
> **[0:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=24)** In the chapter three exercise folders, I have a couple of CSV files that contain additional information.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=30)** And one of them contains a number of customers that I'd like to bring in to the Red30 Tech database.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=36)** If you open up that file inside of a standard text editor such as Notepad, you'll see the data that it contains.
>
> **[0:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=43)** Comma separated values files are formatted exactly as you'd expect, with a comma separating each field in what will eventually become the data table.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=53)** To add this data into the database that we've been working with, I'm going to go ahead and jump back into Management Studio.
>
> **[1:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=61)** Then instead of coming to the table, the customer's table that we've been working with, I'm actually going to find the database at the very top here for Red30 Tech.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=70)** Right click on that, point to tasks, and then we have two options down at the bottom that have similar names.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=78)** We have import flat file, and then import data.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=82)** The one I want to focus on here is import data.
>
> **[1:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=85)** Go ahead and select that and it'll start up a new wizard.
>
> **[1:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=89)** The first page of the wizard just describes exactly what's about to happen.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=92)** We can go ahead and press next to get started.
>
> **[1:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=95)** First, we need to choose a data source.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=98)** This is where we'll say what kind of file that we're bringing in and how to connect to it.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=104)** For our CSV file, we need to use the flat file source, so I'll select that from the dropdown menu.
>
> **[1:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=112)** Notice that there's additional options for bringing in Excel and Access data directly but those require installing additional components.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=120)** If you have a lot of data in Excel or Access, you might want to investigate those options.
>
> **[2:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=126)** For most people though, the CSV option through the flat file data source is easily enough to use right out of the box without having to install any additional components.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=136)** So I'll go ahead and choose that.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=139)** Then we need to specify the file that we want to bring in.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=142)** Press the browse button, and then we'll go into the exercise files for the course, chapter three, and at the very bottom, I need to change this option from text files to CSV.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=152)** That will allow me to choose the Red30 Tech customers CSV file and press open.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=158)** That should automatically fill in the parameters for the way that our CSV file is formatted but it's worth it to go through and just verify everything is correct.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=168)** The format will be a delimited file since the comma characters indicate the separation from one value to the next.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=176)** The other options that we have here are less commonly used but we have the option of fixed or ragged right if your file is formatted with that type of delimiter.
>
> **[3:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=187)** The text qualifier isn't used for our file but this would come into play if, for instance, there are quotation marks around each of the text values.
>
> **[3:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=196)** The header row delimiter is how the file ends the header before moving on to the data values.
>
> **[3:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=202)** The notation here is that our file contains a carriage return and a line feed.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=207)** Basically, this just means that the data starts on the line below the header.
>
> **[3:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=216)** If your CSV file has multiple header rows, you can specify how many to skip before getting to the column names.
>
> **[3:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=223)** Sometimes CSV files will include metadata at the top of the file, indicating the date the table was made or who made it.
>
> **[3:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=232)** I don't need to skip any rows in the file before we get to the header, so I'll leave this set to zero.
>
> **[3:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=239)** Finally, there's an important checkbox here that says the first data rows include the names of the columns and is not actual data to be imported.
>
> **[4:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=248)** My data file does include the column names, so I'll make sure that this check box stays checked.
>
> **[4:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=255)** That finishes the options on the general page.
>
> **[4:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=257)** Next, we'll come over here to the left and take a look at the columns page.
>
> **[4:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=262)** This will give us a view of the data and we can confirm that it's correctly separating the various columns of the data file.
>
> **[4:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=267)** So we have the first name, last name, address, city and state columns, and the data below looks correct.
>
> **[4:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=274)** Next, we can look at the advanced page.
>
> **[4:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=279)** Here, we can configure additional properties for each column.
>
> **[4:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=282)** If you select each column, it gives you those properties over here on the right, including the data type that it thinks that data is.
>
> **[4:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=290)** We could just click through each of these just to confirm that it thinks that everything is text and everything is looking good here so I'll switch over to preview.
>
> **[5:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=302)** Finally, it gives us one more verification that the data looks correct and everything's looking good so I'll go ahead and press the next button.
>
> **[5:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=313)** Now we get to choose where we want the data to go when we import it.
>
> **[5:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=318)** For the destination, in the dropdown menu, choose the SQL Server native client.
>
> **[5:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=323)** You'll find it towards the very bottom of the list.
>
> **[5:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=326)** This will allow us to specify the server that we want to connect to, and again, this is the server that's on my pc.
>
> **[5:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=332)** We'll use Windows authentication to log in and it should automatically select the Red30 Tech database, but if you need to, you can make a change right there.
>
> **[5:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=341)** Go ahead and press the next button and we'll specify where we want the data to go inside of the Red30 Tech database.
>
> **[5:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=348)** The default option is to create a new table based on the file name of the file that we're importing so it looks like it's going to create a new table called Red30Tech_Customers.
>
> **[5:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=359)** I actually want to import the data into the customer's table that we've already created.
>
> **[6:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=363)** So go ahead and select that value and you'll get a popup menu.
>
> **[6:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=367)** Then you can select an existing table in the database.
>
> **[6:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=370)** I'll go ahead and choose the customer's table.
>
> **[6:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=373)** You'll also want to review the mappings by clicking the edit mappings button to make sure that the data in the CSV file is going into the correct columns in the SQL Server table.
>
> **[6:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=387)** You just want to make sure that the source column and the destination column match up.
>
> **[6:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=391)** Now, I've conveniently named all of the columns the same in both the source and the destination locations so it's easy to see that everything is correct.
>
> **[6:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=399)** But it is a good idea to verify this before you accidentally import all of your first names into the last name column, and vice versa.
>
> **[6:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=408)** Everything looks good here so I'll press okay and then press next.
>
> **[6:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=413)** This screen verifies our data type mappings.
>
> **[6:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=416)** Because SQL Server is going to strictly enforce the type of data that gets imported into the table, we need to make sure that what we're feeding in is compatible.
>
> **[7:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=425)** In our case, we're converting text strings into nvarchar data, which will work out just fine as long as all of the data that we're importing is under the maximum character limits set by the data types of each column in the table.
>
> **[7:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=440)** If the import process encounters any errors or truncations of the data during the import, we'll go ahead and have the entire import fail.
>
> **[7:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=449)** You can see those two options right over here.
>
> **[7:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=452)** This way, if there is a problem, nothing will actually change in our SQL Server table and we can review the CSV file for issues before trying again.
>
> **[7:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=463)** Go ahead and press the next button.
>
> **[7:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=467)** Finally, we have the option here to run the import immediately or save the import steps as a [[SQL Server Integration Services]] package so that it can be run at a later point in time.
>
> **[7:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=479)** I'll choose the option just to run this immediately right now and press next.
>
> **[8:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=483)** It'll confirm all of our settings and press finish.
>
> **[8:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=488)** That'll go through and import all of our data into the table.
>
> **[8:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=492)** At the end of the process, you should see a message that 1,104 rows were transferred.
>
> **[8:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=498)** Go ahead and press close, and that finishes the wizard.
>
> **[8:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=501)** Now, if everything finished successfully, we should be able to review the data now.
>
> **[8:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=505)** Find the customer's table, right click on it and choose select top 1000 rows.
>
> **[8:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=512)** And now you should be able to scroll through all the data that was just added into the table.
>
> **[8:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/import-data-from-csv-files?u=76281980&t=517)** We have information about over a thousand different customers now and by importing the data from your existing record keeping system, you won't have to retype everything to bring it in to your new SQL Server database.

> [!info]- Semantic Content
>
> **Env Vars:** csv (12), sql (7)
> **CLI Commands:** make (5), find (3)
> **Code Keywords:** finally, (3), require (1), if, (1), switch (1), case, (1)
> **UI Navigation:** click on (2), dropdown (2), checkbox (1)
> **Analogies:** such as (3), for instance (1)
> **Definitions:** is a  (2), stands for (1)
> **Prerequisites:** install (1), configure (1)
> **Exercise Files:** exercise files (1)

#### Create tables from flat files
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=0)** - If you are looking to import an entire table including its column structure and data into your SQL Server database, then there's a more modern and streamlined wizard to help you do that than the one that we saw in the last movie.
>
> **[0:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=13)** You can find it by right clicking on the database.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=15)** And we'll continue working on the Red 30 tech database here, 0.2 tasks, And this time select the import flat file wizard.
>
> **[0:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=24)** The first page, it gives you an introduction about what the wizard is going to do and already, by looking at the icons you can see that this is a much more modern approach.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=32)** Go ahead and press the next button to get started.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=36)** First, we need to specify the location of the file that we want to import.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=40)** Press the browse button, and in the chapter three folder, I have a CSV file that stores information about the products that Red 30 tech stocks.
>
> **[0:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=49)** Go ahead and select that file and press open.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=53)** That'll fill in the file path.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=56)** The wizard will then import this data into a brand new table in the database.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=62)** It suggests a name based on the name of the file that we're bringing in but I actually want to simplify this.
>
> **[1:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=67)** I'm just going to call it products.
>
> **[1:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=69)** Next, we'll pick a schema that we want the table created in.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=73)** At this point though, we only have the default DBO schema because we haven't created any custom ones yet.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=79)** So I'll just select DBO and press next.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=84)** We then get a preview of the data.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=87)** It shows me the columns that we'll create and import our category product ID, the name of the product, retail price, manufacture cost, and the quantity that are currently in stock.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=99)** All of the columns and the data looks good.
>
> **[1:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=101)** We'll go ahead and press next.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=105)** The wizard then analyzes the data and makes its best recommendation for the data types for each column.
>
> **[1:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=113)** If you need to make any changes here, you can.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=116)** For instance, the retail price and the manufacture cost columns are being suggested as float data types.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=124)** I actually want to change these to the money data type instead.
>
> **[2:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=127)** So using the dropdown menu for each of these columns I'll switch it over to the money data type.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=133)** This will allow me to store proper currency values.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=137)** The quantity in stock is suggesting a small INT data type which actually won't store enough values for me, so I'm going to use a dropdown menu and change this to a standard INT.
>
> **[2:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=147)** This will give me a much larger range of values that can be stored in this column.
>
> **[2:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=153)** On the right, we can specify if each column will allow null values.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=158)** I do not want to store nulls in any of these columns so I'll make sure that all of these check boxes are off.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=165)** I can also specify a column to be the primary key for the table.
>
> **[2:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=170)** We'll talk more about primary keys in the next chapter but for now, I just want the product ID column to be the primary key for the table.
>
> **[2:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=177)** So I'll place a check box there.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=180)** Go ahead and press next.
>
> **[3:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=182)** We'll review a summary of about what's going to happen here.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=185)** And we'll press the finish button.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=190)** The imports process starts and we should be able to see this success message here.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=195)** You can click on it to get a more detailed message here.
>
> **[3:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=198)** Just tells you that the following task completed successfully and that the data was inserted.
>
> **[3:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=202)** Then say okay to that and we'll close the wizard.
>
> **[3:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=206)** So that process was a lot more streamlined than the previous import process.
>
> **[3:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=210)** Let's go ahead and find what it did in the database.
>
> **[3:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=213)** I'm going to go over to the object explorer panel and in the tables folder, I don't see it yet so I'll just right click the tables folder and choose refresh.
>
> **[3:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=222)** And there is the new products table.
>
> **[3:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=224)** I can expand it, expand the columns.
>
> **[3:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=226)** I'll see all the columns that were brought in.
>
> **[3:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=228)** I can also right click the products table and choose select top 1000 rows.
>
> **[3:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=233)** That'll show me the TSQL query that's used to pull that data out of the database.
>
> **[3:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=238)** And I can see the results grid down below and it has all the data filled in.
>
> **[4:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=244)** So here's the difference between the flat file wizard and the wizard that we saw in the previous movie.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=250)** While we didn't have to choose specific data source and data destination drivers to complete the process this time like we did in the last movie, we also did not get the option to append the data to an existing table.
>
> **[4:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=263)** So if you're bringing in an entire table and want to create the tables column structure and import the data in one step, this wizard the import flat file task, is the way to go.
>
> **[4:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-tables-from-flat-files?u=76281980&t=275)** If on the other hand, you're importing data into an existing table then you'll want to use the import data task instead.

> [!info]- Semantic Content
>
> **Env Vars:** dbo (2), int (2), sql (1), csv (1), tsql (1)
> **Code Keywords:** continue (1), import. (1), this. (1), switch (1), type. (1)
> **CLI Commands:** find (2), make (2)
> **UI Navigation:** dropdown (2), select the (1), click on (1)
> **Cross-References:** in the last (2), in the next (1)
> **Versions:** 0.2 (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)

#### Install a sample database
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=0)** - Learning about SQL Server is often easier when you have lots of data to peruse or can dig into an existing database to see how it was put together.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=9)** Microsoft provides an example database that's useful to have on hand for experimentation or to explore topics in database development.
>
> **[0:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=18)** Let me show you how you can add it to your SQL Server instance.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=22)** The process starts at Microsoft's SQL Server Samples GitHub page at this URL.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=27)** Here, you'll find the Wide World Importers sample database that's frequently used in Microsoft's own example documentation.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=36)** On this page, you'll just scroll down until you find the Wide World Importers-Full.bak file.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=42)** This is a database backup that we can restore on our own instance of SQL Server.
>
> **[0:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=48)** I'll go ahead and click the link to download the file to my system.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=53)** Once that's done, we need to move this file into a specific location on our hard drive.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=58)** I'll go ahead and close my web browser and I'll open up my downloads folder where I'll find the Wide World Importers-Full.bak file that we just downloaded.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=68)** I'll right click on it and choose Cut.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=71)** Then we need to go into our C Drive.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=74)** In the Program Files folder, we'll find the Microsoft's SQL Server folder.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=78)** Then we'll go into the folder that represents the instance that we're working with.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=83)** Mine is MSSQL16 .MSSQL SERVER.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=88)** Once in there, we'll go into the MSSQL folder and finally into the backup folder.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=94)** Now, the first time you try and go in here, you might get a warning.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=97)** Just go ahead and press the Connect button and you should be allowed in.
>
> **[1:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=101)** Otherwise, you might have to right click on the backup folder and choose properties and adjust security settings before you'll be allowed access.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=109)** But once you get in here, go ahead and right click and paste in the database backup file that we just cut to the clipboard.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=116)** So with this file in place, we can go ahead and restore it onto our SQL Server instance.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=122)** I'll close the file explorer and return back to Management Studio.
>
> **[2:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=126)** To restore the database, you'll right click on the databases folder underneath your Connection and choose Restore database.
>
> **[2:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=135)** Then we're going to restore it from a device source.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=140)** Choose the ellipsis button over here on the far right and we'll choose the file.
>
> **[2:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=144)** Press the add button.
>
> **[2:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=148)** Then it'll put you into that backup folder location that we were just in.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=152)** You should be able to select the Wide World Importers-full.bak file here and press okay.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=158)** Then we'll press okay on this screen to load the backup media.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=162)** Finally, we can press the okay button one more time and it'll load the database backup onto our server.
>
> **[2:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=169)** After a moment, we should get a success message, say Okay to that, and that finishes the wizard.
>
> **[2:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=174)** Over here in the Object Explorer, you should see the new Wide World Importer's database appear.
>
> **[2:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=179)** If you don't see it, just simply right click on the databases folder and choose Refresh.
>
> **[3:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=184)** Then you can explore that database by expanding its folder, taking a look at all the tables that they contain, and right clicking on any table and choosing Select Top 1000 rows to see all the data in each of the tables.
>
> **[3:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=198)** So now we have a copy of the Wide World Importers Sample database stored on our SQL Server instance.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/install-a-sample-database?u=76281980&t=204)** And we could drill into the tables that it contains or use the data within to experiment with as we further our knowledge of SQL Server.

> [!info]- Semantic Content
>
> **Env Vars:** sql (8), mssql (2), url (1), mssql16 (1), server (1)
> **UI Navigation:** click on (4), scroll down (1)
> **CLI Commands:** find (4)
> **Code Keywords:** let (1), finally, (1)
> **Tools:** github (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Warnings:** warning (1)


### 4. Table Design for Healthy Databases

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Choose appropriate data types
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-appropriate-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-appropriate-data-types?u=76281980&t=0)** - [Instructor] Having a good solid understanding of SQL server's data types will make it easier for you to select the best option for your data storage needs when constructing your databases tables.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-appropriate-data-types?u=76281980&t=11)** I've touched on the topic briefly, but we need to explore the concept in more detail.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-appropriate-data-types?u=76281980&t=16)** First, let's make sure that we're all on the same page as to why we need to properly define the type of data that each column will store.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-appropriate-data-types?u=76281980&t=25)** One of the main reasons is to be efficient with the storage space.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-appropriate-data-types?u=76281980&t=29)** If for example, you need to store a number that represents a person's age in years, you can pretty confidently assume that under no conceivable situation will that number ever need to be more than 255.
>
> **[0:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-appropriate-data-types?u=76281980&t=43)** SQL Server will allow you to store that age value using a data type called tinyint, and it'll take a total of one byte of storage space on your disc to do so for every record in the table.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-appropriate-data-types?u=76281980&t=56)** If you incorrectly type the same age column as a regular INT or an integer data type, that same data storage will quadruple, and eat up four bytes of storage.
>
> **[1:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-appropriate-data-types?u=76281980&t=67)** For a company that only has a few employees, that's probably not a big deal, but multiply that kind of data bloat over millions of records in a database, and it can quickly turn into a significant amount of storage space that's being wasted.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-appropriate-data-types?u=76281980&t=81)** And it's not just for storage, most database systems transfer information over a network, sometimes over very long distances.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-appropriate-data-types?u=76281980&t=88)** If you can cut your transmission times by a quarter just by picking the right data type up front, then it's in your best interest to take that responsibility seriously.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-appropriate-data-types?u=76281980&t=98)** The other reason that we want to pick the most appropriate data type is to help protect the integrity and consistency of the data.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-appropriate-data-types?u=76281980&t=106)** You could technically store a person's age in a text field that allows a maximum of three characters, and just store number characters, or that would be HR three data type.
>
> **[1:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-appropriate-data-types?u=76281980&t=117)** The problem with this is that there's nothing preventing somebody from entering an age of ABC or the text T W O.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-appropriate-data-types?u=76281980&t=125)** Picking appropriate data type helps keep the data structured in a way that remains organized and predictable, and that will definitely make the database easier to work with.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-appropriate-data-types?u=76281980&t=136)** So here's the rule.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-appropriate-data-types?u=76281980&t=137)** Pick the smallest data type that will fit the data that you need to store.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-appropriate-data-types?u=76281980&t=141)** Remember not just to look at the data that you have today, but project your needs into the future, and plan ahead for growth.
>
> **[2:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-appropriate-data-types?u=76281980&t=148)** For data like a person's age, you can easily predict a range that will work long-term.
>
> **[2:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-appropriate-data-types?u=76281980&t=154)** Something like a customer ID number might be more volatile.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/choose-appropriate-data-types?u=76281980&t=157)** So build in a buffer to allow your business to go viral, and not break your database if you suddenly have a million new customers overnight.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2), int (1), abc (1)
> **CLI Commands:** make (3)
> **Code Keywords:** let (1), type, (1), type. (1)
> **UI Navigation:** select the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### SQL Server data type options
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=0)** - [Instructor] Now that we know why we need to choose appropriate data types, you're probably wondering what your data type options are in SQL Server, and what makes them different.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=8)** So let's get more specific.
>
> **[0:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=10)** The two main categories are whether you need to store text data or if you need to store numbers.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=16)** Let's tackle numbers first.
>
> **[0:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=18)** First, we have several data types that do not store fractions.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=21)** They can represent hold numbers only.
>
> **[0:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=24)** The smallest number that we can store is called a bit, and it's literally just a 0 or a 1.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=30)** This might not seem like it's going to be very useful at first, but it's actually a common data type to choose.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=36)** The bit can be used to define true or false, or on or off, or yes or no.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=42)** Basically, anything that you would use a checkbox to represent in a user interface, is probably connected to a bit data type.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=50)** No surprise here, the bit data type takes one computer bit to store for each record.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=56)** In fact, all of the data types in SQL Server have their roots in physical storage requirements on disc.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=62)** So even though the actual ranges of values that they hold might seem a bit arbitrary at first glance, they're actually defined by the number of unique values that can be stored in a bit, or a bite, or several bites.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=77)** Next up in scale is the tinyint, which can be used to store values in the range of 0 to 255.
>
> **[1:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=85)** Tinyins take up one bite of storage, which is equivalent to eight bits.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=90)** With these two data types alone, you can see how easy it can be to waste large amounts of storage space by picking the wrong data type to store your data.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=99)** If you only need to store a 1 or a 0 in a column, but you create the column using the tinyint data type, you'll be consuming eight times the storage space than you would if you correctly used the bit data type instead.
>
> **[1:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=113)** And remember, this applies for every single record in the table, so the wasted space can add up really quickly.
>
> **[2:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=121)** Moving up the scale is the smallint data type, which supports values between negative 32,768 all the way up to positive 32,767.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=133)** They take two bites to store on disc.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=137)** You might be sensing a pattern here already.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=139)** The next step up and scale is the integer, which is the int data type.
>
> **[2:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=144)** Ad this supports values between approximately negative 2 billion up to positive 2 billion and some change.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=151)** They take four bites of storage space.
>
> **[2:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=153)** And finally, we have the bigint at eight bites of storage.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=156)** And they can represent numbers between negative two to the 63rd power all the way up to positive two to the 63rd power.
>
> **[2:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=164)** That's plus or minus about nine quintillion.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=168)** There are a couple of other exact numerics that do allow fractions though.
>
> **[2:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=172)** The decimal and numeric data types are exactly the same.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=176)** They allow you to specify a precision and scale for the numbers that you'd like to store.
>
> **[3:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=181)** The precision is how many total digits will make up the number, and the scale is how many of the total digits are on the right side of the decimal point to represent fractionals.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=193)** And then we have currency versions of int and bigint that move the last four digits after the decimal point.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=199)** So smallmoney allows values in the range of plus and minus 214,000, and the money data type will allow a range of negative 922, up to positive 922 trillion.
>
> **[3:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=214)** Interestingly, the money and smallmoney data types don't actually specify the currency type, so they can be used to represent US dollars, or euros, or whatever currency you want to work with.
>
> **[3:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=230)** Next, we have data types that will store dates and times.
>
> **[3:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=233)** Time will store hours, minutes, and seconds on a 24 hour clock.
>
> **[3:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=238)** Date will store dates between January 1st of the year one all the way up to December 31st in the year 9,999.
>
> **[4:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=248)** Datetime2 combines both dates and times into a single data type.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=253)** And datetimeoffset will additionally store time zone information for more globally scaled applications.
>
> **[4:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=263)** There are a few other date and time data types that you'll see in the selection menu in management studio, but those are depreciated types that are kept around for compatibility reasons.
>
> **[4:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=273)** For new tables, stick with these four types here.
>
> **[4:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=278)** Let's now look at the options that we have when storing text.
>
> **[4:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=282)** Char will store a fixed length of character data up to a maximum of 8,000 characters.
>
> **[4:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=288)** Varchar has the same 8,000 character limit but is of a variable length, and it won't pad shorter text with extra spaces like Char will.
>
> **[4:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=299)** Typically, you'll use the char data type when your data is of a relatively consistent length, and then use varchar when there's a drastically different length needed between records.
>
> **[5:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=311)** Nchar and nvarchar are unicode variants that allow characters from the extended character sets that support international languages.
>
> **[5:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=320)** The prefix N stands for the word national.
>
> **[5:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=324)** Because Unicode and codings take twice the storage space of the basic Latin character set, these variations top out at half the number of characters.
>
> **[5:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=333)** Now, there is a small complication here though because in 2019 Microsoft added the ability to store unicode characters in a standard char and varchar data type using the utf8 character in coding system.
>
> **[5:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=347)** It's a specialty use case that makes it possible, but it does require the database to be configured to enable the functionality, and it breaks with the traditional separation.
>
> **[5:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=356)** between two different data types.
>
> **[5:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=358)** I would recommend sticking with the mental model that only the nchar and nvarchar variants should be used for unicode text, which is the way the SQL standard is written, and it's the way that every other database platform uses these data types.
>
> **[6:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=373)** Now, if you do happen to need more characters in a text field, then you'll need to jump up to the varchar max and nvarchar max data types, which each allow you up to two gigabytes of storage.
>
> **[6:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=384)** And yes, you literally write the word max inside of the parentheses to use these data types.
>
> **[6:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=391)** There are some other specialty data types that you're likely to run across now and then.
>
> **[6:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=395)** Things like geometry and geography data types for storing polygon data that could be used to describe property boundaries on a map.
>
> **[6:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=403)** Or unique identifiers, or XML data.
>
> **[6:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=406)** Unless you were taking copious notes during the previous slides, my recommendation is to simply bookmark the data types documentation page at [microsoft.com](https://microsoft.com).
>
> **[6:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=416)** Here you'll find all of the data types broken down into categories, and each one of these is a link to more detailed information about the kinds of information that data type can store and any implementation details you should know about.
>
> **[7:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sql-server-data-type-options?u=76281980&t=430)** This will be a great reference that you can refer to regularly to see all of these specific details surrounding each of the available types in SQL Server.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), type. (3), type, (3), interface (1), finally, (1)
> **Env Vars:** sql (4), xml (1)
> **Definitions:** is a  (2), is called (1), stands for (1)
> **CLI Commands:** make (1), find (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **UI Navigation:** checkbox (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Automatically assign record identities
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=0)** - Beyond the name and data type for our table columns, there's a whole suite of properties that we can configure that will further control what kinds of data will get stored in the database.
>
> **[0:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=10)** Let's take another look at the Red30 Tech database, and I'll scroll into the tables folder and find the customer's table, then I'll right click on it, and open it up In the design tool.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=22)** At the top we have the properties that we've already defined for each column, such as the column name, the data type, and whether to allow nulls or not.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=30)** At the bottom, we have additional properties shown for the currently selected column.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=35)** You can make this area bigger on the screen if you need to be able to view more column properties at once.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=41)** Notice the properties area breaks the data type and the length into two separate properties, whereas up above, we're seeing what's called the condensed data type that combines the actual type with its length, precision, or scale here in the parentheses.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=56)** Now these properties below are dynamic, so for instance, if I create another column and assigned it a decibel data type, we go ahead and select that from the list here.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=66)** Then when I select that column, you'll see in the properties we have new properties for precision and scale that didn't apply to text.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=76)** Or if I come back up and change that data type for the new column to an INT, and then click off of the column again, you'll see that we don't actually have any additional properties for the INT or integer data type.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=88)** So in this window, we have a couple of general properties at the top, and then below that we have some table designer properties grouped below.
>
> **[1:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=95)** And you can scroll through the list to see all the different options that we have, and these might give you some ideas for interesting things that you can do with the columns for your database.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=104)** The one that I want to focus on is called the identity specification.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=109)** It's only available if you're using one of the integer data types.
>
> **[1:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=113)** You can see that it has a little arrow to the left hand side of it, and that means that it has sub properties.
>
> **[1:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=117)** So let me go ahead and open that up so we can see what they are.
>
> **[2:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=121)** This reveals three individual properties, his identity, identity increment, and identity seed.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=130)** So, what do these three properties do?
>
> **[2:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=132)** One of the most common types of information that you'll want in all of your tables is a unique identifier.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=139)** A unique identifier will allow you to locate unambiguously a single record, and it's one of the core requirements that make a relational database work.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=149)** Things like employee ID numbers, or people's social security number, or their driver's license number.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=155)** All of these are unique identifiers that help various organizations and governments keep track of who is who.
>
> **[2:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=163)** And because they're so common, SQL Server has this capability to have the database engine automatically assign new unique identifiers when new records are added.
>
> **[2:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=174)** So, let's go back and give this new column a name.
>
> **[2:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=177)** I'll call it customer ID.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=180)** I'll leave it as an INT data type, and we'll add the identity specification property.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=186)** I'll change his identity from no to yes using the dropdown menu, and that'll unlock the other two properties.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=193)** The identity seed is basically just the starting number, and the increment is how much the system will increase each successive identifier that it assigns.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=204)** I'll set the identity seed to 1000.
>
> **[3:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=208)** This way all of our customers will have a four digit ID number.
>
> **[3:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=213)** Then I'll set the identity increment to one.
>
> **[3:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=217)** Now I can save the design of the table by clicking the disc icon in the toolbar or pressing CTRL+S on my keyboard.
>
> **[3:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=224)** Now if I go and right click on the customer's table and choose select top 1000 rows, you'll see the new customer ID column over here on the far right.
>
> **[3:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=233)** You can see that Katherine got the customer ID 1000, Eric Bryant is 1001, and so on through all of our customers.
>
> **[4:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=242)** Now there's one last change that I want to make here.
>
> **[4:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=245)** This isn't required, but it's usually a good practice to make a table's unique identifier to be the first column in the table structure.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=253)** We can do that back in the design window.
>
> **[4:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=256)** Then click the selector box to the left hand side of the customer ID column, and then click and drag it up to the very top of the list.
>
> **[4:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=264)** Once again, I'll save the change to the design of the table, and at this point we can close the design tab.
>
> **[4:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=270)** Then I'll bring us back to this query window.
>
> **[4:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=272)** I'll go ahead and close that.
>
> **[4:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=274)** Then I'll right click the customer's table again and select top 1000 rows one more time.
>
> **[4:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=279)** Now you can see the customer ID column is in a better position here at the very beginning.
>
> **[4:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/automatically-assign-record-identities?u=76281980&t=285)** So, that's how you can use the identity specification property to have SQL Server automatically assign unique IDs to all of your records.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), type, (3), type. (1)
> **Env Vars:** int (3), sql (2), ctrl (1)
> **CLI Commands:** make (4), find (1)
> **Documentation:** specification (3)
> **UI Navigation:** click on (1), dropdown (1), in the toolbar (1)
> **Definitions:** is called (1), means that (1), is a  (1)
> **Analogies:** such as (1), for instance (1)
> **Best Practices:** good practice (1)

#### Primary key fields
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=0)** - [Instructor] If I open the Red30 Tech customers table in the design tool again, we'll see that we now have the customer ID column created that's automatically generating unique identifiers for each customer that we enter into the table.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=14)** Because unique record identifiers are so core to the functionality of a relational database, we can take the concept one step further and tell SQL Server that even though there may be other columns in the table that store unique values, this column in particular is the most important.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=32)** We do this by designating the column as the table's primary key.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=36)** To see what this means, let's go ahead and open up the customer's data.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=40)** I'll right click on it and choose select top 1000 rows.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=44)** Now, the reason we designate a primary key column is so that we can know without a doubt that we will always have a way of finding specific records of interest.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=53)** If we were to search through our customer's table by the first name values, then we're going to find all of the records for the person that has the same value.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=64)** If we were to combine first and last names, there's also a possibility that we'll find multiple customers with the same full name.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=71)** By searching based on the unique customer ID, we know that we can find a single specific person no matter how many records the table contains.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=81)** This Katherine Reid will always be customer ID number 1000, and nobody else will ever get assigned her unique ID number even if we have 100 other people named Katherine Reid added over time.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=96)** Now, back in the designer, you're not going to find a primary key property in the window below.
>
> **[1:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=101)** To designate the customer ID column in our table as the primary key, we'll simply make sure that that column is selected, and then in the top toolbar, you'll click on this little key icon to set the primary key.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=115)** When you do that, you'll see a little yellow key icon up here on the left hand side of the column's name.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=120)** Notice that the button on the toolbar is actually a toggle button so you can remove the key in the same way.
>
> **[2:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=126)** You'll just toggle it off or you can right click on the column name and there'll be options here to either set or remove the primary key in this popup menu.
>
> **[2:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=135)** Okay, so with the primary key set for the customer ID column, I'll go ahead and save the change of the table by clicking the disc or choosing control S on my keyboard.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=145)** Once that change is saved to the design of the table, we can close the designer tab.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=150)** Now in the object explorer, if I expand the customer's table and then expand the columns folder here, you'll see that the customer ID column gets its brand new fancy key icon, and in parentheses you'll see the PK notation, which is another indication that this is the primary key column for the table.
>
> **[2:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=170)** In the keys column, you'll also see an indication that we now have a primary key set for the customer's table.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=176)** Finally, if I go down and expand the indexes folder, you'll see we also have an indication that there is an index or a clustered index for the customer's table.
>
> **[3:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=187)** We'll talk about indexes later on in the course, but for now, all you need to understand is that by designating the primary key for the table, SQL Server will also use this column as the natural order in which the data is stored in the table which makes it fast to search through and find specific records when we search for them by the customer ID values.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=209)** Now, I want to make it clear that you don't have to use an automatic identity specification feature to generate primary key values in your tables.
>
> **[3:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=220)** I'm using that here in this customer's table as a convenience.
>
> **[3:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=224)** The only requirement for a primary key column is that every value in the column is unique to each record.
>
> **[3:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=231)** So if you are supplying your own unique value for each record, like a products model number if it's specific to your manufacturing process or if there's another naturally occurring unique value in your database, oftentimes email addresses are used for this purpose, you can assign those columns as the primary key instead.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=250)** In fact, you can combine multiple columns into something called a composite key if jointly they describe a unique record.
>
> **[4:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=258)** For instance, a room number alone isn't enough to locate a specific class on a large university campus but a building name combined with a room number is.
>
> **[4:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/primary-key-fields?u=76281980&t=268)** By setting a primary key, you're saying that the column will be the default way that records will be located in the table.

> [!info]- Semantic Content
>
> **CLI Commands:** find (5), make (2)
> **UI Navigation:** click on (3), toggle (2), open the (1)
> **Code Keywords:** let (1), finally, (1)
> **Env Vars:** sql (2)
> **Documentation:** specification (1)
> **Definitions:** is an  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Establish a default value
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=0)** - In order to speed up data entry in your tables you can specify a default value that will appear in a column when no value is supplied.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=9)** This way, you can simply skip over that field to accept the default or change it if it needs to be something different.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=15)** For the Red30 Tech database, we found that most of our newer products are going to be in the ebooks category, so I want that to be the default value that'll get suggested when entering in new products.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=28)** To make this change find the products table in the Red30 Tech database, right click on it and open up the design window.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=35)** Then with the category column selected, take a look in the properties at the bottom of the screen and find the default value or binding property.
>
> **[0:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=43)** Here I'll type in the value that we want to be supplied automatically, ebooks.
>
> **[0:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=48)** When I press enter SQL Server wraps this in single quotation marks, which indicates that this is a text string.
>
> **[0:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=55)** It also prepense, the N character which means that this will use the Unicode character set.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=62)** It does this because our data type for the column is an end bar chart so it's a Unicode compatible variable character text field and that's all we need to do to set this up as the default value for the column.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=76)** Now we can save the changes to our table's design and test it out.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=81)** Before I do though, I want to point out this little asterisk character that appears in the tabs title.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=87)** This means that we've made changes that have not yet been saved.
>
> **[1:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=91)** Press the save icon or press control S on your keyboard and you'll see that the asterisk disappears.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=97)** Okay, with the changes saved I'll go ahead and close the design tab.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=102)** Now, I'll right click on the products table and choose edit top 200 rows.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=107)** This shows me a bunch of data that already is existing inside of that products table.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=111)** I'll click on this button here at the very bottom that says move to new row with the arrow and the little starburst icon.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=118)** That'll move us down to the very bottom of the table and allow us to input a new product.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=123)** Now, the category for this product, I want it to be ebooks.
>
> **[2:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=126)** It currently says null, and I'm just going to press tab to skip over that column.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=131)** Then we'll fill in the values for the rest of the columns for the new product.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=136)** EB522 is the product ID number.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=140)** This is the Building Your First Database book.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=145)** The retail price is $19.99.
>
> **[2:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=148)** It costs six dollars and 45 cents to print, and we have a total of 230 in stock.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=157)** Now, when I press enter or tab one more time to move to the next record, you'll see that the value of ebooks automatically got put in, even though we didn't specify that for that specific product.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=168)** So that's an example of how the default value works.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=171)** It'll automatically supply the value when we don't give it something else.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=176)** One other way that we can use the default value is to automatically store a timestamp when a new record is added to a table.
>
> **[3:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=183)** Let's open up the products table in the design window one more time and I'll add a new column at the end called timestamp.
>
> **[3:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=192)** For this, we'll use the date time two data type.
>
> **[3:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=198)** Then for the default value I'll use a function that's internal to SQL server called getdate.
>
> **[3:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=206)** Just type in getdate with no space and then an open and a closed parenthesis at the end.
>
> **[3:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=212)** This will fetch the current system date and time and automatically supply that as the value for the column whenever we enter in a new product.
>
> **[3:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=221)** All right, let's press Control S on the keyboard to save the design change to the table.
>
> **[3:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=225)** I'll close this down and it's asking me to save the change again.
>
> **[3:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=228)** Let's go ahead and say yes to that and I'm also going to close this tab again so I can reopen it with the new column.
>
> **[3:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=235)** Once again, I'll right click on the products table and choose edit top 200 rows.
>
> **[4:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=241)** Then I'll press the button at the very bottom to move me to the new row at the very end of the table and we'll start entering in another new product.
>
> **[4:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=249)** Once again, I'll tab off of the category.
>
> **[4:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=252)** That'll skip it, it'll say null, it'll put in an ebook again.
>
> **[4:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=257)** This ebook will be EB523.
>
> **[4:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=262)** It's Advanced Databases.
>
> **[4:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=267)** The price is $19.99 again.
>
> **[4:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=269)** It also costs $6.45 to print and we have 115 of these on hand.
>
> **[4:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=276)** I'll press tab one more time to move over to the timestamp column, which is this one over here on the far right and I'll press tab one more time to move off of that cell.
>
> **[4:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=285)** Notice that it automatically put in the date and timestamp value, so it tells me exactly when I entered this record into the database.
>
> **[4:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/establish-a-default-value?u=76281980&t=292)** So that's a couple of examples on how you can use the default value to populate a column when entering new data into a table.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), else. (1), this, (1), type. (1), function (1)
> **Env Vars:** sql (2), eb522 (1), eb523 (1)
> **Definitions:** means that (2), is a  (1), is an  (1)
> **CLI Commands:** find (2), make (1)
> **Versions:** 19.99 (2), 6.45 (1)
> **UI Navigation:** click on (3)
> **Speakers:** - in (1)

#### Check constraints
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=0)** - [Instructor] When your data is expected to meet some criteria, you can ensure that what gets entered is valid with a check constraint.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=8)** Check constraints are very similar to the data validation features of spreadsheet programs like Excel.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=14)** With a check constraint on your table, SQL Server will make sure that the values that are being written to your data tables meet the requirements that you've specified.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=25)** I want to add a check constraint to the Red30 Tech customers table.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=29)** So I'll right-click on it and open it up in the design window.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=34)** To add a check constraint to your data table, click on the Manage Check Constraint button up here in the toolbar.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=40)** Looks like a little grid, or you can right-click on any column, and in the popup menu, there's also an option to go to your check constraints.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=50)** Check constraints are a table-level property.
>
> **[0:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=52)** They're not really attached to any specific column, so it doesn't really matter which column you right-click on to get to this window.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=60)** Once the window is open, I'll press the Add button at the bottom to get started.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=63)** That'll add in a new check constraint called CK_Customers.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=68)** Now, we just need to supply the expression that'll be used to validate our data entry.
>
> **[1:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=75)** Let's suppose that we have a business rule that states that a customer's last name must be two characters in length or more.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=83)** To do this, we can use another SQL Server function called Len.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=87)** I'll start that by clicking in the expression, and typing in Len and opening a parenthesis.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=93)** The Len function simply counts up the number of letters in a text string.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=98)** The string that we want to count is the value stored in the last name field.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=106)** I'll type that into the function, and that finishes the function.
>
> **[1:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=108)** I'll close the parenthesis.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=110)** Now we need to make sure that the number of characters is greater than or equal to two.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=118)** So that finishes the expression that we want to evaluate.
>
> **[2:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=121)** We want to make sure that all the last names have more than two characters.
>
> **[2:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=127)** We can add some additional information here so that it's clear what this check constraint is doing.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=134)** The name right now doesn't give us a good description, so I'll go ahead and append _LastNameLength to the end of the name.
>
> **[2:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=144)** This makes it a little bit more clear that this check constraint is on the Customers table, and it's verifying the length of the last name data.
>
> **[2:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=154)** I'll also add a description.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=156)** I'll say, verifies that last names are two characters or longer.
>
> **[2:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=163)** Finally, we have additional options at the bottom that will tell it when we want to apply this rule.
>
> **[2:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=169)** We can check existing data in our table when we save the constraint.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=173)** We can enforce the check constraint when we insert new data or update existing data, and we can enforce the same rule if and when we replicate the data to another database.
>
> **[3:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=184)** I'll leave all of these options set to yes, and press the Close button.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=190)** Now, we can close this tab in the design window, and that'll prompt me to save the change to the table.
>
> **[3:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=196)** I'll go ahead and say yes to that.
>
> **[3:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=198)** Now, we need to test it out.
>
> **[3:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=200)** Let's right-click on the customers table, and choose edit top 200 rows.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=204)** Then I'll come down to the toolbar at the very bottom, and press the button to move to the new row with the arrow and the starburst, and we'll try entering in a new customer with a very short last name.
>
> **[3:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=215)** The customer ID column is using the identity specification feature, so we actually don't need to type anything in there.
>
> **[3:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=222)** I'll press tab to move over to the first name value.
>
> **[3:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=224)** I'll type in the name, Adam.
>
> **[3:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=226)** Press tab again.
>
> **[3:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=227)** And for the last name, I'll just type in a W.
>
> **[3:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=232)** I'll press tab three more times to move through the address.
>
> **[3:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=234)** I'm not going to supply any values for these.
>
> **[3:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=236)** And when I press tab one more time to move to the next row, I get this error message.
>
> **[4:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=242)** It tells me that no row was updated.
>
> **[4:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=245)** The reason for this is that the insert statement conflicted with our check constraint.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=250)** The value that we tried to put into the database is simply too short.
>
> **[4:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=257)** At this point, you can press the OK button, and either go back and fill in a longer name or simply press the escape key on your keyboard to undo all of those changes.
>
> **[4:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=267)** To easily see if a table has any check constraints, you can go into the table over in the Object Explorer window, and expand the Constraints folder.
>
> **[4:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=276)** Here, we can see the new check constraint that we've just added.
>
> **[4:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=280)** As a quick aside, if you also go into the Products table, and expand the Constraints folder underneath that table, you'll see to additional constraints for the default values that we put in in the previous movie.
>
> **[4:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=293)** Default values are also implemented as a type of constraint on the data.
>
> **[4:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/check-constraints?u=76281980&t=298)** So that's how you can use a check constraint to provide a level of data validation to ensure that information that's getting entered into your database meets your expectations and business rules.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (2), this, (1), finally, (1)
> **UI Navigation:** right-click (4), click on (1), in the toolbar (1), go to (1)
> **CLI Commands:** make (3)
> **Env Vars:** sql (2)
> **Cross-References:** in the last (1)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)

#### Unique constraints
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=0)** - [Instructor] There are any number of reasons why you would want to enforce values in a record to be unique from all other records in the same table.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=8)** The table's primary key column is just one example of a column that needs to maintain unique values.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=14)** It's probably a bad idea to have two different products with exactly the same name because that would make it confusing for customers that are trying to place an order.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=23)** Or maybe you want to use email addresses as a way to identify individual people when posting reviews on a recipe website.
>
> **[0:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=31)** We can have SQL Server monitor the values that are being stored in our table, and by identifying individual columns that should not allow duplicate values between records, we can have the server enforce this rule on the data.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=46)** Let's take a look inside of the products table for the Red30Tech database.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=51)** Going to expand it open here and then expand the columns folder.
>
> **[0:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=55)** In this table, we have a column that's storing the name of each product.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=60)** Now, we obviously don't want to have two products with the exact same name, but as it stands right now there's actually nothing preventing the database from accepting another record with exactly the same text.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=71)** So let's go into the table's design and make a rule that every product name must be unique in this table.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=79)** I'll right click the products table and then open up the design window.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=83)** Now you're not going to find any buttons up here on the toolbar that says unique constraint and if you right click the name of the name field, you won't find any options in here for setting unique constraints either.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=96)** The way that SQL Server manages uniqueness across your records is by maintaining an index on that particular column.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=104)** The reason that SQL Server does it this way makes sense once you understand what's going on behind the scenes.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=110)** Right now our name data can appear in any order in the column.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=114)** In order to make sure that a new product name is unique, SQL Server would have to check the new value against every other value that's already stored in the table, starting at the top and slowly working its way down to the bottom.
>
> **[2:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=128)** For large tables, this is a pretty inefficient process.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=131)** The way around the problem of having to check against every record is to maintain a second copy of the data that's always in alphabetical order.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=140)** This is called a table index.
>
> **[2:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=143)** With an index sorting the name values, when we want to input another product, SQL Server can jump straight to the relevant portion of the index to see if there's already an existing match.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=156)** So we're going to enforce our unique values rule through the use of an index.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=161)** And sure enough, there's an entry for that here in the right click menu when you right click the name column.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=168)** When we enter this window, we'll see that we already have an index for the table's primary key.
>
> **[2:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=174)** You can see the details of that index over here on the right.
>
> **[2:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=177)** We want to create a new index so press the add button at the bottom of the screen.
>
> **[3:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=183)** It gets the default name of ix_products.
>
> **[3:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=187)** We're going to come over in the general section of the properties, and I want to target the name column.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=193)** I'll go ahead and click the ellipsis button over here on the right and from the dropdown menu, I'll choose that column from the list.
>
> **[3:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=200)** For the sort order, it really doesn't matter but I'm just going to stick with ascending so that the index maintains a normal A to Z arrangement.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=209)** Go ahead and press OK and that'll I'll return you back to the main screen.
>
> **[3:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=212)** You can see that the column property is now focused specifically on the name column of our table.
>
> **[3:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=218)** The magic happens with the next option is unique.
>
> **[3:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=222)** I want to change this is unique property to yes.
>
> **[3:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=225)** I'll use the dropdown menu and make that change.
>
> **[3:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=228)** For the index name, we can put whatever we want here but a typical convention is to name it ux to denote that this isn't just a regular index on the data, but one that also forces a unique constraint.
>
> **[4:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=241)** We'll follow that with an underscore, the name of the table, products, and finally, another underscore and the name of the column that we're focusing on, name.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=253)** Let's press the close button down here that'll apply the changes.
>
> **[4:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=256)** And now I can just press the save icon on the toolbar or press Control + S to save the design of the table.
>
> **[4:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=262)** Now we can close the design window and take a look at the products table over here in the object explorer.
>
> **[4:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=268)** I'm going to collapse the columns folder and then expand the indexes folder.
>
> **[4:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=273)** And there is our new unique constraint on the data.
>
> **[4:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=277)** Now let's test it out.
>
> **[4:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=278)** I'll right click on the products table and choose edit top 200 rows.
>
> **[4:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=283)** Then on the toolbar on the bottom, I'll press the button to move to the new row at the very bottom, it'll allow us to enter in a new record.
>
> **[4:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=291)** So I'm going to enter in a record that's the blueprints category.
>
> **[4:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=296)** The product ID is going to be BP112 and this is going to be for a cat robot blueprint.
>
> **[5:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=307)** Now there's already a product in the table named cat robot blueprint so we're going to be duplicating that name here.
>
> **[5:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=316)** I'll press tab and we'll move over to the retail price and we'll set that at 4.99.
>
> **[5:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=320)** The manufacturer cost of $1.90 and we have 300 in stock.
>
> **[5:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=326)** I'll press tab one more time.
>
> **[5:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=328)** That moves me over here to this timestamp column.
>
> **[5:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=330)** I'm not going to enter in a value and just press tab again.
>
> **[5:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=333)** It tells me that no row was updated.
>
> **[5:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=337)** The reason for that is that we have a conflict with our unique constraint.
>
> **[5:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=341)** The duplicate key value is cat robot blueprint.
>
> **[5:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=344)** We need to supply a different name that doesn't exist in this table already.
>
> **[5:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=348)** Let's go ahead and say OK to this and I'll come back over to that column and I'll change the name to a large cat robot blueprint.
>
> **[5:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=357)** This time when I press enter, it saves the value into the database without any further complaints.
>
> **[6:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=364)** So that's how unique constraints work in SQL Server.
>
> **[6:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=367)** The tricky part is simply remembering that they're enforced through the use of a table index.
>
> **[6:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=372)** But once you've got that down, they're easy to apply to your data tables to have SQL Server.
>
> **[6:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/unique-constraints?u=76281980&t=377)** Make sure that every value saved in a column only appears in the table a single time.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), cat (4), find (2)
> **Env Vars:** sql (7), bp112 (1)
> **Code Keywords:** let (5), match. (1), finally, (1)
> **UI Navigation:** dropdown (2), click on (1)
> **Versions:** 4.99 (1), 1.90 (1)
> **Definitions:** is a  (1), is called (1)
> **Code Identifiers:** ix_products (1)
> **Speakers:** - [instructor] (1)

#### Foreign keys
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=0)** - [Instructor] The entire value of a relational database and what makes them so efficient for storing data comes from the fact that data tables relate to one another.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=9)** This means that you can take a piece of information from a record in one table, take that information to another table, and find additional details that have a relationship to the original data.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=22)** We can see how this works by digging into the Wide World Importer's example database.
>
> **[0:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=26)** I'll go ahead and expand the tables for that database.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=30)** Now, there are lots of tables here, and you can see that they're using that concept of a schema that I touched on briefly to help organize them.
>
> **[0:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=37)** So we have the application schema and several tables in that schema.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=41)** We then have the purchasing schema with its own set of tables, as well as a sales schema with some additional tables there.
>
> **[0:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=49)** The table that I want to start with is the Sales.Customers table.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=53)** Let's right-click on it and Select Top 1000 Rows to view some of the data.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=58)** I want to focus on the first record here at the very top for the Tailspin Toys Head Office.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=64)** We have lots of columns that describe this particular customer, if I scroll over to the right, we'll find a property or a column for the DeliveryCityID.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=74)** It's this number here, 19586.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=78)** Now this isn't really clear exactly what city we're talking about, though.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=83)** In order to look up the city, we need to find this specific ID number in a different table.
>
> **[1:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=89)** In this database that's linked to the Application.Cities table.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=94)** Let's right-click on that one now and Select Top 1000 Rows.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=99)** Now there's way more than 1,000 records in this table, so I actually need to change this query here at the top.
>
> **[1:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=103)** So instead of select top 1000, I'm going to say select top 20,000, and then press the Execute button.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=111)** Now I can scroll through the results until I find that same city ID, 19586.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=119)** After a bit of scrolling, I find it right here.
>
> **[2:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=121)** It's the City of Lisco.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=124)** To find out where this particular city is, we can take a look at the StateProvinceID column.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=130)** The StateProvinceID is number 28.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=134)** To find out what exactly this corresponds to, we need to go to another table, the ApplicationStateProvinces table.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=141)** Let's go ahead and right-click on that and Select Top 1000 Rows.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=146)** Then we can scroll through these results until we get to number 28.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=151)** And there we go, it's the state of Nebraska.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=155)** So now by looking through three different tables, we know a lot more information about Tailspin Toys' Home Office location.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=162)** We know they're in the city of Lisco and the state of Nebraska, and we also have all these additional columns that describe their location that we can refer to.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=171)** For instance, they're in the Plains Territory.
>
> **[2:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=175)** If I scroll over to the right, we'll also find the population of that state.
>
> **[3:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=181)** The reason that this is an efficient way to store data is because these related details are only stored once in the database.
>
> **[3:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=189)** If I need to update the population of the state of Nebraska, I can do it here one time in this table, and it will apply to every customer that we have in the same state.
>
> **[3:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=200)** If, on the other hand, we stored the population of Nebraska back in the original Customers table, the same number would have to appear in every record of every customer that lived in that state.
>
> **[3:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=212)** These columns that relate one record to additional details are called foreign keys.
>
> **[3:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=217)** So if I go back to the first query that takes a look at the customers, the DeliveryCityID column is a foreign key column in this table that links to the primary key column in the Cities table.
>
> **[3:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=232)** Then the StateProvinceID from this table is a foreign key in this table, but it links to the primary key in the States table.
>
> **[4:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=242)** So that's how foreign keys work in your relational databases, they link information from one record to records in another table.
>
> **[4:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/foreign-keys?u=76281980&t=251)** We can now take this concept and apply it to the Red30 Tech database next.

> [!info]- Semantic Content
>
> **CLI Commands:** find (8)
> **Code Keywords:** let (3), if, (1)
> **UI Navigation:** right-click (3), go to (1)
> **Definitions:** is a  (2), means that (1), is an  (1)
> **Cross-References:** go back to (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Create a foreign key column
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=0)** - [Instructor] To apply the concept of a foreign key column to our Red30 tech database, I want to create a new table.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=7)** We have a table for customers, and we also have a table for products.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=11)** So it would make sense if we had a table for orders where we could store information about the products that specific customers have ordered.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=19)** Let's right click on the table's folder, point to new, and choose table, and that'll start up a new table design window.
>
> **[0:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=26)** The first column is going to be the order ID.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=30)** We'll store this as an int data type, and I do not want to allow nulls, so I'll turn that checkbox off.
>
> **[0:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=38)** Then down in the properties, I want to apply the identity specification property so I'll find that and twirl it open.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=46)** I'll change the is identity property to yes, and I'll leave the seed and increment both set to one.
>
> **[0:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=54)** I also want this order ID to be the primary key for the table, so I'll come back up here to the top and click the key icon to apply that over here on the left.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=63)** All right, that's the first column.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=64)** Let's go ahead and move down to the second column which will store the order date.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=70)** The data type for this will simply be date.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=74)** Again, I do not want to allow nulls, so I'll turn that off.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=78)** Now at this point, we need to think about how we're going to store the customer's information that's making the purchase.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=84)** If we put in a column for the first and last name, things can get mixed up if we have two different customers with the same name.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=92)** This is where the reference to the primary key in the customer's table comes in, and it demonstrates why it's important that the primary key uniquely identifies a single customer.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=104)** Rather than the person's name, I'm going to refer to their customer ID.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=109)** The data type for this column needs to match the primary key data type in the customer's table.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=115)** So I need to set this to int.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=118)** Once again, I do not want to allow nulls, and I'll turn that box off.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=123)** Next we need to know which product they ordered.
>
> **[2:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=126)** Again, I don't want to store the actual name of the product here.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=129)** I want to reference each product's unique identifier.
>
> **[2:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=132)** So we'll create a column called product ID, and in the products table that data is stored as an NVARCHAR(50).
>
> **[2:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=143)** I'll go ahead and choose that from the popup list.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=145)** Once again, I do not want to allow nulls.
>
> **[2:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=148)** The reason that we're choosing NVARCHAR(50) here is because that's how that data is being stored in the products table over here in the Object Explorer window.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=157)** So we need to ensure that these same values that are stored in this table can be stored in this column of the new table.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=165)** Finally, I'd like to add in a column that'll store the quantity of products ordered.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=171)** This we can store as an int again, and just like the other columns, I do not want to allow nulls.
>
> **[2:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=177)** I'll turn that check box off.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=180)** All right, so that sets up the structure for the table.
>
> **[3:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=183)** Let's go ahead and close this tab, and it's going to prompt us to save it, and I'm actually going to press cancel here because I want to apply my own name.
>
> **[3:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=189)** So I'll press cancel there, press control S on my keyboard so I can name this orders, and now I can safely close the tab, and we have the new table on the left.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=199)** Let's actually right click the table's folder and choose refresh, and there's the new orders table.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=204)** So let's see how this is going to work with data.
>
> **[3:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=208)** First, I want to review the customer's data so I'm going to right click on that and choose select top 1000 rows.
>
> **[3:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=214)** Let's suppose that the first order is being placed by Katherine Reid.
>
> **[3:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=219)** Her ID is 1000.
>
> **[3:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=222)** Now let's take a look at the products table.
>
> **[3:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=224)** We'll right click on that and choose select top 1000 rows.
>
> **[3:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=227)** Let's suppose that Katherine placed an order for two of our cat robot blueprints.
>
> **[3:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=233)** That's product ID BP104.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=237)** Now that we have this information in hand, we can add the order to the table.
>
> **[4:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=241)** Right click the orders table and choose edit top 200 rows.
>
> **[4:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=246)** Now the order ID uses that identity value, so I'm going to skip over this and move over to the order date column.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=253)** Here I'll put in the date of 8/8/2022 and press tab to move over to the customer ID.
>
> **[4:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=260)** We'll put in Katherine's customer ID of 100 and move over to the product ID.
>
> **[4:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=265)** The product that she ordered is BP104.
>
> **[4:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=268)** Press tab, and she ordered a quantity of two of those blueprints.
>
> **[4:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=273)** We'll press tab again, and that finalizes the entry and saves this record into the database.
>
> **[4:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=280)** So now I can easily find out who this order is for by looking up the customer ID found in the foreign key column in this table back to the primary key column in the customer's table to confirm that it links to Katherine.
>
> **[4:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=292)** And I can look up the unique product ID in the products table to see the specific item that she ordered, and that's how you link related information together in SQL Server.
>
> **[5:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-foreign-key-column?u=76281980&t=304)** By creating a foreign key column in one table that uses the same data type as the primary key in another table, you can use those values to look up additional details across the database.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), new, (1), type, (1), finally, (1)
> **Env Vars:** nvarchar (2), bp104 (2), sql (1)
> **CLI Commands:** find (2), make (1), cat (1)
> **UI Navigation:** click on (3), checkbox (1)
> **Documentation:** specification (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Create relationships between tables
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=0)** - [Instructor] Now that we've created a link between the data in the Red30 Tech customers orders and products tables, the last step in creating a relationship between the primary key and foreign key columns is to tell SQL Server what we've built.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=15)** We need to formalize the relationship so that it can be recognized by the database engine.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=21)** This will enable SQL Server to follow the threads between the tables for us so that we don't manually have to look up values from one table to another.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=30)** We do this in the table on the foreign key side of the relationship.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=34)** In our case, that means the orders table.
>
> **[0:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=37)** I'll right click on it and open it up in the designer.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=41)** Then on the toolbar, find the relationships button.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=44)** It's this icon here with the two tables that are linked with a little plus symbol.
>
> **[0:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=49)** Go ahead and click that and it opens up the foreign key relationships window.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=53)** Next at the bottom, press the add button and that'll add in a new relationship.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=58)** To set up its parameters, we're going to find the tables and columns specification parameter here.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=64)** Click in the blank space over on the right and then click the ellipsis button.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=68)** This is where we'll set up that relationship between the primary key table and the foreign key table.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=74)** In this case, we're going to set up the customer's table, so I'll go ahead and select that as the primary key table.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=80)** Then in that table, I'll click the cell down below to choose the customer ID column.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=87)** We're going to link the values here over to the orders table and not the order ID column, but the customer ID column here as well.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=96)** Next, I'll press the okay button, and that applies its specification.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=100)** We can now see that we're setting up a relationship between the orders table and the customer's table.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=107)** The other property that I want to call special attention to is this one here, that says, enforce foreign key constraint.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=114)** The default is yes, and I recommend that you leave it this way.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=118)** What this property does is that it makes it so that SQL Server will not allow us to enter in a record in the orders table that tries to link to a customer ID that doesn't exist.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=129)** It's another way that we can protect the integrity and completeness of the data that we're storing.
>
> **[2:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=135)** Let's go ahead and add in one more relationship to the products table.
>
> **[2:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=138)** Once again, I'll click in the tables and columns specification field.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=142)** I'll click the ellipsis button over here.
>
> **[2:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=144)** This time, we'll link it to the products table and the product ID column in that table, and we'll link it to the orders table and the product ID column in this table.
>
> **[2:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=154)** We'll say okay.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=155)** That creates the new foreign key relationship, and then I can press the close button.
>
> **[2:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=160)** Now I need to press Control+S on my keyboard to save the changes, and in this case, it actually needs to save changes to all three tables in the relationship.
>
> **[2:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=169)** I'll go ahead and say yes, and then I'll save all three of our tables and I can close the design window.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=176)** Now we can test it out by adding in a new order.
>
> **[2:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=179)** I'll right click on the orders table and choose edit top 200 rows.
>
> **[3:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=184)** Once again, we're going to fill in the second record down here.
>
> **[3:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=187)** We'll put in the same order date of 8-8-2022 and move over.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=193)** We'll say that Catherine is also placing this order.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=195)** I'll say customer ID number 1000 and press tab, but this time we're going to put in a product ID that doesn't exist.
>
> **[3:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=203)** How about ZZ100, which is not a product that we carry.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=207)** I'll press tab to move over to the quantity and I'll try and put in a quantity of two.
>
> **[3:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=212)** When I press enter, I get an error as we expected.
>
> **[3:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=216)** It tells me that the insert statement conflicted with the foreign key constraint.
>
> **[3:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=222)** This is basically telling me that we don't have a product named ZZ100, so that foreign key constraint is preventing us from entering in this record to the database.
>
> **[3:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=231)** I'll go ahead and say okay, and then I'll simply press escape to erase that record.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=237)** So we can see our foreign key constraint is correctly protecting us from entering erroneous data.
>
> **[4:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=243)** Back in the object explorer, if we expand the orders table and then expand the columns folder, we'll see the customer ID and the product ID fields are represented by these new white key icons and they also have the FK designation here.
>
> **[4:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=258)** Those are both two indicators that these are foreign key columns in our database.
>
> **[4:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=265)** And if I come down and expand the keys folder, you'll see the name of the foreign key relationships that we just made.
>
> **[4:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=272)** These names can help point you to the tables that they're related to.
>
> **[4:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=276)** You can even double click on these keys to jump right back into the designer if you need to make any adjustments.
>
> **[4:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=282)** I'll go ahead and just simply press close here and then close all of these tabs.
>
> **[4:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=287)** So we're going to see some more benefits of creating relationships between tables using keys as we continue through the course.
>
> **[4:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-relationships-between-tables?u=76281980&t=294)** Particularly, when we start exploring the role of queries to pull information back out of our tables, we'll see how SQL Server can use these relationships to automatically join data across tables.

> [!info]- Semantic Content
>
> **Env Vars:** sql (4), zz100 (2)
> **Code Keywords:** case, (3), let (1), continue (1)
> **CLI Commands:** find (2), make (1)
> **Documentation:** specification (3)
> **UI Navigation:** click on (3)
> **Prerequisites:** set up (3)
> **Speakers:** - [instructor] (1)


### 5. Structured Query Language

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Understand the role of T-SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/understand-the-role-of-t-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/understand-the-role-of-t-sql?u=76281980&t=0)** - [Instructor] Structured Query Language, or SQL, is the language that we use to talk to our database server.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/understand-the-role-of-t-sql?u=76281980&t=7)** The language has been around for a very long time, having been adopted by the American National Standards Institute, or ANSI, way back in 1986.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/understand-the-role-of-t-sql?u=76281980&t=17)** Every relational database management system on the market today uses some form of the SQL language.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/understand-the-role-of-t-sql?u=76281980&t=23)** Though some adhere to the standard syntax closer than others.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/understand-the-role-of-t-sql?u=76281980&t=27)** Because Microsoft has built some unique and differentiating features into SQL Server, they've had to slightly modify the language away from strict ANSI compliance.
>
> **[0:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/understand-the-role-of-t-sql?u=76281980&t=38)** Today, Microsoft's version of the language is called Transact-SQL or T-SQL.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/understand-the-role-of-t-sql?u=76281980&t=45)** Everything that we've done so far in Management Studio has been performed on the server using the T-SQL language.
>
> **[0:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/understand-the-role-of-t-sql?u=76281980&t=52)** Here's an example of the code that builds the same orders table that we added to the Red30 Tech database.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/understand-the-role-of-t-sql?u=76281980&t=59)** When we build the table using the graphical design interface, Management Studio converts those instructions into this code for us behind the scenes.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/understand-the-role-of-t-sql?u=76281980&t=68)** At some point, it just makes sense to take our skills beyond the tools presented in the graphical user interface and start writing this code ourselves.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/understand-the-role-of-t-sql?u=76281980&t=77)** That's what this chapter is all about.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/understand-the-role-of-t-sql?u=76281980&t=81)** Before we jump in though, I'd like to point you to this Transact-SQL reference documentation.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/understand-the-role-of-t-sql?u=76281980&t=86)** I highly recommend that you bookmark this page as you'll want to refer to it early and often.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/understand-the-role-of-t-sql?u=76281980&t=92)** Whenever you have a question about writing a T-SQL statement, this reference should be your first stop.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/understand-the-role-of-t-sql?u=76281980&t=99)** On the left side of this page are different chapters within the documentation that will help you reference specific topics.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/understand-the-role-of-t-sql?u=76281980&t=105)** Specifically, if I scroll down here, I can find this section on queries and open that up.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/understand-the-role-of-t-sql?u=76281980&t=111)** This section will cover many of the clauses that we'll see over the next few movies to ask questions about your data.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/understand-the-role-of-t-sql?u=76281980&t=118)** There's also a section on functions.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/understand-the-role-of-t-sql?u=76281980&t=120)** Let me go ahead and scroll up to that.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/understand-the-role-of-t-sql?u=76281980&t=124)** This will document how to use the built-in functions that perform calculations within the database or return information from the server.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/understand-the-role-of-t-sql?u=76281980&t=131)** For instance, if I scroll through the function section and get to the date time functions, and expand that, and come down and find the function for GETDATE, we'll see how to use this specific function to return the system date and time from the database.
>
> **[2:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/understand-the-role-of-t-sql?u=76281980&t=147)** We used this function when we created the timestamped default value in the Red30 Tech Products Table.
>
> **[2:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/understand-the-role-of-t-sql?u=76281980&t=153)** So bookmark these pages.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/understand-the-role-of-t-sql?u=76281980&t=155)** You'll want them easily accessible as you continue to work with SQL Server.

> [!info]- Semantic Content
>
> **Env Vars:** sql (9), ansi (2), getdate (1)
> **Code Keywords:** function (4), interface (2), let (1), continue (1)
> **CLI Commands:** find (2)
> **UI Navigation:** scroll down (1), scroll up (1)
> **Documentation:** the documentation (1)
> **Definitions:** is called (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Use the T-SQL editor
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=0)** - [Teacher] Management Studio's Code Editor has some features that will make writing commands in the TSQL language a little bit easier.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=8)** In the Object Explorer window, we can quickly review the code that would be required to recreate some of our existing objects by using the right click menu.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=17)** Find the DBO dot orders table in the Red30Tech database, right click on it, then choose script table as, create to new query editor window.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=28)** That prompts me to reconnect to my database engine, I'll just say connect there, and it opens up the code in a new text editor window.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=35)** This shows me exactly what it would take to recreate this exact table on our system.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=41)** So let's read through the text, starting at the top.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=44)** Here we have the use command and it says Use Red30Tech.
>
> **[0:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=48)** This will make sure that the script executes in the proper database.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=51)** On line number two, we have Go.
>
> **[0:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=54)** The Go Command is used by SQL Server to execute all of the code above before moving on to the lines below.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=63)** On line number four, we have a block comment.
>
> **[1:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=67)** Comments in SQL Server will start with a forward slash and then an asterisks character at the beginning, and then if I scroll to the end of the comment, we'll have another asterisk and another forward slash to end the comment.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=79)** You can also use two hyphens at the beginning of the line to create a line comment in your script.
>
> **[1:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=85)** Next up, we have a couple of settings that just set some various properties on the server before it gets started with the create table statement on line number 11.
>
> **[1:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=95)** Here we're going to create a table on the DBO Schema called Orders.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=99)** Then we start with an open parenthesis and inside we have all of the different column properties.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=105)** First up we have a column named Order ID.
>
> **[1:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=108)** It uses the integer data type.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=110)** It also uses the identity feature and it starts at one and increments by one.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=115)** And finally we say that this column will not allow no values.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=120)** At the end of the line, we have a comma and we come down to define the second column of the table.
>
> **[2:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=125)** This will be the order date column, uses the date data type and also will not allow no values.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=133)** Notice in the script that all of the column names and the table name are written inside square brackets.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=140)** SQL Server requires the brackets around your object names when you use spaces, and the script generator here in Management Studio will just put them around all of the names just in case.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=151)** If your object names do not include spaces, and my recommendation is that you do not use spaces, then these brackets are optional and you can leave them out when writing your own TSQL scripts.
>
> **[2:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=163)** When we get done adding columns into the table, I can go ahead and scroll down here and we have a number of constraints.
>
> **[2:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=170)** We have the foreign key constraints that add check constraints, and we can see they're all listed out right here all the way to the end of the script.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=178)** So this the script that will recreate our orders table.
>
> **[3:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=181)** I'd like to spend a few minutes talking about the interface.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=185)** The color coding allows you to quickly identify different components of these SQL code.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=190)** Blue text is used for sequel keywords.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=193)** Black text is used for table and column names and data types.
>
> **[3:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=200)** Green texts like we have up here on line number four indicate comments.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=204)** Gray text like the Not Null commands are predicates or options.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=209)** And we don't have any, but if you see pink text that indicates a function.
>
> **[3:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=216)** Management Studio also checks through your code and helps identify any syntax errors.
>
> **[3:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=221)** You'll see potential problems underlined in a red squiggly line.
>
> **[3:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=225)** For instance, if I misspell the word create here on line number 11.
>
> **[3:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=230)** After a moment, everything updates to indicate that we might have some errors on a few lines.
>
> **[3:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=235)** Also, I want you to notice that the line that your insertion cursor is on gets highlighted with a gray box around the line.
>
> **[4:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=242)** So it'll help you find the cursor if you lose track of it.
>
> **[4:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=246)** And finally, the other subtle interface detail that I want to point out is this scroll bar over on the right.
>
> **[4:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=252)** It's actually packed with information.
>
> **[4:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=255)** SQL scripts can get quite long so the scroll bar represents the full document from top to bottom.
>
> **[4:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=260)** And the dark gray bar represents the visible portion of your screen.
>
> **[4:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=265)** As you work on your sequel script, you'll see colored blocks appear here.
>
> **[4:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=269)** Right now, there's a blue line that indicates the line that my cursor is on, and you can see it's currently right in the center of the visible portion of my window.
>
> **[4:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=279)** You'll also see red blocks that indicate lines with potential errors.
>
> **[4:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=283)** You can see that there's some lines right where my cursor is, and then a couple more below.
>
> **[4:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=288)** You'll also notice the yellow line on both sides of the window over here where the scroll bar is, and again over here next to the line numbers.
>
> **[4:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=296)** This indicates lines that have not yet been saved to a file.
>
> **[5:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=300)** So let's go ahead and save our script.
>
> **[5:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=302)** Press the disc icon up here.
>
> **[5:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=304)** That prompts me to save it to my desktop, and I'll go ahead and just leave the default name.
>
> **[5:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=309)** Notice the dot SQL file extension.
>
> **[5:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=312)** This is just a plain text file, you can name it txt if you wanted to, but the default is dot SQL. I'll go ahead and save it.
>
> **[5:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=320)** And now you'll see that these bars change to green on both the left and the right.
>
> **[5:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=326)** This indicates that all of these lines have been saved.
>
> **[5:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=329)** If we start making changes, for instance, if I create this error here on line number 11, by spelling the word create correctly, you'll see that we now get a yellow block here next to that, as well as over here on the scroll bar.
>
> **[5:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=343)** The yellow blocks indicate a line that has been modified and not yet been saved.
>
> **[5:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=348)** So by paying attention to all of these color hints, you can maintain a higher level of awareness about what's going on in your file.
>
> **[5:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=356)** Press control-S on your keyboard again, That'll resave the file and all of those lines turn green again.
>
> **[6:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=363)** Finally, on the left side of the code, there's these little minus signs for certain blocks.
>
> **[6:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=369)** These allow you to collapse blocks of code to make things easier to read.
>
> **[6:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=373)** For instance, if you just need to see an overview summary of what's going on and don't need to see the full details of every column that's being created in the table, you can go ahead and press these minus symbols and that'll collapse the create table statement to a single line.
>
> **[6:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=388)** You'll then get these ellipsis dots over here on the right, as well as a plus symbol over here on the left to indicate that some lines are currently hidden.
>
> **[6:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=396)** You can reveal that text again simply by pressing the plus button.
>
> **[6:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=400)** So that's a tour through the TSQL Editing Interface.
>
> **[6:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-the-t-sql-editor?u=76281980&t=404)** You're going to spend a lot of time in this window as you continue to work with SQL Server.

> [!info]- Semantic Content
>
> **Env Vars:** sql (8), tsql (3), dbo (2)
> **Code Keywords:** interface (3), let (2), finally, (2), type. (1), case. (1)
> **CLI Commands:** make (3), find (2)
> **Analogies:** for instance (3)
> **UI Navigation:** click on (1), scroll down (1)
> **Speakers:** - [teacher] (1)

#### Create a table with T-SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=0)** - [Instructor] To start writing your own SQL Commands in Management Studio, you'll start with the new query button here on the toolbar or press control N on your keyboard.
>
> **[0:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=10)** That'll open up a new blank query editing window for you to get started in.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=14)** Now when you activate this window, the second row of tools here in the interface activates.
>
> **[0:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=20)** This is called the SQL Editor toolbar.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=23)** If you're not seeing this toolbar, you can go up to the view menu, point to toolbars, and you can activate it right here.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=30)** Now, there's two important elements that I want to point out right off the bat.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=34)** On the toolbar is a dropdown menu where you can select the target database for your script.
>
> **[0:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=39)** When you expand this panel, it shows you all the other databases on the same server so you could target your script to any of those.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=47)** Make sure that our script is currently targeting the Red30 Tech database.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=50)** I don't want to accidentally create a table in the Kinetico database or Wide World Importers or any of the system databases.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=59)** Next to the right, we have the execute button.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=62)** This is what you'll press to actually run your code.
>
> **[1:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=65)** The keyboard shortcut for this is F5.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=71)** To the right of that, we also have a stop button.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=73)** If your queries are taking quite a while, you can go ahead and cancel their execution by pressing this stop button there.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=81)** So let's go ahead and write a quick script.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=84)** I'd like to add another table to the Red30 Tech database, and it'll store the information on the different categories that our product lines fall into.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=93)** We'll begin with the keywords create table.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=97)** The SQL language is case insensitive, which means that capitalization doesn't matter.
>
> **[1:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=103)** However, over the past several decades of use, it's become the standard that keywords are all written in upper case letters.
>
> **[1:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=112)** Next, we'll name the table that we want to create.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=114)** I'll call it product categories.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=119)** Then we'll open up a parenthesis and come down to line number two.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=124)** Now, anytime I open up a new parenthesis, I like to immediately close it and move it down on the page that I don't forget.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=131)** I'll go ahead and type in the closing parenthesis and just move it down to line number five and come back up.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=137)** Inside of the parentheses, we need to define all of the columns that'll make up the table.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=142)** Just like in the Management Studio design window, we'll give the column a name, a data type that it'll store, and specify whether null values are allowed or not.
>
> **[2:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=153)** Because we're inside what's called a block of code, in this case the create table block, it's customary to indent the lines within.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=162)** Transact-SQL is also white space insensitive.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=166)** So you can add all the empty spaces that you want to make your script legible.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=171)** I'll press the tab key on my keyboard to move over a little bit, and we'll start with the first column, category ID.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=178)** This will store an integer data type.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=180)** I also want to use the identity functionality to automatically create ID values.
>
> **[3:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=187)** We'll use the keyword identity, open a parenthesis.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=191)** We'll type a 1,1 and close the parenthesis.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=195)** The first one is the seed or the starting value, and the second number one is the increment for our identity numbers.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=204)** At the end of this, I do not want to allow null values, so I'll specify not null, type in a comma and come down to line number three.
>
> **[3:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=213)** Next, I need a column for the category name.
>
> **[3:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=218)** This will store a VARCHAR(25) data type.
>
> **[3:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=224)** Again, I do not want to allow null values for this column.
>
> **[3:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=230)** And finally, I need a column for the category abbreviation.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=237)** This is just going to store a two letter abbreviation so we can use a char two data type for that.
>
> **[4:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=245)** Once again, do not allow null values in this column.
>
> **[4:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=249)** Since this is the last column, I don't need to type in a comma at the very end.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=253)** Now, I'll press the delete key on my keyboard to bring our closing parenthesis up to line number five again.
>
> **[4:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=259)** Now after the statement, we'll add the terminator character, which is a semicolon.
>
> **[4:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=264)** Though it's not strictly required in the T-SQL implementation of the SQL language, it's a good idea to get in the habit of including this semicolon at the end of your commands.
>
> **[4:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=275)** Microsoft says that future versions of SQL Server may require that statements are terminated with a semicolon.
>
> **[4:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=282)** So that's our basic create table statement.
>
> **[4:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=285)** One difference that you might notice between what we typed here and what Management Studio displayed when we went through the process of creating the script from an existing table is the lack of the square brackets in our version.
>
> **[4:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=298)** If you're using table names or column names that include spaces or special characters, you'll need to wrap the names in square brackets.
>
> **[5:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=306)** For instance, if we wanted to name the column category abbreviation with a space on it on line number four, Management Studio doesn't understand what we're doing here, and it indicates that we have a syntax error with this red underline.
>
> **[5:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=320)** We would then need to use these square brackets in order to make sure that SQL Server understands that this whole thing including this space is the name of the column.
>
> **[5:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=330)** When I add the square brackets, that little red underline disappears.
>
> **[5:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=335)** I simply just prefer to avoid the issue altogether by not using any spaces.
>
> **[5:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=339)** So I'm actually going to get rid of these brackets and remove the space in the column name again.
>
> **[5:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=345)** So with everything written out, we could press the execute button or press F5 on your keyboard to run the script.
>
> **[5:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=353)** If everything works out as intended, we should get a message window pop up with the success message.
>
> **[5:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=358)** If you get an error here, then you'll want to go back and review the code for any typos.
>
> **[6:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=365)** Now I can go back into the tables folder in the Object Explorer window, right click on it and choose refresh.
>
> **[6:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=371)** And here is the new product category table that we just created using our script.
>
> **[6:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=376)** I can expand the columns and see the three columns inside.
>
> **[6:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=379)** So now you've just created your first table using the Transact-SQL language.
>
> **[6:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-table-with-t-sql?u=76281980&t=384)** I'll save this file in the chapter five folder as CreateTableComplete.sql so you can open it up and compare my script to yours.

> [!info]- Semantic Content
>
> **Env Vars:** sql (9), varchar (1)
> **Code Keywords:** type. (2), interface (1), while, (1), let (1), this, (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (2), is called (1), means that (1)
> **UI Navigation:** dropdown (1), select the (1), click on (1)
> **Analogies:** just like (1), for instance (1)
> **File Paths:** createtablecomplete.sql (1)
> **SQL:** varchar (1)

#### Solution: Create tables with T-SQL commands
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=0)** - [Instructor] In this challenge, we were tasked with creating a table to hold details about fitness classes for a local gym.
>
> **[0:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=13)** We're given a list of requirements and we just need to make sure that the table that we create has columns that are appropriately structured for the given data that we want to insert into the table.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=23)** Now, we're given this sample answer that has the insert statement down below, so we can see that it'll eventually add in three rows of information into the FitnessClassSchedule.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=32)** And we just need to make a table that will accommodate all of this data.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=36)** All right, let me come up here to line number three, and we'll get started with a CREATE TABLE statement, and the name of the table is going to be FitnessClassSchedule.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=47)** Then we'll just open a parenthese, and I'll move that closing parenthese down.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=51)** And I'm going to add my semicolon at the very end right now just for good measure so that I don't forget it later.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=56)** Okay, we'll come inside, and we'll start filling in the different columns.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=59)** The first column that we're told we need is a ClassID column, and this needs to store a whole number for the Class ID, so that tells me it needs to be an integer, and it's also going to be the primary key for the table, so I can put that in here.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=74)** Right, type a comma after that one, and we'll come down and create the second column, which will be the ClassName.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=82)** And we're told that the data for this is going to be text, and it needs to be able to store up to 100 characters.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=88)** So there's a couple of different data types we can use.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=90)** The nvarchar is probably the most appropriate for this, because it'll store Unicode characters and be a variable character length.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=99)** So we'll say nvarchar(100) for that.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=102)** Next one is going to be the InstructorName, and the same logic applies as the ClassName, we need to store 100 characters.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=110)** And the best data type for this is probably nvarchar as well.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=114)** So we'll make that out nvarchar(100) and come down to the next column.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=119)** This will be the ClassDate.
>
> **[2:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=121)** And this can simply use a data type called date that'll store a date value in there.
>
> **[2:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=126)** And likewise, we need the StartTime for the class.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=130)** And this can just use the time data type.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=134)** And the last column that we need is the duration of the course.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=139)** And we're told for this, this needs to hold either 30 minutes, 45 or 60.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=145)** So there's a couple of different data types we could use.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=146)** We could store it as text, I suppose, a better option is to store it as just a regular integer.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=152)** Now an integer is going to allow us to store values up to positive or minus 2 billion, which is way more than what we need.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=159)** So we could also store it as a tinyint, and that'll allow us to store value up to 255.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=165)** So for the data that we need to store, either 30 minutes, 45 minutes, or 60 minutes, a tiny integer will be plenty of space to store those small values.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=176)** And so that was that one.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=178)** Oh, there is one additional column, price.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=180)** This one we're told we need to have a price that is going to be less than $100 every time.
>
> **[3:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=187)** So we can use a decimal data type for this.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=191)** And inside the parentheses, we just need to put in the parameters for this decimal, so less than $100, so we can store that with a total of five digits with two digits after the decimal point.
>
> **[3:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=202)** So I'll say a decimal of (5,2) for that.
>
> **[3:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=205)** All right, that is all of the columns.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=207)** So let me go ahead and just test my code.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=209)** And this is going to create the table and then run this INSERT statement.
>
> **[3:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=212)** And if the INSERT is successful, we'll get a correct output like we do.
>
> **[3:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=217)** So here is the table structure that I just set up and the three rows of data of classes has been successfully put in.
>
> **[3:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-create-tables-with-t-sql-commands?u=76281980&t=223)** So this is my solution to this challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (2), class. (1), type. (1), this. (1)
> **Env Vars:** insert (2), create (1), table (1)
> **CLI Commands:** make (3)
> **SQL:** create table (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Add data to a table
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=0)** - To add data to a table, we'll use the insert into command.
>
> **[0:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=5)** I want to use this command to add records about the product categories at Red30 Tech into the newly created table.
>
> **[0:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=12)** Rather than start with another new blank query editor though, I'm going to open the script that we started building in the last movie.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=19)** To do that, go up to the file menu, then choose open and click open file, or press the control O shortcut.
>
> **[0:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=26)** Then inside the chapter five folder, find the insert start SQL file and press open.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=33)** That'll bring us right back to where we were at the end of the last movie.
>
> **[0:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=37)** Now we can add the insert command below the code that we already wrote starting on line number seven.
>
> **[0:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=43)** It starts with insert into, followed by the name of the table that we want to put values in.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=51)** In this case it's the product categories table.
>
> **[0:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=55)** Notice the IntelliSense feature starts helping us out by selecting names of objects that exist in our database already.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=62)** As soon as you see product categories pop up in the suggestions, you can simply press tab to complete the text.
>
> **[1:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=69)** Now, we need to list out the columns that we're going to add values into, inside a set of parentheses.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=76)** The three columns in the table are the category ID, category name, and category abbreviation columns.
>
> **[1:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=85)** However, the category ID column uses the automatic identity specification feature, so we don't need to supply a value for that column, it'll be done automatically by SQL Server.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=96)** I just need to fill data in for the name and the abbreviation data.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=100)** Let's go ahead and type in the column's category name.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=104)** I'll press tab to select it from the IntelliSense, comma, and then category abbreviation.
>
> **[1:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=112)** That finishes the list of columns that we're going to supply data for, so I'll close the parenthesis there and come down to line number eight.
>
> **[2:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=121)** Next, I need the keyword, values.
>
> **[2:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=126)** Now, we'll just list out the data that we want to supply into those two columns.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=130)** We'll do these inside parentheses.
>
> **[2:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=132)** We'll put the values that we want to store for each record separated by commas.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=137)** It's important that they appear in the same order as the column names that we just wrote on line number seven.
>
> **[2:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=144)** So the first row is going to read, blueprints, comma, BP.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=151)** Make sure that you type in text values that you want to input into the database inside of single quotation marks.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=158)** If you were filling in values for numeric data columns, you would not use the quotation marks there.
>
> **[2:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=164)** Finish the first row with a closing parenthesis, type in a comma, and we can come down to line number nine.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=171)** Now, I'll just continue typing in the values that I want to add for each record.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=178)** I'll insert a row for drone kits with the abbreviation DK, drones with the abbreviation DS, eBooks, robot kits, robots, and training videos.
>
> **[3:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=188)** This is the last row of data that I want to add into the table, so I don't need a comma here at the end of the training videos line.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=195)** We'll just go down to the next line, line number 15, and we'll finish our statement with the closing semicolon.
>
> **[3:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=202)** Now, if we were to execute this query right now, we're going to have two problems.
>
> **[3:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=206)** First, it's going to go through and try and create the table again.
>
> **[3:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=210)** The other issue that we have is that we're actually targeting the wrong database.
>
> **[3:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=214)** Because I opened up this file from a script file that was saved onto my hard drive, the system didn't know what database to attach it to.
>
> **[3:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=222)** And if you look at this dropdown menu up here in the toolbar, you'll see that it's actually targeting the master database on the server.
>
> **[3:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=230)** I want to make sure that I'm targeting the Red30 Tech database.
>
> **[3:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=233)** So use that dropdown menu and make the change there.
>
> **[3:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=236)** That way our inserts go into the proper location.
>
> **[3:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=239)** But we still have that problem if we execute the query, it's going to recreate the table again and come up with an error because this table already exists.
>
> **[4:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=248)** In this case, what we can do is highlight the lines that we want to execute by themselves.
>
> **[4:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=254)** I'll highlight line seven all the way down to 15.
>
> **[4:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=257)** Now, when I press the execute button, SQL Server will only execute the highlighted lines.
>
> **[4:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=263)** It's going to run through that insert into command and insert the seven rows into our new table.
>
> **[4:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=268)** Now, if I right click the product categories table in the object explorer and choose select top 1000 rows, we'll see the seven rows of data that we just inserted with our command.
>
> **[4:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=280)** So that's our insert into statement for inputting data into your SQL Server tables.
>
> **[4:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=285)** Let me go ahead and just put it back on the screen so we can see it right there.
>
> **[4:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/add-data-to-a-table?u=76281980&t=290)** I'll save my finished version of this script in the chapter five folder as, insert complete dot SQL, for you to review.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), for, (1), continue (1), case, (1)
> **Env Vars:** sql (5)
> **CLI Commands:** make (3), find (1)
> **UI Navigation:** dropdown (2), open the (1), in the toolbar (1)
> **Code Identifiers:** ebooks (1)
> **Cross-References:** in the last (1)
> **Documentation:** specification (1)
> **Speakers:** - to (1)

#### Solution: Add data with T-SQL commands
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=0)** (techno upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=5)** - [Instructor] For this challenge, we were given a table of menu items for a hamburger restaurant, and we're asked by the head chef to add in a couple of new items, so that our guests have some additional selections to choose from.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=17)** I'm going to start by just running the SELECT statement that we're given, to see everything that's in the RestaurantMenu to start with.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=23)** So this table has four columns.
>
> **[0:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=26)** The ITEMID, we're told is an auto-incrementing ID number, so we're not going to fill this in.
>
> **[0:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=31)** The database will add these ID numbers for us as we add in our additional items.
>
> **[0:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=37)** And then we have an ITEMNAME, CATEGORY, and PRICE column, and there's currently two different selections on the menu right now.
>
> **[0:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=43)** So we're just going to add in three additional items to this menu, and we can do that with an INSERT statement.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=50)** So we'll say INSERT INTO the RestaurantMenu table.
>
> **[0:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=55)** And, because we're not going to fill in values for all four columns, I do need to specify the columns that I am inserting values into.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=62)** So, we're going to insert into the ITEMNAME, CATEGORY, and PRICE columns.
>
> **[1:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=67)** So it's the (ItemName, Category, Price), close the parentheses, and come down to the next line.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=74)** And we'll type in some VALUES.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=78)** And I'll just put these on each individual line.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=80)** So the first record is going to be a Classic Cheeseburger.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=84)** And because it's text, it needs to go inside single-quotation marks.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=90)** So, 'Classic Cheeseburger', close the parentheses, comma.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=93)** The next thing is the Category, and we're told this is a Main Course item.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=100)** Type a comma there, and then the Price, 10.99.
>
> **[1:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=103)** And because the Price is a numeric value, it doesn't need to go in single-quotation marks.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=107)** All right, close the parentheses, and that finishes our first row.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=110)** And you could do this as three different INSERT statements, or you could just type a comma, and insert all three rows at once with a single INSERT statement.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=118)** So I'll just do it that way.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=120)** The next item is a Bacon BBQ Burger, and it is also a Main Course, and this one is 12.49.
>
> **[2:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=132)** Comma after that one.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=134)** And then the last item is our Truffle Parmesan Fries.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=142)** And this one is a Side Dish, and it has a 6.99 price.
>
> **[2:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=148)** All right, that is the last one, so I don't need to comma at the end, but I do need a semicolon to finish the entire statement.
>
> **[2:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=154)** And that should be it.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=156)** So it's going to insert our three records into the table, and append them onto the two that are already there.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=161)** And then we'll just select everything out of that table again, so we can test it out.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=165)** All right, we get a correct output.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=166)** We have all five of our records.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=168)** The ITEMIDs were automatically generated by the table, so I didn't need to specify those in my INSERT statements.
>
> **[2:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=174)** And we have our Cheeseburger, Bacon Burger, and the new Truffle Fries added into the menu.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-add-data-with-t-sql-commands?u=76281980&t=180)** So that INSERT statement is my solution to this challenge.

> [!info]- Semantic Content
>
> **Env Vars:** insert (6), itemname (2), category (2), price (2), select (1)
> **Definitions:** is a  (4), is an  (1)
> **Versions:** 10.99 (1), 12.49 (1), 6.99 (1)
> **SQL:** select (1), insert into (1)
> **Code Keywords:** from. (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (techno upbeat music) (1)

#### Retrieve records with SELECT
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=0)** - [Man] The next SQL statement that I want to introduce you to is the SELECT statement.
>
> **[0:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=5)** This one is probably the most common that you'll write, and it's for pulling data out of the database and asking questions about your data.
>
> **[0:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=12)** The SELECT statement is literally a database query, and it's where structured query language gets its name from.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=19)** Let's start by opening a new query window.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=23)** Then I'll type out the keyword, SELECT.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=27)** We follow this with a list of the columns that you want to retrieve in the order that you want them to appear in the results.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=34)** Let's write a query that reviews our customer data.
>
> **[0:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=37)** I can review it over here in the object explorer window.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=40)** I'll just expand the customer's table and then expand the columns to see the list of columns that we can work with.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=47)** Let's just run a SELECT statement that reviews all the data from all of these columns.
>
> **[0:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=52)** We'll list them out after the SELECT statement in a comma separated list.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=56)** We'll start with CustomerID, FirstName, LastName, Address, City, and State.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=63)** At the end of the list, we'll come down to line number two, and we need to specify where these columns can be found.
>
> **[1:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=69)** We do that with the FROM clause and specify the customer's table.
>
> **[1:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=75)** Finish the statement with the closing terminator character.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=78)** That's the semicolon there at the end, and we're all done with our first SELECT statement.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=84)** Then you'll just want to double check that you're targeting the Red30Tech database using this dropdown menu, and you can press execute to see the results.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=93)** So here is the data that all of those columns contain from the table.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=97)** Now, we could be more specific in our FROM clause instead of just from the customer's table.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=102)** I could say FROM Red30Tech.dbo.Customers, This hard codes the specific database and the schema that we want to target for the query.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=114)** This way, it doesn't really matter what database we have selected up here in the dropdown menu.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=118)** For instance, I can switch it over to the KinetEco database, press the execute button, and it still executes this SELECT statement against the data in the Red30Tech database.
>
> **[2:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=127)** Let me go ahead and just switch this back, and now I can get rid of Red30Tech and just leave the schema, dbo and the table customers.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=136)** If we don't specify a schema, then SQL Server will assume that we mean a table in the default schema for our user account.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=145)** It's a good idea to be in the habit of including the schema to make sure that SQL Server fully understands our requests.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=152)** Now, we don't need to pull every column from the table.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=155)** If I don't care about the address information, I can just ask for the first name and the last name columns from the table.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=162)** Let me go ahead and modify the SELECT statement to get rid of those other columns.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=165)** Now when I execute the query, I'll see just the data contained in those two columns.
>
> **[2:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=172)** The SELECT query can also return columns in whatever sequence we want to see them in.
>
> **[2:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=177)** For instance, if I want to see the State and City columns first, I can just reconfigure my SELECT statement.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=186)** Now, when I execute the query, I'll see those columns followed by the first name and last name.
>
> **[3:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=192)** You'll see that they're in the same sequence here as I put them up in the SELECT statement.
>
> **[3:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=196)** Now, this query is returning rows from all of the records in the table.
>
> **[3:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=201)** We could say SELECT TOP, and then in parentheses, specify a number.
>
> **[3:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=205)** How about the first three rows?
>
> **[3:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=207)** I'll execute the query now and you'll see it just returns the first three rows of data.
>
> **[3:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=212)** SQL Server also has a shortcut for asking for all of the columns in a table.
>
> **[3:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=217)** Rather than listing them out, I can simply say, SELECT star or asterisk FROM dbo.customers.
>
> **[3:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=225)** The asterisks character is a wild card that simply means everything.
>
> **[3:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=229)** So when I execute the query, I get all of the columns and all of the data that the table contains.
>
> **[3:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/retrieve-records-with-select?u=76281980&t=236)** So that's how you use a SELECT statement to return data from a single table in your SQL Server databases.

> [!info]- Semantic Content
>
> **Env Vars:** select (14), sql (5), top (1)
> **SQL:** select (14)
> **Code Keywords:** let (5), switch (2), from. (1)
> **UI Navigation:** dropdown (2)
> **Analogies:** for instance (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [man] (1)

#### Solution: Query data in a database
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-data-in-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-data-in-a-database?u=76281980&t=0)** - [Instructor] In this challenge, we're given a table of products sold by a coffee roaster, and we need to produce a query that retrieves just the information of interest to the shipping department manager.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-data-in-a-database?u=76281980&t=17)** And we can start by saying SELECT, that's our keyword to grab columns from a data table.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-data-in-a-database?u=76281980&t=22)** And I'll use the shortcut SELECT *, which will just mean to grab all of the columns and then we specify where they're coming from.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-data-in-a-database?u=76281980&t=29)** So from the ProductCatalog table.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-data-in-a-database?u=76281980&t=33)** We'll finish our statement with a semicolon at the end.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-data-in-a-database?u=76281980&t=35)** And if I test it out, we'll see everything that's in that ProductCatalog table and we can see that it returns a total of 12 columns.
>
> **[0:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-data-in-a-database?u=76281980&t=43)** Now the challenge says that we are only interested in getting the columns that are needed by the shipping department manager.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-data-in-a-database?u=76281980&t=50)** So we can see there's lots of information here, including the product category and the brand, the description, the shipping manager doesn't care about any of that information.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-data-in-a-database?u=76281980&t=59)** They just want to see what's in the warehouse.
>
> **[1:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-data-in-a-database?u=76281980&t=61)** So we are asked to get the product name, the stock, quantity, weight, and dimensions columns only out of this table.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-data-in-a-database?u=76281980&t=70)** So we'll come back over here to the SELECT statement.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-data-in-a-database?u=76281980&t=72)** And instead of selecting all of the columns with the asterisk, all I need to do here is just list out the columns that of interest that I want and I need to put them in the sequence that we want them to be returned in.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-data-in-a-database?u=76281980&t=84)** So we'll say ProductName, type in a comma, and I'll just put these on multiple rows just so it's easier to read.
>
> **[1:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-data-in-a-database?u=76281980&t=91)** The next column that I want to see is the StockQuantity.
>
> **[1:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-data-in-a-database?u=76281980&t=95)** Type in a comma, come down and say, Weight, and one more comma.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-data-in-a-database?u=76281980&t=100)** And on the next line Dimensions.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-data-in-a-database?u=76281980&t=104)** Don't need a comma after that last one.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-data-in-a-database?u=76281980&t=106)** And that should be it.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-data-in-a-database?u=76281980&t=107)** That should be the four columns that our shipping manager needs.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-data-in-a-database?u=76281980&t=109)** And there we go, we got a correct output.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-data-in-a-database?u=76281980&t=111)** Shows me the product name.
>
> **[1:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-data-in-a-database?u=76281980&t=113)** This is all of the records from the table.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-data-in-a-database?u=76281980&t=115)** We get their product name, how many are in stock, the weight, and the dimensions, which is what they need to ship products out to our customers.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-data-in-a-database?u=76281980&t=123)** So this SELECT statement is my solution to this challenge.

> [!info]- Semantic Content
>
> **SQL:** select (4)
> **Env Vars:** select (4)
> **Code Keywords:** from. (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Filter returned results with WHERE
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=0)** - When you're only interested in seeing records that meet a certain criteria, you'll add a where clause to your select queries.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=8)** I've opened up a file called Where_Start.sql and you can see that it contains the query for our customer's table that pulls out all of the columns.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=17)** The first time you open this file, you may get red underlines underneath all of these little words here.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=23)** And that's simply because the SQL Server Management Studio IntelliSense feature hasn't updated itself yet to understand that these are all valid table and column names.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=33)** Occasionally, you'll need to go to the edit menu, then down to IntelliSense, and choose the option to refresh the local cache.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=42)** You can also press the Ctrl + Shift + R shortcut key to do that.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=45)** when you do that, SQL Server Management Studio will take a look at your database again, and update its internal database to know that all of the table and column names that you have are valid.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=56)** And you should see those red underlines disappear from the query.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=62)** At this point, I can execute the query and make sure it's targeting the Red30 Tech database.
>
> **[1:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=67)** But when I execute it, it'll return all of the rows that the table contains.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=72)** Looking down in the bottom right-hand corner, you'll see a note that it's returning 1002 rows so we have 1,002 customers in this database.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=82)** Now, if I was only interested in seeing records for customers with an ID of 1500 or above, I could add a where clause to filter those results.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=93)** I'll click my insertion cursor right before the terminating semicolon character and move that down to line number four.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=100)** Then, on line three, I'll add the where clause and we could put in our criteria.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=106)** We only want the people with a customer ID greater than or equal to 1500.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=115)** Now, when I execute the results, you'll see a more limited list.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=119)** Now, I'm only seeing 502 rows, and all of these customers have an ID number above 1500.
>
> **[2:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=126)** If I was only interested in seeing records for our customers from the state of California, I could modify the where clause.
>
> **[2:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=132)** I could say where the state is equal to CA.
>
> **[2:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=138)** Remember that since we're filtering by a text value I need to enclose it in single quotation marks.
>
> **[2:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=144)** Now, when I execute the query, I'll see a total of 76 rows, and all of these are customers that live in the state of California.
>
> **[2:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=153)** We can also combine multiple criteria together.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=156)** If I was interested in all of the people that live in either California or New York, I could simply add that into my where clause.
>
> **[2:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=164)** I could say where the state equals CA, or the state equals NY.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=171)** When I execute the query, I'll get a total of 174 rows and these are all of my customers that either live in California or New York.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/filter-returned-results-with-where?u=76281980&t=180)** So with a wear clause in your select queries you can filter the records that are returned from the database to only the ones that are of interest for any sort of analysis that you want to perform.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2)
> **File Paths:** where_start.sql (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Warnings:** note that (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - when (1)

#### Sort records
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=0)** - The records that get returned in a select statement will typically appear in the order that they're stored in the database.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=7)** To have them returned in a specific sequence that you can control, you'll add another clause to the select statement, the order by clause.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=15)** When I run my customer's query, it returns everyone in the sequence dictated by the customer ID number.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=23)** In order to create an alphabetized list of people instead, you can add an order by clause to the end of the statement.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=29)** I'll do that on line number three.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=32)** We'll order everyone by their first name.
>
> **[0:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=39)** Now, when I execute the query, you'll see a different result.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=42)** Everybody is alphabetized by their first name.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=46)** We still get 1,002 rows so we're still seeing all of our customers.
>
> **[0:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=49)** They're just presented in a different sequence.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=53)** Now, if there happen to be any people in the database with the same first name, for instance we have several different Adams here.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=59)** You might want to have a secondary sort based on the last name.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=63)** You can do that by adding to the order by clause.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=66)** I'll order by the first name, comma, last name.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=72)** Now, when I execute the query, we'll get similar results but you'll see that our names are alphabetized by both columns.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=78)** Adam Acosta now appears before Adam Bishop.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=83)** Now, the default option is to create an ascending list.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=86)** So letters from A to Z, you can specify that you'd like it to be descending by adding DESC to the end of the order by line.
>
> **[1:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=95)** For instance, I could say order by first name descending (DESC), and then by the last name, ascending.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=104)** When I execute the query, we'll see people with the first name that start with the letter Z first and the last name with the letter A first.
>
> **[1:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=112)** Now, if you're using the order by in conjunction with a where clause, then you'll want the order by clause to be the end of your statement.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=119)** For instance, if I was to try and add in a criteria here that said, where the state is equal to CA, and try to execute it in this sequence - you're going to get a syntax error.
>
> **[2:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=132)** That's because the order by clause needs to follow the wear clause.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=136)** So all I need to do here to fix this is cut this to my clipboard, and I'll paste it on the line above.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=142)** Now, when I execute the query, I get a filtered list that only shows me people from California.
>
> **[2:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=147)** Then, we're ordering them by the first name descending, and if there's any matches where we have similar first names, it'll sort by the last name ascending.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=156)** And this is the result set that I get.
>
> **[2:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=160)** The 76 people that live in California, starting with Zeus Rivas.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=166)** And that's the order by clause.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/sort-records?u=76281980&t=167)** It's useful for when you want to make sure that your records get returned in a select query in a predictable sequence.

> [!info]- Semantic Content
>
> **Analogies:** for instance (3)
> **Env Vars:** desc (2)
> **CLI Commands:** make (1)
> **Speakers:** - the (1)

#### Solution: Filter and sort data with a query
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=0)** - [Instructor] For this challenge, we needed to find some products that meet a customer's specific requirements at a local toy store.
>
> **[0:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=12)** And I can start by seeing what the full data set is from the table just by selecting all of the columns, so select asterisk from the table called product catalog.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=25)** And I'll type a semicolon at the end there to finish that statement, and we'll test the code.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=29)** And this shows me everything that's in that table.
>
> **[0:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=31)** So I can see it has the product ID, name, category.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=34)** We scroll over here, we have the brand, a description, price, discount, quantity, weight, dimensions, lots of different information here.
>
> **[0:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=43)** So lots of information about our products.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=45)** And then I can see that there's a total of, well, there's a total of 20 different rows, but it's not showing me all of them here, so it's just showing me the first nine products.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=53)** So that is the data set that we have to work with.
>
> **[0:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=55)** And so now we just need to filter this down to meet the requirements given to us by the customer.
>
> **[1:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=61)** Okay, so let's start with the first requirement is that they are only interested in seeing educational toys.
>
> **[1:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=69)** And so for that information, we can go into the category, and we'll find all the toys that are in the educational toys category.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=77)** And so we could do that with a where clause.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=80)** Let me move this semicolon down here.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=81)** So after from I can say where, the category, is equal to, and I want to match the text educational toys, (instructor typing) And I'll test my code again.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=96)** So that starts to filter down the rows here.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=98)** So now I'm only seeing five products that are in the educational toys category.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=104)** So that is the first thing that we need to do.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=106)** Next step is that we only want to see products that are actually available.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=111)** And so there's a couple of different ways we can define available.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=114)** If we go over here to the right, there is an is available column, and we can see that some of them are true and some of them are false.
>
> **[2:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=121)** So we don't want the ones that are false here.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=123)** The other way that we can define available is if we take a look at the stock quantity, you might make the assumption that anything that is out of stock or has a quantity in stock of zero is also not available.
>
> **[2:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=135)** So you could filter on this column as well.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=137)** So either way, doesn't really matter, it'll get you the same result.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=140)** So it can say where category is equal to educational toys.
>
> **[2:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=143)** And then we can put in another criteria here.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=146)** And I can say, and is available, (instructor typing) is equal to true.
>
> **[2:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=153)** And so if I test my code again, it's going to filter out those two rows where the availability was false.
>
> **[2:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=160)** So now I'm just seeing these three toys.
>
> **[2:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=163)** The other way to do that, like I mentioned, is if we take a look at the stock quantity, and I could say, and it changes to stock quantity, is greater than zero, and if I test my code, it's going to give me the same exact result, because the stock quantity was zero for all the ones that were not available.
>
> **[3:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=183)** So either way, you can get to the same three records here with either of those where clauses.
>
> **[3:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=188)** So that gets to that.
>
> **[3:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=189)** And then finally, we also are just requesting just a couple of different columns too.
>
> **[3:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=196)** I don't need to see all of these columns for this customer.
>
> **[3:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=198)** So instead of all of the columns, we only want to see the product name, the description, and the price columns.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=209)** Put that in, test my code.
>
> **[3:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=211)** Okay, so now we're just getting the three columns that we need.
>
> **[3:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=214)** Product name, description, and the price over there.
>
> **[3:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=217)** And then finally, we need to sort the data.
>
> **[3:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=220)** So the customer wanted to see them in a sequence where the highest price item appears at the top of the list.
>
> **[3:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=227)** And so for that, we need to add in an order by clause.
>
> **[3:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=231)** And the order by clause goes after where.
>
> **[3:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=234)** So we'll say order by, price, and I want them in a reverse numerical sequence.
>
> **[4:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=240)** So I'll have to say, price, DESC for descending.
>
> **[4:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=244)** Let's test my code again.
>
> **[4:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=246)** And that gives me a correct output.
>
> **[4:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=249)** So we have our Junior Science Lab at 29.99 at the top.
>
> **[4:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=254)** Then we have the World Atlas puzzle at 13.99.
>
> **[4:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=257)** And the Magic Tricks Kit at 10.99 is our lowest price item that meets those criteria.
>
> **[4:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-filter-and-sort-data-with-a-query?u=76281980&t=263)** So this select statement is my solution to this challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), finally, (2)
> **CLI Commands:** find (2), make (1)
> **Versions:** 29.99 (1), 13.99 (1), 10.99 (1)
> **Non-Speech:** (instructor typing) (2), (upbeat music) (1)
> **Env Vars:** desc (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Delete records from a table
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=0)** - We've seen how to add records to a table with the insert into statement and the values clause.
>
> **[0:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=6)** Now let's take a look at removing records from a table.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=9)** The first step is to make sure that you can identify the record that you want to remove.
>
> **[0:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=13)** Let's start up a new query and make sure we're targeting the Red30Tech database.
>
> **[0:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=18)** Then I'll just select everything from the customer's table.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=25)** I'll execute the query and we'll see we have a total of 1,002 rows that represent all of our customers.
>
> **[0:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=31)** So let's suppose that I need to remove Eric Bryant's record.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=34)** It's this one on this row right there.
>
> **[0:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=38)** To do this, I could start with a command, DELETE FROM Customers.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=46)** Now, if I run this line number four, right now SQL Server will actually remove all of the data from the table, because I haven't limited the scope of the delete.
>
> **[0:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=55)** You do that with a criteria.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=58)** Just like in a select statement, we specify a filter or a selection criteria with a WHERE clause.
>
> **[1:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=67)** Now we need to think about our criteria carefully.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=70)** If I were to just say delete from customers, where first name equals Eric.
>
> **[1:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=75)** It's going to go through the database, and remove all of the customers, that have the same first name.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=80)** This is probably not what we want.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=83)** Usually you'll leverage the records unique identifier, or primary key for deletions, so that you can ensure, that you only remove the records that you intend to.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=93)** So I'll say delete from customers where customer ID equals 1001.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=102)** Now I can highlight lines four and five and press execute and I get the message that one row was affected.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=109)** If I run lines one and two by highlighting them and pressing execute, you'll see he's no longer present in the database.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=116)** Now let's take a look at another example of deleting rows.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=119)** If you remember, we created a relationship between the customers table and the orders table.
>
> **[2:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=126)** If I open up the orders table in the object explorer, and then take a look inside of the keys folder, you'll see we have a foreign key constraint between the orders table and the customer's table.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=137)** Double click on it and then I'll bring you back up into the foreign key relationships.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=141)** And if I take a look at the columns, or the table and column specification I can see the foreign key relationship between the customer ID field in both of those tables.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=151)** When we created this relationship, we said to enforce the foreign key constraint.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=156)** This made it so that SQL Server would not allow a record to get added, or to exist in the orders table that did not connect to a valid customer.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=166)** Let's press the close button on this and then close this design window to return back to our query.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=171)** Now, I'll take a quick look at the data in the orders table.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=178)** I'll type select star from orders and then I'll highlight both of those lines and execute 'em.
>
> **[3:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=184)** Earlier, we created a single order for customer ID number 1000.
>
> **[3:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=188)** This corresponds to Catherine Reed.
>
> **[3:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=192)** What happens if we were to try and delete Catherine's record from the customer's table but leave her order here as an orphan in the orders table?
>
> **[3:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=202)** Let's change our delete statement online four and five.
>
> **[3:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=205)** We'll delete from customers where customer ID equals 1000.
>
> **[3:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=210)** This time I'll highlight lines four and five, and press execute.
>
> **[3:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=216)** The results show me an error.
>
> **[3:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=218)** It says that the delete statement failed because of a conflict with the foreign key reference constraint.
>
> **[3:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=224)** In order to delete Catherine's record, we would either need to remove that foreign key constraint or delete all of her existing orders first.
>
> **[3:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=233)** Both of those options would take some deliberate effort to do, so it makes it unlikely that her record could be deleted on accident.
>
> **[4:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=241)** This is just one more example of how a foreign key relationship can help protect the integrity of your data when deleting records from the database.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=250)** If there is related information that another table's records rely on, the enforced foreign key constraint will prevent those related details from being lost.
>
> **[4:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/delete-records-from-a-table?u=76281980&t=260)** To remove Catherine's record, or customer ID 1000 from this database, we would first need to delete all of those orders and then we could delete her customer record.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (12), let (6), this, (1)
> **Env Vars:** sql (2), delete (1), where (1)
> **CLI Commands:** make (2)
> **SQL:** delete from (1), where (1)
> **API Endpoints:** delete  (1)
> **Documentation:** specification (1)
> **UI Navigation:** click on (1)
> **Analogies:** just like (1)

#### Update records in a table
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/update-records-in-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/update-records-in-a-table?u=76281980&t=0)** - [Instructor] Records in your data tables will occasionally need to be modified.
>
> **[0:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/update-records-in-a-table?u=76281980&t=4)** To do this with a SQL query you'll use an update statement.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/update-records-in-a-table?u=76281980&t=9)** Let's suppose one of our customers called the company and they want to change their order quantity.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/update-records-in-a-table?u=76281980&t=14)** I'll start a new query and I'll just select everything from the orders table to get started.
>
> **[0:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/update-records-in-a-table?u=76281980&t=20)** When I execute the query, we'll see that we actually only have a single order at this point in our database.
>
> **[0:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/update-records-in-a-table?u=76281980&t=26)** Customer ID 1000 belongs to our friend Catherine Reed again.
>
> **[0:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/update-records-in-a-table?u=76281980&t=31)** She wants to get five of the same product instead of two.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/update-records-in-a-table?u=76281980&t=35)** To modify her order, we'll write a quick update statement.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/update-records-in-a-table?u=76281980&t=40)** We need to target the update to this specific order ID from the table.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/update-records-in-a-table?u=76281980&t=45)** So we'll update the orders table, then we'll set the value.
>
> **[0:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/update-records-in-a-table?u=76281980&t=52)** I want to change the quantity, so I'll target the quantity column, and I'm going to say the quantity is equal to five.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/update-records-in-a-table?u=76281980&t=58)** Now, just like with the delete statement we need to be really careful at this point.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/update-records-in-a-table?u=76281980&t=62)** If our table had lots of orders saved and I executed these two lines, SQL server will very quickly change every order quantity to five.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/update-records-in-a-table?u=76281980&t=72)** That's very clearly not what we want to do.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/update-records-in-a-table?u=76281980&t=74)** So we need to add a where clause to target this update to just the specific order that we want to modify.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/update-records-in-a-table?u=76281980&t=82)** Now I can run these three lines by highlighting them and pressing the Execute button.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/update-records-in-a-table?u=76281980&t=87)** I get the message that one row is affected.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/update-records-in-a-table?u=76281980&t=90)** Now I'll select everything from the orders table again by running just the first line of the query, and I'll see that the quantity has now been updated to five.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/update-records-in-a-table?u=76281980&t=100)** So that's how you modify existing records using the T-SQL update statement.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/update-records-in-a-table?u=76281980&t=106)** Make sure that you're combining the update with a where clause to ensure that you target the changes to just the records that you intend to modify.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/update-records-in-a-table?u=76281980&t=114)** And don't be afraid to run a few select statements first to make sure that you've got the where clause exactly as you need it before executing the update.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3)
> **CLI Commands:** make (2)
> **Code Keywords:** let (1), delete (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Solution: Remove and update records in a table
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=0)** - [Instructor] For this challenge, we are tasked with updating the data in a table about event bookings for a hotel.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=11)** I'm just going to run the SELECT statement here to see everything that's in the EventRegistrations table to get started.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=17)** And that'll show me that I have 20 different events here and I can see the columns for the registration ID, attendee name, the registration date, and their status, as well as the event name and the event date.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=30)** So these are all the different events and the people who are scheduled to attend or have at least express an interest.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=36)** Some of them are attending and some of them are not.
>
> **[0:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=39)** So that is listed in the status column.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=41)** So that is our starting data and we're asked to make some changes to this data table.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=45)** So let's just get started with the first change.
>
> **[0:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=48)** We are told that the Global Marketing Summit event has been canceled and we need to remove all of the records for that event from the database.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=58)** All right, let me go across here and take a look.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=60)** We've got our event name column and here is the Global Marketing Summit.
>
> **[1:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=65)** We have a couple of different people registered for this event, and so we need to get these records out of this database.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=72)** And so we could do that with a DELETE statement.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=74)** So we'll say DELETE FROM EventRegistrations.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=80)** But I don't want to delete everything, so I need a WHERE clause just to make sure that I'm targeting just the rows that I want to actually remove.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=86)** And we want to remove all the rows WHERE the EventName is equal to Global Marketing Summit.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=98)** And we'll finish that with a semicolon at the end.
>
> **[1:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=101)** And if I test my code, it's going to delete the data from the original table and then select the existing state.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=107)** So let me go ahead and run that and I could take a look here.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=110)** So I am down to less number of rows here, but if I look through the event name, we'll see that we don't have the Global Marketing Summit listed here anymore.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=120)** So that takes care of that first step.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=123)** All right, our next one says that the Business Leaders Forum event needs to be postponed by a week.
>
> **[2:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=132)** Let me take a look at that and see if we can find those records here.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=136)** So we have our Business Leaders Forum.
>
> **[2:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=138)** The event date was originally on May 5th, 2024, so we need to postpone that by a week to May 12th, 2024.
>
> **[2:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=147)** So we can do that with an UPDATE statement.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=150)** So we'll say UPDATE the EventRegistrations table.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=155)** And I want to SET a new value.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=158)** So I want to SET the EventDate value equal to the day, 2024-05-12.
>
> **[2:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=169)** But once again, if I were to run this right now, it's going to update every single row to that date, which is not what I want.
>
> **[2:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=175)** I only want to SET it WHERE the EventName is the Business Leaders Forum.
>
> **[3:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=187)** And make sure you finish that with a semicolon.
>
> **[3:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=189)** All right, let's go ahead and test my code again, and that'll update the dates here.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=194)** So our Business Leaders Forum are now all listed on the 12th instead.
>
> **[3:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=197)** So there's one of those there.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=199)** Here's another row, same thing on the 12th.
>
> **[3:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=201)** All right, so those records are now updated.
>
> **[3:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=205)** All right, and next up, the last change that we need to make, we're told that a guest named Omar Hassan has confirmed their attendance to the Tech Innovator's Conference.
>
> **[3:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=214)** Let's take a look at that data here and we'll find Omar's record.
>
> **[3:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=219)** There's one of them.
>
> **[3:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=220)** Now he does have a couple of them, so there's one, but this is for the Digital Transformation Expo, which is not the record that we're interested in.
>
> **[3:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=228)** We do want to go down here and find this one for the Tech Innovators Conference.
>
> **[3:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=234)** So that's the record that we need to change, and we are moving that from interested, the status of interested.
>
> **[4:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=240)** He is now going to be registered and we'll put in a registration date there for that one.
>
> **[4:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=246)** So that is another update that we're going to make.
>
> **[4:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=248)** So we'll say UPDATE EventRegistrations.
>
> **[4:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=254)** We're going to set a couple of values here.
>
> **[4:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=256)** So now we're going to SET the Status equal to Registered, and we're also going to SET the registration date.
>
> **[4:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=264)** And we can do that all at once here.
>
> **[4:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=265)** Just type a comma after that first set.
>
> **[4:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=268)** So we'll SET Status equals Registered, comma, and then also RegistrationDate.
>
> **[4:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=275)** And we'll set that to the day that he registered, 2024-02-05.
>
> **[4:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=282)** Now, once again, we always need a WHERE clause when we're doing these updates and deletes.
>
> **[4:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=287)** So I want to say WHERE the AttendeeName is equal to Omar Hassan.
>
> **[4:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=298)** AND the EventName is equal to the Tech Innovators Conference.
>
> **[5:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=309)** So that one gets a little long.
>
> **[5:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=310)** Let me put this AND statement down a line just so we can see it all there.
>
> **[5:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=313)** And we'll also move that down a line.
>
> **[5:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=317)** Okay, so now we can see everything on the screen.
>
> **[5:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=319)** So we're going to UPDATE EventRegistrations, SET the status to Registered, and the date here for the row WHERE the AttendeeName is Omar, AND the EventName is the Tech Innovators Conference.
>
> **[5:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=331)** We could have also specified the specific registration ID here in the WHERE clause.
>
> **[5:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=335)** So I could have said this registration ID 16 is the row for the Tech Innovators Conference that we're interested in.
>
> **[5:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=342)** That's another way we could have put the WHERE clause in, but either way, it'll still update the same record.
>
> **[5:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=347)** Go ahead and test that code.
>
> **[5:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=349)** We've got our 14 rows that are left after making this delete.
>
> **[5:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=353)** We've updated our event registration date and we've also updated the status for a single guest and moved them from an interested party into an actual full registration.
>
> **[6:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-remove-and-update-records-in-a-table?u=76281980&t=364)** And so these three statements, the DELETE and UPDATE, and a second UPDATE is my solution to this challenge.

> [!info]- Semantic Content
>
> **Env Vars:** where (8), set (7), update (6), delete (3), select (1)
> **SQL:** where (8), update (6), select (1), delete from (1)
> **Code Keywords:** let (7), delete (6)
> **CLI Commands:** make (5), find (3)
> **API Endpoints:** delete  (3)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Joining related tables
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=0)** - [Josh Olenslager] No discussion of SQL SELECT Statements would be complete without talking about how to view information from across multiple tables.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=8)** This involves adding a JOIN to our FROM clauses in the SQL SELECT query.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=14)** To review, I'm going to startup a brand new query here.
>
> **[0:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=16)** I'll just type out three SELECT queries to pull all the information from the customers, orders, and products tables.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=25)** I'll type out all three SELECT statements and then without highlighting any of them I'll just execute all three at once.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=33)** This will show me three different results windows down below.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=36)** So here we have all of the customers, then if I scroll down, I'll see all of our orders in which case we only have the one there, as well as all of the products listed down below.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=46)** Now because these three tables relate to one another, we can follow the thread between the records.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=51)** If I return to this middle one, that represents the orders, we can see CustomerID 1000 that links up here at the very top to Katherine Reid's record.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=60)** And, going back to that table, ProductID BP104 corresponds to the Cat Robot Blueprint product.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=68)** Now, I'd like to see the names of our customers, their order details, and the products that they ordered all in a single row.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=76)** To do this, we can start with a standard SELECT statement.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=80)** This time though, we need to be more specific about what table each column is coming from since we're pulling data from multiple tables.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=87)** Because this is going to get pretty long, I'll list each column in the SELECT statement on its own line.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=93)** So the first column I want to see comes from the Customers table.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=97)** Then, it's going to be the FirstName column.
>
> **[1:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=101)** Type a comma, and come down to line number six.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=104)** Next up, I want to see the LastName column from the Customers table.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=109)** Next, let's grab the order date from the Orders table.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=114)** We'll follow that up with the Quantity that's stored in the Orders table.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=118)** Next, I want the Name and the Retail Price columns from the Products table.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=124)** That's lists out all of the columns.
>
> **[2:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=126)** I'll come down to line number eleven, and I'll put in our FROM clause.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=130)** We'll start pulling information from the Customers table.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=134)** Now, we need to connect the Customers table to the Orders table.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=137)** and we do that with a JOIN.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=140)** There's a couple of different JOIN types that we can use.
>
> **[2:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=143)** The most common is an INNER JOIN.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=146)** This type of JOIN will return data from records that have matching values in both tables.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=152)** So, we'll INNER JOIN the records from the Customers table to the Orders table.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=158)** Then, we need to say how these two tables are linked.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=161)** We use the ON keyword for this.
>
> **[2:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=164)** I'll specify that they're linked by the field, CustomerID, in both tables.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=171)** Now, this is getting a little bit long so let me rearrange my screen a little bit.
>
> **[2:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=175)** I'm going to shrink this results window down a bit.
>
> **[2:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=177)** I'm going to scroll down on my script, and I'm going to bring the ON clause back towards the beginning, so we can see everything on the single screen.
>
> **[3:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=184)** So we're going to JOIN all of these columns from the Customers table INNER JOINING the Orders table on the CustomerID field in both of those tables.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=194)** Now, we need to link in the Products table.
>
> **[3:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=197)** For that, we'll need another INNER JOIN.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=199)** And finally, we need to specify how the records are related between the Orders table and the Products table.
>
> **[3:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=208)** The field ProductID in both tables provides the related data.
>
> **[3:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=212)** Let's go ahead and finish the statement with the closing, or the terminating character that semicolon.
>
> **[3:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=216)** I'll put that down on line 15.
>
> **[3:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=220)** I'll point out that its convenient when the column names that store the related data in each table are named the same.
>
> **[3:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=226)** This isn't a requirement though.
>
> **[3:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=229)** As long as the data that they contain matches up, the columns can be named differently in each of our tables.
>
> **[3:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=235)** So, now let's highlight lines five down to fifteen, and execute this statement.
>
> **[4:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=241)** The results show us just a single order that we have for Katherine, but it's been expanded to show the related details including the name of the product as well as her name and the price.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=253)** The results are pulling information from across all three of our data tables and expand on the information linked by the Foreign Key relationships.
>
> **[4:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/joining-related-tables?u=76281980&t=261)** So, by using an INNER JOIN, we were able to have SEQUEL server return related details about our customer, so that we can review all of the information in a single row.

> [!info]- Semantic Content
>
> **Env Vars:** join (9), select (6), inner (5), sql (2), bp104 (1)
> **SQL:** select (6), join (5), inner join (4)
> **Code Keywords:** let (4), this, (1), this. (1), finally, (1)
> **UI Navigation:** scroll down (2)
> **CLI Commands:** cat (1)
> **Definitions:** is an  (1)
> **Speakers:** - [josh (1)

#### Solution: Query information from related tables
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=0)** - [Instructor] In this challenge, we need to combine records from multiple tables for a regional library, and the goal is to get a reverse chronological list of borrowing history, and show every member, even the ones that haven't yet borrowed any books.
>
> **[0:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=20)** I'm going to start just by taking a look at the three tables that were given.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=22)** We have one called members, and I'll just select everything out of that table.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=27)** That gives me the member ID.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=28)** This is the primary key for the table, and we get the member's name and their email address.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=34)** Let's take a look at the books table.
>
> **[0:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=37)** Now, this one also has a primary key column here for the book ID, and we have the name of the book as well as the author of the book.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=45)** And then we can get the borrowing history from the loans table.
>
> **[0:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=49)** This one has a primary key for the loan ID, and then we have two foreign key columns that relate back to the books table here and the member's table with this column, and we'll finally have the loan date, so this is the date that this member ordered this book.
>
> **[1:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=65)** And so those are the three tables that we have to work from to pull our information from to see all the loan history for the library.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=72)** So I'm just going to start selecting everything from the members table.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=76)** And I'm going to pull out some specific columns.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=79)** And because eventually we're going to be pulling information from three different tables, I want to be specific about where each of these columns is coming from, so I'll prepend the name of the table here.
>
> **[1:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=89)** So from the members table, I want see members.member ID, and I want to see members.name.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=100)** I'll just start with that.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=102)** All right, so there is the first two columns coming out of the members table.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=106)** From the diagram, we saw that the members table is joined directly to the loans table, so I'm going to start by putting in the join statement.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=114)** I can say from members join loans.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=119)** And we'll specify how those two tables are related, so which columns are related on.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=123)** And they're related on the member ID column in both tables.
>
> **[2:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=127)** So on members.memberid is equal to loans.memberid.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=136)** And so now we have those in the from statement, we can pull out those columns up here in the select statement.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=141)** So from the loans table, I wanted to see the loan date.
>
> **[2:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=146)** Let me test this code now.
>
> **[2:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=148)** So that adds in the column for the loan date.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=150)** So I could see we have, John Doe has checked out two books.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=155)** We have the loan dates for those, and we have these other customers that have pulled out books as well.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=161)** Now the problem with the way I have this set up though is that we're only seeing members that have actually been loaned a book, because this join defaults to an inner join.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=171)** And so what I really need to do here is instead of a join or an inner join, I want to say left join instead.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=178)** And that's going to do is you're going to show me all of the people from the left table, which is that members table.
>
> **[3:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=184)** And then for the members that have books loaned out, we'll see that related information from the other table.
>
> **[3:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=191)** So this time when I test my code, you'll see we get an additional person here, David Kim, at the very bottom, who has not checked out any books, so they have a loan date of null here, but that is important for the challenge that we were given.
>
> **[3:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=205)** We want to see all of our members regardless of whether they've been loaned a book or not, and then for the ones that have been loaned a book, we want to get those additional details.
>
> **[3:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=214)** So the trick here is that we need a left join, and not a standard join or an inner join.
>
> **[3:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=221)** Okay, so now once we solve that, we just need to continue on and add in our additional table.
>
> **[3:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=227)** So we're going to take members left join loans on, and then the way those two are joined.
>
> **[3:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=234)** And then we'll just say another left join, and we'll left join it to books.
>
> **[3:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=239)** And once again, we'll specify how those first two are joined to the books table, and they're joined based off of the book ID column.
>
> **[4:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=247)** So on loans.bookid is equal to books.bookid.
>
> **[4:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=256)** All right.
>
> **[4:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=257)** And now that that is in, we can come back up here to the select statement and grab some columns from that books table.
>
> **[4:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=262)** And we're asked for the book's title and the book's author.
>
> **[4:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=272)** All right, let me go ahead and test my code.
>
> **[4:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=274)** Okay, so I have the title and I have the author listed here, so that is all correct.
>
> **[4:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=279)** It is telling me that I have an incorrect output here, and that's because the last portion of the challenge is that we needed to sort build loans so that they're in a descending sequence or reverse chronological sequence.
>
> **[4:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=290)** So I'm going to come here at the very end, move that semicolon down, and we'll add in an order by clause at the very end.
>
> **[4:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=297)** So we'll say order by loans.loandate descending.
>
> **[5:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=305)** All right, let's test the code again.
>
> **[5:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=307)** And resorted them, okay.
>
> **[5:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=309)** So now we got a correct output, so we can see them in a reverse chronological order by the loan date here, and it ends with David Kim's record at the bottom, who has not checked out any books at all, so they get null all the way across because we're doing left joins to the loans table, and another left join to the books table.
>
> **[5:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/solution-query-information-from-related-tables?u=76281980&t=329)** And so this select statement is my solution to this challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), from, (1), continue (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Remove a table from the database
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=0)** - If you need to remove large number of records from your database, you have two different options.
>
> **[0:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=5)** I currently have the script that we started earlier in the chapter that built the Red30Tech ProductCategories Table.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=11)** Right now we have the create table statement that builds the table structure here at the top, and then we insert a number of records into that table.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=19)** Let's take a quick peek at what the table currently looks like by coming down to the end and executing select * from ProductCategories.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=29)** I'll highlight line number 17 and press execute to see those results.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=35)** So the table currently contains seven rows of data.
>
> **[0:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=38)** At the top of my script, I'm going to move everything down a little bit by a pressing enter a couple of times, and then moving back up to line number one.
>
> **[0:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=48)** Here, I'll add a line that'll quickly remove every record from the table.
>
> **[0:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=54)** This uses the truncate table command, and the table we want to truncate is ProductCategories.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=63)** Make sure that you're targeting the Red30Tech database.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=66)** Then highlight line number one and press execute.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=70)** That tells me that the command was completed successfully, and if I scroll back down on my script and highlight the select statement here at the bottom and execute that, you'll see that our table no longer contains any data.
>
> **[1:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=82)** It's essentially been wiped clean, leaving only the column structure in place.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=87)** If I wanted to remove the table from the database altogether, I'll scroll back up here to the top and change this from truncate table to drop table.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=97)** The drop table command is used to immediately remove a table from your database.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=102)** I'll highlight line number one and press execute.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=105)** Again, it tells me that the commands completed successfully, but now if I try and run the select statement to select everything from that table, you'll see that we get an error.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=114)** There's no longer an object name "ProductCategories" in our database.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=119)** In fact, if we come over here to the Object Explorer and right click the tables and choose refresh, you'll see it gets removed from the list here as well.
>
> **[2:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=128)** So truncate table removes just data.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=131)** Drop Table removes the entire table.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=134)** If I come back up here to the top and try and run that Drop Table command again, I'll get an error this time saying it can't drop a table that doesn't exist.
>
> **[2:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=143)** This could cause problems if you're trying to include a drop table statement in a script and you're not sure if the table is present in the database or not.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=151)** So we can add the "if exists" keyword to the end of our drop table statement.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=159)** This way it'll drop the table if it exists, and it won't generate an error if there is no table to drop.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=165)** If I highlight line one again and press execute this time, it tells me it was completed successfully even though there was actually no work to be done in the database.
>
> **[2:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=174)** So now if we look over the entire script and I were to execute it all at once, it'll drop a table if it exists called ProductCategories.
>
> **[3:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=182)** It'll then create the table ProductCategories.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=185)** Then it'll insert all of these records, and finally it'll select everything out of the table that it just built.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=193)** Before I run the entire thing, I want to make two small changes just to make sure that the script runs as intended.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=199)** I'll go back up to the very top and add some more space.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=204)** Here, I want to make sure that this script only runs in the Red30Tech database.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=209)** I don't want it to accidentally execute against the master database or Wide World Importers.
>
> **[3:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=214)** So I'll add the line, "use Red30Tech".
>
> **[3:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=219)** Then I'll issue the command, "go".
>
> **[3:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=223)** Finally, above that, I want to add in a comment.
>
> **[3:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=226)** We'll start with two hyphens and then I'll type out, "This script creates a fresh copy of the Red30Tech ProductCategories Table."
>
> **[3:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=237)** If you want the comment to wrap onto multiple lines, just make sure you add two hyphens to the beginning of each line in your comment.
>
> **[4:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=244)** With those changes in place, I'll execute the entire script without highlighting any portion of it.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=250)** SQL Server will execute all of these commands one after another, and we get the results below when it completes.
>
> **[4:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=257)** If I refresh the contents of the table's folder over here in the Object Explorer, you'll see that we have our ProductCategories Table has been built again.
>
> **[4:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=266)** I'll go ahead and save this script in the exercise files as "Delete Table Complete.sql".
>
> **[4:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=272)** Now, hopefully this illustrates the power of writing T SQL Scripts, instead of relying on the user interface here in Management Studio to perform tasks in your SQL Server databases.
>
> **[4:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=283)** By having a script file saved, I can instantly run through any process on the server and consistently recreate the exact same steps anytime that I need to.
>
> **[4:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/remove-a-table-from-the-database?u=76281980&t=294)** As you gain familiarity with the transact SQL language, you'll be able to write more complex scripts that manipulate your data and return information in a fraction of the time that it would take using the GUI.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Env Vars:** sql (4), gui (1)
> **Code Keywords:** let (1), finally, (1), delete (1), interface (1)
> **File Paths:** complete.sql (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - if (1)


### 6. Writing Efficient Queries

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Create a view of the data
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=0)** - [Instructor] Any time you pull information out of a SQL Server table, you're using a SELECT statement that queries a list of tables and columns, and processes the data according to your requirements.
>
> **[0:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=12)** SELECT statements can get pretty complex, especially when multiple table joins and filtering criteria are in play.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=19)** You can save the syntax of a SELECT statement for future use by creating a view object.
>
> **[0:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=26)** To create a view of the data stored in the Red30Tech database, find the Views table in the Object Explorer.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=33)** Then right click on it, and then click New View.
>
> **[0:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=37)** That brings up this Add Table window.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=40)** I'm going to create a new view that combines data from across all four of our tables in the database.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=46)** You can either click either one individually and press the Add button at the bottom or highlight the first one, Shift + click the last one to highlight all four, and then press Add.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=57)** When you do that, you'll see representations for all four of those tables appear behind.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=62)** Once that's done, you can go ahead and close the Add Tables window.
>
> **[1:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=65)** Now we can focus on the View Design window.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=68)** This designer is split into four different areas.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=71)** We have the diagram pane here at the top, the criteria pane here, the SQL pane, and finally, a results pane at the very bottom.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=81)** Up on the toolbar, we have four different buttons that'll toggle each one of these sections on or off.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=86)** So here's the button for the diagram pane, the criteria pane, the SQL pane, and the results pane.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=93)** I want to focus on just the diagram pane and the SQL pane.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=96)** So I'll go ahead and turn the other two off temporarily.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=100)** In the diagram pane here at the top, we're visualizing the FROM clause of a standard SELECT statement.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=107)** Then in the SQL pane below, you can see the syntax that's generated based on what we have going on up above.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=114)** I'm going to rearrange these tables a little bit so we can see all of the fields in each of the tables.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=119)** So here is the Customers table.
>
> **[2:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=121)** That's linked to the Orders table with all of its fields.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=124)** Then we have the Products table that's linked to the orders.
>
> **[2:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=127)** We can go ahead and make this a little bigger.
>
> **[2:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=128)** And then finally, over here on the far right, I'll put the ProductCategories table, which we actually didn't link to the Products table yet.
>
> **[2:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=135)** But that's okay, we'll take care of that in just a moment.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=137)** So you can see that the first three tables are all connected by this join line between them.
>
> **[2:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=143)** This line represents our foreign key relationship, specifically the primary key column in the Customers table, the CustomerID field there is linked to the CustomerID column, which is the foreign key in the Orders table.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=157)** Similarly, we have the primary key in the Products table called ProductID.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=161)** And that's linked to the foreign key in the Orders table right there.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=168)** The icons here give you more information about each of these relationships.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=173)** On one side is the primary key icon that we've seen before and on the other side is an infinity symbol.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=180)** This tells us that each of these relationships is a one-to-many relationship.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=185)** That means that every customer can have one, none or a large number of orders in the Orders table.
>
> **[3:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=192)** Likewise, each product can be found on no, one or many different orders.
>
> **[3:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=200)** Now, we never created a formal foreign key relationship between the Products table and the ProductCategories table.
>
> **[3:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=206)** And that's why there's no connecting line here.
>
> **[3:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=210)** But I do know that there is a data link between these two.
>
> **[3:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=214)** We can temporarily create a join between these two tables by finding the fields that hold the related information and dragging and dropping one on top of the other.
>
> **[3:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=224)** In our case, it's the Category field in the Products table.
>
> **[3:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=228)** I'll just click and drag and drop it on top of the CategoryName field in the ProductCategories table.
>
> **[3:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=234)** That'll create our temporary join here.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=237)** You also might have noticed that it added an additional line into our FROM clause where it's specifying that we're joining tables based off of those two fields.
>
> **[4:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=246)** Now we can add columns from these four tables into the SELECT statement.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=250)** You'll see that it currently selects nothing right down here in the SQL pane.
>
> **[4:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=254)** In order to do this, we simply place checks in the boxes to the left of each field that we want in our query.
>
> **[4:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=261)** I'll go through it and make a bunch of selections here.
>
> **[4:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=263)** I'll choose the FirstName, LastName, Address, City and State from the customers table.
>
> **[4:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=268)** The OrderDate and the ProductID and quantity from the Orders table.
>
> **[4:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=274)** Then I want the name of the product, the RetailPrice, as well as the category from the Products table, and finally, I want the CategoryID and the CategoryAbbreviation from the ProductCategories table.
>
> **[4:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=287)** You can see those all get added down here into the SELECT statement.
>
> **[4:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=291)** Now I'll come back up here to the toolbar and I'm going to turn off the diagram pane and turn on the show criteria pane.
>
> **[4:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=299)** Now we can see an alternate view of all of the columns that I just selected.
>
> **[5:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=302)** This gives us the option of adding an alias to each of the columns in the final results.
>
> **[5:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=309)** An alias is simply an alternative name that'll show up in the column header.
>
> **[5:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=313)** Here I can specify FirstName with a space between the words.
>
> **[5:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=318)** I'll do the same thing for LastName.
>
> **[5:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=322)** By adding spaces here, it makes it a little bit more legible in the final results.
>
> **[5:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=326)** We'll do the same thing for all of our compound words.
>
> **[5:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=329)** So Order Date with a space.
>
> **[5:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=332)** Product ID.
>
> **[5:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=335)** The Category ID.
>
> **[5:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=339)** And finally, Category Abbreviation.
>
> **[5:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=345)** After making all of those changes, you'll see the SELECT statement has updated to include the AS keyword, followed by each of the aliases for the different columns.
>
> **[5:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=355)** Now, there's some additional options that we have in this upper portion to control the query results.
>
> **[6:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=360)** If I add a sort type of ascending to the last name, and then click off of it, you'll see that we get an ORDER BY clause added down to the query.
>
> **[6:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=370)** And finally, at the very end, we have a number of columns that we can use to supply filtering criteria in the filter and Or rows if we want to build that into the query as well.
>
> **[6:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=381)** So when you're done building out your SELECT query, you can press the Execute button up on the toolbar.
>
> **[6:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=386)** It's this button here for our window that we have right now and it's Control + R on your keyboard.
>
> **[6:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=392)** That'll execute it and open up the result panel down here at the very bottom.
>
> **[6:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=396)** So you can see the results are pulling information out of all four of our tables and displaying it in a single row.
>
> **[6:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=402)** So now let's go ahead and save our view.
>
> **[6:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=405)** You can either press the disk icon on the toolbar or press Control + S on your keyboard.
>
> **[6:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=410)** I'll name this view OrderDetails.
>
> **[6:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=415)** I get this warning about using the ORDER BY clause in our view, and that's okay.
>
> **[7:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=420)** Just go ahead and press the OK button to dismiss the window and our view is now saved.
>
> **[7:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=424)** I'll close the tab.
>
> **[7:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=425)** Now we can take a look in the Object Explorer and expand the Views folder and there's the new view that we just created.
>
> **[7:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=434)** So now that we have one, what can we do with a view?
>
> **[7:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=437)** Views in SQL server are treated just like read-only tables, only they don't store any data, they simply refer to the original columns in data from the original data tables.
>
> **[7:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=447)** The benefit to using them is that they save you the hard work of using joins and other complex SELECT query syntax when you need to review common arrangements of your data.
>
> **[7:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=458)** For instance, I can come up and start a brand new query.
>
> **[7:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=461)** Then I'll type SELECT *.
>
> **[7:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=465)** Now instead of specifying specific columns and tables, I can just pull the data from the view.
>
> **[7:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=471)** I'll say SELECT * FROM OrderDetails.
>
> **[7:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=477)** When I execute the query, the view gathers all of the information from the original four data tables and presents it as if I had just queried those four tables.
>
> **[8:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=488)** This gives me all of the columns from the four different data tables, all properly joined together without me having to write out the full SELECT statements that I would need if I were referring to the tables directly.
>
> **[8:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-view-of-the-data?u=76281980&t=500)** So as you build out your database and create a number of related tables, remember to create views that piece information together from those related tables in the arrangements that you want to see regularly.

> [!info]- Semantic Content
>
> **Env Vars:** select (12), sql (7), order (2)
> **SQL:** select (12), order by (2)
> **Code Keywords:** finally, (5), case, (1), this, (1), let (1)
> **Definitions:** is a  (2), is an  (1), means that (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** click on (1), toggle (1)
> **Analogies:** just like (1), for instance (1)
> **Best Practices:** remember to (1)

#### Data table indexes
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=0)** - SQL Server depends on indexes in order to locate specific records at a table as quickly as possible.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=7)** Without an index, SQL server needs to perform something called a table scan when trying to locate specific records.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=15)** With this method, SQL Server simply starts at the top of the table and reads down until the appropriate data is found or the bottom of the table is reached.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=25)** A table scan is how SQL Server approaches a table that doesn't include any indexing assistance or what's known as a 'heap'.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=33)** A heap is simply a table that lacks an index and must be scanned completely to find a specific row.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=41)** If an index is available, all of the records within the table are kept in a predictable sorted order.
>
> **[0:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=48)** When a record is requested from the table a table seek is performed on something called the B Tree or a Balanced Tree Structure.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=57)** In a B Tree structured index, the root level branches out into one or more intermediate levels and then finally ends at the leaf level.
>
> **[1:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=67)** The leaf represents the individual areas on disc where the records are stored and each leaf can hold one or more data rows from the table depending on how large each row is.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=80)** We can see how this works if I put some numbers into each node of the tree.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=84)** Let's suppose that we're storing the records one through 1000.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=88)** The intermediate nodes point to 500 records each and each leaf at the bottom store 250 records.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=96)** The B Tree structure allows SQL Server to quickly locate a requested record by effectively eliminating half of the records at every intermediate level of the tree.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=106)** Let's suppose that we're trying to find record number 370.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=111)** By traversing the tree we can immediately ignore the right hand branches as we know they're going to be too high.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=118)** Then after moving to the left intermediate node we branch again moving right, and we can quickly locate record 370 in the second leaf.
>
> **[2:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=128)** In only two steps we eliminated 75% of the leaves as not holding the records that we were looking for.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=136)** Indexes are created with a Create Index Transact SQL Statement, or are automatically generated when a primary key is defined on the table.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=145)** In fact, establishing a primary key for your table creates a clustered index, and it defines how the table is physically ordered on disc.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=155)** Each table can have only one clustered index.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=158)** Secondary indexes can be added to any other column that you would want to search regularly.
>
> **[2:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=164)** For instance, in our Red 30 Tech customers table we might find that searching through the records by a customer's last name is a common task.
>
> **[2:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=172)** Adding an index on the last name column might be a good idea to help speed up those searches.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=178)** These secondary indexes are called non-clustered indexes and they simply point back to the clustered index.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=186)** The tendency for new database developers is to try and add indexes onto as many fields as they can.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=193)** It's important to keep in mind that there's a maintenance cost involved with keeping indexes up to date, as each one has to be revised every time there's an update to the main table.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=204)** So when you add a record to a table, the index needs to be updated.
>
> **[3:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=208)** When you edit or delete a record, the index also needs to be updated.
>
> **[3:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=213)** In general, indexing tables makes retrieving data from a table faster, but writing and editing data becomes slower.
>
> **[3:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/data-table-indexes?u=76281980&t=221)** It's up to you, the SQL Server professional to determine what the optimal amount of indexing is for your database.

> [!info]- Semantic Content
>
> **Env Vars:** sql (7)
> **CLI Commands:** find (3), node (2)
> **Code Keywords:** let (2), for. (1), delete (1)
> **Definitions:** known as (1), is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - sql (1)

#### Create additional indexes on a table
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=0)** - [Instructor] We've previously seen how to add additional indexes to a table when I demonstrated the unique constraint.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=7)** As a reminder, you can open up the table in the graphical designer by right clicking on any of the tables and choosing design.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=15)** You would then right click on the column fields and choosing indexes from the popup menu.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=21)** This will give you everything that you need to add new non-clustered indexes to your tables that will speed up the queries on those indexed columns.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=29)** So instead of demonstrating this workflow again, let's go ahead and add an index to our database using T-SQL commands instead.
>
> **[0:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=37)** I'm going to close this window, and then close the design window.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=40)** Then I'll open up a new query editor.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=45)** Now I've determined that we regularly need to search for customers by their last name.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=50)** In order to speed up those searches, I want to add a non-clustered index on that column of data.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=57)** To do that, I'll use the command CREATE NONCLUSTERED INDEX.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=63)** Now we need to name the index.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=66)** A traditional name would be IX to indicate a standard index, then the table name Customers, followed by the field that we're indexing, in this case, the LastName field.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=83)** Next, we need to specify the table the index is being added to, so I'll say ON dbo.Customers.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=93)** Finally, in parentheses, we specify the column and the sorting order to maintain the index in.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=99)** This will be the LastName column.
>
> **[1:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=103)** And I want to store the data ascending, so ASC is the abbreviation for that.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=109)** And that finishes our statement.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=110)** I'll add the closing parenthesis and the terminating character, the semicolon there at the end.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=115)** And all I need to do is press execute.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=118)** That gives me the message that the command was completed successfully.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=124)** So now I have an index that'll keep an alphabetized list of our customers' last names.
>
> **[2:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=128)** And this list will be maintained alongside the data in the main table.
>
> **[2:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=133)** So as new customers are added the index will be updated to include any new names.
>
> **[2:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=139)** You can now find the index by going into the customer's folder.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=142)** We'll expand it open and then expand the index's folder.
>
> **[2:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=147)** There is the index right there, but if you're not seeing yours, you can right click on the index folder and choose refresh from the popup, and you should see it appear then.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=155)** So here's the new nonclustered index on the LastName data.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=159)** This index is in addition to the primary key index that already exists on the customer ID column.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-additional-indexes-on-a-table?u=76281980&t=165)** So now our queries will perform better when searching for customers on either of those data values.

> [!info]- Semantic Content
>
> **Env Vars:** sql (1), create (1), nonclustered (1), index (1), asc (1)
> **Code Keywords:** let (1), case, (1), finally, (1)
> **UI Navigation:** click on (2)
> **CLI Commands:** find (1)
> **SQL:** index (1)
> **Speakers:** - [instructor] (1)

#### Aggregate functions
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=0)** - [Instructor] Functions are little programmatic routines that usually take in some input data, then it processes that data and then it outputs a value.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=9)** We can use them in our SQL SELECT queries to process data and return useful information.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=15)** Previously, we saw the GetDate function, which didn't actually require any inputs but when you call it, it simply returns the current system date and time.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=25)** More useful functions can be applied to the data that's stored in your tables and a group of functions, called aggregate functions, can provide you with some very useful statistics about the data that your tables contain.
>
> **[0:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=39)** I have a number of these queries written out that I'd like to run through on the WideWorldImporters database.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=44)** You can find them in the Aggregate_Functions.sql file from the exercise files.
>
> **[0:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=49)** Let's go ahead and start at the top and make sure we're targeting the WideWorldImporters database.
>
> **[0:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=54)** You can either run line number one by itself by highlighting it and pressing Execute, or you can simply make that change over here at the dropdown menu.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=62)** Now that we're targeting the correct database, let's take a look at the Application.StateProvinces table.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=68)** I'm not going to modify any of the data in it.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=70)** We'll just select all of the columns from it so we can see what we're starting with.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=73)** This query returns 53 rows and we can see that number down here in the bottom right-hand corner.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=79)** This includes one record for each of the 50 US states, as well as the District of Columbia, Puerto Rico and the US Virgin Islands.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=88)** Each of these locations have been assigned to a sales territory.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=92)** You can see that column there.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=93)** And if I scroll over to the far right, we also have a LatestRecordedPopulation.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=98)** So there's a couple of columns here that we can play with to explore how our aggregate functions work.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=104)** Okay, let me scroll back here to the left of the results, and we'll start taking a look at our functions up here, starting on line number seven.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=111)** Now, the first function I want to look at is the counting function.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=115)** This will return the number of rows from our table.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=118)** All I need to do is apply it to the asterisk in the SELECT statement.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=122)** Let me highlight lines eight and nine and execute that, and you'll see these results, and it shows me that that table contains a total of 53 rows.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=131)** You can also see that I get an ambiguous column name here.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=134)** It simply says no column name because we didn't provide one for our new counted data.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=140)** Because an unnamed column isn't very descriptive, we can use the AS keyword in our query to give it a name.
>
> **[2:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=147)** I'll run the same function, the counting function here applied to everything, but this time I'll return it as a column named CountOfStates.
>
> **[2:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=154)** Let me highlight lines 11 and 12 and execute those and you'll see the same results but we get a better column header name here at the top.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=162)** Now, the counting function can be combined with a WHERE clause to get other information from the database, rather than just counting up all of the rows that the table contains.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=171)** On line 16, I add a WHERE clause where we're saying where the SalesTerritory is equal to Southwest.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=178)** This will filter out all of the rows to only the states in the Southwest territory.
>
> **[3:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=183)** Then we're going to count those up.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=185)** Let me highlight these three lines and execute it, and you can see I have four states in the Southwest sales territory.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=194)** If I scroll down a little bit further, I'll see another instance where we have a WHERE clause.
>
> **[3:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=198)** This time I want to know where all the recorded population is greater than five million.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=204)** When I highlight this, we can get a count of those states and there's a total of 23 states that have a population over five million.
>
> **[3:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=212)** So you can see the counting function is able to give us some information about the states in our table.
>
> **[3:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=218)** Another thing that we can do with aggregate functions is to start to get summary information across records that share common attributes.
>
> **[3:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=225)** Let me scroll down here and we'll take another look at the raw data without applying any functions to it.
>
> **[3:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=231)** I'll simply select the SalesTerritory and the StateProvinceName columns out of the table.
>
> **[3:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=238)** So here's our two columns.
>
> **[4:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=240)** We can see that there's a number of states in each territory.
>
> **[4:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=244)** One of the things you might want to know is well, how many states are in each territory?
>
> **[4:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=250)** We can use the counting function to find that out.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=253)** Here on line number 28, we're going to count up the StateProvinceNames again.
>
> **[4:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=258)** However, this time, we're going to add a line that says GROUP BY SalesTerritory.
>
> **[4:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=263)** This will take all of the rows that have the same SalesTerritory name and combine them together.
>
> **[4:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=269)** Then the counting function will give us a count of how many states are in each of the groups.
>
> **[4:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=276)** Let me run these four lines and press Execute and here is a list of our sales territories and the number of states that are in each of the territories.
>
> **[4:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=284)** Now, in addition to counting functions, there's some additional functions that'll find the maximum, minimum, and average value from a column.
>
> **[4:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=294)** However, you need to apply these to specific columns from the data table.
>
> **[4:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=298)** You can't just say MAX * like you can with the counting function.
>
> **[5:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=302)** If I were to run these two lines, 35 and 36, you'll see that we get an error.
>
> **[5:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=307)** So MAX needs to be run against a specific column.
>
> **[5:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=311)** You can use the MAX function against the population.
>
> **[5:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=314)** You can also use the minimum function to find the lowest population within the table.
>
> **[5:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=319)** And you can use the average function to get the average population within the table.
>
> **[5:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=324)** In fact, you can run all three at the same time as three different columns from the same results.
>
> **[5:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=330)** Let me highlight lines 38 through 41 and execute.
>
> **[5:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=333)** And here I can get some statistical information about my dataset.
>
> **[5:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=338)** The maximum is about 41 million.
>
> **[5:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=340)** The minimum found in any of our states is 104,000.
>
> **[5:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=344)** And the average population across the dataset comes in at around six million.
>
> **[5:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=349)** Now, at this point, it might be nice to know which state has the maximum or the minimum population.
>
> **[5:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=354)** To do that, we can turn to something called a subquery.
>
> **[5:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=357)** Let me scroll down to line number 44.
>
> **[6:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=361)** Here we're using the same MAX function to find the highest population in the dataset.
>
> **[6:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=367)** Then we're using that in a WHERE clause.
>
> **[6:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=369)** I want to return the StateProvinceName and the LatestRecordedPopulation from the states where the population is equal to the highest population found in the table.
>
> **[6:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=380)** Let me run lines 45 through 49.
>
> **[6:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=383)** And we can see that the state of California is the state that has the highest population.
>
> **[6:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=389)** We can use the same technique to find all of the states that have a population that's above average.
>
> **[6:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=395)** This time, on line 54, we're using the average function against the population.
>
> **[6:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=399)** And we're finding all of the states where the LatestRecordedPopulation is greater than that average.
>
> **[6:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=406)** Let's run 51 down to 55 and press Execute.
>
> **[6:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=410)** And here's a total of 17 states that all have a population above average.
>
> **[6:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=415)** So that's a number of ways that we can apply the MAX, MIN, average and COUNT functions to retrieve some useful summary data from the database.
>
> **[7:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/aggregate-functions?u=76281980&t=424)** I encourage you to play around with these functions on your own data until you feel comfortable using them as they're very handy to have in your SQL Server toolbox.

> [!info]- Semantic Content
>
> **Code Keywords:** function (15), let (12), require (1), this, (1)
> **Env Vars:** max (5), where (4), sql (2), select (2), group (1)
> **CLI Commands:** find (6), make (2)
> **SQL:** where (4), select (2), group by (1)
> **UI Navigation:** scroll down (3), dropdown (1), select the (1)
> **File Paths:** aggregate_functions.sql (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### Use built-in functions
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=0)** - [Instructor] All of the functions that SQL Server ships with can be found inside of your database.
>
> **[0:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=5)** For instance, let's take a look in the Red30Tech database and first all collapse the tables folder.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=11)** Then come down to programmability.
>
> **[0:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=13)** Inside of there, you'll find a functions folder there, and then we can expand these system functions.
>
> **[0:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=20)** This reveals a number of different categories.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=23)** If you've ever used Excel, these are comparable to the formula books that organize all of the functions in that program.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=30)** Expanding each of these folders, for instance, the aggregate functions will show you all the different functions that are available within SQL Server.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=40)** When you hover your mouse over a function, for instance, I'll hover over the count function, it gives you a brief description about what it does.
>
> **[0:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=48)** And if you expand each of these functions, and then expand the parameters folder, you'll see a list of what you need to supply for the function to work and what the function will return.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=58)** In this case, we need to give the count function any kind of expression.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=62)** It doesn't matter if it's a date or a text field, or a numeric field, and it'll always return an integer.
>
> **[1:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=69)** So you can see that there's lots of different aggregate functions beyond the count, min, max, and average functions that we've previously looked at.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=76)** If you're doing scientific or statistical work, then the standard deviation and variance functions, that you'll find down here at the bottom, might be something that you'll apply to your data.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=86)** Or if you're dealing with financial data, perhaps summing revenue values will give you some interesting insights into your business.
>
> **[1:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=95)** As you dig through these folders, you'll see that there's dozens and dozens of functions to choose from.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=99)** And determining which ones would be useful to you is highly dependent on the types of data that you're working with and the kinds of analyses that you need to perform.
>
> **[1:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=108)** Since most functions work in the same way, let me show you with just a couple that can be found inside of the string functions category.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=115)** Let me go ahead and open up that folder there.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=118)** The first one that I want to look at is called Upper.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=120)** Let me scroll down to it and hover my mouse over it.
>
> **[2:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=124)** You'll see that this function returns character expression with lowercase characters converted into uppercase.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=130)** If I expand its parameters folder, you'll see that we need to supply an expression in the varchar or nvarchar data format, and it'll output a varchar or nvarchar.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=142)** In order to use this function, we'll come up and create a new query and make sure we're targeting the Red30Tech database.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=149)** Then I'm just going to pull some data out of our table.
>
> **[2:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=154)** I'll select the raw data out of the first name and last name columns, and I'm not going to process it through any functions.
>
> **[2:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=160)** I'll press execute, and here is the data exactly as it appears in our database.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=165)** Now, if I wanted to format this data in all upper case characters, either for a mailing list or for some other use, then I can simply wrap the column names in a function called upper.
>
> **[2:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=175)** I'll click here at the beginning of the first name field and I'll type in the function name upper and open a parenthesis.
>
> **[3:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=182)** Then I'll close the parenthesis at the end of the name.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=185)** This will apply the upper function to the first name data.
>
> **[3:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=189)** We'll do the same thing for the last name field.
>
> **[3:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=192)** We'll modify the last name data through the upper function.
>
> **[3:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=196)** Now, when I execute the query, you'll see that all of my names are returned in upper case letters.
>
> **[3:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=201)** Now, some functions require multiple input parameters.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=204)** For instance, a function called left.
>
> **[3:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=206)** Let me go ahead and find that in the sidebar on the left.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=209)** Let me scroll up here and expand it there.
>
> **[3:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=211)** The left function returns the left most specified number of characters from an expression.
>
> **[3:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=216)** If I expand the parameters folder, you'll see that we need to supply two different elements.
>
> **[3:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=220)** First, a varchar or nvarchar text string, and the number of characters as an integer.
>
> **[3:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=227)** Then this function will return a varchar or nvarchar.
>
> **[3:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=231)** Let's apply it to our data now.
>
> **[3:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=232)** I'll go ahead and come up here into line number one, and I'll change the upper function to left.
>
> **[3:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=239)** Now we need to supply two different parameters.
>
> **[4:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=242)** The data that we want to process is still the first name column, but I want to extract a specific number of characters from the left side of that string.
>
> **[4:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=249)** So I'll type in a comma, then supply the integer value one.
>
> **[4:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=254)** We'll do the same thing for the last name.
>
> **[4:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=255)** We'll use the left function to process the last name data, but this time I want to see three characters instead.
>
> **[4:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=262)** Now, when I execute the query, we'll get a different result.
>
> **[4:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=265)** I get the first character extracted from the first name and the first three characters extracted from the last name.
>
> **[4:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=271)** So that's just two simple examples on how to use functions to modify how we view the data stored in our table.
>
> **[4:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=278)** One important thing to keep in mind is that these results aren't modifying any of the original data.
>
> **[4:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=284)** They're only displaying it processed through those functions temporarily here in the results.
>
> **[4:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=289)** Now, rather than go through how to use every function that SQL Server offers, I'll point you to the reference documentation at this URL.
>
> **[4:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=297)** Here, you can read up on what each function does, what their parameters are, and how to make the most of them in your databases.
>
> **[5:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/use-built-in-functions?u=76281980&t=304)** Or you can search LinkedIn Learning for my course, Querying SQL Server 2022, where I go much more in depth into the wide variety of functions that SQL Server supports.

> [!info]- Semantic Content
>
> **Code Keywords:** function (18), let (7), return. (1), case, (1), from. (1)
> **Env Vars:** sql (5), url (1)
> **CLI Commands:** find (3), make (2)
> **UI Navigation:** scroll down (1), select the (1), in the sidebar (1), scroll up (1)
> **Analogies:** for instance (4)
> **Definitions:** is called (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Leverage user-defined scalar functions
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=0)** - [Instructor] If you find that you're processing a column of data in the same way on a regular basis and there isn't a built in function to do the work for you, then you can often simplify the process by creating your own custom scaler function.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=14)** Scaler functions is just a fancy way of saying a function that returns a single value.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=19)** Most of SQL servers built in functions are scaler.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=23)** The count function, for example, doesn't matter how many records you feed into it, it will always return just a single number.
>
> **[0:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=30)** In the Wide World Importer's database, there is a table that I want to take a look at.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=35)** It's all the way down at the very bottom in the warehouse schema.
>
> **[0:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=38)** It's called Warehouse.VehicleTemperatures.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=41)** Let's create a new query to take a look at the raw data that the table contains.
>
> **[0:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=49)** I'll just select everything from the table.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=51)** Make sure you're targeting the Wide World Importers database, and press execute.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=56)** Now, this table contains data from sensors in a refrigerated delivery truck.
>
> **[1:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=61)** The temperature ID column stores the individual measurement ID numbers, and if I scroll over here to the right, we also have a temperature column, and this stores measurements in degrees Celsius.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=72)** As you can see, the trucks are kept just a few degrees above freezing.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=76)** Now, if you need to review these temperatures in degrees Fahrenheit instead, you could write a simple select query to do the conversion for you.
>
> **[1:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=85)** Let's modify our query up here above.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=88)** This time, I'll select the vehicle temperature ID column.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=94)** I'll also select the original temperature data.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=98)** I do want to give this data an alias though, so I'll call it AS Celsius.
>
> **[1:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=103)** This will return the original data without any modifications.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=107)** Then we can return the same data that's processed into Fahrenheit values.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=114)** We'll use the temperature column again, I'll multiply the data by 1.8.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=119)** Then I'll add 32 to those values, and we'll return that data as Fahrenheit.
>
> **[2:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=128)** When I press the execute button, you'll see the results.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=131)** So here's the original measurement ID numbers, the original values in degrees Celsius, and the converted temperature into Fahrenheit.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=140)** So this gets us to the data that we need, but remembering the conversion formula can be tricky for all of your users.
>
> **[2:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=148)** Converting it into a custom function, will make it much easier to apply to our data consistently.
>
> **[2:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=154)** Let's go ahead and move down to line number six where we can start our create function statement.
>
> **[2:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=161)** All user defined functions get created in schema, just like tables and many other objects in SQL server.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=168)** So I'll put this function in the Warehouse schema.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=171)** Then I'll type a period followed by the name that I want the function to be.
>
> **[2:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=175)** I'll call this function ToFahrenheit.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=178)** Next, we need to specify the input parameter.
>
> **[3:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=182)** We're going to feed this function values in Celsius degrees.
>
> **[3:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=187)** We'll create a variable called @Celsius.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=190)** All variables in SQL server start with that at symbol.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=194)** Next, we need to specify what data type the input variable will be.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=199)** If I take a look inside of the warehouse vehicle temperatures table and expand the columns table, we'll see that the original temperature data is in the decimal(10.2) data type.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=209)** So I'm going to bring in the data in the same data type up here.
>
> **[3:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=215)** Type an extra closing parenthesis at the end of that to finish the variables declaration.
>
> **[3:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=219)** Then we can come down to line number seven, where I'll type returns.
>
> **[3:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=224)** Here, we'll specify what kind of information the function will return.
>
> **[3:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=228)** In this case, I'm also going to output a decimal(10.2) value.
>
> **[3:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=234)** Next, we'll type AS then BEGIN.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=237)** So at this point, I've named the function.
>
> **[4:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=240)** We've specified what type of data will get fed in, and we've stated what type of data the function will return.
>
> **[4:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=247)** Now we just need to say how this function will process the input parameter to get to the output value.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=253)** Let me scroll down on my script a little bit so we can see everything on a single screen.
>
> **[4:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=258)** Next, I'm going to declare a new variable called Fahrenheit.
>
> **[4:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=266)** Once again, we'll use this variable as a decimal(10.2) type.
>
> **[4:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=272)** We'll finish the line with the semicolon and come down to line 11.
>
> **[4:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=276)** Now we're going to set the value of that new variable.
>
> **[4:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=281)** It's going to be equal to the Celsius data that we're starting with, multiplied by 1.8, and then we'll add 32.
>
> **[4:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=292)** That finishes the conversion formula.
>
> **[4:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=294)** I'll type in a closing parenthesis and a semicolon and come down to line 12.
>
> **[4:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=298)** Now, I want the function to return our Fahrenheit data.
>
> **[5:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=304)** That finishes the statement, so let's go ahead and type end on line 13 and a semicolon at the very end of that.
>
> **[5:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=311)** So there is our completed function, we'll create a new variable called Fahrenheit, we'll set its value to the result of this calculation, and then we'll output the result of that variable.
>
> **[5:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=322)** Let's go ahead and highlight lines six down to 13 and execute them.
>
> **[5:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=326)** That'll create the new function on our system, and we can go ahead and find it over here in the Object Explorer window.
>
> **[5:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=333)** We'll scroll back up here and I'll collapse the tables folder for Wide World Importers.
>
> **[5:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=337)** Then I'll open up the programmability folder, the functions folder, and finally, the scaler valued functions folder.
>
> **[5:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=345)** Now, I'm not seeing it here.
>
> **[5:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=346)** Let's go ahead and right click and choose refresh, and there is the new function that we just created.
>
> **[5:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=352)** So now we can use it in our select statement.
>
> **[5:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=354)** Let's come down here to line number 15, and we'll start that.
>
> **[6:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=362)** I'll select the same vehicle temperature ID and temperature columns as before, but this time I'll use our new function.
>
> **[6:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=369)** It's in the Warehouse schema, it's called ToFahrenheit, and I'll apply it to the temperature column.
>
> **[6:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=379)** We'll give it an alias, I'll call it AS Fahrenheit.
>
> **[6:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=383)** Finally, all of these columns are coming from the same table from Warehouse.VehicleTemperatures.
>
> **[6:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=391)** I'll execute lines 15 through 18, and we get our final result.
>
> **[6:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=395)** We have our temperature ID column, the degree Celsius, and the conversion to Fahrenheit.
>
> **[6:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=400)** The only minor difference this time is that we're being more deliberate about the type of data being returned from our calculation.
>
> **[6:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=407)** You might have noticed that these values are now returning only two digits after the decimal, where a moment ago, with the manual calculation, they displayed three.
>
> **[6:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=417)** Other than that, it looks like our function is working as intended, and we can see that it's much more consistent to apply across our database.
>
> **[7:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/leverage-user-defined-scalar-functions?u=76281980&t=425)** So that's how you package up your own custom calculations into a user defined function in SQL Server.

> [!info]- Semantic Content
>
> **Code Keywords:** function (21), let (8), type. (2), return. (2), finally, (2)
> **Env Vars:** sql (4), begin (1)
> **Versions:** 10.2 (3), 1.8 (2)
> **CLI Commands:** find (2), make (2)
> **UI Navigation:** select the (3), scroll down (1)
> **Analogies:** for example (1), just like (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Introduction to stored procedures
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=0)** - [Instructor] Stored procedures are SQL Server's way of bundling blocks of code into reusable units that can be called on by an application or another user of the database.
>
> **[0:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=10)** These can be anything from a simple select statement or a more complex collection of database requests, programmatic functions, and loops.
>
> **[0:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=20)** There are several benefits to using stored procedures over issuing raw TSQL commands to the database.
>
> **[0:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=26)** First, they're more consistent.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=29)** Every time I ask for customer orders using a stored procedure, I can be assured that the database will process all of the tables involved in such a query in exactly the same way.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=40)** Further, when all of the applications that interact with a database utilize the same stored procedure, it makes maintenance much easier.
>
> **[0:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=49)** To make a change, you simply update the single stored procedure that they all reference rather than update every application's internal logic if they were all making calls to the database on their own.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=60)** Second, they're more secure.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=62)** The stored procedure does not expose the table structure of a database to the end user, but instead keeps all of the table references, joins, and column names hidden from view within a procedure that never leaves the server.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=76)** The only thing that the end user or application receives are the columns, including aliases that are required to fulfill their request.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=84)** Also, on the security front, because stored procedures are saved on the server as an object, that means that they can have security permissions assigned and revoked just like any table or view object.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=97)** So managing access to the stored procedure in the first place is as easy as assigning them to the same schemas they are already using.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=106)** Users can be granted access to a stored procedure, but denied access to the underlying tables that they reference as an added level of security.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=116)** Finally, stored procedures are simply faster.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=119)** Stored procedures can be executed with a single line from the end user or application, but process a complex query and run additional programmatic routines.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=130)** All of the code within a stored procedure is executed on the server itself.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=134)** So multiple calls to the database are not required once the procedure starts.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=140)** When creating a stored procedure, you'll use these same create, alter, and drop syntax that you use to create other database objects.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=149)** You'll type create procedure as, or you can simplify it to create proc as, followed by the name of the procedure that you'd like to create.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=158)** In this case, the stored procedure is named uspGetCustomerOrders.
>
> **[2:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=163)** Then the code below will largely follow the same query syntax that you've already been using.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=171)** To run a stored procedure, you'll use the execute command or simply abbreviate it to EXEC.
>
> **[2:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=179)** There's also some naming considerations to take into account when creating your own stored procedures.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=185)** The prefix sp_ should be reserved for systems stored procedures.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=190)** So don't use that in your name.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=193)** Typically, people use a different prefix such as usp for user stored procedure or simply a lowercase p before the name.
>
> **[3:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=202)** And always use a two-part naming structure to ensure that they're getting created on the appropriate schema.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=209)** Within the stored procedure, make sure you use the two-part Schema.TableName as well.
>
> **[3:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=215)** Otherwise, SQL Server will assume that the table references are on the same schema as the stored procedure if you don't otherwise specify.
>
> **[3:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/introduction-to-stored-procedures?u=76281980&t=223)** So with a little planning and some application of the TSQL commands that you already know, you can create a library of useful stored procedures that'll help speed up and simplify the process of maintaining your own databases.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2), tsql (2), exec (1)
> **CLI Commands:** make (2)
> **Code Keywords:** finally, (1), case, (1)
> **Analogies:** just like (1), such as (1)
> **Code Identifiers:** uspgetcustomerorders (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Create stored procedures
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=0)** - Let's take a look at these store procedures from the Wide World Importer's database.
>
> **[0:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=5)** Now, there's two different ways that we can get to see all of these store procedures that already exist in the database.
>
> **[0:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=10)** The first one is to go into the Object Explorer and expand the Wide World Importer's database.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=15)** Then expand the programability folder and finally open up these store procedures folder.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=21)** Here you can see that this database already has quite a few store procedures created inside of it.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=27)** Another way that we can get to the same information using Transact SQL is to run the query that I have starting on line umber six.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=35)** This will pull out the schema name and procedure name columns from a system table called sys.procedures.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=42)** If I run these lines here and press execute, you'll see that we get these same information back that we're seeing over here in the Object Explorer window.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=50)** So this is a list of all of the store procedures that have been created for Wide World importers.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=56)** Now, if you want to explore how a particular store procedure was created and the commands that it contains you can find it over here in the Object Explorer and then right click on it.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=66)** Let's take a look at a specific procedure.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=68)** I'm going to find one called Website dot Search for people.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=72)** I'll right click on it.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=73)** Then we'll choose script stored procedure as, create two new query editor window.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=81)** That opens up the script for the procedure here in a new pane.
>
> **[1:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=85)** The actual procedure starts here, line number 12 so let me scroll down to it so we can see it all on the screen.
>
> **[1:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=91)** I encourage you to read through the T SQL commands to see if you can work out what this procedure is doing.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=97)** This particular stored procedure uses a couple of imper parameters called Search text and Maximum Row to Return.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=106)** It then uses those to find people across the database regardless of whether they're in the salesperson, employee, customer, or supplier tables.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=116)** At the very end, it then converts the output results into a JSON data type, and we can see that on line number 37.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=123)** To try it out, let's open up a new query window.
>
> **[2:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=127)** Then we could type E X E C or you could type out the whole word execute, the name of the store procedure website dot search for people.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=140)** Then we'll supply a name that we want to search for inside of single quotation marks.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=145)** I'll search for my own name, Adam.
>
> **[2:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=148)** Then I type a comma, followed by our next parameter the maximum number of rows to return.
>
> **[2:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=153)** Let's just pull out 10 people.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=156)** I'll press enter.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=157)** That finishes my execute statement.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=159)** I'll press the execute button to run it and there is my JSON formatted list of all of the people in the database that have the first name of Adam.
>
> **[2:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=169)** If you want, you can click on that link there to open it up in a new text editor and you can scroll through the entire text there.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=176)** All right, let's go ahead and close all of these tabs.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=180)** If it prompts you you don't need to save any changes to these.
>
> **[3:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=184)** That'll get us right back to the exercise file that I started with.
>
> **[3:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=188)** So that's how a store procedure works.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=190)** Let's go ahead and make our own now.
>
> **[3:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=192)** I'll scroll down here to line number 13.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=195)** I'm going to create a new store procedure in the warehouse schema called USP Low Inventory.
>
> **[3:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=202)** The goal here is to get a good understanding of the inventory that we have on hand.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=207)** Right now, this store procedure is just running a select statement.
>
> **[3:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=210)** It's selecting a number of columns from two different tables in the database, the warehouse dot stock items table and the stack items holdings table.
>
> **[3:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=221)** I'll highlight lines 14 down to 23 and will execute it to create the store procedure.
>
> **[3:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=228)** Now I can scroll down just a little bit and we'll execute the procedure I just created.
>
> **[3:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=234)** This returns each item's ID number, the name of the item.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=237)** It tells me how many we have on hand in the warehouse and the recommended reorder level.
>
> **[4:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=244)** The results sort the values by the on hand number so you can see the items with the lowest inventory on hand appear first in the list.
>
> **[4:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=252)** Now, let's alter the store procedure to add a where clause that filters the records to only show the items where the quantity of products on hand is less than our reorder threshold.
>
> **[4:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=264)** To do that, we'll use an alter procedure statement.
>
> **[4:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=267)** I have it listed on line number 29 so we'll alter the same procedure that we just created.
>
> **[4:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=273)** It's basically exactly the same except we add line 37.
>
> **[4:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=276)** This wear clause.
>
> **[4:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=278)** We're only going to return items where the re reorder level is greater than the number that we have on hand.
>
> **[4:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=285)** I'll highlight lines number 29 down to 39 and execute 'em to modify the store procedure.
>
> **[4:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=292)** Now we can execute the procedure again.
>
> **[4:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=293)** We'll execute warehouse dot USP low inventory.
>
> **[4:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=298)** This time, it only returns two items.
>
> **[5:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=300)** These are the items where we have less than the number that we should have on hand.
>
> **[5:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=305)** So now we have an easy way to quickly check on the stock levels of the warehouses inventory.
>
> **[5:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=310)** It only takes a single line to execute our new store procedure.
>
> **[5:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=316)** When we do, it returns a list of every item that has a quantity in the warehouse that's below the recommended restock level.
>
> **[5:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-stored-procedures?u=76281980&t=323)** It looks like it's time to place orders for these two products, and that's how you construct a store procedure that simplifies some of the common tasks and queries that you'll run in your database.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), return. (2), type, (1)
> **Env Vars:** sql (2), json (2), usp (2)
> **UI Navigation:** click on (3), scroll down (3)
> **CLI Commands:** find (3), make (1)
> **Best Practices:** recommended (2)
> **Exercise Files:** exercise file (1)
> **Definitions:** is a  (1)
> **Speakers:** - let (1)

#### Parameterized stored procedures
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=0)** - Stored procedures are a great way to simplify and consolidate the process of passing instructions to the database, but it's important to ensure that you're being efficient with their use.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=11)** What you don't want is to create a thousand stored procedures that each address a single use case.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=17)** Maintenance, and your sanity will be greatly improved by finding opportunities to create stored procedures that serve a variety of functions.
>
> **[0:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=26)** One of the main ways of doing this is by utilizing parameters that alter the procedure's scope.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=33)** These parameters can be specified by the end user when they run the procedure so that a single stored procedure can serve up results to a variety of situations or questions.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=45)** Let's take a look at how this works by creating a new procedure in the Wide World Importers database, we'll put it inside of the warehouse schema, and I'll call it uspSelectProductsByColor.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=57)** Then we'll add a parameter that will alter the behavior of these store procedures.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=63)** Parameters have an @ prefix, and then we have also the specified data type.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=68)** Here, I'm establishing this procedure will accept a parameter called peramColor.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=74)** The goal of this store procedure will allow users to select all of the items out of our inventory table that have a specific color.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=84)** The store procedure will be customizable so they can choose different colors when they execute the statement.
>
> **[1:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=89)** So after we establish this parameter, we'll continue on with the instructions for the procedure.
>
> **[1:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=95)** We'll select a number of columns out of the table.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=98)** We have the from clause that specifies the tables where those columns can be found. Finally, we have our where clause.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=105)** This is where we'll filter the results to only show the items where the color name is equal to whatever the end user passes in as the parameter.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=115)** Let's go ahead and execute line six all the way down to 19 to create the store procedure.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=122)** Then I'll scroll down on my script and we'll execute it.
>
> **[2:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=127)** Let's run line number 22 to execute our store procedure and look for all of the items that are black.
>
> **[2:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=135)** This shows me that I have a total of 51 different items.
>
> **[2:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=138)** I can see all of their names here, and if I scroll over to the right, we'll see that they all have a color name black.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=145)** We can get a different result set by simply modifying this parameter here at the end.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=150)** If I run line number 24, we'll run the exact same store procedure, but this time look for blue products.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=157)** This returns the 23 items that we have that are the color blue.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=162)** But what happens if we don't specify a parameter?
>
> **[2:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=165)** Let me run line number 26 that doesn't have that color parameter at the end.
>
> **[2:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=169)** This time I get an error.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=171)** It tells me that the function or the procedure expects a parameter.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=176)** To make this more user friendly, we can build a better experience into the procedure.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=180)** Let me scroll down a little bit and we'll get to line number 30 where we alter the procedure we just created.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=186)** This time, I'll specify a default starting value for the parameter and we'll set its value to null.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=193)** This will get overwritten the moment the end user supplies their own value when they run the procedure.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=199)** Then inside of the procedure, we'll check to see if the value is still null.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=204)** If it is, it's going to output a statement that says a valid product color is required, and then it'll just end the store procedure here on line 36.
>
> **[3:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=213)** If however, the end user does specify a color, it'll continue on with the same select statement and the wear clause that we had before.
>
> **[3:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=221)** So let's go ahead and let me put all of this on the screen so I can see it at once.
>
> **[3:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=226)** It starts up here, line number 30, and we'll highlight all the way down to line number 47.
>
> **[3:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=233)** I'll execute the statement that creates the new altered store procedure, and now I can scroll down and try it out.
>
> **[4:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=241)** This time, I'll run line 50 that doesn't supply a color parameter at the end.
>
> **[4:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=246)** When I do, I get a much nicer message that just tells me that a valid product color is required.
>
> **[4:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=251)** Then I can supply a color to the procedure.
>
> **[4:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=254)** This time we'll search for the red items, and there we go.
>
> **[4:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=257)** There's our five items that are the color red.
>
> **[4:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=261)** So now the procedure responds much more gracefully when a color isn't provided.
>
> **[4:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=266)** So the stored procedure is working and it makes it easy to search for product inventory by color.
>
> **[4:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/parameterized-stored-procedures?u=76281980&t=271)** By adding parameters to a stored procedure, you increase its capabilities, which enables reuse in a wider variety of situations to suit different needs.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), continue (2), case. (1), type. (1), finally, (1)
> **UI Navigation:** scroll down (3)
> **Code Identifiers:** uspselectproductsbycolor (1), peramcolor (1)
> **CLI Commands:** make (1)
> **Speakers:** - stored (1)


### 7. Backup and Restore

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Create a full backup of the database
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=0)** - It should be no surprise that backing up your database is an exceptionally good idea.
>
> **[0:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=5)** You never know when disaster is about to strike and I'm not just talking about earthquakes and fires or a hardware failure.
>
> **[0:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=13)** Eventually there will come a day when you do something silly like casually forgetting a where clause in a delete statement and you wipe out an entire data table.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=22)** There is no undo option when it comes to SQL Server, so you need to be ready for when that day comes.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=29)** To make a backup, just right click on your database in the Object Explorer panel then point to tasks and choose backup.
>
> **[0:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=38)** That'll open up the backup database dialogue.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=41)** Now, the first option at the very top is to choose the database that you want to back up so you actually didn't need to right click the database over here in the Object Explorer.
>
> **[0:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=49)** You can simply select the correct one from this dropdown.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=53)** Let's create a backup of the Red 30 Tech database.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=57)** The recovery model that's displayed depends on the properties of the database.
>
> **[1:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=61)** In this case, the full recovery model means that the database backups will include full transaction logs in addition to all of the tabular data.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=71)** Next, we have the backup type.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=73)** This also says full.
>
> **[1:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=75)** This time full means that everything from the database will be backed up.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=80)** The other options are differential, which only backs up records that have changed since the last full backup.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=86)** Or we could back up just the transaction log.
>
> **[1:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=89)** I'll leave mine set to full.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=92)** Next, let's look at the backup component.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=94)** Our option is either the full database or if you're using multiple file groups you can choose specific files to back up.
>
> **[1:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=102)** Our database is only using the primary file group so this option really doesn't apply.
>
> **[1:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=108)** Next, we can specify the destination where we want to save the backup file too.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=114)** Options here are to either use a disc drive or we can choose a URL.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=120)** If you choose URL and then press the add button you'll be prompted for an Azure storage container which is a component of Microsoft's cloud platform that integrates with SQL Server.
>
> **[2:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=132)** You can even create a new container in the cloud here by signing into your Azure account.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=137)** I'm going to press cancel here and just save our backup file to our hard drive.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=141)** So I'll choose the disc option.
>
> **[2:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=144)** That'll display the default location in the box below.
>
> **[2:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=148)** You can press the add button now to add in additional locations, but it's important to note that this isn't an option for backup redundancy.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=156)** If you were to add multiple locations here your backups would be split with a portion of the data going into one location and a portion going into the other.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=166)** For large databases, this can speed up the process of saving a backup, but in order to restore you'll need both files as neither will contain everything.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=176)** For most users, you'll want to stick with a single backup location here and rely on other methods for creating redundant copies of your backup if you need them.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=186)** So that's the minimum amount of information that you need to provide.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=190)** There are additional options in the other two pages that you could access on the left.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=194)** Let's take a look at media options first.
>
> **[3:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=198)** Here you have some options that ask about media sets.
>
> **[3:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=203)** SQL Server keeps a record of backup and restore activity and it groups all of that history into this concept of a backup set.
>
> **[3:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=212)** Here what's happening is that you can decide whether you want to continue contributing to the current history or if you want to wipe out that history and start again with a new backup set.
>
> **[3:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=223)** One option on this screen that's probably a good idea to turn on is this checkbox down here that says verify backup when finished.
>
> **[3:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=232)** That will just make sure that it wrote to the target location without any issues before saying that the backup was successful.
>
> **[4:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=241)** And finally, we could take a look at the backup options page.
>
> **[4:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=245)** Here we can set in expiration for the backup set, in this case, after zero days means that it won't expire.
>
> **[4:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=253)** We can also enable encryption on the database backup if we want.
>
> **[4:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=258)** When all of your options are dialed into your liking press the okay button at the bottom of your screen and SQL Server will go through the process of backing up your database.
>
> **[4:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=268)** Once you get the success message, you're all set.
>
> **[4:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=272)** We now have a backup of the database stored on our hard drive.
>
> **[4:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=275)** Now, there's one other option that we have with the backup window, so let's go back into it real quick.
>
> **[4:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=279)** I'll right click on the Red 30 Tech database point to tasks and choose backup again.
>
> **[4:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=286)** At the very top we have the option to view the script of our backup.
>
> **[4:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=290)** I'll choose the option to script action to a new query window.
>
> **[4:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=294)** Then I'll press cancel to dismiss the backup dialogue window and we can see our script right here.
>
> **[5:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-full-backup-of-the-database?u=76281980&t=300)** This will allow you to review the exact transact SQL code that creates your backup files and either make edits here or incorporate this code into a larger maintenance script that you may want to run regularly to ensure that you always have a recent backup of your database.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (2), delete (1), type. (1), continue (1)
> **Env Vars:** sql (5), url (2)
> **UI Navigation:** click on (2), select the (1), dropdown (1), checkbox (1)
> **Definitions:** means that (2), is an  (1), is a  (1)
> **CLI Commands:** make (3)
> **Prerequisites:** you'll need (1)
> **Speakers:** - it (1)

#### Create a differential backup
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=0)** - [Instructor] Differential backups only include the changes that have been made to the database since the last full backup was made.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=7)** This makes them much smaller and faster to complete.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=11)** Now we just made a full backup of the Red 30 Tech database, and I'm now going to run this script to insert a few more records into our customer's table.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=21)** If I scroll all the way down to the bottom of the results that show up here, you'll see those new customers have been added down here to the bottom of the table.
>
> **[0:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=29)** So now the backup that was just made a moment ago, is no longer up to date, if we were to delete this database and restore from the backup, it would not include these new customers, and we'd experience some data loss.
>
> **[0:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=43)** So rather than make another full backup, we can create a backup that only includes the change that we just made to the database.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=51)** If and when we need to restore the database, we would first restore the full backup then restore the differential backup on top of it to return to our current state.
>
> **[1:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=61)** The process of creating a differential backup is nearly identical to the full backup.
>
> **[1:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=67)** Right click on the Red 30 Tech database, point to Tasks, and then choose Backup.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=74)** Then we'll change the Backup type to Differential.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=80)** In the Destination, we're going to save to the same location as our full backup, and you can review that file path right there.
>
> **[1:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=89)** New SQL Server users might have a bit of hesitation here though, and think that we're about to overwrite the full backup that we've made since the typical experience of other programs is to overwrite existing files.
>
> **[1:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=103)** This gets us back to the idea of a backup media.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=106)** This dot BAK file is a container that contains multiple sets of backups.
>
> **[1:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=112)** Press the Contents button and it'll reveal what's currently inside the media.
>
> **[1:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=119)** Here we have a single backup set that we've just made.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=122)** We have the name of the database, the type of the database, as well as the kind of component or the type of backup that we just made.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=129)** In this case, that's the full backup there.
>
> **[2:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=132)** There's some additional information about the time and date that that backup was made.
>
> **[2:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=138)** When we create a differential backup, it's just going to get added to the contents that are already present in this set.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=145)** So let's press Close to dismiss this window, and that'll take us back to the main window.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=149)** Then I'll press the Okay button, and the changes that were made to the customer's table have now been added into our backup set as a differential.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=158)** And that's all there is to creating a differential backup for your database, since they don't include the full set of every record in the database, they're much faster to complete, even in large or active databases.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=171)** The trade-off that you make with differentials is that it adds a bit of complexity to the restoration process.
>
> **[2:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=177)** A typical scenario might include making a full database backup every night, and then periodic differential backups throughout the day.
>
> **[3:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=185)** That way it minimizes the size of the differentials that would need to be applied to get a database backup and running after a failure, when you make another full backup, it essentially resets the process.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=199)** What you don't want to do is make one full backup in January and then hundreds of differentials throughout the rest of the year.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-differential-backup?u=76281980&t=207)** That could dramatically slow down the backup process as your differential backups get larger and larger over time, the trick is to find a good balance between the frequency of your full backups and the differential backups that you make.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), find (1)
> **Code Keywords:** delete (1), case, (1), let (1)
> **Env Vars:** sql (1), bak (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Restore a backup
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=0)** - Let's suppose that that day has come where something terrible has happened in your database.
>
> **[0:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=5)** I'm going to go into the Red 30 Tech database, right click on the product categories table, and choose delete.
>
> **[0:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=12)** Then in the delete object window, I'll press OK.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=15)** That removes the table and all of its data from the database.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=19)** The only way to get this table back is to return to one of our backups.
>
> **[0:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=24)** To start the restore process, right click on the Red 30 Tech database, point to tasks, and then choose Restore.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=32)** Here we have a couple of different options.
>
> **[0:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=34)** I'm going to choose to restore the database.
>
> **[0:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=38)** SQL Server will go through its internal records to determine which backup sets are available, and you can make sure that the Red 30 Tech database is selected in the dropdown menu here at the top.
>
> **[0:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=49)** At the bottom we have a list of our backup sets.
>
> **[0:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=52)** We have the full backup that we've made, as well as the differential that we made in the prior movie.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=58)** Next SQL Server wants to know when we want to restore to.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=62)** The default option is to restore to the last backup that was taken.
>
> **[1:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=67)** If you click the timeline button, you can get access to a feature called the backup timeline.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=73)** Because our backups include the full transaction logs of every change made to our data tables, we have the option of restoring the database to the exact state it was in at any point in time.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=87)** This means that we don't have to restore our database to the current state or to the state that it was in when the backup was made, but we could actually restore the database to any point in time between backups.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=100)** Essentially what happens is that SQL Server will restore the database to the backup that immediately proceeds our chosen point in time.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=107)** And then it re-executes the same changes recorded in the transaction log to take it those last few steps.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=115)** This effectively makes it possible to rewind the database.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=122)** So when would that be a useful thing to do?
>
> **[2:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=125)** You can imagine a scenario where data accidentally gets deleted, but that error isn't noticed right away.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=131)** You continue on with your regular backups and only later discover the problem.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=136)** In that case, you don't want to restore to the last backup.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=140)** You need to go all the way back to a point before the mistake was made, which was likely between backups.
>
> **[2:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=147)** Using this timeline, you can see the history of when full and differential backups were taken.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=152)** There's a legend down here that describes the different arrows that you'll see.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=157)** You can zoom in to a different timeline interval.
>
> **[2:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=159)** I'm going to change this from day to hour.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=162)** Then you can scroll through the bar to see different points in time when the backups occurred.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=167)** You'll typically see a full backup represented by this dark green arrow, and then one or more individual differential backups represented by the white arrow.
>
> **[2:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=175)** The currently selected restore time is represented by the red line.
>
> **[2:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=179)** So you'll see at this point we're going to restore to the moment that the differential backup was taken.
>
> **[3:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=184)** If you wanted to restore to a specific date and time, you could just choose that option here and then choose a different date or time from these dropdown menus.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=194)** Just to be on the safe side and ensure that we're all on the same page, I'm going to switch this back to the last backup taken.
>
> **[3:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=201)** Then I'll press OK on this window, and finally I'll press OK one more time to restore our database.
>
> **[3:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=208)** That tells me that the database was restored successfully, and I can say OK, and now we'll go into the table's folder, I'll right click the table's folder and choose Refresh, and there is our product categories table returned safe and sound.
>
> **[3:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/restore-a-backup?u=76281980&t=223)** And that's how you make use of your database backups to recover from a disaster.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (2), let (1), continue (1), case, (1), switch (1)
> **UI Navigation:** click on (2), dropdown (2)
> **Env Vars:** sql (3)
> **CLI Commands:** make (2)
> **Definitions:** means that (1)
> **Analogies:** imagine (1)
> **Speakers:** - let (1)

#### Business continuity solutions
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=0)** - [Instructor] Having a backup and restore plan in place ready to go when disaster strikes, is an essential practice for anyone that works with a database management system.
>
> **[0:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=10)** But if you can reduce the risk of even having a catastrophic failure in the first place, then it'll go a long way towards securing your information too.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=19)** SQL Server offers a couple of advanced data protection features that fall under the concept of business continuity.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=27)** The goal here is to make sure that the server and the databases it contains, are highly available whenever they're required and the streamlined disaster recovery efforts.
>
> **[0:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=39)** The more powerful business continuity option is called Availability Groups.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=44)** With Availability Groups, multiple server instances work together as a cluster to protect the data.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=51)** A primary copy of the database receives read and write instructions from users as normal.
>
> **[0:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=57)** It then copies those instructions to one or more secondary replicas of the database and they perform the same read and writes that the primary did.
>
> **[1:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=67)** In this way, multiple copies of the database remain in sync and are functionally identical.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=73)** Should the primary database fail for any reason, one of the secondary server instances in the cluster can immediately jump in and start accepting read and write instructions from users in a process called a failover.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=86)** This process of failing over from one machine to the next is managed by a feature of the operating system that SQL Server is installed on.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=94)** Either Windows server failover clusters, or Linux Pacemaker clusters.
>
> **[1:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=101)** The benefit of this arrangement is that little to no downtime will be experienced by the users.
>
> **[1:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=108)** Further, because the secondary replicas are functionally identical to the primary, they can be used for read-only tasks, such as reporting or for creating database backups.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=120)** The trade off, of course, is that the business needs to maintain two or more physical servers for this to work and they need to have nearly identical configurations which effectively doubles the cost of the hardware.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=134)** The other option for maintaining business continuity is through a process called Log Shipping.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=140)** Log Shipping is much slower than availability groups but doesn't require the complexity of maintaining a Windows server failover cluster or a Linux Pacemaker cluster.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=150)** This makes log shipping much cheaper to implement.
>
> **[2:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=154)** Like with always on availability groups, log shipping requires multiple machines, but they don't need to be managed in a cluster.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=162)** The first will be the primary database server and a second will act as a warm standby.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=168)** Log Shipping works with the same backup procedures that you're already performing.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=173)** Using the SQL Server agent, the transaction log backups that are made on the primary database are transmitted, or shipped, over to the warm standby machine.
>
> **[3:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=183)** The standby machine then restores those backups into its own instance effectively copying the primary database up until the point that the backup was made.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=194)** The benefit to this arrangement is that you have a built in delay.
>
> **[3:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=198)** If backups are only shipped once a night, then the warm standby database will be, at most, one day behind the primary while it waits for the next batch of updates.
>
> **[3:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=208)** If you catch a problem with the primary database before the issue is transmitted over to the standby, then you can keep it from propagating across.
>
> **[3:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=217)** The other benefit is that should the primary database suffer a failure, you don't need to spend time restoring a backup since the backup has already been restored on the standby computer.
>
> **[3:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=229)** The other benefit is that should the primary database suffer a failure, you don't need to spend time restoring a backup since the backup has already been restored on the standby computer so you can be up and running again faster.
>
> **[4:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=243)** The downside to this arrangement is that the two databases aren't ever identical and some data loss may occur.
>
> **[4:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=250)** So with Always On availability groups and Log Shipping, database administrators have two different options for maintaining the continuity of their data.
>
> **[4:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/business-continuity-solutions?u=76281980&t=260)** If this is important to the operation of your business then I encourage you to research deploying both of these technologies to see which one is the best fit for you.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3)
> **Definitions:** is an  (1), is called (1)
> **CLI Commands:** make (1)
> **Code Keywords:** require (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Continuously replicate data to the cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/continuously-replicate-data-to-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/continuously-replicate-data-to-the-cloud?u=76281980&t=0)** - [Narrator] One of the headline new features for SQL Server 2022 is called Link for Azure SQL Managed Instance.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/continuously-replicate-data-to-the-cloud?u=76281980&t=8)** It aims to make it much easier to maintain redundant copies of your valuable data, both in your local on-premises SQL Server Instances, and in the Azure Cloud.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/continuously-replicate-data-to-the-cloud?u=76281980&t=19)** And Azure SQL Managed Instance is a version of SQL Server that runs on Microsoft's cloud platform.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/continuously-replicate-data-to-the-cloud?u=76281980&t=25)** It's considered a platform as a service offering, in which Microsoft maintains both the hardware and the Instance's internal operations.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/continuously-replicate-data-to-the-cloud?u=76281980&t=35)** You are then free to create your own databases and manage your own data without having to worry about maintenance of the server.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/continuously-replicate-data-to-the-cloud?u=76281980&t=42)** With the new Link feature, you can connect your own on-premises SQL Server databases with a duplicate copy of your database running on a managed Instance.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/continuously-replicate-data-to-the-cloud?u=76281980&t=53)** Each database gets its own link, that can be started and stopped as needed.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/continuously-replicate-data-to-the-cloud?u=76281980&t=58)** As changes are made to your primary database, those same modifications are made in near real time on the copy on Managed Instance.
>
> **[1:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/continuously-replicate-data-to-the-cloud?u=76281980&t=69)** There are several benefits to linking your databases.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/continuously-replicate-data-to-the-cloud?u=76281980&t=72)** The first is that a Wizard built into Management Studio is available to help you set everything up.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/continuously-replicate-data-to-the-cloud?u=76281980&t=78)** The Wizard will streamline a lot of the complexity that would've prevented many organizations from taking advantage of this type of arrangement in the past.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/continuously-replicate-data-to-the-cloud?u=76281980&t=87)** It will create connections and allow you to log into your Azure account, and even handle the initial database upload and replication.
>
> **[1:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/continuously-replicate-data-to-the-cloud?u=76281980&t=95)** Once databases are linked, you'll have a redundant copy of the data in the cloud, which can act as a read-only endpoint for your users.
>
> **[1:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/continuously-replicate-data-to-the-cloud?u=76281980&t=104)** Anyone that needs to generate reports or that wants to run an analysis project, can do so from the redundant copy, without impacting the users on the main server that need to be able to write and update data quickly.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/continuously-replicate-data-to-the-cloud?u=76281980&t=118)** This redundant data source can also act as a backup during an outage, and can be made to take over read and write activities, until your primary servers come back online.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/continuously-replicate-data-to-the-cloud?u=76281980&t=130)** Finally, since the linked databases are in the cloud, they can be replicated to different data centers, that may be geographically very far away from your primary on-premises servers.
>
> **[2:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/continuously-replicate-data-to-the-cloud?u=76281980&t=141)** This improves resiliency in the face of natural disasters, and can help you make your database more accessible to users around the world.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/continuously-replicate-data-to-the-cloud?u=76281980&t=150)** Now, at the time of this recording, the SQL Server 2022 link feature is still in a closed beta testing period, and Microsoft is only allowing a limited number of pre-qualified partners to test it out.
>
> **[2:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/continuously-replicate-data-to-the-cloud?u=76281980&t=163)** However, when it becomes available to everyone after the general release of SQL Server 2022, I expect it'll be a popular feature that'll help end users realize the benefits of a hybrid infrastructure, that combines the best of on-premises installations with cloud-hosted solutions.

> [!info]- Semantic Content
>
> **Env Vars:** sql (8)
> **CLI Commands:** make (2)
> **Definitions:** is called (1), is a  (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - [narrator] (1)


### 8. Security

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Create a new user account
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=0)** - [Instructor] I'd like to create a new user account, here, in SQL Server, so that we can start to get used to the idea of segmenting access to the system, by using different logins, with different kinds of permissions.
>
> **[0:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=12)** You might remember that you can find information about the current login accounts, that are on the server by going into the Security folder and then expanding the Logins folder.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=22)** Here are all of the different accounts, that are currently enabled on the server itself.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=25)** Most of these are system accounts.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=28)** I also have my Windows authentication account that I'm currently using there, as well as the System Administrator or the SA account, that we previously enabled.
>
> **[0:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=37)** Now, in order to add in, a new login account, I'll right click on the Logins folder, and then click New Login.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=44)** The first thing we need to do here, is give the new person a name.
>
> **[0:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=48)** I'm going to create a login for a person named Octavia.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=53)** I'll choose to use the SQL Server authentication method and we'll give Octavia a password, and then confirm the password.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=60)** To keep things simple, I'll choose the password, Octavia one.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=64)** Now we can take a look at these three check boxes below.
>
> **[1:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=67)** Each server will have its own password policy, that describes the kinds of passwords that will be acceptable.
>
> **[1:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=74)** For instance, you might have strong passwords or have a specific length, that your server needs to enforce.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=79)** I'll leave these three options on.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=81)** This one, down here at the bottom is important too.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=84)** It says that the user must change the password at the next login.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=88)** So when Octavia first logs into SQL Server, using the password that we just established here, she'll be asked to provide her own new password on that first attempt to log in.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=99)** This way, she can supply a password, that we don't know about, in order to keep things more secure.
>
> **[1:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=105)** Now, at this point, we could take a look at these server roles, and I'm not going to make any changes here, but these are the different things that Octavia will be allowed to do on the server.
>
> **[1:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=113)** We'll see some of these in the next movie, but for now, I'm just going to leave Octavia, just limited to the public role.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=120)** If we're taking a look at User Mapping, this controls what Octavia can do within each individual database.
>
> **[2:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=127)** Again, I'm not going to connect her to any specific databases, at this point, and we'll just leave her listed in the public role, for each of the databases.
>
> **[2:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=135)** So I'm going to go back up to the general tab.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=137)** I'm not going to make any more changes, and press the OK button at the bottom to create Octavia's new account, and you'll see it listed here in the Logins folder.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=145)** Now we can log into the server, using Octavia's credentials.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=149)** I'm going to minimize the Security folder.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=151)** In fact, I'll just minimize the databases and my whole connection for my Windows authentication account.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=157)** Then, I'll click this button on the Object Explorer, to bring up the Connect to Server dialogue box.
>
> **[2:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=163)** We'll connect to the same server, but this time, instead of Windows authentication, I'll switch it over to SQL Server authentication.
>
> **[2:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=170)** For the login account, I'll use Octavia's name and I'll type in the password that we set it up with Octavia one.
>
> **[2:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=179)** Let's press the connect button.
>
> **[3:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=181)** Now, you'll see that message, that Octavia needs to reset her password before she can log in.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=186)** So let's give Octavia a brand new password.
>
> **[3:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=189)** I'll just call it, Octavia two.
>
> **[3:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=192)** I'll press OK, and Octavia is now led in to the database server.
>
> **[3:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=196)** And you can see we have a new connection here, in the sidebar.
>
> **[3:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=200)** However, if we try and expand the Databases folder, you'll see that we have Databases here.
>
> **[3:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=204)** But if you try and go into any of the databases, it'll say that the database is not accessible.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=209)** Octavia doesn't have permission to enter any of our databases.
>
> **[3:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=213)** Also, if you go into the Security folder and expand the Logins folder, Octavia will only be able to see her own account, as well as the system administrator account.
>
> **[3:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=222)** So Octavia can't even see that other users are allowed in the server.
>
> **[3:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=228)** So Octavia's account, currently, has a very limited set of permissions for what she can do on the server.
>
> **[3:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=233)** Basically, she can just look around at some basic information.
>
> **[3:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/create-a-new-user-account?u=76281980&t=237)** Since it's a lot harder to create a fake person out of thin air, with Windows authentication, experimenting with different user accounts, within the SQL Server authentication protocol, can give you a good idea how the server will look and function when viewing it from the perspective of a user with limited permissions.

> [!info]- Semantic Content
>
> **Code Keywords:** public (2), let (2), switch (1), function (1)
> **Env Vars:** sql (5)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** click on (1), in the sidebar (1)
> **Cross-References:** in the next (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### User roles and permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=0)** - [Instructor] The security of your database is primarily maintained by assigning users to the correct roles that give them the permissions that they need to do their jobs, while also keeping them out of things that they shouldn't have access to.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=14)** Let's now give our new user Octavia some additional permissions so that she can gain a deeper level of access to perform work on the server And in our databases.
>
> **[0:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=25)** Octavia does not have the authorization to adjust her own permissions though, so in order to give her permissions, I need to be using a system administrator account.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=36)** If you're still connected to your instance with Octavia's account, we need to switch over to the sysadmin account, either using our Windows authentication account or the SA login.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=46)** Then, when we're using that connection, we'll go into the "Security" folder and expand "Logins", and then finally, double click on Octavia's account.
>
> **[0:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=55)** In the "Server Roles" page, we can see the kinds of things that she can do on the server itself.
>
> **[1:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=61)** Octavia currently has only been assigned to the role of "public", which is the base level of permission necessary to log into the server instance.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=71)** She can access the server and have a limited look around, but she doesn't have permission to modify any server settings.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=79)** If we were to check "On" some of these other options, we would increase her permission level and allow her to perform additional tasks.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=88)** Let's go over a few of the most important server roles.
>
> **[1:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=92)** The role with the highest level of permissions is the "sysadmin".
>
> **[1:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=96)** Users in this role can do anything that they want on the server.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=100)** Our personal Windows account and the SA login account are both members of the sysadmin fixed server-level role.
>
> **[1:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=108)** Users in the "serveradmin" role can change server wide configuration settings and perform server shutdowns.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=116)** "securityadmins" are allowed to manage user accounts and grant other users permissions.
>
> **[2:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=123)** Users with the "dbcreator" status can create alter, drop, or restore any database.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=131)** And finally, there's the "public" role, the default role that all users get placed into.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=137)** So those are some of the options that we have here.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=140)** Let's suppose that Octavia doesn't need to perform any server level tasks.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=145)** We can just leave her in the public group only.
>
> **[2:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=148)** Let's now take a look at the "User Mappings".
>
> **[2:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=151)** On this page, we'll define what databases Octavia has access to and what she can do in them.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=158)** She currently cannot access any database on the instance, and we need to grant her permission to each one individually if we want her to be able to see what they contain.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=168)** Click on the "Red30Tech" database and then take a look at the bottom of the window.
>
> **[2:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=173)** Here you can see that she's a member of the public database role, which again, just gives her permission to see that the database exists, but that's about it.
>
> **[3:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=183)** There's a whole bunch of other roles that we can add her to though, and each one will elevate her permissions in the Red30Tech database.
>
> **[3:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=192)** By mixing and matching database level roles, you can decide what people can and cannot do in the database.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=199)** Here's a few of the most common database level roles.
>
> **[3:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=203)** The "db_owner" database level role is exactly what it sounds like.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=207)** They're the database owner.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=209)** Members at this level can perform any configuration or maintenance activities on the database, including dropping or deleting the database altogether.
>
> **[3:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=219)** "db_backupoperators" can perform database backups.
>
> **[3:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=224)** Users in the "db_ddladmin" role can run data definition language SQL commands.
>
> **[3:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=231)** Essentially, this means that they can work with the structures of tables and relationships.
>
> **[3:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=236)** They can create new tables or add and modify column details, such as data types and constraints.
>
> **[4:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=244)** "db_datawriters" are allowed to add, delete or modify any data in any table.
>
> **[4:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=252)** And "db_datareaders" can read any data back out of a table.
>
> **[4:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=258)** Users can get added to multiple roles.
>
> **[4:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=261)** Someone in both the data writer and data reader roles can essentially edit or retrieve any records.
>
> **[4:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=269)** Another user that only has data writer permission can add records to a table, but can't read them back out again, even if they're the very same records that they just put in.
>
> **[4:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=281)** So let's elevate Octavia's permissions and allow her to read data in the Red30Tech database.
>
> **[4:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=288)** Place a check mark in the "Map" column next to the Red30Tech database up here at the top.
>
> **[4:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=293)** This will map her login account for the server to a user account within the database, and that user will have the same name.
>
> **[5:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=300)** Then below, place a check in the "db_datareader" role.
>
> **[5:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=306)** That will give her permission to read data that's already stored in any of the data tables, but she won't be able to edit any records, add data, or create or alter any tables.
>
> **[5:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=318)** Press the "Okay" button on the bottom of the screen and that'll save the changes to her user account.
>
> **[5:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/user-roles-and-permissions?u=76281980&t=323)** And we'll take a look at how those changes affect her ability to access the database in the next movie.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), public (4), finally, (2), switch (1), delete (1)
> **Code Identifiers:** db_owner (1), db_backupoperators (1), db_ddladmin (1), db_datawriters (1), db_datareaders (1)
> **UI Navigation:** click on (2)
> **Env Vars:** sql (1)
> **Cross-References:** in the next (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Database schemas
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=0)** - [Instructor] Schemas allow us to group related tables together so that we can manage them and assign permissions to tables as a group.
>
> **[0:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=8)** Usually these table groups are going to mirror the types of groups that you already have in your organization.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=14)** You might have a sales team and an operations team and a product development team.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=19)** Each of these groups of workers generate data that's unique to their department, but still contributes to the larger pool of data collected by the company.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=28)** Schemas work the same way in organizing your database tables.
>
> **[0:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=32)** If I expand the Red30Tech database inside of our server, go ahead and expand that folder there and then take a look at the tables, you'll see that all of the tables that we created so far have been added to the dbo schema.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=47)** Dbo stands for database owner and it's the default schema that gets created for all new databases in SQL Server.
>
> **[0:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=55)** We can create our own new schemas and start organizing these tables better with a simple line of Transact-SQL code.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=62)** So with the Red30Tech database selected, I'll press the New Query button.
>
> **[1:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=67)** Make sure you're connecting to the database server using your system administrator log in account.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=73)** Then I'll issue the command CREATE SCHEMA sales.
>
> **[1:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=80)** Press the Execute button and it'll create a new schema on the server.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=84)** You're not going to see anything update over here in the Object Explorer panel yet.
>
> **[1:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=89)** Now we can add a table to it.
>
> **[1:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=93)** I'll issue the command ALTER SCHEMA sales and then we'll transfer one of our existing tables into the new schema.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=106)** Let's move the customer's table into the schema.
>
> **[1:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=109)** It's currently in the dbo schema so I'll say TRANSFER dbo.Customers.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=116)** I'll run line number three, press the Execute button, it completes successfully, and then if I come over here to the Object Explorer panel, right click on tables and choose Refresh, you'll see that the customer's table has been moved into the new sales schema.
>
> **[2:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=132)** Now, if you wanted to create a brand new table in Schema, you would simply specify it in the create table statement.
>
> **[2:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=140)** For instance, you would say create table sales.payment profiles, for example and then continue on defining the tables columns.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=149)** Now, when you start using schema in your database, you'll need to pay more attention to your select statements.
>
> **[2:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=155)** If you don't specify what schema the table is in, then SQL Server can get a little bit confused.
>
> **[2:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=162)** It'll look into the user's default schema if they've been assigned to one, then it will look into the dbo schema.
>
> **[2:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=169)** And if the table isn't in either of those schema, it'll return an error.
>
> **[2:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=174)** To see what this looks like, let's take a quick trip into the WideWorldImporters database.
>
> **[2:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=178)** I'll ahead just select that and then press New Query.
>
> **[3:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=181)** Make sure that it says WideWorldImporters in this selection menu there.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=186)** Then I'll try selecting everything from the table named Cities.
>
> **[3:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=193)** Even though Cities is a valid table name, when I press the Execute button, it tells me that it doesn't know what I'm talking about.
>
> **[3:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=199)** In this case, we need to use the two-part naming system which uses the application schema.
>
> **[3:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=208)** So I'll select everything from Application.Cities and this time when I press Execute, it can correctly find the correct table and return the information.
>
> **[3:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=217)** So this is why it's important to get used to using the two-part naming system when referring to your tables.
>
> **[3:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=223)** Okay, let's go ahead and close this tab and we'll return back to the other one.
>
> **[3:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=228)** So how do we use schemas to control access to our tables?
>
> **[3:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=232)** Well, we have a database user named Octavia.
>
> **[3:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=236)** She's been granted permission to read data out of any table in the Red30Tech database but she can't write data anywhere.
>
> **[4:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=245)** We can give Octavia elevated permissions in just the tables that are in the sales schema so that she can add records to those tables only.
>
> **[4:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=254)** This makes it easy to keep her out of the other tables that aren't in the sales schema.
>
> **[4:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=259)** To do this, I'll come down to line number five.
>
> **[4:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=262)** Then we're going to grant insert permission.
>
> **[4:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=267)** We're going to do this on schema.
>
> **[4:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=270)** Then I need two colons.
>
> **[4:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=273)** We'll follow that with the name of schema that we want to grant the insert permission on, sales.
>
> **[4:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=278)** Then I'll specify TO and the user account that I want to grant these permissions to, Octavia.
>
> **[4:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=287)** We'll finish the statement with the semicolon and that will allow her to have insert permission or in other words, permission to add rows of data to any table in the sales schema.
>
> **[4:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=299)** She still won't be able to edit existing records though.
>
> **[5:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=302)** Alternatively, you could grant her update or delete permissions as well if you specifically wanted the user to be able to edit or delete records.
>
> **[5:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=312)** I'll just leave Octavia with insert permission only so she can only add new rows, but not modify anything.
>
> **[5:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=319)** Let me highlight line number five and press Execute to elevate her permissions.
>
> **[5:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=325)** Now we can go ahead and test it out.
>
> **[5:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=327)** I'm going to close this tab here and not save any changes to the script.
>
> **[5:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=331)** Then I'm going to scroll up here and collapse my connection that uses my Windows authentication account, and we'll take a look at the connection that we have made with Octavia account personally.
>
> **[5:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=342)** Let's expand the databases folder and you might need to right click on this and choose Refresh.
>
> **[5:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=347)** Now, if we try and go into the KinetEco database and expand it, we're still going to get an error that she can't access the KinetEco database.
>
> **[5:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=354)** We really didn't give her any permissions in there anyway.
>
> **[5:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=357)** Let's go ahead and say okay to that.
>
> **[5:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=359)** However, she should be able to get into the Red30Tech database now, and in fact, expand all of the tables.
>
> **[6:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=367)** Now, Octavia has read-only access to all of the tables in the Red30Tech database through her login permissions that we set up in the previous movie.
>
> **[6:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=376)** So if I right click on the orders table in the dbo schema, I can say Select Top 1000 Rows and it should return the data.
>
> **[6:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=384)** I can close this and take a look at the sales.customers table.
>
> **[6:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=387)** Right click, Select Top 1000 Rows and she can read that data as well.
>
> **[6:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=392)** She should not be able to edit or insert anything into the products table though, since it's not part of the sales schema.
>
> **[6:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=398)** Let's go ahead and close this tab.
>
> **[6:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=400)** I'll right click on Products and choose Edit Top 200 Rows.
>
> **[6:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=406)** If I try and make any changes here, for instance I'll just change this price to $6 and press Enter, I'll get an error.
>
> **[6:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=413)** It says that UPDATE permission was denied.
>
> **[6:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=416)** Octavia does not have permission to make that change.
>
> **[6:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=419)** Let's go ahead and say, okay and I'll close the tab.
>
> **[7:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=422)** And actually, when I try and close the tab, it gives me that same error.
>
> **[7:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=424)** So what I need to do is press OK then press Escape to return this value to its original value, and then I can close the tab.
>
> **[7:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=432)** Now, we did grant insert permission in the sales schema so if everything's working as intended, Octavia should be able to input a new record into the sales.customers table.
>
> **[7:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=443)** Let's right click on that one and choose Edit Top 200 Rows.
>
> **[7:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=447)** Then if I click the button over here at the very bottom of the window to move to the new row at the bottom, I can start filling in the details for a new customer.
>
> **[7:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=455)** I'll skip the customer ID column and come over to the first name column.
>
> **[7:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=459)** I'll enter the name Marcus Winters who lives at 123 Main Street in Los Angeles and the state of CA or California.
>
> **[7:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=475)** When I press Enter, that value or that new row is successfully added into the data table.
>
> **[8:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=482)** So using schemas, we're able to give Octavia insert permission on any tables in the sales schema.
>
> **[8:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-schemas?u=76281980&t=489)** So using schemas, we've further compartmentalized access to our data tables to ensure that people are allowed to do the things that they need to do but deny them access to other areas of the database.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), delete (2), continue (1), case, (1), this, (1)
> **Env Vars:** sql (3), schema (2), create (1), alter (1), transfer (1)
> **UI Navigation:** click on (5), scroll up (1)
> **CLI Commands:** make (4), find (1)
> **Definitions:** stands for (1), is a  (1), in other words (1)
> **Analogies:** for instance (2), for example (1)
> **Prerequisites:** you'll need (1), set up (1)
> **SQL:** update (1)

#### Dynamic data masking
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=0)** - [Instructor] Dynamic data masking is another feature of SQL Server that helps protect the security of your data.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=7)** When enabled, it allows users to query information out of the data tables, but it will apply various obfuscation techniques to make the data less readable.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=17)** This is different from a full encryption, in that the values are masked on the SQL server side before being sent to the user.
>
> **[0:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=24)** You've probably seen this technique applied when you type in your password into a web form, where the individual characters that you type get replaced by an asterisk or a round bullet character on the screen.
>
> **[0:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=37)** Dynamic data masking is applied on specific columns in a data table.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=41)** In order to edit the table's design, you need to have the correct permissions to run alter table statements.
>
> **[0:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=48)** So I've gone ahead and logged backed into the server with my personal Windows account, Adam.
>
> **[0:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=55)** This gives me the system administrator privileges that I need to execute these statements.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=60)** First, let's go ahead and review the data from the customer's table.
>
> **[1:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=64)** Make sure you're targeting the Red30Tech database.
>
> **[1:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=66)** I'm just going to execute that, and then I'll select everything from sales.customers.
>
> **[1:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=72)** So here is the raw data that's currently stored in the database.
>
> **[1:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=76)** Currently the addresses are fully exposed.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=79)** We can obfuscate this data with dynamic data masking.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=84)** Let me scroll down on the script here, so I can see line number 9 all the way down to line number 15.
>
> **[1:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=91)** In order to apply dynamic data masking, we're going to alter the table sales.customers.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=96)** Then we'll alter the column address and we'll add masked width and then a specific function.
>
> **[1:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=103)** Dynamic data masking has a number of functions that can be applied to your data, depending on what it is and what you want to expose.
>
> **[1:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=111)** The default function will convert text data into all capital letter Xs and numbers into zeros.
>
> **[1:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=118)** We also have functions specific for email data.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=122)** This will reveal only the first character and [the.com](https://the.com) portion of the obfuscated email address.
>
> **[2:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=129)** Random can be applied to numeric data and will instead replace the original values with random numbers within the range that you specify.
>
> **[2:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=138)** And then the partial function will allow you to build a custom string that exposes a specific number of characters at the beginning or the end, and it fills in the middle with the padding character that you specify.
>
> **[2:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=149)** For instance, you could display two characters at the beginning, five hyphens, and then the last character.
>
> **[2:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=156)** So let's go ahead and run this statement.
>
> **[2:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=158)** I'm going to run lines 9 and 10, and actually don't need to select anything below that because these are all commented out.
>
> **[2:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=165)** So with running line number 9 and 10, I'll press execute and it completes successfully.
>
> **[2:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=171)** Now, if I view the data again by selecting everything from sales.customers and press execute, well that actually looks like nothing has changed.
>
> **[3:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=180)** That's because my current user account is privileged enough to see the unmasked values.
>
> **[3:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=186)** So now let's go over to Octavia's account instead.
>
> **[3:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=189)** I'm going to minimize my current connection in the Object Explorer and expand Octavia's account.
>
> **[3:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=195)** Then we'll expand the Red30Tech database, where we have the customer's table there.
>
> **[3:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=200)** Let me right click on the Red30Tech database, and we'll say new query to open a query connected to Octavia's login.
>
> **[3:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=207)** Then I'll select everything out of that table.
>
> **[3:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=213)** We'll select everything from sales.customers and press execute.
>
> **[3:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=217)** This time we get a completely different result.
>
> **[3:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=220)** Octavia only has select data permission on the table and she hasn't been granted the unmasked permission.
>
> **[3:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=227)** So she's seeing the masked version of our addresses, and they're all represented by the letter X.
>
> **[3:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=233)** So Octavia is only seeing the obfuscated data in the address column, not the full value.
>
> **[3:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=239)** Dynamic data masking is good for these types of situations where you need to provide people with some portion of the values stored in a table, but not reveal the full text.
>
> **[4:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=249)** However, if a user is able to write their own queries against the database, then it is possible for them to figure out the individual values that are being hidden.
>
> **[4:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=258)** For instance, Octavia could write a query to find all of the addresses where the street number starts with the number one, and then check if the second number is a two.
>
> **[4:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=268)** Eventually, if given enough time, she could deduce the value for every record in the table.
>
> **[4:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=275)** So don't think of dynamic data masking as a true alternative to encryption, especially for users that have the ability to write their own queries.
>
> **[4:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-data-masking?u=76281980&t=283)** But in the right situations, Dynamic data masking is another tool that can help you control who has access to what information.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (3)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** sql (2)
> **UI Navigation:** scroll down (1), click on (1)
> **Analogies:** for instance (2)
> **URLs:** [the.com](https://the.com) (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you need to have (1)

#### Always On data encryption
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=1)** - [Instructor] Encrypting the data that SQL Server stores provides the most secure method for data storage.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=7)** With the Always Encrypted feature of SQL Server, encryption and decryption keys are stored outside of the server and connected to user accounts or external applications.
>
> **[0:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=18)** That means that SQL Server doesn't store the unencrypted data.
>
> **[0:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=22)** Values are encrypted before they're sent to the server and they're decrypted after they're retrieved.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=28)** So even if someone were to obtain a copy of your database, the data would be useless without the decryption keys.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=36)** Ensure that you're logged into your Windows Authentication account, and then right click on the Red30Tech database.
>
> **[0:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=42)** Point to Tasks and you'll see the option to Encrypt Columns.
>
> **[0:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=47)** This will start up the Always Encrypted wizard.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=50)** On the first page, we get a description of the feature.
>
> **[0:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=53)** Go ahead and press Next.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=56)** On this page, we'll select which columns in the database we want to encrypt.
>
> **[1:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=61)** Now in the Red30Tech database, we don't have any credit card information, so I'm just going to demonstrate the process using the City and the State fields in the customers table.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=71)** I'll expand the sales.Customers table and place a check mark for City and State.
>
> **[1:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=77)** Then we need to choose an encryption type.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=79)** For the type, we have two different options, either deterministic or randomized.
>
> **[1:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=84)** Deterministic encryption will always create the same results for a given input.
>
> **[1:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=90)** This makes it possible to still create indexes and joins on these values even though SQL Server doesn't know what the original data was.
>
> **[1:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=98)** Randomized is a more secure option, but it prevents searching, joining, or indexing based on these columns.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=106)** I'll choose Deterministic for both of the columns.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=110)** The encryption key will be generated by the wizard, so I'll leave it set to New.
>
> **[1:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=115)** Go ahead and press Next.
>
> **[1:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=117)** On this page, we'll create the key.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=120)** Since keys are stored outside of the database server, we need to choose whether to store them in the Windows Certificate Store on your computer or in an Azure Key Vault online.
>
> **[2:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=131)** I'll choose my Window Certificate Store.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=134)** Press the Next button.
>
> **[2:16](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=136)** That'll give you the option to proceed and finish now, or you can generate a script to run the process later.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=142)** I'll choose to proceed and finish now and press Next.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=145)** That'll give us some summary details and then press Finish.
>
> **[2:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=150)** It's going to take a few minutes for a SQL Server to generate the encryption and decryption keys, and encrypt the values that are already stored in the database.
>
> **[2:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=160)** When it's done, we can see all the details, and it looks like everything passed.
>
> **[2:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=163)** I'll press the Close button and that finishes the wizard.
>
> **[2:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=167)** So now we can see what happened.
>
> **[2:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=168)** Let's go into the Red30Tech database.
>
> **[2:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=170)** I'll right click the sales.Customers table and choose Select Top 1000 Rows.
>
> **[2:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=176)** Now, if I scroll across to the right, you'll see that the City and the State values have been replaced with these Cipher text values.
>
> **[3:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=184)** For users with the right permissions though, they can be decrypted to reveal the actual data.
>
> **[3:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=190)** The wizard created a master key for my Windows login account.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=194)** So to view the decrypted data, I just need to use that key when I log in to SQL Server.
>
> **[3:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=200)** Let's go ahead and close this tab.
>
> **[3:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=202)** Then I will select my connection here in the Object Explorer panel and click the Disconnect button.
>
> **[3:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=208)** Next, I'll click the Connect button and I'll reconnect using my Windows Authentication account.
>
> **[3:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=215)** Before I press the Connect button though, press the Options button, and then click the Always Encrypted tab.
>
> **[3:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=222)** Finally, you'll choose this check box here to enable Always Encrypted.
>
> **[3:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=227)** That will use my user accounts encryption keys to decrypt those values.
>
> **[3:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=231)** Now I can press the Connect button to reconnect to my server.
>
> **[3:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=235)** Finally, we'll go into the Databases folder, expand the Red30Tech database and the Tables folder, right click sales.Customers and choose Select Top 1000 Rows.
>
> **[4:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=246)** This displays a little information window about the option to parameterize your always encrypted data.
>
> **[4:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=252)** I'll go ahead and choose to enable this.
>
> **[4:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=254)** And finally, it shows me the data that's in the table and you can see that it's decrypted, both these City and the State columns using my decryption keys stored for my user account.
>
> **[4:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=266)** So that's how the Always Encrypted feature works.
>
> **[4:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=269)** When you're done experimenting with the feature, it might be a good idea to return the example database back to its original state.
>
> **[4:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=276)** To do this, you can run through the wizard again and reverse the changes.
>
> **[4:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=279)** Let me close this tab and I will right click on the Red30Tech database, point to Tasks and choose Encrypt Columns.
>
> **[4:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=286)** I'll press the Next button here.
>
> **[4:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=288)** Then I'll open up sales.Customers.
>
> **[4:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=291)** I'll select the City field and change this from Deterministic back to Plaintext.
>
> **[4:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=296)** We'll do the same thing for the State column.
>
> **[4:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=298)** Press the Next button, Next again, Next again, and press Finish.
>
> **[5:04](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=304)** That'll go through and decrypt the data stored in SQL Server.
>
> **[5:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=308)** When it's done, you can close the wizard.
>
> **[5:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=311)** Then you can select your account again, disconnect from the server, and finally reconnect.
>
> **[5:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=318)** I'll press the Options button on the Connect to Server dialogue window.
>
> **[5:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=321)** And then in the Always Encrypted tab, I'll turn that check box off again.
>
> **[5:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=326)** Finally, I'll press Connect and that reconnects me to my server.
>
> **[5:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=330)** I can then go into the Databases, Red30tech, Tables, and finally right click sales.Customers and Select Top 1000 Rows.
>
> **[5:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=339)** I'm no longer using encryption, so I can see the plain text data as it originally was in the database.
>
> **[5:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=346)** At this point, you can also delete the master encryption keys that were created in your Windows Certificate store.
>
> **[5:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=352)** To do that, you're going to need to search your Windows account for user certificates.
>
> **[5:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=359)** That'll bring up the Manage user certificates control panel,
>
> **[6:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=371)** Personal folder, and then click on Certificates.
>
> **[6:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=374)** Here you'll find the Always Encrypted Certificate that expires exactly four years from today.
>
> **[6:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=379)** Let me right click on that and choose Delete.
>
> **[6:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=383)** Windows will prompt me and it tells me that I won't be able to read encrypted data using their certificate, which we actually don't have any anymore.
>
> **[6:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/always-on-data-encryption?u=76281980&t=389)** I'll say Yes, and that'll remove it from my system.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), finally, (4), delete (2), type. (1), type, (1)
> **Env Vars:** sql (7)
> **UI Navigation:** click on (4), select the (1)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 9. Monitoring and Management

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Explore the role of system databases
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/explore-the-role-of-system-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/explore-the-role-of-system-databases?u=76281980&t=0)** - [Narrator] In the Object Explorer, at the top, in the Databases Folder, we have a folder for the System Databases.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/explore-the-role-of-system-databases?u=76281980&t=7)** These four databases, master, model, msdb and tempdb, are required for the server to operate.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/explore-the-role-of-system-databases?u=76281980&t=15)** Now while it's okay to dig in them with select queries to see what they contain, at no point should you attempt to modify their contents.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/explore-the-role-of-system-databases?u=76281980&t=23)** So don't alter their tables, don't add or delete any records.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/explore-the-role-of-system-databases?u=76281980&t=27)** SQL Server has a number of built-in dynamic management views, console commands, and system stored procedures that will allow you to safely interact with these databases.
>
> **[0:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/explore-the-role-of-system-databases?u=76281980&t=37)** So it's likely that you won't ever need to access them directly anyway.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/explore-the-role-of-system-databases?u=76281980&t=41)** But if you're curious as to what they do, let's take a quick tour.
>
> **[0:45](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/explore-the-role-of-system-databases?u=76281980&t=45)** The master database contains tables and views that are essential to the functionality of the entire server.
>
> **[0:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/explore-the-role-of-system-databases?u=76281980&t=52)** These tables store information about login accounts, system settings, and information about all of the user databases that the server contains.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/explore-the-role-of-system-databases?u=76281980&t=60)** If you delete the master database, or if it becomes corrupted, or the hard drive that the master database is on is unreachable, then you can't even start SQL Server.
>
> **[1:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/explore-the-role-of-system-databases?u=76281980&t=70)** This database in particular is critical.
>
> **[1:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/explore-the-role-of-system-databases?u=76281980&t=75)** The model database acts as a template for all new databases created on the server.
>
> **[1:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/explore-the-role-of-system-databases?u=76281980&t=81)** So if your use of SQL Server requires databases to be configured in a specific way, you can make those changes in the model database and they'll apply to every new database that you create.
>
> **[1:34](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/explore-the-role-of-system-databases?u=76281980&t=94)** Msdb is used for scheduling jobs to run in the background using something called SQL Server Agent and to run things such as SQL Server's Database Mail and Service Broker accounts.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/explore-the-role-of-system-databases?u=76281980&t=106)** This database also keeps track of the location and history of database backups that occur in the instance.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/explore-the-role-of-system-databases?u=76281980&t=114)** And finally, we have tempdb.
>
> **[1:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/explore-the-role-of-system-databases?u=76281980&t=116)** This is a temporary storage location that SQL Server uses when moving records around.
>
> **[2:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/explore-the-role-of-system-databases?u=76281980&t=122)** When you rebuild indexes, or move a large number of records in your user databases, it's likely that SQL Server will temporarily write some or all of that data into the tempdb database until the operation is complete.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/explore-the-role-of-system-databases?u=76281980&t=137)** Tempdb gets thrown away and recreated every time the server restarts.
>
> **[2:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/explore-the-role-of-system-databases?u=76281980&t=142)** And since tempdb is a database just like any other, it actually gets created based on the template provided by model, just like any other database.
>
> **[2:32](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/explore-the-role-of-system-databases?u=76281980&t=152)** Now I've always thought it was really interesting that SQL Server uses databases to manage databases, and the circular chicken and egg logic of that arrangement will drive you crazy if you think about it, how it works.
>
> **[2:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/explore-the-role-of-system-databases?u=76281980&t=164)** Just know that they are an essential component of your SQL Server instance, and that it's probably best just to leave them alone and let them do their thing.

> [!info]- Semantic Content
>
> **Env Vars:** sql (9)
> **Code Keywords:** delete (2), let (2), finally, (1)
> **Analogies:** just like (2), such as (1)
> **Exercise Files:** template (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### Prevent excessive TempDB autogrowth
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/prevent-excessive-tempdb-autogrowth?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/prevent-excessive-tempdb-autogrowth?u=76281980&t=0)** - [Instructor] Whenever your SQL Server instance is restarted, the system database, tempdb, is recreated.
>
> **[0:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/prevent-excessive-tempdb-autogrowth?u=76281980&t=7)** If your workload requires a large amount of space in tempdb to function efficiently, then you might be hitting a bottleneck of tempdb being too small and having to Autogrow up to an appropriate size every time the server restarts.
>
> **[0:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/prevent-excessive-tempdb-autogrowth?u=76281980&t=21)** You can minimize this disruption by resizing tempdb to a more appropriate size for your usage.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/prevent-excessive-tempdb-autogrowth?u=76281980&t=28)** To view the current size of tempdb, just right click on it and choose properties.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/prevent-excessive-tempdb-autogrowth?u=76281980&t=35)** Then on the files tab, we'll see its current settings.
>
> **[0:38](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/prevent-excessive-tempdb-autogrowth?u=76281980&t=38)** Right now it's set up to start at eight megabytes in size for each of the three files.
>
> **[0:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/prevent-excessive-tempdb-autogrowth?u=76281980&t=43)** We then also have the Autogrowth size, as well as its maximum size that it's allowed to grow to.
>
> **[0:49](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/prevent-excessive-tempdb-autogrowth?u=76281980&t=49)** Now you can change this initial size to whatever you want.
>
> **[0:52](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/prevent-excessive-tempdb-autogrowth?u=76281980&t=52)** For instance, you might want to change it up to a hundred megabytes for each of the files instead of just a limit of eight megabytes.
>
> **[0:59](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/prevent-excessive-tempdb-autogrowth?u=76281980&t=59)** You can also change its Autogrowth and Maxsize.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/prevent-excessive-tempdb-autogrowth?u=76281980&t=63)** Click the ellipsis button over here to make any changes that you prefer.
>
> **[1:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/prevent-excessive-tempdb-autogrowth?u=76281980&t=69)** With these changes in place, tempdb will no longer have to resize quite as often.
>
> **[1:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/prevent-excessive-tempdb-autogrowth?u=76281980&t=75)** Another performance enhancing change that you might consider is to ensure the Recovery model of tempdb is set to simple.
>
> **[1:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/prevent-excessive-tempdb-autogrowth?u=76281980&t=83)** You can find that on the options page.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/prevent-excessive-tempdb-autogrowth?u=76281980&t=86)** And the property is here at the very top.
>
> **[1:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/prevent-excessive-tempdb-autogrowth?u=76281980&t=89)** In the Simple Recovery mode, the log files will automatically reclaim space to keep them as small as possible.
>
> **[1:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/prevent-excessive-tempdb-autogrowth?u=76281980&t=97)** Typically, you do not want to have your tempdb database in the Full Recovery model, which would keep all of the log files full.
>
> **[1:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/prevent-excessive-tempdb-autogrowth?u=76281980&t=106)** So by pre-allocating extra space to match your expected workload, tempdb will get created at the size that you need.
>
> **[1:53](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/prevent-excessive-tempdb-autogrowth?u=76281980&t=113)** And you won't have to spend time Autogrowing when it runs out of room.
>
> **[1:57](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/prevent-excessive-tempdb-autogrowth?u=76281980&t=117)** And by making sure the Recovery model is set to Simple, you'll ensure that the files stay as small as possible.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** function (1)
> **Env Vars:** sql (1)
> **UI Navigation:** click on (1)
> **Analogies:** for instance (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Review the SQL Server error log
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/review-the-sql-server-error-log?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/review-the-sql-server-error-log?u=76281980&t=0)** - [Instructor] SQL Server maintains an error log of issues that it's encountered while running.
>
> **[0:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/review-the-sql-server-error-log?u=76281980&t=5)** These logs can help you troubleshoot problems and see other events that the system has flagged.
>
> **[0:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/review-the-sql-server-error-log?u=76281980&t=11)** To view the server's logs in the object explorer underneath your connection, find the Management folder.
>
> **[0:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/review-the-sql-server-error-log?u=76281980&t=17)** Inside of there is a folder for SQL Server Logs.
>
> **[0:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/review-the-sql-server-error-log?u=76281980&t=20)** That Logs folder will have a number of different files, one for the current log and a whole bunch of archived logs.
>
> **[0:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/review-the-sql-server-error-log?u=76281980&t=27)** To view their contents, right click on the folder, point to View and choose SQL Server Log.
>
> **[0:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/review-the-sql-server-error-log?u=76281980&t=35)** That brings up the log viewer.
>
> **[0:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/review-the-sql-server-error-log?u=76281980&t=37)** On the left, you can activate and deactivate any of the log files that you want to review.
>
> **[0:41](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/review-the-sql-server-error-log?u=76281980&t=41)** And on the right is a list of the different items that they contain.
>
> **[0:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/review-the-sql-server-error-log?u=76281980&t=46)** By default, they get represented reversed chronologically, so the most current or the most recent events appear at the very top.
>
> **[0:56](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/review-the-sql-server-error-log?u=76281980&t=56)** In the toolbar at the top, you can export the log file, refresh your view, or filter and search through the individual items.
>
> **[1:03](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/review-the-sql-server-error-log?u=76281980&t=63)** You can click on any line and you'll see the details down below.
>
> **[1:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/review-the-sql-server-error-log?u=76281980&t=68)** For instance, here's a log item when we logged into Octavia's account for the first time.
>
> **[1:13](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/review-the-sql-server-error-log?u=76281980&t=73)** This generated the error that the password of the account must be changed.
>
> **[1:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/review-the-sql-server-error-log?u=76281980&t=79)** These details include the date and time the event was logged, as well as a detailed description about the event.
>
> **[1:26](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/review-the-sql-server-error-log?u=76281980&t=86)** This information can be useful for tracking down potential issues that your server is suffering from or for troubleshooting login errors or other problems that you encounter in SQL Server.

> [!info]- Semantic Content
>
> **Env Vars:** sql (4)
> **UI Navigation:** click on (2), in the toolbar (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Code Keywords:** default, (1)
> **Analogies:** for instance (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### Dynamic management views
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=0)** - [Instructor] Dynamic management views, or DMVs, return information about the state or the settings of your SQL Server instances.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=9)** This information is useful for diagnosing problems and tuning performance.
>
> **[0:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=14)** Just like other views on your database Dynamic Management Views combine columns and data from the internal system tables stored in the master database and display it in easy to access configurations.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=28)** Dynamic Management Views come in two scopes: server and database.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=33)** Server scoped DMVs will require VIEW SERVER STATE permission on the server in order to execute them.
>
> **[0:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=40)** Database scoped DMVs require VIEW DATABASE STATE permission.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=44)** So in order to view their contents users must have the appropriate permissions granted to them.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=51)** Once you have the required permission level, running a dynamic management view is just like running any other view that you may create on your own data.
>
> **[1:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=60)** You'll select individual columns from the view to access their content.
>
> **[1:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=65)** Microsoft has stated that the contents of each view is subject to change between SQL Server versions.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=71)** So avoid using SELECT * to obtain all of the views columns if storing the SELECT statement in production code.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=78)** But if you're just taking a one-off look within ad hoc query to get familiar with their content, then SELECT * is just fine.
>
> **[1:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=88)** Now, there are way too many DMVs to cover in this movie, but I do want to touch on some of the more useful ones.
>
> **[1:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=95)** The first one I want to look at is called Sys dot Dmdb File Space Usage.
>
> **[1:40](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=100)** You can see it on line number five and six in this script.
>
> **[1:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=103)** Let me go ahead and just execute it.
>
> **[1:47](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=107)** This Dynamic Management View will display information about the size of each file used in the database.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=114)** You can scroll across to the right to see all the different columns of information that it contains.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=120)** The next one I want to look at is called Sys.dm EXEC Connections on lines 10 and 11.
>
> **[2:10](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=130)** This one collects and returns information about the connections established to this instance of SQL Server, and it shows you the details of each connection, including the time that they connected, their account ID numbers, and some additional parameters over here to the right.
>
> **[2:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=147)** The next one I want to look at is called sys.dm DB index usage stats.
>
> **[2:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=153)** Let me just run line 16 down to 19.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=157)** This one returns counts of how many times each index has been accessed and the time that they were last used.
>
> **[2:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=164)** This particular DMV can be useful for identifying indexes that your system is spending resources to maintain, but are never actually being used by users.
>
> **[2:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=175)** You'll see the column over here to the right that defines when the last time it was used.
>
> **[3:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=181)** So these are just a couple of the DMVs that I use frequently, but there are many many more.
>
> **[3:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=187)** Depending on the type of work that you do, there may be others that will help you keep a detailed eye on the operation of your database server.
>
> **[3:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=194)** You can find out more information about all of the dynamic management views that SQL Server has built in by reviewing the documentation.
>
> **[3:22](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=202)** This list continues to grow as Microsoft adds new views into the system with each new version of SQL Server.
>
> **[3:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/dynamic-management-views?u=76281980&t=209)** If you find yourself taking on a database or a system administrator role, I would highly recommend taking a look at the technical documentation on the topic and perusing the more than two dozen categories of DMVs presented here.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5), select (3), view (2), state (2), server (1)
> **Code Keywords:** require (2), let (2)
> **SQL:** select (3)
> **Definitions:** is called (3)
> **CLI Commands:** find (2)
> **Analogies:** just like (2)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### Database Console Commands (DBCC)
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=0)** - [Instructor] SQL Server has a number of built-in commands that will check the structure of your databases and provide information that could be useful when troubleshooting problems.
>
> **[0:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=9)** Collectively, they're called database console commands or DBCC commands.
>
> **[0:15](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=15)** There are four categories of commands, maintenance miscellaneous, informational, and validation.
>
> **[0:24](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=24)** If you scroll down on this page you'll find each category broken down with links to the documentation on the individual DBCC commands.
>
> **[0:33](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=33)** Now, when it comes to monitoring your database and looking for potential corruption in the files, there is one of these commands that stands out as the most important and it should definitely be in your toolbox.
>
> **[0:44](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=44)** It's a validation statement and it's called CheckDB.
>
> **[0:48](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=48)** Let's see how to use it.
>
> **[0:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=50)** I'm going to run DBCC CheckDB on line number eight but I also want to make sure I'm targeting the Wide World Importers database.
>
> **[0:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=58)** So let me highlight lines five down through eight and press execute.
>
> **[1:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=62)** CheckDB validates the data in all disc-based tables and it runs a check sum validation on all the memory-optimized file groups.
>
> **[1:11](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=71)** It does this by calling a couple of other DBCC commands that you can run individually if you'd like.
>
> **[1:18](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=78)** One called CheckAlloc, or C-H-E-C-K-A-L-L-O-C, checks the consistency of disc space allocation structures.
>
> **[1:27](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=87)** CHECKTABLE is run on every table and view in the database which checks their structure and pages for corruption.
>
> **[1:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=96)** CHECKCATALOG checks for catalog consistency.
>
> **[1:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=99)** Then CHECKDB verifies the content of every indexed view, validates links between files on disc and the metadata stored in the table for file stream enabled databases.
>
> **[1:50](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=110)** And then it finally validates these service broker data.
>
> **[1:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=114)** Now, that's a lot of checks that it does, and eventually it'll display the results in the messages window.
>
> **[2:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=120)** You can quickly scroll through this list and if you see any red text that indicates an error message that should be reviewed.
>
> **[2:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=128)** At the very bottom is a summary, which hopefully indicates that no problems were identified.
>
> **[2:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=134)** In my results, it's this line right here.
>
> **[2:17](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=137)** It says, CHECKDB found zero allocation errors and zero consistency errors in the Wide World Importer's database.
>
> **[2:25](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=145)** Now, CHECKDB also has limited ability to perform repairs if it does identify any problems.
>
> **[2:31](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=151)** However, Microsoft strongly urges that you restore from a backup instead of relying on these repair features.
>
> **[2:37](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=157)** If you do want to see what those look like though I have the line on number 13 of the script here, that shows you how to use the repair feature.
>
> **[2:46](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=166)** In this case, you could use DBCC CHECKDB against the Wide World Importers database and use the feature called repair allow data loss.
>
> **[2:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=175)** Additionally, there's other options to repair fast or repair build instead.
>
> **[3:02](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=182)** Repair allow data loss will de-allocate pages effectively wiping out the data.
>
> **[3:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=187)** This can have consequences in regards to referential integrity of your tables.
>
> **[3:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=192)** The other options repair fast, which actually doesn't do anything and is only present for backwards compatibility with older systems.
>
> **[3:20](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=200)** And then you have the safest option which is repair rebuild.
>
> **[3:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=203)** This will perform actions that will not result in data loss such as rebuilding indexes if they're found to be compromised.
>
> **[3:30](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=210)** Now, it's interesting to note that when the database console command is executed it actually creates an internal snapshot of your database, basically a copy, and then it runs checks against that.
>
> **[3:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=223)** This prevents potential concurrency problems that might arise if someone is trying to access the same data that's being checked.
>
> **[3:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=231)** There are a few cases in which the snapshot isn't created though.
>
> **[3:55](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=235)** For instance, if the database is already read-only or in a single user mode.
>
> **[4:01](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=241)** Now, if you're working in a large database, CHECKDB might take a while to complete.
>
> **[4:06](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=246)** If you're using file groups in your database, you can spread out the load by checking individual file groups, perhaps on alternate days.
>
> **[4:14](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=254)** I have an example of that script on line 16.
>
> **[4:21](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=261)** With the CheckFileGroup parameter, you simply specify the name of the file group or its ID.
>
> **[4:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=268)** CheckFileGroup will then verify the allocation and structural integrity of all of the tables and indexes in that file group.
>
> **[4:35](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=275)** Here, zero will mean the primary file group.
>
> **[4:39](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=279)** You can also specify its name.
>
> **[4:42](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=282)** No index here specifies that the non-clustered indexes will be ignored and only results for clustered indexes and heaps will be returned.
>
> **[4:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=291)** In other words, just the tabular data.
>
> **[4:54](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=294)** We also can use the width clause to include some additional options.
>
> **[4:58](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=298)** For instance, physical only will not check data records but focus solely on the structures of the data pages, headers and the structure of the files on disk.
>
> **[5:08](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=308)** Estimate only, will simply figure out how much space is required in Temp DB in order to create the snapshot needed to run the check, given all of the other parameters.
>
> **[5:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=319)** So these and many of the other database console commands are your first line of defense in checking your databases for consistency and corruption.
>
> **[5:29](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/database-console-commands-dbcc?u=76281980&t=329)** Working them into a regular maintenance plan is critical to detecting problems early on.

> [!info]- Semantic Content
>
> **Env Vars:** dbcc (5), checkdb (5), sql (1), checktable (1), checkcatalog (1)
> **Code Keywords:** let (2), case, (1)
> **Analogies:** for instance (2), such as (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1), in other words (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/next-steps?u=76281980&t=0)** - [Adam] I'd like to thank you for joining me in this exploration of SQL Server 2022.
>
> **[0:05](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/next-steps?u=76281980&t=5)** I think this is going to be a fantastic new release of SQL Server, and I'm excited to have you on board for the journey.
>
> **[0:12](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/next-steps?u=76281980&t=12)** While we covered a good number of the features of the product, there's always more to learn when it comes to the world of database administration.
>
> **[0:19](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/next-steps?u=76281980&t=19)** Here's a couple of recommendations for where to go next.
>
> **[0:23](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/next-steps?u=76281980&t=23)** First, I highly recommend taking a standalone course on the Transact SQL language.
>
> **[0:28](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/next-steps?u=76281980&t=28)** Everything that you do in SQL Server will benefit from a deeper understanding of the wide range of capabilities of SQL.
>
> **[0:36](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/next-steps?u=76281980&t=36)** On this front, keep an eye on LinkedIn Learning for my upcoming course, querying SQL Server 2022.
>
> **[0:43](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/next-steps?u=76281980&t=43)** In that course, I'll cover writing select queries and using functions that'll help you squeeze the most information out of your data.
>
> **[0:51](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/next-steps?u=76281980&t=51)** For more exposure to the theory behind relational database design, I encourage you to check out a couple of my other courses, including Learning Relational Databases or the five courses in the Database Foundation series, starting with Intro to Databases.
>
> **[1:07](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/next-steps?u=76281980&t=67)** Once again, I've been Adam Wilburt.
>
> **[1:09](https://www.linkedin.com/learning/microsoft-sql-server-2022-essential-training/next-steps?u=76281980&t=69)** Thank you for joining me and I hope you have a great day.

> [!info]- Semantic Content
>
> **Env Vars:** sql (6)
> **Cross-References:** we covered (1)
> **Speakers:** - [adam] (1)


## Instructor

- [[Adam Wilbert]]

## Resources

- Exercise files available

## Skills Covered

- Microsoft SQL Server

## Path Context

### In [[Advance Your MS SQL Server Skills]]
← [[Introduction To Transact Sql]] | **2 of 9** | [[Querying Microsoft SQL Server 2022]] →

## Appears In

- [[Advance Your MS SQL Server Skills]]

## Related Courses

_Courses sharing skills:_

- [[SQL Server Fundamentals- Master Basic Query Techniques]] — Microsoft SQL Server
- [[SQL Server- Reporting Services]] — Microsoft SQL Server
- [[SQL Server Containerization- Modern Deployment Strategies for Data-Driven Organizations]] — Microsoft SQL Server
- [[SQL Server 2022 Administration]] — Microsoft SQL Server
- [[Implementing a Data Warehouse with SQL Server 2022]] — Microsoft SQL Server

---

[↑ Back to top](#)