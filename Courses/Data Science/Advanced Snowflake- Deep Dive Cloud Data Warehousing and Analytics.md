---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics
url: "https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics"
duration_minutes: 129
duration: 2h 9m
level: Advanced
updated: 9/6/2022
learners: 71762
skills:
  - Snowflake
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQF8cIq-NfphSg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1661965300072?e=2147483647&amp;v=beta&amp;t=5Dla68dldcmCM5Tljl828t3Cv9rxOmlFcJmgl-ZDQEc"
linkedin_topic: Data Science
learning_paths:
  - '[[Master Data Engineering]]'
prev_courses:
  - '[[Data Engineering- dbt for SQL]]'
next_courses:
  - '[[Complete Guide to SQL for Data Engineering- from Beginner to Advanced]]'
path_nav: '[{"path":"Master Data Engineering","position":7,"total":8,"prev":"Data Engineering- dbt for SQL","next":"Complete Guide to SQL for Data Engineering- from Beginner to Advanced"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - topic/web-development
  - skill/snowflake
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Advanced%20Snowflake-%20Deep%20Dive%20Cloud%20Data%20Warehousing%20and%20Analytics.md)

![Advanced Snowflake: Deep Dive Cloud Data Warehousing and Analytics](https://media.licdn.com/dms/image/v2/C560DAQF8cIq-NfphSg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1661965300072?e=2147483647&amp;v=beta&amp;t=5Dla68dldcmCM5Tljl828t3Cv9rxOmlFcJmgl-ZDQEc)

# Advanced Snowflake: Deep Dive Cloud Data Warehousing and Analytics

> If you’re familiar with the Snowflake platform but need to learn more, this course can help you supercharge your skills. Instructor Janani Ravi deep dives into architecture and advanced concepts. After a concise introduction, Janani gets started with table structures in Snowflake, covering topics like micropartitioning, clustering, and creating permanent, temporary, and transient tables. She expla

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics) | 2h 9m | Advanced | 72K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. Table Structures in Snowflake]]** (8 videos)
- **[[#2. Views in Snowflake]]** (6 videos)
- **[[#3. Optimizing Query Performance]]** (8 videos)
- **[[#4. Working with Semi-structured Data]]** (3 videos)
- **[[#5. Managing Users and Granting Privileges]]** (3 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Advanced Snowflake
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=0)** - [Janani] Hi, and welcome to this course on advanced Snowflake on LinkedIn learning.
>
> **[0:05](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=5)** My name is Janani Ravi, and I'll be your instructor for today.
>
> **[0:09](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=9)** Now, since this is an advanced Snowflake course I assume that you have some basic understanding of how to work with the Snowflake data platform.
>
> **[0:18](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=18)** You have access to a Snowflake account and you know how to work with database schema and Abes in Snowflake.
>
> **[0:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=25)** Let's get started by quickly discussing what exactly Snowflake is, how it's architected and what's unique about it.
>
> **[0:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=34)** How it helps us process huge data sets and performing analytics with just queries in SQL.
>
> **[0:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=41)** Here is how you can define Snowflake.
>
> **[0:44](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=44)** Manage data platform, software as a service.
>
> **[0:47](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=47)** available on all three major cloud platforms.
>
> **[0:50](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=50)** Let's break this down because every bit of this definition is important.
>
> **[0:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=53)** The fact that Snowflake is a managed data platform means that you do not have to install and set up any software or hardware before using Snowflake.
>
> **[1:04](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=64)** You can simply access it as a service.
>
> **[1:06](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=66)** All you have to do to work with Snowflake is create an account log in and get up and running.
>
> **[1:13](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=73)** And since the Snowflake is supported on all three major cloud platforms you can work with Snowflake where data actually is.
>
> **[1:21](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=81)** Now, the question is why would you choose to use Snowflake when there are so many big data technologies out there?
>
> **[1:27](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=87)** Well, Snowflake is easy, intuitive and very very straightforward to use and allows you to perform large scale data analytics using just SQL queries without the overhead of actually managing your data infrastructure.
>
> **[1:42](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=102)** Snowflake is supported on AWS Azure and the Google Cloud Platform which means that you can use a Snowflake with the cloud provider and on the platform of your choice.
>
> **[1:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=114)** You can choose to use Snowflake in the region where your data actually lives.
>
> **[1:59](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=119)** Potentially avoiding moving data to a new provider or a new region.
>
> **[2:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=123)** Even compared to other big data platforms, Snowflake is a true SaaS offering very, very easy to use.
>
> **[2:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=130)** There is absolutely no cluster provisioning and administration, and there is no overhead of managing any kind of physical or virtual hardware.
>
> **[2:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=139)** Snowflake uses its own proprietary SQL engine.
>
> **[2:22](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=142)** There is no software for you to install and manage or configure.
>
> **[2:27](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=147)** Everything is done for you.
>
> **[2:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=148)** All of the updates, maintenance, management, performance tuning, everything is handled by Snowflake.
>
> **[2:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=154)** Snowflake offering is cloud first and cloud only, which means it's a cloud native solution.
>
> **[2:43](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=163)** Snowflake runs only on cloud infrastructure and is supported on AWS Azure and the GCP.
>
> **[2:49](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=169)** You cannot use a Snowflake on your own premises data center even if you want to.
>
> **[2:55](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=175)** Data processing in Snowflake uses cloud based virtual machines for both compute as well as query processing.
>
> **[3:04](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=184)** In addition, all of your data is actually stored in cloud based storage services.
>
> **[3:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=190)** Snowflake's database which is a persistent store of data is actually cloud based storage.
>
> **[3:16](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=196)** Here are the features that Snowflake offers.
>
> **[3:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=199)** It's an enterprise analytics software for large scale data processing.
>
> **[3:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=205)** Snowflake is capable of processing petabytes of data and is great for the construction of EPL pipelines.
>
> **[3:31](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=211)** Unlike many other big data processing platforms Snowflake does not actually build upon an existing big data framework such as Hadoop or Apache Spark.
>
> **[3:42](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=222)** Snowflake in fact runs its own proprietary SQL query engine which makes Snowflake highly performant and very simple and intuitive to use.
>
> **[3:52](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/advanced-snowflake?u=76281980&t=232)** And finally, you'll find that when you use Snowflake you get hooked onto it because of its innovative architecture which is designed to be cloud-first and cloud-native.

> [!info]- Semantic Content
>
> **Env Vars:** sql (4), aws (2), gcp (1), epl (1)
> **Definitions:** is a  (3), means that (2), is an  (1)
> **CLI Commands:** aws (2), apache (1), find (1)
> **Prerequisites:** install (2), set up (1), configure (1)
> **Code Keywords:** let (2), finally, (1)
> **Analogies:** such as (1)
> **Speakers:** - [janani] (1)

#### Snowflake architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=1)** - [Instructor] So how does Snowflake enable big data processing at scale?
>
> **[0:04](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=4)** Well, a large part of it is its unique architecture.
>
> **[0:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=8)** Snowflake's architecture is a hybrid of traditional shared disc and shared nothing database architectures.
>
> **[0:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=14)** I'll explain what I mean in just a bit.
>
> **[0:17](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=17)** Here is a big-picture overview of what the different components in Snowflake look like.
>
> **[0:22](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=22)** Snowflake's architecture is made of three separate layers.
>
> **[0:26](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=26)** At the very bottom, we have the database storage layer.
>
> **[0:30](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=30)** Then we have the query processing layer on top of database storage.
>
> **[0:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=34)** And finally, at the very top, we have the cloud services layer.
>
> **[0:37](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=37)** First, let's turn our attention to the database storage layer.
>
> **[0:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=41)** This is a central data repository for persistent data that is accessible from all of the processing nodes of the platform.
>
> **[0:49](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=49)** This is where Snowflake's architecture is similar to shared disc architectures.
>
> **[0:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=54)** Database is stored on these nodes and compute anywhere can access this data.
>
> **[1:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=60)** The data in Snowflake is stored in its own proprietary internal format.
>
> **[1:06](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=66)** And the format is so structured that it allows for queries to be run very, very fast on this data.
>
> **[1:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=74)** The format is highly optimized for querying.
>
> **[1:17](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=77)** It's compressed.
>
> **[1:18](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=78)** Data is not stored in the raw format.
>
> **[1:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=80)** Instead, it's compressed and then stored.
>
> **[1:22](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=82)** And the format has a columnar structure.
>
> **[1:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=85)** The columnar structure ensures that if you select just a few columns from the underlying data, the entire record with all of the columns is not scanned.
>
> **[1:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=94)** The storage layer cannot be accessed directly by the user, so you can't work with the storage blobs directly.
>
> **[1:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=101)** Instead, you access the data stored in storage using SQL queries.
>
> **[1:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=106)** The important thing to note here is that the storage layer is purely used for data storage.
>
> **[1:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=111)** All of the query processing is performed in the layer above.
>
> **[1:55](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=115)** This is the query processing layer, and the processing or compute units in this layer are virtual warehouses.
>
> **[2:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=123)** The virtual warehouses term is specific to Snowflake.
>
> **[2:06](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=126)** So it's worth an additional bit of explanation.
>
> **[2:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=130)** A virtual warehouse is just a cluster of compute resources, resources such as CPU, memory, and temporary storage, which is used to run all of the query processing operations in Snowflake.
>
> **[2:22](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=142)** Virtual warehouses don't actually store data.
>
> **[2:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=145)** They do have a cache, though, but their main function is to process queries.
>
> **[2:31](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=151)** Each warehouse is actually a massively parallel, independent cluster with one or more compute nodes.
>
> **[2:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=159)** All of the parallelization and optimization of your queries occur within virtual warehouses.
>
> **[2:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=166)** Now, you may have more than one virtual warehouse within your Snowflake account.
>
> **[2:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=171)** Queries that are executed on different warehouses do not compete for the same resources.
>
> **[2:56](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=176)** They're completely isolated from one another.
>
> **[2:59](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=179)** If you want a single query to run faster, having multiple warehouses will not help.
>
> **[3:04](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=184)** In such situations, you should make your warehouse more powerful.
>
> **[3:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=188)** Larger warehouses imply more compute resources for your single query, and that results in faster queries.
>
> **[3:16](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=196)** An important feature of Snowflake's architecture is the fact that the compute and storage layers in Snowflake are completely independent.
>
> **[3:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=205)** The main advantage of this is that you can scale either compute or storage.
>
> **[3:29](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=209)** You don't need to scale both if you don't need to.
>
> **[3:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=212)** For example, if you have a large amount of data, you can scale the data stored by adding additional data storage resources.
>
> **[3:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=219)** You don't need to add additional compute if you're not going to be running many queries.
>
> **[3:44](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=224)** On the other hand, you can scale compute performance by adding additional warehouses without affecting storage.
>
> **[3:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=231)** So if you're storing just a little bit of data but you're running many queries on the data, well, scale compute, not storage.
>
> **[3:59](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=239)** And finally, on the very top, we have the cloud services layer that work alongside compute and storage.
>
> **[4:06](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=246)** These services, and there are a number of different of them, bring together the different components of Snowflake in order to process queries.
>
> **[4:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=254)** The cloud services layer, as you can see, is a collection of services.
>
> **[4:18](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=258)** The services managed in this layer include authentication, infrastructure management, metadata management, query parsing optimization, access control, the works.
>
> **[4:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=268)** Here is a quick look at the basic object hierarchy within Snowflake.
>
> **[4:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=272)** You can see the organization is at the very top.
>
> **[4:35](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=275)** Within an organization, you have accounts.
>
> **[4:38](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=278)** All of your users and roles assigned to users are under this account object.
>
> **[4:45](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=285)** Databases and virtual warehouses are also provisioned within the context of an account.
>
> **[4:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=291)** Within a database, you provision the schema, and the schema holds all other data-related objects.
>
> **[4:59](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=299)** A schema in Snowflake is just a logical grouping of database constructs, such as tables, views, pipes, file formats, stages, the works.
>
> **[5:09](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/snowflake-architecture?u=76281980&t=309)** If you have a database construct, that has to exist within the schema.

> [!info]- Semantic Content
>
> **Definitions:** is a  (5)
> **Code Keywords:** finally, (2), let (1), function (1)
> **Analogies:** such as (2), picture (1), for example (1)
> **Env Vars:** sql (1), cpu (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Getting set up with Snowflake
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/getting-set-up-with-snowflake?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/getting-set-up-with-snowflake?u=76281980&t=1)** - Here we are in our very first demo of this advanced Snowflake course I've logged into a Snowflake free trial account, and I'm currently on the Snowflake classic UI.
>
> **[0:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/getting-set-up-with-snowflake?u=76281980&t=10)** The classic UI is an older user interface but it's more fully featured.
>
> **[0:15](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/getting-set-up-with-snowflake?u=76281980&t=15)** Our very first demo on permanent, temporary and transient tables will perform using the classic UI.
>
> **[0:21](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/getting-set-up-with-snowflake?u=76281980&t=21)** For the remaining demos in this advanced Snowflake course we'll switch to Snowsight, the new UI from Snowflake.
>
> **[0:27](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/getting-set-up-with-snowflake?u=76281980&t=27)** Now I'm working within a Snowflake free trial account.
>
> **[0:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/getting-set-up-with-snowflake?u=76281980&t=28)** You can get your own free trial by going to this URL that you see here on screen.
>
> **[0:35](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/getting-set-up-with-snowflake?u=76281980&t=35)** All of the demos in this course will run on any of the cloud platforms, whether it's Azure, AWS, or GCP.
>
> **[0:42](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/getting-set-up-with-snowflake?u=76281980&t=42)** I happen to be using Azure.
>
> **[0:44](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/getting-set-up-with-snowflake?u=76281980&t=44)** The Snowflake free trial lasts for about a month and it gives you a number of free credits that you can use to test out Snowflake and it's a great feature.
>
> **[0:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/getting-set-up-with-snowflake?u=76281980&t=54)** I've run all of the demos in this course on the enterprise edition of Snowflake.
>
> **[0:59](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/getting-set-up-with-snowflake?u=76281980&t=59)** The enterprise edition has more features than the basic standard edition and is tailored for large scale organizations and enterprises.
>
> **[1:09](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/getting-set-up-with-snowflake?u=76281980&t=69)** Your account should look exactly like this when you log in.
>
> **[1:11](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/getting-set-up-with-snowflake?u=76281980&t=71)** Let's take a look at the databases and you can see that the only databases that have access to are the ones that Snowflake has created and shared with me.
>
> **[1:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/getting-set-up-with-snowflake?u=76281980&t=79)** SNOWFLAKE_SAMPLE_DATE and SNOWFLAKE.
>
> **[1:23](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/getting-set-up-with-snowflake?u=76281980&t=83)** The SNOWFLAKE_SAMPLE_DATE database has been pre-created for every Snowflake account and contains a number of tables that you can query and test out your Snowflake Commands.
>
> **[1:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/getting-set-up-with-snowflake?u=76281980&t=94)** Let's head over to Warehouses and you'll find that one Warehouse has been created by default.
>
> **[1:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/getting-set-up-with-snowflake?u=76281980&t=99)** This is the COMPUTE_WH, which is a extra small type of Warehouse.
>
> **[1:44](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/getting-set-up-with-snowflake?u=76281980&t=104)** It's currently in suspended state.
>
> **[1:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/getting-set-up-with-snowflake?u=76281980&t=106)** This is the smallest size Warehouse possible on a Snowflake.
>
> **[1:50](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/getting-set-up-with-snowflake?u=76281980&t=110)** And this is sufficient for us to run all of the queries in this demo.
>
> **[1:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/getting-set-up-with-snowflake?u=76281980&t=114)** We don't need a larger Warehouse.
>
> **[1:56](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/getting-set-up-with-snowflake?u=76281980&t=116)** Smaller Warehouses consume fewer credits per hour but offer fewer compute resources for processing, but that's sufficient for the purposes of our demo.
>
> **[2:05](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/getting-set-up-with-snowflake?u=76281980&t=125)** Now let's head over to Worksheets.
>
> **[2:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/getting-set-up-with-snowflake?u=76281980&t=127)** Within a Worksheet is where we'll write our queries to create tables and query those tables.

> [!info]- Semantic Content
>
> **Env Vars:** snowflake_sample_date (2), url (1), aws (1), gcp (1), snowflake (1)
> **Code Keywords:** let (3), interface (1), switch (1), default. (1)
> **CLI Commands:** aws (1), find (1)
> **Definitions:** is an  (1), is a  (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - here (1)


### 1. Table Structures in Snowflake

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Micropartitioning and clustering
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=1)** - [Instructor] In order for Snowflake to be able to efficiently process large amounts of data, the design of their table structures is quite critical.
>
> **[0:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=8)** If you had a huge amount of data in petabytes and you stored this within a table in a single contiguous blob, queries run on such tables will likely to be very, very inefficient.
>
> **[0:22](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=22)** If you just have a single blob of contiguous data, your queries will run slowly because they need to process this huge amount of data and queries will be unable to run in parallel on a contiguous blob.
>
> **[0:36](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=36)** Almost every big data processing platform partitions the data that it stores in tables.
>
> **[0:43](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=43)** Now if this partitioning is static, well that helps with query parallelization but static partitioning has its own limitations.
>
> **[0:52](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=52)** Your data may be skewed.
>
> **[0:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=53)** Certain partitions may be very large.
>
> **[0:55](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=55)** Other partitions may be small resulting in slow query performance.
>
> **[0:59](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=59)** In Snowflake, your tables are divided into micro-partitions.
>
> **[1:04](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=64)** These micro-partitions are extremely small partitions automatically managed by Snowflake.
>
> **[1:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=70)** In addition to partitioning, Snowflake also performs data clustering which co-locates related records in a table.
>
> **[1:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=79)** Let's first understand how micro-partitions in Snowflake work.
>
> **[1:23](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=83)** All of your data in Snowflake is automatically divided into micro-partitions.
>
> **[1:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=88)** You just set up the table, micro-partitioning is done for you.
>
> **[1:30](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=90)** You don't need to do anything explicit.
>
> **[1:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=92)** A micro-partition is so called because it's small.
>
> **[1:36](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=96)** Each micro-partition contains only about 50 to 500 megabytes of uncompressed data which means in the compressed format, the data will be even smaller.
>
> **[1:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=106)** The rows and tables are mapped to individual micro-partitions.
>
> **[1:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=111)** And then within each micro-partition, the rows are organized in columnar form.
>
> **[1:56](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=116)** If you have a very large table, that table might contain thousands or even millions of micro-partitions and Snowflake can handle that with ease.
>
> **[2:06](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=126)** Query performance can be improved if you avoid unnecessary scans of micro-partitions while executing queries.
>
> **[2:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=134)** This is why Snowflake stores additional metadata about the rows in each micro-partition such as the range of values for each column, the number of distinct values and any other property that will help with query optimization.
>
> **[2:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=148)** This metadata is used by Snowflake to paralellize queries and to also skip micro-partitions where possible.
>
> **[2:35](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=155)** So what are the benefits of these micro-partitions?
>
> **[2:37](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=157)** Well first, you don't have to do anything.
>
> **[2:40](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=160)** Micro-partitioning is automated.
>
> **[2:42](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=162)** Snowflake takes care of everything for you.
>
> **[2:45](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=165)** Now because these partitions are small, each partition is tiny.
>
> **[2:49](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=169)** This allows for very efficient query pruning and that avoids unnecessary scans of partitions which may not contain the records you need.
>
> **[2:57](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=177)** The column, the storage of your records within a micro-partition, makes your queries more efficient in that only those columns referenced by your query will be scanned.
>
> **[3:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=187)** And finally, the data is stored in an efficient, compressed format.
>
> **[3:11](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=191)** In addition to micro-partitions, Snowflake also supports automated clustering of your data.
>
> **[3:16](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=196)** Clustering is the sorting or ordering of data along natural dimensions then storing this data in tables.
>
> **[3:24](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=204)** When you apply clustering to a table, your data with the same clustering key is co-located.
>
> **[3:31](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=211)** One thing to note is that Snowflake tables are partitioned by default, they are not clustered by default.
>
> **[3:37](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=217)** You need to explicitly add clustering to a table by specifying a clustering key.
>
> **[3:43](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=223)** Once your table is clustered, the records with the same value of clustering key are then co-located.
>
> **[3:50](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=230)** This clustering information can then be leveraged by Snowflake to avoid scanning unnecessary micro-partitions for queries.
>
> **[3:57](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=237)** So anytime you have a query that performs a filtering operation or some kind of range filtering using the clustering key, the performance of those queries will be improved.
>
> **[4:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=248)** Snowflake maintains a bunch of metadata for your clustered tables such as the total number of micro-partitions for a table.
>
> **[4:16](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=256)** It also keeps track of the number of micro-partitions that contain overlapping values for clustering keys.
>
> **[4:23](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=263)** So records that have the same value in the clustering key column, if they're in different micro-partitions, that is considered overlapping values of clustering keys across micro-partitions.
>
> **[4:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=274)** The depth of this overlapping micro-partitions is referred to as clustering depth.
>
> **[4:40](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/micropartitioning-and-clustering?u=76281980&t=280)** One thing to keep in mind is smaller the clustering depth, better the clustering of the table, better the performance of your tables that reference the clustering key.

> [!info]- Semantic Content
>
> **Code Keywords:** static (2), let (1), finally, (1), default, (1), default. (1)
> **Analogies:** such as (2)
> **Warnings:** keep in mind (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Types of tables in Snowflake
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=0)** - [Instructor] Snowflake supports different kinds of tables meant for different use cases.
>
> **[0:06](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=6)** In order to understand how these tables are different, it's important for us to understand how continuous data protection works in Snowflake.
>
> **[0:13](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=13)** Your data can be of three different types stored in different places in Snowflake.
>
> **[0:17](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=17)** We have active data stored within your tables.
>
> **[0:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=20)** Time travel data; this is historical data that you can access.
>
> **[0:24](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=24)** And then finally, we have fail-safe data; this is your backup and disaster recovery.
>
> **[0:29](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=29)** Active data is data that you work with on a day-to-day basis: data in your Snowflake tables that is accessible via the queries that you run, any data definition language updates you made, any data manipulation language updates that you make.
>
> **[0:43](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=43)** When you're working with active data, you'll constantly be updating this data.
>
> **[0:48](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=48)** Now, historical data, that is, data from previous time periods, can be accessed at any point in time in Snowflake within a certain predefined period, and this predefined is referred to as the data retention period.
>
> **[1:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=63)** Time travel allows you to access the state of your data as it existed at some point in time, and this way you can use time travel to restore data-related objects that may have been deleted.
>
> **[1:15](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=75)** You can use time travel for backups of data from important points in time in the past, and also, time travel can be used to analyze data usage over time.
>
> **[1:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=85)** The data retention period that your table supports for time travel is something that you configure on a table.
>
> **[1:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=92)** And finally, data stored in fail-safe is a backup that is separate from time travel.
>
> **[1:38](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=98)** Once your data has moved beyond the time travel retention period, it enters fail-safe.
>
> **[1:44](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=104)** Fail-safe ensures that your data is accessible and recoverable, even in the case of security breaches or system failures.
>
> **[1:52](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=112)** Unlike time travel, fail-safe is not configurable; it's a non-configurable seven-day period during which Snowflake can recover historical data.
>
> **[2:02](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=122)** You enter fail-safe after your time travel period has ended.
>
> **[2:06](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=126)** If you seek to recover data in the fail-safe period, well, that data may take hours or days to recover, and you need to explicitly contact Snowflake.
>
> **[2:16](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=136)** Snowflake supports three different kinds of internal tables.
>
> **[2:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=139)** We have permanent tables, temporary tables, and transient tables.
>
> **[2:24](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=144)** These tables differ based on where they're available, their time travel retention period, and their fail-safe period.
>
> **[2:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=152)** Let's talk about permanent tables first; those are the easiest to understand.
>
> **[2:36](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=156)** These are any normal tables that you created, and data in those tables will persist till you explicitly drop that table.
>
> **[2:43](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=163)** Permanent tables allow you to configure the time travel retention period.
>
> **[2:48](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=168)** The period can be anywhere from zero to 90 days for all editions other than the Standard Edition of Snowflake.
>
> **[2:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=174)** In the Standard Edition of Snowflake, time travel period can only be zero or one.
>
> **[2:59](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=179)** Zero means time travel is disabled.
>
> **[3:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=181)** The fail-safe period for permanent tables is seven days.
>
> **[3:06](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=186)** Next we have temporary tables.
>
> **[3:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=188)** Temporary tables are only valid in the session in which they are created; the data is persistent only for the remainder of the current session.
>
> **[3:16](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=196)** The maximum time travel available for temporary tables is just one day, and there is no fail-safe option for temporary tables.
>
> **[3:24](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=204)** In the case of transient tables, they're like permanent tables in that the data in those tables persist till the table is explicitly dropped by the user.
>
> **[3:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=214)** However, the maximum time travel available for transient tables is just one day, and there is no fail-safe available.
>
> **[3:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=221)** So how should you choose which kind of table you are to use to store your data?
>
> **[3:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=226)** Any data that is repeatedly queried, critical data meant for long term use, such data should be stored in permanent tables.
>
> **[3:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=234)** If your data is repeatedly queried but it's non-critical and having a backup of that data is less important, such data can be stored in transient tables.
>
> **[4:04](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=244)** And finally, if your data is temporary or transitory data meant for short-term use, store them in temporary tables.
>
> **[4:13](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=253)** One last note before we move on to the demo, Snowflake also supports external tables, so Snowflake can query data stored in external cloud storage outside of Snowflake.
>
> **[4:24](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=264)** Now, this cloud storage could be S3 on Amazon, Azure Data Lake, or Google Cloud Storage.
>
> **[4:30](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=270)** With external tables, your data will continue to reside on this external cloud storage service but can be queried from within Snowflake.
>
> **[4:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/types-of-tables-in-snowflake?u=76281980&t=279)** Here, read queries are allowed; updates to the data are not allowed.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (3), let (1), continue (1)
> **Prerequisites:** configure (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Creating permanent tables
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=1)** - [Instructor] In this demo that spans the next few videos, we'll see how permanent, temporary, and transient tables work, and understand their different characteristics.
>
> **[0:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=10)** Now, when we work within our worksheet, I'm going to give the worksheet a name so that we know exactly where we are.
>
> **[0:15](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=15)** This first worksheet, I'm going to call Production because I'm going to create, you can hypothetically imagine, tables which are meant for production.
>
> **[0:24](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=24)** First, let me go ahead and create a database called ECOMMERCE_DB.
>
> **[0:29](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=29)** You can run this command by clicking on the run button off to the top-left, or by hitting command + enter or control + Enter with your cursor positioned over the Snowflake command you want to run.
>
> **[0:40](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=40)** Once we've created this database, observe on the top-right of the worksheet, we are currently running with role ACCOUNTADMIN.
>
> **[0:47](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=47)** We are using the COMPUTE_WH to run our queries.
>
> **[0:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=51)** That's the only warehouse we have.
>
> **[0:52](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=52)** We are working within the ECOMMERCE_DB database in the public schema.
>
> **[0:57](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=57)** Let's make sure we are using the ECOMMERCE_DB based in the command use database.
>
> **[1:02](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=62)** ECOMMERCE_DB, run it.
>
> **[1:04](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=64)** Once the database has been created and that we are currently using that database, you should find the database listed on the left navigation pane of your worksheet.
>
> **[1:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=74)** Hit refresh in order to view this database.
>
> **[1:16](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=76)** And you can see that we have the ECOMMERCE_DB there.
>
> **[1:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=80)** The database is ready for us to use.
>
> **[1:23](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=83)** Let's now run a query to see which warehouse database and schema we are currently using.
>
> **[1:29](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=89)** Select the current warehouse, current database, and current schema.
>
> **[1:33](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=93)** These are built in-functions available in Snowflake.
>
> **[1:36](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=96)** We are running within the COMPUTE_WH within the ECOMMERCE_DB and the public schema in that database.
>
> **[1:43](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=103)** We are now ready to create our very first table, which is going to be a permanent table.
>
> **[1:47](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=107)** This table is called IN_PRODUCTION.
>
> **[1:50](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=110)** Observe on line seven when I say create or replace table IN_PRODUCTION, I have no qualifier before the name of the table IN_PRODUCTION.
>
> **[2:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=120)** This means that this is a permanent table.
>
> **[2:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=123)** A permanent table is available across sessions and users till it's explicitly dropped.
>
> **[2:09](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=129)** You can also configure a longer retention period for permanent tables.
>
> **[2:13](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=133)** We won't really worry about configuring and understanding retention periods here.
>
> **[2:18](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=138)** That's for a later demo in this course.
>
> **[2:21](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=141)** Imagine that this table contains mobile phones that this e-commerce site sells.
>
> **[2:26](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=146)** And these are mobile phones that are launched in the actual catalog.
>
> **[2:29](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=149)** They are in production.
>
> **[2:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=152)** Go ahead and hit command + enter, and you can see that this table has been successfully created.
>
> **[2:37](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=157)** I can tell what type of table this is if I query the INFORMATION_SCHEMA.TABLES available in Snowflake.
>
> **[2:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=166)** I've selected the table name, table type, whether the table is transient or not, the retention time for the table, and whether auto-clustering has been turned on from INFORMATION_SCHEMA.TABLES for a table which has a name like IN_PRODUCTION.
>
> **[3:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=181)** That's our table right here.
>
> **[3:02](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=182)** Within the query results, notice that the table type is BASE TABLE, which represents a permanent table in Snowflake.
>
> **[3:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=190)** You can see that IS_TRANSIENT is also no.
>
> **[3:13](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=193)** The retention time of this particular permanent table is one day, which means that time travel, that is historical data, is available for one day on this table.
>
> **[3:24](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=204)** We'll talk much more about time travel in a later demo.
>
> **[3:27](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=207)** Let's move on and let's now insert some data into this IN_PRODUCTION permanent table.
>
> **[3:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=214)** These are the mobile phones that our site is selling right now.
>
> **[3:36](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=216)** That's why they are IN_PRODUCTION Go ahead and hit command + enter or control + enter.
>
> **[3:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=221)** And these seven rows have been inserted in our table.
>
> **[3:45](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=225)** Permanent tables are, well, permanent.
>
> **[3:47](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=227)** They can be queried across sessions, and can be queried across users provided the users have access to that table.
>
> **[3:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=233)** Let's run a simple select star query, and we are the owners of this table, and we are able to query and view the results of this table.
>
> **[4:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=241)** We can also view attributes of the table by running the describe table command.
>
> **[4:06](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-permanent-tables?u=76281980&t=246)** Describe table IN_PRODUCTION will give us all of the columns in this table and the types of the different columns, their default values, and a number of other details.

> [!info]- Semantic Content
>
> **Env Vars:** in_production (7), ecommerce_db (6), compute_wh (2), information_schema (2), tables (2)
> **Code Keywords:** let (6), public (2), type, (1)
> **Definitions:** means that (2), is called (1), is a  (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** imagine (2)
> **UI Navigation:** select the (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Creating temporary tables
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=1)** - [Instructor] In order to create and work with temporary tables, I'm going to open up a new worksheet.
>
> **[0:05](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=5)** And I can do this by clicking on this plus tab here.
>
> **[0:09](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=9)** Now, every worksheet in Snowflake is a separate session.
>
> **[0:13](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=13)** And if you remember, temporary tables are tables that are valid only within the session where they've been created.
>
> **[0:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=19)** So opening up a new worksheet will allow us to create a temporary table within a different session.
>
> **[0:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=25)** I'm going to call this worksheet, testing.
>
> **[0:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=28)** We'll create the temporary table within the same database and schema that we were working with before.
>
> **[0:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=32)** We'll use the ECOMMERCE_DB and the public schema within that DB.
>
> **[0:37](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=37)** And you can confirm this by looking on the top right.
>
> **[0:40](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=40)** We are in the account admin role, compute warehouse, ECOMMERCE_DB public schema.
>
> **[0:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=46)** Now let's create a temporary table.
>
> **[0:48](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=48)** Remember, our temporary table is only valid within the current session, and it is a table that you typically use for testing.
>
> **[0:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=54)** That's why we are within the testing worksheet.
>
> **[0:56](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=56)** The create table command is very similar to how we create permanent tables.
>
> **[1:02](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=62)** The only difference on line three, notice I have the keyword temporary before table.
>
> **[1:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=68)** This keyword temporary is what makes this table a temporary table, rather than a permanent or a transient table.
>
> **[1:15](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=75)** Let's run this code.
>
> **[1:16](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=76)** This table was successfully created.
>
> **[1:17](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=77)** The table has the same structure as our IN_PRODUCTION table.
>
> **[1:21](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=81)** The IN_TESTING table is what we'll use for testing.
>
> **[1:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=85)** Now, if you refresh the left navigation pane, within the test worksheet, you should find within ECOMMERCE_DB and the public schema.
>
> **[1:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=94)** You'll find that there are two tables listed and accessible within the session.
>
> **[1:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=99)** The first is the IN_PRODUCTION table.
>
> **[1:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=101)** It's a permanent table.
>
> **[1:42](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=102)** So it's available across all sessions and across all users who have privileges till the table is explicitly dropped.
>
> **[1:49](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=109)** The IN_TESTING table is a temporary table, and available only within this session within this worksheet.
>
> **[1:57](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=117)** How do we confirm that this is indeed a temporary table?
>
> **[2:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=120)** Let's run the same query where we query the table name, table type, whether the table is transient or not, and other details from INFORMATION_SCHEMA.TABLES.
>
> **[2:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=130)** The INFORMATION_SCHEMA gives us metadata information about Snowflake objects.
>
> **[2:15](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=135)** Our query is for all tables that starts with the IN_ prefix.
>
> **[2:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=139)** You can see that on line 18.
>
> **[2:21](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=141)** Let's take a look at the results here.
>
> **[2:23](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=143)** Observe that the IN_TESTING table has table type local temporary.
>
> **[2:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=148)** This is different from the IN_PRODUCTION table which has table type equal to base table.
>
> **[2:33](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=153)** That's a permanent table.
>
> **[2:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=154)** IN_TESTING is a temporary table, and it's local to this session.
>
> **[2:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=159)** Observe that transient is set to null, and it has no retention time.
>
> **[2:43](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=163)** Retention time is by default zero.
>
> **[2:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=166)** Let's insert a few records into this testing table.
>
> **[2:48](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=168)** This IN_TESTING table is available in this worksheet for insertion, as well as queries.
>
> **[2:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=174)** Now that we've inserted a few records, we can run a simple SELECT * query to query the records available in our temporary local table.
>
> **[3:04](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=184)** And this query ran successfully within the testing worksheet.
>
> **[3:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=188)** Our temporary table is accessible here, but what about our permanent table IN_PRODUCTION?
>
> **[3:13](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=193)** Well, that's also accessible within this different session.
>
> **[3:17](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=197)** Remember, permanent tables are accessible across sessions, across users, provided you have the privileges.
>
> **[3:24](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=204)** So when I query the production table, I can see the results here on screen.
>
> **[3:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=208)** Let's prove that our IN_TESTING table is indeed local to this session.
>
> **[3:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=212)** Switch over to the production worksheet.
>
> **[3:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=214)** This is a separate session.
>
> **[3:37](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=217)** Now I'm going to expand the left navigation pane and hit refresh.
>
> **[3:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=221)** And you'll observe that within the ECOMMERCE_DB public schema, you will not find that IN_TESTING table.
>
> **[3:48](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=228)** You can only see the production table.
>
> **[3:50](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=230)** You cannot find the testing table in here.
>
> **[3:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=233)** Let's be a hundred percent sure of this.
>
> **[3:55](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=235)** I'm going to head over to the editing window and run a query, SELECT * FROM IN_TESTING.
>
> **[4:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=241)** You can see this on line 36.
>
> **[4:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=243)** When I run this query, I get a compilation error.
>
> **[4:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=247)** Object IN_TESTING does not exist or not authorized.
>
> **[4:11](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=251)** It's definitely not an authorization problem, because our current logged in user has created both tables.
>
> **[4:17](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=257)** However, as far as this particular session within the production worksheet is concerned, IN_TESTING, well, it does not exist.
>
> **[4:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=265)** That's because it's a temporary table, local to a different session.
>
> **[4:29](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=269)** The testing worksheet has that session.
>
> **[4:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=272)** So if you head over to testing, your temporary table will be accessible once again.
>
> **[4:37](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=277)** In fact, let's try cloning the temporary table.
>
> **[4:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=281)** Clone will copy over the structure and contents of the IN_TESTING table.
>
> **[4:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=286)** And the name of the clone is IN_TESTING_CLONE.
>
> **[4:50](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=290)** Now, when we run this, you'll see an error.
>
> **[4:52](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=292)** And the error is because, we are trying to clone a temporary table to a permanent table.
>
> **[4:58](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=298)** And that's not allowed.
>
> **[4:59](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=299)** You can however, clone a temporary table to a transient table.
>
> **[5:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=303)** Well, we haven't studied transient tables yet.
>
> **[5:06](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-temporary-tables?u=76281980&t=306)** We'll come to that next.

> [!info]- Semantic Content
>
> **Env Vars:** in_testing (11), ecommerce_db (4), in_production (4), information_schema (2), select (2)
> **Code Keywords:** let (8), public (4), type, (1), switch (1), this. (1)
> **Definitions:** is a  (5)
> **CLI Commands:** find (4)
> **SQL:** select (2)
> **Speakers:** - [instructor] (1)

#### Creating transient tables
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=1)** - [Instructor] In order to create transient tables and understand how they work, let's open up a new worksheet, that is a new session within our Snowflake console.
>
> **[0:09](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=9)** I'm going to call this worksheet Beta.
>
> **[0:12](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=12)** Imagine this is a beta testing worksheet.
>
> **[0:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=14)** And within this, we'll create transient tables for the purposes of beta testing in our eCommerce site.
>
> **[0:22](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=22)** Now, we'll continue working with the ECOMMERCE_DB.
>
> **[0:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=25)** So I have the used database ECOMMERCE_DB run this.
>
> **[0:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=28)** This has executed successfully.
>
> **[0:30](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=30)** I'm now ready to create a transient table, and you'll see that the CREATE TABLE command is very similar to the CREATE TABLE commands that we've used earlier.
>
> **[0:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=39)** Observe though that on line 3, I've used the keyword TRANSIENT before TABLE.
>
> **[0:45](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=45)** This keyword TRANSIENT is what makes this IN_BETA table a transient table.
>
> **[0:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=51)** A transient table is available to all users with the appropriate privileges till their table is explicitly dropped.
>
> **[0:58](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=58)** So they're like permanent tables.
>
> **[1:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=60)** They differ from permanent tables in that they do not have a fail safe period.
>
> **[1:05](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=65)** The time travel retention period is a maximum of one day for transient tables, beyond which data deleted is not recoverable using fail safe in Snowflake.
>
> **[1:17](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=77)** Let's see what the characteristics of a transient table are.
>
> **[1:21](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=81)** Let's run are SELECT query on this metadata INFORMATION SCHEME TABLES.
>
> **[1:27](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=87)** And you can see that for our transient table, the table type is BASE TABLE.
>
> **[1:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=92)** So observe the IN_BETA table on row 1.
>
> **[1:35](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=95)** The table type says BASE TABLE, but IS_TRANSIENT is true.
>
> **[1:40](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=100)** So under IS_TRANSIENT, you see YES.
>
> **[1:42](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=102)** And you can see the RETENTION_TIME is 1 by default.
>
> **[1:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=106)** Observe that the characteristics of the transient table is very much like our permanent IN_PRODUCTION table, except that IS_TRANSIENT is true.
>
> **[1:56](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=116)** Observe that we cannot see the IN_TESTING table.
>
> **[1:58](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=118)** That is temporary and local to the testing worksheet.
>
> **[2:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=123)** Let's populate this transient table with a few beta testing values.
>
> **[2:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=127)** Once again, all of these are mobile phones.
>
> **[2:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=130)** You can go ahead and query the transient table as well.
>
> **[2:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=134)** And this query will also be successful.
>
> **[2:16](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=136)** Remember, transient tables are available to all users that have privileges.
>
> **[2:21](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=141)** Let's switch over to the Production worksheet, which is a different session.
>
> **[2:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=145)** And within the Production worksheet, you should be able to view and query the transient table.
>
> **[2:31](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=151)** So a SELECT * FROM IN_BETA will work here.
>
> **[2:35](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=155)** You can see that this ran through successfully.
>
> **[2:38](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=158)** So transient tables are available across sessions.
>
> **[2:42](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=162)** Back to our Beta worksheet, I'm going to try and clone this transient table.
>
> **[2:48](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=168)** So I'm going to create a clone named IN_BETA_CLONE by cloning the contents and structure of the IN_BETA table.
>
> **[2:57](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=177)** Go ahead and run this command, and you can see the error right there on screen.
>
> **[3:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=181)** Transient object cannot be cloned to a permanent object.
>
> **[3:06](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=186)** Snowflake does not allow you to create permanent tables from transient tables.
>
> **[3:12](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=192)** However, you can create temporary tables from transient tables, and that's what we'll do next.
>
> **[3:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=199)** I'm going to create a temporary table called BETA_TO_TESTING by cloning the IN_BETA table.
>
> **[3:26](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=206)** Observe on line 32, I have CREATE OR REPLACE TEMPORARY TABLE, indicating that my clone table is a temporary local one.
>
> **[3:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=214)** And this one you can see is successfully created.
>
> **[3:37](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=217)** So you can create temporary tables from transient ones.
>
> **[3:42](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=222)** Before we conclude this demo, let's take a look at what tables are accessible in which worksheet.
>
> **[3:47](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=227)** Now I've switched over to the Production worksheet, and I've hit Refresh on the left navigation pane.
>
> **[3:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=233)** Observe that the permanent table, IN_PRODUCTION, and the transient table, IN_BETA, are both available here.
>
> **[4:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=241)** None of the temporary tables can be accessed in this session because they were not created in this session.
>
> **[4:06](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=246)** Let's head over to the Testing table.
>
> **[4:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=248)** Here, we have created a temporary table.
>
> **[4:11](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=251)** So if you hit Refresh, you'll see that our permanent, transient, and the temporary IN_TESTING table is available within this session.
>
> **[4:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=260)** The cloned temporary table, BETA_TO_TESTING, was not created in this session, and so it's not available in this session.
>
> **[4:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=268)** And finally, let's head over to our Beta worksheet, and let's hit a Refresh and see what tables are accessible here.
>
> **[4:35](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-transient-tables?u=76281980&t=275)** Well, of course, the permanent table IN_PRODUCTION is accessible, as is the transient table, IN_BETA, also the temporary table, BETA_TO_TESTING.

> [!info]- Semantic Content
>
> **Env Vars:** in_beta (7), table (6), create (3), is_transient (3), in_production (3)
> **Code Keywords:** let (9), this, (1), continue (1), this. (1), default. (1)
> **Definitions:** is a  (5)
> **SQL:** create table (2), select (2)
> **Code Identifiers:** ecommerce (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Configuring data retention time
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=1)** - [Lecturer] In this demo, that'll span the next few videos, we'll work with time travel in Snowflake.
>
> **[0:05](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=5)** Time Travel and Snowflake gives you access to historical data stored within your table within a certain time period.
>
> **[0:13](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=13)** And this time period is referred to as the retention time period.
>
> **[0:17](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=17)** Now I'm working within my production worksheet.
>
> **[0:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=20)** I'm going to run a query to take a look at the metadata for my in production table.
>
> **[0:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=25)** This is the table that I had created earlier in this course.
>
> **[0:29](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=29)** When you look at this metadata, observe the retention time is set to one.
>
> **[0:33](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=33)** This is the default retention time for a permanent table created in Snowflake.
>
> **[0:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=39)** What does this retention time mean?
>
> **[0:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=41)** Any changes you make to the data in this table will be backed up for a period of one day.
>
> **[0:48](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=48)** And you can access historical data going back one day.
>
> **[0:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=51)** You can actually change this retention time.
>
> **[0:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=54)** Once the table has been created you can also specify it at the time of creation.
>
> **[0:58](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=58)** I'm now going to set the retention time in days to be equal to 120 days.
>
> **[1:02](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=62)** And this will give me an error because the retention time for a permanent table can be a maximum of 90 days in Snowflake.
>
> **[1:11](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=71)** And the error gives us very precise instructions as to why this is wrong.
>
> **[1:15](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=75)** In case you do not want the data that you've stored in a Snowflake table to be backed up?
>
> **[1:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=80)** Well, you can disable time travel by setting the data retention time to be equal to zero.
>
> **[1:26](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=86)** That's what I've done for my in production table.
>
> **[1:29](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=89)** Now, if I make any changes to this table, I won't have access to historical data.
>
> **[1:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=94)** You should know it's possible to disable time travel, but you may not want to do that because having access to historical data is actually useful.
>
> **[1:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=101)** Let's set our data retention time to seven days which means historical data for seven days will be available to us.
>
> **[1:49](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=109)** Why are time travel queries?
>
> **[1:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=111)** Let's once again query the metadata for the tables that we've created.
>
> **[1:55](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=115)** And we can use the results of the query to confirm that yes, indeed, our data retention time for the in production table is now seven days, which is within the valid range of zero to 90.
>
> **[2:06](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=126)** Now with transient tables you can choose to disable time travel by setting the data retention time to zero days.
>
> **[2:12](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=132)** That's what I've done here.
>
> **[2:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=134)** Or, the maximum data retention time can be the default, one day.
>
> **[2:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=139)** If I try to set the data retention time for my in data table to seven days, that will result in an error.
>
> **[2:26](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/configuring-data-retention-time?u=76281980&t=146)** That's- transient tables can have a maximum data retention period of one day.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), default, (1)
> **CLI Commands:** make (2)
> **Cross-References:** earlier in (1)
> **Speakers:** - [lecturer] (1)

#### Querying historical data
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=1)** - [Instructor] After having configured a data retention time of seven days for our in production table, let's go ahead and query the data in this table, and take a look at what it looks like.
>
> **[0:11](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=11)** Observe that the first two records are of the brand OPPO, that's a brand of mobile phone.
>
> **[0:16](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=16)** You can see that the Google Pixel brand is also available here in this table.
>
> **[0:21](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=21)** Another thing to note, is that there are seven records in this table.
>
> **[0:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=25)** When querying historical data, it's possible to request for data as the data existed, when a particular query was run by query ID.
>
> **[0:35](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=35)** Select last query ID, will there was the query ID for the last query that we ran, which was the select star from in production.
>
> **[0:43](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=43)** You can see this query ID here at the bottom.
>
> **[0:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=46)** Let's go ahead and copy this query ID, you can see that it ends with a 26a, keep that in mind, we'll be using this query ID in our historical query.
>
> **[0:57](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=57)** In the meanwhile, let's delete some data from this table, let's delete those records where brand is equal to OPPO, there were two such records, and when we run the delete command, you can see that two records have been deleted.
>
> **[1:09](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=69)** I'll also update this table, I'm going to set brand is equal to GP, where the brand was originally Google Pixel.
>
> **[1:15](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=75)** So I've shortened Google Pixel to just GP.
>
> **[1:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=79)** Now, the latest data in our active table in production will not contain OPPO records, and will have Google Pixel renamed to GP.
>
> **[1:30](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=90)** And when you run the query, you'll see that we have five rows instead of seven, that's because the two records related to OPPO have been deleted, and the brand Google Pixel is now called GP.
>
> **[1:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=101)** This is on row one.
>
> **[1:43](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=103)** You can query historical data using the at, or before function, here line 11, I'm going to select from the in production table, before the statement corresponding to the ID that I have specified was executed.
>
> **[1:59](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=119)** This ID that I have here corresponds to the statement that I executed on line one, that is select star from production.
>
> **[2:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=127)** The data in our table before that statement was executed contained OPPO, and you can see that the first two records in our result contain OPPO, and there are a total of seven rows in the result.
>
> **[2:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=139)** And if you scroll a bit, you'll see that Google Pixel still has its original brand name, Google Pixel, rather than GP.
>
> **[2:26](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=146)** You can also query historical data based on an offset, relative to the current time.
>
> **[2:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=152)** So I want to select star from in production, at a time instance five minutes before the current time.
>
> **[2:40](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=160)** The offset is always a negative value specified in seconds, and it's usually written as 60 seconds, that is a minute, multiplied by the number of minutes.
>
> **[2:49](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=169)** Now I want to see the data as it looked, at five minutes before my current time.
>
> **[2:55](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=175)** Now the updates that I made to the table, where I deleted OPPO and renamed Google Pixel, were about 10 minutes ago.
>
> **[3:02](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=182)** So even five minutes ago, Google Pixel was called GP, and I have just five records, that is five rows, OPPO is not present.
>
> **[3:11](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=191)** But well, 20 minutes ago?
>
> **[3:13](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=193)** That's a different matter, that's when I hadn't performed any deletes or updates to my table.
>
> **[3:18](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=198)** So when I select star from in production with an offset of 20 minutes, well, you can see OPPO is present here within my query result, and Google Pixel is still called Google Pixel.
>
> **[3:30](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=210)** All of the seven records from the original table were available 20 minutes ago.
>
> **[3:35](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-historical-data?u=76281980&t=215)** Now you can also query historical data based on timestamp, and that's something for you to research, and try on your own.

> [!info]- Semantic Content
>
> **Env Vars:** oppo (9)
> **Code Keywords:** let (4), delete (3), function (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Dropping and restoring tables
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980&t=1)** - [Instructor] If you have Time Travel enabled for a particular table, you can drop that table, and if you're still within the Time Travel retention time, well, you can undrop the table and restore its contents.
>
> **[0:13](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980&t=13)** Let's go ahead and drop the In_Production table.
>
> **[0:17](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980&t=17)** The table was successfully dropped, and we can confirm this by running a Select Star operation.
>
> **[0:23](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980&t=23)** Select Star from In_Production will now give us an error, because that table does not exist anymore.
>
> **[0:31](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980&t=31)** Well, we are still within the seven day retention period for this In_Production table.
>
> **[0:36](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980&t=36)** In fact, we are within a few seconds.
>
> **[0:38](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980&t=38)** I can run Undrop Table In_Production, and the table will be restored.
>
> **[0:43](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980&t=43)** I now confirm that this table has indeed been restored by running a Select Star from In_Production.
>
> **[0:50](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980&t=50)** This should allow us to retrieve the results of this table, and that's indeed the case.
>
> **[0:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980&t=54)** The five rows in the active table are now available to us.
>
> **[0:57](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980&t=57)** Let's now change the data retention time for this table and set it to zero, which means we are going to disable Time Travel for this table, the In_Production table.
>
> **[1:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980&t=68)** I'll quickly confirm that Time Travel has indeed been disabled.
>
> **[1:12](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980&t=72)** Let query the information_schema.tables and look at the metadata.
>
> **[1:16](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980&t=76)** You can see In_Production retention time has now been set to zero, which means we do not have access to historical data for this table.
>
> **[1:26](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980&t=86)** Now, if I were to go ahead and drop this table In_Production, I will not be able to restore its contents.
>
> **[1:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980&t=94)** The table data is no longer being backed up by Time Travel.
>
> **[1:38](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980&t=98)** Let's prove this.
>
> **[1:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980&t=99)** First, let's prove that this table has indeed been dropped.
>
> **[1:42](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980&t=102)** The Select Star should give you an error, and it does.
>
> **[1:45](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980&t=105)** Let's try and undrop this table.
>
> **[1:47](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980&t=107)** So Undrop Table In_Production, this time this is going to fail.
>
> **[1:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980&t=113)** That's because data retention time is zero.
>
> **[1:55](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980&t=115)** Time Travel has been disabled.
>
> **[1:58](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980&t=118)** A dropped table cannot be restored.
>
> **[2:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/dropping-and-restoring-tables?u=76281980&t=120)** You can't query historical data from this table as well.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case. (1), this. (1)
> **Code Identifiers:** information_schema (1)
> **Speakers:** - [instructor] (1)


### 2. Views in Snowflake

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Non-materialized, materialized, and secure views
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=1)** - [Instructor] If you analyze data using the same complex query over and over again, it might be useful for you to define a view.
>
> **[0:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=7)** Views in Snowflake are defined by a query, and views allow users to access the result of that query as though the result were in a table.
>
> **[0:17](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=17)** Views can thus be thought of as a named reference to a query, and other queries can reference views exactly like they do tables.
>
> **[0:27](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=27)** Just like you use a table name within a query, you can use a view name instead.
>
> **[0:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=32)** Views are very useful because they give you access to different cuts of your data.
>
> **[0:36](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=36)** Views allow you to combine, segregate, or protect data.
>
> **[0:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=41)** For example, instead of giving users access to all of the records in a table, you might want to give them access to only a subset of records that you define using a view.
>
> **[0:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=51)** Snowflake supports two types of views.
>
> **[0:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=53)** We have non-materialized views, or just regular views, and we have materialized views.
>
> **[0:59](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=59)** Let's understand how these are different.
>
> **[1:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=61)** We look at the non-materialized view first.
>
> **[1:04](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=64)** A non-materialized view is defined using a query and is just a named definition of a query.
>
> **[1:09](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=69)** In a non-materialized view, the result of running the query associated with the view is not stored anywhere.
>
> **[1:18](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=78)** Each time the view is referenced in another query, the actual query associated with the view is run and the results generated.
>
> **[1:26](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=86)** The performance of a non-materialized view will often be slower than materialized views.
>
> **[1:33](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=93)** A materialized view is defined exactly like a regular view, but it behaves like a table.
>
> **[1:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=99)** A materialized view is also defined using a query.
>
> **[1:43](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=103)** The results of the materialized view are stored in a similar fashion to how our table's contents are stored.
>
> **[1:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=111)** So it's in assistance storage somewhere.
>
> **[1:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=113)** The implication of this is that you get faster access to the results of the view.
>
> **[2:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=120)** So you get faster access to the underlying data, but you have to pay for additional storage costs because the materialized view is actually taking up extra storage, and there are some additional restrictions on materialized views, querying them, working with them, which are beyond the scope of this particular course.
>
> **[2:17](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=137)** Now, if you want Snowflake to provide additional security to your views, you can define both materialized and non-materialized views as secure views.
>
> **[2:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=148)** Secure views allow for additional data privacy for the records associated with that view.
>
> **[2:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=154)** And because of this, secure views may be less performant than other views because they do not allow Snowflake to perform certain kinds of query optimizations.
>
> **[2:44](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=164)** Views are useful because they make your code more modular and easier to read and maintain.
>
> **[2:50](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=170)** Rather than repeating the same subquery over and over again, you can just define a view for that subquery.
>
> **[2:57](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=177)** Views also allow you to grant access to a subset of a table to your users.
>
> **[3:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=183)** Rather than giving them access to all records in a table, you can just give them access to the records that they really need.
>
> **[3:09](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=189)** And if you choose to use materialized views, these will significantly improve the performance of your queries because they store the subset of data that you're interested in, similar to how table contents are stored.
>
> **[3:21](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=201)** Views in Snowflake have certain limitations.
>
> **[3:24](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=204)** The definition of a view cannot be updated.
>
> **[3:26](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=206)** You have to replace or recreate the view from scratch.
>
> **[3:31](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=211)** If you make changes to the underlying table from which a view is generated, changes to the table structure are not propagated to the views.
>
> **[3:40](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=220)** And finally, views in Snowflake are read-only.
>
> **[3:43](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/non-materialized-materialized-and-secure-views?u=76281980&t=223)** You cannot use a view to update the underlying data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this, (1), finally, (1)
> **Analogies:** just like (1), for example (1), similar to (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### Creating and populating tables
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=1)** - [Instructor] For this demo, and for all of the demos from here on in, we'll no longer work with the classic Snowflake web interface.
>
> **[0:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=7)** You can click on this icon here, off to the top right of your screen, and switch over to the new Snowsight user interface.
>
> **[0:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=14)** The Snowsight user interface is far slicker, but as of now, the time of this recording, it does not have the complete functionality that the classic UI does.
>
> **[0:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=25)** Within the classic user interface, in order to run queries, you need to create a new worksheet.
>
> **[0:29](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=29)** That's exactly what I'm going to do.
>
> **[0:31](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=31)** And I'm going to rename the worksheet and call it "Views."
>
> **[0:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=34)** That's because we are going to be creating and working with views in this worksheet.
>
> **[0:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=39)** Within the Snowsight user interface you can specify the database and schema that you want to work with using this dropdown.
>
> **[0:47](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=47)** We'll continue working with the e-commerce database and public schema.
>
> **[0:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=51)** I'll run a use statement for the e-commerce database as well.
>
> **[0:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=54)** Hit command + enter or control + enter.
>
> **[0:57](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=57)** Or you can use the run icon off to the top right of the screen.
>
> **[1:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=61)** Within the schema, let's create and populate a few tables that we'll use for our views demos.
>
> **[1:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=68)** The first is the customer details table.
>
> **[1:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=70)** You can imagine that this table contains information about the customers for our e-commerce site.
>
> **[1:16](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=76)** Customer ID, name, phone number, email address.
>
> **[1:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=79)** Customer ID is the primary key for this table.
>
> **[1:22](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=82)** Customer name has a not null constraint.
>
> **[1:26](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=86)** Let's create yet another table.
>
> **[1:27](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=87)** This one will store the products of our e-commerce site.
>
> **[1:30](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=90)** "Product Info" is the name of the table.
>
> **[1:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=92)** We have the product ID, name, brand, and price.
>
> **[1:35](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=95)** Product ID is the primary key, product name and brand are not null.
>
> **[1:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=101)** Let's now create yet another table.
>
> **[1:43](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=103)** This is the "Order Details" table.
>
> **[1:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=106)** The order details table links the customer details and the product info table.
>
> **[1:50](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=110)** You can see the prod ID references prod_ID from product info.
>
> **[1:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=114)** And cust_ID references cust ID from customer details.
>
> **[1:59](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=119)** This table, you can imagine, contains the orders placed for products on an e-commerce site by our customers.
>
> **[2:06](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=126)** Now that these tables have been created you can run show tables and you can see that the three tables are all three permanent tables.
>
> **[2:13](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=133)** You can see all have a retention time of one.
>
> **[2:16](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=136)** And if you scroll over to the very end you can see that they're not external tables.
>
> **[2:21](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=141)** External tables are tables where the data is hosted outside of Snowflake on the cloud platform's storage service.
>
> **[2:29](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=149)** Like S3 on Amazon, Google Cloud Storage on the GCP, and Blob Storage on Azure.
>
> **[2:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=154)** Having created these tables we are now ready to populate them.
>
> **[2:38](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=158)** Let's insert some customers into our customer details table.
>
> **[2:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=161)** We have Alice, James, Bob, and Mark.
>
> **[2:45](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=165)** Customer C1 one through C4.
>
> **[2:47](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=167)** With this done, lets add some products to our e-commerce catalog.
>
> **[2:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=171)** So insert into product info some products from different brands.
>
> **[2:56](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=176)** P1 through P6.
>
> **[2:58](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=178)** The very last field that you see for each record is the price of the product.
>
> **[3:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=183)** And finally, let's populate the order details.
>
> **[3:05](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-populating-tables?u=76281980&t=185)** These are the orders placed by our customers for these products.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (5), let (5), switch (1), continue (1), public (1)
> **UI Navigation:** click on (1), dropdown (1)
> **Analogies:** imagine (2)
> **Env Vars:** gcp (1)
> **Speakers:** - [instructor] (1)

#### Creating and querying views
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-views?u=76281980&t=1)** - [Instructor] Now that we've set up the customer's products and orders table, you might want to run a query like this one.
>
> **[0:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-views?u=76281980&t=7)** This query is fairly complicated, but it's a very useful query.
>
> **[0:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-views?u=76281980&t=10)** Let's first look at lines 3, 4, 5, and 6.
>
> **[0:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-views?u=76281980&t=14)** Observe that in this query, we are joining three tables together, CUSTOMER_DETAILS, ORDER_DETAILS, and PRODUCT_INFO.
>
> **[0:22](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-views?u=76281980&t=22)** CUSTOMER_DETAILS is joined with ORDER_DETAILS based on cust_id.
>
> **[0:26](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-views?u=76281980&t=26)** That result is then further joined with PRODUCT_INFO based on prod_id, this is on line 5, and the entire table is ORDERED BY ord_id and then cust_name.
>
> **[0:38](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-views?u=76281980&t=38)** Now let's turn our attention to lines 1 and 2, the SELECT clause.
>
> **[0:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-views?u=76281980&t=41)** We select the ord_id, ord_date, cust_name, prod_name, and the cost of the product, which we get by performing a simple math operation.
>
> **[0:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-views?u=76281980&t=51)** We multiply the product price by quantity and subtract the discount applied to this product price multiplied by quantity, and that's the cost associated with the product bought by a customer.
>
> **[1:04](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-views?u=76281980&t=64)** And now when we run this query, you can see we have a cost column at the very right of our screen.
>
> **[1:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-views?u=76281980&t=70)** Now it's quite possible that the data analysts on your team often need to run this query over and over again and maybe perform other operations based on the results of this query.
>
> **[1:22](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-views?u=76281980&t=82)** Now if each time you were to rerun this query, well, that's going to be pretty painful.
>
> **[1:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-views?u=76281980&t=88)** In such situations, it makes sense to create a VIEW backed by this query, and that's exactly what I have done here.
>
> **[1:35](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-views?u=76281980&t=95)** On line 8, using CREATE OR REPLACE VIEW, I create a VIEW named ORDER_SUMMARY, and the query associated with that VIEW is present on lines 10 through 15, the same join operation, the three way join operation that we performed earlier.
>
> **[1:52](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-views?u=76281980&t=112)** When you create a VIEW using CREATE OR REPLACE VIEW, what is created is a regular non-materialized non-secure VIEW.
>
> **[2:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-views?u=76281980&t=121)** A VIEW is just a named representation of a query.
>
> **[2:04](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-views?u=76281980&t=124)** Now that we have a VIEW, if you want to run the underlying query, we simply call SELECT * FROM ORDER_SUMMARY.
>
> **[2:11](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-views?u=76281980&t=131)** When this query is executed, the query associated with the ORDER_SUMMARY VIEW will be executed, and we'll see the same results as we saw earlier.
>
> **[2:21](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-views?u=76281980&t=141)** In the case of a regular VIEW, the query associated with that VIEW is rerun each time you access the VIEW, which means that if you change the data in the underlying table, as I'm doing now, I'm inserting some additional orders into the ORDERS_DETAILS table.
>
> **[2:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-views?u=76281980&t=159)** On line 20, you can see that customer C1, Alice, has bought an additional product P3.
>
> **[2:45](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-views?u=76281980&t=165)** Now once you've changed the ORDER_DETAILS table, if you query the ORDER_SUMMARY VIEW, the updated details will be available in the VIEW, so I'm going to do a SELECT * FROM ORDER_SUMMARY once again.
>
> **[2:57](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-views?u=76281980&t=177)** And this time when I run this query, the query associated with ORDER_SUMMARY, the join operation, will be rerun, and you can see here at the bottom, Alice Johnson has bought a third product, a Sony Bravia TV.
>
> **[3:11](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-views?u=76281980&t=191)** So when the underlying table changes, the VIEW will also give you updated results.

> [!info]- Semantic Content
>
> **Env Vars:** view (16), order_summary (6), order_details (3), select (3), customer_details (2)
> **Code Identifiers:** ord_id (2), cust_name (2), cust_id (1), prod_id (1), ord_date (1)
> **SQL:** select (3)
> **Code Keywords:** let (2)
> **Definitions:** is a  (1), means that (1)
> **Cross-References:** as we saw (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** set up (1)

#### Recreating views
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/recreating-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/recreating-views?u=76281980&t=0)** - [Narrator] In the earlier video, you saw that changes made to the data of the base table are reflected when you query the view.
>
> **[0:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/recreating-views?u=76281980&t=8)** However, changes made to the structure of the base table are not reflected in the view.
>
> **[0:13](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/recreating-views?u=76281980&t=13)** So let's see exactly that here.
>
> **[0:15](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/recreating-views?u=76281980&t=15)** I'm going to create yet another view.
>
> **[0:17](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/recreating-views?u=76281980&t=17)** Once again, this is a regular view called Premium Products.
>
> **[0:21](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/recreating-views?u=76281980&t=21)** This is backed by the query select star from product info where price is greater than thousand.
>
> **[0:27](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/recreating-views?u=76281980&t=27)** This view represents products greater than a thousand dollars which are tagged as premium products.
>
> **[0:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/recreating-views?u=76281980&t=32)** Let's query this view, and you can see that there are exactly two products here tagged as premium products which are available based on this view query.
>
> **[0:43](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/recreating-views?u=76281980&t=43)** Now with this done, I'm now going to change the structure of my table, the product info table.
>
> **[0:50](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/recreating-views?u=76281980&t=50)** Here is my alter table command.
>
> **[0:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/recreating-views?u=76281980&t=51)** I'm altering the product underscore info table, and I'm going to add an additional column called configuration, which is of type VARCHAR hundred.
>
> **[1:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/recreating-views?u=76281980&t=60)** Now the statement has been executed.
>
> **[1:02](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/recreating-views?u=76281980&t=62)** The structure of the product info table has changed.
>
> **[1:05](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/recreating-views?u=76281980&t=65)** Now, if I try to query from the premium products view, this will result in an error.
>
> **[1:11](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/recreating-views?u=76281980&t=71)** Originally, when this view was first defined, the underlying table had four columns, but we now changed the underlying table to have five columns.
>
> **[1:21](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/recreating-views?u=76281980&t=81)** In order for this view to be usable, you'll need to recreate the view.
>
> **[1:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/recreating-views?u=76281980&t=85)** That's exactly what I've done on lines 11, 12, and 13.
>
> **[1:29](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/recreating-views?u=76281980&t=89)** I've invoked the create or replace view command.
>
> **[1:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/recreating-views?u=76281980&t=92)** I've recreating the premium products view using the same query, select star from product info, where price is greater than thousand.
>
> **[1:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/recreating-views?u=76281980&t=101)** The view has been recreated.
>
> **[1:42](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/recreating-views?u=76281980&t=102)** And now if you query from the view, you'll obtain the results that you expect and observe that when you query from the view, you get that extra configuration column from the underlying base table.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **SQL:** varchar (1)
> **Env Vars:** varchar (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### Querying regular views and secure views
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=1)** - So far, the views that we've worked with have been regular views.
>
> **[0:04](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=4)** With regular views the underlying query associated with the views executed each time you query the view.
>
> **[0:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=10)** Materialized views are different, but before we understand materialized views let's look at the query profile of a query that we run on a regular view.
>
> **[0:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=20)** I have a query here on line 17 and 18.
>
> **[0:23](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=23)** Select star from order summary where broad name like S percent products that start with S.
>
> **[0:29](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=29)** I'm going to run this query.
>
> **[0:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=32)** I get the query results.
>
> **[0:33](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=33)** I'm not interested in the query results.
>
> **[0:35](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=35)** Instead, I'm going to click on the three dots that you see over at the bottom, right?
>
> **[0:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=41)** This will bring up a little pop up on snow sight which you can use to copy your query ID or view query profile.
>
> **[0:47](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=47)** View query profile is what I'm interested in.
>
> **[0:49](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=49)** Clicking on this.
>
> **[0:50](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=50)** It'll open up a new browser tab and you can see that the query profile gives you a flow chart of the different operations that are run when you execute the query.
>
> **[0:59](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=59)** I'm going to zoom out a bit so you can see all of the individual boxes.
>
> **[1:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=63)** I'll just adjust the query profile on the screen a little bit.
>
> **[1:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=67)** And here you can see at the very bottom, the leaf nodes of the query profile, as it were, are all able scans.
>
> **[1:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=74)** You can select each of these leaf nodes and take a look.
>
> **[1:17](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=77)** But each of these correspond to the scan of the three tables on which we ran a joint query in order to create our order summary view.
>
> **[1:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=88)** So each of these tables were scanned.
>
> **[1:30](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=90)** Then some kind of filtering operation was performed on each table.
>
> **[1:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=94)** The boxes about each table scan say filter or join filter.
>
> **[1:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=99)** Once we retrieved the results from each of our tables we performed a join operation.
>
> **[1:44](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=104)** And when you select that box you can see that this is a joint between the products and orders table on product ID.
>
> **[1:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=111)** You can now select the second join operation just about that.
>
> **[1:56](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=116)** And you can see that this is a join operation which takes a result of the first join and joins that with the customers table.
>
> **[2:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=123)** And the attributes, you can see that the joint condition is on customer ID.
>
> **[2:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=128)** And then finally some kind of sorting is performed on the results and we get the final result displayed to screen.
>
> **[2:15](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=135)** Now, the thing here is we see a lot of details of what's happening in the underlying query associated with the view.
>
> **[2:22](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=142)** It's possible that this is a view that someone else created and that you are querying.
>
> **[2:27](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=147)** You'll get additional information in the query profile in case of a regular view.
>
> **[2:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=152)** But in the case of a secure view you'll see that things are a little different.
>
> **[2:36](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=156)** So let's switch back to our query editor and now create a secure view.
>
> **[2:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=161)** So I'm going to use the same query to create a secure view.
>
> **[2:44](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=164)** You can see the command that I run is create or replace secure view.
>
> **[2:49](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=169)** And the name of the view is order summary secure.
>
> **[2:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=173)** So the keyword secure on line 20 is what makes this view a secure view.
>
> **[2:58](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=178)** I've associated a comment with the secure view.
>
> **[3:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=181)** It simply says this view is a secure version and the query associated with the secure view is select start from order summary.
>
> **[3:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=188)** Observe that this query underlying the secure view queries another view.
>
> **[3:13](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=193)** Once the secure view has been created, let's now run a query on this secure view.
>
> **[3:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=199)** Select star from order summary secure.
>
> **[3:23](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=203)** I'm going to run this query.
>
> **[3:24](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=204)** And once again, I'm going to view the query profile.
>
> **[3:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=208)** So click on the three dots here at the bottom right and open up the query profile for the secure view.
>
> **[3:33](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=213)** And observe that here you can see just two boxes within the query profile.
>
> **[3:40](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=220)** That's because the details of the query underlying the secure view is not exposed when you use a secure view.
>
> **[3:48](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=228)** You can see that we have the final result.
>
> **[3:50](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=230)** That's the box on top.
>
> **[3:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=231)** And if you click on the box here at the bottom you can see that the only information available to us is that this view is a secure view.
>
> **[3:58](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=238)** The details of the query underlying the secure view is hidden from us.
>
> **[4:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=243)** The join operations, the filter operations, all of those details are not exposed to us when we use a secure view.
>
> **[4:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=250)** Secure views do not leak the details of the underlying table or its data to queries that use the secure view.
>
> **[4:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-regular-views-and-secure-views?u=76281980&t=259)** This also means that certain optimizations that Snowflake may be able to perform with regular views are not possible in secure views which means it's possible that secure views are slower than regular views.

> [!info]- Semantic Content
>
> **Definitions:** is a  (5), means that (1)
> **Code Keywords:** let (3), this. (1), switch (1)
> **UI Navigation:** click on (2), select the (1)
> **Speakers:** - so (1)

#### Creating and querying materialized views
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=1)** - [Instructor] In this demo, we'll create a view by using one of Snowflake's sample tables as the underlying base table.
>
> **[0:09](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=9)** The table that we are working with is in the snowflake sample data database.
>
> **[0:13](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=13)** It's in the schema called TPCH, underscore SF 10 and the table is called LINEITEM.
>
> **[0:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=19)** I'm going to create a table called line item in my current database, eCommerce DV, the public schema.
>
> **[0:26](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=26)** And we'll use the data in this table as the basis for our view.
>
> **[0:31](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=31)** Now, the reason I've chosen this particular table is that it's fairly large.
>
> **[0:37](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=37)** It has 1.6 gigabyte worth of data.
>
> **[0:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=41)** If you want to see a sample of what this data looks like run a simple select star operation and you can see that this is artificially generated data.
>
> **[0:50](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=50)** So there is lots of data here.
>
> **[0:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=51)** You can take a look at all of the columns.
>
> **[0:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=54)** The data here is not important.
>
> **[0:55](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=55)** It's important to know that the size of this table is now 1.5 gigs.
>
> **[1:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=60)** I'm now going to create two different views using this table.
>
> **[1:04](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=64)** First, we'll create a regular view called high tax view.
>
> **[1:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=67)** So I'm going to select all of the records from line item where tax is greater than 5%, greater than 0.05.
>
> **[1:15](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=75)** Now this is a regular view which means that the records associated with this query will not be stored anywhere.
>
> **[1:21](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=81)** Anytime you query the view the underlying table will be queried.
>
> **[1:26](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=86)** So when I run select star from high tax view you'll see that it takes a long time to get the results.
>
> **[1:31](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=91)** You'll find that to get the results from this query, it can take anywhere up to 30 seconds.
>
> **[1:38](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=98)** Let's take a look at how long the query execution actually took, and you can see here off to the right, the query duration was 18 seconds and the results of the query had 13.3 million rows.
>
> **[1:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=113)** If you want queries on such a view to run faster it's often better to create a materialized view.
>
> **[1:58](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=118)** A materialized view will execute the query associated with it, generate the results and store the results, as though it were a table. Observe line 13, I call create or replaced materialized view, high tax view materialized the use of the keyword materialized before view is what makes this a materialized view rather than a regular view.
>
> **[2:22](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=142)** Now, when you run this, it'll take much longer for the view to be created because all of the results are now stored somewhere as a part of this materialized view.
>
> **[2:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=152)** Now let's run the same query on the materialized view select start from high tax view, materialized where tax greater than 0.06.
>
> **[2:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=161)** Once again, it takes a while to get the results but it's a tad faster.
>
> **[2:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=166)** If you look at the bottom right, and click on the cross, you can see that the query duration was 16 seconds.
>
> **[2:52](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=172)** This is faster than the 18 seconds that it took to run this query on a regular, non-materialized view, and 13.3 million records for return.
>
> **[3:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=183)** The query profile of a query run on a materialized view also looks different from that of a regular view. Observe that there are very few boxes.
>
> **[3:13](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=193)** That's because when we query a materialized view, the materialized view records, which is stored somewhere that is what is scanned.
>
> **[3:23](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=203)** You can see that here in the bottom box, the materialized view scan is what retrieves the records.
>
> **[3:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=208)** Those records are filtered and we get the final result.
>
> **[3:31](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=211)** And finally, it's possible for you to secure a materialized view as well.
>
> **[3:37](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=217)** Notice, the create or replace statement on line 19 create or replace secure materialized view, and the name of the view's high tax view, secure materialized.
>
> **[3:48](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=228)** The uses of both keywords secure and materialized makes this a secure materialized view.
>
> **[3:55](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=235)** This is how you create a secure materialized view and querying it is just like querying any other view. Select star, specify the name of the view, and run your query.
>
> **[4:05](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=245)** Remember, queries may run a little slower on secure views as compared to insecure views.
>
> **[4:12](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=252)** If you take a look at the query profile of a secure materialized view you'll find the details are even more sparse.
>
> **[4:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=260)** Earlier, there were three boxes, which indicated that a filter operation was performed on the underlying view.
>
> **[4:27](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-and-querying-materialized-views?u=76281980&t=267)** And even that is now hidden here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), public (1), this, (1), return. (1), finally, (1)
> **Versions:** 13.3 (2), 1.6 (1), 1.5 (1), 0.05 (1), 0.06 (1)
> **Definitions:** is called (1), is a  (1), means that (1)
> **CLI Commands:** find (2)
> **Env Vars:** tpch (1), lineitem (1)
> **Code Identifiers:** ecommerce (1)
> **UI Navigation:** click on (1)
> **Analogies:** just like (1)


### 3. Optimizing Query Performance

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Caching, clustering, and search optimization
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=1)** - [Instructor] Snowflake runs queries on huge amounts of data.
>
> **[0:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=3)** In order for these queries to run quickly, the queries need to be optimized.
>
> **[0:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=8)** And there are several techniques that Snowflake uses for this.
>
> **[0:11](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=11)** We'll discuss and work with three query optimization techniques.
>
> **[0:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=14)** The first is caching.
>
> **[0:16](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=16)** Next, we'll discuss clustering.
>
> **[0:18](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=18)** And finally, we'll discuss search optimization.
>
> **[0:22](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=22)** Let's start with caching.
>
> **[0:23](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=23)** It's by far the easiest technique to understand, and it happens automatically.
>
> **[0:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=28)** We've already discussed that Snowflake's architecture divides Snowflake into three layers, database storage, where data is persisted, query processing, which comprise of virtual warehouses, and the cloud services layer.
>
> **[0:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=41)** So we have the storage layer, the compute layer, and the service layer.
>
> **[0:45](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=45)** The actual data is stored in the storage layer.
>
> **[0:48](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=48)** However, the data is cached in both the compute layer as well as the service layer.
>
> **[0:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=53)** The service layer accepts SQL requests from users, coordinate queries, manages transactions and results, and the service layer has the result cache.
>
> **[1:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=63)** This holds the result of every query executed in the past 24 hours.
>
> **[1:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=68)** And this cache is available across virtual warehouses and across sessions.
>
> **[1:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=74)** The compute layer where the SQL queries are actually processed contains the local disk cache.
>
> **[1:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=80)** This is used to cache data used by SQL queries.
>
> **[1:23](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=83)** Whenever data is needed for a given query, it's retrieved from the Remote Disk storage and cached in SSD and memory in the compute layer.
>
> **[1:33](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=93)** The storage layer holds the long term storage for our data, refer to as a Remote Disk storage.
>
> **[1:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=101)** In order to improve the performance of certain kinds of queries, you can enable clustering on tables.
>
> **[1:47](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=107)** Clustering involves sorting or ordering data along natural dimensions when storing that data in tables.
>
> **[1:55](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=115)** Clustering in Snowflake is completely automated.
>
> **[1:58](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=118)** You designate one or more columns as the clustering key, and this enables clustering.
>
> **[2:05](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=125)** Data is automatically reclustered when it's updated or deleted or changes are made.
>
> **[2:12](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=132)** Let's say you choose country as the clustering key for your data.
>
> **[2:16](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=136)** All of the records belonging to the same country will be co-located in the same micro-partition, allowing very fast retrieval operations on queries which refer to country.
>
> **[2:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=148)** If you enable clustering on a table, you will incur additional costs.
>
> **[2:33](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=153)** There are costs for the initial clustering of the table and for maintaining the clustering as the table is updated.
>
> **[2:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=159)** Clustering is very useful when you require very fast response times and you don't really care about the cost of clustering.
>
> **[2:47](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=167)** Clustering is used when the improvements that you get for your query offsets the cost of maintaining the clustered table.
>
> **[2:56](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=176)** Clustering improves the performance of queries that filter based on the clustering key.
>
> **[3:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=183)** Queries run faster because they can now skip data that does not match the filter predicate.
>
> **[3:09](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=189)** Clustering also gives you better column compression for your data.
>
> **[3:13](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=193)** The only configuration that you require when specifying clustering is to correctly define the clustering key.
>
> **[3:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=200)** Now clustering improves the performance of equality searches on the clustering key, as well as range searches using the clustering key.
>
> **[3:29](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=209)** Range searches meaning searches which include the greater than and less than operator.
>
> **[3:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=214)** And finally, the third optimization technique that we'll discuss is search optimization that has performed using the search optimization service.
>
> **[3:43](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=223)** The objective of search optimization is to improve the performance of selective point lookup queries on tables, queries that use the equality operator.
>
> **[3:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=234)** A point lookup query is one that returns either one or a small number of records from a table.
>
> **[4:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=240)** Search optimization is a table level property in Snowflake, and users need to explicitly register their tables with the search optimization service.
>
> **[4:09](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=249)** It's not registered by default.
>
> **[4:11](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=251)** When you enable search optimization on a table, Snowflake uses an additional persistent data structure that serves as an optimized search access path for all of the records in your table.
>
> **[4:24](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=264)** This data structure is initially populated when you first enable search optimization, and there on in a maintenance service runs continuously in the background and updates the search optimization data as your table is updated.
>
> **[4:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=279)** Search optimization is great if most of your queries are selective point lookup queries, that is, search optimization only speeds up quality searches, it does not speed up range searches.
>
> **[4:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=293)** But the advantage of search optimization is that the optimization is applied on all columns of supported types in a table.
>
> **[5:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/caching-clustering-and-search-optimization?u=76281980&t=301)** You don't have to pick and choose specific columns to which optimization is applied.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), let (2), require (2), this. (1), default. (1)
> **Env Vars:** sql (3), ssd (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Loading data using COPY INTO
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=1)** - [Instructor] Starting from this demo over the next few demos, we looked at some different query optimization techniques that Snowflake supports.
>
> **[0:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=8)** Now in order to run our queries, we need a large dataset.
>
> **[0:12](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=12)** The first thing we'll do is create a new database and able and load in a large dataset.
>
> **[0:18](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=18)** The name of the database is sales_db.
>
> **[0:21](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=21)** Hit Command.
>
> **[0:22](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=22)** Enter to create this database.
>
> **[0:24](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=24)** Go ahead and call use database sales_db.
>
> **[0:29](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=29)** so that we switch over to using the public schema within this database rather than the previous eCommerce DB that we were using.
>
> **[0:37](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=37)** The next thing we'll do is create the table into which we'll load our data.
>
> **[0:42](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=42)** Now, this is a fairly large table with many different columns.
>
> **[0:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=46)** I call Create or Replace Table and the name of the table is Iowa Sales.
>
> **[0:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=51)** And you can see that we have a large number of columns in here.
>
> **[0:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=54)** This is a large dataset that is about five GB in the uncompressed format.
>
> **[1:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=60)** Go ahead and hit Shift+Enter and this table has been successfully created.
>
> **[1:05](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=65)** Once this is done, I'm now going to switch over to the terminal window and log in using SnowSQL, Snowflake's command line utility.
>
> **[1:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=74)** I already have SnowSQL installed on my machine.
>
> **[1:16](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=76)** If you need instructions on how to install SnowSQL, this URL that you see here on screen should guide you.
>
> **[1:23](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=83)** Whether you have a Windows machine or Mac OS or Linux, SnowSQL is available for all of these platforms.
>
> **[1:30](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=90)** I'm going to go ahead and run the SnowSQL command -A, specifies the URL for my Snowflake account and -use specifies the username.
>
> **[1:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=99)** Hit Enter.
>
> **[1:40](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=100)** You'll be prompted for your password, SFI or password, and log into SnowSQL.
>
> **[1:45](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=105)** Observe the prompt.
>
> **[1:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=106)** We are using the COMPUTE warehouse, the database and schema have not been specified.
>
> **[1:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=111)** The database that we are working with is sales_db and let's use schema public.
>
> **[1:57](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=117)** Public is anyway the default schema that will be used.
>
> **[2:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=121)** Next, we'll create a stage.
>
> **[2:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=123)** Stages in Snowflake are locations which are used to store data which are then loaded into tables.
>
> **[2:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=130)** If the data that's to be loaded is in an external location like say Amazon S3 or Azure's blob storage, you'll use an external stage.
>
> **[2:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=139)** But here, we're going to use an internal named stage.
>
> **[2:24](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=144)** This named stage is going to be called sales stage and this is what I'm going to use to load in my Iowa sales data.
>
> **[2:33](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=153)** Loading data into this internal Snowflake stage is performed using the quote command.
>
> **[2:38](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=158)** I have the CSV file on my local machine.
>
> **[2:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=161)** It's under users/loonycorn/Desktop/AdvancedSnowflake.
>
> **[2:45](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=165)** I put this file into this named sales stage.
>
> **[2:49](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=169)** Go ahead and run this command and you'll see that this operation takes about 10 minutes.
>
> **[2:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=174)** That's because of the size of this file.
>
> **[2:56](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=176)** At the end of about eight to 10 minutes, you should get a success message, The CSV file has been successfully compressed and loaded into our Snowflake stage.
>
> **[3:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=187)** If you run a list at Sales_Stage command, you should see this gzip file is now present in this stage.
>
> **[3:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=194)** You can see that this particular file is about 1.2 GB in the compressed gzip format.
>
> **[3:21](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=201)** Now the next step is to copy the data in this stage and load the CSV data into the Iowa_sales table and we'll do this using the copy into command.
>
> **[3:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=212)** Observe that I copy into the Iowa_sales table that we had set up previously.
>
> **[3:37](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=217)** And I copy from the Sales_Stage and specifically from the sales.CSV.gzip file.
>
> **[3:45](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=225)** The file format here gives us the format of the CSV file type of CSV, fields are delimited using the comma.
>
> **[3:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=231)** We skip the header and fields may be optionally enclosed by the double quotes.
>
> **[3:56](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=236)** In case an error occurs when we load data, we'll continue past the error.
>
> **[4:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=241)** Now this operation will take about two to three minutes and at the end, you'll find that the data is partially loaded.
>
> **[4:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=247)** There are about three records that are malformed which are not loaded.
>
> **[4:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-data-using-copy-into?u=76281980&t=250)** The rest of the data will be loaded.

> [!info]- Semantic Content
>
> **Env Vars:** csv (6), url (2), sfi (1), compute (1)
> **Code Keywords:** public (3), switch (2), let (1), continue (1)
> **Code Identifiers:** sales_db (3), ecommerce (1)
> **Tools:** terminal (1), command line (1)
> **Definitions:** is a  (2)
> **Prerequisites:** install (1), set up (1)
> **File Paths:** sales.csv (1)
> **CLI Commands:** find (1)

#### Retrieval optimization using cached results
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=0)** - Now that we've successfully loaded data into the Iowa Sales table, be ready to run queries on this table.
>
> **[0:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=7)** This table contains records for the sales of different kinds of drinks across stores in Iowa.
>
> **[0:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=14)** I'm going to run my very first Select Star from Iowa Sales.
>
> **[0:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=19)** Now, because this is a large table, this query will take up to a minute to run.
>
> **[0:24](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=24)** So you'll have to be a little patient.
>
> **[0:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=25)** And once you get the results, let's take a look at how long it took for a query to execute.
>
> **[0:29](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=29)** And if you click on the little cross at the bottom right of your screen you'll see that this query took about 44 seconds to run.
>
> **[0:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=39)** And a total of 19.7 million rows were returned.
>
> **[0:42](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=42)** Now this was a fairly simple query, no joints, no filtering, nothing, but you'll find that the Query Profile still holds some information for us.
>
> **[0:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=51)** So let's open up the Query Profile and you'll find that there are two blocks in here.
>
> **[0:56](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=56)** The bottom most block is the Table Scan where the underlying table was read to retrieve the results.
>
> **[1:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=63)** And finally, the block on top is where the result was actually extracted from the table.
>
> **[1:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=68)** This query extracted all of the 1.13 GB of compressed data.
>
> **[1:13](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=73)** You can see under Statistics, Bytes written to result is about 1.13 GB.
>
> **[1:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=79)** So this was a fairly heavy duty operation.
>
> **[1:21](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=81)** Now let's head back to our Query editor, and let's run this exact same query again.
>
> **[1:27](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=87)** You can simply place your cursor on the previous query and rerun it or type in the same query again.
>
> **[1:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=94)** This time around, when I hit Shift + Enter, you'll find that the query runs almost instantaneously.
>
> **[1:40](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=100)** Well, at least compared to the previous time and the results are available to us within a few seconds.
>
> **[1:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=106)** On the right under Query Details, you can see that the Query duration was just 76 milliseconds in order to return 19.7 million rows.
>
> **[1:56](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=116)** Well, that's pretty amazing.
>
> **[1:57](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=117)** What happened?
>
> **[1:59](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=119)** Well, the Query Results were stored in the cache in the cloud services layer.
>
> **[2:05](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=125)** And you can see from the Query Profile that this Query results were reused.
>
> **[2:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=130)** Since Snowflake had already cached the results of this query previously, Query results were now retrieved from cache.
>
> **[2:18](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=138)** This is Retrieval Optimization.
>
> **[2:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=140)** Snowflake by default caches these query results for around 24 hours.
>
> **[2:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=145)** These cached results are available across sessions.
>
> **[2:29](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=149)** I'm now going to create a new worksheet which will be a fresh session and you'll find that if you run the same query in this new worksheet, well, the results will be retrieved from cache.
>
> **[2:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=161)** Let's run the exact same query Select Star from Iowa Sales.
>
> **[2:45](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=165)** And once you run it, you'll see that the data is available almost immediately.
>
> **[2:50](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=170)** In fact, this query runs even faster than it did before.
>
> **[2:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=174)** It takes only about 26 milliseconds to run.
>
> **[2:57](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=177)** These cached results are also available to all other users who have privileges on this table.
>
> **[3:06](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=186)** Now let's head back to our optimizations worksheet and I'll show you how you can disable this caching.
>
> **[3:11](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=191)** If you need to, for any reason.
>
> **[3:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=194)** That's a simple ALTER command on the session.
>
> **[3:17](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=197)** ALTER session set use cached result is equal to false will never retrieve data from cached results even if they are available.
>
> **[3:26](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=206)** Now that I've altered the properties of our current session, I'm going to run Select Star from Iowa Sales, once again.
>
> **[3:33](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=213)** And this time the query will take a long time to run because it'll retrieve the data from the underlying storage.
>
> **[3:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=221)** You can see because data wasn't retrieved from cached, the query took almost 43 seconds to run.
>
> **[3:47](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=227)** Well, the cached is useful and I'd like to use it.
>
> **[3:50](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/retrieval-optimization-using-cached-results?u=76281980&t=230)** So I'm going to the ALTER Session and set use cached result to true, once again.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), finally, (1)
> **CLI Commands:** find (4)
> **Versions:** 19.7 (2), 1.13 (2)
> **Env Vars:** alter (3)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - now (1)

