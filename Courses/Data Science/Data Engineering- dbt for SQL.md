---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: data-engineering-dbt-for-sql
url: "https://www.linkedin.com/learning/data-engineering-dbt-for-sql"
duration_minutes: 91
duration: 1h 31m
level: Advanced
updated: 9/26/2023
learners: 54969
skills:
  - Data Engineering
  - SQL
  - Data Build Tool (DBT)
exercise_files: true
github: "https://github.com/LinkedInLearning/advance-your-sql-skills-for-data-engineering-3315012/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHyyrhbhSEAOg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1695671472229?e=2147483647&amp;v=beta&amp;t=8xdAfDbipieM8f2bx4ZpUCrBRheDNq5YqT1rnaKVIVM"
linkedin_topic: Data Science
learning_paths:
  - '[[Master Data Engineering]]'
prev_courses:
  - '[[Complete Guide to Python for Data Engineering- From Beginner to Advanced]]'
next_courses:
  - '[[Advanced Snowflake- Deep Dive Cloud Data Warehousing and Analytics]]'
path_nav: '[{"path":"Master Data Engineering","position":6,"total":8,"prev":"Complete Guide to Python for Data Engineering- From Beginner to Advanced","next":"Advanced Snowflake- Deep Dive Cloud Data Warehousing and Analytics"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - topic/web-development
  - skill/data-engineering
  - skill/sql
  - skill/data-build-tool-dbt
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Data%20Engineering-%20dbt%20for%20SQL.md)

