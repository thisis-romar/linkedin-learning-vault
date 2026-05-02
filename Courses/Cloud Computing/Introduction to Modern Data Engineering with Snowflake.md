---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: introduction-to-modern-data-engineering-with-snowflake
url: "https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake"
duration_minutes: 180
duration: 3h
level: Beginner
updated: 4/11/2025
learners: 18065
skills:
  - Data Engineering
  - Snowflake
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFi5IifLXJFgg/learning-public-crop_675_1200/B4EZdBuLDWHQAY-/0/1749154313181?e=2147483647&amp;v=beta&amp;t=uh67W9qBUl-sFzSCdb7niYITg0Sk0FgZ_2K1mxkNUbA"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Data Engineering Professional Certificate by Snowflake]]'
prev_courses:
  - '[[Intro To Snowflake For Devs Data Scientists Data Engineers]]'
next_courses:
  - '[[Advanced Data Engineering with Snowflake]]'
path_nav: '[{"path":"Data Engineering Professional Certificate by Snowflake","position":2,"total":3,"prev":"Intro To Snowflake For Devs Data Scientists Data Engineers","next":"Advanced Data Engineering with Snowflake"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/data-engineering
  - skill/snowflake
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Introduction%20to%20Modern%20Data%20Engineering%20with%20Snowflake.md)

![Introduction to Modern Data Engineering with Snowflake](https://media.licdn.com/dms/image/v2/D4E0DAQFi5IifLXJFgg/learning-public-crop_675_1200/B4EZdBuLDWHQAY-/0/1749154313181?e=2147483647&amp;v=beta&amp;t=uh67W9qBUl-sFzSCdb7niYITg0Sk0FgZ_2K1mxkNUbA)

# Introduction to Modern Data Engineering with Snowflake

> In this technical, hands-on course, learn how to build and orchestrate modern data pipelines with Snowflake. The course focuses on practical concepts and tools to get you up and running quickly. Learn how to build and maintain data pipelines in Snowflake, including data ingestion, transformation, delivery, and orchestration. Throughout the course, follow along with the instructor using a combinati

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake) | 3h | Beginner | 18K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [The explosion of data and the demand for insights](#the-explosion-of-data-and-the-demand-for-insights)
  - [What we’ll cover in this course](#what-well-cover-in-this-course)
- [**1. Modern Data Engineering with Snowflake**](#1-modern-data-engineering-with-snowflake) (4 videos)
  - [Modern data engineering with snowflake](#modern-data-engineering-with-snowflake)
  - [You’ve probably done some data engineering in the past](#youve-probably-done-some-data-engineering-in-the-past)
  - [Preparing your development environment](#preparing-your-development-environment)
  - [Build a really simple data pipeline in snowflake](#build-a-really-simple-data-pipeline-in-snowflake)
- [**2. Batch Data Ingestion with Snowflake**](#2-batch-data-ingestion-with-snowflake) (9 videos)
  - [What is data ingestion?](#what-is-data-ingestion)
  - [Batch ingestion with snowflake](#batch-ingestion-with-snowflake)
  - [Loading data from snowflake marketplace](#loading-data-from-snowflake-marketplace)
  - [Loading data using snowflake’s web interface](#loading-data-using-snowflakes-web-interface)
  - [Optimize compute resources for efficient batch ingestion](#optimize-compute-resources-for-efficient-batch-ingestion)
  - [Loading data using snowflake CLI](#loading-data-using-snowflake-cli)
  - [Loading data using the COPY INTO command](#loading-data-using-the-copy-into-command)
  - [Ingesting data from other data systems using connectors](#ingesting-data-from-other-data-systems-using-connectors)
  - [Recap and best practices for batch ingestion](#recap-and-best-practices-for-batch-ingestion)
- [**3. Data Transformations with Snowflake**](#3-data-transformations-with-snowflake) (9 videos)
  - [What are data transformations?](#what-are-data-transformations)
  - [Data transformations with SQL](#data-transformations-with-sql)
  - [Data transformations with snowpark](#data-transformations-with-snowpark)
  - [Computations with user-defined functions](#computations-with-user-defined-functions)
  - [Efficient transformations with streams](#efficient-transformations-with-streams)
  - [Complex procedural logic with stored procedures](#complex-procedural-logic-with-stored-procedures)
  - [Automatic transformations with dynamic tables](#automatic-transformations-with-dynamic-tables)
  - [Data transformations in visual studio code (optional)](#data-transformations-in-visual-studio-code-optional)
  - [Recap and best practices for data transformations](#recap-and-best-practices-for-data-transformations)
- [**4. Delivering data products with Snowflake**](#4-delivering-data-products-with-snowflake) (5 videos)
  - [Delivery of data products](#delivery-of-data-products)
  - [Data sharing on snowflake marketplace](#data-sharing-on-snowflake-marketplace)
  - [Streamlit in snowflake applications](#streamlit-in-snowflake-applications)
  - [Snowflake native applications](#snowflake-native-applications)
  - [Recap and best practices for data product delivery](#recap-and-best-practices-for-data-product-delivery)
- [**5. Orchestrating Continuous Data Pipelines with Snowflake**](#5-orchestrating-continuous-data-pipelines-with-snowflake) (5 videos)
  - [What is orchestration?](#what-is-orchestration)
  - [Automation with tasks](#automation-with-tasks)
  - [Orchestration with DAGs](#orchestration-with-dags)
  - [Recap and best practices for pipeline orchestration](#recap-and-best-practices-for-pipeline-orchestration)
  - [Conclusion](#conclusion)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### The explosion of data and the demand for insights
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/the-explosion-of-data-and-the-demand-for-insights?u=76281980)

> [!transcript]- Transcript
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/the-explosion-of-data-and-the-demand-for-insights?u=76281980&t=10)** About 30 years ago, the average size of a computer hard drive ranged between 40 and 500 megabytes.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/the-explosion-of-data-and-the-demand-for-insights?u=76281980&t=17)** At that time, it was estimated that the total amount of digital data in the world was a few petabytes, or, putting it another way, just a few thousand terabytes.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/the-explosion-of-data-and-the-demand-for-insights?u=76281980&t=28)** Fast forwarding to today, it's now the norm for computers to have storage capabilities upwards of 2 terabytes or more.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/the-explosion-of-data-and-the-demand-for-insights?u=76281980&t=36)** It's estimated that in 2025, the total amount of digital data in the world will approach 200 zettabytes, and I know that sounds like a made-up word, but I promise it's not.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/the-explosion-of-data-and-the-demand-for-insights?u=76281980&t=48)** In fact, 200 zettabytes represents over 200 billion terabytes.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/the-explosion-of-data-and-the-demand-for-insights?u=76281980&t=54)** That's a total amount of digital data that was estimated in the 1990s times 200 million.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/the-explosion-of-data-and-the-demand-for-insights?u=76281980&t=60)** To look at it another way, it would take nearly 10 million 20-terabyte hard drives just to store that data today.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/the-explosion-of-data-and-the-demand-for-insights?u=76281980&t=68)** Simply put, there's been an explosion in the amount of data in the world over the last few decades.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/the-explosion-of-data-and-the-demand-for-insights?u=76281980&t=74)** Today, there are countless data sources, data formats, types of data, and much more, and with this booming data, there's been a corresponding increase in the demand for extracting insights from it.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/the-explosion-of-data-and-the-demand-for-insights?u=76281980&t=86)** As a result, our data systems today capture oceans and oceans of raw, unfiltered, and messy data, and it's up to data engineers to wrangle all of it and distill it into valuable, usable insights.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/the-explosion-of-data-and-the-demand-for-insights?u=76281980&t=100)** But how exactly do we do something like that?
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/the-explosion-of-data-and-the-demand-for-insights?u=76281980&t=104)** And how do we handle such a large and unprecedented scale of data?
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/the-explosion-of-data-and-the-demand-for-insights?u=76281980&t=108)** Hi there. My name is Gilberto Hernandez, and I'm a Developer Advocate at Snowflake.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/the-explosion-of-data-and-the-demand-for-insights?u=76281980&t=113)** And I'm excited to welcome you to Introduction to Modern Data Engineering with Snowflake.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/the-explosion-of-data-and-the-demand-for-insights?u=76281980&t=117)** I've been educating developers for about a decade now on all sorts of technical topics, ranging from application development, document databases, and APIs.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/the-explosion-of-data-and-the-demand-for-insights?u=76281980&t=127)** If you've ever taken a course on Codecademy, used a documentation for MongoDB, or have tried some of the quick structure Plaid, there's a good chance that you stumbled across something that I wrote, and I'm hoping that if you did, you learned something new and that you learned it effortlessly.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/the-explosion-of-data-and-the-demand-for-insights?u=76281980&t=144)** One of my personal joys in life is demystifying what might seem like complex or intimidating topics.
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/the-explosion-of-data-and-the-demand-for-insights?u=76281980&t=151)** I know what it can feel like to approach a new topic or concept that might seem large in scope or full of technical nuance.
>
> **[2:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/the-explosion-of-data-and-the-demand-for-insights?u=76281980&t=159)** As an educator, though, one thing that I have found over the years is that there are always ways of breaking down complex topics into clear and logical learning journeys, and that's exactly what we'll do in this course on data engineering with Snowflake.
>
> **[2:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/the-explosion-of-data-and-the-demand-for-insights?u=76281980&t=173)** By the end of this course, you'll learn how to leverage the Snowflake AI Data Cloud to ingest vast amounts of raw data at scale, apply efficient transformations to that data, learn various ways of delivering those extracted insights to stakeholders, and then finally, learn how to automate these workflows.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/the-explosion-of-data-and-the-demand-for-insights?u=76281980&t=192)** In short, you'll learn how to build end-to-end continuous data pipelines that can take raw data to polished insights.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/the-explosion-of-data-and-the-demand-for-insights?u=76281980&t=198)** Next up, let's talk a little about what we'll cover in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (18), [[Snowflake]] (4), [[Data Engineering]] (2), [[Microsoft Word|Word]] (1), [[Application Development]] (1)

#### What we’ll cover in this course
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=0)** We won't be spending a lot of time on theory in this course.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=4)** This course is intended to be extremely practical so that you can ramp up quickly, apply these concepts right away in Snowflake, and feel confident in what you're doing.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=13)** This also means that the course won't be exhaustive of all data engineering features or techniques in Snowflake.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=20)** That's intentional.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=21)** I want you to get up to speed fast.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=24)** And the best way to do that is to cut straight to the point with the most common and powerful data engineering features and techniques.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=31)** To get you to that outcome, we've designed this course to be very hands-on.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=36)** For most exercises in the course, you're expected to follow along with me as we code up or build something.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=43)** This is so that you can learn by doing and get hands-on practice with core data engineering concepts.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=49)** To that end, we'll actively use tools like the command line, GitHub, SQL, Python, and more.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=56)** By the end of this course, you'll be dangerously good at building end-to-end continuous data pipelines using Snowflake.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=64)** Now let's talk a little about who this course is best suited for.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=69)** This course is open to anyone, but it's going to be best suited for folks who have had some previous exposure to data engineering concepts or SQL Analytics.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=79)** For example, perhaps you're building data pipelines today, but you're not using Snowflake, and you're looking to add Snowflake to your technical repertoire.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=87)** This course is perfect for you.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=89)** This course is also well-suited for folks who are looking to upskill for a potential career change.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=94)** So maybe you're a SQL analyst today, and you want to become a data engineer in the future.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=99)** This course is also right for you.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=102)** But here's a quick piece of advice from me.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=104)** Don't get too caught up in wondering whether this course is right for you based on your current professional role.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=111)** A working knowledge of data engineering concepts will, of course, be helpful, but you don't necessarily have to be an expert or have professional data engineering experience.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=120)** In fact, we'll start with some core frameworks and mental models and then gradually build up to more advanced concepts.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=127)** And last but not least, this course requires some familiarity with Snowflake core concepts.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=133)** If you've never used Snowflake, you should consider taking our Intro to Snowflake for Devs, Data Scientists, and Data Engineers course first.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-we-ll-cover-in-this-course?u=76281980&t=141)** With that, let's start building some data pipelines.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (8), data (7), [[Data Engineering]] (5), [[SQL]] (3), [[GitHub]] (1)
> **Env Vars:** sql (3)
> **Tools:** command line (1), github (1)
> **CLI Commands:** python (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)


### 1. Modern Data Engineering with Snowflake

[↑ Back to Table of Contents](#table-of-contents)

#### Modern data engineering with snowflake
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=0)** A few years back, Snowflake published Cloud Data Engineering for Dummies, Snowflake Special Edition.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=5)** Among many of the useful insights in it, it did a great job of capturing the essence of data engineering and what data engineers do.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=13)** It states a couple of things that I think are worth calling out here.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=17)** "Data engineering isn't something you do once.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=20)** It's an ongoing practice that involves collecting, preparing, transforming, and delivering data.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=26)** Data engineers oversee the ingestion, transformation, delivery, and movement of data throughout every part of the organization."
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=35)** Did you notice any common words or phrases among these two sentences?
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=39)** If so, you might've noticed the following terms: collecting or ingesting, transforming, and delivery.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=46)** The concepts of data ingestion, data transformation, and data delivery are core to data pipelines.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=53)** The practice of applying these concepts in concert to build data pipelines is known as data engineering.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=60)** In this course, we'll use these three core concepts: data ingestion, transformation, and delivery, to form a framework for understanding data engineering with Snowflake.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=71)** For the purposes of brevity, you might hear me refer to this framework as ITD, and you should think of these three core concepts when you hear this acronym.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=80)** This framework will help us contextualize many of the specific technical concepts and Snowflake features that you'll learn about in the course.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=88)** Let's dive a little deeper into each component in this framework.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=92)** Ingestion refers to the gathering or collection of data, often into a central platform, in this case, Snowflake.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=99)** Transformation refers to the cleaning, changing, wrangling, or processing of data.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=104)** And delivery refers to the delivery of a data product, like a dataset, for example, to a consumer or system.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=111)** A consumer could be someone like an analyst or application developer on your team, and a system could be something like a dashboard or some other application requiring a specific set of data.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=121)** In this course, we'll use a single platform, the Snowflake AI Data Cloud, to ingest, transform, and deliver data products to build modern data engineering pipelines.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=132)** And finally, let's talk a little more about the term "modern" in this context.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=136)** Early data pipelines were fraught with challenges that today are solved with modern approaches and platforms like Snowflake.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=143)** Here's some examples of those challenges.
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=146)** Siloed data, meaning different datasets were housed in different data environments, and navigating those different environments was often challenging.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=154)** Siloed and complex management of compute resources, specifically having to manage individual different development environments many times with different programming languages, just to be able to process data, and finally, loose governance over data, which meant an increased security risk against that data.
>
> **[2:55](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=175)** Many of these data silos reflect legacy approaches to data engineering, namely because if you're doing modern data engineering, all of your data can live within the same platform with no silos.
>
> **[3:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=186)** Within Snowflake, your data can also be transformed easily using multiple languages, like SQL, Python, and more.
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=193)** And you can do this without needing to manage different development environments.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=198)** Your data can also be processed with powerful compute resources without any management overhead.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=204)** And finally, your data can be governed consistently, resulting in decreased security risks.
>
> **[3:30](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=210)** All of these capabilities make it much easier to remove friction points and perform modern data engineering.
>
> **[3:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=216)** You can take data from ingestion through transformation to delivery all on the same platform.
>
> **[3:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=223)** But keep in mind that a single platform won't solve the challenge of picking an approach to building a data pipeline.
>
> **[3:49](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=229)** As a data engineer, you'll, of course, still need to make choices around how you perform data engineering, namely around which specific tools and features you'll use, among many other considerations.
>
> **[4:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/modern-data-engineering-with-snowflake?u=76281980&t=241)** Coming up, let's talk a little about how you've likely done data engineering before.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (29), [[Data Engineering]] (11), [[Snowflake]] (8), cloud (2), application (2)
> **Definitions:** refers to (3), known as (1)
> **CLI Commands:** make (2), python (1)
> **Env Vars:** itd (1), sql (1)
> **Cross-References:** coming up (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)

#### You’ve probably done some data engineering in the past
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980&t=0)** One thing that I love about data engineering is that its concepts are present in what might seem like everyday data tasks.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980&t=7)** If you've ever done anything with data in the past, there's a very good chance that you've performed data engineering or some aspect of it without even knowing it.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980&t=15)** For example, if you've ever used a spreadsheet to work with data, you've likely used the ingestion, transformation, and delivery framework.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980&t=24)** Say you had some raw data in a CSV file, and you imported it into a program like Excel or Google Sheets.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980&t=31)** When you did that, you performed data ingestion, and perhaps in the process of loading the data, you configured certain options like specifying the data format, the delimiter, and more.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980&t=41)** Once the raw data was loaded, you probably looked over the data and started thinking about how you might extract certain insights from it.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980&t=49)** Say, for example, you wanted to analyze a certain aspect of that raw data, like sales data, but you needed to perform some work against the data before being able to extract that insight.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980&t=60)** If there were any columns that you didn't need, maybe you deleted them.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980&t=66)** If there were some values that needed to be in, say, decimal format versus whole numbers, you probably made that change as well.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980&t=73)** And maybe you needed to perform some calculations against existing columns to derive new columns.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980&t=79)** And there's even a chance that you had to create a single dataset by combining multiple datasets.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980&t=86)** That entire process represents data transformation where you took raw data and transformed it such that you would get closer to your insight.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980&t=96)** Most folks might stop there, at a final polished dataset, in which case that would constitute the delivery of that data product, in that case, the dataset.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980&t=105)** But maybe you took it a step further.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980&t=108)** Maybe you created pivot tables based on certain dimensions, or you decided to visualize certain aspects of the transformed data using a histogram, for example.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980&t=117)** And last but not least, maybe you needed to share those final insights with someone, like a teammate or a client, or maybe that polished data became part of a larger analysis by another team.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980&t=131)** That entire process is data delivery, where your final data product was delivered to a consumer like yourself or your team, or to another data system.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980&t=141)** And sure, maybe the scale was small, you had a few hundred rows or so, and maybe things were very manual, and you personally performed all of those steps on a daily or weekly basis or something like that.
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980&t=153)** But the point is, you are actually building data pipelines no matter how small the scale was or how manual the process was.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980&t=160)** And the amazing thing is that all the steps that you took can be contextualized by the ingestion, transformation, and delivery framework that we'll use in this course to build data pipelines.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980&t=172)** What happens though when the scale of data increases 100, 1000, or even one million fold, or when new data sources are introduced, that must also be looked at.
>
> **[3:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980&t=184)** What if there are requirements to keep data fresh and insights current, such that your manual weekly process now needs to happen on an hourly basis?
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980&t=193)** And what if your computer doesn't have the computing power to handle the processing that you need to perform against that data?
>
> **[3:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980&t=201)** You can imagine how those things would introduce some serious challenges into extracting insights from your raw data, which is why, in this course, you'll learn to use Snowflake to solve challenges like these and build scalable end-to-end continuous data pipelines.
>
> **[3:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/you-ve-probably-done-some-data-engineering-in-the-past?u=76281980&t=216)** With that, let's get you set up with your Snowflake development environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (27), [[Data Engineering]] (2), product (2), [[Snowflake]] (2), [[Microsoft Excel|Excel]] (1)
> **Analogies:** for example (3), imagine (1)
> **Env Vars:** csv (1)
> **Prerequisites:** set up (1)

#### Preparing your development environment
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=0)** There are a few things that you'll need to be able to follow along and be successful in this course. Here's what you'll need.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=6)** A free Snowflake trial account, a code editor, I'll be using Visual Studio Code, optionally, the official Visual Studio Code extension for Snowflake, Snowflake CLI, Snowflake's official Command Line Interface, access to a terminal, I'll use a terminal directly from within VS Code, and finally, access to GitHub.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=28)** Having a GitHub account is nice, but it's technically optional for this course.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=32)** Let's walk through setting some of these up.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=35)** To start, you'll need a Snowflake account with account admin access.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=39)** A free trial account will work just fine for this course.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=42)** And you can find the URL to open your free account in the reading that follows this video.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=47)** You'll also need a code editor.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=49)** This is so that you can open code, read it, modify it, run it, and fully immerse yourself in the concepts that we'll cover in this course.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=57)** In this course, I'll be using Visual Studio Code, also known as VS Code.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=61)** You should pause the video now if you'd like to install VS Code for your operating system.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=66)** In addition to it being my favorite code editor, another reason why I'm choosing to use VS Code is so that I can use the terminal and Snowflake's official VS Code extension.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=77)** The extension will allow me to query Snowflake directly from VS Code.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=81)** Let's quickly install it.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=83)** First, open VS Code.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=85)** Next, navigate to the Command palette in VS Code.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=89)** You can find it in the View menu.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=92)** Search for or select Extensions.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=95)** Next, search for Snowflake.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=99)** Click on the first result and open up the extensions page.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=104)** Note that the verified publisher is Snowflake.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=107)** Let's install it.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=110)** Once it's installed, you'll see the icon for the extension appear in your toolbar.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=115)** Click on it, and the authentication modal should appear.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=120)** We'll stop here and show you how to log in and use the extension in a later video.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=125)** You'll also need Snowflake's Command Line Interface, Snowflake CLI.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=130)** This tool will help us easily deploy a few things later in the course.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=134)** To install it, you'll need pip, Python's package manager.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=138)** We won't demonstrate how to install Python or pip, so be sure to pause the video and look those details up separately if you need to.
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=146)** Let's go ahead and install Snowflake CLI.
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=149)** Open up VS Code.
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=151)** In the terminal, type "pip install snowflake-cli-labs."
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=160)** You should see some output in the terminal regarding whether or not the installation was successful.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=165)** As a sanity check, type in the following command: snow --help.
>
> **[2:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=173)** If you receive output like this, which demonstrates the syntax and usage patterns for Snowflake's CLI, you know you've installed Snowflake CLI successfully.
>
> **[3:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=184)** Finally, all of the code used in this course is available on GitHub, and the link to the repository containing the code is included in the reading.
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=193)** We'll frequently access GitHub when we need to grab some code for an exercise.
>
> **[3:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=197)** You can certainly access and use a code without a GitHub account, but if you want to do things like star the repo or fork it, for example, you'll need a GitHub account.
>
> **[3:27](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=207)** But having a GitHub account is technically optional.
>
> **[3:30](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=210)** Let's clone the repo locally.
>
> **[3:32](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=212)** In a terminal, run git clone and pass in the path to the repository.
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=219)** You don't have to run this now.
>
> **[3:41](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=221)** The command is provided for you within the reading so that you can easily copy and paste it into the terminal.
>
> **[3:46](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=226)** Excellent. The repo is cloned, and now you're ready to go.
>
> **[3:50](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=230)** Feel free to pause this video to create any accounts or download any software.
>
> **[3:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/preparing-your-development-environment?u=76281980&t=234)** Once you're set up with all of these accounts and tools, you can move on to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (15), [[GitHub]] (7), [[CLI]] (6), next (3), [[Search]] (2)
> **Tools:** vs code (9), terminal (7), github (7), visual studio (3), command line (2)
> **Prerequisites:** install (7), you'll need (5), set up (1)
> **CLI Commands:** pip (3), find (2), python (2), git (1)
> **Env Vars:** cli (5), url (1)
> **UI Navigation:** click on (2), navigate to (1)
> **Cross-References:** later in (1), next video (1)
> **Exercise Files:** clone the repo (1)

