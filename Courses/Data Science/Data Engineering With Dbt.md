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
created: 2026-04-29
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
  - Build your first dbt project
  - Introducing the dbt project
  - The project in GitHub Codespaces
- [**1. Prepare Your Coding Environment**](#1-prepare-your-coding-environment) (4 videos)
  - Install the dbt Core via pip
  - Install the dbt connector to DuckDB
  - Install DuckDB via pip
  - Update your requirements.txt file within your project
- [**2. Prepare Your Database Environment**](#2-prepare-your-database-environment) (2 videos)
  - Create your database file
  - Import CSV data into your new database
- [**3. Create a dbt Project**](#3-create-a-dbt-project) (1 videos)
  - Start your project with dbt init
- [**4. Prepare Your dbt Environment**](#4-prepare-your-dbt-environment) (3 videos)
  - Understand the dbt_project.yml file
  - Create your profiles YAML file
  - Connect your profiles and project YAML files
- [**5. Your First dbt Model**](#5-your-first-dbt-model) (2 videos)
  - Create your first dbt model file
  - Using the dbt CLI commands
- [**6. Introduction to dbt Ref Function**](#6-introduction-to-dbt-ref-function) (3 videos)
  - Create your dbt model utilizing ref
  - Run your dbt models with the ref syntax
  - View your dbt project data lineage
- [**7. Implementing Medallion Architecture with dbt**](#7-implementing-medallion-architecture-with-dbt) (4 videos)
  - Planning your medallion architecture project
  - Medallion architecture: Bronze data
  - Medallion architecture: Silver data
  - Medallion architecture: Gold data
- [**8. Materialization of dbt Models**](#8-materialization-of-dbt-models) (2 videos)
  - Materialization in your dbt project
  - Implement materialization in your dbt_project.yml file
- [**9. Documentation as Code via dbt**](#9-documentation-as-code-via-dbt) (2 videos)
  - Further documentation via schema.yml file
  - The docs_blocks.md file
- [**10. Implementing Tests within Your dbt Project**](#10-implementing-tests-within-your-dbt-project) (2 videos)
  - Creating custom singular tests
  - Implementing tests within the schema.yml file
- [**11. Deploying Your dbt Project**](#11-deploying-your-dbt-project) (2 videos)
  - Utilizing multiple dbt profiles
  - Deploying with GitHub workflows
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Build your first dbt project
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/build-your-first-dbt-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/build-your-first-dbt-project?u=76281980&t=0)** - Are you buried under a bunch of SQL queries?
>
> **[0:02](https://www.linkedin.com/learning/data-engineering-with-dbt/build-your-first-dbt-project?u=76281980&t=2)** You have different data assets, complex business logic, and all these different people asking you for data.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-with-dbt/build-your-first-dbt-project?u=76281980&t=8)** That's where I found myself in my last job at a startup, where we had a really complex analytical database.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-with-dbt/build-your-first-dbt-project?u=76281980&t=13)** To reduce that complexity, we used data build tool, also known as dbt.
>
> **[0:18](https://www.linkedin.com/learning/data-engineering-with-dbt/build-your-first-dbt-project?u=76281980&t=18)** I led that migration at the company, and it changed the way I thought about data, and I hope it can work for you too.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-with-dbt/build-your-first-dbt-project?u=76281980&t=25)** In this course, I'll teach you how to set up a dbt project, how to set up a database, and how to connect your dbt project to that database.
>
> **[0:33](https://www.linkedin.com/learning/data-engineering-with-dbt/build-your-first-dbt-project?u=76281980&t=33)** Then we'll use real-world data to set up our own data workflows with dbt.
>
> **[0:38](https://www.linkedin.com/learning/data-engineering-with-dbt/build-your-first-dbt-project?u=76281980&t=38)** Hi, my name's Mark Freeman, and I've been a data scientist turn data engineer, and for the next few videos in this course, I'm now going to be your personal mentor, where we're going to pair program and build this project together.
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-with-dbt/build-your-first-dbt-project?u=76281980&t=50)** So let's get coding.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (3)
> **Code Keywords:** let (1)
> **Env Vars:** sql (1)
> **Definitions:** known as (1)
> **Speakers:** - are (1)

#### Introducing the dbt project
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/introducing-the-dbt-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/introducing-the-dbt-project?u=76281980&t=0)** - [Instructor] In the previous video, I told you that we're going to be pair programming together on our very own dbt project.
>
> **[0:06](https://www.linkedin.com/learning/data-engineering-with-dbt/introducing-the-dbt-project?u=76281980&t=6)** So now, I'm super excited to share with you the scenario that I've created for us to kind of go through and learn about dbt.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-with-dbt/introducing-the-dbt-project?u=76281980&t=13)** In this project, we're both data engineers that have been tasked with transforming the raw New York City parking violation data into the medallion architecture for our company's data lakehouse.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-with-dbt/introducing-the-dbt-project?u=76281980&t=25)** Our team has decided to use dbt Core to implement this project as it allows you to use software engineering best practices for our SQL transformations.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-with-dbt/introducing-the-dbt-project?u=76281980&t=34)** In this diagram, you see what's called the medallion architecture, which is broken up to three separate parts, bronze, silver, and gold.
>
> **[0:44](https://www.linkedin.com/learning/data-engineering-with-dbt/introducing-the-dbt-project?u=76281980&t=44)** In the bronze data, we typically have raw data that we bring into our analytical database.
>
> **[0:49](https://www.linkedin.com/learning/data-engineering-with-dbt/introducing-the-dbt-project?u=76281980&t=49)** The silver data is the raw data transformed into a data model of our desire.
>
> **[0:56](https://www.linkedin.com/learning/data-engineering-with-dbt/introducing-the-dbt-project?u=76281980&t=56)** And the gold data is the metrics data that we built on top of our data model.
>
> **[1:01](https://www.linkedin.com/learning/data-engineering-with-dbt/introducing-the-dbt-project?u=76281980&t=61)** The dataset we're using is the New York City parking violations issued for fiscal year 2023, and the New York City Department of Finance parking violation codes, which is essentially the metadata about the violations.
>
> **[1:15](https://www.linkedin.com/learning/data-engineering-with-dbt/introducing-the-dbt-project?u=76281980&t=75)** I quickly want to note that this dataset is massive, like millions and millions of rows, but for this project we've created a small sample, so it's easy to work with.
>
> **[1:26](https://www.linkedin.com/learning/data-engineering-with-dbt/introducing-the-dbt-project?u=76281980&t=86)** So let's quickly check out what this data looks like.
>
> **[1:30](https://www.linkedin.com/learning/data-engineering-with-dbt/introducing-the-dbt-project?u=76281980&t=90)** This data is sourced from the NYC Open Data, which is government dataset that's public to anyone to use, and I think it's a great resource for personal projects such as this.
>
> **[1:41](https://www.linkedin.com/learning/data-engineering-with-dbt/introducing-the-dbt-project?u=76281980&t=101)** We can quickly see the data from there.
>
> **[1:44](https://www.linkedin.com/learning/data-engineering-with-dbt/introducing-the-dbt-project?u=76281980&t=104)** And as I stated, there's 21 million rows for this dataset, which is wild.
>
> **[1:50](https://www.linkedin.com/learning/data-engineering-with-dbt/introducing-the-dbt-project?u=76281980&t=110)** If you try to download that, you might break your computer.
>
> **[1:53](https://www.linkedin.com/learning/data-engineering-with-dbt/introducing-the-dbt-project?u=76281980&t=113)** That's why we're doing it super simple and having the sample.
>
> **[1:58](https://www.linkedin.com/learning/data-engineering-with-dbt/introducing-the-dbt-project?u=76281980&t=118)** In addition, we have the actual codes themselves.
>
> **[2:02](https://www.linkedin.com/learning/data-engineering-with-dbt/introducing-the-dbt-project?u=76281980&t=122)** And this is a much smaller dataset, only 100, but it's super useful, because now, we have the different metadata to inform us what our codes should look like.
>
> **[2:15](https://www.linkedin.com/learning/data-engineering-with-dbt/introducing-the-dbt-project?u=76281980&t=135)** Now that we know the project we're building and the datasets we're using, let's start pair programming together in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** super (3), let (2), public (1), this. (1)
> **Env Vars:** sql (1), nyc (1)
> **Cross-References:** previous video (1), in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### The project in GitHub Codespaces
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/the-project-in-github-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/the-project-in-github-codespaces?u=76281980&t=0)** - [Instructor] Welcome to our coding environment.
>
> **[0:03](https://www.linkedin.com/learning/data-engineering-with-dbt/the-project-in-github-codespaces?u=76281980&t=3)** For this project, we're using GitHub Codespaces which you can access in a link right below this video in the course.
>
> **[0:09](https://www.linkedin.com/learning/data-engineering-with-dbt/the-project-in-github-codespaces?u=76281980&t=9)** GitHub Codespaces allows us to abstract away the coding environment, which as you know, as an engineer, can make it very difficult to set up a project or learn from a tutorial.
>
> **[0:22](https://www.linkedin.com/learning/data-engineering-with-dbt/the-project-in-github-codespaces?u=76281980&t=22)** By skipping all that stuff, we can just focus on learning about dbt Core.
>
> **[0:26](https://www.linkedin.com/learning/data-engineering-with-dbt/the-project-in-github-codespaces?u=76281980&t=26)** And if you haven't used this before, that's completely okay 'cause I'll quickly walk you through what we have on the side.
>
> **[0:32](https://www.linkedin.com/learning/data-engineering-with-dbt/the-project-in-github-codespaces?u=76281980&t=32)** So we have our project here, and we have these files for configurations, which you don't really need to worry about.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-with-dbt/the-project-in-github-codespaces?u=76281980&t=39)** What we are going to focus on are the data files.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-with-dbt/the-project-in-github-codespaces?u=76281980&t=43)** We also have some assets that we'll use later in the course, such as these.
>
> **[0:48](https://www.linkedin.com/learning/data-engineering-with-dbt/the-project-in-github-codespaces?u=76281980&t=48)** In addition, we have a notebook where we'll be running our SQL queries.
>
> **[0:53](https://www.linkedin.com/learning/data-engineering-with-dbt/the-project-in-github-codespaces?u=76281980&t=53)** Right now, it won't work because we haven't setup our database, but that'll be happening soon.
>
> **[0:57](https://www.linkedin.com/learning/data-engineering-with-dbt/the-project-in-github-codespaces?u=76281980&t=57)** The rest of it is pretty blank, and that's very intentional because we're going to be building our dbt project from scratch and adding to this as we go along the course.
>
> **[1:07](https://www.linkedin.com/learning/data-engineering-with-dbt/the-project-in-github-codespaces?u=76281980&t=67)** So let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (1), let (1)
> **Tools:** github (2)
> **Prerequisites:** set up (1), setup (1)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Cross-References:** later in (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. Prepare Your Coding Environment

> [↑ Back to Table of Contents](#table-of-contents)

#### Install the dbt Core via pip
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-core-via-pip?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-core-via-pip?u=76281980&t=0)** - [Instructor] So we have an empty project and the first thing we're going to do is download DBT, specifically DBT Core.
>
> **[0:09](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-core-via-pip?u=76281980&t=9)** If you're used to Python, then you'll be familiar with using PIP to install packages.
>
> **[0:14](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-core-via-pip?u=76281980&t=14)** Simply do PIP install DBT Core.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-core-via-pip?u=76281980&t=21)** And we also want to specify the version so that way we're all working on the same packages.
>
> **[0:27](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-core-via-pip?u=76281980&t=27)** So I do 1.6.1.
>
> **[0:29](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-core-via-pip?u=76281980&t=29)** Run that, and now it's in there.
>
> **[0:32](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-core-via-pip?u=76281980&t=32)** But to make sure that we have it, we can use the PIP show.
>
> **[0:36](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-core-via-pip?u=76281980&t=36)** And so PIP show DBT Core and we'll get information about the package we have from there.
>
> **[0:47](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-core-via-pip?u=76281980&t=47)** And now it's confirmed.
>
> **[0:48](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-core-via-pip?u=76281980&t=48)** We have DBT Core installed into our environment.

> [!info]- Semantic Content
>
> **Env Vars:** dbt (5), pip (4)
> **CLI Commands:** pip (4), python (1), make (1)
> **Prerequisites:** install (2)
> **Versions:** 1.6.1 (1)
> **Speakers:** - [instructor] (1)

#### Install the dbt connector to DuckDB
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-connector-to-duckdb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-connector-to-duckdb?u=76281980&t=0)** - [Instructor] Now that we've installed DBT Core, we have also now need to install DBT DuckDB.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-connector-to-duckdb?u=76281980&t=8)** And you may be asking wait, I thought we just installed DBT.
>
> **[0:12](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-connector-to-duckdb?u=76281980&t=12)** Well, we have to do it again.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-connector-to-duckdb?u=76281980&t=13)** DBT core is kind of the foundational package and we have various connectors to different databases within the data ecosystem.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-connector-to-duckdb?u=76281980&t=21)** But for this one, we're using DuckDB.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-connector-to-duckdb?u=76281980&t=25)** I wouldn't worry too much about the types of databases, it's going to be dependent on your company, but you can look at the documentation of DuckDB for yourself if you're interested.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-connector-to-duckdb?u=76281980&t=34)** But to install this for DBT similar PIP install DBT DuckDB and again, reference the version we want to use 1.6 0. run it and success.
>
> **[0:54](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-connector-to-duckdb?u=76281980&t=54)** Now let's make sure it works.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-connector-to-duckdb?u=76281980&t=55)** So again, PIP show, DBT DuckDB and success.
>
> **[1:06](https://www.linkedin.com/learning/data-engineering-with-dbt/install-the-dbt-connector-to-duckdb?u=76281980&t=66)** We see it working and we have it all set up.

> [!info]- Semantic Content
>
> **Env Vars:** dbt (7), pip (2)
> **Prerequisites:** install (3), set up (1)
> **CLI Commands:** pip (2), make (1)
> **Code Keywords:** let (1)
> **Versions:** 1.6 (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### Install DuckDB via pip
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/install-duckdb-via-pip?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/install-duckdb-via-pip?u=76281980&t=0)** - [Instructor] Our final package that we're going to install is DuckDB itself.
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-with-dbt/install-duckdb-via-pip?u=76281980&t=5)** There's DBT DuckDB, and then there's DuckDB.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-with-dbt/install-duckdb-via-pip?u=76281980&t=8)** What's the difference?
>
> **[0:10](https://www.linkedin.com/learning/data-engineering-with-dbt/install-duckdb-via-pip?u=76281980&t=10)** One is the connection to DBT.
>
> **[0:12](https://www.linkedin.com/learning/data-engineering-with-dbt/install-duckdb-via-pip?u=76281980&t=12)** The other one is for the actual database itself and using it with Python.
>
> **[0:17](https://www.linkedin.com/learning/data-engineering-with-dbt/install-duckdb-via-pip?u=76281980&t=17)** So quickly install it.
>
> **[0:18](https://www.linkedin.com/learning/data-engineering-with-dbt/install-duckdb-via-pip?u=76281980&t=18)** PIP install DuckDB and the version we're going to be using is 0.90.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-with-dbt/install-duckdb-via-pip?u=76281980&t=31)** And again, let's check if it works.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-with-dbt/install-duckdb-via-pip?u=76281980&t=34)** PIP show DuckDB and we have it there.
>
> **[0:41](https://www.linkedin.com/learning/data-engineering-with-dbt/install-duckdb-via-pip?u=76281980&t=41)** We now have all of our packages installed.

> [!info]- Semantic Content
>
> **Env Vars:** dbt (2), pip (2)
> **CLI Commands:** pip (2), python (1)
> **Prerequisites:** install (3)
> **Code Keywords:** let (1)
> **Versions:** 0.90 (1)
> **Speakers:** - [instructor] (1)

#### Update your requirements.txt file within your project
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/update-your-requirements-txt-file-within-your-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/update-your-requirements-txt-file-within-your-project?u=76281980&t=0)** - [Instructor] Now that we've installed all of our packages, again, I'm not teaching you how to use DBT, I'm teaching you how to use DBT for a production project.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-with-dbt/update-your-requirements-txt-file-within-your-project?u=76281980&t=8)** And you can't have a production project without requirements.text file.
>
> **[0:12](https://www.linkedin.com/learning/data-engineering-with-dbt/update-your-requirements-txt-file-within-your-project?u=76281980&t=12)** And so let's go scroll over to the side.
>
> **[0:15](https://www.linkedin.com/learning/data-engineering-with-dbt/update-your-requirements-txt-file-within-your-project?u=76281980&t=15)** And we can see this here.
>
> **[0:18](https://www.linkedin.com/learning/data-engineering-with-dbt/update-your-requirements-txt-file-within-your-project?u=76281980&t=18)** I have already added it to here, so that way our projects is simple to use for everyone.
>
> **[0:24](https://www.linkedin.com/learning/data-engineering-with-dbt/update-your-requirements-txt-file-within-your-project?u=76281980&t=24)** But if this would be blank, if you had your own project, and similarly, you would just add the packages for there.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-with-dbt/update-your-requirements-txt-file-within-your-project?u=76281980&t=31)** And what makes this powerful is now for any environment, you do the requirements.text file, and start your packages.
>
> **[0:38](https://www.linkedin.com/learning/data-engineering-with-dbt/update-your-requirements-txt-file-within-your-project?u=76281980&t=38)** And now everyone has the same packages as you.
>
> **[0:41](https://www.linkedin.com/learning/data-engineering-with-dbt/update-your-requirements-txt-file-within-your-project?u=76281980&t=41)** This may not seem big for this project, but when you're working with hundreds of people over different teams, this makes all the difference.

> [!info]- Semantic Content
>
> **Env Vars:** dbt (2)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)


### 2. Prepare Your Database Environment

> [↑ Back to Table of Contents](#table-of-contents)

#### Create your database file
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=0)** - [Instructor] We now have all of our packages installed for our project, and now we have to create our database.
>
> **[0:06](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=6)** We're going to be using DuckDB, which is a relatively new database, but I think it's perfect for this project because it's lightweight, we can use in our browser, and it's great for tutorials.
>
> **[0:17](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=17)** I won't get too hung up on the exact database because again, it's dependent on your company and what you need.
>
> **[0:23](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=23)** But for this project it's very simple because I set up a Jupyter Notebook that you can run these SQL queries from.
>
> **[0:32](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=32)** DuckDB provides a Python integration, which allows you through Python or Jupyter Notebook to run your SQL queries, create your tables, various things you would do with a typical SQL interpreter.
>
> **[0:46](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=46)** So we're going to create our first database and to create databases in DuckDB, they make it very simple, where if you run a SQL query and the database doesn't exist yet, it will auto generate it for you and so let's get started.
>
> **[1:01](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=61)** I already have kind of the baseline code here, which is in the notebook file.
>
> **[1:06](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=66)** First we're going to import our packages and for your Jupyter Notebook, just make sure it's connected to the right Python interpreter.
>
> **[1:13](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=73)** VS Code does a pretty good job of letting you know what's recommended.
>
> **[1:16](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=76)** So it should be easy to through a few clicks.
>
> **[1:19](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=79)** So run it.
>
> **[1:20](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=80)** We've imported our packages and now we're going to run our SQL query.
>
> **[1:24](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=84)** Just to quickly break down, we have a string that's a SQL query.
>
> **[1:28](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=88)** In Python, You can do a multi-line string via three single quotation marks from the beginning and the end and then we connect it to DuckDB via the duckdb.connect command.
>
> **[1:43](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=103)** We then specify where we want to have our database.
>
> **[1:48](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=108)** We're going to have it in the data folder and we name it.
>
> **[1:51](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=111)** And then we rephrase it as con.
>
> **[1:54](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=114)** That's just typical terminology language they use for connecting databases.
>
> **[1:58](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=118)** You'll see throughout various documentation beyond DuckDB.
>
> **[2:02](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=122)** And then we run our SQL query with the con.SQL function.
>
> **[2:08](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=128)** Wrapped around here I also have a pandas data frame to display.
>
> **[2:13](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=133)** I personally prefer this when working in Jupyter Notebooks because I'm a visual person and this makes the data a lot easier to see.
>
> **[2:20](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=140)** I'm now going to run it and it worked successfully.
>
> **[2:25](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=145)** And now you can see on the side we have our database.
>
> **[2:29](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=149)** In addition, I did the SQL Query show tables, which in DuckDB shows, which tables are there.
>
> **[2:35](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-database-file?u=76281980&t=155)** As you see, there's nothing there because we haven't created our data yet, and that will be the next step.

> [!info]- Semantic Content
>
> **Env Vars:** sql (9)
> **CLI Commands:** python (4), make (2)
> **Tools:** jupyter (4), vs code (1)
> **Code Keywords:** from. (1), let (1), function (1)
> **File Paths:** con.sql (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** set up (1)

#### Import CSV data into your new database
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=0)** - [Instructor] We now have our DuckDB database set up and it's now time to put data within our database.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=8)** Now I'm going to copy and paste some code in here.
>
> **[0:12](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=12)** We will provide that code to you, so you don't have to worry about typing all of this yourself, but I'm going to go quickly break down how this code works and then how it looks like in DuckDB.
>
> **[0:23](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=23)** I'm going to zoom out a little bit, so you can see the total code itself, but we'll make sure to reset it.
>
> **[0:29](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=29)** So we have our two SQL queries and then we run the individual SQL queries with the with statement.
>
> **[0:36](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=36)** One thing I want to highlight is there's various ways to run the DBT SQL code.
>
> **[0:41](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=41)** The reason why I like using with is because after this cell is done running, it will automatically close out the database.
>
> **[0:52](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=52)** This may not seem important now, but when we're doing iterations of development for DBT, we are going to have to connect to the database from DBT, the Jupyter Notebook back and forth, and if one's using it, then the other one can't.
>
> **[1:05](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=65)** And so this automatically closing helps out a ton.
>
> **[1:09](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=69)** So for the first SQL query, we're going to do create or replace table.
>
> **[1:13](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=73)** I personally like using the replace as well.
>
> **[1:16](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=76)** Just in case I run this again I don't get an error message.
>
> **[1:19](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=79)** We have parking violation codes as the data set we want to import.
>
> **[1:23](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=83)** We do select * and DuckDB specific to them makes it easy to implement CSVs as tables.
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=92)** You use the read CSV auto function.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=95)** We set the path of where our CSV is at.
>
> **[1:38](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=98)** It's going to be in the data folder, and it's with this name and this is super useful, is we normalize the names as true.
>
> **[1:47](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=107)** I'm going to go to the left here and check out the actual data itself.
>
> **[1:52](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=112)** And as you can see, the names are uppercase, there are spaces, there's dots for a CSV and a sheet that's great.
>
> **[2:03](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=123)** For SQL, writing your code that's going to make your life so hard.
>
> **[2:07](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=127)** And so this quick function makes it so it's all lowercase, underscore removes all those special characters.
>
> **[2:14](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=134)** Same thing, we're going to do it, but now we're going to do this file instead.
>
> **[2:19](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=139)** So quickly zoom out again and I'm going to run this code and we have now added our tables.
>
> **[2:28](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=148)** Let's scroll back up here.
>
> **[2:32](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=152)** And when we do show tables, we can see the two tables created.
>
> **[2:36](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=156)** And as you can see, we have our parking violation codes and we have our parking violation 2023.
>
> **[2:42](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=162)** Why?
>
> **[2:44](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=164)** It's not enough to know we have the databases.
>
> **[2:45](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=165)** Let's actually see what the data looks like.
>
> **[2:49](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=169)** And so with that, I'm going to do a simple select statement.
>
> **[2:55](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=175)** Type in here, select, * FROM parking violation codes,
>
> **[3:08](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=188)** and limit five because you don't want too many rows out here.
>
> **[3:13](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=193)** I'm going to run this and we have our data.
>
> **[3:16](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=196)** How cool is that?
>
> **[3:17](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=197)** I'm a data nerd, so anytime I create my own database and get new data, I'm excited.
>
> **[3:22](https://www.linkedin.com/learning/data-engineering-with-dbt/import-csv-data-into-your-new-database?u=76281980&t=202)** So we're going to use this data for our DBT project, which we're going to create in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5), dbt (4), csv (3)
> **Code Keywords:** function (2), let (2), import. (1), super (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Tools:** jupyter (1)
> **UI Navigation:** go to (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** set up (1)


### 3. Create a dbt Project

> [↑ Back to Table of Contents](#table-of-contents)

#### Start your project with dbt init
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/start-your-project-with-dbt-init?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/start-your-project-with-dbt-init?u=76281980&t=0)** - [Instructor] We are now ready to create our DBT project.
>
> **[0:03](https://www.linkedin.com/learning/data-engineering-with-dbt/start-your-project-with-dbt-init?u=76281980&t=3)** Creating a project with DBT is simple as it has a built-in command called DBT init that'll auto generate a new DBT project with every file you need to get started, as well as the DBTs directory properly organized for you.
>
> **[0:17](https://www.linkedin.com/learning/data-engineering-with-dbt/start-your-project-with-dbt-init?u=76281980&t=17)** This is so helpful because I don't have to deal with this blank screen problem.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-with-dbt/start-your-project-with-dbt-init?u=76281980&t=21)** I just do two words and I'm all set for DBT.
>
> **[0:24](https://www.linkedin.com/learning/data-engineering-with-dbt/start-your-project-with-dbt-init?u=76281980&t=24)** So let's get started.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-with-dbt/start-your-project-with-dbt-init?u=76281980&t=25)** It's simply DBT init, and it's going to take a few seconds to run it and we'll see soon asking what's the name of the project.
>
> **[0:37](https://www.linkedin.com/learning/data-engineering-with-dbt/start-your-project-with-dbt-init?u=76281980&t=37)** We're going to name it NYC parking violations.
>
> **[0:45](https://www.linkedin.com/learning/data-engineering-with-dbt/start-your-project-with-dbt-init?u=76281980&t=45)** It's now going to ask us what database we want to use since we have the duckdb connection, that's the only option we have.
>
> **[0:51](https://www.linkedin.com/learning/data-engineering-with-dbt/start-your-project-with-dbt-init?u=76281980&t=51)** We're going to do one to signify that and now run that.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-with-dbt/start-your-project-with-dbt-init?u=76281980&t=55)** It says, no sample profile found for duckdb, and that's completely okay because duckdb is so new.
>
> **[1:00](https://www.linkedin.com/learning/data-engineering-with-dbt/start-your-project-with-dbt-init?u=76281980&t=60)** We're going to have to create that ourselves in the later step.
>
> **[1:03](https://www.linkedin.com/learning/data-engineering-with-dbt/start-your-project-with-dbt-init?u=76281980&t=63)** But for now, let's go look at the autogenerated files and folders that was created by DBT init.
>
> **[1:09](https://www.linkedin.com/learning/data-engineering-with-dbt/start-your-project-with-dbt-init?u=76281980&t=69)** We have the logs, I wouldn't worry about those, but NYC parking violations.
>
> **[1:15](https://www.linkedin.com/learning/data-engineering-with-dbt/start-your-project-with-dbt-init?u=76281980&t=75)** We have all these different folders for our DBT project.
>
> **[1:19](https://www.linkedin.com/learning/data-engineering-with-dbt/start-your-project-with-dbt-init?u=76281980&t=79)** I specifically want to highlight the models folder where we'll be spending a lot of our time in, as well as the schema and DBT project YAML file.
>
> **[1:30](https://www.linkedin.com/learning/data-engineering-with-dbt/start-your-project-with-dbt-init?u=76281980&t=90)** In the next steps, we'll go more into setting this up, but now we have our own DBT project.

> [!info]- Semantic Content
>
> **Env Vars:** dbt (10), nyc (2), yaml (1)
> **Code Keywords:** let (2), new. (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 4. Prepare Your dbt Environment

> [↑ Back to Table of Contents](#table-of-contents)

#### Understand the dbt_project.yml file
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/understand-the-dbt-project-yml-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/understand-the-dbt-project-yml-file?u=76281980&t=0)** - [Instructor] As I mentioned, DBT and NIT creates these auto-generated files and one of the most important ones is the DBT project YAML file.
>
> **[0:11](https://www.linkedin.com/learning/data-engineering-with-dbt/understand-the-dbt-project-yml-file?u=76281980&t=11)** If you're new to YAML, that's completely okay.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-with-dbt/understand-the-dbt-project-yml-file?u=76281980&t=13)** It stands for yet another markdown language.
>
> **[0:15](https://www.linkedin.com/learning/data-engineering-with-dbt/understand-the-dbt-project-yml-file?u=76281980&t=15)** Think of it as a way to quickly summarize configurations for your project.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-with-dbt/understand-the-dbt-project-yml-file?u=76281980&t=21)** It's used for DBT and many other configurations across coding platforms.
>
> **[0:27](https://www.linkedin.com/learning/data-engineering-with-dbt/understand-the-dbt-project-yml-file?u=76281980&t=27)** And the DBT project YAML file has key sections which informs your DBT project, where to look for and what actions it should take when it's running your DBT project.
>
> **[0:37](https://www.linkedin.com/learning/data-engineering-with-dbt/understand-the-dbt-project-yml-file?u=76281980&t=37)** For the first one, we have the name of our project and the version and the config version.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-with-dbt/understand-the-dbt-project-yml-file?u=76281980&t=43)** We won't have to worry about these two lines too much right now, but they come very useful when you have a very complex project that grows over time.
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-with-dbt/understand-the-dbt-project-yml-file?u=76281980&t=50)** We then have the profile, again, nyc_parking_violations, and we have the paths that DBT will look for for the various things.
>
> **[0:59](https://www.linkedin.com/learning/data-engineering-with-dbt/understand-the-dbt-project-yml-file?u=76281980&t=59)** If you look to the side, you see the models path, analysis test seeds, macros, all right here, matching.
>
> **[1:06](https://www.linkedin.com/learning/data-engineering-with-dbt/understand-the-dbt-project-yml-file?u=76281980&t=66)** In addition, we have the clean targets, which is useful, where if you have some auto-generated files that you don't need anymore, you can clean it with this.
>
> **[1:15](https://www.linkedin.com/learning/data-engineering-with-dbt/understand-the-dbt-project-yml-file?u=76281980&t=75)** And finally, the most important one that we spend the most of our time in the tutorial is the model section.
>
> **[1:22](https://www.linkedin.com/learning/data-engineering-with-dbt/understand-the-dbt-project-yml-file?u=76281980&t=82)** We have our model, we have the nyc_parking_violations, and then we have the various models within that and how they're materialized.
>
> **[1:28](https://www.linkedin.com/learning/data-engineering-with-dbt/understand-the-dbt-project-yml-file?u=76281980&t=88)** And so quickly going under here, you see models, example, and the two projects, models, example, similar thing.
>
> **[1:37](https://www.linkedin.com/learning/data-engineering-with-dbt/understand-the-dbt-project-yml-file?u=76281980&t=97)** And so when we start configuring our file, we'll learn more about how to set this up properly for our project.

> [!info]- Semantic Content
>
> **Env Vars:** dbt (7), yaml (3), nit (1)
> **Code Keywords:** this. (1), finally, (1)
> **Code Identifiers:** nyc_parking_violations (2)
> **Definitions:** stands for (1)
> **Analogies:** think of it as (1)
> **Speakers:** - [instructor] (1)

#### Create your profiles YAML file
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=0)** - [Instructor] We now need to make our next configuration file called the profiles yml file.
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=5)** But if you look at the sidebar over here, there isn't a profiles yml file.
>
> **[0:10](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=10)** And that's very intentional.
>
> **[0:12](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=12)** For a particular use case of using duckdb, it doesn't auto generate one.
>
> **[0:16](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=16)** So remember a few videos ago when we did DBT init?
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=20)** It gave us that message, no sample profile found for duckdb.
>
> **[0:24](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=24)** And that's completely okay.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=25)** And I actually think it's a great learning opportunity for us 'cause now we get to create our own profiles yml file.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=31)** So to do that we're going to go use the terminal and we're going to go into the directory of the NYC parking violations.
>
> **[0:38](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=38)** So to do that, you do cd, which stands for choose the directory.
>
> **[0:42](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=42)** NYC parking violations.
>
> **[0:45](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=45)** Quick pro tip, you can use tab to auto complete, which I love using for terminal.
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=50)** We're in there and the reason why we need to be in here is that we need all of our DBT workflows within the DBT directory.
>
> **[0:57](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=57)** So I'm going to create my profiles yml file, and to do that with the command line you do touch and then the name of the file.
>
> **[1:07](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=67)** So we'll do profiles.yml.
>
> **[1:11](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=71)** Create that and as you can see right here we have our profiles yml file.
>
> **[1:17](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=77)** Now, we don't have to figure this out ourselves.
>
> **[1:19](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=79)** Duckdb has already told us how to configure this and I'm going to pull up that screen via this link.
>
> **[1:26](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=86)** As you can see, it gives us a quick set of instructions to put into there.
>
> **[1:31](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=91)** So I'm going to copy and paste that over.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=94)** We are now in our profiles yml file, and this is copy and paste what we got from the documentation.
>
> **[1:40](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=100)** Great, now we save that.
>
> **[1:43](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=103)** And that completes our profiles yml file.
>
> **[1:45](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=105)** Just to quickly summarize what's happening here is that we set our default profile as this target dev, where we have the type of duckdb for our outputs for our database.
>
> **[1:56](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=116)** Simple as that.
>
> **[1:57](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-profiles-yaml-file?u=76281980&t=117)** And in the next video we'll show you how to connect this all together within your DBT project.

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

#### Connect your profiles and project YAML files
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=0)** - [Instructor] We now have our DBT project yml file and our profiles yml file.
>
> **[0:04](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=4)** But how do they interact with each other?
>
> **[0:06](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=6)** Here's a really useful quote directly from the DBT documentation.
>
> **[0:11](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=11)** When you run DBT from the command line, it reads your DBT project yml file to find the profile name and then looks for a profile with the same name in your profile's yml file.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=21)** This profile contains all the information DBT needs to connect to your data platform.
>
> **[0:26](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=26)** In our case it's duckdb.
>
> **[0:27](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=27)** And so this is integral how DBT works and you can quickly check it with the command line of DBT debug.
>
> **[0:35](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=35)** So I'm going to make sure that we first in the NYC parking violations directory.
>
> **[0:40](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=40)** And to do that I do LS.
>
> **[0:42](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=42)** List my directories and I can quickly see I'm not in the right directory.
>
> **[0:47](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=47)** And this trips me up all the time in DBT, and so I'm glad we saw this so we can do this right now.
>
> **[0:52](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=52)** So remember to move to a directory, do cd, and now we're going to do NYC parking violations.
>
> **[0:58](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=58)** Now we're in the DBT directory and we can run our DBT commands.
>
> **[1:03](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=63)** So let's run DBT debug and we're going to get an error and that's very intentional 'cause I hope it teaches you something.
>
> **[1:09](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=69)** So we're running this.
>
> **[1:13](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=73)** And as you can see, one check failed.
>
> **[1:16](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=76)** It says the profile's yml file has an error and it cannot find the profile named NYC parking violations.
>
> **[1:24](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=84)** So let's dive in to understand what's happening here.
>
> **[1:27](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=87)** And so, looking at the DBT project file is we have a profile called NYC parking violations, but if you go into our profiles, it's called default.
>
> **[1:42](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=102)** So we've misnamed our DBT project here and so we just need to change this to match.
>
> **[1:47](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=107)** So I'm going to copy and paste this over here and update it to look like this.
>
> **[1:54](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=114)** Now that's saved and we'll run DBT debug again.
>
> **[1:58](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=118)** So, DBT debug and we should have no errors this time.
>
> **[2:06](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=126)** All checks pass.
>
> **[2:08](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=128)** So with that update, we now have our DBT yml files connected to each other and DBT can run successfully.
>
> **[2:16](https://www.linkedin.com/learning/data-engineering-with-dbt/connect-your-profiles-and-project-yaml-files?u=76281980&t=136)** So now let's start building our first DBT model.

> [!info]- Semantic Content
>
> **Env Vars:** dbt (18), nyc (4)
> **Code Keywords:** let (3), this. (2), default. (1), match. (1), pass (1)
> **CLI Commands:** find (2), make (1), ls (1), cd (1)
> **Tools:** command line (2)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)


### 5. Your First dbt Model

> [↑ Back to Table of Contents](#table-of-contents)

#### Create your first dbt model file
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-first-dbt-model-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-first-dbt-model-file?u=76281980&t=0)** - [Instructor] We're now going to create our first DBT model.
>
> **[0:04](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-first-dbt-model-file?u=76281980&t=4)** When we ran DBT in it, it create two example DBT models within the directory.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-first-dbt-model-file?u=76281980&t=8)** NYC parking violations models example.
>
> **[0:11](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-first-dbt-model-file?u=76281980&t=11)** So I'm going to show that to you over here on the left.
>
> **[0:14](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-first-dbt-model-file?u=76281980&t=14)** Clicking over, you can see these files.
>
> **[0:17](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-first-dbt-model-file?u=76281980&t=17)** We're now going to delete them.
>
> **[0:19](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-first-dbt-model-file?u=76281980&t=19)** We don't really need them.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-first-dbt-model-file?u=76281980&t=20)** They're going to make things a little bit more confusing, so I'm going to delete them permanently.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-first-dbt-model-file?u=76281980&t=25)** Perfect, now with the empty blank models, we can now create our own SQL files.
>
> **[0:32](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-first-dbt-model-file?u=76281980&t=32)** So remember again, we're going to do CD NYC parking violations, and we're going to go down further directory and go to models.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-first-dbt-model-file?u=76281980&t=43)** Once again, we're going to create a new file called First Model.
>
> **[0:47](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-first-dbt-model-file?u=76281980&t=47)** So touch first model.sql
>
> **[0:56](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-first-dbt-model-file?u=76281980&t=56)** and we now have our first model here.
>
> **[1:00](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-first-dbt-model-file?u=76281980&t=60)** This model is essentially just a SQL file.
>
> **[1:03](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-first-dbt-model-file?u=76281980&t=63)** DBT sees a SQL file and runs it through our system.
>
> **[1:07](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-first-dbt-model-file?u=76281980&t=67)** We're going to do a very simple SQL query just for our first model, so you get used to the system.
>
> **[1:12](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-first-dbt-model-file?u=76281980&t=72)** So select star from parking violation codes, and that's it.
>
> **[1:23](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-first-dbt-model-file?u=76281980&t=83)** It's really that simple, it's just SQL code stored in files.
>
> **[1:27](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-first-dbt-model-file?u=76281980&t=87)** Now this may seem very, very simple, but as you start to scale multiple files, being able to structure it in a directory like this makes it so much easier to manage.
>
> **[1:39](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-first-dbt-model-file?u=76281980&t=99)** And in addition, we'll show some lighter tools that we can use to make it even easier to manage this complexity.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5), dbt (4), nyc (2)
> **CLI Commands:** make (2), cd (1)
> **Code Keywords:** delete (2)
> **File Paths:** model.sql (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Using the dbt CLI commands
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=0)** - [Instructor] Now that we've created our first DBT model, we can actually run it through the DBT project finally.
>
> **[0:06](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=6)** There's three main command line commands that you use: DBT debug, which you've used before, DBT compile and DBT run.
>
> **[0:15](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=15)** Let's quickly run through what those are.
>
> **[0:17](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=17)** So let's first do DBT debug.
>
> **[0:19](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=19)** Now, I'm going to intentionally create an error 'cause this is something that's very common that pops up when people learn DBT.
>
> **[0:26](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=26)** As you can see, I do DBT debug, but it's saying two checks failed.
>
> **[0:30](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=30)** Why is that happening when it worked not too long ago?
>
> **[0:33](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=33)** Well, if you remember we have to be in the DBT directory.
>
> **[0:36](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=36)** So LS.
>
> **[0:38](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=38)** We're not in the DBT directory, so we are going to do CD NYC parking violations.
>
> **[0:45](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=45)** And now when we run DBT debug again it should be happy.
>
> **[0:51](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=51)** All checks pass, which is great.
>
> **[0:54](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=54)** Now, the next command I want to introduce is DBT compile.
>
> **[0:58](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=58)** Now, DBT compile runs all the DBT models end-to-end, but doesn't execute the model SQL code nor materialize the tables, which is useful for quickly checking if your DBT models have any errors.
>
> **[1:09](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=69)** So for this small project, not an issue, but if you have thousands of models, it may take an hour to run.
>
> **[1:15](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=75)** You don't want to do that, so you do DBT compile to catch your errors a little bit early.
>
> **[1:19](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=79)** So, we'll do DBT compile And it works.
>
> **[1:24](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=84)** Finally, we'll do DBT run.
>
> **[1:26](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=86)** It runs all the DBT models end-to-end, executes the SQL code and materialize the tables based on the profile configurations.
>
> **[1:33](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=93)** Now I'm going to give you a heads up, this is going to create an error, but that's very intentional.
>
> **[1:39](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=99)** So DBT run, error.
>
> **[1:42](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=102)** It can't find the violations code table.
>
> **[1:45](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=105)** Why is that happening?
>
> **[1:47](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=107)** Well, if you go to our profiles yml file, scrolling down here, is we have NYC parking violations.
>
> **[1:56](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=116)** Great.
>
> **[1:57](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=117)** We have the type duckdb, but it doesn't know where to look, which is this data table over here.
>
> **[2:05](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=125)** To quickly do that, we just add a line under type and we add a path.
>
> **[2:11](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=131)** I'm going to copy and paste it here for you.
>
> **[2:14](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=134)** And as you can see, path.
>
> **[2:16](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=136)** Two dots to say, Hey, go back a directory, look into the data folder and reference the NYC parking violations database right here.
>
> **[2:25](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=145)** So now that's saved.
>
> **[2:27](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=147)** Let's go back to our command line.
>
> **[2:29](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=149)** We'll run DBT run and it should now work.
>
> **[2:36](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=156)** Now that our DBT project has run successfully, let's go check our data in the run SQL queries here notebook.
>
> **[2:47](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=167)** Pulling that up here.
>
> **[2:48](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=168)** As you can see, remember to import your packages and let's run the SQL query.
>
> **[2:55](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=175)** Show tables, and as you see, we see first model and our two initial CSV files that you put into your database.
>
> **[3:02](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=182)** Something out that's really important that I want to highlight is that note how the table name within our duckdb database matches the file name of our DBT model.
>
> **[3:15](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=195)** This behavior DBT is essential for organizing your DBT project, as each DBT model name needs to be unique because that becomes the name within the database.
>
> **[3:25](https://www.linkedin.com/learning/data-engineering-with-dbt/using-the-dbt-cli-commands?u=76281980&t=205)** In the next step we're going to create another DBT model and figure out how to connect them via the ref function.

> [!info]- Semantic Content
>
> **Env Vars:** dbt (27), sql (4), nyc (3), csv (1)
> **Code Keywords:** let (5), finally. (1), pass (1), finally, (1), function (1)
> **CLI Commands:** ls (1), cd (1), find (1)
> **Cross-References:** go back to (1), in the next (1)
> **Tools:** command line (2)
> **UI Navigation:** go to (1)
> **Best Practices:** remember to (1)
> **Warnings:** heads up (1)


### 6. Introduction to dbt Ref Function

> [↑ Back to Table of Contents](#table-of-contents)

#### Create your dbt model utilizing ref
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980&t=0)** - [Instructor] As mentioned earlier, DBT enables some useful tools for SQL files.
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980&t=5)** Specifically, the most important syntax within DBT are ref statements.
>
> **[0:09](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980&t=9)** And if you look at our screen, I have an example of one here right now.
>
> **[0:12](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980&t=12)** To quickly break it down, we have our curly brackets, double, the ref command, parentheses, the name of your model as a string, and then you close out the brackets.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980&t=25)** This syntax is powerful as it allows DBT to create lineage for your data transformations, essential for orchestration, creating dependencies, and documentation.
>
> **[0:35](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980&t=35)** The ref statement specifically is what's called Jinja syntax, which is functions used within DBT and a whole bunch of little bells and whistles.
>
> **[0:44](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980&t=44)** Jinja syntax is a little bit outside the scope of our course, but I highly recommend you go to the DBT documentation and learn about Jinja and macros, as they're extremely powerful.
>
> **[0:56](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980&t=56)** But for this course, we mainly just need to focus on the ref statement.
>
> **[1:00](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980&t=60)** So let's create our first DBT model using the ref statement.
>
> **[1:05](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980&t=65)** Again, we want to make sure we're in our DBT project.
>
> **[1:08](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980&t=68)** So, LS to see where we're at.
>
> **[1:11](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980&t=71)** We need to go move into the NYC parking violation folder.
>
> **[1:15](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980&t=75)** Now, again, we're going to do touch.
>
> **[1:18](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980&t=78)** touch models/example, and we're going to call this the ref_model.sql.
>
> **[1:29](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980&t=89)** As you see on the left side, we have our ref_model, and let's click into that.
>
> **[1:33](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980&t=93)** And we're going to do something simple.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980&t=95)** We're going to do select, count(*) just to count all the rows in the table, from, and I'm going to show you what it looks like without the ref statement first.
>
> **[1:47](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980&t=107)** And so we're going to do first_model.
>
> **[1:51](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980&t=111)** Now this will run in DBT and it'll show up in our database, but it won't have the ref statement to show that it's connected to each other, and that's what makes DBT powerful.
>
> **[2:00](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980&t=120)** So to do that, we're going to do our ref statement.
>
> **[2:03](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980&t=123)** So remember, we have our curly brackets, ref command, parentheses, string, and then we close it out.
>
> **[2:15](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980&t=135)** And we now have our first model with the ref statement.
>
> **[2:18](https://www.linkedin.com/learning/data-engineering-with-dbt/create-your-dbt-model-utilizing-ref?u=76281980&t=138)** In the next section, we'll actually run it and see how it looks in the database.

> [!info]- Semantic Content
>
> **Env Vars:** dbt (9), sql (1), nyc (1)
> **Code Keywords:** let (2), from, (1)
> **Code Identifiers:** ref_model (2), first_model (1)
> **CLI Commands:** make (1), ls (1)
> **File Paths:** ref_model.sql (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### Run your dbt models with the ref syntax
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/run-your-dbt-models-with-the-ref-syntax?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/run-your-dbt-models-with-the-ref-syntax?u=76281980&t=0)** - [Instructor] In the last video, we've created our ref statement model, and now we're going to run it.
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-with-dbt/run-your-dbt-models-with-the-ref-syntax?u=76281980&t=5)** Again, let's make sure that we are in the nyc_parking_violations folder, and it looks like we are.
>
> **[0:12](https://www.linkedin.com/learning/data-engineering-with-dbt/run-your-dbt-models-with-the-ref-syntax?u=76281980&t=12)** Again, if we're not in there, dbt's going to have some issues.
>
> **[0:15](https://www.linkedin.com/learning/data-engineering-with-dbt/run-your-dbt-models-with-the-ref-syntax?u=76281980&t=15)** So to do our dbt model, we're going to do dbt debug to make sure everything's working.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-with-dbt/run-your-dbt-models-with-the-ref-syntax?u=76281980&t=20)** Everything's looking good.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-with-dbt/run-your-dbt-models-with-the-ref-syntax?u=76281980&t=21)** We're going to do dbt compile.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-with-dbt/run-your-dbt-models-with-the-ref-syntax?u=76281980&t=25)** Everything's looking good.
>
> **[0:27](https://www.linkedin.com/learning/data-engineering-with-dbt/run-your-dbt-models-with-the-ref-syntax?u=76281980&t=27)** And now let's do dbt run.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-with-dbt/run-your-dbt-models-with-the-ref-syntax?u=76281980&t=31)** And it all worked out great.
>
> **[0:32](https://www.linkedin.com/learning/data-engineering-with-dbt/run-your-dbt-models-with-the-ref-syntax?u=76281980&t=32)** Something I want to highlight, a small nuance but it's very important, is notice how it does first_model and then the ref_model second.
>
> **[0:40](https://www.linkedin.com/learning/data-engineering-with-dbt/run-your-dbt-models-with-the-ref-syntax?u=76281980&t=40)** That's not by accident, that's very intentional.
>
> **[0:42](https://www.linkedin.com/learning/data-engineering-with-dbt/run-your-dbt-models-with-the-ref-syntax?u=76281980&t=42)** The ref statement allows dbt to understand the order of operations for the orchestration.
>
> **[0:47](https://www.linkedin.com/learning/data-engineering-with-dbt/run-your-dbt-models-with-the-ref-syntax?u=76281980&t=47)** That wouldn't happen if we didn't use the ref statement.
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-with-dbt/run-your-dbt-models-with-the-ref-syntax?u=76281980&t=50)** So now let's go look at our database and see if the data's actually there.
>
> **[0:54](https://www.linkedin.com/learning/data-engineering-with-dbt/run-your-dbt-models-with-the-ref-syntax?u=76281980&t=54)** So we're going to go into our run_sql_queries_here, and we're going to do SELECT * FROM ref_model.
>
> **[1:11](https://www.linkedin.com/learning/data-engineering-with-dbt/run-your-dbt-models-with-the-ref-syntax?u=76281980&t=71)** And we have success.
>
> **[1:13](https://www.linkedin.com/learning/data-engineering-with-dbt/run-your-dbt-models-with-the-ref-syntax?u=76281980&t=73)** We used the ref statement, we have the ref_model, and we see the counts for our table.
>
> **[1:18](https://www.linkedin.com/learning/data-engineering-with-dbt/run-your-dbt-models-with-the-ref-syntax?u=76281980&t=78)** In our next step, we're going to see how powerful the ref statement truly is with documentation.

> [!info]- Semantic Content
>
> **Code Identifiers:** ref_model (3), nyc_parking_violations (1), first_model (1), run_sql_queries_here (1)
> **Code Keywords:** let (3)
> **CLI Commands:** make (2)
> **SQL:** select (1)
> **Env Vars:** select (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### View your dbt project data lineage
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/view-your-dbt-project-data-lineage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/view-your-dbt-project-data-lineage?u=76281980&t=0)** - [Instructor] In our previous video, we saw in our database that the ref model was able to show up in our database, but I don't think that really highlights how cool the ref statement is, and to really show the power of the ref statement, we need to do DBT docs.
>
> **[0:14](https://www.linkedin.com/learning/data-engineering-with-dbt/view-your-dbt-project-data-lineage?u=76281980&t=14)** Now we'll go over DBT docs in a much more detail in a later step, but this quick intro allow you to visualize our DBT project.
>
> **[0:22](https://www.linkedin.com/learning/data-engineering-with-dbt/view-your-dbt-project-data-lineage?u=76281980&t=22)** Creating DBT docs is as simple as running the CLI command DBT docs generate.
>
> **[0:27](https://www.linkedin.com/learning/data-engineering-with-dbt/view-your-dbt-project-data-lineage?u=76281980&t=27)** So let's run that real quick.
>
> **[0:29](https://www.linkedin.com/learning/data-engineering-with-dbt/view-your-dbt-project-data-lineage?u=76281980&t=29)** Again, let's make sure we are in the correct repository.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-with-dbt/view-your-dbt-project-data-lineage?u=76281980&t=34)** CD NYC parking violations.
>
> **[0:37](https://www.linkedin.com/learning/data-engineering-with-dbt/view-your-dbt-project-data-lineage?u=76281980&t=37)** Great and DBT docs generate.
>
> **[0:45](https://www.linkedin.com/learning/data-engineering-with-dbt/view-your-dbt-project-data-lineage?u=76281980&t=45)** So what's happening here is that DBT is looking at all the metadata in our DBT project is then going to create these files as JSON within our targets.
>
> **[0:58](https://www.linkedin.com/learning/data-engineering-with-dbt/view-your-dbt-project-data-lineage?u=76281980&t=58)** You can look here and these are all auto-generated files that you don't have to deal with, but that's what's being created with DBT Docs generate.
>
> **[1:07](https://www.linkedin.com/learning/data-engineering-with-dbt/view-your-dbt-project-data-lineage?u=76281980&t=67)** But how do you actually see it?
>
> **[1:08](https://www.linkedin.com/learning/data-engineering-with-dbt/view-your-dbt-project-data-lineage?u=76281980&t=68)** You do DBT docs serve and what will happen is it'll create a local instance of a website based on your metadata of your documentation in the entire DBT project.
>
> **[1:23](https://www.linkedin.com/learning/data-engineering-with-dbt/view-your-dbt-project-data-lineage?u=76281980&t=83)** And as you can see, we can see the ref statement going from first model to ref model.
>
> **[1:28](https://www.linkedin.com/learning/data-engineering-with-dbt/view-your-dbt-project-data-lineage?u=76281980&t=88)** Now these are only two models, but imagine if there is hundreds or thousands how powerful this is.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-with-dbt/view-your-dbt-project-data-lineage?u=76281980&t=95)** In addition, we can go into our models themselves and we have data about them.
>
> **[1:42](https://www.linkedin.com/learning/data-engineering-with-dbt/view-your-dbt-project-data-lineage?u=76281980&t=102)** And so now we can go into our models and actually see all the metadata about them.
>
> **[1:47](https://www.linkedin.com/learning/data-engineering-with-dbt/view-your-dbt-project-data-lineage?u=76281980&t=107)** It's a little blank right now, but in later steps we'll fill it out and it's so powerful because now your entire team can understand your whole data project.
>
> **[1:56](https://www.linkedin.com/learning/data-engineering-with-dbt/view-your-dbt-project-data-lineage?u=76281980&t=116)** Now that we know how to do the ref statement, do DBT docs, we're ready to actually build the medallion architecture and the next step, we'll go over planning for that project.

> [!info]- Semantic Content
>
> **Env Vars:** dbt (12), cli (1), nyc (1), json (1)
> **CLI Commands:** make (1), cd (1)
> **Code Keywords:** let (2)
> **Cross-References:** previous video (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### 7. Implementing Medallion Architecture with dbt

> [↑ Back to Table of Contents](#table-of-contents)

#### Planning your medallion architecture project
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/planning-your-medallion-architecture-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/planning-your-medallion-architecture-project?u=76281980&t=0)** - [Instructor] So we're ready to finally build our DBT project, but the instructions were a little far back, so let's recap them again.
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-with-dbt/planning-your-medallion-architecture-project?u=76281980&t=7)** We're going to convert the NYC parking violation data into the medallion architecture.
>
> **[0:12](https://www.linkedin.com/learning/data-engineering-with-dbt/planning-your-medallion-architecture-project?u=76281980&t=12)** To do this, we're going to utilize dbt Core for the SQL Transformations, and our data pipeline and assets should look like the following when we're done.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-with-dbt/planning-your-medallion-architecture-project?u=76281980&t=20)** This is the medallion architecture for our project.
>
> **[0:23](https://www.linkedin.com/learning/data-engineering-with-dbt/planning-your-medallion-architecture-project?u=76281980&t=23)** Remember, we have our bronze with our raw data, silver, with our transformed data model, and gold for our metrics data.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-with-dbt/planning-your-medallion-architecture-project?u=76281980&t=31)** And to break down our project into smaller chunks, we can think of it this way, we have our bronze data with the following tables.
>
> **[0:38](https://www.linkedin.com/learning/data-engineering-with-dbt/planning-your-medallion-architecture-project?u=76281980&t=38)** We have parking violation codes and parking violations.
>
> **[0:42](https://www.linkedin.com/learning/data-engineering-with-dbt/planning-your-medallion-architecture-project?u=76281980&t=42)** Silver data, we're going to break it out into violation codes, violations, tickets, and vehicles.
>
> **[0:48](https://www.linkedin.com/learning/data-engineering-with-dbt/planning-your-medallion-architecture-project?u=76281980&t=48)** And then finally, for our gold data, we'll have our ticket location metrics and our vehicle metrics.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-with-dbt/planning-your-medallion-architecture-project?u=76281980&t=55)** So let's get started building the DBT.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1), finally, (1)
> **Env Vars:** dbt (2), nyc (1), sql (1)
> **Speakers:** - [instructor] (1)

#### Medallion architecture: Bronze data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=0)** - [Instructor] So, we're now ready to finally build our DBT project and we're going to start with our bronze data.
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=5)** Now, bronze data should be in a mostly raw state, where minor transformations are made to make it easier to manage data within your analytical database.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=13)** For our use case, we're going to take a subset of the parking violation data columns.
>
> **[0:18](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=18)** We should have the following tables added to our database when we're done: bronze parking violation codes and bronze parking violations.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=25)** To do this, we're going to create a new folder within our models directory called bronze.
>
> **[0:30](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=30)** We're first going to make sure we're in the NYC parking violations folder.
>
> **[0:35](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=35)** And now, we're going to make a bronze folder within the models directory with the CLI command, make directory, so mkdir models bronze.
>
> **[0:49](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=49)** And now, we can see in our folder, we now have a bronze, but it's completely empty.
>
> **[0:53](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=53)** And so now we need to create our SQL files for our model.
>
> **[0:56](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=56)** To do that, we do touch.
>
> **[0:59](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=59)** And then, we're going to add through the path, the file name, bronze parking violation codes.sql, I have it copy and pasted here.
>
> **[1:09](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=69)** Take a moment for you to write that down.
>
> **[1:11](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=71)** And now we add it here.
>
> **[1:13](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=73)** And as you can see, we now have our model.
>
> **[1:16](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=76)** We're going to do this one more time for our other model we have in there.
>
> **[1:19](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=79)** Similar thing, touch models bronze bronze parking violations.sql.
>
> **[1:28](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=88)** We now have both of our models ready and we're ready to create our bronze parking violation codes tables.
>
> **[1:33](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=93)** So we're going to go into our bronze parking violation tables, and I'm going to copy and paste this codes in here.
>
> **[1:41](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=101)** But you have these files available that you can put in there as well.
>
> **[1:46](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=106)** And the reason for that is just explain the SQL code.
>
> **[1:48](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=108)** This isn't a SQL course its a DBT course, I want you to focus mainly on DBT, but all we're doing is we're selecting code and renaming it as violation code.
>
> **[1:57](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=117)** The reason why we're doing this is so that it's the same for across all the tables.
>
> **[2:02](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=122)** In addition, we're adding definition and then Manhattan 96th Street below all other areas, and then it's going to be from the parking violation codes.
>
> **[2:11](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=131)** And you may be asking yourself, "Well, why aren't we using a ref statement?"
>
> **[2:15](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=135)** Well, it's the bronze table, it's the first start of a data pipeline.
>
> **[2:18](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=138)** So since it's the beginning, it doesn't need to reference anything.
>
> **[2:22](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=142)** We're now going to go into bronze parking violations.
>
> **[2:26](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=146)** Similar thing, I'm going to copy and paste the code and now we're pulling much more tables, just a simple select from.
>
> **[2:34](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=154)** And again, just take some time to review the code, understand what it does.
>
> **[2:39](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=159)** But again, the focus is on DBT, not SQL.
>
> **[2:43](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=163)** And now we're ready to actually build our bronze tables.
>
> **[2:46](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=166)** So now that they're both ready, let's close it out.
>
> **[2:49](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=169)** Go to our terminal, and you should know the drill by now.
>
> **[2:54](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=174)** DBT debug.
>
> **[2:58](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=178)** Looking great.
>
> **[2:59](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=179)** DBT compile.
>
> **[3:04](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=184)** Looking great.
>
> **[3:05](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=185)** And now finally, DBT Run.
>
> **[3:09](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=189)** And it's all set.
>
> **[3:11](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=191)** Keep in mind we have our earlier example folders, that's completely okay.
>
> **[3:15](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=195)** I'll keep it in there just so you have it for reference.
>
> **[3:17](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=197)** But we now see our four models have run successfully.
>
> **[3:21](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=201)** Now let's actually view our data and our database.
>
> **[3:25](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=205)** So let's scroll down to our run SQL queries folder, and make sure the environment's set up by running our import packages, and we can see which tables we have in there.
>
> **[3:41](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=221)** So with Duck DB, you can do show tables, and now we can see our bronze data in there.
>
> **[3:48](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=228)** But let's actually view our bronze data.
>
> **[3:51](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=231)** So I'm going to do select star from bronze parking violations,
>
> **[4:04](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=244)** and I'm just going to limit to three.
>
> **[4:07](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=247)** Running that.
>
> **[4:08](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=248)** And now we can see our bronze data available in here.
>
> **[4:12](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=252)** We've successfully set up our bronze tables within our DBT architecture, so excited.
>
> **[4:18](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-bronze-data?u=76281980&t=258)** And now let's move forward over to the medallion architecture for our silver data.

> [!info]- Semantic Content
>
> **Env Vars:** dbt (8), sql (5), nyc (1), cli (1)
> **Code Keywords:** let (5), case, (1), this, (1), from. (1), finally, (1)
> **CLI Commands:** make (5), mkdir (1)
> **File Paths:** codes.sql (1), violations.sql (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Prerequisites:** set up (2)
> **Tools:** terminal (1)
> **Warnings:** keep in mind (1)

#### Medallion architecture: Silver data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=0)** - [Instructor] This is video 0703.
>
> **[0:03](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=3)** We've created our bronze data, and we're now ready to move on to our silver data in our medallion architecture.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=8)** Silver data should align with your established data model for your analytical database.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=13)** While data modeling is extremely important in data engineering, that is not the goal of this tutorial.
>
> **[0:17](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=17)** Instead, we're just going to do some simple transformations and make it easier to do our metrics later on.
>
> **[0:23](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=23)** The four tables we're going to be creating is silver parking violation codes, silver parking violations, silver violation tickets, and silver violation vehicles.
>
> **[0:32](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=32)** Again let's make sure we are in our NYC parking violations folder for dbt, and similar to we did in bronze, we're going to make a directory called models/silver.
>
> **[0:49](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=49)** And again we can see it here, blank directory, and we're going to use touch to create four files, touch models/silver/silver_parking_violation_codes, touch models/silver/silver_parking_violations, touch again, models/silver/silver_violation_tickets, and for our final silver table, touch models/silver/silver_violation_vehicles.
>
> **[1:26](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=86)** And we see on the right side here, we have our four tables, so now let's start building them.
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=92)** So we have silver_parking_violation_codes.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=95)** I'm going to copy and paste the values in here, and then I'm going to explain the SQL we're doing.
>
> **[1:42](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=102)** So to quickly summarize what we're doing with this table, we have to look at our violation codes CSV.
>
> **[1:49](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=109)** Something happening here is that it's not a unique row for every value.
>
> **[1:53](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=113)** There is the Manhattan 96th Street below column, and all other areas.
>
> **[1:59](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=119)** What we need to do is make them their own row for each type of fee.
>
> **[2:04](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=124)** To do that, I pull it out by just creating a new column called is_manhattan_96th_st_ below, and it's created a Boolean.
>
> **[2:13](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=133)** In addition, I changed the manhattan_96th_st_ below to fee_usd, and created its own table.
>
> **[2:20](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=140)** I did the same, but made it false for the Boolean and all other areas named the fee_usd, so that it matches, and then a simple union to create it.
>
> **[2:29](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=149)** When we run our dbt model, you'll see it run perfectly.
>
> **[2:34](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=154)** We're now going to move on to the silver_parking_violations.
>
> **[2:40](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=160)** This one's just a simple select, but there's one thing happening.
>
> **[2:43](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=163)** Remember how there are two different fee structures, whether or not you are in manhattan_96th_st_ below or not.
>
> **[2:51](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=171)** Now, doing data, this is going to be a lot of your time understanding the underlying business logic of the data to understand how to do this properly.
>
> **[3:00](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=180)** Again, this is a course about dbt, not SQL or data analytics, so to do this quickly, we're making a huge assumption saying if you're in the county of Manhattan, you are in this area, so then true, so that's how we're going to determine which fee structure they do.
>
> **[3:17](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=197)** Again, if you're in this production system, you're going to spend way more time trying to figure this out, but for this course, we're keeping it simple.
>
> **[3:25](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=205)** We're now going to move to violation_tickets, and those two tables we've created, we're now merging them together, and remember how in every single time, we're using the ref statement now for our silver tables, because we're now referencing previous tables in our dbt model.
>
> **[3:43](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=223)** With this, I am merging the violations table to the violation codes table on violation codes, and the Boolean is whether or not it's below Manhattan 96th Street.
>
> **[3:59](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=239)** And then finally, we're going to do our silver_violation_vehicle table.
>
> **[4:04](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=244)** This table's going to be super simple, just to select a few of the rows.
>
> **[4:09](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=249)** And now that we have our four tables, we're going to be ready to do our dbt commands.
>
> **[4:17](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=257)** Pull up the terminal.
>
> **[4:18](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=258)** Let's make sure we're in the right directory, and we are, so let's do dbt debug.
>
> **[4:27](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=267)** Looking good, dbt compile.
>
> **[4:32](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=272)** Looking good, and now let's do dbt run.
>
> **[4:37](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=277)** Complete, now that we have our data ready, we can go check it out within our notebook where we run our SQL queries.
>
> **[4:49](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=289)** Make sure our environment's set up, and this will show the tables.
>
> **[4:52](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=292)** As you can see, we can now see all of our silver data, but let's go look at it, actually.
>
> **[4:57](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=297)** So let's go look at SELECT * FROM.
>
> **[5:07](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=307)** Let's do the silver_parking_violation_codes.
>
> **[5:10](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=310)** Run that, and now you can see everything has a unique row, and it' showing whether or not it's Manhattan, and it has the fee USD.
>
> **[5:19](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=319)** In addition, let's go check out for one more table, the actual tickets.
>
> **[5:25](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=325)** So silver_violation_tickets, and let's LIMIT it to three.
>
> **[5:36](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=336)** Running, and now we can see our data here.
>
> **[5:42](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-silver-data?u=76281980&t=342)** Great, we have now created our silver tables, and we're now ready to move on to our gold data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this, (1), finally, (1), super (1), from. (1)
> **Code Identifiers:** silver_parking_violation_codes (3), silver_parking_violations (2), silver_violation_tickets (2), fee_usd (2), silver_violation_vehicles (1)
> **Env Vars:** sql (3), nyc (1), csv (1), select (1), usd (1)
> **CLI Commands:** make (6)
> **SQL:** select (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)

#### Medallion architecture: Gold data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=0)** - [Instructor] We've created our bronze data, we've created our silver data, and we're now ready to create our final component of medallion architecture, the gold data.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=8)** Gold data is ideally for metrics and aggregates that'll be utilized by downstream data consumers via reports and dashboards.
>
> **[0:15](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=15)** We should have the following tables added to our database: gold ticket location metrics and gold vehicle metrics.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=21)** To do this, let's make sure we are first in our NYC parking violations area, and we're going to once again do make directory models gold.
>
> **[0:36](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=36)** As you can see, gold folder here, but no tables.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=39)** We're going to do touch models gold gold ticket metric SQL, and we can see in our gold folder.
>
> **[0:48](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=48)** Final one, touch models gold gold vehicle metrics.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=55)** Now that both of our tables ready, let's go into it.
>
> **[0:58](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=58)** So we have gold ticket metrics, and we're just doing something really simple here.
>
> **[1:05](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=65)** We're doing, for each violation code, we're just getting the counts of the number of tickets and the total number of fees that have been collected for that specific violation code.
>
> **[1:15](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=75)** And again, we're using the ref statement.
>
> **[1:18](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=78)** Let's go to gold vehicle metrics.
>
> **[1:21](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=81)** For this table, we're looking at the registration state for each vehicle, and then counting how many tickets come in from each type of vehicle from different states.
>
> **[1:31](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=91)** Where we have this where clause where the registration states saying, make sure the vehicle is not from New York.
>
> **[1:37](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=97)** And again, the goal tables, just make it so that for your dashboards downstream, or for your analytics downstream, the data's already prepared and moves very quickly for 'em.
>
> **[1:47](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=107)** Many times these are some easy wins you can get for your stakeholders to get dashboard move really quickly.
>
> **[1:54](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=114)** And now we're ready to do our DBT CLI commands, DBT debug, DBT compile, and DBT Run.
>
> **[2:12](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=132)** And success.
>
> **[2:14](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=134)** Let's go back into our SQL notebook and let's run it.
>
> **[2:21](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=141)** So let's do select star, and since it's a aggregate, we can remove the limit and do gold ticket metrics.
>
> **[2:32](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=152)** Run that, and now we can see the ticket count and the total revenue.
>
> **[2:38](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=158)** Let's also check out the vehicle metrics.
>
> **[2:44](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=164)** And as you can see, New Jersey has the most common tickets within New York.
>
> **[2:51](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=171)** And that completes our last table for our gold architecture, but let's see it all in action.
>
> **[2:56](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=176)** We're going to do DBT docs generate and DBT docs serve.
>
> **[3:09](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=189)** We can see we have all of our models here now, but now we can see the lineage and look at that.
>
> **[3:18](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=198)** It matches our desired format for our tables.
>
> **[3:23](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=203)** Isn't that exciting?
>
> **[3:25](https://www.linkedin.com/learning/data-engineering-with-dbt/medallion-architecture-gold-data?u=76281980&t=205)** For the next video, we're going to dive into materialization methods within DBT, so you can fine tune how these models appear in your database.

> [!info]- Semantic Content
>
> **Env Vars:** dbt (7), sql (2), nyc (1), cli (1)
> **Code Keywords:** let (8), this, (1)
> **CLI Commands:** make (4)
> **Cross-References:** next video (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 8. Materialization of dbt Models

> [↑ Back to Table of Contents](#table-of-contents)

#### Materialization in your dbt project
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/materialization-in-your-dbt-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/materialization-in-your-dbt-project?u=76281980&t=0)** - [Instructor] So we've created our DBT models, but there's one small thing we need to consider is that how do we want the models to look like for our database users.
>
> **[0:11](https://www.linkedin.com/learning/data-engineering-with-dbt/materialization-in-your-dbt-project?u=76281980&t=11)** Within DBT, it's called Materialization and Materialization essentially controls how your models within your database are viewed and created.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-with-dbt/materialization-in-your-dbt-project?u=76281980&t=20)** Why you may want to do this is you want to limit what tables can be viewed by your database users.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-with-dbt/materialization-in-your-dbt-project?u=76281980&t=25)** Maybe you want to reduce the cost of data storage by not having them materialized, but still available.
>
> **[0:30](https://www.linkedin.com/learning/data-engineering-with-dbt/materialization-in-your-dbt-project?u=76281980&t=30)** Or you may want to speed up certain data pipelines such as a dashboard so it doesn't have to wait for the query to run before you can actually get the data.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-with-dbt/materialization-in-your-dbt-project?u=76281980&t=39)** DBT allows five different materialization methods table, view, incremental, ephemeral, and materialized view.
>
> **[0:49](https://www.linkedin.com/learning/data-engineering-with-dbt/materialization-in-your-dbt-project?u=76281980&t=49)** But for our project, we're only going to worry about table, which places the data within the database view, which pulls the data only after you reference it.
>
> **[0:59](https://www.linkedin.com/learning/data-engineering-with-dbt/materialization-in-your-dbt-project?u=76281980&t=59)** And ephemeral which is, we run the data, but we don't show it in the database.
>
> **[1:04](https://www.linkedin.com/learning/data-engineering-with-dbt/materialization-in-your-dbt-project?u=76281980&t=64)** I highly, highly recommend checking out DBTs documentation on this because it's super important aspect of your DBT project and it gives you a lot of great fine grain tweaking to your models, which is great for your overall project, especially for larger ones.
>
> **[1:25](https://www.linkedin.com/learning/data-engineering-with-dbt/materialization-in-your-dbt-project?u=76281980&t=85)** For our DBT project, we're going to have the following.
>
> **[1:29](https://www.linkedin.com/learning/data-engineering-with-dbt/materialization-in-your-dbt-project?u=76281980&t=89)** Our bronze data is going to be view, our silver data is going to be ephemeral for the initial tables because they're just used to help prepare us for our final tables, which are going to be view, so we don't want our users to see it.
>
> **[1:41](https://www.linkedin.com/learning/data-engineering-with-dbt/materialization-in-your-dbt-project?u=76281980&t=101)** And finally, our gold tables are going to be materialized as tables because their metrics being used by downstream people.
>
> **[1:48](https://www.linkedin.com/learning/data-engineering-with-dbt/materialization-in-your-dbt-project?u=76281980&t=108)** So we want that data available as quickly as possible.
>
> **[1:51](https://www.linkedin.com/learning/data-engineering-with-dbt/materialization-in-your-dbt-project?u=76281980&t=111)** So let's go bill us in our DBT project.

> [!info]- Semantic Content
>
> **Env Vars:** dbt (6)
> **Code Keywords:** super (1), finally, (1), let (1)
> **Speakers:** - [instructor] (1)

#### Implement materialization in your dbt_project.yml file
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980&t=0)** - [Instructor] Now that we know how we want to set up our materialization for our DBT project, we have to go to the DBT project YAML file once again to set up our configurations.
>
> **[0:09](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980&t=9)** So let's head over there.
>
> **[0:11](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980&t=11)** On the left, I went to our DBT project yaml and we're going to go all the way to the bottom to the models section and we're going to update it from this.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980&t=20)** And I'm going to copy and paste it and explain what it is.
>
> **[0:22](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980&t=22)** But you'll have this file available to you.
>
> **[0:26](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980&t=26)** So let's break down what's happening here.
>
> **[0:28](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980&t=28)** We're saying in our NYC parking violations project, our example table, we want to materialize as ephemeral.
>
> **[0:35](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980&t=35)** We don't want to see it anymore 'cause it's not useful for us.
>
> **[0:37](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980&t=37)** For our bronze table, it's going to be a view for a silver table for this table going to be ephemeral.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980&t=43)** This table's going to be ephemeral, but then for these two tables we're make a view.
>
> **[0:47](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980&t=47)** And then finally the gold we're going to have as table.
>
> **[0:51](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980&t=51)** Something I want to highlight here is you notice how the silver tables, I'm calling out the specific models.
>
> **[0:57](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980&t=57)** That's because I have differential materialization patterns.
>
> **[1:00](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980&t=60)** I want, if I didn't have that, I can set it to a single one, such as table or view or ephemeral because I want all those tables to be that way.
>
> **[1:10](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980&t=70)** So now that we have our materialization set up in our project, let's go run DBT and see what that looks like.
>
> **[1:18](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980&t=78)** Let's make sure we're in the right directory.
>
> **[1:22](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980&t=82)** Run DBT debug, DBT compile, and finally DBT Run.
>
> **[1:33](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980&t=93)** Awesome. And something I really want to highlight here is that in the previous video we had more DBT models showing in the run, but now we have less here.
>
> **[1:43](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980&t=103)** Why is that?
>
> **[1:44](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980&t=104)** Well, we have the ephemeral models for neutralization now specifically, for example, and these two silver tables.
>
> **[1:51](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980&t=111)** So looking at the run logs here, we have the bronze, bronze, two silver, and two gold.
>
> **[2:00](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980&t=120)** Our ephemeral ones are not here, so we know our materialization worked.
>
> **[2:03](https://www.linkedin.com/learning/data-engineering-with-dbt/implement-materialization-in-your-dbt-project-yml-file?u=76281980&t=123)** Great job, in our next video we're going to see one of my favorite things about DVT, its documentation features.

> [!info]- Semantic Content
>
> **Env Vars:** dbt (8), yaml (1), nyc (1), dvt (1)
> **Code Keywords:** let (4), this. (1)
> **CLI Commands:** make (2), go run (1)
> **Prerequisites:** set up (3)
> **Cross-References:** previous video (1), next video (1)
> **Analogies:** such as (1), for example (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 9. Documentation as Code via dbt

> [↑ Back to Table of Contents](#table-of-contents)

#### Further documentation via schema.yml file
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=0)** - [Instructor] Documentation is huge in data.
>
> **[0:03](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=3)** It's how you understand what data you're using, how it connects to other projects, and more importantly, it keeps everyone informed on the team.
>
> **[0:12](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=12)** The thing is, to maintain documentation is super hard and cumbersome.
>
> **[0:16](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=16)** And this is why I love dbt because now you have documentation as code.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=21)** When I was trying to get buy-in for implementing dbt at my previous company, the documentation component was the major selling point that got my boss to say yes.
>
> **[0:29](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=29)** So let's check it out again.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=31)** Remember to go to our directory, dbt docs generate and dbt docs serve.
>
> **[0:47](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=47)** So now we have our project, we can see our various models, and in addition, with our materialization methods, we can also see how it's materialized.
>
> **[1:00](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=60)** One thing I want to highlight here is when we're going into this data, we now see the documentation, but it's really blank.
>
> **[1:09](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=69)** There's no information there.
>
> **[1:10](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=70)** And so even though we have the documentation, we still need to fill it out.
>
> **[1:15](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=75)** And so dbt makes this relatively easy to do.
>
> **[1:19](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=79)** To exit out of the docs, you do Control + C.
>
> **[1:24](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=84)** Exit out of there.
>
> **[1:25](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=85)** And the way you add documentation is through a schema file.
>
> **[1:30](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=90)** And so to create a schema file, we're going to create a new folder within our models called Docs and it can be called anything, but I think docs is really descriptive and that's why I chose it, so mkdirmodels/docs.
>
> **[1:50](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=110)** Great.
>
> **[1:51](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=111)** Now that it's there, we need to create the schema.yaml file.
>
> **[1:55](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=115)** Now this name is required, so touchmodels/docs/schema.yaml,
>
> **[2:07](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=127)** and now we have our file.
>
> **[2:10](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=130)** And so the way it's structured, I'm going to copy and paste it in.
>
> **[2:13](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=133)** But again, you'll have access to this.
>
> **[2:16](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=136)** So let's zoom out just a quick bit.
>
> **[2:19](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=139)** And as you can see, we have, remove that, as you can see, we have our models and we say the name, which is the model name.
>
> **[2:29](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=149)** We give a description of the data, and then we set the columns and then we follow again with adding the name of the column and description of the column.
>
> **[2:38](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=158)** So now let's run dbt docs generate dbt docs serve
>
> **[2:53](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=173)** and now we can see our descriptions.
>
> **[3:02](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=182)** And you may be wondering, well, this seems awesome, but you still have to write a lot of the documentation in there.
>
> **[3:10](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=190)** That is true.
>
> **[3:11](https://www.linkedin.com/learning/data-engineering-with-dbt/further-documentation-via-schema-yml-file?u=76281980&t=191)** But in our next step, I'll show you about doc blocks where you can actually create variables that you can use throughout your entire project so you don't have to repeat typing things over and over again.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), super (1), this. (1)
> **Documentation:** the documentation (4), the docs (1)
> **File Paths:** schema.yaml (1), touchmodels/docs/schema.yaml (1)
> **UI Navigation:** go to (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### The docs_blocks.md file
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=0)** - [Instructor] Now, I'm going to introduce you to doc blocks.
>
> **[0:03](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=3)** Doc blocks are essentially creating variables that you can pass along your DBT project documentation.
>
> **[0:10](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=10)** And I'll quickly show you what that looks like.
>
> **[0:12](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=12)** So I'll create a new text file, and here's a great way to think about them.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=20)** If you're familiar with Python, you know you can create a variable and assign it a value such as a string.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=25)** That's a similar thing happening here.
>
> **[0:28](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=28)** With doc blocks we're using a ginga, again called docs, where we set the name as example name and then we add the text, this is example text, and then we end it here.
>
> **[0:40](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=40)** And now we can pass this variable throughout our project.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=43)** So, let's create our doc blocks file, make sure we're in the right directory.
>
> **[0:49](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=49)** Touch models docs docs blocks.md.
>
> **[0:59](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=59)** And dot md stands for markdown and that's what DBT uses to understand.
>
> **[1:04](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=64)** So let's do a quick doc block for our violation code.
>
> **[1:08](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=68)** Add it right here, copy and paste.
>
> **[1:10](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=70)** So we have a ginga function, docs, it's called violation code and it says the standardized code of the violation.
>
> **[1:18](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=78)** Now let's go back to our schema.yaml file over here and for violation code, now we can completely replace this description with our doc block.
>
> **[1:33](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=93)** So it's going to be in quotes, curly bracket, curly bracket, space doc, parentheses, double quote, violation_code.
>
> **[1:48](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=108)** Very important, you can get into errors if you have these as a single quote and a single quote, they need to be different so it knows the difference.
>
> **[1:56](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=116)** Awesome.
>
> **[1:57](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=117)** So now that's ready, we can run our docs again and we'll see the doc block will have the same exact documentation for violation code.
>
> **[2:05](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=125)** So DBT docs generate, DBT docs serve.
>
> **[2:17](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=137)** So now going back into here models bronze violation codes and we see for violation code it's still the same, but now we've used the variable.
>
> **[2:26](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=146)** And this is extremely powerful because in engineering best practices it's called dry, don't repeat yourself.
>
> **[2:32](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=152)** Because if I had to say rename the violation code and change the description and I use it in five or six different areas throughout the code, that means I'll have to go into the code in multiple different areas and change it.
>
> **[2:45](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=165)** This ensures that I only need to change it in the doc blocks.md file will change throughout the whole entire project, which is extremely powerful and makes sure to reduce bugs.
>
> **[2:55](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=175)** Now control C, exit out of there.
>
> **[3:00](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=180)** One of the files I've included within the project is a completely filled out docs blocks and schema.yaml file, 'cause I'm not going to make you write this all out.
>
> **[3:12](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=192)** It takes a while to do sometimes.
>
> **[3:14](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=194)** So I'm going to delete the ones we just created and I'm going to copy these into the file.
>
> **[3:29](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=209)** And spend some time just exploring the files to understand how it works, get a good feeling for all of them, but now I'm going to do DBT docs generate and DBT docs serve and you can see the entire setup for documentation.
>
> **[3:50](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=230)** And as we can see, we have documentation for all of our tables now.
>
> **[4:00](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=240)** And I want to highlight one of the key values that we use throughout the entire project is summons number.
>
> **[4:08](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=248)** So let's go into that file again.
>
> **[4:14](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=254)** Let's go doc blocks and let's look up summons number right here, unique identifier that we use for so many tables.
>
> **[4:23](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=263)** And go for schema.yaml, look up summons number, and we see we have it four different times through our project, but we only have to write the definition once in passing these variables.
>
> **[4:34](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=274)** And that's why doc blocks with schema is so powerful for DBT and DBT's amazing for documentation 'cause now we have all this code that's version controlled.
>
> **[4:43](https://www.linkedin.com/learning/data-engineering-with-dbt/the-docs-blocks-md-file?u=76281980&t=283)** That completes our documentation section and our next video we're going to learn how to set up tests for our DBT project.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), pass (2), function (1), delete (1)
> **Env Vars:** dbt (9)
> **File Paths:** schema.yaml (3), blocks.md (2)
> **CLI Commands:** make (2), python (1)
> **Cross-References:** go back to (1), next video (1)
> **Definitions:** stands for (1), is a  (1)
> **Prerequisites:** setup (1), set up (1)
> **Code Identifiers:** violation_code (1)


### 10. Implementing Tests within Your dbt Project

> [↑ Back to Table of Contents](#table-of-contents)

#### Creating custom singular tests
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=0)** - [Instructor] Now we're going to implement tests for our dbt project.
>
> **[0:03](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=3)** Just to give you a high overview of what they are, I highly recommend checking out the dbt documentation, it's really great.
>
> **[0:10](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=10)** But there are singular tests, generic tests, and then also among the generic tests, there's some out-of-the-box tests, such as unique, not_null, accepted_values, and relationships.
>
> **[0:22](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=22)** We're going to implement a singular test, a generic test, and a couple of these out-of-the-box tests.
>
> **[0:29](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=29)** So going back into here.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=31)** So let's first create a singular test.
>
> **[0:33](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=33)** To do so, we're going to go into our tests folder.
>
> **[0:37](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=37)** And you see, we only have a gitkeep file, we don't have any test files.
>
> **[0:41](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=41)** So to do such, we're going to create a new file via touch.
>
> **[0:45](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=45)** We're going to go into our nyc_parking_violations directory, and then we're going to create a file within our test folder via touch tests/violation_codes_revenue.sql.
>
> **[1:04](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=64)** And that name will make sense soon.
>
> **[1:06](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=66)** So we can see we have that.
>
> **[1:08](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=68)** And the test for these singular tests are just SQL files.
>
> **[1:11](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=71)** And what's going to happen is, it's going to say, "Hey, if this SQL returns any values, then it's going to fail this test or warn."
>
> **[1:20](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=80)** So, we're first going to do a SQL query.
>
> **[1:23](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=83)** I'm going to copy and paste it into here, and break it down.
>
> **[1:27](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=87)** And so what we're doing is say we're going to select the violation codes, we're going to group by it, and then sum to get the total fee, USD, for those.
>
> **[1:36](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=96)** For that we should say, "Hey, for our violation codes, they should all have a fee associated with them.
>
> **[1:43](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=103)** And if it's not greater than or equal to one, return the value."
>
> **[1:49](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=109)** And so, what that'll do is now that that's saved, we can run dbt tests, which is the new command for the CLI.
>
> **[2:00](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=120)** It's dbt test, not tests, silly me.
>
> **[2:04](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=124)** And now we can see that we have a failure because there is a value in there that didn't pass, specifically the violation_codes_revenue.
>
> **[2:14](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=134)** So let's go into our code and understand what's happening here.
>
> **[2:18](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=138)** So, go into our SQL query file.
>
> **[2:26](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=146)** And now, let's take this code and see what's happening.
>
> **[2:35](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=155)** And since you're nine dbt for this, we have to remove the ref statement because DuckDB has no idea what that is.
>
> **[2:41](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=161)** And run that.
>
> **[2:43](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=163)** And we can see violation code 41 has zero revenue for it.
>
> **[2:48](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=168)** So, that is a potential error.
>
> **[2:50](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=170)** Well, we can also have it where, maybe we don't want it to fail, maybe we want to just warn that everything is okay.
>
> **[2:58](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=178)** So, what we do is we use a Jinja feature called config.
>
> **[3:02](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=182)** So, in the file, curly bracket, config, and we do severity, equals, warn.
>
> **[3:15](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=195)** And now, instead of a error, we should get a warning.
>
> **[3:18](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=198)** So, let's run dbt test again.
>
> **[3:24](https://www.linkedin.com/learning/data-engineering-with-dbt/creating-custom-singular-tests?u=76281980&t=204)** And see, we now have a warning.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), pass (1), this, (1)
> **Env Vars:** sql (4), usd (1), cli (1)
> **Code Identifiers:** violation_codes_revenue (2), not_null (1), accepted_values (1), nyc_parking_violations (1)
> **Definitions:** is a  (2)
> **Warnings:** warning (2)
> **File Paths:** tests/violation_codes_revenue.sql (1)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)

#### Implementing tests within the schema.yml file
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=0)** - [Instructor] In addition to the singular custom tests, we can also implement tests via the schema.yml file.
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=7)** So let's go into there right here.
>
> **[0:09](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=9)** And let's use the generic tests that are prebuilt in dbt that are out of the box.
>
> **[0:15](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=15)** So let's go into bronze_parking_violation.
>
> **[0:18](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=18)** And for summons_number, let's add some tests.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=20)** Specifically, you just go into here.
>
> **[0:24](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=24)** On your description, put tests, tab, and then unique, and not_null.
>
> **[0:32](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=32)** And so essentially what we're saying here is, in the bronze_parking_violations table, specifically the summons_number columns, we want to run the tests, make sure every value is unique, and also make sure there's no null value.
>
> **[0:45](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=45)** So let's run it in our dbt project.
>
> **[0:47](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=47)** So, make sure in the right directory.
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=50)** cd.
>
> **[0:52](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=52)** And now we're going to run dbt test.
>
> **[0:57](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=57)** And as we can see, we can see our tests in there as well, the additional ones we added.
>
> **[1:01](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=61)** But also, remember dbt said that you can create your own generic tests.
>
> **[1:06](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=66)** Now, I won't go too deep into that, but let's break down what this not_null one is as a generic test.
>
> **[1:12](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=72)** So what we're going to do is we're going to go into our directory, and within the test, we're going to create a new folder called generic.
>
> **[1:19](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=79)** Make sure we're in the right directory.
>
> **[1:20](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=80)** Cool. Then we do make directory, tests/generic.
>
> **[1:27](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=87)** We have that folder over there, and now we're going to create the file.
>
> **[1:31](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=91)** touch test/generic.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=94)** And we're going to create generic_not_null.sql.
>
> **[1:43](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=103)** And now we have our file on there.
>
> **[1:45](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=105)** And so, essentially, what's happening is, we're going to use another Jinja function.
>
> **[1:51](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=111)** I'm going to copy and paste what I have here.
>
> **[1:53](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=113)** And this is sourced directly from the dbt documentation, and so I have that link right here.
>
> **[1:59](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=119)** But essentially is, we're going to create a Jinja test.
>
> **[2:02](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=122)** We're going to give it the name generic_not_null.
>
> **[2:05](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=125)** We're going to say, "Hey, we're going to have the model and the column name."
>
> **[2:08](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=128)** And so we're going to say select * from model, column_name where it's not_null.
>
> **[2:12](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=132)** And then we're going to end the test.
>
> **[2:14](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=134)** And so going back to our schema.yml file, we simply can just say generic_not_null, and bring in our test here.
>
> **[2:25](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=145)** So now that that's ready, let's do dbt test.
>
> **[2:32](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=152)** And there you have it, it's there.
>
> **[2:35](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=155)** We have our generic_not_null test happening.
>
> **[2:37](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=157)** But say, for instance, we want to store our test and say, "Hey, all right, I've have these tests, I want to see the output of it."
>
> **[2:45](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=165)** Well, we go back to our dbt_project.yml file.
>
> **[2:51](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=171)** And we create a new value called tests.
>
> **[2:55](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=175)** And we're going to say store_failures, true.
>
> **[3:00](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=180)** Great.
>
> **[3:03](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=183)** Now that it's ready, we can do dbt test again.
>
> **[3:08](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=188)** And we can see our test failures over here in main_dbt_test__audit codes.
>
> **[3:14](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=194)** So, let's take this code right here.
>
> **[3:18](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=198)** Let's go into our run_sql_queries.
>
> **[3:24](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=204)** And let's replace our SQL code with what it provided.
>
> **[3:29](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=209)** And now we can see the output code of that.
>
> **[3:31](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=211)** And there you go.
>
> **[3:32](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=212)** That's how you run tests in dbt.
>
> **[3:35](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=215)** And finally, we've completed our dbt project.
>
> **[3:39](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=219)** We have it set where we have all our models running, we have documentation, and we have tests.
>
> **[3:44](https://www.linkedin.com/learning/data-engineering-with-dbt/implementing-tests-within-the-schema-yml-file?u=76281980&t=224)** And the final step with our complete dbt project, we'll now put it into production.

> [!info]- Semantic Content
>
> **Code Identifiers:** generic_not_null (4), not_null (3), summons_number (2), bronze_parking_violation (1), bronze_parking_violations (1)
> **Code Keywords:** let (10), function (1), finally, (1)
> **CLI Commands:** make (5), cd (1)
> **File Paths:** schema.yml (2), generic_not_null.sql (1), dbt_project.yml (1)
> **Env Vars:** sql (1)
> **Cross-References:** go back to (1)
> **Definitions:** essentially is (1)
> **Analogies:** for instance (1)


### 11. Deploying Your dbt Project

> [↑ Back to Table of Contents](#table-of-contents)

#### Utilizing multiple dbt profiles
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=0)** - [Instructor] Now that we've completed our entire DBT project, we're ready to move into production.
>
> **[0:04](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=4)** How exciting.
>
> **[0:06](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=6)** Well, we have one small problem though.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=8)** If we go into our profiles dot YAML file over here, we can see that we only have dev.
>
> **[0:15](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=15)** And if you're having a production database and anyone can change it easily, just doing DBT Run, it's not really a safe database to use.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=25)** So what we need to do is we need to create a separate database for prod and create a separate profile for prod and DBT makes that relatively easy to do.
>
> **[0:33](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=33)** So to do such, I'm going to copy and paste it in here and I'll provide this file to you so you have it.
>
> **[0:38](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=38)** And so essentially what's happening here is we have NYC parking violations for our outputs we have Dev, DuckDB, and the path to it.
>
> **[0:46](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=46)** And similar we have Prod DuckDB and the path to it.
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=50)** So to create this project, since you're creating a whole new DuckDB database called Prod NYC parking violations, we have to create a new database again.
>
> **[0:59](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=59)** But we did that before in the way earlier steps and we'll do it again.
>
> **[1:03](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=63)** And so we have our DuckDB instance set up and I'm going to create a new cell for us to work in.
>
> **[1:12](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=72)** And it's going to be the same thing as the earlier steps.
>
> **[1:15](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=75)** So I'll copy and paste it in.
>
> **[1:17](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=77)** So you can see again our first import.
>
> **[1:20](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=80)** We're going to pull in the CSV in our data file, in our data folder for first import.
>
> **[1:27](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=87)** We're going to have our second import right here for our second CSV.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=95)** And then we're going to use the with DuckDB connect.
>
> **[1:40](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=100)** And again, we're going to change the name of the database to prod underscore NYC parking violations.
>
> **[1:47](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=107)** So run that and we can see our new database available.
>
> **[1:52](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=112)** So now let's run our DBT model.
>
> **[1:55](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=115)** So make sure we're in the right directory.
>
> **[1:57](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=117)** DBT debug perfect and then DBT compile.
>
> **[2:04](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=124)** But we're going to do something a little different this time.
>
> **[2:07](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=127)** We're going to change the target.
>
> **[2:08](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=128)** And so we're going to do dash dash target prod.
>
> **[2:15](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=135)** Perfect. And now do DBT run dash dash target prod.
>
> **[2:24](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=144)** And there we go, we now have our production database set up for us and we can go check it out for ourselves.
>
> **[2:33](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=153)** So let's set up our SQL queries, copy and paste this over here, bring it down.
>
> **[2:41](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=161)** And let's make sure to change this to prod show tables.
>
> **[2:46](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=166)** And again, we have our tables and so now we can choose which ones you want to go for which rephrase.
>
> **[2:53](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=173)** We can choose which database we want to choose within DBT with the various profiles.
>
> **[2:58](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=178)** In our next video, we're going to create a GitHub actions workflow that'll do this entire thing automatically.
>
> **[3:04](https://www.linkedin.com/learning/data-engineering-with-dbt/utilizing-multiple-dbt-profiles?u=76281980&t=184)** It's super cool, so let's get over there.

> [!info]- Semantic Content
>
> **Env Vars:** dbt (8), nyc (3), csv (2), yaml (1), sql (1)
> **Code Keywords:** let (4), import. (2), super (1)
> **Prerequisites:** set up (3)
> **CLI Commands:** make (2)
> **Cross-References:** next video (1)
> **Tools:** github (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Deploying with GitHub workflows
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=0)** - [Lecturer] So we have our production database, and for our profiles, we have our production profile.
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=5)** So how do we get this to run automatically without our own intervention?
>
> **[0:10](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=10)** Well, there are multiple ways to do this, and it's really dependent on your database and the systems you have.
>
> **[0:16](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=16)** So this won't be a one size fit all solution and you're going to have to research what you do for that.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=21)** But for this course, we're going to keep it simple and use GitHub Actions workflows.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=25)** And to do that, we already have it set up and we have .github and workflows and we're going to add a new workflow in here.
>
> **[0:32](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=32)** So to create a new one, let's go to a terminal.
>
> **[0:35](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=35)** Let's go to our terminal, let's check what directory you're currently in.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=39)** And note that you can't see .github 'cause it has a dot, so that means it's a hidden file.
>
> **[0:44](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=44)** touch .github workflows, and then we're going to call this run-dbt-prod.yml.
>
> **[0:59](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=59)** And so we have that here.
>
> **[1:00](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=60)** And I'm going to copy and paste what this file is.
>
> **[1:04](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=64)** Again, this is more on the advance side, but I still want to show how it looks end to end for you so you have reference.
>
> **[1:10](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=70)** I would study this file that's going to be included and check out other documentation and articles throughout the internet that really walks you through how to do this.
>
> **[1:18](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=78)** But at a high level, I'm going to zoom out a little bit and we have our name and then we say on push or pull request, so when we make a new pull requests and merge it.
>
> **[1:29](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=89)** And then I have here schedule, you can have it scheduled right here to run at 8:00 AM every single day.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=95)** The reason why I have this commented out is I don't want this running indefinitely without you knowing about it.
>
> **[1:40](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=100)** So it's commented out.
>
> **[1:41](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=101)** But just so you know, you can schedule them.
>
> **[1:43](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=103)** I have it working with merging and pulling branches.
>
> **[1:46](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=106)** For environment, we set the directory for our profiles and our project for our DBT project.
>
> **[1:52](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=112)** And then we have the job.
>
> **[1:53](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=113)** We're going to build a Python setup and we're going to install our dependencies.
>
> **[1:57](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=117)** Hence why we had to create requirements, that text file earlier.
>
> **[2:02](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=122)** And then once that's in, we're going to run DBT debug, compile with prod, run with prod, and there are tests for prod.
>
> **[2:10](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=130)** So, now that's there, we're going to merge this into our code space.
>
> **[2:15](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=135)** And do such, we just have to slide on over here.
>
> **[2:18](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=138)** We have all our files, let's add them all in.
>
> **[2:23](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=143)** So we've staged all of our changes.
>
> **[2:26](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=146)** We're going to commit them all.
>
> **[2:27](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=147)** We're going to have a little message here saying, added github workflows.
>
> **[2:33](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=153)** And now we're going to commit.
>
> **[2:35](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=155)** And now let's publish the branch.
>
> **[2:40](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=160)** We're going to create a pull request.
>
> **[2:42](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=162)** We're going to merge into main, and now we're going to create it.
>
> **[2:48](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=168)** And as you can see, we can merge our pull request, Merge Pull Requests, Create Merge Commit.
>
> **[2:56](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=176)** Great.
>
> **[2:58](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=178)** So let's go to our workflow.
>
> **[3:01](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=181)** And you see I've already merged it.
>
> **[3:03](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=183)** And now, let's go to our Actions.
>
> **[3:06](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=186)** And you can see it's now running in the background here.
>
> **[3:09](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=189)** So we can click build and you can see it's set up the job, it's installing dependencies, and now it's going to run the DBT actions.
>
> **[3:21](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=201)** And so this failed and that's intentional.
>
> **[3:26](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=206)** And I want to highlight why did this fail here.
>
> **[3:28](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=208)** So let's go back to our pull request here.
>
> **[3:32](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=212)** Go back to here.
>
> **[3:34](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=214)** And what's happening is in our profiles.yml file, we're saying that the path is here, but GitHub Actions isn't starting from the nyc_parking_violations table.
>
> **[3:49](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=229)** It's actually starting from the root directory.
>
> **[3:51](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=231)** So to fix it, we just have to do this little change right here.
>
> **[3:56](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=236)** Now that's saved, we can do another commit.
>
> **[4:00](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=240)** So let's add this.
>
> **[4:01](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=241)** It's staged.
>
> **[4:03](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=243)** And updated profiles.yml file.
>
> **[4:12](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=252)** Commit.
>
> **[4:18](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=258)** We're going to create a new pull request.
>
> **[4:22](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=262)** Create.
>
> **[4:26](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=266)** Updated profiles.yml file.
>
> **[4:29](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=269)** And now we're going to merge this.
>
> **[4:34](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=274)** Confirm merge.
>
> **[4:38](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=278)** Awesome.
>
> **[4:39](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=279)** So now let's go back to our Actions and we can see, let's delete this one real quick, Cancel run, and we can see it running now and it should be as successful all the way through.
>
> **[4:51](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=291)** And you see that all checks have passed.
>
> **[4:54](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=294)** And in addition, we can even see the test and it picks up on that warning as well.
>
> **[5:00](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=300)** And there you have it, you've completed your DBT project and we've now put it into production.
>
> **[5:05](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=305)** And that's it.
>
> **[5:06](https://www.linkedin.com/learning/data-engineering-with-dbt/deploying-with-github-workflows?u=76281980&t=306)** Thank you so much.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), this. (3), this, (1), delete (1)
> **Tools:** github (6), terminal (2)
> **File Paths:** profiles.yml (3), run-dbt-prod.yml (1)
> **Env Vars:** dbt (4)
> **UI Navigation:** go to (4)
> **Prerequisites:** set up (2), setup (1), install (1)
> **Cross-References:** go back to (3)
> **CLI Commands:** make (1), python (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-with-dbt/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-with-dbt/next-steps?u=76281980&t=0)** - And that's a wrap.
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-with-dbt/next-steps?u=76281980&t=1)** Thank you so much for taking this dbt course with me.
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-with-dbt/next-steps?u=76281980&t=5)** In this course, you learned how to set up a dbt project, how to set up a database, connect the dbt project to the database, and then build the medallion architecture with the New York City tickets data.
>
> **[0:17](https://www.linkedin.com/learning/data-engineering-with-dbt/next-steps?u=76281980&t=17)** I really appreciate you taking the time 'cause the best way to learn is through coding itself, and we did that.
>
> **[0:23](https://www.linkedin.com/learning/data-engineering-with-dbt/next-steps?u=76281980&t=23)** You can learn more about work I do by following me on LinkedIn, or you can go to my website [onthemarkdata.com](https://onthemarkdata.com).
>
> **[0:30](https://www.linkedin.com/learning/data-engineering-with-dbt/next-steps?u=76281980&t=30)** Or if you want more content from me, check out my Substack, scalingdataops, where I interview data leaders about scaling data infrastructure.
>
> **[0:37](https://www.linkedin.com/learning/data-engineering-with-dbt/next-steps?u=76281980&t=37)** See you.

> [!info]- Semantic Content
>
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