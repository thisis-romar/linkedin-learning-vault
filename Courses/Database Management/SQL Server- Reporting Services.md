---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: sql-server-reporting-services-24671486
url: "https://www.linkedin.com/learning/sql-server-reporting-services-24671486"
duration_minutes: 222
duration: 3h 42m
level: Advanced
updated: 10/1/2024
learners: 33486
skills:
  - SQL Server Reporting Services (SSRS)
  - Microsoft SQL Server
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHg6FpYNYmSKw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1726255866299?e=2147483647&amp;v=beta&amp;t=pGuVb3yjQRK9I5F6KMIoLu8GtHNNLE9xj6DoO52FLjM"
linkedin_topic: Database Management
learning_paths:
  - '[[Advance Your MS SQL Server Skills]]'
prev_courses:
  - '[[SQL Server Integration Services]]'
path_nav: '[{"path":"Advance Your MS SQL Server Skills","position":9,"total":9,"prev":"SQL Server Integration Services","next":null}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/sql-server-reporting-services-ssrs
  - skill/microsoft-sql-server
status: not-started
created: 2026-04-21
---

![SQL Server: Reporting Services](https://media.licdn.com/dms/image/v2/D4E0DAQHg6FpYNYmSKw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1726255866299?e=2147483647&amp;v=beta&amp;t=pGuVb3yjQRK9I5F6KMIoLu8GtHNNLE9xj6DoO52FLjM)

# SQL Server: Reporting Services

> Get an introduction to Reporting Services, one of the core add-on components to SQL Server. With Reporting Services, you can create report frameworks that incorporate data tables, charts, maps, and other visualizations to help make sense of the data stored in a database. Instructor Adam Wilbert shows you how to configure all of the components and add them to traditional paginated reports, and how 

> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486) | 3h 42m | Advanced | 33K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Adam Wilbert]]

## Resources

- Exercise files available

## Skills Covered

- SQL Server Reporting Services (SSRS)
- Microsoft SQL Server

## Table of Contents

### Introduction

#### Present SQL data with Reporting Services
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/present-sql-data-with-reporting-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/present-sql-data-with-reporting-services?u=76281980&t=0)** - [Adam] If you work with SQL Server, then you know that TQL Query results are not the best way to present information.
>
> **[0:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/present-sql-data-with-reporting-services?u=76281980&t=7)** SQL Server Reporting Services offers a more effective way to communicate your data's story.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/present-sql-data-with-reporting-services?u=76281980&t=12)** In this course, you'll learn to use Report Builder to turn raw data into visually engaging reports with tables, charts, and more.
>
> **[0:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/present-sql-data-with-reporting-services?u=76281980&t=21)** These reports will help your company gain insights and make better informed decisions.
>
> **[0:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/present-sql-data-with-reporting-services?u=76281980&t=25)** Hi, I'm Adam Wilbert.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/present-sql-data-with-reporting-services?u=76281980&t=27)** Join me and I'll show you how to use reporting services to elevate the way that you share data.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2), tql (1)
> **CLI Commands:** make (1)
> **Speakers:** - [adam] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this course, I need to assume that you have some familiarity with SQL Server databases.
>
> **[0:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-you-should-know?u=76281980&t=6)** Specifically, you should feel comfortable with connecting and authenticating with a SQL Server instance, accessing individual databases, and the basics of writing transact SQL queries to retrieve records from the database.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-you-should-know?u=76281980&t=18)** Since the majority of this course will cover formatting and presenting data in reports and not on the storage of data in a database server, a general understanding of relational database structures and table relationships will also be helpful.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-you-should-know?u=76281980&t=32)** If any of that sounded like gibberish to you, consider starting with my SQL Server 2022 Essential Training course first.
>
> **[0:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-you-should-know?u=76281980&t=40)** Afterwards, you'll have everything that you need to start building reports.

> [!info]- Semantic Content
>
> **Env Vars:** sql (4)
> **Speakers:** - [instructor] (1)


### 1. Get Started with SSRS

#### What is SQL Server Reporting Services (SSRS)?
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-is-sql-server-reporting-services-ssrs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-is-sql-server-reporting-services-ssrs?u=76281980&t=0)** - [Instructor] When it comes time to present the data that you have stored in your SQL Server databases, you need a way to organize and visualize that data.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-is-sql-server-reporting-services-ssrs?u=76281980&t=9)** This is what SQL Server Reporting Services does.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-is-sql-server-reporting-services-ssrs?u=76281980&t=12)** So what do I mean by present the data?
>
> **[0:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-is-sql-server-reporting-services-ssrs?u=76281980&t=15)** Well, when you run a select query in a database, you get back results in the form of a table.
>
> **[0:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-is-sql-server-reporting-services-ssrs?u=76281980&t=20)** And while you can export that table to a spreadsheet or take a screenshot of it, it's not really a great way to share that information with others.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-is-sql-server-reporting-services-ssrs?u=76281980&t=28)** Instead, it would be much better to spend some time formatting that data to make it more legible.
>
> **[0:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-is-sql-server-reporting-services-ssrs?u=76281980&t=34)** Perhaps integrate it with a chart or other graphical representation so that the meaning of the data can be understood at a glance.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-is-sql-server-reporting-services-ssrs?u=76281980&t=41)** You can also give the data more context with some explanatory titles and callouts, and allow users to drill down from a high level summary overview into the nitty gritty details and individual data points.
>
> **[0:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-is-sql-server-reporting-services-ssrs?u=76281980&t=54)** What I've just described is a report.
>
> **[0:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-is-sql-server-reporting-services-ssrs?u=76281980&t=57)** A document that allows you to better share your data with others and allows them to quickly understand its meaning.
>
> **[1:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-is-sql-server-reporting-services-ssrs?u=76281980&t=65)** Reporting Services is a collection of add-on tools and services that build upon SQL Server, and help you build these kinds of custom reports.
>
> **[1:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-is-sql-server-reporting-services-ssrs?u=76281980&t=74)** The main component is called Report Builder.
>
> **[1:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-is-sql-server-reporting-services-ssrs?u=76281980&t=77)** This is a Windows application that works much like a regular Microsoft Office page layout program like Publisher or PowerPoint.
>
> **[1:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-is-sql-server-reporting-services-ssrs?u=76281980&t=85)** With Report Builder, you'll be able to define the look and feel of your reports and pull up to the minute data from your SQL Server databases.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-is-sql-server-reporting-services-ssrs?u=76281980&t=94)** The database connection details, layout and formatting are bundled together into a report definition.
>
> **[1:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-is-sql-server-reporting-services-ssrs?u=76281980&t=101)** And is made available to users, so that they can run your report and view the content.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-is-sql-server-reporting-services-ssrs?u=76281980&t=108)** In order to access your reports, users will go through the other component of reporting services, which is a personalized web portal.
>
> **[1:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-is-sql-server-reporting-services-ssrs?u=76281980&t=116)** The Report Server portal is installed on top of a SQL Server instance, and it'll create its own database to manage the reports that you've saved as well as user access permissions.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-is-sql-server-reporting-services-ssrs?u=76281980&t=128)** Once logged into the portal, users can choose to view predefined page needed reports, and high level metrics called Key Performance Indicators or KPIs.
>
> **[2:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-is-sql-server-reporting-services-ssrs?u=76281980&t=138)** They can quickly reveal the most important things to know about the state of your business.
>
> **[2:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-is-sql-server-reporting-services-ssrs?u=76281980&t=143)** Users with appropriate permissions can even launch Report Builder right from the portal to start laying out their own reports.
>
> **[2:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-is-sql-server-reporting-services-ssrs?u=76281980&t=151)** So that's what Reporting Services is.
>
> **[2:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-is-sql-server-reporting-services-ssrs?u=76281980&t=153)** It's a collection of tools that enhance the data that you have stored in a SQL Server database, and allows you to collect and share data in a more visual way.
>
> **[2:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/what-is-sql-server-reporting-services-ssrs?u=76281980&t=163)** This can lead to better insights and help service actionable information.

> [!info]- Semantic Content
>
> **Env Vars:** sql (6)
> **Definitions:** is a  (4), is called (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Installing SSRS
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/installing-ssrs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/installing-ssrs?u=76281980&t=0)** - [Instructor] To get started, we first need to install the report server on our computer, and then we'll configure a database in a SQL Server instance that the report server will use to manage the reports.
>
> **[0:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/installing-ssrs?u=76281980&t=11)** We'll start at the installation documentation page, and I'll scroll down a little bit to find the download link for SQL Server 2022 reporting services.
>
> **[0:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/installing-ssrs?u=76281980&t=20)** Let's go ahead and click on that and that takes us to the download center where we can choose our language and press the download button.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/installing-ssrs?u=76281980&t=27)** I'll choose to keep the file here and that'll download the executable into my computer.
>
> **[0:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/installing-ssrs?u=76281980&t=31)** Okay, once that's done, we'll go into the downloads folder and we'll start the installation process.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/installing-ssrs?u=76281980&t=37)** The only option that we have here is to install reporting services, so I'll select that.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/installing-ssrs?u=76281980&t=41)** On this page, you can either enter in a product key if you have a paid license for reporting services, or you can choose a free edition.
>
> **[0:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/installing-ssrs?u=76281980&t=48)** We have the option of an evaluation edition that expires in 180 days, or we can install the free Developer or express edition.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/installing-ssrs?u=76281980&t=56)** I'll choose developer and press next.
>
> **[0:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/installing-ssrs?u=76281980&t=59)** Then I'll accept the licensing terms and press next again, and we get to this step that says, installed database engine.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/installing-ssrs?u=76281980&t=66)** Now this step is a little bit confusingly worded.
>
> **[1:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/installing-ssrs?u=76281980&t=68)** You will need to have an instance of SQL Server installed in order to configure reporting services, but it isn't required to be set up at this stage of the installation process.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/installing-ssrs?u=76281980&t=79)** This step is merely informing you of that fact and allows you to continue on installing the reporting services component even if a SQL Server instance is not yet installed.
>
> **[1:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/installing-ssrs?u=76281980&t=89)** So this is basically just a reminder, okay, we'll just choose the only option that's here, install reporting services only, and press next.
>
> **[1:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/installing-ssrs?u=76281980&t=97)** Then it'll give us the default installation location, which is great.
>
> **[1:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/installing-ssrs?u=76281980&t=101)** I'll press install.
>
> **[1:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/installing-ssrs?u=76281980&t=103)** I'll allow Windows to make changes to my computer, and that kicks off the process.
>
> **[1:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/installing-ssrs?u=76281980&t=107)** And once that's done, that takes care of the first step of getting reporting services installed.
>
> **[1:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/installing-ssrs?u=76281980&t=112)** The next step is to install a SQL Server instance, if you don't have an instance already, and this will be used to store the Report Server database.
>
> **[2:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/installing-ssrs?u=76281980&t=120)** Now, if you already have a SQL Server instance that you want to use, you can click on the configure report server button to move on to the next step.
>
> **[2:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/installing-ssrs?u=76281980&t=127)** However, if you need to install SQL Server, then I'll walk through those steps in the next video and we'll come back and launch the report Server Configuration Manager to move on to the configuration steps.
>
> **[2:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/installing-ssrs?u=76281980&t=139)** So I'll just press the close button now.
>
> **[2:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/installing-ssrs?u=76281980&t=141)** I'll walk through the steps of installing SQL Server in the next video.
>
> **[2:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/installing-ssrs?u=76281980&t=145)** Then once that's done, we can configure the report server and create any service accounts that the server will need to connect to our SQL Server instance.

> [!info]- Semantic Content
>
> **Prerequisites:** install (7), configure (4), required to (1), set up (1)
> **Env Vars:** sql (9)
> **UI Navigation:** click on (2), scroll down (1)
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** let (1), continue (1)
> **Cross-References:** in the next (2)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)

#### Install a SQL Server instance for the report server
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-a-sql-server-instance-for-the-report-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-a-sql-server-instance-for-the-report-server?u=76281980&t=0)** - [Instructor] Reporting services requires a SQL Server instance to house its report server database.
>
> **[0:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-a-sql-server-instance-for-the-report-server?u=76281980&t=6)** Now you can use an existing instance if you have one already set up, or you can install a dedicated server exclusively for SSRS.
>
> **[0:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-a-sql-server-instance-for-the-report-server?u=76281980&t=14)** Now, if you need to install SQL Server, you can follow these steps.
>
> **[0:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-a-sql-server-instance-for-the-report-server?u=76281980&t=17)** We'll start at the SQL Server downloads page, and I'm going to scroll down here to find the options for the free specialized editions.
>
> **[0:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-a-sql-server-instance-for-the-report-server?u=76281980&t=24)** We have our options of either developer or the express edition.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-a-sql-server-instance-for-the-report-server?u=76281980&t=28)** I'll choose to download and install the developer edition.
>
> **[0:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-a-sql-server-instance-for-the-report-server?u=76281980&t=31)** Okay, once that file is downloaded, we'll go into the downloads folder and we'll start the installation process for SQL Server I'll choose to use a basic installation, which will give us a default server name of MSSQL server.
>
> **[0:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-a-sql-server-instance-for-the-report-server?u=76281980&t=45)** If you wanted to customize any of the settings, including that server's name, you could choose a custom installation instead, but I'll just go through with the basic installation.
>
> **[0:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-a-sql-server-instance-for-the-report-server?u=76281980&t=53)** I'll accept the licensing terms, that gives me the default installation location, which is fine, and I'll press the install button to go through all the steps.
>
> **[1:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-a-sql-server-instance-for-the-report-server?u=76281980&t=63)** Once the installation is completed, you'll be presented with a couple of useful pieces of information.
>
> **[1:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-a-sql-server-instance-for-the-report-server?u=76281980&t=68)** The instance name you want to make note of, the default instance name is MSSQL Server.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-a-sql-server-instance-for-the-report-server?u=76281980&t=73)** But if you went through the custom installation, you might have a different name there.
>
> **[1:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-a-sql-server-instance-for-the-report-server?u=76281980&t=76)** The other thing you want to make note of is the SQL Administrator account, which should just be your Windows login account.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-a-sql-server-instance-for-the-report-server?u=76281980&t=82)** You want to verify that right there.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-a-sql-server-instance-for-the-report-server?u=76281980&t=84)** And the last thing I want to do is also install SSMS or SQL Server Management Studio so that I have a graphical interface for SQL Server, and I can click on the install SSMS button down here at the bottom of this window.
>
> **[1:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-a-sql-server-instance-for-the-report-server?u=76281980&t=97)** That'll simply open up my web browser again and take me to the download page, scroll.
>
> **[1:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-a-sql-server-instance-for-the-report-server?u=76281980&t=101)** I'll scroll down here until I find the link to download SQL Server Management Studio, and the current version is 20.2 at the time of this recording.
>
> **[1:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-a-sql-server-instance-for-the-report-server?u=76281980&t=110)** I'll go ahead and download the installer file for SSMS.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-a-sql-server-instance-for-the-report-server?u=76281980&t=114)** Once that's done downloading, I'll close my web browser and I can also close the SQL Server installer.
>
> **[2:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-a-sql-server-instance-for-the-report-server?u=76281980&t=120)** Then I'll return back to my downloads folder one more time and I'll install SSMS.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-a-sql-server-instance-for-the-report-server?u=76281980&t=128)** The only option that we have here is to change the location, which I'm not going to do.
>
> **[2:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-a-sql-server-instance-for-the-report-server?u=76281980&t=131)** I'll leave the default installation location and press the install button.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-a-sql-server-instance-for-the-report-server?u=76281980&t=135)** And with that, we have all of the software installed that we need.
>
> **[2:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-a-sql-server-instance-for-the-report-server?u=76281980&t=139)** The final step is going to be to go back and configure reporting services in order to connect it to the SQL Server instance that we just installed, and we'll do that in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** sql (10), ssms (4), mssql (2), ssrs (1)
> **Prerequisites:** install (8), set up (1), configure (1)
> **CLI Commands:** find (2), make (2)
> **UI Navigation:** scroll down (2), click on (1)
> **Code Keywords:** interface (1)
> **Versions:** 20.2 (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** download the (1)

#### Configure the report server
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=0)** - [Instructor] With the Report Server now installed, we need to configure the connections to the SQL Server instance where the reporting database will be stored.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=9)** Now, this doesn't need to be the same SQL Server instance where your actual data is stored, though.
>
> **[0:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=14)** In fact, in a production environment, it's often advantageous to have Reporting Services use a SQL Server instance that's on separate hardware from your main databases.
>
> **[0:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=24)** As long as the SQL Server instance that houses Reporting Services can access the instance that houses your data across the network, everything will work out fine.
>
> **[0:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=34)** When installing on separate hardware, the process of querying data and running reports won't impact the day-to-day operations of your main production database.
>
> **[0:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=45)** Now, to keep things streamlined for this course, though, I'm going to add my Reporting Services database to the same instance that my data is on.
>
> **[0:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=53)** To start the configuration process, you can either press the button at the bottom of the Reporting Services Installation window if you have that still open.
>
> **[1:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=61)** Or if you've closed that window like I have, you can come down to your Start menu, and you should find a program group for Microsoft SQL Server Reporting Services.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=70)** And in there is a tool called Report Server Configuration Manager.
>
> **[1:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=74)** This is the tool that we'll use to connect our Report Server to SQL Server.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=79)** Now, the first step is to find a SQL Server instance.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=82)** On my computer, I have a default SQL Server instance currently running on my machine, which is called WINDOWS 10-PC.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=90)** If you have a named instance of SQL Server or if it's on a remote computer, you would put the IP address or the server name here, just like you would when connecting using Management Studio.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=102)** Let's press the Connect button and connect to the database server, and that'll bring us to the main portion of the interface.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=108)** Here, we have the Status page for the Report Server.
>
> **[1:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=112)** You can see that it's currently started.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=114)** We have buttons on the bottom to stop or start the Report Server if we need it.
>
> **[1:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=119)** At the top, there's a message that'll help guide us through the next steps in configuring the server.
>
> **[2:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=125)** It says that before we can use the Report Server, we need to configure the web service URL, the database, and the web portal URL.
>
> **[2:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=134)** All of those configurations will be accomplished on the various pages that you see on the left side of the screen.
>
> **[2:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=140)** So, we'll just start at the top and work our way down.
>
> **[2:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=143)** The first one is the Service Account.
>
> **[2:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=146)** Just like with your other SQL Server services, like the agent or browser, Reporting Services needs a service account to be able to perform tasks on the computer.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=156)** Our options here are to use the built-in Virtual Service Account or use a an account that has its own username and password.
>
> **[2:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=165)** Using a domain user account can be more secure, but it will need to be managed and have permissions assigned to it to ensure that the Report Server can access the data that it needs.
>
> **[2:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=176)** I'll choose to leave it with the default built-in virtual service account.
>
> **[3:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=180)** If you make any changes to this page, make sure you press the Apply button down here at the very bottom before moving on.
>
> **[3:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=186)** Let's go to the Web Services URL now.
>
> **[3:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=189)** This will be the location that we'll use to log into the Report Server and view reports using a standard web browser.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=196)** First is the name of the virtual directory.
>
> **[3:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=199)** This acts as the root folder or the home folder for the Report Server web portal.
>
> **[3:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=204)** The default name is Simply Report Server, which is a good name for me, so I'm just going to leave it as is.
>
> **[3:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=210)** You then have the ability to choose an available IP address, customize the access port, and provide a security certificate if you have one to enable Secure connections with HTTPS.
>
> **[3:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=222)** Again, I'm going to accept all the defaults and press the Apply button down here at the very bottom.
>
> **[3:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=227)** After a moment, those changes are made, and we can move on to the database configuration.
>
> **[3:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=233)** On this page, we need to create the Report Server database and create a user account that'll access that database.
>
> **[4:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=240)** Press the Change Database button to bring up the Configuration window.
>
> **[4:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=245)** We have the option to create a brand-new database or use an existing database.
>
> **[4:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=249)** We'll choose to create a new Report Server database and press Next.
>
> **[4:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=254)** Here, we specify the server name and provide the credentials to access that server.
>
> **[4:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=259)** You can use your Windows account or provide a SQL Server login account name and password.
>
> **[4:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=264)** Press the Test Connection button to make sure that the settings are correct.
>
> **[4:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=268)** If you see Test Connection succeeded, everything's good to go.
>
> **[4:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=271)** Press the OK button and then press Next.
>
> **[4:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=274)** Here, we get to name the new database.
>
> **[4:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=277)** Report Server seems like a logical name to use to me, so I'll accept that default suggestion and press Next.
>
> **[4:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=284)** Here, we're going to grant permissions to the service account to access the server.
>
> **[4:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=289)** We'll leave the defaults again and press Next.
>
> **[4:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=292)** Finally, we're given a summary of all of the changes we're about to make and press the Next button.
>
> **[4:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=297)** Once the database is created and configured, you should see success messages all the way down.
>
> **[5:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=302)** You can go ahead and press Finish.
>
> **[5:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=304)** So that completes the database setup and establishes the user accounts.
>
> **[5:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=308)** If you need to make any changes, you can always come back to this page and press either the Change Database or Change Credentials buttons.
>
> **[5:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=316)** That moves us over to the Web Portal URL step.
>
> **[5:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=319)** I'll switch to that page.
>
> **[5:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=321)** This will simply set up a directory name.
>
> **[5:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=324)** The default of Reports is fine, so I'll just press the Apply button now at the bottom.
>
> **[5:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=329)** That'll establish the URL on our computer that will access the Report Server through, so you'll want to make note of this URL right here.
>
> **[5:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=337)** So, that finishes the required settings.
>
> **[5:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=339)** Now, there's some additional items that you can configure, depending on your needs.
>
> **[5:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=343)** If you want Reporting Services to be able to email reports directly to end users, you can configure those settings here.
>
> **[5:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=349)** You'll need to set up an email address for the server to use.
>
> **[5:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=353)** The Execution Account is used for accessing some remote servers that don't require credentials or for pulling images off of a remote server.
>
> **[6:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=362)** Encryption keys can be managed on this page, so if you need to back up the key or restore a key on a new server, this is where you would go to do that.
>
> **[6:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=371)** Subscription Settings adds accounts used to create file shares, and Scale-out Deployment configures Report Servers that are part of a scale-out group that are used to balance resources during heavy workloads.
>
> **[6:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=384)** And with that, we've completed our initial configuration of the Report Server.
>
> **[6:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=388)** Go ahead and press the Exit button to close the Configuration Manager.
>
> **[6:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=392)** Now, if we take a quick peek at the SQL Server instance by loading up Management Studio, I'll quickly connect to my database server.
>
> **[6:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=401)** Then, in the Databases folder, you should find that we have two new databases that have been recently created: one for the ReportServer and one for the ReportServerTempDB.
>
> **[6:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/configure-the-report-server?u=76281980&t=411)** Inside of these are all the tables that we used to manage our reports, their formatting, data connections, and their queries, schedules, and everything else that we need to publish and deliver high-quality documents that'll help make all of our data more accessible and actionable.

> [!info]- Semantic Content
>
> **Env Vars:** sql (12), url (6), windows (1), https (1)
> **CLI Commands:** make (7), find (3)
> **Prerequisites:** configure (4), set up (2), setup (1), you'll need (1)
> **Code Keywords:** let (2), interface (1), finally, (1), switch (1), require (1)
> **UI Navigation:** go to (2), switch to (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** just like (2)
> **Speakers:** - [instructor] (1)

#### Set up the example database
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=0)** - [Instructor] To demonstrate how to build reports with SQL Server Reporting Services, we'll need some data to work with.
>
> **[0:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=6)** For this course, I'll be using the sample database from Microsoft called Wide World Importers.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=12)** You can get your own copy from the GitHub project page at this URL.
>
> **[0:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=16)** Scroll down on the page until you find the link to the Wide World Importers-Full.bak file, and I'll go ahead and click on that link to download a copy of the backup file.
>
> **[0:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=25)** Once it's downloaded, we can install it on our computer.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=27)** I'll go into my Downloads folder.
>
> **[0:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=29)** I'll cut it to my clipboard, and then I'll browse into my C Drive, Program Files, Microsoft SQL Server.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=36)** Then we'll go into the folder for the server instance that we want to work with.
>
> **[0:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=39)** Yours is going to have a different name probably than the one that I'm working with.
>
> **[0:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=43)** Mine is MSSQL 16, which is the version of SQL Server that I'm working with, and my server instance is MSSQL Server.
>
> **[0:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=51)** I'm going to go into that folder, then MSSQL, and finally the Backup folder.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=56)** Now the first time you try and go into this Backup folder, you might see a message that says you don't have permission, but you can press the Connect button and it should let you in.
>
> **[1:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=64)** Then I'll just paste in a copy of that backup file.
>
> **[1:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=67)** Now we can go into Management Studio and restore that database backup.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=71)** I'll right click on the databases folder in the Object Explorer panel and choose Restore Database.
>
> **[1:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=77)** Then our source is going to be from a device, and I'll click the ellipsis button on the right.
>
> **[1:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=83)** I'll click the Add button, and that should take us into the Backup folder that we were just in.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=88)** I'll select the WideWorldImporters-Full backup file and press okay.
>
> **[1:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=92)** Okay, and okay one more time to restore the database backup.
>
> **[1:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=96)** Once it's restored successfully, you should see it appear over here in the Object Explorer panel.
>
> **[1:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=101)** So now you have your own copy of the sample database so that you can follow along with the course.
>
> **[1:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=106)** The only other piece of information that would be helpful to know is the server name that you're using.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=111)** You can find that by clicking on the connection button up here in the toolbar.
>
> **[1:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=116)** Pay attention to the server name that you see right here.
>
> **[1:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=118)** You might want to write it down.
>
> **[2:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/set-up-the-example-database-25001009?u=76281980&t=120)** You'll need to know this server name when it comes time to connect your reports to the database that we just installed.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3), mssql (3), url (1)
> **UI Navigation:** click on (2), scroll down (1), select the (1), in the toolbar (1)
> **CLI Commands:** find (2)
> **Prerequisites:** install (1), you'll need (1)
> **Code Keywords:** let (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### Access the web portal
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=0)** - [Instructor] In addition to creating the reporting services database on the SQL Server instance, the configuration process also created a web server that'll allow users to easily access the reports that we're going to create.
>
> **[0:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=14)** If you accepted the default configurations, then you should be able to access it by opening up a web browser and going to http colon slash slash the name of your computer slash reports.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=27)** You can also specify the IP address of your machine or the word local host instead of the computer name.
>
> **[0:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=34)** Also, if you set up an SSL certificate, you may need to use HTTPS to create a secure connection instead of just HTTP, and if you decided to customize your connection port, you'll need to add that to the URL after the name of the computer.
>
> **[0:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=49)** For instance, I'm just using the default port, but I could also type colon 80 here at the end in order to load that specific port number.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=56)** If you're using the default port of 80, though, you can omit that from the URL.
>
> **[1:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=61)** Now, when the report portal loads, it's currently going to be empty because we haven't created any reports yet, but we'll work on filling this page up throughout the course.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=70)** Just being able to get to this webpage means that things are working correctly so far.
>
> **[1:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=76)** Now, when you need to access the report web portal from a remote computer, you'll most likely need to allow connections through your computer's firewall, because this process can be a little bit different depending on the specifics of your network and your computer, I'd suggest working with a network administrator to help you make sure that your settings are correct.
>
> **[1:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=95)** That'll give people access to the report server without leaving the computer exposed to additional threats.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=102)** Now, at a minimum, you'll need to allow traffic into the server on TCP Port 80, the default port used by reporting services.
>
> **[1:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=110)** If you set up a different port in the configuration manager, then obviously your firewall settings will need to be adjusted to match your custom setup.
>
> **[1:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=118)** I'm going to do a quick search here for Windows Firewall and open up the control panel for the Windows Defender.
>
> **[2:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=125)** Then I'll click to advanced settings.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=128)** Here, I'll click Inbound Rules, and then on the right, I'll click the button to add in a new rule.
>
> **[2:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=134)** The type of rule is going to be a port rule that controls connections for a TCP or a UDP port and press the next button.
>
> **[2:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=141)** Then it'll be a TCP port that we're working on, and a specific local port of 80, the default port used by reporting services, I'll go ahead and press the next button.
>
> **[2:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=151)** I'll choose the option to allow the connection and press next.
>
> **[2:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=154)** For the profile I'm going to use all of these domain, private and public and press next.
>
> **[2:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=159)** And then finally, we can give this new rule a name.
>
> **[2:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=162)** I'll call it SSRS, with a description of allow access to SQL Server Reporting Services web portal.
>
> **[2:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=169)** Go ahead and press the finish button, and that'll create the new rule that you'll see here at the top of your inbound rules for your Windows Defender firewall settings.
>
> **[2:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=177)** Now we should be able to log into the server from a remote computer.
>
> **[3:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=180)** Let's go ahead and test it out.
>
> **[3:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=183)** I've moved over to a Mac computer that's on the same network as my reporting services machine.
>
> **[3:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=188)** If I open up a web browser here in Safari and navigate to my Windows computer's IP address, for me, that's 1921687152, but yours is obviously going to be a different IP address for that machine, and then do a slash and reports.
>
> **[3:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=204)** That prompts me to sign in to the server, so this is a good sign that things are working correctly.
>
> **[3:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=209)** I'll type in my Windows account username and password, press the sign in button, and you should be connected to the report server browser, just like we saw over on the Windows computer.
>
> **[3:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=220)** However, after a moment, you'll get this message that says that it could not load the folder contents.
>
> **[3:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=225)** I need to contact my administrator to obtain the of necessary permissions.
>
> **[3:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=230)** Let's go ahead and press okay.
>
> **[3:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=231)** Now, there's one additional setting that I need to make over on the Windows side in order to grant myself permissions when I'm connecting through a remote computer.
>
> **[3:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=239)** So let's go back over to Windows.
>
> **[4:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=242)** Here on the Windows computer where I'm logged in as an administrator using my administrator account.
>
> **[4:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=247)** I'll click on the button to manage folder.
>
> **[4:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=250)** Here that'll bring us to the security page where we can add in a new group or user.
>
> **[4:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=255)** I'll give the new group or username the same name that I'm using on my Windows computer.
>
> **[4:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=259)** That's Windows 10 dash PC back slash Adam.
>
> **[4:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=264)** Then I'll assign myself to all of the roles available.
>
> **[4:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=267)** I'll press the okay button.
>
> **[4:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=268)** Then I'll create a new user account that has administrator permissions on the report server.
>
> **[4:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=274)** Now we can go back into the Mac.
>
> **[4:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=277)** This time on the Safari browser here on the Macintosh computer that's connecting remotely, I'll simply refresh the page.
>
> **[4:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=283)** Now I'm connected using the administrator account, and it tells me that the folder is empty instead of giving me that error message.
>
> **[4:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=290)** So that's how you get access to the reporting Services web portal where you'll be able to access all of your reports and build custom dashboards around your data.
>
> **[4:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/access-the-web-portal?u=76281980&t=299)** Feel free to bookmark this page for easy access.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (3), sql (2), url (2), ssl (1), https (1)
> **Code Keywords:** let (3), private (1), public (1), finally, (1)
> **Prerequisites:** set up (2), you'll need (2), setup (1)
> **CLI Commands:** make (2)
> **Tools:** safari (2)
> **UI Navigation:** navigate to (1), click on (1)
> **Analogies:** for instance (1), just like (1)
> **Ports:** port 80 (1)

