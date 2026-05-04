---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-snowflakedb
url: "https://www.linkedin.com/learning/learning-snowflakedb"
duration_minutes: 102
duration: 1h 42m
level: Beginner
updated: 2/6/2025
learners: 30353
skills:
  - Databases
  - Snowflake
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQFBJUUwGNne4A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1648064590188?e=2147483647&amp;v=beta&amp;t=vZiBoz6XQ8AiNotis8LsPXUVoHtmPJl3kKrRb296svI"
linkedin_topic: Cloud Computing
learning_paths:
  - '[Explore a Career in Data Engineering](../../Paths/Cloud%20Computing/Learning%20Paths/Explore%20a%20Career%20in%20Data%20Engineering.md)'
prev_courses:
  - '[Introduction to Data Warehouses](../Data%20Science/Introduction%20to%20Data%20Warehouses.md)'
next_courses:
  - '[PySpark Essential Training- Introduction to Building Data Pipelines](../Data%20Science/PySpark%20Essential%20Training-%20Introduction%20to%20Building%20Data%20Pipelines.md)'
path_nav: '[{"path":"Explore a Career in Data Engineering","position":4,"total":7,"prev":"Introduction to Data Warehouses","next":"PySpark Essential Training- Introduction to Building Data Pipelines"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/data-science
  - topic/database-management
  - topic/software-development
  - skill/databases
  - skill/snowflake
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Learning%20SnowflakeDB.md)