![Data Engineering: dbt for SQL](https://media.licdn.com/dms/image/v2/D560DAQHyyrhbhSEAOg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1695671472229?e=2147483647&amp;v=beta&amp;t=8xdAfDbipieM8f2bx4ZpUCrBRheDNq5YqT1rnaKVIVM)

# Data Engineering: dbt for SQL

> Are you looking for a better—and easier—way to manage SQL code? In this course, instructor Vinoo Ganesh shows you how to use dbt (data build tool) to operationalize SQL in powerful ways and make the process of transforming data simpler and faster. In each chapter, Vinoo presents a real-world situation or problem, and provides focused code examples explaining how to solve the problem. He shows you 

> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-dbt-for-sql) | 1h 31m | Advanced | 55K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Introduction](#introduction)
  - [What you should know](#what-you-should-know)
  - [Codespaces introduction](#codespaces-introduction)
- [**1. SQL for Data Engineers**](#1-sql-for-data-engineers) (5 videos)
  - [SQL as a data engineer](#sql-as-a-data-engineer)
  - [The modern data stack and SQL](#the-modern-data-stack-and-sql)
  - [Schema design](#schema-design)
  - [Challenge: Schema design](#challenge-schema-design)
  - [Solution: Schema design](#solution-schema-design)
- [**2. Modeling in SQL**](#2-modeling-in-sql) (6 videos)
  - [Supply chain outage: SQL spaghetti](#supply-chain-outage-sql-spaghetti)
  - [Data build tool (dbt)](#data-build-tool-dbt)
  - [Modeling in dbt](#modeling-in-dbt)
  - [Running dbt](#running-dbt)
  - [Challenge: Modeling taxi data](#challenge-modeling-taxi-data)
  - [Solution: Modeling taxi data](#solution-modeling-taxi-data)
- [**3. Table Materializations**](#3-table-materializations) (5 videos)
  - [Crypto cost: Materializations](#crypto-cost-materializations)
  - [Materialization terminology](#materialization-terminology)
  - [Incremental materializations](#incremental-materializations)
  - [Challenge: Materializations](#challenge-materializations)
  - [Solution: Materializations](#solution-materializations)
- [**4. Common Table Expressions vs. Subqueries**](#4-common-table-expressions-vs-subqueries) (5 videos)
  - [Construction planning: Query complexity](#construction-planning-query-complexity)
  - [Common table expressions (CTEs) vs. subqueries](#common-table-expressions-ctes-vs-subqueries)
  - [CTEs in dbt](#ctes-in-dbt)
  - [Challenge: Implementing CTEs](#challenge-implementing-ctes)
  - [Solution: Implementing CTEs](#solution-implementing-ctes)
- [**5. Testing SQL with dbt**](#5-testing-sql-with-dbt) (5 videos)
  - [Advertising: Testing SQL](#advertising-testing-sql)
  - [Unit testing using dbt](#unit-testing-using-dbt)
  - [Custom tests in dbt](#custom-tests-in-dbt)
  - [Challenge: Testing SQL](#challenge-testing-sql)
  - [Solution: Testing SQL](#solution-testing-sql)
- [**Conclusion**](#conclusion) (2 videos)
  - [Looking ahead](#looking-ahead)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/introduction?u=76281980&t=0)** - Are you tired of dealing with production outages after seemingly small [[SQL]] changes, or are you just looking for a better way to build and manage SQL code?
>
> **[0:10](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/introduction?u=76281980&t=10)** If so, this class is for you.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/introduction?u=76281980&t=13)** In this hands-on course, we'll talk about how you can use DBT, one of the most prominent open-source technologies today, to operationalize SQL in powerful ways.
>
> **[0:24](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/introduction?u=76281980&t=24)** You'll design and implement DBT models based on real world scenarios that I've personally encountered.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/introduction?u=76281980&t=31)** Hi, my name is Vinoo and I've spent a career building critical [[Data Pipelines]] for the healthcare, defense, and financial sector using tools in this course.
>
> **[0:42](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/introduction?u=76281980&t=42)** If you want to advance your SQL skills and learn to leverage DBT in powerful ways, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Data Pipelines]] (1)
> **Env Vars:** sql (4), dbt (3)
> **Speakers:** - are (1)

#### [What you should know](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/what-you-should-know?u=76281980&t=0)** - [Instructor] The path to [[Data Engineering]] is as unique as those that make up the profession.
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/what-you-should-know?u=76281980&t=5)** Data analysts, scientists, software engineers, and virtually every other profession have made inroads to the data engineering profession.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/what-you-should-know?u=76281980&t=13)** As such, for this advanced course, it's crucial that you, as a data engineer, have the following skills.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/what-you-should-know?u=76281980&t=20)** First, Experience with [[SQL]].
>
> **[0:23](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/what-you-should-know?u=76281980&t=23)** This course is intended to help you, as a data engineer, enhance your SQL skills.
>
> **[0:29](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/what-you-should-know?u=76281980&t=29)** As such, it involves reading and writing SQL code.
>
> **[0:33](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/what-you-should-know?u=76281980&t=33)** While the primary focus is the ecosystem around SQL, a solid understanding of SQL is a must.
>
> **[0:41](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/what-you-should-know?u=76281980&t=41)** Second, Unix Commands.
>
> **[0:44](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/what-you-should-know?u=76281980&t=44)** Some familiarity with the Bash script or Unix will be helpful.
>
> **[0:48](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/what-you-should-know?u=76281980&t=48)** In this class, we use some basic Unix commands and utilities to navigate around the file system.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/what-you-should-know?u=76281980&t=55)** We do work with some text editors as well.
>
> **[0:58](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/what-you-should-know?u=76281980&t=58)** Third, Comfort in VS Codes or IDEs in general.
>
> **[1:03](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/what-you-should-know?u=76281980&t=63)** In this class, we'll use a number of VS Code plugins which connect to various pieces of technology, including MariaDB.
>
> **[1:12](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/what-you-should-know?u=76281980&t=72)** It is important to feel comfortable working in an IDE with an integrated terminal.
>
> **[1:17](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/what-you-should-know?u=76281980&t=77)** This background should be enough to kickstart our coursework.
>
> **[1:21](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/what-you-should-know?u=76281980&t=81)** If you have all of this background or are ready to do some minor brushing up along the way, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Data Engineering]] (2)
> **Env Vars:** sql (5), ide (1)
> **Tools:** bash (1), vs code (1), terminal (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Codespaces introduction](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=0)** - [Instructor] This course uses the [[GitHub]] [[Codespaces]] feature to bring out hands-on and live coding experience to the material.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=8)** GitHub Codespaces allows you to author code and live deploy that code onto a running VM.
>
> **[0:14](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=14)** In Codespaces you are free to follow along or try any of the exercises in this video series without risk of breaking your local setup.
>
> **[0:24](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=24)** Accompanying this series of videos is a corresponding GitHub repository.
>
> **[0:29](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=29)** That repository contains the most up-to-date segments of code and follow along portions, as well as the relevant before and after setup.
>
> **[0:38](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=38)** You can provision a GitHub Codespace off of one of the branches of the repository.
>
> **[0:42](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=42)** This video series provisions the starting state of the codespace off of the video's begin branch.
>
> **[0:49](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=49)** We'll talk a bit about branch naming conventions shortly.
>
> **[0:52](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=52)** [[LinkedIn]] Learning's use of GitHub Codespaces relies on exercises that are broken down on a per branch basis with before and after states.
>
> **[1:01](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=61)** In the accompanying GitHub repository, you will find a number of branches.
>
> **[1:06](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=66)** The main branch corresponds to the main line of the repo and won't be used in the exercise portion of this course.
>
> **[1:14](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=74)** Instead, you will find branches with the following convention.
>
> **[1:17](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=77)** Chapter_video.
>
> **[1:20](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=80)** For example, a branch that corresponds to the exercise covered in Chapter 2, Video 3 would be listed as 02_03.
>
> **[1:30](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=90)** In some situations the videos will have before and end states.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=95)** In these situations, the branch will be suffixed with either a B for begin or an E for end.
>
> **[1:42](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=102)** For example, a branch that corresponds to the beginning state of Chapter 2, Video 5 would be named 02_05b, and a branch that corresponds to the end state would be 02_05e.
>
> **[2:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=120)** To create a codespace, you can select the Open Codespace button right from your course homepage.
>
> **[2:06](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=126)** This will open up the Codespaces Configuration landing page for the course.
>
> **[2:11](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=131)** To create the codespace, first, mouse over the dropdown caret of the green Create codespace on main button, and change the option to configure and create codespace if it's not already selected.
>
> **[2:25](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=145)** From there, press the green configure and create codespace button.
>
> **[2:30](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=150)** On the next screen, you can select from the branch dropdown which branch you wish to create a codespace off of.
>
> **[2:37](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=157)** Once everything is properly selected, you can press Create Codespace.
>
> **[2:41](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=161)** This will start the process of setting up your codespace.
>
> **[2:45](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=165)** Codespace offers a powerful and interactive way to follow along and participate with this course.
>
> **[2:51](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=171)** I'd highly encourage you to take advantage of this feature and follow along yourself.
>
> **[2:56](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/codespaces-introduction?u=76281980&t=176)** Now, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (6), [[Codespaces]] (5), [[LinkedIn]] (1)
> **Tools:** github (6)
> **Prerequisites:** setup (2), configure (2)
> **UI Navigation:** dropdown (2), select the (1)
> **CLI Commands:** find (2)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. SQL for Data Engineers

[↑ Back to Table of Contents](#table-of-contents)

#### [SQL as a data engineer](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980&t=0)** - If you're a data engineer chances are you've been using [[SQL]] quite extensively.
>
> **[0:06](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980&t=6)** Despite its age originating in the 1970s, SQL remains a critical tool in the data engineer's arsenal.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980&t=13)** In today's data-driven world, modern data engineers and analysts rely on SQL for a wide range of tasks from [[Data Transformation]] to analysis.
>
> **[0:23](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980&t=23)** The resurgence of SQL can be attributed to the emergence of highly scalable platforms like [[Snowflake]] and Databricks.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980&t=31)** These platforms have made SQL the go-to language for handling large scale data.
>
> **[0:36](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980&t=36)** So let's look at a few reasons why SQL has continued to be a favorite.
>
> **[0:41](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980&t=41)** SQL has been a favorite for a few reasons.
>
> **[0:45](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980&t=45)** First, much of the data engineer's work involves running ETL, extract transform load, operations across various [[Relational Databases]] like [[PostgreSQL|Postgres]] and [[MySQL]].
>
> **[0:58](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980&t=58)** SQL is a language used to interact with these [[Databases]] and most data engineers are already familiar with it when they start their roles.
>
> **[1:06](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980&t=66)** Second, SQL offers a unified processing data experience.
>
> **[1:11](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980&t=71)** Its versatility allows data engineers to perform ingestion, transformation, aggregation and analytics all within a single language.
>
> **[1:21](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980&t=81)** This simplifies the maintenance and development of [[Data Pipelines]].
>
> **[1:26](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980&t=86)** Third, SQL can be both scalable and efficient.
>
> **[1:30](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980&t=90)** It's a declarative language, meaning engineers only need to specify the desired [[Data Manipulation]] or retrieval leaving the query optimization engine to handle the complexities of execution.
>
> **[1:43](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980&t=103)** These query optimization engines have become fast and efficient, handling large data sets with ease.
>
> **[1:49](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980&t=109)** Fourth, SQL is user friendly and easy to learn.
>
> **[1:53](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980&t=113)** It's much more straightforward compared to low level programming languages or distributed computing frameworks.
>
> **[1:59](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980&t=119)** Its declarative nature makes it easier to read and understand further contributing to its widespread adoption.
>
> **[2:07](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980&t=127)** The benefits of SQL go on and on making it an essential part of every data engineer's toolkit.
>
> **[2:13](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980&t=133)** However, many data engineers only scratch the surface of SQL's capabilities and may not use it to the full potential.
>
> **[2:21](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980&t=141)** This [[LinkedIn]] Learning course is designed to help modern data engineers like you advance your SQL skills by introducing various methods and techniques to harness its power effectively.
>
> **[2:32](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/sql-as-a-data-engineer?u=76281980&t=152)** Get ready to up your SQL game and unleash the true potential of your [[Data Engineering]] endeavors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (15), [[Data Transformation]] (1), [[Snowflake]] (1), [[Relational Databases]] (1), [[PostgreSQL|Postgres]] (1)
> **Env Vars:** sql (15), etl (1)
> **CLI Commands:** mysql (1)
> **Definitions:** is a  (1)
> **Speakers:** - if (1)

#### [The modern data stack and SQL](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=0)** - [Instructor] We'll start by exploring the modern data stack, a group of technologies that has revolutionized [[Data Processing]] and analytics in our current era.
>
> **[0:09](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=9)** The modern data stack emerged in response to the ever-increasing volume and complexity of data, as well as the growing demand for faster insights and self-service analytics.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=20)** Traditional data architectures relying on on-premise data warehouses and ETL tools could no longer keep up with the needs of the modern enterprise.
>
> **[0:30](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=30)** To address these challenges, companies sought a more flexible, scalable, and cost-effective solution, capable of handling large data volumes and providing [[Real-Time]] insights.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=43)** Enter the modern data stack, equipped with cloud-based tools and platforms designed to meet these modern needs.
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=50)** So what exactly is the modern data stack?
>
> **[0:53](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=53)** It's a term used to describe a comprehensive set of tools and technologies that have emerged in recent years to help companies collect, store, and analyze data effectively.
>
> **[1:06](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=66)** The core components of the modern data stack typically include a data warehouse, which is a centralized repository for storing and organizing data, facilitating efficient querying and analysis, an ETL tool, which enables the movement and transformation of data from various sources into the data warehouse, a data lake, which is a storage system that allows storing large volumes of raw and [[Unstructured Data]], and a BI platform, or [[Business Intelligence (BI)|business intelligence]] platform, that empowers users to visualize and analyze data, gaining valuable insights for [[Decision-Making]].
>
> **[1:45](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=105)** However, the modern data stack continues to evolve and now includes an array of additional tools and technologies, such as [[Data Quality]] and observability tools, [[Cost Management]] platforms, orchestration platforms, data catalogs, and more.
>
> **[2:02](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=122)** [[SQL]] plays a crucial role in the modern data stack, serving as the language for manipulating and analyzing data within the warehouse.
>
> **[2:11](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=131)** Popular tools like [[Snowflake]], Airflow, Fivetran, dbt, and Looker often integrate SQL seamlessly into their functionalities.
>
> **[2:22](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=142)** The modern data stack offers several advantages, making it the go-to choice for modern [[Data Engineering]].
>
> **[2:30](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=150)** First, flexibility and [[Scalability]].
>
> **[2:32](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=152)** It outshines traditional data architectures with its ability to adapt to changing requirements and handle massive data volumes efficiently.
>
> **[2:42](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=162)** Second, speed and ease of setup.
>
> **[2:45](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=165)** Setting up and using the stack is faster and more straightforward, accelerating data processing tasks.
>
> **[2:52](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=172)** Cost effectiveness.
>
> **[2:54](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=174)** Cloud-based tools with a pay-as-you-go model ensure efficient resource utilization and cost savings.
>
> **[3:02](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=182)** Security.
>
> **[3:03](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=183)** Storing data in the cloud enhances security with access granted to only authorized users.
>
> **[3:09](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=189)** And finally, easy maintenance and upgrades.
>
> **[3:13](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=193)** Cloud-based tools offer automatic upgrades, simplifying maintenance and keeping the stack up-to-date.
>
> **[3:19](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=199)** While there's much to explore in the modern data stack, our focus in this course will revolve around enhancing your SQL skills.
>
> **[3:26](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=206)** We'll dive into the tools and technologies involved in the SQL ecosystem and empower you to leverage this powerful language to its full potential.
>
> **[3:35](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/the-modern-data-stack-and-sql?u=76281980&t=215)** Get ready to embark on a thrilling journey of data engineering and SQL development.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5), [[Data Processing]] (2), [[Data Engineering]] (2), [[Real-Time]] (1), [[Unstructured Data]] (1)
> **Env Vars:** sql (5), etl (2)
> **Definitions:** is a  (2)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Schema design](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980&t=0)** - [Instructor] To enhance your [[SQL]] skills, it is crucial to grasp the fundamental principles of relational [[Database Design]].
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980&t=7)** In this video, we'll cover two essential concepts, normal [[Forms]] and functional dependencies.
>
> **[0:14](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980&t=14)** Let's say you have some example data to illustrate these concepts.
>
> **[0:18](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980&t=18)** Imagine you have two tables, employee with details like names, ID numbers, and departments, and department with information about different departments and their managers.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980&t=31)** Normal forms are a set of rules that organize data in a database to prevent issues like data redundancy or inconsistencies.
>
> **[0:40](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980&t=40)** There are different levels of normal forms with the first normal form, or 1NF, being the most basic.
>
> **[0:48](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980&t=48)** In the first normal form, each row in a table must be unique and each column should only contain one piece of data, no repeating data.
>
> **[0:59](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980&t=59)** For example, in our employee table, we can't have two rows with the same ID number, and the name column can't combine both the first and last name.
>
> **[1:10](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980&t=70)** The second normal form builds on the first normal form by requiring that each non-primary key column be fully dependent on the primary key.
>
> **[1:21](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980&t=81)** In our employee table, the primary key is the ID number, and both the name and department columns meet the 2NF requirement as they are fully dependent on the ID number.
>
> **[1:33](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980&t=93)** However, the department manager column doesn't fulfill this condition as it depends on the department column.
>
> **[1:40](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980&t=100)** Therefore, this table violates 2NF.
>
> **[1:44](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980&t=104)** The third normal form further refines the structure, disallowing transitive dependencies.
>
> **[1:50](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980&t=110)** A transitive dependency occurs when one column depends on another which in turn depends on a third column.
>
> **[1:57](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980&t=117)** For instance, if our employee table had a department manager column dependent on both the department and the employee columns, it would violate 3NF.
>
> **[2:07](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980&t=127)** Functional dependencies are relationships between sets of data, where one set, the dependent set, depends on another set, the independent set, for its value.
>
> **[2:18](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980&t=138)** The functional dependency rule relates closely to the 2NF rule, stating that if one column is dependent on another, then that column must be part of the primary key.
>
> **[2:29](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980&t=149)** In our employee table, the ID number is the primary key and it's dependent on both the name and department columns, complying with the functional dependency rule.
>
> **[2:40](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980&t=160)** However, in the same employee table, the department manager column is dependent on the department column, which is not part of the primary key, thus this table violates the functional dependency rule.
>
> **[2:53](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980&t=173)** By adhering to the rules of normal forms, you can ensure that your data is structured efficiently and is free from redundancies and inconsistencies.
>
> **[3:02](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980&t=182)** This organization enhances the efficiency and reliability of your database.
>
> **[3:08](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/schema-design?u=76281980&t=188)** As an advanced SQL practitioner, mastering normal forms enables you to design an optimal database schema, setting the foundation for robust [[Data Management]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (5), [[SQL]] (2), [[Database Design]] (1), [[Data Management]] (1)
> **Analogies:** imagine (1), for example (1), for instance (1)
> **Env Vars:** sql (2)
> **Speakers:** - [instructor] (1)

#### [Challenge: Schema design](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=0)** (bouncy upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=5)** - [Narrator] Let's put some of these skills to the test.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=8)** In this challenge, you're going to take on the role of a company that sells [[Microsoft Products|products]] online.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=13)** The company wants to create a database to track its internal sales information and they have hired you for the job.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=20)** They also have big plans and want you to design a schema that is extensible and stable.
>
> **[0:27](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=27)** To kick things off, they have provided a few pieces of information that they would like to track.
>
> **[0:33](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=33)** First, the company has a catalog of products.
>
> **[0:37](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=37)** Each product has a name, price and current inventory count associated with it.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=43)** Multiple products can have the same name, the same price and the same inventory count.
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=50)** Second, they would like to track sales.
>
> **[0:53](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=53)** They have an interesting way of handling the sales too.
>
> **[0:56](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=56)** Each sale corresponds to a single item being sold.
>
> **[1:01](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=61)** This means that in the event that a customer buys multiple quantities of the same item, each item will be recorded as a separate sale.
>
> **[1:11](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=71)** Third, all sales are made by individual salespeople.
>
> **[1:15](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=75)** Each salesperson has a name, but be careful.
>
> **[1:18](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=78)** Some of these names may not be unique.
>
> **[1:21](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=81)** Finally, the store would like to keep track of the commissions for salespeople.
>
> **[1:26](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=86)** Each commission is a percentage that depends both on the salesperson selling the item, as well as on the item that is sold.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=94)** This means that different salespeople have different percent commissions.
>
> **[1:38](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=98)** For example, Alice has 20%, Bob has 15%, Charlie has 12%, and so on.
>
> **[1:46](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=106)** Can you design an appropriate schema for this store?
>
> **[1:49](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=109)** Please ensure that your schema design is compliant with each of the normal [[Forms]] specified previously.
>
> **[1:56](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=116)** There are multiple different correct answers, so don't fret about trying to find the exact perfect schema.
>
> **[2:02](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-schema-design?u=76281980&t=122)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (3), [[Forms]] (1)
> **Definitions:** means that (2), is a  (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (bouncy upbeat music) (1)

#### [Solution: Schema design](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=5)** - [Instructor] Congratulations on completing your first challenge.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=8)** Keep in mind there are multiple correct answers, so don't be too concerned if your solution doesn't match perfectly.
>
> **[0:14](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=14)** Let's start designing.
>
> **[0:17](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=17)** We know that the company has a catalog of [[Microsoft Products|products]] and that multiple products may have the same name, the same price, and the same inventory count.
>
> **[0:26](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=26)** So let's first design our product table with these specifications in mind.
>
> **[0:30](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=30)** We also know that the company would like to keep track of sales and that all sales are performed by individual salespeople.
>
> **[0:38](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=38)** Each sale of a single item will appear as a new row in our table.
>
> **[0:44](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=44)** Next, we know that we have different salespeople and that each of them have different commissions.
>
> **[0:49](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=49)** Let's create a table to represent that.
>
> **[0:53](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=53)** We now have a basic version of our schema but we haven't vetted it with any of the normal [[Forms]] yet.
>
> **[0:58](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=58)** Let's do that now.
>
> **[1:01](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=61)** The first normal form says that each row must be unique.
>
> **[1:06](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=66)** Let's test our tables to ensure that this passes.
>
> **[1:10](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=70)** It looks like right off the bat we have three violations to the 1NF rule.
>
> **[1:14](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=74)** If products can have the same name, price, and inventory, there could be a situation where we end up with the exact same row twice.
>
> **[1:23](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=83)** The same is true with the sales table and the salesperson table in its current form.
>
> **[1:29](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=89)** Let's fix this.
>
> **[1:33](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=93)** To fix this, let's add in primary keys to each row and update the references to refer to these primary keys, which in all cases will be the ID column.
>
> **[1:44](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=104)** Great.
>
> **[1:45](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=105)** Now, let's test the second NF rule, which states that each non-primary key column must be fully dependent on the primary key.
>
> **[1:56](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=116)** In our products table, each non-primary key column is fully dependent on product ID.
>
> **[2:02](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=122)** Looks like we passed there.
>
> **[2:04](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=124)** The same can be said about our sales table and our salesperson table.
>
> **[2:09](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=129)** It looks like our schema is compliant with the second normal form.
>
> **[2:12](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=132)** Now, let's validate against the third normal form which just allows transitive dependencies.
>
> **[2:17](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=137)** In this case, the product table does not seem to have any transitive dependencies given that each non-key attribute, namely name, price and inventory, depend only on the primary key.
>
> **[2:30](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=150)** When we look at the sales table, we also don't see any transitive dependencies, so things are looking good so far.
>
> **[2:36](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=156)** However, when we come to the salesperson table, we do find a problem, specifically with the department attribute.
>
> **[2:44](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=164)** The department attribute is dependent on the salesperson's name.
>
> **[2:47](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=167)** This creates a transitive dependency as department depends on the non-key attribute name which in turn depends on salesperson ID, which is the primary key.
>
> **[2:58](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=178)** That creates an issue.
>
> **[3:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=180)** To make our tables compliant with a third normal form, we should separate the department information into a separate table.
>
> **[3:06](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=186)** Our final schema will look as follows.
>
> **[3:08](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=188)** Great work completing your first challenge, and again, don't worry if your schema design is slightly different than mine.
>
> **[3:15](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-schema-design?u=76281980&t=195)** As long as it's compliant with all the normal forms, you should be good to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (4), [[Forms]] (2)
> **CLI Commands:** find (1), make (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 2. Modeling in SQL

[↑ Back to Table of Contents](#table-of-contents)

#### [Supply chain outage: SQL spaghetti](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=0)** - [[SQL]], while immensely powerful, can often become unwieldy and challenging to manage, especially as companies deal with massive amounts of data and hard-coded table and column names.
>
> **[0:14](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=14)** Let me share a true story from my early consulting days to illustrate this point.
>
> **[0:19](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=19)** I was hired by a supply chain company that heavily relied on a set of source tables for making distribution decisions.
>
> **[0:27](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=27)** These tables contained inventory data for various goods and based on this information, the company would create shipping and distribution manifests.
>
> **[0:37](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=37)** To kickstart their data pipeline, they had a mammoth SQL file with over 10,000 lines of code.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=43)** The file was actually called Mammoth.SQL.
>
> **[0:47](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=47)** This single file held all the logic and instructions to create and update inventory data sets which were then used to generate core shipping manifests through subsequent pipelines.
>
> **[0:59](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=59)** In essence, this single file was the linchpin for all subsequent steps in the pipeline.
>
> **[1:06](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=66)** As you can imagine, dealing with a SQL file of this magnitude was far from easy.
>
> **[1:12](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=72)** The code was complex, error prone, and as you can imagine, universally feared within the company.
>
> **[1:21](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=81)** Support tickets would get tossed around from one team to another as engineers tried to avoid handling it.
>
> **[1:27](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=87)** One fateful day on November 9th, in fact, after onboarding a new inventory data set, disaster struck, the pipeline failed.
>
> **[1:36](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=96)** Engineers attempted retries, but after three attempts, it remained broken.
>
> **[1:41](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=101)** Little did they know that this marked the beginning of a 24 hour outage across the entire organization.
>
> **[1:46](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=106)** As engineering teams toiled throughout the night, with the CEO and CTO personally getting involved.
>
> **[1:52](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=112)** After much effort, one engineering team finally found the root cause of the issue.
>
> **[1:57](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=117)** Unfortunately, this discovery came at the cost of a day of missed shipments and unhappy customers.
>
> **[2:03](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=123)** In the aftermath of this incident, the engineering leadership prioritized dismantling this gigantic SQL file.
>
> **[2:10](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=130)** It took three weeks of engineering time to revamp it.
>
> **[2:14](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=134)** In this process, they uncovered outdated table names, references to incorrect columns, and shockingly, a reference to a staging table in production.
>
> **[2:25](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=145)** This story is not an isolated case but rather a common scenario at many organizations.
>
> **[2:30](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=150)** Critical pipelines are initially designed as functional masterpieces but quickly become outdated and challenging to comprehend.
>
> **[2:38](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=158)** Only a few engineers possess the internal knowledge of these pipelines.
>
> **[2:42](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=162)** In this chapter, we'll dive into a powerful solution to manage SQL more effectively and prevent such headaches in the future.
>
> **[2:50](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=170)** We'll explore ways to improve SQL organization and structure, ensuring robustness, maintainability, and [[Scalability]].
>
> **[2:59](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/supply-chain-outage-sql-spaghetti?u=76281980&t=179)** By mastering these techniques, you'll become a SQL champion and steer your [[Data Engineering]] efforts towards smoother waters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (8), [[Scalability]] (1), [[Data Engineering]] (1)
> **Env Vars:** sql (8), ceo (1), cto (1)
> **Analogies:** imagine (2)
> **File Paths:** mammoth.sql (1)
> **Speakers:** - sql (1)

#### [Data build tool (dbt)](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980&t=0)** - [Instructor] In the world of software engineering, principles like testing, [[Version Control]], and dependency visualization have significantly improved stability and overall quality of life.
>
> **[0:12](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980&t=12)** However, these beneficial features haven't always existed and been readily available to data engineers.
>
> **[0:19](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980&t=19)** In the past, such capabilities were often limited to large-scale enterprise platforms, making it challenging for smaller teams or firms to implement them effectively.
>
> **[0:30](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980&t=30)** Then, everything changed a few years ago with the introduction of dbt, or [[Data Build Tool (DBT)|data build tool]], by a small company called Fishtown Analytics.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980&t=39)** Dbt revolutionized the [[Data Engineering]] landscape, providing a powerful open-source solution for building [[Data Pipelines]].
>
> **[0:47](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980&t=47)** Dbt lives up to its name by helping data engineers build and transform data with ease.
>
> **[0:54](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980&t=54)** It allows for the modularization and centralization of analytics code, making [[SQL]]-based [[Data Transformation]] and testing a breeze.
>
> **[1:04](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980&t=64)** This tool has gained immense popularity among data analysts and data engineers who frequently deal with [[Data Cleaning]] and transformation before conducting analyses.
>
> **[1:14](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980&t=74)** Dbt's strength lies in its model-first approach to data analytics and transformation.
>
> **[1:20](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980&t=80)** By leveraging dbt, you can avoid writing boilerplate [[Data Manipulation]] and definition language code as the tool handles the materialization process for you.
>
> **[1:31](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980&t=91)** One of dbt's key advantages is in its ability to enhance [[Data Quality]] in [[Databases]].
>
> **[1:37](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980&t=97)** By defining a data model that can specify the data's structure, dbt can validate the data and ensure that it adheres to the model.
>
> **[1:46](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980&t=106)** Additionally, dbt enables the creation of documentation for the data model, providing valuable insights for other users.
>
> **[1:54](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980&t=114)** Let's put this in more practical terms.
>
> **[1:56](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980&t=116)** As a data engineer, you're tasked with managing vast amounts of data scattered across tables, columns, and rows in expansive data warehouses.
>
> **[2:06](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980&t=126)** Keeping track of all of this data can feel overwhelming.
>
> **[2:09](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980&t=129)** For instance, making changes to a commonly accessed table may involve a laborious process of finding and updating all of its references.
>
> **[2:19](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980&t=139)** With dbt, this process becomes incredibly simple.
>
> **[2:22](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980&t=142)** Just change a single line, and the impact is felt throughout the pipeline.
>
> **[2:27](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980&t=147)** Dbt brings essential features and functionality to the data engineering world, elevating your SQL skills to new heights.
>
> **[2:35](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980&t=155)** That's precisely why dbt will be a major focus in this [[LinkedIn]] Learning video.
>
> **[2:40](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980&t=160)** Let's dive in and unlock the full potential of dbt to streamline and enhance your data engineering endeavors.
>
> **[2:46](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/data-build-tool-dbt?u=76281980&t=166)** Get ready to take your SQL skills to the next level with dbt as your powerful ally.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Engineering]] (3), [[SQL]] (3), [[Version Control]] (1), [[Data Build Tool (DBT)|Data build tool]] (1), [[Data Pipelines]] (1)
> **Env Vars:** sql (3)
> **Exercise Files:** boilerplate (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Modeling in dbt](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=0)** - [Instructor] We're going to be working with a MariaDB [[MySQL]] database for these exercises.
>
> **[0:06](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=6)** Anytime you start a new project it's always important to get a lay of the land.
>
> **[0:10](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=10)** In VS code, we can access our running MariaDB database right from the UI.
>
> **[0:16](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=16)** To access it, click the database button on the left side panel.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=21)** You can expand the database to see the tables and views present.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=25)** Now let's install DBT.
>
> **[0:28](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=28)** To install DBT from MariaDB, we're going to install the DBT MySQL package.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=34)** Type, pip install dbt-mysql.
>
> **[0:40](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=40)** Once you've installed the DBT MySQL package, let's create our first DBT project.
>
> **[0:46](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=46)** For ease of use, we'll call the project 'Intro'.
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=50)** To create a new project, type dbt init.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=55)** You'll be prompted to enter a project name.
>
> **[0:58](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=58)** Let's type in intro.
>
> **[1:01](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=61)** Then you'll be notified that the profile for intro already exists.
>
> **[1:06](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=66)** We'll talk about profiles in a bit, but for now enter N for no.
>
> **[1:12](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=72)** Great. We've just bootstrapped our first DBT project.
>
> **[1:16](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=76)** Let's open it up.
>
> **[1:19](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=79)** Under the intro directory, you'll see a number of folders many of which are empty.
>
> **[1:26](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=86)** These have been automatically created for you as part of the DBT Bootstrap process.
>
> **[1:31](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=91)** You'll see analyses, macros, models, seeds, snapshots, target, tests, and a dbt_project.yml file.
>
> **[1:43](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=103)** To get started, let's open up dbt_project.yml.
>
> **[1:49](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=109)** This file is the main configuration file for your DBT project.
>
> **[1:53](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=113)** It includes the name of the project which in our case is intro, as well as the directories and paths for DBT to look for various pieces of information.
>
> **[2:03](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=123)** Such as models, tests, and others.
>
> **[2:08](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=128)** You'll also notice there's a line called profile.
>
> **[2:11](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=131)** Let's take a quick pause and talk about profiles.
>
> **[2:14](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=134)** DBT profiles are the methods for connecting to [[Databases]] managed by DBT, meaning in order for DBT to connect to your database, you first have to create a connection profile.
>
> **[2:28](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=148)** For this course, I've created all of the profiles for you behind the scenes.
>
> **[2:34](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=154)** The profiles are located in a profiles.yml file at the top level.
>
> **[2:39](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=159)** Let's take a look at this file.
>
> **[2:42](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=162)** The first line on the file is the name of the profile.
>
> **[2:45](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=165)** The target line has to do with a target environment.
>
> **[2:49](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=169)** Usually in development, this is set as dev.
>
> **[2:52](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=172)** In production, it can be set to prod.
>
> **[2:55](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=175)** The target functionality helps ensure that the resources are isolated between dev, staging, prod, and any other environments you may have.
>
> **[3:04](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=184)** Underneath outputs and dev, you'll see a bunch of settings including the type, server, port, and a few others.
>
> **[3:14](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=194)** This is all of the configuration information that DBT uses to execute commands on the database on your behalf.
>
> **[3:22](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=202)** DBT itself has a wealth of tutorials and documentation if you're interested in learning more.
>
> **[3:29](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=209)** Now, let's take a look at our newly created projects models directory.
>
> **[3:37](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=217)** We can see that some default models have been created for us.
>
> **[3:41](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=221)** In this course, we're also going to make use of the DBT Power user plugin.
>
> **[3:47](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=227)** This plugin allows you to visualize DBT models in powerful ways.
>
> **[3:52](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=232)** Let's double click on one of the DBT model files and look at the lineage view.
>
> **[3:59](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=239)** It is important to note the lineage view will only work if you have selected a DBT model.
>
> **[4:05](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=245)** The power user plugin allows you to see tests, parent models, and documentation.
>
> **[4:13](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=253)** The lineage view shows how DBT models or the tables themselves, are related to one another.
>
> **[4:20](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=260)** Let's click on my_first_dbt_model.[[SQL]] which we have open here.
>
> **[4:25](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=265)** In the lineage view, you can see that this model has a child node that is my second DBT model.
>
> **[4:31](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=271)** In normal SQL terminology, that means that my second DBT model, table, references the my first DBT model table in some way.
>
> **[4:43](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=283)** In this case, my second DBT model selects from my first DBT model.
>
> **[4:49](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=289)** When DBT runs these and the tables are eventually created they will have a table name that is the same as the file name, including the .SQL extension.
>
> **[4:59](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=299)** The last file to be aware of in the model's directory is a schema.yml file.
>
> **[5:04](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=304)** This file contains the yml definition of the table schemas for each of the models.
>
> **[5:09](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=309)** In this case, the first block has the definition for the my first DBT model including the table name, columns, and per column tests.
>
> **[5:19](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=319)** The same is true of the second block that defines my second DBT model.
>
> **[5:25](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/modeling-in-dbt?u=76281980&t=325)** Take some time independently in code spaces to navigate around to familiarize yourself with how all of these work together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (4), [[SQL]] (3), [[Databases]] (1)
> **Env Vars:** dbt (27), sql (2)
> **CLI Commands:** mysql (4), pip (1), make (1), node (1)
> **File Paths:** dbt_project.yml (2), profiles.yml (1), my_first_dbt_model.sql (1), schema.yml (1)
> **Prerequisites:** install (4)
> **Code Identifiers:** dbt_project (2), my_first_dbt_model (1)
> **UI Navigation:** click on (2)
> **Definitions:** means that (1), is a  (1)

#### [Running dbt](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=0)** - Now that we've installed dbt, let's begin the process of running dbt.
>
> **[0:06](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=6)** There are a few commands that you'll need to know.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=8)** First is the dbt seed command.
>
> **[0:12](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=12)** The dbt seed command is used to seed or load initial data into the database tables.
>
> **[0:19](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=19)** Seeding involves populating tables with sample data that will serve as the basis for [[Data Transformation]] and analysis.
>
> **[0:26](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=26)** This command is particularly useful during the development and testing phases when you need a representative data set to work with.
>
> **[0:35](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=35)** Seeding data allows you to quickly assess the accuracy and effectiveness of your data models.
>
> **[0:40](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=40)** Let's see this in practice.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=43)** Navigate to the chapter two directory and look at the seeds directory.
>
> **[0:47](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=47)** You'll notice a file called raw_taxi_trips.csv.
>
> **[0:54](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=54)** As you can see, this is the csv file that contains the raw taxi information that we'll be working with today.
>
> **[1:02](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=62)** Now from the terminal, navigate to the chapter two directory and we're going to run dbt seed.
>
> **[1:20](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=80)** Once the command finishes successfully, navigate to the [[SQL]] Tools sidebar and open the chapter two dropdown.
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=92)** Underneath the table's directory you will see something called raw taxi trips.
>
> **[1:39](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=99)** Right click on it and select show table records.
>
> **[1:45](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=105)** You can see that the seed command has populated this table with the exact same contents as the CSV.
>
> **[1:52](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=112)** This means our seed command successfully ran.
>
> **[1:57](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=117)** Now, let's navigate back to the models directory.
>
> **[2:01](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=121)** (keyboard clicking) You will see that our taxi_trips.SQL file has a single liner net.
>
> **[2:10](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=130)** This line does a select star from raw_taxi_trips.csv, the table we just opened.
>
> **[2:18](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=138)** The syntax may look a bit unfamiliar.
>
> **[2:21](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=141)** That double curly brace wraps a reference to a file called raw_taxi_trips.
>
> **[2:26](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=146)** This is one of the most powerful parts of the dbt syntax.
>
> **[2:30](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=150)** This allows us to reference the raw_taxi_trips.csv file.
>
> **[2:35](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=155)** To understand how all of this works together let's run dbt run.
>
> **[2:40](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=160)** This is one of the most frequent commands that you will use and it actually runs dbt, meaning it runs all of the code and generates the tables defined by the model.
>
> **[2:52](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=172)** As part of the run process, the code is first compiled.
>
> **[2:55](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=175)** In the compile step, the refs themselves are resolved into real table names and the actual SQL code that will be run is generated.
>
> **[3:04](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=184)** Then, the runs occur.
>
> **[3:07](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=187)** In the output, you will see that chapter2.taxi_trips was created as a table model.
>
> **[3:14](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=194)** Navigate back to the SQL tool sidebar, open the chapter two dropdown and look under the table's directory.
>
> **[3:21](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=201)** You should now see a number of new files called taxi trips in addition to raw trips.
>
> **[3:27](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=207)** If you don't see it, you may have to refresh a database connection.
>
> **[3:31](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=211)** To refresh the database connection, if you have to at any point, you can right click on the MariaDB database and select refresh.
>
> **[3:40](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=220)** Let's right click on taxi trips and press show table records.
>
> **[3:45](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=225)** You should see the records pop up.
>
> **[3:50](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/running-dbt?u=76281980&t=230)** Congratulations. You've run your first dbt model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Data Transformation]] (1)
> **UI Navigation:** navigate to (3), click on (3), open the (2), dropdown (2)
> **Code Identifiers:** raw_taxi_trips (4), taxi_trips (2)
> **Env Vars:** sql (4), csv (1)
> **File Paths:** raw_taxi_trips.csv (3), taxi_trips.sql (1)
> **Tools:** terminal (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - now (1)

#### [Challenge: Modeling taxi data](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-modeling-taxi-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-modeling-taxi-data?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-modeling-taxi-data?u=76281980&t=5)** - [Instructor] Let's put some of the dbt skills that you just learned to the test.
>
> **[0:09](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-modeling-taxi-data?u=76281980&t=9)** For this challenge, you will take on the role of a New York City taxicab data analyst that would like to do some analysis on taxi trips.
>
> **[0:17](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-modeling-taxi-data?u=76281980&t=17)** You are going to build and implement four new dbt models that will generate the tables for analysts who intend to perform some work.
>
> **[0:27](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-modeling-taxi-data?u=76281980&t=27)** Open the models directory under chapter two and perform your work there.
>
> **[0:33](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-modeling-taxi-data?u=76281980&t=33)** First, create a new model called over_nine_miles.[[SQL]] which generates a table that contains all the columns of the source data with only the taxi trips with a distance of over nine miles.
>
> **[0:46](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-modeling-taxi-data?u=76281980&t=46)** Second, create a new model called credit_card_count.sql that contains a breakdown of the fares paid by credit card.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-modeling-taxi-data?u=76281980&t=55)** Third, create a new model called cross_borough.sql which generates a table that contains all of the columns of the source data with only the trips which start in one borough and end in a different borough.
>
> **[1:09](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-modeling-taxi-data?u=76281980&t=69)** Fourth, create a new model called avg_num_dropoff_manhattan.sql which contains the average number of passengers on all trips with a drop-off borough that is in Manhattan.
>
> **[1:21](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-modeling-taxi-data?u=76281980&t=81)** For each of these, make sure you add the necessary information to schema.yml.
>
> **[1:27](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-modeling-taxi-data?u=76281980&t=87)** Ensure that dbt run works as expected, and that once the tables are generated, they look as expected.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-modeling-taxi-data?u=76281980&t=94)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4)
> **File Paths:** over_nine_miles.sql (1), credit_card_count.sql (1), cross_borough.sql (1), avg_num_dropoff_manhattan.sql (1), schema.yml (1)
> **Code Identifiers:** over_nine_miles (1), credit_card_count (1), cross_borough (1), avg_num_dropoff_manhattan (1)
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### [Solution: Modeling taxi data](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=5)** - [Instructor] Congratulations on completing the taxi data challenge and on writing your first dbt models.
>
> **[0:11](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=11)** Let's go through all of the steps necessary to complete this challenge.
>
> **[0:15](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=15)** In this video, I'll present the completed solution and walk through how we arrive there.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=21)** Whenever I'm writing dbt models, I always start with the schema.yml file.
>
> **[0:27](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=27)** This helps me concretely think through the appropriate output tables and what they should look like for each of my models.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=34)** We can see that the over_nine_miles model contains all of the columns of the source taxi_trips table.
>
> **[0:40](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=40)** As you can see, this block of YAML looks exactly like the taxi_trips schema except for the name and description.
>
> **[0:48](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=48)** The same is true for our cross_borough model.
>
> **[0:52](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=52)** Now, let's look at our credit_card_count.
>
> **[0:56](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=56)** As we know, this table will be the amount of fares paid by credit card.
>
> **[1:01](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=61)** I could simply make this one column with just the count but we'll include the payment type too as an example.
>
> **[1:07](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=67)** For that reason, this model is two columns, the payment type and the count itself.
>
> **[1:14](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=74)** Finally, let's look at the last model.
>
> **[1:17](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=77)** In this case, we want the average number of passengers dropped off in Manhattan.
>
> **[1:21](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=81)** I'll only use one column this time and name it avg for average.
>
> **[1:26](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=86)** Now, let's switch to the [[SQL]] models themselves.
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=92)** To get the trips that are over nine miles, we'll simply filter to where the distance is over nine.
>
> **[1:39](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=99)** To get the count of trips that were paid by credit card, we simply do a filter where payment equals credit card and do a count of payment.
>
> **[1:49](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=109)** To get the trips that start and end in different boroughs, filter where the pickup borough is not equal to the drop-off borough.
>
> **[1:57](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=117)** Finally, to get the average number of passengers dropped off in Manhattan, run a simple average where the drop-off borough is in Manhattan.
>
> **[2:07](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=127)** Once your dbt run is completed, you should be able to see the output of your models generated as tables.
>
> **[2:15](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=135)** Click on the SQLTOOLS sidebar and under chapter2/Tables, you will see your new tables.
>
> **[2:22](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=142)** You can click on each of them and press Show Table Records.
>
> **[2:28](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=148)** I'll run through them quickly so you can compare your output with mine.
>
> **[2:38](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-modeling-taxi-data?u=76281980&t=158)** Great work completing this challenge and advancing your [[Data Engineering]] and SQL skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Data Engineering]] (1)
> **Code Identifiers:** taxi_trips (2), over_nine_miles (1), cross_borough (1), credit_card_count (1)
> **Env Vars:** sql (2), yaml (1), sqltools (1)
> **UI Navigation:** click on (2), switch to (1)
> **File Paths:** schema.yml (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)


### 3. Table Materializations

[↑ Back to Table of Contents](#table-of-contents)

#### [Crypto cost: Materializations](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=0)** - While we advance our modeling skills in [[SQL]], it's important to be mindful of resource consumption.
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=7)** To start, let's talk about strategies for storing or persisting data.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=13)** To persist data, or materialize data, simply means to actually save it.
>
> **[0:19](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=19)** This can mean saving it to a database locally or saving it to a database in the cloud.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=25)** [[Databases]] offer a number of powerful strategies to optimally use resources meaning you, as a data engineer, frequently control your overall database footprint in powerful ways.
>
> **[0:37](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=37)** As always, I like to start with a personal story.
>
> **[0:41](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=41)** This story involves a [[Cryptocurrency]] data provider.
>
> **[0:45](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=45)** I was contracted as an independent consultant to tackle a challenging cost optimization project for a cryptocurrency company.
>
> **[0:53](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=53)** The company had amassed an enormous amount of data on various crypto assets and exchanges, all stored within their central data systems.
>
> **[1:02](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=62)** To make sense of it all, the team used SQL to analyze the data.
>
> **[1:07](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=67)** Initially, everything seemed to be running smoothly but soon a significant problem arose.
>
> **[1:14](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=74)** The team began exceeding their cloud budget each month and the overages were getting worse.
>
> **[1:20](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=80)** If the trend continued, they would blow through their entire annual budget in no time.
>
> **[1:25](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=85)** Recognizing the seriousness of the situation, they sought help, and that's when I was brought in.
>
> **[1:31](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=91)** As I dug deeper into their [[Data Storage]] structure, I discovered the root of the issue.
>
> **[1:36](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=96)** There was a perpetually growing table that held transactions related to a specific coin.
>
> **[1:42](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=102)** The data in this table flowed through a complex pipeline, generating derivative data sets for various teams.
>
> **[1:49](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=109)** Each time a new row was added to the parent table, it triggered the addition of the row to 10 to 15 child tables.
>
> **[1:57](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=117)** These child tables had additional child tables themselves and the cycle continued.
>
> **[2:03](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=123)** The multiplicative effect was astounding, with each new row corresponding to a total of 83 additional duplicate rows across the cluster.
>
> **[2:13](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=133)** Once we discovered this, the team and I worked hand in hand to carefully optimize the data pipeline by reducing redundancy and streamlining the data storage structure.
>
> **[2:24](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=144)** By implementing effective strategies, we significantly reduced the exponential growth in both the storage and the compute layer.
>
> **[2:32](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=152)** As a result of our collaborative efforts, the company's [[Data Management]] became much more efficient leading to a substantial decrease in their cloud costs.
>
> **[2:41](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=161)** With the newfound clarity and control over their data, the team could focus on their core objectives with confidence.
>
> **[2:47](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=167)** Throughout this exercise, the team became keenly aware of the differences between tables and views, as well as the performance and cost trade-offs between the two.
>
> **[2:57](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/crypto-cost-materializations?u=76281980&t=177)** In this chapter, we'll talk about the world of materialization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Cryptocurrency]] (2), [[Data Storage]] (2), [[Databases]] (1), [[Data Management]] (1)
> **Env Vars:** sql (2)
> **CLI Commands:** make (1)
> **Speakers:** - while (1)

#### [Materialization terminology](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=0)** - [Instructor] You may already be familiar with the concept of tables versus views, but let's dive into how both of these mechanisms work.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=8)** There's a lot of terminology in the materialization space that can make it difficult to understand and differentiate concepts.
>
> **[0:14](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=14)** Let's start by breaking some of those down.
>
> **[0:18](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=18)** Table materialization is the most common form of materialization in [[SQL]].
>
> **[0:23](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=23)** When a query's result set is materialized as a table, it is saved as a physical table on the database.
>
> **[0:30](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=30)** This table can be queried and accessed just like any other table in the database.
>
> **[0:35](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=35)** Table materialization is useful for storing intermediate or final results that need to be reused or shared among multiple queries.
>
> **[0:45](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=45)** An alternative to table materialization is view materialization.
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=50)** In SQL, a view is a virtual table that is defined by a query.
>
> **[0:54](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=54)** It does not store any data itself.
>
> **[0:56](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=56)** Instead, it provides a convenient way to access and query data from one or more underlying tables.
>
> **[1:04](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=64)** View materialization saves the result set of a query as a database view, which can be used as a virtual table in subsequent queries.
>
> **[1:13](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=73)** Views act as a window-like perspective into the underlying tables, offering a convenient and secure way to access data.
>
> **[1:22](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=82)** For example, in an employee database, a view could be created to display only the names and department information of employees from a particular division while hiding sensitive salary details.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=94)** A result set is the output of a SQL query.
>
> **[1:37](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=97)** When a SQL query is executed against one or more tables or views, it returns the result set containing the rows and columns that match the specified criteria.
>
> **[1:49](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=109)** Result sets are temporary collections of data that exist in memory during query executions.
>
> **[1:55](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=115)** They do not have a persistent storage layer, like tables or reviews, and are generated on the fly when a query is executed.
>
> **[2:01](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=121)** In DBT, a model represents a SQL query that transforms data from a source table into a new table with desired business logic.
>
> **[2:10](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=130)** DBT allows data engineers to specify the materialization type for each model, controlling how the results of a query are saved and managed.
>
> **[2:20](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=140)** Now let's switch to code spaces.
>
> **[2:23](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=143)** Navigate to the example directory in the terminal.
>
> **[2:26](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=146)** In the sidebar, open the My First DBT Model SQL file underneath the example project.
>
> **[2:36](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=156)** We can see the top line of the file.
>
> **[2:37](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=157)** It says config materialized equals table.
>
> **[2:42](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=162)** The [[Microsoft Word|word]] table in this line implies that we're using the table materialization strategy.
>
> **[2:48](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=168)** In terminal, let's run DBT run.
>
> **[2:55](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=175)** Once the run has completed, navigate to the SQL tools side panel helper in VS Code, and open example.
>
> **[3:04](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=184)** Underneath the tables dropdown, you should see My First DBT Model and My Second DBT Model are both tables.
>
> **[3:11](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=191)** Now let's move back to myfirstdbtmodel.sql and change the materialization strategy from table to view.
>
> **[3:21](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=201)** Now let's rerun DBT run.
>
> **[3:28](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=208)** Moving back to the SQL tools page, you can refresh the window and you'll see that My First DBT Model has disappeared from tables and has actually reappeared underneath views.
>
> **[3:41](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=221)** This change may seem trivial, but it's done something very powerful behind the scenes.
>
> **[3:46](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=226)** By changing from a table to a view, we freed up some valuable resources from the storage side.
>
> **[3:53](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/materialization-terminology?u=76281980&t=233)** Congratulations, you've completed your first change in DBT materializations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (9), [[Microsoft Word|Word]] (1)
> **Env Vars:** dbt (9), sql (8)
> **UI Navigation:** navigate to (2), switch to (1), in the sidebar (1), open the (1), dropdown (1)
> **Tools:** terminal (2), vs code (1)
> **Analogies:** just like (1), for example (1)
> **File Paths:** myfirstdbtmodel.sql (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)

#### [Incremental materializations](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980&t=0)** - [Instructor] While table and view strategies are likely the most commonly seen strategies, there's one particular strategy that can be very powerful if used properly.
>
> **[0:10](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980&t=10)** That is the incremental strategy.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980&t=13)** As you know, DBT offers a few materialization strategies.
>
> **[0:18](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980&t=18)** These traditional materializations in DBT involve creating intermediary tables that start the results of complex [[SQL]] queries.
>
> **[0:27](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980&t=27)** But let's say you have a table that's growing in perpetuity.
>
> **[0:30](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980&t=30)** For example, you decide to store all of your sales in a sales table.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980&t=34)** You know that this table every day will have new sales appended to it.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980&t=39)** In a regular table transformation, every child table of sales and intermediate table before the final nodes in the pipeline are updated.
>
> **[0:49](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980&t=49)** In DBT, these intermediate tables are materialized in their entirety.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980&t=55)** Whenever a DBT job runs, regardless of whether or not the underlying data has changed meaning you would have to reprocess and regenerate yesterday's data to process today's data.
>
> **[1:08](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980&t=68)** This approach can be inefficient, especially when dealing with large datasets or frequent data updates as it recompute the entire dataset each time, even if only a small portion of the data has changed.
>
> **[1:21](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980&t=81)** Enter the incremental strategy.
>
> **[1:23](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980&t=83)** Incremental materialization is a powerful technique used to optimize [[Data Pipelines]] and improve overall performance.
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980&t=92)** With incremental materialization, DBT only processes and updates the data that has changed since the last run.
>
> **[1:40](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980&t=100)** This is achieved by keeping track of the incremental key or the column that uniquely identifies each row and using it to identify new or updated records.
>
> **[1:51](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980&t=111)** This can lead to substantial savings over time both from a performance and cost perspective.
>
> **[1:58](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980&t=118)** By not processing the data I've already processed, my pipeline also runs faster.
>
> **[2:04](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980&t=124)** To enable incremental materialization in DBT, first simply change the materialization strategy at the top to be incremental.
>
> **[2:13](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980&t=133)** Then you'll need to tell DBT which rows it should run a transform on for the incremental strategy.
>
> **[2:21](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980&t=141)** Usually, you'll want to filter on only the new rows that have been created in the source table since the last run.
>
> **[2:28](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980&t=148)** In DBT, you can use the curly brace, curly brace this, curly brace, curly brace command to find the timestamp of the most recent run of this model.
>
> **[2:38](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980&t=158)** Here is an example.
>
> **[2:41](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/incremental-materializations?u=76281980&t=161)** Incremental transformation in DBT can result in a substantial amount of savings and it's wise to use them when needed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[Data Pipelines]] (1)
> **Env Vars:** dbt (9), sql (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Materializations](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-materializations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-materializations?u=76281980&t=0)** - [Instructor] Let's put our knowledge about all things materializations to practice and help a fictional version of our crypto company above.
>
> **[0:12](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-materializations?u=76281980&t=12)** Open up [[Codespaces]] and navigate to chapter three.
>
> **[0:16](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-materializations?u=76281980&t=16)** You'll see a DBT project has been created for you.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-materializations?u=76281980&t=20)** This project contains a data set of crypto data over a fixed period of time.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-materializations?u=76281980&t=25)** It includes data across Bitcoin, [[Ethereum]] and a few other coins.
>
> **[0:30](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-materializations?u=76281980&t=30)** To get started run DBT Seed, to seed the raw crypto data table with the necessary information.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-materializations?u=76281980&t=39)** Once the seed command has successfully run, you should be able to navigate [[SQL]] tools, open up the chapter three database, right click on the raw crypto data table and select show table records to see what the data looks like.
>
> **[0:56](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-materializations?u=76281980&t=56)** It's always wise to run some basic exploratory analysis on new data as well.
>
> **[1:02](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-materializations?u=76281980&t=62)** From there, open up the models folder underneath chapter three and use the DBT power user plugin and lineage view to get an understanding of how all the models fit together.
>
> **[1:22](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-materializations?u=76281980&t=82)** For this challenge, I'd like you to update the materialization strategies for each of the models to ensure that the most appropriate strategy is selected.
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-materializations?u=76281980&t=92)** As always, there's not always a definitive correct answer.
>
> **[1:36](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-materializations?u=76281980&t=96)** Your goal in this exercise should be to make reasonable assumptions and ensure that your code follows those assumptions.
>
> **[1:44](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-materializations?u=76281980&t=104)** Enjoy the challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Codespaces]] (1), [[Ethereum]] (1), [[SQL]] (1)
> **Env Vars:** dbt (3), sql (1)
> **UI Navigation:** navigate to (1), click on (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Materializations](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=5)** - [Instructor] Congratulations on completing the materializations challenge.
>
> **[0:09](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=9)** As I mentioned before, there are many correct answers and the solution I present will simply be one of many.
>
> **[0:15](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=15)** Let's navigate to the chapter3 models directory in the UI and open up btc.[[SQL]].
>
> **[0:22](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=22)** Next, let's open up the lineage view in the bottom bar.
>
> **[0:27](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=27)** We can see the btc model has a parent which is the crypto data model, and has a single child, which is another model that contains only the btc prices where a closing price is above 3K.
>
> **[0:41](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=41)** Let's take one step up and click on the crypto data model.
>
> **[0:45](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=45)** Once the view is open, lineage view shows us that this model reads from raw crypto data and it also shows a number of other child models, each of which corresponds to a separate coin, btc, eth, link, oxt, xlm, and xrp.
>
> **[1:06](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=66)** Now, let's quickly look at the code for one of these files.
>
> **[1:09](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=69)** Let's just pick btc.sql for ease.
>
> **[1:13](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=73)** Let's take a step back and think a bit about how the system might work from the crypto perspective.
>
> **[1:20](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=80)** It's clear that raw crypto data will be a data feed of multiple coins of crypto data.
>
> **[1:26](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=86)** This feed will grow in perpetuity as more and more data comes in.
>
> **[1:31](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=91)** These coins are then fed into the crypto data model which itself is materialized as a table.
>
> **[1:40](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=100)** The child models underneath crypto data, such as btc.sql and eth.sql, are also materialized as tables.
>
> **[1:51](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=111)** Finally, there's another model called btc_closing_above_3k.sql which also is materialized as a table.
>
> **[2:01](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=121)** It seems like at this point, a lot of redundant information is stored.
>
> **[2:05](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=125)** Let's see how we can fix this.
>
> **[2:08](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=128)** First, it seems like crypto_data.sql is going to be incrementally populated, so let's make this an incremental model.
>
> **[2:16](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=136)** I'm going to copy and paste my solution here and we'll explain it after.
>
> **[2:25](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=145)** I've now made this an incremental model.
>
> **[2:27](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=147)** With an incremental model, we need to pick a value or attribute for our incremental determination.
>
> **[2:34](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=154)** I've picked detailed date.
>
> **[2:36](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=156)** Now, let's look at our child models.
>
> **[2:39](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=159)** We could also make each of these incremental models but why not make them views?
>
> **[2:44](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=164)** As a view, they won't take up much more storage space and they provide the same functionality for cheaper.
>
> **[2:56](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=176)** Great.
>
> **[2:56](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=176)** Now, let's look at btc_closing_above_3k.
>
> **[3:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=180)** This is an interesting one, and it can go either way.
>
> **[3:04](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=184)** I'm going to make an assumption, though, and assume that this dataset will be analyzed heavily by a bunch of different analysts.
>
> **[3:11](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=191)** In that situation, it may actually be better just to keep it as a table and so for our purposes, I'm going to keep this as a table.
>
> **[3:20](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=200)** Great work.
>
> **[3:21](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=201)** We've successfully rewritten our models using different materialization strategies.
>
> **[3:25](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=205)** As mentioned, there are a number of correct answers based on the assumptions that you can make.
>
> **[3:30](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=210)** Always remember after you change a materialization strategy, to rerun dbt run to make sure these persist in your database.
>
> **[3:40](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-materializations?u=76281980&t=220)** Congratulations on finishing this challenge and on helping make our crypto company's life a little bit easier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6)
> **CLI Commands:** make (7)
> **File Paths:** btc.sql (3), eth.sql (1), btc_closing_above_3k.sql (1), crypto_data.sql (1)
> **UI Navigation:** navigate to (1), click on (1)
> **Code Identifiers:** crypto_data (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 4. Common Table Expressions vs. Subqueries

[↑ Back to Table of Contents](#table-of-contents)

#### [Construction planning: Query complexity](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=0)** - One of the most powerful tools in the software engineering world lies in the use of code libraries.
>
> **[0:06](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=6)** Libraries are like having a team of developers at your fingertips all for free.
>
> **[0:11](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=11)** These libraries let developers share code efficiently and supercharge the development process.
>
> **[0:18](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=18)** Now, think about SQLs built-in functions like SUM or AVERAGE.
>
> **[0:23](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=23)** They're like libraries too.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=25)** External pieces of code that speed up writing [[SQL]] code.
>
> **[0:29](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=29)** But what if you need custom logic specific to a unique set of transformations?
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=34)** SQL does have ways to specify external functions, but sometimes the logic you need is so specialized, it lives in a single SQL file.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=43)** Let me illustrate this with a real-life story from my own experience.
>
> **[0:47](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=47)** I was working with a construction company that stored equipment information in a relational database.
>
> **[0:53](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=53)** They managed various construction jobs and manually assigned equipment to each job.
>
> **[0:59](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=59)** In the world of construction, different pieces of equipment have specific standards that must be met before they can be used.
>
> **[1:07](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=67)** For example, excavators need to have their oil level, air filter, coolant level, and hydraulic valves checked, among other things, to be considered ready for action.
>
> **[1:19](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=79)** Different equipment types must have different standards, and each piece of equipment must be inspected daily and deemed ready before it can be used for a job.
>
> **[1:29](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=89)** As you can imagine, this is a huge data problem.
>
> **[1:33](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=93)** To handle this, the company created a massive SQL file like the one you see here.
>
> **[1:39](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=99)** For each job, they appended the full list of excavator constraints to the query.
>
> **[1:45](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=105)** The result, a query with a lengthy runtime and a lot of repeated work.
>
> **[1:51](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=111)** Every time a new readiness metric was added, the developer had to make the same change in every block of code related to excavator readiness.
>
> **[1:59](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=119)** This was cumbersome and error prone.
>
> **[2:02](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=122)** And what about new developers trying to understand the file?
>
> **[2:06](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=126)** It was incredibly challenging as you can imagine.
>
> **[2:08](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=128)** We quickly realized that something had to be done in terms of code maintainability and readability.
>
> **[2:14](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=134)** In this series of videos, we're going to explore an amazing SQL feature called Common Table Expressions or [[CTE|CTEs]].
>
> **[2:22](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=142)** CTEs are tools that make code easier to read and that reduce the potential for errors.
>
> **[2:28](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=148)** They allow us to create reusable modular logic, so you can say goodbye to those monolithic SQL files.
>
> **[2:34](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=154)** With CTEs, you can create compact, easy to read SQL code that's a breeze to maintain and understand.
>
> **[2:42](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=162)** It's like giving your SQL skills a superpower boost.
>
> **[2:45](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/construction-planning-query-complexity?u=76281980&t=165)** So let's dive into the world of CTEs and unlock their potential to make your code shine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (8), [[CTE|Ctes]] (4)
> **Env Vars:** sql (8), sum (1), average (1)
> **Analogies:** imagine (2), for example (1), it's like (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (1)
> **Speakers:** - one (1)

