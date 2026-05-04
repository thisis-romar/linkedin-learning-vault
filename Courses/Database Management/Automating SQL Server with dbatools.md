---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: automating-sql-server-with-dbatools
url: "https://www.linkedin.com/learning/automating-sql-server-with-dbatools"
duration_minutes: 60
duration: 1h
level: Intermediate
updated: 12/5/2024
learners: 20374
skills:
  - Microsoft SQL Server
  - Server Automation
exercise_files: true
github: "https://github.com/LinkedInLearning/automating-sql-server-with-dbatools-3068745"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHn4vbx24fVZQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1667411820482?e=2147483647&amp;v=beta&amp;t=fHoMzdEPmd78Pgo-xUqfUpXIj_FO_3D791togoyLgBo"
linkedin_topic: Database Management
learning_paths:
  - '[Advance Your MS SQL Server Skills](../../Paths/Database%20Management/Learning%20Paths/Advance%20Your%20MS%20SQL%20Server%20Skills.md)'
prev_courses:
  - '[Querying Microsoft SQL Server 2022](Querying%20Microsoft%20SQL%20Server%202022.md)'
next_courses:
  - '[Implementing a Data Warehouse with SQL Server 2022](Implementing%20a%20Data%20Warehouse%20with%20SQL%20Server%202022.md)'
path_nav: '[{"path":"Advance Your MS SQL Server Skills","position":4,"total":9,"prev":"Querying Microsoft SQL Server 2022","next":"Implementing a Data Warehouse with SQL Server 2022"}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/microsoft-sql-server
  - skill/server-automation
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Automating%20SQL%20Server%20with%20dbatools.md)