#### Install Report Builder
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=0)** - [Adam] In order to design paginated reports and make them accessible through the Report Server web portal, we need one additional application.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=9)** It's called Report Builder.
>
> **[0:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=11)** And you can get to the installation file from right inside the portal.
>
> **[0:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=15)** Unfortunately, the Report Builder is only available for Windows computers, so I'm going to be working on my PC for the rest of this course.
>
> **[0:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=24)** Up in the upper right hand corner of the Reporting Services web portal, click on the Download button and then choose Report Builder.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=32)** That'll open up a new browser tab and take you to the Download page for the most recent version.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=37)** We'll simply select the language that you want and press Download.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=41)** When it's done downloading, I'll open up the file to start the installation process.
>
> **[0:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=46)** I'll press the next button on the first splash screen and accept the licensing terms.
>
> **[0:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=51)** Then, I'll just accept all of the default options and press Next.
>
> **[0:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=54)** I'll choose the Next here, and I'm not going to put in a default target server URL.
>
> **[0:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=58)** Just press Next, and finally press Install.
>
> **[1:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=61)** When that's done, you can press the Finish button.
>
> **[1:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=63)** Now you can find the Report Builder in a couple of different ways.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=66)** You can either go down into your Program Files and you should see a new folder here for Microsoft Report Builder with the application right there.
>
> **[1:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=75)** But you can also get to it through the web portal.
>
> **[1:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=77)** So, let me go back into my web browser.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=79)** Here, I can choose the option for New and then click on Paginated Report.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=84)** This will give me the message that the site is trying to open up the Report Builder application.
>
> **[1:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=89)** I can press the Open button here.
>
> **[1:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=92)** That'll launch the same Report Builder application that we could get to through our Start menu.
>
> **[1:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=96)** I'll say yes to this message here.
>
> **[1:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=98)** And after a moment of processing, it should open up the Report Builder app.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=102)** The first screen we see we're prompted to create a new report and are given some wizards to choose from to do that.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=108)** Now we're going to spend a bunch of time building reports in upcoming chapters.
>
> **[1:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=113)** So for now, go ahead and just close the new report or dataset window.
>
> **[1:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=117)** You can also close the Report Builder and return back into the web portal.
>
> **[2:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=123)** Then I'll dismiss this button that says that we're opening up Report Builder.
>
> **[2:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=127)** Now at this point, we have SQL Server Reporting Services fully installed.
>
> **[2:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=131)** The database is configured, the web portal is up and running, and we have the application to build reports all set up and working together.
>
> **[2:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=140)** It's now time to start collecting data and organizing it into well-designed reports.
>
> **[2:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/install-report-builder?u=76281980&t=145)** I'll see you in the next chapter.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2), select the (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** url (1), sql (1)
> **Prerequisites:** install (1), set up (1)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [adam] (1)


### 2. Build Your First Report

#### Components of a report
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/components-of-a-report?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/components-of-a-report?u=76281980&t=0)** - [Instructor] In order to create and visualize your data in a report, you need to provide three elements.
>
> **[0:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/components-of-a-report?u=76281980&t=7)** The first is the data source.
>
> **[0:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/components-of-a-report?u=76281980&t=10)** This is the location where your data is stored, and the connection and authentication parameters required to access that location.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/components-of-a-report?u=76281980&t=18)** Typically, this will consist of a server name and an instance name, as well as a login name and password needed to access your database server.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/components-of-a-report?u=76281980&t=27)** The data source will also define the specific database on that server that you're going to be retrieving data from.
>
> **[0:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/components-of-a-report?u=76281980&t=34)** The next element that you need to provide is a data set definition.
>
> **[0:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/components-of-a-report?u=76281980&t=39)** This component retrieves specific data from the database that you want to visualize in the report.
>
> **[0:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/components-of-a-report?u=76281980&t=45)** The dataset will be made up of table columns and data rows, and you'll pull them into report builder using standard transact SQL queries.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/components-of-a-report?u=76281980&t=55)** Report Builder will allow you to either write out these queries manually, or you can use a graphical interface to build a query that gets to the information that you're interested in.
>
> **[1:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/components-of-a-report?u=76281980&t=65)** And because we're defining data sets with a query, instead of pulling actual data, this means that the data presented in the report, we'll always be up to date.
>
> **[1:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/components-of-a-report?u=76281980&t=75)** And it'll be refreshed every time the report is run.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/components-of-a-report?u=76281980&t=79)** So we know where our data is coming from with the data source and what specific data we want to work with with the data set.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/components-of-a-report?u=76281980&t=87)** Now we need to define how we want to visualize that data in the actual report.
>
> **[1:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/components-of-a-report?u=76281980&t=92)** This is where the report layout comes in.
>
> **[1:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/components-of-a-report?u=76281980&t=95)** This is where we will position and format the elements of the report, the title, the header and footer information, charts and tables that are populated with data.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/components-of-a-report?u=76281980&t=104)** All of that will get placed on a piece of paper.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/components-of-a-report?u=76281980&t=108)** This step in constructing a report is very much like using a page layout program such as Publisher or making slides in PowerPoint.
>
> **[1:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/components-of-a-report?u=76281980&t=117)** You'll make use of a number of different objects, place them on the page where you want them, and configure and format them to bring them to life, and apply your own personal style.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/components-of-a-report?u=76281980&t=128)** All three of these elements are collected together and make up a file called a Report Definition.
>
> **[2:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/components-of-a-report?u=76281980&t=134)** This is the file that's stored on the report server and will appear in the web portal.
>
> **[2:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/components-of-a-report?u=76281980&t=140)** When selected, the report definition will be able to connect to the data source, retrieve the data set, and lay out the report elements according to your specifications.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** from. (1), interface (1)
> **Definitions:** is a  (1), means that (1)
> **Env Vars:** sql (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Create a report data source
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=0)** - [Instructor] The easiest and most common way to start building a report is to begin at the report server's web portal.
>
> **[0:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=7)** From here, you'll press the New button to start a new Paginated Report.
>
> **[0:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=11)** Now, depending on the width of your browser window, you might just see the plus icon without the text New next to it.
>
> **[0:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=17)** The portal also scales with your web browser zoom level, so you might want to zoom out or in if the text is too large or too small for your liking.
>
> **[0:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=26)** Okay, go ahead and choose New and then Paginated Report.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=30)** That'll prompt you to open up the Report Builder application.
>
> **[0:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=33)** When the application launches, you'll be presented with some options to choose a wizard to help you set up the report.
>
> **[0:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=40)** To start out, though, I'm just going to choose the Blank Report option at the bottom.
>
> **[0:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=44)** The options presented in the Wizards will make a little bit more sense later on once we have a good idea of what's going on behind the scenes.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=52)** Now, the Report Builder application is organized like a typical Microsoft Office app, so if you're familiar with Word, or Excel, or Access, you should recognize the standard ribbon interface across the top of the screen.
>
> **[1:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=65)** The File tab will give you access to options to create a new report, open existing reports, or save the current report.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=73)** The Home tab gives you easy access to some common formatting options, such as font face and size, text alignment, and number formatting.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=82)** The Insert tab includes all of the different components that we can add to the report, including tables, charts, and images.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=90)** And finally, the View tab simply includes a couple of interface windows that we can show or hide with these check boxes.
>
> **[1:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=98)** Right now, I have the Report Data window open, which is this portion of the screen over here on the left.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=104)** I also have the Grouping panel open, which is this panel over here on the very bottom of the screen that has row groups and column groups, as well as Rulers, which appear on the left-hand and top of the page of our report that's being designed here in the center of the screen.
>
> **[1:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=119)** You can toggle any of these off that you don't want to see.
>
> **[2:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=122)** For instance, I'm going to turn off the Grouping windows for now and give me some more room when I'm working on my report.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=128)** Okay, let's go back to the Home tab now.
>
> **[2:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=130)** In order to start building a report, the first thing that we need to do is to find the data source.
>
> **[2:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=136)** This is the location where we're going to go to get the data that we want to display in the report.
>
> **[2:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=142)** Most often, this will be a connection to a specific SQL Server database.
>
> **[2:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=147)** In the Report Data window on the left side of the screen, there's a number of folders that contain the different elements that make up the report.
>
> **[2:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=154)** If you press the New button at the top left of that toolbar, it'll give you the option to create new elements.
>
> **[2:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=160)** For instance, we can create a new data source.
>
> **[2:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=163)** Alternatively, you can also right-click on the Data Sources folder and choose Add Data Source.
>
> **[2:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=169)** Either of those two options will start off the same workflow.
>
> **[2:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=172)** They'll open up the Data Source Properties window.
>
> **[2:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=175)** In this Data Source Properties window, we need to fill in the details this General page to create the connection.
>
> **[3:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=182)** First, we need to provide a name for the data source.
>
> **[3:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=186)** This name can be whatever you want.
>
> **[3:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=188)** It's simply used to make it easier to remember where this data source is connected to, so it doesn't need to correspond to the name of your server or anything else.
>
> **[3:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=197)** Type whatever it is that'll be most memorable for you.
>
> **[3:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=200)** But keep in mind that the name that you use cannot have any spaces in it.
>
> **[3:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=205)** I'll type WideWorldImporters.
>
> **[3:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=207)** Next, we need to choose whether we're going to use some connection instructions that have already been created with a shared connection, or if we're going to define the connection instructions for this report only.
>
> **[3:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=220)** Now, we don't yet have a shared connection created, so let's just embed the connection details right inside of this report's document.
>
> **[3:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=228)** That'll prompt you for the type of connection.
>
> **[3:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=231)** Again, this is typically going to be to a SQL Server instance, but you do have additional types that you can choose from.
>
> **[3:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=237)** For instance, if your data is stored on an Azure SQL database, or an Oracle database, or any of these other options, you can simply choose them from the list.
>
> **[4:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=245)** I'll make sure that mine stays Microsoft SQL Server.
>
> **[4:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=249)** Once you've chosen your type, you need to provide the connection string that'll give the Report Builder access to that database server.
>
> **[4:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=256)** If you're an application developer, you might already know the format that this connection string takes, but for everyone else, press the Build button over on the right to get some help putting the string together.
>
> **[4:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=267)** That brings up this Connection Properties window.
>
> **[4:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=270)** Here, the data source is already filled in based on the connection type that we chose on the last window.
>
> **[4:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=276)** We need to provide the name of the server that we're connecting to.
>
> **[4:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=280)** If you're connecting to a default instance of SQL Server, that means that we just need to type in the computer name or the IP address that it's installed on, or you'll need to provide the name of the server instance as well if you're using a named instance.
>
> **[4:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=295)** This will be the same information that you would provide when logging into the server using SQL Server Management Studio.
>
> **[5:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=302)** I'm using a default instance on my computer, so I'll just type in my computer's name, Windows10-PC.
>
> **[5:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=307)** Next, provide the login credentials that Report Builder can use.
>
> **[5:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=311)** The easiest option here is to use your personal Windows authentication account.
>
> **[5:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=316)** This will give Report Builder access to the exact same data that you personally have access to, no more and no less.
>
> **[5:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=324)** The other option is to create a SQL Server authentication account specifically for a Report Builder to use.
>
> **[5:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=329)** If your instance allows mixed mode authentication, I'll stick with using my Windows account for authentication to the database server.
>
> **[5:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=337)** If this connection information is valid, you should now be able to use this dropdown menu to choose a database on the server to connect to.
>
> **[5:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=346)** You'll be allowed to choose from all of the databases that you can typically see on your own SQL Server instance.
>
> **[5:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=351)** I'll choose the WideWorldImporters database from the list.
>
> **[5:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=355)** Now, there is an advance button here that'll give you access to some additional configuration options.
>
> **[6:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=360)** Most of these deal with connection configurations and setting timeouts.
>
> **[6:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=364)** Now, if you have a specific need to alter some of these options, they're right here.
>
> **[6:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=369)** If you're unsure, though, just leave the defaults and press Cancel.
>
> **[6:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=372)** Now, at this point, it's a good idea to give the connection a test.
>
> **[6:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=375)** I'll press the Test Connection button and it tells me that it was successful.
>
> **[6:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=379)** At this point, we can press the OK button, and that'll populate the connection string here back on the Data Source Properties page.
>
> **[6:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=386)** Now, if you're curious, the other page that we have access to is called Credentials.
>
> **[6:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=391)** Let's take a look at that real quick.
>
> **[6:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=393)** This page will allow you to change the credentials used to connect to the data source.
>
> **[6:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=398)** Now, we already set these values by going through the Connection String Build window, but if you manually typed in a connection string, you would also need to come here and fill in the authentication details as well.
>
> **[6:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=409)** Okay, let's go back to the General page.
>
> **[6:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=411)** I'll test my connection one more time just to make sure that everything's still working.
>
> **[6:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=414)** It is, I'll press OK, and press OK again to create that data source in the report.
>
> **[6:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=419)** You'll see it now appears in the Report Data window over here on the left.
>
> **[7:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=423)** If you ever need to come back and edit the source, you can either double-click on its name to return right back to that window, or you can right-click on it and choose Data Source Properties to get to the same place.
>
> **[7:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=437)** So now our report has an embedded reference to our database where our data will come from.
>
> **[7:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=442)** If your report will require data from multiple databases, you can add additional data sources.
>
> **[7:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-report-data-source?u=76281980&t=449)** Next, we need to drill into the database and get more specific about exactly what tables and columns we want to pull out of the database, and we'll do that by creating a dataset next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (2), from. (2), finally, (1), else. (1)
> **Env Vars:** sql (8)
> **CLI Commands:** make (5), find (1)
> **UI Navigation:** right-click (2), toggle (1), dropdown (1), double-click (1)
> **Analogies:** for instance (3), such as (1)
> **Definitions:** means that (1), is an  (1), is called (1)
> **Cross-References:** go back to (2)
> **Prerequisites:** set up (1), you'll need (1)

#### Create a dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=0)** - [Instructor] We've identified the database that our report is going to pull data from with the data source.
>
> **[0:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=6)** Now, we need to get more specific and choose what columns and rows from what tables we want to retrieve.
>
> **[0:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=13)** We do this by creating a dataset.
>
> **[0:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=16)** Just like with a data source, there's two ways to create a dataset.
>
> **[0:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=20)** You can click on the new button in the report data panel and choose dataset from the popup menu, or you can right click on the datasets folder and choose add dataset.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=30)** Either way, it'll bring us to this dataset properties window.
>
> **[0:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=34)** First, we need to name the dataset so that we can recognize what information it's gathering later on.
>
> **[0:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=40)** This name can be anything that you'd like.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=41)** It doesn't have to relate to the names of the tables or anything from your database.
>
> **[0:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=46)** I'll call mine simply People.
>
> **[0:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=48)** We have the option of using a shared dataset, but our report server doesn't have any yet, so I'm going to create this dataset directly inside of the report by using a dataset embedded in my report.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=60)** Then we'll use the data source that we previously set up to connect to the Wide World Importers database.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=66)** And finally below is where we can type in the query that'll fetch the data that we're interested in viewing in our report.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=73)** If you feel comfortable writing TSQL queries, then you can have at it typing right into this window.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=78)** Otherwise, press the query designer button at the bottom to use a graphical interface.
>
> **[1:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=83)** This screen is split up into a number of smaller panes.
>
> **[1:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=86)** On the left is the database view.
>
> **[1:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=89)** This will allow us to dig into the database to find the data that we're interested in.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=94)** Now, one thing you might notice is that the top level folders correspond to the schemas used in the database.
>
> **[1:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=100)** In the Wide World Importers database, tables, views, and stored procedures are all organized into schemas called application, data load simulation, integration, and so on.
>
> **[1:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=112)** So this tree structure might look a little bit different than what you're used to seeing in Management Studio.
>
> **[1:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=117)** If we open the application schema, for instance, you'll see that we have both tables and stored procedures that use this schema.
>
> **[2:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=125)** In SSMS, you would find tables inside of the tables folder and stored procedures inside of the programmability folder.
>
> **[2:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=132)** So just be aware that the organization of your data is presented a little bit differently here in the Report Builder.
>
> **[2:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=138)** So I'm going to expand the application folder and then the tables folder under that.
>
> **[2:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=143)** This shows me all of the different tables that are inside of the application schema in the Wide World Importers database.
>
> **[2:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=149)** I'll place a check mark next to the people table.
>
> **[2:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=153)** That'll populate the pane on the right with these selected fields from all of the columns in the people's table.
>
> **[2:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=159)** If you only want to see a few columns from that table, you can expand the people table in the database view on the left, deselect it, and then just simply place a check mark in the individual columns that you want to use in your report.
>
> **[2:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=172)** I'll choose the full name column as well as the email address and phone number columns.
>
> **[2:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=179)** That'll place those selected fields over here on the right.
>
> **[3:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=182)** Now, if you'd like to review the syntax of the SQL query that's being built for us, you can press the edit as text button in the upper left hand corner.
>
> **[3:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=191)** There should be no surprises here that it's pretty basic.
>
> **[3:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=194)** It's going to select the full name, phone number, and email address fields from the Application.People table.
>
> **[3:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=200)** You can press the edit text button again to return back to the graphical interface.
>
> **[3:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=205)** If you'd like to see the actual data that's returned with this query, you can press the run query button.
>
> **[3:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=211)** The results will display in the section at the bottom of the window.
>
> **[3:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=215)** Now, apparently there's one oddball record with the name data conversion only, but everything else looks like the kind of information that I'm expecting, with people's names, their email addresses, and their phone numbers.
>
> **[3:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=226)** To close the results pane, click on this little up arrow shutter button over on the right.
>
> **[3:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=231)** You'll see it collapses down to the very bottom of the interface.
>
> **[3:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=235)** Now there's two other sections that we haven't looked at yet.
>
> **[3:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=238)** One is called relationships, and you can see it's here, and it's currently collapsed.
>
> **[4:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=242)** So I'll click on its shutter button to open it up.
>
> **[4:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=245)** This section will be useful when you want to join multiple data tables together.
>
> **[4:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=249)** The other section is called applied filters, and this is where you would limit the records that have returned from the table.
>
> **[4:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=256)** In fact, you can think of each of these four main panes as corresponding to the major clauses in a regular TSQL select statement.
>
> **[4:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=264)** The selected fields pane at the top is the select clause, the database view pane is the from clause, the relationships pane defines our table joins, and the applied filters pane is the where clause.
>
> **[4:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=278)** Also in the selected field section is a column for aggregate, and this will give us access to the group by clause.
>
> **[4:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=285)** The only main clause that's missing from this interface is the order by clause, and that's because ordering of records is more concerned with the presentation of the data, rather than defining what data to return.
>
> **[4:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=299)** We'll handle the sort order that records will appear in later on in the design of the report.
>
> **[5:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=304)** For now, we're just concerned with getting the data out of the database, so I'm going to stick with this simple set of records that pulls just the full name, phone number, and email addresses from the people table.
>
> **[5:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=315)** Press the okay button at the bottom of the window and that query text gets pasted into the box in the main window.
>
> **[5:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=321)** Along the left hand side of the screen are a couple of additional pages that we can peek into.
>
> **[5:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=327)** The fields page lists the columns that are being returned by the query.
>
> **[5:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=332)** Now we could rename the fields here, which would add aliases with the SQL as keyword.
>
> **[5:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=337)** In the options pane, we can change the correlation and case sensitivity of the data.
>
> **[5:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=344)** Filters would allow us to further modify a where clause, and we'll talk about adding parameters to the dataset later on in the course, which will make the query more dynamic.
>
> **[5:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=354)** Go ahead and press the OK button to save the dataset to the report.
>
> **[6:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=360)** Now we have a new entry with a name that we gave it, People, and inside are the individual columns that are being pulled out of the Wide World Importers database.
>
> **[6:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dataset?u=76281980&t=369)** Now all we need to do is add this data into our reports layout.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), open the (1), select the (1)
> **Code Keywords:** interface (4), return. (1)
> **Env Vars:** tsql (2), sql (2), ssms (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is called (2), is a  (1)
> **Analogies:** just like (1), for instance (1)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)

#### Add a data table with the wizard
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=0)** - [Adam] With the data source and dataset both defined, the next step in building a report is to place that collection of records onto the page.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=9)** The most common way to do that is to create a tabular region in the report's design.
>
> **[0:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=15)** On the Insert menu of these toolbar ribbon, you'll find the different elements that we can add into the reports.
>
> **[0:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=21)** Tables are grouped together with matrices and lists in a section called Data Regions.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=27)** Press the Table button and you'll see that we have two different options.
>
> **[0:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=31)** We either have the Table Wizard or one to insert a table.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=36)** We can either use the wizard to help set up the table or place the blank table that we'll have to hook together on our own.
>
> **[0:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=42)** So, let's just go ahead and use the wizard.
>
> **[0:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=45)** That'll open up the new table or matrix window.
>
> **[0:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=48)** First, we need to choose a data source.
>
> **[0:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=51)** We created one embedded in this report called People in the prior video, so I'll go ahead and select that one and press Next.
>
> **[0:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=58)** Then we need to arrange the fields into the table structure.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=62)** If you've ever built a pivot table in Excel, then this'll probably look pretty familiar.
>
> **[1:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=67)** On the left are the different columns that are coming out of our dataset.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=71)** We have the full name, email address, and phone number columns that we selected.
>
> **[1:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=76)** We just need to drag and drop them into these three areas.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=79)** Column groups, row groups, and values.
>
> **[1:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=83)** Now, values is going to be the most common, and that'll simply create a standard data table.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=87)** You can either drag each of these available fields into the Values section one at a time, or you can click on the first one and Shift + Click on the others to select multiples.
>
> **[1:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=96)** I'll go ahead and drag all three into the Values section.
>
> **[1:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=100)** Once you see 'em all over here, go ahead and press Next.
>
> **[1:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=103)** Here, we get to choose a layout.
>
> **[1:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=105)** But because we didn't include any fields in either of the grouping sections, there's actually nothing that we can do on this screen.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=111)** So, let's just press Next again.
>
> **[1:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=115)** We then get a small preview of the table and you can press Finish to exit the wizard, and place the table object into the report's layout.
>
> **[2:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=123)** The table comes in already selected, and you can resize it by dragging the grab handles spaced around the edges.
>
> **[2:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=130)** I'm going to drag mine wider to align with the title bar at the very top of the report.
>
> **[2:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=136)** You'll notice that as you move things around, you'll get some snapping guides that'll help you align things on the page.
>
> **[2:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=142)** Now, at this point, our table doesn't look like very much, and that's because we're currently viewing this report in Design View.
>
> **[2:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=149)** Here we just see the outline of a data table, but not any of the actual data.
>
> **[2:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=154)** The top row will be our header information, and then the row below written in the square brackets will represent a single typical data row.
>
> **[2:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=164)** If you click on the table, you'll get these gray bars that appear on the left and the top of the table.
>
> **[2:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=170)** In the box to the left of the data row are three lines.
>
> **[2:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=174)** And this indicates that this row will be copied for every record that is returned by the dataset.
>
> **[3:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=180)** Essentially, our table will grow vertically to accommodate as much data as we feed it.
>
> **[3:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=186)** Go ahead and click into a blank area of the report to deselect the table.
>
> **[3:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=191)** To view the report populated with data from the database, click on the Run button in the upper left hand corner of the ribbon.
>
> **[3:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=199)** Notice that the shortcut key is F5.
>
> **[3:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=202)** That'll pull the data from the database and populate our report.
>
> **[3:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=206)** You can then use the buttons on the Run tab of the ribbon to page through the report.
>
> **[3:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=211)** Now, this report does need a little bit of help with its layout.
>
> **[3:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=214)** The Email Address column needs to be wider in order to accommodate all the data without wrapping onto two lines.
>
> **[3:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=221)** But the basics are in place and we're getting data into the display, and that's always going to be step number 1.
>
> **[3:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=227)** Now, when you're done looking at it, you can press the design button to go back into the Design View.
>
> **[3:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=232)** Let's click and add a title to the report by clicking up here at the very top, and I'll call it People.
>
> **[3:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=238)** When you're done typing, click off to a blank area of the screen to deselect it.
>
> **[4:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=243)** If you try and press Enter, it's simply going to add a second line to this text box.
>
> **[4:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=247)** I'll go ahead and deselect that title bar.
>
> **[4:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=250)** Then, we can resize the columns in the table by selecting it and then dragging the handles in the gray bars at the top of the columns.
>
> **[4:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=258)** I'm going to make the Full Name column a little bit narrower, and I'll make the Phone Number column a little bit narrower as well, so that we can accommodate a wider Email Address.
>
> **[4:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=267)** Let's go ahead and deselect it and run it again to see the difference.
>
> **[4:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=271)** So now, we have enough room for our email addresses so that they don't need to wrap onto a second line.
>
> **[4:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=277)** Okay, I'll go back into Design View.
>
> **[4:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=279)** So now, I want to save the design of this report.
>
> **[4:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=282)** We'll go to the File tab and then choose the Save option.
>
> **[4:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=286)** The Save as Report window opens up and it defaults to the ReportServer's location.
>
> **[4:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=291)** You can save your report definition to the local computer using the links on the left hand side if you'd like.
>
> **[4:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=297)** But by saving it on the ReportServer itself, it'll make it available through the web portal.
>
> **[5:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=303)** Let's go ahead and give it the name People.
>
> **[5:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=305)** I'll go ahead and press the Save button, and then I can close the Microsoft Report Builder application.
>
> **[5:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=311)** Back on the portal, I'll close this window that tells me that I'm opening Report Builder, which was a leftover from before.
>
> **[5:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=316)** And then, I'll refresh my web browser.
>
> **[5:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=319)** And here is our first report.
>
> **[5:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=321)** You can click on it here in the portal to view it right inside of the browser, and then you can scroll through the different records of the data table.
>
> **[5:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=329)** When you're done, click on the Home link in the breadcrumb navigation along the top of the window to return back to the main page.
>
> **[5:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-data-table-with-the-wizard?u=76281980&t=336)** And that's how you use the dataset to populate a table in Report Builder.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (6), drag and drop (1), go to (1)
> **Code Keywords:** let (5)
> **CLI Commands:** make (3), find (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [adam] (1)

#### Joining data tables
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=0)** - [Adam] Most SQL Server databases break data up across multiple related data tables.
>
> **[0:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=6)** It's the configuration that makes relational databases relational.
>
> **[0:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=10)** Adding data to a report that spans across tables is simplified using the dataset graphical interface.
>
> **[0:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=17)** I'm going to create a new paginated report from the options here inside of the portal.
>
> **[0:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=22)** Then, I'll choose the option to create a new blank report in Report Builder.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=27)** Now, just like before, we need to create another data source.
>
> **[0:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=29)** So I'll right click on the Data Sources folder and add a new one.
>
> **[0:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=33)** I'll name this WideWorldImporters.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=36)** Then, I'll embed the connection into the report, we'll connect to a SQL Server, and I'll press the Build button over here on the right.
>
> **[0:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=43)** The server name will be my PC, and I'll use Windows Authentication.
>
> **[0:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=48)** Then, using the dropdown menu, I'll select the WideWorldImporters database.
>
> **[0:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=51)** I'll test the connection.
>
> **[0:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=53)** That looks like it works, so I'll say OK, OK, and OK again to create the data source.
>
> **[0:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=58)** Then, we'll add in our dataset.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=60)** I'll right click on that folder and add a new one.
>
> **[1:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=63)** For this dataset, I'll call it Purchase Orders.
>
> **[1:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=67)** We'll embed the dataset into the report, and for the data source, I'll choose the WideWorldImporters one, the one that I just created.
>
> **[1:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=75)** Now, we can pull columns from data tables in the WideWorldImporters database.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=79)** I'm going to click on the QueryDesigner button here to open up the graphical designer.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=84)** The tables that I'm interested in can be found inside of the Purchasing schema.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=88)** So I'll expand that open and expand the Tables folder.
>
> **[1:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=91)** These specific tables are PurchaseOrders and PurchaseOrderLines.
>
> **[1:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=96)** Let me go ahead and expand both of these tables, so we can see all of the columns in each of them.
>
> **[1:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=101)** Now, PurchaseOrders is the main parent table.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=104)** And each purchase order will include a number of line items described in the PurchaseOrderLines table.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=111)** These tables are related in a one-to-many foreign key relationship.
>
> **[1:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=115)** So from the PurchaseOrders table, I'm going to grab the PurchaseOrderID by placing a check mark there, as well as the OrderDate columns.
>
> **[2:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=124)** Let's also get the IsOrderFinalized column down here at the bottom.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=128)** Then, from the related PurchaseOrderLines items table above, I want to see PurchaseOrderLineID, StockItemID, OrderedOuters, and Description.
>
> **[2:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=141)** Now, these two tables are related based on the PurchaseOrderID column.
>
> **[2:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=145)** If you expand the Relationships portion of this window by clicking on its shutter button over here on the right-hand side on the Relationships row, you'll see that the Query Designer has already identified the correct relationship.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=158)** It says that PurchaseOrders will be inner joined to PurchaseOrderLines based on the PurchaseOrderID column.
>
> **[2:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=166)** This join was created for us, because the Auto Detect toggle button was on, and the database has been well designed with foreign key relationships.
>
> **[2:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=175)** If your data has not been linked across tables with formal relationships, then you can turn off Auto Detect, and then press the add button over here to add in a new relationship.
>
> **[3:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=187)** Then, you could double click to change the fields to select the specific columns that the two tables are related on.
>
> **[3:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=192)** I'll turn Auto Detect back on, which will discard any manually entered joins.
>
> **[3:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=198)** Now, we can make one additional sanity check by clicking on the Edit as Text button in the upper left-hand corner to view the T-SQL code to see that it indeed is the inner join that's being correctly created between the two tables.
>
> **[3:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=211)** Let me go ahead and expand it here, and we'll see that in the FROM clause.
>
> **[3:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=215)** It says that Purchasing.PurchaseOrders is going to be inner joined to the PurchaseOrderLines table on the PurchaseOrders column.
>
> **[3:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=223)** Let's go ahead and switch this back by clicking off the Edit to Text button.
>
> **[3:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=226)** That'll return us back to the main Query Designer.
>
> **[3:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=229)** Now, I'll finalize and save the dataset.
>
> **[3:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=232)** Oh, it looks like I have made a mistake here, my name cannot contain a space.
>
> **[3:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=236)** Let me go back up here and rename this to PurchaseOrders with no space in the name.
>
> **[4:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=240)** Then I can press OK, and that saves my dataset over here.
>
> **[4:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=245)** Now, I can add this to my report using the Table Wizard.
>
> **[4:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=248)** I'll go to the Insert tab and click Table, Table Wizard.
>
> **[4:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=252)** Then, we'll choose the PurchaseOrders dataset and press Next.
>
> **[4:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=257)** I'll drag a box around all of the available fields and drag them into the Values section and press Next.
>
> **[4:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=263)** Then I'll press Next again, and finally, Finish.
>
> **[4:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=266)** And that drops the table down into my report.
>
> **[4:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=269)** Now, I'll need to make the table much wider if I have any hope of seeing each record on a single line.
>
> **[4:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=274)** I'm going to proactively adjust some of these column widths just by guessing to see if I can get it kind of close.
>
> **[4:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=279)** I know that I'm going to need the order dates to be a little bit wider.
>
> **[4:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=282)** So let me go ahead and just drag that column and make it wider.
>
> **[4:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=285)** And also, the Description column is kind of long, so I'm going to make that wider as well by dragging the edge of the report, then selecting the table again, and dragging the right-hand side of the Description over to the right.
>
> **[4:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=296)** Okay, let's see how close we are.
>
> **[4:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=298)** I'll press the Run button over here to see my report with data populated from the database.
>
> **[5:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=304)** So that's actually looking pretty good, I actually got it all to line up, so that each row takes up just a single line.
>
> **[5:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=310)** So now, I can see that purchase order number 1, which represents these first three lines here, included three different products for these action figure packs.
>
> **[5:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=320)** Let's go and press the Save icon up here in the upper left-hand corner, and I'll save this report to my dashboard, and I'll call it Purchase Orders.
>
> **[5:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=328)** Then, I'll close Report Builder, and that'll return me back into my dashboard.
>
> **[5:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=333)** I'll refresh my browser, and there is our new paginated report.
>
> **[5:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=338)** And that's how you can pull data from multiple related tables in Report Builder.
>
> **[5:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/joining-data-tables?u=76281980&t=342)** When your database is well designed with proper foreign key relationships established, it makes the task much easier, because Report Builder will automatically detect those relationships and make the appropriate joins for you.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), interface (1), switch (1), finally, (1)
> **UI Navigation:** click on (3), select the (2), dropdown (1), toggle (1), go to (1)
> **CLI Commands:** make (5)
> **Env Vars:** sql (3)
> **Analogies:** just like (1)
> **Speakers:** - [adam] (1)