#### Enabling clustering on tables
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=1)** - [Instructor] The next kind of query optimization that we'll explore in Snowflake is clustering.
>
> **[0:05](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=5)** Clustering involves the use of a clustering key to co-locate records within a table.
>
> **[0:11](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=11)** Anytime you filter records using the clustering key, those filter operations should run much faster than in an unclustered table.
>
> **[0:21](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=21)** Now let's take a look at our Iowa sales table.
>
> **[0:23](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=23)** We'll look at the metadata for this table, and you'll see that the table is not clustered by default.
>
> **[0:29](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=29)** This is a regular permanent table within the database sales underscore DB.
>
> **[0:35](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=35)** And as you scroll over under the clustering key column you'll see a null value indicating that this is an unclustered table.
>
> **[0:44](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=44)** Let's scroll further over to the right and you can see that auto clustering on for this table is set to no.
>
> **[0:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=51)** That is automatic.
>
> **[0:52](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=52)** Clustering is not enabled.
>
> **[0:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=54)** In the latest versions of Snowflake, clustering is managed for you automatically.
>
> **[0:59](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=59)** The automatic clustering service will constantly scan your table for updates and recluster your data as needed.
>
> **[1:06](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=66)** That is when you have clustering enabled.
>
> **[1:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=68)** The next thing I'm going to do here is enable clustering for this table.
>
> **[1:12](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=72)** And this can be done using a simple altered table command.
>
> **[1:16](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=76)** Altered table, Iowa sales, cluster by county.
>
> **[1:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=80)** We co-locate records based on the county in which the store is located.
>
> **[1:27](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=87)** Iowa as a state is divided into counties.
>
> **[1:30](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=90)** And this will cluster the records corresponding to the different counties so that the records belonging to the same county will be co-located in the underlying data structure for this table.
>
> **[1:43](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=103)** Let's go ahead and execute this and cluster our table.
>
> **[1:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=106)** I've used just a single clustering key here.
>
> **[1:48](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=108)** You can cluster tables by multiple keys as well.
>
> **[1:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=111)** I'll run a select star operation once again, and we'll take a look at the metadata associated with this table.
>
> **[1:58](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=118)** And this time around, as you scroll to the right, you'll see that we now have a clustering key.
>
> **[2:04](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=124)** Observe the clustering key is linear clustering by county.
>
> **[2:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=128)** And if you scroll further over to the right, you'll find that automatic clustering is now enabled for this table.
>
> **[2:16](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=136)** Anytime you configure a clustering key for a table, auto clustering will be turned on.
>
> **[2:21](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=141)** That's the only kind of clustering supported by Snowflake.
>
> **[2:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=145)** Manual clustering, which used to exist earlier, has been deprecated.
>
> **[2:29](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=149)** In order to understand the impact of clustering on our tables, I'm going to turn off caching.
>
> **[2:35](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=155)** I'm going to set use cache result to false.
>
> **[2:38](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=158)** This is so that we can explore the impact of clustering on our queries, isolated from the impact of caching.
>
> **[2:45](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=165)** Now, if you have a table that is already clustered, and you create a clone of that table, the clone table will also be a clustered table.
>
> **[2:55](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=175)** Here I use creator, replace table, and create a clustered clone of the original clustered Iowa sales table.
>
> **[3:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=183)** Let's take a look at the metadata associated with Iowa sales cluster.
>
> **[3:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=188)** That is our clone table.
>
> **[3:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=190)** And you'll see that this table also has a clustering key.
>
> **[3:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=194)** The same clustering key, linear by county.
>
> **[3:17](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=197)** So when you clone a table, the clustering associated with the original table is also present in the clone table.
>
> **[3:23](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=203)** But auto clustering is not enabled in the clone.
>
> **[3:27](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=207)** Auto clustering was enabled in the original table, but will not be enabled in the clone.
>
> **[3:33](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=213)** Automated clustering is important only when you plan to update the data that you have in the table.
>
> **[3:38](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=218)** And you want the table to be reclustered when new data is added or existing data is updated.
>
> **[3:45](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=225)** Well, we are not planning to do any of that.
>
> **[3:47](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=227)** We are just planning to see the optimization effects of clustering.
>
> **[3:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=231)** So this is totally fine.
>
> **[3:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=233)** That's just something to keep in mind.
>
> **[3:55](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=235)** Now, let's see how we can change the clustering state of a table.
>
> **[3:58](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=238)** I'm going to go ahead and drop the clustering on the original Iowa sales table.
>
> **[4:04](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=244)** And I do this by calling alter table, Iowa sales, drop clustering key.
>
> **[4:09](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=249)** So now the original Iowa sales table is no longer clustered.
>
> **[4:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=254)** And we can confirm this by querying the metadata for that table.
>
> **[4:17](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=257)** But we have a clustered table called "Iowa Sales Clustered".
>
> **[4:22](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=262)** You can see that this original table has clustering key set back to null, it's no longer clustered.
>
> **[4:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/enabling-clustering-on-tables?u=76281980&t=268)** And automated clustering is once again not on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), default. (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** find (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Querying clustered tables
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=1)** - [Instructor] Now we have two tables, a clustered table and an unclustered table.
>
> **[0:04](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=4)** Let's run queries on both of these tables.
>
> **[0:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=7)** We'll run exact same query on both tables, and we'll see if clustering gives us a little bit of a speed up.
>
> **[0:13](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=13)** Just a heads up that it's possible, that when you run these queries, the speed up is either not very significant, or the speed up doesn't exist at all.
>
> **[0:22](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=22)** That's because the table that we're working with, is still rather small.
>
> **[0:27](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=27)** The effects of clustering are really massive, when you have tables of the order of hundreds of gigs, which is really hard to work with in a demo.
>
> **[0:35](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=35)** Let's run our very first select statement, select star from Iowa Sales, where county is equal to Clinton.
>
> **[0:42](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=42)** It takes a while to generate the results for this query, but you'll find that the query itself runs pretty fast.
>
> **[0:48](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=48)** If you look at the query details, you can see the query duration, is just two point six seconds.
>
> **[0:55](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=55)** Remember the Iowa Sales table is not clustered, and this particular filter operation on the county column, ran in two point six seconds on this unclustered table.
>
> **[1:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=67)** Let's now run the same query on our Iowa Sales clustered table.
>
> **[1:13](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=73)** Since the filtering operation is on the cluster key, we would expect that this query runs a little bit faster, and you can see it does.
>
> **[1:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=80)** Query duration is two point zero seconds, as opposed to two point six seconds on the unclustered table.
>
> **[1:27](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=87)** Now it's quite possible when you are running this, you don't see much of an improvement, and that's totally fine.
>
> **[1:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=92)** Remember the table itself is rather small for clustering to have a massive effect.
>
> **[1:38](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=98)** On a clustered table, if you perform all the by operations using the clustering key, those should be faster as well.
>
> **[1:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=106)** Here I have two order by operations.
>
> **[1:49](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=109)** The first order by is on the unclustered table, select star from Iowa Sales order by county.
>
> **[1:56](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=116)** Now, this takes a while to run.
>
> **[1:58](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=118)** I think it's almost 50 seconds.
>
> **[2:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=121)** The exact number of seconds is 48.
>
> **[2:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=123)** Remember, we do not have caching.
>
> **[2:05](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=125)** If you look at the query details, you see that the query duration was 48 seconds, in order to order and retrieve 19 point seven million rows.
>
> **[2:15](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=135)** Let's run the exact same query on our clustered table, Iowa Sales clustered order by county, and this time around you'll see, that our query runs a wee bit faster.
>
> **[2:27](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=147)** If you look at the query details, you'll see the query executed in 45 seconds.
>
> **[2:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=152)** I should tell you though that for this particular data set, it's not that clustering always improves the performance of these queries because this data set, is still rather small.
>
> **[2:43](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=163)** Let's now run a different kind of query.
>
> **[2:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=166)** Here the filter operation is on the city.
>
> **[2:48](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=168)** You can see this on line 12 and 15.
>
> **[2:52](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=172)** This means that we're not actually filtering on the clustering key, but we're filtering on a column that is related to the clustering key.
>
> **[3:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=180)** Filter queries on columns related to the clustering key column should also be, sped up on clustered tables.
>
> **[3:09](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=189)** Let's run this first query on Iowa Sales, that is our unclustered table.
>
> **[3:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=194)** This query runs fairly quickly.
>
> **[3:16](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=196)** It only took about 311 milliseconds, two point six key records, 2600 records.
>
> **[3:23](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=203)** Now I'll run the same query on the clustered table.
>
> **[3:27](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=207)** Filter where city is equal to Adair, and in this particular's case, it seems like this query actually seems to run a little slower on our clustered table, 540 milliseconds as opposed to 311 milliseconds, though I'm not really sure this query performs any worse.
>
> **[3:45](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=225)** I think any difference here is clearly random.
>
> **[3:48](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustered-tables?u=76281980&t=228)** If our table had been much larger that it is, filtering by city that is closely associated with county should be sped up on the clustered table.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this, (1), case, (1)
> **CLI Commands:** find (1)
> **Definitions:** means that (1)
> **Warnings:** heads up (1)
> **Speakers:** - [instructor] (1)

#### Querying clustering information
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=1)** - [Instructor] Defining clustering keys for a table only benefits the table if certain conditions are met.
>
> **[0:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=7)** Clustering really helps the table if it contains a large number of micro partitions.
>
> **[0:12](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=12)** Clustering is also useful if the queries that you run on the data often use the clustering key as a filter, which means it's also important to pick the right clustering key.
>
> **[0:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=25)** Columns which are often used in filters and columns which do not have a very high cardinality.
>
> **[0:31](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=31)** A column with high cardinality is one which has a large number of distinct values.
>
> **[0:37](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=37)** Before actually clustering a table using a certain clustering key, you can get clustering information for that table and that particular key and see whether the key is a good one.
>
> **[0:49](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=49)** For example, here, I'm curious as to whether the date column in my table will give me a good clustered result.
>
> **[0:57](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=57)** Run this query and you can see that this clustering information is present in a JSON format.
>
> **[1:02](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=62)** You can select the one record in the result and then expand the JSON information off to the right.
>
> **[1:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=70)** You can see that the date column is fairly high cardinality.
>
> **[1:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=74)** Don't be led by that statement alone, look at the other details here.
>
> **[1:18](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=78)** Look at the average overlaps and the average depth of clustering.
>
> **[1:23](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=83)** Notice that the total number of partitions for this table is equal to 33, and the average overlap is 32.
>
> **[1:30](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=90)** That means there are 32 micro partitions containing values that overlap with each other.
>
> **[1:37](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=97)** The average depth here refers to clustering depth, that is the depth of the overlapping micro partitions.
>
> **[1:44](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=104)** Smaller the average depth, better the clustering.
>
> **[1:47](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=107)** And average depth of 33 is not great for our table.
>
> **[1:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=113)** So, let's run another query.
>
> **[1:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=114)** Let's get clustering information for the city column.
>
> **[1:57](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=117)** Once again, we get this information in the JSON format, let's select the record and expand the JSON and take a look.
>
> **[2:04](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=124)** Once again, this is a high cardinality column.
>
> **[2:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=127)** Total number of partitions, 33.
>
> **[2:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=130)** Average overlaps is 32 and average depth 33 months again.
>
> **[2:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=134)** Again, city does not seem to be a great choice for clustering.
>
> **[2:18](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=138)** Let's try county.
>
> **[2:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=139)** This is what we had used to cluster this table in the first place.
>
> **[2:22](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=142)** And if you take a look at the JSON in the result, you can see that it's still a high cardinality column but total number of partitions 33, that remains the same.
>
> **[2:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=152)** Average overlaps is just 6.78, and average depth 4.8182.
>
> **[2:38](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-clustering-information?u=76281980&t=158)** You can see that county is a fairly decent column for us to use to cluster our data.

