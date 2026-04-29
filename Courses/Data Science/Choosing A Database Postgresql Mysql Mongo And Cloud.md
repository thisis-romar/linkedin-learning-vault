---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: choosing-a-database-postgresql-mysql-mongo-and-cloud
url: "https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud"
level: Intermediate
updated: 5/16/2024
learners: 45186
skills:
  - MongoDB
  - PostgreSQL
  - MySQL
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQE2oMuzWAT5sQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1616445994252?e=2147483647&amp;v=beta&amp;t=3MDeVHpprZVcNp5-hJPjYZzvOEbVq-YzgY56xvl9gR8"
linkedin_topic: Data Science
learning_paths:
  - '[[Explore a Career in SQL Development]]'
next_courses:
  - '[[SQL Essential Training]]'
path_nav: '[{"path":"Explore a Career in SQL Development","position":1,"total":8,"prev":null,"next":"SQL Essential Training"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/mongodb
  - skill/postgresql
  - skill/mysql
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Choosing%20A%20Database%20Postgresql%20Mysql%20Mongo%20And%20Cloud.md)

![Choosing A Database Postgresql Mysql Mongo And Cloud](https://media.licdn.com/dms/image/v2/C4D0DAQE2oMuzWAT5sQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1616445994252?e=2147483647&amp;v=beta&amp;t=3MDeVHpprZVcNp5-hJPjYZzvOEbVq-YzgY56xvl9gR8)

# Choosing A Database Postgresql Mysql Mongo And Cloud

> There are a lot of different databases out there with their own pros and cons. It’s important to know what your options are. In this course, instructor Amataverna Lee covers PostgreSQL, MySQL, Mongo (a NoSQL database), and several cloud-based databases, to help you choose what will be best for you. You’re likely to encounter PostgreSQL in your career, so it’s important to be familiar with this typ

> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud) | Intermediate | 45K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. PostgreSQL]]** (4 videos)
- **[[#2. MySQL]]** (3 videos)
- **[[#3. Mongo]]** (3 videos)
- **[[#4. Cloud-Based Databases]]** (6 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Choosing the right data platform
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/choosing-the-right-data-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/choosing-the-right-data-platform?u=76281980&t=0)** - [Amataverna] Data privacy, governance, analysis, and storage are important to a business in any industry.
>
> **[0:06](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/choosing-the-right-data-platform?u=76281980&t=6)** And finding an effective way to scale data infrastructure is an important part of a company's growth.
>
> **[0:11](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/choosing-the-right-data-platform?u=76281980&t=11)** Since there's not enough time to cover all of them, I've chosen to focus on Mongo, MySQL, and Postgres.
>
> **[0:18](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/choosing-the-right-data-platform?u=76281980&t=18)** I'll also provide an overview of some cloud-based options such as snowflake, AWS, and GCP.
>
> **[0:24](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/choosing-the-right-data-platform?u=76281980&t=24)** Each data platform is great in its own way.
>
> **[0:26](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/choosing-the-right-data-platform?u=76281980&t=26)** It stores the data differently which is important to understand to find one that is right for you.
>
> **[0:32](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/choosing-the-right-data-platform?u=76281980&t=32)** We'll cover querying the data and how SQL dialects can vary from data platform to data platform.
>
> **[0:37](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/choosing-the-right-data-platform?u=76281980&t=37)** And how they have their own set of unique features to choose from.
>
> **[0:41](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/choosing-the-right-data-platform?u=76281980&t=41)** We'll also look at the business reasons for picking a certain data of platform.
>
> **[0:45](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/choosing-the-right-data-platform?u=76281980&t=45)** While we focus more on data warehouses, we'll look at what these products offer as a data platform as a whole.
>
> **[0:51](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/choosing-the-right-data-platform?u=76281980&t=51)** What does their data lakes, business intelligence, and Gooey tools look like?
>
> **[0:56](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/choosing-the-right-data-platform?u=76281980&t=56)** Hi, my name is Amataverna Lee.
>
> **[0:59](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/choosing-the-right-data-platform?u=76281980&t=59)** I'm a data engineer at Hello Alfred.
>
> **[1:01](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/choosing-the-right-data-platform?u=76281980&t=61)** Responsible for maintaining our data warehouses and making the data accessible and easy to understand for everyone.
>
> **[1:07](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/choosing-the-right-data-platform?u=76281980&t=67)** In this course I'm excited to share with you some of the traditional and newer options for data platforms out there.
>
> **[1:13](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/choosing-the-right-data-platform?u=76281980&t=73)** Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** mongo (1), mysql (1), aws (1), find (1)
> **Env Vars:** aws (1), gcp (1), sql (1)
> **Code Keywords:** from. (1), let (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [amataverna] (1)

#### Comparing database options
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=0)** - [Narrator] When we're looking at data platform options we need to decide what kind of data model we want.
>
> **[0:06](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=6)** This can be separated in two different kinds.
>
> **[0:09](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=9)** Relational and non-relational data models.
>
> **[0:12](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=12)** In the industry a non-relational database is sometimes called a NoSQL database.
>
> **[0:17](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=17)** NoSQL is standing for Not only SQL.
>
> **[0:20](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=20)** Although it is called a non-relational database it does store relational data sets.
>
> **[0:25](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=25)** As data becomes more sophisticated and less structured, NoSQL databases provide more flexibility for developers to store data as they see fit.
>
> **[0:35](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=35)** There are four main types.
>
> **[0:36](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=36)** Document, key-value, wide-column, and graph databases.
>
> **[0:40](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=40)** Document and key-value are more well know.
>
> **[0:43](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=43)** In this course we'll be looking at MongoDB.
>
> **[0:45](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=45)** Which is a document database.
>
> **[0:48](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=48)** And here's an example of something we'll see later in the Mongo section.
>
> **[0:52](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=52)** This is not to discount relational databases.
>
> **[0:55](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=55)** Or also know as, SQL databases.
>
> **[0:57](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=57)** And this is a screenshot of something we'll be looking at in the Postgres section.
>
> **[1:02](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=62)** An older and still extremely popular data model, relational databases uses SQL to make accessing easy and organized.
>
> **[1:10](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=70)** Since data is stored in fixed tables in columns.
>
> **[1:13](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=73)** The fixed structure is very good for data integrity.
>
> **[1:16](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=76)** Although it leaves less flexibility for scaling horizontally.
>
> **[1:19](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=79)** We'll talk more about relational database specific assets.
>
> **[1:23](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=83)** Such as different transactions, (inaudible), and indexing.
>
> **[1:26](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=86)** Both come with it's own pros and cons.
>
> **[1:29](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=89)** We'll be reviewing some of the most well known vendors of the relational and non-relational database.
>
> **[1:34](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/comparing-database-options?u=76281980&t=94)** And how to find the best fit for you.

> [!info]- Semantic Content
>
> **CLI Commands:** mongo (1), make (1), find (1)
> **Env Vars:** sql (3)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### Setting up the environment
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=0)** - [Instructor] So now I'm going to show you how you can set up an environment to follow along and write SQL queries in.
>
> **[0:06](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=6)** So there are a couple of different applications you can use for this.
>
> **[0:10](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=10)** If you just search, you know, different IDEs, you'll come up with a lot of different options.
>
> **[0:16](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=16)** Most of them are free, too.
>
> **[0:17](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=17)** Or at least come with a free trial.
>
> **[0:19](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=19)** So this one I'm using here, this is the one you'll see throughout the course.
>
> **[0:23](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=23)** And this is the one that I like to use at work.
>
> **[0:25](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=25)** This is called DataGrip.
>
> **[0:27](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=27)** You can download this for free from their website and we can create a new connection like this.
>
> **[0:33](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=33)** So you can either click here and do a new data source.
>
> **[0:38](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=38)** And you can see there a lot of different data sources.
>
> **[0:41](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=41)** We really only cover very few things in this course.
>
> **[0:46](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=46)** But let's go ahead and click Postgres just because that's the next thing we're going to do in this course.
>
> **[0:51](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=51)** And it automatically sets up Postgres to the local hosts.
>
> **[0:56](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=56)** Meaning that all the data, everything, is connected to my computer.
>
> **[1:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=60)** We're not connected to an external database.
>
> **[1:03](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=63)** So, if you do this professionally, you'll always connect to your company's database, whether it's through like a URL, for example.
>
> **[1:11](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=71)** You'll connect to that host.
>
> **[1:14](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=74)** In Mongo I also created a database URL, but for Postgres, I just did it on my computer.
>
> **[1:21](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=81)** So I'm going to go ahead and put in my username and password.
>
> **[1:30](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=90)** You can see it automatically connected.
>
> **[1:31](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=91)** So I had created this authentication earlier.
>
> **[1:34](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=94)** You can do that as well.
>
> **[1:36](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=96)** And once everything looks good, you can just click "Okay".
>
> **[1:41](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=101)** So you can see that it added a new data source.
>
> **[1:43](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=103)** And the coolest thing about using something like DataGrip is you can work in different files at the same time.
>
> **[1:50](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=110)** So I can work on Mongo and Redshift and Postgres all at once in this application.
>
> **[1:57](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=117)** So we're going to go ahead and open our Postgres database.
>
> **[1:59](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=119)** And this is completely new.
>
> **[2:01](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=121)** What it has in here is just everything that Postgres comes with.
>
> **[2:06](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=126)** This is actually from the course earlier that I had already built.
>
> **[2:10](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=130)** So here, we're going to go ahead and create a new schema.
>
> **[2:13](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=133)** So we'll just write "create schema" and we'll call it "new Postgres connection".
>
> **[2:22](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=142)** So we're going to go ahead and run that.
>
> **[2:25](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=145)** And you can see it automatically created a schema here.
>
> **[2:28](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=148)** We try to open it.
>
> **[2:29](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=149)** There's nothing inside it so we can create tables in it.
>
> **[2:32](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=152)** We can create views, you know, all sorts of fun things in there.
>
> **[2:36](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=156)** Which we're going to do later on in this course.
>
> **[2:38](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/setting-up-the-environment?u=76281980&t=158)** So that's how you can create a connection on your computer and write in SQL as well.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), let (1), new. (1)
> **Env Vars:** sql (2), url (2)
> **CLI Commands:** mongo (2)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. PostgreSQL

> [[#Table of Contents|↑ Back to Table of Contents]]

#### PostgreSQL explore
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-explore-21050360?u=76281980)

#### PostgreSQL commands
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=0)** - [Instructor] Let's review some of the fundamentals of using Postgres.
>
> **[0:03](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=3)** If you're familiar with SQL in general most of this will be similar information but we will note some differences in the syntax of Postgres.
>
> **[0:12](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=12)** Postgres offers other commands in the query that are useful to know.
>
> **[0:16](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=16)** We're going to go through them fairly quickly.
>
> **[0:19](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=19)** First, we're going to look at the fetch statement.
>
> **[0:22](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=22)** The fetch is similar to a limit clause, which in my experience is used more often, but limit is actually not considered SQL standard so Postgres allows both.
>
> **[0:32](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=32)** So we're going to do something.
>
> **[0:38](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=38)** So this is how we would do the limit statement.
>
> **[0:42](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=42)** If we run this, we'll see we pulled from our customer's table and there are 10 rows.
>
> **[0:53](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=53)** Now we're going to write the same thing using fetch.
>
> **[1:04](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=64)** We also need to learn how to spell select.
>
> **[1:10](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=70)** We get the exact same results, the first 10 rows of customers.
>
> **[1:16](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=76)** Cool.
>
> **[1:18](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=78)** Next we're going to look at intersect.
>
> **[1:23](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=83)** So intersect returns data that is only available in both result sets.
>
> **[1:27](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=87)** It's similar to an inner join.
>
> **[1:29](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=89)** So let's look at how you would do the same dataset with an inner join.
>
> **[1:35](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=95)** So we do a select distinct of let's just look at customer's ID and we're going to do an inner join.
>
> **[1:44](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=104)** The inner is implied when you just write, join.
>
> **[1:51](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=111)** Okay, we write that.
>
> **[1:53](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=113)** We see we got 15 rows and these are all the customers in the orders table and in the customer's table.
>
> **[2:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=120)** Now let's do this using intersect.
>
> **[2:04](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=124)** So same thing.
>
> **[2:06](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=126)** And the key to note is that we're not putting the distinct in front of the ID here.
>
> **[2:12](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=132)** And that's because we don't need to.
>
> **[2:14](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=134)** The intersect will basically do the distinct for us.
>
> **[2:18](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=138)** It's only counting where the customer ID occurs once.
>
> **[2:27](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=147)** So we check that out.
>
> **[2:29](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=149)** We get the same 15 rows of the same customer IDs.
>
> **[2:32](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=152)** So these two queries give you the exact same results.
>
> **[2:36](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=156)** Now we're going to look at a full outer, which not every database offers.
>
> **[2:41](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=161)** So a full outer join pulls all the data from both tables regardless of whether or not they're joined together.
>
> **[2:49](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=169)** What that means is even though we're joining on we're going to use the same example from up here, customers and orders, who are joining on the customer ID even if they're customers with no orders or there are orders but no customers we're going to see both in our results set.
>
> **[3:03](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=183)** So we're going to do a select star from our customers and we're going to do a full outer join.
>
> **[3:17](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=197)** We need to put our (indistinct).
>
> **[3:22](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=202)** Great.
>
> **[3:23](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=203)** So this is from the customer's table and then we have the order table here.
>
> **[3:29](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=209)** So we can see here where the order ID is null, those are customers with no orders.
>
> **[3:37](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=217)** You can see here where we have orders but there are no customers.
>
> **[3:40](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=220)** That's where we're seeing where the customer table is null where we have orders and a full outer join will bring all the data together regardless of whether or not it conjoined everything.
>
> **[3:53](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=233)** Next we're going to look at checking constraints.
>
> **[3:56](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=236)** So let's create a fake table and we're going to call this table Christmas products.
>
> **[4:09](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=249)** We're going to put an ID for the product ID, call it a text.
>
> **[4:14](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=254)** We're going to say it can't be null.
>
> **[4:17](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=257)** We're going to have a price in there.
>
> **[4:20](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=260)** It's going to be an energy integer, also not nul but we're going to add another constraint on top of the not nul which is we need to check that the price is greater than zero..
>
> **[4:30](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=270)** So effectively it has to be a real price.
>
> **[4:34](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=274)** And we're going to add Christmas and we're going to make that Boolean to check that it is a Christmas special product.
>
> **[4:45](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=285)** Cool, so let's create our table.
>
> **[4:50](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=290)** And now we're going to check if this price constraint works.
>
> **[4:54](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=294)** So we're going to try to insert some values into this table.
>
> **[4:58](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=298)** Insert values into Christmas products to see if constraint works.
>
> **[5:04](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=304)** Cool.
>
> **[5:05](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=305)** So let's do insert into Christmas products.
>
> **[5:11](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=311)** We want to put the values of the ID.
>
> **[5:15](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=315)** We give it, A-B-C, price.
>
> **[5:18](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=318)** You can see that's able to connect that we're filling in this table.
>
> **[5:22](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=322)** So it's like highlighting it.
>
> **[5:24](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=324)** It's put $23 and yes.
>
> **[5:29](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=329)** All right, let's see who this inserts awesome.
>
> **[5:33](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=333)** It ran.
>
> **[5:34](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=334)** So we can check if values... So now we're going to check if the value's actually in there
>
> **[5:50](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=350)** And we can see that value is in there.
>
> **[5:52](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=352)** Awesome.
>
> **[5:54](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=354)** Now we're going to add another value in the Christmas products and we're going to do insert into Christmas products, values, and we're going to do the same thing.
>
> **[6:11](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=371)** Let's give a value of XYZ price.
>
> **[6:17](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=377)** We're going to go with negative one.
>
> **[6:20](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=380)** And yes.
>
> **[6:25](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=385)** Now you see, it immediately returned an error because it fails the Christmas products price check which we had placed over here.
>
> **[6:33](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=393)** So it won't allow us to insert this.
>
> **[6:36](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=396)** The next thing we're going to check our Booleans.
>
> **[6:37](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=397)** So you can already see we've added a Boolean up here to check if it's a Christmas product.
>
> **[6:42](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=402)** And we were able to say yes, to confirm it is in our values.
>
> **[6:47](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=407)** However, you can also, instead of saying yes or no, if you wanted to put in a different Boolean
>
> **[7:02](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=422)** you can also use true or false.
>
> **[7:04](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=424)** Some databases only take true or false.
>
> **[7:06](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=426)** You can do yes or no here.
>
> **[7:08](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=428)** Some you can do zero and one.
>
> **[7:10](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=430)** There are different ways to look at it.
>
> **[7:13](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=433)** So even though we do true, we are still able to add that in.
>
> **[7:19](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=439)** And if we look inside our Christmas products table you can see that they'll both say true even though the original one we had inserted was with a yes.
>
> **[7:31](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=451)** The last thing we're going to look at is cascade.
>
> **[7:34](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=454)** And cascade just means you are able to drop everything that is dependent on the table.
>
> **[7:39](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=459)** So if I'm dropping a table but there is a query or a function somewhere that's referencing it it will also drop that so that it doesn't create errors in the future.
>
> **[7:48](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=468)** And we're just going to do a drop table.
>
> **[7:50](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=470)** We're going to drop the Christmas products table and we just write cascade to make sure anything dependent on it will drop, which since we just built it there actually aren't that many dependencies.
>
> **[8:03](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=483)** Cool.
>
> **[8:04](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=484)** Now let's try to run this again, and the table doesn't exist and that's the end of our quick demonstration.
>
> **[8:12](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=492)** No one's checked, there are a lot of other cool little tricks you can learn.
>
> **[8:15](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/postgresql-commands?u=76281980&t=495)** You can check out the documentation on their website.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this, (1), this. (1), function (1)
> **Env Vars:** sql (2), xyz (1)
> **Analogies:** similar to (2), it's like (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### Inheritance and data types
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=0)** - [Instructor] Postgres is known for being very feature-rich and we don't have the time to go over many of the things that makes Postgres so advanced.
>
> **[0:07](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=7)** So, right now we're going to take a look at two quick examples of these features: Inheritance and Advanced Phenotypes.
>
> **[0:13](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=13)** The first is Inheritance.
>
> **[0:17](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=17)** This works the same way it does in any programming language, where you have a parent object and children objects.
>
> **[0:22](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=22)** We can inherit the parent table to create a child table.
>
> **[0:26](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=26)** It's useful if you are creating many similar tables but don't want to write out the same attributes multiple times.
>
> **[0:32](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=32)** And, we're going to do a quick example of this right now by creating a dessert table that inherits the products table, and the product is food, by the way.
>
> **[0:45](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=45)** So, let's do create table desserts.
>
> **[0:49](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=49)** And, we're going to add an extra column here to check the dessert is chocolate.
>
> **[0:54](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=54)** And, it's going to inherit the products table.
>
> **[0:58](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=58)** So, what that means is that when we look at the table, it'll have all the same columns that the products table has.
>
> **[1:06](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=66)** Awesome, So it just created.
>
> **[1:08](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=68)** So, let's check on the desserts table
>
> **[1:18](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=78)** And then, you can see there's a note that's is, check on the desserts table, cool.
>
> **[1:22](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=82)** So, this is all the same categories we have from our products table.
>
> **[1:26](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=86)** You can see up here, we didn't specifically list out every single column and if we scroll to end you can see we have chocolate at the end, which is what we did list out.
>
> **[1:38](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=98)** Now, we're going to take a look at JSON objects and I picked this one just cause we kind of go over this a lot in the Mongo sections.
>
> **[1:45](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=105)** So I figured it'd be helpful to see now.
>
> **[1:48](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=108)** So, there's a command you can do in Postgres called json_build_object, and what this does is you can pick from a table and you can put the columns into a JSON object through this.
>
> **[2:01](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=121)** So, we're going to use the products table again and so where we have the product ID, we want to insert as our first value, and we're just going to call that value ID again from product name.
>
> **[2:15](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=135)** So, that's the name and this is where we're pulling the value.
>
> **[2:18](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=138)** We're going to do the product name, and we want to call something category that pulls from the product category from products.
>
> **[2:27](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=147)** So, we take a look at this, we can see we have the product IDs, product name, the product categories, just like we specify.
>
> **[2:37](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=157)** And, this is everything inside the products table that we have here.
>
> **[2:43](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=163)** Now, how is this useful on its own?
>
> **[2:46](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=166)** Now, we're going to put the JSON object into a table, and we're going to create a table, similar like we did up with the inheritance, and we're just going to call it product_json.
>
> **[2:58](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=178)** And, we're just going to have one value called product_names and it's going to be a json.
>
> **[3:09](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=189)** So we created our table.
>
> **[3:11](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=191)** Now, we're going to insert into the product table.
>
> **[3:18](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=198)** Move that up a bit.
>
> **[3:21](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=201)** And, we're going to do select json_build_object, which is similar to what we did up there.
>
> **[3:28](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=208)** The key thing is to write the insert into.
>
> **[3:31](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=211)** Do that in the comments then after that, here.
>
> **[3:34](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=214)** And, we'll just take this exact same.
>
> **[3:44](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=224)** We forgot to specify that table.
>
> **[3:46](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=226)** That's important.
>
> **[3:49](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=229)** All right, great.
>
> **[3:50](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=230)** There we go.
>
> **[3:54](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=234)** Now, we do select * from product_json.
>
> **[3:59](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=239)** So, where it's selecting from the table and it's the exact same thing as if we had ran that query by itself, like we did in the beginning.
>
> **[4:08](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=248)** So, here we go.
>
> **[4:12](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=252)** So, that's it for this section.
>
> **[4:14](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=254)** We saw how we can create a JSON, put in a table, as well as create tables using inheritance.
>
> **[4:20](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/inheritance-and-data-types?u=76281980&t=260)** Now, in our next video, we'll be looking at not tables but creating an example of a function within Postgres.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (1), this, (1), function (1)
> **Code Identifiers:** json_build_object (2), product_json (2), product_names (1)
> **Env Vars:** json (4)
> **Analogies:** just like (1), similar to (1)
> **CLI Commands:** mongo (1)
> **Cross-References:** next video (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Features
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=0)** - [Instructor] In this video we're going to look at creating a function within Postgres.
>
> **[0:05](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=5)** Postgres offers the ability to write stored procedures in different programming languages.
>
> **[0:10](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=10)** While all databases covered can distort procedures with their own specific languages, Postgres offers the most such as pgSQL, TCL, Perl and Python, and more that is not within its main distribution.
>
> **[0:23](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=23)** This offers a lot of flexibility for developers who are more comfortable in a certain programming language and/or companies who want to use the same language everywhere to write procedures for Postgres.
>
> **[0:34](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=34)** So, because we are predominantly using SQL here we are going to use SQL to create our function.
>
> **[0:40](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=40)** So, we're going to create a really simple function and it's just going to add two numbers.
>
> **[0:49](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=49)** First thing we want to do is write create function and we're going to set our parameters.
>
> **[0:55](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=55)** So the functions name is add and we want it to take to an integer and we want it to return an integer.
>
> **[1:06](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=66)** And this is the query that's going to do it.
>
> **[1:09](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=69)** It's going to select the first parameter and it's going to add that to the second parameter.
>
> **[1:17](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=77)** We're going to specify the language.
>
> **[1:19](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=79)** So the language is SQL, it's immutable and it will return something.
>
> **[1:28](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=88)** Cool, super simple, it's only four lines.
>
> **[1:31](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=91)** Let's run this, great, our function ran and now we are going to test it and our functions called add so we write add, we see it's highlight orange, it recognizes it, and let's do one and four and let's see if it returns anything.
>
> **[1:58](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=118)** And the important thing with SQL is you always need to select to run any kind of program.
>
> **[2:08](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=128)** And we can see our output is five.
>
> **[2:12](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=132)** Let's see we can do that with some more complicated numbers.
>
> **[2:18](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=138)** Let's do negative 3.
>
> **[2:22](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=142)** and let's do five.
>
> **[2:30](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=150)** Okay, so because we did specify it's an integer we can't do numeric types and that's something to note that there are a lot of specific data types that you need to do.
>
> **[2:40](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=160)** So this can't run.
>
> **[2:42](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=162)** We can change it here, if we want, to numeric and then we can do more complex numbers, not integers.
>
> **[2:49](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=169)** Well, we'll leave it as is for now and we're going to do just a negative three, then, and five and see if that will still run.
>
> **[2:56](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=176)** And we can see, accepted and our answer is two.
>
> **[3:01](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=181)** So, there are a lot of ways you can take a function.
>
> **[3:03](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=183)** You can insert dates to run a list of queries, you can put it in strings.
>
> **[3:10](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=190)** For example, if you had a user ID you can run a user ID through a bunch of checks.
>
> **[3:14](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/features?u=76281980&t=194)** There are a lot ways you can take this and really get creative with it.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (6), super (1), this, (1)
> **Env Vars:** sql (4), tcl (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** python (1)
> **Code Identifiers:** pgsql (1)
> **UI Navigation:** select the (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 2. MySQL

> [[#Table of Contents|↑ Back to Table of Contents]]

#### MySQL explore
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-explore?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-explore?u=76281980&t=0)** - [Narrator] MySQL is a well know open source relational database.
>
> **[0:04](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-explore?u=76281980&t=4)** Built by Oracle, it's an open source product know for being a top choice for web applications since it is a standard in the LAMP stack.
>
> **[0:11](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-explore?u=76281980&t=11)** The LAMP stack is a term used for a set of open source software used for websites and other web applications.
>
> **[0:18](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-explore?u=76281980&t=18)** It includes Linux, Apache, MySQL, and PHP.
>
> **[0:22](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-explore?u=76281980&t=22)** MySQL is know for being reliable and having fast performance speeds compared to other databases.
>
> **[0:27](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-explore?u=76281980&t=27)** And of course, it's free.
>
> **[0:30](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-explore?u=76281980&t=30)** Unlike Mongo, which is a non-relational database, and Postgres, which is an object relational database.
>
> **[0:36](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-explore?u=76281980&t=36)** MySQL is purely a relational database with it's sole advantages and disadvantages.
>
> **[0:42](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-explore?u=76281980&t=42)** The key differentiator is that the object relational database stores data and objects.
>
> **[0:46](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-explore?u=76281980&t=46)** Whereas relational database stores data and entities.
>
> **[0:50](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-explore?u=76281980&t=50)** Or tables.
>
> **[0:51](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-explore?u=76281980&t=51)** Because relational databases are designed to be more simple and naturally does not have as many features as Postgres.
>
> **[0:58](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-explore?u=76281980&t=58)** Some features that Postgres has, MySQL doesn't support.
>
> **[1:01](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-explore?u=76281980&t=61)** Such as table inheritance and more advanced data types.
>
> **[1:05](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-explore?u=76281980&t=65)** We'll see some examples of this now by trying to run these commands that we've seen work in the Postgres section but won't work now.

> [!info]- Semantic Content
>
> **CLI Commands:** mysql (5), apache (1), php (1), mongo (1)
> **Definitions:** is a  (4), is an  (1)
> **Env Vars:** lamp (2), php (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### Dialect nuances in MySQL
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=0)** - [Amata] Now, we're going to review some fundamentals of using SQL.
>
> **[0:04](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=4)** We're going to look at CRUD statements which is create, read, update, and delete.
>
> **[0:10](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=10)** We are doing this in MySQL even though this is something you can do in every database.
>
> **[0:16](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=16)** Once again, MySQL was built for simplicity and speed unless you are planning to do advanced query work in your database, the loss functionality may not even be that relevant.
>
> **[0:28](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=28)** After we go over the CRUD statements, we will also go over two things that MySQL does that not all data warehouses cannot do, so Postgres can not do this thing.
>
> **[0:38](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=38)** We're going to look at the if null statement and look at case sensitive.
>
> **[0:44](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=44)** So now we're going to start by reviewing CRUD, which is create, read, update, delete.
>
> **[0:53](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=53)** And again, this is a pretty basic concept in computer science.
>
> **[0:59](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=59)** So first we're going to look at create and in order to create a SQL in MySQL, we do an insert.
>
> **[1:11](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=71)** So we have a customer's table and we're going to put in the values.
>
> **[1:17](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=77)** We're going to put in a customer ID, customer first name, we'll put it in my name, customer last name, email,
>
> **[1:29](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=89)** a phone number, an address,
>
> **[1:43](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=103)** a city, a state and a zip code.
>
> **[1:59](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=119)** Cool, and we have inserted.
>
> **[2:02](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=122)** Now, we're going to do the read statement and reading in SQL is really what select is.
>
> **[2:11](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=131)** I've briefly mentioned that in other videos, but to read from the database, we'll just do a read select in customers.
>
> **[2:20](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=140)** And we'll see we have a list of customers and here's the customer we had put in earlier.
>
> **[2:30](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=150)** Now, we're going to update this value, so we can do update customers.
>
> **[2:38](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=158)** That's the name of our table and I'm going to set the first name.
>
> **[2:43](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=163)** So let's reverse my name.
>
> **[2:53](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=173)** And we're finding where my name is by matching on the customer ID here.
>
> **[3:01](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=181)** So we run that and then we check our table again, go to ID 79, we can see that the first name is now Lee
>
> **[3:17](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=197)** and the last name is Amata.
>
> **[3:21](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=201)** And then we're going to remove this fake entry with our delete statement, which we can just say delete from customers where the ID is 79.
>
> **[3:35](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=215)** Oh, we need to rerun this.
>
> **[3:38](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=218)** Now, you can see that the ID is gone.
>
> **[3:44](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=224)** So those are some really simple database functions that you can do.
>
> **[3:48](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=228)** Now, to get more specific about MySQL.
>
> **[3:52](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=232)** We can look at case sensitivity and this really differs per language, whether it is a declarative language like SQL or programming language, they all have different rules around this.
>
> **[4:03](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=243)** So the thing is, MySQL is not case sensitive.
>
> **[4:10](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=250)** So what does that mean?
>
> **[4:12](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=252)** If you're writing something, let's say we're going to use the product table from our other videos and we're going to filter where the category is desserts.
>
> **[4:31](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=271)** We'll do a select star and I need to learn how to spell.
>
> **[4:38](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=278)** So we take a look at this output, this is all the desserts that are in this table and this is the category we're filtering on.
>
> **[4:47](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=287)** If we were to rewrite this and let's say, we lowercase this and we uppercase this part, we get the exact same results because it's not checking for case.
>
> **[5:03](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=303)** So this can or cannot be a problem depending on what you're doing with your database.
>
> **[5:08](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=308)** If it's important something is case sensitive, that's probably something you don't want to do in MySQL or you need to give it a different name.
>
> **[5:16](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=316)** You don't want to be having one thing that's capitalized and something that's not capitalized and you end up pulling the wrong data.
>
> **[5:25](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=325)** Another thing that MySQL does that not all of the different databases do is if null statements.
>
> **[5:35](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=335)** So what is an if null statement?
>
> **[5:39](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=339)** We can do a really quick example here.
>
> **[5:41](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=341)** So let's say in the customer's table if the first name is null, we want to put an error instead of null.
>
> **[5:55](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=355)** Let's run that.
>
> **[5:58](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=358)** So we have a list of first names and here these tables were previously null, now we see an error sign.
>
> **[6:05](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=365)** So this is a really simple way to write this query, it's three lines.
>
> **[6:10](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=370)** You can also do this with a case one statement and that's how most databases will do it, so we can get the same results if we do select case when first name is null then we'll give it error, else we want the actual first name
>
> **[6:33](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=393)** and we'll call the column first name.
>
> **[6:40](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=400)** And we get the same results, we have the three errors here and we have the rest of the first names.
>
> **[6:47](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=407)** So again, this is really just to highlight that there are differences when you're using a SQL dialect to another dialect.
>
> **[6:54](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=414)** And the next section, when we're looking at Mongo, we won't even be looking at SQL at all.
>
> **[6:59](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances-in-mysql?u=76281980&t=419)** So stay tuned.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), delete (4), this. (2), case. (1)
> **CLI Commands:** mysql (8), mongo (1)
> **Env Vars:** sql (6), crud (3)
> **Definitions:** is a  (3), is an  (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [amata] (1)

#### MySQL Workbench
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=0)** - [Instructor] While Postgres has pgAdmin as its own GUI tool, created by the pgAdmin development team, MySQL has the MySQL Workbench.
>
> **[0:10](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=10)** The MySQL Workbench like the MySQL database was developed by Oracle.
>
> **[0:15](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=15)** It is generally considered to be a much easier to use GUI tool than pgAdmin.
>
> **[0:20](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=20)** Both pgAdmin and MySQL only support their respective SQL dialects.
>
> **[0:25](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=25)** Unlike other tools we'll see you later on in this course, MySQL and Postgres don't support their own BI tools or business intelligence tools.
>
> **[0:34](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=34)** Newer data platforms have since realized the need for data visualization and try to accommodate more reporting needs.
>
> **[0:41](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=41)** However, since MySQL and Postgres have been around for a very long time, relatively speaking, in the database world, it really doesn't matter that they don't have their own data visualization tools.
>
> **[0:52](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=52)** There are many universal database managers such as DataGrip, Dbeaver, and JetBrains, that allow you to connect to multiple databases at once.
>
> **[1:02](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=62)** In fact, most of the query writing we've seen done in this course was done in DataGrip.
>
> **[1:07](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=67)** Additionally, most popular, if not all BI tools support MySQL and Postgres in addition to many more databases.
>
> **[1:17](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=77)** The create read, update and delete statements we reviewed in the last section we'll go over again here so you can see how you can use MySQL to make these changes without needing to write out the queries.
>
> **[1:29](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=89)** MySQL has visual modules for SQL development, data modeling and server administration.
>
> **[1:36](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=96)** However, we're only going to take a look at the SQL development part.
>
> **[1:41](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=101)** So this is a MySQL Workbench.
>
> **[1:43](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=103)** We're already connected to the same instance that we used in the last video.
>
> **[1:48](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=108)** The workbench was actually pretty easy for me to download and open.
>
> **[1:52](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=112)** And we're doing this on a Mac operating system.
>
> **[1:55](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=115)** It'll look a little different in Linux and other OS.
>
> **[1:59](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=119)** The local instance which I created for dummy data is right over here.
>
> **[2:03](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=123)** You can see, I had put it in the customer schema earlier.
>
> **[2:10](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=130)** Let me move this up so you can see all the tables.
>
> **[2:13](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=133)** So now we're going to take a look at the customers table and the way we can do that without having to write anything is we can just click on it and select all the rows.
>
> **[2:24](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=144)** And we have our result grid here and we have all the information datas in our customer table.
>
> **[2:31](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=151)** Awesome.
>
> **[2:32](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=152)** So now we want to create a new row and the way we can do that here is we can do in a couple of ways, the easiest way is to just click this button and you can just put in some data.
>
> **[2:45](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=165)** So we'll put in a fake ID, we'll put it in my name,
>
> **[2:59](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=179)** can give it a fake number.
>
> **[3:02](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=182)** We'll use the same fake number, I will put home (indistinct) address and we'll put New York.
>
> **[3:15](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=195)** Cool.
>
> **[3:16](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=196)** And if you want to write this directly into the database, you can just click apply.
>
> **[3:21](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=201)** And this is the query we would have written if we had actually written out the SQL for it but we can just click Apply and it's executed successfully and we can even check the logs, and great.
>
> **[3:38](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=218)** So we were to rerun this query.
>
> **[3:43](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=223)** We can see that we had added a new row here.
>
> **[3:46](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=226)** Cool, now we're going to do the read statement which we kind of already did, but we can, again just do this to read from the table.
>
> **[3:57](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=237)** We can do this to the other tables as well and then we can edit to filter.
>
> **[4:05](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=245)** So we want to just look at delivered.
>
> **[4:10](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=250)** We can do that, instead of writing where clauses we want to look at order 101, they'll automatically filter for you.
>
> **[4:20](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=260)** Cool, now we're going to update the row that we had put in previously.
>
> **[4:26](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=266)** So what we're going to do is we're going to do the same example I've done in an earlier video.
>
> **[4:30](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=270)** We're just going to switch the names and we can Apply and you'll see it did the update and set statement and the where statement for us.
>
> **[4:39](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=279)** We can click Apply.
>
> **[4:41](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=281)** It's executed, Close.
>
> **[4:44](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=284)** Can rerun this query to make sure.
>
> **[4:48](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=288)** Just find our name and there it is.
>
> **[4:54](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=294)** And now we can do our delete statement which we just need to click on this and click the remove row, click apply.
>
> **[5:04](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=304)** And if you don't want someone to be able to write to the database, if you were to give this to someone like less technical, you can also limit writing access to the database.
>
> **[5:12](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=312)** So you can have someone only be able to read.
>
> **[5:16](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=316)** So again, this is pretty intuitive and doesn't require writing SQL.
>
> **[5:20](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=320)** So if you're not as comfortable with MySQL or just SQL in general, this is a great GUI tool to have.
>
> **[5:26](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mysql-workbench?u=76281980&t=326)** You can do most of the basic database functions you would need in here.

> [!info]- Semantic Content
>
> **CLI Commands:** mysql (12), make (2), find (1)
> **Env Vars:** sql (6), gui (3)
> **Code Keywords:** delete (2), let (1), switch (1), require (1)
> **Code Identifiers:** pgadmin (4)
> **Cross-References:** in the last (2)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (2)
> **Analogies:** such as (1)


### 3. Mongo

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Mongo explore
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=0)** - [Instructor] Mongo DB is a NoSQL database with its own query language.
>
> **[0:05](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=5)** Again, this query language is not sequel.
>
> **[0:08](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=8)** There are many other NoSQL databases that we won't be covering such as Redis, Cassandra, Amazon, DynamoDB, and much more.
>
> **[0:18](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=18)** We are focused specifically on Mongo in this chapter because it is of the most widely used NoSQL databases.
>
> **[0:25](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=25)** Having been around for a relatively long time, compared to others, Mongo is also known for having one of the most flexible data models.
>
> **[0:33](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=33)** Within the category of NoSQL, there are different types of NoSQL databases, documented models, graph model, and key-value models.
>
> **[0:43](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=43)** Instead of using tables and columns like relational data management systems, a document model uses a document storage model, usually JSON, which stands for JavaScript object notation.
>
> **[0:55](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=55)** The structure is similar to object oriented programming which some developers may prefer.
>
> **[1:01](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=61)** MongoDB is a document model using BSON which is binary JSON, which makes it more flexible to use.
>
> **[1:10](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=70)** However, you can think of it as a JSON database since anything in JSON can be natively stored and retrieved in Mongo.
>
> **[1:17](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=77)** You can also think of documents as a superset of all data models because you can use that to later structured the data into the other models, explain next and more.
>
> **[1:27](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=87)** The graph models uses data modes, edges, properties and other data structures.
>
> **[1:32](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=92)** The advantage being it is easier to create relationships between other parts of an application.
>
> **[1:38](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=98)** And you can see here is the graph model.
>
> **[1:41](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=101)** However many graph model databases require all the data to be on one machine which allows less flexibility.
>
> **[1:49](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=109)** A key value model uses a key to update data.
>
> **[1:53](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=113)** It is the simplest structure here thus making it easiest to scale.
>
> **[1:57](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=117)** However, it may cause Cray complexity if you're trying to do complicated queries.
>
> **[2:03](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=123)** Overall compared to relational databases, the main advantage of using a NoSQL database, is that it is much easier to scale.
>
> **[2:11](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=131)** NoSQL works better in distributed systems and it is easier to maintain given that all the data structures in relational databases such as tables and views that we went through in the Postgres section, we don't need to manage here.
>
> **[2:25](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=145)** While PostgreSQL supports ACID transactions like we went over previously, most NoSQL databases don't support ACID by nature.
>
> **[2:35](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=155)** However, Mongo has achieved multi document ACID transactions in 2018 when it released a version four.
>
> **[2:42](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=162)** Mongo and other NoSQL databases can be thought of being built on the CAP theorem.
>
> **[2:49](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=169)** The CAP theorem concept is primarily for distributed database systems and CAP stands for consistency, which means you are able to keep the same information in any of the nodes.
>
> **[3:03](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=183)** Availability, anyone can quickly pull up the data or at least get a response from the system even if the data is not they're outdated and partition tolerance, if there is a failure in one of the nodes, it will create a partition between nodes but the user should still be able to access the same data from another node.
>
> **[3:24](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=204)** So CAP emphasizes data accessibility over data integrity, data accessibility, focusing on how the data is stored and accessed instead of making sure the data is correct.
>
> **[3:35](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=215)** When it's not necessarily better than the other but it is important to know what it's more important for your or your company's specific needs.
>
> **[3:43](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=223)** If the purpose of your database is to just store a lot of data coming in before knowing what to do, data availability might be more important.
>
> **[3:52](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=232)** If you're using the database to create a lot of business reports, data integrity might be your priority.
>
> **[3:59](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=239)** In this theory, a distributed system can only have two of the three CAP attributes.
>
> **[4:04](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=244)** Mongo has the consistency and the partition tolerance, you can see it here as one of the examples.
>
> **[4:11](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=251)** And what that means is that it compromises on immediate availability so that the data is always accessible in other nodes even when there a system error.
>
> **[4:20](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=260)** Mongo is well known for data consistency because it's a single master system.
>
> **[4:25](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=265)** So for example, if you wrote to the database then try to read from it, it will assume that your write was successful and you can read the results of the write regardless of not that is true.
>
> **[4:36](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-explore?u=76281980&t=276)** Next we'll cover some of Mongo's dialects syntax, it's document system, and the Mongo compass GUI tool.

> [!info]- Semantic Content
>
> **Env Vars:** cap (5), json (4), acid (3), bson (1), gui (1)
> **CLI Commands:** mongo (10), node (1)
> **Definitions:** is a  (3), stands for (2)
> **Analogies:** such as (2), similar to (1), think of it as (1), for example (1)
> **Code Keywords:** require (1)
> **Speakers:** - [instructor] (1)

#### Dialect nuances
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=0)** - [Instructor] As mentioned, MongoDB is a document oriented database.
>
> **[0:03](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=3)** It does not use a SQL because there would be no actual data types tables to join on.
>
> **[0:09](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=9)** Everything is stored in (indistinct) considered a semi-structured data type.
>
> **[0:13](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=13)** This format is probably a pro to most developers who would prefer working in something that looks more like a programming language.
>
> **[0:20](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=20)** MongoDB stores collections which in turn stores fields.
>
> **[0:25](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=25)** We can see an example of this right now.
>
> **[0:28](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=28)** So let's take a look at a collection.
>
> **[0:31](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=31)** So we're not going to create a collection.
>
> **[0:33](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=33)** Usually, I would want to go through credit statements which we will go through some of those in a bit.
>
> **[0:39](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=39)** But if we were to create a collection, we would do DB for database, create collection and let's call it customers.
>
> **[0:50](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=50)** We're going to look at our customer's table today.
>
> **[0:53](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=53)** We're not going to run this because I actually created this earlier for the later examples.
>
> **[0:58](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=58)** But if we want to see what's inside the collection, it kind of looks like a table especially in this format and a universal database manager.
>
> **[1:09](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=69)** So we can select start essentially, by doing db.customers.find everything.
>
> **[1:21](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=81)** And we can see here, we have our customer's table.
>
> **[1:25](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=85)** The, we have our fields and you can see it has the curly brackets.
>
> **[1:31](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=91)** Those are the fields.
>
> **[1:33](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=93)** And we're going to look at the key pair of values that go inside a field in a bit.
>
> **[1:38](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=98)** But this whole thing is a collection and every row is considered a document.
>
> **[1:46](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=106)** So now, let's insert a new document into the customer's collection which you can think of as inserting a row.
>
> **[2:05](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=125)** The way we do that is we're going to be pulling our customer's collection again.
>
> **[2:09](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=129)** And we'll be writing insert one.
>
> **[2:10](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=130)** And you notice that it uses camel case here.
>
> **[2:14](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=134)** So we're just going to insert one.
>
> **[2:16](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=136)** We can also do insert many if we want, and you don't actually need to line up the fields here with the different documents inside.
>
> **[2:25](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=145)** So it's unlike a table.
>
> **[2:27](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=147)** If you're going to insert a new row that has to match the data type of each column inside a table.
>
> **[2:33](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=153)** I can put the most random thing in here and it will still insert that document into the collection.
>
> **[2:39](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=159)** So just for consistency sake, we are not going to do that.
>
> **[2:43](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=163)** So let's give ourselves a random ID.
>
> **[2:45](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=165)** Here we go.
>
> **[2:49](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=169)** Name, Amata.
>
> **[3:07](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=187)** To show you what I mean, that you can have any kind of field in here, we're just going to stop here, just to also save time.
>
> **[3:15](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=195)** So let's insert this row.
>
> **[3:19](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=199)** Now, we're going to do our read statement which is also our select, which is also defined statement that you saw us do earlier.
>
> **[3:31](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=211)** So yeah, you saw me do a select all basically, but we're going to specify, and we're just going to try to find the document we just created.
>
> **[3:43](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=223)** So we can say, we're looking for first name is Amata and that's kind of like our where clause in Mongo.
>
> **[3:54](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=234)** Cool. And you can see, this is the exact document we created.
>
> **[3:58](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=238)** It was only half the columns that we actually need.
>
> **[4:02](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=242)** Great. And now, let's do an update statement and here, we're going to do the update multiple documents at once.
>
> **[4:14](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=254)** So we're looking inside our customer's collection.
>
> **[4:17](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=257)** We're going to do update many and we're going to update where the city equals Philadelphia
>
> **[4:29](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=269)** And we move at, and we need to add another field here and we're going to write the command set.
>
> **[4:39](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=279)** It's basically saying everywhere where we see the city is Philadelphia, let's set it to, the city to Miami.
>
> **[4:52](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=292)** So we ran that successfully.
>
> **[4:55](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=295)** We can go check if we were able to do that.
>
> **[5:04](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=304)** So we look inside our collection.
>
> **[5:06](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=306)** We can see all the cities are Miami except for the fake one we made.
>
> **[5:11](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=311)** Cause we didn't really put a city.
>
> **[5:15](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=315)** And I just want to show here, do we have addresses?
>
> **[5:17](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=317)** And we don't here because we had just kept going.
>
> **[5:23](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=323)** Oh, and another thing to know about Mongo is you always need a unique ID per document.
>
> **[5:28](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=328)** And we actually didn't create a unique ID.
>
> **[5:31](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=331)** It has to be with an underscore and Mongo.
>
> **[5:34](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=334)** We created an ID without an underscore so that was added as an extra field.
>
> **[5:40](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=340)** So that's another niche of Mongo to look out for.
>
> **[5:45](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=345)** And finally, let's delete something and we're just going to delete our little fake value with my name in it.
>
> **[5:56](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=356)** So again, we're calling the customers collection and it's pretty simple.
>
> **[6:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=360)** It's just remove and same filter that we used to do the fine statement earlier.
>
> **[6:06](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=366)** We're going to remove where the first name, you have to be really careful how you pick the key value pair because it has to be exact.
>
> **[6:15](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=375)** It's case sensitive.
>
> **[6:17](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=377)** I believe I capitalized.
>
> **[6:19](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=379)** Yeah. Cool.
>
> **[6:21](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=381)** Let's run that.
>
> **[6:25](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=385)** So we removed it.
>
> **[6:26](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=386)** Let's go see if the model is still there and it's gone.
>
> **[6:34](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=394)** So that's a really quick intro on just how to navigate around MongoDB.
>
> **[6:39](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/dialect-nuances?u=76281980&t=399)** In the next video, we're going to take a look, if you don't want to wing all this, there's actually a really handy tool called compass.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), delete (2), type. (1), for. (1), finally, (1)
> **CLI Commands:** mongo (4), find (2)
> **Definitions:** is a  (2)
> **Env Vars:** sql (1)
> **Cross-References:** in the next (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### Mongo tools
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/mongo-tools-21053178?u=76281980)


### 4. Cloud-Based Databases

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Snowflake
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowflake-21046906?u=76281980)

#### Snowsight by Snowflake
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=0)** - [Instructor] So, this is Snowflake.
>
> **[0:03](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=3)** We are inside our data platform right now.
>
> **[0:06](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=6)** And we're actually on Google Chrome, as you can see.
>
> **[0:09](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=9)** So, this is all done online.
>
> **[0:12](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=12)** And here, we are in our database called "Restaurant Delivery."
>
> **[0:16](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=16)** We just clicked into it.
>
> **[0:19](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=19)** And we have all our tables.
>
> **[0:20](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=20)** These are all the tables we've been using.
>
> **[0:23](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=23)** It shows you when it's created.
>
> **[0:25](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=25)** I am the system admin.
>
> **[0:26](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=26)** You can see what rows, how large it is.
>
> **[0:28](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=28)** You can leave comments here.
>
> **[0:30](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=30)** One of the great things about Snowflake is that it's very easy to share databases and queries across other Snowflake users.
>
> **[0:39](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=39)** You can create a table.
>
> **[0:40](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=40)** You can create a new table with the same metadata.
>
> **[0:43](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=43)** You can clone the table.
>
> **[0:45](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=45)** You can load more data into it, drop, transfer ownership.
>
> **[0:50](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=50)** And these are all simple, like crud updates you can do.
>
> **[0:54](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=54)** And you can see, you can do that across all the different parts of the database.
>
> **[0:58](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=58)** So we can do the same thing here with views.
>
> **[1:01](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=61)** And these are the views that are in the information schema that just automatically shows you what you have going on in the other schemas.
>
> **[1:10](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=70)** Here's a list of our schemas.
>
> **[1:11](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=71)** All our tables are stored in the public schema.
>
> **[1:15](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=75)** And I think what's really cool is we have a staging area here, so you can create a stage.
>
> **[1:21](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=81)** And a staging area for data is a place where you can effectively process or clean your data before you store it in a data warehouse.
>
> **[1:30](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=90)** And of course, Snowflake has its own staging area.
>
> **[1:33](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=93)** You can use the other popular ones such as S3 buckets, Azure, Google Cloud platform.
>
> **[1:41](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=101)** You can also clone staging areas, edit, drop, all the same things as before.
>
> **[1:47](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=107)** In the file format, you can create a new file.
>
> **[1:52](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=112)** You can actually, once you create a file format, you can upload data into here.
>
> **[1:57](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=117)** So you can upload CSVs.
>
> **[1:59](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=119)** You can see there are other different file formats it accepts.
>
> **[2:02](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=122)** You can upload it into the public schema name.
>
> **[2:07](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=127)** Oh, actually I think it'd be cool for you to see the SQL.
>
> **[2:11](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=131)** So let's call it test.
>
> **[2:14](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=134)** And you can see how exactly it's being done.
>
> **[2:23](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=143)** We have a sequence one.
>
> **[2:24](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=144)** You can create a sequence inside.
>
> **[2:26](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=146)** You can also create a data pipe, which I think is also really cool.
>
> **[2:31](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=151)** So the data pipe pipes your data from the staging area into your data warehouse.
>
> **[2:37](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=157)** And you can see your warehouses are up here.
>
> **[2:40](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=160)** So, if you have continuous data coming in, you can have it cleaned and put into your data warehouse through a data pipe.
>
> **[2:49](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=169)** Which we don't have one right now, because we don't need to do that.
>
> **[2:53](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=173)** But there is a great explanation here for it as well.
>
> **[2:58](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=178)** So I think it's very beginner and user-friendly on just setting up your own database here.
>
> **[3:03](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=183)** This took me, like a minute to like make an account and upload the data.
>
> **[3:10](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=190)** And what I was saying earlier, how it's really easy to share data here.
>
> **[3:14](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=194)** You can share the databases.
>
> **[3:15](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=195)** You can share schemas across different Snowflake users.
>
> **[3:19](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=199)** This is also really cool, the data market.
>
> **[3:22](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=202)** So this is the data marketplace.
>
> **[3:26](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=206)** And if you don't have your own data, you can pick from here.
>
> **[3:30](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=210)** They have different types of categories of data.
>
> **[3:32](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=212)** You can play with it.
>
> **[3:33](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=213)** You can use it to like explore the different offerings Snowflake has, and just get really interested in data analysis.
>
> **[3:45](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=225)** Cool.
>
> **[3:45](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=225)** So this is where we can set up a warehouse.
>
> **[3:47](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=227)** I had created one just to show how easy it is to create one.
>
> **[3:52](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=232)** It's suspended because we aren't actually using it.
>
> **[3:55](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=235)** Can resume it.
>
> **[3:59](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=239)** Now it's running again.
>
> **[4:02](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=242)** The worksheet part, this is similar to data grip which we've been using to run queries.
>
> **[4:08](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=248)** And if we run this, it'll confirm.
>
> **[4:12](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=252)** You can also do that if you want.
>
> **[4:14](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=254)** You can run the queries here.
>
> **[4:17](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=257)** You'll get the row items like before.
>
> **[4:19](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=259)** We have all our information with the different tables.
>
> **[4:25](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=265)** Nothing unusual here.
>
> **[4:28](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=268)** You have a history log, so you can see me like playing around with it.
>
> **[4:34](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=274)** But I think what's really cool is the newer UI.
>
> **[4:37](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=277)** So we go here.
>
> **[4:41](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=281)** This is the new UI.
>
> **[4:43](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=283)** And we go to worksheets here.
>
> **[4:45](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=285)** We enable worksheets.
>
> **[4:47](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=287)** So this is from what we were doing earlier.
>
> **[4:49](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=289)** We click into this and we run this.
>
> **[4:53](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=293)** You can click query.
>
> **[4:55](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=295)** It shows you a lot of information here where it give you like, you know, what information is in this particular column.
>
> **[5:02](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=302)** It says, this is 100% filled.
>
> **[5:04](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=304)** Meaning there are no null values in these.
>
> **[5:07](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=307)** It shows you how long it takes to run.
>
> **[5:11](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=311)** You can click on this chart button, which it will automatically create a chart from your data.
>
> **[5:15](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=315)** We can play around with that.
>
> **[5:18](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=318)** We can add address, city, and see how the data changes from that.
>
> **[5:25](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=325)** And you can pin tables here.
>
> **[5:27](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=327)** If you need to find a certain table to like quickly compare to your query.
>
> **[5:33](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=333)** Yeah, so I think this is pretty intuitive to use.
>
> **[5:37](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=337)** It's pretty cool.
>
> **[5:38](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=338)** The one thing I also really like is the share function.
>
> **[5:42](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=342)** So you can actually share this worksheet with other people who you give access to.
>
> **[5:49](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=349)** And you can just quickly grab a link.
>
> **[5:50](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=350)** It's like sharing a document on Google drive.
>
> **[5:53](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=353)** And, you know, literally mail that to someone.
>
> **[5:58](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=358)** We go back to the home.
>
> **[6:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=360)** We can see that there is a shared with me.
>
> **[6:02](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=362)** We can see what other people have shared with us.
>
> **[6:05](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=365)** My worksheets, you can create folders to organize.
>
> **[6:09](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=369)** You can create dashboards so you can have multiple worksheets with multiple queries on it and the different charts.
>
> **[6:15](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=375)** And you can turn it into a dashboard here.
>
> **[6:18](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=378)** You can see all your data here.
>
> **[6:20](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=380)** Again, this goes back to the marketplace.
>
> **[6:23](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=383)** And this is admin control.
>
> **[6:26](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=386)** So, I think overall, you can see how easy it is to just set up some data, play with some data, share it across different users.
>
> **[6:35](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=395)** All without, honestly, needing to know that many technical skills.
>
> **[6:39](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=399)** It's super fast.
>
> **[6:41](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=401)** And I think, again like I said before, fairly intuitive, and I think, you know it's great that you can just do it all from a browser.
>
> **[6:49](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=409)** I can be on my work laptop and pull this back up or on my personal laptop.
>
> **[6:54](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/snowsight-by-snowflake?u=76281980&t=414)** And I think that's really one of the great things about this is there's not a lot of programs you need to set up.

> [!info]- Semantic Content
>
> **Code Keywords:** public (2), let (1), this, (1), this. (1), function (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (1), similar to (1), it's like (1)
> **Prerequisites:** set up (3)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** go to (1), click on (1)
> **Env Vars:** sql (1)
> **Cross-References:** go back to (1)

#### Amazon Web Services
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-web-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-web-services?u=76281980&t=0)** - [Instructor] AWS, also known as Amazon Web Services has increased in popularity since its launch in 2006.
>
> **[0:07](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-web-services?u=76281980&t=7)** An infrastructure platform that only exists in the cloud.
>
> **[0:10](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-web-services?u=76281980&t=10)** That has a pay plan in which you pay as you go.
>
> **[0:13](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-web-services?u=76281980&t=13)** Meaning you pay for the data storage inquiries you've used and doesn't include upfront fees or long contracts.
>
> **[0:19](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-web-services?u=76281980&t=19)** While many other platforms have similar pay plans, AWS probably offers the most in terms of resources, making it highly scalable and elastic.
>
> **[0:28](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-web-services?u=76281980&t=28)** AWS has many services including many data warehouse options and applications STEM make it flexible.
>
> **[0:34](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-web-services?u=76281980&t=34)** Therefore, if you are considering moving your data to AWS you can likely use the same programming and SQL languages you already use.
>
> **[0:42](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-web-services?u=76281980&t=42)** Being cloud-based allows you to quickly get set up with AWS and start the point on hundreds of servers.
>
> **[0:49](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-web-services?u=76281980&t=49)** While AWS could probably cover a whole course, I'm only going to focus on two popular services, Redshift and S3.
>
> **[0:57](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-web-services?u=76281980&t=57)** Claiming to be the fastest and most popular cloud database.
>
> **[1:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-web-services?u=76281980&t=60)** Redshift got its name by implying it's a shift from Oracle, who is informally known as Big Red.
>
> **[1:07](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-web-services?u=76281980&t=67)** Unlike the other Amazon's hosted database Amazon RDS, Redshift is designed to handle analytic workloads on petabytes of data.
>
> **[1:15](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-web-services?u=76281980&t=75)** A level up from terabytes which is commonly used to talk about big data.
>
> **[1:19](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-web-services?u=76281980&t=79)** You can create the data warehouse on nodes which they call clusters that are easily manageable online through the command line or programmatically.
>
> **[1:27](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-web-services?u=76281980&t=87)** It's most important use case is where business analytics such as fast query performance on your BI tools and operational analytics where you can see how your other data warehouses and applications are performing.
>
> **[1:40](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-web-services?u=76281980&t=100)** Amazon S3 stands for Amazon Simple Storage Service and it's really just a place for a developer to store and protect the data.
>
> **[1:48](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-web-services?u=76281980&t=108)** Known for its durability, it's easily accessible online and has many access controls for connecting the data to other data platforms.
>
> **[1:56](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-web-services?u=76281980&t=116)** It allows you to collect, store and analyze data from anywhere.
>
> **[2:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-web-services?u=76281980&t=120)** Now we'll take a look at how we uploaded our data to Redshift and its capabilities on AWS by creating our first cluster together.

> [!info]- Semantic Content
>
> **Env Vars:** aws (7), stem (1), sql (1), rds (1)
> **CLI Commands:** aws (7), make (1)
> **Definitions:** known as (2), stands for (1)
> **Tools:** command line (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Amazon Redshift and S3
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=0)** - [Instructor] So what we see here is this is Amazon Redshift.
>
> **[0:03](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=3)** We can see this is all in the web browser.
>
> **[0:07](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=7)** And to create a cluster, we're just going to click this, create cluster.
>
> **[0:12](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=12)** You should give it a better name than me.
>
> **[0:14](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=14)** We're going to use it in a free trial.
>
> **[0:17](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=17)** This is all set up.
>
> **[0:19](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=19)** You can put anything you want here.
>
> **[0:21](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=21)** I'm going to use a user name password that I use often.
>
> **[0:27](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=27)** Permissions, this is super important.
>
> **[0:29](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=29)** In order to be able to connect Redshift to our data in S3 we need to allow Redshift access for S3.
>
> **[0:38](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=38)** And this is a role that I created earlier.
>
> **[0:40](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=40)** So we're going to add this role.
>
> **[0:43](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=43)** Nice.
>
> **[0:45](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=45)** This is all good.
>
> **[0:46](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=46)** And boom, we created our cluster that quickly.
>
> **[0:51](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=51)** So while this is happening, it only takes less than a minute to do.
>
> **[0:56](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=56)** And sometimes you need to refresh this page to see it.
>
> **[0:59](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=59)** But while this is happening, we're going to take a quick look at the S3 console.
>
> **[1:04](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=64)** So this is the S3 page.
>
> **[1:06](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=66)** And here you can see the different buckets.
>
> **[1:10](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=70)** And I have one called LinkedIn restaurant delivery which is just the data I have from LinkedIn and in it, the different objects are the CSV files that I have gotten to upload the data, and that's the data you've been seeing throughout this course.
>
> **[1:25](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=85)** So it's pretty easy here to upload data.
>
> **[1:28](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=88)** You can click the upload button, you can just drag in a file, you can add a folder and immediately go into this bucket.
>
> **[1:41](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=101)** So because the cluster we just created is taking a while to create, we're just going to use this one that I had created earlier.
>
> **[1:49](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=109)** And we can click into this.
>
> **[1:50](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=110)** We can see it was created same day, the end point.
>
> **[1:55](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=115)** If you want to connect it inside a different ID, you can.
>
> **[2:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=120)** It has like career information here, but we haven't done anything yet 'cause this is brand new.
>
> **[2:05](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=125)** We'll go to the query editor.
>
> **[2:07](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=127)** We're going to go here.
>
> **[2:09](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=129)** And we can see there are no tables here 'cause we haven't created any.
>
> **[2:13](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=133)** So now we're going to create our table.
>
> **[2:16](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=136)** And I had just copied this earlier.
>
> **[2:19](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=139)** This is just the table that we've been using a lot, the customer's table.
>
> **[2:23](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=143)** So we'll run that.
>
> **[2:26](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=146)** And we can see the time it takes.
>
> **[2:29](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=149)** I will say this does move slower than the other databases we have been using but that's okay.
>
> **[2:36](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=156)** Cool, we have our customer's table.
>
> **[2:38](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=158)** And now to, so we're going to add data from S3.
>
> **[2:47](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=167)** So we see from before we had our S3 data here and we're able to access this through the permissions we have.
>
> **[2:55](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=175)** So this is the role I created and it allows Redshift clusters to call AW Services which is the S3 in our case.
>
> **[3:02](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=182)** So we're going to copy into this table from
>
> **[3:11](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=191)** and we're going to grab the name of our customer's file here.
>
> **[3:14](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=194)** So this is our customer's file.
>
> **[3:16](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=196)** We click on that.
>
> **[3:17](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=197)** We have our S3 URL and the permissions are set so that only anyone within this account can use it.
>
> **[3:26](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=206)** We're going to put that in.
>
> **[3:28](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=208)** And you need to give the permissions, like I said, AWS is pretty secure.
>
> **[3:33](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=213)** So we need to look at the specific role.
>
> **[3:37](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=217)** This role that I created that does allow us to edit in Redshift.
>
> **[3:41](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=221)** So we're going to copy this role.
>
> **[3:46](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=226)** I'm going to put that in here.
>
> **[3:49](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=229)** And we're looking at a delimiter because it is a CSV, a comma separated value file of comma.
>
> **[3:57](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=237)** And we're going to add in all our data from there.
>
> **[4:02](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=242)** I'm just going to run that.
>
> **[4:05](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=245)** It does take some time because it is going to another place to grab the data.
>
> **[4:13](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=253)** While there's no execution play here but it does provide an easy explain value.
>
> **[4:18](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=258)** No visualizations 'cause all we did was populate data.
>
> **[4:22](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=262)** Alright, if we want to see this now, so let's check in our data.
>
> **[4:26](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=266)** (keyboard clicking) The SQL is pretty standard here.
>
> **[4:36](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=276)** So we can just do that.
>
> **[4:39](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=279)** And we do need a scheme of qualify here.
>
> **[4:48](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=288)** So I need to highlight this because we're doing everything in one console and we shouldn't be doing that.
>
> **[4:58](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=298)** Cool, and there you have it, we have all the data copied over from our S3 bucket.
>
> **[5:05](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=305)** And we can try to visualize this data but there's nothing to visualize because it's just a customer's list.
>
> **[5:12](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=312)** We can see our history here of what we had ran.
>
> **[5:19](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=319)** You can schedule this query.
>
> **[5:25](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=325)** So we don't actually have a role because I didn't plan on doing that but you can create one, you can schedule it on a Cron job or as another format.
>
> **[5:38](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=338)** And yeah, that's how we're able to access Redshift.
>
> **[5:41](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=341)** And here you can check out your cluster analysis, the node that we created earlier, it's now available.
>
> **[5:49](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=349)** You can see the different queries we used if you save a query in here.
>
> **[5:53](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=353)** So we can save this to use again later.
>
> **[6:04](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=364)** I can give it a name, uploading customers.
>
> **[6:09](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=369)** And this is just everything that we have in here.
>
> **[6:12](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=372)** And then we can say, uploading data from S3 and we can save that.
>
> **[6:17](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=377)** Yeah, and that's one way we can manipulate things around Redshift.
>
> **[6:21](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=381)** You can do a lot more in the editor here.
>
> **[6:25](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=385)** We can check the number of events that has happened.
>
> **[6:28](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=388)** It does take a snapshot of the database at a certain time, I think right now I have it doing it once an hour.
>
> **[6:35](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=395)** And yeah, you can have alarm set, if anything looks weird, you can use CloudWatch for that.
>
> **[6:41](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=401)** So yeah, overall like a really nice console to have and to use online.
>
> **[6:45](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/amazon-redshift-and-s3?u=76281980&t=405)** And what this does is even though we only looked at Redshift, you can use S3 to connect to any of the other databases here and you can really play around and see what you can do with the analytics.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), super (1), this. (1), new. (1), case. (1)
> **Env Vars:** csv (2), url (1), aws (1), sql (1)
> **CLI Commands:** aws (1), node (1)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (keyboard clicking) (1)

