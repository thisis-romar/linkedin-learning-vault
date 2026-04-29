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
  - '[[Explore a Career in Data Engineering]]'
prev_courses:
  - '[[Introduction to Data Warehouses]]'
next_courses:
  - '[[PySpark Essential Training- Introduction to Building Data Pipelines]]'
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
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Learning%20SnowflakeDB.md)

![Learning SnowflakeDB](https://media.licdn.com/dms/image/v2/C4D0DAQFBJUUwGNne4A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1648064590188?e=2147483647&amp;v=beta&amp;t=vZiBoz6XQ8AiNotis8LsPXUVoHtmPJl3kKrRb296svI)

# Learning SnowflakeDB

> Are you in the process of trying to scale your business but bumping up against storage and capacity limits? Rather than shelling out more resources for expensive hardware and software licenses, consider Snowflake, the popular data warehouse and data management platform with unique data exchange capabilities for your business. Join instructor Lynn Langit and learn about how to use Snowflake—the pow

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb) | 1h 42m | Beginner | 30K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (3 videos)
- **[[#2. 1. SnowflakeDB Overview]]** (6 videos)
- **[[#3. 2. SnowflakeDB Data Storage and Files]]** (6 videos)
- **[[#4. 3. SnowflakeDB Query Processing]]** (5 videos)
- **[[#5. 4. SnowflakeDB Data Services]]** (5 videos)
- **[[#6. 5. SnowflakeDB Partners and Architectures]]** (4 videos)
- **[[#7. Conclusion]]** (1 videos)

### 1. Introduction

#### Driving maximum results with a flexible data cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/driving-maximum-results-with-a-flexible-data-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/driving-maximum-results-with-a-flexible-data-cloud?u=76281980&t=0)** - Are you struggling with running out of capacity for storage and compute on your existing data warehouse?
>
> **[0:08](https://www.linkedin.com/learning/learning-snowflakedb/driving-maximum-results-with-a-flexible-data-cloud?u=76281980&t=8)** Are you worried about buying expensive hardware and software licenses in order to expand your capacity?
>
> **[0:15](https://www.linkedin.com/learning/learning-snowflakedb/driving-maximum-results-with-a-flexible-data-cloud?u=76281980&t=15)** Have you heard the terms Data Lake or Lake House and wondered how and when they might apply to your data situation?
>
> **[0:23](https://www.linkedin.com/learning/learning-snowflakedb/driving-maximum-results-with-a-flexible-data-cloud?u=76281980&t=23)** Snowflake DB is a fully managed cloud native software as a service data platform.
>
> **[0:29](https://www.linkedin.com/learning/learning-snowflakedb/driving-maximum-results-with-a-flexible-data-cloud?u=76281980&t=29)** We'll explore how you can get maximum results from this flexible data cloud by looking at managing and configuring the different data planes, whether a storage, compute through the virtual warehouse, or services.
>
> **[0:46](https://www.linkedin.com/learning/learning-snowflakedb/driving-maximum-results-with-a-flexible-data-cloud?u=76281980&t=46)** I'm Lynn Langit.
>
> **[0:47](https://www.linkedin.com/learning/learning-snowflakedb/driving-maximum-results-with-a-flexible-data-cloud?u=76281980&t=47)** We have lots to cover in this course, so let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - are (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/what-you-should-know?u=76281980&t=0)** - In order to get the most out of this course, it'll be helpful if you have a background with databases, specifically if you've done production work with relational databases such as MySQL, SQL Server, Oracle or the like.
>
> **[0:14](https://www.linkedin.com/learning/learning-snowflakedb/what-you-should-know?u=76281980&t=14)** In particular, we'll be using the SQL query language to demonstrate the capabilities of Snowflake DB during this course.
>
> **[0:22](https://www.linkedin.com/learning/learning-snowflakedb/what-you-should-know?u=76281980&t=22)** In addition, if you have some background with data warehousing technologies, and it could be on your relational database or it could be a dedicated data warehouse such as Teradata, Oracle Data Warehouse, SQL Server Analysis Services, something like that.
>
> **[0:37](https://www.linkedin.com/learning/learning-snowflakedb/what-you-should-know?u=76281980&t=37)** In particular, we'll be looking at aggregate SQL queries for reporting, so queries that add up and produce aggregate results using SQL syntax like average, count, min, max.
>
> **[0:49](https://www.linkedin.com/learning/learning-snowflakedb/what-you-should-know?u=76281980&t=49)** In addition to that, if you have some familiarity with database administrator or data concepts, which includes security of data, modeling of data for tables and data pipelining, you'll get more out of this course.
>
> **[1:02](https://www.linkedin.com/learning/learning-snowflakedb/what-you-should-know?u=76281980&t=62)** In addition to the other things that I mentioned, if you have some kind of production experience with one or more of the major cloud vendors, which includes Amazon Web Services, Microsoft Azure or Google Cloud Platform, you will benefit more from this course.
>
> **[1:16](https://www.linkedin.com/learning/learning-snowflakedb/what-you-should-know?u=76281980&t=76)** As mentioned, data warehouse concepts will be a core part of this course, cause Snowflake DB is of course a cloud-native data warehouse and more.
>
> **[1:25](https://www.linkedin.com/learning/learning-snowflakedb/what-you-should-know?u=76281980&t=85)** In addition, if you've started working with any of the data lake concepts, we will be discussing that in this course as well.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5)
> **Analogies:** such as (2)
> **CLI Commands:** mysql (1)
> **Speakers:** - in (1)

#### Use cloud services
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/use-cloud-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/use-cloud-services?u=76281980&t=0)** - [Instructor] If you wish to follow along when I'm demonstrating working with Snowflake DB during this course, do be aware that it is a cloud-only service.
>
> **[0:09](https://www.linkedin.com/learning/learning-snowflakedb/use-cloud-services?u=76281980&t=9)** There is no local way to run it.
>
> **[0:11](https://www.linkedin.com/learning/learning-snowflakedb/use-cloud-services?u=76281980&t=11)** Now, fortunately, Snowflake DB does offer a free trial, which we'll be looking at.
>
> **[0:16](https://www.linkedin.com/learning/learning-snowflakedb/use-cloud-services?u=76281980&t=16)** However, if you're not using that or you overcome that limit, then what you're going to want to do is to make sure that you're either staying within the free tier.
>
> **[0:26](https://www.linkedin.com/learning/learning-snowflakedb/use-cloud-services?u=76281980&t=26)** If you're using a purely live account not a trial account, then you're going to want to verify that any of the compute resources are actually turned off after you're using them.
>
> **[0:38](https://www.linkedin.com/learning/learning-snowflakedb/use-cloud-services?u=76281980&t=38)** You're going to want to set budget alerts, which we'll see how to do that in the Snowflake DB ecosystem through the course.
>
> **[0:44](https://www.linkedin.com/learning/learning-snowflakedb/use-cloud-services?u=76281980&t=44)** And you're going to want to set multifactor authentication on the root account, and any other key accounts.
>
> **[0:51](https://www.linkedin.com/learning/learning-snowflakedb/use-cloud-services?u=76281980&t=51)** I really recommend if possible, and snowflake DB actually does make this easy with the 30 day free trial edition, that you set up a dedicated account just for learning even if you're are using snowflake in production.
>
> **[1:03](https://www.linkedin.com/learning/learning-snowflakedb/use-cloud-services?u=76281980&t=63)** Just to keep it separated, and to put a hard boundary to contain costs, and it's really very important that you pay attention to this so that you don't incur unexpected charges while you're learning.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. 1. SnowflakeDB Overview

#### Meet SnowflakeDB
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=0)** - [Instructor] As we get started learning about Snowflake DB, I think it's helpful to have a concise definition because it kind of is so unique in the market that when you are sharing your learning with other people, it can be helpful to have one-sentence definition.
>
> **[0:14](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=14)** So here's the way I would describe it.
>
> **[0:17](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=17)** Snowflake DB is a cloud-native SaaS data warehouse and platform.
>
> **[0:24](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=24)** So let's break that down, and let's start with characteristics of data platforms in general.
>
> **[0:31](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=31)** And then as we go through this course, we'll relate them to capabilities of Snowflake DB.
>
> **[0:35](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=35)** Data platforms allow you to store files, and data in tables.
>
> **[0:41](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=41)** They allow you to query that data including sometimes using machine learning.
>
> **[0:46](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=46)** They allow you to transform the data to input the data sometimes with streams always with batches or individually to output that data, and sometimes to visualize it.
>
> **[0:57](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=57)** Platforms are also designed for different types of use cases, and those are represented in the diagram by the SQL analysts, ETL in processing, data science, and BI and analytics tools.
>
> **[1:12](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=72)** Now in terms of cloud-native, Snowflake is very unique in the original niche that it serviced, data warehousing.
>
> **[1:20](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=80)** It was the first cloud-only data warehouse that could be run on multiple clouds.
>
> **[1:27](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=87)** Originally, it was runnable on Amazon Web Services.
>
> **[1:31](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=91)** They have subsequently added the capability to run on GCP or Azure.
>
> **[1:35](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=95)** And this was a recent little poll I did on Twitter.
>
> **[1:38](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=98)** And it reflects the fact that initially it was Amazon-only, but I do see more and more usage on other vendor clouds as Snowflake DB has added that capability.
>
> **[1:49](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=109)** If you are just learning because they started on AWS, I would recommend unless you have a compelling reason not to that you use the trial edition on AWS.
>
> **[1:59](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=119)** Almost all the features will be there first, and then they're added the other clouds as the team makes them available.
>
> **[2:07](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=127)** So if we now combine the terms cloud-native with SaaS or Software-as-a-Service, what does that mean in terms of Snowflake DB?
>
> **[2:15](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=135)** Well, that means that Snowflake DB provides a web interface and an API or an application programming interface to connect serverless cloud-based scalable services, and that is a definition of cloud-native.
>
> **[2:30](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=150)** Also very importantly, it's super fast getting started.
>
> **[2:35](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=155)** There's no install.
>
> **[2:36](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=156)** You're simply working with an endpoint.
>
> **[2:38](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=158)** Now, you can do that programmatically or with scripts but they also present actually, not one but two rich web Uis that a lot of my customers will use.
>
> **[2:50](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=170)** So one of the compelling aspects of Snowflake DB is when they say zero install they mean zero install.
>
> **[2:58](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=178)** You simply connect, and you start working with their data services.
>
> **[3:03](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=183)** Now snowflake DB was born as a cloud native SaaS data warehouse.
>
> **[3:08](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=188)** Data warehouses are databases.
>
> **[3:10](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=190)** So they host tables that are designed for analytics and reports.
>
> **[3:15](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=195)** So they're designed for fast-reading.
>
> **[3:18](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=198)** They use columnar storage.
>
> **[3:20](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=200)** So column-based storage, which will be drilling into in the table structure rather than row-based storage.
>
> **[3:26](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=206)** And they're designed to serve aggregate SQL queries.
>
> **[3:30](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=210)** So sums, means, max, they're designed for huge volumes of data.
>
> **[3:35](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=215)** And originally, data warehousing was based on a type of modeling called a Star schema.
>
> **[3:42](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=222)** And if you extend the sides of the star, it actually is a snowflake.
>
> **[3:46](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=226)** So you might think, well, that's where they got the name.
>
> **[3:48](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=228)** Actually, it's not.
>
> **[3:50](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=230)** I mean, maybe partially, but if you look up in Wikipedia where the name for Snowflake DB came from, it's because the three co-founders loved winter sports.
>
> **[4:00](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=240)** So they loved snow skiing but I think it has something to do with the schema too.
>
> **[4:04](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=244)** I don't know, I haven't asked them, but I think so.
>
> **[4:06](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=246)** Now, in addition to the resources I'm presenting in this course, as with all of my LinkedIn Learning courses.
>
> **[4:12](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=252)** I have created a companion GitHub repository, which I will be continuing to work on while I work on this course, and subsequently because I do work with Snowflake DB in production.
>
> **[4:23](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=263)** One aspect of this is that is dynamic.
>
> **[4:26](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=266)** So it will always be updated as I learn more.
>
> **[4:29](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=269)** And another aspect is, I like to share resources that I use.
>
> **[4:32](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=272)** So links, scripts and also it's on GitHub.
>
> **[4:35](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=275)** So if you want to do pull requests or something and add your own information.
>
> **[4:40](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=280)** So let me show you what that looks like.
>
> **[4:42](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=282)** So here we are out on GitHub, and it's Learn Snowflake DB and you can see that the folders follow the sections of this course.
>
> **[4:51](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=291)** So anytime I mention a URL or a website or tutorial, the link will be here.
>
> **[4:56](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=296)** So it's a convenient way for you to grab links.
>
> **[4:59](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=299)** So some of the initial links that we'll be talking about is the pricing, the additions and all that stuff is here.
>
> **[5:04](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=304)** And it's linked to Snowflake's documentation because it's dynamic, and I want you to have current information.
>
> **[5:11](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=311)** It is interesting that as of this recording, depends on who you ask, but Snowflake DB has a very large amount of the cloud data warehouse market.
>
> **[5:19](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=319)** This particular report says 44%.
>
> **[5:22](https://www.linkedin.com/learning/learning-snowflakedb/meet-snowflakedb?u=76281980&t=322)** So it's one of the reasons I'm making this course because it is a very compelling set of services.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2), aws (2), etl (1), gcp (1), api (1)
> **Code Keywords:** let (3), interface (2), super (1), from, (1)
> **Definitions:** is a  (4), means that (1)
> **Prerequisites:** install (3), getting started (1)
> **Tools:** github (3)
> **CLI Commands:** aws (2)
> **Speakers:** - [instructor] (1)

#### Understand SnowflakeDB data platform
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=0)** - [Narrator] So as we learn about Snowflake's capabilities, we need to think about data platforms and then understand what features are available in Snowflake DB, so we can understand if it's a fit for our use cases.
>
> **[0:11](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=11)** So platforms in general will have services that work as I say before and after you are actually having the data in the platform, and this is often expressed as some kind of a pipeline.
>
> **[0:24](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=24)** So data platforms will have input connectors, and Snowflake has these, they'll have streaming capabilities, output connectors, and visualization.
>
> **[0:33](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=33)** So, Snowflake has strong offerings across all these different vectors which makes it a compelling choice for end to end data solutions.
>
> **[0:43](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=43)** Now, within Snowflake itself in addition to a highly optimized storage and SQL engine there are additional capabilities that make it compelling.
>
> **[0:53](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=53)** These include user defined functions, very rich metadata, and as of this recording they have started to integrate machine learning through capabilities that allow the use of data frames from Apache Spark.
>
> **[1:08](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=68)** And this is an area that I'm really watching, and it's very interesting set of developments.
>
> **[1:13](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=73)** It's early as of this recording, but again Snowflake DB team has a history of introducing features and quickly optimizing them.
>
> **[1:21](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=81)** So, interesting feature set that they're working on.
>
> **[1:24](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=84)** Now, what that looks like on Snowflake we'll just pull aside from their architecture to discuss.
>
> **[1:30](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=90)** Their ecosystem supports a wide variety of data sources.
>
> **[1:34](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=94)** So, OLTP or transactional data sources, enterprise applications, third-party web, and log data.
>
> **[1:42](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=102)** They're particularly strong, it's often the format of JSON.
>
> **[1:45](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=105)** It's called unstructured or file based data, but they have support for other file formats too, CSV, XML, others, but JSON in particular is a particularly strong point in terms of ingest and query.
>
> **[1:57](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=117)** IoT scenarios which is again usually event or message based.
>
> **[2:02](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=122)** And they support traditional ETL, extract, transform, and load via pipelining and also streaming.
>
> **[2:08](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=128)** So they've got good feature set on the ingest side.
>
> **[2:12](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=132)** Of course they run on your cloud of choice which is a very compelling part of their offering, and then their core engine itself is highly flexible.
>
> **[2:22](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=142)** It supports data warehouse, data lake which we'll dive into in a subsequent movie, data engineering, exchange, applications, and as I just mentioned, starting to get into data science.
>
> **[2:33](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=153)** Data consumers, again the output they have a marketplace for monetization which we'll be looking at in this course or just sharing data.
>
> **[2:41](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=161)** If it's public data, for example, health data, COVID data, we're going to look at operational reporting, ad hoc analysis.
>
> **[2:48](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=168)** They have great partner story there and real-time analytics.
>
> **[2:51](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=171)** So, the end-to-end story is part of the value prop of Snowflake.
>
> **[2:57](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=177)** What comes in and what goes out and how you connect to build those pipelines.
>
> **[3:01](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-data-platform?u=76281980&t=181)** And it is something that is important to understand when you're looking at Snowflake ecosystem.

> [!info]- Semantic Content
>
> **Env Vars:** json (2), sql (1), oltp (1), csv (1), xml (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1), apache (1)
> **Code Keywords:** public (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### Compare cloud data warehouse solutions
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=0)** - [Instructor] Let's define some terms as we're understanding the capabilities of Snowflake DB.
>
> **[0:05](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=5)** So for a data warehouse and data lake.
>
> **[0:07](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=7)** Data warehouse accepts structured data which is stored in tables.
>
> **[0:13](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=13)** Again, the underlying storage is stored in columns which we'll look at in the storage section rather than row for aggregate purposes.
>
> **[0:20](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=20)** The schema is used when you read the data rather than when you write it in.
>
> **[0:24](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=24)** When you write it in, that would be for an operational OLTP, or transactional workload, which is not something that Snowflake DB is designed for.
>
> **[0:34](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=34)** And it's designed for a huge volume of data.
>
> **[0:37](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=37)** A data lake can work with unstructured data, usually files.
>
> **[0:41](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=41)** It's stored in object storage.
>
> **[0:43](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=43)** And in our case, 'cause we're cloud native, that would be buckets.
>
> **[0:46](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=46)** Again, it's schema on read.
>
> **[0:48](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=48)** And the idea here is massive volume.
>
> **[0:51](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=51)** So where this comes into play is for customer scenarios that have terabytes and petabytes and even exabytes of data.
>
> **[0:58](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=58)** And I actually, as a cloud architect, run into this with my genomic research customers.
>
> **[1:04](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=64)** As, you know, we're storing more and more DNA and RNA information for health informatics.
>
> **[1:12](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=72)** The amount of data warrants use of either a pure data lake or a warehouse in combination with a data lake.
>
> **[1:19](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=79)** There are other industries, but this is just an example from a use case that I'm involved with.
>
> **[1:24](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=84)** Now, a term that you'll hear among the various vendors, Snowflake DB and some of their competitors, is this idea of a data lake and a data warehouse.
>
> **[1:32](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=92)** So they call it a data lake house.
>
> **[1:35](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=95)** It makes the features of a data warehouse available in a data lake.
>
> **[1:39](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=99)** And the idea is flexible cost of storage.
>
> **[1:43](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=103)** So the old time versus money.
>
> **[1:45](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=105)** So if you have a massive amount of information that's file based that you store that in a lake to reduce costs.
>
> **[1:52](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=112)** And if you have other information that is structured, you store that in a data warehouse.
>
> **[1:57](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=117)** So we will be discussing aspects of that in this course.
>
> **[2:00](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=120)** And that is really an emerging area in the industry where you have the flexibility across your data platform to work with this lake house kind of architecture.
>
> **[2:11](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=131)** So now that we've defined these terms, common question I get from customers is what should I use Snowflake DB for, which workloads, and what should I not use it for?
>
> **[2:21](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=141)** And the summary of this is that you want to use Snowflake DB for reading and it should be in cloud native scenarios.
>
> **[2:29](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=149)** There is no on-prem version.
>
> **[2:32](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=152)** So if you have some sort of mixed scenario where you have something on-prem and something in cloud, Snowflake DB would not be for that.
>
> **[2:38](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=158)** But it is additionally for reading.
>
> **[2:40](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=160)** So ad hoc reads, data warehouse reads, and I explain that aggregate SQL queries or data lake reads, which is SQL on files.
>
> **[2:49](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=169)** It is not for online transactional.
>
> **[2:51](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=171)** It does not support transactions so it's not your working database.
>
> **[2:55](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=175)** That would be a SQL server, Oracle, MySQL, something like that.
>
> **[2:58](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=178)** And although you can define constraints, this is a very important point, such as primary keys and uniques, they're not enforced.
>
> **[3:06](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=186)** It's basically just informational.
>
> **[3:09](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=189)** You would have to build some mechanism to enforce them with the exception of not null.
>
> **[3:13](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=193)** So it's not what I would say, a hot or a working database.
>
> **[3:17](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=197)** It is a data warehousing analytics solution.
>
> **[3:21](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=201)** Now that being said, Snowflake DB is, as you'll remember, SaaS, fully managed.
>
> **[3:27](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=207)** And it has a number of important features that make it compelling.
>
> **[3:32](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=212)** And I'm really just picking my favorite five or six here.
>
> **[3:35](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=215)** I've seen trainings and information that have 15 Snowflake features, 25 Snowflake features.
>
> **[3:40](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=220)** When I say a lot, I mean a lot.
>
> **[3:42](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=222)** And we'll be diving into these important features in this course.
>
> **[3:45](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=225)** So virtual and multicluster warehouses, which allows you to build to the millisecond.
>
> **[3:52](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=232)** Time travel and zero-copy cloning, which allows you to go to a point in time and recover, so you don't lose data.
>
> **[3:59](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=239)** And zero-copy cloning allows you to do things, like make dev-test environments without incurring storage costs.
>
> **[4:06](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=246)** Data sharing and marketplace allows you to share data and monetize data.
>
> **[4:10](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=250)** High availability via across-cloud replication.
>
> **[4:13](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=253)** Granular security and automatic encryption and strong support for JSON data.
>
> **[4:19](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=259)** Very, very strong.
>
> **[4:20](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=260)** It's a really key feature.
>
> **[4:21](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=261)** And again, there's many other important features.
>
> **[4:23](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=263)** These are just ones that I've had customers get great value from.
>
> **[4:28](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=268)** Now, this is a multi-billion dollar industry.
>
> **[4:31](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=271)** So Snowflake DB has lots of competition.
>
> **[4:33](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=273)** It's kind of interesting that, you know, it runs on all the clouds but the cloud vendors also have their own cloud-based data warehouses.
>
> **[4:40](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=280)** Amazon Redshift was first in market and so it has first mover advantage.
>
> **[4:45](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=285)** BigQuery was more of the ad hoc workloads and then added the data warehousing.
>
> **[4:50](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=290)** So it kind of went the other way but it's always been serverless.
>
> **[4:53](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=293)** So that's interesting 'cause Redshift is only relatively recently added serverless capability.
>
> **[4:58](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=298)** I'm not as familiar with Azure Synapse, but it's the thing that's out there on Azure.
>
> **[5:03](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=303)** And then for Spark workloads, we have databricks.
>
> **[5:06](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=306)** That is really a Spark machine learning first, and they're adding a lot of data platform capabilities.
>
> **[5:12](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=312)** So it's a really hot competitive market, which makes good for us basically.
>
> **[5:17](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=317)** It's good for the customers.
>
> **[5:19](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=319)** And I will highlight I have the most expert with Redshift and BigQuery in the data warehousing space.
>
> **[5:24](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=324)** I've done a lot of work with Spark, but I'm not going to focus too much in this course on machine learning.
>
> **[5:29](https://www.linkedin.com/learning/learning-snowflakedb/compare-cloud-data-warehouse-solutions?u=76281980&t=329)** I'll focus more on differences between Redshift and BigQuery 'cause I think that that's more useful in thinking about when Snowflake DB is best fit for your particular use cases.

> [!info]- Semantic Content
>
> **Env Vars:** sql (3), oltp (1), dna (1), rna (1), json (1)
> **Code Keywords:** let (1), for. (1), case, (1), for, (1), from. (1)
> **CLI Commands:** make (2), mysql (1)
> **Definitions:** is a  (3)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Review SnowflakeDB architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980&t=0)** - [Instructor] At its core, the architecture of SnowflakeDB is relatively unique in that it completely separates the different control planes for maximum scalability, manageability, and usability, and it really reflects in the elegance of the product.
>
> **[0:16](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980&t=16)** We'll be drilling into this in the different sections of this course, but to get us started, data storage, which of course, because we're cloud native will be object store, so for example, if you run on AWS, it'd be S3, if you run on GCP, that would be Google Cloud Storage, Azure would be Azure Blob Storage.
>
> **[0:33](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980&t=33)** It is completely separated from query processing which are virtual warehouses, or you can think of them as clusters of virtual machines, which again, you manage at the level of paying for compute time at the millisecond billing level, you don't deal with machines, or operating systems, or patching, or any of that stuff.
>
> **[0:53](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980&t=53)** And then up above that, you have a very important set of services that are basically continually being updated, and enhanced, and moving a lot of the stuff that had to be done manually before modern architectures like this were available, so infrastructure security optimization, and then we have authentication and access at the top layer.
>
> **[1:14](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980&t=74)** So this disconnected architecture when used correctly, and that's kind of a key aspect in why you would want to participate in a course like this, because it is so new to have this actually physically separated.
>
> **[1:28](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980&t=88)** You can actually get a really good total cost of ownership, and speaking of TCO, the areas that I think are most compelling in terms of Snowflake for TCO is, starting on the left side here, you have one platform, one copy of data, and many workloads.
>
> **[1:46](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980&t=106)** You can literally spin up your query layer while you've got another compute layer doing ETL.
>
> **[1:53](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980&t=113)** So you can actually be loading while you are computing against it.
>
> **[1:57](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980&t=117)** Now, of course obviously, that might not make business sense, but the fact that you can do that by just simply spinning up another service layer is really powerful.
>
> **[2:07](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980&t=127)** It gives you almost unlimited performance and scale, but again, you need to be able to manage that and understand the cost associated with it and how to manage a compute layer that can be scaled up and scaled down nearly instantly, because that is a pretty new paradigm in the world of data warehousing.
>
> **[2:27](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980&t=147)** One of the other value prop pillars of Snowflake is the near zero maintenance, and again, I find this to be quite compelling when you compare to something that's server based, Redshift for example, where you're going to have to be aware of the version of the engine and all this kind of stuff, and you don't have to in Snowflake.
>
> **[2:48](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980&t=168)** Again, it's more similar to Google's BigQuery, you just work with the engine and the vendor takes care of all the maintenance.
>
> **[2:55](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980&t=175)** Another really important and compelling aspect is the depth to which the Snowflake team has created secure by default, so everything is encrypted by default and the ability to set up appropriate security.
>
> **[3:10](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980&t=190)** Many different capabilities, role-based access controls, security, very granular really just what the customer needs.
>
> **[3:18](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980&t=198)** I find actually that the security storing in Snowflake is the best that I have seen in any cloud-based data warehouse, and that is an nontrivial because usability of security results in correctly implemented security, and of course, this is your production data, so if it's set up incorrectly in terms of security, you have all kinds of risk to the enterprise.
>
> **[3:41](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980&t=221)** So, you know, there's lots more, like I said when I was talking about features, the fact that this platform is fully managed is the value prop.
>
> **[3:48](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980&t=228)** Now on the other side of that, the concern that I will hear from customers is the cost, however, if it is run correctly and importantly, the scaling of the compute layer, it is a comparable cost to the other platforms out there.
>
> **[4:04](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980&t=244)** So there is not really a learning curve, it's just a paradigm shift in this fact that Snowflake literally is separate pieces.
>
> **[4:12](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980&t=252)** The data storage is separate from the compute, is separate from the services, and really getting your head around that is not super difficult, it just requires, especially if you've had servers on prem, it's a different way of working.
>
> **[4:28](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflakedb-architecture?u=76281980&t=268)** So, you know, going through a course like this and or some of the Snowflake resources are well worth the time and money, because if you think of it in terms of servers you have to manage you're probably not going to get the best TCO out of Snowflake, you need to understand how to use it as a cloud-native SaaS data warehouse.

> [!info]- Semantic Content
>
> **Env Vars:** tco (3), aws (1), gcp (1), etl (1)
> **CLI Commands:** find (2), aws (1), make (1)
> **Code Keywords:** this, (1), default, (1), super (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** for example (2), similar to (1)
> **Prerequisites:** set up (2)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Use SnowflakeDB cloud tools
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=0)** - [Instructor] So to get us started actually working with Snowflake DB, we need to understand what tools we can use.
>
> **[0:06](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=6)** For this course, I'm going to be using mostly the web UI or the console.
>
> **[0:10](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=10)** Now, as I record this course there are two different consoles.
>
> **[0:13](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=13)** So we'll be switching back and forth between the consoles, and I believe that that is done because it looks like Snowflake DB is adding more capabilities around those edge cases, the ingest and the visualization and all that, like coming in and going out of the engine.
>
> **[0:29](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=29)** But you'll see what I mean when I show you the console here in just a minute or the consoles.
>
> **[0:33](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=33)** There is a command line interface it's called SnowSQL.
>
> **[0:37](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=37)** It's Python-based, and that's for scripting.
>
> **[0:39](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=39)** As with any cloud service in production, you would want to use the web UI when you are learning but you want to script, and have all of your SQL scripts and all of your ETL processes checked into source control, when you're in production.
>
> **[0:55](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=55)** There is also Snowpipe, which supports streaming ingest.
>
> **[0:59](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=59)** There are drivers and software development kits for of the major languages such as you know Java and Go, and so on and so forth.
>
> **[1:06](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=66)** There are also Snowpark APIs currently for AWS only.
>
> **[1:10](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=70)** I'm sure it'll be for the other clouds shortly.
>
> **[1:12](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=72)** And then there are a number of partner connections.
>
> **[1:15](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=75)** We may take a look at some of those.
>
> **[1:17](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=77)** Because again, from the real-world, that's something that I actually do quite frequently but we'll be mostly in the web UI console because of the time for this course.
>
> **[1:27](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=87)** Although in the real world, you'd probably be using SnowSQL quite a lot as well.
>
> **[1:32](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=92)** Now for you to get started, I've already done this step.
>
> **[1:35](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=95)** I really recommend that you set up a dedicated account, and Snowflake DB has a 30 day free trial, and this is what the sign up screen looks like.
>
> **[1:43](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=103)** You don't have to give 'em a credit card or anything.
>
> **[1:45](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=105)** It's $400 US in credits.
>
> **[1:48](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=108)** At the end of 30 days, it does shut off though automatically.
>
> **[1:51](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=111)** So you can't do you know anything other than learning.
>
> **[1:54](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=114)** I do recommend that you select the enterprise even though the credits cost a little bit more because you can see some of the features that I think are compelling.
>
> **[2:02](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=122)** Some things I mentioned, time, travel, multi cluster warehouses and materialized views.
>
> **[2:07](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=127)** I don't think that you really need the business critical for learning, unless you want to try that out.
>
> **[2:12](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=132)** Again, I recommend that you try on Amazon because all the features are there first, at least of the time of this recording.
>
> **[2:20](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=140)** But again, I will tell you that this will be shut off after 30 days.
>
> **[2:23](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=143)** You can upgrade it by giving them a credit card.
>
> **[2:26](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=146)** But if you do that, make sure you put controls on.
>
> **[2:29](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=149)** So that being said, let's take a quick look.
>
> **[2:32](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=152)** I've already signed up, and you do get sample database by default in this free trial addition, which is handy 'cuz you can just jump in and start looking at the sample databases.
>
> **[2:42](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=162)** Actually there's several.
>
> **[2:43](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=163)** In addition of that, I've also added some other sample data.
>
> **[2:47](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=167)** So yours might not look exactly like mine.
>
> **[2:50](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=170)** So here we are in the main Snowflake DB consults called I think the Legacy Consult, which is a little bit strange, and you can see that I am in the databases section, and I have the Snowflake sample data.
>
> **[3:02](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=182)** I have snowflake data, and then I just pulled in this COVID-19 data, which I'll show you how to do in a subsequent movie.
>
> **[3:08](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=188)** So you probably wouldn't have that.
>
> **[3:10](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=190)** And then you have various capabilities here.
>
> **[3:12](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=192)** So shares, data, marketplace, warehouses.
>
> **[3:15](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=195)** So on and so forth.
>
> **[3:16](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=196)** And you can see that I am the account admin.
>
> **[3:18](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=198)** You can see this is running on Amazon Web Services in US East.
>
> **[3:23](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=203)** Now, we have this icon for Snow site, and I've already clicked it but basically it's relatively new.
>
> **[3:29](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=209)** So they're saying here we've added new features not available in classic including full account search.
>
> **[3:34](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=214)** SQL auto complete.
>
> **[3:35](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=215)** Chart visualization, usage dashboards and more.
>
> **[3:39](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=219)** So I'm going to record showing both interfaces.
>
> **[3:42](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=222)** I don't know.
>
> **[3:43](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=223)** I don't work for Snowflake DB if this is what's eventually going to become the default, but I'm just going to switch back and forth.
>
> **[3:51](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=231)** So here we can see that we are in US East in Amazon Web Services.
>
> **[3:57](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=237)** We'll have enterprise.
>
> **[3:58](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=238)** Here we can see my credentials, and our objects are listed here, and they're a little bit different.
>
> **[4:04](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=244)** And we can switch back and forth between the classic console here.
>
> **[4:08](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=248)** One thing to note, is we start with worksheets here, which are SQL statements.
>
> **[4:13](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=253)** And on the classic console, we start with databases, which is your storage area.
>
> **[4:18](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=258)** So it's kind of interesting, the switch there.
>
> **[4:20](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=260)** Worksheets would be on the query or the compute layer, which would be on you know worksheets here, whereas worksheets here is what it starts with and the data is in here.
>
> **[4:31](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=271)** So it's just a slightly different, but I mean, this is the interface that's presented.
>
> **[4:36](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-cloud-tools?u=76281980&t=276)** So this is what we're going to be working with throughout this course.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (3), interface (2), let (1), new. (1), default, (1)
> **Env Vars:** sql (3), etl (1), aws (1), covid (1)
> **CLI Commands:** python (1), aws (1), make (1)
> **Definitions:** is a  (2)
> **Tools:** command line (1)
> **UI Navigation:** select the (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)

#### Use Snowpark Python worksheets
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/use-snowpark-python-worksheet?u=76281980)


### 3. 2. SnowflakeDB Data Storage and Files

#### See SnowflakeDB queries
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=0)** - [Instructor] We've learned that SnowflakeDB separates the control planes for maximum control and scalability.
>
> **[0:06](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=6)** And of course, in a database, you have to have data.
>
> **[0:09](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=9)** So in order to understand this, we're going to actually just explore with some of the sample data first and then learn how to load data into our SnowflakeDB free trial instance.
>
> **[0:21](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=21)** Before we do that though, we need to review the object hierarchy.
>
> **[0:25](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=25)** So the way SnowflakeDB works is tables belong to schemas.
>
> **[0:30](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=30)** Schemas are a logical grouping of database objects, tables, views, et cetera.
>
> **[0:36](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=36)** Each schema belongs to a single database.
>
> **[0:38](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=38)** So schema belongs to a database which belongs to an account.
>
> **[0:42](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=42)** At the level of an account, you have a number of objects, user, role, warehouse, resource monitor, integration, and of course database.
>
> **[0:51](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=51)** So you can think of schema as the glue that connects the account level objects to the table and subsequent level objects.
>
> **[1:00](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=60)** So external table view, stored procedure, so on and so forth.
>
> **[1:04](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=64)** So then I think this becomes clearer when we actually look at the WebUI so let's do that now.
>
> **[1:09](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=69)** So I'm in the classic UI in the worksheets view and I have the trial edition that has the sample data and then I just retrieved this other data which you would not see unless you retrieve that and we'll see that in a subsequent movie.
>
> **[1:23](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=83)** So in the Snowflake sample data here, you can see if I pass my mouse over this and I click on the three dots, I can view details about it, and I can see information about the various schemas that are associated here.
>
> **[1:37](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=97)** So if I drill in, you can see that I have a number of different schemas with sample data and if just go into this first one, you can see that for this schema, I have associated tables and other objects.
>
> **[1:51](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=111)** I don't have any views or anything for this particular one, but I could.
>
> **[1:54](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=114)** So now, if I want to look at this schema and I want to view details of it, then it's giving me an error because I don't own this schema.
>
> **[2:03](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=123)** This is provided by SnowflakeDB.
>
> **[2:06](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=126)** So I can't really look at that, but if I go down to the level of the table, for example, and if I look at something that is going to be a big table here like store sales, you can see that that's a 10 terabyte table and then if I drill in here, going to have to actually adjust the resolution a little bit, so I can do that.
>
> **[2:26](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=146)** Then I preview the data.
>
> **[2:28](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=148)** I'll adjust that bigger so you guys can see.
>
> **[2:31](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=151)** And you can see that I have the data preview.
>
> **[2:33](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=153)** Of course, this is a query window, so I could write a query.
>
> **[2:36](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=156)** So if I wanted to work with another table, I'll just take a smaller one here, and if I wanted to see the place names in SQL, that would populate the name and you can see the object hierarchy there.
>
> **[2:46](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=166)** So if I wanted to just get all the info from this, select star from this table and then I would just run this query and then that's going to execute my first query.
>
> **[3:00](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=180)** Now, how does this compare to the other interface, Snowsight?
>
> **[3:04](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=184)** Let's go ahead and take a look at that.
>
> **[3:06](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=186)** And what I've done here is I've just preloaded a query just for the sake of time and I ran this query and here's the results.
>
> **[3:13](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=193)** Now, this is really interesting because you can see, let me bring this back up again, I just get this off, that we have this information here that allows us to understand more about the query and about the information.
>
> **[3:28](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=208)** You can see, it tells us the types, this is kind of Tableau-like, the visual interfaces so that you can understand the data.
>
> **[3:35](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=215)** It's more of an analytics kind of a view.
>
> **[3:38](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=218)** And you can also see we have the ability to chart which is really nice and we have the different chart types.
>
> **[3:44](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=224)** So again, this is more of an analytics kind of a view here but we still do have the same objects, you know, 'cause if we go into data and we go to the sample data, you can see if we go into here, we have tables.
>
> **[3:58](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=238)** And again, if we go to that same store table, the table details will come up in just a minute here.
>
> **[4:06](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=246)** Then we have the columns, we have the data preview and let's see if this is up yet.
>
> **[4:11](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=251)** I find that this takes longer.
>
> **[4:13](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=253)** I think this is a newer interface.
>
> **[4:15](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=255)** It will render, but it's not as like, instantaneous as the other interface.
>
> **[4:19](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=259)** So it's interesting, these two different interfaces, these two different WebUIs.
>
> **[4:24](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=264)** Also of course you see information about the table up on the top here.
>
> **[4:27](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=267)** But you can see the different sort of focus area in terms of the visual output of the worksheets.
>
> **[4:34](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=274)** I'm just going to go back to that while we're waiting.
>
> **[4:37](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=277)** What I mean by that is the detail here and the ability to chart versus the more traditional view here.
>
> **[4:43](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=283)** Now, one of the other things that is interesting is you have query details and you can view the query profile which of course is like super important in terms of the overhead of the query on the compute tier.
>
> **[4:57](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=297)** And again, it's really very obvious and clear here that you have a compute tier, which is completely separated from a data tier that has your databases.
>
> **[5:06](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=306)** Again, it's similar, but it's just called worksheets which is your compute tier.
>
> **[5:12](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=312)** So just some differences in the interface as we, you know, start to work with this set of services a little bit more.
>
> **[5:19](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=319)** So the question that you are probably going to have is how did I get this data into SnowflakeDB?
>
> **[5:26](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=326)** And that's by using the data marketplace.
>
> **[5:29](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=329)** So I've mentioned that in my introduction that the data marketplace is where you discover data that is either premium, you purchase it or open source and free, like in the case of this COVID 19 data.
>
> **[5:42](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=342)** Notice, if I click explore the data marketplace, it's going to take me over to the, actually I think this link is broken as of this recording, but where you're going to find this is here.
>
> **[5:55](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=355)** So I think they just need to update this link.
>
> **[5:58](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=358)** And then inside of the data marketplace, you'll see data that is premium and you can search for, you know, different kinds of data.
>
> **[6:05](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=365)** So if I put in here COVID, for example, then that's where I got this data and see it's free and then you can query the data or view the database and really, that's just how you make the data available.
>
> **[6:18](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=378)** You can see information about the data, you can see sample queries.
>
> **[6:22](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=382)** So again, this is a feature set that Snowflake is exposing and it's good when you're learning how to work with Snowflake.
>
> **[6:30](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=390)** You can look at these various different categories and the sample data and you can see various data sets that you can integrate with.
>
> **[6:38](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=398)** And the way that you see that is here I have the COVID data and it's the COVID 19 schema and there's my data set.
>
> **[6:50](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=410)** And you can see there's information about the table in this particular case.
>
> **[6:55](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=415)** And I got the data atlas so I need to get the actual underlying data so it's like metadata about the data.
>
> **[7:00](https://www.linkedin.com/learning/learning-snowflakedb/see-snowflakedb-queries?u=76281980&t=420)** But again, just for demonstration purposes, the marketplace here is something that I have found to be useful as I'm working with SnowflakeDB.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (4), this, (2), pass (1), super (1)
> **Env Vars:** covid (4), sql (1)
> **CLI Commands:** find (2), make (1)
> **UI Navigation:** go to (2), click on (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (2), it's like (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Learn SnowflakeDB file ingest
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=0)** - [Instructor] So to get data into Snowflake DB Storage, which of course you'll remember is going to be Cloud Object Storage.
>
> **[0:08](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=8)** So let's just go with the case of AWS, it would be S3.
>
> **[0:12](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=12)** It's literally going to be stored on cloud buckets but you don't see that of course that's obstructed away from you.
>
> **[0:18](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=18)** It's scalable and available because it is stored as object storage on your particular cloud vendor.
>
> **[0:23](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=23)** It's encrypted by default, it's compressed and autopartitioned.
>
> **[0:27](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=27)** And again, I'll be drilling in and giving you some resources so you can better understand it's in 16 megabyte, micro partitions which leads to very extremely high query efficiency and storage efficiency automatically.
>
> **[0:42](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=42)** And this is a differentiator from some of the other platforms out there, some of 'em are autopartition and some of 'em you have to manually partition which frankly is a pain and often done wrong, so it's a compelling and very useful feature.
>
> **[0:55](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=55)** And this is just kind of a visualization so that you can think about how you might get your scalable storage available in stuff like DB.
>
> **[1:05](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=65)** Again, the underlying storage mechanism is an object store so Amazon would be an S3 bucket Azure blob store or GCP bucket GCS.
>
> **[1:13](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=73)** And you have the option of loading it into a Snowflake managed underlying object store or actually leaving it in the original object store it's called an external table and we'll talk a little bit more about that in a minute.
>
> **[1:27](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=87)** You can use the copy command to move from your source bucket if you have your files already in the cloud or you can move from like an on-prem if you want to upload from on-prem, you also can use a snow pipe object.
>
> **[1:41](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=101)** So there are different ways for you to get the information into the snowflake DP managed storage.
>
> **[1:49](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=109)** So we are going to start with thinking about loading kind of from a high level and then we're going to drill in for some specific examples and scenarios but from a high level you're going to source your files or your data, usually from a cloud based bucket, it doesn't have to be, but that's the most general pattern.
>
> **[2:06](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=126)** And then you're going to create or use a file format so CSV, JSON, custom, you have to specify what is the format.
>
> **[2:15](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=135)** Now, if you're just testing, you can load with the web UI but there's a maximum of a hundred megabytes for that so that's really just for trial scenarios.
>
> **[2:23](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=143)** You're normally going to use the CLI, the snow SQL CLI and you're going to load with a put command.
>
> **[2:30](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=150)** Now, most typically you're going to use another object called a staging table as an intermediate layer so that you can review your load and this comes from best practices around data warehousing.
>
> **[2:42](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=162)** Oftentimes data is messy or dirty or needs to be validated.
>
> **[2:47](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=167)** So rather than loading, you know, directly, it's typical that you're going to use a stage table.
>
> **[2:52](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=172)** And this is what's shown in most every example and snowflake DB has an object specifically called staging for this.
>
> **[3:00](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=180)** So it's easier to kind of set up a very lightweight kind of ETL or extract transform and load processor pipeline.
>
> **[3:08](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=188)** Now the destination table within Snowflake DB the default is called a permanent table, so let's just call it a table.
>
> **[3:14](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=194)** There are some other table types, there is a temporary table available and that's good for the session only so the query window if you will.
>
> **[3:23](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=203)** And then there is a type called a transient which is kind of halfway between permanent and temporary.
>
> **[3:29](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=209)** It can persist beyond a session but it does not have a fail safe period which is by default for a permanent table seven days.
>
> **[3:37](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=217)** So it is less expensive 'cause you're not paying those charges.
>
> **[3:41](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=221)** And then you have a type of table that supports the data lake scenario, that's the external table.
>
> **[3:46](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=226)** In that case, the data is not moved from the source original underlying object bucket into a Snowflake managed storage location or another bucket, it is simply kept there.
>
> **[3:57](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=237)** And why you might want to do that if you remember back to our definition of data warehouse versus data lake is cost.
>
> **[4:03](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=243)** It is going to be cheaper for example if you keep data in S3 natively rather than moving it into Snowflake storage.
>
> **[4:13](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=253)** Now, when you're thinking about this it's a time versus money situation.
>
> **[4:17](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=257)** And this is really only applicable when you have massive volumes like in the terabytes per day level like some of my genomic customers, for most people you will not be using data lake scenarios.
>
> **[4:31](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-file-ingest?u=76281980&t=271)** Just simply for ease and for speed, you're just going to move everything into a snowflake managed bucket but that is an available capacity if you have that particular need.

> [!info]- Semantic Content
>
> **Env Vars:** cli (2), aws (1), gcp (1), gcs (1), csv (1)
> **Definitions:** is a  (4), is an  (2), is called (1)
> **Code Keywords:** let (2), default, (1), this. (1), case, (1)
> **CLI Commands:** aws (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Load SnowflakeDB using web UI
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=0)** - [Instructor] So that we can understand from scratch, I'm just going to use the classic web UI and create a database.
>
> **[0:06](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=6)** So I'm going to call this, this_db and notice that it has the sequel there and I'm going to click finish.
>
> **[0:14](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=14)** So I could grant privileges to it, I could clone, drop or transfer ownership if I click into it.
>
> **[0:20](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=20)** Now, if I want to create a table, let's call it my table.
>
> **[0:26](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=26)** And notice that it's associated to the public schema, which is provided by default.
>
> **[0:31](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=31)** And then I can add columns, so column one is a string column two, I have these data types available so you notice integer, timestamp, double, number, variable character, date, float, variant.
>
> **[0:46](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=46)** That's very important, the variant data type that's where you are going to get all your JSON capability, object, array and boolean.
>
> **[0:54](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=54)** So I'll just throw an int in here, notice nullability which is the only constraint that will be enforced.
>
> **[1:02](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=62)** You can note other constraints in your sequel like primary keys, for example but they are informational only.
>
> **[1:08](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=68)** And again, I can show the sequel here and I can create a table.
>
> **[1:15](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=75)** So I can create a similar table, I can clone it.
>
> **[1:18](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=78)** Now, if I wanted to load data into it directly, I have four steps.
>
> **[1:23](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=83)** Notice, this is where we start to see the compute and the data storage.
>
> **[1:29](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=89)** At this point, it says which warehouse do you want to use?
>
> **[1:32](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=92)** And that is the compute layer so you can think of it as the VMs although you're not really seeing them.
>
> **[1:38](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=98)** And then you say next, and where's the source files, so you can select from your computer or from an external stage.
>
> **[1:45](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=105)** And I'm just going to select a file here, which will not work because I don't have the right structure or the right table for this but just for demonstration purposes.
>
> **[1:54](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=114)** And then for the file format, I can click add and then I can just go with a CSV default if I want to do that for this schema.
>
> **[2:05](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=125)** Notice the format type CSV, JSON, XML, Avro, ORC or Parquet and then I have compression methods separators, row separators, headers, field optionally enclosed by, double quote, single quote or nothing.
>
> **[2:20](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=140)** What is a null string indicator, trimming space, error on column count mismatch, escape character, escape unenclosed field, date formats, time stamp formats and comment and again, I can see the sequel here.
>
> **[2:37](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=157)** So notice this is called a file format and then the next step would be the load options which like I said will fail because the structure of the table does not match the underlying structure of the particular file.
>
> **[2:52](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=172)** Then I would just click load so I'm just going to cancel that.
>
> **[2:55](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=175)** So you can see inside of here if I wanted to make a view I would create a view here from my table.
>
> **[3:02](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=182)** And here is if I wanted to create a schema which again is a container for objects from our earlier movie.
>
> **[3:09](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=189)** Stage, I had mentioned as the best practice where you can create a stage location and notice the locations here are Snowflake or your various cloud vendors.
>
> **[3:20](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=200)** And on your file formats, we've got this default format which would be used for loading, and we'll come back to these other objects in subsequent movies.
>
> **[3:30](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=210)** Now, how does this look in the snow site?
>
> **[3:33](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=213)** If we wanted to work with data here, I created that database so I'm just going to refresh.
>
> **[3:39](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=219)** So here's my database, here's my public here's my table, there's my table.
>
> **[3:45](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=225)** And again, this is more of a viewing dashboard if you will because you'll remember you can query and see the rich results, but this is really more of your loading, your sort of ETL, because you've got access to some of these other objects that you're going to need such as file formats and stages.
>
> **[4:05](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=245)** Whereas here you're really looking at the query itself.
>
> **[4:09](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=249)** You can start to understand the differences between these consoles, looking at the capabilities around loading.
>
> **[4:15](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-web-ui?u=76281980&t=255)** Now, again, in terms of loading you would use this console only for testing but there's a limit of a hundred megabytes in terms of files, so if you wanted to use something beyond that then you would use the command line interface.

> [!info]- Semantic Content
>
> **Code Keywords:** public (2), this, (1), let (1), default. (1), throw (1)
> **Env Vars:** json (2), csv (2), xml (1), orc (1), etl (1)
> **Definitions:** is a  (3), is called (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** this_db (1)
> **Tools:** command line (1)
> **Best Practices:** best practice (1)

#### Load SnowflakeDB from S3
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=0)** - [Instructor] At this point I want to introduce the excellent Snowflake documentation because it is such a rich set of features.
>
> **[0:07](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=7)** I could make a course that was, I don't know, eight hours long, 40 hours long from all the features.
>
> **[0:12](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=12)** And I just don't want to do that but I do want to point you to resources so that you can learn more when it's appropriate.
>
> **[0:21](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=21)** In particular for file loading the sections here which I've read all of them and done most of them are very well written, very useful.
>
> **[0:31](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=31)** So I would recommend that to get to the next step of loading you do this tutorial, Bulk Loading from a Local File System Using the COPY command.
>
> **[0:42](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=42)** So this is going to, as it says, describe how to load data from files into an internal Snowflake stage into a table.
>
> **[0:50](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=50)** So this will be using the CLI.
>
> **[0:53](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=53)** We're not going to take the time to do this manually but you notice there are nine steps to it and very well written.
>
> **[1:00](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=60)** I'd really recommend this as an next step.
>
> **[1:02](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=62)** So pause this video, go ahead and do this.
>
> **[1:05](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=65)** And then in addition to that, the most common use case I think is going to be either loading locally or loading from S3.
>
> **[1:14](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=74)** So the next tutorial covers that.
>
> **[1:17](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=77)** So once you've mastered the using the CLI basically, then the next thing that you would want to do is use the CLI with files that aren't on your local machine but they're in an S3 bucket.
>
> **[1:30](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=90)** And so again, this is another 20 to 30 minutes but I think it's time well spent.
>
> **[1:35](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=95)** It takes you through the steps that I showed you in the previous movie, but with scripts.
>
> **[1:40](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=100)** So creating a file format object, creating a named stage object, best practice again, copying data into the target table, resolving data load errors, and verifying the loaded data.
>
> **[1:53](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=113)** Very crisply written, and really useful as a next step.
>
> **[1:57](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=117)** In addition to that, if you have JSON data, because again great support for all things JSON in Snowflake DB, you can see that we've got a tutorial on that.
>
> **[2:07](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=127)** And there is Parquet data as well.
>
> **[2:10](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=130)** So in general, the Snowflake DB documentation is really outstanding.
>
> **[2:14](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=134)** I haven't found one error and I am notorious for testing documentation and finding errors.
>
> **[2:21](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=141)** So props to the documentation team.
>
> **[2:23](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=143)** I would always recommend to for any feature that you're trying explore to go ahead and do the tutorials and then understand.
>
> **[2:32](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=152)** And again, in this section, which is huge and really useful loading data, they talk about the considerations, preparation and all the different aspects of working with data for Snowflake DB.
>
> **[2:48](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-from-s3?u=76281980&t=168)** In addition to this they have a great tutorial on using Snowpipe which we'll talk a little bit about in the next movie.

> [!info]- Semantic Content
>
> **Env Vars:** cli (3), json (2), copy (1)
> **CLI Commands:** make (1)
> **Code Keywords:** this. (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Load SnowflakeDB using Snowpipe streams
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=0)** - [Instructor] So again, in the documentation, another type of loading is Snowpipe.
>
> **[0:04](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=4)** As it says here, it's the continuous data ingestion service.
>
> **[0:07](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=7)** It loads data within minutes after files are added to a stage and submitted for ingestion.
>
> **[0:12](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=12)** It's serverless, it manages load capacity and ensures optimal compute resources to meet demand.
>
> **[0:19](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=19)** It provides a pipeline for loading fresh data in micro-batches.
>
> **[0:23](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=23)** That's really important to understand.
>
> **[0:25](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=25)** So it's micro-batching as soon as it's available.
>
> **[0:28](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=28)** And if we drill in a little bit, the data will be available within minutes, rather than manually executing copy statements on a schedule to load larger batches.
>
> **[0:39](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=39)** So it's kind of in the middle of continuous and not continuous.
>
> **[0:45](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=45)** It's not a series of events, it's micro-batches, it's faster than a manual copy.
>
> **[0:50](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=50)** And then again, just kind of drills down.
>
> **[0:52](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=52)** I really like this, how is Snowpipe different from bulk data loading?
>
> **[0:57](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=57)** So it goes into the technical differences.
>
> **[1:01](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=61)** So it starts with authentication, then goes into load history and it goes very specifically.
>
> **[1:09](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=69)** For example, this is something I get a lot from customers, how do transactions work in bulk data load versus a pipe?
>
> **[1:16](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=76)** So in this case, bulk data loads loads are performed in a single transaction, in Snowpipe, loads are combined or split into single or multiple transactions based on the number in size of row in the file.
>
> **[1:27](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=87)** Row of partially loaded files based on the ON_ERROR can be combined or split.
>
> **[1:32](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=92)** And again, cost is important.
>
> **[1:33](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=93)** So for bulk data load, it's billed for the amount of time each virtual warehouse is active.
>
> **[1:42](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=102)** Snowpipe is billed according to the compute sources used in the Snowpipe warehouse.
>
> **[1:46](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=106)** So you can think of bulk as like on/off whereas Snowpipe is on but you might have a smaller size warehouse.
>
> **[1:54](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=114)** This is one of those nuances that's important to understand to get the proper total cost of ownership.
>
> **[2:01](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=121)** For example, I've seen a lot of customers that didn't know to make a smaller size warehouse for Snowpipe.
>
> **[2:07](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=127)** That's why I'm calling it out.
>
> **[2:08](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=128)** So again, it's simple but not easy.
>
> **[2:12](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=132)** There's a lot of little nuances like this cost nuance that you have to get right.
>
> **[2:17](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=137)** So I would recommend that if you're going to use Snowpipe, that you go through the documentation as well as the associated tutorial so you understand these nuances.
>
> **[2:28](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=148)** Again, it's not difficult but you want to make sure you use them so that you get the best value out.
>
> **[2:34](https://www.linkedin.com/learning/learning-snowflakedb/load-snowflakedb-using-snowpipe-streams?u=76281980&t=154)** Micro-batching unloading, using Snowpipe.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** this, (1), case, (1)
> **Documentation:** the documentation (2)
> **Analogies:** for example (2)
> **Env Vars:** on_error (1)
> **Speakers:** - [instructor] (1)

#### Scenario: Import files and data into SnowflakeDB
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=0)** - [Narrator] Let's pull what we've learned about the data tier specifically loading in Snowflake DB through this blog post which you can actually run on your own.
>
> **[0:10](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=10)** That was written by Felipe Hoffa.
>
> **[0:13](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=13)** Felipe is a data cloud advocate at Snowflake DB.
>
> **[0:16](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=16)** He was previously working, interestingly, as an advocate for BitQuery at Google.
>
> **[0:21](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=21)** So, his examples are excellent and I highly recommend that you follow him on Medium where he tends to write them up.
>
> **[0:30](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=30)** And they're all replicatable.
>
> **[0:33](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=33)** There's a lot of lessons in this article and I'm going to just kind of highlight some of the things to pay attention to.
>
> **[0:39](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=39)** And I would tell you that this is again, a fun exercise.
>
> **[0:43](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=43)** If you want to, after I get done with this, pause the video and then challenge yourself to see if you can replicate this.
>
> **[0:49](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=49)** So the scenario is to load all Hacker News comments into Snowflake in less than a minute, because again the idea here is to show the scalability, right, and the ability to query complex data.
>
> **[1:03](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=63)** So he first tells you where you can find the Hacker News archive table, which is kind of ironic and funny.
>
> **[1:09](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=69)** It's in Google BitQuery.
>
> **[1:11](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=71)** The table has an updated copy of Hacker News and it has 11 gigs of data with 30 million rows.
>
> **[1:19](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=79)** And he shows you how to copy it into Snowflake as Parquet, for example, and that took 16 seconds.
>
> **[1:30](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=90)** And on his Snowflake account, he configured a secure integration with Google Cloud Storage.
>
> **[1:36](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=96)** So, he can check that the files are there with a SQL query, and he tells you, you know, there's a link on how to do that.
>
> **[1:44](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=104)** And this demonstrates one of the great capabilities of Snowflake, which is cross cloud.
>
> **[1:50](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=110)** So he is saying, even when a Snowflake account is in AWS you can query data with Google Cloud Storage which is pretty interesting.
>
> **[1:58](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=118)** So then he's going to create a schema-less table to load the Parquet files into a Snowflake native table.
>
> **[2:05](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=125)** Notice he's using the variant data type.
>
> **[2:08](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=128)** And he's copying the table in the format of Parquet, and it took 43 seconds to create the semi-structured table with an S warehouse, which, while also moving the data from GCP to AWS.
>
> **[2:20](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=140)** And if you're paying attention, you'll know he's showing you the console that shows you the query detail information the snow site console, because there's the query duration and the status.
>
> **[2:32](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=152)** And then he also tried it with an L size warehouse.
>
> **[2:35](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=155)** The time goes down to 28 seconds.
>
> **[2:38](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=158)** So, it's basically time and money kind of situation.
>
> **[2:41](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=161)** And then he points out that in Snowflake, the data is compressed and this is because of the micro partitions.
>
> **[2:48](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=168)** And then he goes on to talk about querying the data with the variant data type, which I'm going to stop here because we haven't really covered querying, but this is a really fun example to kind of test your knowledge at this point in the course.
>
> **[3:02](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=182)** And also Felipe is continuing to publish fun examples.
>
> **[3:07](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=187)** He's known for that basically, that have huge amounts of data that show the capabilities of the platform that he's advocating for.
>
> **[3:13](https://www.linkedin.com/learning/learning-snowflakedb/scenario-import-files-and-data-into-snowflakedb?u=76281980&t=193)** So, he's somebody that you're going to want to follow on Medium and the other platforms.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this, (1), this. (1), type. (1), type, (1)
> **Env Vars:** aws (2), sql (1), gcp (1)
> **CLI Commands:** aws (2), find (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)


### 4. 3. SnowflakeDB Query Processing

#### Use SnowflakeDB for SQL queries
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=0)** - [Instructor] Now we're going to take a look at Snowflake DB's database storage as it relates to query processing.
>
> **[0:07](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=7)** As you'll remember, Snowflake DB completely separates these control planes so that you can have maximum control and scalability.
>
> **[0:14](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=14)** So query processing is SQL queries, and we're going to kind of start with the basics, and then drill in as we go through this section so that you can understand functionally how to run SQL queries, and then, of course, how to get the biggest TCO or total cost of ownership benefit from Snowflake's really powerful virtual warehouse feature.
>
> **[0:34](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=34)** So let's switch over to the interface and look at running some SQL queries to get us started.
>
> **[0:40](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=40)** So here we are in the Worksheets view, and you may remember from a previous movie that I had gotten the shared data for COVID-19.
>
> **[0:50](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=50)** Do you remember how to do that?
>
> **[0:51](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=51)** You go into the Data section here, and then you go into the Marketplace, and you just select this data, which happens to be free.
>
> **[0:57](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=57)** Now the concept in Snowsight is to use worksheets because this is an analytics-focused web UI.
>
> **[1:05](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=65)** So the idea is here you're an analyst.
>
> **[1:06](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=66)** You want to run your queries.
>
> **[1:08](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=68)** And you can see that worksheets can be shared.
>
> **[1:11](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=71)** You can put 'em in folders.
>
> **[1:12](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=72)** You can add worksheets either as a new worksheet, or you can create a worksheet from a SQL file by clicking on the three dots.
>
> **[1:19](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=79)** Now, I've created some blank worksheets here, but I'm going to go back to this one that has some queries in it.
>
> **[1:24](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=84)** You might remember from an earlier movie that this query runs a query, and it says an English here on line four, what is COVID-19 reproduction rate in France as of this dataset?
>
> **[1:34](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=94)** So you just select this, and then you go ahead and run it.
>
> **[1:38](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=98)** And then you'll remember we get the rich visualization about the data to the right side here by default.
>
> **[1:44](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=104)** And we can also chart the data in multiple formats.
>
> **[1:47](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=107)** So we get this great information about the query.
>
> **[1:51](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=111)** If we want to see the object tree, we can go into the object tree, and we can look at the associated schema and table and see how big the table is, for example.
>
> **[2:01](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=121)** Now, in addition to this, in this view, if we want to work with other aspects of this query, what we can do is we can look at the compute, and this is where our virtual warehouse comes in.
>
> **[2:13](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=133)** And you'll see that we have a history here, and we can see the queries that were successful.
>
> **[2:17](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=137)** I've obviously played around with this and run it multiple times.
>
> **[2:20](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=140)** And then if we drill into this query, we can see what the SQL text is, and we can click on it, and we can see the query was able to make use of a very powerful feature 'cause I executed it multiple times, the caching.
>
> **[2:33](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=153)** It was an identical query.
>
> **[2:35](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=155)** So one of the first query optimization techniques is if you're running the same query over and over, and you expect it to be hitting cache, you can validate through here that it was, and this is showing that was cached.
>
> **[2:45](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=165)** Now, if I go to an earlier version of this, let me go back to earlier today.
>
> **[2:52](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=172)** I think this is one of the first ones.
>
> **[2:55](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=175)** Let's see if I can find the original plan in here somewhere.
>
> **[2:59](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=179)** So I'm using the query.
>
> **[3:00](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=180)** I was just rerunning that one.
>
> **[3:04](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=184)** There, there's the original execution of this query.
>
> **[3:07](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=187)** So you can see the Snowflake DB engine had to optimize the query and figure out how to run it the first time, and then it was able to run it.
>
> **[3:16](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=196)** And it shows you here the most expensive nodes for optimization purposes, and it shows you how the execution occurred.
>
> **[3:24](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=204)** You also have the ability to get more details here.
>
> **[3:27](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=207)** You can see what size your warehouse was, which is really important as we drill into this for using Snowflake effectively 'cause of course we can size these up and down as needed.
>
> **[3:37](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=217)** And we get lots of information here.
>
> **[3:39](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=219)** Now, in addition to this, we have information about this query, or we could run the query in the classic interface.
>
> **[3:46](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=226)** So I've set this up already.
>
> **[3:49](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=229)** Now, a couple of differences.
>
> **[3:50](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=230)** You have to set your context.
>
> **[3:52](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=232)** So inside of your context, you have to make sure that you're in the right database in schema in order for this to work.
>
> **[3:57](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=237)** And notice you have the ability to resize right in here, which again is a key aspect of using this effectively.
>
> **[4:03](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=243)** And then when you run the query, you just click Run.
>
> **[4:07](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=247)** And in here, you can see the information.
>
> **[4:09](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=249)** Of course, you don't see the visualization of the data types.
>
> **[4:13](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=253)** You do have the data preview.
>
> **[4:15](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=255)** Now, in this interface, if you want to see information about your account, you do see a query history, which is similar to what you see in Snowsight.
>
> **[4:24](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=264)** And here you can see the information about start/end time, the duration, the byte scan, so on and so forth.
>
> **[4:31](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=271)** So if I go down to the one that was probably the first one, one of the ones that wasn't using a cache.
>
> **[4:38](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=278)** Let me look in here, we'll see.
>
> **[4:41](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=281)** And if we go into the query ID, we can see that we see the details.
>
> **[4:48](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=288)** And then over here, we see that same profile here.
>
> **[4:51](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=291)** I'm just scrolling in and out.
>
> **[4:53](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=293)** And we can see the most expensive node with the execution time.
>
> **[4:56](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=296)** So it's a similar view, but the interface is just slightly different.
>
> **[5:01](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=301)** I was in the Worksheet view here.
>
> **[5:02](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=302)** That's where I started.
>
> **[5:03](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=303)** I had to set the context, and then I went into the History view.
>
> **[5:07](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-for-sql-queries?u=76281980&t=307)** So again, I just want you to kind of get the dynamics of running queries as an introductory set of concepts when we're working with the Snowflake DB data platform.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (4), this, (4), switch (1), default. (1)
> **Env Vars:** sql (5), covid (2), tco (1)
> **CLI Commands:** make (2), find (1), node (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** click on (1), go to (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1), similar to (1)
> **Speakers:** - [instructor] (1)

#### Understand SnowflakeDB dashboards
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=0)** - [Instructor] Next up in queries, I'm just going to show you a visualization feature available in Snowsight.
>
> **[0:05](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=5)** So using these same examples, I went ahead and ran this query a couple of times.
>
> **[0:11](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=11)** What is the stringency of government response in India, just to get another query in here.
>
> **[0:18](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=18)** And now if I go back to, remember where I can see if cash was used or not?
>
> **[0:21](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=21)** It's under Compute and History, and I'm looking for a query result reuse.
>
> **[0:28](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=28)** Now, if I want to look at the original compilation here, I can see the query plan organizer.
>
> **[0:36](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=36)** Again, notice the number of rows, which I think I didn't point out.
>
> **[0:39](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=39)** Now, in addition to understanding the overhead of the query, you can display the results in Dashboard.
>
> **[0:46](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=46)** So in order to do that, you can just click here, and you can manage filters, or you can add a dashboard.
>
> **[0:52](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=52)** So I'm going to call it My_Dash and create a dashboard.
>
> **[0:56](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=56)** And then you're going to add a tile to work with this.
>
> **[1:00](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=60)** And then you need some sort of query inside of here, so I'm just going to switch over here, and I'll just take this original query.
>
> **[1:08](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=68)** This is in the other interface.
>
> **[1:11](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=71)** And notice the context here, by the way.
>
> **[1:15](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=75)** And it gives you a example.
>
> **[1:18](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=78)** And then we can go ahead and run this query.
>
> **[1:22](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=82)** And you can see that we have the results here, and then we can return to my dashboard, and we can see that we have the results in a tabular format.
>
> **[1:36](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=96)** Now this becomes a tile in my dashboard.
>
> **[1:39](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=99)** If I wanted to work with this, obviously I could view the table, edit the query, duplicate, or unplace it, or delete it.
>
> **[1:46](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=106)** Now, if I want an additional tile inside of here, then I can go back to my worksheet, just kind of showing you the workflow, and get my other query, which is this one about COVID reproduction rate in France.
>
> **[1:59](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=119)** Go back to my dashboard.
>
> **[2:03](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=123)** Do you remember how I add an object?
>
> **[2:05](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=125)** It's a tile.
>
> **[2:06](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=126)** So I want to have a new tile.
>
> **[2:08](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=128)** I can make a new tile from a worksheet or just paste in a query.
>
> **[2:12](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=132)** So I will have the query in here twice.
>
> **[2:14](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=134)** But if I say New Tile from Worksheet, then I can select a worksheet, or I can just paste this query in here.
>
> **[2:21](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=141)** So I'm going to go ahead and run this query.
>
> **[2:24](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=144)** This is the France query.
>
> **[2:26](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=146)** And in this case, I'm going to chart the results, kind of a boring chart.
>
> **[2:31](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=151)** Let's see if I can do anything more interesting here.
>
> **[2:36](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=156)** I guess it's just a single point, so it's kind of boring.
>
> **[2:39](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=159)** Maybe I can do a scorecard, there, okay.
>
> **[2:42](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=162)** No big deal, but you kind of get the idea.
>
> **[2:44](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=164)** And so there's my dashboard.
>
> **[2:47](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=167)** Again, this is a common set of functionality that you'd often use a partner like Tableau or Power BI or something like that, which you could still do.
>
> **[2:54](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=174)** But the fact that it's integrated into Snowsight is a nice feature around queries, comprehension of queries through presentation either in a dashboard as tabular data or visualized is an important aspect of query usability.
>
> **[3:07](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=187)** So it's something that I wanted to cover.
>
> **[3:09](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=189)** And I will note that in the classic UI, there is no dashboard, so that's a new feature in Snowsight or a feature of Snowsight only.
>
> **[3:18](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=198)** So again, there are some subtle differences between the environments as you work with these web UIs.
>
> **[3:24](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=204)** Now, of course, in addition to the web UIs, as I've said in earlier videos, you could use scripting, APIs, that kind of stuff.
>
> **[3:31](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-dashboards?u=76281980&t=211)** But for this course, we're really focusing on the web UIs because we've got a lot of objects to cover.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), switch (1), interface (1), this, (1), delete (1)
> **Cross-References:** go back to (3)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1)
> **Env Vars:** covid (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Create and use user-defined functions
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=0)** - [Instructor] Now in addition to supporting SQL queries, ANSI SQL, and some extensions, Snowflake supports user defined functions.
>
> **[0:07](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=7)** And they're quite powerful.
>
> **[0:09](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=9)** As with some of the deep topics, I'm going to get you started here, and if this is an area that you are going to use for your workload, I encourage you to go through the documentation, 'cause you have a lot of flexibility.
>
> **[0:21](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=21)** So, a user defined function, of course, is a function that can be scaler or tabular.
>
> **[0:28](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=28)** So scaler is one output row for each input.
>
> **[0:31](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=31)** Tabular is a table function, and then there are different ways you can write this.
>
> **[0:36](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=36)** You can write it in SQL. You can write it in JavaScript.
>
> **[0:39](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=39)** You can write it in Java.
>
> **[0:41](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=41)** Here's information about the limitations.
>
> **[0:44](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=44)** So, the example that they show here is in SQL and it's a function that's the area of a circle and it uses pi, basically.
>
> **[0:54](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=54)** And then it uses a query expression in the next example.
>
> **[0:59](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=59)** And then it goes on to talk about it.
>
> **[1:01](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=61)** So, rather than going through this I actually ran the pi function 'cause it's pretty simple, and it illustrates some concepts about working with Snowflake DB as well.
>
> **[1:09](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=69)** So kind of get two things going.
>
> **[1:12](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=72)** So, before we jump over there, there is also support for stored procedures, and I really like the way that this was written.
>
> **[1:17](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=77)** So, stored procedures are saved named batched SQL statements.
>
> **[1:22](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=82)** It has a very good explanation of when to use a stored proc versus a UDF.
>
> **[1:26](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=86)** So if you're going to use these patterns, you're going to want to consult this documentation as well.
>
> **[1:32](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=92)** And then there's really good documentation in terms of what is the branching constructs and logic.
>
> **[1:37](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=97)** So let's jump over to the worksheet.
>
> **[1:40](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=100)** So interestingly, you have to be in the classic version to create a UDF.
>
> **[1:45](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=105)** So this is from the documentation.
>
> **[1:47](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=107)** It's kind of interesting. It's like add pi.
>
> **[1:49](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=109)** So you're basically adding pi, and then you can overload it.
>
> **[1:53](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=113)** So, create the function, you just execute the function.
>
> **[1:57](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=117)** Do notice I'm in a particular context I created a little demo database just with the UI.
>
> **[2:03](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=123)** And then you'll remember from earlier movies that there's a concept of schema.
>
> **[2:07](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=127)** Remember that from the diagram?
>
> **[2:08](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=128)** A schema is like a folder where all the objects for the account are held.
>
> **[2:13](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=133)** So the tables, the function, so on and so forth and the warehouse here is the smallest size.
>
> **[2:18](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=138)** So you have to be in the right context to put it in the right object hierarchy in your environment.
>
> **[2:23](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=143)** And this is, you know, trivial, basically.
>
> **[2:25](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=145)** Kind of interesting.
>
> **[2:26](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=146)** You can do this overload in line one.
>
> **[2:28](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=148)** The input parameter is a float type in line 10.
>
> **[2:31](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=151)** It's a variable character, and just showing the result.
>
> **[2:35](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=155)** And this is after you use a variable character input type in the overload.
>
> **[2:41](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=161)** So, also interesting, and of course, I can just run this to show that it's live, which will just return that one result.
>
> **[2:47](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=167)** In the Snowsight interface, if I drill into this DB, into my schema, I can see that I have function and I have it with two different input types.
>
> **[3:00](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=180)** And here's the function definition.
>
> **[3:02](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=182)** But I can't add one here.
>
> **[3:04](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=184)** So again, there's subtle differences between the UI that for usability is not super complicated, but the sort of general thinking seems to be that Snowsight is more for people who are going to use objects in service of querying data.
>
> **[3:20](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=200)** And the classic UI has got more of like a DBA kind of a feel to it where you can do all the various functions.
>
> **[3:27](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=207)** Now, in addition to this, for a procedure logic, I just pulled one of their examples here just to show you some branching logic that is supported.
>
> **[3:36](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=216)** So, this is just using case statements.
>
> **[3:38](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=218)** So again, documentation is pretty solid here.
>
> **[3:41](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=221)** If you're familiar with the SQL language, assuming most of you are, it's more a question of when in this environment are you going to use UDFs?
>
> **[3:49](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=229)** You going to write 'em in SQL, JavaScript or Java?
>
> **[3:52](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=232)** When are you going to use procedures and how are you going to use the branching logic?
>
> **[3:57](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=237)** And again, notice in my schema here, we don't have a procedure 'cause I didn't name it.
>
> **[4:03](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=243)** It's basically just running immediately, in the immediate session.
>
> **[4:07](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=247)** I would have to create it as a procedure for it to show up over here.
>
> **[4:10](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=250)** So you're testing it out basically.
>
> **[4:12](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=252)** So again, this back and forth between you're creating in the classic interface and then probably using, in the Snowsight interface, I think is representative of the workflow in terms of the objects.
>
> **[4:25](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=265)** Another object I didn't bother creating, we don't have any here, it would be a view.
>
> **[4:29](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=269)** So a view, of course, is just a named SQL statement which reflects generally a subset of the information in a table.
>
> **[4:35](https://www.linkedin.com/learning/learning-snowflakedb/create-and-use-user-defined-functions?u=76281980&t=275)** And we'll get to some of these other aspects in subsequent videos.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), interface (3), this. (1), let (1), super (1)
> **Env Vars:** sql (8), udf (2), ansi (1), dba (1)
> **Definitions:** is a  (3), is an  (1)
> **Documentation:** the documentation (2)
> **Cross-References:** in the next (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### Optimize virtual warehouses
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=0)** - [Instructor] When we're thinking about optimizing Snowflake DB, we really want to understand virtual warehouses, which is the abstraction against the underlying virtual machines or clusters of virtual machines.
>
> **[0:11](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=11)** So you think of it as how compute and queries are run.
>
> **[0:14](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=14)** This is billed by the second and understanding when you need seconds of usage at what size of warehouse is one of the aspects of Snowflake that you need to master in order to get the best value from it.
>
> **[0:31](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=31)** Considerations like pausing the warehouse when it's not in use or setting it to auto pause is important to understand.
>
> **[0:37](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=37)** So you have to understand your workload basically.
>
> **[0:39](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=39)** The virtual warehouse, when used correctly, is flexible and scalable.
>
> **[0:44](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=44)** And the key to understanding it is using the tools.
>
> **[0:48](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=48)** So before we jump over to the interface, one aspect that's important to understand is you can have multiple virtual warehouses associated to the underlying data storage 'cause remember, the layers are separate.
>
> **[1:01](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=61)** So a common demo that I've seen for Snowflake DB is you have one virtual warehouse doing loading, and another one doing querying, which is one of the really flexible advantages but it's a different way of thinking, especially if you come from server-based where you'd have to scale up or prioritize the workloads or something like that.
>
> **[1:21](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=81)** You have truly separated compute from underlying storage.
>
> **[1:25](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=85)** So what tools do you have and how can you use them?
>
> **[1:29](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=89)** Let's look at the consoles to see that?
>
> **[1:31](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=91)** Let's start with this consol, the Snowflake console.
>
> **[1:35](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=95)** Let's take a look inside of Compute.
>
> **[1:37](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=97)** And of course, we saw History where we could see the query execution but right below that is Warehouses.
>
> **[1:43](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=103)** So if we click on our warehouse, we can see the size, we can see the number of clusters and the status of it.
>
> **[1:49](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=109)** If we click into it, we can see the running load and the queued load.
>
> **[1:53](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=113)** Queued load is really important because if you've got a lot of queued load, you probably are going to need to resize either the capacity of your individual warehouse or to make multiple warehouses.
>
> **[2:06](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=126)** Again, knowing when to do which one is kind of one of the key aspects of working with Snowflake, and it depends on your workload as in kind of a way to start to think about it.
>
> **[2:16](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=136)** So this shows details and privileges.
>
> **[2:18](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=138)** Now, in addition to this, we have an object called a Resource Monitor.
>
> **[2:22](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=142)** Real simple to create.
>
> **[2:24](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=144)** Let's call it my_Mon here.
>
> **[2:25](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=145)** We're going to say that we have 100 credits.
>
> **[2:28](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=148)** And we set the threshold for time, whether it's day, week, month, so on and so forth.
>
> **[2:33](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=153)** And then the monitor type is account or warehouse.
>
> **[2:36](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=156)** If we set account, it's on the entire account.
>
> **[2:38](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=158)** If we set warehouse, then we say which warehouse and obviously, we could have multiple warehouses.
>
> **[2:44](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=164)** By default, this resets monthly but we can customize it and we can say start date, end date.
>
> **[2:49](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=169)** So we could say we want to reset this daily, weekly, and this is really important to set up correctly because again, if you have a variable workload, you're managing this capacity.
>
> **[3:00](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=180)** I liken it to the flow of a utility, like electricity, or water coming into your house.
>
> **[3:08](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=188)** You would have some management, for example, if you go out of town to make sure that the water doesn't overflow in your house, which actually happened to me once and my water bill was like 10 times the normal amount 'cause I didn't have someone watching.
>
> **[3:21](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=201)** And it's the same thing with the resource monitor here.
>
> **[3:23](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=203)** You want to definitely, best practice, put a resource monitor on at least your account, if not your warehouses.
>
> **[3:30](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=210)** And then key is to add actions.
>
> **[3:33](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=213)** Suspend immediately and notify when let's say 90% of credit.
>
> **[3:38](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=218)** Suspend and notify when this percent of credit.
>
> **[3:41](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=221)** And then notice when this percent of credit is used and the credit is, of course, the 100 credit quota.
>
> **[3:47](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=227)** And then we just create the monitor and then we're good to go.
>
> **[3:50](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=230)** So really, really, really important.
>
> **[3:54](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=234)** If you don't take away anything else from this course, understanding the idea that compute is completely separated from data and it is flexible.
>
> **[4:04](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=244)** If you just turn it on and leave it on, you're kind of not getting the advantage of Snowflake.
>
> **[4:09](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=249)** And it's something that I see customers doing wrong, unless, of course, you have a workload that demands that.
>
> **[4:14](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=254)** But most customers have workloads that are somewhat flexible.
>
> **[4:18](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=258)** Now, the way this looks in the classic UI is you have your warehouses, and it gives you information about it.
>
> **[4:26](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=266)** This is set to auto suspend every 10 minutes and auto resume.
>
> **[4:30](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=270)** And this shows your load over time, which is similar.
>
> **[4:33](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=273)** And you can set your time windows here so you can see when you had load.
>
> **[4:37](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=277)** So the whole idea is to understand how to set this appropriately.
>
> **[4:43](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=283)** Now, if you go into your account, you can see, and we'll be looking at this in more detail as we go along but just to get us started, the usage.
>
> **[4:52](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=292)** And you can see the credits used.
>
> **[4:54](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=294)** And you can see your resource monitor here.
>
> **[4:56](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=296)** I guess I have to refresh it 'cause I created it in the other console.
>
> **[5:01](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=301)** And there's my resource monitor inside of here.
>
> **[5:04](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=304)** So really, really, really important to properly utilize the right size and just to show you, if I go into warehouses and I click Create, I say my_big-Virtual Warehouse, it starts by default with 16 credits an hour, and depending on the edition, Standard, Business or Enterprise, I think they're different pricing.
>
> **[5:29](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=329)** As of this recording, it's $2 US for standard per hour and goes up but different in the regions too.
>
> **[5:37](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=337)** So typically you're going to use extra small or small for testing but by default, we start with extra large and you can see we go all the way up to this 5X-Large.
>
> **[5:46](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=346)** So if that was two bucks an hour, that would be $500 an hour.
>
> **[5:50](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=350)** So you could get to some pretty big charges if you left this on.
>
> **[5:54](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=354)** You set the maximum clusters.
>
> **[5:55](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=355)** Another aspect of this is you can multi-cluster and then the scaling policy.
>
> **[5:59](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=359)** Standard or Economy.
>
> **[6:01](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=361)** And this has to do with how quickly you're going to scale.
>
> **[6:04](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=364)** And in the documentation, they tell you the time parameters.
>
> **[6:07](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=367)** So Economy just takes longer and I think it's... I can't remember, I'll have to look it up for you guys but Standard is a quicker scaling basically.
>
> **[6:14](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=374)** Auto suspend after 10 minutes.
>
> **[6:16](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=376)** And then you would create the warehouse.
>
> **[6:18](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=378)** So if I wanted to just create... I'm just going to do a large.
>
> **[6:23](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=383)** Then it's telling me I have the wrong character here so I'm going to go ahead and now I have this.
>
> **[6:31](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=391)** And now if I wanted to query, of course, I can associate this greater capacity with... Then I could say select warehouse, go over here and I'm selecting this bigger compute.
>
> **[6:45](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=405)** And again, I can resize it right inside of here as well.
>
> **[6:48](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=408)** So that's part of the beauty of working with the product.
>
> **[6:51](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=411)** So the positive is you've got this flexibility.
>
> **[6:55](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=415)** The thing that is new for a lot of my customers is they've never really had this paradigm before so they don't think about their query workloads this way.
>
> **[7:02](https://www.linkedin.com/learning/learning-snowflakedb/optimize-virtual-warehouses?u=76281980&t=422)** So we'll be talking more about how to address this and what tools you might have in addition to Snowflake to be able to properly size this 'cause it's really, really important to getting the appropriate value from using Snowflake DB.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), default, (2), interface (1), this, (1), this. (1)
> **CLI Commands:** make (2)
> **Analogies:** think of it as (1), for example (1)
> **Code Identifiers:** my_big (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)

#### Scenario: Optimize SnowflakeDB compute
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=0)** - [Instructor] Because optimizing the virtual warehouse for Snowflake DB is such a deep topic, like really all the other topics, but particularly this one in my associated companion, GitHub repo, I'll be continuing to build the information out.
>
> **[0:13](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=13)** Anything that I mention here will be linked, but I'm going to continue to build this up because it's a frankly a topic I'm working on with some of my customers.
>
> **[0:21](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=21)** So first of all, some of the basic stuff, it's important that your queries are written in the most optimal way, and there are some considerations around data types that you're going to want to understand when working with Snowflake DB.
>
> **[0:34](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=34)** So this is a great summary.
>
> **[0:35](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=35)** You can also just go to the documentation of Snowflake DB but you do want to understand the performance impact of using particular data types.
>
> **[0:44](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=44)** So that's kind of a basic.
>
> **[0:46](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=46)** Now, when you move into working with the warehouse, there is some great documentation that you're going to want to read on the Snowflake site.
>
> **[0:54](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=54)** And again, this goes into the topic of query composition and warehouse processing, because understanding beyond cashing, this should be almost obvious, but you'd be surprised how many people skip that how to properly pick the right size warehouse, pick the right configuration if you want a multi cluster warehouse or if you want multiple warehouses or different warehouses.
>
> **[1:16](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=76)** I mean, I really just cannot emphasize enough how important this is in effectively using Snowflake.
>
> **[1:22](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=82)** So to that end, I would recommend you read all this stuff.
>
> **[1:26](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=86)** And this I thought was particularly well written in the documentation about multi cluster warehouses.
>
> **[1:32](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=92)** So what this is is you can have individual warehouse, you can have more than one warehouse on different queries or workloads, or you can have a multi cluster warehouse.
>
> **[1:43](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=103)** So that is a warehouse that has multiple clusters in it.
>
> **[1:47](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=107)** And as it says here, they're designed specifically for handling queuing and performance issues related to large number of concurrent users and/or queries.
>
> **[1:57](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=117)** This is going to help you to automate the process if your number of users or queries tends to fluctuate, which I would think is the most common use case.
>
> **[2:04](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=124)** So most people would benefit from using multi-cluster warehouses, as long as you have fluctuation in your query workload.
>
> **[2:12](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=132)** So again, it goes on to give you some specific recommendations that you're going to want to take into account and notice the very first one here.
>
> **[2:20](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=140)** If you're using Snowflake enterprise edition, all your warehouses should be configured as multi-cluster, such an important topic.
>
> **[2:29](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=149)** In addition to this, there is a community of practitioners of Snowflake DB users that have created a kind of an interesting tool.
>
> **[2:36](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=156)** It's got a really dumb name, but it's called Snoptimizer because this is such a common challenge properly configuring the virtual warehouses.
>
> **[2:46](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=166)** It is a tool that was built as you can see for properly configuring the number of virtual warehouses.
>
> **[2:58](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=178)** So really interesting tool.
>
> **[3:00](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=180)** I'm going to keep my eyes out for other tools out there because I think that this is an area of Snowflake DB that could benefit from additional optimization tooling and best practices.
>
> **[3:11](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=191)** So I'll be adding that back to my link list here.
>
> **[3:14](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=194)** In addition to this, there is a YouTuber who has created a new number of Snowflake tutorials.
>
> **[3:20](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=200)** I referenced this earlier and guy's done a really, really great job, particularly explaining in detail his best practices for virtual warehouses in this tutorial number 12, takes 30 minutes.
>
> **[3:33](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=213)** Highly recommend that you watch it.
>
> **[3:35](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=215)** He's done a really excellent job just in general, he's got a deep of information.
>
> **[3:39](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=219)** It's about 15 hours worth of information on Snowflake topics, but I really like what he did there.
>
> **[3:45](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=225)** Again, if you don't take away anything else, you really want to drill in and understand how to optimize your configurations because you're paying by the timeframe.
>
> **[3:57](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=237)** It's the same reason that you turn your lights off and you turn your faucets off.
>
> **[4:02](https://www.linkedin.com/learning/learning-snowflakedb/scenario-optimize-snowflakedb-compute?u=76281980&t=242)** You want to properly configure your compute for Snowflake DB to get the best value out.

> [!info]- Semantic Content
>
> **Definitions:** is a  (5), is an  (1)
> **Code Keywords:** this, (2), continue (1), case. (1), else, (1)
> **Documentation:** the documentation (2)
> **Tools:** github (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** github repo (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 5. 4. SnowflakeDB Data Services

#### Understand SnowflakeDB account usage
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=0)** - [Instructor] In addition to separating the control planes for query processing and database storage, SnowflakeDB separates the control planes for services.
>
> **[0:08](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=8)** And those include authentication, access control, security, and others.
>
> **[0:14](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=14)** We're going to start with account management.
>
> **[0:16](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=16)** Let's head over to the console.
>
> **[0:18](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=18)** Here I am in snow site and we saw this before that under Account Usage when we were looking at virtual warehouse usage the blue indication is how much credits we're using for compute over time which is a key metric.
>
> **[0:34](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=34)** And you can see this is for the compute warehouse which is the default warehouse.
>
> **[0:38](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=38)** Now, in addition to this, we can look at the organizational level here, different timeframes, different other filters.
>
> **[0:46](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=46)** So for example, credits or currency we can switch this to money, always a good thing.
>
> **[0:51](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=51)** Of course, we haven't spent anything 'cause we're on the free tier.
>
> **[0:54](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=54)** So we'll switch back to credits and now we can switch into Consumption and we can see that their compute warehouse has used this amount of resources.
>
> **[1:08](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=68)** And we can see there could be a charge for other services depending on what services in the tier of the system that we're using.
>
> **[1:15](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=75)** Also, we could potentially have a charge for storage.
>
> **[1:19](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=79)** Although typically, storage is going to be much less than compute but as I've mentioned, I work with customers like genomics customers that have terabytes or petabytes.
>
> **[1:29](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=89)** And so, customers like that would be concerned with storage.
>
> **[1:32](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=92)** Another one that's tricky that I see customers neglect until they have an issue, is Transfers.
>
> **[1:39](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=99)** And this is particularly of note, if you're using data lake.
>
> **[1:43](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=103)** Do you remember that when you're using data lake you are executing queries against data stored in external buckets, let's say Amazon so S3 buckets.
>
> **[1:52](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=112)** So you would potentially be transferring that data in if you're doing intermediate computation on it.
>
> **[1:58](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=118)** This is one of those things that can be a surprise.
>
> **[2:02](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=122)** Depending on your query pattern.
>
> **[2:04](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=124)** As we've done, let's look at the classic console here.
>
> **[2:07](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=127)** If we go into Account and Usage, you can see that we have a view of our different warehouses.
>
> **[2:13](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=133)** And you'll remember in a previous video that I was demonstrating setting up different warehouses in terms of our credits and our credits used over time.
>
> **[2:21](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=141)** So we really do have two different views here between these two different interfaces, and you're going to want to look at both of 'em if you can.
>
> **[2:30](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=150)** In addition to this, we do have a billing section.
>
> **[2:32](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=152)** Now this is not going to be meaningful 'cause we're on the free tier, so we don't have a credit card.
>
> **[2:37](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=157)** If we wanted to upgrade, we would do that at this point.
>
> **[2:40](https://www.linkedin.com/learning/learning-snowflakedb/understand-snowflakedb-account-usage?u=76281980&t=160)** So really on the free tier, we're just really concerned with using our credits for this trial period.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), switch (3), this, (2)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Learn SnowflakeDB authentication and authorization
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=0)** - [Instructor] The next area we're going to look at is in terms of authentication and authorization.
>
> **[0:04](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=4)** So we're going to look in Snowsight at Roles.
>
> **[0:07](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=7)** Now, in terms of roles, you have roles the account is set up with like ACCOUNTADMIN and you can also create roles.
>
> **[0:15](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=15)** So I did create a role here just quick like by just clicking the plus sign, and then it's called MY_ROLE.
>
> **[0:22](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=22)** And so I just gave it permissions associated.
>
> **[0:25](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=25)** And kind of an interesting view here, if I move this around you can see this is associated to the ACCOUNTADMIN, has one user associated to it.
>
> **[0:35](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=35)** And you can then grant the permissions associated to the role to a specific user.
>
> **[0:40](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=40)** Interesting interface.
>
> **[0:42](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=42)** So in terms of users, I also created a user, created a user called Fred Langit there by just clicking here and filling this out.
>
> **[0:50](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=50)** And then I filled out the advanced options.
>
> **[0:53](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=53)** So you can select a default role, which I created that role.
>
> **[0:57](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=57)** You can select a default warehouse, and I created an additional warehouse as well, and a default name space, if you want that.
>
> **[1:05](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=65)** And so here's my Fred Langit user.
>
> **[1:07](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=67)** And you can see that he's associated to my role and he's associated to my warehouse.
>
> **[1:12](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=72)** So pretty straightforward, which is nice.
>
> **[1:15](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=75)** In addition to that, you have another capability that is only available here in the classic console.
>
> **[1:22](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=82)** So you have the users and it's pretty much the same thing.
>
> **[1:25](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=85)** So Create, it looks pretty similar, basically, Advanced, and Preferences.
>
> **[1:30](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=90)** You have this Force Password Cange.
>
> **[1:31](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=91)** So you have a couple more switches in here than creating users in the Snowsight.
>
> **[1:37](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=97)** Then you have Roles.
>
> **[1:39](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=99)** And again, here's the role that I created.
>
> **[1:40](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=100)** I can see who's been granted that role, and I can edit the role if I want to.
>
> **[1:46](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=106)** There's the SQL, kind of familiar by now, and I could drop the role if I wanted to.
>
> **[1:51](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=111)** Now, in addition to that we have this Reader Account capability and I created a Reader Account.
>
> **[1:56](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=116)** And when you do that, this is external to your organization.
>
> **[2:01](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=121)** So this is a neat capability that a allows for, let's say, auditing.
>
> **[2:05](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=125)** So you can create the account name, the Comments, you can see the Region and Edition, and they're going to log in with the user and a password.
>
> **[2:12](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=132)** And once that's set up, takes a minute or two, they get an endpoint.
>
> **[2:16](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=136)** So there's their endpoint.
>
> **[2:17](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=137)** And then when they log in, notice here, I'm Lynn Langit, but I've logged in with my reader role.
>
> **[2:22](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=142)** And when I switch my a window, I created one called Dexter Langit, and notice it's marked as Reader.
>
> **[2:31](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=151)** And even though it's my particular instance, I haven't really assigned any permissions to this reader.
>
> **[2:37](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=157)** So, you don't see anything here.
>
> **[2:39](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=159)** You don't see any databases.
>
> **[2:40](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=160)** You don't see any warehouses because it has to be explicitly assigned.
>
> **[2:45](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=165)** Again, it's a useful capability, and one that is only visible in the classic console.
>
> **[2:52](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=172)** Because if I go back over to the Snowsight, I don't see Readers inside of here.
>
> **[2:57](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=177)** So, just, you know, it's interesting to see the different capabilities that are available.
>
> **[3:02](https://www.linkedin.com/learning/learning-snowflakedb/learn-snowflakedb-authentication-and-authorization?u=76281980&t=182)** So Users and Roles.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (1), for, (1), let (1), switch (1)
> **Env Vars:** accountadmin (2), my_role (1), sql (1)
> **Prerequisites:** set up (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Review Snowflake DB sessions
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflake-db-sessions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflake-db-sessions?u=76281980&t=0)** - [Instructor] The next aspect of working with Security, using Snow site if we're going to the Security section here, is Sessions.
>
> **[0:08](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflake-db-sessions?u=76281980&t=8)** So in terms of Sessions, this is a view only, but I can see the session information where I've logged in.
>
> **[0:14](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflake-db-sessions?u=76281980&t=14)** I can see the client, IP address, and the type of authentication.
>
> **[0:19](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflake-db-sessions?u=76281980&t=19)** Notice that this login used Password+MFA.
>
> **[0:23](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflake-db-sessions?u=76281980&t=23)** So multifactor authentication, which is a best practice for any mission critical.
>
> **[0:28](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflake-db-sessions?u=76281980&t=28)** And for my MFA, I actually use the software MFA, use a app on my phone, and it's just really, really important that for all mission critical accounts in any sort of computational environment, but particularly data, that you will enable MFA.
>
> **[0:43](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflake-db-sessions?u=76281980&t=43)** Now, in addition to this view, if you go to the classic console, you can see Sessions as well.
>
> **[0:52](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflake-db-sessions?u=76281980&t=52)** And it's pretty much an identical view.
>
> **[0:55](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflake-db-sessions?u=76281980&t=55)** So you can just manage the session information from a viewpoint here.
>
> **[1:00](https://www.linkedin.com/learning/learning-snowflakedb/review-snowflake-db-sessions?u=76281980&t=60)** So you have session information which is an aspect of managing Security in Snowflake DB.

> [!info]- Semantic Content
>
> **Env Vars:** mfa (4)
> **Definitions:** is a  (2), is an  (1)
> **UI Navigation:** go to (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Implement SnowflakeDB policies
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/implement-snowflakedb-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/implement-snowflakedb-policies?u=76281980&t=0)** - [Instructor] In addition to session information in the account section of the classic console, in terms of security another aspect that you would generally be using any sort of production situation, and I just basically made a fake one for demonstration, is policies.
>
> **[0:16](https://www.linkedin.com/learning/learning-snowflakedb/implement-snowflakedb-policies?u=76281980&t=16)** So you would restrict, typically, your mission critical data behind multiple policies.
>
> **[0:23](https://www.linkedin.com/learning/learning-snowflakedb/implement-snowflakedb-policies?u=76281980&t=23)** And it's just, again, pretty straightforward to create.
>
> **[0:25](https://www.linkedin.com/learning/learning-snowflakedb/implement-snowflakedb-policies?u=76281980&t=25)** You give a name, an allowed IP address blocked, and comment if you want.
>
> **[0:29](https://www.linkedin.com/learning/learning-snowflakedb/implement-snowflakedb-policies?u=76281980&t=29)** And so, here I have a policy and then when you create it you have to take the step of activating it.
>
> **[0:36](https://www.linkedin.com/learning/learning-snowflakedb/implement-snowflakedb-policies?u=76281980&t=36)** So if I activate this policy, then this policy is now active and then I can deactivate the policy if I want to as well.
>
> **[0:43](https://www.linkedin.com/learning/learning-snowflakedb/implement-snowflakedb-policies?u=76281980&t=43)** And you can see the information here.
>
> **[0:45](https://www.linkedin.com/learning/learning-snowflakedb/implement-snowflakedb-policies?u=76281980&t=45)** Now, this is an object that you can also see on Snow site.
>
> **[0:48](https://www.linkedin.com/learning/learning-snowflakedb/implement-snowflakedb-policies?u=76281980&t=48)** So if I go over to Security and I go back to Policies and I just refresh this, of course, I activated it and deactivated it so if I could activate it from here, and there it would be active as well.
>
> **[1:03](https://www.linkedin.com/learning/learning-snowflakedb/implement-snowflakedb-policies?u=76281980&t=63)** And then, it is active and available.
>
> **[1:05](https://www.linkedin.com/learning/learning-snowflakedb/implement-snowflakedb-policies?u=76281980&t=65)** I could edit this policy if I wanted to, and I could drop the policy so I could deactivate the policy.
>
> **[1:11](https://www.linkedin.com/learning/learning-snowflakedb/implement-snowflakedb-policies?u=76281980&t=71)** So, again, pretty straightforward in terms of working with policies and understanding how sessions work.
>
> **[1:18](https://www.linkedin.com/learning/learning-snowflakedb/implement-snowflakedb-policies?u=76281980&t=78)** And just for completeness here on the Snow site side, just like on the classic side because this is a trial account, I don't have any billing information.
>
> **[1:29](https://www.linkedin.com/learning/learning-snowflakedb/implement-snowflakedb-policies?u=76281980&t=89)** And the organizational information is not really relevant because this is an account set up by Snowflake, it's a free trial.
>
> **[1:37](https://www.linkedin.com/learning/learning-snowflakedb/implement-snowflakedb-policies?u=76281980&t=97)** This would be, of course, important in any sort of production situation, as well as having notification contacts.
>
> **[1:44](https://www.linkedin.com/learning/learning-snowflakedb/implement-snowflakedb-policies?u=76281980&t=104)** Notification contacts are just set up with the free trial.

> [!info]- Semantic Content
>
> **Definitions:** is an  (2), is a  (1)
> **Prerequisites:** set up (2)
> **Code Keywords:** this, (1)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Scenario: Secure data on SnowflakeDB
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=0)** - [Instructor] As with the other sections of this course I've added key links to my associated GitHub repo.
>
> **[0:06](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=6)** And I want to highlight some of them here.
>
> **[0:08](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=8)** First from the Snowflake documentation they have an excellent summary of security features that are available in this section here, the Summary of Security Features.
>
> **[0:19](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=19)** And you're going to want to secure in-depth across all these different domains.
>
> **[0:24](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=24)** And this is going to help you also select your edition.
>
> **[0:27](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=27)** So you can see some security features, for example, around network inside access are only available in business critical, or enterprise editions.
>
> **[0:35](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=35)** And you want to make sure in your security planning that you address all these different categories.
>
> **[0:40](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=40)** So, you know, we looked at users, for example, we didn't look too much at a rollback based security.
>
> **[0:46](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=46)** Again, I have links to that.
>
> **[0:48](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=48)** Some customers do have requirements around that, and that is implementable here.
>
> **[0:54](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=54)** So, if you do, you're going to want to drill into that.
>
> **[0:57](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=57)** In addition to that, I have quite a few customers that have governance requirements, and there's an excellent documentation around governance.
>
> **[1:04](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=64)** Snowflake is highly compliant for HIPAA, SoCs, and PCI, various governance, used it with a lot of my customers.
>
> **[1:12](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=72)** But, again, you're going to drill into the specific use case.
>
> **[1:16](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=76)** Speaking of use cases, I want to introduce another aspect of the Snowflake documentation called Patterns.
>
> **[1:21](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=81)** And their pattern here on network architecture is excellent.
>
> **[1:26](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=86)** So just, in general, securing at the network boundaries is part of the security implementation for any Snowflake usage.
>
> **[1:35](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=95)** So inside of here, they focus on multi-tiered security and they give patterns, I'll scroll down here, for both Azure, and they are very specific in terms of the most common use case.
>
> **[1:50](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=110)** So what they're talking about here is the different security perimeter boundaries enforced by policies as we just looked at around Snowflake itself.
>
> **[1:59](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=119)** And then, if you have associated blob containers, which is a real common scenario, and if you have associated applications, either on desktops or outside the boundary of Azure, in this case, what are best practices for securing?
>
> **[2:13](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=133)** In addition to the Azure explanation here, this white paper has explanation for AWS, using tools like AWS PrivateLink, and VPCs, which are, you know, really commonly used in conjunction with Snowflake policies.
>
> **[2:27](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=147)** So again, in general, the Snowflake Patterns white papers are super useful.
>
> **[2:32](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=152)** So I use them all the time, and I have particularly used this one.
>
> **[2:36](https://www.linkedin.com/learning/learning-snowflakedb/scenario-secure-data-on-snowflakedb?u=76281980&t=156)** So I wanted to call your attention to it when you are planning and implementing your security for Snowflake DB.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (2), case, (1), super (1)
> **Env Vars:** aws (2), hipaa (1), pci (1)
> **CLI Commands:** aws (2), make (1)
> **Analogies:** for example (2)
> **Tools:** github (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** github repo (1)
> **Definitions:** is a  (1)


### 6. 5. SnowflakeDB Partners and Architectures

#### Learn the Snowflake data life cycle
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=0)** - [Instructor] As we think about patterns and integrations, I am pulling again from the Snowflake documentation here.
>
> **[0:07](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=7)** This is a great graphic showing the data lifecycle, and that's really what we organize our services around.
>
> **[0:14](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=14)** So you can see that we start with organizing data by creating databases, schemas, and tables, and then we store data, we insert into our tables, then we query, and then we're going to work with our data, update, merge or delete.
>
> **[0:32](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=32)** And we might be cloning our tables, schemas and databases.
>
> **[0:35](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=35)** And then we could be removing data.
>
> **[0:37](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=37)** In some scenarios data's never removed, it's just marked as not current or active, but if we need to remove it, truncate table, drop table, drop schema, or drop database.
>
> **[0:47](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=47)** When we think about this, this can be accomplished in as simple as using anti-SQL commands, or we can use some of the tools available in Snowflake, or in some of our hosting cloud partners.
>
> **[1:01](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=61)** Now, to show you some example architectures to get you thinking about this, let's look at our first one here.
>
> **[1:06](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=66)** This is an example of a data pipeline implemented on the Amazon platform.
>
> **[1:11](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=71)** So you can see Snowflake DB is the data warehouse of record on the right side here and it includes multiple tables.
>
> **[1:20](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=80)** And this is a typical sort of pattern where we have our staging table, which we've seen earlier in this course.
>
> **[1:26](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=86)** And in this case our tables are marked as transient.
>
> **[1:29](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=89)** Do you remember transient versus temporary?
>
> **[1:31](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=91)** The difference is, of course, temporary is persistent for the session, transient is until dropped, but it's different than a permanent, which is the default table in that it does not have the fail-safe which is built-in to the permanent.
>
> **[1:47](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=107)** It's cheaper too.
>
> **[1:48](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=108)** So staging table, error table, and production table, which would be permanent.
>
> **[1:52](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=112)** Now, we integrate our Snowflake instance here with other Amazon services.
>
> **[1:58](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=118)** So Kinesis for piping, S3 Buckets for storage, and then we have a load process that runs on EC2 which is the VMs and a notification with SNS.
>
> **[2:10](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=130)** So we have a Snowflake File Loader written in Python, a validator written in Python, a transformer written in Python, and then we have a file manager that's written in either Python, Java, or Node JS.
>
> **[2:21](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=141)** And the entire set of services consists of the pipeline.
>
> **[2:25](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=145)** This is a really common kind of pattern.
>
> **[2:27](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=147)** The only thing that I would say that I'm starting to do differently is I'm implementing at the compute layer instead of EC2 VMs, Kubernetes instances of Docker container images.
>
> **[2:39](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=159)** Now, if we look at an example on Azure, it's similar that we have Snowflake being the data warehouse, sort of the center of the architecture here, but we have integrations both with Microsoft Azure Services and partners, which is again another pattern.
>
> **[2:55](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=175)** So in this particular case, we're ingesting unstructured data into the Azure Data Factory service.
>
> **[3:01](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=181)** We're using Azure Blob Storage and Data Lake storage as our first storage location.
>
> **[3:07](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=187)** We are directly sending some of that Blob storage into Snowflake on Azure.
>
> **[3:13](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=193)** However, we're doing other types of processing using both Azure machine learning and Azure Databricks or HDInsight for Spark processing.
>
> **[3:22](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=202)** There we're utilizing the Databricks Spark connector for Snowflake so that we can then process that data and then use Power BI for our visualizer through a data gateway.
>
> **[3:34](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=214)** Or we could alternatively use some of the partner ecosystem visualizers, such as Tableau.
>
> **[3:40](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=220)** Notice also on the left side we have partner ecosystem for the ingest.
>
> **[3:46](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=226)** So rather than writing all these processes, we could use partners such as Fivetran for streaming, for example.
>
> **[3:54](https://www.linkedin.com/learning/learning-snowflakedb/learn-the-snowflake-data-life-cycle?u=76281980&t=234)** So again, the real world of Snowflake, in my experience as a software architect, often is architectures such as these two shown here.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4), node (1), docker (1)
> **Code Keywords:** this, (2), delete (1), let (1), case, (1)
> **Env Vars:** ec2 (2), sql (1), sns (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** such as (3), for example (1)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)

#### Use SnowflakeDB Data Marketplace
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980&t=0)** - [Instructor] In addition to the integrations that we've been discussing in this course, I would be remiss if I didn't talk about two rich integration points within Snowflake in a little more detail.
>
> **[0:09](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980&t=9)** In Snowsight here I'm under the data section under the marketplace.
>
> **[0:14](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980&t=14)** I've pulled up the filter for free data and then filtered for COVID.
>
> **[0:18](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980&t=18)** I mentioned earlier in the course that I had pulled in this data set here and let me just pull in another data set to show you the process to show you how this works.
>
> **[0:26](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980&t=26)** Now some of this data is premium, but in this case, this is free.
>
> **[0:30](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980&t=30)** So when you would be working with the data you can see the information about it here and you can see a usage example.
>
> **[0:40](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980&t=40)** So I'm actually just going to copy this and I'm going to get the data.
>
> **[0:47](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980&t=47)** So what this does is this makes this data available for me to work with in my Snowflake instance using my virtual warehouse.
>
> **[0:57](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980&t=57)** And now I can query the data and here are some of the use cases.
>
> **[1:03](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980&t=63)** And again, I have to make in the right context here.
>
> **[1:07](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980&t=67)** I think I am.
>
> **[1:08](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980&t=68)** We'll find out in a second.
>
> **[1:14](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980&t=74)** Let me go ahead and query this.
>
> **[1:16](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980&t=76)** So the query is compiling, and again, I'm in Snowsight.
>
> **[1:21](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980&t=81)** So I have the rich visualization here as well as the ability to chart.
>
> **[1:26](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980&t=86)** So using these data integrations is sort of the first level of working with this.
>
> **[1:31](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980&t=91)** What is becoming more and more a situation with my clients is clients are starting to either purchase data or they are monetizing their data.
>
> **[1:41](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980&t=101)** They're becoming a provider.
>
> **[1:43](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980&t=103)** So this is an area that Snowflake has really rich integration.
>
> **[1:48](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980&t=108)** And I would urge you to explore.
>
> **[1:51](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980&t=111)** The data marketplace is only available in Snowsight.
>
> **[1:54](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980&t=114)** It is not available here in the classic console.
>
> **[1:58](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-data-marketplace?u=76281980&t=118)** If you click on this button it tells you that you will have to go over to Snowsight in order to access this functionality.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (2), case, (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** covid (1)
> **Cross-References:** earlier in (1)
> **UI Navigation:** click on (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Use SnowflakeDB Partner Connect
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-partner-connect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-partner-connect?u=76281980&t=0)** - [Instructor] So another integration is through services and these services are independent third-party vendors.
>
> **[0:06](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-partner-connect?u=76281980&t=6)** They're not Snowflake DB, and they often provide services around what I call the ingest, or the output of your pipeline.
>
> **[0:14](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-partner-connect?u=76281980&t=14)** So ETL, data cleansing, data validation, streaming, or visualization, and they have a rich set of partners.
>
> **[0:21](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-partner-connect?u=76281980&t=21)** These are only available in the classic console.
>
> **[0:23](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-partner-connect?u=76281980&t=23)** They're not available in Snowsight.
>
> **[0:25](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-partner-connect?u=76281980&t=25)** One that I'm familiar with is Matillion and you can see we've got two options here.
>
> **[0:30](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-partner-connect?u=76281980&t=30)** We've got a data loader, and then we have Matillion ETL, which is a full set of services for complex ETL management.
>
> **[0:39](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-partner-connect?u=76281980&t=39)** So let's go ahead and select that.
>
> **[0:41](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-partner-connect?u=76281980&t=41)** And let's associate that with my little sample database here and let's connect.
>
> **[0:48](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-partner-connect?u=76281980&t=48)** And notice that I have a partner account that's created and ready to be activated, and we can activate this, and this takes us out to the Matillion website.
>
> **[1:06](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-partner-connect?u=76281980&t=66)** And you can see that we have connection here inside and I'll just select a table.
>
> **[1:16](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-partner-connect?u=76281980&t=76)** And we're basically just looking at a default view and this is the rich interface.
>
> **[1:22](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-partner-connect?u=76281980&t=82)** It's a graphical user interface for ETL that is designed to work with Snowflake along with other cloud native data warehouses and tools and just done a lot of work with them over the years.
>
> **[1:34](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-partner-connect?u=76281980&t=94)** And they have a rich set of components, visual interface, and it's just a tool set that has a great integration along with some of the other partners.
>
> **[1:47](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-partner-connect?u=76281980&t=107)** Now inside of here, I'm going to go back to Snowflake and I'm going to go ahead and show you that in the account, under users, we have a Matillion user.
>
> **[1:58](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-partner-connect?u=76281980&t=118)** So the security and other authorization has been set up through this partner connection.
>
> **[2:04](https://www.linkedin.com/learning/learning-snowflakedb/use-snowflakedb-partner-connect?u=76281980&t=124)** So again, when looking for ingest partners or visualization partners using the classic console, it's a great place to start because these have been optimized to work with Snowflake.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), interface (3), this, (1)
> **Env Vars:** etl (4)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Scenario: Design and build solutions with SnowflakeDB
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=0)** - [Narrator] To kind of end out our discussion of architectures and patterns, I'm going to return to Snowflake's pattern section, and just go through one so you can kind of understand how much information we have here.
>
> **[0:13](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=13)** So this is Ingestion.
>
> **[0:14](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=14)** So micro-batches, which is a really common use case.
>
> **[0:17](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=17)** And, again, very concise, nine pages long.
>
> **[0:20](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=20)** So talks about Ingestion patterns.
>
> **[0:23](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=23)** And this is a paper in a series.
>
> **[0:26](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=26)** And this is talking about how to use the Snowpipe and Snowpipe architecture.
>
> **[0:31](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=31)** And it tells you when to use it, so supported in all three clouds.
>
> **[0:37](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=37)** Then it tells you in what circumstances to use it here.
>
> **[0:40](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=40)** So if you have to have the information come in order then you cannot use it.
>
> **[0:45](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=45)** You'd have to use something like Kafka.
>
> **[0:46](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=46)** And it has to be a situation where you don't require synchronous callback.
>
> **[0:51](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=51)** So confirmations, updates to the source data is appended rather than updates to existing files.
>
> **[0:57](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=57)** If you wish to perform simple transforms such as column reordering, et cetera.
>
> **[1:02](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=62)** So here it shows the pattern details.
>
> **[1:04](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=64)** So the architecture through using the Snowpipe.
>
> **[1:07](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=67)** And then it shows the steps basically goes through and links out to best practices.
>
> **[1:13](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=73)** So the file prep, the file detection, the Snowpipe Ingestion, and then the pattern example.
>
> **[1:21](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=81)** This is a retail company.
>
> **[1:22](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=82)** They want weather reference data loaded into Snowflake automatically.
>
> **[1:26](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=86)** And they talk about integration with another AWS service IoT core.
>
> **[1:33](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=93)** This is for facilitation of messages in small formats in the event type formats in protocols such as MQTT, for example.
>
> **[1:41](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=101)** So here that goes in to very good detail about the Ingest preparation.
>
> **[1:46](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=106)** And in this case, we're using JSON data.
>
> **[1:48](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=108)** And it tells us details that are important about like when we would split file sizes, for example.
>
> **[1:54](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=114)** So it's really detailed.
>
> **[1:56](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=116)** And, again, I'm not going to go through the entire thing, but I would tell you that the first place that I would go when I was looking for architecture, I would go to the Pattern library here.
>
> **[2:08](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=128)** And it's just got tons of content by industry, workload, department, content type, and then has even translated content.
>
> **[2:19](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=139)** So I will continue to add architectural information out on my GitHub as well.
>
> **[2:24](https://www.linkedin.com/learning/learning-snowflakedb/scenario-design-and-build-solutions-with-snowflakedb?u=76281980&t=144)** But I think this is a very rich source of information and I definitely recommend going here first when you're trying to get architectural patterns for your Snowflake workloads.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (1), require (1), case, (1), type, (1), continue (1)
> **Definitions:** is a  (4)
> **Analogies:** such as (2), for example (2)
> **Env Vars:** aws (1), mqtt (1), json (1)
> **CLI Commands:** aws (1)
> **Tools:** github (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)


### 7. Conclusion

#### Keep learning
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-snowflakedb/keep-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-snowflakedb/keep-learning?u=76281980&t=0)** - [Lynn] We've really just scratched the surface of all that you can do with Snowflake DB, so if you, like me, are wanting to learn more, let's learn together, so here are a bunch of resources.
>
> **[0:12](https://www.linkedin.com/learning/learning-snowflakedb/keep-learning?u=76281980&t=12)** On the top of this is my associated GitHub repo, which I have for basically all my LinkedIn Learning courses, and I'll be actively updating as I continue to work with customers on my professional consultancy, and I encourage you to contribute.
>
> **[0:26](https://www.linkedin.com/learning/learning-snowflakedb/keep-learning?u=76281980&t=26)** In addition, top resources are the associated user guide, the Awesome Snowflake DB link list, and the Medium blog for the Snowflake DB company, and again, just jumping out to my GitHub.
>
> **[0:40](https://www.linkedin.com/learning/learning-snowflakedb/keep-learning?u=76281980&t=40)** This is organized around my course, so the sections of the course are the folders in the GitHub, and as I continue to find valuable resources, I will add them here.
>
> **[0:51](https://www.linkedin.com/learning/learning-snowflakedb/keep-learning?u=76281980&t=51)** Thanks for listening in.
>
> **[0:54](https://www.linkedin.com/learning/learning-snowflakedb/keep-learning?u=76281980&t=54)** I'm Lynn Langit.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (2), let (1)
> **Tools:** github (3)
> **CLI Commands:** find (1)
> **Exercise Files:** github repo (1)
> **Speakers:** - [lynn] (1)


## Instructor

- [[Lynn Langit]]

## Skills Covered

- Databases
- Snowflake

## Path Context

### In [[Explore a Career in Data Engineering]]
← [[Introduction to Data Warehouses]] | **4 of 7** | [[PySpark Essential Training- Introduction to Building Data Pipelines]] →

## Appears In

- [[Explore a Career in Data Engineering]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Python- Working with Databases]] — Databases
- [[Advanced Data Engineering with Snowflake]] — Snowflake
- [[Introduction to Modern Data Engineering with Snowflake]] — Snowflake
- [[Advanced Snowflake- Deep Dive Cloud Data Warehousing and Analytics]] — Snowflake
- [[Database Foundations Intro To Databases]] — Databases

---

[↑ Back to top](#)