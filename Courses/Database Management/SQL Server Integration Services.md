---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: sql-server-integration-services-2
url: "https://www.linkedin.com/learning/sql-server-integration-services-2"
duration_minutes: 148
duration: 2h 28m
level: Advanced
updated: 8/14/2023
learners: 196483
skills:
  - SQL Server Integration Services (SSIS)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGQfihJtXG1jQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619134123709?e=2147483647&amp;v=beta&amp;t=tl5I-AiD_kJMfkHl0Sg6gtNSmML7WIBC_ooesbpb6_A"
linkedin_topic: Database Management
learning_paths:
  - '[[Advance Your MS SQL Server Skills]]'
prev_courses:
  - '[[SQL Server Containerization- Modern Deployment Strategies for Data-Driven Organizations]]'
next_courses:
  - '[[SQL Server- Reporting Services]]'
path_nav: '[{"path":"Advance Your MS SQL Server Skills","position":8,"total":9,"prev":"SQL Server Containerization- Modern Deployment Strategies for Data-Driven Organizations","next":"SQL Server- Reporting Services"}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/sql-server-integration-services-ssis
status: not-started
created: 2026-04-21
---

![SQL Server Integration Services](https://media.licdn.com/dms/image/v2/C4E0DAQGQfihJtXG1jQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619134123709?e=2147483647&amp;v=beta&amp;t=tl5I-AiD_kJMfkHl0Sg6gtNSmML7WIBC_ooesbpb6_A)

# SQL Server Integration Services

> SQL Server Integration Services (SSIS) is one of the core add-on components to SQL Server. With SSIS, professionals can create automated workflows that streamline the process of consolidating data from a wide variety of sources. Through a process called ETL—extract, transform, and load—you can ingest and move data between systems such as other databases, flat data files, and even online repositori

> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2) | 2h 28m | Advanced | 196K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Adam Wilbert]]

## Resources

- Exercise files available

## Skills Covered

- SQL Server Integration Services (SSIS)

## Table of Contents

### Introduction