#### Format a report
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=0)** - [Instructor] Just like with any page layout program, you can modify the fonts size, color, and position of any elements in your reports design.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=9)** Let's clean up the Purchase Orders report to make it a little bit more presentable.
>
> **[0:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=13)** First, I'll hover over the report name.
>
> **[0:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=16)** That'll show me the little options button here.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=18)** Go ahead and click on that.
>
> **[0:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=19)** And then, we have the option to edit in Report Builder.
>
> **[0:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=22)** That'll open it up so that we can make some changes to it.
>
> **[0:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=25)** Next, I'm going to run the report so I can see it populated with data so I can identify some changes that I want to make.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=32)** Now, first off, I need to adjust the column widths a little bit more.
>
> **[0:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=35)** Now that I look at the date values, I realized that I actually don't need to see the times in this report.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=41)** Just the day the order was placed is enough information.
>
> **[0:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=43)** So we can simplify the formatting of our date data.
>
> **[0:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=46)** Then, I'd like to rename the column headers so that the text is clearer and realign them so they land on top of the data in the column below.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=55)** Next, I'd like to make the header row stand out a bit more by giving it a shaded background.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=60)** Finally, you'll see that this report actually doesn't even have a title right now, so I want to make sure that that shows up as well.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=66)** Okay, let's go ahead and go back into Design view and start making those changes.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=70)** First, let's tackle the formatting of the Date column.
>
> **[1:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=74)** Click the OrderDate placeholder text here.
>
> **[1:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=76)** And then, double-click it to highlight it.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=79)** That'll open up the Placeholder Properties where we can switch to the different formatting options.
>
> **[1:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=83)** I'll switch to Number, then click Date, and we'll see we have lots of different ways that we can format our dates.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=90)** You can use the standard month/day/year notation or include text for the day of the week or the month.
>
> **[1:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=96)** We can include time or not include time.
>
> **[1:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=98)** So there's lots of different ways that we can format our date-based data.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=102)** Also like this first one here that just has the month, day, and year.
>
> **[1:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=106)** Now, this same variety applies to other types of number data as well.
>
> **[1:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=110)** So if you're formatting currency columns, we could take a look at that and we have lots of options here.
>
> **[1:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=115)** We can include a number of decimal places, include a thousand separator and so on.
>
> **[1:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=119)** If we're working with percentages or scientific data, we have additional options for that type of data.
>
> **[2:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=125)** Let's go ahead and switch back to Date.
>
> **[2:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=126)** I'll make sure that the month year format is selected and press OK to change that format of our dates.
>
> **[2:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=131)** Another way that we can get to the same tool is to select the data, and then come up here in the ribbon and use the drop dead menu here to select a type.
>
> **[2:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=140)** Or click this little button here in the number formatting section, and that'll get us to the same Placeholder Properties.
>
> **[2:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=146)** So either one of those options or simply double-clicking on it will get to that same place.
>
> **[2:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=150)** Okay, let's press Cancel to get back out of that.
>
> **[2:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=153)** Next, let's turn our attention to the column headers.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=156)** I'm going to change the text that displays by double-clicking into each cell and retyping the text.
>
> **[2:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=162)** For Purchase Order ID, I'll change it to PO #.
>
> **[2:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=166)** Order Date, I'll leave the way it is.
>
> **[2:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=168)** Is Order Finalized, I'll change this to Completed.
>
> **[2:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=172)** For the Purchase Order Line ID, I'll change it to Line #.
>
> **[2:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=177)** For Stock Item ID, I'll change it to Item ID.
>
> **[3:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=181)** For Ordered Outers, I'll change that to Quantity.
>
> **[3:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=185)** And I'll leave Description as is.
>
> **[3:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=188)** Now I want to make a change that applies to all of the header rows.
>
> **[3:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=191)** I'll go ahead and press the Escape key to make sure I'm not selecting anything.
>
> **[3:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=194)** And then, click anywhere in the table.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=196)** That should highlight the table and show me these selector bars across the left hand side and the top.
>
> **[3:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=201)** Clicking any of these will select an entire region.
>
> **[3:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=204)** So I can select individual columns like this, or I can select an entire row by clicking on the selector bar on the left.
>
> **[3:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=211)** With the header row selected, I can make changes that'll apply to all of these cells at once.
>
> **[3:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=216)** First, I'll make sure that the text is all left aligned by coming up to the Paragraph group up here in the Home tab, and we'll left align all of that text.
>
> **[3:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=223)** Then, I'll give it a background color by coming over to the Border and clicking on the downward pointing arrow next to the paint bucket, and I'll choose this option here, Light Steel Blue.
>
> **[3:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=233)** That'll give it a nice blue shade in the background.
>
> **[3:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=236)** Go ahead and click off of the table to deselect it.
>
> **[3:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=239)** Finally, let's go ahead and adjust the title.
>
> **[4:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=242)** I'm going to highlight the text here and I'll change it to Purchase Orders.
>
> **[4:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=246)** Then, I'll press the Escape key to deselect the text, but select the actual bounding box of the text box.
>
> **[4:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=252)** We'll change its font from Seago UI Light to Seago UI and that'll just make it a little bit of a heavier font.
>
> **[4:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=259)** And then, I'll give this a background color as well.
>
> **[4:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=261)** Using the dropdown menu here, I'll change it to a gray color.
>
> **[4:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=265)** How about this one here called Light Gray?
>
> **[4:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=268)** Finally, I want this color to go all the way across the top of the report, so I'll drag the bounding box on the right hand side all the way to the edge of the page over here on the right.
>
> **[4:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=277)** Go ahead and press the Escape key to deselect everything so we can take a look.
>
> **[4:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=281)** Now, using the escape key while formatting your reports is actually a really helpful shortcut.
>
> **[4:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=286)** As you're clicking around to make formatting changes, you'll be making selections inside of different objects.
>
> **[4:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=293)** There is a hierarchy of items that you can work with.
>
> **[4:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=296)** For instance, if I select text in one of these header rows, I've selected the text.
>
> **[5:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=302)** Pressing the Escape key once moves up a level to select the parent cell of the table.
>
> **[5:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=308)** Pressing Escape again selects the table, and pressing escape one more time deselects everything.
>
> **[5:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=314)** You can also use the arrow keys on your keyboard to nudge things around.
>
> **[5:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=318)** If I click the text at the bottom here, oh, I double-clicked on it that opened up the properties.
>
> **[5:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=322)** Let me press the Cancel button.
>
> **[5:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=324)** Let me go ahead and just select that text there.
>
> **[5:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=327)** This is a simple calculation that displays the time and date stamp when the report is run.
>
> **[5:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=333)** Now with the text selected, I can press Escape to select the bounding box.
>
> **[5:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=337)** You'll know you have it selected when you see the little grab handles around the border.
>
> **[5:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=341)** Now you can press the right arrow key on your keyboard to move it over to the right corner of the report.
>
> **[5:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=347)** Now if you move it a little bit too far, it'll actually make the report wider.
>
> **[5:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=351)** So be careful as you approach that edge.
>
> **[5:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=354)** Okay, let's deselect everything and I'll run the report again to see our final changes, and I think that's looking pretty good.
>
> **[6:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=361)** I am noticing, though, that my column headers are not aligning a copy of the text to the column below, so I do want to fix that up.
>
> **[6:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=367)** So I'll go back into Design view.
>
> **[6:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=369)** I'll select the table, and then select this cell over here on the left hand side of our sample data row.
>
> **[6:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=375)** I'll make sure that all of that text is left aligned as well.
>
> **[6:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=377)** Let's go ahead and deselect it and I'll run the report again.
>
> **[6:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=380)** All right, that's looking a lot better.
>
> **[6:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=383)** Let's go ahead and save the report now.
>
> **[6:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=385)** And then, I'll close the Report Builder to return back into the portal.
>
> **[6:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=389)** Then, I can click on the Purchase Orders row here for the page needed reports to view it in the browser.
>
> **[6:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=395)** So there is my formatted purchase orders report.
>
> **[6:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-a-report?u=76281980&t=398)** By paying attention to the details of your report's design and taking care to accurately position and space different elements, you can make sure that the report presents data in a highly legible manner.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), finally, (3), switch (3), type. (1), this, (1)
> **CLI Commands:** make (15)
> **UI Navigation:** select the (5), click on (2), switch to (2), double-click (1), dropdown (1)
> **Definitions:** is a  (2)
> **Analogies:** just like (1), for instance (1)
> **Cross-References:** coming up (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Reviewing report properties
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=0)** - [Instructor] The ribbon interface in Report Builder gives you easy access to some of the most common formatting options.
>
> **[0:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=7)** However, there is another way to control the design of your report that gives you much more power and control.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=12)** Let's take a look at the Purchase Orders report again.
>
> **[0:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=15)** We'll click on the ellipsis button to get to the pop-up menu, and choose Edit in Report Builder.
>
> **[0:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=20)** Then I'll switch over to the View tab, and I'll turn on the Properties panel that'll appear over on the right-hand side of the screen.
>
> **[0:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=29)** Now, as you click around in the report, you'll need to pay attention to the selected object that's named in the top of the Properties sheet.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=37)** If you click on the text for the title, for example, you can change a number of the properties for this text.
>
> **[0:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=43)** Some of these properties are available over on the Home tab of the ribbon, but there's a lot of properties over here in the Properties panel that are not available in the ribbon.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=52)** Properties like SpaceAfter or SpaceBefore, or LineHeight are not easily modified using the tools in the ribbon, but you can get to those properties over here on the right.
>
> **[1:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=61)** If you press the Escape key, you'll move your selection to the title's text box.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=66)** It'll say ReportTitle here in the Properties sheet.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=69)** Here we have different properties for this element.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=73)** Let me scroll up here to the top and we'll see one for padding, for example.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=78)** This is the amount of space between the edges of the bounding box and the text inside.
>
> **[1:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=83)** If you scroll down to the bottom, you'll find some position properties.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=87)** Using these properties, you can dial in the exact size and location of elements on the page if you want to be very precise with your layouts.
>
> **[1:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=96)** If you click on the text in a data cell of a table, you'll get the properties for that.
>
> **[1:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=100)** Pressing Escape gives you access to the properties for the data column.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=104)** Pressing Escape again displays the properties for the entire table, or what Report Builder calls a tablets.
>
> **[1:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=112)** This is where we'll go later on in the course to affect things like page breaks and to create repeating headers across different pages.
>
> **[2:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=120)** So let's change a few things in this report that can only be modified in the Properties sheet.
>
> **[2:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=125)** Now, one thing I'd like to change is the padding of the values in the first column.
>
> **[2:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=129)** Right now, they're pressed up against the edge of the page on the left.
>
> **[2:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=133)** To fix this, I'll select the table and then select the entire column.
>
> **[2:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=137)** Then in the Properties sheet, I'll scroll up to the top and I'll find the Padding properties.
>
> **[2:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=142)** I can open that up, and I'll see individual properties for padding on the left, right, top, and bottom, and they're currently all set to two points of space.
>
> **[2:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=152)** If I change this to 10 points on the left instead, you'll see that it bumps the text over to the right, and I have a little bit more breathing room over on the left side of that text.
>
> **[2:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=163)** Another setting that I can change in the Properties sheet is to hide repeating values in the table.
>
> **[2:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=168)** If I run the data in the report, you'll see that each of these purchase order rows has a number of lines.
>
> **[2:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=174)** Purchase order number 1, for example, has three lines, and that purchase order number is repeated for each record.
>
> **[3:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=181)** I can hide these repeating values to clean up the display.
>
> **[3:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=184)** Let's go back into Design view.
>
> **[3:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=187)** I'll select the first column of the table again, and then in the Properties sheet, I'll scroll down to the bottom, and I have an option called HideDuplicates.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=196)** I'll click the cell to the right that gives me a little dropdown menu, and I'll choose PurchaseOrders.
>
> **[3:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=201)** That's the dataset that we're using for this particular table.
>
> **[3:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=205)** Now, if I click off of it and then run the report again, you'll see the difference.
>
> **[3:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=209)** Each purchase order number is only shown a single time every time it changes for the first record.
>
> **[3:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=215)** Now, let's go back into Design view.
>
> **[3:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=218)** Now, I want to add some grid lines to the table to make the records easier to read across the page.
>
> **[3:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=223)** In Design view, I'll select the data row for the table by clicking on the selector box on the left-hand side with the three lines, and then I'll select all of the data.
>
> **[3:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=231)** On the ribbon, we do have options to change the border thickness or its color or its style, if I want it to be a dotted line or a solid line or dashed line, for example.
>
> **[4:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=241)** But those will apply to all the edges around the border.
>
> **[4:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=244)** Over in the Properties sheet, I have finer control.
>
> **[4:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=247)** Let's go ahead and take a look at the Border styles over here.
>
> **[4:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=250)** I have BorderColor, BorderStyle, and BorderWidth.
>
> **[4:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=254)** And you'll notice that I can expand each of those to get individual access to each side.
>
> **[4:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=258)** So left, right, and top and bottom.
>
> **[4:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=261)** And I have the same for the BorderStyle and the BorderWidth.
>
> **[4:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=264)** So I can adjust each edge individually.
>
> **[4:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=267)** So let's change the bottom border.
>
> **[4:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=269)** I'll go ahead and click on this box here to change its bottom border color, and I'll change it to a light gray color.
>
> **[4:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=276)** For the bottom style, I'll change it to a solid line.
>
> **[4:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=280)** And for the BorderWidth, on the bottom, I'll change it to .5.
>
> **[4:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=283)** Well, let's just type that in.
>
> **[4:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=286)** Then we can make different changes for the right border.
>
> **[4:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=290)** On the right side, I'll change it to a light blue color.
>
> **[4:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=293)** Let's make it a dotted line instead of solid.
>
> **[4:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=296)** And finally, I'll make it the same width of .5.
>
> **[5:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=300)** One more time, I'll deselect the table, and I'll run the report to see the difference.
>
> **[5:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=304)** And now I can see grid lines around each of the cells.
>
> **[5:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=307)** I have a dashed blue line on the vertical columns, and I have a horizontal solid gray line for each row.
>
> **[5:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=314)** So as you can see, these changes give the report a slightly different look.
>
> **[5:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=318)** And there are examples of the kinds of things that you can only modify by digging into the wealth of options available in the Properties sheet.
>
> **[5:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/reviewing-report-properties?u=76281980&t=326)** Let's go ahead and save all of the changes that we've made to this report, and I'll close it down to return back into my original dashboard.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), interface (1), switch (1), this, (1), finally, (1)
> **UI Navigation:** click on (4), select the (4), scroll up (2), scroll down (2), dropdown (1)
> **CLI Commands:** make (4), find (2)
> **Analogies:** for example (4)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### View, print, and export a report
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/view-print-and-export-a-report?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/view-print-and-export-a-report?u=76281980&t=0)** - [Instructor] The report services web portal makes it really easy to export or print your reports.
>
> **[0:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/view-print-and-export-a-report?u=76281980&t=6)** First, you'll click on the report that you want to work with from the main page, I'll just choose the purchase orders report.
>
> **[0:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/view-print-and-export-a-report?u=76281980&t=11)** Then on the toolbar, you'll find the disk icon.
>
> **[0:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/view-print-and-export-a-report?u=76281980&t=14)** This menu will allow you to export your report to a number of different formats, including Word, Excel, PowerPoint, PDF, you can save it as a TIFF image, or an XML, or a CSV text file.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/view-print-and-export-a-report?u=76281980&t=28)** Now, there's a bunch of different options for saving this data in whatever format you might want.
>
> **[0:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/view-print-and-export-a-report?u=76281980&t=33)** I'm going to choose the PDF option.
>
> **[0:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/view-print-and-export-a-report?u=76281980&t=35)** Depending on how your web browser is configured, it might open directly in a new tab, or, if your browser is like mine, it'll open up a blank page for a moment, and then download the file once the report server gets done preparing it.
>
> **[0:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/view-print-and-export-a-report?u=76281980&t=48)** Now you can open up the PDF file in your default viewer application, and we can scroll through the different pages.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/view-print-and-export-a-report?u=76281980&t=56)** Okay, now this report does need some more work in the Report Builder design view to fit everything onto a single page.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/view-print-and-export-a-report?u=76281980&t=62)** You'll see as I scroll through here that lines are wrapping onto multiple different pages, so that's not quite ideal, but you get the idea.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/view-print-and-export-a-report?u=76281980&t=69)** Let's close this tab and return back to the portal.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/view-print-and-export-a-report?u=76281980&t=73)** The other option that we have is to press the print button.
>
> **[1:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/view-print-and-export-a-report?u=76281980&t=76)** Now, this will actually make a PDF file as well, but it'll give us some options for paper size and orientation first.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/view-print-and-export-a-report?u=76281980&t=84)** Let's try changing this to a landscape page and press print.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/view-print-and-export-a-report?u=76281980&t=88)** Then the PDF will open and attempt to print right through your browser's print function.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/view-print-and-export-a-report?u=76281980&t=93)** You can see that even in a landscape format, we're still not fitting all of the cells, or all of the rows, on a single page, so I had to scroll through here to find the description.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/view-print-and-export-a-report?u=76281980&t=102)** So again, not quite ideal, but we could fix this later on.
>
> **[1:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/view-print-and-export-a-report?u=76281980&t=105)** I'm going to press the cancel button just to make sure that I don't accidentally try and print 381 sheets of paper.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/view-print-and-export-a-report?u=76281980&t=111)** Okay, let's go ahead and close this print window there.
>
> **[1:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/view-print-and-export-a-report?u=76281980&t=115)** So those are the options that you have for printing or exporting your page-native reports from the reporting services web portal.
>
> **[2:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/view-print-and-export-a-report?u=76281980&t=122)** For reports that are intended to be printed or exported as PDF, the critical lesson here is that we need to make sure that the reports that we design in Report Builder take into consideration the page size that they'll be printed to.
>
> **[2:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/view-print-and-export-a-report?u=76281980&t=137)** There's only so many columns that you can fit across a physical piece of paper before you run right off the edge.

> [!info]- Semantic Content
>
> **Env Vars:** pdf (6), tiff (1), xml (1), csv (1)
> **CLI Commands:** make (3), find (2)
> **Code Keywords:** let (3), function (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)


### 3. Work with Data

#### Create a shared data source
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=0)** - [Instructor] Rather than embedding the data source connection information inside of each individual report, you can create shared data sources on the report server.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=9)** The reports can reference when it comes time for them to fetch data from a database.
>
> **[0:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=14)** This makes management of the data sources easier.
>
> **[0:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=16)** Since if a password changes or the location of the database moves, you only need to update the single shared data source definition.
>
> **[0:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=25)** Rather than modify every report that accesses that particular database.
>
> **[0:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=29)** You'll create a shared data source from the web portal.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=32)** Just come up to the new button and choose data source from the Pop-up menu.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=37)** This will open up a new data source page where you can fill in the connection details.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=41)** We'll start with the name.
>
> **[0:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=42)** I'll call mine Wide World Importers.
>
> **[0:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=45)** We can also add in a description.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=47)** I'll add one here.
>
> **[0:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=49)** Make sure you leave this box checked that says Enable this data source.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=52)** That way we can use it in our reports, and we'll scroll down to the connection details.
>
> **[0:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=57)** This is the type of connection that we want to make, whether it's to a SQL Server instance or Oracle, or some other type of database server.
>
> **[1:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=64)** I'll leave mine to Microsoft SQL Server.
>
> **[1:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=67)** That brings us to the connection string.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=70)** Now, unlike creating an embedded data source in Report Builder, there is no option to help us build a valid connection string, so we're kind of left on our own to fill this in.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=82)** One option is to go through the Report Builder and copy the connection string out of an embedded data source, and then paste it in here.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=90)** But they're really not all that complicated to type out manually, if you're connecting to SQL Server.
>
> **[1:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=95)** Typically all you need is data source equals, followed by the name of the computer and the instance of SQL Server that you want to connect to.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=104)** I'll type in my computer name and if you are on a named instance, you would type backslash, followed by the instance name.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=111)** I'm using a default instance on this machine, so I actually don't need this part of the connection string.
>
> **[1:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=117)** So after you type in your computer name and instance name, if you need it, type in a semicolon followed by initial catalog equals.
>
> **[2:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=125)** Then you would have the name of the database that you want to connect to.
>
> **[2:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=129)** In our case, that's the Wide World Importers database.
>
> **[2:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=132)** And that is our completed connection strength.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=135)** Let's scroll down to the credentials section.
>
> **[2:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=138)** What you choose here will depend on the security configuration of your server.
>
> **[2:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=143)** Choosing as the user viewing the report is the most secure option since it'll pass the credentials of the current reporting services portal user to the database server for authentication to make sure that they are in fact allowed to view the information they're trying to access in the report.
>
> **[2:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=160)** This does require specific infrastructure to be in place though, and you can click on the Learn More link to evaluate whether your setup meets these requirements.
>
> **[2:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=170)** Another option is to use the following credentials.
>
> **[2:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=173)** Then you would hard-code a fixed username and password into the connection.
>
> **[2:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=178)** Doing this will mean that everyone that accesses reports built off of this shared data source will be granted exactly the same permission level to view the information.
>
> **[3:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=189)** You can also choose the option to prompt the user for a username and password.
>
> **[3:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=194)** With this option, you can choose to accept either a Windows username and password or to use SQL Server authentication username and passwords.
>
> **[3:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=203)** And finally, you can choose the option to not provide any credentials at all.
>
> **[3:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=207)** Which is useful for connections to data sources that aren't secured.
>
> **[3:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=211)** I'm going to stick with the option to use the as user viewing the report option at the very top.
>
> **[3:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=220)** Since my Windows account is listed as the administrator for the SQL Server instance, I'll definitely be granted access to anything on it.
>
> **[3:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=228)** But keep in mind that individual users will need to have the proper permissions as well, to read the data from the server if they want to access the same reports that you are building.
>
> **[3:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=238)** Let's scroll down on this page and I'll click the test connection button.
>
> **[4:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=242)** If you see the message that it was connected successfully, then you're good to go.
>
> **[4:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=245)** Go ahead and press the Create button to save that data source to the portal.
>
> **[4:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=249)** Now we can use this connection for any new reports that we built, and they'll all be given the same access to the Wide World Importers database.
>
> **[4:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=258)** We can even modify existing reports and point them to the shared data source rather than the embedded data source that we previously set them up with.
>
> **[4:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=267)** To do that, we'll open up a report in the Report Builder.
>
> **[4:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=270)** I'll choose the purchase orders report, click the more info button, and then edit in Report Builder.
>
> **[4:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=276)** Then you'll open up the data sources folder and double click on the data source to edit its properties.
>
> **[4:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=282)** I'll change it from using a connection embedded in the report to use the shared connection.
>
> **[4:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=287)** Then I'll click the browse button, which will go out to my report server, and find all of our shared connections.
>
> **[4:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=293)** And here's the one that we just created.
>
> **[4:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=295)** I'll select it and press open, and that puts it into the reports definition.
>
> **[5:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=300)** If you want, you can test the connection to make sure that it works, and it does.
>
> **[5:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=303)** So we'll say okay, and we'll say okay again.
>
> **[5:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=306)** And now you'll notice that the data sources icon has changed.
>
> **[5:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=310)** We now have a little shortcut arrow to indicate that this is now using the shared data source rather than the embedded one.
>
> **[5:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=317)** I'll go ahead and save the changes to the report definition, and we can close the Report Builder.
>
> **[5:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=322)** That'll return us back to our portal where we have access to the page native report, and I can click on it to load the data just as we had previously.
>
> **[5:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-data-source?u=76281980&t=330)** So now this report is using the shared data source rather than storing the data connection information within its own report definition.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1), pass (1), require (1), finally, (1)
> **Env Vars:** sql (6)
> **UI Navigation:** scroll down (3), click on (3)
> **CLI Commands:** make (4), find (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Create a shared dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=0)** - [Instructor] Just like a shared data source can be referenced by a number of different reports to connect them all to the same database, a shared dataset can be used to query the same data from a database.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=12)** Shared datasets make management of the underlying queries easier, since again, they create a single reference that needs to be updated if the structure of the database changes, rather than updating the dataset in each and every individual report.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=27)** The process of creating a shared dataset starts the same in the portal.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=32)** You go to the new menu and choose dataset, however, you'll immediately notice a difference.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=37)** We're passed into the report builder instead this time.
>
> **[0:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=40)** That starts up the new report or dataset wizard.
>
> **[0:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=44)** Shared datasets must be created off of a shared data source, so I'll use the one that we've created in the prior movie that connects to the Wide World Importers database.
>
> **[0:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=54)** This is the one that we saved onto the server.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=56)** I'll select it and then press the create button down on the bottom.
>
> **[0:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=59)** That brings us back into a query design window.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=62)** We can drill into the database and query out the records that we want to make available to any reports that use this dataset.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=69)** I'd like to build a shared dataset that gathers information about the stock items available in our warehouse.
>
> **[1:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=76)** This data is stored across a number of related tables.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=79)** We'll go into the warehouse schema, and then expand the tables folder.
>
> **[1:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=83)** We'll start with the stock items table.
>
> **[1:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=86)** I'll expand that open.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=87)** I'll grab the stock item ID, stock item name, and the recommended retail price columns.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=94)** Placing a check in each of these will move them over into the selected fields area.
>
> **[1:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=99)** Then I can collapse the stock items table.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=102)** Next up is the stock items holdings table.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=104)** I'll expand that open.
>
> **[1:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=106)** Here I'll choose the quantity on hand and the reorder level columns, and then I'll minimize that table.
>
> **[1:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=113)** Next, I'll open up the stock items, stock groups columns, and I'll grab the stock item, stock group ID column.
>
> **[2:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=121)** Then we'll collapse that table.
>
> **[2:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=123)** Then I'll go up and grab the stock groups table and get the stock group name.
>
> **[2:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=127)** I'll turn that on, and finally we'll go into the colors table and grab the color name column, so all of those columns will get added over here into these selected fields.
>
> **[2:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=138)** If you want to check the relationships, we can open up that shutter button here, and we'll see that all of these tables have been related together correctly using the auto detect feature, and we can see the join fields between the different tables.
>
> **[2:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=150)** Then I'll press the run query button to see the data that's coming out of my database from across all of those related tables.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=156)** When you're happy with the query results that you're getting, go up to the top and click on the disk icon to save the shared dataset to the report server.
>
> **[2:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=164)** I'll call it Warehouse Stock.
>
> **[2:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=167)** Then we can close the report builder and that'll return us back into the portal.
>
> **[2:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=173)** I'll refresh my browser, and now we can see we have a shared dataset for warehouse stock items.
>
> **[2:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=179)** You can even click on it to view the raw data from the portal.
>
> **[3:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=183)** I'll go over here from the properties tab and switch into data preview, and then load data to pull the data from the database server.
>
> **[3:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=191)** So shared datasets are less commonly used than shared data sources, since it's common for different reports to require different data, but here and there, you'll find it useful to pull the exact same data from a database and feed it into different report layouts that are optimized for different uses.
>
> **[3:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-shared-dataset?u=76281980&t=209)** So if you create one version of a report optimized for viewing on screen, and then another version that's optimized for printing on paper, then tying them both to a common shared dataset will make management and updates easier.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (1)
> **UI Navigation:** click on (2), go to (1)
> **Code Keywords:** switch (1), require (1)
> **Analogies:** just like (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Filtering data
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=0)** - [Instructor] The reports that we ran so far have displayed all of the records returned by the dataset query.
>
> **[0:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=6)** You can add a filter to a shared dataset in order to limit the data that's displayed in the report.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=12)** This is useful for when you want to display two different views of your data, say a table and a chart, but you want each of them to show filtered subsets of that full dataset.
>
> **[0:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=24)** Let's take a look by creating a new paginated report.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=28)** I'll choose the option to start with a blank report.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=30)** Now, for this example, I'm going to use the shared dataset called Warehouse Stock that we created in a prior movie.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=37)** Because it's saved to the server, I can actually skip over the steps taken previously to create a data source and then a dataset.
>
> **[0:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=45)** We could jump right into adding in the table.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=47)** I'll go to the Insert tab, click the Table button, and then choose Table Wizard.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=52)** Here, we can choose the stored dataset that's saved on our server.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=56)** Now, if you're not seeing it here, click on the Browse button.
>
> **[0:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=58)** That will show you all of the datasets stored on your server, and you should be able to select it there and press Open.
>
> **[1:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=64)** With it selected, press the Next button.
>
> **[1:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=67)** That takes us to the area where we can move the fields from the Available fields, these are the different columns from the dataset, and arrange them into our table's design.
>
> **[1:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=76)** I'll hold down the Control key to select multiple fields at once.
>
> **[1:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=80)** I'll select the StockItemID, the StockItemName, the StockGroupName, and the ColorName columns.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=87)** Then I'll drag all four into the Values section.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=90)** With all four of them moved over, I can press Next, Next again, and then Finish to add the table into the report's design.
>
> **[1:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=97)** Now, I'll make this table a little bit wider.
>
> **[1:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=99)** I'll just drag it over to the right-hand side of the report's page area.
>
> **[1:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=103)** And I want the labels as well as the data to all be left-aligned.
>
> **[1:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=107)** So I'll select a field, then I'll select one of the row selectors over here on the left, hold down the Control key, and select the other one.
>
> **[1:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=115)** With both of these selected, I'll click on the Left-Align button here in the Paragraph group, and that'll left-align all of the data as well as the column labels.
>
> **[2:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=123)** Okay, I'll deselect everything, and we'll run the report to take a look.
>
> **[2:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=127)** So here are all of the records that the dataset query is pulling from the WideWorldImporters database.
>
> **[2:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=132)** We can now filter this down to just a specific color.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=135)** Let's say that I only wanted this report to display details about the yellow products.
>
> **[2:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=140)** Let's go back into Design view, then I'll expand the Datasets folder.
>
> **[2:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=145)** Here is the link to our shared dataset, WarehouseStock, and I can double-click on it to get to its properties.
>
> **[2:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=152)** Now, we're not going to modify the query that pulls the data from the WideWorldImporters database.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=156)** That will stay exactly as it is right now.
>
> **[2:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=159)** But I will switch over to the Filters page, and here is where we can limit the records displayed in the report.
>
> **[2:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=166)** I'll press the Add button to create a new filter, and we just need to fill in these various fields.
>
> **[2:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=170)** For the Expression, we can choose from the various columns being returned by the query.
>
> **[2:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=175)** I'll choose the ColorName column.
>
> **[2:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=178)** For the Operator, we have various comparison operators to choose from: equals, not equals to, like, less than, greater than, and so on.
>
> **[3:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=187)** I'll choose equals and, in the Value, Yellow.
>
> **[3:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=190)** So we're creating a filter that will only return rows where the ColorName field is equal to the text Yellow.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=196)** I'll press OK, and that will update the dataset.
>
> **[3:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=200)** Now, if I run the report again, you'll see the difference.
>
> **[3:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=202)** We're only seeing products that are the yellow color.
>
> **[3:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=206)** So adding a filter at the dataset level affects the data available to the report.
>
> **[3:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=212)** Every data region object added into the report, like this table region, will be limited by the dataset filter.
>
> **[3:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=219)** As an alternative, we can also apply filters to each individual data region object directly.
>
> **[3:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=225)** Let's take a look at what that looks like by going back into Design view.
>
> **[3:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=229)** First, we'll remove the filter on the dataset.
>
> **[3:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=231)** I'll just double-click on WarehouseStock to open its properties.
>
> **[3:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=234)** Go to Filters, select the filter, and then click the Delete button, then we can say OK.
>
> **[4:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=240)** Then I can select the table itself.
>
> **[4:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=242)** I'll press the Escape key a couple of times until I see the Properties window say Tablix.
>
> **[4:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=247)** That tells me that the table is selected and not any of the individual cells or columns within that table.
>
> **[4:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=253)** So with the whole Tablix selected, we can find the Filters property.
>
> **[4:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=257)** Click on the ellipses button over on the right, and we can apply a filter.
>
> **[4:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=261)** Once again, I'll click the Add button, the Expression, we'll choose ColorName again, leave the operator as equals, and the value Yellow.
>
> **[4:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=269)** Press OK, and we'll run the report again.
>
> **[4:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=272)** We can see it looks identical to what we saw a moment ago.
>
> **[4:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=275)** Here's the difference.
>
> **[4:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=276)** Because the filter is applied to the table and not at the dataset level, we can add additional tables with different filters.
>
> **[4:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=285)** To see that, we'll go back into Design view, then I'll click here at the top to add in a title, and I'll call it Yellow Products.
>
> **[4:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=292)** Then I'll click off to deselect it.
>
> **[4:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=294)** I'll select the table and press Escape a couple of times to select the actual table and not a cell within it, then Shift + click the title up above to select that.
>
> **[5:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=303)** Then I'll just press Control + C to copy both of those, deselect everything by clicking off of it, and then Control + V to paste in the copy.
>
> **[5:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=312)** With the copied elements still selected, I'll use the arrow keys on my keyboard to nudge them down a little bit on the page.
>
> **[5:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=318)** Then I'll deselect everything and rename the second group Red Products.
>
> **[5:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=323)** Then finally I'll select the second table and press Escape a couple of times until I see Tablix2 over here in the Properties, and we'll find the Filter property for that.
>
> **[5:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=333)** I'll click the ellipses button over on the right, and we'll change the filter.
>
> **[5:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=338)** Instead of the value Yellow, we'll change it to Red, and press OK.
>
> **[5:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=342)** Now, I can deselect everything by clicking anywhere in the blank area of our report designer and run the report one more time.
>
> **[5:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=348)** So now we have two different tables displayed on the report.
>
> **[5:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=352)** The report's shared dataset is returning all records because it doesn't have any filters.
>
> **[5:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=357)** And this means that it's querying the database a single time to retrieve all records.
>
> **[6:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=361)** Then each of our table objects in the report has its own unique filter applied to it to reduce the full dataset to just a specific color segment.
>
> **[6:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/filtering-data?u=76281980&t=371)** So that's two different ways that you can incorporate filters into your reports: either at the dataset level to affect the entire report or at the data object level to affect individual objects separately.