#### [Common table expressions (CTEs) vs. subqueries](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=0)** - [Instructor] A [[CTE|common table expression]] or [[CTE]] is a temporary result set that is used within a larger query.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=8)** It can be thought of as a temporary view that is only accessible within the query in which it is defined.
>
> **[0:14](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=14)** [[CTE|CTEs]] are useful for breaking down complex queries into smaller, more manageable pieces.
>
> **[0:22](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=22)** They can also be used to improve the performance of queries by allowing the database engine to reuse the results of a CTE multiple times.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=31)** That is one of the biggest features of CTEs.
>
> **[0:35](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=35)** You can think of a CTE as almost being a table that lives in line with your code.
>
> **[0:41](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=41)** It has all of the benefits of being executed once and the ability to have those results used over and over again.
>
> **[0:48](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=48)** There are a few benefits to using CTEs.
>
> **[0:52](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=52)** First, readability and maintainability.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=55)** CTEs make your [[SQL]] code more readable and maintainable.
>
> **[1:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=60)** By breaking down complex queries into smaller logical steps, you can easily understand the purpose of each CTE and the data it produces.
>
> **[1:09](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=69)** This clarity helps other developers who may work on the same code base to quickly grasp the logic and make changes or enhancements without fear of introducing errors.
>
> **[1:20](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=80)** Second, code reusability.
>
> **[1:23](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=83)** CTEs promote code reusability by allowing you to define common subqueries once and use them in multiple parts of your main query.
>
> **[1:33](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=93)** This eliminates the need to repeat complex logic, reduces redundancy and makes your code more concise.
>
> **[1:41](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=101)** Third, recursive queries.
>
> **[1:44](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=104)** CTEs can handle recursive queries allowing you to traverse hierarchical [[Data Structures]] like organizational charts or file systems.
>
> **[1:53](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=113)** That capability is especially valuable when you're dealing with data that has a parent-child relationship.
>
> **[1:59](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=119)** Fourth, optimization opportunities.
>
> **[2:02](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=122)** CTEs provide optimization opportunities for database engines.
>
> **[2:06](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=126)** Since CTEs create temporary result sets, the database optimizer can better understand the data flow and optimize the query execution.
>
> **[2:15](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=135)** This can lead to overall improved query performance and reduced processing time.
>
> **[2:21](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=141)** You may see CTEs used in comparison to subqueries.
>
> **[2:24](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=144)** There are a few differences between CTEs and subqueries that are worth noting.
>
> **[2:29](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=149)** First, CTEs are defined at the front of the query, unlike subqueries which are defined inline.
>
> **[2:36](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=156)** Second, CTEs can be more efficient in terms of performance when compared to subqueries.
>
> **[2:42](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=162)** Since CTEs create temporary result sets, the database optimizer can better understand the data flow and optimize the execution plan.
>
> **[2:52](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=172)** This can lead to improved query performance and reduced processing times.
>
> **[2:57](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=177)** Third, CTEs are ideal for handling recursive queries where a query refers back to its own result set.
>
> **[3:04](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=184)** Subqueries cannot handle recursive queries directly making them less suitable for scenarios that require recursive operations.
>
> **[3:12](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=192)** As a data engineer, leveling up your SQL skills involves developing a strong understanding of software engineering principles that will help you author and design readable and extensible code.
>
> **[3:25](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/common-table-expressions-ctes-vs-subqueries?u=76281980&t=205)** CTEs bring a degree of readability to SQL that is difficult to replicate in other ways, and incorporating them into your SQL code can significantly improve your team's quality of life.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CTE|Ctes]] (15), [[CTE]] (4), [[SQL]] (4), [[CTE|Common table expression]] (1), [[Data Structures]] (1)
> **Env Vars:** cte (4), sql (4)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [CTEs in dbt](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=0)** - [Instructor] Let's get hands-on using [[CTE|CTEs]] in dbt.
>
> **[0:04](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=4)** In order to use a [[CTE]], you'll need to define it with your dbt model.
>
> **[0:09](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=9)** CTEs are defined using the WITH keyword, followed by the CTE name and the query that generates the results set.
>
> **[0:16](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=16)** The syntax looks as you can see on screen.
>
> **[0:19](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=19)** WITH the name of your CTE AS SELECT column1, column2, so on and so forth, FROM a source_table WHERE condition.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=31)** You can see that this looks very similar to a normal SELECT statement in [[SQL]], just with the additional WITH syntax.
>
> **[0:38](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=38)** This is why I think it's helpful to think of CTEs as functions.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=43)** By designing the CTE and assigning it a name, you can treat it as a function that generates a table.
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=50)** Once you've defined the CTE, you'll want to use it.
>
> **[0:53](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=53)** To use a CTE, you can reference it in the main query of your dbt model and simply include its name in the main query as if it were a regular table.
>
> **[1:02](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=62)** Let's make this more concrete.
>
> **[1:06](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=66)** Take a look at the following SQL code.
>
> **[1:08](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=68)** The purpose of the order_items_cte CTE is to calculate the total revenue for each order based on the data in the order_items table.
>
> **[1:18](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=78)** Let's break down this CTE step-by-step.
>
> **[1:21](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=81)** First, we create the CTE with the name order_items_cte.
>
> **[1:26](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=86)** This acts as a temporary result set that is used in the subsequent query.
>
> **[1:31](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=91)** The SELECT statement inside of the CTE calculates the revenue by multiplying the price and quantity columns from the order_items table and sums them up for each unique order_id.
>
> **[1:43](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=103)** The main query then references this CTE and performs a LEFT JOIN, using the order_id column as the joining key.
>
> **[1:52](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=112)** This allows the main query to retrieve the total revenue for each order.
>
> **[1:56](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=116)** Now, you may be wondering why this is better than a subquery.
>
> **[2:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=120)** First, this CTE is readable and maintainable.
>
> **[2:04](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=124)** In the example, the CTE named ordered_items_cte defines a clear and named result set for calculating the order revenue.
>
> **[2:12](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=132)** This makes the SQL code easier to understand for both the original developer and other team members who may need to review or modify this code in the future.
>
> **[2:23](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=143)** Second, there is a performance benefit here.
>
> **[2:26](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=146)** Since this CTE calculates the revenue for each order and stores it temporarily, the main query can access this pre-calculated data without needing to recompute it for each row in the orders table.
>
> **[2:40](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=160)** This can result in faster execution times, especially when dealing with large data sets or complex calculations.
>
> **[2:46](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/ctes-in-dbt?u=76281980&t=166)** Now that we've seen how to use CTEs in dbt, let's get hands on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CTE]] (14), [[CTE|Ctes]] (4), [[SQL]] (3)
> **Env Vars:** cte (14), select (3), sql (3), where (1), left (1)
> **Code Identifiers:** order_items_cte (2), order_items (2), order_id (2), source_table (1), ordered_items_cte (1)
> **SQL:** select (3), where (1), left join (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Implementing CTEs](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-implementing-ctes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-implementing-ctes?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-implementing-ctes?u=76281980&t=5)** - [Instructor] In the first video of this chapter, the construction company faced complexity in identifying the maintenance work for specific excavators.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-implementing-ctes?u=76281980&t=13)** Now, in this challenge, let's help them out.
>
> **[0:16](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-implementing-ctes?u=76281980&t=16)** To begin, open [[Codespaces]], and navigate to chapter4, and open up the dbt models project.
>
> **[0:24](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-implementing-ctes?u=76281980&t=24)** Take a moment to understand the project setup, starting with the schema.yml file, and then exploring the individual models themselves.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-implementing-ctes?u=76281980&t=34)** Let's dive into the models directory and click on excavators.[[SQL]].
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-implementing-ctes?u=76281980&t=39)** In the bottom pane, open Lineage View.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-implementing-ctes?u=76281980&t=43)** In Lineage View, you can see its connection with raw_excavators.
>
> **[0:47](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-implementing-ctes?u=76281980&t=47)** And similarly, you can see all of its child elements.
>
> **[0:51](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-implementing-ctes?u=76281980&t=51)** Similarly, click on jobs.sql, and you can see its relation with raw_jobs.
>
> **[0:58](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-implementing-ctes?u=76281980&t=58)** Now let's examine maintenance.sql.
>
> **[1:01](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-implementing-ctes?u=76281980&t=61)** Inside the file, you'll find repeated code from the construction team scripts.
>
> **[1:06](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-implementing-ctes?u=76281980&t=66)** Our task is to simplify the construction team scripts using a [[CTE]] or [[CTE|common table expression]].
>
> **[1:14](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-implementing-ctes?u=76281980&t=74)** The goal is to make the code easy and understandable.
>
> **[1:19](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-implementing-ctes?u=76281980&t=79)** To get started, run dbt seed inside the chapter4 directory.
>
> **[1:25](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-implementing-ctes?u=76281980&t=85)** Running dbt seed populates the raw_excavators table and the raw_jobs table with data, so you can test your code appropriately.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-implementing-ctes?u=76281980&t=95)** All of your code changes should happen in maintenance_cte.sql.
>
> **[1:41](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-implementing-ctes?u=76281980&t=101)** As you implement the CTE, think of ways to validate its behavior to ensure it performs as expected.
>
> **[1:47](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-implementing-ctes?u=76281980&t=107)** Good luck with the challenge.
>
> **[1:49](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-implementing-ctes?u=76281980&t=109)** By using [[CTE|CTEs]] effectively, we should be able to streamline the maintenance work identification process and make everything more readable and easy to manage for the construction team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[CTE]] (2), [[Codespaces]] (1), [[CTE|Common table expression]] (1), [[CTE|Ctes]] (1)
> **File Paths:** schema.yml (1), excavators.sql (1), jobs.sql (1), maintenance.sql (1), maintenance_cte.sql (1)
> **Code Identifiers:** raw_excavators (2), raw_jobs (2), maintenance_cte (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** click on (2), navigate to (1)
> **Env Vars:** cte (2)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Implementing CTEs](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=0)** - [Instructor] Congratulations on completing the implementing [[CTE|CTEs]] challenge.
>
> **[0:09](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=9)** You've experienced firsthand how CTEs can significantly improve the readability of your code.
>
> **[0:16](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=16)** Now, let's start applying CTEs to simplify the maintenance.[[SQL]] file.
>
> **[0:22](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=22)** Go to chapter4, open up the models, and open up maintenance.sql.
>
> **[0:28](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=28)** When we open maintenance.sql, we notice a lot of repeated logic, making basic maintenance operations error-prone in its entire file.
>
> **[0:38](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=38)** To address this, we'll rewrite the code using a [[CTE]].
>
> **[0:42](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=42)** Our target CTE will be the excavator readiness evaluation, since it appears in every block.
>
> **[0:48](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=48)** Let's open maintenance_cte.sql for our work.
>
> **[0:53](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=53)** I've copied and pasted my solution first, and I'll begin explaining it.
>
> **[0:58](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=58)** We'll first choose a name for our CTE.
>
> **[1:01](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=61)** In this case, I called our CTE, failing_excavators.
>
> **[1:05](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=65)** Next, we include the repeated information and the repeated logic, specifically the excavator readiness check, into our CTE.
>
> **[1:14](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=74)** With the CTE successfully defined, let's focus on the main query.
>
> **[1:19](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=79)** We'll need to collect the job IDs from maintenance.sql, which I've done here, and ensure that our job ID is in the set of these values.
>
> **[1:27](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=87)** We'll then update the main query to reference our CTE.
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=92)** Of course, it's crucial to ensure that our code compiles and runs correctly.
>
> **[1:38](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=98)** Let's execute dbt run to verify everything.
>
> **[1:41](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=101)** It looks like our run is completed successfully.
>
> **[1:43](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=103)** Now, open up the SQLTools side panel and navigate to the chapter4 database.
>
> **[1:49](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=109)** We should see the maintenance_cte table in addition to the maintenance table.
>
> **[1:54](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=114)** We can right-click these, and click Show Table Records to actually view the files.
>
> **[2:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=120)** Let's do the same thing on the maintenance_cte table to make sure our information looks the same.
>
> **[2:06](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=126)** Checking the results, everything looks good.
>
> **[2:08](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=128)** Our tables match and the rewrite was successful.
>
> **[2:12](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=132)** Well done on completing this task.
>
> **[2:14](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=134)** By utilizing CTEs effectively, we streamlined the code and improved its overall maintainability.
>
> **[2:21](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-implementing-ctes?u=76281980&t=141)** Keep up the great work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CTE]] (7), [[SQL]] (5), [[CTE|Ctes]] (4)
> **Env Vars:** cte (7)
> **File Paths:** maintenance.sql (4), maintenance_cte.sql (1)
> **Code Identifiers:** maintenance_cte (3), failing_excavators (1)
> **UI Navigation:** go to (1), navigate to (1), right-click (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Testing SQL with dbt

[↑ Back to Table of Contents](#table-of-contents)

#### [Advertising: Testing SQL](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=0)** - One of the most important but often overlooked components of the software engineering process is testing.
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=7)** Well-tested code can mean the difference between a successful software release and a production outage.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=13)** As such, the testing landscape for software has grown and expanded.
>
> **[0:17](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=17)** From unit tests to code coverage tests to full scale integration tests, there are a number of ways to test software.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=25)** Testing [[SQL]], however, involves a different set of concerns.
>
> **[0:28](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=28)** Often the SQL code is tightly coupled with the data in the underlying system.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=34)** Code that is written with the same syntax can behave drastically differently when using different kinds of data.
>
> **[0:40](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=40)** For that reason, testing SQL frequently involves asserting the data itself is in a state that's primed for your use.
>
> **[0:48](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=48)** To illustrate the importance of testing, I'll share a story of an ad tech company.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=55)** In the mobile advertising space, each mobile device is assigned an ADID or advertising identifier.
>
> **[1:02](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=62)** Think of this ID as a unique identifier of your individual cell phone for advertising purposes.
>
> **[1:09](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=69)** This advertising company would take a cohort of these ADIDs and perform targeted marketing based on geospatial behavior patterns.
>
> **[1:17](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=77)** For example, if you happen to visit bowling alleys frequently, an advertiser may send you a coupon for a bowling alley.
>
> **[1:25](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=85)** The company would use SQL to group by a certain behavior and select all of the ADIDs that fell into a category for advertising purposes.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=94)** Usually the size of these cohorts tended to be fairly stable, so the advertisements that went out were also fairly stable.
>
> **[1:42](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=102)** You can probably guess where this is going.
>
> **[1:44](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=104)** One day, the company's cohort jobs started failing all over the board due to memory constraints, meaning the cohorting jobs did not have the necessary memory to actually perform the aggregations and quickly failed.
>
> **[1:58](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=118)** This kind of situation had never occurred before.
>
> **[2:01](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=121)** And upon investigation, the company realized that the size of the cohorts had drastically grown by over an order of magnitude.
>
> **[2:10](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=130)** A deep investigation followed during which all advertising was paused across the firm.
>
> **[2:16](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=136)** Eventually, the company realized that a bunch of bad test data, which produced random ADIDs, had accidentally made its way into production.
>
> **[2:25](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=145)** This resulted in an explosion of the size of one of the cohorts, which the company at that time had no means of detecting.
>
> **[2:32](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=152)** The company fairly quickly adopted some testing metrics to ensure that the cohort, sizes, or the count of ADIDs per cohort, existed only in a certain range.
>
> **[2:43](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=163)** It turned out that this kind of testing and validation can be really powerful when implemented properly.
>
> **[2:49](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/advertising-testing-sql?u=76281980&t=169)** In this chapter, we'll focus on how DBT can be used properly to test our data and avoid situations like this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4)
> **Env Vars:** sql (4), adid (1), dbt (1)
> **Analogies:** for example (1)
> **Speakers:** - one (1)