> [!info]- Semantic Content
>
> **Env Vars:** json (5)
> **Code Keywords:** let (4)
> **Definitions:** is a  (3), refers to (1)
> **Versions:** 6.78 (1), 4.8182 (1)
> **UI Navigation:** select the (2)
> **Analogies:** for example (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### Running point lookup queries on search-optimized tables
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=1)** - In this demo, we'll work with the search optimization service which can be used to improve the performance of selective point lookup queries on tables.
>
> **[0:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=10)** Search optimization is a table level property and can be enabled for the table as a whole, and it applies to all columns in a table.
>
> **[0:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=19)** Now, before we get to search optimization I'm going to change the current session to not use use cached results.
>
> **[0:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=25)** USE_CACHED_RESULT I set to false.
>
> **[0:27](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=27)** This is so that we can clearly identify and isolate the improvements in our query performance due to search optimization from any caching related improvements.
>
> **[0:38](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=38)** In order to apply search optimization let's create a brand new table.
>
> **[0:43](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=43)** This table is going to be called IOWA_SALES_OPTIMIZED and we'll populate this table using all of the records from the original IOWA_SALES table.
>
> **[0:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=54)** So we create or replace table IOWA_SALES_OPTOMIZED by selecting star from IOWA_SALES.
>
> **[1:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=60)** Applying search optimization on any table is associated with some costs.
>
> **[1:05](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=65)** There are storage costs, compute costs and additional maintenance costs.
>
> **[1:09](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=69)** If you want to see what these costs will be for the Iowa sales table, let's run a select on system estimate search optimization costs.
>
> **[1:18](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=78)** We get some JSON values in the results.
>
> **[1:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=80)** Let's expand this and take a look at what these JSON values are.
>
> **[1:24](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=84)** You can see that currently search optimization is not enabled on this table.
>
> **[1:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=88)** Search optimization enabled is false.
>
> **[1:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=92)** The first set of costs, build costs have to do with actually building this search optimization lookup data structure.
>
> **[1:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=99)** You can see how many credits that will consume.
>
> **[1:42](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=102)** For this particular table it'll be roughly 0.02 credits.
>
> **[1:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=106)** Let's scroll down a little further.
>
> **[1:48](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=108)** You can see how many terabytes will be consumed for storing the data structure for search optimization.
>
> **[1:55](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=115)** And if you go still further down that's where you'll find the estimate for maintenance costs.
>
> **[2:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=120)** Well, since the table is not that old usage patterns are not known, the maintenance costs cannot be computed.
>
> **[2:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=128)** Let's take a look at our search optimized table.
>
> **[2:12](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=132)** Show tables like Iowa sales.
>
> **[2:15](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=135)** You can see there are three such tables; the original table, the cluster table that we've created earlier, and the third record is our optimized table that we've created just now.
>
> **[2:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=145)** We haven't enabled search optimization just yet.
>
> **[2:29](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=149)** I'm going to scroll over and show you that search optimization has not yet been enabled for this table.
>
> **[2:35](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=155)** You can see that search optimization is off for all three tables.
>
> **[2:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=159)** Pay close attention to the third table.
>
> **[2:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=161)** That's the one that we are going to be working with.
>
> **[2:43](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=163)** No progress, no number of bites, nothing.
>
> **[2:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=166)** The next step is to actually enable search optimization for the table that we've just created.
>
> **[2:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=171)** We'll do that with an alter table command line 10 I have alter table Iowa sales optimized add search optimization.
>
> **[3:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=180)** These terms "add search optimization" is what enables search optimization for this table.
>
> **[3:06](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=186)** Now we'll confirm that search optimization has indeed been enabled. Show tables like Iowa sales.
>
> **[3:12](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=192)** There are our three tables.
>
> **[3:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=194)** Keep track of the third record here.
>
> **[3:17](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=197)** Observe that search optimization is now on on the third record. For any table, it takes some time to build up and populate the data structure that allows search optimization.
>
> **[3:29](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=209)** Now because this is a fairly small table by Snowflake standards, it has only about one GP of compressed data.
>
> **[3:36](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=216)** Search optimization progress is hundred.
>
> **[3:38](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=218)** That means the entire table has now been indexed.
>
> **[3:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=221)** We'll now run a few queries on the original Iowa sales table.
>
> **[3:45](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=225)** We'll then run the same query on our search optimized table and see how they perform.
>
> **[3:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=231)** We'll run point look up queries here, select star from Iowa sales, where invoice number is a specific number.
>
> **[3:59](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=239)** This is a point lookup query.
>
> **[4:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=240)** We are looking up a particular invoice and you can see that the query duration is 330 milliseconds.
>
> **[4:06](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=246)** This is at the bottom right of your screen.
>
> **[4:09](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=249)** Now let's try the same query on our search optimized table.
>
> **[4:13](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=253)** With search optimization on, point lookup queries on all of the columns of this table should be faster.
>
> **[4:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=260)** Let's run this and you can see that the query took 233 milliseconds.
>
> **[4:26](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=266)** A noticeable improvement.
>
> **[4:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=268)** Even for a fairly small table, search optimization seems to have had a significant impact.
>
> **[4:35](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=275)** Let's now run a range query.
>
> **[4:37](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=277)** Select star from Iowa sales where sales greater than equal to 500.
>
> **[4:43](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=283)** This query on our regular table takes about 1.9 seconds to run.
>
> **[4:49](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=289)** I'm now going to run the same range query on our search optimized table.
>
> **[4:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=293)** Remember that search optimization does not help with range queries, will not improve the performance of range queries.
>
> **[5:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=301)** So this select star from Iowa sales optimized where sales greater than equal to 500 ran in about 1.8 seconds, a hundred millisecond improvement.
>
> **[5:12](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=312)** But I think that's purely due to chance.
>
> **[5:15](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/running-point-lookup-queries-on-search-optimized-tables?u=76281980&t=315)** You can try this a couple of times with different range queries, but you'll find that there is no improvement to your range query performance due to search optimization.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8)
> **Env Vars:** iowa_sales (2), json (2), use_cached_result (1), iowa_sales_optimized (1), iowa_sales_optomized (1)
> **Definitions:** is a  (4)
> **Versions:** 0.02 (1), 1.9 (1), 1.8 (1)
> **CLI Commands:** find (2)
> **Tools:** command line (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - in (1)

#### Clustering vs. search optimization
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=1)** - [Tutor] Both search optimization and clustering improve the performance of queries that filter on certain predicates.
>
> **[0:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=7)** Search optimization improves the performance of selective point lookup queries on all columns of the table, whereas clustering only applies to certain columns and it improves the performance of both point lookup queries, as well as range queries.
>
> **[0:22](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=22)** In this demo, I'm going to run similar queries on a search optimized table and a clustered table, and we can compare the performance head on.
>
> **[0:30](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=30)** Now, the table that we'll work with is a one from the "SNOWFLAKE_SAMPLE_DATA" database.
>
> **[0:37](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=37)** This is the "Orders" table in the TPCH_SF100 schema.
>
> **[0:42](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=42)** And it's a rather large table.
>
> **[0:43](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=43)** This table holds around 4.3 gigabytes of compressed data.
>
> **[0:48](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=48)** Let's take a look at what this table looks like.
>
> **[0:50](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=50)** You can see that there are a number of different columns.
>
> **[0:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=53)** O_CUSTKEY uniquely identifies customers for the different orders.
>
> **[0:59](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=59)** I'll now create a new table which I'll then cluster in just a bit and populate that table with the same data from the Orders table.
>
> **[1:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=68)** So the new table is called ORDERS_CLUSTERED.
>
> **[1:11](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=71)** So go ahead and run this code and it'll take several seconds.
>
> **[1:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=74)** In fact, several minutes for this new table to be set up and populated.
>
> **[1:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=79)** We haven't clustered this table.
>
> **[1:21](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=81)** We'll do that in a little bit.
>
> **[1:22](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=82)** Let's create yet another table.
>
> **[1:24](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=84)** This is going to be called ORDERS_SEARCH_OPTIMIZED and we'll populate it with the same data from the original Orders table.
>
> **[1:33](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=93)** Once again, this is going to take a while to run, about one to two minutes depending on how lucky you are.
>
> **[1:38](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=98)** Well, this table has been created as well, took about a minute or so.
>
> **[1:42](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=102)** Let's now cluster the ORDERS_CLUSTERED table and I'll cluster by the O_CUSTKEY.
>
> **[1:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=111)** The unique key that identifies customers in this Orders table.
>
> **[1:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=114)** So this first table that we created has been clustered.
>
> **[1:58](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=118)** Let's enable search optimization on the ORDERS_SEARCH_OPTIMIZED table.
>
> **[2:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=123)** Add search optimization, and in a few seconds, that's done as well.
>
> **[2:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=127)** So we now have a clustered table, a search optimized table, and of course, the original table with no clustering or search optimization.
>
> **[2:15](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=135)** Let's take a look at the properties of these two new tables that we've created.
>
> **[2:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=140)** ORDERS_CLUSTERED and ORDERS_SEARCH_OPTIMIZED.
>
> **[2:23](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=143)** I'm going to scroll over to the right, and you can see that the first table is clustered by O_CUSTKEY.
>
> **[2:31](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=151)** And if you scroll further over to the right, you can see that the first table has automatic clustering on, that's to be expected.
>
> **[2:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=159)** That is our clustered table, after all.
>
> **[2:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=161)** If you look a little over to the right, you'll see that search optimization is on for the second table, off for the first table.
>
> **[2:49](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=169)** And the Orders table is a much larger one than any that we've dealt with before.
>
> **[2:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=173)** You can see that search optimization progress is currently zero.
>
> **[2:58](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=178)** When I ran this query and got the results, the table wasn't indexed yet.
>
> **[3:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=183)** I'm going to rerun this query, show tables like Orders, and let's scroll over to the right.
>
> **[3:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=188)** And hopefully by this time, search optimization is complete.
>
> **[3:12](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=192)** It took a few minutes, but search optimization progress is now at a 100%.
>
> **[3:17](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=197)** We've set up our tables.
>
> **[3:18](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=198)** It's time to run our query.
>
> **[3:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=200)** The very first query is going to be on the original table with no clustering and no search optimization.
>
> **[3:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=205)** It's a selective point look up query where we look up the orders for a particular customer.
>
> **[3:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=212)** O_CUSTKEY set to a particular value 11004176.
>
> **[3:37](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=217)** Let's run this query on the original table.
>
> **[3:40](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=220)** And you can see that this query took about one second to execute and return results.
>
> **[3:44](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=224)** To be precise, this query ran in about 948 milliseconds.
>
> **[3:48](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=228)** That seemed pretty fast to me.
>
> **[3:50](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=230)** Let's see if our clustered table can do better.
>
> **[3:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=233)** The exact same query, but this time we'll look up a customer on the clustered table, run the query, and well the query duration is just 414 milliseconds.
>
> **[4:05](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=245)** This is a huge improvement.
>
> **[4:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=247)** Definitely not a fluke and definitely due to clustering.
>
> **[4:12](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=252)** Let's now run the same query on the search optimized table.
>
> **[4:15](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=255)** CUSTKEY is same as before 11004176.
>
> **[4:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=259)** And once again, you'll find that this query runs much faster.
>
> **[4:23](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=263)** It takes about 852 milliseconds.
>
> **[4:27](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=267)** Now usually point lookup queries on search optimized tables are often faster than point lookup queries on clustered tables.
>
> **[4:35](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=275)** In our case, that doesn't seem to be the case, but you will definitely see an improvement over a table that's not clustered or search optimized.
>
> **[4:44](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=284)** I'll now run a range query and we'll see how this range query performs on the three tables that we'll have.
>
> **[4:50](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=290)** We'll first run the range query on the Orders table.
>
> **[4:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=293)** We are looking for customers within a particular ID range, greater than 1104176 and less than 13004176.
>
> **[5:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=303)** This query runs for a longish bit of time.
>
> **[5:05](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=305)** It can take up to a minute to run.
>
> **[5:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=307)** In my case, it took about 21 seconds.
>
> **[5:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=310)** We'll run the exact same query, looking for customers in the exact same range on our ORDERS_CLUSTERED table.
>
> **[5:18](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=318)** Now this query will run much faster.
>
> **[5:22](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=322)** You'll see that there is a significant improvement.
>
> **[5:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=325)** The query has run about three seconds faster on our clustered table.
>
> **[5:31](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=331)** Clustering definitely improved the performance of this range query.
>
> **[5:35](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=335)** Let's run the same range query on our SEARCH_OPTIMIZED table.
>
> **[5:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=339)** Remember search optimization does not help with range queries, only with selective point lookup queries, but even then this particular query runs faster on the search optimized table.
>
> **[5:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/clustering-vs-search-optimization?u=76281980&t=351)** It's 19 seconds to execute this query.