> [!info]- Semantic Content
>
> **UI Navigation:** select the (7), click on (3), go to (2), double-click (2)
> **Code Keywords:** let (4), switch (1), from: (1), delete (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Grouping data in a report
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=0)** - [Instructor] Grouping records in a table allows you to organize information based on common attribute values.
>
> **[0:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=6)** Let's take a look at how we can apply groups to a report by going to the New menu and choosing Paginated Report.
>
> **[0:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=13)** This time, I'll streamline the process a bit and use the Table or Matrix Wizard instead of starting with a blank report.
>
> **[0:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=19)** That'll move me right into the Table Wizard that we've seen a number of times already.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=23)** Step one is to choose the dataset.
>
> **[0:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=26)** I'll use the Warehouse Stock shared dataset that's saved to the ReportServer, and then press the Next button, and that brings us back to a screen we've seen a couple of times now.
>
> **[0:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=35)** Now, for all of the tables that we've created so far, we've been entirely focused on just the Values box.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=41)** We can use the other two boxes, Row groups and Column groups, and these will lump records together based on shared values.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=50)** Let's take the StockItemName field, and drag and drop it into Values.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=55)** Now, each item in our warehouse inventory is categorized based on the product type.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=60)** Some of these stock items may be clothing items and some may be novelty toys.
>
> **[1:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=65)** The categories are stored in a field called StockGroupName.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=70)** I'll click and drag that out and place it in the Rows group box.
>
> **[1:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=75)** Go ahead and press the Next button.
>
> **[1:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=77)** Now, because we placed something in a grouping box on the previous screen, options on this screen are now available to us where previously, all of these options were always grayed out.
>
> **[1:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=86)** Here, we get to choose the type of layout that we want to apply to the grouped records.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=90)** You can click through the options and take a look at the sample table to get a feel for how things will be arranged on the report.
>
> **[1:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=97)** I'll choose the option that says Stepped with subtotal above.
>
> **[1:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=101)** That'll place the StockGroupName on one row, and then within that group, we'll have all of our individual stock items below.
>
> **[1:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=110)** I'll also leave this checkbox on that says, Expand/collapse groups.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=114)** This will add a bit of interactivity to our final table.
>
> **[1:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=118)** Okay, go ahead and press the Next button and then Finish to add the table into the design of the report.
>
> **[2:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=123)** Then, we can finalize everything.
>
> **[2:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=124)** I'm just going to make that table a little bit wider.
>
> **[2:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=127)** I'll readjust the column widths.
>
> **[2:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=129)** I don't need so much room for the Stock Group Name, but I'll give my Stock Item Name a little bit more room by dragging that to the right.
>
> **[2:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=136)** Then, I want to make sure that my labels for the column headers are left-aligned, so I'll select that entire row by clicking on the selector box over on the left and left aligning all of that text.
>
> **[2:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=147)** Okay, I'll deselect everything and then run the report.
>
> **[2:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=150)** So, this gives us a very compact view of the data.
>
> **[2:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=154)** On the left, we have each category of item that we carry in the warehouse.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=158)** You can click the plus button to the left of each category name to dig into the individual products within.
>
> **[2:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=164)** So, here are all of our clothing items.
>
> **[2:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=166)** Here are all of our computing novelties and so on.
>
> **[2:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=171)** Let's go back into Design view and I'll add a title to this report.
>
> **[2:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=174)** I'll call it Stock Items by Group.
>
> **[2:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=177)** Then, I'll press the Escape key a couple of times to deselect everything, and we'll save this report to the server.
>
> **[3:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=183)** Once again, I'll call it Stock Items by Group.
>
> **[3:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=186)** Now, we can close the report builder and return back into the portal.
>
> **[3:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=191)** I'll refresh my browser to see the new paginated report.
>
> **[3:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=195)** Now, I can select it here and that'll load the report right inside of my browser, and you'll see we have the exact same interactivity.
>
> **[3:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=201)** Once again, here's our computing novelties.
>
> **[3:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=204)** I can scroll through that list to see all of those.
>
> **[3:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=206)** I can collapse the group and I can take a look at all of our furry footwear.
>
> **[3:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=211)** So, by grouping records together by common attributes, you can organize the presentation of the data and allow end users to go right to the information that's most valuable to them.
>
> **[3:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/grouping-data-in-a-report?u=76281980&t=222)** Further, by creating a cleaner initial view with the collapsible categories, you can keep your users from being hit with too much information all at once.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), type. (1)
> **CLI Commands:** make (2)
> **UI Navigation:** drag and drop (1), checkbox (1)
> **Speakers:** - [instructor] (1)

#### Understand matrixes
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=0)** - [Instructor] The report builder interface seems to indicate that there are two different data region elements called tables and matrixes.
>
> **[0:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=8)** The reality is, is that they're actually the same thing with only one minor difference in their configuration.
>
> **[0:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=14)** Once again, I'm going to create a new paginated report in Report Builder.
>
> **[0:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=19)** I'll choose to use the table or matrix Wizard.
>
> **[0:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=22)** I'll select the warehouse stock shared dataset, and press Next and that returns us to this familiar screen.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=28)** Here we have the values box, row groups, and column groups.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=32)** Now this is what differentiates a table from a matrix, a table includes values and optionally a row group.
>
> **[0:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=40)** As soon as you add column groups, you've created a matrix and that's it, that's the only difference between the two.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=47)** If you have a column group, it's a matrix.
>
> **[0:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=49)** If you don't, it's a table.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=52)** Column groups work the same way as row groups and will grow the matrix horizontally to fit the data where the row groups expands the table vertically.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=62)** So let's build a matrix that looks at two different product categories.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=66)** I'll take the stock item name field, and drag and drop it into values.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=71)** Then I'll take stock group name and drag and drop it into row groups.
>
> **[1:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=76)** This would give us the same grouped table that we saw in the previous movie.
>
> **[1:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=81)** This time I'll take color, name and drag and drop it into column groups.
>
> **[1:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=86)** Now, if you press the Next button, you'll get this information message that says, if one or more column groups is specified, which we have, all fields in the values field list must have an aggregate function specified.
>
> **[1:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=100)** Okay, let's press the okay button to that.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=102)** In order for a matrix to work, we need to perform some function on the data that appears in the values box.
>
> **[1:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=109)** These aggregates can be a function like count.
>
> **[1:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=112)** So we'll count up the number of items at the intersection of a specific color and group name, or we can sum up the values if we were working with numeric data in the values box, or find the average.
>
> **[2:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=125)** If you've worked with pivot tables in Excel or cross tab queries in an access database, then this concept might be familiar.
>
> **[2:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=132)** So even though I'm placing the stock item name in the values box, we won't actually see any names in the final matrix.
>
> **[2:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=140)** We'll only be able to see the results of an aggregate calculation.
>
> **[2:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=144)** You can see the list of aggregate calculations by clicking the down arrow to the right hand side of stock item name in the values box.
>
> **[2:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=151)** If you've worked with aggregate functions in transact-SQL queries, then these are all going to look familiar to you.
>
> **[2:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=157)** Since we're dealing with text values, the only one that really applies is going to be count or count distinct, and I'll just choose count.
>
> **[2:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=165)** That'll apply the count function to our stock item name data.
>
> **[2:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=170)** Now, I can press the next button and it lets me through.
>
> **[2:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=173)** We'll leave the default option on this screen to show subtotals and grand totals and press Next, and then finish.
>
> **[3:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=181)** Now, on my computer, every time I run through this, it actually minimizes the report builder at this step, so I'm not exactly sure why that is.
>
> **[3:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=187)** I'm just going to go ahead and re-expand it on my screen.
>
> **[3:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=190)** Here is our matrix that was just added into the reports design, and I'll make it wider to fill up the whole page.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=196)** Then I'm going to adjust the column width.
>
> **[3:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=198)** I'll select this top one here and take the column for the color name and make it a lot narrower, and I'll give some more room to the total over here on the right.
>
> **[3:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=206)** The color name column is going to get duplicated for each product color that gets returned from the warehouse inventory.
>
> **[3:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=213)** So this matrix is going to get pretty wide pretty quickly.
>
> **[3:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=216)** Also, notice that there's a slightly different notation in the selection boxes of the matrix.
>
> **[3:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=222)** The columns and rows that'll get duplicated to fit our data will have brackets in them.
>
> **[3:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=227)** For instance, here's a bracket here at the top of the color name column, and here is a bracket on the left side of the stock group name row.
>
> **[3:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=234)** In a data table, the row that gets repeated was noted with three lines instead.
>
> **[4:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=241)** So let's go ahead and select all of the rows in this table.
>
> **[4:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=242)** I'm going to go ahead and select this first one, and then just drag down to select all of the rows in the table, and I'm going to make sure that everything appears left a aligned.
>
> **[4:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=251)** Let's also give this report a title.
>
> **[4:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=253)** I'll click at the top and give it a name, warehouse matrix.
>
> **[4:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=258)** Then I'll deselect it.
>
> **[4:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=259)** I'll click the save icon on the upper left, and I'll save this as warehouse matrix to the report server.
>
> **[4:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=266)** And then finally, I'll run the report to see it with data.
>
> **[4:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=269)** So this is how a matrix presents information.
>
> **[4:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=272)** You can read across or down to get insight into the different categories.
>
> **[4:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=277)** And there are summary totals at the bottom and the right side.
>
> **[4:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=280)** So for instance, it's easy to see that there are 130 black products, and you can see the breakdown of each one.
>
> **[4:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=287)** Within the clothing group, we have 42 black products computing novelties.
>
> **[4:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=291)** We have 35 black products.
>
> **[4:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=293)** You can also read it the other direction.
>
> **[4:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=295)** For instance, furry footwear.
>
> **[4:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=297)** We have four black products, four gray products for a total of eight products, and that's a matrix.
>
> **[5:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=304)** It allows you to get aggregate information at the intersection of multiple categories.
>
> **[5:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=309)** The formatting and properties of a matrix are exactly the same as those found in a table.
>
> **[5:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/understand-matrixes?u=76281980&t=314)** The only difference is the inclusion of a column group.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (4), interface (1), this, (1), finally, (1)
> **CLI Commands:** make (3), find (1)
> **Analogies:** for instance (3)
> **UI Navigation:** select the (1), drag and drop (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Use aggregate functions
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=0)** - [Instructor] The SQL aggregate functions that we saw when working with the matrix can also be applied in other areas of your reports, functions like count, sum, average, and so on, and in fact, the entire suite of TSQL Query functions can be used to provide useful summaries that'll help readers of your reports get more context about the range and size of the dataset that they're reviewing.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=23)** I want to modify the table that we built into the Stock Items by Group report.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=28)** Just as a reminder, this is what it currently looks like, and we have these collapsible regions on the left where we can drill into the individual items within each group category.
>
> **[0:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=38)** Okay, I'll go back to the homepage of the portal, then I'll hover my mouse over the Stock Items by Group report, click the more info button, and then choose the option to edit the report in Report Builder.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=50)** If you select the table, we can kind of get a feel for how it's constructed.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=55)** We have a column that'll display the individual stock group names.
>
> **[0:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=59)** This row will expand and collapse when the user clicks on the plus icon, as noted by the presence of the parentheses bracket in the selection boxes on the left.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=69)** Inside of the group, we'll display the stock item name in column number two.
>
> **[1:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=74)** These data rows will be repeated for every record in the dataset, as noted by the three lines in this row's selection box.
>
> **[1:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=83)** Also, notice that when a group name is collapsed, nothing will appear in column number two, since this cell is empty, and likewise when the group is expanded, nothing will appear next to each item name in the first column, because this cell is empty, We can populate these empty cells with information if it makes sense to do so.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=102)** One way would be to get a count of how many products appear in each group, and we can place the result of that calculation in the first cell of the second column.
>
> **[1:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=112)** To do that, we'll click in the cell and make sure that the text box is selected over here in the properties.
>
> **[1:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=118)** If you double click in the cell, it'll say selected text instead, so press the escape key until you see text box there.
>
> **[2:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=126)** Next, we need to find a property called Value.
>
> **[2:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=129)** Now, one odd quirk about Report Builder is that the property isn't actually visible by default, but if you click on this button in the property sheet to open up the property pages, you can find the value property right there.
>
> **[2:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=143)** The value property will control what this box displays when we run the report.
>
> **[2:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=148)** Using the dropdown menu, you can make a selection of a field from the dataset.
>
> **[2:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=154)** I'll choose stock item ID and press OK.
>
> **[2:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=159)** Now, if you deselect the cell and select the text instead, you'll find the value property over here in the property sheet.
>
> **[2:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=166)** This shows that we're connected to the stock item ID value from the field section.
>
> **[2:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=172)** So what happens when we run this report now?
>
> **[2:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=174)** Let's go ahead and run it and take a look at the data.
>
> **[2:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=178)** Now we have a number on the row when the groups are collapsed, and it doesn't change when we expand a row.
>
> **[3:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=184)** So what are these numbers representing?
>
> **[3:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=187)** Well, they're not the count of how many products are in each group, and you can see that by expanding furry footwear and see that there's clearly not 126 total products.
>
> **[3:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=195)** There's only eight.
>
> **[3:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=197)** These numbers are simply the first ID number of the first product that appears in the group.
>
> **[3:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=202)** So the gray plush shark slippers in the small size are stock item ID number 126.
>
> **[3:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=210)** So this information isn't all that useful right now, but we can fix that back into design view.
>
> **[3:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=215)** Instead of just displaying the stock item ID, I want to process it through a function.
>
> **[3:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=220)** I want to count up how many unique IDs appear in each group.
>
> **[3:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=225)** To do that, I will select the text and find the value property in the properties sheet.
>
> **[3:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=231)** You can either use the dropout menu here to the right and choose expression, or go back into the property pages and click the function button over on the right hand side of the property value.
>
> **[4:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=243)** Either way, that'll take you to this expression builder interface.
>
> **[4:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=247)** On the top of this window, we have an expression that'll calculate a value to display in the table, and right now it just says the value will be equal to whatever the value of the stock item ID field is.
>
> **[4:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=257)** And since we're only displaying a single record for each product group, it's only displaying the first value.
>
> **[4:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=263)** The bottom of the window will help you explore all of the built-in functions that SQL server ships with, as well as any other query elements that we can incorporate into the expression above.
>
> **[4:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=273)** Expand the common functions list and we have a number of categories.
>
> **[4:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=278)** These are just like the formula books that you might have used in Microsoft Excel spreadsheets.
>
> **[4:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=283)** Inside of the aggregate functions, you'll see all the different aggregate functions from Transact-SQL.
>
> **[4:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=289)** Selecting one will give you a description and a number of examples of how to use it on the right.
>
> **[4:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=295)** The one that I want is count.
>
> **[4:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=297)** It says it returns a count of the values from the specified expression.
>
> **[5:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=301)** To use it, I'll place my cursor right after the equal sign in the expression up above.
>
> **[5:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=306)** Then I'll double click on the count item, and that'll add the text up there into the expression.
>
> **[5:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=311)** It'll say Count and an opening parentheses.
>
> **[5:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=314)** All I need to do is come to the very end and close the parentheses.
>
> **[5:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=318)** Now, instead of just displaying the ID number, we'll count up all of the ID numbers, and because we're placing this calculation on the same row as the group name, the calculation will only apply to the stock items that appear in each group.
>
> **[5:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=333)** Let's press the OK button and then press OK again, and you'll see that the value updates over here, and we can see the new counting function is being applied.
>
> **[5:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=342)** Now we can run the report to see the difference.
>
> **[5:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=345)** These numbers are now correctly counting up the number of products in each category.
>
> **[5:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=349)** So for clothing, we have a total of 58 products, and for our furry footwear, we have a total of eight products.
>
> **[5:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=356)** So now the report is automatically counting the number of records in each group, the only enhancement that I might want to make is to move this value into its own column.
>
> **[6:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=365)** Right now it's appearing under the stock item name header, and it might not be really clear what this number represents.
>
> **[6:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=372)** Let's go back into design view and add a new column specifically for that new data.
>
> **[6:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=377)** I'll select the table, then right click in the gray box at the top and choose insert column to the left.
>
> **[6:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=383)** That'll add in a new empty column to the left side of the stock item name.
>
> **[6:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=388)** Then in the header row, I'll double click to add in the text Count, then I'll come down to the cell right below it.
>
> **[6:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=395)** Once you get used to the format of functions in the Report Builder, you can just type them directly into the cell without going through the property pages and the expression builder interface.
>
> **[6:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=404)** So what we can do is just type in the function that we see immediately to the right.
>
> **[6:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=408)** Let me make this just a little bit wider here, and I'll double click there to add in a new text field, and we'll just type it in.
>
> **[6:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=415)** Open bracket Count, open parentheses, StockItemID, closing parentheses, and a closing square bracket.
>
> **[7:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=424)** Then I'll select off of it to deselect it.
>
> **[7:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=427)** I'll click the cell again and make sure that it appears left aligned.
>
> **[7:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=431)** Then we'll delete the same function that appears in the other column.
>
> **[7:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=435)** I'll just double click to select the text and get rid of it.
>
> **[7:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=438)** Then we can run the report to see the difference, and here we have the count of our products.
>
> **[7:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=443)** Now it looks like I didn't actually left align everything.
>
> **[7:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=444)** So let me go back into the designer.
>
> **[7:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=446)** I'll select the field, press the escape key to select the cell itself and left align that.
>
> **[7:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=452)** Okay, let's deselect everything and run it again, and now the number up here is left aligned, like I wanted underneath the counting header.
>
> **[7:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=459)** So now we have a count that's easy to read for each of our product groups, and I can expand them to see these stock items within each one.
>
> **[7:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=465)** So now the presentation is a little bit more clear about what those values are, and this is just one application of the counting function.
>
> **[7:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/use-aggregate-functions?u=76281980&t=473)** As you saw in the expression builder, all of the functions available in the Transact-SQL language are available for you to modify, aggregate, and present your data in whatever format you need.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (6), interface (2), default, (1), delete (1)
> **UI Navigation:** select the (7), click on (2), dropdown (1)
> **CLI Commands:** make (5), find (4)
> **Env Vars:** sql (4), tsql (1)
> **Cross-References:** go back to (1), as you saw (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 4. Build Interactive Reports

#### Convert filters into parameters
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=0)** - [Instructor] When I created the report that took a look at the warehouse products by color, I included two tables: one to display yellow products and one to display red products.
>
> **[0:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=10)** The idea being is that if someone was only interested in products of a specific color, they could simply jump to that point in the report and quickly find what they're after.
>
> **[0:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=21)** But if you have a large number of categories, then building a report like that with duplicate tables that simply differ in the filter that's being applied, it would be a nightmare to maintain.
>
> **[0:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=31)** We could make the experience better by simply asking the user what category they wanted to see and then dynamically updating the report to show just the requested information.
>
> **[0:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=42)** We do this by adding parameters to a filter.
>
> **[0:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=46)** Let's explore the concept of parameterized filters by making a new report.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=50)** I'll choose to use the Table or Matrix Wizard, but this time, I'm not going to use the shared dataset.
>
> **[0:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=57)** I'm going to come down to the bottom and choose the option to create a new dataset and press Next.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=62)** Then, we can make use of the shared data source.
>
> **[1:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=65)** So, I'll select the connection to the WideWorldImporters database and press Next.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=70)** Then, we can build our data source from the tables available in that database.
>
> **[1:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=75)** Let's create a report that looks at the warehouse stock again, so I'll expand that schema and expand the Tables folder.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=82)** I'm interested in the StockItems table.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=84)** I'll expand that one to see all the columns within that table.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=88)** From here, I'll choose the columns StockItemID, StockItemName, Brand, and Size.
>
> **[1:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=95)** That'll move all four of those columns into the Selected fields pane.
>
> **[1:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=99)** We can click the Run Query button to see a sample of the data that's being included.
>
> **[1:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=103)** I can scroll through here and see the different data that we have available.
>
> **[1:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=107)** What I'd like to do now is apply a filter to select products by their color.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=111)** You'll see that we have an Applied filters pane here that we can work with.
>
> **[1:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=115)** In this panel, press the funnel icon on the right.
>
> **[1:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=118)** That'll add in a new filter.
>
> **[2:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=120)** Report Builder automatically chooses the StockItemID field since it's the primary key of this table that I'm working with.
>
> **[2:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=127)** But that's not actually the field that I want to use to filter the data.
>
> **[2:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=130)** So, click on the Field name, and we can choose a different field from the dataset.
>
> **[2:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=136)** The default is to choose from tables already present in the query, but you can pull in a column that's related to any other table.
>
> **[2:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=143)** I'm going to minimize the StockItems table here, and then we can navigate into the Warehouse schema again, then go into the Colors table and select the ColorName field.
>
> **[2:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=154)** Next, we have the operator is.
>
> **[2:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=157)** You can click here to change it.
>
> **[2:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=159)** Now, one difference between adding a filter to the dataset than what we saw earlier when we added a filter directly to a table is that these operators are text, where before, we saw mathematical operators.
>
> **[2:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=171)** So, is just means equals.
>
> **[2:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=174)** But, you have the same choices as before.
>
> **[2:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=176)** I'll go ahead and leave it as is.
>
> **[2:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=178)** Then, we supply a value.
>
> **[3:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=180)** I'll go ahead and click there and type in the text Yellow.
>
> **[3:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=183)** Run the query again, and you'll see it gets reduced to just the yellow products.
>
> **[3:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=188)** Now, in order to give the end user of the report the ability to customize the filter being applied to the data, all you need to do is check this box over here on the right that says Parameter.
>
> **[3:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=199)** If you review the T-SQL code by clicking the Edit as Text button and take a look at the query, you'll see in the WHERE clause that we have a parameter or a variable that's been put in called ColorName.
>
> **[3:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=211)** So it says WHERE the Warehouse.Colors.ColorName is equal to @ColorName.
>
> **[3:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=217)** This is a T-SQL variable that's being used.
>
> **[3:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=220)** If I switch back by pressing the Edit as Text button again and then turning off the Parameter checkbox, I can take a look at that query one more time and we can see the WHERE clause has returned back just to a standard text filter.
>
> **[3:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=233)** Now, it says WHERE the ColorName is equal to, and it's hard coded to the text Yellow instead.
>
> **[3:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=239)** So by turning on that Parameter checkbox, all we're doing is converting the WHERE clause into a variable.
>
> **[4:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=246)** Let's go ahead and make sure that parameter is checked back on and press Next.
>
> **[4:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=250)** Then, from the Available fields section, I'll just select everything by dragging a box around all of them and drag them all into the Values section.
>
> **[4:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=257)** I'll press the Next button, Next again, and Finish to add that into my report.
>
> **[4:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=263)** Now, once again, Report Builder has automatically minimized to my computer, so I'm going to go ahead and expand it there so we can see it again.
>
> **[4:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=269)** All right, let's make this table a little bit wider, and I want to make sure that everything is left-aligned as usual.
>
> **[4:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=275)** So, I'll select both of these selector columns on the left and left-align all of my text.
>
> **[4:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=280)** Let's click here to add in a title.
>
> **[4:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=282)** I'll call it Inventory by Color.
>
> **[4:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=285)** Then, I'll click off of it to deselect it and I'll save my report to the server.
>
> **[4:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=289)** And once again, I'll call it Inventory by Color.
>
> **[4:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=293)** Now, let's run the report to see the result.
>
> **[4:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=296)** The report opens up displaying the default filter value.
>
> **[4:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=299)** So, these are all of the yellow products.
>
> **[5:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=301)** At the top of the report, though, there is a text box where we can supply a different filter.
>
> **[5:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=306)** Let's go ahead and change this to red, then click the View Report button over on the far right.
>
> **[5:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=313)** That'll update the report and only show us red products instead.
>
> **[5:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=318)** So now, we can supply any color that we want.
>
> **[5:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=320)** Let's go ahead and type in black this time and press the View Report button, and it dynamically updates to show me all of the black products.
>
> **[5:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/convert-filters-into-parameters?u=76281980&t=328)** So by parameterizing the filters applied to your dataset, you can make the report dynamic and able to serve up targeted information that can be defined by the end user.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), switch (1)
> **CLI Commands:** make (6), find (1)
> **Env Vars:** where (5), sql (2)
> **SQL:** where (5)
> **UI Navigation:** select the (2), checkbox (2), click on (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Report parameter properties
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=0)** - [Instructor] The parameter that we added to the Inventory by Color report allows you to supply a color, for instance, I'll change this to blue and press the view report button, and that'll update the records that are shown in the report to just that specific color.
>
> **[0:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=14)** Now, this is fine if you know what colors exist in the database.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=18)** If you try and pick a color that doesn't have any matching items, for instance, if I change this to pink, and view the new report, you'll see that I don't get any data back at all.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=28)** Now, we can improve this interactivity by giving the user a dropdown menu of valid choices, rather than just leave them guessing at what values are present in the database.
>
> **[0:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=38)** To fix this up, we need to go back into Report Builder to make some changes to this report.
>
> **[0:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=43)** So I'll go back to the homepage of the portal and then I'll click the more info button for the Inventory by Color report and choose to open it in Report Builder.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=52)** In the report data pane on the left, we can now expand the parameters folder and see the color name parameter that we created previously.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=60)** It's worth noting that you can actually include several parameters in your reports, which might be helpful for very large, complex datasets.
>
> **[1:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=68)** In this report though, we just have the one.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=71)** Now, when you double click on the parameter name, it'll bring up the properties window.
>
> **[1:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=75)** On the general page, you can rename the parameter if you need to.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=79)** You can also adjust the prompt that appears in the report.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=82)** So maybe instead of just color name, we can say, please select a color.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=87)** The data type will largely depend on the type of data that you're filtering on.
>
> **[1:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=91)** And these choices will change the interface element.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=94)** Text gives us the text box that we've seen.
>
> **[1:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=97)** Boolean will change it into a checkbox interface.
>
> **[1:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=100)** And date/time will give the users a calendar picker that they can pick a date from.
>
> **[1:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=105)** You do have some options for what will be allowed in the parameter box.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=108)** We can allow blanks, no values, or multiple values.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=111)** And you can also choose to have the parameter hidden from the interface, which could be useful if you wanted to include a parameter in your report that was modified through some other programmatic means.
>
> **[2:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=122)** On the available values page is where the magic happens to turn this parameter from an empty text box into a dropdown menu.
>
> **[2:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=131)** To do that, we need to provide a list of acceptable values.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=135)** We can either type those values in manually with specified values and then add them one at a time below, or we can get the values from a query.
>
> **[2:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=145)** This option will go back to the database and see what colors are available, and then generate a list dynamically.
>
> **[2:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=152)** This will be helpful because, while maybe we don't have any pink products right now, if we added a pink product tomorrow, this list would automatically update to add that color to the available choices.
>
> **[2:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=164)** If you create the list by specifying values, then you'd have to come back into the report to add pink to the list manually.
>
> **[2:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=172)** So I'll choose the option to get the values from a query.
>
> **[2:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=175)** But now, we need to select a dataset, and I don't currently have a dataset in this report that just pulls out the colors.
>
> **[3:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=182)** So let's go back out and make one.
>
> **[3:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=185)** I'll press the cancel button.
>
> **[3:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=187)** Then I'll right click on the datasets folder and add a new dataset.
>
> **[3:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=191)** I'll name it colors.
>
> **[3:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=193)** Then I'll choose to use a dataset that will embed directly in this report.
>
> **[3:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=198)** For the data source, I'll use the shared data source Wide World Importers.
>
> **[3:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=203)** Then we can fill in the query by going into the query designer.
>
> **[3:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=206)** We'll go into the warehouse schema, open up the tables folder, open up the colors table, and select the color name field.
>
> **[3:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=214)** And that'll apply it over here into the selected fields.
>
> **[3:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=216)** Now, if I run this query right now, it's going to return a list of color names used in the database.
>
> **[3:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=222)** However, I know from exploring this database a bit that not all of these colors are actually used by the current product lineup.
>
> **[3:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=229)** So I want to limit the list to just the ones that we actually have in the warehouse.
>
> **[3:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=234)** To do that, we need to manually dig into the query a little bit.
>
> **[3:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=238)** First, I'm going to add in another field to the query.
>
> **[4:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=240)** We'll go up and collapse the colors table.
>
> **[4:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=243)** And I'm going to find the stock items table.
>
> **[4:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=246)** Let me scroll through here.
>
> **[4:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=248)** Expand that open, and I'll add in stock item ID.
>
> **[4:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=252)** This will pair up the colors with every product in the warehouse.
>
> **[4:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=254)** And I can run the query again to see a sample of that data.
>
> **[4:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=258)** Now we need to deal with all of the duplication of values.
>
> **[4:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=261)** To do that, I need to edit this query as text.
>
> **[4:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=264)** That'll allow me to manually enter the T-SQL code.
>
> **[4:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=268)** Then I'm going to actually get rid of the stock item ID field here in the select clause, and change it to select distinct.
>
> **[4:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=276)** I'll leave the inner join exactly as it is.
>
> **[4:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=279)** Now, because we've manually made changes to this query, we can no longer go back into the Query Designer by toggling off the edit as text button.
>
> **[4:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=286)** You'll just get this message here.
>
> **[4:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=288)** Let's go ahead and say no do not make any changes to that.
>
> **[4:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=290)** We can execute the query though by pressing the exclamation mark button to run the query.
>
> **[4:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=295)** And then it'll show me a more limited list of colors.
>
> **[4:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=298)** So this list looks more representative of our current warehouse inventory.
>
> **[5:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=302)** So with those changes made, I'll press the okay button, and then press okay again to save that new colors dataset.
>
> **[5:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=308)** Now we can go back into the parameter properties.
>
> **[5:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=311)** I'll double click on it to open it up.
>
> **[5:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=313)** I'm going to change that prompt back again to please select a color.
>
> **[5:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=318)** Then we'll go into the available fields panel and choose to get the values from a query.
>
> **[5:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=323)** For the dataset, we can now select our new colors dataset.
>
> **[5:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=327)** Next, we need to pick the value field and the label field.
>
> **[5:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=331)** In this example, they're both going to be the same.
>
> **[5:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=333)** They're going to be color name.
>
> **[5:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=335)** The label will be what the user sees in the dropdown menu.
>
> **[5:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=339)** The value will be what gets passed back to the report as the filter criteria.
>
> **[5:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=345)** Now, why would you want these to be different?
>
> **[5:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=347)** Well, sometimes you'll have a situation where you need to filter a report based on some internal ID number or serial number.
>
> **[5:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=355)** You would choose that field for value.
>
> **[5:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=358)** The number itself would be meaningless to an end user, so you'd want to give them the option to select a human readable text equivalent, which is the label.
>
> **[6:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=367)** In our case, the filter criteria that we need is literally the same name of the color, not an abstracted color code value.
>
> **[6:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=375)** So what the user sees in the label will be exactly what's used in the filter.
>
> **[6:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=380)** So that finishes up what we need to change to convert the text box into a dropdown menu of choices.
>
> **[6:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=385)** Before we leave this screen though, I do want to point out the default values page.
>
> **[6:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=390)** If you wanted to change the default value that the report uses when it's first run, you can do that here.
>
> **[6:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=396)** Another option is to say no default value, in which case, the report won't display anything until the user makes a selection.
>
> **[6:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=403)** Or you can get the value from a query.
>
> **[6:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=405)** I'll leave it set to yellow in my report and press the okay button to close the parameter property window.
>
> **[6:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=411)** Let's go ahead and save the report.
>
> **[6:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=414)** And now we can run it to test it out.
>
> **[6:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=416)** Now the parameter at the top has been changed from a text box to a dropdown menu of valid choices.
>
> **[7:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=422)** I can make a selection from the list and view the report.
>
> **[7:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=425)** This makes the parameter interface much easier to use.
>
> **[7:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-parameter-properties?u=76281980&t=428)** End users will no longer need to guess at what colors are valid options when using this report.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), let (4), case, (2), from. (1)
> **UI Navigation:** dropdown (5), click on (3), checkbox (1), select the (1)
> **CLI Commands:** make (4), find (1)
> **Cross-References:** go back to (2)
> **Analogies:** for instance (2)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### Make a dynamic report title
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/make-a-dynamic-report-title?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/make-a-dynamic-report-title?u=76281980&t=0)** - [Instructor] When we create a parameter like we've done with this dropdown menu on the Inventory by Color report, all we're doing is adding a variable to the report's definition.
>
> **[0:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/make-a-dynamic-report-title?u=76281980&t=10)** Then we've used that variable to populate a wear clause in a query to dynamically alter the records presented in the table.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/make-a-dynamic-report-title?u=76281980&t=18)** But that's not the only way that you can use that variable.
>
> **[0:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/make-a-dynamic-report-title?u=76281980&t=21)** I want to alter this report and take the parameter that the user chooses and incorporate it right into the title that appears here at the top.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/make-a-dynamic-report-title?u=76281980&t=30)** Let's take this report into the Report Builder again.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/make-a-dynamic-report-title?u=76281980&t=32)** I'll go back to the home tab, and then we will go to the inventory by color and open it up in Report Builder.
>
> **[0:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/make-a-dynamic-report-title?u=76281980&t=38)** To make this work, the only thing that I need to know is the name of the parameter, and you can find it inside of the parameters folder in the report data panel on the left side of the screen.
>
> **[0:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/make-a-dynamic-report-title?u=76281980&t=48)** In this case, the parameter is just named ColorName.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/make-a-dynamic-report-title?u=76281980&t=52)** To use it in the title, we just edit the text.
>
> **[0:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/make-a-dynamic-report-title?u=76281980&t=54)** I'll go ahead and double click here to put in my insertion cursor.
>
> **[0:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/make-a-dynamic-report-title?u=76281980&t=57)** And actually, let's just get rid of all of that inventory by color text, And we'll put in our parameter inside of square brackets.
>
> **[1:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/make-a-dynamic-report-title?u=76281980&t=64)** So [@ColorName].
>
> **[1:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/make-a-dynamic-report-title?u=76281980&t=69)** In fact, I'm going to create a title that adds static text to the dynamic variable text.
>
> **[1:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/make-a-dynamic-report-title?u=76281980&t=74)** I'll say [@ColorName] Products.
>
> **[1:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/make-a-dynamic-report-title?u=76281980&t=77)** Now the title will read "Yellow Products" or "Blue Products" depending on what's chosen.
>
> **[1:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/make-a-dynamic-report-title?u=76281980&t=83)** Let's save the report to make the changes available in the portal, and then I can run it to see the difference.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/make-a-dynamic-report-title?u=76281980&t=88)** Now we have a title that says Yellow Products, and it shows me all the yellow products from the warehouse.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/make-a-dynamic-report-title?u=76281980&t=93)** If I change this and choose light brown and view a new report, it'll update to say, Light Brown Products and show me those products.
>
> **[1:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/make-a-dynamic-report-title?u=76281980&t=101)** So now when the data is updated to reflect the user selection, the title updates as well.
>
> **[1:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/make-a-dynamic-report-title?u=76281980&t=106)** Now the report's presentation is even more specific about exactly what records it's displaying.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (1), static (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** dropdown (1), go to (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Add a parameter manually
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=0)** - [Instructor] In addition to using a parameter selection in the report to customize a table's parameter, you can also create hyperlinks to supply the parameter's value.
>
> **[0:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=10)** This is done through a method called an action.
>
> **[0:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=13)** In order to see how this works, we need to create two new reports.
>
> **[0:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=16)** So the first one is going to gather some summary sales figures, and the second report will be used to filter the first one to a specific year, so let's get started building on the first report.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=27)** I'm going to start a new page edit report using the report builder.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=32)** Then I'll use the option to use the table or matrix wizard.
>
> **[0:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=35)** We'll create a new embedded dataset and press next, and then I'll use the Wide World Importers shared data source.
>
> **[0:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=43)** I'll press the next button again.
>
> **[0:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=44)** Now I'm going to create this dataset by switching over to the text editor and pasting in a query that I have on my clipboard.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=52)** You can find this text inside of the course exercise files.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=55)** If I run the query by clicking on the exclamation mark button, you can see what it's returning.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=60)** It's calculating the total sales and tax collected for each month and year.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=66)** Press next to save the query and save the dataset and move onto the table designer.
>
> **[1:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=72)** Then I'll drag all four of these fields into the values section.
>
> **[1:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=76)** Now, when I do that, I notice that report builder is automatically applying the sum aggregate calculation, which isn't what I want.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=84)** So click on the down arrow for the first field, and turn that off.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=88)** Since all four fields were still selected, you'll see the same change applies to all of them.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=93)** Alright, that's better.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=94)** Let's go ahead and press next, next again, and finish to add in the table.
>
> **[1:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=99)** I'll make it wider like we normally do, and I'll left align all of the text.
>
> **[1:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=103)** Then I'll click into the title section and change the title to sales summary by month.
>
> **[1:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=110)** Let's go ahead and run the report to see what it looks like.
>
> **[1:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=113)** So there is our raw data.
>
> **[1:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=115)** We have a record for each month that displays the total sales and the total tax collected.
>
> **[2:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=121)** The sort order is kind of a mess, but we'll fix that later on.
>
> **[2:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=124)** The one thing that I do want to fix is the formatting of these numbers here in the beginning, the total sales and the tax collected.
>
> **[2:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=130)** I want to display them as currency values.
>
> **[2:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=132)** So I'll go back into designer.
>
> **[2:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=134)** Then I'll click on the total sales value here, and up at the top, I'll click on the dollar sign to apply the currency text.
>
> **[2:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=141)** Then we'll do the same thing for tax collected.
>
> **[2:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=143)** I'll select it and press the dollar sign.
>
> **[2:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=145)** Then I'll run the query again, and we'll see that the formatting of that data has been improved.
>
> **[2:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=151)** Okay, let's go back into the design view.
>
> **[2:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=154)** Now I want to add in a parameter to this table.
>
> **[2:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=157)** Since I manually entered a query in the dataset creation process, we weren't given the option to select the parameters checkbox there.
>
> **[2:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=165)** We need to add in a parameter after the fact.
>
> **[2:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=168)** To do that, we'll right click on the parameters folder and choose add parameter.
>
> **[2:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=173)** Let's give it a name.
>
> **[2:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=175)** I'll call it TransactionYear.
>
> **[2:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=178)** For the prompt, I'll type Transaction Year again, but this time with a space.
>
> **[3:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=182)** Because this will filter the transaction year column, which is an integer data type, we need to make sure that the parameter is also an integer, so I'll change that here in the data type dropdown menu.
>
> **[3:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=193)** That creates the parameter.
>
> **[3:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=195)** Let's go ahead and press the OK button, and it'll save it into the parameters folder.
>
> **[3:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=198)** Now we can add it into the dataset.
>
> **[3:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=201)** Let's expand the datasets folder and double click Dataset 1 to open it up into the properties window again.
>
> **[3:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=207)** Then I'll switch over to the filters page.
>
> **[3:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=209)** We're going to add in a new filter, and for the expression, I'll use the dropdown menu and select transaction year.
>
> **[3:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=217)** This is the field in the table that we want to filter on.
>
> **[3:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=220)** I'll leave the operator set to equals and come down to the value.
>
> **[3:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=223)** Here I'll click the function button over on the far right and that'll open up our expression builder.
>
> **[3:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=230)** Down in the categories panel, we have a group collection for parameters, which I'll select, and that shows me the parameters from this report, including the transaction year parameter we just created.
>
> **[4:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=240)** I'll double click on that to add that up into the expression.
>
> **[4:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=243)** Press the OK button to save the expression, and then press OK again to save the dataset.
>
> **[4:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=249)** Now we can go ahead and run this table.
>
> **[4:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=252)** We get our transaction year property up here at the very top, and I can type in a year.
>
> **[4:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=256)** Let's type in 2015 and press view report, and there we get a sales summary by month that only shows me the records for the year 2015.
>
> **[4:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=265)** Let's go ahead and save this.
>
> **[4:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=266)** I'll call it Sales Summary, and that'll make it available back in the portal.
>
> **[4:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=271)** So knowing how filters and parameters are created outside of the wizards will help you build fully customized reports.
>
> **[4:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-parameter-manually?u=76281980&t=278)** In the next movie, we'll finish the process by creating another report that'll be used to populate this date parameter value for us.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), type, (1), switch (1), function (1), this. (1)
> **UI Navigation:** click on (5), dropdown (2), select the (1), checkbox (1)
> **CLI Commands:** make (3), find (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Report actions
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=0)** - [Instructor] We just built a parameterized report called Sales Summary that displays some monthly sales information when we fill in a transaction year.
>
> **[0:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=8)** For instance, I'll type in the year 2016, and it'll show me just the records from that particular year.
>
> **[0:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=14)** Now, we want to hook in another report to this that'll feed in the parameters value so that I don't have to type it in manually.
>
> **[0:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=21)** Let's go back to the homepage of the portal and then we'll create a new paginated report.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=27)** I'll choose the option to use the table or matrix wizard, and I'll create a new dataset for this specific report.
>
> **[0:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=34)** We'll use the Wide World Importers shared data source and press next.
>
> **[0:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=38)** Then, for the query, I'm going to go into the sales schema and I'll find the table for orders, and inside of there, we have a field for the order date.
>
> **[0:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=46)** I'll place a check mark there and adds it over here to the selected fields.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=50)** Now, if I run the query, it shows me all of the order dates for the orders in the database.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=55)** Now I'm only interested in the unique years, so I can switch over to the edit as text option and manually change this query.
>
> **[1:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=64)** In order to get the years out of the order date, I just need to apply the year function to that data.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=69)** I'll type that in at the beginning, open a parentheses, and then at the end, close the parentheses.
>
> **[1:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=75)** I'll also give this an alias.
>
> **[1:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=76)** I'll just call it as year.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=78)** Next, I only want to see the unique years, so I'll change this to a select distinct query.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=84)** If I run the query with the exclamation mark button, you'll see I get a list of just the years that are present in the dataset.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=90)** Go ahead and press the next button now.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=93)** Then we'll take the year field and drag and drop it into the values section.
>
> **[1:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=98)** Now the report builder is automatically applying that sum function again, and it doesn't make any sense to sum up your numbers, so I'll go ahead and turn that off using the option on the right.
>
> **[1:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=107)** Then with that fixed, I'll press the next button, next again, and finish to add the table into the design of this little report.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=114)** Let's make it a little bit wider here, and then I'll click to add the title, Year.
>
> **[1:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=118)** Okay, let me run this report to see what it looks like.
>
> **[2:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=121)** And there it is, just a simple table with a list of four years.
>
> **[2:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=124)** Now what I want to do is click on any one of these years and be taken to the sales summary report and have it filter to the year that I click on.
>
> **[2:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=132)** Let's go back into design view.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=135)** Then I'll click the year text value here in the bottom of the table.
>
> **[2:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=139)** Now, if you see selected text over in the properties window, you've gone too far, you've double clicked on it.
>
> **[2:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=144)** Press the escape key until you see year over here in the properties, and as a reminder, if you're not seeing the properties window at all, you can turn that on by going to the view menu and toggling it right there.
>
> **[2:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=154)** Okay, let's go back to the home tab.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=156)** I'll select that text, and so it says year over here on the properties.
>
> **[2:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=160)** Then we'll scroll up in the properties until you find the action property.
>
> **[2:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=163)** It currently is set to none.
>
> **[2:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=165)** Click that.
>
> **[2:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=166)** Then click the ellipsis or the build button here at the end to open up the text box properties and switch over to the action page.
>
> **[2:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=174)** This gives us a simple choice of what to do when a user clicks on a value from the table.
>
> **[2:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=179)** The default action is to do nothing, or we can have the click trigger to go to a report, a bookmark, or a URL.
>
> **[3:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=187)** I'll choose the option to go to a report.
>
> **[3:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=189)** Then I'll click the browse button to specify the specific report I want to go to, and that's going to be the sales summary report from the server.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=196)** I'll select it, and press open.
>
> **[3:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=199)** In the box that says, "Use these parameters to run the report," we can pass in a value when the report opens.
>
> **[3:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=206)** Click the add button.
>
> **[3:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=207)** Then the name is going to be Transaction Year.
>
> **[3:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=211)** That's the parameter from the sales summary report.
>
> **[3:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=214)** The value is going to be year.
>
> **[3:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=217)** That's the text that the user clicks on in this report.
>
> **[3:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=220)** Go ahead and press OK, and then we'll deselect everything and run this form to see the result.
>
> **[3:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=226)** So here's our list of years, and now when I hover over them, you'll see I get a little finger pointer.
>
> **[3:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=231)** If I click on a year, it opens up the sales summary by month report and filters it to that specific year.
>
> **[3:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=237)** I can click the back button here on the ribbon to go back and click on a different year to see a different result.
>
> **[4:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=243)** Now, the only modification that I might want to make to this is to make these years look more like hyperlinks, so that users know that they can click on them.
>
> **[4:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=250)** Let's go back into design view and I'll select the year, and I'll apply an underlined font style to that text.
>
> **[4:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=256)** I'll deselect it, run the report again, and there we go.
>
> **[4:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=259)** Now it looks a little more clickable.
>
> **[4:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=261)** Okay, let me go ahead and save the design of this, and I'll just call it year.
>
> **[4:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=265)** That'll save it into the portal, and I can close out of this and return back to the portal.
>
> **[4:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=270)** Then I'll refresh my web browser to see the full workflow.
>
> **[4:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=274)** So now I can click on the year report.
>
> **[4:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=277)** It shows me a list of years, and I can select a year to view the sales summary for that specific year.
>
> **[4:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=283)** Then I can click the back button or go back to the home tab, go back to year, and choose a different year.
>
> **[4:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=289)** So now we have a threaded connection between reports using an action to pass a value from one to another.
>
> **[4:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=295)** Using this technique, you can build an entire chain of drilled down reports that allows users to start at a high level overview and click a link to immediately review more detailed information.
>
> **[5:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/report-actions?u=76281980&t=308)** For instance, I could create another report that breaks out the monthly sales values into individual days and access it by clicking on the month number in this report to review any month that I want to see the details on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), switch (2), function (2), pass (2), this, (1)
> **UI Navigation:** click on (6), go to (3), drag and drop (1), scroll up (1), select the (1)
> **CLI Commands:** make (4), find (2)
> **Cross-References:** go back to (4)
> **Analogies:** for instance (2)
> **Env Vars:** url (1)
> **Speakers:** - [instructor] (1)

