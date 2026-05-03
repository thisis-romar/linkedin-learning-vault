---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-sql-project-design-and-manage-a-database
url: "https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database"
duration_minutes: 144
duration: 2h 24m
level: Advanced
updated: 8/20/2024
learners: 22227
skills:
  - Extract, Transform, Load (ETL)
  - Database Design
  - SQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQF3hIFhC6uk-A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1722368507963?e=2147483647&amp;v=beta&amp;t=jrn578U-t28Q6qjuokEAWvXECBVUH6JviCqU4OpqfKA"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Database Administration Skills]]'
prev_courses:
  - '[[Advanced SQL for Query Tuning and Performance Optimization]]'
next_courses:
  - '[[Cloud Architecture- Core Concepts]]'
path_nav: '[{"path":"Advance Your Database Administration Skills","position":9,"total":11,"prev":"Advanced SQL for Query Tuning and Performance Optimization","next":"Cloud Architecture- Core Concepts"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/extract-transform-load-etl
  - skill/database-design
  - skill/sql
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Advanced%20SQL%20Project-%20Design%20and%20Manage%20a%20Database.md)

![Advanced SQL Project: Design and Manage a Database](https://media.licdn.com/dms/image/v2/D560DAQF3hIFhC6uk-A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1722368507963?e=2147483647&amp;v=beta&amp;t=jrn578U-t28Q6qjuokEAWvXECBVUH6JviCqU4OpqfKA)

# Advanced SQL Project: Design and Manage a Database

> Learn how to design, implement, and optimize databases using SQL and ETL processes. Review the nuances of database needs and planning, and then conceptualize a music database, identify requirements, and create initial conceptual models. Explore normalization techniques, designing data pipelines, and applying advanced error handling strategies. Practice writing a range of SQL queries from basic to 

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database) | 2h 24m | Advanced | 22K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Advanced SQL project intro](#advanced-sql-project-intro)
  - [What you should know](#what-you-should-know)
  - [Using the course exercise files](#using-the-course-exercise-files)
- [**Module 1: Understanding Database Needs and Planning**](#module-1-understanding-database-needs-and-planning) (4 videos)
  - [Conceptualizing the music database](#conceptualizing-the-music-database)
  - [Identifying requirements and purpose](#identifying-requirements-and-purpose)
  - [Brainstorming entities and relationships](#brainstorming-entities-and-relationships)
  - [Creating an initial conceptual model](#creating-an-initial-conceptual-model)
- [**Module 2: Implementing Database Design**](#module-2-implementing-database-design) (4 videos)
  - [Introduction to database normalization](#introduction-to-database-normalization)
  - [Normalization forms](#normalization-forms)
  - [Applying normalization](#applying-normalization)
  - [Refine normalized schema](#refine-normalized-schema)
- [**Module 3: Extract, Transform, Load (ETL) Basics**](#module-3-extract-transform-load-etl-basics) (2 videos)
  - [Overview of ETL processes and tools](#overview-of-etl-processes-and-tools)
  - [ETL in the music database](#etl-in-the-music-database)
- [**Module 4: Loading Data into the Database**](#module-4-loading-data-into-the-database) (4 videos)
  - [Understanding data pipelines](#understanding-data-pipelines)
  - [Building the data pipeline](#building-the-data-pipeline)
  - [Validation techniques](#validation-techniques)
  - [Advanced error handling and logging](#advanced-error-handling-and-logging)
- [**Module 5: Writing Basic to Complex SQL Queries**](#module-5-writing-basic-to-complex-sql-queries) (2 videos)
  - [Introduction to SQL queries (basic, aggregate, joins)](#introduction-to-sql-queries-basic-aggregate-joins)
  - [Exploring and analyzing music data](#exploring-and-analyzing-music-data)
- [**Module 6: Query Optimization and Large Dataset Management**](#module-6-query-optimization-and-large-dataset-management) (2 videos)
  - [Techniques for optimizing SQL queries](#techniques-for-optimizing-sql-queries)
  - [Handling and querying large datasets efficiently](#handling-and-querying-large-datasets-efficiently)
- [**Module 7: Bringing It All Together**](#module-7-bringing-it-all-together) (2 videos)
  - [Final project](#final-project)
  - [Final project solution](#final-project-solution)
- [**Conclusion**](#conclusion) (3 videos)
  - [Reflect on the knowledge and skills acquired](#reflect-on-the-knowledge-and-skills-acquired)
  - [Career opportunities](#career-opportunities)
  - [Further learning resources and pathways](#further-learning-resources-and-pathways)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Advanced SQL project intro](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/advanced-sql-project-intro?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/advanced-sql-project-intro?u=76281980&t=0)** - Did you know that businesses report significant improvements in [[Decision-Making]] and advanced data analytics? Learning these skills can increase your efficiency, making you an invaluable asset. Hi, I'm Walter Shields. As a best-selling author of the number-one book on [[SQL]] and a [[LinkedIn]] Learning instructor have helped thousands of learners transition to data analytics and [[Data Science]]. Over 250,000 learners have completed my SQL Essentials Training Course, and many have asked for the next step. Well, this is it, a course designed to elevate your SQL skills. In this course, you'll gain hands-on skills to design efficient and scalable database schemas, create automated ETL processes for data handling, improve query performance with indexing and partitioning, and write advanced SQL queries for deep data insights. So get ready to transform your skills and unlock new opportunities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Decision-Making]] (1), [[LinkedIn]] (1), [[Data Science]] (1)
> **Env Vars:** sql (4), etl (1)
> **Speakers:** - did (1)

#### [What you should know](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/what-you-should-know?u=76281980&t=0)** - [Instructor] For this course, here's a heads up on what you should know. There are a number of exercise files accompanying this course, and most of them come in two versions, a completed version, and an incomplete template with just instructions. Now this setup is designed to give you the flexibility to choose your own learning path. You can start by referencing the completed version, which I will be using in the course, and this allows you to see the end result and understand the goal before you try your hand at it. Alternatively, you can begin with the template and use the completed version to check your work. In addition to these files, there's a completed database file that includes all the queries I'll be demonstrating throughout the course. This resource is invaluable for verifying your progress and making sure you're on the right track. The primary objective of this course is for you to design and build a database from scratch. That being said, I highly recommend taking the approach of building the database step by step as you watch the videos. This hands-on method will give you a competent grasp of the skills and something tangible to show when you're done. By the end of this course, you'll have built a fully functional database
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/what-you-should-know?u=76281980&t=94)** showcasing your new-found skills. So dive in, stay engaged, and let's make this an amazing learning experience.

> [!info]- Semantic Content
>
> **Exercise Files:** template (2), exercise files (1)
> **CLI Commands:** make (1)
> **Warnings:** heads up (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Using the course exercise files](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/using-the-course-exercise-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/using-the-course-exercise-file?u=76281980&t=0)** - [Instructor] In front of you is the full list of exercise files that accompany this course. Now, throughout the course, I'll be indicating when you should reference each of these files to enhance your learning experience. As you can see, we have the template and complete files. We also have the raw CSV data files. We have the completed database file and the ETL pipeline script file. Now, to get these files downloaded to your machine, here are the steps you take. First, go to the Related to this course area, then click on Show all next to Exercise files. Click Download next to the zipped file. Once this file has downloaded to your computer, go to the location where you've downloaded it to, right-click to unzip the contents of this file. If you are on a Mac like myself, you would need to double-click to unzip the contents of the file. Once it's unzipped, then you go to that unzipped folder, and there you'll see the full list of files that you see here displayed in front of you. Now, these files are key to your hands-on learning experience, and as I mentioned, you can choose to start with the completed versions to see the final result, then work with the templates to practice and solidify your skills.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (3), click on (1), right-click (1), double-click (1)
> **Exercise Files:** exercise files (2), template (1)
> **CLI Commands:** unzip (2)
> **Env Vars:** csv (1), etl (1)
> **Speakers:** - [instructor] (1)


### Module 1: Understanding Database Needs and Planning

[↑ Back to Table of Contents](#table-of-contents)

#### [Conceptualizing the music database](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/conceptualizing-the-music-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/conceptualizing-the-music-database?u=76281980&t=0)** - [Instructor] So welcome to the first step in designing a robust music database for iMedia, the digital music company. As a database modeler and data analyst, you'll be instrumental in building a system that manages vast amounts of data effectively for iMedia. So let's start with the definition and the purpose of a database. Now, officially, a database is a structured collection of data. Think of it as a digital filing cabinet where information is stored and organized for easy access in management. Now, the purpose of this database for iMedia is to help them manage and access extensive musical data efficiently, improving operations and their [[User Experience (UX)|user experience]]. Let's now look at an overview of the music database and its benefits. So specifically, a music database stores details about artists, albums, tracks, and genres. This structure helps iMedia manage their music catalog, streamline operations, and enhance user interactions. Some of the benefits include efficient [[Data Management]], enhanced search and retrieval capabilities, and as we mentioned, a better overall user experience. Up next, let's now install the software
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/conceptualizing-the-music-database?u=76281980&t=96)** that we're going to be using throughout this course. It's going to be SQLite, and we're going to install two components of this software. Okay, let's now get SQLite installed on your machine. Now for this course, we're going to be using two different software to operate SQLite. First, we're going to navigate to [SQLite.org](https://SQLite.org) and download and install the SQLite Command Line Tool. To do so, you want to select the Download option while you're on [SQLite.org](https://SQLite.org), and scroll down to the pre-compiled binaries for Mac, if you are on a Mac machine like myself, and click on the File option there. Once you have downloaded that file, you want to navigate to where it has downloaded, your Download folder. Then double-click on that zipped file. That is going to unzip the file, and within the unzipped file, you'll see the three options that are there. The one that you're interested in is SQLite 3. Double-clicking this file starts the command line prompt. And with that action, you have successfully installed SQLite Command Line Tool. Now if you are on a [[Windows]] machine, you want the option right under the Mac option,
>
> **[3:10](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/conceptualizing-the-music-database?u=76281980&t=190)** which is the pre-compiled binaries for Windows, and you want the very last file, SQLite tools Windows 64. You want to do the same action. Download this file, navigate to your Download folder, unzip that file, and there you'll see the SQLite 3 file that you will be needing. Okay, now let's move on to installing DB Browser for SQLite, which is the graphical user interface for SQLite. To do so, you want to go to SQLite [browser.org](https://browser.org), and click on the Download option from the menu items. Here, you'll see the various installations depending on your operating system. For Windows, you'll see that there is a standard install for 64-bit Windows. This is the version you'll most likely need if you're working with a newer machine. For the Mac folks, you want to scroll down to where it says macOS, and select the option that's applicable to your Mac. I have a newer Mac, which is with the M1 chip, and therefore I need the Apple Silicon version. Once I click on that, I'm going to go to my Download folder again, and here I'll see the file that has downloaded the DMG file. For me to install this, I just simply double-click,
>
> **[4:45](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/conceptualizing-the-music-database?u=76281980&t=285)** and I'm presented with the following screen, simply dragging the DB Browser for SQLite from the left to the right installs this particular software. And with that, I have fully installed DB Browser for SQLite. Now for the Windows folks, you're doing the exact same action. And with that, you will also have DB Browser installed on your machine. You're now ready to take that first step of creating the basic music database. So let's fire up DB Browser for SQLite by navigating to Finder, Applications, then selecting DB Browser if you are on a Mac. If you're on a Windows, you want to go to Start, Programs, and then find DB Browser for SQLite. In either case, you'll be presented with a screen just like this one when you fire up that software. Now to save our iMedia music database, we're going to set up a new database. Let's click on that new database item in the menu options, and under Save As, I'm going to type out the name iMedia Music database, I'm going to select my location as Documents to save, and I'm going to leave everything else defaulted, meaning the file type is going to be saved as SQLite. I click on Save,
>
> **[6:20](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/conceptualizing-the-music-database?u=76281980&t=380)** and I'm presented with this Edit table definition. For now, we're simply going to click on Cancel at this point. At this point, we have created the shell of our database, iMedia Music DB, and you can take a look in the database structure of DB Browser, and now see that we do have a few items, tables, indices, views, and triggers. At the moment, they all have zero, indicating we simply have a structure. We do not have any contents in our database. So great job. Up next, we'll start working with our newly created database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (7), [[User Experience (UX)|User experience]] (2), [[Data Management]] (1)
> **UI Navigation:** click on (6), navigate to (2), select the (2), scroll down (2), double-click (2)
> **Code Identifiers:** imedia (7), macos (1)
> **Prerequisites:** install (5), set up (1)
> **CLI Commands:** unzip (2), find (1)
> **URLs:** [sqlite.org](https://sqlite.org) (2), [browser.org](https://browser.org) (1)
> **Tools:** command line (3)
> **Analogies:** think of it as (1), just like (1)

#### [Identifying requirements and purpose](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/identifying-requirements-purpose?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/identifying-requirements-purpose?u=76281980&t=0)** - [Instructor] Now that you've set up the foundation of your music database, let's dive into identifying some specific requirements needed to make it functional and effective. So requirements are gathered from stakeholders. To build a useful database, we need to understand what stakeholders, and that is the iMedia team, expect and require from the database. Now, this takes place in the form of interviews and questionnaires. Interviews are conducted with key stakeholders to gather their needs and expectations. Questionnaires are also used to make sure that all of the important aspects are covered. So questions such as what data needs to be stored or how will users interact with the database, or what reports or queries will be needed. These are all very important in shaping the requirements that we are creating for our database. Equally as important is determining the scope of your database. Here is where you define the boundaries of what your database will cover. Now, specifically for iMedia, they're interested in storing information about artists, albums, tracks, genres, and user interactions such as reviews and ratings. Now, within your exercise files, there is a completed [[Requirements Gathering]] template.
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/identifying-requirements-purpose?u=76281980&t=96)** If you open this file, you'll see some of the fields that we're seeing in front of us here. You have a requirement ID, followed by the description, who requested this requirement, the priority of it, and any associated notes. Now, this is the type of document that you would enter into a stakeholder meeting and you leave with all of this information filled out, take a moment to get familiar with this document and familiar with the requirements that are important to the design and the development of our database. Having gathered and documented the requirements of your music database, let's now define its purpose and outline its key functionalities. Now, the objectives and the goals of our music database must be clearly stated. Some of the objectives include improving the music catalog management, enhancing search capabilities, and supporting user interactions. It's important to have a clear purpose, which makes sure the [[Database Design]] aligns with business goals. Now, equally as important is stating the key functionalities of your database. Some examples of this are storing detailed artist profiles, managing album and track information, supporting user reviews and ratings, and enabling advanced search and filtering options.
>
> **[3:13](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/identifying-requirements-purpose?u=76281980&t=193)** Up next, we'll take a look at the document which states the official purpose of our iMedia music database. Reference the iMedia database purpose completed document in your exercise files folder. Once you open this document, you'll see much like what you see in front of the screen. Here you see objectives and goals of the music database with a official statement stating what that purpose is. And here, the purpose of the iMedia music database is to provide a comprehensive, efficient, and user-friendly system for managing and accessing musical data. This database aims to enhance music catalog management, improve search capabilities and support user interactions, ultimately contributing to iMedia's business success. Added to this are some key functionalities your database should provide, and that is store detailed artist profiles, manage album and track information, support user reviews and ratings, and enable advanced search and filtering options. Take a moment to get familiar with this document so that you can rightsize your approach going forward in the building of your music database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Requirements Gathering]] (1), [[Database Design]] (1)
> **Code Identifiers:** imedia (6)
> **Exercise Files:** exercise files (2), template (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Brainstorming entities and relationships](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/brainstorming-entities-and-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/brainstorming-entities-and-relationships?u=76281980&t=0)** - [Instructor] Now that you have your database's purpose defined, let's now move on to identifying the key entities involved and how they relate to each other. So let's start with entities. What are they? Well, they are the main objects we need to store information about. For a music database, these include artists, which are musicians or bands, albums, which are collections of tracks, tracks themselves, which are individual songs, and genres, which are categories of music. Now, identifying the right entities makes sure that your database can effectively organize and manage data. So with the key entities defined, let's now define the relationships between these entities. Now, relationships describe how entities relate to each other. So an artist can have multiple albums, in which case this relationship is called one-to-many. An album can have multiple tracks, again, a one-to-many relationship. And a track can belong to multiple genres, and this is a many-to-many relationship. So let's look at this a little more closely. One artist can have many albums, but each album belongs to only one artist. One album can contain many tracks,
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/brainstorming-entities-and-relationships?u=76281980&t=94)** but each track belongs to only a single album. And lastly, one track can belong to many genres, and one genre can include many tracks, and this is a many-to-many relationship. With our entities and relationships defined, let's take a look at a graphical representation of this. We'll now move on to our exercise file and take a look at the entity relationship diagram. Now, if you navigate to your exercise files and open the completed ERD [[Sketching]] template, you will open a document that looks pretty much like this. And here you'll see some of the same information that we just reviewed, that is, the entities and the relationships of our iMedia music database. Now, scrolling along toward the bottom of this document, we can see that we have an ERD sketching area, and here, I have laid out the ERD, or entity-relationship diagram, for our iMedia database. You can see the relationships between our tables. We have our artist table at the bottom, connected to our album table by mean of a one-to-many relationship. The one on the line connecting artist to albums, and the infinity symbol on either ends of these lines
>
> **[3:08](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/brainstorming-entities-and-relationships?u=76281980&t=188)** demonstrate the one-to-many relationship between the artist and albums table. If you follow the diagram from the albums to the tracks table, you'll see a similar relationship in that it is a one-to-many relationship between the albums and the tracks. And finally we have the relationship between the tracks and the genres table, and this is a many-to-many relationship denoted by the two infinity symbols on either ends of the lines connecting these two tables. So I encourage you to take a look at the incomplete ERD sketching template and take a try at recreating this ERD diagram. It can only help in your [[Data Modeling]] journey. See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Sketching]] (3), [[Data Modeling]] (1)
> **Env Vars:** erd (5)
> **Definitions:** is a  (4), is called (1)
> **Exercise Files:** template (2), exercise file (1), exercise files (1)
> **Code Identifiers:** imedia (2)
> **UI Navigation:** navigate to (1), open the (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Creating an initial conceptual model](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/creating-an-initial-conceptual-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/creating-an-initial-conceptual-model?u=76281980&t=0)** - [Instructor] In the last video, you brainstormed the key entities and their relationships. We also took a look at the entity relationship diagram to see how these entities actually related to each other. Now, let's create an initial conceptual model for the database that includes some deliberate non normalized aspects. Now, don't worry if the [[Microsoft Word|word]] normalized or normalization doesn't ring a bell. We're going to fully examine what this means in the next video. For now, let's fire up our DB Browser for SQLite and return to that iMedia music database that we created in our earlier video. If you recall, when we created that shell of a database, we had no objects when we took a look in our database structure. Under tables, indices, views and triggers, they're all zero, meaning no objects exist quite yet. To now start building out these objects or entities, we'll now move to our Execute [[SQL]] tab. So here, I've created the SQL statement needed to create our very first table, which is the artist table. Now, let's step through this code here and take a look. We have some keywords, which is CREATE TABLE, and then we have the table name. Between the parentheses, we have each column or field that we'd like to see appear
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/creating-an-initial-conceptual-model?u=76281980&t=94)** in our artist table. We have ArtistID, Name, BirthDate and Genre. Next to each one of these field names are the types of data that's going to be housed in them. Integer for ArtistID, text for Name, date for BirthDate and text for Genre. I'd also like you to pay attention to where I have highlighted redundant data. This is that non normalized aspect that we are currently constructing our database in. We will get into exactly what this means, but for now, just take a note of it. So, let's now highlight our statement here and execute it. When I run this statement, the first thing I notice is there is some information in the messages window, which tells me that the query completed successfully and how long it took. Now, if I return to the Database Structure tab, I can now see that under Tables, I've gone from zero to one, and I have the artist table that I had created via my SQL statement. If I expand this object, I can see all of the fields I've also specified within my SQL statement together with the types of data that I've assigned to each of these fields. All right, with that done, let's continue building out our conceptual model. Let's go down and create our album table. I'm going to highlight this code here,
>
> **[3:10](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/creating-an-initial-conceptual-model?u=76281980&t=190)** and I'm going to click on run. This, too, has been created without error, and when I take a look at the Database Structure, I also see that this table has now been added. I'm going to continue the trend here and create the track table, and I'll also create the genre table. Now, returning to the Database Structure, I can see that all four of the tables we've specified so far have been created. I can open and expand each one of these and see that the fields within each of these tables have also been created. So with this step taken, we have officially created the initial step of our conceptual database model. We'll now take a look at some of the normalization aspects that I mentioned and see how we can improve this initial first step. See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Microsoft Word|Word]] (1)
> **Env Vars:** sql (4), create (1), table (1)
> **Cross-References:** in the next (2), in the last (1)
> **Code Identifiers:** imedia (1)
> **SQL:** create table (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### Module 2: Implementing Database Design

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to database normalization](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/introduction-to-database-normalization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/introduction-to-database-normalization?u=76281980&t=0)** - Excellent work on completing Module 1. You've laid a solid foundation by understanding database needs, identifying requirements, defining the database purpose, and brainstorming key entities and relationships. You've essentially set the stage just like a data modeler would. Now, I remember when I was first learning these concepts, identifying all the necessary requirements felt overwhelming, but I kept pushing through and it gradually became clearer. If anything isn't crystal clear right now, don't worry. Just keep pushing with the same attitude that got you this far. Up next, in Module 2, you'll step into normalization, refining your schema for optimal performance. Knowing the how behind [[Database Design]] is crucial for creating efficient and scalable [[Databases]]. Keep pushing forward. You're doing fantastic. Welcome to Module 2. In our previous module, we created the initial schema of the iMedia music database with some deliberate non-normalized aspects. Now it's time to dive into database normalization to optimize your design. So what is normalization? Well, it's a process of organizing a database to reduce redundancy and improve [[Data Integrity]].
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/introduction-to-database-normalization?u=76281980&t=97)** By structuring the data efficiently, we avoid anomalies and ensure the database is scalable and maintainable. And what's the purpose of this? Well, for our music database, normalization helps us ensure that each piece of data is stored only once, preventing inconsistencies and saving storage space. Let's take a look at some of the benefits of normalization. Firstly, it eliminates redundancy. It reduces duplicate data. Secondly, it improves data integrity. Now, this makes sure data is accurate and consistent. Thirdly, it simplifies maintenance, making the database easier to manage and update. And fourthly, it enhances performance. It optimizes query performance by minimizing the amount of data processed. So, for example, in a non-normalized database, an artist's name might be repeated in multiple tables, leading to inconsistencies if the name is updated in one place but not in others. So let's now revisit the structure that we initially created for our iMedia database and identify some of the normalization issues it currently has with the intention of correcting them. So let's now revisit the initial structure that we created for iMedia's database. Now, if you navigate to your Exercise Files area,
>
> **[3:13](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/introduction-to-database-normalization?u=76281980&t=193)** you will see a document in there called Normalization_Issues_Completed. Open that document, and you will see the issues that I have laid out here on the screen on the left. To the right of the screen, I have the initial [[SQL]] code that we used to create the current database structure for iMedia. So in the document, you can see that we've identified three normalization issues, so let's take a look. Firstly, there is redundancy in the Artist table, and this is where the genre information is stored directly in the Artists table, causing repeated genre names for that artist. And if you look over on the right here at the SQL code, that is that field that we have identified as redundant data. So that's issue number one. Going on to number two, we can see that there is redundancy in the Albums table as well. The genre information is stored directly in the Albums table, again leading to repeated genre names for each album. And I'm going to scroll down to that code where we have the Album table created. And, again, I've identified that particular column which shows where redundant data is being stored. So let's move on to our third issue, which is a transitive dependency in the Tracks table. The ArtistGenre information is stored directly in the Tracks table,
>
> **[4:46](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/introduction-to-database-normalization?u=76281980&t=286)** which should be derived from the related Artist or Genre tables. So let's move on down to here, and we can see our column here has a transitive dependency. Now, the ArtistGenre is a transitive dependency because it depends on the artist through the AlbumID instead of directly on the Track table. So here, we have identified three issues that we would need to address going forward, so our next step is to correct these normalization issues. See you in the next step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Integrity]] (2), [[SQL]] (2), [[Database Design]] (1), [[Databases]] (1)
> **Code Identifiers:** imedia (4)
> **Env Vars:** sql (2)
> **UI Navigation:** navigate to (1), scroll down (1)
> **Definitions:** is a  (2)
> **Analogies:** just like (1), for example (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)

#### [Normalization forms](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/normalization-forms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/normalization-forms?u=76281980&t=0)** - [Lecturer] In our last session, we identified the non normalized aspects of our music database. Now let's dive into the specific normal [[Forms]] and see how they apply to your music database. So, let's first take a look at the various types of normalization forms, starting with 1NF, which is referred to as the first normal form. Now this makes sure that the table structure is tabular with atomic values and a primary key. An atomic value just means that one piece of data sits in that cell. You do not want to have comma-separated values for instance, all sitting in a single cell. Moving on to 2NF, which is the second normal form. Now, this builds on 1NF by removing partial dependencies. Moving on to 3NF or the third normal form. And this builds on the second normal form by removing transitive dependencies. Fourthly, we have BCNF, which is referred to as Boyce-Codd normal form, a stricter version than 3NF and it makes sure that every determinant is a candidate key. All right, so let's move on and take a look at a practical example of these normalization forms. Starting with 1NF, you have the original data stored,
>
> **[1:39](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/normalization-forms?u=76281980&t=99)** artist ID, artist name, and album titles, comma-separated in a single cell. In 1NF, our action is to separate each album into its own row. Moving on to an example of the second normal form. In the original state, data is stored, artist ID, artist name, album ID, and album title, which again is identified as a partial dependency. How this is handled by the second normal form is a separate table for albums linked to artist by the artist ID. Now, moving on to the 3NF example. The data in its original state is stored as album ID, album title, artist ID, and artist genre. Again, this is a transitive dependency. And the corrective action in the third normal form is to have a separate table for genres linked to artist via the artist ID. Up next we will take a look at the normalization issues we've identified and for each issue we're going to write down the specific step needed to normalize the schema. Now navigate to your Exercise Files, and in there you'll find a document called Normalization_Steps_Completed.
>
> **[3:17](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/normalization-forms?u=76281980&t=197)** Now when you open that document, you're going to see what I have in front of us here. If you recall, we have identified normalization issues that are currently present in our iMedia database, and we itemize them here. In this document, added to this are the action steps to remove the non-normalization features from our database. So here we have our game plan. Number one, with regard to the artist table, we're going to remove the genre and create an index. Specifically, we have three steps here, A, B, and C. And step A is to add the genre ID as a foreign key in the artist table. Step B is to remove the genre column from the artist table. And step C is to create an index on the genre ID in the artist table. We also have the game plan for the albums and the tracks table. For albums, we're going to specifically remove the genre column from the albums table. And step B, we're going to make sure that the artist's ID is a foreign key referencing the artist's ID in the artist table. Thirdly, for the tracks table, we're going to remove the artist's genre column from the tracks table, and then make sure the album ID is a foreign key referencing the album ID in the albums table. So with this, we have our game plan to remove the non-normalization aspects of our database
>
> **[4:51](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/normalization-forms?u=76281980&t=291)** so that it conforms to a normal database structure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (3)
> **Definitions:** is a  (5), means that (1)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** imedia (1)
> **Env Vars:** bcnf (1)
> **UI Navigation:** navigate to (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for instance (1)

#### [Applying normalization](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/applying-normalization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/applying-normalization?u=76281980&t=0)** - [Instructor] In the last video, we created the steps needed to normalize our music database. Now let's apply these steps and implement the normalized schema in SQLight Navigate to DB browser for SQLight and open that imedia music database that we initially created in a non-normalized form. Here we're going to start implementing some of those steps that we itemized to change our non-normalized database to a normalized one. So, starting with the artist table, we're creating via this code here, a brand new artist table called artist new. And the big change we were making with this new table is to change the genre column, which was currently a text column to a genreID column. Here, in the last line, I also wanted to point out the foreign key that we are creating in our artist new table. We're saying the foreign key, which is being assigned to genreID, that new field we just created, is now referencing the genreID within the genres table. Alright, so let's now run this statement here. Down in our messages window, we see that our [[SQL]] statement has been executed successfully. Our next step is to drop the original artist table and that statement DROP TABLE artist
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/applying-normalization?u=76281980&t=93)** is going to do this for us. So let's run this statement, and again, it's run successfully. At this point, let's just jump over to our database structure and take a look. Our original artist table is now gone and we have this new artist new table with our correct genreID. And this grayed out little key is showing us that this genreID is the foreign key field within this new artist new table. Okay, so let's continue with our third step. We're now going to change the artist new table to the original name, which is artist. So let's run this query. And finally we're going to apply an index on the genreID column within the artist table. In subsequent videos, I'm going to explain a little bit more about the importance of this step. Okay, with all of these four steps done, we fully implemented the normalization steps that we needed to take our artist table from a non-normalized form to a normalized table. Now let's continue and apply the changes we have identified to the remainder of tables. For our albums table, we're going to do a similar sequence of action. We're going to create a new albums table with the change that we needed. We're going to drop the original table and then we're going to rename that altered table.
>
> **[3:12](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/applying-normalization?u=76281980&t=192)** Thirdly, we're going to apply the changes that we've identified to our tracks table, and again, much in the same form we've been doing, creating a brand new tracks table with the changes needed, dropping the original tracks table and then renaming it to the original name. All right, so with that, we've applied the steps that we need to change our database structure from a non-normalized form to a normalized form.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Code Identifiers:** genreid (6)
> **Env Vars:** sql (1), drop (1), table (1)
> **Cross-References:** in the last (2)
> **SQL:** drop table (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)

#### [Refine normalized schema](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/refine-normalized-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/refine-normalized-schema?u=76281980&t=0)** - [Instructor] In our last session, we applied the normalization steps to our music database schema. Now let's focus on making sure our database is both efficient and maintains [[Data Integrity]]. So ensuring data integrity and efficiency involves implementing constraints and indexes to maintain accurate and consistent data. We also need to validate the schema and refine it based on feedback from our stakeholders. So how do we implement this? Well, let's return to our DB Browser and start making some changes that are specific to applying data integrity and efficiency. So let's zero in on some of the aspects of our [[SQL]] statement here that we may have overlooked a bit. So once again, to refine our database, we're applying some of the same principles. We're creating a new table and we are addressing the album table at the moment, and we're creating a new album table called Albums_New. Here I'm going to just highlight some of the constraints that are being applied. So besides the actual table name and the type of data that's stored in each column, we have applied some constraints. Now the primary key is called a primary key constraint, and this ensures that no album ID is repeated.
>
> **[1:38](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/refine-normalized-schema?u=76281980&t=98)** Every album ID is going to be unique. Moving on to the title column. Here it's text, but the constraint is a not null constraint, and this makes sure that this column does not contain nulls. Moving on to the release date, no specific constraint has been applied or is needed based on our feedback with our stakeholders. Next, we have our artist ID, which is our foreign key column. And again, there's no specific constraint on this column. Now we're down to our foreign key, and here we're specifying what the foreign key is in this particular table, which is the artist ID and what table and field it's referencing as a foreign key and it's referencing the artist table and the artist ID within that table. Last but not least, we have a check constraint, and this is checking that the title field is not null. So here we have recreated our brand new table with all of the constraints included that's going to improve our database. So let's run this statement and apply our changes. Just as before we've created a brand new album table, we're going to drop the original one and we're going to rename that newly created table. Alright, with that, our album table is now set.
>
> **[3:18](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/refine-normalized-schema?u=76281980&t=198)** I'm going to go up here to apply the same changes to our artist table. I'm going to now revisit here and run this code. Okay, again, the artist table has been created, but before moving on, I'm going to just highlight a couple of the constraints we've applied. The primary key again is applied to the artist ID column, a not null constraint is applied to the name column. Again, a not null constraint is applied to the date column of the Artist_New table. We have our foreign key identified and again, our foreign key reference here. Last but not least, we have another check constraint, and this is checking that our birth date or the folks that are entered in this field are above 18 years old. Okay, we are doing well. So let's now continue with the [[Representational State Transfer (REST)|rest]] of the statement drop as well as rename that table. Okay, I'm going to go down to the last table here, which is the tracks table. And this is the third table that we're going to apply some new enhances in terms of constraints. And again, we're going to recreate a brand new tracks table with all of our constraints applied. I'm going to run this statement here.
>
> **[4:50](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/refine-normalized-schema?u=76281980&t=290)** I'm going to drop the original tracks table. And last but not least, I'm going to rename that table. Okay, now let's take a look at something called indexes, right? Now we did take a look at these indexes, so the primary key index for instance, but what are these indexes specifically? Well, indexes are created on columns that are queried quite frequently. So in our conversations with iMedia stakeholders, they have identified some columns that they believe are going to be frequently searched, and for us as data modelers, we can now apply these improvements to these columns via indexes. So starting with the artist table, here is a create index statement that is saying, I'm going to create this index called idx_artist_name on the artist table, specifically on the name column. I'm going to run this statement here and we see that it's completed successfully. I'm going to run over to the database structure here and I want to take a look at our indices. You see that we have now created the brand new index on the artist table. And I can expand it and see that it has been applied on that specific name field. Let's continue and apply the remainder of indexes on our albums track and genre tables, respectfully.
>
> **[6:26](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/refine-normalized-schema?u=76281980&t=386)** Let's return to our database structure and we can see all of our indices have been created and we have also improved our normalized schema.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Integrity]] (3), [[SQL]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (2), is called (1)
> **Code Identifiers:** imedia (1), idx_artist_name (1)
> **Env Vars:** sql (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### Module 3: Extract, Transform, Load (ETL) Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of ETL processes and tools](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/overview-of-etl-processes-and-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/overview-of-etl-processes-and-tools?u=76281980&t=0)** - Awesome work on completing module two. You've tackled database normalization like a pro, transforming your schema to be efficient and scalable. Understanding and applying the different normal [[Forms]], is no small feat and you've nailed it. I struggled with normalization when I first started. It felt complex and tricky to apply in real scenarios. But just like you, I kept at it and it became second nature. And if some parts still feel challenging, don't worry, you'll get it. And if you feel really stuck, just reach out in the course Q&A. In module three, you'll dive into extract, transform and load, also known as ETL, a critical part of [[Data Management]]. You'll learn how to gather, clean and load data, preparing it for analysis. This is where you'll see your hard work pay off as you turn raw data into valuable insights. Keep up the great work. Welcome to module number three. In the last module, we focused on normalizing our music database to ensure [[Data Integrity]] and efficiency. Now we'll explore the fundamentals of ETL and this stands for extract, transform and Load. ETL is a critical process in [[Data Warehousing]] and [[Business Intelligence (BI)|business intelligence]],
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/overview-of-etl-processes-and-tools?u=76281980&t=95)** helping us prepare and manage data for analysis. So let's now take a look at the definition and purpose of ETL. And as I said before, ETL stands for extract, transform and load. And it's a process used to collect data from various sources like CSV or [[Microsoft Excel|Excel]] files, convert it into a suitable format and load it into a target database. Now with regard to ETL's purpose, it's essential for integrating and managing data, especially in data warehousing where data from different sources, need to be combined and standardized. So why is this important? Well, ETL is crucial for [[Data Integration]] and this is combining data from multiple sources. ETL is also essential for [[Data Cleaning]] and this is ensuring [[Data Quality]] by handling missing values, duplicates, or other data anomalies. Thirdly, [[Data Transformation]] and this converts data into a format that we can actually use. And last but not the least is the data loading. And this involves populating the target database for analysis. So for example, in the context of our music database, ETL processes help integrate data from different sources like artist profiles, album details and track [[Metadata]].
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/overview-of-etl-processes-and-tools?u=76281980&t=189)** Up next, we'll take a look at the ETL plan for iMedia. Now if you navigate to your exercise files area, you'll see a file in there called iMedia_ETL_Plan_Completed. Open this document and you'll see what I'm seeing on the screen here. We have identified the extract, transform and load phases needed for our iMedia database. Now if I scroll down to the extract phase here, it's simply identifying our data sources. And we can see that for artists, albums, track and genres, we all have CSV files as our data sources. Moving on to the transform phase. So here is where we do data transformations and data cleaning. For the artists table, we have three steps. Step one, handle the missing values in the artist table. Step two, remove the duplicates. And step three, trim white spaces from the artist names. The albums table has its steps, missing values to be handled, removal of duplicates, as well as trimming white spaces from the album titles. And thirdly, in the tracks table, we have two steps where first, we handle missing values and then we convert track durations from minutes to seconds. And finally, our genre table has a single step, which is to handle any missing values in the data.
>
> **[4:45](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/overview-of-etl-processes-and-tools?u=76281980&t=285)** Moving on to the load phase, which is our final step, we are simply now loading our target tables. By the way, we've already created our tables. And we're going to be loading our source data to these target tables. Down here in our mapping area, we can see that we've specified that. For the artists table, we are mapping these fields to the fields of the artists table. And we're repeating this process for the albums, track and genres tables. So with our ETL plan outlined, let's now dive deeper into each stage of the ETL process to see how we can apply these steps to our music database. In the last video, we outlined the ETL plan for our music database. Now let's explore the three main stages of ETL, extract, transform and load. We'll look at each stage in detail to understand how we can effectively move and process data for our music database. So starting with the extract phase, which is gathering data from various sources. It involves collecting data from sources such as CSV files as we saw in our plan or APIs or other [[Databases]]. An example could be extracting artist data from the CSV and album data from an API. Moving on to the transform.
>
> **[6:21](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/overview-of-etl-processes-and-tools?u=76281980&t=381)** Now transform involves cleaning and converting data into usable formats. So the transform phase will involve handling missing values, removal of duplicates and data conversions and that is changing data types and aggregating data. So an example of this is creating date formats and aggregating track durations. And finally, the load phase involves inserting data into the target tables. Now the load phase makes sure that data integrity and consistency are intact. So for example, loading cleaned and transformed artist, album and track data into our SQLite database. So up next, we'll walk through some examples and apply some of the strategies of ETL against them. Okay, so let's now walk through a sample ETL process. If you navigate to your exercise files area, you're going to see in there a file called Sample_ETL_Process. And open that file and you'll get the file that we are actually looking at currently. In here, we have three phases, the extract, transform and load. And we're just going to simply walk through a sample record. So starting with the extract phase, we have a sample record here. And we're simply going to imagine that this source is stored somewhere in a CSV file. And again, the extract phase can appeal to any source.
>
> **[7:58](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/overview-of-etl-processes-and-tools?u=76281980&t=478)** This could be another database, an Excel spreadsheet for instance or a text file. Moving on to the transform phase. Here, all we're simply doing is cleaning the data. We're making sure that the birth date is in the correct format and we're standardizing the Genre with a capital. Thirdly, we're going to go down to the load phase, once the previous two phases have been completed. And here, we're simply transforming the record into the target database. And this is done via an insert statement in most cases into the target database that sits in our SQLite database. All right, up next, we'll take a look at some of the popular ETL tools that are currently out there that assist us with extract, transform and load. Now that we've walked through a sample ETL process for a record, let's take a look at some popular ETL tools that can help streamline and automate ETL tasks, making our workflows more efficient and less error-prone. So starting with Talend. It's an open-source ETL tool with a graphical interface. Informatica, a comprehensive data integration tool with advanced features. And [[Microsoft]] SSIS and that stands for [[SQL Server Integration Services]]. And this is an ETL tool integrated with [[Microsoft SQL Server|SQL server]]
>
> **[9:34](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/overview-of-etl-processes-and-tools?u=76281980&t=574)** for data integration tasks. Now some of the key features, at least with Talend, is a drag-and-drop interface. It has support for various sources and extensive community support. Informatica has high performance, [[Scalability]] and robust data transformation capabilities. And Microsoft SSIS, which I've used quite a lot, it integrates seamlessly with SQL server. It has built-in transformations, extensive scripting options and a host of other features. Now I would encourage you to take a look at the document within your exercise files, called the ETL_Tools_Selection. This is going to give you a nice overview of these three tools and their various strengths and weaknesses. I also encourage you to go outside of these tools that I've mentioned and take a look at the other ETL tools that are available. Up next, we're going to apply the phases of ETL to our iMedia music database. See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Integration]] (3), [[Microsoft SQL Server|Sql server]] (3), [[Data Integrity]] (2), [[Data Warehousing]] (2), [[Microsoft Excel|Excel]] (2)
> **Env Vars:** etl (24), csv (5), sql (3), ssis (2), api (1)
> **Definitions:** stands for (3), is a  (2), known as (1), is an  (1)
> **Analogies:** for example (2), just like (1), such as (1), imagine (1), for instance (1)
> **Code Identifiers:** imedia (3)
> **Cross-References:** in the last (2), as we saw (1)
> **UI Navigation:** navigate to (2), scroll down (1)
> **Exercise Files:** exercise files (3)

#### [ETL in the music database](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/etl-in-the-music-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/etl-in-the-music-database?u=76281980&t=0)** - [Instructor] In our last session, we compared various ETL tools and looked at some of their strengths and weaknesses. Now let's apply ETL processes to our music database using [[SQL]] scripts. We'll see how these processes help us prepare and manage our data effectively. To get started, we're going to use the SQLite command line tool. If you recall, we downloaded that piece of software earlier into a folder. And in this folder, there are three files. The one we're interested in is the one that's currently highlighted, which is sqlite3. Now, double clicking on this file fires up the command line prompt, which hosts the SQL command line tool, and that is SQLite command line tool. Okay, so let's now get started with the various commands needed to get our extract phase completed. We're first going to open to the location where we have our current iMedia Music database. For me, I have it in my documents folder, and this is the path to it. For you, you would want to update and make sure that the path you've specified actually goes to the iMedia Music DB that you've created. Hitting enter and seeing in the very next line, an exact SQLite prompt tells me that this last command
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/etl-in-the-music-database?u=76281980&t=95)** that it was just fed was executed successfully. Okay, so now we want to specify and get SQLite prepared to know that it's going to import for us CSV files. Now to do that, we're going to put another command, which is .mode, followed by CSV. Hitting enter again with the SQLite prompt tells me that this too was taken successfully. Now we're going to import one by one each of our raw CSV files into staging tables. Now I'm going to pop in the command here, but take a moment to slow down and absorb all of the commands. Now .import followed by the path, again, this is simply the path to my raw CSV file. Now, to get to all of the raw CSV files, again, you would be going to your exercise files area and downloading the Artists_Raw albums, genre and tracks raw tables to a location, much like what I did. And in my case, I'm downloading it to my download folder. Within my downloads folder, I have created another folder called MusicDBCourseFiles, and in there is where my raw file sits. Now with this, I'm going to hit enter again, and that has imported that raw data
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/etl-in-the-music-database?u=76281980&t=189)** into the artist temp table. I'm going to repeat this process for all of our raw data, starting with the albums table, followed by the track table. And again, all this is doing is simply importing it into the various temp tables we're setting up. Finally, I'm going to import the raw genre data into a genre temp table. Okay, with these four commands executed, we have now done our extract phase. That is we have extracted the raw data from the source CSV files into some staging tables we've created on our iMedia Music database. Up next, we'll go switch to the DB browser for SQLite where we'll perform our transform and load stages. With our data now imported, we're now ready to perform the remainder of our ETL process, which is the transform and load phases. Now to do so, we're going to go back to DB browser for SQLite. You can fire up DB browser for SQLite whether you're on a Mac or a [[Windows]]. And when you do so, you want to navigate to that iMedia Music database that you created and were working with earlier.
>
> **[4:44](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/etl-in-the-music-database?u=76281980&t=284)** When you open this file, you're going to notice some things that look a bit different. Firstly, in the database structure area, we can see that there are now eight tables when there used to be four. And this makes sense because we've done four imports into four temporary tables and we can see them here. Albums temp, artist temp, genres and tracks temp. Now let's just jump over to the browse data for a second, and you can tell that all of our original tables are currently without data. And when we do take a look at the temp tables, for instance, albums temp, we do see that we have our data imported into this table and we now are left to perform the transform and load phases, which is going to clean up this data and have it in a workable format for us. All right, so let's perform these steps. I'm going to jump over to the execute SQL tab and here I have laid out a number of queries that's going to be performing some validation, transformation and loading for us. This first part that I've commented out is just to remind you that the import phase was done on the SQLite command line tool. This particular action can only be done in the SQLite command line tool, as if you try to execute this command here, it just simply won't work.
>
> **[6:19](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/etl-in-the-music-database?u=76281980&t=379)** Now let's move on to some validation here, starting with the artist temp field. Now this statement here is making sure that every genre ID in the artist temp table is valid by deleting any roles where the genre ID does not exist in the genre temp table. So let's run this statement here. And again, this is just making sure that we are performing a validation step for our data. We'll do this for all three of our tables here. And now let's move on to the transform step. As I go through this, please feel free to take a moment, pause and absorb the various queries, as they are quite a number of them, to help us perform the transform phase here. Okay, so starting with the first statement here, we are creating an artist cleaned table from the temp table that we've already imported our data into. So let's first create our artist cleaned table. Jumping back to the structure, you can see that that table has been created. Now, our next step is to delete any nulls, which was one of our cleaning steps. So let's run this particular statement. And this is removing any rows that are nulls or have a blank name.
>
> **[7:55](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/etl-in-the-music-database?u=76281980&t=475)** We do not want records that are falling under this criteria, so we're removing them. All right, moving on to the third statement here. This statement is making sure that there are no duplicates, which was another part of our transformation phase. We are now going to ensure that there are no two records that are going to be the same. So we've just run this particular command, which is making sure that we have no duplicates. And the last update is going to make sure that we are trimming any white spaces that are in that name field. So we are running an update statement against that clean artist cleaned table. And then we are setting the name field to trim any spaces that may be within it. Now let's run this particular statement. And all of our statements have been run successfully. All right, we're going to move on to doing various of the similar types of transformations to our albums and tracks table. So let's move on with this particular statement here. I'm going to run this, and that's going to, again, perform the validation step that we did earlier. Here we're going to now do the same set of statements, that is creating a cleaned table, albums cleaned table,
>
> **[9:31](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/etl-in-the-music-database?u=76281980&t=571)** we're going to be removing records that have a null or blank title, we're going to be deleting records that are duplicates, and we're going to be removing any white spaces in the title field. I'm going to highlight all of these statements and then just run them, and they all run at the same time. Now, doing the same thing with the tracks table, I'm just going to run this post transformation validation step here. And again, going to perform similar steps or transformations with the tracks table. Again, I'm creating a cleaned table. I'm actually removing any records that have nulls in the title. I'm performing an update on the tracks cleaned table, and we are converting the values here to seconds by multiplying by 60. And last but not least, we are deleting any records where the duration is less than zero, okay? So let's now highlight all of these particular transformations for the track table and run those. Last but not least here, I'm going to perform a similar type of validation check and perform transformations on the genres table. And if you recall, what was required for us to do
>
> **[11:04](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/etl-in-the-music-database?u=76281980&t=664)** in the genres table is to remove any records where there are nulls in the name. Okay, let's run this. And with that, we have successfully done our transformation step. Now what's left for us to do is to perform the load phase. Before doing so, let's jump over to the database structure again and take a look at some of the tables that we've created. In the albums cleaned table, let's take a look in the browse data. In albums temp, take a note of this, and then take a look at albums cleaned. We see some differences here. Number one, the big difference that stands out to us, there's now 96 records as opposed to a hundred, and that is part of our transformation and had to have occurred when we removed some of our records that do not have a title, for instance. So it's a great way at this point to take a look at some of the key differences in the artist temp table versus the artist cleaned table and so on, for the albums, the genres and tracks. This way you get familiar with some of the actual transformations that you've performed. All right, now let's jump back over, as I mentioned, to do the last phase, which is the load. First, we're going to execute this statement,
>
> **[12:38](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/etl-in-the-music-database?u=76281980&t=758)** which is PRAGMA foreign keys off. And this particular command, PRAGMA, is turning off our foreign keys, which help us to make clean inserts into our tables. Okay, so let's run this particular statement. We get a confirmation message to which we want to say yes, and now we're going to do a series of inserts. We're going to insert into the genre table, into the genre ID and name fields, and we're going to select these particular fields as well, from the cleaned table. So in other words, we're taking the data that we have cleaned and we're inserting it into the original table. So let's perform this particular insert here. And we're going to continue this insert and perform the same action on the artist table, then the albums table, and finally the track table. Now our data has now been loaded to our original tables, album, artists, track and genre, and let's again pop over to our browse data. And we can see now that our original tables are indeed populated. Our final step in our ETL process is now cleaning up all of our temporary tables that we've used in our process,
>
> **[14:17](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/etl-in-the-music-database?u=76281980&t=857)** and we're going to run a series of drop table statements. And the if exists is checking to see whether or not the table already exists. And if it does, only then does it perform the drop. So let's now run these final statements. And with that, let's jump back over one more time to our database structure. We have a nice clean four tables fully loaded with our cleaned and transformed data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Windows]] (1)
> **Env Vars:** csv (6), etl (4), sql (3), pragma (2)
> **Tools:** command line (6)
> **CLI Commands:** make (3), sqlite3 (1)
> **Code Identifiers:** imedia (4)
> **UI Navigation:** switch to (1), navigate to (1)
> **Analogies:** for instance (2)
> **Cross-References:** go back to (1)


### Module 4: Loading Data into the Database

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding data pipelines](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/understanding-data-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/understanding-data-pipelines?u=76281980&t=0)** - [Instructor] Welcome back. In the last video, we covered the basics of ETL, extract, transform, and load. We also applied these processes to our music database. Now let's dive into designing a data pipeline for our music data. [[Data Pipelines]] help us automate and streamline the ETL processes, making [[Data Management]] more efficient. So officially, a data pipeline is a series of processes that automate the movement and transformation of data from one place to another. The components of a data pipeline include the data sources, extraction processes, transformation processes, loading processes, and the target database. So for example, a pipeline that extracts artists' data from a CSV file cleans and transforms it and loads it into a SQLite database is a perfect example of a data pipeline. Some of these phases may sound familiar as they do cover the extract, transform, and load phases. In fact, for our iMedia database, it's much of the same thing. The biggest difference is automation, which coincides with consistency. The data pipeline allows us to automate the process that we just manually performed. Okay, now let's move on to the importance of a data pipeline.
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/understanding-data-pipelines?u=76281980&t=96)** Data pipelines ensure data is consistently processed and moved from source to destination, reducing manual effort and errors. Some of the benefits include automation, efficiency, consistency, and [[Scalability]]. For our next step, we're going to take a look at the iMedia Data Pipeline Design plan and game plan our pipeline for our specific music database. Now, if you navigate to your Exercise Files area, you're going to find a file in there called the iMedia_Data_Pipeline_Design_Completed. Open this file, and you'll follow along with what's in front of us here. Now, once you open this file, one thing you'll realize is much of it looks quite like our ETL process. So I'd like to point out the area that is most important to pay attention to, and that is this Automate space here. In the automate phase, this is the whole point of a data pipeline. It is basically telling us some of the key components to make our once-manual script a repeatable, automated one. So here, we have some various components to pay attention to with regard to automation. We verify that the script actually started. We clear any existing tables preparing us for the new run. We validate any successful or unsuccessful script runs,
>
> **[3:11](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/understanding-data-pipelines?u=76281980&t=191)** and we verify that the script has ended. And finally, we save the script and make it executable so that it can run in an automated fashion in the future. All right, the other phases pretty much remain the same, extract, transform, and load. So let's now move on from our game plan here, which is our design, to actually putting it to practice. Let's now move on to build our data pipeline for iMedia Data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Pipelines]] (2), [[Data Management]] (1), [[Scalability]] (1)
> **Env Vars:** etl (3), csv (1)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** imedia (3)
> **Cross-References:** in the last (1), we covered (1)
> **Definitions:** is a  (2)
> **UI Navigation:** navigate to (1)
> **Exercise Files:** exercise files (1)

#### [Building the data pipeline](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/building-the-data-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/building-the-data-pipeline?u=76281980&t=0)** - [Instructor] In the last video, we took a look at the design plan for our data pipeline for iMedia Music. Now, in this video, let's put it all together and take a look at our comprehensive iMedia data pipeline. To get started, navigate to your exercise files area and locate the file called etl_script.sh. Once you open that file, you'll see contents that look like what you see on the screen here. Now, we have a number of different commands within this file, and most of which you are already familiar with. In fact, the extract, transform, and load phases are all included here, as we did before. The only thing that is really different is now including some specific commands. As we mentioned before, we want to know when this script has started and this echo "ETL script started" has the ability to tell us that. Next, we're actually going to specify where this specific iMedia database is, and then remove the foreign key constraints so that we can then implement the changes that we need. One of the key components of this particular script that you would need to verify with your stakeholders when designing your own data pipeline is how is the data going to be refreshed? It can be a scenario where
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/building-the-data-pipeline?u=76281980&t=97)** you are removing the existing data and refreshing new data from the sources, or you are appending the fresh data onto the already imported data from a previous time. For simplicity sake, we're going to assume that we are removing any existing data and then including the extract, transform, and load phases to reintroduce that data into our database. That being said, our first step is to clear any existing data, which is a series of delete statements to delete the data from our existing tables. With that done, we're now really into the phase that we are already familiar with, the extraction, transformation and loading of these tables. At the end, we clean up our tables as we did before. One thing to point out at the end here, this file is checking to see whether or not there's an error, so if there is an error in our script, we will be able to know and be notified via this simple message here. And at the end, we're just simply stating that the script has ended. Okay, so I would highly advise you to get familiar with this script. If you are ambitious enough, try to recreate it in its totality, but at the minimum, please take a moment to get familiar with the various commands. All right. So for now, let's create an automated version of this script and run it to make sure that it runs successfully.
>
> **[3:13](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/building-the-data-pipeline?u=76281980&t=193)** Okay. With our data pipeline script created, we're now ready to make the script an executable one and then run it. So let's now close out our script here, and to get started, we're going to fire up our terminal or command line tool. Once that's fired up, the first thing we're going to do is change to the directory where you saved this script, and that is that etl_script.sh. For myself, I am in the download folder, or that is the location I have saved my script in. So I'm going to do CD to my downloads folder. So this effectively changes my directory to my downloads folder. Now, I am now going to run a particular command that is going to take my script file and create an executable file out of it. This particular command, chmod +x, and the name of my script etl_script.sh effectively creates an executable file out of that script. Now, what I'm able to do is simply run this script and it should run the contents of my data pipeline. So for me to do this,
>
> **[4:46](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/building-the-data-pipeline?u=76281980&t=286)** I am just going to pop in this particular command, ./ and the name of my file, which is etl_script.sh.
>
> **[4:58](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/building-the-data-pipeline?u=76281980&t=298)** Now hitting Enter, I can see a few things. One of the things that I do see are the messages that I actually included in my script, which is that the etl script started whether or not it completed successfully, which it has, and that it has ended. So this is great. This is what I'd like to see. For yourself, a couple pointers. When you're running this particular script, make sure again, that you've navigated to the same directory that you've saved it in, and make sure that within the script, all of your paths or file paths are pointing to where your files actually are. This is going to make sure that your script runs successfully. Okay, great. With the successful run of our script, we're now ready to move on to validating that our data has arrived in the way that we expect it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), cd (1), chmod (1)
> **Code Identifiers:** etl_script (4), imedia (3)
> **File Paths:** etl_script.sh (4)
> **Cross-References:** in the last (1), we mentioned (1)
> **Tools:** terminal (1), command line (1)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** etl (1)
> **UI Navigation:** navigate to (1)

#### [Validation techniques](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/validation-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/validation-techniques?u=76281980&t=0)** - [Instructor] Congratulations on completing the ETL process of your music database. Now you're ready to dive into writing [[SQL]] queries to explore and analyze your data. Now let's first take a look at validation techniques, which is crucial to ensure [[Data Integrity]] by validating data before querying. Now, this step helps prevent errors and ensures the accuracy of our analysis. So for example, validating that all album release dates are not set in the future, or making sure that all foreign keys correctly reference existing primary keys. Let's now switch back to DB Browser and perform a series of validation techniques and make any corrections, if needed. Here we are back at DB Browser for SQLite, and we are now going to perform a series of validation techniques to make sure that the data that we have imported has been imported correctly. Now, let's first start by performing a validation check against the album release dates. Here, we're just checking to see if there are any album release dates that are greater than the current day's date. Now, we do not expect any results to be returned from such a query,
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/validation-techniques?u=76281980&t=94)** and again, it's a check to see if our dates are indeed in the right format. So let's now run this first statement and observe the result. We can see that our query did run correctly, however, we do have some issues. We do see that we have results returned where we should not, and this is suggesting that we do have album release dates that are greater than today's date. Now, what could be wrong here? Well, the Release Date column in the Albums table contains dates in a non-standard format, so SQLite does not and cannot recognize them as valid dates, so consequently, queries comparing release dates with the current date, as we have here, is going to return an incorrect result. Now let's take some steps to correcting this issue here. Our first step is to add a new column to store properly formatted release dates, and this statement here is going to do that for us, "Alter table albums and add column release date formatted as a data type." Alright, we've successfully created our release date formatted. Now let's move on to executing this update statement here. Now, this is going to convert and update the release date
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/validation-techniques?u=76281980&t=189)** to a standardized format. One quick note before I run this update statement here. Do not let the complexity of it intimidate you. This is the exact type of statement or query that you'd want to get some assistance from a platform like [[ChatGPT]], simply asking it to give you an update statement in SQLite format for updating dates of a specific field. Alright, now let's run this particular statement. And we see that it has been executed successfully. Before moving on, let's jump over to the Browse Data tab and observe our Albums table. We can see that our Release Date formatted field has been added, and if we scroll down, we can take a look at the difference between the dates here. We do have our formatted dates versus our non-formatted dates. So, so far so good. Let's keep moving. Our next statement here is going to set a default value for any null dates, and that is this 9999-12-31. Okay, with that done, let's now see if there are any dates that still could not be formatted. And we're going to do this by running this Select statement here. No rows have been returned, which is a good sign, and that's what we expect. Now let's keep moving to manually fix any remaining dates. And this update statement is going to correct
>
> **[4:46](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/validation-techniques?u=76281980&t=286)** any remaining problematic dates for us, setting it in the right format. Let's run this statement. Alright. Great. We're almost there. Now we're going to create a new table with the correctly formatted dates and replace the old table. Okay, let's now do this with this particular statement here. We're going to create that new table, and we're going to insert the data into that new table, and we're going to then drop the original Albums table. To do that, we're going to enable PRAGMA's off and on. Let me just switch this back on here. And this is going to help us reduce any issues that we might encounter while dropping this table with regard to foreign keys. So I'm just going to highlight these three lines and run this statement here, and confirm the messages. Okay, great. Now we're simply going to rename our Albums new table to the original Albums table name with this Alter statement. Awesome. Now we're going to finally create an index on that title field in the Albums table. And let's run this statement. And just as we did in the beginning, we're now going to run that same validation check
>
> **[6:21](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/validation-techniques?u=76281980&t=381)** after we have performed these series of corrections, to make sure that all of our corrections are indeed the right way. So now let's run this statement, and let's take a look. What we do see appear are records, but when we take a look at the records that do appear, they are indeed the records that we expect. They're only the records that we have defaulted to our default date, and we can easily identify them with the date that we have set up here. Alright, with these steps taken, we have fully corrected the issues with our Albums table. I'm just going to go ahead and perform some other checks here, and this is validating the foreign key references by simply performing this select statement. Alright. Now we are going to do pretty much a repeat of what we just did with the Albums table, but with the Artist table. And it too has a date field, the birth date field, and we're going to take the exact same approach of correcting this date and making it the right format. So I have all of the steps here laid out, and I'm simply going to highlight the remainder of steps in this sequence and run them all. And this should apply all of our changes to our database. Awesome.
>
> **[7:58](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/validation-techniques?u=76281980&t=478)** So, with this done, we have already created all of the steps needed to validate and correct any issues found in our validation. Our next step is to move on to creating some more SQL statements and start to work with the data within our database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Data Integrity]] (1), [[ChatGPT]] (1)
> **Env Vars:** sql (2), etl (1), pragma (1)
> **CLI Commands:** make (3)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Advanced error handling and logging](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/advanced-error-handling-and-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/advanced-error-handling-and-logging?u=76281980&t=0)** - [Instructor] Now that we have applied some validation checks on our data, let's move on to some advanced error handling and logging to maintain a robust database. So implementing error handling within [[SQL]] queries helps manage and troubleshoot data issues effectively. Examples of this is, for instance, creating what's called a trigger to prevent invalid data entries or custom error messages for [[Data Validation]] failures. Another important component is logging changes. Keeping a log of data modifications maintains an audit trail, which is crucial for tracking changes and ensuring data reliability. So examples of this is logging inserts, updates, and deletes in an operational log table. Let's now move on to applying some error handling and logging in our iMedia database. Now let's perform a couple more checks. Let's run this statement, and we see that our query has successfully run. Finally, let's try running a deliberate, invalid artist ID and see if our trigger catches it. So let's now attempt to run this statement, and I have a deliberate invalid artist ID,
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/advanced-error-handling-and-logging?u=76281980&t=95)** and let's observe the result. We do have a error statement that has popped up, and if we take a look, we can see that our trigger is indeed working. We have an invalid artist message, which is what we have directed our trigger to do. If we take a look up here at our trigger, here is where we set it to say invalid artist for any invalid insert. So with this, we have verified that our error handling mechanisms are indeed working. Let's now move on with our properly set up database to start performing some inquisitive queries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[Data Validation]] (1)
> **Code Identifiers:** imedia (1)
> **Env Vars:** sql (1)
> **Analogies:** for instance (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### Module 5: Writing Basic to Complex SQL Queries

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to SQL queries (basic, aggregate, joins)](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/introduction-to-sql-queries-basic-aggrigate-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/introduction-to-sql-queries-basic-aggrigate-joins?u=76281980&t=0)** - You've done an incredible job so far completing modules one through four. You've tackled database planning, gathered requirements, designed robust schemas, and implemented ETL processes like a true data modeler. Now as we move into module five, you'll be segueing into the role of data analyst. Shout out to you for leveling up with these foundational skills. Keep pushing forward as you journey into deeper data analysis. So with our error handling and logging performed, we're now ready to exchange hats, so to speak. Up to this point, everything we've done fell more or less under the hat of a data modeler. Now we can assume the hat of a data analyst and start working with data that has already been right sized, validated, and set up in our database. So we're going to treat part of this session as a recap of some simple to complex [[SQL]] statements and then get into some specific analysis with regard to the data that we have imported. All right, so let's start with this first statement here. In our DB browser, we can see that we have SELECT * FROM Artists, and what this star does is selects
>
> **[1:33](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/introduction-to-sql-queries-basic-aggrigate-joins?u=76281980&t=93)** all of the columns within the Artists table. Let's run this statement and observe the result. This result has been completed without any errors, it took 12 milliseconds to run, and we can see that we have our results here, including our birth date field, which has been nicely formatted. Let's now move on to another query here, which specifies only the columns that we want, and this is considered a SQL best practice. Let's run this statement. One of the things to point out here is we have gone down in our column count, yes, but we have also gone down in our processing time. Our last query took us 11 milliseconds, whereas this one takes four. All right, let's move on to selecting specific data by employing another clause, which is the WHERE clause. In this query, we're actually specifying that we want genre IDs that are of the number two. So for this particular query, we're now specifying that we're interested in genre IDs that are equal to two. Now if we pop over to our browse data and take a look at our genres, we can see that ID number two is pop. So we are looking for records that fall under the pop genre. Now when we run this statement here,
>
> **[3:09](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/introduction-to-sql-queries-basic-aggrigate-joins?u=76281980&t=189)** I can see that 39 rows were returned in nine milliseconds, and it tells us that I have 39 rows or 39 records that belong to the genre of pop. Okay, great. Now let's employ some more clauses in our SQL statement here. With this statement, we are now ordering our results in ascending order. So we're selecting all records from our Artists table, and we're ordering the results by the name column in ascending order. Let's now run this statement, and if we take a look here, we can see that our name column starts at A, goes down to B, C, D, and so forth, showing that it is indeed sorted in ascending order. Okay, now let's take a look at some aggregate SQL statements. And here we have account of the number of artists. SELECT COUNT * FROM Artists effectively gives us the total artist count or the total record count of the Artists table. Let's run this statement, and we see we have a count of 101. Looking at the browse data and the Artists table to verify, we do see indeed down here, the total of this table is indeed 101. Now let's talk about grouping data.
>
> **[4:46](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/introduction-to-sql-queries-basic-aggrigate-joins?u=76281980&t=286)** What if we grouped the data by genre ID? In other words, we want to see the counts of each genre. Let's now run this statement. Here we can see each genre ID and the associated counts that are in there. If you recall, genre ID two is pop. So we have 39 pop records. Okay, awesome. Now we can also filter our grouped data. So in this query here, we have employed the HAVING clause, which allows us to use the COUNT * greater than five. So we want all of the records that are greater than five. Okay, now let's highlight this statement and run it. And we can see for every genre ID that we have listed, the associated count, and these are all greater than five. Awesome. Now moving on to joining of tables. We can see here we have an inner join, which if you recall, inner joins gives us the records that exist in both tables that are joined. And currently we have the Artist and the Album tables being joined via the artist ID, that is the primary foreign key relationship in these two tables. Now, we have also specified the specific columns we're interested in.
>
> **[6:20](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/introduction-to-sql-queries-basic-aggrigate-joins?u=76281980&t=380)** So now let's just run this statement. And we see we have 97 rows returned in eight milliseconds. And this is giving us the records as we have expected, effectively joining the Artists to the Albums table. Let's now do a left join. And this is going to give us all of the records from the Artists table and only the records that are equal in the Albums table. So in other words, only the records that match those in the Artists table will appear in the Albums table. Those that do not match will be appearing as nulls. So let's take a look at this. Here we see we have all of the artist names on the left here, and on the right, we have the associated albums. And as we scroll down here, we can see that there are some nulls. Jane Doe, for instance, does not have an associated album. And if we go down again, we may see a few more records like this. So here we have, for instance, a few more records that do not have the associated title. Great. Now, let's now do one more left join and employ a couple more practices. Here we see for our Tracks table, which is joined to the Albums table,
>
> **[7:53](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/introduction-to-sql-queries-basic-aggrigate-joins?u=76281980&t=473)** it is now aliased with T and A respectively. And in our ON statement here after the LEFT JOIN clause, it's telling us the specific fields that is being joined, but we are only employing the alias that we have used. We're using a SELECT * again, and let's now run this statement. And now this is giving us all of the columns again because we're using this star from both the Tracks and the Albums table, and again, another heads up to use a best practice and specify only the columns that you need. We're just doing this here for demonstration purposes. Okay, so that is sort of a quick recap. Coming up next, we are going to do some specific data analysis, and that is moreso the questions that the management team at iMedia Music would ask of you as a data analyst. See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4)
> **Env Vars:** sql (4), select (3), count (2), etl (1), where (1)
> **SQL:** select (3), where (1), having (1), left join (1)
> **Definitions:** in other words (2)
> **Analogies:** for instance (2)
> **Best Practices:** best practice (2)
> **Code Identifiers:** imedia (1)
> **Cross-References:** coming up (1)

#### [Exploring and analyzing music data](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/exploring-and-analyzing-music-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/exploring-and-analyzing-music-data?u=76281980&t=0)** - [Instructor] All right, now that we have taken a quick recap of some various [[SQL]] statements, let's get into some more specifics with regard to a SQL statement that will be constructed in response to a request from iMediaManagement. Now, let's go on to some of the other queries here under data analysis, and we can see the first query here is going to ask that we find the top artist by number of albums. And here we're employing a SQL statement, which is joining the artist to the albums table via the artist ID. And we're also grouping the artist name and ordering the album count. In our Select clause, we have two columns specified. One is the artist's name, and the other is the album count, and that is the count of the album ID. All right, let's now run this entire statement and observe our result. We do see from our results, [[John the Ripper|John]] Smith has the highest albums, with a count of two. Everyone else seems to have a count of one. But again, this is some insightful information for the management of iMediaMusic to start performing some business-related decisions. Let's move on. Let's identify popular genres.
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/exploring-and-analyzing-music-data?u=76281980&t=95)** Now, as you would imagine, this would be a common request from the business or management so that they can in turn make strategic, data-driven moves. Okay, let's start with running this statement. Here we see all of the popular genres. We see that pop leads the way with a count of 39, followed by rap, then rock. Now this, again, gives iMedia's management a good sense of what's in their library and the tools and the ability to now change things for the betterment or the improvement of their business. Finally, let's take a look at the most played tracks. Now this, again, is a common data analysis query, specific to this type of business because, as you would imagine, you would only want to have tracks that are indeed popular or playing so that you can make it available so you can gain more sales as iMediaMusic. Let's now run this query. All right, we can see we have listed the various tracks alongside the total amount of times they've been played. We see that Legendary Rock seems to lead the way, followed by the remainder of the records. All right, with these three SQL statements, we have effectively performed some in-depth data analysis that's going to be beneficial to the management of iMediaMusic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[John the Ripper|John]] (1)
> **Code Identifiers:** imediamusic (3), imediamanagement (1), imedia (1)
> **Env Vars:** sql (4)
> **CLI Commands:** make (2), find (1)
> **Analogies:** imagine (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Module 6: Query Optimization and Large Dataset Management

[↑ Back to Table of Contents](#table-of-contents)

#### [Techniques for optimizing SQL queries](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/techniques-for-optimizing-sql-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/techniques-for-optimizing-sql-queries?u=76281980&t=0)** - [Instructor] Now that you've constructed some analysis queries in the last module, it's time to make sure your queries run efficiently. In this module, you'll start with the fundamentals of query optimization. Optimizing your queries is crucial for maintaining performance, especially as the size of your dataset increases. So what's the importance of this? Well, query optimization improves the speed and efficiency of database operations. As datasets grow, inefficient queries can lead to slow response times, increasing load on the database server, and a poor [[User Experience (UX)|user experience]]. Optimization helps maintain performance and [[Scalability]]. So for example, imagine running a query to find all tracks with more than 1,000 plays. Without optimization, this query could take minutes instead of seconds as the database grows. So with regard to our music database, frequent queries on large datasets can significantly impact performance, making optimization essential. So the key principles for query optimization include: reducing the amount of data processed, using appropriate indexes, and writing efficient [[SQL]] statements.
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/techniques-for-optimizing-sql-queries?u=76281980&t=94)** Efficient queries minimize the resources needed to retrieve the desired results. So for example, using a WHERE clause to filter data early in the query process helps reduce the number of rows processed, improving performance. And as we saw in our example earlier, when you use specific columns instead of the star, selecting all columns, this too improves the performance of your queries. So by filtering data early, you can avoid unnecessary processing, which is especially important when dealing with large datasets. So up next, let's identify and analyze slow-performing queries in our music database. So here we are, back at DB Browser for SQLite. If you haven't done so, navigate back to your instance and fire up the iMedia music database that we are currently building. Now, in the Execute SQL tab, we are now going to identify our slow-performing queries. The key words here in this query, EXPLAIN QUERY PLAN, provides information on how SQLite will execute the query. It shows details such as whether a full table scan is performed or if an index is used. Let's go ahead and run our statement here.
>
> **[3:11](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/techniques-for-optimizing-sql-queries?u=76281980&t=191)** Now let's take a look at our result. Of course, we see that our query has executed successfully. But let's take a look at what our results say here, mainly where it says "SCAN Tracks." Now, the output that shows SCAN Tracks means that SQLite is scanning the entire Tracks table, which can be inefficient for large [[Databases]]. So to optimize this, you can create an index on this column to avoid a full table scan and thereby optimize this query. And that's exactly what we'll do in the next step. See you there. Now that we have identified our slow-performing query, let's now dive into indexing, which is a powerful technique to enhance query performance. Indexes are [[Data Structures]] that improve the speed of data retrieval operations on a database table. They work like a book's index, allowing quick access to data without scanning the entire table. We've actually worked with some indexes already in the building of our database here. Primary key indexes, for instance, are automatically created on the primary key columns, making sure that unique and quick access to these rows are possible. Unique indexes enforce uniqueness on columns other than primary keys.
>
> **[4:46](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/techniques-for-optimizing-sql-queries?u=76281980&t=286)** And then there are composite indexes, created on multiple columns to speed up queries that involve those columns. So for instance, creating an index on the Duration column speeds up queries filtering by duration. So we have in front of us the results of our last query. It shows us that this particular table, table Tracks, is being scanned in its entirety, which is not the most optimal. So how do we improve this query's performance? So our action step here is to now create an index on the Duration column of the Tracks table. This statement here with the keywords CREATE INDEX, followed by the index name, idx_duration is what I've called it. You can literally call this anything. But again, it's a best practice to clue yourself in to what you're actually naming. Then the keyword ON signifies that we are applying this to the Tracks table, and specifically the Duration column within the Tracks table. So now let's create this index, idx_duration. Our query has run successfully. And we could verify this index by jumping over to the database structures. And we can see idx_duration created here. Now, let's jump back over to our Execute SQL tab
>
> **[6:25](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/techniques-for-optimizing-sql-queries?u=76281980&t=385)** and now rerun the same query that we ran earlier, which is looking to tell us, how well is this particular query going to perform? And we use, if you recall, EXPLAIN QUERY PLAN, very much the same as this query. So let's just run this same query again and observe the difference. Okay. Now, if we take a look at the detail column of our output, we can see something has changed. And this tells us that instead of doing a full table scan, this query is now utilizing the new index that we have created, idx_duration. And thereby, we have now optimized this particular query, improving the search results when it is searched against.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[User Experience (UX)|User experience]] (1), [[Scalability]] (1), [[Databases]] (1), [[Data Structures]] (1)
> **Env Vars:** sql (3), explain (2), query (2), plan (2), scan (2)
> **Code Identifiers:** idx_duration (4), imedia (1)
> **Analogies:** for example (2), for instance (2), imagine (1)
> **Cross-References:** in the last (1), as we saw (1), in the next (1)
> **CLI Commands:** make (1), find (1)
> **SQL:** where (1), index (1)
> **Definitions:** is a  (1)

#### [Handling and querying large datasets efficiently](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/handling-and-querying-large-datasets-efficiently?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/handling-and-querying-large-datasets-efficiently?u=76281980&t=0)** - [Instructor] Welcome back. Now that you have learned and applied some query optimization techniques, let's now shift our focus to the challenges of handling and querying large datasets. Managing large volumes of data efficiently is crucial for maintaining performance and ensuring [[Scalability]]. Now, large datasets can lead to performance degradation, increased storage requirements, and more complex [[Data Management]]. Challenges include slow query performance, difficulty maintaining indexes, and making sure your data is consistent. For example, our music database with millions of tracks can experience slow query response times if it's not managed properly. As the volume of data grows, traditional techniques may become inefficient, requiring more advanced strategies for data management and query optimization. We'll now take a look at some of the strategies we can employ to apply to our own iMedia music database. Now, if you navigate to your Exercise Files folder, you'll see in there a file called Managing Large Datasets Completed. Open this file and you'll see the document in front of your screen here. The important areas in this document is where it says some Example Documentation,
>
> **[1:36](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/handling-and-querying-large-datasets-efficiently?u=76281980&t=96)** and this section includes detailed steps and considerations for managing large datasets in your music database. So here you have the steps outlined. Identifying frequently queried columns for indexing. And this would involve analyzing query patterns to identify columns that are frequently queried, creating indexes, as we did, on these columns to speed up query performance. Now, when it comes to handling large data, one of the techniques that's employed is called table partitioning. And here we see we have identified how we're going to handle our partition table. Up next, we will explore a little more about partitioning tables, but for now, just know that it's the process of taking a large table and breaking it up into smaller segments. So now let's move on to seeing some practical examples of table partitioning. So as we mentioned, as our database continues to grow, we're going to be challenged with handling more and more data. One of the techniques of handling large datasets is data partitioning. And data partitioning involves dividing large tables into smaller, more manageable pieces without altering the table schema. This can improve query performance, simplify data management, and make maintenance tasks more efficient.
>
> **[3:11](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/handling-and-querying-large-datasets-efficiently?u=76281980&t=191)** Now, some of the benefits of partitioning include reduction of the amount of data scanned during queries, balancing the load across multiple partitions, and allowing parallel processing of queries. So in our music database, partitioning can help manage large volumes of track data more efficiently. Some common partitioning techniques include range partitioning, which is based on a range of values; list partitioning, based on a list of values; and hash partitioning using a hash function. Now in our example here we have our Artists table being partitioned into smaller pieces. Our strategy here, after examining the size of our database is growing and knowing that our Artists table in particular is growing in data, we would have this partitioning method set up as we do. First, we would create a table called Artists 1986 and select all of the records from the original Artists table where the birth date matches this year, 1986. We would then do the same for another year, 1987, 88, and so on. This method allows us to partition the tables into smaller pieces and thereby optimize our large database. Up next, we'll actually apply some partitioning
>
> **[4:47](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/handling-and-querying-large-datasets-efficiently?u=76281980&t=287)** in our iMedia music database. Here we are back at DB Browser with our iMedia music database set up here. We're now going to apply some of the examples that we showed with regard to partitioning our tables. So in front of us, we have pretty much the same example that we just saw, and we're going to apply it now to our iMedia music database. So starting with this first query, CREATE TABLE Artists_1986. To create this table, we're selecting all of the records from our existing Artists table where the birth date is actually 1986, and more specifically the birth year is 1986. So let's now run this query and observe the result. Query has been executed successfully without error. And now let's jump over to our Browse Data tab and take a look. We do have our Artists table, which is 101 records, but now we also have our Artist 1986, and that now consists of only two records. And when we look at the birth year, we do see those two records. Let's go ahead and continue with our second CREATE TABLE statement here, which is creating the second partition table of our original Artists table.
>
> **[6:22](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/handling-and-querying-large-datasets-efficiently?u=76281980&t=382)** With that, our second query has run, and jumping over to the Browse Data tab, we now see we have 86 and 87 for the Artists table, and when we select 87, we see the three records. As you would imagine, we would continue this process to break up the main Artists table into these smaller tables, effectively partitioning it. And this also effectively improves the performance of our database. Up next, we'll take a look at some more techniques for optimizing efficiency. Now that you've applied data partitioning to your table, it's now time to focus on using something called views to simplify complex queries and enhance performance. So what is a view? Well, views are virtual tables that show the result of a stored query. They simplify complex queries by combining them into a single table, making it easier to manage and reuse query logic. So for instance, creating a view to combine all of the data from the table that we just partitioned is an excellent use of a view. Now, some of the benefits to using views is that they help simplify query syntax, contain complex logic, and enhance security by restricting access to specific data.
>
> **[7:57](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/handling-and-querying-large-datasets-efficiently?u=76281980&t=477)** So for instance, if you created a view to show only active artists, like the example we are showing here, this particular syntax CREATE VIEW Active_Artists AS, and then a regular SELECT statement, which is actually specifying WHERE IsActive=1 is effectively creating a view that shows us a slice of this particular data, and that is only active artists. Alright, let's now segue to our iMedia music database in DB Browser and apply some views of our own. So here we are back at DB Browser for SQLite with our iMedia music database open. We're now going to create some views that's going to help us improve and optimize our database. Now, if you recall, during our partitioning phase, we created some partitioned tables, and those were Artists_1986 and Artists_1987. Now, let's create a view that's going to join or combine the data from both of these separate tables into a single view. To do so, we use the keywords CREATE VIEW, specify the view name, and the keyword AS. What follows here is a UNION ALL statement, which is joining the data between two separate tables.
>
> **[9:33](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/handling-and-querying-large-datasets-efficiently?u=76281980&t=573)** So when I say SELECT*FROM Artists_1986, UNION ALL, then SELECT*FROM Artists_1987, this is effectively combining all of the data from these two tables into a single view. So let's go ahead and do that. I'm going to highlight everything and run this view. Our query has finished without error, and that tells us that our view has been created. To verify this, let's go back to our database structure and under Views now you do see that we have our All_Artists view. And within that All_Artists view are the field names from those two separate tables that we saw. Now, let's jump over to Browse Data for a second and take a look at our view. You see that it's actually highlighted here just as in the list of tables, but the symbol here is a little different from those of tables indicating that this is actually a view. Now, let's select this, and what do we see here? We see the combined results of both our 1986 and 1987 tables in a singular view, and this demonstrates some of the advanced capabilities that views allow us to employ in our [[Databases]]. Okay, let's keep pushing here, and we can actually observe our results here in our [[SQL]] statement as well. We can now say SELECT*FROM our newly created
>
> **[11:09](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/handling-and-querying-large-datasets-efficiently?u=76281980&t=669)** All_Artists view and observe the result as well. And we see what we saw in that Browse Data view, which is the combined results of both 1986 and 1987. Okay, let's look at creating yet another view. This view is going to create a popular artist view, which is combining the results of two tables. We're doing an INNER JOIN that joins the artists to the Album tables, and we're grouping by the artist's name. In our SELECT, we're selecting the Name and the COUNT of the Album IDs. So let's now run this entire view to create it. We have our message telling us that the view has been created successfully. We can do our double checks here and see we have yet another view. And now, if we go over to our Browse Data, we do see yet another view as well in this view. And we can highlight it and we see the total content of this. Let's jump back over to Execute SQL. And just as we did before, within our Execute SQL window, we can create a query that is now referencing our newly created popular artists view, and run this query, and we see that we have a list of all of the artists that are in our view here.
>
> **[12:43](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/handling-and-querying-large-datasets-efficiently?u=76281980&t=763)** So this here again, shows a powerful way that you could start employing to optimize your database. Okay, now that we've created and used views to simplify complex queries, let's now focus on [[Batch Processing]] and parallel execution techniques to handle large datasets efficiently. So starting with batch processing. This involves dividing large tasks into smaller, more manageable batches. This approach can improve performance by reducing the load on the database and allowing for more efficient resource utilization. So for example, batch updating the duration for tracks by processing smaller subsets of data at a time. So in our music database, batch processing can be used to perform large scale updates or calculations without overloading the database server. So let's now move to yet another technique, and this is called parallel execution. Parallel execution allows multiple operations to be performed simultaneously, speeding up query processing and improving performance for large datasets. This can be achieved by dividing tasks among multiple processors or threads. So for example, running multiple queries concurrently to process data faster.
>
> **[14:19](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/handling-and-querying-large-datasets-efficiently?u=76281980&t=859)** Parallel execution is particularly useful for large scale [[Data Processing]] tasks that can be divided into independent units of work. Okay, so now as we've done before, let's now segue to our actual iMedia music database and apply some batch processing and parallel execution. Okay, now back at our DB Browser for SQLite with our iMedia music database loaded, let's now apply some batch processing to this particular database. Now, we're going to apply this to our Tracks table with the use of these two UPDATE statements. So let's take a look at them in a little more detail, starting with this first statement. It's an UPDATE that's updating the Tracks table and it's setting the duration to increment to one more than it currently is. And this is the crucial part with regard to batch processing. This is now taking partial amounts of the table, the Tracks table, and applying this UPDATE to it. So we are taking our first step here BETWEEN 1 and 30, all of the track IDs that fall in between this range. Then in the second statement, we're performing the exact same UPDATE, but with a new batch via our WHERE clause. We are just updating the records that fall
>
> **[15:54](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/handling-and-querying-large-datasets-efficiently?u=76281980&t=954)** between 31 and 60 at this time. So this effectively is executing this process called batch processing. I'm now going to run these statements, just going to highlight this one, UPDATE this, and then we're going to UPDATE these records here. Now, we could again check these records and see the updates in the Browse Data tab, and I will allow you to take some time and check out the effect of those records. Let's now move on to parallel execution, which is another powerful technique for optimizing large datasets. Here, as we mentioned, what this does is allow you to execute several tasks simultaneously without this particular command PRAGMA synchronous=OFF. Now, when we execute this command, our queries run simultaneously, that is in parallel, and this is a technique of improving the performance when your data reaches to a quite large state. So here we have our two processes. I'm going to now run this particular one. As we've seen before, when working with PRAGMA, you get a confirmation message, and I just say yes to this. Now at this point, any queries that I'm running, if I'm running two, three, four queries, they all get processed at the same time. Awesome. Excellent work.
>
> **[17:28](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/handling-and-querying-large-datasets-efficiently?u=76281980&t=1048)** You've successfully learned and applied various techniques to optimize queries and manage large datasets in our music database. In the next module, you'll bring everything together with a comprehensive final project. See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Batch Processing]] (7), [[Data Management]] (3), [[SQL]] (3), [[Scalability]] (1), [[Databases]] (1)
> **Env Vars:** update (6), select (5), create (4), sql (3), table (2)
> **SQL:** update (6), select (5), create table (2), where (2), inner join (1)
> **Code Identifiers:** imedia (8)
> **Definitions:** is a  (4), is called (2), is an  (1)
> **Analogies:** for example (3), for instance (2), imagine (1)
> **Cross-References:** we mentioned (2), go back to (1), in the next (1)
> **Prerequisites:** set up (2)


### Module 7: Bringing It All Together

[↑ Back to Table of Contents](#table-of-contents)

#### [Final project](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/final-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/final-project?u=76281980&t=0)** - [Instructor] Welcome to your last stop in this course where you will integrate all the skills you've learned in this final project. You'll modify your current music database schema to include a new table and create new queries to accommodate this addition. At this point, navigate to your exercise files area and locate the file Final Project Template. Open that file and follow along on the screen here. So let's take a look at what our final project consists of, starting with the objective. The goal is to enhance the music database by adding a new media type table, integrating it with the existing schema. You'll need to create queries to accommodate these changes. Now let's take a look at the media type table. We see here that it has two columns, a media type ID, which is of type integer, and a name column, which is of type text. The values within these two columns are as follows, one, two, three, four, five, and the associated media type for each one of these media type IDs. All right, now let's move on and look at the logic for assigning the media type ID. As you may imagine from one business to another,
>
> **[1:35](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/final-project?u=76281980&t=95)** there is some degree of business logic that's needed in determining processes. For our company, iMedia Music, they have determined based on various lengths of the duration of their tracks that they would like to assign different media type IDs for each. So let's take a look, starting with the first one, which is media type ID one, we see that the logic here is where the duration is under 180 seconds, and going along to media type two, the specification for this media type is the duration between 180 and 230 seconds. And the trend goes on for media type three, four, and five. So we need to build in the logic that will assign these particular media type IDs to the tracks that we have specified. Okay, now let's move on to a couple more aspects here. Planning the project. And here's a small hint, try dividing the project into smaller tasks. For example, creating the media type table, modifying existing tables and writing new queries should all be separate smaller tasks. Finally, apply what you've learned to design the new table integrated into the existing schema and write queries against it once it's implemented.
>
> **[3:13](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/final-project?u=76281980&t=193)** Good luck to you and in the very next video, we will walk through step by step everything that's needed to complete this final project.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (1), template (1)
> **Analogies:** imagine (1), for example (1)
> **Code Identifiers:** imedia (1)
> **Cross-References:** next video (1)
> **Documentation:** specification (1)
> **UI Navigation:** navigate to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Final project solution](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/final-project-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/final-project-solution?u=76281980&t=0)** - [Instructor] Welcome to the walkthrough of your final project, where you were tasked with adding an additional table, the media type table to our existing structure. Now, this is a typical request that would come from management, and let's now walk through the steps that we would now have to take to apply these changes. So starting with the first step here, which is to create the media type table. We're just using the create table command and we're specifying the table columns that we were given in our assignment, and that's the media type id and the name column, integer and name respectively. We are giving the first media type id, the primary key index, and we're also setting a not null constraint on the name. Let's now run this query. With that, our media type table is now created. Now let's insert some values into our newly created media type table. And this insert query does this for us. Insert into media type the columns, and we have the values again that we've been supplied to populate our new media type table. So now let's highlight these and click on run. Now let's just jump over and verify
>
> **[1:37](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/final-project-solution?u=76281980&t=97)** that those values were populated and we go to our browse data tab and look for that media type table. And in there we see the values that we just set up, one through five and the names that are associated. Okay, let's now keep going. Our next step is to modify the existing tracks table to include the new media type field. So here this particular statement is now going to alter our existing tracks table and add the media type ID column as an integer data type. Let's now run this. Okay. Now we can also verify this by jumping over to tracks in our browse data tab, and we could see we have a new media type id, which is currently all nulls. Okay, let's keep going. Now that we have created our new media type ID column in our tracks table, we now need to populate that particular column based on the following logic. Again, you were supplied with this logic. Just to revisit how something like this comes about, this is very much a business specific decision. From one business to another, there are various business decisions or business logic that need to be applied and this is a good example of that. So now let's run all of our update statements together here.
>
> **[3:13](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/final-project-solution?u=76281980&t=193)** Okay, everything has run successfully. Now let's return to our table and take a look. Our tracks table, which just had our newly created media type ID, is now populated based on the logic that we have supplied. Okay, so far so good. The next step here is to now make sure that our foreign key relationships are enabled. Now, this enables the enforcement of the foreign key constraint in the SQLite database, making sure that we maintain referential integrity. So let's now run this, and as we know, we get a confirmation message, which we'll say yes to. Okay, moving along, we're doing quite well. Our next step is to validate the media type to tracks values. Now, this next query is going to select and display the track IDs, titles and their corresponding media type names by joining the tracks to the media types table. Let's now run this query here. Okay, so now when we join these two tables, the tracks to the media type table, we can now see that we have populated for every single track id, there is a track title and now a media type name. And we have populated our tables in the right way.
>
> **[4:52](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/final-project-solution?u=76281980&t=292)** This validation query verifies that for us. Okay, let's keep moving. Now, this next query is going to select and display tracks that have a media type Id not present in the media type table, making sure that there are no orphan records. So let's highlight and run this and as expected, we do not have a result, and this is what we want to see. Our validation is good. Let's keep moving on. Our next step is to display the structure of the media type and tracks tables confirming that the schema changes have been applied correctly. Now, these two statements are going to do this for us, PRAGMA table info and the table names specified. And we would like to see the information about the media type and tracks tables. So let's highlight both of these and run them. Okay. We can see that we have a result here. And the biggest things that are of importance is to let us know that the types of data and the columns that we see are indeed correct. So let's do this a little more clearer. I'm just going to run for the media type table only first. And in the media type table, we're verifying that were those columns indeed created
>
> **[6:26](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/final-project-solution?u=76281980&t=386)** as we specified and we can see, yes, they were, the media type ID and the name. And for each of those two columns, we actually have the types associated with them, which one is the primary key, and whether or not the field can hold nulls. One is true, zero is false. Okay. Let us now keep going. We will run the second statement just to observe that our tracks table now contains that new column, which is media type ID as an integer. So this is just again another check. As we saw, we can go to the database structure, we can do a browse data, but this is a [[SQL]] coded way of us achieving that same result, verifying that our columns and table structures have changed in the way that we intended. Okay, now in our final query here, we're going to validate the query performance. Now this query here is going to provide the query execution plan showing how SQLite will execute the join between tracks and media type, which helps in optimizing and validating the query performance. So now let's highlight this and run it. Now here we can see that we have a full table scan happening
>
> **[8:07](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/final-project-solution?u=76281980&t=487)** on the tracks table, and we can see for our media type, it's using the integer primary key. Again, a final verification to make sure that our query is indeed optimized as expected. As we did before, we can alter these particular values. If we found, like for instance, the tracks table needed to be indexed so we can change it from a full table scan to an indexed scan, optimizing its performance. And there you have it. You've now taken all of the steps to complete the schema change and thereby completing your final project. Congratulations! Well done!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Definitions:** is a  (4)
> **UI Navigation:** go to (2), click on (1)
> **CLI Commands:** make (2)
> **Env Vars:** pragma (1), sql (1)
> **Cross-References:** as we saw (1)
> **Analogies:** for instance (1)
> **Prerequisites:** set up (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Reflect on the knowledge and skills acquired](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/reflect-on-the-knowledge-and-skills-acquired?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/reflect-on-the-knowledge-and-skills-acquired?u=76281980&t=0)** - And that brings us to the end of the course. We're definitely celebrating, break dancing, limboing and doing a general boogie because you've done an amazing job. You've learned how to conceptualize a music database, gather and document requirements, design robust database schemas and implement ETL processes. You've also gained skills in normalization, query optimization and managing large data sets. Now here are some next steps to continue your journey.

> [!info]- Semantic Content
>
> **Env Vars:** etl (1)
> **Speakers:** - and (1)

#### [Career opportunities](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/career-opportunities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/career-opportunities?u=76281980&t=0)** - [Instructor] The skills you've acquired open a range of exciting career opportunities. With advanced [[SQL]] and [[Database Management]], you can pursue roles like data analyst, data administrator, and data engineer. Here are some practical steps you can take. Firstly, showcase your skills. Update your [[LinkedIn]] profile with your new certificate and projects. Connect with industry professionals like myself and join relevant groups. Build a portfolio. Use platforms like [[GitHub]] to share your projects. This not only showcases your skills, but also demonstrates your ability to apply them in real-world scenarios. Leverage your current job, apply your skills in your current role by optimizing data processes or taking on data-related projects. This can position you for promotions or new opportunities within your company. Network. Attend industry meetups, webinars and conferences. Networking can lead to job referrals and collaborations. And finally, freelance. Consider freelancing to gain more experience and build your portfolio. Platforms like Upwork and Freelancer can connect you with potential clients. Remember, the key is to keep learning
>
> **[1:34](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/career-opportunities?u=76281980&t=94)** and applying your skills. The more you practice, the more proficient you'll become.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[Database Management]] (1), [[LinkedIn]] (1), [[GitHub]] (1)
> **Env Vars:** sql (1)
> **Tools:** github (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Further learning resources and pathways](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/further-learning-resources-and-pathways?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-sql-project-design-and-manage-a-database/further-learning-resources-and-pathways?u=76281980&t=0)** - [Instructor] So to wrap things up, I'd like to talk to you about your next steps and further learning resources. Before diving into specific recommendations, I encourage you to take some time to reflect on your interests and passions. Consider where you see yourself on your career path journey. This introspection will help you rightsize your next learning steps with your career goals in mind. Here are some of my courses available on the [[LinkedIn]] Learning platform that can further enhance your skills, "[[SQL Essential Training]]," "Complete Guide to AI and [[Data Science]] for [[SQL]] Developers: From Beginner to Advanced," "[[SQL Server Intelligence- Cracking the Code of Enterprise Data]]," and "[[Data Analysis- Investigate with SQL]]." Taking these and similar courses will not only broaden your understanding, but also strengthen your skills in database modeling and data analysis. So keep pushing forward, stay curious, and continue to build on the skills you've developed in this course. Thank you for allowing me to play a small part in your learning journey. Keep striving for excellence and continue to achieve great things in your career. Till the next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[LinkedIn]] (1), [[Data Science]] (1), [[Microsoft SQL Server|Sql server]] (1)
> **Env Vars:** sql (4)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Walter Shields]]

## Resources

- Exercise files available

## Skills Covered

- Extract, Transform, Load (ETL)
- Database Design
- SQL

## Path Context

### In [[Advance Your Database Administration Skills]]
← [[Advanced SQL for Query Tuning and Performance Optimization]] | **9 of 11** | [[Cloud Architecture- Core Concepts]] →

## Appears In

- [[Advance Your Database Administration Skills]]

## Related Courses

_Courses sharing skills:_

- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL, Database Design
- [[ETL in Python and SQL]] — SQL, Extract,  Transform
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL
- [[Advanced SQL for Data Science- Time Series]] — SQL
- [[Intermediate SQL- Data Reporting and Analysis]] — SQL

---

[↑ Back to top](#)