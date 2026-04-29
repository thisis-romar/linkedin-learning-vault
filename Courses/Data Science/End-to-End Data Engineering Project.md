---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: end-to-end-data-engineering-project
url: "https://www.linkedin.com/learning/end-to-end-data-engineering-project"
duration_minutes: 75
duration: 1h 15m
level: Intermediate
updated: 11/3/2023
learners: 140701
skills:
  - Data Engineering
exercise_files: true
github: "https://github.com/LinkedInLearning/end-to-end-data-engineering-project-4413618"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQFQihfehsNCiQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1698869440746?e=2147483647&amp;v=beta&amp;t=sfUJ7etqCscS3Cd63lMzAdfOYdLxuNchxPewFdCXalU"
linkedin_topic: Data Science
learning_paths:
  - '[[Develop Your Scala Skills for Data Engineering]]'
  - '[[Advance Your Data Engineering Skills]]'
  - '[[Develop Your Rust Skills for Data Engineering]]'
  - '[[Data Engineering Hands-On Practice]]'
prev_courses:
  - '[[Coding Exercises- Scala]]'
  - '[[Data Pipeline Automation with GitHub Actions Using R and Python]]'
  - '[[Level Up- Rust]]'
  - '[[Complete Guide to SQL for Data Engineering- from Beginner to Advanced]]'
path_nav: '[{"path":"Develop Your Scala Skills for Data Engineering","position":6,"total":6,"prev":"Coding Exercises- Scala","next":null},{"path":"Advance Your Data Engineering Skills","position":10,"total":10,"prev":"Data Pipeline Automation with GitHub Actions Using R and Python","next":null},{"path":"Develop Your Rust Skills for Data Engineering","position":6,"total":6,"prev":"Level Up- Rust","next":null},{"path":"Data Engineering Hands-On Practice","position":7,"total":7,"prev":"Complete Guide to SQL for Data Engineering- from Beginner to Advanced","next":null}]'
path_count: 4
tags:
  - course
  - topic/data-science
  - topic/software-development
  - topic/devops
  - topic/database-management
  - skill/data-engineering
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/End-to-End%20Data%20Engineering%20Project.md)

![End-to-End Data Engineering Project](https://media.licdn.com/dms/image/v2/D4D0DAQFQihfehsNCiQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1698869440746?e=2147483647&amp;v=beta&amp;t=sfUJ7etqCscS3Cd63lMzAdfOYdLxuNchxPewFdCXalU)

# End-to-End Data Engineering Project

> The world of data engineering is ever-changing, with new tools and technologies emerging on a regular basis. Building an effective analytics platform can be a daunting task, especially if you’re not familiar with all the tools available. How do you turn scattered, complex data into a model that drives insights and decision-making? In this course, Thalia Barrera teaches data professionals how to im

> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project) | 1h 15m | Intermediate | 141K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - Transform complex data into insights
  - What you should know
