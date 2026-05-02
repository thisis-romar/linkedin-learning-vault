---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: practice-it-sql-joins
url: "https://www.linkedin.com/learning/practice-it-sql-joins"
duration_minutes: 55
duration: 55m
level: Intermediate
updated: 6/25/2025
learners: 3845
skills:
  - SQL
exercise_files: false
github: "https://github.com/LinkedInLearning/practice-it-sql-joins-3085459/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQE6C_8Je4EAqg/learning-public-crop_675_1200/B4EZdDDjseHcAc-/0/1749176695867?e=2147483647&amp;v=beta&amp;t=ainHQWQXhLW4kmphiQojglbOElUhPLjjNa6m68-lnpE"
linkedin_topic: Data Science
learning_paths:
  - '[[SQL Hands-On Practice]]'
prev_courses:
  - '[[SQL Practice- Window Functions]]'
next_courses:
  - '[[Hands-On SQL Challenges- Test Your Knowledge]]'
path_nav: '[{"path":"SQL Hands-On Practice","position":5,"total":9,"prev":"SQL Practice- Window Functions","next":"Hands-On SQL Challenges- Test Your Knowledge"}]'
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

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Practice%20It-%20SQL%20Joins.md)

![Practice It: SQL Joins](https://media.licdn.com/dms/image/v2/D4E0DAQE6C_8Je4EAqg/learning-public-crop_675_1200/B4EZdDDjseHcAc-/0/1749176695867?e=2147483647&amp;v=beta&amp;t=ainHQWQXhLW4kmphiQojglbOElUhPLjjNa6m68-lnpE)

# Practice It: SQL Joins

> In this course, instructor Nikiya Simpson guides you through four main types of SQL joins, with plenty of opportunities to try what you’re learning. Nikiya starts with schema description SQL commands, plus table and column description SQL commands. She goes over inner joins, then dives into left joins, self joins, and multiple complex joins. Nikiya also covers right joins, full outer joins, and cr

> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins) | 55m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Welcome to the course](#welcome-to-the-course)
  - [Prerequisites and preassessment](#prerequisites-and-preassessment)
  - [Getting started with GitHub Codespaces](#getting-started-with-github-codespaces)
  - [Installing the database in GitHub Codespaces](#installing-the-database-in-github-codespaces)
- [**1. SQL JOIN and Descriptions**](#1-sql-join-and-descriptions) (5 videos)
  - [SQL commands for determining relationships](#sql-commands-for-determining-relationships)
  - [Try it: Schema description SQL commands](#try-it-schema-description-sql-commands)
  - [Check it: Schema description SQL commands](#check-it-schema-description-sql-commands)
  - [Try it: Table and column description SQL commands](#try-it-table-and-column-description-sql-commands)
  - [Check it: Table and column description SQL commands](#check-it-table-and-column-description-sql-commands)
- [**2. Inner Join**](#2-inner-join) (6 videos)
  - [Understanding inner joins](#understanding-inner-joins)
  - [Try it: Inner join](#try-it-inner-join)
  - [Check it: Inner join](#check-it-inner-join)
  - [Understanding self joins](#understanding-self-joins)
  - [Try it: Self join](#try-it-self-join)
  - [Check it: Self join](#check-it-self-join)
- [**3. Left Join**](#3-left-join) (5 videos)
  - [Understanding left joins](#understanding-left-joins)
  - [Try it: Left join](#try-it-left-join)
  - [Check it: Left join](#check-it-left-join)
  - [Try it: Multiple complex joins](#try-it-multiple-complex-joins)
  - [Check it: Multiple complex joins](#check-it-multiple-complex-joins)
- [**4. Right Join**](#4-right-join) (5 videos)
  - [Understanding right joins](#understanding-right-joins)
  - [Try it: Right join](#try-it-right-join)
  - [Check it: Right join](#check-it-right-join)
  - [Try it: Full outer join](#try-it-full-outer-join)
  - [Check it: Full outer join](#check-it-full-outer-join)
- [**5. Cross Join**](#5-cross-join) (3 videos)
  - [Understanding cross joins](#understanding-cross-joins)
  - [Try it: Cross joins and Cartesian joins](#try-it-cross-joins-and-cartesian-joins)
  - [Check it: Cross joins and Cartesian joins](#check-it-cross-joins-and-cartesian-joins)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing on with SQL](#continuing-on-with-sql)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Welcome to the course
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/welcome-to-the-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/welcome-to-the-course?u=76281980&t=0)** - [Nikiya] SQL is a commonly used programming language used to work with relational databases.
>
> **[0:05](https://www.linkedin.com/learning/practice-it-sql-joins/welcome-to-the-course?u=76281980&t=5)** Whether working in business analysis, data science, or software development, writing good SQL queries is an essential skill.
>
> **[0:13](https://www.linkedin.com/learning/practice-it-sql-joins/welcome-to-the-course?u=76281980&t=13)** In this course, we'll practice different join types for each relationship with multiple entities.
>
> **[0:19](https://www.linkedin.com/learning/practice-it-sql-joins/welcome-to-the-course?u=76281980&t=19)** You'll have an opportunity to see an overview and practice these concepts within VS Code using GitHub Codespaces while you work with this course.
>
> **[0:29](https://www.linkedin.com/learning/practice-it-sql-joins/welcome-to-the-course?u=76281980&t=29)** My name is Nikiya Simpson and I work with relational databases from everything from small businesses, large marketing firms, education, and healthcare.
>
> **[0:38](https://www.linkedin.com/learning/practice-it-sql-joins/welcome-to-the-course?u=76281980&t=38)** Together, we'll practice SQL joins using the SQLite RDBMS, VS Code, and GitHub Codespaces.
>
> **[0:47](https://www.linkedin.com/learning/practice-it-sql-joins/welcome-to-the-course?u=76281980&t=47)** This course is truly unique, as you have the opportunity to practice the code with me while learning these concepts.
>
> **[0:54](https://www.linkedin.com/learning/practice-it-sql-joins/welcome-to-the-course?u=76281980&t=54)** By the end of the course, you'll be able to understand the techniques that you can use right away in your work.
>
> **[0:59](https://www.linkedin.com/learning/practice-it-sql-joins/welcome-to-the-course?u=76281980&t=59)** So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Relational Databases]] (2), [[GitHub]] (2), [[Codespaces]] (2), [[Programming]] (1)
> **Env Vars:** sql (3), rdbms (1)
> **Tools:** vs code (2), github (2)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [nikiya] (1)

#### Prerequisites and preassessment
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/prerequisites-and-preassessment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/prerequisites-and-preassessment?u=76281980&t=0)** - [Instructor] Before we begin, let's discuss some skills that you may need to know first.
>
> **[0:04](https://www.linkedin.com/learning/practice-it-sql-joins/prerequisites-and-preassessment?u=76281980&t=4)** This course will assume you have previous experience writing SQL database queries.
>
> **[0:09](https://www.linkedin.com/learning/practice-it-sql-joins/prerequisites-and-preassessment?u=76281980&t=9)** First, you'll need some familiarity with performing Data Manipulation Language statements, specifically SELECT statements, and the different keywords and clauses necessary to write simple queries.
>
> **[0:21](https://www.linkedin.com/learning/practice-it-sql-joins/prerequisites-and-preassessment?u=76281980&t=21)** You'll also need to know Data Definition Language to understand how to create or drop database objects like tables and views.
>
> **[0:29](https://www.linkedin.com/learning/practice-it-sql-joins/prerequisites-and-preassessment?u=76281980&t=29)** During this course, we'll use VS Code extensions and the terminal within VS Code to practice writing various queries using different types of join and object relationships.
>
> **[0:39](https://www.linkedin.com/learning/practice-it-sql-joins/prerequisites-and-preassessment?u=76281980&t=39)** Some of these items should automatically populate for you within the Codespace environment, but I'll walk you through anything we need to set up later.
>
> **[0:48](https://www.linkedin.com/learning/practice-it-sql-joins/prerequisites-and-preassessment?u=76281980&t=48)** Some experience using an IDE like Visual Studio Code, a CLI, or command-line interface, is also helpful in getting through the material in this course.
>
> **[0:58](https://www.linkedin.com/learning/practice-it-sql-joins/prerequisites-and-preassessment?u=76281980&t=58)** We'll also use SQLite as the database management system for this course.
>
> **[1:02](https://www.linkedin.com/learning/practice-it-sql-joins/prerequisites-and-preassessment?u=76281980&t=62)** Now, you won't need to be specifically familiar with SQLite.
>
> **[1:06](https://www.linkedin.com/learning/practice-it-sql-joins/prerequisites-and-preassessment?u=76281980&t=66)** There will be some commands that we use that are specific to SQLite, but most of the queries used in this course can be performed within any relational database management system.
>
> **[1:18](https://www.linkedin.com/learning/practice-it-sql-joins/prerequisites-and-preassessment?u=76281980&t=78)** If you are new to SQL, or Sequel, there are lots of courses within the LinkedIn Learning Library to help you get started with understanding the language.
>
> **[1:26](https://www.linkedin.com/learning/practice-it-sql-joins/prerequisites-and-preassessment?u=76281980&t=86)** I suggest that beginners start with those courses first and come back to this one to practice later.
>
> **[1:32](https://www.linkedin.com/learning/practice-it-sql-joins/prerequisites-and-preassessment?u=76281980&t=92)** Before starting the practice materials in this course, I'm going to have Ray Villalobos discuss how to use Codespaces, and then I'll be back.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (4), [[SQL]] (2), management (2), [[Data Manipulation]] (1), data (1)
> **Env Vars:** sql (2), select (1), ide (1), cli (1)
> **Tools:** vs code (2), terminal (1), visual studio (1)
> **Prerequisites:** you'll need (1), set up (1)
> **SQL:** select (1)
> **Speakers:** - [instructor] (1)

#### Getting started with GitHub Codespaces
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=0)** - [Ray] This is Ray Villalobos, senior staff instructor at LinkedIn Learning, and I'm going to show you how to work with LinkedIn Learning courses using GitHub Codespaces.
>
> **[0:09](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=9)** Codespaces is a code editor in the cloud with the full power of Visual Studio Code.
>
> **[0:14](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=14)** It allows for real world hands on practice that mirrors software development in the workplace.
>
> **[0:19](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=19)** This course was created using GitHub Codespaces.
>
> **[0:22](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=22)** Using Codespaces, you have everything you need to get going without needing complex installations or build tools.
>
> **[0:29](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=29)** One click and you're ready to go.
>
> **[0:32](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=32)** To practice along with the course, you can create a codespace directly from the course overview page.
>
> **[0:38](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=38)** First, click open next to GitHub Codespaces.
>
> **[0:42](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=42)** If you're already logged in, you'll be directed to a getting started with GitHub Codespaces page.
>
> **[0:48](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=48)** If you're not logged in, you'll be prompted to log in or create a free GitHub account first.
>
> **[0:53](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=53)** From this page, click on create codespace on main.
>
> **[0:58](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=58)** The first time you open up a codespace, it might take a few minutes to create the virtual machine.
>
> **[1:04](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=64)** Once it's done, you'll enter the code editor environment.
>
> **[1:08](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=68)** If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers.
>
> **[1:15](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=75)** Your course can have one or more extensions pre-installed based on the course you're taking.
>
> **[1:20](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=80)** Those can be found in the extensions panel.
>
> **[1:25](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=85)** Because this is a browser, it's easy to inadvertently close the browser window and lose the editor.
>
> **[1:31](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=91)** If you do that, don't panic.
>
> **[1:33](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=93)** Codespaces saves everything you're doing on a virtual machine.
>
> **[1:37](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=97)** You can always get the codespace back for this repo right here.
>
> **[1:46](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=106)** Notice that it even remembered that I had opened the extensions panel.
>
> **[1:51](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=111)** An alternate way to create a codespace is directly from one of our course's GitHub repositories.
>
> **[1:57](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=117)** From here, click code and then create codespace on main.
>
> **[2:02](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=122)** You can also restart a previous codespace from this location.
>
> **[2:06](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=126)** GitHub Codespaces is compatible on devices with smaller screen sizes like mobile phones or tablets, but it is optimized for larger screens so we recommend that you practice along with this course on a laptop or desktop computer.
>
> **[2:22](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=142)** The sample course I'm looking at is what is known as a flat branch repository.
>
> **[2:27](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=147)** You can tell because there's a single branch when you click on the branch icon on the status bar.
>
> **[2:32](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=152)** You can also tell because there are different folders for each of the videos in the course.
>
> **[2:38](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=158)** This is a sample of what a multi branch repository looks like which is more common when you're working with web frameworks.
>
> **[2:45](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=165)** If you go to the branch icon on the status bar, you can see that there's more than one branch.
>
> **[2:50](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=170)** You can switch to the different branches using this menu.
>
> **[2:54](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=174)** The branches are named with the chapter and the video number you're watching.
>
> **[2:58](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=178)** If you see a B at the end of the branch, that's how the code looked at the beginning.
>
> **[3:02](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=182)** If you see an E, that's how the code looked at the end.
>
> **[3:06](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=186)** Let's switch to how the code looked on chapter two and the third video.
>
> **[3:12](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=192)** I'll choose the beginning branch.
>
> **[3:15](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=195)** As you work through a course, you might make some changes on a branch.
>
> **[3:19](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=199)** I'm going to make a minor edit on the index.html file right here.
>
> **[3:27](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=207)** I'm going to go ahead and save that, and you can see that I've modified this file because there's an M right here and the branch name now has an asterisk on it.
>
> **[3:37](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=217)** If I try to switch to another branch that causes major changes like say, 07_03e, I may see a dialogue box like this.
>
> **[3:49](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=229)** If you don't care about saving your changes, you can simply hit the force checkout button.
>
> **[3:54](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=234)** It will let you switch to that branch.
>
> **[3:57](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=237)** You can then choose to discard the changes on this file.
>
> **[4:01](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=241)** Your instructor will let you know what the folder structure is for your course.
>
> **[4:06](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=246)** Forking lets you create your own copy of the repository on your account so that you can keep any changes that you've made, even if you've deleted the codespace.
>
> **[4:16](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=256)** To create your own fork, you can click on the fork button on the repository.
>
> **[4:23](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=263)** I'm going to hit create fork.
>
> **[4:27](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=267)** I'll have my own copy of this repository, and if I want to, I can start a new codespace on that fork.
>
> **[4:39](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=279)** This forked version is almost exactly like the original repository but it will let you push your own changes.
>
> **[4:46](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=286)** Notice that the URL of the repository is slightly different.
>
> **[4:50](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=290)** Let's go ahead and make a simple change to this file right here.
>
> **[5:00](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=300)** I'm going to save it.
>
> **[5:03](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=303)** You'll note that there is an M right here as well as an asterisk on this branch.
>
> **[5:08](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=308)** In the source control panel, you can also see a one for the change that we just made.
>
> **[5:14](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=314)** Let's go ahead and try to commit this change.
>
> **[5:20](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=320)** I'm going to hit the commit button and I'll ask it to go ahead and stage the changes.
>
> **[5:28](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=328)** And then I'm going to hit this button here.
>
> **[5:32](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=332)** I'll hit okay.
>
> **[5:34](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=334)** You can also let it go ahead and run git fetch.
>
> **[5:37](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=337)** That way, it'll automatically sync with your forked repo.
>
> **[5:41](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=341)** Now that change will be stored in your own version of this repository.
>
> **[5:46](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=346)** Don't worry if you forget to fork a repo and then try to push changes.
>
> **[5:50](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=350)** Codespaces will also ask you if you want to create a fork automatically.
>
> **[5:55](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=355)** Look for additional course specific tips from the instructor.
>
> **[5:58](https://www.linkedin.com/learning/practice-it-sql-joins/getting-started-with-github-codespaces?u=76281980&t=358)** Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Codespaces]] (9), [[GitHub]] (8), hit (5), [[LinkedIn]] (2), cloud (1)
> **Tools:** github (8), visual studio (2)
> **UI Navigation:** switch to (4), click on (3), go to (1)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **CLI Commands:** make (3), git (1)
> **File Paths:** index.html (1)
> **Env Vars:** url (1)
> **Warnings:** note that (1)

#### Installing the database in GitHub Codespaces
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/installing-the-database-in-github-codespaces-25894066?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/installing-the-database-in-github-codespaces-25894066?u=76281980&t=0)** - [Instructor] Now that we know how to use code spaces, let's make sure that the database that we'll use for this course is loaded for our practice.
>
> **[0:07](https://www.linkedin.com/learning/practice-it-sql-joins/installing-the-database-in-github-codespaces-25894066?u=76281980&t=7)** Start by opening up your code space from GitHub.
>
> **[0:10](https://www.linkedin.com/learning/practice-it-sql-joins/installing-the-database-in-github-codespaces-25894066?u=76281980&t=10)** The link to the repository is shown here on your screen.
>
> **[0:13](https://www.linkedin.com/learning/practice-it-sql-joins/installing-the-database-in-github-codespaces-25894066?u=76281980&t=13)** Next, click on the code button.
>
> **[0:17](https://www.linkedin.com/learning/practice-it-sql-joins/installing-the-database-in-github-codespaces-25894066?u=76281980&t=17)** Go to the Code Spaces tab and click on Create Code Space on Main.
>
> **[0:23](https://www.linkedin.com/learning/practice-it-sql-joins/installing-the-database-in-github-codespaces-25894066?u=76281980&t=23)** Your new code space environment will open up in a new browser window.
>
> **[0:31](https://www.linkedin.com/learning/practice-it-sql-joins/installing-the-database-in-github-codespaces-25894066?u=76281980&t=31)** The Explorer window should show the Adventure Works.DB database file.
>
> **[0:36](https://www.linkedin.com/learning/practice-it-sql-joins/installing-the-database-in-github-codespaces-25894066?u=76281980&t=36)** Double click on that file.
>
> **[0:39](https://www.linkedin.com/learning/practice-it-sql-joins/installing-the-database-in-github-codespaces-25894066?u=76281980&t=39)** Here, you can view the tables and columns and preview data in the tables.
>
> **[0:46](https://www.linkedin.com/learning/practice-it-sql-joins/installing-the-database-in-github-codespaces-25894066?u=76281980&t=46)** Take some time to go through the database to familiarize yourself with the tables and columns.
>
> **[0:51](https://www.linkedin.com/learning/practice-it-sql-joins/installing-the-database-in-github-codespaces-25894066?u=76281980&t=51)** Don't worry about running queries at this time.
>
> **[0:53](https://www.linkedin.com/learning/practice-it-sql-joins/installing-the-database-in-github-codespaces-25894066?u=76281980&t=53)** We'll go through how to run queries later on in the course.
>
> **[0:57](https://www.linkedin.com/learning/practice-it-sql-joins/installing-the-database-in-github-codespaces-25894066?u=76281980&t=57)** Now that we know the database is installed, let's get started with the practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (4), [[GitHub]] (1), next (1), data (1)
> **UI Navigation:** click on (3), go to (1)
> **CLI Commands:** make (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)


### 1. SQL JOIN and Descriptions

[↑ Back to Table of Contents](#table-of-contents)

#### SQL commands for determining relationships
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=0)** - [Instructor] Let's start with writing some commands using your terminal.
>
> **[0:03](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=3)** First, let's open a new terminal window in VS Code.
>
> **[0:08](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=8)** If you don't have one open already, you can go to the menu, go to Terminal, and then select New Terminal.
>
> **[0:16](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=16)** Remember, everything is done on a virtual machine in the background, so you need to be sure that you're not using the terminal on your computer.
>
> **[0:25](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=25)** Let's start by typing in sqlite3 in the terminal window, so sqlite3.
>
> **[0:31](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=31)** Let's hit Enter, and this will open a new SQLite session.
>
> **[0:36](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=36)** Other database management systems like Postgres have commands to list and describe tables.
>
> **[0:41](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=41)** This course, of course, will use SQLite, which uses Dot commands that can perform similar functions as in other systems.
>
> **[0:49](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=49)** We'll begin by opening the database file using .open command, .open, and we'll specify AdventureWorks, AdventureWorks.db.
>
> **[1:04](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=64)** To verify everything is set up, use the .database command, and this command shows us the database available in our current connection.
>
> **[1:13](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=73)** Another way to examine the database structure is through a GUI interface, and we can view our table structure by opening the .db file and VS Code, and we can see it through the SQLite viewer extension.
>
> **[1:26](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=86)** From here, we can preview the database tables.
>
> **[1:29](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=89)** We can also preview the rows in each table.
>
> **[1:35](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=95)** I can also review the columns and primary keys.
>
> **[1:38](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=98)** So in this instance of the DimCustomer table, we can see the CustomerKey is our primary key, and we can also see a GeographyKey as a foreign key.
>
> **[1:48](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=108)** Let's try to set up some information about our tables using SQL.
>
> **[1:52](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=112)** Next, we can type in sqlite new query in the command palette.
>
> **[1:57](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=117)** You can access your command palette here by typing in a symbol and then going to SQLite New Query.
>
> **[2:06](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=126)** Or you can go by your menu, select View Command Palette.
>
> **[2:11](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=131)** Same thing.
>
> **[2:14](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=134)** So now we have a new window open.
>
> **[2:17](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=137)** I'm going to copy query over from our solution file here.
>
> **[2:21](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=141)** That just is select name from sqlite_master table.
>
> **[2:29](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=149)** Now, the sqlite_master table stores SQL text that describes the objects created upon database creation.
>
> **[2:36](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=156)** From here, I'm going to just select my query here, and I'm going to right-click and hit Run Query.
>
> **[2:45](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=165)** While the SQLite extension allows us to run the query in the query editor, we can also run the same query on the command line, so we can just take the same query here and paste it on your command line down here in the terminal.
>
> **[3:02](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=182)** We'll hit Enter and we can see the similar results.
>
> **[3:07](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=187)** Now, we reviewed several methods to see the database structure in SQLite.
>
> **[3:11](https://www.linkedin.com/learning/practice-it-sql-joins/sql-commands-for-determining-relationships-25892082?u=76281980&t=191)** Let's get ready to get into some more practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (8), hit (3), [[SQL]] (2), management (1), [[PostgreSQL|Postgres]] (1)
> **Tools:** terminal (7), vs code (2), command line (2)
> **Env Vars:** sql (2), gui (1)
> **UI Navigation:** go to (2), right-click (1)
> **CLI Commands:** sqlite3 (2)
> **Code Identifiers:** sqlite_master (2)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)

#### Try it: Schema description SQL commands
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-schema-description-sql-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-schema-description-sql-commands?u=76281980&t=0)** (vibration humming) (computer keys clicking)
>
> **[0:03](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-schema-description-sql-commands?u=76281980&t=3)** - [Instructor] For the first practice, let's begin by identifying relationships in AdventureWorks.
>
> **[0:08](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-schema-description-sql-commands?u=76281980&t=8)** Take a look at the "Entity Relationship Diagram" provided in the repo.
>
> **[0:13](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-schema-description-sql-commands?u=76281980&t=13)** To best understand how to query the database, we need to understand how all the entities are related.
>
> **[0:20](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-schema-description-sql-commands?u=76281980&t=20)** The "Entity Relationship Diagram" shows us the one-to-one, one-to-many, and many-to-many relationships.
>
> **[0:27](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-schema-description-sql-commands?u=76281980&t=27)** So in this exercise, you'll run some analytics on all the entities in our database to get a feel of the relationships and attributes of all the tables.
>
> **[0:37](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-schema-description-sql-commands?u=76281980&t=37)** Over the next few exercises, you'll be building scripts to describe the AdventureWorks database.
>
> **[0:43](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-schema-description-sql-commands?u=76281980&t=43)** You'll use the output from the scripts in this chapter to help build the scripts related to the different types of SQL joins.
>
> **[0:50](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-schema-description-sql-commands?u=76281980&t=50)** In your code editor, you'll write a script that will output a list of all the tables in the database.
>
> **[0:57](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-schema-description-sql-commands?u=76281980&t=57)** Use the "chapter1.txt" file to help you get started.
>
> **[1:01](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-schema-description-sql-commands?u=76281980&t=61)** You'll also write a script that will give us a count of the numbers of records on each table.
>
> **[1:06](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-schema-description-sql-commands?u=76281980&t=66)** This will give us an idea of the size of each table and lastly, you'll create a script that will give us the create scripts for each of the tables within AdventureWorks.
>
> **[1:18](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-schema-description-sql-commands?u=76281980&t=78)** We'll save these scripts to a schema report, that we'll include with our ERD.
>
> **[1:23](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-schema-description-sql-commands?u=76281980&t=83)** This report will be helpful for us as we get ready to query our data in the next few chapters.
>
> **[1:30](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-schema-description-sql-commands?u=76281980&t=90)** To get you started, let's type in ".mode" and "html."
>
> **[1:37](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-schema-description-sql-commands?u=76281980&t=97)** Then we'll put ".output adventureworks_docs.html."
>
> **[1:47](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-schema-description-sql-commands?u=76281980&t=107)** This will allow us to create our output in the HTML format and place it in the "adventureworks.html" file.
>
> **[1:56](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-schema-description-sql-commands?u=76281980&t=116)** Feel free to also save your code to a text file and then copy commands in the command line for practice.
>
> **[2:03](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-schema-description-sql-commands?u=76281980&t=123)** After you're done, come back to the next video to check your work.
>
> **[2:07](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-schema-description-sql-commands?u=76281980&t=127)** You can also review the text files in the solution directory on GitHub, to compare your practice code solution and the HTML document.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (5), database (4), next (3), [[Analytics]] (1), [[SQL]] (1)
> **Env Vars:** html (2), sql (1), erd (1)
> **File Paths:** chapter1.txt (1), adventureworks_docs.html (1), adventureworks.html (1)
> **Cross-References:** in the next (1), next video (1)
> **Tools:** command line (1), github (1)
> **Code Identifiers:** adventureworks_docs (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (computer keys clicking) (1)

#### Check it: Schema description SQL commands
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=2)** - Review all of the database entities or tables and their relationships.
>
> **[0:07](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=7)** Briefly review the types of relationships whether they be one-to-one, one-to-many or many-to-many relationships.
>
> **[0:14](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=14)** Now, most of the tables within this diagram have one-to-many relationships.
>
> **[0:19](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=19)** You won't see too many many-to-many relationships between keys, but we can infer lots of many-to-many relationships between non-key fields.
>
> **[0:28](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=28)** You'll also see in this model, we have tables that begin with Dim and Fact.
>
> **[0:33](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=33)** These represent your Dimension and Fact tables which are common within a star schema database.
>
> **[0:39](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=39)** Let's start by first taking a look at the AdventureWorks database from Visual Studio Code.
>
> **[0:45](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=45)** Let's start by opening up a new terminal and typing in sqlite3.
>
> **[0:54](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=54)** And then let's open our AdventureWorks database AdventureWorks.db.
>
> **[1:03](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=63)** Let's add some additional parameters for formatting the results on the command line to show the SQL results in a more readable format.
>
> **[1:11](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=71)** So I'll use .headers on to turn the headers on so that we can see headers for our columns.
>
> **[1:19](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=79)** And we'll do .mode html and .output AdventureWorks_docs.html.
>
> **[1:34](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=94)** And this will allow us to create our output in the HTML format and place it within the AdventureWorks_docs.html file that you can see it right here.
>
> **[1:48](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=108)** Next from the command line, let's type in .tables and this will return a list of all the tables within the database without any additional details.
>
> **[1:59](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=119)** Next, one thing that's going to be really important as we get ready to join data from different tables is the table size.
>
> **[2:05](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=125)** And we can do that by creating a script that counts the number of rows for each table.
>
> **[2:11](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=131)** For each of the tables listed, we can create a SQL query that will calculate the number of rows.
>
> **[2:17](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=137)** So for example, we can type in select "Number of rows in DimCustomer"
>
> **[2:31](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=151)** and this will just put a label on our output that says number of rows for DimCustomer.
>
> **[2:37](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=157)** Hit Enter here and then we'll put in select count(1), just to count the first column, from DimCustomer.
>
> **[2:54](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=174)** And again, you can repeat this for all of the tables within the database.
>
> **[3:00](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=180)** Now all of the information about the tables in the database is kept in a table called the sqlite_master table.
>
> **[3:07](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=187)** And we can also run queries against this table to get information about the database scheme.
>
> **[3:12](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=192)** So let's grab some information from the sqlite_master table about the DimCustomer table using the following.
>
> **[3:19](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=199)** So we're going to type in select all, select * from sqlite_master where DimCustomer or name='DimCustomer'.
>
> **[3:33](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=213)** Okay, now there we go.
>
> **[3:37](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=217)** And we can see information from the sqlite_master table.
>
> **[3:48](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=228)** The results you should see are all columns in the sqlite_master table including type, name, the table name, the root page, and the SQL which is the create script to use to create this table.
>
> **[4:04](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=244)** To get just the create script for the DimCustomer table we can type in the following.
>
> **[4:09](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=249)** We can do select sql from sqlite_master where name='DimCustomer'
>
> **[4:21](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=261)** Hit Enter We could also do the same thing for all the tables and we could change the DimCustomer equals into an in statement.
>
> **[4:29](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=269)** So I can do select SQL from sqlite_master where name is in and then have a list of all my table names like DimCustomer, let's see, DimCurrency, DimProduct and we can list all of the tables there as needed.
>
> **[4:56](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=296)** You can see in our HTML file we have create table statements from all of those tables there.
>
> **[5:05](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=305)** Now you can sync your work to your forked repo by clicking on the code space sync and then to commit to commit your HTML file to your repo.
>
> **[5:19](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=319)** You can also choose to put these commands within a text file itself and rerun those as needed as well.
>
> **[5:25](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-schema-description-sql-commands?u=76281980&t=325)** Now that we reviewed some basics on table descriptions let's look at some more commands.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (8), [[HTML]] (6), [[SQL]] (5), next (2), hit (2)
> **Code Identifiers:** sqlite_master (7)
> **Env Vars:** sql (4), html (3)
> **Tools:** command line (2), visual studio (1), terminal (1)
> **File Paths:** adventureworks_docs.html (2)
> **CLI Commands:** sqlite3 (1)
> **Analogies:** for example (1)
> **Speakers:** - review (1)

#### Try it: Table and column description SQL commands
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-table-and-column-description-sql-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-table-and-column-description-sql-commands?u=76281980&t=1)** (keys clicking)
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-table-and-column-description-sql-commands?u=76281980&t=2)** - [Instructor] Let's create a few scripts to describe the columns in our tables.
>
> **[0:06](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-table-and-column-description-sql-commands?u=76281980&t=6)** We'll first create a script that documents the different attributes for each table and their constraints.
>
> **[0:11](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-table-and-column-description-sql-commands?u=76281980&t=11)** We're going to add to the documentation we created earlier so if you haven't already, let's make sure we type in the following, .mode space html and .output space adventureworks_docs.html into the SQLite CLI in the terminal.
>
> **[0:30](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-table-and-column-description-sql-commands?u=76281980&t=30)** This allows us to create our output in the HTML format and place it in the adventureworks_docs.html file.
>
> **[0:38](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-table-and-column-description-sql-commands?u=76281980&t=38)** Next, let's include a list of all our tables into our HTML document.
>
> **[0:43](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-table-and-column-description-sql-commands?u=76281980&t=43)** Here's a list of helpful statements that you can use, .print then space and then we're going to put, List of Database Tables.
>
> **[0:50](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-table-and-column-description-sql-commands?u=76281980&t=50)** You can also print some hyphens to create some formatting and the .tables to create your list of tables.
>
> **[0:57](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-table-and-column-description-sql-commands?u=76281980&t=57)** Next, for each table, let's run the command table_info and include a comment above each table.
>
> **[1:06](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-table-and-column-description-sql-commands?u=76281980&t=66)** Here's some help to get you started, .print, the table name, table, some additional formatting and then the PRAGMA statement, table_info, and then the name of the table within quotations.
>
> **[1:20](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-table-and-column-description-sql-commands?u=76281980&t=80)** You can also create your custom shell script with all of these commands and save it, so that you can go back and rerun it as many times as you want.
>
> **[1:29](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-table-and-column-description-sql-commands?u=76281980&t=89)** You can create this file by creating a new file within your Explorer window and calling it create_documentation.sh.
>
> **[1:39](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-table-and-column-description-sql-commands?u=76281980&t=99)** You can use the following structure and save it as the create_documentation.sh file.
>
> **[1:46](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-table-and-column-description-sql-commands?u=76281980&t=106)** You can review your solution within the solution directory within GitHub.
>
> **[1:50](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-table-and-column-description-sql-commands?u=76281980&t=110)** The HTML documentation that you build can not only be used for the rest of this practice course, but also as a template for any SQLite projects you may work with in the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (6), next (2), [[CLI]] (1), database (1), [[GitHub]] (1)
> **Code Identifiers:** adventureworks_docs (2), table_info (2), create_documentation (2)
> **Env Vars:** html (3), cli (1), pragma (1)
> **File Paths:** adventureworks_docs.html (2), create_documentation.sh (2)
> **Tools:** terminal (1), github (1)
> **CLI Commands:** make (1)
> **Documentation:** the documentation (1)
> **Exercise Files:** template (1)

#### Check it: Table and column description SQL commands
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-table-and-column-description-sql-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-table-and-column-description-sql-commands?u=76281980&t=0)** (sfx)
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-table-and-column-description-sql-commands?u=76281980&t=2)** - In this practice we examined each table's column, and its constraints.
>
> **[0:06](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-table-and-column-description-sql-commands?u=76281980&t=6)** We want to especially pay attention to the primary and foreign keys on each table.
>
> **[0:11](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-table-and-column-description-sql-commands?u=76281980&t=11)** What are the data types of those columns, and are the data types consistent ,throughout the database, for the same piece of information?
>
> **[0:19](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-table-and-column-description-sql-commands?u=76281980&t=19)** To begin, let's explore the .schema command.
>
> **[0:24](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-table-and-column-description-sql-commands?u=76281980&t=24)** .schema.
>
> **[0:26](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-table-and-column-description-sql-commands?u=76281980&t=26)** Now, when we run this command alone, it will create a "Create Table" statement for every table within our database.
>
> **[0:35](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-table-and-column-description-sql-commands?u=76281980&t=35)** When we run with a table name such as .schema DimCustomer.
>
> **[0:45](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-table-and-column-description-sql-commands?u=76281980&t=45)** It will output the "Create Table" statement just for that specific table, and we can look at the entire adventure work schema by just typing in the .schema command.
>
> **[0:57](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-table-and-column-description-sql-commands?u=76281980&t=57)** This will also include the primary and foreign keys ,defined in the table, along with the references to another table if it does include a foreign key.
>
> **[1:06](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-table-and-column-description-sql-commands?u=76281980&t=66)** The dot schema command will also include detailed table constraint information, if there are any other constraints on the table ,such as, on-delete or on-update cascade commands.
>
> **[1:20](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-table-and-column-description-sql-commands?u=76281980&t=80)** For each table, we can also run a PRAGMA table info command on it.
>
> **[1:25](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-table-and-column-description-sql-commands?u=76281980&t=85)** So let's do PRAGMA table_info on DimCustomer.
>
> **[1:38](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-table-and-column-description-sql-commands?u=76281980&t=98)** The results show the index of the column, the column name, the data type, and constraints on the columns.
>
> **[1:45](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-table-and-column-description-sql-commands?u=76281980&t=105)** This returns one row for each column if within the table.
>
> **[1:49](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-table-and-column-description-sql-commands?u=76281980&t=109)** Now you can find more information about PRAGMA statements in the SQLite documentation at [sqlite.org](https://sqlite.org).
>
> **[1:57](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-table-and-column-description-sql-commands?u=76281980&t=117)** These commands give us a little bit more information about the columns within our tables.
>
> **[2:02](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-table-and-column-description-sql-commands?u=76281980&t=122)** Now, let's bring it all together with table information ,and joins in the next practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), database (2), next (1)
> **Env Vars:** pragma (3)
> **CLI Commands:** find (1)
> **Code Identifiers:** table_info (1)
> **URLs:** [sqlite.org](https://sqlite.org) (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - in (1)


### 2. Inner Join

[↑ Back to Table of Contents](#table-of-contents)

#### Understanding inner joins
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-inner-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-inner-joins?u=76281980&t=0)** - [Instructor] Before we dive right into practicing inner joins, let's review the inner join and how it reacts in different types of relationships.
>
> **[0:09](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-inner-joins?u=76281980&t=9)** Let's take a look at this diagram of Table A and Table B.
>
> **[0:13](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-inner-joins?u=76281980&t=13)** Let's say they both share an ID field that can be used to join the two tables together.
>
> **[0:19](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-inner-joins?u=76281980&t=19)** If we were to write a query with a condition of Table A.ID equals Table B.ID, the resulting dataset would return only the rows where the ID on Table A matches the ID on Table B.
>
> **[0:34](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-inner-joins?u=76281980&t=34)** So the inner join, as shown in this diagram, will result in a limited dataset that includes only the rows where only the IDs for both tables match.
>
> **[0:46](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-inner-joins?u=76281980&t=46)** It is important to note that in order for a record to appear in the result, it has to be present on both tables.
>
> **[0:54](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-inner-joins?u=76281980&t=54)** So for instance, record with the ID 456 would not be returned.
>
> **[1:01](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-inner-joins?u=76281980&t=61)** Let's take a look at the syntax for the inner join.
>
> **[1:06](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-inner-joins?u=76281980&t=66)** This says select star from Table A, inner join Table B on Table A.ID equals Table B.ID.
>
> **[1:16](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-inner-joins?u=76281980&t=76)** The condition to join the two tables, known as the join condition, tells our statement how to join the tables together.
>
> **[1:23](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-inner-joins?u=76281980&t=83)** The join condition appears after the on keyword.
>
> **[1:27](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-inner-joins?u=76281980&t=87)** So in this case, the join condition is Table A.ID equals Table B.ID.
>
> **[1:34](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-inner-joins?u=76281980&t=94)** The result is the same as if we were to write select star from Table A and Table B where Table A.ID equals Table B.ID.
>
> **[1:47](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-inner-joins?u=76281980&t=107)** Going back to our design documentation, we will normally join tables on keys, such as the primary and foreign keys, but you can also join on non-key columns.
>
> **[1:57](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-inner-joins?u=76281980&t=117)** But be aware that our columns may not be indexed and it could cause you some performance issues.
>
> **[2:04](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-inner-joins?u=76281980&t=124)** So back to using keys, for example, if we have a customer and a sales table, say for instance Dem Customer, and your Fact Internet sales table, you have the customer ID as the primary key on the customer table and the customer ID as a foreign key on your sales table.
>
> **[2:24](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-inner-joins?u=76281980&t=144)** Our results can vary depending on the types of joins we use and the columns we include in our query.
>
> **[2:32](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-inner-joins?u=76281980&t=152)** So let's start by practicing some inner joins within the AdventureWorks database with different types of relationships to see how that impacts our query results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (1)
> **Analogies:** for instance (2), such as (1), for example (1)
> **Warnings:** note that (1), be aware (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Try it: Inner join
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-inner-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-inner-join?u=76281980&t=1)** - [Instructor] Now it's your turn to practice some inner joins.
>
> **[0:05](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-inner-join?u=76281980&t=5)** Take a look at the AdventureWorks database, and the documentation that you created from Chapter 1.
>
> **[0:10](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-inner-join?u=76281980&t=10)** First, identify some possible one-to-one relationships.
>
> **[0:13](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-inner-join?u=76281980&t=13)** You may have to create a new table by normalizing or creating two separate tables from one that already exists.
>
> **[0:20](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-inner-join?u=76281980&t=20)** You can also do this by creating views.
>
> **[0:23](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-inner-join?u=76281980&t=23)** If you do, don't forget to modify your scripts from Chapter 1 to include any new tables that you created.
>
> **[0:29](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-inner-join?u=76281980&t=29)** Practice performing an inner join on your one-to-one relationship, and return all the columns from both tables and review the results.
>
> **[0:38](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-inner-join?u=76281980&t=38)** Next, go over your documentation to find one-to-many relationships.
>
> **[0:42](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-inner-join?u=76281980&t=42)** There's many to choose from by identifying and reviewing the references in foreign keys.
>
> **[0:48](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-inner-join?u=76281980&t=48)** Practice performing an inner join on the one-to-many relationship and return all the columns from both tables.
>
> **[0:55](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-inner-join?u=76281980&t=55)** Many-to-many relationships are pretty hard to find within this data set using keys so you can practice many-to-many relationships by joining non-key columns such as dates.
>
> **[1:06](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-inner-join?u=76281980&t=66)** Practice performing the inner join on many-to-many relationships and return all the columns from both tables.
>
> **[1:13](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-inner-join?u=76281980&t=73)** Here's a question, where would many-to-many joins be useful, and why should you be wary of using them, especially on larger tables?
>
> **[1:23](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-inner-join?u=76281980&t=83)** Don't forget to come back and check your work in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (2), database (1), data (1)
> **CLI Commands:** find (2)
> **Best Practices:** don't forget (2)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Check it: Inner join
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=2)** - Let's begin by looking at the different types of relationships between tables in AdventureWorks.
>
> **[0:07](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=7)** First, let's look at some one-to-one relationships.
>
> **[0:10](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=10)** This would be where one record on one table can only match one record on a second table.
>
> **[0:16](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=16)** In AdventureWorks we don't see many examples of one-to-one relationships, but let's say we decide to create a new table that can have a one-to-one relationship with one of our existing tables.
>
> **[0:30](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=30)** If we add another level of normalization to the customer table and remove the customer address information we can create a one-to-one relationship between a view of the subset of the customer table and a view of the customer address information.
>
> **[0:47](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=47)** So, we can take address line one address line two, and geography key, and move those to a customer address view.
>
> **[0:57](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=57)** And take just a few columns of the customer table into a view for customer birthday.
>
> **[1:03](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=63)** A once a many example would be created if we had multiple customers at the same address.
>
> **[1:08](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=68)** But since we are creating from the same table, we'll assume this is a one-to-one relationship.
>
> **[1:16](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=76)** To join these two views, we'll use the customer key.
>
> **[1:20](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=80)** To perform an inner join on these two tables, we will use the following code.
>
> **[1:25](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=85)** Inner joins are also used when combining data from two tables with a one to many relationship.
>
> **[1:31](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=91)** Let's see what happens with an inner join on a one-to-many relationship.
>
> **[1:36](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=96)** The foreign key on a table based on the primary key of another table means that the table with the foreign key can have one or more records related to a single record on the table with the primary key.
>
> **[1:49](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=109)** This can result in a one-to-many relationship.
>
> **[1:52](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=112)** Let's look at the DimCustomer table and the FactInternetSales table.
>
> **[1:57](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=117)** The customer key is the foreign key relationship on the internet sales that we'll use to join to DimCustomer.
>
> **[2:06](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=126)** This is a possible one-to-many relationship.
>
> **[2:09](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=129)** What happens when we do an inner join on customer to internet sales?
>
> **[2:14](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=134)** If we write select a.* and b.* star from DimCustomer give it an alias of a and inner join to FactInternetSales with an alias of b on customer key.
>
> **[2:27](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=147)** And then order by the customer id.
>
> **[2:31](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=151)** Let's run query, run query.
>
> **[2:43](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=163)** We'll get all records from FactInternetSales that match to customer.
>
> **[2:48](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=168)** Note that the customer information is repeated for every row that matches to internet sales.
>
> **[3:02](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=182)** If we reverse the order of the tables listed and select a.* b.* from FactInternetSales as alias a first, and then enter join to dimCustomer b we get the same number of rows returned and the order of the results just lists the information from the FactInternetSales first and repeated the customer information at the end.
>
> **[3:28](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=208)** Now, what happens when we try to join tables that have a many-to-many relationship?
>
> **[3:33](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=213)** A many-to-many relationship occurs when the key that joins the relationship between the tables is not unique on either table.
>
> **[3:42](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=222)** What happens if we try to join the order date on the FactInternetSales table to the date on FactSurveyResponse?
>
> **[3:52](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=232)** Now, we're not sure why we want to do this but let's look at what happens if you did.
>
> **[3:57](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=237)** So we'll do a select a.* select b.* from FactInternetSales and inner join to FactSurveyResponse.
>
> **[4:06](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=246)** We're joining order date on the FactInternetSales table to the date on FactSurveyResponse.
>
> **[4:13](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=253)** We'll go to view command palette, run the query on AdventureWorks.
>
> **[4:22](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=262)** We'll return every record on internet sales where the order date matches the date on FactSurveyResponse.
>
> **[4:30](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=270)** Now this results in over 19,000 records in the resulting data set.
>
> **[4:37](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=277)** We don't know if that's what we want to do here.
>
> **[4:40](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=280)** So, you will usually see some intermediate table used whenever there's a many-to-many relationship.
>
> **[4:48](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=288)** We'd also want to probably use some additional criteria in the where clause to limit this query.
>
> **[4:54](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=294)** So to review, we've looked at inner joins from a one-to-one, one-to-many, and many-to-many relationship.
>
> **[5:03](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-inner-join?u=76281980&t=303)** Always remember to look at your documentation to ensure you're joining compatible data types and the references to related tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3)
> **Definitions:** is a  (2), means that (1)
> **Code Identifiers:** dimcustomer (1)
> **UI Navigation:** go to (1)
> **Best Practices:** remember to (1)
> **Warnings:** note that (1)
> **Speakers:** - let (1)

#### Understanding self joins
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-self-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-self-joins?u=76281980&t=0)** - [Instructor] A self-join is also known as a recursive relationship when a column in a table is related to the same column in the same table.
>
> **[0:09](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-self-joins?u=76281980&t=9)** The self-join is useful for comparing values in a column to other values in the same column.
>
> **[0:15](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-self-joins?u=76281980&t=15)** Let's say we need a list of all products in the same product sub-category.
>
> **[0:20](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-self-joins?u=76281980&t=20)** We can use a self-join in this case on the dim product table.
>
> **[0:24](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-self-joins?u=76281980&t=24)** In the following SQL statement, we perform an inner join on the dim product table to the same dim product table and in the "on" criteria, we choose the product keys that don't match, but are in the same product sub-category.
>
> **[0:38](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-self-joins?u=76281980&t=38)** The resulting data set gives us all of the products that are in the same product sub-class as a product in the first column.
>
> **[0:46](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-self-joins?u=76281980&t=46)** It also gives us the product subcategory key in the last column.
>
> **[0:51](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-self-joins?u=76281980&t=51)** In some RDBMSs, we can add a foreign key referencing that primary key of the same table in an alter statement.
>
> **[0:59](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-self-joins?u=76281980&t=59)** However, in SQLite, we aren't able to add the "alter table" statement to add constraints and foreign keys.
>
> **[1:07](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-self-joins?u=76281980&t=67)** Those have to be defined when we create the table.
>
> **[1:10](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-self-joins?u=76281980&t=70)** Another barrier is that we can't create a foreign key to a column within the same table without that table first being created.
>
> **[1:17](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-self-joins?u=76281980&t=77)** We can still have this type of self-join relationship, however, it just won't be defined in the foreign key definition.
>
> **[1:23](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-self-joins?u=76281980&t=83)** Now, let's take a look at Venture Works database and the self-join in practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (9), [[Microsoft Products|Products]] (2), [[SQL]] (1), data (1), database (1)
> **Env Vars:** sql (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### Try it: Self join
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-self-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-self-join?u=76281980&t=2)** - [Narrator] Now it's your turn to practice some self joins.
>
> **[0:05](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-self-join?u=76281980&t=5)** There are some additional self join relationships within AdventureWorks database, where the same concept applies.
>
> **[0:11](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-self-join?u=76281980&t=11)** In this practice, we'll perform a self join on the DIM employee table based on the EmployeeKey and the ParentEmployeeKey.
>
> **[0:19](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-self-join?u=76281980&t=19)** Check your database documentation to find the remaining self join relationship within AdventureWorks.
>
> **[0:25](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-self-join?u=76281980&t=25)** Next, write a sequel query that returns the employee name and the manager's name using the EmployeeKey and the ParentEmployeeKey for your self join in.
>
> **[0:36](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-self-join?u=76281980&t=36)** Also, feel free to save your queries to your form copy of the repository as .SQL files.
>
> **[0:42](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-self-join?u=76281980&t=42)** You can also review your solution with the solution files in the GitHub repo.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (2), next (1), [[SQL]] (1), [[GitHub]] (1)
> **Env Vars:** dim (1), sql (1)
> **CLI Commands:** find (1)
> **Tools:** github (1)
> **Exercise Files:** github repo (1)
> **Speakers:** - [narrator] (1)

#### Check it: Self join
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-self-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-self-join?u=76281980&t=2)** - Here's a common example of self joins demonstrated within the AdventureWorks database.
>
> **[0:06](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-self-join?u=76281980&t=6)** On the DemEmployee's table, we have the EmployeeKey which is the primary key for the table and of course it is a unique identifier for each employee.
>
> **[0:16](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-self-join?u=76281980&t=16)** Instead of creating a separate table for managers this table includes a ParentEmployeeKey to indicate the employee's direct manager.
>
> **[0:25](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-self-join?u=76281980&t=25)** We can use an inner join from the DemEmployee table to itself, joining the ParentEmployeeKey to EmployeeKey.
>
> **[0:34](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-self-join?u=76281980&t=34)** Let's look at how we would perform this join here.
>
> **[0:36](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-self-join?u=76281980&t=36)** We can write this in the IDE and run the query using the command palette I showed you earlier.
>
> **[0:42](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-self-join?u=76281980&t=42)** In this query, we can use aliases to keep up with the columns for the employee and manager and to find how to join the ParentEmployeeKey and the EmployeeKey.
>
> **[1:00](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-self-join?u=76281980&t=60)** Now, this isn't a super difficult concept but needed to point out that a table can have a relationship with itself and how the inner join comes into play here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (1)
> **CLI Commands:** find (1)
> **Env Vars:** ide (1)
> **Definitions:** is a  (1)
> **Speakers:** - here (1)


### 3. Left Join

[↑ Back to Table of Contents](#table-of-contents)

#### Understanding left joins
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980&t=0)** - [Instructor] Let's get ready to learn more about what we call left joins.
>
> **[0:03](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980&t=3)** You'll sometimes hear them referred to as left outer joins.
>
> **[0:07](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980&t=7)** Some people wonder what we mean when we say left and right in SQL.
>
> **[0:11](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980&t=11)** Well, it's pretty simple.
>
> **[0:13](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980&t=13)** If you imagine listing two tables next to each other, the first table is the left table, and the second table is the right table.
>
> **[0:22](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980&t=22)** When writing SQL, the first table listed in the from statement, this is known as the left table, as it is mentioned at the left of the join.
>
> **[0:30](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980&t=30)** So from this logic, can we guess where the right table is?
>
> **[0:34](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980&t=34)** Yep, it's the table listed to the right of the join clause.
>
> **[0:38](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980&t=38)** Now let's talk a little bit about the outer join part.
>
> **[0:42](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980&t=42)** The left outer join will return all of the rows on the left table and the matched rows from the right table.
>
> **[0:49](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980&t=49)** For example, let's say we have a customer table with a customer's ID, name, and address.
>
> **[0:56](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980&t=56)** And a second table, let's call it customer email, with a customer's email address.
>
> **[1:01](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980&t=61)** Let's also mention that every customer does not have an email address.
>
> **[1:06](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980&t=66)** First, let's use an example of a one to one relationship between customer and customer email.
>
> **[1:12](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980&t=72)** If we perform a left outer join, we return all of our customer records and those that have an email address will also have an email address in that column.
>
> **[1:23](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980&t=83)** If the customer does not have an email address, then the column for that row is null.
>
> **[1:28](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980&t=88)** So what happens when there's a possibility of more than one customer email address and the relationship between customer and customer email is one to many.
>
> **[1:39](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980&t=99)** Here's that visual.
>
> **[1:40](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980&t=100)** If a customer has more than one email address, then the customer record is repeated for each row in the customer email table where the customer IDs match.
>
> **[1:51](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980&t=111)** When we perform left and right joins, the outer syntax is implied.
>
> **[1:56](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980&t=116)** So writing outer is optional when writing the syntax, but it's helpful to write it out.
>
> **[2:02](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-left-joins?u=76281980&t=122)** Now let's get ready to practice some left joins on the database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), next (1), database (1)
> **Env Vars:** sql (2)
> **Analogies:** imagine (1), for example (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Try it: Left join
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-left-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-left-join?u=76281980&t=0)** - Let's practice some left joints in AdventureWorks.
>
> **[0:05](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-left-join?u=76281980&t=5)** We'll begin by first normalizing the DimCustomer table to create some one-to-one relationships.
>
> **[0:11](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-left-join?u=76281980&t=11)** Here are two provided scripts to create a view of customer key and email address for customers with a letter A and their email address and a view of customers with the CustomerKey, AddressLine1, AddressLine2 and the GeographyKey with those with a geographic region in the United States.
>
> **[0:30](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-left-join?u=76281980&t=30)** Practice left joins between the DimCustomer table and these two views on CustomerKey and DimCustomer as your left or base table.
>
> **[0:39](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-left-join?u=76281980&t=39)** Include the CustomerKey, FirstName and LastName from the DimCustomer table and EmailAddress from the customer_email_a view and the GeographyKey from the customer_address_us view within your select statement.
>
> **[0:52](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-left-join?u=76281980&t=52)** Notice those columns that are return null within your data results.
>
> **[0:56](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-left-join?u=76281980&t=56)** Next, we'll practice a left joint on a one-to-many relationship.
>
> **[1:00](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-left-join?u=76281980&t=60)** In this exercise, we'll look at the AdventureWorks product and sales.
>
> **[1:05](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-left-join?u=76281980&t=65)** We should have some products that have not sold and some products that have sold more than once.
>
> **[1:11](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-left-join?u=76281980&t=71)** Practice left joins between the DimProduct and FactInternetSales on ProductKey.
>
> **[1:16](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-left-join?u=76281980&t=76)** First try a left join that returns the ProductKey from DimProduct and the total sales for each product from FactInternetSales.
>
> **[1:24](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-left-join?u=76281980&t=84)** Next, create another query that returns the ProductKey, the EnglishProductName, from the DimProduct table, and the OrderDate, OrderQuantity and SalesAmount from the FactInternetSales table and include those in your select statement.
>
> **[1:39](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-left-join?u=76281980&t=99)** Notice those columns that are returned null from the views.
>
> **[1:43](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-left-join?u=76281980&t=103)** Try these exercises in your code space and as always you can check your solution against the solution files within GitHub.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (2), product (2), [[Microsoft Products|Products]] (2), data (1), [[GitHub]] (1)
> **Code Identifiers:** customer_email_a (1), customer_address_us (1)
> **Non-Speech:** (beeping) (1), (typing) (1)
> **Tools:** github (1)
> **Speakers:** - let (1)

#### Check it: Left join
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-left-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-left-join?u=76281980&t=2)** - [Instructor] Let's take a look at the one-to-one relationships we created with the customer data.
>
> **[0:06](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-left-join?u=76281980&t=6)** First, we created the two views from the scripts provided to practice a left join with a one-to-one relationship we created a view of customer email addresses with a letter A and US customer addresses.
>
> **[0:21](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-left-join?u=76281980&t=21)** We can create a one-to-one join from Dim customers to the customer email view.
>
> **[0:27](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-left-join?u=76281980&t=27)** Here's a select statement with the Dim customer table Joined to the customer email A table and the customer address US table.
>
> **[0:39](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-left-join?u=76281980&t=39)** If the customer key is not found on the email view the data result shows a no value for the email address that's returned for that view.
>
> **[0:50](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-left-join?u=76281980&t=50)** Many of the one-to-one relationships within AdventureWorks have been de-normalized to include a lot of columns within one table similar to the Dim customer table.
>
> **[0:59](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-left-join?u=76281980&t=59)** Note, a left join on a one-to-one relationship will still return a data set that is the same amount of rows as the left table.
>
> **[1:09](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-left-join?u=76281980&t=69)** For one to many relationships, we'll look at our product and sales.
>
> **[1:12](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-left-join?u=76281980&t=72)** We should have some products that have not sold and some products that have sold more than once.
>
> **[1:17](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-left-join?u=76281980&t=77)** Let's look at the following sequel: our left table is our DIM product table and our internet sales are on the right.
>
> **[1:25](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-left-join?u=76281980&t=85)** We've selected our product key along with the sum of sales from our internet sales table.
>
> **[1:34](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-left-join?u=76281980&t=94)** In the second query, the sequel includes the product key, the English product name, and the order date, order quantity and sales amount from the fact internet sales table.
>
> **[1:44](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-left-join?u=76281980&t=104)** You see we've done a left join with the Dim product table as our left table and fact internet sales as the table on the right and we join on product key.
>
> **[2:01](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-left-join?u=76281980&t=121)** You'll notice that products that do not include sales have no values for those sales columns.
>
> **[2:13](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-left-join?u=76281980&t=133)** Also notice the length of time it takes to run these kinds of queries.
>
> **[2:17](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-left-join?u=76281980&t=137)** So a couple of things to note here: if we want to join, we should join on columns that are indexed, like our primary keys or make sure that if we're going to make frequent joins on columns other than our primary key that we are indexing those columns as well.
>
> **[2:33](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-left-join?u=76281980&t=153)** The Dim product table here is the left or base table All records from the product table will be returned and the columns that match the product key on fact internet sales on the right are returned.
>
> **[2:46](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-left-join?u=76281980&t=166)** Product to internet sales is a one to many relationship so we'll end up repeating lots of rows and product for each row that shows up on internet sales.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (12), data (3), [[Microsoft Products|Products]] (3)
> **CLI Commands:** make (2)
> **Env Vars:** dim (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Try it: Multiple complex joins
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-multiple-complex-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-multiple-complex-joins?u=76281980&t=0)** (keyboard keys clicking) [Instructor] Let's practice some more complex joins.
>
> **[0:04](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-multiple-complex-joins?u=76281980&t=4)** In AdventureWorks, let's create a reseller query by getting the mailing address of all resellers within a geographic region.
>
> **[0:12](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-multiple-complex-joins?u=76281980&t=12)** In this exercise, you'll practice both inner and left outer joins by combining the DimReseller table with a DimGeographic table, and output the reseller mailing address for customers within a geographic region and the region can be passed through your where clause.
>
> **[0:28](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-multiple-complex-joins?u=76281980&t=28)** To make this even more interesting, we only want to output customers that have made purchases and output their product subcategory.
>
> **[0:37](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-multiple-complex-joins?u=76281980&t=37)** You'll need to understand which tables will be your left table, as well as the relationship between DimReseller, DimGeography, DimProduct, and fact reseller sales.
>
> **[0:50](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-multiple-complex-joins?u=76281980&t=50)** Here's a hint.
>
> **[0:51](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-multiple-complex-joins?u=76281980&t=51)** More than one customer can buy the same product, and a customer can buy more than one product.
>
> **[0:58](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-multiple-complex-joins?u=76281980&t=58)** So think about those relationships.
>
> **[1:01](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-multiple-complex-joins?u=76281980&t=61)** I've included the solution files within GitHub however, please try this one first before going directly to the solution code.
>
> **[1:09](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-multiple-complex-joins?u=76281980&t=69)** There may be more than one way to create this query so don't be discouraged if it isn't exactly the same.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (3), [[GitHub]] (1)
> **CLI Commands:** make (1)
> **Tools:** github (1)
> **Prerequisites:** you'll need (1)
> **Non-Speech:** (keyboard keys clicking) (1)

#### Check it: Multiple complex joins
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-multiple-complex-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-multiple-complex-joins?u=76281980&t=2)** - [Instructor] Of course there will be many instances where we'll be joining more than one table together in a query, and each table in the query may have a different type of relationship.
>
> **[0:11](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-multiple-complex-joins?u=76281980&t=11)** So let's look at some more complex join examples using the tables within Adventure Works.
>
> **[0:17](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-multiple-complex-joins?u=76281980&t=17)** If we look at the DimReseller table it has a foreign key of the geography key.
>
> **[0:23](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-multiple-complex-joins?u=76281980&t=23)** With a reference to the DimGeography table, here we can get address line one and two from our retailer table.
>
> **[0:31](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-multiple-complex-joins?u=76281980&t=31)** Then join to the geography table to get your city, state, postal code, and the country region code.
>
> **[0:40](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-multiple-complex-joins?u=76281980&t=40)** Using the country region code, we can limit this to just the U.S or any country code that you've chosen.
>
> **[0:47](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-multiple-complex-joins?u=76281980&t=47)** We've also returned the sales amount from our fact reseller sales table and we can include that in our order statement by ordering the sales amount in ascending order.
>
> **[1:02](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-multiple-complex-joins?u=76281980&t=62)** We also joined the DimProduct table to the fact reseller sales table to get the product subcategory for each product sold.
>
> **[1:10](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-multiple-complex-joins?u=76281980&t=70)** We've successfully joined tables using both inner and left outer joins.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (2)
> **Speakers:** - [instructor] (1)


### 4. Right Join

[↑ Back to Table of Contents](#table-of-contents)

#### Understanding right joins
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-right-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-right-joins?u=76281980&t=0)** - [Instructor] You may not see right joins commonly in practice, but we'll go over these types of joins quickly for review.
>
> **[0:06](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-right-joins?u=76281980&t=6)** Right joins and full outer joins are not allowed in SQLite.
>
> **[0:09](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-right-joins?u=76281980&t=9)** However, we can pretty much replicate a right join by changing the order of the tables in the left join.
>
> **[0:15](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-right-joins?u=76281980&t=15)** And the right join is pretty much the opposite of a left join, so by switching the order of the tables in the left join, we are essentially performing a right join.
>
> **[0:24](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-right-joins?u=76281980&t=24)** The right join in this statement will be equal to the left join here with the tables reversed.
>
> **[0:30](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-right-joins?u=76281980&t=30)** Now, when would you want to switch the order of the tables and perform a right join?
>
> **[0:34](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-right-joins?u=76281980&t=34)** Since they pretty much perform the same thing, you can choose either a left or right join here, depending on how you want your data presented.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (1)
> **Speakers:** - [instructor] (1)

#### Try it: Right join
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-right-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-right-join?u=76281980&t=0)** (computer beeping) (keys ticking)
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-right-join?u=76281980&t=2)** - [Narrator] In this practice, we'll try some right outer joins.
>
> **[0:05](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-right-join?u=76281980&t=5)** We'll do this by changing up some of the left joints in chapter three.
>
> **[0:09](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-right-join?u=76281980&t=9)** The results should be similar.
>
> **[0:11](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-right-join?u=76281980&t=11)** Also, try changing the order of the columns in your data results to notice how the left and right outer joins affect how the null values of non matched rows appear in your results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (computer beeping) (1)

#### Check it: Right join
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-right-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-right-join?u=76281980&t=1)** (logo blipping)
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-right-join?u=76281980&t=2)** - [Instructor] Let's practice a couple of examples of changing the "LEFT JOIN" to simulate a "RIGHT JOIN" in practice.
>
> **[0:08](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-right-join?u=76281980&t=8)** Let's start with an existing "LEFT JOIN."
>
> **[0:11](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-right-join?u=76281980&t=11)** Here we have the "DimProduct" and "FactInternetSales" tables.
>
> **[0:16](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-right-join?u=76281980&t=16)** If we were to perform a "LEFT JOIN" here, we're taking the "ProductKey" and "EnglishProductName" from the product table and all fields from "FactInternetSales."
>
> **[0:25](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-right-join?u=76281980&t=25)** "DimProduct" is our left table, and "FactInternetSales" is our right and we're joining on the "ProductKey."
>
> **[0:35](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-right-join?u=76281980&t=35)** This will result in all products from the product table and those that did not have a match to internet sales, resulting in null values for those internet sales columns.
>
> **[0:45](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-right-join?u=76281980&t=45)** Let's switch this statement around.
>
> **[0:47](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-right-join?u=76281980&t=47)** Keep the "LEFT JOIN" syntax here and just change the order of the tables, making the internet sales table, your left table.
>
> **[0:56](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-right-join?u=76281980&t=56)** This will result in all "FactInternetSales" with the corresponding product information.
>
> **[1:03](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-right-join?u=76281980&t=63)** This query could be useful in identifying missing product information from products still in the sales table that could have been removed from the "DimProduct" table.
>
> **[1:12](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-right-join?u=76281980&t=72)** As you can see, this query is helpful for identifying null values, as you can order the datasets columns in descending and ascending order and group your null values together.
>
> **[1:23](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-right-join?u=76281980&t=83)** That's really helpful in doing research and analysis on your data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (4), [[Microsoft Products|Products]] (2), data (1)
> **Env Vars:** join (5), left (4), right (1)
> **SQL:** left join (4), join (1)
> **Speakers:** - [instructor] (1)

#### Try it: Full outer join
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-full-outer-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-full-outer-join?u=76281980&t=2)** - Let's practice some full outer joins in Adventure Works.
>
> **[0:06](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-full-outer-join?u=76281980&t=6)** The resulting data set will consist of all rows from both tables in the join with matched and unmatched rows.
>
> **[0:13](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-full-outer-join?u=76281980&t=13)** Like the left join, unmatched columns in a row will have no values.
>
> **[0:19](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-full-outer-join?u=76281980&t=19)** In some RDBMSs, you'll be able to use the full outer join between two tables with the syntax similar to this example.
>
> **[0:28](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-full-outer-join?u=76281980&t=28)** In SQLite we don't have a full outer join available for us to use.
>
> **[0:33](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-full-outer-join?u=76281980&t=33)** However, we can union two left joins together to create a similar result.
>
> **[0:38](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-full-outer-join?u=76281980&t=38)** It's also a great visual of how the full outer join works as well.
>
> **[0:43](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-full-outer-join?u=76281980&t=43)** And here's how that works, we take the left and right outer join and union those two statements together.
>
> **[0:52](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-full-outer-join?u=76281980&t=52)** The order of the columns in both statements in the union must match and be in the same order.
>
> **[0:59](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-full-outer-join?u=76281980&t=59)** Your challenge is to perform a full outer join on customers within the United States and the Internet Sales.
>
> **[1:07](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-full-outer-join?u=76281980&t=67)** You can use the customer address US view to help.
>
> **[1:11](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-full-outer-join?u=76281980&t=71)** So you'll perform a full outer join on customer address US view, and the fact internet sales table.
>
> **[1:19](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-full-outer-join?u=76281980&t=79)** You'll need to identify the keys to join as well as remember how to perform the full outer joint in SQLite.
>
> **[1:26](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-full-outer-join?u=76281980&t=86)** Once you have a solution, feel free to check it against the solution query in Get Hub.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (1)
> **Analogies:** similar to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - let (1)

#### Check it: Full outer join
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-full-outer-join?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-full-outer-join?u=76281980&t=2)** - [Instructor] Let's combine the left and right outer join to create a full outer join.
>
> **[0:07](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-full-outer-join?u=76281980&t=7)** In the SQL, you have a pretty simple solution of a left and right join statement here, union together.
>
> **[0:13](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-full-outer-join?u=76281980&t=13)** I can run this query by just right-clicking and choose Run Query.
>
> **[0:18](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-full-outer-join?u=76281980&t=18)** The first few values in the results show no values in the customer address information.
>
> **[0:23](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-full-outer-join?u=76281980&t=23)** We can go to some later results here and we can see there's customer keys and addresses that are available to us, because we've done a full outer join of both tables.
>
> **[0:33](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-full-outer-join?u=76281980&t=33)** So in summary, a full outer join is just the left join union together with the same left join with the tables reversed or a right join.
>
> **[0:44](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-full-outer-join?u=76281980&t=44)** You can try this code on other RDBMSs for additional practice using the full outer join syntax also.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** sql (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 5. Cross Join

[↑ Back to Table of Contents](#table-of-contents)

#### Understanding cross joins
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-cross-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-cross-joins?u=76281980&t=0)** - [Instructor] The last join we're going to review is the cross join.
>
> **[0:03](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-cross-joins?u=76281980&t=3)** This is also known as a Cartesian product and this is one where you have to be very careful because in this case, relationships don't matter at all.
>
> **[0:13](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-cross-joins?u=76281980&t=13)** Imagine I have a hundred records in table A and 200 records in table B.
>
> **[0:18](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-cross-joins?u=76281980&t=18)** If I were to do a cross join on these two tables for record one in table A I would repeat and join to all 200 records in table B.
>
> **[0:27](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-cross-joins?u=76281980&t=27)** I would repeat this for all 100 records in table A, resulting in a data set with 20,000 rows.
>
> **[0:35](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-cross-joins?u=76281980&t=35)** You can imagine this is not a very good idea for large tables as it could bring your database to a crawl.
>
> **[0:41](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-cross-joins?u=76281980&t=41)** Cross joins are helpful for bringing together combinations from two different tables.
>
> **[0:46](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-cross-joins?u=76281980&t=46)** You'll definitely want to stick to smaller tables when performing cross joins and we'll look at some examples in practice.
>
> **[0:53](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-cross-joins?u=76281980&t=53)** The syntax looks like this.
>
> **[0:55](https://www.linkedin.com/learning/practice-it-sql-joins/understanding-cross-joins?u=76281980&t=55)** You can select all from table A, join B or select all from A cross join B.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (1), data (1), database (1)
> **Analogies:** imagine (2)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Try it: Cross joins and Cartesian joins
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-cross-joins-and-cartesian-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-cross-joins-and-cartesian-joins?u=76281980&t=1)** (keyboard clicking)
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-cross-joins-and-cartesian-joins?u=76281980&t=2)** - [Instructor] For this practice, let's take a look at possible cross joins that are applicable to the AdventureWorks database.
>
> **[0:08](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-cross-joins-and-cartesian-joins?u=76281980&t=8)** You can pretty much choose any tables here, but keep in mind the number of rows in each table.
>
> **[0:13](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-cross-joins-and-cartesian-joins?u=76281980&t=13)** Choose any two tables to perform our Cartesian join, but review your docs to find some smaller tables that could be more suitable.
>
> **[0:22](https://www.linkedin.com/learning/practice-it-sql-joins/try-it-cross-joins-and-cartesian-joins?u=76281980&t=22)** Which tables do you see where implementing a cross join would be helpful in the AdventureWorks database?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (2)
> **CLI Commands:** find (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (keyboard clicking) (1)

#### Check it: Cross joins and Cartesian joins
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-cross-joins-and-cartesian-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-cross-joins-and-cartesian-joins?u=76281980&t=0)** (logo chiming)
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-cross-joins-and-cartesian-joins?u=76281980&t=2)** - [Instructor] Let's take a look at our ERD again, and find two small tables that we can use to create a cross join.
>
> **[0:08](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-cross-joins-and-cartesian-joins?u=76281980&t=8)** I've identified a couple, I think, that will be good here, the DimDepartmentGroup and DimCurrency.
>
> **[0:14](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-cross-joins-and-cartesian-joins?u=76281980&t=14)** I can check the number of roles for those columns by doing a select count for each table, and this documentation should also be in your chapter one documentation as well.
>
> **[0:24](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-cross-joins-and-cartesian-joins?u=76281980&t=24)** You can do a run query on these two.
>
> **[0:27](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-cross-joins-and-cartesian-joins?u=76281980&t=27)** Let's see here, I have to do this again, and get a count for each of the tables to get an idea of how big those tables are.
>
> **[0:36](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-cross-joins-and-cartesian-joins?u=76281980&t=36)** In cross joins, tables do not have to have a relationship with one another.
>
> **[0:41](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-cross-joins-and-cartesian-joins?u=76281980&t=41)** So, that's important to note here.
>
> **[0:44](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-cross-joins-and-cartesian-joins?u=76281980&t=44)** The resulting data set shows every combination of DimCurrency with DimDepartmentGroup.
>
> **[0:50](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-cross-joins-and-cartesian-joins?u=76281980&t=50)** Keep in mind, that resulting data sets will always be the number of rows in each table, multiplied by each other.
>
> **[0:58](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-cross-joins-and-cartesian-joins?u=76281980&t=58)** Hence the name, Cartesian product.
>
> **[1:00](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-cross-joins-and-cartesian-joins?u=76281980&t=60)** And there you have it.
>
> **[1:01](https://www.linkedin.com/learning/practice-it-sql-joins/check-it-cross-joins-and-cartesian-joins?u=76281980&t=61)** That's the last join we'll cover.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), product (1)
> **CLI Commands:** find (1)
> **Env Vars:** erd (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Continuing on with SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/practice-it-sql-joins/continuing-on-with-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/practice-it-sql-joins/continuing-on-with-sql?u=76281980&t=0)** - [Nikiya] Thanks for joining me in this SQL practice.
>
> **[0:02](https://www.linkedin.com/learning/practice-it-sql-joins/continuing-on-with-sql?u=76281980&t=2)** Congratulations on finishing this course, and I hope you've learned a lot of new data skills and enjoyed the material.
>
> **[0:09](https://www.linkedin.com/learning/practice-it-sql-joins/continuing-on-with-sql?u=76281980&t=9)** If you're looking for more SQL-related coursework, there are many courses here in the LinkedIn Learning Library from Basic SQL to Advanced SQL for Data Science, as well as specific courses for different database management systems like MySQL and SQL Server.
>
> **[0:23](https://www.linkedin.com/learning/practice-it-sql-joins/continuing-on-with-sql?u=76281980&t=23)** If you're looking to find out different career paths you want to take your data skills, check out my other course on Finding Career Paths with SQL.
>
> **[0:30](https://www.linkedin.com/learning/practice-it-sql-joins/continuing-on-with-sql?u=76281980&t=30)** You can also follow me on LinkedIn for more data and software development content.
>
> **[0:35](https://www.linkedin.com/learning/practice-it-sql-joins/continuing-on-with-sql?u=76281980&t=35)** Again, my name is Nikiya Simpson.
>
> **[0:37](https://www.linkedin.com/learning/practice-it-sql-joins/continuing-on-with-sql?u=76281980&t=37)** Thanks for practicing SQL with me, and keep on learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), data (4), [[LinkedIn]] (2), career (2), database (1)
> **Env Vars:** sql (7)
> **CLI Commands:** mysql (1), find (1)
> **Speakers:** - [nikiya] (1)


## Instructor

- [[Nikiya Simpson]]

## Resources

- [GitHub Repository](https://github.com/LinkedInLearning/practice-it-sql-joins-3085459/codespaces)

## Skills Covered

- SQL

## Path Context

### In [[SQL Hands-On Practice]]
← [[SQL Practice- Window Functions]] | **5 of 9** | [[Hands-On SQL Challenges- Test Your Knowledge]] →

## Appears In

- [[SQL Hands-On Practice]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL

---

[↑ Back to top](#)