> [!info]- Semantic Content
>
> **Env Vars:** o_custkey (4), orders_clustered (4), orders_search_optimized (3), snowflake_sample_data (1), tpch_sf100 (1)
> **Code Keywords:** let (10), case, (3)
> **Definitions:** is a  (4), is called (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** find (1)
> **Versions:** 4.3 (1)
> **Speakers:** - [tutor] (1)


### 4. Working with Semi-structured Data

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Loading and querying parquet data
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=0)** - In this demo, we'll see how we can load semi-structured data into snowflake.
>
> **[0:06](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=6)** The first kind of semi-structured data that we work with is a parquet file.
>
> **[0:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=10)** This file that I have opened here is actually cities dot parquet.
>
> **[0:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=14)** You can see that the parquet file has two fields, continent and country and within the country field, that's actually a complex data structure.
>
> **[0:23](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=23)** We have the name of the country and the cities in the country, which is in the form of an array.
>
> **[0:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=28)** This is the parquet file that will load into snowflake and query from snowflake.
>
> **[0:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=34)** Now, for this demo, we'll go back to working with snow SQL because we have to load data.
>
> **[0:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=39)** So run this command log into your snowflake account.
>
> **[0:44](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=44)** Make sure you specify your password.
>
> **[0:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=46)** You'll be logged into snow SQL.
>
> **[0:48](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=48)** Let's create a new database to work with.
>
> **[0:50](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=50)** Create or replace database company underscore DB.
>
> **[0:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=54)** We'll use the public schema that is created by default under this database.
>
> **[1:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=60)** Let's now create a table named cities and this table has three columns, continent, country and city.
>
> **[1:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=67)** Continent and country are both strings.
>
> **[1:09](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=69)** So that's why they have the varchar type.
>
> **[1:11](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=71)** City is a complex object.
>
> **[1:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=74)** It's actually an array.
>
> **[1:15](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=75)** And that's why its type is variant.
>
> **[1:18](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=78)** A type of variant means that that particular field can store any kind of data, even complex data types.
>
> **[1:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=85)** Let's go ahead and create the cities table.
>
> **[1:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=88)** Our data is originally in the parquet format, so let's go ahead and create a file format specification.
>
> **[1:35](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=95)** Create a file format parquet underscore format type is parquet.
>
> **[1:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=99)** The next step is to create a named internal stage into which will load our parquet data.
>
> **[1:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=106)** I'm going to call this stage cities underscore stage and the file format that this stage will expect data loaded to be in is the parquet format.
>
> **[1:57](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=117)** Remember a stage is just a location for data.
>
> **[2:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=121)** From there we'll then load the data into tables.
>
> **[2:04](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=124)** Let's list our cities stage and you can see that the stage is initially empty.
>
> **[2:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=128)** We haven't put anything into the stage yet.
>
> **[2:11](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=131)** We'll do that right now.
>
> **[2:12](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=132)** So I'm going to load the data from my cities dot parquet file.
>
> **[2:15](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=135)** Using the put command into the cities stage.
>
> **[2:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=139)** Executing this command successfully loads our data into the cities stage.
>
> **[2:24](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=144)** We confirm that the data is available within the stage by listing out the contents of the stage.
>
> **[2:30](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=150)** And there you see it, our city dot parquet file.
>
> **[2:33](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=153)** Things look good so far.
>
> **[2:35](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=155)** The last step here is to now copy this data into our cities table.
>
> **[2:40](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=160)** Now for other kind of data, this is how we would write the copy into command.
>
> **[2:44](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=164)** Copy into cities.
>
> **[2:45](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=165)** That's the name of our table from the cities dot parquet file file format is the parquet format, on error continue.
>
> **[2:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=173)** Well, this will not work with the parquet format because the parquet file format has just one column of type variant, object or array.
>
> **[3:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=183)** The cities table, if you remember, had three columns, continent, country and city, and so the mapping did not work.
>
> **[3:12](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=192)** How do we go from the single column in our parquet file to the three columns that we have in our table?
>
> **[3:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=200)** Well, we run a little query on the parquet file.
>
> **[3:23](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=203)** I want to copy into the cities table from the result of this select query and notice the select query.
>
> **[3:30](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=210)** The select query uses dollar one to identify the single column in the parquet file format.
>
> **[3:38](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=218)** We then extract the individual field values from this single column represented by dollar one.
>
> **[3:44](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=224)** Dollar one , colon continent of type varchar.
>
> **[3:48](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=228)** Dollar one, colon country, colon name.
>
> **[3:50](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=230)** That's a nested field of type varchar and dollar one colon country, colon city, a nested field of type variant.
>
> **[3:59](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=239)** And this will actually work.
>
> **[4:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=241)** The individual fields from our single parquet column have been extracted and loaded into our table.
>
> **[4:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=248)** If you run a select star from cities here is our data continent Europe, country France and city, a number of cities in France.
>
> **[4:17](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=257)** And then we have number of cities in Greece and Canada.
>
> **[4:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=260)** Snowflake supports SQL constructs that allow you to flatten this nested array.
>
> **[4:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=265)** Let's say you want to view individual cities as separate records rather than as an array as the data originally is in the table.
>
> **[4:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=274)** This is a kind of query that you can run.
>
> **[4:36](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=276)** Take a look at the second line of this query, lateral, flatten, input, city.
>
> **[4:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=281)** This basically extracts the individual elements of the array in the city column and represents the individual elements using C.
>
> **[4:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=291)** These flattened records of the city column are then associated with the corresponding records from the continent and country columns and we select continent country and C dot value string as city.
>
> **[5:05](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-and-querying-parquet-data?u=76281980&t=305)** This will become clearer when you actually look at the result, observe that we have the continent, country and a flattened list of cities where each city is associated with the right continent and the right country.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), public (1), type. (1), continue (1)
> **Env Vars:** sql (3)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Documentation:** specification (1)
> **Speakers:** - in (1)