#### Integrate your data with SQL Server Integration Services (SSIS)
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/integrate-your-data-with-sql-server-integration-services-ssis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/integrate-your-data-with-sql-server-integration-services-ssis?u=76281980&t=0)** - [Adam] In the modern business environment, useful data can be stored in a wide variety of file formats and data platforms.
>
> **[0:06](https://www.linkedin.com/learning/sql-server-integration-services-2/integrate-your-data-with-sql-server-integration-services-ssis?u=76281980&t=6)** Bringing all of that data together in a single, unified resource can enable important and useful analysis, but it's not a job that should be completed manually.
>
> **[0:15](https://www.linkedin.com/learning/sql-server-integration-services-2/integrate-your-data-with-sql-server-integration-services-ssis?u=76281980&t=15)** Hi, my name is Adam Wilbert, and I've been helping businesses and government agencies organize and add value to their data collections for over a decade.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-integration-services-2/integrate-your-data-with-sql-server-integration-services-ssis?u=76281980&t=23)** In this course, I'll show you how to apply SQL Server Integration Services to the problem of efficiently consolidating data with techniques that'll save you time and effort.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-integration-services-2/integrate-your-data-with-sql-server-integration-services-ssis?u=76281980&t=32)** Integration Services is a powerful addition to SQL Server.
>
> **[0:35](https://www.linkedin.com/learning/sql-server-integration-services-2/integrate-your-data-with-sql-server-integration-services-ssis?u=76281980&t=35)** It automates complex tasks so that you can rest easy, knowing that they're being performed in exactly the same way every time.
>
> **[0:42](https://www.linkedin.com/learning/sql-server-integration-services-2/integrate-your-data-with-sql-server-integration-services-ssis?u=76281980&t=42)** So join me in my course on LinkedIn Learning and see how you can apply Integration Services to your own data needs.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2)
> **Definitions:** is a  (1)
> **Speakers:** - [adam] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/what-you-should-know?u=76281980&t=0)** - [Instructor] In order to get the most out of this course, you should have a little familiarity with SQL Server.
>
> **[0:05](https://www.linkedin.com/learning/sql-server-integration-services-2/what-you-should-know?u=76281980&t=5)** My expectation is that you're able to install a local copy of the SQL Server Database Engine, restore a couple of sample databases from a backup using SQL Server Management Studio, and are able to create databases on the server.
>
> **[0:17](https://www.linkedin.com/learning/sql-server-integration-services-2/what-you-should-know?u=76281980&t=17)** If you know a little bit about writing Transact-SQL SELECT statements, then that'll be helpful as well.
>
> **[0:21](https://www.linkedin.com/learning/sql-server-integration-services-2/what-you-should-know?u=76281980&t=21)** If you need a quick introduction, or feel like you might want a refresher on some of these topics, then a great place to start is with my course, Learning SQL Server 2019.
>
> **[0:29](https://www.linkedin.com/learning/sql-server-integration-services-2/what-you-should-know?u=76281980&t=29)** It's a short course at just over an hour long, and will give you everything that you need to make the most of your time here learning integration services.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5), select (1)
> **CLI Commands:** make (1)
> **SQL:** select (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Set up the example database
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=2)** with the actions that I'm performing in this course, then you'll need to set up you computer to match mine.
>
> **[0:07](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=7)** This isn't a requirement though, to your own databases and server configurations, but I thought it would be helpful to outline how I have my system configured.
>
> **[0:16](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=16)** For this course, you'll need to have two instances of SQL Server installed.
>
> **[0:19](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=19)** I'll be running them on the same machine, but they can be remote servers, as well.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=23)** As long as you can connect to both of them in SQL Server Management Studio, you'll be fine.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=28)** I'm currently logged into both instances, as you can see in the object explorer pane.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=32)** One is the default instance.
>
> **[0:34](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=34)** It's just called MS SQL Server and it's on a computer named Windows 10 dash PC.
>
> **[0:39](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=39)** The second instance has a name, and it's called SQL Server 2019.
>
> **[0:43](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=43)** The first server will have two sample databases added to it.
>
> **[0:46](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=46)** It's these ones right here, Wide World Importers and the Wide World Importers data warehouse.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=50)** You can get them from Microsoft SQL Server Samples Respository On this page, to Wide World Importer Sample Databases, and inside of here, we'll find two links.
>
> **[1:03](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=63)** One for the Wide World Importers dash full dot B-A-K file, and the second one for the Wide World Importers DW dash full dot B-A-K file.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=71)** These two databases will give us plenty of data to work with in the course.
>
> **[1:15](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=75)** Once they're downloaded, you're going to move them into the SQL Server backups folder, and you can typically find that on your C drive inside of program files, the folder for Microsoft SQL Server, then the folder that represents your server instance that you want to work with.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=88)** In my case, it's this one right here, MSSQL Server.
>
> **[1:31](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=91)** Inside of there, you'll go into MSSQL, and then finally into backup.
>
> **[1:35](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=95)** If you get a warning message there, saying that you don't have access to this folder, just press the OK button, and you'll be let in.
>
> **[1:40](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=100)** Then you'll place both of those backup files here.
>
> **[1:43](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=103)** Then, back inside of Management Studio, you can right click on the databases folder in the server, We'll switch to device and then click on the ellipsis button on the far right.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=114)** We're going to add a new backup media.
>
> **[1:57](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=117)** Then finally, you'll select the files and press OK a couple of times to reinstall them on your system.
>
> **[2:02](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=122)** I've already done that, so I'm going to press cancel a bunch to dismiss all of these windows.
>
> **[2:06](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=126)** That'll place both files here on your database server.
>
> **[2:09](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=129)** The other thing that we need is an empty database to load data into, using Integration Services.
>
> **[2:14](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=134)** I'm going to place that on my second server instance.
>
> **[2:18](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=138)** and choose new database.
>
> **[2:21](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=141)** I'm simply going to give it a name of Kineteco, and press OK.
>
> **[2:26](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=146)** That'll create that new database on the second server instance.
>
> **[2:29](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=149)** That sets up the database server environment.
>
> **[2:32](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=152)** The last thing you'll need are the exercise files for the course.
>
> **[2:33](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=153)** exercise files for the course.
>
> **[2:35](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=155)** You can download them from the course's webpage, You can download them from the course's webpage, and I've placed them here on the desktop and I've placed them here on the desktop for easy access.
>
> **[2:39](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=159)** for easy access.
>
> **[2:40](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=160)** Once you've got everything set up, Once you've got everything set up, you're ready to follow along, as we explore you're ready to follow along, as we explore SQL Server Integration Services.
>
> **[2:43](https://www.linkedin.com/learning/sql-server-integration-services-2/set-up-the-example-database?u=76281980&t=163)** SQL Server Integration Services.

> [!info]- Semantic Content
>
> **Env Vars:** sql (9), mssql (2)
> **Prerequisites:** you'll need (3), set up (3)
> **Code Keywords:** case, (1), let (1), switch (1), finally, (1)
> **UI Navigation:** switch to (1), click on (1), select the (1)
> **CLI Commands:** find (2)
> **Exercise Files:** exercise files (2)
> **Definitions:** is an  (1)
> **Warnings:** warning (1)


### 1. Get Started with Integration Services

#### What is SSIS?
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/what-is-ssis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/what-is-ssis?u=76281980&t=0)** - [Instructor] It makes sense to start any course with an understanding of what exactly is about to be covered.
>
> **[0:04](https://www.linkedin.com/learning/sql-server-integration-services-2/what-is-ssis?u=76281980&t=4)** So let's begin by getting to know what SQL Server Integration Services is.
>
> **[0:08](https://www.linkedin.com/learning/sql-server-integration-services-2/what-is-ssis?u=76281980&t=8)** Integration Services, or SSIS, is a platform for building workflows that can automate and standardize complex data related tasks.
>
> **[0:17](https://www.linkedin.com/learning/sql-server-integration-services-2/what-is-ssis?u=76281980&t=17)** As the name would imply, it can help integrate data from a variety of sources including other SQL databases, Excel spreadsheets, FAT files, such as CSV and XML files, and pull it all together into a single destination database.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-integration-services-2/what-is-ssis?u=76281980&t=30)** It does this through a process called ETL, or extract, transform, and load.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-integration-services-2/what-is-ssis?u=76281980&t=36)** The extract process fetches data and copies it from a source location, through transforms you manipulate that data, filter it, cleanse it, standardize its formatting, and perform other organizational tasks to prepare it for the final stage, loading it into a destination database.
>
> **[0:53](https://www.linkedin.com/learning/sql-server-integration-services-2/what-is-ssis?u=76281980&t=53)** SSIS can also perform additional tasks beyond those covered in an ETL process.
>
> **[0:58](https://www.linkedin.com/learning/sql-server-integration-services-2/what-is-ssis?u=76281980&t=58)** You can automate downloading files from an FTP server, email status reports, or create a backup of a database before and after a load.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-integration-services-2/what-is-ssis?u=76281980&t=66)** There's a long list of different tasks that you can add to an Integration Services package.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-integration-services-2/what-is-ssis?u=76281980&t=71)** To do this you'll need to work in two different environments.
>
> **[1:14](https://www.linkedin.com/learning/sql-server-integration-services-2/what-is-ssis?u=76281980&t=74)** In order to develop a package of tasks, you'll use a graphical designer called SQL Server Data Tools, which is a component of Microsoft's flagship application development program, Visual Studio.
>
> **[1:26](https://www.linkedin.com/learning/sql-server-integration-services-2/what-is-ssis?u=76281980&t=86)** Here you'll specify what tasks you want to run, connect them to the appropriate data sources and destinations, and define the sequence in which they'll execute.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-integration-services-2/what-is-ssis?u=76281980&t=94)** At the end of the design phase you'll have a flowchart-like diagram that describes how data moves into the system, what happens to it, how it exits, and all of the additional actions that are triggered along the way.
>
> **[1:45](https://www.linkedin.com/learning/sql-server-integration-services-2/what-is-ssis?u=76281980&t=105)** The other environment that you'll work in is SQL Server Management Studio.
>
> **[1:49](https://www.linkedin.com/learning/sql-server-integration-services-2/what-is-ssis?u=76281980&t=109)** If you've worked with SQL Server databases before, then you're almost certainly familiar with this program.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-integration-services-2/what-is-ssis?u=76281980&t=114)** In SSMS, you'll manage the Integration Services database that stores the packages that you've developed in Visual Studio.
>
> **[2:00](https://www.linkedin.com/learning/sql-server-integration-services-2/what-is-ssis?u=76281980&t=120)** From here, you'll set schedules and other triggering events that'll run the packages and execute the tasks that you've put together in your production databases.
>
> **[2:09](https://www.linkedin.com/learning/sql-server-integration-services-2/what-is-ssis?u=76281980&t=129)** In order to get all of this to work, you first need to install the Integration Services service as a shared feature of SQL Server.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-integration-services-2/what-is-ssis?u=76281980&t=135)** The service will run in the background just like SQL Server and allow you to connect to multiple data sources and destinations and store your developed task packages in a secure, access controlled environment.

> [!info]- Semantic Content
>
> **Env Vars:** sql (7), ssis (2), etl (2), fat (1), csv (1)
> **Tools:** visual studio (2)
> **Definitions:** is a  (2)
> **Analogies:** such as (1), just like (1)
> **Prerequisites:** you'll need (1), install (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Add SSIS to a SQL Server instance
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=0)** - [Instructor] Integration Services is installed on top of SQL Server, and it's recommended that you use a dedicated server for extraction, transform, and loading processes on hardware that's separate from your main production databases.
>
> **[0:20](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=20)** and it's all done through the same installer, used for SQL Server.
>
> **[0:24](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=24)** If you don't yet have SQL Server installed on your computer, the process starts by downloading the installer for the version and edition of SQL Server that you want to use.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=36)** for test databases and non-production environments, or download a trial of Enterprise.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=41)** I'll be using the evaluation edition for SQL Server 2019 in this course, Click on the download now link, choose your platform, I'll choose the Windows option, and then click the button for previewing SQL Server 2019.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=55)** That'll allow me to download the evaluation file.
>
> **[0:59](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=59)** This small file, when run, will allow you to choose the custom installation method, and it'll download the rest of the installation media to your computer.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=66)** After that's complete, it'll start up the SQL Server Installation Center.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=70)** Now, if you already have a local instance of SQL Server that you want to use for Integration Services, then it's likely that you can skip all of that and jump right into the Installation Center.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=79)** You can find a link to this program inside of your Start Menu.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=82)** I'll scroll down until I get to the Microsoft SQL Server folder.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=87)** And inside of there, we'll find a link to the Installation Center.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=94)** to make changes to my device.
>
> **[1:36](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=96)** This is where we'll either create a new server instance, or add Integration Services to an existing instance.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=102)** On the left sidebar, choose installation.
>
> **[1:45](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=105)** Then, I'll click on the link at the very top to create a new SQL Server standalone installation, That'll prompt me to locate the installation files, or the media.
>
> **[1:55](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=115)** On my computer, that was downloaded into the C drive, and into a folder called SQL2019CTP3.0.
>
> **[2:04](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=124)** onto the evaluation folder and choose okay.
>
> **[2:07](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=127)** Your folder name is going to depend on the version and edition of SQL Server that you've chosen to work with.
>
> **[2:12](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=132)** From here, you'll move through the standard installation process for SQL Server.
>
> **[2:16](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=136)** I'll press next on this page, it'll run some checks, I'll press next on this page, and it'll take me down to the installation type step.
>
> **[2:26](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=146)** I already have a SQL Server instance installed, so I'm going to choose to add features to an existing instance, and choose it from the dropdown list.
>
> **[2:33](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=153)** Then I'll press the next button to switch over to the feature selection step.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=158)** The feature that we want can be found underneath the category of share features here, and I want to find the checkbox for Integration Services, which is this one right there.
>
> **[2:47](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=167)** to my local SQL Server instance, so it's already checked.
>
> **[2:50](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=170)** You can also choose the Scale Out master or worker, if you want to work with Scale Out groups that adjust hardware resources on the fly.
>
> **[2:57](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=177)** I've got these components installed as well, but you can leave them off for this course.
>
> **[3:02](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=182)** Though, if you're creating a new SQL Server instance Though, if you're creating a new SQL Server instance at the same time, you'll also want to go back at the same time, you'll also want to go back up to the very top and make sure up to the very top and make sure that database engine services is also checked.
>
> **[3:07](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=187)** that database engine services is also checked.
>
> **[3:10](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=190)** With those choices made, you'll simply proceed With those choices made, you'll simply proceed through the rest of the installation process.
>
> **[3:14](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=194)** I haven't actually made any changes I haven't actually made any changes to my system, so I'm getting this warning message.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=196)** to my system, so I'm getting this warning message.
>
> **[3:18](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=198)** I'll just say okay to dismiss this window.
>
> **[3:18](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=198)** I'll just say okay to dismiss this window.
>
> **[3:20](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=200)** Once the installation process completes on your computer, Once the installation process completes on your computer, you'll have Integration Services added as a shared resource you'll have Integration Services added as a shared resource for all your local instances of SQL Server.
>
> **[3:26](https://www.linkedin.com/learning/sql-server-integration-services-2/add-ssis-to-a-sql-server-instance?u=76281980&t=206)** for all your local instances of SQL Server.

> [!info]- Semantic Content
>
> **Env Vars:** sql (18), sql2019ctp3 (1)
> **CLI Commands:** find (3), make (3)
> **UI Navigation:** click on (2), scroll down (1), dropdown (1), checkbox (1)
> **Exercise Files:** download the (2)
> **Warnings:** warning (2)
> **Code Keywords:** switch (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Connect to the SSIS catalog database
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=0)** - As with other SQL Server services, you'll use configuration manager to verify that integration services is running on your computer.
>
> **[0:07](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=7)** You can find it in a folder on your start menu underneath the Microsoft SQL Server folder and it's right here.
>
> **[0:14](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=14)** SQL Server 2019 and I'm using the CTP 3.0 version and its configuration manager.
>
> **[0:19](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=19)** Let's go ahead and choose that application, allow it to make changes to my computer.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=23)** And then if you click on SQL Server services over in the left hand window, you'll see a list of all your different services, including integration services.
>
> **[0:31](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=31)** You can see that my installation is currently running and it's set to the start mode of automatic, just like my database engine.
>
> **[0:38](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=38)** To get additional details, you can double click on the service and that'll bring up the properties window.
>
> **[0:42](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=42)** Here you can start, stop, pause and restart the service.
>
> **[0:46](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=46)** And you can also use the buttons here on the toolbar to do the same.
>
> **[0:49](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=49)** So mine is currently running which is great.
>
> **[0:51](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=51)** Let's go ahead and close that properties window.
>
> **[0:53](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=53)** And I actually don't need to make any changes right now, So I'm going to close out of configuration manager.
>
> **[0:57](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=57)** Now let's connect to integration services using management studio.
>
> **[1:01](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=61)** One thing that's important to note is that integration services is very particular about what version of management studio that you're using.
>
> **[1:08](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=68)** You need to use the SSMS version that was released specifically for the version of SQL Server that integration services is installed on.
>
> **[1:16](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=76)** I'm using the SQL server 2019 database engine, so I need to use SSMS version 18.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=82)** If you're using an older version of SQL server, then you'll need an older version of management studio.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=87)** It can't be any newer or older than your database engine.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=90)** The other quirk is that you need to run management studio as an administrator.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=94)** Let me show you why.
>
> **[1:35](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=95)** If you open up SSMS and in the Connect to dialogue box I'll switch the server type to integration services.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=102)** For the server name, this is the SQL Server instance that it was added to.
>
> **[1:45](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=105)** So I'm going to type in Windows 10-PC, which is the name of my computer.
>
> **[1:49](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=109)** I'm using the default instance of SQL Server, so I don't need to add an additional instance name here.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=114)** When you press the connect button, you're going to get this error message.
>
> **[1:58](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=118)** To get around the error you need to close management studio and we'll return back into the start menu.
>
> **[2:05](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=125)** Now I've got the tile or the link to management studio pinned to my start menu right here, but you can also find it inside of a folder, inside of Microsoft SQL Server tools, and I'll find it right here.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=135)** In order to run this as an administrator, you need to right click on the tile, point to more and then choose run as administrator.
>
> **[2:23](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=143)** That will authorize your user account and you'll now be able to select integration services from the drop-down menu.
>
> **[2:32](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=152)** So for the server type, I'll switch it over to integration services.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=156)** Once again we'll need the server name in the way it was before.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=158)** And I'm going to use the Windows authentication mode.
>
> **[2:40](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=160)** This time when I press connect it lets me write in.
>
> **[2:43](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=163)** On the left side of the screen in the object explorer pane, you can see the contents of the integration services service, including any running packages if you have any and any store packages that are saved into the service.
>
> **[2:54](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-the-ssis-catalog-database?u=76281980&t=174)** And now you can start to browse the collections to see the different packages that are stored here.

> [!info]- Semantic Content
>
> **Env Vars:** sql (10), ssms (3), ctp (1)
> **Code Keywords:** let (4), switch (2), type, (1)
> **CLI Commands:** find (3), make (2)
> **UI Navigation:** click on (3)
> **Versions:** 3.0 (1), version 18 (1)
> **Analogies:** just like (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - as (1)

#### Explore SSIS packages
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=1)** to the immigration services service in management studio as an administrator, you're going to find two top level folders.
>
> **[0:07](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=7)** One for running packages and one for stored packages.
>
> **[0:10](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=10)** Running packages is exactly that, SSIS packages that are currently running.
>
> **[0:15](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=15)** This folder is probably going to be empty on your system as it is on mine.
>
> **[0:19](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=19)** The other one, stored packages, if I expand that we'll see we have two sub folders, one for file system and one for MSDB.
>
> **[0:25](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=25)** These are the different locations where we can save SSIS packages.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=30)** Either on the computer's file system or in the MSDB database.
>
> **[0:34](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=34)** You won't have anything on the file system right now.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=36)** If I click plus button you'll notice that it disappears, but if I expand MSDB we can expand the maintenance plans, which is currently empty and we have data collector which currently has a couple of active packages.
>
> **[0:46](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=46)** These data collector packages do things like collect and upload query activity.
>
> **[0:51](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=51)** Now, this MSDB location should sound familiar to you if you've ever explored the SQL server instance before.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=56)** It's the system database that's included when you first install SQL server.
>
> **[1:01](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=61)** Let's log in to the database engine and take a look.
>
> **[1:03](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=63)** I'll click on the connect object explorer button here at the top, the little plug icon, then I'll reload the connect the server window.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=69)** I'm going to switch this over to database engine and login to the primary database server for my computer.
>
> **[1:16](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=76)** When I press connect it gets added over here into the object explorer.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=79)** So now I have the integration services service here at the top and I have the database engine at the bottom.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=84)** I'm going to expand the database's folder and then open up system databases and here you'll find the MSDB system database.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=90)** Let's go into that.
>
> **[1:31](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=91)** I'll go into the tables folder and then expand system tables.
>
> **[1:35](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=95)** The details about the packages stored in MSDB can be found in a system table called sysssispackages.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=102)** Let's scroll down and find it.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=108)** Once you locate it go ahead and right-click on it The results show the same list of packages that we saw up in integration services.
>
> **[1:58](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=118)** You can see that they're appearing here in the name column of the results.
>
> **[2:01](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=121)** As you add packages to MSDB they will really get saved into this table but working with them in the integrations services object tree makes them easier to manage than digging into system tables.
>
> **[2:11](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=131)** So let's go ahead and collapse the database view and I'm also going to clear out this query.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=135)** The other location besides the MSDB system database where you can save packages Let's right-click on file system folder and choose new folder.
>
> **[2:26](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=146)** That will allow us to create a sub folder.
>
> **[2:28](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=148)** I'll simply call it test folder.
>
> **[2:32](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=152)** I'll press OK and we should now be able to expand that folder and see the new sub folder underneath.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=156)** Now let's see where this went on our file system.
>
> **[2:39](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=159)** I'm going to minimize management studio and open a file browser.
>
> **[2:44](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=164)** The default location where SSIS will store packages on the file system will be on the C drive inside of the program files folder then in Microsoft SQL server and then we need to find the folder that corresponds to the compatibility level of SQL server.
>
> **[2:58](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=178)** I'm working with SQL server 2019, which uses the compatibility level of 150 so I'm going to go into that folder.
>
> **[3:04](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=184)** Yours might be different depending on what version you're working with.
>
> **[3:08](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=188)** Once inside of there, find the DTS folder and then finally packages.
>
> **[3:12](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=192)** You should find the test folder that we just created in SSMS.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=196)** So this is where packages will get saved to the file system by default.
>
> **[3:19](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=199)** Okay, let's go back into management studio.
>
> **[3:21](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=201)** Like with so many other features of management studio there are several different things that you can do with the right-click menu.
>
> **[3:28](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=208)** For instance, if you right-click on the MSDB folder you can choose to create a new folder, import packages, upgrade packages and view some reports.
>
> **[3:37](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=217)** If you right-click on a package itself, for instance the first one that says PertCountersCollect, you can adjust the rolls of who has access to the package with this option here.
>
> **[3:46](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=226)** Go ahead and cancel out of that.
>
> **[3:47](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=227)** You also have the option of running the package.
>
> **[3:51](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=231)** This will bring up some configuration options and you can press the execute button at the bottom to run the package.
>
> **[3:57](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=237)** When you do, this progress window is going to open up.
>
> **[3:59](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=239)** Now, you're almost certainly going to get a bunch of warning messages here because we didn't actually go through the process of configuring the package for our specific system.
>
> **[4:07](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=247)** You can scroll through this progress window to see the different things that it's doing and at the very bottom we can see as well as the system times when those activities occurred.
>
> **[4:16](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=256)** Let's go ahead and close this window and we'll close the execute package utility window.
>
> **[4:20](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=260)** So using management studio we can log in to the integration services service to manage and run packages, but to find out what exactly these packages are doing but to find out what exactly these packages are doing and to construct our own SSIS packages, and to construct our own SSIS packages, we need one additional component we need one additional component called SQL server data tools.
>
> **[4:33](https://www.linkedin.com/learning/sql-server-integration-services-2/explore-ssis-packages?u=76281980&t=273)** called SQL server data tools.

> [!info]- Semantic Content
>
> **Env Vars:** msdb (9), sql (7), ssis (5), dts (1), ssms (1)
> **Code Keywords:** let (8), switch (1), default. (1)
> **CLI Commands:** find (8)
> **UI Navigation:** right-click (5), click on (1), scroll down (1)
> **Analogies:** for instance (2)
> **Warnings:** warning (1)
> **Prerequisites:** install (1)


### 2. SSIS Designer

#### Install SQL Server Data Tools (SSDT)
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=1)** - [Instructor] Integration services packages are created using SQL Server data tools.
>
> **[0:06](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=6)** You can install data tools as an extension to Microsoft's popular development environment, Visual Studio.
>
> **[0:13](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=13)** The process starts at visualstudio.[microsoft.com](https://microsoft.com).
>
> **[0:16](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=16)** Click over to the Downloads page.
>
> **[0:19](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=19)** If you have a license or want to test out the Professional or the Enterprise editions, you can get a free trial here.
>
> **[0:25](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=25)** But for educational and open-source projects, you can get the free Community edition, which is what I'm going to be using.
>
> **[0:31](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=31)** I'll go ahead and click on the button to download the installer.
>
> **[0:35](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=35)** Then once it's done downloading, we can close the browser, and we'll go into the Downloads folder to install it.
>
> **[0:44](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=44)** I'll allow it to make changes to my computer, and then I need to press this Continue button to get everything set up.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=52)** To install SQL Server Data Tools, we need to scroll down on the first tab until you get to the section called Other Toolsets, and here you'll find an option for data storage and processing.
>
> **[1:03](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=63)** Go ahead and place a check mark there, and over on the right you should see SQL Server Data Tools has already been selected.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=70)** Next, come down to the bottom and press the Install button.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=73)** This will take quite a while to download everything, so we'll just skip ahead to the next step.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=78)** When the installation finally completes, you'll be prompted to sign into your Microsoft Azure account, if you have one.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=84)** I'm going to choose the option here at the bottom that says "Skip this for now" instead.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=88)** Then we can choose the color theme that we want to work with.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=90)** I like the blue theme.
>
> **[1:31](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=91)** I'll choose that one, but feel free to choose whichever you'd like.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=94)** And then click Start Visual Studio.
>
> **[1:36](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=96)** While that's launching, you can also close the installer here in the background.
>
> **[1:41](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=101)** The last step of the process is to add the Integration Services extension to Visual Studio.
>
> **[1:46](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=106)** To do that, click the link at the bottom of the Getting Started window that says "without code," to open up Visual Studio without using a project.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=114)** That'll just load the main interface.
>
> **[1:56](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=116)** Then go up to the Extensions menu, and click Manage Extensions.
>
> **[2:01](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=121)** On the left, make sure you have the online extension selected, and then we'll do a search.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=128)** Type in integration services.
>
> **[2:13](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=133)** That should reveal the SQL Server Integration Services Projects option.
>
> **[2:17](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=137)** Click the Download option, and that'll bring up the web browser again, and download another installer file to the system.
>
> **[2:24](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=144)** Once that's done, I'll close my browser again, and we can actually exit out of Visual Studio.
>
> **[2:29](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=149)** Once again, I'll go down into my Downloads folder, and we'll install that extension.
>
> **[2:34](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=154)** Let's go ahead and start that EXE file.
>
> **[2:37](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=157)** We can choose our language that we want to use.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=158)** I'll choose English, and then click the next button.
>
> **[2:41](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=161)** Finally, we're going to install this product into the instance of Visual Studio that we just installed, which for me is the Community Edition 2022.
>
> **[2:48](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=168)** I'll press the install button.
>
> **[2:50](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=170)** Once again, we're going to wait as this process completes.
>
> **[2:55](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=175)** When that's done, go ahead and close that installer.
>
> **[2:57](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=177)** So now we're ready to create an integration services project.
>
> **[3:01](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=181)** just to make sure that everything worked as intended, let's go ahead and load up Visual Studio one more time.
>
> **[3:06](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=186)** I'm going to just go ahead and find it over here in my Start menu.
>
> **[3:09](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=189)** Let me expand it there, and we'll launch Visual Studio 2022.
>
> **[3:14](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=194)** On the Getting Started window, choose the option to create a new project.
>
> **[3:19](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=199)** Then we'll do a search on the templates for Integration Services template.
>
> **[3:24](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=204)** We'll find the project listed here.
>
> **[3:26](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=206)** I'll go ahead and select that and press Next.
>
> **[3:30](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=210)** I'll leave the default name of Integration Services Project1.
>
> **[3:33](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=213)** You can name yours whatever you'd like.
>
> **[3:36](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=216)** Also, you might want to note the default file path for your project's files.
>
> **[3:40](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=220)** Go ahead and press the Create button.
>
> **[3:44](https://www.linkedin.com/learning/sql-server-integration-services-2/install-sql-server-data-tools-ssdt-22695053?u=76281980&t=224)** If everything is installed correctly, you should now see the Getting Started with SSIS page here, as well as the SSIS toolbox on the left side of the screen, that lists out all the different tasks that we can add to our integration services package.

> [!info]- Semantic Content
>
> **Prerequisites:** install (7), getting started (3), set up (1), make sure you have (1)
> **Tools:** visual studio (8)
> **Env Vars:** sql (4), ssis (2), exe (1)
> **CLI Commands:** make (3), find (3)
> **Code Keywords:** let (3), continue (1), interface (1), finally, (1)
> **Exercise Files:** download the (1), template (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **UI Navigation:** click on (1)

#### View SSIS solutions and projects
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=0)** - [Instructor] When you create a new SQL Server data tools project in Visual Studio, a number of different things happen.
>
> **[0:05](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=5)** I want to focus your attention on the window on the right hand side of the screen called the Solution Explorer.
>
> **[0:11](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=11)** This is basically a catalog of all the different files that make up your project, the most important of which being the actual SSIS package that'll be executed by SQL Server.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=18)** It's this file right here called package.dtsx.
>
> **[0:22](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=22)** This file is currently open in the main portion of the screen.
>
> **[0:25](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=25)** You can see the name here across the tab there.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=27)** Now there's a number of different things going on in the Solution Explorer.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=30)** So let's take a look by starting here at the top.
>
> **[0:33](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=33)** The top level item is called a solution.
>
> **[0:35](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=35)** Solutions are containers that can hold several different projects, which is useful organizing related business applications together.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=41)** You can add another project to the solution by right clicking the solution line, pointing to add and choosing new project.
>
> **[0:48](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=48)** That'll bring up the add a new project window where you can add an additional SSIS project or maybe a SQL Server database project or anything else that might be related to the work that you're doing.
>
> **[0:58](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=58)** I'm going to close this window without adding a second project to my solution.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=62)** Under the solution line is the actual line that starts our project group.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=66)** Here I have just the one project, the Integration Services Project.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=70)** And under that are all the different files that make up the project.
>
> **[1:12](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=72)** There's a parameter file, a folder that organizes databases and file connection details, a folder for the actual package, some packets parts and a miscellaneous folder for storing additional documents that might be useful while you work, such as notes and other code files that you want to reference.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=87)** Along the top of the Solution Explorer Window, there are a couple of buttons that you can play with.
>
> **[1:32](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=92)** This one with the little window icon and the little arrows will switch your view of the solution's contents to display exactly how they're stored on your file system.
>
> **[1:41](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=101)** Some people find this to be a more natural way to work with their projects.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=104)** I'm going to switch it back to the standard view.
>
> **[1:46](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=106)** This'll organize each file based off its purpose.
>
> **[1:49](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=109)** You also have some buttons for syncing projects or collapsing and viewing all of the different files inside of the groups.
>
> **[1:55](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=115)** The wrench icon will open up the properties for each file.
>
> **[1:58](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=118)** I'm going to click on the project heading line and then click the wrench to open up the properties for the project.
>
> **[2:03](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=123)** Here I'm going to make a small change.
>
> **[2:05](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=125)** I'm going to switch over here to the configuration properties on the left-hand side of the window and then change the target server version from the default of SQL Server 2017 to my actual server version, which is 2019.
>
> **[2:17](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=137)** I'll press apply and I'm going to get this warning message here.
>
> **[2:19](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=139)** And I'll just say yes to this.
>
> **[2:21](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=141)** Then I'll go ahead and reset the project.
>
> **[2:23](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=143)** I'll say okay.
>
> **[2:24](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=144)** And then I can go ahead and open up the package again.
>
> **[2:26](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=146)** Just double-click on it to open it back up.
>
> **[2:29](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=149)** Now you'll notice that the Integration Services Project line no longer has the 2017 notation after it.
>
> **[2:34](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=154)** Another useful feature in the Solution Explorer is the search bar here.
>
> **[2:39](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=159)** If you build complex integration services packages, it can be handy to find files using a simple text search.
>
> **[2:44](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=164)** For instance, if I just search for DTSX, it'll immediately jump me to the package file there.
>
> **[2:49](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=169)** Let's go ahead and click the X to clear out the filter.
>
> **[2:51](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=171)** And finally, I'll point out that if you close the Solution Explorer by clicking on the X in the upper right-hand corner, you can always get back by going to the view menu and coming down here to the Solution Explorer.
>
> **[3:00](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=180)** You'll notice the shortcut key is control alt L.
>
> **[3:05](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=185)** That'll bring it right back onto your screen.
>
> **[3:07](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=187)** So that's the Solution Explorer in Visual Studio.
>
> **[3:09](https://www.linkedin.com/learning/sql-server-integration-services-2/view-ssis-solutions-and-projects?u=76281980&t=189)** It helps you view and sort your projects and packages to bring all the files needed together in one organized space.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (3), let (2), this. (1), finally, (1)
> **Env Vars:** sql (4), ssis (2), dtsx (1)
> **CLI Commands:** make (3), find (2)
> **Tools:** visual studio (2)
> **UI Navigation:** click on (1), double-click (1)
> **Analogies:** such as (1), for instance (1)
> **Definitions:** is called (1)
> **Warnings:** warning (1)

#### Define control flow tasks
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=0)** - [Instructor] In Visual Studio we currently have an integration services project started, which gives us an empty package that you can see over here on the main portion of the screen.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=9)** This is an area called the Design Surface.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=12)** If you close the Package tab, you can get it right back by double clicking on it over here in the Solution Explorer.
>
> **[0:17](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=17)** Now, the Design Surface has a number of different tabs across the top.
>
> **[0:20](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=20)** Right now we're looking at the Control Flow tab.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=23)** This is where you'll define what your integration services package is going to do.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=28)** You do that by dragging tasks from the Toolbox on the left into the Design Surface and then connect them together to build a flow chart-like diagram that defines the sequence that they should be executed in.
>
> **[0:39](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=39)** So let's take a look at the Toolbox.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=41)** At the top are a pair of tasks that are grouped together under the Favorites heading.
>
> **[0:46](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=46)** If you click on a task to select it, the information window at the bottom of the screen gives you a description of what that task is going to do.
>
> **[0:53](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=53)** So when I click on the Data Flow Task, it says that the task moves data between sources and destinations while performing transformations and cleansing.
>
> **[1:01](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=61)** If the description is getting cut off you can make the information window larger just by dragging on this top edge.
>
> **[1:07](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=67)** The other task underneath Favorites is called Execute SQL.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=71)** This task executes SQL statements or store procedures in a relational database.
>
> **[1:16](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=76)** Under the Favorites group are additional common tasks followed by some group containers, if you scroll down.
>
> **[1:23](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=83)** And these are useful for creating looping procedures or to simply organize your Design Surface.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=88)** And then at the very bottom of the list are some other tasks here in a separate group.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=94)** You can rearrange any of these tasks by right clicking on them and moving them into a different category.
>
> **[1:39](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=99)** So for instance, if you find that you use the Back Up Database Task regularly you can right-click on it and choose to move it up to Favorites.
>
> **[1:45](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=105)** It'll move it up here into the top category.
>
> **[1:47](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=107)** Let's go ahead and right-click on it again and move it back to Other.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=111)** So let's create a simple control flow diagram using these tasks.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=114)** I want to create a package that'll create a table in the Kinetico database, and then add a couple of records, and then back up the database.
>
> **[2:00](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=120)** I'll start by adding in Execute SQL Task by double clicking on it in the toolbox.
>
> **[2:06](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=126)** That'll add a reference over here in the control flow diagram.
>
> **[2:10](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=130)** You'll notice that it currently has a red X which means it's not ready to run, and if you hover your mouse over it it says that there is no connection manager specified.
>
> **[2:18](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=138)** That means that the task doesn't know what database it's supposed to execute SQL code in.
>
> **[2:23](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=143)** So we need to connect this task to the Kinetico database and we also need to specify the specific SQL code that we want the task to execute.
>
> **[2:30](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=150)** We can do both of those things in the editor window for this task.
>
> **[2:35](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=155)** Double click on the task icon to bring up the editor.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=158)** Here's where you'll configure the various properties that control exactly what the task does.
>
> **[2:43](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=163)** On the General page we're going to find the connection properties.
>
> **[2:46](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=166)** For connection type there's several different options using the dropdown menu.
>
> **[2:51](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=171)** We can connect to Excel files or a SQL mobile database, but you won't find anything that says SQL server.
>
> **[2:57](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=177)** That's because the connection to SQL server databases are done through something called Object Linking and Embedding, or OLE DB.
>
> **[3:04](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=184)** Let's go ahead and leave that one selected.
>
> **[3:06](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=186)** Then we'll come down to the next property for the actual connection.
>
> **[3:10](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=190)** I'll click here then click the dropdown menu and choose New connection.
>
> **[3:15](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=195)** On this screen, press the New button again to open the Connection Manager.
>
> **[3:19](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=199)** Using the server name dropdown menu choose the server instance that you want to connect to.
>
> **[3:24](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=204)** In my case, the Kinetico database is on a server named SQLSERVER2019.
>
> **[3:29](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=209)** It might take this dropdown menu a moment to populate, so just be patient while it updates.
>
> **[3:35](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=215)** If this dropdown menu doesn't populate with server names to select you can also type the name here into this box.
>
> **[3:41](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=221)** If you're connecting to the default instance you just need the name of the computer.
>
> **[3:45](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=225)** Otherwise, use the computer name, back slash, instance name.
>
> **[3:50](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=230)** Once you've selected the server you'll specify the login credentials here.
>
> **[3:53](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=233)** Now I'm just going to use the standard Windows authentication for my user account.
>
> **[3:57](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=237)** Next, we'll specify the actual database name.
>
> **[4:00](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=240)** Using the dropdown menu it shows me all the different databases that are on this server and I'll choose Kinetico from the dropdown list.
>
> **[4:05](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=245)** Then I'll press the Test Connection button to make sure everything's working, and it looks good.
>
> **[4:09](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=249)** I'll say OK, and say OK again.
>
> **[4:11](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=251)** And OK one more time to finish the connection.
>
> **[4:13](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=253)** Next, we need to specify what code this task is going to execute.
>
> **[4:17](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=257)** For these SQL statement property I'll click here and then click on the ellipsis button to bring up a small text window.
>
> **[4:22](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=262)** Here's where you're going to type in the transact SQL command that you want to execute.
>
> **[4:26](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=266)** I have one copied onto my clipboard that you can find in the exercise files, so I'm going to paste that in.
>
> **[4:31](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=271)** This script is going to remove the People table if it already exists, then create a new table called People and add a couple of records.
>
> **[4:37](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=277)** Press OK and then press OK again to finish configuring the task.
>
> **[4:42](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=282)** Notice that the red X icon is now gone and this task is ready to run.
>
> **[4:45](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=285)** Let's add one more task to the diagram.
>
> **[4:48](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=288)** Back in the toolbox I'm going to scroll down until I get to the other task category and I'm going to double-click on Backup Database.
>
> **[4:54](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=294)** That'll add in another task to the control flow diagram.
>
> **[4:57](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=297)** It comes in on top of the Execute SQL Task, so you can simply click on it and drag it into a new location in the diagram.
>
> **[5:04](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=304)** Then just like before, we need to configure the task.
>
> **[5:07](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=307)** Double-click on the icon to open it up in the editor.
>
> **[5:09](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=309)** First we need to connect to the server.
>
> **[5:11](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=311)** So over here I'll press the New button on the Connection line.
>
> **[5:14](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=314)** We'll give the connection a name, I'll call it Kinetico.
>
> **[5:19](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=319)** Then I'll click on the ellipsis button to choose the actual server.
>
> **[5:23](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=323)** It might take a moment for this window to open up, but once it does select the same server that we had before and press OK.
>
> **[5:29](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=329)** And I'm going to use Windows NT Integration Security, which is basically just Windows authentication.
>
> **[5:35](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=335)** I'll say OK and that creates my connection to the server.
>
> **[5:40](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=340)** Then in the databases drop-down we get to choose which database on the server that we want to back up.
>
> **[5:46](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=346)** You can choose all of them if you'd like, but I just want to target the Kinetico database.
>
> **[5:49](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=349)** So I'll come down here and place a check mark there and press OK.
>
> **[5:53](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=353)** You can then view a sample of the T-SQL code that'll be executed to actually run the the backup by clicking on this View T-SQL button and you'll see that it's listed out right there.
>
> **[6:00](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=360)** Let's press Close and then we can say OK to finished configuring the task.
>
> **[6:06](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=366)** At this point, we have a package that contains two tasks.
>
> **[6:09](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=369)** One will execute some SQL code and the other one will back up the database.
>
> **[6:13](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=373)** This is a good point to save the project and you can do that by pressing the disc icon up here on the toolbar or simply using the Ctrl + S shortcut key.
>
> **[6:21](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=381)** When you do that, you'll notice that the little asterisk icon here disappears from the tab.
>
> **[6:25](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=385)** This indicates that this package is currently in a saved state.
>
> **[6:29](https://www.linkedin.com/learning/sql-server-integration-services-2/define-control-flow-tasks-22694101?u=76281980&t=389)** The next thing that we need to do is define the sequence that these tasks will run in, and we'll do that with a precedence constraint next.

> [!info]- Semantic Content
>
> **UI Navigation:** dropdown (7), click on (6), scroll down (2), right-click (2), double-click (2)
> **Env Vars:** sql (14), ole (1), sqlserver2019 (1)
> **Code Keywords:** let (6), case, (1)
> **CLI Commands:** find (4), make (2)
> **Definitions:** is an  (1), is called (1), means that (1), is a  (1)
> **Analogies:** for instance (1), just like (1)
> **Prerequisites:** configure (2)
> **Tools:** visual studio (1)

#### Create a precedence constraint
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=0)** - [Male Instructor] The SSIS project now has two tasks: one that executes some SQL code and another that backs up the database.
>
> **[0:08](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=8)** If we run the project right now, both of these tasks you're going to execute at the same time.
>
> **[0:13](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=13)** I'd rather create the data table, enter the records first, using the execute SQL task, and then perform the back up after it.
>
> **[0:20](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=20)** We can control the sequence of the package executes tasks using something called precedence constraints.
>
> **[0:26](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=26)** Precedence constraints are depicted in the control flow diagram with lines and arrows that connect tasks together.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=32)** You'll notice that when you click the execute SQL task, for example, you'll get a green arrow below it.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=37)** To create the flow from one task to another, simply drag this arrow and drop it onto the next task.
>
> **[0:42](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=42)** In this case, I'm going to drag it and drop it on the back up database task.
>
> **[0:46](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=46)** Now, we're starting to visualize the flow chart of how this package will run.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=50)** The execute sequel task will run first.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=52)** Only when it's finished, will the back up database task start to run.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=55)** In integration services terminology, the execute sequel task is known as the precedence executable, and the back up database task is called the constrained executable.
>
> **[1:04](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=64)** The color of the arrow is important to pay attention to.
>
> **[1:07](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=67)** A green arrow, like the one we have now, indicates a successful completion of the precedence executable.
>
> **[1:12](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=72)** In other words, in this control flow, the back up database task will only run if the sequel task finishes successfully.
>
> **[1:20](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=80)** If there's an error, the backup task won't run.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=82)** You can control the type of precedence constraint by double clicking on the line to bring up the editor window.
>
> **[1:29](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=89)** The option that I want to look at is this value.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=93)** Right now it's set to success.
>
> **[1:35](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=95)** The other options that you have in the drop down menu are failure and completion.
>
> **[1:39](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=99)** Changing it to failure means that the back up task would only run if the sequel task fails for any reason.
>
> **[1:45](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=105)** Let's select that option and press okay.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=108)** You'll notice now that the line or the arrow has changed to a red color.
>
> **[1:52](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=112)** Double click on the line again to get back into the editor, and this time I'll change it to completion.
>
> **[1:57](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=117)** This sets up a situation where the back up will only run if the execute sequel task completes, regardless of whether it's finished successfully or failed.
>
> **[2:05](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=125)** As soon as either outcome occurs, then the backup database will run.
>
> **[2:09](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=129)** I'll say okay to this, and you'll notice that the line changes to a gray color, or it might be blue, depending on your accessibility settings.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=135)** So by changing the value of the precedence constraint, you can control the conditions under which each task will run.
>
> **[2:21](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=141)** As you create a control flow diagram linking multiple tasks and containers together, the flow chart might get a little bit messy and hard to follow.
>
> **[2:28](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=148)** You can adjust the lines to clean up the display by clicking once on the line until you see the control points, and then dragging each segment of the arrow around.
>
> **[2:37](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=157)** And if you have a lot of tasks, you can zoom in and out of the diagram using the slider on the right of the control surface.
>
> **[2:44](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=164)** You can either zoom it in, or zoom it back out.
>
> **[2:47](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=167)** Or you can press the button at the bottom to zoom to fit.
>
> **[2:49](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=169)** Let's go back into the editor now and take a look at a couple of additional options that we have.
>
> **[2:53](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=173)** Once again, I'll double click on the join line to bring up this editor.
>
> **[2:57](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=177)** First, I'm going to change the value back to success.
>
> **[3:00](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=180)** Then, let's take a look at this one here, called a valuation operation.
>
> **[3:04](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=184)** It's currently set to constraint.
>
> **[3:06](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=186)** The other options are expression, and then we have two combined operations, and and or.
>
> **[3:12](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=192)** Constraint will only look at the status of the precedence executable to determine whether to run the next task or not.
>
> **[3:19](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=199)** Using an expression, you can code a more complex logical statement, using functions, operators, and variables that evaluates to true or false.
>
> **[3:27](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=207)** This will allow you to reach out into your database or server instance to define when to execute a task based off of external factors.
>
> **[3:34](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=214)** I'm going to leave this set to constraint.
>
> **[3:37](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=217)** At the bottom of the editor, you have the option to specify what happens when there are multiple constraints on a task.
>
> **[3:43](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=223)** The logical and option will require that every constraint is satisfied before execution will occur.
>
> **[3:49](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=229)** Logical or will only require that one constraint is met before the task will execute.
>
> **[3:54](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-precedence-constraint?u=76281980&t=234)** So using all of these options together will allow you to dial in the precise circumstances under which your control flow will process tasks in the diagram.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), require (2), case, (1), this, (1)
> **Env Vars:** sql (3), ssis (1)
> **Definitions:** is called (1), in other words (1), means that (1)
> **UI Navigation:** click on (2)
> **Analogies:** for example (1)
> **Speakers:** - [male (1)

#### Create a sequence container
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-sequence-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-sequence-container?u=76281980&t=0)** - [Instructor] A complex Control Flow can be better organized using Containers.
>
> **[0:04](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-sequence-container?u=76281980&t=4)** You'll find them in the Toolbox underneath their own heading.
>
> **[0:07](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-sequence-container?u=76281980&t=7)** Containers can be used to set up a looping structure to repeat tasks until a condition is met, or to simply group multiple tasks together into a single, meaningful unit of work.
>
> **[0:17](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-sequence-container?u=76281980&t=17)** The Sequence Container is the one to use when you simply want to group tasks together.
>
> **[0:21](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-sequence-container?u=76281980&t=21)** To add one to the design surface, double-click on it in the Toolbox, and that'll drop it down.
>
> **[0:25](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-sequence-container?u=76281980&t=25)** I'm going to zoom my view back out to 100%, just so I have some more room to work, and I'm going to drag and drop it over here on the right.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-sequence-container?u=76281980&t=32)** Now, you simply need to add tasks into the Container.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-sequence-container?u=76281980&t=36)** If you try and drag one of the existing tasks into the Container, for instance, this Execute SQL Task, I'm going to get this warning message that says I can't move a connected task into the new container because of the precedence constraint.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-sequence-container?u=76281980&t=47)** Let's go ahead and say OK to this.
>
> **[0:48](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-sequence-container?u=76281980&t=48)** However, if I click and drag a box around both of these tasks at once, that'll highlight both of them, and then I can drag them as a group and drop them into the Container.
>
> **[0:58](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-sequence-container?u=76281980&t=58)** Now, you can give the Container a more meaningful name by clicking on the title.
>
> **[1:03](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-sequence-container?u=76281980&t=63)** I'm going to change it to simply Kineteco People.
>
> **[1:08](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-sequence-container?u=76281980&t=68)** That'll help me remember that this task is adding a new people table into the database.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-sequence-container?u=76281980&t=73)** The Sequence Container can now be collapsed to free up space in the design by clicking on the arrow button over here on the right.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-sequence-container?u=76281980&t=78)** And you can even use the Container in precedence constraints by dragging lines into the top of the Container from other tasks, or connecting the result line on the bottom to additional tasks in the workflow.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-sequence-container?u=76281980&t=88)** And if you click on that line and have nowhere to connect it, simply press the Escape key on your keyboard to cancel the drag.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-sequence-container?u=76281980&t=94)** Sequence Containers also make it easy to disable groups of tasks all at once.
>
> **[1:38](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-sequence-container?u=76281980&t=98)** Right-click on the container, and choose the Disable option from the pop-up menu.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-sequence-container?u=76281980&t=102)** You'll notice that the icon changes to a grayed-out color.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-sequence-container?u=76281980&t=104)** This is useful to do when debugging your packages, or to perform other maintenance.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-sequence-container?u=76281980&t=108)** Alternatively, you can also right-click on it and choose to Enable it again, or you can right-click on it and choose Execute Container to execute only the tasks inside of the Container.
>
> **[1:58](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-sequence-container?u=76281980&t=118)** This can be helpful to isolate a group of tasks and run them separately for testing purposes.
>
> **[2:02](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-sequence-container?u=76281980&t=122)** So, there's a lot of different reasons why you might want to consider organizing your Control Flows using Sequence Containers.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-integration-services-2/create-a-sequence-container?u=76281980&t=128)** They can clean up the interface, organize the workflow, and can aid in debugging.