#### [Unit testing using dbt](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=0)** - [Tutor] [[Unit Testing]] in dbt is a critical aspect of ensuring the accuracy, reliability, and consistency of [[Data Transformation]] pipelines.
>
> **[0:10](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=10)** It involves testing individual data models in isolation to verify their correctness.
>
> **[0:16](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=16)** By writing test cases that assess the expected behavior of each data model and comparing the actual results against the expected outcomes, dbt users can quickly identify and rectify data issues.
>
> **[0:30](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=30)** The foundation of dbt's unit testing lies in the test macro, which allows users to define test cases directly within dbt models.
>
> **[0:40](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=40)** These tests can check various aspects of the data, such as column data types, null values, uniqueness, and specific business logic as well.
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=50)** When dbt is run in test mode, it automatically executes all defined tests and reports any failures.
>
> **[0:58](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=58)** A key benefit of unit testing in dbt is in its ability to rapidly detect data discrepancies.
>
> **[1:05](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=65)** For example, consider a data model responsible for calculating revenue based on sales transactions.
>
> **[1:12](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=72)** By writing a unit test to ensure that the total revenue matches the sum of the individual sales amounts, any discrepancy can be flagged instantly during testing, enabling timely debugging and resolution.
>
> **[1:27](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=87)** But let's start with the basics.
>
> **[1:29](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=89)** There are a few tests you should know about right off the bat.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=94)** DBT ships with these built-in tests.
>
> **[1:36](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=96)** These tests all operate on a per-column basis.
>
> **[1:41](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=101)** Some of them are, first, not_null, which tests if a specific column in a table contains any null or missing values.
>
> **[1:50](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=110)** Second, unique, which verifies that a specific column or combination of columns in a table contains unique values.
>
> **[1:59](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=119)** Third, accepted values, which tests if the values in a column belong to a predefined list of values.
>
> **[2:07](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=127)** Fourth, schema, which ensures that the table columns match what is in the schema.yml file.
>
> **[2:15](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=135)** There are also a few others I didn't include in here.
>
> **[2:19](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=139)** These built-in functions allow users to run assertions on top of their code easily.
>
> **[2:24](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=144)** To include one of these assertions in a dbt model, you can modify the schema.yaml file associated with the model.
>
> **[2:33](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=153)** Let's get hands-on and switch to [[Codespaces]].
>
> **[2:36](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=156)** Open up example/models/example and open the schema.yml file.
>
> **[2:43](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=163)** Let's take a look at the two models in this file.
>
> **[2:46](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=166)** The column ID in my first dbt model has two tests associated with it, unique and not_null.
>
> **[2:55](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=175)** This means that when you run dbt test, the test will evaluate whether there are duplicate values present in the ID column and whether or not there are any null values in the ID column.
>
> **[3:07](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=187)** The same is true for my second dbt model.
>
> **[3:11](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=191)** From terminal, cd into the example directory.
>
> **[3:16](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=196)** Now, let's take a look at how to run the test option in dbt.
>
> **[3:20](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=200)** First, run dbt run to make sure you have the tables created.
>
> **[3:27](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=207)** Now, let's run our test.
>
> **[3:29](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=209)** To run tests, run dbt test.
>
> **[3:40](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=220)** Running dbt test in the terminal will execute all of the defined tests, and any failures will be reported.
>
> **[3:47](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=227)** For instance, the test not_null my_first_dbt_model_id fails, meaning the id column contains a null value.
>
> **[3:57](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=237)** Let's trace this.
>
> **[3:59](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=239)** If you open up my_first_dbt_model.[[SQL]], you can see we select one as ID and union that with a null value.
>
> **[4:08](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=248)** So, it makes sense why this test fails.
>
> **[4:12](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=252)** While using the built-in dbt functions for testing is relatively straightforward, more complex testing scenarios may require custom tests.
>
> **[4:21](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=261)** Custom tests are defined in separate SQL files and can assess specific business logic, or [[Data Quality]] rules that could be unique to your organization.
>
> **[4:31](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=271)** In conclusion, unit testing in dbt is essential for maintaining [[Data Integrity]] and ensuring the reliability of your [[Data Pipelines]].
>
> **[4:41](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=281)** By leveraging the built-in test functions and creating custom tests, you can confidently validate the accuracy of your data models and identify any issues early in the development process.
>
> **[4:54](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/unit-testing-using-dbt?u=76281980&t=294)** This robust testing framework empowers data engineers to build more resilient and trustworthy data pipelines in dbt.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Unit Testing]] (4), [[SQL]] (2), [[Data Pipelines]] (2), [[Data Transformation]] (1), [[Codespaces]] (1)
> **Code Identifiers:** not_null (3), my_first_dbt_model_id (1), my_first_dbt_model (1)
> **File Paths:** schema.yml (2), schema.yaml (1), my_first_dbt_model.sql (1)
> **Analogies:** such as (1), for example (1), for instance (1)
> **CLI Commands:** cd (1), make (1)
> **Env Vars:** dbt (1), sql (1)
> **Tools:** terminal (2)
> **UI Navigation:** switch to (1), open the (1)

