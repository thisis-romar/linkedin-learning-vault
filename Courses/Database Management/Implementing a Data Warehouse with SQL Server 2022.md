---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: implementing-a-data-warehouse-with-sql-server-2022
url: "https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022"
duration_minutes: 157
duration: 2h 37m
level: Intermediate
updated: 5/14/2025
learners: 77502
skills:
  - Data Warehousing
  - Microsoft SQL Server
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQEKNZbYkmoE3g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1674858013001?e=2147483647&amp;v=beta&amp;t=t1u8rAppdpLFLynfnbo3776a2HS6bYrKIgMZJOtC1lE"
linkedin_topic: Database Management
learning_paths:
  - '[[Advance Your MS SQL Server Skills]]'
prev_courses:
  - '[[Automating SQL Server with dbatools]]'
next_courses:
  - '[[SQL Server 2022 Administration]]'
path_nav: '[{"path":"Advance Your MS SQL Server Skills","position":5,"total":9,"prev":"Automating SQL Server with dbatools","next":"SQL Server 2022 Administration"}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/software-development
  - skill/data-warehousing
  - skill/microsoft-sql-server
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Implementing%20a%20Data%20Warehouse%20with%20SQL%20Server%202022.md)

![Implementing a Data Warehouse with SQL Server 2022](https://media.licdn.com/dms/image/v2/C560DAQEKNZbYkmoE3g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1674858013001?e=2147483647&amp;v=beta&amp;t=t1u8rAppdpLFLynfnbo3776a2HS6bYrKIgMZJOtC1lE)

# Implementing a Data Warehouse with SQL Server 2022

> Data warehouses solve fundamentally different problems than a traditional transactional database, and SQL Server Data Warehouses provide a different model for storing valuable data. In this course, database expert Adam Wilbert guides you through the process of developing data warehouses in SQL Server 2022 to provide a robust, trustworthy platform to serve all your business intelligence reporting a

> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022) | 2h 37m | Intermediate | 78K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Storing information in a data warehouse](#storing-information-in-a-data-warehouse)
  - [What you should know](#what-you-should-know)
  - [Set up the example databases](#set-up-the-example-databases)
- [**1. Data Warehouse Foundations**](#1-data-warehouse-foundations) (5 videos)
  - [Data warehouse core concepts](#data-warehouse-core-concepts)
  - [Transactional DBs vs. data warehouses](#transactional-dbs-vs-data-warehouses)
  - [Dimensions and facts](#dimensions-and-facts)
  - [Star and snowflake schemas](#star-and-snowflake-schemas)
  - [Hardware and infrastructure](#hardware-and-infrastructure)
- [**2. Create a Data Warehouse**](#2-create-a-data-warehouse) (4 videos)
  - [Create a data warehouse in SQL Server](#create-a-data-warehouse-in-sql-server)
  - [Design dimension tables](#design-dimension-tables)
  - [Design fact tables](#design-fact-tables)
  - [Create an indexed view](#create-an-indexed-view)
- [**3. Columnstore Indexes**](#3-columnstore-indexes) (3 videos)
  - [Advantages of columnstore indexes](#advantages-of-columnstore-indexes)
  - [Memory-optimized columnstore table](#memory-optimized-columnstore-table)
  - [Rebuild columnstore indexes](#rebuild-columnstore-indexes)
- [**4. Extract, Transform, and Load**](#4-extract-transform-and-load) (3 videos)
  - [What are ETL and SSIS?](#what-are-etl-and-ssis)
  - [Understand data flow](#understand-data-flow)
  - [Establish control flow](#establish-control-flow)
- [**5. Implement an Azure Synapse Analytics Dedicated SQL Pool**](#5-implement-an-azure-synapse-analytics-dedicated-sql-pool) (6 videos)
  - [Hosting a DW in the cloud](#hosting-a-dw-in-the-cloud)
  - [Create a dedicated SQL Pool](#create-a-dedicated-sql-pool)
  - [Reserve resources with workload isolation groups](#reserve-resources-with-workload-isolation-groups)
  - [Classify workloads](#classify-workloads)
  - [Load data into a staging table](#load-data-into-a-staging-table)
  - [Pause and remove resources in Azure](#pause-and-remove-resources-in-azure)
- [**6. Enforce Data Quality**](#6-enforce-data-quality) (3 videos)
  - [SQL Server Data Quality Services](#sql-server-data-quality-services)
  - [Cleanse data with DQS](#cleanse-data-with-dqs)
  - [Create a custom knowledge base](#create-a-custom-knowledge-base)
- [**7. Master Data Services**](#7-master-data-services) (6 videos)
  - [Introduction to Master Data Services](#introduction-to-master-data-services)
  - [Install MDS and IIS](#install-mds-and-iis)
  - [Configure Master Data Services](#configure-master-data-services)
  - [Deploy a sample MDS model](#deploy-a-sample-mds-model)
  - [Install the MDS Excel add-in](#install-the-mds-excel-add-in)
  - [Update master data in Excel](#update-master-data-in-excel)
- [**8. Consume Data from the Warehouse**](#8-consume-data-from-the-warehouse) (1 videos)
  - [Business intelligence applications](#business-intelligence-applications)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Storing information in a data warehouse
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/storing-information-in-a-data-warehouse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/storing-information-in-a-data-warehouse?u=76281980&t=0)** - [Adam] It's been said that information is power, and in the world of business, having more information and being able to access it quickly can give you a competitive advantage.
>
> **[0:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/storing-information-in-a-data-warehouse?u=76281980&t=10)** There's been an explosion in recent years in the importance of business intelligence, and one of the key components of a BI system is a single, complete, and trustworthy repository of raw data called a data warehouse.
>
> **[0:24](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/storing-information-in-a-data-warehouse?u=76281980&t=24)** Hello, I'm Adam Wilbert, and I've spent the last decade helping organizations get the most value from their data.
>
> **[0:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/storing-information-in-a-data-warehouse?u=76281980&t=31)** I'm excited to introduce you to the concepts of data warehousing and the tools available in SQL Server 2022.
>
> **[0:38](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/storing-information-in-a-data-warehouse?u=76281980&t=38)** So join me on LinkedIn Learning to see how to develop data warehouses that provide a robust, trustworthy platform to serve all of your business intelligence reporting and analysis workloads.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[Business Intelligence (BI)|Business intelligence]] (2), power (1), business (1), bi (1)
> **Env Vars:** sql (1)
> **Definitions:** is a  (1)
> **Speakers:** - [adam] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-you-should-know?u=76281980&t=0)** - [Narrator] In order to get the most out of this course, you should have some familiarity with SQL Server and designing relational databases.
>
> **[0:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-you-should-know?u=76281980&t=8)** My expectation is that you've worked with SQL Server Management Studio and can write basic Transact SQL queries.
>
> **[0:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-you-should-know?u=76281980&t=15)** If you need a quick introduction, or feel like you might want a refresher on a few of these topics, then a great place to start is with my course, "SQL Server 2022 Essential Training."
>
> **[0:26](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-you-should-know?u=76281980&t=26)** That course will give you everything that you need to make the most of your time here learning about the role data warehouses play in an enterprise's business intelligence solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft SQL Server|Sql server]] (3), [[Relational Databases]] (1), management (1), [[SQL]] (1), data (1)
> **Env Vars:** sql (4)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### Set up the example databases
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=0)** - [Instructor] If you'd like to follow along on your own computer, then you'll need access to a SQL Server instance and Management Studio.
>
> **[0:07](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=7)** I'm going to be using SQL Server 2022 and Management Studio version 19, but you can use whatever is easily available.
>
> **[0:16](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=16)** You'll also need a couple of sample databases and you can get them from the Microsoft SQL Server samples repository at [github.com/microsoft/sql-server-samples](https://github.com/microsoft/sql-server-samples).
>
> **[0:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=27)** Here you'll find lots of different databases designed around different learning topics and programming languages.
>
> **[0:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=34)** In the releases in this repository section, you'll find a link to navigate to the full list of releases.
>
> **[0:41](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=41)** Go ahead and click that link.
>
> **[0:43](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=43)** Then scroll through this list until you get to the AdventureWorks section.
>
> **[0:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=49)** Once you get there, you'll scroll down just a little bit farther to find the database that we want to work with.
>
> **[0:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=54)** In our case, we want the one called AdventureWorksDW2019.bak.
>
> **[1:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=60)** This is a data warehouse version of the AdventureWorks Database.
>
> **[1:04](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=64)** I'll go ahead and click that link to download the file.
>
> **[1:07](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=67)** Then we can scroll down all the way to the very bottom of the page and flip over to page number two.
>
> **[1:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=75)** Then we'll scroll down just a little bit farther until we get to the Wide World Importers section.
>
> **[1:21](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=81)** Here we want a file called WideWorldImportersDW-full.bak.
>
> **[1:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=87)** Go ahead and click that one as well.
>
> **[1:30](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=90)** These databases will give us two different looks at examples of data warehouse implementations that we can compare.
>
> **[1:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=97)** Once they're both downloaded, we need to move them into the SQL Server backup folder.
>
> **[1:41](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=101)** To do that, I'll go out to my desktop and into the downloads folder.
>
> **[1:44](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=104)** Here are the two files that I just downloaded and I'm going to copy them to my clipboard.
>
> **[1:50](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=110)** Then we'll go into the C drive into Program Files, Microsoft SQL Server.
>
> **[1:55](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=115)** Then into the folder that represents the server that we're working with.
>
> **[1:59](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=119)** I'm using MSSQL 16 and my server is named MSSQL Server, so I'll go into that folder.
>
> **[2:06](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=126)** Then we'll go into MSSQL and finally into the Backup folder.
>
> **[2:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=130)** Now, the first time you try and go in here, you might get this message that says you don't currently have permission.
>
> **[2:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=135)** Go ahead and press the Continue button and you should be let in.
>
> **[2:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=138)** You might have to right click on that folder and go into properties to adjust folder permissions if it doesn't let you in automatically.
>
> **[2:25](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=145)** Once you're inside of here, just right click and press paste to paste in your two backed up files.
>
> **[2:30](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=150)** Then we can go into Management Studio and restore those databases.
>
> **[2:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=154)** I'll right click on the databases folder in the Object Explorer panel and choose Restore Database.
>
> **[2:40](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=160)** We'll choose the option for the device source and press the ellipses button on the far right.
>
> **[2:46](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=166)** Then press add and I'll choose the first one, AdventureWorksDW2019.bak.
>
> **[2:52](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=172)** Press OK, OK, and OK one more time to restore that database.
>
> **[2:57](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=177)** Once that's done, we need to do it one more time.
>
> **[3:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=180)** I'll right click Databases, Restore Database, choose the option for a device and press ellipses, press the add button, then choose the WideWorldImportersDW-full.bak file.
>
> **[3:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=193)** Press OK, OK, and OK again.
>
> **[3:19](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=199)** When that's done we'll have two different data warehouse databases that we can compare.
>
> **[3:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=203)** So that sets up the database server.
>
> **[3:26](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=206)** The last thing you'll need are the exercise files that I have provided for the course.
>
> **[3:30](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=210)** You can download them from the courses overview page and I've placed them here on the desktop for easy access.
>
> **[3:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/set-up-the-example-databases?u=76281980&t=217)** Once you've got everything set up, you'll be ready to follow along as we explore data warehouses in SQL Server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (7), database (6), [[Microsoft SQL Server|Sql server]] (4), data (4), management (3)
> **Env Vars:** sql (6), mssql (3)
> **UI Navigation:** scroll down (3), click on (2), navigate to (1)
> **CLI Commands:** find (3)
> **Prerequisites:** you'll need (2), set up (1)
> **Exercise Files:** download the (1), exercise files (1)
> **URLs:** [github.com](https://github.com) (1)
> **Versions:** version 19 (1)


### 1. Data Warehouse Foundations

[↑ Back to Table of Contents](#table-of-contents)

#### Data warehouse core concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=0)** - [Instructor] Let's kick off this course with an explanation about what a data warehouse is.
>
> **[0:05](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=5)** A data warehouse plays a critical role in an enterprise's business intelligence system.
>
> **[0:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=10)** In a typical scenario, important business data is initially collected in operational or production databases.
>
> **[0:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=18)** These can be separate databases for customer transactions and sales data, or human resources and employment records, or corporate financial information.
>
> **[0:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=27)** They can even be external data sources maintained by a vendor or a government regulator.
>
> **[0:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=34)** All of this data is consolidated through an ETL process that extracts or copies the data from the disparate source databases, transforms it into a common format and arrangement, and then loads or writes it into a single destination database.
>
> **[0:51](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=51)** This single repository is the data warehouse.
>
> **[0:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=54)** Then once everything is brought into a common, unified location, the data can be used for analysis and reporting with the knowledge that everyone is pulling business insights from the same set of information.
>
> **[1:07](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=67)** The data warehouse represents the unified truth that everyone in the enterprise can agree on.
>
> **[1:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=74)** Data warehouses are designed to collect data over long periods of time, and they aggregate and format that data so that it can better support the analysis and reporting requirements of the enterprise.
>
> **[1:26](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=86)** In this way, they differ from the transactional databases that are used for real-time data collection.
>
> **[1:32](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=92)** However, data warehouses use the same table structures with attribute columns and data types and relationships.
>
> **[1:39](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=99)** They also use the same underlying database engine.
>
> **[1:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=102)** In our case, SQL Server.
>
> **[1:44](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=104)** And the same query language, SQL.
>
> **[1:48](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=108)** The difference is is that they only receive data through a standardized method, the extract, transform, and load process.
>
> **[1:55](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=115)** And once loaded, that data doesn't change very often.
>
> **[1:59](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=119)** Where production databases store information that might be entered and modified by customers or employees or automated sensors or any number of different data entry points, the ETL process alone is used to populate the data warehouse.
>
> **[2:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=134)** This allows it to be able to organize the data, make it more consistent and predictable across the various inputs, and aggregate it into meaningful groups that support further analysis.
>
> **[2:26](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=146)** The ETL is typically run on a regular schedule most often nightly, so that the data warehouse can support consistent analyses for everyone in the organization between the loads.
>
> **[2:38](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=158)** So what are the benefits of incorporating a data warehouse into your enterprise business intelligence strategy?
>
> **[2:44](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=164)** The first is that it relieves system resource pressure from your operational databases by removing reporting and analysis workloads.
>
> **[2:53](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=173)** This allows your primary database to focus on the transactional needs of the business, and keep those resources dedicated to writing and updating records in order to keep up with the real-time workload of the business.
>
> **[3:06](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=186)** Implementing a data warehouse also helps remove issues related to database isolation level locking contention, which can be caused when complex analysis queries are run against the database, preventing database updates when the query executes.
>
> **[3:22](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=202)** Next, a data warehouse presents a single, consistent point of contact for all analysis and reporting needs, regardless of the original source of the data.
>
> **[3:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=211)** This makes queries easier to write and maintain and greatly simplifies the process of gaining insight for users and decision makers across the organization.
>
> **[3:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=222)** Data warehouses also present an opportunity to tune the database for analysis query performance.
>
> **[3:48](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=228)** Because a data warehouse database is solving an inherently different problem from the operational database, different decisions can be made about the structure of tables and relationships, and the types of resources dedicated to the system.
>
> **[4:02](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=242)** We're going to talk a lot about this benefit throughout the course.
>
> **[4:06](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=246)** And finally, data warehouses allow an enterprise to maintain historical data, even when the operational databases do not.
>
> **[4:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=254)** Again, this relieves pressure from the operational databases by allowing them to focus strictly on the current state of the data.
>
> **[4:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=263)** As you can see, a data warehouse is just another database in the enterprise, but they serve a different purpose from the relational databases that you might be used to working with.
>
> **[4:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=273)** The primary goal of a data warehouse is to support the decision-making needs of the enterprise.
>
> **[4:39](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/data-warehouse-core-concepts?u=76281980&t=279)** And as such, they require a different approach to their design.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (33), database (10), [[Databases]] (8), business (4), etl (3)
> **Env Vars:** etl (3), sql (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Transactional DBs vs. data warehouses
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=0)** - [Instructor] There are two terms that come into play when you start digging into how data warehouses work within the enterprise.
>
> **[0:07](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=7)** Particularly when you come from the world of traditional relational database theory, it's important to understand the difference between OLTP versus OLAP.
>
> **[0:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=18)** OLTP stands for online transactional processing.
>
> **[0:22](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=22)** It's a term that describes the traditional role of a database to quickly and efficiently collect and modify records or what's known as performing a transaction.
>
> **[0:32](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=32)** The goal of OLTP databases is to quickly write data to the database while maintaining strict control over the reliability, consistency, and integrity of the data.
>
> **[0:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=45)** This is accomplished by having the data structure follow a normalized relational model where data is spread out across related tables.
>
> **[0:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=54)** For instance, you might have the details about a specific customer stored in one table about their user account, another table that stores details about their billing information, and another for their shipping address.
>
> **[1:07](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=67)** If the customer wants to add another credit card to their account, the database only needs to update the BillingDetails table using the primary key value of the customer the card belongs to, and the system will not need to modify the other related tables.
>
> **[1:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=83)** This minimizes the amount of data that needs to be written to the database for any single update and it limits the number of tables that need to be accessed and it also reduces the duplication of data that can lead to inconsistencies.
>
> **[1:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=97)** So OLTP databases prioritize processing transactions, but this structure is more difficult to retrieve information from.
>
> **[1:46](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=106)** In order to get the full picture about this customer, you need to piece the data together from the three different tables.
>
> **[1:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=114)** OLAP databases, on the other hand, are developed to facilitate efficient analysis.
>
> **[2:01](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=121)** OLAP stands for online analytical processing and it describes the role of a data warehouse.
>
> **[2:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=128)** This type of database needs to accommodate far fewer transactions.
>
> **[2:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=133)** The data is added to the database a single time by copying data out of a transactional OLTP database, usually at night, when business impact is low, and rows typically never change after that initial load.
>
> **[2:29](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=149)** Information that was normalized in the OLTP database get de-normalized so that queries against an OLAP database don't need to join multiple tables together, at least not nearly as often.
>
> **[2:43](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=163)** So for example, the customer data that we saw a moment ago that was split across the three tables would be restructured into a single much wider data table in the data warehouse.
>
> **[2:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=174)** It's so wide that I need to split it onto two lines here, so that we can see it all together.
>
> **[3:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=180)** While this de-normalized process does introduce data duplication, concerns about maintaining integrity and operational consistency aren't present because the data isn't changing.
>
> **[3:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=193)** Here, when we look up the customer's credit card number, we can see the full details about the customer in the same record.
>
> **[3:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=200)** In an OLAP database, the duplication of data is actually a benefit to the system because it increases query performance.
>
> **[3:30](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=210)** Data warehouses usually rely on de-normalized data which adds redundancy to the system.
>
> **[3:36](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=216)** In addition to duplicating values by recombining related records in a single table, data warehouses will use other techniques that you would not normally expect to see in a normalized relational database.
>
> **[3:48](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=228)** Specifically, I'm referring to the storage of calculated values and aggregations.
>
> **[3:55](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=235)** Many analytical questions involve aggregating data together.
>
> **[3:59](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=239)** For instance, think about how you would answer the question, what are the monthly sales totals in each region from a properly normalized transactional database?
>
> **[4:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=249)** To answer this, you need to find the individual transactions for each store during the month.
>
> **[4:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=254)** Then you would group the stores together into their different sales regions and finally add up all the values of every transaction to get the final summary information.
>
> **[4:24](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=264)** Since this would be a question that might be asked by a lot of different people across the enterprise, it makes sense to perform the calculation a single time during the nightly ETL procedure, specifically in the transform step, and store the final results in the data warehouse.
>
> **[4:41](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=281)** Then everyone can have access to the aggregate value instantly without having to recompute it every time it's required.
>
> **[4:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=289)** The same logic applies to storing other calculations.
>
> **[4:53](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=293)** In an OLTP database, you might store a tax rate percentage and use it to calculate the amount of tax due on a customer's order, but you would never store the actual amount.
>
> **[5:06](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=306)** In a data warehouse, on the other hand, you would perform the calculation ahead of time and store the tax due in the database.
>
> **[5:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=314)** These type of common computations can all be performed once and the results saved in order to speed up the analysis and reporting tasks later.
>
> **[5:24](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=324)** So those are the main differences between a relational transaction processing database and an analytical processing data warehouse.
>
> **[5:32](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=332)** OLTP databases focus on writing and modifying data quickly, securely, and consistently.
>
> **[5:39](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=339)** They do this by spreading data across multiple tables to reduce redundancy and reduce locks and blocks during data modifications.
>
> **[5:48](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=348)** OLAP databases and data warehouses, on the other hand, focus on performing queries and answering questions about the data quickly.
>
> **[5:57](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/transactional-dbs-vs-data-warehouses?u=76281980&t=357)** By adding redundancy and storing pre-computed calculations, they reduce the amount of time it takes to retrieve answers to your analysis questions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (29), database (16), [[Databases]] (5), business (1), etl (1)
> **Env Vars:** oltp (8), olap (6), etl (1)
> **Analogies:** for instance (2), picture (1), for example (1)
> **Definitions:** stands for (2), known as (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Dimensions and facts
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=0)** - [Instructor] When designing a data warehouse, you'll need to create two different kinds of tables.
>
> **[0:05](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=5)** These are called dimension tables and fact tables.
>
> **[0:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=9)** The primary table in a data warehouse is called a fact table, or sometimes called a measure.
>
> **[0:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=14)** Fact tables are built around a single measurement of a real-world observation, and these are almost always numeric.
>
> **[0:22](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=22)** In most businesses, these facts would involve money or financial transactions of some sort.
>
> **[0:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=28)** The measurement can be a single value, what's called an atomic fact, or it can be a snapshot or an aggregate value.
>
> **[0:35](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=35)** For instance, the total sales for the day at a particular store.
>
> **[0:39](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=39)** These different levels of granularity will get defined in separate fact tables in the data warehouse.
>
> **[0:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=45)** And it's not uncommon to have multiple fact tables that each look at the same kind of measurement at different aggregation levels.
>
> **[0:53](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=53)** For instance, you might have facts that store individual information about transactions.
>
> **[0:58](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=58)** Then you'd have another fact table that only stores the sum total of sales for each day, and another that only stores the sum total for each month.
>
> **[1:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=69)** This allows flexibility in the kinds of analyses that can be performed, without having to recompute the different aggregation levels for each report.
>
> **[1:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=78)** It also provides the flexibility to drill into the data from an overview summary level, down to the details, by simply moving the analysis from one fact table to another.
>
> **[1:30](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=90)** In addition to the main observation, the fact table would also have a number on foreign key relationships that describe the context of the fact by linking to the other type of table, called a dimension.
>
> **[1:43](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=103)** In the case of a fact table about sales transactions, you would also have fields that record the ID of the store that the transaction took place at, the ID of the customer, the ID of the payment, and so on.
>
> **[1:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=116)** All of these values are simply foreign keys that relate to the detailed information stored in the related dimension tables.
>
> **[2:04](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=124)** Dimension tables store all of the descriptive information about the fact.
>
> **[2:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=128)** These are used for filtering, grouping, and sorting the data when it comes time to analyze the information.
>
> **[2:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=135)** The most common types of dimensions involve time and location, but there can be many more, depending on the needs of the enterprise.
>
> **[2:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=143)** You would also commonly find formatting variations of the dimension stored in the table.
>
> **[2:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=148)** These are things that you would normally calculate in a relational database using a number of functions.
>
> **[2:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=154)** For instance, in a dimension table, you might have a column to expand on the full date and also store the month and name, the day of the week, the quarter, and so on.
>
> **[2:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=165)** This allows you to easily pull out whatever format of the date that you need for a report without having to perform any calculations.
>
> **[2:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=174)** It might be beneficial to consider the difference between a dimension and a fact table based on their shape.
>
> **[2:59](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=179)** Dimension tables can be thought of as being very wide or having a large number of columns but relatively short, with a limited number of records.
>
> **[3:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=189)** For instance, a dimension table about stores would only have a record for each store location, and that table would only grow vertically when a new store is opened.
>
> **[3:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=200)** Fact tables, on the other hand, generally have a relatively small number of columns, but can grow to millions of records tall.
>
> **[3:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=208)** Imagine how quickly a fact table that stores customer sales transaction would grow as hundreds or thousands of new rows are added to the stack every day.
>
> **[3:39](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=219)** Together, dimensions and fact tables form the basis of what's called the dimensional model of the data.
>
> **[3:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=225)** Because of that simplicity, they're easy for end users to understand and incorporate into custom analyses and reports.
>
> **[3:52](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=232)** And they provide a fast data structure for the database query engine to process.
>
> **[3:57](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=237)** During the ETL procedure, a portion of the transform step is to take the relational model data from the transactional database and morph it into the dimensional model required by the data warehouse.
>
> **[4:11](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=251)** In addition to the dimension and fact tables, you might also have staging or integration tables in your data warehouse.
>
> **[4:19](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=259)** These provide temporary locations that can be used during the ETL process when moving and restructuring data from the relational model into the new dimensional model.
>
> **[4:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=271)** They're especially beneficial to use when integrating data from multiple external sources because you can simply copy all of the data from the external source as is and quickly make a local copy.
>
> **[4:43](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=283)** Then perform the lengthy transformation step on the local copy, rather than having to maintain a connection to the external source during the entire process.
>
> **[4:52](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=292)** Once the transformation step is complete, the staging tables are emptied, and all of the restructured data is moved into the final dimension and fact tables.
>
> **[5:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=303)** Staging tables are also very useful when the external data source isn't a database, but rather a text file, such as a CSV, XML, or a JSON data file.
>
> **[5:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=315)** We can take a look inside of the two sample databases in Management Studio to see how they've organized the fact and dimension tables.
>
> **[5:22](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=322)** Let's look in the AdventureWorks database.
>
> **[5:24](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=324)** We'll expand the tables here.
>
> **[5:26](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=326)** At the top, we have a number of tables that use the DIM abbreviation in the beginning of their name.
>
> **[5:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=331)** These are all of the dimension tables.
>
> **[5:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=333)** And if I scroll down here at the bottom, I'll see that we have a number of different fact tables as well.
>
> **[5:38](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=338)** Let's look inside of the one called FactInternetSales.
>
> **[5:41](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=341)** I'm just going to select the top 1,000 rows so I can see some of the data that it contains.
>
> **[5:46](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=346)** Now, ultimately each row in this table is about a sales transaction.
>
> **[5:50](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=350)** If I scroll over here to the far right, we'll see some columns that store the sales amount, the tax amount due, as well as the shipping or freight charges.
>
> **[5:59](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=359)** You'll also notice that these are pre-computed, so they just give us the total amount due, and they don't include a percentage or any calculations that need to be performed.
>
> **[6:07](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=367)** So these are the actual values that are charged to each of our customers.
>
> **[6:11](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=371)** Let's scroll back to the far left, though.
>
> **[6:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=374)** Each of these other columns you can see are key values that relate back to the dimensions.
>
> **[6:19](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=379)** Here we have the OrderDateKey, the DueDateKey, the ShippingDateKey, the CustomerKey, a PromotionKey, and so on.
>
> **[6:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=387)** Lots of different foreign keys.
>
> **[6:30](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=390)** To get to all of those related details, we'll go to the related dimension.
>
> **[6:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=394)** So let's take a look at these dates.
>
> **[6:36](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=396)** To find that, I'll go up here to the DimDate table, and let's select the data out of that.
>
> **[6:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=402)** Here we have those key values that the relationship is made to.
>
> **[6:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=405)** And you can see that each of these dates have further expanded details over to the right, so we have the full date, the day number of the week, the English day name, as well as the Spanish day name, and the French day name.
>
> **[6:59](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=419)** Scrolling further to the right, we have even more details.
>
> **[7:02](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=422)** Here's the month in English, Spanish, and French, the month number, the calendar year, the fiscal quarter, and so on.
>
> **[7:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=430)** Lots of details about each of our individual dates.
>
> **[7:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=434)** So that's how the data is contained inside of the AdventureWorks database.
>
> **[7:17](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=437)** We close both of these tables, and we'll take a quick look inside of the other database, WideWorldImporters.
>
> **[7:24](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=444)** I'll expand that, expand the tables, and here we have a schema for dimension this time and a schema for our fact tables.
>
> **[7:32](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=452)** Just like the other database, we have a FactSale.
>
> **[7:35](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=455)** So let's go ahead and right-click on that and choose Select Top 1000 Rows.
>
> **[7:38](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=458)** We have similar data. We have lots of keys here.
>
> **[7:41](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=461)** And if I scroll over to the right, we'll have some financial data.
>
> **[7:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=465)** Just like the other database, we can expand the dimensions table in order to get to the related detail.
>
> **[7:50](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=470)** So I'll right-click on DimensionDate, select the data out of there, and we'll have similar information.
>
> **[7:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=476)** Here's the key, as well as all of those expanded data details.
>
> **[8:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/dimensions-and-facts?u=76281980&t=480)** So those are the fact and dimension data tables inside of our two example databases here in Management Studio.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (23), database (9), etl (2), [[Databases]] (2), management (2)
> **Analogies:** for instance (4), just like (2), imagine (1), such as (1)
> **UI Navigation:** select the (3), right-click (2), scroll down (1), go to (1)
> **Env Vars:** etl (2), csv (1), xml (1), json (1), dim (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is called (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Star and snowflake schemas
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=0)** - [Instructor] The relationships between fact and dimension tables can take two different arrangements in a data warehouse.
>
> **[0:07](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=7)** These are named based on their shape, either a star or a snowflake.
>
> **[0:12](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=12)** Star designs are the preferred method of connecting dimension tables and fact tables.
>
> **[0:17](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=17)** This type of design will relate a fact table at the center directly to any number of dimension tables in one to many relationships.
>
> **[0:26](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=26)** This is possible when every dimension table is fully de-normalized, or fully flattened, and all of the context about the dimension is included in the single table.
>
> **[0:36](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=36)** Fact tables that follow the star pattern are simpler to create and only require the query engine to traverse a single join to find the context of effect.
>
> **[0:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=47)** If the design of the data warehouse includes dimension tables that relate to other dimension tables, then you have what's known as a snowflake design.
>
> **[0:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=56)** These are to be avoided if possible because they introduce additional joins into the reporting and analysis process and are more difficult for the query engine and end users to navigate.
>
> **[1:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=68)** This design pattern occurs when the dimension tables retain some level of data normalization, which is typically carried over from the transactional OLTP database.
>
> **[1:19](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=79)** We can take a look at the Wide World Importers database and explore its design by creating a database diagram.
>
> **[1:26](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=86)** I'm going to expand the Wide World Importers database, then right click on the Database Diagrams folder and choose New Database Diagram.
>
> **[1:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=93)** The first time you do that, you may be prompted to install an additional component.
>
> **[1:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=97)** Once you do, though, you'll see this Add Table window.
>
> **[1:40](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=100)** I want to focus on the Orders table, which is a fact table.
>
> **[1:43](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=103)** You can see that in the parentheses there.
>
> **[1:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=105)** Let's double click on it and it gets added into the diagram in the background.
>
> **[1:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=109)** Then I want to add in all of the dimension tables from the database.
>
> **[1:53](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=113)** I'll click the first one here, the City table, which is a dimension, then hold down my control key and select all of the other dimension tables in the database.
>
> **[2:02](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=122)** So Customer, Date, Employee, here's Payment Method.
>
> **[2:07](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=127)** I'll also grab Stock Item, Supplier, and scrolling down I find the Transaction Type.
>
> **[2:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=133)** Now that all of the dimension tables are selected, I'll press Add and those also get added into the diagram in the background.
>
> **[2:19](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=139)** I can now close the Add Table window and take a look.
>
> **[2:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=143)** Now, on my screen, things are a little bit too big here.
>
> **[2:25](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=145)** I'm only seeing a couple of these tables, so I'm going to right click, point to Zoom, and zoom out to 50%.
>
> **[2:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=151)** Scrolling down, I'll find the Order table that we started with.
>
> **[2:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=154)** So this is our fact.
>
> **[2:36](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=156)** This table contains information about every order that's placed with the company.
>
> **[2:40](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=160)** Then we can find the related information in each of the dimensions.
>
> **[2:44](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=164)** So here's one for the city.
>
> **[2:46](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=166)** At the top we have the dimension about customers.
>
> **[2:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=169)** Over here on the left, we have our dates.
>
> **[2:51](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=171)** At the bottom we have employees, and we also have the item that was ordered.
>
> **[2:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=176)** At the very top of our diagram, we have three additional dimensions that aren't related to the order facts.
>
> **[3:02](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=182)** I can actually remove them from the diagram by right clicking on them and choosing Remove from Diagram.
>
> **[3:12](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=192)** This allows us to focus just on our single fact.
>
> **[3:16](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/star-and-snowflake-schemas?u=76281980&t=196)** So now we can see that the Order fact table uses a star design to all of the dimension tables, since each one has a relationship directly to the fact table and no dimension tables are connected to another dimension table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (8), data (3), [[Snowflake]] (2), [[Zoom]] (2)
> **CLI Commands:** find (4)
> **Definitions:** is a  (2), known as (1)
> **UI Navigation:** click on (2)
> **Env Vars:** oltp (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Hardware and infrastructure
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980&t=0)** - [Instructor] When it comes to rightsizing hardware for a data warehouse, like all databases, the answer is always, it depends on your workload.
>
> **[0:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980&t=8)** However, there are a couple of resources that you should focus on when determining the hardware that you'll require.
>
> **[0:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980&t=14)** The biggest benefit to any data warehouse is additional memory.
>
> **[0:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980&t=18)** Ideally, if you could fit the entire data warehouse in system memory and have a little overhead for processing, that's going to give you the best performance overall.
>
> **[0:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980&t=28)** If that's not possible, you should at least aim to be able to fit all commonly used indexes in system memory.
>
> **[0:35](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980&t=35)** The more you can store in memory, the less the database engine will have to write and read data from the much slower disk drives.
>
> **[0:43](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980&t=43)** The next component of your data warehouse that you should consider are the disk drives themselves.
>
> **[0:48](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980&t=48)** Most transactional databases are optimized for reliability and use redundant network storage.
>
> **[0:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980&t=54)** With a data warehouse, all or most of the data comes from other sources.
>
> **[0:59](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980&t=59)** And if a drive fails, you can simply rerun the ETL process again to reload the data warehouse from the original source.
>
> **[1:07](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980&t=67)** In this regard, reliability is less of a concern.
>
> **[1:11](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980&t=71)** And you can focus on drive performance instead.
>
> **[1:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980&t=74)** This means that locally attached rather than network attached storage becomes much more appealing.
>
> **[1:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980&t=80)** And high-performance disk drives connected directly to the database server can provide a good performance trade off when system memory is exhausted.
>
> **[1:30](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980&t=90)** When it comes to processing power, more cores will be beneficial over faster cores.
>
> **[1:36](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980&t=96)** The types of calculations that data warehouses generally need to perform, such as summing or averaging aren't terribly processor-intensive, but a data warehouse will need to perform a lot of these types of calculations.
>
> **[1:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980&t=109)** Being able to perform more calculations simultaneously with additional cores will provide the biggest bang for your hardware dollar.
>
> **[1:58](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980&t=118)** And finally, that brings us to network input and output.
>
> **[2:01](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980&t=121)** If the entire data warehouse fits in system memory or is running off of local disk storage, then network I/O resources will be minimal.
>
> **[2:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980&t=130)** Network speed is primarily a concern during the ETL process when data is being copied to the data warehouse from the source and external databases.
>
> **[2:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980&t=140)** If all of your transactional databases are on the same network, then this becomes less of a concern and most intranet networks will perform just fine.
>
> **[2:29](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980&t=149)** If your ETL process is accessing external resources over the internet, then you'll want to be careful to not fully saturate that bandwidth.
>
> **[2:39](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980&t=159)** You can look at techniques to schedule, stagger, or throttle the connections to external data sources so that you don't impact the operations of your business's transactional databases.
>
> **[2:50](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980&t=170)** With today's trend of moving data warehouses onto scalable cloud infrastructure, the need to rightsize local hardware is becoming less important.
>
> **[3:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hardware-and-infrastructure?u=76281980&t=180)** However, when you will be running your own server, nothing beats load testing during the development of a data warehouse in order to help identify the best resource allocations when you move it into production.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (16), [[Databases]] (5), [[Hardware]] (4), etl (3), database (2)
> **Env Vars:** etl (3)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


### 2. Create a Data Warehouse

[↑ Back to Table of Contents](#table-of-contents)

#### Create a data warehouse in SQL Server
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=0)** - [Instructor] A data warehouse is created just like any other database in SQL Server.
>
> **[0:04](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=4)** You'll use the same SQL commands that you're probably already familiar with in order to create the database, build the fact and dimension tables, and join them together with relationships.
>
> **[0:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=15)** So let's get started with a new data warehouse here in Management Studio by creating a database for a company called KinetEco.
>
> **[0:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=23)** Right-click on the Databases folder and then click New Database.
>
> **[0:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=27)** I'll name the database KinetEcoDW.
>
> **[0:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=31)** For the row and the log file we could set the size to something larger than the default of eight megabytes if you have an idea about how much space you're going to need.
>
> **[0:41](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=41)** But the autogrowth settings will automatically size files as needed to fit the data.
>
> **[0:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=47)** And because the data file will only be growing when the ETL process loads data into the data warehouse, which typically happens overnight we won't have to worry about the files growing in the middle of reporting and analysis workloads.
>
> **[1:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=60)** So I'm just going to leave the defaults here for size.
>
> **[1:04](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=64)** Also, the log file is defaulting to the same location on my hard drive as the data file.
>
> **[1:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=70)** You can see here that they're both be getting put in the C drive.
>
> **[1:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=73)** A common practice in transactional databases is to locate the data and the log files on separate drives so that they can be read and written at the same time.
>
> **[1:24](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=84)** In a data warehouse though there typically isn't much activity in the log files since we're not processing transactional data.
>
> **[1:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=91)** And the log will only show writes performed during ETL.
>
> **[1:36](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=96)** There won't be any log activity between loads which is when most, if not all of your reporting and analysis workload will occur.
>
> **[1:44](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=104)** So there's no real performance benefit to locating the log file on a separate physical hard drive from the data file.
>
> **[1:51](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=111)** So this suggestion of just leaving everything on my C drive on my computer is going to be just fine in a data warehouse scenario.
>
> **[1:59](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=119)** On the Options page, we can take a look at the recovery model.
>
> **[2:04](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=124)** Again, since there's little activity that'll be recorded in the transaction log, we can change the recovery model over from Full to Simple.
>
> **[2:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=133)** The data warehouse won't benefit from backing up the transaction logs, and it's often faster to recover a damaged data warehouse by rerunning the ETL process again anyway, rather than going through a restore process from a backup file.
>
> **[2:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=147)** So switching this to Simple recovery model will make the backups that we do make faster to complete.
>
> **[2:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=153)** So those are the basic differences between configuring a data warehouse and your typical transactional database.
>
> **[2:40](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=160)** Of course, you can configure additional settings according to your business requirements and hardware.
>
> **[2:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=165)** I'm just going to go ahead and press the Okay button to create the database.
>
> **[2:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=169)** You'll see it up here over in the Object Explorer in just a moment.
>
> **[2:53](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=173)** Now I also want to take a look at these settings for tempdb on this server instance though.
>
> **[2:58](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=178)** They can play a significant role in the database performance of a data warehouse.
>
> **[3:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=183)** Open up the System Databases folder then right-click tempdb and go to Properties.
>
> **[3:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=190)** Tempdb will be used as a temporary storage location that SQL server will use when it needs to move data around, build indexes, and perform joins when the data doesn't fully fit into system memory.
>
> **[3:22](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=202)** Because of this, you'll want to consider moving your tempdb onto a high performance disc drive.
>
> **[3:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=207)** And this one should be separate from your data warehouse and your log files.
>
> **[3:32](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=212)** You can switch over to the files page here on the left and then you'll see where the temporary files are going to get stored.
>
> **[3:39](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=219)** Currently, everything is getting stored on my C drive just like my data and log files.
>
> **[3:43](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=223)** It would be a good idea to move these files onto a high performance SSD, for example.
>
> **[3:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=229)** You'll also want to create the database at a size that's much larger than default.
>
> **[3:53](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=233)** Let's scroll back here to the left, you'll see that all three of these files are going to be created at eight megabytes and grow by 64.
>
> **[4:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=240)** The actual size will depend on how much data is in your warehouse.
>
> **[4:04](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=244)** The main concern here is that you want to minimize the number of times tempdb needs to auto grow because this can and will happen during analysis workloads which will have an impact on their performance.
>
> **[4:16](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=256)** You want tempdb to start large and not need to grow very often.
>
> **[4:21](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=261)** So I'm going to click each of these where it says eight megabytes and I'm just going to change this up to to 100 megabytes for each of the three files.
>
> **[4:29](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=269)** That should be plenty of room for everything I need to store in the KinetEco data warehouse file.
>
> **[4:35](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=275)** Now, you also don't want tempdb to auto shrink.
>
> **[4:38](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=278)** And you can find the option for that by going over to the Options page on the left.
>
> **[4:43](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=283)** Here we have the Auto Shrink property and I just want to confirm that mine is currently set to False.
>
> **[4:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=289)** It's a good idea to leave this as False.
>
> **[4:52](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=292)** You do not want to enable autos shrink for the tempdb in your data warehouse database.
>
> **[4:57](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=297)** So that does it for the tempdb configurations that you should consider.
>
> **[5:01](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=301)** Let's go ahead and press the Okay button to save those changes.
>
> **[5:05](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=305)** Finally, let's think about how we're going to organize the fact and dimension tables of the data warehouse.
>
> **[5:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=310)** If we go into the AdventureWorks database and take a look at that real quick, we'll see that these use file names that start with DIM for the dimension tables and the word Fact for the names of their fact tables.
>
> **[5:22](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=322)** If we take a look at the other database that we have as an example, the WideWorldImporters data warehouse, and go into the tables folder, you'll see that this database uses schema.
>
> **[5:32](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=332)** We have a dimension schema and a fact schema.
>
> **[5:36](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=336)** I actually like this approach.
>
> **[5:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=337)** I think it's a clean way to keep everything organized.
>
> **[5:40](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=340)** So I'm going to create the same schemas in the KinetEco data warehouse.
>
> **[5:44](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=344)** But feel free to adopt whatever naming system you prefer for yours.
>
> **[5:48](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=348)** Let's go ahead and minimize these databases.
>
> **[5:52](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=352)** Then I'll open up the KinetEco data warehouse.
>
> **[5:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=356)** I'll select it and then click New Query.
>
> **[5:59](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=359)** To create the schemas we need to execute a couple of query commands.
>
> **[6:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=363)** You can find copies of these in the course exercise files, but they're pretty short so it's probably easier just to type everything out.
>
> **[6:12](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=372)** We'll start with CREATE SCHEMA Fact.
>
> **[6:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=375)** And I'll also execute CREATE SCHEMA Dimension.
>
> **[6:19](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=379)** Press the Execute button to create both of our schemas.
>
> **[6:21](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=381)** Oh, and I actually need to separate these by running them individually.
>
> **[6:24](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=384)** So let me go ahead and highlight this first line and press Execute.
>
> **[6:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=387)** That'll create the Fact schema.
>
> **[6:29](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=389)** Then I'll highlight the second line and press Execute again and that creates our second schema.
>
> **[6:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=394)** All right, let's go ahead and make sure that everything created properly by selecting everything from sys.schemas.
>
> **[6:41](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=401)** I'll highlight this line and press Execute and there's a list of all of the schema on my system including our new Fact schema and the Dimension schema.
>
> **[6:50](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-data-warehouse-in-sql-server?u=76281980&t=410)** So now when we create the fact and dimension tables we can simply add them to the appropriate schema to keep the data warehouse organized.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (28), database (13), [[Databases]] (4), etl (3), [[Microsoft SQL Server|Sql server]] (2)
> **Env Vars:** sql (3), etl (3), create (2), schema (2), ssd (1)
> **CLI Commands:** make (3), find (2)
> **UI Navigation:** right-click (2), go to (1)
> **Analogies:** just like (2), for example (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Design dimension tables
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=0)** - [Instructor] Now that we have a data warehouse database created for Kinetico, it's time to start creating some tables.
>
> **[0:06](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=6)** I'll start with a couple of dimension tables, and in the next movie, I'll create a fact table to link them to.
>
> **[0:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=13)** Let's suppose that the fact table will be about orders.
>
> **[0:17](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=17)** Two common dimensions or ways that we might want to aggregate and group our order data together is based on the date orders were placed, and the customers that placed the orders.
>
> **[0:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=27)** So, I'm going to create a dimension table for dates and a second dimension table for customers.
>
> **[0:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=33)** Before we do that, it might be a good idea to take a quick look, and see how the example databases handle these same dimensions.
>
> **[0:40](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=40)** Let's look in the Wide World Importers database first.
>
> **[0:44](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=44)** Find the Dimension.Customer table, and I'll just select the top 1,000 rows of data.
>
> **[0:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=49)** This dimension has a customer key that is the primary key for the table.
>
> **[0:53](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=53)** It also has a WWI Customer ID column.
>
> **[0:58](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=58)** This will store the original primary key that's used in the Wide World Importers transactional database.
>
> **[1:04](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=64)** In these results here, it looks like both columns store the same value, but it's not uncommon for each record in a dimension table to have a different unique identifier in the data warehouse from the one that's used in the transactional database.
>
> **[1:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=78)** This allows us to go back to the source database and look up information if we need to, and it can help the ETL process know which records have already been written to the data warehouse.
>
> **[1:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=88)** The other columns in this dimension are other kinds of descriptive attributes about each customer.
>
> **[1:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=94)** We have their name, a built to customer name.
>
> **[1:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=97)** We have a category that they're in.
>
> **[1:39](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=99)** A buying group, primary contact, postal code and so on.
>
> **[1:44](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=104)** Let's compare this to the customer dimension in the Adventure Works Data warehouse.
>
> **[1:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=109)** I'll scroll up in my Object Explorer, and I'll open up the Adventure Works database, and the tables folder.
>
> **[1:55](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=115)** Then we'll find the DimCustomer table, and once again select the top 1,000 rows of data.
>
> **[2:01](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=121)** This one uses a customer key as the primary key for the dimension.
>
> **[2:06](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=126)** It also has a geography key, which will be used to link to a geography table that'll describe where the customer is from.
>
> **[2:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=133)** That'll be the DimGeography table over here in the Object Explorer.
>
> **[2:17](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=137)** So, this tells me that the customer dimension is part of a snowflake design since it links to another dimension table.
>
> **[2:25](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=145)** Next, we have a reference to the primary key in the transactional database again.
>
> **[2:29](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=149)** That's this customer alternate key.
>
> **[2:32](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=152)** Then, we have lots of descriptive columns about each customer.
>
> **[2:35](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=155)** We have their first name, middle name, and last name.
>
> **[2:38](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=158)** Let's go ahead and scroll over here to the right.
>
> **[2:39](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=159)** There is birthdate, marital status, gender, email address.
>
> **[2:43](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=163)** Lots of little details here.
>
> **[2:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=165)** This one is interesting because it stores English, French and Spanish translations of some of these details such as their education level or occupation.
>
> **[2:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=174)** We also have some demographic information about each customer, whether they're a homeowner or have children, or their income level and so on.
>
> **[3:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=183)** We even have information about the number of cars that each customer owns.
>
> **[3:07](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=187)** So, this example has a lot of different kinds of information that could be used to segment and explore the company's orders by different customer attributes.
>
> **[3:16](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=196)** If we take a look at the date dimension tables, let's go ahead and open that one up here in the Adventure Works database.
>
> **[3:22](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=202)** Let's go ahead and select the top 1,000 rows of that.
>
> **[3:24](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=204)** We'll see the columns that are included in that dimension.
>
> **[3:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=207)** We can see that it breaks dates down and formats them in a number of different ways.
>
> **[3:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=211)** We have the date key, which is a simple numeric data type that includes the four-digit year, two-digit month and two-digit day.
>
> **[3:38](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=218)** Then, we have the actual date data type column.
>
> **[3:41](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=221)** Next is a day of the week, one through seven.
>
> **[3:44](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=224)** The name of the day of the week in multiple languages.
>
> **[3:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=227)** I'm going to go ahead and scroll over here to the right.
>
> **[3:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=229)** We have the number of the day of the month, the number of the day of the year, the week of the year, the English name of the month, Spanish name, French name, and so on.
>
> **[3:59](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=239)** Lots of different ways that we can slice and dice date data stored in this dimension.
>
> **[4:04](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=244)** In a normal relational database, you wouldn't store any of these information columns.
>
> **[4:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=248)** You would just store the date one time.
>
> **[4:11](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=251)** Then, you would use built-in functions and formulas to calculate any of those additional values as needed.
>
> **[4:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=258)** In a data warehouse, we want all of those calculations to be performed upfront during the ETL procedure and store the results as redundant bits of information.
>
> **[4:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=268)** This way, they don't have to be calculated every time an analysis is performed, no matter what language that analysis is in.
>
> **[4:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=277)** So, with those two examples to pull ideas from, we can create our own dimension tables in the Kinetico data warehouse.
>
> **[4:43](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=283)** Let me close all of these tabs and we'll just return to the Kinetico file.
>
> **[4:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=289)** I'll select that database and then start a new query.
>
> **[4:53](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=293)** I've got the code copied from the exercise file so I'll just go ahead and paste all of that in.
>
> **[4:57](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=297)** First, we'll create a dimension table for our dates.
>
> **[5:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=300)** That's up here at the very top.
>
> **[5:02](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=302)** This will use the dimension schema that we previously set up and set the table date inside of that schema.
>
> **[5:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=309)** This table will be simpler than the one that we just reviewed.
>
> **[5:11](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=311)** It'll create a column for the date key.
>
> **[5:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=313)** This will be the primary key for the database dimension.
>
> **[5:16](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=316)** Then, we have columns for the full date, the day name, day number, month name and number, the quarter number and the year.
>
> **[5:25](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=325)** Next, we'll create the customer dimension.
>
> **[5:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=327)** This table will also get created in the dimension schema.
>
> **[5:30](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=330)** It'll have an auto-incrementing customer key as the primary key for the table.
>
> **[5:35](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=335)** We then have a column called Customer Alternate Key to relate each record in the dimension back to the original records in the transactional database.
>
> **[5:44](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=344)** Next are columns to store the first name, last name and a combined full name of the customer, as well as a couple of fields for their location.
>
> **[5:53](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=353)** Notice that we have a place to store both the state abbreviation, as well as the full state name because it's conceivable that both versions could be useful to have in reports.
>
> **[6:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=363)** Also, notice that I'm not creating a field for the customer's actual address.
>
> **[6:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=368)** It's not very common that a report will need to know the exact address of a specific customer.
>
> **[6:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=373)** Typically, you'll be looking at groups of customers at a city or a state level, not at a street level.
>
> **[6:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=380)** So, I've decided that we don't even need to store the street address in the data warehouse since it'll never be used in an analysis.
>
> **[6:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=388)** So, those are the two tables we're going to be creating.
>
> **[6:30](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=390)** Let's just press the execute button to create those on our system.
>
> **[6:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=394)** Then, I expand the tables folder over here and we should see them both created inside of the dimension schema.
>
> **[6:40](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=400)** Now the kinds of information that you plan to store as dimensions will entirely rely on what data is available from your transactional databases that you're pulling from.
>
> **[6:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-dimension-tables?u=76281980&t=409)** But hopefully this gives you some inspiration on the kinds of dimensions that you can look for and helps you think about all of the ways that you can pre-process that data into meaningful attributes in order to make the reporting and analysis of your data more flexible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (16), database (12), next (5), [[Databases]] (2), etl (2)
> **UI Navigation:** select the (3), scroll up (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** etl (2), wwi (1)
> **Cross-References:** in the next (1), go back to (1)
> **Definitions:** is a  (2)
> **Analogies:** compare this to (1), such as (1)
> **Exercise Files:** exercise file (1)

#### Design fact tables
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=0)** - [Instructor] We've just created two dimension tables in the Kinetico Data Warehouse.
>
> **[0:04](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=4)** Now it's time to create the fact tables for orders and connect everything together.
>
> **[0:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=9)** Once again, let's take a quick look at an example of an orders fact table to see the kinds of fields we might consider including.
>
> **[0:16](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=16)** There's a good one that you can find inside of the Wide World Importers data warehouse.
>
> **[0:21](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=21)** It's in the fact schema.
>
> **[0:22](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=22)** There it is, fact dot order.
>
> **[0:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=23)** I'll just right click on it and select top 1000 rows.
>
> **[0:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=27)** The first column, order key, is an auto incrementing integer that serves as the primary key for this table.
>
> **[0:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=34)** Like most fact tables, you'll find lots of key columns that hold the foreign keys that relate to all of the dimension tables and provide the context.
>
> **[0:43](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=43)** So here we have columns that connect to these city dimension, the customer dimension, the stock item dimension.
>
> **[0:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=49)** Next, we have two that relate to the date dimension: order date key and picked date key.
>
> **[0:55](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=55)** Even though these refer to the same dimension table, they actually represent different kinds of information.
>
> **[1:01](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=61)** This first one is the date that the order was placed and the second one is the date that the warehouse prepared the order for shipping.
>
> **[1:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=70)** So it's possible and common to use a single dimension table to provide multiple different contexts to the same facts.
>
> **[1:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=78)** Finally, after all of the keys that relate to the dimensions, we have the actual attributes about the order in the fact table.
>
> **[1:24](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=84)** In this case, the product that was ordered, the description, the quantity, unit price, tax rate and totals including and excluding tax.
>
> **[1:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=94)** Just like with dimensions, we're pre-computing many of these numbers ahead of time to speed up analysis later.
>
> **[1:41](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=101)** Okay, so let's go ahead and create our own orders fact table in the Kinetico database.
>
> **[1:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=105)** Let me close that tab down.
>
> **[1:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=107)** I'll minimize the wide World importers database and we'll go back into Kinetico.
>
> **[1:51](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=111)** Then I'll start a new query window.
>
> **[1:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=114)** Once again, I've copied the code from the exercise files, so I'll go ahead and just paste all that in and we'll take a look at what we're doing.
>
> **[2:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=120)** Ours is going to be relatively simple compared to the one that we just looked at in the Wide World Importers database.
>
> **[2:06](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=126)** It's going to have an auto incrementing primary key, called order ID.
>
> **[2:11](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=131)** Then the foreign keys to connect to the date and the customer dimensions.
>
> **[2:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=135)** Then we just have a single value for the order total, stored as a money data type.
>
> **[2:21](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=141)** Remember that we're creating this inside of the fact schema that we set up previously.
>
> **[2:26](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=146)** Finally, we need to create the relationships between the fact table and the two dimension tables.
>
> **[2:30](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=150)** We do that on these lines down below.
>
> **[2:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=153)** We can alter the fact table and add a foreign key constraint and a check constraint to maintain referential integrity.
>
> **[2:41](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=161)** Referential integrity means that each fact table must relate to a record in the dimension table.
>
> **[2:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=167)** Referential integrity isn't just important to maintain, it's required in a data warehouse because without it you could wind up with facts that do not relate to any dimensional records and therefore could not be used in an analysis.
>
> **[3:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=183)** So these lines add the relationship to the date dimension and these add it to the relationship of the customer dimension.
>
> **[3:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=190)** So let me go ahead and scroll back up here to the very top again and I'll execute all of that code.
>
> **[3:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=195)** Now I'll go back into my tables folder.
>
> **[3:17](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=197)** Let's refresh our view and there is the new fact table.
>
> **[3:21](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=201)** I'll expand it and then we can expand the indexes and key columns and there is all of the relationships to the dimensions.
>
> **[3:29](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=209)** So with everything built, we should be able to create a small database diagram to visualize the result.
>
> **[3:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=214)** Let me go ahead and close that tab and not save the change to the query.
>
> **[3:38](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=218)** Then I'll right click on the database diagrams folder and choose new database diagram.
>
> **[3:43](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=223)** Let me add in support for that here and I'll add all three of my tables.
>
> **[3:50](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=230)** Press the close button on the add table window and there is our database diagram.
>
> **[3:55](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=235)** We have our fact table here at the center and it's related to each of our dimensions.
>
> **[3:59](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=239)** There's the date dimension and there's the customer dimension.
>
> **[4:02](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/design-fact-tables?u=76281980&t=242)** So now we can see the star design pattern taking shape here in our Kinetico data warehouse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (7), data (5), next (1), product (1)
> **CLI Commands:** find (2)
> **UI Navigation:** click on (2)
> **Definitions:** is an  (1), means that (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Create an indexed view
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=0)** - [Instructor] At this point, our KinetEco data warehouse has a single fact table for orders and two dimensions that we can use to give context to these orders, either through the dates that the orders were placed or through the customers that placed the order.
>
> **[0:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=13)** Now we can use these dimensions to slice and dice the facts in order to get insight into the performance of the business.
>
> **[0:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=20)** For instance, we might want to look at the sum total of order revenue per month by combining the fact table with the date dimension or we could look at the order performance per state by combining the fact table with the customer dimension.
>
> **[0:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=34)** Or we could combine everything, all three tables and look at the quarterly sales performance for each city by pulling information from all three tables.
>
> **[0:44](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=44)** So there's already a lot of flexibility built into this very small data warehouse that could be used in a number of different analyses and reports.
>
> **[0:53](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=53)** When we do perform an analysis, we're still asking the database query engine to perform a join between the fact table and the relevant dimension.
>
> **[1:02](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=62)** For end users that aren't familiar with the SQL language that might be a little bit challenging.
>
> **[1:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=68)** So we can help them out by creating a view that combines the information from the fact table with the dimensions in a single resource that end users can pull information from without having to worry about the syntax needed to create the table joints.
>
> **[1:22](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=82)** So a view will help end users by simplifying their access to the relevant information from the data warehouse.
>
> **[1:30](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=90)** But in the background, a view simply goes back to the original data tables and it still needs to perform a join.
>
> **[1:36](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=96)** So there's a negative impact to the performance of the database that'll still occur when using a view.
>
> **[1:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=102)** We can solve this problem by adding an index to the view.
>
> **[1:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=107)** That will force the database engine to create a duplicate version of the data that's already combined.
>
> **[1:53](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=113)** Anytime the data tables are updated, the view will automatically update as well.
>
> **[1:59](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=119)** To do this, I'm going to close the database diagram and I've actually saved it here already, in case we need to refer to it again.
>
> **[2:06](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=126)** Then I'll select the KinetEco data warehouse and open up a new query window.
>
> **[2:11](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=131)** I've staged the code to create the view from the exercise files.
>
> **[2:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=134)** So go ahead and paste that in and we'll take a look.
>
> **[2:17](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=137)** We'll create a new view called Orders By Date.
>
> **[2:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=140)** In the select statement, it's going to join all of the fields from the Orders Fact table with all of the fields from the Date Dimension table.
>
> **[2:29](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=149)** We have that join happening right there.
>
> **[2:32](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=152)** Then we're creating a unique clustered index on the primary key from the fact table.
>
> **[2:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=157)** In our case, that's the order ID column.
>
> **[2:41](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=161)** Creating this index will save the results of the join into a new, virtual index table.
>
> **[2:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=167)** Let's go ahead and highlight all of these lines down to the go statement here, and I'll press the Execute button to create that view.
>
> **[2:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=174)** Then in the KinetEco database we can go find it, open up the Views folder, and there it is right there.
>
> **[3:01](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=181)** So at this point, the view is created.
>
> **[3:04](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=184)** If I run a simple select query against the view, for instance, down here at the bottom I can select everything from dbo.OrdersByDate.
>
> **[3:11](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=191)** I'll execute that.
>
> **[3:12](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=192)** And there we see that we have all of those columns listed.
>
> **[3:16](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=196)** Now we don't have any data in the database yet, so that's why you're not seeing any results.
>
> **[3:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=200)** But we can take a look and see all of the columns from both the Fact table and the Date Dimension table are present.
>
> **[3:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=207)** So now we have the best of both worlds.
>
> **[3:29](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=209)** With the view, end users will have easier access to the data without having to worry about how to join tables in the data warehouse.
>
> **[3:36](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-an-indexed-view?u=76281980&t=216)** And because we added an index to the view, the database query engine won't have to perform any table joins when an analysis is performed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (10), database (7), business (1), [[SQL]] (1)
> **Analogies:** for instance (2)
> **CLI Commands:** find (1)
> **Env Vars:** sql (1)
> **UI Navigation:** select the (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 3. Columnstore Indexes

[↑ Back to Table of Contents](#table-of-contents)

#### Advantages of columnstore indexes
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=0)** - [Instructor] All of the tables that we've been working with have been examples of a rowstore structure, where individual records in a table are stored as rows.
>
> **[0:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=9)** SQL Server also supports an arrangement called a columnstore index, which separates out each column of a table when creating the index on disk.
>
> **[0:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=18)** Columnstore indexes should be standard on fact tables in your data warehouses, and even on some large dimension tables.
>
> **[0:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=27)** In a rowstore table, every column is stored in pages on disk, and when a page is full, another is created to continue storing additional records for the table.
>
> **[0:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=37)** In this example, we have a table that stores an ID, first name, last name, and any number of additional columns about these various authors.
>
> **[0:46](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=46)** So far, we've spilled onto multiple pages for the table.
>
> **[0:51](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=51)** When a query is executed against the table, all of the pages that make up the table are reassembled into memory.
>
> **[0:58](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=58)** This means every column from every row is brought into system memory, even if they're not ultimately required by the query.
>
> **[1:06](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=66)** Then, once that's complete, the columns requested by the query can be extracted.
>
> **[1:11](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=71)** In this example, the query is only asking for the ID and last name columns, so that's what the end user receives, even though every column from the table is first placed into memory this can waste significant amounts of IO capacity to process all of these additional columns that will ultimately serve no purpose.
>
> **[1:32](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=92)** In a column store index, each page is only used to store the contents of a single column.
>
> **[1:39](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=99)** The ID, first name, last name, and all of the other columns in this table are placed into different pages on disk.
>
> **[1:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=107)** This means that when a query is executed that only requests a couple of columns, far fewer pages need to be read into memory, just the ones requested by the query.
>
> **[1:57](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=117)** This also means the query is able to return results faster and with less overhead on the system since it doesn't need to waste resources retrieving and assembling table columns that ultimately won't be used.
>
> **[2:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=130)** Column store indexes have a number of performance benefits.
>
> **[2:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=134)** First, since the columns of values are all of the same data type, a higher degree of data compression can be applied to the index.
>
> **[2:22](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=142)** This can dramatically speed up queries in data warehouses where large numbers of data tables need to be processed quickly.
>
> **[2:30](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=150)** Because each column is of a single data type, there are significant compression gains that can be had, up to 10x.
>
> **[2:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=157)** This reduces the amount of disk storage space that's needed.
>
> **[2:41](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=161)** Second, since columns are compressed more, more will fit into memory, which allows queries to process even faster.
>
> **[2:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=169)** Finally, most queries only make use of a small subset of columns from any one table, so optimizing column store indexes against these queries will further reduce the load on your system.
>
> **[3:01](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=181)** So how do you implement a columnstore index on a table?
>
> **[3:04](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=184)** You simply provide the column store descriptor in a standard create index statement.
>
> **[3:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=190)** Then, the query optimizer will have another option for efficiently processing tables using the benefits of a column-wise arrangement of data over a row-wise.
>
> **[3:21](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=201)** I want to add a columnstore index to the KinetEco data warehouse's orders fact table.
>
> **[3:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=207)** To do that, I'll just start up a new query and we'll type it out.
>
> **[3:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=211)** Create column store index, then I'll name the index IX_CS that way I have an easy reminder that this is a columnstore index.
>
> **[3:43](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=223)** Then I'll follow that with _FactOrders.
>
> **[3:48](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=228)** So that's the name of my index.
>
> **[3:50](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=230)** Then, it'll be indexed on the Fact.Orders table, and in parentheses, we list out the columns.
>
> **[3:58](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=238)** It's recommended that you include all of the columns from the table in your column store index.
>
> **[4:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=243)** If you need a refresher, you can just expand the Fact.Orders table over here in your object explorer, and we'll take a look at the columns there.
>
> **[4:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=250)** So I'll add all of these columns into my index.
>
> **[4:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=254)** OrderID, DateKey, CustomerKey, and OrderTotal.
>
> **[4:26](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=266)** That finishes the list of columns, I'll close the parentheses, and type a semicolon.
>
> **[4:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=271)** Then I can execute the query.
>
> **[4:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=273)** That'll add the index into the table, and now we can go into the object explorer and expand the indexes.
>
> **[4:38](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=278)** I'm going to right click on that and choose refresh.
>
> **[4:41](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=281)** And there is our new columnstore index.
>
> **[4:44](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/advantages-of-columnstore-indexes?u=76281980&t=284)** So now we have a columnstore index on the fact table that'll dramatically improve the performance of analytical queries in the KinetEco data warehouse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), [[Microsoft SQL Server|Sql server]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** sql (1), ix_cs (1)
> **Definitions:** means that (1), is a  (1)
> **UI Navigation:** click on (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Memory-optimized columnstore table
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=0)** - [Instructor] SQL Server supports the creation of clustered column store indexes on top of a memory optimized table.
>
> **[0:07](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=7)** This means that you can gain the benefit of both technologies simultaneously.
>
> **[0:12](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=12)** In memory or memory optimized tables are simply tables that are completely stored in the server's main system memory rather than on a hard drive.
>
> **[0:21](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=21)** This makes them extremely fast to access.
>
> **[0:24](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=24)** In-memory tables are created within a special file group in the database, and I have the code listed here to alter the database Kinetico DW and add in the new file group.
>
> **[0:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=34)** I'm calling mine Kinetico Mod or Memory Optimized Data.
>
> **[0:38](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=38)** Next, we need the contains keyword followed by memory optimized data.
>
> **[0:43](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=43)** This file group will also get a location on disk in order to save the backup table in order to maintain durability.
>
> **[0:50](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=50)** I have that listed down here in a second alter database command.
>
> **[0:55](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=55)** However, by specifying that this file group contains the memory optimized data the server will use main system memory as the primary storage location.
>
> **[1:04](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=64)** Anytime the server reboots the full contents of the memory optimized file group will get read from disk and placed into memory.
>
> **[1:12](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=72)** From that point on, operations against the table will work on the memory stored data rather than this version stored on disk.
>
> **[1:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=80)** In order for everything to work smoothly, it's recommended that your server's available physical memory is about two times the size of your data.
>
> **[1:29](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=89)** So I'm going to create the filed group on disk in a new folder that I've already created called Memory Temp on my C Drive.
>
> **[1:36](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=96)** Let's highlight all of these lines and press execute to create the new file group.
>
> **[1:41](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=101)** Now we can use that file group as the storage location for a table that we want to store in memory.
>
> **[1:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=107)** Let me scroll down on my script here till I get to the create table command.
>
> **[1:51](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=111)** I'm going to create another fact table called Finance.
>
> **[1:55](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=115)** In Memory Optimized Tables, the primary key column needs to be non-clustered, but we can also add a clustered column store index so I'm adding that down here below.
>
> **[2:06](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=126)** Also, it's worth noting that clustered column store indexes automatically contain all of the columns from the table, so we don't need to list them out here individually like we did in the prior example.
>
> **[2:19](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=139)** The line here that says, "With memory optimized equals on" will place the table in the new in-memory file group that we just created above.
>
> **[2:29](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=149)** Let's go ahead and highlight these lines to create the new table.
>
> **[2:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=153)** And that's all there is.
>
> **[2:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=154)** We now have a fact table that includes a column store index and it resides on an in-memory file group.
>
> **[2:41](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=161)** I can expand the tables over here in the Object Explorer panel and let me go ahead and refresh that folder.
>
> **[2:48](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=168)** And here is our new Fact Finance table.
>
> **[2:50](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=170)** I can open it up and see the columns inside.
>
> **[2:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=174)** Because SQL Server handles all of the behind the scenes work, the end user is often unaware on whether they're pulling information from an in-memory table or a disc based table.
>
> **[3:05](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=185)** From their perspective, the procedures are exactly the same but that won't keep them from appreciating the benefits of their queries in terms of raw speed.
>
> **[3:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=194)** Adding a column store index on an in-memory table will allow your data warehouse to handle analytic and reporting workloads with the best performance.
>
> **[3:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=203)** I do need to mention though that at this time SQL Server does not support creating foreign key relationships between a memory optimized table and a non memory optimized table, such as our dimension tables.
>
> **[3:36](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/memory-optimized-columnstore-table?u=76281980&t=216)** So if you want to get the full benefit of memory optimized tables, make sure that you employ them across all of the fact and dimension tables in your data warehouse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), [[Microsoft SQL Server|Sql server]] (3), database (3), next (1)
> **Env Vars:** sql (3)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Rebuild columnstore indexes
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=0)** - [Instructor] Over time, the indexes in your Data Warehouse can become fragmented which will negatively impact query performance.
>
> **[0:07](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=7)** You can keep an eye on index fragmentation by looking at the properties here in Management Studio.
>
> **[0:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=13)** Now, our Kinetica Data Warehouse doesn't actually have any data yet, so let's go into the Wide World Importers Database, so we can see an example.
>
> **[0:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=20)** I'll expand the tables folder, and I'll find the table for fax.orders, I'll expand that and expand the index holder for there.
>
> **[0:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=28)** Here you can see that we have lots of different indexes in this particular table.
>
> **[0:32](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=32)** I'm just going to Right Click on the first one, this Clustered Column Store Index called, CCX Fax Order.
>
> **[0:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=37)** Let's Right Click on that and choose Properties.
>
> **[0:40](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=40)** Then we'll switch over to the fragmentation page.
>
> **[0:44](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=44)** This is one place where you can take a look at the index fragmentation percentage.
>
> **[0:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=49)** Now this index isn't fragmented at all, but as data gets written into the warehouse you might start to see these numbers creep up.
>
> **[0:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=56)** When they do, you can either reorganize or rebuild the index to reset the fragmentation back to zero.
>
> **[1:04](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=64)** You can do this with a T-SQL command to perform the index maintenance and I have an example of that code in the course exercise files but there are also options built right here into Management Studio, and that's probably the easiest way to maintain these indexes in your Data Warehouse.
>
> **[1:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=80)** Let's press cancel to dismiss this properties window.
>
> **[1:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=83)** Then I will Right Click that index again, and here we have two options, either reorganize or rebuild.
>
> **[1:30](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=90)** Reorganizing an index uses minimal system resources and is an online operation.
>
> **[1:36](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=96)** This means that users can keep accessing the database tables while the index is being reorganized.
>
> **[1:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=102)** It's recommended to reorganize indexes if you see the fragmentation is between five and 30%.
>
> **[1:50](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=110)** Rebuilding an index drops and recreates the index.
>
> **[1:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=114)** Let's go ahead and choose this option just so we can see the next screen.
>
> **[1:57](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=117)** This operation is recommended for fragmentation in excess of 30%.
>
> **[2:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=123)** Depending on the type of table and the database engine compatibility level, rebuilding can be completed either offline or by placing a check mark there, online.
>
> **[2:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=134)** An online index rebuild allows users to continue working with the data while the index is getting rebuilt.
>
> **[2:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=140)** It can be slower than an offline rebuild, but you don't need to take the system down while the maintenance is being performed.
>
> **[2:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=147)** You can even perform online index rebuilds on column store indexes, which is great for an active Data Warehouse that's supporting analysis workloads 24/7.
>
> **[2:38](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=158)** Now, because of their structure, you can't rebuild or reorganize an index on a memory optimized table, there's simply no need.
>
> **[2:46](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/rebuild-columnstore-indexes?u=76281980&t=166)** But for all of your disc-based tables, including those with column store indexes, you'll want to keep an eye on fragmentation and make sure it doesn't become excessive.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), database (3), management (2), [[SQL]] (1), next (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** ccx (1), sql (1)
> **UI Navigation:** click on (2)
> **Definitions:** is an  (1), means that (1)
> **Best Practices:** recommended (2)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 4. Extract, Transform, and Load

[↑ Back to Table of Contents](#table-of-contents)

#### What are ETL and SSIS?
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980&t=0)** - [Instructor] Extract, transform and load is the process that feeds data into your data warehouse.
>
> **[0:06](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980&t=6)** ETL is an important component of the overall business intelligence system, and we've talked about the role that ETL plays in feeding data from multiple data sources into your data warehouse, so that it can then be used for reporting and analysis workloads.
>
> **[0:21](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980&t=21)** Let's now spend a few minutes and dive a little bit deeper into how ETL works in SQL Server.
>
> **[0:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980&t=28)** The most common tool for performing ETL in a SQL Server-based data warehouse is called [[SQL Server Integration Services]].
>
> **[0:36](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980&t=36)** Integration Services, or SSIS, is a platform for building workflows that can automate and standardize complex, data-related tasks.
>
> **[0:46](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980&t=46)** As the name would imply, it can help integrate data from a variety of sources, including other SQL databases, Excel spreadsheets, flat files, such as CSV and XML files, and pull it all together into a single destination database.
>
> **[1:02](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980&t=62)** It does this through the three phases of ETL.
>
> **[1:05](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980&t=65)** The extract process fetches and copies data from a source location.
>
> **[1:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980&t=70)** Through transforms, you manipulate that data.
>
> **[1:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980&t=73)** Filter it, cleanse it, standardize its formatting, and perform other organizational tasks to prepare it for the final stage, loading it into a destination database.
>
> **[1:24](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980&t=84)** SSIS can also perform additional tasks beyond those covered in an ETL process.
>
> **[1:30](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980&t=90)** You can automate downloading files from an FTP server, email status reports, or create a backup of a database before and after a load.
>
> **[1:39](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980&t=99)** There's a long list of tasks that you can add to an integration services package.
>
> **[1:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980&t=105)** In order to develop a package of tasks, you'll use a graphical designer called SQL Server Data Tools which is a component of Microsoft's flagship application development program, Visual Studio.
>
> **[1:57](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980&t=117)** Here, you'll specify what tasks you want to perform as a control flow diagram.
>
> **[2:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980&t=123)** You'll connect tasks to the appropriate data sources and the destination data warehouse, and then you'll define the sequence in which the tasks will execute.
>
> **[2:12](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980&t=132)** At the end of the design phase, you'll have a flow chart-like diagram that describes how data moves into the system, what happens to it, and how it exits, and all of the additional actions that are triggered along the way.
>
> **[2:26](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980&t=146)** For instance, you might create a control flow that first connects you to your company's primary transactional database.
>
> **[2:32](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980&t=152)** Then, it'll extract the data and load it into a temporary integration table in the data warehouse.
>
> **[2:39](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980&t=159)** From there, data can be processed and denormalized.
>
> **[2:43](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980&t=163)** Calculations can be performed to transform the data and expand on the contextual details, and the data can be rearranged into the dimensional model required by the data warehouse.
>
> **[2:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980&t=174)** Finally, the processed data is moved into the fact and dimension tables, and the integration tables are cleared out in preparation for the next time the ETL procedure is run.
>
> **[3:05](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980&t=185)** This control flow is saved as an integration services package, and can be re-executed every night to ensure that the data in the warehouse can be used in up-to-date analyses.
>
> **[3:17](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980&t=197)** In order to get all of this to work, you first need to install the Integration Services Service as a shared feature of SQL Server.
>
> **[3:25](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/what-are-etl-and-ssis?u=76281980&t=205)** The service will run in the background, just like SQL Server itself, and allow you to connect to multiple data sources and destinations, and store your developed task packages in a secure, access-controlled environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (23), etl (7), [[Microsoft SQL Server|Sql server]] (6), database (4), [[Control Flow]] (3)
> **Env Vars:** etl (7), sql (7), ssis (2), csv (1), xml (1)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **Analogies:** such as (1), for instance (1), just like (1)
> **Tools:** visual studio (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Understand data flow
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=0)** - [Instructor] The [[SQL Server Integration Services]] Data Flow task provides the three main components of the ETL process.
>
> **[0:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=8)** The first component is the data source.
>
> **[0:11](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=11)** With this component, you'll define where the original data is located and how to access it.
>
> **[0:16](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=16)** SSIS supports connections to a wide variety of data storage platforms, everything from simple Excel files to Flat Files like XML or CSV or other databases such as Access, Oracle, remote SQL server instances, and many more.
>
> **[0:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=33)** You can even connect to big data providers such as a Hadoop Distributed File System.
>
> **[0:38](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=38)** The data source's Connection Manager stores all of the information needed to retrieve data from these locations, including the network path to the resource, any login credentials that would be needed to securely access them, and the names of specific tables and attribute columns that you want to pull.
>
> **[0:57](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=57)** Once SSIS has successfully connected to a data source, a Data Flow task can pass that data to a series of transformational steps.
>
> **[1:06](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=66)** These will modify the data in stages to bring it from the relational model of the source into the dimensional model required by the data warehouse.
>
> **[1:16](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=76)** To do that, you can employ transforms such as lookup or merge, which will combine records from multiple tables.
>
> **[1:24](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=84)** Conditional split will divide the records based on criteria that you specify.
>
> **[1:29](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=89)** Derived column transforms will allow you to apply functions and formulas to process the data into different forms.
>
> **[1:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=97)** And aggregate transforms will find the subtotals or averages across a group of records.
>
> **[1:44](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=104)** For instance, you might get a single date out of a relational database, pass it through a derived column transformation, and export all of the different formats of that date in preparation to load it into a dimension table in the data warehouse.
>
> **[2:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=120)** The derived column transform can extract the year, month name, day name, and quarter using standard TSQL functions and store those computed values in the appropriate columns in the dimension table.
>
> **[2:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=134)** Or you could take a number of individual invoice totals and pass them into an aggregate sum transformation to get the total sales for the day at a particular store and then save that into a fact table.
>
> **[2:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=147)** Almost any type of modification that you would need to make to your input data can be made with the transforms available in a Data Flow task.
>
> **[2:36](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=156)** Performing these types of calculations and transformations during ETL means that you don't have to spend resources performing them when preparing reports later on.
>
> **[2:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=167)** Finally, once the data has been transformed, you'll write it back into the destination location.
>
> **[2:52](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=172)** This component works just like the data source component.
>
> **[2:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=176)** It saves the network path and authentication credentials needed to access the resource and anything else that the task needs in order to be able to write the data into the warehouse.
>
> **[3:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=188)** The reason the entire process is called a Data Flow is because you can route information to different paths through the diagram depending on the conditions that you can control.
>
> **[3:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=198)** For instance, you might start by reading data out of a data source, then pass that data to a transformation.
>
> **[3:25](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=205)** If the transformation completes successfully, then the data will get written into the data warehouse.
>
> **[3:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=211)** However, if the transformation isn't able to complete, for instance if data truncation occurs or there's a mismatch in data types or a null value is encountered unexpectedly, then the records will get rerouted and written somewhere else.
>
> **[3:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=227)** For instance, you can export all of the problem records to an Excel spreadsheet so that you can review them and determine what the problem is that's causing the transform to fail.
>
> **[3:58](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=238)** The Data Flow protects the data warehouse from receiving erroneous or incomplete data.
>
> **[4:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=243)** And that's how the Data Flow component of an integration services package works to move data between resources.
>
> **[4:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/understand-data-flow?u=76281980&t=250)** You define a data source to extract data from, the transforms to modify the data, and the destination of the data warehouse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (35), [[Microsoft SQL Server|Sql server]] (2), etl (2), [[Microsoft Excel|Excel]] (2), [[Databases]] (1)
> **Env Vars:** sql (2), etl (2), ssis (2), xml (1), csv (1)
> **Analogies:** for instance (4), such as (3), just like (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** means that (1), is called (1)
> **Speakers:** - [instructor] (1)

#### Establish control flow
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/establish-control-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/establish-control-flow?u=76281980&t=0)** - [Instructor] Data flows are just one possible component of an SSIS package.
>
> **[0:05](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/establish-control-flow?u=76281980&t=5)** An integration services package also allows you to automate a wide range of database activities, in addition to the standard ETL tasks found in a data flow.
>
> **[0:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/establish-control-flow?u=76281980&t=15)** Together, this extended capability goes by the term control flow.
>
> **[0:21](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/establish-control-flow?u=76281980&t=21)** Control flow tasks can perform routine database maintenance such as creating a backup or rebuilding indexes.
>
> **[0:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/establish-control-flow?u=76281980&t=28)** They can also work with the file system and create folders and files on the local file system or on an FTP server.
>
> **[0:36](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/establish-control-flow?u=76281980&t=36)** You can create a control flow task that sends an email to database administrators when a certain condition occurs, or run Transact-SQL commands on a database server.
>
> **[0:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/establish-control-flow?u=76281980&t=47)** Control flow tasks can even incorporate looping containers that are useful for performing the same task multiple times.
>
> **[0:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/establish-control-flow?u=76281980&t=54)** For instance, reading data out of a folder containing an unknown number of CSV flat files.
>
> **[1:02](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/establish-control-flow?u=76281980&t=62)** The execution of tasks in a control flow can branch, based on success and error states, just like data flows.
>
> **[1:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/establish-control-flow?u=76281980&t=70)** These conditions are called precedence constraints.
>
> **[1:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/establish-control-flow?u=76281980&t=73)** For instance, you might have a control flow that first executes a data flow task to import data into your data warehouse.
>
> **[1:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/establish-control-flow?u=76281980&t=80)** It connects to a data source, performs some transformation actions, and then, writes data to the destination, as we discussed in the prior movie.
>
> **[1:30](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/establish-control-flow?u=76281980&t=90)** When that task completes, the success precedence constraint is satisfied, and you can have the SSIS package fire off an email to the decision makers in the company to let them know that a fresh batch of data has been loaded into the data warehouse.
>
> **[1:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/establish-control-flow?u=76281980&t=105)** On the other hand, if the data flow task fails for any reason, that would trigger the fail precedence constraint which might send a different email to the IT department, informing them of the situation.
>
> **[1:58](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/establish-control-flow?u=76281980&t=118)** Once the SSIS package has been created and all of the control flow and data flow tasks have been configured, the package gets deployed to the integration services catalog database.
>
> **[2:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/establish-control-flow?u=76281980&t=130)** Then, using the SQL Server Agent, a schedule can be enabled that will automatically execute the package at regular intervals, perhaps nightly or at the end of every month.
>
> **[2:22](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/establish-control-flow?u=76281980&t=142)** That way, your data warehouse is consistently fed current information so that the decision makers in the organization have the best information possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (14), [[Control Flow]] (7), database (5), etl (1), [[Transact-SQL (T-SQL)|Transact-sql]] (1)
> **Env Vars:** ssis (3), sql (2), etl (1), ftp (1), csv (1)
> **Analogies:** for instance (2), such as (1), just like (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)


### 5. Implement an Azure Synapse Analytics Dedicated SQL Pool

[↑ Back to Table of Contents](#table-of-contents)

#### Hosting a DW in the cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=0)** - Data warehouses can be expensive to create and manage since they can grow very large and easily consume large amounts of compute resources.
>
> **[0:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=9)** Before you go out and purchase a high-end database server you should really consider the benefits of a cloud-hosted data warehouse.
>
> **[0:16](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=16)** Microsoft's offering called Azure Synapse Analytics could be a cost effective solution for businesses with a wide range of needs.
>
> **[0:25](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=25)** Azure Synapse analytics combines data warehousing and big data analytics into a single service.
>
> **[0:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=31)** There are three main components.
>
> **[0:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=34)** Synapse Workspace combines a number of different data sources and connected services, as well as the pipelines that hook everything together.
>
> **[0:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=42)** More on that in just a moment.
>
> **[0:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=45)** Synapse Studio is a web application for working with data sources, making connections, running queries and ultimately gaining insight into the data.
>
> **[0:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=56)** Azure Data Lake is a petabyte scale storage solution built on Azure blob storage.
>
> **[1:02](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=62)** Here you can store Parquet, CSV, TSV, and JSON data files and make them available to your data warehouse.
>
> **[1:11](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=71)** By bringing all of these technologies together under a single umbrella, Microsoft has removed a number of barriers that made them difficult to integrate and leverage in the past.
>
> **[1:22](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=82)** I mentioned that within these Synapse Workspace you can connect to a variety of different data sources.
>
> **[1:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=88)** These include serverless SQL pools which allow you to execute queries on the fly without first having to provision any compute resources.
>
> **[1:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=97)** Billing is handled automatically based on the amount of data processed.
>
> **[1:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=102)** Likewise, Serverless Spark pools allow you to analyze big data stores without first provisioning resources.
>
> **[1:50](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=110)** The session will automatically pause when the work is completed and users are billed for the work done during each session.
>
> **[1:58](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=118)** And finally, there are Dedicated SQL pools.
>
> **[2:01](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=121)** These are more likely traditional types of data warehouses that we've been working with in our local installation of SQL Server.
>
> **[2:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=128)** When you create a dedicated pool you're pre-provisioning a certain level of CPU, memory and storage resources within the Azure Cloud.
>
> **[2:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=138)** These resources will be dedicated for your exclusive use and can be scaled up and down as your workloads require.
>
> **[2:25](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=145)** Or can be paused to minimize billing charges when you don't need to access the data warehouse.
>
> **[2:30](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=150)** Because they're the most closely related technology to the data warehouse topics that we've been discussing, Dedicated SQL pools is the component of Azure Synapse Analytics that I want to focus on for the remainder of this chapter.
>
> **[2:44](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=164)** Dedicated SQL pools fill the role of our regular data warehouse, but behind the scenes there's a number of technologies that make them much better than what we've built on our own in SQL Server.
>
> **[2:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=176)** When a user connects to a data warehouse database that's housed on a dedicated SQL pool they're really connecting to a control node for the server.
>
> **[3:05](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=185)** When a query is submitted or a data load operation is performed the control node leverages a massively parallel processing engine to distribute the request to a large number of compute nodes.
>
> **[3:19](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=199)** Each compute node has its own connection to your Azure storage resources and data is moved and balanced across the compute nodes in order to return results in a fraction of the time that an on-premises server would take.
>
> **[3:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=213)** There are several benefits to this arrangement.
>
> **[3:36](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=216)** First, the number of compute nodes that are used to process queries in parallel can be scaled up and down as needed.
>
> **[3:43](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=223)** You can provision between 1 and 60 separate compute nodes.
>
> **[3:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=227)** This allows you to better manage costs during both predictable and unpredictable shifts in business activity, You can even pause compute resources altogether if you don't need to access your data warehouse for a period of time.
>
> **[4:02](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=242)** This will deallocate your compute nodes so that you're not paying for them while they sit idle with nothing to do.
>
> **[4:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=249)** Because compute and storage are separated your data will remain safe and sound and be instantly available as soon as you resume the service.
>
> **[4:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=258)** So all of this sounds great.
>
> **[4:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=260)** A cloud hosted data warehouse can be more flexible, faster and have deeper connections to a wide variety of data sources and technologies.
>
> **[4:29](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=269)** The final consideration that we need to think about is how the services are built.
>
> **[4:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=274)** Dedicated SQL pools use something called compute data warehouse units for billing, and you'll see this show up with the acronym cDWU in the Azure interface when it comes time to deploy.
>
> **[4:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=287)** These represent an abstracted bundle of CPU, memory and I/O resources, so you do not get to specify exact numbers of processor cores, or the number of gigabytes of memory to reserve for your data warehouse.
>
> **[5:01](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=301)** Instead, you get a sliding scale that, at the time of this recording, goes from a minimum of 100 data warehouse units up to 30,000.
>
> **[5:11](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=311)** Even though these numbers are arbitrary it's easy to understand that for reduced performance, fewer concurrent requests on the database and lower costs you'll want to provision a smaller number of data warehouse units.
>
> **[5:24](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=324)** For higher performance and more concurrency, you'll provision more.
>
> **[5:30](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=330)** The best practice here is to provision a low number of DWUs when you initially deploy your dedicated SQL pool.
>
> **[5:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=337)** Then monitor performance and resource utilization.
>
> **[5:41](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=341)** There are useful charts within the Azure dashboard that will allow you to visually see when you need to scale up or if you're over provisioned and can safely scale back down.
>
> **[5:52](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=352)** So that's enough to get started with hosting a data warehouse in the cloud with dedicated SQL pools.
>
> **[5:57](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/hosting-a-dw-in-the-cloud?u=76281980&t=357)** Let's now jump into Azure and get some hands on time with the service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (27), [[Microsoft Azure|Azure]] (10), [[SQL]] (8), cloud (4), database (3)
> **Env Vars:** sql (10), cpu (2), csv (1), tsv (1), json (1)
> **CLI Commands:** node (3), make (2)
> **Definitions:** is a  (2)
> **Code Identifiers:** cdwu (1)
> **Best Practices:** best practice (1)
> **Speakers:** - data (1)

#### Create a dedicated SQL Pool
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=0)** - [Instructor] To create a dedicated SQL pool in Azure Synapse, you'll need a Microsoft account and an Azure account.
>
> **[0:07](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=7)** There is a free option if you'd like to test out the service, and you can find out information about that by going to azure.[microsoft.com](https://microsoft.com).
>
> **[0:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=15)** Once you have an account set up, log in to the main dashboard at portal.[azure.com](https://azure.com).
>
> **[0:21](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=21)** Then come up to the menu button in the upper left hand corner and choose the option to create a resource.
>
> **[0:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=27)** In the search box, do a search for dedicated SQL pool.
>
> **[0:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=33)** That'll bring up a couple of options here and I'll click the first one that's a dedicated SQL pool and just make sure that it's provided by Microsoft.
>
> **[0:40](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=40)** Click the create dropdown menu here at the very bottom and then click the dedicated SQL pool button to get started.
>
> **[0:46](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=46)** Now we just need to configure the service.
>
> **[0:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=49)** For the subscription, I'm going to use my pay-as-I-go subscription.
>
> **[0:52](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=52)** If you're on a free plan though, make sure you choose that from the list.
>
> **[0:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=56)** Next, I need to name my new resource group.
>
> **[0:58](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=58)** I'll click the create a new option there and I like to use my initials as the name here so I'll just say aw-rg for resource group and I'll call it aw-rg-sqlpool.
>
> **[1:12](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=72)** That'll keep all of my resources together so that they're easy to manage later.
>
> **[1:16](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=76)** All right, next up, we need to set the SQL pool details themselves.
>
> **[1:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=80)** I'll enter a name for the SQL pool.
>
> **[1:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=83)** I'll call mine aw-sqlpool.
>
> **[1:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=88)** Then we get to create a new server.
>
> **[1:32](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=92)** I'll name mine, aw-server-sqlpool.
>
> **[1:38](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=98)** For the location, you can choose one that's closest to you.
>
> **[1:40](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=100)** For me, that would be the US West three option there.
>
> **[1:44](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=104)** Then we'll scroll down and take a look at the authentication.
>
> **[1:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=107)** I want to be able to easily log in from SQL Server Management Studio, so I'll choose the option to enable SQL Server authentication there and then we'll provide a new administrator name and password.
>
> **[1:59](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=119)** You can type in whatever name and password you prefer.
>
> **[2:01](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=121)** I'll just name mine awAdmin.
>
> **[2:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=129)** Once your passwords meet the requirements and match, you can go ahead and press okay and that'll take you back to the main page.
>
> **[2:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=135)** Then we can set the performance level for the pool.
>
> **[2:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=138)** I'll click that link there.
>
> **[2:19](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=139)** And for demonstration purposes, I want to keep my costs to a minimum, so I'm going to choose this option and just scale it all the way down to the lowest option.
>
> **[2:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=148)** If you want to review information about performance levels, you can click this link here.
>
> **[2:32](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=152)** It'll bring up an information page where you can review the details.
>
> **[2:35](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=155)** Now you can always scale storage and compute resources up or down later to meet your requirements and expected loads so you don't really need to dial it in at this point.
>
> **[2:43](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=163)** Let's go ahead and close this tab and return back to Azure.
>
> **[2:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=167)** So with the scale all the way down to the lowest which provides me 100 cDWU's, I'm going to press the apply button here and that'll take me back to the main screen.
>
> **[2:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=176)** Okay, so that finishes the first page which is basics.
>
> **[3:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=180)** Go ahead and click the next button to go to the networking phase.
>
> **[3:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=183)** Again, I want to be able to connect using SQL Server Management Studio so I'm going to create a public endpoint to my pool.
>
> **[3:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=190)** Then let me scroll down here and choose the option to add my current client IP address to the pool, and this will just allow me to log in from the current computer that I'm working with.
>
> **[3:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=200)** Click the next button to go to additional settings.
>
> **[3:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=203)** Here we can choose the option to load the SQL pool with sample data.
>
> **[3:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=207)** You'll see that this will include the same AdventureWorks Data Warehouse that I installed on my local SQL Server instance at the beginning of the course.
>
> **[3:35](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=215)** Press the next button to go to the tags page and then press the next button again to go to review and create.
>
> **[3:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=222)** This will allow you to review any pricing information and some additional terms and conditions.
>
> **[3:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=227)** When you're ready, press the create button here at the bottom of the page.
>
> **[3:51](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-dedicated-sql-pool?u=76281980&t=231)** This will take a few minutes to deploy the resources to your Azure account, and when it's done, you'll have a dedicated resource pool for your data warehouse hosted in the Azure Cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (7), [[Microsoft Azure|Azure]] (7), next (6), [[Microsoft SQL Server|Sql server]] (4), [[Microsoft]] (3)
> **Env Vars:** sql (11)
> **UI Navigation:** go to (4), scroll down (2), dropdown (1)
> **CLI Commands:** make (2), find (1)
> **Prerequisites:** you'll need (1), set up (1), configure (1)
> **Code Identifiers:** awadmin (1), cdwu (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1), [azure.com](https://azure.com) (1)
> **Definitions:** is a  (1)

#### Reserve resources with workload isolation groups
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=0)** - [Instructor] My dedicated SQL pool has just finished deploying to my Azure account and I can see it here on the main dashboard.
>
> **[0:07](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=7)** Now, within the SQL pool memory and CPU resources are going to be shared across all of the users of the database.
>
> **[0:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=14)** In order to prioritize certain activities, you can set up workload isolation groups.
>
> **[0:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=20)** This will reserve a portion of your resource allocations for specific tasks such as loading new data into the pool.
>
> **[0:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=28)** That way regular data loads can be performed more predictably, and they won't be impacted by heavy analysis workloads that may be operating at the same time a load is scheduled to occur.
>
> **[0:39](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=39)** Without workload isolation, everyone gets a slice of these same shared resources and service levels will not be guaranteed for any one activity.
>
> **[0:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=49)** To configure workload isolation from the Azure portal, start here at the main dashboard and then click the link for the new dedicated resource pool that was just deployed.
>
> **[0:58](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=58)** This will bring up the pool's overview page with lots of useful information, including the server name that we'll need later.
>
> **[1:06](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=66)** In order to connect in SQL Server Management Studio.
>
> **[1:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=70)** Let's take a quick detour to the very bottom of the page where we have a couple of different charts.
>
> **[1:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=74)** The first one displays a number of data warehouse units that you're currently consuming.
>
> **[1:19](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=79)** It's this red line here.
>
> **[1:21](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=81)** As well as a blue dashed line that shows the service level you've chosen when you deployed the pool.
>
> **[1:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=87)** When I set mine up, I reserved a hundred DWUs, so that's the blue dashed line here at the top.
>
> **[1:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=93)** If you find that your usage is bumping up against the limit or if you see that you're never even coming close to the limit, you may consider making adjustments to the performance by pressing the scale button here at the top of the page.
>
> **[1:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=107)** You can then adjust the slider to better fit your current workload requirements.
>
> **[1:52](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=112)** Interestingly, this is the same page that we need to go to in order to set up workload isolation.
>
> **[1:59](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=119)** Notice the "Add new workload group" button is grayed out though, and unavailable.
>
> **[2:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=123)** If you press the discard button here, that'll remove that slider for the scale and enable the workload group button.
>
> **[2:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=130)** Alternatively, if you press the red X in the upper right hand corner to dismiss this page and go back to the overview page for your pool, you can go over to the settings section in the menu on the left, and click workload management and that'll bring you right back to the same page.
>
> **[2:26](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=146)** So there's a couple of different ways to get here.
>
> **[2:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=148)** Okay, back to the task at hand, setting up workload isolation.
>
> **[2:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=153)** Click the button to add a new workload group.
>
> **[2:36](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=156)** There's three pre-configured options that you can choose from that may meet your needs.
>
> **[2:40](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=160)** You can create one that reserves a high number of resources and limits concurrent requests, one that reserves a low number of resources, but allows a lot of concurrent requests, and one right in the middle.
>
> **[2:53](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=173)** Clicking on any of these will add a new row, or you can further configure the parameters down here.
>
> **[3:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=180)** If you want to remove a work group, press the ellipses button on the right of the line and choose the option to delete it.
>
> **[3:06](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=186)** You'll then need to confirm the deletion and it'll be removed.
>
> **[3:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=190)** Now I'm going to go back up to the "Add new workload group" button, and this time choose custom.
>
> **[3:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=195)** I want to isolate data load activities and reserve resources for them specifically, so I'm going to name this new workload group "Data loads."
>
> **[3:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=207)** Then we can configure the resources using the three boxes to the right.
>
> **[3:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=211)** Now on my screen, the columns are a little bit too narrow so I'm going to make these wider, and when I do you'll see that I get a little information button here that'll give me some more details about what each of these columns represent.
>
> **[3:43](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=223)** So the first one will configure the minimum resources.
>
> **[3:46](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=226)** I want to make sure that we always have some portion of my SQL pool's resources available for these data load activities, so I'm going to reserve 25%.
>
> **[3:58](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=238)** This means that all other activities in the pool for analysis workloads will only be able to access the remaining 75% of the pool's CPU and memory resources at all times.
>
> **[4:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=250)** The minimum resources per request will allow you to set the concurrency for data loads.
>
> **[4:16](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=256)** If I set this to 5%, for example, it means that I will allow at a minimum five concurrent requests by loading activities.
>
> **[4:26](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=266)** That's 5% of my pool's resources for each one, up to the minimum of 25% of the total resources available.
>
> **[4:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=274)** If you set the minimum per request to 12.5% instead, then the lowest concurrency will be two, each one getting half of the available minimum resources available.
>
> **[4:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=285)** Next, we can set a maximum amount of resources that the work group can consume.
>
> **[4:50](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=290)** I'll cap this at a hundred percent.
>
> **[4:52](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=292)** That way if there are no analysis workloads occurring while the data load activity is being performed, we can allow it to use everything available.
>
> **[5:01](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=301)** If you want to ensure that there is always resources available for other activities then you can cap it at something like 75% or 90% instead.
>
> **[5:11](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=311)** That would leave a little headroom for other concurrent tasks outside of the work group.
>
> **[5:16](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=316)** In the charts at the bottom of the page you can see a visualization of the resources that you've reserved for different activities.
>
> **[5:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=323)** It's recommended that you don't allocate all of your resources to different work groups, so that unclassified activities will still be able to complete using the remaining unallocated share.
>
> **[5:35](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=335)** When you're done defining the workload group, press the save button in the upper left hand corner of the page.
>
> **[5:41](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=341)** This will deploy the group's parameters, and carve out the CPU and memory allocations from the larger pool.
>
> **[5:48](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=348)** It will then set those resources aside for the exclusive use of qualifying activities.
>
> **[5:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/reserve-resources-with-workload-isolation-groups?u=76281980&t=354)** At this point, we need to classify activities so that they get assigned to the proper workload, and we'll do that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), concurrent (4), [[SQL]] (3), [[Microsoft Azure|Azure]] (2), management (2)
> **Env Vars:** sql (4), cpu (3)
> **Prerequisites:** configure (4), set up (2)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** go to (1), in the menu (1)
> **Definitions:** means that (2)
> **Analogies:** such as (1), for example (1)
> **Versions:** 12.5 (1)

#### Classify workloads
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=0)** - [Instructor] Now that we have a workload isolation group created, we need to classify workloads so that they use the appropriate resource allocations that we've just set up.
>
> **[0:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=9)** To do this, we first need to create a new user account on the database.
>
> **[0:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=13)** And the easiest way to do that is by executing tSQL commands on the server.
>
> **[0:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=18)** So let's connect using Management Studio.
>
> **[0:21](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=21)** If you're still on the workload management page for the dedicated SQL pool, switch over to the Overview page.
>
> **[0:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=28)** At the top, you'll find the fully qualified server name that we need to use in order to connect.
>
> **[0:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=33)** If you hover your mouse over the link, you'll see a little copy icon up here to the right.
>
> **[0:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=37)** Go ahead and click that and that'll copy that to your clipboard.
>
> **[0:40](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=40)** Then we can go into Management Studio.
>
> **[0:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=42)** From here, I'll click the plug icon at the top of the object explorer to open up the connect to server dialogue window.
>
> **[0:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=49)** For the server name, I'll paste in that fully qualified server address that we've just copied to the clipboard.
>
> **[0:55](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=55)** The authentication will be SQL Server Authentication, and we'll type in the login name and password that we set up for the dedicated SQL pool.
>
> **[1:04](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=64)** Go ahead and press the Connect button and you'll shortly see it appear over here in the Object Explorer.
>
> **[1:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=69)** So here is my dedicated SQL pool that's running inside of Azure.
>
> **[1:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=73)** I'm going to expand the databases folder.
>
> **[1:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=75)** Here is my data warehouse called AW-SQL Pool.
>
> **[1:19](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=79)** And if I expand that and expand the tables, we'll see all of the dimension and fact tables that make up the contents of the AdventureWorks sample data warehouse that we loaded in.
>
> **[1:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=91)** So now we can create a new user account for this data warehouse.
>
> **[1:35](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=95)** Let me go ahead and scroll back up in my object explorer so I can see the top of the contents here.
>
> **[1:39](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=99)** In fact, I'll just minimize my database there.
>
> **[1:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=102)** So with the new connection selected, press the new query button up here at the very top.
>
> **[1:46](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=106)** First I need to create a server login account on the master database.
>
> **[1:51](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=111)** Make sure master is selected here in the dropdown menu, and then type in create login, and I'll name my login DataLoader.
>
> **[2:01](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=121)** Then we need to set up the password for this account.
>
> **[2:05](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=125)** And type in any strong password you want to use inside single quotation marks.
>
> **[2:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=130)** I'll press the Execute button and that'll create the login for the server.
>
> **[2:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=135)** Next, we need to create the database user that's attached to this login.
>
> **[2:19](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=139)** Let's come down a couple of lines and I'm going to change my database context to the data warehouse called AW-SQL Pool on my system.
>
> **[2:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=148)** Your data warehouse might be named something different.
>
> **[2:32](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=152)** The command for this will be Create User.
>
> **[2:36](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=156)** I'll use the same name, DataLoader, and we'll attach it to the login that we just created.
>
> **[2:43](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=163)** Next, we need to assign the control on database permission to the data warehouse.
>
> **[2:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=169)** Once again, mine is named AW-SQL Pool.
>
> **[2:55](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=175)** Now, because mine has a hyphen in the name, I actually need to wrap it inside square brackets.
>
> **[2:59](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=179)** Let me go ahead and put those in as well.
>
> **[3:02](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=182)** Then we're going to grant this to the new user called DataLoader.
>
> **[3:06](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=186)** Let me highlight both of these lines and press Execute and that creates the new user account.
>
> **[3:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=193)** So now that this is all set up, I want to ensure that all of the activities that this user performs occur within the resource allocations defined in the Workload Isolation Group.
>
> **[3:24](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=204)** This will give them at least 25% of the entire dedicated SQL Pools, CPU, and memory resources, so that all data load activities can perform at a predictable and consistent level.
>
> **[3:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=217)** To connect this user to the workload group, we need to head back to the Azure portal.
>
> **[3:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=222)** From the Overview page of the dedicated SQL pool we'll go back into Workload Management.
>
> **[3:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=227)** So here is the group that we set up in the prior movie.
>
> **[3:50](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=230)** I'm going to come over to the far right underneath the classifiers heading, and click the link that says Not Configured.
>
> **[3:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=236)** Then we'll add in a new classifier.
>
> **[3:59](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=239)** This is where we'll assign the incoming request to the workload group.
>
> **[4:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=243)** So let's give the classifier a name.
>
> **[4:06](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=246)** I'll call it Data Loader Login.
>
> **[4:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=249)** For the member, we'll add in the new user account that we just created, DataLoader.
>
> **[4:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=255)** This can also be a user group role that you may have enabled on your database.
>
> **[4:19](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=259)** For the resource importance, I'm going to change this to high.
>
> **[4:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=263)** This will prioritize this user's requests on the server and execute their workloads first.
>
> **[4:29](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=269)** Then I'll scroll down in this list here and I'll give it a label.
>
> **[4:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=273)** I'll call it Data Loads.
>
> **[4:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=274)** This will show up in various SQL Server catalog views so that you can monitor workload classifications later.
>
> **[4:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=282)** You can also set start and end times so that it can be used to manage when this user will get assigned to this particular Workload Isolation group.
>
> **[4:50](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=290)** I'll leave the start and end times blank so that the user's activity will always get assigned to this workload group.
>
> **[4:58](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=298)** Press the Add button at the bottom of the screen, then press Save.
>
> **[5:02](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=302)** That'll update your classifiers.
>
> **[5:04](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=304)** At this point, anytime the user named DataLoader performs actions on the database, the resources allocated to the activity will be determined by the Workload Isolation group.
>
> **[5:16](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/classify-workloads?u=76281980&t=316)** In our case, the DataLoader's operations will always have at a minimum, 25% of our pool's memory and CPU allocations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), database (8), [[SQL]] (8), management (4), [[Microsoft SQL Server|Sql server]] (2)
> **Env Vars:** sql (10), cpu (2)
> **Prerequisites:** set up (5)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** dropdown (1), scroll down (1)
> **Code Identifiers:** tsql (1)
> **Tools:** azure portal (1)
> **Speakers:** - [instructor] (1)

#### Load data into a staging table
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=0)** - [Instructor] The next step in setting up a cloud-hosted data warehouse is to ingest data into staging or integration tables in the SQL pool.
>
> **[0:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=9)** This is accomplished with a few T-SQL commands that you can execute here in Management Studio.
>
> **[0:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=15)** Staging tables allow you to bring the external data into the pool in order to transform it before finally loading it into he relevant fact and dimension tables.
>
> **[0:25](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=25)** Because the sequence of events occurs slightly differently in the cloud than in an on-premises data warehouse it'll often go by the acronym ELT, Extract Load Transform rather than ETL, Extract Transform Load.
>
> **[0:39](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=39)** Either way the concept is the same.
>
> **[0:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=42)** You want to pull data from the external transactional databases and other sources and consolidate it in a standardized way in the data warehouse.
>
> **[0:52](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=52)** First I want to make sure that I'm using the workload isolation group policy so I need to log into the server with the new data loader account.
>
> **[1:01](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=61)** I'll press the connect button here in the Object Explorer and fill in the details.
>
> **[1:06](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=66)** The login name is Data Loader and I use the super secure password, mystrongpassword1.
>
> **[1:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=78)** I also need to connect to the appropriate database so I'll click the options button here and in the Connect to database section there I'll type in the name of my database aw-sqlpool.
>
> **[1:29](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=89)** Your database may be named something different.
>
> **[1:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=93)** Press the connect button and after a moment you should have a new connection up here over here in the Object Explorer.
>
> **[1:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=102)** Now I'll select the new connection and press the new query button.
>
> **[1:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=105)** If you see this message here you can choose the option to dismiss it for this session only.
>
> **[1:51](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=111)** Now in order to save a bunch of typing I've staged all of the code that you'll need from the course exercise files.
>
> **[1:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=116)** I'll go ahead and paste that in.
>
> **[1:58](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=118)** Then I'll scroll up to the top and we'll move through it line by line.
>
> **[2:02](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=122)** Microsoft has some sample data stored in an Azure blob storage account that we can use for this demonstration.
>
> **[2:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=128)** It's technically for the Wide World Importers database but it'll be fine to pull into our example data warehouse.
>
> **[2:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=135)** So first we need to create a master key.
>
> **[2:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=138)** I'll go ahead and highlight this line and press execute.
>
> **[2:24](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=144)** Then we need to create the connection to our data source.
>
> **[2:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=148)** I'll call it WWIstorage for Wide World Importer storage.
>
> **[2:32](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=152)** It's a Hadoop data source and it has a location listed right there.
>
> **[2:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=157)** Let me highlight these lines and press execute to create that data source.
>
> **[2:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=162)** Then we need to define the format of the external data file that's stored in that external blob storage location.
>
> **[2:48](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=168)** This particular data source is plain text and it uses the pipe character to limit the fields.
>
> **[2:55](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=175)** Let me highlight all of this and press execute to create the formatting of the external data file.
>
> **[3:01](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=181)** Now we need to create an external table that references the data stored in blob storage.
>
> **[3:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=188)** I'll call this external table ExternalCity and I'll store it in the dbo schema.
>
> **[3:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=194)** Now at this point we're not copying data into the data warehouse yet.
>
> **[3:17](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=197)** It's just setting up the reference to the external data so that we can define the column names in preparation to copy it.
>
> **[3:24](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=204)** So we're creating this table with a number of columns and data types.
>
> **[3:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=208)** Then here at the bottom we have the reference to the external file storage location.
>
> **[3:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=213)** Let me highlight everything from this semicolon down there all the way up to the top of the Create External Data Tables line.
>
> **[3:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=222)** I'll press execute and that creates the external table.
>
> **[3:46](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=226)** Finally we can load the data into the data warehouse.
>
> **[3:51](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=231)** We'll create another new table called dbo.DimCity and we'll copy the data into it from the external table.
>
> **[3:58](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=238)** Let me highlight all of this and press execute.
>
> **[4:02](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=242)** This one's going to take just a few minutes to copy all of that data into our data warehouse.
>
> **[4:07](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=247)** When the load is done we can select everything from the new City Dimension table.
>
> **[4:11](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=251)** In fact let me expand the database over here and then expand our SQL pool file and the table's folder.
>
> **[4:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=258)** And here is the new dimension for our city table that we just copied in.
>
> **[4:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=263)** I'll select everything out of the dbo.DIMCity table and here is the data that's been loaded from blob storage.
>
> **[4:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/load-data-into-a-staging-table?u=76281980&t=271)** At this point we have a new dimension that's ready to link to any fact tables further building out our star or snowflake design of the data warehouse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (29), database (6), [[SQL]] (3), cloud (2), next (1)
> **Env Vars:** sql (3), elt (1), etl (1)
> **UI Navigation:** select the (1), scroll up (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Pause and remove resources in Azure
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/pause-and-remove-resources-in-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/pause-and-remove-resources-in-azure?u=76281980&t=0)** - [Instructor] When you are experimenting with dedicated SQL pools on a paid Azure subscription plan, you'll want to minimize your costs by pausing the resources when you're not using them or deleting them from your account entirely.
>
> **[0:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/pause-and-remove-resources-in-azure?u=76281980&t=13)** From the portal dashboard, click on the dedicated SQL pool resource.
>
> **[0:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/pause-and-remove-resources-in-azure?u=76281980&t=18)** At the top of the overview page is the option to pause the resource.
>
> **[0:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/pause-and-remove-resources-in-azure?u=76281980&t=23)** One of the benefits of the dedicated pool is that compute resources are billed separately from storage resources.
>
> **[0:30](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/pause-and-remove-resources-in-azure?u=76281980&t=30)** So by pausing, you'll effectively de-allocate any compute resources temporarily and you can eliminate all charges related to CPU and memory consumption.
>
> **[0:40](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/pause-and-remove-resources-in-azure?u=76281980&t=40)** You won't be able to access your database while it's paused, so this is a good option if you don't need to access it for a while.
>
> **[0:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/pause-and-remove-resources-in-azure?u=76281980&t=47)** For instance, if your data warehouse is only used during weekdays, you can pause it during the weekend.
>
> **[0:53](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/pause-and-remove-resources-in-azure?u=76281980&t=53)** Or if it's only used to compile end of month reports, you can pause it for the majority of the month and only resume it again when it's time to prepare the next batch of analyses.
>
> **[1:04](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/pause-and-remove-resources-in-azure?u=76281980&t=64)** Pausing will take a few minutes to complete, but once it does, you'll only be charged for database storage.
>
> **[1:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/pause-and-remove-resources-in-azure?u=76281980&t=70)** If instead you decide that you no longer need your data warehouse at all, you can delete the storage allocation as well and remove the dedicated SQL pool from your subscription.
>
> **[1:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/pause-and-remove-resources-in-azure?u=76281980&t=80)** Let me go ahead and click no here to not pause my resource.
>
> **[1:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/pause-and-remove-resources-in-azure?u=76281980&t=83)** Then we can click the delete button instead.
>
> **[1:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/pause-and-remove-resources-in-azure?u=76281980&t=87)** Here you would type in the name of the database and then click the delete button at the bottom of the screen.
>
> **[1:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/pause-and-remove-resources-in-azure?u=76281980&t=93)** Alternatively, since we put everything related to the SQL pool in a dedicated resource group, you could delete that as well.
>
> **[1:40](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/pause-and-remove-resources-in-azure?u=76281980&t=100)** Let me close this page, then I'll go over to the menu in the far left side and switch over to resource groups.
>
> **[1:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/pause-and-remove-resources-in-azure?u=76281980&t=109)** Click on the resource group that we created when we deployed the pool.
>
> **[1:53](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/pause-and-remove-resources-in-azure?u=76281980&t=113)** Here we have the option to delete the entire group.
>
> **[1:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/pause-and-remove-resources-in-azure?u=76281980&t=116)** Type in the resource group name and then press delete.
>
> **[2:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/pause-and-remove-resources-in-azure?u=76281980&t=120)** This will remove everything from your account and you'll no longer incur further charges for these deployments.
>
> **[2:06](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/pause-and-remove-resources-in-azure?u=76281980&t=126)** Anytime you're experimenting with the features of Azure, especially once your free trial has expired, it's important to keep a close eye on the resources that you deploy, so that you don't get billed for something that you unintentionally left running.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), database (3), [[Microsoft Azure|Azure]] (2), data (2), next (1)
> **Env Vars:** sql (4), cpu (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 6. Enforce Data Quality

[↑ Back to Table of Contents](#table-of-contents)

#### SQL Server Data Quality Services
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=0)** - [Instructor] Anytime you have humans entering data into a database, you're bound to wind up with typos and misspellings that'll wreck havoc on your analyses.
>
> **[0:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=9)** Data Quality Services is an add-on for SQL Server that'll help you build a customized knowledge base for correcting, standardizing, and de-duplicating your data.
>
> **[0:19](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=19)** Essentially, DQS will help you locate and correct common misspellings and other data entry errors.
>
> **[0:25](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=25)** It's particularly useful when you're moving data from a number of source databases, each with their own peculiarities, and consolidating it all in a single, consistent data warehouse.
>
> **[0:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=37)** You can read up on the features and implementation details on learn.[microsoft.com](https://microsoft.com).
>
> **[0:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=42)** But I wanted to take a few minutes and walk through an example so that you can see how DQS can help you maintain a more valuable data warehouse.
>
> **[0:52](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=52)** To get started with DQS, you first need to install the components.
>
> **[0:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=56)** You can do that either during the initial SQL Server setup process or you can add it after the fact by returning the setup and adding it to your existing installation.
>
> **[1:07](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=67)** I did not include the necessary components when I installed SQL Server, so I'm going to add them now.
>
> **[1:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=74)** Go down to the start menu, and in the Microsoft SQL Server program group, you'll find an icon for the installation center.
>
> **[1:21](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=81)** Let's go ahead and start that up.
>
> **[1:25](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=85)** Then I'll move over to the installation page and click the link at the very top to add features to an existing installation.
>
> **[1:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=93)** That'll prompt me to locate the installation media that I've previously downloaded for SQL Server.
>
> **[1:38](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=98)** On my computer that's on the C drive in a folder called SQL 2022 and I'm using the evaluation edition for the release candidate one.
>
> **[1:46](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=106)** I'll go ahead and select that folder and press OK.
>
> **[1:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=109)** Yours might be in a different location depending on the version and addition of SQL Server that you're working with.
>
> **[1:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=116)** Once you locate it, it'll move you to the setup page.
>
> **[2:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=120)** Now we just need to advance the process until we get to the installation type page.
>
> **[2:04](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=124)** So, I'll go ahead and press Next here.
>
> **[2:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=129)** Next again, and on the insulation type I'll choose the option to Add features to an existing instance of SQL Server.
>
> **[2:17](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=137)** Select your instance name from the dropdown menu if you have multiples installed, and then press Next.
>
> **[2:24](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=144)** On this page, I'll uncheck the option to use the Azure extension for SQL Server and press Next.
>
> **[2:30](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=150)** That'll bring us to the feature selection page.
>
> **[2:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=153)** Underneath Database Engine Services, place a check in Data Quality Services.
>
> **[2:38](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=158)** Then under Shared Features, place another check for Data Quality Client.
>
> **[2:43](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=163)** Go ahead and press the Next button.
>
> **[2:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=167)** That'll bring you to the ready to install page and then you can finally press the Install button.
>
> **[2:57](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=177)** When the installation completes, you press the close button here and close the installation center.
>
> **[3:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=183)** Now we have one more step that we need to perform.
>
> **[3:06](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=186)** A script was created for us that'll create a couple of additional databases on our SQL Server instance.
>
> **[3:12](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=192)** In order to run the script your Windows user account must be a member of the CIS Admin Fixed Server role in SQL Server.
>
> **[3:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=200)** To run the script, go down to your start menu and you'll either see it here at the very top of the page or if you scroll down and go into the Microsoft SQL Server folder, you'll find the script here.
>
> **[3:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=211)** It's called SQL Server Data Quality Server Installer.
>
> **[3:35](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=215)** Now there's actually two different scripts that have the exact same icon, so make sure you're selecting the installer and not the one called the Data Quality client.
>
> **[3:44](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=224)** So, go ahead and click on the installer file.
>
> **[3:48](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=228)** That'll prompt me to make changes to my device and I'll say Yes to that.
>
> **[3:52](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=232)** This will open up a command prompt window and start the script.
>
> **[3:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=236)** You'll be asked to set the database master key.
>
> **[3:59](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=239)** This is a new password that'll be used to secure the data quality database.
>
> **[4:04](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=244)** You have the rules that your password must follow listed on the lines above.
>
> **[4:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=248)** I'll go ahead and type in a password and then confirm it.
>
> **[4:12](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=252)** Press enter to continue on with the installation.
>
> **[4:17](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=257)** When it's done, you'll see the message to press any key to continue.
>
> **[4:21](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=261)** When you do, the window closes, and that's it.
>
> **[4:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=263)** Data Quality Services is now installed.
>
> **[4:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=267)** You can verify the installation by opening up Management Studio.
>
> **[4:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=271)** In the Databases folder for your server, you should now see a couple of new databases for data quality services main, projects, and staging data.
>
> **[4:40](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/sql-server-data-quality-services?u=76281980&t=280)** So at this point, Data Quality Services is installed on our instance of SQL Server and we're ready to use it to verify the quality of our data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (17), [[Microsoft SQL Server|Sql server]] (11), next (5), database (4), [[Databases]] (4)
> **Env Vars:** sql (14), dqs (3), cis (1)
> **Prerequisites:** install (3), setup (3)
> **CLI Commands:** find (2), make (2)
> **UI Navigation:** dropdown (1), scroll down (1), click on (1)
> **Definitions:** is an  (1), is a  (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **Tools:** command prompt (1)

#### Cleanse data with DQS
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=0)** - [Instructor] Cleansing data is the process of comparing new data against known and verified values to make sure that the new data meets expectations.
>
> **[0:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=9)** When you have lots of users entering data into a database you're bound to wind up with typographical errors and misspellings.
>
> **[0:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=15)** And when you're pulling lots of data from multiple databases and consolidating it all in a single data warehouse those little problems can add up quickly and have a big impact on the results of your analyses.
>
> **[0:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=27)** Data Quality Services provides a tool to help us out and make sure that the values that we're importing into the database are consistent.
>
> **[0:35](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=35)** Before we can get started with an example we need some data to cleanse.
>
> **[0:39](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=39)** I've created a script in the exercise files that'll create a new table and fill in a bunch of records.
>
> **[0:44](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=44)** So let me start up a new query and I'll paste in the contents of that script.
>
> **[0:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=49)** This script will create a new table in the KinetEco data warehouse called DQS_Cities in the Dimension schema.
>
> **[0:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=56)** Then it'll fill in a hundred records for the US cities with the highest populations.
>
> **[1:01](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=61)** For this example, I've introduced some typos into the data though, so we'll see if those errors get picked up during the cleansing process.
>
> **[1:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=69)** Let's go ahead and execute the script to create the table and fill in all the data.
>
> **[1:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=73)** Then I can open up the KinetEco data warehouse and expand the Tables folder.
>
> **[1:17](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=77)** And I'm not seeing it here so let me go ahead and right-click and choose Refresh.
>
> **[1:21](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=81)** Then I'll expand the Tables folder again and there is the new table.
>
> **[1:25](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=85)** Let me right-click on that and Select Top 1000 Rows just to verify that data got put in successfully.
>
> **[1:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=91)** Okay, so this is the data that I want to cleanse with Data Quality Services.
>
> **[1:36](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=96)** Now we need to start up the client.
>
> **[1:38](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=98)** Let me minimize Management Studio and go down to my Start menu.
>
> **[1:41](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=101)** Then I'll scroll down to the Microsoft SQL Server program group.
>
> **[1:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=105)** Here you have the option to start up the Data Quality Client.
>
> **[1:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=109)** Notice it has the same icon as the Data Quality Server installer script that we used in the prior movie.
>
> **[1:55](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=115)** So make sure you're choosing the right one to start up the data quality client.
>
> **[2:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=120)** That'll prompt me to log into my SQL Server instance.
>
> **[2:04](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=124)** Since I'm working on the same machine that I'm running SQL Server on, I'll use the keyword "localhost" or you would fill in the server name that you use in Management Studio.
>
> **[2:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=134)** I'll press Connect and that'll log me in.
>
> **[2:16](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=136)** Now we have a window with three panes.
>
> **[2:19](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=139)** On the left you have options for Knowledge Base Management.
>
> **[2:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=143)** In the middle are Data Quality Projects.
>
> **[2:25](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=145)** And on the right you have options for administrative tasks.
>
> **[2:29](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=149)** I'm going to go to the middle column and choose the option to create a new Data Quality Project.
>
> **[2:35](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=155)** First, we'll give the project a name.
>
> **[2:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=157)** I'll call this DQS_KinetEco_Cities.
>
> **[2:41](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=161)** Data Quality Services includes a single sample knowledge base.
>
> **[2:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=165)** You can use it from the dropdown list here.
>
> **[2:48](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=168)** This is basically a catalog of known good values that'll be used to compare the input data.
>
> **[2:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=174)** You can create your own knowledge base in DQS that pertains to your own data.
>
> **[2:57](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=177)** Perhaps a list of products or store names that you've verified is complete and accurate.
>
> **[3:02](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=182)** For now, I'm going to use the sample knowledge base that includes details about locations in the United States.
>
> **[3:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=188)** So we have a fully verified list of state names and abbreviations, countries, counties, and other places that'll be used to compare against the input data.
>
> **[3:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=198)** Go ahead and press the Next button in the lower right hand corner.
>
> **[3:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=203)** For the data source I'll select SQL Server, but you can also choose to pull in data from an Excel file.
>
> **[3:29](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=209)** For the database I'll choose the KinetEco data warehouse.
>
> **[3:32](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=212)** And for the table I'll choose the DQS_Cities table.
>
> **[3:36](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=216)** Next, we need to map the input data against the relevant data in the knowledge base.
>
> **[3:41](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=221)** For this example I want to verify the state data that I've imported into SQL Server, so that's going to be in the State column there.
>
> **[3:48](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=228)** And I want to verify it against the domain over here of US states.
>
> **[3:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=234)** That maps my source column and domain.
>
> **[3:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=236)** Go ahead and press Next.
>
> **[3:59](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=239)** Then on this screen, press the Start button.
>
> **[4:02](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=242)** That'll begin the cleansing process.
>
> **[4:05](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=245)** When it's done, we get some statistics at the bottom about the completeness and accuracy of the data.
>
> **[4:11](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=251)** We have a value that was automatically corrected and a value that data Quality Services is making a suggestion about.
>
> **[4:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=258)** Press Next to move on to the next step.
>
> **[4:21](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=261)** Here you can review the possible errors that were identified and see what the potential fix might be.
>
> **[4:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=267)** On the Suggested tab we have a value of Massachusetts with a capital E and square brackets at the end.
>
> **[4:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=274)** I'm not exactly sure what this means but this is a value that's present in our existing data set.
>
> **[4:39](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=279)** The suggestion is to correct that to just the state name "Massachusetts" with no E at the very end.
>
> **[4:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=285)** I'm going to go ahead and approve that change by putting a check there, and that'll move it from the Suggested tab over to the Corrected tab.
>
> **[4:51](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=291)** And we'll get over here in just a moment.
>
> **[4:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=294)** Let's now take a look at the New tab.
>
> **[4:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=296)** Here we find values that DQS thinks should be added to the knowledge base for future analyses.
>
> **[5:02](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=302)** Let's look and see if that's actually the case.
>
> **[5:05](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=305)** It shows two values that are found in our data set.
>
> **[5:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=308)** One is for "Califronia" and one is for "Oregano".
>
> **[5:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=313)** Now these are most likely misspellings and not new states so I'm going to select each one and provide the correction down below.
>
> **[5:19](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=319)** When I select Califronia I can come down here to the bottom and type in the correct spelling of California.
>
> **[5:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=327)** Then I'll check the box here to approve that text and then come back up and go to the correction box and change Califronia to California.
>
> **[5:36](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=336)** I'll approve that change.
>
> **[5:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=337)** That'll move it over to the Corrected tab.
>
> **[5:40](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=340)** Then we'll do the same thing for Oregano.
>
> **[5:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=342)** The correct spelling is Oregon.
>
> **[5:46](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=346)** I'll approve that text.
>
> **[5:48](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=348)** Then come up here to the Correct To section and using the dropdown menu, I'll change Oregano to Oregon.
>
> **[5:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=354)** I'll approve that change.
>
> **[5:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=356)** Once again, it moves it from the New section over to Corrected.
>
> **[6:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=360)** Now we don't have anything that's been identified as invalid data, so I'll move over to the Corrected tab.
>
> **[6:05](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=365)** So here are all of the corrections that are going to be fixed in our dataset.
>
> **[6:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=369)** We have the text, "North Carolin" where it's missing the A and it's correcting it with the A at the very end.
>
> **[6:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=375)** We have Massachusettse with that extra E and it's correcting the spelling.
>
> **[6:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=378)** Califronia will be changed to California.
>
> **[6:21](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=381)** And Oregano will be changed to Oregon.
>
> **[6:24](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=384)** We'll make sure that all those changes are approved and press Next.
>
> **[6:29](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=389)** Now we can preview the output data and export it out of Data Quality Services.
>
> **[6:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=394)** You can either save it to SQL Server or to a file.
>
> **[6:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=397)** A CSV file or an Excel file.
>
> **[6:39](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=399)** I'll just export the data to SQL Server again.
>
> **[6:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=402)** I'll put it back in the KinetEco data warehouse and I'll create a new table.
>
> **[6:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=407)** I'll call it CleanedCities.
>
> **[6:51](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=411)** You have the option to export just the data or the additional details about the cleansing process as well.
>
> **[6:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=416)** For instance, the Reason and the StateConfidence columns.
>
> **[7:01](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=421)** These can be useful to include for auditing purposes.
>
> **[7:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=423)** So I'll choose to include the additional columns as well as the original data.
>
> **[7:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=428)** Let's press the Export button and then press Okay.
>
> **[7:12](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=432)** And we can finish out of Data Quality Services.
>
> **[7:16](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=436)** Now let's review what happened in Management Studio.
>
> **[7:19](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=439)** I'll go ahead and close the tabs that we had open previously and I'm not going to save any changes.
>
> **[7:25](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=445)** Then in the KinetEco data warehouse I'll refresh the tables folder and here is our new CleanedCities data.
>
> **[7:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=451)** Let me right-click on it and choose Select Top 1000 Rows.
>
> **[7:36](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=456)** In this table, we have the State_Source column that has the original data and the State_Output column that has our new corrected values.
>
> **[7:44](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=464)** Let me scroll through these results and we'll find a couple of the columns that were modified.
>
> **[7:48](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=468)** Here is the one for North Carolina that was misspelled originally.
>
> **[7:51](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=471)** It was missing the A here at the end.
>
> **[7:53](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=473)** And you can see that the corrected output now includes the A.
>
> **[7:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=476)** The reason that it was modified was through the DQS cleansing process.
>
> **[8:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=480)** And we have the status shows that that value was corrected.
>
> **[8:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=483)** Let me scroll down just a little bit further, we'll find a couple more.
>
> **[8:06](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=486)** Here is the one that originally said Oregano and we corrected that to the correct name of Oregon.
>
> **[8:11](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=491)** This one was modified by a user, and again, it shows that it's been corrected.
>
> **[8:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=495)** And here we have Califronia.
>
> **[8:17](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=497)** That was corrected to California.
>
> **[8:19](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=499)** So that's how data quality services works.
>
> **[8:22](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/cleanse-data-with-dqs?u=76281980&t=502)** It compares your input data against a known list of verified and accurate values and it allows you to quickly correct typographical and other data entry errors to bring a greater level of consistency to your data warehouse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (49), [[Microsoft SQL Server|Sql server]] (7), next (6), management (4), database (3)
> **Env Vars:** sql (7), dqs (3), csv (1)
> **UI Navigation:** right-click (3), scroll down (2), go to (2), dropdown (2)
> **CLI Commands:** make (4), find (3)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Create a custom knowledge base
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=0)** - [Instructor] In order to use data quality services to cleanse your data, you need to have some information about what is correct and valid.
>
> **[0:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=8)** This information is stored in a knowledge base and individual table columns from your input data source will get mapped to domains in the knowledge base.
>
> **[0:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=18)** Knowledge bases can be augmented and updated over time with new rules and additional acceptable values so that they can grow with your business.
>
> **[0:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=27)** In the last movie, we saw how to use the default knowledge base that stored information about valid locations within the United States but the true potential of data quality services relies on you being able to create new knowledge bases based on your own business.
>
> **[0:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=45)** For this example, I want to create a knowledge base that includes all of the supplier names used by Wide World Importers.
>
> **[0:53](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=53)** This will be useful to help ensure that data is entered consistently when it's copied out of a variety of source databases and stored in the data warehouse.
>
> **[1:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=63)** In the data quality client home screen click New knowledge base in the left hand column.
>
> **[1:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=69)** Then we'll give it a name.
>
> **[1:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=70)** I'll call it WWI Suppliers.
>
> **[1:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=75)** Since we're working from scratch, I'll choose to create a knowledge base from none.
>
> **[1:19](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=79)** The other options are to start with an existing knowledge base or to import a DQS file.
>
> **[1:25](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=85)** At the bottom, we need to select an activity.
>
> **[1:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=88)** Domain management will allow you to manually create domains.
>
> **[1:32](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=92)** Knowledge discovery will use a wizard to analyze an existing data sample and populate the domains of the knowledge base with the results.
>
> **[1:40](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=100)** Matching policy will create a knowledge base for finding duplicate records rather than cleansing data values.
>
> **[1:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=107)** I'm going to use an existing table in the Wide World Importer's database as a source.
>
> **[1:51](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=111)** So choose knowledge discovery, and then press next.
>
> **[1:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=116)** That data source will be coming out of SQL Server but you can also pull the data from an Excel file.
>
> **[2:01](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=121)** The database is the Wide World Importer's data warehouse and the table is the supplier table.
>
> **[2:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=128)** Next, we need to choose a column from the table.
>
> **[2:11](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=131)** I want to import all of the unique supplier names as the source of knowledge, and that data can be found in the supplier column of the table.
>
> **[2:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=140)** Now, I'm making a big assumption here that all of the values in this table are correct and complete.
>
> **[2:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=148)** You'd want to carefully verify your data before adding it to the knowledge base and perhaps consider exporting it to an Excel spreadsheet first so that you can really spend some time with the data to verify that every single record is accurate and spelled correctly.
>
> **[2:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=165)** Any mistakes in the data at this stage will get compounded as you apply them to all of the imported data coming into the data warehouse.
>
> **[2:53](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=173)** Next, we need to map this source data to a domain in the knowledge base.
>
> **[2:58](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=178)** We don't have any domains yet, so press this icon with a little yellow starburst.
>
> **[3:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=183)** I'll name the domain Supplier Name.
>
> **[3:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=188)** The data type will be a string.
>
> **[3:11](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=191)** You have the option to output the fixed data to a specific case.
>
> **[3:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=194)** For instance, we can format it as all uppercase or lowercase letters or capitalize individual words.
>
> **[3:21](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=201)** I'll leave it set to none, to not modify the output formatting.
>
> **[3:25](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=205)** You also have the option to pick a specific language and enable spell checkers to be used during the domain verification.
>
> **[3:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=211)** I'll just leave all of the default options here and press okay.
>
> **[3:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=217)** Now, I've got the knowledge base set up to use all of the values from the supplier column in the table to define what's acceptable, and we're storing that knowledge in a domain called Supplier Name.
>
> **[3:48](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=228)** At the bottom of the screen, press the next button.
>
> **[3:51](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=231)** On this page, we need to analyze the data which will identify all of the unique values that are present.
>
> **[3:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=236)** Press the start button to do that.
>
> **[4:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=240)** When it's done, you can see that there were 28 records that were found but only 14 unique supplier names.
>
> **[4:07](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=247)** Press the next button.
>
> **[4:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=249)** On the final page, Data Quality Services displays all of the domain values that were discovered.
>
> **[4:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=255)** This gives you one last opportunity to look through the list and make sure that everything is spelled correctly.
>
> **[4:21](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=261)** You can also specify what to do with the values when it's found in a data cleanse.
>
> **[4:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=267)** The default is the green check mark, which means that if the data you're cleansing is this exact value, then it's considered correct but there are two other options.
>
> **[4:38](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=278)** For instance, if I scroll down to the bottom one of the values that it found in our data set is the text unknown.
>
> **[4:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=285)** Maybe this is acceptable in the source database but we don't want to import records with this name into the data warehouse.
>
> **[4:53](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=293)** We can change its type to invalid with the yellow triangle.
>
> **[4:57](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=297)** This way, any time a record shows up that matches the name unknown, it'll get flagged by data quality services so that we can decide how to handle it.
>
> **[5:07](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=307)** You can also add common data inconsistencies to the knowledge base to have them fixed automatically.
>
> **[5:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=313)** For instance, let me scroll back up here to the top.
>
> **[5:16](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=316)** One of the values that we have for a supplier is Contoso Limited with the abbreviation Ltd.
>
> **[5:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=323)** This should be the standard, official way to refer to the supplier in the data warehouse.
>
> **[5:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=328)** If you find that you regularly have records coming into your data warehouse that simply say Contoso without the limited abbreviation, then you can add a specific line to the knowledge base to handle that.
>
> **[5:40](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=340)** Press the green plus icon to add a new row.
>
> **[5:44](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=344)** Then we'll supply the text that we want to look for.
>
> **[5:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=347)** I'll type out the text Contoso.
>
> **[5:51](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=351)** Then I'll change its type to an error by selecting the red X.
>
> **[5:55](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=355)** That'll allow me to supply a corrected to value.
>
> **[5:58](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=358)** I'll correct this to Contoso Limited with our abbreviation.
>
> **[6:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=363)** Press enter and that information gets added into the knowledge base and in fact, it adds it up here at the top.
>
> **[6:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=368)** Let me just scroll back up, and there it is right there.
>
> **[6:11](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=371)** So anytime we encounter the text Contoso, it'll automatically fix it to Contoso Limited.
>
> **[6:17](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=377)** And you can keep adding different versions to correct.
>
> **[6:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=380)** Maybe you also occasionally get Contoso Limited all spelled out.
>
> **[6:24](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=384)** Let me add in another row to handle that situation.
>
> **[6:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=387)** For the value, I'll type out Contoso Limited.
>
> **[6:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=393)** I'll change its type to an error and we'll add the corrected text.
>
> **[6:39](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=399)** Once again, I'll use the same abbreviation as before and press enter, and that gets added into the list up above.
>
> **[6:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=407)** So now I have three different versions of this supplier's name, but they'll all get corrected to the same standardized output.
>
> **[6:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=414)** This way they'll all be identical once they've passed through the cleansing process.
>
> **[6:59](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=419)** When you're done, press the finish button in the bottom right hand corner.
>
> **[7:02](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=422)** You're then asked if you want to publish the knowledge base with the updates, and we do so press the publish button.
>
> **[7:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=429)** Then press okay and the custom supplier name knowledge base is added to data quality services.
>
> **[7:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=435)** If you ever want to update the knowledge base with additional information, click the link for it in the left hand column, then choose domain management.
>
> **[7:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=443)** Then you can switch over to the domain values tab and continue adding in additional values to look for and your preferred corrections.
>
> **[7:32](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=452)** So now that you have a custom knowledge base created based on your own verified data, you can use this in an integration services data flow using the DQS cleansing task.
>
> **[7:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/create-a-custom-knowledge-base?u=76281980&t=462)** That'll allow you to incorporate the power of data quality services during your automated extract, transform and load procedure when adding records to your data warehouse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (36), next (5), database (3), business (2), management (2)
> **Env Vars:** dqs (2), wwi (1), sql (1)
> **Analogies:** for instance (3)
> **CLI Commands:** make (1), find (1)
> **Prerequisites:** you need to have (1), set up (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** means that (1)


### 7. Master Data Services

[↑ Back to Table of Contents](#table-of-contents)

#### Introduction to Master Data Services
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/introduction-to-master-data-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/introduction-to-master-data-services?u=76281980&t=0)** - [Instructor] Rather than attempt to clean up data before loading it into a data warehouse, it might be better to ensure that the data is consistently entered into each of your transactional databases in the first place.
>
> **[0:12](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/introduction-to-master-data-services?u=76281980&t=12)** This approach is known as Master Data Management.
>
> **[0:16](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/introduction-to-master-data-services?u=76281980&t=16)** Master Data Management aims to create a single point of reference within an organization for critical data sets.
>
> **[0:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/introduction-to-master-data-services?u=76281980&t=23)** The most common kinds of master data include customers or products, but it can represent any reference data that would benefit from a consistent set of permissible values.
>
> **[0:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/introduction-to-master-data-services?u=76281980&t=34)** This single point of reference is then disseminated through data integration techniques to an enterprise's transactional databases so that they're always consistent right from the start.
>
> **[0:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/introduction-to-master-data-services?u=76281980&t=45)** If you were to diagram out how master data benefits an overall business intelligence system, it might look something like this.
>
> **[0:52](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/introduction-to-master-data-services?u=76281980&t=52)** Here we have a master database that includes all of the products that we make and sell.
>
> **[0:58](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/introduction-to-master-data-services?u=76281980&t=58)** This master list is then fed into a database that's used during the manufacturer of the products.
>
> **[1:04](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/introduction-to-master-data-services?u=76281980&t=64)** It's also fed into the website database that our customers use for ordering, and it's fed into the warehouse database for inventory management.
>
> **[1:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/introduction-to-master-data-services?u=76281980&t=73)** Since all of the product data comes from a single reference, the master data, then we know that it'll be consistently referenced throughout the enterprise.
>
> **[1:22](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/introduction-to-master-data-services?u=76281980&t=82)** Then when the information is consolidated into the data warehouse, we don't need to rely on data cleansing procedures to match things up again.
>
> **[1:30](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/introduction-to-master-data-services?u=76281980&t=90)** We know that the product ID, that the manufacturing department uses, is the same product ID that the customer orders.
>
> **[1:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/introduction-to-master-data-services?u=76281980&t=97)** This allows our business intelligence analyses to be able to easily relate products from the manufacturing segment of the business through inventory and warehousing to the final sale and delivery.
>
> **[1:50](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/introduction-to-master-data-services?u=76281980&t=110)** Microsoft provides a tool for managing master data called, Master Data Services.
>
> **[1:55](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/introduction-to-master-data-services?u=76281980&t=115)** It's an add-on for a SQL server, and it allows users to create a model for their data.
>
> **[2:01](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/introduction-to-master-data-services?u=76281980&t=121)** Master data services also provides a web-application that makes it easy for a business' end users to go in and review, update, or add to the master data, so that updates are always available to every system in the organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (19), [[Microsoft Products|Products]] (4), database (4), management (3), product (3)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Install MDS and IIS
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=0)** - [Instructor] I need to add the components for Master Data Services to my SQL Server instance, and we can do that through the SQL Server installation center.
>
> **[0:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=8)** I'll come down to the start menu, and we'll scroll down to the SQL Server program group and inside of there we'll find the installation center.
>
> **[0:16](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=16)** Then we'll go to the installation page and click the first link to add features to an existing installation.
>
> **[0:22](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=22)** That'll prompt me for the installation media, and I've downloaded that to my computer on the C drive into a folder called SQL 2022, and I'm using the evaluation edition of release candidate 1.
>
> **[0:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=34)** Your specific folder location will probably be a little bit different just depending on the edition and version of SQL Server that you're working with.
>
> **[0:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=42)** When you find the right folder, go ahead and select it and press okay, and that will move you into the setup.
>
> **[0:48](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=48)** Then we just need to advance a couple of pages until we get to the installation type section.
>
> **[0:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=54)** Here, we'll choose the option to add features to an existing instance, and using the dropdown menu choose the instance name that you want to work with.
>
> **[1:01](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=61)** Press the next button.
>
> **[1:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=63)** On this page, I need to turn off the Azure extension for SQL Server.
>
> **[1:07](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=67)** Now, for some reason on this page, the next button doesn't activate immediately so I'm just going to wait here a moment until it activates and I can click it.
>
> **[1:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=74)** Okay, go ahead and press the next button.
>
> **[1:16](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=76)** And that brings us to the section where we get to choose our features.
>
> **[1:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=80)** At the bottom of the shared features, we have the option for master data services.
>
> **[1:24](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=84)** I'll go ahead and select that, and then place a check mark in the box.
>
> **[1:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=88)** In the "feature description" box over here on the right, you can take a look at what's going to happen on our system.
>
> **[1:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=94)** This is going to install Master Data Services including the manager, assemblies, a PowerShell snap-in and the folders and files for a web application.
>
> **[1:43](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=103)** Press the next button at the bottom, then we can review the summary about what's going to get installed on our system, and finally press the install button.
>
> **[1:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=116)** When it completes, we can go ahead and press the close button and we're done installing the components on SQL Server.
>
> **[2:02](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=122)** Next, we need to add Internet information services, or IIS, to our Windows machine.
>
> **[2:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=128)** In Windows server, you'll do this through the server manager and then you go to "Add roles and features."
>
> **[2:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=134)** In Windows 10 which is what I'm using, go down to the search box and search for the control panel.
>
> **[2:22](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=142)** Then click programs, then programs and features.
>
> **[2:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=147)** And finally, on the left, click the section that says "Turn Windows features on or off."
>
> **[2:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=151)** In this new window, find the section for internet Information services, and place a check there.
>
> **[2:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=157)** This will activate a number of default configurations.
>
> **[2:40](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=160)** I'll go ahead and expand this open, and we're going to make some additional selections inside of there.
>
> **[2:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=165)** I don't need to do anything inside of FTP server, but I will expand the section for web management tools.
>
> **[2:51](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=171)** Here, you want to make sure that you have a check mark for "IIS Management Console."
>
> **[2:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=176)** We can now collapse this section and expand the section for "Worldwide Web Services."
>
> **[3:01](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=181)** Inside of here, we'll go into "Application development features."
>
> **[3:05](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=185)** I'll place a check mark for .net extensibility 3.5 and 4.8.
>
> **[3:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=190)** Also [ASP.net](https://ASP.net) 3.5 and 4.8, and then make sure that we also got check marks placed for IS API extensions, and IS API filters.
>
> **[3:22](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=202)** Okay, we're done in this section, let's go ahead and minimize that, and come down to common HTTP features.
>
> **[3:30](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=210)** Here, you want to make sure that default document, directory browsing, HTTP errors, and static content are all checked.
>
> **[3:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=217)** Make sure that you do not have a check in web dev publishing.
>
> **[3:41](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=221)** Let's go ahead and minimize this section and move down to health and diagnostics.
>
> **[3:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=225)** Here, make sure that HTTP logging is checked, as well as request monitor, I'll place a check there.
>
> **[3:53](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=233)** Next up, we have performance features.
>
> **[3:55](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=235)** Let's expand that.
>
> **[3:57](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=237)** Here, I want to make sure that both of these are checked, so dynamic Content compression and static Content compression both get checks.
>
> **[4:04](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=244)** Finally, we'll take a look inside of security.
>
> **[4:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=248)** Make sure that we have a check for request filtering as well as Windows authentication.
>
> **[4:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=253)** Okay, that finishes the section for information services.
>
> **[4:16](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=256)** Let's go ahead and minimize that, and I'm going to scroll all the way back up to the top.
>
> **[4:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=260)** We have one more check that we need to place.
>
> **[4:22](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=262)** Expand .net framework 4.8 advanced services, Then go into WCF services.
>
> **[4:30](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=270)** Here, place a check mark for HTTP activation so that completes the changes that we need to make to our Windows installation.
>
> **[4:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=277)** Go ahead and press the okay button to save those changes and install everything on our computer.
>
> **[4:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=282)** I'll choose the option to let Windows update, find the files for me, and we'll download and install everything.
>
> **[4:50](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=290)** Once the installation completes, we can go ahead and close all of these windows.
>
> **[4:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=294)** Now that internet information services has been added to Windows, you can verify that it's working by opening up a web browser.
>
> **[5:01](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=301)** In the URL bar, navigate to "Local host."
>
> **[5:06](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-mds-and-iis?u=76281980&t=306)** If you see the Internet Information Services splash screen then you'll know that the service is up and running.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (7), [[Microsoft SQL Server|Sql server]] (6), next (6), web (4), data (3)
> **Env Vars:** sql (7), http (4), iis (2), api (2), ftp (1)
> **CLI Commands:** make (9), find (4), snap (1)
> **Versions:** 4.8 (3), 3.5 (2)
> **UI Navigation:** go to (2), scroll down (1), dropdown (1), navigate to (1)
> **Prerequisites:** install (4), setup (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Tools:** powershell (1)

#### Configure Master Data Services
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=0)** - I just installed Internet Information Services on my Windows machine and now we're ready to configure Master Data Services.
>
> **[0:07](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=7)** Let's go ahead and close the web browser.
>
> **[0:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=9)** To find it come down to the Windows Start menu and go into the Microsoft SQL Server program group.
>
> **[0:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=15)** Here you'll find a new program that's just been installed called SQL Server Master Data Services Configuration Manager.
>
> **[0:21](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=21)** Let's go ahead and start that up and allow it to make changes to my computer.
>
> **[0:25](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=25)** That'll bring you to the main startup page.
>
> **[0:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=27)** Underneath prerequisites I have a green check mark, which means that everything is already set up.
>
> **[0:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=33)** If you have any warnings here, there are probably additional settings that you'll need to configure or components that need to be installed.
>
> **[0:39](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=39)** So read through the warning message that you see and see what specific tasks you need to take in order to enable Master Data Services.
>
> **[0:46](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=46)** The next step is to create the Master Data Services database in SQL Server.
>
> **[0:51](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=51)** Go to the database configuration tab over here on the left.
>
> **[0:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=54)** Then on the right press Create Database.
>
> **[0:58](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=58)** That'll start a little wizard and walk us through the steps.
>
> **[1:02](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=62)** I'll press the next button on this page, that'll ask me for the login credentials.
>
> **[1:06](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=66)** I'm just going to go ahead and use my Windows10-PC for the SQL Server instance, and the authentication type is going to use integrated security.
>
> **[1:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=73)** This will use my current Windows login account name.
>
> **[1:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=75)** Make note of this name because we're going to need it again here in just a few minutes.
>
> **[1:19](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=79)** Go ahead and test the connection and it tells me that it's successful.
>
> **[1:22](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=82)** So that's good. Press okay and press next.
>
> **[1:26](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=86)** Then we can give our database and name.
>
> **[1:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=88)** I'll call it Master Data Services.
>
> **[1:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=91)** Press the next button that takes us to the administrator account step.
>
> **[1:35](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=95)** Once again, I'm going to use my Windows account username so that's already applied there.
>
> **[1:38](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=98)** I'll press next.
>
> **[1:40](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=100)** That gives me a summary of everything.
>
> **[1:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=102)** I'll press the next button and that'll go through and install the database on SQL Server.
>
> **[1:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=107)** When that process completes go ahead and press finish button and we're done installing the database.
>
> **[1:52](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=112)** Now at this point I'm seeing this message that says that SQL Server agent on the SQL Server database engine is not currently running.
>
> **[1:58](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=118)** So let's hop over to Management Studio and start it up.
>
> **[2:02](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=122)** To do that, I'll just come down to the agent in the Object Explorer panel, and I'll right click on it and choose the option to start it.
>
> **[2:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=128)** Then I'll give me a couple of warning prompts here, I'll just say yes to that and yes to that and it'll start the agent.
>
> **[2:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=135)** Once it started, you'll see that the icon changes over here and includes a little green arrow icon.
>
> **[2:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=140)** While we're here, we can also make sure that the new database was just created on our system.
>
> **[2:24](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=144)** So only go ahead and refresh the databases folder and there is the new Master Data Services database that was just set up, so everything's looking good here.
>
> **[2:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=153)** Okay, let's go back into the Data Services Configuration Manager.
>
> **[2:38](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=158)** Now, I'm still seeing this red message here that tells me the agent is still not running, but if I flip over to the Windows 10 PC, which is the name of my computer, and then go back into database configuration you'll see that that red warning message disappears so everything's looking good.
>
> **[2:53](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=173)** Finally, we need to configure the Master Data Services website.
>
> **[2:57](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=177)** Click Web Configuration on left.
>
> **[3:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=180)** Then in the website dropdown menu, choose Default Website and then press Create.
>
> **[3:07](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=187)** I'll accept the suggested default alias and the application pool name.
>
> **[3:11](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=191)** The username and password account should be the same account specified as the service account when the Master Data Services database was created, but you will have to type them both in manually.
>
> **[3:22](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=202)** I used my current Windows user account which was Windows10-PC\Adam.
>
> **[3:29](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=209)** Then I'll type in my password and confirm it.
>
> **[3:36](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=216)** Press the OK button to move on to the next step.
>
> **[3:39](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=219)** Now we need to associate the web application with an MDs database so go ahead and press the select button here.
>
> **[3:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=225)** I'll use the SQL Server instance of my computer and the current user.
>
> **[3:50](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=230)** Press the Connect button here.
>
> **[3:51](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=231)** That'll choose the Master Data Services database that's on our instance, and you can press OK.
>
> **[3:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=236)** That'll create that connection and finally we can press the apply button in the bottom right hand corner.
>
> **[4:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=243)** After a moment, you should get this dialogue box that says it completed successfully.
>
> **[4:07](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=247)** You have the option to launch the web application which I'm going to leave on and press OK.
>
> **[4:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=253)** That should open up your web browser and navigate to the Master Data Services web application.
>
> **[4:19](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=259)** This might take a moment to load the first time so just be patient.
>
> **[4:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=263)** Previous versions of Master Data Services required the Microsoft Silver Light Plugin and Internet Explorer 10 or 11, but those requirements have since been dropped.
>
> **[4:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/configure-master-data-services?u=76281980&t=273)** The web application now uses a standard HTML5 interface and should work on any modern web browser.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** database (13), data (12), [[Microsoft SQL Server|Sql server]] (7), next (7), [[Windows]] (5)
> **Env Vars:** sql (8), html5 (1)
> **Prerequisites:** configure (3), set up (2), you'll need (1), install (1)
> **CLI Commands:** make (3), find (2)
> **UI Navigation:** go to (1), click on (1), dropdown (1), navigate to (1)
> **Warnings:** warning (3)
> **Definitions:** means that (1)
> **Speakers:** - i (1)

#### Deploy a sample MDS model
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=0)** - [Instructor] When you install Master Data Services, it also installs some sample models and data that you can deploy to your Master Data database to better understand the product's features, and capabilities.
>
> **[0:11](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=11)** You can find them by going into the C Drive, into Program Files.
>
> **[0:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=15)** Then Microsoft SQL Server.
>
> **[0:17](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=17)** 160, if you're using SQL Server 2022 or it'll be a lower number if you're on an older version of SQL Server.
>
> **[0:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=23)** I'll just go into the 160 folder.
>
> **[0:25](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=25)** There you'll find a new folder for Master Data Services and inside of there we have a folder for Samples.
>
> **[0:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=31)** Then we'll go into the Packages file and here we have one for product, one for customers and one called chartofaccounts.
>
> **[0:38](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=38)** Note that all of these end in a .pkg file extension.
>
> **[0:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=42)** So these are the three samples that we can work with.
>
> **[0:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=45)** To deploy the sample data, you'll use a command line application, which you can find by going to the Master Data Services folder and then instead of Samples, going into the Configuration folder, then I'll scroll down to the bottom and I'll find the tool right down here.
>
> **[1:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=60)** MDSModelDeploy.
>
> **[1:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=63)** Now, even though this is an executable file you can't run it directly.
>
> **[1:06](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=66)** You need to run it from the command line so I'm going to go down to the search box and do a search for CMD to bring up the Command Prompt application.
>
> **[1:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=74)** Then I need to right-click on it and Run it as Administrator.
>
> **[1:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=78)** I'll choose the option to allow it to make changes to my computer and it'll start it up.
>
> **[1:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=83)** Now we need to navigate to the location of the Master Data Services deployment utility.
>
> **[1:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=88)** I'll use cd C:\Program Files\Microsoft SQL Server
>
> **[1:38](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=98)** \160\Master Data Services and \Configuration.
>
> **[1:46](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=106)** Once you're in that directory you can type MDSModelDeploy, followed by list services.
>
> **[1:55](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=115)** This will bring up some useful information about the service, website, and virtual path of these tools that we have to work with.
>
> **[2:01](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=121)** In our case, we need the name of the service which is MDS1, and we'll make use of this in just a moment.
>
> **[2:07](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=127)** Now we can use MDSModelDeploy to install the product Master Data Model that we saw in the packages file a moment ago.
>
> **[2:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=135)** To do that, we use MDSModelDeploy, followed by deploy new then - package.
>
> **[2:24](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=144)** The path to the pkg file that we want to use in our case is going to be ..\Samples\Packages\product_EN.pkg.
>
> **[2:40](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=160)** Then we need - model followed by the name that I want to give to our new model, and I'm just going to call it Product.
>
> **[2:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=169)** Next, we need - service and the name of the service that we just identified, which is MDS1.
>
> **[2:59](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=179)** Press enter and it'll deploy the package.
>
> **[3:02](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=182)** Once the operation completes successfully and you get returned back to your command prompt you're all done setting everything up.
>
> **[3:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=188)** Let's go ahead and close the command prompt tool as well as our Windows Explorer window.
>
> **[3:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=193)** Now let's go take a look inside of the Master Data Services web app.
>
> **[3:17](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=197)** You can open up your web browser and navigate to localhost/MDS.
>
> **[3:22](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=202)** At the top of the interface you need to pick which model you want to work with.
>
> **[3:26](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=206)** My server only has the single model Product that we just installed, so I'll select that one.
>
> **[3:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=211)** Models are like data containers.
>
> **[3:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=213)** You can think of them like Schema in SQL Server.
>
> **[3:36](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=216)** There can be multiple versions of each model.
>
> **[3:39](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=219)** Usually the latest version contains the most recent data.
>
> **[3:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=222)** This one only has a single version so I'll select that.
>
> **[3:46](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=226)** To take a look inside of the model click the Explorer button below.
>
> **[3:50](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=230)** Here it will work with Entities.
>
> **[3:53](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=233)** Entities are like tables.
>
> **[3:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=234)** They represent a list of data that contain attributes.
>
> **[3:58](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=238)** Right now we're looking at an Entity named Class.
>
> **[4:01](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=241)** This one isn't very interesting, so click on the Entities button up here in the menu and you could choose a different entity in the model.
>
> **[4:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=248)** There's entities for Class, Color, Country, Currency, Product, and so on.
>
> **[4:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=253)** Let's take a look at the Color Entity.
>
> **[4:16](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=256)** Each row inside of the Entity is called a Member.
>
> **[4:19](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=259)** So, we have the Black member, the Silver member the Red member, and so on.
>
> **[4:24](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=264)** Each member then has Attribute columns.
>
> **[4:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=267)** In the case of the Color entities, the only Attribute is Code.
>
> **[4:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=271)** You'll find some other entities with additional attributes.
>
> **[4:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=274)** For instance, let's go back and take a look at the Product entity.
>
> **[4:38](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=278)** This one has many more attributes for each member.
>
> **[4:41](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=281)** In fact, the attributes are grouped into different categories.
>
> **[4:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=285)** Right now we're just looking at the supply chain attributes and those contain things like the Reorder Point or the DaysToManufacture.
>
> **[4:53](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=293)** We have a different collection of attributes underneath Marketing.
>
> **[4:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=296)** This includes, for instance, the ProductLine and I can scroll across over here to the right and see the Manufacturer's Suggested Retail Price and the sale's start date.
>
> **[5:05](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=305)** Next up, we have some attributes under the heading of Inventory.
>
> **[5:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=309)** We can scroll through to see all those different attributes.
>
> **[5:12](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=312)** We also have Packaging attributes, System attributes or I can click on All Attributes.
>
> **[5:17](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=317)** That'll just show me everything in a single table.
>
> **[5:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=320)** I can scroll across and I can see that this is now very wide and it contains all the different columns from all the other categories.
>
> **[5:28](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=328)** When you select an individual member, for instance I'll click on this one that says Headset Ball Bearings, you'll see the details over here on the right.
>
> **[5:36](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=336)** These will allow you to edit the Attribute values in the columns that we see on the left side.
>
> **[5:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=342)** Some of the Attributes are text fields that you can type into if you wanted to edit a value.
>
> **[5:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=345)** For instance, like the Name.
>
> **[5:48](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=348)** Others have a dropdown menu of different valid options.
>
> **[5:51](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=351)** For instance, here we have Color or Class and Style.
>
> **[5:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=354)** These are all dropdowns.
>
> **[5:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=356)** Now, you may realize that these are related to the other entities that we saw in the model so these dropdowns for Color, Class and Style, they correspond to entities Color, Class and Style down here.
>
> **[6:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=369)** So if you wanted to change the color of a product you can use the dropdown menu and that'll give you a list of all different valid values that you can choose from.
>
> **[6:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=378)** This is similar to a data validation list that you might use in an Excel spreadsheet.
>
> **[6:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=383)** So, that's how Master Data Services organizes the data.
>
> **[6:26](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=386)** First, you create a model to contain everything.
>
> **[6:29](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=389)** Then inside of that, you create a number of entities or lists of data, and then inside of each of the entities will be the members or the individual rows of data.
>
> **[6:39](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=399)** Attribute values can be based on the members of other entities in the model in a domain based validation list.
>
> **[6:46](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/deploy-a-sample-mds-model?u=76281980&t=406)** This keeps the information in your master data accurate and consistent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (19), product (8), [[Microsoft SQL Server|Sql server]] (3), prompt (3), [[Microsoft SQL Server]] (2)
> **UI Navigation:** click on (3), navigate to (2), dropdown (2), scroll down (1), right-click (1)
> **Env Vars:** sql (5), mds1 (2), cmd (1), mds (1)
> **CLI Commands:** find (5), make (2), cd (1)
> **Analogies:** for instance (5), similar to (1)
> **Tools:** command prompt (3), command line (2)
> **Definitions:** is an  (1), is called (1)
> **Prerequisites:** install (2)

#### Install the MDS Excel add-in
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=0)** - [Instructor] One of the more interesting features of Master Data Services is that Microsoft includes a plugin that integrates right into Excel.
>
> **[0:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=8)** This allows business end users to view, extend, and update Master Data right from a program that they use every day.
>
> **[0:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=15)** This allows them to recognize and quickly fix errors themselves, rather than have to contact the database administrators in the IT department to coordinate an update.
>
> **[0:26](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=26)** The extension for Excel can be located right from the Master Data Services web application.
>
> **[0:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=31)** If you're still exploring the product entity from the last movie, you can click on the home link in the breadcrumb navigation up in the upper left-hand corner of the screen, or go to the URL LocalHost/MDS.
>
> **[0:44](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=44)** Click on the tile on the right that says Install Master Data Services in Excel.
>
> **[0:49](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=49)** That'll take you right to the download page for the add-in.
>
> **[0:52](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=52)** Let me scroll down on the page a little bit and I'll click the download button.
>
> **[0:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=56)** Then I have two different options.
>
> **[0:57](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=57)** I have the X64 for 64 bit machines or X86 for 32 bit installations of Excel.
>
> **[1:04](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=64)** I'm using a 64 bit installation of Excel, so I'll place a check mark there for that one and press next.
>
> **[1:11](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=71)** That'll go ahead and download the file and I'll choose the option to keep it.
>
> **[1:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=75)** Now, before you finish here, I need to press the back button on my browser to go back to the information page.
>
> **[1:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=80)** Here, I'm going to expand the system requirements.
>
> **[1:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=83)** We'll take a look at one additional detail.
>
> **[1:25](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=85)** We also need to install the Visual Studio 2010 tools for Office in order for everything to work, so I'll go ahead and click on this link.
>
> **[1:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=93)** That'll bring me to another download page, and once again, I'll click the download button here.
>
> **[1:39](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=99)** That'll give me the option to download the file, and once again, I'll just choose to keep it.
>
> **[1:44](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=104)** Once both files are downloaded I'll go ahead and close my browser.
>
> **[1:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=107)** Now I'll open up my download's folder and we can get started with the installation process.
>
> **[1:52](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=112)** We'll start with vstore redist.
>
> **[1:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=114)** This is the Visual Studio tools for Office.
>
> **[1:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=116)** I'll go ahead and double click on that to start up the installer.
>
> **[1:59](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=119)** I'll allow it to make changes to my computer, then I'll choose the option here that says I've read and accept the license term and press install.
>
> **[2:07](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=127)** When it's done, I'll press the finish button and we're done with that one.
>
> **[2:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=130)** Now I can install the Master Data Services Excel add-in.
>
> **[2:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=133)** Let's start up that installer.
>
> **[2:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=134)** This one's a lot simpler.
>
> **[2:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=135)** I'll press the next button, accept the license term, press next, and press install.
>
> **[2:20](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=140)** I'll allow it to make changes to my computer and that's about it.
>
> **[2:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=143)** I'll press finish and we're all done with that.
>
> **[2:26](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/install-the-mds-excel-add-in?u=76281980&t=146)** So now we can open up Excel and take a look around.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (7), data (5), next (3), [[Microsoft Office|Office]] (2), [[Microsoft]] (1)
> **UI Navigation:** click on (4), go to (1), scroll down (1)
> **Prerequisites:** install (5)
> **Env Vars:** url (1), mds (1), x64 (1), x86 (1)
> **CLI Commands:** make (2)
> **Tools:** visual studio (2)
> **Exercise Files:** download the (2)
> **Cross-References:** go back to (1)

#### Update master data in Excel
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=0)** - [Instructor] I've just installed the Master Data Services add-in for Excel, and now it's time to see how it can make it easy to work with your master data right inside of an Excel workbook.
>
> **[0:10](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=10)** We'll start with a new blank workbook.
>
> **[0:12](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=12)** Then on the ribbon tab across the top of the screen, you'll see that we have a new tab for master data.
>
> **[0:17](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=17)** This includes all of the tools that were just installed with the add-on.
>
> **[0:21](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=21)** We have some tools to connect and load data from the Master Data Services database.
>
> **[0:26](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=26)** We can query the data, publish and validate data members, and even build models with entities and attributes.
>
> **[0:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=33)** Let's go over to the left and press the connect button.
>
> **[0:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=37)** Now, we don't have any saved connections yet so we need to make one.
>
> **[0:40](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=40)** I'll press the new button down here at the bottom and I'll give it a description.
>
> **[0:43](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=43)** I'll call it ProductsConnection.
>
> **[0:46](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=46)** The website URL is the same one that you access Master Data Services on the web app, so that'll be [http://localhost/mds](http://localhost/mds).
>
> **[0:58](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=58)** I'll press the okay button and that adds in a new connection.
>
> **[1:01](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=61)** With it selected I'll press the test button just to make sure it's working and it looks good.
>
> **[1:05](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=65)** Good, press okay, and press close.
>
> **[1:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=68)** Once you're connected, you should see the explorer over here on the right hand side of the screen.
>
> **[1:12](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=72)** If that didn't pop up automatically it's toggled on with the show explorer button over here on the top of the ribbon.
>
> **[1:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=78)** You can turn it off and back on again.
>
> **[1:21](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=81)** In the explorer we can choose a model that we want to work with.
>
> **[1:24](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=84)** Let me just expand this a little bit.
>
> **[1:26](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=86)** And in the model dropdown menu we have access to our product model.
>
> **[1:30](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=90)** When you select it, it'll populate with all the different entities inside of the model.
>
> **[1:35](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=95)** I'll double click on the color entity to open it up so that I can work with it.
>
> **[1:40](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=100)** That opens up the entity in a standard Excel spreadsheet that makes it very easy to work with the data.
>
> **[1:47](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=107)** I'll go ahead and dismiss this information window that Excel popped up here, and I can expand the columns, make them a little bit wider.
>
> **[1:53](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=113)** It'll make things easier to read for my different columns.
>
> **[1:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=116)** Now I can make changes to these values.
>
> **[1:58](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=118)** Perhaps I want the one that says multi to read multicolor instead.
>
> **[2:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=123)** I'll select it and then make that change.
>
> **[2:06](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=126)** The cell background color changes to orange which indicates a change needs to be published to the master data database.
>
> **[2:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=133)** I can even add additional members to this entity.
>
> **[2:16](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=136)** Let me come down here and click right below yellow, the last color entity, and I'll type in a new color.
>
> **[2:21](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=141)** How about periwinkle?
>
> **[2:24](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=144)** I'll give it the code PER.
>
> **[2:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=147)** So now that I've made some changes to our master data come up to the ribbon toolbar and press the publish button.
>
> **[2:34](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=154)** Oh, that tells me that an operation failed because a cell is in edit mode.
>
> **[2:38](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=158)** Let me go ahead and press okay to that.
>
> **[2:39](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=159)** Press enter to finish the data entry of the code PER and now I'll press the publish button once again.
>
> **[2:46](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=166)** Now, each of our edits is going to get an annotation or a description of why you're making the change, which could be useful for auditing.
>
> **[2:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=174)** You can either supply a single change annotation using all of the updates here at the very top, or you can give a specific change annotation for each individual edit.
>
> **[3:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=183)** I'll choose that option.
>
> **[3:04](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=184)** Then we can fill in some annotations for each of the changes.
>
> **[3:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=188)** So the multicolor value change, I'll go ahead and say that's because of a marketing meeting.
>
> **[3:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=194)** And the new entry of periwinkle is because it's a new product color for our spring 2023 product line.
>
> **[3:22](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=202)** With those annotations in place, go ahead and press the publish button.
>
> **[3:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=207)** That'll then push the changes up to the master data database and will then be distributed throughout the company.
>
> **[3:33](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=213)** You can also see that those changes are applied to the table here in Excel, and that our new spring color of periwinkle is sorted into all of the other colors that were currently present inside of the entity.
>
> **[3:45](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=225)** So that's an example that only scrapes the surface of what you can do with an Excel add-in for Master Data Services.
>
> **[3:51](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=231)** You can also copy and paste a large number of entity members for use in pivot tables or other visualizations here in Excel.
>
> **[3:59](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=239)** You can use spellcheck and translation tools or anything else that you would typically do in Excel.
>
> **[4:05](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/update-master-data-in-excel?u=76281980&t=245)** Being able to use a familiar spreadsheet application to enter and modify data makes it much easier for the business users with the most hands-on familiarity with the data to be able to make corrections and updates that'll instantly apply across the entire enterprise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (16), [[Microsoft Excel|Excel]] (8), database (3), product (3), web (1)
> **CLI Commands:** make (8)
> **Env Vars:** per (2), url (1)
> **UI Navigation:** dropdown (1), click on (1)
> **URLs:** [http://localhost/mds](http://localhost/mds) (1)
> **Speakers:** - [instructor] (1)


### 8. Consume Data from the Warehouse

[↑ Back to Table of Contents](#table-of-contents)

#### Business intelligence applications
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=0)** - [Instructor] Once you have all of your internal and external data organized, cleansed, and reconfigured into fact and dimension tables in a data warehouse, it's time to actually do something with all of that data.
>
> **[0:13](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=13)** This brings us back to the concept of business intelligence.
>
> **[0:18](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=18)** The purpose of business intelligence is to gain insight by analyzing raw data that can lead to a competitive advantage in the marketplace.
>
> **[0:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=27)** The results of a business intelligence analysis are used to support operational decision making by revealing past trends in the market, as well as predicting future outcomes.
>
> **[0:38](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=38)** This allows decision makers within the enterprise to be able to better position the company to take full advantage of shifts in consumer behavior, efficiencies in manufacturing, or right sizing the workforce.
>
> **[0:51](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=51)** Having a well-structured and complete data warehouse is not ever an end goal by itself.
>
> **[0:58](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=58)** All of that data is worthless if it's not being used for an analysis.
>
> **[1:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=63)** So with that in mind, I'd like to briefly introduce a number of tools that can be used in the next step in your overall business intelligence strategy data analysis.
>
> **[1:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=74)** The first is SQL Server reporting services.
>
> **[1:17](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=77)** Reporting services is an add-on for SQL Server that provides the tools needed to ingest data from a data warehouse using queries and then format that data into customizable reports.
>
> **[1:29](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=89)** These reports can include charts and other visualizations to make it easier to interpret the data and can include customizable controls so that end users can drill into details or zoom out to get a bigger picture.
>
> **[1:42](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=102)** Reports get published to a web portal so that they're accessible to anyone with an internet connection.
>
> **[1:48](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=108)** Reports can be formatted to be printed on paper, or arranged into mobile reports that work well as interactive dashboards on a mobile phone or tablet.
>
> **[1:58](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=118)** You can find out more about reporting services at this URL.
>
> **[2:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=123)** Next is a tool called Power BI and it's similar to reporting services, but it focuses more on interactive dashboards and visualizations than paginated reports.
>
> **[2:14](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=134)** Dashboards can include key performance indicators, interactive charts, maps, and other visualizations that tell the story of your data.
>
> **[2:23](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=143)** Again, these visualizations are available across a variety of devices through a secure internet connection.
>
> **[2:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=151)** Another business intelligence platform that's popular for analyzing information from a data warehouse is Tableau.
>
> **[2:37](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=157)** Tableau tends to be more popular with decision makers that want to be able to develop their own analyses on the fly, rather than simply consume an analysis that was developed by someone in IT and published to a portal.
>
> **[2:51](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=171)** Tableau will help you build fantastic reports that look as good as they function.
>
> **[2:56](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=176)** If you're looking for something simpler that builds on tools that you already use, then you might consider Power Pivot for Excel.
>
> **[3:03](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=183)** This is another Excel add-in that will allow you to bring in data from other SQL servers and create visualizations using the same charts and formulas that you're probably already familiar with.
>
> **[3:15](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=195)** Because Power Pivot creates live links to a SQL Server database, the data can be easily refreshed to get the most current view in your analysis.
>
> **[3:25](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=205)** And finally, I'd like to introduce, SQL Server Analysis Services, or Azure Analysis Services.
>
> **[3:31](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=211)** With this SQL Server add-on, you can convert your two-dimensional data warehouse tables and combine them into multidimensional structures called cubes.
>
> **[3:41](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=221)** This allows an analysis engine to quickly and efficiently identify facts segmented by a number of dimensions by traversing the cube, rather than having to join two dimensional tables together by key fields.
>
> **[3:55](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=235)** These are just a few of the many business intelligence analysis applications that are available.
>
> **[4:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=240)** Each one brings different tools and approaches to the analysis of your data, and many of them are covered with specific courses on LinkedIn Learning.
>
> **[4:09](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/business-intelligence-applications?u=76281980&t=249)** I'd encourage you to do some research and identify the best option for your needs in order to fully take advantage of your data warehouse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (18), [[Business Intelligence (BI)|Business intelligence]] (6), [[Microsoft SQL Server|Sql server]] (5), [[Dashboards]] (3), power (3)
> **Env Vars:** sql (6), url (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** picture (1), similar to (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/next-steps?u=76281980&t=0)** - [Adam] I want to thank you for joining me as we explore data warehouses in SQL Server.
>
> **[0:06](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/next-steps?u=76281980&t=6)** Data warehouses are only one component of a larger business intelligence system so I'd like to leave you with a few suggestions on courses that you should consider adding to your personal learning watch list, and these will help give more context to the entire process.
>
> **[0:21](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/next-steps?u=76281980&t=21)** First, to move data into the warehouse, you'll need to be familiar with [[SQL Server Integration Services]].
>
> **[0:27](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/next-steps?u=76281980&t=27)** This is the component of SQL Server that you'll use to create ETL processes that'll move information out of individual transactional databases and transform it in preparation to load into the warehouse.
>
> **[0:40](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/next-steps?u=76281980&t=40)** For more information on that component, check out my course [[SQL Server Integration Services]].
>
> **[0:46](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/next-steps?u=76281980&t=46)** Then, once your data warehouse is loaded with lots of great information, you need to be able to analyze it and prepare reports.
>
> **[0:54](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/next-steps?u=76281980&t=54)** For that, you could turn to my course on [[SQL Server- Reporting Services]] to format principal and mobile reports.
>
> **[1:01](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/next-steps?u=76281980&t=61)** Or dive into [[Power Bi Essential Training]] to learn how to build interactive visualizations.
>
> **[1:08](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/next-steps?u=76281980&t=68)** Finally, you can find out more about cloud-hosted data warehouse options with [[Microsoft Azure Synapse for Developers]].
>
> **[1:16](https://www.linkedin.com/learning/implementing-a-data-warehouse-with-sql-server-2022/next-steps?u=76281980&t=76)** Until next time, I've been Adam Wilbert, and I hope you have a great day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[Microsoft SQL Server|Sql server]] (5), [[Business Intelligence (BI)|Business intelligence]] (1), etl (1), [[Databases]] (1)
> **Env Vars:** sql (5), etl (1)
> **CLI Commands:** find (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [adam] (1)


## Instructor

- [[Adam Wilbert]]

## Resources

- Exercise files available

## Skills Covered

- Data Warehousing
- Microsoft SQL Server

## Path Context

### In [[Advance Your MS SQL Server Skills]]
← [[Automating SQL Server with dbatools]] | **5 of 9** | [[SQL Server 2022 Administration]] →

## Appears In

- [[Advance Your MS SQL Server Skills]]

## Related Courses

_Courses sharing skills:_

- [[SQL Server Fundamentals- Master Basic Query Techniques]] — Microsoft SQL Server
- [[SQL Server- Reporting Services]] — Microsoft SQL Server
- [[SQL Server Containerization- Modern Deployment Strategies for Data-Driven Organizations]] — Microsoft SQL Server
- [[SQL Server 2022 Administration]] — Microsoft SQL Server
- [[Automating SQL Server with dbatools]] — Microsoft SQL Server

---

[↑ Back to top](#)