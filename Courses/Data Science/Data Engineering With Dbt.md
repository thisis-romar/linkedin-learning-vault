---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: data-engineering-with-dbt
url: "https://www.linkedin.com/learning/data-engineering-with-dbt"
level: Intermediate
updated: 1/2/2024
learners: 140701
skills:
  - Data Engineering
  - Data Build Tool (DBT)
exercise_files: true
github: "https://github.com/LinkedInLearning/data-engineering-with-data-build-tool-dbt-4458303/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQHdm3MaltG0tQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1705703016484?e=2147483647&amp;v=beta&amp;t=TpQ4mLz6kbZRiQ2WfE3FhJpxiuEIu7iemWGnDlGaTmA"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Data Engineering Skills]]'
  - '[[Data Engineering Hands-On Practice]]'
prev_courses:
  - null
  - '[[Complete Guide to Python for Data Engineering- From Beginner to Advanced]]'
next_courses:
  - '[[Problem-Solving Strategies for Data Engineers]]'
  - '[[ETL in Python and SQL]]'
path_nav: '[{"path":"Advance Your Data Engineering Skills","position":1,"total":10,"prev":null,"next":"Problem-Solving Strategies for Data Engineers"},{"path":"Data Engineering Hands-On Practice","position":4,"total":7,"prev":"Complete Guide to Python for Data Engineering- From Beginner to Advanced","next":"ETL in Python and SQL"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/devops
  - topic/database-management
  - topic/software-development
  - skill/data-engineering
  - skill/data-build-tool-dbt
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Data%20Engineering%20With%20Dbt.md)