#### Build a really simple data pipeline in snowflake
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=0)** Let's build a very simple data pipeline with Snowflake.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=4)** This pipeline won't be anything highly complex or sophisticated, and that's intentional.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=9)** The point of this exercise is for you to immediately get hands-on with Snowflake as well as get high-level exposure to the ingestion, transformation, and delivery framework.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=20)** A quick note before we start building.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=23)** If you've built data pipelines before using technologies other than Snowflake, then what we'll do in this video may come off as introductory.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=31)** So you're welcome to skip to the next video, but I recommend following along, as you'll get a sense of the Snowflake-specific patterns that we'll use throughout the course.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=40)** And who knows, you may also learn something new.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=43)** If you're brand new to data engineering, you should absolutely follow along, but don't worry.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=48)** Although I will explain at a high level what I'm doing, you're not expected to understand every single aspect of what we do.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=56)** Again, the point is for you to get some basic hands-on experience using Snowflake.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=61)** Okay. So here's the scenario.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=63)** You're a data engineer tasked with building a data pipeline that can deliver insights for a couple of economic trends for the United States: the Consumer Price Index, also known as CPI, and annual wages.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=75)** You have access to raw economic data, and you want to use this data to extract and share these insights.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=81)** So here's what we'll do.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=82)** We'll load the data into Snowflake, perform some transformations against the data, and deliver our final insights via an app.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=90)** Follow along with me to build this simple pipeline.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=93)** Now's a good time to stop the video and make sure you're logged into your Snowflake account.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=97)** Let's start by loading the data.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=99)** We're going to get economic data from Snowflake's Marketplace.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=103)** This data will contain information about many different economic metrics for many countries across long periods of time.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=111)** This will be the perfect data to use to deliver our annual wages and CPI insights.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=117)** To load the data, start by navigating to Data Products on the left-hand side of the interface.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=123)** Click on Marketplace.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=126)** You'll notice that I'm now in the Snowflake Marketplace, and I can find all sorts of data listings here, some free, some paid, from all sorts of providers.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=134)** Let's search for the data that we need.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=137)** At the top, search for Cybersyn Economic Essentials.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=145)** The first result should be labeled as Financial and Economic Essentials.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=150)** Click on it.
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=153)** You'll be taken to the datasets landing page, where you can learn more about the type of data and the dataset.
>
> **[2:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=159)** On the right, click Get.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=161)** A modal should appear, giving you the option to configure the name and roles.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=165)** We don't need to do any of that for now.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=167)** Just click Get within the modal, and just like that, the data is loaded into the account and ready to use.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=174)** In this modal, you can click on Done.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=176)** Next, create a new SQL worksheet.
>
> **[2:59](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=179)** You can do this by clicking on Projects on the left-hand side.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=182)** The worksheet section within should already be highlighted.
>
> **[3:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=186)** At the top right, create a new SQL worksheet.
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=189)** This will create and open a new SQL worksheet for you.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=192)** And this worksheet is where we'll add the SQL code that will perform the correct operations or transformations to extract the insights we'll need.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=200)** We won't write the SQL from scratch.
>
> **[3:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=203)** Again, the point of this exercise is for you to get exposure to the ITD framework, not to focus on SQL syntax.
>
> **[3:30](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=210)** In the GitHub repository for this course, navigate to the module-1 folder and open the transformations.sql file.
>
> **[3:41](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=221)** Copy everything within the file and paste it into the SQL worksheet.
>
> **[3:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=227)** You don't need to understand the SQL or transformations at the moment.
>
> **[3:51](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=231)** For now, all you need to know is that this code will create two tables for us, each with an insight.
>
> **[3:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=236)** At the top right, click on the dropdown next to the play button and click on Run All.
>
> **[4:02](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=242)** This will run all of the operations in the file starting at the top.
>
> **[4:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=246)** Give it about a minute or so for the operations to complete.
>
> **[4:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=253)** Okay. Great.
>
> **[4:14](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=254)** Once the file has been executed, you should see some results in the results pane, and we can also explore what was created.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=261)** On the left, click on the three dots here and click Refresh.
>
> **[4:25](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=265)** You should now see a database called WAGES_CPI.
>
> **[4:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=269)** Click on it to expand it.
>
> **[4:31](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=271)** Click on the DATA schema and then click on Tables.
>
> **[4:35](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=275)** You should see two tables here: one called ANNUAL_WAGES_CPI_USA, and another called MONTHLY_CPI_USA.
>
> **[4:45](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=285)** These are two tables that the SQL code created for us.
>
> **[4:49](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=289)** Each table contains the insight and trend we want to deliver.
>
> **[4:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=293)** In fact, if you hover over ANNUAL_WAGES_CPI_USA and then click on the open table details in a new tab button, you'll be able to quickly browse the details behind the table.
>
> **[5:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=306)** For example, you can browse on the table data by clicking on Data Preview, and quickly, you can see that this table has average annual wages and CPI data for the USA for the years between 2012 and 2022.
>
> **[5:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=321)** Excellent.
>
> **[5:22](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=322)** You can do the same for the other table if you're interested in browsing its details.
>
> **[5:27](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=327)** Now if we wanted to, we could stop here and share the tables with users in our Snowflake account.
>
> **[5:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=333)** This would allow others to analyze this data, but let's instead take this a step further by sharing these insights via an app.
>
> **[5:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=340)** Navigate to Projects and click on Streamlit.
>
> **[5:46](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=346)** Create a new Streamlit App and give it a name.
>
> **[5:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=352)** I'll name the app "WAGES_CPI_USA_APP," but you can name your app whatever you want.
>
> **[6:02](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=362)** Next, set the app location so that it lives in the WAGES_CPI database and DATA schema.
>
> **[6:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=371)** Set the app warehouse to COMPUTE_WH.
>
> **[6:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=373)** It may already be set to that.
>
> **[6:16](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=376)** Click Create.
>
> **[6:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=380)** This creates a Streamlit App within my Snowflake account, and I can use this app to easily visualize this data and share it with my teammates.
>
> **[6:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=388)** The first thing you'll see is a sample app that spins up.
>
> **[6:31](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=391)** Pretty cool.
>
> **[6:32](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=392)** Let's remove all of this Python code and instead replace it with the code for our application, which will visualize the annual wages and CPI trend for the USA.
>
> **[6:44](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=404)** Navigate to the streamlit.py file in the module-1 folder of the repo.
>
> **[6:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=412)** Copy the entire file and paste it into the code editor within Snowflake.
>
> **[7:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=420)** Click Run.
>
> **[7:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=424)** You should now see the data visualized in a chart, and the app is only about 60 lines of code.
>
> **[7:09](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=429)** How amazing is that?
>
> **[7:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=431)** So now we have an app that visualizes a CPI on a monthly basis and the average annual wages and CPI on a yearly basis.
>
> **[7:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=441)** This app makes it a lot easier to parse and quickly understand the insights that we obtained from the data we loaded.
>
> **[7:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=448)** And now for the grand finale, let's share the app with our team or other users.
>
> **[7:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=454)** Click on Share, and here you'll see you can add roles within your Snowflake account that should have access to the app or grab a handy link to the app to share.
>
> **[7:46](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=466)** That's it.
>
> **[7:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=467)** Those are super simple, tiny data pipeline.
>
> **[7:50](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=470)** Let's quickly recap what you did.
>
> **[7:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=472)** You loaded economic data from Snowflake's Marketplace into your account.
>
> **[7:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=477)** You performed the transformations needed to extract insights for CPI and annual wages.
>
> **[8:02](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=482)** You wrote those results to new tables, and you visualized and delivered the insights using a Streamlit in Snowflake App either for you to consume or share more broadly, and you did all of that in a matter of minutes.
>
> **[8:16](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=496)** Now again, this was a really simple and tiny data pipeline.
>
> **[8:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=500)** There's so much more that we can learn and do.
>
> **[8:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=503)** Here's some things to think about as we dive deeper in the next module.
>
> **[8:27](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=507)** First, every step we took was manually performed.
>
> **[8:31](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=511)** Could there be ways of automating parts of this pipeline so that it isn't so manual?
>
> **[8:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=516)** Second, must our transformations be performed in SQL?
>
> **[8:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=520)** If not, what other options are out there?
>
> **[8:44](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=524)** And Streamlit is incredible, but are there other options for sharing data and insights?
>
> **[8:49](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=529)** These are just some of the types of questions that we'll address throughout the course.
>
> **[8:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=533)** The most important part of this exercise is that you got hands-on with Snowflake, and you hit every part of the framework: ingestion, transformation, and delivery.
>
> **[9:03](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=543)** This should inspire you and give you confidence that with a little more practice, you can build more complex data pipelines and you can perform more sophisticated data engineering.
>
> **[9:12](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=552)** We're not stopping here, of course.
>
> **[9:15](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=555)** In fact, the rest of this course will be about continuously leveling up.
>
> **[9:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/build-a-really-simple-data-pipeline-in-snowflake?u=76281980&t=559)** With that, let's dive a lot deeper and start learning all about data ingestion with Snowflake.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (33), [[Snowflake]] (17), [[SQL]] (11), next (5), [[Data Engineering]] (2)
> **Env Vars:** sql (10), cpi (7), wages_cpi (2), data (2), annual_wages_cpi_usa (2)
> **UI Navigation:** click on (12), navigate to (3), open the (1), dropdown (1)
> **CLI Commands:** make (1), find (1), python (1)
> **File Paths:** transformations.sql (1), streamlit.py (1)
> **Cross-References:** next video (1), in the next (1)
> **Definitions:** known as (1), is a  (1)
> **Analogies:** just like (1), for example (1)


### 2. Batch Data Ingestion with Snowflake

[↑ Back to Table of Contents](#table-of-contents)

#### What is data ingestion?
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980)

> [!transcript]- Transcript
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=11)** "80% of the battle is going to be getting all of the data from all of the different sources into one platform."
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=18)** These are wise words from my colleague, Jeremiah Hansen.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=22)** And I think they're just the right way to kick off our exploration of the first phase of our data engineering framework, data ingestion.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=30)** In the context of building data pipelines, ingestion refers to the gathering, collecting, or loading of raw data, often into a central platform.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=39)** In this course, Snowflake will be that central platform.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=43)** Out of the three phases in our ITD data engineering framework, I find ingestion to be the most interesting, mainly because the approaches to ingesting data can vary so widely.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=54)** And the reason these approaches vary so much is because there are some pretty big challenges associated with ingesting data like scale, meaning how much data will need to be ingested; frequency: at what rate does the data need to be ingested?
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=71)** Is your use case satisfied with, say, a daily ingestion routine?
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=76)** Well, you need to ingest data on a real-time basis.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=79)** Sources: where is data coming from?
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=82)** How many sources are there?
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=84)** My colleague, Jeremiah, has some more wise words on this topic.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=88)** Data sources are a very strong dictator of approach to ingestion.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=94)** And finally, there are challenges around data formats.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=98)** For example, what format will the data be in?
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=101)** Will all of it be in the same format, or will different sources produce data in different formats or maybe in different shapes, like columnar versus document-based, as an example?
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=114)** And those are just a sample of the challenges you might encounter as you think about how to ingest data with your pipeline.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=121)** The great news is that Snowflake is excellent at addressing challenges like these, namely because Snowflake can easily ingest data at massive scales.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=130)** I'm talking petabytes and even much larger.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=134)** Snowflake excels at ingesting data at different frequencies.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=138)** It's great for batch loading of data and equally great for near real-time ingestion of data.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=144)** Snowflake also plays really well with lots of different data sources like cloud object storage or Kafka architectures as an example.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=154)** And finally, Snowflake can ingest all sorts of data formats, CSV, JSON, Parquet, just to name a few, and all sorts of compression formats as well.
>
> **[2:46](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=166)** What's also neat is that Snowflake can ingest structured and semi-structured data directly.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=171)** And with newer features, it can actually extract data from unstructured data formats like PDF documents, for example.
>
> **[2:59](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=179)** In any case, keep in mind that your approach to data ingestion is going to depend on your specific use case, but that it'll likely be impacted by things like number of data sources, scale of data, latency requirements, and more.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=194)** Finally, it's important to note that in this course, ingestion of raw data refers to a one-to-one copy of the source data.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=204)** That is, we won't alter or change raw data during the ingestion process.
>
> **[3:31](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=211)** Data loaded into Snowflake will simply represent a direct copy of the source data.
>
> **[3:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-data-ingestion?u=76281980&t=217)** Okay. Let's learn a little more about how to perform ingestion using Snowflake.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (31), [[Snowflake]] (9), [[Data Engineering]] (2), [[Real-Time]] (2), cloud (1)
> **Env Vars:** itd (1), csv (1), json (1), pdf (1)
> **Definitions:** refers to (2)
> **Analogies:** for example (2)
> **Warnings:** keep in mind (1), note that (1)
> **CLI Commands:** find (1)

#### Batch ingestion with snowflake
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=0)** Data ingestion with Snowflake can be broadly categorized into two buckets: batch ingestion and streaming ingestion.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=8)** Batch ingestion refers to the process of ingesting data into Snowflake in large, discrete chunks.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=15)** This batch ingestion typically occurs at scheduled intervals, but it doesn't have to. It can also be a one-time event.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=23)** Batch ingestion is commonly used in scenarios where real-time processing of data is not critical, and it allows for the efficient handling of large volumes of data.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=34)** For example, batch ingestion is commonly used in scenarios where you may be migrating data from one system to, say, Snowflake or where you're setting up a Snowflake environment for the first time or if your pipeline ingests large amounts of data on a daily schedule, like an overnight job, as an example. Streaming ingestion, on the other hand, refers to the continuous and real-time ingestion of data into Snowflake.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=62)** Unlike batch ingestion, which handles ingesting data in large periodic chunks, streaming ingestion deals with data piece by piece, virtually instantaneously.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=73)** Streaming ingestion is critical for use cases that require immediate analysis and action based on the latest data like financial trading or real-time monitoring of, say, instrumentation or equipment.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=88)** In this course, we're going to cover batch ingestion with Snowflake.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=92)** Streaming ingestion will be covered in detail in a different course designed to be the follow-up to this course.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=99)** Batch ingestion with Snowflake is generally file-based, meaning you'll ingest data that you have in files.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=106)** This process typically involves three steps.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=110)** First: preparing your data files.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=112)** This means preparing your CSV, JSON, or parquet files, for example.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=119)** Second: staging or storing those files somewhere.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=121)** A very common pattern is staging data files in cloud object storage, like in an AWS S3 bucket, for example, and then ingesting the data in those files directly from the bucket into Snowflake.
>
> **[2:15](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=135)** But this is just one of many patterns commonly seen.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=139)** It's also common to have files stored on local computers, other data systems, and more.
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=146)** Finally, you'll need to actually perform the data ingestion.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=150)** Throwing the data somewhere is one thing, but performing the ingestion means actually bringing the data into Snowflake.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=157)** And there are several options here, from Snowflake's easy-to-use web interface to patterns that use SQL or Python for ingestion as an example.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=167)** So to summarize, the typical pattern for batch ingestion with Snowflake involves preparing files, staging the files, and then performing the data ingestion into Snowflake.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=180)** There are a few different ways for performing batch ingestion with Snowflake, and here are the techniques that we'll cover in this module.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=188)** First, loading data from the Snowflake Marketplace, where you can discover and quickly load high-quality datasets directly into your Snowflake account.
>
> **[3:16](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=196)** Loading data using Snowflake's web interface: I'll cover how to load data using Snowflake's UI, which, by the way, is also known as Snowsight, just in case you hear me use that term.
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=208)** I'll cover ingestion using Snowflake's CLI, specifically, meaning loading data from your local computer into Snowflake using Snowflake's Command Line Interface.
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=218)** And finally, I'll cover one of the most common and powerful techniques for ingesting data using the COPY INTO SQL command to load data from files in cloud object storage into Snowflake.
>
> **[3:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=232)** We'll cover each of these techniques individually, but chances are your approach when building a data pipeline may include one or more of these methods, all working in concert to ingest data.
>
> **[4:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/batch-ingestion-with-snowflake?u=76281980&t=244)** Let's start with loading data from Snowflake's Marketplace.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (28), [[Snowflake]] (22), [[Real-Time]] (3), cloud (2), web (2)
> **Env Vars:** sql (2), csv (1), json (1), aws (1), cli (1)
> **Definitions:** refers to (2), known as (1)
> **Analogies:** for example (3)
> **CLI Commands:** aws (1), python (1)
> **Tools:** command line (1)
> **Prerequisites:** you'll need (1)

#### Loading data from snowflake marketplace
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=0)** One of the fastest and easiest ways of getting data into Snowflake is the Snowflake Marketplace.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=5)** The Snowflake Marketplace is where you can share, discover, and access a wide variety of ready-to-query datasets.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=13)** In fact, in the first module of this course, you loaded data from the Snowflake Marketplace, so you're already familiar with it.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=20)** I love datasets that come from the Marketplace because I don't need to worry about personally maintaining the data.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=26)** Datasets are completely owned and maintained by the provider, meaning that keeping the data fresh and up-to-date is the provider's responsibility.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=35)** In short, it's essentially a live dataset.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=37)** All you have to do is decide that you want to use the data and then load it into your Snowflake account using the friendly UI.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=44)** There's such a wide variety of diverse datasets on the Marketplace, and this is great because chances are there's a dataset there that can help you power what you're trying to build.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=54)** For example, let's say you were tasked with delivering a high-quality dataset that is going to be used to train a machine learning model.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=62)** You're told that the model should be able to make accurate sales predictions and that it should account for variations in the weather.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=69)** Perhaps there's a suspicion that weather impacts sales in this specific use case.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=73)** You could find relevant and accurate weather data on the Marketplace and easily bring the data into your account to help you tailor the training data for the model.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=82)** It's very common to browse the Marketplace for relevant and ready-to-use data that you can load into your Snowflake account.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=88)** If you quickly browse the Marketplace, you'll see AI and ML data, economic data, government data, and much more.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=96)** Oftentimes, that data is used to enrich data you're working with or to power a specific use case that you're trying to address.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=104)** Let's load some data from the Snowflake Marketplace into your account.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=108)** Remember, this is a hands-on course, and I'd like for you to follow along with me as much as you can throughout the course.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=114)** This is how you get hands-on practical experience using Snowflake.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=117)** It's a good time to make sure you're logged into your Snowflake account.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=120)** Feel free to pause the video now if you need to log into your account.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=125)** Okay. Start by navigating to Data Products on the left-hand side of the interface and click Marketplace.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=133)** You'll notice that I'm now in the Snowflake Marketplace, and I can find all sorts of data listings here, some free, some paid, from all sorts of providers.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=142)** Let's search for a dataset.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=144)** At the top, search for Weather Source LLC: frostbyte.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=154)** Click on the first result returned.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=158)** You're now on the page for this data listing.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=161)** If you take a look at the listing, you'll see that this dataset is a collection of all sorts of global weather and climate data.
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=168)** You can also see an overview of exactly what's included, example queries against the dataset, and more.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=174)** Let's load this dataset into your account.
>
> **[2:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=177)** Click on Get.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=180)** A modal should appear along with an options dropdown menu, and if you expand the menu, you'll see you have the option to rename the dataset and also specify which roles in your account should have access to the data.
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=193)** Let's rename the dataset to FROSTBYTE_WEATHERSOURCE in all caps.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=200)** Be sure to do this, or subsequent code won't execute as intended.
>
> **[3:25](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=205)** You can leave the roles option as is.
>
> **[3:27](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=207)** Next, load the data by clicking Get.
>
> **[3:30](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=210)** Excellent.
>
> **[3:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=213)** If successful, you'll see a modal like this one.
>
> **[3:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=217)** I think what's neat is that I can immediately start querying the data as soon as it's been loaded.
>
> **[3:42](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=222)** Click on Query Data.
>
> **[3:45](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=225)** This will open a new SQL worksheet with some pre-written SQL queries for you created by the provider.
>
> **[3:51](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=231)** The queries are typically exploratory in nature, meaning you can use them to explore the dataset a bit.
>
> **[3:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=237)** Let's quickly run one of the provider's pre-written queries.
>
> **[4:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=241)** I'll run the very first query at the top.
>
> **[4:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=244)** This query will let us know what the weather will be like in Boston next weekend, and you can see this from the comment right above the query.
>
> **[4:12](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=252)** You can see in the results pane that I get several weather metrics for the City of Boston for the upcoming weekend. Pretty cool.
>
> **[4:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=259)** On the left, you can explore the structure of the data share by clicking FROSTBYTE_WEATHERSOURCE.
>
> **[4:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=266)** You can see that we actually didn't load just the dataset.
>
> **[4:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=269)** We loaded a database that includes a schema called ONPOINT_ID, and that schema has lots of views containing data that we can use.
>
> **[4:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=279)** Now let's run our own SQL Query.
>
> **[4:42](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=282)** Open a new SQL worksheet.
>
> **[4:49](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=289)** Hover over the ONPOINT_ID schema.
>
> **[4:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=292)** Click the three dots and click Set Worksheet Context.
>
> **[4:58](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=298)** This will quickly set the worksheet context, which will let the worksheet know which dataset we plan to run queries against.
>
> **[5:05](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=305)** You can see the updated context reflected in the worksheet here.
>
> **[5:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=310)** In the GitHub repository for this course, navigate to the module-2 folder and open the frostbyte-weathersource.sql file.
>
> **[5:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=319)** Copy everything within the file and paste it into the worksheet.
>
> **[5:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=328)** Click Run All.
>
> **[5:32](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=332)** The results include the average temperature and total precipitation for cities in France.
>
> **[5:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=337)** Cool. That was pretty easy.
>
> **[5:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=340)** Let's quickly recap what we covered in this video.
>
> **[5:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=343)** You learned that it's common practice to enrich your data with high-quality data for all sorts of different use cases, like training machine learning models, as an example.
>
> **[5:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=352)** You learned how to access a Snowflake Marketplace, which is where you can find high-quality datasets that are continuously maintained by the dataset provider.
>
> **[6:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=361)** You loaded the data from the Snowflake Marketplace in just a matter of seconds and also ran some SQL queries to explore the data.
>
> **[6:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=368)** This is just one of the quick and easy ways of loading data into your Snowflake environment without needing to leave the Snowflake Data Cloud.
>
> **[6:16](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-from-snowflake-marketplace?u=76281980&t=376)** Next, we'll perform ingestion using Snowflake's web interface, Snowsight.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (31), [[Snowflake]] (15), [[SQL]] (6), next (3), power (2)
> **Env Vars:** sql (5), frostbyte_weathersource (2), onpoint_id (2), llc (1)
> **UI Navigation:** click on (3), dropdown (1), navigate to (1), open the (1)
> **CLI Commands:** find (3), make (2)
> **Definitions:** is a  (2)
> **File Paths:** frostbyte-weathersource.sql (1)
> **Cross-References:** we covered (1)
> **Tools:** github (1)