#### Google Cloud Platform
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/google-cloud-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/google-cloud-platform?u=76281980&t=0)** - [Instructor] Google Cloud Platform, or GCP, is similar to Amazon Web Services in that it's a dominant suite of cloud computing services with over 100 products.
>
> **[0:09](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/google-cloud-platform?u=76281980&t=9)** The third major player, Microsoft Azure, we won't be covering in this course, although it was referenced a few times.
>
> **[0:16](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/google-cloud-platform?u=76281980&t=16)** GCP is the youngest out of these three and considered pricier, but obviously with the Google brand name and reputation for modern innovation, it's still a strong competitor compared to the other two.
>
> **[0:29](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/google-cloud-platform?u=76281980&t=29)** We'll be looking specifically at Google BigQuery which uses ANSI SQL.
>
> **[0:34](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/google-cloud-platform?u=76281980&t=34)** If you recall from the first video, ANSI stands for the American National Standards Institute, which sets the SQL standard.
>
> **[0:41](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/google-cloud-platform?u=76281980&t=41)** They also have Cloud SQL, which provides services from MySQL, Postgres, and other relational databases we have gone over.
>
> **[0:49](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/google-cloud-platform?u=76281980&t=49)** BigQuery argues that it ultimately has a lower three-year total cost of ownership compared to the other platforms mentioned, AWS and Snowflake.
>
> **[0:58](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/google-cloud-platform?u=76281980&t=58)** Its key features include BigQuery Machine Learning, BigQuery Geographic Information Systems, BigQuery Business Intelligence Engine, and Connected Sheets.
>
> **[1:07](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/google-cloud-platform?u=76281980&t=67)** All these features help connect BigQuery to other platforms and analytic tools to maximize its offerings.
>
> **[1:13](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/google-cloud-platform?u=76281980&t=73)** One of the analytics tools we'll see is Data Studio, which we can easily analyze data from BigQuery and Google Sheets.
>
> **[1:20](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/google-cloud-platform?u=76281980&t=80)** So, those who are unfamiliar with SQL can still benefit from this.

