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
  - '[Getting Started with Software Testing](../../Paths/Software%20Development/Learning%20Paths/Getting%20Started%20with%20Software%20Testing.md)'
prev_courses:
  - '[Java- Testing with JUnit](Java-%20Testing%20with%20JUnit.md)'
path_nav: '[{"path":"Getting Started with Software Testing","position":12,"total":12,"prev":"Java- Testing with JUnit","next":null}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/sql
  - skill/database-testing
status: not-started
created: 2026-05-03
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

#### [Dive deep into quality](https://www.linkedin.com/learning/sql-for-testers/dive-deep-into-quality-20262778?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/dive-deep-into-quality-20262778?u=76281980&t=0)** - [Dave] Testing is no longer just about verifying that a product works once a developer's hand it to you. The modern tester is expected to know their way around the technical aspects of an application. Almost every application on the web has a database somewhere, and so the ability to use [SQL](../../Skills/Data%20Science/SQL.md) is an in-demand skill for any tester to have. I'm going to show you how to use SQL to enhance your ability to do testing in an application. You'll learn how to use SQL queries to validate user workflows and to generate test data. I'll also show you some of the details of the language so that you'll be able to directly test SQL queries. Hi, I'm Dave Westerveld. I've been working as a technical tester for many years now, and I'm excited to share a little bit about what I've learned about SQL testing. If you're ready to use the power of SQL to dive deep into quality, join me in my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course on SQL for Testers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (7), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** sql (7)
> **Definitions:** is an  (1)
> **Speakers:** - [dave] (1)

#### [What you should know](https://www.linkedin.com/learning/sql-for-testers/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/what-you-should-know?u=76281980&t=0)** - [Instructor] As a software tester, there are many things you need to know. By the end of this course, you'll be able to use [SQL](../../Skills/Data%20Science/SQL.md) to help you with testing work, and you'll also be able to test SQL queries. I'll try to start from the basics and build up, but in order to maximize your learning, you should be comfortable with the basics of working on a command line. I'll also use a simple [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) application to cement some of these concepts for you, but other than a few simple commands that I'll show you, you shouldn't need to know any Python or SQL to start this course. This course assumes that you are new to SQL and ramps you up quickly into being able to use SQL in your day-to-day work as a tester. So the main thing that you're going to need going into this course is curiosity and a desire to learn and grow as a tester.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (5), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **Env Vars:** sql (5)
> **CLI Commands:** python (2)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started