#### Loading data using snowflake’s web interface
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=0)** Another powerful way of ingesting data into Snowflake is by using one of the various options within Snowflake's web interface.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=8)** In this video, we'll specifically cover how to ingest data from a local file directly into a table in Snowflake.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=14)** But don't worry, you'll get a glimpse of all of the available options within your account shortly.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=20)** Using the web interface is ideal when you have data that is ready to load and you need a quick and straightforward way of loading it into Snowflake.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=28)** This might be something you do for an initial data migration, periodic data updates, or maybe one-off uploads.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=36)** What's great is that Snowflake supports a variety of different file formats, and the UI is a fast way of getting data into Snowflake without having to worry too much about the format of the file.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=47)** For example, Snowflake easily handles CSV, JSON, Parquet, XML, and many other file formats.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=54)** But Snowflake can go even further.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=57)** If you're loading data that's been compressed, Snowflake can also handle those compression algorithms and decompress the files for you during data loading.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=65)** You can check out all the supported compression algorithms in Snowflake's technical documentation.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=70)** For now, let's get hands-on and use a web interface to load some data into Snowflake.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=75)** We'll actually load the same dataset into your account multiple times throughout this module but using different methods, of course.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=82)** The nature of the data isn't the important thing to focus on.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=86)** For now, it's more important to focus on the method of ingestion.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=89)** Toward the end of this module, we'll load some different datasets into your account, and we'll use that data throughout the rest of the course.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=96)** Okay. With that, let's walk through the process together.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=99)** Pause the video now if you need to log into your Snowflake account.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=103)** Start by clicking on Data, then clicking on Add Data.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=107)** You'll be presented with a page outlining several different options for ingesting data into Snowflake.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=113)** The first option you should see is "Load data into a Table."
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=117)** Click on it.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=119)** A modal should appear prompting you to upload files.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=122)** Before we upload anything, let's take a closer look at the modal.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=126)** Just by inspecting the modal a little more, you can see that you can upload files from your local computer or from a stage.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=133)** In this video, we'll cover the former.
>
> **[2:15](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=135)** We'll touch on stages later in this module.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=138)** You'll also notice that you'll need to select the database and schema that corresponds to the table you want to load data into.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=145)** We'll use this modal to create and select those objects shortly.
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=149)** Finally, you'll note there's an option to select or create a table, meaning you can load data into an existing table or create a new table upon loading the data.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=160)** We'll create a new table and also name the table using the input form below.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=164)** Okay. Let's load some data into our accounts using this option.
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=168)** For the purposes of convenience, the file containing the data that we'll upload is in our GitHub repository.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=174)** If you've already cloned the repo to your computer, you'll simply need to navigate to the correct directory to select the file.
>
> **[3:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=181)** Otherwise, you can navigate to the repository on GitHub, find the file there, and download it.
>
> **[3:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=186)** If you're doing this now, make sure you take note of where this is being downloaded on your computer.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=192)** I already have the file on my local file system, so I'll start by clicking on Browse.
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=202)** The file is in the module-2 folder within the repo, and it's called sample_orders CSV.
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=208)** Select the file and click Open.
>
> **[3:32](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=212)** You'll see the file within the modal along with the approximate file size next to the file name.
>
> **[3:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=217)** Let's now create a database to store this data.
>
> **[3:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=220)** Click on the Add Database button.
>
> **[3:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=223)** Name the database LOAD_DATA.
>
> **[3:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=227)** Feel free to enter a comment if you'd like.
>
> **[3:50](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=230)** I'll leave mine blank.
>
> **[3:51](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=231)** Click Create.
>
> **[3:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=232)** Okay. Great. The database is created, and you can see the schema, PUBLIC has been selected.
>
> **[3:58](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=238)** For the purposes of this exercise, this schema works just fine, so I'll leave it alone.
>
> **[4:03](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=243)** Below that, the Create New Table option should already be highlighted for me, so I'll leave it as is.
>
> **[4:09](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=249)** I'll enter a name for the table, and I'll name it SAMPLE_ORDERS_UI.
>
> **[4:14](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=254)** Click Next.
>
> **[4:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=259)** Snowflake automatically inferred several things for us about this data without us needing to do anything.
>
> **[4:25](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=265)** That's amazing.
>
> **[4:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=266)** First, it inferred the file format.
>
> **[4:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=269)** You'll see on the left that Snowflake detected this as a CSV file, along with some other options, which you can view by expanding View options.
>
> **[4:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=277)** Snowflake also automatically inferred the table schema of our data.
>
> **[4:41](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=281)** A table schema is a definition that describes the organization of data within a table, specifically defining things like columns, their data types, and more.
>
> **[4:50](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=290)** You can see all of that surfaced here: data types, column names, and even a tiny preview of the data.
>
> **[4:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=297)** My favorite part about the automatic schema detection here is that I have the ability to override anything that Snowflake inferred.
>
> **[5:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=304)** For example, maybe I want to handle a certain column as a different data type or rename columns or something else.
>
> **[5:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=310)** There's also an option here that allows me to specify what should happen if an error is encountered during the loading of the data.
>
> **[5:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=317)** If you expand it, you'll see the options in full. I'll leave it to the default, which is to abort the loading of the file.
>
> **[5:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=323)** Up here, you can see that I can select the virtual warehouse I want to use to power the ingestion.
>
> **[5:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=328)** We'll touch on virtual warehouses later in the module.
>
> **[5:31](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=331)** For now, we can leave this set to the current virtual warehouse.
>
> **[5:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=334)** I love how easy it is to customize the loading of the data in this part of the modal.
>
> **[5:38](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=338)** And finally, before we load the data, one more quick thing.
>
> **[5:42](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=342)** For all the SQL fans that want to see what is happening under the hood, you can preview the SQL that will be executed according to what was specified in the modal by clicking on Show SQL.
>
> **[5:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=352)** You can see the SQL used to create the table to define the file format and more.
>
> **[5:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=356)** We'll touch on quite a few of these things in an upcoming video.
>
> **[6:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=360)** Okay. Hide the SQL by clicking Hide SQL, and now load the data by clicking on Load.
>
> **[6:07](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=367)** If successfully loaded, you'll see a modal like this presenting an option to query the data immediately if you want to.
>
> **[6:14](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=374)** If you click on that, a new SQL worksheet will open for you with a sample query pre-written for you.
>
> **[6:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=383)** Okay. That's it.
>
> **[6:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=384)** That's how to ingest local file data directly into tables in Snowflake using the web interface.
>
> **[6:30](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=390)** Well done.
>
> **[6:31](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=391)** Now a quick note here before we move on.
>
> **[6:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=393)** This process didn't require us to write any code, but don't let the simplicity and ease of use of this workflow fool you.
>
> **[6:41](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=401)** It's an incredibly powerful way of ingesting data into Snowflake at scale.
>
> **[6:46](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=406)** The great thing about using the UI is that many things are abstracted away for you to make it easy for you to use the power of Snowflake to ingest data, but you still have the full flexibility to configure things like error handling, compute power, the table schema, and much more throughout the entire process.
>
> **[7:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-s-web-interface?u=76281980&t=424)** In fact, coming up, we'll dig a little deeper and understand how to optimize data ingestion into Snowflake.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (37), [[Snowflake]] (21), [[SQL]] (7), database (5), web (4)
> **Env Vars:** sql (7), csv (3), json (1), xml (1), load_data (1)
> **UI Navigation:** select the (4), click on (3), navigate to (2)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** later in (2), coming up (1)
> **Tools:** github (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)

#### Optimize compute resources for efficient batch ingestion
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=0)** Until now, we haven't explicitly discussed Snowflake's compute resources, although we've been actively using them to ingest data.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=8)** They're incredibly important to the batch ingestion process and to so many other general operations within Snowflake.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=15)** So what exactly are they?
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=16)** Snowflake's compute resources are known as virtual warehouses.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=20)** Under the hood, a virtual warehouse is a cluster of compute resources in the cloud.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=26)** For now, let's simply refer to them as compute clusters.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=30)** Compute clusters can be made up of one or more nodes.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=33)** Each node is a virtual machine that provides a CPU, memory, and temporary storage to execute SQL and other operations against your data.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=42)** A single node is able to perform multiple data operations in parallel using threads.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=47)** You don't need to understand the technical details behind threads, but this specific capability of nodes being able to run threads in parallel is key to understanding how to optimize virtual warehouses for the most efficient batch ingestion.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=60)** In short, understanding the concept of parallel threads will help you understand how to get the most out of a virtual warehouse.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=67)** Okay. So that was a little abstract.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=69)** How exactly does this impact ingestion?
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=71)** Well, let's get a little more concrete.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=73)** As you may have seen within the UI, Snowflake virtual warehouses come in different sizes.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=78)** They're specifically T-shirt-sized.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=81)** The smallest size for a virtual warehouse is extra small, scaling up to as large as 6XL.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=88)** The important takeaway for you to understand is that there's a direct relationship between the size of the virtual warehouse and the number of threads available to you in that warehouse.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=98)** Simply put, the larger the virtual warehouse, the more threads you're able to use.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=104)** In fact, each subsequent warehouse size indicates a doubling of the number of threads provided by the virtual warehouse.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=112)** So an extra small virtual warehouse provides eight threads, a small virtual warehouse has 16 threads, a medium has 32 threads, and so on.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=122)** And keep in mind, these numbers are for a single node in the compute cluster for that virtual warehouse.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=128)** And since there can be multiple nodes in a compute cluster, to get the total number of threads available to you, you'd simply multiply the number of threads in a single node for a given virtual warehouse size times the number of nodes in the compute cluster.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=144)** For example, we know that an extra small virtual warehouse with a single node provides you with eight threads.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=150)** So adding a node to that compute cluster would bring the total number of threads in the extra small virtual warehouse to 16, and a three-node compute cluster would bring the total number of threads to 24.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=163)** Okay. So what exactly do these threads have to do with ingesting data?
>
> **[2:49](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=169)** Well, remember, threads are able to operate in parallel.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=172)** So to fully utilize a virtual warehouse, all threads should be doing some amount of work during ingestion.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=180)** That is, there are no idle or unutilized threads during ingestion.
>
> **[3:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=184)** That's the key takeaway for optimally using compute resources for batch loading.
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=190)** As an example, to fully and optimally utilize a small virtual warehouse during ingestion, you'd ideally upload 16 data files at once.
>
> **[3:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=199)** And that's because a small virtual warehouse with a single node has 16 threads.
>
> **[3:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=203)** Each thread can handle ingesting a file, and the 16 threads can operate in parallel.
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=208)** You can, of course, always ingest fewer than 16 files on a small warehouse, but you simply would not be fully utilizing the warehouse.
>
> **[3:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=217)** Say, for example, that you want to ingest one large file; the ingestion, in this case, would run on one thread while the other 15 threads would sit idle.
>
> **[3:46](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=226)** That's not very efficient.
>
> **[3:48](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=228)** Okay. So now you know how to fully utilize a warehouse by making sure each thread in the warehouse is doing some work, but you can optimize ingestion even further.
>
> **[3:58](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=238)** For the most efficient ingestion, each thread has a sweet spot, a preference really, for the size of the data file.
>
> **[4:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=246)** In fact, the optimal size for a file is between 100 and 250 megabytes.
>
> **[4:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=251)** Now naturally, I hear the following question a lot: my data files won't always fall within that range in file size.
>
> **[4:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=259)** So what should I do?
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=261)** You should split your large files into smaller files such that each of the smaller files fall into the recommended 100 to 250-megabyte range in file size.
>
> **[4:31](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=271)** Now that might sound like a huge effort, but there are lots of tools and handy command line utilities out there to greatly expedite this.
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=280)** And the effort is totally worth it because ingesting large files on a single thread is far less efficient than ingesting the contents of that same file across multiple appropriately sized chunks.
>
> **[4:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=293)** For example, with an extra small virtual warehouse, it's more efficient to ingest eight 128-megabyte files that were created as chunks from a 1-gigabyte file rather than ingesting that 1-gigabyte file in whole.
>
> **[5:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=306)** And that's because smaller files can be processed in parallel more efficiently, which speeds up the ingestion process and ensures a more even distribution of work across the warehouse's compute resources.
>
> **[5:18](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=318)** So keep the following in mind when working with virtual warehouses for batch ingestion: always aim to utilize all of the threads of the virtual warehouse you're using.
>
> **[5:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=328)** The optimal file size of a data file is between 100 and 250 megabytes.
>
> **[5:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=334)** Always aim to ingest data files in this range on each thread of the virtual warehouse.
>
> **[5:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=340)** You should split large files into chunks of this size if necessary, and you can go even further by compressing the files to get them to be smaller.
>
> **[5:49](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=349)** Snowflake will handle the decompression for you during ingestion.
>
> **[5:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=353)** If cost-effectiveness is a constraint, consider starting with an extra small virtual warehouse and scale up only if needed.
>
> **[6:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=360)** Personally, I always start with an extra small virtual warehouse myself.
>
> **[6:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=364)** Okay. We covered a lot of ground in this video.
>
> **[6:07](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=367)** Let's recap what you learned.
>
> **[6:09](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=369)** You learned that a virtual warehouse is a cluster of cloud-based compute resources.
>
> **[6:14](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=374)** You learned that clusters are made up of one or more nodes and that a node is a virtual machine that offers memory and computing power.
>
> **[6:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=383)** Nodes use threads to perform operations.
>
> **[6:27](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=387)** You learned that a single node offers eight threads and that an increase in size for a virtual warehouse corresponds to a doubling of the amount of available threads.
>
> **[6:38](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=398)** You learned that files are ideally between 100 and 250 megabytes in size.
>
> **[6:44](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/optimize-compute-resources-for-efficient-batch-ingestion?u=76281980&t=404)** In the next video, we'll learn how to load data using Snowflake's Command Line Interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (10), node (10), [[Snowflake]] (6), parallel (6), cloud (2)
> **CLI Commands:** node (10)
> **Definitions:** is a  (5), known as (1)
> **Analogies:** for example (3)
> **Env Vars:** cpu (1), sql (1)
> **Cross-References:** we covered (1), in the next (1)
> **Tools:** command line (2)
> **Best Practices:** recommended (1)

#### Loading data using snowflake CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=0)** Another powerful way of ingesting data into Snowflake is using Snowflake's official Command Line Interface.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=6)** This is especially useful for when you want to automate the loading of data using a script and when you want to integrate this automation into CI/CD pipelines.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=15)** We'll cover data pipeline automation in a later module, and we'll cover DevOps in a different course intended to be the follow-up to this course.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=23)** For now, we'll focus on using the Snowflake CLI to load data into your Snowflake account.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=28)** Later, when you learn about DevOps with Snowflake, you'll know how to integrate what you learn here into CI/CD pipelines.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=35)** Let's walk through the process of using Snowflake CLI to load data into Snowflake together.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=40)** In an earlier video, we installed Snowflake CLI, so we can dive right in.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=45)** If you haven't yet installed Snowflake CLI, you can pause the video and install it by following the instructions in the corresponding video in the first module.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=53)** The first thing you'll need to do is configure your connection to Snowflake.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=57)** When you installed Snowflake CLI, a file named config.toml was created for you.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=63)** This file is where you'll configure and manage connections to Snowflake.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=67)** Let's start by opening VS Code.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=70)** Next, let's open the config.toml file.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=72)** On my Mac, this file lives in a folder called .snowflake, which is created in my root directory.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=77)** If you're on a different operating system, it'll be in a different directory.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=81)** If you're having trouble finding the file, check out Snowflake's official documentation on the Snowflake CLI for guidance.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=87)** Also, if for some reason this file doesn't exist for you, even though you installed Snowflake CLI, you can run snow --help.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=96)** You can actually run any Snowflake CLI command, and the file will automatically be created for you.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=101)** Okay. I'll go ahead and open the file by typing code ~/.snowflake/config.toml.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=114)** Here, I'll configure our connection to Snowflake.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=118)** Let's name our connection modern_data_engineering_snowflake.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=125)** You can name your connection whatever you want, but just be sure it starts with "connections" followed by the name you want to give your connection.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=133)** Next, I'll specify the account identifier, username, password, and a couple of other parameters here.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=139)** Technically, only the account identifier, user, and password parameters are required to connect, but you can specify the other parameters like database, schema, and role in case you want your connection to persist a specific Snowflake context.
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=153)** To find your account identifier, navigate to your Snowflake account.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=158)** Click on your account details at the bottom left, navigate to Account, hover over the account you're currently logged into, and click the Copy Account Identifier button.
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=170)** Navigate back to the file and paste it in surrounded by double quotes.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=176)** Update the period to be a dash.
>
> **[2:59](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=179)** This is a critical part that is often overlooked, so double-check to be sure you did this. Next, add your username and password.
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=189)** Set warehouse to COMPUTE_WH, database to LOAD_DATA, schema to PUBLIC, and role to ACCOUNTADMIN.
>
> **[3:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=199)** Finally, at the top of the file, I'll specify that this should be the default connection used when executing any Snowflake CLI commands. I'll do this by typing default_connection_name equals modern_data_engineering_snowflake.
>
> **[3:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=217)** Okay. Save the file.
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=219)** Now let's quickly sanity-check ourselves by testing the connection.
>
> **[3:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=223)** Type snow connection test.
>
> **[3:48](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=228)** If the connection is correctly configured, you should see output like this.
>
> **[3:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=232)** Note the value "OK" for the field "Status."
>
> **[3:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=236)** Okay. So with our connection configured, we can use the Snowflake CLI to load data into Snowflake.
>
> **[4:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=241)** We'll prepare the data, create a stage, then load the data into Snowflake.
>
> **[4:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=246)** The first thing that you'll need to do is prepare the data.
>
> **[4:09](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=249)** Using the terminal, navigate to the module-2 folder in the repo.
>
> **[4:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=253)** We'll use the Snowflake CLI to load the sample orders CSV file into our Snowflake environment.
>
> **[4:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=259)** We don't need to do anything to this data.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=261)** It's ready to load.
>
> **[4:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=263)** Next, let's create a stage within Snowflake.
>
> **[4:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=266)** This stage is where we'll upload the sample orders file to.
>
> **[4:30](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=270)** Then we'll load the data from the stage into the LOAD_DATA database.
>
> **[4:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=274)** You can use a web interface to create the stage, or you can use Snowflake CLI.
>
> **[4:38](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=278)** I'll demonstrate how to do this using the Snowflake CLI.
>
> **[4:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=283)** Type snow stage create snowflake_cli_stage.
>
> **[4:50](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=290)** If successful, you should see output similar to this.
>
> **[4:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=294)** Next, we'll use a snow stage copy command to load the sample order CSV file into Snowflake.
>
> **[5:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=301)** Let's type snow stage copy sample_orders.csv @snowflake_cli_stage.
>
> **[5:14](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=314)** This command will load sample order CSV to the Snowflake CLI stage that we just created.
>
> **[5:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=320)** If successful, you should see output like this.
>
> **[5:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=323)** Note the status field that says "UPLOADED."
>
> **[5:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=326)** Let's run a quick sanity check.
>
> **[5:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=328)** Type snow stage list-files @snowflake_cli_stage.
>
> **[5:38](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=338)** We can also navigate to our Snowflake account and confirm that the stage is created and that the file was uploaded.
>
> **[5:55](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=355)** Okay. That looks great.
>
> **[5:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=356)** Let's load the data from the file into a table now.
>
> **[6:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=360)** We can always run some SQL in a SQL worksheet to do this, but let's use a Snowflake CLI to do this instead.
>
> **[6:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=366)** The file named "load_from_cli_stage.sql" within the module-2 folder contains a SQL that will run to load the data.
>
> **[6:15](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=375)** We'll execute this file directly from the command line using Snowflake CLI.
>
> **[6:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=379)** First, let's add the file to the stage.
>
> **[6:22](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=382)** Run snow stage copy load_from_cli_stage.sql @snowflake_cli_stage.
>
> **[6:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=394)** Now let's execute this file.
>
> **[6:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=397)** Run snow stage execute @snowflake_cli_stage/ load_from_cli_stage.sql.
>
> **[6:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=412)** Okay. Excellent.
>
> **[6:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=413)** I see a success message in the terminal, and if I navigate to my Snowflake account, I can confirm that the table was indeed created and that the data was loaded into it.
>
> **[7:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=421)** That was pretty cool.
>
> **[7:03](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=423)** Feel free to browse the code and the load_from_cli_stage.sql file.
>
> **[7:07](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=427)** You were exposed to some of this type of SQL in an earlier video when we loaded data via the web interface, but we haven't covered the concepts in detail just yet.
>
> **[7:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=437)** That's okay.
>
> **[7:18](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=438)** We're going to cover them in the next video.
>
> **[7:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=440)** For now, it's important for you to come away from this exercise knowing that you can load data into your Snowflake environment using the Snowflake CLI entirely, and this makes it an invaluable tool in the context of data ingestion, especially when you want to automate the loading of data using a script or when you want to integrate this automation into CI/CD pipelines.
>
> **[7:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-snowflake-cli?u=76281980&t=460)** Coming up, we'll explore one of the most common and powerful commands for batch ingestion of data into Snowflake: the COPY INTO command.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (39), data (19), [[CLI]] (17), [[SQL]] (8), next (6)
> **Env Vars:** cli (17), sql (4), csv (3), load_data (2), compute_wh (1)
> **Code Identifiers:** snowflake_cli_stage (5), load_from_cli_stage (4), modern_data_engineering_snowflake (2), default_connection_name (1), sample_orders (1)
> **File Paths:** load_from_cli_stage.sql (4), config.toml (2), snowflake/config.toml (1), sample_orders.csv (1)
> **UI Navigation:** navigate to (5), open the (2), click on (1)
> **Prerequisites:** configure (3), you'll need (2), install (1), required to (1)
> **Tools:** command line (2), terminal (2), vs code (1)
> **CLI Commands:** cd (3), find (1)