> [!info]- Semantic Content
>
> **UI Navigation:** right-click (3), double-click (1), drag and drop (1), click on (1)
> **Code Keywords:** let (1), this. (1), interface (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** sql (1)
> **Analogies:** for instance (1)
> **Warnings:** warning (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Run a package
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=0)** - [Narrator] When building and testing your packages, you'll typically run them from right here inside of Visual Studio.
>
> **[0:06](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=6)** Eventually, you'll want to export the packages to the Integration Services database to be scheduled and executed by SQL Server, and we'll look at that procedure later on in the course.
>
> **[0:15](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=15)** For now though, it's probably a good idea to make sure that our package is working as intended You can run a package immediately either by right clicking on it in the Solution Explorer and choosing Execute Package or if you have it open in the design surface, like I do now, you can come up here to the toolbar and choose the Start button.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=36)** That'll switch your view over and show you the status of each task.
>
> **[0:40](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=40)** Ours is going to complete pretty quickly, but as each task completes successfully, you'll see the green check mark icon up here.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=47)** Let me scroll down in this window a little bit so that we can see the status of each of our tasks.
>
> **[0:51](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=51)** In fact, I'm going to rearrange the size of these windows a little bit, just to give myself some more room, by clicking here and dragging down, that'll give me some more room up above.
>
> **[0:58](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=58)** So, now I can see that each task was completed successfully based off the icon.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=62)** Now at any point in the execution, you can switch over to the Progress tab to see the status of the execution results.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=70)** Here, it lists out each step.
>
> **[1:12](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=72)** So, first we go into the Kineteco People sequence container and then we have the different tasks inside.
>
> **[1:17](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=77)** Now it looks like these are backwards from our control flow where it lists the backup task first and then the execute SQL task below.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=84)** The tasks here are actually listed in alphabetical order.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=87)** So, they're not in the sequence that they were executed.
>
> **[1:29](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=89)** If you take a look at the start and the end times for the execute SQL task, you'll see that it starts and ends on the same second.
>
> **[1:35](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=95)** In fact, it took less than an eighth of a second to complete.
>
> **[1:39](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=99)** If you take a look at the start and the finish times for the execute SQL task, you'll see that they start and end at the same time.
>
> **[1:45](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=105)** In fact, it took about an eighth of a second to complete.
>
> **[1:49](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=109)** It also appears that the back up database task The results here are really not showing us times with enough precision.
>
> **[1:57](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=117)** So, you're just going to have to take my word for it that they were executed in the proper order.
>
> **[2:01](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=121)** When you're done reviewing the progress, you can click on the link in the status message that says that the package execution completed with success.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=128)** That'll take you back into design mode, or you could press the buttons on the toolbar to pause a long running package, you can stop debugging, or you can restart the package execution.
>
> **[2:19](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=139)** I'll click on the stop debugging button here to return back into design mode.
>
> **[2:23](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=143)** Then I'll simply switch back over to the Control Flow tab.
>
> **[2:26](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=146)** So, now that we've executed our package, let's switch over to Management Studio to verify that the package executed each task as we intended.
>
> **[2:33](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=153)** I've logged into both of my servers here.
>
> **[2:35](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=155)** So, I'm going to scroll down until I find the server with the Kineteco database.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=158)** Let's go ahead and expand that open.
>
> **[2:40](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=160)** I'll extend the Tables folder, and sure enough, there is the People table that was added with the execute SQL task.
>
> **[2:46](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=166)** Let's right-click on it and choose "Select Top 1000 Rows", and in the Results, we'll verify that it added both of those people.
>
> **[2:53](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=173)** So it looks good.
>
> **[2:54](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=174)** Let's also check on the database backup.
>
> **[2:57](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=177)** To do that, I'll right-click on the Databases folder, I'll choose Restore Database, and then in the Database Source, I'll use the dropdown menu to choose the Kineteco database.
>
> **[3:07](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=187)** Sure enough, we see that we do in fact have a backup set that was just created.
>
> **[3:12](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=192)** So it looks like our Integration Services package worked So it looks like our Integration Services package worked and successfully executed each task in the sequence.
>
> **[3:14](https://www.linkedin.com/learning/sql-server-integration-services-2/run-a-package?u=76281980&t=194)** and successfully executed each task in the sequence.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), switch (4)
> **UI Navigation:** scroll down (2), click on (2), right-click (2), dropdown (1)
> **Env Vars:** sql (5)
> **CLI Commands:** make (1), find (1)
> **Tools:** visual studio (1)
> **Speakers:** - [narrator] (1)


### 3. Control Flow Tasks

#### Understanding tasks in control flow
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/understanding-tasks-in-control-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/understanding-tasks-in-control-flow?u=76281980&t=0)** - [Instructor] In order to fully leverage integration services in your SQL Server environment, it's going to be important that you get familiar with the wide variety of tasks that are available to use in an SSIS package.
>
> **[0:11](https://www.linkedin.com/learning/sql-server-integration-services-2/understanding-tasks-in-control-flow?u=76281980&t=11)** Part of that will require that you spend some time exploring the toolbox in Visual Studio to see what each task does, and then think about how you could apply those tasks to your own situation and database's needs.
>
> **[0:22](https://www.linkedin.com/learning/sql-server-integration-services-2/understanding-tasks-in-control-flow?u=76281980&t=22)** Complex control flows are nothing more than a series of individual steps, so I encourage you to start small with just a single task or two and then work your way up to longer sequences.
>
> **[0:33](https://www.linkedin.com/learning/sql-server-integration-services-2/understanding-tasks-in-control-flow?u=76281980&t=33)** Because there are lots of different tasks to choose from, I thought it would be helpful to give a broad overview of the different categories of tasks that you could use before diving in to take a look at some of the specific tasks that you might find most helpful.
>
> **[0:45](https://www.linkedin.com/learning/sql-server-integration-services-2/understanding-tasks-in-control-flow?u=76281980&t=45)** First is the data flow task.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-integration-services-2/understanding-tasks-in-control-flow?u=76281980&t=47)** This is probably the most common task in integration services.
>
> **[0:51](https://www.linkedin.com/learning/sql-server-integration-services-2/understanding-tasks-in-control-flow?u=76281980&t=51)** This task extracts data from a variety of sources, applies column-level transformations, and loads data into a database.
>
> **[0:57](https://www.linkedin.com/learning/sql-server-integration-services-2/understanding-tasks-in-control-flow?u=76281980&t=57)** Next there are a number of data preparation tasks.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-integration-services-2/understanding-tasks-in-control-flow?u=76281980&t=60)** These tasks copy files and directories from local file systems or FTP sites, downloads files and data from the Internet, applies operations to XML documents, and profile data for cleansing.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-integration-services-2/understanding-tasks-in-control-flow?u=76281980&t=71)** Workflow tasks communicate with other processes to run packages, run programs or batch files, send and receive messages between packages, and they can also send email messages, read Windows Management Instrumentation data, and watch for WMI events.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-integration-services-2/understanding-tasks-in-control-flow?u=76281980&t=87)** SQL Server tasks allow you to access, copy, insert, delete, and modify SQL Server objects and data.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-integration-services-2/understanding-tasks-in-control-flow?u=76281980&t=94)** Scripting tasks extend package functionality by using custom written scripts.
>
> **[1:38](https://www.linkedin.com/learning/sql-server-integration-services-2/understanding-tasks-in-control-flow?u=76281980&t=98)** Analysis Services tasks create, modify, delete, and process Analysis Services objects.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-integration-services-2/understanding-tasks-in-control-flow?u=76281980&t=104)** Maintenance tasks perform administrative functions such as backing up and shrinking SQL Server databases, rebuilding and reorganizing indexes, and running SQL Server Agent jobs.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-integration-services-2/understanding-tasks-in-control-flow?u=76281980&t=114)** Finally, if that's not enough, you can also create custom tasks using a programming language such as Visual Basic or C#.
>
> **[2:02](https://www.linkedin.com/learning/sql-server-integration-services-2/understanding-tasks-in-control-flow?u=76281980&t=122)** As you can see, there are lots of different tasks to choose from, and they bring a wide variety of functionality to your integration services packages.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-integration-services-2/understanding-tasks-in-control-flow?u=76281980&t=128)** Your job is to get familiar with the options and combine them together to create unique solutions for your SQL Server environment.

> [!info]- Semantic Content
>
> **Env Vars:** sql (6), ssis (1), ftp (1), xml (1), wmi (1)
> **Code Keywords:** from, (2), delete (2), require (1), finally, (1)
> **Analogies:** such as (2)
> **CLI Commands:** find (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### The Data Flow task
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=0)** - [Instructor] I'd like to explore the functionality of the Data Flow Task now, and to keep things organized, we're going to create a new package inside of the current project.
>
> **[0:08](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=8)** To do that, right-click on SSIS Packages in the Solution Explorer and choose New SSIS Package.
>
> **[0:13](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=13)** That'll create a new package here called Package1.
>
> **[0:16](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=16)** Let's go ahead and rename this now.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=18)** I'll right-click on it and choose Rename, and I'll call it DataFlow.
>
> **[0:25](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=25)** When I press Enter, you'll get this error message here saying that the file has unsaved changes inside of the editor, and we need to reload it.
>
> **[0:31](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=31)** So go ahead and say Yes to that, and then I'll reload the screen.
>
> **[0:34](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=34)** Then just to clean things up, we can go ahead and close out of the original package that we were working with in the last chapter, I'll just close that tab here.
>
> **[0:42](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=42)** And if it's still on your screen, you can also close the output window that appeared here at the bottom.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=47)** Okay, so let's now take a look at the Data Flow Task.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=50)** You can find it at the very top of the SSIS toolbox.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=55)** Let's double-click on it to add it into the design surface of our Control Flow.
>
> **[0:59](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=59)** Then to configure it, I'll double-click on its icon.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=62)** Unlike the other tasks, this doesn't open an editor window.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=66)** Instead, it switches us over to the Data Flow tab of the design interface.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=70)** At any point in time, you can switch back to Control Flow to see the task here.
>
> **[1:14](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=74)** Let's go back into Data Flow, and this is where we'll configure it.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=78)** When you're on the Data Flow tab, you'll notice that all the tools of the toolbox have changed.
>
> **[1:23](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=83)** In Data Flow, we'll build a diagram of how we want to copy data from a source location to a destination location.
>
> **[1:29](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=89)** The toolbox has two different assistants here at the top to help create those connections.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=93)** Below are a number of additional tools that can bring in additional data types and transform that data while it's being copied.
>
> **[1:40](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=100)** So I want to create a simple data flow that pulls information out of the Wide World Importers data warehouse and loads it into the Kinetico database.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=108)** To do this, I'll start with the Source Assistant.
>
> **[1:50](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=110)** I'll double-click on it to add it into the Data Flow.
>
> **[1:53](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=113)** This will walk me through the process of defining where the original data is coming from.
>
> **[1:58](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=118)** The options for the source type include a SQL Server database, an Excel file, a flat file, such as a CSV, or an Oracle database.
>
> **[2:07](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=127)** I'm going to choose the SQL Server type and then click on New here in the connection managers, and press the OK button.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=135)** On the Connection Manager window, press the Data Links button to get a listing of all the available SQL Server instances.
>
> **[2:22](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=142)** My Wide World Importers database is on the default or the unnamed instance on this computer.
>
> **[2:28](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=148)** I'll select it from this dropdown menu.
>
> **[2:30](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=150)** If this dropdown menu doesn't populate with server names to select, you can also type the name here in this box.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=156)** If you're connecting to the default instance, you'll just need the name of the computer, otherwise, you'll use the computer name, backslash, instance name.
>
> **[2:46](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=166)** I'll leave it on Windows Authentication to use my user credentials, and we'll come down to step number 3 to select the database, and the data is going to come out of WideWorldImportersDW.
>
> **[2:56](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=176)** It's always a good idea to test the connections, I'll click this button, looks good, press OK, press OK, OK again, and OK one more time to create the data source.
>
> **[3:06](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=186)** Next, I need to be more specific about what data I want to pull out of the Wide World Importers database.
>
> **[3:11](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=191)** Let's double-click on the icon here on the source task, and that will bring up the OLEDB Source Editor.
>
> **[3:18](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=198)** For the data access mode, you can select a specific table or view using the dropdown menu, or you can create your own SQL command.
>
> **[3:26](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=206)** I'm going to choose that option and paste in a select statement that I have copied on my clipboard from the Exercise Files.
>
> **[3:32](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=212)** I'll press the Close button here and then press OK to finish up my data source.
>
> **[3:37](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=217)** Now we need to specify where we want that data to go.
>
> **[3:40](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=220)** To do that, I'll use the Destination Assistant.
>
> **[3:42](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=222)** Let's double-click on that to start it up.
>
> **[3:44](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=224)** Once again, we're going to choose our destination type, it's going to be a SQL Server instance, but we're not going to connect back into the Wide World Importers database, so I need to choose New here and press OK.
>
> **[3:54](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=234)** I want to connect this data into the Kinetico database, which is on my second SQL Server instance.
>
> **[3:58](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=238)** So I'll press Data Links here, I'll choose the second instance, and down on step number 3, select the database, I'll choose Kinetico.
>
> **[4:09](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=249)** Once again, I'll test the connection.
>
> **[4:10](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=250)** Looks good, press OK, and OK again.
>
> **[4:13](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=253)** That finishes the Connection Manager for my destination database so I'll say OK, and that places it down into the Data Flow Tasks.
>
> **[4:20](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=260)** Now we need to connect these two together.
>
> **[4:22](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=262)** I'll click on the source and I'll drag the blue arrow and drop it onto the destination.
>
> **[4:27](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=267)** You might have also noticed that there was a red arrow.
>
> **[4:30](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=270)** The red arrow would be used if you wanted to control error output from the source.
>
> **[4:33](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=273)** I'm not concerned with that in this exercise, so I'm just going to leave that one empty.
>
> **[4:37](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=277)** Finally, the Destination still isn't ready to run as evidenced by the red X icon.
>
> **[4:42](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=282)** If you hover your mouse over it, you'll get a popup describing why.
>
> **[4:45](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=285)** We haven't yet provided a destination table.
>
> **[4:48](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=288)** So the Data Flow doesn't know where to put the data coming out of the Wide World Importers database.
>
> **[4:53](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=293)** To fix this, double-click on the icon here to bring up the Destination Editor.
>
> **[4:57](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=297)** In the dropdown menu for the name of the table or view, you can choose from any of the existing tables in the Kinetico database.
>
> **[5:03](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=303)** And right now, it's just the People table.
>
> **[5:05](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=305)** This obviously isn't going to work for our city's data, so instead, I'm going to press the New button over here on the right.
>
> **[5:11](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=311)** That'll give us a Create Table statement that exactly matches the columns and data types coming out of the Wide World Importers database.
>
> **[5:18](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=318)** The only change that I want to make here is to rename the table to something better than OLEDB Destination.
>
> **[5:24](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=324)** I'm going to call it more simply, just Cities.
>
> **[5:26](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=326)** We'll say OK, and that'll finish the Create Table statement.
>
> **[5:30](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=330)** That'll create a new table inside of the Kinetico database to put the data into.
>
> **[5:34](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=334)** At the bottom of the Editor window is a message that says that we need to map the columns on the Mappings page, so let's go ahead and do that.
>
> **[5:39](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=339)** We'll switch over to Mappings on the left.
>
> **[5:42](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=342)** This is where we verify that the data coming out of the Wide World Importers database is going into the correct columns in the Kinetico database.
>
> **[5:49](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=349)** They'll have the same name in both databases, so it makes it easy to see that the Input column and the Destination columns line up.
>
> **[5:55](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=355)** But if you did need to make a change, you would simply drag a column from the Input table and drop it into the appropriate location here in this bottom table.
>
> **[6:03](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=363)** But everything looks good as is, so I'll simply press the OK button here.
>
> **[6:07](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=367)** And with that, the configuration of the Data Flow Task is complete.
>
> **[6:10](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=370)** You can now go back into the Control Flow design window if you wanted to link in additional tasks, or press the Start button to run it immediately.
>
> **[6:20](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=380)** And it looks like the Data Flow Task completed successfully, so let's jump into Management Studio and check out the results.
>
> **[6:27](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=387)** On my second database server instance, I'll scroll down until I find the Kinetico database, let's open that up.
>
> **[6:32](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=392)** The table isn't showing up right now, so let's right click on Tables and choose Refresh.
>
> **[6:36](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=396)** And there is my new Cities table that was copied out of the Wide World Importers database.
>
> **[6:40](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=400)** Let's right-click on it and just verify that the data is populated in by selecting the top 1,000 rows.
>
> **[6:46](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=406)** And there we go, there's all the cities coming out of Wide World Importers.
>
> **[6:49](https://www.linkedin.com/learning/sql-server-integration-services-2/the-data-flow-task-22690195?u=76281980&t=409)** And that's how you configure a simple integration services Data Flow Task by specifying a source location and a destination in SQL Server.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), switch (2), this, (2), interface (1), from. (1)
> **UI Navigation:** double-click (6), dropdown (4), right-click (3), click on (3), select the (2)
> **Env Vars:** sql (7), ssis (3), oledb (2), csv (1)
> **CLI Commands:** find (2), make (2)
> **Prerequisites:** configure (3)
> **Cross-References:** in the last (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### The File System tasks
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=0)** - [Instructor] Data preparation tasks are used to copy files from a variety of locations.
>
> **[0:04](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=4)** These include the Hadoop File System Task for copying files within a Hadoop cluster, the FTP Task for downloading or uploading files to an FTP server, and the File System Task for working with files and folders on your local or network disk drives.
>
> **[0:19](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=19)** They all generally require the same sorts of configuration.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=23)** You need to specify a source location, a destination location, and any login details required to access the files.
>
> **[0:31](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=31)** Let's take a look at the File System Task as an example of the activities that you can do with these.
>
> **[0:35](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=35)** First, let's create a new package in our solution.
>
> **[0:38](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=38)** I'm going to close the Data Flow Design.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=41)** And then I'll come over here to the Solution Explorer, right-click on Packages, then choose New SSIS Package.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=47)** Then I'll right-click on the new one, this one here called Package1, and I'll choose Rename.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=52)** And I'll call it FileSystemExample.
>
> **[0:58](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=58)** When you press enter, you'll get this warning message here, just press Yes to that, and that'll complete the rename process.
>
> **[1:04](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=64)** Now, back in the toolbox, I'm going to double-click on the File System Task to add it in here to the Control Flow Diagram.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=70)** Then, I'll double-click on the logo here, a little icon, to open it up in the task editor.
>
> **[1:15](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=75)** For this task, I'd like to copy a file out of the Exercise Files folder and place it in a new folder on my desktop.
>
> **[1:21](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=81)** To do that, we first need to create the new folder or what's sometimes referred to as a directory.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=87)** To keep things clear, I'm going to give this a better name instead of just File System Task.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=90)** I'll call it Create Folder.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=93)** Then, for the operation, we have lots of different things we can choose from.
>
> **[1:37](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=97)** This task can copy directories or files, create or delete directories or files, rename them, or set attributes.
>
> **[1:45](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=105)** I'll choose the Create directory option.
>
> **[1:47](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=107)** To finish the task, we need to fill in the SourceConnection.
>
> **[1:50](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=110)** This is where we specify the directory that we want to create.
>
> **[1:53](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=113)** I'll click on the dropdown menu and choose New Connection.
>
> **[1:57](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=117)** The usage type will be Create Folder.
>
> **[2:01](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=121)** to go out to my file system.
>
> **[2:03](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=123)** I'll go into my PC and into my desktop folder and I'll select that one there.
>
> **[2:09](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=129)** If you choose the option to make a new folder here it'll create it immediately on your file system.
>
> **[2:14](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=134)** Instead just select the desktop and press OK.
>
> **[2:17](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=137)** Then I'll modify the folder string here I'm going to put a backslash and then the name of the new folder that I want to create.
>
> **[2:24](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=144)** I'll call it CopiedData.
>
> **[2:28](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=148)** create the folder when it runs.
>
> **[2:30](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=150)** I'll press the OK button Press OK again and that completes the first file system task.
>
> **[2:40](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=160)** and place into the new folder.
>
> **[2:42](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=162)** I'll double click on File System Task once again to add in another copy of it.
>
> **[2:46](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=166)** Then I'll double click on the icon to go back into this editor.
>
> **[2:50](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=170)** This one I'll rename to Move CSV File.
>
> **[2:54](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=174)** For the operation I'll leave it as Copy file and come down to the SourceConnection.
>
> **[2:59](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=179)** This is where the file is coming from.
>
> **[3:01](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=181)** Once again I'll use the dropdown menu and choose New Connection.
>
> **[3:05](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=185)** We're going to leave the usage type as Existing file and then click Browse.
>
> **[3:11](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=191)** Then I'll navigate to the desktop and into the exercise files and then to Chapter 3 where I have the file that I want to copy.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=196)** This one here called people.csv.
>
> **[3:18](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=198)** I'll select it and press Open.
>
> **[3:20](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=200)** That'll put in the file path here and I'll press OK.
>
> **[3:24](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=204)** So that's where the file is coming from.
>
> **[3:27](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=207)** To specify where it's going to go we'll come up here to the DestinationConnection.
>
> **[3:31](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=211)** I'll click here, then choose the dropdown menu, and choose New connection once again.
>
> **[3:36](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=216)** This time I'm going to choose the option to create a new file.
>
> **[3:40](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=220)** Then I'll click the browse button and go back out to my desktop folder.
>
> **[3:44](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=224)** In the file name box at the bottom fill in the file name that you want the copied file to get.
>
> **[3:49](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=229)** I'll call it PeopleCopy.csv.
>
> **[3:54](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=234)** I'll press the Open button and that gets added into the file path.
>
> **[3:57](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=237)** Now we do need to modify this though to incorporate the folder that will be created by the first task.
>
> **[4:02](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=242)** So I'm going to insert the folder reference here before the file name.
>
> **[4:05](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=245)** If you remember that folder was just CopiedData.
>
> **[4:10](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=250)** Don't forget to type in the extra backslash.
>
> **[4:13](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=253)** Technically this isn't a valid path at this point which is why we have to do this in an awkward order, but it will be once our package runs.
>
> **[4:20](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=260)** I'll press OK and then I'll finish the DestinationConnection.
>
> **[4:24](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=264)** I can come down here and press OK and that finishes this task.
>
> **[4:28](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=268)** If you ever need to make adjustments to connection managers that were created in the tasks you'll find them at the bottom of the design surface window.
>
> **[4:35](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=275)** You can double click on them here to open them back up in an editor.
>
> **[4:39](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=279)** You can make any changes that you need to here and press OK to update the tasks that they're related to.
>
> **[4:41](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=281)** and press OK to update the tasks that they're related to.
>
> **[4:44](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=284)** You can also right click on the connections here You can also right click on the connections here to rename them if it makes sense to in your workflows.
>
> **[4:47](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=287)** to rename them if it makes sense to in your workflows.
>
> **[4:49](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=289)** I'm just going to leave them as they are.
>
> **[4:49](https://www.linkedin.com/learning/sql-server-integration-services-2/the-file-system-tasks?u=76281980&t=289)** I'm just going to leave them as they are.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (6), dropdown (3), right-click (2), double-click (2), select the (1)
> **Code Keywords:** from. (3), let (2), require (1), delete (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** ftp (2), ssis (1), csv (1)
> **File Paths:** people.csv (1), peoplecopy.csv (1)
> **Exercise Files:** exercise files (2)
> **Best Practices:** don't forget (1)
> **Warnings:** warning (1)

#### Modify file attributes
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/modify-file-attributes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/modify-file-attributes?u=76281980&t=0)** - [Instructor] So, let's add one more File System Task to the Control Flow, and we'll use it to set the status of the copied files to read-only.
>
> **[0:07](https://www.linkedin.com/learning/sql-server-integration-services-2/modify-file-attributes?u=76281980&t=7)** I'll double-click it one more time over here, and we'll drag it into position, then I'll double-click on the icon to open up the Editor.
>
> **[0:13](https://www.linkedin.com/learning/sql-server-integration-services-2/modify-file-attributes?u=76281980&t=13)** For the SourceConnection, we don't need to create a new one, because we could just use the same PeopleCopy.csv that we've already created.
>
> **[0:21](https://www.linkedin.com/learning/sql-server-integration-services-2/modify-file-attributes?u=76281980&t=21)** I'll change the Operation to Set Attributes.
>
> **[0:24](https://www.linkedin.com/learning/sql-server-integration-services-2/modify-file-attributes?u=76281980&t=24)** And up here at the top, I'll change the ReadOnly Attribute to True.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-integration-services-2/modify-file-attributes?u=76281980&t=28)** That completes this task, I'll press the OK button, and that returns us back to the design surface.
>
> **[0:33](https://www.linkedin.com/learning/sql-server-integration-services-2/modify-file-attributes?u=76281980&t=33)** The last step is to connect all these tasks together to ensure that they execute in the proper order.
>
> **[0:38](https://www.linkedin.com/learning/sql-server-integration-services-2/modify-file-attributes?u=76281980&t=38)** Let's click on the Create Folder task, and I'll drag the arrow to Move CSV File, then I'll click on this one, and drag the arrow to the File System Task.
>
> **[0:46](https://www.linkedin.com/learning/sql-server-integration-services-2/modify-file-attributes?u=76281980&t=46)** Now, we'll create a folder, we'll copy a CSV File into it, and we'll update it to be read-only.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-integration-services-2/modify-file-attributes?u=76281980&t=52)** Now, let's go up to the top here in the Menu and press the Start button to run the tasks.
>
> **[0:57](https://www.linkedin.com/learning/sql-server-integration-services-2/modify-file-attributes?u=76281980&t=57)** Once it's done, you can press the Stop button to move back into the design interface.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-integration-services-2/modify-file-attributes?u=76281980&t=62)** Now, let's minimize Visual Studio and take a look at the results on the desktop.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-integration-services-2/modify-file-attributes?u=76281980&t=66)** Here is the new folder that it just created called CopiedData.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-integration-services-2/modify-file-attributes?u=76281980&t=69)** And if I go inside of here, we have the PeopleCopy.csv file.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-integration-services-2/modify-file-attributes?u=76281980&t=73)** Let me open it up inside of Notepad, just to make sure that everything works correctly here.
>
> **[1:21](https://www.linkedin.com/learning/sql-server-integration-services-2/modify-file-attributes?u=76281980&t=81)** And there is the data out of that file, so that looks good.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-integration-services-2/modify-file-attributes?u=76281980&t=84)** Let's close this, and right-click on it, and choose Properties to verify that it is, in fact, read-only.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-integration-services-2/modify-file-attributes?u=76281980&t=90)** So, using a couple of File System Tasks, we were able to take a data file from one location, and copy it into a new location, and set its status so that changes can't be made to the copied file.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), interface (1), this, (1)
> **UI Navigation:** double-click (2), click on (2), in the menu (1), right-click (1)
> **File Paths:** peoplecopy.csv (2)
> **Env Vars:** csv (2)
> **CLI Commands:** make (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### The Execute Package task
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/the-execute-package-task?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/the-execute-package-task?u=76281980&t=0)** - [Instructor] Workflow tasks are used to communicate other processes to run packages and send emails.
>
> **[0:06](https://www.linkedin.com/learning/sql-server-integration-services-2/the-execute-package-task?u=76281980&t=6)** I want to create a new package that runs the file system example package that I created in the last movie and then emails a message out when it's complete.
>
> **[0:13](https://www.linkedin.com/learning/sql-server-integration-services-2/the-execute-package-task?u=76281980&t=13)** Just like before, I'm going to close this one down and I'll create a new package here by right-clicking on SSIS packages and choose new package, then I'm going to right-click on the new package and rename it, and I'll call this one workflow example.
>
> **[0:29](https://www.linkedin.com/learning/sql-server-integration-services-2/the-execute-package-task?u=76281980&t=29)** Once again I'll press yes on this dialogue box to finish the rename process.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-integration-services-2/the-execute-package-task?u=76281980&t=32)** Then, I'll finally execute package task underneath the common header here, I'll double-click on it to add it in to my control flow, and you probably guessed by now we'll double-click on the icon to open up the editor.
>
> **[0:42](https://www.linkedin.com/learning/sql-server-integration-services-2/the-execute-package-task?u=76281980&t=42)** The execute package task is useful for breaking down complex workflows into smaller units of work, or to reuse package components.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-integration-services-2/the-execute-package-task?u=76281980&t=50)** It also makes maintaining packages easier since you can simply reference the tasks in an existing package, rather than making a duplicate copy of all of the tasks in multiple packages.
>
> **[0:59](https://www.linkedin.com/learning/sql-server-integration-services-2/the-execute-package-task?u=76281980&t=59)** I'll leave the name here as it is on the general page and switch over to the package page of the editor.
>
> **[1:04](https://www.linkedin.com/learning/sql-server-integration-services-2/the-execute-package-task?u=76281980&t=64)** For the reference type property, you can either choose to run packages inside of the same project, which is what I want to do here, or you can use the dropdown menu to choose external reference.
>
> **[1:14](https://www.linkedin.com/learning/sql-server-integration-services-2/the-execute-package-task?u=76281980&t=74)** This will allow you to fill in the connection details to a different SQL server instance or file system location, and link to a package stored elsewhere.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-integration-services-2/the-execute-package-task?u=76281980&t=82)** I'm going to switch this back to the original option, the project reference.
>
> **[1:26](https://www.linkedin.com/learning/sql-server-integration-services-2/the-execute-package-task?u=76281980&t=86)** In the package name from project reference option here, We'll use the dropdown menu and see a list at all the different packages that are currently in my project.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-integration-services-2/the-execute-package-task?u=76281980&t=94)** I'll choose the file system example DTX file.
>
> **[1:37](https://www.linkedin.com/learning/sql-server-integration-services-2/the-execute-package-task?u=76281980&t=97)** This is project the we created in the last movie that created a new folder on our desktop, and copied a file into it.
>
> **[1:43](https://www.linkedin.com/learning/sql-server-integration-services-2/the-execute-package-task?u=76281980&t=103)** If that package was encrypted with a password, you would need to authenticate with a password here, the asterisks that you're seeing are just placeholders, but since our example package didn't have a password set for it, you can just skip this.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-integration-services-2/the-execute-package-task?u=76281980&t=114)** And then you also have the option to execute the package as a separate windows process.
>
> **[1:59](https://www.linkedin.com/learning/sql-server-integration-services-2/the-execute-package-task?u=76281980&t=119)** The default of false here is fine, I'm just going to leave it the way it is.
>
> **[2:02](https://www.linkedin.com/learning/sql-server-integration-services-2/the-execute-package-task?u=76281980&t=122)** The parameter bindings page will allow you to pass in parameters if they were required by the package that you're linking to, ours doesn't need any parameters to run, so this step doesn't apply.
>
> **[2:13](https://www.linkedin.com/learning/sql-server-integration-services-2/the-execute-package-task?u=76281980&t=133)** And finally you can further customize the package's options by creating a list of expressions here that will modify how the package runs.
>
> **[2:21](https://www.linkedin.com/learning/sql-server-integration-services-2/the-execute-package-task?u=76281980&t=141)** For instance you could programmatically change what file was used as the source and pass that into the file systems example package.
>
> **[2:27](https://www.linkedin.com/learning/sql-server-integration-services-2/the-execute-package-task?u=76281980&t=147)** I'm just going to leave this blank and press OK to finish the task.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (2), pass (2), this. (1)
> **UI Navigation:** double-click (2), dropdown (2), right-click (1)
> **Env Vars:** ssis (1), sql (1), dtx (1)
> **Cross-References:** in the last (2)
> **Analogies:** just like (1), for instance (1)
> **Speakers:** - [instructor] (1)

#### The Send Mail task
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=0)** - [Instructor] Now when this task finishes successfully, I want to send an email.
>
> **[0:03](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=3)** For that, I'll add in the Send Mail Task.
>
> **[0:07](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=7)** You can find it down in the Common group, I'll double click to add it in, and we'll move it into position.
>
> **[0:11](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=11)** Then, I'll double click on the icon to open up the editor.
>
> **[0:14](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=14)** On the mail page, there's a number of different configurations that you need to make.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=18)** The first step is to fill in the details for the email account that you want to use to send the message.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=23)** This will have to be created by your organization's network administrators to create an email account for Immigration Services to use.
>
> **[0:29](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=29)** So I'm going to outline the general process here, but without an actual valid email account setup, the messages aren't actually going to send in this example.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=36)** That'll cause this task to fail.
>
> **[0:38](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=38)** But with that said, you'll choose to configure the SMTP connection for the email account.
>
> **[0:42](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=42)** I'll use the dropdown menu, choose New Connection here.
>
> **[0:45](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=45)** I'll just type in a dummy account here, smtp.[connetico.com](https://connetico.com) and I'll press the OK button.
>
> **[0:54](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=54)** Then I'll type in the From address that we want to send the email from, SSIS@[connetico.com](https://connetico.com) The To address is where you want the email to go to.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=70)** You can also type in any carbon or blind copies.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=73)** The subject line, I'll just type in that "The file copy was successful".
>
> **[1:19](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=79)** And then we have the message source.
>
> **[1:21](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=81)** This is going to be the body of the email.
>
> **[1:23](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=83)** I'll click on the ellipsis button, and I'll just type something simple in here.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=87)** Once you've configured your email message, you can go ahead, press OK to finish the Send Email Task.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=93)** Now we can link it to the Execute Package Task, with the precedent constraint, by dragging the arrow.
>
> **[1:38](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=98)** We can also choose to send a different email if the Execute Package Task fails.
>
> **[1:43](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=103)** To do that, right click on the Send Mail Task and choose Copy, then I'll right click anywhere here, in the blank design area, and choose Paste.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=111)** That'll paste in a copy of my Mail Task.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=114)** Then I'll go into the editor here, and I'll just make some simple changes.
>
> **[1:57](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=117)** I'll change the subject line to "File Copy Failure", and I'll change the message source or the body text as well.
>
> **[2:10](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=130)** I'll press OK to finish configuring the second email task, and then I'll click on Execute Package Task again and I'll drag a second arrow and drop it over here.
>
> **[2:19](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=139)** Then, I'll double click on the line, and I'll change the value from Success to Failure.
>
> **[2:25](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=145)** We should also change the names of each of these tasks to clarify their behavior.
>
> **[2:29](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=149)** I'll click once and then click again to highlight the text, and I'll change this one to "Success Message", and I'll change the other one to "Failure Message".
>
> **[2:42](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=162)** So at this point, we have a task that'll attempt to run a separate package.
>
> **[2:48](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=168)** If this is successful, it'll send one email, and if it fails, it'll send the other.
>
> **[2:53](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=173)** Let's run it and see what happens.
>
> **[2:58](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=178)** The workflow example starts up, and that immediately calls the File System Example, so that's what we're seeing right here.
>
> **[3:03](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=183)** When this one starts to run it, it fails on the first step.
>
> **[3:06](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=186)** That's because the folder that it attempts to create, is already existing on my desktop, and we didn't say how to handle that situation.
>
> **[3:13](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=193)** But that's actually fine in our case.
>
> **[3:14](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=194)** Let's switch back over here to the Work Flow Example to see how it's progressing.
>
> **[3:17](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=197)** We can see to that Executive Package Task failed ultimately, and that triggered to the Failure Message.
>
> **[3:23](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=203)** And since our SMTP server settings weren't actually valid to send an email, this step also fails.
>
> **[3:28](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=208)** Notice however that the first email was never actually triggered.
>
> **[3:32](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=212)** So this one is neither successful or in a fail state.
>
> **[3:35](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=215)** Let's see if we can get a different behavior by minimizing Visual Studio, then I'm going to take this Copied Data folder and just move it into the Recycle Bin.
>
> **[3:41](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=221)** Then we'll go back into Visual Studio, and I'll re-execute the tasks.
>
> **[3:46](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=226)** I'll just press the restart button here on the Tool bar.
>
> **[3:49](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=229)** This time, the File System Example package runs through without any issues.
>
> **[3:52](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=232)** All these tasks completed successfully.
>
> **[3:55](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=235)** Back in the Workflow Example package, this task completed successfully, which triggers the email message, and again that one just fails because of the SMTP settings.
>
> **[4:03](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=243)** So it looks like everything is working as intended.
>
> **[4:08](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=248)** you can create Nested Systems that run other packages that run other packages and respond to their completion status.
>
> **[4:10](https://www.linkedin.com/learning/sql-server-integration-services-2/the-send-mail-task?u=76281980&t=250)** and respond to their completion status.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (5), dropdown (1), go to (1)
> **Code Keywords:** let (3), from, (1), case. (1), switch (1)
> **Env Vars:** smtp (3), ssis (1)
> **CLI Commands:** make (2), find (1)
> **URLs:** [connetico.com](https://connetico.com) (2)
> **Tools:** visual studio (2)
> **Prerequisites:** setup (1), configure (1)
> **Speakers:** - [instructor] (1)

#### SQL Server tasks
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=0)** - [Narrator] We've already seen an example of the Execute SQL task to run a couple of statements that created a table and added a few records.
>
> **[0:07](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=7)** This one task alone will allow you to accomplish most SQL server related activities, since it's so flexible.
>
> **[0:13](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=13)** Previously we entered the SQL commands directly into the task, as something called a Direct Input.
>
> **[0:19](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=19)** You can also link to an external script file on your system, in order to make it easier to modify what the task is doing.
>
> **[0:25](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=25)** Just like before, I want to explore this concept I'll right click SSIS Packages, and choose New Package.
>
> **[0:33](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=33)** And then I'll right click on the new package, and rename it.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=36)** I'll call this External SQL.
>
> **[0:42](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=42)** Now before we get started, I do want to point out that there's the Execute SQL task up here in the Favorites group, and if you scroll down, you'll find this one here, called Execute T-SQL statement in the Other Tasks group.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=56)** On the surface, these would appear to do the same thing.
>
> **[0:59](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=59)** The difference is that this one, the Execute T-SQL, can only use Microsoft's Transact SQL version of the SQL language.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=66)** You can't use this task when creating SQL statements that need to connect to other non-Microsoft database systems.
>
> **[1:12](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=72)** Further, it's recommended that you don't use this task if you need to run parameterized queries, say the query results are variables, or use property expressions.
>
> **[1:21](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=81)** Execute T-SQL is simpler to use but less flexible than the standard Execute SQL task.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=87)** So with that aside out of the way, let's go ahead and scroll back up here to the top of the tool box, and I'm going to double click on Execute SQL Task to add that into my Control Flow Diagram.
>
> **[1:35](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=95)** Now I have an SQL script file saved in the Exercise files and I want this package to run that external script.
>
> **[1:40](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=100)** Let's go ahead and minimize this and return to the desktop and take a quick look.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=104)** Inside of the Chapter Three Folder, we'll find it, and it's this one here, createTable.sql.
>
> **[1:49](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=109)** I'm going to right click on it and open it up inside of Notepad.
>
> **[1:57](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=117)** This script is simply going to create a new table called Products and fill in a couple of values.
>
> **[2:02](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=122)** OK, now you know what the script does, let's go back into Visual Studio.
>
> **[2:06](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=126)** I'm going to go in and open up the editor for the Execute SQL Task, I want to execute the SQL statement in the Kineteco database so I'm going to leave the Connection type set to OLE DB and come down here to Connection.
>
> **[2:17](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=137)** I'll use the drop down menu and choose New Connection, and then because we've already set up a connection to the Kineteco database inside of our project, I can just select it from the list here.
>
> **[2:25](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=145)** I'll select it, and press OK.
>
> **[2:28](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=148)** For the SQL Source Type, we're going to reference that external file, so instead of Direct Input, I'm going to change this to File connection.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=156)** Then in the File connection property I'll click on the drop down menu and choose New Connection, we're going to use an existing file, I'll click the Browse button over here and find it inside of the Exercise files.
>
> **[2:49](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=169)** And that's it, I'll press the OK button, Now when we run this task, it'll run whatever SQL commands are in the text file that's on my hard drive.
>
> **[2:58](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=178)** Let's press the Start button to run the package, that'll execute the external script, and then we can minimize this and go into Management Studio to take a look at the Kineteco database.
>
> **[3:08](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=188)** I'm going to right click on the Tables folder and choose Refresh, and there is the new Products table that we just added.
>
> **[3:14](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=194)** I'll also right click on it and choose Select Top 1000 rows to verify that the data was put in, and it looks good there.
>
> **[3:19](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=199)** Now you can easily edit the script file and it'll change what the Integration Services Package does without having to go back into the control flow design interface, open the editor window, and reconfigure the tasks properties.
>
> **[3:32](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=212)** And just to prove the point, I'll minimize Management Studio, and we'll go into the Exercise files and we'll make a little change.
>
> **[3:38](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=218)** We're going to open this back up in Notepad once again and I'll just change the name of the Products table to Products2.
>
> **[3:49](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=229)** I'll close the script and save the change, then we can go back into Visual Studio, restart the package, and that will run it again, then we can go back into Management Studio and refresh the tables once again.
>
> **[4:02](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=242)** And there we go, there's our new Products2 table.
>
> **[4:02](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=242)** And there we go, there's our new Products2 table.
>
> **[4:05](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=245)** So you can see that the project So you can see that the project is in fact referencing the external file is in fact referencing the external file and not copying the syntax into the task.
>
> **[4:08](https://www.linkedin.com/learning/sql-server-integration-services-2/sql-server-tasks?u=76281980&t=248)** and not copying the syntax into the task.

> [!info]- Semantic Content
>
> **Env Vars:** sql (18), ssis (1), ole (1)
> **UI Navigation:** click on (6), scroll down (1), open the (1)
> **Code Keywords:** let (4), type, (1), interface (1)
> **CLI Commands:** find (3), make (2)
> **Exercise Files:** exercise files (3)
> **Tools:** visual studio (2)
> **File Paths:** createtable.sql (1)
> **Code Identifiers:** createtable (1)

#### Maintenance tasks
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=0)** - [Narrator] There's one more type of task that I want to look at as an example of the wide variety of things that you can do with an Integration Services Package.
>
> **[0:08](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=8)** The maintenance tasks perform administrative functions, such as backing up and shrinking SQL Server databases, rebuilding and reorganizing indexes, and running SQL Server agent jobs.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=18)** We've seen the back up database task applied to the Kentico database.
>
> **[0:21](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=21)** So, let's do something a little bit different this time, and use the rebuild index task to go through all the indexes in the Wide World Importers database, and reconstruct them.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=30)** Just like with the other examples in this chapter, I'm going to compartmentalize the process by creating a new package.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=36)** I'll right click SSIS Packages, choose new package, and then I'll right click that package and rename it.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=41)** I'll call this one Rebuild Index.
>
> **[0:46](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=46)** I'll press enter, and press yes to dismiss this dialogue box.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=50)** Then we need to find the rebuild index task in the toolbox, I'll scroll down into the other tasks category, and we'll find it right here.
>
> **[0:58](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=58)** Double click on it to add it.
>
> **[0:59](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=59)** I'll move it down here to the middle of the screen a little bit.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=62)** And then double click on the icon to open up the editor.
>
> **[1:04](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=64)** First we need to connect the task to the database.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=66)** I'll press the new button here and give the connection a name.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=69)** I'll just call it WWI for Wide World Importers.
>
> **[1:12](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=72)** Then I'll click the ellipses button to select the server.
>
> **[1:16](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=76)** My Wide World Importers databases are on the default instance on this computer, so I'll make that check mark there and press okay.
>
> **[1:23](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=83)** We'll use the Windows NT Integrated Security and press okay, and that finishes the connection.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=88)** Next we'll choose what databases we want to work with.
>
> **[1:32](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=92)** all the database on the server, just the system databases, just user databases, or we can choose specific databases.
>
> **[1:40](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=100)** I just want to work with Wide World Importers one, I'll place a check mark there and press okay.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=104)** And that finishes the databases line.
>
> **[1:47](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=107)** Next we'll take a look at what objects within that databases we want to work with.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=111)** Our options here are tables and views, just views, or just tables.
>
> **[1:56](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=116)** I'll switch this to table, and then in the following drop down menu, we can choose specific tables.
>
> **[2:00](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=120)** In this case, I want to look at all the tables, so I'll choose this option for all objects and press okay.
>
> **[2:05](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=125)** So that establishes what indexes we're going to rebuild.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=128)** Finally the rest of the interface deals with lots of different options for how to control the index rebuild process.
>
> **[2:14](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=134)** I'll check the option here to keep indexes online.
>
> **[2:17](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=137)** That'll keep the indexes available to users while they're being rebuilt.
>
> **[2:21](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=141)** You can further specify how to handle tables that don't support online index rebuilds.
>
> **[2:25](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=145)** Either not to rebuild the indexes, or to rebuild the indexes offline.
>
> **[2:31](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=151)** I'll leave it with the default to not rebuild those indexes.
>
> **[2:34](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=154)** Below that, we have some options for the index statistics that I'll run before the rebuild process starts.
>
> **[2:39](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=159)** Now, unfortunately the interface window here is actually larger than my screen resolution will allow.
>
> **[2:44](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=164)** And there's no way to scroll in this dialogue box.
>
> **[2:46](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=166)** So, some of the settings are actually getting cut off.
>
> **[2:50](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=170)** on a higher resolution monitor, you'll find settings to perform a fast, sampled or detailed scan to find the current state of the index, and then choose to only optimize the indexes for fragmentations that are above a specific threshold, or if it includes a specific number of pages, or depending on how recently they were used.
>
> **[3:08](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=188)** of how you want the index rebuild to proceed, click the okay button, and that's all there is to setting up a rebuilt index task on a SQL Server database.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=196)** Depending on the size of your database, and the quantity of indexes, this task can take a significant amount of time to complete.
>
> **[3:22](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=202)** So make sure you account for this So make sure you account for this when incorporating this task when incorporating this task into any package control flows.
>
> **[3:25](https://www.linkedin.com/learning/sql-server-integration-services-2/maintenance-tasks?u=76281980&t=205)** into any package control flows.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4), make (3)
> **Code Keywords:** interface (2), let (1), switch (1), case, (1)
> **Env Vars:** sql (3), ssis (1), wwi (1)
> **UI Navigation:** click on (2), scroll down (1), select the (1)
> **Analogies:** such as (1), just like (1)
> **Speakers:** - [narrator] (1)


### 4. Data Sources and Connections

#### Project level connections
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=0)** - [Instructor] As I went through the process of configuring a number of different integration services tasks, you might have noticed that most of them required a connection to data to use as either a source or a destination.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=12)** So far, I've set those data connections up inside of the tasks themselves which places the connection at the package level.
>
> **[0:19](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=19)** Once configured in a task these same connections can only be used by other tasks in the same package.
>
> **[0:25](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=25)** When you have a package open in design mode, I've currently got the rebuild index package open, you can find the package level connections listed at the bottom of the design surface.
>
> **[0:33](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=33)** For instance, here's one here called WWI.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=36)** You can double click on them to edit them and these changes will apply to any task in this package that uses the same connection.
>
> **[0:42](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=42)** You can also store data connections at the project level.
>
> **[0:46](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=46)** This will make them available to any package in the project.
>
> **[0:49](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=49)** This makes it even easier to set up a connection to a data source once and then use them repeatedly.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=55)** It also makes management easier because if the connection needs to change, for instance, if the database moves to a new server, you only need to update the project level connection once rather than make the same change in each individual package.
>
> **[1:07](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=67)** So let's take a look at adding a project level connection.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=71)** This is a good time to start a fresh project.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=73)** So I'm going to start by going up here to the File tab, choosing New, and then clicking Project.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=79)** In the Create a new project window you should have the integration services project listed underneath recent templates here on the left.
>
> **[1:26](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=86)** If you don't see it here though you can do a search and find it in the column on the right.
>
> **[1:29](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=89)** So select it and press the Next button at the bottom.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=93)** Let's give this one a proper name this time.
>
> **[1:35](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=95)** I'll call it Connections.
>
> **[1:39](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=99)** Then I'll come down to the bottom and press the Create button.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=104)** You might be prompted to save and close the currently open project, which is fine.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=108)** That cleans up the workspace and gives us a clean slate.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=111)** Now project level connections can be found in the solution explorer underneath this folder here called Connection Managers.
>
> **[1:58](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=118)** To create a new one, right click on the folder and choose New Connection Manager.
>
> **[2:03](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=123)** That'll bring up the add SSIS Connection Manager window.
>
> **[2:06](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=126)** Now there's a long list of different connections that we can choose from here.
>
> **[2:10](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=130)** These will allow you to connect to different kinds of data files and database platforms.
>
> **[2:16](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=136)** To connect to a SQL Server instance, choose the OLEDB option and then press the add button.
>
> **[2:23](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=143)** That lists out the data connection for the Kinetico database because I've previously used that in this Visual Studio session.
>
> **[2:29](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=149)** I also want to create a connection to my Wide World Importers database.
>
> **[2:32](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=152)** So I'm going to press the New button down here at the bottom.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=156)** I'll come up here to the dropdown menu for the server name and we'll wait a moment while it pre-populates that list.
>
> **[2:41](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=161)** If the list doesn't populate for you, you can always just type the server name in manually.
>
> **[2:46](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=166)** If you're connecting to the default instance on the machine you'll just need that computer's name.
>
> **[2:50](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=170)** Otherwise, add a backslash and the specific instance name as well.
>
> **[2:56](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=176)** My Wide World Importers databases are on the default instance on this machine so I'll select that one from the list.
>
> **[3:01](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=181)** Then you have your standard login options.
>
> **[3:03](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=183)** I'll connect to the Wide World Importers database using Windows authentication, and coming down here to the bottom dropdown menu I'll choose it from the list there.
>
> **[3:11](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=191)** Once those selections have been made I can test the connection, make sure everything's working, looks good, say OK, and press OK again to create that data connection.
>
> **[3:19](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=199)** Then I'll press OK again, one more time on the configure OLEDB Connection Manager window and that connection will get added here into the Connection Managers folder.
>
> **[3:27](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=207)** So now we have a new connection at the project level.
>
> **[3:29](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=209)** Let's use it in a quick task.
>
> **[3:32](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=212)** In the open package, notice that the project level connection is already listed the bottom of the design surface.
>
> **[3:37](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=217)** If you're not seeing the connection, you might need to close and reopen the package to force this window to refresh.
>
> **[3:43](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=223)** It has the Project prefix here which is how you'll distinguish it from other connections that you might make inside of this package.
>
> **[3:50](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=230)** I'm going to add in a basic execute SQL task by double clicking on it in the toolbox and then I'll double click on the icon to edit it.
>
> **[4:00](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=240)** In the Connection drop down menu, you'll notice that we already have a connection to the Wide World Importers database.
>
> **[4:06](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=246)** I can select it and not have to do any further configurations to set it up.
>
> **[4:11](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=251)** I will point out though that the connections displayed in the list depend on the connection type chosen up above.
>
> **[4:17](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=257)** If I switch this over to [ADO.NET](https://ADO.NET) for example, which is another method that you can use for connecting to SQL Server databases, that connection no longer shows up in the drop down menu below.
>
> **[4:27](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=267)** I'll switch us back over to OLEDB and then I can select my connection once again.
>
> **[4:33](https://www.linkedin.com/learning/sql-server-integration-services-2/project-level-connections-22693129?u=76281980&t=273)** So with a project level Connection Manager you can reuse the connection in a number of different tasks across all of the packages in a project.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3), oledb (3), wwi (1), ssis (1), ado (1)
> **CLI Commands:** make (4), find (2)
> **Code Keywords:** let (3), switch (2), new, (1)
> **UI Navigation:** click on (3), dropdown (2)
> **Analogies:** for instance (2), for example (1)
> **Prerequisites:** set up (1), configure (1)
> **URLs:** [ado.net](https://ado.net) (1)
> **Tools:** visual studio (1)

#### Convert package connections
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=0)** - Another way that you can work with shared connections across all of the packages in their project, is to convert a package connection to a project connection.
>
> **[0:08](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=8)** Let's see how this could be useful by adding in Back up Database Task.
>
> **[0:11](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=11)** You'll find it underneath the, Other Tasks, category.
>
> **[0:15](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=15)** A double-click to add it in and then, double-click on the icon to edit it.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=18)** Now, you will notice that you can't choose the connection to the WideWorldImporters database that we previously saved into the project, and that also appears to be available, here in the Connection Managers window.
>
> **[0:26](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=26)** That's because this task requires a connection to a database server and not a specific database.
>
> **[0:33](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=33)** You'll select the database that you want to work with, lower on the Task Configuration.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=37)** What I want to do, though, is continue to setup the connection here and then, convert it to a project-level connection for use in other tasks that have a similar configuration requirement.
>
> **[0:46](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=46)** Let's press the, New, button, and one thing this workflow allows me to do, is to name the connection right up front, only in this one production servicer.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=55)** Then, I'll click the ellipsis button to choose the server.
>
> **[0:59](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=59)** I'll choose the 2019 Server, and press, OK.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=62)** Then, I'll press OK one more time to create that connection.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=66)** At this point, you can also see that, that connection's created, here in the Connection Manager.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=70)** So, this point, I actually want to get out of this Task Editor.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=73)** I'm going to press the, Cancel button, here, and I'm actually going to delete the task by right clicking on it, and choosing, Delete.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=79)** That'll leave me with the connection, here, inside of the Package.
>
> **[1:23](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=83)** I can right click on it, and choose the option at the top to convert to a Project Connection.
>
> **[1:29](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=89)** That'll add the project preface to the beginning of the name, here, and also place a copy or a reference to it, here in the Connection Managers' folder in the Solution Explorer.
>
> **[1:38](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=98)** Now, if I close this package and I'll save my changes to it, I can create a new package inside of this project by right clicking on the SSIS Packages folder and choosing, New Package.
>
> **[1:47](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=107)** You'll see that the project-level connections are still available.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=111)** Now, I can add a task with similar requirements as the Back up Database Task, and use this connection.
>
> **[1:56](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=116)** How about the Check Database Integrity Task, We'll add one of those in and then, edit it.
>
> **[2:01](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=121)** In the Connection drop-down menu, you can easily choose the ProductionServer connection.
>
> **[2:05](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=125)** Then, I can choose a database that's on that server, how about the KinetEco database and say, "OK."
>
> **[2:10](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=130)** and that applies that change to the task.
>
> **[2:13](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=133)** So that's another method for creating a project-level connection.
>
> **[2:16](https://www.linkedin.com/learning/sql-server-integration-services-2/convert-package-connections?u=76281980&t=136)** Simply create your tasks as usual and then, convert package connections into project connections as you need them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), delete (2), continue (1), new, (1)
> **UI Navigation:** double-click (2), select the (1), click on (1)
> **CLI Commands:** find (1)
> **Env Vars:** ssis (1)
> **Prerequisites:** setup (1)
> **Speakers:** - another (1)

#### The Excel connection manager
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=0)** - Excel workbooks are everywhere in business, and integrations services allows you to easily bring tabular data stored in an Excel file into your projects.
>
> **[0:08](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=8)** When you add a data flow task into your package diagram and then switch over to the data flow page, you can scroll down in the toolbox to find some connection options.
>
> **[0:16](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=16)** Underneath other sources you'll find the Excel source, and inside of other destinations, you can find Excel destination.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=23)** Both of these will use the same Excel connection manager.
>
> **[0:26](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=26)** You can add one into your package or into the project to use in multiple packages.
>
> **[0:31](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=31)** The process is basically the same.
>
> **[0:33](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=33)** I'm going to demonstrate this by adding one into the package.
>
> **[0:35](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=35)** By coming down here to the connection manager tab at the bottom of the screen, right clicking and choose new connection.
>
> **[0:42](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=42)** From the list of available types, I'm going to choose the Excel type and press add.
>
> **[0:46](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=46)** Then we'll browse out to the exercise files to find an Excel file that I've saved for you.
>
> **[0:51](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=51)** Mine is on the desktop, exercise files, chapter four and it's this file here called people dot xlsx.
>
> **[0:57](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=57)** With it selected I'll press the open button and that'll fill in the path.
>
> **[1:01](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=61)** Then you can choose the Excel version that that file is in.
>
> **[1:04](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=64)** Mine is the most current version, which on this drop down list, will be the Excel 2016 version.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=69)** The data in this spreadsheet does have column names in the first row, so I'm going to make sure this box stays checked, and I'll press the okay button.
>
> **[1:16](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=76)** Now we can use this connection as an Excel source or Excel destination.
>
> **[1:20](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=80)** I'm going to add in an Excel source into the data flow and then double click on it to edit it.
>
> **[1:25](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=85)** In the first drop down menu you can choose the Excel connection manager that we just created.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=90)** The other option that you have is that you could've started the process here and press the new button to create the connection here inside of the task.
>
> **[1:36](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=96)** Just going to press cancel here.
>
> **[1:38](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=98)** Once you've selected your connection manager, you can come down into the next menu.
>
> **[1:41](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=101)** This will allow us to choose the data access mode.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=104)** Here you'll choose how you want to retrieve data from the workbook.
>
> **[1:47](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=107)** Table or view will be the most common option.
>
> **[1:50](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=110)** This will allow you to choose a worksheet name, based off of a table name or a range.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=114)** You can also get this name from a variable, or you can use a sequel command to select data out of the workbook.
>
> **[2:01](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=121)** This workbook has a named table range, so I'm going to select the first option.
>
> **[2:05](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=125)** Then in the next drop down you'll choose the named range or the worksheet that you want to reference as the data source.
>
> **[2:11](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=131)** In this case I want to use the named range, called people table.
>
> **[2:14](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=134)** Now if you get an error at this point, then it probably means that your computer lacks the required connectivity components that allow integration services to dig into the Excel file.
>
> **[2:23](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=143)** They're easy to add though, so let's take a quick detour to the internet.
>
> **[2:26](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=146)** The Microsoft Access database engine redistributable contains the connectivity components that are required to get into an Excel workbook in an Access database.
>
> **[2:35](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=155)** You can download the installer at this URL.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=158)** Once the file is installed on your machine, you should have no problems getting into the Excel file from integration services.
>
> **[2:44](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=164)** But if you do have trouble installing the connectivity components, review the installation notes at this URL for some additional things to check for.
>
> **[2:52](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=172)** So once you have the connection successfully made to your Excel workbook and you've chosen the data range or worksheet that you want to reference, you can press the preview button to verify that everything's working.
>
> **[3:02](https://www.linkedin.com/learning/sql-server-integration-services-2/the-excel-connection-manager?u=76281980&t=182)** That'll display the first 200 rows of data from the Excel file, which you can now incorporate into your integration services data flows.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4), make (1)
> **Code Keywords:** switch (1), let (1), for. (1)
> **UI Navigation:** scroll down (1), click on (1), select the (1)
> **Exercise Files:** exercise files (2), download the (1)
> **Env Vars:** url (2)
> **Cross-References:** in the next (1)
> **Definitions:** means that (1)
> **Prerequisites:** required to (1)

#### Connect to flat file data sources
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=0)** - Lots of scientific and machine-learning data is stored in flat files, such as CSV or comma-separated values files.
>
> **[0:07](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=7)** It should be no surprise by now that immigration services has a dedicated connection manager for bringing in these types of data files into your packages and data flows.
>
> **[0:15](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=15)** To get started, I'll right-click in the Connection Manager tab at the bottom of the data flow design surface.
>
> **[0:21](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=21)** From here, you can choose New Flat File Connection or the regular New Connection option.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=27)** If you choose New Connection, that'll allow you to either create a single flat file connection with this option.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=32)** Or you can pick multi-flat file, if you have several.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=36)** I'm going to choose the Single Flat File type and press Add.
>
> **[0:40](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=40)** Then just like with the Excel connection, we need to locate the file on our hard drive by clicking the Browse button.
>
> **[0:45](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=45)** Then I'll navigate into the Chapter 4 folder of the Exercise Files.
>
> **[0:49](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=49)** It'll look like nothing is there at first but take a look at the file extension filter down at the bottom.
>
> **[0:54](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=54)** Right now, it's set to text.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=55)** Using the dropdown menu, you can switch this over to CSV.
>
> **[0:59](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=59)** And there's the file that I'm looking for.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=60)** It's called more_people.csv.
>
> **[1:03](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=63)** Let's select it and press Open.
>
> **[1:05](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=65)** And that'll add the file name path.
>
> **[1:07](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=67)** Now we need to fill in a few details about how this file is structured.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=70)** First is the texting coding method.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=73)** UTF-8 is a solid assumption here, especially when working with strictly numeric or English language data.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=79)** If you know your file has international characters, then you might need to check Unicode here.
>
> **[1:25](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=85)** The Format is how the data is arranged in the file.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=88)** Ours uses comma as colon delimiters so this is correct.
>
> **[1:31](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=91)** But other files might be Fixed Width or Ragged Right.
>
> **[1:35](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=95)** Text qualifiers come into play when you have the character that surrounds your text fields.
>
> **[1:39](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=99)** Typically, this might appear as quotation marks around text.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=102)** This file doesn't use any text qualifiers so None is correct here.
>
> **[1:46](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=106)** The Header Row is on its own line.
>
> **[1:47](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=107)** So a carriage return and a line feed is what ends the line.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=111)** And there's only a single header row so no need to skip additional rows.
>
> **[1:55](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=115)** The vast majority of CSV files that you're likely to use, will take a similar configuration.
>
> **[2:00](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=120)** But you might need to dig into the specifics of your files to make sure.
>
> **[2:03](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=123)** You can then switch over to the Columns page to verify the details about how the data is arranged.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=128)** Just like the Header Row, each additional data row is separated by a carriage return and a line feed.
>
> **[2:13](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=133)** The individual columns of data are separated by commas.
>
> **[2:18](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=138)** This might be the one setting that has the most variation from file to file.
>
> **[2:21](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=141)** It's not uncommon to find tabs used as the column delimiters or even a pipe delimiter that uses the vertical bar.
>
> **[2:28](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=148)** Below all those choices we have here a preview, and this looks like everything is lining up as expected.
>
> **[2:33](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=153)** If any of your settings are off, this table preview would look a little bit scrambled up.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=156)** On the Advanced page, you could define the data types for each column you're bringing in.
>
> **[2:41](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=161)** Both the first name and the last name columns from the data set are recognized as text strings and they have a length of 50.
>
> **[2:47](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=167)** But using the dropdown menu here, you can choose any data type that you want from Boolean here at the top, all the way down to Unique Identifier or a GUID at the bottom.
>
> **[2:56](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=176)** Once you've defined all these specifics about how your data is stored and how it should be imported, you can click over to the Preview tab to do a final check to make sure that everything looks good.
>
> **[3:05](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=185)** Then press the OK button to finalize the connection.
>
> **[3:08](https://www.linkedin.com/learning/sql-server-integration-services-2/connect-to-flat-file-data-sources?u=76281980&t=188)** That will save it into the package here and you can now use it when adding a flat file source or a flat file destination to your data flows.

> [!info]- Semantic Content
>
> **Env Vars:** csv (3), utf (1), guid (1)
> **Code Keywords:** switch (2), for. (1), let (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** dropdown (2), right-click (1)
> **Analogies:** just like (2), such as (1)
> **File Paths:** more_people.csv (1)
> **Code Identifiers:** more_people (1)
> **Exercise Files:** exercise files (1)

#### Additional connection managers
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=0)** - [Instructor] SQL Server Integration Services is built around the concept of data integration flexibility.
>
> **[0:05](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=5)** The OLEDB, Excel, and Flat File connections will likely handle a good portion of your data.
>
> **[0:11](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=11)** But everyone's data environment is unique, and a connection that provides the core foundation or your organization might be completely unheard of in another.
>
> **[0:19](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=19)** And truth be told, most of the connection managers are just variations of what we've already seen.
>
> **[0:24](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=24)** You fill in a path or a network location to the resource, supply any log-in credentials, and test the connection.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=30)** For instance, if I come down here and right click and choose New Connection, we'll take a look at the [ADO.NET](https://ADO.NET) connection type.
>
> **[0:38](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=38)** I'll click the New button, and it asks for a server name, the logging credentials, and a specific database to connect to.
>
> **[0:46](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=46)** This is just like what we saw with the OLEDB connection manager.
>
> **[0:49](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=49)** Let's cancel out of this.
>
> **[0:51](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=51)** Now let's take a look at the FTP connection.
>
> **[0:54](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=54)** This would allow you to connect to an FTP server.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=56)** But you can see that it has similar requirements.
>
> **[0:59](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=59)** We need a server name and a port to connect to.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=62)** We have some user credentials, and we have some options specified by the server.
>
> **[1:07](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=67)** Once you've filled all that out, you can test the connection and be done with the connection manager.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=71)** Let's cancel out of this.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=73)** Even something like connecting to a Hadoop Cluster is essentially the same.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=78)** You supply the host and a port and any authentication credentials.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=82)** And then test the connection.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=84)** In all of these, if you run into trouble, it's almost certainly an issue with your specific network configuration or an issue with the user account permissions.
>
> **[1:32](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=92)** And the troubleshooting steps that you'll need to go through to resolve those issues will be unique to your data environment.
>
> **[1:39](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=99)** The best advice that I can give you here is to look to the documentation when implementing a new connection type.
>
> **[1:45](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=105)** For that, you'll want to start at this URL for the SQL Server Integration Services docs.
>
> **[1:50](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=110)** Each connection manager has its own web page.
>
> **[1:52](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=112)** It starts here at the top with the ADO connection manager and goes all the way down to the bottom with the WMIM connection manager.
>
> **[2:00](https://www.linkedin.com/learning/sql-server-integration-services-2/additional-connection-managers?u=76281980&t=120)** Each of the pages will outline the requirements and settings and anything that you need to be aware of when implementing them in your integration services packages.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2), oledb (2), ado (2), ftp (2), net (1)
> **Code Keywords:** let (3), type. (2), this. (2)
> **Analogies:** for instance (1), just like (1)
> **URLs:** [ado.net](https://ado.net) (1)
> **Documentation:** the documentation (1)
> **Warnings:** be aware (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 5. The Data Flow Task and Transformations

#### Data flow components
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/data-flow-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/data-flow-components?u=76281980&t=0)** - [Instructor] Like the control flow tasks, data flows use a series of components to describe the sequence of steps that Integration Services packages will move through.
>
> **[0:08](https://www.linkedin.com/learning/sql-server-integration-services-2/data-flow-components?u=76281980&t=8)** But where control flows describe various actions to take, data flows describe the movement of data.
>
> **[0:14](https://www.linkedin.com/learning/sql-server-integration-services-2/data-flow-components?u=76281980&t=14)** The components that you can add to the design service of a data flow diagram include the source of data that you want to pull from.
>
> **[0:20](https://www.linkedin.com/learning/sql-server-integration-services-2/data-flow-components?u=76281980&t=20)** These will use connections to external resources like a SQL Server database, an Excel file, an Oracle database, Hadoop cluster, or any other source with a supported connection manager.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-integration-services-2/data-flow-components?u=76281980&t=30)** Then you can pass that data through one or more transformations.
>
> **[0:34](https://www.linkedin.com/learning/sql-server-integration-services-2/data-flow-components?u=76281980&t=34)** Transformations will modify the data through a variety of components.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-integration-services-2/data-flow-components?u=76281980&t=37)** For instance, you might convert the incoming values into a different data type, or sort them differently from how they're sorted in the data source.
>
> **[0:44](https://www.linkedin.com/learning/sql-server-integration-services-2/data-flow-components?u=76281980&t=44)** You might apply an aggregate function to the data, or filter the records to just include a statistically significant sample of the full dataset.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-integration-services-2/data-flow-components?u=76281980&t=52)** The data flow diagram can include multiple transformations that'll occur in sequence, so you can construct a chain that'll process the incoming data to fit your unique requirements.
>
> **[1:01](https://www.linkedin.com/learning/sql-server-integration-services-2/data-flow-components?u=76281980&t=61)** Finally, you'll pass the transformed data into a destination.
>
> **[1:04](https://www.linkedin.com/learning/sql-server-integration-services-2/data-flow-components?u=76281980&t=64)** This is where you want the data to ultimately go.
>
> **[1:08](https://www.linkedin.com/learning/sql-server-integration-services-2/data-flow-components?u=76281980&t=68)** Just like with the source, you'll use a supported connector to write that data back to a SQL Server database or other storage format.
>
> **[1:14](https://www.linkedin.com/learning/sql-server-integration-services-2/data-flow-components?u=76281980&t=74)** Each of these components corresponds to the steps in an ETL procedure.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-integration-services-2/data-flow-components?u=76281980&t=78)** The data source provides the extract, the transform is, well, the transform, and the destination defines the load step.
>
> **[1:26](https://www.linkedin.com/learning/sql-server-integration-services-2/data-flow-components?u=76281980&t=86)** To finalize the data flow diagram, they use connecting lines called paths.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-integration-services-2/data-flow-components?u=76281980&t=90)** These take the form of arrows that define the sequence or the flow of the data from the source, through the transformations, and into the destination.
>
> **[1:38](https://www.linkedin.com/learning/sql-server-integration-services-2/data-flow-components?u=76281980&t=98)** Using these four components, the source, transform, destination, and paths, you'll be able to move data around in a consistent and automated way using SQL Server Integration Services.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (2), from. (1), type, (1), function (1), finally, (1)
> **Env Vars:** sql (3), etl (1)
> **Analogies:** for instance (1), just like (1)
> **Speakers:** - [instructor] (1)

#### Extracting data from a source
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=0)** - [Instructor] In this chapter, I'd like to construct a full data flow diagram from beginning to end.
>
> **[0:05](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=5)** Let's start by creating a new project by coming to the file menu, pointing to new and clicking on project.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=9)** This is will be an integration services project, I'll press next, and I'll call it Data Flows.
>
> **[0:17](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=17)** That'll give a fresh project and a new package to work with.
>
> **[0:20](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=20)** Now when you switch to the data flow tab, you'll see this message stating that package doesn't yet have a data flow task.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=27)** You click to add one and the interface will update.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=30)** Now if you switch back to the control flow tab, you'll exactly what happened, it just added in a simple data flow task to the diagram.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=37)** You can have multiple data flow tasks in a single package.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=41)** If you go up to the top and add in another one from the tool box, Notice that it has a slightly different name, the original is data flow task, and this one is data flow task one.
>
> **[0:53](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=53)** In a sequel server integration services package, you can't have two tasks with the same name.
>
> **[0:58](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=58)** If you wanted to rename these, you could just click on it and then click again to highlight the text and type in whatever you'd like.
>
> **[1:03](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=63)** I'll just leave the default click off of it to deselect it.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=66)** Now when you switch back to the data flow tab, this drop down menu's purpose becomes a little bit more clear.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=71)** This will allow you to work on the design of each data flow independently, for the first data flow task here, I'm going to work on the data flow diagram for the first task.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=87)** All data flow components can be found in the tool box on the left, and all data flows begin with a source, you can find a number of source components for instance here's the OData source, or here's the Oracle source.
>
> **[1:41](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=101)** You can find a few others if you scroll down, this is where you'll find for instance the Excel source and the Flat file source.
>
> **[1:49](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=109)** You can add any of these to your diagram but the easier way for common connections is to go back up to the top, and double click on the source assistant.
>
> **[1:58](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=118)** On the left of this window, you can choose your source type, for the ones that you have connectors installed for.
>
> **[2:03](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=123)** If you're not seeing the one that you need, then turn off this check box, and you'll see the list gets a little bit longer.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=128)** If you select any of the new ones, it'll tell exactly what you need to do in order to enable it.
>
> **[2:13](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=133)** I'm going to turn this back on, and choose the SQL server source.
>
> **[2:18](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=138)** Then I'll click to create a new connector and press the okay button.
>
> **[2:23](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=143)** Then on the connection manager window, notice the provider line here at the top of the screen.
>
> **[2:28](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=148)** It's using this driver to attempt a connection with.
>
> **[2:30](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=150)** Now you might get different results than me but when I press the data links button, and try and select a server form this drop down menu, it keeps coming up blank, instead what I need to do is go back and I'll press cancel here, and change the provider driver to the one at the very bottom, the SQL Server Native Client.
>
> **[2:51](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=171)** This is the that was used earlier in the course.
>
> **[2:56](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=176)** You're experience might vary but this is the best connection method for me, on my network setup.
>
> **[3:01](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=181)** Then using the drop down menu, we can select the server.
>
> **[3:06](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=186)** We've seen this a coupe of times now in the course, for this chapter, I want to pull data out of the standard wide world importers database, and after some transformations, we'll save it into the Conetico database.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=196)** So I'm going to select the server that has the wide world importers databases, and I'll come down here to the drop down menu, and I'll choose the standard wide worlds importers database there.
>
> **[3:24](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=204)** Let's test the connection, looks good, I'll say okay, and then say okay to finish creating the data source.
>
> **[3:32](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=212)** Now that creates the connection to the database but it doesn't define the specific data that we want to work with, for that we need to go into the editor for the source, and to do that, I'll double click on this icon, the data access mode will allow us to pull a table or a view by naming it, or we could use a variable to define the name.
>
> **[3:51](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=231)** We could also use a SQL select statement to pull specific columns and make relationships between tables in the database.
>
> **[3:57](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=237)** I'm going to pull an entire table and using the drop down menu, we could choose a table from the database.
>
> **[4:05](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=245)** I'm going to select the application.people table, you can press the preview button to see a sample of what the table contains.
>
> **[4:13](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=253)** If you switch over to the columns page here, you can choose to work with specific columns from the table.
>
> **[4:20](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=260)** For instance, maybe I don't need to see the hashed passwords column, or the user preferences column, I can turn those off here by unchecking these boxes and they won't be pulled in to my data flow.
>
> **[4:30](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=270)** Below that you can rename the columns, on the left is the column name from the wide world importers base and on the right is the name that'll be used after the data source brings that data in.
>
> **[4:40](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=280)** If you have a reason to change it, you can do it here, but I'm going to leave them exactly as they are in the source database.
>
> **[4:46](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=286)** Finally, on the error output page, you can define what specific actions will trigger the component to fail, when the data flow is processed.
>
> **[4:53](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=293)** The default is to fail anytime there is an error or truncation on any record in a any column.
>
> **[4:59](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=299)** You can get very specific here You can choose to ignore the failure or redirect that row to a different path in the diagram.
>
> **[5:07](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=307)** This will allow you to process those records Perhaps by writing them out to an error table while still allowing processing on the remaining records.
>
> **[5:15](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=315)** I'm going to stick with the default action which is to fail the entire component if any of these conditions occur.
>
> **[5:21](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=321)** Press the okay button, Press the okay button, and that finishes configuring the OLEDB source.
>
> **[5:22](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=322)** and that finishes configuring the OLEDB source.
>
> **[5:25](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=325)** You can now add additional sources You can now add additional sources to the data flow as needed, to the data flow as needed, to bring in data from multiple locations.
>
> **[5:28](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=328)** to bring in data from multiple locations.
>
> **[5:31](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=331)** For instance, you can bring some Excel data, For instance, you can bring some Excel data, and then in a transformation step and then in a transformation step merge those records with the one coming out of SQL Server.
>
> **[5:35](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=335)** merge those records with the one coming out of SQL Server.
>
> **[5:38](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=338)** But this is a good start.
>
> **[5:38](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=338)** But this is a good start.
>
> **[5:39](https://www.linkedin.com/learning/sql-server-integration-services-2/extracting-data-from-a-source?u=76281980&t=339)** You're data flows will always begin You're data flows will always begin with at least one data source component.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (4), let (2), interface (1), type, (1), for. (1)
> **UI Navigation:** click on (3), select the (3), switch to (1), scroll down (1)
> **Env Vars:** sql (5), oledb (2)
> **Analogies:** for instance (5)
> **CLI Commands:** find (3), make (1)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** coming up (1), earlier in (1)
> **Prerequisites:** setup (1)

#### Understand transformations
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/understand-transformations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/understand-transformations?u=76281980&t=0)** - [Instructor] Transformations provide the bulk of the activities performed in a data flow.
>
> **[0:04](https://www.linkedin.com/learning/sql-server-integration-services-2/understand-transformations?u=76281980&t=4)** Retrieving records from a source and writing data with a destination are comparably straightforward.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-integration-services-2/understand-transformations?u=76281980&t=9)** Transformations are where the power of the data flow lies.
>
> **[0:13](https://www.linkedin.com/learning/sql-server-integration-services-2/understand-transformations?u=76281980&t=13)** There are five general categories of transformations that you can add in Integration Services.
>
> **[0:17](https://www.linkedin.com/learning/sql-server-integration-services-2/understand-transformations?u=76281980&t=17)** Business Intelligence Transformations clean data, mine text, and run prediction queries.
>
> **[0:22](https://www.linkedin.com/learning/sql-server-integration-services-2/understand-transformations?u=76281980&t=22)** These can perform fuzzy matching across columns and can determine if records that contain data that is close should be consolidated into a single canonical row.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-integration-services-2/understand-transformations?u=76281980&t=30)** Row Transformations update column values and create new columns, then applies changes to every row in the input data.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-integration-services-2/understand-transformations?u=76281980&t=37)** Rowset Transformations create new rows by applying aggregate calculations, sampling, sorting, and pivoting.
>
> **[0:44](https://www.linkedin.com/learning/sql-server-integration-services-2/understand-transformations?u=76281980&t=44)** Split and Join Transformations distribute rows to different outputs, or merge multiple sources into a single data set.
>
> **[0:51](https://www.linkedin.com/learning/sql-server-integration-services-2/understand-transformations?u=76281980&t=51)** And finally, we have Auditing Transformations, which allow you to count rows as they process and make information about the environment available to the package.
>
> **[0:59](https://www.linkedin.com/learning/sql-server-integration-services-2/understand-transformations?u=76281980&t=59)** As you can see, there's a wide variety of actions that you can apply to your data.
>
> **[1:03](https://www.linkedin.com/learning/sql-server-integration-services-2/understand-transformations?u=76281980&t=63)** Like with the Control Flow tasks, the best way to fully understand all of the options and capabilities is to explore the available transformations in the toolbox, and think about how you can apply them to your own database needs.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)

#### Character Map row transformation
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=0)** - [Instructor] To start transforming the people data I'm going to apply a row transformation called Character Map.
>
> **[0:07](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=7)** This transformation uses transact SQL string functions to modify the input data.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=12)** With it, you could do things like converting or convert the text case to uppercase or lowercase.
>
> **[0:20](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=20)** I'm going to add a Character Map transformation to the data flow.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=23)** You can find it underneath the Other Transformation section here, and I'll click and drag one into my data flow.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=30)** We're going to use this to convert the full name column from the original data set into all uppercase characters.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=37)** The first thing we need to do is pass the input data into the transform.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=41)** To do that, click the data source component and then click and drag the blue arrow and drop it onto Character Map.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=47)** The blue arrow represents the data that was successfully retrieved by the data source connection.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=52)** The red arrow represents the data that comes out of the error state if you configured that in the data source properties.
>
> **[0:59](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=59)** Once the data is connected into the tranformation, you could double click the transformation to configure it.
>
> **[1:03](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=63)** At the top of the editor, you'll see a table that shows all of the available input columns coming out of the data source.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=69)** I want to process the full name column, so I'll place a check mark there, and it adds a new line down below.
>
> **[1:15](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=75)** Now we just need to fill in the details about what we want to do with this column.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=78)** The destination option will allow you to either create a new column for the processed data or you can overwrite the existing data with the results of the change.
>
> **[1:26](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=86)** Keep in mind that this is only affecting the data copied into the data flow.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=90)** This doesn't do anything to the original source data back in the Wide World Importers database.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=94)** I'll choose to create a new column for the processed data.
>
> **[1:37](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=97)** The next property is the operation.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=104)** so I'll place a check mark there, and press okay.
>
> **[1:46](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=106)** Then we have the alias or the name of the new column that's going to get created.
>
> **[1:50](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=110)** I'm going to chance this to full name uppercase.
>
> **[1:55](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=115)** If you wanted to perform additional transformations on different columns, just check the names up above and you'll get additional rows down below.
>
> **[2:02](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=122)** Let's go ahead and turn that one back off again.
>
> **[2:04](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=124)** Just like with the data source, there's an option at the bottom of the screen to be specific about what happens if this transformation fails for any reason.
>
> **[2:11](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=131)** You can send failed data to a specific path in the data flow or you can fail the entire component.
>
> **[2:16](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=136)** I'm going to leave the default options to fail the entire component and press okay here.
>
> **[2:20](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=140)** Then I'll press okay once again to complete the transformation configuration.
>
> **[2:24](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=144)** Now we could run this data flow right now, but before we do that I want to show you one thing that we can do with the paths that join the different components.
>
> **[2:31](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=151)** Let's double click on the blue path between the data source and the transformation, and then I'll switch over to the meta data tab.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=158)** Here you can review all the details about the data types, scale, length, and other properties about each column that's being passed between the components.
>
> **[2:46](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=166)** On the data viewer tab, you have the option to enable a viewer so that you can see the data when you run the task in Visual Studio.
>
> **[2:53](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=173)** On the right are the columns that'll display in the popup window.
>
> **[2:56](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=176)** If you don't want to see a specific one, you just select it here and use the arrows to move it over to this Unused Columns column.
>
> **[3:02](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=182)** When you're done, press okay to dismiss the editor and now you notice a new icon here with the little magnifying glass on that line.
>
> **[3:08](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=188)** Now if you run the data flow by pressing the start button, it'll build the package and then display the data as it's moving from the source to the first transform in this window here.
>
> **[3:17](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=197)** This isn't showing the results of the transform because that's happening further down the pipeline, and we can review that after we add another component.
>
> **[3:27](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=207)** as you add additional components, you can verify that the data that's being passed between them is getting transformed in the way that you expect.
>
> **[3:33](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=213)** When you're done reviewing this, you can close the tab here and then press the stop button to return back to the design environment.
>
> **[3:38](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=218)** to the design environment.
>
> **[3:39](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=219)** So there's the first transform.
>
> **[3:39](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=219)** So there's the first transform.
>
> **[3:41](https://www.linkedin.com/learning/sql-server-integration-services-2/character-map-row-transformation?u=76281980&t=221)** It processes the incoming data It processes the incoming data and it'll create a new column and populate each record and it'll create a new column and populate each record with a copy of the full name values, with a copy of the full name values, converted to uppercase characters.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), pass (1), switch (1), this, (1)
> **CLI Commands:** find (1)
> **Env Vars:** sql (1)
> **Tools:** visual studio (1)
> **UI Navigation:** click on (1)
> **Analogies:** just like (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** configure (1)

#### Conditional Split transformation
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=0)** - [Instructor] Now let's take a look at adding a conditional split transformation to divide the incoming data set into two different tables.
>
> **[0:10](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=10)** and once you find it, you can go ahead and double click on it or just click and drag it out and drop it into any position that you want.
>
> **[0:16](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=16)** Just like before we need to feed the data in first.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=18)** So, click the "Character Map" step and then drag the blue arrow and drop it on "Conditional Split".
>
> **[0:24](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=24)** Then, double click it to configure it.
>
> **[0:26](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=26)** Conditional Split will evaluate the content of a record against conditions that you specify.
>
> **[0:31](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=31)** This will determine how to write the records and move them into multiple output paths.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=36)** On the top left you have variables, perimeters, and the original table columns to work with.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=41)** And on the right you have all the T sequel functions and operators that you can apply to build a conditional statement.
>
> **[0:48](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=48)** One of the columns that we have in our data set is called "is employee".
>
> **[0:52](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=52)** This is a Boolean data type that's true if the person is an employee of wide world importers, and it's false if they aren't.
>
> **[0:58](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=58)** It seems pretty straight forward.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=60)** What I want to do is use this column to split the data out into two different tables - one just for employees and one for everyone else.
>
> **[1:08](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=68)** by creating the first output.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=70)** I'll come down here to output name and I'll call it employees.
>
> **[1:15](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=75)** Then for the condition that we want to evaluate, you're going to drag the is employee column out and drop it right in there.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=82)** That'll place a reference to it in the condition.
>
> **[1:25](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=85)** Then I'll click after it to deselect it and then we'll go into the operators folder.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=90)** Scroll down until you find the equality operator, this one here with the two equal signs, and we'll click and drag that into position.
>
> **[1:36](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=96)** Then I'll click after that to deselect it and I'll type true.
>
> **[1:40](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=100)** That finishes the first condition.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=102)** If the text turns black it's valid.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=104)** If the text is red here then it means that there's an error in the condition.
>
> **[1:47](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=107)** Hover your mouse over it and read the pop-up to see if you can determine how to fix it.
>
> **[1:52](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=112)** So let's add one more output.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=114)** I'm going to make a big assumption here and just call everyone that's not an employee a customer.
>
> **[2:00](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=120)** We'll repeat the process for the condition.
>
> **[2:01](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=121)** I'll drag in is employee, then we'll drag in the equality, and this time I'll type false.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=128)** That should take care of all the other records in the table.
>
> **[2:11](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=131)** Feel free to dive into the folders above to explore all of the different functions that are available to you here.
>
> **[2:16](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=136)** Writing out these conditions will require a bit of trans and sequel knowledge so the more experience you have on that front, the easier this step will be.
>
> **[2:23](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=143)** The is employee column is a Boolean data type as I said so the true and false conditions here by definition will cover all the cases.
>
> **[2:31](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=151)** But if you're splitting your data on other data types, you might have data that doesn't fit into any condition you create.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=158)** In those cases any leftover records that don't match will go into the default output defined here at the bottom of the window.
>
> **[2:44](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=164)** So I'll press okay and that finishes the configuration of the conditional split.
>
> **[2:48](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=168)** Now conditional split will have two different outputs that we can use.
>
> **[2:52](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=172)** If you drag in another transform, it doesn't really matter which one, I'll just use conditional split again, and drop it down below.
>
> **[2:57](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=177)** Then I can click on conditional split up here and drag the output line and drop it into the new transform.
>
> **[3:03](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=183)** This'll bring up a new pop up window where we can determine which output we want to use.
>
> **[3:07](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=187)** You have the option of just the employees, which we know will be empty.
>
> **[3:14](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=194)** I'll select the employees here and then press okay, and that'll show up on the path so we can keep it straight.
>
> **[3:19](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=199)** If I drag in another transform, and then connect that one using the new blue arrow here.
>
> **[3:24](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=204)** This time I'll choose customers and say okay, Now just to verify that everything is working, I'll scroll up to the top, double click on the path and then switch over to the data viewer page where I'll turn off this checkbox and press okay.
>
> **[3:42](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=222)** Then I'm going to actually close the output window, that'll give me more room on the screen.
>
> **[3:46](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=226)** Then I can double click on each of these lines and turn the data viewer on.
>
> **[3:56](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=236)** That'll allow me to view the output of the employee path and the customer path.
>
> **[4:00](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=240)** Then I can come up to the top and press start to view the results of the data flow.
>
> **[4:05](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=245)** Both of the data viewers will open up in separate tabs and here's the one for the employees data.
>
> **[4:12](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=252)** In the employees one if we take a look for the is employee column which I believe is this one right here let me just make this a little wider, yep, there's is employees there, If I switch over to the customer data view and take a look at the same column, all of these values are false.
>
> **[4:27](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=267)** So the conditional split is working great.
>
> **[4:30](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=270)** Also while we're here we can also scroll over to the far right to see the results of the other transformation that we did - the convert to uppercase on the full main column.
>
> **[4:37](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=277)** When you're done taking a look at the data, you can go ahead and close these tabs down, and then you can stop the data flow, and you can press the stop button and that'll return you back into design view.
>
> **[4:48](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=288)** I'm also going to delete these two extra transformations that I was just using as placeholders that I was just using as placeholders to be able to work with the paths.
>
> **[4:52](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=292)** to be able to work with the paths.
>
> **[4:54](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=294)** Just right click on each of them Just right click on each of them and choose delete from the pop up menu.
>
> **[4:55](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=295)** and choose delete from the pop up menu.
>
> **[4:58](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=298)** So there's our second transform.
>
> **[4:58](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=298)** So there's our second transform.
>
> **[4:59](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=299)** It'll split out the data into two distinct paths It'll split out the data into two distinct paths in the data flow.
>
> **[5:01](https://www.linkedin.com/learning/sql-server-integration-services-2/conditional-split-transformation?u=76281980&t=301)** in the data flow.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), delete (3), switch (2), else. (1), require (1)
> **UI Navigation:** click on (6), scroll down (1), select the (1), scroll up (1), checkbox (1)
> **CLI Commands:** find (2), make (2)
> **Definitions:** is a  (2), is called (1), is an  (1)
> **Analogies:** just like (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Rowset transformations
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=0)** - [Narrator] Row set transformations can sort, sample and aggregate records in an input source.
>
> **[0:06](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=6)** Let's apply a couple to our workflow.
>
> **[0:08](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=8)** First, I want to sort the employees into alphabetical order.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=12)** You can find the sort transform at the bottom of the common category.
>
> **[0:15](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=15)** And it's right there, I'll just click and drag one in.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=18)** Then I'll bring in the input data.
>
> **[0:19](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=19)** So I'll click on additional split and drag the blue arrow and drop it on top of that.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=23)** For the output, we're going to work with the employees data.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=27)** Then I'll double click on the sort to configure it.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=30)** I'm going to sort based off of the preferred name column.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=32)** So I'll place a check mark there and that'll add a line down below.
>
> **[0:34](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=34)** For the sort type we have the option of either ascending or descending.
>
> **[0:38](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=38)** I'll leave it in an alphabetical order with ascending.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=41)** And then take a look at the sort order.
>
> **[0:43](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=43)** If you needed additional level to your sort, you would just add more columns from the list above and the specify the sort order to apply it in the right order.
>
> **[0:51](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=51)** I don't need to do that with our data, so I'll just leave it as is.
>
> **[0:53](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=53)** And press okay.
>
> **[0:54](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=54)** And that finished the configuration of the sort.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=56)** Now let's do something a little bit different with the customers coming out of the split.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=60)** Let's suppose that I don't want to retrieve all the records.
>
> **[1:03](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=63)** I just want a representative sample.
>
> **[1:05](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=65)** This can be useful if you're performing a statistical analysis or are processing scientific data.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=71)** Under the other transformations group, you'll find percentage sampling.
>
> **[1:15](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=75)** This ones used for returning something like 10 or 25 percent of the records.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=79)** Or you can use row sampling, which will return a specific number of rows.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=84)** I'm going to choose percentage sampling.
>
> **[1:25](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=85)** I'll click and drag one in.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=88)** And then once again, we'll connect it to the data source using this blue arrow, I'll drag and drop that there.
>
> **[1:32](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=92)** And this time we're going to work with the customers data.
>
> **[1:35](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=95)** Next we'll double click on the component to configure it.
>
> **[1:37](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=97)** I'm going to use 10 percent of the original data set so you can leave this number here but you can dial in whatever number you'd like to see.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=104)** Just like with the split component, the results of the sampling will get output into two different paths.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=108)** You can name them here if you want.
>
> **[1:50](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=110)** One for the selected records and one for the unselected records.
>
> **[1:53](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=113)** The records coming out of the sampling are going to be randomly sampled.
>
> **[1:57](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=117)** You can use a fixed seed value which will allow you to return the same, random set of records every time.
>
> **[2:02](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=122)** This can be useful for development but in production, you're going to want a truly randomized sample that's different every time the package is run.
>
> **[2:09](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=129)** So you're going to want to leave this option off in most cases.
>
> **[2:12](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=132)** Let's press okay and that finishes the configuration of that step.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=135)** So that's two different row transformations.
>
> **[2:18](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=138)** The sort transform will put our employees in a logical order.
>
> **[2:20](https://www.linkedin.com/learning/sql-server-integration-services-2/rowset-transformations?u=76281980&t=140)** And the sampling transform will return a random selection of records.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **UI Navigation:** click on (3), drag and drop (1)
> **CLI Commands:** find (2)
> **Prerequisites:** configure (2)
> **Analogies:** just like (1)
> **Speakers:** - [narrator] (1)

#### Loading data to a destination
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=0)** - [Instructor] The last step in any data flow is to output the data that you've ingested and transformed.
>
> **[0:05](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=5)** You can do this by writing into a data file or through a database connection.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=9)** The data flow that I've put together throughout this chapter, brought in a table and then it transformed it into a couple of different components.
>
> **[0:15](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=15)** At this stage, we have two output tables to deal with.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=18)** One is an alphabetized list of employees.
>
> **[0:21](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=21)** And the other is a sampled list of customers.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=23)** I want to output both of these to the Kinetico database.
>
> **[0:26](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=26)** So come up here to the top of the toolbox, and I'll double click on the Destination Assistant.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=32)** Just like with the Source Assistant, I'm going to choose the SQL Server destination type, then choose New and press OK.
>
> **[0:39](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=39)** And once again, I'm going to come up here to the Provider and switch it over to the SQL Server native client.
>
> **[0:45](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=45)** Then I'll choose the database server instance that holds the Kinetico database.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=50)** In my case, it's this one here, with the name SQL Server 2019.
>
> **[0:54](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=54)** Down below, we'll select the Kinetico database from the list, then I'll test the connection.
>
> **[0:58](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=58)** Looks good, say okay.
>
> **[0:59](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=59)** And press OK one more time.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=62)** That'll place the destination task up here and I'll just move it down into position.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=66)** Next we'll connect this into the data flow.
>
> **[1:08](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=68)** I'll click the sort transformation, and then drag the blue arrow and drop it into the destination.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=73)** Then I'll double click on the destination to configure it.
>
> **[1:17](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=77)** The connection manager is already linked to the Kinetico database.
>
> **[1:20](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=80)** And what I want to do is create a new table for these values to go into.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=84)** So come down here to the next row.
>
> **[1:26](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=86)** And I'll press the new button here.
>
> **[1:29](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=89)** That'll display a create table statement that'll be used to create the table.
>
> **[1:32](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=92)** And you can see that it pulled in all the column names and data types to match the input data.
>
> **[1:37](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=97)** The only thing that I want to do here is change the name of the table to "Employees".
>
> **[1:43](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=103)** I'll highlight this line here, this says OLEDB Destination and the brackets, and I'll just type in Employees.
>
> **[1:49](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=109)** Then I'll press the OK button and that value gets put in here, to the row.
>
> **[1:52](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=112)** Now one thing that I do want point out here and make sure is exceptionally clear, is that this table was actually just created on the Kinetico database.
>
> **[2:00](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=120)** In other words, what we're setting up is a connection to an existing table, not building a table when the package runs.
>
> **[2:06](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=126)** You can verify this by putting this process on hold for a moment and switch over to SQL Server Management Studio to take a quick peek.
>
> **[2:13](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=133)** In the Kinetico database, I'm going to expand the Tables folder and if I scroll down here, bring that up on the screen a little bit, I'm going to right click on the Tables folder and choose refresh.
>
> **[2:22](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=142)** Here you can see the employees table that we just created.
>
> **[2:25](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=145)** And if I expand this open, we'll see all the columns are already there.
>
> **[2:29](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=149)** However, if I right click on it and choose Select Top 1000 Rows, we'll see that the table is currently empty.
>
> **[2:37](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=157)** So this is the table that we just created by setting up the data flow destination.
>
> **[2:41](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=161)** It's empty at the moment, but the column structure's in place, ready for the load.
>
> **[2:46](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=166)** Okay, let's close down this tab and go back into Visual Studio.
>
> **[2:51](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=171)** So we know this table's already created in the database and we're just linking to it here.
>
> **[2:55](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=175)** We can now verify the table mappings by switching over to the Mappings page and make sure the table from the available input columns matches the destination columns over here.
>
> **[3:05](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=185)** Everything's looking good, so I'll press the OK button to finish the destination connection.
>
> **[3:09](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=189)** Now I need to do this one more time This time, since I already have a connection to the Kinetico database here in the package, what I can do instead of using the Destination Assistant, is come down and find the OLEDB Destination, and I believe that's underneath the Other Destinations option.
>
> **[3:27](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=207)** There it is right there.
>
> **[3:28](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=208)** I'll drag one of those out and drop it into the data flow.
>
> **[3:31](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=211)** Then I need to connect it to the Percentage Sampling transformation.
>
> **[3:35](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=215)** I'll click it and then drag the blue arrow For the output, we're only concerned with the selected output from the sample.
>
> **[3:44](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=224)** We don't really care about the unselected output.
>
> **[3:47](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=227)** I'll make that selection here and press OK.
>
> **[3:50](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=230)** And then I'll double click on the Destination to configure it.
>
> **[3:54](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=234)** For the Connection Manager line, I want to make sure that this is using the Kinetico database connection, and then once again, we'll create a new table here.
>
> **[4:02](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=242)** This time I'll rename the table to "Sampled Customers".
>
> **[4:08](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=248)** I'll press the OK button and that table gets created in the Kinetico database and links to it here.
>
> **[4:12](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=252)** Once again we'll review the mappings to make sure everything looks straight across.
>
> **[4:15](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=255)** Looks good, and press OK.
>
> **[4:18](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=258)** Now incidentally, if you don't view the mappings page, you'll get an error that the configuration isn't complete.
>
> **[4:23](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=263)** So even though there's no need for us to change anything there, to finish the process.
>
> **[4:30](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=270)** And with that, it completes our data flow.
>
> **[4:32](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=272)** We have a table of data that's brought in.
>
> **[4:34](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=274)** It's processed through some transformations.
>
> **[4:36](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=276)** And the results are output to two tables in a database on a different server.
>
> **[4:40](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=280)** Now I want to start it by clicking the Start button here on the toolbar to make sure that everything runs.
>
> **[4:46](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=286)** Everything gets a green check mark, so it looks like everything processed correctly.
>
> **[4:49](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=289)** So that's good.
>
> **[4:50](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=290)** Now let's go ahead and take a look at the database in Management Studio.
>
> **[4:54](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=294)** In the Kinetico database, you might need to refresh the Tables folder.
>
> **[4:58](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=298)** But once you do, you should find the "Employees" table and the "Sampled Customers" table that was just created.
>
> **[5:03](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=303)** We can right click on the "Employees" table and select Top 1000 Rows to view the data inside.
>
> **[5:07](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=307)** And there is our employees, you can see that they're listed alphabetically based off of the Preferred Name column.
>
> **[5:13](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=313)** We can also take a look at the "Sampled Customers".
>
> **[5:15](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=315)** I'll right click and select Top 1000 Rows here.
>
> **[5:18](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=318)** And there are our customers.
>
> **[5:19](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=319)** And I can also see that there's only 108 rows being returned.
>
> **[5:25](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=325)** So that's the data brought over from the Wide World Importers database on a different server, processed and transformed, processed and transformed, and then saved into this database and then saved into this database through the steps that we put together through the steps that we put together in an integration services data flow.
>
> **[5:35](https://www.linkedin.com/learning/sql-server-integration-services-2/loading-data-to-a-destination?u=76281980&t=335)** in an integration services data flow.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6), find (2)
> **UI Navigation:** click on (6), select the (1), scroll down (1)
> **Code Keywords:** switch (2), let (2), type, (1), case, (1)
> **Env Vars:** sql (4), oledb (2)
> **Definitions:** is a  (2), is an  (1), in other words (1)
> **Prerequisites:** configure (2)
> **Tools:** visual studio (1)
> **Analogies:** just like (1)

#### Prevent duplicate records
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=0)** - [Instructor] Before we call this data flow complete, we need to think through what happens if you run it multiple times.
>
> **[0:05](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=5)** The destination component is simply writing records to an existing table in the Kinetico database.
>
> **[0:11](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=11)** In this regard, it's acting like an insert into query, where records are simply being added to what's already there.
>
> **[0:17](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=17)** If you run this data flow multiple times, for instance, by pressing the start button, then you're going to wind up with duplicate records in the tables.
>
> **[0:26](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=26)** Let's take a look back inside of management studio and I'm going to take a look inside of the SampledCustomers table again.
>
> **[0:31](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=31)** This time I'll select top 1000 rows and you'll see that it's now returning 219 rows, where previously we had 108.
>
> **[0:38](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=38)** At this point, we have two copies of every single record in this table.
>
> **[0:42](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=42)** That's probably not the ideal situation that you were looking for.
>
> **[0:45](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=45)** So, we need to go back into Visual Studio and make a change to our work flow.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=50)** One way that we can deal with this is by truncating the tables in the control flow diagram, To do that, I'm going to switch over to the control flow, and here we have our data flow tasks that we've been running.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=62)** There's also this other duplicate one here that we added earlier on in the chapter.
>
> **[1:05](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=65)** So, I'm just going to actually right-click on this and delete it now.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=70)** what I can do is go up here to the top, and add in an Execute SQL Task.
>
> **[1:15](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=75)** Then I'll double-click on this to configure it.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=78)** For the connection, I want to connect it to the Kinetico database, so I'll select it from the drop-down list there, and then for the SQL statement, I'll click on the ellipsis button and we'll type in the statement.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=87)** I have it copied onto my clipboard from the exercise file, so I'm just going to paste that in, and it's simply truncate table employees and then truncate table SampledCustomers.
>
> **[1:38](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=98)** but leave the structure intact.
>
> **[1:41](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=101)** I'll press the okay button to save that in here, and then press okay again.
>
> **[1:45](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=105)** Then I need to make sure that this task runs first, before the data flow.
>
> **[1:49](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=109)** To do that, I'll just drag the precedence constraint and drop it on the data flow task.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=114)** Now when I run the entire package, it's going to execute the SQL task, which will truncate the tables.
>
> **[1:59](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=119)** Then it'll run the data flow task and repopulate them, and just to verify that everything's working, we'll switch back into management studio and take a look inside of this table once again.
>
> **[2:09](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=129)** This number is actually slightly different than what we had before because the 10% sample that we're taking in the data flow So truncating the table first is an easy way to deal with a problem of duplicate records, but there are many different approaches that you can take that don't involve removing everything You can also analyze the existing data and filter out any matching records from the source as a transformation step, or using variables, you can create new tables for each subsequent load.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=158)** for each subsequent load.
>
> **[2:41](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=161)** The approach that's right for you The approach that's right for you will be determined by your unique situation and needs.
>
> **[2:42](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=162)** will be determined by your unique situation and needs.
>
> **[2:45](https://www.linkedin.com/learning/sql-server-integration-services-2/prevent-duplicate-records?u=76281980&t=165)** The important lesson is that you need to be The important lesson is that you need to be on the lookout for unintended consequences on the lookout for unintended consequences when you run data flows multiple times.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (2), let (1), for. (1), delete (1)
> **Env Vars:** sql (3)
> **UI Navigation:** right-click (1), double-click (1), click on (1)
> **CLI Commands:** make (2)
> **Definitions:** we call this (1), is an  (1)
> **Tools:** visual studio (1)
> **Exercise Files:** exercise file (1)
> **Analogies:** for instance (1)


### 6. Controlling Package Execution

#### Work with variables and scope
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=0)** - [Instructor] We've seen a number of places throughout the interface that gives us the opportunity to incorporate variables into our control and data flows.
>
> **[0:07](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=7)** Variables allow you to set up the structure of your package with supply-specific values that define execution parameters at runtime.
>
> **[0:14](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=14)** This is useful for creating flexible packages that can be tweaked on the fly, without having to come back into the designer to reconfigure them.
>
> **[0:22](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=22)** I've created a new empty project and we're starting off with a fresh package again.
>
> **[0:26](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=26)** To work with variables you can right-click anywhere on an empty area of the design surface and choose Variables from the popup menu.
>
> **[0:33](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=33)** That will open up a new window at the bottom of the screen.
>
> **[0:35](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=35)** At the time of this recording, there is a known bug with the rendering of the Variables window.
>
> **[0:40](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=40)** If you notice any issues, you can open up the Tools menu and choose Options, then navigate to Environment, General, and uncheck the option for optimize rendering for screens with different pixel densities.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=52)** Then, restart Visual Studio.
>
> **[0:54](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=54)** To add a new variable, you'll come over here to this little toolbar and click the first icon.
>
> **[0:58](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=58)** That'll add a new variable line and now we just need to configure it.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=62)** For the name, I'm going to call mine VarColor.
>
> **[1:05](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=65)** The scope allows you to define where you can use this variable.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=69)** Package means it'll be available to any task or data flow component in the entire package.
>
> **[1:14](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=74)** Variables can also be scoped to specific containers, for instance, a data flow container, a sequence container, or a loop container.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=82)** Or you can scope them to a specific task.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=84)** Doing so will make them available only inside of the scope container or task.
>
> **[1:29](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=89)** So for instance if I come up here to my control flow diagram, and I add in a sequence container, and I'll also add in a task.
>
> **[1:35](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=95)** How about the FTP Task?
>
> **[1:37](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=97)** Now if I come down into the Variables window, and click this button here to open up the grid options, I can turn on the option to show variables of all scopes.
>
> **[1:45](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=105)** Now, we can scope our variable by selecting it and choosing this button here with the blue arrow to move the variable.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=111)** That will allow me to set the scope into the package, or if I expand the Executables folder, I can attach it to either the FTP Task, or the sequence container.
>
> **[1:59](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=119)** Choose whichever it is you like and then press OK.
>
> **[2:01](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=121)** You will see the scope has updated.
>
> **[2:03](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=123)** I'm going to reset this back to scope it to the package.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=128)** Then I can go ahead and delete both of these components.
>
> **[2:10](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=130)** We'll just drag a box around both of them, right-click and choose Delete.
>
> **[2:14](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=134)** Next we can take a look at the data type.
>
> **[2:17](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=137)** Right now mine is set to Int32.
>
> **[2:20](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=140)** Your options in this dropdown menu are all the usual suspects, from Boolean here at the top, we have a bunch of numeric types and we can also use a string datatype.
>
> **[2:29](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=149)** I'll choose that one and then set the starting value for my variable to the color blue.
>
> **[2:35](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=155)** Alternatively, you can set the value of the variable using an expression.
>
> **[2:39](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=159)** Press the ellipsis button will bring up an Expression Builder.
>
> **[2:42](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=162)** Now, if you're not seeing the ellipsis button right here, what you can do is try going into the Options menu and toggling this column off and on again.
>
> **[2:49](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=169)** That'll usually reset it so you can see the ellipsis button.
>
> **[2:52](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=172)** Then when you click it, it will bring up that Expression Builder.
>
> **[2:55](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=175)** Here you can use any Transact-SQL function or operator to construct an expression to define the value.
>
> **[3:01](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=181)** I'd also like to point out that Integration Services has a number of built-in system variables that you can also use in your packages.
>
> **[3:07](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=187)** You can see a listing of them by opening this folder here and then opening the System Variables folder.
>
> **[3:12](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=192)** And here's that list there.
>
> **[3:13](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=193)** So, I'm going to press the Cancel button to get out of the Expression Builder and return back to the Variables window.
>
> **[3:18](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=198)** I'm just going to leave mine set to the value of blue.
>
> **[3:21](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=201)** So, that's how you create a variable inside of your packages.
>
> **[3:24](https://www.linkedin.com/learning/sql-server-integration-services-2/work-with-variables-and-scope?u=76281980&t=204)** Let's see how to use it next.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (2), interface (1), type. (1), function (1), let (1)
> **UI Navigation:** right-click (2), navigate to (1), dropdown (1)
> **Env Vars:** ftp (2), sql (1)
> **Analogies:** for instance (2)
> **Prerequisites:** set up (1), configure (1)
> **CLI Commands:** make (1)
> **Tools:** visual studio (1)
> **Definitions:** is a  (1)

#### Add execution parameters
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=0)** - [Instructor] We just created a variable, and now I want to use it in my package.
>
> **[0:04](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=4)** Variables can be used as parameters in a large number of locations throughout integration services.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=9)** And they help make your packages more dynamic and flexible.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=12)** For this example, I'm going to add in a data flow task into my control flow diagram, then I'll switch over to the Data Flow tab, and I'll come down and I'll add an OLE DB Source.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=23)** Then I'll double click it to configure it.
>
> **[0:25](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=25)** First I want to connect to the Wide World Importers data warehouse.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=28)** I'll click the New button, click New again, then using the Server dropdown menu, I'll choose the server where that database lives, and then using the database dropdown menu, I'll choose the WideWorldImportersDW database.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=41)** Let's test the connection to make sure it works, good, and say OK to that.
>
> **[0:45](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=45)** Then I'll press OK again, to fill in that connection manager.
>
> **[0:48](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=48)** In the data access mode, here we have a couple of different places where we could use a variable.
>
> **[0:53](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=53)** We can supply the table or the view name using a variable, or we can supply the entire SQL command with a variable.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=60)** The variable that I created in the last movie, contains just a single word.
>
> **[1:04](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=64)** It's not a full Select statement.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=66)** Right now, it's just set to the value blue.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=69)** I want to use that variable in a Where clause.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=71)** So I'm going to actually choose the SQL command option here, and then come down to the SQL command text, and paste in a Select statement that I have copied onto my clipboard.
>
> **[1:20](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=80)** You can find a copy of this in the exercise files.
>
> **[1:23](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=83)** This statement will pull the Stock Item Key, Stock Item, and Color columns from the Stock Items table.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=90)** But I don't want to pull all of the records, I only want to see the ones where the color matches the text stored in the variable.
>
> **[1:36](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=96)** To use the variable, I'm going to come over here, right after the equals sign, and I'm going to type in a question mark character.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=102)** The question mark will allow you to parametrize the SQL command.
>
> **[1:46](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=106)** If you wanted to use multiple variables, you just add a question mark as a placeholder for each one.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=111)** And then you'll define them in the order that they appear in the statement.
>
> **[1:55](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=115)** So now I have Where [Color] = ?.
>
> **[1:59](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=119)** Now press the Parameters button on the right.
>
> **[2:01](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=121)** That'll go through your statement and find all the question marks, and allow you to hook them to specific variables.
>
> **[2:07](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=127)** We only have the one question mark, so I only have to set one parameter.
>
> **[2:10](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=130)** And we'll attach it to the variable that we created.
>
> **[2:13](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=133)** Using the dropdown menu it's going to list up all the system variables, but somewhere in here, you should find the user variable that we created, called VarColor.
>
> **[2:19](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=139)** The direction is going to be an input, so I'll make sure that that stays there, and press OK.
>
> **[2:23](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=143)** Now it doesn't look like anything has changed in the SQL command text, but if I press the Preview button, you should see just a listing of the products that have the color blue.
>
> **[2:33](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=153)** I'm going to close this, and press OK, to save the changes to the OLE DB provider.
>
> **[2:37](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=157)** Then I'll come down here into my variables table and I'm going to change the value from blue to something different, how about black?
>
> **[2:44](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=164)** Now if you go back up, and reconfigure the source again, I'm not going to make any changes, I'm just going to preview the new set of table values.
>
> **[2:51](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=171)** And here, we can see a new listing of products that are just the color black.
>
> **[2:55](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=175)** So at this point the variable is hooked into the SQL Select statement.
>
> **[2:58](https://www.linkedin.com/learning/sql-server-integration-services-2/add-execution-parameters?u=76281980&t=178)** And it's dynamically affecting the records that are pulled out of the database.

> [!info]- Semantic Content
>
> **Env Vars:** sql (6), ole (2)
> **CLI Commands:** make (4), find (3)
> **Code Keywords:** switch (1), let (1), this, (1)
> **UI Navigation:** dropdown (3)
> **Cross-References:** in the last (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Change a variable’s value
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=0)** - [Instructor] In the last couple of movies, I created a variable called VarColor, and then I hooked it into a OLE DB Source using a SQL command right here with a parameter.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=9)** We're parameterizing it with a question mark here in the where clause of the select segment and then clicking over to parameters, you can see that parameter's being used here with the variable VarColor.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=18)** Now, I want to take a look at how you can modify that variable value at runtime.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=23)** This process is largely going to be dependent on your environment, the scripting languages that you're using, and how you're triggering your packages to run.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=30)** But one way that we can modify the value of a variable is using a User Interface Control called an Input Box, that'll display when the package runs.
>
> **[0:39](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=39)** To do that, I'm going to switch over to the Control Flow tab of the diagram.
>
> **[0:42](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=42)** Then, I'll come up here to the top and I'll add in a Script Task.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=47)** You can find it inside of the Common group.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=50)** When I double-click on it to configure it, I first need to choose which scripting language we want to use.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=55)** The options are either a C# or Visual Basic, and I'm going to use VB.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=60)** Next, I need to allow the script to be able to read and write values for the variable.
>
> **[1:04](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=64)** I'll click on the bottom property and then click the ellipses button over here on the right, Make sure you do this in the Read/Write variables property, not the Read Only variables property.
>
> **[1:16](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=76)** If you place it up here, Next, press the Edit Script button.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=82)** This'll open up a new visual studio window and it might take moment to load, so just be patient.
>
> **[1:29](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=89)** When it opens, you'll have a bunch of code already filled in and we just need to find the line that says "Add your code here."
>
> **[1:35](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=95)** I'm going to scroll down just a little bit to bring it up on the screen.
>
> **[1:38](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=98)** And after that, I'm going to press Enter one more time to give myself an extra space.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=102)** Then I'm going to paste in some code that I had copied to my clipboard that you can find in the Exercise Files.
>
> **[1:46](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=106)** There'll be a pop up window and it will have the title pick a color in a little description that asks what color?
>
> **[1:52](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=112)** Now, this obviously isn't a course on coding, but I definitely encourage you to look into either the Visual Basic or C# languages, if you're going to be doing extensive work in Integration Studio.
>
> **[2:02](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=122)** There's a lot of things that you can do when you combine SSIS with a programming language.
>
> **[2:06](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=126)** For now, just press the save button up here on the tool bar, and then come over and close the Visual Studio window.
>
> **[2:13](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=133)** That'll take you back into the Script Task Editor, where I can press okay to finish the Script Task.
>
> **[2:18](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=138)** Now, we need to make sure that the Script Task executes before the Data Flow Task.
>
> **[2:22](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=142)** So I'm just going to drag this into position, and then using precedence constraint arrow, I'll drag and connect those two.
>
> **[2:28](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=148)** The last thing that I want to do is to be able to view the results of the data import.
>
> **[2:31](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=151)** So, I'm going to go back into the Data Flow tab.
>
> **[2:34](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=154)** Next, I'll add in a transformation.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=156)** It doesn't really matter which one, I just need this as a placeholder.
>
> **[2:39](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=159)** I'll just use Conditional Split and I'll drag that and drop that in.
>
> **[2:42](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=162)** Then, I'll connect the path from the source into the split using that blue arrow, I'm going to drag and drop it there.
>
> **[2:48](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=168)** Then, I can right click on the blue arrow and choose to enable the Data Viewer.
>
> **[2:52](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=172)** So that finishes the setup.
>
> **[2:54](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=174)** Let's start the package and see the results.
>
> **[2:57](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=177)** The Script Task executes first and it brings up the input box.
>
> **[3:00](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=180)** The rest of the package stops and waits until I fill this in.
>
> **[3:04](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=184)** I'm going to type in the text Black and press okay to continue on with the package.
>
> **[3:09](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=189)** That'll allow the rest of the tasks to run and any data viewer that pops up, you can see that it's pulling out just the black products.
>
> **[3:17](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=197)** Let's close this window, and I'll rerun or restart the package.
>
> **[3:23](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=203)** This time in the input box, I'll type in Red, and press okay.
>
> **[3:27](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=207)** And now I see a different listing of products that are just the color red.
>
> **[3:31](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=211)** So, that's one method of providing a new value So, that's one method of providing a new value for a variable at runtime using a Script Task.
>
> **[3:33](https://www.linkedin.com/learning/sql-server-integration-services-2/change-a-variable-s-value?u=76281980&t=213)** for a variable at runtime using a Script Task.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), interface (1), switch (1), import. (1), continue (1)
> **CLI Commands:** find (3), make (2)
> **UI Navigation:** click on (2), double-click (1), scroll down (1), drag and drop (1)
> **Env Vars:** ole (1), sql (1), ssis (1)
> **Tools:** visual studio (2)
> **Prerequisites:** configure (1), setup (1)
> **Cross-References:** in the last (1)
> **Exercise Files:** exercise files (1)

#### Group tasks in looping containers
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=0)** - [Instructor] If you need your package to execute a task or a series of tasks repeatedly, then you're going to want to look at the two looping containers that are available to be added to your control flow.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=9)** The for loop container uses an expression to determine whether to repeat the tasks in the loop container again.
>
> **[0:15](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=15)** As long as the expression evaluates to true the tasks will be executed again.
>
> **[0:19](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=19)** When the expression returns false, then the for loop exits.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=23)** The for each loop container will process the same tasks for every item in a group or what's referred to as an enumerator.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=30)** For instance, you can use the file enumerator to run tasks against every file in a folder on your hard drive, or use the ADO enumerator to process each row in a table.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=41)** To see a loop container in action, I'm going to add a for loop to a new control flow diagram in an empty package.
>
> **[0:48](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=48)** The typical construct of a for loop in programming is to use a variable called a counter, to keep track of how many times a loop is executed.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=56)** We can follow that same model here by creating a new variable.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=60)** If the variables window isn't open at the bottom of your screen, right click in an empty area of the design service and choose variables from the pop-up menu.
>
> **[1:07](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=67)** Then we'll come down into the variables window and click this button here to create a new variable.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=73)** I'm going to call it VarCounter, this is going to be scoped into our package which is called package number one, and the data type of N32 is fine, and we'll set the starting value as zero.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=84)** Now we can use this variable to determine how many times to run through the loop container.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=88)** To do this we're going to double click on the loop container to edit it.
>
> **[1:31](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=91)** The InitExpression will initialize the loop and set the variable starting value.
>
> **[1:36](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=96)** To do this I'll click here to the property and we'll type in, "@VarCounter=0."
>
> **[1:43](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=103)** The evaluation expression is a true or false statement that defines the number of times that the loop will process.
>
> **[1:49](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=109)** If you want the loop to execute five times, type in at VarCounter less than five.
>
> **[1:56](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=116)** As soon as the counter is not less than five, the loop lags it, then the assignment expression will be used to increment the variables value.
>
> **[2:04](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=124)** To increment it by one each time the loop is processed, type, "@VarCounter=@VarCounter + 1."
>
> **[2:13](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=133)** This'll take whatever the current value is of the VarCounter, add one to it and save that as the new counter value.
>
> **[2:23](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=143)** So each time through the loop, the container will look at the value of the counter, if it's less than five it'll process the task inside.
>
> **[2:28](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=148)** Once that's done it'll increment the counter by one, and then check to see if it's still less than five.
>
> **[2:33](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=153)** With all these settings in place, go ahead and press ok to finish the editor.
>
> **[2:37](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=157)** Now we just need to include a task that we want to execute repeatedly.
>
> **[2:40](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=160)** For that, I'm going to add in a script task.
>
> **[2:43](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=163)** Make sure you drag and drop it inside of the container.
>
> **[2:47](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=167)** Then it'll open up the editor for the script, I'm going to switch my script language to visual basic and then come down to the bottom to edit the script.
>
> **[2:58](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=178)** That'll open up the script file in a new visual studio window and I'm going to scroll down here until I find the lines add your code here and I'm going to come down one more line.
>
> **[3:06](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=186)** So now I'm on line number 87.
>
> **[3:09](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=189)** I'm going to paste in a line of text from the exercise files, this'll produce a message box that displays the current value of the counter variable.
>
> **[3:15](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=195)** Then I'll come up to the toolbar, press the save icon to save the script, and then come over and close the visual studio window.
>
> **[3:22](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=202)** That'll take me back to the script task editor.
>
> **[3:24](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=204)** The last thing that we need to do here is make sure that the variable is available to the script.
>
> **[3:28](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=208)** This time the script only needs to be able to read the variable, it doesn't need to change its value.
>
> **[3:33](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=213)** So I'm going to come over here to the read only variables, click the ellipses button, and then scroll through the list until I find the variable.
>
> **[3:39](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=219)** It's this one here, the user variable called VarCounter.
>
> **[3:43](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=223)** We'll place a checkmark there and press ok, to apply that value.
>
> **[3:47](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=227)** Then we can press ok to close out of the editor, and we're ready to test it out.
>
> **[3:51](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=231)** Lets press the start button to run through the script.
>
> **[3:53](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=233)** Here I get a pop-up message box that has the current value of the counters starting at zero, I'll press ok and the loop processes changing the counter to one, I'll press ok again and it keeps looping through the counter until it says four, this'll be the fifth time around and when I press ok the loop finishes, and it's done with the script.
>
> **[4:12](https://www.linkedin.com/learning/sql-server-integration-services-2/group-tasks-in-looping-containers?u=76281980&t=252)** So that's how you can use a variable as a counter, to control the number of times that a series of tasks execute in a loop.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (2)
> **Code Keywords:** type, (1), switch (1)
> **Env Vars:** ado (1), n32 (1)
> **Tools:** visual studio (2)
> **UI Navigation:** drag and drop (1), scroll down (1)
> **Definitions:** is called (1), is a  (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for instance (1)

#### Event handlers
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=0)** - [Instructor] Previously, we've used precedence constraints, and a control flow to determine what tasks to execute based off of the success or failure of the prior task.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=9)** You can also have your packages respond to a much longer list of events, beyond success or failure, by adding in event handlers.
>
> **[0:17](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=17)** Let's take a look by first adding three script tasks into a new empty package.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=23)** These scripts aren't actually going to contain any custom code, so if I run the package, they're all going to succeed, but let's hook them together with a couple of precedence constraints.
>
> **[0:31](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=31)** Then I'll right-click on this one on the right and change it to a failure.
>
> **[0:35](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=35)** Now if I start the package, there should be no surprises here.
>
> **[0:39](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=39)** The first task execute without any problem, then it triggers the task over here on the left, but the one on the right doesn't trigger at all.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=47)** Let's stop the debugger and go back into the design mode.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=50)** Now I'm going to switch over to the Event Handlers tab here on the interface.
>
> **[0:54](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=54)** Here, we can choose executable inside the package.
>
> **[0:57](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=57)** We have the package itself, and inside of the Executables folder, we have each of the three individual script tasks.
>
> **[1:04](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=64)** I'll choose to work with Script Task number two.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=66)** This is the one that's connected to the failure state of the original script.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=71)** I'll press OK, and then it flies up here in the executable line.
>
> **[1:14](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=74)** In the Event handler dropdown menu, you have a long list of different kinds of events that you can respond to.
>
> **[1:20](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=80)** The default is the OnError event, which triggers when the task has an error.
>
> **[1:23](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=83)** OnExecutionStatusChanged looks for the task to start or stop running.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=90)** You also have things like PostExecute or PostValidate.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=94)** These will trigger after the task completes or after the validation process is complete.
>
> **[1:38](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=98)** You also have PreExecute and PreValidate.
>
> **[1:41](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=101)** So you can choose to respond to a variety of different conditions that occur while your packages are running.
>
> **[1:46](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=106)** When you select one, how about PostExecute, you can then click this link here to create a new design surface, and it's only activated during this event Just like the control flow surface, you can add any tasks from the toolbox that you want to execute, only if and when "Script Task 2", for the main control flow, finishes executing.
>
> **[2:06](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=126)** Once you've added an event handler for a specific task, you'll notice that it shows up in a bold font here in the list, and you can add multiple event handlers for the same executable.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=135)** Maybe you want a separate set of tasks to run if this script returns an error.
>
> **[2:19](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=139)** I would choose the OnError event and then click the link to create the new design surface If that ever happens, maybe you want this package to fire off an e-mail.
>
> **[2:29](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=149)** All you need to do is drag that task out and put it right in here.
>
> **[2:32](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=152)** So with event handlers, you can get very specific about how to respond to a wide variety of triggering events how to respond to a wide variety of triggering events on every task added to your Integration Services packages.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-integration-services-2/event-handlers?u=76281980&t=158)** on every task added to your Integration Services packages.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), switch (1), interface (1)
> **UI Navigation:** right-click (1), dropdown (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Error handling in data flows
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=2)** through the failure precedence constraint.
>
> **[0:04](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=4)** Errors in data flows can be handled in a similar way, to an external file for review, in order to determine what the issue was that caused the failure.
>
> **[0:14](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=14)** To see how this could work, I've got a data flow task setup that's going to attempt to copy data out of the Wide World Importers data warehouse, and write it into the Kineteco database.
>
> **[0:24](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=24)** If I open up the source connector, you'll see how it's configured.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=27)** We currently have a connection to the Wide World Importers data warehouse here, and we're using a SQL command to select the distinct suppliers from Dimension.Supplier.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=36)** I'll press the preview button.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=37)** You'll see what that data looks like.
>
> **[0:39](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=39)** So this is what we're pulling out of the data warehouse.
>
> **[0:42](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=42)** I'm going to close this and say okay, and then take a look at the destination.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=47)** The destination hasn't yet been configured, so I'm going to use the OLE DB connection manager.
>
> **[0:51](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=51)** And, let's see, it's not in the dropdown menu, so I'm going to press cancel here, and go to new.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=56)** Then I can select Kineteco here, and say okay.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=60)** so I'll press the new button here to create the table statement.
>
> **[1:05](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=65)** of the source database and suggest a structure for the create table statement.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=69)** I'm going to make a couple of changes here.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=71)** First, let's rename this table to suppliers.
>
> **[1:14](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=74)** Then, I'm going to change the data type to something that's not compatible.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=78)** Instead of creating this as a varchar, I'm going to create this as an int datatype.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=84)** I'll press okay, and that table will get created in the Kineteco database.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=88)** Now let's take a look at the mappings.
>
> **[1:29](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=89)** This is pretty simple.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=90)** The supplier column from the source will go into the supplier column in the destination.
>
> **[1:35](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=95)** Now we can switch over to the error output page.
>
> **[1:38](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=98)** Right now, if I were to run this data flow, because we're trying to write string values into an integer data column, the inserts are going to fail the component.
>
> **[1:46](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=106)** Instead, what I can do is use this dropdown menu and choose to redirect the row.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=111)** This will allow us to write any records that were process successful into a different path.
>
> **[1:56](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=116)** Let's press the okay button to dismiss this window.
>
> **[1:59](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=119)** Now I can add in a different destination to capture the error records.
>
> **[2:03](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=123)** I'm going to use a flat file destination for this.
>
> **[2:05](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=125)** We'll just click and drag one in.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=128)** Then I'll connect it to the OLE DB destination in the error output.
>
> **[2:11](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=131)** I'll drag this red arrow and click over here.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=135)** we don't need to make any changes on this window, so we can just press the okay button.
>
> **[2:20](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=140)** Then we'll configure the flat file destination.
>
> **[2:24](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=144)** We're going to connect to a new file.
>
> **[2:29](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=149)** or a fixed width, or a ragged right, or a fixed width with row delimiters.
>
> **[2:33](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=153)** I'll just choose the standard delimited option and say okay.
>
> **[2:37](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=157)** Then I'll click browse to browse out I'm going to change it to a CSV file, and I'll call it error output.
>
> **[2:47](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=167)** I'll say open, and then I'll create the file.
>
> **[2:49](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=169)** Now all of these configuration options are good for me.
>
> **[2:52](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=172)** This will create a pretty standard CSV file.
>
> **[2:55](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=175)** Then we'll switch over to the columns page to ensure that the file will contain a column for the supplier that wasn't written to the Kineteco database.
>
> **[3:02](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=182)** It'll also contain a column for the error number that you can use to look up and see what the problem is.
>
> **[3:07](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=187)** And finally, we'll also have a column that'll store the internal SQL Server ID number of the column that's causing the problem.
>
> **[3:13](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=193)** This field probably isn't going to be that useful, but the other two will be.
>
> **[3:17](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=197)** Okay, so now we have a data flow that will attempt to copy some records out of one database and write them into another.
>
> **[3:23](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=203)** If there's an error with any of these records, and we know there will be, those records will be rerouted and written to a comma-separated values file on the hard drive.
>
> **[3:31](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=211)** Let's run it to see if it works.
>
> **[3:34](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=214)** Now if you get this error message, it just means that you need to go back into the configuration of flat file destination.
>
> **[3:39](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=219)** I'll press okay here.
>
> **[3:40](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=220)** Let's actually close the output window so I have some more room.
>
> **[3:43](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=223)** We go back into this configuration real quick, and all we need to do is switch over to the mappings page, take a look at it, don't need to change anything, and then press okay.
>
> **[3:51](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=231)** Now it should run without any further problems.
>
> **[3:53](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=233)** I'll press start, and it runs as expected.
>
> **[3:57](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=237)** So we have our source that was successful.
>
> **[3:59](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=239)** We have the destination that says it was successful, but if I scroll down here and take a look at the error output, it says that it's also outputting 14 rows to my flat file destination.
>
> **[4:07](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=247)** This is actually all of the data, so everything that is coming out of the destination is actually being redirected into this flat file.
>
> **[4:14](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=254)** Now let's go take a look at what happened on the desktop.
>
> **[4:16](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=256)** Here is the output, the error output, that CSV file, and I'll just open it up inside of Notepad and I'll just open it up inside of Notepad to see the comma-separated values.
>
> **[4:21](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=261)** to see the comma-separated values.
>
> **[4:24](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=264)** Here is the error code that we can use Here is the error code that we can use to look up to find out what's going on with the data flow.
>
> **[4:25](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=265)** to look up to find out what's going on with the data flow.
>
> **[4:28](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=268)** So that's how you can reroute errors So that's how you can reroute errors in a data flow task to output any problem records in a data flow task to output any problem records to a different destination, to a different destination, so that you can review the issues and identify areas so that you can review the issues and identify areas where you need to make adjustments in the package.
>
> **[4:36](https://www.linkedin.com/learning/sql-server-integration-services-2/error-handling-in-data-flows?u=76281980&t=276)** where you need to make adjustments in the package.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), switch (3), new. (1), this. (1), finally, (1)
> **Env Vars:** csv (3), sql (2), ole (2)
> **CLI Commands:** make (4), find (2)
> **UI Navigation:** dropdown (2), select the (1), go to (1), scroll down (1)
> **Prerequisites:** setup (1), configure (1)
> **Definitions:** means that (1)


### 7. Deploy and Run SSIS Projects

#### Deploy projects to SQL Server
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=0)** - [Instructor] Before you can deploy an Integration Services project to a SQL Server instance, you need to create an SSIS catalog database.
>
> **[0:07](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=7)** The process is going to start in Management Studio.
>
> **[0:10](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=10)** I'm currently connected to my primary SQL server and since it's this one here at the very top of the object explorer window, this is the default instance for my machine.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=18)** After adding integration services as a shared feature, like we did way back at the beginning of this course, you should now have a folder called Integration Services Catalogs.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=27)** This folder is going to be empty by default.
>
> **[0:29](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=29)** In order to create a new catalog, just right-click on it and choose Create Catalog.
>
> **[0:33](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=33)** That'll start up the Catalog Creation Wizard.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=36)** I'm going to check this box here to enable the common language runtime integration.
>
> **[0:40](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=40)** Now this also needs to be enabled on your SQL server instance.
>
> **[0:43](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=43)** It's typical that that's already going to be the case, but something to be aware of.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=47)** I'm also going to check the box to allow the execution of the startup stored procedures.
>
> **[0:51](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=51)** And then we need to create a password to protect the integration services database.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=55)** I'm not going to worry about scale out groups, so I'm going to uncheck this option here.
>
> **[0:59](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=59)** Now at this point, normally you would just press the Okay button that appears at the bottom of your screen.
>
> **[1:03](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=63)** But because of my limited screen resolution on this computer, I'm actually not able to get to that button.
>
> **[1:08](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=68)** Unfortunately, there's no scroll bars on this window.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=71)** So a workaround that I'm going to have to go through is to press the Tab key to select this button right here and then press Tab one more time to select the Okay button that's off the bottom of my screen.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=82)** Then I'll press Enter to activate the wizard and that should create the SSIS database here.
>
> **[1:26](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=86)** Hopefully you don't have to jump through these same kind of hoop to activate the wizard.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=90)** Now we can go back into Visual Studio.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=94)** I've gone ahead and created a new integration services project called Kinetico underscore Packages.
>
> **[1:41](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=101)** Inside of here, I have a project called Supplier Import.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=104)** This package uses a couple of tasks.
>
> **[1:47](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=107)** The first one is an Execute SQL task.
>
> **[1:50](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=110)** This is going to connect to the Kinetico database and it's going to simply run the SQL statement Truncate Table New Suppliers.
>
> **[1:57](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=117)** The other task is a data flow task.
>
> **[1:59](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=119)** This one is going to import some data from the wide world importers data warehouse and it's going to use the SQL command listed here.
>
> **[2:07](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=127)** You can find a copy of this text inside of the exercise files.
>
> **[2:11](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=131)** It's simply pulling out the supplier key, supplier, category, and primary contact columns from the dimension dot supplier table.
>
> **[2:19](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=139)** If you press the preview button here you'll see what data it returns.
>
> **[2:22](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=142)** Then once we pull that data out of the data warehouse, it's going to attempt to put it into the Kinetico database.
>
> **[2:28](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=148)** Here we're creating a new table called New Suppliers.
>
> **[2:32](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=152)** So that's what this package is doing.
>
> **[2:33](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=153)** It's simply copying data out of one database and placing it into another.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=158)** Now I want to deploy this project to my SQL server database so I can run and manage the execution from management studio.
>
> **[2:46](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=166)** To deploy a project, you're going to right click on it in the Solution Explorer and then first choose Build.
>
> **[2:51](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=171)** That'll go through and verify that there aren't execution errors that need to be addressed first.
>
> **[2:57](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=177)** In the output window, you should see the message once succeeded or up to date.
>
> **[3:01](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=181)** If you have any failures, you'll need to address those before moving on.
>
> **[3:05](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=185)** Once your project builds without any errors, right-click on the project name again and this time choose Deploy.
>
> **[3:11](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=191)** That'll start up the deployment wizard.
>
> **[3:13](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=193)** On the main screen it outlines the five steps that we're going to move through.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=196)** Press the Next button to get started.
>
> **[3:19](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=199)** First you have the option to add this to an on-premises installation of SQL server or you can store it in a cloud based Azure SQL database.
>
> **[3:27](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=207)** I'm going to choose the option to add it to my local server instance and press the Next button.
>
> **[3:31](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=211)** Here you'll connect to the server instance.
>
> **[3:32](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=212)** I'll click the Browse button and switch over to Network Servers.
>
> **[3:38](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=218)** And I'll choose the server name that has the integration services database that we just created.
>
> **[3:45](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=225)** I'm going to use my Windows Authentication account to log in and then we'll come take a look at this path.
>
> **[3:50](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=230)** The path will set up the container name inside of the SSIS database.
>
> **[3:55](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=235)** I'm going to press the Browse button and then click on the New Folder button.
>
> **[3:58](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=238)** And I'm going to give it a name.
>
> **[3:59](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=239)** You can name it whatever you'd like.
>
> **[4:00](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=240)** I'll call mine My Deployments.
>
> **[4:04](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=244)** I'll press Okay, then I'll create that folder and press Okay again to fill in the path.
>
> **[4:08](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=248)** You'll also notice that it appends the name of the project as a sub-folder.
>
> **[4:13](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=253)** We'll move onto the next step.
>
> **[4:15](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=255)** We can review our selections here and then press Deploy.
>
> **[4:18](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=258)** Once the deployment is successful, we can go ahead and close this down and return back into Management Studio.
>
> **[4:25](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=265)** Now I'm going to find the SSIS database and refresh it.
>
> **[4:29](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=269)** Now it should have some contents inside of there.
>
> **[4:31](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=271)** We have the My Deployments folder.
>
> **[4:33](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=273)** Inside of there we have our Projects.
>
> **[4:34](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=274)** Here is the project that I was just working with.
>
> **[4:37](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=277)** And inside of there are the Packages that we had inside of the Project.
>
> **[4:40](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=280)** In order to run a package from Management Studio, simply right-click on it and choose Execute.
>
> **[4:47](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=287)** If your package included any parameters you could specify the values here.
>
> **[4:52](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=292)** You can also review the Connection Managers that are going to be used by the project.
>
> **[4:56](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=296)** And on the advanced tab, you can change the logging level.
>
> **[4:59](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=299)** The default is basic, but if you're doing any troubleshooting, it might be useful to have some verbose logs to take a look at.
>
> **[5:05](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=305)** When you're ready, press the Okay button and your package executes.
>
> **[5:09](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=309)** That'll cue up your project and it'll ask you if you want to view an overview report.
>
> **[5:13](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=313)** You can say yes to take a look at what that looks like.
>
> **[5:16](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=316)** Here we can get some details about when the package ran and its status.
>
> **[5:20](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=320)** In this report we can see when the package ran and its results.
>
> **[5:24](https://www.linkedin.com/learning/sql-server-integration-services-2/deploy-projects-to-sql-server?u=76281980&t=324)** So now your Integration Services project is deployed directly to SQL server and you can run the packages that they contain from right here in Management Studio.

> [!info]- Semantic Content
>
> **Env Vars:** sql (10), ssis (4)
> **UI Navigation:** right-click (3), click on (2), select the (1)
> **Code Keywords:** default. (1), case, (1), import. (1), switch (1)
> **CLI Commands:** find (2)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** you'll need (1), set up (1)
> **Tools:** visual studio (1)
> **Exercise Files:** exercise files (1)

#### Run packages with T-SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/run-packages-with-t-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/run-packages-with-t-sql?u=76281980&t=0)** - [Instructor] Triggering packages to run with T-SQL commands is a useful technique.
>
> **[0:04](https://www.linkedin.com/learning/sql-server-integration-services-2/run-packages-with-t-sql?u=76281980&t=4)** With this method, running SSIS packages can be incorporated into other scripts and procedures, executed on the server remotely, or through external programs.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-integration-services-2/run-packages-with-t-sql?u=76281980&t=12)** The Transact-SQL that you need to execute is a little bit complex if you were to write it out manually.
>
> **[0:17](https://www.linkedin.com/learning/sql-server-integration-services-2/run-packages-with-t-sql?u=76281980&t=17)** But once you have your packages deployed to the server, and can execute them here in Management Studio, it's really simple to have the proper syntax generated.
>
> **[0:25](https://www.linkedin.com/learning/sql-server-integration-services-2/run-packages-with-t-sql?u=76281980&t=25)** First you need to find the package that you want to run with a T-SQL command.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-integration-services-2/run-packages-with-t-sql?u=76281980&t=30)** Then, right-click it and choose Execute, just like you would if you were running it immediately.
>
> **[0:35](https://www.linkedin.com/learning/sql-server-integration-services-2/run-packages-with-t-sql?u=76281980&t=35)** But on this window, instead of coming down to the OK button on the bottom, instead what we're going to do is come up to the top and click on the downward pointing triangle next to the script button.
>
> **[0:44](https://www.linkedin.com/learning/sql-server-integration-services-2/run-packages-with-t-sql?u=76281980&t=44)** This will allow you to write out the command to a new query window, or export it to a file or your clipboard.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-integration-services-2/run-packages-with-t-sql?u=76281980&t=50)** I'll choose to open this in a new query window, and then press the cancel button to dismiss this window.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-integration-services-2/run-packages-with-t-sql?u=76281980&t=55)** And here is the syntax.
>
> **[0:57](https://www.linkedin.com/learning/sql-server-integration-services-2/run-packages-with-t-sql?u=76281980&t=57)** This script is the exact same syntax that's executed on the server when you press the OK button to run it immediately.
>
> **[1:03](https://www.linkedin.com/learning/sql-server-integration-services-2/run-packages-with-t-sql?u=76281980&t=63)** It uses a stored procedure called catalog.create_execution, then it passes in the name of the package, and any additional parameters that are required to run the package.
>
> **[1:12](https://www.linkedin.com/learning/sql-server-integration-services-2/run-packages-with-t-sql?u=76281980&t=72)** You can even find the declare line here and set any variables that you need to before you run it.
>
> **[1:17](https://www.linkedin.com/learning/sql-server-integration-services-2/run-packages-with-t-sql?u=76281980&t=77)** So this is a handy bit of code to have on hand, and now you can easily copy it and reuse it in any script that needs to run an SSIS package that's been deployed to your server.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3), ssis (2)
> **CLI Commands:** find (2)
> **UI Navigation:** right-click (1), click on (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** create_execution (1)
> **Analogies:** just like (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Schedule packages with SQL Server Agent
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=0)** - [Instructor] Executing SSIS packages manually will force them to run immediately.
>
> **[0:04](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=4)** But the entire point of developing an automated workflow is so that you don't need to manage it.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=9)** Many if not most SSIS packages are scheduled to run during off-peak hours.
>
> **[0:14](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=14)** For instance, you might want a lengthy ETL process or backups to occur at night or on the weekend when those activities won't impact business transactions.
>
> **[0:22](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=22)** And you don't want to be the one that has to be standing by in the wee hours of the morning to hit the execute button.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=27)** So instead we'll use the SQL Server Agent to schedule the execution of our Integration Services package.
>
> **[0:34](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=34)** To start the agent needs to be running.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=36)** Mine currently isn't.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=37)** And you can tell that by the red X icon overlay here, next to SQL Server Agent.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=41)** So I'm going to right-click on it and choose Start.
>
> **[0:44](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=44)** That'll prompt me a couple of times and I'll just say Yes to both of these dialog boxes and then I'll start up the agent service.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=50)** Once you see the green arrow overlay icon you can expand the service, and find the Jobs folder.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=56)** I'm going to right-click that folder and choose New Job, and then I'll give my job a name.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=60)** I'll call it Execute Kinetico Import.
>
> **[1:04](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=64)** Then I'll switch over to the steps page here on the left.
>
> **[1:07](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=67)** On the bottom of this window I'm going to press the New button to add a step.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=71)** I'll give the step the name Import Data, and then from the Type drop-down menu, I'm going to choose to execute a SQL Server Integration Services Package.
>
> **[1:20](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=80)** That'll prompt me to log in to the SSIS Catalog database.
>
> **[1:23](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=83)** So I'll use this drop-down menu to choose the server.
>
> **[1:26](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=86)** In my case it's the same server that I'm adding the agent job on, but it could be a different server.
>
> **[1:31](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=91)** Then you'll fill in the authentication details as needed, and then come down here and press the ellipsis button on the Package line.
>
> **[1:36](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=96)** That'll allow you to drill into the SSIS database and find the package that you want to run.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=102)** Then press the OK button to finish configuring the step.
>
> **[1:45](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=105)** Once you've added all the steps that you want to include and put them in the order that you want them to execute, switch over to the Schedules page.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=111)** Once again we'll come to the bottom and press the New button to create a schedule.
>
> **[1:55](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=115)** I'll give this the name Import Schedule.
>
> **[1:59](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=119)** You can specify how often you want to run the job, either on a recurring schedule, or automatically, when the CPUs are idle, or when the agent starts, or even just a single time.
>
> **[2:07](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=127)** I'll set this to Recurring.
>
> **[2:09](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=129)** Then you can set it to a specific recurring frequency, either weekly, daily, or monthly, you can choose specific days that you want it to run, and at what times.
>
> **[2:18](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=138)** At the very bottom you can set a duration.
>
> **[2:20](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=140)** So when you want the schedule to start, and if you want it to end.
>
> **[2:23](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=143)** There are lots of choices here and the text at the bottom of the screen can help you make better sense of what options you've selected by boiling all of the checkmarks down to a plain English sentence.
>
> **[2:33](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=153)** Mine says that it'll occur every week on Sunday at 12:00 a.m.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=156)** and the schedule will be starting on 7/8/2019.
>
> **[2:39](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=159)** That sounds good to me, so I'm going to press the OK button.
>
> **[2:42](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=162)** Then you can set additional alerts, notifications, and server targets if you need to.
>
> **[2:47](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=167)** But once you've supplied the steps and the schedule that you want to use, that's the minimum amount of information that you need to create the job.
>
> **[2:53](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=173)** When you're done setting everything up to your liking, go ahead and press the OK button to finish creating the job, and now we can go into the Jobs folder underneath the SQL Server Agent and we should be able to find it right there.
>
> **[3:03](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=183)** And if you double-click on the job, it'll give you information about whether the job is enabled, when it was created or modified, and when the last time it was executed, if ever.
>
> **[3:11](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=191)** You can even view the job history with this link here.
>
> **[3:14](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=194)** And this will allow you to see the output logs that are generated when the package runs.
>
> **[3:18](https://www.linkedin.com/learning/sql-server-integration-services-2/schedule-packages-with-sql-server-agent?u=76281980&t=198)** So with the agent helping you to run your Integration Services packages, you can ensure that they execute regularly and at convenient times.

> [!info]- Semantic Content
>
> **Env Vars:** ssis (4), sql (4), etl (1)
> **CLI Commands:** find (3), make (1)
> **Code Keywords:** switch (2), import. (1)
> **UI Navigation:** right-click (2), double-click (1)
> **Ports:** :00 (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-integration-services-2/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-integration-services-2/next-steps?u=76281980&t=0)** - [Adam] I want to thank you for joining me as we explored SQL Server Integration Services.
>
> **[0:05](https://www.linkedin.com/learning/sql-server-integration-services-2/next-steps?u=76281980&t=5)** I'd like to leave you with a few suggestions on where to go next.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-integration-services-2/next-steps?u=76281980&t=9)** First, we spent a lot of time in Visual Studio, but only saw a very small piece of that program.
>
> **[0:15](https://www.linkedin.com/learning/sql-server-integration-services-2/next-steps?u=76281980&t=15)** To get more hands-on experience with this extensive program, take a look at the Visual Studio Essential Training series from Walt Richer.
>
> **[0:22](https://www.linkedin.com/learning/sql-server-integration-services-2/next-steps?u=76281980&t=22)** You can also take the opportunity to integrate some programming techniques into your integration services script tasks.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-integration-services-2/next-steps?u=76281980&t=28)** For that, I'd recommend starting with the course Learning C# and finally, if you're interested in learning more about the capabilities of SQL Server's add-on components, take a look at my course on SQL Server Reporting Services to see how to generate rich, graphical reports based off of your SQL Server data.
>
> **[0:44](https://www.linkedin.com/learning/sql-server-integration-services-2/next-steps?u=76281980&t=44)** Until next time, I've been Adam Wilbert and I hope that you have a great day.

> [!info]- Semantic Content
>
> **Env Vars:** sql (4)
> **Tools:** visual studio (2)
> **Code Keywords:** finally, (1)
> **Speakers:** - [adam] (1)


## Path Context

### In [[Advance Your MS SQL Server Skills]]
← [[SQL Server Containerization- Modern Deployment Strategies for Data-Driven Organizations]] | **8 of 9** | [[SQL Server- Reporting Services]] →

## Appears In

- [[Advance Your MS SQL Server Skills]]

---

[↑ Back to top](#)