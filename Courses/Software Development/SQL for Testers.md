---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: sql-for-testers
url: "https://www.linkedin.com/learning/sql-for-testers"
duration_minutes: 93
duration: 1h 33m
level: Beginner
updated: 2/16/2024
learners: 233578
skills:
  - SQL
  - Database Testing
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHLDFql6OOJTw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1599847443389?e=2147483647&amp;v=beta&amp;t=hJOOS9dT89Lu79ZqAa7CenTnUGfqogKxBymZE-789SE"
linkedin_topic: Software Development
learning_paths:
  - '[[Getting Started with Software Testing]]'
prev_courses:
  - '[[Java- Testing with JUnit]]'
path_nav: '[{"path":"Getting Started with Software Testing","position":12,"total":12,"prev":"Java- Testing with JUnit","next":null}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/sql
  - skill/database-testing
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/SQL%20for%20Testers.md)

![SQL for Testers](https://media.licdn.com/dms/image/v2/C4E0DAQHLDFql6OOJTw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1599847443389?e=2147483647&amp;v=beta&amp;t=hJOOS9dT89Lu79ZqAa7CenTnUGfqogKxBymZE-789SE)

# SQL for Testers

> The SQL programming language opens the door to deeper and more efficient software testing. SQL allows testers to examine the back end of application, automate testing through scripting, and simplify and speed up data generation. This course provides a quick-start guide to database testing with SQL. Dave Westerveld shows how to choose the right tools, set up a local site, and start validating data 

> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-testers) | 1h 33m | Beginner | 234K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Dive deep into quality](#dive-deep-into-quality)
  - [What you should know](#what-you-should-know)
- [**1. Getting Started**](#1-getting-started) (4 videos)
  - [What is SQL and why use it as a tester?](#what-is-sql-and-why-use-it-as-a-tester)
  - [Getting setup with the tools you need](#getting-setup-with-the-tools-you-need)
  - [Getting started with SQL queries](#getting-started-with-sql-queries)
  - [Understanding more complex SQL queries](#understanding-more-complex-sql-queries)
- [**2. Querying SQL Data**](#2-querying-sql-data) (4 videos)
  - [Setting up a site for testing](#setting-up-a-site-for-testing)
  - [Validate user workflows](#validate-user-workflows)
  - [Validate data integrity](#validate-data-integrity)
  - [Working through an example](#working-through-an-example)
- [**3. Using SQL for Data Generation**](#3-using-sql-for-data-generation) (5 videos)
  - [Create new entries in a table](#create-new-entries-in-a-table)
  - [Update existing entries in a table](#update-existing-entries-in-a-table)
  - [Deleting data from a table](#deleting-data-from-a-table)
  - [Challenge: Data generation](#challenge-data-generation)
  - [Solution: Data generation](#solution-data-generation)
- [**4. Testing SQL Queries**](#4-testing-sql-queries) (7 videos)
  - [Transactions](#transactions)
  - [Field constrains](#field-constrains)
  - [Schema validation](#schema-validation)
  - [Security testing](#security-testing)
  - [Performance testing](#performance-testing)
  - [Challenge: Database tests](#challenge-database-tests)
  - [Solution: Database tests](#solution-database-tests)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Dive deep into quality
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-testers/dive-deep-into-quality-20262778?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/dive-deep-into-quality-20262778?u=76281980&t=0)** - [Dave] Testing is no longer just about verifying that a product works once a developer's hand it to you.
>
> **[0:05](https://www.linkedin.com/learning/sql-for-testers/dive-deep-into-quality-20262778?u=76281980&t=5)** The modern tester is expected to know their way around the technical aspects of an application.
>
> **[0:10](https://www.linkedin.com/learning/sql-for-testers/dive-deep-into-quality-20262778?u=76281980&t=10)** Almost every application on the web has a database somewhere, and so the ability to use SQL is an in-demand skill for any tester to have.
>
> **[0:18](https://www.linkedin.com/learning/sql-for-testers/dive-deep-into-quality-20262778?u=76281980&t=18)** I'm going to show you how to use SQL to enhance your ability to do testing in an application.
>
> **[0:23](https://www.linkedin.com/learning/sql-for-testers/dive-deep-into-quality-20262778?u=76281980&t=23)** You'll learn how to use SQL queries to validate user workflows and to generate test data.
>
> **[0:28](https://www.linkedin.com/learning/sql-for-testers/dive-deep-into-quality-20262778?u=76281980&t=28)** I'll also show you some of the details of the language so that you'll be able to directly test SQL queries.
>
> **[0:33](https://www.linkedin.com/learning/sql-for-testers/dive-deep-into-quality-20262778?u=76281980&t=33)** Hi, I'm Dave Westerveld.
>
> **[0:35](https://www.linkedin.com/learning/sql-for-testers/dive-deep-into-quality-20262778?u=76281980&t=35)** I've been working as a technical tester for many years now, and I'm excited to share a little bit about what I've learned about SQL testing.
>
> **[0:42](https://www.linkedin.com/learning/sql-for-testers/dive-deep-into-quality-20262778?u=76281980&t=42)** If you're ready to use the power of SQL to dive deep into quality, join me in my LinkedIn Learning course on SQL for Testers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), application (3), product (1), web (1), database (1)
> **Env Vars:** sql (7)
> **Definitions:** is an  (1)
> **Speakers:** - [dave] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-testers/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/what-you-should-know?u=76281980&t=0)** - [Instructor] As a software tester, there are many things you need to know.
>
> **[0:03](https://www.linkedin.com/learning/sql-for-testers/what-you-should-know?u=76281980&t=3)** By the end of this course, you'll be able to use SQL to help you with testing work, and you'll also be able to test SQL queries.
>
> **[0:09](https://www.linkedin.com/learning/sql-for-testers/what-you-should-know?u=76281980&t=9)** I'll try to start from the basics and build up, but in order to maximize your learning, you should be comfortable with the basics of working on a command line.
>
> **[0:16](https://www.linkedin.com/learning/sql-for-testers/what-you-should-know?u=76281980&t=16)** I'll also use a simple Python application to cement some of these concepts for you, but other than a few simple commands that I'll show you, you shouldn't need to know any Python or SQL to start this course.
>
> **[0:26](https://www.linkedin.com/learning/sql-for-testers/what-you-should-know?u=76281980&t=26)** This course assumes that you are new to SQL and ramps you up quickly into being able to use SQL in your day-to-day work as a tester.
>
> **[0:32](https://www.linkedin.com/learning/sql-for-testers/what-you-should-know?u=76281980&t=32)** So the main thing that you're going to need going into this course is curiosity and a desire to learn and grow as a tester.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Python (Programming Language)|Python]] (2), application (1)
> **Env Vars:** sql (5)
> **CLI Commands:** python (2)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started

[↑ Back to Table of Contents](#table-of-contents)

#### What is SQL and why use it as a tester?
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=0)** - [Instructor] SQL is everywhere.
>
> **[0:02](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=2)** Almost every application on the web use a structured query language to create and query databases.
>
> **[0:07](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=7)** There's some big data applications and other technology that's moved on to other ways of managing their data, but for the vast majority of websites, SQL remains the backbone of how they use and store data.
>
> **[0:17](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=17)** The very fact that it's so popular, means that as a tester, you should know something about it and how it works, generally, testers don't need to be able to create production code, but understanding how technology works will help you improve your testing of that technology.
>
> **[0:30](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=30)** There's additional benefits as well for testers, so some test scenarios are difficult or time-consuming to set up if you have to do everything with the UI, or even with UI automation.
>
> **[0:40](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=40)** For example, if you use selenium to do this, that could be helpful, but those kinds of scripts can take some time to write and can be a bit difficult to maintain.
>
> **[0:48](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=48)** So sometimes the fastest way to do things is just go right to the database and create or modify the data that you need.
>
> **[0:53](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=53)** Another benefit that comes to testers that know SQL is an improved ability to debug issues.
>
> **[0:58](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=58)** Sometimes it's difficult to understand why something's gone wrong, but if you're able to query the database, you might discover some data corruption or some inconsistencies or some other things that you could do to figure out what is actually going on and what went wrong with the problem.
>
> **[1:14](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=74)** I've used this kind of query myself to track down strange issues that clients were seeing that I wasn't able to reproduce locally, and even just to more easily test fixes on issues that involve things like data exports.
>
> **[1:25](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=85)** Another benefit, too, for a tester to learn SQL is employability.
>
> **[1:30](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=90)** If you're able to find some of these deeper problems, if you're able to be more efficient in setting up data in your testing, you'll end up being a more skillful and valuable tester.
>
> **[1:39](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=99)** Of course, not every company is looking for testers that have strong SQL skills, but many do find that to be valuable.
>
> **[1:45](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=105)** For example, in my interview for my current position, I was asked to show some simple SQL queries and being able to work with some of the basics of SQL only helped me in landing the job that I have.
>
> **[1:55](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=115)** So we can see that there are a number of good reasons for testers to learn how to use SQL.
>
> **[1:59](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=119)** But before we dive in, let's talk for a second about where SQL came from.
>
> **[2:03](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=123)** So it was initially developed in the early 1970s, which means that it's actually about somewhere around 50 years old now.
>
> **[2:11](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=131)** So in software years, I think that makes it, well, about as old as this guy here, but why does it continue to be so popular?
>
> **[2:19](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=139)** Well, there's a few reasons.
>
> **[2:20](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=140)** One is that relational databases are very good at expressing relationships in a system where those relationships change and evolve over time, and if you think about it, that pretty much describes any website or application from finance to eCommerce to gaming and everything in between.
>
> **[2:36](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=156)** We've got some defined relationships that sit in place, but those relationships may morph and change a bit over time.
>
> **[2:43](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=163)** So since SQL is designed to work with relational database access, it's a little wonder that it continues to be so popular.
>
> **[2:50](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=170)** There are also, of course, some additional reasons for this as well that are good news for us.
>
> **[2:56](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=176)** One is that it's simple to use.
>
> **[2:58](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=178)** So there's obviously complexity that can come into SQL queries, and if you've ever looked at some production SQL queries, you might find it overwhelming, but the reality is that with just a few simple queries, you can leverage a ton of the power of this language, and it's quite easy to get started with and start using.
>
> **[3:16](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=196)** Another reason for its popularity is that it's so popular.
>
> **[3:20](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=200)** Now this sounds like circular reasoning, and maybe it is, but the reality is that SQL is everywhere, which is great because it means that there's tons of resources available to help you with almost anything that you might get stuck on.
>
> **[3:33](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=213)** There might be people at your company, there almost for sure are, people at your company that are very good at SQL and understand how to use it and you can talk to them and ask them questions, and then, there's millions of SQL users on the internet.
>
> **[3:46](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=226)** So anytime you hit problems with SQL, if you Google it, you will probably find an answer that can help you because it has been around for so long.
>
> **[3:53](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=233)** It's so popular.
>
> **[3:54](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=234)** So many people use it.
>
> **[3:55](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=235)** There's just so many answers available.
>
> **[3:58](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=238)** So for all of these reasons, this is a very popular language to use and a very beneficial language for testers to get into.
>
> **[4:05](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=245)** So let's dive into it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (16), data (6), database (3), application (2), web (1)
> **Env Vars:** sql (16)
> **CLI Commands:** find (4)
> **Definitions:** means that (2), is an  (1), is a  (1)
> **Analogies:** for example (2)
> **Code Identifiers:** ecommerce (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Getting setup with the tools you need
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=0)** - [Instructor] This course is meant to be hands on and practical.
>
> **[0:03](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=3)** I want to use a lot of examples throughout this course, and I would encourage you to try and follow along at home so that you get the most out of this course.
>
> **[0:10](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=10)** So in order to do this, you're going to need SQLiteStudio.
>
> **[0:13](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=13)** This is an application that you can download from SQLightStudio.pl, this website here, and it gives you an interface for working with SQL.
>
> **[0:22](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=22)** So in order to use it, we're going to need to download it.
>
> **[0:24](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=24)** I'm on Windows, so I'll just download the Windows version for it.
>
> **[0:28](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=28)** If you are not on Windows, you can go to the download link to find other versions.
>
> **[0:33](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=33)** And let's talk just for a second about the different flavors of SQL that are out there.
>
> **[0:37](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=37)** You might guess that SQLiteStudio uses a flavor called SQLite, and there are some minor differences between the SQLite flavor of SQL and some of the other ones that are out there, but you really don't need to worry too much about them.
>
> **[0:48](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=48)** The overall structure's very similar, and anything that you learn in this course will translate well into other SQL variants that you use.
>
> **[0:55](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=55)** So once the download has completed, just unzip the package into the folder that you want it, and for me, I've unzipped this package into my program files folder.
>
> **[1:04](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=64)** So if we navigate to that, I can find the SQLiteStudio folder, go into there and open it with SQLiteStudio.exe.
>
> **[1:13](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=73)** Of course, if you're on a Mac or Linux platform, you'll have to look for the appropriate ending for your platform, and you'll have to uninstall it in the appropriate way.
>
> **[1:21](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=81)** I think, I believe on a Mac, you will have to drag it into your app folder.
>
> **[1:26](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=86)** We'll double-click on this to open it, and once that opens, I would recommend that you pin it to your taskbar so you don't have to go looking for it every time.
>
> **[1:35](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=95)** And here's the interface that we have.
>
> **[1:37](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=97)** So at this point, let's take a minute to load a database into it.
>
> **[1:41](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=101)** You'll find a database that you can use in the exercise files for this video.
>
> **[1:44](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=104)** Browse to where you've saved those files and choose the FAKE_CAR_DATA.db.
>
> **[1:49](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=109)** So we'll do that here.
>
> **[1:51](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=111)** I will add a database.
>
> **[1:53](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=113)** I'll browse to my FAKE_CAR_DATA.db file, and I will say OK to open that.
>
> **[2:04](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=124)** So now the database is here, but we need to actually connect to it, so I'll right-click on it and choose connect to database.
>
> **[2:10](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=130)** And you can see that loads the tables that are in it.
>
> **[2:12](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=132)** In this case, we have this FAKE_CAR_DATA table in this database.
>
> **[2:16](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=136)** So now we can go here, tools, open SQL editor, or we could do alt + E to open an editor, and let's take a look at the first query that we can do.
>
> **[2:26](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=146)** This is just one of the simplest queries you can do with SQL.
>
> **[2:29](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=149)** You can try it out, get a feeling for doing a SQL query, but if you don't really understand what these things mean, don't worry about it at all.
>
> **[2:38](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=158)** We will cover all of that shortly.
>
> **[2:40](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=160)** So I'm going to type here select star from FAKE_CAR_DATA; and don't forget the semi-colon, that goes at the end to let SQL know that your command is completed.
>
> **[2:55](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=175)** And then I clicked on the green run button, or you can do F9 to execute the command, and you can see that it executed the command, and we got back a bunch of results down here in the grid view, and you can see that a SQL table is just that, it's a table.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=190)** It's got rows of data, and it's got columns that define the different data types that go into each row.
>
> **[3:16](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=196)** So we will get into all of this stuff in more detail as we continue on with the course.
>
> **[3:20](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=200)** So let's continue on with this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (9), database (6), [[Windows]] (3), data (2), application (1)
> **Env Vars:** sql (9), fake_car_data (4)
> **CLI Commands:** find (3), unzip (1)
> **UI Navigation:** go to (1), navigate to (1), double-click (1), right-click (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is an  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### Getting started with SQL queries
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=0)** - [Instructor] In the last video I had you type in and execute a query.
>
> **[0:03](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=3)** You might not have understood exactly what this query is all doing, but now we're going to dive into this and understand what's actually going on.
>
> **[0:12](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=12)** So the query we have here is pretty simple.
>
> **[0:14](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=14)** We just wrote select star from fake car data.
>
> **[0:18](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=18)** Now, let's just walk through this one step at a time.
>
> **[0:20](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=20)** So first we have this select statement, which well, it selects data, and then we have the star here.
>
> **[0:27](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=27)** So the asterisk or star is a wild card character.
>
> **[0:30](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=30)** It essentially means give back data from all the columns in this table.
>
> **[0:35](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=35)** So we could change this to be a column name, and then we'd only get data from that column.
>
> **[0:41](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=41)** So for example, we could put last_name as the name of this column.
>
> **[0:49](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=49)** We get back a table with only that one column, only the last name column in it.
>
> **[0:54](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=54)** I'll just change this back to star for now, consider.
>
> **[0:58](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=58)** So we'll send that query off and you can see that the response we get back only has the rows where the vehicle make is BMW.
>
> **[1:09](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=69)** So the where phrase is called clause, but this part of it, the vehicle make equals BMW is called a predicate or a comparison predicate because we're doing a comparison.
>
> **[1:20](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=80)** So in this predicate, we're using the equals operator to compare the rows in the vehicle make column to see if they have the value BMW, but we can use other operators as well.
>
> **[1:32](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=92)** So for example, we can use operators like greater than or less than, and let's take a look at an example of doing that.
>
> **[1:37](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=97)** So let's change this predicate here to say vehicle year is greater than 2000.
>
> **[1:49](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=109)** And let's send that query off and you can see that now we get back a list of rows where the vehicle year is greater than 2000.
>
> **[1:58](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=118)** Another example of a comparison operator that we could do here is the between operator.
>
> **[2:05](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=125)** So instead of greater than we can use the keyword between, and we can say between 1995 and 2000.
>
> **[2:16](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=136)** Let's send that query off and see what happens.
>
> **[2:19](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=139)** And you can see that we get vehicles 2000, we also get vehicles from 1995.
>
> **[2:25](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=145)** So it includes the end points '95 and 2000, but all of the vehicles returned, all of the items returned have the vehicle year between 1995 and 2000.
>
> **[2:35](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=155)** And note that in these examples here, we don't have quotes around it because we're dealing with numbers here.
>
> **[2:42](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=162)** There are a number of operators that are available to you and the Wikipedia page on SQL syntax has a good summary table of all these different operators that you can refer to.
>
> **[2:51](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=171)** So after just a few minutes, we've already been able to put together some pretty powerful queries that let us slice up the data in some interesting ways.
>
> **[2:58](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=178)** Hopefully this is giving you a feeling for just how powerful SQL is and also how straightforward it is to use.
>
> **[3:05](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=185)** So we're going to continue to add a bit more complexity to this query, but for now, take a second, give yourself a pat on the back for what you're already able to accomplish with SQL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[SQL]] (3)
> **Env Vars:** bmw (3), sql (3)
> **CLI Commands:** make (3)
> **Definitions:** is called (2), is a  (1)
> **Analogies:** for example (2)
> **Code Identifiers:** last_name (1)
> **Cross-References:** in the last (1)
> **Warnings:** note that (1)

#### Understanding more complex SQL queries
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=0)** - We're going to start looking at how to use SQL to help with testing where shortly.
>
> **[0:04](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=4)** But before we do that, I want to take a few more minutes to get into some of the fundamentals of SQL queries.
>
> **[0:09](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=9)** So far, we've been able to see how to use the select, the from, and the where clauses.
>
> **[0:14](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=14)** Let's look at one more, fairly common clause the order by clause.
>
> **[0:18](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=18)** So we'll add that to our query here, order by, and let's order this by first name, send that query, and you can see that the results that we get back are in alphabetical order for the first name we first got As and Bs and so on.
>
> **[0:35](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=35)** We could also change this.
>
> **[0:36](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=36)** We could order it instead by last name.
>
> **[0:41](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=41)** So let's try that out and see what happens.
>
> **[0:44](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=44)** And you can see that now the first name isn't in alphabetical order, but the last name column is.
>
> **[0:49](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=49)** Or we could order it by vehicle year or whatever we wanted a for columns that we can order by.
>
> **[0:55](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=55)** Now, you might have noticed that the order by clause here is making an assumption.
>
> **[1:00](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=60)** Why did it start with the first letter in the alphabet and then move toward the end?
>
> **[1:04](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=64)** What if you wanted it to start at the end and go the other way?
>
> **[1:07](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=67)** For the order by clause, it uses ascending order by default.
>
> **[1:12](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=72)** If you want to do it in descending order, you can just add DESC to the end of it and send that off.
>
> **[1:20](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=80)** And now it sorts it in descending order.
>
> **[1:23](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=83)** You can also explicitly put ASC here to get an ascending order, or if you just leave it off like we did at first, it will just automatically assume that we're going to use ascending order.
>
> **[1:34](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=94)** So you can see how this clause is helpful as you look through data and helping you understand what's going on.
>
> **[1:42](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=102)** But it's time to try this out on your own again too.
>
> **[1:44](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=104)** Try to create some queries that will give you some information about this table.
>
> **[1:50](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=110)** Perhaps look at all the data for Fords, with the newest ones shown first or something like that.
>
> **[1:55](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=115)** Give yourself a bit of time to play around with these queries and make sure you understand these various clauses and how they work.
>
> **[2:02](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=122)** So we now have a query with four different clauses in it, select from, where and order by.
>
> **[2:07](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=127)** SQL queries get a lot more complex than that, and we'll continue to learn new clauses and patterns as we go through this course.
>
> **[2:14](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=134)** But I want to just take a second and talk about something here called the order of execution.
>
> **[2:19](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=139)** What I mean by that is the order in which the various clauses in the SQL query will get executed.
>
> **[2:24](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=144)** So you can imagine it's not too big a deal here with the small query that we have, but if you get a big query that's got a lot of complexity to it.
>
> **[2:33](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=153)** The order of execution becomes more important and is something that we need to consider.
>
> **[2:37](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=157)** So let's walk through this query that we have here, while it's small enough for us to understand so that we can get a grasp on what is meant by the order of execution.
>
> **[2:45](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=165)** So the first clause in this query is select.
>
> **[2:48](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=168)** But is that the first thing that is going to execute?
>
> **[2:51](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=171)** If we tell the query to select all the columns, select star, as we've done here, the question is what columns.
>
> **[3:00](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=180)** If we started with this blank slate, we can't select any columns because there's no columns there to select yet, right?
>
> **[3:06](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=186)** We have this blank empty nothingness in this point.
>
> **[3:08](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=188)** So we can't really select anything.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=190)** So the first thing we actually need to do is get some data.
>
> **[3:13](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=193)** And that's where this from statement comes into play.
>
> **[3:16](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=196)** So the from statement tells the engine what table to go to where we're going to get the data from.
>
> **[3:22](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=202)** So the first thing that gets executed in a SQL query is the, from clause.
>
> **[3:27](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=207)** So this part will get executed first.
>
> **[3:29](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=209)** First, the query will go and say, okay, I need to connect to this fake car data table and pull the data out of there.
>
> **[3:36](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=216)** And at this point we're ready to select, right?
>
> **[3:39](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=219)** Well, we would be, but we've got some additional clauses here that we need to consider.
>
> **[3:43](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=223)** So the next thing that we have is this where clause.
>
> **[3:47](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=227)** And what the where clause is going to do is actually reduce the data set that's available to select from, right?
>
> **[3:52](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=232)** So the, from car fake car data kind of gives us a connection to the full dataset, but then this where clause says, Oh, out of that data set, I only want the rows where the vehicle year is between 1995 and 2000.
>
> **[4:05](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=245)** So it's going to limit the dataset, reduce it down, to have those rows in it.
>
> **[4:09](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=249)** And then we can finally go back over here.
>
> **[4:12](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=252)** So the first thing we do, is from the second in our order of execution is where the third thing is select.
>
> **[4:18](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=258)** Then we'll actually select the given columns from that, in this case, all of them.
>
> **[4:23](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=263)** So we'll select all the columns from this reduced data set.
>
> **[4:26](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=266)** And then finally, we'll jump over here in the order of execution to order by, and we will order the column according to the given criteria that we've passed to the order by clause.
>
> **[4:39](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=279)** So for a simple query like this, it doesn't really matter too much of course.
>
> **[4:41](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=281)** But as queries get more complex and as you might do things like nesting queries inside of each other, the order of operations can be something that you need to consider.
>
> **[4:50](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=290)** Now, the order of execution, isn't something you should just memorize and know, there's lots of resources to look it up.
>
> **[4:57](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=297)** And this page here has a great example where it just sets out all of the common clauses, in the order that they get executed.
>
> **[5:05](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=305)** Obviously there's clauses in here that we haven't learned about yet.
>
> **[5:08](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=308)** That's totally fine.
>
> **[5:09](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=309)** But if you look at this, you can see that it does what we said.
>
> **[5:12](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=312)** The first thing is from, the next thing that we had was where, the next one was select, and then order by.
>
> **[5:18](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=318)** So the order of execution proceeds according to this.
>
> **[5:22](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=322)** And this is a great resource for you to look at, If you want to remind yourself of what that order of execution is.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (10), [[SQL]] (5), next (3)
> **Env Vars:** sql (5), desc (1), asc (1)
> **UI Navigation:** go to (1), select the (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - we (1)


### 2. Querying SQL Data

[↑ Back to Table of Contents](#table-of-contents)

#### Setting up a site for testing
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=0)** - [Instructor] Now that we have the basics of SQL under our belt, let's start to look at how to use SQL queries as a tester.
>
> **[0:06](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=6)** I really firmly believe that you'll learn best if you can actually execute queries on your own and have a hands-on experience throughout this course.
>
> **[0:13](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=13)** Now, in order to do that, you're going to need to set up some databases locally, but I didn't want this just to be about querying databases.
>
> **[0:19](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=19)** As testers, we look at things in a holistic way.
>
> **[0:22](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=22)** A database by itself can be interesting, but whenever we're looking at a database in our application, it's part of an ecosystem.
>
> **[0:29](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=29)** The database provides data that is ultimately used by a client or user interface in some way.
>
> **[0:34](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=34)** So in order to sort of replicate this, I put together a simple website that has a few database tables for various parts of the data, and it has a simple user interface on top of it that uses the data.
>
> **[0:44](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=44)** Now, obviously this will be far less complex than a real e-commerce site would be, but it should help to make sure that the things that we learn in this course are applicable in the day-to-day work of a tester.
>
> **[0:54](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=54)** I also want to acknowledge GitHub user, Himani13040, whose repo I initially forked off of before modifying this for our needs here.
>
> **[1:02](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=62)** In order to use this site locally, you're going to need a few things.
>
> **[1:05](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=65)** First of all, you'll need to have Python three installed on your computer.
>
> **[1:08](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=68)** If you don't yet have it, you can get it from [python.org/downloads](https://python.org/downloads) and then download the latest version three release for your platform and install it like you would any other application.
>
> **[1:19](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=79)** The site that we're using is built on a Python library called Flask.
>
> **[1:22](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=82)** So once you have Python three installed, you can install Flask by using pip install flask, and then hitting Enter.
>
> **[1:31](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=91)** PIP is just a tool that comes with Python that you can use to install additional packages like this Flask library.
>
> **[1:36](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=96)** This command takes care of downloading and installing everything that you need for running Flask applications.
>
> **[1:41](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=101)** One other library that you'll need to install as well is the Requests library, which you can install in the same way, pip install requests.
>
> **[1:50](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=110)** So once those installs have completed, you'll need to get the application that you want to run, and you can get this from the ZIP files in the course, download and extract those into a folder on your computer.
>
> **[2:00](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=120)** And then once you've done that, go to the command prompt and navigate to that folder.
>
> **[2:05](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=125)** So you can use CD for Change Directory and then put in the path of that folder and hit Enter.
>
> **[2:11](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=131)** So once you're in that folder, you'll need to set the values for a couple of environment variables.
>
> **[2:15](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=135)** So these are the values that Flask will use when it's starting up.
>
> **[2:18](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=138)** First of all, you're going to set the Flask app variable, and on my computer I can do that by calling export FLASK_APP.
>
> **[2:26](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=146)** On Windows, you would probably do, set FLASK_APP, and then we're going to set the value of this variable to main.
>
> **[2:33](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=153)** And similarly, I will also set the FLASK_ENV variable.
>
> **[2:39](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=159)** And this one I will set to development, to let it know that we're working in a development environment.
>
> **[2:45](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=165)** So once I've done that, I'm ready to start the application.
>
> **[2:47](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=167)** And to do that, we can just type flask run, and then hit Enter.
>
> **[2:52](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=172)** And you can see that it starts it up and the application is running on this URL.
>
> **[2:58](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=178)** And if we load that URL in the web browser, you could see it here.
>
> **[3:02](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=182)** Now this application uses some database tables, so let's connect to the database that is behind this site.
>
> **[3:08](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=188)** To do that, I will open the database and choose database.db from the folder.
>
> **[3:17](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=197)** And you can see that it has added these tables here for us in SQLiteStudio.
>
> **[3:23](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=203)** Now, I have also provided a reset script that you can use to reset the database in case anything goes wrong.
>
> **[3:30](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=210)** To run that script, simply go to Open SQL Files, and choose the DatabaseInitializationScript.sql file, open it, and then click on Run to run it, and it will initialize the database for you.
>
> **[3:49](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=229)** So now you've got everything set up and ready to go for doing all kinds of cool testing with this application.
>
> **[3:54](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=234)** Let's dive into that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (10), application (7), [[Python (Programming Language)|Python]] (5), [[SQL]] (4), data (3)
> **Prerequisites:** install (7), you'll need (4), set up (2)
> **CLI Commands:** python (5), pip (3), make (1), cd (1)
> **Env Vars:** sql (3), flask_app (2), url (2), pip (1), zip (1)
> **UI Navigation:** go to (2), navigate to (1), open the (1), click on (1)
> **Tools:** github (1), command prompt (1)
> **File Paths:** databaseinitializationscript.sql (1)
> **URLs:** [python.org](https://python.org) (1)

#### Validate user workflows
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=0)** - [Instructor] Now that you have the testing practice site set up, let's look at how you can use SQL as a tester to validate a user workflow.
>
> **[0:06](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=6)** Now, this is obviously a very simple site, so let's take a look at a very simple cart workflow.
>
> **[0:10](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=10)** First of all, let's sign in so that we can add stuff to the cart.
>
> **[0:15](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=15)** So, I'll use fakeuser1@[gmail.com](https://gmail.com) and for the password, 12345.
>
> **[0:21](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=21)** And once I'm logged in, I'll add an item to the cart and then go over to Studio to see if this was added to the database correctly.
>
> **[0:31](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=31)** So, we'll do Select Star from Cart, semicolon, and let's run that.
>
> **[0:40](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=40)** You can see that there is a row in our cart table with the user ID and the product ID.
>
> **[0:45](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=45)** So that looks like it's working okay, but let's take a look at this product.
>
> **[0:50](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=50)** So we'll do Select Star from products where product ID is equal to the product ID in our cart.
>
> **[1:01](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=61)** So two, and we'll run this query.
>
> **[1:06](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=66)** And you can see it's got the Woman's T-shirt, the price of $4.99.
>
> **[1:09](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=69)** This looks like the item that we added to our cart, and this is good validation that things are set up correctly between the UI and the database on the backend.
>
> **[1:19](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=79)** You can also see here that the stock has been reduced to zero.
>
> **[1:22](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=82)** So as we add items to the cart, they're being reserved in the system and they're not available anymore in the products table, which is what we would expect here.
>
> **[1:30](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=90)** We could also check on the user ID as well, but for now, let's continue with the workflow.
>
> **[1:36](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=96)** So we'll go back to the user interface and we'll go to the cart.
>
> **[1:41](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=101)** We will remove this item from the cart and then back in SQL Studio, we'll run these queries again.
>
> **[1:49](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=109)** So let's select Star from the cart and we can see that there's no rows return, there's nothing in our cart, which is good, and we'll check on the product as well.
>
> **[1:59](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=119)** And we can see that the stock has gone back up to one, so it's available again.
>
> **[2:04](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=124)** So that shows you one example of how you can use SQL to help you in validating product workflows.
>
> **[2:09](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=129)** Let's take a look at another way that you can use a database to help validate what's going on in the UI.
>
> **[2:15](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=135)** If we go to the profile and edit it, and we take a look at this, you can see the Address 1 field looks a little funny, it just has this one in it.
>
> **[2:25](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=145)** It doesn't seem to have a full address.
>
> **[2:27](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=147)** Now there might be some kind of bug here, but let's see if the problem is bad data or if the problem is in how we're rendering the data in the user interface.
>
> **[2:36](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=156)** So in order to do that, let's select Address 1 from the user's table,
>
> **[2:49](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=169)** and let's do that where the email is equal to fakeuser1@[gmail.com](https://gmail.com).
>
> **[3:02](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=182)** When we run this, we see that the Address 1 field has a full address in it.
>
> **[3:07](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=187)** So it does seem like the data's fine and the bug is probably in the page in how it's rendering that data.
>
> **[3:12](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=192)** It looks like it might not display anything after the first space following that one.
>
> **[3:17](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=197)** Now, obviously here we have a very small set of users in our table, but if we had a big data set, we might want to do a quick search and just see how many people are going to be affected by this bug.
>
> **[3:26](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=206)** So to do that, we can use something called the like operator.
>
> **[3:30](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=210)** So instead of looking for a particular user here, let's change this to look for Address 1 like, and then we'll do percent space percent and let's run this query.
>
> **[3:49](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=229)** And you can see that we get all the rows that have an address with a space in it.
>
> **[3:54](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=234)** Now, if you want to learn more about the like operator, W3 Schools has a great article on it along with the details of the kinds of wild card characters that you can use with it.
>
> **[4:04](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=244)** So now you've seen a couple of examples of how you might validate a user workflow with SQL.
>
> **[4:08](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=248)** Why don't you try it out for yourself?
>
> **[4:10](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=250)** Think of a simple workflow and validate that the database tables do what they're supposed to.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (6), [[SQL]] (4), database (4), data (4), [[Microsoft Products|Products]] (2)
> **Env Vars:** sql (4)
> **URLs:** [gmail.com](https://gmail.com) (2)
> **UI Navigation:** go to (2)
> **Prerequisites:** set up (2)
> **Versions:** 4.99 (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)

#### Validate data integrity
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=0)** - [Instructor] We've seen how you can use SQL to validate that certain workflows are correct.
>
> **[0:04](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=4)** But now let's dive a little deeper into validating the data integrity.
>
> **[0:08](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=8)** In order to do this, it's sometimes helpful to look at data that spans multiple tables at the same time.
>
> **[0:13](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=13)** The command that lets us do this in SQL is called a join.
>
> **[0:17](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=17)** There are a couple types of joins and joining can be a bit complicated feeling in SQL.
>
> **[0:21](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=21)** But let's start with the most common type of join, the INNER JOIN.
>
> **[0:25](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=25)** I could give you some theoretical explanation of what it is, but let's start by looking at how to use one.
>
> **[0:31](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=31)** So let's try this out.
>
> **[0:32](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=32)** Let's add a couple of items to our cart.
>
> **[0:36](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=36)** We'll add a few of these and then let's take a look at the cart table.
>
> **[0:45](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=45)** So we'll do SELECT * FROM cart and we can see we've got these four products in the cart for this user.
>
> **[0:56](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=56)** Now, what if I wanted to see the stock count for each of these products?
>
> **[0:59](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=59)** I could do something like SELECT * FROM products where productId equals one and then another one where it equals two and three and so on.
>
> **[1:06](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=66)** But that gets time consuming.
>
> **[1:07](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=67)** So instead of doing those calls one at a time like that, we can use an inner join to join the data together that we want from these two tables.
>
> **[1:15](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=75)** So to do that, we can create a query that looks something like this.
>
> **[1:19](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=79)** SELECT * FROM products INNER JOIN products with cart ON cart.productId = products.productId.
>
> **[1:37](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=97)** And if we run this query, you can see that we get details from the products table and the cart table joined together for each of the productIds that are in our cart.
>
> **[1:48](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=108)** Now, at this point, you might have a bit of a glazed look on your face, but don't worry, it took me a while to get my head around joins too.
>
> **[1:54](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=114)** So let's walk through this query kind of a step at a time in detail to make sure we understand what's going on here.
>
> **[2:00](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=120)** So the first thing to note is that joining requires two tables that need to be joined together.
>
> **[2:05](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=125)** So in our query, we've got this products table, which we could call table1.
>
> **[2:09](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=129)** And the order of this doesn't really matter for inner joins, but for other types of joins, it can matter which one you do first.
>
> **[2:16](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=136)** But here we have table one or the products, and then cart, which is our table two.
>
> **[2:22](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=142)** So with that, we've defined we want to join these two tables in our join, but in order to actually do it, we have to have some kind of shared data between those two tables.
>
> **[2:33](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=153)** So in our example, both of these tables share a productId column.
>
> **[2:38](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=158)** So what we're saying in this query is look at all the values in the productId column of the cart table.
>
> **[2:44](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=164)** And for each of them, if you find a matching value in the productId column of the products table, select all the values, SELECT * FROM that row in both of those tables and return it.
>
> **[2:55](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=175)** So as you can see here, we actually get some duplicate data in the response.
>
> **[2:59](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=179)** We have productId and productId because we're getting the data from both of those tables and returning all of it.
>
> **[3:07](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=187)** So hopefully this is starting to come together for you a bit.
>
> **[3:09](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=189)** But in order to cement it in your mind, pause this video for a second and see if you can create a join between the users and the cart tables that gives you the first name of each user that has items in the cart.
>
> **[3:20](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=200)** (lively music) I hope you paused the video and challenged yourself to try that out on your own.
>
> **[3:28](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=208)** It really is one of the best ways to learn, but in case you did get stuck on it, let's take a quick look at how we can do it.
>
> **[3:34](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=214)** So let's start with what we need to select, which according to the question here is we want to get the first name of each user.
>
> **[3:42](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=222)** So we'll say SELECT firstName, and we're going to select it FROM the users table, joined with, and we can just do JOIN, we don't need to do INNER JOIN.
>
> **[3:56](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=236)** If you don't specify, it will assume you mean an inner join.
>
> **[3:59](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=239)** And we're going to join it with the cart table because it says we want to create a join between the users and the cart table.
>
> **[4:06](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=246)** And we're going to do that join on a common column between those tables.
>
> **[4:11](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=251)** So if we look at the cart table schema, we have userId and productId.
>
> **[4:17](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=257)** And in the users table, we also have a userId.
>
> **[4:22](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=262)** So the common column between them is the userId.
>
> **[4:25](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=265)** So we'll do users.userId = cart.userId.
>
> **[4:35](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=275)** And if we run this, you can see that we get the first name of each user that has items in the cart.
>
> **[4:41](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=281)** Now, there's only one user with items in the cart, so it's the same first name for everybody, and it's repeated for each item in the cart.
>
> **[4:47](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=287)** So if we wanted to only get the one, we can add this DISTINCT keyword and rerun it.
>
> **[4:57](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=297)** And now we get back only the distinct or unique results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (10), data (6), [[SQL]] (3)
> **Code Identifiers:** productid (9), userid (5), productids (1), firstname (1)
> **Env Vars:** select (5), join (4), sql (3), inner (3), distinct (1)
> **SQL:** select (5), inner join (3), join (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### Working through an example
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=0)** - [Instructor] In the last video, you saw how to query data from multiple tables using inner joins.
>
> **[0:04](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=4)** And as you might guess, there's also something called an outer join.
>
> **[0:08](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=8)** In fact, there are actually three different kinds of outer joins.
>
> **[0:11](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=11)** The left join, right join, and a full join.
>
> **[0:15](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=15)** When using these, the outer part is optional, just like the inner parts optional with the inner join.
>
> **[0:20](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=20)** Now the reality is you usually won't need to use outer joins, and in fact, SQLite hasn't even implemented the right and full joins, so you can't use them in here anyways.
>
> **[0:29](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=29)** For the sake of completeness though, it's worth knowing that there are these kinds of joins.
>
> **[0:33](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=33)** If you want to visualize how they work, W3 Schools has a good set of Venn diagrams here that explain how these different joins work.
>
> **[0:42](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=42)** Now let's take a minute to pull together everything that we've learned so far.
>
> **[0:46](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=46)** We've added join to the set of clauses that we know.
>
> **[0:48](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=48)** So let's see if we can combine everything together into a query that uses all these different clauses that we've learned so far.
>
> **[0:54](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=54)** So what I want you to do is try to create a single query that will give you the price, description, and category name of all products that have a price greater than $10, and ensure that that result is sorted by price.
>
> **[1:07](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=67)** Now that's a pretty complex set of things to do, so hopefully you are able to pause this video and put together a query like that.
>
> **[1:13](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=73)** But let's take a look at what that query would look like.
>
> **[1:16](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=76)** So let's start with what we want.
>
> **[1:19](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=79)** So we want a query that will give us the price, description, and category name.
>
> **[1:24](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=84)** So let's do select P dot price.
>
> **[1:29](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=89)** And we're going to create something called an alias for the products table, and we'll call it P and P dot description.
>
> **[1:38](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=98)** And we also want the category name.
>
> **[1:42](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=102)** So we'll say C dot name.
>
> **[1:44](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=104)** And we're going to create an alias for the category table called C.
>
> **[1:47](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=107)** And this just simplifies the typing that we have to do, and we want to select those from both the products table and the category table.
>
> **[1:56](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=116)** So we're going to say from products and we'll say as P.
>
> **[2:01](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=121)** So this is where that P is coming from.
>
> **[2:02](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=122)** We're just basically creating an alias for the products table.
>
> **[2:06](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=126)** And then we're going to join that with the categories table, and we'll give that one an alias of C.
>
> **[2:16](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=136)** And then we need some column that joins these two tables together.
>
> **[2:21](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=141)** So if we look at the products, we've got several columns here and at the categories.
>
> **[2:27](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=147)** And the shared column between them is this category ID column.
>
> **[2:32](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=152)** So we'll join them on P dot category ID equal to C dot category ID.
>
> **[2:44](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=164)** So far so good.
>
> **[2:45](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=165)** But we have some additional things that this query wants to do.
>
> **[2:49](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=169)** So this'll give us the price description and category name, but we want it only where the price is greater than $10.
>
> **[2:56](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=176)** So let's create another clause here where P dot price is greater than 10.
>
> **[3:05](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=185)** And we also want to ensure that the result is sorted by price.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=190)** So let's do an order by P dot price and let's try running this query and we get back all the information that we were looking for.
>
> **[3:23](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=203)** So now take a minute and look at that query.
>
> **[3:25](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=205)** That's a pretty big complex query, but with all the info under your belt so far in this course, you should be able to create some pretty interesting views of any database tables that you want to look at.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (6), data (1), database (1)
> **Cross-References:** in the last (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 3. Using SQL for Data Generation

[↑ Back to Table of Contents](#table-of-contents)

#### Create new entries in a table
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=0)** - [Instructor] So far, we've been looking at ways to see and analyze data to table.
>
> **[0:05](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=5)** But now it's time to switch gears and take a look at how we can generate data.
>
> **[0:08](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=8)** So if you're testing, you're often going to want to create certain scenarios to see what happens.
>
> **[0:13](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=13)** Maybe you want a certain kind of data to be there, or maybe you just want to have a whole bunch of data in place so that you can test maybe lots of users or lots of products or something else, some other kind of load test in your system.
>
> **[0:25](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=25)** There's a lot of reasons that you might want to create data in a table.
>
> **[0:28](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=28)** But before we go further, I just want to give you a quick word of warning, make sure that when you create data like this, you're not modifying things in a production environment or in another place where those changes can have adverse effects.
>
> **[0:40](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=40)** So with that warning firmly in your mind, let's take a look at a few examples of how we create data in a table.
>
> **[0:46](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=46)** So for this example, let's look at doing it at trying to create a hundred users in the system so that we can test maybe some kind of load or something.
>
> **[0:55](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=55)** So I've got the sample site open here and you can see this is the form that we need to fill out, to create a user.
>
> **[1:00](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=60)** Imagine filling out all the data in here a hundred times, not fun.
>
> **[1:05](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=65)** So let's see if we can do it a little more efficiently with SQL.
>
> **[1:08](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=68)** Now, before we go creating a hundred users, let's look at creating one user.
>
> **[1:12](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=72)** And before we do that, let's just take a quick look at our table itself.
>
> **[1:16](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=76)** So here's the data in our table.
>
> **[1:18](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=78)** We need all these different fields to be entered.
>
> **[1:20](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=80)** And we obviously can't do that with a select statement.
>
> **[1:24](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=84)** So let's use instead and insert query.
>
> **[1:29](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=89)** So we will insert.
>
> **[1:30](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=90)** And instead of from, we're going to use into, and then we can specify the table again.
>
> **[1:36](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=96)** So users, and now we need to specify the column names that we want to insert data into.
>
> **[1:44](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=104)** So I've just pasted in here, the different column names that we have.
>
> **[1:48](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=108)** And in this case, since we're inserting all the column names, I could just leave it blank, take the lazy route, but if we only want it to insert certain columns, we would need to specify the columns.
>
> **[1:59](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=119)** So we've got our column names and now we need to specify the values that we insert into those columns.
>
> **[2:05](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=125)** So for the values, we're going to specify a value for each of these.
>
> **[2:09](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=129)** So we're going to have user ID three and then a password email, first name, last name, all those different things.
>
> **[2:15](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=135)** And once again, to type all of that out would probably not be the most exciting thing to watch.
>
> **[2:21](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=141)** So I will just give you paste it in here.
>
> **[2:25](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=145)** And we've got here, the user ID, the password, we've got an email address.
>
> **[2:30](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=150)** First name Abe, last name Lincoln, address, zip code city, state, country, and phone number.
>
> **[2:37](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=157)** So let's run this and then let's run this select query and you can see that we've added that new user to the database.
>
> **[2:46](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=166)** But now imagine if I was actually typing that out in front of you, would have taken a little while and to do that a hundred times is almost as onerous as doing it through the website itself.
>
> **[2:58](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=178)** So is there a better way to do it?
>
> **[3:00](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=180)** Well, yes, there certainly is.
>
> **[3:02](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=182)** And it's this service called mockaroo.
>
> **[3:05](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=185)** Mockaroo is a great little service where we can generate some data quickly and easily for mock data like this.
>
> **[3:13](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=193)** So I've filled this out already with the different column names.
>
> **[3:16](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=196)** You can see a user ID, password, first name, last name, etc.
>
> **[3:19](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=199)** All of these field names match the field names that we have in our database.
>
> **[3:24](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=204)** So if you look at the field names here, they match all the field names here, and then I've selected the data type for each one to have.
>
> **[3:32](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=212)** And that's the nice thing about this mockaroo service.
>
> **[3:34](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=214)** It lets you select data types to match your field names.
>
> **[3:39](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=219)** So for example, I have country here and I can select the country type and it will generate a random country from the list of countries that it has.
>
> **[3:47](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=227)** So we want a hundred of them.
>
> **[3:49](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=229)** So let's say we want a hundred rows.
>
> **[3:51](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=231)** Let's specify it as SQL.
>
> **[3:54](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=234)** And then the table name, we're going to call users, since that is the name of our table.
>
> **[3:59](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=239)** And we can go ahead and download the data.
>
> **[4:04](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=244)** And then in our editor, let's open a new tab and let's open that downloaded file, which will put all the queries into here.
>
> **[4:16](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=256)** We'll say Control A to select them all and then run that query.
>
> **[4:21](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=261)** And I made a mistake here.
>
> **[4:23](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=263)** You can see it has no column named address.
>
> **[4:25](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=265)** So if we go back here, that's because the name of our column in the database, if we take a look at the column names, you can see that this one is address one.
>
> **[4:36](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=276)** So we updated in here and we still have a hundred SQL.
>
> **[4:39](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=279)** So let's download that data again.
>
> **[4:44](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=284)** And I will delete that and reopen the query, Control A and run it.
>
> **[4:53](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=293)** Now it's saying here that the unique constraint failed on users.user ID.
>
> **[4:58](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=298)** And that's because these first three users here have user ID one, two and three, and those users are already in the system.
>
> **[5:06](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=306)** So let's just get rid of those three columns for now and let's run this query again.
>
> **[5:17](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=317)** And now you can see that it ran added 97 new users.
>
> **[5:20](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=320)** We already had three.
>
> **[5:21](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=321)** So now we have our hundred users in the system.
>
> **[5:24](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=324)** And if we go back to here and run this again, we can see that we have a hundred users with a bunch of random data in our system.
>
> **[5:32](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=332)** Now that was a lot easier than putting a hundred users in the UI. Wasn't it?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (17), [[SQL]] (3), database (3), [[Microsoft Products|Products]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** sql (3)
> **Analogies:** imagine (2), for example (1)
> **Warnings:** warning (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** select the (1)
> **Exercise Files:** download the (1)

#### Update existing entries in a table
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=0)** - [Instructor] You know how to add new entries to a table, but what if you wanted to modify existing entries?
>
> **[0:05](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=5)** Let's say for example, that you wanted to see what would happen if the name of one of your items was really long.
>
> **[0:10](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=10)** So let's modify the name of this second item here and see what happens if we make it have a really long name, instead of just saying women's t-shirt.
>
> **[0:18](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=18)** In order to update existing entries, we use the aptly named update command.
>
> **[0:24](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=24)** So update needs to know what table to update.
>
> **[0:28](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=28)** So we'll say products, and now we can set values.
>
> **[0:33](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=33)** So we'll use the set keyword to do that, and we only want to do it for the column name.
>
> **[0:40](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=40)** We want to change the name of our product, and let's just give it a name of something like very, very long name to see what happens with long names, something like that.
>
> **[0:57](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=57)** Now we don't want that to change for all of the products in our table, so let's tell it that we want it to do it for the one where the product ID is equal to two.
>
> **[1:09](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=69)** So now let's run this query, and then we can refresh the page and see what happens.
>
> **[1:17](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=77)** And it nicely wraps the text for us, and that looks nice.
>
> **[1:19](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=79)** So that was a nice test.
>
> **[1:21](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=81)** Good way to validate that hey, if we did have a nice long name in here, we'd probably be able to handle it okay.
>
> **[1:27](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=87)** But now let's take a look at doing this across multiple rows in a table at once.
>
> **[1:31](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=91)** So first, set up the user table to have mock data in it, and if you still have it set up from last video, that's great, you can use that.
>
> **[1:38](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=98)** Or if you're like me and you ran the initialization script, again, you can use this ad_100_users.sql script in your exercise files to just create 100 users, and I'll just do ctrl + A and run that query to add 98 more users.
>
> **[1:59](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=119)** So now I have 100 users in my table.
>
> **[2:02](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=122)** Now let's take a look at that table for a second.
>
> **[2:06](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=126)** So select star from users,
>
> **[2:15](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=135)** and this is fine, but there's a problem with this data.
>
> **[2:18](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=138)** We've got this password field, and you can see these first two passwords, it's a hash of the password, but it's the same hash for both of them because it's the same password.
>
> **[2:27](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=147)** They both have the password 12345.
>
> **[2:29](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=149)** The problem is with these passwords, I don't know what they are, so I don't know how I can log into the system, because it's going to be looking for a hash of these.
>
> **[2:37](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=157)** So I can't use these passwords to get into the system.
>
> **[2:41](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=161)** So what I want to do is use this password here and copy it to all these users so that I can use any of these users when I'm logging in.
>
> **[2:50](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=170)** So we can do that very similarly to the way that we did it before.
>
> **[2:55](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=175)** We can call update users, and we'll set the password field in this case to equal this.
>
> **[3:07](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=187)** So I'll just double-click on that so I can edit it and copy it and then paste it here.
>
> **[3:13](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=193)** And now we're just going to do this, and run it like this.
>
> **[3:19](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=199)** So this will affect all the rows in the table.
>
> **[3:25](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=205)** So if we do select star from users again,
>
> **[3:34](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=214)** we can see that they now all have the same password.
>
> **[3:38](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=218)** Now, there's something you might not have noticed or registered, but when we did this, there's an important thing to note here about the update command.
>
> **[3:47](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=227)** When we only wanted to update one row, we used the where clause, so limit it to that one row.
>
> **[3:53](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=233)** But in the case where we wanted to update all of the rows in the table, we didn't include the where clause.
>
> **[3:58](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=238)** We just said update this table, set this column to equal this value, and that updated every single row in our table.
>
> **[4:05](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=245)** So just note this, this is an important thing, because usually you're not going to want to update all the rows in a table.
>
> **[4:12](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=252)** But if you forget to include a where clause when you're doing an update, that's exactly what will happen.
>
> **[4:17](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=257)** So in that case, you may end up overwriting a whole bunch of data that you didn't mean to overwrite.
>
> **[4:23](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=263)** So be really careful with this, 'cause it can be easy to forget the where clause, and it can cause you some pretty serious headaches if it messes up every row in your table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), [[Microsoft Products|Products]] (2), product (2), [[SQL]] (1)
> **Prerequisites:** set up (2), initialization (1)
> **File Paths:** ad_100_users.sql (1)
> **CLI Commands:** make (1)
> **UI Navigation:** double-click (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)

#### Deleting data from a table
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=0)** - [Instructor] Sometimes testers do nasty things to an application.
>
> **[0:03](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=3)** We can't help it, right?
>
> **[0:05](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=5)** It's our job to try and break things.
>
> **[0:07](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=7)** In this video, I want to show you how to, drum roll please, delete things from a database.
>
> **[0:14](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=14)** It should go without saying, but I'm going to say it anyways, when you're deleting things, you're performing a destructive action.
>
> **[0:20](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=20)** So please be careful with what you do.
>
> **[0:23](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=23)** Now, I'm going to put together an imaginary scenario for you.
>
> **[0:26](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=26)** Imagine that our database, it hooks up to another process and this process can remove products.
>
> **[0:32](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=32)** So this is some kind of other part of the business, and it can remove products that are no longer available for the site.
>
> **[0:37](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=37)** What we want to test is to see what will happen if the product is removed while someone already has that product in their cart.
>
> **[0:44](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=44)** So let's try that scenario out.
>
> **[0:46](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=46)** First of all, we'll add a product to our cart and then we'll go check the database, so we'll say select star from cart, and we can see that we have that product in our cart.
>
> **[1:01](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=61)** So that's all good, and now, we want to delete this item from the database.
>
> **[1:06](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=66)** So we want to remove it from the products table to see what will happen.
>
> **[1:10](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=70)** So we can do that like this.
>
> **[1:11](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=71)** We call delete from products, and now, we don't want to delete all of the rows in the products table, and so, just like with an update statement, we need to be very careful here that we put a where clause in, otherwise, we'll just delete the entire table, delete every single row in the table.
>
> **[1:30](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=90)** So let's say where the product ID equals one, since that's the product ID that we have in our cart, right?
>
> **[1:40](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=100)** We have product ID one in our cart.
>
> **[1:42](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=102)** So let's try to delete that item that's in the cart and see what happens.
>
> **[1:47](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=107)** So when we do this, we get an error that says foreign key constraint failed.
>
> **[1:52](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=112)** So what this boils down to here is that the product ID of the row that we're trying to delete is being used by another table.
>
> **[2:00](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=120)** In this case, the cart's table is using that product ID.
>
> **[2:05](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=125)** So this is some useful information for us.
>
> **[2:07](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=127)** It looks like we don't have to worry too much about this scenario on our end, but we might want to feed back the info to the people whose business process wants to be able to do this, to remove data, that there might be some scenarios where it wouldn't work very well, and they may need to take that into account, maybe clean up the carts before they delete stuff from the products table.
>
> **[2:26](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=146)** So let's take a look, though, at an example, let's see if we can actually delete something.
>
> **[2:30](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=150)** So let's look at an example where that will actually work.
>
> **[2:33](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=153)** So let's clear the cart out.
>
> **[2:35](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=155)** So we can do, once again, delete from cart, and this time, we want to just empty out the cart.
>
> **[2:46](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=166)** So we can just do this.
>
> **[2:47](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=167)** If we want to totally empty the cart table, we can run this query and then we can check, so we'll say select star from cart, and we can verify that indeed the cart table is empty.
>
> **[3:07](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=187)** So now, you've got some destructive power under your tool belt.
>
> **[3:11](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=191)** You can delete items from a table.
>
> **[3:13](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=193)** Of course, do so in a way that makes sense and be careful when you're doing this, you don't want to mess up your data, but there may be situations as a test where you want to delete something from a table to see what happens, and now you know how to do that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (9), [[Microsoft Products|Products]] (6), database (4), business (2), data (2)
> **Analogies:** imagine (1), just like (1)
> **Warnings:** be careful (2)
> **Speakers:** - [instructor] (1)

#### Challenge: Data generation
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980&t=0)** - [Instructor] We've been learning a lot about manipulating data with SQL.
>
> **[0:08](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980&t=8)** And hopefully you've been able to try these things out at home and maybe even been exploring beyond the things that I've explicitly shown you.
>
> **[0:15](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980&t=15)** But I want to pause now and take a minute to give you a chance to cement what you're learning through a challenge that will push you.
>
> **[0:21](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980&t=21)** So what I want you to do is to generate some test data for this website.
>
> **[0:25](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980&t=25)** But before we do that, let's first make sure that everything's reset back to its base.
>
> **[0:30](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980&t=30)** So I've shown you this once already in this course but I'll show you again just to make sure that you're able to do this.
>
> **[0:35](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980&t=35)** So what we want to do is have a new SQL editor.
>
> **[0:38](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980&t=38)** So Tool, Open SQL editor.
>
> **[0:41](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980&t=41)** And then let's open the database initialization script.
>
> **[0:45](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980&t=45)** And do Control-A to select it all.
>
> **[0:48](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980&t=48)** And then run that query to make sure that everything's reset back to its baseline.
>
> **[0:54](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980&t=54)** So now that you've done that, I have two challenges that I want you to try out.
>
> **[0:58](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980&t=58)** I want you to see if you can duplicate the rows in the product table so that there's twice as many items available in our store on our little application here.
>
> **[1:07](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980&t=67)** So that's the first challenge.
>
> **[1:08](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980&t=68)** Duplicate the rows in the product table.
>
> **[1:11](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980&t=71)** And then the second challenge is to add a new category to the categories table and call that category testers.
>
> **[1:18](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980&t=78)** And then modify the products table so that all the products that have testers in their name get associated with that new category that you just created.
>
> **[1:28](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980&t=88)** So that's the challenges that I have for you.
>
> **[1:30](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980&t=90)** Try that out. Use all the queries that we've talked about.
>
> **[1:35](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980&t=95)** You should be able to do it with those queries that we've learned so far.
>
> **[1:39](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980&t=99)** You should be able to solve both of these challenges.
>
> **[1:41](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980&t=101)** So give it a shot and see what you can come up with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), data (2), product (2), [[Microsoft Products|Products]] (2), database (1)
> **CLI Commands:** make (3)
> **Env Vars:** sql (3)
> **UI Navigation:** open the (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Data generation
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=0)** - [Narrator] In the last video, I gave you a challenge to try and generate some data in a few different ways.
>
> **[0:10](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=10)** I hope you tried those challenges out on your own and were able to create the necessary queries.
>
> **[0:14](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=14)** In this video, I'll show you how I went about solving those challenges, so you can see what the solutions would look like.
>
> **[0:19](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=19)** So the first challenge was to duplicate the rows in the product table, so that there are twice as many items available in our store.
>
> **[0:25](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=25)** So we know we want to duplicate, so we're going to need to add more rows to the table, so we're going to need to use an insert into, and we know we're going to need insert into the products table, so we'll include that.
>
> **[0:38](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=38)** And now we don't want to just set each row one at a time manually, so we don't want to do this set manual workflow.
>
> **[0:45](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=45)** Instead, what we will do is we will select *FROM products.
>
> **[0:51](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=51)** And now this is a bit tricky, so hopefully you were able to figure this out, but you can just select all the items from the products table, this will get all the items that are in the products table, and then insert all those items back into the products table again.
>
> **[1:06](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=66)** So let's run this and see what happens.
>
> **[1:10](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=70)** Now that's interesting, we get a unique constraint failed on the product ID.
>
> **[1:14](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=74)** So the product ID column needs to be unique, and the problem is, we're selecting * from products here, we're selecting all the items, including the product ID, and then we're trying to insert those back into the products table.
>
> **[1:27](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=87)** But in this case, the product IDs are, you know, one to 14 and we're inserting all those same product IDs in, so they're not unique.
>
> **[1:36](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=96)** So how can we get around this?
>
> **[1:38](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=98)** Well, instead of doing select star here, we can put in all of the rows, so I've just pasted them in here, when you type in these rows, product ID, the name, the price, the description, the image of stock in the category ID.
>
> **[1:52](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=112)** So these are all the column names in our products table, and this is right now the same as *, right?
>
> **[2:00](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=120)** * just says, get all of these product names.
>
> **[2:03](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=123)** So now we've manually typed them all out, but what we can do here, is instead of just straight up copying the product ID, we can add 14 to it.
>
> **[2:13](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=133)** And what that does, is says, select all of these product IDs, but instead of pasting product ID equals one, one, two, three, four and so on into here, keep all the other values the same, but paste product ID equals one plus 14.
>
> **[2:27](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=147)** So paste 15, 16, 17, and so on into here.
>
> **[2:31](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=151)** So let's run that query and see what happens.
>
> **[2:34](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=154)** And you can see that it ran and 14 rows were affected.
>
> **[2:38](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=158)** And if we refresh our webpage here, and scroll down, you can see that we have in fact duplicated the data.
>
> **[2:46](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=166)** So we've successfully completed that challenge.
>
> **[2:49](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=169)** Now the next challenge was to add a new category to the categories table called testers, and then to modify the products table, so all products with tester in the name, will belong to that category.
>
> **[2:59](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=179)** So we can add a new category, easily enough, we can use our insert into query, and we'll insert it into the categories table.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=190)** And the values that we will use for this, are five, that's the next available number for the index of this table.
>
> **[3:21](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=201)** And we'll call this category testers, and now we can run this query and it runs just fine as we would expected and it has added that category to the table.
>
> **[3:32](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=212)** But now, we need to update the products table to use that category.
>
> **[3:37](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=217)** So, we will use the update query, and we're going to update the products table, and we're going to set the category ID to be five, so this is the new category ID, the testers category that we've created.
>
> **[3:53](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=233)** And we want to do that, wherever the name field has, so we'll use this like operator, has the word tester in it, and we need to have that be a wild card.
>
> **[4:09](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=249)** So if it's anywhere, we don't want to just find where it is exactly tester, but anywhere that starts with anything includes the word tester.
>
> **[4:18](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=258)** So percent tester percent, and let's run that query.
>
> **[4:23](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=263)** And now if we go back to our web page and refresh it, you can see that it's added a new category here, the testers category, or we can click on that, and it returns us all these tester t-shirts and of course they're duplicated because we previously duplicated the data in our system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (12), [[Microsoft Products|Products]] (12), data (3), next (2), [[Microsoft Word|Word]] (2)
> **Cross-References:** in the last (1), go back to (1)
> **UI Navigation:** scroll down (1), click on (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Testing SQL Queries

[↑ Back to Table of Contents](#table-of-contents)

#### Transactions
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=1)** - [Instructor] One of the things that are pretty common in SQL are transactions.
>
> **[0:04](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=4)** Let's take a quick look at how they work.
>
> **[0:06](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=6)** So to start a transaction, you just need to type BEGIN TRANSACTION and then a semicolon.
>
> **[0:14](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=14)** And then once we've begun a transaction, we can start typing in the queries that are going to be part of that transaction, just like we normally would.
>
> **[0:21](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=21)** So we can say here INSERT INTO cart VALUES and then give it some values, so let's say user one is going to have product ID two and also user one is going to have product ID three.
>
> **[0:39](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=39)** And then, we can do a SELECT * FROM cart.
>
> **[0:48](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=48)** And let's go ahead and run this whole thing.
>
> **[0:51](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=51)** So we're going to start the transaction and then we're going to do these queries in that transaction.
>
> **[0:56](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=56)** So we run that and we get back what we kind of expect.
>
> **[0:58](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=58)** We've added these values into the cart table and when we select from the cart table, we see those values.
>
> **[1:03](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=63)** Now, at this point, it just kind of looks like a normal SQL interaction, right?
>
> **[1:07](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=67)** But there's something subtle and pretty powerful going on here.
>
> **[1:11](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=71)** Let's take a look at the cart for user one.
>
> **[1:13](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=73)** So we're logged in here as user one.
>
> **[1:15](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=75)** And if we go look at the cart, there's nothing in the cart.
>
> **[1:19](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=79)** But why is that?
>
> **[1:20](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=80)** Why are those changes that we made not showing up here?
>
> **[1:23](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=83)** Back here, we can see we did a select on the cart table and those products are in the cart but they're not showing up for us in the UI.
>
> **[1:31](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=91)** Well, it's because these changes were made inside a transaction.
>
> **[1:34](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=94)** So a transaction encapsulates all the changes within it.
>
> **[1:38](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=98)** And those changes aren't visible to other users of the database.
>
> **[1:42](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=102)** So when we look at the database as a user on the site, we can't see the changes that are here in this transaction.
>
> **[1:49](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=109)** So now that we've finished a transaction, we have two choices.
>
> **[1:52](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=112)** We can either roll it back.
>
> **[1:55](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=115)** So we can call ROLLBACK, and that will basically undo these changes and they will never be visible to other users.
>
> **[2:02](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=122)** Or the other thing we could do instead is actually go ahead and commit those changes.
>
> **[2:07](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=127)** So let's run this.
>
> **[2:09](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=129)** Let's commit the transaction.
>
> **[2:11](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=131)** And now if we go back here and refresh the page, we can see that those actions are now available, the results of those queries are available to other users.
>
> **[2:21](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=141)** So that transaction has been committed to the database.
>
> **[2:24](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=144)** So let's just take a minute more to think about transactions.
>
> **[2:28](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=148)** They're atomic, which just means that the changes that you do in a transaction are applied all at the same time.
>
> **[2:35](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=155)** So if you have changes to a few different tables, and in this case, obviously, we only have one, but if you're making changes to different tables, and it's important that these changes all happen at the same time.
>
> **[2:46](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=166)** You might use a transaction.
>
> **[2:47](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=167)** So let's kind of look at an example of how that would work.
>
> **[2:51](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=171)** So when we add an item to our cart, we are supposed to reduce that in the products table.
>
> **[2:59](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=179)** So let's say we want to insert into cart values.
>
> **[3:03](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=183)** Let's do 1, 4 and let's update then inside this transaction.
>
> **[3:12](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=192)** We'll update the products table.
>
> **[3:15](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=195)** And we're going to set the stock column to equal stock minus one.
>
> **[3:22](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=202)** And we're going to do that where the productId is equal to four, since that's the one that we've added to our cart here.
>
> **[3:32](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=212)** So when we make this change to the carts table, we want to also update the products table but we want these things to both happen at the same time.
>
> **[3:42](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=222)** Because what if maybe we were updating, doing this call here, we're updating the stock table but when we did stock minus one, it turns out that we're not allowed to have values in that column that are less than zero.
>
> **[3:55](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=235)** And so maybe this caused a negative number to happen.
>
> **[3:58](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=238)** And this query failed.
>
> **[4:00](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=240)** But in that case, and what we would have is our cart would have this item in it but it shouldn't because that item's actually not valid because it's out of stock.
>
> **[4:09](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=249)** So by doing this in this transaction, we can encapsulate both of those into one thing and so if this one fails, we can then roll back the transaction and not do either of these and make sure that our data stays consistent.
>
> **[4:22](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=262)** So you can see how this can be beneficial, how it's helpful in this way but transactions are also useful if you want to try out something on a database without actually applying those changes.
>
> **[4:32](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=272)** So in this case here, we're modifying the database.
>
> **[4:36](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=276)** But if we roll back those changes, they won't actually be applied.
>
> **[4:40](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=280)** So this can be a useful way if you want to test out some queries that you aren't sure about and then just try some stuff and then undo them by doing a rollback if they turn out to be what you didn't expect.
>
> **[4:51](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=291)** So let's run this query for now.
>
> **[4:54](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=294)** And there's one thing I want you to note here.
>
> **[4:58](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=298)** And that is that this transaction now it's active.
>
> **[5:00](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=300)** I haven't yet committed it.
>
> **[5:02](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=302)** We didn't run the commit.
>
> **[5:03](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=303)** We didn't do a rollback.
>
> **[5:04](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=304)** So this transaction is active right now.
>
> **[5:07](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=307)** And when a transaction is active, it can put some locks on your table.
>
> **[5:10](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=310)** So this is something to be aware of.
>
> **[5:11](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=311)** Transactions are powerful and helpful but they can sometimes create locks on some columns or tables.
>
> **[5:19](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=319)** So to see this, let's think about what we did here.
>
> **[5:22](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=322)** In this transaction, we added this item to our cart and we updated the products table.
>
> **[5:28](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=328)** Now, that transaction isn't yet live, so if we refresh this, it doesn't show here.
>
> **[5:33](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=333)** We still only have those two items in our cart but now let's see what happens if we remove this item from our cart.
>
> **[5:39](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=339)** When we do that, it's kind of spinning away and eventually, it gets here but if we go back to here, this item hasn't been removed and that's 'cause the query to remove it actually just timed out 'cause our transaction here has a lock on a certain table.
>
> **[5:57](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=357)** So if we rollback this transaction, and try removing this again, it works properly now and our cart has that item removed from it.
>
> **[6:09](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=369)** So there are different ways that you can lock tables with transactions but just be aware that although transactions are a pretty safe way to play around with the database, if there's other users of the database, you want to be aware that what you're doing might be creating locks and so don't leave long-running transactions going on.
>
> **[6:26](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=386)** Transactions, though, are a really powerful tool in a SQL tester's tool belt.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (7), [[Microsoft Products|Products]] (5), [[SQL]] (3), product (2), data (1)
> **Env Vars:** sql (3), begin (1), transaction (1), insert (1), into (1)
> **Warnings:** be aware (3)
> **CLI Commands:** make (2)
> **SQL:** insert into (1), select (1)
> **Code Identifiers:** productid (1)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)

#### Field constrains
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=0)** - [Instructor] Let's take a look at field constraints and how they can contribute to quality.
>
> **[0:05](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=5)** So first of all, what are field constraints?
>
> **[0:08](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=8)** They're basically just rules that constrain what you're allowed to do on a given column or sometimes even on the entire table.
>
> **[0:15](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=15)** Now, there's a number of different kinds of constraints that can be applied, so let's kind of take a look at it in SQLite to get a bit of a feeling for how it works.
>
> **[0:23](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=23)** So if we double click on the products table here, it will bring up some of the different kinds of field constraints that can be applied.
>
> **[0:30](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=30)** So, this table here, it's got a primary key constraint applied to the product ID column.
>
> **[0:35](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=35)** And it has a foreign key constraint applied to the category ID column.
>
> **[0:41](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=41)** We can also apply some of these other ones.
>
> **[0:42](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=42)** Unique, check, so on and so forth.
>
> **[0:45](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=45)** But what do these all mean?
>
> **[0:47](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=47)** Well, let's go through them one at a time and see if we can understand them.
>
> **[0:51](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=51)** I'm going to start at the right and work to the left.
>
> **[0:54](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=54)** So the default value here, I think that's pretty self evident.
>
> **[0:58](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=58)** It's just the value that the column will take if no value is explicitly specified.
>
> **[1:02](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=62)** Null is a very common default value but you could set it to be something else if you wanted to.
>
> **[1:07](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=67)** And I'm going to kind of skip over the collate constraint.
>
> **[1:10](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=70)** It's a way to specify how to do comparisons between columns but we won't worry about it too much in this course.
>
> **[1:16](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=76)** So the next one here is not null.
>
> **[1:19](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=79)** So let's modify the name field here.
>
> **[1:22](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=82)** I'll double click and let's set it to have the not null constraint.
>
> **[1:29](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=89)** And let's apply that change to our table.
>
> **[1:34](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=94)** And now let's try and see what that actually does.
>
> **[1:38](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=98)** So if we go to an editor tab, let's say update the products table.
>
> **[1:46](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=106)** And let's try to set the name field to equal null which we've just said we have a not null constraint on it.
>
> **[1:54](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=114)** So, let's see what happens.
>
> **[1:55](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=115)** Where the product ID equals one.
>
> **[2:00](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=120)** And let's run that query.
>
> **[2:03](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=123)** Now we can see that we get this error.
>
> **[2:05](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=125)** The not null constraint failed.
>
> **[2:07](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=127)** So, we're not allowed to assign the name, the product's not named column to have a null constraint.
>
> **[2:15](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=135)** And now let's look at this check constraint.
>
> **[2:18](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=138)** So this is a very powerful constraint.
>
> **[2:20](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=140)** It lets us create kind of custom conditions that we can apply to our table.
>
> **[2:24](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=144)** So, for example let's apply it to the price column here.
>
> **[2:29](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=149)** So, we will choose the check condition and then we'll configure it.
>
> **[2:35](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=155)** And in the condition here, let's say our check is that products.price has to be greater than zero.
>
> **[2:43](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=163)** So, we're not allowed to have negative prices in our table.
>
> **[2:48](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=168)** So we'll apply that and we'll save that.
>
> **[2:52](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=172)** Apply it to the table and now we could create a query to kind of validate that constraint.
>
> **[2:59](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=179)** So let's say update products.
>
> **[3:04](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=184)** And let's set the price to be minus one where product ID is equal to one.
>
> **[3:16](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=196)** Now we can see that the check constraint has failed.
>
> **[3:18](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=198)** It will not let us set the price to be a value that is less than zero in this case.
>
> **[3:24](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=204)** Now, the next constraint that we have here is the unique constraint.
>
> **[3:29](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=209)** That one's probably pretty straight forward as well, right?
>
> **[3:31](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=211)** It just let's us force each value in the column to be unique.
>
> **[3:35](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=215)** So if I was to apply it to the image field here.
>
> **[3:39](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=219)** Okay, and apply it here.
>
> **[3:43](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=223)** And now this is interesting because it's not letting me apply this constraint because adding that constraint to the field will make it actually fail because I actually have duplicate images in that field.
>
> **[3:55](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=235)** So, we've kind of verified that check already and we are not able to actually apply this unless we go through and clean up the table.
>
> **[4:02](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=242)** So, we'll just leave that for now.
>
> **[4:03](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=243)** But that should help to illustrate how the unique constraints works.
>
> **[4:09](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=249)** So the next one that we have here is this foreign key constraint.
>
> **[4:12](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=252)** And we can see it's already applied to this category ID field.
>
> **[4:15](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=255)** Now, this is a really interesting constraint.
>
> **[4:18](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=258)** What it means is that the value in this column, in this category ID column, is unique, but it also means that it comes from another table.
>
> **[4:28](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=268)** So that's the foreign in foreign key.
>
> **[4:30](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=270)** It means a table that is foreign to this table.
>
> **[4:33](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=273)** A table that is some other table.
>
> **[4:35](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=275)** So the foreign key here references the category ID but it references it, as you can see down here, from the categories table.
>
> **[4:43](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=283)** So, the foreign key is getting its value from another table.
>
> **[4:48](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=288)** So that means that a couple of things are true.
>
> **[4:50](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=290)** For example, let's take a look at running a query like this.
>
> **[4:54](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=294)** Update categories and let's set the category ID to be six.
>
> **[5:05](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=305)** Where the category ID is currently one.
>
> **[5:11](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=311)** So, let's run this query.
>
> **[5:12](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=312)** So what we're trying to do here is say find the category ID one and change it to be six instead.
>
> **[5:18](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=318)** We want to just change the category ID.
>
> **[5:20](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=320)** When we do that the foreign key constraint fails.
>
> **[5:22](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=322)** Now, there's no constraint on it in the categories table itself.
>
> **[5:28](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=328)** But the problem is that the products table is using that field, that categories.categoryID field as a foreign constraint.
>
> **[5:36](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=336)** And so we can't modify it in the categories table because that will actually affect the products table.
>
> **[5:44](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=344)** Now, let's take a look at another query that is affected by this.
>
> **[5:48](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=348)** So we'll update the products table again and we'll set the category ID to equal six.
>
> **[5:58](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=358)** Where, and remember we haven't created this category ID six.
>
> **[6:02](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=362)** That's not a category ID that is in that table.
>
> **[6:07](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=367)** And we're going to do this where the product ID equals one.
>
> **[6:12](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=372)** And let's run this query and see what happens.
>
> **[6:15](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=375)** And our foreign key constraint fails here as well.
>
> **[6:19](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=379)** And now that's because it's trying to set this category ID to a value, to six, and that value six does not exist in the categories table.
>
> **[6:31](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=391)** So if we were to look at all the items in the categories table from categories.
>
> **[6:45](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=405)** We would see that there's only five categories in our table right now.
>
> **[6:49](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=409)** So, we can't set it to category ID six because that category doesn't exist in the categories table.
>
> **[6:56](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=416)** And let's take a look at the final constraint type here.
>
> **[7:00](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=420)** The primary key.
>
> **[7:01](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=421)** So the primary key constraint is really just a combination of the unique and the not null constraints.
>
> **[7:07](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=427)** So basically, it means we have to have a value and that value has to be a unique value.
>
> **[7:14](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=434)** So we can't set the product ID to be null and we can't set it to be a value that is already in the table.
>
> **[7:22](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=442)** So, we've see all these different kinds of constraints that you can have and you could probably already kind of get an idea for the value of them and quality in testing.
>
> **[7:30](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=450)** Carefully designed constraints can really help reduce the risk of data corruption and invalid data showing up in your system.
>
> **[7:36](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=456)** I've personally seen instances where invalid data was in production tables that required a ton of work to clean up and the bug could have easily been prevented if proper constraints had been applied that prevented that invalid data from getting there in the first place.
>
> **[7:49](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=469)** So, it's worth thinking carefully about what constraints it makes sense to have on a table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (7), product (6), data (4), next (3)
> **Definitions:** is a  (3), means that (2)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** click on (1), go to (1)
> **Analogies:** for example (2)
> **Code Identifiers:** categoryid (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Schema validation
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=0)** - [Instructor] You might have heard about database schemas before, but what are they?
>
> **[0:04](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=4)** Well, essentially it's the layout and structure of all the data in your database.
>
> **[0:08](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=8)** In our sample application, we've got a few different tables and you've probably noticed that they're connected to each other in various ways.
>
> **[0:13](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=13)** The schema is what defines the structure and the connections between all the data in those tables in our database.
>
> **[0:20](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=20)** That's all a little abstract, so let's draw it out.
>
> **[0:22](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=22)** I have a picture here with the four tables in our system.
>
> **[0:26](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=26)** So part of a schema is just laying out these tables with the various columns in them, and that's what I've done here.
>
> **[0:31](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=31)** I've got these four tables.
>
> **[0:32](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=32)** I've got the list of columns that is in each of those tables.
>
> **[0:35](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=35)** But we know that there's some relationships between these tables.
>
> **[0:39](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=39)** So the category ID here is linked to the category ID in the products table.
>
> **[0:46](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=46)** And the cart is also linked to the other table, so the cart user ID is linked to the user's table, and the product ID is linked to the products table as well.
>
> **[1:02](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=62)** So this schema that we have on the screen now is sometimes called an ERD, or an Entity Relationship Diagram, as it defines the relationships between the various entities in the database.
>
> **[1:12](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=72)** Now, it's all fine and dandy to have a nice schema laid out like this, but what's the point of this?
>
> **[1:17](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=77)** How does it help you as a tester?
>
> **[1:20](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=80)** Well, I think there's one pretty obvious benefit to something like this.
>
> **[1:23](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=83)** It lets you see the big picture and understand a bit better what's going on with the data in the system.
>
> **[1:29](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=89)** If you're struggling to figure out how the data's stored in various tables in your system, it could be helpful to draw out a schema like that to get a handle on how everything relates together.
>
> **[1:38](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=98)** The very act of creating something like this can often give you insights into tests that you might want to do, or insights about how the data works in your application.
>
> **[1:47](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=107)** For example, in this schema, you can see that the cart is linked directly to both the products and the user's table, but it's not linked to the categories table.
>
> **[1:57](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=117)** Now, what if you wanted to display information about the category name during checkout?
>
> **[2:01](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=121)** Well, you couldn't go directly from the cart table to the categories table 'cause we don't have a direct link there.
>
> **[2:07](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=127)** So, in other words, we couldn't just use a table join to get that information.
>
> **[2:10](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=130)** Instead, we'd have to go to the products table first, and then find the category ID from the categories table that matches with it, and then use that information to get the category name.
>
> **[2:22](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=142)** Now, there's nothing wrong with doing something like that, but it's something that's worth noting from a testing perspective.
>
> **[2:26](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=146)** If we see information that needs to come from tables that are not directly linked to each other, then we might want to raise that because queries like that could get a bit slower and could add some complexity to what's going on.
>
> **[2:38](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=158)** Now, this is just one simple example on a simple schema, and most of the applications that you work with are going to be more complex than this, but I hope it illustrates some of the things that you can do.
>
> **[2:48](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=168)** It can give you insights into tests that you can run without even interacting with the actual system itself.
>
> **[2:55](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=175)** Sometimes you can just use a model of the system to help you build testing insights.
>
> **[2:59](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=179)** Stuff like this can also help guide, and inform, and expand the testing that you're able to do.
>
> **[3:04](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=184)** So if you feel like you don't really understand what's going on, try making an entity relationship diagram even on a piece of paper, and see what you can figure out by looking at something like that.
>
> **[3:15](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=195)** You might find that this is a helpful tool for testing databases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), database (4), [[Microsoft Products|Products]] (4), application (2), product (1)
> **Analogies:** picture (2), for example (1)
> **CLI Commands:** find (2)
> **Definitions:** in other words (1), is a  (1)
> **Env Vars:** erd (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Security testing
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=0)** - [Instructor] The OWASP Foundation maintains a list of the top 10 web application security risks.
>
> **[0:05](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=5)** This list is known as the OWASP Top 10.
>
> **[0:08](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=8)** And number one on this list is injection.
>
> **[0:11](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=11)** You're probably already well aware of the fact that SQL systems are vulnerable to injection flaws, but how would you go about testing for them?
>
> **[0:18](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=18)** Well, let's take a look at an example of a SQL injection flaw in this application, and see if we can learn anything about testing them.
>
> **[0:25](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=25)** For this example, we're going to use the Shop by Category page, and you can see here in the URL that we have this query parameter.
>
> **[0:32](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=32)** So we've got a question and categoryId equals, and that's what's being used to determine which products to show us.
>
> **[0:39](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=39)** So it queries the categoryId, and where it equals one, it returns us back those products.
>
> **[0:43](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=43)** So in this case, one is men's, and it returns those products for us.
>
> **[0:47](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=47)** So what's happening here is that in the background, this query is getting sent to the SQL server and it's being told here's the categoryId I want you to go get for me.
>
> **[1:00](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=60)** But what if we change this categoryId.
>
> **[1:02](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=62)** Will the query accept some potentially invalid inputs to this?
>
> **[1:08](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=68)** Maybe we could get it to show us some data that we're not allowed to see.
>
> **[1:12](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=72)** So let's try this.
>
> **[1:13](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=73)** Here, we have the categoryId equals one, but let's add something to the end of it.
>
> **[1:18](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=78)** So we could say one OR one equals one, and let's send that.
>
> **[1:25](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=85)** And you can see that we're getting back a bunch of products that are not in the men's category.
>
> **[1:31](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=91)** In fact, we're getting back all of the products, and it looks like it's repeated four times.
>
> **[1:36](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=96)** That's because there's four categories.
>
> **[1:39](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=99)** So what's going on here?
>
> **[1:40](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=100)** Why did we get back this other information by adding that OR one equals one to our query?
>
> **[1:46](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=106)** Well, what we're doing essentially here is saying, get me the products where the categoryId, this expression, categoryId equal one is true, or where the expression one equals one is true.
>
> **[2:00](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=120)** Now the expression one equals one is obviously always true.
>
> **[2:04](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=124)** So essentially what this does, is say, give me back every product that you have in the system.
>
> **[2:10](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=130)** Now, in this particular application, it's not really that big of deal because we don't have any categories or products that are hidden.
>
> **[2:16](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=136)** So in this case, you get a weird set of pictures here, but none of this is private information or hidden information.
>
> **[2:25](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=145)** But imagine if there was a category called upcoming releases or something like that, and we wanted to keep products hidden in that category and not show them to users.
>
> **[2:35](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=155)** In this case, if someone did a query like this, we could maybe potentially be exposing our plans to our competitors or something like that.
>
> **[2:41](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=161)** So let's take a second to dig into this just a little more and understand what's going on in the backend that allows something like this to happen.
>
> **[2:48](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=168)** So, essentially, what the application is doing on the backend is constructing a query that looks something like this, where it's selecting some data.
>
> **[2:55](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=175)** So here, we're selecting a bunch of data from the products and the categories table, and we're doing it where the products categoryId equals the categories categoryId, and, this is the important part, where the categories categoryId is equal to the one that we've specified.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=190)** So this categoryId here corresponds to what we pass in in our query parameter here.
>
> **[3:18](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=198)** So in this case, one OR one equals one.
>
> **[3:21](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=201)** Normally, it would just be a number one, two, three, or four, but that categoryId corresponds to that.
>
> **[3:26](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=206)** And then what is happening is, whatever information we get from the user is put into this query.
>
> **[3:33](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=213)** So, in the case of the OR query that we have, we ended up with a query that said where the categoryId equals the categories categoryId and the categories categorId equals one OR one equals one.
>
> **[3:48](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=228)** And so this flaw can happen because we are putting user entered data into a query without cleaning it up properly.
>
> **[3:58](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=238)** Now, how do you go about finding problems like this?
>
> **[4:02](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=242)** Well, one thing is just to think about the different kinds of user inputs that you can have.
>
> **[4:06](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=246)** So we're used to thinking about user inputs in terms of something like a form or somewhere where users can type data in, but things like this, a query parameter, that's actually a user input.
>
> **[4:17](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=257)** We clicked on that.
>
> **[4:18](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=258)** We are the ones who specified that, we are the ones who can modify it in some sneaky ways, maybe, but we can modify it.
>
> **[4:25](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=265)** And anywhere that users can modify the data that's going into the system, it's a spot where we could potentially have a SQL injection flaw.
>
> **[4:33](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=273)** However, it's very difficult to actually go through and test every single possible way and think of every possible thing and validate.
>
> **[4:42](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=282)** At a black box exploratory level like this, it's difficult to validate whether or not we're vulnerable to SQL injection.
>
> **[4:49](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=289)** I really do need to dig into the code to find these things and make sure that we're using best practices, but as a test or doing the kind of testing that we're talking about in this course, you can still keep your eye out for some of these things.
>
> **[5:02](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=302)** When you see something like this, a query parameter, or even a form or something like that, play around with it a bit, see if it might be vulnerable to something like this.
>
> **[5:11](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=311)** So, obviously, SQL injections are complex topic that could take up a lot more time.
>
> **[5:16](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=316)** In fact, I think it could be an entire course all on its own, but there are many good resources on the internet if you want to dive into it a bit more.
>
> **[5:23](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=323)** Google around, look up some resources.
>
> **[5:25](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=325)** But an example here is PortSwigger.
>
> **[5:28](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=328)** It's got some details about some different types of SQL injection and some examples that walk through how they work and explain a little more about SQL injection.
>
> **[5:39](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=339)** So if you want to dive in, take a look at something like this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (10), [[SQL]] (7), data (6), application (3), [[OWASP]] (2)
> **Code Identifiers:** categoryid (14), categorid (1)
> **Env Vars:** sql (8), owasp (2), url (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** known as (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Performance testing
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=0)** - [Instructor] In the toy application that we've been playing with, performance is measured in milliseconds, but out there in that scary place called production, there can be vast amounts of data and huge databases.
>
> **[0:10](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=10)** I've seen queries where runtime is measured in minutes or even hours when dealing with tables that have millions of rows of data.
>
> **[0:17](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=17)** Obviously, in cases like that, the performance becomes important, but how does one go about testing the performance of a SQL query?
>
> **[0:24](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=24)** In general, this is a pretty specialized field that goes beyond what we can cover in this course, but here are a few tips to consider as you think about this.
>
> **[0:33](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=33)** One thing to consider is the context that you're in.
>
> **[0:35](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=35)** If you're dealing with production databases, you don't want to be causing slowdowns that could affect your clients.
>
> **[0:40](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=40)** Be careful about the context in which you do performance testing.
>
> **[0:44](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=44)** You might remember that earlier in the course, we learned about the order of execution.
>
> **[0:48](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=48)** This is the part where that becomes important.
>
> **[0:50](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=50)** If you're querying a large data set, walking the order of execution in the query can help you see if you're narrowing down your query as you go, or if you're constructing it in a way that will not be performing.
>
> **[1:01](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=61)** On top of that, there are a few other general points to keep in mind, OR statements can tend to be expensive.
>
> **[1:07](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=67)** With an AND the number of things to check is reduced since you can use the reduced data set for the second query.
>
> **[1:13](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=73)** But with an OR, you usually have to look at the entire table twice.
>
> **[1:18](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=78)** For example, I've created a dummy dataset where I duplicated items in the products table a few times to get a slightly bigger table, and I've opened up the SQLite3 command line tool here, and I've enabled the timer.
>
> **[1:32](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=92)** Now, when I run this query here, you can see that it takes around a half a second to do it.
>
> **[1:40](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=100)** But now, let's try running that same query, but using an OR instead of AND.
>
> **[1:49](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=109)** And now you can see that it takes probably about 20% longer to do that.
>
> **[1:55](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=115)** Sometimes, of course, you need to select an OR, but be aware that when you do so there might be performance implications to using it.
>
> **[2:03](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=123)** Another thing to watch out for is wildcard searches.
>
> **[2:07](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=127)** So these are those string searches where you have something like percent, something percent, and those kinds of searches can also be quite slow.
>
> **[2:14](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=134)** So there's something else to be careful of.
>
> **[2:17](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=137)** Now, as I've said before, we can only scratch the surface of performance and databases, but one thing that's worth touching on before we leave this topic is the idea of indexing.
>
> **[2:26](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=146)** You might have heard of this before.
>
> **[2:27](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=147)** It essentially, when index does is creates a way to make a column more easily searchable.
>
> **[2:32](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=152)** So here, I'm on the Database Structure tab and I can create an index.
>
> **[2:38](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=158)** If I choose, say the price column from the products table.
>
> **[2:43](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=163)** I can add an index to it if I wanted to, essentially it would create a mapping in the background.
>
> **[2:50](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=170)** You wouldn't really see it, but the database would create maps of all the prices that were, say in the range of zero to $5.
>
> **[2:56](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=176)** They would map to one key and the prices that were in the range of five to 10 would map to another key and so on.
>
> **[3:01](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=181)** That way, if we have a query that's looking for all the products, that say, have a price of 4.99, it only needs to look through the subset of the data that has prices from zero to $5 instead of looking through the entire dataset.
>
> **[3:13](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=193)** So this is a very common and powerful way to optimize databases, but take a second to think about what risks might come with this as well.
>
> **[3:21](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=201)** Well, if you think about it, there's a cost to creating and maintaining an index on a column.
>
> **[3:26](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=206)** As new items are added to the table, the database engine has to figure out where in the index they fit in and make sure that everything's mapped correctly.
>
> **[3:34](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=214)** This obviously can take a bit of time to do, and so having an index can cause a slight performance hit when you're updating or adding new items to a table.
>
> **[3:41](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=221)** So this means that you want to make sure that your indexes are aligned with the common queries that you use on your table.
>
> **[3:48](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=228)** You'll get improved query speed, but if you almost never create a condition that checks against the price column, you probably don't want to index that column.
>
> **[3:56](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=236)** On the other hand, if you frequently query against that column, you probably do want to index it.
>
> **[4:01](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=241)** There's much more to performance in databases, but hopefully this quick survey has been able to give you a taste of some of the kinds of things to think about as you consider performance concerns in database testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[Databases]] (5), database (4), [[Microsoft Products|Products]] (3), application (1)
> **Warnings:** be careful (2), keep in mind (1), be aware (1), watch out (1)
> **CLI Commands:** make (3), sqlite3 (1)
> **Definitions:** is a  (2), means that (1)
> **Env Vars:** sql (1)
> **Versions:** 4.99 (1)
> **Cross-References:** earlier in (1)
> **Tools:** command line (1)

#### Challenge: Database tests
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=0)** (electronic music)
>
> **[0:05](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=5)** - [Instructor] This course is coming to an end and as I wrap up, I want to give you the chance to pull everything together in a final challenge.
>
> **[0:11](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=11)** This challenge will push you to put into practice many of the things that you've been learning about testing databases and testing with databases.
>
> **[0:18](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=18)** In order to push you a little, I've actually created a new database for this challenge.
>
> **[0:22](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=22)** To use that database, we'll need to disconnect from the e-commerce one that we have and then we can add a database.
>
> **[0:31](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=31)** So we'll go here.
>
> **[0:34](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=34)** In the exercise files for this, you should find a database called challenge.db.
>
> **[0:39](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=39)** Open that database and connect to it.
>
> **[0:44](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=44)** So right click on it and connect to it.
>
> **[0:46](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=46)** You can see the tables that it has here.
>
> **[0:48](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=48)** This instead of an e-commerce system is modeling a school system.
>
> **[0:53](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=53)** Very basic, obviously.
>
> **[0:55](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=55)** But we've got a classes table, which defines what classes are available, the names of the classes that are available.
>
> **[1:03](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=63)** Then we have a users table which defines some information about the users in our system.
>
> **[1:09](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=69)** We have a roles table, which defines what kind of role users can have.
>
> **[1:12](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=72)** So students, teachers, administrators, and so on.
>
> **[1:15](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=75)** And then enrollments, which kind of maps what students are in what course and what role they have in that course.
>
> **[1:22](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=82)** For this challenge, I want you to explore this data set and make sure you understand how it's set up and then try to answer some questions about it.
>
> **[1:29](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=89)** So the first thing that you're going to do is draw out the schema for this database.
>
> **[1:33](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=93)** Make sure you understand how it works.
>
> **[1:35](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=95)** Draw a picture that shows it all. You can do that on paper, you can do that digitally, however you want to.
>
> **[1:40](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=100)** But draw out a schema for this database first.
>
> **[1:42](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=102)** Then once you've done that, try to answer some of these queries, some of these questions that we have.
>
> **[1:48](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=108)** The first one is what are the names of the students enrolled in the math class?
>
> **[1:52](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=112)** The next one is what classes is the person with the username ehorstead2 enrolled in.
>
> **[1:59](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=119)** And then I want you to modify some data.
>
> **[2:04](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=124)** So a couple of challenges just around modifying some data.
>
> **[2:07](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=127)** First of all, use a transaction to create a new class and enroll a teacher and two students in that class, and then check the names of the students that have been enrolled before committing that transaction.
>
> **[2:17](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=137)** So a user transaction, do all this stuff in one transaction.
>
> **[2:20](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=140)** The next thing I want you to try to do is to change the role of the teacher who's enrolled in the art class to be an administrator in that class.
>
> **[2:28](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=148)** So you've got a few different challenges here, kind of a bunch of pieces to this challenge.
>
> **[2:32](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=152)** Hopefully it's broken up in a way that will allow you to kind of cement all the things that we've been learning throughout this course.
>
> **[2:37](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=157)** Pull 'em all together and use them in a new setting for you so that you'll be challenged and pushed and able to apply the things that you've been learning in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (7), data (3), [[Databases]] (2), [[E-Commerce]] (2), next (2)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** picture (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)

#### Solution: Database tests
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=0)** - [Instructor] The first challenge I gave you in the last video was to create a schema for these tables.
>
> **[0:04](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=4)** So hopefully you were able to create something that looks kind of like this.
>
> **[0:08](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=8)** Probably the most interesting thing to note about this schema is that this enrollments table is connected to all the other tables.
>
> **[0:17](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=17)** So you'll probably need to do a bunch of joins when we want to get data from multiple tables.
>
> **[0:22](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=22)** None of these tables, the roles users and classes tables are connected to each other.
>
> **[0:26](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=26)** They're only connected through the enrollments table.
>
> **[0:29](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=29)** For the next challenge, I asked you to find the name of the students enrolled in the math class.
>
> **[0:35](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=35)** So let's try to break this down.
>
> **[0:37](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=37)** So first of all, we know that we need to get the student names and we're going to get those from the users table.
>
> **[0:42](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=42)** So users dot first name. From users.
>
> **[0:48](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=48)** And now we need to get this for students that are enrolled in the math class, so we'll have to join with the enrollments table.
>
> **[0:56](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=56)** So let's do a join with enrollments and we're going to join it on the users dot user ID being equal to the enrollments dot user ID.
>
> **[1:12](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=72)** Now the enrollments table, if we look at what fields it has, only has the class code and not the class name.
>
> **[1:21](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=81)** So we need to do another join onto the classes table.
>
> **[1:27](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=87)** So let's join classes.
>
> **[1:30](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=90)** So we'll join this with the classes and in this case, we're going to join it on the spot where classes dot class code is equal to the enrollments dot class code.
>
> **[1:45](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=105)** And then we want to check for the math class.
>
> **[1:49](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=109)** So we'll say where the classes dot class name is equal to math.
>
> **[2:00](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=120)** But we also need to check on the role.
>
> **[2:02](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=122)** So this will give us all the users that are enrolled in the math class, regardless of if their students are teachers.
>
> **[2:08](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=128)** Since we want to check on the role as well, we actually need to do another join here.
>
> **[2:13](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=133)** So let's do a join onto the roles table.
>
> **[2:19](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=139)** And we're going to join this one on the roles dot role ID being equal to the enrollments dot role ID.
>
> **[2:30](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=150)** And we want to get it where this, so we're going to put an and here because we also want where you're enrolled in the math class and where your role ID is the teacher.
>
> **[2:40](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=160)** So we'll say where roles dot role type equals student, not teacher.
>
> **[2:49](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=169)** All right.
>
> **[2:50](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=170)** And I think at this point we have it all together.
>
> **[2:53](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=173)** So let's try running this query and see what happens.
>
> **[2:56](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=176)** And there we go.
>
> **[2:57](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=177)** We get back the two students that are enrolled in the math class.
>
> **[3:01](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=181)** The next challenge we were given was to figure out what classes the person with the username ehorsetead2 was enrolled in.
>
> **[3:09](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=189)** So once again, let's break this down.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=190)** We'll start by selecting the classes.
>
> **[3:14](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=194)** So from the classes table, we will select the class name, and that's going to be coming from the classes table.
>
> **[3:24](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=204)** And once again, there's no direct link from the classes table to the user table.
>
> **[3:27](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=207)** So we have to do a join through the enrollments table.
>
> **[3:30](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=210)** So let's do that.
>
> **[3:32](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=212)** Let's join it with enrollments and we're going to join it on the classes dot class code being equal to the enrollments dot class code.
>
> **[3:44](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=224)** But now we also need to get the username.
>
> **[3:47](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=227)** So let's join once again to the user's table.
>
> **[3:52](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=232)** And in this case, we're going to join it on the users dot user ID being equal to the enrollments dot user ID.
>
> **[4:05](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=245)** And then the thing that we want to check for is our username.
>
> **[4:08](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=248)** So where users dot username is equal to ehorsetead2.
>
> **[4:16](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=256)** And let's try running this.
>
> **[4:19](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=259)** And you can see that this user is enrolled in the math and the history class.
>
> **[4:24](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=264)** For the next challenge, we were asked to create a transaction that will make a new class and enroll a teacher and two students in that class.
>
> **[4:33](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=273)** So we're doing a lot here.
>
> **[4:34](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=274)** So let's start with beginning a transaction.
>
> **[4:39](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=279)** And then the first thing we want to do is create a new class.
>
> **[4:41](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=281)** So we'll say insert into classes
>
> **[4:50](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=290)** and the values that we're going to insert are, well, we need a class name.
>
> **[4:59](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=299)** Let's create a new ID for it.
>
> **[5:01](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=301)** So we'll do ID six and we'll call it gym class.
>
> **[5:07](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=307)** So now that we've got something to create the class, we want to create some enrollments into this class.
>
> **[5:12](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=312)** So let's do insert into enrollments and we'll insert some values here.
>
> **[5:21](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=321)** So we know for the enrollments table, we need a class code, a role ID, and a user ID.
>
> **[5:26](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=326)** So we know the class code is six 'cause that's what we just created.
>
> **[5:30](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=330)** For the roles, if we look at the roles table, we can see that student role is one.
>
> **[5:39](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=339)** And if we look at the user's table, we can just get those user IDs.
>
> **[5:46](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=346)** So we'll say the role ID is one, and we'll assign that to user one.
>
> **[5:52](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=352)** And then let's make another student.
>
> **[5:55](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=355)** So also role ID of one assigned to user two.
>
> **[5:58](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=358)** And then let's make a teacher.
>
> **[6:01](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=361)** So role ID two assigned to user three.
>
> **[6:05](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=365)** All right. And then we can do commit to commit our transaction.
>
> **[6:15](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=375)** And let's try and run this.
>
> **[6:17](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=377)** You can see that it successfully inserted this new class for us.
>
> **[6:23](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=383)** And for the final challenge, we need to change the role of a teacher that's enrolled in the art class to be an administrator in that class.
>
> **[6:31](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=391)** So we're going to need to update the enrollments table, and we want to set the role ID to be that of an admin.
>
> **[6:45](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=405)** And so if we look at the roles table, we can see an admin has a role ID of three.
>
> **[6:50](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=410)** So we're going to set it to equal three, but we only want to do that in the case where the role ID is currently a teacher and where the teacher is enrolled in the art class.
>
> **[7:07](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=427)** So if we look at the classes table, we can see that art has an ID of four.
>
> **[7:13](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=433)** So we'll say where the class code is equal to four and let's run this.
>
> **[7:19](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=439)** We can see that that successfully updated the teacher to be an admin.
>
> **[7:23](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=443)** So some of these challenges were probably a bit, well, challenging, but hopefully you were able to figure most of them out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (3), data (1)
> **CLI Commands:** make (3), find (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** select the (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/sql-for-testers/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/next-steps?u=76281980&t=0)** - [Instructor] Well, it's been quite the ride, hasn't it?
>
> **[0:02](https://www.linkedin.com/learning/sql-for-testers/next-steps?u=76281980&t=2)** It's time to take a minute and celebrate what you've done in this course.
>
> **[0:07](https://www.linkedin.com/learning/sql-for-testers/next-steps?u=76281980&t=7)** So, what have you learned in this course?
>
> **[0:10](https://www.linkedin.com/learning/sql-for-testers/next-steps?u=76281980&t=10)** Well you've learned how to execute SQL queries that'll allow you to validate all kinds of data.
>
> **[0:15](https://www.linkedin.com/learning/sql-for-testers/next-steps?u=76281980&t=15)** You've also learned how to modify and change data so that you can set up test scenarios.
>
> **[0:19](https://www.linkedin.com/learning/sql-for-testers/next-steps?u=76281980&t=19)** But you haven't only learned how to use SQL to help you with testing, you've also learned some things about SQL that you'll be able to use in directly testing SQL queries.
>
> **[0:28](https://www.linkedin.com/learning/sql-for-testers/next-steps?u=76281980&t=28)** You've learned how transactions work and how to map out a database schema.
>
> **[0:32](https://www.linkedin.com/learning/sql-for-testers/next-steps?u=76281980&t=32)** You've learned how to think about performance testing and database security.
>
> **[0:35](https://www.linkedin.com/learning/sql-for-testers/next-steps?u=76281980&t=35)** Now, of course, we've skimmed over a lot of these topics, but as I said at the start of this course, SQL is a hugely popular language.
>
> **[0:43](https://www.linkedin.com/learning/sql-for-testers/next-steps?u=76281980&t=43)** If you want to learn more on any of these topics, search through this Learning Library or follow up with some of the resources that I've shared throughout this course.
>
> **[0:50](https://www.linkedin.com/learning/sql-for-testers/next-steps?u=76281980&t=50)** So now that you have a grasp of how to use SQL queries, you should have the foundational knowledge that you need to dive deeper into this topic.
>
> **[0:57](https://www.linkedin.com/learning/sql-for-testers/next-steps?u=76281980&t=57)** And you should certainly have the knowledge that you need to enhance your day-to-day testing abilities.
>
> **[1:01](https://www.linkedin.com/learning/sql-for-testers/next-steps?u=76281980&t=61)** So thanks for spending some time with me in this course, and happy testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), data (2), database (2), [[Security]] (1), [[Search]] (1)
> **Env Vars:** sql (6)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Dave Westerveld]]

## Resources

- Exercise files available

## Skills Covered

- SQL
- Database Testing

## Path Context

### In [[Getting Started with Software Testing]]
← [[Java- Testing with JUnit]] | **12 of 12**

## Appears In

- [[Getting Started with Software Testing]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL

---

[↑ Back to top](#)