#### Sort records in a table
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=0)** - [Instructor] You might have noticed that the reports that I've built so far have all displayed records in a seemingly random order.
>
> **[0:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=6)** Here in the Sales Summary report, my monthly values are all scrambled up, and if I press the back button on my browser and go back to the year report, you'll see that the years are all scrambled, as well.
>
> **[0:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=19)** Now if you're anything like me, this has probably been bugging you for the past few videos, so let's take a moment and fix this up properly.
>
> **[0:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=26)** The order that the records in a report will display in is dictated by the indexes and storage of the data back in the original database, unless we specify otherwise in the design of the report.
>
> **[0:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=38)** Because our dataset queries don't include an order by clause when pulling the data out, we need to tell the table objects how we want the records sorted.
>
> **[0:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=49)** So let's fix these up.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=50)** I'm going to go back to the home tab of the portal and we'll start with the Year report.
>
> **[0:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=54)** I'll just open that up in Report Builder.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=56)** Then we need to select the table.
>
> **[0:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=59)** Now there's a couple of different ways to do this.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=60)** We've been doing this a couple of times throughout this course, but let's take a look at how we get there, specifically.
>
> **[1:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=65)** If I click anywhere in the table, you'll see in the properties that I'm currently selecting this Year cell.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=71)** I can press the escape key a couple of times until I get to the Tablets properties, and this has the table selected.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=78)** Another way to get there is to select something in the table and click on this upper left hand corner of these selection bars, and that'll jump me right to the tablets, as well.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=88)** And finally, if you're very careful with your mouse click, you can maybe click on the edge of the border there to select the table, but that's really a tiny little activation area.
>
> **[1:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=97)** Oftentimes you'll either click off of it or click the cell inside of it.
>
> **[1:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=101)** So no matter how you get there, make sure you have tablets listed over here in the properties to know that you've selected that entire table.
>
> **[1:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=109)** Then once that's done, we'll click the properties pages button here in the properties window, and that'll open up the tablet's properties.
>
> **[1:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=117)** Now at the bottom of the properties window is a page for sorting, and here we can add in rules for how we want the data ordered in the report.
>
> **[2:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=126)** I'll add in a sort and then we'll sort by the only column that we have available in this table, which is the year.
>
> **[2:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=132)** We can change it from A to Z to Z to A to make them in a reverse chronological sequence.
>
> **[2:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=138)** So the most recent year will appear at the top, and that's all we really need to do.
>
> **[2:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=143)** I'll press the okay button, I'll save the changes that I've made to this table and I'll run it to see the difference.
>
> **[2:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=148)** And now the years are in a proper sequence, starting with 2016, then 15, 14 and 13 below that.
>
> **[2:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=155)** Then we can click on a date to move over to the Sales Summary report.
>
> **[2:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=159)** And I want to apply a sort to the month column here, but this time I want to allow the user to be able to decide whether they want to view the records in an ascending or descending sequence.
>
> **[2:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=171)** We can do this by enabling interactive sorting.
>
> **[2:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=175)** It looks like I can press the design button here on this window, but you'll notice that it just goes back to the design of the year report.
>
> **[3:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=181)** So what we need to do is close out of the Report Builder.
>
> **[3:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=185)** Then we'll return back to the portal, find the Sales Summary report, and then open that specifically in the Report Builder itself.
>
> **[3:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=193)** Okay, the first thing we need to do is apply a default sort to this table.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=196)** So, once again, I'll select the table and make sure it says Tablets over here in the properties.
>
> **[3:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=201)** Then we'll open up the Report Tablets properties, go to the sorting tab, add a new sort, and I want to sort it by the transaction month.
>
> **[3:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=211)** Actually, let's change it to the transaction year and do a dual layer sort.
>
> **[3:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=216)** So we'll send it to transaction year to sort that way first.
>
> **[3:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=219)** We'll sort it descending.
>
> **[3:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=221)** Then I'll add in a second sort.
>
> **[3:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=223)** So it says then by transaction month, and I'll do that descending, as well.
>
> **[3:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=229)** In our current workflow, users are only going to see a single year at a time, so it really doesn't matter, but it might be useful to view this report with multiple years worth of information later on.
>
> **[3:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=238)** So I'm just going to put that in now so we have a dual layer sort here and that'll protect us later on.
>
> **[4:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=245)** Okay, let's go ahead and press the Okay, and that applies a default sort to the table.
>
> **[4:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=250)** Now to enable interactive sorting and the option is in a different location in the report.
>
> **[4:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=256)** Interactive sorting is applied to the header cells of the table.
>
> **[4:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=260)** In order to get to the right property, you need to select the text box and not the text inside.
>
> **[4:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=265)** So we'll start with the transaction month, but this is selecting the text.
>
> **[4:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=268)** So I'll press the escape button until my properties window says text box seven.
>
> **[4:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=273)** Yours might say a different number here, but it should say text box and then a number.
>
> **[4:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=277)** So with the text box selected, click on the Property Pages window, and then down at the bottom is an option for interactive sorting.
>
> **[4:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=286)** The first option is to enable interactive sorting, and I'll turn that on.
>
> **[4:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=290)** The text says "enable interactive sorting on the text box," but it really controls the entire column of data below.
>
> **[4:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=297)** If we have data groups in the table, we could sort just the groups, but this table doesn't, so it's going to sort all of the data rows.
>
> **[5:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=305)** Next, we need to define what to sort by.
>
> **[5:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=308)** Users will be clicking on the transaction month header so it makes sense to sort the data by the transaction month in this case.
>
> **[5:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=315)** The last option to apply the sorting to all groups and data regions will sync the sort order across multiple tables in the report so that they all sort at the same time when you adjust this table.
>
> **[5:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=327)** We only have the one table in this report, so this doesn't apply in our situation.
>
> **[5:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=332)** Press the Okay button and that adds the interactive sorting on the month column.
>
> **[5:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=336)** Let's add one more interactive sort on the total sales column.
>
> **[5:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=340)** I'll select that, make sure that the properties says Text Box, and then click the Property Pages button.
>
> **[5:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=346)** Once again, we'll go to Interactive Sorting and turn it on.
>
> **[5:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=350)** Then we'll choose Sort by and this time sort by Total Sales.
>
> **[5:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=355)** Let's press the Okay button here that adds an interactive sort to this column, and I'll save all the changes to my report.
>
> **[6:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=362)** Let's press the Run button now.
>
> **[6:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=364)** Now, because we didn't go through that year form originally, we have to manually type in our transaction year.
>
> **[6:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=369)** So I'll type in 2016 and view the report.
>
> **[6:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=372)** And now you can see that my months are in a proper sequence descending.
>
> **[6:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=376)** It starts with May and goes down to January, but I have my own control over that.
>
> **[6:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=381)** I can click on this button over here in the transaction month header to reverse that if I want to see January 1st instead.
>
> **[6:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=387)** And I have a similar button over by the Total Sales.
>
> **[6:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=391)** I can sort the data numerically by the sales values, either ascending or descending.
>
> **[6:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=396)** So by adding a sort order to the report, it'll display the records in a predictable way.
>
> **[6:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/sort-records-in-a-table?u=76281980&t=402)** And by making the sorting interactive, you can allow your report users to view the data from different perspectives.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this. (1), finally, (1), case. (1)
> **UI Navigation:** click on (5), select the (4), go to (2)
> **CLI Commands:** make (4), find (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [instructor] (1)


### 5. Create Charts

#### Introduction to charts
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=0)** - [Presenter] Reading through a data table is fine if you want to be able to get information about individual data points.
>
> **[0:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=6)** But if you want to quickly visualize the big picture and make easy comparisons to other values or see changes over time, then you're going to want to add charts into your reports.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=18)** Charts are a visual representation of your data.
>
> **[0:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=21)** They come in a variety of formats that are suited to different understandings of the data.
>
> **[0:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=26)** If you've worked with data in Excel, then you probably already know the basics.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=30)** Line charts are good for showing trends over time.
>
> **[0:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=34)** Column charts allow you to make easy comparisons across values.
>
> **[0:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=38)** Horizontal bar charts are also good for comparisons, but they work better when you have a lot of values to compare, since it's often easier to arrange a chart to be taller than it is to make it wider.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=50)** And then we have pie charts, when you want to visualize percentages of a whole when.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=56)** Report builder also offers additional specialty chart types, things like radar charts, area charts, and bubble charts.
>
> **[1:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=63)** So you should be able to find a chart type that works for what you want to show.
>
> **[1:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=67)** You can also choose 3D versions of many charts, but I'm going to make a simple request of you.
>
> **[1:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=73)** As a personal favorite to me.
>
> **[1:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=75)** Please don't ever use the 3D charts in your reports.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=78)** They only add visual clutter and noise to your layouts, and they don't enhance the legibility of your presentation.
>
> **[1:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=85)** They're all flash and no substance.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=88)** Stick with the 2D options for the best results.
>
> **[1:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=91)** Now, when you're creating charts, you'll follow a similar process as creating a data table or a matrix.
>
> **[1:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=97)** The process starts by creating a data set just like you would for a table.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=102)** Then you drag fields from the data set and place them into three different boxes.
>
> **[1:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=107)** But instead of values, row groups, and column groups that we have in a table, charts will use values, category groups, and series.
>
> **[1:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=116)** Let's take a look at these different components of a chart.
>
> **[1:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=119)** Values will always be numeric, and you can think of values as being the traditional Y or the vertical axis in a column chart.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=128)** The values are what will determine the size of the column. For this chart.
>
> **[2:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=132)** Maybe they represent revenue or employee turnover.
>
> **[2:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=136)** Category groups can be numeric or text, and they make up the traditional X-axis or the horizontal axis.
>
> **[2:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=143)** The categories will determine what each column represents.
>
> **[2:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=147)** In this case, different regions, adding additional series of data will layer on another set of data points on the same chart.
>
> **[2:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=155)** So we can easily compare values from 2023 to 2024 across the category groups.
>
> **[2:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=162)** These are the standard components of a chart, but as we'll see, they'll include a number of additional components like legends, titles, and trend lines that can layer on top of this basic arrangement.
>
> **[2:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/introduction-to-charts?u=76281980&t=173)** So let's dig in and start adding charts to a report.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), find (1)
> **Code Keywords:** let (2), case, (1)
> **Analogies:** picture (1), just like (1)
> **Speakers:** - [presenter] (1)

#### Create a chart
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=0)** - [Presenter] I'm going to continue working on the sales summary by month report, which I have opened up in the report builder.
>
> **[0:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=6)** I want to add in a chart so that we can view both the data table and a graphical representation of that data right in the same report.
>
> **[0:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=15)** Let's switch over to the design view and take a look at the insert tab.
>
> **[0:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=19)** In the data visualizations group of the ribbon, you'll find the option to add in a chart to the report.
>
> **[0:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=25)** We have two options.
>
> **[0:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=26)** We can either use the chart wizard or we can add a chart manually.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=30)** Let's have the wizard walk us through our first chart.
>
> **[0:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=34)** Now, just like with a table, we need to pick the data set that we want to use or come down to the bottom and choose the option to create a new dataset.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=41)** I'll use the dataset that's feeding the table that's already in the report.
>
> **[0:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=45)** Now it looks like I didn't give it a good name, but it's called DataSet1.
>
> **[0:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=49)** I can see that it's returning the total sales, tax collected, transaction year, and transaction month columns from the Wide World Importers database.
>
> **[0:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=59)** With that one selected, I'll press the next button.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=62)** Then we have a selection of chart types.
>
> **[1:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=65)** The wizard only gives us a few choices, and if you go through the manual process, you'll see a lot more options.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=71)** I'll choose the column chart type and press next.
>
> **[1:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=74)** That brings us to the interface where we drag fields from the dataset and place them into either the values, categories, or series boxes.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=84)** The values will always be numeric, and for this, I want to visualize the total sales for each month.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=90)** We'll drag the total sales field from the available fields pane into values, and I'll drag transaction month and drop it into categories.
>
> **[1:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=98)** You'll notice that the values total sales automatically gets an aggregate function, sum applied to it.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=104)** If you wanted to change the aggregate function, you can use the dropdown menu on the right, but in our case, Sum is the aggregate that I want.
>
> **[1:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=112)** Go ahead and press next.
>
> **[1:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=113)** Then we get a preview of the chart with some placeholder data, so don't look too closely at the numbers, but we can see that we have columns for the total sales and categories across the bottom for each month, so everything looks like it's in the right place.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=128)** Press the finish button to create the chart and add it into the report.
>
> **[2:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=132)** Now the chart actually lands on top of the table and the title of the report that we already had, so we need to move it into a better position.
>
> **[2:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=140)** I'm going to close the properties Window to give myself some more room.
>
> **[2:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=144)** Then in the chart with it selected, you'll see that we have a grab handle in the upper-left hand corner with a cross arrow icon, you can click there and drag the chart into a new position.
>
> **[2:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=154)** You can also use the arrow keys on your keyboard to nudge it around.
>
> **[2:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=159)** I'm going to make the original table a little bit narrower, so I'll select it, tap the escape key on my keyboard to get the handles for the table, and then I'll make that a little bit narrower, and that'll give you more room for the chart on the right. When you deselect the chart, you can get it back selected by clicking anywhere in the blank area, and that'll give you those grabber handles again.
>
> **[2:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=178)** Okay, let's ahead and run the report so we can see it populated with data.
>
> **[3:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=183)** Now remember that this report is parameterized, so I need to type in a date for the transaction year.
>
> **[3:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=188)** I'll type 2015 and view the report.
>
> **[3:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=191)** Now I'll see the data table and the visual representation of that data in the column chart.
>
> **[3:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=197)** Let's type a different year.
>
> **[3:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=198)** I'll type in 2016 instead and view a new report, and you'll see the data table and the chart both update.
>
> **[3:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=205)** Now, this data set doesn't include a full year for 2016, so we're only seeing January through May represented in the chart, but with this chart, it makes it easy to compare months against each other, and you can quickly see that May has the most sales.
>
> **[3:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=220)** Where looking at the table, it would take you a moment to scan through all of the numeric values to arrive at this same insight, and that's how you add a chart into your reports.
>
> **[3:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-chart?u=76281980&t=229)** It's basically the same process as adding in a table, but it adds a visual element to the report.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (2), continue (1), switch (1), interface (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** dropdown (1)
> **Analogies:** just like (1)
> **Speakers:** - [presenter] (1)