#### Loading JSON data
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=1)** - [Instructor] In this demo, we'll see how we can load JSON data into Snowflake, and then later on, we'll query the JSON data that we've loaded.
>
> **[0:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=8)** Let's take a look at the actual structure of this JSON data.
>
> **[0:12](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=12)** You can see on line one that this data is an array of JSON objects, you can see the start of the array, the square bracket online one.
>
> **[0:21](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=21)** The curly brace line two denotes the start of the first entity in our JSON array.
>
> **[0:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=28)** This entity has a single key called restaurant that you can see on line three, and the value associated with this restaurant key, contains a number of details for different restaurants.
>
> **[0:40](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=40)** These are details that have been passed and extracted from a website in India, named Zomato, which is a food delivery service.
>
> **[0:47](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=47)** For every restaurant we have the attributes of the restaurant, on line four you can see whether the restaurant has online delivery or not, on line five we have the URL for photos from the restaurant.
>
> **[0:58](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=58)** On line seven we have the price range, on line 18 we have the name of the restaurant, et cetera.
>
> **[1:05](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=65)** You can see the data gets fairly complex, on line 29 we have the location field, the value for that field is a nested JSON object with address, city, city ID, ZIP code, et cetera.
>
> **[1:18](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=78)** Let's scroll further down.
>
> **[1:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=80)** Till finally, we get to the second entity in the array, on line 103, we have the open curly brace for the second restaurant in the array.
>
> **[1:31](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=91)** You can scroll down further, we have information for about 20 or so restaurants, at the very bottom of this file you can see the closing square brackets, on line 1475.
>
> **[1:43](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=103)** Now that we've understood the JSON data that we are going to be working with, let's head over to SnowSQL, and we'll load this data into a new table.
>
> **[1:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=113)** So I'm going to create a new table named Zomato restaurants.
>
> **[1:57](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=117)** This table has exactly one column, named JSON data, that's of type variant, that can hold any kind of data.
>
> **[2:05](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=125)** And that's going to hold JSON data in this case.
>
> **[2:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=127)** Now this table has been successfully created.
>
> **[2:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=130)** Let's now create a stage called Zomato stage, into which we load our data first.
>
> **[2:16](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=136)** I have the JSON file on my local machine, I'm going to use the put operation to load the data from this file into the Zomato stage.
>
> **[2:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=145)** Zomato_data.json is the name of the file.
>
> **[2:30](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=150)** The data seems to have been successfully compressed and loaded, it's fairly small data, so this will happen quickly.
>
> **[2:36](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=156)** Let's list the contents of this Zomato stage, and you should see our gzip file in there.
>
> **[2:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=161)** The next step is to load this data into a table, into our Zomato restaurants table.
>
> **[2:47](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=167)** Here is our copy into command that will perform bulk loading for batch data, so copying to Zomato restaurants.
>
> **[2:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=174)** From Zomato stage and our JSON gzip file within that stage, the file format is type JSON, and I have an additional format specification, strip outer array equal to true.
>
> **[3:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=187)** This will get rid of the outer array in our JSON structure, and every restaurant will be loaded in as a separate row, a separate entity.
>
> **[3:18](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/loading-json-data?u=76281980&t=198)** Now that the data has been loaded, the next step is to query this data.