> [!info]- Semantic Content
>
> **Env Vars:** sql (4), gcp (2), ansi (2), aws (1)
> **CLI Commands:** mysql (1), aws (1)
> **Code Keywords:** this. (1)
> **Definitions:** stands for (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Microsoft Azure
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/microsoft-azure?u=76281980)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Recap
> [LinkedIn Learning](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/recap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/recap?u=76281980&t=0)** - [Instructor] This concludes our course on choosing a data platform.
>
> **[0:04](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/recap?u=76281980&t=4)** We've talked about some of the factors that go into selecting one, such as price, usability, storage, and database design.
>
> **[0:13](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/recap?u=76281980&t=13)** We've talked about what it would take to actually use the database, specifically what its SQL dialect would entail and the different features that are included.
>
> **[0:22](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/recap?u=76281980&t=22)** And finally, we looked at some examples of different databases, some which have been standard for a while, such as Postgres and Mongo, and some which are newer, such as Snowflake.
>
> **[0:33](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/recap?u=76281980&t=33)** There is no one database as the best option.
>
> **[0:36](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/recap?u=76281980&t=36)** It really depends on what is important to you as a developer.
>
> **[0:39](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/recap?u=76281980&t=39)** Is it accessibility, query performance, data integrity, certain data storage?
>
> **[0:46](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/recap?u=76281980&t=46)** As a developer, a data platform is likely not the top priority.
>
> **[0:50](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/recap?u=76281980&t=50)** But this course aims to prove that even developers need to take their data platform into serious consideration.
>
> **[0:57](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/recap?u=76281980&t=57)** Data is the future and something every company out there is striving for more of.
>
> **[1:02](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/recap?u=76281980&t=62)** We need to make sure we are storing it in a place where it is optimized for utilizing it.
>
> **[1:08](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/recap?u=76281980&t=68)** We covered a breadth of topics surrounding data platforms, but there's still so much more out there to look at.
>
> **[1:14](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/recap?u=76281980&t=74)** There are hundreds of database options and so much SQL functionality that we haven't touched yet.
>
> **[1:20](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/recap?u=76281980&t=80)** I hope this will help you get started on your own journey of discovering data platforms and all the potential out there.
>
> **[1:26](https://www.linkedin.com/learning/choosing-a-database-postgresql-mysql-mongo-and-cloud/recap?u=76281980&t=86)** Thank you for watching.

> [!info]- Semantic Content
>
> **Analogies:** such as (3)
> **CLI Commands:** mongo (1), make (1)
> **Code Keywords:** finally, (1), while, (1)
> **Env Vars:** sql (2)
> **Cross-References:** we covered (1)
> **Speakers:** - [instructor] (1)


## Resources

- Exercise files available

## Skills Covered

- MongoDB
- PostgreSQL
- MySQL

## Path Context

### In [[Explore a Career in SQL Development]]
**1 of 8** | [[SQL Essential Training]] →

## Appears In

- [[Explore a Career in SQL Development]]

## Related Courses

_Courses sharing skills:_

- [[Learning Full-Stack JavaScript Development- MongoDB, Node, and React]] — MongoDB
- [[MongoDB Essential Training]] — MongoDB
- [[Learning MongoDB]] — MongoDB
- [[PHP with MySQL Essential Training- 2 Build a CMS]] — MySQL
- [[PHP with MySQL Essential Training- 1 The Basics]] — MySQL

---

[↑ Back to top](#)