#### Loading data using the COPY INTO command
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=0)** So far, our batch ingestion techniques have been no-code or low-code, which is pretty neat.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=6)** To quickly recap, we've pulled in data from the Snowflake Marketplace, performed ingestion of local data files using the web interface, and performed ingestion of data using the command line interface.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=18)** Using these techniques, you've seen firsthand how easy it is to get data into Snowflake.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=23)** Let's now dive into one of the most common and powerful techniques for batch data ingestion: Snowflake's COPY INTO command.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=31)** The COPY INTO command is a SQL command that allows you to ingest data from stage files into a table.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=37)** And when I say stage files, I simply mean files that live in a stage.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=41)** A stage is where a file can be stored before its data is ingested into Snowflake.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=46)** The stage can be a Snowflake internal stage or an external stage that points to third-party cloud storage.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=53)** For example, you can create an external stage in Snowflake and specify that the stage should point to, say, an AWS S3 bucket, for example.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=62)** In fact, ingesting data from cloud object storage using the COPY INTO command is a very common pattern for batch ingestion, and this is a technique we'll cover in this video.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=72)** The general gist involves these main steps.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=75)** First, define the table that you want to load data into if you haven't already done so.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=81)** If you do have an existing table that you want to load data into, you wouldn't necessarily have to do the step, assuming the table schema matches the data that you're loading.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=90)** Next, define a file format to use during ingestion.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=94)** You might define a specific file format object if you have many options that you want to configure for the ingestion, things like the field delimiter, type formatting, trimming whitespace, and much more.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=107)** Otherwise, you're probably okay with defining the file format in line and simply specifying the format of the data files you're working with, such as CSV, JSON, or Parquet.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=117)** You'll get hands-on experience with this shortly.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=121)** Next, you define an external stage.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=123)** When defining your external stage, you'll specify the address to your cloud object storage, like your AWS S3 bucket, and any credentials needed to access the bucket.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=133)** Finally, write the COPY INTO command and put everything you've defined together.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=138)** You'll specify the table you'll load the data into, the stage containing the data files, and the file format to use during ingestion.
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=146)** You can also specify what should happen in case errors are encountered during ingestion using the on-error option, which is the same option you saw when loading data using the web interface earlier or if you browse a SQL file that we use to load data using the Snowflake CLI.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=162)** You'd write and execute all of this in a Snowflake worksheet.
>
> **[2:46](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=166)** In fact, let's get hands-on and walk through the process together.
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=170)** Pause the video now if you need to log in to your Snowflake account.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=174)** Let's start by defining a table that we'll load data into.
>
> **[2:58](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=178)** Navigate to the sample_menu.sql file in the module-2 folder of the repo.
>
> **[3:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=184)** Copy the first 18 or so lines of code and paste them into a new SQL worksheet.
>
> **[3:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=201)** In these lines of code, I create a table called sample_menu_copy_into and specify the column definitions and their corresponding data types.
>
> **[3:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=209)** Run the file.
>
> **[3:35](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=215)** We'll now type the rest of the code into the worksheet manually so that you can get some practice with some important concepts.
>
> **[3:42](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=222)** Note, however, that the sample_menu.sql file contains all of the code for this exercise in case you simply want to paste the entire file into the worksheet and run it.
>
> **[3:51](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=231)** Let's now create our stage.
>
> **[3:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=233)** Type the following: CREATE OR REPLACE STAGE load_data.public.blob_stage.
>
> **[4:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=244)** URL equals apostrophes s3 colon slash slash sfquickstart slash tastybytes slash file_format equals type equals csv semicolon.
>
> **[4:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=260)** This creates a stage called blob_stage, and the URL parameter points to the address of an AWS S3 bucket containing the CSV files.
>
> **[4:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=269)** You'll note that I'm not specifying credentials for the bucket here, and that's intentional.
>
> **[4:35](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=275)** For the purposes of convenience, we've made this bucket publicly accessible so that you can follow along, but the best practice is to secure your bucket and authenticate by passing in the correct credentials. Run this block of SQL.
>
> **[4:49](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=289)** Okay. Great. The stage is created.
>
> **[4:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=292)** We can quickly take a peek at what's in the bucket.
>
> **[4:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=296)** Type LIST @load_data.public.blob_stage /raw_pos/menu/;.
>
> **[5:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=311)** This will list the files in the raw_pos menu folder of the S3 bucket.
>
> **[5:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=317)** In the results pane, you'll see that there's a compressed CSV file there called menu.csv.gz.
>
> **[5:25](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=325)** We're going to load this data into our table.
>
> **[5:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=329)** Now let's write the COPY INTO command. Type COPY INTO load_data.public.sample_menu_copy_into
>
> **[5:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=343)** FROM @load_data.public.blob_stage /raw_pos/menu/;.
>
> **[5:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=357)** I specify the table to write to and the file within the external stage.
>
> **[6:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=361)** Let's run this command.
>
> **[6:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=364)** Okay. I see in the results pane a status of loaded and 100 rows that were loaded.
>
> **[6:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=370)** Let's sanity-check ourselves.
>
> **[6:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=373)** Type SELECT *FROM load_data.public.sample_menu_copy_into;.
>
> **[6:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=384)** Run the SQL.
>
> **[6:27](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=387)** You should get the 100 rows shown in the results pane, and that's it.
>
> **[6:30](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=390)** That's how to use a COPY INTO command for batch ingestion of data files and cloud object storage.
>
> **[6:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=396)** We did all of this by piecing together the various components needed to use a COPY INTO command: the target table, the stage, and the file format. If you browse the corresponding Snowflake documentation, you'll learn that you can actually do all of this in a single command, but I demonstrated each piece so that you can see how a COPY INTO command is typically constructed.
>
> **[6:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=417)** Here are a couple of best practices and considerations to keep in mind when using COPY INTO: ensure your data is ready to be loaded, meaning you should have an idea of the structure of your data and how it will map to a table in Snowflake.
>
> **[7:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=431)** Create your target tables ahead of time.
>
> **[7:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=433)** This will make the process a little more efficient.
>
> **[7:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=437)** And finally, this is an extremely common pattern for batch ingestion.
>
> **[7:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=441)** It's common to use this for initial environment setups but also very common as part of scheduled loading of large amounts of data into Snowflake.
>
> **[7:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=449)** We'll cover how to automate this workflow in a later module, but it's good to get exposure to this concept now in a manual fashion so it can build up to more robust automated pipelines.
>
> **[7:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=460)** So far, we've loaded samples of data, mostly for the purposes of focusing on the method of ingestion rather than the nature of the data.
>
> **[7:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=467)** But moving forward, this will change.
>
> **[7:49](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=469)** Be sure to complete the reading for this module.
>
> **[7:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=472)** Using the instructions in the reading, you'll load a bunch of data related to food truck sales.
>
> **[7:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=477)** We'll use that data in subsequent exercises.
>
> **[8:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=480)** Closely follow the instructions in there to be sure you're set up with the data needed for the rest of the course.
>
> **[8:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/loading-data-using-the-copy-into-command?u=76281980&t=486)** Okay. Coming up, I'll talk about how to ingest data into Snowflake from other data systems using connectors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (30), [[Snowflake]] (13), [[SQL]] (7), cloud (4), aws (3)
> **Env Vars:** copy (10), into (10), sql (5), aws (3), csv (3)
> **Code Identifiers:** load_data (5), blob_stage (4), sample_menu_copy_into (3), raw_pos (3), sample_menu (2)
> **CLI Commands:** aws (3), make (1)
> **Definitions:** is a  (3), is an  (1)
> **File Paths:** sample_menu.sql (2), menu.csv (1)
> **Analogies:** for example (2), such as (1)
> **Warnings:** note that (1), keep in mind (1)

#### Ingesting data from other data systems using connectors
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/ingesting-data-from-other-data-systems-using-connectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/ingesting-data-from-other-data-systems-using-connectors?u=76281980&t=0)** - You won't always have direct access to the data that you want to ingest into Snowflake.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/ingesting-data-from-other-data-systems-using-connectors?u=76281980&t=5)** In fact, that data may be housed in an entirely different data system.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/ingesting-data-from-other-data-systems-using-connectors?u=76281980&t=10)** And by different data system, I'm not necessarily referring to cloud object storage integrations.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/ingesting-data-from-other-data-systems-using-connectors?u=76281980&t=15)** I'm referring to entirely different platforms or databases, ones that you might not have direct access to.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/ingesting-data-from-other-data-systems-using-connectors?u=76281980&t=21)** This scenario presents its own unique set of challenges.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/ingesting-data-from-other-data-systems-using-connectors?u=76281980&t=25)** This is where Snowflake Native Connectors are great options.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/ingesting-data-from-other-data-systems-using-connectors?u=76281980&t=28)** Snowflake Native Connectors provide native integration of third-party applications and database systems in Snowflake.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/ingesting-data-from-other-data-systems-using-connectors?u=76281980&t=35)** They allow you to access data and other systems without the need to manually integrate against API endpoints.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/ingesting-data-from-other-data-systems-using-connectors?u=76281980&t=41)** Data automatically refreshes based on your desired frequency in your Snowflake account.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/ingesting-data-from-other-data-systems-using-connectors?u=76281980&t=46)** Many of the connectors are in the form of Snowflake Native Applications, which means you can find them on the Snowflake Marketplace.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/ingesting-data-from-other-data-systems-using-connectors?u=76281980&t=53)** Let me quickly demonstrate where you can find connectors, and by the way, you won't need to follow along in this video.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/ingesting-data-from-other-data-systems-using-connectors?u=76281980&t=59)** I just quickly want to touch on this additional and powerful method for ingesting data into Snowflake.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/ingesting-data-from-other-data-systems-using-connectors?u=76281980&t=65)** There are a couple of ways to browse connector offerings.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/ingesting-data-from-other-data-systems-using-connectors?u=76281980&t=68)** The first is to navigate to the add data section of the data section in the sidebar of your account.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/ingesting-data-from-other-data-systems-using-connectors?u=76281980&t=76)** Here you can browse a few of the connectors available to you.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/ingesting-data-from-other-data-systems-using-connectors?u=76281980&t=80)** If you click on one, you'll be taken to the connectors landing page in the Snowflake Marketplace, but you don't have to start there.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/ingesting-data-from-other-data-systems-using-connectors?u=76281980&t=88)** You can also click on more connectors, or simply navigate to the Snowflake Marketplace and discover more connectors there, similar to how you would discover datasets.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/ingesting-data-from-other-data-systems-using-connectors?u=76281980&t=100)** You'd find a relevant connector, perhaps read its listing page, and install the connector in your account, which you can then configure based on your use case.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/ingesting-data-from-other-data-systems-using-connectors?u=76281980&t=109)** Again, I won't demonstrate how to set up any one specific connector, as they can each have their own unique requirements.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/ingesting-data-from-other-data-systems-using-connectors?u=76281980&t=115)** But I did want to take a little time to highlight that there are ways of ingesting data into Snowflake from other data systems and databases using connectors.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/ingesting-data-from-other-data-systems-using-connectors?u=76281980&t=124)** Coming up, let's recap all of what you've learned about ingestion so far.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/ingesting-data-from-other-data-systems-using-connectors?u=76281980&t=128)** (upbeat techno music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (11), [[Snowflake]] (11), [[Databases]] (2), cloud (1), database (1)
> **UI Navigation:** navigate to (2), click on (2), in the sidebar (1)
> **CLI Commands:** find (3)
> **Prerequisites:** install (1), configure (1), set up (1)
> **Env Vars:** api (1)
> **Cross-References:** coming up (1)
> **Analogies:** similar to (1)
> **Speakers:** - you (1)

#### Recap and best practices for batch ingestion
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980&t=0)** We've covered a range of common and powerful techniques for performing batch ingestion with Snowflake.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980&t=6)** The techniques have ranged from no-code options that allow you to quickly load data into your Snowflake account to techniques that allow you to ingest data from a local file system or from cloud storage.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980&t=18)** Let's quickly recap the techniques that we covered in this module.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980&t=22)** Loading data from Snowflake Marketplace, batch ingestion using Snowflake's web interface, batch ingestion with Snowflake CLI, batch ingestion using the COPY INTO command and cloud object storage, how you might load data using Snowflake connectors.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980&t=40)** You also learned how to make the most out of Snowflake compute resources, virtual warehouses so that you're optimally utilizing them when performing batch ingestion.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980&t=49)** This is an especially useful concept that will level you up as you build your data pipelines.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980&t=53)** All of these ingestion techniques play important and unique roles in building data pipelines, but as always, your use case will vary. I mentioned this earlier in the course, but the intent of this module is to present you with some of the most common and powerful batch ingestion techniques.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980&t=70)** These techniques, of course, don't comprise an exhaustive list, but with these core techniques in your tool belt, you're well-equipped to explore other techniques or think about how to combine them based on what you're trying to do as part of your data pipeline.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980&t=84)** Finally, let's recap some best practices to keep in mind when using these techniques.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980&t=89)** First, 100 to 250 megabytes is the ideal file size range when loading data into Snowflake.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980&t=97)** This size is optimally efficient for Snowflake's virtual warehouses.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980&t=102)** You should split files into smaller chunks that fall within this range whenever possible.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980&t=107)** You can use handy command line utilities to help you do this.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980&t=111)** Compress your file formats whenever possible.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980&t=114)** Snowflake can handle the decompression for you when you load those compressed files.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980&t=119)** Always seek to understand the total number of threads available to you in a virtual warehouse.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980&t=125)** This way, you can aim to fully utilize the warehouse when loading your data.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980&t=130)** Remember, you can use the size of the warehouse in combination with the number of nodes in the cluster to figure out the total number of threads available to you.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980&t=140)** In general, I recommend starting with an extra small virtual warehouse and scaling up only as necessary.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980&t=147)** If you don't specify a size when creating a new virtual warehouse, Snowflake will default it to an extra small.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980&t=154)** There's a lot of detailed technical guidance on the web on virtual warehouses.
>
> **[2:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980&t=159)** I encourage you to do some more research on this topic if you're interested in learning more about how they work.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980&t=164)** Okay. With these ingestion techniques now in your tool belt, you might be wondering what's next.
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980&t=170)** Well, chances are the raw data you've ingested into Snowflake still needs a lot of work on it before it can provide the insights you're looking to extract.
>
> **[2:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-batch-ingestion?u=76281980&t=177)** So join me in the next module to dive into data transformations in Snowflake.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (13), data (11), cloud (2), web (2), next (2)
> **Env Vars:** cli (1), copy (1), into (1)
> **Cross-References:** we covered (1), earlier in (1), in the next (1)
> **CLI Commands:** make (1)
> **Tools:** command line (1)
> **Definitions:** is an  (1)


### 3. Data Transformations with Snowflake

[↑ Back to Table of Contents](#table-of-contents)

#### What are data transformations?
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-are-data-transformations?u=76281980)

> [!transcript]- Transcript
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-are-data-transformations?u=76281980&t=11)** It's likely that your raw data won't directly have the insights that you're looking for.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-are-data-transformations?u=76281980&t=15)** Before being able to extract insights from your data, you'll probably need to address things like missing values, incorrect formatting or column types, required calculations, aggregations, and much more.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-are-data-transformations?u=76281980&t=28)** In short, there's a good chance that your raw data is not in the end state you need it to be in, and you'll need to perform some work against it to get it to the right end state.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-are-data-transformations?u=76281980&t=37)** I like to think of that work as data transformations or the set of changes or calculations that you'll perform against your raw data to get closer to your desired insights.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-are-data-transformations?u=76281980&t=47)** So what exactly do transformations look like?
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-are-data-transformations?u=76281980&t=51)** What kinds of changes are typical against raw data?
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-are-data-transformations?u=76281980&t=54)** Well, every use case will vary simply because the nature of your raw data is likely also going to vary.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-are-data-transformations?u=76281980&t=60)** But in general, it's common for transformations to address missing or incorrect data, fix formatting, perform aggregations, derive new columns from existing columns, derive new views or tables from raw data, and much more.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-are-data-transformations?u=76281980&t=75)** And there are various ways of performing these data transformations in Snowflake.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-are-data-transformations?u=76281980&t=79)** The two most common methods are to use SQL or Snowpark to write and perform the transformations.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-are-data-transformations?u=76281980&t=85)** We'll cover both in this module.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-are-data-transformations?u=76281980&t=87)** It's also common to write functions and logic that can be invoked to aid with transformations at scale, like user-defined functions and stored procedures, which we'll also cover in this module.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-are-data-transformations?u=76281980&t=98)** And finally, we'll also cover how to use streams for efficient transformations and how to use features like dynamic tables for automatic transformations.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-are-data-transformations?u=76281980&t=107)** But beyond the individual transformation features, let's keep in mind what we're trying to accomplish.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-are-data-transformations?u=76281980&t=113)** We're learning to build data pipelines that can take raw data and deliver an insight.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-are-data-transformations?u=76281980&t=118)** To get to those insights, the raw data needs to be transformed.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-are-data-transformations?u=76281980&t=121)** These transformations are crucial for delivering an insight and building a pipeline that can help meet a specific goal or objective.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-are-data-transformations?u=76281980&t=130)** With that, let's start building a data pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (14), [[Snowflake]] (1), [[SQL]] (1)
> **Env Vars:** sql (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** you'll need (1)

#### Data transformations with SQL
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=0)** We're going to be building a pipeline that tracks anomalous sales data and daily sales metrics for specific cities where Tasty Byte operates.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=8)** You've already loaded all of the raw data into your Snowflake account necessary to do this.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=12)** If you haven't, ensure you complete the corresponding reading in the previous module.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=17)** With the raw data now in Snowflake, we can begin transforming it.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=20)** In this video, you'll learn how to use SQL to perform those transformations.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=24)** Before getting into the details, let's go over a couple of things.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=28)** First, this isn't a SQL course, so I won't focus on teaching you SQL syntax, but you also don't need to be a SQL expert to follow along.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=36)** What I'd like for you to focus on is how and where transformations might be performed.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=40)** You can always look up SQL syntax independently.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=43)** Second, this isn't a data modeling course.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=45)** We won't cover the theory behind how to structure or model your data.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=49)** The goal is simply for you to learn just enough to confidently perform transformations and then do them on your own in your pipelines.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=57)** Finally, Snowflake supports the common standardized version of ANSI SQL, but Snowflake also has its own SQL dialect with slight variations that are extremely handy.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=67)** This is mostly a heads-up in case you ever come across SQL and Snowflake that might look different from SQL that you might be used to.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=74)** All right.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=75)** Let's get started with some transformations.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=77)** It's a good time to pause the video and make sure you're logged into your Snowflake account.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=80)** We've learned from sales analysts on the Tasty Bytes team that sales in the city of Hamburg, Germany, mysteriously dropped to zero for nearly the whole month of February.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=89)** We've been tasked with wrangling the data and figuring out what may have happened.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=94)** Let's use the raw data we've loaded and perform some transformations to pinpoint the exact cause.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=100)** Start by creating a new SQL worksheet in your Snowflake account.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=106)** Next, open the hamburg_sales.sql file in the module-3 folder of the repo.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=113)** Copy the contents of the file and paste them into the SQL worksheet you just created.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=118)** Don't run the file just yet.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=121)** Let's set our context by running only the first three lines of code.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=126)** Okay. Great.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=127)** Let's start performing transformations to figure out the root cause that affected sales.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=131)** Let's figure out the exact dates in February when sales dropped to zero in Hamburg.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=136)** This first block of SQL will help us figure this out.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=139)** Let's go ahead and run it.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=142)** Okay. It looks like sales were zero for February 1 through February 24.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=147)** Naturally, the next question is why?
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=149)** Could weather have impacted sales?
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=151)** Let's keep digging.
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=153)** To start, we'll create a view that adds weather data to the cities where Tasty Bytes operates.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=158)** The weather data is pulled from the marketplace weather dataset that you loaded earlier.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=163)** Run the second block of SQL, which creates a view called daily_weather_v in the harmonized schema.
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=170)** Excellent.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=171)** Let's dig some more.
>
> **[2:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=173)** I wonder what was the temperature on those days.
>
> **[2:55](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=175)** Could it have been too unbearable to go outside on those days?
>
> **[2:58](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=178)** Maybe that impacted sales.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=180)** The third block of SQL will help us determine this.
>
> **[3:03](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=183)** It'll return the temperature in Hamburg for those specific dates.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=187)** Run this block of SQL.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=194)** The average temperature for Hamburg in February tends to fall between 30 and 40 degrees Fahrenheit.
>
> **[3:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=201)** At first glance, the temperature column doesn't seem to show anything too out of the ordinary.
>
> **[3:25](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=205)** I'll click on Chart here to quickly visualize the results, and yes, pretty standard.
>
> **[3:32](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=212)** Could it have been something else?
>
> **[3:35](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=215)** Let's run the final block of SQL.
>
> **[3:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=217)** This block will return the wind speed on those dates.
>
> **[3:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=227)** Wow. On some of these days, the wind speeds reach nearly 70 miles an hour.
>
> **[3:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=232)** I'll click on Chart once more to quickly visualize the results.
>
> **[3:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=236)** And yes, we see that on average, the wind speed approach either tropical storm or hurricane force winds.
>
> **[4:03](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=243)** I definitely wouldn't go outside in conditions like that, not even on Taco Tuesday. Okay.
>
> **[4:09](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=249)** It seems we might want to keep track of the wind speed in Hamburg.
>
> **[4:12](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=252)** Run the last block of SQL, which will create a view that does this.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=261)** We'll use this view to keep an eye on things and alert our team members in the future.
>
> **[4:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=266)** Great job.
>
> **[4:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=266)** We use SQL to perform some transformations against our data to help pinpoint an issue.
>
> **[4:31](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=271)** We also created a view with valuable insights that we can share later.
>
> **[4:35](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=275)** We work with a couple of datasets and the transformations were relatively straightforward, but in practice, you may be tasked with performing transformations across tens, hundreds, maybe even thousands of tables, and you may be working with several team members to do this.
>
> **[4:50](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=290)** So keep in mind that the types of transformations that you'll perform will depend heavily on your use case.
>
> **[4:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=296)** One final note before we move on to performing transformations in other languages: note that we left our raw data completely untouched.
>
> **[5:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=304)** Instead, we apply transformations and materialize the results into new objects, like our view.
>
> **[5:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=310)** This helps us to reuse the raw data as much as possible without compromising its integrity.
>
> **[5:16](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=316)** In this video, you learned how to perform data transformations against your raw data in SQL, and if SQL isn't your thing, then I'm hoping Python, Java, or Scala might be.
>
> **[5:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-sql?u=76281980&t=326)** And then next lesson, you'll learn how to use Snowpark to perform transformations in these other languages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (21), data (14), [[Snowflake]] (7), next (3), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** sql (20), ansi (1)
> **UI Navigation:** click on (2), open the (1)
> **CLI Commands:** make (1), python (1)
> **Code Identifiers:** hamburg_sales (1), daily_weather_v (1)
> **Warnings:** keep in mind (1), note that (1)
> **File Paths:** hamburg_sales.sql (1)