![Automating SQL Server with dbatools](https://media.licdn.com/dms/image/v2/D560DAQHn4vbx24fVZQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1667411820482?e=2147483647&amp;v=beta&amp;t=fHoMzdEPmd78Pgo-xUqfUpXIj_FO_3D791togoyLgBo)

# Automating SQL Server with dbatools

> If you want to learn more about automating SQL Server, you’ve come to the right place. Did you know you can use the open-source PowerShell module dbatools to manage your SQL Server estate? In this course, instructor Jess Pomfret covers the skills you need to know to automate SQL Server with dbatools, helping you optimize your workflow, database performance, and overall server management experience

> [LinkedIn Learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools) | 1h | Intermediate | 20K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Why dbatools?](#why-dbatools)
  - [What you should know](#what-you-should-know)
  - [Setting up your environment](#setting-up-your-environment)
- [**1. What Is dbatools?**](#1-what-is-dbatools) (4 videos)
  - [Introducing dbatools](#introducing-dbatools)
  - [Installing and updating the module](#installing-and-updating-the-module)
  - [Find the command you need](#find-the-command-you-need)
  - [Running your first command](#running-your-first-command)
- [**2. Get Information**](#2-get-information) (6 videos)
  - [Get a list of SQL Servers in your environment](#get-a-list-of-sql-servers-in-your-environment)
  - [Get database status across your estate](#get-database-status-across-your-estate)
  - [Check database last backup times](#check-database-last-backup-times)
  - [Get SQL Server patch levels](#get-sql-server-patch-levels)
  - [Review SQL Server Configuration Settings](#review-sql-server-configuration-settings)
  - [Find failed SQL Agent jobs](#find-failed-sql-agent-jobs)
- [**3. Set Information**](#3-set-information) (4 videos)
  - [Set databases online or offline](#set-databases-online-or-offline)
  - [Discover and apply recommended data compression levels](#discover-and-apply-recommended-data-compression-levels)
  - [Update database compatibility levels](#update-database-compatibility-levels)
  - [Insert data into SQL Server tables](#insert-data-into-sql-server-tables)
- [**4. Migrations Made Easy with dbatools**](#4-migrations-made-easy-with-dbatools) (5 videos)
  - [Migrate whole instances with one line of code](#migrate-whole-instances-with-one-line-of-code)
  - [Simple database migrations](#simple-database-migrations)
  - [More advanced database migrations](#more-advanced-database-migrations)
  - [Migrating logins](#migrating-logins)
  - [Exporting documentation](#exporting-documentation)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continue your learning](#continue-your-learning)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why dbatools?](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/why-dbatools-25063140?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/why-dbatools-25063140?u=76281980&t=0)** - Are you a database professional, Curious about how [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) can help make your life easier? Have you maybe heard about the DBA tools module, but never had the time to get stuck in and really learn what it's all about? In this course, we're going to start with the basics. We'll find and download the module, explore the available commands, and figure out how we can use the Built-in help documentation to make using them easy. Then we'll discuss key topics to improve how you administer your [SQL server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) environments. My name's Jess Pomfret. I've worked with SQL Server [Databases](../../Skills/Software%20Development/Databases.md) for over 10 years, and I'm a [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) MVP. I also love PowerShell and automation. I've been a major contributor to the DBA Tools Project for several years now, and I can't wait to teach more people about it. By the end, you'll be able to integrate DBA tools into how you manage [SQL](../../Skills/Data%20Science/SQL.md) servers, and maybe you'll even be inspired to get involved and help build the next great DBA tools command.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (2), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** dba (4), sql (3), mvp (1)
> **CLI Commands:** make (2), find (1)
> **Tools:** powershell (2)
> **Exercise Files:** download the (1)
> **Speakers:** - are (1)

#### [What you should know](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/what-you-should-know?u=76281980&t=0)** - [Instructor] In order to get the most out of this course, there are a few things that it would be good to know at least the basics of. We're going to be using a [GitHub](../../Skills/Software%20Development/GitHub.md) repo that contains a dev container with not just all of our code, but two test [SQL server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) instances inside. We'll cover how to get this all set up and working in the next video, but if you're already familiar with VSCode, that will be helpful. VSCode is a free, open-source, cross-platform code editor. It's super useful for developing in many languages. The fact that it's cross-platform means that you can follow along with this course no matter what your operating system of choice is. There is also a [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course that might be useful to review if you've not worked with it before. However, during this course, we'll cover all the features you'll need to know to be able to navigate around and execute the demo code in your own environment. Otherwise, you just need to know some basic [Database Administration](../../Skills/Database%20Management/Database%20Administration.md) concepts, as we'll be taking that knowledge and translating it into [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) with dbatools. That includes topics like database backups and restores, [SQL](../../Skills/Data%20Science/SQL.md) agent jobs, SQL logins, and generally, just how our SQL Server environment works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Database Administration](../../Skills/Database%20Management/Database%20Administration.md) (1)
> **Env Vars:** sql (4)
> **Tools:** github (1), powershell (1)
> **Definitions:** is a  (1), means that (1)
> **Prerequisites:** set up (1), you'll need (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** github repo (1)
> **Speakers:** - [instructor] (1)

#### [Setting up your environment](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=0)** - [Instructor] As I mentioned, the demo environment for this course is contained in a [GitHub](../../Skills/Software%20Development/GitHub.md) repo. There are a few things you need to download and get set up on your machine in order for you to get started on these demos. These details are all outlined under the installing heading on the readme. Once you have these tools installed you'll clone this repo down to your machine. First, open a [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) console and navigate to the folder you want to store the code repo in. Here I'm navigating to C:\LinkedInLearning. We'll then perform a GitClone. You can get the URL you need from GitHub here. Press the code button and then click this copy button. Back in our PowerShell console, we'll type [Git](../../Skills/Software%20Development/Git.md) clone and paste in the URL. Navigate into the new folder that has been created by typing cd and then the folder name. Quick tip, you only have to type the first few letters and then you can press tab to complete the folder name. Once you're in the folder name, type code. Full stop, press enter. That will open VS Code in your folder. If you get a popup when VS Code opens you can choose to trust the authors of these files. This is a security feature since VS Code allows script files to be executed. When you open the folder for the first time you should get a popup asking if you want to reopen in a container. Press yes. This might take a little while if it's the first time as the container layers will need to be downloaded from the internet. If you don't get a popup or you miss it press control shift P to open the command palette. You can also use F1 on [Windows](../../Glossary/Service/Windows.md). Once the command palette is open search for Remote Containers: Rebuild and Reopen. Choose the Remote Containers: Rebuild and Reopen
>
> **[1:35](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=95)** in a container option and the containers will start to download and your dev container will spin up. Once the containers are downloaded and up and running you'll be able to run the core scripts against the two test [SQL](../../Skills/Data%20Science/SQL.md) instances that are now up and running within the development environment. It's pretty neat. The repo also takes advantage of branches. There is a branch that corresponds to each video and you can change branches by clicking the button here at the bottom and choosing the branch. For example, 02-01. I'd also recommend that you run the scripts in a plain PowerShell session rather than the PowerShell integrated terminal. Press the new button here and a fresh window will open where you can run your code.
>
> **[2:18](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=138)** Now you're all set up. Time to dive into the content.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (4), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Git](../../Skills/Software%20Development/Git.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Tools:** powershell (4), vs code (3), github (2), terminal (1)
> **Env Vars:** url (2), sql (1)
> **UI Navigation:** open the (2), navigate to (1)
> **CLI Commands:** git (1), cd (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **Documentation:** the readme (1)


### 1. What Is dbatools?

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing dbatools](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/introducing-dbatools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/introducing-dbatools?u=76281980&t=0)** - [Instructor] Have you ever dreamed of an easier way to manage your [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) estate? Are you tired of clicking through GUIs for every instance, every database, or every job just to complete your morning checks? If so, follow us on this journey as we learn all about how dbatools can make your life easier. Dbatools is an open source [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) module written and maintained by the community. It was first created by Chrissy LeMaire back in 2014 when she needed to migrate some [SharePoint](../../Skills/Cloud%20Computing/SharePoint.md) instances, so she wrote a long PowerShell script to migrate all the pieces and parts to the new instance. Chrissy was talking to some folks in 2015 about this project, and they convinced her how useful it was and that she should turn it into a module and put it up on [GitHub](../../Skills/Software%20Development/GitHub.md). This allowed people to contribute and use the code for their own migrations. Over time, the module has grown to include over 650 different functions that can help you manage your SQL Server environment. Basically everything you can do in SQL Server Management Studio, you can also do with dbatools. For example, check in on whether your SQL Server agent jobs are all running successfully. Ensuring this community module is enterprise-ready is very important. We want to make sure that you can take this into your workplaces and start scripting and automating your work with confidence. Therefore, we have security and reliability checks built into the development and deployment processes. This is vital to ensure users can depend on the module with every new release. One of the ways that the dbatools team ensures reliability is by running pester tests. Pester is a PowerShell testing framework that allows us to ensure that our code does what we think it should. Tests are created for every function, and whenever someone creates a pull request against the module, all those tests run to ensure nothing is broken. This means that we can feel confident in the new versions that we deliver. I'm so excited to share this content with you.
>
> **[1:34](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/introducing-dbatools?u=76281980&t=94)** I look forward to seeing what the next wave of dbatools fans will build and create with this great module. Let's get to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (4), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (3), [SharePoint](../../Skills/Cloud%20Computing/SharePoint.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** sql (4)
> **Tools:** powershell (3), github (1)
> **Definitions:** is an  (1), is a  (1), means that (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Installing and updating the module](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=0)** - [Presenter] [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) includes a lot of functionality out of the box for you to use when automating and scripting administration tasks in your environment. However, in my opinion, one of the biggest strengths of PowerShell is the ability to download and import modules to add even more functionality. This is what we need to do to start using dbatools. dbatools is hosted on the PowerShell Gallery which is the central repository for sharing PowerShell modules. The gallery is backed by [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) and you can find over 10,000 unique packages there. These packages include both Microsoft modules such as [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md), as well as community modules like dbatools. If you navigate to the gallery page for dbatools, you can see there is a load of information. There are some really great stats on the left hand side showing the last published date as well as how many downloads of this version, around 8,000 and total downloads for the module, over 1.8 million. This is a well loved and used module. There are also several examples shown for how to install the module and a full list of previously published versions. You can see the release cadence for the dbatools module is fast and there are often multiple releases per week as new features are added and bugs are squashed. The easiest way to install modules from the PowerShell Gallery is to use PowerShell. We can actually find and install modules right from the console using PowerShell Get, which is built in. Firstly, we can use Find-Module with either a module name like dbatools or a pattern to reach out to the gallery and find the latest versions. This does mean you need internet access. We'll cover another option for getting the module if you don't have internet access in a second. Once we've found the module we want to install, here you can see dbatools module version 1.1.127. We can use Install-Module to download
>
> **[1:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=92)** and install the module. If use no other parameters, the module will be downloaded to the module directory within your documents. If you'd like to install it for any other users on the computer, adding the scope or users if you have permissions, will install it into a common path so it'll be available for all users to access. As mentioned, you do need the internet for Find-Module and Install-Module to work. We recommend installing dbatools on your management box. This will likely be where your SQL Server Management Studio will be installed for managing your SQL server estate. If your management box doesn't have internet access, you can use Save-Module to download the module from somewhere that can access the internet and then copy that folder into the module path. If you need to know where your PowerShell session is looking for modules, you can run the highlighted snippet to see a list of folders. The first path will take precedence when PowerShell is looking for modules but copying the dbatools folder into any of these module folders will make it available for you to import. Now that we have the module downloaded and installed, we're ready to start exploring and experimenting with all the great commands that are available.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (9), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (3), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2)
> **Tools:** powershell (9)
> **Prerequisites:** install (9)
> **CLI Commands:** find (5), make (1)
> **Env Vars:** sql (3)
> **Versions:** 1.8 (1), version 1 (1), 1.127 (1)
> **Definitions:** is a  (2)
> **UI Navigation:** navigate to (1)

#### [Find the command you need](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980&t=0)** - [Instructor] Remember when I told you there were over 650 different functions in DBA tools and you wondered how on earth will I find the command I need? The good news is [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) and DBA tools have got you covered. Let's take a look at some of the options we have available to us and find some useful commands to get started with. There are a few commands within PowerShell that I highlight whenever I talk about the language. These are not DBA tools specific, so it can be used with any modules, but they allow you to find your way around without leaving the PowerShell console. The first is GET Command. Get Command does exactly what it says on the tin and you'll find that as we start using DBA tools that the naming conventions really help us to understand what the function does, but GET Command allows us to get commands, and if we run it with the module parameter and passing DBA tools, you'll see we get a list of all the DBA tool commands. And as I mentioned, there are quite a few. We can narrow down this list though by using a pattern. Here, you can see I've used the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) compression with a wildcard symbol either side. In the results, you can see that PowerShell has found us three commands relating to compression. A GET, a SET and a test command. As I stated, GET that command as a PowerShell level so we can use that anywhere. But DBA tools has gone one step further for us and added find-DBA Command Get Command only looks at the name of the functions whereas find-DBA Command will search all of the comment base help for your keyword and we'll talk more about help in a second. So again, if I pass in the compression pattern I'll get a lot more results. For example, backup-DbaDatabase is now returned. From the command name, I don't see any mention of compression, but it supports backup compression and mentions how to use that within the help. There is also a tag parameter
>
> **[1:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980&t=92)** that can be used with find-DBA Command if we pass in job for this parameter, we'll get a list of all the DBA tool commands that relate to jobs. You can see there's quite a few commands that will help us get started managing our [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) agent jobs. The two commands we've learned in this video are definitely worth keeping in front of your mind as you start using PowerShell more. It's always nice to avoid a context switch and not have to leave the console to go and find the name of the next command you need. Now that we know how to find the commands we need the next step is learning how to use them and we'll cover that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (6), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1)
> **Env Vars:** dba (11), set (1), sql (1)
> **CLI Commands:** find (9)
> **Tools:** powershell (6)
> **API Endpoints:** get  (3)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Running your first command](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=0)** - [User] One of my favorite things about [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) is that it likes to teach you as you go. We've already seen how it can help us find the commands we're going to need to use with GET command and Find-DBA command. Now we're going to learn all about the comment based help that's included with every command in the module. Get-Help is the second PowerShell level command that I believe everyone should have in their tool belt. This will show you all the details you need to know for the command you're looking to use. If we run Get-Help for Test-DbaDbCompression with no other parameters, we'll get a short synopsis, information on the syntax, and a longer description. Depending on the command, these descriptions can be quite detailed, explaining any calculations you use or knowledge and expertise that has gone into creating the command. A great parameter to use if you're on a [Windows](../../Glossary/Service/Windows.md) machine is ShowWindow. This will open up a new window showing all of the help content for this command. This is really useful because you can keep it open and refer back to it while you work on your scripts. Now, we are running our demo environment within a Dev container, which is [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md)-based, so the ShowWindow parameter won't work here unfortunately. Another good option and one that is supported for all the dbatools commands is to use the online parameter. Again, you can see it doesn't work perfectly in our Dev container, as there is no web browser within this container, but VS Code lets us open the link by pressing control and clicking on the link. This will open the docs.[dbatools.io](https://dbatools.io) website which contains a web version of all of the comment-based help from each command. If you scroll down the page a little you can see every command has at least one example showing you exactly how to use the command. These examples can also be shown directly in the console, either by using the Examples parameter
>
> **[1:33](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=93)** or by using the Full parameter to show all of the available help for that command. Quite often I'll run this for commands that I often use just so I can easily copy and paste the code into my script and then change the parameters for my scenario. Saves me a little typing and I know I won't miss any required parameters. If we scroll up to the first few examples of Test-DbaDbCompression, we can see the simplest ways to run the command. These examples are usually ordered in most simple to more complex as you work down. Example one shows us reviewing all of the potential compression gains for our entire instance. Let's copy that example into our VS Code window and update the parameters for our environment. Let's update the SqlInstance parameter to dbatools1, which is one of the [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) instances available in our Dev container. When we execute this, we can see that dbatools goes out to our dbatools1 instance and investigates whether there are any compression gains to be enjoyed. The results are displayed in a list within the console. Just like that we've run our first dbatools command against a real life SQL server. As we work through this course and as you use dbatools in the real world, I would highly recommend continuing to look up the help for commands that you are going to use. There is a lot of great information in there, and to be honest, even as someone who uses dbatools literally every day, I still review the help and often find new ways to use commands or great code examples I can use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (2), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (2), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Tools:** powershell (2), vs code (2)
> **UI Navigation:** open the (2), scroll down (1), scroll up (1)
> **CLI Commands:** find (3)
> **Env Vars:** sql (2), dba (1)
> **URLs:** [dbatools.io](https://dbatools.io) (1)
> **API Endpoints:** get  (1)
> **Documentation:** the docs (1)


### 2. Get Information

[↑ Back to Table of Contents](#table-of-contents)

#### [Get a list of SQL Servers in your environment](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=0)** - [Instructor] So when we talk about automating our [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) estate with DBA tools, the first step is to keep track of what our estate actually consists of. How many SQL server instances do we have? Are they production or development environments? How do we connect to 'em? Let's take a look at a few options here that will enable us to compile a list of servers that we can use throughout the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this series. So first, let's assume you know about all the [SQL](../../Skills/Data%20Science/SQL.md) servers in your estate. You're a good DBA so you keep track of them, and the people in your organization follow the rules. So no SQL servers are just popping up on computers living under people's desks. We'll talk about how to find those later on. The simplest way of keeping a list is in a text file. Here you can see I have a simple list of my two SQL Server instances that are available in my environment. No details, just a simple list. We can pull that content into our [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) session to use with Get-Content. Pretty straightforward and you can see our list of SQL Servers is returned. We can also save that list to a variable so we can reuse it with other commands. Here we'll run the same command as before, but this time save it to the SQL Server variable and then use that variable for the SQL instance parameter on Connect DBA instance. This Command does just that, connects to our SQL instances and you can see that some details about them are returned, such as the version. The next step might be to use a CSV to keep track of your instances. With a CSV, we can add additional properties such as: environment, contact info, which applications connect to which server. You can see in our CSV we again have the SQL instance name but now we can also tell which instances are production versus non-production. To pull that data in, we can use Import-CSV. This returns an object rather than strings
>
> **[1:34](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=94)** so we have a lot more options for interacting with this data now. Let's again save this data to a variable and then use the variable with the Connect DBA instance command. You'll notice though that we can now filter the data we save in the SQL Server variable using Where-Object. Here we're only returning SQL instances where the environment is test. Since this is an object, We also need to specify the property that contains a SQL instance name. CSV processing is available natively within PowerShell using the import CSV and export CSV commands. If you prefer [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) workbooks for your server list, there is a fantastic open source module called ImportExcel that allows you to read data into PowerShell from Excel and use that within your session. Now we are database folks. We like [Databases](../../Skills/Software%20Development/Databases.md). So what if we keep our SQL instance list in a table within a database? Not a problem. We can easily query database tables and fill our SQL Server variables with that data. The Invoke DBA query command from DBA tools allows us to specify a SQL instance, a database, and a query to execute. The results will be, again, returned as an object for us to use within our PowerShell sessions. Let's again pass that info into the Connect DBA instance command specifying the SQL Server variable and the SQL Instance property. Now, this is all fine and well when you know about your SQL Server estate but what happens when you're in a new environment or people are installing SQL Server wherever they feel like like it and not involving the DBA team? Well, for that, we have Find-DbaInstance. This function will use a variety of methods to help find sequel instances. I recommend reviewing the help for this one and fully understanding the functionality. This function can be used to find instances
>
> **[3:09](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=189)** on a specified server or on any computer on an ad domain or on any network connected machine it finds. Some of this functionality can constitute a network scan so make sure if you're going to use that that you chat with your network and security folks first. Now that we have our SQL estate documented and we know how to pull that data in to use within PowerShell, the next step is going to use that list along with DBA tools commands to help manage our estate as a whole.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (12), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (9), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (5), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** sql (21), dba (9), csv (7)
> **CLI Commands:** find (4), make (1)
> **Tools:** powershell (5)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### [Get database status across your estate](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=0)** - [Instructor] I like to describe DBATools as the command line version of [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) Management Studio. Tasks that you would usually complete in SSMS can also be completed in the console using DBATools. For example, checking on our [Databases](../../Skills/Software%20Development/Databases.md) and making sure they're all in a good state. Let's take a look at how we'd accomplish this now. Let's switch over to VS code where I have our dev container open and ready to go. As we learned in the previous chapter, the first step is to find the command that'll accomplish the task that we need. If you remember, there are two ways to accomplish this, but let's use Find-DbaCommand and pass in the pattern to look for database status. We've got quite a few results. But for now, we're looking to collect information, so let's focus on the Get commands. I can see a command that might be useful, Get-DbaDbState. The best way to investigate further is to run Get-Help. Let's execute that with the -Full parameter to get all the good stuff. If we scroll up in the output to find the description, we can see that the synopsis is, "Gets various options for databases, hereby called states." Scrolling back down to the examples, let's copy example one into our session. Replacing the example SqlInstance with the SqlInstances variable which contains the list of our SQL server instances. We can execute this and review the results. The results show us our SqlInstance information, DatabaseName, as well as several important pieces of information about the state. We can also just select the properties we care about from the objects returned, like in TSQL. We'll use the pipe symbol, and that will effectively pass the output of the command on the left
>
> **[1:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=92)** down the pipeline and into the command on the right, which will select our chosen properties. Here we have chosen the SqlInstance name, the DatabaseName, Database status, whether it is read only or in ReadWrite mode, and the access type, multi or single-user mode. Out of the select object, I'm again using the pipe symbol to change the output to display as a table with format table. When we're using the pipe, we can actually break at that point and start a new line making our code a little easier to read. Here you can see all the databases on dbatools1 are online, available for ReadWrite and configured for multi-user access. It's all looking good. With DBATools though, there's often more than one way to accomplish a task. Let's rerun our Find-DbaCommand and again review the results. Get-DBADatabases returned for this database status pattern. This command returns database objects with all kinds of properties and methods available to explore. So let's see if we can check our database status this way also. In my next code snippet, we're going to use a technique called splatting to format our code, to make it a little easier to read. We'll use this technique for most of the more complex code in this course. Splatting just means that we define a hash table where the parameters are defined on the left with their values on the right. This hash table is then passed into the command using this special "@" notation. Let's run Get-DbaDatabase, passing in our [SQL](../../Skills/Data%20Science/SQL.md) instances and see what we get by default. DBATools often has a default view set up for commands. In this case, just a few of what has been deemed the more important properties are returned for us, instead of flooding the output with all of them. A little trick I like to use is piping the results of select object and using the first parameter
>
> **[3:05](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=185)** to just get one result, and then the asterisk to get all the properties. This is like doing a SELECT top one star from a table in SQL Server. You can see in the results, there are a ton of properties. I'll let you explore more of these on your own, but you'll also notice that some of these properties, for example, tables are actually nested objects with even more properties of their own. From all of the available properties, let's select just a few including status and format again as a table. I've shown you two approaches in this section to enable you to review your database status across your environment. This information can easily be used to create a report that you could run every morning to ensure all your databases are healthy before you've even finished that first cup of coffee.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (4), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** sql (3), ssms (1), tsql (1), select (1)
> **CLI Commands:** find (4), make (1)
> **Tools:** command line (1), vs code (1)
> **UI Navigation:** scroll up (1), select the (1)
> **Analogies:** for example (2)
> **SQL:** select (1)
> **Cross-References:** previous chapter (1)

#### [Check database last backup times](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=0)** - One of the most important tasks on the database administrator's morning checklist is to ensure all the [Databases](../../Skills/Software%20Development/Databases.md) are being backed up as expected, and that there have been no failures. It should be no surprise at this point that DBA Tools can help with this task. We all know the first step and that's to use find DBA command with the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) backup to find a DBA tools command that can help. There are a lot of results returned for this patent. Since we know we're looking to collect information, let's focus on the get commands. Looking through the results we'll find get DBA DB backup history. Both the name and synopsis sound like exactly what we need for this task. Let's review, Get Help and look at the examples for running this command. Example one is again the simplest option for us so let's copy that and replace the [SQL](../../Skills/Data%20Science/SQL.md) instance name with DBA Tools One. Running that we can see all the backup history for our [SQL server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md). You can see the different types of backups, how big they were, and when they occurred. As it is, this command will return all the backup history that is available in MSDB. If there's a lot of history you're going to get a lot of results. It's worth looking at some of the other filtering options in the other examples within the help. This is good info but it doesn't tell us whether all our databases have the appropriate backups to meet our recovery goals. Instead, let's again look at get DBA database. This command returns information about our databases so this is a good angle to approach the question. If we pass in our list of SQL instances we can quickly collect information about all our databases and that includes the last backup times. Now we can easily see when our databases have been backed up last.
>
> **[1:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=92)** This is useful, but if we have a larger state we might have thousands of databases to check. Luckily, there's an easier way than just eyeballing the dates to see if they're correct. We can use Where-Object to filter, in this case, display all databases that haven't had a full backup within the last seven days. This will now only return the databases we should have concerns about. You can see we have a few that need a full backup. Once again, DBA tools and [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) makes fixing this remarkably easy. We can run that same command as before, filtered by date and then pipe that output into backup DBA database. Of course, I'm going to go ahead and say review the help to look at all the parameters available for this command, but by default this will take a full backup to the default backup location that is defined for your instance. Now we're back in compliance and we have all the full backups we were expecting to have. Our backups are all in line and we can carry on with our day knowing that our data is safe.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (8), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (1)
> **Env Vars:** dba (8), sql (3), msdb (1)
> **CLI Commands:** find (3)
> **Tools:** powershell (1)
> **Definitions:** is a  (1)
> **Speakers:** - one (1)

#### [Get SQL Server patch levels](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=0)** - [Instructor] Keeping our [SQL](../../Skills/Data%20Science/SQL.md) servers up to date is another important task as a DBA. [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) often releases security patches and hot fixes for the [SQL server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) versions we have deployed in our estate. So for us to be as secure as possible, it's good to be up to date with applying those patches. In the past, before DBA tools changed my life, I would keep a spreadsheet or a table in a database up to date with a list of all the SQL servers and some important information, including their patch level. As I applied cumulative updates or security fixes, I would retrieve the new build numbers and update that information. This worked well unless I forgot to update the information. Lucky for us, we can now rely on automated scripts to update this information for us. Using DBA tools, we can check what is actually installed in our estate and ensure our documentation is never out of date. Let's take a look at our options. If we run Connect DBA Instance to connect to our DBA tools one instance, you can see the result return includes a version number. In our case it's 15 dot zero dot 4249. That's lovely, but I always have a hard time remembering the friendly name of SQL Server Version 15. We can use GET DBA Build to look this up without needing to leave the console. The results give us all the details we need. It's SQL Server 2019 cumulative update 17. Note, the SP level shows RTM since Microsoft has moved to a model where they only release cumulative updates or CUs instead of service packs or SPs. Get DBA Build can also be run directly against one or many SQL server instances to get the build information. Here, we'll pass in our list of SQL instances and format the results in a table. You can see I've got one 2019 instance
>
> **[1:34](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=94)** and one SQL 2022 instance. So far we've just looked up which build rom, but we really need to answer the question, are we up to date with patches? Is my version the latest? To answer this, we can use test DBA Build. Again, we'll pass in our SQL instances and in this case I'm selecting just the properties I care about and then formatting to a table. You can see in the results the builds for our SQL servers which for the 2022 instance is 16.0.900 and that matches the build target, which shows we're on the latest available build of SQL 2022. The compliant column clearly shows we are up to date with patches. Good news. Now we might not want to be on the very cutting edge and update into the latest CU straightaway. Instead, we can use the max behind parameter to say I would like to be at least within one CU of the latest build. In this case, the build target for the 2019 instance has changed to fifteen dot zero dot 4223, so we'd only have to be on at least that build to be compliant. Another useful field in the results is the supported until column. This will show you when this version of SQL Server is supported in until. If you have older SQL Server versions in your environment, this is a great tool for planning out which servers should be upgraded before they roll out of support. The information returned by these commands is stored an A [JSON](../../Skills/Web%20Development/JSON.md) file within the module. If this is more than a month old, you'll see a warning that this information might be out of date. You can update your DBA tools module to fix this. The same JSON file is used to power the DBA tools build website which is a really nice visual representation and allows all kinds of filtering. It's very useful for looking up which build you're on
>
> **[3:07](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=187)** in comparison to the latest builds for each major version. That's another task on our DBA checklist made easier with DBA tools. you can keep your documentation up to date and ensure you're not falling behind from the latest patch versions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (7), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (6), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (2)
> **Env Vars:** sql (13), dba (12), json (2), rtm (1)
> **Versions:** version 15 (1), 16.0.900 (1)
> **Definitions:** is a  (2)
> **API Endpoints:** get  (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Review SQL Server Configuration Settings](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=0)** - [Instructor] [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) has many configuration options available, and it's very likely, either from following best practices, or from experimentation in your own estate, a lot of these settings won't be set to the defaults. Let's take a look at what our configuration options are set to, how we can reconfigure our systems, and also how we can export and import settings. Once again, let's use Get-Command to find all of the commands dbatools has, that matches the pattern configure. The naming of these commands should be starting to feel familiar at this point. The verb tells us what the action will be, either getting or setting, for example, and the noun tells us what we're acting on. In this case, SpConfigure options. Let's run Get-DbaSpConfigure for our [SQL](../../Skills/Data%20Science/SQL.md) instances. This will return all of the available configuration options, and I'm hoping this to format table, so it's a little easier to review. We can also filter the configuration properties we care about by using the name parameter. Let's look at what the max server memory and AdHocDistributedQueries configurations are set to for dbatools1. There is actually quite a lot of information return for these configurations. The min and max values, tell us what we can set this configuration to. For example, for Adhoc Queries, can either be set to one or zero, basically enabled or disabled. The RunningValue tells us what it's currently set to, so in this case, it's zero, or disabled. Here, we're just looking at the configuration settings for one server. But remember, dbatools makes looking after multiple servers as easy as one. We could pass in a whole list of servers and see how our Adhoc Queries setting is configured across our whole environment. Let's say we've been monitoring the workload on this SQL server and have determined
>
> **[1:33](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=93)** that it would benefit from enabling Adhoc Queries. We can do this from dbatools as well. Running Set-DbaSpConfigure will specify the SQL instance, the name of the configuration, and our desired value, in this case, one for enabled. The results show the previous value as well as the new value. It's looking good. Rerunning Get-DbaSpConfigure also confirms that our running value is now one. We also have Export-DbaSpConfigure which will do, just what you're guessing probably, at this point, export all our configuration into a script. There are a couple of reasons I love this idea. One is you now have a record of exactly how your SQL instance is configured. Pop this somewhere safe or even better into source control and you can always be sure you'll know exactly how things should be. This is great for DR situations where you suddenly need to configure a new SQL instance, or if you're having issues and you want to compare the current configuration to this saved version. There is a lot of value in knowing how your environment is configured. I'd recommend taking a look at Get-DbaSpConfigure and Export-DbaSpConfigure in your own environments. It's a great way to document and you might even find some configuration settings you don't agree with and want to fix.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (2)
> **Env Vars:** sql (6)
> **CLI Commands:** find (2)
> **Analogies:** for example (2)
> **Prerequisites:** configure (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Find failed SQL Agent jobs](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=0)** - [Narrator] [SQL](../../Skills/Data%20Science/SQL.md) agent jobs provide a way to schedule work to run against our [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) instances. This includes DBA type jobs like backups and corruption checking as well as jobs for the business like [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) or report creation. There are a lot of reasons these jobs are important which is why another item on our DBA morning checklist is to ensure no jobs have failed. First up, let's take a look at the SQL agent jobs we have in our environment. We'll run Get-DbaAgentJob and parse in our list of SQL instances and then format that output as a table for easy viewing. Here you can see I have all those maintenance jobs installed as well as a few others on my dbatools 1 instance. There is also a LastRunOutcome column returned for this command, which we can easily see whether our jobs have last run successfully or not. This is handy but if our environment is bigger than these two small SQL servers and there are many jobs, the output is going to be overwhelming for us to digest. Let's work on only returning the things we care about. Here we'll fall to the results by using Where-Object to only return jobs where the last run outcome isn't Succeeded or Unknown. Unknown is usually returned when the jobs haven't run before so in this case we don't care about those yet. There are a few problem jobs here, including one named Important Report. Well, I'm sure you can guess but this is an important job. It creates a report for someone very important and this job needs to get run daily for our business to make good decisions. One thing to note on the last command I ran, I highlighted the OutVariable parameter. This is a common parameter within [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md), meaning you can use it anywhere. Remembering how our pipeline works, objects are passed from the commands on the left through to the commands on the right. OutVariable says,
>
> **[1:33](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=93)** "Save whatever results are returned into the variable." In this case, named Failed. Running failed. You'll see the exact same output as you did returned from when we ran the command in the first place. You'll see why this is useful in a second. Now, you could head over to SSMS and click through the GUI to view the job history, but we can do the same without leaving our console. Also, if we have more than one failed job to investigate we can more easily collect that history from PowerShell, especially if there are five failed jobs all on different servers. Remember the failed variable that we populated with our failed jobs? Well, we can take that and pipe it straight into Get-DbaAgentJobHistory and dbatools will head out to all those SQL instances, look for the jobs included in the results and grab us the history. We'll get the exact same error message and details we would get from SSMS. You can see the job outcome level history which tells us some overall information, the job result, in this case failed, when it ran and who invoked it. Then you'll find the step outputs, same as if you drilled into the job history in SSMS. Here you can see we have a missing table. Oh dear. You can also use Get-DbaAgentJobHistory with some parameters. In this case, we're just getting the history for our important report. Once we've fixed our job, in this case I've created the missing table, we can easily rerun the job from the console by running Start-DbaAgentJob. The wait parameter will mean that the console waits for the job to complete and reports the outcome. Here we can see the job is successful
>
> **[3:05](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=185)** so we can carry on drinking our morning coffee knowing that our important SQL agent jobs are all good to go for that day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (6), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (2), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1), [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) (1)
> **Env Vars:** sql (7), ssms (3), dba (2), gui (1)
> **CLI Commands:** make (1), find (1)
> **Tools:** powershell (2)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [narrator] (1)


### 3. Set Information

[↑ Back to Table of Contents](#table-of-contents)

#### [Set databases online or offline](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980&t=0)** - Have you ever decommissioned a database but wanted to set it offline for a little while before you drop it, just in case? This video will show us how to easily accomplish this with DBA tools. Let's use Get-DbaDatabase to start with, to view the [Databases](../../Skills/Software%20Development/Databases.md) we currently have on our DBA tools, one instance and their status. You can see in the results there are three databases Northwind, pubs and databaseAdmin. And the good news their status is all currently normal, meaning they're online and available. To set databases offline, we can use set-DbaDbState. Once again, I'd recommend reviewing the help docs because this command can do more than we're going to demonstrate today. We're going to pass in three parameters. The sequel instance, name, which is the names of the databases we want to set offline, and the switch offline. The results from this command show each database that is affected and we can see their status is now offline. Rerunning Get-DbaDatabase will show that the two databases we specified in the last command Northwind and pubs now have the status of offline.
>
> **[1:03](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980&t=63)** Now I'm sure this has never happened, but at Just Imagine after you've set your databases offline errors start flying and before long you're getting messages about issues. Turns out we actually did need that database. Luckily we can just as easily set the status back to online with Set-DbaState. This time we'll use the online switch and you can see in the results the Northwind databases back online. Once again, we'll rerun the Get-DbaDatabase command and we can see the Northwind databases back online and accessible. Now we can work on tracking down what was causing those errors and which application is still accessing a database we thought we could decommission. We can also use piping with Set-DbaDbState. If we want to set any databases which are currently offline back online, we can run the following. This uses Get-DbaDbState, pipes that to a wear object to filter for just databases where the status is offline and then pipes that on to Set-DbaDbState to set them back online. Remember, in [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) the output of one command flows through that pipeline to the right so we'll only be affecting the databases returned by Get-DbaDbState and then filtered. One final check of Get-DbaDatabase and we can see all our databases are back online and ready for the next chapter. See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (12), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (1)
> **Env Vars:** dba (2)
> **Cross-References:** in the last (1), next chapter (1)
> **Code Identifiers:** databaseadmin (1)
> **Tools:** powershell (1)
> **Analogies:** imagine (1)
> **Speakers:** - have (1)

#### [Discover and apply recommended data compression levels](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=0)** - [Instructor] Data compression is a fantastic [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) feature. It can not only help us to save space both on disk and in memory, this will then lead to increased performance. More good news is that since SQL Server 2016 SP1, it's been available in Standard edition. Let's jump into our repo and see how dbatools can help us manage data compression in our environment. First, let's use Get command to find the compression commands available from dbatools. You can see we have three commands returned a get, a set and a test. As with most examples, we'll start with get to see how things are currently looking. By default get DbaDb compression will return the size and current compression levels for all objects on our instance. This can be a lot of information, so I'm filtering by specifying the NorthWind database and the audit table. You can see we have nine rows returned. One for the clustered index, PK_Orders and eight additional rows for non-clustered indexes. on the table. You can also see the current state is that there is no data compression applied. We can also see that this is a pretty small table. The clustered index, which is where all the data from the table is stored, is just 160 kb and each non-clustered index is just a fraction of that. We can use the same parameters that we've just used with the get command for test DbaDb compression. This command is super cool. It uses logic created by the SQL Server Tiger team that combines data on how well an object would compress with Index Stats usage to determine the best option for us. One thing to note is the index usage stats are coming
>
> **[1:34](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=94)** from the DMVs and those are only persisted from the last reboot, so the more uptime your system has, the more reliable the results. Looking at the primary key, you can see the index has a hundred percent scans. More scans than updates makes this a stronger candidate for compression. We also get information returned on how much space will be saved by compressing this index. Firstly, the index will be 65% the size of the current index if we apply rope compression and only 47% of the current size, if we apply page compression. The command takes all this information into account and determines that for this index, page compression is our best option. I also made use of the Out Variable parameter for this command which will save the results we see on screen into our test compress variable, so we can use them again. We can actually use that variable with Set DbaDb compression. If we review the results from the test command, we can then use these results to apply the recommended compression levels to our objects. Set DbaDb compression will go through the results, rebuilding indexes with page or row compression, depending on what it thinks is best. Rerunning get DbaDb compression. You can see we have applied page compression to our clustered index. We might want to also apply a certain compression level to our entire orders table. We also might want to apply a certain compression level to our entire orders table. Dbatools does its best to work out the optimal level but perhaps due to the workload or performance monitoring you decide you want to use page compression
>
> **[3:07](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=187)** for all the indexes on the orders table. You can use the compression type parameter to do just that. Reviewing the output of Get DbaDb compression again, you'll now see that we have page compression applied to the clustered and non-clustered indexes on this table. In some cases you might just want to apply a compression level across the whole database. Perhaps when we're refreshing a test environment. For this, we can again specify the compression type parameter but this time don't filter by table. This will apply page compression to every object in the NorthWind database. As you can imagine, this could take a while if there are some big objects or a big database in general. There are some additional parameters available to control how long this runs, such as Max Runtime. Recommend you check out the help docs for examples on how to use them. Like I mentioned, data compression is a really valuable tool for performance gains and for saving space. Dbatools can make implementing this a breeze. I'd highly recommend taking a look at Test DbaDb compression right away see what recommendations look like in your environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (3)
> **Env Vars:** sql (3), sp1 (1)
> **Definitions:** is a  (3)
> **CLI Commands:** find (1), make (1)
> **Analogies:** imagine (1), such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Update database compatibility levels](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/update-database-compatibility-levels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/update-database-compatibility-levels?u=76281980&t=0)** - New [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) versions come out every couple of years at this point, which means that it's a steady recurrence for a DBA to plan and execute and upgrade for our SQL Server [Databases](../../Skills/Software%20Development/Databases.md). We're currently preparing for SQL Server 2022 to be generally available. Each SQL Server major version has a compatibility level which matches up with the engine version. It's a common practice to migrate databases to a new version of SQL Server and leave the databases in the older compatibility level for a short while before bumping them up. Let's take a look at how we can use DBA tools to check on our compatibility levels, and when ready, bump them up to the latest and greatest. First, we have the Get DBA DB compatibility level command which will show us the current compatibility level. In this case, I've specified the Dbatools1 instance and the Pub's database. In the results, you can see it's version 130. That's great, as long as you've memorized which compatibility level matches up with each server version. I know I always have to look this up. Using the same hash table, Compatsplat, we can instead use Test DBA DB compatibility to get some similar information. The benefit of the test command is it's going to return the current database compatibility level, but also the server level, and then return true or false for whether these match in the IsEqual column. You can clearly see that the IsEqual shows false for the Pub's database. And looking further into the results, we can see that the database compatibility level is 130 while the server level is 150. In this case, we're not getting all the benefits from the new SQL Server version at this point so let's take a look at how we can bump that up. Once again, we're using the same hash table but with the Set DBA DB compatibility, which as you can imagine
>
> **[1:33](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/update-database-compatibility-levels?u=76281980&t=93)** is going to change our compatibility level. Since I'm not passing in any other parameters, the compatibility level will be set by default to match the server version. You can see in the results it returns the previous compatibility as version 130 and the compatibility is now version 150. Rerunning Test DBA DB compatibility now will show IsEqual is true, and our database compatibility level matches that of our server version. Now our database will be able to take advantage of all the new features on the higher compatibility level.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (6), [Databases](../../Skills/Software%20Development/Databases.md) (3)
> **Env Vars:** sql (6), dba (6)
> **Versions:** version 130 (2), version 150 (1)
> **Definitions:** means that (1)
> **Analogies:** imagine (1)
> **Speakers:** - new (1)

#### [Insert data into SQL Server tables](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=0)** - [Instructor] As data professionals, we like data in tables. It's a great way of storing information we want to keep track of and quite often in the past, I've found myself generating data in [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) from some process and then wishing there was an easy way to just save that into a database table. And now there is, Write-DbaDbTableData will take data we have in a PowerShell object and using [SQL](../../Skills/Data%20Science/SQL.md) bulk copy, will insert it into our database table. For these examples, we're going to be writing data into the database admin database. So, I've set up a hash table with the connection information that we can reuse for splatting. Let's start with a simple example. We've already used Get-DbaDatabase a few times, so we know that it gets information about [Databases](../../Skills/Software%20Development/Databases.md) in RSD. I'm selecting just a few properties for now, the name, owner, status, and last full backup time. And then, we'll pipe that into Write-DbaDbDataTable, and that's where the magic happens. I also want to point out the AutoCreateTable parameter. This means that DBA tools will create the destination table on the fly, based on the objects you passed in. If we pop over to SSMS, we can see that there is now a database info table in our database. Looks pretty good. One thing to consider though, when you're using DBA tools to create the table is that it'll do its best to work out which data types to use. You can see for last full backup, it worked out that that was a date, so created a date time to column for it. But for string data, it will just create NVARCHAR max columns. And so for tables that you are looking to keep and use long term, I'd recommend creating the table with the appropriate data types first,
>
> **[1:34](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=94)** and then using Write-DbaDbDataTable to insert the data. In our next examples, we already have a customer table designed and created in the database admin database. In this case, we'll read in data from the CSV, and then pipe that through to Write-DbaDataTable to insert the data. If we select from the table, you can now see we have all our data available. There are so many times when this could be useful. We do have a couple of other parameters for this command that are worth mentioning. If you're reloading the same data as part of an ETL job, you can use the truncate parameter to empty out the table first, before reloading the data. If we didn't use truncate here and we tried to reload, we'd get a primary key violation. You can also control the batch size. This can be useful for getting the optimal performance for your load, so I would recommend testing a few batch sizes and measuring which is faster. Here, we're changing this to insert in batches of 1000 rows instead of the default, which is 50,000. You'll also notice that this time I'm loading the CSV into a variable and then passing that in as an input object to Write-DbaDataTable. This can speed up the insert process, but does require PowerShell to hold all that data in memory. There are many options to test out on this command, but I would almost guarantee it's one of the commands you'll come back to over and over again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** dba (2), csv (2), sql (1), rsd (1), ssms (1)
> **Tools:** powershell (3)
> **Definitions:** means that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. Migrations Made Easy with dbatools

[↑ Back to Table of Contents](#table-of-contents)

#### [Migrate whole instances with one line of code](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=0)** - [Instructor] I mentioned in the early videos how dbatools got its start as a way of migrating the [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) instances behind [SharePoint](../../Skills/Cloud%20Computing/SharePoint.md) from one server to another. This video is all about Start-DbaMigration and the magic that this one command can accomplish. Be prepared to be impressed. First, we're going to take a look at the help docs for Start-DbaMigration. You know by this point we can use Get-Help for that and view it in our console. We can also use the online parameter to open the docs in our web browser. This is my personal preference for some of the more complicated commands so I can keep that window open while I work through my examples. On [Windows](../../Glossary/Service/Windows.md), running this would immediately open the web browser. But in our container we'll need to hold Ctrl and click the link returned. You can see there's a lot of information returned about what is going to be migrated from this command and how to exclude certain things. It's quite likely that you'll find something in here that is very close to what you're trying to accomplish. When you do, you can just copy and paste that into your VS code window and start tweaking the parameters for your environment. We have the simplest example for our migration. We're looking to migrate everything from the dbatools1 instance over to the dbatools2. We're going to specify the backup restore method for how the [Databases](../../Skills/Software%20Development/Databases.md) should be migrated, and for that we need to provide a shared path that both the SQL Server Instant Service accounts have access to. We've kicked off this migration and you'll see some information returned as it gets started. There are a few warnings returned for items that could not be migrated due to the fact we're running in containers on [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md). For example, Copy DBA credential is only supported on Windows. When it gets to migrating the databases you can see that they are first backed
>
> **[1:33](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=93)** up to the shared location from dbatools1 and then restored onto the dbatools2 instance. This is probably the most important part of our migration since this includes all of the important data stored within those databases. The results of the command show all the things that were migrated. First up, you can see the configuration values that were copied from dbatools1 over to dbatools2. This means we can be sure that our instances are configured the exact same. Some of these configurations have been changed but require a restart to take effect. If we scroll down further we'll find our three user databases that were migrated or show as successful, which is good. We also have a list of logins that have been migrated. This includes [SQL](../../Skills/Data%20Science/SQL.md) logins, Windows users and Windows groups. If they already exist on the destination there will be a message that they have been skipped. The list continues on mentioning agent alerts, jobs schedules, and many more items. This command is great for getting full instances copied over and I'd recommend you give it a run or a test environment and investigate all the the items that can be migrated. We don't always want this big bang approach. For that, we can look at some of the copy commands that are wrapped up within Start-DbaMigration separately. This will give us more control and we'll look at those options next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (4), [Databases](../../Skills/Software%20Development/Databases.md) (4), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (2), [SharePoint](../../Skills/Cloud%20Computing/SharePoint.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Env Vars:** sql (3), dba (1)
> **UI Navigation:** open the (2), scroll down (1)
> **CLI Commands:** find (2)
> **Documentation:** the docs (1)
> **Tools:** vs code (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Simple database migrations](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=0)** - [Narrator] Previously we looked at Big Bang migrations basically taking everything we possibly could from one instance over to another. In the real world that's not always what we want and the beauty of how that start DBA Migration Command is written is that it's basically a rapid script around a whole bunch of copy commands. Let's take a look at just migrating our [Databases](../../Skills/Software%20Development/Databases.md) with copy DBA database. The databases are usually the most complex part of our migrations and it makes sense. All of our important data is in there so we need to make sure we can minimize the downtime window but also have confidence that all the data is going to get from one instance to another. Let's first remind ourselves of which databases are aware in our environment. Looking at the results from GET DBA database you can see we have three databases on DBA tools one. And there are currently none on DBA tools two. We can migrate all three of these databases with the copy DBA database command. I'll specify the source and destination instances and set the old databases switch to True. As for the migration method, we're going to use Backup Restore which requires a shared path that both [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) instances accounts have access to. As that runs, you'll see in the messaging that there are some backups happening and then some restores taking place. Once that finishes up you'll get a summary of the results hopefully showing that all the databases were successfully migrated. Rerunning Get DBA database, you can now see that we have all three databases on both instances and all are online. Let's remove those databases from DBA tools two
>
> **[1:34](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=94)** by piping the results of GET DBA database specifying the DBA tools two instance through to remove DBA database so we can look at another option for our migration. I'll use the same hash table from the previous copy but this time I'm adding the set source offline switch. I personally like to use this so that as expected from the name, once the databases are migrated to the destination, they're set offline on the source. This avoids people accidentally connecting to the old database. Instead, they'll receive an error and we can be sure that folks are connected to the new instance. If we again, run get DBA database you can see our databases have been successfully migrated. They show online and available on DBA tools two but on DBA tools one they're offline so people can't access them. This has been a great example of a simple migration. The downtime window required will be the time it takes to back up and restore those databases. This is fine for small databases but with larger ones that could span hours. Let's set our environment back to how it was at the start of this video so we can explore a more advanced migration in the next one. we'll bring the databases on DBA tools one back online and drop those that we migrated to DBA Tools two. Perfect, we're back to our pre-migration state. See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (14), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1)
> **Env Vars:** dba (16), sql (1)
> **API Endpoints:** get  (2)
> **Cross-References:** in the next (2)
> **CLI Commands:** make (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [narrator] (1)

#### [More advanced database migrations](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=0)** - [Instructor] Imagine if the [Databases](../../Skills/Software%20Development/Databases.md) you want to migrate are quite large, and the amount of time to back up and restore them is longer than the downtime window you have for your migration, what then? Well let's look at a way that we can still use copy DBA database, but we can pre-stage most of the data before the downtime window, ensuring we can complete our migration quickly and efficiently. Let's check out again where our databases are first. With get DBA database, we can see that we have three small databases on DBA tools one. Now, I said we were going to migrate big databases, but we can execute the same process with any database. It'll just take longer for the first copy process if your databases are larger, the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the process will remain exactly the same. If you completed the previous video on simple database migrations, this code should look really similar. We are again, specifying the source and destination instances, as well as noting that we are using the backup restore method, and therefore specifying a shared path for those backups and restores. The differences here, are that I'm only specifying one database, using the database parameter, but also I have set no recovery to true. This means that the restore process will not bring the database online. Instead, it will be in recovery, and we'll be able to apply newer backups on top of that first full backup. When we run this code, we'll see output showing the backup and restore happening. As I mentioned, the larger the database, the longer this process will take to complete. It's also worth noting that this is now the start of your LSN chain. If you're in full recovery mode, this full backup is what future transaction lock backups will be based on. Running get DBA database again,
>
> **[1:34](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=94)** you'll see we still have Northwind online on DBA tools one, but we also have a copy on DBA tools two, and the status is restoring, this is perfect. We have pre-staged the full backup, which is the majority of the data in our database that we want to migrate. To be able to prove that we're migrating newer data than that full backup we've pre-staged, Let's use invoke DBA query to query the categories table in the Northwind database on DBA tools one. We can insert a new row, again using invoke DBA query, for our vegetable category. This obviously wasn't in the full backup. We've already pre-staged on DBA tools two, ready for the cut over. Now it's migration time. We've got our downtime window, and we're ready for the final cut over. Hopefully the application is down, and the database is now in its final state to be migrated. Depending on how long ago you pre-staged that full backup, you may have differential backups, or multiple transaction log backups taken. We'll run backup DBA database, to take a final transaction log backup, and then we'll run copy DBA database again. This time specifying both the use last backup, and continue switches. This means that backups taken since the full we've pre-staged, will be applied in order on top of that restoring copy of the Northwind database on DBA tools two. We've also used the set source offline parameter, to set the copy on DBA tools one offline, so there's no confusion on where the database now resides. Let's try and get DBA database to show Northwind is online on DBA tools two, and offline on DBA tools one, completing our migration. We can also check on our data, rerunning invoke DBA query
>
> **[3:07](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=187)** to see if our new vegetable category has made it across to the Northwind database on DBA tools two. In the result, you can see nine categories, including the vegetable category we added after the full backup we use for pre-staging. As a final cleanup step in this video, we'll bring the Northwind database on DBA tools one back online, as we might want it for future demos. Hopefully this video has shown you another option for database migrations with DBA tools. This is especially helpful for larger databases. It's also worth noting that we only demoed this using one database, but you could just as easily migrate multiples with this approach.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (6), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** dba (21), lsn (1)
> **Definitions:** means that (2)
> **Cross-References:** previous video (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Migrating logins](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=0)** - [Instructor] Migrating [Databases](../../Skills/Software%20Development/Databases.md) will always be where most of our time is spent when planning migrations. However, if we don't also migrate the logins, those databases won't be much good because our applications and users won't be able to connect to 'em. DBATools can help us to migrate these logins and what's really useful is we can ensure both the password and the SID, which identifies each login are exactly the same on the destination sequence as they were on the source. Running get-DBA login we can see a list of [SQL](../../Skills/Data%20Science/SQL.md) logins, [Windows](../../Glossary/Service/Windows.md) logins and Windows groups that are currently on DBA tools One. Let's take a look at the database users for the North Wind database. This is the database we migrated in the last video. Using GET-DBA DbUser against DBA Tools 1, we can see which of the logins on the system actually have access to the North Wind database. We have two users, Test Orphan one and web user that are within the North Wind database. If we run the same against DBA Tools 2 we can see that when we migrated the North Wind database those users come with the database, but at the moment there are no associated logins for those database users, so they can't connect. We can create a new login with new DBA login. I'll name the user Test Orphan 1, so it matches that database user that already exists. However, this won't work. The SIDS I mentioned earlier will not match between the instance level login that we created and the database level user. We can show that by running get-DBA DB Orphan user. Both logins are still returned as being orphans
>
> **[1:34](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=94)** and that means they won't be able to connect to our database, still. DBA Tools has a really handy command for fixing these orphan logins. Repair DBA DB Orphan user will do exactly what it says on the tin and repair any orphans where the login and user exist, but the SIDS don't match. In the result, you can see that Test Orphan 1 has been successfully fixed but web user shows a message of no matching login. To avoid creating these orphaned users we should instead migrate the logins using Copy-DBAlogin. I'll specify the source and destination instances, and in this case I'll also specify one particular login to migrate. That's the web user login. You can see in the results the login was successfully migrated and you should have noticed that you didn't need to enter a password. That's because DBA tools migrates the current password for you. This is really handy if you happen to have logins where the password has been forgotten over time. Rerunning get-DBA DB Orphan User you can see that web user, no longer shows us being an orphan user and so it will now be able to connect successfully to our Migrated database. Hopefully, you can see how much easier it is to use copy-DBA login rather than having to recreate those logins manually on the new [SQL server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (2), [Windows](../../Glossary/Service/Windows.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1)
> **Env Vars:** dba (12), sql (2), sids (2), sid (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Exporting documentation](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=0)** - [Instructor] Folks, we've made it to our last technical video and I hope you've been enjoying this course, but I've saved the most exciting topic for last. Documentation. Who doesn't love documentation? Let's be real. Documentation can be boring and time consuming but as you can probably guess, DBAtools will make this a lot easier for us. This documentation can be really useful to see what your environment looked like on a certain day. Perhaps suddenly someone doesn't have access, but you can look back and prove that they never actually had that access approved. It's also really useful in disaster recovery situations. If you suddenly have to rebuild an instance from scratch, these scripts will help you get back to exactly how it was. We're going to run Export-DbaInstance, and that will help to document all the instances we've passed in. In this case, the SqlInstance variable, which contains our two test instances. We have provided a path to export to and we've also excluded a couple of items. These are just not applicable in this environment. So to save time, we can just skip over those. As this runs, you can see in the console, the command is going through each instance and providing a bunch of [SQL](../../Skills/Data%20Science/SQL.md) files, all containing important information about our environment. The command can take a little while to run, but you could easily schedule this off hours and let it just churn through creating documentation for you to review the next day. If we open the Export folder in the file explorer, we can see two sub folders, one for each instance, dbatools1 and dbatools2. If we expand the dbatools1 folder, you can see 13 scripts covering different areas of our instance. Looking at the first one, backupdevices, we can see that DBAtools has created the scripts needed
>
> **[1:34](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=94)** to recreate any backup devices that are currently on the dbatools1 instance. The [Databases](../../Skills/Software%20Development/Databases.md).sql file contains the SQL required to restore the last backup chain for each database. You can see that for the Northwind database, we have a full backup to restore, a differential, and a couple of transaction logs. It's worth noting that this is just the scripts to do the restores. If this is needed in a disaster recovery situation, we need to ensure our backups are safe and probably in an offsite location in order to restore them. One final script I want to point out is the sp_configure.sql. This contains all the configuration settings for our instance. There are a few reasons why this is useful, but one of my favorites is that you can use this to ensure that when you migrate databases, that the source and destination instances match exactly. If we also open up the sp_configure.sql for dbatools2, we can use a really neat VS code feature to compare these two files. Pressing Ctrl + Shift + P brings up the command pallete. Then type Comparing to the search bar. Select File Compare Active File With... And choose the dbatools2 sp_configure file. You can now see a split view that compares the dbatools1 file on the left with the dbatools2 file on the right. Any differences will be highlighted so you can quickly review. In this case, CLR is enabled on dbatools1, but not on dbatools2. If we've migrated an application database to dbatools2,
>
> **[3:08](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=188)** that depends on that setting. It might not be working now. This little tip can be really useful in executing smooth migrations. That's our documentation complete. I'm always impressed with how easy it is to create all those scripts, and I'd recommend running it against your environment every so often, and keeping track of any changes, but also having a copy to look back at if you ever need it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (5), [Databases](../../Skills/Software%20Development/Databases.md) (2)
> **File Paths:** sp_configure.sql (2), databases.sql (1)
> **Code Identifiers:** sp_configure (3)
> **Env Vars:** sql (2), clr (1)
> **CLI Commands:** make (1)
> **Tools:** vs code (1)
> **UI Navigation:** open the (1)
> **Prerequisites:** required to (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continue your learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/continue-your-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/continue-your-learning?u=76281980&t=0)** - [Jess] Well, folks, that brings us to the end of this dbatools course. I hope you've enjoyed the content that we've covered here, but please understand, we've only covered a small portion of the 650-plus commands available in this fantastic module. But this doesn't have to be the end. There are many options to continue your learning of dbatools. Play around with the module in your test environment, explore the many commands, and don't forget to use GitHelp to view some great documentation and examples. Also, I was lucky enough to join Chrissy, Rob, and Claudio in writing a book on dbatools. I may be biased, but I'd highly recommend checking "Learn dbatools in a Month of Lunches" out next. There are also plenty of people in the community talking and writing about dbatools. I'd recommend following @psdbatools on Twitter and getting stuck into the conversations. You can also find me all over the internet. If you've enjoyed this course, please let me know, and if you've got questions, I'll be more than happy to try and answer them. The best places to find me are on Twitter and [LinkedIn](../../Skills/Web%20Development/LinkedIn.md). Again, my name is Jess Pomfret. Thank you so much for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** find (2)
> **Best Practices:** don't forget (1)
> **Speakers:** - [jess] (1)


## Instructor

- [Jess Pomfret](../../Instructors/Database%20Management/Jess%20Pomfret.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/automating-sql-server-with-dbatools-3068745)

## Skills Covered

- Microsoft SQL Server
- Server Automation

## Path Context

### In [Advance Your MS SQL Server Skills](../../Paths/Database%20Management/Learning%20Paths/Advance%20Your%20MS%20SQL%20Server%20Skills.md)
← [Querying Microsoft SQL Server 2022](Querying%20Microsoft%20SQL%20Server%202022.md) | **4 of 9** | [Implementing a Data Warehouse with SQL Server 2022](Implementing%20a%20Data%20Warehouse%20with%20SQL%20Server%202022.md) →

## Appears In

- [Advance Your MS SQL Server Skills](../../Paths/Database%20Management/Learning%20Paths/Advance%20Your%20MS%20SQL%20Server%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [SQL Server Fundamentals- Master Basic Query Techniques](../Data%20Science/SQL%20Server%20Fundamentals-%20Master%20Basic%20Query%20Techniques.md) — Microsoft SQL Server
- [SQL Server- Reporting Services](SQL%20Server-%20Reporting%20Services.md) — Microsoft SQL Server
- [SQL Server Containerization- Modern Deployment Strategies for Data-Driven Organizations](SQL%20Server%20Containerization-%20Modern%20Deployment%20Strategies%20for%20Data-Driven%20Organizations.md) — Microsoft SQL Server
- [SQL Server 2022 Administration](SQL%20Server%202022%20Administration.md) — Microsoft SQL Server
- [Implementing a Data Warehouse with SQL Server 2022](Implementing%20a%20Data%20Warehouse%20with%20SQL%20Server%202022.md) — Microsoft SQL Server

---

[↑ Back to top](#)