![Data Engineering With Dbt](https://media.licdn.com/dms/image/v2/D4D0DAQHdm3MaltG0tQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1705703016484?e=2147483647&amp;v=beta&amp;t=TpQ4mLz6kbZRiQ2WfE3FhJpxiuEIu7iemWGnDlGaTmA)

# Data Engineering With Dbt

> Data Build Tool (dbt) has quickly become an essential tool in many data stacks ranging from startups to big tech for managing data transformations. In this course, data engineer Mark Freeman helps you get started with setting up, running, and managing a dbt project via the open-source offering dbt Core. Learn how to install dbt Core, configure an environment for dbt, create and manage a dbt projec

> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt) | Intermediate | 141K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Build your first dbt project](#build-your-first-dbt-project)
  - [Introducing the dbt project](#introducing-the-dbt-project)
  - [The project in GitHub Codespaces](#the-project-in-github-codespaces)
- [**1. Prepare Your Coding Environment**](#1-prepare-your-coding-environment) (4 videos)
  - [Install the dbt Core via pip](#install-the-dbt-core-via-pip)
  - [Install the dbt connector to DuckDB](#install-the-dbt-connector-to-duckdb)
  - [Install DuckDB via pip](#install-duckdb-via-pip)
  - [Update your requirements.txt file within your project](#update-your-requirementstxt-file-within-your-project)
- [**2. Prepare Your Database Environment**](#2-prepare-your-database-environment) (2 videos)
  - [Create your database file](#create-your-database-file)
  - [Import CSV data into your new database](#import-csv-data-into-your-new-database)
- [**3. Create a dbt Project**](#3-create-a-dbt-project) (1 videos)
  - [Start your project with dbt init](#start-your-project-with-dbt-init)
- [**4. Prepare Your dbt Environment**](#4-prepare-your-dbt-environment) (3 videos)
  - [Understand the dbt_project.yml file](#understand-the-dbt_projectyml-file)
  - [Create your profiles YAML file](#create-your-profiles-yaml-file)
  - [Connect your profiles and project YAML files](#connect-your-profiles-and-project-yaml-files)
- [**5. Your First dbt Model**](#5-your-first-dbt-model) (2 videos)
  - [Create your first dbt model file](#create-your-first-dbt-model-file)
  - [Using the dbt CLI commands](#using-the-dbt-cli-commands)
- [**6. Introduction to dbt Ref Function**](#6-introduction-to-dbt-ref-function) (3 videos)
  - [Create your dbt model utilizing ref](#create-your-dbt-model-utilizing-ref)
  - [Run your dbt models with the ref syntax](#run-your-dbt-models-with-the-ref-syntax)
  - [View your dbt project data lineage](#view-your-dbt-project-data-lineage)
- [**7. Implementing Medallion Architecture with dbt**](#7-implementing-medallion-architecture-with-dbt) (4 videos)
  - [Planning your medallion architecture project](#planning-your-medallion-architecture-project)
  - [Medallion architecture: Bronze data](#medallion-architecture-bronze-data)
  - [Medallion architecture: Silver data](#medallion-architecture-silver-data)
  - [Medallion architecture: Gold data](#medallion-architecture-gold-data)
- [**8. Materialization of dbt Models**](#8-materialization-of-dbt-models) (2 videos)
  - [Materialization in your dbt project](#materialization-in-your-dbt-project)
  - [Implement materialization in your dbt_project.yml file](#implement-materialization-in-your-dbt_projectyml-file)
- [**9. Documentation as Code via dbt**](#9-documentation-as-code-via-dbt) (2 videos)
  - [Further documentation via schema.yml file](#further-documentation-via-schemayml-file)
  - [The docs_blocks.md file](#the-docs_blocksmd-file)
- [**10. Implementing Tests within Your dbt Project**](#10-implementing-tests-within-your-dbt-project) (2 videos)
  - [Creating custom singular tests](#creating-custom-singular-tests)
  - [Implementing tests within the schema.yml file](#implementing-tests-within-the-schemayml-file)
- [**11. Deploying Your dbt Project**](#11-deploying-your-dbt-project) (2 videos)
  - [Utilizing multiple dbt profiles](#utilizing-multiple-dbt-profiles)
  - [Deploying with GitHub workflows](#deploying-with-github-workflows)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Build your first dbt project](https://www.linkedin.com/learning/data-engineering-with-dbt/build-your-first-dbt-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/build-your-first-dbt-project?u=76281980&t=0)** - Are you buried under a bunch of [[SQL]] queries? You have different data assets, complex business logic, and all these different people asking you for data. That's where I found myself in my last job at a startup, where we had a really complex analytical database. To reduce that complexity, we used [[Data Build Tool (DBT)|data build tool]], also known as dbt. I led that migration at the company, and it changed the way I thought about data, and I hope it can work for you too. In this course, I'll teach you how to set up a dbt project, how to set up a database, and how to connect your dbt project to that database. Then we'll use real-world data to set up our own data workflows with dbt. Hi, my name's Mark Freeman, and I've been a data scientist turn data engineer, and for the next few videos in this course, I'm now going to be your personal mentor, where we're going to pair program and build this project together. So let's get coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[Data Build Tool (DBT)|Data build tool]] (1)
> **Prerequisites:** set up (3)
> **Env Vars:** sql (1)
> **Definitions:** known as (1)
> **Speakers:** - are (1)

#### [Introducing the dbt project](https://www.linkedin.com/learning/data-engineering-with-dbt/introducing-the-dbt-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/introducing-the-dbt-project?u=76281980&t=0)** - [Instructor] In the previous video, I told you that we're going to be pair programming together on our very own dbt project. So now, I'm super excited to share with you the scenario that I've created for us to kind of go through and learn about dbt. In this project, we're both data engineers that have been tasked with transforming the raw New York City parking violation data into the medallion architecture for our company's data lakehouse. Our team has decided to use dbt Core to implement this project as it allows you to use software engineering best practices for our [[SQL]] transformations. In this diagram, you see what's called the medallion architecture, which is broken up to three separate parts, bronze, silver, and gold. In the bronze data, we typically have raw data that we bring into our analytical database. The silver data is the raw data transformed into a data model of our desire. And the gold data is the metrics data that we built on top of our data model. The dataset we're using is the New York City parking violations issued for fiscal year 2023, and the New York City Department of Finance parking violation codes, which is essentially the [[Metadata]] about the violations. I quickly want to note that this dataset is massive, like millions and millions of rows, but for this project we've created a small sample, so it's easy to work with. So let's quickly check out what this data looks like. This data is sourced from the NYC Open Data,
>
> **[1:33](https://www.linkedin.com/learning/data-engineering-with-dbt/introducing-the-dbt-project?u=76281980&t=93)** which is government dataset that's public to anyone to use, and I think it's a great resource for personal projects such as this. We can quickly see the data from there. And as I stated, there's 21 million rows for this dataset, which is wild. If you try to download that, you might break your computer. That's why we're doing it super simple and having the sample. In addition, we have the actual codes themselves. And this is a much smaller dataset, only 100, but it's super useful, because now, we have the different metadata to inform us what our codes should look like. Now that we know the project we're building and the datasets we're using, let's start pair programming together in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (2), [[SQL]] (1)
> **Env Vars:** sql (1), nyc (1)
> **Cross-References:** previous video (1), in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [The project in GitHub Codespaces](https://www.linkedin.com/learning/data-engineering-with-dbt/the-project-in-github-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/the-project-in-github-codespaces?u=76281980&t=0)** - [Instructor] Welcome to our coding environment. For this project, we're using [[GitHub]] [[Codespaces]] which you can access in a link right below this video in the course. GitHub Codespaces allows us to abstract away the coding environment, which as you know, as an engineer, can make it very difficult to set up a project or learn from a tutorial. By skipping all that stuff, we can just focus on learning about dbt Core. And if you haven't used this before, that's completely okay 'cause I'll quickly walk you through what we have on the side. So we have our project here, and we have these files for configurations, which you don't really need to worry about. What we are going to focus on are the data files. We also have some assets that we'll use later in the course, such as these. In addition, we have a notebook where we'll be running our [[SQL]] queries. Right now, it won't work because we haven't setup our database, but that'll be happening soon. The [[Representational State Transfer (REST)|rest]] of it is pretty blank, and that's very intentional because we're going to be building our dbt project from scratch and adding to this as we go along the course. So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[Codespaces]] (2), [[SQL]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Tools:** github (2)
> **Prerequisites:** set up (1), setup (1)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Cross-References:** later in (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. Prepare Your Coding Environment

[↑ Back to Table of Contents](#table-of-contents)

#### [Install the dbt Core via pip](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-core-via-pip?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-core-via-pip?u=76281980&t=0)** - [Instructor] So we have an empty project and the first thing we're going to do is download DBT, specifically DBT Core. If you're used to [[Python (Programming Language)|Python]], then you'll be familiar with using PIP to install packages. Simply do PIP install DBT Core. And we also want to specify the version so that way we're all working on the same packages. So I do 1.6.1. Run that, and now it's in there. But to make sure that we have it, we can use the PIP show. And so PIP show DBT Core and we'll get information about the package we have from there. And now it's confirmed. We have DBT Core installed into our environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Env Vars:** dbt (5), pip (4)
> **CLI Commands:** pip (4), python (1), make (1)
> **Prerequisites:** install (2)
> **Versions:** 1.6.1 (1)
> **Speakers:** - [instructor] (1)

#### [Install the dbt connector to DuckDB](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-connector-to-duckdb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-connector-to-duckdb?u=76281980&t=0)** - [Instructor] Now that we've installed DBT Core, we have also now need to install DBT DuckDB. And you may be asking wait, I thought we just installed DBT. Well, we have to do it again. DBT core is kind of the foundational package and we have various connectors to different [[Databases]] within the data ecosystem. But for this one, we're using DuckDB. I wouldn't worry too much about the types of databases, it's going to be dependent on your company, but you can look at the documentation of DuckDB for yourself if you're interested. But to install this for DBT similar PIP install DBT DuckDB and again, reference the version we want to use 1.6 0. run it and success. Now let's make sure it works. So again, PIP show, DBT DuckDB and success.
>
> **[1:06](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-connector-to-duckdb?u=76281980&t=66)** We see it working and we have it all set up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2)
> **Env Vars:** dbt (7), pip (2)
> **Prerequisites:** install (3), set up (1)
> **CLI Commands:** pip (2), make (1)
> **Versions:** 1.6 (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### [Install DuckDB via pip](https://www.linkedin.com/learning/data-engineering-with-dbt/install-duckdb-via-pip?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/install-duckdb-via-pip?u=76281980&t=0)** - [Instructor] Our final package that we're going to install is DuckDB itself. There's DBT DuckDB, and then there's DuckDB. What's the difference? One is the connection to DBT. The other one is for the actual database itself and using it with [[Python (Programming Language)|Python]]. So quickly install it. PIP install DuckDB and the version we're going to be using is 0.90. And again, let's check if it works. PIP show DuckDB and we have it there. We now have all of our packages installed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Env Vars:** dbt (2), pip (2)
> **CLI Commands:** pip (2), python (1)
> **Prerequisites:** install (3)
> **Versions:** 0.90 (1)
> **Speakers:** - [instructor] (1)

#### [Update your requirements.txt file within your project](https://www.linkedin.com/learning/data-engineering-with-dbt/update-your-requirements-txt-file-within-your-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/update-your-requirements-txt-file-within-your-project?u=76281980&t=0)** - [Instructor] Now that we've installed all of our packages, again, I'm not teaching you how to use DBT, I'm teaching you how to use DBT for a production project. And you can't have a production project without requirements.text file. And so let's go scroll over to the side. And we can see this here. I have already added it to here, so that way our projects is simple to use for everyone. But if this would be blank, if you had your own project, and similarly, you would just add the packages for there. And what makes this powerful is now for any environment, you do the requirements.text file, and start your packages. And now everyone has the same packages as you. This may not seem big for this project, but when you're working with hundreds of people over different teams, this makes all the difference.

> [!info]- Semantic Content
>
> **Env Vars:** dbt (2)
> **Speakers:** - [instructor] (1)


### 2. Prepare Your Database Environment

[↑ Back to Table of Contents](#table-of-contents)

#### [Create your database file](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=0)** - [Instructor] We now have all of our packages installed for our project, and now we have to create our database. We're going to be using DuckDB, which is a relatively new database, but I think it's perfect for this project because it's lightweight, we can use in our browser, and it's great for tutorials. I won't get too hung up on the exact database because again, it's dependent on your company and what you need. But for this project it's very simple because I set up a Jupyter Notebook that you can run these [[SQL]] queries from. DuckDB provides a [[Python (Programming Language)|Python]] integration, which allows you through Python or Jupyter Notebook to run your SQL queries, create your tables, various things you would do with a typical SQL interpreter. So we're going to create our first database and to create [[Databases]] in DuckDB, they make it very simple, where if you run a SQL query and the database doesn't exist yet, it will auto generate it for you and so let's get started. I already have kind of the baseline code here, which is in the notebook file. First we're going to import our packages and for your Jupyter Notebook, just make sure it's connected to the right Python interpreter. VS Code does a pretty good job of letting you know what's recommended. So it should be easy to through a few clicks. So run it. We've imported our packages and now we're going to run our SQL query. Just to quickly break down, we have a string that's a SQL query. In Python, You can do a multi-line string via three single quotation marks from the beginning
>
> **[1:36](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=96)** and the end and then we connect it to DuckDB via the duckdb.connect command. We then specify where we want to have our database. We're going to have it in the data folder and we name it. And then we rephrase it as con. That's just typical terminology language they use for connecting databases. You'll see throughout various documentation beyond DuckDB. And then we run our SQL query with the con.SQL function. Wrapped around here I also have a [[Pandas (Software)|pandas]] data frame to display. I personally prefer this when working in Jupyter Notebooks because I'm a visual person and this makes the data a lot easier to see. I'm now going to run it and it worked successfully. And now you can see on the side we have our database. In addition, I did the SQL Query show tables, which in DuckDB shows, which tables are there. As you see, there's nothing there because we haven't created our data yet, and that will be the next step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (9), [[Python (Programming Language)|Python]] (4), [[Databases]] (2), [[Pandas (Software)|Pandas]] (1)
> **Env Vars:** sql (9)
> **CLI Commands:** python (4), make (2)
> **Tools:** jupyter (4), vs code (1)
> **File Paths:** con.sql (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** set up (1)

#### [Import CSV data into your new database](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=0)** - [Instructor] We now have our DuckDB database set up and it's now time to put data within our database. Now I'm going to copy and paste some code in here. We will provide that code to you, so you don't have to worry about typing all of this yourself, but I'm going to go quickly break down how this code works and then how it looks like in DuckDB. I'm going to [[Zoom]] out a little bit, so you can see the total code itself, but we'll make sure to reset it. So we have our two [[SQL]] queries and then we run the individual SQL queries with the with statement. One thing I want to highlight is there's various ways to run the DBT SQL code. The reason why I like using with is because after this cell is done running, it will automatically close out the database. This may not seem important now, but when we're doing iterations of development for DBT, we are going to have to connect to the database from DBT, the Jupyter Notebook back and forth, and if one's using it, then the other one can't. And so this automatically closing helps out a ton. So for the first SQL query, we're going to do create or replace table. I personally like using the replace as well. Just in case I run this again I don't get an error message. We have parking violation codes as the data set we want to import. We do select * and DuckDB specific to them makes it easy to implement CSVs as tables. You use the read CSV auto function.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=95)** We set the path of where our CSV is at. It's going to be in the data folder, and it's with this name and this is super useful, is we normalize the names as true. I'm going to go to the left here and check out the actual data itself. And as you can see, the names are uppercase, there are spaces, there's dots for a CSV and a sheet that's great. For SQL, writing your code that's going to make your life so hard. And so this quick function makes it so it's all lowercase, underscore removes all those special characters. Same thing, we're going to do it, but now we're going to do this file instead. So quickly zoom out again and I'm going to run this code and we have now added our tables. Let's scroll back up here. And when we do show tables, we can see the two tables created. And as you can see, we have our parking violation codes and we have our parking violation 2023. Why? It's not enough to know we have the [[Databases]]. Let's actually see what the data looks like. And so with that, I'm going to do a simple select statement. Type in here, select, * FROM parking violation codes,
>
> **[3:08](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=188)** and limit five because you don't want too many rows out here. I'm going to run this and we have our data. How cool is that? I'm a data nerd, so anytime I create my own database and get new data, I'm excited. So we're going to use this data for our DBT project, which we're going to create in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Zoom]] (2), [[Databases]] (1)
> **Env Vars:** sql (5), dbt (4), csv (3)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Tools:** jupyter (1)
> **UI Navigation:** go to (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** set up (1)


### 3. Create a dbt Project

[↑ Back to Table of Contents](#table-of-contents)

#### [Start your project with dbt init](https://www.linkedin.com/learning/data-engineering-with-dbt/start-your-project-with-dbt-init?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/start-your-project-with-dbt-init?u=76281980&t=0)** - [Instructor] We are now ready to create our DBT project. Creating a project with DBT is simple as it has a built-in command called DBT init that'll auto generate a new DBT project with every file you need to get started, as well as the DBTs directory properly organized for you. This is so helpful because I don't have to deal with this blank screen problem. I just do two words and I'm all set for DBT. So let's get started. It's simply DBT init, and it's going to take a few seconds to run it and we'll see soon asking what's the name of the project. We're going to name it NYC parking violations.
>
> **[0:45](https://www.linkedin.com/learning/data-engineering-with-dbt/start-your-project-with-dbt-init?u=76281980&t=45)** It's now going to ask us what database we want to use since we have the duckdb connection, that's the only option we have. We're going to do one to signify that and now run that. It says, no sample profile found for duckdb, and that's completely okay because duckdb is so new. We're going to have to create that ourselves in the later step. But for now, let's go look at the autogenerated files and folders that was created by DBT init. We have the logs, I wouldn't worry about those, but NYC parking violations. We have all these different folders for our DBT project. I specifically want to highlight the models folder where we'll be spending a lot of our time in, as well as the schema and DBT project YAML file. In the next steps, we'll go more into setting this up, but now we have our own DBT project.

> [!info]- Semantic Content
>
> **Env Vars:** dbt (10), nyc (2), yaml (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 4. Prepare Your dbt Environment

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand the dbt_project.yml file](https://www.linkedin.com/learning/data-engineering-with-dbt/understand-the-dbt-project-yml-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/understand-the-dbt-project-yml-file?u=76281980&t=0)** - [Instructor] As I mentioned, DBT and NIT creates these auto-generated files and one of the most important ones is the DBT project YAML file. If you're new to YAML, that's completely okay. It stands for yet another markdown language. Think of it as a way to quickly summarize configurations for your project. It's used for DBT and many other configurations across coding platforms. And the DBT project YAML file has key sections which informs your DBT project, where to look for and what actions it should take when it's running your DBT project. For the first one, we have the name of our project and the version and the config version. We won't have to worry about these two lines too much right now, but they come very useful when you have a very complex project that grows over time. We then have the profile, again, nyc_parking_violations, and we have the paths that DBT will look for for the various things. If you look to the side, you see the models path, analysis test seeds, macros, all right here, matching. In addition, we have the clean targets, which is useful, where if you have some auto-generated files that you don't need anymore, you can clean it with this. And finally, the most important one that we spend the most of our time in the tutorial is the model section. We have our model, we have the nyc_parking_violations, and then we have the various models within that and how they're materialized. And so quickly going under here, you see models, example, and the two projects, models, example, similar thing.
>
> **[1:37](https://www.linkedin.com/learning/data-engineering-with-dbt/understand-the-dbt-project-yml-file?u=76281980&t=97)** And so when we start configuring our file, we'll learn more about how to set this up properly for our project.

> [!info]- Semantic Content
>
> **Env Vars:** dbt (7), yaml (3), nit (1)
> **Code Identifiers:** nyc_parking_violations (2)
> **Definitions:** stands for (1)
> **Analogies:** think of it as (1)
> **Speakers:** - [instructor] (1)

#### [Create your profiles YAML file](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=0)** - [Instructor] We now need to make our next configuration file called the profiles yml file. But if you look at the sidebar over here, there isn't a profiles yml file. And that's very intentional. For a particular use case of using duckdb, it doesn't auto generate one. So remember a few videos ago when we did DBT init? It gave us that message, no sample profile found for duckdb. And that's completely okay. And I actually think it's a great learning opportunity for us 'cause now we get to create our own profiles yml file. So to do that we're going to go use the terminal and we're going to go into the directory of the NYC parking violations. So to do that, you do cd, which stands for choose the directory. NYC parking violations. Quick pro tip, you can use tab to auto complete, which I love using for terminal. We're in there and the reason why we need to be in here is that we need all of our DBT workflows within the DBT directory. So I'm going to create my profiles yml file, and to do that with the command line you do touch and then the name of the file. So we'll do profiles.yml. Create that and as you can see right here we have our profiles yml file. Now, we don't have to figure this out ourselves. Duckdb has already told us how to configure this and I'm going to pull up that screen via this link. As you can see, it gives us a quick set of instructions to put into there. So I'm going to copy and paste that over.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=94)** We are now in our profiles yml file, and this is copy and paste what we got from the documentation. Great, now we save that. And that completes our profiles yml file. Just to quickly summarize what's happening here is that we set our default profile as this target dev, where we have the type of duckdb for our outputs for our database. Simple as that. And in the next video we'll show you how to connect this all together within your DBT project.

> [!info]- Semantic Content
>
> **Env Vars:** dbt (4), nyc (2)
> **Tools:** terminal (2), command line (1)
> **CLI Commands:** make (1), cd (1)
> **File Paths:** profiles.yml (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Definitions:** stands for (1)
> **Best Practices:** pro tip (1)

#### [Connect your profiles and project YAML files](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=0)** - [Instructor] We now have our DBT project yml file and our profiles yml file. But how do they interact with each other? Here's a really useful quote directly from the DBT documentation. When you run DBT from the command line, it reads your DBT project yml file to find the profile name and then looks for a profile with the same name in your profile's yml file. This profile contains all the information DBT needs to connect to your data platform. In our case it's duckdb. And so this is integral how DBT works and you can quickly check it with the command line of DBT debug. So I'm going to make sure that we first in the NYC parking violations directory. And to do that I do LS. List my directories and I can quickly see I'm not in the right directory. And this trips me up all the time in DBT, and so I'm glad we saw this so we can do this right now. So remember to move to a directory, do cd, and now we're going to do NYC parking violations. Now we're in the DBT directory and we can run our DBT commands. So let's run DBT debug and we're going to get an error and that's very intentional 'cause I hope it teaches you something. So we're running this. And as you can see, one check failed. It says the profile's yml file has an error and it cannot find the profile named NYC parking violations. So let's dive in to understand what's happening here. And so, looking at the DBT project file is we have a profile called NYC parking violations,
>
> **[1:37](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=97)** but if you go into our profiles, it's called default. So we've misnamed our DBT project here and so we just need to change this to match. So I'm going to copy and paste this over here and update it to look like this. Now that's saved and we'll run DBT debug again. So, DBT debug and we should have no errors this time. All checks pass. So with that update, we now have our DBT yml files connected to each other and DBT can run successfully. So now let's start building our first DBT model.

> [!info]- Semantic Content
>
> **Env Vars:** dbt (18), nyc (4)
> **CLI Commands:** find (2), make (1), ls (1), cd (1)
> **Tools:** command line (2)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)


### 5. Your First dbt Model

[↑ Back to Table of Contents](#table-of-contents)

#### [Create your first dbt model file](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-first-dbt-model-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-first-dbt-model-file?u=76281980&t=0)** - [Instructor] We're now going to create our first DBT model. When we ran DBT in it, it create two example DBT models within the directory. NYC parking violations models example. So I'm going to show that to you over here on the left. Clicking over, you can see these files. We're now going to delete them. We don't really need them. They're going to make things a little bit more confusing, so I'm going to delete them permanently. Perfect, now with the empty blank models, we can now create our own [[SQL]] files. So remember again, we're going to do CD NYC parking violations, and we're going to go down further directory and go to models. Once again, we're going to create a new file called First Model. So touch first model.sql
>
> **[0:56](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-first-dbt-model-file?u=76281980&t=56)** and we now have our first model here. This model is essentially just a SQL file. DBT sees a SQL file and runs it through our system. We're going to do a very simple SQL query just for our first model, so you get used to the system. So select star from parking violation codes, and that's it.
>
> **[1:23](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-first-dbt-model-file?u=76281980&t=83)** It's really that simple, it's just SQL code stored in files. Now this may seem very, very simple, but as you start to scale multiple files, being able to structure it in a directory like this makes it so much easier to manage. And in addition, we'll show some lighter tools that we can use to make it even easier to manage this complexity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6)
> **Env Vars:** sql (5), dbt (4), nyc (2)
> **CLI Commands:** make (2), cd (1)
> **File Paths:** model.sql (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Using the dbt CLI commands](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=0)** - [Instructor] Now that we've created our first DBT model, we can actually run it through the DBT project finally. There's three main command line commands that you use: DBT debug, which you've used before, DBT compile and DBT run. Let's quickly run through what those are. So let's first do DBT debug. Now, I'm going to intentionally create an error 'cause this is something that's very common that pops up when people learn DBT. As you can see, I do DBT debug, but it's saying two checks failed. Why is that happening when it worked not too long ago? Well, if you remember we have to be in the DBT directory. So LS. We're not in the DBT directory, so we are going to do CD NYC parking violations. And now when we run DBT debug again it should be happy. All checks pass, which is great. Now, the next command I want to introduce is DBT compile. Now, DBT compile runs all the DBT models end-to-end, but doesn't execute the model [[SQL]] code nor materialize the tables, which is useful for quickly checking if your DBT models have any errors. So for this small project, not an issue, but if you have thousands of models, it may take an hour to run. You don't want to do that, so you do DBT compile to catch your errors a little bit early. So, we'll do DBT compile And it works. Finally, we'll do DBT run. It runs all the DBT models end-to-end, executes the SQL code and materialize the tables
>
> **[1:31](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=91)** based on the profile configurations. Now I'm going to give you a heads up, this is going to create an error, but that's very intentional. So DBT run, error. It can't find the violations code table. Why is that happening? Well, if you go to our profiles yml file, scrolling down here, is we have NYC parking violations. Great. We have the type duckdb, but it doesn't know where to look, which is this data table over here. To quickly do that, we just add a line under type and we add a path. I'm going to copy and paste it here for you. And as you can see, path. Two dots to say, Hey, go back a directory, look into the data folder and reference the NYC parking violations database right here. So now that's saved. Let's go back to our command line. We'll run DBT run and it should now work. Now that our DBT project has run successfully, let's go check our data in the run SQL queries here notebook. Pulling that up here. As you can see, remember to import your packages and let's run the SQL query. Show tables, and as you see, we see first model and our two initial CSV files that you put into your database. Something out that's really important
>
> **[3:04](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=184)** that I want to highlight is that note how the table name within our duckdb database matches the file name of our DBT model. This behavior DBT is essential for organizing your DBT project, as each DBT model name needs to be unique because that becomes the name within the database. In the next step we're going to create another DBT model and figure out how to connect them via the ref function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4)
> **Env Vars:** dbt (27), sql (4), nyc (3), csv (1)
> **CLI Commands:** ls (1), cd (1), find (1)
> **Cross-References:** go back to (1), in the next (1)
> **Tools:** command line (2)
> **UI Navigation:** go to (1)
> **Best Practices:** remember to (1)
> **Warnings:** heads up (1)


### 6. Introduction to dbt Ref Function

[↑ Back to Table of Contents](#table-of-contents)

#### [Create your dbt model utilizing ref](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980&t=0)** - [Instructor] As mentioned earlier, DBT enables some useful tools for [[SQL]] files. Specifically, the most important syntax within DBT are ref statements. And if you look at our screen, I have an example of one here right now. To quickly break it down, we have our curly brackets, double, the ref command, parentheses, the name of your model as a string, and then you close out the brackets. This syntax is powerful as it allows DBT to create lineage for your data transformations, essential for orchestration, creating dependencies, and documentation. The ref statement specifically is what's called Jinja syntax, which is functions used within DBT and a whole bunch of little bells and whistles. Jinja syntax is a little bit outside the scope of our course, but I highly recommend you go to the DBT documentation and learn about Jinja and macros, as they're extremely powerful. But for this course, we mainly just need to focus on the ref statement. So let's create our first DBT model using the ref statement. Again, we want to make sure we're in our DBT project. So, LS to see where we're at. We need to go move into the NYC parking violation folder. Now, again, we're going to do touch. touch models/example, and we're going to call this the ref_model.sql. As you see on the left side, we have our ref_model, and let's click into that.
>
> **[1:33](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980&t=93)** And we're going to do something simple. We're going to do select, count(*) just to count all the rows in the table, from, and I'm going to show you what it looks like without the ref statement first. And so we're going to do first_model. Now this will run in DBT and it'll show up in our database, but it won't have the ref statement to show that it's connected to each other, and that's what makes DBT powerful. So to do that, we're going to do our ref statement. So remember, we have our curly brackets, ref command, parentheses, string, and then we close it out. And we now have our first model with the ref statement. In the next section, we'll actually run it and see how it looks in the database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2)
> **Env Vars:** dbt (9), sql (1), nyc (1)
> **Code Identifiers:** ref_model (2), first_model (1)
> **CLI Commands:** make (1), ls (1)
> **File Paths:** ref_model.sql (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### [Run your dbt models with the ref syntax](https://www.linkedin.com/learning/data-engineering-with-dbt/run-your-dbt-models-with-the-ref-syntax?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/run-your-dbt-models-with-the-ref-syntax?u=76281980&t=0)** - [Instructor] In the last video, we've created our ref statement model, and now we're going to run it. Again, let's make sure that we are in the nyc_parking_violations folder, and it looks like we are. Again, if we're not in there, dbt's going to have some issues. So to do our dbt model, we're going to do dbt debug to make sure everything's working. Everything's looking good. We're going to do dbt compile. Everything's looking good. And now let's do dbt run. And it all worked out great. Something I want to highlight, a small nuance but it's very important, is notice how it does first_model and then the ref_model second. That's not by accident, that's very intentional. The ref statement allows dbt to understand the order of operations for the orchestration. That wouldn't happen if we didn't use the ref statement. So now let's go look at our database and see if the data's actually there. So we're going to go into our run_sql_queries_here, and we're going to do SELECT * FROM ref_model.
>
> **[1:11](https://www.linkedin.com/learning/data-engineering-with-dbt/run-your-dbt-models-with-the-ref-syntax?u=76281980&t=71)** And we have success. We used the ref statement, we have the ref_model, and we see the counts for our table. In our next step, we're going to see how powerful the ref statement truly is with documentation.

> [!info]- Semantic Content
>
> **Code Identifiers:** ref_model (3), nyc_parking_violations (1), first_model (1), run_sql_queries_here (1)
> **CLI Commands:** make (2)
> **SQL:** select (1)
> **Env Vars:** select (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [View your dbt project data lineage](https://www.linkedin.com/learning/data-engineering-with-dbt/view-your-dbt-project-data-lineage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/view-your-dbt-project-data-lineage?u=76281980&t=0)** - [Instructor] In our previous video, we saw in our database that the ref model was able to show up in our database, but I don't think that really highlights how cool the ref statement is, and to really show the power of the ref statement, we need to do DBT docs. Now we'll go over DBT docs in a much more detail in a later step, but this quick intro allow you to visualize our DBT project. Creating DBT docs is as simple as running the [[CLI]] command DBT docs generate. So let's run that real quick. Again, let's make sure we are in the correct repository. CD NYC parking violations. Great and DBT docs generate.
>
> **[0:45](https://www.linkedin.com/learning/data-engineering-with-dbt/view-your-dbt-project-data-lineage?u=76281980&t=45)** So what's happening here is that DBT is looking at all the [[Metadata]] in our DBT project is then going to create these files as [[JSON]] within our targets. You can look here and these are all auto-generated files that you don't have to deal with, but that's what's being created with DBT Docs generate. But how do you actually see it? You do DBT docs serve and what will happen is it'll create a local instance of a website based on your metadata of your documentation in the entire DBT project. And as you can see, we can see the ref statement going from first model to ref model. Now these are only two models, but imagine if there is hundreds or thousands how powerful this is. In addition, we can go into our models themselves and we have data about them. And so now we can go into our models and actually see all the metadata about them. It's a little blank right now, but in later steps we'll fill it out and it's so powerful because now your entire team can understand your whole data project. Now that we know how to do the ref statement, do DBT docs, we're ready to actually build the medallion architecture and the next step, we'll go over planning for that project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (3), [[CLI]] (1), [[JSON]] (1)
> **Env Vars:** dbt (12), cli (1), nyc (1), json (1)
> **CLI Commands:** make (1), cd (1)
> **Cross-References:** previous video (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### 7. Implementing Medallion Architecture with dbt

[↑ Back to Table of Contents](#table-of-contents)

#### [Planning your medallion architecture project](https://www.linkedin.com/learning/data-engineering-with-dbt/planning-your-medallion-architecture-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/planning-your-medallion-architecture-project?u=76281980&t=0)** - [Instructor] So we're ready to finally build our DBT project, but the instructions were a little far back, so let's recap them again. We're going to convert the NYC parking violation data into the medallion architecture. To do this, we're going to utilize dbt Core for the [[SQL]] Transformations, and our data pipeline and assets should look like the following when we're done. This is the medallion architecture for our project. Remember, we have our bronze with our raw data, silver, with our transformed data model, and gold for our metrics data. And to break down our project into smaller chunks, we can think of it this way, we have our bronze data with the following tables. We have parking violation codes and parking violations. Silver data, we're going to break it out into violation codes, violations, tickets, and vehicles. And then finally, for our gold data, we'll have our ticket location metrics and our vehicle metrics. So let's get started building the DBT.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1)
> **Env Vars:** dbt (2), nyc (1), sql (1)
> **Speakers:** - [instructor] (1)

#### [Medallion architecture: Bronze data](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=0)** - [Instructor] So, we're now ready to finally build our DBT project and we're going to start with our bronze data. Now, bronze data should be in a mostly raw state, where minor transformations are made to make it easier to manage data within your analytical database. For our use case, we're going to take a subset of the parking violation data columns. We should have the following tables added to our database when we're done: bronze parking violation codes and bronze parking violations. To do this, we're going to create a new folder within our models directory called bronze. We're first going to make sure we're in the NYC parking violations folder. And now, we're going to make a bronze folder within the models directory with the [[CLI]] command, make directory, so mkdir models bronze.
>
> **[0:49](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=49)** And now, we can see in our folder, we now have a bronze, but it's completely empty. And so now we need to create our [[SQL]] files for our model. To do that, we do touch. And then, we're going to add through the path, the file name, bronze parking violation codes.sql, I have it copy and pasted here. Take a moment for you to write that down. And now we add it here. And as you can see, we now have our model. We're going to do this one more time for our other model we have in there. Similar thing, touch models bronze bronze parking violations.sql. We now have both of our models ready and we're ready to create our bronze parking violation codes tables. So we're going to go into our bronze parking violation tables, and I'm going to copy and paste this codes in here. But you have these files available that you can put in there as well. And the reason for that is just explain the SQL code. This isn't a SQL course its a DBT course, I want you to focus mainly on DBT, but all we're doing is we're selecting code and renaming it as violation code. The reason why we're doing this is so that it's the same for across all the tables. In addition, we're adding definition and then Manhattan 96th Street below all other areas, and then it's going to be from the parking violation codes. And you may be asking yourself, "Well, why aren't we using a ref statement?" Well, it's the bronze table, it's the first start of a data pipeline. So since it's the beginning, it doesn't need to reference anything.
>
> **[2:22](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=142)** We're now going to go into bronze parking violations. Similar thing, I'm going to copy and paste the code and now we're pulling much more tables, just a simple select from. And again, just take some time to review the code, understand what it does. But again, the focus is on DBT, not SQL. And now we're ready to actually build our bronze tables. So now that they're both ready, let's close it out. Go to our terminal, and you should know the drill by now. DBT debug. Looking great. DBT compile. Looking great. And now finally, DBT Run. And it's all set. Keep in mind we have our earlier example folders, that's completely okay. I'll keep it in there just so you have it for reference. But we now see our four models have run successfully. Now let's actually view our data and our database. So let's scroll down to our run SQL queries folder, and make sure the environment's set up by running our import packages, and we can see which tables we have in there. So with Duck DB, you can do show tables, and now we can see our bronze data in there. But let's actually view our bronze data. So I'm going to do select star from bronze parking violations,
>
> **[4:04](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=244)** and I'm just going to limit to three. Running that. And now we can see our bronze data available in here. We've successfully set up our bronze tables within our DBT architecture, so excited. And now let's move forward over to the medallion architecture for our silver data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[CLI]] (1)
> **Env Vars:** dbt (8), sql (5), nyc (1), cli (1)
> **CLI Commands:** make (5), mkdir (1)
> **File Paths:** codes.sql (1), violations.sql (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Prerequisites:** set up (2)
> **Tools:** terminal (1)
> **Warnings:** keep in mind (1)

#### [Medallion architecture: Silver data](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=0)** - [Instructor] This is video 0703. We've created our bronze data, and we're now ready to move on to our silver data in our medallion architecture. Silver data should align with your established data model for your analytical database. While [[Data Modeling]] is extremely important in [[Data Engineering]], that is not the goal of this tutorial. Instead, we're just going to do some simple transformations and make it easier to do our metrics later on. The four tables we're going to be creating is silver parking violation codes, silver parking violations, silver violation tickets, and silver violation vehicles. Again let's make sure we are in our NYC parking violations folder for dbt, and similar to we did in bronze, we're going to make a directory called models/silver.
>
> **[0:49](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=49)** And again we can see it here, blank directory, and we're going to use touch to create four files, touch models/silver/silver_parking_violation_codes, touch models/silver/silver_parking_violations, touch again, models/silver/silver_violation_tickets, and for our final silver table, touch models/silver/silver_violation_vehicles. And we see on the right side here, we have our four tables, so now let's start building them. So we have silver_parking_violation_codes. I'm going to copy and paste the values in here, and then I'm going to explain the [[SQL]] we're doing. So to quickly summarize what we're doing with this table, we have to look at our violation codes CSV. Something happening here is that it's not a unique row for every value. There is the Manhattan 96th Street below column, and all other areas. What we need to do is make them their own row for each type of fee. To do that, I pull it out by just creating a new column called is_manhattan_96th_st_ below, and it's created a Boolean. In addition, I changed the manhattan_96th_st_ below to fee_usd, and created its own table. I did the same, but made it false for the Boolean
>
> **[2:23](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=143)** and all other areas named the fee_usd, so that it matches, and then a simple union to create it. When we run our dbt model, you'll see it run perfectly. We're now going to move on to the silver_parking_violations. This one's just a simple select, but there's one thing happening. Remember how there are two different fee structures, whether or not you are in manhattan_96th_st_ below or not. Now, doing data, this is going to be a lot of your time understanding the underlying business logic of the data to understand how to do this properly. Again, this is a course about dbt, not SQL or data analytics, so to do this quickly, we're making a huge assumption saying if you're in the county of Manhattan, you are in this area, so then true, so that's how we're going to determine which fee structure they do. Again, if you're in this production system, you're going to spend way more time trying to figure this out, but for this course, we're keeping it simple. We're now going to move to violation_tickets, and those two tables we've created, we're now merging them together, and remember how in every single time, we're using the ref statement now for our silver tables, because we're now referencing previous tables in our dbt model. With this, I am merging the violations table to the violation codes table on violation codes, and the Boolean is whether or not it's below Manhattan 96th Street.
>
> **[3:59](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=239)** And then finally, we're going to do our silver_violation_vehicle table. This table's going to be super simple, just to select a few of the rows. And now that we have our four tables, we're going to be ready to do our dbt commands. Pull up the terminal. Let's make sure we're in the right directory, and we are, so let's do dbt debug. Looking good, dbt compile. Looking good, and now let's do dbt run. Complete, now that we have our data ready, we can go check it out within our notebook where we run our SQL queries. Make sure our environment's set up, and this will show the tables. As you can see, we can now see all of our silver data, but let's go look at it, actually. So let's go look at SELECT * FROM.
>
> **[5:07](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=307)** Let's do the silver_parking_violation_codes. Run that, and now you can see everything has a unique row, and it' showing whether or not it's Manhattan, and it has the fee USD. In addition, let's go check out for one more table, the actual tickets. So silver_violation_tickets, and let's LIMIT it to three. Running, and now we can see our data here. Great, we have now created our silver tables, and we're now ready to move on to our gold data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (3), [[Data Modeling]] (1), [[Data Engineering]] (1)
> **Code Identifiers:** silver_parking_violation_codes (3), silver_parking_violations (2), silver_violation_tickets (2), fee_usd (2), silver_violation_vehicles (1)
> **Env Vars:** sql (3), nyc (1), csv (1), select (1), usd (1)
> **CLI Commands:** make (6)
> **SQL:** select (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)

#### [Medallion architecture: Gold data](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=0)** - [Instructor] We've created our bronze data, we've created our silver data, and we're now ready to create our final component of medallion architecture, the gold data. Gold data is ideally for metrics and aggregates that'll be utilized by downstream data consumers via reports and [[Dashboards]]. We should have the following tables added to our database: gold ticket location metrics and gold vehicle metrics. To do this, let's make sure we are first in our NYC parking violations area, and we're going to once again do make directory models gold. As you can see, gold folder here, but no tables. We're going to do touch models gold gold ticket metric [[SQL]], and we can see in our gold folder. Final one, touch models gold gold vehicle metrics. Now that both of our tables ready, let's go into it. So we have gold ticket metrics, and we're just doing something really simple here. We're doing, for each violation code, we're just getting the counts of the number of tickets and the total number of fees that have been collected for that specific violation code. And again, we're using the ref statement. Let's go to gold vehicle metrics. For this table, we're looking at the registration state for each vehicle, and then counting how many tickets come in from each type of vehicle from different states. Where we have this where clause
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=92)** where the registration states saying, make sure the vehicle is not from New York. And again, the goal tables, just make it so that for your dashboards downstream, or for your analytics downstream, the data's already prepared and moves very quickly for 'em. Many times these are some easy wins you can get for your stakeholders to get dashboard move really quickly. And now we're ready to do our DBT [[CLI]] commands, DBT debug, DBT compile, and DBT Run. And success. Let's go back into our SQL notebook and let's run it. So let's do select star, and since it's a aggregate, we can remove the limit and do gold ticket metrics. Run that, and now we can see the ticket count and the total revenue. Let's also check out the vehicle metrics. And as you can see, New Jersey has the most common tickets within New York. And that completes our last table for our gold architecture, but let's see it all in action. We're going to do DBT docs generate and DBT docs serve.
>
> **[3:09](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=189)** We can see we have all of our models here now, but now we can see the lineage and look at that. It matches our desired format for our tables. Isn't that exciting? For the next video, we're going to dive into materialization methods within DBT, so you can fine tune how these models appear in your database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dashboards]] (2), [[SQL]] (2), [[CLI]] (1)
> **Env Vars:** dbt (7), sql (2), nyc (1), cli (1)
> **CLI Commands:** make (4)
> **Cross-References:** next video (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 8. Materialization of dbt Models

[↑ Back to Table of Contents](#table-of-contents)

#### [Materialization in your dbt project](https://www.linkedin.com/learning/data-engineering-with-dbt/materialization-in-your-dbt-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/materialization-in-your-dbt-project?u=76281980&t=0)** - [Instructor] So we've created our DBT models, but there's one small thing we need to consider is that how do we want the models to look like for our database users. Within DBT, it's called Materialization and Materialization essentially controls how your models within your database are viewed and created. Why you may want to do this is you want to limit what tables can be viewed by your database users. Maybe you want to reduce the cost of [[Data Storage]] by not having them materialized, but still available. Or you may want to speed up certain [[Data Pipelines]] such as a dashboard so it doesn't have to wait for the query to run before you can actually get the data. DBT allows five different materialization methods table, view, incremental, ephemeral, and materialized view. But for our project, we're only going to worry about table, which places the data within the database view, which pulls the data only after you reference it. And ephemeral which is, we run the data, but we don't show it in the database. I highly, highly recommend checking out DBTs documentation on this because it's super important aspect of your DBT project and it gives you a lot of great fine grain tweaking to your models, which is great for your overall project, especially for larger ones. For our DBT project, we're going to have the following. Our bronze data is going to be view, our silver data is going to be ephemeral for the initial tables
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-with-dbt/materialization-in-your-dbt-project?u=76281980&t=95)** because they're just used to help prepare us for our final tables, which are going to be view, so we don't want our users to see it. And finally, our gold tables are going to be materialized as tables because their metrics being used by downstream people. So we want that data available as quickly as possible. So let's go bill us in our DBT project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Storage]] (1), [[Data Pipelines]] (1)
> **Env Vars:** dbt (6)
> **Speakers:** - [instructor] (1)

#### [Implement materialization in your dbt_project.yml file](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980&t=0)** - [Instructor] Now that we know how we want to set up our materialization for our DBT project, we have to go to the DBT project YAML file once again to set up our configurations. So let's head over there. On the left, I went to our DBT project yaml and we're going to go all the way to the bottom to the models section and we're going to update it from this. And I'm going to copy and paste it and explain what it is. But you'll have this file available to you. So let's break down what's happening here. We're saying in our NYC parking violations project, our example table, we want to materialize as ephemeral. We don't want to see it anymore 'cause it's not useful for us. For our bronze table, it's going to be a view for a silver table for this table going to be ephemeral. This table's going to be ephemeral, but then for these two tables we're make a view. And then finally the gold we're going to have as table. Something I want to highlight here is you notice how the silver tables, I'm calling out the specific models. That's because I have differential materialization patterns. I want, if I didn't have that, I can set it to a single one, such as table or view or ephemeral because I want all those tables to be that way. So now that we have our materialization set up in our project, let's go run DBT and see what that looks like. Let's make sure we're in the right directory. Run DBT debug, DBT compile, and finally DBT Run. Awesome. And something I really want to highlight here is
>
> **[1:36](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980&t=96)** that in the previous video we had more DBT models showing in the run, but now we have less here. Why is that? Well, we have the ephemeral models for neutralization now specifically, for example, and these two silver tables. So looking at the run logs here, we have the bronze, bronze, two silver, and two gold. Our ephemeral ones are not here, so we know our materialization worked. Great job, in our next video we're going to see one of my favorite things about DVT, its documentation features.

> [!info]- Semantic Content
>
> **Env Vars:** dbt (8), yaml (1), nyc (1), dvt (1)
> **CLI Commands:** make (2), go run (1)
> **Prerequisites:** set up (3)
> **Cross-References:** previous video (1), next video (1)
> **Analogies:** such as (1), for example (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 9. Documentation as Code via dbt

[↑ Back to Table of Contents](#table-of-contents)

#### [Further documentation via schema.yml file](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=0)** - [Instructor] Documentation is huge in data. It's how you understand what data you're using, how it connects to other projects, and more importantly, it keeps everyone informed on the team. The thing is, to maintain documentation is super hard and cumbersome. And this is why I love dbt because now you have documentation as code. When I was trying to get buy-in for implementing dbt at my previous company, the documentation component was the major selling point that got my boss to say yes. So let's check it out again. Remember to go to our directory, dbt docs generate and dbt docs serve. So now we have our project, we can see our various models, and in addition, with our materialization methods, we can also see how it's materialized. One thing I want to highlight here is when we're going into this data, we now see the documentation, but it's really blank. There's no information there. And so even though we have the documentation, we still need to fill it out. And so dbt makes this relatively easy to do. To exit out of the docs, you do Control + C. Exit out of there. And the way you add documentation is through a schema file. And so to create a schema file, we're going to create a new folder within our models
>
> **[1:37](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=97)** called Docs and it can be called anything, but I think docs is really descriptive and that's why I chose it, so mkdirmodels/docs. Great. Now that it's there, we need to create the schema.yaml file. Now this name is required, so touchmodels/docs/schema.yaml,
>
> **[2:07](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=127)** and now we have our file. And so the way it's structured, I'm going to copy and paste it in. But again, you'll have access to this. So let's [[Zoom]] out just a quick bit. And as you can see, we have, remove that, as you can see, we have our models and we say the name, which is the model name. We give a description of the data, and then we set the columns and then we follow again with adding the name of the column and description of the column. So now let's run dbt docs generate dbt docs serve
>
> **[2:53](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=173)** and now we can see our descriptions.
>
> **[3:02](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=182)** And you may be wondering, well, this seems awesome, but you still have to write a lot of the documentation in there. That is true. But in our next step, I'll show you about doc blocks where you can actually create variables that you can use throughout your entire project so you don't have to repeat typing things over and over again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (1)
> **Documentation:** the documentation (4), the docs (1)
> **File Paths:** schema.yaml (1), touchmodels/docs/schema.yaml (1)
> **UI Navigation:** go to (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### [The docs_blocks.md file](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=0)** - [Instructor] Now, I'm going to introduce you to doc blocks. Doc blocks are essentially creating variables that you can pass along your DBT project documentation. And I'll quickly show you what that looks like. So I'll create a new text file, and here's a great way to think about them. If you're familiar with [[Python (Programming Language)|Python]], you know you can create a variable and assign it a value such as a string. That's a similar thing happening here. With doc blocks we're using a ginga, again called docs, where we set the name as example name and then we add the text, this is example text, and then we end it here. And now we can pass this variable throughout our project. So, let's create our doc blocks file, make sure we're in the right directory. Touch models docs docs blocks.md.
>
> **[0:59](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=59)** And dot md stands for markdown and that's what DBT uses to understand. So let's do a quick doc block for our violation code. Add it right here, copy and paste. So we have a ginga function, docs, it's called violation code and it says the standardized code of the violation. Now let's go back to our schema.yaml file over here and for violation code, now we can completely replace this description with our doc block. So it's going to be in quotes, curly bracket, curly bracket, space doc, parentheses, double quote, violation_code. Very important, you can get into errors if you have these as a single quote and a single quote, they need to be different so it knows the difference. Awesome. So now that's ready, we can run our docs again and we'll see the doc block will have the same exact documentation for violation code. So DBT docs generate, DBT docs serve. So now going back into here models bronze violation codes and we see for violation code it's still the same, but now we've used the variable. And this is extremely powerful because in engineering best practices it's called dry, don't repeat yourself.
>
> **[2:32](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=152)** Because if I had to say rename the violation code and change the description and I use it in five or six different areas throughout the code, that means I'll have to go into the code in multiple different areas and change it. This ensures that I only need to change it in the doc blocks.md file will change throughout the whole entire project, which is extremely powerful and makes sure to reduce bugs. Now control C, exit out of there. One of the files I've included within the project is a completely filled out docs blocks and schema.yaml file, 'cause I'm not going to make you write this all out. It takes a while to do sometimes. So I'm going to delete the ones we just created and I'm going to copy these into the file.
>
> **[3:29](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=209)** And spend some time just exploring the files to understand how it works, get a good feeling for all of them, but now I'm going to do DBT docs generate and DBT docs serve and you can see the entire setup for documentation.
>
> **[3:50](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=230)** And as we can see, we have documentation for all of our tables now. And I want to highlight one of the key values that we use throughout the entire project is summons number. So let's go into that file again. Let's go doc blocks and let's look up summons number right here, unique identifier that we use for so many tables. And go for schema.yaml, look up summons number, and we see we have it four different times through our project, but we only have to write the definition once in passing these variables. And that's why doc blocks with schema is so powerful for DBT and DBT's amazing for documentation 'cause now we have all this code that's version controlled. That completes our documentation section and our next video we're going to learn how to set up tests for our DBT project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Env Vars:** dbt (9)
> **File Paths:** schema.yaml (3), blocks.md (2)
> **CLI Commands:** make (2), python (1)
> **Cross-References:** go back to (1), next video (1)
> **Definitions:** stands for (1), is a  (1)
> **Prerequisites:** setup (1), set up (1)
> **Code Identifiers:** violation_code (1)


### 10. Implementing Tests within Your dbt Project

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating custom singular tests](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=0)** - [Instructor] Now we're going to implement tests for our dbt project. Just to give you a high overview of what they are, I highly recommend checking out the dbt documentation, it's really great. But there are singular tests, generic tests, and then also among the generic tests, there's some out-of-the-box tests, such as unique, not_null, accepted_values, and relationships. We're going to implement a singular test, a generic test, and a couple of these out-of-the-box tests. So going back into here. So let's first create a singular test. To do so, we're going to go into our tests folder. And you see, we only have a gitkeep file, we don't have any test files. So to do such, we're going to create a new file via touch. We're going to go into our nyc_parking_violations directory, and then we're going to create a file within our test folder via touch tests/violation_codes_revenue.[[SQL]].
>
> **[1:04](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=64)** And that name will make sense soon. So we can see we have that. And the test for these singular tests are just SQL files. And what's going to happen is, it's going to say, "Hey, if this SQL returns any values, then it's going to fail this test or warn." So, we're first going to do a SQL query. I'm going to copy and paste it into here, and break it down. And so what we're doing is say we're going to select the violation codes, we're going to group by it, and then sum to get the total fee, USD, for those. For that we should say, "Hey, for our violation codes, they should all have a fee associated with them. And if it's not greater than or equal to one, return the value." And so, what that'll do is now that that's saved, we can run dbt tests, which is the new command for the [[CLI]]. It's dbt test, not tests, silly me. And now we can see that we have a failure because there is a value in there that didn't pass, specifically the violation_codes_revenue. So let's go into our code and understand what's happening here. So, go into our SQL query file. And now, let's take this code and see what's happening. And since you're nine dbt for this,
>
> **[2:37](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=157)** we have to remove the ref statement because DuckDB has no idea what that is. And run that. And we can see violation code 41 has zero revenue for it. So, that is a potential error. Well, we can also have it where, maybe we don't want it to fail, maybe we want to just warn that everything is okay. So, what we do is we use a Jinja feature called config. So, in the file, curly bracket, config, and we do severity, equals, warn. And now, instead of a error, we should get a warning. So, let's run dbt test again. And see, we now have a warning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[CLI]] (1)
> **Env Vars:** sql (4), usd (1), cli (1)
> **Code Identifiers:** violation_codes_revenue (2), not_null (1), accepted_values (1), nyc_parking_violations (1)
> **Definitions:** is a  (2)
> **Warnings:** warning (2)
> **File Paths:** tests/violation_codes_revenue.sql (1)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)

#### [Implementing tests within the schema.yml file](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=0)** - [Instructor] In addition to the singular custom tests, we can also implement tests via the schema.yml file. So let's go into there right here. And let's use the generic tests that are prebuilt in dbt that are out of the box. So let's go into bronze_parking_violation. And for summons_number, let's add some tests. Specifically, you just go into here. On your description, put tests, tab, and then unique, and not_null. And so essentially what we're saying here is, in the bronze_parking_violations table, specifically the summons_number columns, we want to run the tests, make sure every value is unique, and also make sure there's no null value. So let's run it in our dbt project. So, make sure in the right directory. cd. And now we're going to run dbt test. And as we can see, we can see our tests in there as well, the additional ones we added. But also, remember dbt said that you can create your own generic tests. Now, I won't go too deep into that, but let's break down what this not_null one is as a generic test. So what we're going to do is we're going to go into our directory, and within the test, we're going to create a new folder called generic. Make sure we're in the right directory. Cool. Then we do make directory, tests/generic. We have that folder over there, and now we're going to create the file. touch test/generic.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=94)** And we're going to create generic_not_null.[[SQL]].
>
> **[1:43](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=103)** And now we have our file on there. And so, essentially, what's happening is, we're going to use another Jinja function. I'm going to copy and paste what I have here. And this is sourced directly from the dbt documentation, and so I have that link right here. But essentially is, we're going to create a Jinja test. We're going to give it the name generic_not_null. We're going to say, "Hey, we're going to have the model and the column name." And so we're going to say select * from model, column_name where it's not_null. And then we're going to end the test. And so going back to our schema.yml file, we simply can just say generic_not_null, and bring in our test here. So now that that's ready, let's do dbt test. And there you have it, it's there. We have our generic_not_null test happening. But say, for instance, we want to store our test and say, "Hey, all right, I've have these tests, I want to see the output of it." Well, we go back to our dbt_project.yml file. And we create a new value called tests. And we're going to say store_failures, true. Great. Now that it's ready, we can do dbt test again. And we can see our test failures over here in main_dbt_test__audit codes. So, let's take this code right here.
>
> **[3:18](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=198)** Let's go into our run_sql_queries. And let's replace our SQL code with what it provided. And now we can see the output code of that. And there you go. That's how you run tests in dbt. And finally, we've completed our dbt project. We have it set where we have all our models running, we have documentation, and we have tests. And the final step with our complete dbt project, we'll now put it into production.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2)
> **Code Identifiers:** generic_not_null (4), not_null (3), summons_number (2), bronze_parking_violation (1), bronze_parking_violations (1)
> **CLI Commands:** make (5), cd (1)
> **File Paths:** schema.yml (2), generic_not_null.sql (1), dbt_project.yml (1)
> **Env Vars:** sql (1)
> **Cross-References:** go back to (1)
> **Definitions:** essentially is (1)
> **Analogies:** for instance (1)


### 11. Deploying Your dbt Project

[↑ Back to Table of Contents](#table-of-contents)

#### [Utilizing multiple dbt profiles](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=0)** - [Instructor] Now that we've completed our entire DBT project, we're ready to move into production. How exciting. Well, we have one small problem though. If we go into our profiles dot YAML file over here, we can see that we only have dev. And if you're having a production database and anyone can change it easily, just doing DBT Run, it's not really a safe database to use. So what we need to do is we need to create a separate database for prod and create a separate profile for prod and DBT makes that relatively easy to do. So to do such, I'm going to copy and paste it in here and I'll provide this file to you so you have it. And so essentially what's happening here is we have NYC parking violations for our outputs we have Dev, DuckDB, and the path to it. And similar we have Prod DuckDB and the path to it. So to create this project, since you're creating a whole new DuckDB database called Prod NYC parking violations, we have to create a new database again. But we did that before in the way earlier steps and we'll do it again. And so we have our DuckDB instance set up and I'm going to create a new cell for us to work in. And it's going to be the same thing as the earlier steps. So I'll copy and paste it in. So you can see again our first import. We're going to pull in the CSV in our data file, in our data folder for first import. We're going to have our second import right here for our second CSV.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=95)** And then we're going to use the with DuckDB connect. And again, we're going to change the name of the database to prod underscore NYC parking violations. So run that and we can see our new database available. So now let's run our DBT model. So make sure we're in the right directory. DBT debug perfect and then DBT compile. But we're going to do something a little different this time. We're going to change the target. And so we're going to do dash dash target prod. Perfect. And now do DBT run dash dash target prod. And there we go, we now have our production database set up for us and we can go check it out for ourselves. So let's set up our [[SQL]] queries, copy and paste this over here, bring it down. And let's make sure to change this to prod show tables. And again, we have our tables and so now we can choose which ones you want to go for which rephrase. We can choose which database we want to choose within DBT with the various profiles. In our next video, we're going to create a [[GitHub]] actions workflow that'll do this entire thing automatically. It's super cool, so let's get over there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[GitHub]] (1)
> **Env Vars:** dbt (8), nyc (3), csv (2), yaml (1), sql (1)
> **Prerequisites:** set up (3)
> **CLI Commands:** make (2)
> **Cross-References:** next video (1)
> **Tools:** github (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Deploying with GitHub workflows](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=0)** - [Lecturer] So we have our production database, and for our profiles, we have our production profile. So how do we get this to run automatically without our own intervention? Well, there are multiple ways to do this, and it's really dependent on your database and the systems you have. So this won't be a one size fit all solution and you're going to have to research what you do for that. But for this course, we're going to keep it simple and use [[GitHub]] Actions workflows. And to do that, we already have it set up and we have .github and workflows and we're going to add a new workflow in here. So to create a new one, let's go to a terminal. Let's go to our terminal, let's check what directory you're currently in. And note that you can't see .github 'cause it has a dot, so that means it's a hidden file. touch .github workflows, and then we're going to call this run-dbt-prod.yml.
>
> **[0:59](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=59)** And so we have that here. And I'm going to copy and paste what this file is. Again, this is more on the advance side, but I still want to show how it looks end to end for you so you have reference. I would study this file that's going to be included and check out other documentation and articles throughout the internet that really walks you through how to do this. But at a high level, I'm going to [[Zoom]] out a little bit and we have our name and then we say on push or pull request, so when we make a new pull requests and merge it. And then I have here schedule, you can have it scheduled right here to run at 8:00 AM every single day. The reason why I have this commented out is I don't want this running indefinitely without you knowing about it. So it's commented out. But just so you know, you can schedule them. I have it working with merging and pulling branches. For environment, we set the directory for our profiles and our project for our DBT project. And then we have the job. We're going to build a [[Python (Programming Language)|Python]] setup and we're going to install our dependencies. Hence why we had to create requirements, that text file earlier. And then once that's in, we're going to run DBT debug, compile with prod, run with prod, and there are tests for prod. So, now that's there, we're going to merge this into our code space. And do such, we just have to slide on over here. We have all our files, let's add them all in. So we've staged all of our changes. We're going to commit them all. We're going to have a little message here saying, added github workflows.
>
> **[2:33](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=153)** And now we're going to commit. And now let's publish the branch. We're going to create a pull request. We're going to merge into main, and now we're going to create it. And as you can see, we can merge our pull request, Merge Pull Requests, Create Merge Commit. Great. So let's go to our workflow. And you see I've already merged it. And now, let's go to our Actions. And you can see it's now running in the background here. So we can click build and you can see it's set up the job, it's installing dependencies, and now it's going to run the DBT actions. And so this failed and that's intentional. And I want to highlight why did this fail here. So let's go back to our pull request here. Go back to here. And what's happening is in our profiles.yml file, we're saying that the path is here, but GitHub Actions isn't starting from the nyc_parking_violations table. It's actually starting from the root directory. So to fix it, we just have to do this little change right here. Now that's saved, we can do another commit. So let's add this. It's staged. And updated profiles.yml file.
>
> **[4:12](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=252)** Commit. We're going to create a new pull request. Create. Updated profiles.yml file. And now we're going to merge this. Confirm merge. Awesome. So now let's go back to our Actions and we can see, let's delete this one real quick, Cancel run, and we can see it running now and it should be as successful all the way through. And you see that all checks have passed. And in addition, we can even see the test and it picks up on that warning as well. And there you have it, you've completed your DBT project and we've now put it into production. And that's it. Thank you so much.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (6), [[Zoom]] (1), [[Python (Programming Language)|Python]] (1)
> **Tools:** github (6), terminal (2)
> **File Paths:** profiles.yml (3), run-dbt-prod.yml (1)
> **Env Vars:** dbt (4)
> **UI Navigation:** go to (4)
> **Prerequisites:** set up (2), setup (1), install (1)
> **Cross-References:** go back to (3)
> **CLI Commands:** make (1), python (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/data-engineering-with-dbt/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/next-steps?u=76281980&t=0)** - And that's a wrap. Thank you so much for taking this dbt course with me. In this course, you learned how to set up a dbt project, how to set up a database, connect the dbt project to the database, and then build the medallion architecture with the New York City tickets data. I really appreciate you taking the time 'cause the best way to learn is through coding itself, and we did that. You can learn more about work I do by following me on [[LinkedIn]], or you can go to my website [onthemarkdata.com](https://onthemarkdata.com). Or if you want more content from me, check out my Substack, scalingdataops, where I interview data leaders about scaling data infrastructure. See you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Prerequisites:** set up (2)
> **URLs:** [onthemarkdata.com](https://onthemarkdata.com) (1)
> **UI Navigation:** go to (1)
> **Speakers:** - and (1)


## Instructor

- [[Mark Freeman]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/data-engineering-with-data-build-tool-dbt-4458303/codespaces)

## Skills Covered

- Data Engineering
- Data Build Tool (DBT)

## Path Context

### In [[Advance Your Data Engineering Skills]]
**1 of 10** | [[Problem-Solving Strategies for Data Engineers]] →

### In [[Data Engineering Hands-On Practice]]
← [[Complete Guide to Python for Data Engineering- From Beginner to Advanced]] | **4 of 7** | [[ETL in Python and SQL]] →

## Appears In

- [[Advance Your Data Engineering Skills]]
- [[Data Engineering Hands-On Practice]]

## Related Courses

_Courses sharing skills:_

- [[Data Engineering- dbt for SQL]] — Data Engineering, Data Build Tool (DBT)
- [[Databricks Certified Data Engineer Associate Cert Prep]] — Data Engineering
- [[Big Data Analytics with Hadoop and Apache Spark]] — Data Engineering
- [[Transition from Data Science to Data Engineering]] — Data Engineering
- [[Introduction to Modern Data Engineering with Snowflake]] — Data Engineering

---

[↑ Back to top](#)