#### Data transformations with snowpark
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=0)** If you're like me, then SQL might not be your preferred language of choice.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=4)** I personally prefer Python, and I love that with Snowpark, I can use Python to perform my data transformations.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=11)** With Snowpark, you can perform data transformations in Python, Java, or Scala.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=17)** Snowpark allows you to configure the runtimes for these languages, meaning you can perform data transformations with, say, Python 3.9 or 3.10 or whichever version fits your language and use case best.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=30)** Snowpark provides a DataFrame API for processing your data and performing your data transformations.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=36)** The general pattern is that you'll create DataFrames using your data, perform whatever sorts of transformations you need to perform, and usually write those results back to new views or tables.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=48)** If you've used PySpark prior to this or any other data framework with a DataFrame API, your Snowpark experience will feel very similar.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=57)** Finally, if you've ever attempted to perform large-scale data operations using your own computer's memory, then you know that it's almost too easy and also very frustrating to run out of memory to perform those operations.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=69)** This is a common limiting factor in large-scale data analysis using your machine's local computing power.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=76)** But with Snowpark, if you're developing locally, you can push your data transformations down to Snowflake's powerful compute engine.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=84)** This means you never have to worry about running out of memory on your own computer.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=88)** Personally, this is my favorite part about Snowpark.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=91)** When it comes to where you can write and execute Snowpark code, you have options.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=96)** Much of your code could be written in a script or code base that uses your preferred language, that is, Python, Java, or Scala.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=103)** If you're specifically interested in using Snowpark for Python, though, you could also write and run your code directly within the Snowflake Notebook or in VS Code using the Snowflake extension.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=115)** In this video, we'll perform the transformations that we performed earlier using SQL, but this time using Snowpark for Python.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=122)** It's okay that we'll perform the same transformations.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=125)** The point of the exercise is to get you familiar with Snowpark for Python and its DataFrame API.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=130)** Follow along with me to get a feel for using Snowpark for Python.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=133)** Feel free to pause the video now if you need to log in to your Snowflake account.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=138)** Navigate to Projects and click on Notebooks.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=144)** At the top right, click on the dropdown next to the Add Notebook button.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=148)** Click on Import .ipynb file.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=152)** Navigate to the module-3 folder and select the hamburg_sales_snowpark file.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=162)** Name the notebook hamburg_sales_snowpark.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=165)** For database, select TASTY_BYTES, and for schema, select HARMONIZED.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=171)** Leave the warehouse set to COMPUTE_WH. Click Create.
>
> **[3:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=181)** Okay. We're inside of a Snowflake Notebook, which is an incredibly powerful tool for executing SQL, Python, and building data pipelines.
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=190)** We're going to write Snowpark for Python code in this notebook, and as I mentioned before, we'll run through the same transformations we did in the previous video.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=198)** But we'll skip right to creating the view for the wind speed data in Hamburg, Germany, rather than walking through each exploratory query.
>
> **[3:25](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=205)** Again, the point is for you to become familiar with Snowpark for Python and its DataFrame API.
>
> **[3:32](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=212)** Our Snowflake Notebook is going to allow us to run individual cells that will allow us to execute small chunks of the code at a time.
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=219)** This will help us keep our place as we perform the transformations.
>
> **[3:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=223)** Let's start at the top.
>
> **[3:45](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=225)** I'll use the package picker to install Snowpark for Python.
>
> **[3:48](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=228)** I'll search for Snowpark and click on the result. Okay. Great.
>
> **[3:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=233)** Just like that, it's installed.
>
> **[3:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=236)** Next, I'll start by importing the Snowpark functions I want to use and create a Snowpark session.
>
> **[4:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=240)** You can see this code in the start Snowpark session cell.
>
> **[4:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=244)** Click on the play button at the top right.
>
> **[4:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=251)** The get_active_session function within Snowpark makes it easy for me to start a Snowflake session without needing to manually configure a connections file, and just like that, I'm off to the races.
>
> **[4:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=264)** Next, we'll load the daily_weather_v view.
>
> **[4:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=268)** We can call the table function on our session object and pass in the name of the view.
>
> **[4:32](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=272)** Here, I'm passing in the fully qualified name to the view, meaning I'm including the database and schema name in the path to the view.
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=280)** I also create a new object called filtered_weather that filters for the specific city and dates.
>
> **[4:46](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=286)** And here's the beauty of the DataFrame API.
>
> **[4:49](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=289)** I'm calling the filter function, and I'm passing the filter criteria in a pretty straightforward way. Okay.
>
> **[4:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=296)** Let's run the cell.
>
> **[4:59](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=299)** Now we can move to aggregations and sorting in the next cell.
>
> **[5:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=304)** In this cell, the DataFrame API allows me to easily group by multiple columns, in this case, the country name, city name, and dates.
>
> **[5:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=313)** And I create aggregations by selecting the max wind speed measurement for these dates, and I name the resulting column max_wind_speed_100m_mph using the alias function.
>
> **[5:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=324)** I then sort these results by date and save that to a DataFrame object called sorted_weather.
>
> **[5:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=329)** Run the cell.
>
> **[5:35](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=335)** I can take a look at sorted_weather by calling the show function on it.
>
> **[5:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=339)** I also pass in 30 as an argument, meaning I want to look at 30 rows in the DataFrame.
>
> **[5:45](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=345)** Run the cell, and nice.
>
> **[5:50](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=350)** I can see the exact view that we created earlier using SQL but in DataFrame format.
>
> **[5:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=354)** Let's create a view from these results and run the final sale.
>
> **[6:02](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=362)** This will call the create_or_replace_view function on sorted_weather and accept the name for the view. I'll name the view windspeed_hamburg_snowpark.
>
> **[6:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=370)** You can see it was successfully created, and you can refresh on the left-hand side as a quick sanity check.
>
> **[6:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=384)** There it is. Great job.
>
> **[6:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=386)** In this video, you learned quite a few things about Snowpark. Let's quickly recap them. First, you learned what Snowpark is and the type of flexibility and power that it can bring to your data transformations with its DataFrame API.
>
> **[6:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=400)** You learned how to use a Snowflake Notebook to perform the transformations.
>
> **[6:44](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=404)** You also learned how to start a Snowpark session, how to load data into a DataFrame, how to perform transformations on DataFrame objects, and how to save results to a view.
>
> **[6:55](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-with-snowpark?u=76281980&t=415)** Coming up, you'll learn how to scale your transformations with reusable code in user-defined functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (14), [[Python (Programming Language)|Python]] (13), [[Snowflake]] (8), api (7), [[SQL]] (4)
> **Env Vars:** api (7), sql (4), tasty_bytes (1), harmonized (1), compute_wh (1)
> **CLI Commands:** python (13)
> **Code Identifiers:** sorted_weather (3), hamburg_sales_snowpark (2), get_active_session (1), daily_weather_v (1), filtered_weather (1)
> **UI Navigation:** click on (5), navigate to (2), dropdown (1), select the (1)
> **Cross-References:** previous video (1), in the next (1), coming up (1)
> **Prerequisites:** configure (2), install (1)
> **Versions:** python 3 (1), 3.10 (1)

#### Computations with user-defined functions
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=0)** Naturally, it's not very scalable to perform data transformations manually every single time.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=5)** And as I mentioned earlier, there's a good chance that in practice, you'll work with a very large number of tables, so it's a lot more practical to find ways to capture logic in reusable chunks of code.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=17)** This approach makes it easy to manage chunks of logic in a centralized fashion, meaning you can ensure consistency in the pipelines that you build.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=25)** One way of doing this is with user-defined functions, also known as UDFs.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=31)** With a user-defined function, you can write your own custom logic and reuse it over and over in your queries and data transformations.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=38)** Typically, UDFs are used to capture logic that perform a specific computation.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=43)** Say I need to perform a calculation that returns a value given some inputs.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=48)** Or if I need to format a value like a telephone number in a certain way, for example, a user-defined function would be the perfect Snowflake primitive to capture that logic so that I can reliably reuse it throughout my data transformations.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=61)** And if I ever need to update the logic, I can easily update it in one place versus several different places.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=68)** Here are the main things to know about user-defined functions.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=72)** You can write UDFs in one of many supported languages, including SQL, JavaScript, Python, Java, and Scala.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=80)** UDFs are typically intended to return a single value.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=84)** This makes them really useful for performing very specific tasks in your transformation logic, like formatting a raw date/time value, doing some math using some inputs, and much more.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=96)** For more complex logic, you would consider a stored procedure, which I'll cover in the next video.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=101)** The common pattern for writing a user-defined function is to first define the function and its associated logic.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=108)** And then, once created, invoke the UDF during transformations or other data processing.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=114)** Let's get hands-on and put these concepts to use.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=117)** It's a good time now to pause the video to make sure you're logged into your Snowflake account. Okay. So we know Hamburg, Germany, can be prone to some pretty intense wind forces, and we've created a view to track that.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=128)** But let's expand the view that we've created to also track temperature and precipitation data.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=133)** Currently, temperatures are recorded in Fahrenheit, and precipitation is tracked in inches.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=138)** Let's create some UDFs that will help us add columns to our view for tracking temperature in Celsius and precipitation in millimeters.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=145)** We are tracking weather for a country in Europe, after all.
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=149)** Open the UDF temp length SQL file in the repo, copy its contents, and paste them into a new SQL worksheet. Don't run the file just yet.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=161)** Let's take a look at what we have.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=164)** We have two UDFs, the first converts Fahrenheit values to Celsius.
>
> **[2:49](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=169)** I create the UDF by specifying the function keyword, the schema where it will live, and the name of the function.
>
> **[2:58](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=178)** I also specify that the function will accept an argument of type number and also return a value of type number.
>
> **[3:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=186)** If we were going to write the logic in another language, like Python, for example, this is where you would make the corresponding changes along with setting some other parameters.
>
> **[3:15](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=195)** The Snowflake documentation has a lot of great detail on this in case you're interested.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=200)** We'll write our logic in SQL. Okay.
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=202)** The magic happens right here after the AS keyword.
>
> **[3:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=206)** The AS keyword points to the definition of the UDF, and the two sets of dollar signs act as opening and closing delimiters.
>
> **[3:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=214)** And the entirety of the function's logic should be encapsulated between these two sets of delimiters.
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=219)** The UDF below does something similar but converts inches to millimeters, of course.
>
> **[3:45](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=225)** Let's run all of the SQL.
>
> **[3:50](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=230)** You can refresh on the left to see that they were indeed created. Okay.
>
> **[3:55](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=235)** So we haven't invoked the UDFs.
>
> **[3:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=237)** We've simply defined them.
>
> **[3:59](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=239)** To use them, we have to invoke them in our SQL.
>
> **[4:02](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=242)** So let's go ahead and use these UDFs to expand our existing view that tracks Hamburg.
>
> **[4:07](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=247)** Navigate to the hamburg_sales_expanded.sql file and copy its contents.
>
> **[4:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=253)** Paste them into a new SQL worksheet. Don't run the file just yet.
>
> **[4:18](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=258)** The first main block of SQL returns the wind speeds for the city of Hamburg, but it also returns some new columns.
>
> **[4:25](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=265)** We now return temperature in Fahrenheit and precipitation in inches.
>
> **[4:30](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=270)** We apply our UDFs to return temperatures in Celsius and precipitation in millimeters.
>
> **[4:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=276)** Highlight and run the SQL that sets your context and then execute this first large block of SQL.
>
> **[5:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=300)** Okay. Let's browse results. And there you have it.
>
> **[5:05](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=305)** This view contains a lot more data about the weather in Hamburg on the days where no sales were recorded.
>
> **[5:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=311)** Let's create a new view from this by adding the following at the top of the first SQL block: CREATE OR REPLACE VIEW harmonized_weather_hamburg AS. Run only this block of SQL again, and note on the left that we have a new view.
>
> **[5:35](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=335)** Okay. Great. But let's go one step further.
>
> **[5:38](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=338)** We now have the logic necessary to track this weather data for all cities in our Tasty Byte dataset.
>
> **[5:45](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=345)** In fact, let's use this logic to create a new view that will allow analysts on the team to quickly answer weather-related questions about any city.
>
> **[5:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=354)** For example, they could use a view to answer questions like "What cities in the United States have had sales on days with temperatures below freezing?' Having this view would allow them to quickly discover insights without needing to ping the data teams for new pipelines or views.
>
> **[6:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=371)** Run the last block of SQL and note that the view was created on the left in the analytics schema.
>
> **[6:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=383)** In just a few lines of code, you created two UDFs in SQL and used them to derive new columns based on existing columns.
>
> **[6:31](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=391)** By capturing logic in a UDF, you can reliably reuse it throughout the transformations you use to build your pipeline and easily manage it from a centralized place, the UDF definition.
>
> **[6:41](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=401)** And, of course, you could imagine having several different UDFs, all likely tailored to do something different and then invoking them as needed throughout your data transformations. Let's recap what you learned.
>
> **[6:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=414)** You learned what a user-defined function is and what they're typically used for.
>
> **[6:58](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=418)** You learned how to define a UDF in SQL and how to invoke them.
>
> **[7:03](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/computations-with-user-defined-functions?u=76281980&t=423)** In the next video, we'll talk about how to process changes to data in an incremental fashion using streams.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (16), data (10), [[Snowflake]] (3), [[Python (Programming Language)|Python]] (2), next (2)
> **Env Vars:** sql (15), udf (8), create (1), replace (1), view (1)
> **CLI Commands:** python (2), make (2), find (1)
> **Analogies:** for example (3), imagine (1)
> **Code Identifiers:** hamburg_sales_expanded (1), harmonized_weather_hamburg (1)
> **Cross-References:** in the next (2)
> **UI Navigation:** open the (1), navigate to (1)
> **File Paths:** hamburg_sales_expanded.sql (1)

#### Efficient transformations with streams
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=0)** So far, you've learned how to perform transformations against your data using some of Snowflake's core features: SQL, Snowpark, and UDFs.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=9)** You'll run into these concepts and features over and over again, and it's good to have a baseline knowledge of them as you learn more about building data pipelines.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=18)** In this video, we'll level things up a bit and start focusing on efficient transformations.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=23)** If you've noticed in all of the exercises that we've completed on transformation so far, we've performed our transformations and calculations against entire sets of data.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=33)** Every time we wanted to modify our views, like daily_city_metrics_v, for example, we reprocessed every single row in that view to do so.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=42)** But what if we could focus on only processing rows with changes rather than all of the rows within a table or view? That would be far more efficient.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=52)** For example, let's say you have a table with 20 million rows.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=56)** You need to calculate an aggregate value, like a sum, using a column in that table, and you need to recalculate this value daily because new data is added to this table every day.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=67)** If, say, only 1,000 rows are added to the table overnight, do you really need to reprocess the other 20 million rows to perform your aggregate calculation?
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=77)** Thankfully, no, and this is where streams come in.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=81)** So what are streams?
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=82)** Streams are objects in Snowflake that are able to keep precise track of all of the changes that have been made to a table.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=89)** They can actually keep track of changes to views, too, but we're going to focus on how they're used with tables in this video.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=96)** If you've created a stream to track a table, you can query the stream to view the latest changes made to that table.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=103)** After querying the stream, it essentially resets and starts recording subsequent changes from that point forward. So every time you check in on a stream to see what's changed on an underlying table, the results you'll see will reflect the changes that have occurred between your current query against that stream and the prior query that you made against that stream.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=123)** I think streams are best illustrated with an example.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=127)** Consider a table called subscribers.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=129)** Upon creation, the table has 100 rows inserted to it, with each row representing a subscriber to an online service, for example.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=137)** Let's say we're interested in tracking changes to this table.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=140)** We can use a stream for this.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=142)** We create a stream and instruct it to listen to or keep track of all future changes to the subscribers' table. Now let's say that every night, we run a process that modifies the subscribers' table.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=154)** Let's imagine we have a really popular online service that is getting new subscribers every day.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=160)** This process that we run takes care of adding those new subscribers to the table. Let's imagine that one night, 42 new rows are added to the table, bringing the total to 142 total rows in the table.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=174)** If I were to query the stream that we created that's keeping track of the changes to the subscribers' table, the result would return the 42 rows, and I'd know from the query results that these were new inserts to the table.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=187)** If I were to query the stream again later in the day after already having queried and learned about the 42 new rows, and it turned out that no new rows were added since that last query to the stream, then the query results would return "No new information."
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=202)** In effect, I've already used my query to view the most recent changes, and the stream is now tracking subsequent changes beyond the 42 rows.
>
> **[3:31](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=211)** Pretty cool, right?
>
> **[3:32](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=212)** This makes streams great for processing incremental changes to tables and making transformations more efficient.
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=219)** You can see how you might start extending this behavior for more complex transformations.
>
> **[3:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=223)** For example, rather than perform an aggregation by reprocessing an entire table when new data is added to it, you could perform the same aggregations by processing only the new rows and then combine that value with whatever previously aggregated value was calculated for the table.
>
> **[4:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=241)** Let's create a stream that will help us make sure our views stay up to date.
>
> **[4:05](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=245)** Now is a good time to pause the video to log into your Snowflake account.
>
> **[4:09](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=249)** We've already created a view that tracks the weather for Hamburg, Germany.
>
> **[4:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=253)** We can use that view to keep an eye on the weather there, but just to be exhaustive, I'd also like to keep an eye on the daily sales there.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=261)** Take a look at the ORDER_HEADER table in the RAW_POS schema.
>
> **[4:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=273)** If you explore this table, you'll note that it contains data about orders.
>
> **[4:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=279)** It also contains a LOCATION_ID column, which can be used to look up the city where the sale occurred.
>
> **[4:45](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=285)** This is perfect for what I'm trying to do.
>
> **[4:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=287)** I'll create a stream on the ORDER_HEADER table and track any new sales that are added to the table.
>
> **[4:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=294)** Later, I'll write logic to determine whether or not that sale occurred in Hamburg.
>
> **[5:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=300)** Okay. Open a new SQL worksheet.
>
> **[5:07](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=307)** Set your context.
>
> **[5:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=313)** Next, type CREATE OR REPLACE STREAM order_header_stream ON TABLE tasty_bytes.raw_pos.order_header;.
>
> **[5:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=334)** Run the file. The stream should be successfully created. Okay. That's it.
>
> **[5:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=339)** The stream is now tracking changes to the ORDER_HEADER table.
>
> **[5:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=343)** If you're not convinced, let's test it out with some dummy data.
>
> **[5:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=347)** Navigate to the order_header_stream.sql file in the module-3 folder.
>
> **[5:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=353)** Copy everything starting at the INSERT INTO statement all the way to the bottom.
>
> **[6:03](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=363)** Paste it into the SQL worksheet.
>
> **[6:07](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=367)** Run only the INSERT statement.
>
> **[6:12](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=372)** Okay. If all went well, I should be able to query the stream directly and confirm the addition of the new row.
>
> **[6:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=380)** Run SELECT * FROM order_header_stream.
>
> **[6:25](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=385)** There it is. That's the row we just inserted.
>
> **[6:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=389)** I want to show you something really important.
>
> **[6:31](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=391)** We have a lot of columns in this table, so it's actually not apparent at first glance.
>
> **[6:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=396)** Scroll all the way to the right in the results pane.
>
> **[6:42](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=402)** Take a look at the last three columns here: METADATA$ACTION, METADATA$ISUPDATE, and METADATA$ROW_ID.
>
> **[6:50](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=410)** These columns provide more information about the changes to the table.
>
> **[6:55](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=415)** For example, METADATA$ACTION lets me know that an insert operation occurred on the table, which is correct.
>
> **[7:02](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=422)** We use an INSERT statement to add our dummy data.
>
> **[7:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=424)** METADATA$ISUPDATE is false because this row wasn't part of an update operation.
>
> **[7:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=431)** Okay. Let's remove the dummy row that we added.
>
> **[7:18](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=438)** Optionally, you can run the final statement in the SQL, but make sure you read the note in the comment to understand why the deleted row won't be returned in the query. Okay. That's it.
>
> **[7:30](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=450)** We'll use a stream to keep an eye on sales in Hamburg, and we'll set up the rest of the logic to do that in the next video.
>
> **[7:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=456)** For now, let's recap what you learned.
>
> **[7:38](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=458)** You learned that streams are objects that keep track of changes to tables or views.
>
> **[7:42](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=462)** Streams can be queried to view these changes, and streams can help you perform efficient transformations by allowing you to process only incremental changes to a table or view.
>
> **[7:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/efficient-transformations-with-streams?u=76281980&t=473)** This gives you a lot of granular and efficient control over your transformations. Coming up, I'll show you how to use stored procedures to build out more complex procedural logic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), [[SQL]] (5), [[Metadata]] (5), [[Snowflake]] (3), next (2)
> **Env Vars:** metadata (5), sql (4), order_header (3), insert (3), action (2)
> **Code Identifiers:** order_header_stream (3), daily_city_metrics_v (1), tasty_bytes (1), raw_pos (1), order_header (1)
> **Analogies:** for example (5), imagine (2)
> **Cross-References:** later in (1), in the next (1), coming up (1)
> **CLI Commands:** make (2)
> **SQL:** insert into (1), select (1)
> **File Paths:** order_header_stream.sql (1)

