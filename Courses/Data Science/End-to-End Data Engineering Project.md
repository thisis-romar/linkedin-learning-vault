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
created: 2026-05-03
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
  - [Transform complex data into insights](#transform-complex-data-into-insights)
  - [What you should know](#what-you-should-know)
- [**1. Project Overview and Preparation**](#1-project-overview-and-preparation) (4 videos)
  - [Project architecture overview](#project-architecture-overview)
  - [Project setup](#project-setup)
  - [Understanding the Big Star Collectibles database](#understanding-the-big-star-collectibles-database)
  - [Setting up your data warehouse](#setting-up-your-data-warehouse)
- [**2. Data Extraction and Loading**](#2-data-extraction-and-loading) (5 videos)
  - [Getting started with ELT tools: An introduction to Airbyte](#getting-started-with-elt-tools-an-introduction-to-airbyte)
  - [Deploying Airbyte for data synchronization](#deploying-airbyte-for-data-synchronization)
  - [Setting up sources and destinations in Airbyte](#setting-up-sources-and-destinations-in-airbyte)
  - [Establishing connections in Airbyte](#establishing-connections-in-airbyte)
  - [Synchronizing and navigating through data](#synchronizing-and-navigating-through-data)
- [**3. Starting Data Transformation and Modeling**](#3-starting-data-transformation-and-modeling) (6 videos)
  - [Introduction to data modeling with dbt](#introduction-to-data-modeling-with-dbt)
  - [Understanding the structure of a dbt project](#understanding-the-structure-of-a-dbt-project)
  - [Initiating your dbt project](#initiating-your-dbt-project)
  - [Configuring data sources in dbt](#configuring-data-sources-in-dbt)
  - [Challenge: Add a freshness check](#challenge-add-a-freshness-check)
  - [Solution: Add a freshness check](#solution-add-a-freshness-check)
- [**4. Data Transformation and Modeling**](#4-data-transformation-and-modeling) (7 videos)
  - [Creating and customizing your dbt models](#creating-and-customizing-your-dbt-models)
  - [Reviewing and executing dbt](#reviewing-and-executing-dbt)
  - [Securing your data with dbt tests](#securing-your-data-with-dbt-tests)
  - [Challenge: Add tests to the Marts model](#challenge-add-tests-to-the-marts-model)
  - [Solution: Add tests to the Marts model](#solution-add-tests-to-the-marts-model)
  - [Automating documentation in dbt](#automating-documentation-in-dbt)
  - [Completing your dbt project: A full development cycle](#completing-your-dbt-project-a-full-development-cycle)
- [**5. Data Orchestration**](#5-data-orchestration) (6 videos)
  - [Introduction to data orchestration with Dagster](#introduction-to-data-orchestration-with-dagster)
  - [Integrating dbt models with Dagster assets](#integrating-dbt-models-with-dagster-assets)
  - [Integrating Airbyte connections with Dagster assets](#integrating-airbyte-connections-with-dagster-assets)
  - [Materializing assets using Dagit](#materializing-assets-using-dagit)
  - [Challenge: Add a schedule to your data pipeline](#challenge-add-a-schedule-to-your-data-pipeline)
  - [Solution: Add a schedule to your data pipeline](#solution-add-a-schedule-to-your-data-pipeline)
- [**Conclusion**](#conclusion) (1 videos)
  - [An evolving field](#an-evolving-field)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Transform complex data into insights](https://www.linkedin.com/learning/end-to-end-data-engineering-project/transform-complex-data-into-insights?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/transform-complex-data-into-insights?u=76281980&t=0)** - Are you ready to turn data into a gold mine of insights? In this course, we will solve a key challenge in the world of [[Data Engineering]], how to efficiently extract, load, and transform data into a unified format that is ready for analytics. My name is Thalia, and I'm an experienced data engineer. I'm going to help you construct a robust data pipeline for a fictional [[E-Commerce]] company, Big Star Collectibles. Our mission, transform their scattered, complex data into a model that drives insights and aids [[Decision-Making]]. Throughout this course, you will master the concepts behind extraction, loading, transformation, and orchestration through practical exercises. So join me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Engineering]] (1), [[E-Commerce]] (1), [[Decision-Making]] (1)
> **Speakers:** - are (1)

#### [What you should know](https://www.linkedin.com/learning/end-to-end-data-engineering-project/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/what-you-should-know?u=76281980&t=0)** - Before we dive deep into the project, let's discuss a few things you should know. First, let's talk about knowledge base. To make the most of this course, you should be familiar with [[Data Engineering Foundations]], have a basic understanding of [[SQL]] and [[Python (Programming Language)|Python]], and comfortable with basic command line operations and [[Git]]. About the tech stack, you will need Python 3, Docker and Docker [[Jetpack Compose|Compose]], which are bundled with Docker Desktop, and an IDE. I highly recommend Visual Studio Code. You can find links on how to install all of these tools in the Exercise File. We will build this [[Data Engineering]] project together from scratch. The main takeaway from this course is a [[GitHub]] Repo to showcase what you built. You will be able to understand and explain each and every section of it. To get you started, I provide an empty repo in the Main branch. At any point, you can consult the finished version of the project by checking out the Finished branch. And for those moments when I'm coding or entering lengthy commands, there's no need to pause a video and try to copy from the screen. The necessary code and commands are included in the Exercise Files as text. On the surface, this may come across as a very simple project, yet it is holistic, production-ready, and incorporates essentials, like documentation and testing, making it capable of handling massive data loads, if provided. It is meant to be a stepping stone for you
>
> **[1:34](https://www.linkedin.com/learning/end-to-end-data-engineering-project/what-you-should-know?u=76281980&t=94)** to add more sources, more transformations, and make it your own. In the world of data engineering and especially the modern data stack, things change fast. If by the time you are building this project that things don't look the same, please don't get discouraged. The fundamentals will certainly remain the same. Whether you're an experienced data engineer looking to know new tools or a beginner looking to get some hands-on experience, this course is for you. Even if you're not a data engineer, you can still certainly expand your knowledge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Engineering]] (3), [[Python (Programming Language)|Python]] (2), [[SQL]] (1), [[Git]] (1), [[Jetpack Compose|Compose]] (1)
> **CLI Commands:** docker (3), make (2), python (2), git (1), find (1)
> **Tools:** command line (1), docker desktop (1), visual studio (1), github (1)
> **Exercise Files:** exercise file (1), github repo (1), exercise files (1)
> **Env Vars:** sql (1), ide (1)
> **Versions:** python 3 (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)


### 1. Project Overview and Preparation

[↑ Back to Table of Contents](#table-of-contents)

#### [Project architecture overview](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-architecture-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-architecture-overview?u=76281980&t=0)** - Welcome to the team, fellow data engineer. You are now part of Big Star Collectibles, a vibrant [[E-Commerce]] company. Ahead of you lies a rewarding task that is critical for the company's growth. Our marketing team is eager to drive our next campaign, but they are in the dark. Why? They need data, specific actionable data. And there's no [[Data Engineering]] team in the company. The data is sitting in a [[PostgreSQL|Postgres]] backend database. It is raw and not very useful for the marketing team. Not to mention, it is not optimized for analytics. The marketing team needs a holistic view, so we will combine and transform some of the tables in the database and make sure they are always up to date in our data warehouse. The aim is to provide a more comprehensive view of the customers' buying patterns. So how do we do this? We are going to set up a data warehouse and build a pipeline from scratch using some of the best tools in the modern data stack. Here is the plan. First, we will use Airbyte to extract data from the Postgres database and load it into BigQuery, our new data warehouse. Once the data is in BigQuery, we will clean it up and shape it. dbt will be our transformation tool, helping us turn the raw, scattered data into a neat table that provides insights about our customers. It'll also allow us to test and document our data models. And finally, we'll use Dagster
>
> **[1:36](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-architecture-overview?u=76281980&t=96)** and its user-friendly interface, Dagit, to ensure everything runs smoothly and in the right sequence. By the end of this course, you will be knowledgeable about these modern tools and you will also have built a production-grade data stack from scratch. Ready to take on this challenge?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (2), [[E-Commerce]] (1), [[Data Engineering]] (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - welcome (1)

#### [Project setup](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=0)** - [Instructor] Now let's roll up our sleeves and dive right in. First, go to the project repo in [[GitHub]] and let's create a fork. Forking generates your own copy of the repo in GitHub. Your own copy means that you will be able to contribute changes to your own repo without affecting the original one. Now uncheck the Copy the main branch only. So you bring all the branches and then click on Create fork. And now let's clone the project repo in our local machine. In your fork repo, click on the Code section and then copy the HTTPS URL. And now let's go to the terminal. Start by typing [[Git]] clone, and then paste the URL we just copied.
>
> **[0:51](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=51)** Next, navigate into the newly created directory and let's open the project in Visual Studio Code. Now let's create a [[Python (Programming Language)|Python]] Virtual Environment. The environment will help manage the project dependencies separately from any other Python projects you may have. Open a terminal in Visual Studio Code and then create the environment with the following command.
>
> **[1:29](https://www.linkedin.com/learning/end-to-end-data-engineering-project/project-setup?u=76281980&t=89)** Now let's activate our environment. And next, let's select a Python interpreter for our project. Open the command palette, and look for Python Select Interpreter, and choose the one that is tied to our virtual environment. Our last step is to install the project dependencies. To do that, execute the following command. This will install all the project dependencies. It is possible that after installing all these dependencies, you will still see an error saying that dbt is not installed. You can fix this by restarting Visual Studio Code and we are all set. Our Python Project Environment is set up and ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[GitHub]] (2), [[Git]] (1)
> **Tools:** visual studio (3), github (2), terminal (2)
> **CLI Commands:** python (5), git (1)
> **UI Navigation:** go to (2), click on (2), open the (2)
> **Env Vars:** url (2), https (1)
> **Prerequisites:** install (2), set up (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Understanding the Big Star Collectibles database](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=0)** - [Instructor] Now that our project is set up, it is time to access the foundation of any data project, the data itself. To make things easy for you, I have prepared a Docker image that includes a [[PostgreSQL|Postgres]] database along with some preloaded data. This Docker image will simulate the Big Star Collectibles backend database. To understand how to transform and use this data effectively, it is crucial to first understand the structure and contents, so let's go over it. The database is an organized system designed to handle various aspects of the [[E-Commerce]] store operation. It consists of four main tables that serve a unique role. The Customers table is the address book. It contains details about each customer who has made a purchase from Big Star Collectibles, including their location information. The [[Microsoft Products|Products]] table is a catalog of the e-commerce store. It keeps track of all products available for purchase, including their price, rating, and categorization. The Orders table is like the store's diary. It records each order made by customers, tracking important stages of an order like when it was placed, approved, and delivered. and the Orders_items table contains each individual item purchased in an order. Of course, these tables aren't isolated. They are linked to one another, forming a network of relationships. For example, an order in the Orders table is linked to a customer in the Customers table. Similarly, each item in order is linked back
>
> **[1:34](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=94)** to the product it corresponds to in the Products table. Take into account that this data is fake and is generated for learning purposes. Now let's get hands-on. Follow these steps to get the database up and running. Let's start in the terminal. Make sure the Docker is running, and then pull the Docker image by executing the following command. This command fetches the latest version of the image from Docker Hub. Then run a container from the pulled image using the following command. Remember that all of the commands are available in your Exercise Files so you can copy from there. This command creates and starts a new container named big-star-container. Check that the container is up and running in Docker Desktop. And there we have it. With these steps, we have got a running instance of our database. Now we need to configure a couple of things. We are going to access the database using psql by going into the container. Go to the terminal and execute the following command. And we are in the Big Star database. Alternatively, you can connect using a tool like pgAdmin or DBeaver. If you do that, use the connection details in the Inspect tab. And now back to the terminal. Let's make sure our tables are there
>
> **[3:07](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-big-star-collectibles-database?u=76281980&t=187)** by using the dt command. And then let's check if our data is there by running a simple select statement. Perfect, we certainly have data. Then we need to execute a couple of queries to set up our logical replication. Don't skip these steps. They are really important. First, we set up a replica identity so that our tables are able to replicate, update, and delete operations. Next, we create a logical replication slot called airbyte_slot. And finally, we create a publication called airbyte_publication. And that's it. You have now successfully configured the database to work with Airbyte's logical replication. More on that later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (3), [[E-Commerce]] (2), [[PostgreSQL|Postgres]] (1)
> **CLI Commands:** docker (6), make (3), psql (1)
> **Tools:** terminal (3), docker desktop (1)
> **Prerequisites:** set up (3), configure (1)
> **Code Identifiers:** pgadmin (1), airbyte_slot (1), airbyte_publication (1)
> **Definitions:** is an  (1), is a  (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)

#### [Setting up your data warehouse](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=0)** - [Instructor] Cloud data warehouses have transformed the way we manage and analyze data. They have become the center of the modern data stack, holding huge amounts of data ready for us to gain valuable insights. [[Google]] BigQuery is a powerful player in this revolution. BigQuery is a fully managed serverless data warehouse that enables super fast [[SQL]] queries. Using the processing power of Google's infrastructure. It is a scalable, cost effective, and integrates very well with other data tools. I have chosen BigQuery for this project mainly because it offers a generous free tier, which is perfect for learning and small projects. But please know that you can use any other data warehouse, such as [[Snowflake]] or Redshift if you have access to them. Some steps in this project will be slightly different, but you can definitely follow along. Even a local [[PostgreSQL|Postgres]] database could work as your data warehouse. And now let's set up our BigQuery data warehouse. The first step is to sign up to [[Google Cloud Platform (GCP)|Google Cloud]] Services. At the moment of recording, Google Cloud offers $300 in credits and free usage of 20 plus [[Microsoft Products|products]], including BigQuery. After you sign up, go to the cloud console. And now let's create a new project.
>
> **[1:33](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=93)** Once your project has been created, selected from the top bar menu. And now, let's go to BigQuery. Here, we will create two data sets, raw data and transform data. A dataset is a container for our views and tables. Let's start with the raw data dataset. Click on the three dots and then create dataset. Let's give it a name, and then click on create dataset. And now, let's do the same for the second dataset. Click on the three dots. Create dataset. Let's give it the name, transform data, and click on create dataset. Now we need to create a service account for airbyte. A service account is an identity that you can use to authenticate to Google APIs and services. Navigate to I am an admin, and then service accounts. Once there, click on create service account. Let's give it a name. In this case, I will name mine airbyte, and create and continue. Now we need to provide two roles to this service account. Start typing BigQuery, and then select BigQuery data editor. And let's set another role. Start typing BigQuery again, and then select BigQuery Job User. And then click on done.
>
> **[3:07](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=187)** Let's do the same for our DBT service account. Let's create a new service account. In this case, we will call it DBT. And then click create and continue. And let's add the same roles we added for the airbyte service account.
>
> **[3:33](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-your-data-warehouse?u=76281980&t=213)** And click on done. Now, let's generate a [[JSON]] key for our service accounts. A JSON key is a secure file that an application can use to authenticate as the service account. Click on actions and select manage keys. Then click on add key, and create a new key. As a key type, select JSON, and then click on create. The generated file should be automatically downloaded to your computer. And now, let's do the same for the DBT account. Click on actions, manage keys, then add a key and create a new key, and then click on create. Make sure to store this file securely as we will need them later. And that's it. You have signed up to Google Cloud Services, created a new project and a BigQuery data set with the necessary permissions to integrate our EL and transformation tools. The playground is set for our project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (3), [[Google Cloud Platform (GCP)|Google cloud]] (3), [[JSON]] (3), [[SQL]] (1), [[Snowflake]] (1)
> **UI Navigation:** click on (12), go to (2), navigate to (1)
> **Env Vars:** dbt (3), json (3), sql (1)
> **Definitions:** is a  (5), is an  (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** set up (1)


### 2. Data Extraction and Loading

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting started with ELT tools: An introduction to Airbyte](https://www.linkedin.com/learning/end-to-end-data-engineering-project/getting-started-with-elt-tools-an-introduction-to-airbyte?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/getting-started-with-elt-tools-an-introduction-to-airbyte?u=76281980&t=0)** - Have you ever struggled with manually extracting and loading data from one system to another? Today I'm going to introduce you to a game changer, ELT tools. Let's begin by understanding what ELT tools are and why they are crucial. ELT stands for Extract, Load, and Transform. These tools help you extract data from a multitude of sources like [[Databases]] or APIs, and load it into a target system like a data warehouse or a data lake, so then you can transform the data as needed. ELT tools are a core piece of the modern data stack because they replace ad hoc scripting, simplifying the extraction, loading, and optional transformation processes, thereby minimizing errors and maintenance efforts. Now let's focus on one specific tool, Airybyte. Airbyte allows you to extract data from various sources and load it into a wide range of destinations, simplifying the creation and maintenance of [[Data Pipelines]]. Airbyte operates around connectors, which handle the extraction from a source and then loading into a destination. Imagine your company stores data across different platforms like Salesforce CRM, a [[MySQL]] database, a [[PostgreSQL|Postgres]] database, and you want to aggregate all of this data for insightful analysis. Well, in this case, Airbyte can provide you with out of the box connectors
>
> **[1:34](https://www.linkedin.com/learning/end-to-end-data-engineering-project/getting-started-with-elt-tools-an-introduction-to-airbyte?u=76281980&t=94)** for all of these and many other systems, enabling you to easily set up a comprehensive data pipeline. For this project, we will focus on using Airbyte to move data from the Big Star collective of Postgres into our data warehouse in BigQuery. Now, how do you get Airbyte up and running? Airbyte uses docker containers, which can be easily managed and scaled. You can deploy the open-source version on your own infrastructure, like on on-premises servers or on Cloud [[Virtual Machines]]. But for the purpose of this course, we will be deploying the open-source version of Airbyte on your local machine. Airbyte also has a Cloud version, which is fully managed, so you don't have to worry about managing the resources yourself. As you can see, ELT tools like Airbyte automate data extraction and loading, allowing data engineers and analysts to focus on tasks that add more value, like [[Data Architecture]], modeling and analysis. Are you ready to give Airbyte a try? As you can see, tools like Airbyte automate data extraction and loading, allowing data engineers to focus on tasks that add more value, like architecture, modeling, and analysis. Are you ready to give Airbyte a try?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (2), [[Databases]] (1), [[Data Pipelines]] (1), [[MySQL]] (1), [[Virtual Machines]] (1)
> **Env Vars:** elt (5), crm (1)
> **CLI Commands:** mysql (1), docker (1)
> **Definitions:** stands for (1)
> **Analogies:** imagine (1)
> **Prerequisites:** set up (1)
> **Speakers:** - have (1)

#### [Deploying Airbyte for data synchronization](https://www.linkedin.com/learning/end-to-end-data-engineering-project/deploying-airbyte-for-data-synchronization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/deploying-airbyte-for-data-synchronization?u=76281980&t=0)** - [Instructor] It is time to get hands-on with Airbyte, but first we need to bring it into our local machine. So let's clone it outside of our project repo with the following command. Now that the clone has completed, the code is available in a new directory called Airbyte. Let's move there. And now let's awake the Airbyte platform by running the following script. At this moment, you could go to Docker desktop in the images section and see how the images that constitute the platform are being fetched. And after a while, if you go to the containers section, you will see the Airbyte container being created. We will not go into the details of all the images that are part of the Airbyte platform, but for those of you who are interested, you can refer to Airbyte's documentation for a comprehensive understanding. It may take a few minutes after you launch the script, but once all the images are in green, you can navigate to localhost:8000 in your browser to rebuild the Airbyte user interface, so let's do that. And here we are in the Airbyte user interface. You may be asked for a username and password the first time you log in. These are included in your course handoff document.
>
> **[1:34](https://www.linkedin.com/learning/end-to-end-data-engineering-project/deploying-airbyte-for-data-synchronization?u=76281980&t=94)** Also, the first time you open the UI, you could be asked for your email. As you can see, the UI is quite straightforward. On the left, you will find the three main components, connections, sources, and destinations. For now, there is nothing here, but in the upcoming lessons, we will set up our source and destination connectors. Congrats! You have successfully set up and launched Airbyte.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2), navigate to (1), open the (1)
> **CLI Commands:** docker (1), find (1)
> **Prerequisites:** set up (2)
> **URLs:** [localhost:8000](https://localhost:8000) (1)
> **Ports:** :8000 (1)
> **Tools:** docker desktop (1)
> **Speakers:** - [instructor] (1)

#### [Setting up sources and destinations in Airbyte](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=0)** - [Instructor] Let's now create our data source and destination connectors. Navigate to the sources section where we will add our [[PostgreSQL|Postgres]] source. In the search bar, start typing Postgres and click on it once you find it. Now give it a name. I'm going to call mine Big Star Postgres, but feel free to choose any name. And now it's time to provide all the details about our Postgres database connection. Please note that all of these connection details that we will enter can be found in the Inspect tab of your Postgres container in Docker Desktop. Here are all the details we are entering. Since we are running our Postgres database locally, the host is going to be localhost and we will leave the default port. Our database name is big-star-db Our username is postgres, and our password is mysecretpassword. We are going to leave the security defaults as they are and in the advanced tab, in the replication method, we are going to use logical replication. Our replication slot, if you remember, is called airbyte_slot, and our publication, airbyte_publication. We will leave the optional fields as they are.
>
> **[1:35](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=95)** We are now ready to set up our source. After you click on set up source, Airbyte will attempt to connect to the database. If there are any errors, you can double check the user, password or any other settings. If everything went well, we can now go ahead and set up our destination. Go to destinations and select BigQuery. Now you can select a destination name. I'm going to name mine Big Star Warehouse. At this point, it may be useful to go to your BigQuery console to graph any of the details that we need to fill in next. For example, if you would like to know your project ID, you can go to the top search bar, select your project, and then copy the ID next to it. I'm going to paste my project ID now. For the dataset location, I selected US for my both datasets. Our default dataset ID is going to be raw_data, and the loading method is going to be standard inserts. Now you need to copy the contents of the [[JSON]] file we downloaded for the Airbyte service account and add them in this field. Yes, all of that JSON string. So I will just copy here. And now I'm pasting all the JSON string here.
>
> **[3:12](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=192)** And now, finally, let's just set up our destination.
>
> **[3:20](https://www.linkedin.com/learning/end-to-end-data-engineering-project/setting-up-sources-and-destinations-in-airbyte?u=76281980&t=200)** Let's take a moment now to celebrate our progress. We have navigated through the setting up of our Postgres resource and our BigQuery destination. Each step, configuration and click has brought us closer to our goal of creating a data flow. Now we are ready to connect our source to our destination. Let's do that in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (8), [[JSON]] (3)
> **UI Navigation:** click on (2), go to (2), navigate to (1)
> **Prerequisites:** set up (4)
> **Code Identifiers:** airbyte_slot (1), airbyte_publication (1), raw_data (1)
> **Env Vars:** json (3)
> **CLI Commands:** find (1), docker (1)
> **Cross-References:** in the next (1)
> **Tools:** docker desktop (1)

#### [Establishing connections in Airbyte](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=0)** - [Instructor] The moment we have been waiting for is finally here. We are about to set up a data highway from our [[PostgreSQL|Postgres]] database into our data warehouse. Kickstart this journey by heading over to connections, if you are not already there, and then click on create your first connection. Then select your source, your destination, and let Airbyte [[Fetch]] the schema from our source database. Then you will be presented with this connection settings page. The first thing we need to do here is choose our application frequency. For our current project, we will stick with manual, leaving the scheduling to our future orchestrator. The destination namespace in this context is the data set in BigQuery, so we will leave it as default. Airbyte provides the option to add a prefix to our tables in the destination. Given that our data will be stored in a specific dataset called raw data, we are good to proceed without a prefix. Then we will opt to ignore the detect and propagate schema changes option for now, as we don't expect any changes in our Postgres database. The options listed here are quite useful, though. Manually handling schema changes in a production setting can be quite tricky. Now let's go to one of the most crucial parts of the connection setup, the streams. Here we can select each table individually, but for our project, we will choose to sync them all.
>
> **[1:36](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=96)** Next, we need to define the sync mode. Here we see several options, like incremental deduped+history, full refresh override, incremental append, and so on. This may initially seem complex, but it's quite straightforward. The first part refers to the source. Are we syncing all the data, or just the new and appended roles? In other words, the increments. The second part relates to the destination. Are we appending or overriding the data? In our case, the choice becomes easy because we are using logical replication. This means that all changes in the source tables can be detected so we can always use incremental extraction. To make our life easier, we can go for incremental deduped+history, so we get final tables with no duplicates plus history tables. The primary keys and the [[Cursor]] fields are automatically identified by Airbyte, so let's leave everything as is. Finally, let's select normalized traveler data. Otherwise, we would see our data as a [[JSON]] blob in the destination, and that's not necessarily what we want. More details on this later. Now, let the magic happen. Click on set up connection, And there you have it. You have created your first connection. Having created this pathway, we are all set
>
> **[3:10](https://www.linkedin.com/learning/end-to-end-data-engineering-project/establishing-connections-in-airbyte?u=76281980&t=190)** to embark on our first data synchronization and then check the data in BigQuery.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (2), [[Fetch]] (1), [[JSON]] (1)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** refers to (1), in other words (1), means that (1)
> **Prerequisites:** set up (2), setup (1)
> **CLI Commands:** make (1)
> **Env Vars:** json (1)
> **Speakers:** - [instructor] (1)

#### [Synchronizing and navigating through data](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=0)** - [Instructor] It is time to run your first data sync. To do that, you just have to click on the sync now button in the status section of your connection. Now sit back and watch as your data makes its journey from source to destination. Take a short break and give the job a few minutes to complete. In my experience, it can take anywhere from five to 10 minutes for a job like this to finish. If you're go into the job history tab and then you select view logs, you can monitor what is happening behind the scenes. You can pause the video here and come back as soon as the first thing declares success. Now it is time to take a look into the tables created in our BigQuery data warehouse. Expand the raw_data dataset and you will notice several new tables. You will find some tables identified with the naming convention airbyte_raw and the stream name. These tables are like step one for Airbyte and the first ones that get loaded into the warehouse every time we run a sync. Let's preview the content in one of these raw tables. You will notice that there are two [[Metadata]] columns, airbyte_ab_id, which is a unique identifier that Airbyte assigns to be true, and the Airbyte_emitted_at, which marks the timestamp when the record was dispatched. And finally, we have the Airbyte data, which contains the actual data in [[JSON]] format. The Airbyte normalization,
>
> **[1:33](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=93)** which we selected in our connection configuration, creates another set of tables transforming the JSON blob into a format that matches our destination. These are our deduped tables and the ones we will be using for the [[Representational State Transfer (REST)|rest]] of the project. Let's preview this data. As you can see, the JSON is transforming two columns, as we would expect. Some metadata columns are also added to these tables, such as the airbyte_ab_id, the airbyte_emitted_at, airbyte_normalized_at and airbyte_tablename_hashid. This metadata is useful for Airbyte internal functioning for the most part. Lastly, we have the tables ending with SCD. SCD stands for slowly changing dimensions. In other words, these are the history keepers. Remember our sync mode selection was incremental, deduped and history? Airbyte has delivered as promised, providing a deduped and a history table. We will not be using the history table for this project, but this can be quite useful in some cases. Now, I encourage you to interact with the data, run some simple queries, and just establish a stronger bond With these tables. In the upcoming lessons, we will transform this raw data into a cleaner
>
> **[3:07](https://www.linkedin.com/learning/end-to-end-data-engineering-project/synchronizing-and-navigating-through-data?u=76281980&t=187)** and structured format.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (3), [[JSON]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** airbyte_ab_id (2), raw_data (1), airbyte_raw (1), airbyte_emitted_at (1), airbyte_normalized_at (1)
> **Env Vars:** json (3), scd (2)
> **Definitions:** is a  (1), stands for (1), in other words (1)
> **CLI Commands:** find (1)
> **UI Navigation:** click on (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 3. Starting Data Transformation and Modeling

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to data modeling with dbt](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=0)** - [Instructor] [[Data Modeling]] is like putting together a puzzle. It converts messy, disorganized data into an easy to understand format. Take the Big Star Collectibles marketing team, for instance. They want to know their customers better, but the data is scattered across different tables in a [[PostgreSQL|Postgres]] database. That's why we come to help. We will create a table that joins all the necessary customer info, plus some calculated columns in BigQuery. Analysts can then easily study the data to get insights about customer habits. Now, navigating the world of data modeling may sound like a daunting task, but don't worry. There's a secret weapon used by data and analytics engineers around the world, dbt, standing for [[Data Build Tool (DBT)|data build tool]], is a game changing open source tool that has simplified our approach to data within warehouses. It is based on [[Python (Programming Language)|Python]] and it integrates with many modern data ecosystems. dbt empowers users to create transformations using [[SQL]]. Additionally, the SQL files can incorporate Jinja, a lightweight templating language. With Jinja, you can use control structures in your queries, such as if statements and for loops. This integration makes the sharing of repeated SQL patterns easier through macros, enhancing reusability and efficiency. Let's go over the main features of dbt. Models are the core concept of dbt.
>
> **[1:33](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=93)** They are SQL queries that define the transformation logic and structure of your data. They serve as the blueprints for creating tables or views in your data warehouse. dbt has built-in capabilities to test your data transformations, ensuring data accuracy and consistency. With dbt, you can automate documentation of your data models, making it easier for users to understand the data structure and lineage. dbt integrates with [[Version Control]] systems like [[Git]], ensuring that changes to your data models are tracked and managed effectively. Now, let's go deeper into one of the main concepts of dbt, models. Models are essentially SQL statements. They're stored as SQL files under the models directory. Each model in dbt has a one-to-one relationship with a table or view in the data warehouse. This means that for every SQL file in your model directory, there is a corresponding table or view that's materialized in your warehouse. So what does it mean to materialize a model? When you execute the dbt run command, dbt takes your model, wraps the select statement in DDL or DML and materializes it in the warehouse. DDL and DML stand for data definition language and [[Data Manipulation]] language, respectively. In this sense, dbt serves as the interface between your code, which we store and manage in a Git repo, and your data.
>
> **[3:08](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-modeling-with-dbt?u=76281980&t=188)** Don't worry if this seems abstract now, we will put it into practice. As we dive deeper into our [[Data Transformation]] with dbt, it is important to understand the two primary ways to use this tool, dbt [[CLI]] and dbt Cloud. dbt CLI is a common line tool that you can run locally, allowing you full control over your environment and processes. On the other hand, dbt Cloud is a hosted version that offers an online ID and an interface to run dbt commands. For this project, we will be using the dbt CLI. In summary, dbt brings software engineering best practices to the data analytics world, and that's why it is considered a fundamental piece of the modern data stack. I encourage you to join me and put this tool into action in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[CLI]] (3), [[Data Modeling]] (2), [[Git]] (2), [[PostgreSQL|Postgres]] (1)
> **Env Vars:** sql (7), cli (3), ddl (2), dml (2)
> **Definitions:** is a  (4), means that (1)
> **CLI Commands:** git (2), python (1)
> **Analogies:** for instance (1), such as (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Understanding the structure of a dbt project](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=0)** - [Instructor] How do we structure our dbt project to take advantage of dbt's modular design? We will create a model for each information step in our data pipeline. This structure comes with several benefits. First, it reduces redundancy. Models can be used and reused across different dbt projects. So rather than creating new code each time, we can leverage what we already have, making us more efficient. Second, it reduces complexity. It lets us break down complex area [[Microsoft Products|products]] into manageable pieces. To keep this neat modular system in check, dbt recommends a well-thought out set of naming conventions that represent each stage of the [[Data Transformation]] journey. Sources are the raw data tables fresh from the EL tool. In our case Airbyte. They are like the ingredients in a recipe, untouched and ready for prep. Staging is where we clean and standardize our source data. It's like prepping your ingredients before cooking. Each staging model is directly linked to a source table. Intermediate models are the chefs of the process. They sit between the staging and final models working on further transformations. Marts models produce our final data to be used for analysis and visualization. At the same time, the marts layer often contains two different types of models. Fact models capture the events or transactions happening in the business, like the orders, they're updated often and quickly, much like a bustling restaurant kitchen.
>
> **[1:34](https://www.linkedin.com/learning/end-to-end-data-engineering-project/understanding-the-structure-of-a-dbt-project?u=76281980&t=94)** Dimensions, on the other hand, represent business entities that don't change quite as often, like products or customers. We are going to assemble our dbt project following these conventions. Our challenge? Transforming our Big Star Collectibles' [[E-Commerce]] transactional data, by creating source, staging, and mart models into a structure that's ready for primetime analysis and reporting. To help us visualize this process, dbt projects employ a Directed Acyclic Graph, DAG. A DAG is like a map that shows the flow and dependencies of your data transformations from source to final models. Are you ready for creating your first dbt model?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[Data Transformation]] (1), [[E-Commerce]] (1)
> **Env Vars:** dag (2)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### [Initiating your dbt project](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=0)** - [Instructor] Now that you have some context on dbt, let's go ahead and set up our project. But just a quick note before that, your repo has already been initialized for dbt, meaning it has all the files that it needs to get started. These files get created when you execute dbt init. The dbt init command also creates a profiles.yml file. This file describes a connection to our data platform and is one of the most important files in a dbt project. In this case, I have moved that file into the config directory to have it handy. Now let's go to Visual Studio Code to set up our project. Let's start by opening the profiles file. Since this file tells dbt how to connect to the data platform, in this case BigQuery, it may contain information that we don't want to [[Version Control]]. Because of that, we are going to use environment variables. As you can see, this profiles file is already prepared for that. Go to the terminal and create the following variables based on your BigQuery project and data set.
>
> **[1:14](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=74)** First, we need to provide the dataset dbt will be working with, in this case it's called Transform Data. Then the key file path. It should point to where you start the [[JSON]] key for the dbt service account. After that, the data set location, in this case, it is the US. And lastly, we indicate the project ID. Remember, you can get this from your [[Google Cloud Platform (GCP)|Google Cloud]] console. Just remember, these variables are only accessible from your virtual environment, so make sure they are set when you execute anything from now on, then we need one last variable to tell dbt where to locate the profiles file. This should point to the config directory. To get this path, you can right click on the config directory and select Copy Path.
>
> **[2:19](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=139)** And then paste it as a value. Now let's verify the connection to our data warehouse using the dbt debug command.
>
> **[2:35](https://www.linkedin.com/learning/end-to-end-data-engineering-project/initiating-your-dbt-project?u=76281980&t=155)** If everything is set up correctly, you should see a message saying that all checks passed. If you are not using BigQuery, you can refer to the dbt documentation to learn how to set up your profiles.yml file. You may also need to install a different dbt plugin for your specific data platform. And that's it. We have now initialized our dbt project and set up the connection to our data warehouse. We are ready to start transforming data with dbt.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Version Control]] (1), [[JSON]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1)
> **Prerequisites:** set up (5), install (1)
> **File Paths:** profiles.yml (2)
> **Tools:** visual studio (1), terminal (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Env Vars:** json (1)
> **Speakers:** - [instructor] (1)

#### [Configuring data sources in dbt](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=0)** - [Instructor] In dbt, sources represent the raw data that is loaded into your data platform. Sources can be thought of as a starting point for dbt transformations. Without creating sources in dbt, you can refer to tables with an explicit table name, such as raw_data.customers. However, setting up sources in dbt and referring to them using the source function provides a level of abstraction that comes with several advantages. Some of the advantages are the following: single configuration point. Multiple tables from a single source can be configured in one place, decentralizes configuration and makes maintenance easier. Better visibility. Sources are identified as green nodes in the lineage graph, which makes it easier to track and understand [[Data Lineage]]. Data freshness. With the dbt source freshness command, you can check the freshness of your raw tables. This helps ensure that your transformations are always working with up-to-date data. Now let's create our sources. Inside the models folder, create a staging folder
>
> **[1:20](https://www.linkedin.com/learning/end-to-end-data-engineering-project/configuring-data-sources-in-dbt?u=76281980&t=80)** and inside the staging folder, create a file called src_big_star_db.yml. We will create our sources in this file. The sources will be the normalized tables loaded by Airbyte in our raw_data dataset. Sources in dbt are defined in YAML files, nested under the sources key. This is how your YAML file may look. In this case, name is the name of the source. Database is the name of the project in BigQuery. Schema is the name of the dataset in the project. And lastly, we list the tables under the specified dataset that we want to include as part of our sources. This configuration will point dbt to the right location in BigQuery for your source data. With sources configured in your dbt project, you now have a more maintainable, invisible way to manage your raw data tables. Not only does this help in keeping track of your data lineage, but it also enables you to check data freshness, ensuring your transformations are up to date.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Lineage]] (2)
> **Code Identifiers:** raw_data (2), src_big_star_db (1)
> **Env Vars:** yaml (2)
> **File Paths:** src_big_star_db.yml (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Add a freshness check](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-a-freshness-check?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-a-freshness-check?u=76281980&t=0)** - [Instructor] Now your task is to add a freshness check to your sources in dbt. The aim of a freshness check is to make sure that you are working with fresh data. If the data in your source is too old, the freshness check will fail or show a warning, signaling a potential issue in your data pipeline. Of course, this doesn't apply to our current pipeline as it is since our [[PostgreSQL|Postgres]] database is not undergoing any changes and our Airbyte data synchronization is not periodically running. But I thought it was a nice challenge to emulate what you would do in an actual production pipeline. So for all the tables in your raw_data source, configure a freshness check that will show a warning if the data is older than 24 hours. Feel free to check the dbt documentation for this and then come back to find out how I did that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (1)
> **CLI Commands:** make (1), find (1)
> **Warnings:** warning (2)
> **Code Identifiers:** raw_data (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Add a freshness check](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-freshness-check?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-freshness-check?u=76281980&t=0)** - [Instructor] To solve this challenge, you should have added a freshness property in your src_big_star_db.yml file similar to this. This configuration ensures that if the data in neither table is older than 24 hours, the freshness check will show a warning. I am using the _airbyte_normalized_at times time column to verify freshness. After adding the freshness key, you can execute the dbt source freshness command. As you can see, I am getting warnings here. The last time I ran the Airbyte sync was more than two days ago. Hence, the check is working as expected. This feature is quite relevant for a production pipeline. The source data is loaded by an external system, Airbyte, but with this check, you can have visibility on the extract and load processes from dbt. If there was a problem with the extract and load and the data was not flowing, you could investigate the issue and avoid working with outdated information.

> [!info]- Semantic Content
>
> **File Paths:** src_big_star_db.yml (1)
> **Code Identifiers:** src_big_star_db (1)
> **Analogies:** similar to (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Data Transformation and Modeling

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating and customizing your dbt models](https://www.linkedin.com/learning/end-to-end-data-engineering-project/creating-and-customizing-your-dbt-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/creating-and-customizing-your-dbt-models?u=76281980&t=0)** - [Instructor] It is time to create our staging and marts models. We will create two staging and one marts model. For now, let's just focus on the creation of these models. I will provide a detailed explanation of what we did in the upcoming lesson, so don't worry if things seem to be going a bit too fast for now, everything will be clear later. In the staging directory, let's create a file called stg_customers.[[SQL]].
>
> **[0:33](https://www.linkedin.com/learning/end-to-end-data-engineering-project/creating-and-customizing-your-dbt-models?u=76281980&t=33)** And then let's add the following SQL query. Now create a file call stg_orders.sql under the same directory. In this file, we will add the following query. Now it is time to create our marts model. In your model's directory, create a new directory named marts,
>
> **[1:05](https://www.linkedin.com/learning/end-to-end-data-engineering-project/creating-and-customizing-your-dbt-models?u=76281980&t=65)** and inside of that directory, create a file called dim_customers.sql. dim in this case stands for dimensions,
>
> **[1:20](https://www.linkedin.com/learning/end-to-end-data-engineering-project/creating-and-customizing-your-dbt-models?u=76281980&t=80)** and this is the SQL query for this model. Lastly, let's configure our materializations. Go to your dbt_project.yaml file and add the following options. This will configure the models in the staging directory to be materialized as views, and the marts directory to be materialized as tables. And that's it, we have now created our first set of dbt models. Meet me in the next lesson to take a closer look at what we just did and also execute our transformation pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (5)
> **File Paths:** stg_customers.sql (1), stg_orders.sql (1), dim_customers.sql (1), dbt_project.yaml (1)
> **Code Identifiers:** stg_customers (1), stg_orders (1), dim_customers (1), dbt_project (1)
> **Env Vars:** sql (2)
> **Prerequisites:** configure (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Definitions:** stands for (1)

#### [Reviewing and executing dbt](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=0)** - [Instructor] Let's recap everything we have done with DVT and take a closer look at the [[SQL]] queries that form our models. In the previous lesson, we began by creating staging models in the staging directory. The purpose of the staging models is to pull our raw data and put it into a more workable format. The models, staging customers and staging orders are essentially selecting a subset of columns from our source tables, raw data customers, and raw data orders respectively. For example, in our staging customers model, we are not propagating the customer name and last name. This could be useful for [[Privacy]] reasons. The staging models are also the right place to make small transformations, like casting. For example, we could cast the daytime columns here to timestamped if we would like to. You may have noticed that we are using the source function to refer to the source table. Using this function is better than directly naming these tables because it keeps all configurations in one place. Imagine that we are using the order source data in other models and we need to update something in the source. In that case, we only need to go to our src_big_star_db.yml file to make those changes. And as you saw in our previous challenge, with sources, we can make sure we are working with fresh data in all of our models. Next, we created the match model dim_customers
>
> **[1:36](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=96)** under the marts directory. The purpose of this model is to transform our stage data into a format ready for analysis. Joining data from our two stage models and adding calculated fields like first_order_date, most_recent_order_date, and number_of_orders. Then we set the materializations for our models in the DVT project file. Materializations determine how our transformations should be physically represented in our data platform. With views for our staging models and tables for our mart models, we can achieve a balance between performance and resource usage. Now let's see what we have done in action by executing our first DVT run.
>
> **[2:33](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=153)** Remember to execute this from the DVT transformation directory. And there you have it, our first successful run. Now let's navigate to our data warehouse and check the transformed_data dataset.
>
> **[3:02](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=182)** As you can see, DVT has materialized our models. Here we see a view for each of our staging models and a table for our marts model. Let's just quickly preview our dim_customers table.
>
> **[3:25](https://www.linkedin.com/learning/end-to-end-data-engineering-project/reviewing-and-executing-dbt?u=76281980&t=205)** And congrats. You are well on your way to mastering [[Data Transformation]] with DVT, but the learning doesn't stop here. Up next, we will explore how to ensure the validity of our data with DVT testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[Privacy]] (1), [[Data Transformation]] (1)
> **Env Vars:** dvt (7), sql (1)
> **Code Identifiers:** dim_customers (2), src_big_star_db (1), first_order_date (1), most_recent_order_date (1), number_of_orders (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (2), imagine (1)
> **File Paths:** src_big_star_db.yml (1)
> **Cross-References:** as you saw (1)
> **UI Navigation:** navigate to (1)

#### [Securing your data with dbt tests](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=0)** - I remember not too long ago, I was working on a project to enhance a legacy data pipeline, and our team was facing all sorts of challenges from large data sets to super complex [[SQL]] queries. Despite our best efforts, we and sometimes our stakeholders, were finding inconsistencies in the data almost on a daily basis. This highlighted for us the importance of testing in our [[Data Pipelines]]. Just as software engineering highlights the importance of unit integration and [[End-to-end Testing]], we should apply the same to our data projects. Especially when we have tools like dbt, which make it easy for us to ensure the validity and accuracy of our data. In dbt, tests are statements that are run against your materialized models, confirming they comply with your assertions. There are two primary types of tests in dbt. Generic tests are written in YAML and return the number of records that do not meet your assertions. They run on specific columns in a model. Singular tests are specific queries. These queries are run on the entire model. dbt comes with four generic built-in tests. Unique tests ensure every value in a column is unique. Similarly, Not_null tests confirm every value in a column is not null. Accepted_values test make sure every value in a column equals a value in a provided list.
>
> **[1:33](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=93)** And finally, relationship tests ensure every value in a column exists in a column, in another model. These are the type of tests we will be exploring. Now, let's go to Visual Studio Code and write some tests for our dbt project. Start by creating a file called staging big star db dot yaml inside of the staging directory. In this file, we are going to add unique and not_null test to the primary case of each of our staging models. And now let's see this test in action. Run the command dbt test in your terminal. And all green, perfect. Next, let's add an accepted values test to the order status column in our staging orders model. But before doing so, let's see what unique values we have in our data. Let's go to the orders raw data and get the unique values of the status column. Here we need to select the distinct status and we can remove the [[Representational State Transfer (REST)|rest]] of the query that Bitquery suggests for us. Now let's click on run. And now you should have a list of unique status values. Make sure to copy those. And now let's send the accepted values test. Once again, run the dbt test command.
>
> **[3:11](https://www.linkedin.com/learning/end-to-end-data-engineering-project/securing-your-data-with-dbt-tests?u=76281980&t=191)** And there you go, all green for now. Finally, let's see what happens when a test fails. This can be an important learning experience. Temporarily remove the unavailable value from the list of values. And don't forget to save. Let's dbt test again. As you can see, dbt provides useful feedback when a test fails. If this was a production pipeline and all of a sudden we start receiving invalid status values, which in fact happens, we will be notified right away. Now, let's not forget to add back the unavailable value. By writing and running this test, you are ensuring your data behaves the way you expect it to, and that's a superpower in [[Data Engineering]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (1), [[Data Pipelines]] (1), [[End-to-end Testing]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Data Engineering]] (1)
> **UI Navigation:** go to (2), select the (1), click on (1)
> **CLI Commands:** make (3)
> **Env Vars:** sql (1), yaml (1)
> **Tools:** visual studio (1), terminal (1)
> **Best Practices:** make sure to (1), don't forget (1)
> **Code Identifiers:** not_null (1)
> **Speakers:** - i (1)

#### [Challenge: Add tests to the Marts model](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-tests-to-the-marts-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-tests-to-the-marts-model?u=76281980&t=0)** - [Narrator] Now is your turn again. Your task is to add more tests to your models. Add a relationship tests to the stg_orders. Add unique and not_null tests to your dim_customers model. Let me describe the challenge in more detail. For the stg_orders model, you should check that there is referential integrity with the customer ID column in the stg_customers model. And for the dim_customers model, add a unique test for the customer_id column. And also a not_null test for the customer_id, email, city, and country. Remember that you can always check the DBT documentation. And then, come back here to compare your test with mine in the next video.

> [!info]- Semantic Content
>
> **Code Identifiers:** stg_orders (2), not_null (2), dim_customers (2), customer_id (2), stg_customers (1)
> **Env Vars:** dbt (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Add tests to the Marts model](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-tests-to-the-marts-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-tests-to-the-marts-model?u=76281980&t=0)** - [Instructor] Time to check your tests. Let me walk you through what I did to solve this challenge. I started by adding a relationship test into the staging big star db yml file, under the staging orders model. This will ensure that the customer ID column always contains a valid ID existing in the staging customers table. Then I created a new file called marts big star db dot yml within the marts directory. And this is how it looks. It is quite similar to what we did at the beginning to test the staging models. You can check if your tests are correct by executing the dbt test command like we did before. If any test fails at this point, carefully check your models and the test configurations to find and fix any issues. And there you go. For me, all tests are completed in green.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Automating documentation in dbt](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=0)** - Documentation may not be as exciting as coding or modeling, but let me tell you, it is a hidden treasure that enables efficient and effective teamwork in analytics. Imagine that you are a newcomer into a team and you are handed a DBT project. You open it up and it's just code, just a vast sea of [[SQL]] files and you are supposed to navigate that. Sounds daunting, right? But what if there is a map? Well-structured and detailed documentation acts like that map. One tricky part about documentation is that it tends to lag behind code. DBT brings coding and documentation closer together to make your life easier. For example, in DBT, your SQL models can come together with YAML files that document them. This type coupling means that your code and your documentation can evolve with one another and remove the usual disconnect. It is time to document our models. Let's start with the staging ones. Open your staging big star db YAML file. Now add a description for the customer ID column in the staging customer's model. It is as simple as adding a description key under that column. Let's do the same for the staging on this model and document all the columns we have here.
>
> **[1:41](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=101)** And there you go. Now all of these columns in our models also have a description. Feel free to add the [[Representational State Transfer (REST)|rest]] of the columns that belong to these models and let's see your work in action. Go ahead and generate the documentation by running DBT docs generate command in your terminal. And then execute the DBT docs serve command. This command starts a web server on port 8080 to serve your documentation locally and then opens the documentation site in your browser. And this is our documentation page. Let's go to our staging models. And here we can see a full picture of our model and we can also see the description for the customer ID column that we just added. Same for our orders model. We can see the description we added for these columns. Imagine how useful this page can be for collaboration. Feel free to check more things around here in the documentation page. While we are here, let's not forget to check out the lineage graph for our project. This graph reflects all of our transformations and dependencies in a visually intuitive form. Now, not only you can create and test models, but you can document them too. No more of what does this model do, or what is this column for? With your well-crafted documentation,
>
> **[3:14](https://www.linkedin.com/learning/end-to-end-data-engineering-project/automating-documentation-in-dbt?u=76281980&t=194)** your DBT project is now self-explanatory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** dbt (6), sql (2), yaml (2)
> **Analogies:** imagine (2), for example (1), picture (1)
> **Documentation:** the documentation (3)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (1)
> **Ports:** port 8080 (1)
> **Tools:** terminal (1)

#### [Completing your dbt project: A full development cycle](https://www.linkedin.com/learning/end-to-end-data-engineering-project/completing-your-dbt-project-a-full-development-cycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/end-to-end-data-engineering-project/completing-your-dbt-project-a-full-development-cycle?u=76281980&t=1)** - [Instructor] We have accomplished so much in the past lessons. Now, we will bring everything together and persist our changes in [[GitHub]]. In Visual Studio Code, go to the Source Control section on the left panel, check all the modification and additions we have made to our project, and then enter a commit message. After that, let's commit. Take into account that this action may look different to you. For example, I am pushing these changes to a branch called Finished, and you are probably pushing to main. Finally, let's sync our changes. Awesome, you have just pushed your dbt project to your GitHub repo. Next, let's run the entire project. dbt has a great command for this called dbt Build. Let's run that in the terminal. Then dbt Build Command is a holistic command that encapsulates the actions of dbt run and dbt test. It executes everything in the correct order according to your project's lineage graph, ensuring that dependencies are a handled correctly. And congrats, you have now experienced a complete development cycle for a dbt project. From setting up sources and creating models to testing, documenting, and running your project, you have seen the power of dbt firsthand and learned the foundational skills
>
> **[1:34](https://www.linkedin.com/learning/end-to-end-data-engineering-project/completing-your-dbt-project-a-full-development-cycle?u=76281980&t=94)** to carry into your own data analytics projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2)
> **Tools:** github (2), visual studio (1), terminal (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** github repo (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 5. Data Orchestration

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to data orchestration with Dagster](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-orchestration-with-dagster?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-orchestration-with-dagster?u=76281980&t=0)** - [Instructor] Imagine that you have a number of tasks all needing to be done in the right way and at the right time. That's where data orchestration steps in. It coordinates data tasks to ensure everything happens at specific times and in a specific order. Data orchestration tools provide several benefits. They streamline complex workflows, saving time and reducing potential for human error. They handle the complexity of managing dependencies between tasks so that everything happens in the correct sequence. They ensure that a single hiccup won't stop your entire operation. For example, some orchestrators will retry a job in case of transient failures. They keep a watchful eye on your workflows, recording their activities for easier troubleshooting and performance optimization. In the diverse landscape of orchestration tools, Dagster shines with its open-source nature. It allows for defining and managing [[Data Pipelines]] with relative ease, thanks to its [[Python (Programming Language)|Python]]-based framework, and it's built to be used at every stage of the data development lifecycle from local development to staging environments, all the way to production. Before we move further, there are some key concepts in Dagster that it's important to know about. Software Defined Assets are persistent storage objects, like tables or machine learning models. Ops are the core computational units that perform tasks like executing [[Database Queries]].
>
> **[1:34](https://www.linkedin.com/learning/end-to-end-data-engineering-project/introduction-to-data-orchestration-with-dagster?u=76281980&t=94)** Graphs are sets of interconnected ops that work together to accomplish more complex tasks. Jobs are the main units of execution and monitoring. They are composed of ops connected through data dependencies. And lastly, schedules and sensors initiate runs. Schedules trigger runs at fixed intervals, while sensors initiate them based on external changes. Feel free to consult the Dagster documentation to learn more about these concepts. Stay tuned as we explore how to schedule Airbyte jobs and trigger DBT transformations post-ingestion, establishing dependencies to ensure that DBT transformations only start after successful data loading via Airbyte.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Pipelines]] (1), [[Python (Programming Language)|Python]] (1), [[Database Queries]] (1)
> **Env Vars:** dbt (2)
> **Analogies:** imagine (1), for example (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### [Integrating dbt models with Dagster assets](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=0)** - [Instructor] So far we have covered dbt and Dagster separately, but what if we could unite their strengths? That is precisely what we are going to do in this lesson. It turns out that Dagster software defined assets, are quite similar to dbt models. Both are basically tying together data assets and the computations that create and update them. Let's do a little comparison between a dbt model and a Dagster asset at the code level. In the image, the dbt model staging orders comes from a data source name raw data orders. Now compare that to a Dagster asset. The asset key is staging orders and raw data orders is provided as a dependency. See the resemblance. We will leverage the similarity to integrate dbt with Dagster smoothly. Now let's dive into the practical part. Just as with dbt, I have created an empty Dagster project for you in the Dagster orchestration directory. Our first step is to load the dbt models into Dagster as assets using the Dagster dbt library. For that, we need to adjust a init file in our assets directory. Go to that file and add the following code. Here we are using the load assets from dbt project method. This method takes a dbt project directory and a dbt profile directory. Essentially what we are doing is telling Dagster to take all of these dbt models in this path
>
> **[1:35](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-dbt-models-with-dagster-assets?u=76281980&t=95)** and treat them as assets. We also created a dbt [[CLI]] resource to allow Dagster to interact with dbt. You may also have noticed that we are using a new environment variable, dbt project directory. Let's create that. Remember that you can go to the dbt project directory and copy the path and then paste it as a value. Next, we are going to define a code location for our Dagster project. For that we need to adjust another init file. This time in the Dagster orchestration directory, let's remove and update with the following code. And just like that, Dagster knows where to find everything it needs. In this case our assets and resources. Now that we have done the behind the scenes work, it is time for the grand reveal. Make sure you are in the Dagster orchestration path and let's fire up, dug it, Dagster UI from the terminal. Remember that all of your environment variables need to be set as when we were working in the dbt project. And then let's go to the Dagster web server in the address indicated here. You can command click to follow that link. And there you go, our dbt models are now displayed as assets in Dagster and that is how we bridge dbt and Dagster. Now you have a unified [[Data Management]] platform, which will make handling complex data workflows a breeze.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (1), [[Data Management]] (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** go to (3)
> **Analogies:** similar to (1), just like (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Integrating Airbyte connections with Dagster assets](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=0)** - [Instructor] It is time for the next big step: integrating Airbyte and Dagster. Let's start by recalling that Airbyte connections define a series of data streams synchronized between a source and a destination. When a sync happens, a replica of the data from each stream gets written into the destination, in this case, in the form of tables in our BigQuery data warehouse. How does Dagster handle this? It is simple. Each replica generated in the destination is represented as an asset in Dagster. Mapping Airbyte streams to assets comes with several advantages. First, you can visualize the streams involved in an Airbyte connection. You can execute syncs from Dagster. Defining downstream transformations that rely on data produced by Airbyte becomes easier. You can also track historical [[Metadata]] and logs for each data stream. And lastly, tracing [[Data Lineage]] through Airbyte and other tools become straightforward. Let's go back to Visual Studio Code. First of all, if your Dagster web server is still running, let's stop it while we make changes to the code. You can do that by using Control + C. Our first step in integrating Airbyte with Dagster is setting up an Airbyte resource. This resource contains details about our Airbyte instance location and the necessary access credentials. Here is how you add it to your assets in each file. Now let's load the Airbyte assets into Dagster
>
> **[1:35](https://www.linkedin.com/learning/end-to-end-data-engineering-project/integrating-airbyte-connections-with-dagster-assets?u=76281980&t=95)** from our live Airbyte instance. the load_assets_from_airbyte_instance method retrieves all the connections defined in our Airbyte instance, creating assets for each data stream. The key_prefix specifies where these assets are stored in BigQuery. Adding it is crucial for Dagster to match dependencies between Airbyte and DBT. Let's not forget to add the necessary imports. You may have noticed that we use an environment variable to indicate the Airbyte password. We need to create that variable. And now let's launch Dagit again. Make sure Airbyte is running, otherwise Dagster will not be able to connect to it. And now let's go to Dagit. Once in Dagit, click on the reload definitions button. This ensures that Dagit reflects all the changes and additions we made to our assets in the previous steps. And then click on View Global Asset Lineage. And there it is, our complete pipeline. Here we see the Airbyte assets and they appear as upstream dependencies for our staging customers and staging orders models. It all looks great. In the next lesson, we will get to see all of our work payoff as we materialize our entire pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (1), [[Data Lineage]] (1)
> **UI Navigation:** click on (2), go to (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** load_assets_from_airbyte_instance (1), key_prefix (1)
> **Cross-References:** go back to (1), in the next (1)
> **Env Vars:** dbt (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### [Materializing assets using Dagit](https://www.linkedin.com/learning/end-to-end-data-engineering-project/materializing-assets-using-dagit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/materializing-assets-using-dagit?u=76281980&t=0)** - [Instructor] We have come a long way in integrating our data tools. Now, it is time for the magic to happen. Let's finally click on the Materialize All button at the top right corner of the Dexter UI. This will trigger a run that goes through the whole process of materializing all our assets. Essentially, it is executing the ops contained within each asset, and saving the results to persistent storage. Let's go to the Airbyte UI and see how a sync has been triggered by Dexter. And now we see how the sync is running. We had already run our initial sync manually, and since there is no new data in our [[PostgreSQL|Postgres]] database, this sync will not ingest new data. A good challenge for you here would be to add new rows to the Postgres database, and materialize again to see new data flowing through the pipeline. As you can see, our whole pipeline is being materialized, and it will take some time for the process to complete. Feel free to pause the video here and come back once your process has completed. Okay. Our pipeline has been materialized. Now, there are some things we can explore in the Dexter UI. For example, clicking on an asset will open a sidebar, presenting more details about it. For example, in this case, the [[SQL]] statement that generated the model and [[Statistics]] about the last materialization. Feel free to explore around. Oh, and by the way, don't forget to commit
>
> **[1:34](https://www.linkedin.com/learning/end-to-end-data-engineering-project/materializing-assets-using-dagit?u=76281980&t=94)** and push your Dexter code to [[GitHub]]. By now, you have got a fully operational data pipeline, which is viewable and manageable from Dexter. Isn't it satisfying to see all the individual pieces come together in this orchestrated dance of data?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (2), [[SQL]] (1), [[Statistics]] (1), [[GitHub]] (1)
> **UI Navigation:** click on (1), go to (1)
> **Analogies:** for example (2)
> **Env Vars:** sql (1)
> **Tools:** github (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Add a schedule to your data pipeline](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-a-schedule-to-your-data-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/end-to-end-data-engineering-project/challenge-add-a-schedule-to-your-data-pipeline?u=76281980&t=8)** - [Instructor] Now that you have your data pipeline set up in Dagster, let's put it on a schedule. Your challenge is to add a schedule that runs every hour and triggers a full execution of your pipeline, including all the assets. Feel free to consult the extra documentation or tutorials, and then meet me back here to compare your solution to mine in the next video.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Add a schedule to your data pipeline](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-schedule-to-your-data-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/solution-add-a-schedule-to-your-data-pipeline?u=76281980&t=0)** - [Instructor] Let me walk you through the steps I followed to solve this challenge. In the top level in each file, I created a new job using the define_asset_job method. In Dagster, a job allows us to focus on a set of assets and materialize them using a single action. Here I use Dagster's AssetSelection to select all available assets. Then I created a schedule. A schedule in Dagster triggers a jobs run at specific intervals. The interval in this case is given by the cron_scheduler. And last, I updated the definitions to include the new job and schedule. Let me launch Dagit and show you how this looks there. In the Dagster UI, I will navigate to the overview and schedules tab. And here is the newly added schedule linked to the job. There you have it, a schedule run for our data pipeline.

> [!info]- Semantic Content
>
> **Code Identifiers:** define_asset_job (1), cron_scheduler (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [An evolving field](https://www.linkedin.com/learning/end-to-end-data-engineering-project/an-evolving-field?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/end-to-end-data-engineering-project/an-evolving-field?u=76281980&t=0)** - Congratulations on completing this journey into the world of modern [[Data Engineering]]. We have covered a lot of ground together. You are now equipped with the experience and tools to solve real world data engineering problems. I hope this project has given you a strong foundation and a great addition to your portfolio. But remember, the learning doesn't stop here. Data engineering is a vast field that is always evolving. There are always new tools, techniques, and best practices to discover. So if you are looking for next steps after completing this project, here is what I recommend. First, you can add more sources and transformations to your project. In data engineering, we normally handle a variety of data sources such as APIs or files. Feel free to include those in your project. Then you can go deeper into each of the tools we have used. They may have advanced functionalities that we didn't have the time to cover in this course. You can also consider other tools in the modern data stack for a specific project you may have. And lastly, you can consider learning more about [[Data Modeling]] techniques as they are really important and can provide a lot of value. Remember, you can continue the conversation by posting questions in the Q and A section of the course. And don't forget to follow me on [[LinkedIn]]. I love creating content for data professionals. Keep exploring, keep learning, and above all,
>
> **[1:34](https://www.linkedin.com/learning/end-to-end-data-engineering-project/an-evolving-field?u=76281980&t=94)** enjoy the journey into the ever evolving field of data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Engineering]] (4), [[Data Modeling]] (1), [[LinkedIn]] (1)
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