#### Add additional data series
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=0)** - [Instructor] The chart that I added to the Sales Summary report includes a single data series for the year.
>
> **[0:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=6)** I would like to be able to review this year, the selected year, and the same months last year if we have that data present in the database.
>
> **[0:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=14)** This will allow us to compare year-over-year performance.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=18)** Let's make that change by taking our report back into Design view.
>
> **[0:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=21)** Now to add additional series to a chart after it's already been placed in the report, you need to find the right place and it's actually kind of hidden.
>
> **[0:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=29)** Click on the chart once, then click again, and on the far right hand side of the screen, and it's often off the side of the screen so you'll probably need to scroll over to see it, you'll see a new chart data window opened up.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=41)** This represents the choices that we made when we added fields to the different areas of the chart.
>
> **[0:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=46)** At the top is the Values section and inside of there, we have the Total Sales field for the dataset.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=52)** Then, we have the Category Groups that divides the data into columns corresponding to each month.
>
> **[0:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=57)** At the bottom is the area where we can add a Series Group.
>
> **[1:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=61)** In order to make changes to the chart's contents, you can either remove sections by clicking on them and pressing Delete, or you can drag new fields in from the dataset over in the Report Data window on the far left.
>
> **[1:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=74)** I'll go ahead and expand the Datasets folder and we'll see the dataset that we're working with.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=79)** So I want to see different series for different years.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=82)** So let's start by dragging the TransactionYear column out of the dataset and I'll drop it into the Series Group panel over in the Chart Data window on the right.
>
> **[1:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=91)** The placeholder chart updates, and that's looking like what I'm expecting.
>
> **[1:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=95)** But if you press the Run button to take a look at the actual data presented inside of the report, let me go ahead and type in a year again, 2015 and press Enter, you'll see that the chart actually doesn't update.
>
> **[1:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=106)** It's still only showing columns for a single year, and that's the year that I've selected up here in the parameter.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=111)** So why is that?
>
> **[1:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=113)** The problem is that the data source contains a filter.
>
> **[1:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=117)** So the only values that are making it through the dataset filter and are available to the report are the ones that correspond to the year that I typed in the parameter.
>
> **[2:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=127)** As far as this report is concerned, there are no other years.
>
> **[2:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=131)** We can fix this by making a change to the dataset.
>
> **[2:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=134)** Let's go back into Design view.
>
> **[2:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=136)** Then, I'll double click on the Dataset to open up its properties and we'll switch over to the Filters page.
>
> **[2:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=142)** This is where the full dataset is being restricted.
>
> **[2:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=145)** Right now, the only records visible are those that exactly match the year supplied.
>
> **[2:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=151)** I'm going to change this operator from = to Between.
>
> **[2:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=155)** Now I'm given two values to work with: a starting value and an ending value.
>
> **[2:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=161)** The ending value will be the supply date.
>
> **[2:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=163)** The starting value, I want to be the year prior.
>
> **[2:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=167)** Press the function button for the first value and that'll open up the Expression builder.
>
> **[2:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=172)** Then, we can go into the Parameters section and double-click TransactionYear.
>
> **[2:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=177)** That'll add it up into the expression.
>
> **[2:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=179)** Then, I just need to type -1 to the end of it.
>
> **[3:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=183)** That'll make the starting value one less than whatever is supplied.
>
> **[3:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=187)** So we don't need to create a second parameter.
>
> **[3:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=189)** Press the OK button, and then OK again to save the new filter.
>
> **[3:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=194)** So that takes care of the dataset.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=196)** We already added the TransactionYear field to the chart Series Group.
>
> **[3:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=199)** So, let's test it out.
>
> **[3:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=201)** I'll press the Run button and I'll type in the year 2015 again.
>
> **[3:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=204)** So now the chart is updated and it now displays two series: one for the chosen year in the dark green color and one for the prior year in the light green color.
>
> **[3:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=214)** So that's looking great.
>
> **[3:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=215)** Now there is one problem and you might have spotted it already.
>
> **[3:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=218)** Having the table built on the same dataset is efficient since the report only needs to make a single query to the database to fetch the data.
>
> **[3:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=226)** But because we modified the filter, both years are now showing up in the table.
>
> **[3:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=231)** We can fix this by modifying the table and add its own filter to remove the extra year that's now being retrieved by the dataset.
>
> **[3:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=239)** So, back to Design view we go.
>
> **[4:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=241)** Go ahead and select the table and press the Escape key to select the entire table.
>
> **[4:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=246)** Then, I need to open up the Properties window.
>
> **[4:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=248)** So, I closed that previously, I'll go back to the View tab and turn that back on.
>
> **[4:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=253)** Then with the Tablix selected, I'll click the button to open up the Property pages.
>
> **[4:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=258)** Then, we'll go to the Filters section.
>
> **[4:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=260)** This will be the filter for the table itself.
>
> **[4:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=263)** I'll click the Add button to add in a new filter.
>
> **[4:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=266)** The expression will be the TransactionYear, operator will leave at =, and the value will be the value that's coming out of the parameter.
>
> **[4:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=274)** You can either type it in manually here or click the function button.
>
> **[4:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=278)** Go into the Parameters category and double-click it there.
>
> **[4:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=282)** With that selected, I'll press OK and that fills in the value.
>
> **[4:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=285)** Or press OK again and it applies the filter to the table.
>
> **[4:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=289)** So now, the dataset is being filtered to show us two years, and the table is further filtering that data to only show the single year.
>
> **[4:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=297)** We'll go back to the Home tab and run the report one more time.
>
> **[5:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=300)** I'll type in the year 2015 and press Enter, and there is our chart showing the two columns, but the table only showing the year that we've selected.
>
> **[5:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=308)** So that's an example of how you can apply multiple series of data to a chart.
>
> **[5:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=313)** In this case, it allows us to get a year-over-year comparison, but you can break your data into series comprised of any category that you want, regions, product lines, whatever makes sense for your business.
>
> **[5:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-additional-data-series?u=76281980&t=326)** The data will be grouped based on common attributes in the series and show up as independent categories in the chart.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (2), delete (1), switch (1), from = (1)
> **UI Navigation:** click on (2), double-click (2), select the (2), go to (1)
> **CLI Commands:** make (4), find (1)
> **Cross-References:** go back to (2)
> **Speakers:** - [instructor] (1)

#### Format charts
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=0)** - [Instructor] Formatting charts is a little bit trickier than formatting tables because so many of the options are only available through the Property pages.
>
> **[0:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=8)** And each element of the chart, the title, the y and x-axis labels and values, the data bars, the background grid, all of these elements have their own properties and there's no single location where you can go to change everything about the design.
>
> **[0:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=24)** Now, with that said, I would like to make some changes to this chart.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=27)** First, I need to give it a title.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=30)** Then, I want to adjust the display of the values on the left.
>
> **[0:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=34)** These numbers are in millions and it's a little bit hard to read with all the extra zeros.
>
> **[0:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=39)** The numbers representing the months along the bottom are only showing the even numbers.
>
> **[0:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=43)** I'd like to see every number.
>
> **[0:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=45)** Next, I want to show you how to change the colors that are applied to the columns.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=50)** And finally, I'd like to add labels to the horizontal and vertical axes so we know what these numbers actually mean.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=56)** So let's go into Design view and get to work.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=60)** First, I want to close the Properties window if it's open because we're going to need that extra space over on the right side of the screen.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=66)** Everything that I need to change can be found in the pop-up Properties windows for each element, and it's a little bit better organized that way.
>
> **[1:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=74)** Feel free to explore the Properties window though to find alternate locations where these options can be set.
>
> **[1:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=80)** Then it's just a matter of clicking around on the chart to see what we can do.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=84)** I'll click on the title once and that'll select the chart object.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=87)** Then, click the title again to actually select the title.
>
> **[1:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=91)** You'll know you've got it when you see the bounding box around the title's area.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=94)** Once you see that, you can right-click and choose Title Properties.
>
> **[1:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=99)** This is where we can rename the chart.
>
> **[1:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=101)** I'll name it Sales Year-Over-Year.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=104)** You can place the title in a new location in the chart frame with these radio buttons.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=108)** Right now, it's going to be anchored into the upper left hand corner of the chart, but we can move it over to the right hand center, for example, or the bottom right corner.
>
> **[1:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=117)** I'll just put mine back in the top left.
>
> **[1:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=119)** Along the left side, we have options for Visibility if you wanted to hide the title; or Action, if you wanted to trigger something when the title is clicked, I'll leave both of those set to their defaults.
>
> **[2:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=130)** The font page will allow you to choose a font face, size, and color.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=135)** I'm going to change the color from this dark gray color to straight black, and I'll change the font size up to 12 points to make it a little bit bigger.
>
> **[2:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=143)** The fill, border, and shadow properties will all apply special effects to the title.
>
> **[2:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=149)** I prefer a clean look, so I'm just going to leave all of those as they are.
>
> **[2:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=153)** Go ahead and press OK and you'll see that the title gets updated in the chart.
>
> **[2:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=157)** Next, let's look at the display of our sales values.
>
> **[2:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=161)** Select the placeholder numbers, and when you see the bounding box appear around them, you can right-click and choose Vertical Axis Properties.
>
> **[2:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=169)** The Axis Options page will allow us to set a fixed minimum, maximum, and interval for the data.
>
> **[2:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=176)** In the autoconfiguration, the charts will rescale, depending on the data fed into them from the dataset.
>
> **[3:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=183)** There are options along the left hand side to set the label size as well as the label font.
>
> **[3:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=188)** Then, we get to the Number page.
>
> **[3:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=190)** This is where we can control how the numbers are formatted.
>
> **[3:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=193)** I'll switch over to the Number category and place a check mark here next to Show values in, and then change it to millions.
>
> **[3:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=202)** I'll also change the decimal places down to one.
>
> **[3:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=204)** This will make the numbers appear something like 4.5 million Say OK to the change, and that'll update the numerical scale.
>
> **[3:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=212)** Remember that we're just seeing placeholder data here though.
>
> **[3:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=214)** We need to run the report to see the actual values.
>
> **[3:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=217)** Now if you right-click on the numbers again, one of the options you have is to show an axis title, and that'll add a title right next to it.
>
> **[3:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=225)** Then, you can right-click that and edit its properties.
>
> **[3:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=228)** Let's change this to sales in millions.
>
> **[3:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=231)** This way people know what the scale of the numbers is in.
>
> **[3:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=234)** I'll press OK and that updates the label.
>
> **[3:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=237)** While we're at it, let's also add a label to the x-axis.
>
> **[4:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=240)** Go ahead and select that data down at the bottom, right-click, and show axis title.
>
> **[4:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=245)** Then, right-click the new axis title and edit its properties.
>
> **[4:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=249)** This one is just months, say OK, and that adds the new label at the bottom.
>
> **[4:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=254)** Now, I'll right-click on those values on the x-axis again and edit their properties.
>
> **[4:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=259)** In order to view every month number along the line, we'll change the interval from auto to 1.
>
> **[4:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=266)** We'll just type that in.
>
> **[4:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=267)** This will force every label to draw.
>
> **[4:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=270)** With longer labels, you might run into crowding issues, but ours are just a one or two-digit number, so there should be plenty of room.
>
> **[4:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=277)** We'll say OK and that'll update the display.
>
> **[4:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=279)** And finally, I wanted to play around with the bar colors.
>
> **[4:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=283)** You can select the bar and right-click on it, and we have some options.
>
> **[4:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=286)** One of them is to change the chart type.
>
> **[4:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=289)** So if you decided that a bar chart would be a better fit or a line chart, you can change it right here without having to start all over again on the design.
>
> **[4:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=297)** The 3D effects, we're going to avoid like the plague, but here's what it would look like.
>
> **[5:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=302)** Go ahead and go into there.
>
> **[5:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=303)** And then, check the box to enable 3D.
>
> **[5:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=306)** In this mode, you can't even see the shorter bars in the background, and it makes it impossible to compare the heights of each column.
>
> **[5:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=313)** That's why I strongly encourage you to steer clear of the 3D options.
>
> **[5:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=316)** I'm going to turn that back off and press Cancel.
>
> **[5:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=320)** Okay, let's right-click on the data bars again to look at the other options.
>
> **[5:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=323)** Next up, we have an option to show data labels.
>
> **[5:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=327)** That'll add a numerical representation to the top of each bar so you know exactly the value that they're representing.
>
> **[5:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=333)** I'm going to right-click and turn that back off again.
>
> **[5:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=336)** And finally, if you right-click on the bars, you can get to their properties.
>
> **[5:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=340)** Now here there is a page for Fill, but watch what happens when we select a new color.
>
> **[5:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=346)** I'll change it to Steel Blue, for example.
>
> **[5:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=349)** It changes both the series to the same color.
>
> **[5:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=352)** Now, that's obviously not going to be good for legibility, so I'm going to press the Cancel button to undo that.
>
> **[5:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=357)** The color settings for the column is actually a property of the chart itself and not any of the individual elements.
>
> **[6:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=365)** Find an empty area in the chart and right-click.
>
> **[6:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=369)** In the menu, we're looking for Chart Properties.
>
> **[6:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=372)** If you see something else, that just means that you clicked on top of some other element.
>
> **[6:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=376)** So try again in another location.
>
> **[6:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=379)** Once you found the Chart Properties, go ahead and activate that to open up that window.
>
> **[6:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=384)** On the General page is an option for the color palette.
>
> **[6:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=387)** Mine is set to Pacific, and that's what gives us this teal green color scheme.
>
> **[6:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=392)** You can select a different palette from the options here using the dropdown menu.
>
> **[6:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=395)** We can choose something like Berry if you wanted to go pink and purple.
>
> **[6:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=399)** I'm going to change mine to Sea green to give me some green shades instead.
>
> **[6:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=404)** I'll press OK and that'll update the color scheme used for the chart.
>
> **[6:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=408)** Okay, let's go ahead and run the chart to see the changes.
>
> **[6:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=411)** I'll type in a new transaction year of 2015 and press Enter, and there is our updated chart.
>
> **[6:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=417)** So now the chart has a title.
>
> **[6:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=419)** The axis labels are in place, the scale values are clearer, and the data columns have a new code of paint.
>
> **[7:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=426)** As you can see, there's lots of different properties that you can play around with.
>
> **[7:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/format-charts?u=76281980&t=429)** It's just a matter of clicking around and finding things that you want to change in those property pages.

> [!info]- Semantic Content
>
> **UI Navigation:** right-click (12), select the (4), click on (1), in the menu (1), dropdown (1)
> **Code Keywords:** let (6), finally, (3), switch (1), type. (1), else, (1)
> **CLI Commands:** make (3), find (2)
> **Definitions:** is a  (2), means that (1), is an  (1)
> **Analogies:** for example (2)
> **Versions:** 4.5 (1)
> **Speakers:** - [instructor] (1)


### 6. Additional Data Visualizations

#### Gauges
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=0)** - [Instructor] In addition to the charts, there's a number of other data visualizations that you can add into your reports.
>
> **[0:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=7)** The first one I want to look at is called a gauge.
>
> **[0:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=10)** This is like a thermometer or a fuel gauge in a car.
>
> **[0:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=13)** You'll specify the range and a current value, and the gauge will display where the current value falls within that range.
>
> **[0:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=21)** First, let's create a new paginated report, and I want to take a look at the temperatures measured within our cold storage facility.
>
> **[0:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=29)** We'll start with a blank report, and then I'll just jump straight into the insert tab and use the table wizard.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=36)** I'll create a new dataset for this particular report and press next.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=41)** I'll use the shared wide world importers data set and press next.
>
> **[0:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=45)** And then we'll go into the warehouse's schema and find the table.
>
> **[0:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=49)** I'm interested in the cold room temperatures table.
>
> **[0:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=51)** I'll expand that open, and into my selected fields.
>
> **[0:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=54)** I'll grab the cold room temperature ID and the temperature columns.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=60)** You can run the query to see the sample data.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=62)** We just get these four rows back.
>
> **[1:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=64)** Press the next button.
>
> **[1:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=65)** Then I'll drag both fields into the value section, and you'll see that they automatically get the sum function, which I do not want.
>
> **[1:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=72)** So I'm going to turn that off using the right menu.
>
> **[1:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=74)** Okay, press the next button, next and finish.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=78)** And that adds a small table into the design of our report.
>
> **[1:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=81)** I'm going to make it a little bit wider here, so I can see the full header at the top of that column.
>
> **[1:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=85)** And I'll click to add in a title.
>
> **[1:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=87)** I'll call it cold room temperatures.
>
> **[1:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=92)** Okay, let's run the report to see what we've got so far.
>
> **[1:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=95)** So here is our simple table with the four temperature values coming out of the database.
>
> **[1:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=99)** Next, I want to add in a gauge to the right side of this table so that we can visualize the individual cold room temperatures at a glance.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=108)** Let's go back into design view.
>
> **[1:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=110)** Now, the first thing we need to do is give the table more space so we have room for the gauge.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=114)** I'll click the table anywhere to get the selector bars at the top and left side.
>
> **[1:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=119)** Then in the second column selector, I will right click, choose insert column to the right, and that'll give us another column over here where we can place our gauge.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=128)** Then we're going to come up to the insert menu.
>
> **[2:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=131)** And in the data visualizations group we'll find the gauge icon.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=135)** Now when you click it, it doesn't look like anything actually happens, but now when you move your cursor down into the report, you'll see that it's changed.
>
> **[2:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=142)** And this will indicate that the very next click that we make will drop a gauge into the report.
>
> **[2:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=147)** I'll come to the table, into the row that we just created on the right, and make sure that I'm in the row for the data that's represented by the three bars over in the selector on the left hand side.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=158)** So in that row, in the new empty cell to the right, I'll click to add in the gauge.
>
> **[2:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=164)** That'll bring up the select gauge type menu.
>
> **[2:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=166)** You have a number of different styles to choose from.
>
> **[2:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=169)** Radial gauges look like those you might find in a dial or a pressure tank.
>
> **[2:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=174)** Linear gauges look more like thermometers.
>
> **[2:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=176)** Now unfortunately, these icons don't represent graphical style of the actual gauge that you'll see in the report, but they do give you a sense of the orientation.
>
> **[3:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=186)** So, for instance, the radial gauges are interesting to look at, but they might not display well in a table cell.
>
> **[3:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=192)** So I'm going to pick a linear option and I'll stick with the horizontal one.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=196)** This first one on the far left.
>
> **[3:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=199)** I'll select that and press okay.
>
> **[3:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=201)** And that drops a new gauge here into my table.
>
> **[3:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=204)** Now I'm going to make the column wider so we can actually see the details of it.
>
> **[3:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=207)** I'll just grab the right hand side of the table up here in the top selector bar, and I'll just make it wider and the report will grow to accommodate that.
>
> **[3:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=215)** I can also make this row taller by clicking over here on the left hand side and dragging down.
>
> **[3:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=220)** That way we can see the details of the gauge.
>
> **[3:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=223)** Now, I do want to make sure that the data that appears for the temperature, as well as the cold room ID, stays aligned with my gauge.
>
> **[3:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=230)** So I'm going to click that first cell and drag the second one there.
>
> **[3:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=233)** That'll select both of them.
>
> **[3:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=235)** And then I will right align the text within the cell.
>
> **[3:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=238)** And I'll also go up here and choose a middle vertical alignment.
>
> **[4:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=242)** And that'll keep the data aligned with the gauge itself.
>
> **[4:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=245)** Okay, let's turn our attention back to the gauge.
>
> **[4:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=247)** In order to see it with the actual data, I will run the report and we can see the gauges here appeared next to our temperatures.
>
> **[4:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=255)** So we have the gauges repeating for each row in the table, which is good, but they're all displaying the same value right now, and it looks to be about 35.
>
> **[4:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=263)** The range of our temperatures are all between three to five degrees, so obviously we have a bit of work to do to hook the gauge to the actual data.
>
> **[4:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=272)** Okay, let's go back into design view.
>
> **[4:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=274)** Click the gauge a couple of times until you see the gauge data window open to the right.
>
> **[4:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=279)** In the values section, we can see that the gauge is hard coded to display 35.
>
> **[4:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=284)** We need to hook this to the temperature data.
>
> **[4:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=287)** You can either click the dropdown menu to the right and choose it from the available columns in the dataset or click expression to pull up the expression builder.
>
> **[4:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=296)** If you wanted to use the expression builder to construct a more complex calculation to determine the value.
>
> **[5:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=303)** I'm just going to go into the fields for our dataset.
>
> **[5:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=306)** And there it gives us access to the fields as well.
>
> **[5:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=308)** I'll double click on temperature, and that adds it into the expression.
>
> **[5:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=312)** Press the okay button and the gauge data window updates on the right.
>
> **[5:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=318)** So now we need to take a look at the scale.
>
> **[5:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=320)** Right now, the gauge will display our temperatures on a scale between zero and 100.
>
> **[5:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=325)** Since our temperature numbers are so small, it would be hard to distinguish any difference on them on a scale with that size of a range.
>
> **[5:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=332)** Just like with charts, the gauge has a number of properties that we can adjust.
>
> **[5:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=336)** It's just a matter of finding the right one.
>
> **[5:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=338)** If you select the gauge and you get the selector box or the bounding box around it, you can now right click point to gauge panel, and on the bottom, we have four different sets of properties.
>
> **[5:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=350)** There's gauge properties, scale properties, pointer properties, and the gauge panel properties.
>
> **[5:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=356)** The that we want is scale properties.
>
> **[5:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=359)** I'll leave the minimum value set to zero, but I'll change the maximum up to five.
>
> **[6:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=365)** I want ticks every degree, so I'm going to change the interval from 20 down to one.
>
> **[6:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=371)** So that's all I need to change here.
>
> **[6:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=373)** But feel free to spend a few moments going through some of the many options in this window, as well as the other three property windows to get a feel for the wealth of options available for customizing your gauge.
>
> **[6:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=385)** Press okay, and that returns us back into the report.
>
> **[6:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=388)** Now we can run it again to see the final result.
>
> **[6:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=392)** And here is our working temperature gauges.
>
> **[6:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=394)** It makes it easy to scan down the report and see how values compare to one another.
>
> **[6:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=399)** Before we leave, let's go ahead and save this report.
>
> **[6:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/gauges?u=76281980&t=402)** I'll call it cold room, and that'll make it available in the portal, and we'll continue working on it in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (8), find (3)
> **Code Keywords:** let (6), function (1), from. (1), continue (1)
> **UI Navigation:** dropdown (1), click on (1), select the (1)
> **Analogies:** for instance (1), just like (1)
> **Cross-References:** in the next (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Indicators
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=0)** - [Instructor] I'm going to keep working on the Cold Room Temperatures report and use it to take a look at another option that we have for graphically representing our data, and that's with an indicator.
>
> **[0:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=11)** Indicators are collections of icons like red, yellow, green traffic lights, or the icon that shows your cell phone's signal strength.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=18)** You can use them to indicate whether a value is good or bad or somewhere in between.
>
> **[0:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=24)** Let's go back into Design view, and I'll add another column to the right-hand side of my table.
>
> **[0:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=29)** So I'll just select anywhere in the table.
>
> **[0:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=31)** Then, right click the selector at the top of the last column, point to Insert Column and choose Right.
>
> **[0:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=35)** That gives us some more space over here.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=37)** Then, on the Insert tab, we'll find the option for Indicator.
>
> **[0:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=42)** Go ahead and click that, and your cursor will change to show you that the next thing that you add into the report will be a new indicator.
>
> **[0:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=49)** So go over here to the cell and click to add one in.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=52)** That opens up the Select Indicator Type window.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=55)** We can choose from different directional arrows, symbols, some traffic light styles and shapes, and a few rating options.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=62)** I'm going to pick the one for the three traffic signal lights here, and choose OK.
>
> **[1:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=68)** That'll place an icon into the cell of the table.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=71)** Now, just like with the gauge, we need to do a few more steps to hook the indicator to our data, and it'll define what color will be displayed.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=79)** Click on the icon until you see the Gauge Data window open over on the right.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=84)** Let me scroll over here, so I can see the whole thing.
>
> **[1:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=86)** First, we need to tell it to look at the temperature values.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=90)** Let me use that dropdown menu and choose Temperature from the list.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=93)** Now, when you do that, it automatically applies a Sum function, which we know from experience that this is not what we want.
>
> **[1:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=99)** So I'm going to scroll over here to the right again, use that dropdown menu, and point to Expression instead.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=104)** That'll open up the Expression builder.
>
> **[1:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=106)** From here, I can just remove that Sum function.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=108)** We'll get rid of that there, and remember to get rid of the parentheses as well.
>
> **[1:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=112)** Okay, with that fix in place, I'll press OK, and that'll update the values to show me the temperature data coming out of the dataset.
>
> **[1:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=119)** So now, the icons will be linked to the temperature, but how will it know what's green, yellow, or red?
>
> **[2:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=125)** For that, we need to go into the properties and set the scale.
>
> **[2:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=129)** Right click on the indicator icon and choose Indicator Properties.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=135)** Then, we'll switch to the Values and States page.
>
> **[2:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=138)** At the bottom is where we'll set the range of temperatures and what colors they correspond to.
>
> **[2:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=144)** Now, right now, these measurement units are set in a percentage of the entire dataset.
>
> **[2:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=149)** So I need to come up here to the States Measurement Unit option and change it to numeric instead.
>
> **[2:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=154)** Now, we can dial in exact temperature values to change the color up.
>
> **[2:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=159)** Let's start with green.
>
> **[2:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=160)** Our temperatures are good if they're in the range of 0 to 3.6 degrees.
>
> **[2:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=167)** It'll be yellow if it's between 3.6 degrees and 3.9 degrees.
>
> **[2:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=173)** And the temperature will be red if it's 3.9 or anything higher.
>
> **[2:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=177)** I'll just say start at 3.9 and end at 100.
>
> **[3:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=182)** So this will hard code the values to change the color icons up.
>
> **[3:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=186)** But if you wanted to make this more dynamic, you can also press the function buttons on the right and use the Expression builder to determine the start and end values.
>
> **[3:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=195)** Now, you do have the option to change the specific icon using this dropdown menu here, as well as the exact shade of colors that you want to use with this menu there.
>
> **[3:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=204)** I'm also going to go back to the General page, and we'll fiddle with the size a little bit.
>
> **[3:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=209)** Because we made the data row in the table taller to accommodate the thermometer gauge, the indicator icon is pretty large.
>
> **[3:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=217)** I'll turn off this checkbox that says auto-fit gauges in the panel.
>
> **[3:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=222)** Then, we can set a specific position.
>
> **[3:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=225)** I'll change the Y position, which is the vertical position, to 25%, and that'll move the icon down in the cell a little bit.
>
> **[3:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=232)** I'll also change the width to 50% and the height to 50% as well.
>
> **[3:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=237)** And that'll give us a little smaller icon over here in the report.
>
> **[4:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=240)** Okay, press OK, and then we can go ahead and take a look.
>
> **[4:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=243)** I'll run the report to see the data.
>
> **[4:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=246)** So now, the report includes a visual indicator of the Cold Room Temperatures.
>
> **[4:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/indicators?u=76281980&t=250)** And it allows us to easily identify the one that's getting a little bit on the warm side.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (3), switch (1)
> **UI Navigation:** dropdown (3), click on (2), switch to (1), checkbox (1)
> **Versions:** 3.9 (3), 3.6 (2)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### Data bars
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=0)** - [Instructor] Data bars are another visualization option that you can incorporate into your data tables.
>
> **[0:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=5)** They're similar to a gauge, but they're even simpler visually.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=9)** Essentially, they act just like the individual columns in a chart, but they're pulled out and laid down horizontally and placed right in line with the data of the table.
>
> **[0:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=19)** Let's take a look by adding one to the Sales Summary by Month report.
>
> **[0:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=22)** I'll just open that up in the Report Builder.
>
> **[0:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=26)** Now I want to edit this report to visualize the tax collected values.
>
> **[0:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=31)** Let's make space in the table by selecting the table.
>
> **[0:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=33)** Then right-clicking the selector bar at the top, and we'll insert a new column to the right.
>
> **[0:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=39)** I do need to make a little bit of adjustment of these column widths so that we're not running into the chart over there on the right side.
>
> **[0:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=45)** Let me just adjust these widths a just little bit and we'll squeeze everything onto the page.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=50)** Okay, now we can add in our data bar.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=52)** I'll go to the insert menu and find the data bar option.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=55)** Clicking it will change your icon to a little data bar icon, and the next click that you make will add in a data bar.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=62)** I'll hover over that empty cell that we just created and click, and that opens up the select data bar type window.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=69)** Here we have our choice of a standard bar, a stacked bar, or a 100% stacked bar, which will combine values together.
>
> **[1:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=77)** You also have column options, but honestly, these are hard to incorporate into a table due to their height.
>
> **[1:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=83)** So I'm just going to stick with a basic horizontal version.
>
> **[1:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=86)** I'll select that first bar and press okay, and it drops that down into the cell of the table.
>
> **[1:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=91)** Now we need to configure it.
>
> **[1:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=92)** Click the data bar a couple of times until you see the chart data window.
>
> **[1:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=97)** Just like with a full-size chart, we need to fill in the value section.
>
> **[1:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=101)** You can also add in a category group or a series group.
>
> **[1:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=105)** However, there's very little room to actually view all of that information in a data bar, and it's easy to make a data bar more complex than the space will allow.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=114)** I'm just going to go into my data set over on the left and drag the tax collected data and drop it in the value section.
>
> **[2:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=122)** Now you need to be careful with where you're dragging.
>
> **[2:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=125)** If you start moving over the table, you'll see that the chart data window disappears on you.
>
> **[2:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=130)** To get it back, just hover over the bar and it'll pop up again, and you can then drop it into the value section.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=135)** In this case, we're going to keep the sum function that comes along for the ride.
>
> **[2:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=139)** This is going to be adding up the individual daily tax collected records for each month.
>
> **[2:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=144)** So in this case, sum is appropriate.
>
> **[2:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=147)** I'll go ahead and click off of that to remove that window.
>
> **[2:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=149)** Now let's style the data bar.
>
> **[2:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=152)** Right-click on the bar and then choose chart properties.
>
> **[2:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=155)** We can choose a color palette.
>
> **[2:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=157)** It defaults to bright pastel.
>
> **[2:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=159)** I'm going to make mine a little less vibrant and just choose a gray scale option instead.
>
> **[2:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=165)** I'm also going to go to the border section and choose the none preset.
>
> **[2:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=170)** This will remove a gray box that would normally surround every bar by default.
>
> **[2:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=174)** We don't need all of that additional clutter in the table.
>
> **[2:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=177)** So with that selection made, I'll press okay, and now we can save the report and run it to see the data.
>
> **[3:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=184)** Let me type in a year of 2015 and press enter.
>
> **[3:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=188)** And here is our data bar that gives us a visualization of the tax collected for each month.
>
> **[3:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/data-bars?u=76281980&t=193)** So now we have a simple visual indicator of the relative values across each row, like a little bar chart that's incorporated right into the row of the table.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (2), function (1), default. (1)
> **CLI Commands:** make (5), find (1)
> **UI Navigation:** go to (2), right-click (1)
> **Analogies:** just like (2), similar to (1)
> **Warnings:** be careful (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Create a sparkline dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=0)** - [Instructor] There is one additional data visualization type that you can add to your tables, called a sparkline.
>
> **[0:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=6)** Sparklines are miniature charts that are typically used to show a change of values over time.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=12)** Think of a heartbeat monitor that you might see in a hospital and you'll have a good idea of what a sparkline is.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=18)** The difference between a sparkline and the other data visualization objects is that a sparkline does not work with a single value.
>
> **[0:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=25)** It requires multiple values that are grouped together.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=28)** I want to improve the year report that's used to filter the sales summary report.
>
> **[0:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=34)** Right next to each year, I can place a small sparkline graphic that'll give me a preview of the sales performance of each year before I dive into the details on each report.
>
> **[0:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=43)** So let's go back to the homepage of the portal and we'll open up that year report in the report builder.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=50)** The table that we have in this report is not going to work as it is right now, though, and let me show you why.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=56)** Let me select the table, then I will add a new column to the right.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=60)** Next I'll go to the insert tab, grab the sparkline tool, and click into the empty data cell, and that brings up this error message.
>
> **[1:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=67)** It says it cannot insert a multi-value item into a detailed cell.
>
> **[1:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=72)** Press the OK button, and we'll expand the dataset to see what the issue is.
>
> **[1:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=77)** This dataset is only pulling the year values out of the database.
>
> **[1:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=81)** There is no other data available to group or visualize, so I need to delete this table and the dataset and approach the problem again.
>
> **[1:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=89)** I'll right click on the dataset and choose delete and confirm that there.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=93)** Then in the table, I'll select the box in the upper left hand corner of the selection to select the table, and I'll tap delete on my keyboard to get rid of that.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=102)** So we're going to start all over again.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=104)** Let's go to the table section of the insert menu and choose table wizard.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=108)** I'll create a new dataset and press next and select the Wide World Importers shared data source.
>
> **[1:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=114)** Next, I will edit this query as text, and I'm going to paste in a SQL query that I have on my clipboard.
>
> **[2:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=121)** You'll find a copy of it in the course exercise files.
>
> **[2:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=124)** This is really similar to the query that's used in the sales summary report.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=128)** It's summing the amount, excluding tax columns, for each month and year in the customer transactions table.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=135)** You can run the query to see a sample of the data.
>
> **[2:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=138)** We have our transaction years, our transaction months, and a total sales amount for each month.
>
> **[2:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=144)** Press the next button to move into the setup where we create our table.
>
> **[2:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=149)** We'll take total sales and drag and drop it into values.
>
> **[2:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=153)** Transaction year will go into row groups.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=156)** We'll deal with the transaction month later on.
>
> **[2:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=159)** Go ahead and press next For this table, I do not need to see subtotals or grand totals, so I'll turn that off and press next, and finish to add the table into the report again.
>
> **[2:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=169)** Then I'll just make it a little bit wider so I can see our full column text there at the top.
>
> **[2:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=174)** Let's run the report to see it populated with data.
>
> **[2:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=177)** Okay, we're getting data, so that's good start.
>
> **[3:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=180)** I do need to re-enable the action on the year column to link to the sales summary report again, and I want to sort it in a reverse chronological order.
>
> **[3:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=189)** Let's go back into design view.
>
> **[3:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=191)** Let's enable the action first.
>
> **[3:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=193)** I'll click in the cell, then right click and open up the text box properties.
>
> **[3:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=199)** On the action page, I'll enable the action to go to a report.
>
> **[3:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=203)** Then click the browse button to specify the sales summary report, and press open.
>
> **[3:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=209)** Next, we need to connect the parameter.
>
> **[3:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=211)** I'll press the add button there.
>
> **[3:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=213)** The parameter name is going to be transaction year.
>
> **[3:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=216)** That's the name of the parameter in the sales summary report.
>
> **[3:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=219)** The value that we're passing to the parameter is also going to be transaction year, and that's the name of the data from this specific dataset.
>
> **[3:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=228)** I'll press the OK button, and that reconnects those two reports.
>
> **[3:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=232)** Now let's tackle the sorting.
>
> **[3:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=234)** Because we're grouping our data by year now, the sort option is in a slightly different location.
>
> **[4:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=240)** Before we were displaying all of the records from the dataset, and the sort option was found by selecting the table.
>
> **[4:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=246)** Go ahead and press the escape key to select that table.
>
> **[4:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=249)** Then go to the view tab, and open up the properties.
>
> **[4:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=252)** For the tablet's properties, I can open up the property pages and then finally, we would go to the sorting section here to add in the sort.
>
> **[4:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=260)** However, if you do that now, you're going to find that it actually has no effect on the order of the records that's displayed.
>
> **[4:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=267)** Go ahead and press the cancel button.
>
> **[4:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=270)** Instead, we need to change the sorting of the year groups.
>
> **[4:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=274)** You can be reminded that you're working with grouped records.
>
> **[4:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=277)** If you click in the cell, you'll see a parentheses icon over here in the selection box instead of previously where we had these three lines that indicated individual records.
>
> **[4:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=287)** So since we're working with group records now, I need to go into the grouping panel.
>
> **[4:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=291)** I'll turn that on in the view menu.
>
> **[4:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=293)** I'll also turn the properties box off while I'm right up here.
>
> **[4:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=296)** Now in the row groups, we have the transaction year group, and I can right click on that and choose group properties.
>
> **[5:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=303)** Here we have another option for sorting, and this is where we'll sort the transaction years.
>
> **[5:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=309)** The default is to sort them ascending A to Z, and I'll change this Z to A to put them in a reverse chronological sort.
>
> **[5:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=317)** I'll press OK, I'll turn off the grouping panel now, and we'll go back into the home tab and rerun the report to see it with data again.
>
> **[5:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=324)** Okay, now we have a year that is a hyperlink.
>
> **[5:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=327)** I can see my little pointer icon when I hover over it.
>
> **[5:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=330)** They're in a reverse chronological sort, and when I click on them, that takes me back to the sales summary report.
>
> **[5:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=336)** I'll click the back button to go back to that year report.
>
> **[5:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=339)** So at this point, our dataset is reconfigured and will now be able to support the addition of a sparkline visualization.
>
> **[5:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-sparkline-dataset?u=76281980&t=347)** So let's pick it up here in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), delete (3), finally, (1)
> **UI Navigation:** go to (5), select the (4), click on (3), drag and drop (1)
> **CLI Commands:** find (2), make (1)
> **Cross-References:** go back to (2), in the next (1)
> **Env Vars:** sql (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)