#### Complex procedural logic with stored procedures
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=0)** Earlier, you used UDFs to perform very specific computations.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=5)** They helped us perform conversions between units of measurement, and they scaled really well when we used them to derive new columns in a view.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=13)** UDFs excel at this, but when you want to go beyond specific computations and perhaps capture and reuse more complex logic, then you might want to consider a stored procedure over a UDF.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=26)** Before getting into the details of stored procedures, I'm sure you might be wondering what exactly constitutes more complex logic.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=34)** Well, the exact specifics will, of course, depend on your use case.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=38)** But generally speaking, store procedures might, for example, execute a series of operations that could include multiple SQL statements, transactional logic, or other complex workflows.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=50)** For example, a stored procedure could be used to process an order, update inventory, generate reports, or maybe execute some other specific critical business logic.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=61)** But the gist is that stored procedures are a set of instructions that typically contain logic that is more complex and broader in scope than a user-defined function.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=70)** Stored procedures can even call previously defined UDFs within them in case you need to leverage a UDF within the logic you're writing in the procedure.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=79)** The pattern for working with stored procedures is similar to the pattern for working with UDFs.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=85)** You define the procedure and write its definition in one of the supported languages: SQL, JavaScript, Python, Java, or Scala.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=94)** You can then call the stored procedure using the CALL syntax and specify the name of the procedure.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=100)** You can also write and call stored procedures directly within Snowflake or in a development environment that supports one of the languages that I mentioned earlier.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=109)** Follow along with me to create a stored procedure that we'll use in our pipeline.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=113)** We'll use it to process a stream that we created previously.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=117)** Now is a good time to pause the video and make sure you're logged into your Snowflake account.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=122)** Navigate to the orders_header_sproc.sql file in the module-3 folder.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=128)** Copy the entire file and paste it into a new SQL worksheet.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=137)** Let's first understand what this stored procedure will do.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=142)** It's going to process the order_header stream that we created earlier that tracks changes to the ORDER_HEADER table. It'll specifically query the stream, determine if any orders occurred in Hamburg, and if so, return the total sales amount for those orders that day.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=158)** It'll also write these results to a new table.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=160)** We want to create this because in addition to monitoring the weather, our analyst teammates now want to keep a fresh eye on the sales there as well.
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=168)** We create the stored procedure using CREATE OR REPLACE procedure and specify a path and a name.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=176)** You'll know that the procedure lives in the raw_pos schema alongside the stream that's also in that schema.
>
> **[3:03](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=183)** We specify a few parameters that are relevant to the stored procedure's definition.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=188)** We specify that it'll return a string value.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=191)** We'll specifically return a success message to signal that the stored procedure executed successfully.
>
> **[3:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=197)** We're going to use Snowpark for Python to write the logic, so we know that the language isn't Python.
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=202)** We specify a Python runtime, in this case, 3:10.
>
> **[3:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=206)** We then specify the handler, and this is just a reference to the function containing a logic which you can quickly see down here.
>
> **[3:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=213)** And finally, we'll specify any Python package that we'll need in our logic.
>
> **[3:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=217)** We're using Snowpark for Python, so we'll indicate here Snowflake-Snowpark-Python.
>
> **[3:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=223)** Just like UDFs, the magic is in between these dollar sign delimiters.
>
> **[3:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=227)** This is where we can write all of our Python code.
>
> **[3:50](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=230)** Our logic is mostly in the process order-header stream function.
>
> **[3:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=234)** We do a few main things in this function.
>
> **[3:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=236)** We query the stream and look at all new inserts that were recorded against the ORDER_HEADER table.
>
> **[4:02](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=242)** We then look up whether any of the new orders occurred in the city of Hamburg, and we do this by looking up the location of the order using location ID.
>
> **[4:12](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=252)** If there were sales recorded, we sum the sales and then write the total sales for that day to a new table.
>
> **[4:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=259)** Okay. Run the SQL statements that set your context and then run the block of SQL that creates the stored procedure.
>
> **[4:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=273)** Now let's test out our stored procedure.
>
> **[4:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=276)** Let's insert some dummy order data for a location in Hamburg.
>
> **[4:41](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=281)** Run the INSERT INTO statement.
>
> **[4:46](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=286)** Next, run the SELECT statement to verify the INSERT.
>
> **[4:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=292)** All right. There it is.
>
> **[4:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=293)** Finally, call the stored procedure.
>
> **[4:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=296)** You can see the syntax for this here.
>
> **[4:59](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=299)** Let's go ahead and run the last line of SQL, and there it is, 45, 80.
>
> **[5:05](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=305)** And we know this value is correct because it matches the value in the dummy data that we inserted.
>
> **[5:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=311)** Super cool.
>
> **[5:14](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=314)** To take this even further, you could imagine us automating this stored procedure to execute, say, every 24 hours.
>
> **[5:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=321)** This way, we could keep track of daily sales in Hamburg easily.
>
> **[5:25](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=325)** We haven't learned about this type of automation yet, but we will in an upcoming module.
>
> **[5:30](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=330)** Stored procedures are incredibly powerful.
>
> **[5:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=333)** They make it easy to take large swaths of logic, place them in a centralized location, and then reuse them as needed.
>
> **[5:41](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=341)** It's incredibly common to use them to perform aggregations, to update records, perform complex procedural logic, and more.
>
> **[5:49](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=349)** I mentioned this briefly earlier, but stored procedures become even more powerful when you start automating them.
>
> **[5:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=356)** We'll learn about that sort of automation in an upcoming module.
>
> **[6:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=360)** For now, let's recap what you learned.
>
> **[6:02](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=362)** You learned that stored procedures are used to store and define complex logic that can be easily reused at scale.
>
> **[6:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=370)** You learned that stored procedures can be written in one of several supported languages, and you learned that you can call stored procedures using the CALL syntax.
>
> **[6:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/complex-procedural-logic-with-stored-procedures?u=76281980&t=380)** Up next, let's take a look at how to process data even faster with dynamic tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (8), [[SQL]] (7), [[Snowflake]] (3), data (3), next (2)
> **Env Vars:** sql (6), udf (2), call (2), order_header (2), insert (2)
> **CLI Commands:** python (8), make (2)
> **Analogies:** for example (2), just like (1), imagine (1)
> **Code Identifiers:** orders_header_sproc (1), order_header (1), raw_pos (1)
> **SQL:** insert into (1), select (1)
> **File Paths:** orders_header_sproc.sql (1)
> **Ports:** :10 (1)

#### Automatic transformations with dynamic tables
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=0)** Earlier, we covered streams, and you learned that streams give you an incredible amount of control over your data transformations.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=8)** With streams, you can focus on processing incremental changes to an underlying table, but you can go even further by focusing on specific types of changes, too.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=17)** For example, if you wanted to focus on processing only delete operations against an underlying table, you could do that with a stream, but even with this fine-tuned control, you'll still need to make choices around what you'll do with the data tracked by the stream.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=32)** And if you have a lot of streams coupled with automation, this can get complex pretty quickly. Depending on what you're trying to do, a dynamic table might be a better option for you.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=43)** A dynamic table in Snowflake is a special type of table that automatically updates itself with the latest data using a predefined query.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=51)** This helps ensure that the table always reflects the most current information from its source tables.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=56)** Unlike a stream, you don't need to write any additional logic to process the changes or types of changes to the underlying table.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=63)** You can mostly just set up the dynamic table and move along, meaning you can get to a desired end state with your data really fast.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=71)** It's also really easy to configure the freshness for a dynamic table.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=74)** In one line of code, you can specify how often the dynamic table should be refreshed.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=79)** For example, you could set the refresh rate for the dynamic table to immediate, which means that the table would update as soon as changes to the base tables are made.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=87)** Or you could set it to, say, every 24 hours because perhaps you want to aggregate some information over a 24-hour period.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=95)** It's up to you.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=96)** This flexibility is intended to help you meet your use case easily without the overhead of managing scheduled operations.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=104)** Let's create a dynamic table together so that you can get a feel for the pattern.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=108)** In the previous video, we created a stored procedure that processed the order_header_stream.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=114)** The stored procedure identifies whether any recent sales occurred in Hamburg, and if they did, aggregates the total amount of sales for that day and writes it to a table.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=124)** The natural next step would be to automate that entire process, which we'll do in the next module.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=130)** In this video, we'll create a dynamic table that does the exact same thing.
>
> **[2:15](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=135)** Now you might be wondering why.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=137)** Let me explain.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=139)** Well, we're not really doing anything super complex with our stream.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=143)** We're not processing any delete or update operations on the ORDER_HEADER table.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=148)** We're only processing insert operations to keep track of new orders.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=152)** So although we can certainly keep the stream, and we will, it might be possible to simplify our architecture with the dynamic table.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=160)** Second, the stored procedure writes the aggregated sales amount to a table.
>
> **[2:46](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=166)** With the dynamic table, we're able to immediately specify where this data should be stored so we can save a step here.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=172)** And finally, dynamic tables make it easy to specify freshness.
>
> **[2:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=177)** In one line of code, I'll specify that our table should update once every day.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=182)** We haven't learned about tasks for automation yet, but with this dynamic table, we could likely replace our combination of streams, stored procedures, and tasks.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=192)** Also, you should know how to implement both approaches.
>
> **[3:16](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=196)** This way, you can decide which is best for your use case.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=200)** In fact, we'll dive a little into the pros and cons of each towards the end.
>
> **[3:25](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=205)** Okay. Let's create our dynamic table.
>
> **[3:27](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=207)** Now's a good time to pause the video if you need to log into your Snowflake account.
>
> **[3:32](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=212)** Navigate to the hamburg_sales_dynamic_table.sql file in the module-3 folder.
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=218)** Copy its contents and paste them into a new SQL worksheet.
>
> **[3:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=227)** Run only the statements that set your context.
>
> **[3:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=232)** Okay. Let's now take a look at our dynamic tables definition.
>
> **[3:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=237)** There are four main things to look at here.
>
> **[4:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=240)** We use CREATE OR REPLACE DYNAMIC TABLE to create the table.
>
> **[4:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=244)** We specify the warehouse that should be used when populating the table.
>
> **[4:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=248)** We set a target lag, which indicates how often this table should refresh.
>
> **[4:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=253)** It's currently blank, but we'll set it shortly.
>
> **[4:15](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=255)** And finally, we specify the query that should be used to populate the table.
>
> **[4:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=260)** This is the same query from the stored procedure, only in SQL, of course.
>
> **[4:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=264)** For the purposes of this exercise, let's set the target lag to one minute.
>
> **[4:30](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=270)** Now run the block of code that creates a dynamic table.
>
> **[4:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=274)** Okay. Great.
>
> **[4:35](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=275)** It's been created.
>
> **[4:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=276)** Let's take a look at what's inside.
>
> **[4:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=279)** Run the next line of SQL that queries the dynamic table.
>
> **[4:42](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=282)** Oh, look, there's the dummy data that we inserted earlier.
>
> **[4:46](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=286)** That was fast.
>
> **[4:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=287)** If you deleted that dummy data, you won't see anything in the table.
>
> **[4:51](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=291)** Let's insert more dummy data. Run the INSERT INTO command.
>
> **[4:55](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=295)** The only thing that we change in this dummy row is the date and sales amount.
>
> **[5:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=300)** Everything else is the same, and that's fine.
>
> **[5:03](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=303)** Now let's create the table again.
>
> **[5:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=308)** No changes yet. All right.
>
> **[5:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=310)** That's because we set the refresh rate to a minimum of one minute.
>
> **[5:14](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=314)** You could always set it to immediate, but I want to show off a non-immediate refresh rate in action.
>
> **[5:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=319)** Okay. Let's wait.
>
> **[5:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=323)** Now let's create again by running the same line of SQL.
>
> **[5:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=329)** There it is. A new sale for a new date.
>
> **[5:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=333)** Let's test out our table once more.
>
> **[5:35](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=335)** In the INSERT INTO statement, modify the ORDER_AMOUNT and ORDER_TOTAL field.
>
> **[5:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=340)** You can set them to be anything. Leave everything else the same.
>
> **[5:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=354)** Run the INSERT INTO command.
>
> **[5:58](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=358)** Okay. Now we have two sales for our date of March 9, 2024.
>
> **[6:05](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=365)** Give it a minute and then query the dynamic table once more.
>
> **[6:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=370)** Okay. No new rows, but we do see an updated total sales value for the date of March 9, 2024.
>
> **[6:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=377)** That makes sense since we're aggregating the total sales amount by date.
>
> **[6:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=381)** How cool is that?
>
> **[6:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=383)** By now, you've learned how to process incremental changes to data with streams and stored procedures.
>
> **[6:30](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=390)** You've also learned how to use dynamic tables for automatic processing of changes to underlying data.
>
> **[6:35](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=395)** Each approach has its own benefits and trade-offs, and it's important that you learn how to implement both.
>
> **[6:41](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=401)** The approach that you'll use for your data pipelines will, of course, depend on your use case.
>
> **[6:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=407)** In practice, chances are that you'll have source tables with raw data being updated on a continuous basis, likely due to an automated process somewhere.
>
> **[6:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=417)** If you need the fine-grained tracking that streams provide because your pipeline might perform complex logic based on those details, then streams are a great choice.
>
> **[7:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=426)** Combining them with stored procedures and tasks powers them up even more by extending what you can do in your procedural logic and giving you more control over the refresh schedule.
>
> **[7:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=437)** But maybe your pipeline doesn't need any of that.
>
> **[7:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=440)** Maybe your base tables aren't likely to evolve significantly, meaning that overall, they're relatively stable, and maybe all you're interested in is specifying the target data freshness for your pipelines.
>
> **[7:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=453)** In a scenario like this, dynamic tables are a great way of automating your transformations without the overhead of managing streams or tasks, which, again, we'll cover shortly.
>
> **[7:44](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=464)** Okay. Let's recap what you learned.
>
> **[7:46](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automatic-transformations-with-dynamic-tables?u=76281980&t=466)** You learned what a dynamic table is, what problems they help solve, how to define and use a dynamic table, and how to think about benefits and trade-offs when evaluating streams against dynamic tables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (13), [[SQL]] (5), next (3), [[Automation]] (2), [[Snowflake]] (2)
> **Env Vars:** sql (4), insert (3), into (3), order_header (1), create (1)
> **SQL:** insert into (3)
> **Cross-References:** we covered (1), previous video (1), in the next (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** order_header_stream (1), hamburg_sales_dynamic_table (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** for example (2)

#### Data transformations in visual studio code (optional)
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=0)** Just a quick heads up. This is an optional video.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=4)** Feel free to skip this video if you don't use Visual Studio Code.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=7)** If you do use VS Code as your preferred development environment or if you have other tools or extensions that you frequently use as part of this development environment, then the Snowflake extension for Visual Studio Code might be a good fit for you.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=21)** With the extension, you can execute SQL and Python against your Snowflake environment directly from VS Code, and it's pretty easy to do.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=29)** Follow along with me, and I'll show you how to use it.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=32)** In an earlier video, we installed the Snowflake extension for VS Code, so we can dive right in.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=37)** If you have not yet installed the extension and you're interested in following along, you can pause the video and install it by following the instructions in the corresponding video in the first module.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=48)** Click on the Snowflake icon in your VS Code toolbar.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=51)** This will open up a sidebar with fields to log into your account.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=55)** There are a few different ways to log in.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=57)** You're familiar with the Snowflake CLI, so you could use the option here to use your credentials within your config file to log in, but I'm going to log in using the account URL.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=67)** Navigate to Snowsight.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=69)** Hover over your account information at the bottom.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=73)** If you hover over your account details, you'll encounter this button that allows you to copy your account URL to the clipboard.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=80)** Click on that.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=81)** Navigate back to VS Code and the account identifier slash URL form paste in what you just copied.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=89)** The extension will parse it and prompt you to log in with your credentials.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=93)** Type your credentials and log in.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=97)** Great. Now you're logged in.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=99)** We won't be doing anything brand new for our pipeline here.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=102)** The point of this exercise is to get you familiar with this environment.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=106)** We'll perform the same transformations we performed when creating the wind speed Hamburg view.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=111)** Within the extension, we get a roughly similar layout to Snowsight with object explorer and query history panes.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=119)** Open the hamburg_sales_vs_code.sql file.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=125)** It contains a code to create the wind speed Hamburg view.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=129)** At the top of the file, you'll see a play button, kind of like what you see in Snowsight.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=134)** Clicking on this will execute the entire file.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=137)** You should see this button for any SQL file you open.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=141)** Clicking it will execute the file against your Snowflake environment.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=145)** If you want to execute just the block of SQL, you could click on the Execute word right above the block that you want to run.
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=153)** Execute the first three lines of code that set your context.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=161)** You'll note the pane at the bottom shows the results.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=164)** Now execute the first block of SQL.
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=170)** Just like Snowsight, you'll see the results at the bottom.
>
> **[2:55](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=175)** Play around and execute the other blocks of SQL if you'd like.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=180)** I'll execute the entire file now.
>
> **[3:03](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=183)** I've appended _vs_code to the end of the view names just so that we can distinguish them in Snowsight.
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=193)** I'll execute the entire file now.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=198)** Okay. Great. It was successful as expected.
>
> **[3:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=201)** You can see the query history pane update, and you can browse the object explorer to find the view.
>
> **[3:27](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=207)** I'll click on it, and you'll see the definition below.
>
> **[3:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=220)** Now let's navigate back to Snowsight to confirm creation of the view.
>
> **[3:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=236)** And yes, there it is.
>
> **[3:58](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=238)** Okay. Great.
>
> **[4:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=240)** You've learned how to log into your Snowflake account using a Snowflake extension for VS Code.
>
> **[4:05](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=245)** You've also learned how to execute SQL code directly from the code editor.
>
> **[4:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=248)** Why is this important?
>
> **[4:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=250)** Again, if VS Code is your preferred development environment, this is a great tool to leverage.
>
> **[4:16](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=256)** It's also great in case you're using other tools and extensions with VS Code that aid in the building of data pipelines.
>
> **[4:22](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-transformations-in-visual-studio-code-optional?u=76281980&t=262)** I encourage you to explore the extension in more detail and see what kinds of cool things you can discover within.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (8), [[SQL]] (7), [[Python (Programming Language)|Python]] (1), [[CLI]] (1), prompt (1)
> **Env Vars:** sql (6), url (3), cli (1)
> **Tools:** vs code (8), visual studio (2)
> **UI Navigation:** click on (4), navigate to (1), open the (1)
> **CLI Commands:** python (1), find (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** kind of like (1), just like (1)
> **File Paths:** hamburg_sales_vs_code.sql (1)

#### Recap and best practices for data transformations
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-data-transformations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-data-transformations?u=76281980&t=0)** We covered a lot of ground in this data transformations module and did a lot of leveling up.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-data-transformations?u=76281980&t=5)** Let's quickly recap what you learned.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-data-transformations?u=76281980&t=8)** We covered the core languages and libraries for performing data transformations: SQL and Snowpark.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-data-transformations?u=76281980&t=15)** We specifically covered Snowpark for Python, but you also learned that you can write Java and Scala with Snowpark as well.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-data-transformations?u=76281980&t=23)** We went from using these core languages to using objects that make capturing and reusing logic in our transformations easy: user-defined functions for things like calculations and stored procedures for more complex procedural logic.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-data-transformations?u=76281980&t=37)** We took it even further.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-data-transformations?u=76281980&t=39)** We saw how streams give fine-grain control over changes to an underlying table and how they can be used for incremental data processing.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-data-transformations?u=76281980&t=48)** And we also saw how to accelerate transformations with dynamic tables, which allow you to set the desired end state of a table by associating transformation logic and a refresh rate for the transformations.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-data-transformations?u=76281980&t=61)** And last but not least, you learned how to write all of this code in either Snowflake worksheets, Snowflake Notebooks, or Snowflake's VS Code extension.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-data-transformations?u=76281980&t=70)** All of these things will make you dangerously good at performing transformations against raw data, which means that you're that much closer to building pipelines that not only ingest and transform but also deliver value through a data product.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-data-transformations?u=76281980&t=84)** So how exactly can you go about delivering this value?
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-data-transformations?u=76281980&t=88)** Join me in the next module to learn more about data delivery with Snowflake.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (6), [[Snowflake]] (4), [[SQL]] (1), [[Python (Programming Language)|Python]] (1), [[Java]] (1)
> **CLI Commands:** make (2), python (1)
> **Cross-References:** we covered (2), in the next (1)
> **Env Vars:** sql (1)
> **Tools:** vs code (1)
> **Definitions:** means that (1)


### 4. Delivering data products with Snowflake

[↑ Back to Table of Contents](#table-of-contents)

#### Delivery of data products
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980)