> [!info]- Semantic Content
>
> **Env Vars:** json (13), url (1), zip (1)
> **Code Keywords:** let (5), finally, (1), case. (1)
> **Definitions:** is a  (2), is an  (1)
> **File Paths:** zomato_data.json (1)
> **Documentation:** specification (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### Querying JSON data
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=1)** - [Instructor] We'll head back to the familiar Snow Site interface in order to run our queries.
>
> **[0:05](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=5)** First, let's do a very simple select star from Zomato restaurants to see what this table looks like.
>
> **[0:12](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=12)** You can see from the result that we have exactly one column named JSON Data.
>
> **[0:17](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=17)** And within this JSON Data column, every entry is a JSON structure representing a single restaurant.
>
> **[0:24](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=24)** You can see the details of this JSON structure once you select a particular record and look at the JSON structure off to the right.
>
> **[0:33](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=33)** It's possible to access individual fields in this JSON structure in your query.
>
> **[0:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=39)** Select JSON data colon restaurant will display the values associated with the restaurant field in each entity.
>
> **[0:48](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=48)** And this is what the values look like.
>
> **[0:50](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=50)** We have a field named R a field named API key, average cost for two, et cetera.
>
> **[0:55](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=55)** Select a particular record and expand this panel off to the right.
>
> **[1:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=60)** and you can see the details of the object associated with the restaurant key.
>
> **[1:05](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=65)** Let's access some more fields within this restaurant structure.
>
> **[1:09](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=69)** So select JSON data colon restaurant dot name.
>
> **[1:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=74)** Name is a nested field within restaurant and user rating is yet another nested field within restaurant.
>
> **[1:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=80)** Observe the values associated within the name field across all restaurants and the value associated with the user rating field.
>
> **[1:27](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=87)** The user rating field is a nested JSON object with a number of sub fields.
>
> **[1:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=94)** If you expand the panel on the right you can see the sub fields are aggregate rating, rating color, rating text and votes.
>
> **[1:40](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=100)** I'm going to run another query which will extract the subfields within user rating.
>
> **[1:45](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=105)** So select JSON Data colon restaurant.name JSON Data colon restaurant.user rating.rating text.
>
> **[1:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=113)** And we'll get two columns in the result with the name of each restaurant and the text associated with the ratings for the restaurant.
>
> **[2:02](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=122)** If you want to give snowflake a hint, you can also indicate the data type of the resulting field.
>
> **[2:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=127)** Observe my select statement here.
>
> **[2:09](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=129)** Restaurant.name is of type string.
>
> **[2:11](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=131)** So I say restaurant.name::string rating text is also of type string.
>
> **[2:17](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=137)** location, well, location is an object.
>
> **[2:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=139)** If you look at the result, the location object contains address, city, latitude, longitude, and a bunch of other details.
>
> **[2:27](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=147)** Let's look at querying and flattening an array type in the JSON format.
>
> **[2:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=152)** I select the restaurant's name and then I select the offers associated with the restaurant.
>
> **[2:37](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=157)** And if you look at the offers, you can see that every offer is an a array of string elements that are different offers applied on the same restaurant.
>
> **[2:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=166)** You can see that on certain restaurants, there are absolutely no offers.
>
> **[2:50](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=170)** So you have the empty square brackets.
>
> **[2:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=173)** Let's select the particular offer, and you can satisfy yourself that this is often array type and array of strings.
>
> **[3:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=180)** What if I wanted to access just the first offer within each array?
>
> **[3:04](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=184)** Well, restaurant.offer square brackets zero will gimme the offer at the first position index position zero.
>
> **[3:12](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=192)** And here you can see the restaurant name, all of the first offers at index position zero.
>
> **[3:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=199)** If there are no offers, the value is simply null.
>
> **[3:22](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=202)** Instead of viewing a column in the array format, what if I want to flatten the array?
>
> **[3:27](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=207)** We've seen how to use laterally flatten before.
>
> **[3:29](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=209)** On line 26, observe that I apply lateral flatten on input that is JSON data colon restaurant.offers and I represent the flatten elements using the letter O.
>
> **[3:44](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=224)** Every flattened element is then combined with the name of the restaurant.
>
> **[3:48](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=228)** In my select statement, I select the restaurant name O.value.
>
> **[3:52](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=232)** That is the element in my flattened array is of type string.
>
> **[3:56](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=236)** And I alias that as offer.
>
> **[3:59](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/querying-json-data?u=76281980&t=239)** The result has two columns, all of the restaurant names and all of the offers in the flattened format associated with each of these restaurants.

