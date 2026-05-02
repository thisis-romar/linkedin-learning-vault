---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: intro-to-snowflake-for-devs-data-scientists-data-engineers
url: "https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers"
level: Beginner
updated: 4/7/2025
learners: 7910
skills:
  - Data Engineering
  - Snowflake
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQH35TucPZN6vQ/learning-public-crop_675_1200/B4EZdBv2DTHcAg-/0/1749154751617?e=2147483647&amp;v=beta&amp;t=q_UaIWdmfbPqvVkBDcZ6TVAPWRdRQv0im9axI3POqiU"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Generative AI Professional Certificate by Snowflake]]'
  - '[[Data Engineering Professional Certificate by Snowflake]]'
next_courses:
  - '[[Introduction to Gen AI with Snowflake]]'
  - '[[Introduction to Modern Data Engineering with Snowflake]]'
path_nav: '[{"path":"Generative AI Professional Certificate by Snowflake","position":1,"total":3,"prev":null,"next":"Introduction to Gen AI with Snowflake"},{"path":"Data Engineering Professional Certificate by Snowflake","position":1,"total":3,"prev":null,"next":"Introduction to Modern Data Engineering with Snowflake"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/cloud-computing
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/data-engineering
  - skill/snowflake
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Intro%20To%20Snowflake%20For%20Devs%20Data%20Scientists%20Data%20Engineers.md)

![Intro To Snowflake For Devs Data Scientists Data Engineers](https://media.licdn.com/dms/image/v2/D4E0DAQH35TucPZN6vQ/learning-public-crop_675_1200/B4EZdBv2DTHcAg-/0/1749154751617?e=2147483647&amp;v=beta&amp;t=q_UaIWdmfbPqvVkBDcZ6TVAPWRdRQv0im9axI3POqiU)

# Intro To Snowflake For Devs Data Scientists Data Engineers

> Ready to get started with Snowflake, the easy-to-use platform for building applications, data pipelines, AI models, and workflows? In this course, you’ll progress from zero all the way to creating user-defined functions, using a Snowflake Cortex LLM function, editing a Streamlit app, and more. Learn to use Snowflake’s core objects such as virtual warehouses, stages, and databases, before turning t

> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers) | Beginner | 8K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Intro and course overview](#intro-and-course-overview)
- [**1. Worksheets**](#1-worksheets) (2 videos)
  - [Worksheets and a simple example: Part 1](#worksheets-and-a-simple-example-part-1)
  - [Worksheets and a simple example: Part 2](#worksheets-and-a-simple-example-part-2)
- [**2. Virtual Warehouses**](#2-virtual-warehouses) (3 videos)
  - [Virtual warehouses overview](#virtual-warehouses-overview)
  - [Virtual warehouses scaling: Part 1](#virtual-warehouses-scaling-part-1)
  - [Virtual warehouses scaling: Part 2](#virtual-warehouses-scaling-part-2)
- [**3. Stages and Basic Ingestion**](#3-stages-and-basic-ingestion) (2 videos)
  - [Stages and basic ingestion: Part 1](#stages-and-basic-ingestion-part-1)
  - [Stages and basic ingestion: Part 2](#stages-and-basic-ingestion-part-2)
- [**4. Databases and Schemas**](#4-databases-and-schemas) (2 videos)
  - [Databases and schemas: Part I](#databases-and-schemas-part-i)
  - [Databases and schemas: Part 2](#databases-and-schemas-part-2)
- [**5. Tables**](#5-tables) (2 videos)
  - [Tables: Part 1](#tables-part-1)
  - [Tables: Part 2](#tables-part-2)
- [**6. Views**](#6-views) (2 videos)
  - [Views: Part 1](#views-part-1)
  - [Views: Part 2](#views-part-2)
- [**7. Semistructured Data**](#7-semistructured-data) (2 videos)
  - [Semistructured data types](#semistructured-data-types)
  - [Semistructured data manipulation](#semistructured-data-manipulation)
- [**8. Snowflake Architecture**](#8-snowflake-architecture) (2 videos)
  - [Snowflake architecture overview](#snowflake-architecture-overview)
  - [Wrap-up of Snowflake’s core objects and architecture](#wrap-up-of-snowflakes-core-objects-and-architecture)
- [**9. Time Travel**](#9-time-travel) (3 videos)
  - [Intro to Snowflake feature overview](#intro-to-snowflake-feature-overview)
  - [Time travel: Part 1](#time-travel-part-1)
  - [Time travel: Part 2](#time-travel-part-2)
- [**10. Table Types**](#10-table-types) (1 videos)
  - [Permanent, transient, and temporary tables](#permanent-transient-and-temporary-tables)
- [**11. Cloning**](#11-cloning) (1 videos)
  - [Cloning](#cloning)
- [**12. Resource Monitors**](#12-resource-monitors) (1 videos)
  - [Resource monitors](#resource-monitors)
- [**13. User-Defined Functions (UDFs)**](#13-user-defined-functions-udfs) (3 videos)
  - [User-defined functions (UDFs): Part 1](#user-defined-functions-udfs-part-1)
  - [User-defined functions (UDFs): Part 2](#user-defined-functions-udfs-part-2)
  - [User-defined table functions (UDTFs)](#user-defined-table-functions-udtfs)
- [**14. Stored Procedures**](#14-stored-procedures) (2 videos)
  - [Stored procedures: Part 1](#stored-procedures-part-1)
  - [Stored procedures: Part 2](#stored-procedures-part-2)
- [**15. Role-based Access Control (RBAC)**](#15-role-based-access-control-rbac) (2 videos)
  - [Role-based access control (RBAC): Part 1](#role-based-access-control-rbac-part-1)
  - [Role-based access control (RBAC): Part 2](#role-based-access-control-rbac-part-2)
- [**16. Snowpark DataFrames and VS Code Extension**](#16-snowpark-dataframes-and-vs-code-extension) (3 videos)
  - [VS Code extension](#vs-code-extension)
  - [Snowpark DataFrames: Part 1](#snowpark-dataframes-part-1)
  - [Snowpark DataFrames: Part 2](#snowpark-dataframes-part-2)
- [**17. Snowflake CLI**](#17-snowflake-cli) (2 videos)
  - [Snowflake CLI](#snowflake-cli)
  - [Wrap-up of Snowflake feature overview](#wrap-up-of-snowflake-feature-overview)
- [**18. Data Engineering with Snowflake**](#18-data-engineering-with-snowflake) (3 videos)
  - [Intro to overview of builder workloads](#intro-to-overview-of-builder-workloads)
  - [Snowflake data engineering overview: Part 1](#snowflake-data-engineering-overview-part-1)
  - [Snowflake data engineering overview: Part 2](#snowflake-data-engineering-overview-part-2)
- [**19. Ingesting Data with Snowpipe**](#19-ingesting-data-with-snowpipe) (2 videos)
  - [Snowpipe: Part 1](#snowpipe-part-1)
  - [Snowpipe: Part 2](#snowpipe-part-2)
- [**20. GenAI with Snowflake**](#20-genai-with-snowflake) (2 videos)
  - [Snowflake genAI overview: Part 1](#snowflake-genai-overview-part-1)
  - [Snowflake genAI overview: Part 2](#snowflake-genai-overview-part-2)
- [**21. Snowflake Cortex LLM Functions**](#21-snowflake-cortex-llm-functions) (2 videos)
  - [Snowflake Cortex LLM functions: Part 1](#snowflake-cortex-llm-functions-part-1)
  - [Snowflake Cortex LLM functions: Part 2](#snowflake-cortex-llm-functions-part-2)
- [**22. Machine Learning with Snowflake**](#22-machine-learning-with-snowflake) (2 videos)
  - [Snowflake ML overview: Part 1](#snowflake-ml-overview-part-1)
  - [Snowflake ML overview: Part 2](#snowflake-ml-overview-part-2)
- [**23. Snowpark ML Modeling**](#23-snowpark-ml-modeling) (3 videos)
  - [Snowpark ML modeling: Part 1](#snowpark-ml-modeling-part-1)
  - [Snowpark ML modeling: Part 2](#snowpark-ml-modeling-part-2)
  - [Snowpark ML modeling: Part 3](#snowpark-ml-modeling-part-3)
- [**24. Applications with Snowflake**](#24-applications-with-snowflake) (2 videos)
  - [Snowflake applications overview: Part 1](#snowflake-applications-overview-part-1)
  - [Snowflake applications overview: Part 2](#snowflake-applications-overview-part-2)
- [**25. Streamlit in Snowflake**](#25-streamlit-in-snowflake) (2 videos)
  - [Streamlit in Snowflake: Part 1](#streamlit-in-snowflake-part-1)
  - [Streamlit in Snowflake: Part 2](#streamlit-in-snowflake-part-2)
- [**26. The Data Cloud**](#26-the-data-cloud) (3 videos)
  - [The data cloud](#the-data-cloud)
  - [Wrap-up of overview of builder workloads](#wrap-up-of-overview-of-builder-workloads)
  - [Course conclusion](#course-conclusion)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Intro and course overview
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=5)** - Welcome to Intro to Snowflake for Data Engineers, Data Scientists, and App Developers.
>
> **[0:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=15)** My name is Peter Olson.
>
> **[0:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=17)** I'm a developer advocate at Snowflake, and I'm so excited to be part of your Snowflake journey.
>
> **[0:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=21)** This is an extremely hands-on course, so we want to get into the product right away, and then only introduce theory if it feels really relevant to practice.
>
> **[0:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=29)** But before we hop into using the Snowflake platform, I want to say a few sentences about what Snowflake is, and then I want to take a moment to explain who this course is for and what you can expect to get out of it.
>
> **[0:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=38)** Then, I'll mention what we'll cover in this first part of the course on Snowflake's core objects and architecture.
>
> **[0:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=43)** So, what is Snowflake?
>
> **[0:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=44)** Snowflake is the Data Cloud, a global network where organizations mobilize data with near-unlimited scale, concurrency, and performance.
>
> **[0:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=52)** Inside the Data Cloud, organizations have a unified view of data so they can discover and share, govern data, and execute many kinds of analytics workloads.
>
> **[1:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=60)** The Data Cloud has two parts, platform and data.
>
> **[1:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=63)** Snowflake's platform is the engine that powers the Data Cloud, and we'll spend a lot of time in this course learning about how to use this platform.
>
> **[1:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=70)** This definition probably sounds abstract, it did to me, at first, but that's partly because Snowflake lets you do a lot with your data, and it's really hard to capture in a few words.
>
> **[1:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=79)** Also, this definition of Snowflake focuses a lot on an ambitious vision of organizations making data and apps available to each other, and it's mind-bending to think of not just connecting all parts of a company, but also enabling data connections across companies.
>
> **[1:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=96)** At the end of this course, we'll return to this idea of Snowflake as the Data Cloud, and I'm hopeful this description will feel a lot more tangible, then.
>
> **[1:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=103)** Okay, so who is this course for?
>
> **[1:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=105)** We designed it for a wide range of data practitioners, so data engineers, data scientists, data app developers, ML engineers, and more, who share the common goal of gaining foundational knowledge about Snowflake.
>
> **[1:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=117)** Maybe you're an aspiring data engineer who wants to advance your career, and you see in job descriptions that companies are looking for people with Snowflake skills.
>
> **[2:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=125)** Maybe you're a data scientist using Snowflake, but you know it has many capabilities you aren't making use of, and you want to figure out how to make better use of it.
>
> **[2:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=133)** At Snowflake, we call these people builders, because if you're a data engineer, data scientist, data app developer, or ML engineer, that means you are building pipelines or building statistical models or building ML models or building data apps.
>
> **[2:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=147)** When I first came to Snowflake, I wondered if the builder term was just marketing speak.
>
> **[2:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=152)** I used to be a data scientist, and I didn't think of my job as having that much to do with, say, app development.
>
> **[2:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=157)** But I've come to realize that the builder term reflects a pretty significant conviction on Snowflake's part that the lines are blurring between data roles.
>
> **[2:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=166)** For data science and data engineering, those lines have long been blurry.
>
> **[2:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=170)** Data scientists often do data engineering tasks, and vice versa.
>
> **[2:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=174)** But more and more, we think this will also be true in other areas, for example, with app development, as Snowflake makes it easier to deploy data projects as data apps.
>
> **[3:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=183)** You don't need to have prior experience with Snowflake to take this course, though if you already have some, you'll still benefit.
>
> **[3:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=189)** We do assume that those taking this course are somewhat familiar with SQL and Python.
>
> **[3:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=194)** For example, you should be able to run basic SQL queries, think SELECT * FROM with the ORDER BY and GROUP BY keywords in there, and you should be able to import Python libraries, create and use a Python function, and do basic data manipulation with dataframes.
>
> **[3:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=207)** If this doesn't sound like you, I recommend you do some introductory coursework on SQL and Python first.
>
> **[3:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=213)** Okay, so now we've covered who this course is for, data practitioners with some SQL and Python experience who want to gain foundational Snowflake knowledge, likely for career advancement.
>
> **[3:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=223)** Now, let's talk more about what you should expect to get out of it.
>
> **[3:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=227)** We have two main goals for this course.
>
> **[3:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=229)** First, if this is the only course you take on Snowflake, we want you to come away knowing four things.
>
> **[3:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=235)** One, Snowflake's core objects and how to use them.
>
> **[3:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=238)** Two, Snowflake's architecture.
>
> **[4:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=240)** Three, fundamental Snowflake features, like time travel, user-defined functions, et cetera, and how to use them.
>
> **[4:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=247)** And four, much of what Snowflake now lets users do with data engineering, applications, AI, and ML.
>
> **[4:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=254)** We want you to emerge from this course with a foundational mental map of what's possible with Snowflake and a bunch of reps getting stuff done.
>
> **[4:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=262)** And I don't know how you're feeling right now.
>
> **[4:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=263)** You might be feeling uncertain or even a little anxious.
>
> **[4:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=266)** But we also want you to emerge feeling confident and excited about your ability to use Snowflake.
>
> **[4:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=271)** Second, if this course is part of a longer Snowflake learning journey for you, you should expect to come away equipped to take a bunch of other Snowflake coursework.
>
> **[4:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=279)** We designed this to be the single point of entry for a longer Snowflake learning journey.
>
> **[4:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=284)** For those who want to go deeper on, say, data engineering with Snowflake, GenAI with Snowflake, applications with Snowflake, and more.
>
> **[4:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=292)** In this course, we're going to talk about lots of Snowflake products and features, including some that are still in preview as of the time of filming.
>
> **[4:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=299)** It's challenging to make a course like this because Snowflake's functionality is changing and improving all the time.
>
> **[5:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=304)** So, if you ever have questions about any of these products or features, or their availability, you can always refer to Snowflake's product documentation at [snowflake.com](https://snowflake.com).
>
> **[5:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=311)** Last thing, what we will cover in this first part of the course.
>
> **[5:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=315)** In this first part of the course, we'll learn about Snowflake's core objects and architecture.
>
> **[5:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=319)** Specifically, we'll learn about virtual warehouses, stages, databases, schemas, tables, views, semi-structured data, and the different Snowflake architectural layers.
>
> **[5:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=330)** Okay, that's enough preamble.
>
> **[5:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-and-course-overview?u=76281980&t=332)** Let's dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (40), data (32), cloud (5), [[Python (Programming Language)|Python]] (5), [[Data Engineering]] (4)
> **CLI Commands:** python (5), make (2)
> **Env Vars:** sql (4), select (1), order (1), group (1)
> **SQL:** select (1), order by (1), group by (1)
> **Analogies:** for example (2)
> **Non-Speech:** (upbeat music) (2)
> **URLs:** [snowflake.com](https://snowflake.com) (1)
> **Definitions:** is an  (1)


### 1. Worksheets

[↑ Back to Table of Contents](#table-of-contents)

#### Worksheets and a simple example: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=0)** - In my opinion, the most efficient way to learn Snowflake is to see the product in action.
>
> **[0:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=5)** So in this video, I'm going to upload a SQL worksheet and start querying data, but be aware there are other ways to interact with Snowflake.
>
> **[0:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=11)** We could use Python worksheets or even Snowflake-native notebooks directly from the Snowflake web UI.
>
> **[0:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=16)** For now, I'll stick with the SQL worksheet, which will give us a starting point for thinking about Snowflake.
>
> **[0:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=21)** In a later video, as we work through different parts of the Snowflake UI, we'll begin to see the bigger picture.
>
> **[0:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=26)** While I'm sharing my screen and demoing Snowflake in this course, I don't recommend that you run the same code at the same time.
>
> **[0:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=32)** I'm not expecting that.
>
> **[0:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=33)** You'll have plenty of exercises to do in between videos.
>
> **[0:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=36)** And don't worry.
>
> **[0:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=37)** I'll provide all the instructions and code you need to get started, including instructions on how to set up your Snowflake account.
>
> **[0:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=43)** Our goal in this video is to start using Snowflake to work with a really cool dataset Snowflake created about a fake food truck company called Tasty Bytes.
>
> **[0:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=51)** This fictitious company runs 450 food trucks in many countries, India, Japan, France, Poland, and more, and it has huge growth ambitions.
>
> **[1:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=60)** This dataset will be our main source of data throughout the course, so let's get an early taste of what's in it.
>
> **[1:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=65)** Okay, so here we go.
>
> **[1:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=67)** What you're seeing now is the primary browser-based way of interacting with Snowflake.
>
> **[1:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=72)** We call it Snowsight, and we'll do most of our work in Snowsight for this course.
>
> **[1:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=77)** Under Projects on the left-hand side of the screen, I click on Worksheets.
>
> **[1:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=81)** What we're looking at now are Snowflake worksheets.
>
> **[1:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=85)** If you look at the Type column, you'll see some SQL ones and some Python ones, plus a folder or two, which will contain, you guessed it, more worksheets.
>
> **[1:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=93)** It's basically worksheet heaven.
>
> **[1:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=95)** I'm going to upload a worksheet called Worksheets and a Simple Example.
>
> **[1:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=100)** I do this by clicking on the three dots on the right-hand side of the screen and selecting Create Worksheet from SQL File.
>
> **[1:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=108)** Then I select my SQL file, and now, the fun starts.
>
> **[1:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=111)** And again, don't worry about doing this yourself.
>
> **[1:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=114)** You'll get access to any instructions or files you need later.
>
> **[1:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=118)** What we're looking at is a SQL worksheet.
>
> **[2:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=121)** SQL worksheets lets you write and run SQL statements, explore and filter query results, and visualize the results.
>
> **[2:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=128)** You can see at the top of this worksheet that there is grayed-out text.
>
> **[2:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=132)** These are comments, and when you run the worksheet, these comments don't do anything.
>
> **[2:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=136)** As is standard in SQL, there are two different ways of adding comments.
>
> **[2:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=141)** One comments out a whole block by starting with a forward slash and an asterisk and ending with an asterisk and a forward slash, and everything between those two bookends is a comment.
>
> **[2:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=151)** The other comments out a single line by adding two dashes in a row.
>
> **[2:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=155)** You could play around with deleting the asterisks or the dashes and seeing that the comments change color from being grayed out to being interpreted as regular code.
>
> **[2:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=165)** Cool, so now we're going to do a few things in quick succession to get the data set up so we can query it.
>
> **[2:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=171)** And don't worry, we'll cover everything we've done in more detail later.
>
> **[2:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=175)** Right now, we're just doing a few things to get to the point where we have data we can query, and in our video on stages and basic ingestion, we'll learn more about what we did to ingest data.
>
> **[3:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=185)** So first we set the role.
>
> **[3:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=187)** You do this by putting your cursor inside the block of code you want to run.
>
> **[3:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=191)** Each block of code is separated by a semicolon, so just put your cursor somewhere before the semicolon, but after the previous semicolon.
>
> **[3:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=199)** Then if you're on a Mac, hold Command + Return to run that block.
>
> **[3:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=203)** And if you're on a PC, hold Control + Enter.
>
> **[3:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=206)** You should see a status update on the bottom of the screen that the statement executed successfully.
>
> **[3:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=215)** To see a list of the hotkeys you could use in a worksheet, you can hold Command + Shift + ?.
>
> **[3:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=221)** Make sure to scroll down to see them all.
>
> **[3:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=225)** Now, I'll set the warehouse by putting my cursor anywhere in the USE WAREHOUSE line.
>
> **[3:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=230)** Then I'll type Command + Enter to run that line because I'm on a Mac.
>
> **[3:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=233)** If you're on a PC, type Control + Enter.
>
> **[3:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=236)** In the video on virtual warehouses, we'll talk about why we did this and what effect it had, but for now, we're trying to get to the point where we can query some data as quickly as possible and we can't learn everything all at once.
>
> **[4:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=249)** Okay, now I'm going to move a little faster.
>
> **[4:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=251)** I'll use my cursor to highlight all of the code from steps two-to-four inclusive and I'll type Command + Enter to run all of that.
>
> **[4:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=259)** We just created a database, schema and table.
>
> **[4:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=263)** We created a stage with data from S3, and we copied data from that stage into our new table.
>
> **[4:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=268)** Again, don't worry about what any of this means.
>
> **[4:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=271)** We'll go over this later.
>
> **[4:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=273)** Now comes the triumphant moment, the moment we've been building up to, querying one of our Tasty Bytes' food truck tables.
>
> **[4:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=281)** Now let's run the next line of code.
>
> **[4:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=283)** SELECT COUNT(*) AS row_count FROM tasty_bytes_sample_data.raw_pos.menu to see how many rows are in our table.
>
> **[4:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=293)** Looks like there are 100.
>
> **[4:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=295)** We just ran our first query.
>
> **[4:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=296)** That's a big deal.
>
> **[4:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=298)** In this video, we learned about the fictional Tasty Bytes dataset, hopped into Snowsight, loaded a worksheet, and ran a query.
>
> **[5:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-i?u=76281980&t=305)** Next, we'll pick up right where we left off and learn more about our data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (12), [[SQL]] (9), data (9), [[Python (Programming Language)|Python]] (2), next (2)
> **Env Vars:** sql (9), warehouse (1), select (1), count (1)
> **CLI Commands:** python (2), make (1)
> **Code Identifiers:** row_count (1), tasty_bytes_sample_data (1), raw_pos (1)
> **UI Navigation:** click on (1), scroll down (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **SQL:** select (1)

#### Worksheets and a simple example: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=0)** - So in the last video, we ran our first query on the Tasty Bytes food truck data.
>
> **[0:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=5)** Now, let's do more digging to see if we can find out more about what this menu is telling us.
>
> **[0:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=9)** To do this, let's run the next line of code.
>
> **[0:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=12)** SELECT TOP 10 * FROM tasty_bytes_sample_data.raw_pos.menu.
>
> **[0:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=18)** The results pop up at the bottom and inspecting the data, I'm seeing different kinds of desserts and beverages offered by a particular food truck brand.
>
> **[0:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=26)** Again, all of this Tasty Bytes data is fictitious.
>
> **[0:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=29)** We generated this dataset at Snowflake.
>
> **[0:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=32)** It looks like we have data on how much the goods cost for a given food truck to provide and how much they're selling them for.
>
> **[0:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=38)** And then we have some ingredients and health information in a semi-structured data format at the end.
>
> **[0:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=44)** We'll talk more about semi-structured data later in the course.
>
> **[0:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=49)** Let's indulge and do a little more exploring because it feels like a shame to have done this work to get a cool data set in front of us without exploring it a bit.
>
> **[0:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=56)** One of the first questions I have is, how many food truck brands are we talking about here?
>
> **[1:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=61)** We know from our introduction to Tasty Bytes earlier that there are 450 trucks across the world, but that didn't tell us how many different brands this represents.
>
> **[1:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=69)** And given that this column exists, it seems like Tasty Bytes encompasses multiple brands.
>
> **[1:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=74)** To learn more, let's just run some simple code.
>
> **[1:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=77)** SELECT TRUCK_BRAND_NAME, COUNT(*) FROM tasty_bytes_sample_data.raw_pos.menu GROUP BY 1 ORDER BY 2 DESC.
>
> **[1:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=84)** This isn't a course on SQL, but as a reminder, when we GROUP BY 1, it means group by the first column listed in the SELECT statement.
>
> **[1:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=92)** So in this case, TRUCK_BRAND_NAME.
>
> **[1:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=94)** And then when we ORDER BY 2 DESC, we're saying we want to order the results by the second column, the count from highest to lowest.
>
> **[1:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=101)** What we see is there are 15 different food truck brands in this menu table, and they have between six and 10 menu items each.
>
> **[1:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=110)** Now, let's answer one more question I have because I can't resist.
>
> **[1:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=114)** When we did our first query, I saw that there was a field called MENU_TYPE.
>
> **[1:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=118)** What's the relationship between the food truck's brand name and the menu type?
>
> **[2:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=122)** Are there more menu types than food truck brands or fewer, or is there a one-to-one mapping?
>
> **[2:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=127)** Let's check this out quickly.
>
> **[2:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=129)** All we need to do is revise our query to add MENU_TYPE as another field to GROUP BY, and then we GROUP BY 1 and 2 and ORDER BY 3.
>
> **[2:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=137)** SELECT TRUCK_BRAND_NAME, MENU_TYPE, COUNT(*) FROM tasty_bytes_sample_data.raw_pos.menu GROUP BY 1, 2 ORDER BY 3 DESC.
>
> **[2:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=147)** We run this and see that it looks like there are still 15 rows, and each TRUCK_BRAND_NAME seems to correspond to a particular MENU_TYPE.
>
> **[2:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=155)** So it appears that if you know the MENU_TYPE, you know the TRUCK_BRAND_NAME and vice versa.
>
> **[2:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=159)** That's cool.
>
> **[2:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=160)** Okay, the last thing I wanted to show you is that you can always create more worksheets to keep your code organized.
>
> **[2:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=167)** If you go to the top of the screen and click on a plus sign, you can make a new one.
>
> **[2:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=172)** And if you copy over a line of code, like SELECT count(*) AS row_count FROM tasty_bytes_sample_data.raw_pos.menu, you can run a query from that new worksheet, or you can go back to the main Snowsight menu by clicking on the projects tab on the left side of the screen.
>
> **[3:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=187)** Then, make sure you're in the Worksheets section and you can click the plus in the top right corner and hop into a new worksheet that way.
>
> **[3:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=195)** If you scroll to the top of your worksheet tab and click on the three vertical dots there, you can rename your worksheet to whatever you'd like.
>
> **[3:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=202)** I'm going to call mine Beautiful Blank Worksheet - So Much Possibility.
>
> **[3:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=209)** So there you go, in the last two videos, we learned about the fictional Tasty Bytes data set, hopped into Snowsight, loaded a worksheet, queried some data, and then learned how to create a new worksheet.
>
> **[3:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/worksheets-and-a-simple-example-part-ii?u=76281980&t=219)** Look at us, we've only just gotten started, but we've already come so far.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), next (1), [[Snowflake]] (1), [[SQL]] (1)
> **Env Vars:** select (5), truck_brand_name (5), group (5), menu_type (5), order (4)
> **SQL:** select (5), group by (5), order by (4)
> **Code Identifiers:** tasty_bytes_sample_data (4), raw_pos (4), row_count (1)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** in the last (2), go back to (1)
> **UI Navigation:** click on (2), go to (1)
> **Speakers:** - so (1)


### 2. Virtual Warehouses

[↑ Back to Table of Contents](#table-of-contents)

#### Virtual warehouses overview
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=0)** - So far, we've done a few things.
>
> **[0:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=2)** We've learned about the fictional Tasty Bytes dataset, hopped into Snowsight, loaded a worksheet, queried some data, and created a new worksheet.
>
> **[0:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=10)** And now you've actually run a query in Snowflake on your own.
>
> **[0:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=13)** Very fun.
>
> **[0:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=14)** One thing we went through very quickly, and I said at the time that we'd returned to it in a future video is the use warehouse command.
>
> **[0:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=21)** Well, I have good news.
>
> **[0:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=22)** This is that future video and we're going to have a great time learning about virtual warehouses.
>
> **[0:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=26)** So what is a virtual warehouse?
>
> **[0:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=28)** The Snowflake docs define it as a cluster of compute resources in Snowflake.
>
> **[0:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=32)** I like it when things are concrete.
>
> **[0:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=33)** So when I spin up a virtual warehouse, I think about the cluster I'm accessing from the Snowflake pool from AWS, GCP or Azure.
>
> **[0:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=41)** In my mind's eye, I can see the machine and say the AWS Oregon West region, and I'm now in command of some CPU memory and temporary storage resources.
>
> **[0:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=50)** In this video, we'll talk about what Use Warehouse does.
>
> **[0:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=53)** We'll also learn how to create a virtual warehouse and how to list your existing warehouses.
>
> **[0:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=58)** Warehouses are fun, so let's get into it.
>
> **[1:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=61)** You use a warehouse for a couple of things, executing most SQL queries and also for DML commands, data manipulation language commands that update the data in some way, like deleting or inserting rows or copying data into a table.
>
> **[1:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=73)** So let's create a new virtual warehouse and do something real with it.
>
> **[1:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=77)** When you're working in Snowsight, again, that's Snowflake's browser-based UI, there are often two ways to do something.
>
> **[1:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=83)** You can click buttons in the UI itself or you can write code inside a SQL or Python worksheet or other S site interfaces that accept code.
>
> **[1:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=91)** Throughout this course, we'll often cover both the UI and the code-based ways of doing things.
>
> **[1:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=97)** So let's first create a warehouse through the UI.
>
> **[1:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=100)** If we go to the menu on the left hand side of the screen and click on the admin tab and then click on warehouses, we see that we already have a warehouse, Compute Warehouse, the one we used in the last video.
>
> **[1:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=111)** This is the default warehouse that comes with the trial account, but it looks so lonely.
>
> **[1:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=115)** So let's give it a friend by clicking the plus warehouse button at the top right of the screen.
>
> **[2:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=120)** Let's name it Warehouse Gilberto, since one of my fellow developer advocates is named Gilberto.
>
> **[2:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=124)** And how often do you get to name a warehouse after a colleague while teaching an online course?
>
> **[2:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=128)** Not every day.
>
> **[2:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=130)** If we click on type, we can see that we have the option of making it Snowpark-optimized, which is a warehouse with extra memory.
>
> **[2:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=137)** But for now, we'll stick with Standard.
>
> **[2:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=139)** And if we click on size, we can see that we could opt for higher or lower performing warehouses.
>
> **[2:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=145)** For now, let's make this one slightly bigger than Compute Warehouse.
>
> **[2:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=148)** So we'll make it small instead of extra small.
>
> **[2:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=151)** And we'll discuss later what using larger warehouses does for you and how to switch warehouse sizes even mid workflow.
>
> **[2:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=159)** We'll ignore the advanced options for the moment and go ahead and create our virtual warehouse.
>
> **[2:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=167)** Although the term warehouse sounds like a place where you store things, in Snowflake the warehouses for compute, not storage.
>
> **[2:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=174)** And just to define our terms, storage refers to where your data is stored and compute refers to where your queries are processed and usually requires data to move from storage into the compute nodes.
>
> **[3:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=186)** Now that we have a warehouse of our own, you can see that it automatically comes online as started.
>
> **[3:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=192)** This means there are real compute resources in Snowflake that you're controlling, and we're also getting build for it, which we'll discuss more later.
>
> **[3:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=199)** If we click on it, we'll see that it's not doing anything yet.
>
> **[3:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=201)** So let's change that.
>
> **[3:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=204)** Let's hop back to our worksheets in a simple example worksheet and scroll down to our sample queries.
>
> **[3:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=209)** If we look at the top right of the screen, we can see the warehouse currently associated with this worksheet, Compute Warehouse.
>
> **[3:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=215)** So let's switch that to our new warehouse, Warehouse Gilberto, and check out the menu items for the Freezing Point brand, a food truck.
>
> **[3:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=224)** Of these, mango sticky rice sounds tastiest to me.
>
> **[3:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=227)** So let's look at that one a bit more and see how much of a profit Freezing Point makes every time it sells a unit of mango sticky rice.
>
> **[3:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=235)** Taking the sales price minus the cost of goods sold will tell us that.
>
> **[3:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=239)** So we run the query and see a profit of $3 and 75 cents.
>
> **[4:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=242)** Not bad.
>
> **[4:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=245)** So the warehouse we're using now is one that we created through the UI, but we can also create a warehouse using SQL commands.
>
> **[4:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=252)** So let's do that.
>
> **[4:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=253)** We just type create warehouse, followed by the warehouse name.
>
> **[4:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=257)** Let's call this one warehouse_dash.
>
> **[4:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=259)** Dash is another one of my colleagues.
>
> **[4:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=261)** Notice that when we created that warehouse, it switched the worksheet warehouse to use the new one.
>
> **[4:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=267)** So let's take a look at all our warehouses at once by running the Show Warehouses command.
>
> **[4:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=273)** The two new warehouses we've made are listed here.
>
> **[4:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=276)** Note that the new _dash warehouse is extra small.
>
> **[4:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=279)** That's because we didn't specify the size when we created it, so it defaulted to extra small.
>
> **[4:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=285)** Before, we switched from Compute Warehouse to Warehouse Gilberto using the UI by clicking on the top right and making the switch there.
>
> **[4:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=292)** But we can also switch it by writing a command.
>
> **[4:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=295)** All we have to do is type use warehouse, followed by the name of the warehouse.
>
> **[4:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=299)** So let's switch from warehouse_dash back to warehouse_gilberto.
>
> **[5:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=309)** That was productive.
>
> **[5:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=310)** We learned what virtual warehouses are, how to create them, how to see all of them at once, and how to switch between them.
>
> **[5:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-overview?u=76281980&t=316)** Coming up, we'll learn about scaling virtual warehouses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (7), data (5), [[SQL]] (3), aws (2), gcp (1)
> **Env Vars:** sql (3), aws (2), gcp (1), cpu (1), dml (1)
> **UI Navigation:** click on (5), go to (1), scroll down (1)
> **CLI Commands:** aws (2), make (2), python (1)
> **Definitions:** is a  (2), refers to (2)
> **Code Identifiers:** warehouse_dash (2), warehouse_gilberto (1)
> **Cross-References:** in the last (1), coming up (1)
> **Warnings:** note that (1)

#### Virtual warehouses scaling: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=0)** - When I was younger, my older brother Dan told me that writing code is the closest thing we've got to modern day magic.
>
> **[0:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=7)** You type out these incantations and run them, and voila, the world is different.
>
> **[0:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=12)** This is definitely how I feel about scaling virtual warehouses.
>
> **[0:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=17)** With a single line of code, you can scale up a virtual warehouse.
>
> **[0:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=20)** This means you're temporarily laying claim to dramatically more compute resources from the Snowflake compute pool.
>
> **[0:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=26)** Then with another line of code, you can scale back down all within a single workflow.
>
> **[0:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=31)** Being able to scale up and down like this is really useful because this makes you much more efficient.
>
> **[0:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=36)** You don't need to use vast compute resources for small jobs just because at one point in your workflow you'll require massive compute to, say, analyze a huge table.
>
> **[0:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=44)** One concrete example, if we're working with a Tasty Bytes menu table, which is only a hundred rows, we don't need a large machine, but then we might need to query the orders table, which has more than 600 million rows.
>
> **[0:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=55)** Scaling up and scaling down saves the day, so we're not trying to run a huge job through a small machine, which would take a long time.
>
> **[1:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=62)** Or wastefully run a small job on a large machine.
>
> **[1:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=65)** So here's what you need to know about scaling warehouses.
>
> **[1:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=68)** There are currently 10 standard warehouse sizes, extra small, small, medium, large, extra large, two XL, three XL, four XL, five XL, and six XL.
>
> **[1:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=77)** The amount of compute you're accessing doubles each time you go up a size, as does the number of credits you use per hour.
>
> **[1:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=85)** So you can keep an extra small running for an hour and only use one credit, two to the zeroth power.
>
> **[1:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=90)** But a six XL would use 512 credits in an hour, two to the ninth power.
>
> **[1:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=94)** In the stuff I do, I basically never use a six XL because that's like harnessing an army of 512 machines to work for me for a time.
>
> **[1:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=102)** We won't discuss this idea more in this course, but there are times when scaling to a huge number of machines for a short time can actually save you credits, relative to running a compute intensive task on a smaller number of machines for a longer time, or at the very least, there are lots of moments when scaling up can save you time at equivalent cost.
>
> **[2:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=120)** In any case, scaling up is a powerful tool.
>
> **[2:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=122)** To do it through the UI, just go back to your list of warehouses under the admin tab.
>
> **[2:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=127)** Click on the three dots, on the right hand side of the screen, select "edit," and then select your desired size from the dropdown.
>
> **[2:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=135)** But usually you're probably not going to want to do this through the UI if you're trying to scale up and down within a given workflow.
>
> **[2:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=142)** So instead, you'll want to go to your worksheet and use an alter warehouse command like this.
>
> **[2:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=147)** You type "alter warehouse," followed by the warehouse name, followed by warehouse size equals, and then the desired warehouse size.
>
> **[2:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=155)** In our case, let's scale warehouse dash to medium and run a query, and then scale back down to extra small.
>
> **[2:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=162)** Now let's sort the menu items by how much profit we get per item when we sell it.
>
> **[2:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=167)** Cool, selling a unit of Tonkatsu Ramen yields a profit of over $10.
>
> **[2:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=172)** Now let's scale the warehouse down again.
>
> **[2:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=177)** Look at us, we scaled up, ran a query, and scaled down all with a few lines of code.
>
> **[3:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=183)** You all wizard haray.
>
> **[3:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=187)** In this case, we're dealing with a tiny dataset, so the scaling up was not particularly helpful.
>
> **[3:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=192)** But in the next video, we'll deal with the sufficiently compute heavy data ingestion process that it will really save us time to scale up.
>
> **[3:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=199)** To recap, in this video we learned about scaling vertically.
>
> **[3:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=202)** In particular, we talked about the compute power and credit consumption of different warehouse sizes, and we learned how to resize a warehouse with the UI and the alter warehouse command with set warehouse size.
>
> **[3:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-i?u=76281980&t=213)** Coming up, we'll pick up right where we left off and learn about scaling horizontally.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** power (3), [[Snowflake]] (1), next (1), data (1)
> **Cross-References:** go back to (1), in the next (1), we talked about (1), coming up (1)
> **UI Navigation:** click on (1), dropdown (1), go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - when (1)
> **Non-Speech:** (upbeat music) (1)

#### Virtual warehouses scaling: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=0)** - We're going to get right back into it by talking about a different form of scaling.
>
> **[0:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=4)** Scaling horizontally.
>
> **[0:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=5)** So by default, a virtual warehouse consists of a single cluster of compute resources, and when you submit queries to the warehouse, the warehouse allocates resources to each query and begins executing the queries.
>
> **[0:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=16)** If there aren't enough resources to execute all the queries, Snowflake starts queuing the queries and you just have to wait for all of them to get handled sequentially.
>
> **[0:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=25)** Imagine there are three data engineers working with Tasty Bytes data at the same time, one submits a query that occupies the resources of the data warehouse.
>
> **[0:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=32)** Then the second uses that same warehouse and has to wait for the first to finish.
>
> **[0:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=37)** Then the third runs a query and is behind both of the others in line.
>
> **[0:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=40)** In a case like this where users are running a bunch of concurrent queries, instead of doing what we did earlier in scaling our cluster vertically by selecting a larger warehouse, we probably want to scale horizontally, so make use of more clusters.
>
> **[0:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=54)** So let's go ahead and set up a multi cluster warehouse to see what that's all about.
>
> **[0:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=58)** (graphics whooshing) Let's use the UI to make a new warehouse that's multi cluster from the get go.
>
> **[1:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=64)** We'll go to admin and click on warehouses.
>
> **[1:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=67)** Then we click plus warehouse.
>
> **[1:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=69)** Let's name our warehouse, warehouse_vino after another one of my colleagues.
>
> **[1:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=72)** But this time let's toggle open the advanced options dropdown.
>
> **[1:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=78)** You'll see a few different options.
>
> **[1:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=80)** We'll talk about auto resume and auto suspend in a moment.
>
> **[1:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=83)** So let's skip those and instead toggle on multi cluster warehouse.
>
> **[1:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=87)** Let's set the minimum number of clusters as 1 and the max as 3.
>
> **[1:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=91)** This means that we'll use one cluster until queries start queuing up until there's a backlog, and then we'll temporarily move to two clusters, and then if that proves insufficient, we'll temporarily move to three clusters.
>
> **[1:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=103)** Okay, so we make that warehouse and look, under the clusters column, you can see that there are three bars.
>
> **[1:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=108)** Pretty neat.
>
> **[1:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=111)** You won't be surprised to learn that we can also make a multi cluster warehouse through code.
>
> **[1:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=115)** Let's do that quickly by hopping over to projects, worksheets, and clicking on our virtual warehouses scaling worksheet.
>
> **[2:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=122)** Let's first drop our warehouse_vino by running the drop warehouse command, followed by the name of the warehouse we want to drop.
>
> **[2:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=128)** And then we'll check that the warehouse is really gone using show warehouses.
>
> **[2:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=134)** Yep, no more warehouse_vino.
>
> **[2:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=136)** But then we type create warehouse, followed by the warehouse name, warehouse_vino, and then we add on the property, max cluster count equals 4.
>
> **[2:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=144)** Let's run that and then show our warehouses.
>
> **[2:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=147)** And sure enough, we have a warehouse_vino multi cluster warehouse once more.
>
> **[2:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=151)** And one last word on multi cluster warehouses, you could do the same things with a multi cluster warehouse that you can with a single cluster warehouse like resizing the warehouse, et cetera.
>
> **[2:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=161)** Okay, now let's explore two options we skipped a moment ago.
>
> **[2:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=165)** Auto resume and auto suspend.
>
> **[2:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=168)** Let's hop back to admin and take a look at the warehouses tab.
>
> **[2:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=171)** Let's edit the warehouse, Gilberto Warehouse by clicking on the three dots on the right and clicking edit, you'll see that auto resume and auto suspend are both toggled on by default.
>
> **[3:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=182)** Auto resume means that the warehouse will automatically kick into action when someone asks it to do something.
>
> **[3:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=188)** And auto suspend means that after a specified number of minutes of inactivity, the warehouse will turn off.
>
> **[3:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=194)** My sense is most people keep auto resume on, but you could imagine turning that off for greater control over costs.
>
> **[3:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=200)** And my sense is most people keep auto suspend on as a cost saving measure, but they might adjust the number of minutes after which a warehouse shuts down.
>
> **[3:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=209)** When I first learned about auto suspend, it seemed to me like you'd probably want to set that number really low to save on credits.
>
> **[3:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=216)** But then I learned that when you keep your warehouse running, you keep data in cache.
>
> **[3:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=221)** So there are queries you might re-execute but not have to really rerun because the results are still there.
>
> **[3:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=226)** If you shut off your warehouse too early, you risk having to redo computations because you cleared your cache.
>
> **[3:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=232)** So there's a balance here, and what's best for you will depend on your workload.
>
> **[3:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=236)** Okay, so let's hop over to our SQL worksheet and adjust the warehouse-warehouse so that it auto suspends after three minutes and does not auto resume.
>
> **[4:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=247)** All we have to do is run an alter warehouse command.
>
> **[4:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=250)** So we type alter warehouse, and then write the name of the warehouse, warehouse dash, and then set auto suspend equals 180.
>
> **[4:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=257)** You specify the number of seconds.
>
> **[4:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=259)** Followed by auto resume equals false.
>
> **[4:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=263)** Then after we execute that, we can run show warehouse and scroll over to confirm that warehouse dash does indeed auto suspend after 180 seconds and has auto resume set to false.
>
> **[4:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=275)** Okay, last thing.
>
> **[4:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=276)** Sometimes you just want to suspend your warehouse to save credits.
>
> **[4:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=280)** You can do this in the UI by clicking on the three dots and clicking suspend.
>
> **[4:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=284)** Or you can type alter warehouse, followed by the name of the warehouse, and then suspend.
>
> **[4:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=289)** Run that and your warehouse is now suspended.
>
> **[4:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=295)** (graphics whooshing) Great job.
>
> **[4:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=297)** Let's recap what we've learned about scaling virtual warehouses.
>
> **[5:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=300)** We learned what it means to scale a warehouse horizontally and vertically, how to do that and how that translates into credit consumption.
>
> **[5:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=308)** We also learned about the auto suspend and auto resume properties and how to manually suspend a warehouse.
>
> **[5:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/virtual-warehouses-scaling-part-ii?u=76281980&t=313)** After some practice, we can now put our warehouse skills to use to ingest some pretty awesome data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[Snowflake]] (1), concurrent (1), [[Microsoft Word|Word]] (1), [[SQL]] (1)
> **UI Navigation:** toggle (2), go to (1), click on (1), open the (1), dropdown (1)
> **Code Identifiers:** warehouse_vino (5)
> **CLI Commands:** make (4)
> **Definitions:** means that (3)
> **Analogies:** imagine (2)
> **Env Vars:** sql (1)
> **Cross-References:** earlier in (1)


### 3. Stages and Basic Ingestion

[↑ Back to Table of Contents](#table-of-contents)

#### Stages and basic ingestion: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=0)** - We now know a bunch about virtual warehouses, so let's put our knowledge to use to ingest some data.
>
> **[0:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=6)** If you have data that you want to load to a table in Snowflake, you do that by way of an intermediate object called a stage.
>
> **[0:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=13)** Data on your local machine, you first create a stage object.
>
> **[0:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=16)** Data on external cloud storage, you'll first create a stage object.
>
> **[0:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=19)** Only after making the stage object do you copy the data to a table.
>
> **[0:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=23)** The stage serves as a bridge between your data source and your table.
>
> **[0:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=28)** In this course, we're not going to get into why stages exist.
>
> **[0:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=31)** We're just going to learn how to use them.
>
> **[0:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=33)** Earlier, we played around with menu data from Tasty Bytes, the food truck company.
>
> **[0:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=37)** Now we're going to ingest a lot more Tasty Bytes data.
>
> **[0:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=40)** Order data, customer data, truck data and more, and we'll use that again and again throughout the course.
>
> **[0:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=46)** Okay, so in this worksheet, I'll start by making sure I'm using the super powerful role of account admin.
>
> **[0:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=52)** We won't talk about roles until later in the course, but for now you should know that what I'm doing here is not a best practice.
>
> **[0:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=58)** You don't typically just casually use the all powerful account admin role, but in this course we're not going to worry about it, especially not before we cover roles.
>
> **[1:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=68)** Next, I'll create a database and a few different schemas.
>
> **[1:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=71)** We'll talk about databases and schemas in the next video.
>
> **[1:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=73)** The one thing I'll point out is that we have two raw schemas and then a cleaned up schema called harmonized.
>
> **[1:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=79)** And finally, our tippity top schema called analytics.
>
> **[1:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=83)** Next, we'll create two warehouses, one just for loading our data and one for doing some analysis work later.
>
> **[1:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=90)** Note that the demo build warehouse that we're using to load our data is a triple XL.
>
> **[1:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=96)** Whenever you use a triple XL warehouse, you should tremble a little bit because it's really powerful.
>
> **[1:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=102)** That's 64 times as powerful as our standard extra small warehouse and burns 64 times the credits per hour.
>
> **[1:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=109)** It's like a giant laser cannon.
>
> **[1:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=111)** Super powerful, but also a big responsibility.
>
> **[1:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=115)** Here we'll use it very briefly to load the Tasty Bytes data from an S3 bucket, and then we'll drop it and never use it again.
>
> **[2:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=123)** Okay, so then we create a very simple CSV file format.
>
> **[2:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=128)** Don't worry about this, it's not critical at the moment.
>
> **[2:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=131)** And finally, we get to the focus of this video creating our stage.
>
> **[2:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=135)** Let's run this and talk about what we did.
>
> **[2:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=138)** So there are two kinds of stages, external and internal.
>
> **[2:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=142)** Here we've got an external stage, and we can tell because you can see it's pulling from an S3 bucket.
>
> **[2:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=147)** The key thing to know about external stages is the data they're connected to is not managed by Snowflake.
>
> **[2:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=153)** This means Snowflake isn't responsible for controlling access to that data.
>
> **[2:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=157)** You don't get billed through Snowflake for the storage of that data, et cetera.
>
> **[2:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=160)** This means that when creating an external stage, we'll always add a reference to an external cloud data storage location, AWS S3 or storage in Google Cloud or Azure, plus credentials for accessing that bucket if necessary.
>
> **[2:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=175)** Here, credentials weren't necessary.
>
> **[2:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=177)** If you don't see a URL referencing external storage, then it's not an external stage.
>
> **[3:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=183)** Internal stages are different.
>
> **[3:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=185)** Snowflake does manage the cloud storage for internal stages, and that means Snowflake takes care of security.
>
> **[3:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=191)** Snowflake manages the associated cloud storage billing, et cetera.
>
> **[3:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=195)** So if you saw a stage creation command that didn't have a reference to an external cloud data source, you'd know it's internal.
>
> **[3:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=202)** It would look something like this.
>
> **[3:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=203)** Create or replace stage frostbyte Tasty Bytes public internal stage test.
>
> **[3:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=209)** No URL, no access credentials.
>
> **[3:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=213)** We're not really going to cover file formats in this course.
>
> **[3:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=215)** I'll just mention that they give Snowflake information about the kind of file you're about to ingest.
>
> **[3:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=220)** But I do want to note that you can use file formats with both internal and external stages, even though we're only seeing it next to the external stage here.
>
> **[3:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=231)** To recap, in this video, we explain what a Snowflake stage object is.
>
> **[3:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=236)** We created an external stage and uploaded files to it using the create stage command, and we explain the difference between an external and internal stage.
>
> **[4:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=245)** Next, we'll learn about the three different kinds of internal stages, and then we'll actually load files from a stage into an existing table.
>
> **[4:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-i?u=76281980&t=253)** (bright music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (19), [[Snowflake]] (9), cloud (5), next (5), database (1)
> **Env Vars:** url (2), csv (1), aws (1)
> **Cross-References:** later in (1), in the next (1)
> **Definitions:** is a  (1), means that (1)
> **Warnings:** note that (2)
> **CLI Commands:** aws (1)
> **Analogies:** it's like (1)
> **Best Practices:** best practice (1)

#### Stages and basic ingestion: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=0)** - Welcome to part 2 of Stages and Basic Ingestion.
>
> **[0:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=3)** It's funny how different a video this would be if we were about to talk about stages and basic indigestion.
>
> **[0:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=8)** Anyway, let's get back into it, and learn about the different kinds of internal stages.
>
> **[0:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=12)** (graphics whooshing) There are three flavors of internal stage.
>
> **[0:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=15)** User, table, and named stages.
>
> **[0:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=19)** Every user has a user stage that only that user can access, but from which you can copy data into multiple tables.
>
> **[0:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=25)** You can't drop the user stage.
>
> **[0:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=27)** Every table has a table stage that can only be used with that table, and again, you can't drop it.
>
> **[0:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=33)** And name stages can be used by multiple users and be associated with multiple tables.
>
> **[0:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=39)** Having said all that, my guess is you'll mostly use name stages because they're so flexible.
>
> **[0:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=44)** (graphics whooshing) We're not going to create an internal stage here, but a key thing to know is that once you've created your internal stage, you need to take another step to actually move data from your local computer to that stage by using a put command for example.
>
> **[0:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=58)** Okay, let's turn our attention back to our external stage and list all of the stages files by running ls, which is short for list, followed by @, and the name of the stage.
>
> **[1:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=69)** In this case, frostbyte_tasty_bytes.public.s3load.
>
> **[1:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=75)** Those are the files we want to ingest.
>
> **[1:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=77)** They're beautiful.
>
> **[1:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=78)** You don't have to memorize this, but when referencing name stages in our code, we use the @ character.
>
> **[1:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=83)** When referencing table stages, we use @ followed by the % character.
>
> **[1:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=89)** And when referencing user stages, we use @ followed by a ~.
>
> **[1:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=92)** I mentioned this just because seeing these different combinations of @ confused me for a while.
>
> **[1:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=97)** Okay, so let's keep going.
>
> **[1:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=98)** We've now made our external stage, but we haven't yet used the stage as a bridge to help us copy data from our S3 bucket.
>
> **[1:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=105)** To do that, we first need to make some empty tables to hold the raw data.
>
> **[1:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=110)** There's a country table, and a franchise table, and many others.
>
> **[1:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=113)** Location, menu, truck, orders, customers.
>
> **[1:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=116)** Then we'll create two views that join together a bunch of these tables and store the results in the harmonized schema.
>
> **[2:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=125)** And don't worry about what a view is, we'll talk about them in a future video.
>
> **[2:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=130)** And then we create a view for the highly cleaned, highly reliable analytics schema.
>
> **[2:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=136)** So let's run all this code and stop right before the copy into commands.
>
> **[2:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=141)** Awesome, now it's finally time to spin up our super powerful 3XL laser canon of a data warehouse, demo build warehouse, and actually copy the data from our external storage to our tables using our stage.
>
> **[2:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=153)** Assuming we've set up our table with the right number of fields and the right data types, this is very easy.
>
> **[2:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=158)** All we need to do is use the command copy into, followed by the name of the destination table and then from followed by at and the stage name.
>
> **[2:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=167)** We'll run this whole section at once, including the command to drop the demo build warehouse once we're done with it.
>
> **[2:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=179)** If this hadn't worked, we'd have seen some errors, but if we're willing to wait a while up to an hour or two and we wanted to double check, we could use one of Snowflake's built-in observability features.
>
> **[3:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=189)** We just query the copy history view within the account usage schema within the Snowflake database, like this.
>
> **[3:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=195)** Select file name error account from Snowflake dot account usage dot copy history.
>
> **[3:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=200)** We can pick a few fields we're interested in.
>
> **[3:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=203)** Here, I've picked file, name, error count, status, and last load time.
>
> **[3:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=206)** And check the 10 files that were loaded most recently.
>
> **[3:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=211)** In this case, all we're seeing is the Tasty Bytes sample data menu table that we loaded in a previous video because there's some latency, but if we came back later and ran this again, we'd see the order detail files we just loaded.
>
> **[3:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=223)** To confirm more quickly that our table's loaded properly, we can just go to left hand database dropdown and find a table, say country and query it.
>
> **[3:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=238)** Looks like at least that table loaded successfully.
>
> **[4:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=241)** (graphics whooshing) So there you have it.
>
> **[4:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=243)** We covered parts 1 and 2 of stages and basic ingestion, and as far as I could tell, there's no indigestion in sight.
>
> **[4:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=249)** Here's a quick recap of the seven things we covered.
>
> **[4:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=252)** One, we learned about what a Snowflake stage object is.
>
> **[4:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=255)** Two, we learned how to create an external stage and upload files to it using the create stage command.
>
> **[4:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=261)** Three, we learned how to explain the difference between an external stage and an internal stage.
>
> **[4:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=266)** Remember if there's a reference to a cloud storage bucket, it's an external stage.
>
> **[4:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=270)** Four, we learned about the three types of internal stages, user. table, and named.
>
> **[4:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=274)** Five, we learned how to view staged files using the list command.
>
> **[4:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=279)** Six, we learned you can load files from a stage to an existing table using the copy into command.
>
> **[4:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=284)** And seven, we learned that you can query Snowflake data loading history with the copy history view in the account usage schema.
>
> **[4:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=292)** You've successfully conquered this stage.
>
> **[4:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stages-and-basic-ingestion-part-ii?u=76281980&t=294)** Soon we'll learn about databases, schemas, tables, and views.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), [[Snowflake]] (5), database (2), [[Analytics]] (1), cloud (1)
> **CLI Commands:** ls (1), make (1), find (1)
> **Cross-References:** we covered (2), previous video (1)
> **UI Navigation:** go to (1), dropdown (1)
> **Code Identifiers:** frostbyte_tasty_bytes (1)
> **Definitions:** short for (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)


### 4. Databases and Schemas

[↑ Back to Table of Contents](#table-of-contents)

#### Databases and schemas: Part I
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=0)** - In this video, we're going to learn about databases and schemas.
>
> **[0:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=4)** We already did a little bit with databases and schemas in the video where we discussed stages.
>
> **[0:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=8)** You might remember that we created one database and four schemas.
>
> **[0:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=11)** But we mostly skipped over the details.
>
> **[0:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=13)** Here, we'll go deeper, but still with the focus on practice over theory.
>
> **[0:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=17)** (screen whooshing) Before we get into practicing making new databases and schemas, let's take a look at the ones we've already made.
>
> **[0:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=23)** If we scroll over to the side, we'll see four databases.
>
> **[0:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=27)** One of these, the Snowflake Database is automatically placed in every Snowflake account.
>
> **[0:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=33)** And if you click on it, you'll see a lot of different schemas with names like Account Usage and so on.
>
> **[0:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=37)** These are there for observability.
>
> **[0:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=39)** You can query this Snowflake database and the associated schemas to learn all sorts of things about how your account is getting used.
>
> **[0:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=46)** The Snowflake Sample Data database came with this trial account.
>
> **[0:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=50)** And if you click on it, you'll see a bunch of schemas associated with this database.
>
> **[0:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=54)** The other two databases are ones we made in previous videos.
>
> **[0:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=58)** If we click on the Tasty_Bytes Sample Data database, which we made right at the beginning of this course, you could see a few schemas including the RAW_POS schema that we created.
>
> **[1:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=67)** If you click on that, you'll see tables listed.
>
> **[1:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=69)** And if you click on that, you'll see the first table we queried in the course, the Menu table.
>
> **[1:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=74)** And finally, if we click on Frostbyte_Tasty_Bytes, the database we generated in the last video, you can see some schemas that might sound familiar.
>
> **[1:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=83)** RAW_POS, RAW_Customer, Harmonized and Analytics.
>
> **[1:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=87)** We created all four of these and then created tables and views inside each of them.
>
> **[1:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=92)** And finally loaded our data with a COPY INTO command to actually get these populated.
>
> **[1:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=96)** If you click RAW_POS and then Tables, you'll see Order Detail, Order Header, et cetera.
>
> **[1:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=103)** After looking at these four databases, you might start to notice that each database can have one or more schemas in it.
>
> **[1:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=112)** And each schema can have one or more tables or views or other objects in it.
>
> **[1:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=119)** So, one way to think about databases and schemas is almost like a file directory where the database is the parent folder, the schema is a folder within that, and then tables and views and other objects are in the schema.
>
> **[2:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=132)** This isn't a complete perspective of databases and schemas, but it is a useful one.
>
> **[2:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=137)** We can see this file path perspective of databases and schemas and practice when we find a table through the databases menu.
>
> **[2:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=148)** We click on the three dots and then we select Place Name in Editor.
>
> **[2:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=153)** You'll see that the database comes first, followed by a dot, then the schema followed by a dot, and then the table.
>
> **[2:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=163)** Unless you've selected a default database or schema to use, either through setting context up above, or through a used database or used schema command, you'll always need to specify all three parts of this path to query a particular table.
>
> **[2:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=176)** Let's confirm this by running the Query Select * From Frostbyte_Tasty_Bytes, the database, .RAW_POS, schema, .Menu, table.
>
> **[3:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=185)** We see that that works.
>
> **[3:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=187)** But then, if we delete the database and run that, we get the error, "Cannot perform SELECT.
>
> **[3:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=192)** This session does not have a current database.
>
> **[3:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=194)** Call USE DATABASE or use a qualified name."
>
> **[3:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=198)** Without a database specified, the system doesn't know which schema you're talking about.
>
> **[3:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=202)** Two schemas in different databases are allowed to have the same name.
>
> **[3:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=206)** And it's the database portion of their path that makes them uniquely identifiable.
>
> **[3:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=211)** One more thing to note.
>
> **[3:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=212)** When you create a database, it automatically has two schemas in it.
>
> **[3:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=216)** The public schema, which is the default schema for that database, and the information schema, which contains views and table functions that can be used for querying metadata about the objects in the database.
>
> **[3:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=227)** So, if you're looking for some metadata about something in the database, like a list of all the tables, you can query the relevant table from the information schema.
>
> **[3:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=236)** For example, let's click on the information schema in the Frostbyte_Tasty_Bytes database, and then let's go to tables, and click Place Name in Editor, and Select * From that table of tables.
>
> **[4:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=254)** We see Franchise, Menu, Country.
>
> **[4:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=258)** All the tables we created for this database, plus a bunch of ones that were automatically created as part of the information schema.
>
> **[4:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=266)** (screen whooshing) Okay, that's it for part one of Databases and Schemas.
>
> **[4:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=270)** In this video, we learned how to use the UI to see our existing databases and schemas.
>
> **[4:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=274)** We also discussed what databases and schemas are, and we learned how to query the information schema to find important metadata, like a list of all the tables in the associated database.
>
> **[4:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=284)** Coming up, we'll create a database, drop and undrop a database, and more.
>
> **[4:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-i?u=76281980&t=288)** (screen whooshing) (bright upbeat music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (27), [[Databases]] (14), [[Snowflake]] (4), data (3), [[Metadata]] (3)
> **UI Navigation:** click on (8), go to (1)
> **Env Vars:** raw_pos (4), copy (1), into (1), select (1), database (1)
> **Cross-References:** we discussed (1), in the last (1), coming up (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (2)
> **SQL:** select (1)
> **Analogies:** for example (1)

#### Databases and schemas: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=0)** - In the last video, we started learning about databases and schemas.
>
> **[0:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=4)** This would probably be a much more exciting and mysterious video if we were about to cover databases and schemes, but I think you'll find that schemas are exciting and mysterious in their own way.
>
> **[0:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=15)** Let's get back to it, and start putting our knowledge into practice.
>
> **[0:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=18)** (graphics swooshing) Okay, now it's time to exercise our database and schema muscles.
>
> **[0:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=23)** First, we'll create a database using the UI.
>
> **[0:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=27)** Go to the data tab in the left hand menu, click databases, and then click plus database.
>
> **[0:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=36)** We'll name the database test database, and click create.
>
> **[0:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=42)** Now we can see the new database.
>
> **[0:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=45)** And if we click on it and then click on schemas, we'll see it only has the two schemas that you automatically get when you create any database, public and information schema.
>
> **[0:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=56)** Now, let's drop this database by clicking the three dots at the top and selecting drop.
>
> **[1:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=65)** If we refresh our screen, we'll see it's gone.
>
> **[1:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=70)** We can do all of those things through commands in our SQL worksheets, so let's do that quickly.
>
> **[1:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=74)** Go back to worksheets and select databases and schemas.
>
> **[1:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=81)** Then type create database, test database, and run that command.
>
> **[1:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=87)** Once we refresh, we'll see that database listed in the UI.
>
> **[1:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=90)** And if we click on that, we'll see it also has the two default schemas, public and information schema.
>
> **[1:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=98)** We can also use the show database's command to see our new database.
>
> **[1:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=102)** You'll see that test database is there.
>
> **[1:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=105)** We can see that it's the current database.
>
> **[1:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=107)** And if we scroll over, we see that it's a standard database, whereas Snowflake sample data is imported.
>
> **[1:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=115)** And Snowflake, the one with all the metadata, is of the kind application.
>
> **[2:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=123)** We can then drop our database by running the drop database command, followed by the database name.
>
> **[2:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=127)** In this case, test database.
>
> **[2:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=131)** If we refresh, we'll see it's gone.
>
> **[2:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=136)** This next part is super cool, we can also undrop our database.
>
> **[2:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=142)** Just type undrop database, test database, and we'll get it back.
>
> **[2:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=147)** If we use the show databases command, we'll see our test database back from the dead.
>
> **[2:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=154)** Though notice, it's no longer the current database.
>
> **[2:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=158)** If we want to make it our current database, we can run the use database command.
>
> **[2:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=163)** Just type use database, followed by the database name.
>
> **[2:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=168)** You'll notice that the little context dropdown at the top switched to the database test database, and the default schema public.
>
> **[2:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=177)** This next point is an important one.
>
> **[2:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=179)** All the commands we just ran for databases, we can also run for schemas.
>
> **[3:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=185)** And actually, with the exception of use for tables as well.
>
> **[3:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=189)** Create, drop, undrop, show, use.
>
> **[3:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=193)** For these commands, plus one called alter, which we haven't used here, Snowflake has made life easy by keeping the same syntax whether we're working with databases, schemas, or tables.
>
> **[3:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=203)** We'll discuss tables more in the next video.
>
> **[3:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=206)** Okay, so let's move on to schemas for a moment.
>
> **[3:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=208)** Though we'll move quickly here because as I just mentioned, the mechanics of working with schemas are often similar to the mechanics of working with databases.
>
> **[3:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=216)** If we go to the left hand menu and click data, databases, test database, we can then take a look at the schemas.
>
> **[3:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=229)** If you click plus schema in the top right corner, you can make a schema.
>
> **[3:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=233)** Though we'll skip that and create our schema directly in a SQL worksheet.
>
> **[3:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=238)** Go to projects, worksheets, databases and schemas, and create a schema with the command create schema, test schema.
>
> **[4:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=253)** Because our context was still set to the database, test database, we created this test schema inside that database.
>
> **[4:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=261)** If we use the show schemas command, we can see all the schemas inside this database.
>
> **[4:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=268)** And as expected, we see the two automatically generated schemas, public and information schema, plus our new schema.
>
> **[4:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=276)** You can get similar information by running the command describe database, followed by the name of the database.
>
> **[4:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=284)** Though you'll notice that it's less descriptive, only three columns here.
>
> **[4:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=289)** Now, let's drop our schema using drop schema, followed by the schema name, drop schema, test schema.
>
> **[4:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=297)** If we run show schemas, we'll see that it's gone.
>
> **[5:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=301)** But then we can run undrop schema plus our schema name, test schema, and get it back again.
>
> **[5:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=307)** Let's run show schemas to confirm.
>
> **[5:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=313)** (graphics swooshing) Awesome, we've created a database, showed our database, dropped and undropped our database, and selected a database with use database.
>
> **[5:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=322)** We then did the same things for schemas.
>
> **[5:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=325)** We learned that a database is a collection of one or more schemas, and a schema is a collection of objects such as tables and views.
>
> **[5:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=333)** We also learned about the two automatically generated schemas, public and information schema.
>
> **[5:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/databases-and-schemas-part-ii?u=76281980&t=339)** We're making great progress, now let's move on to tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (44), [[Databases]] (10), data (3), [[Snowflake]] (3), next (3)
> **UI Navigation:** go to (3), click on (3), dropdown (1)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** in the last (1), go back to (1), in the next (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** sql (2)
> **Analogies:** such as (1)
> **Speakers:** - in (1)


### 5. Tables

[↑ Back to Table of Contents](#table-of-contents)

#### Tables: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=0)** - If you query a table in Snowflake, assuming it's not empty, you'd see a result similar to what you'd see in lots of other data contexts.
>
> **[0:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=6)** Data organized into columns and rows.
>
> **[0:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=9)** This is a solid way to think about Snowflake tables, data organized into columns and rows.
>
> **[0:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=14)** Under the hood, Snowflake doesn't just store its data as a large block of columns and rows, it actually breaks up the data into micro partitions, but we're not going to cover micro partitioning in detail in this course.
>
> **[0:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=26)** (air whooshing) So let's go ahead and make a table.
>
> **[0:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=29)** It probably won't surprise you at this point to learn that you can use the UI to make a table or run a command.
>
> **[0:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=35)** Let's start with the UI approach and go to Data, Databases, TEST-DATABASE, TEST_SCHEMA, and then go up to the right-hand side and click Create, Table, Standard.
>
> **[0:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=51)** It's worth pointing out that this experience is somewhat different from the one we've had up to this point in the course when we created other objects like databases and schemas, because with those, we'd specify the name and click Create, and the object would appear.
>
> **[1:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=65)** Here we're instead taken to something like a Snowflake worksheet, a template of sorts, and we have to do additional work before we can make the table.
>
> **[1:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=73)** The reason for this is you need more than just a name to make a table.
>
> **[1:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=77)** You also need names and types for each column.
>
> **[1:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=80)** If you're more familiar with the Pandas Python world, the fact you have to specify all of this upfront might come as a bit of a surprise, but it's standard procedure in the database world.
>
> **[1:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=91)** So let's talk about data types, since you can't make a table without knowing something about them.
>
> **[1:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=95)** There are six categories of data types in Snowflake, numeric, string and binary, logical, date and time, semi-structured, and geospatial.
>
> **[1:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=106)** Within each category, there are a few different data types, but not as many as you might suspect at first glance.
>
> **[1:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=113)** In a bunch of cases, data types that look different resolve to the same thing under the hood.
>
> **[1:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=118)** For example, within the numeric category, you'll see NUMBER, DECIMAL, NUMERIC, INT, INTEGER, BIGINT, SMALLINT, TINYINT, BYTEINT, FLOAT, FLOAT4, FLOAT8, DOUBLE, DOUBLE PRECISION, REAL.
>
> **[2:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=129)** But really NUMBER, DECIMAL, and NUMERIC all mean exactly the same thing.
>
> **[2:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=133)** DOUBLE, DOUBLE PRECISION, and REAL are the same thing as FLOAT, et cetera.
>
> **[2:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=138)** Within the STRING and BINARY category, you'll see a similar phenomenon.
>
> **[2:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=141)** You might sometimes see VARCHAR, sometimes STRING, and sometimes TEXT, but they all mean exactly the same thing.
>
> **[2:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=149)** So why the duplication?
>
> **[2:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=150)** Well, for one thing, if you're familiar with code from another SQL dialect, it makes it easy for you to port that code over to Snowflake or make use of your existing knowledge.
>
> **[2:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=161)** I don't recommend memorizing all the data types.
>
> **[2:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=163)** There are too many, and you can always look them up.
>
> **[2:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=165)** So let's go ahead and pick some for our example table here.
>
> **[2:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=168)** Let's go with one from each category.
>
> **[2:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=170)** So NUMBER, VARCHAR, BOOLEAN, DATE, VARIANT, and GEOGRAPHY.
>
> **[3:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=184)** Note that if we look at the table definition, Snowflake automatically specified the default precision of 38.
>
> **[3:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=191)** This is the total number of digits allowed, and the default scale of zero.
>
> **[3:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=195)** This is the number of digits allowed to the right of the decimal point.
>
> **[3:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=199)** And next to the VARCHAR, it specifies the default max number of bytes, 16,777,216, which is 16 megabytes.
>
> **[3:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=210)** But don't worry, it's only actually using as much space as is required for that VARCHAR.
>
> **[3:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=215)** So specifying a smaller number of bytes in your table definition usually won't improve performance.
>
> **[3:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=220)** One exception is it can help improve the performance of some business intelligence BI tools, which allocate memory to the defined max when they load the data.
>
> **[3:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=231)** Let's open up our worksheet called Tables and query our table.
>
> **[3:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=235)** Let's do SELECT * FROM and then insert the table name from the right along with the database and schema portion of the path.
>
> **[4:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=243)** SELECT * FROM TEST DATABASE.TEST_SCHEMA.TEST_TABLE.
>
> **[4:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=249)** When we run that, we see the correct column names, but no data, which isn't a surprise.
>
> **[4:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=255)** When you first create a table, it's an empty shell, and you need to add or copy data into it to make it useful.
>
> **[4:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=261)** (air whooshing) Okay, in this video, we created a table using the CREATE TABLE command in the UI, and we listed the six categories of Snowflake data types, numeric, string and binary, logical, date and time, semi-structured, geospatial.
>
> **[4:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=277)** Next up, we'll insert some data into our table.
>
> **[4:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=280)** Then we'll drop that table. We're cruel like that.
>
> **[4:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=282)** Then finally, we'll undrop it.
>
> **[4:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=284)** We're merciful like that.
>
> **[4:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=285)** And more. Let's do it.
>
> **[4:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-i?u=76281980&t=287)** (logo whooshing)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (16), [[Snowflake]] (8), database (4), [[Databases]] (2), next (2)
> **Env Vars:** double (4), varchar (4), number (3), test (2), database (2)
> **SQL:** varchar (4), select (2), integer (1), boolean (1), create table (1)
> **CLI Commands:** make (7), python (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### Tables: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=0)** - Earlier we tried querying the table we created, but we were sort of foiled because the table was empty.
>
> **[0:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=6)** But now we're going to insert some data.
>
> **[0:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=8)** So by the end of this video we'll be able to cackle with victory and say, oh, how the tables have turned.
>
> **[0:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=13)** Anyway, let's insert some data into our table so we can drop it, undrop it, and more.
>
> **[0:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=18)** (transition whooshing) So let's insert one row as a test, insert into test database, test schema, test table values, and then put these values.
>
> **[0:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=28)** For now, we'll put null for the variant and geography types since those are a little more involved.
>
> **[0:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=34)** If we query the table now, select star from, test database, test schema dot test table.
>
> **[0:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=39)** We see the data we inserted.
>
> **[0:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=44)** Let's drop and undrop our table as we did in the previous video with databases and schemas.
>
> **[0:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=49)** It's simple, just drop table, followed by the fully qualified table name, which is the table name with the database and schema specified.
>
> **[0:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=56)** So drop table, test database, test schema, test table.
>
> **[1:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=61)** Now let's run a show tables command, but within and then the database and schema.
>
> **[1:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=66)** So we're not looking at all tables across all of our databases.
>
> **[1:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=70)** Show tables in test database dot test schema, we see no tables.
>
> **[1:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=75)** Then if we undrop the table, we'll see its back.
>
> **[1:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=78)** Undrop table test database test schema dot test table.
>
> **[1:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=81)** Show tables in test database test schema, and there it is.
>
> **[1:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=89)** Imagine if we had this power in real life, an angry person who yells drop dead at someone and then sees them really drop dead.
>
> **[1:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=95)** Could be like, wait, I didn't mean it. Undrop, undrop.
>
> **[1:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=98)** If we just run a plane show tables, we'll see all our tables across all databases and schemas.
>
> **[1:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=104)** There's a bunch of great metadata here, including the number of rows and the bytes.
>
> **[1:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=109)** We could also get information about tables in our account by querying the table storage metrics view, in the account usage schema inside the Snowflake database.
>
> **[1:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=119)** Remember, this one is created automatically for observability reasons.
>
> **[2:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=123)** So select star from Snowflake dot account usage dot table storage metrics.
>
> **[2:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=128)** But as you can see, this appears to just be giving us information about the tables that we manually generated.
>
> **[2:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=133)** So it differs from show tables a bit.
>
> **[2:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=138)** If we go back to the show table's results, we can see that the order detail table we created in our video on stages and basic suggestion is no joke.
>
> **[2:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=147)** It's got more than 670 million rows.
>
> **[2:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=153)** So to finish up this video on tables, I want to take another look at the create table command we used to make that table.
>
> **[2:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=160)** Back then we skimmed over this, but now we're in a position to understand it.
>
> **[2:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=165)** Create table, Frostbite Tasty Bites, dot raw pos dot order detail.
>
> **[2:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=170)** If you look carefully at the original code we used to make this table, you'll notice that it said create or replace, but I've dropped the or replace here so we don't accidentally run this and overwrite our amazing table.
>
> **[3:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=181)** So you can see that we created the order detail table to have nine rows, seven of which were of the data type number and two of which were VARCHAR.
>
> **[3:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=189)** The two VARCHAR we kept with the default bite size, but with the number in a few cases, we specified the precision and the scale.
>
> **[3:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=197)** So quantity we gave a precision of five, meaning it could only have five digits and a scale of zero, so it won't have any numbers after the decimal place.
>
> **[3:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=205)** Unit price, we gave a scale of 38, but we permitted four of those digits to come after the decimal place.
>
> **[3:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=213)** (transition whooshing) 670 million rows, nine columns. In my world, that's a lot.
>
> **[3:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=219)** As I said, order details is no joke.
>
> **[3:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=222)** So there you have it.
>
> **[3:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=224)** In this video, we created a table using the UI and the create table command.
>
> **[3:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=228)** We learned about the six categories of Snowflake data types.
>
> **[3:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=231)** We dropped an undropped table.
>
> **[3:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=233)** We learned how to check out some metadata for our tables with the show tables command and the Snowflake account usage table storage metrics view, and we revisited the order detail table we created in a previous video to see what it was we'd done now that we have more context, and just to check in on our course progress quickly, we've done so much.
>
> **[4:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=251)** We've learned about virtual warehouses and how to scale them.
>
> **[4:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=254)** We've learned about stages, databases, and schemas, and now we've conquered tables.
>
> **[4:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=259)** We're flying.
>
> **[4:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=260)** In no time, we'll hit the end of the course and maybe just maybe we'll feel a slight sense of regret that we didn't take more time to stop and enjoy the journey.
>
> **[4:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/tables-part-ii?u=76281980&t=270)** Next, onto views.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (9), data (5), [[Databases]] (4), [[Snowflake]] (4), [[Metadata]] (2)
> **Cross-References:** previous video (2), go back to (1)
> **CLI Commands:** make (2)
> **SQL:** varchar (2)
> **Env Vars:** varchar (2)
> **Analogies:** imagine (1)
> **Speakers:** - earlier (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Views

[↑ Back to Table of Contents](#table-of-contents)

#### Views: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=0)** - Now we get to talk about views, and no, I don't mean political views or views of a cityscape.
>
> **[0:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=6)** I'm talking about the very best kind of view, views in the land of data.
>
> **[0:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=10)** Anyway, learning about Snowflake views is important, because one, they're useful, and two, they pop up all the time.
>
> **[0:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=16)** So even if you're like, "Look, I'm a simple human with simple tastes, I don't need views in my life, basic tables suffice," you're still going to need to learn about them, because you'll run into them everywhere.
>
> **[0:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=26)** In fact, if you've been looking closely, you might have already noticed them a few times in this course.
>
> **[0:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=31)** There are two kinds of views: standard, non-materialized views, and materialized views.
>
> **[0:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=37)** Going forward, when we're talking about a materialized view, we'll always specify that, so if we just say view, that means we're talking about a non-materialized view, and don't worry, we'll cover both.
>
> **[0:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=48)** Okay, so let's first look at an example of a standard view.
>
> **[0:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=51)** Let's open our SQL worksheet called Views, and take a look at the three views we created in our Stages and Basic Ingestion video.
>
> **[1:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=60)** At the time, we just ran this part of the code without worrying about what it was doing, but now we're coming back and processing what we did.
>
> **[1:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=68)** The only difference between the code we're seeing here and the code we ran earlier is I switched CREATE OR REPLACE VIEW to just CREATE VIEW.
>
> **[1:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=76)** Since we've already made this view, and don't want to run this code and accidentally redo work we've already done, though it wouldn't be a big deal if we did in this particular case.
>
> **[1:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=85)** So what is this code doing?
>
> **[1:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=86)** It's creating an object called a view, and in the first example it's naming this view orders_v, and putting it in the harmonized schema inside the frostbyte_tasty_bytes database.
>
> **[1:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=98)** Then you could see that it's populating the view with a select statement.
>
> **[1:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=101)** So it's going CREATE VIEW, view name, AS SELECT, and then it has the rest of a query including a bunch of JOINs.
>
> **[1:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=108)** This thing we've created, this view acts like a table in some ways.
>
> **[1:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=113)** For example, you can query it, SELECT COUNT(*) FROM frostbyte_tasty_bytes.harmonize.orders_v, but a view isn't a table.
>
> **[2:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=120)** It's basically just a saved query.
>
> **[2:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=123)** So when we SELECT COUNT(*) from the view, it has to actually run the query represented by the view before it can give us the result.
>
> **[2:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=129)** And this brings us to the key thing to know about materialized views.
>
> **[2:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=134)** If when we created this view instead of running CREATE VIEW, we had run CREATE MATERIALIZED VIEW, it would've saved the results almost like a new table, except in this case, and this is getting in the weeds, we couldn't have used a materialized view because you can't create a materialized view with JOINs in it.
>
> **[2:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=153)** Anyway, querying that materialized view going forward would be much faster than querying the same thing as a plain view.
>
> **[2:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=160)** But this materialization comes with costs, because materialized views automatically update every time the underlying data updates.
>
> **[2:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=168)** So whether you want a view or a materialized view depends on a bunch of factors.
>
> **[2:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=173)** That was a lot, so just to recap, a standard view saves the query itself, making it easy to run again and again.
>
> **[3:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=180)** A materialized view saves the results of running a query, and automatically updates the results when the table or tables that view is based on update.
>
> **[3:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=190)** Before we dig further into why you might want to use a view or a materialized view instead of a normal table, let's talk about what commands you can run with views.
>
> **[3:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=198)** In this video, we won't cover the UI versions of these commands, because creating a view through the UI is almost exactly the same as creating a table through the UI, which we did in the last video.
>
> **[3:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=210)** Okay, so here are the commands you can run with views.
>
> **[3:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=212)** You can, one, create a view, as we've discussed.
>
> **[3:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=216)** Two, you can drop a view, but be careful.
>
> **[3:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=218)** Unlike with databases, schemes, and tables, you can't undrop a view.
>
> **[3:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=221)** You'd need to recreate it.
>
> **[3:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=223)** Three, you can show views, four, you can describe views, and five, you can alter a view, but we haven't covered ALTER commands much in this course outside the section on virtual warehouses, and we won't get into that here.
>
> **[3:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=235)** All of these commands work with both regular views and materialized views.
>
> **[4:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=241)** Let's create a new view and show the views, and then drop our view and show the views again.
>
> **[4:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=247)** Okay, so CREATE VIEW frostbyte_tasty_bytes.harmonized.brand_names AS SELECT truck_brand_name FROM frostbyte_tasty_bytes.raw_pos.menu.
>
> **[4:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=255)** We'll call this brand_names, and we'll pull from the menu table.
>
> **[4:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=260)** Then we run SHOW VIEWS, and we can see BRAND_NAMES listed in the HARMONIZED schema.
>
> **[4:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=267)** The SHOW command, as with SHOW DATABASES, SHOW SCHEMAS, and SHOW TABLES, will list all of the relevant objects across the databases we have access to, in this case, views, and give us some metadata on those.
>
> **[4:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=280)** Then if we run the DROP VIEW command to drop our new view, we should see that it successfully dropped.
>
> **[4:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=285)** DROP VIEW frostbyte_tasty_bytes.harmonized.brand_names.
>
> **[4:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=289)** We can confirm by running the SHOW VIEWS command again, and sure enough, the harmonized schema now only has two views.
>
> **[4:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=295)** brand_names is gone.
>
> **[4:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=297)** The last command we wanted to cover is DESCRIBE VIEW, which gives you information about whatever view you specify.
>
> **[5:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=303)** So if you want to know more about our orders_v table, we can run DESCRIBE VIEW frostbyte_tasty_bytes.harmonized.orders_v, and we could see each column name, column type, whether they're primary keys, et cetera.
>
> **[5:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=317)** In this video, we created a standard view using the CREATE VIEW command.
>
> **[5:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=322)** We dropped a view using the DROP VIEW command.
>
> **[5:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=324)** We listed all views we have access to with the SHOW VIEWS command, and we saw metadata about a view with the DESCRIBE VIEWS command.
>
> **[5:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-i?u=76281980&t=332)** In the next video, we'll learn about materialized views and how they differ from standard views.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (3), data (2), [[Metadata]] (2), [[Snowflake]] (1), [[SQL]] (1)
> **Env Vars:** view (12), create (7), show (7), select (4), views (4)
> **Code Identifiers:** frostbyte_tasty_bytes (6), brand_names (4), truck_brand_name (1), raw_pos (1)
> **SQL:** select (4)
> **Cross-References:** in the last (1), in the next (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Speakers:** - now (1)

#### Views: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=1)** - Earlier, we covered creating a standard view, dropping a view, showing views, and describing views.
>
> **[0:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=7)** Here we're going to learn about materialized views, and the good news is that all of those same commands we just learned, also work with materialized views.
>
> **[0:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=15)** I don't want to belabor that point, but let's just run through it really quickly.
>
> **[0:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=18)** (screen whooshes) If we create a materialized view, it's the same syntax as creating a normal view, but with the word MATERIALIZED added after CREATE.
>
> **[0:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=28)** Here, let's create a materialized view called brand_names_materialized.
>
> **[0:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=33)** CREATE MATERIALIZED VIEW frostbyte_tasty_bytes, harmonized brand_names_materialized AS SELECT DISTINCT truck_brand_name FROM frostbyte_tasty_bytes.raw_pos menu.
>
> **[0:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=43)** Then we can check to see that it worked, by running a query on that materialized view.
>
> **[0:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=48)** SELECT * FROM frostbyte_tasty_bytes.harmonized .brand_names_materialized.
>
> **[0:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=53)** And we can run SHOW VIEWS to make sure it's listed.
>
> **[0:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=58)** Note that it's got a True under the column, is_materialized.
>
> **[1:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=62)** If you only want to see materialized views, you can run the command SHOW MATERIALIZED VIEWS.
>
> **[1:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=68)** When we do that, we just get our one result.
>
> **[1:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=71)** And note that it's got a really useful column, refreshed_on, which shows you when the data was last updated.
>
> **[1:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=78)** And if we run DESCRIBE VIEW for this materialized view, we see the same kind of result we saw when we ran DESCRIBE on the basic view.
>
> **[1:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=85)** DESCRIBE MATERIALIZED VIEW does the same thing as DESCRIBE VIEW.
>
> **[1:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=90)** Now, let's drop our materialized view by running, DROP MATERIALIZED VIEW frostbyte_tasty_bytes.harmonized.brand_names_materialized.
>
> **[1:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=99)** Note that in this case DROP VIEW would not have worked, we needed to specify MATERIALIZED.
>
> **[1:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=105)** (screen whooshes) Okay, so we've talked a bunch about what you can do with views and materialized views, create, drop, show and describe.
>
> **[1:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=112)** But we haven't really covered why you'd want to use either of them in the first place.
>
> **[1:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=116)** We're not going to get into this in a deep way here, you could probably have a whole course on the intricacies of materialized views alone.
>
> **[2:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=123)** But here are a few key reasons to use one or the other.
>
> **[2:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=127)** One reason, views can let you write cleaner code.
>
> **[2:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=130)** If there's a query you find yourself running a lot, you can instead save it as a view, and this can make your code more readable and reduce the risk of introducing errors by copying queries and passing them around.
>
> **[2:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=141)** I've seen this problem in past data jobs, where we ended up writing the same queries again and again.
>
> **[2:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=146)** And sometimes we'd rewrite them incorrectly or a copy pasted query would get messed up.
>
> **[2:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=150)** A second reason, we haven't gotten into role-based access control in this course, we'll touch on it a bit later, but by giving someone access to just a view, you can give them access to a subset of a table instead of giving them access to the full table.
>
> **[2:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=163)** A third reason, a materialized view stays up to date automatically, so it can act like a table that's automatically refreshing as needed.
>
> **[2:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=172)** So a table with really great built-in orchestration, albeit not very configurable, built-in orchestration.
>
> **[2:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=177)** There are other reasons to use views versus materialized views versus tables, but that's all we'll cover here.
>
> **[3:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=183)** Two more quick things I wanted to note before we pull this video to a close.
>
> **[3:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=186)** First, with a standard view, you can query multiple tables, but as I mentioned before, materialized views do not let you use joins.
>
> **[3:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=193)** They restrict you to having the view be of one table.
>
> **[3:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=196)** Second, if you've had prior exposure to Snowflake, you might have heard about a really cool object called a dynamic table, which is like a more flexible version of a materialized view.
>
> **[3:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=206)** Among other differences, instead of updating automatically whenever the underlying data changes, dynamic tables can update on a refresh cadence of your choosing.
>
> **[3:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=216)** We won't cover dynamic tables in this video, but they are pretty awesome, and you can learn more about them in subsequent coursework.
>
> **[3:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=222)** I mentioned them here, just so you'd know that they often come up in the same conversation as tables versus views versus materialized views.
>
> **[3:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=228)** I don't want somebody to be like, "But what about dynamic tables?"
>
> **[3:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=230)** And for you to be like, "Ah, no one ever mentioned those."
>
> **[3:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=233)** So there you have it, we've learned how views are basically saved queries, and materialized views are the saved results of queries on a single table, results that automatically refresh.
>
> **[4:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=243)** We learned how to create, describe, show, and drop, both kinds of views, and we learned a little bit about why they're useful.
>
> **[4:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=250)** Now, onto a topic that's a personal favorite of mine, semi-structured data, which I love in part, because it's fun to see a JSON and say, "You think you're tough with your deeply nested hierarchical data.
>
> **[4:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/views-part-ii?u=76281980&t=259)** Bring it on JSON."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[Orchestration]] (2), [[JSON]] (2), [[Microsoft Word|Word]] (1), [[Snowflake]] (1)
> **Env Vars:** materialized (6), view (6), describe (4), create (2), select (2)
> **Code Identifiers:** brand_names_materialized (4), frostbyte_tasty_bytes (4), truck_brand_name (1), raw_pos (1), is_materialized (1)
> **CLI Commands:** make (2), find (1)
> **Warnings:** note that (3)
> **SQL:** select (2)
> **Cross-References:** we covered (1)
> **Speakers:** - earlier (1)


### 7. Semistructured Data

[↑ Back to Table of Contents](#table-of-contents)

#### Semistructured data types
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=0)** - I love working with semi-structured data.
>
> **[0:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=3)** I like the fact that it can look intimidating at first.
>
> **[0:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=5)** It's not just in a normal row column format, but it turns out, it really does have a structure.
>
> **[0:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=10)** So you just have to figure out what that structure is.
>
> **[0:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=12)** And once you've done that, you can systematically extract whatever info you want from it.
>
> **[0:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=16)** We're going to cover semi-structured data over the course of two videos.
>
> **[0:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=19)** In this initial video, we're going to practice working with semi-structured data.
>
> **[0:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=23)** First, we'll take a look at an example of semi-structured data, and then we'll talk about the definition of semi-structured data more generally.
>
> **[0:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=30)** Then we'll cover the snowflake data types that can hold semi-structured data and get you up to speed on one primary method of ingesting semi-structured data in Snowflake.
>
> **[0:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=40)** In the following video, we'll practice manipulating each of those data types and practice a few ways to work with semi-structured data after you've got it in Snowflake.
>
> **[0:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=48)** So you might not remember this, but we've actually ingested semi-structured data before in this course.
>
> **[0:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=53)** There's a column of semi-structured values in our tasty bytes menu.
>
> **[0:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=57)** Let's take a look at that.
>
> **[0:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=59)** Select menu item name, menu item health metrics from frostbyte_tasty_bytes.raw_pos.menu.
>
> **[1:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=66)** When we run this query, we see that for each menu item, we get a list of ingredients, and then a few health metrics, flags, is it dairy-free, et cetera.
>
> **[1:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=74)** Each entry is an a JSON format, which is one of five semi-structured data formats that Snowflake accepts.
>
> **[1:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=80)** The others are Avro, ORC, Parquet, and XML.
>
> **[1:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=84)** We'll focus on JSON examples in this video.
>
> **[1:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=88)** So what is semi-structured data?
>
> **[1:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=90)** If you think of structured data as tabular data, so data that usually has a schema and exists in a flat table, and you think of unstructured data as raw images or raw text, then semi-structured data is somewhere in the middle.
>
> **[1:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=102)** It has some sort of structure, some sort of meaningful organization to it, as you can see here.
>
> **[1:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=107)** But that structure can be hierarchical in a way that differentiates it from the straightforward tabular data, you often see in relational databases.
>
> **[1:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=117)** Informally, you can think of it as data that can be flexibly represented, like a dictionary, so organized into key value pair mappings.
>
> **[2:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=124)** And the keys and values can take on very flexible forms.
>
> **[2:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=127)** They could be erased, et cetera.
>
> **[2:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=129)** You'll run into it a lot if you work with sensor data, or web data.
>
> **[2:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=132)** In any case, Snowflake lets you take in data, like these JSON examples or Avro or C, Parquet and XML, and then store them as one of three Snowflake data types: variant, object, and array.
>
> **[2:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=145)** We're going to discuss the variant type, first.
>
> **[2:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=148)** If we run describe table, frostbyte_tasty_bytes.raw_pos.menu, we can see that the menu item, health metrics, OBJ, is of the variant type.
>
> **[2:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=159)** And sure enough, if we look back at the code we used to create the menu data, we could see that that was our doing.
>
> **[2:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=164)** We specified it to be variant.
>
> **[2:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=166)** Back then, when we created our empty menu table, we specified that menu item health metrics, OBJ, should be of the variant data type, create table, frostbyte_tasty_bytes.raw_pos.menu.
>
> **[2:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=177)** So what is a variant type?
>
> **[2:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=178)** The key thing to know is that it is an extremely flexible data type.
>
> **[3:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=182)** It can hold values of any other type.
>
> **[3:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=185)** So it's especially useful when loading data with an unusual structure, because you can just create a table with a variant column and put that data there.
>
> **[3:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=193)** The variant type then detects the underlying data type and keeps track of that in addition to keeping track of the value itself.
>
> **[3:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=200)** And when you perform operations on a variant column, it will look at the underlying data type and let you perform operations, relevant to that underlying type.
>
> **[3:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=208)** To make this more concrete, as a quick example, let's create a table with one column in it and make that column of the variant type, but put number data into it.
>
> **[3:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=217)** We haven't learned create table as select CTAs in this course, but if you're a SQL user, you're likely already familiar with them.
>
> **[3:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=225)** The nice thing about them is, it lets you easily create a table from an existing table.
>
> **[3:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=229)** So we'll create a table with one variant column, and we'll call that column cost of goods variant.
>
> **[3:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=235)** But what we'll put into that is the cost of goods USD data, which was originally a number.
>
> **[4:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=243)** Create table, frostbyte_tasty_bytes.raw_pos.test_menu.
>
> **[4:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=246)** We can confirm that the new column is a variant column.
>
> **[4:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=251)** Describe table, frostbyte_tasty_bytes.raw_pos.test_menu.
>
> **[4:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=256)** But since variant columns save both the value and the underlying data type, we can check to see that Snowflake recognizes that the data type inside this variant column is a number.
>
> **[4:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=267)** We'll use the type of function for this select type of cost of goods variant from frostbyte_tasty_bytes.raw_pos.test_menu.
>
> **[4:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=277)** And then to wrap this up, if we multiply our variant column by 2.0, say, we can see that Snowflake automatically realized that even though this is a variant, and it might be nonsensical to multiply some variant columns depending on the underlying data type, the underlying data type here was a number and could be multiplied.
>
> **[4:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=295)** Select cost of goods variant, cost of goods variant times 2.0 from frostbyte_tasty_bytes.raw_pos.test_menu.
>
> **[5:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=305)** So again, the takeaway, the variant column is extremely flexible and can hold other data types inside it, and Snowflake keeps track of those data types.
>
> **[5:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=314)** Although the variant type doesn't only have to be used with semi-structured data in practice, if you're working with semi-structured data, that's often what you'll use because it's such a flexible data type.
>
> **[5:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=325)** So let's check out the underlying type of the semi-structured data, the JSON data, that we loaded into our variant column when we originally loaded the tasty bytes menu data.
>
> **[5:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=335)** Select type of, menu_item_health_metrics_obj, from frostbyte_tasty_bytes.raw_pos.menu.
>
> **[5:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=342)** You'll see that this says object.
>
> **[5:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=344)** An object is the second Snowflake data type you should know that comes up in the semi-structured data world.
>
> **[5:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=350)** It's like a dictionary in Python.
>
> **[5:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=353)** It always has a key value pair, but the value can be of the variant type.
>
> **[5:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=358)** And since the variant type can hold any other type, the object type can also hold any other type, through variance.
>
> **[6:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=365)** This may sound confusing.
>
> **[6:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=367)** Mostly, you don't have to worry about it.
>
> **[6:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=369)** The key thing to be aware of is that objects always have key value pairs, and this means that you can interact with them differently from variants.
>
> **[6:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=378)** You can pull data from the object type, just based on the key, using brackets like this, select, menu_item_health_metrics_obj, menu_item_health_metrics_obj, ['menu_item_id'], from frostbyte_tasty_bytes.raw_pos.menu.
>
> **[6:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=394)** If we double click on the JSON, we'll see that each one has this key called menu item ID, and by using the brackets, we can pull out only the values associated with that key for each entry.
>
> **[6:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=409)** Okay, so the last data type we want to talk about is the array type.
>
> **[6:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=412)** The array is like an array in other languages, a list of ordered entries, and you can access these entries based on that order.
>
> **[6:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=419)** Each element in a Snowflake array is of the variant type.
>
> **[7:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=422)** Again, that sounds confusing, and you don't have to worry about it for now.
>
> **[7:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=426)** The key thing to know is that you can pull the first entry out of an array, using open bracket, zero, close bracket, the second using open bracket, one, close bracket, et cetera.
>
> **[7:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=437)** In the next video, we'll pull all of this together and run through an example where we dig our way through the various levels of our JSON column.
>
> **[7:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-types?u=76281980&t=444)** You'll see how fun and messy semi-structured data can get, and I hope it will also demonstrate the style of thinking that you need to employ to work with JSON data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (50), [[Snowflake]] (11), [[JSON]] (7), [[Unstructured Data]] (1), [[Relational Databases]] (1)
> **Code Identifiers:** frostbyte_tasty_bytes (9), raw_pos (9), test_menu (4), menu_item_health_metrics_obj (3), menu_item_id (1)
> **Env Vars:** json (7), xml (2), obj (2), orc (1), sql (1)
> **Definitions:** is a  (4), is an  (2), means that (1)
> **CLI Commands:** make (2), python (1)
> **Versions:** 2.0 (2)
> **Analogies:** think of it as (1), it's like (1)
> **Cross-References:** in the next (1)

#### Semistructured data manipulation
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=0)** - In the previous video, we learned about the five semi-structured data formats Snowflake accepts.
>
> **[0:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=5)** We learned about Snowflake's variant, array, and object data types, and we learned about checking the data held inside a variant column using the TYPEOF function.
>
> **[0:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=14)** In this video, we'll practice working with semi-structured data, JSON data.
>
> **[0:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=18)** To be specific, we'll look at our Tasty Bytes menu data, and pull out the first ingredient for each menu item.
>
> **[0:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=24)** Then we'll quickly cover one way you can load semi-structured data of your own.
>
> **[0:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=28)** (graphic whooshing) Okay, so we've got our JSON data.
>
> **[0:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=31)** One way we can pull out the value of a top-level key inside that JSON data is to use dot notation, like this.
>
> **[0:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=38)** SELECT MENU_ITEM_HEALTH_METRICS_OBJ: menu_item_health_metrics FROM FROSTBYTE_TASTY_BYTES_.RAW_POS_MENU.
>
> **[0:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=47)** Notice that colon, that's the dot notation I'm talking about.
>
> **[0:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=51)** This pulls out the value associated with the menu_item_health_metrics key.
>
> **[0:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=57)** We could also have used brackets with the name of the top-level key in it, and that would've done the same thing.
>
> **[1:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=62)** SELECT MENU_ITEM_HEALTH_METRICS_OBJ [menu_item_health_metrics] I'll use brackets going forward.
>
> **[1:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=71)** So what we do next is going to feel a little bit like the movie "Inception," because we're going to dig our way through the various levels of our JSON.
>
> **[1:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=80)** The goal here is to show one way to traverse a JSON in Snowflake, and it gets a little involved, because hierarchical data can be structured so flexibly.
>
> **[1:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=90)** This will help us practice accessing data from variants, objects, and arrays.
>
> **[1:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=94)** After we do this, I'll introduce an alternative method that some find simpler.
>
> **[1:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=99)** Okay, so let's start digging.
>
> **[1:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=100)** Let's say our goal is to extract the first ingredient from each one of these JSONs.
>
> **[1:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=106)** If we take a look at an example JSON, we'll see this will actually take four layers of digging.
>
> **[1:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=112)** We're going to create a new table at each layer so we can carefully track what we're doing, checking the underlying type of data in each case, et cetera.
>
> **[2:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=121)** CREATE TABLE FROSTBYTE_TASTY_BYTES.RAW_POS.TEST_MENU1 AS SELECT MENU_ITEM_HEALTH_METRICS_OBJ FROM FROSTBYTES_TASTY_BYTES.RAW_POS.MENU SELECT * FROM FROSTBYTES_TASTY_BYTES.RAW_POS.MENU1 So this is a table that just pulls the menu_item_health_metrics column.
>
> **[2:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=140)** That's all.
>
> **[2:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=143)** If we click on the first JSON, we could see that we'll have to dig through four layers because we have to get to menu_item_health_metrics.
>
> **[2:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=149)** Then the first element inside menu_item_health_metrics, then ingredients, then the first element inside ingredients.
>
> **[2:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=160)** Okay, so if we describe the table, we see that this is a variant column.
>
> **[2:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=165)** Great.
>
> **[2:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=166)** DESCRIBE TABLE FROSTBYTES_TASTY_BYTES.RAW_POS.TEST_MENU1 and it's categorized its contents as being of the object type.
>
> **[2:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=175)** SELECT_TYPEOF (ingredients) FROM FROSTBYTES_TASTY_BYTES.RAW_POS.TEST_MENU1 Objects are like dictionaries, so we can pull out the first value corresponding to the menu_item_health_metrics key, like this.
>
> **[3:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=187)** CREATE TABLE FROSTBYTES_TASTY_BYTES.RAW_POS.TEST_MENU2 AS SELECT MENU_ITEM_HEALTH_METRICS_OBJ ["menu_item_health_metrics"] FROM FROSTBYTES_TASTY_BYTES.RAW_POS.MENU.
>
> **[3:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=200)** And then, SELECT * FROM FROSTBYTES_TASTY_BYTES.RAW_POS.TEST_MENU2 Great. Now we're in one layer.
>
> **[3:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=209)** If we check the type of data inside our new menu_item_health_metrics column, we can see that it's an array.
>
> **[3:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=215)** SELECT TYPEOF (ingredients) FROM FROSTBYTES_TASTY_BYTES.RAW_POS.TEST_MENU2 This means to pull out the first element, we should use brackets with the element order, so (0).
>
> **[3:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=227)** Let's do that.
>
> **[3:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=229)** CREATE TABLE FROSTBYTES_TASTY_BYTES.RAW_POS.TEST_MENU3 AS SELECT MENU_ITEM_HEALTH_METRICS_OBJ ["menu_item_health_metrics"](0) And then, SELECT * FROM FROSTBYTES_TASTY_BYTES.RAW_POS.TEST_MENU3 If we check the type of the data now, it's an object, so we should pull out the next element based on the key ingredients.
>
> **[4:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=252)** CREATE TABLE Now this is test menu 4.
>
> **[4:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=256)** AS SELECT MENU_ITEM_HEALTH_METRICS_OBJ and then, ["menu_item_health_metrics"](0) and now, ["ingredients"] We can check it with SELECT * FROM FROSTBYTES_TASTY_BYTES.RAW_POS.TEST_MENU4 and finally, we can look at the type of the data now and see that it's an array.
>
> **[4:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=285)** SELECT TYPEOF(ingredients) FROM FROSTBYTES_TASTY_BYTES.RAW_POS.TEST_MENU4 That means to pull out the first element, we should use brackets with the element order again.
>
> **[4:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=294)** Let's do that.
>
> **[4:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=295)** CREATE TABLE FROSTBYTES_TASTY_BYTES.RAW_POS.TEST_MENU5 and now, MENU_ITEM_HEALTH_METRICS_OBJ and then, ["menu_item_health_metrics"](0)["ingredients'](0) And we'll check it with SELECT * FROM FROSTBYTES_TASTY_BYTES.RAW_POS.TEST_MENU5 and there we are.
>
> **[5:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=314)** We've dug through the layers of the JSON and made it to the first ingredient.
>
> **[5:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=320)** This time, if we check the data type of the contents of our variant column, we see it's a varchar.
>
> **[5:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=327)** SELECT TYPEOF(ingredients) FROM FROSTBYTES_TASTY_BYTES.RAW_POS.TEST_MENU5 So to do all of that digging at once, we just need to run the following, SELECT MENU_ITEM_HEALTH_METRICS and then, ["menu_item_health_metrics"](0)["ingredients"](0) and we get the first ingredient.
>
> **[5:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=349)** You don't have to do it this way though.
>
> **[5:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=351)** There's another way that many find easier.
>
> **[5:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=353)** Though at first glance, the syntax may seem unusual to you.
>
> **[5:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=356)** It was unfamiliar syntax from me when I first saw it.
>
> **[6:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=360)** You can use a LATERAL FLATTEN table function, like this.
>
> **[6:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=365)** SELECT * FROM FROSTBYTES_TASTY_BYTES.RAW_POS.TEST_MENU LATERAL FLATTEN (input => menu_item_health_metrics_obj) et cetera.
>
> **[6:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=376)** Let's go slowly here, before we run this command.
>
> **[6:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=379)** You are selecting from your menu table like normal, but after that, we're putting LATERAL FLATTEN, followed by the thing on our menu table that we want to flatten, in this case, menu_item_health_metrics within menu_item_health_metrics_obj.
>
> **[6:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=393)** What this does is automatically pull out the content of menu_item_health_metrics as a new column.
>
> **[6:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=401)** Okay, now let's run it.
>
> **[6:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=405)** There are still the same number of rows as before, 100, but there are a bunch of new columns now that LATERAL FLATTEN created.
>
> **[6:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=416)** We can see that the value column brings us much closer to what we want if we're looking to pull the first ingredient.
>
> **[7:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=423)** Now, what we need to do to get to that first ingredient is this, SELECT value: "ingredients"(0) AS ingredients FROM frostbytes_tasty_bytes.raw_pos.menu with LATERAL FLATTEN.
>
> **[7:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=438)** We go to the value column, pull out ingredients by key and pull out the first element of that array.
>
> **[7:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=449)** Let's wrap up our semi-structured data work, by creating a view and doing some analytics on it.
>
> **[7:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=453)** We'll create the view directly in our tippity top schema, analytics, though normally we'd put it in the harmonized schema first and promote it.
>
> **[7:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=460)** Our goal here will be to count the number of menu items that are healthy, gluten-free, dairy free, and nut free.
>
> **[7:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=466)** Here's the view we'll make.
>
> **[7:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=469)** We'll CREATE OR REPLACE VIEW frostbytes_tasty_bytes.analytics.menu_v and SELECT, and then notice menu_item_health_metrics_obj:menu_item_d value:"is_healthy_flag" value:"is_gluten_free_flag" value:"is_dairy_free_flag" et cetera.
>
> **[8:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=493)** FROM frostbytes_tasty_bytes.raw_pos.menu with this LATERAL FLATTEN.
>
> **[8:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=498)** Notice that it's using the LATERAL FLATTEN table function and then pulling out the dummy variables from the value column, which was created by LATERAL FLATTEN.
>
> **[8:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=507)** And then it's casting those as one character strings.
>
> **[8:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=511)** Now all that's left is to sum up the counts for each flag.
>
> **[8:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=516)** SELECT COUNT(DISTINCT menu_item_id) and then sum every time healthy_flag is "Y", sum when gluten_free_flag is "Y", et cetera.
>
> **[8:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=528)** We can run this and then we'll run this.
>
> **[8:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=534)** There we go.
>
> **[8:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=538)** 95 nut free items, 81 dairy free, just 23 healthy items.
>
> **[9:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=543)** Good information to know, and if we hadn't learned how to pull all of this from its semi-structured format, we would've been in trouble.
>
> **[9:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=548)** To recap, in this video, we learned a few things.
>
> **[9:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=551)** We learned how to use dot notation and position-based indexing to pull elements out of semi-structured data that's been loaded as Snowflake's variant, array, and object data types.
>
> **[9:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=561)** We then put our skills to practice by digging through four layers of a column in our menu data to find out the first ingredient.
>
> **[9:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=567)** Then we learned about a table function, LATERAL FLATTEN, that can save us time by doing some of that initial digging for us.
>
> **[9:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=573)** It explodes a variant column into multiple columns.
>
> **[9:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=576)** We're doing great.
>
> **[9:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=577)** We're approaching the end of this first module, and we've added knowledge of semi-structured data and views to our earlier learnings about virtual warehouses, stages, databases, schemas, and tables.
>
> **[9:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=587)** Pretty soon we'll be getting into exciting Snowflake features like time travel, and cloning.
>
> **[9:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/semi-structured-data-manipulation?u=76281980&t=591)** It's going to be awesome.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (21), [[JSON]] (8), [[Snowflake]] (5), [[Analytics]] (3), next (2)
> **Env Vars:** select (19), raw_pos (17), frostbytes_tasty_bytes (16), lateral (9), flatten (9)
> **Code Identifiers:** menu_item_health_metrics (15), menu_item_health_metrics_obj (3), frostbytes_tasty_bytes (3), raw_pos (2), menu_item_d (1)
> **SQL:** select (19), create table (5)
> **CLI Commands:** find (3), make (1)
> **UI Navigation:** click on (1), go to (1)
> **Definitions:** is a  (2)
> **Cross-References:** previous video (1)


### 8. Snowflake Architecture

[↑ Back to Table of Contents](#table-of-contents)

#### Snowflake architecture overview
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=0)** - Now that we've covered many of the core Snowflake objects, I think we're ready to zoom out for a moment and talk about the overall Snowflake architecture.
>
> **[0:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=7)** This video will differ a little bit from the others in that we'll mostly go over slides that will help us visualize the different parts of Snowflake's architecture.
>
> **[0:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=16)** But don't worry, it's worth it.
>
> **[0:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=18)** Maybe you'll even finish this video feeling like you just saw a picture of Earth from space for the first time.
>
> **[0:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=23)** If you get even 10% of the way to that level of awe, I'll take it.
>
> **[0:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=28)** Okay, so here are the critical things to know about Snowflake's architecture.
>
> **[0:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=31)** First off, it is four layers, as you can see here.
>
> **[0:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=34)** Optimized storage, elastic multi-cluster compute, cloud services, and Snowgrid.
>
> **[0:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=40)** You'll notice that storage is separated from compute, which is something Snowflake pioneered.
>
> **[0:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=44)** For people who have been in the data world for a while, this is a really big deal and will probably never stop feeling like a big deal.
>
> **[0:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=51)** When I was a kid, my family drank powdered milk because it was cheaper, and even though I've only had regular milk for years, regular milk still feels special to me.
>
> **[1:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=60)** I think this is probably how a bunch of people feel about the separation of storage and compute.
>
> **[1:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=64)** Back in the day when you had to scale up both at the same time, it was a major bottleneck to your workloads.
>
> **[1:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=69)** I suspect those who experienced this will never forget those scars and never stop being grateful for the era we live in now.
>
> **[1:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=75)** But I came of age in the data world more recently, and for me, this separation of storage and compute is something I've come to expect.
>
> **[1:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=81)** In any case, let's go through each of these layers one by one.
>
> **[1:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=85)** The first layer is optimized storage.
>
> **[1:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=87)** It lets you access your data all in one place.
>
> **[1:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=90)** You can store structured data, high-volume semi-structured JSON data, even unstructured data like PDFs or images.
>
> **[1:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=97)** This layer is built on Blob Storage, which is great because that means you don't have to migrate your data as it grows.
>
> **[1:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=103)** Snowflake manages the data, so for example, it automatically controls the micro-partitioning.
>
> **[1:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=109)** it takes care of compression, it takes care of encryption, and the storage is flexible, so you can use the architecture you want.
>
> **[1:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=115)** You can connect with data on-premises, data stored in open table formats like Apache Iceberg, etc.
>
> **[2:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=121)** The second layer is elastic multi-cluster compute.
>
> **[2:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=123)** As I mentioned earlier, Snowflake separates storage and compute.
>
> **[2:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=127)** Both are also very scalable.
>
> **[2:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=128)** At Snowflake, we describe them as near-infinitely scalable.
>
> **[2:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=132)** Another cool aspect of Snowflake is that we also separate compute from compute, which means we can have multiple clusters operate on the same data without resource contention.
>
> **[2:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=142)** We saw this earlier when we learned about virtual warehouses.
>
> **[2:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=145)** We'll talk about this more later when we get to Snowpark, but Snowflake also lets you work in multiple languages, SQL, Python, or Java.
>
> **[2:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=152)** The third layer is cloud services, which manages a lot of important tasks.
>
> **[2:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=156)** For example, it pushes upgrades automatically and does it in such a way that you don't have to worry about migrations or experience downtime.
>
> **[2:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=164)** Snowflake engineers constantly improve the performance of the platform, and this carries over to your Snowflake experience without you having to do anything extra.
>
> **[2:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=172)** The cloud services layer also manages files and file metadata, enabling asset transactions, query result caching, Time Travel, zero-copy cloning, which we'll learn about later, and high concurrency.
>
> **[3:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=185)** The fourth layer is Snowgrid, which lets businesses connect across regions and clouds.
>
> **[3:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=190)** And as we mentioned at the beginning of the course, Snowflake works on Amazon Web Services, Microsoft Azure, and Google Cloud.
>
> **[3:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=196)** Snowgrid makes data services and apps accessible.
>
> **[3:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=200)** These can be distributed between teams, business units, partners and customers, and removes the need for extra ETL, ELT, and integrations.
>
> **[3:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=209)** You're also able to maintain business continuity cross-region and cross-cloud.
>
> **[3:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=213)** You can replicate and synchronize databases, accounts, pipelines, and more.
>
> **[3:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=218)** Snowgrid allows for resiliency, durability, and failover by choice, and it even lets you migrate between clouds as needed.
>
> **[3:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=225)** Okay, so that's it for our discussion of Snowflake's architecture.
>
> **[3:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=228)** To recap, in this video, we covered Snowflake's four architectural layers, storage, compute, cloud services, and Snowgrid.
>
> **[3:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=236)** We talked about how Snowflake's storage lets you access your data all in one place, whether it's structured, semi-structured, or unstructured.
>
> **[4:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=243)** We talked about how Snowflake's Compute is near-infinitely scalable.
>
> **[4:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=246)** We talked about how the cloud services layer manages files and file metadata, enabling things like Time Travel and zero-copy cloning.
>
> **[4:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=253)** And we talked about how Snowgrid makes it easy to work across regions and clouds.
>
> **[4:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=257)** If this sounds abstract, just imagine meeting a database admin from the year 2000 who time-traveled to the present day and was introduced to Snowflake.
>
> **[4:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-architecture-overview?u=76281980&t=265)** I'm pretty sure their eyes would go wide, and that would make all of this feel very concrete.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (18), data (12), cloud (6), [[Metadata]] (2), business (2)
> **Cross-References:** we talked about (4), we mentioned (1), we covered (1)
> **Env Vars:** json (1), sql (1), etl (1), elt (1)
> **Analogies:** for example (2), picture (1), imagine (1)
> **CLI Commands:** apache (1), python (1), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - now (1)
> **Non-Speech:** (upbeat music) (1)

#### Wrap-up of Snowflake’s core objects and architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-s-core-objects-and-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-s-core-objects-and-architecture?u=76281980&t=0)** - You know a fair amount about Snowflake at this point, which is awesome.
>
> **[0:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-s-core-objects-and-architecture?u=76281980&t=4)** Let's quickly recap.
>
> **[0:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-s-core-objects-and-architecture?u=76281980&t=6)** You've learned how to navigate Snowsight, the Snowflake UI.
>
> **[0:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-s-core-objects-and-architecture?u=76281980&t=9)** You've learned how to create and use SQL worksheets, which are just one way of interacting with Snowflake, but very useful, even for long-time users.
>
> **[0:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-s-core-objects-and-architecture?u=76281980&t=17)** You've learned about Virtual warehouses, including how to scale them up by increasing the warehouse size, and how to scale them horizontally by turning them into multi-cluster warehouses.
>
> **[0:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-s-core-objects-and-architecture?u=76281980&t=26)** You've learned about Databases, Schemas, and Tables.
>
> **[0:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-s-core-objects-and-architecture?u=76281980&t=28)** You know that Tables are contained in Schemas and Schemas are contained in Databases.
>
> **[0:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-s-core-objects-and-architecture?u=76281980&t=33)** You've learned about Views, both the standard kind, which are basically stored queries, and materialized views, which automatically run when the underlying table they're based on is updated.
>
> **[0:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-s-core-objects-and-architecture?u=76281980&t=43)** You've learned about Semi-structured data and how to work with it in Snowflake, and you've learned about Snowflake's architecture, the four layers, storage, compute, cloud services, and Snowgrid.
>
> **[0:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-s-core-objects-and-architecture?u=76281980&t=53)** So, this is a good moment to check in.
>
> **[0:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-s-core-objects-and-architecture?u=76281980&t=55)** How are you feeling?
>
> **[0:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-s-core-objects-and-architecture?u=76281980&t=56)** It's presumptuous to tell someone how they should be feeling, but I'll just say this.
>
> **[1:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-s-core-objects-and-architecture?u=76281980&t=60)** In the middle of all of the other things you're feeling, I think you should be feeling proud you've come this far.
>
> **[1:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-s-core-objects-and-architecture?u=76281980&t=65)** It sounds trite, but I've taken a bunch of online courses, and it can be challenging to stick with it.
>
> **[1:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-s-core-objects-and-architecture?u=76281980&t=69)** I think you're doing great, and in my opinion, knowing what we're about to cover, it's only going to get more fun from here.
>
> **[1:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-s-core-objects-and-architecture?u=76281980&t=75)** (logo whooshes) (subtle groovy music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (5), [[Databases]] (2), [[SQL]] (1), data (1), cloud (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - you (1)
> **Non-Speech:** (subtle groovy music) (1)


### 9. Time Travel

[↑ Back to Table of Contents](#table-of-contents)

#### Intro to Snowflake feature overview
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-snowflake-feature-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-snowflake-feature-overview?u=76281980&t=4)** (graphic twinkling)
>
> **[0:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-snowflake-feature-overview?u=76281980&t=11)** - In the first part of the course, we covered Snowflake's core objects and architecture.
>
> **[0:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-snowflake-feature-overview?u=76281980&t=16)** Now, in the second part of the course, we're going to take things to the next level and cover some of Snowflake's fundamental features, cloning, stored procedures, user-defined functions, Snowpark DataFrames, and more.
>
> **[0:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-snowflake-feature-overview?u=76281980&t=27)** Here's how I conceptualize this.
>
> **[0:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-snowflake-feature-overview?u=76281980&t=30)** In the first part of the course, we learned about a bunch of building blocks.
>
> **[0:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-snowflake-feature-overview?u=76281980&t=34)** Now we're going to learn ways to use those building blocks, and along the way, we'll pick up a few more building blocks.
>
> **[0:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-snowflake-feature-overview?u=76281980&t=39)** Going to be great.
>
> **[0:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-snowflake-feature-overview?u=76281980&t=40)** And throughout this module, we'll keep using our beloved Tasty Bytes food truck data for most of these videos.
>
> **[0:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-snowflake-feature-overview?u=76281980&t=46)** Just think, because of the work we're doing with this fictitious dataset, more fictitious people might have access to more fictitious mango sticky rice from fictitious food trucks.
>
> **[0:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-snowflake-feature-overview?u=76281980&t=56)** That's a lot of satisfied, fictitious people.
>
> **[1:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-snowflake-feature-overview?u=76281980&t=60)** Okay, so here's what's coming next.
>
> **[1:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-snowflake-feature-overview?u=76281980&t=61)** We'll start things off with a boom and talk about one of my favorite Snowflake features, Time Travel.
>
> **[1:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-snowflake-feature-overview?u=76281980&t=65)** This is so, so cool.
>
> **[1:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-snowflake-feature-overview?u=76281980&t=67)** When I think about Time Travel and all the topics we're going to cover in this module, I'm like, "Oh yeah, this is going to be awesome."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (3), next (2), data (1)
> **Non-Speech:** (upbeat music) (2)
> **Cross-References:** we covered (1)
> **Speakers:** - in (1)

#### Time travel: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=0)** - We're about to learn about time travel in Snowflake, and I'll just give it to you straight.
>
> **[0:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=4)** Time travel is a superpower.
>
> **[0:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=7)** I've had data science jobs before where some data would get messed up, and then we'd have to recreate our tables from raw data and it would take forever.
>
> **[0:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=15)** And at the end, we wouldn't always be able to get back to the pre-corrupted state.
>
> **[0:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=20)** There'd be these weird, persistent differences we couldn't account for and we would never figure it out.
>
> **[0:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=25)** If we'd been using Snowflake, we could have avoided those headaches because, as you'll see, Snowflake Time Travel lets you go back in time and recover the exact data in your table, schema, or database at a point in the recent past.
>
> **[0:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=38)** It's kind of hard to fathom.
>
> **[0:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=41)** To understand Time Travel, we have to understand data retention in Snowflake.
>
> **[0:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=46)** If we run the command show tables and scroll to the right, we'll see a column called retention time.
>
> **[0:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=52)** For a normal permanent table, the default retention time is one day.
>
> **[0:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=56)** If you're on the Enterprise edition of Snowflake, you could raise this all the way up to 90 days, using an alter table command.
>
> **[1:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=63)** Alter table, frostbyte_tasty bytes.raw_pos.test_menu, set data retention time in days equals 90.
>
> **[1:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=71)** If we then run show tables again, we'll see that the retention time has gone to 90 days.
>
> **[1:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=79)** You could see that it now says 90 days here.
>
> **[1:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=81)** Let's clean this up and bring that back down to one day.
>
> **[1:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=85)** Alter table.
>
> **[1:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=86)** Set data retention time in days equals one.
>
> **[1:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=92)** Having a retention time of one day doesn't mean your data will go away after a day.
>
> **[1:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=97)** These are permanent tables, so they'll persist indefinitely.
>
> **[1:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=100)** What this means is that Snowflake keeps track of all changes to your data that happened in the last day, and with Time Travel, it lets you go back to what your table looked like at any point in that period.
>
> **[1:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=112)** So if you set a data retention time of 90 days, you can query your table as of the table state at any moment in the last 90 days.
>
> **[2:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=120)** Though, you should be careful because if there's high data churn, this could mean you're paying for a lot of storage.
>
> **[2:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=126)** It may surprise you to know that we've already used Snowflake's Time Travel functionality several times in this course.
>
> **[2:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=132)** When we learned to undrop databases, undrop schemas, and undrop tables, all of that was Time Travel and was only possible because of Snowflake's data retention feature.
>
> **[2:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=141)** Also, we learned about seeing table metadata using show tables.
>
> **[2:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=145)** It turns out this list dropped tables if you're still within the retention period.
>
> **[2:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=150)** Soon we'll learn how to use Time Travel in another way.
>
> **[2:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=153)** In addition to undrop, by querying past data from Snowflake tables.
>
> **[2:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=157)** There are three ways to do this.
>
> **[2:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=159)** One, querying a table as of a particular timestamp.
>
> **[2:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=163)** Two, querying a table as of a certain number of seconds in the past, and three, querying a table before a certain pass query was run.
>
> **[2:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-i?u=76281980&t=172)** In the next video, we'll learn how to do each of these in practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (13), [[Snowflake]] (9), database (1), [[Databases]] (1), feature (1)
> **Cross-References:** in the last (2), go back to (1), in the next (1)
> **Code Identifiers:** frostbyte_tasty (1), raw_pos (1), test_menu (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)
> **Speakers:** - we (1)

#### Time travel: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=1)** - Welcome back.
>
> **[0:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=2)** We just learned about retention time in Snowflake.
>
> **[0:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=4)** We learned how to check the retention time with show tables and to set a new retention time with alter table.
>
> **[0:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=10)** Undropping a table is only possible because of these retention policies.
>
> **[0:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=14)** Now we're going to move on from undropping tables to what I think is even cooler.
>
> **[0:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=18)** We're going to learn three ways of querying past data from Snowflake tables.
>
> **[0:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=23)** The first way is querying a table as of a particular timestamp.
>
> **[0:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=27)** The second way is querying a table as of a certain number of seconds in the past.
>
> **[0:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=32)** And the third way is querying a table before a certain past query was run.
>
> **[0:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=37)** Let's make it happen.
>
> **[0:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=38)** We'll start by messing up some data on purpose so we can go back and recover the correct data.
>
> **[0:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=44)** First, we'll clone one of our tables, which effectively copies one of our tables so we don't mess with the real thing.
>
> **[0:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=50)** And don't worry about this part because we'll discuss cloning in detail in a future video.
>
> **[0:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=54)** So create or replace table, frostbyte_tasty_bytes.raw_pos.truck_dev, clone frostbyte_tasty_bytes.raw_pos.truck.
>
> **[1:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=62)** Let's run a query on that clone table just to make sure it worked.
>
> **[1:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=66)** We'll select truck ID, year, make, model from our new truck dev table.
>
> **[1:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=71)** This shows all the food trucks in Tasty Bytes' fleet.
>
> **[1:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=74)** If we look at the query details, it looks like there are 450 rows.
>
> **[1:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=78)** Let's pretend for a second that we were asked to add a new column to this dataset that gives the age of each truck.
>
> **[1:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=85)** The correct way to calculate the age would be something like this.
>
> **[1:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=88)** Select truck ID, year, make, model, and then year of current date minus the original year as truck age.
>
> **[1:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=98)** You could see that the truck age results look plausible.
>
> **[1:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=101)** We'll do two things here to make our lives easier later.
>
> **[1:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=105)** Because we'll want to show how you can do time travel relative to a particular timestamp as of the time of particular pass query was run, let's save the most recent query ID and save the current timestamp.
>
> **[1:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=117)** We can do this using Snowflake variables.
>
> **[2:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=120)** These are really useful and something I think should be covered earlier in people's Snowflake journeys.
>
> **[2:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=125)** You can save a variable with the set command.
>
> **[2:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=128)** Let's first use set to save the query ID.
>
> **[2:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=130)** We haven't spoken about query IDs, but in Snowflake, every query you run has a unique ID and with time travel, that's nice because we can return to the state of the data right before a specific query was run.
>
> **[2:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=144)** So now let's save a good_data query ID variable that will record the last query we ran where we were happy with our data.
>
> **[2:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=151)** Set good_data query ID equals last query ID.
>
> **[2:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=155)** Last query ID does exactly what you'd expect and pulls the ID of the last query.
>
> **[2:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=160)** You can use variables by putting a dollar sign in front of them.
>
> **[2:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=163)** So if we run select dollar sign, good_data query ID, we see the query ID we've saved.
>
> **[2:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=170)** In the case of saving the current timestamp, we can do the following.
>
> **[2:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=173)** Set good_data_timestamp equals current timestamp.
>
> **[2:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=177)** Current timestamp does exactly what you think it should.
>
> **[2:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=179)** It gives the current timestamp.
>
> **[3:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=181)** Now we can display this variable using select and the dollar sign plus the variable name, select dollar sign, good_data_timestamp.
>
> **[3:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=188)** We see the timestamp we saved. Awesome.
>
> **[3:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=192)** If we want to check out all of our variables at once, we can run show variables.
>
> **[3:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=196)** We see them all here.
>
> **[3:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=197)** Okay, now it's time to get back to our nefarious mission of corrupting data.
>
> **[3:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=202)** To do this, we'll calculate the truck age by dividing, not subtracting.
>
> **[3:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=206)** Again, we're doing this wrong on purpose.
>
> **[3:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=209)** Select the usual and then year of current date divided by t.year as truck age.
>
> **[3:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=216)** And then let's make another error by accidentally overriding our year column with our faulty truck age instead of adding a new column with the correct truck age.
>
> **[3:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=227)** Wow, we are so clumsy.
>
> **[3:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=230)** Okay, here's how we fill in our year column with incorrect numbers.
>
> **[3:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=234)** Update frostbyte_tasty_bytes.raw_pos.truck_dev.
>
> **[3:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=237)** Set t.year equals year of the current date divided by t.year.
>
> **[4:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=243)** Awesome. It looks like that worked.
>
> **[4:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=246)** To confirm, let's query the data now, select the usual.
>
> **[4:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=250)** Great. We've messed up our data just like we wanted.
>
> **[4:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=253)** Every year says one because the numbers were all close to one and our year column doesn't allow for numbers to the right of the decimal place.
>
> **[4:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=262)** Now comes the fun part.
>
> **[4:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=263)** Now let's try out the first time travel method for querying data from the past.
>
> **[4:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=268)** Querying as of a particular timestamp.
>
> **[4:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=271)** The way this works is we run our normal select from command, but then we add an at at the end and we specify what at we want.
>
> **[4:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=280)** So in this case, we want the results we would've gotten had we queried this table back at a particular timestamp.
>
> **[4:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=286)** If the time we're aiming for is outside the retention period, this won't work.
>
> **[4:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=291)** But otherwise the table should appear like it did at that moment.
>
> **[4:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=294)** Let's first do this by directly using the variable we saved earlier, the timestamp when our data was still uncorrupted.
>
> **[5:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=302)** Select star from and then truc_ dev at timestamp.
>
> **[5:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=307)** good_data_timestamp.
>
> **[5:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=310)** Let's take a look at the data. Great.
>
> **[5:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=312)** The year column is back to normal.
>
> **[5:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=314)** We've traveled back in time.
>
> **[5:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=318)** To make it even clearer what this is doing, let's show the timestamp string, select good_data_timestamp, and then we click on the timestamp, go to the bottom right, copy that.
>
> **[5:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=326)** Then we paste it into here and we get select star from truck_dev at timestamp.
>
> **[5:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=333)** And then this same timestamp.
>
> **[5:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=336)** Snowflake doesn't automatically know that this string is a timestamp.
>
> **[5:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=340)** It just looks like a string.
>
> **[5:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=342)** So we have to use the colon colon operator to convert this to the data type timestamp_LTZ.
>
> **[5:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=348)** The LTZ stands for local time zone. Cool.
>
> **[5:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=350)** So if we run this, we see that we get the same result as before.
>
> **[5:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=354)** The year column is back to normal. Look at us.
>
> **[5:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=358)** We're time travelers.
>
> **[6:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=360)** Now let's quickly try the second time travel method for querying data.
>
> **[6:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=364)** Querying, as of a certain number of seconds in the past, this is conceptually very similar to what we just did, but instead of specifying the timestamp outright, we specify an offset in seconds and Snowflake automatically figures out relative to the current time, the time we're aiming for.
>
> **[6:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=382)** Let's go back a couple of minutes.
>
> **[6:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=383)** You don't have to worry about what I'm doing here.
>
> **[6:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=385)** I'm just going to calculate how many seconds we need to go back to get to our table when it was in a good state.
>
> **[6:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=392)** Okay. Select star from frostbyte_tasty_bytes.
>
> **[6:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=395)** Raw_pos.truck at offset.
>
> **[6:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=397)** And then the number of seconds.
>
> **[6:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=400)** Again, it's negative that we need to go back in time to get to our table.
>
> **[6:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=405)** Okay, cool. That worked too.
>
> **[6:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=406)** Our year column is correct again.
>
> **[6:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=410)** And finally, let's try the third time travel method for querying data from the past.
>
> **[6:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=415)** Querying a table before a certain pass query was run using the query ID.
>
> **[7:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=420)** Let's take a look at our query ID again.
>
> **[7:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=422)** Select dollar sign, good_data_query_id.
>
> **[7:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=426)** Our command will be a lot like the ones we ran earlier with the major difference being that instead of using at, we're using before.
>
> **[7:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=434)** This slight change in syntax makes it clear that when you do time travel based on query IDs, you're accessing the data as it was before that particular query you've specified was run.
>
> **[7:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=445)** So select star from and then truck_dev before statement and then the good_data_query_id.
>
> **[7:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=452)** Awesome. Once more, we have access to our correct data.
>
> **[7:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=459)** In this video we learned, one, how to check the retention time for a table.
>
> **[7:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=464)** Two, how to set a new retention time.
>
> **[7:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=465)** Three, how to set and use variables.
>
> **[7:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=468)** Four, how to save a query id.
>
> **[7:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=470)** Five, how to save a current timestamp and six, three ways to use time travel to query a table back in time by using at to query it as a particular timestamp.
>
> **[8:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=480)** By using at to query it as of a certain number of seconds in the past.
>
> **[8:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=484)** And by using before to query it as it was before a specific query was run.
>
> **[8:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=489)** That's a lot of time travel knowledge.
>
> **[8:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/time-travel-part-ii?u=76281980&t=491)** So the next time you accidentally drop a table or you realize you mess something up big time, you can correct all of that by going back in time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (16), [[Snowflake]] (7), next (1)
> **Code Identifiers:** frostbyte_tasty_bytes (4), truck_dev (4), good_data_timestamp (4), raw_pos (3), good_data (3)
> **CLI Commands:** make (7)
> **UI Navigation:** select the (2), click on (1)
> **Definitions:** is a  (1), stands for (1)
> **Analogies:** just like (1), similar to (1)
> **Env Vars:** ltz (1)
> **Cross-References:** go back to (1)


### 10. Table Types

[↑ Back to Table of Contents](#table-of-contents)

#### Permanent, transient, and temporary tables
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=1)** - In the last video, we talked about time travel and we mentioned that each table has a retention period.
>
> **[0:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=6)** Time travel also applies to databases and schemas, as you can probably guess from the fact that you can undrop databases and schemas.
>
> **[0:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=14)** But we chose to focus on tables.
>
> **[0:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=16)** We haven't discussed this yet, but Snowflake also provides an additional seven day fail safe period after the retention period has elapsed during which Snowflake staff can help you recover historical data.
>
> **[0:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=28)** But to use fail safe, you have to contact the Snowflake team directly and get their help.
>
> **[0:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=32)** It's a last resort.
>
> **[0:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=34)** It turns out that understanding retention periods and the fail safe period is key to what we'll discuss next.
>
> **[0:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=41)** The differences between three of the main table types in Snowflake, permanent tables, transient tables, and temporary tables.
>
> **[0:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=47)** This is useful but not complicated, so we'll move through this quickly.
>
> **[0:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=51)** Let's dig in by quickly creating a table of each of these types using our tasty bytes data, and then comparing them.
>
> **[0:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=58)** When you create a table with the normal create table command, the result is a permanent table.
>
> **[1:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=63)** So we already have a number of those around we can look at, we don't need to make a new one.
>
> **[1:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=67)** So let's get started by creating a transient table.
>
> **[1:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=70)** (graphics whooshing) Let's use the truck table that we worked with in the last video.
>
> **[1:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=74)** Let's clone that table.
>
> **[1:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=75)** Again, don't worry about cloning, we'll talk about that soon.
>
> **[1:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=78)** But this time let's clone it as a transient table.
>
> **[1:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=82)** Create transient table, frostybyte_tasty_bytes.raw_pos, truck_transient clone, and then our truck table.
>
> **[1:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=89)** So we're creating a table and notice that we've included the word transient in there this time.
>
> **[1:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=93)** So create transient table instead of our normal create table.
>
> **[1:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=98)** We call this truck transient instead of just truck.
>
> **[1:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=102)** Then let's do the same thing, but creating a temporary table instead.
>
> **[1:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=106)** Create temporary table, truck temporary.
>
> **[1:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=109)** And then again, we'll clone the truck table.
>
> **[1:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=111)** So this says create temporary table and we call the table truck temporary.
>
> **[1:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=119)** Awesome. So now let's try a little experiment.
>
> **[2:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=121)** Let's change the retention period for each of these tables to 90 days.
>
> **[2:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=126)** First, let's look at the current retention periods.
>
> **[2:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=129)** Show tables like truck percent.
>
> **[2:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=132)** By including like and then truck with the sensible.
>
> **[2:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=136)** We'll pull out information for only those tables that start with the word truck.
>
> **[2:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=141)** If we scroll over, we can see that the retention period for each of these tables is one day.
>
> **[2:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=147)** Okay, now let's set each retention period to 90 days one by one.
>
> **[2:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=152)** Alter table, frostybyte_tasty_bytes.raw_pos, truck set data_retention_time_in_days equals 90.
>
> **[2:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=159)** Okay, that seemed to work just fine for our permanent table.
>
> **[2:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=162)** That makes sense.
>
> **[2:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=163)** If you're in the enterprise edition, permanent tables can have a retention period of up to 90 days.
>
> **[2:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=168)** Now let's try it for the transient table.
>
> **[2:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=171)** Alter table, and then this is truck transient, set data_retention_time_in_days equals 90.
>
> **[2:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=177)** Uh-oh, that seemed to fail.
>
> **[3:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=180)** Okay, and let's try it for the temporary table, alter table and then truck temporary, same thing.
>
> **[3:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=186)** That seemed to fail too.
>
> **[3:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=188)** Let's double check to confirm that this worked for the permanent table but failed for the transient and temporary tables.
>
> **[3:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=195)** Show tables like truck percent.
>
> **[3:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=198)** Yep, sure enough, the permanent tables retention period went up to 90 days, but the other stayed at one day.
>
> **[3:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=205)** We can decrease the retention period for the transient and temporary tables though.
>
> **[3:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=208)** Let's drop both to zero.
>
> **[3:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=210)** Alter table and then truck transient and we'll set that data retention time days to zero and do the same thing for truck temporary, that worked.
>
> **[3:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=217)** So it's not that their retention periods are unalterable.
>
> **[3:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=222)** (graphics whooshing) So this brings us to the first thing we should understand about permanent, transient and temporary tables.
>
> **[3:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=229)** Permanent tables can have a retention period of up to 90 days if you're in the enterprise edition.
>
> **[3:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=234)** Transient and temporary tables cannot.
>
> **[3:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=238)** Their retention periods have to be between zero and one day inclusive.
>
> **[4:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=242)** This is useful if you want to make sure you'll save on storage costs for tables that don't matter much.
>
> **[4:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=247)** There's another key difference between permanent tables and transient or temporary tables.
>
> **[4:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=252)** Permanent tables have a fail safe period of seven days.
>
> **[4:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=256)** Transient and temporary tables have a fail safe period of zero days.
>
> **[4:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=259)** None of this is configurable.
>
> **[4:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=261)** What this means is that after your retention period is over for a permanent table, there's still hope of recovering historical data by working with the Snowflake team.
>
> **[4:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=270)** But for transient and temporary tables, that's not the case.
>
> **[4:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=274)** Abandon hope, all you who enter transient or temporary tables hoping for fail safe to rescue you.
>
> **[4:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=279)** So at this point you might be wondering, how then are transient and temporary tables different?
>
> **[4:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=283)** They both have the same possible retention periods and neither have fail safe periods.
>
> **[4:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=287)** The answers that temporary tables only persist as long as your session lasts.
>
> **[4:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=293)** Transient tables last until they're dropped.
>
> **[4:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=296)** So you could think of transient tables as being partway between permanent and temporary tables.
>
> **[5:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=300)** They're like permanent tables in that they persist and they're like temporary tables in that you don't get much of a retention period with them and you get no fail-safe protection.
>
> **[5:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=309)** Okay, so that's all for this video.
>
> **[5:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=311)** To recap, we learned about fail safe.
>
> **[5:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=314)** We created a transient table.
>
> **[5:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/permanent-transient-and-temporary-tables?u=76281980&t=316)** We created a temporary table, and we explored the differences between permanent, transient and temporary tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (5), data (4), [[Databases]] (2), [[Microsoft Word|Word]] (2), next (1)
> **Code Identifiers:** frostybyte_tasty_bytes (2), raw_pos (2), data_retention_time_in_days (2), truck_transient (1)
> **Cross-References:** in the last (2), we talked about (1), we mentioned (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), we call this (1)
> **Speakers:** - in (1)
> **Non-Speech:** (upbeat music) (1)


### 11. Cloning

[↑ Back to Table of Contents](#table-of-contents)

#### Cloning
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=0)** - In Snowflake, when you clone an object, you're creating a new version of it that is zero-copy.
>
> **[0:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=7)** What this means is that at the time you create the clone, the clone relies on the same stored data, the same micro partitions, as the object you copied.
>
> **[0:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=16)** Once you start making changes to the clone, then Snowflake keeps track of the changes, so your total data stored by virtue of having a clone will start to increase.
>
> **[0:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=25)** But at the time of cloning, you won't increase your storage amount.
>
> **[0:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=28)** This is really cool for a number of reasons.
>
> **[0:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=31)** One of my favorites is that cloning makes it very easy to test things.
>
> **[0:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=34)** If you're worried about messing up production data, you can near instantly clone that dataset and use the clone instead, whereas if you had to create a whole new copy that involved recreating the underlying data, your total storage would be much higher and it would take longer.
>
> **[0:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=48)** You can clone a lot of different Snowflake objects, databases, schemas, tables, dynamic tables, and more.
>
> **[0:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=53)** But we're going to focus on databases, schemas, and tables.
>
> **[0:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=57)** Let's start by cloning a Tasty Bytes table.
>
> **[1:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=60)** (graphics thunder) CREATE TABLE, we'll call it TRUCK CLONE, and then we'll clone our truck table.
>
> **[1:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=66)** If this looks familiar to you, it's because we've run this code before, except last time, we called the table truck dev instead of truck clone.
>
> **[1:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=74)** So what is this doing?
>
> **[1:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=76)** It's creating a table named truck clone in the raw.pos schema in the Frostbyte Tasty Bytes database and it's specifying that it wants this to be a clone of the truck table.
>
> **[1:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=87)** You might recall that every database has two automatically generated schemas, information schema and public.
>
> **[1:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=94)** Information schema provides a bunch of data about the database, including information on how much data is being stored in a view called table storage metrics.
>
> **[1:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=104)** Let's check that out for both our clone table, truck clone and the original truck.
>
> **[1:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=109)** So we'll do SELECT * FROM and then this FROSTBYTES TASTY BYTES INFORMATION SCHEMA.TABLE STORAGE METRICS WHERE, and we'll specify TABLE NAME = TRUCK CLONE or TABLE NAME = TRUCK.
>
> **[2:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=123)** You can see that they have different IDs, they're different tables, but they have the same clone group ID, which is the unique identifier for the oldest clone ancestor of this table.
>
> **[2:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=134)** And you can see this matches the ID of the original table.
>
> **[2:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=137)** And if you scroll further to the right, you could see that only the original table has a number for active bytes.
>
> **[2:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=144)** The clone table has a zero here.
>
> **[2:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=146)** Active bytes are bytes owned by and billed to this table.
>
> **[2:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=150)** You can get similar information from the table view in the information schema, and this view updates more regularly.
>
> **[2:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=157)** So let's take a look at that.
>
> **[2:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=159)** SELECT * FROM FROSTBYTE TASTY BYTES INFORMATION SCHEMAS.TABLES WHERE TABLE NAME = TRUCK CLONE or TABLE NAME = TRUCK.
>
> **[2:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=168)** You can see that the bytes listed is the same for the clone as for the table that was cloned, but we know from what we just saw in the table storage metrics view, that truck clone isn't actually taking up extra storage.
>
> **[2:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=179)** Now to get a deeper sense of how this clone works, let's make a change to our clone and see what happens.
>
> **[3:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=185)** We'll do this by doubling the table size, using an insert into command.
>
> **[3:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=189)** INSERT INTO insert into truck clone, SELECT * FROM this truck table.
>
> **[3:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=195)** Basically, we're just taking the whole original table and appending it to the clone.
>
> **[3:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=199)** So now every one of the clones rows has a duplicate.
>
> **[3:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=203)** Okay, so let's check out our storage again, from the tables view, since this updates right away.
>
> **[3:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=208)** SELECT * FROM FROSTBYTE TASTY BYTES INFORMATION SCHEMA TABLES WHERE TABLE NAME enables TRUCK CLONE or TABLE NAME.
>
> **[3:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=215)** Cool, so the storage has gone up for the clone and the storage remains unchanged for the original table, as you'd expect.
>
> **[3:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=223)** If we waited a little while, we could check the table storage metrics view and see that the active bytes number has gone up from zero in our clone.
>
> **[3:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=232)** The syntax for creating clones is similar, no matter what object you're working with.
>
> **[3:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=237)** So now that we've done this for tables, we can move pretty quickly through schemas and databases.
>
> **[4:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=243)** Let's clone our raw pos schema in frostbyte tasty bytes.
>
> **[4:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=247)** CREATE OR REPLACE SCHEMA frostbyte tasty bytes to our raw pos clone.
>
> **[4:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=251)** CLONE frostbyte tasty bytes are raw pos.
>
> **[4:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=254)** If we refresh our menu on schemas on the left, we can see that raw pos clone is now visible.
>
> **[4:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=260)** Let's now do the same thing for a database.
>
> **[4:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=262)** CREATE OR REPLACE DATABASE frostbyte tasty bytes clone, CLONE frostbyte tasty bytes.
>
> **[4:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=270)** My understanding is this takes a bit longer because even though it's zero-copy for the data itself, there's a lot of metadata to copy over.
>
> **[4:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=279)** And again, if we refresh, we see the clone database frostbyte tasty bytes clone.
>
> **[4:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=284)** We won't do this here, but I also wanted to mention that you can clone a clone, you can get as deep as you want: clones of clones of clones.
>
> **[4:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=293)** Snowflake takes care of managing all the underlying micro partitions so you don't have to worry about that.
>
> **[4:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=299)** The last thing I wanted to cover on cloning is that you can combine Time Travel and cloning, so you can clone an object as of its state at a past date as long as that date is within the retention period.
>
> **[5:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=312)** Let's do that.
>
> **[5:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=313)** Let's clone our original truck table as of 10 minutes ago.
>
> **[5:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=318)** There's nothing special about this because we haven't changed the original truck table, but we can still see how the syntax works.
>
> **[5:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=325)** CREATE OR REPLACE TABLE and then we'll call it truck clone time travel, clone our truck table AT OFFSET, and then 600 seconds in the past.
>
> **[5:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=338)** In this case, it's not that interesting because the data was the same as if we'd copied it in its current state, but it's a powerful tool when you need it.
>
> **[5:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=347)** (graphics thunder) That's it for cloning.
>
> **[5:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=349)** To recap, we learned that cloning is zero-copy and Snowflake tracks subsequent changes.
>
> **[5:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=355)** We learned how to clone tables, schemas, and databases.
>
> **[5:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=359)** We learned how to combine time travel and cloning.
>
> **[6:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=362)** We learned how to use the information schema to check out the clone group ID and the active bytes columns in the table storage metrics view.
>
> **[6:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=369)** We also learned how to check out the bytes column in the table view.
>
> **[6:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=373)** Like Time Travel, cloning can be a little mind bending.
>
> **[6:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=376)** Soon we'll return to solid ground by tackling exceptionally practical topics like resource monitors.
>
> **[6:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/cloning?u=76281980&t=383)** (graphic thunders) (bold jazzy music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), database (6), [[Snowflake]] (5), [[Databases]] (4), [[Metadata]] (1)
> **Env Vars:** table (9), truck (6), clone (6), name (6), create (4)
> **SQL:** select (4), where (3), create table (1), insert into (1)
> **CLI Commands:** make (1)
> **Speakers:** - in (1)
> **Non-Speech:** (bold jazzy music) (1)


### 12. Resource Monitors

[↑ Back to Table of Contents](#table-of-contents)

#### Resource monitors
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=0)** - Some things in the data world are like brushing your teeth.
>
> **[0:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=4)** You know you should do it.
>
> **[0:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=5)** You're happy after you've done it, so you do it, but you don't usually wake up going, "You know what I'm most looking forward to today?
>
> **[0:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=11)** Good toothbrushing."
>
> **[0:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=13)** That's kind of how I feel about resource monitors.
>
> **[0:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=15)** Resource monitors are Snowflake objects you can create to put limits on credit usage for an account or a specific warehouse.
>
> **[0:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=22)** Very flexible, really important, and you're happy once you've created them, but the topic isn't inherently awe inspiring.
>
> **[0:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=29)** The good news is that Snowflake makes this kind of data hygiene very easy.
>
> **[0:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=34)** So if creating resource monitors is a little like brushing your teeth, at least it's like brushing your teeth with a delightful toothpaste, and a really, really great toothbrush.
>
> **[0:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=43)** Let's start by using the UI to create a resource monitor.
>
> **[0:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=47)** If you go to the left-hand side of the screen, and click on admin, cost management, resource monitors, you'll see that there's a plus resource monitor button at the top-right of the screen.
>
> **[0:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=58)** Let's click on that.
>
> **[1:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=61)** And if you're not seeing an admin tab on the left at all, you might have to go to the bottom left of the screen, and switch your role to account admin.
>
> **[1:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=69)** Let's name our resource monitor, first_resource_monitor.
>
> **[1:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=74)** Before we specify a credit quota, let's talk about the two different kinds of resource monitors, account level monitors, and warehouse level monitors.
>
> **[1:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=82)** If you create an account level monitor, it means you're putting guardrails on total credit consumption across all warehouses in the account.
>
> **[1:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=90)** You can only have one account level monitor.
>
> **[1:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=93)** If you create a warehouse level monitor that's specific to a particular warehouse, here let's start by making an account level one.
>
> **[1:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=99)** Let's set a daily credit maximum of 30 credits.
>
> **[1:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=102)** That's a lot of credits.
>
> **[1:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=104)** If an extra small warehouse runs for an hour, that's one credit.
>
> **[1:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=107)** So you could have an extra small warehouse running continuously for 24 hours, and still not hit this quota.
>
> **[1:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=113)** Yes, we want to start monitoring immediately.
>
> **[1:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=115)** No, we don't want to end the monitoring.
>
> **[1:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=117)** No, we don't want to reset monthly.
>
> **[1:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=118)** Let's click customize, and go to the bottom to change that to daily.
>
> **[2:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=123)** Then let's have it start immediately.
>
> **[2:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=125)** Great.
>
> **[2:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=126)** Now we can move on to what we want to have happen as we hit certain percentages of our quota during a given day.
>
> **[2:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=132)** Let's make sure we get a notification once we've used 80% of our credit quota for the day.
>
> **[2:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=138)** Then let's suspend all of the warehouses in the account once we hit 100% of our credit quota, but we'll let the running queries finish.
>
> **[2:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=146)** And if those running queries go through enough credits to bring us to the 110% mark of our credit quota, let's immediately suspend even those queries.
>
> **[2:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=155)** This will be the hard upper limit.
>
> **[2:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=158)** Awesome.
>
> **[2:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=159)** Now we click Create resource monitor to make our monitor.
>
> **[2:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=162)** Cool.
>
> **[2:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=163)** So now that we've made an account level monitor using the UI, let's make a warehouse level monitor through code to see how that experience differs.
>
> **[2:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=171)** So let's go to projects, worksheets, and open up a worksheet I made called Resource Monitors.
>
> **[2:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=177)** Here we use a create resource monitor Command, followed by the name of our monitor, tasty_test_rm.
>
> **[3:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=184)** Then we have a width clause, followed by whatever it is we want to specify about our monitor.
>
> **[3:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=189)** In our case, let's set a daily limit of 20 credits for a particular warehouse.
>
> **[3:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=194)** Note that we haven't yet specified which warehouse we want to apply this to.
>
> **[3:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=197)** That's a separate step we'll do later.
>
> **[3:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=199)** Right now we're just creating the monitor before we activate it.
>
> **[3:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=202)** We'll set the frequency to daily.
>
> **[3:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=203)** The other options are weekly, monthly, yearly or never.
>
> **[3:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=206)** We'll have it start immediately.
>
> **[3:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=208)** We could also have set a future timestamp as the start time.
>
> **[3:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=212)** We'll specify similar triggers to those we set at the account level.
>
> **[3:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=215)** Notify us at 80% of the daily credit quota.
>
> **[3:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=218)** Prevent the warehouse from starting new queries at a 100% of the credit quota, and shut down even running queries at 110% of the quota.
>
> **[3:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=226)** These three, notify, notify and suspend, and notify and suspend immediately are the only three action types a resource monitor can trigger.
>
> **[3:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=234)** So we're availing ourselves of all the options here.
>
> **[3:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=238)** Given the number of other times we've seen this pattern, it shouldn't surprise you to hear that there's a SHOW RESOURCE MONITORS command.
>
> **[4:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=245)** Let's run that and make sure our monitor was created successfully.
>
> **[4:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=249)** We can see the account level monitor we made before, which has a 30 credits per day quota, and the new monitor, which has a 20 credits per day quota.
>
> **[4:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=257)** All that looks good.
>
> **[4:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=259)** Great.
>
> **[4:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=259)** So now let's apply this monitor to a warehouse to get it up and running.
>
> **[4:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=263)** To do this, we run an alter warehouse command, ALTER WAREHOUSE tasty_de_wh SET RESOURCE_MONITOR = tasty_test_rm.
>
> **[4:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=273)** I could have imagined a version of the world where we specify inside the resource monitor object, which warehouse we wanted to apply to, but instead, we alter the warehouse to associate it with the resource monitor.
>
> **[4:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=288)** Now, if you run SHOW RESOURCE MONITORS again, we should see that it's at the level of a warehouse SHOW RESOURCE MONITORS.
>
> **[4:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=296)** Great.
>
> **[4:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=297)** That worked.
>
> **[4:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=298)** If you want to alter something about a resource monitor, you can go to the list of resource monitors in admin cost management resource monitors,
>
> **[5:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=312)** and edit the resource monitor there.
>
> **[5:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=314)** Or you can use an alter resource monitor command, and specify the parameter you want to change.
>
> **[5:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=319)** For example, let's say we wanted to change our resource monitor to have a 30 credit daily quota.
>
> **[5:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=324)** We just run alter resource monitor take tasty_test_rm SET CREDIT_QUOTA = 30.
>
> **[5:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=333)** You can also drop a resource monitor with the DROP RESOURCE MONITOR command, followed by the name of the resource monitor.
>
> **[5:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=340)** I've grown a bit attached to this tasty_test_rm, so I'm sad to do this, but let's drop it.
>
> **[5:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=345)** We do that by running DROP RESOURCE MONITOR tasty_test_rm, and if we SHOW RESOURCE MONITORS, we'll see it's gone.
>
> **[5:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=357)** Goodbye tasty_test_rm.
>
> **[5:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=359)** Your stay here was far too short.
>
> **[6:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=362)** So that's all we're going to cover for resource monitors.
>
> **[6:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=364)** Here's a quick recap of what we did.
>
> **[6:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=367)** We learned about the difference between account level, and warehouse level resource monitors.
>
> **[6:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=371)** We created an account level resource monitor.
>
> **[6:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=373)** using the UI.
>
> **[6:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=375)** We learned about the three different actions resource monitors can trigger.
>
> **[6:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=379)** We created a warehouse level resource monitor using the create resource monitor command.
>
> **[6:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=385)** We applied the resource monitor to a warehouse with the alter warehouse command.
>
> **[6:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=389)** We adjusted a parameter on a resource monitor with the alter resource monitor command.
>
> **[6:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=394)** We showed all resource monitors with the SHOW RESOURCE MONITORS command, and we dropped a resource monitor with DROP RESOURCE MONITOR.
>
> **[6:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=402)** Hygiene metaphors are inherently uncomfortable, but I really do think that Snowflake makes this kind of brushing your teeth experience pretty darn pleasant, all things considered.
>
> **[6:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=410)** And once you get used to setting up resource monitors, and adjusting them quickly, you'll feel so proficient that you might even find yourself having fun from time to time.
>
> **[6:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/resource-monitors?u=76281980&t=419)** (upbeat instrumental music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (3), hit (3), data (2), [[Cost Management]] (2)
> **Env Vars:** resource (8), show (5), monitors (5), drop (3), monitor (3)
> **Code Identifiers:** tasty_test_rm (6), first_resource_monitor (1), tasty_de_wh (1)
> **UI Navigation:** go to (5), click on (2)
> **CLI Commands:** make (4), find (1)
> **Analogies:** it's like (1), for example (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)


### 13. User-Defined Functions (UDFs)

[↑ Back to Table of Contents](#table-of-contents)

#### User-defined functions (UDFs): Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=0)** - Snowflake has a ton of built-in functions.
>
> **[0:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=2)** Think coalesce, date diff, count, et cetera.
>
> **[0:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=6)** But sometimes you need a custom function for a very specific use case.
>
> **[0:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=10)** Maybe you have some SQL code, you find yourself reusing a bunch, and it would be cleaner to just wrap it in a function.
>
> **[0:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=16)** To make this easy, Snowflake lets you create user-defined functions, which I'll usually refer to by their acronym, UDFs.
>
> **[0:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=23)** When I first learned about UDFs, I was a little intimidated by them, and I'm not 100% sure why.
>
> **[0:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=29)** I think it's because they seemed fancy or complicated or something.
>
> **[0:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=33)** I don't really know.
>
> **[0:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=34)** But I've come to understand that UDFs can be quite simple, and I hope you feel that way as well by the end of this video.
>
> **[0:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=41)** Before we create and use our own UDFs, let's run through a couple of examples of Snowflake's preexisting functions, so its non-user defined functions.
>
> **[0:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=50)** Let's start with ABS, which lets you take the absolute value of a number.
>
> **[0:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=55)** Select ABS, -14.
>
> **[0:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=57)** Pretty straightforward.
>
> **[0:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=58)** If you put a negative number in there, it will flip the sign.
>
> **[1:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=61)** If you put in a positive number, it will give you back the number you put in.
>
> **[1:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=65)** Another common function is upper, which takes a string and makes it uppercase.
>
> **[1:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=69)** Select upper, upper and lowercase.
>
> **[1:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=72)** Again, pretty straightforward.
>
> **[1:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=75)** If you want to see a long list of functions provided by Snowflake, plus some others, just run show functions.
>
> **[1:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=81)** If we scroll down, we can see the absolute value function, and the columns give information about it, the number of arguments it takes, for example.
>
> **[1:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=89)** Okay, let's take an example from the world of Tasty Bytes.
>
> **[1:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=92)** So what if you're like, ugh, all the time as part of other queries I'm running, I need to pull the price of the highest priced item, so I keep having to write this subquery.
>
> **[1:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=101)** Select max of sale price USD from your menu table.
>
> **[1:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=104)** The highest price item is 21 USD, but imagine that could change from time to time.
>
> **[1:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=109)** I just wish I had a function I could call that would return the max menu price at any given moment.
>
> **[1:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=114)** Well, you're in luck, because it's easy to create a user-defined function that does this.
>
> **[1:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=119)** Here's how you do it.
>
> **[2:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=120)** You use the Create Function command, followed by the name of the new function you're creating, and then you specify the data type for the output.
>
> **[2:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=128)** An important thing to know about UDFs, they always return a scalar value.
>
> **[2:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=134)** In the next video, we'll learn about user-defined table functions, UDTFs, which return a table, so more than just a single scaler value.
>
> **[2:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=143)** And in another video we'll learn about stored procedures, which are similar to UDFs and UDTFs in some ways, but they don't have to return any value at all.
>
> **[2:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=154)** Okay, so we've started creating our function.
>
> **[2:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=156)** Next, we just bookend the code we want to run with $$.
>
> **[2:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=160)** In our case, our code just selects a single number and that's what will get returned.
>
> **[2:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=164)** I should note that we specify our database because a UDF is stored inside a database.
>
> **[2:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=170)** If we don't specify the schema, it will just use public.
>
> **[2:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=173)** So use database frost by Tasty Bites, then create function max menu price returns the number as, and there's our logic.
>
> **[3:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=182)** Okay, if we scroll over to the left, we can see that function in the dropdown.
>
> **[3:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=186)** So now let's try out our UDF.
>
> **[3:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=188)** Just run Select, Max Menu Price, and you'll see it gives us our result of $21, hooray.
>
> **[3:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=194)** One cool thing is we should now be able to see our max menu price UDF when we run the show functions command.
>
> **[3:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=202)** Let's run that to confirm.
>
> **[3:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=203)** It's alphabetical, so if we scroll down, we'll see it, and there it is.
>
> **[3:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=208)** If you scroll over, you could see it's not built in.
>
> **[3:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=211)** It doesn't take any arguments.
>
> **[3:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=213)** Max and min arguments are both zero, and its description is that it's a user-defined function.
>
> **[3:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=219)** I don't know about you, but seeing our little function all grown up and listed among the other powerful functions here makes me feel very proud.
>
> **[3:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=227)** Okay, so this is a very simple UDF in that it doesn't take in any arguments.
>
> **[3:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=231)** In the next video, we'll create one that does take in arguments, but don't worry, dear little max menu price UDF.
>
> **[3:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=237)** Just because we're making another UDF that's more advanced, it doesn't mean we don't love you.
>
> **[4:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-i?u=76281980&t=242)** (uplifting music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (4), next (3), database (3), [[SQL]] (1), data (1)
> **Env Vars:** udf (6), abs (2), usd (2), sql (1)
> **UI Navigation:** scroll down (2), dropdown (1)
> **Analogies:** for example (1), imagine (1), similar to (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** in the next (2)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)

#### User-defined functions (UDFs): Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=0)** - Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=1)** In the last video we created a SQL UDF that didn't take in any arguments.
>
> **[0:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=6)** In this video, we'll get a little more sophisticated and create a UDF that takes in an argument and we'll also create a simple Python UDF.
>
> **[0:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=14)** It's going to be great. So let's get to it.
>
> **[0:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=16)** So you might recall from the last video that we made a UDF called Max Menu Price that always gives a result in USD, but what if we want the answer in another currency?
>
> **[0:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=28)** Let's create a Max Menu Price converted function that is the same basic bones as Max Menu Price, but it lets you hand in an exchange rate.
>
> **[0:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=38)** We'll call this USD to New, and then it spits out the Max Menu Price in whatever new currency you've specified.
>
> **[0:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=45)** The function could look like this.
>
> **[0:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=47)** Create function Max Menu Price converted returns number as, and that has logic.
>
> **[0:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=53)** Some things to notice instead of just having an open parenthesis and a closed parenthesis with nothing in them, we want this to take in an input.
>
> **[1:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=62)** So to do that, we put in a new variable name USD to New, and we specify the data type number.
>
> **[1:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=69)** Then inside the SQL query, we multiply the max by this new conversion factor.
>
> **[1:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=76)** Okay, so if we want the Max Menu Price in Canadian dollars, and let's just say the conversion rate between USD and Canadian dollars is one USD to 1.35 Canadian dollars, then we can simply run the following select Max Menu Price converted 1.35, and this tells us the Max Menu Price converted to Canadian dollars is 28.35.
>
> **[1:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=97)** Pretty cool.
>
> **[1:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=99)** Okay, now I want to cover one last thing.
>
> **[1:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=101)** If UDFs were just something you could write in SQL, that alone would make them very useful, but they're even better than that.
>
> **[1:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=108)** In addition to SQL, you can write them in Python, JavaScript, Java and Scala.
>
> **[1:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=113)** So let's take a moment and write a Python UDF that we can then call from inside a SQL query.
>
> **[1:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=118)** Here's how it works.
>
> **[2:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=120)** The experience of creating and using a Python UDF is a lot like the experience of creating and using a SQL UDF.
>
> **[2:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=128)** The differences are first that you specified the language in this case Python.
>
> **[2:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=133)** Second, you specify the runtime version, so the version of Python you want to use.
>
> **[2:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=137)** Third, you specify a handler.
>
> **[2:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=139)** And fourth, you write the inside of your function in Python.
>
> **[2:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=143)** Other than that, Python UDFs look like SQL UDFs, same basic beast.
>
> **[2:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=150)** Here this function, which I'm calling winsorize, basically puts a ceiling and a floor on the values your data can take.
>
> **[2:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=158)** In statistics, you winsorize when you have outliers that you don't want to drop, but whose influence you do want to reduce.
>
> **[2:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=165)** For example, maybe you believe some of the values are truly large, just not as large as what's recorded.
>
> **[2:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=172)** So we're taking in three arguments this time.
>
> **[2:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=174)** The value we want to winsorize and the upper bound and lower bound we want that value to fall between.
>
> **[3:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=180)** Usually you specify these bounds and percentiles, but here we'll make it simple and just hand over the values.
>
> **[3:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=186)** The logic inside is straightforward.
>
> **[3:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=188)** It's just an if, elif, else statement.
>
> **[3:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=192)** If the value is too high, set it to the upper bound.
>
> **[3:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=194)** If it's too low, set it to the lower bound.
>
> **[3:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=196)** Otherwise, keep it the same.
>
> **[3:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=197)** There's nothing fancy here, no error handling, and in fact, this would be easy to do with SQL, but let's ignore that and see if this worked.
>
> **[3:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=204)** Cool, if we run select winsorize 12, 11, 4, we see that the output is 11.
>
> **[3:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=210)** So we handed in a value of 12 and it saw that that was higher than the upper bound of 11, so it set it to 11, which is what we wanted.
>
> **[3:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=219)** There's a lot you can do with UDFs that we didn't get into here.
>
> **[3:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=222)** For one thing, you can specify the Python packages you want to use inside the UDF, like NumPy or Pendas.
>
> **[3:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=229)** You can also create vectorized UDFs, which take in batches of rows as inputs and give out batches of rows as outputs.
>
> **[3:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=236)** Lots of exciting things to learn about, but even if there's a lot more we could learn, I don't want to discount the power of what we did cover.
>
> **[4:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=245)** To recap, we learned about four things.
>
> **[4:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=247)** First, how to see a list of all of Snowflake's functions with the show functions command.
>
> **[4:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=252)** Second, how to create a SQL UDF using create function.
>
> **[4:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=257)** Third, how to create a Python UDF using create function, specify language, runtime handler, and fourth, calling UDFs using select.
>
> **[4:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=266)** Now it's time to take our user defined function skills to the next level by learning about user-defined table functions.
>
> **[4:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-functions-udfs-part-ii?u=76281980&t=273)** (bright music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (10), [[SQL]] (9), data (2), [[JavaScript]] (1), [[Java]] (1)
> **Env Vars:** udf (10), sql (9), usd (5)
> **CLI Commands:** python (10), make (2)
> **Versions:** 1.35 (2), 28.35 (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - welcome (1)

#### User-defined table functions (UDTFs)
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=0)** - We've learned about user-defined functions, which are great, but have the limitation that you can only return a single value, no more, no less.
>
> **[0:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=9)** Now we're going to learn about the elder sibling to UDFs.
>
> **[0:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=12)** User-defined table functions UDTFs, which return a table that can have multiple rows and multiple columns.
>
> **[0:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=20)** Once you understand UDFs, UDTFs aren't that much harder to grasp.
>
> **[0:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=24)** Let's work from the first UDF we made and convert it into a UDTF so the output can be a bit more flexible.
>
> **[0:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=33)** So that first UDF we made was this max menu price function.
>
> **[0:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=38)** Now instead of just finding the max price, let's find all menu items above a certain price that we specify when we call the function.
>
> **[0:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=44)** We'll call this UDTF menu prices above.
>
> **[0:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=48)** To change our earlier UDF to our new UDTF, we need to do four things.
>
> **[0:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=53)** First, change the name.
>
> **[0:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=55)** Let's make it menu prices above.
>
> **[0:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=57)** Second, give it an argument.
>
> **[0:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=59)** We'll call this price floor and make it a number.
>
> **[1:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=62)** Third, change the content of the query so that it does the new thing we want it to do.
>
> **[1:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=67)** Let's have it pull both the price and the name of the item.
>
> **[1:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=70)** And after selecting those two fields, it will filter down to only those rows where the sale price USD is greater than our price floor.
>
> **[1:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=78)** Fourth, have it return a table.
>
> **[1:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=80)** So instead of just returns, it will now say returns table.
>
> **[1:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=84)** And then we specify the names of the return values and their data types.
>
> **[1:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=88)** The end result looks like this.
>
> **[1:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=90)** Create function menu prices above, returns table as, and then it has the logic.
>
> **[1:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=97)** Of everything I said just now, the most important thing to remember is that when you're making a UDTF, you need to specify returns table and then put the return column names and types in parentheses, separated by commas.
>
> **[1:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=110)** If you do that, you'll probably be all right.
>
> **[1:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=114)** So let's double check that we created this as we'd hoped by running show functions like we did in the last video.
>
> **[2:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=122)** If we scroll down, we can see menu prices above, and if we scroll to the right, we can see that the column is table function, has a Y in it.
>
> **[2:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=130)** Great. We made a UDTF.
>
> **[2:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=133)** Now let's run this.
>
> **[2:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=134)** Running UDTFs is a little bit different from running UDFs.
>
> **[2:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=138)** With a UDF we just did select function and we were all set.
>
> **[2:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=142)** With UDTFs, we put the UDTF in the from statement, and we wrap the UDTF called in the table function table.
>
> **[2:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=151)** Select star from table menu prices above 15.
>
> **[2:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=155)** The Snowflake docs state that having this table function helps the SQL compiler recognize the table function as a source of rows.
>
> **[2:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=163)** So basically we're like, Hey, query compiler.
>
> **[2:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=165)** Just so you know, menu prices above isn't going to just return a single value.
>
> **[2:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=169)** It could return one row, 10 rows, a hundred rows.
>
> **[2:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=172)** Be ready.
>
> **[2:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=174)** When we run this, we get back all menu items with a price above $15.
>
> **[2:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=178)** Pretty cool.
>
> **[3:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=181)** You could then further filter your results if you wanted by adding a where clause on top of all of this.
>
> **[3:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=186)** For example, we could specify that we only want menu items with the word chicken in the name.
>
> **[3:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=190)** Select star from table menu prices above where item I like chicken.
>
> **[3:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=198)** UDTFs are pretty cool.
>
> **[3:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=200)** The world is your oyster.
>
> **[3:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=201)** And as with UDFs, you can have SQL, Python, Java, and JavaScript UDTFs.
>
> **[3:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=207)** The one language difference is that you can't have Scala UDTFs.
>
> **[3:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=211)** Alright, that's all the user-defined table function material we're going to cover for now.
>
> **[3:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=216)** In this video, we learned how to create UDTFs and how to run them.
>
> **[3:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=221)** Let's move on to stored procedures, which are different from UDFs and UDTFs, but conceptually related.
>
> **[3:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=228)** And for certain problems, you'll end up choosing between using a UDF, UDTF, or using a stored procedure.
>
> **[3:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/user-defined-table-functions-udtfs?u=76281980&t=234)** So it's good to tackle them all in a row.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), data (1), [[Snowflake]] (1), [[Microsoft Word|Word]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** udtf (8), udf (5), sql (2), usd (1)
> **CLI Commands:** make (2), find (1), python (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - we (1)


### 14. Stored Procedures

[↑ Back to Table of Contents](#table-of-contents)

#### Stored procedures: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=0)** - Now we get to learn about stored procedures.
>
> **[0:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=2)** Stored procedures are similar to UDFs in many ways, but there are big differences, and I think they're great to study in succession because learning about the one illuminates the other.
>
> **[0:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=12)** So I'm excited to dig in.
>
> **[0:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=14)** We'll first spend some time discussing what stored procedures do and how they differ from UDFs, but we'll quickly move into the mechanics of creating and running them, and we'll spend the bulk of our time there.
>
> **[0:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=25)** The reason for this is that, as you'll see, stored procedures are so flexible that trying to enumerate their use cases is like trying to describe everything you can do with a pair of scissors.
>
> **[0:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=35)** Here we'll focus more on the tactical question of how do you operate the scissors, than in all the things scissors can or cannot do.
>
> **[0:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=41)** But we'll cover a few common use cases.
>
> **[0:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=44)** So what are stored procedures and how do they differ from UDFs?
>
> **[0:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=48)** Let's start by slowing down.
>
> **[0:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=49)** I heard the phrase "stored procedure" many, many times before I actually paused to think about the two parts of the name.
>
> **[0:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=57)** One, it's a procedure, so something that takes a series of logical steps, and two, it's stored, so you can reuse it.
>
> **[1:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=67)** Okay, so you're writing a block of code that does stuff and saving it, so you can call it again and again and again.
>
> **[1:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=73)** What kinds of actions can you take with a stored procedure?
>
> **[1:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=76)** You can run data definition language commands, DDL commands, like alter, create, drop, show, and use.
>
> **[1:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=83)** So if you wanted to procedurally create tables, you could do that.
>
> **[1:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=87)** If you wanted to drop a schema, you could do that.
>
> **[1:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=89)** If you wanted to switch to a different database or a different warehouse, you could do that.
>
> **[1:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=93)** You can't do that with UDFs.
>
> **[1:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=95)** You can also run data manipulation language, DML commands, like insert or copy into.
>
> **[1:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=102)** You can't do that with UDFs.
>
> **[1:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=104)** Like UDFs, you can run SQL queries that perform calculations, but unlike UDFs, stored procedures aren't required to return a value.
>
> **[1:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=113)** They can but they don't have to.
>
> **[1:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=116)** Like UDFs, you can write the internals of your stored procedure in multiple languages, Python, Java, JavaScript Scholar, or SQL, though with stored procedures.
>
> **[2:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=124)** This is an enhanced version of SQL called Snowflake scripting, which also lets use loops IF style branch even more.
>
> **[2:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=129)** At this point, you might be wondering why even have UDFs if stored procedures can do what UDFs do and then some.
>
> **[2:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=137)** Well, stored procedures do in fact have some limitations UDFs don't have.
>
> **[2:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=142)** One downside of stored procedures is that they have to be called as independent statements.
>
> **[2:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=147)** We'll talk more about this in a second, but you have to run a separate call command for each stored procedure, whereas with UDFs, you can use many of them inside one select statement.
>
> **[2:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=157)** Another is that if you're in a SQL worksheet, say, you can't save the results of a stored procedure as a variable to then work with later, you can do this with UDFs.
>
> **[2:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=167)** Okay, enough talking.
>
> **[2:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=168)** Let's turn to mechanics.
>
> **[2:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=171)** Before we create our own stored procedure, I think it's helpful to see that Snowflake already has some procedures ready for you.
>
> **[2:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=177)** By this point in the course, you can probably guess that we'll use a show command to do this.
>
> **[3:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=182)** In this case, show procedures.
>
> **[3:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=184)** Let's run that.
>
> **[3:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=185)** I'm seeing four total and we can see that all four have a "yes" for "is built in" as we'd expected.
>
> **[3:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=191)** Cool, so we're not starting from a blank slate.
>
> **[3:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=194)** This system send email is pretty neat.
>
> **[3:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=197)** You use it to send an email notification to an address of your choosing.
>
> **[3:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=200)** Something you might want to do automatically if say, an important process fails.
>
> **[3:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=205)** You can already see that a procedure like this is quite different from a UDF.
>
> **[3:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=209)** The goal here is to take an action instead of performing a calculation and returning a value.
>
> **[3:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=215)** So that's it for stored procedures part one.
>
> **[3:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=217)** We learned what a stored procedure is, how A UDF differs from a stored procedure, and how to see existing procedures with show procedures.
>
> **[3:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-i?u=76281980&t=224)** But things are about to get much, much cooler, because in the next video we're going to make a stored procedure of our very own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[Snowflake]] (2), data (1), database (1), [[Data Manipulation]] (1)
> **Env Vars:** sql (4), udf (2), ddl (1), dml (1)
> **CLI Commands:** python (1), make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is an  (1)
> **Analogies:** similar to (1)
> **Prerequisites:** required to (1)

#### Stored procedures: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=0)** - In the last video, we learned a bunch about stored procedures and how they compare to UDFs.
>
> **[0:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=5)** But now, let's get to the fun part, making our own stored procedure.
>
> **[0:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=9)** In our case, let's work with some Tasty Bytes data we haven't looked at before, the transaction data.
>
> **[0:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=14)** This spans two tables, ORDER_HEADER, which is basic info about the order, one row per order, and ORDER_DETAILS, which has a row per item per order.
>
> **[0:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=23)** So if someone ordered multiple items in a single order, each item would be in a different row.
>
> **[0:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=27)** Here, we'll work with ORDER_HEADER, and let's pretend that for some reason, we didn't want to store data older than 180 days, and every day, we want to delete that older data.
>
> **[0:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=36)** Stored procedures are perfect for this kind of thing.
>
> **[0:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=39)** (dramatic whooshing) Let's take a look at the ORDER_HEADER table.
>
> **[0:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=42)** SELECT * FROM FROSTBYTE_TASTY_BYTES_CLONE.RAW_POS ORDER_HEADER.
>
> **[0:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=48)** You can see that it's got the order ID, the truck ID, the location and more.
>
> **[0:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=52)** The column we care about most here is this ORDER_TS, which stands for order timestamp.
>
> **[0:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=57)** Let's check out the range of dates in the ORDER_HEADER table.
>
> **[1:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=61)** SELECT MAX(ORDER_TS), MIN(ORDER_TS) FROM that ORDER_HEADER table.
>
> **[1:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=67)** Okay, so the earliest transaction happened on January 1st, 2019, and the most recent happened on November 1st, 2022.
>
> **[1:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=75)** Let's save this MAX(ORDER_TS) value as a variable that we'll call max_ts.
>
> **[1:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=80)** SET max_ts = and then SELECT MAX(ORDER_TS) from our ORDER_HEADER table.
>
> **[1:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=87)** And if we run that, SELECT $max_ts, that looks good.
>
> **[1:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=93)** Great, now, let's subtract 180 days from that max timestamp variable and save that as the cutoff timestamp.
>
> **[1:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=101)** SELECT DATEADD 'DAY'_-180, $max_ts.
>
> **[1:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=106)** That looks good to me, Okay, so let's save that value as cutoff timestamp.
>
> **[1:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=110)** SET cutoff_ts = and then that whole thing.
>
> **[1:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=114)** Awesome.
>
> **[1:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=115)** Now we're ready to write the SQL logic to pull all data older than 180 days, which we want to do because that's the data we're going to want to delete with a DELETE command inside the stored procedure we'll make it a moment.
>
> **[2:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=127)** Once we get this logic correct, making the stored procedure is easy.
>
> **[2:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=132)** We could do a SELECT *, but that's wasteful because it'll pull a ton of data.
>
> **[2:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=136)** So instead, let's just pull the max date and make sure it looks like it's 180 days in the past once the logic in the WHERE clause is applied.
>
> **[2:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=144)** SELECT MAX(ORDER_TS) FROM ORDER_HEADER WHERE ORDER_TS is less than the cutoff timestamp.
>
> **[2:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=152)** If you run that, that looks like the right value, 180 days before the most recent timestamp.
>
> **[2:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=157)** Great.
>
> **[2:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=159)** Okay, so there's one last thing we should cover before we make our stored procedure, and that's what a Snowflake scripting block is.
>
> **[2:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=166)** As I mentioned before, Snowflake scripting is like an enhanced version of SQL that lets you use SQL alongside additional kinds of logic like if-else statements.
>
> **[2:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=175)** One of the most common places to see Snowflake scripting is inside a stored procedure, and we're about to use a very simple Snowflake scripting block inside the stored procedure we'll make.
>
> **[3:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=185)** Here's their structure.
>
> **[3:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=186)** You can start with DECLARE and then declare variables.
>
> **[3:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=189)** This part is optional.
>
> **[3:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=190)** Then you have a BEGIN statement.
>
> **[3:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=192)** This is not optional.
>
> **[3:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=193)** Then you can add exceptions in case an error occurs.
>
> **[3:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=196)** This is optional.
>
> **[3:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=197)** And finally, you finish with an END statement.
>
> **[3:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=200)** In what we're about to make, we'll use DECLARE, BEGIN and END, but to keep things simple, we won't add in any exceptions.
>
> **[3:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=206)** One last thing to note, with the DECLARE part, you just state the variable name and its type.
>
> **[3:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=211)** And then when you use that variable after the BEGIN statement, you set its value with a colon equal sign and you reference its value by sticking a colon in front of the variable name.
>
> **[3:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=221)** This is a lot coming at you all at once, but it will make sense in a second.
>
> **[3:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=224)** Cool, so now we get to actually create our procedure.
>
> **[3:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=228)** We do this with the CREATE PROCEDURE command.
>
> **[3:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=230)** CREATE OR REPLACE PROCEDURE delete_old(), et cetera, et cetera.
>
> **[3:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=236)** This is a lot to digest, so let's go slowly here.
>
> **[4:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=240)** We created our procedure and called it delete_old(), and because we didn't include any arguments inside the parentheses, that means this doesn't use any arguments.
>
> **[4:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=249)** You just call it and it does its thing.
>
> **[4:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=252)** We specified the return type, but you don't need to actually return anything with a stored procedure.
>
> **[4:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=257)** And you'll notice that we didn't include a RETURN statement below in the body of the stored procedure.
>
> **[4:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=261)** We declared our two variables, max_ts and cutoff_ts, and stated they're both timestamps.
>
> **[4:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=268)** Then after the BEGIN, we actually set the values of each of those one after the other.
>
> **[4:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=273)** Finally, we actually ran our DELETE statement, which follows the syntax of DELETE FROM and then you specify the table name followed by the conditions of what you want to delete.
>
> **[4:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=281)** In our case, any orders before the cutoff timestamp, 180 days in the past, and then we end.
>
> **[4:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=288)** Just to make sure that all worked just fine, let's run SHOW PROCEDURES.
>
> **[4:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=293)** There it is, you see that it's not built in.
>
> **[4:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=295)** We made this one ourselves.
>
> **[4:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=297)** Now let's run the DESCRIBE PROCEDURE command followed by the name of our stored procedure with the parentheses to learn more about our stored procedure.
>
> **[5:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=305)** DESCRIBE PROCEDURE delete_old().
>
> **[5:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=308)** This gives us a bunch of information and we can see that everything looks like it's in order.
>
> **[5:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=312)** The return type is Boolean, though that doesn't matter here.
>
> **[5:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=315)** The stored procedure was written in SQL, and if we double click on the body, we can see the stored procedure's logic.
>
> **[5:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=321)** Cool, everything looks good.
>
> **[5:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=325)** Now let's finally run the thing.
>
> **[5:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=326)** If we did this right, that should delete all the data from our orders table that's more than six months from the most recent order.
>
> **[5:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=334)** You run a stored procedure with the CALL command, so here we do CALL DELETE_OLD().
>
> **[5:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=341)** Awesome, it looks like that worked.
>
> **[5:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=342)** Let's double check by seeing the new minimum date in our ORDER_HEADER table.
>
> **[5:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=347)** SELECT MIN(ORDER_TS) FROM and then the ORDER_HEADER table.
>
> **[5:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=351)** Great, if we compare that to cutoff timestamp, we'll see that we did it.
>
> **[5:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=355)** SELECT $cutoff_ts:.
>
> **[5:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=358)** We're champions.
>
> **[6:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=360)** (dramatic whooshing) There are so many other cool things to learn about stored procedures.
>
> **[6:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=364)** Again, they're like scissors and there's a lot you can do with them.
>
> **[6:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=367)** For example, we didn't cover writing stored procedures in Python or JavaScript or anything like that.
>
> **[6:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=372)** But this isn't a course where we would lament what we didn't cover.
>
> **[6:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=376)** We focus on what we did cover, and we've covered a lot.
>
> **[6:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=379)** We've come a long way.
>
> **[6:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=380)** I'm very proud of us.
>
> **[6:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=381)** Here's what we covered in this video alone.
>
> **[6:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=384)** One, we learned about what stored procedures are and what languages they can be written in.
>
> **[6:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=389)** Two, we learned how to list the available procedures with SHOW PROCEDURES.
>
> **[6:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=393)** Three, we explained how UDFs and stored procedures differ.
>
> **[6:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=397)** Four, we created a stored procedure.
>
> **[6:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=400)** Five, we called a stored procedure, and six, we learned about our stored procedure using DESCRIBE PROCEDURE.
>
> **[6:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=407)** Now, when you see stored procedures, you don't need to be intimidated.
>
> **[6:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/stored-procedures-part-ii?u=76281980&t=410)** They're just another tool in the toolkit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), [[SQL]] (4), [[Snowflake]] (4), [[Scripting]] (4), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** order_header (10), select (9), order_ts (8), procedure (5), max (4)
> **SQL:** select (9), where (2), delete from (1)
> **Code Identifiers:** max_ts (5), cutoff_ts (3), delete_old (3)
> **CLI Commands:** make (7), python (1)
> **API Endpoints:** delete  (3)
> **Definitions:** is a  (2), stands for (1)
> **Cross-References:** in the last (1), we covered (1)


### 15. Role-based Access Control (RBAC)

[↑ Back to Table of Contents](#table-of-contents)

#### Role-based access control (RBAC): Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=0)** - [Speaker] Alright, now we're going to learn a bit about role-based access control, RBAC.
>
> **[0:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=5)** In Snowflake, which is a system that lets you control access to particular Snowflake objects by granting privileges to roles and then assigning those roles to users.
>
> **[0:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=14)** I'll just go out and say it.
>
> **[0:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=17)** Role-based access control isn't my all-time favorite topic.
>
> **[0:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=20)** I have a healthy appreciation for many things that others would consider dry or boring.
>
> **[0:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=25)** I love technical documentation, I love math, I love poetry, but RBAC pushes even my limits.
>
> **[0:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=29)** That said, it's very important to cover because one, there are few things more frustrating than not being able to take some action because you don't have the right privileges.
>
> **[0:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=40)** And two, good data governance helps you prevent both bad actors from intentionally messing with your data and good but fallible actors from inadvertently messing with your data.
>
> **[0:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=50)** The happy news is that role-based access is something that Snowflake handles vary elegantly.
>
> **[0:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=56)** It's pretty painless in Snowflake and if you're a super-organized person, you might even find it enjoyable in like a, look how organized my bookshelf is kind of way.
>
> **[1:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=64)** Okay, so there are four main concepts we need to understand in order to understand RBAC.
>
> **[1:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=70)** Securable objects, privileges, roles, and users.
>
> **[1:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=75)** I think the best way to learn about these is to see them in practice and as we're using them, we can define them and talk about how they relate to each other.
>
> **[1:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=82)** So let's start by using the role account admin, which is the role we've used for everything in the course so far.
>
> **[1:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=88)** A sloppy, even risky practice, but one we've been doing for simplicity.
>
> **[1:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=92)** Okay, so we assume a role with the used-role command followed by the name of the role.
>
> **[1:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=99)** Let's stick on the account admin role.
>
> **[1:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=102)** Account admin is one of the six main roles that automatically exist in every account.
>
> **[1:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=106)** We'll talk about the others in a moment, so we never actually had to create it.
>
> **[1:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=110)** We could also have assumed the role by going to the top-right of the Snowsight UI, clicking on the current role name and selecting a new role name.
>
> **[2:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=120)** Now that we've assumed the account admin role, we can make any other role and give that new role any of the Powers account admin has.
>
> **[2:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=129)** So let's make a new tasty_de role.
>
> **[2:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=133)** We do that by running the create role command, followed by the name of the role we want to create, CREATE ROLE tasty_de. Awesome.
>
> **[2:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=142)** Now we have a new role.
>
> **[2:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=143)** Roles are useful because you can grant them privileges, so the authority to do stuff and then you can assign roles to users.
>
> **[2:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=150)** In this way, you can give individual users access to those privileges.
>
> **[2:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=155)** I like to think of roles as buckets of privileges.
>
> **[2:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=158)** Having roles as an intermediate step between privileges and users is cleaner than just granting privileges directly to users.
>
> **[2:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=165)** Because typically, users fall into user types and it's more maintainable to have a set number of user types you maintain than it is to maintain individual privileges for each user one-by-one.
>
> **[2:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=175)** Imagine if every new data engineer at your company had to be granted all of the necessary privileges one-by-one.
>
> **[3:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=182)** Much easier to maintain a data engineer role and give that new user access to that role.
>
> **[3:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=187)** We can see what privileges have been granted to our tasty_de role by running the show grants to command, followed by the role name, we don't get any results, which makes sense.
>
> **[3:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=198)** We just created this role and haven't granted it any privileges.
>
> **[3:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=202)** It's powerless like a bunny stuck in a window well.
>
> **[3:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=204)** We get a very different result if we run the show grants to command followed by the account admin role.
>
> **[3:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=212)** Yikes, who knew there were so many privileges one could grant and account admin has all of them.
>
> **[3:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=218)** I'm seeing hundreds and hundreds of rows, privileges like ownership of some databases, usage of some schemas, select on many tables and views.
>
> **[3:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=229)** Let's grant the role tasty_de to my username.
>
> **[3:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=231)** If I scroll to the bottom, I can click on the icon on the bottom-left and hover over the account tab and see that my username is PETERINTROTOSNOWFLAKE.
>
> **[4:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=241)** So then I just have to run the command grant role tasty_de to user PETERINTROTOSNOWFLAKE.
>
> **[4:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=249)** And then I can assume this role by running USE ROLE tasty_de.
>
> **[4:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=254)** Remember, we still haven't given any privileges to tasty_de.
>
> **[4:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=257)** It's like an empty shell.
>
> **[4:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=258)** So if I try to do something like create a new warehouse, that should fail, CREATE WAREHOUSE tasty_de test and sure enough, it fails with a sequel access control error, insufficient privileges to operate on account.
>
> **[4:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=269)** So now, let's finally give tasty_de a privilege.
>
> **[4:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=271)** If we go back to using the account admin role, we can grant the CREATE WAREHOUSE privilege to tasty_de.
>
> **[4:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=279)** GRANT CREATE WAREHOUSE ON ACCOUNT TO ROLE tasty_de.
>
> **[4:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=283)** After we run that, if we run the SHOW GRANTS TO ROLE COMMAND again and specify that we want to see the grants for tasty_de, SHOW GRANTS TO ROLE tasty_de, we can see that tasty_de now has the CREATE WAREHOUSE privilege.
>
> **[4:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=295)** So let's hop back over to the tasty_de role and try creating that warehouse again.
>
> **[5:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=300)** USE ROLE tasty_de, CREATE WAREHOUSE tasty_de test.
>
> **[5:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=305)** Cool, that worked.
>
> **[5:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=307)** We made the tasty_de test warehouse.
>
> **[5:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-i?u=76281980&t=311)** Coming up, we'll talk about Securable objects and learn about the five other roles that like account admin, Snowflake automatically generates.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (5), data (5), [[Technical Documentation]] (1), [[Databases]] (1)
> **Env Vars:** create (6), role (6), warehouse (5), rbac (3), peterintrotosnowflake (2)
> **Code Identifiers:** tasty_de (18)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** go back to (1), coming up (1)
> **Analogies:** imagine (1), it's like (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)

#### Role-based access control (RBAC): Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=0)** - Let's pick up where we left off.
>
> **[0:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=2)** In the last part, we talked about how privileges, the ability to do something, can be assigned to roles and those roles can be assigned to users.
>
> **[0:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=11)** An important thing to note is you can also assign roles to other roles, so you can have a hierarchy where the top roles inherit the privileges of roles lower down, but we're not going to show examples of that here.
>
> **[0:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=23)** Now I want to talk about Snowflake's five other automatically generated roles in addition to account admin.
>
> **[0:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=30)** These are org admin, security admin, user admin, sys admin, and public.
>
> **[0:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=36)** To save time, I'm not going to cover org admin here.
>
> **[0:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=39)** It's a role that can span multiple accounts, so it's unlikely you'll run into it in the wild.
>
> **[0:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=44)** The easiest way to see what each of these roles does is to run the Show Grants To Role command.
>
> **[0:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=51)** Let's start with security admin.
>
> **[0:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=53)** You could see that this only has a handful of privileges, but these are powerful.
>
> **[0:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=56)** They let the security admin set account level security policies like a password policy.
>
> **[1:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=62)** Show Grants To Role user admin.
>
> **[1:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=64)** User admin's privileges are even more simple but also powerful.
>
> **[1:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=68)** The user admin can create roles and create users.
>
> **[1:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=72)** Show Grants To Role sys admin.
>
> **[1:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=74)** The sys admin is primarily able to create databases and warehouses.
>
> **[1:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=79)** Show Grants To Role public, and the public role is primarily able to run queries.
>
> **[1:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=86)** The last thing I'll mention is that the account admin role has access to the security admin role, and the security admin role has access to the user admin role.
>
> **[1:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=97)** The account admin role also has access to the sys admin role and all of these roles have access to the public role so they can all run queries.
>
> **[1:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=107)** That's a lot of info and you don't need to internalize these differences between the different automatically generated roles.
>
> **[1:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=113)** I just wanted to emphasize that they do have different privileges and the roles are hierarchical, so if you ever find that you have insufficient privileges to do what you want to do, you can get it done by moving higher up the hierarchy of roles.
>
> **[2:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=126)** The one term we still haven't explicitly covered that we said we would is securable object.
>
> **[2:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=132)** So I'll just note that these are the entities those with the right privileges can manipulate in some way.
>
> **[2:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=138)** So a warehouse is a securable object and we gave Tasty DE the ability to create this object.
>
> **[2:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=145)** We could have granted Tasty DE the ability to use a database, or we could have granted Tasty DE ownership of a schema, and thus, all powers related to that schema, including dropping that schema, et cetera.
>
> **[2:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=155)** Okay, that's it for RBAC, and honestly, that was more fun than I expected.
>
> **[2:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=159)** It's actually kind of satisfying to run those show grants to role commands and see exactly what a role can do and what it can't.
>
> **[2:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=167)** We've covered a lot of ground on this topic.
>
> **[2:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=169)** One, we learned about securable objects, roles, privileges, and users.
>
> **[2:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=174)** Two, we learned about the system defined roles, org admin, account admin, security admin, user admin, sys admin, public.
>
> **[3:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=182)** Three, we learned how to assume a role.
>
> **[3:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=185)** Four, we learned how to create a new role.
>
> **[3:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=188)** Five, we learned how to grant privileges to a role.
>
> **[3:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=191)** Six, we learned how to show what privileges a role has been granted, and seven, we learned how to grant a role to a user.
>
> **[3:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=198)** That's a lot of stuff.
>
> **[3:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=200)** We're not quite RBAC black belts, but we're probably at least RBAC blue belts or something.
>
> **[3:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/role-based-access-control-rbac-part-ii-tether?u=76281980&t=207)** Great job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (7), [[Snowflake]] (1), [[Databases]] (1), database (1)
> **Env Vars:** rbac (3)
> **Cross-References:** in the last (1), we talked about (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - let (1)
> **Non-Speech:** (upbeat music) (1)


### 16. Snowpark DataFrames and VS Code Extension

[↑ Back to Table of Contents](#table-of-contents)

#### VS Code extension
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=1)** - So far in this course, we've worked exclusively inside the Snowflake browser-based UI, Snowsight, but there are many other ways to experience Snowflake.
>
> **[0:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=10)** For example, Snowflake provides a bunch of drivers, like JDBC, Node.js and the Snowflake connector for Python that you can use to access Snowflake from your preferred development environment and in your preferred language.
>
> **[0:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=23)** We're not going to spend time right now covering how to access Snowflake from a Jupyter Notebook or PyCharm or a whole host of other IDEs, but I do want to talk about Visual Studio Code, which I'll call VS Code going forward, because there's a Snowflake extension for VS Code that Snowflake maintains.
>
> **[0:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=39)** This Snowflake extension means that working with Snowflake in VS Code is especially straightforward and convenient.
>
> **[0:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=46)** And I'll be honest, I always feel pretty cool when I'm working in VS Code.
>
> **[0:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=50)** Not as hardcore as just living life in a text editor like Emacs or Vim and pushing code directly to GitHub from there, but still, pretty cool.
>
> **[0:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=58)** Quick aside, it took me a long time in my tech journey to realize that VS Code, which is also known as Visual Studio Code, is different from Visual Studio.
>
> **[1:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=68)** VS Code is a lighter-weight open source version that lets you download extensions to get cool functionality that makes it much more than just a text editor.
>
> **[1:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=76)** So the first thing we need to do is to download VS Code.
>
> **[1:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=80)** We'll just go to code.[visualstudio.com/download](https://visualstudio.com/download) and select the version that fits our machine.
>
> **[1:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=85)** For me, that's the Mac version.
>
> **[1:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=88)** What one does after downloading the file depends on whether you're using a Mac, a PC, or a Linux machine.
>
> **[1:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=93)** It's straightforward either way, but I'll share the Mac approach here.
>
> **[1:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=96)** We'll just go to the downloads folder, then double click on the file, and we'll see the application pop up.
>
> **[1:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=102)** We drag it from our downloads folder to our applications folder, then double click on the Visual Studio Code app to launch it.
>
> **[1:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=111)** Okay, great, so now we're in VS Code.
>
> **[1:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=113)** We should see a welcome page.
>
> **[1:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=114)** If we go to the left hand side of the screen, we'll see five icons.
>
> **[1:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=118)** The first one is the Explorer and it lets us look through our folders and files.
>
> **[2:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=123)** The second is a search bar that lets us search through open files or folders.
>
> **[2:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=127)** The third is the tab that makes it easy to use Git in VS Code for version control.
>
> **[2:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=132)** The fourth lets us run and debug a file.
>
> **[2:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=135)** And the last is the one I want to focus on for a moment.
>
> **[2:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=138)** This is where we can search for and install extensions to make our VS Code life easier.
>
> **[2:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=144)** We can download auto complete extensions for different languages.
>
> **[2:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=147)** We can download an extension that lets us run a Jupyter Notebook inside VS Code.
>
> **[2:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=152)** But the one I want to download now is the Snowflake extension.
>
> **[2:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=156)** If we search for Snowflake, we'll see that the first result is just called Snowflake and this has a blue check mark signifying that it's been verified as made by the same owner as [snowflake.com](https://snowflake.com).
>
> **[2:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=167)** Awesome.
>
> **[2:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=168)** Okay, so we'll click the blue install button.
>
> **[2:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=170)** We now see a getting started checklist on the Snowflake extensions welcome page.
>
> **[2:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=175)** So let's do the first step and add our account.
>
> **[2:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=178)** We can find our account name by going to Snowsight, going to the bottom right, hovering over account, hovering over our account's name, and then clicking on the little copy account identifier button.
>
> **[3:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=190)** Then we paste that into the VS Code slot for account, but we need to make sure if there's a period between the first and last portions of the account identifier that we switch that to a dash.
>
> **[3:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=200)** If you already have a dash there, awesome, you can happily move on with your life.
>
> **[3:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=204)** After we submit that, we'll see that we need to enter our username and password, and then we're ready to get going.
>
> **[3:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=210)** So let's go to file at the top of the screen and select new file.
>
> **[3:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=214)** Then click on Snowflake SQL file.
>
> **[3:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=217)** If we go over to the left side of the screen, we can see the database objects we've been working with so far in the course.
>
> **[3:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=223)** This is a neat benefit of using the Snowflake extension for VS Code.
>
> **[3:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=227)** We get stuff like this out of the box.
>
> **[3:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=229)** If we toggle down to Frostbyte_Tasty_Bytes, Analytics, Views and hover over Menu_V, we can copy that to the clipboard and paste it in our file.
>
> **[3:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=239)** Then we just type SELECT * FROM and add the semicolon and run that line using Command + Enter on a Mac or Control + Enter on a PC.
>
> **[4:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=247)** Just like in Snowsight, you'll see the results shown down below.
>
> **[4:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=251)** We can also see some details about the query in the bottom right.
>
> **[4:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=255)** Pretty cool.
>
> **[4:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=257)** So what makes the Snowflake extension so cool?
>
> **[4:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=259)** Well, for one thing, it has built-in auto complete.
>
> **[4:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=262)** So if we type in SELECT * FROM FROS, we can then auto complete that and then we can put a dot and see the schema options and then we can put a dot and see the tables reviews.
>
> **[4:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=273)** Auto complete is great.
>
> **[4:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=275)** Another neat thing is that we can hover over keywords and built-in functions and it will show a link to the documentation for those.
>
> **[4:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=282)** We can also see the query history in the bottom left, which is useful.
>
> **[4:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=286)** Those are just some of the ways the extension is helpful, but taken together, they make for a pretty sleek developer experience.
>
> **[4:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=293)** The last thing I want to mention is that we can change the session context through the VS Code UI.
>
> **[5:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=300)** For example, if we hover over a database name in the object explorer, we'll see a green arrow that says Snowflake Set Execution Context.
>
> **[5:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=308)** If we click that, that database will become the default if we don't specify a database in a query, say.
>
> **[5:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=315)** We can also go up and switch our current role from within the UI.
>
> **[5:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=319)** Pretty neat.
>
> **[5:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=321)** Look at us.
>
> **[5:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=322)** We now know how to install VS Code and the VS Code Snowflake extension and we can describe the extension UI.
>
> **[5:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=329)** We also know how to use the extension to, one, sign into Snowflake, two, execute Snowflake SQL code, three, examine the SQL query history, four, change the session context, and five, navigate the database explorer.
>
> **[5:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=345)** All that being said, by no means do you need to use VS Code to work with Snowflake.
>
> **[5:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=350)** You can use our drivers and connectors to work from wherever you want, or you can work directly from Snowsight, which I will say, I have become a big fan of.
>
> **[5:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=359)** So just know among your many options, Snowsight and VS Code with the Snowflake extension are great ones and Snowflake actively supports them.
>
> **[6:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/vs-code-extension?u=76281980&t=369)** (mid-tempo beats music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (25), database (5), [[Search]] (4), [[SQL]] (3), [[Java Database Connectivity (JDBC)|Jdbc]] (1)
> **Tools:** vs code (18), visual studio (4), jupyter (2), pycharm (1), emacs (1)
> **UI Navigation:** go to (4), click on (2), select the (1), toggle (1)
> **CLI Commands:** make (3), node (1), python (1), git (1), find (1)
> **Env Vars:** sql (3), select (2), jdbc (1), fros (1)
> **Definitions:** is a  (3), known as (1)
> **Prerequisites:** install (3), getting started (1)
> **Analogies:** for example (2), just like (1)

#### Snowpark DataFrames: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=0)** - In this video, we're going to learn about Snowpark DataFrames.
>
> **[0:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=4)** You've probably figured this out by now, but at Snowflake, we use lots of snow imagery.
>
> **[0:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=9)** My hope is that as you move through this section and hear the word Snowpark, Snowpark, Snowpark again and again, you won't think of cold and ice and loneliness unless you live in a crowded, tropical country, in which case, maybe those sound desirable to you.
>
> **[0:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=21)** Instead, I hope you'll think of spending the day hugged by a warm coat, enjoying the crisp air.
>
> **[0:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=27)** I hope you'll think of spending the evening cozy and warm sipping from a hot drink with friends and family nearby, friends and family who are enjoying each other's company, laughing, laughing with you, not at you, they assure you.
>
> **[0:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=36)** I hope you'll think of that.
>
> **[0:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=38)** In any case, before we talk about spar DataFrames, I wanted to talk more about the term Snowpark, since we use it a bunch at Snowflake, and it's important to know how to interpret it when you hear it.
>
> **[0:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=48)** The best way to think about Snowpark is as a set of different non-SQL capabilities, so Python, et cetera, you can use in Snowflake.
>
> **[0:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=56)** We actually covered or mentioned a few of these already in this course, Python UDFs, Python stored procedures, though I didn't call them out as falling under the Snowpark umbrella at the time.
>
> **[1:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=66)** In my experience when someone says Snowpark, you should think, "Okay, now I know this person's talking about non-SQL programming in Snowflake," but you'll need to wait for them to specify which aspect of Snowpark they're talking about before you can be 100% sure where the discussion is going.
>
> **[1:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=82)** So in addition to Snowpark Python UDFs, Snowpark Python stored procedures, and Snowpark DataFrames, which we'll cover now, in future videos, we'll talk about Snowpark ML and Snowpark Container Services.
>
> **[1:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=93)** Those aren't everything in the Snowpark world, but they make up a good chunk of it.
>
> **[1:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=97)** Okay, now let's jump into Snowpark DataFrames.
>
> **[1:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=100)** Snowpark DataFrames is a library that helps you transform data.
>
> **[1:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=104)** To contextualize this, it's good to think about data engineering works having three parts, ingestion, transformation, and delivery, ITD.
>
> **[1:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=111)** Ingestion refers to gathering data, transformation refers to cleaning, changing, and preparing that data, and delivery refers to handing over a finished data product, dataset, et cetera, to a customer or system like an analyst or an app.
>
> **[2:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=125)** So Snowpark DataFrames are useful in the middle step of that process, the transformation part.
>
> **[2:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=130)** Why is it worth learning about Snowpark DataFrames?
>
> **[2:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=133)** I think there are a few answers to this.
>
> **[2:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=135)** One, if you're used to doing transformations with DataFrames like pandas, it's good to be aware that Snowflake has an expressive DataFrame API that's efficient and scales well.
>
> **[2:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=145)** Two, if you're partial to manipulating data in a language other than SQL, like Python, Java, or Scala, you might prefer Snowpark DataFrames.
>
> **[2:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=153)** And three, if you learn about them and decide you're not a big fan, it's still helpful to be familiar with them because you'll see them a bunch in the Snowflake ecosystem in code examples, et cetera, and it's good to have some sense of what you're looking at when you run into them.
>
> **[2:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=165)** We're going to work with the Python flavor of Snowpark DataFrames, though, as I mentioned, you could work in Java or Scala as well, and to learn about Snowpark DataFrames, we're going to use something we haven't used thus far in the course, a Python worksheet.
>
> **[2:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=178)** In our case, Python worksheets are convenient because they have the Snowpark library preinstalled.
>
> **[3:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=185)** Enough talking, let's see an example.
>
> **[3:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=187)** (text whooshing) Okay, so we open up our Python worksheet, and immediately you can see the import statements at the top.
>
> **[3:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=194)** If you're a Python user, this is always a little comforting because you can be like, "Ah, I'm in Python land, I'm home."
>
> **[3:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=201)** Take off your shoes, put your feet up by the fire.
>
> **[3:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=204)** Here's a nice, warm drink of Snowpark DataFrames.
>
> **[3:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=208)** Here, we're importing snowflake.snowpark.
>
> **[3:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=211)** One way that Python worksheets differ from SQL worksheets is that you can't run them piece by piece.
>
> **[3:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=217)** Running one part runs the whole thing, so that's a constraint we'll have to get used to.
>
> **[3:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=222)** In any case, let's set our context at the top to our FROSTBYTE_TASTY_BYTES database and the ANALYTICS schema, and then let's start having some fun with Snowpark DataFrames.
>
> **[3:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=232)** The first thing I want to do is create a DataFrame from one of our existing SQL tables.
>
> **[3:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=236)** The syntax to do that is the name of the new DataFrame, then equals, then session.table, with the name of the table in parentheses.
>
> **[4:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=245)** I included the database, schema, and table name, though the context is already set to this database, so we could have just used the schema and table name.
>
> **[4:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=253)** Now instantly, a ton of questions are likely popping up.
>
> **[4:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=257)** We called session.table, but what is session?
>
> **[4:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=260)** When you work outside Snowsight, the session object is really, really important because it includes all of your connection details.
>
> **[4:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=267)** You need to create your table from a session so you have all the right permissions to use that table.
>
> **[4:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=272)** Here, because we're inside Snowsight, we created the session automatically when we defined main above, so it's a different situation.
>
> **[4:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=280)** I wouldn't worry too much about it.
>
> **[4:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=282)** We can't learn everything in this one course, and the main thing I want you to focus on here is the DataFrame syntax after you've already pulled in your table.
>
> **[4:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=290)** Another question you might have is what is .show?
>
> **[4:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=294)** So Snowpark DataFrames differ from say, pandas DataFrames in that Snowpark DataFrames execute lazily.
>
> **[5:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=302)** You can add a filter statement to a DataFrame, we'll talk about filtering in a moment, or add an aggregate statement, talk about that too, and if you run that command, Snowflake will record that logic, but it won't actually compute the results until you run something like .show or .collect.
>
> **[5:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=319)** So it's lazy in that it waits for you to explicitly ask it to compute something.
>
> **[5:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=325)** This could be annoying if you're used to eager execution where you don't have to explicitly ask it to do the computation, but because lazy execution builds up chains of commands before you actually execute them, it can identify optimizations that aren't available in eager systems.
>
> **[5:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=340)** A couple of other quick comments, you might notice that we have df_table.show in there and also a return statement.
>
> **[5:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=348)** When I first encountered this, I thought this sounded duplicative.
>
> **[5:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=351)** df_table.show is going to basically print the table, so why do we need to also return the table?
>
> **[5:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=358)** This has to do with Python worksheets.
>
> **[6:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=360)** If you scroll up to the top, you'll see that the Python worksheet has a Settings dropdown.
>
> **[6:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=365)** If we click on that, you'll see that the handler is main, and if we scroll over that, we'll see that the handler is defined as the function that will be called when executing this worksheet.
>
> **[6:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=374)** Okay, that makes sense, it felt like that's what was happening when we ran the worksheet last time, like it executed main, and now we know why.
>
> **[6:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=381)** But right below that, you'll notice that there's a specified return type of Table.
>
> **[6:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=386)** The other possible return types are String and Variant.
>
> **[6:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=389)** So Python worksheets require you to have a handler, the function that gets called when the worksheet is run, and they require you to have a return statement.
>
> **[6:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=398)** To make this feel less abstract, let's comment out the return statement, then let's run this worksheet again.
>
> **[6:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=404)** We get an error, Handler did not return a Snowpark DataFrame, but when we look closely, we can see that there's a PY, Python Output tab next to results.
>
> **[6:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=415)** If we click on that, we can see that the df_table.show did something.
>
> **[7:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=420)** It displayed an output that got recorded here, separate from the table that didn't get returned this time, because we commented out the return statement.
>
> **[7:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=429)** Now let's switch that and instead, comment out the df_table.show.
>
> **[7:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=434)** Now we have a result, but when we click on PY Output, Python Output, we don't see anything.
>
> **[7:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=441)** So it seems like executing main and returning a DataFrame can operate similarly to explicit execution commands like .show or .clicked.
>
> **[7:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-i?u=76281980&t=449)** (text whooshing) So I know I've just done a lot of talking, but don't worry, we're going to be much more hands-on again coming up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (18), [[Snowflake]] (8), [[SQL]] (5), data (5), database (3)
> **CLI Commands:** python (18), make (2)
> **Env Vars:** sql (5), itd (1), api (1), frostbyte_tasty_bytes (1), analytics (1)
> **UI Navigation:** click on (3), scroll up (1), dropdown (1)
> **Code Identifiers:** df_table (4)
> **Definitions:** refers to (2), is a  (1), defined as (1)
> **Cross-References:** coming up (1)
> **Warnings:** be aware (1)

#### Snowpark DataFrames: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=0)** - In the previous video, we talked about how to use Snowpark DataFrames in Python worksheets.
>
> **[0:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=5)** Now we're going to focus much more on the Snowpark DataFrames API.
>
> **[0:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=11)** Earlier, we used session.table to pull on a table from our database.
>
> **[0:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=15)** Another way to do that would've been to run session.sql and put in a SQL query.
>
> **[0:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=22)** Let's try that instead, but this time, we'll add a limit so we can tell that we've made a change.
>
> **[0:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=27)** Df_table2 = session.sql, parenthesis, "SELECT * FROM FROSTBYTE_TASTY_BYTES.RAW_POS.MENU LIMIT 5", parenthesis.
>
> **[0:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=34)** We'll also change the return statement to return df_table2.
>
> **[0:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=38)** Cool, so notice that we were able to pull the data this way, and this time, we returned five rows.
>
> **[0:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=44)** So it's definitely returning df_table2.
>
> **[0:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=47)** And if we hop over to PY output, Python output, we'll see more than five rows.
>
> **[0:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=51)** So that's the result of .show on the original table.
>
> **[0:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=54)** And session.sql doesn't just run SELECT commands.
>
> **[0:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=57)** You can do plenty of other things like create a table, et cetera.
>
> **[1:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=60)** Let's do that.
>
> **[1:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=68)** Session.sql will create or replace table, we'll call it EMPTY_TABLE.
>
> **[1:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=74)** And if we go over to TEST_DATABASE.test schema, we can see that there.
>
> **[1:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=85)** Okay, so now let's manipulate our menu table.
>
> **[1:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=88)** Let's just pull out specific rows.
>
> **[1:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=90)** To do this, we use the filter method, but we'll first need to import a function called col, short for column.
>
> **[1:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=97)** Let's just pull the menu items associated with the Freezing Point truck brand.
>
> **[1:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=103)** Df_table = df_table.filter, parenthesis, col("TRUCK_BRAND_NAME") == "Freezing Point", parenthesis.
>
> **[1:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=111)** Notice that inside filter, we're putting the conditions that have to be true for a particular row to be in the result.
>
> **[1:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=119)** And here, we're specifying that the column called TRUCK_BRAND_NAME has to equal Freezing Point.
>
> **[2:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=125)** We get 10 results.
>
> **[2:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=127)** Now what if we only wanted two particular columns, the MENU_ITEM_NAME and the ITEM_CATEGORY for example?
>
> **[2:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=133)** For that, we use a select method.
>
> **[2:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=136)** So filter and select are similar in that they help us pull a subset of the data, but where filter pulls rows, select pulls columns.
>
> **[2:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=145)** Select is nice and straightforward.
>
> **[2:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=147)** All we're doing here is using col to specify which columns we want select to pull out for us.
>
> **[2:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=152)** Df_table = df_table.select, and then the column MENU_ITEM_NAME and the column ITEM_CATEGORY.
>
> **[2:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=159)** And there you go, we now have just those two columns we wanted.
>
> **[2:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=163)** And a cool thing about the Snowpark DataFrame syntax is that you can chain these methods.
>
> **[2:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=169)** Chaining means you apply one after the other in the same line of code.
>
> **[2:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=172)** If we combine our last filter and select method calls, we'll get the intersection of the two.
>
> **[2:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=177)** So the two columns we want, but only for the Freezing Point truck brand.
>
> **[3:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=181)** Df_table = df_table.filter, and then filter on just the column of ("TRUCK_BRAND_NAME") == "Freezing Point", and then .select and pull out just those two columns, MENU_ITEM_NAME and the column ITEM_CATEGORY.
>
> **[3:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=196)** So we're filtering, and then the .select method is applied to the result of that filtering.
>
> **[3:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=201)** Awesome. 10 rows, two columns exactly like we wanted.
>
> **[3:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=205)** The Snowpark DataFrame syntax is very extensive, and we're just getting a taste of it here.
>
> **[3:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=210)** We didn't cover group_by or how to handle missing values or allow data types or ordering or sampling.
>
> **[3:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=217)** So if this is exciting to you, I recommend you do some related tutorials or quick starts on the Snowflake website or read through the Snowflake docs.
>
> **[3:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=223)** But I do want to cover one more thing, and that's how to take the work you've done and write it back to your database and schema as a table.
>
> **[3:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=232)** There are a few ways to do this, but we use a DataFrame method called write.save_as_table, then we just have to specify the table name.
>
> **[3:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=239)** I'll put the fully qualified table name since I want to save this in a different database and schema from our current context.
>
> **[4:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=246)** Okay, so df_table.write.save_as_table, parenthesis, "TEST_DATABASE.TEST_SCHEMA.FREEZING_POINT_ITEMS", mode="append", parenthesis.
>
> **[4:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=255)** You'll notice that we specified a mode.
>
> **[4:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=257)** There are several choices here.
>
> **[4:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=258)** One of the other choices is overwrite, but I chose append which will add the data to an existing table if one exists, or it will make a new one, which is what it did here.
>
> **[4:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=269)** Cool, so that's all we're going to cover for Snowpark DataFrames.
>
> **[4:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=273)** To recap, here's what we learned across our two Snowpark DataFrame videos.
>
> **[4:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=279)** One, Snowflake provides DataFrame APIs called Snowpark DataFrames that you can use to do transformations in Python, Java, and Scala.
>
> **[4:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=288)** Two, Python worksheets come pre-installed with Snowpark, so they're an easy way to start learning Snowpark DataFrames.
>
> **[4:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=296)** Three, you can load a table as a Snowpark DataFrame using session.table or session.sql.
>
> **[5:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=303)** Four, session.sql lets you run more than just SELECT commands.
>
> **[5:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=307)** For example, you can create a table.
>
> **[5:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=310)** Five, Snowpark DataFrames are lazily executed, so no computation happens until you call .collect, .show, or something similar.
>
> **[5:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=319)** Six, the DataFrame filter method combined with col lets you pull specific columns.
>
> **[5:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=326)** Seven, the DataFrame select method combined with an expression lets you pull specific rows.
>
> **[5:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=332)** Eight, Snowpark DataFrames support method chaining.
>
> **[5:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=336)** Nine, you can save a Snowpark DataFrame as a table in a database and schema with the write.save_as_table method.
>
> **[5:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=343)** Look, that's nine things. I'm running out of fingers.
>
> **[5:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=346)** That's how much you've learned.
>
> **[5:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=348)** You're a champ, you're doing awesome, and it's only going to get better from here.
>
> **[5:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-dataframes-part-ii?u=76281980&t=351)** (steady music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Python (Programming Language)|Python]] (4), database (4), data (4), [[Snowflake]] (3)
> **Env Vars:** select (3), truck_brand_name (3), menu_item_name (3), item_category (3), test_database (2)
> **Code Identifiers:** df_table (4), save_as_table (3), group_by (1)
> **File Paths:** session.sql (6)
> **CLI Commands:** python (4), make (1)
> **SQL:** select (3)
> **Cross-References:** previous video (1), we talked about (1)
> **Analogies:** for example (2)


### 17. Snowflake CLI

[↑ Back to Table of Contents](#table-of-contents)

#### Snowflake CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=0)** - All right, time to get real.
>
> **[0:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=2)** There are a few moments where I feel more legit as a developer than when I open up my terminal and start doing stuff.
>
> **[0:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=9)** You might think less of me, because of this confession, but I even feel cool when I'm just using the command line to change directories and list the files in those directories and maybe delete a file or two.
>
> **[0:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=17)** You know, sprinkle a little rm here and there.
>
> **[0:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=20)** I certainly feel cool when I'm using the terminal to make Git commits or clone Git repos, and if I successfully use Git rebase, I feel like I'm basically the next Neo from "The Matrix."
>
> **[0:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=29)** So with all of that said, I'm feeling very legit that we're about to use Snowflake's command line interface, which I'll refer to as the Snowflake CLI from here on out.
>
> **[0:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=38)** To find out why this is useful and what it lets you do, let's jump into our terminal.
>
> **[0:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=42)** I do that by typing Command + Space on my Mac and then typing in terminal in the search bar.
>
> **[0:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=47)** I want to use the Snowflake CLI's help command, in a sort of let's solve this mystery way, to uncover bit by bit what the Snowflake CLI is useful for.
>
> **[0:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=56)** (graphic swoosh) Okay, so here's my Mac command line.
>
> **[0:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=59)** The first thing I want to do is pip install the Snowflake command line tool.
>
> **[1:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=64)** I do this by typing pip install snowflake-cli-labs.
>
> **[1:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=69)** Here I'm being a little bit sloppy by not working in a virtual environment through Conda or Pyenv, which is normally a good idea, because it helps you isolate your dependencies so you don't wind up with version conflicts.
>
> **[1:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=80)** Now that I've installed the Snowflake CLI, let's learn more about what it does by typing snow --help.
>
> **[1:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=88)** You could see that it says it's the Snowflake CLI for developers, and then it lists a bunch of options and commands.
>
> **[1:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=94)** Let's first try out these options, starting by checking the version of the CLI we're using, snow --info.
>
> **[1:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=102)** Cool, we can see the version and some other info, including the location of our configuration file.
>
> **[1:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=107)** Let's copy that path and see what's in our Snowflake CLI configuration file right now.
>
> **[1:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=113)** On my Mac, I do that by running cd, and then the path.
>
> **[1:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=117)** The cd stands for change directory, and it lets me hop to the right location for the file.
>
> **[2:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=122)** This will work on a Windows machine as well.
>
> **[2:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=125)** Then I type ls, which stands for list to see all the files in that folder.
>
> **[2:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=130)** It looks like it's just the config file. Okay, cool.
>
> **[2:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=133)** So now I'm going to use Vim, a command line text editor that you don't have to know for this course, to open the file and see what's inside.
>
> **[2:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=141)** To do this, we just type vim, followed by the name of the file, so vim config.toml.
>
> **[2:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=147)** Looks like it's pretty empty now. That's fine.
>
> **[2:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=149)** I then type :q to quit, :q.
>
> **[2:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=154)** So I can get back to my home directory by typing cd, followed by a tilde, cd ~.
>
> **[2:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=160)** And then let's type snow --help again to keep moving forward with our detective mission to figure out what the Snowflake CLI does and how to use it, snow -help.
>
> **[2:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=171)** Okay, I think we've learned most of what we can learn from our options.
>
> **[2:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=175)** Now let's move down to the commands below.
>
> **[2:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=178)** I see a bunch of possible commands: app, connection, objects, snowpark, spcs, sql, and streamlit.
>
> **[3:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=184)** And then next to each is a description of what that one can do.
>
> **[3:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=188)** Now we're getting somewhere.
>
> **[3:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=189)** It looks like snow app somehow lets us manage a native app.
>
> **[3:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=193)** Let's run it, snow app. We get an error.
>
> **[3:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=197)** Looks like that's not enough to actually do anything.
>
> **[3:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=199)** But aha, it says we can type snow app --help to learn more about what this is for, snow app --help.
>
> **[3:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=208)** So it looks like we can initialize a Snowflake Native App project.
>
> **[3:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=212)** We haven't talked about what that is yet, but we'll learn more in a later video.
>
> **[3:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=216)** We can also open the Snowflake Native App in our browser, and more.
>
> **[3:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=220)** Let's move on to the next command, snow --help.
>
> **[3:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=224)** Okay, so it looks like the next command is connection.
>
> **[3:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=227)** Let's look at the help docs for that, snow connection --help.
>
> **[3:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=231)** This says we can add a connection to the configuration file.
>
> **[3:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=235)** Aha, we're starting to put some pieces together.
>
> **[3:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=238)** That's the file we looked at earlier using Vim, the one that's basically empty.
>
> **[4:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=242)** This makes sense, if we want to use the command line on our local machine to affect Snowflake in the cloud, we'll have to put our Snowflake credentials somewhere and actually connect.
>
> **[4:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=252)** Let's keep going, snow --help.
>
> **[4:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=255)** The next category is object.
>
> **[4:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=258)** Let's learn about that, snow object --help.
>
> **[4:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=261)** This says we can manipulate objects, list them, drop them, and more.
>
> **[4:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=265)** And remember, Snowflake objects are what we've spent a lot of this course learning about.
>
> **[4:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=269)** They're warehouses, stages, databases, schemas, et cetera.
>
> **[4:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=273)** So I think you get the point.
>
> **[4:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=274)** Let's just look at the main descriptions.
>
> **[4:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=276)** It looks like running the snow snowpark command lets us manage stored procedures and functions.
>
> **[4:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=282)** We haven't talked about Snowpark Container Services yet and won't really get into them in this course, but you can use the snow spcs command to manage your Snowpark containers.
>
> **[4:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=292)** This sql should make sense, you can run a SQL command from the command line if you want to.
>
> **[4:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=297)** And we'll talk about streamlit in more detail later in the course.
>
> **[5:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=300)** But you can manage your Streamlit in Snowflake web apps here.
>
> **[5:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=303)** (graphic swoosh) Okay, so we've covered a lot of material and it's time to zoom out for a moment.
>
> **[5:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=309)** We've seen that the Snowflake CLI, lets you manage apps, connections, objects, Snowpark, SPCS, and Streamlit, and it lets you execute SQL queries.
>
> **[5:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=319)** But why would you want to do this through a CLI?
>
> **[5:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=323)** For one thing, having the Snowflake CLI tool makes it easy for you to version control your Snowflake projects.
>
> **[5:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=329)** Another benefit is that having a command line tool lets you customize lots of aspects of your workflows, which matters a lot to some builders.
>
> **[5:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=336)** For me personally, one of the aspects of the Snowflake CLI that I think makes it especially useful is that it's open source.
>
> **[5:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=343)** So community contributions can make it a better and better way to interact with Snowflake over time.
>
> **[5:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=348)** So that's all we'll talk about the Snowflake CLI now.
>
> **[5:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=351)** Much of its usefulness is likely opaque, because we haven't learned about Snowpark Container Services, Native Apps, or Streamlit.
>
> **[5:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=359)** But as you move forward in your Snowflake learning journey, and particularly as you learn more about those three topics, I'm hopeful that this little Snowflake CLI seed we planted in this video will grow.
>
> **[6:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=370)** And one day you'll think, wow, the Snowflake CLI is so cool and useful.
>
> **[6:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=375)** Also, look at me working in the command line.
>
> **[6:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=377)** When did I become such a legit developer?
>
> **[6:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cli?u=76281980&t=379)** (graphic swoosh)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (25), [[CLI]] (16), next (5), cd (4), [[SQL]] (4)
> **Env Vars:** cli (15), sql (2), spcs (1)
> **Tools:** command line (9), terminal (4), vim (4)
> **CLI Commands:** cd (4), make (3), git (3), pip (2), rm (1)
> **Definitions:** stands for (2), is a  (1)
> **UI Navigation:** open the (2)
> **Prerequisites:** install (2)
> **File Paths:** config.toml (1)

#### Wrap-up of Snowflake feature overview
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=0)** - Okay.
>
> **[0:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=1)** Wow, we just covered a lot of material.
>
> **[0:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=4)** Pretty soon we'll be unstoppable Snowflake juggernauts.
>
> **[0:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=8)** We learned about many Snowflake features as well as a few more Snowflake objects that we can add to the list of building blocks we picked up in the first module of the course.
>
> **[0:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=16)** We learned about using time travel to return to our data in its past state, which is especially useful if you've made a mistake you want to undo.
>
> **[0:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=23)** And we learned about how data retention is what makes this possible.
>
> **[0:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=27)** We learned about the differences between permanent, temporary, and transient tables.
>
> **[0:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=32)** Among other differences, permanent tables can have a retention period of up to 90 days if you're in the enterprise edition.
>
> **[0:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=40)** Transient and temporary tables cannot.
>
> **[0:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=43)** And temporary tables only persist as long as your session lasts.
>
> **[0:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=48)** We learned about cloning tables, schemas, and databases.
>
> **[0:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=51)** Specifically that cloning is zero copy and Snowflake tracks subsequent changes.
>
> **[0:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=57)** We learned how to use resource monitors to put guardrails on our credit usage.
>
> **[1:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=62)** We learned how to create user-defined functions, UDFs and user-defined table functions, UDTFs when we need a custom function.
>
> **[1:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=71)** We learned about stored procedures and how you can run commands like alter, create, drop, insert, and copy into with those, but you can't with UDFs.
>
> **[1:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=81)** We also learned that stored procedures aren't required to return a value.
>
> **[1:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=84)** But like UDFs, you can write their internals in multiple languages like Python, Java, JavaScript Scholar, or SQL.
>
> **[1:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=92)** We learned about how simple it is to work with role-based access control in Snowflake.
>
> **[1:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=96)** We learned how to download VS code and connect to Snowflake through the Snowflake VS Code extension.
>
> **[1:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=103)** We learned how to use Snowpark Dataframes for data manipulation.
>
> **[1:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=106)** We learned that the Snowflake CLI enables us to do lots of Snowflake work through our command line, including a bunch of kinds of work we haven't learned about yet.
>
> **[1:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=116)** I think you should be proud.
>
> **[1:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=117)** You're getting to the end of the course, and at the very least, you're becoming familiar with lots of critical Snowflake objects and features.
>
> **[2:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=124)** And I'll add that, even though I don't know you, I'm proud of you for coming this far.
>
> **[2:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=128)** I probably shouldn't say I'm like a proud father because I'm only in my mid 30s and my guess is not too many of you are younger than say 10.
>
> **[2:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=134)** So what I'll say is I'm like a proud uncle or nephew, a proud uncle nephew.
>
> **[2:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-snowflake-feature-overview?u=76281980&t=139)** Very proud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (10), data (2), [[Databases]] (1), [[Python (Programming Language)|Python]] (1), [[Java]] (1)
> **Tools:** vs code (2), command line (1)
> **Env Vars:** sql (1), cli (1)
> **CLI Commands:** python (1)
> **Prerequisites:** required to (1)
> **Speakers:** - okay (1)
> **Non-Speech:** (upbeat music) (1)


### 18. Data Engineering with Snowflake

[↑ Back to Table of Contents](#table-of-contents)

#### Intro to overview of builder workloads
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=4)** - Hooray, hooray.
>
> **[0:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=12)** You've made it to the final module of the course.
>
> **[0:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=14)** I think this is very exciting, both because you've come a long way.
>
> **[0:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=17)** I mean, you've learned about the Snowflake CLI, how cool are you?
>
> **[0:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=20)** But also because you now know enough about the building blocks of Snowflake for us to get deeper into some of Snowflake's workloads.
>
> **[0:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=27)** This is extremely useful stuff to know, and I'm hoping that knowing this can help you move forward your career, whether that's getting a job at a company that uses Snowflake or becoming more effective at your current role.
>
> **[0:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=37)** This third part of the course will differ from the previous two in a few ways, so get ready for a slight change in style.
>
> **[0:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=43)** The first difference is that we'll look at the Snowflake platform through a workload specific lens.
>
> **[0:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=48)** What does that mean?
>
> **[0:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=49)** You could think of Snowflake's platform as being made up of functionality that supports a bunch of different workloads, including applications, collaboration, data engineering, data lake, Unistore, which are are hybrid tables, so they're part transactional, part analytical.
>
> **[1:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=65)** AI/ML, data warehouse and cybersecurity.
>
> **[1:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=69)** So when we take a workload specific approach, we focus on buckets of related features and tackle each bucket in turn.
>
> **[1:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=75)** This is a useful way to look at Snowflake because it makes it easier for us to create a mental map of what Snowflake does, but it comes at a cost, which is that it can make the parts seem more disconnected than they really are.
>
> **[1:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=86)** So throughout, we'll have to try to mitigate the downsides of this workload specific lens by reminding ourselves that Snowflake is one product.
>
> **[1:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=94)** The features are interconnected, and it's not the case that one kind of data practitioner is just going to use tools from one workload.
>
> **[1:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=101)** Many data scientists use data engineering functionality.
>
> **[1:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=104)** Many app developers use AI functionality and many data engineers are interested in ML.
>
> **[1:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=110)** The second way, this part of the course will differ from what's come before is in the structure.
>
> **[1:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=114)** So for each workload will have two videos.
>
> **[1:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=117)** In the first video, I'll give an overview of what can be done with that workload on Snowflake, and I'll share code snippets related to each thing we discuss.
>
> **[2:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=125)** In the second video, we'll actually use the product to explore one aspect of that workload in a hands-on way.
>
> **[2:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=131)** So if you're ever feeling like the first video for each workload is too high level, take heart, we'll be running code for that workload soon enough.
>
> **[2:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=138)** Since this is a course focused on builders, those who build pipelines, statistical models, ML models, data apps, we're going to tackle the workloads that I think of as the most buildery.
>
> **[2:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=148)** Those are data engineering, AI/ML, which we'll split into separate videos and applications.
>
> **[2:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=154)** As for the other workloads, we've actually already covered a lot of content from the data warehouse workload and the others, cybersecurity, Unistore, collaboration, data lake are important, but not the focus here.
>
> **[2:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=166)** The good news is that this won't differ in a key way, we'll still often use the Tasty_Bites-food truck data that we've been using throughout the course.
>
> **[2:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=174)** So some things change, some things stay the same.
>
> **[2:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=177)** Tasty_bites, I'll never leave you.
>
> **[2:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=179)** Here's what we'll cover in the hands-on portions.
>
> **[3:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=182)** For DE, we'll practice ingesting streaming data with Snowpipe.
>
> **[3:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=186)** For Snowflake's Gen AI workload, we'll use the Snowflake cortex LLM function called "complete" to query an LLM within Snowflake.
>
> **[3:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=194)** For Snowflake's ML workload, we'll use Snowpark ML to create an XGBoost model and make predictions about where a particular food truck will be over time.
>
> **[3:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=202)** And for Snowflake's app workload, we'll make a Streamlit app that shows us Tasty_Bites daily revenue over time by country.
>
> **[3:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=210)** Much of what I just said was likely very new, but don't worry, it will all make sense soon.
>
> **[3:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=214)** Our goal for this module isn't to cover any workload comprehensively.
>
> **[3:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=218)** We'll do more of that in future coursework, but instead for you to develop a foundational mental map of the data engineering, AI/ML, and applications work you can do with Snowflake, we'll also get some hands-on experience using a key feature from each workload.
>
> **[3:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/intro-to-overview-of-builder-workloads?u=76281980&t=233)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (16), data (10), ai (5), [[Data Engineering]] (4), [[Cybersecurity]] (2)
> **CLI Commands:** make (4)
> **Env Vars:** llm (2), cli (1)
> **Definitions:** is a  (2)
> **Non-Speech:** (upbeat music) (2)
> **Speakers:** - hooray (1)

#### Snowflake data engineering overview: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=1)** - I was never a data engineer. I was a data scientist.
>
> **[0:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=3)** But back when I was a data scientist, data engineers saved my life so many times by helping undo mistakes I've made or by creating high quality tables for me to use.
>
> **[0:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=13)** When data engineers are around, I feel warm and safe, like everything is going to be okay.
>
> **[0:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=18)** I don't drink alcohol, but if I did and a data engineer were sitting right here next to me, I would raise my glass to that data engineer and say, "Data engineer, I dedicate this video to you."
>
> **[0:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=27)** So, it's with a great deal of respect that I now cover how Snowflake supports data engineering workloads.
>
> **[0:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=32)** You might recall that in the video on Snowpark DataFrames, we talked very briefly about the ITD framework where the I, T, and D stand for ingestion, transformation and delivery.
>
> **[0:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=42)** Here we're going to focus on ingestion and transformation.
>
> **[0:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=45)** We're not going to talk about the delivery part.
>
> **[0:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=47)** And we're going to add in two other subjects we haven't explicitly covered in much detail yet, but are important for data engineering.
>
> **[0:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=53)** Orchestration and observability.
>
> **[0:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=56)** Let's dive in.
>
> **[0:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=58)** Okay, so this slide gives you a sense of the data engineering landscape at Snowflake.
>
> **[1:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=63)** It's not everything, but we've got many of the key elements.
>
> **[1:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=67)** As a refresher, this first column, Ingestion, refers to how you collect data and get it into Snowflake.
>
> **[1:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=73)** You can't do any data work without having data in your system.
>
> **[1:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=76)** The second column, Transformation, refers to cleaning and preparing that data, so it's useful for downstream purposes.
>
> **[1:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=84)** The third column, Orchestration, refers to scheduling how and when you run specific steps in your data pipeline.
>
> **[1:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=90)** So, when you ingest the data, what triggers transformations to occur, et cetera.
>
> **[1:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=94)** And the fourth column, Observability, refers to how Snowflake helps you make sure everything's running as expected and debug problems when something's gone wrong.
>
> **[1:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=104)** I'm a big believer that data practitioners get nowhere near enough opportunities for group therapy.
>
> **[1:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=109)** So, in the spirit of data therapy, I wanted to say that the world of data tooling is so vast that there could be concepts you've heard a bunch about but don't understand, so you get anxiety when they come up.
>
> **[1:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=119)** For me, observability was long like this.
>
> **[2:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=121)** I'd hear observability and panic a little, thinking that I wasn't competent because I didn't have a clear sense of what this meant.
>
> **[2:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=127)** You don't need to panic. I don't need to panic.
>
> **[2:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=129)** We'll all figure it out bit by bit.
>
> **[2:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=131)** The thing that tends to help me go most quickly from that sense of uncertainty to feeling comfortable and grounded is seeing concrete code examples.
>
> **[2:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=139)** As I come to understand what that code is doing, I think, "Okay, I see what we're doing here."
>
> **[2:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=143)** And by extension, I come to understand what people mean by the broader category that term fits into.
>
> **[2:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=147)** So, if you feel uncomfortable with any or even all of these four categories, once we look at some code snippets, I think you'll feel more grounded.
>
> **[2:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=156)** Okay, so let's focus on ingestion for a moment.
>
> **[2:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=159)** These first two types of ingestion are one, streaming and two, batch.
>
> **[2:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=163)** I've heard lots of debates about the difference between streaming and batch, and I'm not going to get too academic here.
>
> **[2:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=169)** My rough definition is that if you're ingesting your data in a streaming fashion, like with Snowpipe Streaming or the Kafka Connector, it means that your data is updating from an external source very quickly.
>
> **[3:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=181)** So, say you have data coming from Kafka and that data gets updated.
>
> **[3:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=184)** With streaming ingestion, your Snowflake data would reflect this with low latency.
>
> **[3:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=188)** We think of streaming as a spectrum.
>
> **[3:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=191)** If you're ingesting your data in a batch fashion, like with COPY in two, it means that your data is updating less frequently.
>
> **[3:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=198)** So, the data in your S3 bucket might get updated and then have another update.
>
> **[3:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=202)** And on some cadence, every hour, every day, the data will get pulled into Snowflake.
>
> **[3:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=208)** You'll see Snowpipe listed here under streaming.
>
> **[3:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=210)** An important thing to know here, and something that confused me for a while is that there are a few different flavors of Snowpipe at Snowflake.
>
> **[3:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=217)** There's the Snowpipe streaming API, which you can access through the Java SDK, and there's regular Snowpipe.
>
> **[3:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=224)** We'll get into the details of regular Snowpipe in the next video, but we won't cover the Snowpipe streaming API in this course.
>
> **[3:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=231)** Okay, so the next group here are the Snowflake Native Connectors.
>
> **[3:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=235)** Snowflake provides lots of ways to connect through other systems.
>
> **[3:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=238)** Through interfaces like Python, ODBC, SQLAlchemy.
>
> **[4:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=242)** Snowflake also has native connectors to connect to ServiceNow and to pull raw or aggregated Google Analytics data, for example.
>
> **[4:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=249)** If this is confusing to you, you don't know what ODBC is say?
>
> **[4:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=254)** Don't worry about it.
>
> **[4:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=255)** This is not the focus of this course, but I wanted to mention that these exist.
>
> **[4:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=259)** And finally, there's a whole world of data sharing that Snowflake supports.
>
> **[4:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=263)** You can share data from your account in a zero copy way, meaning they can access the data you've shared in a read-only fashion directly from the source, both in the Snowflake Data Marketplace and through direct shares.
>
> **[4:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=275)** So, here's some quick examples of code snippets to make this concrete.
>
> **[4:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=279)** If you want to use regular Snowpipe, you can just use the CREATE PIPE command and then set up your pipe to copy data from a stage to a table.
>
> **[4:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=287)** It's not rocket science and you don't need to be intimidated.
>
> **[4:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=290)** Nothing that different from what we've already covered.
>
> **[4:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=294)** Below that, I'm showing a COPY INTO command we already ran in this course when we copied the tasty_bytes menu data from a stage into the target table.
>
> **[5:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=303)** This code here is an example of how you can go to a Python interface and connect to Snowflake through SQLAlchemy.
>
> **[5:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=309)** After this, there are ways you can push data from another source to Snowflake using SQLAlchemy.
>
> **[5:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=314)** And down below is an example of creating a database from a share that another count has created.
>
> **[5:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=321)** So, we talked about some of the ways the Snowflake platform lets you do data ingestion.
>
> **[5:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=325)** And coming up, we'll cover transformation, orchestration, and observability.
>
> **[5:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=330)** Let's get to it.
>
> **[5:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-i?u=76281980&t=331)** (screen whooshing) (bright lively music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (35), [[Snowflake]] (15), next (3), [[Data Engineering]] (3), [[Orchestration]] (3)
> **Env Vars:** copy (2), api (2), odbc (2), itd (1), sdk (1)
> **Definitions:** refers to (4), means that (2), is an  (2)
> **CLI Commands:** make (2), python (2)
> **Cross-References:** in the next (1), we talked about (1), coming up (1)
> **Code Identifiers:** tasty_bytes (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)

#### Snowflake data engineering overview: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=0)** - In continuing our discussion about Snowflake data engineering, we're now going to cover data transformation, orchestration and observability.
>
> **[0:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=9)** First, let's talk about data transformation.
>
> **[0:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=11)** We already did a video on Snowpark dataframes, so you should be at least somewhat familiar with that.
>
> **[0:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=16)** Though I recognize we moved through that quickly, so no worries if you didn't retain much.
>
> **[0:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=20)** We've also covered UDFs and UDTFs as well as stored procedures, which are useful tools as you try to convert your data from a raw state into a more usable final form.
>
> **[0:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=31)** And of course, SQL is a powerful tool for data transformation.
>
> **[0:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=34)** It is a ton of built-in functions, and I want to include it here just so we don't overlook one of the most critical tools of them all just because it's so familiar to us.
>
> **[0:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=42)** The major item here that we haven't covered much yet is dynamic tables, though we touch on it very briefly in our video on views, since they are similar in many ways.
>
> **[0:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=51)** In fact, I think the easiest way to think about dynamic tables is to think of them as sort of similar to materialized views, but much, much more flexible.
>
> **[0:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=59)** Where materialized views update right away when a table in which their base changes, dynamic tables let you specify a refresh rate of one minute or more.
>
> **[1:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=69)** And crucially, dynamic tables can handle much more complex transformations with automated orchestration.
>
> **[1:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=75)** It only recently came together in my head that dynamic tables pair really well with streaming ingestion methods like Snowpipe because you can get really fast refresh rates for your data ingestion and really fast refresh rates for your downstream tables that depend on that data.
>
> **[1:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=90)** And everything happens without your needing to set up and maintain a lot of other orchestration.
>
> **[1:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=95)** For this reason, we could probably also have covered dynamic tables in our section on orchestration.
>
> **[1:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=100)** It's like a table with inbuilt orchestration functionality.
>
> **[1:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=105)** Okay, so here are some code snippets of these, many of which I took from earlier videos in the course.
>
> **[1:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=111)** This first one is of a Snowpark dataframe transformation, and I took it directly from the section of our course on Snowpark dataframes.
>
> **[1:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=118)** It's just selecting specific columns from a dataframe.
>
> **[2:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=121)** In this next one, you can see that we're creating a dynamic table with a refresh rate of one minute.
>
> **[2:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=127)** Snowflake is also working to drive this latency even lower.
>
> **[2:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=129)** And the best part is you don't have to rebuild anything in your pipeline.
>
> **[2:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=132)** Simply adjust a single target lag parameter here and your streaming processing will be all set.
>
> **[2:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=139)** Then you'll see a stored procedure we created earlier in the course, CREATE PROCEDURE a UDF we created earlier in the course, CREATE FUNCTION; and a SQL query we ran in our section on semi-structured data.
>
> **[2:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=151)** Now let's talk about some of the ways Snowflake helps you do orchestration.
>
> **[2:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=155)** There are a ton of open source tools you can use to orchestrate your Snowflake pipelines like Airflow, Prefect, or DBT.
>
> **[2:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=161)** But here we're going to focus on the Snowflake native tools, streams and tasks.
>
> **[2:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=166)** The key thing to know about streams is that you create a stream on a table and the stream keeps track of changes to that table, appends, deletes, updates, so that you can update downstream tables based only on those incremental changes.
>
> **[3:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=180)** I like to think of streams as a tool that keeps track of what's happened recently inside a table.
>
> **[3:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=186)** Tasks are different.
>
> **[3:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=187)** Tasks can actually do something by running stored procedures, SQL queries, et cetera, and they can do this on a particular schedule, at a particular interval, or based on when another task completes.
>
> **[3:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=198)** Streams and tasks are really powerful when combined because you can use a task to insert only those rows it pulls from a stream, meaning those rows that were identified by the stream as being newly added to a table, for example.
>
> **[3:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=212)** So you can have a task that checks every once in a while for updates to another table by looking at the stream for that table, and then it can insert those newly updated rows into a downstream table or do something else with them.
>
> **[3:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=224)** A great structure for efficient incremental data processing.
>
> **[3:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=228)** Here's some code snippets that might make this more concrete.
>
> **[3:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=232)** The syntax for creating a stream is really simple.
>
> **[3:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=235)** You just use the create stream command followed by the stream name, and then you specify the table on which you'd like to create that stream.
>
> **[4:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=242)** Creating a task is also pretty simple.
>
> **[4:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=244)** Though, there are a few more components to it.
>
> **[4:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=246)** You just use the CREATE TASK command, then you specify the warehouse you want to use.
>
> **[4:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=252)** There are also serverless tasks which don't require you to specify warehouse, but we're not covering those in this course.
>
> **[4:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=259)** You'll notice this task is set to run every minute, and what it actually does is look at the stream, pull the new rows from the associated table and insert them into this new sales table.
>
> **[4:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=270)** And finally, let's talk about some of the ways Snowflake helps you with observability.
>
> **[4:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=275)** Snowflake lets you set alerts and notifications.
>
> **[4:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=278)** An alert takes an action you specify when a condition is met.
>
> **[4:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=282)** So you could check to see if a query is taking too long and then record that in a table somewhere, or you could have it initiate sending you an email.
>
> **[4:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=290)** Notifications are fairly similar.
>
> **[4:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=292)** It's not a distinction we need to dig into here.
>
> **[4:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=295)** Snowflake also has logging functionality.
>
> **[4:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=298)** One convenient way to store and access logging is through Snowflake event tables, which lets you record messages like warnings or errors that are generated from UDFs stored procedures, et cetera, written in any one of multiple languages, Java, Python.
>
> **[5:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=311)** Similarly, you can use event tables to store trace events, which can hold really flexible event types.
>
> **[5:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=317)** So say you're running some calculation and you want to record an intermediate value to your event table.
>
> **[5:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=322)** Trace events can help you do this.
>
> **[5:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=325)** And if you have tasks that trigger other tasks, Snowflake lets you view the connections between your tasks as a DAG, a directed acyclic graph.
>
> **[5:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=335)** Some quick examples.
>
> **[5:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=336)** You can see a basic alert here, which checks every once in a while to see if the value in the table are exceeding some threshold, and then it stores those values in another table.
>
> **[5:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=346)** You can see a call to the system, send email procedure, which will send an email to a particular account with the subject line and body you specify.
>
> **[5:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=355)** You could see how to create an event table though you add values to that table through the body of the relevant UDF stored procedure, et cetera.
>
> **[6:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=363)** And then you could see an example of a DAG that helps you debug a task graph run.
>
> **[6:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=368)** Woo, that was a lot.
>
> **[6:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=369)** I don't expect you to have internalized what we just discussed, but I'm hoping that you'll come away from this topic with a few high level takeaways.
>
> **[6:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=377)** First, Snowflake provides you with ways to handle ingestion, transformation, orchestration, and observability; second, Snowflake's platform natively supports both batch and streaming ingestion, and several of the major ingestion methods are Snowpipe auto ingest, copy, standard Snowpipe, Snowflake native connectors, and data shares; third, Snowflake lets you transform data with dynamic tables, Snowpark dataframes, stored procedures, UDFs and UDTFs, and SQL functions; fourth, Snowflake lets you do data orchestration with streams and tasks; fifth, Snowflake helps you monitor your data pipelines with alerts and notifications, logging and tracing with event tables and the task DAG.
>
> **[7:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=422)** Now that we've done that whirlwind, high level overview, let's put our feet back on the ground and see what it takes to set up a standard Snowpipe to ingest some data.
>
> **[7:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-data-engineering-overview-part-ii?u=76281980&t=430)** (bright cheerful music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (16), data (10), [[Orchestration]] (8), [[SQL]] (4), [[Data Transformation]] (3)
> **Env Vars:** sql (4), create (3), dag (3), udf (2), procedure (1)
> **CLI Commands:** make (1), python (1)
> **Cross-References:** earlier in (2)
> **Definitions:** is a  (2)
> **Analogies:** it's like (1), for example (1)
> **Prerequisites:** set up (2)
> **Speakers:** - in (1)


### 19. Ingesting Data with Snowpipe

[↑ Back to Table of Contents](#table-of-contents)

#### Snowpipe: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=1)** - So in a previous video, we talked briefly about how you can ingest data with Snowpipe.
>
> **[0:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=6)** If using Snowpipe streaming, this can happen in seconds.
>
> **[0:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=9)** And if using regular Snowpipe, this can happen in under a minute.
>
> **[0:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=13)** Here we're going to test out regular Snowpipe with auto ingest equals true to see how to get this working in practice.
>
> **[0:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=19)** Let's get into it.
>
> **[0:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=21)** We're going to start all of this off in AWS because if we don't have data to ingest, then Snowpipe is not very interesting.
>
> **[0:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=28)** And I'm picking AWS just because loss of people are familiar with S3, but I should note that this works with Cloud Storage, and GCP, and Azure as well.
>
> **[0:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=38)** For a long time, I was intimidated by the idea of logging directly into the AWS console.
>
> **[0:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=43)** My data experience was mostly at big companies that created layers of abstraction between me and most third-party services, including the big cloud providers, but my worrying was mostly not justified.
>
> **[0:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=55)** You could go create an account today and start messing around, and you'll find that it's much less intimidating than you might've thought, at least that's been true for me.
>
> **[1:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=63)** (air whooshing) So here's what I've already done.
>
> **[1:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=66)** I've already created an S3 bucket called intro-to-snowflake-snowpipe, and I've put one file in that bucket called food.csv.
>
> **[1:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=75)** It's just got two columns: one that lists a food name and the other that lists a tastiness score.
>
> **[1:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=82)** I feel fine not having walked through those steps with you, because I think if you needed to, you wouldn't have too much trouble creating an S3 bucket and getting a file in there.
>
> **[1:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=91)** What might be more challenging is getting all the permission set up in your AWS account in Snowflake so that the two can communicate, at least it was for me, so here's how we do this.
>
> **[1:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=102)** We want to make sure Snowflake has identity and access management, IAM, policy permission to access your S3 bucket with GetObject, GetObjectVersion, listBucket, and getBucketLocation.
>
> **[1:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=114)** So let's navigate to the IAM service in our AWS console.
>
> **[1:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=119)** We do this by typing IAM in the search bar, and we click on the first option.
>
> **[2:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=124)** We need to go to account settings and then confirm that the security token service lists our accounts region as active.
>
> **[2:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=132)** In this case, that's US West Oregon, so we're good, cool.
>
> **[2:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=136)** So now, we click on Policies on the left-hand side of the screen under Access Management, and then we click Create Policy.
>
> **[2:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=145)** Then we create a new IAM policy named snowflake_access, and fill it with the following.
>
> **[2:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=156)** So it'll have a statement, it'll have effect, allow, and then it'll have actions, and it'll list GetObject, GetObjectVersion, listBucket, getBucketLocation.
>
> **[2:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=167)** You could see this is a step along the way to giving Snowflake permission to do four different things.
>
> **[2:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=172)** It's being allowed to GetObject and GetObjectVersion for the files in our bucket.
>
> **[2:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=176)** That asterisk means the permissions apply to all files in that bucket.
>
> **[3:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=180)** And it's being allowed to listBucket and GetBucketLocation for the intro-to-snowflake-snowpipe S3 bucket itself.
>
> **[3:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=189)** So now, we click Next.
>
> **[3:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=190)** Let's make snowflake_access the policy name.
>
> **[3:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=198)** So now, we've created an access policy.
>
> **[3:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=200)** But right now, it's just sitting there, not actually associated with anything.
>
> **[3:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=205)** To get it to have force, we need to create an IAM role to apply it to, and then we need to associate that role with our Snowflake account.
>
> **[3:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=216)** So let's go to roles on the left-hand side of the IAM and select Create Role.
>
> **[3:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=222)** Select the AWS account radio button, select this account down below, and then it requires an external ID.
>
> **[3:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=228)** I'm just going to put 0000.
>
> **[3:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=230)** Next, we select that we want to associate our Snowflake access permissions policy with this role, then we name the role, I'll call this snowflake_role_snowpipe, then we create the role.
>
> **[4:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=245)** At this point, you might be wondering, "Peter, this is not a course on AWS.
>
> **[4:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=250)** "Why are we doing all this?"
>
> **[4:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=252)** At least I thought the same thing in other courses I've taken.
>
> **[4:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=255)** It's because in my experience, the most challenging part of getting Snowpipe setup so you can ingest data is making sure you have the right permissions for it to access your external data.
>
> **[4:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=266)** The rest is pretty easy.
>
> **[4:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=267)** And a lot of that connecting has to be done through the console of your web provider, in this case AWS.
>
> **[4:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=274)** I don't expect you to absorb all of this, but I wanted to make sure you've seen it at least once so that you have a sense of the steps involved.
>
> **[4:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=282)** So now, it's finally time to hop into Snowsight.
>
> **[4:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=284)** Now, we get to create an integration that connects Snowflake to our S3 bucket, very exciting.
>
> **[4:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=290)** We haven't talked about the Snowflake integration objects so far in this course, but the idea is pretty straightforward.
>
> **[4:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=296)** It's an object that provides an interface between Snowflake and third-party services.
>
> **[5:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=302)** We do that with the create_storage_integration command.
>
> **[5:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=306)** So you can see create or replace storage integration, we'll call it S3_role_integration.
>
> **[5:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=311)** And it gives the type storage, provider enabled, et cetera.
>
> **[5:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=314)** We set the type as external stage, we set the storage provider as S3, et cetera.
>
> **[5:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=319)** The two key parts and the parts that might trip you up are that we need to give the role ARN.
>
> **[5:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=325)** ARN stands for Amazon resource names.
>
> **[5:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=328)** They're unique identifiers in AWS land, and we need to specify the bucket we want to give access to.
>
> **[5:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=335)** The bucket part is not that hard.
>
> **[5:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=336)** Here it's S3://intro-to-snowflake-snowpipe.
>
> **[5:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=341)** And the ARN is not hard to find if you know where to look.
>
> **[5:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=345)** Just go to the role you created.
>
> **[5:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=347)** And at the top of the screen, you'll see ARN and a little copy icon.
>
> **[5:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=351)** You can click to copy that.
>
> **[5:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=354)** Cool, now, we run that.
>
> **[5:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=357)** So now, the Snowflake integration knows something about AWS.
>
> **[6:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=362)** We specify the ARN of the AWS role we want to use and we specify the S3 bucket.
>
> **[6:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=369)** But so far, we haven't told AWS about Snowflake.
>
> **[6:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=373)** And you can imagine that when two services are reaching out to each other, they're both naturally suspicious and they both need to know something about the other.
>
> **[6:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=381)** It's not enough for one to reach out to shake hands, they both have to feel comfortable reaching out to shake hands.
>
> **[6:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=386)** So this is the moment we finally give some information about Snowflake back to AWS so AWS can feel comfortable permitting this connection.
>
> **[6:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=395)** We find out the info we need to hand over by running the describe_integration command in Snowflake, followed by the integration name, so describe_integration, S3_role_integration.
>
> **[6:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=406)** We take the storage AWS IAM user ARN, and we copy that, then we go back into the AWS console, and go to our role.
>
> **[6:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=416)** And if you had to guess which of the things you can see we click on to get AWS to trust Snowflake, which do you think it is?
>
> **[7:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=422)** That's right, trust relationships, and then edit trust policy.
>
> **[7:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=427)** Then we replace the existing AWS IAM user ARN with the one we pulled from Snowflake.
>
> **[7:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=434)** And we copied the storage AWS external ID from Snowflake and replaced the sts:ExternalId with that.
>
> **[7:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=446)** (air whooshing) So just to recap.
>
> **[7:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=448)** It felt like we just did a lot, but actually, we did basically four things.
>
> **[7:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=453)** We created an access policy in AWS, then we created a role that's associated with that policy.
>
> **[7:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=460)** Then we created an integration in Snowflake and made it aware of our AWS role.
>
> **[7:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=466)** And then we edited the AWS role to make it aware of our Snowflake integration.
>
> **[7:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=471)** So basically, we hosted a dinner party where we were like, "Steve, meet Lee; "Lee, meet Steve."
>
> **[7:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=477)** In the next video, we'll actually go ahead and create our Snowpipe.
>
> **[8:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=480)** Let's do it.
>
> **[8:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-i?u=76281980&t=481)** (logo whooshing) (bright gentle music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** aws (22), [[Snowflake]] (20), data (5), next (3), cloud (2)
> **Env Vars:** aws (22), iam (8), arn (7), gcp (1)
> **CLI Commands:** aws (22), make (4), find (3)
> **Code Identifiers:** listbucket (3), getbucketlocation (2), snowflake_access (2), describe_integration (2), snowflake_role_snowpipe (1)
> **UI Navigation:** go to (4), click on (3), navigate to (1), select the (1)
> **Tools:** aws console (3)
> **Cross-References:** previous video (1), in the next (1)
> **Definitions:** is a  (1), stands for (1)

#### Snowpipe: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=0)** - We've learned how to create an access policy in AWS, how to create a role associated with that policy, how to create an integration in Snowflake and make it aware of our AWS role, and how to edit the AWS role to make it aware of our Snowflake integration.
>
> **[0:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=19)** In this video, we'll actually create a Snow Pipe and see it in action.
>
> **[0:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=23)** Let's do it.
>
> **[0:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=25)** First, let's create a new database and a table in that database and let's make sure we're using the public schema in our new database.
>
> **[0:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=32)** Create or replace database S3 DB.
>
> **[0:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=35)** Create or replace table S3 table.
>
> **[0:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=38)** And we'll have a food column that's a string and a taste column that's an int.
>
> **[0:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=41)** And then we'll use the public schema within S3 DB.
>
> **[0:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=49)** Okay, now we're back to our old friend, the stage, we set the URL to our S3 bucket, and instead of putting a password or something like that in there, we pass our integration object to the stage.
>
> **[1:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=60)** Remember that object is trusted by AWS.
>
> **[1:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=63)** So the stage should be all set with the permissions it needs to pull data from S3.
>
> **[1:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=68)** So create replace stage S3 stage.
>
> **[1:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=71)** We got the URL of our bucket, and then storage integration equals our S3 role integration.
>
> **[1:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=77)** Let's take a look at our stage by running show stages.
>
> **[1:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=81)** Looks good. Pretty straightforward.
>
> **[1:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=83)** Okay, now the moment of truth.
>
> **[1:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=85)** Let's see if there's anything in our stage.
>
> **[1:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=88)** If our stage successfully connected to S3, it should have our food.CSV file in there.
>
> **[1:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=95)** If not, then we've got to troubleshoot.
>
> **[1:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=97)** List at S3 stage.
>
> **[1:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=101)** It worked!
>
> **[1:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=101)** There's food.CSV, food glorious food!
>
> **[1:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=106)** And just to double check, let's query the stage directly with select dollar sign 1 dollar sign two from at S3 stage.
>
> **[1:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=115)** I don't think we covered this when we learned about stages a long way back, but dollar sign one pulls the first column from a stage and dollar sign two pulls the second column from a stage.
>
> **[2:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=124)** Cool, we're in business.
>
> **[2:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=126)** If we were being careful here, we'd create a new role and give it all the necessary privileges to manage our snow pipe.
>
> **[2:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=132)** We'd grant usage on our database and schema.
>
> **[2:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=134)** We'd grant insert on the table we created called S3 Table.
>
> **[2:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=137)** We'd grant usage on the stage we created called S3 stage.
>
> **[2:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=140)** We'd grant ownership of the pipe and we'd grant the role to our username.
>
> **[2:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=143)** But for the sake of speed, we're going to live dangerously and run this next step with account admin.
>
> **[2:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=149)** So create pipe S3 DB dot public dot S3 pipe auto ingest equals true as copy into our S3 table from our stage.
>
> **[2:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=161)** Let's slow down here for a moment.
>
> **[2:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=162)** We're creating our pipe and we're calling that pipe S3 pipe and we're putting it into the S3 DB database and the public schema.
>
> **[2:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=172)** Then we're copying that into our S3 table from our S3 stage.
>
> **[2:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=177)** This style of syntax should look very familiar at this point.
>
> **[3:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=181)** Just like we create functions and databases and tables with create plus the object name, we create our pipe with create pipe.
>
> **[3:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=189)** And because we specified auto ingest equals true, we don't have to manually specify any other method for ingestion, like calling rest API, et cetera.
>
> **[3:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=199)** So this is nice and easy.
>
> **[3:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=201)** Okay, so we run that and if we query our table S3 table, it should be empty right now because even though we have data in our S3 bucket, the way we set this up, our snow pipe will only pick up data in our bucket when there's a change to the S3 bucket, like a file gets uploaded so it will miss the data that's in there presently.
>
> **[3:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=220)** Let's confirm, select star from S3 DB dot public dot S3 table, yep, that doesn't return anything.
>
> **[3:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=227)** Now let's go over to our S3 bucket and upload a file.
>
> **[3:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=230)** We'll just upload a copy of our food.CSV data.
>
> **[4:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=253)** Then if we wait about a minute and run this query again, select star from S3 DB dot public dot S3 table.
>
> **[4:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=261)** Now we see that there's data there and we didn't have to do anything manual or set up any additional orchestration because of auto ingest, Snow Pipe recognized that there was an upload file event in our S3 bucket and it pulled the new file into our table through our stage.
>
> **[4:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=276)** Sweet.
>
> **[4:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=278)** Okay, so let's take a closer look at our pipe by running the show pipes command.
>
> **[4:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=283)** We could see when it was created, its name, the database and schema it's in, its definition, et cetera, pretty cool.
>
> **[4:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=290)** In this case, we get the exact same types of information if we run describe pipe, followed by the name of our pipe.
>
> **[4:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=297)** So describe pipe, S3 DB dot public dot S3 pipe.
>
> **[5:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=301)** Show pipes and describe pipe yield the same columns.
>
> **[5:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=306)** If you want to change the property of a pipe, you can use the alter pipe command.
>
> **[5:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=310)** Let's pause our pipe by setting pipe execution paused equal to true.
>
> **[5:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=315)** So alter pipe, and then S3 pipe, set pipe execution paused equals true.
>
> **[5:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=322)** Awesome.
>
> **[5:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=323)** And then as you might expect, we can drop the pipe with drop pipe.
>
> **[5:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=326)** So drop pipe S3 pipe.
>
> **[5:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=329)** And if we run show pipes again, we'll see that our good old reliable pipe is gone.
>
> **[5:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=336)** Farewell, dear pipe.
>
> **[5:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=340)** That might have felt like a whirlwind.
>
> **[5:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=342)** That's fine.
>
> **[5:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=343)** I did not expect you to absorb everything we just covered.
>
> **[5:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=345)** Here's what I hope you did take away.
>
> **[5:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=347)** One, in order to use Snow Pipe with cloud storage, you need to create a Snowflake integration object.
>
> **[5:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=354)** Two, in order to make the integration object work, you need to give Snowflake the appropriate credentials to communicate with AWS and AWS the appropriate credentials to communicate with Snowflake.
>
> **[6:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=368)** Three, the describe integration command allows you to see the info you need to enter into your AWS account for it to trust Snowflake.
>
> **[6:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=377)** Four, you can create a pipe with the create pipe command.
>
> **[6:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=381)** Five, if you set the auto ingest property to true for your pipe, it will automatically check to see if your cloud storage location has had new files uploaded to it, and it will pull those into your destination table.
>
> **[6:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=394)** Six, you can show all of your pipes with show pipes.
>
> **[6:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=397)** Seven, you can get metadata about a given pipe with describe pipe followed by the name of the pipe.
>
> **[6:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=403)** Eight, you can drop a pipe with drop pipe followed by the name of the pipe.
>
> **[6:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=407)** Awesome, that's a lot.
>
> **[6:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=409)** If you're wildly confused, you should definitely take some of our Snowflake coursework on data engineering.
>
> **[6:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpipe-part-ii?u=76281980&t=414)** And if you're like, I've got this, and want to move your skills to the next level, you should still take some of our Snowflake coursework on data engineering.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (8), aws (7), database (7), data (6), next (2)
> **Env Vars:** aws (7), csv (3), url (2), api (1)
> **CLI Commands:** aws (7), make (4)
> **File Paths:** food.csv (3)
> **Cross-References:** we covered (1)
> **Analogies:** just like (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** set up (1)


### 20. GenAI with Snowflake

[↑ Back to Table of Contents](#table-of-contents)

#### Snowflake genAI overview: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=0)** - Snowflake embraces simplicity.
>
> **[0:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=3)** It's one of the major reasons I was excited to become an employee and I haven't been disappointed.
>
> **[0:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=7)** If you're sitting there thinking, I don't think the past several hours of this course have been simple, then, that's probably on me, not on Snowflake.
>
> **[0:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=15)** In this video, we're going to do an overview of GenAI at Snowflake, and I hope you'll come away agreeing that Snowflake has done a lot to make using GenAI Simple.
>
> **[0:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=24)** That said, sometimes your use case requires something more customizable than an out-of-the-box experience.
>
> **[0:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=29)** So Snowflake also gives you ways to create something really customized if that's what you need.
>
> **[0:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=35)** So instead of looking at GenAI at Snowflake with a use case-based lens, we're going to look at GenAI on a spectrum from, you can deploy this in seconds to, you can deploy this in hours or days if what you're doing demands that kind of care.
>
> **[0:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=50)** I should note, I'm going to use the words AI and generative AI, GenAI, interchangeably because most of the Snowflake AI efforts we'll talk about here fit under the GenAI bucket.
>
> **[1:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=62)** Though I recognize this is a bit sloppy.
>
> **[1:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=65)** Let's dive in.
>
> **[1:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=66)** Okay, so you can see that all of this GenAI functionality is built on a bottom layer of Snowflake governed data.
>
> **[1:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=73)** And that may seem obvious, but it's worth calling out because GenAI work poses real security and governance challenges that Snowflake helps a lot with.
>
> **[1:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=82)** Who has access to which privileges, who has access to which data, how often is your data refreshed, et cetera.
>
> **[1:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=88)** I tend to take that for granted when I'm working in Snowflake, but it's important to note explicitly.
>
> **[1:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=93)** Okay, so let's get oriented for a moment.
>
> **[1:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=96)** You'll see three titles across the top.
>
> **[1:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=98)** Use AI in Seconds, Apps in Minutes, Fully Custom in Hours.
>
> **[1:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=103)** We can see that three features are listed at the top: Document AI, Universal Search, and Snowflake Copilot, and then next to that is Streamlet, under the Apps in Minutes heading.
>
> **[1:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=114)** We'll talk about what's on the right in a moment, but for now, let's keep focusing on the left.
>
> **[1:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=119)** Underneath all four of these features, from Document AI to Streamlit, you'll see this Snowflake Cortex section, with a subtitle, Serverless AI, LLM, and Search Functions.
>
> **[2:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=131)** Personally, I think it's hard to figure out what's going on in a chart like this until we start to figure out what each of these features are, and then we can understand why they're grouped this way.
>
> **[2:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=141)** So let's start by quickly covering Document AI, Universal Search, and Snowflake Copilot.
>
> **[2:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=147)** Document AI is really cool and pretty simple to explain.
>
> **[2:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=150)** It's a feature that lets you use a Snowflake LLM, managed in Cortex, which we'll talk more about in a moment to extract data from unstructured documents like PDFs.
>
> **[2:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=161)** You could do this across multiple documents all at once and then store the outputs in Snowflake tables for downstream consumption.
>
> **[2:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=170)** Here's a screenshot of what it looks like to use Document AI to label a PDF to serve as training data, so the system can then pull data from other similarly-structured documents.
>
> **[3:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=180)** So if you have a big corpus of PDFs that have never really been amenable to parsing or analysis, you're in luck.
>
> **[3:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=187)** Universal Search is the next item here.
>
> **[3:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=189)** It lets you use natural language to search for a bunch of things: database objects in your account, data products in the Snowflake Marketplace, relevant Snowflake docs and community knowledge base articles and more.
>
> **[3:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=203)** You access it via a search bar in Snowsight.
>
> **[3:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=206)** Here's what it looks like.
>
> **[3:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=208)** You can see that someone asked about how to forecast sales volume and Universal Search returned a bunch of potentially relevant docs, as well as some data that you might want to use to make a forecast like that.
>
> **[3:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=220)** Next is Snowflake Copilot.
>
> **[3:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=222)** It's LLM-powered and generates SQL from natural language queries.
>
> **[3:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=227)** It's accessible via the Snowsight UI as a side panel where you can ask your questions.
>
> **[3:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=232)** Here's a quick screenshot of Copilot in action.
>
> **[3:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=235)** Someone asked, which city has the most crime, and Copilot generated a query, and then they followed up with, show me this for each month of 2021, and Copilot generated another query.
>
> **[4:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=246)** Okay, so I hope it's now a little more clear what we mean by AI in Seconds.
>
> **[4:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=250)** In each case, whether you want to pull data from PDFs, search through database objects or docs using natural language, or generate a SQL query, you can do that in a snappy way via a UI embedded in Snowsight.
>
> **[4:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=264)** Now, we'll get to Snowflake Cortex in a moment, but the reason these three are listed above that is that we think of them as part of the broader Snowflake Cortex product umbrella.
>
> **[4:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=274)** You could think of Snowflake Cortex as the land of easy-to-use LLM functions and apps, and we'll see later some machine learning functions as well.
>
> **[4:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=282)** Okay, cool.
>
> **[4:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=283)** So now let's talk about Streamlit.
>
> **[4:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=285)** We'll get into this in much more detail later in the course, but for now, I'll just say that Streamlit is a really sleek way to take Python scripts and deploy them as data apps.
>
> **[4:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=295)** Streamlit has an awesome open source community, and Snowflake has also built out a Streamlit in Snowflake experience that you can access from within the Snowflake UI.
>
> **[5:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=306)** You could see here that Streamlit is also listed above Snowflake Cortex, but for a different reason.
>
> **[5:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=311)** We don't think of Streamlit as being a part of Snowflake Cortex.
>
> **[5:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=314)** In fact, Streamlit isn't strictly a GenAI tool at all, but we put Streamlit above Snowflake Cortex because it's really easy to embed Snowflake Cortex functionalities inside a Streamlit app and deploy it as a chatbot, say.
>
> **[5:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=328)** So they're powerful partners when deploying AI workloads.
>
> **[5:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=332)** If you watch open source videos about AI, you'll often come across examples where people are deploying their AI creations through Streamlit apps.
>
> **[5:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=340)** It's a natural pairing.
>
> **[5:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=343)** I'm not going to say anything more about Streamlit for now, because we'll have a whole video on it later in the course, but you should get excited.
>
> **[5:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=349)** Streamlit is so cool.
>
> **[5:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=351)** I'm a data scientist, but when I use Streamlit, I'm like, anyone want an app?
>
> **[5:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=356)** I can make apps.
>
> **[5:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=358)** We're going to skip over this custom UI and custom orchestration stuff in the top right.
>
> **[6:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=362)** Next up, we'll cover two more important topics.
>
> **[6:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=365)** We'll talk more about Snowflake Cortex and Snowpark Container Services, which we also call SPCS.
>
> **[6:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=372)** I'm particularly fond of the Snowflake Cortex LLM functions we'll learn about, so get excited.
>
> **[6:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-i?u=76281980&t=377)** It's going to be a good time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (30), ai (13), data (11), [[Search]] (8), [[Microsoft Copilot|Copilot]] (6)
> **Env Vars:** llm (5), sql (2), pdf (1), spcs (1)
> **CLI Commands:** make (3), python (1)
> **Cross-References:** later in (2)
> **Definitions:** is a  (2)
> **Speakers:** - snowflake (1)
> **Non-Speech:** (upbeat music) (1)

#### Snowflake genAI overview: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=0)** - Earlier we introduced Document AI, Universal Search, Snowflake Copilot, and Streamlet.
>
> **[0:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=6)** We're going to pick up right where we left off by learning more about Snowflake Cortex.
>
> **[0:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=11)** So as I mentioned before, I think of Snowflake Cortex as the land of easy to use LLM functions and features.
>
> **[0:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=18)** It also includes some ML functions, which we'll talk about later.
>
> **[0:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=22)** The Snowflake docs are more formal about it.
>
> **[0:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=24)** They say Snowflake Cortex is an intelligent, fully-managed service that offers machine learning and AI solutions to Snowflake users.
>
> **[0:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=32)** Here I want to focus specifically on the LLM functions that Snowflake Cortex provides.
>
> **[0:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=37)** I think going over a few of these makes Snowflake Cortex seem a lot less abstract, and in the next video, we'll actually put one to use.
>
> **[0:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=45)** Okay, so here are four of the Cortex LLM functions, SUMMARIZE, SENTIMENT, EXTRACT_ANSWER, and TRANSLATE.
>
> **[0:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=53)** We'll cover another one in the next video, a super cool one called COMPLETE, but I'm leaving that out for now because it will get plenty of our attention later.
>
> **[1:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=61)** So there's a couple of things I want to call out about these LLM functions.
>
> **[1:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=65)** The first is that they take unstructured data, like text as an input.
>
> **[1:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=69)** The second is that you can call them directly within your SQL workloads.
>
> **[1:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=74)** You don't have to train a model, load it to a stage, et cetera.
>
> **[1:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=78)** You could just take advantage of the strengths of LLMs right from SQL.
>
> **[1:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=82)** I don't know whether that seems cool to you or not, but it blows my mind because it makes LLMs so accessible.
>
> **[1:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=88)** This is why Snowflake Cortex falls largely under the use AI in seconds bucket.
>
> **[1:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=93)** Just call the LLM function from SQL, and you're in business.
>
> **[1:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=97)** Okay, so what do these do?
>
> **[1:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=98)** SUMMARIZE summarizes.
>
> **[1:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=101)** Give it text, it will give you a summary.
>
> **[1:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=103)** SENTIMENT classifies sections of text as having positive, negative, or neutral sentiments.
>
> **[1:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=108)** EXTRACT_ANSWER lets you ask questions of unstructured data using natural language.
>
> **[1:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=114)** And TRANSLATE translates from one language to another.
>
> **[1:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=118)** Just specify the input and output languages.
>
> **[2:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=121)** Later, we'll see that Snowflake Cortex's ML functions operate very similarly, except that under the hood, they're powered by ML models instead of by Gen AI ones.
>
> **[2:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=133)** So this last category of Snowflake Gen AI functionality on the far right, Snowpark Container Services, could be the subject of multiple courses.
>
> **[2:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=141)** It's a huge topic, and we can only cover a bit here.
>
> **[2:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=145)** The main message I want to convey is that if you need additional customization beyond what you can get with the Gen AI functionality on the left-hand side of this diagram, say there's another LLM you want to use, or you want to fine tune an LLM or something, you can almost certainly make it happen through Snowpark Container Services, or SPCS.
>
> **[2:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=164)** I don't know what your experience has been, but I'm a bit intimidated by the term containers.
>
> **[2:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=168)** As a data scientist, I mostly never had to create an image and spin up a container myself, except for at one startup I worked at, but I know they're really useful and ubiquitous, and I've often felt a little inferior when I've heard others talk about them, like I lack real engineering chops.
>
> **[3:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=184)** But I'm here to share some good news.
>
> **[3:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=186)** Though containerizing workflows can involve a lot of steps and isn't always the easiest thing to do, the basic idea isn't that hard to get.
>
> **[3:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=194)** Imagine you want to write an app that can run in multiple environments, different operating systems, et cetera.
>
> **[3:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=199)** You really don't want to have to create many, many versions of the code for each of those systems.
>
> **[3:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=204)** So instead, you create what's called an image, and you put your code in that image, including all the dependencies you need.
>
> **[3:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=211)** Then when you run this, the image generates a container, a specific instantiation of that image.
>
> **[3:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=217)** With containers, you can write portable code that works as expected in a bunch of different environments.
>
> **[3:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=222)** It's kind of how shipping containers work in the real world.
>
> **[3:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=225)** You put stuff in a container, and that container is now portable across any ship, truck, or train.
>
> **[3:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=230)** With Snowpark containers, you can create almost any app or set of code and run it within your Snowflake system.
>
> **[3:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=237)** I saw one example where someone ported over an old video game to run it in a Snowpark container.
>
> **[4:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=242)** I don't know exactly why you'd want to do that, but it's pretty cool that Snowpark containers are that flexible.
>
> **[4:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=247)** The upshot is that Snowpark containers mean you can bring your code to the data and keep your data within the secure perimeter of Snowflake.
>
> **[4:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=255)** So how does this relate to Gen AI?
>
> **[4:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=257)** If you have an LLM, if you want to fine tune an existing LLM, or if you want to use a partner LLM from the Snowflake marketplace, more on the marketplace later, you can make this happen with Snowpark Container Services.
>
> **[4:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=270)** So that's it for this Gen AI overview.
>
> **[4:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=272)** My hope is you're coming away from this video feeling somewhat familiar with a bunch of Snowflake gen AI capabilities.
>
> **[4:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=279)** We introduced Document AI, Universal Search, and Snowflake Copilot.
>
> **[4:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=283)** We discussed the Cortex LLM functions, and saw how you can call them inside SQL.
>
> **[4:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=289)** We talked a bit about Streamlet, and we talked a bit about Snowpark Container Services.
>
> **[4:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=294)** I definitely don't expect you to feel able to implement any of what we just covered.
>
> **[4:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=299)** Familiarity was the goal for this video.
>
> **[5:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=301)** But my hope is that you have a bird's-eye view of what's possible.
>
> **[5:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=305)** In an upcoming video, you'll see how we put one of these tools into practice.
>
> **[5:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=308)** The Snowflake Cortex LLM function, COMPLETE.
>
> **[5:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-genai-overview-part-ii?u=76281980&t=312)** (bright music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (17), llm (12), ai (10), [[SQL]] (4), data (3)
> **Env Vars:** llm (12), sql (4), summarize (2), sentiment (2), extract_answer (2)
> **Cross-References:** in the next (2), we discussed (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1)
> **Analogies:** imagine (1)
> **Speakers:** - earlier (1)
> **Non-Speech:** (bright music) (1)


### 21. Snowflake Cortex LLM Functions

[↑ Back to Table of Contents](#table-of-contents)

#### Snowflake Cortex LLM functions: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=0)** - Okay, so I'm really excited about this.
>
> **[0:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=3)** We get to actually use a Snowflake Cortex LLM Function.
>
> **[0:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=7)** Woo woo!
>
> **[0:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=8)** Raise the roof!
>
> **[0:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=9)** We covered four Snowflake Cortex LLM Functions in the last video, here I want to talk about a new one called Complete, as in where have you been my whole life, snowflake cortex?
>
> **[0:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=19)** You complete me.
>
> **[0:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=20)** The goal here isn't to become an expert on this particular LLM function.
>
> **[0:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=24)** Snowflake Cortex Complete is cool and important, but the more important goal is to use this one function as a bridge into understanding more generally how LLM functions work in Snowflake.
>
> **[0:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=35)** To follow along here, you don't need to have a deep understanding of LLMs.
>
> **[0:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=40)** Okay, let's go.
>
> **[0:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=42)** So what does Complete do?
>
> **[0:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=43)** If you feed it two arguments, the name of an LLM, there are a bunch of options, and a prompt, it gives you back a response to the prompt.
>
> **[0:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=52)** It's pretty straightforward.
>
> **[0:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=54)** So before we get into some important nuances, let's just ask it a question.
>
> **[0:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=58)** Snowflake makes available lots of models.
>
> **[1:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=60)** We'll pick one of the smaller ones, mistral 7b for this example.
>
> **[1:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=63)** Let's ask, "What are three reasons that Snowflake is positioned to become the go-to data platform?"
>
> **[1:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=70)** We do this by running the following; SELECT SNOWFLAKE.CORTEX.COMPLETE, and then we put mistral 7b and the prompt.
>
> **[1:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=77)** So you can see that we're just running this inside a select statement and we're calling the full path of the function.
>
> **[1:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=83)** Snowflake is the database, Cortex is the schema, and Complete is the function.
>
> **[1:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=87)** If you look at the left hand side, you can dig down and see complete there.
>
> **[1:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=90)** And notice that it's listed as a UDF.
>
> **[1:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=94)** Okay, so that seems like a pretty good answer, but it feels a bit long to me.
>
> **[1:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=98)** Let's do this again, but just for fun, let's use another LLM function to summarize the results, like this; SELECT SNOWFLAKE.CORTEX.SUMMARIZE, SNOWFLAKE.CORTEX.COMPLETE, and then mistral 7b in our prompt.
>
> **[1:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=112)** So here you can see that we're still using a select statement, but this time we are feeding the results from the complete function into the summarize function.
>
> **[2:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=121)** They are both Snowflake Cortex LLM functions.
>
> **[2:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=125)** The answer looks pretty good.
>
> **[2:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=126)** Looks like it captured the main points, and it's definitely tighter.
>
> **[2:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=130)** Pretty cool.
>
> **[2:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=131)** Now an important thing to know about LLMs is that under the hood, they're not exactly structured in the language you're feeding into them.
>
> **[2:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=138)** Instead, they convert your input into something called tokens and they work with those tokens and then they output tokens and convert them back to your original language.
>
> **[2:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=146)** Now, you don't have to understand much about tokens to work with Snowflake Cortex LLM functions, but I wanted to mention it because when you read through function documentation, you'll see references to tokens.
>
> **[2:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=156)** For example, the costs of using complete can vary depending on which model you choose.
>
> **[2:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=161)** The larger models charge more per token and the smaller models tend to charge less.
>
> **[2:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=166)** Also, in the case of complete, you can specify a max token size, which can limit the size of the response.
>
> **[2:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=172)** So we could have just used that directly instead of feeding the results of complete into summarize.
>
> **[2:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=177)** So earlier we used mistral 7b, but we could have picked from a bunch of models if we'd wanted to.
>
> **[3:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=183)** Each supported by Snowflake out of the box; mistral large, llama two 70B-chat, et cetera.
>
> **[3:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=190)** Okay, so another important thing to know is that since this is working inside a select statement, it's easy to feed in a bunch of different prompts into Complete row wise and get a table of results all at once.
>
> **[3:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=203)** Let's do this by asking Complete to tell us why items on our Tasty Bites menu are tasty.
>
> **[3:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=210)** So select SNOWFLAKE.CORTEX.COMPLETE, we'll use mistral 7b, and then we'll stick in, "Tell me why this food is tasty," and then the menu item name.
>
> **[3:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=221)** So we've limited this to five and you can see that what we're doing is specifying that we'll use mistral 7b, but then as our prompt we're concatenating the string, "Tell me why this food is tasty:" with menu item name, which is the column in our menu table that holds the name of that food.
>
> **[3:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=236)** Before we run this, let's run, SELECT CONCAT "Tell me why this food is tasty," menu item name from our menu so you can visualize the input we're feeding into Complete.
>
> **[4:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=248)** "Tell me why this food is tasty: Lemonade."
>
> **[4:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=250)** "Tell me why this food is tasty: Sugar Cone" Looks good.
>
> **[4:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=253)** And I'm excited to see how Complete reviews the tastiness of bottled water.
>
> **[4:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=258)** Okay, so we run our complete command across the above five examples from our table and we get some pretty cool results.
>
> **[4:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=265)** It looks like, "Lemonade is a refreshing and tasty beverage enjoyed people all around the world."
>
> **[4:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=273)** And then we have, "A sugar cone is a type of ice cream cone made from sugar, water and corn syrup."
>
> **[4:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=278)** Okay, interesting.
>
> **[4:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=280)** Okay, I love this one.
>
> **[4:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=282)** This is its review of bottled water, "I must apologize for any confusion, but bottled water itself does not have a taste that can be described as tasty."
>
> **[4:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=291)** So great.
>
> **[4:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=292)** I don't know about you, but I'm persuaded and I like how candid it is about bottled water.
>
> **[4:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=297)** Mistral 7b is a very polite LLM.
>
> **[5:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=301)** Coming up, we'll learn how to give the LLM some context.
>
> **[5:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=304)** Let's do it.
>
> **[5:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-i?u=76281980&t=305)** (lively music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (15), llm (10), prompt (5), [[Tokens]] (5), data (1)
> **Env Vars:** llm (10), snowflake (4), cortex (4), select (3), complete (3)
> **SQL:** select (3)
> **Cross-References:** we covered (1), in the last (1), coming up (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (1)
> **Speakers:** - okay (1)
> **Non-Speech:** (lively music) (1)

#### Snowflake Cortex LLM functions: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=0)** - We just learned how to use Snowflake Cortex COMPLETE inside a select statement.
>
> **[0:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=6)** Now we're going to cover how you can give the model context when you call COMPLETE, specifically, how you can feed in the past history of your prompts and the responses you got.
>
> **[0:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=15)** For this, let's expand the worksheet so it fills the whole screen.
>
> **[0:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=19)** That will make this easier to see.
>
> **[0:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=21)** Okay, so let's take a look at the code we're about to run.
>
> **[0:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=24)** Select snowflake.cortex.COMPLETE, and then we have the model we want to use, and it's got role and content, and role and content, and then it at the end it says, as response.
>
> **[0:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=35)** This might look confusing, but I promise it's not bad at all.
>
> **[0:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=38)** We're still just doing two basic things.
>
> **[0:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=41)** One, we're telling COMPLETE the name of the model we wanted to use.
>
> **[0:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=44)** Two, we're giving it an array with our instructions.
>
> **[0:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=48)** You can see it's an array because we're using brackets.
>
> **[0:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=51)** Inside that array are objects.
>
> **[0:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=54)** You can see that they're objects because we have braces.
>
> **[0:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=57)** Each object lists a role and content.
>
> **[0:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=59)** There are three possible roles, system, user and assistant.
>
> **[1:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=64)** Typically the first role will be system.
>
> **[1:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=66)** This is like the initial prompt you're giving to get things started.
>
> **[1:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=70)** Then you have user input.
>
> **[1:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=72)** If we run this, we'll see that it correctly identifies this review of Snowflake as positive.
>
> **[1:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=78)** Okay, so now for the interesting part, let's add in that output as another object.
>
> **[1:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=83)** We'll specify the role as assistant, and for the content, we'll put the exact same output we just received.
>
> **[1:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=90)** Now let's give it a new prompt.
>
> **[1:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=92)** To do this, we add in another object and put the role as user, and then put our prompt as the content.
>
> **[1:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=98)** Let's ask for a generic elaboration like, based on other information you know about Snowflake, explain why the reviewer might feel the way they do.
>
> **[1:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=106)** And we get a slightly more detailed response.
>
> **[1:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=108)** And note how the LLM is bringing in other knowledge it has about Snowflake.
>
> **[1:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=112)** That's pretty cool.
>
> **[1:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=114)** If you were to continue down this path, you'd probably see object after object, alternating between having the assistant role and the user role.
>
> **[2:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=121)** Pretty cool.
>
> **[2:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=123)** Okay, so that's it for COMPLETE.
>
> **[2:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=125)** To recap, we did six things.
>
> **[2:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=126)** One, we spent some time exploring Snowflake Cortex LLM functions in general by taking a close look at Snowflake Cortex COMPLETE.
>
> **[2:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=135)** Two, we learned how to specify the model we'd like to use and feed a prompt to COMPLETE to get a response.
>
> **[2:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=142)** Three, we learned how to use the Snowflake Cortex Summarize function.
>
> **[2:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=146)** Four, we listed a few of the models you can select from when you're using COMPLETE.
>
> **[2:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=151)** Five, we generated a table of responses by feeding a column to COMPLETE.
>
> **[2:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=156)** And six, we learned how to get COMPLETE to work with an array holding our previous prompt history.
>
> **[2:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=163)** As I mentioned in the Gen AI overview, snowflake doesn't restrict your Gen AI workflows to LLM functions like COMPLETE.
>
> **[2:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=171)** You can pretty much get as sophisticated as you want with LLMs and Snowflake.
>
> **[2:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=174)** The infrastructure is there for you.
>
> **[2:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=176)** But I love what we covered here because LLM functions lets you use LLMs in your normal SQL workflows, and they're all ready to go.
>
> **[3:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=185)** You don't have to find a model, load it, manage it, or anything like that.
>
> **[3:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=189)** Functions like COMPLETE are ready for you to use out of the box.
>
> **[3:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-cortex-llm-functions-part-ii?u=76281980&t=192)** I think that's very cool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (10), prompt (5), llm (4), ai (2), generic (1)
> **Env Vars:** complete (12), llm (4), sql (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** we covered (1)
> **Speakers:** - we (1)
> **Non-Speech:** (upbeat music) (1)


### 22. Machine Learning with Snowflake

[↑ Back to Table of Contents](#table-of-contents)

#### Snowflake ML overview: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=0)** - I have an ambitious vision for this video.
>
> **[0:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=3)** I want it to feel like flying on an airplane.
>
> **[0:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=6)** You look out the window and you see fields and forests, maybe a mountain, you fly over a city and can see how all the parts fit together.
>
> **[0:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=13)** That's what I want this to feel like.
>
> **[0:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=14)** But instead of flying over the countryside, we're flying over the machine learning landscape at Snowflake, you gaze down and think, "Oh, look, what a beautiful set of ML functions.
>
> **[0:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=23)** Oh, look, what a charming model registry."
>
> **[0:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=25)** And then as some combination of captain and flight attendant, I'll say, "Snowflake's platform provides a bunch of ways to do machine learning, all processed with CPUs or GPUs in Snowflake's compute engine right next to your data.
>
> **[0:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=36)** This is great because it means you can do the ML you want with the security and governance of Snowflake."
>
> **[0:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=41)** It'll be great, excellent view, zero turbulence.
>
> **[0:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=44)** So here's how we're going to go about this.
>
> **[0:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=46)** The structure of this video will be pretty much identical to the structure we used when we learned about Gen AI at Snowflake.
>
> **[0:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=52)** We'll talk about ML features that can be used in seconds, ML features that can be used in minutes, and more customized ML features that can be used in hours.
>
> **[1:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=61)** There's a lot of good stuff in here.
>
> **[1:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=63)** This will be great.
>
> **[1:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=64)** Okay, so here's an overview of the ML landscape at Snowflake.
>
> **[1:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=68)** We're going to focus our attention on the seconds and minutes options here because there's not enough time in this course to do everything.
>
> **[1:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=75)** We plan to cover bringing your own model into Snowflake, GPU-based training, and GPU-based inference in future coursework.
>
> **[1:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=82)** As I did when we were doing the Gen AI overview, I want to quickly call out that all of this is built on the foundation of Snowflake-governed data.
>
> **[1:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=90)** It's easy to brush past that, but that makes life easier in a lot of ways because so many governance, security, performance, and ease-of-use benefits come from that.
>
> **[1:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=100)** And we talked about virtual warehouses earlier in the course, but it's worth repeating that there are Snowpark-optimized warehouses with lots of memory to help with ML tasks.
>
> **[1:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=109)** I won't say more about that here.
>
> **[1:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=112)** Okay, so now let's really get started by digging into Snowflake Cortex ML functions.
>
> **[1:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=118)** So using Snowflake Cortex ML functions feels a lot like using the Snowflake Cortex LLM functions we've been talking about: translate, summarize, sentiment extract, and of course, complete, which you're now pretty familiar with, and you can use them all in SQL.
>
> **[2:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=134)** But there are a few differences.
>
> **[2:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=136)** One is that under the hood, the models the ML functions rely on are machine learning models, not large language models.
>
> **[2:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=143)** Another is that the LLMs underneath the LLM functions are all pre-trained, but for the ML functions, there's typically a step where you submit training data to them.
>
> **[2:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=153)** Like the LLM functions, the ML functions abstract away the complexity of the underlying models.
>
> **[2:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=159)** And when you're using them, you don't have to worry about the underlying compute infrastructure because they leverage Snowflake's multi-node elastic compute.
>
> **[2:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=168)** Okay, so here are four ML functions: FORECAST, ANOMALY_DETECTION, TOP_INSIGHTS, which you'll see listed under Contribution Explorer in the Snowflake docs, and CLASSIFICATION.
>
> **[3:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=180)** I know that for at least FORECAST, ANOMALY_DETECTION, and CLASSIFICATION, the underlying model is a GBM, a gradient boosted machine.
>
> **[3:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=188)** This isn't a course on ML, so we won't talk about how that works, but it's a very standard type of ML model.
>
> **[3:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=194)** FORECAST does what you'd guess, it makes time series forecasts.
>
> **[3:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=198)** ANOMALY_DETECTION identifies outliers.
>
> **[3:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=201)** TOP_INSIGHTS identifies drivers of shifts in whatever variable you pick as the outcome variable of interest.
>
> **[3:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=208)** I wouldn't go so far as to give this a causal interpretation, but it can definitely get you started in a metrics investigation where leadership is like, "Why did metric X go down last month in country Y?"
>
> **[3:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=219)** And you're like, "Great question."
>
> **[3:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=222)** CLASSIFICATION sorts data into different groups.
>
> **[3:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=224)** It can handle binary classification or multi-class classification.
>
> **[3:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=230)** Now, I've provided some incomplete code snippets on the side, not because I think you'll be able to look at these and know how to use any of them, but because I wanted to give you a sense as to how these work in practice.
>
> **[4:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=240)** Please don't be overwhelmed by the tiny font.
>
> **[4:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=242)** You don't need to absorb or memorize any of this.
>
> **[4:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=246)** Think of it as taking a bath in a stream of code, just let the code wash over you.
>
> **[4:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=250)** The key things I want to call out are that in two cases with FORECAST and ANOMALY_DETECTION, you could see that you have to run a CREATE command to create the model.
>
> **[4:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=261)** You'll see the function names, FORECAST and ANOMALY_DETECTION, listed in each case.
>
> **[4:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=265)** Then you actually use the models with a CALL command.
>
> **[4:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=268)** Note that this is different from how we use the LLM functions.
>
> **[4:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=271)** There, we used them inside select statements.
>
> **[4:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=274)** The syntax for calling TOP_INSIGHTS and CLASSIFICATION is a bit more like the syntax for calling the LLM functions.
>
> **[4:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=282)** You can see that they're inside the SELECT statements.
>
> **[4:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=285)** SELECT Snowflake ML TOP_INSIGHTS and SELECT model_binary PREDICT, where a model_binary is a Snowflake ML classification model.
>
> **[4:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=294)** So again, the goal here is not to bring you to the point where you can use these.
>
> **[4:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=298)** You'll need to take more Snowflake coursework or read the docs for that.
>
> **[5:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=301)** But I wanted to give you a taste as to how using them might feel in practice.
>
> **[5:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=306)** You know this already, but I'm a big fan of the Snowflake Cortex functions.
>
> **[5:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=311)** That said, there's a lot more to cover about the Snowflake ML landscape.
>
> **[5:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-i?u=76281980&t=314)** Next up, we'll learn about Snowpark ML modeling, the Snowflake Feature Store, the Snowflake Model Registry, and more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (20), llm (5), data (4), next (2), [[Security]] (2)
> **Env Vars:** llm (5), forecast (5), anomaly_detection (5), top_insights (4), classification (4)
> **SQL:** select (3)
> **Definitions:** is a  (3)
> **Code Identifiers:** model_binary (2)
> **Cross-References:** we talked about (1), earlier in (1)
> **CLI Commands:** node (1)
> **Documentation:** the docs (1)

#### Snowflake ML overview: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=0)** - We've talked about how you can do ML in seconds with the Snowflake Cortex ML functions.
>
> **[0:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=6)** Now let's talk about how to do ML in minutes with Snowflake.
>
> **[0:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=9)** There are a bunch of things to talk about, so we'll just cover each briefly.
>
> **[0:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=13)** First, I want to point out some terminology.
>
> **[0:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=15)** Snowpark ML Modeling, the Snowflake Feature Store, and the Snowflake Model Registry all have APIs that are accessible from the unified Snowpark ML library.
>
> **[0:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=26)** You can access APIs for each of these three features by installing the Snowpark ML library in Python, and you can do this from your preferred notebook or IDE, including Snowflake notebooks, which we'll talk about in a second.
>
> **[0:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=38)** A big part of Snowpark ML are the Snowpark ML modeling APIs, which are based on standard Python frameworks like scikit-learn and XGBoost.
>
> **[0:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=47)** You can see this code example on the side.
>
> **[0:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=51)** You can use Snowpark ML modeling APIs for pre-processing data, feature engineering, and training models inside Snowflake, which is great because that means you don't need to be moving data in and out of Snowflake to do ML.
>
> **[1:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=63)** Another cool thing is that for common scikit-learn feature engineering and pre-processing functions or hyper parameter tuning in model training, Snowflake executes them in a distributed way.
>
> **[1:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=76)** Here's an example.
>
> **[1:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=76)** You can see that we're splitting our data into training and test data frames.
>
> **[1:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=81)** Then we're building a training pipeline, and here's where it's using SimpleImputer, Pipeline, and XGBClassifier that we imported from Snowpark ML Modeling at the top.
>
> **[1:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=91)** You don't have to know what any of these are for this course, except for XGBClassifier, which we'll cover in detail in a future video.
>
> **[1:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=98)** Then it's actually training the model, and finally, it's evaluating the model.
>
> **[1:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=104)** Before Snowpark ML, doing ML in Snowflake meant you were pretty much required to manually create stored procedures or UDFs to make that happen.
>
> **[1:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=113)** But now for scikit-learn, XGBoost, and LightGBM style models, you've got Snowflake Native Support.
>
> **[1:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=119)** We'll become very familiar with Snowpark ML Modeling in a moment because the next video will be all about making and using an XGBoost Snowpark ML model.
>
> **[2:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=129)** Let's talk about the Snowflake Model Registry.
>
> **[2:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=131)** The Snowflake Model Registry helps with model management, which is the ability to easily track versioned model artifacts and metadata.
>
> **[2:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=139)** If you're training a bunch of models, it becomes really annoying to keep track of all the different versions.
>
> **[2:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=144)** So whether you use Snowflake Model Registry or something else, a model management tool is really helpful.
>
> **[2:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=151)** One thing I really like about the Snowflake Model Registry is that it lets you manage and execute models in Snowflake regardless of origin, so it can handle models built with the Snowpark modeling APIs, but also models built externally with tools from cloud providers like SageMaker, Azure ML, and Vertex AI, and even LLMs from Hugging Face.
>
> **[2:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=171)** In this example on the right, you can see that we're creating a scikit-learn model, training it, and then using registry.log_model to store it in the model registry.
>
> **[3:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=181)** Pretty cool.
>
> **[3:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=183)** Now, let's talk about the Snowflake Feature Store.
>
> **[3:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=185)** This isn't a technical definition, but you can think of a feature as a column of data you might want to use as a variable in a model you're creating.
>
> **[3:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=193)** When you're making lots of machine learning models, it's easy to end up pulling one feature from dataset A and another from dataset B and forgetting which you used and how they differ.
>
> **[3:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=202)** The Snowflake Feature Store addresses this by letting you create, store, manage, and serve ML features for model training and inference.
>
> **[3:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=210)** It's very handy because it helps you maintain a single source of truth for all these features, and it automates feature updates continuously so that you have consistent downstream pipelines.
>
> **[3:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=221)** Now, let's talk about Snowflake notebooks.
>
> **[3:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=223)** A Snowflake notebook is a SQL, Python, and markdown cell-based development interface built into Snowsight, Snowflake's UI.
>
> **[3:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=232)** If you used other notebooks before, Jupyter Notebooks, et cetera, this should feel familiar.
>
> **[3:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=236)** And while this isn't strictly an ML tool, we've included it here because it's really, really helpful when doing ML work, and it works really cleanly with Snowpark ML.
>
> **[4:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=245)** Most data scientists, myself included, kind of see notebooks as a must when doing ML development.
>
> **[4:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=251)** Snowflake notebooks make it easy to quickly explore data with your preferred language and visualize results using popular Python libraries, and securely sharing your work is easy with notebooks because they're governed by role-based access controls.
>
> **[4:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=266)** Okay, let's talk about Streamlit in the ML context.
>
> **[4:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=269)** We discussed Streamlit in our Gen AI overview, but I wanted to emphasize that it's also really useful in ML workflows.
>
> **[4:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=276)** With Streamlit in Snowflake, Python developers can turn data and ML models into interactive web apps without needing to do any front-end development.
>
> **[4:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=286)** With Streamlit in Snowflake, you can build apps using its component-rich, open source Python library.
>
> **[4:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=293)** You can modify code and see changes go live with side-by-side editor and app preview screens in Snowflake.
>
> **[4:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=299)** You can share Streamlit apps via URLs that leverage existing role-based access controls and run on Snowflake's scalable, secure, and performant infrastructure.
>
> **[5:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=309)** It's really cool.
>
> **[5:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=311)** As I mentioned, we're not going to talk about the top right of this chart here, so the last thing I want to call out is Snowpark Container Services.
>
> **[5:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=318)** In this seconds, minutes, hours framing, Snowpark Container Services falls on the hours side.
>
> **[5:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=326)** Snowpark Container Services lets you build custom ML models by letting you deploy, manage, and scale containerized workloads using Snowflake managed infrastructure.
>
> **[5:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=337)** These containers can include code in any programming language, for example, C or C++, Node.js, Python, R, React, et cetera, and can be executed using configurable hardware options, including CPUs and GPUs.
>
> **[5:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=350)** So if you need to do some custom AIML work, Snowpark containers give you flexibility and save you the headache of having to manage, compute in clusters for containers.
>
> **[5:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=359)** They also make it so you don't have to leave Snowflake's governed data ecosystem to build sophisticated AIML models and apps, which is pretty great.
>
> **[6:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=367)** So that's it for our flight over the Snowflake ML landscape.
>
> **[6:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=370)** I hope you observed the following during our journey.
>
> **[6:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=373)** One, to do ML work very quickly, you can use Snowflake Cortex ML functions, forecasting, anomaly detection, et cetera.
>
> **[6:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=380)** Two, if your use case requires a little more care, you can use the Snowpark ML modeling APIs, which make it easy to use common Python ML frameworks from within Snowflake.
>
> **[6:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=390)** You can use the Snowflake Model Registry to manage your models and metadata.
>
> **[6:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=394)** You can use the Snowflake Feature Store, so you have easy access to a continuously updated set of features for both model training and inference.
>
> **[6:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=402)** And remember that you use one Python Library, Snowpark ML, to access the Snowpark ML modeling APIs, the Snowflake Model Registry and the Snowflake Feature Store.
>
> **[6:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=411)** You could do your ML development in the Snowflake notebook, and you can use Streamlit in Snowflake to turn your data and ML models into interactive web apps.
>
> **[6:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=418)** Okay, and three, if your use case requires even more customization, you can build custom models using Snowpark Container Services.
>
> **[7:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-ml-overview-part-ii?u=76281980&t=426)** Now, let's spend a moment actually using Snowpark ML to train a model, plus make a prediction.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (36), data (10), [[Python (Programming Language)|Python]] (9), feature (8), [[Feature Engineering]] (2)
> **CLI Commands:** python (9), make (5), node (1)
> **Env Vars:** aiml (2), ide (1), sql (1)
> **Cross-References:** next video (1), we discussed (1)
> **File Paths:** node.js (1)
> **Code Identifiers:** log_model (1)
> **Tools:** jupyter (1)
> **Definitions:** is a  (1)


### 23. Snowpark ML Modeling

[↑ Back to Table of Contents](#table-of-contents)

#### Snowpark ML modeling: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=0)** - Okay, I'm really excited about these Snowpark ML modeling videos for two reasons.
>
> **[0:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=5)** First, we get to try out the Snowpark ML library.
>
> **[0:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=7)** Second writing it gave me an excuse to do something I wanted to do for a long time.
>
> **[0:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=12)** Create a weird data set that I could use to test how clever XGBoost is.
>
> **[0:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=17)** If you've never heard of XGBoost, don't worry, I'll tell you more about it in a moment.
>
> **[0:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=20)** But spoiler alert, we're about to see that XGBoost is very good at what it does.
>
> **[0:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=25)** So here's the setup for this next section.
>
> **[0:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=27)** Imagine you love, love, love the ice cream sandwich that the freezing point food truck offers.
>
> **[0:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=33)** You're obsessed, enthralled.
>
> **[0:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=35)** You can't escape its clutches, but you're never sure where it's going to be on a given day.
>
> **[0:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=39)** So you call the food truck company and beg for info and they're like, well, we don't know where it's going to go either.
>
> **[0:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=44)** The driver makes your own choices, but we do know it only visits one neighborhood per day and there are only eight possible neighborhoods it might go to.
>
> **[0:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=51)** And luckily for you, we have 20 years of data you can look through to see if you can detect some patterns.
>
> **[0:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=57)** So you load that truck location history into Snowflake and you want to guess where your favorite food truck is going to be on any given day.
>
> **[1:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=63)** You've heard that tree-based ML models are really good for making predictions.
>
> **[1:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=67)** So you decide you're going to use one of those, a model from XGBoost to be specific.
>
> **[1:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=72)** And you'll be able to do all the XGBoost stuff you need through the Snowpark ML library, meaning you'll never have to install or import XGBoost directly, which you're happy about because you're almost as obsessed with Snowflake as you are with freezing point ice cream sandwiches.
>
> **[1:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=86)** Okay, so here's how this will work.
>
> **[1:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=87)** I generated the data tracking this food truck's history of visits to different neighborhoods and I made the truck never deviate from a somewhat weird pattern.
>
> **[1:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=95)** So first I'll show you how the food truck decides which neighborhood to visit, and then we'll see if we can use Snowpark ML to build a classification model that could predict the truck's next move.
>
> **[1:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=106)** Along the way, we'll talk more generally about what you can do with Snowpark ML.
>
> **[1:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=111)** So now we're in a Jupyter Notebook.
>
> **[1:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=113)** We could have instead done all the work we're about to do from VS Code, which would've made connecting to Snowflake easier because we'd have access to the Snowflake VS Code extension.
>
> **[2:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=122)** We also could have done it from within Snowsight, but I wanted to use a Jupyter Notebook because I wanted to show you how to work with Snowflake in an external IDE.
>
> **[2:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=131)** It's a clean experience and worth showing.
>
> **[2:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=134)** You can ignore the PIP installing and the importing I did at the top, we'll talk a little bit more about which packages we're using later.
>
> **[2:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=141)** For now, let's talk about how I generated the freezing point data.
>
> **[2:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=145)** The driver of this truck really, really likes routines and for the past 20 years, she's followed her calendar very strictly in deciding which neighborhood to visit on any given day.
>
> **[2:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=155)** Here's her formula.
>
> **[2:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=156)** In January, she drives to neighborhood 1 on the 1st, the 8th, the 15th, the 22nd, and the 29th because her mom lives in neighborhood 1 in January and she likes to see her weekly.
>
> **[2:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=166)** She goes to neighborhood 2 on all the days in January.
>
> **[2:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=170)** From February through November, she visits neighborhood 1 on the 1st, neighborhood 2 on the 2nd, neighborhood 3 on the 3rd, and so on.
>
> **[2:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=176)** Then she loops back again after visiting neighborhood 7.
>
> **[2:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=178)** So on the 8th she visits neighborhood 1, on the 9th, she visits neighborhood 2 and so on.
>
> **[3:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=183)** Until the next month starts when she then restarts the pattern.
>
> **[3:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=186)** And December is easy.
>
> **[3:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=187)** In December, she visits neighborhood 8 every day because she finds that neighborhood's holiday decorations enchanting.
>
> **[3:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=193)** So I use that description of her neighborhood selection algorithm to generate one year's worth of data.
>
> **[3:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=198)** And then I just concatenated the data frame 20 times and uploaded that to Snowflake using the Snowsight UI.
>
> **[3:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=209)** Cool, so now we've got our data and we have our work cut out for us.
>
> **[3:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=212)** Let's see if we can use Snowpark ML to create a model that accurately predicts where this food truck is going to be on any given day.
>
> **[3:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=220)** The first thing we need to do is connect to Snowflake to build a bridge between the cloud and our local machine where our notebook is running.
>
> **[3:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=227)** Here's how we do this.
>
> **[3:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=228)** If we scroll back up, you'll see that we imported session from snowflake.snowpark.
>
> **[3:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=234)** Notice that the import statement doesn't match the name of the package we PIP installed at the top.
>
> **[3:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=238)** Here, we're importing snowflake.snowpark, but we're only able to do this because we already PIP installed the Snowflake.snowpark Python package.
>
> **[4:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=247)** Anyway, you'll notice that I also have this statement in there from credential import params.
>
> **[4:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=253)** To create a snowflake session in our account, we can hand over a dictionary of credentials, our account name, our username, our password, and so on.
>
> **[4:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=261)** To make this easier on myself, and because I don't like showing people my credentials in a demo, I created a separate credential.py file so I could import credentials as a library and pull that dictionary directly from there.
>
> **[4:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=273)** We talked about the idea of a session briefly when we were learning about Snowpark data frames, but again, the session object is really, really important because it includes all of your connection details.
>
> **[4:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=284)** You need to create your table from a session so the table is associated with all of the right permissions.
>
> **[4:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=290)** So we create our session and then we can immediately use the sessions table method to save our table as the data frame.
>
> **[4:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=297)** It's important to note that we're not actually pulling the table into our local memory here.
>
> **[5:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=301)** Instead, it's more like we're creating a reference to it, which is great because this would still work even if the table was a huge, huge table.
>
> **[5:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=308)** So let's run that.
>
> **[5:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=310)** Snowpark_df equals session.table and then test_database.test_schema.df_clean.
>
> **[5:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=316)** Let's take a look at the Snowpark data frame using the show method.
>
> **[5:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=319)** Snowpark_df.show and equals 40.
>
> **[5:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=323)** Cool, this looks good.
>
> **[5:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=323)** It does a month in a day.
>
> **[5:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=325)** And the neighborhood, which is the target variable and the thing we want to make a model to predict.
>
> **[5:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=332)** And just to double check that the historical data looks right, let's look at month 1, day 7.
>
> **[5:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=336)** That's a 2 just like it should be.
>
> **[5:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=338)** And day 8 should be a 1 because remember, the truck driver goes and visits her mother in neighborhood 1 every week in January.
>
> **[5:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=346)** Okay, let's use another Snowpark data frame method, count, to check that we do in fact have 7,300 rows, which is 365 times 20.
>
> **[5:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=357)** Snowpark_df.count. Yep, we're good.
>
> **[6:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=360)** Let's use the describe method to see that the range of values are all what we'd expect.
>
> **[6:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=364)** Snowpark_df.describe.show, and sure enough, they are.
>
> **[6:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=368)** 1 to 12 for months, 1 to 31 for days and 1 to 8 for neighborhoods.
>
> **[6:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=373)** If we group by neighborhood, we can see which neighborhoods get visited more or less by the food truck.
>
> **[6:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=378)** Stonepark_df.group_by then neighborhood.count.show.
>
> **[6:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=382)** Looks like Neighborhood 2 is the most popular because it gets visited so much each January.
>
> **[6:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=387)** Makes sense.
>
> **[6:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=388)** And Neighborhood 8 gets all of December to itself, but is never visited any other time during the year.
>
> **[6:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=393)** So it has the lowest count.
>
> **[6:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=395)** (graphics whooshing) We finally got our data all set up as Snowpark data frames.
>
> **[6:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-i?u=76281980&t=399)** So now comes the fun part, actually doing some Snowpark ML.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (14), [[Snowflake]] (11), next (3), cloud (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** pip (3), make (2), python (1)
> **Code Identifiers:** test_database (1), test_schema (1), df_clean (1), group_by (1)
> **Env Vars:** pip (3), ide (1)
> **Tools:** jupyter (2), vs code (2)
> **Prerequisites:** setup (1), install (1), set up (1)
> **Analogies:** imagine (1), just like (1)
> **File Paths:** credential.py (1)

#### Snowpark ML modeling: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=0)** - If you've been following along, you'll know we've got our data all set up.
>
> **[0:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=4)** Now we're ready to try to use Snowpark ML to predict which neighborhood that sneaky food truck will choose to go to on any given day in the future.
>
> **[0:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=12)** Let's get right back into it.
>
> **[0:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=14)** Snowpark ML has a few parts to it, but we're going to focus here on Snowpark ML modeling.
>
> **[0:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=19)** If you look at the docs for Snowpark ML, you'll see that what it's actually doing is incorporating lots of the most important functions and methods for many of the most important open source Python ML libraries, likescikit-learn, XGBoost, and LightGBM, so that they're really easy to use in Snowflake.
>
> **[0:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=36)** One example of a way this is really helpful is that there are lots of moments where if you call one of these models in Snowflake, training that model happens in a distributed way automatically.
>
> **[0:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=46)** Meaning it can cut your data up and train on different parts of it at the same time.
>
> **[0:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=50)** This parallelization can really speed up the training process.
>
> **[0:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=54)** So here we're going to use, and we could see this if we scroll up to the imports again, the XGBClassifier from snowflake.ml.modeling.xgboost.
>
> **[1:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=64)** This is definitely, definitely not a course on ML theory.
>
> **[1:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=68)** But at a high level, here's what this model is trying to do.
>
> **[1:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=71)** It tries to figure out the relationship between a set of labels, in our case, neighborhood one through eight, and some input variables, in our case, the day and the month.
>
> **[1:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=81)** It wants to get to the point where if you give it some input data, it can say, ah, you know what?
>
> **[1:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=87)** I bet I know what that output is going to be.
>
> **[1:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=89)** You can think of it as finding these patterns by coming up with a series of clever questions to ask about your data that when answered will eventually bend your data into buckets of similar items.
>
> **[1:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=100)** If you've ever played the game 20 questions where one person thinks of something and someone else gets to ask at most 20 yes or no questions to narrow down to the answers, it's kind of like that.
>
> **[1:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=110)** So in our case, it will do something like ask, hmm, do some neighborhoods come up in the data more in the second half of the year than the first?
>
> **[1:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=117)** The answer here would probably be yes, because neighborhood eight only appears in the second half of the year, but then it might try different cut points.
>
> **[2:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=125)** Do some neighborhoods come up more in the data in December than in the rest of the year?
>
> **[2:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=129)** And that will turn out to be a jackpot cut point because it will isolate neighborhood eight really cleanly.
>
> **[2:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=135)** It keeps asking these questions.
>
> **[2:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=137)** And then after it decides on a really strong initial question, it will go through this process again, splitting the data into smaller and smaller buckets that it hopes are becoming more and more concentrated with just one type of label.
>
> **[2:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=150)** They call models like this tree-based models, because if you draw out the logic, it looks like branches hanging down.
>
> **[2:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=157)** That's a very hand wavy explanation for the model we're about to use.
>
> **[2:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=161)** And there's a ton of outside reading you can do on XGBoost and tree-based classifiers if you're interested.
>
> **[2:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=167)** So in this case, we're dealing with the XGBClassifier that I mentioned above, and the classifier won't let us feed it labels that go from one to eight, which is how our neighborhoods are numbered, and instead it wants them to go from zero to seven.
>
> **[3:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=180)** It's just one of the criteria it insists on.
>
> **[3:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=183)** I've shown two ways to do that transformation here.
>
> **[3:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=185)** The first way is to just use Snowpark dataframe functionality.
>
> **[3:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=189)** For this, we use a Snowpark dataframe function called withColumn, which lets us create a column.
>
> **[3:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=194)** So we're calling this NEIGHBOORD2, and give it a value, which we want to be the original neighborhood value minus one.
>
> **[3:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=200)** Then we drop the original Neighborhood column since we don't need that anymore.
>
> **[3:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=204)** We could test that out.
>
> **[3:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=206)** test = snowpark_df.withColumn NEIGHBORHOOD2, snowpark_df.neighborhood -1, and then .drop Neighborhood.
>
> **[3:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=217)** Okay, test.show.
>
> **[3:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=219)** Sure enough, that looks pretty good.
>
> **[3:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=222)** But since this is a pretty common operation in the world of machine learning, there's actually a tool we can use out of the box to do this for us.
>
> **[3:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=229)** And I wanted to show that here because I wanted to emphasize that Snowpark ML makes available to you more than just ML models.
>
> **[3:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=237)** It also makes available many important pre-processing functions.
>
> **[4:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=240)** So here we'll use something called LabelEncoder, which we're pulling from, and we can see this if we scroll up, the preprocessing part of snowflake.ml.modeling.
>
> **[4:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=251)** So we have le = LabelEncoder, and then the input_cols and the output_cols, and we say drop_input_cols.
>
> **[4:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=259)** So we've set up LabelEncoder, so it takes an input_cols and gives the output_cols, and LabelEncoder will automatically subtract one from each value.
>
> **[4:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=269)** Then we use the fit method on this LabelEncoder.
>
> **[4:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=273)** So fitted = le.fit, and then snowpark_df.select NEIGHBORHOOD.
>
> **[4:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=279)** And then finally, we run the transform method on the fitted Snowpark dataframe.
>
> **[4:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=283)** And this is what actually executes the operations and gives us back our prepared dataframe.
>
> **[4:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=288)** snowpark_df_prepared = fitted.transform snowpark_df.
>
> **[4:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=293)** And if we take a look at that, snowpark_df_prepared.show and compare it with the previous dataframe, we'll see that they have the same values.
>
> **[5:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=306)** In the next video, we'll split our data into a training set and a test set, and we'll actually get to train our Snowpark ML XGBClassifier and make predictions.
>
> **[5:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-ii?u=76281980&t=317)** (bright playful music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), [[Snowflake]] (4), [[Python (Programming Language)|Python]] (1), game (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** snowpark_df (4), withcolumn (2), input_cols (2), output_cols (2), snowpark_df_prepared (2)
> **Env Vars:** neighboord2 (1), neighborhood2 (1), neighborhood (1)
> **UI Navigation:** scroll up (2), go to (1)
> **CLI Commands:** python (1), make (1)
> **Cross-References:** coming up (1), in the next (1)
> **Analogies:** think of it as (1), kind of like (1)
> **Prerequisites:** set up (2)

#### Snowpark ML modeling: Part 3
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=0)** - Now we're ready to split our data into a training set and a test set and move on to our final objective; training our model and seeing how well it performs.
>
> **[0:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=9)** For those of you who don't have a background in machine learning, splitting our data into a training set and a test set just means that we're holding back some of the data so that it's not used to train the model.
>
> **[0:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=20)** That's what we call the test set.
>
> **[0:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=21)** This is important because having a clean test set lets us check how good our model is by having to make predictions based on the test set and seeing how correct those predictions are.
>
> **[0:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=31)** We don't want to train the model on the same data we're going to test it on because that's like letting it prepare for the test by giving it the answers in advance.
>
> **[0:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=39)** So we're getting this random split from Snowpark ML, even though the underlying functionality was adopted from Psyche learn.
>
> **[0:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=45)** We'll set aside 10% of the data, so two of our 20 years worth of truck location data, for testing.
>
> **[0:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=51)** Great, now we'll use the write.mode.save_as_table method on the Snowpark data frame to save each of these as tables to our Snowflake instance.
>
> **[1:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=60)** And if we go to Snow site, we'll see the tables pop up.
>
> **[1:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=63)** I don't know about you, but somehow doing something locally and affecting something in the cloud is very satisfying to me.
>
> **[1:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=70)** Okay, and here's the moment we've been waiting for.
>
> **[1:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=72)** Now we're going to hand over our days and months data with the neighborhood target variable and let the XGB classifier try to mix and match that days and months info to predict the neighborhood the truck is in.
>
> **[1:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=84)** The feature columns are the columns the XGB classifier will play around with as it's learning to guess what the label column is.
>
> **[1:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=91)** So we create our model.
>
> **[1:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=92)** You can see that we've handed over the input col labels and output col labels as inputs.
>
> **[1:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=98)** Xgbboost model = XGBClassifier.
>
> **[1:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=100)** We have input_cols, label_cols.
>
> **[1:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=102)** And then we call the fit method on that model with our data frame as the argument.
>
> **[1:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=107)** And this fit method call is what starts the training process.
>
> **[2:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=122)** So now for the moment of truth, let's check the accuracy of our model against our test data by using the score method and feeding in the test data frame as the argument.
>
> **[2:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=132)** The truck driver schedule is kind of odd, but I intentionally made it very regular to see how good xgboost is at picking up strange but very consistent signals in the data.
>
> **[2:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=144)** Okay, so accuracy=xgboost model.score.
>
> **[2:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=148)** Put in the test snowpark data frame.
>
> **[2:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=150)** And then we print the accuracy and it gets a perfect score.
>
> **[2:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=155)** A 100 out of 100.
>
> **[2:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=157)** The xgboost classifier we trained, when applied to the test set, made 730 predictions and got 730 of those correct.
>
> **[2:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=166)** Pretty cool.
>
> **[2:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=168)** We're not going to do this here, but if I were to keep going, I'd also register our model to the Snowpark model registry so it's easy to access later and I can keep track of all of my models.
>
> **[2:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=178)** Okay, we just covered a lot.
>
> **[3:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=180)** Now we know exactly where that freezing point truck will be all the time.
>
> **[3:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=185)** We can buy an ice cream sandwich, or even better, multiple ice cream sandwiches every day.
>
> **[3:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=191)** Before I recap what we just covered, I want to note that we could have done this inside our SQL workflow using the Snowflake Cortex ML function classification.
>
> **[3:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=201)** But I wanted to do this using Snowpark ML since we've already covered Snowflake Cortex LLM functions and got a taste for how Snowflake Cortex's functions work.
>
> **[3:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=211)** And because it's good to know Snowpark ML because there will be moments when you need more customization than you can get with the Snowflake Cortex ML functions.
>
> **[3:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=219)** Phew, that was a lot of information.
>
> **[3:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=222)** We learned how to, one, connect our local development environment, in this case a Jupyter Notebook, to Snowflake by creating a session using session.builder.configs.create.
>
> **[3:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=234)** Two, create a data frame of a table in Snowflake using session.table.
>
> **[3:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=239)** Three, use additional Snowpark data frame methods, like count, describe, group I, and with column.
>
> **[4:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=246)** Four, pre-process our data with Snowpark MLs label encoder.
>
> **[4:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=251)** Five, split our Snowpark data frame into a training set and a test set using random split.
>
> **[4:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=256)** Six, save a table to Snowflake using the data frame method; write.mode.save_as_table.
>
> **[4:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=262)** Seven, train an XGB Classifier and fit that to the training data.
>
> **[4:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=266)** And eight, calculate the accuracy of our model using the XGB Classifiers score method.
>
> **[4:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=273)** That's a lot.
>
> **[4:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=275)** If you don't know a lot about machine learning, so a bunch of this was mysterious, don't worry too much about it.
>
> **[4:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=280)** But I hope you have a better sense as to how to use Snowpark ML to run your ML workloads from within Snowflake.
>
> **[4:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowpark-ml-modeling-part-iii?u=76281980&t=287)** (lively music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (19), [[Snowflake]] (9), cloud (1), feature (1), [[SQL]] (1)
> **Env Vars:** xgb (4), sql (1), llm (1)
> **Code Identifiers:** save_as_table (2), input_cols (1), label_cols (1)
> **CLI Commands:** make (1)
> **Tools:** jupyter (1)
> **UI Navigation:** go to (1)
> **Definitions:** means that (1)
> **Warnings:** note that (1)


### 24. Applications with Snowflake

[↑ Back to Table of Contents](#table-of-contents)

#### Snowflake applications overview: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=0)** - We've covered three of the four workloads we'll cover in this course DE, GenAI, and ML.
>
> **[0:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=5)** Woo-hoo, now there's just one workload left on our agenda, applications.
>
> **[0:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=9)** There's lots to talk about here, so let's get to it.
>
> **[0:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=12)** So I think a necessary first step is for us to discuss what an application even is.
>
> **[0:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=16)** This isn't a formal definition, but when we talk about an application, we're referring to a software product that can help thousands, millions, or even billions of end users do certain things like placing an order at a store, visualizing important data, sharing pictures and videos, and much more.
>
> **[0:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=32)** Applications can be highly sophisticated pieces of software made up of many moving parts that are engineered and managed by lots of different teams.
>
> **[0:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=39)** For example, it's quite common for there to be specific engineering teams dedicated to one, building the front end or user interface of the application.
>
> **[0:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=48)** Two, building the logic that processes the end user's input and reads from and writes to the database, sometimes referred to as the backend.
>
> **[0:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=55)** And three, building the interface that connects the front end to the backend of the application or the API.
>
> **[1:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=62)** This type of team structure is common because the different components used to build the application tend to be different technologies that each require different types of expertise.
>
> **[1:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=73)** The set of technologies is commonly referred to as the application stack.
>
> **[1:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=77)** So how and where exactly does Snowflake fit into this type of scenario where an application is built with a large and custom set of technologies?
>
> **[1:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=85)** Snowflake supports several native programmatic interfaces, drivers, and connectors across many popular programming languages, which means it's easy to integrate Snowflake into a broader custom application stack.
>
> **[1:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=99)** For example, you can connect to Snowflake using the Snowflake Connector for Python, the Snowflake Node js driver, the PHP PDO driver for Snowflake, and more.
>
> **[1:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=109)** This is not a comprehensive list I'm showing here, and if you have no idea what basically any of these are and you're feeling very lost and perhaps even a little overwhelmed, that's totally fine.
>
> **[1:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=119)** I'm mostly including this slide for those people taking the course who have experience building apps, and for everyone else, don't stress out about this, just pick up what you can.
>
> **[2:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=128)** If you were building an application with, say, a Python backend, you could use the Snowflake Connector for Python to power the application's backend logic.
>
> **[2:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=136)** The pattern for using these drivers and connectors is usually establish a connection to your snowflake instance using the driver or connector, execute SQL commands based on actions taken in the user interface.
>
> **[2:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=147)** For example, manage databases, tables, schemas, managed compute resources, or run SQL queries using Select for Data Analysis or transformation.
>
> **[2:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=155)** You could extend this pattern to accommodate large, sophisticated applications where you tailor the SQL you execute, the backend logic, according to the interactions a user takes in the front end.
>
> **[2:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=166)** Snowflake also supports framework-specific connectors.
>
> **[2:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=169)** For example, there's the Django Snowflake Connector, which would be used if you were building a web application built with the Django web application framework.
>
> **[2:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=177)** Under the hood, the connector uses the Snowflake Connector for Python, but the Django Snowflake connector is tailored to work seamlessly with common Django application patterns.
>
> **[3:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=186)** And if you really want to spice things up, there's also the Snowflake Python API, which lets you programmatically manage all sorts of snowflake objects.
>
> **[3:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=194)** For example, you can use the Python API to create, alter or drop tables, tasks, virtual warehouses, and much more.
>
> **[3:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=202)** And while Snowflake is powerful for building data-intensive analytical applications, it also has an object called hybrid tables that provides many of the strengths of both analytical and transactional capabilities.
>
> **[3:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=214)** This means your application can be built for both workloads with even just a single database, Snowflake, and a single hybrid table if you really wanted to.
>
> **[3:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=222)** This helps you build scalable web applications that serve multiple use cases without needing to manage different backend technologies.
>
> **[3:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=228)** For example, one transactional database and one analytical database.
>
> **[3:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=232)** This type of flexibility is really powerful.
>
> **[3:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-i?u=76281980&t=236)** That's a lot to absorb, so to make this more concrete, we'll next work our way through a very stylized chart that shows some of the ways you can build your app with Snowflake.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (18), application (12), [[Python (Programming Language)|Python]] (6), database (4), [[Django]] (4)
> **CLI Commands:** python (6), node (1), php (1), make (1)
> **Env Vars:** api (3), sql (3), php (1), pdo (1)
> **Analogies:** for example (6)
> **Speakers:** - we (1)
> **Non-Speech:** (upbeat music) (1)

#### Snowflake applications overview: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=0)** - Earlier, we introduced the notion of an application.
>
> **[0:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=3)** We talked about app architecture concepts, especially frontend and backend.
>
> **[0:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=7)** We talked about Snowflake's drivers and connectors, we talked briefly about the Snowflake Python API, and we introduced hybrid tables, which support transactional workloads.
>
> **[0:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=16)** In this video, we'll talk through some stylized app stacks that incorporates Snowflake to greater or lesser degrees.
>
> **[0:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=23)** So here's what I'm trying to convey through this chart.
>
> **[0:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=25)** If you wake up one morning and you're like, "You know what?
>
> **[0:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=27)** I want to have Snowflake as part of my app infrastructure."
>
> **[0:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=30)** The first big decision you need to make is whether you want to host the frontend of the app outside of Snowflake's infrastructure, and you want to use Snowflake as the backend, roughly speaking, that's this first set of two sample architectures on the left.
>
> **[0:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=42)** Or do you want to host the entire thing in Snowflake, including the frontend, to bring your code closer to the data?
>
> **[0:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=49)** And again, for the non-apps folks, you could think of the frontend as the user-facing part of the app, the UI, et cetera, and the back end as the part that controls the logic and the data flows.
>
> **[0:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=59)** Let's talk more about the first option, hosting your frontend outside of Snowflake, but using Snowflake as the backend.
>
> **[1:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=66)** Here's one example.
>
> **[1:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=67)** If you have a JavaScript frontend like React, you could say, "You know what?
>
> **[1:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=71)** This is a data-intensive app, and I really like Snowflake for its near unlimited scalability.
>
> **[1:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=75)** So when users interact with my app and their interaction data gets stored, I want that to be sent to Snowflake using a driver."
>
> **[1:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=82)** In this case, you'd probably use Node.js because you're already working in JavaScript.
>
> **[1:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=86)** In the next example, let's say you're a Python developer and you really like Django or open-source Streamlit.
>
> **[1:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=92)** You could create your frontend using one of those.
>
> **[1:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=94)** And then you could say, "Connect to Snowflake using the Snowflake Connector for Python.
>
> **[1:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=99)** Execute some SQL using the connector right to a hybrid table, and also use the Python API to manage Snowpark Container Services and maybe tasks associated with that service all on Python."
>
> **[1:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=111)** Okay, so we've talked about how you could create an app built on Snowflake if you wanted to treat Snowflake as the backend.
>
> **[1:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=117)** But you also have the option, shown on the right, of actually using Snowflake for everything.
>
> **[2:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=122)** Maybe you want to lower latency and having everything hosted in Snowflake is just faster for your use case.
>
> **[2:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=128)** Maybe you have security or regulatory concerns.
>
> **[2:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=130)** Maybe you have less experience with traditional web development and you really like to shorten your time to market.
>
> **[2:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=135)** Maybe you care about scalability, high availability, or the reduced operational burden of working with Snowflake.
>
> **[2:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=140)** Lots of possibilities.
>
> **[2:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=142)** Scenarios like these are where Snowflake really shines.
>
> **[2:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=145)** Instead of being part of a broader application stack, it, in fact, becomes the entire stack for the application.
>
> **[2:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=151)** Let's first talk about what this would mean if you used Streamlit in Snowflake as your frontend.
>
> **[2:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=156)** Streamlit is a popular open-source framework for building powerful applications with beautiful user interfaces all in Python.
>
> **[2:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=162)** It's available directly within Snowflake as Streamlit in Snowflake, which we'll test out in a future video.
>
> **[2:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=168)** This means you can use it within your Snowflake account.
>
> **[2:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=170)** No need to move data or integrate your code with external technologies.
>
> **[2:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=174)** An entire application built and deployed in Snowflake.
>
> **[2:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=178)** With Streamlit in Snowflake, one, your application frontend will be built using Streamlit, by Python.
>
> **[3:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=184)** Two, your application logic can be powered by Snowflake SQL or Snowpark for data transformations.
>
> **[3:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=191)** It can be powered by UDFs, by store procedures, by tasks, and more.
>
> **[3:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=194)** Three, there's no headache around where to deploy and host since Snowflake is the application hosting infrastructure, and this means your app is easy to roll out and share.
>
> **[3:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=203)** And finally, you could decide that you didn't want to use Streamlit as your frontend; you really like React, say.
>
> **[3:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=209)** And instead, you could host that frontend inside Snowpark Container Services.
>
> **[3:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=213)** That way, everything still lives inside your Snowflake account with all the benefits that come from that.
>
> **[3:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=218)** The last thing I wanted to cover here is one great way you can share your app with the world once you've built it.
>
> **[3:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=224)** Snowflake has something called the Snowflake Native App Framework, which lets you bundle up your application logic into an application package, list it on the Snowflake Marketplace, and allow consumers to try it, purchase it and install it in their Snowflake account, and power it using their own compute.
>
> **[3:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=239)** So if this sounds exciting to you, definitely look into Snowflake Native Apps.
>
> **[4:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=243)** Okay, to recap, here's what we covered in our Snowflake Applications Overview.
>
> **[4:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=248)** We introduced the notion of an application, we introduced app architecture concepts, especially frontend and backend.
>
> **[4:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=255)** We introduced Snowflake's drivers and connectors, like the Snowflake JDBC Driver, the Snowflake Connector for Python, the Go Snowflake Driver.
>
> **[4:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=262)** We introduced the Python API, which lets you manipulate Snowflake objects, like databases, schemas, tables, warehouses, tasks, all from Python.
>
> **[4:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=270)** We introduced hybrid tables, which can support transactional workloads, but are still useful for analytics.
>
> **[4:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=276)** We introduced the idea that you can make an app with a frontend outside Snowflake that uses Snowflake as the backend through drivers and connectors.
>
> **[4:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=284)** We introduced Streamlit and Snowflake and the idea that you could host your frontend and Snowpark Container Services and thus have your entire applications architecture inside Snowflake.
>
> **[4:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=292)** And we introduced the Snowflake Native App framework that allows you to build, distribute, and monetize your apps on the Snowflake Marketplace.
>
> **[5:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=300)** We went through this at whirlwind speed, but I'm hoping it was still helpful no matter your background.
>
> **[5:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=305)** If this is the first time you've ever heard the word app, I'm hoping you have a slightly better sense of what that might mean and how Snowflake could be a part of your app architecture.
>
> **[5:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=312)** And if you're an experienced app developer, I'm hoping you have a better sense of what's possible with Snowflake.
>
> **[5:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=318)** I'd like to finish with two very tactical pieces of advice.
>
> **[5:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=321)** One, if you're integrating Snowflake into a larger stack and not looking to do a major redesign of your app or build from scratch, go learn more about Snowflake's drivers, connectors, and Python API.
>
> **[5:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=332)** Two, if you're starting fresh and you prefer to build your whole app in Snowflake, Streamlit and Snowflake is a great place to start.
>
> **[5:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=339)** And also a great jumping off point into Snowflake-native applications.
>
> **[5:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=342)** And on that note, let's go through a quick example of Streamlit and Snowflake.
>
> **[5:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/snowflake-applications-overview-part-ii?u=76281980&t=345)** (graphic whooshing) (gentle upbeat music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (53), [[Python (Programming Language)|Python]] (11), application (10), data (6), api (4)
> **CLI Commands:** python (11), make (2), node (1)
> **Env Vars:** api (4), sql (2), jdbc (1)
> **Cross-References:** we talked about (2), in the next (1), we covered (1)
> **Definitions:** is a  (3)
> **Tools:** notion (2)
> **File Paths:** node.js (1)
> **Prerequisites:** install (1)


### 25. Streamlit in Snowflake

[↑ Back to Table of Contents](#table-of-contents)

#### Streamlit in Snowflake: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=0)** - At Snowflake, we have a photography Slack channel, where Snowflake employees share beautiful photographs they've taken.
>
> **[0:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=6)** Most of them are of landscapes or wildlife, some of architecture.
>
> **[0:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=10)** One of my colleagues, Dash, frequently shares photographs in that Slack channel.
>
> **[0:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=15)** Actually, you sort of see a bunch of Dash in this course, because this is a sticker of him on the back of my laptop.
>
> **[0:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=21)** He's famous for giving Snowflake demos while wearing ski goggles.
>
> **[0:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=25)** Anyway, I have this tradition of periodically updating my desktop background with one of Dash's photos when a new one comes along that I really like, a picture of the Aurora Borealis, a picture of a snow-covered mountain, a picture of a dock jutting into a lake with mountains in the background.
>
> **[0:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=39)** I'm starting this video talking about the Snowflake photography Slack channel, because, and I'm totally serious about this, this is legitimately what comes to mind when I think about building apps with Streamlit, which is the subject of this video.
>
> **[0:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=52)** Looking at a beautiful Streamlit app feels like looking at a photograph of Mount Rainier.
>
> **[0:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=56)** Saying that makes me feel like I'm on a 2:00 AM infomercial for a must-have electric whisk, but that's how I feel.
>
> **[1:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=62)** Streamlit apps are beautiful, but instead of talking to you about how beautiful they are, I should just show you some from the gallery on their website.
>
> **[1:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=70)** If we go to [Streamlit.io/gallery](https://Streamlit.io/gallery) and we click on Geography and Society, we can click on the Prettymapp Streamlit app, which lets you enter the name of a location and generate a beautiful map.
>
> **[1:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=82)** Let's click on the city Heerhugowaard in the Netherlands.
>
> **[1:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=86)** We can change the color theme.
>
> **[1:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=91)** While this is loading, let me tell you a bit about Streamlit.
>
> **[1:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=93)** It's an open-source framework that lets you create dynamic data applications with just a few lines of Python code.
>
> **[1:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=99)** Okay, that's done.
>
> **[1:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=100)** For fun, let's type in JFK Airport, New York, which is, like, three miles from where I grew up.
>
> **[1:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=107)** So cool.
>
> **[1:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=108)** Streamlit is available natively within Snowflake's Snowsight UI.
>
> **[1:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=111)** We call this Streamlit in Snowflake and it lets you easily connect to any dataset you already have access to within your warehouse and deploy securely to the rest of your organization in one click.
>
> **[2:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=122)** Now, what's most impressive to me about Streamlit isn't that the final products are beautiful, there are lots of sleek apps in the world, but how easy they are to make.
>
> **[2:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=130)** You don't have to go to a coding bootcamp and learn React to make an app this crisp.
>
> **[2:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=134)** You can do it with a simple Python script.
>
> **[2:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=137)** Okay. JFK is an intense-looking airport.
>
> **[2:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=140)** It looks like a beetle with giant pincers.
>
> **[2:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=143)** Anyway, to see how easy these are to make, let's take our Tasty Bytes data and make a simple Streamlit app using Streamlit in Snowflake.
>
> **[2:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=152)** To do this, we can go over to Snowsight, click on projects, and click on Streamlit.
>
> **[2:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=157)** Then we click plus Streamlit app and I'll copy in some code.
>
> **[2:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=167)** A few things to notice right away about the user interface.
>
> **[2:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=170)** There's a run button on the top right that we can use to manually trigger the app to rerun after we've made changes.
>
> **[2:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=178)** There's also a share button in the top right that makes it easy to share your app with other Snowflake users in your account.
>
> **[3:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=185)** Then at the top, there's a little dropdown that lets you specify some app settings, like which warehouse you're using.
>
> **[3:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=192)** Okay, this is probably obvious, but on the right, you're seeing the rendered app and you can scroll up and down and interact with it.
>
> **[3:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=200)** Before we look at the code, let's see what this app is doing.
>
> **[3:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=203)** Let's make it full screen for this part.
>
> **[3:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=207)** So here, we're looking at daily Tasty Bytes food truck revenue for the city of San Mateo from 2020 to 2023.
>
> **[3:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=215)** If we hover over the line chart, we can see the total sum of the orders for that day.
>
> **[3:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=219)** We can also toggle the chart to see the raw data instead, so total order amounts per day, or we can see the SQL query that's providing this data.
>
> **[3:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=228)** You'll also notice that we can add in other cities through the city dropdown.
>
> **[3:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=231)** Let's add in Berlin and Boston.
>
> **[3:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=234)** We can also update the date range.
>
> **[3:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=238)** Now, everything we're doing here is just very standard Streamlit functionality and there's so, so much more we could do to customize this.
>
> **[4:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=245)** For example, we could build multi-page apps or make the look of the app match your company's branding, but if you've ever built even an app as straightforward as this one, you know there's actually a lot going on here behind the scenes to get this to work so smoothly.
>
> **[4:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=258)** If we instead look at the code, we can see the magic happening.
>
> **[4:22](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=262)** At the top, we're importing the libraries we'll use to make the app work.
>
> **[4:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=267)** I want to call attention to the import Streamlit as ST line, since you'll see ST functions peppered throughout the script.
>
> **[4:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=274)** The first thing the app does is create a session object using get_active_session.
>
> **[4:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=279)** Among other things, this lets us interact with our Snowflake data in the app and one reason to use Streamlit in Snowflake is the low latency you get from bringing your code so close to the data.
>
> **[4:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=290)** After that, we see our first ST dot something, in this case st.title.
>
> **[4:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=295)** This creates a Markdown style title, and if you haven't heard of Markdown, it's a markup language that lets you format text.
>
> **[5:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=302)** So let's change the title a bit so we can see how the app re-renders quickly to let us see the effect of the change.
>
> **[5:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=308)** Let's make Tasty Tastiest and let's change the first emoji to a smiley face.
>
> **[5:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=315)** You can see that the next command is st.write and that corresponds to the text we're seeing in the app below the title, and then we have st.divider, which creates this little line, which is there for styling.
>
> **[5:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=328)** If we delete that, the line will go away.
>
> **[5:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=331)** I like it better with the line, so let's put that back.
>
> **[5:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=337)** Next, we'll see how the different pieces of the app come together to make the final product.
>
> **[5:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-i?u=76281980&t=342)** (chilled music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (10), data (6), [[Slack]] (3), [[Python (Programming Language)|Python]] (2), next (2)
> **CLI Commands:** make (9), python (2)
> **UI Navigation:** click on (5), go to (2), dropdown (2), scroll up (1), toggle (1)
> **Analogies:** picture (3), for example (1)
> **Env Vars:** jfk (2), sql (1)
> **Tools:** slack (3)
> **Definitions:** is a  (1), we call this (1), is an  (1)
> **Code Identifiers:** get_active_session (1)

#### Streamlit in Snowflake: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=0)** - We left off just when things were starting to get interesting.
>
> **[0:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=3)** We were about to define the two functions that run the SQL queries to pull the data we need.
>
> **[0:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=8)** Let's talk about that now.
>
> **[0:10](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=10)** First, we'll hide the app for a moment so we can see the code full screen.
>
> **[0:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=14)** Okay, for the first function, you give it a list of city names and a start year and an end year, and it will calculate the total order value for each day in that range for each of those cities, you'll notice that it generates the SQL dynamically.
>
> **[0:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=28)** You can see city names, start year, and end year inside the curly brackets.
>
> **[0:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=34)** Then it converts the result to pandas and returns that plus the text of the SQL query that you use to generate that data.
>
> **[0:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=41)** The next function get unique cities is much simpler.
>
> **[0:45](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=45)** It takes no arguments and we'll use it later to generate the city dropdown menu.
>
> **[0:50](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=50)** Each of these two functions has an ST dot Cache dot data operator above it, which just means that Streamlit will pay attention to whether you've already run that function for that particular set of inputs before.
>
> **[1:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=60)** And if you have, it will pull the results out of cache so you don't have to run it again unnecessarily.
>
> **[1:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=66)** It's very smart.
>
> **[1:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=68)** Cool, so believe it or not, we're almost done with this app.
>
> **[1:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=72)** It's less than 100 lines of code total.
>
> **[1:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=77)** The next function get city sales chart, takes in a data frame and uses the Altair Library to generate the main chart we see in the app.
>
> **[1:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=86)** And I'll pull up the app so you can see that again.
>
> **[1:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=89)** You can see that it creates a line with tool tip equals true, and that lets us hover over the chart and see the corresponding values.
>
> **[1:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=98)** And among other things, it's specifying the labels for the axis.
>
> **[1:41](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=101)** And the last function here is just one that helps us format the SQL output so it looks nice.
>
> **[1:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=109)** Okay, so, so far we haven't actually run these functions.
>
> **[1:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=112)** We've only created their logic that's about to change.
>
> **[1:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=116)** So this first call, second call line, separates what comes next into two columns.
>
> **[2:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=122)** And to specify what should go in each of these invisible columns we've created for layout purposes, we have two width statements.
>
> **[2:08](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=128)** The first one supplies what should happen in the first column, which is the one that has a slider.
>
> **[2:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=132)** You can see SD dot select slider.
>
> **[2:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=135)** This saves the values you get from that slider as start year and end year.
>
> **[2:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=139)** And those are the values we'll feed into the get city sales data function we created above when it actually comes time to call it.
>
> **[2:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=146)** The second column is the multi-select that gives us back the list of cities we want to query data for.
>
> **[2:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=152)** And that will also be an input into the get city sales data function.
>
> **[2:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=156)** You need that, so the app knows which cities you're looking for data for.
>
> **[2:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=159)** The app can't read your mind and any text in the app you can find here in the code, like the text above the slider and the text above the multi-select.
>
> **[2:47](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=167)** So let's jump down and look at the sales data sales SQL line.
>
> **[2:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=171)** This is where we actually call get city sales data and get back the data frame we're going to use to make our chart.
>
> **[2:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=178)** And finally, we create three tabs, chart tab, data frame tab, and query tab that correspond to each of the tabs we can toggle through on the app.
>
> **[3:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=187)** And then we assign content to each tab, the Altair chart, the data frame, and the formatted SQL.
>
> **[3:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=195)** So I don't expect you to absorb all or even much of that, but I want to pause for a moment to reflect on the fact that in fewer than 100 lines of Python, including our import statements, we created this app.
>
> **[3:28](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=208)** It has layouts that change dynamically if I narrow the window, it is a slider and a multi-select that the chart below dynamically takes as input to refresh.
>
> **[3:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=217)** And I'll note that this multi-select is pretty sophisticated.
>
> **[3:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=220)** Offers suggestions as you're typing.
>
> **[3:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=222)** You can use it as a dropdown.
>
> **[3:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=224)** Our app has multiple tabs we can toggle between.
>
> **[3:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=226)** We can hover over the chart to see the underlying values.
>
> **[3:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=229)** This is pretty impressive and that doesn't even talk about the scale.
>
> **[3:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=233)** That Orders V view that we're querying has more than 690 million rows and we can generate these app results fast.
>
> **[4:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=242)** That's because the Streamlit code is integrated into Snowflake itself and Snowflake scales so well.
>
> **[4:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=247)** So cool.
>
> **[4:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=249)** To recap, here's what we covered.
>
> **[4:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=251)** One, open source Streamlit and Streamlit in Snowflake.
>
> **[4:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=256)** Two, the Streamlit app gallery.
>
> **[4:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=258)** Three, the different parts of the Streamlit and Snowflake UI.
>
> **[4:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=263)** Four, how to create a session object using get active session from Snowflake dot Snowflake.
>
> **[4:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=269)** Five, the basics of the ST dot Cache Data Operator.
>
> **[4:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=273)** Six, how to run a SQL query using session dot SQL.
>
> **[4:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=277)** And seven, a bunch of Streamlit fundamentals like creating a title with ST dot title, outputting text with ST dot right, creating a divider with ST dot divider, creating columns with ST dot columns, creating a slider with ST dot select slider, creating a multi-select with ST dot multi-select, and creating tabs with ST dot tabs.
>
> **[4:56](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=296)** I do not expect you to memorize all of these details.
>
> **[4:59](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=299)** Instead, my hope is that you'll emerge from this video feeling like you're not many steps away from being able to build really cool apps with Streamlit and Snowflake.
>
> **[5:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/streamlit-in-snowflake-part-ii?u=76281980&t=309)** And this might be too much to hope for, but I'd also love it if you came away from this feeling that the Streamlit end result and creation process can be very beautiful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (14), [[SQL]] (8), [[Snowflake]] (7), next (3), [[Pandas (Software)|Pandas]] (1)
> **Env Vars:** sql (8)
> **UI Navigation:** dropdown (2), toggle (2)
> **CLI Commands:** find (1), make (1), python (1)
> **Definitions:** means that (1), is a  (1)
> **Cross-References:** we covered (1)
> **Warnings:** note that (1)
> **Speakers:** - we (1)


### 26. The Data Cloud

[↑ Back to Table of Contents](#table-of-contents)

#### The data cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=0)** - Before we finish this module on builder workloads, I want to come back to an idea that we talked about in the very first video of the course, but I suspect might resonate more now than at the beginning.
>
> **[0:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=12)** Here it is. Snowflake is the data cloud.
>
> **[0:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=16)** If I had a mic, I'd drop it for effect.
>
> **[0:18](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=18)** I guess I actually do have a mic, but it's attached.
>
> **[0:20](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=20)** It would be hard to drop, and I think some people would get angry at me.
>
> **[0:23](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=23)** Anyway, here's my interpretation of what that means.
>
> **[0:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=26)** I grew up in an era where the companies I worked for were usually already deep into their cloud migrations.
>
> **[0:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=32)** If we had big servers sitting around in a closet, I was not aware of them.
>
> **[0:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=37)** But many people more experienced than me, remember times when everyone stored their data in on-prem servers that they owned, and the data was physically siloed in different closets and different regions, et cetera.
>
> **[0:48](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=48)** But even those of us who grew up in the cloud era have experienced a slightly more nuanced version of data silos.
>
> **[0:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=54)** You have one system that doesn't talk to another.
>
> **[0:57](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=57)** Maybe your customer relationship management tool, your CRM, doesn't easily talk to your product usage data, and you'd really, really like it to.
>
> **[1:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=65)** Maybe you actually have multiple CRM instances and it's hard to get one to talk to another.
>
> **[1:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=69)** Maybe your company is so big that different teams have their own tooling and possibly even use different cloud providers.
>
> **[1:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=76)** These aren't silos of the old sort necessarily, all of these systems could be in the cloud, but they're still silos because the data still needs to be moved and copied between different systems for teams to have access to it.
>
> **[1:27](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=87)** So at Snowflake, we think of the data cloud as having two elements.
>
> **[1:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=90)** One, Snowflake's platform.
>
> **[1:32](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=92)** The technology itself required to bring data together and support the different development that runs against it.
>
> **[1:38](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=98)** And two, the content.
>
> **[1:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=100)** This can be data sets, machine learning models or applications similar to what you built earlier.
>
> **[1:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=106)** These come together to create a global network where orgs and users can connect to the relevant content through a single platform.
>
> **[1:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=113)** And the vision that we're working towards is at a minimum, one that eliminates the need for silos.
>
> **[1:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=118)** One where any employee at a company with the right permissions can access and work with the content they need, again, data, but also apps, and models when they need it.
>
> **[2:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=127)** Without the complexity of moving it between silos or limiting the type of development they can do.
>
> **[2:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=131)** This is a powerful vision and it's made possible by the fact that Snowflake makes available all the tooling we've covered in this course and more.
>
> **[2:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=139)** But there's a more ambitious version of this vision, and this is the one I'm particularly excited about.
>
> **[2:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=144)** Snowflake is building a world where organizations not only have zero silos within the org, but where orgs through Snowflake have bridges to other orgs.
>
> **[2:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=154)** So Company A can share data and apps with Company B through the Snowflake marketplace.
>
> **[2:40](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=160)** No ingestion necessary.
>
> **[2:42](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=162)** When data is replicated across clouds and regions, you can access it in a zero copy way, almost as if it were a dataset in your own Snowflake instance.
>
> **[2:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=171)** Plus those same access permissions and governance policies get carried through.
>
> **[2:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=175)** You need weather data, but don't want to spend weeks scraping it, cleaning it, and getting it into a shape where you can use it?
>
> **[3:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=181)** Just join your tables to a weather data set available in the same cloud and region where you're already working.
>
> **[3:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=187)** You're a geospatial engineer and want access to a specialized tool?
>
> **[3:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=191)** Find a geospatial app in the marketplace.
>
> **[3:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=194)** Builders are essential to this vision.
>
> **[3:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=197)** Who is going to make the apps?
>
> **[3:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=199)** Who is going to create the pipelines to keep these shared data sets up to date and accurate?
>
> **[3:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=204)** Builders.
>
> **[3:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=206)** Some marketing terms are just spin, and don't have much substance behind them.
>
> **[3:30](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=210)** I was skeptical of the term data cloud for a while because I worried it might be like that, but I think it's not.
>
> **[3:36](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=216)** If you have all the tools you need to work with your data all in one place, and you could provide and use data and apps from other orgs, that's a big deal.
>
> **[3:46](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=226)** Add in a single governance model that cuts across everything and you have something that you can use whether you're experimenting or deploying to production.
>
> **[3:54](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=234)** So Snowflake is the data cloud and builders are essential for making the most ambitious version of this vision happen.
>
> **[4:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/the-data-cloud?u=76281980&t=242)** (air whooshing) (bright music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (19), [[Snowflake]] (9), cloud (9), teams (2), management (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** crm (2)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Prerequisites:** required to (1)
> **Speakers:** - before (1)

#### Wrap-up of overview of builder workloads
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=0)** - If we just covered a massive amount of material, I'm a Snowflake employee, and it's my job to think about this every day, and even I end up thinking, "Wow, the Snowflake platform does a lot."
>
> **[0:09](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=9)** If you're feeling overwhelmed, I hope you could take comfort as I do in the fact that no single one of these topics is super complicated.
>
> **[0:17](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=17)** Snowflake works very hard to make each feature and object user-friendly and simple, and each is learnable in a finite amount of time.
>
> **[0:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=25)** Okay, so here's a quick recap of what we covered.
>
> **[0:29](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=29)** At the beginning of the course, we learned about Snowflake's core objects and architecture, things like virtual warehouses, stages, basic ingestion databases, and more.
>
> **[0:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=39)** In the next part of our course, we learned about many Snowflake features and a few new objects as well.
>
> **[0:44](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=44)** We covered time travel, cloning, UDFs, UDTFs, stored procedures, and snowpark data frames to name a few of the topics.
>
> **[0:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=52)** And in the series of videos we just completed, we ran through overviews of several builder workloads and tried out one feature from each of those workloads.
>
> **[1:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=62)** We talked about Snowflake's data engineering capabilities, and then tried out snowpipe.
>
> **[1:06](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=66)** We talked about Snowflake's gen AI capabilities, and then tried out Snowflake cortex LLM functions.
>
> **[1:12](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=72)** We talked about Snowflake's ML capabilities and then tried out snowpark ML.
>
> **[1:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=76)** We talked about Snowflake's app capabilities and then tried out streamlet.
>
> **[1:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=79)** And finally we talked about what it means for Snowflake to be the data cloud.
>
> **[1:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=84)** I structured this module so that we'd go workload by workload, which I think was the right approach because you can't tackle everything all at once.
>
> **[1:31](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=91)** But I worry that this presents a picture of Snowflake as broken into bins, which is definitely not the case.
>
> **[1:37](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=97)** Snowflake is one integrated platform and users of Snowflake can set up a snowpipe and then immediately clean that data, register features in the Snowflake feature store, train an ML model, and serve the results through a streamlet app.
>
> **[1:49](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=109)** Remember that just because you're not a data engineer say doesn't mean that many elements of the data engineering learning journey on Snowflake won't be relevant or useful to you.
>
> **[1:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=118)** I wanted to finish this module on builder workloads by returning to the idea of what it means to be a builder.
>
> **[2:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=123)** First of all, I want to emphasize that if you're taking this course, that means you are a builder or an aspiring builder because it means you are building or interested in building ML models, pipelines, apps, and more.
>
> **[2:15](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=135)** I don't think specialized roles will disappear, but I do believe in this builder vision, that as Snowflake becomes better and better at making one seamless set of tooling, distinct roles will find it easier and easier to build stuff against the same data that once would've been thought to be outside their domain.
>
> **[2:34](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=154)** I believe that it's only going to get easier for data engineers to incorporate ML into their pipelines and deploy the result as an app or for app developers to work further upstream and build out more of the data processing steps they're relying on for their data app or for data scientists to do more upstream pipeline work or simple app delivery.
>
> **[2:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=173)** So I hope as you come out of this module that you feel not only ready and motivated to build something with Snowflake, but that you don't feel constrained to building just one type of thing.
>
> **[3:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=183)** You're a builder.
>
> **[3:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=184)** Don't feel bound by your job title or hope for a job title.
>
> **[3:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=187)** Build whatever you want.
>
> **[3:11](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/wrap-up-of-overview-of-builder-workloads?u=76281980&t=191)** (bright music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (18), data (9), feature (3), [[Data Engineering]] (2), [[Databases]] (1)
> **Cross-References:** we talked about (5), we covered (2), in the next (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** llm (1)
> **Analogies:** picture (1)
> **Prerequisites:** set up (1)
> **Speakers:** - if (1)
> **Non-Speech:** (bright music) (1)

#### Course conclusion
> [LinkedIn Learning](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=0)** - You've reached the end of the course! You did it!
>
> **[0:02](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=2)** I hope you feel very accomplished.
>
> **[0:04](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=4)** At the beginning of the course, I said that we had two main goals.
>
> **[0:07](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=7)** First, we wanted you to emerge from this course with a foundational mental map of what's possible with Snowflake.
>
> **[0:13](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=13)** Specifically, we wanted you to come away knowing four things.
>
> **[0:16](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=16)** One, Snowflake's core objects and how to use them.
>
> **[0:19](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=19)** Two, Snowflake's architecture.
>
> **[0:21](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=21)** Three, fundamental Snowflake features, like time travel, user defined functions, et cetera, and how to use them.
>
> **[0:26](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=26)** And four, much of what Snowflake now lets you do with data engineering, applications, AI, and ML.
>
> **[0:33](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=33)** Second, we wanted you to come away equipped to take a bunch of other Snowflake coursework, if that was of interest to you.
>
> **[0:39](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=39)** We designed this to be the single point of entry for a longer Snowflake learning journey for those who want to go deeper on, say, data engineering with Snowflake, gen AI with Snowflake, applications with Snowflake, and more.
>
> **[0:51](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=51)** So my question to you is how did it go?
>
> **[0:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=53)** Do you feel like you know the core objects?
>
> **[0:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=55)** Like you know how to use lots of Snowflake features?
>
> **[0:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=58)** Like you have a sense as to what Snowflake lets you do on the AI front, the applications front, and so on?
>
> **[1:03](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=63)** And are you excited to learn more?
>
> **[1:05](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=65)** If you came into this hoping to advance your career by getting a job at a company that lists Snowflake experience on the job description, I hope you feel like you're one step closer to getting that job.
>
> **[1:14](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=74)** If you work at a company that already uses Snowflake and you came into this course wanting to learn about features you weren't using, I hope you feel like you'll be more effective at your job as a result of this course.
>
> **[1:24](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=84)** So that's it.
>
> **[1:25](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=85)** You should be excited both because you've come a long way, but also because you now know enough about the building blocks of Snowflake to start building some really cool end-to-end projects.
>
> **[1:35](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=95)** I grew up playing the violin, and near the end of high school, I was in an orchestra where we'd practiced nonstop for a day or two, and I thought we were starting to sound really good.
>
> **[1:43](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=103)** The conductor seemed pleased with our progress, but he surprised me when he said, "Now that we finally got the notes and rhythms down, we can start making music."
>
> **[1:52](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=112)** So that's how I feel now.
>
> **[1:53](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=113)** You know a lot of Snowflake notes.
>
> **[1:55](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=115)** You know a lot of Snowflake rhythms.
>
> **[1:58](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=118)** Now go make some music. Go forth and build.
>
> **[2:01](https://www.linkedin.com/learning/intro-to-snowflake-for-devs-data-scientists-data-engineers/course-conclusion?u=76281980&t=121)** (air whooshing)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (17), ai (3), [[Data Engineering]] (2), career (1), job description (1)
> **CLI Commands:** make (1)
> **Speakers:** - you (1)
> **Non-Speech:** (upbeat music) (1)


## Resources

- Exercise files available

## Skills Covered

- Data Engineering
- Snowflake

## Path Context

### In [[Generative AI Professional Certificate by Snowflake]]
**1 of 3** | [[Introduction to Gen AI with Snowflake]] →

### In [[Data Engineering Professional Certificate by Snowflake]]
**1 of 3** | [[Introduction to Modern Data Engineering with Snowflake]] →

## Part of

- [[Generative AI Professional Certificate by Snowflake]]
- [[Data Engineering Professional Certificate by Snowflake]]

## Appears In

- [[Generative AI Professional Certificate by Snowflake]]
- [[Data Engineering Professional Certificate by Snowflake]]

## Related Courses

_Courses sharing skills:_

- [[Introduction to Modern Data Engineering with Snowflake]] — Data Engineering, Snowflake
- [[Databricks Certified Data Engineer Associate Cert Prep]] — Data Engineering
- [[Big Data Analytics with Hadoop and Apache Spark]] — Data Engineering
- [[Transition from Data Science to Data Engineering]] — Data Engineering
- [[Learning SnowflakeDB]] — Snowflake

---

[↑ Back to top](#)