> [!transcript]- Transcript
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=11)** There's so much that is possible with clean, transformed data produced by a strong pipeline.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=17)** Things like well-trained machine learning models, applications that present critical data to end users, datasets that enrich other use cases, and much more.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=26)** In short, with ready-to-use transform data, we're at the stage of being able to deliver value and insights to consumers and other systems.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=35)** And in this module, we'll dive into how to do this by exploring the third phase of our data engineering framework: delivery.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=42)** What exactly do we mean by delivery?
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=45)** Before we get into the details, let's step back a little and contextualize everything that you've learned.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=51)** You're learning to build data pipelines.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=53)** If we oversimplify things for just a bit, we know that given an input, a data pipeline should produce an output.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=60)** More tactically, the pipelines that you're building will take in raw data as an input, perform transformations against that data, and output or deliver something of value.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=72)** For example, common use cases for data pipelines include feeding dashboards with important data that will be used by other teams, like teams of, say, analysts or product managers, or serving data to web applications.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=85)** Perhaps there are datasets that are important to surface to an end user within an app for the purposes of taking action or making a decision or creating and delivering enterprise-grade datasets used for training machine learning models and performing imprints or feeding data into other data systems.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=103)** Maybe your pipeline is just one part of the journey, and its output must be fed into another data system or pipeline for some broader purpose.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=112)** These are just a few examples, and your use case will vary, of course.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=116)** In any case, many times, pipelines are delivering or are helping to deliver a high-quality, highly polished data product to be used for a specific use case, and that's what we mean by delivery of data products.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=130)** And here's another important note.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=132)** Earlier, I mentioned that we've arrived at the third phase of our framework.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=136)** I didn't say final, and that's intentional.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=140)** This is because although delivering a data product is an outcome, it isn't necessarily the final thing that you'll do with a pipeline.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=147)** In fact, there's a good chance that you'll continue to maintain a pipeline throughout its lifetime for the simple reason that, well, things change.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=155)** Things like the source data.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=157)** The data structure might evolve in some new way that impacts your logic, and you may need to update your ingestion and/or transformation logic to account for that.
>
> **[2:46](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=166)** There may be new data sources.
>
> **[2:49](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=169)** More data could be introduced from new sources that may need to be combined with existing data you're ingesting, possibly for enrichment purposes.
>
> **[2:58](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=178)** And last but not least, there could be new pipeline requirements.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=182)** Perhaps new requirements to extract more insights from the data are introduced, so you might need to update existing logic or create new user-defined functions, stored procedures, and more.
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=193)** With that, here are the techniques that we'll cover in this module for delivering data products with Snowflake: data sharing on Snowflake Marketplace, Streamlit in Snowflake, and Snowflake Native Applications.
>
> **[3:25](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/delivery-of-data-products?u=76281980&t=205)** Let's dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (25), [[Snowflake]] (4), product (3), teams (2), [[Microsoft Products|Products]] (2)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Warnings:** important note (1)

#### Data sharing on snowflake marketplace
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=0)** When it comes to data sharing, the data product you're delivering is a dataset or datasets.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=6)** Of course, you can always share the relevant objects like databases and tables in your Snowflake account with fellow teammates in that account.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=14)** But beyond your Snowflake account, you're also able to deliver and share datasets with users and Snowflake's Data Cloud by listing them to Snowflake's Marketplace.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=23)** You can share these datasets by creating a public listing on the Marketplace.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=27)** This allows other users to discover them and load them into their accounts, just like we did at the beginning of the course.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=33)** Only this time, you'd be the provider rather than the consumer.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=37)** And if you don't want to publicly list the dataset on the Marketplace, then you can create a private listing and share datasets with specific consumers.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=45)** If you browse a Snowflake Marketplace, you'll find all sorts of datasets listed on there, some free, some paid, and across all sorts of industries and use cases.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=56)** This ought to give you a good sense of that experience for consumers of datasets.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=60)** Let me quickly demo the flow of publishing a dataset to the Snowflake Marketplace.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=64)** In Snowflake, navigate to Data Products.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=68)** That's aptly name, isn't it?
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=73)** Click on Provider Studio.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=75)** In this studio is where you can create a new listing for a dataset.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=79)** At the top, you see sections for sharing with the broader Marketplace or just specific consumers, and at the bottom, you'll see some more resources you can use to learn more about this flow.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=90)** I can create a new listing by clicking on the button at the top right.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=96)** I'm asked to name the listing. I'll name it HAMBURG_WEATHER.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=103)** I'll need to specify who can discover the listing.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=106)** On the left, you'll see the option for creating a public listing, which will require you to first submit a provider profile, and on the right, you'll see the option for creating a private listing.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=116)** In this demo, I'll walk through the flow for creating a private listing, and that's mostly because I haven't submitted a provider profile, but that's okay.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=124)** The flows are similar enough for you to get the gist of what's going on.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=130)** Next, I'll be asked to select what I want to list.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=133)** For example, I could select one or two or several tables that I might want to share via my listing.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=139)** I'll select the dynamic table that we created earlier.
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=153)** I can edit the identifier or name for this secure data share.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=157)** I'll leave it as is for the purposes of this demo.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=160)** Next, I'll describe the listing, which I can fill out in the text box.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=164)** I'll add "Daily sales for the city of Hamburg, Germany."
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=168)** You'll also see the publishing as field, which corresponds to what consumers will see on the listings landing page.
>
> **[2:55](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=175)** So for this listing, a consumer would see my account identifier as a provider.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=180)** Since I'm creating a private listing, I'll need to specify the account identifiers of the accounts I want to share this dataset with.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=187)** I'll enter a single recipient here with this account identifier.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=191)** At the bottom, if you expand the More drop-down, you can enter an email here to get notifications about auto-fulfillment, consumer requests, and more.
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=202)** With all of the fields now properly set, I can click on Publish.
>
> **[3:32](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=212)** And here's a success page indicating that my listing is live.
>
> **[3:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=216)** The tables that I selected would now be shared with the recipient account that I specified, and the recipient would be able to use them in their account.
>
> **[3:44](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=224)** That was really quick.
>
> **[3:46](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=226)** This is an extremely common and powerful way of delivering a data product, in this case, a dataset, to an end user.
>
> **[3:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=232)** You don't have to take it from me.
>
> **[3:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=234)** You can simply browse the Marketplace and see all of the curated and high-quality datasets there, some free, some paid, that other users in Snowflake's Data Cloud are able to discover and use to build their pipelines.
>
> **[4:07](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/data-sharing-on-snowflake-marketplace?u=76281980&t=247)** Coming up, we'll go from sharing of datasets to sharing of data apps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), [[Snowflake]] (8), product (2), cloud (2), next (2)
> **UI Navigation:** click on (2), navigate to (1), select the (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** just like (1), for example (1)
> **CLI Commands:** find (1)
> **Env Vars:** hamburg_weather (1)
> **Cross-References:** coming up (1)

#### Streamlit in snowflake applications
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=0)** Streamlit is a powerful open-source Python library for building data apps in pure Python, no HTML, CSS, or any other fancy web technologies or frameworks needed.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=13)** Apps built with Streamlit are incredibly easy to deploy and share.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=17)** This makes Streamlit a great way of sharing and delivering your data products.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=21)** To top things off, Streamlit is natively available within Snowflake, known as Streamlit in Snowflake.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=28)** This makes it even easier for you to build and share Streamlit applications directly in your Snowflake account, and you're not limited to visualizing data in the Streamlit App.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=37)** Using Streamlit components, you can build custom user interfaces and build complex data and AI applications.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=45)** You can do things like capture user input in the form of dropdowns, text inputs, and radio buttons.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=52)** You can bring in open-source packages and use them in the application.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=56)** You can even build rag-based chatbots that allow you to talk to your data in natural language.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=61)** This only scratches the surface of what's possible, and I encourage you to check out the Streamlit documentation for more inspiration.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=69)** Let's build and share a Streamlit in Snowflake App that visualizes the weather Hamburg view that we created earlier.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=76)** It's a good time to pause the video to make sure you're logged into your Snowflake account.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=80)** Navigate to Projects and click on Streamlit.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=84)** Click the button to create a new Streamlit App.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=87)** Name your Streamlit App and choose a database and schema where the app will live.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=93)** I'm going to select TASTY_BYTES and HARMONIZED.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=99)** I'll also select the COMPUTE_WH virtual warehouse to associate with the app.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=105)** Click Create. You'll see the application boot up, and it will display a sample application. Let's take a look around.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=114)** On the left, you'll have your Snowflake object picker, where you can see all of the databases, apps, and other things.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=121)** In the middle, you have a full-fledged Python editor where you can write the code that powers your app, and on the right, you see a real-time rendering of the current state of the application.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=132)** If you make edits to the sample app that loads, you can click on Run at the top, and the application will instantly re-render to reflect the most current state, assuming there are no errors.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=143)** This setup makes it incredibly easy to edit and quickly preview changes in your application.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=148)** And again, I'm entirely within Snowflake.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=150)** This isn't a Python course or Streamlit course, so we won't walk through code or syntax line by line.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=157)** Instead, focus on the high-level moving parts and what we're building, then you can dive deeper into specific parts of the process you might have questions about.
>
> **[2:46](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=166)** Let's build our app.
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=168)** Navigate to the streamlit_whether_hamburg.py file in the streamlit-in-snowflake folder within the module-4 folder.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=176)** Copy the code.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=180)** Remove all of the current Python code in the code editor in Snowflake and paste in the code that you copied from our Python file.
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=190)** Let's take a look at what's going on.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=192)** At the top, you can see I'm importing the relevant packages, and if I wanted to use more packages, I could use the package picker here at the top to install them and then just bring them into my code.
>
> **[3:25](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=205)** At the top, I start a Snowpark session using get_active_session.
>
> **[3:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=209)** Then I use st.title to write some text to the app.
>
> **[3:35](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=215)** Then I load my DataFrame, which is based on the weather_hamburg view in my account.
>
> **[3:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=220)** I'm going to cast my DataFrame to a Pandas DataFrame using to.pandas, and then I'll create a chart here to render the data.
>
> **[3:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=232)** First, I define my desired legend titles.
>
> **[3:55](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=235)** Then I start creating my chart by passing in the DataFrame to the chart object.
>
> **[4:02](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=242)** There are some other properties that I configure for the chart below this as well.
>
> **[4:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=246)** Click Run.
>
> **[4:12](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=252)** And now you'll see I have an application that uses the transform data in my account to deliver an insight.
>
> **[4:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=257)** If I want to share it, I can click on Share at the top right, where you'll see I can share the app with more roles in my account, and I can also grab a handy link to the app as well.
>
> **[4:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=268)** The neat thing, this app is only about 54 lines of code.
>
> **[4:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=273)** In 54 lines of code, we built a Streamlit in Snowflake App that delivers insights to teammates and all within the same Snowflake account.
>
> **[4:41](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=281)** It was super easy to create and share, and no data ever left my account.
>
> **[4:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=287)** Let's quickly recap what you learned.
>
> **[4:49](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=289)** You learned that Streamlit is natively available within Snowflake, known as Streamlit in Snowflake.
>
> **[4:55](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=295)** You learned that you can build data apps using just Python, all within your account.
>
> **[5:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=300)** And you learned that you can easily share these apps with users in your account.
>
> **[5:03](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/streamlit-in-snowflake-applications?u=76281980&t=303)** Coming up, we'll go beyond sharing apps in your Snowflake account to sharing data apps with users in the entire data cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (14), data (11), [[Python (Programming Language)|Python]] (7), application (7), open-source (2)
> **CLI Commands:** python (7), make (2)
> **UI Navigation:** click on (3), navigate to (2), select the (1)
> **Env Vars:** html (1), css (1), tasty_bytes (1), harmonized (1), compute_wh (1)
> **Code Identifiers:** streamlit_whether_hamburg (1), get_active_session (1), weather_hamburg (1)
> **Definitions:** known as (2), is a  (1)
> **Prerequisites:** setup (1), install (1), configure (1)
> **File Paths:** streamlit_whether_hamburg.py (1)

#### Snowflake native applications
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=0)** With Streamlit in Snowflake, you are able to quickly build an application that was easily shared with other users in your Snowflake account. With Snowflake Native Applications, the model of sharing an app extends beyond your Snowflake account.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=14)** Let's take a look at how this is done.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=16)** Snowflake Native Applications are fully contained applications that run entirely within a Snowflake account.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=22)** Apps are built by application providers and listed on the Snowflake Marketplace.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=28)** There, app consumers can discover, install, and run Native Apps in their Snowflake account.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=34)** The flow is very similar to the flow for discovering and loading datasets from the Snowflake Marketplace, and Native Apps are a phenomenal way of delivering a data product, like a dataset, a machine learning model, and more.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=47)** Snowflake Native Apps are typically built with Snowflake as the core application stack.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=53)** You'll use SQL, Snowpark, Streamlit, and Snowflake as your data store, as the core components of your applications.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=60)** But the great thing is that if you're looking to build something even more custom within your app, you can leverage Snowpark Container Services and run a container image within your Snowflake Native App instead. And just like Streamlit in Snowflake, you can also bring in other open-source libraries as well.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=77)** Once an application is ready to be shared, application providers bundle the application into an application package and distribute it on the Snowflake Marketplace as either a public or private listing, perhaps with a billing model.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=90)** When a consumer installs an application in their Snowflake account, they power the application using their compute resources.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=97)** The application is then able to act on objects within the consumer's account, provided that the consumer has granted the application permission to access those objects.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=107)** Consumers are always able to manage any and all permissions from within the application.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=112)** Follow along with me as we take existing application code and bundle it up as a Snowflake Native Application.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=119)** We'll take the same application that we built in the prior video and deploy it as a Native App using the Snowflake CLI.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=126)** Now is a good time to pause the video if you need to log into your Snowflake account.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=130)** Using the terminal, cd into the snowflake-native-app folder within the module-4 folder of the repo.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=137)** In here, you'll find a folder called hamburg_weather_native_app.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=141)** This folder contains all of the code for the Native App that will deploy into your Snowflake account.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=147)** Again, we'll deploy the same Streamlit App we built earlier, but this time as a Snowflake Native App.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=152)** You can imagine that in this scenario, we're sharing insights on proprietary data safely and securely to interested consumers via our Native App.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=162)** Let's take a look at how things are organized in this holder.
>
> **[2:46](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=166)** The core components are the streamlit.py, manifest.yml, and setup_script.sql files.
>
> **[2:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=173)** The Streamlit file defines the front end of the app, which mostly contains the same code as the Streamlit in Snowflake App that we built.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=180)** The manifest file defines properties required by the application package, including the location of the setup script.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=187)** The setup script file is what's executed when the application is installed into a consumer's account.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=192)** This is a fully working Native App that's ready to be deployed.
>
> **[3:16](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=196)** Now there are some other files in this repo, but we won't be able to do a deep dive into the Snowflake Native Application framework in this video.
>
> **[3:25](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=205)** What I'd like for you to focus on is not necessarily the exact setup or specific components of the Snowflake Native App but rather the high-level concepts of creating an application, bundling it up, and deploying it to a consumer's account.
>
> **[3:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=220)** To that end, we'll use a Snowflake CLI to deploy and install the application to our account.
>
> **[3:46](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=226)** In the terminal, cd into the hamburg_weather_native_app folder.
>
> **[3:51](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=231)** Next, type snow app run.
>
> **[3:55](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=235)** This command bundles the application's logic into an application package and installs the application in your account.
>
> **[4:02](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=242)** After a few seconds, you should see successful output along with a handy link that you can click on to get directly to the app. Click on it.
>
> **[4:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=259)** You'll be taken to the application running in your Snowflake account.
>
> **[4:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=263)** Remember, this is what a consumer would see after installing and running the application in their account.
>
> **[4:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=269)** We're simply using one account for the purposes of convenience.
>
> **[4:32](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=272)** So for just a moment, you should imagine that you're a consumer that discovered this application on the marketplace and installed it into your account.
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=280)** Okay. You'll be prompted to give the application access to the WEATHER_HAMBURG_TEA_TABLE when the app first boots up.
>
> **[4:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=287)** Use a UI to grant access.
>
> **[5:03](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=303)** Great. Now the application will boot up and render the front end defined in the Streamlit file. Excellent.
>
> **[5:09](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=309)** And if you want to quickly uninstall the application and drop the application package, you can run snow app teardown within the hamburg_weather_native_app folder.
>
> **[5:22](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=322)** Before we close out, let's quickly go over some key differences between Streamlit in Snowflake Apps and Snowflake Native Applications.
>
> **[5:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=329)** Streamlit in Snowflake Apps are typically bound to accounts.
>
> **[5:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=333)** They're deployed in a specific Snowflake account, and you can share the app with team members in your account.
>
> **[5:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=339)** With Snowflake Native Applications, you can publicly list an app on the marketplace, making it discoverable to all users within Snowflake's Data Cloud.
>
> **[5:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=347)** Snowflake Native Applications run in consumer accounts, and consumers power the application with their accounts data and compute resources.
>
> **[5:55](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=355)** Snowflake Native Apps are a phenomenal way to go beyond the boundaries of your own Snowflake account and share business logic with consumers in Snowflake's Data Cloud.
>
> **[6:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/snowflake-native-applications?u=76281980&t=364)** Coming up, we'll recap all that you've learned about data delivery.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (37), application (31), data (7), [[SQL]] (2), power (2)
> **Prerequisites:** setup (3), install (2)
> **Code Identifiers:** hamburg_weather_native_app (3), setup_script (1)
> **Env Vars:** cli (2), sql (1), weather_hamburg_tea_table (1)
> **Analogies:** imagine (2), similar to (1), just like (1)
> **File Paths:** streamlit.py (1), manifest.yml (1), setup_script.sql (1)
> **CLI Commands:** cd (2), find (1)
> **Tools:** terminal (2)

#### Recap and best practices for data product delivery
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-data-product-delivery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-data-product-delivery?u=76281980&t=0)** You learned several ways of doing data delivery in this module.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-data-product-delivery?u=76281980&t=4)** Let's recap what we covered.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-data-product-delivery?u=76281980&t=7)** High-quality transformed datasets may oftentimes be the final data product that you're delivering, and the Snowflake Marketplace can help you go beyond sharing those objects in your account to sharing that data with users in Snowflake Data Cloud.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-data-product-delivery?u=76281980&t=20)** You also learned that data apps are easy to build and share either directly with other users in your Snowflake account using Streamlit in Snowflake or with other users in Snowflake's Data Cloud using Snowflake Native Applications.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-data-product-delivery?u=76281980&t=33)** How your pipeline delivers your final data product would depend heavily on your use case.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-data-product-delivery?u=76281980&t=39)** For example, your approach may vary based on things like security requirements, consumer personas, and more.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-data-product-delivery?u=76281980&t=47)** What's great is how flexible Snowflake can be in aiding your delivery, from sharing data products within accounts to sharing them in the data cloud and even beyond.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-data-product-delivery?u=76281980&t=56)** By this point in the course, we've built end-to-end data pipelines that can take raw data and produce insights and deliver them via data products, but it wouldn't feel quite right if we stopped here.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-data-product-delivery?u=76281980&t=69)** Remember, we want to learn how to build continuous end-to-end data pipelines so that they can run at scale.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-data-product-delivery?u=76281980&t=77)** So join me in the next module to learn about how to level up your data pipelines with automation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (14), [[Snowflake]] (7), cloud (3), product (2), [[Microsoft Products|Products]] (2)
> **Cross-References:** we covered (1), in the next (1)
> **Analogies:** for example (1)


### 5. Orchestrating Continuous Data Pipelines with Snowflake

[↑ Back to Table of Contents](#table-of-contents)

#### What is orchestration?
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980)

> [!transcript]- Transcript
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=10)** There's so much more to understanding data pipelines beyond the three phases in our data engineering framework.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=17)** In fact, if someone were to ask me, "What's the one key aspect of building a data pipeline that completely levels up the power and robustness of that pipeline?
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=28)** I'd certainly answer, "Automation."
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=31)** We'll dive into this concept in this module.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=34)** Before getting into the details, here's the quick note on the ITD framework that we've used so far.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=40)** This framework has made it easy for us to understand the core moving parts to a data pipeline.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=46)** Thanks to the framework, we know that the core components of a data pipeline involve ingesting data, performing transformations against that data, and delivering the data product to a consumer.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=59)** You've also learned how to use the most practical, powerful features in each of those phases to get you up and running fast with building data pipelines with Snowflake.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=68)** With the exception of dynamic tables, much of what we've done so far has had little to no automation in it.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=75)** Ingesting data has involved manual steps and coordination, and so did our data transformations and our data delivery.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=83)** We also ran our SQL and Python scripts manually.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=86)** All of that was by design.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=89)** We learned a lot by doing it this way.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=91)** This approach helped us get hands-on with Snowflake to get a feel for what the code and platform feel like when building pipelines.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=98)** But automation is a key concept that breeds life into a data pipeline.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=103)** It can take a pipeline from feeling like an overly hands-on manual process to a continuous machine with its own running engine.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=113)** When building a robust data pipeline, automation underpins all aspects of the pipeline.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=120)** So what exactly can be automated within a pipeline to really level it up?
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=125)** Well, just about anything, really, and that's where the beauty and power of automation lies.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=131)** It's very common, and in fact, many times the norm to automate things like ingestion processes.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=138)** For example, it's very common to automate the ingestion of data files into Snowflake from cloud object storage.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=145)** That COPY INTO command that we used earlier, you can automate it so that it runs, say, weekly, daily, or hourly.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=154)** You might also automate transformations.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=156)** It's very common to write complex transformation logic within a stored procedure and then automate that stored procedure to execute after new data has been ingested, as an example.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=167)** Another common powerful technique is to automate the processing of a stream so that transformations and aggregations can happen instantly when the underlying data has been updated.
>
> **[2:59](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=179)** You also know that dynamic tables can help with automation because you can specify a refresh rate for the table.
>
> **[3:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=186)** The great thing about automating these sorts of things is that data products downstream get all of the benefits.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=192)** For example, rather than repackage or rebuild applications on a daily basis because the underlying data has changed, automation can help ensure that the data products you're delivering to the application are fresh and up to date. The same is true for, say, a machine learning model.
>
> **[3:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=209)** Perhaps you want to make sure the machine learning model doesn't drift, so you retrain it on a weekly or monthly basis, and you use automation in some way to help you maintain the model with fresh data.
>
> **[3:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=220)** Those are just a couple of examples of what's possible by adding automation into your pipelines.
>
> **[3:45](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=225)** The opportunities are truly boundless.
>
> **[3:48](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=228)** One last thing before we kick things off.
>
> **[3:50](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=230)** Why is this module called orchestration if we're talking about all things automation?
>
> **[3:56](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=236)** Well, I like to think of orchestration as automation at scale.
>
> **[4:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=241)** With so many moving parts that can be automated, the name of the game quickly goes from automating one specific thing to figuring out how to harmoniously orchestrate the automation of hundreds of different things.
>
> **[4:14](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=254)** You'll find that to be true in practice as well.
>
> **[4:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=257)** In this module, we'll cover a couple of the most important and powerful automation techniques with Snowflake.
>
> **[4:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=264)** The first, tasks.
>
> **[4:25](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=265)** Tasks are the magic behind automation.
>
> **[4:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=268)** We'll specifically cover user-managed tasks, but I'll also lightly touch on serverless tasks.
>
> **[4:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=274)** We'll also cover how to chain together tasks for broader automation.
>
> **[4:38](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/what-is-orchestration?u=76281980&t=278)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (20), [[Automation]] (15), [[Snowflake]] (4), power (2), [[Microsoft Products|Products]] (2)
> **Env Vars:** itd (1), sql (1), copy (1), into (1)
> **CLI Commands:** python (1), make (1), find (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)