> [!info]- Semantic Content
>
> **Env Vars:** json (13), api (1)
> **Code Keywords:** let (4), interface (1)
> **Definitions:** is a  (3), is an  (2)
> **UI Navigation:** select the (4)
> **Speakers:** - [instructor] (1)


### 5. Managing Users and Granting Privileges

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Access control
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=1)** - In this video, we'll discuss how access control works in Snowflake and a few best practices and important considerations for managing secure access to your Snowflake accounts and Snowflake objects.
>
> **[0:13](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=13)** Here is the Snowflake object hierarchy.
>
> **[0:16](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=16)** This object hierarchy is something that we are familiar with.
>
> **[0:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=20)** All of these are securable objects in Snowflake which means you can grant privileges and specific kinds of access to roles and users for these individual objects.
>
> **[0:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=32)** Snowflake uses a role-based access control.
>
> **[0:35](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=35)** Privileges are grouped into roles, and roles are assigned to users.
>
> **[0:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=41)** Roles can also be assigned to other roles, setting up a role hierarchy.
>
> **[0:45](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=45)** Now every account in Snowflake has one user who is designated as the account administrator.
>
> **[0:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=51)** The account administrator is granted the system-defined account admin role, and this is an all powerful role.
>
> **[0:59](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=59)** The recommendation is to have each account administrator enable multifactor authentication for login.
>
> **[1:05](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=65)** So log in using the username password, and one other factor like an OPP.
>
> **[1:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=70)** You do not want all of your users of Snowflake running as account admin.
>
> **[1:15](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=75)** That does not adhere to the principle of least privilege.
>
> **[1:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=79)** The recommendation is that you create custom roles that follow the principle of least privilege when assigning privileges to users.
>
> **[1:27](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=87)** A user must have only those privileges that he or she needs to perform their job.
>
> **[1:35](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=95)** No user should be granted additional extraneous privileges.
>
> **[1:40](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=100)** So only allow users access to securable objects that they need, do not give them blanket access.
>
> **[1:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=106)** In Snowflake, privileges are grouped into roles.
>
> **[1:50](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=110)** These roles are then assigned to users, which can then perform operations, granted by the privileges associated with roles.
>
> **[1:58](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=118)** Let's understand this, let's say we have role one.
>
> **[2:02](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=122)** And this role owns two objects.
>
> **[2:06](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=126)** Both of these objects assume are either warehouses or databases, and this role has certain privileges on these objects.
>
> **[2:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=134)** Role one may now choose to grant some or all of these privileges to other roles.
>
> **[2:19](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=139)** Let's say they are roles two and three.
>
> **[2:22](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=142)** Once these roles have been created and have been granted privileges, these roles can be assigned to users, users can then log in and perform the operations accorded by these privileges.
>
> **[2:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=154)** Once you're working in Snowflake in the real world, you'll create custom roles for different use cases.
>
> **[2:42](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=162)** Here is the custom role workflow.
>
> **[2:43](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=163)** First you'll actually create the role.
>
> **[2:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=166)** Next you'll grant the privileges to the role that you wish the role to have.
>
> **[2:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=171)** You'll then grant that role to users.
>
> **[2:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=173)** You may then grant that role to other roles, or add the role to a role hierarchy.
>
> **[3:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=180)** It's common practice in Snowflake to structure your roles as a hierarchy.
>
> **[3:04](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=184)** A role hierarchy is created by having a hierarchical structure of roles with increasing privileges.
>
> **[3:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=190)** Usually the account admin role, which is the all powerful role for your account, is at the top of the hierarchy, and has all of the privileges on an account.
>
> **[3:22](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=202)** A role at the bottom of the hierarchy will have the fewest privileges.
>
> **[3:25](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=205)** Privileges associated with the role are inherited by the parent, which are then further inherited by its parent, and so on, up to the top of the hierarchy.
>
> **[3:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=214)** Here is what a role hierarchy might look like.
>
> **[3:37](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=217)** Here, the least powerful role is role three, at the bottom of the hierarchy.
>
> **[3:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=221)** The most powerful role is role one, at the top of the hierarchy.
>
> **[3:45](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=225)** So role three has just one privilege.
>
> **[3:47](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=227)** Let's call that privilege C.
>
> **[3:49](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=229)** Role two is a more powerful role that inherits from role three.
>
> **[3:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=233)** It inherits privilege C from role three, and it has its own additional privilege, privilege B.
>
> **[4:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=240)** And finally, at the top of the hierarchy we have role one.
>
> **[4:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=243)** Role one inherits privilege B and C from role two, and it has its own privilege A.
>
> **[4:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/access-control?u=76281980&t=250)** Role one can now be assigned to a user, user one, who now has privileges A, B and C.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (1), finally, (1)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** opp (1)
> **Speakers:** - in (1)