- [**1. Project Overview and Preparation**](#1-project-overview-and-preparation) (4 videos)
  - Project architecture overview
  - Project setup
  - Understanding the Big Star Collectibles database
  - Setting up your data warehouse
- [**2. Data Extraction and Loading**](#2-data-extraction-and-loading) (5 videos)
  - Getting started with ELT tools: An introduction to Airbyte
  - Deploying Airbyte for data synchronization
  - Setting up sources and destinations in Airbyte
  - Establishing connections in Airbyte
  - Synchronizing and navigating through data
- [**3. Starting Data Transformation and Modeling**](#3-starting-data-transformation-and-modeling) (6 videos)
  - Introduction to data modeling with dbt
  - Understanding the structure of a dbt project
  - Initiating your dbt project
  - Configuring data sources in dbt
  - Challenge: Add a freshness check
  - Solution: Add a freshness check
- [**4. Data Transformation and Modeling**](#4-data-transformation-and-modeling) (7 videos)
  - Creating and customizing your dbt models
  - Reviewing and executing dbt
  - Securing your data with dbt tests
  - Challenge: Add tests to the Marts model
  - Solution: Add tests to the Marts model
  - Automating documentation in dbt
  - Completing your dbt project: A full development cycle
- [**5. Data Orchestration**](#5-data-orchestration) (6 videos)
  - Introduction to data orchestration with Dagster
  - Integrating dbt models with Dagster assets
  - Integrating Airbyte connections with Dagster assets
  - Materializing assets using Dagit
  - Challenge: Add a schedule to your data pipeline
  - Solution: Add a schedule to your data pipeline
- [**Conclusion**](#conclusion) (1 videos)
  - An evolving field

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Transform complex data into insights
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/transform-complex-data-into-insights?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/transform-complex-data-into-insights?u=76281980&t=0)** - Are you ready to turn data into a gold mine of insights?
>
> **[0:04](https://www.linkedin.com/learning/end-to-end-data-engineering-project/transform-complex-data-into-insights?u=76281980&t=4)** In this course, we will solve a key challenge in the world of data engineering, how to efficiently extract, load, and transform data into a unified format that is ready for analytics.
>
> **[0:16](https://www.linkedin.com/learning/end-to-end-data-engineering-project/transform-complex-data-into-insights?u=76281980&t=16)** My name is Thalia, and I'm an experienced data engineer.
>
> **[0:19](https://www.linkedin.com/learning/end-to-end-data-engineering-project/transform-complex-data-into-insights?u=76281980&t=19)** I'm going to help you construct a robust data pipeline for a fictional e-commerce company, Big Star Collectibles.
>
> **[0:26](https://www.linkedin.com/learning/end-to-end-data-engineering-project/transform-complex-data-into-insights?u=76281980&t=26)** Our mission, transform their scattered, complex data into a model that drives insights and aids decision-making.
>
> **[0:34](https://www.linkedin.com/learning/end-to-end-data-engineering-project/transform-complex-data-into-insights?u=76281980&t=34)** Throughout this course, you will master the concepts behind extraction, loading, transformation, and orchestration through practical exercises.
>
> **[0:43](https://www.linkedin.com/learning/end-to-end-data-engineering-project/transform-complex-data-into-insights?u=76281980&t=43)** So join me.

> [!info]- Semantic Content
>
> **Speakers:** - are (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/what-you-should-know?u=76281980&t=0)** - Before we dive deep into the project, let's discuss a few things you should know.
>
> **[0:06](https://www.linkedin.com/learning/end-to-end-data-engineering-project/what-you-should-know?u=76281980&t=6)** First, let's talk about knowledge base.
>
> **[0:08](https://www.linkedin.com/learning/end-to-end-data-engineering-project/what-you-should-know?u=76281980&t=8)** To make the most of this course, you should be familiar with [[Data Engineering Foundations]], have a basic understanding of SQL and Python, and comfortable with basic command line operations and Git.
>
> **[0:21](https://www.linkedin.com/learning/end-to-end-data-engineering-project/what-you-should-know?u=76281980&t=21)** About the tech stack, you will need Python 3, Docker and Docker Compose, which are bundled with Docker Desktop, and an IDE.
>
> **[0:30](https://www.linkedin.com/learning/end-to-end-data-engineering-project/what-you-should-know?u=76281980&t=30)** I highly recommend Visual Studio Code.
>
> **[0:33](https://www.linkedin.com/learning/end-to-end-data-engineering-project/what-you-should-know?u=76281980&t=33)** You can find links on how to install all of these tools in the Exercise File.
>
> **[0:38](https://www.linkedin.com/learning/end-to-end-data-engineering-project/what-you-should-know?u=76281980&t=38)** We will build this data engineering project together from scratch.
>
> **[0:41](https://www.linkedin.com/learning/end-to-end-data-engineering-project/what-you-should-know?u=76281980&t=41)** The main takeaway from this course is a GitHub Repo to showcase what you built.
>
> **[0:46](https://www.linkedin.com/learning/end-to-end-data-engineering-project/what-you-should-know?u=76281980&t=46)** You will be able to understand and explain each and every section of it.
>
> **[0:51](https://www.linkedin.com/learning/end-to-end-data-engineering-project/what-you-should-know?u=76281980&t=51)** To get you started, I provide an empty repo in the Main branch.
>
> **[0:55](https://www.linkedin.com/learning/end-to-end-data-engineering-project/what-you-should-know?u=76281980&t=55)** At any point, you can consult the finished version of the project by checking out the Finished branch.
>
> **[1:02](https://www.linkedin.com/learning/end-to-end-data-engineering-project/what-you-should-know?u=76281980&t=62)** And for those moments when I'm coding or entering lengthy commands, there's no need to pause a video and try to copy from the screen.
>
> **[1:10](https://www.linkedin.com/learning/end-to-end-data-engineering-project/what-you-should-know?u=76281980&t=70)** The necessary code and commands are included in the Exercise Files as text.
>
> **[1:16](https://www.linkedin.com/learning/end-to-end-data-engineering-project/what-you-should-know?u=76281980&t=76)** On the surface, this may come across as a very simple project, yet it is holistic, production-ready, and incorporates essentials, like documentation and testing, making it capable of handling massive data loads, if provided.
>
> **[1:32](https://www.linkedin.com/learning/end-to-end-data-engineering-project/what-you-should-know?u=76281980&t=92)** It is meant to be a stepping stone for you to add more sources, more transformations, and make it your own.
>
> **[1:41](https://www.linkedin.com/learning/end-to-end-data-engineering-project/what-you-should-know?u=76281980&t=101)** In the world of data engineering and especially the modern data stack, things change fast.
>
> **[1:48](https://www.linkedin.com/learning/end-to-end-data-engineering-project/what-you-should-know?u=76281980&t=108)** If by the time you are building this project that things don't look the same, please don't get discouraged.
>
> **[1:54](https://www.linkedin.com/learning/end-to-end-data-engineering-project/what-you-should-know?u=76281980&t=114)** The fundamentals will certainly remain the same.
>
> **[1:57](https://www.linkedin.com/learning/end-to-end-data-engineering-project/what-you-should-know?u=76281980&t=117)** Whether you're an experienced data engineer looking to know new tools or a beginner looking to get some hands-on experience, this course is for you.
>
> **[2:07](https://www.linkedin.com/learning/end-to-end-data-engineering-project/what-you-should-know?u=76281980&t=127)** Even if you're not a data engineer, you can still certainly expand your knowledge.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (3), make (2), python (2), git (1), find (1)
> **Tools:** command line (1), docker desktop (1), visual studio (1), github (1)
> **Exercise Files:** exercise file (1), github repo (1), exercise files (1)
> **Code Keywords:** let (2)
> **Env Vars:** sql (1), ide (1)
> **Versions:** python 3 (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)


### 1. Project Overview and Preparation

> [↑ Back to Table of Contents](#table-of-contents)

#### Project architecture overview
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-architecture-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-architecture-overview?u=76281980&t=0)** - Welcome to the team, fellow data engineer.
>
> **[0:03](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-architecture-overview?u=76281980&t=3)** You are now part of Big Star Collectibles, a vibrant e-commerce company.
>
> **[0:09](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-architecture-overview?u=76281980&t=9)** Ahead of you lies a rewarding task that is critical for the company's growth.
>
> **[0:15](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-architecture-overview?u=76281980&t=15)** Our marketing team is eager to drive our next campaign, but they are in the dark.
>
> **[0:21](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-architecture-overview?u=76281980&t=21)** Why? They need data, specific actionable data.
>
> **[0:25](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-architecture-overview?u=76281980&t=25)** And there's no data engineering team in the company.
>
> **[0:30](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-architecture-overview?u=76281980&t=30)** The data is sitting in a Postgres backend database.
>
> **[0:33](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-architecture-overview?u=76281980&t=33)** It is raw and not very useful for the marketing team.
>
> **[0:37](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-architecture-overview?u=76281980&t=37)** Not to mention, it is not optimized for analytics.
>
> **[0:41](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-architecture-overview?u=76281980&t=41)** The marketing team needs a holistic view, so we will combine and transform some of the tables in the database and make sure they are always up to date in our data warehouse.
>
> **[0:52](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-architecture-overview?u=76281980&t=52)** The aim is to provide a more comprehensive view of the customers' buying patterns.
>
> **[0:57](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-architecture-overview?u=76281980&t=57)** So how do we do this?
>
> **[0:58](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-architecture-overview?u=76281980&t=58)** We are going to set up a data warehouse and build a pipeline from scratch using some of the best tools in the modern data stack.
>
> **[1:06](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-architecture-overview?u=76281980&t=66)** Here is the plan.
>
> **[1:08](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-architecture-overview?u=76281980&t=68)** First, we will use Airbyte to extract data from the Postgres database and load it into BigQuery, our new data warehouse.
>
> **[1:16](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-architecture-overview?u=76281980&t=76)** Once the data is in BigQuery, we will clean it up and shape it.
>
> **[1:20](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-architecture-overview?u=76281980&t=80)** dbt will be our transformation tool, helping us turn the raw, scattered data into a neat table that provides insights about our customers.
>
> **[1:29](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-architecture-overview?u=76281980&t=89)** It'll also allow us to test and document our data models.
>
> **[1:33](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-architecture-overview?u=76281980&t=93)** And finally, we'll use Dagster and its user-friendly interface, Dagit, to ensure everything runs smoothly and in the right sequence.
>
> **[1:43](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-architecture-overview?u=76281980&t=103)** By the end of this course, you will be knowledgeable about these modern tools and you will also have built a production-grade data stack from scratch.
>
> **[1:52](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-architecture-overview?u=76281980&t=112)** Ready to take on this challenge?

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), interface (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - welcome (1)

#### Project setup
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=0)** - [Instructor] Now let's roll up our sleeves and dive right in.
>
> **[0:04](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=4)** First, go to the project repo in GitHub and let's create a fork.
>
> **[0:09](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=9)** Forking generates your own copy of the repo in GitHub.
>
> **[0:13](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=13)** Your own copy means that you will be able to contribute changes to your own repo without affecting the original one.
>
> **[0:20](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=20)** Now uncheck the Copy the main branch only.
>
> **[0:23](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=23)** So you bring all the branches and then click on Create fork.
>
> **[0:27](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=27)** And now let's clone the project repo in our local machine.
>
> **[0:31](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=31)** In your fork repo, click on the Code section and then copy the HTTPS URL.
>
> **[0:39](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=39)** And now let's go to the terminal.
>
> **[0:41](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=41)** Start by typing git clone, and then paste the URL we just copied.
>
> **[0:51](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=51)** Next, navigate into the newly created directory and let's open the project in Visual Studio Code.
>
> **[1:03](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=63)** Now let's create a Python Virtual Environment.
>
> **[1:07](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=67)** The environment will help manage the project dependencies separately from any other Python projects you may have.
>
> **[1:14](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=74)** Open a terminal in Visual Studio Code and then create the environment with the following command.
>
> **[1:29](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=89)** Now let's activate our environment.
>
> **[1:34](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=94)** And next, let's select a Python interpreter for our project.
>
> **[1:39](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=99)** Open the command palette, and look for Python Select Interpreter, and choose the one that is tied to our virtual environment.
>
> **[1:51](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=111)** Our last step is to install the project dependencies.
>
> **[1:54](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=114)** To do that, execute the following command.
>
> **[2:01](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=121)** This will install all the project dependencies.
>
> **[2:04](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=124)** It is possible that after installing all these dependencies, you will still see an error saying that dbt is not installed.
>
> **[2:12](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=132)** You can fix this by restarting Visual Studio Code and we are all set.
>
> **[2:17](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=137)** Our Python Project Environment is set up and ready to go.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8)
> **Tools:** visual studio (3), github (2), terminal (2)
> **CLI Commands:** python (5), git (1)
> **UI Navigation:** go to (2), click on (2), open the (2)
> **Env Vars:** url (2), https (1)
> **Prerequisites:** install (2), set up (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Understanding the Big Star Collectibles database
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=0)** - [Instructor] Now that our project is set up, it is time to access the foundation of any data project, the data itself.
>
> **[0:07](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=7)** To make things easy for you, I have prepared a Docker image that includes a Postgres database along with some preloaded data.
>
> **[0:15](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=15)** This Docker image will simulate the Big Star Collectibles backend database.
>
> **[0:20](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=20)** To understand how to transform and use this data effectively, it is crucial to first understand the structure and contents, so let's go over it.
>
> **[0:29](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=29)** The database is an organized system designed to handle various aspects of the e-commerce store operation.
>
> **[0:36](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=36)** It consists of four main tables that serve a unique role.
>
> **[0:39](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=39)** The Customers table is the address book.
>
> **[0:42](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=42)** It contains details about each customer who has made a purchase from Big Star Collectibles, including their location information.
>
> **[0:50](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=50)** The Products table is a catalog of the e-commerce store.
>
> **[0:54](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=54)** It keeps track of all products available for purchase, including their price, rating, and categorization.
>
> **[1:01](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=61)** The Orders table is like the store's diary.
>
> **[1:04](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=64)** It records each order made by customers, tracking important stages of an order like when it was placed, approved, and delivered.
>
> **[1:13](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=73)** and the Orders_items table contains each individual item purchased in an order.
>
> **[1:18](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=78)** Of course, these tables aren't isolated.
>
> **[1:21](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=81)** They are linked to one another, forming a network of relationships.
>
> **[1:25](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=85)** For example, an order in the Orders table is linked to a customer in the Customers table.
>
> **[1:31](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=91)** Similarly, each item in order is linked back to the product it corresponds to in the Products table.
>
> **[1:38](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=98)** Take into account that this data is fake and is generated for learning purposes.
>
> **[1:43](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=103)** Now let's get hands-on.
>
> **[1:45](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=105)** Follow these steps to get the database up and running.
>
> **[1:48](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=108)** Let's start in the terminal.
>
> **[1:50](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=110)** Make sure the Docker is running, and then pull the Docker image by executing the following command.
>
> **[1:59](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=119)** This command fetches the latest version of the image from Docker Hub.
>
> **[2:04](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=124)** Then run a container from the pulled image using the following command.
>
> **[2:12](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=132)** Remember that all of the commands are available in your Exercise Files so you can copy from there.
>
> **[2:18](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=138)** This command creates and starts a new container named big-star-container.
>
> **[2:23](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=143)** Check that the container is up and running in Docker Desktop.
>
> **[2:27](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=147)** And there we have it.
>
> **[2:29](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=149)** With these steps, we have got a running instance of our database.
>
> **[2:33](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=153)** Now we need to configure a couple of things.
>
> **[2:36](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=156)** We are going to access the database using psql by going into the container.
>
> **[2:44](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=164)** Go to the terminal and execute the following command.
>
> **[2:50](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=170)** And we are in the Big Star database.
>
> **[2:53](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=173)** Alternatively, you can connect using a tool like pgAdmin or DBeaver.
>
> **[2:58](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=178)** If you do that, use the connection details in the Inspect tab.
>
> **[3:03](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=183)** And now back to the terminal.
>
> **[3:05](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=185)** Let's make sure our tables are there by using the dt command.
>
> **[3:11](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=191)** And then let's check if our data is there by running a simple select statement.
>
> **[3:17](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=197)** Perfect, we certainly have data.
>
> **[3:20](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=200)** Then we need to execute a couple of queries to set up our logical replication.
>
> **[3:25](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=205)** Don't skip these steps. They are really important.
>
> **[3:30](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=210)** First, we set up a replica identity so that our tables are able to replicate, update, and delete operations.
>
> **[3:38](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=218)** Next, we create a logical replication slot called airbyte_slot.
>
> **[3:44](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=224)** And finally, we create a publication called airbyte_publication.
>
> **[3:49](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=229)** And that's it.
>
> **[3:51](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=231)** You have now successfully configured the database to work with Airbyte's logical replication.
>
> **[3:57](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=237)** More on that later.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (6), make (3), psql (1)
> **Code Keywords:** let (5), delete (1), finally, (1)
> **Tools:** terminal (3), docker desktop (1)
> **Prerequisites:** set up (3), configure (1)
> **Code Identifiers:** pgadmin (1), airbyte_slot (1), airbyte_publication (1)
> **Definitions:** is an  (1), is a  (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)

#### Setting up your data warehouse
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=0)** - [Instructor] Cloud data warehouses have transformed the way we manage and analyze data.
>
> **[0:05](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=5)** They have become the center of the modern data stack, holding huge amounts of data ready for us to gain valuable insights.
>
> **[0:12](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=12)** Google BigQuery is a powerful player in this revolution.
>
> **[0:16](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=16)** BigQuery is a fully managed serverless data warehouse that enables super fast SQL queries.
>
> **[0:22](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=22)** Using the processing power of Google's infrastructure.
>
> **[0:25](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=25)** It is a scalable, cost effective, and integrates very well with other data tools.
>
> **[0:31](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=31)** I have chosen BigQuery for this project mainly because it offers a generous free tier, which is perfect for learning and small projects.
>
> **[0:40](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=40)** But please know that you can use any other data warehouse, such as Snowflake or Redshift if you have access to them.
>
> **[0:47](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=47)** Some steps in this project will be slightly different, but you can definitely follow along.
>
> **[0:53](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=53)** Even a local Postgres database could work as your data warehouse.
>
> **[0:57](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=57)** And now let's set up our BigQuery data warehouse.
>
> **[1:01](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=61)** The first step is to sign up to Google Cloud Services.
>
> **[1:04](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=64)** At the moment of recording, Google Cloud offers $300 in credits and free usage of 20 plus products, including BigQuery.
>
> **[1:14](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=74)** After you sign up, go to the cloud console.
>
> **[1:18](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=78)** And now let's create a new project.
>
> **[1:33](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=93)** Once your project has been created, selected from the top bar menu.
>
> **[1:40](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=100)** And now, let's go to BigQuery.
>
> **[1:47](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=107)** Here, we will create two data sets, raw data and transform data.
>
> **[1:52](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=112)** A dataset is a container for our views and tables.
>
> **[1:55](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=115)** Let's start with the raw data dataset.
>
> **[1:58](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=118)** Click on the three dots and then create dataset.
>
> **[2:02](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=122)** Let's give it a name, and then click on create dataset.
>
> **[2:07](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=127)** And now, let's do the same for the second dataset.
>
> **[2:10](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=130)** Click on the three dots.
>
> **[2:12](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=132)** Create dataset.
>
> **[2:14](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=134)** Let's give it the name, transform data, and click on create dataset.
>
> **[2:20](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=140)** Now we need to create a service account for airbyte.
>
> **[2:23](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=143)** A service account is an identity that you can use to authenticate to Google APIs and services.
>
> **[2:30](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=150)** Navigate to I am an admin, and then service accounts.
>
> **[2:35](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=155)** Once there, click on create service account.
>
> **[2:38](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=158)** Let's give it a name.
>
> **[2:39](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=159)** In this case, I will name mine airbyte, and create and continue.
>
> **[2:46](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=166)** Now we need to provide two roles to this service account.
>
> **[2:50](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=170)** Start typing BigQuery, and then select BigQuery data editor.
>
> **[2:56](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=176)** And let's set another role.
>
> **[3:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=180)** Start typing BigQuery again, and then select BigQuery Job User.
>
> **[3:05](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=185)** And then click on done.
>
> **[3:07](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=187)** Let's do the same for our DBT service account.
>
> **[3:11](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=191)** Let's create a new service account.
>
> **[3:14](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=194)** In this case, we will call it DBT.
>
> **[3:18](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=198)** And then click create and continue.
>
> **[3:21](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=201)** And let's add the same roles we added for the airbyte service account.
>
> **[3:33](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=213)** And click on done.
>
> **[3:37](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=217)** Now, let's generate a JSON key for our service accounts.
>
> **[3:41](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=221)** A JSON key is a secure file that an application can use to authenticate as the service account.
>
> **[3:48](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=228)** Click on actions and select manage keys.
>
> **[3:53](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=233)** Then click on add key, and create a new key.
>
> **[3:57](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=237)** As a key type, select JSON, and then click on create.
>
> **[4:02](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=242)** The generated file should be automatically downloaded to your computer.
>
> **[4:09](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=249)** And now, let's do the same for the DBT account.
>
> **[4:14](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=254)** Click on actions, manage keys, then add a key and create a new key, and then click on create.
>
> **[4:25](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=265)** Make sure to store this file securely as we will need them later.
>
> **[4:30](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=270)** And that's it.
>
> **[4:31](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=271)** You have signed up to Google Cloud Services, created a new project and a BigQuery data set with the necessary permissions to integrate our EL and transformation tools.
>
> **[4:42](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=282)** The playground is set for our project.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), case, (2), continue (2), super (1), type, (1)
> **UI Navigation:** click on (12), go to (2), navigate to (1)
> **Env Vars:** dbt (3), json (3), sql (1)
> **Definitions:** is a  (5), is an  (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** set up (1)


### 2. Data Extraction and Loading

> [↑ Back to Table of Contents](#table-of-contents)

#### Getting started with ELT tools: An introduction to Airbyte
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/getting-started-with-elt-tools-an-introduction-to-airbyte?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/getting-started-with-elt-tools-an-introduction-to-airbyte?u=76281980&t=0)** - Have you ever struggled with manually extracting and loading data from one system to another?
>
> **[0:06](https://www.linkedin.com/learning/end-to-end-data-engineering-project/getting-started-with-elt-tools-an-introduction-to-airbyte?u=76281980&t=6)** Today I'm going to introduce you to a game changer, ELT tools.
>
> **[0:12](https://www.linkedin.com/learning/end-to-end-data-engineering-project/getting-started-with-elt-tools-an-introduction-to-airbyte?u=76281980&t=12)** Let's begin by understanding what ELT tools are and why they are crucial.
>
> **[0:18](https://www.linkedin.com/learning/end-to-end-data-engineering-project/getting-started-with-elt-tools-an-introduction-to-airbyte?u=76281980&t=18)** ELT stands for Extract, Load, and Transform.
>
> **[0:22](https://www.linkedin.com/learning/end-to-end-data-engineering-project/getting-started-with-elt-tools-an-introduction-to-airbyte?u=76281980&t=22)** These tools help you extract data from a multitude of sources like databases or APIs, and load it into a target system like a data warehouse or a data lake, so then you can transform the data as needed.
>
> **[0:36](https://www.linkedin.com/learning/end-to-end-data-engineering-project/getting-started-with-elt-tools-an-introduction-to-airbyte?u=76281980&t=36)** ELT tools are a core piece of the modern data stack because they replace ad hoc scripting, simplifying the extraction, loading, and optional transformation processes, thereby minimizing errors and maintenance efforts.
>
> **[0:51](https://www.linkedin.com/learning/end-to-end-data-engineering-project/getting-started-with-elt-tools-an-introduction-to-airbyte?u=76281980&t=51)** Now let's focus on one specific tool, Airybyte.
>
> **[0:55](https://www.linkedin.com/learning/end-to-end-data-engineering-project/getting-started-with-elt-tools-an-introduction-to-airbyte?u=76281980&t=55)** Airbyte allows you to extract data from various sources and load it into a wide range of destinations, simplifying the creation and maintenance of data pipelines.
>
> **[1:07](https://www.linkedin.com/learning/end-to-end-data-engineering-project/getting-started-with-elt-tools-an-introduction-to-airbyte?u=76281980&t=67)** Airbyte operates around connectors, which handle the extraction from a source and then loading into a destination.
>
> **[1:14](https://www.linkedin.com/learning/end-to-end-data-engineering-project/getting-started-with-elt-tools-an-introduction-to-airbyte?u=76281980&t=74)** Imagine your company stores data across different platforms like Salesforce CRM, a MySQL database, a Postgres database, and you want to aggregate all of this data for insightful analysis.
>
> **[1:29](https://www.linkedin.com/learning/end-to-end-data-engineering-project/getting-started-with-elt-tools-an-introduction-to-airbyte?u=76281980&t=89)** Well, in this case, Airbyte can provide you with out of the box connectors for all of these and many other systems, enabling you to easily set up a comprehensive data pipeline.
>
> **[1:41](https://www.linkedin.com/learning/end-to-end-data-engineering-project/getting-started-with-elt-tools-an-introduction-to-airbyte?u=76281980&t=101)** For this project, we will focus on using Airbyte to move data from the Big Star collective of Postgres into our data warehouse in BigQuery.
>
> **[1:52](https://www.linkedin.com/learning/end-to-end-data-engineering-project/getting-started-with-elt-tools-an-introduction-to-airbyte?u=76281980&t=112)** Now, how do you get Airbyte up and running?
>
> **[1:55](https://www.linkedin.com/learning/end-to-end-data-engineering-project/getting-started-with-elt-tools-an-introduction-to-airbyte?u=76281980&t=115)** Airbyte uses docker containers, which can be easily managed and scaled.
>
> **[2:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/getting-started-with-elt-tools-an-introduction-to-airbyte?u=76281980&t=120)** You can deploy the open-source version on your own infrastructure, like on on-premises servers or on Cloud virtual machines.
>
> **[2:09](https://www.linkedin.com/learning/end-to-end-data-engineering-project/getting-started-with-elt-tools-an-introduction-to-airbyte?u=76281980&t=129)** But for the purpose of this course, we will be deploying the open-source version of Airbyte on your local machine.
>
> **[2:16](https://www.linkedin.com/learning/end-to-end-data-engineering-project/getting-started-with-elt-tools-an-introduction-to-airbyte?u=76281980&t=136)** Airbyte also has a Cloud version, which is fully managed, so you don't have to worry about managing the resources yourself.
>
> **[2:24](https://www.linkedin.com/learning/end-to-end-data-engineering-project/getting-started-with-elt-tools-an-introduction-to-airbyte?u=76281980&t=144)** As you can see, ELT tools like Airbyte automate data extraction and loading, allowing data engineers and analysts to focus on tasks that add more value, like data architecture, modeling and analysis.
>
> **[2:40](https://www.linkedin.com/learning/end-to-end-data-engineering-project/getting-started-with-elt-tools-an-introduction-to-airbyte?u=76281980&t=160)** Are you ready to give Airbyte a try?
>
> **[2:43](https://www.linkedin.com/learning/end-to-end-data-engineering-project/getting-started-with-elt-tools-an-introduction-to-airbyte?u=76281980&t=163)** As you can see, tools like Airbyte automate data extraction and loading, allowing data engineers to focus on tasks that add more value, like architecture, modeling, and analysis.
>
> **[2:56](https://www.linkedin.com/learning/end-to-end-data-engineering-project/getting-started-with-elt-tools-an-introduction-to-airbyte?u=76281980&t=176)** Are you ready to give Airbyte a try?

> [!info]- Semantic Content
>
> **Env Vars:** elt (5), crm (1)
> **Code Keywords:** let (2), case, (1)
> **CLI Commands:** mysql (1), docker (1)
> **Definitions:** stands for (1)
> **Analogies:** imagine (1)
> **Prerequisites:** set up (1)
> **Speakers:** - have (1)

#### Deploying Airbyte for data synchronization
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/deploying-airbyte-for-data-synchronization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/deploying-airbyte-for-data-synchronization?u=76281980&t=0)** - [Instructor] It is time to get hands-on with Airbyte, but first we need to bring it into our local machine.
>
> **[0:06](https://www.linkedin.com/learning/end-to-end-data-engineering-project/deploying-airbyte-for-data-synchronization?u=76281980&t=6)** So let's clone it outside of our project repo with the following command.
>
> **[0:14](https://www.linkedin.com/learning/end-to-end-data-engineering-project/deploying-airbyte-for-data-synchronization?u=76281980&t=14)** Now that the clone has completed, the code is available in a new directory called Airbyte.
>
> **[0:20](https://www.linkedin.com/learning/end-to-end-data-engineering-project/deploying-airbyte-for-data-synchronization?u=76281980&t=20)** Let's move there.
>
> **[0:25](https://www.linkedin.com/learning/end-to-end-data-engineering-project/deploying-airbyte-for-data-synchronization?u=76281980&t=25)** And now let's awake the Airbyte platform by running the following script.
>
> **[0:34](https://www.linkedin.com/learning/end-to-end-data-engineering-project/deploying-airbyte-for-data-synchronization?u=76281980&t=34)** At this moment, you could go to Docker desktop in the images section and see how the images that constitute the platform are being fetched.
>
> **[0:43](https://www.linkedin.com/learning/end-to-end-data-engineering-project/deploying-airbyte-for-data-synchronization?u=76281980&t=43)** And after a while, if you go to the containers section, you will see the Airbyte container being created.
>
> **[0:53](https://www.linkedin.com/learning/end-to-end-data-engineering-project/deploying-airbyte-for-data-synchronization?u=76281980&t=53)** We will not go into the details of all the images that are part of the Airbyte platform, but for those of you who are interested, you can refer to Airbyte's documentation for a comprehensive understanding.
>
> **[1:06](https://www.linkedin.com/learning/end-to-end-data-engineering-project/deploying-airbyte-for-data-synchronization?u=76281980&t=66)** It may take a few minutes after you launch the script, but once all the images are in green, you can navigate to localhost:8000 in your browser to rebuild the Airbyte user interface, so let's do that.
>
> **[1:22](https://www.linkedin.com/learning/end-to-end-data-engineering-project/deploying-airbyte-for-data-synchronization?u=76281980&t=82)** And here we are in the Airbyte user interface.
>
> **[1:26](https://www.linkedin.com/learning/end-to-end-data-engineering-project/deploying-airbyte-for-data-synchronization?u=76281980&t=86)** You may be asked for a username and password the first time you log in.
>
> **[1:30](https://www.linkedin.com/learning/end-to-end-data-engineering-project/deploying-airbyte-for-data-synchronization?u=76281980&t=90)** These are included in your course handoff document.
>
> **[1:34](https://www.linkedin.com/learning/end-to-end-data-engineering-project/deploying-airbyte-for-data-synchronization?u=76281980&t=94)** Also, the first time you open the UI, you could be asked for your email.
>
> **[1:39](https://www.linkedin.com/learning/end-to-end-data-engineering-project/deploying-airbyte-for-data-synchronization?u=76281980&t=99)** As you can see, the UI is quite straightforward.
>
> **[1:43](https://www.linkedin.com/learning/end-to-end-data-engineering-project/deploying-airbyte-for-data-synchronization?u=76281980&t=103)** On the left, you will find the three main components, connections, sources, and destinations.
>
> **[1:50](https://www.linkedin.com/learning/end-to-end-data-engineering-project/deploying-airbyte-for-data-synchronization?u=76281980&t=110)** For now, there is nothing here, but in the upcoming lessons, we will set up our source and destination connectors.
>
> **[1:57](https://www.linkedin.com/learning/end-to-end-data-engineering-project/deploying-airbyte-for-data-synchronization?u=76281980&t=117)** Congrats! You have successfully set up and launched Airbyte.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (2), while, (1)
> **UI Navigation:** go to (2), navigate to (1), open the (1)
> **CLI Commands:** docker (1), find (1)
> **Prerequisites:** set up (2)
> **URLs:** [localhost:8000](https://localhost:8000) (1)
> **Ports:** :8000 (1)
> **Tools:** docker desktop (1)
> **Speakers:** - [instructor] (1)

#### Setting up sources and destinations in Airbyte
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=0)** - [Instructor] Let's now create our data source and destination connectors.
>
> **[0:04](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=4)** Navigate to the sources section where we will add our Postgres source.
>
> **[0:09](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=9)** In the search bar, start typing Postgres and click on it once you find it.
>
> **[0:15](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=15)** Now give it a name.
>
> **[0:17](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=17)** I'm going to call mine Big Star Postgres, but feel free to choose any name.
>
> **[0:25](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=25)** And now it's time to provide all the details about our Postgres database connection.
>
> **[0:31](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=31)** Please note that all of these connection details that we will enter can be found in the Inspect tab of your Postgres container in Docker Desktop.
>
> **[0:41](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=41)** Here are all the details we are entering.
>
> **[0:45](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=45)** Since we are running our Postgres database locally, the host is going to be localhost and we will leave the default port.
>
> **[0:53](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=53)** Our database name is big-star-db Our username is postgres, and our password is mysecretpassword.
>
> **[1:12](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=72)** We are going to leave the security defaults as they are and in the advanced tab, in the replication method, we are going to use logical replication.
>
> **[1:22](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=82)** Our replication slot, if you remember, is called airbyte_slot, and our publication, airbyte_publication.
>
> **[1:32](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=92)** We will leave the optional fields as they are.
>
> **[1:35](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=95)** We are now ready to set up our source.
>
> **[1:38](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=98)** After you click on set up source, Airbyte will attempt to connect to the database.
>
> **[1:43](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=103)** If there are any errors, you can double check the user, password or any other settings.
>
> **[1:53](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=113)** If everything went well, we can now go ahead and set up our destination.
>
> **[1:58](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=118)** Go to destinations and select BigQuery.
>
> **[2:03](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=123)** Now you can select a destination name.
>
> **[2:06](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=126)** I'm going to name mine Big Star Warehouse.
>
> **[2:11](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=131)** At this point, it may be useful to go to your BigQuery console to graph any of the details that we need to fill in next.
>
> **[2:19](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=139)** For example, if you would like to know your project ID, you can go to the top search bar, select your project, and then copy the ID next to it.
>
> **[2:32](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=152)** I'm going to paste my project ID now.
>
> **[2:35](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=155)** For the dataset location, I selected US for my both datasets.
>
> **[2:41](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=161)** Our default dataset ID is going to be raw_data, and the loading method is going to be standard inserts.
>
> **[2:52](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=172)** Now you need to copy the contents of the JSON file we downloaded for the Airbyte service account and add them in this field.
>
> **[2:59](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=179)** Yes, all of that JSON string.
>
> **[3:03](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=183)** So I will just copy here.
>
> **[3:08](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=188)** And now I'm pasting all the JSON string here.
>
> **[3:12](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=192)** And now, finally, let's just set up our destination.
>
> **[3:20](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=200)** Let's take a moment now to celebrate our progress.
>
> **[3:24](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=204)** We have navigated through the setting up of our Postgres resource and our BigQuery destination.
>
> **[3:30](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=210)** Each step, configuration and click has brought us closer to our goal of creating a data flow.
>
> **[3:37](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=217)** Now we are ready to connect our source to our destination.
>
> **[3:40](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=220)** Let's do that in the next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), finally, (1)
> **UI Navigation:** click on (2), go to (2), navigate to (1)
> **Prerequisites:** set up (4)
> **Code Identifiers:** airbyte_slot (1), airbyte_publication (1), raw_data (1)
> **Env Vars:** json (3)
> **CLI Commands:** find (1), docker (1)
> **Cross-References:** in the next (1)
> **Tools:** docker desktop (1)

#### Establishing connections in Airbyte
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=0)** - [Instructor] The moment we have been waiting for is finally here.
>
> **[0:04](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=4)** We are about to set up a data highway from our Postgres database into our data warehouse.
>
> **[0:10](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=10)** Kickstart this journey by heading over to connections, if you are not already there, and then click on create your first connection.
>
> **[0:20](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=20)** Then select your source, your destination, and let Airbyte fetch the schema from our source database.
>
> **[0:28](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=28)** Then you will be presented with this connection settings page.
>
> **[0:32](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=32)** The first thing we need to do here is choose our application frequency.
>
> **[0:36](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=36)** For our current project, we will stick with manual, leaving the scheduling to our future orchestrator.
>
> **[0:43](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=43)** The destination namespace in this context is the data set in BigQuery, so we will leave it as default.
>
> **[0:51](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=51)** Airbyte provides the option to add a prefix to our tables in the destination.
>
> **[0:57](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=57)** Given that our data will be stored in a specific dataset called raw data, we are good to proceed without a prefix.
>
> **[1:05](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=65)** Then we will opt to ignore the detect and propagate schema changes option for now, as we don't expect any changes in our Postgres database.
>
> **[1:14](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=74)** The options listed here are quite useful, though.
>
> **[1:17](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=77)** Manually handling schema changes in a production setting can be quite tricky.
>
> **[1:22](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=82)** Now let's go to one of the most crucial parts of the connection setup, the streams.
>
> **[1:27](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=87)** Here we can select each table individually, but for our project, we will choose to sync them all.
>
> **[1:36](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=96)** Next, we need to define the sync mode.
>
> **[1:39](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=99)** Here we see several options, like incremental deduped+history, full refresh override, incremental append, and so on.
>
> **[1:50](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=110)** This may initially seem complex, but it's quite straightforward.
>
> **[1:54](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=114)** The first part refers to the source.
>
> **[1:57](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=117)** Are we syncing all the data, or just the new and appended roles?
>
> **[2:01](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=121)** In other words, the increments.
>
> **[2:04](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=124)** The second part relates to the destination.
>
> **[2:07](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=127)** Are we appending or overriding the data?
>
> **[2:10](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=130)** In our case, the choice becomes easy because we are using logical replication.
>
> **[2:15](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=135)** This means that all changes in the source tables can be detected so we can always use incremental extraction.
>
> **[2:23](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=143)** To make our life easier, we can go for incremental deduped+history, so we get final tables with no duplicates plus history tables.
>
> **[2:33](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=153)** The primary keys and the cursor fields are automatically identified by Airbyte, so let's leave everything as is.
>
> **[2:42](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=162)** Finally, let's select normalized traveler data.
>
> **[2:47](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=167)** Otherwise, we would see our data as a JSON blob in the destination, and that's not necessarily what we want.
>
> **[2:54](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=174)** More details on this later.
>
> **[2:57](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=177)** Now, let the magic happen.
>
> **[3:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=180)** Click on set up connection, And there you have it.
>
> **[3:05](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=185)** You have created your first connection.
>
> **[3:07](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=187)** Having created this pathway, we are all set to embark on our first data synchronization and then check the data in BigQuery.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), default. (1), override (1), case, (1), finally, (1)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** refers to (1), in other words (1), means that (1)
> **Prerequisites:** set up (2), setup (1)
> **CLI Commands:** make (1)
> **Env Vars:** json (1)
> **Speakers:** - [instructor] (1)

#### Synchronizing and navigating through data
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=0)** - [Instructor] It is time to run your first data sync.
>
> **[0:03](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=3)** To do that, you just have to click on the sync now button in the status section of your connection.
>
> **[0:10](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=10)** Now sit back and watch as your data makes its journey from source to destination.
>
> **[0:15](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=15)** Take a short break and give the job a few minutes to complete.
>
> **[0:19](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=19)** In my experience, it can take anywhere from five to 10 minutes for a job like this to finish.
>
> **[0:25](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=25)** If you're go into the job history tab and then you select view logs, you can monitor what is happening behind the scenes.
>
> **[0:34](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=34)** You can pause the video here and come back as soon as the first thing declares success.
>
> **[0:40](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=40)** Now it is time to take a look into the tables created in our BigQuery data warehouse.
>
> **[0:46](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=46)** Expand the raw_data dataset and you will notice several new tables.
>
> **[0:51](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=51)** You will find some tables identified with the naming convention airbyte_raw and the stream name.
>
> **[0:57](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=57)** These tables are like step one for Airbyte and the first ones that get loaded into the warehouse every time we run a sync.
>
> **[1:05](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=65)** Let's preview the content in one of these raw tables.
>
> **[1:10](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=70)** You will notice that there are two metadata columns, airbyte_ab_id, which is a unique identifier that Airbyte assigns to be true, and the Airbyte_emitted_at, which marks the timestamp when the record was dispatched.
>
> **[1:24](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=84)** And finally, we have the Airbyte data, which contains the actual data in JSON format.
>
> **[1:31](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=91)** The Airbyte normalization, which we selected in our connection configuration, creates another set of tables transforming the JSON blob into a format that matches our destination.
>
> **[1:43](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=103)** These are our deduped tables and the ones we will be using for the rest of the project.
>
> **[1:48](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=108)** Let's preview this data.
>
> **[1:53](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=113)** As you can see, the JSON is transforming two columns, as we would expect.
>
> **[2:04](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=124)** Some metadata columns are also added to these tables, such as the airbyte_ab_id, the airbyte_emitted_at, airbyte_normalized_at and airbyte_tablename_hashid.
>
> **[2:17](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=137)** This metadata is useful for Airbyte internal functioning for the most part.
>
> **[2:24](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=144)** Lastly, we have the tables ending with SCD.
>
> **[2:28](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=148)** SCD stands for slowly changing dimensions.
>
> **[2:32](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=152)** In other words, these are the history keepers.
>
> **[2:36](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=156)** Remember our sync mode selection was incremental, deduped and history?
>
> **[2:41](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=161)** Airbyte has delivered as promised, providing a deduped and a history table.
>
> **[2:47](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=167)** We will not be using the history table for this project, but this can be quite useful in some cases.
>
> **[2:54](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=174)** Now, I encourage you to interact with the data, run some simple queries, and just establish a stronger bond With these tables.
>
> **[3:03](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=183)** In the upcoming lessons, we will transform this raw data into a cleaner and structured format.

> [!info]- Semantic Content
>
> **Code Identifiers:** airbyte_ab_id (2), raw_data (1), airbyte_raw (1), airbyte_emitted_at (1), airbyte_normalized_at (1)
> **Env Vars:** json (3), scd (2)
> **Code Keywords:** let (2), finally, (1)
> **Definitions:** is a  (1), stands for (1), in other words (1)
> **CLI Commands:** find (1)
> **UI Navigation:** click on (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 3. Starting Data Transformation and Modeling

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction to data modeling with dbt
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=0)** - [Instructor] Data modeling is like putting together a puzzle.
>
> **[0:03](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=3)** It converts messy, disorganized data into an easy to understand format.
>
> **[0:09](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=9)** Take the Big Star Collectibles marketing team, for instance.
>
> **[0:12](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=12)** They want to know their customers better, but the data is scattered across different tables in a Postgres database.
>
> **[0:20](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=20)** That's why we come to help.
>
> **[0:21](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=21)** We will create a table that joins all the necessary customer info, plus some calculated columns in BigQuery.
>
> **[0:28](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=28)** Analysts can then easily study the data to get insights about customer habits.
>
> **[0:34](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=34)** Now, navigating the world of data modeling may sound like a daunting task, but don't worry.
>
> **[0:40](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=40)** There's a secret weapon used by data and analytics engineers around the world, dbt, standing for data build tool, is a game changing open source tool that has simplified our approach to data within warehouses.
>
> **[0:55](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=55)** It is based on Python and it integrates with many modern data ecosystems.
>
> **[1:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=60)** dbt empowers users to create transformations using SQL.
>
> **[1:05](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=65)** Additionally, the SQL files can incorporate Jinja, a lightweight templating language.
>
> **[1:12](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=72)** With Jinja, you can use control structures in your queries, such as if statements and for loops.
>
> **[1:19](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=79)** This integration makes the sharing of repeated SQL patterns easier through macros, enhancing reusability and efficiency.
>
> **[1:28](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=88)** Let's go over the main features of dbt.
>
> **[1:31](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=91)** Models are the core concept of dbt.
>
> **[1:33](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=93)** They are SQL queries that define the transformation logic and structure of your data.
>
> **[1:39](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=99)** They serve as the blueprints for creating tables or views in your data warehouse.
>
> **[1:44](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=104)** dbt has built-in capabilities to test your data transformations, ensuring data accuracy and consistency.
>
> **[1:51](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=111)** With dbt, you can automate documentation of your data models, making it easier for users to understand the data structure and lineage.
>
> **[2:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=120)** dbt integrates with version control systems like Git, ensuring that changes to your data models are tracked and managed effectively.
>
> **[2:08](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=128)** Now, let's go deeper into one of the main concepts of dbt, models.
>
> **[2:13](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=133)** Models are essentially SQL statements.
>
> **[2:17](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=137)** They're stored as SQL files under the models directory.
>
> **[2:21](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=141)** Each model in dbt has a one-to-one relationship with a table or view in the data warehouse.
>
> **[2:27](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=147)** This means that for every SQL file in your model directory, there is a corresponding table or view that's materialized in your warehouse.
>
> **[2:37](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=157)** So what does it mean to materialize a model?
>
> **[2:40](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=160)** When you execute the dbt run command, dbt takes your model, wraps the select statement in DDL or DML and materializes it in the warehouse.
>
> **[2:51](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=171)** DDL and DML stand for data definition language and data manipulation language, respectively.
>
> **[3:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=180)** In this sense, dbt serves as the interface between your code, which we store and manage in a Git repo, and your data.
>
> **[3:08](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=188)** Don't worry if this seems abstract now, we will put it into practice.
>
> **[3:12](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=192)** As we dive deeper into our data transformation with dbt, it is important to understand the two primary ways to use this tool, dbt CLI and dbt Cloud.
>
> **[3:24](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=204)** dbt CLI is a common line tool that you can run locally, allowing you full control over your environment and processes.
>
> **[3:33](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=213)** On the other hand, dbt Cloud is a hosted version that offers an online ID and an interface to run dbt commands.
>
> **[3:42](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=222)** For this project, we will be using the dbt CLI.
>
> **[3:46](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=226)** In summary, dbt brings software engineering best practices to the data analytics world, and that's why it is considered a fundamental piece of the modern data stack.
>
> **[3:57](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=237)** I encourage you to join me and put this tool into action in the next lesson.

> [!info]- Semantic Content
>
> **Env Vars:** sql (7), cli (3), ddl (2), dml (2)
> **Code Keywords:** let (2), interface (2), abstract (1)
> **Definitions:** is a  (4), means that (1)
> **CLI Commands:** git (2), python (1)
> **Analogies:** for instance (1), such as (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Understanding the structure of a dbt project
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=0)** - [Instructor] How do we structure our dbt project to take advantage of dbt's modular design?
>
> **[0:05](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=5)** We will create a model for each information step in our data pipeline.
>
> **[0:09](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=9)** This structure comes with several benefits.
>
> **[0:12](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=12)** First, it reduces redundancy.
>
> **[0:15](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=15)** Models can be used and reused across different dbt projects.
>
> **[0:19](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=19)** So rather than creating new code each time, we can leverage what we already have, making us more efficient.
>
> **[0:26](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=26)** Second, it reduces complexity.
>
> **[0:29](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=29)** It lets us break down complex area products into manageable pieces.
>
> **[0:33](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=33)** To keep this neat modular system in check, dbt recommends a well-thought out set of naming conventions that represent each stage of the data transformation journey.
>
> **[0:43](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=43)** Sources are the raw data tables fresh from the EL tool.
>
> **[0:47](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=47)** In our case Airbyte.
>
> **[0:49](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=49)** They are like the ingredients in a recipe, untouched and ready for prep.
>
> **[0:53](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=53)** Staging is where we clean and standardize our source data.
>
> **[0:57](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=57)** It's like prepping your ingredients before cooking.
>
> **[1:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=60)** Each staging model is directly linked to a source table.
>
> **[1:03](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=63)** Intermediate models are the chefs of the process.
>
> **[1:07](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=67)** They sit between the staging and final models working on further transformations.
>
> **[1:12](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=72)** Marts models produce our final data to be used for analysis and visualization.
>
> **[1:18](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=78)** At the same time, the marts layer often contains two different types of models.
>
> **[1:23](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=83)** Fact models capture the events or transactions happening in the business, like the orders, they're updated often and quickly, much like a bustling restaurant kitchen.
>
> **[1:34](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=94)** Dimensions, on the other hand, represent business entities that don't change quite as often, like products or customers.
>
> **[1:42](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=102)** We are going to assemble our dbt project following these conventions.
>
> **[1:47](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=107)** Our challenge?
>
> **[1:48](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=108)** Transforming our Big Star Collectibles' e-commerce transactional data, by creating source, staging, and mart models into a structure that's ready for primetime analysis and reporting.
>
> **[2:01](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=121)** To help us visualize this process, dbt projects employ a Directed Acyclic Graph, DAG.
>
> **[2:08](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=128)** A DAG is like a map that shows the flow and dependencies of your data transformations from source to final models.
>
> **[2:16](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=136)** Are you ready for creating your first dbt model?

> [!info]- Semantic Content
>
> **Env Vars:** dag (2)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### Initiating your dbt project
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=0)** - [Instructor] Now that you have some context on dbt, let's go ahead and set up our project.
>
> **[0:05](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=5)** But just a quick note before that, your repo has already been initialized for dbt, meaning it has all the files that it needs to get started.
>
> **[0:15](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=15)** These files get created when you execute dbt init.
>
> **[0:18](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=18)** The dbt init command also creates a profiles.yml file.
>
> **[0:23](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=23)** This file describes a connection to our data platform and is one of the most important files in a dbt project.
>
> **[0:29](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=29)** In this case, I have moved that file into the config directory to have it handy.
>
> **[0:35](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=35)** Now let's go to Visual Studio Code to set up our project.
>
> **[0:39](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=39)** Let's start by opening the profiles file.
>
> **[0:42](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=42)** Since this file tells dbt how to connect to the data platform, in this case BigQuery, it may contain information that we don't want to version control.
>
> **[0:52](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=52)** Because of that, we are going to use environment variables.
>
> **[0:56](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=56)** As you can see, this profiles file is already prepared for that.
>
> **[1:01](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=61)** Go to the terminal and create the following variables based on your BigQuery project and data set.
>
> **[1:14](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=74)** First, we need to provide the dataset dbt will be working with, in this case it's called Transform Data.
>
> **[1:24](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=84)** Then the key file path.
>
> **[1:26](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=86)** It should point to where you start the JSON key for the dbt service account.
>
> **[1:34](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=94)** After that, the data set location, in this case, it is the US.
>
> **[1:41](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=101)** And lastly, we indicate the project ID.
>
> **[1:45](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=105)** Remember, you can get this from your Google Cloud console.
>
> **[1:49](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=109)** Just remember, these variables are only accessible from your virtual environment, so make sure they are set when you execute anything from now on, then we need one last variable to tell dbt where to locate the profiles file.
>
> **[2:03](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=123)** This should point to the config directory.
>
> **[2:06](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=126)** To get this path, you can right click on the config directory and select Copy Path.
>
> **[2:19](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=139)** And then paste it as a value.
>
> **[2:24](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=144)** Now let's verify the connection to our data warehouse using the dbt debug command.
>
> **[2:35](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=155)** If everything is set up correctly, you should see a message saying that all checks passed.
>
> **[2:41](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=161)** If you are not using BigQuery, you can refer to the dbt documentation to learn how to set up your profiles.yml file.
>
> **[2:49](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=169)** You may also need to install a different dbt plugin for your specific data platform.
>
> **[2:55](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=175)** And that's it.
>
> **[2:56](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=176)** We have now initialized our dbt project and set up the connection to our data warehouse.
>
> **[3:01](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=181)** We are ready to start transforming data with dbt.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (2)
> **Prerequisites:** set up (5), install (1)
> **File Paths:** profiles.yml (2)
> **Tools:** visual studio (1), terminal (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Env Vars:** json (1)
> **Speakers:** - [instructor] (1)

#### Configuring data sources in dbt
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=0)** - [Instructor] In dbt, sources represent the raw data that is loaded into your data platform.
>
> **[0:05](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=5)** Sources can be thought of as a starting point for dbt transformations.
>
> **[0:10](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=10)** Without creating sources in dbt, you can refer to tables with an explicit table name, such as raw_data.customers.
>
> **[0:19](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=19)** However, setting up sources in dbt and referring to them using the source function provides a level of abstraction that comes with several advantages.
>
> **[0:30](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=30)** Some of the advantages are the following: single configuration point.
>
> **[0:35](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=35)** Multiple tables from a single source can be configured in one place, decentralizes configuration and makes maintenance easier.
>
> **[0:44](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=44)** Better visibility.
>
> **[0:46](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=46)** Sources are identified as green nodes in the lineage graph, which makes it easier to track and understand data lineage.
>
> **[0:54](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=54)** Data freshness.
>
> **[0:55](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=55)** With the dbt source freshness command, you can check the freshness of your raw tables.
>
> **[1:01](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=61)** This helps ensure that your transformations are always working with up-to-date data.
>
> **[1:06](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=66)** Now let's create our sources.
>
> **[1:09](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=69)** Inside the models folder, create a staging folder
>
> **[1:20](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=80)** and inside the staging folder, create a file called src_big_star_db.yml.
>
> **[1:30](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=90)** We will create our sources in this file.
>
> **[1:33](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=93)** The sources will be the normalized tables loaded by Airbyte in our raw_data dataset.
>
> **[1:39](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=99)** Sources in dbt are defined in YAML files, nested under the sources key.
>
> **[1:45](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=105)** This is how your YAML file may look.
>
> **[1:48](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=108)** In this case, name is the name of the source.
>
> **[1:52](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=112)** Database is the name of the project in BigQuery.
>
> **[1:56](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=116)** Schema is the name of the dataset in the project.
>
> **[1:59](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=119)** And lastly, we list the tables under the specified dataset that we want to include as part of our sources.
>
> **[2:06](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=126)** This configuration will point dbt to the right location in BigQuery for your source data.
>
> **[2:12](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=132)** With sources configured in your dbt project, you now have a more maintainable, invisible way to manage your raw data tables.
>
> **[2:20](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=140)** Not only does this help in keeping track of your data lineage, but it also enables you to check data freshness, ensuring your transformations are up to date.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1), let (1), case, (1)
> **Code Identifiers:** raw_data (2), src_big_star_db (1)
> **Env Vars:** yaml (2)
> **File Paths:** src_big_star_db.yml (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Add a freshness check
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-a-freshness-check?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-a-freshness-check?u=76281980&t=0)** - [Instructor] Now your task is to add a freshness check to your sources in dbt.
>
> **[0:12](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-a-freshness-check?u=76281980&t=12)** The aim of a freshness check is to make sure that you are working with fresh data.
>
> **[0:17](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-a-freshness-check?u=76281980&t=17)** If the data in your source is too old, the freshness check will fail or show a warning, signaling a potential issue in your data pipeline.
>
> **[0:25](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-a-freshness-check?u=76281980&t=25)** Of course, this doesn't apply to our current pipeline as it is since our Postgres database is not undergoing any changes and our Airbyte data synchronization is not periodically running.
>
> **[0:37](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-a-freshness-check?u=76281980&t=37)** But I thought it was a nice challenge to emulate what you would do in an actual production pipeline.
>
> **[0:42](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-a-freshness-check?u=76281980&t=42)** So for all the tables in your raw_data source, configure a freshness check that will show a warning if the data is older than 24 hours.
>
> **[0:51](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-a-freshness-check?u=76281980&t=51)** Feel free to check the dbt documentation for this and then come back to find out how I did that in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Warnings:** warning (2)
> **Code Identifiers:** raw_data (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Add a freshness check
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-freshness-check?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-freshness-check?u=76281980&t=0)** - [Instructor] To solve this challenge, you should have added a freshness property in your src_big_star_db.yml file similar to this.
>
> **[0:15](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-freshness-check?u=76281980&t=15)** This configuration ensures that if the data in neither table is older than 24 hours, the freshness check will show a warning.
>
> **[0:24](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-freshness-check?u=76281980&t=24)** I am using the _airbyte_normalized_at times time column to verify freshness.
>
> **[0:29](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-freshness-check?u=76281980&t=29)** After adding the freshness key, you can execute the dbt source freshness command.
>
> **[0:37](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-freshness-check?u=76281980&t=37)** As you can see, I am getting warnings here.
>
> **[0:40](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-freshness-check?u=76281980&t=40)** The last time I ran the Airbyte sync was more than two days ago.
>
> **[0:44](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-freshness-check?u=76281980&t=44)** Hence, the check is working as expected.
>
> **[0:47](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-freshness-check?u=76281980&t=47)** This feature is quite relevant for a production pipeline.
>
> **[0:51](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-freshness-check?u=76281980&t=51)** The source data is loaded by an external system, Airbyte, but with this check, you can have visibility on the extract and load processes from dbt.
>
> **[1:01](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-freshness-check?u=76281980&t=61)** If there was a problem with the extract and load and the data was not flowing, you could investigate the issue and avoid working with outdated information.

> [!info]- Semantic Content
>
> **File Paths:** src_big_star_db.yml (1)
> **Code Keywords:** this. (1)
> **Code Identifiers:** src_big_star_db (1)
> **Analogies:** similar to (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Data Transformation and Modeling

> [↑ Back to Table of Contents](#table-of-contents)

#### Creating and customizing your dbt models
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/creating-and-customizing-your-dbt-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/creating-and-customizing-your-dbt-models?u=76281980&t=0)** - [Instructor] It is time to create our staging and marts models.
>
> **[0:03](https://www.linkedin.com/learning/end-to-end-data-engineering-project/creating-and-customizing-your-dbt-models?u=76281980&t=3)** We will create two staging and one marts model.
>
> **[0:07](https://www.linkedin.com/learning/end-to-end-data-engineering-project/creating-and-customizing-your-dbt-models?u=76281980&t=7)** For now, let's just focus on the creation of these models.
>
> **[0:11](https://www.linkedin.com/learning/end-to-end-data-engineering-project/creating-and-customizing-your-dbt-models?u=76281980&t=11)** I will provide a detailed explanation of what we did in the upcoming lesson, so don't worry if things seem to be going a bit too fast for now, everything will be clear later.
>
> **[0:22](https://www.linkedin.com/learning/end-to-end-data-engineering-project/creating-and-customizing-your-dbt-models?u=76281980&t=22)** In the staging directory, let's create a file called stg_customers.sql.
>
> **[0:33](https://www.linkedin.com/learning/end-to-end-data-engineering-project/creating-and-customizing-your-dbt-models?u=76281980&t=33)** And then let's add the following SQL query.
>
> **[0:38](https://www.linkedin.com/learning/end-to-end-data-engineering-project/creating-and-customizing-your-dbt-models?u=76281980&t=38)** Now create a file call stg_orders.sql under the same directory.
>
> **[0:48](https://www.linkedin.com/learning/end-to-end-data-engineering-project/creating-and-customizing-your-dbt-models?u=76281980&t=48)** In this file, we will add the following query.
>
> **[0:52](https://www.linkedin.com/learning/end-to-end-data-engineering-project/creating-and-customizing-your-dbt-models?u=76281980&t=52)** Now it is time to create our marts model.
>
> **[0:54](https://www.linkedin.com/learning/end-to-end-data-engineering-project/creating-and-customizing-your-dbt-models?u=76281980&t=54)** In your model's directory, create a new directory named marts,
>
> **[1:05](https://www.linkedin.com/learning/end-to-end-data-engineering-project/creating-and-customizing-your-dbt-models?u=76281980&t=65)** and inside of that directory, create a file called dim_customers.sql.
>
> **[1:11](https://www.linkedin.com/learning/end-to-end-data-engineering-project/creating-and-customizing-your-dbt-models?u=76281980&t=71)** dim in this case stands for dimensions,
>
> **[1:20](https://www.linkedin.com/learning/end-to-end-data-engineering-project/creating-and-customizing-your-dbt-models?u=76281980&t=80)** and this is the SQL query for this model.
>
> **[1:22](https://www.linkedin.com/learning/end-to-end-data-engineering-project/creating-and-customizing-your-dbt-models?u=76281980&t=82)** Lastly, let's configure our materializations.
>
> **[1:26](https://www.linkedin.com/learning/end-to-end-data-engineering-project/creating-and-customizing-your-dbt-models?u=76281980&t=86)** Go to your dbt_project.yaml file and add the following options.
>
> **[1:33](https://www.linkedin.com/learning/end-to-end-data-engineering-project/creating-and-customizing-your-dbt-models?u=76281980&t=93)** This will configure the models in the staging directory to be materialized as views, and the marts directory to be materialized as tables.
>
> **[1:42](https://www.linkedin.com/learning/end-to-end-data-engineering-project/creating-and-customizing-your-dbt-models?u=76281980&t=102)** And that's it, we have now created our first set of dbt models.
>
> **[1:47](https://www.linkedin.com/learning/end-to-end-data-engineering-project/creating-and-customizing-your-dbt-models?u=76281980&t=107)** Meet me in the next lesson to take a closer look at what we just did and also execute our transformation pipeline.

> [!info]- Semantic Content
>
> **File Paths:** stg_customers.sql (1), stg_orders.sql (1), dim_customers.sql (1), dbt_project.yaml (1)
> **Code Keywords:** let (4)
> **Code Identifiers:** stg_customers (1), stg_orders (1), dim_customers (1), dbt_project (1)
> **Env Vars:** sql (2)
> **Prerequisites:** configure (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Definitions:** stands for (1)

#### Reviewing and executing dbt
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=0)** - [Instructor] Let's recap everything we have done with DVT and take a closer look at the SQL queries that form our models.
>
> **[0:07](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=7)** In the previous lesson, we began by creating staging models in the staging directory.
>
> **[0:14](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=14)** The purpose of the staging models is to pull our raw data and put it into a more workable format.
>
> **[0:20](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=20)** The models, staging customers and staging orders are essentially selecting a subset of columns from our source tables, raw data customers, and raw data orders respectively.
>
> **[0:33](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=33)** For example, in our staging customers model, we are not propagating the customer name and last name.
>
> **[0:41](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=41)** This could be useful for privacy reasons.
>
> **[0:44](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=44)** The staging models are also the right place to make small transformations, like casting.
>
> **[0:50](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=50)** For example, we could cast the daytime columns here to timestamped if we would like to.
>
> **[0:57](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=57)** You may have noticed that we are using the source function to refer to the source table.
>
> **[1:02](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=62)** Using this function is better than directly naming these tables because it keeps all configurations in one place.
>
> **[1:09](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=69)** Imagine that we are using the order source data in other models and we need to update something in the source.
>
> **[1:16](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=76)** In that case, we only need to go to our src_big_star_db.yml file to make those changes.
>
> **[1:24](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=84)** And as you saw in our previous challenge, with sources, we can make sure we are working with fresh data in all of our models.
>
> **[1:32](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=92)** Next, we created the match model dim_customers under the marts directory.
>
> **[1:40](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=100)** The purpose of this model is to transform our stage data into a format ready for analysis.
>
> **[1:46](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=106)** Joining data from our two stage models and adding calculated fields like first_order_date, most_recent_order_date, and number_of_orders.
>
> **[1:58](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=118)** Then we set the materializations for our models in the DVT project file.
>
> **[2:05](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=125)** Materializations determine how our transformations should be physically represented in our data platform.
>
> **[2:12](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=132)** With views for our staging models and tables for our mart models, we can achieve a balance between performance and resource usage.
>
> **[2:22](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=142)** Now let's see what we have done in action by executing our first DVT run.
>
> **[2:33](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=153)** Remember to execute this from the DVT transformation directory.
>
> **[2:39](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=159)** And there you have it, our first successful run.
>
> **[2:43](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=163)** Now let's navigate to our data warehouse and check the transformed_data dataset.
>
> **[3:02](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=182)** As you can see, DVT has materialized our models.
>
> **[3:06](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=186)** Here we see a view for each of our staging models and a table for our marts model.
>
> **[3:13](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=193)** Let's just quickly preview our dim_customers table.
>
> **[3:25](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=205)** And congrats.
>
> **[3:27](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=207)** You are well on your way to mastering data transformation with DVT, but the learning doesn't stop here.
>
> **[3:34](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=214)** Up next, we will explore how to ensure the validity of our data with DVT testing.

> [!info]- Semantic Content
>
> **Env Vars:** dvt (7), sql (1)
> **Code Keywords:** let (4), function (2), case, (1)
> **Code Identifiers:** dim_customers (2), src_big_star_db (1), first_order_date (1), most_recent_order_date (1), number_of_orders (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (2), imagine (1)
> **File Paths:** src_big_star_db.yml (1)
> **Cross-References:** as you saw (1)
> **UI Navigation:** navigate to (1)

#### Securing your data with dbt tests
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=0)** - I remember not too long ago, I was working on a project to enhance a legacy data pipeline, and our team was facing all sorts of challenges from large data sets to super complex SQL queries.
>
> **[0:14](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=14)** Despite our best efforts, we and sometimes our stakeholders, were finding inconsistencies in the data almost on a daily basis.
>
> **[0:24](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=24)** This highlighted for us the importance of testing in our data pipelines.
>
> **[0:29](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=29)** Just as software engineering highlights the importance of unit integration and end-to-end testing, we should apply the same to our data projects.
>
> **[0:39](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=39)** Especially when we have tools like dbt, which make it easy for us to ensure the validity and accuracy of our data.
>
> **[0:48](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=48)** In dbt, tests are statements that are run against your materialized models, confirming they comply with your assertions.
>
> **[0:56](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=56)** There are two primary types of tests in dbt.
>
> **[0:59](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=59)** Generic tests are written in YAML and return the number of records that do not meet your assertions.
>
> **[1:05](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=65)** They run on specific columns in a model.
>
> **[1:08](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=68)** Singular tests are specific queries.
>
> **[1:11](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=71)** These queries are run on the entire model.
>
> **[1:14](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=74)** dbt comes with four generic built-in tests.
>
> **[1:18](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=78)** Unique tests ensure every value in a column is unique.
>
> **[1:21](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=81)** Similarly, Not_null tests confirm every value in a column is not null.
>
> **[1:27](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=87)** Accepted_values test make sure every value in a column equals a value in a provided list.
>
> **[1:33](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=93)** And finally, relationship tests ensure every value in a column exists in a column, in another model.
>
> **[1:40](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=100)** These are the type of tests we will be exploring.
>
> **[1:43](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=103)** Now, let's go to Visual Studio Code and write some tests for our dbt project.
>
> **[1:49](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=109)** Start by creating a file called staging big star db dot yaml inside of the staging directory.
>
> **[1:58](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=118)** In this file, we are going to add unique and not_null test to the primary case of each of our staging models.
>
> **[2:06](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=126)** And now let's see this test in action.
>
> **[2:09](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=129)** Run the command dbt test in your terminal.
>
> **[2:16](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=136)** And all green, perfect.
>
> **[2:18](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=138)** Next, let's add an accepted values test to the order status column in our staging orders model.
>
> **[2:25](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=145)** But before doing so, let's see what unique values we have in our data.
>
> **[2:29](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=149)** Let's go to the orders raw data and get the unique values of the status column.
>
> **[2:39](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=159)** Here we need to select the distinct status and we can remove the rest of the query that Bitquery suggests for us.
>
> **[2:49](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=169)** Now let's click on run.
>
> **[2:52](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=172)** And now you should have a list of unique status values.
>
> **[2:56](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=176)** Make sure to copy those.
>
> **[2:58](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=178)** And now let's send the accepted values test.
>
> **[3:03](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=183)** Once again, run the dbt test command.
>
> **[3:11](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=191)** And there you go, all green for now.
>
> **[3:14](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=194)** Finally, let's see what happens when a test fails.
>
> **[3:18](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=198)** This can be an important learning experience.
>
> **[3:21](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=201)** Temporarily remove the unavailable value from the list of values.
>
> **[3:28](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=208)** And don't forget to save.
>
> **[3:31](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=211)** Let's dbt test again.
>
> **[3:37](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=217)** As you can see, dbt provides useful feedback when a test fails.
>
> **[3:42](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=222)** If this was a production pipeline and all of a sudden we start receiving invalid status values, which in fact happens, we will be notified right away.
>
> **[3:53](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=233)** Now, let's not forget to add back the unavailable value.
>
> **[3:57](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=237)** By writing and running this test, you are ensuring your data behaves the way you expect it to, and that's a superpower in data engineering.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), finally, (2), super (1)
> **UI Navigation:** go to (2), select the (1), click on (1)
> **CLI Commands:** make (3)
> **Env Vars:** sql (1), yaml (1)
> **Tools:** visual studio (1), terminal (1)
> **Best Practices:** make sure to (1), don't forget (1)
> **Code Identifiers:** not_null (1)
> **Speakers:** - i (1)

#### Challenge: Add tests to the Marts model
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-tests-to-the-marts-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-tests-to-the-marts-model?u=76281980&t=0)** - [Narrator] Now is your turn again.
>
> **[0:09](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-tests-to-the-marts-model?u=76281980&t=9)** Your task is to add more tests to your models.
>
> **[0:13](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-tests-to-the-marts-model?u=76281980&t=13)** Add a relationship tests to the stg_orders.
>
> **[0:15](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-tests-to-the-marts-model?u=76281980&t=15)** Add unique and not_null tests to your dim_customers model.
>
> **[0:19](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-tests-to-the-marts-model?u=76281980&t=19)** Let me describe the challenge in more detail.
>
> **[0:22](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-tests-to-the-marts-model?u=76281980&t=22)** For the stg_orders model, you should check that there is referential integrity with the customer ID column in the stg_customers model.
>
> **[0:30](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-tests-to-the-marts-model?u=76281980&t=30)** And for the dim_customers model, add a unique test for the customer_id column.
>
> **[0:36](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-tests-to-the-marts-model?u=76281980&t=36)** And also a not_null test for the customer_id, email, city, and country.
>
> **[0:42](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-tests-to-the-marts-model?u=76281980&t=42)** Remember that you can always check the DBT documentation.
>
> **[0:45](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-tests-to-the-marts-model?u=76281980&t=45)** And then, come back here to compare your test with mine in the next video.

> [!info]- Semantic Content
>
> **Code Identifiers:** stg_orders (2), not_null (2), dim_customers (2), customer_id (2), stg_customers (1)
> **Code Keywords:** let (1)
> **Env Vars:** dbt (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Add tests to the Marts model
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-tests-to-the-marts-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-tests-to-the-marts-model?u=76281980&t=0)** - [Instructor] Time to check your tests.
>
> **[0:09](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-tests-to-the-marts-model?u=76281980&t=9)** Let me walk you through what I did to solve this challenge.
>
> **[0:13](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-tests-to-the-marts-model?u=76281980&t=13)** I started by adding a relationship test into the staging big star db yml file, under the staging orders model.
>
> **[0:21](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-tests-to-the-marts-model?u=76281980&t=21)** This will ensure that the customer ID column always contains a valid ID existing in the staging customers table.
>
> **[0:28](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-tests-to-the-marts-model?u=76281980&t=28)** Then I created a new file called marts big star db dot yml within the marts directory.
>
> **[0:36](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-tests-to-the-marts-model?u=76281980&t=36)** And this is how it looks.
>
> **[0:37](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-tests-to-the-marts-model?u=76281980&t=37)** It is quite similar to what we did at the beginning to test the staging models.
>
> **[0:42](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-tests-to-the-marts-model?u=76281980&t=42)** You can check if your tests are correct by executing the dbt test command like we did before.
>
> **[0:51](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-tests-to-the-marts-model?u=76281980&t=51)** If any test fails at this point, carefully check your models and the test configurations to find and fix any issues.
>
> **[1:02](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-tests-to-the-marts-model?u=76281980&t=62)** And there you go.
>
> **[1:03](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-tests-to-the-marts-model?u=76281980&t=63)** For me, all tests are completed in green.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Automating documentation in dbt
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=0)** - Documentation may not be as exciting as coding or modeling, but let me tell you, it is a hidden treasure that enables efficient and effective teamwork in analytics.
>
> **[0:12](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=12)** Imagine that you are a newcomer into a team and you are handed a DBT project.
>
> **[0:18](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=18)** You open it up and it's just code, just a vast sea of SQL files and you are supposed to navigate that.
>
> **[0:27](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=27)** Sounds daunting, right?
>
> **[0:29](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=29)** But what if there is a map?
>
> **[0:32](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=32)** Well-structured and detailed documentation acts like that map.
>
> **[0:37](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=37)** One tricky part about documentation is that it tends to lag behind code.
>
> **[0:42](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=42)** DBT brings coding and documentation closer together to make your life easier.
>
> **[0:47](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=47)** For example, in DBT, your SQL models can come together with YAML files that document them.
>
> **[0:54](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=54)** This type coupling means that your code and your documentation can evolve with one another and remove the usual disconnect.
>
> **[1:03](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=63)** It is time to document our models.
>
> **[1:06](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=66)** Let's start with the staging ones.
>
> **[1:08](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=68)** Open your staging big star db YAML file.
>
> **[1:12](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=72)** Now add a description for the customer ID column in the staging customer's model.
>
> **[1:17](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=77)** It is as simple as adding a description key under that column.
>
> **[1:22](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=82)** Let's do the same for the staging on this model and document all the columns we have here.
>
> **[1:41](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=101)** And there you go.
>
> **[1:43](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=103)** Now all of these columns in our models also have a description.
>
> **[1:47](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=107)** Feel free to add the rest of the columns that belong to these models and let's see your work in action.
>
> **[1:52](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=112)** Go ahead and generate the documentation by running DBT docs generate command in your terminal.
>
> **[2:01](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=121)** And then execute the DBT docs serve command.
>
> **[2:06](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=126)** This command starts a web server on port 8080 to serve your documentation locally and then opens the documentation site in your browser.
>
> **[2:15](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=135)** And this is our documentation page.
>
> **[2:18](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=138)** Let's go to our staging models.
>
> **[2:25](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=145)** And here we can see a full picture of our model and we can also see the description for the customer ID column that we just added.
>
> **[2:34](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=154)** Same for our orders model.
>
> **[2:36](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=156)** We can see the description we added for these columns.
>
> **[2:39](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=159)** Imagine how useful this page can be for collaboration.
>
> **[2:43](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=163)** Feel free to check more things around here in the documentation page.
>
> **[2:48](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=168)** While we are here, let's not forget to check out the lineage graph for our project.
>
> **[2:55](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=175)** This graph reflects all of our transformations and dependencies in a visually intuitive form.
>
> **[3:01](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=181)** Now, not only you can create and test models, but you can document them too.
>
> **[3:07](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=187)** No more of what does this model do, or what is this column for?
>
> **[3:11](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=191)** With your well-crafted documentation, your DBT project is now self-explanatory.

> [!info]- Semantic Content
>
> **Env Vars:** dbt (6), sql (2), yaml (2)
> **Code Keywords:** let (6), self (1)
> **Analogies:** imagine (2), for example (1), picture (1)
> **Documentation:** the documentation (3)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (1)
> **Ports:** port 8080 (1)
> **Tools:** terminal (1)

#### Completing your dbt project: A full development cycle
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/completing-your-dbt-project-a-full-development-cycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/end-to-end-data-engineering-project/completing-your-dbt-project-a-full-development-cycle?u=76281980&t=1)** - [Instructor] We have accomplished so much in the past lessons.
>
> **[0:04](https://www.linkedin.com/learning/end-to-end-data-engineering-project/completing-your-dbt-project-a-full-development-cycle?u=76281980&t=4)** Now, we will bring everything together and persist our changes in GitHub.
>
> **[0:09](https://www.linkedin.com/learning/end-to-end-data-engineering-project/completing-your-dbt-project-a-full-development-cycle?u=76281980&t=9)** In Visual Studio Code, go to the Source Control section on the left panel, check all the modification and additions we have made to our project, and then enter a commit message.
>
> **[0:21](https://www.linkedin.com/learning/end-to-end-data-engineering-project/completing-your-dbt-project-a-full-development-cycle?u=76281980&t=21)** After that, let's commit.
>
> **[0:28](https://www.linkedin.com/learning/end-to-end-data-engineering-project/completing-your-dbt-project-a-full-development-cycle?u=76281980&t=28)** Take into account that this action may look different to you.
>
> **[0:31](https://www.linkedin.com/learning/end-to-end-data-engineering-project/completing-your-dbt-project-a-full-development-cycle?u=76281980&t=31)** For example, I am pushing these changes to a branch called Finished, and you are probably pushing to main.
>
> **[0:38](https://www.linkedin.com/learning/end-to-end-data-engineering-project/completing-your-dbt-project-a-full-development-cycle?u=76281980&t=38)** Finally, let's sync our changes.
>
> **[0:43](https://www.linkedin.com/learning/end-to-end-data-engineering-project/completing-your-dbt-project-a-full-development-cycle?u=76281980&t=43)** Awesome, you have just pushed your dbt project to your GitHub repo.
>
> **[0:48](https://www.linkedin.com/learning/end-to-end-data-engineering-project/completing-your-dbt-project-a-full-development-cycle?u=76281980&t=48)** Next, let's run the entire project.
>
> **[0:52](https://www.linkedin.com/learning/end-to-end-data-engineering-project/completing-your-dbt-project-a-full-development-cycle?u=76281980&t=52)** dbt has a great command for this called dbt Build.
>
> **[0:56](https://www.linkedin.com/learning/end-to-end-data-engineering-project/completing-your-dbt-project-a-full-development-cycle?u=76281980&t=56)** Let's run that in the terminal.
>
> **[1:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/completing-your-dbt-project-a-full-development-cycle?u=76281980&t=60)** Then dbt Build Command is a holistic command that encapsulates the actions of dbt run and dbt test.
>
> **[1:07](https://www.linkedin.com/learning/end-to-end-data-engineering-project/completing-your-dbt-project-a-full-development-cycle?u=76281980&t=67)** It executes everything in the correct order according to your project's lineage graph, ensuring that dependencies are a handled correctly.
>
> **[1:17](https://www.linkedin.com/learning/end-to-end-data-engineering-project/completing-your-dbt-project-a-full-development-cycle?u=76281980&t=77)** And congrats, you have now experienced a complete development cycle for a dbt project.
>
> **[1:24](https://www.linkedin.com/learning/end-to-end-data-engineering-project/completing-your-dbt-project-a-full-development-cycle?u=76281980&t=84)** From setting up sources and creating models to testing, documenting, and running your project, you have seen the power of dbt firsthand and learned the foundational skills to carry into your own data analytics projects.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), finally, (1)
> **Tools:** github (2), visual studio (1), terminal (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** github repo (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 5. Data Orchestration

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction to data orchestration with Dagster
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-orchestration-with-dagster?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-orchestration-with-dagster?u=76281980&t=0)** - [Instructor] Imagine that you have a number of tasks all needing to be done in the right way and at the right time.
>
> **[0:06](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-orchestration-with-dagster?u=76281980&t=6)** That's where data orchestration steps in.
>
> **[0:09](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-orchestration-with-dagster?u=76281980&t=9)** It coordinates data tasks to ensure everything happens at specific times and in a specific order.
>
> **[0:16](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-orchestration-with-dagster?u=76281980&t=16)** Data orchestration tools provide several benefits.
>
> **[0:20](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-orchestration-with-dagster?u=76281980&t=20)** They streamline complex workflows, saving time and reducing potential for human error.
>
> **[0:26](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-orchestration-with-dagster?u=76281980&t=26)** They handle the complexity of managing dependencies between tasks so that everything happens in the correct sequence.
>
> **[0:33](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-orchestration-with-dagster?u=76281980&t=33)** They ensure that a single hiccup won't stop your entire operation.
>
> **[0:37](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-orchestration-with-dagster?u=76281980&t=37)** For example, some orchestrators will retry a job in case of transient failures.
>
> **[0:43](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-orchestration-with-dagster?u=76281980&t=43)** They keep a watchful eye on your workflows, recording their activities for easier troubleshooting and performance optimization.
>
> **[0:52](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-orchestration-with-dagster?u=76281980&t=52)** In the diverse landscape of orchestration tools, Dagster shines with its open-source nature.
>
> **[0:58](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-orchestration-with-dagster?u=76281980&t=58)** It allows for defining and managing data pipelines with relative ease, thanks to its Python-based framework, and it's built to be used at every stage of the data development lifecycle from local development to staging environments, all the way to production.
>
> **[1:14](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-orchestration-with-dagster?u=76281980&t=74)** Before we move further, there are some key concepts in Dagster that it's important to know about.
>
> **[1:21](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-orchestration-with-dagster?u=76281980&t=81)** Software Defined Assets are persistent storage objects, like tables or machine learning models.
>
> **[1:28](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-orchestration-with-dagster?u=76281980&t=88)** Ops are the core computational units that perform tasks like executing database queries.
>
> **[1:34](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-orchestration-with-dagster?u=76281980&t=94)** Graphs are sets of interconnected ops that work together to accomplish more complex tasks.
>
> **[1:40](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-orchestration-with-dagster?u=76281980&t=100)** Jobs are the main units of execution and monitoring.
>
> **[1:44](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-orchestration-with-dagster?u=76281980&t=104)** They are composed of ops connected through data dependencies.
>
> **[1:48](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-orchestration-with-dagster?u=76281980&t=108)** And lastly, schedules and sensors initiate runs.
>
> **[1:52](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-orchestration-with-dagster?u=76281980&t=112)** Schedules trigger runs at fixed intervals, while sensors initiate them based on external changes.
>
> **[1:59](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-orchestration-with-dagster?u=76281980&t=119)** Feel free to consult the Dagster documentation to learn more about these concepts.
>
> **[2:04](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-orchestration-with-dagster?u=76281980&t=124)** Stay tuned as we explore how to schedule Airbyte jobs and trigger DBT transformations post-ingestion, establishing dependencies to ensure that DBT transformations only start after successful data loading via Airbyte.

> [!info]- Semantic Content
>
> **Env Vars:** dbt (2)
> **Analogies:** imagine (1), for example (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### Integrating dbt models with Dagster assets
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=0)** - [Instructor] So far we have covered dbt and Dagster separately, but what if we could unite their strengths?
>
> **[0:07](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=7)** That is precisely what we are going to do in this lesson.
>
> **[0:10](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=10)** It turns out that Dagster software defined assets, are quite similar to dbt models.
>
> **[0:16](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=16)** Both are basically tying together data assets and the computations that create and update them.
>
> **[0:23](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=23)** Let's do a little comparison between a dbt model and a Dagster asset at the code level.
>
> **[0:28](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=28)** In the image, the dbt model staging orders comes from a data source name raw data orders.
>
> **[0:36](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=36)** Now compare that to a Dagster asset.
>
> **[0:39](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=39)** The asset key is staging orders and raw data orders is provided as a dependency.
>
> **[0:46](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=46)** See the resemblance.
>
> **[0:47](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=47)** We will leverage the similarity to integrate dbt with Dagster smoothly.
>
> **[0:53](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=53)** Now let's dive into the practical part.
>
> **[0:56](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=56)** Just as with dbt, I have created an empty Dagster project for you in the Dagster orchestration directory.
>
> **[1:03](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=63)** Our first step is to load the dbt models into Dagster as assets using the Dagster dbt library.
>
> **[1:10](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=70)** For that, we need to adjust a init file in our assets directory.
>
> **[1:14](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=74)** Go to that file and add the following code.
>
> **[1:19](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=79)** Here we are using the load assets from dbt project method.
>
> **[1:24](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=84)** This method takes a dbt project directory and a dbt profile directory.
>
> **[1:29](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=89)** Essentially what we are doing is telling Dagster to take all of these dbt models in this path and treat them as assets.
>
> **[1:37](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=97)** We also created a dbt cli resource to allow Dagster to interact with dbt.
>
> **[1:43](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=103)** You may also have noticed that we are using a new environment variable, dbt project directory.
>
> **[1:49](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=109)** Let's create that.
>
> **[1:51](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=111)** Remember that you can go to the dbt project directory and copy the path and then paste it as a value.
>
> **[2:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=120)** Next, we are going to define a code location for our Dagster project.
>
> **[2:04](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=124)** For that we need to adjust another init file.
>
> **[2:07](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=127)** This time in the Dagster orchestration directory, let's remove and update with the following code.
>
> **[2:15](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=135)** And just like that, Dagster knows where to find everything it needs.
>
> **[2:19](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=139)** In this case our assets and resources.
>
> **[2:23](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=143)** Now that we have done the behind the scenes work, it is time for the grand reveal.
>
> **[2:28](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=148)** Make sure you are in the Dagster orchestration path and let's fire up, dug it, Dagster UI from the terminal.
>
> **[2:38](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=158)** Remember that all of your environment variables need to be set as when we were working in the dbt project.
>
> **[2:44](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=164)** And then let's go to the Dagster web server in the address indicated here.
>
> **[2:50](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=170)** You can command click to follow that link.
>
> **[2:53](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=173)** And there you go, our dbt models are now displayed as assets in Dagster and that is how we bridge dbt and Dagster.
>
> **[3:02](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=182)** Now you have a unified data management platform, which will make handling complex data workflows a breeze.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** go to (3)
> **Analogies:** similar to (1), just like (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Integrating Airbyte connections with Dagster assets
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=0)** - [Instructor] It is time for the next big step: integrating Airbyte and Dagster.
>
> **[0:05](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=5)** Let's start by recalling that Airbyte connections define a series of data streams synchronized between a source and a destination.
>
> **[0:12](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=12)** When a sync happens, a replica of the data from each stream gets written into the destination, in this case, in the form of tables in our BigQuery data warehouse.
>
> **[0:23](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=23)** How does Dagster handle this? It is simple.
>
> **[0:26](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=26)** Each replica generated in the destination is represented as an asset in Dagster.
>
> **[0:32](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=32)** Mapping Airbyte streams to assets comes with several advantages.
>
> **[0:36](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=36)** First, you can visualize the streams involved in an Airbyte connection.
>
> **[0:41](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=41)** You can execute syncs from Dagster.
>
> **[0:44](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=44)** Defining downstream transformations that rely on data produced by Airbyte becomes easier.
>
> **[0:50](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=50)** You can also track historical metadata and logs for each data stream.
>
> **[0:54](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=54)** And lastly, tracing data lineage through Airbyte and other tools become straightforward.
>
> **[1:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=60)** Let's go back to Visual Studio Code.
>
> **[1:03](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=63)** First of all, if your Dagster web server is still running, let's stop it while we make changes to the code.
>
> **[1:09](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=69)** You can do that by using Control + C.
>
> **[1:14](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=74)** Our first step in integrating Airbyte with Dagster is setting up an Airbyte resource.
>
> **[1:20](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=80)** This resource contains details about our Airbyte instance location and the necessary access credentials.
>
> **[1:27](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=87)** Here is how you add it to your assets in each file.
>
> **[1:32](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=92)** Now let's load the Airbyte assets into Dagster from our live Airbyte instance.
>
> **[1:39](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=99)** the load_assets_from_airbyte_instance method retrieves all the connections defined in our Airbyte instance, creating assets for each data stream.
>
> **[1:48](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=108)** The key_prefix specifies where these assets are stored in BigQuery.
>
> **[1:53](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=113)** Adding it is crucial for Dagster to match dependencies between Airbyte and DBT.
>
> **[1:58](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=118)** Let's not forget to add the necessary imports.
>
> **[2:03](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=123)** You may have noticed that we use an environment variable to indicate the Airbyte password.
>
> **[2:08](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=128)** We need to create that variable.
>
> **[2:12](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=132)** And now let's launch Dagit again.
>
> **[2:18](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=138)** Make sure Airbyte is running, otherwise Dagster will not be able to connect to it.
>
> **[2:23](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=143)** And now let's go to Dagit.
>
> **[2:26](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=146)** Once in Dagit, click on the reload definitions button.
>
> **[2:30](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=150)** This ensures that Dagit reflects all the changes and additions we made to our assets in the previous steps.
>
> **[2:36](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=156)** And then click on View Global Asset Lineage.
>
> **[2:42](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=162)** And there it is, our complete pipeline.
>
> **[2:45](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=165)** Here we see the Airbyte assets and they appear as upstream dependencies for our staging customers and staging orders models.
>
> **[2:54](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=174)** It all looks great.
>
> **[2:55](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=175)** In the next lesson, we will get to see all of our work payoff as we materialize our entire pipeline.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), case, (1)
> **UI Navigation:** click on (2), go to (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** load_assets_from_airbyte_instance (1), key_prefix (1)
> **Cross-References:** go back to (1), in the next (1)
> **Env Vars:** dbt (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### Materializing assets using Dagit
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/materializing-assets-using-dagit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/materializing-assets-using-dagit?u=76281980&t=0)** - [Instructor] We have come a long way in integrating our data tools.
>
> **[0:04](https://www.linkedin.com/learning/end-to-end-data-engineering-project/materializing-assets-using-dagit?u=76281980&t=4)** Now, it is time for the magic to happen.
>
> **[0:07](https://www.linkedin.com/learning/end-to-end-data-engineering-project/materializing-assets-using-dagit?u=76281980&t=7)** Let's finally click on the Materialize All button at the top right corner of the Dexter UI.
>
> **[0:13](https://www.linkedin.com/learning/end-to-end-data-engineering-project/materializing-assets-using-dagit?u=76281980&t=13)** This will trigger a run that goes through the whole process of materializing all our assets.
>
> **[0:19](https://www.linkedin.com/learning/end-to-end-data-engineering-project/materializing-assets-using-dagit?u=76281980&t=19)** Essentially, it is executing the ops contained within each asset, and saving the results to persistent storage.
>
> **[0:26](https://www.linkedin.com/learning/end-to-end-data-engineering-project/materializing-assets-using-dagit?u=76281980&t=26)** Let's go to the Airbyte UI and see how a sync has been triggered by Dexter.
>
> **[0:32](https://www.linkedin.com/learning/end-to-end-data-engineering-project/materializing-assets-using-dagit?u=76281980&t=32)** And now we see how the sync is running.
>
> **[0:34](https://www.linkedin.com/learning/end-to-end-data-engineering-project/materializing-assets-using-dagit?u=76281980&t=34)** We had already run our initial sync manually, and since there is no new data in our Postgres database, this sync will not ingest new data.
>
> **[0:44](https://www.linkedin.com/learning/end-to-end-data-engineering-project/materializing-assets-using-dagit?u=76281980&t=44)** A good challenge for you here would be to add new rows to the Postgres database, and materialize again to see new data flowing through the pipeline.
>
> **[0:53](https://www.linkedin.com/learning/end-to-end-data-engineering-project/materializing-assets-using-dagit?u=76281980&t=53)** As you can see, our whole pipeline is being materialized, and it will take some time for the process to complete.
>
> **[0:59](https://www.linkedin.com/learning/end-to-end-data-engineering-project/materializing-assets-using-dagit?u=76281980&t=59)** Feel free to pause the video here and come back once your process has completed.
>
> **[1:07](https://www.linkedin.com/learning/end-to-end-data-engineering-project/materializing-assets-using-dagit?u=76281980&t=67)** Okay. Our pipeline has been materialized.
>
> **[1:10](https://www.linkedin.com/learning/end-to-end-data-engineering-project/materializing-assets-using-dagit?u=76281980&t=70)** Now, there are some things we can explore in the Dexter UI.
>
> **[1:15](https://www.linkedin.com/learning/end-to-end-data-engineering-project/materializing-assets-using-dagit?u=76281980&t=75)** For example, clicking on an asset will open a sidebar, presenting more details about it.
>
> **[1:21](https://www.linkedin.com/learning/end-to-end-data-engineering-project/materializing-assets-using-dagit?u=76281980&t=81)** For example, in this case, the SQL statement that generated the model and statistics about the last materialization.
>
> **[1:29](https://www.linkedin.com/learning/end-to-end-data-engineering-project/materializing-assets-using-dagit?u=76281980&t=89)** Feel free to explore around.
>
> **[1:31](https://www.linkedin.com/learning/end-to-end-data-engineering-project/materializing-assets-using-dagit?u=76281980&t=91)** Oh, and by the way, don't forget to commit and push your Dexter code to GitHub.
>
> **[1:37](https://www.linkedin.com/learning/end-to-end-data-engineering-project/materializing-assets-using-dagit?u=76281980&t=97)** By now, you have got a fully operational data pipeline, which is viewable and manageable from Dexter.
>
> **[1:45](https://www.linkedin.com/learning/end-to-end-data-engineering-project/materializing-assets-using-dagit?u=76281980&t=105)** Isn't it satisfying to see all the individual pieces come together in this orchestrated dance of data?

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1)
> **UI Navigation:** click on (1), go to (1)
> **Analogies:** for example (2)
> **Env Vars:** sql (1)
> **Tools:** github (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Add a schedule to your data pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-a-schedule-to-your-data-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-a-schedule-to-your-data-pipeline?u=76281980&t=8)** - [Instructor] Now that you have your data pipeline set up in Dagster, let's put it on a schedule.
>
> **[0:13](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-a-schedule-to-your-data-pipeline?u=76281980&t=13)** Your challenge is to add a schedule that runs every hour and triggers a full execution of your pipeline, including all the assets.
>
> **[0:21](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-a-schedule-to-your-data-pipeline?u=76281980&t=21)** Feel free to consult the extra documentation or tutorials, and then meet me back here to compare your solution to mine in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Solution: Add a schedule to your data pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-schedule-to-your-data-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-schedule-to-your-data-pipeline?u=76281980&t=0)** - [Instructor] Let me walk you through the steps I followed to solve this challenge.
>
> **[0:12](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-schedule-to-your-data-pipeline?u=76281980&t=12)** In the top level in each file, I created a new job using the define_asset_job method.
>
> **[0:19](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-schedule-to-your-data-pipeline?u=76281980&t=19)** In Dagster, a job allows us to focus on a set of assets and materialize them using a single action.
>
> **[0:26](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-schedule-to-your-data-pipeline?u=76281980&t=26)** Here I use Dagster's AssetSelection to select all available assets.
>
> **[0:32](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-schedule-to-your-data-pipeline?u=76281980&t=32)** Then I created a schedule.
>
> **[0:34](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-schedule-to-your-data-pipeline?u=76281980&t=34)** A schedule in Dagster triggers a jobs run at specific intervals.
>
> **[0:38](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-schedule-to-your-data-pipeline?u=76281980&t=38)** The interval in this case is given by the cron_scheduler.
>
> **[0:42](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-schedule-to-your-data-pipeline?u=76281980&t=42)** And last, I updated the definitions to include the new job and schedule.
>
> **[0:47](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-schedule-to-your-data-pipeline?u=76281980&t=47)** Let me launch Dagit and show you how this looks there.
>
> **[0:52](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-schedule-to-your-data-pipeline?u=76281980&t=52)** In the Dagster UI, I will navigate to the overview and schedules tab.
>
> **[0:56](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-schedule-to-your-data-pipeline?u=76281980&t=56)** And here is the newly added schedule linked to the job.
>
> **[1:01](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-schedule-to-your-data-pipeline?u=76281980&t=61)** There you have it, a schedule run for our data pipeline.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Code Identifiers:** define_asset_job (1), cron_scheduler (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### An evolving field
> [LinkedIn Learning](https://www.linkedin.com/learning/end-to-end-data-engineering-project/an-evolving-field?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/an-evolving-field?u=76281980&t=0)** - Congratulations on completing this journey into the world of modern data engineering.
>
> **[0:06](https://www.linkedin.com/learning/end-to-end-data-engineering-project/an-evolving-field?u=76281980&t=6)** We have covered a lot of ground together.
>
> **[0:09](https://www.linkedin.com/learning/end-to-end-data-engineering-project/an-evolving-field?u=76281980&t=9)** You are now equipped with the experience and tools to solve real world data engineering problems.
>
> **[0:14](https://www.linkedin.com/learning/end-to-end-data-engineering-project/an-evolving-field?u=76281980&t=14)** I hope this project has given you a strong foundation and a great addition to your portfolio.
>
> **[0:20](https://www.linkedin.com/learning/end-to-end-data-engineering-project/an-evolving-field?u=76281980&t=20)** But remember, the learning doesn't stop here.
>
> **[0:24](https://www.linkedin.com/learning/end-to-end-data-engineering-project/an-evolving-field?u=76281980&t=24)** Data engineering is a vast field that is always evolving.
>
> **[0:28](https://www.linkedin.com/learning/end-to-end-data-engineering-project/an-evolving-field?u=76281980&t=28)** There are always new tools, techniques, and best practices to discover.
>
> **[0:33](https://www.linkedin.com/learning/end-to-end-data-engineering-project/an-evolving-field?u=76281980&t=33)** So if you are looking for next steps after completing this project, here is what I recommend.
>
> **[0:39](https://www.linkedin.com/learning/end-to-end-data-engineering-project/an-evolving-field?u=76281980&t=39)** First, you can add more sources and transformations to your project.
>
> **[0:43](https://www.linkedin.com/learning/end-to-end-data-engineering-project/an-evolving-field?u=76281980&t=43)** In data engineering, we normally handle a variety of data sources such as APIs or files.
>
> **[0:51](https://www.linkedin.com/learning/end-to-end-data-engineering-project/an-evolving-field?u=76281980&t=51)** Feel free to include those in your project.
>
> **[0:53](https://www.linkedin.com/learning/end-to-end-data-engineering-project/an-evolving-field?u=76281980&t=53)** Then you can go deeper into each of the tools we have used.
>
> **[0:57](https://www.linkedin.com/learning/end-to-end-data-engineering-project/an-evolving-field?u=76281980&t=57)** They may have advanced functionalities that we didn't have the time to cover in this course.
>
> **[1:02](https://www.linkedin.com/learning/end-to-end-data-engineering-project/an-evolving-field?u=76281980&t=62)** You can also consider other tools in the modern data stack for a specific project you may have.
>
> **[1:09](https://www.linkedin.com/learning/end-to-end-data-engineering-project/an-evolving-field?u=76281980&t=69)** And lastly, you can consider learning more about data modeling techniques as they are really important and can provide a lot of value.
>
> **[1:18](https://www.linkedin.com/learning/end-to-end-data-engineering-project/an-evolving-field?u=76281980&t=78)** Remember, you can continue the conversation by posting questions in the Q and A section of the course.
>
> **[1:24](https://www.linkedin.com/learning/end-to-end-data-engineering-project/an-evolving-field?u=76281980&t=84)** And don't forget to follow me on LinkedIn.
>
> **[1:27](https://www.linkedin.com/learning/end-to-end-data-engineering-project/an-evolving-field?u=76281980&t=87)** I love creating content for data professionals.
>
> **[1:30](https://www.linkedin.com/learning/end-to-end-data-engineering-project/an-evolving-field?u=76281980&t=90)** Keep exploring, keep learning, and above all, enjoy the journey into the ever evolving field of data.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Thalia Barrera]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/end-to-end-data-engineering-project-4413618)

## Skills Covered

- Data Engineering

## Path Context

### In [[Develop Your Scala Skills for Data Engineering]]
← [[Coding Exercises- Scala]] | **6 of 6**

### In [[Advance Your Data Engineering Skills]]
← [[Data Pipeline Automation with GitHub Actions Using R and Python]] | **10 of 10**

### In [[Develop Your Rust Skills for Data Engineering]]
← [[Level Up- Rust]] | **6 of 6**

### In [[Data Engineering Hands-On Practice]]
← [[Complete Guide to SQL for Data Engineering- from Beginner to Advanced]] | **7 of 7**

## Appears In

- [[Develop Your Scala Skills for Data Engineering]]
- [[Advance Your Data Engineering Skills]]
- [[Develop Your Rust Skills for Data Engineering]]
- [[Data Engineering Hands-On Practice]]

## Related Courses

_Courses sharing skills:_

- [[Databricks Certified Data Engineer Associate Cert Prep]] — Data Engineering
- [[Big Data Analytics with Hadoop and Apache Spark]] — Data Engineering
- [[Transition from Data Science to Data Engineering]] — Data Engineering
- [[Introduction to Modern Data Engineering with Snowflake]] — Data Engineering
- [[Complete Guide to SQL for Data Engineering- from Beginner to Advanced]] — Data Engineering

---

[↑ Back to top](#)