#### Automation with tasks
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=0)** Tasks are the primary object in Snowflake that you'll use for automation.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=5)** A task is essentially a scheduled operation.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=8)** Tasks can be used to execute SQL statements, stored procedures, queries, and more.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=13)** There are two types of tasks in Snowflake: user-managed tasks and serverless tasks. In this video, I'll cover the former, user-managed tasks.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=23)** But because it's so easy to go from one type of task to the other, you'll also get some exposure to serverless tasks.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=30)** The key difference between these two types of tasks is the management of the compute resources needed to run the task.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=37)** With a user-managed task, a user in Snowflake assigns a compute resource to a task and continuously manages it. With a serverless task, Snowflake does the heavy lifting.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=47)** Snowflake will rightsize the compute resources for you so that you don't have to worry about managing a virtual warehouse.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=54)** And all it takes to go from one type of task to the other is a one-line code change. I'll show this shortly.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=61)** You'll specify the schedule on which a task should run using a CRON expression.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=66)** CRON expressions give lots of fine-grain control over how often the tasks should run.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=72)** Finally, you'd pass in the thing that you want to automate.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=75)** One of the most commonly automated things is a call to a stored procedure that might contain some critical logic.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=81)** You could also automate things like SQL queries, email notifications, and more.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=86)** You can also combine tasks with streams for workflows that allow you to continuously process updates to a table, for example.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=94)** In fact, that's exactly what we'll do in this video.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=97)** In any case, that's what's great about tasks.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=99)** They're really flexible in what they can automate.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=102)** Generally, it's very common to use tasks to automate the ingestion and transformation of data.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=108)** This is a pattern that you'll come across very often.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=111)** You can imagine, for example, using a task to run a COPY INTO command on a given schedule and using a task to call a stored procedure that performs transformations against that data after it's been ingested.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=123)** And that's just a quick example.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=125)** There's a lot more that you can automate.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=128)** Let's go ahead and create a task together and use it to automate a stored procedure.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=132)** Now is a good time to pause the video in case you need to log into your Snowflake account.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=137)** Earlier, we created a stored procedure that processes a stream on the ORDER_HEADER table.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=143)** The logic and the procedure calculates and writes the daily sales in Hamburg, Germany, to a table.
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=149)** If we want it to keep that data fresh, we need to manually call the stored procedure over and over again.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=155)** We can instead maintain our data freshness by automated and call to the stored procedure using a task.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=161)** Yes, we did this already with a dynamic table, but again, you should know how to implement both types of approaches.
>
> **[2:49](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=169)** Knowing both approaches will help you understand which approach is best in your own pipelines.
>
> **[2:55](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=175)** Okay. Start by navigating to the orders_headers_task.sql file in the module-5 folder.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=185)** Copy the contents of this file and paste them into a new SQL worksheet.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=198)** Let's take a look at what we have.
>
> **[3:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=201)** We have a task called process_orders_header_sproc.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=204)** Sproc is shorthand for stored procedure, by the way.
>
> **[3:27](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=207)** I specify that the task should use a virtual warehouse, compute warehouse when executing this operation.
>
> **[3:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=214)** This line of code automatically makes this task a user-managed task.
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=218)** If I specify a warehouse during task creation, Snowflake will recognize it as a user-managed task.
>
> **[3:45](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=225)** If I omit this parameter, Snowflake will recognize it as a serverless task and know to do the right sizing for us.
>
> **[3:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=232)** Next, I specify how often it should run by passing in a CRON expression to the schedule parameter.
>
> **[3:58](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=238)** This is the CRON expression that signifies every minute.
>
> **[4:02](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=242)** I encourage you to read up on CRON expressions to learn more about how they're written.
>
> **[4:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=246)** For now, you can trust, this is the correct CRON expression for executing this task every minute.
>
> **[4:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=251)** Finally, I specify the operation that I want the task to execute.
>
> **[4:16](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=256)** In this case, it's a call to the stored procedure, process_orders_header_sproc.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=261)** Let's execute the SQL that sets our context and creates this task.
>
> **[4:35](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=275)** If you refresh on the left-hand side, you'll see the task was created successfully in the raw_pos schema.
>
> **[4:45](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=285)** You'll have to explicitly start the task for it to kick off.
>
> **[4:48](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=288)** I do this on the next line by using ALTER TASK, name of our task, and then RESUME.
>
> **[4:55](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=295)** Now click on the task within the object picker and open it in a new tab.
>
> **[5:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=301)** Next, click on Run History.
>
> **[5:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=304)** You should see that the task has been kicked off and scheduled to run.
>
> **[5:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=308)** Okay. We've now automated the stored procedure to write to the Daily Sales Hamburg Tea Table every minute.
>
> **[5:14](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=314)** Let's navigate back to the worksheet and query the table to see what's in it.
>
> **[5:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=320)** Okay. Great.
>
> **[5:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=321)** Let's insert some dummy data for a sale and Hamburg into ORDER_HEADER.
>
> **[5:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=326)** Remember, we have a stream on this table, so an INSERT operation on this table will be captured by the stream and processed in our stored procedure, which is being called every minute by the task that we just created.
>
> **[5:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=339)** Okay. Let's query our Daily Sales Hamburg Tea table once more.
>
> **[5:44](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=344)** I'll wait a minute before doing this so that the procedure can be executed by the task.
>
> **[5:50](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=350)** And there it is.
>
> **[5:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=352)** That's the correct information based on the dummy data that we manually inserted into ORDER_HEADER.
>
> **[5:59](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=359)** Cool. Okay.
>
> **[6:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=360)** We probably don't want to burn credits by having this task run every minute.
>
> **[6:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=364)** I'd be okay with it running every 24 hours.
>
> **[6:07](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=367)** Let's stop the current task.
>
> **[6:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=371)** The coding comments lets you recreate the task and specify that it should run every 24 hours.
>
> **[6:18](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=378)** I'm not going to run this code for now since I'm going to use the current definition of the task in the next exercise, but I did want to provide the code here just for completion.
>
> **[6:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=388)** Oh, and by the way, we've done all of this in SQL, but you can also do this in Python using Snowflake's Python APIs.
>
> **[6:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=397)** Okay. Let's quickly step back and contextualize tasks.
>
> **[6:41](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=401)** Up until now, just about everything we've done with the data in our pipeline has been pretty manual, like the ingestion and transformation of data, but tasks completely change that.
>
> **[6:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=412)** With tasks, you level up your data pipeline game by taking manual processes to true continuous workflows. And with serverless tasks, management is even easier because you don't have to worry about managing compute resources for your task. Let's recap what you learned.
>
> **[7:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=430)** You learned what a task is.
>
> **[7:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=431)** You learned about the two types of tasks, user-managed and serverless, and the main difference between them.
>
> **[7:18](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=438)** You learned that tasks add automation to your pipeline and that they're really flexible in what they can automate.
>
> **[7:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=444)** You learned how to define and use tasks in SQL, and you also learned that you can do all of this in Python if you wanted to, using Snowflake's Python APIs.
>
> **[7:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/automation-with-tasks?u=76281980&t=453)** Coming up, we'll talk about how you might use multiple tasks in the context of a data pipeline and how you might chain them together to form an overall sequence of events.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (10), data (10), [[SQL]] (7), next (4), [[Python (Programming Language)|Python]] (4)
> **Env Vars:** sql (6), cron (6), order_header (3), copy (1), into (1)
> **CLI Commands:** python (4)
> **Code Identifiers:** process_orders_header_sproc (2), orders_headers_task (1), raw_pos (1)
> **Definitions:** is a  (4)
> **Analogies:** for example (2), imagine (1)
> **Cross-References:** in the next (1), coming up (1)
> **UI Navigation:** click on (2)

#### Orchestration with DAGs
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=0)** As your pipelines grow in scope, the chances that you'll need to increase the overall amount of automation will likely increase.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=8)** This means there's a good chance you'll eventually end up with quite a number of tasks.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=13)** When there are numerous tasks, it's extremely important to start thinking about how these tasks are coordinated and scheduled in relation to one another.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=21)** This is important because you wouldn't want, for example, for a task to accidentally perform some operation at the wrong time and after other logic in your pipeline.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=31)** These types of uncoordinated operations could seriously impact the reliability and integrity of your pipeline, among other things.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=40)** So how do you get around this?
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=42)** Well, if you know there are tasks that have dependencies on other tasks, you can link these tasks and specify the order in which the tasks should execute.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=52)** This helps you keep your operations in sync, all happening in an intentional fashion.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=57)** After all, this is a module on orchestration.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=61)** We've already run across one such example.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=64)** Like maybe the automated transformations you're performing depend on an automated ingestion process, and those transformations can only happen after new data has been loaded into your account.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=75)** And maybe this is true for multiple tables and multiple sources of data.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=80)** In a scenario like this, it makes a lot of sense to link tasks together to coordinate these events.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=86)** Some fancy terms for the linking of tasks include task graph or Directed Acyclical Graph, also known as DAG.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=95)** You might hear me use these terms interchangeably.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=98)** Let's go ahead and create a DAG in Snowflake using SQL.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=102)** We'll link together a couple of tasks in our pipeline.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=105)** And once again, if you want to do this in Python, you absolutely can, using Snowflake's Python APIs.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=111)** Now's a good time to pause the video if you need to log into your Snowflake account.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=115)** Our email analysts want a daily email that looks at a rolling window of time for sales in Hamburg.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=122)** They specifically want to look at the last seven days of sales on a daily basis.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=127)** Let's create a stored procedure that sends an email with the seven most recent entries in the Daily Sales Hamburg Tea Table.
>
> **[2:15](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=135)** We'll automate the stored procedure with a task and make sure it executes after our task that calls the orders_header_sproc stored procedure.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=144)** Navigate to the dag_email_integration.sql file in the module-5 folder.
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=149)** Copy its contents.
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=151)** Open a new SQL worksheet and paste the content in there.
>
> **[2:39](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=159)** Let's take a look at what we have here.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=161)** First, we create an email notification integration.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=165)** This object allows us to send email notifications to the recipient specified in the allowed recipient's parameter.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=172)** If you want to see this email integration in action, you should add your email address here.
>
> **[2:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=177)** Next, we'll create our stored procedure to send the sales report.
>
> **[3:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=181)** I write the stored procedure in Python and use Snowpark for Python to retrieve the last seven days of data in the Daily Sales Hamburg Tea table.
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=190)** I then format the email content and then send the email by invoking the system function, send-email.
>
> **[3:16](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=196)** I make sure to specify the email notification integration object and the email address for the recipient, an email subject line, and the email content.
>
> **[3:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=206)** This is another place where you should insert your email address if you want to see the email come into your inbox.
>
> **[3:31](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=211)** I then define a new task called SEND_LAST_SEVEN_DAYS_REPORT.
>
> **[3:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=216)** It calls the stored procedure above.
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=218)** But the important thing is the AFTER keyword here, which specifies that this task should occur after the process_orders_header_sproc task.
>
> **[3:47](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=227)** This bit of SQL effectively chains together these two tasks, making process_orderes_header_sproc a dependency for the weekly sales report task. This chaining creates a DAG.
>
> **[3:58](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=238)** Run everything up to and including this block of SQL.
>
> **[4:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=244)** Okay. Great.
>
> **[4:05](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=245)** Now let's start the tasks.
>
> **[4:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=248)** I'm going to start the weekly sales report task first using ALTER TASK, name of task, and then RESUME. I'll do the same for the root task, process_order-header_sproc, and I'll then start the overall DAG by executing the process_order_header_sproc task directly.
>
> **[4:32](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=272)** EXECUTE TASK manually triggers the execution of the specified task immediately.
>
> **[4:37](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=277)** This is typically used when you want to run a task outside of its normal schedule for testing purposes, as an example.
>
> **[4:44](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=284)** Okay. We should be receiving an email with the information specified in the email integration.
>
> **[4:49](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=289)** Let's check. There it is.
>
> **[4:51](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=291)** The email has a title of Weekly Sales Report for Hamburg and has this nice table showing the seven most recent entries to the Daily Sales Hamburg Tea Table.
>
> **[5:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=301)** To send this email at a particular cadence, you would modify the schedule for the process_orders_header_sproc task.
>
> **[5:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=308)** For now, we're executing it immediately for the purposes of showing off the email and the DAG.
>
> **[5:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=313)** Let's quickly navigate to the Tasks section in the RAW_POS schema.
>
> **[5:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=319)** Click on the SEND_LAST_SEVEN_DAYS_REPORT task.
>
> **[5:26](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=326)** Click on Graph above.
>
> **[5:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=329)** Snowflake provides us with this neat graph view of the chained tasks.
>
> **[5:33](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=333)** This is incredibly useful if you want a visual representation of task dependencies. In practice, you can imagine having tens, hundreds of tasks, and this part of the UI would do a great job of helping you get oriented if you're trying to understand how certain tasks are coordinated.
>
> **[5:50](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=350)** On the right, you can take a look at some other details, too.
>
> **[5:53](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=353)** If you wanted to, you could kick off the deck from here as well, but we won't do that for now.
>
> **[5:58](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=358)** Okay. Great.
>
> **[5:59](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=359)** You just created a DAG. Let's not forget to stop the tasks.
>
> **[6:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=364)** Go back to the worksheet and run the final two lines.
>
> **[6:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=368)** Run them in sequential order.
>
> **[6:10](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=370)** The entire DAG should now be suspended.
>
> **[6:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=373)** Okay.
>
> **[6:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=373)** There you have it.
>
> **[6:15](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=375)** You sequenced tasks and linked them together to form a DAG.
>
> **[6:18](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=378)** You also learned how to kick off the entire sequence of events by kicking off the root task.
>
> **[6:24](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=384)** What I love about DAGs is that beyond a single sequence of events, you can imagine how you might scale this to parallelize multiple sequence of events that aren't dependent on each other.
>
> **[6:35](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=395)** Perhaps you have tens or hundreds of different processes all happening within your data pipeline, and they aren't necessarily blocking each other.
>
> **[6:42](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=402)** You can use DAGs to parallelize these sequences and optimize your overall execution time.
>
> **[6:48](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=408)** And finally, an incredibly helpful thing about DAGs is that if something goes wrong, the nature of the graph makes it so that you can easily spot where in the sequence an error occurred, helping you debug faster.
>
> **[7:01](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=421)** Okay. Let's recap what you learned.
>
> **[7:03](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=423)** You learned that you can chain tasks using the AFTER keyword in a task's definition.
>
> **[7:09](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=429)** You learned that a sequence of two or more chained tasks constitutes a Directed Acyclical Graph, also called a DAG or a task graph, and you learned how to define a DAG using SQL in Snowflake.
>
> **[7:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/orchestration-with-dags?u=76281980&t=443)** Coming up, let's recap all that you learned in this module.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (6), [[Snowflake]] (5), data (4), [[Python (Programming Language)|Python]] (4), [[Automation]] (1)
> **Env Vars:** dag (10), sql (5), send_last_seven_days_report (2), after (2), task (2)
> **Code Identifiers:** process_orders_header_sproc (2), orders_header_sproc (1), dag_email_integration (1), process_orderes_header_sproc (1), process_order (1)
> **CLI Commands:** python (4), make (2)
> **UI Navigation:** navigate to (2), click on (2)
> **Analogies:** imagine (2), for example (1)
> **Cross-References:** go back to (1), coming up (1)
> **Definitions:** is a  (1), known as (1)

#### Recap and best practices for pipeline orchestration
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-pipeline-orchestration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-pipeline-orchestration?u=76281980&t=0)** In this module, you learned how to level up your data pipelines by adding automation to them.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-pipeline-orchestration?u=76281980&t=6)** Let's quickly go over what we covered.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-pipeline-orchestration?u=76281980&t=9)** Tasks are the key ingredient for adding automation to your pipeline.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-pipeline-orchestration?u=76281980&t=13)** You can create and manage tasks yourself or have Snowflake do the heavy lifting for you with serverless tasks.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-pipeline-orchestration?u=76281980&t=20)** You also saw how they can be used to automate just about anything, from simple SQL queries to complex logic within a stored procedure.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-pipeline-orchestration?u=76281980&t=29)** You learned that tasks can be chained together to form task graphs, also known as DAGs.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-pipeline-orchestration?u=76281980&t=35)** These are key to coordinating tasks that depend on each other and keep moving parts of your pipeline in the correct sync.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-pipeline-orchestration?u=76281980&t=43)** We've come so far.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/recap-and-best-practices-for-pipeline-orchestration?u=76281980&t=45)** Join me in the next video to close out and recap all that you learned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Automation]] (2), data (1), [[Snowflake]] (1), [[SQL]] (1), next (1)
> **Cross-References:** we covered (1), in the next (1)
> **Env Vars:** sql (1)
> **Definitions:** known as (1)

#### Conclusion
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=0)** Let's reflect for a moment.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=2)** It's incredible to look back on how far you've come in such a short amount of time.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=8)** I promised that by the end of this course, you'd know enough about data engineering with Snowflake to be dangerously good at applying these concepts to build data pipelines on your own.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=19)** To meet this objective, we designed this course to cover the most essential and practical Snowflake features within the ITD framework.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=28)** We covered all sorts of ways to ingest data into Snowflake, from loading data from the Snowflake Marketplace to using the web interface and command line to knowing how to ingest data in cloud object storage into Snowflake with just a bit of SQL.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=44)** These are core techniques and concepts you'll frequently encounter and use.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=50)** For transforming data, we covered quite a bit, specifically how to use SQL or Snowpark for Python to perform data transformations, how to reuse logic by creating UDFs and stored procedures, and how to use streams and dynamic tables for incremental processing of data.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=69)** You even learned how to use Snowflake Notebooks and the VS Code extension for Snowflake to do these things.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=76)** For delivery, you learned all sorts of techniques for delivering valuable insights to consumers, from data sharing on the Snowflake Marketplace to building and sharing apps in your account using Streamlit in Snowflake to sharing apps beyond your account with Snowflake Native Applications.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=94)** And last but certainly not least, you learned how to add automation to pipelines using tasks, and you also learned how to chain tasks together to create DAGs that help with the broader orchestration of things in your pipeline.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=108)** Having covered these concepts, I feel pretty good about the promise of you being dangerously good enough to start building pipelines on your own.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=117)** Now here's what I didn't promise.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=119)** I didn't promise that you'd be an expert on data engineering by the end of the course, and here's why I didn't promise that.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=126)** First, I'm not so sure that any online course could really make a promise like that.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=131)** And second, it's because so much of your expertise with building data pipelines is going to come from you going out and tinkering with things.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=139)** And when you do that, you'll end up doing a few things.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=143)** You'll make mistakes, you'll run into errors, you'll spend time debugging issues, you'll peruse technical documentation, and you'll go to all sorts of places online to learn more.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=156)** And these are the sorts of things that will round out and enhance your expertise.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=162)** Those are the things that will also exercise your mental model of data engineering and continuously strengthen it.
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=168)** So my advice to you: go out and put these concepts to use as soon as you can.
>
> **[2:55](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=175)** Let go of any reservations you might have and get hands-on, try things, break things, fix things.
>
> **[3:04](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=184)** Constantly push the limits of what you know and of what's possible.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=188)** This will only help to level up your understanding and expertise.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=192)** I know that you can do this, and I know that you can build data pipelines with Snowflake.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=198)** I'm Gilberto Hernandez, Developer Advocate at Snowflake.
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-modern-data-engineering-with-snowflake/conclusion?u=76281980&t=202)** Thanks for joining me, and see you in future courses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Snowflake]] (12), data (11), [[Data Engineering]] (2), [[SQL]] (2), web (1)
> **CLI Commands:** make (2), python (1)
> **Env Vars:** sql (2), itd (1)
> **Cross-References:** we covered (2)
> **Tools:** command line (1), vs code (1)
> **UI Navigation:** go to (1)


## Instructor

- [[Snowflake]]
- [[Inc]]

## Resources

- Exercise files available

## Skills Covered

- Data Engineering
- Snowflake

## Path Context

### In [[Data Engineering Professional Certificate by Snowflake]]
← [[Intro To Snowflake For Devs Data Scientists Data Engineers]] | **2 of 3** | [[Advanced Data Engineering with Snowflake]] →

## Part of

- [[Data Engineering Professional Certificate by Snowflake]]

## Appears In

- [[Data Engineering Professional Certificate by Snowflake]]

## Related Courses

_Courses sharing skills:_

- [[Intro To Snowflake For Devs Data Scientists Data Engineers]] — Data Engineering, Snowflake
- [[Databricks Certified Data Engineer Associate Cert Prep]] — Data Engineering
- [[Big Data Analytics with Hadoop and Apache Spark]] — Data Engineering
- [[Transition from Data Science to Data Engineering]] — Data Engineering
- [[Learning SnowflakeDB]] — Snowflake

---

[↑ Back to top](#)