#### Display a sparkline
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=0)** - [Instructor] Now that our dataset is reconfigured to include grouped records, we can get back to the business of creating a sparkline.
>
> **[0:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=7)** I'll go back into Design View, and I need to create some new space in this table.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=12)** So I'll select it, right-click on the selection bar at the top and point to insert columns.
>
> **[0:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=17)** Now, because we're working with grouped records now instead of individual records, you'll notice that these options have changed.
>
> **[0:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=24)** I'll choose the option to create a new column to the "Inside Group - Right", and that adds a new column right there.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=30)** Then we'll go into the insert menu, click Sparkline, and then click into the data cell of that new column.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=37)** That brings up the Select Sparkline Type window.
>
> **[0:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=40)** There's a number of different sparkline types that we can choose from: column, line, area, shape, and range.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=47)** I'll stick with a standard column option here at the very top, and press okay.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=52)** That gets added into the table, and now we need to configure it.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=55)** Click on the sparkline graphic until you get to the chart data window.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=60)** Then I'll open up the dataset and I'll drag total sales into the values group.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=66)** I'll grab transaction month and we'll drag and drop that into category groups.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=71)** Click off of the report to dismiss that window and we can run the report to see it populated with data.
>
> **[1:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=76)** So now we have individual bars that represent each month within this sub-report; each bar represents a month's sales.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=84)** This can give us a sense of what month sales were up and which months they were down and which month sales were flat.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=90)** Now, one issue I have is that the 2016 data only has five months' worth of data, but the visualization is made wider to fill the space, which can make it difficult to scan down the sparklines to make comparisons.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=102)** So let's adjust some properties.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=104)** We'll go back into design view.
>
> **[1:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=106)** First, I want the data row to be taller so we can see more space for the bars.
>
> **[1:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=110)** I'll click over here and drag down to make that entire column a little taller, and I'm going to make this a little bit wider so have some more space for the graphic.
>
> **[1:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=118)** Then I can right-click on the sparkline and choose horizontal axis properties.
>
> **[2:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=124)** I'll turn on the option to align axes in and we'll align them to the tablets.
>
> **[2:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=130)** This will give all of the sparklines the same horizontal scale of 12 units, one for each month.
>
> **[2:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=136)** Press the okay button here and we'll do the same thing for the vertical axis.
>
> **[2:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=140)** I'll right-click, choose vertical axis properties, and we'll align the axes in the tablets.
>
> **[2:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=146)** Now each sparkline will represent the same range of values vertically, so they'll be easier to compare to one another.
>
> **[2:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=153)** Press the okay button and we'll take a look at the results again by running the report.
>
> **[2:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=157)** And there is a finished sparkline.
>
> **[2:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=159)** With a glance, you'll notice that there seems to be a trend where sales are down in February of each year and then trend up in the following months, and that looks like a pattern that happens every single year.
>
> **[2:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=170)** This also allows me to make a prediction for the next month in 2016; typically we see a downward or a flat trend for April, so the sparkline gives us a good impression on historical values.
>
> **[3:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/display-a-sparkline?u=76281980&t=183)** And to dig in for even more details, you just need to click on the year to move over to the sales summary report, or we can see the data in more depth.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **UI Navigation:** right-click (3), click on (2)
> **Code Keywords:** from: (1), let (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Maps
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=0)** - [Instructor] The last data visualization type is a map.
>
> **[0:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=3)** This will allow you to plot data from your database that includes a geographic component onto a map, so you can incorporate that into your reports.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=12)** Let's see how this works by creating a new paginated report.
>
> **[0:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=16)** I'll choose the option to start with a blank report.
>
> **[0:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=19)** And then, in the Insert tab of the ribbon, we'll find the options for map.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=23)** I'll use the map wizard for this.
>
> **[0:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=25)** The first step is to choose a source of the spatial data.
>
> **[0:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=29)** This is the type of map that you want to add your data to.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=32)** The first option is to choose from a map gallery.
>
> **[0:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=35)** And there's several pre-created maps down below to choose from.
>
> **[0:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=39)** Now, unfortunately, these are all focused on the United States, so if your data is international in scope, then these aren't going to work for you.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=47)** But click each map to give a little preview of what the data that contains is.
>
> **[0:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=51)** We have the USA by state, states exploded, and an inset map with Alaska and Hawaii broken out.
>
> **[0:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=58)** There's also individual states.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=60)** We can take a look at their counties.
>
> **[1:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=61)** So there's all the counties in Alabama, all the counties in California, and so on.
>
> **[1:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=67)** Now, if these gallery maps aren't going to work for you, you can choose to import your own data in the ESRI shapefile format.
>
> **[1:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=75)** Shapefiles are used in mapping applications and they include a table of attributes and a file that describes the boundaries of a region.
>
> **[1:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=83)** Many governmental organizations around the world provide shapefiles for their regions, so you might be able to find a shapefile that works for you to add your data to.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=93)** The last option is to pull spatial data from a SQL Server database if you have some stored.
>
> **[1:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=99)** I'll choose the option to use the state map with the inset here, the USA state by inset map, and press Next.
>
> **[1:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=107)** Then, on this screen, we can position the map on the screen.
>
> **[1:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=110)** I'm going to zoom out just a little bit to fit the whole country into the bounding box area.
>
> **[1:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=115)** On the bottom, we have the option to add in a Bing Maps layer to visualize the background.
>
> **[2:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=121)** Our options here are a roadmap, an aerial map that gives us an aerial photo in the background, or a hybrid map that combines the two.
>
> **[2:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=129)** I'll switch mine back to a roadmap, which I think is a little bit lighter and easier to read on top of.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=135)** Press the Next button to go to this step, where we can choose a visualization.
>
> **[2:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=139)** The first option here will just allow us to color the map using a color palette but not actually tie it to any data from the database.
>
> **[2:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=147)** The second and third options will allow us to color the map based on data or create a bubble map that places different-sized circles on the map relative to some value.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=158)** I'll choose the option to create a color analytical map and press Next.
>
> **[2:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=162)** Then we get to pull the data from our database to add to the map.
>
> **[2:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=166)** I'll create a new dataset using the radial button here at the bottom of the screen and press Next.
>
> **[2:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=172)** We'll use the same WideWorldImporters shared data source and press Next.
>
> **[2:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=177)** For the data, go into the Application schema and expand the tables.
>
> **[3:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=181)** I'm looking for the StateProvinces table.
>
> **[3:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=184)** I'll expand that open.
>
> **[3:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=186)** And to our query, we'll add the StateProvinceName and the SalesTerritory columns.
>
> **[3:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=191)** Both of those get added right over here.
>
> **[3:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=194)** You can run the query to see a sample of the data.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=196)** So we have our US state names here in the first column and the sales territory for the Wide World Importers company listed to the right.
>
> **[3:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=205)** Press the Next button.
>
> **[3:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=206)** On this screen, we need to join the data coming out of the WideWorldImporters database with the map's regional areas.
>
> **[3:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=214)** The rules here are the same as making a join between two data tables.
>
> **[3:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=217)** We need to find a field where the values are the same in both locations to create a join.
>
> **[3:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=223)** You can scroll through the spatial data coming from the map and the analytical data coming from the SQL Server database in the bottom window.
>
> **[3:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=231)** Because we're pulling information from two different sources, it's unlikely that there's going to be a perfect match between these two.
>
> **[3:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=238)** In a real-world scenario, you'd want to edit these files to make sure that the names matched up exactly in both locations.
>
> **[4:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=245)** But I think we can get it pretty close.
>
> **[4:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=248)** In the top area, place a checkmark next to the State Name field that's in the map or the spatial database.
>
> **[4:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=255)** Then, in the analytical field database, this is the data coming out of SQL Server, and I'll match that to the StateProvinceNames.
>
> **[4:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=263)** You'll see both columns highlight here.
>
> **[4:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=264)** We have the spatial data column and the analytical data coming from SQL Server.
>
> **[4:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=270)** Press the Next button.
>
> **[4:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=272)** This allows us to tell it what fields we want to visualize.
>
> **[4:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=275)** The dropdown menu lists all of the data from the original map file with hash symbols.
>
> **[4:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=280)** And at the bottom is the fields from SQL Server noted in brackets.
>
> **[4:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=284)** I'll choose the sales territory to visualize.
>
> **[4:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=288)** And we can choose a color palette.
>
> **[4:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=289)** I'll choose white to green.
>
> **[4:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=292)** Next, I'll turn on the option to display labels.
>
> **[4:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=295)** And the data field that I want to display is also going to be the sales territory.
>
> **[5:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=300)** Now, the map on the right is just a placeholder graphic, so don't try and make sense of the colors just yet.
>
> **[5:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=305)** Press the Finish button to add the map into the design of the report.
>
> **[5:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=309)** Now, just like with charts, there's a large number of properties that can be modified.
>
> **[5:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=313)** And I encourage you to dig in and see what you can find.
>
> **[5:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=317)** Maps can get very complex, with additional data layers and spatial joins and so on.
>
> **[5:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=323)** But for this course, I'm going to call this good enough.
>
> **[5:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=325)** Let's give the report a title.
>
> **[5:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=327)** I'll call it Sales Territory Regions.
>
> **[5:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=330)** I'll press Escape to deselect that title there.
>
> **[5:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=332)** And we'll also save the report to the report server.
>
> **[5:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=335)** I'll call it Sales Territory.
>
> **[5:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=338)** Now we can run the report to see the final map.
>
> **[5:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=341)** And here is a map that allows us to see the different sales territories around the country.
>
> **[5:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=345)** We have a number of states over here on the left that are all part of the Far West territory.
>
> **[5:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=349)** We have our Southwest territory states right there, Southeast, Great Lakes, Plains, and so on.
>
> **[5:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/maps?u=76281980&t=356)** So that's how you can incorporate a map into the design of your SQL Server reports.

> [!info]- Semantic Content
>
> **Env Vars:** sql (6), usa (2), esri (1)
> **CLI Commands:** find (4), make (2)
> **Code Keywords:** let (2), this. (1), from. (1), switch (1)
> **Definitions:** is a  (3)
> **UI Navigation:** go to (1), dropdown (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 7. Improve the Presentation

#### Include header and footer details
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=0)** - Most reports developed in Report Builder will likely be viewed through the web portal where users can scroll left or right or up and down in order to view information when it expands beyond the size of their monitor.
>
> **[0:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=12)** But special considerations need to be undertaken when reports need to be printed.
>
> **[0:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=17)** Header and footer sections in the report can place repeating information at the top and bottom of each page.
>
> **[0:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=24)** Let's take a look at this by creating a new blank paginated report.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=28)** Now, the first thing I want to do is make sure that my page is an exact six and a half inches wide.
>
> **[0:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=33)** That way I know it'll fit on a standard US letter size page with one inch margins on both sides.
>
> **[0:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=40)** You can either drag the right edge of the body of the report and take a look at the rulers here at the top.
>
> **[0:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=45)** You can get it kind of close.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=47)** A better option though is to go to the view menu and turn on the properties panel if it's not already on.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=52)** Then click into the middle of the report and it should switch you over to the body properties.
>
> **[0:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=58)** At the bottom, we can adjust the exact size, the width, and the height individually.
>
> **[1:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=63)** I'm going to select the width and change that to an exact six and a half.
>
> **[1:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=67)** Now the height is going to change dynamically as records get added into the report, so this one's going to be a little bit more variable and you don't need to pay attention to the height as much as the width.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=78)** Now, by default, all paginated reports come with a footer section already enabled.
>
> **[1:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=83)** If you look at the body of the report, there's this dotted line, and if you click below that, you'll notice that the property pain switches to show the page footer properties.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=93)** I'm going to add in a subtle background color fill.
>
> **[1:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=95)** I'll change it to a light gray, and that way we can see it on the final report.
>
> **[1:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=100)** The other properties deal with adding a border to the footer, and we have options to print on the first page and the last page.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=108)** By default, the footer section will print on the bottom of every page in the report, but you can selectively remove them from either the first or the last pages by changing these properties to false.
>
> **[1:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=118)** Inside of the footer area, we have a simple text box that displays something called a built-in field.
>
> **[2:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=125)** This one reads "and execution time".
>
> **[2:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=127)** This one will display the time and date the report is run.
>
> **[2:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=132)** If you look in the report data window on the far left and expand the built-in fields folder, you'll see we have lots of additional built-in fields to work with.
>
> **[2:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=139)** So here's the execution time one, but we also have ones for page name or page number or the report server URL.
>
> **[2:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=146)** These are all saved as variables and expressions that'll update when the report is compiled.
>
> **[2:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=153)** You can add in your own text boxes and other elements into the footer to make use of these additional built-in fields.
>
> **[2:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=159)** I'll come up to the insert tab, and in the report item section, I'll click on the text box item, then come down into the footer and drag out a box.
>
> **[2:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=168)** I want this text box to display a page count, something like page one of 10.
>
> **[2:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=174)** To do that, click off of the box to deselect it.
>
> **[2:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=177)** Then right click inside of it and choose "expression".
>
> **[3:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=181)** That'll open up the expression builder.
>
> **[3:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=183)** Here I can construct a text string using the built-in fields, that you can expand down in the categories.
>
> **[3:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=188)** You'll see them listed all right there.
>
> **[3:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=190)** I'll start with the literal text inside quotation marks page with a space after it.
>
> **[3:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=195)** Then I'll use the ampersand character, which will concatenate or join text strings together.
>
> **[3:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=201)** Then in the built-in fields, I'll double click page number.
>
> **[3:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=204)** That'll add it into the expression.
>
> **[3:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=206)** We'll concatenate that with another text string that says "space of space".
>
> **[3:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=212)** Next up, an ampersand to concatenate the total number of pages.
>
> **[3:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=217)** That will calculate the page number text when we run the report.
>
> **[3:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=221)** Press the okay button and that expression gets added into the text box.
>
> **[3:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=225)** Now, let's make sure that the two footer elements are the same size and font.
>
> **[3:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=229)** I'll click on the original one and I can see that it uses the Segoe UI 10 point font.
>
> **[3:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=234)** I want to make sure this other one matches, so I'll select it, change its font name.
>
> **[3:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=239)** I'll leave it at 10 point, and I'll make sure that it stays left aligned.
>
> **[4:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=242)** Let's also take the execution time and make sure that that is right aligned, which it is, and I'll use my arrow keys on my keyboard to nudge it further to the right.
>
> **[4:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=251)** Now everything that I just went over about the page footer also applies to the page header.
>
> **[4:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=257)** By default, reports don't contain a header though.
>
> **[4:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=259)** The title will only appear on the top of the very first page.
>
> **[4:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=263)** It's not going to be repeated on every page.
>
> **[4:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=265)** To add an actual header section that will repeat, go to the insert tab, and on the far right we have headers and footers.
>
> **[4:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=273)** I'll click "header" and then "add header".
>
> **[4:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=275)** Incidentally, if you already have headers and footers and wanted to remove them, you'd come to the same place.
>
> **[4:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=281)** You'll notice that the options have changed to "remove header" or "remove footer".
>
> **[4:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=285)** All right, I'll click off of that.
>
> **[4:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=286)** Then I'll click into the new header section to take a look at those properties.
>
> **[4:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=290)** I'll apply a light gray background color again just so we can see it in the printed report, and I'll change its height down to just a half inch.
>
> **[4:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=298)** Now I want to add in a simple bit of static text into the header.
>
> **[5:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=302)** Once again, I'll grab a text box element and then come down into the header and drag out a box and I'll type in "wide world importers".
>
> **[5:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=310)** I'll click off of it, then select the box again and make sure that the text is right aligned.
>
> **[5:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=315)** Now, in order to get this report to require multiple pages, when I view it, I need to add in an expanding data element to the layout.
>
> **[5:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=323)** I'll do that by inserting a quick table using the table wizard.
>
> **[5:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=326)** I'll use the warehouse stock shared dataset because it's convenient and press "next".
>
> **[5:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=331)** Then I'll add the stock group name and drag and drop it into row groups.
>
> **[5:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=337)** Stock item ID will go into values and stock item name will also go into values.
>
> **[5:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=342)** For the stock item ID aggregate function, I'll change that from some to count.
>
> **[5:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=349)** Go ahead and press the "next" button, "next" again and "finish" to create the table.
>
> **[5:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=353)** I'll just make it wider to fill up the whole width of the report.
>
> **[5:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=356)** Now we might as well add a title too.
>
> **[5:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=358)** I'll click there and change this to "stock list", and this is also a good time to save the report to the report server.
>
> **[6:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=364)** I'll name it "stock list" here as well.
>
> **[6:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=367)** Okay, let's run the report to see the changes.
>
> **[6:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=369)** We now have a header and a footer section at the top and bottom of the report.
>
> **[6:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=373)** Let me expand a couple of the stock list categories just to make the report a little bit taller, and then I can click the print layout button to see what it would look like printed to a piece of paper.
>
> **[6:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=384)** If you want to, you can zoom into the page using this widget over here on the left, I'll change it to 75% to make it a little bit larger.
>
> **[6:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=392)** So now we have the header section at the very top of the page that has the text wide world importers.
>
> **[6:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=397)** If I scroll down to the bottom of the page, I have a footer section that has the time and date that the report was executed, as well as a count of the number of pages.
>
> **[6:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=405)** So right now I'm looking at page one of eight.
>
> **[6:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=407)** You can click on the navigation buttons in the ribbon to peruse over to the second page where we have a second copy of the header at the top, and scroll down to the footer to see we're on page number two now.
>
> **[6:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=418)** So that's the header and the footer sections.
>
> **[7:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/include-header-and-footer-details?u=76281980&t=420)** They're most useful when viewing printed or PDF versions of your reports, as they'll repeat useful and consistent information at the top or bottom of every page.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), default, (3), switch (1), static (1), require (1)
> **CLI Commands:** make (10)
> **UI Navigation:** click on (3), go to (2), select the (2), scroll down (2), drag and drop (1)
> **Env Vars:** url (1), pdf (1)
> **Definitions:** is an  (1)
> **Speakers:** - most (1)

#### Add graphics and logos
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=0)** - [Instructor] It's easy to incorporate graphics into the design of your report.
>
> **[0:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=4)** These can be icons or logos that tie into the branding of your business.
>
> **[0:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=8)** Let's add a logo into the stock list in the header section so that it repeats at the top of every page.
>
> **[0:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=14)** I'll take my report back into design view.
>
> **[0:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=16)** Then on the insert tab in the report items group, you'll find the image control.
>
> **[0:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=21)** I'll select it and then come down into the header and drag out a rectangle.
>
> **[0:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=25)** That opens up the image properties window.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=27)** Now, the most important part of this screen is to locate the image that you want to display.
>
> **[0:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=33)** Using this dropdown menu, you have the option of embedding the image in the report, or you can link to an external image, or pull one from a database.
>
> **[0:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=42)** I'll choose the option to embed the image directly inside of the report.
>
> **[0:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=46)** Then click the import button to grab an image from your hard drive.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=50)** On my desktop, I'll find my exercise files for the course, and in the chapter seven folder, I have a logo.
>
> **[0:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=55)** However, it is a PNG file, so I need to change this dropdown menu in the bottom right to PNG in order to see it.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=62)** Okay, there it is.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=62)** I'll select it and press open and it gets added into the properties.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=66)** On the size page, we can resize the logo, but the default behavior is to fit the image proportionally within the bounding box that you originally dragged out in the report.
>
> **[1:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=77)** That's going to give you the most flexibility in adjusting the layout, so I'll leave it as is.
>
> **[1:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=81)** We also have the standard visibility, action, and border options that we've seen with most of the other objects that we've added into our reports throughout this course.
>
> **[1:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=91)** I'll just leave all of those as is and press okay to add in the new logo to the header of the report.
>
> **[1:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=96)** If you need to, you can resize the logo using the handles around the bounding box.
>
> **[1:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=100)** You can make it smaller if you need to or make it much larger.
>
> **[1:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=103)** I'll go ahead and make it just a little bit bigger like that.
>
> **[1:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=106)** Now this bit of text over here on the right is redundant, so I'll just select it and press delete on my keyboard to get rid of it.
>
> **[1:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=112)** Okay, I will save the changes to my design and we'll run the report to see the final layout.
>
> **[1:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=117)** Let me go ahead and turn off the print layout just so we can see the logo there nice and big.
>
> **[2:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=121)** And there it is in the header section of the report.
>
> **[2:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=124)** If I expand a couple of the stock list items, we can make the report a lot taller.
>
> **[2:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=129)** I'll view it in the print layout and I'll see that the logo appears at the top of the first page, and if I page through the report, you'll see it appears at the top of every page because it's in the header.
>
> **[2:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-graphics-and-logos?u=76281980&t=139)** So using logos and other images, you can start to add critical branding elements into the design of your reports.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), find (2)
> **Code Keywords:** let (2), delete (1)
> **Env Vars:** png (2)
> **UI Navigation:** dropdown (2)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Align page elements
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/align-page-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/align-page-elements?u=76281980&t=0)** - [Instructor] As you develop your reports, you'll add a number of different objects to the layout, tables, text boxes, images, charts, and more.
>
> **[0:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/align-page-elements?u=76281980&t=8)** In order to make sure everything is lined up, you'll turn to the options in the Align menu.
>
> **[0:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/align-page-elements?u=76281980&t=13)** Now, these options only show up if you have two or more objects selected.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/align-page-elements?u=76281980&t=18)** Let me expand my report's body just a bit by clicking on the gray bar that appears here in the left-hand ruler on the left, and I'll drag it open a little bit to give myself some more room below our table.
>
> **[0:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/align-page-elements?u=76281980&t=29)** Then I'll go to the Insert tab of the ribbon and I'll grab a new rectangle object, and I'll come down and just drag out a rectangle.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/align-page-elements?u=76281980&t=36)** Then I'll go back to the Insert tab and we'll grab one more rectangle, and I'll drag out a smaller one over here to the right.
>
> **[0:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/align-page-elements?u=76281980&t=42)** Now, I'll drag a box around both of these rectangles to select both of them at the same time.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/align-page-elements?u=76281980&t=47)** When you have two objects selected, you'll notice on the Home tab of the ribbon that the Align menu is now active.
>
> **[0:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/align-page-elements?u=76281980&t=53)** We have a lot of different options inside of there.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/align-page-elements?u=76281980&t=56)** If I say Align Top, then the second box will move up to line up with the top of the first box.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/align-page-elements?u=76281980&t=62)** Press Ctrl Z on your keyboard to undo that change, and this time I'll choose Align Bottom.
>
> **[1:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/align-page-elements?u=76281980&t=67)** You'll notice that the second box moves up to align their bottoms, and no surprise, if I undo that and say Align Middle, then both boxes will be lined up along their center line.
>
> **[1:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/align-page-elements?u=76281980&t=77)** Now, we have similar options to align horizontally, left center and right, and we also have at the top of the menu options to move the elements either to the front or send them to the back.
>
> **[1:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/align-page-elements?u=76281980&t=89)** This can be helpful if you have elements on top of each other in your design, and you want to adjust which ones are in front or behind the other elements.
>
> **[1:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/align-page-elements?u=76281980&t=97)** So, with these alignment options, you can make sure that your layouts are pixel-perfect and neatly arranged.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** let (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Insert page breaks
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=0)** - [Instructor] In a printed report, you really have no way of predicting how many records the report will display and how much will actually fit on the page.
>
> **[0:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=8)** Usually the report will render to fit as many records on the page as it can and then start again at the top of the next page.
>
> **[0:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=15)** Controlling where your page breaks occur can be a bit of a challenge in a report layout that by definition needs to remain flexible.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=23)** Now with that said, there are three places where you can add page breaks in the report structure to see if you can impose your own sense of structure on the printed output.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=32)** The first is on a data region or a table.
>
> **[0:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=35)** I'll go ahead and select the table that we have and either press the escape key on your keyboard or click in the selector box in the upper left hand corner to get to the tablets properties.
>
> **[0:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=44)** Then I'll open up the properties panel, and here we have two options to either add a page break before the tablets or a page break after.
>
> **[0:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=53)** But these are going to be breaks either before or after the entire table.
>
> **[0:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=57)** It's not going to help us control when the page breaks within the table at specific record points.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=62)** Go ahead and press the cancel button to back out of that.
>
> **[1:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=65)** The next place that you can add a page break is on a rectangle object.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=69)** I'll go to the insert menu and I'll grab a new rectangle.
>
> **[1:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=72)** Just drag and drop one here at the bottom of the report.
>
> **[1:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=75)** Then right click on the rectangle and choose rectangle properties.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=79)** Here we have the same options to add a page break before the rectangle or a page break after the rectangle.
>
> **[1:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=85)** Now, this could be useful in certain situations if you're using rectangles to mark off different areas of the layout, but again, it doesn't really help us when the bulk of the report is defined by the structure of the table.
>
> **[1:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=97)** Okay, so let's press the cancel button on this and I'll press the undo button in the upper left hand corner to get rid of that rectangle.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=104)** So let's take a look at the table again.
>
> **[1:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=106)** The only way to add specific page breaks to a table is when you have data groups.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=111)** I'll go to the view menu and turn on the grouping panel and we'll see that we do have a row group for this table on the stock group name field.
>
> **[2:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=120)** I'll right click that field name and choose group properties.
>
> **[2:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=123)** Here we have a specific page for page breaks.
>
> **[2:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=127)** This will give us the option to add a page break between each instance of a group.
>
> **[2:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=132)** This means that every group will start at the top of its own page.
>
> **[2:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=136)** You can also add additional breaks at the start or end of the group as well.
>
> **[2:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=140)** So let's add a break between each instance and press okay.
>
> **[2:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=144)** We can see how that affects the printed output.
>
> **[2:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=147)** Now, before I do that, I do want to make a couple of additional changes to the behavior of the report.
>
> **[2:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=152)** Right now you have to click the plus icons to expand each group name.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=156)** And I'd rather them to be fully expanded right from the start.
>
> **[2:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=160)** Right click on the details row in the row group section and choose group properties.
>
> **[2:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=166)** Then in the visibility section we have an option to show when the report is initially run.
>
> **[2:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=172)** This will make sure that all of the groups are fully expanded right from the start.
>
> **[2:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=176)** I'll press the okay button to save that change, and now I can turn off the grouping panel.
>
> **[3:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=181)** Next, I want to make a few minor adjustments to the layout of the report.
>
> **[3:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=184)** Specifically, I want to change the margins.
>
> **[3:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=187)** The default is one inch, and that's pretty generous for most printers today.
>
> **[3:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=192)** To change the margins, we need to find the properties for the report itself.
>
> **[3:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=197)** The easiest way to do that is to right click anywhere outside of the report in this dark gray region.
>
> **[3:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=203)** I'll right click there and I have the option for report properties.
>
> **[3:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=207)** This is where you can change the paper size and the orientation from portrait to landscape.
>
> **[3:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=212)** Scroll down, you'll find the margin section, and I'll change these all down to just half an inch instead of one inch.
>
> **[3:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=219)** Press the okay button and now we can adjust the width of our report area up to seven and a half inches.
>
> **[3:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=224)** I'll click into the body section, find the size properties, and I'll change the width there to seven and a half.
>
> **[3:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=231)** That gives me a little bit more room and I can adjust the size of my table.
>
> **[3:54](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=234)** I'll just select it and press escape, and then make it wider.
>
> **[3:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=238)** I'll also adjust the width of some of these columns.
>
> **[4:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=240)** I don't need to see the stock item ID so much.
>
> **[4:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=242)** The stock group name can get a little narrower.
>
> **[4:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=244)** And I'll give more space to the stock item name.
>
> **[4:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=247)** Okay, so that's a number of changes that we made.
>
> **[4:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=249)** Let's save those changes and I'll go to the home tab and we'll take a look at that report with data.
>
> **[4:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=256)** Now, when you page through the report, either in the web view or in the print layout mode that I'm in, you can see that each stock item group starts at the top of a page.
>
> **[4:25](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=265)** Here we have the clothing items with all of those listed there.
>
> **[4:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=268)** As I use the next button and the navigation menu, I could see I have additional clothing items on page number two, but the page ends with a lot of blank space at the bottom.
>
> **[4:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=277)** Paging over to number three, we have computing novelties that starts on its own fresh page, and we can page through all of those items.
>
> **[4:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=284)** When that ends, we have a lot of blank space on page number five at the bottom.
>
> **[4:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=288)** And pressing next we'll start for a footwear at its own page.
>
> **[4:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/insert-page-breaks?u=76281980&t=292)** So with page breaks, you can get a little bit of control over how records wrap from one page to the next, but only when using groups in your tables.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (3), click on (2), select the (1), drag and drop (1), scroll down (1)
> **CLI Commands:** make (4), find (3)
> **Code Keywords:** let (4)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### 8. Build a Web Portal Dashboard