![Learning SnowflakeDB](https://media.licdn.com/dms/image/v2/C4D0DAQFBJUUwGNne4A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1648064590188?e=2147483647&amp;v=beta&amp;t=vZiBoz6XQ8AiNotis8LsPXUVoHtmPJl3kKrRb296svI)

# Learning SnowflakeDB

> Are you in the process of trying to scale your business but bumping up against storage and capacity limits? Rather than shelling out more resources for expensive hardware and software licenses, consider Snowflake, the popular data warehouse and data management platform with unique data exchange capabilities for your business. Join instructor Lynn Langit and learn about how to use Snowflake—the pow

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb) | 1h 42m | Beginner | 30K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Driving maximum results with a flexible data cloud](#driving-maximum-results-with-a-flexible-data-cloud)
  - [What you should know](#what-you-should-know)
  - [Use cloud services](#use-cloud-services)
- [**1. SnowflakeDB Overview**](#1-snowflakedb-overview) (6 videos)
  - [Meet SnowflakeDB](#meet-snowflakedb)
  - [Understand SnowflakeDB data platform](#understand-snowflakedb-data-platform)
  - [Compare cloud data warehouse solutions](#compare-cloud-data-warehouse-solutions)
  - [Review SnowflakeDB architecture](#review-snowflakedb-architecture)
  - [Use SnowflakeDB cloud tools](#use-snowflakedb-cloud-tools)
  - [Use Snowpark Python worksheets](#use-snowpark-python-worksheets)
- [**2. SnowflakeDB Data Storage and Files**](#2-snowflakedb-data-storage-and-files) (6 videos)
  - [See SnowflakeDB queries](#see-snowflakedb-queries)
  - [Learn SnowflakeDB file ingest](#learn-snowflakedb-file-ingest)
  - [Load SnowflakeDB using web UI](#load-snowflakedb-using-web-ui)
  - [Load SnowflakeDB from S3](#load-snowflakedb-from-s3)
  - [Load SnowflakeDB using Snowpipe streams](#load-snowflakedb-using-snowpipe-streams)
  - [Scenario: Import files and data into SnowflakeDB](#scenario-import-files-and-data-into-snowflakedb)
- [**3. SnowflakeDB Query Processing**](#3-snowflakedb-query-processing) (5 videos)
  - [Use SnowflakeDB for SQL queries](#use-snowflakedb-for-sql-queries)
  - [Understand SnowflakeDB dashboards](#understand-snowflakedb-dashboards)
  - [Create and use user-defined functions](#create-and-use-user-defined-functions)
  - [Optimize virtual warehouses](#optimize-virtual-warehouses)
  - [Scenario: Optimize SnowflakeDB compute](#scenario-optimize-snowflakedb-compute)
- [**4. SnowflakeDB Data Services**](#4-snowflakedb-data-services) (5 videos)
  - [Understand SnowflakeDB account usage](#understand-snowflakedb-account-usage)
  - [Learn SnowflakeDB authentication and authorization](#learn-snowflakedb-authentication-and-authorization)
  - [Review Snowflake DB sessions](#review-snowflake-db-sessions)
  - [Implement SnowflakeDB policies](#implement-snowflakedb-policies)
  - [Scenario: Secure data on SnowflakeDB](#scenario-secure-data-on-snowflakedb)
- [**5. SnowflakeDB Partners and Architectures**](#5-snowflakedb-partners-and-architectures) (4 videos)
  - [Learn the Snowflake data life cycle](#learn-the-snowflake-data-life-cycle)
  - [Use SnowflakeDB Data Marketplace](#use-snowflakedb-data-marketplace)
  - [Use SnowflakeDB Partner Connect](#use-snowflakedb-partner-connect)
  - [Scenario: Design and build solutions with SnowflakeDB](#scenario-design-and-build-solutions-with-snowflakedb)
- [**Conclusion**](#conclusion) (1 videos)
  - [Keep learning](#keep-learning)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Driving maximum results with a flexible data cloud](https://www.linkedin.com/learning/learning-snowflakedb/driving-maximum-results-with-a-flexible-data-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/driving-maximum-results-with-a-flexible-data-cloud?u=76281980&t=0)** - Are you struggling with running out of capacity for storage and compute on your existing data warehouse? Are you worried about buying expensive [Hardware](../../Topics/Hardware.md) and software licenses in order to expand your capacity? Have you heard the terms Data Lake or Lake House and wondered how and when they might apply to your data situation? [Snowflake](../../Skills/Data%20Science/Snowflake.md) DB is a fully managed cloud native [software as a service](../../Glossary/Concept/SaaS.md) data platform. We'll explore how you can get maximum results from this flexible data cloud by looking at managing and configuring the different data planes, whether a storage, compute through the virtual warehouse, or services. I'm Lynn Langit. We have lots to cover in this course, so let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (1), [Snowflake](../../Skills/Data%20Science/Snowflake.md) (1)
> **Definitions:** is a  (1)
> **Speakers:** - are (1)

#### [What you should know](https://www.linkedin.com/learning/learning-snowflakedb/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/what-you-should-know?u=76281980&t=0)** - In order to get the most out of this course, it'll be helpful if you have a background with [Databases](../../Skills/Software%20Development/Databases.md), specifically if you've done production work with [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) such as [MySQL](../../Skills/Software%20Development/MySQL.md), [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md), Oracle or the like. In particular, we'll be using the [SQL](../../Skills/Data%20Science/SQL.md) query language to demonstrate the capabilities of [Snowflake](../../Skills/Data%20Science/Snowflake.md) DB during this course. In addition, if you have some background with [Data Warehousing](../../Skills/Software%20Development/Data%20Warehousing.md) technologies, and it could be on your relational database or it could be a dedicated data warehouse such as Teradata, Oracle Data Warehouse, SQL Server Analysis Services, something like that. In particular, we'll be looking at aggregate SQL queries for reporting, so queries that add up and produce aggregate results using SQL syntax like average, count, min, max. In addition to that, if you have some familiarity with database administrator or data concepts, which includes security of data, modeling of data for tables and data pipelining, you'll get more out of this course. In addition to the other things that I mentioned, if you have some kind of production experience with one or more of the major cloud vendors, which includes [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) or [Google Cloud Platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md), you will benefit more from this course. As mentioned, data warehouse concepts will be a core part of this course, cause Snowflake DB is of course a cloud-native data warehouse and more. In addition, if you've started working with any of the data lake concepts, we will be discussing that in this course as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (3), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (2), [Snowflake](../../Skills/Data%20Science/Snowflake.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1)
> **Env Vars:** sql (5)
> **Analogies:** such as (2)
> **CLI Commands:** mysql (1)
> **Speakers:** - in (1)

#### [Use cloud services](https://www.linkedin.com/learning/learning-snowflakedb/use-cloud-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/use-cloud-services?u=76281980&t=0)** - [Instructor] If you wish to follow along when I'm demonstrating working with [Snowflake](../../Skills/Data%20Science/Snowflake.md) DB during this course, do be aware that it is a cloud-only service. There is no local way to run it. Now, fortunately, Snowflake DB does offer a free trial, which we'll be looking at. However, if you're not using that or you overcome that limit, then what you're going to want to do is to make sure that you're either staying within the free tier. If you're using a purely live account not a trial account, then you're going to want to verify that any of the compute resources are actually turned off after you're using them. You're going to want to set budget alerts, which we'll see how to do that in the Snowflake DB ecosystem through the course. And you're going to want to set multifactor authentication on the root account, and any other key accounts. I really recommend if possible, and snowflake DB actually does make this easy with the 30 day free trial edition, that you set up a dedicated account just for learning even if you're are using snowflake in production. Just to keep it separated, and to put a hard boundary to contain costs, and it's really very important that you pay attention to this so that you don't incur unexpected charges while you're learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (5)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 1. SnowflakeDB Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [Meet SnowflakeDB](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=0)** - [Instructor] As we get started learning about [Snowflake](../../Skills/Data%20Science/Snowflake.md) DB, I think it's helpful to have a concise definition because it kind of is so unique in the market that when you are sharing your learning with other people, it can be helpful to have one-sentence definition. So here's the way I would describe it. Snowflake DB is a cloud-native [SaaS](../../Glossary/Concept/SaaS.md) data warehouse and platform. So let's break that down, and let's start with characteristics of data platforms in general. And then as we go through this course, we'll relate them to capabilities of Snowflake DB. Data platforms allow you to store files, and data in tables. They allow you to query that data including sometimes using machine learning. They allow you to transform the data to input the data sometimes with streams always with batches or individually to output that data, and sometimes to visualize it. Platforms are also designed for different types of use cases, and those are represented in the diagram by the [SQL](../../Skills/Data%20Science/SQL.md) analysts, ETL in processing, [Data Science](../../Topics/Data%20Science.md), and BI and analytics tools. Now in terms of cloud-native, Snowflake is very unique in the original niche that it serviced, [Data Warehousing](../../Skills/Software%20Development/Data%20Warehousing.md). It was the first cloud-only data warehouse that could be run on multiple clouds. Originally, it was runnable on [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md). They have subsequently added
>
> **[1:33](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=93)** the capability to run on GCP or [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md). And this was a recent little poll I did on Twitter. And it reflects the fact that initially it was Amazon-only, but I do see more and more usage on other vendor clouds as Snowflake DB has added that capability. If you are just learning because they started on AWS, I would recommend unless you have a compelling reason not to that you use the trial edition on AWS. Almost all the features will be there first, and then they're added the other clouds as the team makes them available. So if we now combine the terms cloud-native with SaaS or Software-as-a-Service, what does that mean in terms of Snowflake DB? Well, that means that Snowflake DB provides a web interface and an API or an application programming interface to connect serverless cloud-based scalable services, and that is a definition of cloud-native. Also very importantly, it's super fast getting started. There's no install. You're simply working with an endpoint. Now, you can do that programmatically or with scripts but they also present actually, not one but two rich web Uis that a lot of my customers will use. So one of the compelling aspects of Snowflake DB is when they say zero install they mean zero install. You simply connect, and you start working with their data services. Now snowflake DB was born
>
> **[3:05](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=185)** as a cloud native SaaS data warehouse. Data warehouses are [Databases](../../Skills/Software%20Development/Databases.md). So they host tables that are designed for analytics and reports. So they're designed for fast-reading. They use columnar storage. So column-based storage, which will be drilling into in the table structure rather than row-based storage. And they're designed to serve aggregate SQL queries. So sums, means, max, they're designed for huge volumes of data. And originally, data warehousing was based on a type of modeling called a Star schema. And if you extend the sides of the star, it actually is a snowflake. So you might think, well, that's where they got the name. Actually, it's not. I mean, maybe partially, but if you look up in Wikipedia where the name for Snowflake DB came from, it's because the three co-founders loved winter sports. So they loved snow skiing but I think it has something to do with the schema too. I don't know, I haven't asked them, but I think so. Now, in addition to the resources I'm presenting in this course, as with all of my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning courses. I have created a companion [GitHub](../../Skills/Software%20Development/GitHub.md) repository, which I will be continuing to work on while I work on this course, and subsequently because I do work with Snowflake DB in production. One aspect of this is that is dynamic. So it will always be updated as I learn more. And another aspect is, I like to share resources that I use. So links, scripts and also it's on GitHub. So if you want to do pull requests
>
> **[4:37](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=277)** or something and add your own information. So let me show you what that looks like. So here we are out on GitHub, and it's Learn Snowflake DB and you can see that the folders follow the sections of this course. So anytime I mention a URL or a website or tutorial, the link will be here. So it's a convenient way for you to grab links. So some of the initial links that we'll be talking about is the pricing, the additions and all that stuff is here. And it's linked to Snowflake's documentation because it's dynamic, and I want you to have current information. It is interesting that as of this recording, depends on who you ask, but Snowflake DB has a very large amount of the cloud data warehouse market. This particular report says 44%. So it's one of the reasons I'm making this course because it is a very compelling set of services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (15), [SaaS](../../Glossary/Concept/SaaS.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Data Warehousing](../../Skills/Software%20Development/Data%20Warehousing.md) (2)
> **Env Vars:** sql (2), aws (2), etl (1), gcp (1), api (1)
> **Definitions:** is a  (4), means that (1)
> **Prerequisites:** install (3), getting started (1)
> **Tools:** github (3)
> **CLI Commands:** aws (2)
> **Speakers:** - [instructor] (1)

#### [Understand SnowflakeDB data platform](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=0)** - [Narrator] So as we learn about [Snowflake](../../Skills/Data%20Science/Snowflake.md)'s capabilities, we need to think about data platforms and then understand what features are available in Snowflake DB, so we can understand if it's a fit for our use cases. So platforms in general will have services that work as I say before and after you are actually having the data in the platform, and this is often expressed as some kind of a pipeline. So data platforms will have input connectors, and Snowflake has these, they'll have streaming capabilities, output connectors, and visualization. So, Snowflake has strong offerings across all these different vectors which makes it a compelling choice for end to end data solutions. Now, within Snowflake itself in addition to a highly optimized storage and [SQL](../../Skills/Data%20Science/SQL.md) engine there are additional capabilities that make it compelling. These include user defined functions, very rich [Metadata](../../Skills/Web%20Development/Metadata.md), and as of this recording they have started to integrate machine learning through capabilities that allow the use of data frames from [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md). And this is an area that I'm really watching, and it's very interesting set of developments. It's early as of this recording, but again Snowflake DB team has a history of introducing features and quickly optimizing them. So, interesting feature set that they're working on. Now, what that looks like on Snowflake we'll just pull aside from their architecture to discuss. Their ecosystem supports a wide variety of data sources.
>
> **[1:34](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=94)** So, OLTP or transactional data sources, enterprise applications, third-party web, and log data. They're particularly strong, it's often the format of [JSON](../../Skills/Web%20Development/JSON.md). It's called unstructured or file based data, but they have support for other file formats too, CSV, XML, others, but JSON in particular is a particularly strong point in terms of ingest and query. [IoT](../../Glossary/Concept/IoT.md) scenarios which is again usually event or message based. And they support traditional ETL, extract, transform, and load via pipelining and also streaming. So they've got good feature set on the ingest side. Of course they run on your cloud of choice which is a very compelling part of their offering, and then their core engine itself is highly flexible. It supports data warehouse, data lake which we'll dive into in a subsequent movie, [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md), exchange, applications, and as I just mentioned, starting to get into [Data Science](../../Topics/Data%20Science.md). Data consumers, again the output they have a marketplace for monetization which we'll be looking at in this course or just sharing data. If it's public data, for example, health data, COVID data, we're going to look at operational reporting, ad hoc analysis. They have great partner story there and [Real-Time](../../Skills/Database%20Management/Real-Time.md) analytics. So, the end-to-end story is part of the value prop of Snowflake. What comes in and what goes out and how you connect to build those pipelines. And it is something that is important to understand when you're looking at Snowflake ecosystem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (9), [JSON](../../Skills/Web%20Development/JSON.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [Apache Spark](../../Skills/Data%20Science/Apache%20Spark.md) (1)
> **Env Vars:** json (2), sql (1), oltp (1), csv (1), xml (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1), apache (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Compare cloud data warehouse solutions](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=0)** - [Instructor] Let's define some terms as we're understanding the capabilities of [Snowflake](../../Skills/Data%20Science/Snowflake.md) DB. So for a data warehouse and data lake. Data warehouse accepts structured data which is stored in tables. Again, the underlying storage is stored in columns which we'll look at in the storage section rather than row for aggregate purposes. The schema is used when you read the data rather than when you write it in. When you write it in, that would be for an operational OLTP, or transactional workload, which is not something that Snowflake DB is designed for. And it's designed for a huge volume of data. A data lake can work with [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md), usually files. It's stored in object storage. And in our case, 'cause we're cloud native, that would be buckets. Again, it's schema on read. And the idea here is massive volume. So where this comes into play is for customer scenarios that have terabytes and petabytes and even exabytes of data. And I actually, as a cloud architect, run into this with my genomic research customers. As, you know, we're storing more and more DNA and RNA information for health informatics. The amount of data warrants use of either a pure data lake or a warehouse in combination with a data lake. There are other industries, but this is just an example from a use case that I'm involved with. Now, a term that you'll hear among the various vendors, Snowflake DB and some of their competitors, is this idea of a data lake and a data warehouse. So they call it a data lake house.
>
> **[1:35](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=95)** It makes the features of a data warehouse available in a data lake. And the idea is flexible cost of storage. So the old time versus money. So if you have a massive amount of information that's file based that you store that in a lake to reduce costs. And if you have other information that is structured, you store that in a data warehouse. So we will be discussing aspects of that in this course. And that is really an emerging area in the industry where you have the flexibility across your data platform to work with this lake house kind of architecture. So now that we've defined these terms, common question I get from customers is what should I use Snowflake DB for, which workloads, and what should I not use it for? And the summary of this is that you want to use Snowflake DB for reading and it should be in cloud native scenarios. There is no on-prem version. So if you have some sort of mixed scenario where you have something on-prem and something in cloud, Snowflake DB would not be for that. But it is additionally for reading. So ad hoc reads, data warehouse reads, and I explain that aggregate [SQL](../../Skills/Data%20Science/SQL.md) queries or data lake reads, which is SQL on files. It is not for online transactional. It does not support transactions so it's not your working database. That would be a [SQL server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md), Oracle, [MySQL](../../Skills/Software%20Development/MySQL.md), something like that. And although you can define constraints, this is a very important point, such as primary keys and uniques, they're not enforced.
>
> **[3:06](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=186)** It's basically just informational. You would have to build some mechanism to enforce them with the exception of not null. So it's not what I would say, a hot or a working database. It is a [Data Warehousing](../../Skills/Software%20Development/Data%20Warehousing.md) analytics solution. Now that being said, Snowflake DB is, as you'll remember, [SaaS](../../Glossary/Concept/SaaS.md), fully managed. And it has a number of important features that make it compelling. And I'm really just picking my favorite five or six here. I've seen trainings and information that have 15 Snowflake features, 25 Snowflake features. When I say a lot, I mean a lot. And we'll be diving into these important features in this course. So virtual and multicluster warehouses, which allows you to build to the millisecond. Time travel and zero-copy cloning, which allows you to go to a point in time and recover, so you don't lose data. And zero-copy cloning allows you to do things, like make dev-test environments without incurring storage costs. [Data Sharing](../../Skills/Database%20Management/Data%20Sharing.md) and marketplace allows you to share data and monetize data. High availability via across-cloud replication. Granular security and automatic encryption and strong support for [JSON](../../Skills/Web%20Development/JSON.md) data. Very, very strong. It's a really key feature. And again, there's many other important features. These are just ones that I've had customers get great value from. Now, this is a multi-billion dollar industry. So Snowflake DB has lots of competition. It's kind of interesting that, you know, it runs on all the clouds but the cloud vendors also have their own cloud-based data warehouses.
>
> **[4:40](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=280)** Amazon Redshift was first in market and so it has first mover advantage. BigQuery was more of the ad hoc workloads and then added the data warehousing. So it kind of went the other way but it's always been serverless. So that's interesting 'cause Redshift is only relatively recently added serverless capability. I'm not as familiar with [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Synapse, but it's the thing that's out there on Azure. And then for Spark workloads, we have databricks. That is really a Spark machine learning first, and they're adding a lot of data platform capabilities. So it's a really hot competitive market, which makes good for us basically. It's good for the customers. And I will highlight I have the most expert with Redshift and BigQuery in the data warehousing space. I've done a lot of work with Spark, but I'm not going to focus too much in this course on machine learning. I'll focus more on differences between Redshift and BigQuery 'cause I think that that's more useful in thinking about when Snowflake DB is best fit for your particular use cases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (11), [Data Warehousing](../../Skills/Software%20Development/Data%20Warehousing.md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md) (1)
> **Env Vars:** sql (3), oltp (1), dna (1), rna (1), json (1)
> **CLI Commands:** make (2), mysql (1)
> **Definitions:** is a  (3)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Review SnowflakeDB architecture](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980&t=0)** - [Instructor] At its core, the architecture of SnowflakeDB is relatively unique in that it completely separates the different control planes for maximum [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md), manageability, and usability, and it really reflects in the elegance of the product. We'll be drilling into this in the different sections of this course, but to get us started, [Data Storage](../../Skills/Data%20Science/Data%20Storage.md), which of course, because we're cloud native will be object store, so for example, if you run on AWS, it'd be S3, if you run on GCP, that would be [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) Storage, [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) would be Azure Blob Storage. It is completely separated from query processing which are virtual warehouses, or you can think of them as clusters of [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md), which again, you manage at the level of paying for compute time at the millisecond billing level, you don't deal with machines, or operating systems, or patching, or any of that stuff. And then up above that, you have a very important set of services that are basically continually being updated, and enhanced, and moving a lot of the stuff that had to be done manually before modern architectures like this were available, so infrastructure security optimization, and then we have authentication and access at the top layer. So this disconnected architecture when used correctly, and that's kind of a key aspect in why you would want to participate in a course like this, because it is so new to have this actually physically separated. You can actually get a really good total cost of ownership, and speaking of TCO,
>
> **[1:33](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980&t=93)** the areas that I think are most compelling in terms of [Snowflake](../../Skills/Data%20Science/Snowflake.md) for TCO is, starting on the left side here, you have one platform, one copy of data, and many workloads. You can literally spin up your query layer while you've got another compute layer doing ETL. So you can actually be loading while you are computing against it. Now, of course obviously, that might not make business sense, but the fact that you can do that by just simply spinning up another service layer is really powerful. It gives you almost unlimited performance and scale, but again, you need to be able to manage that and understand the cost associated with it and how to manage a compute layer that can be scaled up and scaled down nearly instantly, because that is a pretty new paradigm in the world of [Data Warehousing](../../Skills/Software%20Development/Data%20Warehousing.md). One of the other value prop pillars of Snowflake is the near zero maintenance, and again, I find this to be quite compelling when you compare to something that's server based, Redshift for example, where you're going to have to be aware of the version of the engine and all this kind of stuff, and you don't have to in Snowflake. Again, it's more similar to [Google](../../Glossary/Service/Google.md)'s BigQuery, you just work with the engine and the vendor takes care of all the maintenance. Another really important and compelling aspect is the depth to which the Snowflake team has created secure by default, so everything is encrypted by default
>
> **[3:06](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980&t=186)** and the ability to set up appropriate security. Many different capabilities, role-based access controls, security, very granular really just what the customer needs. I find actually that the security storing in Snowflake is the best that I have seen in any cloud-based data warehouse, and that is an nontrivial because usability of security results in correctly implemented security, and of course, this is your production data, so if it's set up incorrectly in terms of security, you have all kinds of risk to the enterprise. So, you know, there's lots more, like I said when I was talking about features, the fact that this platform is fully managed is the value prop. Now on the other side of that, the concern that I will hear from customers is the cost, however, if it is run correctly and importantly, the scaling of the compute layer, it is a comparable cost to the other platforms out there. So there is not really a learning curve, it's just a paradigm shift in this fact that Snowflake literally is separate pieces. The data storage is separate from the compute, is separate from the services, and really getting your head around that is not super difficult, it just requires, especially if you've had servers on prem, it's a different way of working. So, you know, going through a course like this and or some of the Snowflake resources are well worth the time and money, because if you think of it in terms of servers you have to manage
>
> **[4:38](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980&t=278)** you're probably not going to get the best TCO out of Snowflake, you need to understand how to use it as a cloud-native [SaaS](../../Glossary/Concept/SaaS.md) data warehouse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (8), [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) (2), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1)
> **Env Vars:** tco (3), aws (1), gcp (1), etl (1)
> **CLI Commands:** find (2), aws (1), make (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** for example (2), similar to (1)
> **Prerequisites:** set up (2)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Use SnowflakeDB cloud tools](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=0)** - [Instructor] So to get us started actually working with [Snowflake](../../Skills/Data%20Science/Snowflake.md) DB, we need to understand what tools we can use. For this course, I'm going to be using mostly the web UI or the console. Now, as I record this course there are two different consoles. So we'll be switching back and forth between the consoles, and I believe that that is done because it looks like Snowflake DB is adding more capabilities around those edge cases, the ingest and the visualization and all that, like coming in and going out of the engine. But you'll see what I mean when I show you the console here in just a minute or the consoles. There is a command line interface it's called SnowSQL. It's [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)-based, and that's for scripting. As with any cloud service in production, you would want to use the web UI when you are learning but you want to script, and have all of your [SQL](../../Skills/Data%20Science/SQL.md) scripts and all of your ETL processes checked into source control, when you're in production. There is also Snowpipe, which supports streaming ingest. There are drivers and [Software Development](../../Topics/Software%20Development.md) kits for of the major languages such as you know [Java](../../Skills/Software%20Development/Java.md) and Go, and so on and so forth. There are also Snowpark APIs currently for AWS only. I'm sure it'll be for the other clouds shortly. And then there are a number of partner connections. We may take a look at some of those. Because again, from the real-world, that's something that I actually do quite frequently but we'll be mostly in the web UI console because of the time for this course. Although in the real world, you'd probably be using SnowSQL quite a lot as well. Now for you to get started,
>
> **[1:33](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=93)** I've already done this step. I really recommend that you set up a dedicated account, and Snowflake DB has a 30 day free trial, and this is what the sign up screen looks like. You don't have to give 'em a credit card or anything. It's $400 US in credits. At the end of 30 days, it does shut off though automatically. So you can't do you know anything other than learning. I do recommend that you select the enterprise even though the credits cost a little bit more because you can see some of the features that I think are compelling. Some things I mentioned, time, travel, multi cluster warehouses and materialized views. I don't think that you really need the business critical for learning, unless you want to try that out. Again, I recommend that you try on Amazon because all the features are there first, at least of the time of this recording. But again, I will tell you that this will be shut off after 30 days. You can upgrade it by giving them a credit card. But if you do that, make sure you put controls on. So that being said, let's take a quick look. I've already signed up, and you do get sample database by default in this free trial addition, which is handy 'cuz you can just jump in and start looking at the sample [Databases](../../Skills/Software%20Development/Databases.md). Actually there's several. In addition of that, I've also added some other sample data. So yours might not look exactly like mine. So here we are in the main Snowflake DB consults called I think the Legacy Consult, which is a little bit strange, and you can see that I am in the databases section, and I have the Snowflake sample data. I have snowflake data, and then I just pulled in this COVID-19 data,
>
> **[3:06](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=186)** which I'll show you how to do in a subsequent movie. So you probably wouldn't have that. And then you have various capabilities here. So shares, data, marketplace, warehouses. So on and so forth. And you can see that I am the account admin. You can see this is running on [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) in US East. Now, we have this icon for Snow site, and I've already clicked it but basically it's relatively new. So they're saying here we've added new features not available in classic including full account search. SQL auto complete. Chart visualization, usage [Dashboards](../../Skills/Data%20Science/Dashboards.md) and more. So I'm going to record showing both interfaces. I don't know. I don't work for Snowflake DB if this is what's eventually going to become the default, but I'm just going to switch back and forth. So here we can see that we are in US East in Amazon Web Services. We'll have enterprise. Here we can see my credentials, and our objects are listed here, and they're a little bit different. And we can switch back and forth between the classic console here. One thing to note, is we start with worksheets here, which are SQL statements. And on the classic console, we start with databases, which is your storage area. So it's kind of interesting, the switch there. Worksheets would be on the query or the compute layer, which would be on you know worksheets here, whereas worksheets here is what it starts with and the data is in here. So it's just a slightly different, but I mean, this is the interface that's presented. So this is what we're going to be working
>
> **[4:38](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=278)** with throughout this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (7), [SQL](../../Skills/Data%20Science/SQL.md) (3), [Databases](../../Skills/Software%20Development/Databases.md) (3), [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** sql (3), etl (1), aws (1), covid (1)
> **CLI Commands:** python (1), aws (1), make (1)
> **Definitions:** is a  (2)
> **Tools:** command line (1)
> **UI Navigation:** select the (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)

#### [Use Snowpark Python worksheets](https://www.linkedin.com/learning/learning-snowflakedb/use-snowpark-python-worksheet?u=76281980)


### 2. SnowflakeDB Data Storage and Files

[↑ Back to Table of Contents](#table-of-contents)

#### [See SnowflakeDB queries](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=0)** - [Instructor] We've learned that SnowflakeDB separates the control planes for maximum control and [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md). And of course, in a database, you have to have data. So in order to understand this, we're going to actually just explore with some of the sample data first and then learn how to load data into our SnowflakeDB free trial instance. Before we do that though, we need to review the object hierarchy. So the way SnowflakeDB works is tables belong to schemas. Schemas are a logical grouping of database objects, tables, views, et cetera. Each schema belongs to a single database. So schema belongs to a database which belongs to an account. At the level of an account, you have a number of objects, user, role, warehouse, resource monitor, integration, and of course database. So you can think of schema as the glue that connects the account level objects to the table and subsequent level objects. So external table view, stored procedure, so on and so forth. So then I think this becomes clearer when we actually look at the WebUI so let's do that now. So I'm in the classic UI in the worksheets view and I have the trial edition that has the sample data and then I just retrieved this other data which you would not see unless you retrieve that and we'll see that in a subsequent movie. So in the [Snowflake](../../Skills/Data%20Science/Snowflake.md) sample data here, you can see if I pass my mouse over this and I click on the three dots, I can view details about it, and I can see information about the various schemas
>
> **[1:35](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=95)** that are associated here. So if I drill in, you can see that I have a number of different schemas with sample data and if just go into this first one, you can see that for this schema, I have associated tables and other objects. I don't have any views or anything for this particular one, but I could. So now, if I want to look at this schema and I want to view details of it, then it's giving me an error because I don't own this schema. This is provided by SnowflakeDB. So I can't really look at that, but if I go down to the level of the table, for example, and if I look at something that is going to be a big table here like store sales, you can see that that's a 10 terabyte table and then if I drill in here, going to have to actually adjust the resolution a little bit, so I can do that. Then I preview the data. I'll adjust that bigger so you guys can see. And you can see that I have the data preview. Of course, this is a query window, so I could write a query. So if I wanted to work with another table, I'll just take a smaller one here, and if I wanted to see the place names in [SQL](../../Skills/Data%20Science/SQL.md), that would populate the name and you can see the object hierarchy there. So if I wanted to just get all the info from this, select star from this table and then I would just run this query and then that's going to execute my first query. Now, how does this compare to the other interface, Snowsight? Let's go ahead and take a look at that. And what I've done here is I've just preloaded a query
>
> **[3:09](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=189)** just for the sake of time and I ran this query and here's the results. Now, this is really interesting because you can see, let me bring this back up again, I just get this off, that we have this information here that allows us to understand more about the query and about the information. You can see, it tells us the types, this is kind of [Tableau](../../Skills/Data%20Science/Tableau.md)-like, the visual interfaces so that you can understand the data. It's more of an analytics kind of a view. And you can also see we have the ability to chart which is really nice and we have the different chart types. So again, this is more of an analytics kind of a view here but we still do have the same objects, you know, 'cause if we go into data and we go to the sample data, you can see if we go into here, we have tables. And again, if we go to that same store table, the table details will come up in just a minute here. Then we have the columns, we have the data preview and let's see if this is up yet. I find that this takes longer. I think this is a newer interface. It will render, but it's not as like, instantaneous as the other interface. So it's interesting, these two different interfaces, these two different WebUIs. Also of course you see information about the table up on the top here. But you can see the different sort of focus area in terms of the visual output of the worksheets. I'm just going to go back to that while we're waiting. What I mean by that is the detail here and the ability to chart versus the more traditional view here.
>
> **[4:43](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=283)** Now, one of the other things that is interesting is you have query details and you can view the query profile which of course is like super important in terms of the overhead of the query on the compute tier. And again, it's really very obvious and clear here that you have a compute tier, which is completely separated from a data tier that has your [Databases](../../Skills/Software%20Development/Databases.md). Again, it's similar, but it's just called worksheets which is your compute tier. So just some differences in the interface as we, you know, start to work with this set of services a little bit more. So the question that you are probably going to have is how did I get this data into SnowflakeDB? And that's by using the data marketplace. So I've mentioned that in my introduction that the data marketplace is where you discover data that is either premium, you purchase it or open source and free, like in the case of this COVID 19 data. Notice, if I click explore the data marketplace, it's going to take me over to the, actually I think this link is broken as of this recording, but where you're going to find this is here. So I think they just need to update this link. And then inside of the data marketplace, you'll see data that is premium and you can search for, you know, different kinds of data. So if I put in here COVID, for example, then that's where I got this data and see it's free and then you can query the data or view the database and really, that's just how you make the data available.
>
> **[6:18](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=378)** You can see information about the data, you can see sample queries. So again, this is a feature set that Snowflake is exposing and it's good when you're learning how to work with Snowflake. You can look at these various different categories and the sample data and you can see various data sets that you can integrate with. And the way that you see that is here I have the COVID data and it's the COVID 19 schema and there's my data set. And you can see there's information about the table in this particular case. And I got the data atlas so I need to get the actual underlying data so it's like [Metadata](../../Skills/Web%20Development/Metadata.md) about the data. But again, just for demonstration purposes, the marketplace here is something that I have found to be useful as I'm working with SnowflakeDB.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (3), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Tableau](../../Skills/Data%20Science/Tableau.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** covid (4), sql (1)
> **CLI Commands:** find (2), make (1)
> **UI Navigation:** go to (2), click on (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (2), it's like (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Learn SnowflakeDB file ingest](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=0)** - [Instructor] So to get data into [Snowflake](../../Skills/Data%20Science/Snowflake.md) DB Storage, which of course you'll remember is going to be Cloud Object Storage. So let's just go with the case of AWS, it would be S3. It's literally going to be stored on cloud buckets but you don't see that of course that's obstructed away from you. It's scalable and available because it is stored as object storage on your particular cloud vendor. It's encrypted by default, it's compressed and autopartitioned. And again, I'll be drilling in and giving you some resources so you can better understand it's in 16 megabyte, micro partitions which leads to very extremely high query efficiency and storage efficiency automatically. And this is a differentiator from some of the other platforms out there, some of 'em are autopartition and some of 'em you have to manually partition which frankly is a pain and often done wrong, so it's a compelling and very useful feature. And this is just kind of a visualization so that you can think about how you might get your scalable storage available in stuff like DB. Again, the underlying storage mechanism is an object store so Amazon would be an S3 bucket [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) blob store or GCP bucket GCS. And you have the option of loading it into a Snowflake managed underlying object store or actually leaving it in the original object store it's called an external table and we'll talk a little bit more about that in a minute. You can use the copy command to move from your source bucket if you have your files already in the cloud
>
> **[1:34](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=94)** or you can move from like an on-prem if you want to upload from on-prem, you also can use a snow pipe object. So there are different ways for you to get the information into the snowflake DP managed storage. So we are going to start with thinking about loading kind of from a high level and then we're going to drill in for some specific examples and scenarios but from a high level you're going to source your files or your data, usually from a cloud based bucket, it doesn't have to be, but that's the most general pattern. And then you're going to create or use a file format so CSV, [JSON](../../Skills/Web%20Development/JSON.md), custom, you have to specify what is the format. Now, if you're just testing, you can load with the web UI but there's a maximum of a hundred megabytes for that so that's really just for trial scenarios. You're normally going to use the [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md), the snow [SQL](../../Skills/Data%20Science/SQL.md) CLI and you're going to load with a put command. Now, most typically you're going to use another object called a staging table as an intermediate layer so that you can review your load and this comes from best practices around [Data Warehousing](../../Skills/Software%20Development/Data%20Warehousing.md). Oftentimes data is messy or dirty or needs to be validated. So rather than loading, you know, directly, it's typical that you're going to use a stage table. And this is what's shown in most every example and snowflake DB has an object specifically called staging for this. So it's easier to kind of set up a very lightweight kind of ETL or extract transform and load processor pipeline. Now the destination table within Snowflake DB
>
> **[3:11](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=191)** the default is called a permanent table, so let's just call it a table. There are some other table types, there is a temporary table available and that's good for the session only so the query window if you will. And then there is a type called a transient which is kind of halfway between permanent and temporary. It can persist beyond a session but it does not have a fail safe period which is by default for a permanent table seven days. So it is less expensive 'cause you're not paying those charges. And then you have a type of table that supports the data lake scenario, that's the external table. In that case, the data is not moved from the source original underlying object bucket into a Snowflake managed storage location or another bucket, it is simply kept there. And why you might want to do that if you remember back to our definition of data warehouse versus data lake is cost. It is going to be cheaper for example if you keep data in S3 natively rather than moving it into Snowflake storage. Now, when you're thinking about this it's a time versus money situation. And this is really only applicable when you have massive volumes like in the terabytes per day level like some of my genomic customers, for most people you will not be using data lake scenarios. Just simply for ease and for speed, you're just going to move everything into a snowflake managed bucket but that is an available capacity if you have that particular need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (8), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (2), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** cli (2), aws (1), gcp (1), gcs (1), csv (1)
> **Definitions:** is a  (4), is an  (2), is called (1)
> **CLI Commands:** aws (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Load SnowflakeDB using web UI](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=0)** - [Instructor] So that we can understand from scratch, I'm just going to use the classic web UI and create a database. So I'm going to call this, this_db and notice that it has the sequel there and I'm going to click finish. So I could grant privileges to it, I could clone, drop or transfer ownership if I click into it. Now, if I want to create a table, let's call it my table. And notice that it's associated to the public schema, which is provided by default. And then I can add columns, so column one is a string column two, I have these data types available so you notice integer, timestamp, double, number, variable character, date, float, variant. That's very important, the variant data type that's where you are going to get all your [JSON](../../Skills/Web%20Development/JSON.md) capability, object, array and boolean. So I'll just throw an int in here, notice nullability which is the only constraint that will be enforced. You can note other constraints in your sequel like primary keys, for example but they are informational only. And again, I can show the sequel here and I can create a table. So I can create a similar table, I can clone it. Now, if I wanted to load data into it directly, I have four steps. Notice, this is where we start to see the compute and the [Data Storage](../../Skills/Data%20Science/Data%20Storage.md). At this point, it says which warehouse do you want to use? And that is the compute layer so you can think of it
>
> **[1:34](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=94)** as the VMs although you're not really seeing them. And then you say next, and where's the source files, so you can select from your computer or from an external stage. And I'm just going to select a file here, which will not work because I don't have the right structure or the right table for this but just for demonstration purposes. And then for the file format, I can click add and then I can just go with a CSV default if I want to do that for this schema. Notice the format type CSV, JSON, XML, Avro, ORC or Parquet and then I have compression methods separators, row separators, headers, field optionally enclosed by, double quote, single quote or nothing. What is a null string indicator, trimming space, error on column count mismatch, escape character, escape unenclosed field, date formats, time stamp formats and comment and again, I can see the sequel here. So notice this is called a file format and then the next step would be the load options which like I said will fail because the structure of the table does not match the underlying structure of the particular file. Then I would just click load so I'm just going to cancel that. So you can see inside of here if I wanted to make a view I would create a view here from my table. And here is if I wanted to create a schema which again is a container for objects
>
> **[3:07](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=187)** from our earlier movie. Stage, I had mentioned as the best practice where you can create a stage location and notice the locations here are [Snowflake](../../Skills/Data%20Science/Snowflake.md) or your various cloud vendors. And on your file formats, we've got this default format which would be used for loading, and we'll come back to these other objects in subsequent movies. Now, how does this look in the snow site? If we wanted to work with data here, I created that database so I'm just going to refresh. So here's my database, here's my public here's my table, there's my table. And again, this is more of a viewing dashboard if you will because you'll remember you can query and see the rich results, but this is really more of your loading, your sort of ETL, because you've got access to some of these other objects that you're going to need such as file formats and stages. Whereas here you're really looking at the query itself. You can start to understand the differences between these consoles, looking at the capabilities around loading. Now, again, in terms of loading you would use this console only for testing but there's a limit of a hundred megabytes in terms of files, so if you wanted to use something beyond that then you would use the command line interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (2), [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) (1), [Snowflake](../../Skills/Data%20Science/Snowflake.md) (1)
> **Env Vars:** json (2), csv (2), xml (1), orc (1), etl (1)
> **Definitions:** is a  (3), is called (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** this_db (1)
> **Tools:** command line (1)
> **Best Practices:** best practice (1)

#### [Load SnowflakeDB from S3](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=0)** - [Instructor] At this point I want to introduce the excellent [Snowflake](../../Skills/Data%20Science/Snowflake.md) documentation because it is such a rich set of features. I could make a course that was, I don't know, eight hours long, 40 hours long from all the features. And I just don't want to do that but I do want to point you to resources so that you can learn more when it's appropriate. In particular for file loading the sections here which I've read all of them and done most of them are very well written, very useful. So I would recommend that to get to the next step of loading you do this tutorial, Bulk Loading from a Local File System Using the COPY command. So this is going to, as it says, describe how to load data from files into an internal Snowflake stage into a table. So this will be using the [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md). We're not going to take the time to do this manually but you notice there are nine steps to it and very well written. I'd really recommend this as an next step. So pause this video, go ahead and do this. And then in addition to that, the most common use case I think is going to be either loading locally or loading from S3. So the next tutorial covers that. So once you've mastered the using the CLI basically, then the next thing that you would want to do is use the CLI with files that aren't on your local machine but they're in an S3 bucket. And so again, this is another 20 to 30 minutes but I think it's time well spent.
>
> **[1:35](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=95)** It takes you through the steps that I showed you in the previous movie, but with scripts. So creating a file format object, creating a named stage object, best practice again, copying data into the target table, resolving data load errors, and verifying the loaded data. Very crisply written, and really useful as a next step. In addition to that, if you have [JSON](../../Skills/Web%20Development/JSON.md) data, because again great support for all things JSON in Snowflake DB, you can see that we've got a tutorial on that. And there is Parquet data as well. So in general, the Snowflake DB documentation is really outstanding. I haven't found one error and I am notorious for testing documentation and finding errors. So props to the documentation team. I would always recommend to for any feature that you're trying explore to go ahead and do the tutorials and then understand. And again, in this section, which is huge and really useful loading data, they talk about the considerations, preparation and all the different aspects of working with data for Snowflake DB. In addition to this they have a great tutorial on using Snowpipe which we'll talk a little bit about in the next movie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (5), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (2)
> **Env Vars:** cli (3), json (2), copy (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Load SnowflakeDB using Snowpipe streams](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=0)** - [Instructor] So again, in the documentation, another type of loading is Snowpipe. As it says here, it's the continuous [Data Ingestion](../../Skills/Software%20Development/Data%20Ingestion.md) service. It loads data within minutes after files are added to a stage and submitted for ingestion. It's serverless, it manages load capacity and ensures optimal compute resources to meet demand. It provides a pipeline for loading fresh data in micro-batches. That's really important to understand. So it's micro-batching as soon as it's available. And if we drill in a little bit, the data will be available within minutes, rather than manually executing copy statements on a schedule to load larger batches. So it's kind of in the middle of continuous and not continuous. It's not a series of events, it's micro-batches, it's faster than a manual copy. And then again, just kind of drills down. I really like this, how is Snowpipe different from bulk data loading? So it goes into the technical differences. So it starts with authentication, then goes into load history and it goes very specifically. For example, this is something I get a lot from customers, how do transactions work in bulk data load versus a pipe? So in this case, bulk data loads loads are performed in a single transaction, in Snowpipe, loads are combined or split into single or multiple transactions based on the number in size of row in the file. Row of partially loaded files based on the ON_ERROR can be combined or split. And again, cost is important.
>
> **[1:33](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=93)** So for bulk data load, it's billed for the amount of time each virtual warehouse is active. Snowpipe is billed according to the compute sources used in the Snowpipe warehouse. So you can think of bulk as like on/off whereas Snowpipe is on but you might have a smaller size warehouse. This is one of those nuances that's important to understand to get the proper total cost of ownership. For example, I've seen a lot of customers that didn't know to make a smaller size warehouse for Snowpipe. That's why I'm calling it out. So again, it's simple but not easy. There's a lot of little nuances like this cost nuance that you have to get right. So I would recommend that if you're going to use Snowpipe, that you go through the documentation as well as the associated tutorial so you understand these nuances. Again, it's not difficult but you want to make sure you use them so that you get the best value out. Micro-batching unloading, using Snowpipe.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Ingestion](../../Skills/Software%20Development/Data%20Ingestion.md) (1)
> **CLI Commands:** make (2)
> **Documentation:** the documentation (2)
> **Analogies:** for example (2)
> **Env Vars:** on_error (1)
> **Speakers:** - [instructor] (1)

#### [Scenario: Import files and data into SnowflakeDB](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=0)** - [Narrator] Let's pull what we've learned about the data tier specifically loading in [Snowflake](../../Skills/Data%20Science/Snowflake.md) DB through this blog post which you can actually run on your own. That was written by Felipe Hoffa. Felipe is a data cloud advocate at Snowflake DB. He was previously working, interestingly, as an advocate for BitQuery at [Google](../../Glossary/Service/Google.md). So, his examples are excellent and I highly recommend that you follow him on Medium where he tends to write them up. And they're all replicatable. There's a lot of lessons in this article and I'm going to just kind of highlight some of the things to pay attention to. And I would tell you that this is again, a fun exercise. If you want to, after I get done with this, pause the video and then challenge yourself to see if you can replicate this. So the scenario is to load all Hacker News comments into Snowflake in less than a minute, because again the idea here is to show the [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md), right, and the ability to query complex data. So he first tells you where you can find the Hacker News archive table, which is kind of ironic and funny. It's in Google BitQuery. The table has an updated copy of Hacker News and it has 11 gigs of data with 30 million rows. And he shows you how to copy it into Snowflake as Parquet, for example, and that took 16 seconds. And on his Snowflake account,
>
> **[1:32](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=92)** he configured a secure integration with [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) Storage. So, he can check that the files are there with a [SQL](../../Skills/Data%20Science/SQL.md) query, and he tells you, you know, there's a link on how to do that. And this demonstrates one of the great capabilities of Snowflake, which is cross cloud. So he is saying, even when a Snowflake account is in AWS you can query data with Google Cloud Storage which is pretty interesting. So then he's going to create a schema-less table to load the Parquet files into a Snowflake native table. Notice he's using the variant data type. And he's copying the table in the format of Parquet, and it took 43 seconds to create the semi-structured table with an S warehouse, which, while also moving the data from GCP to AWS. And if you're paying attention, you'll know he's showing you the console that shows you the query detail information the snow site console, because there's the query duration and the status. And then he also tried it with an L size warehouse. The time goes down to 28 seconds. So, it's basically time and money kind of situation. And then he points out that in Snowflake, the data is compressed and this is because of the micro partitions. And then he goes on to talk about querying the data with the variant data type, which I'm going to stop here because we haven't really covered querying, but this is a really fun example to kind of test your knowledge at this point in the course. And also Felipe is continuing to publish fun examples.
>
> **[3:07](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=187)** He's known for that basically, that have huge amounts of data that show the capabilities of the platform that he's advocating for. So, he's somebody that you're going to want to follow on Medium and the other platforms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (9), [Google](../../Glossary/Service/Google.md) (2), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (2), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** aws (2), sql (1), gcp (1)
> **CLI Commands:** aws (2), find (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)


### 3. SnowflakeDB Query Processing

[↑ Back to Table of Contents](#table-of-contents)

#### [Use SnowflakeDB for SQL queries](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=0)** - [Instructor] Now we're going to take a look at [Snowflake](../../Skills/Data%20Science/Snowflake.md) DB's database storage as it relates to query processing. As you'll remember, Snowflake DB completely separates these control planes so that you can have maximum control and [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md). So query processing is [SQL](../../Skills/Data%20Science/SQL.md) queries, and we're going to kind of start with the basics, and then drill in as we go through this section so that you can understand functionally how to run SQL queries, and then, of course, how to get the biggest TCO or total cost of ownership benefit from Snowflake's really powerful virtual warehouse feature. So let's switch over to the interface and look at running some SQL queries to get us started. So here we are in the Worksheets view, and you may remember from a previous movie that I had gotten the shared data for COVID-19. Do you remember how to do that? You go into the Data section here, and then you go into the Marketplace, and you just select this data, which happens to be free. Now the concept in Snowsight is to use worksheets because this is an analytics-focused web UI. So the idea is here you're an analyst. You want to run your queries. And you can see that worksheets can be shared. You can put 'em in folders. You can add worksheets either as a new worksheet, or you can create a worksheet from a SQL file by clicking on the three dots. Now, I've created some blank worksheets here, but I'm going to go back to this one that has some queries in it. You might remember from an earlier movie that this query runs a query, and it says an English here on line four, what is COVID-19 reproduction rate in France
>
> **[1:33](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=93)** as of this dataset? So you just select this, and then you go ahead and run it. And then you'll remember we get the rich visualization about the data to the right side here by default. And we can also chart the data in multiple formats. So we get this great information about the query. If we want to see the object tree, we can go into the object tree, and we can look at the associated schema and table and see how big the table is, for example. Now, in addition to this, in this view, if we want to work with other aspects of this query, what we can do is we can look at the compute, and this is where our virtual warehouse comes in. And you'll see that we have a history here, and we can see the queries that were successful. I've obviously played around with this and run it multiple times. And then if we drill into this query, we can see what the SQL text is, and we can click on it, and we can see the query was able to make use of a very powerful feature 'cause I executed it multiple times, the caching. It was an identical query. So one of the first query optimization techniques is if you're running the same query over and over, and you expect it to be hitting cache, you can validate through here that it was, and this is showing that was cached. Now, if I go to an earlier version of this, let me go back to earlier today. I think this is one of the first ones. Let's see if I can find the original plan in here somewhere. So I'm using the query. I was just rerunning that one. There, there's the original execution of this query.
>
> **[3:07](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=187)** So you can see the Snowflake DB engine had to optimize the query and figure out how to run it the first time, and then it was able to run it. And it shows you here the most expensive nodes for optimization purposes, and it shows you how the execution occurred. You also have the ability to get more details here. You can see what size your warehouse was, which is really important as we drill into this for using Snowflake effectively 'cause of course we can size these up and down as needed. And we get lots of information here. Now, in addition to this, we have information about this query, or we could run the query in the classic interface. So I've set this up already. Now, a couple of differences. You have to set your context. So inside of your context, you have to make sure that you're in the right database in schema in order for this to work. And notice you have the ability to resize right in here, which again is a key aspect of using this effectively. And then when you run the query, you just click Run. And in here, you can see the information. Of course, you don't see the visualization of the data types. You do have the data preview. Now, in this interface, if you want to see information about your account, you do see a query history, which is similar to what you see in Snowsight. And here you can see the information about start/end time, the duration, the byte scan, so on and so forth. So if I go down to the one that was probably the first one, one of the ones that wasn't using a cache. Let me look in here, we'll see.
>
> **[4:41](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=281)** And if we go into the query ID, we can see that we see the details. And then over here, we see that same profile here. I'm just scrolling in and out. And we can see the most expensive node with the execution time. So it's a similar view, but the interface is just slightly different. I was in the Worksheet view here. That's where I started. I had to set the context, and then I went into the History view. So again, I just want you to kind of get the dynamics of running queries as an introductory set of concepts when we're working with the Snowflake DB data platform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (6), [SQL](../../Skills/Data%20Science/SQL.md) (5), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **Env Vars:** sql (5), covid (2), tco (1)
> **CLI Commands:** make (2), find (1), node (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** click on (1), go to (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1), similar to (1)
> **Speakers:** - [instructor] (1)

#### [Understand SnowflakeDB dashboards](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=0)** - [Instructor] Next up in queries, I'm just going to show you a visualization feature available in Snowsight. So using these same examples, I went ahead and ran this query a couple of times. What is the stringency of government response in India, just to get another query in here. And now if I go back to, remember where I can see if cash was used or not? It's under Compute and History, and I'm looking for a query result reuse. Now, if I want to look at the original compilation here, I can see the query plan organizer. Again, notice the number of rows, which I think I didn't point out. Now, in addition to understanding the overhead of the query, you can display the results in Dashboard. So in order to do that, you can just click here, and you can manage filters, or you can add a dashboard. So I'm going to call it My_Dash and create a dashboard. And then you're going to add a tile to work with this. And then you need some sort of query inside of here, so I'm just going to switch over here, and I'll just take this original query. This is in the other interface. And notice the context here, by the way. And it gives you a example. And then we can go ahead and run this query. And you can see that we have the results here, and then we can return to my dashboard, and we can see that we have the results in a tabular format.
>
> **[1:36](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=96)** Now this becomes a tile in my dashboard. If I wanted to work with this, obviously I could view the table, edit the query, duplicate, or unplace it, or delete it. Now, if I want an additional tile inside of here, then I can go back to my worksheet, just kind of showing you the workflow, and get my other query, which is this one about COVID reproduction rate in France. Go back to my dashboard. Do you remember how I add an object? It's a tile. So I want to have a new tile. I can make a new tile from a worksheet or just paste in a query. So I will have the query in here twice. But if I say New Tile from Worksheet, then I can select a worksheet, or I can just paste this query in here. So I'm going to go ahead and run this query. This is the France query. And in this case, I'm going to chart the results, kind of a boring chart. Let's see if I can do anything more interesting here. I guess it's just a single point, so it's kind of boring. Maybe I can do a scorecard, there, okay. No big deal, but you kind of get the idea. And so there's my dashboard. Again, this is a common set of functionality that you'd often use a partner like [Tableau](../../Skills/Data%20Science/Tableau.md) or [Power BI](../../Skills/Data%20Science/Microsoft%20Power%20BI.md) or something like that, which you could still do. But the fact that it's integrated into Snowsight is a nice feature around queries, comprehension of queries through presentation either in a dashboard as tabular data or visualized is an important aspect of query usability. So it's something that I wanted to cover.
>
> **[3:09](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=189)** And I will note that in the classic UI, there is no dashboard, so that's a new feature in Snowsight or a feature of Snowsight only. So again, there are some subtle differences between the environments as you work with these web UIs. Now, of course, in addition to the web UIs, as I've said in earlier videos, you could use scripting, APIs, that kind of stuff. But for this course, we're really focusing on the web UIs because we've got a lot of objects to cover.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tableau](../../Skills/Data%20Science/Tableau.md) (1), [Power bi](../../Skills/Data%20Science/Microsoft%20Power%20BI.md) (1)
> **Cross-References:** go back to (3)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1)
> **Env Vars:** covid (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Create and use user-defined functions](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=0)** - [Instructor] Now in addition to supporting [SQL](../../Skills/Data%20Science/SQL.md) queries, ANSI SQL, and some extensions, [Snowflake](../../Skills/Data%20Science/Snowflake.md) supports user defined functions. And they're quite powerful. As with some of the deep topics, I'm going to get you started here, and if this is an area that you are going to use for your workload, I encourage you to go through the documentation, 'cause you have a lot of flexibility. So, a user defined function, of course, is a function that can be scaler or tabular. So scaler is one output row for each input. Tabular is a table function, and then there are different ways you can write this. You can write it in SQL. You can write it in [JavaScript](../../Skills/Software%20Development/JavaScript.md). You can write it in [Java](../../Skills/Software%20Development/Java.md). Here's information about the limitations. So, the example that they show here is in SQL and it's a function that's the area of a circle and it uses pi, basically. And then it uses a query expression in the next example. And then it goes on to talk about it. So, rather than going through this I actually ran the pi function 'cause it's pretty simple, and it illustrates some concepts about working with Snowflake DB as well. So kind of get two things going. So, before we jump over there, there is also support for stored procedures, and I really like the way that this was written. So, stored procedures are saved named batched SQL statements. It has a very good explanation of when to use a stored proc versus a UDF. So if you're going to use these patterns, you're going to want to consult this documentation as well. And then there's really good documentation
>
> **[1:34](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=94)** in terms of what is the branching constructs and logic. So let's jump over to the worksheet. So interestingly, you have to be in the classic version to create a UDF. So this is from the documentation. It's kind of interesting. It's like add pi. So you're basically adding pi, and then you can overload it. So, create the function, you just execute the function. Do notice I'm in a particular context I created a little demo database just with the UI. And then you'll remember from earlier movies that there's a concept of schema. Remember that from the diagram? A schema is like a folder where all the objects for the account are held. So the tables, the function, so on and so forth and the warehouse here is the smallest size. So you have to be in the right context to put it in the right object hierarchy in your environment. And this is, you know, trivial, basically. Kind of interesting. You can do this overload in line one. The input parameter is a float type in line 10. It's a variable character, and just showing the result. And this is after you use a variable character input type in the overload. So, also interesting, and of course, I can just run this to show that it's live, which will just return that one result. In the Snowsight interface, if I drill into this DB, into my schema, I can see that I have function and I have it with two different input types. And here's the function definition. But I can't add one here. So again, there's subtle differences between the UI
>
> **[3:07](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=187)** that for usability is not super complicated, but the sort of general thinking seems to be that Snowsight is more for people who are going to use objects in service of querying data. And the classic UI has got more of like a DBA kind of a feel to it where you can do all the various functions. Now, in addition to this, for a procedure logic, I just pulled one of their examples here just to show you some branching logic that is supported. So, this is just using case statements. So again, documentation is pretty solid here. If you're familiar with the SQL language, assuming most of you are, it's more a question of when in this environment are you going to use UDFs? You going to write 'em in SQL, JavaScript or Java? When are you going to use procedures and how are you going to use the branching logic? And again, notice in my schema here, we don't have a procedure 'cause I didn't name it. It's basically just running immediately, in the immediate session. I would have to create it as a procedure for it to show up over here. So you're testing it out basically. So again, this back and forth between you're creating in the classic interface and then probably using, in the Snowsight interface, I think is representative of the workflow in terms of the objects. Another object I didn't bother creating, we don't have any here, it would be a view. So a view, of course, is just a named SQL statement which reflects generally a subset of the information in a table. And we'll get to some of these other aspects in subsequent videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (8), [Snowflake](../../Skills/Data%20Science/Snowflake.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2), [Java](../../Skills/Software%20Development/Java.md) (2)
> **Env Vars:** sql (8), udf (2), ansi (1), dba (1)
> **Definitions:** is a  (3), is an  (1)
> **Documentation:** the documentation (2)
> **Cross-References:** in the next (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### [Optimize virtual warehouses](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=0)** - [Instructor] When we're thinking about optimizing [Snowflake](../../Skills/Data%20Science/Snowflake.md) DB, we really want to understand virtual warehouses, which is the abstraction against the underlying [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) or clusters of virtual machines. So you think of it as how compute and queries are run. This is billed by the second and understanding when you need seconds of usage at what size of warehouse is one of the aspects of Snowflake that you need to master in order to get the best value from it. Considerations like pausing the warehouse when it's not in use or setting it to auto pause is important to understand. So you have to understand your workload basically. The virtual warehouse, when used correctly, is flexible and scalable. And the key to understanding it is using the tools. So before we jump over to the interface, one aspect that's important to understand is you can have multiple virtual warehouses associated to the underlying [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) 'cause remember, the layers are separate. So a common demo that I've seen for Snowflake DB is you have one virtual warehouse doing loading, and another one doing querying, which is one of the really flexible advantages but it's a different way of thinking, especially if you come from server-based where you'd have to scale up or prioritize the workloads or something like that. You have truly separated compute from underlying storage. So what tools do you have and how can you use them? Let's look at the consoles to see that? Let's start with this consol, the Snowflake console.
>
> **[1:35](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=95)** Let's take a look inside of Compute. And of course, we saw History where we could see the query execution but right below that is Warehouses. So if we click on our warehouse, we can see the size, we can see the number of clusters and the status of it. If we click into it, we can see the running load and the queued load. Queued load is really important because if you've got a lot of queued load, you probably are going to need to resize either the capacity of your individual warehouse or to make multiple warehouses. Again, knowing when to do which one is kind of one of the key aspects of working with Snowflake, and it depends on your workload as in kind of a way to start to think about it. So this shows details and privileges. Now, in addition to this, we have an object called a Resource Monitor. Real simple to create. Let's call it my_Mon here. We're going to say that we have 100 credits. And we set the threshold for time, whether it's day, week, month, so on and so forth. And then the monitor type is account or warehouse. If we set account, it's on the entire account. If we set warehouse, then we say which warehouse and obviously, we could have multiple warehouses. By default, this resets monthly but we can customize it and we can say start date, end date. So we could say we want to reset this daily, weekly, and this is really important to set up correctly because again, if you have a variable workload, you're managing this capacity. I liken it to the flow of a utility, like electricity, or water coming into your house. You would have some management,
>
> **[3:11](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=191)** for example, if you go out of town to make sure that the water doesn't overflow in your house, which actually happened to me once and my water bill was like 10 times the normal amount 'cause I didn't have someone watching. And it's the same thing with the resource monitor here. You want to definitely, best practice, put a resource monitor on at least your account, if not your warehouses. And then key is to add actions. Suspend immediately and notify when let's say 90% of credit. Suspend and notify when this percent of credit. And then notice when this percent of credit is used and the credit is, of course, the 100 credit quota. And then we just create the monitor and then we're good to go. So really, really, really important. If you don't take away anything else from this course, understanding the idea that compute is completely separated from data and it is flexible. If you just turn it on and leave it on, you're kind of not getting the advantage of Snowflake. And it's something that I see customers doing wrong, unless, of course, you have a workload that demands that. But most customers have workloads that are somewhat flexible. Now, the way this looks in the classic UI is you have your warehouses, and it gives you information about it. This is set to auto suspend every 10 minutes and auto resume. And this shows your load over time, which is similar. And you can set your time [Windows](../../Glossary/Service/Windows.md) here so you can see when you had load. So the whole idea is to understand how to set this appropriately.
>
> **[4:43](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=283)** Now, if you go into your account, you can see, and we'll be looking at this in more detail as we go along but just to get us started, the usage. And you can see the credits used. And you can see your resource monitor here. I guess I have to refresh it 'cause I created it in the other console. And there's my resource monitor inside of here. So really, really, really important to properly utilize the right size and just to show you, if I go into warehouses and I click Create, I say my_big-Virtual Warehouse, it starts by default with 16 credits an hour, and depending on the edition, Standard, Business or Enterprise, I think they're different pricing. As of this recording, it's $2 US for standard per hour and goes up but different in the regions too. So typically you're going to use extra small or small for testing but by default, we start with extra large and you can see we go all the way up to this 5X-Large. So if that was two bucks an hour, that would be $500 an hour. So you could get to some pretty big charges if you left this on. You set the maximum clusters. Another aspect of this is you can multi-cluster and then the scaling policy. Standard or Economy. And this has to do with how quickly you're going to scale. And in the documentation, they tell you the time parameters. So Economy just takes longer and I think it's... I can't remember, I'll have to look it up for you guys but Standard is a quicker scaling basically. Auto suspend after 10 minutes.
>
> **[6:16](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=376)** And then you would create the warehouse. So if I wanted to just create... I'm just going to do a large. Then it's telling me I have the wrong character here so I'm going to go ahead and now I have this. And now if I wanted to query, of course, I can associate this greater capacity with... Then I could say select warehouse, go over here and I'm selecting this bigger compute. And again, I can resize it right inside of here as well. So that's part of the beauty of working with the product. So the positive is you've got this flexibility. The thing that is new for a lot of my customers is they've never really had this paradigm before so they don't think about their query workloads this way. So we'll be talking more about how to address this and what tools you might have in addition to Snowflake to be able to properly size this 'cause it's really, really important to getting the appropriate value from using Snowflake DB.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (8), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (2), [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** make (2)
> **Analogies:** think of it as (1), for example (1)
> **Code Identifiers:** my_big (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)

#### [Scenario: Optimize SnowflakeDB compute](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=0)** - [Instructor] Because optimizing the virtual warehouse for [Snowflake](../../Skills/Data%20Science/Snowflake.md) DB is such a deep topic, like really all the other topics, but particularly this one in my associated companion, [GitHub](../../Skills/Software%20Development/GitHub.md) repo, I'll be continuing to build the information out. Anything that I mention here will be linked, but I'm going to continue to build this up because it's a frankly a topic I'm working on with some of my customers. So first of all, some of the basic stuff, it's important that your queries are written in the most optimal way, and there are some considerations around data types that you're going to want to understand when working with Snowflake DB. So this is a great summary. You can also just go to the documentation of Snowflake DB but you do want to understand the performance impact of using particular data types. So that's kind of a basic. Now, when you move into working with the warehouse, there is some great documentation that you're going to want to read on the Snowflake site. And again, this goes into the topic of query composition and warehouse processing, because understanding beyond cashing, this should be almost obvious, but you'd be surprised how many people skip that how to properly pick the right size warehouse, pick the right configuration if you want a multi cluster warehouse or if you want multiple warehouses or different warehouses. I mean, I really just cannot emphasize enough how important this is in effectively using Snowflake. So to that end, I would recommend you read all this stuff. And this I thought was particularly well written in the documentation about multi cluster warehouses. So what this is is you can have individual warehouse,
>
> **[1:36](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=96)** you can have more than one warehouse on different queries or workloads, or you can have a multi cluster warehouse. So that is a warehouse that has multiple clusters in it. And as it says here, they're designed specifically for handling queuing and performance issues related to large number of concurrent users and/or queries. This is going to help you to automate the process if your number of users or queries tends to fluctuate, which I would think is the most common use case. So most people would benefit from using multi-cluster warehouses, as long as you have fluctuation in your query workload. So again, it goes on to give you some specific recommendations that you're going to want to take into account and notice the very first one here. If you're using Snowflake enterprise edition, all your warehouses should be configured as multi-cluster, such an important topic. In addition to this, there is a community of practitioners of Snowflake DB users that have created a kind of an interesting tool. It's got a really dumb name, but it's called Snoptimizer because this is such a common challenge properly configuring the virtual warehouses. It is a tool that was built as you can see for properly configuring the number of virtual warehouses. So really interesting tool. I'm going to keep my eyes out for other tools out there because I think that this is an area of Snowflake DB that could benefit from additional optimization tooling and best practices.
>
> **[3:11](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=191)** So I'll be adding that back to my link list here. In addition to this, there is a YouTuber who has created a new number of Snowflake tutorials. I referenced this earlier and guy's done a really, really great job, particularly explaining in detail his best practices for virtual warehouses in this tutorial number 12, takes 30 minutes. Highly recommend that you watch it. He's done a really excellent job just in general, he's got a deep of information. It's about 15 hours worth of information on Snowflake topics, but I really like what he did there. Again, if you don't take away anything else, you really want to drill in and understand how to optimize your configurations because you're paying by the timeframe. It's the same reason that you turn your lights off and you turn your faucets off. You want to properly configure your compute for Snowflake DB to get the best value out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (11), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Definitions:** is a  (5), is an  (1)
> **Documentation:** the documentation (2)
> **Tools:** github (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** github repo (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 4. SnowflakeDB Data Services

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand SnowflakeDB account usage](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=0)** - [Instructor] In addition to separating the control planes for query processing and database storage, SnowflakeDB separates the control planes for services. And those include authentication, access control, security, and others. We're going to start with account management. Let's head over to the console. Here I am in snow site and we saw this before that under Account Usage when we were looking at virtual warehouse usage the blue indication is how much credits we're using for compute over time which is a key metric. And you can see this is for the compute warehouse which is the default warehouse. Now, in addition to this, we can look at the organizational level here, different timeframes, different other filters. So for example, credits or currency we can switch this to money, always a good thing. Of course, we haven't spent anything 'cause we're on the free tier. So we'll switch back to credits and now we can switch into Consumption and we can see that their compute warehouse has used this amount of resources. And we can see there could be a charge for other services depending on what services in the tier of the system that we're using. Also, we could potentially have a charge for storage. Although typically, storage is going to be much less than compute but as I've mentioned, I work with customers like genomics customers that have terabytes or petabytes. And so, customers like that would be concerned with storage. Another one that's tricky that I see customers neglect
>
> **[1:37](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=97)** until they have an issue, is Transfers. And this is particularly of note, if you're using data lake. Do you remember that when you're using data lake you are executing queries against data stored in external buckets, let's say Amazon so S3 buckets. So you would potentially be transferring that data in if you're doing intermediate computation on it. This is one of those things that can be a surprise. Depending on your query pattern. As we've done, let's look at the classic console here. If we go into Account and Usage, you can see that we have a view of our different warehouses. And you'll remember in a previous video that I was demonstrating setting up different warehouses in terms of our credits and our credits used over time. So we really do have two different views here between these two different interfaces, and you're going to want to look at both of 'em if you can. In addition to this, we do have a billing section. Now this is not going to be meaningful 'cause we're on the free tier, so we don't have a credit card. If we wanted to upgrade, we would do that at this point. So really on the free tier, we're just really concerned with using our credits for this trial period.

> [!info]- Semantic Content
>
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Learn SnowflakeDB authentication and authorization](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=0)** - [Instructor] The next area we're going to look at is in terms of authentication and authorization. So we're going to look in Snowsight at Roles. Now, in terms of roles, you have roles the account is set up with like ACCOUNTADMIN and you can also create roles. So I did create a role here just quick like by just clicking the plus sign, and then it's called MY_ROLE. And so I just gave it permissions associated. And kind of an interesting view here, if I move this around you can see this is associated to the ACCOUNTADMIN, has one user associated to it. And you can then grant the permissions associated to the role to a specific user. Interesting interface. So in terms of users, I also created a user, created a user called Fred Langit there by just clicking here and filling this out. And then I filled out the advanced options. So you can select a default role, which I created that role. You can select a default warehouse, and I created an additional warehouse as well, and a default name space, if you want that. And so here's my Fred Langit user. And you can see that he's associated to my role and he's associated to my warehouse. So pretty straightforward, which is nice. In addition to that, you have another capability that is only available here in the classic console. So you have the users and it's pretty much the same thing. So Create, it looks pretty similar, basically, Advanced, and Preferences. You have this Force Password Cange. So you have a couple more switches in here
>
> **[1:34](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=94)** than creating users in the Snowsight. Then you have Roles. And again, here's the role that I created. I can see who's been granted that role, and I can edit the role if I want to. There's the [SQL](../../Skills/Data%20Science/SQL.md), kind of familiar by now, and I could drop the role if I wanted to. Now, in addition to that we have this Reader Account capability and I created a Reader Account. And when you do that, this is external to your organization. So this is a neat capability that a allows for, let's say, auditing. So you can create the account name, the Comments, you can see the Region and Edition, and they're going to log in with the user and a password. And once that's set up, takes a minute or two, they get an endpoint. So there's their endpoint. And then when they log in, notice here, I'm Lynn Langit, but I've logged in with my reader role. And when I switch my a window, I created one called Dexter Langit, and notice it's marked as Reader. And even though it's my particular instance, I haven't really assigned any permissions to this reader. So, you don't see anything here. You don't see any [Databases](../../Skills/Software%20Development/Databases.md). You don't see any warehouses because it has to be explicitly assigned. Again, it's a useful capability, and one that is only visible in the classic console. Because if I go back over to the Snowsight, I don't see Readers inside of here. So, just, you know, it's interesting to see the different capabilities that are available. So Users and Roles.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** accountadmin (2), my_role (1), sql (1)
> **Prerequisites:** set up (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Review Snowflake DB sessions](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflake-db-sessions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflake-db-sessions?u=76281980&t=0)** - [Instructor] The next aspect of working with Security, using Snow site if we're going to the Security section here, is Sessions. So in terms of Sessions, this is a view only, but I can see the session information where I've logged in. I can see the client, IP address, and the type of authentication. Notice that this login used Password+MFA. So multifactor authentication, which is a best practice for any mission critical. And for my MFA, I actually use the software MFA, use a app on my phone, and it's just really, really important that for all mission critical accounts in any sort of computational environment, but particularly data, that you will enable MFA. Now, in addition to this view, if you go to the classic console, you can see Sessions as well. And it's pretty much an identical view. So you can just manage the session information from a viewpoint here. So you have session information which is an aspect of managing Security in [Snowflake](../../Skills/Data%20Science/Snowflake.md) DB.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (1)
> **Env Vars:** mfa (4)
> **Definitions:** is a  (2), is an  (1)
> **UI Navigation:** go to (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Implement SnowflakeDB policies](https://www.linkedin.com/learning/learning-snowflakedb/implement-snowflakedb-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/implement-snowflakedb-policies?u=76281980&t=0)** - [Instructor] In addition to session information in the account section of the classic console, in terms of security another aspect that you would generally be using any sort of production situation, and I just basically made a fake one for demonstration, is policies. So you would restrict, typically, your mission critical data behind multiple policies. And it's just, again, pretty straightforward to create. You give a name, an allowed IP address blocked, and comment if you want. And so, here I have a policy and then when you create it you have to take the step of activating it. So if I activate this policy, then this policy is now active and then I can deactivate the policy if I want to as well. And you can see the information here. Now, this is an object that you can also see on Snow site. So if I go over to Security and I go back to Policies and I just refresh this, of course, I activated it and deactivated it so if I could activate it from here, and there it would be active as well. And then, it is active and available. I could edit this policy if I wanted to, and I could drop the policy so I could deactivate the policy. So, again, pretty straightforward in terms of working with policies and understanding how sessions work. And just for completeness here on the Snow site side, just like on the classic side because this is a trial account, I don't have any billing information. And the organizational information is not really relevant because this is an account set up
>
> **[1:35](https://www.linkedin.com/learning/learning-snowflakedb/implement-snowflakedb-policies?u=76281980&t=95)** by [Snowflake](../../Skills/Data%20Science/Snowflake.md), it's a free trial. This would be, of course, important in any sort of production situation, as well as having notification contacts. Notification contacts are just set up with the free trial.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (1)
> **Definitions:** is an  (2), is a  (1)
> **Prerequisites:** set up (2)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Scenario: Secure data on SnowflakeDB](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=0)** - [Instructor] As with the other sections of this course I've added key links to my associated [GitHub](../../Skills/Software%20Development/GitHub.md) repo. And I want to highlight some of them here. First from the [Snowflake](../../Skills/Data%20Science/Snowflake.md) documentation they have an excellent summary of security features that are available in this section here, the Summary of Security Features. And you're going to want to secure in-depth across all these different domains. And this is going to help you also select your edition. So you can see some security features, for example, around network inside access are only available in business critical, or enterprise editions. And you want to make sure in your security planning that you address all these different categories. So, you know, we looked at users, for example, we didn't look too much at a rollback based security. Again, I have links to that. Some customers do have requirements around that, and that is implementable here. So, if you do, you're going to want to drill into that. In addition to that, I have quite a few customers that have governance requirements, and there's an excellent documentation around governance. Snowflake is highly compliant for HIPAA, SoCs, and PCI, various governance, used it with a lot of my customers. But, again, you're going to drill into the specific use case. Speaking of use cases, I want to introduce another aspect of the Snowflake documentation called Patterns. And their pattern here on network architecture is excellent. So just, in general, securing at the network boundaries is part of the security implementation for any Snowflake usage.
>
> **[1:35](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=95)** So inside of here, they focus on multi-tiered security and they give patterns, I'll scroll down here, for both [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md), and they are very specific in terms of the most common use case. So what they're talking about here is the different security perimeter boundaries enforced by policies as we just looked at around Snowflake itself. And then, if you have associated blob containers, which is a real common scenario, and if you have associated applications, either on desktops or outside the boundary of Azure, in this case, what are best practices for securing? In addition to the Azure explanation here, this white paper has explanation for AWS, using tools like AWS PrivateLink, and VPCs, which are, you know, really commonly used in conjunction with Snowflake policies. So again, in general, the Snowflake Patterns white papers are super useful. So I use them all the time, and I have particularly used this one. So I wanted to call your attention to it when you are planning and implementing your security for Snowflake DB.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (8), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** aws (2), hipaa (1), pci (1)
> **CLI Commands:** aws (2), make (1)
> **Analogies:** for example (2)
> **Tools:** github (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** github repo (1)
> **Definitions:** is a  (1)


### 5. SnowflakeDB Partners and Architectures

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn the Snowflake data life cycle](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=0)** - [Instructor] As we think about patterns and integrations, I am pulling again from the [Snowflake](../../Skills/Data%20Science/Snowflake.md) documentation here. This is a great graphic showing the data lifecycle, and that's really what we organize our services around. So you can see that we start with organizing data by creating [Databases](../../Skills/Software%20Development/Databases.md), schemas, and tables, and then we store data, we insert into our tables, then we query, and then we're going to work with our data, update, merge or delete. And we might be cloning our tables, schemas and databases. And then we could be removing data. In some scenarios data's never removed, it's just marked as not current or active, but if we need to remove it, truncate table, drop table, drop schema, or drop database. When we think about this, this can be accomplished in as simple as using anti-[SQL](../../Skills/Data%20Science/SQL.md) commands, or we can use some of the tools available in Snowflake, or in some of our hosting cloud partners. Now, to show you some example architectures to get you thinking about this, let's look at our first one here. This is an example of a data pipeline implemented on the Amazon platform. So you can see Snowflake DB is the data warehouse of record on the right side here and it includes multiple tables. And this is a typical sort of pattern where we have our staging table, which we've seen earlier in this course. And in this case our tables are marked as transient. Do you remember transient versus temporary? The difference is, of course,
>
> **[1:33](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=93)** temporary is persistent for the session, transient is until dropped, but it's different than a permanent, which is the default table in that it does not have the fail-safe which is built-in to the permanent. It's cheaper too. So staging table, error table, and production table, which would be permanent. Now, we integrate our Snowflake instance here with other Amazon services. So Kinesis for piping, S3 Buckets for storage, and then we have a load process that runs on [EC2](../../Skills/DevOps/Amazon%20EC2.md) which is the VMs and a notification with SNS. So we have a Snowflake File Loader written in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), a validator written in Python, a transformer written in Python, and then we have a file manager that's written in either Python, [Java](../../Skills/Software%20Development/Java.md), or Node JS. And the entire set of services consists of the pipeline. This is a really common kind of pattern. The only thing that I would say that I'm starting to do differently is I'm implementing at the compute layer instead of EC2 VMs, [Kubernetes](../../Skills/DevOps/Kubernetes.md) instances of Docker container images. Now, if we look at an example on [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md), it's similar that we have Snowflake being the data warehouse, sort of the center of the architecture here, but we have integrations both with [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Services and partners, which is again another pattern. So in this particular case, we're ingesting [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md) into the Azure Data Factory service. We're using Azure Blob Storage and Data Lake storage as our first storage location. We are directly sending some of that Blob storage
>
> **[3:11](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=191)** into Snowflake on Azure. However, we're doing other types of processing using both Azure machine learning and [Azure Databricks](../../Skills/Data%20Science/Azure%20Databricks.md) or HDInsight for Spark processing. There we're utilizing the Databricks Spark connector for Snowflake so that we can then process that data and then use [Power BI](../../Skills/Data%20Science/Microsoft%20Power%20BI.md) for our visualizer through a data gateway. Or we could alternatively use some of the partner ecosystem visualizers, such as [Tableau](../../Skills/Data%20Science/Tableau.md). Notice also on the left side we have partner ecosystem for the ingest. So rather than writing all these processes, we could use partners such as Fivetran for streaming, for example. So again, the real world of Snowflake, in my experience as a software architect, often is architectures such as these two shown here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (9), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (5), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [Databases](../../Skills/Software%20Development/Databases.md) (2), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (2)
> **CLI Commands:** python (4), node (1), docker (1)
> **Env Vars:** ec2 (2), sql (1), sns (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** such as (3), for example (1)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)

#### [Use SnowflakeDB Data Marketplace](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980&t=0)** - [Instructor] In addition to the integrations that we've been discussing in this course, I would be remiss if I didn't talk about two rich integration points within [Snowflake](../../Skills/Data%20Science/Snowflake.md) in a little more detail. In Snowsight here I'm under the data section under the marketplace. I've pulled up the filter for free data and then filtered for COVID. I mentioned earlier in the course that I had pulled in this data set here and let me just pull in another data set to show you the process to show you how this works. Now some of this data is premium, but in this case, this is free. So when you would be working with the data you can see the information about it here and you can see a usage example. So I'm actually just going to copy this and I'm going to get the data. So what this does is this makes this data available for me to work with in my Snowflake instance using my virtual warehouse. And now I can query the data and here are some of the use cases. And again, I have to make in the right context here. I think I am. We'll find out in a second. Let me go ahead and query this. So the query is compiling, and again, I'm in Snowsight. So I have the rich visualization here as well as the ability to chart. So using these data integrations is sort of the first level of working with this. What is becoming more and more a situation
>
> **[1:34](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980&t=94)** with my clients is clients are starting to either purchase data or they are monetizing their data. They're becoming a provider. So this is an area that Snowflake has really rich integration. And I would urge you to explore. The data marketplace is only available in Snowsight. It is not available here in the classic console. If you click on this button it tells you that you will have to go over to Snowsight in order to access this functionality.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (3)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** covid (1)
> **Cross-References:** earlier in (1)
> **UI Navigation:** click on (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Use SnowflakeDB Partner Connect](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-partner-connect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-partner-connect?u=76281980&t=0)** - [Instructor] So another integration is through services and these services are independent third-party vendors. They're not [Snowflake](../../Skills/Data%20Science/Snowflake.md) DB, and they often provide services around what I call the ingest, or the output of your pipeline. So ETL, data cleansing, [Data Validation](../../Skills/Software%20Development/Data%20Validation.md), streaming, or visualization, and they have a rich set of partners. These are only available in the classic console. They're not available in Snowsight. One that I'm familiar with is Matillion and you can see we've got two options here. We've got a data loader, and then we have Matillion ETL, which is a full set of services for complex ETL management. So let's go ahead and select that. And let's associate that with my little sample database here and let's connect. And notice that I have a partner account that's created and ready to be activated, and we can activate this, and this takes us out to the Matillion website.
>
> **[1:06](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-partner-connect?u=76281980&t=66)** And you can see that we have connection here inside and I'll just select a table. And we're basically just looking at a default view and this is the rich interface. It's a graphical user interface for ETL that is designed to work with Snowflake along with other cloud native data warehouses and tools and just done a lot of work with them over the years. And they have a rich set of components, visual interface, and it's just a tool set that has a great integration along with some of the other partners. Now inside of here, I'm going to go back to Snowflake and I'm going to go ahead and show you that in the account, under users, we have a Matillion user. So the security and other authorization has been set up through this partner connection. So again, when looking for ingest partners or visualization partners using the classic console, it's a great place to start because these have been optimized to work with Snowflake.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (4), [Data Validation](../../Skills/Software%20Development/Data%20Validation.md) (1)
> **Env Vars:** etl (4)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Scenario: Design and build solutions with SnowflakeDB](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=0)** - [Narrator] To kind of end out our discussion of architectures and patterns, I'm going to return to [Snowflake](../../Skills/Data%20Science/Snowflake.md)'s pattern section, and just go through one so you can kind of understand how much information we have here. So this is Ingestion. So micro-batches, which is a really common use case. And, again, very concise, nine pages long. So talks about Ingestion patterns. And this is a paper in a series. And this is talking about how to use the Snowpipe and Snowpipe architecture. And it tells you when to use it, so supported in all three clouds. Then it tells you in what circumstances to use it here. So if you have to have the information come in order then you cannot use it. You'd have to use something like Kafka. And it has to be a situation where you don't require synchronous callback. So confirmations, updates to the source data is appended rather than updates to existing files. If you wish to perform simple transforms such as column reordering, et cetera. So here it shows the pattern details. So the architecture through using the Snowpipe. And then it shows the steps basically goes through and links out to best practices. So the file prep, the file detection, the Snowpipe Ingestion, and then the pattern example. This is a retail company. They want weather reference data loaded into Snowflake automatically. And they talk about integration with another AWS service [IoT](../../Glossary/Concept/IoT.md) core. This is for facilitation of messages in small formats
>
> **[1:36](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=96)** in the event type formats in protocols such as MQTT, for example. So here that goes in to very good detail about the Ingest preparation. And in this case, we're using [JSON](../../Skills/Web%20Development/JSON.md) data. And it tells us details that are important about like when we would split file sizes, for example. So it's really detailed. And, again, I'm not going to go through the entire thing, but I would tell you that the first place that I would go when I was looking for architecture, I would go to the Pattern library here. And it's just got tons of content by industry, workload, department, content type, and then has even translated content. So I will continue to add architectural information out on my [GitHub](../../Skills/Software%20Development/GitHub.md) as well. But I think this is a very rich source of information and I definitely recommend going here first when you're trying to get architectural patterns for your Snowflake workloads.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (3), [IoT](../../Glossary/Concept/IoT.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Definitions:** is a  (4)
> **Analogies:** such as (2), for example (2)
> **Env Vars:** aws (1), mqtt (1), json (1)
> **CLI Commands:** aws (1)
> **Tools:** github (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Keep learning](https://www.linkedin.com/learning/learning-snowflakedb/keep-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/keep-learning?u=76281980&t=0)** - [Lynn] We've really just scratched the surface of all that you can do with [Snowflake](../../Skills/Data%20Science/Snowflake.md) DB, so if you, like me, are wanting to learn more, let's learn together, so here are a bunch of resources. On the top of this is my associated [GitHub](../../Skills/Software%20Development/GitHub.md) repo, which I have for basically all my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning courses, and I'll be actively updating as I continue to work with customers on my professional consultancy, and I encourage you to contribute. In addition, top resources are the associated user guide, the Awesome Snowflake DB link list, and the Medium blog for the Snowflake DB company, and again, just jumping out to my GitHub. This is organized around my course, so the sections of the course are the folders in the GitHub, and as I continue to find valuable resources, I will add them here. Thanks for listening in. I'm Lynn Langit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Snowflake](../../Skills/Data%20Science/Snowflake.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Tools:** github (3)
> **CLI Commands:** find (1)
> **Exercise Files:** github repo (1)
> **Speakers:** - [lynn] (1)


## Instructor

- [Lynn Langit](../../Instructors/Software%20Development/Lynn%20Langit.md)

## Skills Covered

- Databases
- Snowflake

## Path Context

### In [Explore a Career in Data Engineering](../../Paths/Cloud%20Computing/Learning%20Paths/Explore%20a%20Career%20in%20Data%20Engineering.md)
← [Introduction to Data Warehouses](../Data%20Science/Introduction%20to%20Data%20Warehouses.md) | **4 of 7** | [PySpark Essential Training- Introduction to Building Data Pipelines](../Data%20Science/PySpark%20Essential%20Training-%20Introduction%20to%20Building%20Data%20Pipelines.md) →

## Appears In

- [Explore a Career in Data Engineering](../../Paths/Cloud%20Computing/Learning%20Paths/Explore%20a%20Career%20in%20Data%20Engineering.md)

## Related Courses

_Courses sharing skills:_

- [Advanced Python- Working with Databases](../Software%20Development/Advanced%20Python-%20Working%20with%20Databases.md) — Databases
- [Advanced Data Engineering with Snowflake](Advanced%20Data%20Engineering%20with%20Snowflake.md) — Snowflake
- [Introduction to Modern Data Engineering with Snowflake](Introduction%20to%20Modern%20Data%20Engineering%20with%20Snowflake.md) — Snowflake
- [Advanced Snowflake- Deep Dive Cloud Data Warehousing and Analytics](../Data%20Science/Advanced%20Snowflake-%20Deep%20Dive%20Cloud%20Data%20Warehousing%20and%20Analytics.md) — Snowflake
- [Database Foundations Intro To Databases](../Data%20Science/Database%20Foundations%20Intro%20To%20Databases.md) — Databases

---

[↑ Back to top](#)