[↑ Back to Table of Contents](#table-of-contents)

#### [What is SQL and why use it as a tester?](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=0)** - [Instructor] [SQL](../../Skills/Data%20Science/SQL.md) is everywhere. Almost every application on the web use a structured query language to create and query [Databases](../../Skills/Software%20Development/Databases.md). There's some [Big Data](../../Skills/Data%20Science/Big%20Data.md) applications and other technology that's moved on to other ways of managing their data, but for the vast majority of websites, SQL remains the backbone of how they use and store data. The very fact that it's so popular, means that as a tester, you should know something about it and how it works, generally, testers don't need to be able to create production code, but understanding how technology works will help you improve your testing of that technology. There's additional benefits as well for testers, so some test scenarios are difficult or time-consuming to set up if you have to do everything with the UI, or even with UI automation. For example, if you use [Selenium](../../Skills/Software%20Development/Selenium.md) to do this, that could be helpful, but those kinds of scripts can take some time to write and can be a bit difficult to maintain. So sometimes the fastest way to do things is just go right to the database and create or modify the data that you need. Another benefit that comes to testers that know SQL is an improved ability to debug issues. Sometimes it's difficult to understand why something's gone wrong, but if you're able to query the database, you might discover some data corruption or some inconsistencies or some other things that you could do to figure out what is actually going on and what went wrong with the problem. I've used this kind of query myself to track down strange issues that clients were seeing that I wasn't able to reproduce locally, and even just to more easily test fixes on issues that involve things like data exports. Another benefit, too, for a tester to learn SQL is employability. If you're able to find some of these deeper problems, if you're able to be more efficient in setting up data
>
> **[1:34](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=94)** in your testing, you'll end up being a more skillful and valuable tester. Of course, not every company is looking for testers that have strong SQL skills, but many do find that to be valuable. For example, in my interview for my current position, I was asked to show some simple SQL queries and being able to work with some of the basics of SQL only helped me in landing the job that I have. So we can see that there are a number of good reasons for testers to learn how to use SQL. But before we dive in, let's talk for a second about where SQL came from. So it was initially developed in the early 1970s, which means that it's actually about somewhere around 50 years old now. So in software years, I think that makes it, well, about as old as this guy here, but why does it continue to be so popular? Well, there's a few reasons. One is that [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) are very good at expressing relationships in a system where those relationships change and evolve over time, and if you think about it, that pretty much describes any website or application from finance to eCommerce to gaming and everything in between. We've got some defined relationships that sit in place, but those relationships may morph and change a bit over time. So since SQL is designed to work with relational database access, it's a little wonder that it continues to be so popular. There are also, of course, some additional reasons for this as well that are good news for us. One is that it's simple to use. So there's obviously complexity that can come into SQL queries, and if you've ever looked at some production SQL queries, you might find it overwhelming,
>
> **[3:06](https://www.linkedin.com/learning/sql-for-testers/what-is-sql-and-why-use-it-as-a-tester?u=76281980&t=186)** but the reality is that with just a few simple queries, you can leverage a ton of the power of this language, and it's quite easy to get started with and start using. Another reason for its popularity is that it's so popular. Now this sounds like circular reasoning, and maybe it is, but the reality is that SQL is everywhere, which is great because it means that there's tons of resources available to help you with almost anything that you might get stuck on. There might be people at your company, there almost for sure are, people at your company that are very good at SQL and understand how to use it and you can talk to them and ask them questions, and then, there's millions of SQL users on the internet. So anytime you hit problems with SQL, if you [Google](../../Glossary/Service/Google.md) it, you will probably find an answer that can help you because it has been around for so long. It's so popular. So many people use it. There's just so many answers available. So for all of these reasons, this is a very popular language to use and a very beneficial language for testers to get into. So let's dive into it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (16), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1), [Selenium](../../Skills/Software%20Development/Selenium.md) (1), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1)
> **Env Vars:** sql (16)
> **CLI Commands:** find (4)
> **Definitions:** means that (2), is an  (1), is a  (1)
> **Analogies:** for example (2)
> **Code Identifiers:** ecommerce (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Getting setup with the tools you need](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=0)** - [Instructor] This course is meant to be hands on and practical. I want to use a lot of examples throughout this course, and I would encourage you to try and follow along at home so that you get the most out of this course. So in order to do this, you're going to need SQLiteStudio. This is an application that you can download from SQLightStudio.pl, this website here, and it gives you an interface for working with [SQL](../../Skills/Data%20Science/SQL.md). So in order to use it, we're going to need to download it. I'm on [Windows](../../Glossary/Service/Windows.md), so I'll just download the Windows version for it. If you are not on Windows, you can go to the download link to find other versions. And let's talk just for a second about the different flavors of SQL that are out there. You might guess that SQLiteStudio uses a flavor called SQLite, and there are some minor differences between the SQLite flavor of SQL and some of the other ones that are out there, but you really don't need to worry too much about them. The overall structure's very similar, and anything that you learn in this course will translate well into other SQL variants that you use. So once the download has completed, just unzip the package into the folder that you want it, and for me, I've unzipped this package into my program files folder. So if we navigate to that, I can find the SQLiteStudio folder, go into there and open it with SQLiteStudio.exe. Of course, if you're on a Mac or [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) platform, you'll have to look for the appropriate ending for your platform, and you'll have to uninstall it in the appropriate way. I think, I believe on a Mac, you will have to drag it into your app folder. We'll double-click on this to open it, and once that opens, I would recommend that you pin it to your taskbar so you don't have to go looking for it every time.
>
> **[1:35](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=95)** And here's the interface that we have. So at this point, let's take a minute to load a database into it. You'll find a database that you can use in the exercise files for this video. Browse to where you've saved those files and choose the FAKE_CAR_DATA.db. So we'll do that here. I will add a database. I'll browse to my FAKE_CAR_DATA.db file, and I will say OK to open that. So now the database is here, but we need to actually connect to it, so I'll right-click on it and choose connect to database. And you can see that loads the tables that are in it. In this case, we have this FAKE_CAR_DATA table in this database. So now we can go here, tools, open SQL editor, or we could do alt + E to open an editor, and let's take a look at the first query that we can do. This is just one of the simplest queries you can do with SQL. You can try it out, get a feeling for doing a SQL query, but if you don't really understand what these things mean, don't worry about it at all. We will cover all of that shortly. So I'm going to type here select star from FAKE_CAR_DATA; and don't forget the semi-colon, that goes at the end to let SQL know that your command is completed. And then I clicked on the green run button, or you can do F9 to execute the command, and you can see that it executed the command, and we got back a bunch of results down here in the grid view, and you can see that a SQL table is just that, it's a table.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-testers/getting-setup-with-the-tools-you-need?u=76281980&t=190)** It's got rows of data, and it's got columns that define the different data types that go into each row. So we will get into all of this stuff in more detail as we continue on with the course. So let's continue on with this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (9), [Windows](../../Glossary/Service/Windows.md) (3), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Env Vars:** sql (9), fake_car_data (4)
> **CLI Commands:** find (3), unzip (1)
> **UI Navigation:** go to (1), navigate to (1), double-click (1), right-click (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is an  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [Getting started with SQL queries](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=0)** - [Instructor] In the last video I had you type in and execute a query. You might not have understood exactly what this query is all doing, but now we're going to dive into this and understand what's actually going on. So the query we have here is pretty simple. We just wrote select star from fake car data. Now, let's just walk through this one step at a time. So first we have this select statement, which well, it selects data, and then we have the star here. So the asterisk or star is a wild card character. It essentially means give back data from all the columns in this table. So we could change this to be a column name, and then we'd only get data from that column. So for example, we could put last_name as the name of this column. We get back a table with only that one column, only the last name column in it. I'll just change this back to star for now, consider. So we'll send that query off and you can see that the response we get back only has the rows where the vehicle make is BMW. So the where phrase is called clause, but this part of it, the vehicle make equals BMW is called a predicate or a comparison predicate because we're doing a comparison. So in this predicate, we're using the equals operator to compare the rows in the vehicle make column to see if they have the value BMW, but we can use other operators as well. So for example, we can use operators like greater than
>
> **[1:34](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=94)** or less than, and let's take a look at an example of doing that. So let's change this predicate here to say vehicle year is greater than 2000. And let's send that query off and you can see that now we get back a list of rows where the vehicle year is greater than 2000. Another example of a comparison operator that we could do here is the between operator. So instead of greater than we can use the keyword between, and we can say between 1995 and 2000. Let's send that query off and see what happens. And you can see that we get vehicles 2000, we also get vehicles from 1995. So it includes the end points '95 and 2000, but all of the vehicles returned, all of the items returned have the vehicle year between 1995 and 2000. And note that in these examples here, we don't have quotes around it because we're dealing with numbers here. There are a number of operators that are available to you and the Wikipedia page on [SQL](../../Skills/Data%20Science/SQL.md) syntax has a good summary table of all these different operators that you can refer to. So after just a few minutes, we've already been able to put together some pretty powerful queries that let us slice up the data in some interesting ways. Hopefully this is giving you a feeling for just how powerful SQL is and also how straightforward it is to use. So we're going to continue to add a bit more complexity
>
> **[3:08](https://www.linkedin.com/learning/sql-for-testers/getting-started-with-sql-queries?u=76281980&t=188)** to this query, but for now, take a second, give yourself a pat on the back for what you're already able to accomplish with SQL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (3)
> **Env Vars:** bmw (3), sql (3)
> **CLI Commands:** make (3)
> **Definitions:** is called (2), is a  (1)
> **Analogies:** for example (2)
> **Code Identifiers:** last_name (1)
> **Cross-References:** in the last (1)
> **Warnings:** note that (1)

#### [Understanding more complex SQL queries](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=0)** - We're going to start looking at how to use [SQL](../../Skills/Data%20Science/SQL.md) to help with testing where shortly. But before we do that, I want to take a few more minutes to get into some of the fundamentals of SQL queries. So far, we've been able to see how to use the select, the from, and the where clauses. Let's look at one more, fairly common clause the order by clause. So we'll add that to our query here, order by, and let's order this by first name, send that query, and you can see that the results that we get back are in alphabetical order for the first name we first got As and Bs and so on. We could also change this. We could order it instead by last name. So let's try that out and see what happens. And you can see that now the first name isn't in alphabetical order, but the last name column is. Or we could order it by vehicle year or whatever we wanted a for columns that we can order by. Now, you might have noticed that the order by clause here is making an assumption. Why did it start with the first letter in the alphabet and then move toward the end? What if you wanted it to start at the end and go the other way? For the order by clause, it uses ascending order by default. If you want to do it in descending order, you can just add DESC to the end of it and send that off. And now it sorts it in descending order. You can also explicitly put ASC here to get an ascending order, or if you just leave it off like we did at first, it will just automatically assume
>
> **[1:32](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=92)** that we're going to use ascending order. So you can see how this clause is helpful as you look through data and helping you understand what's going on. But it's time to try this out on your own again too. Try to create some queries that will give you some information about this table. Perhaps look at all the data for Fords, with the newest ones shown first or something like that. Give yourself a bit of time to play around with these queries and make sure you understand these various clauses and how they work. So we now have a query with four different clauses in it, select from, where and order by. SQL queries get a lot more complex than that, and we'll continue to learn new clauses and patterns as we go through this course. But I want to just take a second and talk about something here called the order of execution. What I mean by that is the order in which the various clauses in the SQL query will get executed. So you can imagine it's not too big a deal here with the small query that we have, but if you get a big query that's got a lot of complexity to it. The order of execution becomes more important and is something that we need to consider. So let's walk through this query that we have here, while it's small enough for us to understand so that we can get a grasp on what is meant by the order of execution. So the first clause in this query is select. But is that the first thing that is going to execute? If we tell the query to select all the columns, select star, as we've done here, the question is what columns. If we started with this blank slate, we can't select any columns because there's no
>
> **[3:04](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=184)** columns there to select yet, right? We have this blank empty nothingness in this point. So we can't really select anything. So the first thing we actually need to do is get some data. And that's where this from statement comes into play. So the from statement tells the engine what table to go to where we're going to get the data from. So the first thing that gets executed in a SQL query is the, from clause. So this part will get executed first. First, the query will go and say, okay, I need to connect to this fake car data table and pull the data out of there. And at this point we're ready to select, right? Well, we would be, but we've got some additional clauses here that we need to consider. So the next thing that we have is this where clause. And what the where clause is going to do is actually reduce the data set that's available to select from, right? So the, from car fake car data kind of gives us a connection to the full dataset, but then this where clause says, Oh, out of that data set, I only want the rows where the vehicle year is between 1995 and 2000. So it's going to limit the dataset, reduce it down, to have those rows in it. And then we can finally go back over here. So the first thing we do, is from the second in our order of execution is where the third thing is select. Then we'll actually select the given columns from that, in this case, all of them. So we'll select all the columns from this reduced data set. And then finally, we'll jump over here in the order of execution to order by, and we will order the column according to the given criteria that we've passed to the order by clause.
>
> **[4:39](https://www.linkedin.com/learning/sql-for-testers/understanding-more-complex-sql-queries?u=76281980&t=279)** So for a simple query like this, it doesn't really matter too much of course. But as queries get more complex and as you might do things like nesting queries inside of each other, the order of operations can be something that you need to consider. Now, the order of execution, isn't something you should just memorize and know, there's lots of resources to look it up. And this page here has a great example where it just sets out all of the common clauses, in the order that they get executed. Obviously there's clauses in here that we haven't learned about yet. That's totally fine. But if you look at this, you can see that it does what we said. The first thing is from, the next thing that we had was where, the next one was select, and then order by. So the order of execution proceeds according to this. And this is a great resource for you to look at, If you want to remind yourself of what that order of execution is.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (5)
> **Env Vars:** sql (5), desc (1), asc (1)
> **UI Navigation:** go to (1), select the (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - we (1)


### 2. Querying SQL Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up a site for testing](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=0)** - [Instructor] Now that we have the basics of [SQL](../../Skills/Data%20Science/SQL.md) under our belt, let's start to look at how to use SQL queries as a tester. I really firmly believe that you'll learn best if you can actually execute queries on your own and have a hands-on experience throughout this course. Now, in order to do that, you're going to need to set up some [Databases](../../Skills/Software%20Development/Databases.md) locally, but I didn't want this just to be about querying databases. As testers, we look at things in a holistic way. A database by itself can be interesting, but whenever we're looking at a database in our application, it's part of an ecosystem. The database provides data that is ultimately used by a client or user interface in some way. So in order to sort of replicate this, I put together a simple website that has a few database tables for various parts of the data, and it has a simple user interface on top of it that uses the data. Now, obviously this will be far less complex than a real [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) site would be, but it should help to make sure that the things that we learn in this course are applicable in the day-to-day work of a tester. I also want to acknowledge [GitHub](../../Skills/Software%20Development/GitHub.md) user, Himani13040, whose repo I initially forked off of before modifying this for our needs here. In order to use this site locally, you're going to need a few things. First of all, you'll need to have [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) three installed on your computer. If you don't yet have it, you can get it from [python.org/downloads](https://python.org/downloads) and then download the latest version three release for your platform and install it like you would any other application. The site that we're using is built on a Python library called Flask. So once you have Python three installed, you can install Flask by using pip install flask, and then hitting Enter. PIP is just a tool that comes with Python that you can use
>
> **[1:33](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=93)** to install additional packages like this Flask library. This command takes care of downloading and installing everything that you need for running Flask applications. One other library that you'll need to install as well is the Requests library, which you can install in the same way, pip install requests. So once those installs have completed, you'll need to get the application that you want to run, and you can get this from the ZIP files in the course, download and extract those into a folder on your computer. And then once you've done that, go to the command prompt and navigate to that folder. So you can use CD for Change Directory and then put in the path of that folder and hit Enter. So once you're in that folder, you'll need to set the values for a couple of environment variables. So these are the values that Flask will use when it's starting up. First of all, you're going to set the Flask app variable, and on my computer I can do that by calling export FLASK_APP. On [Windows](../../Glossary/Service/Windows.md), you would probably do, set FLASK_APP, and then we're going to set the value of this variable to main. And similarly, I will also set the FLASK_ENV variable. And this one I will set to development, to let it know that we're working in a development environment. So once I've done that, I'm ready to start the application. And to do that, we can just type flask run, and then hit Enter. And you can see that it starts it up and the application is running on this URL. And if we load that URL in the web browser, you could see it here. Now this application uses some database tables, so let's connect to the database that is behind this site.
>
> **[3:08](https://www.linkedin.com/learning/sql-for-testers/setting-up-a-site-for-testing-20267382?u=76281980&t=188)** To do that, I will open the database and choose database.db from the folder. And you can see that it has added these tables here for us in SQLiteStudio. Now, I have also provided a reset script that you can use to reset the database in case anything goes wrong. To run that script, simply go to Open SQL Files, and choose the DatabaseInitializationScript.sql file, open it, and then click on Run to run it, and it will initialize the database for you. So now you've got everything set up and ready to go for doing all kinds of cool testing with this application. Let's dive into that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (5), [SQL](../../Skills/Data%20Science/SQL.md) (4), [Databases](../../Skills/Software%20Development/Databases.md) (2), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Prerequisites:** install (7), you'll need (4), set up (2)
> **CLI Commands:** python (5), pip (3), make (1), cd (1)
> **Env Vars:** sql (3), flask_app (2), url (2), pip (1), zip (1)
> **UI Navigation:** go to (2), navigate to (1), open the (1), click on (1)
> **Tools:** github (1), command prompt (1)
> **File Paths:** databaseinitializationscript.sql (1)
> **URLs:** [python.org](https://python.org) (1)

#### [Validate user workflows](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=0)** - [Instructor] Now that you have the testing practice site set up, let's look at how you can use [SQL](../../Skills/Data%20Science/SQL.md) as a tester to validate a user workflow. Now, this is obviously a very simple site, so let's take a look at a very simple cart workflow. First of all, let's sign in so that we can add stuff to the cart. So, I'll use fakeuser1@[gmail.com](https://gmail.com) and for the password, 12345. And once I'm logged in, I'll add an item to the cart and then go over to Studio to see if this was added to the database correctly. So, we'll do Select Star from Cart, semicolon, and let's run that. You can see that there is a row in our cart table with the user ID and the product ID. So that looks like it's working okay, but let's take a look at this product. So we'll do Select Star from [products](../../Skills/Software%20Development/Microsoft%20Products.md) where product ID is equal to the product ID in our cart. So two, and we'll run this query. And you can see it's got the Woman's T-shirt, the price of $4.99. This looks like the item that we added to our cart, and this is good validation that things are set up correctly between the UI and the database on the backend. You can also see here that the stock has been reduced to zero. So as we add items to the cart, they're being reserved in the system and they're not available anymore in the products table, which is what we would expect here. We could also check on the user ID as well,
>
> **[1:32](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=92)** but for now, let's continue with the workflow. So we'll go back to the user interface and we'll go to the cart. We will remove this item from the cart and then back in SQL Studio, we'll run these queries again. So let's select Star from the cart and we can see that there's no rows return, there's nothing in our cart, which is good, and we'll check on the product as well. And we can see that the stock has gone back up to one, so it's available again. So that shows you one example of how you can use SQL to help you in validating product workflows. Let's take a look at another way that you can use a database to help validate what's going on in the UI. If we go to the profile and edit it, and we take a look at this, you can see the Address 1 field looks a little funny, it just has this one in it. It doesn't seem to have a full address. Now there might be some kind of bug here, but let's see if the problem is bad data or if the problem is in how we're rendering the data in the user interface. So in order to do that, let's select Address 1 from the user's table,
>
> **[2:49](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=169)** and let's do that where the email is equal to fakeuser1@[gmail.com](https://gmail.com).
>
> **[3:02](https://www.linkedin.com/learning/sql-for-testers/validate-user-workflows-20266621?u=76281980&t=182)** When we run this, we see that the Address 1 field has a full address in it. So it does seem like the data's fine and the bug is probably in the page in how it's rendering that data. It looks like it might not display anything after the first space following that one. Now, obviously here we have a very small set of users in our table, but if we had a [Big Data](../../Skills/Data%20Science/Big%20Data.md) set, we might want to do a quick search and just see how many people are going to be affected by this bug. So to do that, we can use something called the like operator. So instead of looking for a particular user here, let's change this to look for Address 1 like, and then we'll do percent space percent and let's run this query. And you can see that we get all the rows that have an address with a space in it. Now, if you want to learn more about the like operator, W3 Schools has a great article on it along with the details of the kinds of wild card characters that you can use with it. So now you've seen a couple of examples of how you might validate a user workflow with SQL. Why don't you try it out for yourself? Think of a simple workflow and validate that the database tables do what they're supposed to.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [Big Data](../../Skills/Data%20Science/Big%20Data.md) (1)
> **Env Vars:** sql (4)
> **URLs:** [gmail.com](https://gmail.com) (2)
> **UI Navigation:** go to (2)
> **Prerequisites:** set up (2)
> **Versions:** 4.99 (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)

#### [Validate data integrity](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=0)** - [Instructor] We've seen how you can use [SQL](../../Skills/Data%20Science/SQL.md) to validate that certain workflows are correct. But now let's dive a little deeper into validating the [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md). In order to do this, it's sometimes helpful to look at data that spans multiple tables at the same time. The command that lets us do this in SQL is called a join. There are a couple types of joins and joining can be a bit complicated feeling in SQL. But let's start with the most common type of join, the INNER JOIN. I could give you some theoretical explanation of what it is, but let's start by looking at how to use one. So let's try this out. Let's add a couple of items to our cart. We'll add a few of these and then let's take a look at the cart table. So we'll do SELECT * FROM cart and we can see we've got these four [products](../../Skills/Software%20Development/Microsoft%20Products.md) in the cart for this user. Now, what if I wanted to see the stock count for each of these products? I could do something like SELECT * FROM products where productId equals one and then another one where it equals two and three and so on. But that gets time consuming. So instead of doing those calls one at a time like that, we can use an inner join to join the data together that we want from these two tables. So to do that, we can create a query that looks something like this. SELECT * FROM products INNER JOIN products with cart ON cart.productId = products.productId.
>
> **[1:37](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=97)** And if we run this query, you can see that we get details from the products table and the cart table joined together for each of the productIds that are in our cart. Now, at this point, you might have a bit of a glazed look on your face, but don't worry, it took me a while to get my head around joins too. So let's walk through this query kind of a step at a time in detail to make sure we understand what's going on here. So the first thing to note is that joining requires two tables that need to be joined together. So in our query, we've got this products table, which we could call table1. And the order of this doesn't really matter for inner joins, but for other types of joins, it can matter which one you do first. But here we have table one or the products, and then cart, which is our table two. So with that, we've defined we want to join these two tables in our join, but in order to actually do it, we have to have some kind of shared data between those two tables. So in our example, both of these tables share a productId column. So what we're saying in this query is look at all the values in the productId column of the cart table. And for each of them, if you find a matching value in the productId column of the products table, select all the values, SELECT * FROM that row in both of those tables and return it. So as you can see here, we actually get some duplicate data in the response. We have productId and productId because we're getting the data from both of those tables and returning all of it. So hopefully this is starting
>
> **[3:08](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=188)** to come together for you a bit. But in order to cement it in your mind, pause this video for a second and see if you can create a join between the users and the cart tables that gives you the first name of each user that has items in the cart. (lively music) I hope you paused the video and challenged yourself to try that out on your own. It really is one of the best ways to learn, but in case you did get stuck on it, let's take a quick look at how we can do it. So let's start with what we need to select, which according to the question here is we want to get the first name of each user. So we'll say SELECT firstName, and we're going to select it FROM the users table, joined with, and we can just do JOIN, we don't need to do INNER JOIN. If you don't specify, it will assume you mean an inner join. And we're going to join it with the cart table because it says we want to create a join between the users and the cart table. And we're going to do that join on a common column between those tables. So if we look at the cart table schema, we have userId and productId. And in the users table, we also have a userId. So the common column between them is the userId. So we'll do users.userId = cart.userId. And if we run this, you can see that we get the first name of each user that has items in the cart.
>
> **[4:41](https://www.linkedin.com/learning/sql-for-testers/validate-data-integrity-20264571?u=76281980&t=281)** Now, there's only one user with items in the cart, so it's the same first name for everybody, and it's repeated for each item in the cart. So if we wanted to only get the one, we can add this DISTINCT keyword and rerun it. And now we get back only the distinct or unique results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (10), [SQL](../../Skills/Data%20Science/SQL.md) (3), [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) (1)
> **Code Identifiers:** productid (9), userid (5), productids (1), firstname (1)
> **Env Vars:** select (5), join (4), sql (3), inner (3), distinct (1)
> **SQL:** select (5), inner join (3), join (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)

#### [Working through an example](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=0)** - [Instructor] In the last video, you saw how to query data from multiple tables using inner joins. And as you might guess, there's also something called an outer join. In fact, there are actually three different kinds of outer joins. The left join, right join, and a full join. When using these, the outer part is optional, just like the inner parts optional with the inner join. Now the reality is you usually won't need to use outer joins, and in fact, SQLite hasn't even implemented the right and full joins, so you can't use them in here anyways. For the sake of completeness though, it's worth knowing that there are these kinds of joins. If you want to visualize how they work, W3 Schools has a good set of Venn diagrams here that explain how these different joins work. Now let's take a minute to pull together everything that we've learned so far. We've added join to the set of clauses that we know. So let's see if we can combine everything together into a query that uses all these different clauses that we've learned so far. So what I want you to do is try to create a single query that will give you the price, description, and category name of all [products](../../Skills/Software%20Development/Microsoft%20Products.md) that have a price greater than $10, and ensure that that result is sorted by price. Now that's a pretty complex set of things to do, so hopefully you are able to pause this video and put together a query like that. But let's take a look at what that query would look like. So let's start with what we want. So we want a query that will give us the price, description, and category name. So let's do select P dot price. And we're going to create something called an alias for the products table, and we'll call it P
>
> **[1:35](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=95)** and P dot description. And we also want the category name. So we'll say C dot name. And we're going to create an alias for the category table called C. And this just simplifies the typing that we have to do, and we want to select those from both the products table and the category table. So we're going to say from products and we'll say as P. So this is where that P is coming from. We're just basically creating an alias for the products table. And then we're going to join that with the categories table, and we'll give that one an alias of C. And then we need some column that joins these two tables together. So if we look at the products, we've got several columns here and at the categories. And the shared column between them is this category ID column. So we'll join them on P dot category ID equal to C dot category ID. So far so good. But we have some additional things that this query wants to do. So this'll give us the price description and category name, but we want it only where the price is greater than $10. So let's create another clause here where P dot price is greater than 10. And we also want to ensure
>
> **[3:07](https://www.linkedin.com/learning/sql-for-testers/working-through-an-example?u=76281980&t=187)** that the result is sorted by price. So let's do an order by P dot price and let's try running this query and we get back all the information that we were looking for. So now take a minute and look at that query. That's a pretty big complex query, but with all the info under your belt so far in this course, you should be able to create some pretty interesting views of any database tables that you want to look at.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (6)
> **Cross-References:** in the last (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 3. Using SQL for Data Generation

[↑ Back to Table of Contents](#table-of-contents)

#### [Create new entries in a table](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=0)** - [Instructor] So far, we've been looking at ways to see and analyze data to table. But now it's time to switch gears and take a look at how we can generate data. So if you're testing, you're often going to want to create certain scenarios to see what happens. Maybe you want a certain kind of data to be there, or maybe you just want to have a whole bunch of data in place so that you can test maybe lots of users or lots of [products](../../Skills/Software%20Development/Microsoft%20Products.md) or something else, some other kind of load test in your system. There's a lot of reasons that you might want to create data in a table. But before we go further, I just want to give you a quick [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) of warning, make sure that when you create data like this, you're not modifying things in a production environment or in another place where those changes can have adverse effects. So with that warning firmly in your mind, let's take a look at a few examples of how we create data in a table. So for this example, let's look at doing it at trying to create a hundred users in the system so that we can test maybe some kind of load or something. So I've got the sample site open here and you can see this is the form that we need to fill out, to create a user. Imagine filling out all the data in here a hundred times, not fun. So let's see if we can do it a little more efficiently with [SQL](../../Skills/Data%20Science/SQL.md). Now, before we go creating a hundred users, let's look at creating one user. And before we do that, let's just take a quick look at our table itself. So here's the data in our table. We need all these different fields to be entered. And we obviously can't do that with a select statement. So let's use instead and insert query. So we will insert. And instead of from, we're going to use into,
>
> **[1:34](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=94)** and then we can specify the table again. So users, and now we need to specify the column names that we want to insert data into. So I've just pasted in here, the different column names that we have. And in this case, since we're inserting all the column names, I could just leave it blank, take the lazy route, but if we only want it to insert certain columns, we would need to specify the columns. So we've got our column names and now we need to specify the values that we insert into those columns. So for the values, we're going to specify a value for each of these. So we're going to have user ID three and then a password email, first name, last name, all those different things. And once again, to type all of that out would probably not be the most exciting thing to watch. So I will just give you paste it in here. And we've got here, the user ID, the password, we've got an email address. First name Abe, last name Lincoln, address, zip code city, state, country, and phone number. So let's run this and then let's run this select query and you can see that we've added that new user to the database. But now imagine if I was actually typing that out in front of you, would have taken a little while and to do that a hundred times is almost as onerous as doing it through the website itself. So is there a better way to do it? Well, yes, there certainly is. And it's this service called mockaroo. Mockaroo is a great little service
>
> **[3:07](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=187)** where we can generate some data quickly and easily for mock data like this. So I've filled this out already with the different column names. You can see a user ID, password, first name, last name, etc. All of these field names match the field names that we have in our database. So if you look at the field names here, they match all the field names here, and then I've selected the data type for each one to have. And that's the nice thing about this mockaroo service. It lets you select data types to match your field names. So for example, I have country here and I can select the country type and it will generate a random country from the list of countries that it has. So we want a hundred of them. So let's say we want a hundred rows. Let's specify it as SQL. And then the table name, we're going to call users, since that is the name of our table. And we can go ahead and download the data. And then in our editor, let's open a new tab and let's open that downloaded file, which will put all the queries into here. We'll say Control A to select them all and then run that query. And I made a mistake here. You can see it has no column named address. So if we go back here, that's because the name of our column in the database, if we take a look at the column names, you can see that this one is address one. So we updated in here and we still have a hundred SQL. So let's download that data again.
>
> **[4:44](https://www.linkedin.com/learning/sql-for-testers/create-new-entries-in-a-table?u=76281980&t=284)** And I will delete that and reopen the query, Control A and run it. Now it's saying here that the unique constraint failed on users.user ID. And that's because these first three users here have user ID one, two and three, and those users are already in the system. So let's just get rid of those three columns for now and let's run this query again. And now you can see that it ran added 97 new users. We already had three. So now we have our hundred users in the system. And if we go back to here and run this again, we can see that we have a hundred users with a bunch of random data in our system. Now that was a lot easier than putting a hundred users in the UI. Wasn't it?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (3), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** sql (3)
> **Analogies:** imagine (2), for example (1)
> **Warnings:** warning (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** select the (1)
> **Exercise Files:** download the (1)

#### [Update existing entries in a table](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=0)** - [Instructor] You know how to add new entries to a table, but what if you wanted to modify existing entries? Let's say for example, that you wanted to see what would happen if the name of one of your items was really long. So let's modify the name of this second item here and see what happens if we make it have a really long name, instead of just saying women's t-shirt. In order to update existing entries, we use the aptly named update command. So update needs to know what table to update. So we'll say [products](../../Skills/Software%20Development/Microsoft%20Products.md), and now we can set values. So we'll use the set keyword to do that, and we only want to do it for the column name. We want to change the name of our product, and let's just give it a name of something like very, very long name to see what happens with long names, something like that. Now we don't want that to change for all of the products in our table, so let's tell it that we want it to do it for the one where the product ID is equal to two. So now let's run this query, and then we can refresh the page and see what happens. And it nicely wraps the text for us, and that looks nice. So that was a nice test. Good way to validate that hey, if we did have a nice long name in here, we'd probably be able to handle it okay. But now let's take a look at doing this across multiple rows in a table at once. So first, set up the user table to have mock data in it,
>
> **[1:35](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=95)** and if you still have it set up from last video, that's great, you can use that. Or if you're like me and you ran the initialization script, again, you can use this ad_100_users.[SQL](../../Skills/Data%20Science/SQL.md) script in your exercise files to just create 100 users, and I'll just do ctrl + A and run that query to add 98 more users. So now I have 100 users in my table. Now let's take a look at that table for a second. So select star from users,
>
> **[2:15](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=135)** and this is fine, but there's a problem with this data. We've got this password field, and you can see these first two passwords, it's a hash of the password, but it's the same hash for both of them because it's the same password. They both have the password 12345. The problem is with these passwords, I don't know what they are, so I don't know how I can log into the system, because it's going to be looking for a hash of these. So I can't use these passwords to get into the system. So what I want to do is use this password here and copy it to all these users so that I can use any of these users when I'm logging in. So we can do that very similarly to the way that we did it before. We can call update users, and we'll set the password field in this case to equal this. So I'll just double-click on that so I can edit it and copy it and then paste it here. And now we're just going to do this, and run it like this. So this will affect all the rows in the table. So if we do select star from users again,
>
> **[3:34](https://www.linkedin.com/learning/sql-for-testers/update-existing-entries-in-a-table?u=76281980&t=214)** we can see that they now all have the same password. Now, there's something you might not have noticed or registered, but when we did this, there's an important thing to note here about the update command. When we only wanted to update one row, we used the where clause, so limit it to that one row. But in the case where we wanted to update all of the rows in the table, we didn't include the where clause. We just said update this table, set this column to equal this value, and that updated every single row in our table. So just note this, this is an important thing, because usually you're not going to want to update all the rows in a table. But if you forget to include a where clause when you're doing an update, that's exactly what will happen. So in that case, you may end up overwriting a whole bunch of data that you didn't mean to overwrite. So be really careful with this, 'cause it can be easy to forget the where clause, and it can cause you some pretty serious headaches if it messes up every row in your table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Prerequisites:** set up (2), initialization (1)
> **File Paths:** ad_100_users.sql (1)
> **CLI Commands:** make (1)
> **UI Navigation:** double-click (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)

#### [Deleting data from a table](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=0)** - [Instructor] Sometimes testers do nasty things to an application. We can't help it, right? It's our job to try and break things. In this video, I want to show you how to, drum roll please, delete things from a database. It should go without saying, but I'm going to say it anyways, when you're deleting things, you're performing a destructive action. So please be careful with what you do. Now, I'm going to put together an imaginary scenario for you. Imagine that our database, it hooks up to another process and this process can remove [products](../../Skills/Software%20Development/Microsoft%20Products.md). So this is some kind of other part of the business, and it can remove products that are no longer available for the site. What we want to test is to see what will happen if the product is removed while someone already has that product in their cart. So let's try that scenario out. First of all, we'll add a product to our cart and then we'll go check the database, so we'll say select star from cart, and we can see that we have that product in our cart. So that's all good, and now, we want to delete this item from the database. So we want to remove it from the products table to see what will happen. So we can do that like this. We call delete from products, and now, we don't want to delete all of the rows in the products table, and so, just like with an update statement, we need to be very careful here that we put a where clause in, otherwise, we'll just delete the entire table, delete every single row in the table. So let's say where the product ID
>
> **[1:36](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=96)** equals one, since that's the product ID that we have in our cart, right? We have product ID one in our cart. So let's try to delete that item that's in the cart and see what happens. So when we do this, we get an error that says foreign key constraint failed. So what this boils down to here is that the product ID of the row that we're trying to delete is being used by another table. In this case, the cart's table is using that product ID. So this is some useful information for us. It looks like we don't have to worry too much about this scenario on our end, but we might want to feed back the info to the people whose business process wants to be able to do this, to remove data, that there might be some scenarios where it wouldn't work very well, and they may need to take that into account, maybe clean up the carts before they delete stuff from the products table. So let's take a look, though, at an example, let's see if we can actually delete something. So let's look at an example where that will actually work. So let's clear the cart out. So we can do, once again, delete from cart, and this time, we want to just empty out the cart. So we can just do this. If we want to totally empty the cart table, we can run this query and then we can check, so we'll say select star from cart, and we can verify that indeed the cart table is empty. So now, you've got some destructive power
>
> **[3:10](https://www.linkedin.com/learning/sql-for-testers/deleting-data-from-a-table?u=76281980&t=190)** under your tool belt. You can delete items from a table. Of course, do so in a way that makes sense and be careful when you're doing this, you don't want to mess up your data, but there may be situations as a test where you want to delete something from a table to see what happens, and now you know how to do that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (6)
> **Analogies:** imagine (1), just like (1)
> **Warnings:** be careful (2)
> **Speakers:** - [instructor] (1)

#### [Challenge: Data generation](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980&t=0)** - [Instructor] We've been learning a lot about manipulating data with [SQL](../../Skills/Data%20Science/SQL.md). And hopefully you've been able to try these things out at home and maybe even been exploring beyond the things that I've explicitly shown you. But I want to pause now and take a minute to give you a chance to cement what you're learning through a challenge that will push you. So what I want you to do is to generate some test data for this website. But before we do that, let's first make sure that everything's reset back to its base. So I've shown you this once already in this course but I'll show you again just to make sure that you're able to do this. So what we want to do is have a new SQL editor. So Tool, Open SQL editor. And then let's open the database initialization script. And do Control-A to select it all. And then run that query to make sure that everything's reset back to its baseline. So now that you've done that, I have two challenges that I want you to try out. I want you to see if you can duplicate the rows in the product table so that there's twice as many items available in our store on our little application here. So that's the first challenge. Duplicate the rows in the product table. And then the second challenge is to add a new category to the categories table and call that category testers. And then modify the [products](../../Skills/Software%20Development/Microsoft%20Products.md) table so that all the products that have testers in their name get associated with that new category that you just created. So that's the challenges that I have for you. Try that out. Use all the queries that we've talked about. You should be able to do it with those queries
>
> **[1:38](https://www.linkedin.com/learning/sql-for-testers/challenge-data-generation?u=76281980&t=98)** that we've learned so far. You should be able to solve both of these challenges. So give it a shot and see what you can come up with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (3), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2)
> **CLI Commands:** make (3)
> **Env Vars:** sql (3)
> **UI Navigation:** open the (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Data generation](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=0)** - [Narrator] In the last video, I gave you a challenge to try and generate some data in a few different ways. I hope you tried those challenges out on your own and were able to create the necessary queries. In this video, I'll show you how I went about solving those challenges, so you can see what the solutions would look like. So the first challenge was to duplicate the rows in the product table, so that there are twice as many items available in our store. So we know we want to duplicate, so we're going to need to add more rows to the table, so we're going to need to use an insert into, and we know we're going to need insert into the [products](../../Skills/Software%20Development/Microsoft%20Products.md) table, so we'll include that. And now we don't want to just set each row one at a time manually, so we don't want to do this set manual workflow. Instead, what we will do is we will select *FROM products. And now this is a bit tricky, so hopefully you were able to figure this out, but you can just select all the items from the products table, this will get all the items that are in the products table, and then insert all those items back into the products table again. So let's run this and see what happens. Now that's interesting, we get a unique constraint failed on the product ID. So the product ID column needs to be unique, and the problem is, we're selecting * from products here, we're selecting all the items, including the product ID, and then we're trying to insert those back into the products table. But in this case, the product IDs are, you know, one to 14 and we're inserting all those same product IDs in,
>
> **[1:34](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=94)** so they're not unique. So how can we get around this? Well, instead of doing select star here, we can put in all of the rows, so I've just pasted them in here, when you type in these rows, product ID, the name, the price, the description, the image of stock in the category ID. So these are all the column names in our products table, and this is right now the same as *, right? * just says, get all of these product names. So now we've manually typed them all out, but what we can do here, is instead of just straight up copying the product ID, we can add 14 to it. And what that does, is says, select all of these product IDs, but instead of pasting product ID equals one, one, two, three, four and so on into here, keep all the other values the same, but paste product ID equals one plus 14. So paste 15, 16, 17, and so on into here. So let's run that query and see what happens. And you can see that it ran and 14 rows were affected. And if we refresh our webpage here, and scroll down, you can see that we have in fact duplicated the data. So we've successfully completed that challenge. Now the next challenge was to add a new category to the categories table called testers, and then to modify the products table, so all products with tester in the name, will belong to that category. So we can add a new category, easily enough, we can use our insert into query, and we'll insert it into the categories table.
>
> **[3:10](https://www.linkedin.com/learning/sql-for-testers/solution-data-generation?u=76281980&t=190)** And the values that we will use for this, are five, that's the next available number for the index of this table. And we'll call this category testers, and now we can run this query and it runs just fine as we would expected and it has added that category to the table. But now, we need to update the products table to use that category. So, we will use the update query, and we're going to update the products table, and we're going to set the category ID to be five, so this is the new category ID, the testers category that we've created. And we want to do that, wherever the name field has, so we'll use this like operator, has the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) tester in it, and we need to have that be a wild card. So if it's anywhere, we don't want to just find where it is exactly tester, but anywhere that starts with anything includes the word tester. So percent tester percent, and let's run that query. And now if we go back to our web page and refresh it, you can see that it's added a new category here, the testers category, or we can click on that, and it returns us all these tester t-shirts and of course they're duplicated because we previously duplicated the data in our system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (12), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2)
> **Cross-References:** in the last (1), go back to (1)
> **UI Navigation:** scroll down (1), click on (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Testing SQL Queries

[↑ Back to Table of Contents](#table-of-contents)

#### [Transactions](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=1)** - [Instructor] One of the things that are pretty common in [SQL](../../Skills/Data%20Science/SQL.md) are transactions. Let's take a quick look at how they work. So to start a transaction, you just need to type BEGIN TRANSACTION and then a semicolon. And then once we've begun a transaction, we can start typing in the queries that are going to be part of that transaction, just like we normally would. So we can say here INSERT INTO cart VALUES and then give it some values, so let's say user one is going to have product ID two and also user one is going to have product ID three. And then, we can do a SELECT * FROM cart.
>
> **[0:48](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=48)** And let's go ahead and run this whole thing. So we're going to start the transaction and then we're going to do these queries in that transaction. So we run that and we get back what we kind of expect. We've added these values into the cart table and when we select from the cart table, we see those values. Now, at this point, it just kind of looks like a normal SQL interaction, right? But there's something subtle and pretty powerful going on here. Let's take a look at the cart for user one. So we're logged in here as user one. And if we go look at the cart, there's nothing in the cart. But why is that? Why are those changes that we made not showing up here? Back here, we can see we did a select on the cart table and those [products](../../Skills/Software%20Development/Microsoft%20Products.md) are in the cart but they're not showing up for us in the UI. Well, it's because these changes were made inside a transaction. So a transaction encapsulates all the changes within it. And those changes aren't visible to other users of the database. So when we look at the database as a user on the site, we can't see the changes that are here in this transaction. So now that we've finished a transaction, we have two choices. We can either roll it back. So we can call ROLLBACK, and that will basically undo these changes and they will never be visible to other users. Or the other thing we could do instead is actually go ahead and commit those changes. So let's run this. Let's commit the transaction. And now if we go back here and refresh the page, we can see that those actions are now available, the results of those queries are available to other users.
>
> **[2:21](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=141)** So that transaction has been committed to the database. So let's just take a minute more to think about transactions. They're atomic, which just means that the changes that you do in a transaction are applied all at the same time. So if you have changes to a few different tables, and in this case, obviously, we only have one, but if you're making changes to different tables, and it's important that these changes all happen at the same time. You might use a transaction. So let's kind of look at an example of how that would work. So when we add an item to our cart, we are supposed to reduce that in the products table. So let's say we want to insert into cart values. Let's do 1, 4 and let's update then inside this transaction. We'll update the products table. And we're going to set the stock column to equal stock minus one. And we're going to do that where the productId is equal to four, since that's the one that we've added to our cart here. So when we make this change to the carts table, we want to also update the products table but we want these things to both happen at the same time. Because what if maybe we were updating, doing this call here, we're updating the stock table but when we did stock minus one, it turns out that we're not allowed to have values in that column that are less than zero.
>
> **[3:55](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=235)** And so maybe this caused a negative number to happen. And this query failed. But in that case, and what we would have is our cart would have this item in it but it shouldn't because that item's actually not valid because it's out of stock. So by doing this in this transaction, we can encapsulate both of those into one thing and so if this one fails, we can then roll back the transaction and not do either of these and make sure that our data stays consistent. So you can see how this can be beneficial, how it's helpful in this way but transactions are also useful if you want to try out something on a database without actually applying those changes. So in this case here, we're modifying the database. But if we roll back those changes, they won't actually be applied. So this can be a useful way if you want to test out some queries that you aren't sure about and then just try some stuff and then undo them by doing a rollback if they turn out to be what you didn't expect. So let's run this query for now. And there's one thing I want you to note here. And that is that this transaction now it's active. I haven't yet committed it. We didn't run the commit. We didn't do a rollback. So this transaction is active right now. And when a transaction is active, it can put some locks on your table. So this is something to be aware of. Transactions are powerful and helpful but they can sometimes create locks on some columns or tables. So to see this, let's think about what we did here. In this transaction, we added this item to our cart and we updated the products table.
>
> **[5:28](https://www.linkedin.com/learning/sql-for-testers/transactions?u=76281980&t=328)** Now, that transaction isn't yet live, so if we refresh this, it doesn't show here. We still only have those two items in our cart but now let's see what happens if we remove this item from our cart. When we do that, it's kind of spinning away and eventually, it gets here but if we go back to here, this item hasn't been removed and that's 'cause the query to remove it actually just timed out 'cause our transaction here has a lock on a certain table. So if we rollback this transaction, and try removing this again, it works properly now and our cart has that item removed from it. So there are different ways that you can lock tables with transactions but just be aware that although transactions are a pretty safe way to play around with the database, if there's other users of the database, you want to be aware that what you're doing might be creating locks and so don't leave long-running transactions going on. Transactions, though, are a really powerful tool in a SQL tester's tool belt.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (5), [SQL](../../Skills/Data%20Science/SQL.md) (3)
> **Env Vars:** sql (3), begin (1), transaction (1), insert (1), into (1)
> **Warnings:** be aware (3)
> **CLI Commands:** make (2)
> **SQL:** insert into (1), select (1)
> **Code Identifiers:** productid (1)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)

#### [Field constrains](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=0)** - [Instructor] Let's take a look at field constraints and how they can contribute to quality. So first of all, what are field constraints? They're basically just rules that constrain what you're allowed to do on a given column or sometimes even on the entire table. Now, there's a number of different kinds of constraints that can be applied, so let's kind of take a look at it in SQLite to get a bit of a feeling for how it works. So if we double click on the [products](../../Skills/Software%20Development/Microsoft%20Products.md) table here, it will bring up some of the different kinds of field constraints that can be applied. So, this table here, it's got a primary key constraint applied to the product ID column. And it has a foreign key constraint applied to the category ID column. We can also apply some of these other ones. Unique, check, so on and so forth. But what do these all mean? Well, let's go through them one at a time and see if we can understand them. I'm going to start at the right and work to the left. So the default value here, I think that's pretty self evident. It's just the value that the column will take if no value is explicitly specified. Null is a very common default value but you could set it to be something else if you wanted to. And I'm going to kind of skip over the collate constraint. It's a way to specify how to do comparisons between columns but we won't worry about it too much in this course. So the next one here is not null. So let's modify the name field here. I'll double click and let's set it to have the not null constraint. And let's apply that change to our table. And now let's try and see what that actually does.
>
> **[1:38](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=98)** So if we go to an editor tab, let's say update the products table. And let's try to set the name field to equal null which we've just said we have a not null constraint on it. So, let's see what happens. Where the product ID equals one. And let's run that query. Now we can see that we get this error. The not null constraint failed. So, we're not allowed to assign the name, the product's not named column to have a null constraint. And now let's look at this check constraint. So this is a very powerful constraint. It lets us create kind of custom conditions that we can apply to our table. So, for example let's apply it to the price column here. So, we will choose the check condition and then we'll configure it. And in the condition here, let's say our check is that products.price has to be greater than zero. So, we're not allowed to have negative prices in our table. So we'll apply that and we'll save that. Apply it to the table and now we could create a query to kind of validate that constraint. So let's say update products. And let's set the price to be minus one where product ID is equal to one.
>
> **[3:16](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=196)** Now we can see that the check constraint has failed. It will not let us set the price to be a value that is less than zero in this case. Now, the next constraint that we have here is the unique constraint. That one's probably pretty straight forward as well, right? It just let's us force each value in the column to be unique. So if I was to apply it to the image field here. Okay, and apply it here. And now this is interesting because it's not letting me apply this constraint because adding that constraint to the field will make it actually fail because I actually have duplicate images in that field. So, we've kind of verified that check already and we are not able to actually apply this unless we go through and clean up the table. So, we'll just leave that for now. But that should help to illustrate how the unique constraints works. So the next one that we have here is this foreign key constraint. And we can see it's already applied to this category ID field. Now, this is a really interesting constraint. What it means is that the value in this column, in this category ID column, is unique, but it also means that it comes from another table. So that's the foreign in foreign key. It means a table that is foreign to this table. A table that is some other table. So the foreign key here references the category ID but it references it, as you can see down here, from the categories table. So, the foreign key is getting its value from another table.
>
> **[4:48](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=288)** So that means that a couple of things are true. For example, let's take a look at running a query like this. Update categories and let's set the category ID to be six. Where the category ID is currently one. So, let's run this query. So what we're trying to do here is say find the category ID one and change it to be six instead. We want to just change the category ID. When we do that the foreign key constraint fails. Now, there's no constraint on it in the categories table itself. But the problem is that the products table is using that field, that categories.categoryID field as a foreign constraint. And so we can't modify it in the categories table because that will actually affect the products table. Now, let's take a look at another query that is affected by this. So we'll update the products table again and we'll set the category ID to equal six. Where, and remember we haven't created this category ID six. That's not a category ID that is in that table. And we're going to do this where the product ID equals one. And let's run this query and see what happens. And our foreign key constraint fails here as well. And now that's because it's trying
>
> **[6:22](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=382)** to set this category ID to a value, to six, and that value six does not exist in the categories table. So if we were to look at all the items in the categories table from categories.
>
> **[6:45](https://www.linkedin.com/learning/sql-for-testers/field-constrains?u=76281980&t=405)** We would see that there's only five categories in our table right now. So, we can't set it to category ID six because that category doesn't exist in the categories table. And let's take a look at the final constraint type here. The primary key. So the primary key constraint is really just a combination of the unique and the not null constraints. So basically, it means we have to have a value and that value has to be a unique value. So we can't set the product ID to be null and we can't set it to be a value that is already in the table. So, we've see all these different kinds of constraints that you can have and you could probably already kind of get an idea for the value of them and quality in testing. Carefully designed constraints can really help reduce the risk of data corruption and invalid data showing up in your system. I've personally seen instances where invalid data was in production tables that required a ton of work to clean up and the bug could have easily been prevented if proper constraints had been applied that prevented that invalid data from getting there in the first place. So, it's worth thinking carefully about what constraints it makes sense to have on a table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (7)
> **Definitions:** is a  (3), means that (2)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** click on (1), go to (1)
> **Analogies:** for example (2)
> **Code Identifiers:** categoryid (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Schema validation](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=0)** - [Instructor] You might have heard about database schemas before, but what are they? Well, essentially it's the layout and structure of all the data in your database. In our sample application, we've got a few different tables and you've probably noticed that they're connected to each other in various ways. The schema is what defines the structure and the connections between all the data in those tables in our database. That's all a little abstract, so let's draw it out. I have a picture here with the four tables in our system. So part of a schema is just laying out these tables with the various columns in them, and that's what I've done here. I've got these four tables. I've got the list of columns that is in each of those tables. But we know that there's some relationships between these tables. So the category ID here is linked to the category ID in the [products](../../Skills/Software%20Development/Microsoft%20Products.md) table. And the cart is also linked to the other table, so the cart user ID is linked to the user's table, and the product ID is linked to the products table as well.
>
> **[1:02](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=62)** So this schema that we have on the screen now is sometimes called an ERD, or an Entity Relationship Diagram, as it defines the relationships between the various entities in the database. Now, it's all fine and dandy to have a nice schema laid out like this, but what's the point of this? How does it help you as a tester? Well, I think there's one pretty obvious benefit to something like this. It lets you see the big picture and understand a bit better what's going on with the data in the system. If you're struggling to figure out how the data's stored in various tables in your system, it could be helpful to draw out a schema like that to get a handle on how everything relates together. The very act of creating something like this can often give you insights into tests that you might want to do, or insights about how the data works in your application. For example, in this schema, you can see that the cart is linked directly to both the products and the user's table, but it's not linked to the categories table. Now, what if you wanted to display information about the category name during checkout? Well, you couldn't go directly from the cart table to the categories table 'cause we don't have a direct link there. So, in other words, we couldn't just use a table join to get that information. Instead, we'd have to go to the products table first, and then find the category ID from the categories table that matches with it, and then use that information to get the category name. Now, there's nothing wrong with doing something like that, but it's something that's worth noting from a testing perspective. If we see information that needs to come from tables that are not directly linked to each other, then we might want to raise that because queries like that could get a bit slower
>
> **[2:35](https://www.linkedin.com/learning/sql-for-testers/schema-validation-20260933?u=76281980&t=155)** and could add some complexity to what's going on. Now, this is just one simple example on a simple schema, and most of the applications that you work with are going to be more complex than this, but I hope it illustrates some of the things that you can do. It can give you insights into tests that you can run without even interacting with the actual system itself. Sometimes you can just use a model of the system to help you build testing insights. Stuff like this can also help guide, and inform, and expand the testing that you're able to do. So if you feel like you don't really understand what's going on, try making an entity relationship diagram even on a piece of paper, and see what you can figure out by looking at something like that. You might find that this is a helpful tool for testing [Databases](../../Skills/Software%20Development/Databases.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (4), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Analogies:** picture (2), for example (1)
> **CLI Commands:** find (2)
> **Definitions:** in other words (1), is a  (1)
> **Env Vars:** erd (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Security testing](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=0)** - [Instructor] The [OWASP](../../Skills/Cybersecurity/OWASP.md) Foundation maintains a list of the top 10 [Web Application Security](../../Skills/Cybersecurity/Web%20Application%20Security.md) risks. This list is known as the OWASP Top 10. And number one on this list is injection. You're probably already well aware of the fact that [SQL](../../Skills/Data%20Science/SQL.md) systems are vulnerable to injection flaws, but how would you go about testing for them? Well, let's take a look at an example of a SQL injection flaw in this application, and see if we can learn anything about testing them. For this example, we're going to use the Shop by Category page, and you can see here in the URL that we have this query parameter. So we've got a question and categoryId equals, and that's what's being used to determine which [products](../../Skills/Software%20Development/Microsoft%20Products.md) to show us. So it queries the categoryId, and where it equals one, it returns us back those products. So in this case, one is men's, and it returns those products for us. So what's happening here is that in the background, this query is getting sent to the [SQL server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) and it's being told here's the categoryId I want you to go get for me. But what if we change this categoryId. Will the query accept some potentially invalid inputs to this? Maybe we could get it to show us some data that we're not allowed to see. So let's try this. Here, we have the categoryId equals one, but let's add something to the end of it. So we could say one OR one equals one, and let's send that. And you can see that we're getting back a bunch of products that are not in the men's category. In fact, we're getting back all of the products,
>
> **[1:35](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=95)** and it looks like it's repeated four times. That's because there's four categories. So what's going on here? Why did we get back this other information by adding that OR one equals one to our query? Well, what we're doing essentially here is saying, get me the products where the categoryId, this expression, categoryId equal one is true, or where the expression one equals one is true. Now the expression one equals one is obviously always true. So essentially what this does, is say, give me back every product that you have in the system. Now, in this particular application, it's not really that big of deal because we don't have any categories or products that are hidden. So in this case, you get a weird set of pictures here, but none of this is private information or hidden information. But imagine if there was a category called upcoming releases or something like that, and we wanted to keep products hidden in that category and not show them to users. In this case, if someone did a query like this, we could maybe potentially be exposing our plans to our competitors or something like that. So let's take a second to dig into this just a little more and understand what's going on in the backend that allows something like this to happen. So, essentially, what the application is doing on the backend is constructing a query that looks something like this, where it's selecting some data. So here, we're selecting a bunch of data from the products and the categories table, and we're doing it where the products categoryId equals the categories categoryId, and, this is the important part, where the categories categoryId is equal
>
> **[3:09](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=189)** to the one that we've specified. So this categoryId here corresponds to what we pass in in our query parameter here. So in this case, one OR one equals one. Normally, it would just be a number one, two, three, or four, but that categoryId corresponds to that. And then what is happening is, whatever information we get from the user is put into this query. So, in the case of the OR query that we have, we ended up with a query that said where the categoryId equals the categories categoryId and the categories categorId equals one OR one equals one. And so this flaw can happen because we are putting user entered data into a query without cleaning it up properly. Now, how do you go about finding problems like this? Well, one thing is just to think about the different kinds of user inputs that you can have. So we're used to thinking about user inputs in terms of something like a form or somewhere where users can type data in, but things like this, a query parameter, that's actually a user input. We clicked on that. We are the ones who specified that, we are the ones who can modify it in some sneaky ways, maybe, but we can modify it. And anywhere that users can modify the data that's going into the system, it's a spot where we could potentially have a SQL injection flaw. However, it's very difficult to actually go through and test every single possible way and think of every possible thing and validate. At a black box exploratory level like this,
>
> **[4:45](https://www.linkedin.com/learning/sql-for-testers/security-testing?u=76281980&t=285)** it's difficult to validate whether or not we're vulnerable to SQL injection. I really do need to dig into the code to find these things and make sure that we're using best practices, but as a test or doing the kind of testing that we're talking about in this course, you can still keep your eye out for some of these things. When you see something like this, a query parameter, or even a form or something like that, play around with it a bit, see if it might be vulnerable to something like this. So, obviously, SQL injections are complex topic that could take up a lot more time. In fact, I think it could be an entire course all on its own, but there are many good resources on the internet if you want to dive into it a bit more. [Google](../../Glossary/Service/Google.md) around, look up some resources. But an example here is PortSwigger. It's got some details about some different types of SQL injection and some examples that walk through how they work and explain a little more about SQL injection. So if you want to dive in, take a look at something like this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (10), [SQL](../../Skills/Data%20Science/SQL.md) (7), [OWASP](../../Skills/Cybersecurity/OWASP.md) (2), [Web Application Security](../../Skills/Cybersecurity/Web%20Application%20Security.md) (1), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1)
> **Code Identifiers:** categoryid (14), categorid (1)
> **Env Vars:** sql (8), owasp (2), url (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** known as (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Performance testing](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=0)** - [Instructor] In the toy application that we've been playing with, performance is measured in milliseconds, but out there in that scary place called production, there can be vast amounts of data and huge [Databases](../../Skills/Software%20Development/Databases.md). I've seen queries where runtime is measured in minutes or even hours when dealing with tables that have millions of rows of data. Obviously, in cases like that, the performance becomes important, but how does one go about testing the performance of a [SQL](../../Skills/Data%20Science/SQL.md) query? In general, this is a pretty specialized field that goes beyond what we can cover in this course, but here are a few tips to consider as you think about this. One thing to consider is the context that you're in. If you're dealing with production databases, you don't want to be causing slowdowns that could affect your clients. Be careful about the context in which you do performance testing. You might remember that earlier in the course, we learned about the order of execution. This is the part where that becomes important. If you're querying a large data set, walking the order of execution in the query can help you see if you're narrowing down your query as you go, or if you're constructing it in a way that will not be performing. On top of that, there are a few other general points to keep in mind, OR statements can tend to be expensive. With an AND the number of things to check is reduced since you can use the reduced data set for the second query. But with an OR, you usually have to look at the entire table twice. For example, I've created a dummy dataset where I duplicated items in the [products](../../Skills/Software%20Development/Microsoft%20Products.md) table a few times to get a slightly bigger table, and I've opened up the SQLite3 command line tool here, and I've enabled the timer. Now, when I run this query here,
>
> **[1:36](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=96)** you can see that it takes around a half a second to do it. But now, let's try running that same query, but using an OR instead of AND. And now you can see that it takes probably about 20% longer to do that. Sometimes, of course, you need to select an OR, but be aware that when you do so there might be performance implications to using it. Another thing to watch out for is wildcard searches. So these are those string searches where you have something like percent, something percent, and those kinds of searches can also be quite slow. So there's something else to be careful of. Now, as I've said before, we can only scratch the surface of performance and databases, but one thing that's worth touching on before we leave this topic is the idea of indexing. You might have heard of this before. It essentially, when index does is creates a way to make a column more easily searchable. So here, I'm on the Database Structure tab and I can create an index. If I choose, say the price column from the products table. I can add an index to it if I wanted to, essentially it would create a mapping in the background. You wouldn't really see it, but the database would create maps of all the prices that were, say in the range of zero to $5. They would map to one key and the prices that were in the range of five to 10 would map to another key and so on. That way, if we have a query that's looking for all the products, that say, have a price of 4.99, it only needs to look through the subset of the data
>
> **[3:09](https://www.linkedin.com/learning/sql-for-testers/performance-testing-20266622?u=76281980&t=189)** that has prices from zero to $5 instead of looking through the entire dataset. So this is a very common and powerful way to optimize databases, but take a second to think about what risks might come with this as well. Well, if you think about it, there's a cost to creating and maintaining an index on a column. As new items are added to the table, the database engine has to figure out where in the index they fit in and make sure that everything's mapped correctly. This obviously can take a bit of time to do, and so having an index can cause a slight performance hit when you're updating or adding new items to a table. So this means that you want to make sure that your indexes are aligned with the common queries that you use on your table. You'll get improved query speed, but if you almost never create a condition that checks against the price column, you probably don't want to index that column. On the other hand, if you frequently query against that column, you probably do want to index it. There's much more to performance in databases, but hopefully this quick survey has been able to give you a taste of some of the kinds of things to think about as you consider performance concerns in [Database Testing](../../Skills/Software%20Development/Database%20Testing.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (5), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Database Testing](../../Skills/Software%20Development/Database%20Testing.md) (1)
> **Warnings:** be careful (2), keep in mind (1), be aware (1), watch out (1)
> **CLI Commands:** make (3), sqlite3 (1)
> **Definitions:** is a  (2), means that (1)
> **Env Vars:** sql (1)
> **Versions:** 4.99 (1)
> **Cross-References:** earlier in (1)
> **Tools:** command line (1)

#### [Challenge: Database tests](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=0)** (electronic music)
>
> **[0:05](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=5)** - [Instructor] This course is coming to an end and as I wrap up, I want to give you the chance to pull everything together in a final challenge. This challenge will push you to put into practice many of the things that you've been learning about testing [Databases](../../Skills/Software%20Development/Databases.md) and testing with databases. In order to push you a little, I've actually created a new database for this challenge. To use that database, we'll need to disconnect from the [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) one that we have and then we can add a database. So we'll go here. In the exercise files for this, you should find a database called challenge.db. Open that database and connect to it. So right click on it and connect to it. You can see the tables that it has here. This instead of an e-commerce system is modeling a school system. Very basic, obviously. But we've got a classes table, which defines what classes are available, the names of the classes that are available. Then we have a users table which defines some information about the users in our system. We have a roles table, which defines what kind of role users can have. So students, teachers, administrators, and so on. And then enrollments, which kind of maps what students are in what course and what role they have in that course. For this challenge, I want you to explore this data set and make sure you understand how it's set up and then try to answer some questions about it. So the first thing that you're going to do is draw out the schema for this database. Make sure you understand how it works. Draw a picture that shows it all. You can do that on paper,
>
> **[1:38](https://www.linkedin.com/learning/sql-for-testers/challenge-database-tests?u=76281980&t=98)** you can do that digitally, however you want to. But draw out a schema for this database first. Then once you've done that, try to answer some of these queries, some of these questions that we have. The first one is what are the names of the students enrolled in the math class? The next one is what classes is the person with the username ehorstead2 enrolled in. And then I want you to modify some data. So a couple of challenges just around modifying some data. First of all, use a transaction to create a new class and enroll a teacher and two students in that class, and then check the names of the students that have been enrolled before committing that transaction. So a user transaction, do all this stuff in one transaction. The next thing I want you to try to do is to change the role of the teacher who's enrolled in the art class to be an administrator in that class. So you've got a few different challenges here, kind of a bunch of pieces to this challenge. Hopefully it's broken up in a way that will allow you to kind of cement all the things that we've been learning throughout this course. Pull 'em all together and use them in a new setting for you so that you'll be challenged and pushed and able to apply the things that you've been learning in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (2), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (2)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** picture (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)

#### [Solution: Database tests](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=0)** - [Instructor] The first challenge I gave you in the last video was to create a schema for these tables. So hopefully you were able to create something that looks kind of like this. Probably the most interesting thing to note about this schema is that this enrollments table is connected to all the other tables. So you'll probably need to do a bunch of joins when we want to get data from multiple tables. None of these tables, the roles users and classes tables are connected to each other. They're only connected through the enrollments table. For the next challenge, I asked you to find the name of the students enrolled in the math class. So let's try to break this down. So first of all, we know that we need to get the student names and we're going to get those from the users table. So users dot first name. From users. And now we need to get this for students that are enrolled in the math class, so we'll have to join with the enrollments table. So let's do a join with enrollments and we're going to join it on the users dot user ID being equal to the enrollments dot user ID. Now the enrollments table, if we look at what fields it has, only has the class code and not the class name. So we need to do another join onto the classes table. So let's join classes. So we'll join this with the classes and in this case, we're going to join it on the spot
>
> **[1:36](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=96)** where classes dot class code is equal to the enrollments dot class code. And then we want to check for the math class. So we'll say where the classes dot class name is equal to math. But we also need to check on the role. So this will give us all the users that are enrolled in the math class, regardless of if their students are teachers. Since we want to check on the role as well, we actually need to do another join here. So let's do a join onto the roles table. And we're going to join this one on the roles dot role ID being equal to the enrollments dot role ID. And we want to get it where this, so we're going to put an and here because we also want where you're enrolled in the math class and where your role ID is the teacher. So we'll say where roles dot role type equals student, not teacher. All right. And I think at this point we have it all together. So let's try running this query and see what happens. And there we go. We get back the two students that are enrolled in the math class. The next challenge we were given was to figure out what classes the person with the username ehorsetead2 was enrolled in.
>
> **[3:09](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=189)** So once again, let's break this down. We'll start by selecting the classes. So from the classes table, we will select the class name, and that's going to be coming from the classes table. And once again, there's no direct link from the classes table to the user table. So we have to do a join through the enrollments table. So let's do that. Let's join it with enrollments and we're going to join it on the classes dot class code being equal to the enrollments dot class code. But now we also need to get the username. So let's join once again to the user's table. And in this case, we're going to join it on the users dot user ID being equal to the enrollments dot user ID.
>
> **[4:05](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=245)** And then the thing that we want to check for is our username. So where users dot username is equal to ehorsetead2.
>
> **[4:16](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=256)** And let's try running this. And you can see that this user is enrolled in the math and the history class. For the next challenge, we were asked to create a transaction that will make a new class and enroll a teacher and two students in that class. So we're doing a lot here. So let's start with beginning a transaction. And then the first thing we want to do is create a new class. So we'll say insert into classes
>
> **[4:50](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=290)** and the values that we're going to insert are, well, we need a class name. Let's create a new ID for it. So we'll do ID six and we'll call it gym class. So now that we've got something to create the class, we want to create some enrollments into this class. So let's do insert into enrollments and we'll insert some values here. So we know for the enrollments table, we need a class code, a role ID, and a user ID. So we know the class code is six 'cause that's what we just created. For the roles, if we look at the roles table, we can see that student role is one. And if we look at the user's table, we can just get those user IDs. So we'll say the role ID is one, and we'll assign that to user one. And then let's make another student. So also role ID of one assigned to user two. And then let's make a teacher. So role ID two assigned to user three. All right. And then we can do commit to commit our transaction. And let's try and run this. You can see that it successfully inserted this new class for us.
>
> **[6:23](https://www.linkedin.com/learning/sql-for-testers/solution-database-tests-20263732?u=76281980&t=383)** And for the final challenge, we need to change the role of a teacher that's enrolled in the art class to be an administrator in that class. So we're going to need to update the enrollments table, and we want to set the role ID to be that of an admin. And so if we look at the roles table, we can see an admin has a role ID of three. So we're going to set it to equal three, but we only want to do that in the case where the role ID is currently a teacher and where the teacher is enrolled in the art class. So if we look at the classes table, we can see that art has an ID of four. So we'll say where the class code is equal to four and let's run this. We can see that that successfully updated the teacher to be an admin. So some of these challenges were probably a bit, well, challenging, but hopefully you were able to figure most of them out.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** select the (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/sql-for-testers/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/sql-for-testers/next-steps?u=76281980&t=0)** - [Instructor] Well, it's been quite the ride, hasn't it? It's time to take a minute and celebrate what you've done in this course. So, what have you learned in this course? Well you've learned how to execute [SQL](../../Skills/Data%20Science/SQL.md) queries that'll allow you to validate all kinds of data. You've also learned how to modify and change data so that you can set up test scenarios. But you haven't only learned how to use SQL to help you with testing, you've also learned some things about SQL that you'll be able to use in directly testing SQL queries. You've learned how transactions work and how to map out a database schema. You've learned how to think about performance testing and database security. Now, of course, we've skimmed over a lot of these topics, but as I said at the start of this course, SQL is a hugely popular language. If you want to learn more on any of these topics, search through this Learning Library or follow up with some of the resources that I've shared throughout this course. So now that you have a grasp of how to use SQL queries, you should have the foundational knowledge that you need to dive deeper into this topic. And you should certainly have the knowledge that you need to enhance your day-to-day testing abilities. So thanks for spending some time with me in this course, and happy testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (6)
> **Env Vars:** sql (6)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Dave Westerveld](../../Instructors/Software%20Development/Dave%20Westerveld.md)

## Resources

- Exercise files available

## Skills Covered

- SQL
- Database Testing

## Path Context

### In [Getting Started with Software Testing](../../Paths/Software%20Development/Learning%20Paths/Getting%20Started%20with%20Software%20Testing.md)
← [Java- Testing with JUnit](Java-%20Testing%20with%20JUnit.md) | **12 of 12**

## Appears In

- [Getting Started with Software Testing](../../Paths/Software%20Development/Learning%20Paths/Getting%20Started%20with%20Software%20Testing.md)

## Related Courses

_Courses sharing skills:_

- [Advanced SQL Project- Design and Manage a Database](../Data%20Science/Advanced%20SQL%20Project-%20Design%20and%20Manage%20a%20Database.md) — SQL
- [Practical Database Design- Implementing Responsible Data Solutions with SQL Querying](../Data%20Science/Practical%20Database%20Design-%20Implementing%20Responsible%20Data%20Solutions%20with%20SQL%20Querying.md) — SQL
- [SQL Server Fundamentals- Master Basic Query Techniques](../Data%20Science/SQL%20Server%20Fundamentals-%20Master%20Basic%20Query%20Techniques.md) — SQL
- [Advanced SQL for Data Science- Time Series](../Data%20Science/Advanced%20SQL%20for%20Data%20Science-%20Time%20Series.md) — SQL
- [Intermediate SQL- Data Reporting and Analysis](../Data%20Science/Intermediate%20SQL-%20Data%20Reporting%20and%20Analysis.md) — SQL

---

[↑ Back to top](#)