#### [Custom tests in dbt](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=0)** - [Instructor] Let's explore how to create custom tests in dbt.
>
> **[0:04](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=4)** The process is simple and consists of three main steps.
>
> **[0:09](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=9)** First, we'll create a new [[SQL]] file in the test directory of our dbt project.
>
> **[0:14](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=14)** Then we'll write the custom logic for the custom test in the sql file.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=21)** Finally, we'll reference this custom test in our dbt model.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=25)** Let's dive into the details.
>
> **[0:28](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=28)** For our purposes, we're going to recreate the not in all test on the column ID using a custom test.
>
> **[0:35](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=35)** Step one, let's open the example slash model slash example slash schema dot yml file.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=43)** Next, let's remove the not null test underneath the ID column of the My first dbt model file.
>
> **[0:51](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=51)** As you'll remember, this test has failed in the past.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=55)** Next, let's run dbt test to ensure that the test successfully run without the null check for the ID column.
>
> **[1:03](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=63)** Great, it looks like this passed.
>
> **[1:07](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=67)** Now let's move to step two.
>
> **[1:09](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=69)** Navigate to the example slash test directory where generic tests are placed and create a folder named generic.
>
> **[1:22](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=82)** Inside this folder make a custom file called custom test sql.
>
> **[1:31](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=91)** I called mine custom underscore test that sql.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=95)** Now let's write the custom test logic.
>
> **[1:39](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=99)** Remember, this test will be defined as a table in dbt and if the table's populated with data the test will be considered failed.
>
> **[1:47](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=107)** I've pre-written the test.
>
> **[1:49](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=109)** Let me copy and paste it here before I explain what it does.
>
> **[1:53](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=113)** As I mentioned, tests in dbt are tables like everything else.
>
> **[1:59](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=119)** If the table generated by the test in dbt is populated with data, then the test has failed.
>
> **[2:06](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=126)** To create our custom test, we wrap the sql code in a test block and in an end test block.
>
> **[2:13](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=133)** In this case we've mentioned we want to recreate the functionality of the not in all test.
>
> **[2:19](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=139)** Therefore, we'll find all records where the ID column is null.
>
> **[2:25](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=145)** If any such records exist, and if this table is populated with any rows, our test is failing.
>
> **[2:32](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=152)** Our test is parameterized, meaning it's allowed to take in arguments.
>
> **[2:36](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=156)** During compilation the model and column name columns will be substituted in to the compiled sql code.
>
> **[2:44](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=164)** This parameterization makes tests more generic as we can run the same logic across multiple models and column names without having to write a custom test per model and column name.
>
> **[2:58](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=178)** Now that we've defined our custom test we need to reference it in the schema dot yml file.
>
> **[3:04](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=184)** Go back to the schema dot yml file and add another line underneath the test block and include the name of our custom test which in this case is custom underscore test.
>
> **[3:18](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=198)** Now that we've added the name of our custom test let's run dbt test again.
>
> **[3:28](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=208)** As you can see with this approach we've successfully recreated the behavior of the not in all test through our custom test.
>
> **[3:36](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=216)** Custom tests in dbt are powerful and flexible As anything expressible in sql can be translated into a dbt test.
>
> **[3:45](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=225)** By mastering testing in dbt, you'll advance your [[Data Engineering]] skills ensuring the accuracy and reliability of your [[Data Pipelines]].
>
> **[3:54](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/custom-tests-in-dbt?u=76281980&t=234)** The ability to create custom tests empowers you to validate specific business logic and [[Data Quality]] rules unique to your organization, enhancing the overall data testing process in dbt.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Data Engineering]] (1), [[Data Pipelines]] (1), [[Data Quality]] (1)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** open the (1), navigate to (1)
> **Cross-References:** go back to (1)
> **Definitions:** defined as (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Testing SQL](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980&t=5)** - [Instructor] Let's go back to the example of our advertising company from the first video in this chapter.
>
> **[0:11](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980&t=11)** For this challenge, we're going to help the company get their testing infrastructure in order.
>
> **[0:16](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980&t=16)** To get started, first open up chapter5/models/adid_data.[[SQL]] in the VS Code UI.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980&t=25)** Then open Lineage View in the DBT Power User plugin.
>
> **[0:30](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980&t=30)** You can see this model reads from a parent, raw_adid_data.
>
> **[0:35](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980&t=35)** Next, let's shift our attention to the schema.yaml file.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980&t=43)** Upon inspection, you'll notice that the schema in its current form lacks any tests.
>
> **[0:49](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980&t=49)** Now our mission is to add some of the essential built-in DBT tests to ensure [[Data Quality]] and reliability for this kind of data.
>
> **[0:59](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980&t=59)** Modify the schema.yaml file to add some of the built-in DBT tests that you believe would be necessary to have in this kind of data.
>
> **[1:08](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980&t=68)** As you contemplate the tests to add, consider the descriptions of each of the columns provided.
>
> **[1:15](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980&t=75)** These will provide you with valuable pointers and ideas for designing the appropriate tests.
>
> **[1:21](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980&t=81)** Once you've enhanced the schema with relevant tests, let's revisit the advertising company's previous predicament.
>
> **[1:28](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980&t=88)** They encountered a scenario where one of the cohorts ballooned significantly larger than the others.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980&t=94)** Our test now is to leverage our DBT testing skills to create a generic test that prevents this issue from reoccurring.
>
> **[1:44](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980&t=104)** Use your DBT testing skills to create this generic test to ensure the issue doesn't occur.
>
> **[1:50](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980&t=110)** Specifically, each of the cohorts should have a maximum of 100 distinct AdIDs.
>
> **[1:57](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980&t=117)** With our test defined, it's time to put them to the test.
>
> **[2:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980&t=120)** Execute the DBT test command to validate the data and check for any potential failures.
>
> **[2:06](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980&t=126)** Did you notice any failures?
>
> **[2:08](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980&t=128)** If so, what test failed and what may be the reason?
>
> **[2:12](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/challenge-testing-sql?u=76281980&t=132)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[Data Quality]] (1)
> **Env Vars:** dbt (6)
> **File Paths:** schema.yaml (2), chapter5/models/adid_data.sql (1)
> **Code Identifiers:** adid_data (1), raw_adid_data (1)
> **Cross-References:** go back to (1)
> **Tools:** vs code (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution: Testing SQL](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=0)** - [Instructor] Congratulations on completing the testing challenge.
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=7)** Let's run through our solution.
>
> **[0:10](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=10)** As always, there are likely multiple correct answers.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=13)** Depending on the assumptions that you make during the challenge, I will show you a potential solution.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=20)** Let's open up chapter5/models/schema.yaml.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=25)** The first part of the task involved using some of DBTs built-in tests on the columns.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=31)** Let's quickly run through them.
>
> **[0:33](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=33)** In the case of adid the description mentions that each row has a distinct value and that the value is required.
>
> **[0:41](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=41)** As such, let's apply the unique and not null tests to this column.
>
> **[0:49](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=49)** The latitude, longitude city and event date columns are all required but nothing specifies that the values must be unique or that another built-in test may apply.
>
> **[1:03](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=63)** For that reason, we'll simply add the not null test.
>
> **[1:10](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=70)** Looking at cohort we can see that the cohort field is required and that there are actually a set of defined values.
>
> **[1:17](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=77)** For this column, specifically, the values must either be the English [[Microsoft Word|word]] one, two, three, four, five, or six.
>
> **[1:29](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=89)** Let's add this as an accepted values test and include the list of values that this column can contain.
>
> **[1:36](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=96)** Since the field is also required we should add the not null test.
>
> **[1:41](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=101)** There's one more test listed called Ensure cohort size max 100.
>
> **[1:46](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=106)** Let's comment this out for now.
>
> **[1:48](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=108)** We'll get to that shortly.
>
> **[1:51](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=111)** Now, let's run a DBT test and make sure everything passes,
>
> **[2:04](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=124)** great.
>
> **[2:05](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=125)** It seems like everything works as expected.
>
> **[2:07](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=127)** The second part of the challenge involved creating a custom test to validate that each of the cohorts have at most 100 unique adid's.
>
> **[2:17](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=137)** To create a generic test we open the chapter5/testdirectory and create a directory named generic.
>
> **[2:25](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=145)** Inside the generic directory, we can create our test.
>
> **[2:29](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=149)** I named the test Ensure cohort size max 100.
>
> **[2:33](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=153)** Open it up.
>
> **[2:35](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=155)** This test uses a [[CTE]] to first create a table with the cohort and count the number of adid's in that cohort.
>
> **[2:45](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=165)** Then in the main query, we filter for the cohorts that have a cohort count of greater than 100.
>
> **[2:52](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=172)** Now let's switch back to schema.yaml and uncomment the ensure cohort size 100 max test.
>
> **[3:04](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=184)** Now let's rerun DBT test.
>
> **[3:14](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=194)** To investigate I'm going to grab the cohort count CTE code, and run it to see the count of each of my cohorts.
>
> **[3:22](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=202)** You can open up the [[SQL]] Tools plugin and press this button here to create a new SQL file.
>
> **[3:29](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=209)** You may have to use the Chapter five database by typing use chapter five, but I've already done that.
>
> **[3:35](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=215)** Let me copy and paste my code here and press run on active connection.
>
> **[3:41](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=221)** As you can see, cohort four and cohort one have both resulted in test failures.
>
> **[3:48](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=228)** Cohort four has 504 unique adid's whereas cohort one has 108, we've successfully solved the fundamental problem encountered by the advertising company.
>
> **[4:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/solution-testing-sql?u=76281980&t=240)** Great work on completing the chapter on testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CTE]] (2), [[SQL]] (2), [[Microsoft Word|Word]] (1)
> **Env Vars:** dbt (2), cte (2), sql (2)
> **File Paths:** chapter5/models/schema.yaml (1), schema.yaml (1)
> **CLI Commands:** make (2)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Looking ahead](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/looking-ahead?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/looking-ahead?u=76281980&t=0)** - Looking ahead, I anticipate several exciting developments in the [[SQL]] and [[Data Engineering]] landscape.
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/looking-ahead?u=76281980&t=7)** Machine learning and AI integration with SQL are poised to revolutionize how enterprises derive insights from data.
>
> **[0:14](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/looking-ahead?u=76281980&t=14)** With [[Predictive Analytics]] becoming an integral part of data engineering workflows.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/looking-ahead?u=76281980&t=20)** Automated [[Data Governance]] and [[Data Quality]] checks will enhance the reliability and trustworthiness of [[Data Pipelines]], ensuring that data engineers can confidently make decisions based on high quality data.
>
> **[0:33](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/looking-ahead?u=76281980&t=33)** The rise of streaming and [[Real-Time]] processing will drive the demand for data engineers skilled in SQL and technologies like [[Apache Kafka]] and Apache Flink.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/looking-ahead?u=76281980&t=43)** This shift towards real-time data analytics will enable businesses to respond swiftly to changing market trends and customer demands.
>
> **[0:52](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/looking-ahead?u=76281980&t=52)** Moreover, the convergence of data engineering and [[Data Science]] will necessitate data engineers to develop expertise in languages like [[Python (Programming Language)|Python]] and R alongside their SQL skills.
>
> **[1:04](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/looking-ahead?u=76281980&t=64)** This interdisciplinary effort will empower data engineers to collaborate effectively with data scientists and bridge the gap between [[Data Collection]] and [[Data-driven Decision Making]].
>
> **[1:17](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/looking-ahead?u=76281980&t=77)** As you wrap up this course, remember that SQL is a powerful tool that empowers data engineers to transform raw data into valuable insights.
>
> **[1:28](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/looking-ahead?u=76281980&t=88)** The knowledge gained in this course will serve as a strong foundation for your data engineering journey.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/looking-ahead?u=76281980&t=94)** The trends in the SQL and modern data stack ecosystem will continue to shape the future of data engineering and your adaptability to these changes will be crucial for your professional growth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[Data Engineering]] (5), [[Real-Time]] (2), [[Predictive Analytics]] (1), [[Data Governance]] (1)
> **Env Vars:** sql (6)
> **CLI Commands:** apache (2), make (1), python (1)
> **Definitions:** is a  (1)
> **Speakers:** - looking (1)

