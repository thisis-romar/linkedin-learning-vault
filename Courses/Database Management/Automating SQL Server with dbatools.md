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
  - '[[Advance Your MS SQL Server Skills]]'
prev_courses:
  - '[[Querying Microsoft SQL Server 2022]]'
next_courses:
  - '[[Implementing a Data Warehouse with SQL Server 2022]]'
path_nav: '[{"path":"Advance Your MS SQL Server Skills","position":4,"total":9,"prev":"Querying Microsoft SQL Server 2022","next":"Implementing a Data Warehouse with SQL Server 2022"}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/microsoft-sql-server
  - skill/server-automation
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Automating%20SQL%20Server%20with%20dbatools.md)

![Automating SQL Server with dbatools](https://media.licdn.com/dms/image/v2/D560DAQHn4vbx24fVZQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1667411820482?e=2147483647&amp;v=beta&amp;t=fHoMzdEPmd78Pgo-xUqfUpXIj_FO_3D791togoyLgBo)

# Automating SQL Server with dbatools

> If you want to learn more about automating SQL Server, you’ve come to the right place. Did you know you can use the open-source PowerShell module dbatools to manage your SQL Server estate? In this course, instructor Jess Pomfret covers the skills you need to know to automate SQL Server with dbatools, helping you optimize your workflow, database performance, and overall server management experience

> [LinkedIn Learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools) | 1h | Intermediate | 20K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (3 videos)
- **[[#2. 1. What Is dbatools?]]** (4 videos)
- **[[#3. 2. Get Information]]** (6 videos)
- **[[#4. 3. Set Information]]** (4 videos)
- **[[#5. 4. Migrations Made Easy with dbatools]]** (5 videos)
- **[[#6. Conclusion]]** (1 videos)

### 1. Introduction

#### Why dbatools?
> [LinkedIn Learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/why-dbatools-25063140?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/why-dbatools-25063140?u=76281980&t=0)** - Are you a database professional, Curious about how PowerShell can help make your life easier?
>
> **[0:05](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/why-dbatools-25063140?u=76281980&t=5)** Have you maybe heard about the DBA tools module, but never had the time to get stuck in and really learn what it's all about?
>
> **[0:10](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/why-dbatools-25063140?u=76281980&t=10)** In this course, we're going to start with the basics.
>
> **[0:13](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/why-dbatools-25063140?u=76281980&t=13)** We'll find and download the module, explore the available commands, and figure out how we can use the Built-in help documentation to make using them easy.
>
> **[0:21](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/why-dbatools-25063140?u=76281980&t=21)** Then we'll discuss key topics to improve how you administer your SQL server environments.
>
> **[0:26](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/why-dbatools-25063140?u=76281980&t=26)** My name's Jess Pomfret.
>
> **[0:27](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/why-dbatools-25063140?u=76281980&t=27)** I've worked with SQL Server databases for over 10 years, and I'm a Microsoft MVP.
>
> **[0:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/why-dbatools-25063140?u=76281980&t=32)** I also love PowerShell and automation.
>
> **[0:35](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/why-dbatools-25063140?u=76281980&t=35)** I've been a major contributor to the DBA Tools Project for several years now, and I can't wait to teach more people about it.
>
> **[0:41](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/why-dbatools-25063140?u=76281980&t=41)** By the end, you'll be able to integrate DBA tools into how you manage SQL servers, and maybe you'll even be inspired to get involved and help build the next great DBA tools command.

> [!info]- Semantic Content
>
> **Env Vars:** dba (4), sql (3), mvp (1)
> **CLI Commands:** make (2), find (1)
> **Code Keywords:** module (2)
> **Tools:** powershell (2)
> **Exercise Files:** download the (1)
> **Speakers:** - are (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/what-you-should-know?u=76281980&t=0)** - [Instructor] In order to get the most out of this course, there are a few things that it would be good to know at least the basics of.
>
> **[0:05](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/what-you-should-know?u=76281980&t=5)** We're going to be using a GitHub repo that contains a dev container with not just all of our code, but two test SQL server instances inside.
>
> **[0:13](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/what-you-should-know?u=76281980&t=13)** We'll cover how to get this all set up and working in the next video, but if you're already familiar with VSCode, that will be helpful.
>
> **[0:19](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/what-you-should-know?u=76281980&t=19)** VSCode is a free, open-source, cross-platform code editor.
>
> **[0:22](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/what-you-should-know?u=76281980&t=22)** It's super useful for developing in many languages.
>
> **[0:25](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/what-you-should-know?u=76281980&t=25)** The fact that it's cross-platform means that you can follow along with this course no matter what your operating system of choice is.
>
> **[0:31](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/what-you-should-know?u=76281980&t=31)** There is also a LinkedIn Learning course that might be useful to review if you've not worked with it before.
>
> **[0:35](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/what-you-should-know?u=76281980&t=35)** However, during this course, we'll cover all the features you'll need to know to be able to navigate around and execute the demo code in your own environment.
>
> **[0:43](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/what-you-should-know?u=76281980&t=43)** Otherwise, you just need to know some basic database administration concepts, as we'll be taking that knowledge and translating it into PowerShell with dbatools.
>
> **[0:50](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/what-you-should-know?u=76281980&t=50)** That includes topics like database backups and restores, SQL agent jobs, SQL logins, and generally, just how our SQL Server environment works.

> [!info]- Semantic Content
>
> **Env Vars:** sql (4)
> **Tools:** github (1), powershell (1)
> **Definitions:** is a  (1), means that (1)
> **Prerequisites:** set up (1), you'll need (1)
> **Code Keywords:** super (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** github repo (1)
> **Speakers:** - [instructor] (1)

#### Setting up your environment
> [LinkedIn Learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=0)** - [Instructor] As I mentioned, the demo environment for this course is contained in a GitHub repo.
>
> **[0:04](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=4)** There are a few things you need to download and get set up on your machine in order for you to get started on these demos.
>
> **[0:10](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=10)** These details are all outlined under the installing heading on the readme.
>
> **[0:14](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=14)** Once you have these tools installed you'll clone this repo down to your machine.
>
> **[0:18](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=18)** First, open a PowerShell console and navigate to the folder you want to store the code repo in.
>
> **[0:23](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=23)** Here I'm navigating to C:\LinkedInLearning.
>
> **[0:26](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=26)** We'll then perform a GitClone.
>
> **[0:28](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=28)** You can get the URL you need from GitHub here.
>
> **[0:30](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=30)** Press the code button and then click this copy button.
>
> **[0:34](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=34)** Back in our PowerShell console, we'll type git clone and paste in the URL.
>
> **[0:41](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=41)** Navigate into the new folder that has been created by typing cd and then the folder name.
>
> **[0:46](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=46)** Quick tip, you only have to type the first few letters and then you can press tab to complete the folder name.
>
> **[0:50](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=50)** Once you're in the folder name, type code.
>
> **[0:54](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=54)** Full stop, press enter.
>
> **[0:56](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=56)** That will open VS Code in your folder.
>
> **[0:59](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=59)** If you get a popup when VS Code opens you can choose to trust the authors of these files.
>
> **[1:03](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=63)** This is a security feature since VS Code allows script files to be executed.
>
> **[1:07](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=67)** When you open the folder for the first time you should get a popup asking if you want to reopen in a container.
>
> **[1:12](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=72)** Press yes.
>
> **[1:13](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=73)** This might take a little while if it's the first time as the container layers will need to be downloaded from the internet.
>
> **[1:18](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=78)** If you don't get a popup or you miss it press control shift P to open the command palette.
>
> **[1:23](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=83)** You can also use F1 on windows.
>
> **[1:25](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=85)** Once the command palette is open search for Remote Containers: Rebuild and Reopen.
>
> **[1:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=92)** Choose the Remote Containers: Rebuild and Reopen in a container option and the containers will start to download and your dev container will spin up.
>
> **[1:41](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=101)** Once the containers are downloaded and up and running you'll be able to run the core scripts against the two test SQL instances that are now up and running within the development environment.
>
> **[1:49](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=109)** It's pretty neat.
>
> **[1:50](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=110)** The repo also takes advantage of branches.
>
> **[1:53](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=113)** There is a branch that corresponds to each video and you can change branches by clicking the button here at the bottom and choosing the branch.
>
> **[2:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=120)** For example, 02-01.
>
> **[2:03](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=123)** I'd also recommend that you run the scripts in a plain PowerShell session rather than the PowerShell integrated terminal.
>
> **[2:08](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=128)** Press the new button here and a fresh window will open where you can run your code.
>
> **[2:18](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=138)** Now you're all set up.
>
> **[2:19](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/setting-up-your-environment?u=76281980&t=139)** Time to dive into the content.

> [!info]- Semantic Content
>
> **Tools:** powershell (4), vs code (3), github (2), terminal (1)
> **Env Vars:** url (2), sql (1)
> **UI Navigation:** open the (2), navigate to (1)
> **CLI Commands:** git (1), cd (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **Documentation:** the readme (1)
> **Exercise Files:** github repo (1)


### 2. 1. What Is dbatools?

#### Introducing dbatools
> [LinkedIn Learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/introducing-dbatools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/introducing-dbatools?u=76281980&t=0)** - [Instructor] Have you ever dreamed of an easier way to manage your SQL Server estate?
>
> **[0:03](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/introducing-dbatools?u=76281980&t=3)** Are you tired of clicking through GUIs for every instance, every database, or every job just to complete your morning checks?
>
> **[0:09](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/introducing-dbatools?u=76281980&t=9)** If so, follow us on this journey as we learn all about how dbatools can make your life easier.
>
> **[0:14](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/introducing-dbatools?u=76281980&t=14)** Dbatools is an open source PowerShell module written and maintained by the community.
>
> **[0:18](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/introducing-dbatools?u=76281980&t=18)** It was first created by Chrissy LeMaire back in 2014 when she needed to migrate some SharePoint instances, so she wrote a long PowerShell script to migrate all the pieces and parts to the new instance.
>
> **[0:28](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/introducing-dbatools?u=76281980&t=28)** Chrissy was talking to some folks in 2015 about this project, and they convinced her how useful it was and that she should turn it into a module and put it up on GitHub.
>
> **[0:35](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/introducing-dbatools?u=76281980&t=35)** This allowed people to contribute and use the code for their own migrations.
>
> **[0:39](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/introducing-dbatools?u=76281980&t=39)** Over time, the module has grown to include over 650 different functions that can help you manage your SQL Server environment.
>
> **[0:46](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/introducing-dbatools?u=76281980&t=46)** Basically everything you can do in SQL Server Management Studio, you can also do with dbatools.
>
> **[0:50](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/introducing-dbatools?u=76281980&t=50)** For example, check in on whether your SQL Server agent jobs are all running successfully.
>
> **[0:55](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/introducing-dbatools?u=76281980&t=55)** Ensuring this community module is enterprise-ready is very important.
>
> **[0:58](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/introducing-dbatools?u=76281980&t=58)** We want to make sure that you can take this into your workplaces and start scripting and automating your work with confidence.
>
> **[1:03](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/introducing-dbatools?u=76281980&t=63)** Therefore, we have security and reliability checks built into the development and deployment processes.
>
> **[1:08](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/introducing-dbatools?u=76281980&t=68)** This is vital to ensure users can depend on the module with every new release.
>
> **[1:12](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/introducing-dbatools?u=76281980&t=72)** One of the ways that the dbatools team ensures reliability is by running pester tests.
>
> **[1:17](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/introducing-dbatools?u=76281980&t=77)** Pester is a PowerShell testing framework that allows us to ensure that our code does what we think it should.
>
> **[1:21](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/introducing-dbatools?u=76281980&t=81)** Tests are created for every function, and whenever someone creates a pull request against the module, all those tests run to ensure nothing is broken.
>
> **[1:28](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/introducing-dbatools?u=76281980&t=88)** This means that we can feel confident in the new versions that we deliver.
>
> **[1:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/introducing-dbatools?u=76281980&t=92)** I'm so excited to share this content with you.
>
> **[1:34](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/introducing-dbatools?u=76281980&t=94)** I look forward to seeing what the next wave of dbatools fans will build and create with this great module.
>
> **[1:38](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/introducing-dbatools?u=76281980&t=98)** Let's get to it.

> [!info]- Semantic Content
>
> **Code Keywords:** module (7), function (1), let (1)
> **Env Vars:** sql (4)
> **Tools:** powershell (3), github (1)
> **Definitions:** is an  (1), is a  (1), means that (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Installing and updating the module
> [LinkedIn Learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=0)** - [Presenter] PowerShell includes a lot of functionality out of the box for you to use when automating and scripting administration tasks in your environment.
>
> **[0:07](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=7)** However, in my opinion, one of the biggest strengths of PowerShell is the ability to download and import modules to add even more functionality.
>
> **[0:13](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=13)** This is what we need to do to start using dbatools.
>
> **[0:17](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=17)** dbatools is hosted on the PowerShell Gallery which is the central repository for sharing PowerShell modules.
>
> **[0:21](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=21)** The gallery is backed by Microsoft and you can find over 10,000 unique packages there.
>
> **[0:26](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=26)** These packages include both Microsoft modules such as SQL Server, as well as community modules like dbatools.
>
> **[0:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=32)** If you navigate to the gallery page for dbatools, you can see there is a load of information.
>
> **[0:36](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=36)** There are some really great stats on the left hand side showing the last published date as well as how many downloads of this version, around 8,000 and total downloads for the module, over 1.8 million.
>
> **[0:46](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=46)** This is a well loved and used module.
>
> **[0:48](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=48)** There are also several examples shown for how to install the module and a full list of previously published versions.
>
> **[0:54](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=54)** You can see the release cadence for the dbatools module is fast and there are often multiple releases per week as new features are added and bugs are squashed.
>
> **[1:02](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=62)** The easiest way to install modules from the PowerShell Gallery is to use PowerShell.
>
> **[1:05](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=65)** We can actually find and install modules right from the console using PowerShell Get, which is built in.
>
> **[1:10](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=70)** Firstly, we can use Find-Module with either a module name like dbatools or a pattern to reach out to the gallery and find the latest versions.
>
> **[1:18](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=78)** This does mean you need internet access.
>
> **[1:20](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=80)** We'll cover another option for getting the module if you don't have internet access in a second.
>
> **[1:25](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=85)** Once we've found the module we want to install, here you can see dbatools module version 1.1.127.
>
> **[1:30](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=90)** We can use Install-Module to download and install the module.
>
> **[1:34](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=94)** If use no other parameters, the module will be downloaded to the module directory within your documents.
>
> **[1:38](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=98)** If you'd like to install it for any other users on the computer, adding the scope or users if you have permissions, will install it into a common path so it'll be available for all users to access.
>
> **[1:48](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=108)** As mentioned, you do need the internet for Find-Module and Install-Module to work.
>
> **[1:52](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=112)** We recommend installing dbatools on your management box.
>
> **[1:56](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=116)** This will likely be where your SQL Server Management Studio will be installed for managing your SQL server estate.
>
> **[2:01](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=121)** If your management box doesn't have internet access, you can use Save-Module to download the module from somewhere that can access the internet and then copy that folder into the module path.
>
> **[2:09](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=129)** If you need to know where your PowerShell session is looking for modules, you can run the highlighted snippet to see a list of folders.
>
> **[2:15](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=135)** The first path will take precedence when PowerShell is looking for modules but copying the dbatools folder into any of these module folders will make it available for you to import.
>
> **[2:23](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/installing-and-updating-the-module?u=76281980&t=143)** Now that we have the module downloaded and installed, we're ready to start exploring and experimenting with all the great commands that are available.

> [!info]- Semantic Content
>
> **Code Keywords:** module (20), import. (1)
> **Tools:** powershell (9)
> **Prerequisites:** install (9)
> **CLI Commands:** find (5), make (1)
> **Env Vars:** sql (3)
> **Versions:** 1.8 (1), version 1 (1), 1.127 (1)
> **Definitions:** is a  (2)
> **UI Navigation:** navigate to (1)

#### Find the command you need
> [LinkedIn Learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980&t=0)** - [Instructor] Remember when I told you there were over 650 different functions in DBA tools and you wondered how on earth will I find the command I need?
>
> **[0:07](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980&t=7)** The good news is PowerShell and DBA tools have got you covered.
>
> **[0:10](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980&t=10)** Let's take a look at some of the options we have available to us and find some useful commands to get started with.
>
> **[0:15](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980&t=15)** There are a few commands within PowerShell that I highlight whenever I talk about the language.
>
> **[0:19](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980&t=19)** These are not DBA tools specific, so it can be used with any modules, but they allow you to find your way around without leaving the PowerShell console.
>
> **[0:24](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980&t=24)** The first is GET Command.
>
> **[0:26](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980&t=26)** Get Command does exactly what it says on the tin and you'll find that as we start using DBA tools that the naming conventions really help us to understand what the function does, but GET Command allows us to get commands, and if we run it with the module parameter and passing DBA tools, you'll see we get a list of all the DBA tool commands.
>
> **[0:42](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980&t=42)** And as I mentioned, there are quite a few.
>
> **[0:45](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980&t=45)** We can narrow down this list though by using a pattern.
>
> **[0:48](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980&t=48)** Here, you can see I've used the word compression with a wildcard symbol either side.
>
> **[0:53](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980&t=53)** In the results, you can see that PowerShell has found us three commands relating to compression.
>
> **[0:57](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980&t=57)** A GET, a SET and a test command.
>
> **[0:59](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980&t=59)** As I stated, GET that command as a PowerShell level so we can use that anywhere.
>
> **[1:03](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980&t=63)** But DBA tools has gone one step further for us and added find-DBA Command Get Command only looks at the name of the functions whereas find-DBA Command will search all of the comment base help for your keyword and we'll talk more about help in a second.
>
> **[1:16](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980&t=76)** So again, if I pass in the compression pattern I'll get a lot more results.
>
> **[1:21](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980&t=81)** For example, backup-DbaDatabase is now returned.
>
> **[1:24](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980&t=84)** From the command name, I don't see any mention of compression, but it supports backup compression and mentions how to use that within the help.
>
> **[1:30](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980&t=90)** There is also a tag parameter that can be used with find-DBA Command if we pass in job for this parameter, we'll get a list of all the DBA tool commands that relate to jobs.
>
> **[1:39](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980&t=99)** You can see there's quite a few commands that will help us get started managing our SQL Server agent jobs.
>
> **[1:44](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980&t=104)** The two commands we've learned in this video are definitely worth keeping in front of your mind as you start using PowerShell more.
>
> **[1:48](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980&t=108)** It's always nice to avoid a context switch and not have to leave the console to go and find the name of the next command you need.
>
> **[1:53](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-the-command-you-need?u=76281980&t=113)** Now that we know how to find the commands we need the next step is learning how to use them and we'll cover that next.

> [!info]- Semantic Content
>
> **Env Vars:** dba (11), set (1), sql (1)
> **CLI Commands:** find (9)
> **Code Keywords:** pass (2), let (1), function (1), module (1), switch (1)
> **Tools:** powershell (6)
> **API Endpoints:** get  (3)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Running your first command
> [LinkedIn Learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=0)** - [User] One of my favorite things about PowerShell is that it likes to teach you as you go.
>
> **[0:04](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=4)** We've already seen how it can help us find the commands we're going to need to use with GET command and Find-DBA command.
>
> **[0:09](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=9)** Now we're going to learn all about the comment based help that's included with every command in the module.
>
> **[0:14](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=14)** Get-Help is the second PowerShell level command that I believe everyone should have in their tool belt.
>
> **[0:18](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=18)** This will show you all the details you need to know for the command you're looking to use.
>
> **[0:23](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=23)** If we run Get-Help for Test-DbaDbCompression with no other parameters, we'll get a short synopsis, information on the syntax, and a longer description.
>
> **[0:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=32)** Depending on the command, these descriptions can be quite detailed, explaining any calculations you use or knowledge and expertise that has gone into creating the command.
>
> **[0:40](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=40)** A great parameter to use if you're on a Windows machine is ShowWindow.
>
> **[0:43](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=43)** This will open up a new window showing all of the help content for this command.
>
> **[0:47](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=47)** This is really useful because you can keep it open and refer back to it while you work on your scripts.
>
> **[0:52](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=52)** Now, we are running our demo environment within a Dev container, which is Linux-based, so the ShowWindow parameter won't work here unfortunately.
>
> **[0:59](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=59)** Another good option and one that is supported for all the dbatools commands is to use the online parameter.
>
> **[1:04](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=64)** Again, you can see it doesn't work perfectly in our Dev container, as there is no web browser within this container, but VS Code lets us open the link by pressing control and clicking on the link.
>
> **[1:15](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=75)** This will open the docs.[dbatools.io](https://dbatools.io) website which contains a web version of all of the comment-based help from each command.
>
> **[1:21](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=81)** If you scroll down the page a little you can see every command has at least one example showing you exactly how to use the command.
>
> **[1:28](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=88)** These examples can also be shown directly in the console, either by using the Examples parameter or by using the Full parameter to show all of the available help for that command.
>
> **[1:36](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=96)** Quite often I'll run this for commands that I often use just so I can easily copy and paste the code into my script and then change the parameters for my scenario.
>
> **[1:44](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=104)** Saves me a little typing and I know I won't miss any required parameters.
>
> **[1:48](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=108)** If we scroll up to the first few examples of Test-DbaDbCompression, we can see the simplest ways to run the command.
>
> **[1:55](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=115)** These examples are usually ordered in most simple to more complex as you work down.
>
> **[1:59](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=119)** Example one shows us reviewing all of the potential compression gains for our entire instance.
>
> **[2:04](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=124)** Let's copy that example into our VS Code window and update the parameters for our environment.
>
> **[2:11](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=131)** Let's update the SqlInstance parameter to dbatools1, which is one of the SQL Server instances available in our Dev container.
>
> **[2:18](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=138)** When we execute this, we can see that dbatools goes out to our dbatools1 instance and investigates whether there are any compression gains to be enjoyed.
>
> **[2:25](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=145)** The results are displayed in a list within the console.
>
> **[2:28](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=148)** Just like that we've run our first dbatools command against a real life SQL server.
>
> **[2:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=152)** As we work through this course and as you use dbatools in the real world, I would highly recommend continuing to look up the help for commands that you are going to use.
>
> **[2:40](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/running-your-first-command?u=76281980&t=160)** There is a lot of great information in there, and to be honest, even as someone who uses dbatools literally every day, I still review the help and often find new ways to use commands or great code examples I can use.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), module (1), this, (1)
> **Tools:** powershell (2), vs code (2)
> **UI Navigation:** open the (2), scroll down (1), scroll up (1)
> **CLI Commands:** find (3)
> **Env Vars:** sql (2), dba (1)
> **URLs:** [dbatools.io](https://dbatools.io) (1)
> **API Endpoints:** get  (1)
> **Documentation:** the docs (1)


### 3. 2. Get Information

#### Get a list of SQL Servers in your environment
> [LinkedIn Learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=0)** - [Instructor] So when we talk about automating our SQL Server estate with DBA tools, the first step is to keep track of what our estate actually consists of.
>
> **[0:07](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=7)** How many SQL server instances do we have?
>
> **[0:09](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=9)** Are they production or development environments?
>
> **[0:11](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=11)** How do we connect to 'em?
>
> **[0:12](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=12)** Let's take a look at a few options here that will enable us to compile a list of servers that we can use throughout the rest of this series.
>
> **[0:18](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=18)** So first, let's assume you know about all the SQL servers in your estate.
>
> **[0:22](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=22)** You're a good DBA so you keep track of them, and the people in your organization follow the rules.
>
> **[0:26](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=26)** So no SQL servers are just popping up on computers living under people's desks.
>
> **[0:30](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=30)** We'll talk about how to find those later on.
>
> **[0:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=32)** The simplest way of keeping a list is in a text file.
>
> **[0:35](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=35)** Here you can see I have a simple list of my two SQL Server instances that are available in my environment.
>
> **[0:39](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=39)** No details, just a simple list.
>
> **[0:43](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=43)** We can pull that content into our PowerShell session to use with Get-Content.
>
> **[0:47](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=47)** Pretty straightforward and you can see our list of SQL Servers is returned.
>
> **[0:52](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=52)** We can also save that list to a variable so we can reuse it with other commands.
>
> **[0:56](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=56)** Here we'll run the same command as before, but this time save it to the SQL Server variable and then use that variable for the SQL instance parameter on Connect DBA instance.
>
> **[1:04](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=64)** This Command does just that, connects to our SQL instances and you can see that some details about them are returned, such as the version.
>
> **[1:12](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=72)** The next step might be to use a CSV to keep track of your instances.
>
> **[1:15](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=75)** With a CSV, we can add additional properties such as: environment, contact info, which applications connect to which server.
>
> **[1:22](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=82)** You can see in our CSV we again have the SQL instance name but now we can also tell which instances are production versus non-production.
>
> **[1:29](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=89)** To pull that data in, we can use Import-CSV.
>
> **[1:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=92)** This returns an object rather than strings so we have a lot more options for interacting with this data now.
>
> **[1:38](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=98)** Let's again save this data to a variable and then use the variable with the Connect DBA instance command.
>
> **[1:43](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=103)** You'll notice though that we can now filter the data we save in the SQL Server variable using Where-Object.
>
> **[1:48](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=108)** Here we're only returning SQL instances where the environment is test.
>
> **[1:52](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=112)** Since this is an object, We also need to specify the property that contains a SQL instance name.
>
> **[1:57](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=117)** CSV processing is available natively within PowerShell using the import CSV and export CSV commands.
>
> **[2:04](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=124)** If you prefer Excel workbooks for your server list, there is a fantastic open source module called ImportExcel that allows you to read data into PowerShell from Excel and use that within your session.
>
> **[2:14](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=134)** Now we are database folks.
>
> **[2:15](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=135)** We like databases.
>
> **[2:17](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=137)** So what if we keep our SQL instance list in a table within a database?
>
> **[2:20](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=140)** Not a problem.
>
> **[2:21](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=141)** We can easily query database tables and fill our SQL Server variables with that data.
>
> **[2:26](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=146)** The Invoke DBA query command from DBA tools allows us to specify a SQL instance, a database, and a query to execute.
>
> **[2:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=152)** The results will be, again, returned as an object for us to use within our PowerShell sessions.
>
> **[2:38](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=158)** Let's again pass that info into the Connect DBA instance command specifying the SQL Server variable and the SQL Instance property.
>
> **[2:44](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=164)** Now, this is all fine and well when you know about your SQL Server estate but what happens when you're in a new environment or people are installing SQL Server wherever they feel like like it and not involving the DBA team?
>
> **[2:53](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=173)** Well, for that, we have Find-DbaInstance.
>
> **[2:55](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=175)** This function will use a variety of methods to help find sequel instances.
>
> **[3:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=180)** I recommend reviewing the help for this one and fully understanding the functionality.
>
> **[3:07](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=187)** This function can be used to find instances on a specified server or on any computer on an ad domain or on any network connected machine it finds.
>
> **[3:16](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=196)** Some of this functionality can constitute a network scan so make sure if you're going to use that that you chat with your network and security folks first.
>
> **[3:22](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-a-list-of-sql-servers-in-your-environment?u=76281980&t=202)** Now that we have our SQL estate documented and we know how to pull that data in to use within PowerShell, the next step is going to use that list along with DBA tools commands to help manage our estate as a whole.

> [!info]- Semantic Content
>
> **Env Vars:** sql (21), dba (9), csv (7)
> **Code Keywords:** let (4), function (2), module (1), pass (1)
> **CLI Commands:** find (4), make (1)
> **Tools:** powershell (5)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### Get database status across your estate
> [LinkedIn Learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=0)** - [Instructor] I like to describe DBATools as the command line version of SQL Server Management Studio.
>
> **[0:04](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=4)** Tasks that you would usually complete in SSMS can also be completed in the console using DBATools.
>
> **[0:09](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=9)** For example, checking on our databases and making sure they're all in a good state.
>
> **[0:13](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=13)** Let's take a look at how we'd accomplish this now.
>
> **[0:16](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=16)** Let's switch over to VS code where I have our dev container open and ready to go.
>
> **[0:19](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=19)** As we learned in the previous chapter, the first step is to find the command that'll accomplish the task that we need.
>
> **[0:26](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=26)** If you remember, there are two ways to accomplish this, but let's use Find-DbaCommand and pass in the pattern to look for database status.
>
> **[0:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=32)** We've got quite a few results.
>
> **[0:33](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=33)** But for now, we're looking to collect information, so let's focus on the Get commands.
>
> **[0:37](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=37)** I can see a command that might be useful, Get-DbaDbState.
>
> **[0:41](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=41)** The best way to investigate further is to run Get-Help.
>
> **[0:44](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=44)** Let's execute that with the -Full parameter to get all the good stuff.
>
> **[0:48](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=48)** If we scroll up in the output to find the description, we can see that the synopsis is, "Gets various options for databases, hereby called states."
>
> **[0:57](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=57)** Scrolling back down to the examples, let's copy example one into our session.
>
> **[1:07](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=67)** Replacing the example SqlInstance with the SqlInstances variable which contains the list of our SQL server instances.
>
> **[1:13](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=73)** We can execute this and review the results.
>
> **[1:16](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=76)** The results show us our SqlInstance information, DatabaseName, as well as several important pieces of information about the state.
>
> **[1:23](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=83)** We can also just select the properties we care about from the objects returned, like in TSQL.
>
> **[1:28](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=88)** We'll use the pipe symbol, and that will effectively pass the output of the command on the left down the pipeline and into the command on the right, which will select our chosen properties.
>
> **[1:37](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=97)** Here we have chosen the SqlInstance name, the DatabaseName, Database status, whether it is read only or in ReadWrite mode, and the access type, multi or single-user mode.
>
> **[1:46](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=106)** Out of the select object, I'm again using the pipe symbol to change the output to display as a table with format table.
>
> **[1:52](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=112)** When we're using the pipe, we can actually break at that point and start a new line making our code a little easier to read.
>
> **[1:59](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=119)** Here you can see all the databases on dbatools1 are online, available for ReadWrite and configured for multi-user access.
>
> **[2:05](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=125)** It's all looking good.
>
> **[2:07](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=127)** With DBATools though, there's often more than one way to accomplish a task.
>
> **[2:11](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=131)** Let's rerun our Find-DbaCommand and again review the results.
>
> **[2:15](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=135)** Get-DBADatabases returned for this database status pattern.
>
> **[2:18](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=138)** This command returns database objects with all kinds of properties and methods available to explore.
>
> **[2:22](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=142)** So let's see if we can check our database status this way also.
>
> **[2:27](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=147)** In my next code snippet, we're going to use a technique called splatting to format our code, to make it a little easier to read.
>
> **[2:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=152)** We'll use this technique for most of the more complex code in this course.
>
> **[2:36](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=156)** Splatting just means that we define a hash table where the parameters are defined on the left with their values on the right.
>
> **[2:41](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=161)** This hash table is then passed into the command using this special "@" notation.
>
> **[2:45](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=165)** Let's run Get-DbaDatabase, passing in our Sql instances and see what we get by default.
>
> **[2:50](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=170)** DBATools often has a default view set up for commands.
>
> **[2:53](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=173)** In this case, just a few of what has been deemed the more important properties are returned for us, instead of flooding the output with all of them.
>
> **[3:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=180)** A little trick I like to use is piping the results of select object and using the first parameter to just get one result, and then the asterisk to get all the properties.
>
> **[3:09](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=189)** This is like doing a SELECT top one star from a table in SQL Server.
>
> **[3:14](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=194)** You can see in the results, there are a ton of properties.
>
> **[3:16](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=196)** I'll let you explore more of these on your own, but you'll also notice that some of these properties, for example, tables are actually nested objects with even more properties of their own.
>
> **[3:29](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=209)** From all of the available properties, let's select just a few including status and format again as a table.
>
> **[3:36](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=216)** I've shown you two approaches in this section to enable you to review your database status across your environment.
>
> **[3:41](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-database-status-across-your-estate?u=76281980&t=221)** This information can easily be used to create a report that you could run every morning to ensure all your databases are healthy before you've even finished that first cup of coffee.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), pass (2), switch (1), this, (1), type, (1)
> **Env Vars:** sql (3), ssms (1), tsql (1), select (1)
> **CLI Commands:** find (4), make (1)
> **Tools:** command line (1), vs code (1)
> **UI Navigation:** scroll up (1), select the (1)
> **Analogies:** for example (2)
> **SQL:** select (1)
> **Cross-References:** previous chapter (1)

#### Check database last backup times
> [LinkedIn Learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=0)** - One of the most important tasks on the database administrator's morning checklist is to ensure all the databases are being backed up as expected, and that there have been no failures.
>
> **[0:08](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=8)** It should be no surprise at this point that DBA Tools can help with this task.
>
> **[0:12](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=12)** We all know the first step and that's to use find DBA command with the word backup to find a DBA tools command that can help.
>
> **[0:18](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=18)** There are a lot of results returned for this patent.
>
> **[0:20](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=20)** Since we know we're looking to collect information, let's focus on the get commands.
>
> **[0:24](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=24)** Looking through the results we'll find get DBA DB backup history.
>
> **[0:28](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=28)** Both the name and synopsis sound like exactly what we need for this task.
>
> **[0:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=32)** Let's review, Get Help and look at the examples for running this command.
>
> **[0:37](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=37)** Example one is again the simplest option for us so let's copy that and replace the SQL instance name with DBA Tools One.
>
> **[0:49](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=49)** Running that we can see all the backup history for our SQL server.
>
> **[0:52](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=52)** You can see the different types of backups, how big they were, and when they occurred.
>
> **[0:56](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=56)** As it is, this command will return all the backup history that is available in MSDB.
>
> **[1:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=60)** If there's a lot of history you're going to get a lot of results.
>
> **[1:03](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=63)** It's worth looking at some of the other filtering options in the other examples within the help.
>
> **[1:08](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=68)** This is good info but it doesn't tell us whether all our databases have the appropriate backups to meet our recovery goals.
>
> **[1:14](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=74)** Instead, let's again look at get DBA database.
>
> **[1:16](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=76)** This command returns information about our databases so this is a good angle to approach the question.
>
> **[1:22](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=82)** If we pass in our list of SQL instances we can quickly collect information about all our databases and that includes the last backup times.
>
> **[1:29](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=89)** Now we can easily see when our databases have been backed up last.
>
> **[1:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=92)** This is useful, but if we have a larger state we might have thousands of databases to check.
>
> **[1:37](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=97)** Luckily, there's an easier way than just eyeballing the dates to see if they're correct.
>
> **[1:41](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=101)** We can use Where-Object to filter, in this case, display all databases that haven't had a full backup within the last seven days.
>
> **[1:48](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=108)** This will now only return the databases we should have concerns about.
>
> **[1:51](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=111)** You can see we have a few that need a full backup.
>
> **[1:54](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=114)** Once again, DBA tools and PowerShell makes fixing this remarkably easy.
>
> **[1:58](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=118)** We can run that same command as before, filtered by date and then pipe that output into backup DBA database.
>
> **[2:04](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=124)** Of course, I'm going to go ahead and say review the help to look at all the parameters available for this command, but by default this will take a full backup to the default backup location that is defined for your instance.
>
> **[2:14](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=134)** Now we're back in compliance and we have all the full backups we were expecting to have.
>
> **[2:18](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/check-database-last-backup-times?u=76281980&t=138)** Our backups are all in line and we can carry on with our day knowing that our data is safe.

> [!info]- Semantic Content
>
> **Env Vars:** dba (8), sql (3), msdb (1)
> **Code Keywords:** let (4), pass (1), case, (1)
> **CLI Commands:** find (3)
> **Tools:** powershell (1)
> **Definitions:** is a  (1)
> **Speakers:** - one (1)

#### Get SQL Server patch levels
> [LinkedIn Learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=0)** - [Instructor] Keeping our SQL servers up to date is another important task as a DBA.
>
> **[0:04](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=4)** Microsoft often releases security patches and hot fixes for the SQL server versions we have deployed in our estate.
>
> **[0:09](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=9)** So for us to be as secure as possible, it's good to be up to date with applying those patches.
>
> **[0:14](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=14)** In the past, before DBA tools changed my life, I would keep a spreadsheet or a table in a database up to date with a list of all the SQL servers and some important information, including their patch level.
>
> **[0:24](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=24)** As I applied cumulative updates or security fixes, I would retrieve the new build numbers and update that information.
>
> **[0:30](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=30)** This worked well unless I forgot to update the information.
>
> **[0:33](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=33)** Lucky for us, we can now rely on automated scripts to update this information for us.
>
> **[0:37](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=37)** Using DBA tools, we can check what is actually installed in our estate and ensure our documentation is never out of date.
>
> **[0:43](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=43)** Let's take a look at our options.
>
> **[0:47](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=47)** If we run Connect DBA Instance to connect to our DBA tools one instance, you can see the result return includes a version number.
>
> **[0:54](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=54)** In our case it's 15 dot zero dot 4249.
>
> **[0:58](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=58)** That's lovely, but I always have a hard time remembering the friendly name of SQL Server Version 15.
>
> **[1:03](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=63)** We can use GET DBA Build to look this up without needing to leave the console.
>
> **[1:07](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=67)** The results give us all the details we need.
>
> **[1:09](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=69)** It's SQL Server 2019 cumulative update 17.
>
> **[1:13](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=73)** Note, the SP level shows RTM since Microsoft has moved to a model where they only release cumulative updates or CUs instead of service packs or SPs.
>
> **[1:22](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=82)** Get DBA Build can also be run directly against one or many SQL server instances to get the build information.
>
> **[1:27](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=87)** Here, we'll pass in our list of SQL instances and format the results in a table.
>
> **[1:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=92)** You can see I've got one 2019 instance and one SQL 2022 instance.
>
> **[1:36](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=96)** So far we've just looked up which build rom, but we really need to answer the question, are we up to date with patches?
>
> **[1:42](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=102)** Is my version the latest?
>
> **[1:44](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=104)** To answer this, we can use test DBA Build.
>
> **[1:46](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=106)** Again, we'll pass in our SQL instances and in this case I'm selecting just the properties I care about and then formatting to a table.
>
> **[1:54](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=114)** You can see in the results the builds for our SQL servers which for the 2022 instance is 16.0.900 and that matches the build target, which shows we're on the latest available build of SQL 2022.
>
> **[2:07](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=127)** The compliant column clearly shows we are up to date with patches.
>
> **[2:10](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=130)** Good news.
>
> **[2:11](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=131)** Now we might not want to be on the very cutting edge and update into the latest CU straightaway.
>
> **[2:16](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=136)** Instead, we can use the max behind parameter to say I would like to be at least within one CU of the latest build.
>
> **[2:23](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=143)** In this case, the build target for the 2019 instance has changed to fifteen dot zero dot 4223, so we'd only have to be on at least that build to be compliant.
>
> **[2:33](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=153)** Another useful field in the results is the supported until column.
>
> **[2:36](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=156)** This will show you when this version of SQL Server is supported in until.
>
> **[2:39](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=159)** If you have older SQL Server versions in your environment, this is a great tool for planning out which servers should be upgraded before they roll out of support.
>
> **[2:46](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=166)** The information returned by these commands is stored an A JSON file within the module.
>
> **[2:50](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=170)** If this is more than a month old, you'll see a warning that this information might be out of date.
>
> **[2:55](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=175)** You can update your DBA tools module to fix this.
>
> **[2:57](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=177)** The same JSON file is used to power the DBA tools build website which is a really nice visual representation and allows all kinds of filtering.
>
> **[3:05](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=185)** It's very useful for looking up which build you're on in comparison to the latest builds for each major version.
>
> **[3:10](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=190)** That's another task on our DBA checklist made easier with DBA tools.
>
> **[3:14](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/get-sql-server-patch-levels?u=76281980&t=194)** you can keep your documentation up to date and ensure you're not falling behind from the latest patch versions.

> [!info]- Semantic Content
>
> **Env Vars:** sql (13), dba (12), json (2), rtm (1)
> **Code Keywords:** pass (2), module (2), let (1), this, (1), case, (1)
> **Versions:** version 15 (1), 16.0.900 (1)
> **Definitions:** is a  (2)
> **API Endpoints:** get  (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Review SQL Server Configuration Settings
> [LinkedIn Learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=0)** - [Instructor] SQL Server has many configuration options available, and it's very likely, either from following best practices, or from experimentation in your own estate, a lot of these settings won't be set to the defaults.
>
> **[0:10](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=10)** Let's take a look at what our configuration options are set to, how we can reconfigure our systems, and also how we can export and import settings.
>
> **[0:17](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=17)** Once again, let's use Get-Command to find all of the commands dbatools has, that matches the pattern configure.
>
> **[0:24](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=24)** The naming of these commands should be starting to feel familiar at this point.
>
> **[0:27](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=27)** The verb tells us what the action will be, either getting or setting, for example, and the noun tells us what we're acting on.
>
> **[0:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=32)** In this case, SpConfigure options.
>
> **[0:35](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=35)** Let's run Get-DbaSpConfigure for our SQL instances.
>
> **[0:38](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=38)** This will return all of the available configuration options, and I'm hoping this to format table, so it's a little easier to review.
>
> **[0:46](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=46)** We can also filter the configuration properties we care about by using the name parameter.
>
> **[0:50](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=50)** Let's look at what the max server memory and AdHocDistributedQueries configurations are set to for dbatools1.
>
> **[0:56](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=56)** There is actually quite a lot of information return for these configurations.
>
> **[1:02](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=62)** The min and max values, tell us what we can set this configuration to.
>
> **[1:06](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=66)** For example, for Adhoc Queries, can either be set to one or zero, basically enabled or disabled.
>
> **[1:11](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=71)** The RunningValue tells us what it's currently set to, so in this case, it's zero, or disabled.
>
> **[1:16](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=76)** Here, we're just looking at the configuration settings for one server.
>
> **[1:19](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=79)** But remember, dbatools makes looking after multiple servers as easy as one.
>
> **[1:24](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=84)** We could pass in a whole list of servers and see how our Adhoc Queries setting is configured across our whole environment.
>
> **[1:30](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=90)** Let's say we've been monitoring the workload on this SQL server and have determined that it would benefit from enabling Adhoc Queries.
>
> **[1:35](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=95)** We can do this from dbatools as well.
>
> **[1:38](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=98)** Running Set-DbaSpConfigure will specify the SQL instance, the name of the configuration, and our desired value, in this case, one for enabled.
>
> **[1:46](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=106)** The results show the previous value as well as the new value.
>
> **[1:49](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=109)** It's looking good.
>
> **[1:51](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=111)** Rerunning Get-DbaSpConfigure also confirms that our running value is now one.
>
> **[1:57](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=117)** We also have Export-DbaSpConfigure which will do, just what you're guessing probably, at this point, export all our configuration into a script.
>
> **[2:05](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=125)** There are a couple of reasons I love this idea.
>
> **[2:07](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=127)** One is you now have a record of exactly how your SQL instance is configured.
>
> **[2:11](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=131)** Pop this somewhere safe or even better into source control and you can always be sure you'll know exactly how things should be.
>
> **[2:18](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=138)** This is great for DR situations where you suddenly need to configure a new SQL instance, or if you're having issues and you want to compare the current configuration to this saved version.
>
> **[2:26](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=146)** There is a lot of value in knowing how your environment is configured.
>
> **[2:29](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=149)** I'd recommend taking a look at Get-DbaSpConfigure and Export-DbaSpConfigure in your own environments.
>
> **[2:35](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/review-sql-server-configuration-settings?u=76281980&t=155)** It's a great way to document and you might even find some configuration settings you don't agree with and want to fix.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (3), pass (1)
> **Env Vars:** sql (6)
> **CLI Commands:** find (2)
> **Analogies:** for example (2)
> **Prerequisites:** configure (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Find failed SQL Agent jobs
> [LinkedIn Learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=0)** - [Narrator] SQL agent jobs provide a way to schedule work to run against our SQL Server instances.
>
> **[0:05](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=5)** This includes DBA type jobs like backups and corruption checking as well as jobs for the business like data transformation or report creation.
>
> **[0:12](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=12)** There are a lot of reasons these jobs are important which is why another item on our DBA morning checklist is to ensure no jobs have failed.
>
> **[0:19](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=19)** First up, let's take a look at the SQL agent jobs we have in our environment.
>
> **[0:22](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=22)** We'll run Get-DbaAgentJob and parse in our list of SQL instances and then format that output as a table for easy viewing.
>
> **[0:29](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=29)** Here you can see I have all those maintenance jobs installed as well as a few others on my dbatools 1 instance.
>
> **[0:35](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=35)** There is also a LastRunOutcome column returned for this command, which we can easily see whether our jobs have last run successfully or not.
>
> **[0:42](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=42)** This is handy but if our environment is bigger than these two small SQL servers and there are many jobs, the output is going to be overwhelming for us to digest.
>
> **[0:51](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=51)** Let's work on only returning the things we care about.
>
> **[0:53](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=53)** Here we'll fall to the results by using Where-Object to only return jobs where the last run outcome isn't Succeeded or Unknown.
>
> **[1:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=60)** Unknown is usually returned when the jobs haven't run before so in this case we don't care about those yet.
>
> **[1:05](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=65)** There are a few problem jobs here, including one named Important Report.
>
> **[1:09](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=69)** Well, I'm sure you can guess but this is an important job.
>
> **[1:12](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=72)** It creates a report for someone very important and this job needs to get run daily for our business to make good decisions.
>
> **[1:18](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=78)** One thing to note on the last command I ran, I highlighted the OutVariable parameter.
>
> **[1:22](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=82)** This is a common parameter within PowerShell, meaning you can use it anywhere.
>
> **[1:26](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=86)** Remembering how our pipeline works, objects are passed from the commands on the left through to the commands on the right.
>
> **[1:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=92)** OutVariable says, "Save whatever results are returned into the variable."
>
> **[1:36](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=96)** In this case, named Failed.
>
> **[1:39](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=99)** Running failed.
>
> **[1:39](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=99)** You'll see the exact same output as you did returned from when we ran the command in the first place.
>
> **[1:44](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=104)** You'll see why this is useful in a second.
>
> **[1:47](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=107)** Now, you could head over to SSMS and click through the GUI to view the job history, but we can do the same without leaving our console.
>
> **[1:53](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=113)** Also, if we have more than one failed job to investigate we can more easily collect that history from PowerShell, especially if there are five failed jobs all on different servers.
>
> **[2:02](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=122)** Remember the failed variable that we populated with our failed jobs?
>
> **[2:06](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=126)** Well, we can take that and pipe it straight into Get-DbaAgentJobHistory and dbatools will head out to all those SQL instances, look for the jobs included in the results and grab us the history.
>
> **[2:16](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=136)** We'll get the exact same error message and details we would get from SSMS.
>
> **[2:21](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=141)** You can see the job outcome level history which tells us some overall information, the job result, in this case failed, when it ran and who invoked it.
>
> **[2:30](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=150)** Then you'll find the step outputs, same as if you drilled into the job history in SSMS.
>
> **[2:35](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=155)** Here you can see we have a missing table.
>
> **[2:36](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=156)** Oh dear.
>
> **[2:38](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=158)** You can also use Get-DbaAgentJobHistory with some parameters.
>
> **[2:41](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=161)** In this case, we're just getting the history for our important report.
>
> **[2:47](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=167)** Once we've fixed our job, in this case I've created the missing table, we can easily rerun the job from the console by running Start-DbaAgentJob.
>
> **[2:58](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=178)** The wait parameter will mean that the console waits for the job to complete and reports the outcome.
>
> **[3:03](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/find-failed-sql-agent-jobs?u=76281980&t=183)** Here we can see the job is successful so we can carry on drinking our morning coffee knowing that our important SQL agent jobs are all good to go for that day.

> [!info]- Semantic Content
>
> **Env Vars:** sql (7), ssms (3), dba (2), gui (1)
> **Code Keywords:** let (2), case, (2)
> **CLI Commands:** make (1), find (1)
> **Tools:** powershell (2)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [narrator] (1)


### 4. 3. Set Information

#### Set databases online or offline
> [LinkedIn Learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980&t=0)** - Have you ever decommissioned a database but wanted to set it offline for a little while before you drop it, just in case?
>
> **[0:06](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980&t=6)** This video will show us how to easily accomplish this with DBA tools.
>
> **[0:09](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980&t=9)** Let's use Get-DbaDatabase to start with, to view the databases we currently have on our DBA tools, one instance and their status.
>
> **[0:16](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980&t=16)** You can see in the results there are three databases Northwind, pubs and databaseAdmin.
>
> **[0:21](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980&t=21)** And the good news their status is all currently normal, meaning they're online and available.
>
> **[0:27](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980&t=27)** To set databases offline, we can use set-DbaDbState.
>
> **[0:31](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980&t=31)** Once again, I'd recommend reviewing the help docs because this command can do more than we're going to demonstrate today.
>
> **[0:36](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980&t=36)** We're going to pass in three parameters.
>
> **[0:38](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980&t=38)** The sequel instance, name, which is the names of the databases we want to set offline, and the switch offline.
>
> **[0:43](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980&t=43)** The results from this command show each database that is affected and we can see their status is now offline.
>
> **[0:48](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980&t=48)** Rerunning Get-DbaDatabase will show that the two databases we specified in the last command Northwind and pubs now have the status of offline.
>
> **[1:03](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980&t=63)** Now I'm sure this has never happened, but at Just Imagine after you've set your databases offline errors start flying and before long you're getting messages about issues.
>
> **[1:10](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980&t=70)** Turns out we actually did need that database.
>
> **[1:13](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980&t=73)** Luckily we can just as easily set the status back to online with Set-DbaState.
>
> **[1:18](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980&t=78)** This time we'll use the online switch and you can see in the results the Northwind databases back online.
>
> **[1:24](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980&t=84)** Once again, we'll rerun the Get-DbaDatabase command and we can see the Northwind databases back online and accessible.
>
> **[1:30](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980&t=90)** Now we can work on tracking down what was causing those errors and which application is still accessing a database we thought we could decommission.
>
> **[1:37](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980&t=97)** We can also use piping with Set-DbaDbState.
>
> **[1:40](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980&t=100)** If we want to set any databases which are currently offline back online, we can run the following.
>
> **[1:45](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980&t=105)** This uses Get-DbaDbState, pipes that to a wear object to filter for just databases where the status is offline and then pipes that on to Set-DbaDbState to set them back online.
>
> **[1:56](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980&t=116)** Remember, in PowerShell the output of one command flows through that pipeline to the right so we'll only be affecting the databases returned by Get-DbaDbState and then filtered.
>
> **[2:06](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980&t=126)** One final check of Get-DbaDatabase and we can see all our databases are back online and ready for the next chapter.
>
> **[2:12](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/set-databases-online-or-offline?u=76281980&t=132)** See you there.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (2), let (1), pass (1)
> **Env Vars:** dba (2)
> **Cross-References:** in the last (1), next chapter (1)
> **Code Identifiers:** databaseadmin (1)
> **Tools:** powershell (1)
> **Analogies:** imagine (1)
> **Speakers:** - have (1)

#### Discover and apply recommended data compression levels
> [LinkedIn Learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=0)** - [Instructor] Data compression is a fantastic SQL Server feature.
>
> **[0:03](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=3)** It can not only help us to save space both on disk and in memory, this will then lead to increased performance.
>
> **[0:09](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=9)** More good news is that since SQL Server 2016 SP1, it's been available in Standard edition.
>
> **[0:15](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=15)** Let's jump into our repo and see how dbatools can help us manage data compression in our environment.
>
> **[0:21](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=21)** First, let's use Get command to find the compression commands available from dbatools.
>
> **[0:26](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=26)** You can see we have three commands returned a get, a set and a test.
>
> **[0:30](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=30)** As with most examples, we'll start with get to see how things are currently looking.
>
> **[0:34](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=34)** By default get DbaDb compression will return the size and current compression levels for all objects on our instance.
>
> **[0:41](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=41)** This can be a lot of information, so I'm filtering by specifying the NorthWind database and the audit table.
>
> **[0:47](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=47)** You can see we have nine rows returned.
>
> **[0:49](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=49)** One for the clustered index, PK_Orders and eight additional rows for non-clustered indexes.
>
> **[0:54](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=54)** on the table.
>
> **[0:55](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=55)** You can also see the current state is that there is no data compression applied.
>
> **[0:58](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=58)** We can also see that this is a pretty small table.
>
> **[1:01](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=61)** The clustered index, which is where all the data from the table is stored, is just 160 kb and each non-clustered index is just a fraction of that.
>
> **[1:12](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=72)** We can use the same parameters that we've just used with the get command for test DbaDb compression.
>
> **[1:19](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=79)** This command is super cool.
>
> **[1:21](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=81)** It uses logic created by the SQL Server Tiger team that combines data on how well an object would compress with Index Stats usage to determine the best option for us.
>
> **[1:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=92)** One thing to note is the index usage stats are coming from the DMVs and those are only persisted from the last reboot, so the more uptime your system has, the more reliable the results.
>
> **[1:45](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=105)** Looking at the primary key, you can see the index has a hundred percent scans.
>
> **[1:49](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=109)** More scans than updates makes this a stronger candidate for compression.
>
> **[1:52](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=112)** We also get information returned on how much space will be saved by compressing this index.
>
> **[1:57](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=117)** Firstly, the index will be 65% the size of the current index if we apply rope compression and only 47% of the current size, if we apply page compression.
>
> **[2:06](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=126)** The command takes all this information into account and determines that for this index, page compression is our best option.
>
> **[2:14](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=134)** I also made use of the Out Variable parameter for this command which will save the results we see on screen into our test compress variable, so we can use them again.
>
> **[2:22](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=142)** We can actually use that variable with Set DbaDb compression.
>
> **[2:25](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=145)** If we review the results from the test command, we can then use these results to apply the recommended compression levels to our objects.
>
> **[2:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=152)** Set DbaDb compression will go through the results, rebuilding indexes with page or row compression, depending on what it thinks is best.
>
> **[2:41](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=161)** Rerunning get DbaDb compression.
>
> **[2:44](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=164)** You can see we have applied page compression to our clustered index.
>
> **[2:47](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=167)** We might want to also apply a certain compression level to our entire orders table.
>
> **[2:55](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=175)** We also might want to apply a certain compression level to our entire orders table.
>
> **[3:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=180)** Dbatools does its best to work out the optimal level but perhaps due to the workload or performance monitoring you decide you want to use page compression for all the indexes on the orders table.
>
> **[3:10](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=190)** You can use the compression type parameter to do just that.
>
> **[3:13](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=193)** Reviewing the output of Get DbaDb compression again, you'll now see that we have page compression applied to the clustered and non-clustered indexes on this table.
>
> **[3:21](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=201)** In some cases you might just want to apply a compression level across the whole database.
>
> **[3:25](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=205)** Perhaps when we're refreshing a test environment.
>
> **[3:27](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=207)** For this, we can again specify the compression type parameter but this time don't filter by table.
>
> **[3:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=212)** This will apply page compression to every object in the NorthWind database.
>
> **[3:35](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=215)** As you can imagine, this could take a while if there are some big objects or a big database in general.
>
> **[3:40](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=220)** There are some additional parameters available to control how long this runs, such as Max Runtime.
>
> **[3:45](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=225)** Recommend you check out the help docs for examples on how to use them.
>
> **[3:50](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=230)** Like I mentioned, data compression is a really valuable tool for performance gains and for saving space.
>
> **[3:55](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=235)** Dbatools can make implementing this a breeze.
>
> **[3:57](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/discover-and-apply-recommended-data-compression-levels?u=76281980&t=237)** I'd highly recommend taking a look at Test DbaDb compression right away see what recommendations look like in your environment.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), super (1), this, (1)
> **Env Vars:** sql (3), sp1 (1)
> **Definitions:** is a  (3)
> **CLI Commands:** find (1), make (1)
> **Analogies:** imagine (1), such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Update database compatibility levels
> [LinkedIn Learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/update-database-compatibility-levels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/update-database-compatibility-levels?u=76281980&t=0)** - New SQL Server versions come out every couple of years at this point, which means that it's a steady recurrence for a DBA to plan and execute and upgrade for our SQL Server databases.
>
> **[0:09](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/update-database-compatibility-levels?u=76281980&t=9)** We're currently preparing for SQL Server 2022 to be generally available.
>
> **[0:13](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/update-database-compatibility-levels?u=76281980&t=13)** Each SQL Server major version has a compatibility level which matches up with the engine version.
>
> **[0:18](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/update-database-compatibility-levels?u=76281980&t=18)** It's a common practice to migrate databases to a new version of SQL Server and leave the databases in the older compatibility level for a short while before bumping them up.
>
> **[0:26](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/update-database-compatibility-levels?u=76281980&t=26)** Let's take a look at how we can use DBA tools to check on our compatibility levels, and when ready, bump them up to the latest and greatest.
>
> **[0:33](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/update-database-compatibility-levels?u=76281980&t=33)** First, we have the Get DBA DB compatibility level command which will show us the current compatibility level.
>
> **[0:38](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/update-database-compatibility-levels?u=76281980&t=38)** In this case, I've specified the Dbatools1 instance and the Pub's database.
>
> **[0:42](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/update-database-compatibility-levels?u=76281980&t=42)** In the results, you can see it's version 130.
>
> **[0:45](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/update-database-compatibility-levels?u=76281980&t=45)** That's great, as long as you've memorized which compatibility level matches up with each server version.
>
> **[0:50](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/update-database-compatibility-levels?u=76281980&t=50)** I know I always have to look this up.
>
> **[0:52](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/update-database-compatibility-levels?u=76281980&t=52)** Using the same hash table, Compatsplat, we can instead use Test DBA DB compatibility to get some similar information.
>
> **[0:59](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/update-database-compatibility-levels?u=76281980&t=59)** The benefit of the test command is it's going to return the current database compatibility level, but also the server level, and then return true or false for whether these match in the IsEqual column.
>
> **[1:09](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/update-database-compatibility-levels?u=76281980&t=69)** You can clearly see that the IsEqual shows false for the Pub's database.
>
> **[1:12](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/update-database-compatibility-levels?u=76281980&t=72)** And looking further into the results, we can see that the database compatibility level is 130 while the server level is 150.
>
> **[1:20](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/update-database-compatibility-levels?u=76281980&t=80)** In this case, we're not getting all the benefits from the new SQL Server version at this point so let's take a look at how we can bump that up.
>
> **[1:27](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/update-database-compatibility-levels?u=76281980&t=87)** Once again, we're using the same hash table but with the Set DBA DB compatibility, which as you can imagine is going to change our compatibility level.
>
> **[1:36](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/update-database-compatibility-levels?u=76281980&t=96)** Since I'm not passing in any other parameters, the compatibility level will be set by default to match the server version.
>
> **[1:42](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/update-database-compatibility-levels?u=76281980&t=102)** You can see in the results it returns the previous compatibility as version 130 and the compatibility is now version 150.
>
> **[1:49](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/update-database-compatibility-levels?u=76281980&t=109)** Rerunning Test DBA DB compatibility now will show IsEqual is true, and our database compatibility level matches that of our server version.
>
> **[1:57](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/update-database-compatibility-levels?u=76281980&t=117)** Now our database will be able to take advantage of all the new features on the higher compatibility level.

> [!info]- Semantic Content
>
> **Env Vars:** sql (6), dba (6)
> **Code Keywords:** let (2), case, (2), pub (2)
> **Versions:** version 130 (2), version 150 (1)
> **Definitions:** means that (1)
> **Analogies:** imagine (1)
> **Speakers:** - new (1)

#### Insert data into SQL Server tables
> [LinkedIn Learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=0)** - [Instructor] As data professionals, we like data in tables.
>
> **[0:03](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=3)** It's a great way of storing information we want to keep track of and quite often in the past, I've found myself generating data in PowerShell from some process and then wishing there was an easy way to just save that into a database table.
>
> **[0:14](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=14)** And now there is, Write-DbaDbTableData will take data we have in a PowerShell object and using SQL bulk copy, will insert it into our database table.
>
> **[0:23](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=23)** For these examples, we're going to be writing data into the database admin database.
>
> **[0:27](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=27)** So, I've set up a hash table with the connection information that we can reuse for splatting.
>
> **[0:31](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=31)** Let's start with a simple example.
>
> **[0:33](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=33)** We've already used Get-DbaDatabase a few times, so we know that it gets information about databases in RSD.
>
> **[0:39](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=39)** I'm selecting just a few properties for now, the name, owner, status, and last full backup time.
>
> **[0:45](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=45)** And then, we'll pipe that into Write-DbaDbDataTable, and that's where the magic happens.
>
> **[0:51](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=51)** I also want to point out the AutoCreateTable parameter.
>
> **[0:54](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=54)** This means that DBA tools will create the destination table on the fly, based on the objects you passed in.
>
> **[1:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=60)** If we pop over to SSMS, we can see that there is now a database info table in our database.
>
> **[1:06](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=66)** Looks pretty good.
>
> **[1:12](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=72)** One thing to consider though, when you're using DBA tools to create the table is that it'll do its best to work out which data types to use.
>
> **[1:19](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=79)** You can see for last full backup, it worked out that that was a date, so created a date time to column for it.
>
> **[1:24](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=84)** But for string data, it will just create NVARCHAR max columns.
>
> **[1:28](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=88)** And so for tables that you are looking to keep and use long term, I'd recommend creating the table with the appropriate data types first, and then using Write-DbaDbDataTable to insert the data.
>
> **[1:38](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=98)** In our next examples, we already have a customer table designed and created in the database admin database.
>
> **[1:44](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=104)** In this case, we'll read in data from the CSV, and then pipe that through to Write-DbaDataTable to insert the data.
>
> **[1:51](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=111)** If we select from the table, you can now see we have all our data available.
>
> **[1:55](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=115)** There are so many times when this could be useful.
>
> **[1:59](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=119)** We do have a couple of other parameters for this command that are worth mentioning.
>
> **[2:03](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=123)** If you're reloading the same data as part of an ETL job, you can use the truncate parameter to empty out the table first, before reloading the data.
>
> **[2:10](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=130)** If we didn't use truncate here and we tried to reload, we'd get a primary key violation.
>
> **[2:17](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=137)** You can also control the batch size.
>
> **[2:19](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=139)** This can be useful for getting the optimal performance for your load, so I would recommend testing a few batch sizes and measuring which is faster.
>
> **[2:26](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=146)** Here, we're changing this to insert in batches of 1000 rows instead of the default, which is 50,000.
>
> **[2:33](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=153)** You'll also notice that this time I'm loading the CSV into a variable and then passing that in as an input object to Write-DbaDataTable.
>
> **[2:41](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=161)** This can speed up the insert process, but does require PowerShell to hold all that data in memory.
>
> **[2:45](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/insert-data-into-sql-server-tables?u=76281980&t=165)** There are many options to test out on this command, but I would almost guarantee it's one of the commands you'll come back to over and over again.

> [!info]- Semantic Content
>
> **Env Vars:** dba (2), csv (2), sql (1), rsd (1), ssms (1)
> **Code Keywords:** let (1), case, (1), default, (1), require (1)
> **Tools:** powershell (3)
> **Definitions:** means that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 5. 4. Migrations Made Easy with dbatools

#### Migrate whole instances with one line of code
> [LinkedIn Learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=0)** - [Instructor] I mentioned in the early videos how dbatools got its start as a way of migrating the SQL Server instances behind SharePoint from one server to another.
>
> **[0:08](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=8)** This video is all about Start-DbaMigration and the magic that this one command can accomplish.
>
> **[0:13](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=13)** Be prepared to be impressed.
>
> **[0:14](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=14)** First, we're going to take a look at the help docs for Start-DbaMigration.
>
> **[0:18](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=18)** You know by this point we can use Get-Help for that and view it in our console.
>
> **[0:22](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=22)** We can also use the online parameter to open the docs in our web browser.
>
> **[0:26](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=26)** This is my personal preference for some of the more complicated commands so I can keep that window open while I work through my examples.
>
> **[0:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=32)** On Windows, running this would immediately open the web browser.
>
> **[0:35](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=35)** But in our container we'll need to hold Ctrl and click the link returned.
>
> **[0:40](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=40)** You can see there's a lot of information returned about what is going to be migrated from this command and how to exclude certain things.
>
> **[0:47](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=47)** It's quite likely that you'll find something in here that is very close to what you're trying to accomplish.
>
> **[0:51](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=51)** When you do, you can just copy and paste that into your VS code window and start tweaking the parameters for your environment.
>
> **[0:59](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=59)** We have the simplest example for our migration.
>
> **[1:01](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=61)** We're looking to migrate everything from the dbatools1 instance over to the dbatools2.
>
> **[1:06](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=66)** We're going to specify the backup restore method for how the databases should be migrated, and for that we need to provide a shared path that both the SQL Server Instant Service accounts have access to.
>
> **[1:15](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=75)** We've kicked off this migration and you'll see some information returned as it gets started.
>
> **[1:20](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=80)** There are a few warnings returned for items that could not be migrated due to the fact we're running in containers on Linux.
>
> **[1:25](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=85)** For example, Copy DBA credential is only supported on Windows.
>
> **[1:29](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=89)** When it gets to migrating the databases you can see that they are first backed up to the shared location from dbatools1 and then restored onto the dbatools2 instance.
>
> **[1:39](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=99)** This is probably the most important part of our migration since this includes all of the important data stored within those databases.
>
> **[1:46](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=106)** The results of the command show all the things that were migrated.
>
> **[1:49](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=109)** First up, you can see the configuration values that were copied from dbatools1 over to dbatools2.
>
> **[1:55](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=115)** This means we can be sure that our instances are configured the exact same.
>
> **[1:58](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=118)** Some of these configurations have been changed but require a restart to take effect.
>
> **[2:03](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=123)** If we scroll down further we'll find our three user databases that were migrated or show as successful, which is good.
>
> **[2:09](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=129)** We also have a list of logins that have been migrated.
>
> **[2:11](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=131)** This includes SQL logins, Windows users and Windows groups.
>
> **[2:15](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=135)** If they already exist on the destination there will be a message that they have been skipped.
>
> **[2:20](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=140)** The list continues on mentioning agent alerts, jobs schedules, and many more items.
>
> **[2:26](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=146)** This command is great for getting full instances copied over and I'd recommend you give it a run or a test environment and investigate all the the items that can be migrated.
>
> **[2:34](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=154)** We don't always want this big bang approach.
>
> **[2:36](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=156)** For that, we can look at some of the copy commands that are wrapped up within Start-DbaMigration separately.
>
> **[2:42](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrate-whole-instances-with-one-line-of-code?u=76281980&t=162)** This will give us more control and we'll look at those options next.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3), dba (1)
> **UI Navigation:** open the (2), scroll down (1)
> **CLI Commands:** find (2)
> **Code Keywords:** require (1)
> **Documentation:** the docs (1)
> **Tools:** vs code (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Simple database migrations
> [LinkedIn Learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=0)** - [Narrator] Previously we looked at Big Bang migrations basically taking everything we possibly could from one instance over to another.
>
> **[0:07](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=7)** In the real world that's not always what we want and the beauty of how that start DBA Migration Command is written is that it's basically a rapid script around a whole bunch of copy commands.
>
> **[0:16](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=16)** Let's take a look at just migrating our databases with copy DBA database.
>
> **[0:23](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=23)** The databases are usually the most complex part of our migrations and it makes sense.
>
> **[0:28](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=28)** All of our important data is in there so we need to make sure we can minimize the downtime window but also have confidence that all the data is going to get from one instance to another.
>
> **[0:36](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=36)** Let's first remind ourselves of which databases are aware in our environment.
>
> **[0:40](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=40)** Looking at the results from GET DBA database you can see we have three databases on DBA tools one.
>
> **[0:45](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=45)** And there are currently none on DBA tools two.
>
> **[0:49](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=49)** We can migrate all three of these databases with the copy DBA database command.
>
> **[0:53](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=53)** I'll specify the source and destination instances and set the old databases switch to True.
>
> **[1:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=60)** As for the migration method, we're going to use Backup Restore which requires a shared path that both SQL Server instances accounts have access to.
>
> **[1:07](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=67)** As that runs, you'll see in the messaging that there are some backups happening and then some restores taking place.
>
> **[1:13](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=73)** Once that finishes up you'll get a summary of the results hopefully showing that all the databases were successfully migrated.
>
> **[1:22](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=82)** Rerunning Get DBA database, you can now see that we have all three databases on both instances and all are online.
>
> **[1:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=92)** Let's remove those databases from DBA tools two by piping the results of GET DBA database specifying the DBA tools two instance through to remove DBA database so we can look at another option for our migration.
>
> **[1:48](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=108)** I'll use the same hash table from the previous copy but this time I'm adding the set source offline switch.
>
> **[1:53](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=113)** I personally like to use this so that as expected from the name, once the databases are migrated to the destination, they're set offline on the source.
>
> **[2:02](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=122)** This avoids people accidentally connecting to the old database.
>
> **[2:05](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=125)** Instead, they'll receive an error and we can be sure that folks are connected to the new instance.
>
> **[2:14](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=134)** If we again, run get DBA database you can see our databases have been successfully migrated.
>
> **[2:19](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=139)** They show online and available on DBA tools two but on DBA tools one they're offline so people can't access them.
>
> **[2:29](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=149)** This has been a great example of a simple migration.
>
> **[2:31](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=151)** The downtime window required will be the time it takes to back up and restore those databases.
>
> **[2:36](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=156)** This is fine for small databases but with larger ones that could span hours.
>
> **[2:44](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=164)** Let's set our environment back to how it was at the start of this video so we can explore a more advanced migration in the next one.
>
> **[2:50](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=170)** we'll bring the databases on DBA tools one back online and drop those that we migrated to DBA Tools two.
>
> **[2:57](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=177)** Perfect, we're back to our pre-migration state.
>
> **[3:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/simple-database-migrations?u=76281980&t=180)** See you in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** dba (16), sql (1)
> **Code Keywords:** let (4), switch (2)
> **API Endpoints:** get  (2)
> **Cross-References:** in the next (2)
> **CLI Commands:** make (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [narrator] (1)

#### More advanced database migrations
> [LinkedIn Learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=0)** - [Instructor] Imagine if the databases you want to migrate are quite large, and the amount of time to back up and restore them is longer than the downtime window you have for your migration, what then?
>
> **[0:09](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=9)** Well let's look at a way that we can still use copy DBA database, but we can pre-stage most of the data before the downtime window, ensuring we can complete our migration quickly and efficiently.
>
> **[0:20](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=20)** Let's check out again where our databases are first.
>
> **[0:23](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=23)** With get DBA database, we can see that we have three small databases on DBA tools one.
>
> **[0:29](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=29)** Now, I said we were going to migrate big databases, but we can execute the same process with any database.
>
> **[0:34](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=34)** It'll just take longer for the first copy process if your databases are larger, the rest of the process will remain exactly the same.
>
> **[0:41](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=41)** If you completed the previous video on simple database migrations, this code should look really similar.
>
> **[0:46](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=46)** We are again, specifying the source and destination instances, as well as noting that we are using the backup restore method, and therefore specifying a shared path for those backups and restores.
>
> **[0:56](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=56)** The differences here, are that I'm only specifying one database, using the database parameter, but also I have set no recovery to true.
>
> **[1:03](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=63)** This means that the restore process will not bring the database online.
>
> **[1:06](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=66)** Instead, it will be in recovery, and we'll be able to apply newer backups on top of that first full backup.
>
> **[1:13](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=73)** When we run this code, we'll see output showing the backup and restore happening.
>
> **[1:17](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=77)** As I mentioned, the larger the database, the longer this process will take to complete.
>
> **[1:21](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=81)** It's also worth noting that this is now the start of your LSN chain.
>
> **[1:25](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=85)** If you're in full recovery mode, this full backup is what future transaction lock backups will be based on.
>
> **[1:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=92)** Running get DBA database again, you'll see we still have Northwind online on DBA tools one, but we also have a copy on DBA tools two, and the status is restoring, this is perfect.
>
> **[1:42](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=102)** We have pre-staged the full backup, which is the majority of the data in our database that we want to migrate.
>
> **[1:47](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=107)** To be able to prove that we're migrating newer data than that full backup we've pre-staged, Let's use invoke DBA query to query the categories table in the Northwind database on DBA tools one.
>
> **[1:58](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=118)** We can insert a new row, again using invoke DBA query, for our vegetable category.
>
> **[2:03](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=123)** This obviously wasn't in the full backup.
>
> **[2:04](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=124)** We've already pre-staged on DBA tools two, ready for the cut over.
>
> **[2:08](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=128)** Now it's migration time.
>
> **[2:10](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=130)** We've got our downtime window, and we're ready for the final cut over.
>
> **[2:14](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=134)** Hopefully the application is down, and the database is now in its final state to be migrated.
>
> **[2:19](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=139)** Depending on how long ago you pre-staged that full backup, you may have differential backups, or multiple transaction log backups taken.
>
> **[2:26](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=146)** We'll run backup DBA database, to take a final transaction log backup, and then we'll run copy DBA database again.
>
> **[2:33](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=153)** This time specifying both the use last backup, and continue switches.
>
> **[2:38](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=158)** This means that backups taken since the full we've pre-staged, will be applied in order on top of that restoring copy of the Northwind database on DBA tools two.
>
> **[2:46](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=166)** We've also used the set source offline parameter, to set the copy on DBA tools one offline, so there's no confusion on where the database now resides.
>
> **[2:56](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=176)** Let's try and get DBA database to show Northwind is online on DBA tools two, and offline on DBA tools one, completing our migration.
>
> **[3:04](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=184)** We can also check on our data, rerunning invoke DBA query to see if our new vegetable category has made it across to the Northwind database on DBA tools two.
>
> **[3:13](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=193)** In the result, you can see nine categories, including the vegetable category we added after the full backup we use for pre-staging.
>
> **[3:22](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=202)** As a final cleanup step in this video, we'll bring the Northwind database on DBA tools one back online, as we might want it for future demos.
>
> **[3:29](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=209)** Hopefully this video has shown you another option for database migrations with DBA tools.
>
> **[3:34](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=214)** This is especially helpful for larger databases.
>
> **[3:37](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/more-advanced-database-migrations?u=76281980&t=217)** It's also worth noting that we only demoed this using one database, but you could just as easily migrate multiples with this approach.

> [!info]- Semantic Content
>
> **Env Vars:** dba (21), lsn (1)
> **Code Keywords:** let (4), continue (1)
> **Definitions:** means that (2)
> **Cross-References:** previous video (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Migrating logins
> [LinkedIn Learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=0)** - [Instructor] Migrating databases will always be where most of our time is spent when planning migrations.
>
> **[0:05](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=5)** However, if we don't also migrate the logins, those databases won't be much good because our applications and users won't be able to connect to 'em.
>
> **[0:13](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=13)** DBATools can help us to migrate these logins and what's really useful is we can ensure both the password and the SID, which identifies each login are exactly the same on the destination sequence as they were on the source.
>
> **[0:25](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=25)** Running get-DBA login we can see a list of SQL logins, Windows logins and Windows groups that are currently on DBA tools One.
>
> **[0:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=32)** Let's take a look at the database users for the North Wind database.
>
> **[0:35](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=35)** This is the database we migrated in the last video.
>
> **[0:40](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=40)** Using GET-DBA DbUser against DBA Tools 1, we can see which of the logins on the system actually have access to the North Wind database.
>
> **[0:47](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=47)** We have two users, Test Orphan one and web user that are within the North Wind database.
>
> **[0:57](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=57)** If we run the same against DBA Tools 2 we can see that when we migrated the North Wind database those users come with the database, but at the moment there are no associated logins for those database users, so they can't connect.
>
> **[1:09](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=69)** We can create a new login with new DBA login.
>
> **[1:12](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=72)** I'll name the user Test Orphan 1, so it matches that database user that already exists.
>
> **[1:20](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=80)** However, this won't work.
>
> **[1:22](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=82)** The SIDS I mentioned earlier will not match between the instance level login that we created and the database level user.
>
> **[1:28](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=88)** We can show that by running get-DBA DB Orphan user.
>
> **[1:32](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=92)** Both logins are still returned as being orphans and that means they won't be able to connect to our database, still.
>
> **[1:38](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=98)** DBA Tools has a really handy command for fixing these orphan logins.
>
> **[1:43](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=103)** Repair DBA DB Orphan user will do exactly what it says on the tin and repair any orphans where the login and user exist, but the SIDS don't match.
>
> **[1:52](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=112)** In the result, you can see that Test Orphan 1 has been successfully fixed but web user shows a message of no matching login.
>
> **[2:02](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=122)** To avoid creating these orphaned users we should instead migrate the logins using Copy-DBAlogin.
>
> **[2:11](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=131)** I'll specify the source and destination instances, and in this case I'll also specify one particular login to migrate.
>
> **[2:17](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=137)** That's the web user login.
>
> **[2:19](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=139)** You can see in the results the login was successfully migrated and you should have noticed that you didn't need to enter a password.
>
> **[2:25](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=145)** That's because DBA tools migrates the current password for you.
>
> **[2:28](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=148)** This is really handy if you happen to have logins where the password has been forgotten over time.
>
> **[2:33](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=153)** Rerunning get-DBA DB Orphan User you can see that web user, no longer shows us being an orphan user and so it will now be able to connect successfully to our Migrated database.
>
> **[2:42](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/migrating-logins?u=76281980&t=162)** Hopefully, you can see how much easier it is to use copy-DBA login rather than having to recreate those logins manually on the new SQL server.

> [!info]- Semantic Content
>
> **Env Vars:** dba (12), sql (2), sids (2), sid (1)
> **Code Keywords:** let (1), match. (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### Exporting documentation
> [LinkedIn Learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=0)** - [Instructor] Folks, we've made it to our last technical video and I hope you've been enjoying this course, but I've saved the most exciting topic for last.
>
> **[0:07](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=7)** Documentation.
>
> **[0:08](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=8)** Who doesn't love documentation?
>
> **[0:10](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=10)** Let's be real.
>
> **[0:11](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=11)** Documentation can be boring and time consuming but as you can probably guess, DBAtools will make this a lot easier for us.
>
> **[0:18](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=18)** This documentation can be really useful to see what your environment looked like on a certain day.
>
> **[0:22](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=22)** Perhaps suddenly someone doesn't have access, but you can look back and prove that they never actually had that access approved.
>
> **[0:28](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=28)** It's also really useful in disaster recovery situations.
>
> **[0:31](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=31)** If you suddenly have to rebuild an instance from scratch, these scripts will help you get back to exactly how it was.
>
> **[0:36](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=36)** We're going to run Export-DbaInstance, and that will help to document all the instances we've passed in.
>
> **[0:42](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=42)** In this case, the SqlInstance variable, which contains our two test instances.
>
> **[0:47](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=47)** We have provided a path to export to and we've also excluded a couple of items.
>
> **[0:51](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=51)** These are just not applicable in this environment.
>
> **[0:53](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=53)** So to save time, we can just skip over those.
>
> **[0:56](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=56)** As this runs, you can see in the console, the command is going through each instance and providing a bunch of SQL files, all containing important information about our environment.
>
> **[1:05](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=65)** The command can take a little while to run, but you could easily schedule this off hours and let it just churn through creating documentation for you to review the next day.
>
> **[1:12](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=72)** If we open the Export folder in the file explorer, we can see two sub folders, one for each instance, dbatools1 and dbatools2.
>
> **[1:22](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=82)** If we expand the dbatools1 folder, you can see 13 scripts covering different areas of our instance.
>
> **[1:29](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=89)** Looking at the first one, backupdevices, we can see that DBAtools has created the scripts needed to recreate any backup devices that are currently on the dbatools1 instance.
>
> **[1:40](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=100)** The databases.sql file contains the SQL required to restore the last backup chain for each database.
>
> **[1:46](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=106)** You can see that for the Northwind database, we have a full backup to restore, a differential, and a couple of transaction logs.
>
> **[1:52](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=112)** It's worth noting that this is just the scripts to do the restores.
>
> **[1:56](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=116)** If this is needed in a disaster recovery situation, we need to ensure our backups are safe and probably in an offsite location in order to restore them.
>
> **[2:04](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=124)** One final script I want to point out is the sp_configure.sql.
>
> **[2:07](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=127)** This contains all the configuration settings for our instance.
>
> **[2:10](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=130)** There are a few reasons why this is useful, but one of my favorites is that you can use this to ensure that when you migrate databases, that the source and destination instances match exactly.
>
> **[2:22](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=142)** If we also open up the sp_configure.sql for dbatools2, we can use a really neat VS code feature to compare these two files.
>
> **[2:33](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=153)** Pressing Ctrl + Shift + P brings up the command pallete.
>
> **[2:36](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=156)** Then type Comparing to the search bar.
>
> **[2:40](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=160)** Select File Compare Active File With... And choose the dbatools2 sp_configure file.
>
> **[2:51](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=171)** You can now see a split view that compares the dbatools1 file on the left with the dbatools2 file on the right.
>
> **[2:57](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=177)** Any differences will be highlighted so you can quickly review.
>
> **[3:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=180)** In this case, CLR is enabled on dbatools1, but not on dbatools2.
>
> **[3:04](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=184)** If we've migrated an application database to dbatools2, that depends on that setting.
>
> **[3:09](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=189)** It might not be working now.
>
> **[3:11](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=191)** This little tip can be really useful in executing smooth migrations.
>
> **[3:15](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=195)** That's our documentation complete.
>
> **[3:17](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/exporting-documentation?u=76281980&t=197)** I'm always impressed with how easy it is to create all those scripts, and I'd recommend running it against your environment every so often, and keeping track of any changes, but also having a copy to look back at if you ever need it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (2)
> **File Paths:** sp_configure.sql (2), databases.sql (1)
> **Code Identifiers:** sp_configure (3)
> **Env Vars:** sql (2), clr (1)
> **CLI Commands:** make (1)
> **Tools:** vs code (1)
> **UI Navigation:** open the (1)
> **Prerequisites:** required to (1)


### 6. Conclusion

#### Continue your learning
> [LinkedIn Learning](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/continue-your-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/continue-your-learning?u=76281980&t=0)** - [Jess] Well, folks, that brings us to the end of this dbatools course.
>
> **[0:03](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/continue-your-learning?u=76281980&t=3)** I hope you've enjoyed the content that we've covered here, but please understand, we've only covered a small portion of the 650-plus commands available in this fantastic module.
>
> **[0:12](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/continue-your-learning?u=76281980&t=12)** But this doesn't have to be the end.
>
> **[0:13](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/continue-your-learning?u=76281980&t=13)** There are many options to continue your learning of dbatools.
>
> **[0:16](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/continue-your-learning?u=76281980&t=16)** Play around with the module in your test environment, explore the many commands, and don't forget to use GitHelp to view some great documentation and examples.
>
> **[0:24](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/continue-your-learning?u=76281980&t=24)** Also, I was lucky enough to join Chrissy, Rob, and Claudio in writing a book on dbatools.
>
> **[0:29](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/continue-your-learning?u=76281980&t=29)** I may be biased, but I'd highly recommend checking "Learn dbatools in a Month of Lunches" out next.
>
> **[0:34](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/continue-your-learning?u=76281980&t=34)** There are also plenty of people in the community talking and writing about dbatools.
>
> **[0:38](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/continue-your-learning?u=76281980&t=38)** I'd recommend following @psdbatools on Twitter and getting stuck into the conversations.
>
> **[0:44](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/continue-your-learning?u=76281980&t=44)** You can also find me all over the internet.
>
> **[0:45](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/continue-your-learning?u=76281980&t=45)** If you've enjoyed this course, please let me know, and if you've got questions, I'll be more than happy to try and answer them.
>
> **[0:51](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/continue-your-learning?u=76281980&t=51)** The best places to find me are on Twitter and LinkedIn.
>
> **[0:53](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/continue-your-learning?u=76281980&t=53)** Again, my name is Jess Pomfret.
>
> **[0:55](https://www.linkedin.com/learning/automating-sql-server-with-dbatools/continue-your-learning?u=76281980&t=55)** Thank you so much for watching.

> [!info]- Semantic Content
>
> **Code Keywords:** module (2), continue (1), let (1)
> **CLI Commands:** find (2)
> **Best Practices:** don't forget (1)
> **Speakers:** - [jess] (1)


## Instructor

- [[Jess Pomfret]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/automating-sql-server-with-dbatools-3068745)

## Skills Covered

- Microsoft SQL Server
- Server Automation

## Path Context

### In [[Advance Your MS SQL Server Skills]]
← [[Querying Microsoft SQL Server 2022]] | **4 of 9** | [[Implementing a Data Warehouse with SQL Server 2022]] →

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