---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: relational-databases-essential-training
url: "https://www.linkedin.com/learning/relational-databases-essential-training"
duration_minutes: 151
duration: 2h 31m
level: Intermediate
updated: 9/27/2024
learners: 90304
skills:
  - Relational Databases
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHRVJv64vl5vw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1727207319739?e=2147483647&amp;v=beta&amp;t=vgCdRgO7nVfvUfDnTMDqXWCbfrZCQ1x0wBFLBDQIyNc"
linkedin_topic: Data Science
learning_paths:
  - '[[Introduction to Fundamental Skills for Data Work- Data Storage]]'
prev_courses:
  - '[[Database Design Fundamentals]]'
next_courses:
  - '[[Introduction to Data Warehouses]]'
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Storage","position":2,"total":6,"prev":"Database Design Fundamentals","next":"Introduction to Data Warehouses"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/relational-databases
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Relational%20Databases%20Essential%20Training.md)

![Relational Databases Essential Training](https://media.licdn.com/dms/image/v2/D560DAQHRVJv64vl5vw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1727207319739?e=2147483647&amp;v=beta&amp;t=vgCdRgO7nVfvUfDnTMDqXWCbfrZCQ1x0wBFLBDQIyNc)

# Relational Databases Essential Training

> In today’s big-data world, understanding how to model phenomena with a relational database is an invaluable skill. A variety of different users—from government agency employees to gamers—rely on relational databases for everyday operations. In this course, join Adam Wilbert as he covers the fundamentals of the relational model for creating databases of real-world situations. Adam goes over concept

> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training) | 2h 31m | Intermediate | 90K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Organize data with the relational model](#organize-data-with-the-relational-model)
  - [What you should know](#what-you-should-know)
  - [Exploring the code challenge environment](#exploring-the-code-challenge-environment)
- [**1. Get to Know Relational Databases**](#1-get-to-know-relational-databases) (4 videos)
  - [A brief introduction to data storage](#a-brief-introduction-to-data-storage)
  - [E.F. Codd's relational model](#ef-codds-relational-model)
  - [What the CRUD?](#what-the-crud)
  - [Relations, tuples, tables, and records](#relations-tuples-tables-and-records)
- [**2. Entity Relationship Diagrams**](#2-entity-relationship-diagrams) (6 videos)
  - [Develop a model of the real world](#develop-a-model-of-the-real-world)
  - [Choose an ER design tool](#choose-an-er-design-tool)
  - [Design a table](#design-a-table)
  - [Attribute data types](#attribute-data-types)
  - [Use primary keys to identify records](#use-primary-keys-to-identify-records)
  - [Object naming considerations](#object-naming-considerations)
- [**3. Data Integrity and Validation**](#3-data-integrity-and-validation) (6 videos)
  - [Data constraints](#data-constraints)
  - [Create a unique constraint](#create-a-unique-constraint)
  - [Required attributes and null values](#required-attributes-and-null-values)
  - [Define a default value](#define-a-default-value)
  - [Establish table indexes](#establish-table-indexes)
  - [Add check constraints](#add-check-constraints)
- [**4. Relationships**](#4-relationships) (8 videos)
  - [Relate tables with foreign keys](#relate-tables-with-foreign-keys)
  - [Diagram a relationship](#diagram-a-relationship)
  - [Relationship optionality and cardinality](#relationship-optionality-and-cardinality)
  - [One-to-many relationships](#one-to-many-relationships)
  - [One-to-one relationships](#one-to-one-relationships)
  - [Many-to-many relationships](#many-to-many-relationships)
  - [Self joins](#self-joins)
  - [Cascade changes](#cascade-changes)
- [**5. Normalization**](#5-normalization) (2 videos)
  - [Relational database normal forms](#relational-database-normal-forms)
  - [When not to normalize](#when-not-to-normalize)
- [**6. Structured Query Language**](#6-structured-query-language) (8 videos)
  - [Convert the ER diagram to a database](#convert-the-er-diagram-to-a-database)
  - [Data definition queries](#data-definition-queries)
  - [Solution: Create tables with DDL commands](#solution-create-tables-with-ddl-commands)
  - [Data manipulation queries](#data-manipulation-queries)
  - [Solution: Add data with DML commands](#solution-add-data-with-dml-commands)
  - [Write database select queries](#write-database-select-queries)
  - [Solution: Query data in a database](#solution-query-data-in-a-database)
  - [Create a database view](#create-a-database-view)
- [**7. Beyond the Relational Model**](#7-beyond-the-relational-model) (2 videos)
  - [Graph databases](#graph-databases)
  - [Document databases](#document-databases)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Organize data with the relational model
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/organize-data-with-the-relational-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/organize-data-with-the-relational-model?u=76281980&t=1)** - [Instructor] Relational databases are the most popular way of managing information for a number of reasons.
>
> **[0:06](https://www.linkedin.com/learning/relational-databases-essential-training/organize-data-with-the-relational-model?u=76281980&t=6)** They store data efficiently.
>
> **[0:07](https://www.linkedin.com/learning/relational-databases-essential-training/organize-data-with-the-relational-model?u=76281980&t=7)** They allow you to retrieve information quickly.
>
> **[0:09](https://www.linkedin.com/learning/relational-databases-essential-training/organize-data-with-the-relational-model?u=76281980&t=9)** And they're unbelievably flexible.
>
> **[0:11](https://www.linkedin.com/learning/relational-databases-essential-training/organize-data-with-the-relational-model?u=76281980&t=11)** Government agencies, programmers, gamers, and businesses large and small all over the world rely on relational database's for every day operations.
>
> **[0:20](https://www.linkedin.com/learning/relational-databases-essential-training/organize-data-with-the-relational-model?u=76281980&t=20)** And in my LinkedIn learning course I'm going to show you the things that you need to know in order to build one for yourself.
>
> **[0:26](https://www.linkedin.com/learning/relational-databases-essential-training/organize-data-with-the-relational-model?u=76281980&t=26)** Hi, my name is Adam Wilbert and I've been introducing people to the benefits of organizing their data in relational database's for the past 15 years.
>
> **[0:34](https://www.linkedin.com/learning/relational-databases-essential-training/organize-data-with-the-relational-model?u=76281980&t=34)** It's pretty save to say that without relational database's our world would function very differently.
>
> **[0:39](https://www.linkedin.com/learning/relational-databases-essential-training/organize-data-with-the-relational-model?u=76281980&t=39)** I'm excited to show you why they're so popular.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (3), data (2), [[Relational Databases]] (1), [[LinkedIn]] (1)
> **Speakers:** - [instructor] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/what-you-should-know?u=76281980&t=1)** - [Instructor] To get the most out of this course, you should have a need to organize some data, but that's about it.
>
> **[0:06](https://www.linkedin.com/learning/relational-databases-essential-training/what-you-should-know?u=76281980&t=6)** This course is aimed at people that are brand new to relational databases, so no prior knowledge is expected.
>
> **[0:11](https://www.linkedin.com/learning/relational-databases-essential-training/what-you-should-know?u=76281980&t=11)** I've written the material to be platform agnostic, so it doesn't matter if you plan on creating a database with SQL Server or MySQL or PostgreS or Microsoft Access, or if you don't even know what any of those are, that's fine, too.
>
> **[0:24](https://www.linkedin.com/learning/relational-databases-essential-training/what-you-should-know?u=76281980&t=24)** All you need to do is bring a little curiosity about how relational databases work and be ready to apply what you learn to your own data needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), [[Relational Databases]] (2), database (1), [[Microsoft SQL Server|Sql server]] (1), [[MySQL]] (1)
> **CLI Commands:** mysql (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### Exploring the code challenge environment
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/exploring-the-code-challenge-environment-24764267?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/relational-databases-essential-training/exploring-the-code-challenge-environment-24764267?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the Challenge links in the course's Table of Contents.
>
> **[0:06](https://www.linkedin.com/learning/relational-databases-essential-training/exploring-the-code-challenge-environment-24764267?u=76281980&t=6)** Each challenge includes Instructions and a code editor you can use to create and test your own solutions to the challenge.
>
> **[0:14](https://www.linkedin.com/learning/relational-databases-essential-training/exploring-the-code-challenge-environment-24764267?u=76281980&t=14)** These challenges are hosted by CoderPad, and they appear in the same area of the course page where you watch the course's videos.
>
> **[0:21](https://www.linkedin.com/learning/relational-databases-essential-training/exploring-the-code-challenge-environment-24764267?u=76281980&t=21)** We recommend using a desktop browser for the best experience with code challenges, but you can use the LinkedIn Learning mobile app if you prefer.
>
> **[0:29](https://www.linkedin.com/learning/relational-databases-essential-training/exploring-the-code-challenge-environment-24764267?u=76281980&t=29)** The code challenge has three areas.
>
> **[0:31](https://www.linkedin.com/learning/relational-databases-essential-training/exploring-the-code-challenge-environment-24764267?u=76281980&t=31)** We have Instructions in the top left, a Console for output in the bottom left, and a code editor for your answers on the right.
>
> **[0:40](https://www.linkedin.com/learning/relational-databases-essential-training/exploring-the-code-challenge-environment-24764267?u=76281980&t=40)** You can use these drag handles to reallocate space however you'd like.
>
> **[0:44](https://www.linkedin.com/learning/relational-databases-essential-training/exploring-the-code-challenge-environment-24764267?u=76281980&t=44)** To get even more horizontal space for the code editor, you can collapse the course's Table of Contents on the left.
>
> **[0:51](https://www.linkedin.com/learning/relational-databases-essential-training/exploring-the-code-challenge-environment-24764267?u=76281980&t=51)** Now, each challenge has instructions that include a description of the challenge and the challenge's desired result.
>
> **[0:57](https://www.linkedin.com/learning/relational-databases-essential-training/exploring-the-code-challenge-environment-24764267?u=76281980&t=57)** You'll create your answer in the code editor.
>
> **[1:00](https://www.linkedin.com/learning/relational-databases-essential-training/exploring-the-code-challenge-environment-24764267?u=76281980&t=60)** When you click on the Test my code button, you'll see a message indicating whether your code returned a correct result and a text-based version of the returned data.
>
> **[1:08](https://www.linkedin.com/learning/relational-databases-essential-training/exploring-the-code-challenge-environment-24764267?u=76281980&t=68)** In this case, this SQL query is not correct for this challenge, so I'll change it to a correct output.
>
> **[1:13](https://www.linkedin.com/learning/relational-databases-essential-training/exploring-the-code-challenge-environment-24764267?u=76281980&t=73)** I'll select Max price as price from Dishes.
>
> **[1:19](https://www.linkedin.com/learning/relational-databases-essential-training/exploring-the-code-challenge-environment-24764267?u=76281980&t=79)** I'll test my code again, and this time I get the correct expected output with a single row.
>
> **[1:24](https://www.linkedin.com/learning/relational-databases-essential-training/exploring-the-code-challenge-environment-24764267?u=76281980&t=84)** Now, if any messages are too long to fit in the console, you can scroll sideways to see all of the text.
>
> **[1:30](https://www.linkedin.com/learning/relational-databases-essential-training/exploring-the-code-challenge-environment-24764267?u=76281980&t=90)** When you've finished each code challenge, return to the course's Table of Contents, and click to the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1), data (1), [[SQL]] (1), next (1)
> **UI Navigation:** click on (2)
> **Env Vars:** sql (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)


### 1. Get to Know Relational Databases

[↑ Back to Table of Contents](#table-of-contents)

#### A brief introduction to data storage
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=1)** - [Instructor] The problem of how to record information for future reference isn't new.
>
> **[0:05](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=5)** In fact, it's one of the oldest human problems and some of the earliest examples of written language were made to do just that.
>
> **[0:10](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=10)** They include records of shipping manifests and trade agreements.
>
> **[0:13](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=13)** There are receipts for bushels of grain and barrels of wine.
>
> **[0:17](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=17)** Fast forward a few thousand years and businesses all over the world are still doing much the same, albeit with tools that are a little bit more modern than a clay tablet.
>
> **[0:25](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=25)** One of the simplest ways that we can store data is in a list.
>
> **[0:28](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=28)** In computer science terms, you might call this a one-dimensional array.
>
> **[0:32](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=32)** Let's suppose that we have several picture files that we want to organize from a recent vacation.
>
> **[0:37](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=37)** I put them all into a single folder on my computer.
>
> **[0:40](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=40)** Here I have an alphabetized list of the images.
>
> **[0:42](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=42)** This makes it easy to find each one based off of the file name.
>
> **[0:47](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=47)** If I want to look at the picture of the Sphinx in Egypt, I can look right to the bottom of the list and find it there.
>
> **[0:52](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=52)** But what if I want to find other pictures taken in Egypt?
>
> **[0:56](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=56)** You might see that we have one of the Great Pyramids just by scanning through the list.
>
> **[1:00](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=60)** But if we had hundreds of photos, it would be easy to miss one or two.
>
> **[1:04](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=64)** Instead, we can organize our images in a hierarchy.
>
> **[1:07](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=67)** You might make folders on your computer for each location and then place the pictures in their respective folders.
>
> **[1:12](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=72)** Now, to find the picture of the Sphinx, you need to remember that it was taken in Cairo, Egypt.
>
> **[1:16](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=76)** But once you do, you can easily find the picture of the Great Pyramids in the same folder.
>
> **[1:21](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=81)** If you took lots of photos, you might make one folder for the country and then a sub folder for each city in that country and then place the pictures there.
>
> **[1:28](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=88)** This makes a hierarchical structure that looks a lot like a branching tree.
>
> **[1:33](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=93)** The problem with this arrangement is that you can only store your pictures in one way.
>
> **[1:36](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=96)** In this case, by location.
>
> **[1:39](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=99)** If you wanted to also store them by the month of the date that you took them or by what people were in the photo, you'd have to create additional hierarchies and organize duplicate copies of your pictures.
>
> **[1:49](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=109)** We can start to solve this problem by storing information about each picture in a data table.
>
> **[1:53](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=113)** This allows us to include much more information about each picture.
>
> **[1:56](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=116)** Where it was taken?
>
> **[1:57](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=117)** Who's in it?
>
> **[1:58](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=118)** What day it was taken?
>
> **[1:59](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=119)** And so on.
>
> **[2:00](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=120)** Each of these attributes makes up a column in the data table and then each individual picture gets its own horizontal row.
>
> **[2:07](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=127)** Reading this table, we can see that the first picture stored is of the Great Pyramids.
>
> **[2:11](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=131)** It was taken in Cairo, Egypt on January 7th, 2019 and it features James.
>
> **[2:17](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=137)** Now we can easily look through this table and find all of the pictures taken in January by sorting the records based off the date column.
>
> **[2:23](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=143)** Or we can find any of the pictures of Brandi by sorting the pictures on the person column.
>
> **[2:27](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=147)** Or we could find all of the pictures from France by sorting based off of the country column.
>
> **[2:31](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=151)** In fact, we can also the pictures of the Sphinx without having to remember that it was taken in Cairo.
>
> **[2:36](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=156)** Something that you couldn't do with a hierarchical folder structure.
>
> **[2:39](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=159)** You can already see that this gives us a lot of flexibility in how we find pictures of interest.
>
> **[2:44](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=164)** This table structure will also scale well as we go on more vacations.
>
> **[2:48](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=168)** If we go back to Paris next year or go to Berlin, Germany, we will simply add additional rows for the new pictures taken on those trips.
>
> **[2:55](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=175)** So the data table gives us a low of flexibility in how we store information about our vacation pictures.
>
> **[3:00](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=180)** It gives us the flexibility to store additional attributes, like adding new columns and making the table wider.
>
> **[3:06](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=186)** And it will also easily grow over time to accommodate new pictures by adding additional rows and making the table taller.
>
> **[3:12](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=192)** It is a little inefficient though with how much data is being store.
>
> **[3:16](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=196)** You might of noticed that every time we stored the word Cairo, we also stored the word Egypt.
>
> **[3:21](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=201)** It also starts to break down if we have a photo with two or more people.
>
> **[3:25](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=205)** To do that, would you add a second person column or a third?
>
> **[3:28](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=208)** How many person columns would be enough for every photo in your library?
>
> **[3:32](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=212)** Then you'd have to search each column to find all the photos with Brandi.
>
> **[3:36](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=216)** That approach can get complicated pretty quickly.
>
> **[3:38](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=218)** The solution to both of those problems, storing redundant information and handling non standard fringe cases is to break the data tables up across multiple tables.
>
> **[3:47](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=227)** You can store information specific to the photo in one table.
>
> **[3:50](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=230)** Information about the people in another.
>
> **[3:53](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=233)** And the locations in a third.
>
> **[3:55](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=235)** This allows you to look up details from one table in another.
>
> **[3:58](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=238)** For instance, photo number five of Big Ben features Brandi, James and Carol as can be seen by looking at the photo number in the people table.
>
> **[4:07](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=247)** What we've just built is a method for storing complex data that's flexible and efficient.
>
> **[4:12](https://www.linkedin.com/learning/relational-databases-essential-training/a-brief-introduction-to-data-storage?u=76281980&t=252)** What we've just built is a relational database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), [[Microsoft Word|Word]] (2), next (1), [[Search]] (1), database (1)
> **CLI Commands:** find (10), make (2)
> **Analogies:** picture (8), for instance (1)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### E.F. Codd's relational model
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=1)** - [Instructor] Data that's structured following the principles of the relational model make up the very core of our modern lives.
>
> **[0:07](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=7)** Everything from the transactions in your bank account to the status updates that you post to social media are almost certainly managed and stored in relational databases.
>
> **[0:16](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=16)** The birth of the modern relational database can be traced back to an English data scientist named Edgar Frank Codd.
>
> **[0:23](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=23)** E.F. Codd worked for IBM in the 1960s, and in 1970 he published a paper titled A Relational Model of Data for Large Shared Data Banks.
>
> **[0:32](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=32)** In it, Codd defined a new way of structuring data so that the process of retrieving information became independent of the way that it was stored.
>
> **[0:40](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=40)** His relational model did this by defining rules for how traditional data tables should be organized and how data should be split up across multiple tables that are related based off of common values.
>
> **[0:51](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=51)** Let's take a look at the example of our vacation pictures again.
>
> **[0:54](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=54)** Here I've organized information about each photo, where it was taken, and who's in it across three different data tables.
>
> **[1:01](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=61)** Each of these tables can grow vertically as we add new pictures, new locations, and new people to the library of images.
>
> **[1:08](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=68)** But if we add a new picture taken in London, we don't actually need to touch the location's table.
>
> **[1:14](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=74)** We would simply make reference to the location number three in the appropriate column of the pictures table.
>
> **[1:19](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=79)** In the relational model, these values that like the location number, are used to look up additional details in related tables, are called keys.
>
> **[1:27](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=87)** Using the key values we can connect or relate data found in one table to the data stored in another.
>
> **[1:33](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=93)** Now at first glance, traversing these tables through their related keys might feel like an additional step that you need to go through to find the complete details about a specific image.
>
> **[1:42](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=102)** First you need to find the key value, and then you need to look that up in a second table.
>
> **[1:47](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=107)** The beauty of a relational database is that you personally don't need to do that.
>
> **[1:51](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=111)** That's what the computer is for.
>
> **[1:53](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=113)** You simply ask to see pictures taken in London, the computer will quickly translate that request to understand that London is location three, and then it'll search through the pictures table to find the ones that match.
>
> **[2:04](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=124)** As a database user, there's never any real reason you need to know that internally London is stored as location three.
>
> **[2:12](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=132)** All of the work of traversing from one table to the other is handled behind the scenes by the database engine.
>
> **[2:18](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=138)** Structuring data using Codd's relational model brings a number of benefits to users.
>
> **[2:23](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=143)** First, it's efficient.
>
> **[2:24](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=144)** Data values are stored a single time and then referenced from other tables.
>
> **[2:29](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=149)** This not only benefits the size of the database, but it can also help prevent integrity errors.
>
> **[2:34](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=154)** For instance, if a city name were misspelled, the incorrect spelling would be consistently referenced across all of the related records.
>
> **[2:40](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=160)** And it would be easy to fix by updating the single value in a single table.
>
> **[2:45](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=165)** Second, the relational model is highly scalable.
>
> **[2:48](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=168)** Each table only needs to grow vertically when appropriate.
>
> **[2:51](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=171)** In this example, we could easily accommodate pictures with no people, one person, or an entire tour group simply by adding additional rows to the people table when necessary.
>
> **[3:02](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=182)** And third, it's easy to retrieve information from a relational database.
>
> **[3:06](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=186)** You have the flexibility to ask questions of the data through a process called querying.
>
> **[3:10](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=190)** To demonstrate how querying works, consider this exercise.
>
> **[3:14](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=194)** Using just the three tables shown, can you find any pictures taken in Paris featuring James?
>
> **[3:20](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=200)** You can pause the video if you want to work through the question on your own.
>
> **[3:24](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=204)** To find the answer, you can look to the locations table to see that Paris is location number two.
>
> **[3:30](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=210)** Then go to the pictures table and find that pictures zero zero three and zero zero four were both taken in Paris.
>
> **[3:38](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=218)** Then finally you'll move over to the people table to find that of those two images, only zero zero three is a picture of James.
>
> **[3:46](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=226)** So now we know that James only appears in the Eiffel Tower picture.
>
> **[3:50](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=230)** Using the querying power of a relational database, arriving at that same answer is a relatively trivial process.
>
> **[3:56](https://www.linkedin.com/learning/relational-databases-essential-training/e-f-codd-s-relational-model?u=76281980&t=236)** All you need to do is ask the question and the database engine will put the pieces together as needed to find the answer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (13), database (8), [[Relational Databases]] (1), [[Search]] (1), power (1)
> **CLI Commands:** find (8), make (2)
> **Analogies:** picture (3), for instance (1)
> **Definitions:** is a  (2)
> **Env Vars:** ibm (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### What the CRUD?
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=0)** - [Narrator] If you need to create a written document it's likely that you'll turn to a word processor, like Microsoft Word.
>
> **[0:06](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=6)** If you want to create a spreadsheet then you'll likely use a program like Microsoft Excel.
>
> **[0:11](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=11)** And in order to create a relational database, you'll need a specialized application to do so.
>
> **[0:16](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=16)** In order to create and store data in a relational database you need to use a relational database management system or RDBMS for short.
>
> **[0:24](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=24)** There are a number of competing systems on the market today.
>
> **[0:27](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=27)** Some of which I'm sure you've heard of.
>
> **[0:29](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=29)** Microsoft SQL server and the cloud-hosted Azure SQL database are two popular relational database management systems.
>
> **[0:36](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=36)** As are: Oracle, PostgreSQL and IBM's Db2.
>
> **[0:41](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=41)** These systems power some of the world's largest corporations today and typically run on dedicated server hardware.
>
> **[0:46](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=46)** Another RDBMS is MySQL.
>
> **[0:49](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=49)** It's a popular database management system used on web servers.
>
> **[0:52](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=52)** Every website that uses the WordPress publishing platform for example, uses a MySQL database to manage blog posts and comments.
>
> **[1:00](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=60)** For smaller databases that you can run right on your local computer's desktop, you can find Microsoft Access on the PC and the FileMaker on macOS.
>
> **[1:09](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=69)** The RDBMS that you choose to use will largely depend on what you need it to do and the scale at which you need to do it.
>
> **[1:16](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=76)** Regardless of which one you use though, all relational database management systems need to perform two distinct tasks.
>
> **[1:22](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=82)** First, they'll allow you to create and modify the structure for your data.
>
> **[1:26](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=86)** This is where you define what tables will make up the database, what their names are, how many columns there'll be and what kinds of data will be stored in each column.
>
> **[1:34](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=94)** This step also allows you to define what columns will store key values and create the relationships between keys that connect each table together.
>
> **[1:42](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=102)** The second thing that a RDBMS must do is to allow you to work with and manipulate data records.
>
> **[1:48](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=108)** These are the rows that populate your tables.
>
> **[1:50](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=110)** When working with data the RDBMS needs to do four main things known by the wonderful acronym, CRUD.
>
> **[1:57](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=117)** This stands for: create, read, update and delete.
>
> **[2:00](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=120)** Create is the process of writing new records to the table.
>
> **[2:03](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=123)** Read is the process of retrieving data back out of the table when it's requested.
>
> **[2:08](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=128)** Update is process through which existing data is modified.
>
> **[2:11](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=131)** And delete is the removal of records from a table.
>
> **[2:15](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=135)** Beyond working with the structure of the data in the database, the RDBMS can also perform additional tasks.
>
> **[2:21](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=141)** These include protecting the data by performing regularly scheduled backups.
>
> **[2:25](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=145)** And copying data to redundant hard drives.
>
> **[2:28](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=148)** They can also secure information by controlling and monitoring user access and permissions.
>
> **[2:32](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=152)** Some RDMBS's include components to develop reports with graphs or charts that make it easy to understand and share the data that's being stored.
>
> **[2:40](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=160)** Or to create forms that simplify the process of entering new data.
>
> **[2:44](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=164)** Most RDBMS's use a combination of a graphical interface and a coding environment.
>
> **[2:49](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=169)** The graphical user interface will allow you to visualize your tables and connections as you build them.
>
> **[2:54](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=174)** In the code environment, you'll tell the system what you want to do using a language called SQL.
>
> **[2:59](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=179)** SQL stands for structured query language.
>
> **[3:02](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=182)** Each RDBMS vendor uses a slightly different version of the language.
>
> **[3:06](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=186)** But they all allow you to create database objects such as tables and perform CRUD tasks on the data.
>
> **[3:12](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=192)** SQL is also the language that you use to query or ask questions about the data.
>
> **[3:17](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=197)** And have the system retrieve records that match your requests.
>
> **[3:20](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=200)** Now I know that was a lot of acronyms, so lets run through them one more time.
>
> **[3:24](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=204)** The RDBMS, the relational database management system is the application that creates and manages relational databases.
>
> **[3:31](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=211)** When working with data, the RDBMS will perform CRUD tasks to create, read, update, and delete records.
>
> **[3:38](https://www.linkedin.com/learning/relational-databases-essential-training/what-the-crud?u=76281980&t=218)** And you'll use SQL, structured query language to work with the system, to create objects and manipulate data as well as to retrieve information that's been previously stored.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (16), database (12), management (5), [[SQL]] (5), application (2)
> **Env Vars:** rdbms (10), sql (6), crud (3), ibm (1), rdmbs (1)
> **CLI Commands:** mysql (2), make (2), find (1)
> **Definitions:** stands for (2)
> **Analogies:** for example (1), such as (1)
> **Code Identifiers:** macos (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### Relations, tuples, tables, and records
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=0)** - [Instructor] E.F. Codd's Relational Model has its roots in mathematics and set theory, and this means that there's a number of technical terms that you're likely to come across as you delve into the world of relational databases.
>
> **[0:10](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=10)** With that said, practical database use over the past 50 years has softened or simplified some of the major concepts.
>
> **[0:17](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=17)** And it's no longer necessary to adhere to a strict mathematical definition, especially when you're just starting out.
>
> **[0:23](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=23)** In the original paper a, relational model of data for large share data-banks, Codd refers to relations, domains, and tuples as being the core components of a relational database.
>
> **[0:34](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=34)** The definition of what exactly these are can be useful to professional database developers and data scientists, but for you and I in this introductory course, we're going to call them by their common names.
>
> **[0:44](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=44)** Tables, columns and records.
>
> **[0:47](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=47)** These common language substitutes are not as strict and they lack some of the mathematical nuance of the original terms, but they're still useful to use and are infinitely more approachable.
>
> **[0:57](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=57)** So let's make sure we're all on the same page with what each of these means.
>
> **[1:01](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=61)** A table is the main storage device for data in a relational database.
>
> **[1:05](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=65)** You store individual pieces of information in cells that are identified at the intersection of a specific vertical column and horizontal row.
>
> **[1:13](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=73)** In this table, we can see that Benjamin's favorite color is purple by reading down the middle column to the bottom row.
>
> **[1:19](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=79)** You can also find the person with green eyes by reading down the last column to green and then over to the name column to find that they belong to Joan.
>
> **[1:27](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=87)** To create a table and give it its structure, you simply need to define the individual columns.
>
> **[1:32](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=92)** This table is made up of columns for the person name, favorite color, and eye color.
>
> **[1:37](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=97)** In some relational database management systems, they'll use the terms fields or attributes to refer to the same thing.
>
> **[1:43](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=103)** These terms are all interchangeable and all refer to the vertical component of a table.
>
> **[1:47](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=107)** In a properly designed relational database, the table columns will store a single value, for example if you need to store an address, it's best to create individual columns to store the street address, city, state, country and postal codes separately.
>
> **[2:01](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=121)** Rather than try and save all that information in a single column.
>
> **[2:05](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=125)** Doing so will create a database that's more flexible and easier to maintain.
>
> **[2:09](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=129)** The horizontal components of a table are called records and they're made of the value stored across every column.
>
> **[2:15](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=135)** This table has three records that represent information about three individual people.
>
> **[2:20](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=140)** Records can be sorted in the table in any order, and the sequence that each record appears in is irrelevant once you've sorted them in a specific and meaningful way.
>
> **[2:28](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=148)** The fact that Rose's record appears at the top above Joan and Benjamin in this view, doesn't have any significance to the data set and when you sort the records on the table, every value across the row will stay connected.
>
> **[2:40](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=160)** So for example, if I alphabetized these records, Benjamin's would move up to the top row, and his associated values of purple and brown would also move up.
>
> **[2:49](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=169)** Unlike when you sort data in some spreadsheet programs, each record in a relational database table acts as a single, connected unit.
>
> **[2:56](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=176)** So these are the major components used for storing data in a relational database.
>
> **[3:00](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=180)** Attribute columns provide the structure for the data table that stores information as discreet records.
>
> **[3:06](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=186)** As you build out an entire database, you'll simply repeat this process of creating multiple tables that store individual elements that you want to keep track of.
>
> **[3:14](https://www.linkedin.com/learning/relational-databases-essential-training/relations-tuples-tables-and-records?u=76281980&t=194)** Later, we'll connect these tables together with relationships that bring additional meaning to the data stored in each table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (10), data (9), [[Relational Databases]] (1), management (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** means that (1), refers to (1)
> **Analogies:** for example (2)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)


### 2. Entity Relationship Diagrams

[↑ Back to Table of Contents](#table-of-contents)

#### Develop a model of the real world
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=0)** - [Instructor] You wouldn't arrive at a building site with a load of lumber and start hammering together a house without a proper blueprint.
>
> **[0:07](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=7)** Constructing a database should be treated in the same way.
>
> **[0:10](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=10)** Building a database on the fly is an easy way to ensure that you wind up with a terrible final design.
>
> **[0:16](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=16)** A much better approach is to plan ahead and carefully think through the requirements of the system that you're about to build so that it accurately models the real world data that you need to store.
>
> **[0:27](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=27)** All relational databases attempt to create a model of some real world phenomenon.
>
> **[0:32](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=32)** The first steps in creating your personal database model is to identify what facts or pieces of information that you need to store.
>
> **[0:40](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=40)** Now, I've seen many people begin a database project by listing out the information that they already have and need to provide a home for.
>
> **[0:47](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=47)** This can be a good starting point, but I challenge you to think about your data needs in more detail.
>
> **[0:53](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=53)** When determining what tables you need and what columns they should contain, it's sometimes helpful to work backwards.
>
> **[1:00](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=60)** Instead of looking at what you want to put into the database, ask yourself what it is that you want to get out of the database.
>
> **[1:07](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=67)** What types of analyses or reports are you expecting to be able to review?
>
> **[1:12](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=72)** What would be helpful information to know in order to make better business decisions?
>
> **[1:17](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=77)** These types of questions can help guide you in creating a list of information that you need the database to store.
>
> **[1:23](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=83)** Then you can design the system to be able to provide the results that you desire, rather than to simply respond to what you already have.
>
> **[1:32](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=92)** Here's an example from my past.
>
> **[1:34](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=94)** I used to manage a couple of movie theaters, and one of the pieces of information that we tracked was the daily high and low temperature and whether it was raining that day or not.
>
> **[1:44](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=104)** Now, that wouldn't seem like an obvious thing for a movie theater to want to keep track of, but over time it became a very useful data set to have and it allowed us to make projections about expected theater attendance based on the weather conditions.
>
> **[1:58](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=118)** Having the ability to store weather information and attach it to historical transaction data made the database more useful.
>
> **[2:06](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=126)** That's just one example of how thinking about the results that you want to achieve can lead to a design that might not be obvious from the beginning.
>
> **[2:15](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=135)** Once you have a list of the pieces of information that you want the database to store, you need to think about how those pieces are going to get grouped into tables.
>
> **[2:23](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=143)** Look for common themes in the facts that you've listed.
>
> **[2:27](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=147)** One approach that you might find helpful is to think of the tables as nouns.
>
> **[2:31](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=151)** The people, places, things or events that you've collected data about.
>
> **[2:36](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=156)** Then each column in the table becomes adjectives.
>
> **[2:40](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=160)** The descriptive attributes about each table's topic.
>
> **[2:43](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=163)** When organizing your thoughts on the design of the database that you want to build, you're going to want to take notes.
>
> **[2:49](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=169)** Low tech solutions like sticky notes that you can move around on a wall or index cards that you can shuffle around on your desk can work really well for this.
>
> **[2:58](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=178)** You can write each attribute that you want to store on a card and then stack them into piles to represent the tables.
>
> **[3:06](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=186)** This will let you evaluate whether a table's contents make sense or if it will be better to reorganize the columns into a different arrangement.
>
> **[3:14](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=194)** Another approach is to draw a diagram, or what's more specifically called an entity relationship diagram.
>
> **[3:21](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=201)** You can use pencil and paper for this or a software drawing tool that will help you organize your database's structure.
>
> **[3:28](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=208)** Since at this stage you're not concerned with the actual records that are being stored, the makeup of the tables is just the columns and the standard convention is to place the name of the table at the top of a box and then list the columns in that table below.
>
> **[3:41](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=221)** In this diagram, I have the design of two tables mocked up, one for customer data and one for orders.
>
> **[3:48](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=228)** Each table only includes the columns that pertain to the topics of the table.
>
> **[3:53](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=233)** You'll notice that both of these tables have a column named customer ID.
>
> **[3:58](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=238)** At first glance, this might look like a data redundancy issue, but if you think about how the data is used in each context, you'll realize that the two columns represent very different uses for that information.
>
> **[4:10](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=250)** In the customer table, the customer ID will uniquely identify each individual customer, while in the orders table it identifies the customer that placed the order.
>
> **[4:21](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=261)** Because the value stored in each of these columns will be the same, we can use them to join or relate these two tables together to create a relational database.
>
> **[4:32](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=272)** In a diagram, you can simply draw a line connecting these two fields.
>
> **[4:36](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=276)** This tells the system that information in one table can be used to give more context to the information found in the other.
>
> **[4:44](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=284)** In this case we can find all of the orders that were placed by a specific customer.
>
> **[4:49](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=289)** What I've just drawn is called a one-to-many relationship.
>
> **[4:53](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=293)** We'll get into what this means in more detail later on in the course, but for now, you can read the diagram from left to right and say that each one customer can have many orders.
>
> **[5:04](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=304)** Or you can read it from right to left and say that each order can have one customer.
>
> **[5:10](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=310)** There's a couple of different ways to note this relationship on the diagram.
>
> **[5:14](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=314)** One way is to use something called unified modeling language notation or UML.
>
> **[5:20](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=320)** This will place a one on the left side of the line, and the letter N on the right.
>
> **[5:25](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=325)** The N is a mathematical notation for any number.
>
> **[5:29](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=329)** Some relational database management systems use a one to infinity symbol notation instead to mean the same thing.
>
> **[5:36](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=336)** And still others take a more diagrammatic approach and use something called crow's foot notation.
>
> **[5:42](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=342)** A single slash on the one side of the line, and a forked branch that resembles a bird's claw on the many side.
>
> **[5:49](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=349)** Any way that you draw it out means the same thing though.
>
> **[5:52](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=352)** Each customer can have several orders and each order can only have a single customer.
>
> **[5:58](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=358)** And that's the basics of creating an entity relationship diagram to help in the development of your relational database.
>
> **[6:05](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=365)** Your databases will almost certainly have more tables, but they'll all be designed and connected in the same way.
>
> **[6:12](https://www.linkedin.com/learning/relational-databases-essential-training/develop-a-model-of-the-real-world-19270480?u=76281980&t=372)** There will be more details that we can add in later to better define the structure of the database, but this is enough to get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (15), data (8), [[Relational Databases]] (1), business (1), management (1)
> **CLI Commands:** make (3), find (2)
> **Definitions:** is an  (1), is called (1), is a  (1)
> **Env Vars:** uml (1)
> **Speakers:** - [instructor] (1)

#### Choose an ER design tool
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=1)** - [Instructor] Sketching out a plan before you start building tables and connecting them with relationships in your RDBMS is always going to be a recommended best practice.
>
> **[0:09](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=9)** This will help you think through your design and identify potential challenges early on before they become major flaws in your database.
>
> **[0:15](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=15)** When it comes time to think through your data requirements and develop a model for your relational database, you really don't need anything more than a pencil and some paper.
>
> **[0:24](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=24)** But for those that prefer a software solution to help them create a design diagram and help them collaborate with coworkers, then you have a wide variety of options to choose from.
>
> **[0:33](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=33)** There are standalone desktop applications that you can use, but those can be expensive and are often tied to developing databases for a specific RDBMS.
>
> **[0:42](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=42)** For flexibility, I'd like to introduce you to a couple of free online tools that you could use.
>
> **[0:46](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=46)** Each of these run directly in your web browser so they're easy to access and can be used to develop database diagrams for a variety of RDBMSs.
>
> **[0:55](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=55)** Let's start with one called Lucidchart.
>
> **[0:57](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=57)** And you can find it at [lucidchart.com](https://lucidchart.com).
>
> **[1:00](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=60)** This site does require that you create a free account and log in.
>
> **[1:03](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=63)** Once you do, you'll be presented with this page and you can choose to create an ERD, or an entity relationship diagram.
>
> **[1:10](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=70)** That will bring up a number of different templates you can choose from.
>
> **[1:12](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=72)** And you have some that use UML notation and others that use Crow's Foot notation, like this one.
>
> **[1:19](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=79)** I'm going to choose to create this one here, the Entity Relationship Diagram Example with UML.
>
> **[1:23](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=83)** That will give me a small preview of what that's going to look like and I'll create the document.
>
> **[1:28](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=88)** When it opens you have a diagram with a number of tables and you can visualize how they connect together through relationships.
>
> **[1:34](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=94)** I'm going to zoom in on my screen just a little bit here.
>
> **[1:39](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=99)** Lucidchart gives you a graphical interface to work with so you can click and drag items around on the screen or double-click on items to start renaming them.
>
> **[1:46](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=106)** You can either modify these tables to suit your needs or you can drag in additional components from the diagram shape library over here on the left.
>
> **[1:54](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=114)** This is a pretty full-featured diagramming tool that I like a lot.
>
> **[1:58](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=118)** Another graphical tool that works well is called SQL Database Modeler and you can find it at [sqldbm.com](https://sqldbm.com).
>
> **[2:05](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=125)** This site doesn't require that you create an account if you just want to play around with a database diagram.
>
> **[2:10](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=130)** Press the button to try it for free.
>
> **[2:13](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=133)** That'll prompt you to choose a DBMS that you want to work with up front.
>
> **[2:17](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=137)** And they support some of the most popular options and this list has been growing as the site matures.
>
> **[2:22](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=142)** I'm going to choose to create a SQL Server diagram and press open sample project.
>
> **[2:28](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=148)** This is another graphical interface based tool like Lucidchart.
>
> **[2:32](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=152)** I'm going to close this menu button here and then you can click and drag these table items around on the screen and start double-clicking if you want to modify the properties.
>
> **[2:41](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=161)** You also have tools across the top of the screen if you want to add in additional tables with this button here or relationships with this button.
>
> **[2:47](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=167)** You can also add notes into your diagram which will be something like this item here.
>
> **[2:52](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=172)** These could be helpful for collaborating with others or adding a reminder about your thought process.
>
> **[2:57](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=177)** One thing that I like a lot about sqlDBM is that if you create a free account and sign in, you can save your diagrams and then click on this SQL button here in the bottom left hand corner of the interface.
>
> **[3:08](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=188)** That will export a script that will build your diagram in your chosen RDBMS, which can save you a lot of time when it comes time to convert your diagram into a real live database.
>
> **[3:17](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=197)** Next up let's take a look at [dbdiagrams.io](https://dbdiagrams.io).
>
> **[3:22](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=202)** This diagramming tool takes a slightly different approach to building database diagrams.
>
> **[3:27](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=207)** You'll type text on the left hand side of the screen that is similar to what you would use if you were typing and building a database using sql commands.
>
> **[3:35](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=215)** As you fill in table names and columns, the visual display on the right of the screen updates to show you what that would look like.
>
> **[3:41](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=221)** This tool could be fast for users that are used to writing sql commands and feel comfortable with the code.
>
> **[3:47](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=227)** Finally, there is Quick Database Diagrams at [quickdatabasediagrams.com](https://quickdatabasediagrams.com).
>
> **[3:51](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=231)** This is actually the application that I'm going to use.
>
> **[3:54](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=234)** It's similar to the last one that we looked at in that you write text on the left hand side of the screen to update the visual diagram.
>
> **[4:01](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=241)** It's a little bit different though that this one's a lot simpler to use and it will be a great place for us to get started with database diagramming.
>
> **[4:08](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=248)** Here on the text field on the left, I'm going to type in two periods and that will load it with some sample text.
>
> **[4:13](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=253)** Here we can see we have a table called Customer and then we have the different columns that make up that table.
>
> **[4:18](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=258)** And we can see a visual representation of that over here on the right.
>
> **[4:21](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=261)** Now, I also like this tool because it's easy to export your diagram to the scripts needed to implement the design.
>
> **[4:26](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=266)** You simply come up here to the Export button and you have lots of different options.
>
> **[4:30](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=270)** You can also export your database diagram to a PDF, which will be good to share with colleagues, or even graphic files you can post online or include in an email.
>
> **[4:39](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=279)** So this is the tool that I'm going to be using to build some entity relationship diagrams as we continue to explore how relational databases work.
>
> **[4:46](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=286)** But you can experiment with these tools or find another one that works best for you.
>
> **[4:50](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=290)** Or, like I said earlier, simply grab a pencil and paper.
>
> **[4:53](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=293)** Before we continue on though, I am going to make one small change to the interface here.
>
> **[4:57](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=297)** And that's to come up here to the File button and choose Use Basic color palette.
>
> **[5:01](https://www.linkedin.com/learning/relational-databases-essential-training/choose-an-er-design-tool?u=76281980&t=301)** That will increase the contrast of the diagram on the right and make things a little bit easier to read on the screen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (11), [[SQL]] (4), [[Diagramming]] (3), [[Sketching]] (1), data (1)
> **Env Vars:** rdbms (3), sql (3), uml (2), erd (1), dbms (1)
> **CLI Commands:** find (3), make (3)
> **URLs:** [lucidchart.com](https://lucidchart.com) (1), [sqldbm.com](https://sqldbm.com) (1), [dbdiagrams.io](https://dbdiagrams.io) (1), [quickdatabasediagrams.com](https://quickdatabasediagrams.com) (1)
> **UI Navigation:** double-click (1), click on (1)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** similar to (2)
> **Best Practices:** recommended (1), best practice (1)

#### Design a table
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=1)** - [Instructor] Drawing a table in an entity relationship diagram is pretty straight forward.
>
> **[0:05](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=5)** They're usually represented by a box with the table name here at the top.
>
> **[0:08](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=8)** And then another box below with a list of the different columns that'll make up the table's structure.
>
> **[0:13](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=13)** Here in the Quick Database Diagrams tool, I'm going to select all the placeholder demo text that appears on the left-hand side of the screen.
>
> **[0:19](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=19)** Then I'm just going to simply delete it to give myself a blank slate.
>
> **[0:23](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=23)** Now we can use this blank canvas to develop our own diagram.
>
> **[0:26](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=26)** I want to create a database for storing information about the products sold by my company.
>
> **[0:30](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=30)** I'll start by creating a table called "Products."
>
> **[0:33](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=33)** (keys clicking) As soon as I type the name of the table in, you'll see a new table diagram element appear over here on the right.
>
> **[0:39](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=39)** You can click and drag it around the screen if you want to move it into a new position.
>
> **[0:43](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=43)** Now in this diagramming tool, you're going to want to type one or more hyphens to separate the table name from the columns.
>
> **[0:49](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=49)** So, over here on the left, I'm going to come down to the next line, and I'll just type in three hyphens, just to separate that out, and then come down to line number three.
>
> **[0:56](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=56)** The first column in this table is going to be called "ProductName."
>
> **[0:59](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=59)** (keys clicking) After typing that in, the diagram over here on the right updates.
>
> **[1:04](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=64)** Notice that I'm not including a space in the column name.
>
> **[1:07](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=67)** Most database applications will accept spaces in names, but you'll have to take special care so that the system doesn't get confused.
>
> **[1:13](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=73)** You'll do this by wrapping the name in either quotation marks or square brackets, depending on the RDBMS that you're working with.
>
> **[1:19](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=79)** Often times it's easier just to avoid the problem altogether by not including spaces at all.
>
> **[1:24](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=84)** But if you do want to use a space in a name, here in Quick Database Diagrams, you'll do that by wrapping the entire name in double quotation marks.
>
> **[1:31](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=91)** So at this point, we have a single column in our products table.
>
> **[1:35](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=95)** We'll talk about what this "int" notation means in the next movie.
>
> **[1:38](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=98)** But, if you're curious, it simply identifies the type of data that the column will store, in this case, an integer.
>
> **[1:44](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=104)** For now, let's just continue on adding additional columns to the tables design, and we'll adjust the data types in a moment.
>
> **[1:49](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=109)** Let's suppose that we've determined that we want to store data about the following attributes for each product.
>
> **[1:54](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=114)** I'll just list them out here on the left.
>
> **[1:56](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=116)** Next, we'll have a column for the part number.
>
> **[1:58](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=118)** (keys clicking) Then size, color, price, supplier, and quantity in stock.
>
> **[2:08](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=128)** (keys clicking) That finishes all of the columns that I want for the products table.
>
> **[2:13](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=133)** Let's make one more table to the contact information for the suppliers where we get each product from.
>
> **[2:18](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=138)** I'll come down a couple of lines here on the left, and I'll type in the title of the next table, which is "Suppliers."
>
> **[2:24](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=144)** (keys clicking) Then, on line number 12, I'll type in three more dashes, and that adds the new table over here on left.
>
> **[2:29](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=149)** Let's just move that into position here.
>
> **[2:31](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=151)** The columns for the Suppliers Table, are going to be supplier name, (keys clicking) phone number, (keys clicking) street address, (keys clicking) city, state and zip.
>
> **[2:45](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=165)** (keys clicking) So no we have two separate tables added to our diagram.
>
> **[2:51](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=171)** At this point, we can take a look at the options up here in the export menu.
>
> **[2:55](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=175)** If you try an export the sequel code needed to implement this design into DBMS, using any of these top options, with the cylinder icon, that's typically used to represent a database, you're going to get an error stating that we haven't defined the data types yet.
>
> **[3:07](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=187)** So, that's the next step that we need to do.
>
> **[3:09](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=189)** But what we can do here, is take at the .pdf documentation.
>
> **[3:12](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=192)** I'll click on that link.
>
> **[3:14](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=194)** That'll export a .pdf file and download it to your computer.
>
> **[3:18](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=198)** Let's open it up and see what it looks like.
>
> **[3:20](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=200)** Here, we have a nicely formatted document that shows the table name and the columns, and it has areas that will fill in as we move through the development process, that includes a column description, data type, default value, and other parameters.
>
> **[3:32](https://www.linkedin.com/learning/relational-databases-essential-training/design-a-table?u=76281980&t=212)** This is exactly the kinds of information that you would need to pass off to a database developer, if you were having them create the database that you've designed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (6), next (5), data (5), [[Microsoft Products|Products]] (4), product (2)
> **Non-Speech:** (keys clicking) (9)
> **CLI Commands:** make (2)
> **Env Vars:** rdbms (1), dbms (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Attribute data types
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=1)** - [Instructor] When designing a relational database table, in addition to the name of each column you'll need to define the kind of information each column will store.
>
> **[0:08](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=8)** This is the columns or the attributes data type.
>
> **[0:12](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=12)** We've already seen that in a relational database table each column will store a single piece of information.
>
> **[0:17](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=17)** Here we have a simple table that stores information about a couple of employees.
>
> **[0:22](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=22)** If you read down each column you'll notice that all of the values are of the same type.
>
> **[0:26](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=26)** The first column is all text, the second are all dates, then currency values, and finally numbers.
>
> **[0:32](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=32)** The structure of a table is what Edgar Codd called a two-dimensional column homogeneous array.
>
> **[0:38](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=38)** That's a mathematically precise way of saying that each column only stores a single type of data.
>
> **[0:43](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=43)** Because of this the relational database management system can use this fact in a number of useful ways.
>
> **[0:49](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=49)** First when the data types are known ahead of time the RDBMS can store data more efficiently.
>
> **[0:55](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=55)** It generally takes fewer bytes of storage on disc and it takes up less memory to store numbers than text.
>
> **[0:59](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=59)** When the RDBMS knows the type of information that it's working with, it can make better use of system resources.
>
> **[1:05](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=65)** Next the RDBMS can make better predictions about how much data it can load into memory when performing searches.
>
> **[1:11](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=71)** For large databases the ability of the system to make accurate predictions before executing a routine, can dramatically help balance work loads.
>
> **[1:19](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=79)** And finally, specifying a data type will allow the database engine to help protect the data quality.
>
> **[1:25](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=85)** If the table is expecting a date and a user tries to put in elephant, it simply is going to get rejected.
>
> **[1:30](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=90)** It's like trying to put a square peg in a round hole.
>
> **[1:33](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=93)** Having the database enforce the types of values that can be entered, eliminates an entire class of data entry errors.
>
> **[1:40](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=100)** The user might still be able to input the wrong date, but that's an entirely different data quality issue.
>
> **[1:45](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=105)** So you might be wondering what data types are supported in a relational database.
>
> **[1:50](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=110)** The answer to that is it depends.
>
> **[1:52](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=112)** The specific data types you'll be using are going to differ slightly depending on which relational database management system you're working with.
>
> **[1:58](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=118)** Some RDBMS's support a wider variety of data types.
>
> **[2:02](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=122)** For instance some will allow you to store pictures and other file attachments directly inside of a table and others won't.
>
> **[2:08](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=128)** But the basic types are common across all management systems.
>
> **[2:12](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=132)** The most common is probably text or character data.
>
> **[2:15](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=135)** Typically you'll need to decide the number of characters that'll be the maximum needed for the column.
>
> **[2:20](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=140)** For instance a char5 data type will store data that's always five characters in length.
>
> **[2:25](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=145)** A varchar 100 is a data type that'll store a variable number of characters up to a maximum of 100.
>
> **[2:32](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=152)** And an nchar 20 will be a fixed length character column that can also store characters found in the extended unicode set.
>
> **[2:39](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=159)** Next is numerical data.
>
> **[2:41](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=161)** For these data types the scale of the number that you need to store becomes important.
>
> **[2:45](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=165)** If all of your data will be whole numbers under 255, then you can use a tinyint.
>
> **[2:51](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=171)** If your numbers might go up to around two billion then you can use a standard int or integer.
>
> **[2:57](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=177)** If your numbers need to be able to store fractions, then you might use a decimal data type or a float.
>
> **[3:03](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=183)** Most RDBMS's have specific data types for working with dates and times, some even have built-in support for tracking timezones.
>
> **[3:09](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=189)** You'll also often have support for specific currency data types.
>
> **[3:13](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=193)** There might also be specific data types for binary file attachments or geographic coordinates depending on the capabilities of the RDBMS that you're working with.
>
> **[3:23](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=203)** The best advice that I can give you here is to an internet search for your database management system and the key phrase data types.
>
> **[3:29](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=209)** That should take you to the documentation for your system and a listing of what specific data types it supports and how to implement them.
>
> **[3:36](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=216)** Back in our table design diagram I want to flush out the data types that each of these columns are going to store.
>
> **[3:41](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=221)** To do that I'll come over here to the text entry area on the left and we'll just type in the data type after each of the column names.
>
> **[3:48](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=228)** For the product I'm going to use a varchar 100 data type.
>
> **[3:56](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=236)** That'll store a variable character text string up to 100 characters in length.
>
> **[4:00](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=240)** When I type that in you'll notice that the table definition updates over here on the right.
>
> **[4:04](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=244)** Next we have the part number.
>
> **[4:08](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=248)** For this I'll use an integer.
>
> **[4:11](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=251)** For the size I'll store that as a varchar 20 data type.
>
> **[4:18](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=258)** The color will also be varchar 20.
>
> **[4:23](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=263)** For the price column I'm going to target SQL server as my DMBS so I'm going to use the money data type.
>
> **[4:30](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=270)** Other systems might not support a specific currency data type so you might need to use a decimal number here.
>
> **[4:36](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=276)** You'll need to check your specific system to see what it uses.
>
> **[4:39](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=279)** The supplier I'll type that in as a varchar 100.
>
> **[4:44](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=284)** And finally the quantity in stock I'll store that as a regular int.
>
> **[4:49](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=289)** Next up we have our suppliers table.
>
> **[4:51](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=291)** The supplier name I'll use a varchar 100 data type.
>
> **[4:57](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=297)** The phone number field is one that might throw some people.
>
> **[5:00](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=300)** You might instinctively say that this is obviously a number, but the numeric data types are typically used for numbers that you can perform mathematical operations on.
>
> **[5:07](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=307)** You'd never add two phone numbers together, so they really act more like character data.
>
> **[5:14](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=314)** So I'm going to choose to store the phone number as a char ten which will give me enough characters to store a seven digit phone number plus the three digit area code.
>
> **[5:24](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=324)** The street address I'll star as a varchar 100.
>
> **[5:30](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=330)** For the city I only need 50 characters so I'll call those varchar 50.
>
> **[5:37](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=337)** For the state I'll store the two letter state abbreviation so I just need this as a char two.
>
> **[5:43](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=343)** And finally the zip it'll act like the phone number does, I'll store this as a char nine.
>
> **[5:50](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=350)** So that updates all of my data types and you can see the results over here in the diagram.
>
> **[5:54](https://www.linkedin.com/learning/relational-databases-essential-training/attribute-data-types?u=76281980&t=354)** And now our tables are a little bit more defined with the columns and the types of data that they'll accept and store.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (36), database (8), management (4), next (4), [[Databases]] (1)
> **Env Vars:** rdbms (6), sql (1), dmbs (1)
> **CLI Commands:** make (3)
> **Analogies:** for instance (2), it's like (1)
> **Prerequisites:** you'll need (3)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Use primary keys to identify records
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=1)** - [Narrator] Relational databases only work if the system can uniquely identify each record in a table.
>
> **[0:07](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=7)** They do this using a column that's been designated as the table's primary key.
>
> **[0:11](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=11)** Primary keys are used everywhere in our daily lives.
>
> **[0:15](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=15)** Your library card number or bank account number are the primary keys to your accounts.
>
> **[0:20](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=20)** Your email address is often used by websites to uniquely identify you from every other user, and it acts as the primary key for retrieving your shopping history or your social media posts.
>
> **[0:30](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=30)** The government uses your social security number and driver's license numbers to make sure that you've paid your taxes, and verify eligibility for benefit programs.
>
> **[0:38](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=38)** These unique identifiers are all critically important to the functionality of the systems that you participate in.
>
> **[0:44](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=44)** Beyond the databases that identify you as a unique person, businesses need to have unique product numbers so that they ship the correct items to customers.
>
> **[0:52](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=52)** Books have ISBN numbers and computers have serial numbers.
>
> **[0:56](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=56)** All of these pieces of information are used as primary keys in some database somewhere to track individual items and ensure that things don't get mixed up.
>
> **[1:04](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=64)** When determining what piece of information in your data table should act as the primary key, you need to look for something that's guaranteed to be unique.
>
> **[1:12](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=72)** And I don't just mean today, in the data that you presently have, I mean unique for all eternity.
>
> **[1:18](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=78)** You need to think about the possibilities far into the future.
>
> **[1:21](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=81)** Will this piece of information always and in all circumstances be unique?
>
> **[1:26](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=86)** Often times you'll have a piece of information that you've already stored that'll serve this purpose.
>
> **[1:31](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=91)** These are called natural keys.
>
> **[1:34](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=94)** For instance, if you're running a book store, books already have an ISBN number used by the publisher.
>
> **[1:39](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=99)** There is no reason to reinvent the wheel here.
>
> **[1:41](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=101)** Just use the ISBN number to identify what books you have on your shelves.
>
> **[1:45](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=105)** Another option is to look for a couple of attribute columns that, in combination, uniquely identify each record.
>
> **[1:51](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=111)** You might run a shoe store that has lots of different sneakers with the same model name.
>
> **[1:55](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=115)** But a combination of model name, size, and colorway, might better represent the unique items on your inventory.
>
> **[2:02](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=122)** These types of primary keys are called concatenated keys, or composite keys, since they rely on data stored in multiple columns to uniquely identify a record.
>
> **[2:11](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=131)** And finally, if there isn't anything suitable already present in your data, you can always create your own identifying values.
>
> **[2:17](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=137)** These are called surrogate keys.
>
> **[2:20](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=140)** These are created for the sole benefit of the database in ensuring that the system can keep records separate.
>
> **[2:25](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=145)** They don't have any other value to the business or organization.
>
> **[2:29](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=149)** You'll often see these implemented as something like Product ID or Employee ID.
>
> **[2:34](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=154)** These values are simply made up out of thin air and assigned to records as needed.
>
> **[2:39](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=159)** In fact, that's exactly what your bank account number is.
>
> **[2:42](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=162)** It didn't exist before you opened your account.
>
> **[2:44](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=164)** And the bank just made it up and attached it to your account for the sole purpose of their record-keeping databases.
>
> **[2:50](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=170)** Here's an example of how to determine if a surrogate primary key is needed for your data table.
>
> **[2:55](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=175)** I have a small data table here of some people and their favorite color.
>
> **[2:59](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=179)** If I ask the question, "What's Harold's favorite color?"
>
> **[3:02](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=182)** You wouldn't be able to answer the question confidently.
>
> **[3:04](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=184)** You'd need to know if I was asking about Harold Williams or Harold Chapman.
>
> **[3:08](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=188)** The first name alone doesn't uniquely identify an individual record in this table.
>
> **[3:13](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=193)** You could make the argument that a first name and a last name combined will uniquely identify a person and potentially create a concatenated key.
>
> **[3:20](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=200)** But that's not a safe assumption to make if your data table is expected to grow.
>
> **[3:24](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=204)** It's not unreasonable to expect that there might eventually be information stored about two different people that happen to have the same first and last name.
>
> **[3:32](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=212)** The same could be said about any combination of the columns listed here.
>
> **[3:36](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=216)** In this case the only solution is to create a surrogate key.
>
> **[3:39](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=219)** I'll call it PersonID and just assign unique ID numbers to each person.
>
> **[3:44](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=224)** The typical way to note the primary key column of a table is to use the letters PK, or sometimes a little key icon.
>
> **[3:51](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=231)** Now instead of asking about Harold's favorite color, I can ask about person 101's favorite color.
>
> **[3:56](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=236)** That uniquely identifies Harold Chapman and you can confidently respond, "yellow."
>
> **[4:01](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=241)** Further, because the database is assigning the Person IDs, it can ensure that no other person ever receives the same ID number, no matter how much this table grows.
>
> **[4:11](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=251)** Designating columns as the primary key for a table is easy to do here in our design diagram.
>
> **[4:16](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=256)** We just need to make sure that we think through which field will uniquely identify every record in the table.
>
> **[4:21](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=261)** In the Products table you might consider the product name as potentially unique, or the part number.
>
> **[4:26](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=266)** So each of these are good candidates.
>
> **[4:28](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=268)** It really depends on the specifics of the data that you're going to be storing.
>
> **[4:31](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=271)** You might also have a situation where it's a combination of product name, size, and color that uniquely define a product.
>
> **[4:38](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=278)** For this example let's assume that every unique combination of name, size, and color all have a distinct part number.
>
> **[4:43](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=283)** So we'll use that as the primary key for this table.
>
> **[4:46](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=286)** It's also data that we're naturally storing in the table as something that has meaning to the wider business.
>
> **[4:50](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=290)** So that's also a plus.
>
> **[4:52](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=292)** To make a note of that designation I'm simply going to come here after the int here, or the data type, and I'm going to add the letters PK.
>
> **[5:01](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=301)** That'll designate this column as the primary key for the table, and you'll see the diagram update over here on the right.
>
> **[5:06](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=306)** Now we have a little key icon here and it updates the name to be in a bold font.
>
> **[5:12](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=312)** For the Suppliers data table it's unlikely that we'll have two suppliers with the same name.
>
> **[5:16](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=316)** But is that an assumption that you want to bet the stability of your database on?
>
> **[5:20](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=320)** Phone number might also be a good candidate, but those are known to change from time to time.
>
> **[5:24](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=324)** So it's probably not a great idea to use that either.
>
> **[5:27](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=327)** It might be better to use a surrogate key in this case.
>
> **[5:30](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=330)** I'm going to add in a new column here at the top of the list, and I'm going to call it SupplierID.
>
> **[5:40](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=340)** I'll give it the data type int, and I'll type in a PK after that to designate this column as the primary key.
>
> **[5:47](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=347)** We can now see what that change looks like over here in the diagram.
>
> **[5:51](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=351)** So that's one more detail added to our database diagram.
>
> **[5:54](https://www.linkedin.com/learning/relational-databases-essential-training/use-primary-keys-to-identify-records?u=76281980&t=354)** We've now identified which columns will be used to identify each unique record stored in our data tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (13), product (5), database (5), [[Databases]] (2), business (2)
> **CLI Commands:** make (5)
> **Env Vars:** isbn (3)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)

#### Object naming considerations
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=1)** - [Instructor] I touched on naming consideration briefly when I warned about including spaces in your column names earlier on in the course.
>
> **[0:07](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=7)** But the topic really does warrant a fuller discussion.
>
> **[0:10](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=10)** Back in the early days of relational data base development, computer systems had very strict requirements for how objects can be named.
>
> **[0:16](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=16)** You were limited on the number of characters you could use, and support for special characters was non existent.
>
> **[0:22](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=22)** Today, systems have much more relaxed requirements, which gives you a lot more freedom in naming tables and columns whatever you want, within reason.
>
> **[0:30](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=30)** But that doesn't mean that you can treat it like the wild west when it comes to building an organizational scheme for your precious data.
>
> **[0:35](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=35)** So here are some suggestions that you should think about when naming tables and columns.
>
> **[0:40](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=40)** First, consider Capitalization.
>
> **[0:42](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=42)** Most relational data base management systems are case insensitive, meaning that they don't care whether you use capital or lower case letters, or a mix of both.
>
> **[0:50](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=50)** But if you do choose to capitalize table and column names, make sure that you're doing so everywhere.
>
> **[0:56](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=56)** Second, think about spaces.
>
> **[0:58](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=58)** Often spaces add unnecessary complexity to the scripts that you'll need to write since those names will require quotation marks or brackets every time of the reference in code.
>
> **[1:07](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=67)** Those extra wrapper characters often negate any legibility benefits that including spaces in your names was meant to create in the first place.
>
> **[1:14](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=74)** So I suggest that you avoid spaces all together, instead, use underscores, hyphens, or push words together and capitalize each word.
>
> **[1:22](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=82)** There are a number of words that you should avoid using in your names entirely, these are called Reserved Words.
>
> **[1:29](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=89)** Since most relational data bases are controlled through programming code and the execution of sequel statements, it's a good idea to avoid using any internal function names or other system commands in your table names, doing so could really confuse the system.
>
> **[1:42](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=102)** Since each RDBMS' a little different in this regard, it's a good idea to search for the published list of reserved words for you specific platform in the documentation.
>
> **[1:51](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=111)** Next, let's think about plurality.
>
> **[1:54](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=114)** Some people prefer to use singular names for every object in the data base, for instance, a person table with columns for a first name, last name, and employee ID.
>
> **[2:03](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=123)** Others might feel more comfortable with plural words for table means.
>
> **[2:06](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=126)** Their thinking is that the record represent an individual person, but the table as a whole represents a number of people.
>
> **[2:13](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=133)** You should also consider whether you're creating a Transaction table, or a Transactions table.
>
> **[2:19](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=139)** There's no right or wrong answer here, so pick one convention, and stick with it.
>
> **[2:23](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=143)** And finally, this one's pretty simple, avoid acronyms.
>
> **[2:26](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=146)** Modern RDBMS' allow for long object names, so take advantage of that.
>
> **[2:31](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=151)** Use full, legible words that accurately describe the purpose of each table and column.
>
> **[2:36](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=156)** Acronyms that are obvious to you won't necessarily be understood by the next person that comes along and has to maintain your database.
>
> **[2:42](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=162)** So, save them the trouble and use names as an opportunity to clarify your data base design, and not obfuscate it.
>
> **[2:49](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=169)** There really is just one rule of object naming in relational data base, you might've picked up on it already, be consistent.
>
> **[2:56](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=176)** Pick a convention that you'll apply consistently across the data base design and stick to it.
>
> **[3:01](https://www.linkedin.com/learning/relational-databases-essential-training/object-naming-considerations?u=76281980&t=181)** Do so, and your data base design will be easier to work with right out of the gate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), next (2), management (1), [[Microsoft Word|Word]] (1), [[Programming]] (1)
> **Env Vars:** rdbms (2)
> **CLI Commands:** make (1)
> **Documentation:** the documentation (1)
> **Analogies:** for instance (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 3. Data Integrity and Validation

[↑ Back to Table of Contents](#table-of-contents)

#### Data constraints
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/data-constraints?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/data-constraints?u=76281980&t=1)** - [Instructor] A relational database can protect the integrity and validity of your data in a number of ways.
>
> **[0:06](https://www.linkedin.com/learning/relational-databases-essential-training/data-constraints?u=76281980&t=6)** For the most part, this requires that you set specific rules on the data tables to control what will be allowed in.
>
> **[0:11](https://www.linkedin.com/learning/relational-databases-essential-training/data-constraints?u=76281980&t=11)** If someone tries to enter data that violates one of the rules, then the database management system won't allow the record to be saved into the table.
>
> **[0:19](https://www.linkedin.com/learning/relational-databases-essential-training/data-constraints?u=76281980&t=19)** The user will receive an error message and will have to try again with different values.
>
> **[0:23](https://www.linkedin.com/learning/relational-databases-essential-training/data-constraints?u=76281980&t=23)** In this way, you can be assured that every record that is saved into the database meets all of your requirements.
>
> **[0:28](https://www.linkedin.com/learning/relational-databases-essential-training/data-constraints?u=76281980&t=28)** One of the constraints that we can set on a table is that a column only allow unique values.
>
> **[0:33](https://www.linkedin.com/learning/relational-databases-essential-training/data-constraints?u=76281980&t=33)** In other words, each value in a specific column will only appear once.
>
> **[0:38](https://www.linkedin.com/learning/relational-databases-essential-training/data-constraints?u=76281980&t=38)** Now, you might be thinking that this sounds a lot like a primary key.
>
> **[0:41](https://www.linkedin.com/learning/relational-databases-essential-training/data-constraints?u=76281980&t=41)** And you'd be correct.
>
> **[0:42](https://www.linkedin.com/learning/relational-databases-essential-training/data-constraints?u=76281980&t=42)** A primary key is also a unique constraint placed on the data table.
>
> **[0:46](https://www.linkedin.com/learning/relational-databases-essential-training/data-constraints?u=76281980&t=46)** But where a primary key is literally the primary way a data table is organized and searched, that doesn't mean that other columns in the table can't also be restricted to unique values.
>
> **[0:57](https://www.linkedin.com/learning/relational-databases-essential-training/data-constraints?u=76281980&t=57)** These types of data restrictions are often defined by the business rules of your company.
>
> **[1:01](https://www.linkedin.com/learning/relational-databases-essential-training/data-constraints?u=76281980&t=61)** You can think of a business rule as the implicit or explicit constraints that your data must follow in order to be usable.
>
> **[1:07](https://www.linkedin.com/learning/relational-databases-essential-training/data-constraints?u=76281980&t=67)** These can be based off of accepted written policy or simply best practices that your organization follows.
>
> **[1:13](https://www.linkedin.com/learning/relational-databases-essential-training/data-constraints?u=76281980&t=73)** For instance, you might have a business rule that states that a customer's email address must be different from all other customer email addresses or that you can't have two different inventory items in the warehouse that have the same part number.
>
> **[1:25](https://www.linkedin.com/learning/relational-databases-essential-training/data-constraints?u=76281980&t=85)** Both of those are good ideas to implement.
>
> **[1:27](https://www.linkedin.com/learning/relational-databases-essential-training/data-constraints?u=76281980&t=87)** And if you ever did have two customers with the same email address or two different part numbers with the same ID number, then you could imagine the negative impact that that could have on business operations.
>
> **[1:37](https://www.linkedin.com/learning/relational-databases-essential-training/data-constraints?u=76281980&t=97)** By codifying the uniqueness constraint in the database, the system will help ensure that neither of those cases ever occurs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), database (4), business (4), management (1)
> **Analogies:** for instance (1), imagine (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Create a unique constraint
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=1)** - [Instructor] In our database diagram that we started in the previous chapter, we've already identified the primary keys for each of these tables: the Part Number field in the Products table and the Supplier ID field in the Suppliers table.
>
> **[0:11](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=11)** Now, I've saved this text that makes up these tables into the exercise files for the course for your reference.
>
> **[0:16](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=16)** Now let's suppose we also need to ensure that the Product Name in the Products table also has a unique constraint applied to it.
>
> **[0:22](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=22)** You can make a note of that requirement in this diagramming application by simply placing the word "unique" after the data type.
>
> **[0:30](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=30)** That'll update the diagram on the right and it displays this little key icon here on this particular column.
>
> **[0:35](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=35)** These icons are specific to this diagramming tool, so you're not going to see them in your RDBMS when you're actually creating the database that you're designing here.
>
> **[0:42](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=42)** But it's just this app's way of noting the unique constraint on this column.
>
> **[0:46](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=46)** So now let's test it out.
>
> **[0:48](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=48)** I'ma come up here to the Export button and choose to export the script for SQL Server.
>
> **[0:53](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=53)** That'll download a file to my computer.
>
> **[0:55](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=55)** Next, I'm going to go over to my Downloads folder and open it up.
>
> **[0:58](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=58)** It's this file right here and it's just a simple text file that you can open up in Notepad or TextEdit on a Mac.
>
> **[1:06](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=66)** This is the code that you would run to create the tables that you've designed in the diagram.
>
> **[1:11](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=71)** It starts with this Create Table statement.
>
> **[1:13](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=73)** In this case, we're creating a table named Products and then we have all the columns listed down below and their data types.
>
> **[1:19](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=79)** After the columns, we have this first constraint and this is the constraint that's setting the primary key on the Part Number field.
>
> **[1:25](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=85)** Then we have another constraint that's applying the unique constraint to the Product Name field.
>
> **[1:30](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=90)** In SQL Server, constraints have names, so that's what this UK Products Product Name piece is.
>
> **[1:35](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=95)** It's simply the name that was automatically created for the constraint.
>
> **[1:38](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=98)** This will be useful to know in just a moment.
>
> **[1:41](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=101)** So I'm going to select all of this text and copy it to my clipboard, and then I can close out of TextEdit.
>
> **[1:45](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=105)** Then we'll go back to my web browser and open up a new tab at a site called [sqlfiddle.com](https://sqlfiddle.com).
>
> **[1:52](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=112)** This is a website that allows you to play around and experiment with SQL commands without the need for a full relational database application.
>
> **[1:59](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=119)** In this dropdown menu at the top of the screen, I'm going to choose to use MS SQL Server 2017 to make sure that it's compatible with the text that we just exported from the diagramming tool.
>
> **[2:08](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=128)** Then, on the left side of the screen, in an area called the schema panel, I'm going to paste in the code that we just copied to the clipboard.
>
> **[2:15](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=135)** This'll set up the structure of the data tables that we've been designing.
>
> **[2:19](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=139)** Now we need to add in some data to the Products table.
>
> **[2:21](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=141)** To do that, I'm going to come down here to the very bottom.
>
> **[2:23](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=143)** I'll just press Enter a couple of times.
>
> **[2:25](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=145)** Then I'll start the line Insert into Products.
>
> **[2:33](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=153)** On the next line, I'll type in the word "values" and then open up a parentheses.
>
> **[2:37](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=157)** Next, we'll just list out the individual values that'll make up the first record.
>
> **[2:41](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=161)** It's important that you list them in the same order that the columns appear in the table.
>
> **[2:45](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=165)** The first column was for the Product Name and I'll insert the product name T-Shirt.
>
> **[2:49](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=169)** And, because this is text, I'm going to wrap it in single quotation marks.
>
> **[2:54](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=174)** After that, I'll type in a comma and the value for the second column, which was the Part Number, and I'll enter the part number 100.
>
> **[3:01](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=181)** Next, we have the size and, again, this is text, so I'll type it in single quotation marks, and I'll just enter the text "Small".
>
> **[3:07](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=187)** After another comma, the next value is the color and I'll enter the color red.
>
> **[3:13](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=193)** Then we have the price which I'll type in 15.
>
> **[3:16](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=196)** The supplier is going to be H+ Sport.
>
> **[3:23](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=203)** And finally, the quantity in stock, I'll just list that as 10.
>
> **[3:27](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=207)** I'll finish the statement with a closing parentheses and a closing semicolon.
>
> **[3:31](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=211)** Then I'll press the Build Schema button and a temporary database is going to be built for us to experiment with.
>
> **[3:37](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=217)** That'll create the tables and insert the first record.
>
> **[3:40](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=220)** On the right, let's issue a command to retrieve the data from the Products table.
>
> **[3:43](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=223)** In the SQL language, that looks like this.
>
> **[3:45](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=225)** Select * from Products.
>
> **[3:52](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=232)** This just means that we're going to select everything from the Products table.
>
> **[3:54](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=234)** I'll press the Run SQL button and we get this table result down below.
>
> **[3:57](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=237)** This is exactly the values that we just typed in.
>
> **[4:00](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=240)** So far, everything is working as expected.
>
> **[4:02](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=242)** Now let's alter the schema and intentionally violate the unique constraint that we applied to the Product Name column.
>
> **[4:08](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=248)** I'ma come back over here to the window on the left-hand side and press Enter a couple more times.
>
> **[4:12](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=252)** Then we're going to insert a second record into the Products table.
>
> **[4:15](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=255)** We'll start the same way: Insert into Products.
>
> **[4:21](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=261)** On the next line, we'll type in "Values" again and we're going to insert another T-shirt product.
>
> **[4:28](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=268)** Because this product name is going to match exactly the product name that we entered earlier, it's going to violate the unique constraint that we applied to the data table.
>
> **[4:35](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=275)** Let's continue on, typing in the rest of the values for this particular record.
>
> **[4:40](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=280)** The part number is going to be 101.
>
> **[4:43](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=283)** The size will be Large.
>
> **[4:46](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=286)** The color will be blue.
>
> **[4:49](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=289)** The price is $20.
>
> **[4:52](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=292)** The supplier is also H+ Sport.
>
> **[4:58](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=298)** And we have 20 of these in stock.
>
> **[5:01](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=301)** This time, when I press the Build Schema button, the first set of tables are thrown away and they get recreated again from scratch.
>
> **[5:08](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=308)** Then it writes the first record of the Products table and then it attempts to write the second record of the Products table.
>
> **[5:13](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=313)** This time, we get an error.
>
> **[5:15](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=315)** What we're trying to do violates the unique constraint and it lets us know exactly what constraint is causing the error.
>
> **[5:21](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=321)** This is exactly what you wanted the database to do.
>
> **[5:24](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=324)** In order to store the second record, we would either need to give it a different name or remove the unique constraint from the table.
>
> **[5:31](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=331)** And that's how you enforce uniqueness across the values stored in a column.
>
> **[5:35](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-unique-constraint?u=76281980&t=335)** The Relational Database Management System attaches the constraint to the table and then it monitors data entry processes to ensure that the rule isn't violated as new records get added into the database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (13), product (9), database (7), data (7), next (6)
> **Env Vars:** sql (6), rdbms (1)
> **CLI Commands:** make (3)
> **Cross-References:** previous chapter (1), go back to (1)
> **Definitions:** is a  (1), means that (1)
> **URLs:** [sqlfiddle.com](https://sqlfiddle.com) (1)
> **UI Navigation:** dropdown (1)
> **Exercise Files:** exercise files (1)

#### Required attributes and null values
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=1)** - [Instructor] When entering records into a database, it's not a requirement that every attribute column is populated with data.
>
> **[0:07](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=7)** When a value isn't supplied, it's said to be null.
>
> **[0:10](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=10)** A null value represents data that's unspecified, unknown, or not applicable.
>
> **[0:15](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=15)** It's important not to confuse null with zero, or a blank space character.
>
> **[0:19](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=19)** Null means literally nothing at all or no data.
>
> **[0:23](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=23)** Let's take a look at this data table of people and their birthdays.
>
> **[0:27](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=27)** Antonio's birthday is currently null.
>
> **[0:29](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=29)** That doesn't mean that he doesn't have a birthday.
>
> **[0:31](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=31)** He most certainly does.
>
> **[0:33](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=33)** All we can say about it is that it's currently not known, and any information about it is missing from the database.
>
> **[0:39](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=39)** Null values are important when you start thinking about whether information in a column is required to be supplied for every record.
>
> **[0:45](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=45)** Maybe this data table represents customers and you've offered to send a special coupon to people on their birthday.
>
> **[0:50](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=50)** Some customers will give you that information to receive the coupon, and others will choose to keep that information private and forgo the coupon.
>
> **[0:57](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=57)** In this case, the birthday data is optional for each record, and a null value is perfectly acceptable.
>
> **[1:03](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=63)** The birthday column should not be required to be filled in in this case, which by definition, will require that it allowed null values.
>
> **[1:10](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=70)** But what if this data table represents a listing of employees that was maintained by human resources, and the birthday information was required to be collected for compliance reasons?
>
> **[1:19](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=79)** In this case, a missing birthday could present a potential liability for the company.
>
> **[1:23](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=83)** It would make sense to mark this column as a required piece of information, so that the database wouldn't even allow you to enter Antonio's record until the birthday information was also supplied.
>
> **[1:33](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=93)** In this case, you would want to create a constraint on the table that the birthday column does not allow null values.
>
> **[1:39](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=99)** So to recap, if a column is required, it cannot be null, and if it's optional, it can be null.
>
> **[1:46](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=106)** Let's go through the data table in our design diagram and decide whether each column should allow null values or not.
>
> **[1:52](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=112)** Now, in the diagramming tool that we're using, it makes the assumption that every column is required, or not null, unless you specify otherwise.
>
> **[1:59](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=119)** To define a column as an optional piece of information, you're going to add the word null after the data type.
>
> **[2:05](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=125)** For instance, in the products table, maybe size and color doesn't apply to some of the products that we carry.
>
> **[2:10](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=130)** I can code the optionality of these columns into the design of the database by adding the keyword null after the data type.
>
> **[2:19](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=139)** In the diagram, that's visualized with a question mark icon over here on the far right.
>
> **[2:24](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=144)** Just like with the key icon that was added up here for the unique constraint, this visual notation of a question mark is specific to this tool, so other diagramming tools are going to display these constraints in different ways.
>
> **[2:35](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=155)** What really matters is how this is implemented when you build the database from the diagram.
>
> **[2:39](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=159)** So, let's take a look at the code that would build our tables.
>
> **[2:42](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=162)** I'm going to come up here to the export button, and this time, I'm going to choose something a little bit different.
>
> **[2:45](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=165)** Let's take a look at the postgreSQL code.
>
> **[2:49](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=169)** Once again, that'll download a new file onto our computer, and I'm going to move over here and take a look at it.
>
> **[2:54](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=174)** And, it's this one right here.
>
> **[2:55](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=175)** I'm going to open it up in my standard text editor, and we can see it looks a little bit different than the code that we saw for SQL server earlier.
>
> **[3:03](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=183)** The postgreSQL code uses double quotation marks, whereas SQL server uses square brackets.
>
> **[3:08](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=188)** But, the syntax that you're seeing here on the screen is mostly the same.
>
> **[3:11](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=191)** This is because both database management systems used the same basic SQL commands to run their product.
>
> **[3:17](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=197)** In any case, the part that I want to focus on is at the end of each line that defines the properties for each column.
>
> **[3:22](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=202)** You'll notice the keywords, not null, for columns that are required.
>
> **[3:27](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=207)** And for lines that are optional like size and color, you'll see the keyword null.
>
> **[3:32](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=212)** This is how the database management system identifies columns that are going to be optional in the database.
>
> **[3:37](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=217)** So now we've created a situation where, in order to input a record for a new product, at a minimum, the product name, part number, price, supplier, and quantity in stock fields will need to be known.
>
> **[3:49](https://www.linkedin.com/learning/relational-databases-essential-training/required-attributes-and-null-values?u=76281980&t=229)** For those products that also include a size and color, we can store those attributes as well, but the database will not require them in order to save the record.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (10), database (9), [[Microsoft Products|Products]] (3), product (3), [[Diagramming]] (2)
> **Env Vars:** sql (3)
> **Code Identifiers:** postgresql (2)
> **Analogies:** for instance (1), just like (1)
> **CLI Commands:** make (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Define a default value
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=1)** - Another column-level property that you can add to the design of your database is to supply a default value that will be used when entering in new records.
>
> **[0:09](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=9)** This can speed up data-entry tasks by automatically filling in the most common attributes for each record in the table.
>
> **[0:15](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=15)** In the product's table of our design, I want to create a situation where the quantity in stock is automatically set to zero when entering in a new product.
>
> **[0:23](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=23)** This'll be done unless we specify a different number when we enter the record.
>
> **[0:28](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=28)** In the diagramming tool, to note a default value, add the "default" keyword after the column's data-type.
>
> **[0:35](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=35)** Then we'll type in an equals sign and the value that you want to be applied automatically.
>
> **[0:39](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=39)** In this case, equals zero.
>
> **[0:41](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=41)** There is no indication of this change over here in the diagram, but let's take a look at what happens with the code.
>
> **[0:46](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=46)** I'm going to come up here to the export menu and once again, I'm going to export the code for SQL Server.
>
> **[0:52](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=52)** That'll download the file to my computer, and I'll switch over here to my downloads folder, and we'll find it.
>
> **[0:56](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=56)** It's this one right here.
>
> **[0:58](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=58)** These all get the same file name, so they're just getting sequential numbers added each time we export one of these files.
>
> **[1:03](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=63)** Let's open that up in the text editor, and we'll find where the default value is being applied to the quantity in stock column.
>
> **[1:11](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=71)** It's this sign right here.
>
> **[1:12](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=72)** You'll see that the default value is implemented as another constraint on the database.
>
> **[1:16](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=76)** The constraint is given the name, DF_Products_Quantity[InStock], and we can see the default value that's going to be applied, is this number right here, zero.
>
> **[1:26](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=86)** So let's copy out all of this code.
>
> **[1:27](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=87)** I'll select it and copy it to my clipboard and then we'll switch back over to the SQL Fiddle tool.
>
> **[1:32](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=92)** I still have the window open from the last time that we used this site, but if you don't, make sure you switch the syntax to SQL Server.
>
> **[1:39](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=99)** Then clear out any text over here on the left-hand side, and paste in the new syntax that we just exported from the design tool.
>
> **[1:46](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=106)** At the bottom of the screen I'm going to enter in a new record.
>
> **[1:49](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=109)** This time, because I'm not going to provide values for every column in the table, I need to specify what columns I'm filling in.
>
> **[1:56](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=116)** The syntax for this is going to be INSERT INTO Products, then I'll open up a parentheses, and list out the columns that I'm going to give values for.
>
> **[2:06](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=126)** In this case the product name column, the part number, the price, and supplier.
>
> **[2:18](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=138)** Once I've listed out all the columns, I'll close the parentheses and come down to the next line.
>
> **[2:22](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=142)** I'll type in the keyword values open another parentheses, and list out the values that'll make up the first record.
>
> **[2:29](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=149)** The product name will be T-Shirt the part number is 100, and the price is $15, and the supplier is H + Sport.
>
> **[2:44](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=164)** Because I'm working with SQL Server, make sure that you wrap all of your text values inside of single quotation marks.
>
> **[2:51](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=171)** Let's build the schema now to create a temporary database, and when that's done we'll come over here to the second window and issue a command to view all of the data.
>
> **[3:00](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=180)** It'll be simply, SELECT * FROM Products.
>
> **[3:07](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=187)** This tells the database to return everything that's in the products table.
>
> **[3:11](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=191)** I'll press the run SQL button, and we'll see a data table appear at the bottom of the screen.
>
> **[3:15](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=195)** Now this table that's returned shows us two different things.
>
> **[3:18](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=198)** First, because we designated the color and size columns as "optional" in the last movie, we can see that the record has no values for both of these attributes.
>
> **[3:27](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=207)** This is because we didn't include them in the "INSERT" command.
>
> **[3:30](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=210)** We didn't enter a quantity either, but because we created a default constraint, on the quantity in stock column, the database correctly filled in zero for this attribute over here on the right, instead of null.
>
> **[3:40](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=220)** So with a default constraint on the database you can still force the database to require a value in a column by labeling it not null, and still have the flexibility to not supply a value when the record is entered.
>
> **[3:51](https://www.linkedin.com/learning/relational-databases-essential-training/define-a-default-value?u=76281980&t=231)** The database management system will simply fill in the default value whenever a value isn't explicitly given.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (8), data (4), product (4), [[Microsoft SQL Server|Sql server]] (3), [[Microsoft Products|Products]] (3)
> **Env Vars:** sql (5), insert (2), into (1), select (1)
> **CLI Commands:** make (3), find (2)
> **SQL:** insert into (1), select (1)
> **Cross-References:** in the last (1)
> **Exercise Files:** download the (1)
> **Speakers:** - another (1)

#### Establish table indexes
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=1)** - [Instructor] When it comes time for your database to retrieve the information that you've painstakingly stored, it'll be often helpful for the most commonly searched fields to contain something called indexes.
>
> **[0:10](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=10)** Indexes are a way for the database to keep track of what records have already been added into your table and to quickly retrieve a record or a group of records when they're requested.
>
> **[0:19](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=19)** To get a feel for how indexes work, let's think about how a phone book is structured.
>
> **[0:23](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=23)** Phone books typically provide a listing of people and their telephone numbers and are indexed by the last name of the individual person.
>
> **[0:30](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=30)** If I were to give you a name to find, say, Evelyn Taylor, it would be very easy for you to jump to the correct page in the T section and find her telephone number.
>
> **[0:38](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=38)** You can do this because the last names are ordered alphabetically which makes it easy for you to quickly find the right name and its corresponding phone number.
>
> **[0:46](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=46)** However, if I were to give you a telephone number, your task would be infinitely more difficult to find out who it belonged to.
>
> **[0:51](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=51)** In order to find the right person, you would need to start at the very beginning of the book and check the number I give you against every other number throughout the entire book until you happen to cross the right one.
>
> **[1:01](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=61)** Only then could you tell me who it belonged to.
>
> **[1:04](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=64)** You can see that having a telephone directory that's indexed by the phone number instead of last name would make your job much easier.
>
> **[1:10](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=70)** This is exactly how your database would function in the same situation.
>
> **[1:14](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=74)** In the database management system, providing these types of alternate indexing schemes allows the database to find requested information much faster.
>
> **[1:21](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=81)** Indexes can be added to any column of a table, and they're typically included on columns that you'll want to use for regular database searches or on columns that are used in relationship joins.
>
> **[1:31](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=91)** When you add a primary key to a table, it creates something called a clustered index.
>
> **[1:35](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=95)** This means that the primary key values determine the actual order that records will be stored in on disk.
>
> **[1:40](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=100)** Every time you add a new record to the table, the database is able to quickly search the index for the primary key value to see if it's already been used.
>
> **[1:48](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=108)** However, you can add indexes to any additional fields besides the primary key that you feel would improve the efficiency of the database.
>
> **[1:55](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=115)** Any additional indexes that you add to other attribute columns are called non-clustered indexes because these indexes are maintained separately from the order of records in the table.
>
> **[2:05](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=125)** Non-clustered indexes function like the index at the back of a textbook.
>
> **[2:09](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=129)** They're a brief ordered list that merely points to the location of the actual content that you're looking for.
>
> **[2:14](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=134)** The obvious question now becomes why don't we add indexes to all of our columns?
>
> **[2:19](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=139)** The reason we want to be selective in which columns we decide to add indexes on is because indexes will slow down the database's ability to add new records.
>
> **[2:27](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=147)** If you think about adding indexes as printing additional telephone directories sorted by different values, then you can quickly see that adding a new person to the phone book really means that you need to update all of the index directories as well.
>
> **[2:39](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=159)** This is the same in the database.
>
> **[2:41](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=161)** Every time you add in a new record to a table or update or delete an exiting record, all of the indexes need to be rebuilt.
>
> **[2:48](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=168)** If you have too many indexes, this can dramatically impact the speed at which the database can add new records to the table.
>
> **[2:54](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=174)** It's important to note though that not having an index on a column does not prevent you from searching the database by that field.
>
> **[3:00](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=180)** Just like searching through the phone book armed with only a telephone number, the process is still doable.
>
> **[3:05](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=185)** It's just not very efficient.
>
> **[3:06](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=186)** Depending on the size of your data tables and the types of questions that you're typically asking of the data, adding indexes might not offer any noticeable speed increases.
>
> **[3:14](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=194)** So that's how indexes work in a relational database.
>
> **[3:18](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=198)** They help the system find specific pieces of information quickly, but they do so by slowing down the speed at which new records can get added in to the database.
>
> **[3:26](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=206)** In our database design diagram, we already have indexes on the part number and the supplier ID columns of our products and suppliers table.
>
> **[3:34](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=214)** That's because those are the primary keys for the table.
>
> **[3:37](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=217)** In fact, the unique constraint that we placed on the product name field is also managed by an index.
>
> **[3:42](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=222)** This is how the database management system is able to quickly tell if a value already appears in the table when adding in a new record.
>
> **[3:49](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=229)** So those three indexes already exist, but let's suppose that we will want to search the suppliers table based off of the supplier name values regularly.
>
> **[3:57](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=237)** I can add an additional non-clustered index to this column.
>
> **[4:00](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=240)** To make a note of that in the diagram, simply add the key word index after the data type.
>
> **[4:07](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=247)** In the diagram on the right, you'll see this little branching icon here to indicate an index has been applied to the supplier name field.
>
> **[4:14](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=254)** Now if we view the commands that'll build this database, we can see what happened.
>
> **[4:17](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=257)** Once again, I'm going to export this as a SQL Server script and then take a look inside of my Downloads folder for that script there.
>
> **[4:23](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=263)** I'll open it up in my Text Editor and then scroll all the way to the very bottom of the script.
>
> **[4:28](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=268)** Here we have the lines that will create the index.
>
> **[4:31](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=271)** It starts with the create index statement.
>
> **[4:33](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=273)** We have the name of the index, idx_Suppliers_SupplierName, and it's going to be placed on the suppliers table on the supplier name field.
>
> **[4:41](https://www.linkedin.com/learning/relational-databases-essential-training/establish-table-indexes?u=76281980&t=281)** Now any time we add a supplier record to this database, the index will be updated so that records can be quickly located when searches are performed for the name.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (18), data (3), management (2), [[Search]] (2), [[Microsoft Products|Products]] (1)
> **CLI Commands:** find (7), make (2)
> **Definitions:** means that (2)
> **Env Vars:** sql (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Add check constraints
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=0)** - [Lecturer] There's one more type of constraint that I want to talk about, and that's a check constraint or what's sometimes referred to as an integrity constraint or a validation rule, depending on the RDBMS platform that you're working with.
>
> **[0:11](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=11)** Like null constraints, default values, and unique constraints, check constraints are built right into the design of the table itself.
>
> **[0:19](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=19)** Then, anytime data is entered into the table, the database management system will verify the new values meet the criteria that have been established.
>
> **[0:27](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=27)** For numerical data, you can check that the values fall within a range of acceptable values.
>
> **[0:32](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=32)** For instance, a products price must be above zero and therefore can't be negative.
>
> **[0:37](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=37)** Or an employee's job rating must be between one and five.
>
> **[0:40](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=40)** Many of these kinds of data constraints will be dictated by your business rules.
>
> **[0:45](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=45)** For character data types, it's rare that you would specify an alphabetical range, but you can create a check constraint that limits the possible values to an approved list.
>
> **[0:53](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=53)** For instance, a product that you sell must be either in stock, back ordered, or discontinued.
>
> **[0:59](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=59)** If anyone ever tries to enter a different status, the entry will fail with an error and not be saved into the database.
>
> **[1:05](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=65)** With a check constraint, you gain a level of control over the values in a table and can ensure consistency across the dataset.
>
> **[1:12](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=72)** Now, unfortunately, check constraints aren't something that can be added into the design of our database with this specific design tool.
>
> **[1:19](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=79)** For that, we're going to have to dive into the code a little bit.
>
> **[1:22](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=82)** If you still have the code on your clipboard from the last movie, you can use that.
>
> **[1:26](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=86)** Otherwise export another script here, or you can copy the file out of the exercise files for the course.
>
> **[1:31](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=91)** Then we'll switch over to SQL Fiddle.
>
> **[1:35](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=95)** In the Schema Panel over here on the left side, I'm going to paste that code in, and I'm also going to make sure that my language is still set to SQL Server in this dropdown menu.
>
> **[1:45](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=105)** Now, let's suppose that our suppliers can only be from the state of California or Texas.
>
> **[1:50](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=110)** If I find where the create table statement is for the supplier table, which is right here, we can find the state field, there.
>
> **[1:57](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=117)** Right now, the state column in the suppliers table is set up to store a two letter state abbreviation using the char(2) data type.
>
> **[2:05](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=125)** All we need to do is make sure that the only acceptable values are CA, for California or TX for Texas.
>
> **[2:12](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=132)** We can do that by adding in a check constraint.
>
> **[2:15](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=135)** Now, the syntax might be slightly different depending on your database platform but to implement a check constraint in SQL Server syntax, you're going to alter this statement here and right after where it says, not null, but before the comma, I'm going to place my cursor.
>
> **[2:28](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=148)** In fact, I'm just going to press enter to move down a line to give myself some more room.
>
> **[2:33](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=153)** Then we're going to add in a new constraint.
>
> **[2:38](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=158)** We'll give the constraint a name I'll call it CHK_state.
>
> **[2:47](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=167)** The type of constraint that we're adding is going to be a check constraint.
>
> **[2:51](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=171)** And then what do we want to check?
>
> **[2:53](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=173)** I'll type in a parenthesis, and what we want to check is that the state is equal to CA or the state is equal to TX.
>
> **[3:10](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=190)** We'll finish creating the check constraint with a closing parenthesis.
>
> **[3:13](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=193)** Now, because we're typing in character data right here, we want to make sure that we're enclosing these in single quotation marks.
>
> **[3:20](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=200)** The other thing that I want to verify is that the comma had been moved down, so it's no longer after the not all line here, after the state line but it's moved to the end here, after our check constraint.
>
> **[3:30](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=210)** So everything's looking good.
>
> **[3:31](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=211)** Let's go ahead and scroll down to the very bottom.
>
> **[3:33](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=213)** Now what I want to do is add in a new record.
>
> **[3:37](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=217)** I'm going to insert a record into the supplier's table.
>
> **[3:45](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=225)** The values for the record are going to be one, for the supplier id.
>
> **[3:49](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=229)** The supplier's name is going to be H+ Sport.
>
> **[3:54](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=234)** The phone number, remember that's entered in as character data.
>
> **[3:57](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=237)** It's going to be 555-1234.
>
> **[4:02](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=242)** Next, we have the street address, the city, the state, and for this, I'll type in CA for the state.
>
> **[4:15](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=255)** And finally, the zip code.
>
> **[4:20](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=260)** We'll finish the records value with a closing parenthesis.
>
> **[4:23](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=263)** Now let's go ahead and build the schema and make sure that everything's working.
>
> **[4:28](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=268)** Everything built correctly so let's go ahead and run a select statement against that table.
>
> **[4:35](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=275)** And when I select everything from the supplier's table, we'll run that SQL code and we get back the table row here.
>
> **[4:41](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=281)** So it looked like it correctly entered with CA as the state.
>
> **[4:44](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=284)** Now let's go ahead and modify the record that we're entering.
>
> **[4:47](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=287)** Instead of Los Angeles, California, I'm going to change this to Seattle, Washington.
>
> **[4:54](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=294)** This time when I build schema, we're going to get an error.
>
> **[4:59](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=299)** Here we see that the record is in violation of the check constraint, which is exactly the correct behavior that we were looking for.
>
> **[5:06](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=306)** So by applying a thoughtful approach to check constraints, you can have the database management system enforce rules that limit the values that can be entered into a column and make sure that they fit a specified criteria.
>
> **[5:16](https://www.linkedin.com/learning/relational-databases-essential-training/add-check-constraints?u=76281980&t=316)** After all, one of the most important things about having your data stored in a database is being able to trust that the data has been entered correctly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), database (6), management (2), [[SQL]] (2), [[Microsoft SQL Server|Sql server]] (2)
> **CLI Commands:** make (5), find (2)
> **Env Vars:** sql (4), rdbms (1)
> **UI Navigation:** dropdown (1), scroll down (1)
> **Analogies:** for instance (2)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [lecturer] (1)


### 4. Relationships

[↑ Back to Table of Contents](#table-of-contents)

#### Relate tables with foreign keys
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=1)** - [Instructor] We've spent a lot of time exploring how the structure of a table in a relational database works to protect the integrity, consistency and validity of the data that we're storing through datatypes and constraints.
>
> **[0:13](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=13)** But the table structure is only one part of the system.
>
> **[0:16](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=16)** The other is the relationships that we create between tables that help bring additional context and flexibility to the data.
>
> **[0:24](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=24)** Let's look back at the example that we started the course with where we have a couple of tables that store information about our vacation photos.
>
> **[0:30](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=30)** You'll remember that we split the data up across three tables.
>
> **[0:33](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=33)** One for the photo information, one for the people that were in each photo, and one for the locations where the photo was taken.
>
> **[0:40](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=40)** The way that this data structure works is that you can take information found in one table and use it to look up additional details in another.
>
> **[0:47](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=47)** For instance if we want to know more about the Big Ben picture, we can find its ID number, number 005, and then take that number over to the People table to find out who's in the picture.
>
> **[0:58](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=58)** In this case, we find Brandi, James and Carol are all in the picture of Big Ben.
>
> **[1:03](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=63)** If I want to find out where the picture was taken, I could find the location number of the photo, in this case number three and take that information to the Locations table to find that it was taken in London, England.
>
> **[1:14](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=74)** There's clearly a link between the information found in each of these tables.
>
> **[1:18](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=78)** In database terminology, we say that these tables are related to one another, and the specific columns that contain the linking values form relationships.
>
> **[1:27](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=87)** Now let's remove the data and focus only on the structure of each of these tables.
>
> **[1:31](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=91)** This is the diagram for the Pictures database.
>
> **[1:34](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=94)** We have the Pictures table represented on the left with the four columns, and the People table and the Locations table on the right.
>
> **[1:40](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=100)** I've identified which columns will serve as the primary keys for each table with the PK notation.
>
> **[1:46](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=106)** The Picture# column in the Pictures table and the Location ID number in the Locations table make sense.
>
> **[1:52](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=112)** The People table is a little bit more complicated.
>
> **[1:55](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=115)** I've chosen to go with a concatenated key.
>
> **[1:57](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=117)** So a combination of picture number and person name will uniquely identify each record in the People table.
>
> **[2:03](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=123)** That way, each picture can have several records in this table and each person can appear many times as well.
>
> **[2:09](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=129)** But there will only ever be a single record that associates a specific picture with a specific person.
>
> **[2:15](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=135)** Now we can visualize the relationships between each of these tables by drawing a line that joins columns with related values.
>
> **[2:22](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=142)** The Pictures table was related to the People table through the values found in the Picture# columns.
>
> **[2:28](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=148)** The symbols on the line indicate a one to many relationship which means that each record in the Pictures table can be related to many records in the People table.
>
> **[2:36](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=156)** But each record in the People table will be related to only one record in the Pictures table.
>
> **[2:41](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=161)** We can also relate the Pictures table to the Locations table in the same way.
>
> **[2:45](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=165)** But the one-to-many relationship will go the other direction.
>
> **[2:49](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=169)** Each location can appear many times in the picture table.
>
> **[2:52](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=172)** But each picture can only have a single location.
>
> **[2:55](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=175)** This style of relationship notation with the slash in the branches drawn on the line is called crow's foot notation.
>
> **[3:02](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=182)** Some relational database management systems will use the number one and an infinity symbol to represent the same kind of relationship.
>
> **[3:09](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=189)** When looking at this diagram, you'll notice that each column on the one side of the relationship, that's the side with the single slash mark is also the primary key for the table.
>
> **[3:19](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=199)** Most relationships in relational databases will involve a primary key column.
>
> **[3:24](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=204)** On the other side of the join, the many side, the column is known as a foreign key.
>
> **[3:30](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=210)** We can note that on the diagram with an FK designation.
>
> **[3:33](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=213)** You'll notice that in the People table, the Picture# column is part of a concatenated primary key, but it also serves as the foreign key back to the Pictures table.
>
> **[3:42](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=222)** And with these notations in place, it completes the diagram for this vacation photo database.
>
> **[3:47](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=227)** It allows us to visualize the table structure.
>
> **[3:49](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=229)** It notes which columns will serve as the primary keys for uniquely identifying each record in the tables, and it shows us where values from one table can be used to find additional details in the related tables.
>
> **[4:00](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=240)** There are a few additional details that are worth noting.
>
> **[4:03](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=243)** First, in most relational database management systems, the relationships are created starting from the Foreign Key column, so that's where you're going to go to find the code that creates the relationship between two tables.
>
> **[4:13](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=253)** That's not a hard and fast rule, but generally speaking, look to the foreign key first to find details about the joining relationship.
>
> **[4:20](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=260)** Second, because the relationships only work if you can look up values from one table to the other, the datatypes of the foreign keys must be the same as the primary key columns that they link to.
>
> **[4:32](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=272)** So if the Location column in the Locations table is an integer, the Location column in the Pictures table also needs to be an integer.
>
> **[4:39](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=279)** And finally, only the data needs to match up.
>
> **[4:42](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=282)** The columns on either side of a relationship join don't need to be named the same thing.
>
> **[4:46](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=286)** You'll often find that a database is easier to understand when the columns share the same name, but that's only a convenience for you and I.
>
> **[4:53](https://www.linkedin.com/learning/relational-databases-essential-training/relate-tables-with-foreign-keys?u=76281980&t=293)** The database management system doesn't care what they're named at all.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (8), data (6), management (3), [[Relational Databases]] (1)
> **Analogies:** picture (12), for instance (1)
> **CLI Commands:** find (10), make (1)
> **Definitions:** is a  (1), means that (1), is called (1), known as (1), is an  (1)
> **UI Navigation:** go to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Diagram a relationship
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=1)** - [Instructor] Let's go back to our database diagram and hook these to tables together with a formal relationship.
>
> **[0:06](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=6)** I'm continuing on from the last chapter, but if you need the text that I have on the left side of my screen that builds the Products and Suppliers table, then you can find that text in the exercise files for this course.
>
> **[0:16](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=16)** To create a relationship between the Products table and Suppliers table, we first need to identify what columns we'll join together.
>
> **[0:23](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=23)** First, let's think about the direction of the relationship.
>
> **[0:27](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=27)** Does it make more sense that each, individual product has multiple suppliers?
>
> **[0:31](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=31)** Or that each, individual supplier sends us multiple products?
>
> **[0:35](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=35)** I think the latter makes sense in a typical business, so I'm going to join the primary key from the Suppliers table to the Products table.
>
> **[0:42](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=42)** But what field should it connect to over here?
>
> **[0:45](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=45)** We currently have a supplier field that's storing a "varchar100" data type.
>
> **[0:49](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=49)** This is a text data type that we originally intended to store the name of the supplier, but in order to create this relationship, I need to connect to an "integer" data type, as we have over here with the Supplier ID column.
>
> **[1:00](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=60)** To create the join, I'm actually going to reconfigure the Products table.
>
> **[1:04](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=64)** It's actually not going to be important to store the full name of the supplier in the Products table since once we make the relationship, we can get the name from the Supplier's table instead.
>
> **[1:13](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=73)** So, let's go over here to the far left hand side of the screen, and I'm going to make some adjustments to the supplier column of that table.
>
> **[1:19](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=79)** Let's change the name.
>
> **[1:20](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=80)** I'll change to "Suppler ID," and instead of a "varchar100," I'm going to make it an "int" data type.
>
> **[1:26](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=86)** Then, this column is going to be the foreign key in the relationship, so I'll type in the "FK" designation.
>
> **[1:33](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=93)** Next, we need to note the kind of relationship that I'm creating.
>
> **[1:36](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=96)** In this design tool, you'll do that with a couple of symbols.
>
> **[1:40](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=100)** The Products table is the many side, so I'm going to use the "greater than" symbol here.
>
> **[1:44](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=104)** Then, we're connecting this to the 1 table, and I'll type in a hyphen to join it as a one to many relationship to the Suppliers table.
>
> **[1:51](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=111)** Then, finally, we just need to note which columns we're joining to.
>
> **[1:54](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=114)** We're joining to the Suppliers table (taps keyboard) and the Supplier ID column.
>
> **[2:00](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=120)** (taps keyboard) The notation in this design tool writes that out as "Suppliers.SupplierID."
>
> **[2:08](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=128)** As soon as we do that, the relationship line gets created on the diagram on the right.
>
> **[2:11](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=131)** You can see it swing over here from the Supplier ID, all the way around to the Supplier ID in the Suppliers table.
>
> **[2:17](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=137)** Let me drag these table around, and see if I can get that join line in a little bit more of a reasonable state.
>
> **[2:22](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=142)** That looks a little bit better, and now, we can see the crow's foot notation that notes that this is a one to many relationship between the Supplier ID columns in each table.
>
> **[2:31](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=151)** And now we can visualize how data is going to flow from one table to the other.
>
> **[2:35](https://www.linkedin.com/learning/relational-databases-essential-training/diagram-a-relationship?u=76281980&t=155)** And we can visualize how data flows from one table to the other using a foreign key and a one to many relationship.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (7), data (6), database (1), product (1), business (1)
> **CLI Commands:** make (4), find (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Relationship optionality and cardinality
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=0)** - [Instructor] Once two tables are related together, you can start to think about the minimum number of records that can be related and the maximum number.
>
> **[0:07](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=7)** In relational database terminology, these are called optionality and cardinality.
>
> **[0:14](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=14)** Optionality is a measure of the minimum number of records that can be associated between two ends of a relationship.
>
> **[0:21](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=21)** This number is usually either zero or one, and it can be thought of as the difference between must and might.
>
> **[0:28](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=28)** For example, if a customer must have at least one order, then the optionality is one.
>
> **[0:34](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=34)** That indicates a situation where your business rules dictate a requirement that every customer has at least one order before their record can be created.
>
> **[0:44](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=44)** The minimum number allowed is one, so the optionality is one.
>
> **[0:48](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=48)** On the other hand, if a customer might have an order, the optionality is zero.
>
> **[0:53](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=53)** This indicates a situation where a customer's record can be created before they've placed any orders.
>
> **[0:59](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=59)** So some customers will have orders and some won't.
>
> **[1:02](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=62)** The minimum number of orders, in this case, is zero, or an optionality of zero.
>
> **[1:08](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=68)** Cardinality is a measure of the maximum number of associated records between two tables.
>
> **[1:13](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=73)** This is typically either one or more.
>
> **[1:17](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=77)** If your business rules state that a product can have a maximum of one supplier, then the cardinality is one.
>
> **[1:24](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=84)** If a product can have multiple different suppliers, then the cardinality is something higher.
>
> **[1:29](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=89)** Usually this unknown number is represented by the letter N if there's no business rules that state an absolute maximum acceptable number.
>
> **[1:38](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=98)** When sketching out a database diagram, the optionality and cardinality of a relationship are noted by two numbers and a couple of dots to indicate the range.
>
> **[1:47](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=107)** So, for instance, an optionality of one and a cardinality of many would look like this.
>
> **[1:53](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=113)** This represents a relationship that will have at least one matching record in the related table and has an unspecified maximum number of matching records.
>
> **[2:02](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=122)** Let's apply this to our familiar vacation photos database.
>
> **[2:06](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=126)** I'll start by evaluating the pictures/people relationship along the top, moving from left to right.
>
> **[2:12](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=132)** If we think about how many people can be in each picture, it would be reasonable to say that a picture might have nobody in it if it's just a landmark.
>
> **[2:19](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=139)** Or it might be a group shot and have many people in it.
>
> **[2:23](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=143)** That would indicate an optionality of zero and a cardinality of N, or many.
>
> **[2:29](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=149)** We can note that on the right side of the joining line.
>
> **[2:32](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=152)** If we think about the relationship in the other direction, each picture number in the people table must be associated with at least one photo in the pictures table.
>
> **[2:41](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=161)** And in fact, it can be associated with only one picture in the pictures table.
>
> **[2:45](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=165)** So we have an optionality of one and a cardinality of one when we think about the relationship in the other direction.
>
> **[2:52](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=172)** Now, let's look at the relationship between the pictures table and the locations table.
>
> **[2:57](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=177)** Reading left to right, the location of each picture must relate to exactly one location.
>
> **[3:03](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=183)** So again, an optionality and cardinality of one.
>
> **[3:07](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=187)** Reading right to left, it's possible that we pre-fill in a bunch of different locations that we anticipate traveling to, but haven't yet visited.
>
> **[3:15](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=195)** In that case, we can have a location that doesn't have a match to any photos, or an optionality of zero.
>
> **[3:21](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=201)** But it's likely that when we do visit a place, we take lots of pictures.
>
> **[3:26](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=206)** So we may find each location many times in the picture table, a cardinality of many.
>
> **[3:32](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=212)** I will say, though, that I'm making some assumptions about the structure of our data here, and the rules that I want to apply to the data that's collected might be different from the rules that someone else applies.
>
> **[3:42](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=222)** Someone else might make a different decision about how the data should be entered into the database.
>
> **[3:47](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=227)** For instance, they can say that a location will not be added to the locations table until we have at least one photo taken there and will only take one photo in each place.
>
> **[3:57](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=237)** If that's the case, then the optionality and cardinality would both change to one.
>
> **[4:03](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=243)** Same data tables, same columns, but this would represent a different set of rules that we can apply to the data structure.
>
> **[4:10](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=250)** The good news is, is that you already have the tools to control cardinality in the database's design.
>
> **[4:15](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=255)** Cardinality is controlled by the presence or absence of a unique constraint.
>
> **[4:20](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=260)** Once you've identified the cardinality requirements, you can make the appropriate changes to the structure of your columns to enforce your business rules on the data.
>
> **[4:29](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=269)** If we apply this back to the vacation photos, we can clarify what constraints need to be applied to which columns.
>
> **[4:36](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=276)** The picture number column in the pictures table needs to store a unique value in each row.
>
> **[4:41](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=281)** The location column in the pictures table cannot have a unique constraint.
>
> **[4:46](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=286)** Together, the optionality and cardinality create a range called a relationship's multiplicity.
>
> **[4:52](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=292)** This helps you understand the minimum and maximum number of matching rows that you can find in a related table.
>
> **[4:58](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=298)** So think through your data that you're building a model for and consider the multiplicity of records that you need to be supported on each side of the relationship.
>
> **[5:07](https://www.linkedin.com/learning/relational-databases-essential-training/relationship-optionality-and-cardinality-19271222?u=76281980&t=307)** That'll help you clarify the constraints that need to be put into place in order to model the data in the way that supports the business rules that you want to enforce.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), database (5), business (5), product (2), [[Sketching]] (1)
> **Analogies:** picture (7), for instance (2), for example (1)
> **CLI Commands:** find (2), make (2)
> **Definitions:** is a  (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### One-to-many relationships
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=1)** - [Instructor] In a relational database, there are three different kinds of relationships that can be made between two tables.
>
> **[0:06](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=6)** The most common, by a large margin, is a one-to-many relationship.
>
> **[0:11](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=11)** If you think about your own life you'll easily find one-to-many relationships all around.
>
> **[0:15](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=15)** Your one library card has been used to check out many books.
>
> **[0:19](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=19)** Your one bank account has had many transactions.
>
> **[0:23](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=23)** One-to-many relationships are everywhere.
>
> **[0:25](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=25)** A one-to-many relationship doesn't mean that there is absolutely multiple related records though.
>
> **[0:30](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=30)** It simply means that the database is configured to support the possibility.
>
> **[0:34](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=34)** The relationship describes the tables not the data.
>
> **[0:38](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=38)** Consider my library card, number 5005.
>
> **[0:42](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=42)** In the beginning, I just opened the account and haven't checked out any books yet.
>
> **[0:45](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=45)** The account is created in the Library Patron table but there are no matching records in the Book Loans table.
>
> **[0:51](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=51)** Bu the relationship between the two tables still needs to be a one-to-many relationship.
>
> **[0:56](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=56)** Then I check out my first book.
>
> **[0:58](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=58)** The presence of a single matching record doesn't change the relationship type between the two tables.
>
> **[1:04](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=64)** I check out a few more books and the relationship is still the same.
>
> **[1:07](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=67)** It's a one-to-many relationship between the tables regardless of how many actual records are linked.
>
> **[1:13](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=73)** The type of join is dictated by the cardinality of the relationship.
>
> **[1:17](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=77)** Cardinality, if you remember from the previous movie, is a measure of the maximum number of records that could potentially be found in a related table.
>
> **[1:25](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=85)** In the Vacation Photo Database, we have two one-to-many relationships.
>
> **[1:29](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=89)** One connecting the locations to pictures and another connecting the pictures to people.
>
> **[1:34](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=94)** The cardinality is represented by the second number in the pairs listed in each end of the join line.
>
> **[1:39](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=99)** You can see that the cardinality matches up to the join type for both relationships.
>
> **[1:44](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=104)** A cardinality of one is indicated by a single slash on the line and the cardinality of many is represented by the crows foot symbol.
>
> **[1:51](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=111)** Also remember that cardinality is controlled by the presence or absence of a unique constraint.
>
> **[1:57](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=117)** So a join between a column with a unique constraint and one without a unique constraint will always be a one-to-many relationship.
>
> **[2:03](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-many-relationships?u=76281980&t=123)** The unique constraint, ultimately, is what controls what kind of join is created between two data tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (3), data (2)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### One-to-one relationships
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-one-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-one-relationships?u=76281980&t=1)** - [Instructor] One-to-one relationships are not nearly as common as one-to-many, but they do have their place in certain circumstances.
>
> **[0:07](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-one-relationships?u=76281980&t=7)** We've already established that they join type is dictated by the unique constraints.
>
> **[0:12](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-one-relationships?u=76281980&t=12)** A one-to-one relationship exists when both columns in the join have a unique constraint on them.
>
> **[0:17](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-one-relationships?u=76281980&t=17)** This is most commonly seen when joining primary keys in both tables.
>
> **[0:21](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-one-relationships?u=76281980&t=21)** Here's an example of when this might occur.
>
> **[0:23](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-one-relationships?u=76281980&t=23)** In this database we have one table to store common information about some employees, like their name and position.
>
> **[0:29](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-one-relationships?u=76281980&t=29)** This information isn't very sensitive, and it's made available to everyone in the company.
>
> **[0:33](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-one-relationships?u=76281980&t=33)** But the human resources department has a second table that adds some additional information about each employee, such as their salary and job rating.
>
> **[0:41](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-one-relationships?u=76281980&t=41)** Since both of these tables use the employee ID as the primary key, which is by definition unique, they can be joined in a one-to-one relationship.
>
> **[0:49](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-one-relationships?u=76281980&t=49)** Each record in one table can be matched with exactly one record in the other.
>
> **[0:53](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-one-relationships?u=76281980&t=53)** And since the human resources information is sensitive, different security settings can be applied to the table to ensure that only people with the proper permissions can read it.
>
> **[1:02](https://www.linkedin.com/learning/relational-databases-essential-training/one-to-one-relationships?u=76281980&t=62)** Applying different security settings to portions of the data is the primary use of a one-to-one relationship in a relational database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (2), [[Human Resources (HR)|Human resources]] (2), [[Security]] (2), data (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Many-to-many relationships
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980&t=1)** - The third and final type of relationship that you can create is a many-to-many relationship.
>
> **[0:06](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980&t=6)** If you've been following along then it's probably no surprise that a many-to-many relationship is created between two columns where neither of them have a unique constraint applied.
>
> **[0:15](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980&t=15)** In theory this is what a many-to-many relationship looks like in a design diagram.
>
> **[0:20](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980&t=20)** Here we have a database that keeps track of class schedules for a university.
>
> **[0:23](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980&t=23)** Each student can be enrolled in zero to multiple classes and each class can have between zero and many students.
>
> **[0:30](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980&t=30)** I've noted the optionality and cardinality here so we can clearly see the need for a many-to-many relationship based on the cardinality of N at both ends.
>
> **[0:39](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980&t=39)** However, there isn't a good way to relate the tables together based (mumbles) the columns that we have.
>
> **[0:44](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980&t=44)** To create the relationship according to the cardinality we would need a non-unique column in each table.
>
> **[0:49](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980&t=49)** The solution to this problem is to simply not create a many-to-many relationship.
>
> **[0:53](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980&t=53)** In fact I don't know of any relational database that actually supports a direct many-to-many relationship.
>
> **[0:59](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980&t=59)** They are theoretically valuable and they do accurately represent information that you'd find in the real world but they're programmatically difficult and challenging to implement.
>
> **[1:07](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980&t=67)** So instead what we do is create a linking table that'll serve as a bridge.
>
> **[1:11](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980&t=71)** For the class schedule database it would look like this.
>
> **[1:14](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980&t=74)** We create a third table called StudentCourses.
>
> **[1:16](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980&t=76)** They can be connected with a one-to-many relationship to both of the original tables.
>
> **[1:21](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980&t=81)** This is why it's called a linking table.
>
> **[1:23](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980&t=83)** If I add in the optionality and cardinality figures we can see that each record in the student records table must match to exactly on record in the Students table and exactly one record in the Courses table.
>
> **[1:35](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980&t=95)** And we can also see that each student can have between zero and many records in the linking table and each course can also have between zero and many records in the linking table.
>
> **[1:44](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980&t=104)** In the StudentCourses table in the middle we can use the CourseID and StudentID together to create a concatenated primary key which enforces the rule that no student can be enrolled in the same course twice.
>
> **[1:55](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980&t=115)** If we take a look at how this arrangement works when data is populated in the tables you can follow the threads of information from the Students table, through the linking table, and to the Courses table.
>
> **[2:04](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980&t=124)** This allows you to see that Lee enrolled in both Chemistry and Biology.
>
> **[2:08](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980&t=128)** Francis took Biology and Physics.
>
> **[2:10](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980&t=130)** And Amir only took Biology.
>
> **[2:12](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980&t=132)** So that's how a many-to-many relationship works.
>
> **[2:15](https://www.linkedin.com/learning/relational-databases-essential-training/many-to-many-relationships?u=76281980&t=135)** They are theoretically possible but they require a linking table to implement in a relational database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (4), data (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - the (1)

#### Self joins
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/self-joins?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/self-joins?u=76281980&t=1)** - [Instructor] Relationships are almost always made between two different data tables but it is possible for a column and a table to relate to another column in the same table.
>
> **[0:10](https://www.linkedin.com/learning/relational-databases-essential-training/self-joins?u=76281980&t=10)** This is called a self join.
>
> **[0:12](https://www.linkedin.com/learning/relational-databases-essential-training/self-joins?u=76281980&t=12)** A self join, also known as a self-referencing relationship or a recursive relationship follows all of the same rules as the relationships created between two tables.
>
> **[0:21](https://www.linkedin.com/learning/relational-databases-essential-training/self-joins?u=76281980&t=21)** They can be one-to-one, one-to-many, or many-to-many relationships.
>
> **[0:26](https://www.linkedin.com/learning/relational-databases-essential-training/self-joins?u=76281980&t=26)** The same unique constraints still apply and you still you need to consider cardinality when determining the type of join.
>
> **[0:32](https://www.linkedin.com/learning/relational-databases-essential-training/self-joins?u=76281980&t=32)** So where might a self join be useful?
>
> **[0:34](https://www.linkedin.com/learning/relational-databases-essential-training/self-joins?u=76281980&t=34)** They're used to model hierarchies within the same class.
>
> **[0:37](https://www.linkedin.com/learning/relational-databases-essential-training/self-joins?u=76281980&t=37)** For instance, consider this table of employees.
>
> **[0:40](https://www.linkedin.com/learning/relational-databases-essential-training/self-joins?u=76281980&t=40)** Each employee has an ID and the table also stores the ID of the employee's direct supervisor.
>
> **[0:46](https://www.linkedin.com/learning/relational-databases-essential-training/self-joins?u=76281980&t=46)** If you mentally connect the supervisor ID column back to the employee ID column, you can see that Marisol is supervisor to both Josiah and Severino and Severino is Shea's supervisor.
>
> **[0:59](https://www.linkedin.com/learning/relational-databases-essential-training/self-joins?u=76281980&t=59)** You could use the information in this table to build an organizational flow chart that looks like this.
>
> **[1:04](https://www.linkedin.com/learning/relational-databases-essential-training/self-joins?u=76281980&t=64)** A branching org chart can get pretty complicated the larger it gets but with a self join and a relational database, you can efficiently store the same information in a standard data table.
>
> **[1:14](https://www.linkedin.com/learning/relational-databases-essential-training/self-joins?u=76281980&t=74)** And finally, this is what a self join would look like in a database diagram.
>
> **[1:18](https://www.linkedin.com/learning/relational-databases-essential-training/self-joins?u=76281980&t=78)** The supervisor ID would become a foreign key in a relationship back to the employee ID.
>
> **[1:23](https://www.linkedin.com/learning/relational-databases-essential-training/self-joins?u=76281980&t=83)** It's a one-to-many relationship but it's a little bit tricky to put into words.
>
> **[1:27](https://www.linkedin.com/learning/relational-databases-essential-training/self-joins?u=76281980&t=87)** You'd have to read the relationship from top to bottom as each employee can be the supervisor of many other employees.
>
> **[1:35](https://www.linkedin.com/learning/relational-databases-essential-training/self-joins?u=76281980&t=95)** If you read it bottom to top, it would be something like each supervisor can only be a single employee.
>
> **[1:41](https://www.linkedin.com/learning/relational-databases-essential-training/self-joins?u=76281980&t=101)** You could also take this table design one step further and implement a check constraint that makes it so an employee can't be their own supervisor.
>
> **[1:49](https://www.linkedin.com/learning/relational-databases-essential-training/self-joins?u=76281980&t=109)** That would add an additional requirement that the data must satisfy in order to help keep things organized and keep your database from getting stuck in a recursive loop.
>
> **[1:58](https://www.linkedin.com/learning/relational-databases-essential-training/self-joins?u=76281980&t=118)** For instance, if we had one, it would say Marisol is Marisol's supervisor who is also Marisol's supervisor and it would continue on forever.
>
> **[2:05](https://www.linkedin.com/learning/relational-databases-essential-training/self-joins?u=76281980&t=125)** So watch out for that trap if you implement self joins in your database.
>
> **[2:09](https://www.linkedin.com/learning/relational-databases-essential-training/self-joins?u=76281980&t=129)** And that's how self joins work.
>
> **[2:11](https://www.linkedin.com/learning/relational-databases-essential-training/self-joins?u=76281980&t=131)** They're not the most common data structure around but they can be very efficient when modeling the right kind of information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), database (4)
> **Definitions:** is called (1), known as (1)
> **Analogies:** for instance (2)
> **Warnings:** watch out (1)
> **Speakers:** - [instructor] (1)

#### Cascade changes
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/cascade-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/cascade-changes?u=76281980&t=1)** - [Instructor] When records in a table are modified or deleted, it can have downstream effects on other tables that they're related to.
>
> **[0:08](https://www.linkedin.com/learning/relational-databases-essential-training/cascade-changes?u=76281980&t=8)** Relational database management systems have features that can cascade changes to affected tables in order to maintain the integrity of a relationship.
>
> **[0:16](https://www.linkedin.com/learning/relational-databases-essential-training/cascade-changes?u=76281980&t=16)** Let's see how this works by looking at the Vacation Photos database again.
>
> **[0:19](https://www.linkedin.com/learning/relational-databases-essential-training/cascade-changes?u=76281980&t=19)** This time I'm going to focus on the relationship between the Pictures table and the Locations table.
>
> **[0:24](https://www.linkedin.com/learning/relational-databases-essential-training/cascade-changes?u=76281980&t=24)** These tables are related in a one-to-many relationship based off of the Location fields.
>
> **[0:29](https://www.linkedin.com/learning/relational-databases-essential-training/cascade-changes?u=76281980&t=29)** If we were to modify the location number for Paris in the Locations table, say change it from two to five, that would cause problems for the database.
>
> **[0:37](https://www.linkedin.com/learning/relational-databases-essential-training/cascade-changes?u=76281980&t=37)** Now if we were to try and look up where the Eiffel Tower picture was taken, we wouldn't find the matching record in the Locations table.
>
> **[0:43](https://www.linkedin.com/learning/relational-databases-essential-training/cascade-changes?u=76281980&t=43)** There would be a disconnect in the data, and the relational integrity of the database would be compromised.
>
> **[0:49](https://www.linkedin.com/learning/relational-databases-essential-training/cascade-changes?u=76281980&t=49)** Instead what we can do is have the relational database management system make the same change in the downstream table.
>
> **[0:54](https://www.linkedin.com/learning/relational-databases-essential-training/cascade-changes?u=76281980&t=54)** This is a process called cascading the update.
>
> **[0:57](https://www.linkedin.com/learning/relational-databases-essential-training/cascade-changes?u=76281980&t=57)** So when I make the change in the location for Paris, the same change would also be made to the related records in the Pictures table automatically, and the integrity of the relationship would be unchanged.
>
> **[1:07](https://www.linkedin.com/learning/relational-databases-essential-training/cascade-changes?u=76281980&t=67)** So that's a Cascade Update.
>
> **[1:09](https://www.linkedin.com/learning/relational-databases-essential-training/cascade-changes?u=76281980&t=69)** Relational databases also support another feature called Cascade Delete.
>
> **[1:13](https://www.linkedin.com/learning/relational-databases-essential-training/cascade-changes?u=76281980&t=73)** It's basically the same thing, but triggers when a record is completely removed from the database.
>
> **[1:18](https://www.linkedin.com/learning/relational-databases-essential-training/cascade-changes?u=76281980&t=78)** With Cascade Delete enabled on the relationship, if I entirely remove the location of Cairo, the DBMS would also delete the records for the two images that were taken there.
>
> **[1:27](https://www.linkedin.com/learning/relational-databases-essential-training/cascade-changes?u=76281980&t=87)** This maintains the integrity of the database and doesn't allow a situation where we have orphaned records that don't relate to the information that's expected.
>
> **[1:35](https://www.linkedin.com/learning/relational-databases-essential-training/cascade-changes?u=76281980&t=95)** Now it's worth noting that this functionality only comes into play when data is modified or deleted, not when it's initially created.
>
> **[1:42](https://www.linkedin.com/learning/relational-databases-essential-training/cascade-changes?u=76281980&t=102)** And leaving Cascade Update and Cascade Delete off can also protect your information from accidental changes.
>
> **[1:48](https://www.linkedin.com/learning/relational-databases-essential-training/cascade-changes?u=76281980&t=108)** If a user tries to modify data that would otherwise cause an integrity violation, the database would simply refuse to perform the change.
>
> **[1:55](https://www.linkedin.com/learning/relational-databases-essential-training/cascade-changes?u=76281980&t=115)** The procedure to implement Cascade Update and Cascade Delete will vary from platform to platform.
>
> **[2:01](https://www.linkedin.com/learning/relational-databases-essential-training/cascade-changes?u=76281980&t=121)** Some use a graphical interface and a checkbox to enable the feature when creating relationships.
>
> **[2:05](https://www.linkedin.com/learning/relational-databases-essential-training/cascade-changes?u=76281980&t=125)** Others will rely on SQL commands to do the same thing.
>
> **[2:08](https://www.linkedin.com/learning/relational-databases-essential-training/cascade-changes?u=76281980&t=128)** With this method, you'll use ON UPDATE CASCADE and ON DELETE CASCADE in the script when creating the foreign key and relationship.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (8), data (3), management (2), feature (2), [[Relational Databases]] (1)
> **Env Vars:** cascade (2), dbms (1), sql (1), update (1), delete (1)
> **CLI Commands:** make (2), find (1)
> **API Endpoints:** delete  (1)
> **SQL:** update (1)
> **UI Navigation:** checkbox (1)
> **Definitions:** is a  (1)
> **Analogies:** picture (1)


### 5. Normalization

[↑ Back to Table of Contents](#table-of-contents)

#### Relational database normal forms
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=1)** - [Instructor] In Edgar Frank Codd's authoritative paper on the Relational Model, he defines a number of rules that data tables should adhere to in order to make up a well-structured database.
>
> **[0:10](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=10)** He called tables that satisfied these requirements, "Normal Forms."
>
> **[0:14](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=14)** And the process of assessing a table and making necessary changes to the structure, became known as "Normalization."
>
> **[0:20](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=20)** Normalization is a series of rules that your databases table structure must pass in order to be considered a good relational design.
>
> **[0:28](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=28)** The individual rules are called "normal forms," and they must be tested in order like passing through a series of gates or checkpoints.
>
> **[0:35](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=35)** In other words, you can't satisfy the requirements of the second normal form, without first satisfying the requirements of the first normal form.
>
> **[0:42](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=42)** It's generally accepted that a relational database that meets the requirements of the third normal form is in pretty good shape, so that's what we are going to look at.
>
> **[0:50](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=50)** Now you might have actually accomplished some of these checks earlier in the process of designing a database without realizing it.
>
> **[0:56](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=56)** There are multiple ways to identify the issues that we're about to look for, but it's always a good idea to go through a formal normalization procedure to make sure that nothing slipped through the cracks.
>
> **[1:05](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=65)** Let's start at the beginning with the First Normal Form.
>
> **[1:08](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=68)** Tables that satisfy 1NF will have columns that only store a single piece of data.
>
> **[1:13](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=73)** You'll know when a table is in violation of the First Normal Form, when you see something like this.
>
> **[1:19](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=79)** The People column is storing a comma-separated list of values.
>
> **[1:23](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=83)** The solution is to try and break it out into more columns.
>
> **[1:26](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=86)** But in this case we wind up with multiples of these same kind of column.
>
> **[1:29](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=89)** You'd have to resort to numbering them.
>
> **[1:31](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=91)** This isn't a great solution, so the best solution is to move the people into their own table and create a relationship back to the original records.
>
> **[1:38](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=98)** Another common way that the First Normal Form is violated is storing addresses, which is just a comma-separated list of values in disguise.
>
> **[1:45](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=105)** If you store an entire address in a single column, it makes the data hard to work with.
>
> **[1:50](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=110)** Instead, create a separate street address, city, state, and postal code columns in the table, and separate out each discrete component of the address.
>
> **[1:57](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=117)** The Second Normal Form, or 2NF, might be a relatively easy gate to pass, depending on how you set up your primary keys.
>
> **[2:05](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=125)** If all of your tables use only a single field or column as their primary key, then congratulations.
>
> **[2:10](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=130)** You've already passed the requirements for 2NF.
>
> **[2:13](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=133)** If you're using a composite primary key, that is to say a primary key that requires two or more fields in conjunction to uniquely identify a record, then we have a little bit of work to do here for a Second Normal Form.
>
> **[2:23](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=143)** A table is in Second Normal Form if all of the fields in the primary key are required to determine the other, non-key fields.
>
> **[2:30](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=150)** Here is an example.
>
> **[2:31](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=151)** In our Pictures Database, the People Table had a concatenated key that combined the Picture# and the Person's Name to uniquely identify each record.
>
> **[2:40](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=160)** This created a table that would not allow two records for the same person in the same photo.
>
> **[2:44](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=164)** It's also a set up that unfortunately creates a situation where we can't have two friends with the same name in the same photo.
>
> **[2:50](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=170)** But I'm going to go ahead and ignore that problem for just a moment.
>
> **[2:53](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=173)** Let's suppose that we also want to store the last names of each person, so we logically add another column to the table.
>
> **[2:58](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=178)** This table now violates the Second Normal Form because the Last Name can be entirely figured out just by the person's first name.
>
> **[3:06](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=186)** In other words, you don't need both columns that make up a composite primary key to determine the last name.
>
> **[3:12](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=192)** The picture number is irrelevant.
>
> **[3:14](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=194)** We can fix this and bring the table back in to compliance with Second Normal Form by splitting the data out into another table and joining them together with a one-to-many relationship.
>
> **[3:23](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=203)** We can also take the opportunity here to create a better, more unique primary key for the Person Table, so that we can now have two people with the same name in the same photo.
>
> **[3:32](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=212)** That brings us to the Third Normal Form.
>
> **[3:34](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=214)** The Third Normal Form follows a similar pattern to the Second Normal Form, but instead of checking against the individual components of a composite primary key, we'll check each non-key column against every other non-key column.
>
> **[3:46](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=226)** Here we're looking for columns that are functionally dependent on another piece of information that isn't the primary key.
>
> **[3:51](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=231)** Here is an example of a table that violates the Third Normal Form.
>
> **[3:55](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=235)** We've decided to add information about where each person lives, and for flexibility in how we use the data, we want both the two-letter state abbreviation, as well as the full name of the state.
>
> **[4:04](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=244)** Third Normal Form is only concerned with non-key columns, so we can ignore the Person column for now.
>
> **[4:10](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=250)** Now evaluate every other column to see if you can definitely figure out the value of one column from the value stored in another.
>
> **[4:16](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=256)** You might think that the First and Last Names fit that description, and maybe for this limited number of records it does.
>
> **[4:23](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=263)** But it is certainly possible that the table could contain two people with the same first name, but different last names.
>
> **[4:27](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=267)** So that's not a functional dependency.
>
> **[4:29](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=269)** We do have a functional dependency between the two state columns.
>
> **[4:33](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=273)** Since state abbreviations are unique, anytime we see WA we know that that means Washington.
>
> **[4:39](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=279)** It doesn't matter how many records this table has, that will always be the case.
>
> **[4:43](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=283)** Violations of Third Normal Form often occur when two fields are simply stating the same thing in a different way.
>
> **[4:49](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=289)** Since state abbreviation is entirely dependent on state, or vice versa, one of those two fields should be removed from the table and, you guessed it, put into a related table.
>
> **[4:58](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=298)** Compliance with Third Normal Form is typically considered a great place to get to for many business database systems.
>
> **[5:04](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=304)** There are additional Normal Forms beyond 3NF, but they're of increasing obscurity and complexity.
>
> **[5:09](https://www.linkedin.com/learning/relational-databases-essential-training/relational-database-normal-forms?u=76281980&t=309)** For many, getting to 3NF will solve most of the problems that can cause issues with a databases performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), database (5), [[Forms]] (3), [[Databases]] (2), functional (2)
> **Definitions:** in other words (2), is an  (2), known as (1), is a  (1)
> **CLI Commands:** make (3)
> **Analogies:** picture (2)
> **Prerequisites:** set up (2)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)

#### When not to normalize
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/when-not-to-normalize?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/when-not-to-normalize?u=76281980&t=1)** - [Narrator] The process of normalizing a database is a good exercise to move through in order to alleviate many problems that can make a database inefficient and inflexible, but they are only guidelines.
>
> **[0:10](https://www.linkedin.com/learning/relational-databases-essential-training/when-not-to-normalize?u=76281980&t=10)** In certain circumstances, a tables design can deliberately violate one of the first three normal forms if the database designer has a good reason to do so.
>
> **[0:18](https://www.linkedin.com/learning/relational-databases-essential-training/when-not-to-normalize?u=76281980&t=18)** This is a process called Denormalization.
>
> **[0:21](https://www.linkedin.com/learning/relational-databases-essential-training/when-not-to-normalize?u=76281980&t=21)** The normalization process is all about removing redundant information from your database, and can help prevent data anomalies that can creep in when repeated information isn't updated simultaneously.
>
> **[0:30](https://www.linkedin.com/learning/relational-databases-essential-training/when-not-to-normalize?u=76281980&t=30)** Denormalization deliberately introduces redundancy in order to increase performance.
>
> **[0:36](https://www.linkedin.com/learning/relational-databases-essential-training/when-not-to-normalize?u=76281980&t=36)** Denormalization should be approached with caution, and you need to be very specific as to your reason for not having your tables neat, third normal form, and it should only be considered as an option when indexing and other performance enhancement techniques don't provide the required gains.
>
> **[0:50](https://www.linkedin.com/learning/relational-databases-essential-training/when-not-to-normalize?u=76281980&t=50)** So, how does denormalization increase performance?
>
> **[0:54](https://www.linkedin.com/learning/relational-databases-essential-training/when-not-to-normalize?u=76281980&t=54)** You might have noticed that a common solution to all of our normalization procedures was to create additional related tables and move the offending columns into them.
>
> **[1:02](https://www.linkedin.com/learning/relational-databases-essential-training/when-not-to-normalize?u=76281980&t=62)** And while it makes for very efficient data storage, it increases the time that it takes to access the related values when the DBMS needs to go looking in multiple tables and join them back together in order to return the requested information.
>
> **[1:14](https://www.linkedin.com/learning/relational-databases-essential-training/when-not-to-normalize?u=76281980&t=74)** These two tables here are the solution that we came up for bringing our Person table into compliance with third normal form.
>
> **[1:20](https://www.linkedin.com/learning/relational-databases-essential-training/when-not-to-normalize?u=76281980&t=80)** It broke the full state names into a separate table and created one to many relationship back to the Person data.
>
> **[1:26](https://www.linkedin.com/learning/relational-databases-essential-training/when-not-to-normalize?u=76281980&t=86)** If these tables grew very large, then it could take a bit of time for the database management system to piece records together when they're requested.
>
> **[1:33](https://www.linkedin.com/learning/relational-databases-essential-training/when-not-to-normalize?u=76281980&t=93)** If all of the data were back in a single table, then the system wouldn't have to match records across tables.
>
> **[1:38](https://www.linkedin.com/learning/relational-databases-essential-training/when-not-to-normalize?u=76281980&t=98)** In this arrangement, you sacrifice some data protection and increase the storage required since the full state name will be included in every record in the Person table, but you trade that sacrifice for an increase in the speed at which the system can retrieve information.
>
> **[1:51](https://www.linkedin.com/learning/relational-databases-essential-training/when-not-to-normalize?u=76281980&t=111)** So, there's a definite trade off that needs to be carefully considered and studied before you just jump in and denormalize everything.
>
> **[1:58](https://www.linkedin.com/learning/relational-databases-essential-training/when-not-to-normalize?u=76281980&t=118)** Further, it's now possible to have inconsistencies in the data.
>
> **[2:01](https://www.linkedin.com/learning/relational-databases-essential-training/when-not-to-normalize?u=76281980&t=121)** If Brandi moves, for example, we need to update both the state abbreviation and the full state names at the same time.
>
> **[2:08](https://www.linkedin.com/learning/relational-databases-essential-training/when-not-to-normalize?u=76281980&t=128)** If we just change one or the other, the two columns wouldn't agree, and it would be difficult to tell which one was correct.
>
> **[2:14](https://www.linkedin.com/learning/relational-databases-essential-training/when-not-to-normalize?u=76281980&t=134)** This inconsistency wouldn't have been possible in the fully normalized arrangement, so it's up to the database designer to ensure that these duplicated values remain synchronized by implementing programmatic rules or constraints in the user interface whenever changes to the data occur.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), database (6), [[Forms]] (1), management (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Env Vars:** dbms (1)
> **Analogies:** for example (1)
> **Warnings:** caution (1)
> **Speakers:** - [narrator] (1)


### 6. Structured Query Language

[↑ Back to Table of Contents](#table-of-contents)

#### Convert the ER diagram to a database
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=0)** - [Instructor] The online tools we've been using throughout this course such as the Quick Database Diagram's web app here or the SQL Fiddle app for experimenting with code can be fantastic little tools for quickly testing out design solutions and playing around with relational database concepts.
>
> **[0:15](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=15)** But at some point, you really need to dive right into a full-feature relational database management system.
>
> **[0:20](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=20)** That's what we're going to do in this chapter.
>
> **[0:22](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=22)** As I outlined at the beginning of the course, you have an extensive number of platforms to choose from for running your databases.
>
> **[0:27](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=27)** Everything from Microsoft Access and FileMaker on your desktop computer to Enterprise-grade SQL Server and Oracle deployments are all grounded in the relational concepts that we've been exploring.
>
> **[0:37](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=37)** Some of those solutions do require licensing fees, complex installation procedures, or expensive hardware requirements, though.
>
> **[0:44](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=44)** So to keep everyone on the same page, I've chosen the demonstrate the next few steps with a solution that'll run SQL Server in a Docker container and use an application called Azure Data Studio to interface with the server.
>
> **[0:55](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=55)** That'll give everyone a free-to-use full-feature database server of their own to continue experimenting with, and it'll only take a couple of steps to get everything configured.
>
> **[1:04](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=64)** First, you'll need Azure Data Studio, and you can get it from this URL.
>
> **[1:08](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=68)** This is a program published by Microsoft that gives us a graphical interface for working with SQL Server.
>
> **[1:13](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=73)** There are versions for Windows, macOS, and Linux, and you'll find the installation files right here.
>
> **[1:18](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=78)** On Windows, you're going to use this installer from the user installer link.
>
> **[1:22](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=82)** On macOS, you could download the zip of the application.
>
> **[1:25](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=85)** So pick the one that's appropriate for you and install it on your computer.
>
> **[1:29](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=89)** Next, we need to install Docker.
>
> **[1:31](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=91)** Docker is an application that allows you to write containers.
>
> **[1:34](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=94)** Essentially, they're virtual computers that come preconfigured.
>
> **[1:37](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=97)** Microsoft provides containers that already have SQL Server installed on them.
>
> **[1:41](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=101)** So as soon as your start the container, you've got a SQL Server instance ready to go.
>
> **[1:45](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=105)** You can get the Docker Desktop app from this URL.
>
> **[1:48](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=108)** You're going to click the Download Desktop for Mac and Windows button here.
>
> **[1:52](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=112)** Then you will need to create a Docker ID as sign into your account.
>
> **[1:56](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=116)** Once you do it, you'll click this button here to download Docker Desktop for your platform.
>
> **[2:00](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=120)** Then you can just install it like any other program on your computer.
>
> **[2:03](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=123)** Once you start Docker, and it's up and running, you'll see this icon up here on your Mac's menu bar or down in the Windows system tray.
>
> **[2:10](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=130)** You should see a notification here that says Docker Desktop is running.
>
> **[2:14](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=134)** Now, we're ready to get our SQL Server container.
>
> **[2:16](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=136)** First, make sure that Docker is running, then open up a terminal on a Mac or a command prompt on Windows.
>
> **[2:21](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=141)** Now, I've written the command that you need to enter and saved it into a text file in the exercise files.
>
> **[2:25](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=145)** You can either copy and paste that text or type in what I have on the screen here.
>
> **[2:30](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=150)** The command here is docker run dash e Accept_EULA equals Y, and that's going to be in quotation marks.
>
> **[2:36](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=156)** On a Mac, you're going to use single quotes, and on a PC, you'll use double quotes.
>
> **[2:40](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=160)** Then we have dash e and then SA_Password equals and your StrongPassword, again wrapped out in quotation marks, then dash p 1433 colon 1433, this sets up a couple ports on our system, then dash dash name sqlserver, this is the name of our container.
>
> **[2:59](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=179)** And then, finally, the image that it's going to be pulled from, dash d and then the URL mcr.[microsoft.com/msssql/server:2017-latest](https://microsoft.com/msssql/server:2017-latest).
>
> **[3:12](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=192)** When you press Enter, it'll download some files and create the container that's running SQL Server 2017.
>
> **[3:22](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=202)** When it's done installing the container, you should be able to verify that it's working with the command docker ps.
>
> **[3:28](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=208)** The text drafts are out on the screen a little bit, so it's a little hard to read, but it shows me that I have a container created, and the important part here is that it's currently up, and it's been up for about 12 seconds now.
>
> **[3:37](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=217)** If you ever want to stop the server, you could type in the command docker stop sqlserver, and then to restart the server, you can use the command docker start sqlserver.
>
> **[3:55](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=235)** And if you ever want to remove the SQL Server container entirely from your system in order to free up disk space, you can go up here to the Docker icon, then click Preferences, then click the Reset button, and choose Reset to factory defaults or simply uninstall Docker.
>
> **[4:11](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=251)** So now we have Docker running with our SQL Server container running inside of it.
>
> **[4:15](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=255)** We can go ahead and close that on the terminal.
>
> **[4:17](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=257)** Now we can connect to the server with Azure Data Studio.
>
> **[4:20](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=260)** I've already installed the application, so I'll go ahead and start it up now.
>
> **[4:24](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=264)** That'll show me the Connection window over here on the right-hand side of the screen.
>
> **[4:28](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=268)** For the server, I'm going to type in localhost, that's a shortcut way of saying this personal computer that I'm working on right now.
>
> **[4:35](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=275)** The username is going to be SA, which stands for the System Administrator.
>
> **[4:39](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=279)** This is the account that we set up when we created our Docker container.
>
> **[4:42](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=282)** The password was also established when we set up the Docker container.
>
> **[4:46](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=286)** The password established in the script was StrongPassword1, with a capital S, capital P, and the number one.
>
> **[4:53](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=293)** I'll choose the checkbox to remember the password, and then I can press the Connect button down here on the bottom of the screen.
>
> **[4:59](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=299)** Once it's connected, you'll see that localhost over here on the right.
>
> **[5:02](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=302)** Then we need to create a new empty database inside of the server.
>
> **[5:05](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=305)** I'll right-click on localhost over here on the Servers panel, choose New Query, then then I'll type in the command to create a database, and it's simply Create Database and the name that you want to use, and I'll use Kineteco.
>
> **[5:21](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=321)** I'll press the Run button here to execute that command.
>
> **[5:24](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=324)** It tells me that I completed it successfully, so that's good.
>
> **[5:26](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=326)** Let's expand the Databases folder now, and you should see the new empty database right here.
>
> **[5:32](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=332)** If you're not seeing it, you might need to right-click the database's folder and choose Refresh.
>
> **[5:37](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=337)** So now, we need to populate the tables that we've designed in the Database Designer tool.
>
> **[5:41](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=341)** Let's go back over to the web app.
>
> **[5:44](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=344)** These are the two tables that we set up earlier in the course, the Products tables and the Suppliers table.
>
> **[5:48](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=348)** We applied a couple of constraints, for instance, a unique constraint or a null constraint.
>
> **[5:51](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=351)** And we also set up a foreign key relationship between the SupplierID field in the Products table and SupplierID field in the Suppliers table.
>
> **[5:59](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=359)** Now, I want to export the script to create these tables in my database.
>
> **[6:03](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=363)** I'll come up here to the Export button, choose SQL Server, and that'll export the file.
>
> **[6:07](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=367)** Then, we'll go back into my Downloads folder.
>
> **[6:10](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=370)** There is the exported file.
>
> **[6:12](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=372)** Let's go ahead and open it up in our Text Editor.
>
> **[6:14](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=374)** I'm going to select all of the text inside of here and copy it to my clipboard, then we can close this out.
>
> **[6:19](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=379)** We'll return back to Azure Data Studio.
>
> **[6:20](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=380)** Then I'm going to close all of these tabs here that are running along the top of the screen.
>
> **[6:23](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=383)** I don't need to save any changes here.
>
> **[6:27](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=387)** Next, I'll right-click on the Kineteco database that we just created and choose New Query, and I'll paste in the commands to create those tables.
>
> **[6:34](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=394)** I do want to make sure that I'm executing these commands against the Kineteco database here using this drop-down menu, and that looks good there.
>
> **[6:40](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=400)** So I'll press the Run button, and that'll go through and create the tables to our specifications.
>
> **[6:45](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=405)** And just to verify that everything worked, let's go ahead and expand the Tables folder, and you should see the Products table and the Suppliers table right there.
>
> **[6:51](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=411)** So now we've set up a SQL Server instance.
>
> **[6:53](https://www.linkedin.com/learning/relational-databases-essential-training/convert-the-er-diagram-to-a-database?u=76281980&t=413)** We've created an empty database, and we've populated the database with the tables that we designed in the Database Design tool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (16), [[Microsoft SQL Server|Sql server]] (11), [[Windows]] (5), [[Microsoft]] (4), application (4)
> **CLI Commands:** docker (18), make (2), find (1)
> **Env Vars:** sql (12), url (3)
> **Prerequisites:** set up (5), install (3), you'll need (1)
> **Tools:** docker desktop (3), terminal (2), command prompt (1)
> **UI Navigation:** right-click (3), checkbox (1)
> **Definitions:** is a  (1), is an  (1), stands for (1)
> **Code Identifiers:** macos (2)

#### Data definition queries
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=1)** - [Instructor] Relational databases used structured query language or SQL in order to perform tasks on the data base.
>
> **[0:07](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=7)** These tasks include everything from creating tables and relationships, adding record to the tables, querying the database for information, and running maintenance tasks like backups and index repairs.
>
> **[0:18](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=18)** Every relational database platform uses the SQL language, but there could be slight variations from platform to platform on the exact syntax that they use.
>
> **[0:27](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=27)** For instance, one platform might use double quotation marks where another uses square brackets, or a function might have a slightly different name.
>
> **[0:35](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=35)** I'm working with Microsoft Sequel Server database management system, so the commands that I show you here might not translate perfectly if you try and implement them word for word on Postgress, or MySQL, or Auricle, but the concepts will be exactly the same, and that's really what I want to get across in this course.
>
> **[0:51](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=51)** So let's start working with Kineteco database.
>
> **[0:53](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=53)** I've already created the tables that we designed in the quick database diagrams tool.
>
> **[0:57](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=57)** That included a number of constraints and a one committee relationship between the products table and the suppliers table.
>
> **[1:02](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=62)** Here in Azure Data Studio, you can explore the database's contents by opening up each folder.
>
> **[1:07](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=67)** For instance, inside of the Kineteco Database, I can open up the folder for tables and I can see the two tables here.
>
> **[1:12](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=72)** If I expand the tables, we can see how they're made up, we can see that the products table, for instance, has a number of columns inside of it that we defined.
>
> **[1:18](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=78)** You can also see the data type as well as the null constraints that were applied.
>
> **[1:23](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=83)** If you open up the keys folder for the products table, you'll find the primary, unique, and foreign keys that were created.
>
> **[1:29](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=89)** Inside of the constraints folder, you'll see the constraint for the quantity in stock.
>
> **[1:34](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=94)** This is the default value constraint that was added to the quantity and stock column that automatically filled in the value at zero when the value wasn't supplied, and finally inside of the indexes folder are the indexes for the primary key as well as the index that's used to maintain the unique constraint on the product name column.
>
> **[1:51](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=111)** So there's a lot of stuff in here that was built from the script created by the design diagram.
>
> **[1:55](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=115)** Let's go ahead and collapse all these folders again to clean up the interface.
>
> **[2:00](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=120)** The SQL code that created all of those objects falls under the category of commands called data definition queries.
>
> **[2:06](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=126)** These are the commands that create objects and modify their properties.
>
> **[2:10](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=130)** Let's take a look at the script that created our database over here on the right hand side.
>
> **[2:13](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=133)** In fact, I'm going to move this messages window down so we can see more of the script.
>
> **[2:17](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=137)** Now if you scroll through the script, you're going to see commands like create table.
>
> **[2:20](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=140)** Here's an alter table statement, and if I scroll down on my screen, I'll see a create index statement.
>
> **[2:27](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=147)** These are the data definition language commands that created all of our objects.
>
> **[2:31](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=151)** So let's use some of these commands to work with a new database table right here inside the DBMS.
>
> **[2:36](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=156)** I'm going to close the tab that contains our curation script and I'm not going to save any changes to it, then I'm going to right click on the Kineteco Database and choose new query.
>
> **[2:46](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=166)** The first thing I want to do is create a new data table.
>
> **[2:49](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=169)** To do that, you use the create table command.
>
> **[2:55](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=175)** In the SQL language, it's common to type out commands in all capital letters.
>
> **[2:59](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=179)** The table that I want to create is going to be called invoices.
>
> **[3:03](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=183)** Then we need to define the columns that'll make up the invoices table.
>
> **[3:06](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=186)** To do that, I'll type in an open parentheses and that will automatically put in the closing parentheses.
>
> **[3:10](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=190)** Now I'm just going to press enter to move that down on the screen a little bit.
>
> **[3:13](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=193)** The first column in this table will be called invoice ID.
>
> **[3:17](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=197)** It will be an integer data type.
>
> **[3:20](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=200)** It'll also be the primary key for the table, and I want to set a not null constraint on it.
>
> **[3:28](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=208)** When I'm done with that column, I'll type in a comma and move down to the next line.
>
> **[3:31](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=211)** The second column will be named invoice date.
>
> **[3:36](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=216)** It'll use the date time data type, and it'll also not allow null values.
>
> **[3:43](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=223)** I'll type in another comma, and come down to the next line and create the third column which will be called total due.
>
> **[3:50](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=230)** It'll use the money data type, and once again we'll establish a not null constraint.
>
> **[3:57](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=237)** That finishes the three columns that I want to use to create this invoices table, so I'll come down here, in fact I'm just going to move that parentheses up on my screen, and we'll come to the end and I'll type the terminator character which is a semicolon.
>
> **[4:07](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=247)** Now let's run this command to create the table in the database.
>
> **[4:10](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=250)** I get the message that the command completed successfully, so that's a good sign.
>
> **[4:13](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=253)** I'll come over here to the left hand side of my screen and I'll right click on the Kineteco Database and refresh its view, then I'll expand the tables folder again and we should see the new invoices table right here.
>
> **[4:24](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=264)** Now let's add another column to the table.
>
> **[4:27](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=267)** To do that, we'll use an alter table command.
>
> **[4:29](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=269)** I'm going to highlight all this text and get rid of it.
>
> **[4:32](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=272)** We'll start with alter table invoices, and on the next slide we want to add a column called due date.
>
> **[4:43](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=283)** It'll be a date time data type and will not allow null values.
>
> **[4:50](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=290)** I'll finish the statement with the terminator character, the semicolon again and we'll run this statement.
>
> **[4:54](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=294)** Again, it complete successfully and we can refresh the columns folder here, and we should see our new due date column right there.
>
> **[5:01](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=301)** We can also use an alter table command to add a check constraint to force the due date to be after the invoice date.
>
> **[5:08](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=308)** To do that, once again we're going to alter the table invoices but I'm going to get rid of line two here.
>
> **[5:12](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=312)** Then we'll add a constraint.
>
> **[5:15](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=315)** The name of the constraint will be due date underscore constraint.
>
> **[5:23](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=323)** It'll be a check constraint, and we want to verify that the due date is greater than the invoice date.
>
> **[5:34](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=334)** That'll go inside of parentheses and we'll finish with the semicolon.
>
> **[5:37](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=337)** We'll run this command, and that completed successfully, and now we can go into the constraints folder to see the constraint that was added, and finally we can remove this table entirely from the database with a simple drop command.
>
> **[5:47](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=347)** Let's highlight all these lines and say drop table invoices.
>
> **[5:53](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=353)** When I run this command, it'll execute successfully again, and now I can refresh the database one more time and when I expand the tables folder, you'll see that the invoices table no longer exists, and those are the three main data definition language commands.
>
> **[6:08](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=368)** Create to make new objects in the database, alter to modify the configuration, and drop to remove them.
>
> **[6:14](https://www.linkedin.com/learning/relational-databases-essential-training/data-definition-queries?u=76281980&t=374)** I'll save the syntax of each of these statements to the chapter six folder of the exercise files as DDLComplete.txt if you want to review them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (15), data (11), [[SQL]] (4), [[Microsoft Products|Products]] (3), next (3)
> **Env Vars:** sql (4), dbms (1)
> **CLI Commands:** make (2), mysql (1), find (1)
> **UI Navigation:** click on (2), scroll down (1)
> **Analogies:** for instance (3)
> **File Paths:** ddlcomplete.txt (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### Solution: Create tables with DDL commands
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=0)** (uptempo music)
>
> **[0:05](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=5)** - [Instructor] For this code challenge, we were asked to create a table for storing information about our movie watching activities so that we can remember what movies we've seen and our thoughts about each film.
>
> **[0:16](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=16)** Now, the table diagram that was developed included the details for a number of different columns, so we just need to translate that into the SQL code to add it into our database.
>
> **[0:26](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=26)** And we start that by using a CREATE TABLE statement.
>
> **[0:30](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=30)** The name of the table is MovieNight, and after that I open up a parentheses.
>
> **[0:36](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=36)** I'm going to move the closing parentheses down to the end.
>
> **[0:39](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=39)** I like to make sure that I don't forget it and I'll just place it down here at the very end on line 7 just to get it out of the way.
>
> **[0:45](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=45)** And now we can just start filling in the individual columns that were identified in the diagram.
>
> **[0:50](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=50)** So the first column was MovieID.
>
> **[0:53](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=53)** That is going to store an integer data type, and it was also specified to be the primary key for the table.
>
> **[1:03](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=63)** I'm also going to specify that it is not null, this way we cannot put in a null value in this particular column.
>
> **[1:11](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=71)** Now this wasn't identified on the diagram itself, but if you add it, it'll make the table a little bit better in that you won't have a null primary key, so I'm just going to add that in.
>
> **[1:20](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=80)** You could choose to leave that out if you want though.
>
> **[1:23](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=83)** All right, the second column is called MovieTitle, and that is going to be an nvarchar 100 data type, and I'm also going to specify not null for this.
>
> **[1:36](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=96)** Again, that part is optional, i just don't want to enter in a record without an actual movie title, so we'll say not null for that row.
>
> **[1:43](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=103)** Okay, next up we have the Genre and that is identified to be an nvarchar 50 data type, and I'll say not null for this as well.
>
> **[1:55](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=115)** Next step, we have the ReleaseDate.
>
> **[1:59](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=119)** That way we can record the date that each movie was released, and that is going to be a date data type, type a comma after that.
>
> **[2:06](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=126)** The next column is called IsWatched, and this will store a Boolean data type.
>
> **[2:13](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=133)** Booleans are just basic true or false statement, so we can say whether a movie is watched or is not watched in our database.
>
> **[2:21](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=141)** Next up, we have a StarRating column, and this will store an integer.
>
> **[2:26](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=146)** We only need to store a number between 0 and 5 so we can store that in a tinyint.
>
> **[2:31](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=151)** That'll give us a nice range of values that we can use for that.
>
> **[2:35](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=155)** Nope, I need a comma after the end of that.
>
> **[2:36](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=156)** And next up we have the WatchDate, that is also a date data type, so we can specify when we've seen the film.
>
> **[2:45](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=165)** And finally, any comments, we can store that as text data.
>
> **[2:48](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=168)** Text will allow us to store a lot of text instead of just a normal character range like we have for the nvarchar data types up here that specify the number of characters we can use.
>
> **[2:57](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=177)** Text is usually open-ended, so we could type in paragraphs if we wanted to.
>
> **[3:01](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=181)** And that is all of the columns that we're adding for the table.
>
> **[3:05](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=185)** I'll bring that closing parentheses up and end the statement with a semicolon there.
>
> **[3:09](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=189)** So that takes care of the table creation step.
>
> **[3:12](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=192)** Now, the challenge also added one more requirement that we add in a constraint on the data, so that these star ratings can only be a number between 0 and 5.
>
> **[3:22](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=202)** This way we can put in a rating with a standard range that you'll see in movie reviews, but keep the database from accepting something silly, like 100 star rating, for example.
>
> **[3:32](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=212)** And to do that, we use an ALTER TABLE statement.
>
> **[3:36](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=216)** So we're going to alter the movie night table, and we're going to add in a constraint.
>
> **[3:45](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=225)** You can name your constraint whatever you'd like.
>
> **[3:46](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=226)** I like to use the ck prefix just to specify that this is a check constraint, as opposed to something like a unique constraint that would have a UQ or a U prefix there.
>
> **[3:57](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=237)** So ck_, and I'll just name this StarRating_Range.
>
> **[4:07](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=247)** Okay, then this is going to be a CHECK constraint, and what do we want to check?
>
> **[4:13](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=253)** In parentheses, I'll type in that we want to check the star rating, and I need to do two checks actually.
>
> **[4:20](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=260)** I need to make sure that it is above or equal to 0, and I need to make sure that the star rating is less than or equal to 5, and that'll give us that range.
>
> **[4:35](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=275)** All right, I'll type a semicolon at the end to finish that ALTER TABLE statement, and that finishes everything.
>
> **[4:39](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=279)** Let me go ahead and test my code, that's going to create the table, then alter the table to add in the CHECK constraint, and it's going to insert the first three rows of data and select everything out of it.
>
> **[4:49](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=289)** And if everything works, I should get a correct output here with my table structure in place and those three rows for the first three movies that we've watched.
>
> **[4:58](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=298)** And so that is my solution to the challenge.
>
> **[5:01](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=301)** They create an ALTER TABLE statements, set everything up so the INSERT statement can add the data, and the SELECT statement can return the final result.
>
> **[5:09](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=309)** Now we can verify that the CHECK constraint is working by changing the data in one of these rows.
>
> **[5:14](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=314)** So for this first movie, The Galactic Adventure, I'm going to change the column for the star rating, which is the one right before the watch date, so it's going to be this value here, and in this row gives it a 5 star rating, let's just change it to something else that's going to be out of range.
>
> **[5:29](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=329)** I'll change it to a 7 and then press Test my code again, and this time we get an error, and in fact, it's a check constraint violation, So that's exactly what I expected.
>
> **[5:39](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=339)** So we're getting a check constraint conflict, that the data validation is saying that that 7 is out of range, it's not within the range of 0 to 5, so the check constraint is working.
>
> **[5:50](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=350)** We change this back to a 5 over here again, test my code again, and that gets us back to the correct output for the challenge.
>
> **[5:58](https://www.linkedin.com/learning/relational-databases-essential-training/solution-create-tables-with-ddl-commands-24764266?u=76281980&t=358)** Let me go ahead and scroll here to the left so we can see it here on the screen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (13), next (5), database (3), [[SQL]] (1)
> **Env Vars:** table (4), alter (3), check (3), sql (1), create (1)
> **SQL:** alter table (3), create table (1), select (1)
> **CLI Commands:** make (4)
> **Definitions:** is called (2), is a  (1)
> **Analogies:** for example (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### Data manipulation queries
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=1)** - [Instructor] The sequel commands that are used to modify data fall under the category called data manipulation language commands, or DML.
>
> **[0:08](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=8)** These commands affect the information stored in the database tables.
>
> **[0:11](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=11)** Let's take a look by creating a new query for the Kineteco database by right clicking on the database over here on the left in the connections window, and choosing new query.
>
> **[0:19](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=19)** Now what I want to do is add in some records into the suppliers table.
>
> **[0:23](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=23)** If you need to review the columns that are in the suppliers table, you can expand the folder there and then expand the columns.
>
> **[0:27](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=27)** And here we'll see that we have to supply values for the column for supplier ID, supplier name, phone number, street address, city, state and zip.
>
> **[0:36](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=36)** To do that we'll use the command insert into.
>
> **[0:40](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=40)** Then, we'll specify that we want to insert records into the suppliers table.
>
> **[0:45](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=45)** I'll come down to the next line and I'll type in the keyword values, and open up a parentheses.
>
> **[0:50](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=50)** Now we just need to supply the individual values that'll make up the first record.
>
> **[0:54](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=54)** We need to make sure that we do so in the order that the columns appear over here on the left.
>
> **[0:58](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=58)** So the first value is going to be the supplier ID, I'll just type in the number 101.
>
> **[1:03](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=63)** Then, I'll type in a comma and the next value needs to be the supplier name.
>
> **[1:06](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=66)** Since this is text, it goes inside of single quotation marks.
>
> **[1:09](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=69)** And the supplier's name is going to be H plus sport.
>
> **[1:13](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=73)** Another comma, and another opening pair of singe quotation marks and we'll supply the phone number.
>
> **[1:22](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=82)** Next up is the street address, then the city, state, and zip.
>
> **[1:29](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=89)** When I have finished the values for the first record, we'll close the parenthesis and we'll type in a comma to come down to the next line.
>
> **[1:35](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=95)** Now, I can supply another set of values to create a second record.
>
> **[1:39](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=99)** We'll follow the same pattern as above, starting with a supplier ID, this time of 102.
>
> **[1:44](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=104)** The supplier name Two Trees.
>
> **[1:49](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=109)** And I'll continue on filling in the rest of the details.
>
> **[1:56](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=116)** That finishes the values for my second record, so I'll finish with a closing parenthesis, and we'll add in the statement terminator, the semicolon character there and run the statement.
>
> **[2:04](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=124)** I get the message that two rows were affected in the database, so that's a good sign that it worked.
>
> **[2:08](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=128)** Let's go ahead and view these records now by right clicking on the supplier's table and choosing select top 1000.
>
> **[2:14](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=134)** That'll open up a new tab, and show me a data table with the two records populated.
>
> **[2:19](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=139)** Now, let's go through the process of changing one of these records.
>
> **[2:22](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=142)** I want to update the Two Trees supplier to have the name two with the number two instead of the word two.
>
> **[2:29](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=149)** To do that, I'll come back here to the first tab and I'll highlight all this text and get rid of it.
>
> **[2:33](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=153)** To modify the data, we'll use an update statement.
>
> **[2:36](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=156)** The data table that I want to update is still the suppliers table.
>
> **[2:40](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=160)** And I want to set the value of the supplier name field equal to two trees with the number two.
>
> **[2:53](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=173)** Now if I run this command right now, the database is going to change the name of both records that we have in the table.
>
> **[2:58](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=178)** I need to make sure that the modification is applied to just the record that we intend to change and to do that we'll use a where clause to apply the change to just a specific record.
>
> **[3:07](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=187)** And since we know for certain that the record can be uniquely identified based off of the primary key value for the table, I'm going to use that value to set the target.
>
> **[3:16](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=196)** To do that I'll type in where supplier ID is equal to 102.
>
> **[3:23](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=203)** So now the statement is going to update the suppliers table and it's going to change the name of the supplier name to Two Trees, but only for the record where the supplier ID is 102.
>
> **[3:33](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=213)** I'll run this query, and I get the message that one row is affected, so that's a good sign that it didn't affect both records.
>
> **[3:38](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=218)** I'll come back over here to the other tab and I'll run this query again to see the updated data table.
>
> **[3:43](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=223)** In here we can see our modification.
>
> **[3:45](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=225)** And finally, using DML, we can also remove records from a table.
>
> **[3:49](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=229)** To do that, I'll come back here to the first tab and I'll highlight all of this text and get rid of it.
>
> **[3:53](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=233)** The statement starts with the keyword delete from, the name of the table, suppliers, and once again we need to make sure that we are targeting the delete to just the specific record we intend to get rid of.
>
> **[4:06](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=246)** Once again we'll do that with a where clause.
>
> **[4:10](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=250)** And we'll use the primary key again.
>
> **[4:17](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=257)** I'll type in supplier ID equals 102 to get rid of the Two Trees record.
>
> **[4:23](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=263)** I'll run the statement, and I get the message that one row was affected.
>
> **[4:26](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=266)** We'll switch back to this other tab, and we'll run the statement again, and we'll see the updated data table in the results.
>
> **[4:32](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=272)** Now you can see we just have a single record in the table and the Two Trees record has been removed.
>
> **[4:36](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=276)** And those are the three most common data manipulation language commands.
>
> **[4:40](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=280)** Insert to add data to a table, update to modify a record, and delete to remove a record.
>
> **[4:46](https://www.linkedin.com/learning/relational-databases-essential-training/data-manipulation-queries?u=76281980&t=286)** I'll save the syntax of all those commands into the exercise files as DML_Complete.txt

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), database (5), next (4), [[Data Manipulation]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (4)
> **Env Vars:** dml (2)
> **File Paths:** dml_complete.txt (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Solution: Add data with DML commands
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=0)** (light music)
>
> **[0:05](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=5)** - [Instructor] In this challenge, we need to update the data that we have stored on some local food trucks.
>
> **[0:10](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=10)** I'm going to run the select statement that we're given here, just test my code here, and that'll show us the data that we have in the table to start with.
>
> **[0:17](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=17)** So it looks like we have three rows for three different food trucks.
>
> **[0:20](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=20)** And I can scroll across to see all the different data there for each row.
>
> **[0:25](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=25)** But our challenge for this course is to update this data with some new information.
>
> **[0:29](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=29)** And the first portion of the challenge is to add in a new row of data for a brand new food truck that's just opened.
>
> **[0:35](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=35)** And we could do that with an insert into statement.
>
> **[0:38](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=38)** We're going to insert a new row into the food truck tracker table.
>
> **[0:44](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=44)** And I'll come down to the next line and type in values.
>
> **[0:48](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=48)** Now, normally you can add in a parenthetical list of the different columns that you're adding table information to, into this table here.
>
> **[0:56](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=56)** But if you're actually adding a value into every column of the table, and you're doing it in the same order that they're in the table, you can omit this parenthetical list of column names here.
>
> **[1:07](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=67)** So I'm just going to actually leave that out here.
>
> **[1:09](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=69)** So we're going to insert a row that includes data on every column of this table here.
>
> **[1:14](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=74)** So inside of the value statement, I'll open a parentheses, and we'll start adding in the values.
>
> **[1:19](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=79)** The first one is the truck ID That's going to be the number four, and we'll separate that with a comma.
>
> **[1:24](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=84)** Next up, the truck name is Pizza Wheels.
>
> **[1:27](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=87)** And since this is text, I need to wrap this in single quotation marks, so Pizza Wheels in single quotes.
>
> **[1:36](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=96)** All right, that's the second column.
>
> **[1:37](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=97)** The third column is the cuisine type, and we're told this is Italian.
>
> **[1:42](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=102)** Next up, we have the location, also text, Riverfront Park.
>
> **[1:50](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=110)** Next up, I'm going to type in a comma to get to the next column, and the next column is the menu.
>
> **[1:55](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=115)** Let me scroll here in the results here.
>
> **[1:57](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=117)** So next after location, we have the menu.
>
> **[2:00](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=120)** And I'm going to put this on the next line just so it doesn't wrap on our screen here, we can see everything at once.
>
> **[2:05](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=125)** So the text for the menu that we're given for this new truck is pizza, comma calzones, comma garlic bread.
>
> **[2:16](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=136)** All right, after that, we have the average price per meal column.
>
> **[2:21](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=141)** And since this is a number, we don't need to put this in single quotation marks, I can just type in the 9.50 value there.
>
> **[2:27](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=147)** After average price per meal, we have a column for is open.
>
> **[2:31](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=151)** This is just a Boolean field.
>
> **[2:33](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=153)** And this truck is open, so we'll say true for that.
>
> **[2:36](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=156)** And then finally, the last visited date we're told is 2024, dash 07, dash 16, and we'll put that in single quotation marks there.
>
> **[2:46](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=166)** So that is my insert into statement.
>
> **[2:48](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=168)** We need to finish every single statement with a semicolon at the very end, just so the SQL processor knows that we're done with that statement.
>
> **[2:56](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=176)** And I'm going to test my code here.
>
> **[2:57](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=177)** That should insert that row, and then select everything out of the database again.
>
> **[3:01](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=181)** So we are now showing that we have Pizza Wheels has been added to our list of our taco trucks, and now we have four trucks there.
>
> **[3:08](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=188)** So that handles the first part of the challenge.
>
> **[3:11](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=191)** Next, we need to update a truck's location.
>
> **[3:14](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=194)** The Taco Town truck was originally in the Downtown Plaza, but it has decided to start parking in a new location in City Square.
>
> **[3:23](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=203)** So we need to update this database.
>
> **[3:26](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=206)** So we'll write an update statement, we'll update the food truck tracker table.
>
> **[3:34](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=214)** And I need to set the value of the location column to City Square.
>
> **[3:41](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=221)** Now, if I just leave it like this, it's going to update every truck to City Square, and I don't want to do that, so I need to say where.
>
> **[3:48](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=228)** And we can specify either the truck name is Taco Town, or since the truck ID is the primary key for the table, it's probably better to use that.
>
> **[3:55](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=235)** So I'll say where truck ID is equal to one, and that is the Taco Town truck.
>
> **[4:04](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=244)** All right, add a semicolon to the end of that.
>
> **[4:07](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=247)** Let me test my code again.
>
> **[4:10](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=250)** And okay, so now we have the insert that's adding in Pizza Wheels, and then we also have the location for Taco Trown, (chuckling) Taco Town, has been updated to City Square instead.
>
> **[4:20](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=260)** So that is the second part of the challenge.
>
> **[4:23](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=263)** And then finally, we need to remove any of the rows of data where the food truck is closed.
>
> **[4:29](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=269)** So if I look over here, we have a column called is open, and unfortunately, one of our trucks has actually closed, so we need to remove that from the database.
>
> **[4:37](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=277)** And that is the Burger Bliss truck right now.
>
> **[4:40](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=280)** So we're going to delete from the table, so delete from food truck tracker.
>
> **[4:47](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=287)** And this doesn't need anything else other than a wear clause to specify which rows we want to delete.
>
> **[4:52](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=292)** So I can say delete all the rows where is open is equal to false.
>
> **[4:58](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=298)** And add a semicolon to the end of that to finish that delete statement.
>
> **[5:03](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=303)** And we'll test my code one more time.
>
> **[5:05](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=305)** And there we go, I get a correct output, that second row has been removed, so we no longer have any of the trucks that are closed, so is open is true for all of them now.
>
> **[5:14](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=314)** We have the one row that's been added, we have the location that's been changed, and we have that one row removed.
>
> **[5:21](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=321)** So that gives me a correct output for the challenge.
>
> **[5:23](https://www.linkedin.com/learning/relational-databases-essential-training/solution-add-data-with-dml-commands-24762297?u=76281980&t=323)** And we have the insert into the update and the delete statements that make all of those changes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (9), data (7), database (3), [[SQL]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Versions:** 9.50 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light music) (1)

#### Write database select queries
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=1)** - [Instructor] The primary method of returning information from a relational database is with a sequel select statement.
>
> **[0:07](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=7)** The select statement is extremely flexible, and it'll allow you to ask questions about the data, and the DBMS will return answers in the form of a data table.
>
> **[0:14](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=14)** In order to take a look at writing select statements, we need to have some data saved into the tables.
>
> **[0:19](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=19)** On the screen, I have a script that I've written out that'll populate a few records into each of the two data tables that we've been working with.
>
> **[0:25](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=25)** You can find a copy of this script in the course exercise files.
>
> **[0:29](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=29)** Then you'll just copy the text out of that, come over here and right-click on the Kineteco database and say new query, and then paste the text in.
>
> **[0:36](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=36)** At the top, this script is first going to delete any records that might be in the products or the suppliers table, just to give us a fresh start.
>
> **[0:42](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=42)** Then it'll insert three records into the suppliers table, and a whole bunch of records into the products table.
>
> **[0:47](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=47)** Let's go ahead and give this a run to add the data into the database.
>
> **[0:50](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=50)** Now we can close this tab, and I'm not going to save the changes.
>
> **[0:54](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=54)** And I'll come back to the Kineteco database and right-click on it, and say new query.
>
> **[0:58](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=58)** Now we can start asking questions about the data.
>
> **[1:00](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=60)** The first question you might want to ask about the data is what are all of the records in the products table?
>
> **[1:06](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=66)** You can find the answer by typing select star from products.
>
> **[1:10](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=70)** (keyboard clacking) This is asking the database to just return everything from the products table.
>
> **[1:18](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=78)** I'll press the run button, and we'll see the data table below.
>
> **[1:21](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=81)** It shows me each of the columns that make up the table, as well as every record that's saved in the table.
>
> **[1:26](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=86)** Now if you're not interested in seeing every column returned, you can just ask about specific columns that you'd like to see.
>
> **[1:32](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=92)** So for instance, instead of select star from products, I can change it to select product name comma color comma price from products.
>
> **[1:44](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=104)** This'll pull out just the product name, color, and price columns from the data table.
>
> **[1:50](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=110)** I'll press run, and we'll see what that result looks like.
>
> **[1:53](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=113)** So with a select statement, you can have very precise control over the columns that are being returned.
>
> **[1:58](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=118)** So far though, these queries have returned information about every record in the table.
>
> **[2:02](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=122)** We can start to limit which records are returned by adding a where clause to the statement.
>
> **[2:07](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=127)** The where clause acts like a filter, so you'll specify the criteria, and the database engine will show you the records that match your request.
>
> **[2:15](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=135)** For instance, if you only wanted to find out which gray products you have, you can add where color is equal to gray.
>
> **[2:24](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=144)** When I press the run button, we'll see the answer to this question.
>
> **[2:27](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=147)** And the answer is these three products.
>
> **[2:30](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=150)** These are all the products in the database that have the color gray.
>
> **[2:33](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=153)** Or we could ask about which products have a price above $50, with where price is greater than 50.
>
> **[2:43](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=163)** I'll run this query, and there's the answer to this question.
>
> **[2:47](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=167)** Now in this database, we have two different tables that were related together.
>
> **[2:50](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=170)** The products table and the suppliers table.
>
> **[2:52](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=172)** Let me go ahead and expand these open and take a look at their columns.
>
> **[2:57](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=177)** The products table has a column that stores the supplier ID.
>
> **[3:00](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=180)** And that references the records in the suppliers table based off of the supplier ID column here.
>
> **[3:06](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=186)** You'll remember from the diagram that it's a one to many relationship, where each supplier can supply multiple products to our inventory.
>
> **[3:13](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=193)** You can join records from across these tables with what's called an interjoin.
>
> **[3:17](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=197)** So let's suppose that I wanted to see our products' name, as well as the price, in addition to the supplier name and the supplier's phone number.
>
> **[3:26](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=206)** We can do that with a select query that looks like this.
>
> **[3:28](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=208)** I'll come up here and highlight everything except the world select.
>
> **[3:31](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=211)** Then I'll press backspace on my keyboard to delete it.
>
> **[3:34](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=214)** Now because our columns are coming from multiple tables, we need to be a bit more specific about their names.
>
> **[3:39](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=219)** So instead of just select product name, I need to say select products dot product name.
>
> **[3:47](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=227)** This specifies that we're looking in the products table, and inside of there, we're finding the column product name.
>
> **[3:52](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=232)** So, this is the first column I want to see.
>
> **[3:54](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=234)** I'll type in a comma.
>
> **[3:55](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=235)** The second column is products dot price, followed by suppliers dot supplier name, and finally suppliers dot phone number.
>
> **[4:12](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=252)** So those are all of the columns that I want to see.
>
> **[4:14](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=254)** I'll come down to the next line and I'll specify from.
>
> **[4:17](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=257)** And then we'll list out the data tables where these columns can be found.
>
> **[4:20](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=260)** So we're going to pull this from the products table.
>
> **[4:23](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=263)** And we're going to interjoin that to the suppliers table.
>
> **[4:29](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=269)** Then we need to specify how these two tables are related.
>
> **[4:32](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=272)** And remember, that's based off of the supplier ID column in both tables.
>
> **[4:35](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=275)** So I'll say on, products dot supplier ID, is equal to suppliers dot supplier ID.
>
> **[4:50](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=290)** When I press run, the database engine goes through both tables and matches records up in order to return the appropriate supplier information for each product in the database.
>
> **[4:59](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=299)** So now we can see the product name, as well as the price, and the supplier name and phone number, all in a single location.
>
> **[5:06](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=306)** So this is the basics of how the select statement works in a relational database.
>
> **[5:10](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=310)** It allows you to formulate questions about the records, and the database engine will return all of the data that answer your request.
>
> **[5:16](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=316)** But this is just the tip of the iceberg.
>
> **[5:18](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=318)** And select statements can also group records together to find averages or sum totals.
>
> **[5:22](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=322)** You can sort records by any column.
>
> **[5:24](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=324)** And you can even manipulate values with functions and other mathematical operations.
>
> **[5:29](https://www.linkedin.com/learning/relational-databases-essential-training/write-database-select-queries?u=76281980&t=329)** If you're going to be doing any amount of work with relational databases, then I would strongly encourage you to look into exploring more about the structure query language and the select statement.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (20), database (12), data (11), product (7), next (1)
> **CLI Commands:** find (4), make (1)
> **UI Navigation:** right-click (2)
> **Analogies:** for instance (2)
> **Env Vars:** dbms (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Solution: Query data in a database
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=0)** - [Instructor] For this Go Challenge, we are interested in finding vacation activities that are best experienced in the springtime.
>
> **[0:12](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=12)** And we can take a look at the raw data that we have to work with by writing a couple of select statements.
>
> **[0:17](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=17)** So we'll just select, and I'm going to select all of the columns using the asterisk wild card character.
>
> **[0:23](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=23)** And we'll just pull everything from the first table that we have, which is called Cities.
>
> **[0:27](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=27)** Type a semicolon at the end to finish that statement.
>
> **[0:30](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=30)** And I'll test my code.
>
> **[0:31](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=31)** And this shows me the eight cities that we have in the Cities table, from Kyoto down to Havana.
>
> **[0:38](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=38)** And that is all the raw data.
>
> **[0:39](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=39)** So that's the first table that we have.
>
> **[0:41](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=41)** The next table is called Activities.
>
> **[0:44](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=44)** So I will change my statement here to select everything or select star from Activities.
>
> **[0:50](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=50)** And I'll test my code.
>
> **[0:52](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=52)** And we'll see that table.
>
> **[0:55](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=55)** Okay, it looks like we have 20 different activities.
>
> **[0:58](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=58)** We have the city ID number that they occur in, the name of the activity, as well as its estimated cost, the best season to experience that activity, as well as it is completed.
>
> **[1:09](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=69)** That tells us whether we've done that activity in the past or not.
>
> **[1:12](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=72)** So that is all the raw data that we have to work with.
>
> **[1:15](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=75)** Now for this challenge, we were asked to select a couple of these columns and combine those two tables together.
>
> **[1:22](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=82)** So let's get started.
>
> **[1:24](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=84)** We're going to select just a few columns.
>
> **[1:26](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=86)** So I'll say select.
>
> **[1:28](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=88)** From the Cities table, I want it to be CityName.
>
> **[1:33](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=93)** I'll type a comma.
>
> **[1:34](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=94)** In fact, I'm going to move this semicolon down just to get it out of the way.
>
> **[1:36](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=96)** Okay.
>
> **[1:37](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=97)** Select Cities.CityName,.
>
> **[1:39](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=99)** Make sure you have a comma after the end of that.
>
> **[1:41](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=101)** Also from the Cities table, we're going to grab the Country column.
>
> **[1:46](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=106)** And then from the Activities table, we're going to grab three columns.
>
> **[1:52](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=112)** So Activities.ActivityName,.
>
> **[1:58](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=118)** Then, we're going to grab Activities and the EstimatedCost column from that table.
>
> **[2:07](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=127)** And finally, we're going to also get the BestSeason column from the Activities table.
>
> **[2:16](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=136)** Okay, since this is the last column that I'm selecting, I don't need a comma at the end of that.
>
> **[2:19](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=139)** We can move on to our from clause, and this is where we'll specify the tables that this information is coming from.
>
> **[2:25](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=145)** So we're going to get this from the Cities table.
>
> **[2:28](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=148)** And I need to do an inner join to combine that information with the Activities table.
>
> **[2:37](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=157)** Now when we're joining tables together, we need to specify the column that they're linked on, and we do that with the on keyword.
>
> **[2:44](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=164)** And these two tables are linked by the CityID column in both tables.
>
> **[2:49](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=169)** So we can say on Cities.CityID = Activities.CityID.
>
> **[3:00](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=180)** Now, I can try running this query right now.
>
> **[3:03](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=183)** And we get a output, so that's good.
>
> **[3:05](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=185)** It is not a correct output for the challenge 'cause we're not quite done yet.
>
> **[3:08](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=188)** But we are getting all of the cities and activities combined together into a single output.
>
> **[3:13](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=193)** So we have our city name, our country, the activity name, and then the estimated cost and best season columns.
>
> **[3:19](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=199)** So those are all coming out of the two tables.
>
> **[3:21](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=201)** And they're correctly joined together based on that CityID field.
>
> **[3:26](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=206)** And so the final part of the challenge is to just find the activities that are best experienced in the Spring.
>
> **[3:32](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=212)** To filter out these rows, we use a where clause.
>
> **[3:35](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=215)** So we can say where the Activities.BestSeason is equal to.
>
> **[3:43](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=223)** And since we're matching to specific texts, I need this in single quotation marks.
>
> **[3:48](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=228)** And 'Spring.'
>
> **[3:50](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=230)** And make sure you capitalize Spring.
>
> **[3:51](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=231)** It's not going to work if you lowercase that.
>
> **[3:53](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=233)** And that finishes our statements.
>
> **[3:54](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=234)** Let me move the semicolon up.
>
> **[3:57](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=237)** We'll test the code.
>
> **[3:58](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=238)** And there we go.
>
> **[3:59](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=239)** We have a correct output.
>
> **[4:00](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=240)** It shows me the four different cities, the countries, the four activities that are all best experienced in the springtime, as well as their estimated cost.
>
> **[4:10](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=250)** So that is my solution to the challenge.
>
> **[4:13](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=253)** And it shows us those four activities, so there we go.
>
> **[4:17](https://www.linkedin.com/learning/relational-databases-essential-training/solution-query-data-in-a-database-24761255?u=76281980&t=257)** The different clauses of the select query work together to collect the information from across the two related tables, and it filters the data to this final result.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), next (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is called (2)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Create a database view
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=1)** - [Instructor] Sequel select statements provide a very powerful way to interact with the data that's stored in a relational database, but they can get a little bit long when you're joining multiple tables together or have complex filtrating requirements specified in a where clause.
>
> **[0:13](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=13)** Luckily relational database management systems allow you to save a query as something called a view.
>
> **[0:19](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=19)** This query here at the top of the screen is the one that we finished the last movie with, and it pulls the product's name and price from the products table and matches it to the supplier name and phone number from the supplier's table.
>
> **[0:30](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=30)** These are the results that returned from this query.
>
> **[0:33](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=33)** Now let's suppose this detailed look at the product information is something that you need to access regularly.
>
> **[0:37](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=37)** Rather than type out the select query every time, you can save it as a virtual table object in the database.
>
> **[0:43](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=43)** To do that, place your cursor at the beginning of line number one, and then press enter to move it down a line.
>
> **[0:49](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=49)** Then, at the top, type create view, the name of the view that you want to create, I'm going to create one called product details, and then the key word as, and that's all you need to do.
>
> **[1:02](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=62)** This will have the database store the select statement as its own object that you can then reference, just like any other table in the database.
>
> **[1:09](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=69)** I'll press the run button and the view is created.
>
> **[1:13](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=73)** This time we weren't asking for any information from the database, so you're not going to see a table in the results, but if you go back over here to the server connections window and collect the product table and the supplier's table, and take a look inside of the views folder for the database, we'll see the new view that we just created right here.
>
> **[1:27](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=87)** You can even expand the views columns folder to see that it's made up of the four columns that were originally specified in the query.
>
> **[1:34](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=94)** Now let's see how to use it.
>
> **[1:36](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=96)** You can right select queries against the view just like you would a table.
>
> **[1:39](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=99)** Let's highlight all of this text and get rid of it.
>
> **[1:40](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=100)** Then I'll type in select star, from, then instead of specifying that I'm going to pull information from the tables, I'm going to pull all the information from the view.
>
> **[1:51](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=111)** So select star from product details.
>
> **[1:56](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=116)** You don't need to refer to the original data tables and you don't need to construct a join of the foreign and primary keys.
>
> **[2:01](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=121)** I'll press the run button and we'll see the exact same results that we got from the original query.
>
> **[2:05](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=125)** You can even filter the view just like you would a table.
>
> **[2:08](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=128)** To do that, I'll come down here to the next line and I'll use a where clause.
>
> **[2:12](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=132)** In this case I just wanted to see the products where the supplier was Two Trees.
>
> **[2:20](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=140)** I'll press the run button and we'll see a filtered list of records coming out of that view.
>
> **[2:24](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=144)** The best part about a view is that they don't actually store any data on their own.
>
> **[2:28](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=148)** They're merely redirecting your query back to the original data tables, so you don't need to worry about keeping the view in sync with the data or having duplicate records stored in the database.
>
> **[2:37](https://www.linkedin.com/learning/relational-databases-essential-training/create-a-database-view?u=76281980&t=157)** So if you find yourself writing these same, complex select queries over and over again, consider saving them as a view instead.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (8), data (5), product (5), [[Microsoft Products|Products]] (2), management (1)
> **Analogies:** just like (3)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 7. Beyond the Relational Model

[↑ Back to Table of Contents](#table-of-contents)

#### Graph databases
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/graph-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/graph-databases?u=76281980&t=1)** - [Instructor] Before we wrap up this course, I thought we could take a moment to introduce two additional models for storing data that take a different approach than the relational model.
>
> **[0:09](https://www.linkedin.com/learning/relational-databases-essential-training/graph-databases?u=76281980&t=9)** Depending on the kind of information that you need to store, one of these might actually be a better fit, and it's worth exploring all of your options before committing to a direction.
>
> **[0:17](https://www.linkedin.com/learning/relational-databases-essential-training/graph-databases?u=76281980&t=17)** The first one that I want to look at is called a graph database.
>
> **[0:20](https://www.linkedin.com/learning/relational-databases-essential-training/graph-databases?u=76281980&t=20)** Graph databases store information as either objects called nodes or relationships called edges.
>
> **[0:26](https://www.linkedin.com/learning/relational-databases-essential-training/graph-databases?u=76281980&t=26)** Unlike a relational database where a single relationship defines all of the objects between two tables, in a graph database each object or node can have a network of different relationships to any other object.
>
> **[0:38](https://www.linkedin.com/learning/relational-databases-essential-training/graph-databases?u=76281980&t=38)** And nodes can represent different kinds of information, which makes a graph database extremely flexible.
>
> **[0:43](https://www.linkedin.com/learning/relational-databases-essential-training/graph-databases?u=76281980&t=43)** The most common example of a graph database would be used to model a social network, but they can be used for tracking the purchase histories of people or data collected from mobile devices.
>
> **[0:52](https://www.linkedin.com/learning/relational-databases-essential-training/graph-databases?u=76281980&t=52)** Here's an example of the way graph databases are usually visualized.
>
> **[0:56](https://www.linkedin.com/learning/relational-databases-essential-training/graph-databases?u=76281980&t=56)** In this network we have a number of people and maybe some documents.
>
> **[1:00](https://www.linkedin.com/learning/relational-databases-essential-training/graph-databases?u=76281980&t=60)** And we also have lots of connection details about how every node is related to other nodes.
>
> **[1:05](https://www.linkedin.com/learning/relational-databases-essential-training/graph-databases?u=76281980&t=65)** You can bounce around in the network and find interesting paths between nodes that don't share a direct connection by passing through other nodes in second or third degree relationships.
>
> **[1:14](https://www.linkedin.com/learning/relational-databases-essential-training/graph-databases?u=76281980&t=74)** In addition to the relationships, each node can have associated properties, such as the age, job title and employer of each person.
>
> **[1:21](https://www.linkedin.com/learning/relational-databases-essential-training/graph-databases?u=76281980&t=81)** Or the title and author of the book represented by the node on the left.
>
> **[1:26](https://www.linkedin.com/learning/relational-databases-essential-training/graph-databases?u=76281980&t=86)** There's a lot of detail here.
>
> **[1:27](https://www.linkedin.com/learning/relational-databases-essential-training/graph-databases?u=76281980&t=87)** Even in this simple diagram.
>
> **[1:29](https://www.linkedin.com/learning/relational-databases-essential-training/graph-databases?u=76281980&t=89)** Which is what makes graph databases so useful in creating data models where the relationships between objects provide the primary source of information and value.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (5), node (4), data (3), [[Databases]] (3)
> **CLI Commands:** node (4), find (1)
> **Definitions:** is called (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Document databases
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/document-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/document-databases?u=76281980&t=1)** - [Instructor] The other database model that you should be aware of is called a document database, or a document store.
>
> **[0:06](https://www.linkedin.com/learning/relational-databases-essential-training/document-databases?u=76281980&t=6)** Document databases store individual files that contain information about a single object.
>
> **[0:11](https://www.linkedin.com/learning/relational-databases-essential-training/document-databases?u=76281980&t=11)** These can be XML data files or JSON data files or PDF files or Word documents, or the database can store a mixture of file types.
>
> **[0:20](https://www.linkedin.com/learning/relational-databases-essential-training/document-databases?u=76281980&t=20)** The documents can be read and categorized by the system, put into collections, or have attribute tags attached to them.
>
> **[0:26](https://www.linkedin.com/learning/relational-databases-essential-training/document-databases?u=76281980&t=26)** And unlike a relational database, all of the information about a single object is stored in the single document.
>
> **[0:32](https://www.linkedin.com/learning/relational-databases-essential-training/document-databases?u=76281980&t=32)** It's not spread out across multiple tables.
>
> **[0:34](https://www.linkedin.com/learning/relational-databases-essential-training/document-databases?u=76281980&t=34)** Since each document can contain different kinds of information about the object it represents, the organization of a document database comes entirely from the individual documents that are stored.
>
> **[0:44](https://www.linkedin.com/learning/relational-databases-essential-training/document-databases?u=76281980&t=44)** This allows you to add information to the database without first having to define the structure, like you would with building a relational database table.
>
> **[0:51](https://www.linkedin.com/learning/relational-databases-essential-training/document-databases?u=76281980&t=51)** So you can insert a document that represents a person and then a document that represents a contract and then a document that represents a picture, all in the same database, without any pre-configuration.
>
> **[1:01](https://www.linkedin.com/learning/relational-databases-essential-training/document-databases?u=76281980&t=61)** Together, document and graph databases make up a class of database that are collectively called NoSQL databases because they operate outside of the traditional relational model.
>
> **[1:10](https://www.linkedin.com/learning/relational-databases-essential-training/document-databases?u=76281980&t=70)** The term NoSQL is a little bit misleading, though, since some graph and document databases still use portions of the Structured Query Language syntax.
>
> **[1:18](https://www.linkedin.com/learning/relational-databases-essential-training/document-databases?u=76281980&t=78)** The term NoSQL could be more accurately understood to mean not relational.
>
> **[1:22](https://www.linkedin.com/learning/relational-databases-essential-training/document-databases?u=76281980&t=82)** But in any case, I hope that knowing a little bit more about the range of options that exist for modeling your valuable data will only help ensure that you pick the best tool for the job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (9), [[Databases]] (4), data (3), [[NoSQL]] (3), [[JSON]] (1)
> **Env Vars:** xml (1), json (1), pdf (1)
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** make (1)
> **Analogies:** picture (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/relational-databases-essential-training/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/relational-databases-essential-training/next-steps?u=76281980&t=1)** - [Adam] Now that you know how relational databases work, you should have a good foundation and be ready to move on to a specific database platform.
>
> **[0:08](https://www.linkedin.com/learning/relational-databases-essential-training/next-steps?u=76281980&t=8)** I would encourage you to do some research into the various relational database management systems that are available and pick a platform that's appropriate for your project.
>
> **[0:16](https://www.linkedin.com/learning/relational-databases-essential-training/next-steps?u=76281980&t=16)** Then find an introductory course to learn the specifics of that software.
>
> **[0:19](https://www.linkedin.com/learning/relational-databases-essential-training/next-steps?u=76281980&t=19)** If you choose to go with SQL Server, then my short course, Learn SQL Server 2019, will be a great place to start.
>
> **[0:26](https://www.linkedin.com/learning/relational-databases-essential-training/next-steps?u=76281980&t=26)** But you can find essential training courses on platforms such as MySQL and Access.
>
> **[0:30](https://www.linkedin.com/learning/relational-databases-essential-training/next-steps?u=76281980&t=30)** Another great skill that you should have in your database tool belt is a familiarity with the SQL language.
>
> **[0:35](https://www.linkedin.com/learning/relational-databases-essential-training/next-steps?u=76281980&t=35)** We touched on it a bit here in this course, but SQL is really the common thread that ties all relational database platforms together.
>
> **[0:42](https://www.linkedin.com/learning/relational-databases-essential-training/next-steps?u=76281980&t=42)** And it'll be a valuable thing to know no matter where your career takes you.
>
> **[0:46](https://www.linkedin.com/learning/relational-databases-essential-training/next-steps?u=76281980&t=46)** Bill Weinman's course, [[SQL Essential Training]], can give you a solid foundation in writing commands and queries that'll help you get the most out of your databases.
>
> **[0:54](https://www.linkedin.com/learning/relational-databases-essential-training/next-steps?u=76281980&t=54)** So until next time, I've been Adam Wilbert.
>
> **[0:56](https://www.linkedin.com/learning/relational-databases-essential-training/next-steps?u=76281980&t=56)** I'd like to thank you for joining me and I hope you have a great day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (4), [[SQL]] (3), [[Microsoft SQL Server|Sql server]] (2), [[Relational Databases]] (1), management (1)
> **Env Vars:** sql (5)
> **CLI Commands:** find (2), mysql (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [adam] (1)


## Instructor

- [[Adam Wilbert]]

## Resources

- Exercise files available

## Skills Covered

- Relational Databases

## Path Context

### In [[Introduction to Fundamental Skills for Data Work- Data Storage]]
← [[Database Design Fundamentals]] | **2 of 6** | [[Introduction to Data Warehouses]] →

## Appears In

- [[Introduction to Fundamental Skills for Data Work- Data Storage]]

---

[↑ Back to top](#)