#### Creating users and viewing grants
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=1)** - In this demo, we'll see how you can create a new user for your Snowflake Account, assign a role to that user, and grant specific privileges to that role.
>
> **[0:09](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=9)** So that the user that you have created can perform the operations that you want them to.
>
> **[0:17](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=17)** In all of the demos that we've performed so far, our user has been operating under the account admin role.
>
> **[0:23](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=23)** If you look on the top right, you can see that the current role is account admin.
>
> **[0:27](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=27)** This is the most powerful role in the system.
>
> **[0:31](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=31)** The account administrator is responsible for configuring parameters at the account level, but if you're actually using a Snowflake you want to use the principle of least privileged, and give users only those privileges that they need.
>
> **[0:44](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=44)** Let's go ahead and select the current role.
>
> **[0:47](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=47)** This function will give you the current role under which your user is operating, and you can see that is account admin.
>
> **[0:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=54)** If you click on the dropdown off to the top right, you'll see that our current role is account admin.
>
> **[0:59](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=59)** Other pre-created roles are org admin, public security, admin, CIS admin, and user admin.
>
> **[1:06](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=66)** Each of these will have slightly different sets of permissions, with the public role being the least permissive.
>
> **[1:12](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=72)** Since we are operating as an account admin the all powerful role we have the privilege to create new users for our account.
>
> **[1:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=80)** So I'm going to call the create user command, and create a new user called test user.
>
> **[1:26](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=86)** The password will be test 1, 2, 3, 4.
>
> **[1:29](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=89)** The comment simply says, this is a test user, must change password, is equal to fault.
>
> **[1:33](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=93)** So the user does not need to change his or her password, when they first log in.
>
> **[1:38](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=98)** In this demo, will be switching between the current user the account admin, and this test user.
>
> **[1:45](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=105)** The way you know the difference, is that the browser for the account admin uses an incognito window.
>
> **[1:50](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=110)** If you take a look at the top, right, I'm currently operating within an incognito window.
>
> **[1:56](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=116)** Once our test user has been created, we will be able to use this test user to log into the same Snowflake Account.
>
> **[2:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=123)** I've opened up a new non incognito browser window.
>
> **[2:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=128)** Observe the URL that I have on this browser.
>
> **[2:12](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=132)** This is the same Snowflake Account, and I'm now going to log in as the test user.
>
> **[2:17](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=137)** So I specified test user as the username.
>
> **[2:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=140)** The password is the test password that I have specified earlier.
>
> **[2:23](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=143)** Test at 1, 2, 3, 4.
>
> **[2:24](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=144)** I'm now going to sign in, and here you can see that I've managed to sign in successfully.
>
> **[2:30](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=150)** Now we've created a new user, but we haven't really assigned the role to that user.
>
> **[2:35](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=155)** So how did this user manage to sign in?
>
> **[2:37](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=157)** Well, if you take a look at the top left, you can see that the test user has been automatically assigned the redefined public role.
>
> **[2:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=166)** This role enables login to Snowflake, and basic object access.
>
> **[2:52](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=172)** Typically any user in addition to the public role should be assigned additional roles for additional privileges.
>
> **[3:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=180)** There are some basic operations we can perform as the public role.
>
> **[3:04](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=184)** I'm now going to create a new worksheet and we'll rename this worksheet.
>
> **[3:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=188)** All of these operations would not have been possible if we weren't assigned the public role.
>
> **[3:13](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=193)** There is my test user worksheet.
>
> **[3:15](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=195)** Now I'm going to click on this database option, and you can see that the only database that I have access to is Snowflake Sample Data.
>
> **[3:24](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=204)** If you click on the dropdown at the top right, you can see that we are currently operating using the public role.
>
> **[3:30](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=210)** There are no other roles that we are assigned to.
>
> **[3:33](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=213)** You can see that the public role also does not have access to any warehouses.
>
> **[3:38](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=218)** Well, let's run a select current role.
>
> **[3:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=221)** This will confirm that we are indeed operating as the public role.
>
> **[3:46](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=226)** If you want to see what grants and privileges the public role actually has, you can run the command show grants to roll public.
>
> **[3:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=234)** Executing this command makes it very clear that we have certain privileges on the Snowflake Sample Data Database, and its underlying schemas.
>
> **[4:04](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=244)** And all of these privileges have been granted to us by the Account Administrator, who assign the public role by default.
>
> **[4:11](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=251)** You can scroll down and see what other privileges and grants this particular user has.
>
> **[4:17](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=257)** You can see that all of them are within the Snowflake Sample Data Database, and there's nothing else.
>
> **[4:23](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=263)** For example, if you were to try to create a database here, this would result in an error, because this role does not have database creation permissions.
>
> **[4:33](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=273)** You can also use the Show Grant's Command with a user to understand what privileges are available to a particular user.
>
> **[4:41](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=281)** So Show Grants on user tells us that the only privilege this user has is the ownership on the user itself.
>
> **[4:50](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/creating-users-and-viewing-grants?u=76281980&t=290)** Granted by the Account Administrator.

> [!info]- Semantic Content
>
> **Code Keywords:** public (12), let (2), function (1), default. (1), else. (1)
> **UI Navigation:** click on (3), dropdown (2), select the (1), scroll down (1)
> **Env Vars:** cis (1), url (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - in (1)

#### Granting privileges to roles
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=1)** - [Tutor] Here I am back in the Incognito browser where I'm logged in as account admin.
>
> **[0:05](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=5)** You can notice my role on the top right.
>
> **[0:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=8)** I'm now going to create a new role called BASIC_ROLE and grant some simple permissions to test user via that role.
>
> **[0:16](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=16)** Creating a role is just using the create role command.
>
> **[0:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=20)** BASIC_ROLE has been created.
>
> **[0:22](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=22)** Next, I'm going to grant this BASIC_ROLE to our test user.
>
> **[0:27](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=27)** At this point in time, there are no grants or privileges associated with BASIC_ROLE but this role will be assigned or granted to test user.
>
> **[0:38](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=38)** Our ultimate aim is to be able to allow test user to run queries on the Iowa sales table.
>
> **[0:45](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=45)** In order to get there, there are a number of privileges we need to grant test user and we'll grant those privileges via the BASIC_ROLE.
>
> **[0:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=53)** The first privilege of course is the ability to use the compute warehouse to run queries.
>
> **[1:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=60)** On line 12 here, I've granted the usage privilege on the compute warehouse to the BASIC_ROLE.
>
> **[1:08](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=68)** Anyone assigned the BASIC_ROLE will be able to use this warehouse, won't be able to change any of the details of the warehouse.
>
> **[1:16](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=76)** Let's now switch over to our other browser window, where we are logged in as our test user, you can see that we are on the test user worksheet.
>
> **[1:23](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=83)** I'm going to hit refresh on this browser window and let's see if this user now has access to the warehouse.
>
> **[1:31](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=91)** Click on the dropdown.
>
> **[1:32](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=92)** Notice that along with the "Public" role, the user has access to the BASIC_ROLE.
>
> **[1:37](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=97)** Switch the user over to using the BASIC_ROLE.
>
> **[1:40](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=100)** And next to that, you can see that the compute warehouse is now available to the BASIC_ROLE.
>
> **[1:47](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=107)** All the test user has right now is access to this warehouse in order to be able to run queries.
>
> **[1:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=113)** The user cannot actually access the Iowa sales table.
>
> **[1:57](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=117)** I'll now switch back to the Incognito window where I'm logged in as an account admin and then grant some more privileges to the BASIC_ROLE.
>
> **[2:06](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=126)** The next privilege I grant is the usage privilege on the database SALES_DB.
>
> **[2:13](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=133)** Users assign the BASIC_ROLE, will be able to use this database but will not be able to modify this database in any way.
>
> **[2:21](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=141)** Just a note here that the account administrator has complete ownership of the sales database and the Iowa sales table.
>
> **[2:29](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=149)** And that's why it's able to grant these privileges to another role.
>
> **[2:33](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=153)** And of course you can even select and query the data as an account administrator, and that will work.
>
> **[2:40](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=160)** This is something you're familiar with.
>
> **[2:42](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=162)** Now that our test user has access to SALES_DB via the BASIC_ROLE, let's switch over to our test user window.
>
> **[2:51](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=171)** This is our test user worksheet.
>
> **[2:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=173)** Hit refresh to make sure we have all of the latest access and click on the database dropdown.
>
> **[2:59](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=179)** You can see that we have access to SALES_DB.
>
> **[3:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=183)** But when we try to select that database, observe that we do not have access to the public schema in that database.
>
> **[3:10](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=190)** We only have default access to the information schema containing metadata about this database.
>
> **[3:17](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=197)** We want the test user to be able to query the Iowa sales table in the SALES_DB public schema.
>
> **[3:24](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=204)** This means we have to go back and grant some more privileges to the BASIC_ROLE.
>
> **[3:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=208)** In the meanwhile, as a test user, you can try to run a "SELECT * FROM IOWA_SALES," and this is going to fail.
>
> **[3:35](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=215)** We are not authorized to query this table.
>
> **[3:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=219)** Let's head back to the Incognito window where we are logged in as an account administrator.
>
> **[3:44](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=224)** We need to grant additional privileges to the BASIC_ROLE.
>
> **[3:47](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=227)** Next is the usage privilege on the schema SALES_DB.PUBLIC.
>
> **[3:54](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=234)** In order to query tables within the public schema, we need usage privileges on the schema that we've just granted to the BASIC_ROLE.
>
> **[4:02](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=242)** We also need select privileges on the SALES_DB.PUBLIC.IOWA_SALES table.
>
> **[4:11](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=251)** And this is the privilege that we grant next to BASIC_ROLE.
>
> **[4:14](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=254)** The select privilege allows the user to perform select operations on the table.
>
> **[4:20](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=260)** Updates, inserts, deletes will not be permitted.
>
> **[4:24](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=264)** So let's switch back to our test user account.
>
> **[4:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=268)** This is our non Incognito window and rerun this "SELECT * FROM IOWA_SALES."
>
> **[4:33](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=273)** This time we'll be successful and this user can retrieve the data in this table.
>
> **[4:38](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/granting-privileges-to-roles?u=76281980&t=278)** The BASIC_ROLE under which this user runs has all of the privileges needed to run select queries on this table.

> [!info]- Semantic Content
>
> **Env Vars:** basic_role (18), sales_db (6), iowa_sales (3), select (2), public (2)
> **Code Keywords:** public (6), let (5), switch (5)
> **UI Navigation:** click on (2), dropdown (2)
> **SQL:** select (2)
> **CLI Commands:** make (1)
> **Speakers:** - [tutor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Summary and next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/summary-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/summary-and-next-steps?u=76281980&t=1)** - [Instructor] And this brings us to the very end of this course.
>
> **[0:03](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/summary-and-next-steps?u=76281980&t=3)** Let's quickly summarize what we've covered so far and let's look ahead at what your next steps might be.
>
> **[0:09](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/summary-and-next-steps?u=76281980&t=9)** We saw that Snowflake is a managed big data platform that's cloud first and cloud only.
>
> **[0:15](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/summary-and-next-steps?u=76281980&t=15)** We saw that tables in Snowflake can be permanent, temporary, or transient tables, and you pick one based on your use case.
>
> **[0:23](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/summary-and-next-steps?u=76281980&t=23)** We saw that Snowflake allows you to create non-materialized or materialized views.
>
> **[0:28](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/summary-and-next-steps?u=76281980&t=28)** Materialized views perform better and both of these kinds of views can be secure.
>
> **[0:35](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/summary-and-next-steps?u=76281980&t=35)** We saw that queries in Snowflake are optimized using several techniques.
>
> **[0:39](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/summary-and-next-steps?u=76281980&t=39)** We discussed caching, clustering, and search optimization in some detail.
>
> **[0:45](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/summary-and-next-steps?u=76281980&t=45)** We then saw how we could load and query semi-structured data in Snowflake specifically Parquet data and JSON data.
>
> **[0:53](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/summary-and-next-steps?u=76281980&t=53)** And we rounded this course off by seeing how Snowflake enables access control using rules.
>
> **[1:00](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/summary-and-next-steps?u=76281980&t=60)** This brings us to the end of this course.
>
> **[1:01](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/summary-and-next-steps?u=76281980&t=61)** If you wish to continue your learning, there are some other interesting courses on LinkedIn Learning.
>
> **[1:07](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/summary-and-next-steps?u=76281980&t=67)** BigQuery is a big data platform very similar to Snowflake.
>
> **[1:11](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/summary-and-next-steps?u=76281980&t=71)** You can watch Learning BigQuery or Advanced BigQuery in order to see how BigQuery works.
>
> **[1:18](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/summary-and-next-steps?u=76281980&t=78)** Another managed data platform for big data processing which is a competitor to Snowflake is Databricks.
>
> **[1:24](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/summary-and-next-steps?u=76281980&t=84)** If you're interested in learning more about Databricks, [[Azure Spark Databricks Essential Training]] is a great course.
>
> **[1:31](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/summary-and-next-steps?u=76281980&t=91)** I hope you enjoyed this course.
>
> **[1:33](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/summary-and-next-steps?u=76281980&t=93)** Thank you for listening.
>
> **[1:34](https://www.linkedin.com/learning/advanced-snowflake-deep-dive-cloud-data-warehousing-and-analytics/summary-and-next-steps?u=76281980&t=94)** It's time for me to say goodbye.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case. (1), continue (1)
> **Definitions:** is a  (4)
> **Env Vars:** json (1)
> **Cross-References:** we discussed (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Janani Ravi]]

## Resources

- Exercise files available

## Skills Covered

- Snowflake

## Path Context

### In [[Master Data Engineering]]
← [[Data Engineering- dbt for SQL]] | **7 of 8** | [[Complete Guide to SQL for Data Engineering- from Beginner to Advanced]] →

## Appears In

- [[Master Data Engineering]]

## Related Courses

_Courses sharing skills:_

- [[Learning SnowflakeDB]] — Snowflake
- [[Advanced Data Engineering with Snowflake]] — Snowflake
- [[Introduction to Modern Data Engineering with Snowflake]] — Snowflake
- [[Building Generative AI Apps to Talk to Your Data]] — Snowflake
- [[Introduction to Gen AI with Snowflake]] — Snowflake

---

[↑ Back to top](#)