#### [Next steps](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/next-steps?u=76281980&t=0)** - Congratulations.
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/next-steps?u=76281980&t=1)** You have successfully completed the course and advanced your [[SQL]] skills for [[Data Engineering]].
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/next-steps?u=76281980&t=7)** Throughout this comprehensive journey, you explored the powerful world of SQL and learned how to leverage the revolutionary [[Data Transformation]] tool DBT along with best practices for data engineering.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/next-steps?u=76281980&t=21)** Let's reflect on the key takeaways.
>
> **[0:23](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/next-steps?u=76281980&t=23)** We explored trends in the SQL and modern data stack ecosystem and discussed some forward-looking ideas in the ever-evolving field of data engineering.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/next-steps?u=76281980&t=34)** In this course, you explored essential concepts like normal [[Forms]], functional dependencies, and the principle of relational [[Database Design]].
>
> **[0:44](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/next-steps?u=76281980&t=44)** Understanding these fundamentals is vital for maintaining [[Data Integrity]], reducing redundancy, and optimizing the efficiency of your database schema.
>
> **[0:56](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/next-steps?u=76281980&t=56)** With DBT, you harness the capabilities of a versatile open source solution, enabling us to build and transform [[Data Pipelines]] with ease.
>
> **[1:07](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/next-steps?u=76281980&t=67)** You learned how to optimally design analytics code, making SQL-based data transformation and testing a breeze.
>
> **[1:16](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/next-steps?u=76281980&t=76)** The world of data engineering is continuously evolving and SQL remains a foundational skill in the data stack ecosystem.
>
> **[1:24](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/next-steps?u=76281980&t=84)** Similarly, if you're interested in understanding orchestration, another foundational skill, be sure to complete my hands-on data engineering course.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/next-steps?u=76281980&t=94)** As data continues to grow in volume and complexity, SQL will continue to play a pivotal role in empowering data engineers to unlock valuable insights from these vast data sets.
>
> **[1:47](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/next-steps?u=76281980&t=107)** I encourage you to keep exploring, learning, and applying your skills to make a positive impact with data.
>
> **[1:54](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/next-steps?u=76281980&t=114)** As the data engineering landscape evolves, I'm confident that you are well equipped to [[Microsoft Excel|excel]] in this dynamic and rewarding field.
>
> **[2:02](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/next-steps?u=76281980&t=122)** Again, I'm Vinu, and I thank you for joining me on this exciting learning journey.
>
> **[2:07](https://www.linkedin.com/learning/data-engineering-dbt-for-sql/next-steps?u=76281980&t=127)** I wish you all the best in your future endeavors as a skilled data engineer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[Data Engineering]] (6), [[Data Transformation]] (2), [[Forms]] (1), [[Database Design]] (1)
> **Env Vars:** sql (6), dbt (2)
> **CLI Commands:** make (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Vinoo Ganesh]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advance-your-sql-skills-for-data-engineering-3315012/codespaces)

## Skills Covered

- Data Engineering
- SQL
- Data Build Tool (DBT)

## Path Context

### In [[Master Data Engineering]]
← [[Complete Guide to Python for Data Engineering- From Beginner to Advanced]] | **6 of 8** | [[Advanced Snowflake- Deep Dive Cloud Data Warehousing and Analytics]] →

## Appears In

- [[Master Data Engineering]]

## Related Courses

_Courses sharing skills:_

- [[Complete Guide to SQL for Data Engineering- from Beginner to Advanced]] — SQL, Data Engineering
- [[Data Engineering With Dbt]] — Data Engineering, Data Build Tool (DBT)
- [[Advanced SQL Project- Design and Manage a Database]] — SQL
- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — SQL
- [[SQL Server Fundamentals- Master Basic Query Techniques]] — SQL

---

[↑ Back to top](#)