#### Add a key performance indicator (KPI)
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=0)** - [Instructor] In addition to paginated reports, the web portal can contain a couple of other types of useful items.
>
> **[0:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=6)** One of them is called a KPI, or a key performance indicator.
>
> **[0:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=11)** KPIs are those single bits of information that will instantly tell you something useful about the state of your business, and you can place them right here in the top of the main page of your portal so that the number is always front and center.
>
> **[0:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=24)** Here's an example of a KPI from my own experience.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=28)** When I was in college, I managed a couple of movie theaters.
>
> **[0:31](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=31)** One of the metrics that we regularly kept track of was the hourly and daily per cap, or per capita income.
>
> **[0:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=39)** This was a number that we got by taking the amount of money received at the concession stand and dividing it by the number of tickets sold.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=47)** That would give us the average amount that each moviegoer spent on popcorn and drinks.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=52)** With this one number in hand, I could make decisions about how to run the theater for the day, where to place my staff, and how much popcorn to make for the next show.
>
> **[1:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=61)** The theaters per cap was instrumental in helping us run things smoothly.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=66)** That is our key performance indicator.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=69)** I'm almost positive that you have the same kind of metrics that provide insight into your own business operations.
>
> **[1:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=76)** To add a KPI to the portal, you'll just come to the New menu and choose KPI from the list.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=82)** This green box is an example of what the KPI will look like on the portal, and everything else on the screen are the properties that will configure it.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=90)** Right now, everything has been populated with placeholder values that are going to be generated randomly, so yours will look a little different from mine.
>
> **[1:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=99)** One way to create a KPI is to manually set the values that you want to display.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=104)** In other words, your KPIs do not have to be connected to a database.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=108)** They can just be hard-coded with these static values that you want to see on the portal.
>
> **[1:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=113)** That's what all of these boxes that say Set manually mean.
>
> **[1:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=116)** But you have the option of using a query to pull information from the database so that the KPI will update dynamically, and we'll look at that in a moment.
>
> **[2:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=125)** For now, let's just plug in some manual values.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=128)** I'll give this KPI a name.
>
> **[2:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=130)** I'll call it Safety Report.
>
> **[2:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=133)** We can use this to display information about accidents or injuries in the Wide World Importers warehouse.
>
> **[2:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=139)** In fact, I'll just type that in for the description.
>
> **[2:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=144)** For the value, I'll type in 7 incidents.
>
> **[2:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=148)** I'll leave the goal not set.
>
> **[2:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=150)** Obviously, the goal is zero incidents.
>
> **[2:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=153)** The status, I'll change from good to bad.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=156)** That'll change the color to red.
>
> **[2:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=158)** You can also set it to neutral if you wanted to see a yellow color instead.
>
> **[2:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=162)** The trend set is a semicolon-separated list of values that's used to generate the little chart.
>
> **[2:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=168)** I'll type it in couple of new values to represent the past few months.
>
> **[2:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=172)** Below that, we can change the visualization type.
>
> **[2:55](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=175)** You can turn it off altogether, use a bar chart, a line chart, a step chart, and an area chart.
>
> **[3:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=182)** I like the look of the step chart for this.
>
> **[3:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=185)** Below that, we have an option for related content.
>
> **[3:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=188)** Our options are either none or custom URL, so we can link to an external webpage when a user clicks on our KPI.
>
> **[3:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=194)** I'll just leave it set to none.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=196)** Then I need to use scroll down and click the Create button to add that to the top of my portal.
>
> **[3:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=201)** And there is our new Safety Report KPI.
>
> **[3:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=204)** If you want to modify it, for example, if someone just backed a forklift into a wall, then hover your mouse over it and click the three dots menu and choose Manage.
>
> **[3:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=214)** That'll bring you right back here to this page.
>
> **[3:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=216)** Then we can just make any changes that we need, I'll change it up to 8 incidents, come down to the bottom and click Apply, and then head back to the homepage to see the updated KPI at the top.
>
> **[3:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/add-a-key-performance-indicator-kpi?u=76281980&t=227)** So that's how you can add an easy-to-read KPI to the front page of the portal so that everyone that visits will immediately know the current status of your operation's most important metrics.

> [!info]- Semantic Content
>
> **Env Vars:** kpi (12), url (1)
> **Code Keywords:** static (1), let (1), type. (1), this. (1)
> **Definitions:** is called (1), is an  (1), in other words (1), is a  (1)
> **CLI Commands:** make (3)
> **UI Navigation:** scroll down (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Create a dynamic KPI
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=0)** - [Instructor] If you use a query to pull data from a database, your KPIs can update automatically.
>
> **[0:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=6)** In order to create a dynamic KPI that displays up-to-date information, you first need to create a dataset.
>
> **[0:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=13)** We'll create a new dataset using the menu here on the portal, and that'll open up the Report Builder.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=18)** I'll choose the WideWorldImporters shared data source, and that'll drop me into the Query Designer.
>
> **[0:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=24)** Now, I already have a query saved on my clipboard from the course exercise files.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=28)** I'll just paste it up here at the top and click the run button so we can see the data that it returns.
>
> **[0:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=33)** This query is summing up the sales for each month in 2016.
>
> **[0:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=37)** It also creates two additional columns that aren't present in the database, but they're each generating some static numbers.
>
> **[0:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=44)** One, for the KPI status, and they all say number one, and one for the KPI goal, which is set to 50 million.
>
> **[0:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=52)** This represents the sales target that we want to hit by the end of the year.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=56)** I'll click the Save icon in the upper left hand corner, and we'll save this to our portal.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=60)** I'll call it KPI_2016. (keyboard clicking) Once that's saved, we can close the Report Builder and return back to the portal.
>
> **[1:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=68)** Now, we can create the key performance indicator.
>
> **[1:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=71)** Once again, I'll click the New menu and choose KPI.
>
> **[1:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=75)** I'll name this 2016 Sales. (keyboard clicking) For the Value, instead of setting it manually, I'll use the dropdown menu and choose a Dataset field.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=84)** Then on the right, I can click the ellipsis button to choose the dataset.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=88)** I'll pull information from the new KPI_2016 dataset.
>
> **[1:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=92)** Then I'll choose total sales, and for the aggregation, I'll change it to sum.
>
> **[1:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=98)** That'll add up the total sales across the year.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=102)** Now, my screen is a little bit large, so I need to scroll down here and press the OK button to get back to the main page.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=108)** So, that updates the display, but I can see that this number is kind of large.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=111)** So, in the value format option, I'll change it to Abbreviated currency.
>
> **[1:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=117)** That'll update the display to be a little clearer.
>
> **[2:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=120)** We can also change the currency type if you'd like, and I'll leave mine set to US dollars.
>
> **[2:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=125)** For the goal, we'll pull that from the dataset as well.
>
> **[2:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=128)** Once again, I'll click the Build button over here on the right, choose KPI_2016.
>
> **[2:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=133)** This will be our KPI goal column.
>
> **[2:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=136)** And for the aggregation, I'll just choose the first value in the column, which is going to be 50 million.
>
> **[2:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=142)** Once again, I'll just scroll down here and say, okay, and that updates the report.
>
> **[2:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=146)** For the status, we'll grab that from the dataset.
>
> **[2:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=149)** I'll build it again, the same dataset.
>
> **[2:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=152)** This will come out of the KPIstatus column, and once again, we'll just choose the first value.
>
> **[2:37](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=157)** I'll say, okay, and that updates the properties as well.
>
> **[2:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=160)** Now, if you get creative with your dataset queries, you can make this number dynamic.
>
> **[2:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=164)** Just keep in mind that the status needs to either return a one for good, a zero for neutral, or a negative one for bad.
>
> **[2:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=172)** For the Trend set, we'll pull that out of our dataset.
>
> **[2:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=177)** This time I'll use the TotalSales column, but it's not going to have any aggregation.
>
> **[3:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=182)** We'll just use every value in the column to generate the little chart.
>
> **[3:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=185)** Scroll down and press okay, and it updates the properties.
>
> **[3:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=188)** Then you can choose your visualization style for the chart.
>
> **[3:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=191)** I'm going to leave mine set to the bar graph here.
>
> **[3:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=195)** And finally, you have the option to add a link to the KPI using the Related content menu.
>
> **[3:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=199)** I'll just leave mine set to none.
>
> **[3:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=201)** Press the Create button, and that new KPI gets added into our portal.
>
> **[3:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=206)** So, now I have a quick reminder of the sales to date for 2016, a small reminder of how far we have until we meet the yearly sales goal.
>
> **[3:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=215)** We also have a little chart that gives me an idea of the sales performance over the past few months, and if I click on it, it'll give me that same information presented a lot larger.
>
> **[3:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=225)** Let's go ahead and close that and return back to the main portal.
>
> **[3:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-a-dynamic-kpi?u=76281980&t=228)** Because this key performance indicator is being fed by a query, the information that it displays will update with the current data from the database whenever you refresh the portal.

> [!info]- Semantic Content
>
> **Env Vars:** kpi (7), kpi_2016 (3)
> **UI Navigation:** scroll down (3), dropdown (1), click on (1)
> **Code Keywords:** static (1), finally, (1), let (1)
> **Non-Speech:** (keyboard clicking) (2)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)

#### Organize the web portal with folders
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=0)** - [Instructor] We've added a number of reports to the report server, and the web portal is quickly filling up.
>
> **[0:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=5)** You can bring some organization to the portal by placing items inside of folders.
>
> **[0:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=10)** To create one, come to the new menu and choose folder from the popup.
>
> **[0:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=14)** I'll create a folder for some of my data items.
>
> **[0:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=17)** When I press enter, the web browser will update, and at the very top, you'll see the new data folder has appeared.
>
> **[0:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=24)** Let's create another folder for some warehouse items.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=28)** Then, I can go into the data folder and create additional subfolders inside of here.
>
> **[0:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=33)** I'll create one for datasets.
>
> **[0:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=35)** and one more for data sources.
>
> **[0:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=39)** Now I can switch back to the homepage using the breadcrumb navigation at the very top, and here is my folders up at the top, and we can start putting different elements into them.
>
> **[0:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=48)** I'll scroll down to the very bottom of the portal where I'll find the data sets and data sources, and I want to move them into the correct data folder.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=56)** Hover your mouse over any of these, and you'll see the more info button there.
>
> **[1:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=60)** Then I can choose move, and select the data folder, and for this one, I'll move that into datasets.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=66)** I'll select that, and it moves it into the folder.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=69)** Let me do the same thing with the warehouse stock dataset.
>
> **[1:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=72)** We'll move that into the data folder, then datasets, and select that.
>
> **[1:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=76)** And finally, the WideWorldImporters data source will get moved into data, data sources, and I'll select that.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=84)** Next, I want to move a couple of my reports into the warehouse folder.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=88)** That'll be the warehouse matrix report.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=90)** We'll move that into the warehouse folder, select that.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=93)** And the cold room temperatures report.
>
> **[1:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=95)** We'll move that into the warehouse folder as well.
>
> **[1:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=99)** Okay, so that starts to bring some organization to my portal.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=102)** If I want to get to those reports, I'll go into the warehouse folder, and there are those two reports.
>
> **[1:46](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=106)** I can go back to the home menu.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=108)** I can go into data, and find either my data sources, or my datasets.
>
> **[1:52](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=112)** Now, once your folder structure is in place and everything is organized into those subfolders, you can also use the search box at the very top of the interface to quickly find the items that you're looking for.
>
> **[2:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=123)** For instance, I'll do a search for datasets, and press enter.
>
> **[2:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=127)** That'll immediately show me the nested datasets folder, and I can click on it to get right in there and work with my datasets.
>
> **[2:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/organize-the-web-portal-with-folders?u=76281980&t=135)** So, by thinking through your folder organization structure, and giving your reports clear names, you can make it easier to find the items that you're looking for on the portal.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), switch (1), finally, (1), interface (1), for. (1)
> **CLI Commands:** find (4), make (1)
> **UI Navigation:** scroll down (1), select the (1), click on (1)
> **Cross-References:** go back to (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Customize the web portal branding
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=0)** - [Adam] The Report Server web portal can be customized to display your own branding and colors in order to better tie in to your company or organization.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=9)** You can change these site colors and upload a logo that'll appear in the upper left-hand corner through the Settings menu.
>
> **[0:15](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=15)** You'll access that through this little gear icon.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=18)** Click Site Settings, and then switch over to the Branding tab.
>
> **[0:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=21)** Here, you can upload a brand package that will restyle the entire site.
>
> **[0:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=26)** So what goes into a brand package?
>
> **[0:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=29)** In the Chapter 8 folder of the Exercise Files, I've put together an example brand package that we can look at.
>
> **[0:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=36)** The actual file that we'll upload, the brand package itself, is nothing more than a standard zip file that contains two or three files.
>
> **[0:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=44)** The first file that this zip contains is called metadata.xml.
>
> **[0:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=48)** Let me right click on that, and we'll open it in Notepad to see what it contains.
>
> **[0:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=53)** This file has a couple of items that you can configure, most importantly is the name.
>
> **[0:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=58)** You can name your brand package anything that you'd like.
>
> **[1:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=61)** Below, it describes the path to two other resources.
>
> **[1:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=65)** colors.json is required, and it's the file that'll define our custom colors.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=70)** The logo.png file is optional.
>
> **[1:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=74)** If you wanted to include a custom logo, keep this line in metadata.xml.
>
> **[1:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=78)** If you're not using a logo though, you'll remove this line.
>
> **[1:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=81)** The only other thing you might need to change is the path in the SystemResourcesPackage on line number 2.
>
> **[1:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=88)** If your report server uses secure connections over HTTPS, then make sure this path also says HTTPS.
>
> **[1:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=96)** If you're not using certificates, then leave this HTTP.
>
> **[1:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=100)** Everything else in this file, leave it as it is.
>
> **[1:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=102)** All right, let's close that down.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=104)** The other required file in the brand package is colors.json.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=108)** Let's right click that and open that as well.
>
> **[1:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=111)** This file needs to have the exact same name that you used in the metadata file.
>
> **[1:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=116)** Here, you'll go through and put in new colors for each interface element using the hexadecimal color codes used on the web.
>
> **[2:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=123)** This part will likely take some trial and error to find where exactly these colors are being applied in the interface.
>
> **[2:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=129)** And you can consult a website like [0to255.com](https://0to255.com) to help you identify colors and find different tints that coordinate.
>
> **[2:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=140)** Generally, the colors in the JSON file are grouped together into functional regions in the interface.
>
> **[2:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=146)** The primary section is for buttons and hover colors.
>
> **[2:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=150)** Secondary is the title bar, search bar, and the left-hand menus.
>
> **[2:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=155)** Neutral primary is for the home and report area backgrounds.
>
> **[2:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=160)** Neutral secondary is for text boxes and folder options.
>
> **[2:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=165)** There is a neutral tertiary section, which is used for the site settings backgrounds.
>
> **[2:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=170)** And there's specific sections for danger, warning, and success messages, as well as the colors used for your key performance indicators.
>
> **[2:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=179)** So that's all what goes into the colors.json file.
>
> **[3:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=183)** Finally, you can include an optional logo.png file.
>
> **[3:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=187)** This is a Portable Network Graphic file format image.
>
> **[3:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=190)** You can play around with the size.
>
> **[3:11](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=191)** I found that something in the range of 400 by 60 pixels works pretty well.
>
> **[3:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=196)** The image that you include will get resized to fit the space on users' screens, so it doesn't have to be exact.
>
> **[3:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=203)** Once you've created all of the required files, you simply zip them up into a compressed folder, and name it whatever you'd like.
>
> **[3:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=210)** Then, we'll return into the Report Server portal.
>
> **[3:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=213)** Back in the options menu on the Branding tab, click the Upload brand package button.
>
> **[3:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=218)** And then we'll browse out to the computer, and we'll grab that zip file that we were just looking at.
>
> **[3:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=224)** I'll select it and press Open, and that'll apply our branding into the portal.
>
> **[3:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=228)** And you'll see it immediately updates.
>
> **[3:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=231)** So now, the portal takes a drastically different look, and we have a nice new logo up here in the upper left-hand corner.
>
> **[3:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=237)** Now, if you ever wanted to delete the custom package, simply press the remove button over here on the right, and it'll return back to the default color scheme.
>
> **[4:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/customize-the-web-portal-branding?u=76281980&t=246)** So that's how you create a branded web portal that's been customized to reflect your organization's color and style.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), interface (3), switch (1), finally, (1), delete (1)
> **File Paths:** colors.json (3), metadata.xml (2)
> **Env Vars:** https (2), http (1), json (1)
> **CLI Commands:** find (2), make (1)
> **Exercise Files:** zip file (2), exercise files (1)
> **Definitions:** is a  (2), is called (1)
> **URLs:** [0to255.com](https://0to255.com) (1)
> **UI Navigation:** click on (1)

#### Create an SSRS user account
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=0)** - [Presenter] At the moment, anyone that wants to view a paginated report needs to log into the server and locate the one that they want.
>
> **[0:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=7)** To make things easier.
>
> **[0:08](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=8)** Users can subscribe to a report and have it delivered right to their email inbox or export it to a file share on a recurring schedule.
>
> **[0:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=16)** I'd like that to happen with the People Report.
>
> **[0:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=19)** To set this up, click the more info button for the People Report and Choose Manage.
>
> **[0:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=24)** Then switch over to the subscriptions page on the left.
>
> **[0:27](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=27)** If you have subscriptions already created, you'd see them listed here and you can manage them from the list.
>
> **[0:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=33)** To create a new subscription.
>
> **[0:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=34)** Press the button along the top and you'll probably get this error message.
>
> **[0:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=38)** It says that a subscription can't be created because the credentials are not stored.
>
> **[0:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=43)** So what does this mean?
>
> **[0:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=45)** Well, every time that we've run a report, it uses the credentials of the logged in user to fetch the data from SQL Server because a subscription will require the report server to go and collect data on its own.
>
> **[0:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=58)** Sometimes in the middle of the night when no users are awake, then it needs to have its own login account to use.
>
> **[1:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=64)** So before we can create a subscription, we need to give Report Server a login account.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=70)** Now, it's likely that you'll have to work with your database administrator to set this up and to ensure that your new login account meets the security requirements of your organization.
>
> **[1:20](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=80)** What I'm about to do probably isn't going to pass an audit on a live production server, but just to demonstrate the process, I'll switch over to Management Studio.
>
> **[1:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=89)** First, you'll log into the server as an administrator.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=93)** Then open up the security folder, right click Logins and choose new login.
>
> **[1:39](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=99)** I'll give the account a name.
>
> **[1:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=101)** I'll call it SSRS bot.
>
> **[1:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=103)** Then we'll give them a new password.
>
> **[1:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=105)** I'll type that in here, and I'll turn off the option to enforce the password policy.
>
> **[1:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=110)** Then I'll switch to the user mappings page.
>
> **[1:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=113)** This is where we can give SSRS bot access to the Wide World Importers database.
>
> **[1:58](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=118)** They only need to be able to read data from the tables.
>
> **[2:01](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=121)** So I'll choose the DB data reader role.
>
> **[2:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=124)** Press OK to create that user account.
>
> **[2:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=127)** In order for subscriptions to process on a regular schedule, the SQL server agent needs to be running.
>
> **[2:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=133)** So take a look in the Object Explorer and make sure that the SQL Server agent has a green icon.
>
> **[2:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=138)** If it doesn't, just right click on it and choose Start.
>
> **[2:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=141)** Now, there's one more change that you might need to make, and that's to enable SQL Server authentication.
>
> **[2:26](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=146)** Right click the server name at the top and choose properties.
>
> **[2:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=150)** Then switch over to the security page and enable SQL Server and Windows authentication modes.
>
> **[2:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=156)** Press the OK button and you'll be prompted to restart the server.
>
> **[2:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=160)** So I'll just right click on it and choose Restart.
>
> **[2:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=163)** We'll say, yes, yes again, and yes, one more time.
>
> **[2:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=167)** Once the server restarts and you see the Green Arrow icon, you're good to go.
>
> **[2:51](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=171)** So this is just a quick and dirty way to get a new user account created, but again, your security arrangement might require a different solution.
>
> **[2:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=179)** Talk to your administrators to be sure before you make these kinds of changes on a production server.
>
> **[3:04](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/create-an-ssrs-user-account?u=76281980&t=184)** Now we can go back into the report portal.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (4), require (2), pass (1)
> **Env Vars:** sql (5), ssrs (2)
> **CLI Commands:** make (4)
> **UI Navigation:** click on (2), switch to (1)
> **Speakers:** - [presenter] (1)

#### Subscribe to a report
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=0)** - [Instructor] Now that we've created a login account that the report server can use, we can get back to work setting up the subscription for the people report.
>
> **[0:07](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=7)** First, I need to see what data source this report is using, and make sure that the report server can access it.
>
> **[0:14](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=14)** You can get that information from the data sources page.
>
> **[0:17](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=17)** This report is using a custom embedded data source, and I can see the connection information right here.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=23)** If it were using a shared data source, you would have to browse out to the portal and modify the properties there.
>
> **[0:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=30)** Since this is embedded though, I have access to the credential properties right down below.
>
> **[0:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=35)** This is what Report Server is using to log into the SQL Server database to get the data.
>
> **[0:41](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=41)** Right now, it's using the credentials of the person accessing the report.
>
> **[0:45](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=45)** We need to change this to use the following credentials, change it to a database username and password, and then put in the credentials that we just created for SSRS-Bot.
>
> **[0:56](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=56)** Fill in the username and password, and then scroll down below and press the test connection button.
>
> **[1:02](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=62)** If it connects successfully, we are good to go.
>
> **[1:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=65)** Press the save button to save those credentials to the new data source.
>
> **[1:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=69)** Then, we can switch back to the subscriptions page.
>
> **[1:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=72)** At this point, I'll click the new subscription button, and we get farther than we did before, so that's a good sign that things are working.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=79)** I'll give the subscription a description called Weekly Report.
>
> **[1:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=84)** You have the option to create a single subscription or to create a subscription for a number of people based off of a dataset.
>
> **[1:30](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=90)** I'll just generate and deliver one report with a standard subscription.
>
> **[1:34](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=94)** Then, you can set the schedule.
>
> **[1:36](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=96)** The default is to send it out at 2:00 AM every morning.
>
> **[1:40](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=100)** You can click the edit schedule button and type in your preferred schedule.
>
> **[1:44](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=104)** I'll just choose to do it every weekday, and press apply.
>
> **[1:48](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=108)** Finally, you have the delivery method.
>
> **[1:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=110)** If your report server was set up with its own company email account, you'll have the option of delivering these subscriptions to recipients via email.
>
> **[1:59](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=119)** Otherwise, you can export the reports to a Windows file share.
>
> **[2:03](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=123)** You'll need the UNC file path for the share, and any access credentials that Report Server needs to write those files.
>
> **[2:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=130)** I'll type in a path on my computer.
>
> **[2:13](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=133)** It would look like \\Windows10-PC\ and I'll put everything in a folder called Reports.
>
> **[2:21](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=141)** You can export files in a variety of formats.
>
> **[2:24](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=144)** I'll choose to export them as a PDF file, and then I can use the Windows credentials to write those files onto the system, and I'll just put in my own user account.
>
> **[2:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=153)** At the very bottom, you can choose whether you want to overwrite existing files or create incremented file names, if you wanted to maintain an archive.
>
> **[2:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=162)** Once everything is configured, press the create subscription button to start automatically publishing reports and sending them out to users.
>
> **[2:49](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=169)** This will return you to the page where you can manage the subscription.
>
> **[2:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/subscribe-to-a-report?u=76281980&t=173)** Now at this point, report server is configured and will begin automatically publishing reports and sending them out to users on a regular schedule.

> [!info]- Semantic Content
>
> **Env Vars:** sql (1), ssrs (1), unc (1), pdf (1)
> **Code Keywords:** switch (1), finally, (1)
> **Prerequisites:** set up (1), you'll need (1)
> **CLI Commands:** make (1)
> **Ports:** :00 (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### Save report snapshots with historical data
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/save-report-snapshots-with-historical-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/save-report-snapshots-with-historical-data?u=76281980&t=0)** - [Instructor] Every time a user views a report, the server will fetch updated information from the SQL Server database to fill in the most up-to-date data available.
>
> **[0:09](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/save-report-snapshots-with-historical-data?u=76281980&t=9)** This is great when you want to see the current state of your business, but it's also sometimes important to be able to go back in time to see historical information.
>
> **[0:18](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/save-report-snapshots-with-historical-data?u=76281980&t=18)** You can do that if you've configured the server to save snapshots of the report.
>
> **[0:23](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/save-report-snapshots-with-historical-data?u=76281980&t=23)** Let's click the More info button for the People Report and choose Manage, then we'll flip over to the History snapshots page.
>
> **[0:32](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/save-report-snapshots-with-historical-data?u=76281980&t=32)** The snapshot functionality requires Report Server to have access to the data source, so you may encounter the same error message that we saw earlier with Subscriptions if you haven't set that up yet.
>
> **[0:43](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/save-report-snapshots-with-historical-data?u=76281980&t=43)** Assuming Report Server is using its own credentials for the Reports data source, you'll get to this page.
>
> **[0:50](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/save-report-snapshots-with-historical-data?u=76281980&t=50)** At the top, we can create a new history snapshot, and that'll save a copy of the report at a specific time and day.
>
> **[0:57](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/save-report-snapshots-with-historical-data?u=76281980&t=57)** Over time, your snapshots will accumulate, and you can come back here to see what the report looked like on a specific day in the past.
>
> **[1:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/save-report-snapshots-with-historical-data?u=76281980&t=65)** Now, instead of creating a history snapshot manually, press the Schedule and settings button here at the top.
>
> **[1:12](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/save-report-snapshots-with-historical-data?u=76281980&t=72)** Creating a new schedule will allow you to have a snapshot created on a regular interval, so you could have a report run every Friday evening after the close of business.
>
> **[1:22](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/save-report-snapshots-with-historical-data?u=76281980&t=82)** Over time, that would build a valuable historical record of the state of things at the end of every business week.
>
> **[1:29](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/save-report-snapshots-with-historical-data?u=76281980&t=89)** At the bottom, there are options for retaining the snapshots.
>
> **[1:33](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/save-report-snapshots-with-historical-data?u=76281980&t=93)** You can keep only a certain number of recent snapshots, or just save everything forever.
>
> **[1:38](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/save-report-snapshots-with-historical-data?u=76281980&t=98)** Press Apply to save the schedule, and reporting services will begin to build a library of reports that you can return to in the future.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/next-steps?u=76281980&t=0)** - [Adam] I'd like to thank you for joining me as we got to know SQL Server Reporting Services.
>
> **[0:05](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/next-steps?u=76281980&t=5)** Communicating effectively with data is a skill that will exercise both the left and right hemispheres of your brain, and I find it to be really rewarding to develop report layouts that look as good as they function.
>
> **[0:16](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/next-steps?u=76281980&t=16)** If you're doing any type of data communication through charts, then I would highly recommend that you take a look at a course called Data Visualization for Data Analysis and Analytics by Bill Shander.
>
> **[0:28](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/next-steps?u=76281980&t=28)** This course is not about SQL Server or databases, but it's entirely focused on communicating clearly with charts and graphics.
>
> **[0:35](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/next-steps?u=76281980&t=35)** Everything that you learn in that course can be directly applied to making your reports and visualizations more impactful.
>
> **[0:42](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/next-steps?u=76281980&t=42)** I can't recommend it enough as a natural follow-up to the course that you just completed.
>
> **[0:47](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/next-steps?u=76281980&t=47)** If you want to learn more about working with SQL Server, then check out my Complete Guide to Advanced SQL Server.
>
> **[0:53](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/next-steps?u=76281980&t=53)** It's a massive course that goes in-depth into a number of topics, such as creating automation systems with triggers, writing custom store procedures, working with Python scripts directly on the server, and much more.
>
> **[1:06](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/next-steps?u=76281980&t=66)** Or check out MySQL Server Integration Services Course.
>
> **[1:10](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/next-steps?u=76281980&t=70)** With SSIS, you'll learn how to create automated, extract, transform and load workflows that move data across systems.
>
> **[1:19](https://www.linkedin.com/learning/sql-server-reporting-services-24671486/next-steps?u=76281980&t=79)** Until next time, I've been Adam Wilbert, and I hope you have a great day.

> [!info]- Semantic Content
>
> **Env Vars:** sql (4), ssis (1)
> **CLI Commands:** find (1), python (1), mysql (1)
> **Code Keywords:** function (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [adam] (1)


## Path Context

### In [[Advance Your MS SQL Server Skills]]
← [[SQL Server Integration Services]] | **9 of 9**

## Appears In

- [[Advance Your MS SQL Server Skills]]

## Related Courses

_Courses sharing skills:_

- [[SQL Server Fundamentals- Master Basic Query Techniques]] — Microsoft SQL Server
- [[SQL Server Containerization- Modern Deployment Strategies for Data-Driven Organizations]] — Microsoft SQL Server
- [[SQL Server 2022 Administration]] — Microsoft SQL Server
- [[Implementing a Data Warehouse with SQL Server 2022]] — Microsoft SQL Server
- [[Automating SQL Server with dbatools]] — Microsoft SQL Server

---

[↑ Back to top](#)