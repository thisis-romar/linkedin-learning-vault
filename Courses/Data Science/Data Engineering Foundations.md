---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: data-engineering-foundations
url: "https://www.linkedin.com/learning/data-engineering-foundations"
level: Beginner
updated: 7/17/2024
learners: 67055
skills:
  - Data Engineering
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGFiPES2_z90A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1613158188348?e=2147483647&amp;v=beta&amp;t=hcbV3DVWxbVb-JnUiu-eOIc4D_50LlCEBYyGW7H7mVY"
linkedin_topic: Data Science
learning_paths:
  - '[[Develop Your Scala Skills for Data Engineering]]'
  - '[[Develop Your Rust Skills for Data Engineering]]'
  - '[[Introduction to Fundamental Skills for Data Work- Data Processing]]'
  - '[[Explore a Career in Data Engineering]]'
next_courses:
  - '[[Hands-On Introduction- Data Engineering]]'
  - '[[Hands-On Introduction- Data Engineering]]'
  - '[[Python For Data Science And Machine Learning Essential Training Part]]'
  - '[[Hands-On Introduction- Data Engineering]]'
path_nav: '[{"path":"Develop Your Scala Skills for Data Engineering","position":1,"total":6,"prev":null,"next":"Hands-On Introduction- Data Engineering"},{"path":"Develop Your Rust Skills for Data Engineering","position":1,"total":6,"prev":null,"next":"Hands-On Introduction- Data Engineering"},{"path":"Introduction to Fundamental Skills for Data Work- Data Processing","position":1,"total":7,"prev":null,"next":"Python For Data Science And Machine Learning Essential Training Part"},{"path":"Explore a Career in Data Engineering","position":1,"total":7,"prev":null,"next":"Hands-On Introduction- Data Engineering"}]'
path_count: 4
tags:
  - course
  - topic/data-science
  - topic/software-development
  - topic/artificial-intelligence
  - topic/cloud-computing
  - topic/database-management
  - skill/data-engineering
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Data%20Engineering%20Foundations.md)

![Data Engineering Foundations](https://media.licdn.com/dms/image/v2/C4E0DAQGFiPES2_z90A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1613158188348?e=2147483647&amp;v=beta&amp;t=hcbV3DVWxbVb-JnUiu-eOIc4D_50LlCEBYyGW7H7mVY)

# Data Engineering Foundations

> Data science can be generally defined as the process of making data useful, and data engineering is a key part of how and why. If you think of data science like a race car, the data engineers are the pit crew. They’re not driving the car, but they make the car much easier to drive. Data engineers make sure the data flow is running smoothly, monitor systems, anticipate problems, and repair the data

> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-foundations) | Beginner | 67K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - What is data engineering?
- [**1. Introduction to Data Engineering**](#1-introduction-to-data-engineering) (3 videos)
  - Introduction to data engineering
  - Data engineer vs. data scientist
  - Essential tools for data engineering
- [**2. Databases and Dataframes**](#2-databases-and-dataframes) (3 videos)
  - Intro to databases and their types
  - Understanding database schema
  - Distributive computing
- [**3. Data Engineering Tools**](#3-data-engineering-tools) (4 videos)
  - MapReduce and Hadoop
  - Hive
  - Spark
  - Airflow
- [**4. ETL Pipelines**](#4-etl-pipelines) (11 videos)
  - Sources of data extraction
  - Data extraction from a PostgreSQL database
  - Challenge: Data extraction
  - Solution: Data extraction
  - Transforming data
  - Challenge: Transforming data
  - Solution: Transforming data
  - Loading data into a DB
  - Challenge: Loading data
  - Solution: Loading data
  - Scheduling ETL pipeline using Airflow
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### What is data engineering?
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-foundations/what-is-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/what-is-data-engineering?u=76281980&t=0)** - [Harshit] There's so many appealing buzzwords in tech these days.
>
> **[0:03](https://www.linkedin.com/learning/data-engineering-foundations/what-is-data-engineering?u=76281980&t=3)** Knowing your way around machine learning, artificial intelligence, neural networks, et cetera, and while writing algorithms to make predictions is a hot new skill, ot is not the only one you need to get started in this business.
>
> **[0:16](https://www.linkedin.com/learning/data-engineering-foundations/what-is-data-engineering?u=76281980&t=16)** In the modern big data system, the person who writes algorithms is not the one who cleans the data.
>
> **[0:22](https://www.linkedin.com/learning/data-engineering-foundations/what-is-data-engineering?u=76281980&t=22)** Now laying out data for scientists and researchers has become a complex problem in itself.
>
> **[0:28](https://www.linkedin.com/learning/data-engineering-foundations/what-is-data-engineering?u=76281980&t=28)** This is where data engineers step in and find their role in this ecosystem.
>
> **[0:33](https://www.linkedin.com/learning/data-engineering-foundations/what-is-data-engineering?u=76281980&t=33)** Hi, I am Harshit Tyagi and in this course we are going to learn the foundations of data engineering.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-foundations/what-is-data-engineering?u=76281980&t=39)** We'll start by understanding the meaning of data engineering, how it is different from data science, and what tools you should master in order to develop data pipelines.
>
> **[0:48](https://www.linkedin.com/learning/data-engineering-foundations/what-is-data-engineering?u=76281980&t=48)** Then we'll study the foundations of a big data system, like databases and distributed computing.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-foundations/what-is-data-engineering?u=76281980&t=55)** Further on, we'll learn about the tools that would come in handy to address each type of problem while developing an ETL data pipeline.
>
> **[1:03](https://www.linkedin.com/learning/data-engineering-foundations/what-is-data-engineering?u=76281980&t=63)** In the last chapter, we'll apply the learned concepts and tools to develop and schedule our own ETL pipeline.
>
> **[1:11](https://www.linkedin.com/learning/data-engineering-foundations/what-is-data-engineering?u=76281980&t=71)** So what are you waiting for?
>
> **[1:13](https://www.linkedin.com/learning/data-engineering-foundations/what-is-data-engineering?u=76281980&t=73)** Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Env Vars:** etl (2)
> **Code Keywords:** let (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [harshit] (1)


### 1. Introduction to Data Engineering

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction to data engineering
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=0)** - [Instructor] If you have ever heard of the data science, there's a good chance you have heard of data engineering as well.
>
> **[0:06](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=6)** As the data space has matured, data engineering has emerged as a separate role to help organizations solve the problem of laying out data in efficient, big data systems.
>
> **[0:15](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=15)** And this video, we will try to understand what data engineering means at a data-driven organization.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=20)** Imagine that you have been hired as a data scientist at a young data-driven organization.
>
> **[0:24](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=24)** You are tasked with developing a model to flag fraudulent transactions.
>
> **[0:30](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=30)** You want to use a fancy machine learning technique that you have been honing for years.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=34)** However, after digging around for a couple of hours, you realize all of your data is scattered around many databases.
>
> **[0:40](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=40)** Additionally, the data resides in tables that are optimized for applications to run, not for carrying out analysis.
>
> **[0:47](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=47)** To make matters worse, some legacy code has caused a lot of the data to be corrupt.
>
> **[0:54](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=54)** In your previous company, you never really had this problem because all of the data was available to you in an orderly fashion.
>
> **[1:00](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=60)** You're getting desperate and then comes the data engineer to the rescue.
>
> **[1:04](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=64)** It is the data engineer's task to make your life as a data scientist easier.
>
> **[1:08](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=68)** If you need that the data concurrently comes from several sources, the data engineer will extract data from those multiple sources and load it into one single database ready to use.
>
> **[1:19](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=79)** At the same time, they will optimize the database schema so it becomes faster to query.
>
> **[1:25](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=85)** They also monitor the data pipelines to make sure that there is no corrupt data.
>
> **[1:29](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=89)** They repair the pipeline whenever there's an issue, they schedule or automate tasks to avoid any errors during manual work.
>
> **[1:38](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=98)** As per the definition, data engineering is a type of software engineering that focuses on designing, developing, testing, and maintaining architectures, such as databases and large-scale processing systems.
>
> **[1:52](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=112)** Now, data engineers should have the following skills and knowledge.
>
> **[1:57](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=117)** They need to know Linux.
>
> **[1:59](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=119)** They should be comfortable using the command line.
>
> **[2:01](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=121)** They should have expedience programming in at least one of the programming languages, such as Python or Scala or Java.
>
> **[2:09](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=129)** They should know SQL, how to write queries, how to extract data, how to create database schema.
>
> **[2:15](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=135)** They need some understanding of distributed systems in general and how they are different from traditional storage and processing systems.
>
> **[2:24](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=144)** They need a deep understanding of the ecosystem, including ingestion, processing frameworks and storage engines.
>
> **[2:31](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=151)** They should know the strengths and weaknesses of each tool and what it is best used for.
>
> **[2:36](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=156)** They need to know how to access and process data.
>
> **[2:41](https://www.linkedin.com/learning/data-engineering-foundations/introduction-to-data-engineering?u=76281980&t=161)** In the sense, data engineer is one of the most valuable people in a data-driven organization that wants to scale up.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), python (1)
> **Analogies:** such as (2), imagine (1)
> **Code Keywords:** for. (1)
> **Env Vars:** sql (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Data engineer vs. data scientist
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-foundations/data-engineer-vs-data-scientist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/data-engineer-vs-data-scientist?u=76281980&t=0)** - [Instructor] When you try to scale up an organization, the person who is building the algorithm is not the person who should be cleaning the data or building the tools.
>
> **[0:09](https://www.linkedin.com/learning/data-engineering-foundations/data-engineer-vs-data-scientist?u=76281980&t=9)** Let's try to understand how responsibilities of a data engineer differ from that of a data scientist.
>
> **[0:15](https://www.linkedin.com/learning/data-engineering-foundations/data-engineer-vs-data-scientist?u=76281980&t=15)** Typically, the tasks of a data engineer consists of developing a scalable data architecture, streamlining data acquisition, setting up processes that bring data together from several sources, and safeguarding data quality by cleaning up corrupt data.
>
> **[0:33](https://www.linkedin.com/learning/data-engineering-foundations/data-engineer-vs-data-scientist?u=76281980&t=33)** Now typically, they also have a deep understanding of cloud technology.
>
> **[0:38](https://www.linkedin.com/learning/data-engineering-foundations/data-engineer-vs-data-scientist?u=76281980&t=38)** They are experienced using cloud service providers, like AWS, Azure, or Google Cloud Platform.
>
> **[0:47](https://www.linkedin.com/learning/data-engineering-foundations/data-engineer-vs-data-scientist?u=76281980&t=47)** On the other hand, data scientists spend most of their time mining for patterns in data, deriving insights, applying statistical models on large datasets, or building predictive models using machine learning.
>
> **[1:02](https://www.linkedin.com/learning/data-engineering-foundations/data-engineer-vs-data-scientist?u=76281980&t=62)** They develop tools to monitor essential business processes or cleaning data by removing statistical outliers.
>
> **[1:11](https://www.linkedin.com/learning/data-engineering-foundations/data-engineer-vs-data-scientist?u=76281980&t=71)** Data scientists typically have a deep understanding of the business and they influence the decision-making through their findings.
>
> **[1:20](https://www.linkedin.com/learning/data-engineering-foundations/data-engineer-vs-data-scientist?u=76281980&t=80)** While there is some overlap in terms of data cleaning and manipulation skills, these roles are not interchangeable.
>
> **[1:28](https://www.linkedin.com/learning/data-engineering-foundations/data-engineer-vs-data-scientist?u=76281980&t=88)** Data engineers compliment the output of data scientists by providing clean, formatted, and aggregated data in an efficient manner.
>
> **[1:38](https://www.linkedin.com/learning/data-engineering-foundations/data-engineer-vs-data-scientist?u=76281980&t=98)** Data scientists then further analyze the data and develop statistical models to understand the inherent patterns in the data and further help in decision-making.
>
> **[1:48](https://www.linkedin.com/learning/data-engineering-foundations/data-engineer-vs-data-scientist?u=76281980&t=108)** So, we can say that data engineers handle the development side of things, whereas data scientists help in driving business decisions through their experiments and analysis.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (1)
> **Code Keywords:** let (1)
> **Env Vars:** aws (1)
> **Speakers:** - [instructor] (1)

#### Essential tools for data engineering
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=1)** - A Data Engineer moves data from several sources, processes or cleans it, and finally loads it into an analytical database.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=8)** They do this using several tools.
>
> **[0:11](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=11)** This video will give you an overview of how data engineers fulfill their tasks using these tools.
>
> **[0:17](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=17)** Now, data engineering tools can be broadly classified into three categories.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=21)** First is storage, that is databases.
>
> **[0:24](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=24)** Second is processing frameworks.
>
> **[0:26](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=26)** And third category is automation, that is scheduling tools.
>
> **[0:30](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=30)** So, let's go over each one of them.
>
> **[0:33](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=33)** First one, we have databases.
>
> **[0:35](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=35)** So Data Engineers are expert users of database systems.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=39)** Roughly speaking, database is a computer system that holds large amount of data.
>
> **[0:45](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=45)** You might have heard of SQL or NoSQL databases.
>
> **[0:49](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=49)** Most applications rely on databases to provide certain functionality.
>
> **[0:54](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=54)** For example, in an e-commerce application, a database holds product data like description, prices, or amount in stock.
>
> **[1:04](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=64)** On the other hand, other databases hold data specifically for analysis.
>
> **[1:09](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=69)** To summarize, it is essential to understand that, the Data Engineer's task begins and ends at databases.
>
> **[1:19](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=79)** Some of the database management systems that are frequently used are MySQL, PostgreSQL and MongoDB for NoSQL.
>
> **[1:28](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=88)** Talking about processing frameworks, Data Engineers, use tools that can help them quickly process data.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=95)** Processing data might be necessary to clean or aggregate data, or to join it together from different sources.
>
> **[1:42](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=102)** Typically, huge amounts of data have to be processed.
>
> **[1:45](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=105)** That is where (mumbles) processing comes into play.
>
> **[1:49](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=109)** Instead of processing the data on one computer, Data Engineers use clusters of machines to process the data.
>
> **[1:57](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=117)** Often, these tools make an abstraction of the underlying architecture and have a simple API.
>
> **[2:05](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=125)** They further, do this for different types of data, that is, batch data or streaming data coming in from sensors, or any other source.
>
> **[2:15](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=135)** Now, talking about commonly used processing frameworks or tools, we have Spark, Hive, or Kafka.
>
> **[2:24](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=144)** Now, a good Data Engineer understands these abstractions and knows their limitations as well.
>
> **[2:30](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=150)** Coming to scheduling tools.
>
> **[2:32](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=152)** These help to make sure data moves from one place to another at the correct time with a specific interval.
>
> **[2:40](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=160)** Data Engineers make sure these jobs run in a timely fashion and that they run in the right order.
>
> **[2:48](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=168)** Sometimes, processing jobs need to run in a particular order, to function correctly.
>
> **[2:53](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=173)** For example, missing values, should be handled before aggregating the data.
>
> **[2:58](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=178)** So, the results search dependency requirements between those jobs.
>
> **[3:03](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=183)** Finally, for scheduling we can use Apache, Airflow, Oozie, or Luigi.
>
> **[3:10](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=190)** And these are a few commonly used tools for scheduling tools.
>
> **[3:15](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=195)** Now to sum everything up, you can think of data engineering pipeline through this diagram.
>
> **[3:21](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=201)** They extract all data through connections with several databases, transform that using a cluster computing framework like Spark at the middle, and loads it into an analytical database.
>
> **[3:35](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=215)** Also, everything is scheduled to run in a specific order through a scheduling framework like Apache, Airflow.
>
> **[3:43](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=223)** A small side note here is that, the sources can be external APIs or other formats as well.
>
> **[3:50](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=230)** Developing expertise in these three categories of tools and their underlying principle, help you make a good Data Engineer.
>
> **[3:58](https://www.linkedin.com/learning/data-engineering-foundations/essential-tools-for-data-engineering?u=76281980&t=238)** And in the coming chapters, we will learn to use commonly used tools from each of these categories.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), apache (2), mysql (1)
> **Code Keywords:** let (1), function (1), finally, (1)
> **Env Vars:** sql (1), api (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - a (1)


### 2. Databases and Dataframes

> [↑ Back to Table of Contents](#table-of-contents)

#### Intro to databases and their types
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=0)** - [Instructor] Before we get down to creating databases, let's try to understand what databases are and the differences between their types.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=8)** Databases are an essential tool for the data engineer.
>
> **[0:11](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=11)** They can be used to store information.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=13)** Before we deep dive into the types of databases, let's get some definitions out of the way.
>
> **[0:19](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=19)** A database is a large collection of data organized in efficient structures and formats, specifically designed to support rapid search and retrieval.
>
> **[0:29](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=29)** There are a few pieces of vital information in this definition.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=34)** First, the database holds data.
>
> **[0:37](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=37)** Second, databases organize data.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=39)** We'll see later that there are different levels of organizations.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=43)** Lastly, databases help us quickly retrieve or search for data.
>
> **[0:48](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=48)** And the database management system or DBMS, is usually in charge of this task.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=55)** The main difference between databases and simple storage systems, like file systems, is the level of organization, and the fact that databases, or database management systems extrapolate a lot of complicated data operations like search, replication, indexing, et cetera.
>
> **[1:14](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=74)** File systems, on the other hand, holds less of such functionality.
>
> **[1:19](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=79)** They are less organized.
>
> **[1:21](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=81)** And they offer minimal features and functionalities.
>
> **[1:24](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=84)** Among databases, there is a big difference in the level of organization.
>
> **[1:29](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=89)** To understand these differences, we have to make a distinction between structured, semi-structured, and unstructured data.
>
> **[1:37](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=97)** On one hand, structured data is coherent to a well-defined structure.
>
> **[1:41](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=101)** Database schemas usually define such structure.
>
> **[1:45](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=105)** An example of structured data is tabular data in a relational database.
>
> **[1:49](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=109)** Semi-structured data is a form of structured data, but it does not follow the tabular structure of data models associated with relational databases, or other forms of data tables, but nonetheless, contains tags or other markers like key-value pairs to separate semantic elements and enforce hierarchies of records and feeds within the data.
>
> **[2:14](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=134)** An example of semi-structured data is JSON data.
>
> **[2:19](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=139)** Unstructured data, on the other hand, is schema-less.
>
> **[2:22](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=142)** It looks a lot more like files.
>
> **[2:24](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=144)** Unstructured data could be something like photographs or videos.
>
> **[2:29](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=149)** So structured and unstructured data define outer boundaries, and there is a whole lot of semi-structured data in between.
>
> **[2:39](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=159)** Another distinction we can make is the one between SQL and NoSQL.
>
> **[2:44](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=164)** Generally speaking, in SQL databases, tables form the data.
>
> **[2:48](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=168)** The database schema defines the relations between these tables.
>
> **[2:52](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=172)** Because SQL database is relational, the database schema defines the relationships and properties.
>
> **[2:59](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=179)** Typical SQL databases are MySQL and PostgreSQL.
>
> **[3:04](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=184)** On the other hand, NoSQL databases are called non-relational and they are often associated with unstructured, schema-less data.
>
> **[3:12](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=192)** Now that's a misconception, as there are several types of NoSQL databases, and they are not all unstructured.
>
> **[3:20](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=200)** Two highly-used NoSQL databases types are key-value tools, like Reddis or document databases like MongoDB.
>
> **[3:30](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=210)** In key-value's tools, the values are simple.
>
> **[3:33](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=213)** Typical use cases are caching or distributed configuration.
>
> **[3:37](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=217)** Values in a document database are structured or semi-structured objects.
>
> **[3:43](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=223)** For example, a JSON object.
>
> **[3:45](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=225)** We learn about the type of data and databases.
>
> **[3:49](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=229)** To give you a high-level picture, we'll retrieve data from different sources in different formats.
>
> **[3:56](https://www.linkedin.com/learning/data-engineering-foundations/intro-to-databases-and-their-types?u=76281980&t=236)** And we use different types of databases to handle these different formats as per our use cases.

> [!info]- Semantic Content
>
> **Env Vars:** sql (4), json (2), dbms (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (2), mysql (1)
> **Code Keywords:** let (2)
> **Analogies:** for example (1), picture (1)
> **Speakers:** - [instructor] (1)

#### Understanding database schema
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=0)** - [Instructor] The next step is to understand how to design and develop databases.
>
> **[0:04](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=4)** To do that, we need to learn about database schema.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=8)** To reiterate, a database schema describes the structure and relationships between tables of a database.
>
> **[0:14](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=14)** Here, you can see a database schema on the right hand side.
>
> **[0:17](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=17)** This is a very simple example of a restaurant ordering system.
>
> **[0:22](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=22)** We have one thing we call customer and the other called order.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=25)** You have defined properties of each table, where ID in each table is the primary key which is the unique identifier of each instance of that particular table.
>
> **[0:37](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=37)** The field called customer ID in the order table connects orders with customers.
>
> **[0:44](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=44)** We call this kind of column or field a foreign key, as it refers to another table.
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=50)** Let's see how we can create such a schema in a database using SQL.
>
> **[0:54](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=54)** If you want to get a SQL primary, you can refer to courses in our library that can help you master SQL.
>
> **[1:00](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=60)** The SQL statements here create the tables of the defined schema that we saw earlier.
>
> **[1:05](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=65)** The query on the left creates the customer tables with properties like ID, first name, last name, email, password and ID is the primary key.
>
> **[1:14](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=74)** On the right, you see the SQL statements that creates the order table, where we have customer ID as a foreign key.
>
> **[1:22](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=82)** We can leverage these foreign keys by joining tables using the joint statement as well.
>
> **[1:27](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=87)** Now companies often build data warehouses to handle large volumes of data from various sources for analytical purposes.
>
> **[1:36](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=96)** And multidimensional schema is especially designed to model such data warehouse systems.
>
> **[1:42](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=102)** These schemas are designed to address the unique needs of very large databases that serve our analytical purposes.
>
> **[1:50](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=110)** A schema you'll often see is the star schema.
>
> **[1:53](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=113)** Lot of analytical databases like Redshift have optimizations for these kinds of schemas.
>
> **[2:00](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=120)** According to Wikipedia, the star schema consists of one or more fact tables.
>
> **[2:05](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=125)** For example, the orders table here.
>
> **[2:08](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=128)** And then this fact table is referencing a number of dimension tables.
>
> **[2:13](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=133)** For example customer, dimension restaurant, dimensions time, dimension dish.
>
> **[2:18](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=138)** So dimension tables, hold the information on the world itself.
>
> **[2:22](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=142)** Like customer names and distresses.
>
> **[2:25](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=145)** Fact tables on the other hand contains the records that represent things that happen in the world.
>
> **[2:31](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=151)** So designing a database schema is the first step in building a data pipeline.
>
> **[2:36](https://www.linkedin.com/learning/data-engineering-foundations/understanding-database-schema?u=76281980&t=156)** It often requires lots of planning because an ineffective schema can lead to a database that consumes a lot of memory and resources.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5)
> **Definitions:** is a  (1), we call this (1), refers to (1)
> **Analogies:** for example (2)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Distributive computing
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=0)** - [Instructor] Handling petabytes of data requires distributed or parallel computing.
>
> **[0:04](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=4)** Therefore it's crucial to understand the concept of distributed computing.
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=7)** In any data pipeline, we have to collect data from various sources, join them together, clean them and aggregate them.
>
> **[0:16](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=16)** Parallel computing forms the basis of almost all modern data processing tools.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=21)** However, why has it become so important in the world of big data?
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=25)** The main reason is memory and processing power.
>
> **[0:28](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=28)** When big data processing tools perform a processing task, they split it up into several smaller subtasks.
>
> **[0:35](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=35)** The processing tools then distribute these subtasks over several computers.
>
> **[0:40](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=40)** These are usually commodity computers, which means they are widely available and relatively inexpensive.
>
> **[0:46](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=46)** Individually, all of the computers would take long time to process the complete task.
>
> **[0:52](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=52)** However, since all the computers work in parallel on smaller subtasks, the task in its whole is completed faster.
>
> **[1:02](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=62)** As you would expect, the obvious benefit of having multiple processing units is the extra processing power itself.
>
> **[1:08](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=68)** However, there is another potentially more impactful benefit of parallel computing.
>
> **[1:13](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=73)** Instead of needing to load all of the data in one computer's memory, you can partition the data and load the subsets into memory of different computers.
>
> **[1:22](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=82)** That means the memory footprint book computer is relatively small and the data can fit in the memory closest to the processor, that is the RAM.
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=92)** This reduces the cost and helps in fault tolerance.
>
> **[1:36](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=96)** Before we start writing the code to use parallel computing or distributed computing, keep in mind that this also comes at its cost.
>
> **[1:45](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=105)** Splitting a task into subtasks and merging the results of the subtasks back into one final result, requires some communication between processes.
>
> **[1:55](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=115)** This communication overhead can become a bottleneck, if the processing requirements are not substantial, or if you have too little processing units.
>
> **[2:05](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=125)** In other words, if you have two processing units, a task that takes a few hundred milliseconds might not be worth splitting up.
>
> **[2:14](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=134)** Additionally, due to the overhead, the speed does not increase linearly.
>
> **[2:19](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=139)** This effect is also called parallel slow down.
>
> **[2:24](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=144)** So here's a practical example.
>
> **[2:26](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=146)** We are starting with a dataset of all Olympic events from 1896 until 2016.
>
> **[2:33](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=153)** From this dataset, you want to get an average age of participants for each year.
>
> **[2:39](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=159)** For this example, let's say you have four processing units at your disposal.
>
> **[2:44](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=164)** You decide to distribute the load, over all of your processing units.
>
> **[2:48](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=168)** To do so, you need to split the task into smaller subtasks.
>
> **[2:53](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=173)** In this example, average age calculation for each group of use is a subtask.
>
> **[2:58](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=178)** We can achieve that using the groupby function.
>
> **[3:01](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=181)** Then we distribute all of the subtasks over four processing units.
>
> **[3:05](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=185)** This example illustrates roughly how, forced distributed algorithms like Hadoop may not reduce work.
>
> **[3:12](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=192)** The difference being the processing units are distributed over several machines.
>
> **[3:18](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=198)** By coding, there are several ways of implementing this.
>
> **[3:21](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=201)** At a low level, we could use the multiprocessing .Pool API to distribute work over several cores of the same machine.
>
> **[3:30](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=210)** Let's say we have a function athlete_avg_age, which accepts a double, the year of the group and the group itself, which is mentioned as grouped_data here.
>
> **[3:40](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=220)** The function returns a data frame with one observation and one column, the mean age of the group.
>
> **[3:46](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=226)** The resulting data frame is indexed by year.
>
> **[3:49](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=229)** We can then take this function, and map it over the groups generated by .groupby function, using the .map method of the Pool module.
>
> **[3:59](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=239)** By definition, four as an argument to Pool, the mapping runs in four separate processes.
>
> **[4:06](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=246)** And those uses four cores.
>
> **[4:08](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=248)** Finally, we can concatenate the results to form the resulting data frame.
>
> **[4:13](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=253)** Now, several packages offer a layer of abstraction to avoid having to write such low level code using multiprocessing module.
>
> **[4:24](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=264)** For example, the Dask framework, offers a data frame object, which performs a groupby and apply using multiprocessing out of the box.
>
> **[4:33](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=273)** You need to define the number of partitions, for example four, and Dask divides the data frame into four parts, and performs .mean or average within each part separately.
>
> **[4:46](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=286)** Because Dask uses lazy evaluation, you need to add the .compute to the end of the chain.
>
> **[4:52](https://www.linkedin.com/learning/data-engineering-foundations/distributive-computing?u=76281980&t=292)** So, this is how we can break bigger tasks into smaller subtasks, then distribute them among several machines and finally aggregate the results from each machine, to load the transformed data into the analytical database for the data scientists to use.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (2), module (2), this. (1), finally, (1)
> **Code Identifiers:** athlete_avg_age (1), grouped_data (1)
> **Env Vars:** ram (1), api (1)
> **Definitions:** in other words (1), is a  (1)
> **Analogies:** for example (2)
> **Warnings:** keep in mind (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)


### 3. Data Engineering Tools

> [↑ Back to Table of Contents](#table-of-contents)

#### MapReduce and Hadoop
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=0)** - [Instructor] It's time to talk about specific parallel computing frameworks.
>
> **[0:03](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=3)** We'll focus on frameworks that are currently hot in the data engineering world.
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=7)** When it comes to big data systems, Hadoop is the most popular and used frameworks.
>
> **[0:12](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=12)** And MapReduce was one of the most popular processing techniques.
>
> **[0:17](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=17)** So, what is Hadoop?
>
> **[0:18](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=18)** It is the ecosystem of open-source tools that has changed the way enterprises store, process, and analyze data.
>
> **[0:26](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=26)** It's a collection of open-source projects that is maintained by the Apache Software Foundation.
>
> **[0:32](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=32)** Some of them are a bit outdated, but it is still relevant to talk about them.
>
> **[0:36](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=36)** It uses the MapReduce algorithm.
>
> **[0:38](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=38)** A Hadoop plays a central role in developing ETL pipelines, where ETL stands for Extract, Transform, and Load.
>
> **[0:46](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=46)** There are two Hadoop projects we want to focus on in this particular video; MapReduce and HDFS.
>
> **[0:52](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=52)** So let's first talk about HDFS.
>
> **[0:54](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=54)** It is a distributed file system.
>
> **[0:57](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=57)** It is similar to the file system that you have on your computer.
>
> **[1:00](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=60)** The only difference being the files reside on multiple different computers.
>
> **[1:04](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=64)** HDFS has been essential in the big data world and for parallel computing by extension.
>
> **[1:10](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=70)** Nowadays, cloud-managed storage systems like Amazon S3 or Google Cloud Storage often replace HDFS.
>
> **[1:20](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=80)** Second, MapReduce.
>
> **[1:21](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=81)** MapReduce was one of the first popularized big data processing paradigms.
>
> **[1:26](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=86)** It works similar to the example that we saw in the previous video, where the program splits tasks into sub-tasks, distributing the workload and data between several processing units.
>
> **[1:38](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=98)** For MapReduce, these processing units are several computers in the cluster.
>
> **[1:43](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=103)** MapReduce has its flaws.
>
> **[1:46](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=106)** One of it was that it was hard to write these MapReduce jobs.
>
> **[1:51](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=111)** Now, many software programs popped up to address this problem in each segment of tasks.
>
> **[1:58](https://www.linkedin.com/learning/data-engineering-foundations/mapreduce-and-hadoop?u=76281980&t=118)** Now, in the upcoming videos, we'll deep dive into those software programs.

> [!info]- Semantic Content
>
> **Env Vars:** hdfs (4), etl (2)
> **Definitions:** stands for (1), is a  (1)
> **Analogies:** similar to (2)
> **CLI Commands:** apache (1)
> **Code Keywords:** let (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### Hive
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-foundations/hive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/hive?u=76281980&t=0)** - [Instructor] First up in the software programs that are under the Hadoop umbrella is Hive.
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-foundations/hive?u=76281980&t=5)** It offers features that help in the extraction part of the ETL data pipeline.
>
> **[0:10](https://www.linkedin.com/learning/data-engineering-foundations/hive?u=76281980&t=10)** Hive is a layer on top of the Hadoop ecosystem that makes data from several sources queryable in a structured way using Hive's SQL variant, which is called Hive SQL.
>
> **[0:22](https://www.linkedin.com/learning/data-engineering-foundations/hive?u=76281980&t=22)** It provides an SQL-like interface to query data.
>
> **[0:26](https://www.linkedin.com/learning/data-engineering-foundations/hive?u=76281980&t=26)** We can also extract data from databases and file systems that integrate with Hadoop.
>
> **[0:33](https://www.linkedin.com/learning/data-engineering-foundations/hive?u=76281980&t=33)** Back when there were no choice of tools, developers had to implement queries in MapReduce Java API, which was pretty hard.
>
> **[0:42](https://www.linkedin.com/learning/data-engineering-foundations/hive?u=76281980&t=42)** Facebook initially developed Hive, but the Apache Software Foundation now maintains the project.
>
> **[0:47](https://www.linkedin.com/learning/data-engineering-foundations/hive?u=76281980&t=47)** Although MapReduce was initially responsible for running the Hive jobs, it now integrates well with several other data processing tools.
>
> **[0:56](https://www.linkedin.com/learning/data-engineering-foundations/hive?u=76281980&t=56)** Let's look at this example where we are using the same Olympic events dataset as we saw earlier.
>
> **[1:02](https://www.linkedin.com/learning/data-engineering-foundations/hive?u=76281980&t=62)** This Hive query over here selects the average age of the Olympians per year.
>
> **[1:08](https://www.linkedin.com/learning/data-engineering-foundations/hive?u=76281980&t=68)** As you would expect, this coding looks indistinguishable from a regular SQL query.
>
> **[1:13](https://www.linkedin.com/learning/data-engineering-foundations/hive?u=76281980&t=73)** However, behind the curtains this query is transformed into a job that can operate on a cluster of computers using the MapReduce algorithms.
>
> **[1:25](https://www.linkedin.com/learning/data-engineering-foundations/hive?u=76281980&t=85)** This is just one of the ways to collect data and there are many other tools that you can use or integrate with Hive.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-foundations/hive?u=76281980&t=94)** So, after the extraction of data is complete, it's now time to learn about a data transformation tool.

> [!info]- Semantic Content
>
> **Env Vars:** sql (4), etl (1), api (1)
> **Code Keywords:** interface (1), let (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** apache (1)
> **Cross-References:** as we saw (1)
> **Speakers:** - [instructor] (1)

#### Spark
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=0)** - [Instructor] The other parallel computation framework we'll introduce is called Spark.
>
> **[0:04](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=4)** Spark distributes data processing tasks between clusters of computers.
>
> **[0:09](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=9)** But why did we need a tool like Spark?
>
> **[0:11](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=11)** So MapReduce based systems tend to need expensive disk writes between jobs.
>
> **[0:16](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=16)** Spark tries to keep as much processing as possible in memory.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=20)** In that sense, Spark was an answer to the limitations of MapReduce, the disk writes of MapReduce were especially limiting an interactive exploratory data analysis, where each step builds on top of a previous step.
>
> **[0:33](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=33)** Spark originates from the University of California where it was developed at the Berkeley's AMPLab.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=39)** And currently the project is maintained by the Apache Software Foundation.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=43)** A Spark relies on a data structure called resilient distributed datasets, or RDDs.
>
> **[0:51](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=51)** Now, without diving into technicalities, this is a data structure that maintains data which is distributed between multiple nodes.
>
> **[1:00](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=60)** Now unlike data frames, RDDs don't have named columns.
>
> **[1:03](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=63)** From a conceptual perspective, you can think of RDDs as a list of topples.
>
> **[1:09](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=69)** We can do two types of operations on these data structures, transformations and actions.
>
> **[1:14](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=74)** So when we talk about transformations, we're talking about functions like filter, map, groupByKey, union.
>
> **[1:23](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=83)** And when we talk about actions, we are talking about functions like count, first, collect and reduce.
>
> **[1:30](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=90)** Transformations result in transformed RDDs.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=94)** While actions result in a single result.
>
> **[1:36](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=96)** When working with Spark, people typically use a programming language interface like PySpark.
>
> **[1:42](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=102)** A PySpark is a Python interface to Spark.
>
> **[1:45](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=105)** There are interfaces to Spark in other languages like R or Scala as well.
>
> **[1:51](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=111)** PySpark holds a DataFrame abstraction which means that you can do operations very similar to pandas DataFrames.
>
> **[1:57](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=117)** And PySpark and Spark take care of all the complex parallel computation operations.
>
> **[2:03](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=123)** Have a look at this example over here where we are using PySpark.
>
> **[2:08](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=128)** And similar to the Hive query that we saw before, it calculates the mean age of the Olympic athletes per year of the Olympic event.
>
> **[2:18](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=138)** Instead of using the sequel abstraction like in Hive example, it uses the DataFrame abstraction.
>
> **[2:25](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=145)** So this is how we can actually write a PySpark Analogous of Sequel which is using the DataFrame abstraction.
>
> **[2:32](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=152)** So engineered from the bottom of performance Spark can be 100 X faster than Hadoop for large scale data processing.
>
> **[2:40](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=160)** This covers the transformation part of the ETL pipeline.
>
> **[2:44](https://www.linkedin.com/learning/data-engineering-foundations/spark?u=76281980&t=164)** Now we should move to learn about automating all of this work.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is called (1), means that (1)
> **CLI Commands:** apache (1), python (1)
> **Code Keywords:** interface (2)
> **Code Identifiers:** groupbykey (1)
> **Env Vars:** etl (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Airflow
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=0)** - [Instructor] Before we learn how workflow scheduling frameworks work, let's first to understand what a workflow is.
>
> **[0:06](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=6)** Let's take an example.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=8)** You can write a Spark job that pulls data from a CSV file, filters out some corrupt records, and loads the data into a SQL database ready for analysis.
>
> **[0:19](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=19)** However, let's say you need to do this job every day.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=21)** One option is to run the job every day manually, but of course that's not scalable.
>
> **[0:27](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=27)** What about the weekends?
>
> **[0:28](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=28)** Now for this, there are simple tools that could solve this problem, like cron, which is a Linux tool.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=34)** However, let's say you have one job for the CSV file and another job that will clean the data from an API, and a third job that joins the data from the CSV and the API together.
>
> **[0:46](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=46)** And the third job basically just depends on the first two jobs to finish first.
>
> **[0:51](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=51)** It quickly becomes apparent that we need a more holistic approach.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=55)** And a simple tool like cron won't suffice.
>
> **[0:58](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=58)** It's the task of the workflow scheduling framework to orchestrate these jobs.
>
> **[1:03](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=63)** So we ended up with dependencies between jobs.
>
> **[1:07](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=67)** A great way to visualize these dependencies is through directed acyclic graphs, or DAGs.
>
> **[1:13](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=73)** A DAG is a set of nodes that are connected by directed edges, and there are no cycles in the graph, which means that no path following the directed edges sees a specific node more than once.
>
> **[1:27](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=87)** In the example on this slide, you can see that job A needs to happen first, then job B, which enables jobs C and D, and finally job E.
>
> **[1:38](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=98)** So as you can see, it feels natural to represent this kind of workflow in a DAG.
>
> **[1:42](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=102)** The job is represented by the DAG and can then run in a daily schedule.
>
> **[1:48](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=108)** So we've talked about dependencies and scheduling DAGs, let's discuss the tools that we can use for this task.
>
> **[1:55](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=115)** Most companies use a full-fledged solution, and Linux cron is a very simple solution for that.
>
> **[2:02](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=122)** We need a more holistic tool that can take care of all such dependencies.
>
> **[2:07](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=127)** There's Spotify's Luigi, which allows for definitions of DAGs for complex pipelines.
>
> **[2:13](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=133)** However, for the remainder of this video we'll focus on Apache Airflow.
>
> **[2:17](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=137)** Airflow is growing out to be the defacto workflow scheduling framework.
>
> **[2:22](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=142)** Now, Airbnb created Airflow as an internal tool for workflow management.
>
> **[2:28](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=148)** They opened sourced Airflow in 2015, and it later joined the Apache software foundation in 2016.
>
> **[2:34](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=154)** They built Airflow around the concept of DAGs, and using Python, developers can create and test these DAGs that build up complex data pipelines.
>
> **[2:44](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=164)** So let's look at the Olympic events example in the DAG, which is shown here.
>
> **[2:49](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=169)** The first job starts a Spark cluster.
>
> **[2:52](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=172)** Once it has started, we can pull in athlete data and let's say venue data where the event was organized.
>
> **[2:58](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=178)** And then by running the ingest athlete data and the ingest venue data jobs, you can then move on to aggregate the data from both of these tables in the enrich athlete data job, which runs after the ingestion jobs are completed.
>
> **[3:14](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=194)** So let's look at how we are going to code this example.
>
> **[3:18](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=198)** So here's the code snippet.
>
> **[3:20](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=200)** It would look something like this.
>
> **[3:21](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=201)** First, we create a DAG using the DAG class with your DAG name and start date.
>
> **[3:27](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=207)** Afterwards, we use an operator to define each of these jobs.
>
> **[3:31](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=211)** Airflow offers several kinds of operators.
>
> **[3:34](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=214)** There are simple ones like bash operators and Python operator that execute bash or Python code respectively.
>
> **[3:42](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=222)** Then there are ways to write your own operator like the SparkJobOperator or StartClusterOperator in the example.
>
> **[3:50](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=230)** Finally, we define the connections between these operations using set_downstream function.
>
> **[3:57](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=237)** For example, here, the ingest athlete data would run successfully after the cluster has started successfully.
>
> **[4:04](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=244)** And similarly, for enriching the data we need to have successfully ingested the athlete data first.
>
> **[4:11](https://www.linkedin.com/learning/data-engineering-foundations/airflow?u=76281980&t=251)** So this is how scheduling frameworks work, and it's time to get started with developing an ETL pipeline.

> [!info]- Semantic Content
>
> **Env Vars:** dag (7), csv (3), api (2), sql (1), etl (1)
> **Code Keywords:** let (8), this, (1), this. (1), finally, (1), function (1)
> **CLI Commands:** python (3), apache (2), node (1)
> **Definitions:** is a  (3), means that (1)
> **Tools:** bash (2)
> **Code Identifiers:** set_downstream (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 4. ETL Pipelines

> [↑ Back to Table of Contents](#table-of-contents)

#### Sources of data extraction
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=0)** - [Instructor] As we know, E in ETL stands for extract.
>
> **[0:03](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=3)** To get started with developing an ETL pipeline, let's first look at the common data sources and data types that we have to deal with.
>
> **[0:10](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=10)** So what do we mean by extracting data?
>
> **[0:12](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=12)** Very roughly, this means extracting data from persistent storage into memory.
>
> **[0:17](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=17)** This persistent storage could be a file on Amazon S3, for example, or a SQL database, or a web API.
>
> **[0:24](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=24)** It is the necessary stage before we can start transforming the data, and the sources here may vary.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=31)** Now first of all, we can extract data from plain text files.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=34)** Now, these are the files that are generally readable by people.
>
> **[0:38](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=38)** They can be unstructured, like an article from the Forbes magazine.
>
> **[0:41](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=41)** Alternatively, these can be flat files where each row is a record, and each column is an attribute of the records.
>
> **[0:49](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=49)** In the later, we represent data in a tabular format.
>
> **[0:52](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=52)** So typical examples of flat files are comma or tab separated files, .csv or .tsv.
>
> **[1:00](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=60)** They use comma or tabs respectively to separate columns.
>
> **[1:04](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=64)** Another widespread data format is called JSON, or JavaScript Object Notation.
>
> **[1:09](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=69)** JSON files hold information in a semi-structured way.
>
> **[1:12](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=72)** It consists of four atomic datatypes: number, string, Boolean, and null.
>
> **[1:18](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=78)** There are two composite data types as well, array and object.
>
> **[1:23](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=83)** You could compare it to a dictionary in Python.
>
> **[1:25](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=85)** Now, JSON objects can be very nested, like in this particular example on the right.
>
> **[1:30](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=90)** There's a pretty good mapping from JSON objects to dictionaries in Python.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=95)** There's a packet in the standard library called json, which helps you pass the JSON data.
>
> **[1:41](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=101)** The reason JSON got popular is that in recent days many web services use this data format to communicate data.
>
> **[1:49](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=109)** Now on the web, most communication happens with something called requests.
>
> **[1:56](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=116)** You can look at request as request for data.
>
> **[1:59](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=119)** A request basically gets a response.
>
> **[2:02](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=122)** For example, if you browse Google in your web browser, your browser requests the content of the Google homepage.
>
> **[2:08](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=128)** Google servers, on the other hand, respond with the data that makes up the page.
>
> **[2:13](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=133)** However, some web servers serve data in a JSON data format instead of web pages.
>
> **[2:19](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=139)** We called these servers APIs, or application programming interfaces.
>
> **[2:24](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=144)** The popular social media tools, let's say Twitter, Twitter hosts an API that provides us with information on tweets in JSON format.
>
> **[2:32](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=152)** Using the Twitter API does not tell us anything about how Twitter stores its data.
>
> **[2:37](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=157)** It merely provides us with a structured way of getting their data.
>
> **[2:42](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=162)** Now let's look at an example of how to request data from an API using the movie database API or the TMDb API.
>
> **[2:50](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=170)** As you can see, we will use the .get method and pass a URL along with the API key that we can generate from their authentication service.
>
> **[3:00](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=180)** The resulting response object has a built-in helper method called .json.
>
> **[3:05](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=185)** And to pass the incoming JSON and transform it into another Python object, we can use this json method.
>
> **[3:14](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=194)** Finally, we have to talk about databases.
>
> **[3:17](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=197)** Now the most common way of data extraction is extraction from existing application databases.
>
> **[3:22](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=202)** Most applications like web services need a database to back them up and persist data.
>
> **[3:28](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=208)** At this point, it is essential to make a distinction between the two main types of databases.
>
> **[3:34](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=214)** For example, complex aggregate queries frequently run on analytical databases, so we should optimize them.
>
> **[3:41](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=221)** On the other hand, application databases, here on the left, have lots of transactions per second, so we should optimize them for that.
>
> **[3:51](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=231)** This ties in with something we mentioned before.
>
> **[3:54](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=234)** So we often optimize application databases for online transaction processing, or OLTP.
>
> **[4:01](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=241)** On the other hand, we optimize analytical databases for online analytical processing, or OLAP.
>
> **[4:07](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=247)** Now, OLTP databases are typically row-oriented in which the system data per rows.
>
> **[4:14](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=254)** In contrast, databases optimized for analysis are called OLAP, or online analytical processing.
>
> **[4:21](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=261)** They're often column-oriented and support parallelization.
>
> **[4:25](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=265)** Now in databases, there's a clear separation between databases for analytical, as well as for databases for application purposes.
>
> **[4:35](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=275)** So it is time to start building a pipeline.
>
> **[4:38](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=278)** It's in the upcoming videos.
>
> **[4:40](https://www.linkedin.com/learning/data-engineering-foundations/sources-of-data-extraction?u=76281980&t=280)** We will learn to extract and load data into a PostgreSQL database using Python.

> [!info]- Semantic Content
>
> **Env Vars:** json (9), api (7), etl (2), oltp (2), olap (2)
> **Code Keywords:** let (3), pass (3), finally, (1)
> **CLI Commands:** python (4), make (1)
> **Definitions:** stands for (1), is a  (1), is an  (1), is called (1)
> **Analogies:** for example (3)
> **Cross-References:** we mentioned (1)
> **Speakers:** - [instructor] (1)

#### Data extraction from a PostgreSQL database
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=0)** - [Instructor] So let's apply our knowledge to a practical project.
>
> **[0:04](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=4)** Here's an example of a movie rating application.
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=7)** I have Movies Data and I have Users Data.
>
> **[0:10](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=10)** In the movies.csv, you see I have ID of the movie, name, description and the category to which that movie belongs to.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=20)** Similarly, I have Users.
>
> **[0:22](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=22)** Users.csv contains ID of the user, the movie ID that the user is rating, and finally, the rating that the user has provided.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=31)** On the job, you will be given access to an already existing database.
>
> **[0:36](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=36)** But here, we'll have to set up our database from scratch.
>
> **[0:40](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=40)** So let's quickly do that.
>
> **[0:42](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=42)** The installation process is already provided in the Resources, so you can defer to that document, in order to download and install PostgreSQL onto your systems.
>
> **[0:53](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=53)** Now the first step is to start your Postgres Server.
>
> **[0:58](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=58)** The command for that is psql postgres.
>
> **[1:03](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=63)** Hit Enter, now your Postgres Server is running.
>
> **[1:07](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=67)** Now the next step is to create the database.
>
> **[1:11](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=71)** The command for that is CREATE DATABASE, and then the name of the database, let's call it etl_pipeline with a semicolon at the end.
>
> **[1:24](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=84)** Hit Enter, your database is now created.
>
> **[1:27](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=87)** You'll have to connect with the database in order to work with it.
>
> **[1:31](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=91)** So the command for connecting is \c and then the name of the database, again with a semicolon at the end.
>
> **[1:41](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=101)** Hit Enter, we are now connected with the database.
>
> **[1:45](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=105)** The next step is to create tables in this database.
>
> **[1:50](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=110)** The command for that is CREATE TABLE movies.
>
> **[1:58](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=118)** So here if you see, I have provided ID as the first column, name as the second column, which is of type VARCHAR.
>
> **[2:07](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=127)** I am allowing 255 characters in this field.
>
> **[2:12](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=132)** Then I have Description and Category.
>
> **[2:15](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=135)** Hit Enter, your table is created.
>
> **[2:18](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=138)** Similarly, you will create your Users Table.
>
> **[2:22](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=142)** In the Users Table, you will have to provide the FORIEGN KEY.
>
> **[2:26](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=146)** That means the movie ID field that I have in the Users Table is going to refer to the ID field in the Movies Table.
>
> **[2:36](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=156)** Hit enter, your Users Table is also created.
>
> **[2:40](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=160)** But at this point, if you check for data, SELECT * from movies, for example, there are no rows.
>
> **[2:49](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=169)** I will have to import the data over here, from our CSV files.
>
> **[2:56](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=176)** Now the command to copy our files into our table is this, \copy movies, that is the name of the table to which the rows are going to be copied, FROM, then you have to provide the path to the file.
>
> **[3:15](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=195)** So my movies.csv resides at this particular path, you will have to provide your path.
>
> **[3:21](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=201)** DELIMITER, I have comma separated values, and then CSV HEADER.
>
> **[3:26](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=206)** That means the first row in the CSV file is going to be treated as a header row that should not be added as a row in our table.
>
> **[3:36](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=216)** Hit Enter, you have copied all the data from the movies.csv into the Movies Table.
>
> **[3:43](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=223)** Similarly, you will copy all the Users Records as well.
>
> **[3:47](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=227)** Hit Enter, and now if you will try to capture all the rows from the Movies Table, there you go.
>
> **[3:57](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=237)** Now your data is present in your database tables.
>
> **[4:02](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=242)** The next step is to connect this database with our Python Script using Spark.
>
> **[4:09](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=249)** So that we can transform this data to extract aggregated insights.
>
> **[4:16](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=256)** Now, in order to do that, you should have a bunch of things installed already.
>
> **[4:21](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=261)** First of all, you'll have to install PySpark Package in your virtual environment.
>
> **[4:26](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=266)** The second thing that you'll have to have is this PostgreSQL JDBC Drivers.
>
> **[4:35](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=275)** To connect your PySpark's Script with the database, you will need these JDBC drivers along with Java installed.
>
> **[4:43](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=283)** So need PySpark, Java and this JDBC Driver downloaded onto your system.
>
> **[4:52](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=292)** So let's look at what we have over here.
>
> **[4:55](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=295)** First of all, I'm importing PySpark.
>
> **[4:57](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=297)** Then we are moving into creating a SparkSession.
>
> **[5:01](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=301)** If you already have one, it'll get it for us, otherwise it will create.
>
> **[5:05](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=305)** So first is creation of a SparkSession using this builder mode, and then I have to provide the app name, which is, Python Sparks SQL basic example, in my case.
>
> **[5:17](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=317)** Then provide the configuration.
>
> **[5:18](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=318)** We are going to use Spark Driver and the path to the driver, .getOrCreate, this will create your SparkSession.
>
> **[5:28](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=328)** The next step is to read the table from the database using JDBC Driver.
>
> **[5:33](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=333)** So the command or the function to Users, spark.read.
>
> **[5:38](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=338)** The format is JDBC.
>
> **[5:40](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=340)** The URL is where your Postgres Server is running.
>
> **[5:44](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=344)** Your Postgres Server is running at Local Host 5432.
>
> **[5:49](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=349)** And this is the name of the database that we have, etl_pipeline.
>
> **[5:54](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=354)** The database that we want to read, the table that we want to cut, the table that we want to read is Movies, user, harshit, password is this.
>
> **[6:03](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=363)** And then driver, we are using PostgreSQL.Driver over here, .load.
>
> **[6:08](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=368)** This will load our entire table into a data frame, which we are storing in the movies_df variable.
>
> **[6:16](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=376)** Finally, I will print the movies_df using the .show function.
>
> **[6:22](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=382)** Let's run the script in the terminal.
>
> **[6:24](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=384)** I will run Python 04_02.py.
>
> **[6:30](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=390)** And it'll take a few seconds, and there you go.
>
> **[6:34](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=394)** We have successfully extracted all of the records from our Movies Table in the database etl_pipeline.
>
> **[6:42](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=402)** So we have connected our Spark Script with our database.
>
> **[6:47](https://www.linkedin.com/learning/data-engineering-foundations/data-extraction-from-a-postgresql-database-24091687?u=76281980&t=407)** Similarly, you can extract data from the Users Table to get aggregated insights just like this.

> [!info]- Semantic Content
>
> **Env Vars:** jdbc (5), csv (3), create (2), database (1), table (1)
> **Code Keywords:** let (5), finally, (2), function (2), this. (2), this, (1)
> **Code Identifiers:** etl_pipeline (3), movies_df (2), getorcreate (1)
> **File Paths:** movies.csv (3), users.csv (1), 04_02.py (1)
> **CLI Commands:** python (3), psql (1)
> **SQL:** create table (1), varchar (1), select (1)
> **Prerequisites:** install (2), set up (1)
> **Analogies:** for example (1), just like (1)

#### Challenge: Data extraction
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-foundations/challenge-data-extraction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/challenge-data-extraction?u=76281980&t=0)** (bright music)
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-foundations/challenge-data-extraction?u=76281980&t=7)** - [Instructor] So you've seen how we can extract data from a PostgreSQL database.
>
> **[0:11](https://www.linkedin.com/learning/data-engineering-foundations/challenge-data-extraction?u=76281980&t=11)** We saw how we could extract data from the movies table inside our ETL_pipeline using the PostgreSQL driver as well.
>
> **[0:19](https://www.linkedin.com/learning/data-engineering-foundations/challenge-data-extraction?u=76281980&t=19)** So here's a challenge for you.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-foundations/challenge-data-extraction?u=76281980&t=21)** Now, you have to extract data from the users table inside our ETL_pipeline database.
>
> **[0:27](https://www.linkedin.com/learning/data-engineering-foundations/challenge-data-extraction?u=76281980&t=27)** So you have to fill in these blanks over here where you have to pass the name of the table and the driver that you're going to use.
>
> **[0:35](https://www.linkedin.com/learning/data-engineering-foundations/challenge-data-extraction?u=76281980&t=35)** And at the end, you have to print the users data frame that you have just read.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Data extraction
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-foundations/solution-data-extraction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/solution-data-extraction?u=76281980&t=0)** - [Tutor] So let's look at how we could extract data from the users table.
>
> **[0:10](https://www.linkedin.com/learning/data-engineering-foundations/solution-data-extraction?u=76281980&t=10)** First of all, we had to provide the name of the table.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-foundations/solution-data-extraction?u=76281980&t=13)** So that was users.
>
> **[0:16](https://www.linkedin.com/learning/data-engineering-foundations/solution-data-extraction?u=76281980&t=16)** Then add the username, the password.
>
> **[0:18](https://www.linkedin.com/learning/data-engineering-foundations/solution-data-extraction?u=76281980&t=18)** The driver that we had to provide was the postgresql drivers, since we're using the postgresql database.
>
> **[0:24](https://www.linkedin.com/learning/data-engineering-foundations/solution-data-extraction?u=76281980&t=24)** So we could simply use the one that we used to extract movies table data.
>
> **[0:30](https://www.linkedin.com/learning/data-engineering-foundations/solution-data-extraction?u=76281980&t=30)** And then at the end, we need to print the user's data frame that we have just read, user underscore df.
>
> **[0:37](https://www.linkedin.com/learning/data-engineering-foundations/solution-data-extraction?u=76281980&t=37)** We would have to use the show function overhead and that's it.
>
> **[0:41](https://www.linkedin.com/learning/data-engineering-foundations/solution-data-extraction?u=76281980&t=41)** So once you run the script you would get the data for the users table.
>
> **[0:46](https://www.linkedin.com/learning/data-engineering-foundations/solution-data-extraction?u=76281980&t=46)** So as you can see we have id, movie underscore id and rating.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), function (1)
> **Speakers:** - [tutor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Transforming data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-foundations/transforming-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/transforming-data?u=76281980&t=0)** - [Instructor] So after the successful extraction of the data from the two tables, we are now going to add a simple transformation to this extracted data.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-foundations/transforming-data?u=76281980&t=8)** Now we know analytical databases are optimized for creating aggregated data.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-foundations/transforming-data?u=76281980&t=13)** So here we are going to merge the two data frames so that we can have the average rating corresponding to the movie itself.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-foundations/transforming-data?u=76281980&t=21)** For doing that, We would first need to group all the ratings based on the movie ID.
>
> **[0:26](https://www.linkedin.com/learning/data-engineering-foundations/transforming-data?u=76281980&t=26)** So we are using the group by function over here pause on the movie ID column.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-foundations/transforming-data?u=76281980&t=31)** And then we have to calculate the average rating.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-foundations/transforming-data?u=76281980&t=34)** So we're using the mean function over here, plus the rating column to this main function and then the next step is to join the movie's data frame with this average rating data frame that we have just created.
>
> **[0:47](https://www.linkedin.com/learning/data-engineering-foundations/transforming-data?u=76281980&t=47)** So movies_ DF dot join.
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-foundations/transforming-data?u=76281980&t=50)** So join is the function that we are using plus the data frame, which is average rating.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-foundations/transforming-data?u=76281980&t=55)** And then, the common column on which we want to merge the two data frames.
>
> **[1:00](https://www.linkedin.com/learning/data-engineering-foundations/transforming-data?u=76281980&t=60)** So that is, movies_ DF ID column in this movie data frame, and then average rating and dot movie_ ID is the name of the common field and average rating data frame that we have just calculated.
>
> **[1:19](https://www.linkedin.com/learning/data-engineering-foundations/transforming-data?u=76281980&t=79)** So now, we run this script and we see that we have printed all the three tables.
>
> **[1:25](https://www.linkedin.com/learning/data-engineering-foundations/transforming-data?u=76281980&t=85)** So this is the movie table, the original table, the user original table, user's table, and this is the aggregated table after the transformation.
>
> **[1:36](https://www.linkedin.com/learning/data-engineering-foundations/transforming-data?u=76281980&t=96)** So you can see we have ID, we have name, we have description, category, movie_ID, and then the average rating corresponding to the movie itself.
>
> **[1:47](https://www.linkedin.com/learning/data-engineering-foundations/transforming-data?u=76281980&t=107)** So this is the second part, or the second stage of our ETL pipeline.
>
> **[1:52](https://www.linkedin.com/learning/data-engineering-foundations/transforming-data?u=76281980&t=112)** That is transformation.
>
> **[1:53](https://www.linkedin.com/learning/data-engineering-foundations/transforming-data?u=76281980&t=113)** Now we need to load this back to the database and in the upcoming videos we are going to look at how we can actually do that.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4)
> **Env Vars:** etl (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Transforming data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-foundations/challenge-transforming-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/challenge-transforming-data?u=76281980&t=0)** (bright music)
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-foundations/challenge-transforming-data?u=76281980&t=7)** - [Instructor] So here's a quick challenge for you to transform the users data frame by aggregating all the ratings.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-foundations/challenge-transforming-data?u=76281980&t=13)** You have to fill in these blanks with the right function and the columns to aggregate the data.
>
> **[0:19](https://www.linkedin.com/learning/data-engineering-foundations/challenge-transforming-data?u=76281980&t=19)** And then the second task is to join the two tables.
>
> **[0:24](https://www.linkedin.com/learning/data-engineering-foundations/challenge-transforming-data?u=76281980&t=24)** That is, the movies data fame and the average rating data frame based on the common columns that is there in each of these tables.
>
> **[0:32](https://www.linkedin.com/learning/data-engineering-foundations/challenge-transforming-data?u=76281980&t=32)** The last task is to actually print the final data frame that you have just returned after merging the two tables.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Transforming data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-foundations/solution-transforming-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/solution-transforming-data?u=76281980&t=0)** - [Tutor] So here's the solution to the challenge.
>
> **[0:09](https://www.linkedin.com/learning/data-engineering-foundations/solution-transforming-data?u=76281980&t=9)** The first function that you are going to use to group all the ratings is group by.
>
> **[0:16](https://www.linkedin.com/learning/data-engineering-foundations/solution-transforming-data?u=76281980&t=16)** Then you would further add the column on which you want to group.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-foundations/solution-transforming-data?u=76281980&t=20)** So that is movie underscore id.
>
> **[0:23](https://www.linkedin.com/learning/data-engineering-foundations/solution-transforming-data?u=76281980&t=23)** To calculate the average rating, you would use the mean function.
>
> **[0:27](https://www.linkedin.com/learning/data-engineering-foundations/solution-transforming-data?u=76281980&t=27)** The column name is rating.
>
> **[0:30](https://www.linkedin.com/learning/data-engineering-foundations/solution-transforming-data?u=76281980&t=30)** Then in order to merge the two data frames we would have to provide the common column, which is .id, and the movies underscore data fame and movie underscore id, and average rating data frame.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-foundations/solution-transforming-data?u=76281980&t=43)** Finally, we would have to print the final data frame which is df.show.
>
> **[0:49](https://www.linkedin.com/learning/data-engineering-foundations/solution-transforming-data?u=76281980&t=49)** And that is it.
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-foundations/solution-transforming-data?u=76281980&t=50)** We would have the transformed data frame.
>
> **[0:53](https://www.linkedin.com/learning/data-engineering-foundations/solution-transforming-data?u=76281980&t=53)** And this is the final data frame that you would see.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), finally, (1)
> **Speakers:** - [tutor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Loading data into a DB
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980&t=0)** - [Tutor] So far we have extracted and transformed the data.
>
> **[0:03](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980&t=3)** And it is time to load this transform data back to the database in a new table.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980&t=8)** Before that, you're first going to wrap these extraction and transformation code snippets into separate functions, so that automation becomes easy and these function would be reusable as well.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980&t=21)** So here you can see I have first graded the spark session as we did earlier, then we moved on to actually define or wrap the movie extraction or the user data extraction code snippets into functions.
>
> **[0:36](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980&t=36)** So I've created this first function to extract movie table data which I've named, extract movies to df.
>
> **[0:44](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980&t=44)** So here I'm doing the same thing, all I've done is simply define a function and I'm returning the movies on the score data frame.
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980&t=50)** Similarly for the users table as well, I have named it extract users to df and I am returning the user_dataframe that I have just read using the spark session.
>
> **[1:03](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980&t=63)** Similarly, I have done this for the transform function as well, the transform code snippet.
>
> **[1:09](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980&t=69)** Here I am accepting movies underscore data frame that I've read above, and then I'm also using the users underscore data frame because these are the two tables that we're using in order to transform and in order to actually get the aggregated data.
>
> **[1:25](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980&t=85)** So here, this is the code snippet for transformation, and then I am returning the final data frame which would be the output of our transformation function which I have called transform average ratings.
>
> **[1:38](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980&t=98)** Now, in order to load this transform data or this data frame back to the PostgreSQL database, this is how we would do it.
>
> **[1:48](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980&t=108)** First of all we'd have to define the mode which is overwrite over here, so if the table already exists, we would override it then provide the URL to connect with your database which is called etl_pipeline, and the PostgreSQL server is actually running on local host called 5432.
>
> **[2:06](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980&t=126)** Provide the properties, username, password, and driver, just like we did while reading, then we are going to use the write function over here, the format is (mumbles), provide the URL, the name of the table which let's say we have renamed it average underscore ratings.
>
> **[2:23](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980&t=143)** This is the name of the table that would be written to our database mode we have defined above, which is override and then the properties that we have defined about as well.
>
> **[2:31](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980&t=151)** So now we are simply going to call each of these functions one by one in order to check if everything is running smoothly or not.
>
> **[2:40](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980&t=160)** So first we extract the movies data, so movies underscore_df called the function, then we extract the user's data which is extract users to df, we call this function and load it into the variable users_df.
>
> **[2:54](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980&t=174)** Then be transformed the data that we have extracted, so we are calling it ratings_df, and we're using the transformer average ratings function that we have defined above past the two data frames, movies_df and users_df.
>
> **[3:09](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980&t=189)** And then finally we are calling the load df to db function, which is actually loading the transformed data frames back to the database.
>
> **[3:21](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980&t=201)** So let's quickly run this script, so python 04,08.py, run it, it'll take a few seconds.
>
> **[3:30](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980&t=210)** So earlier we saw that we had only two tables in our database, and now let's go and check how many tables we have in our etl_pipeline database.
>
> **[3:41](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980&t=221)** \dt is the command, so you see we have average ratings table now written over here, and let's quickly check the data presented, so let's stars from average_ratings, semi-colon (indistinct), and you can see, we have ID name, description of the movie category, and the average rating as well.
>
> **[4:04](https://www.linkedin.com/learning/data-engineering-foundations/loading-data-into-a-db?u=76281980&t=244)** So this is the aggregated data which has now beginning loaded back to the database.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), let (5), override (2)
> **Code Identifiers:** etl_pipeline (2), users_df (2), user_dataframe (1), underscore_df (1), ratings_df (1)
> **Env Vars:** url (2)
> **Definitions:** is called (1), we call this (1)
> **File Paths:** 08.py (1)
> **CLI Commands:** python (1)
> **Analogies:** just like (1)
> **Speakers:** - [tutor] (1)

#### Challenge: Loading data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-foundations/challenge-loading-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/challenge-loading-data?u=76281980&t=0)** - [Narrator] So you have learned how to load a data frame back to the database.
>
> **[0:11](https://www.linkedin.com/learning/data-engineering-foundations/challenge-loading-data?u=76281980&t=11)** So here's another quick challenge for you.
>
> **[0:14](https://www.linkedin.com/learning/data-engineering-foundations/challenge-loading-data?u=76281980&t=14)** You have to fill in these blanks with the right parameters or functions to make the loading possible.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-foundations/challenge-loading-data?u=76281980&t=20)** So, first of all, you'd have to mention the mode that you're going to use to load the data frame back to the database.
>
> **[0:26](https://www.linkedin.com/learning/data-engineering-foundations/challenge-loading-data?u=76281980&t=26)** Then you have to provide the right data frame function to load the data frame back to the database.
>
> **[0:33](https://www.linkedin.com/learning/data-engineering-foundations/challenge-loading-data?u=76281980&t=33)** And then lastly, you would have to pass the right arguments to the transform average ratings function in order to aggregate the data.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-foundations/challenge-loading-data?u=76281980&t=43)** And at last, use this aggregated data frame and call the loading function that you have defined above and load it back to the database by providing the right data frame in the arguments.
>
> **[0:57](https://www.linkedin.com/learning/data-engineering-foundations/challenge-loading-data?u=76281980&t=57)** So, best of luck.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), pass (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Loading data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-foundations/solution-loading-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/solution-loading-data?u=76281980&t=0)** - [Instructor] So here's the solution to the challenge.
>
> **[0:09](https://www.linkedin.com/learning/data-engineering-foundations/solution-loading-data?u=76281980&t=9)** First of all, you would have to use the overwrite mode.
>
> **[0:14](https://www.linkedin.com/learning/data-engineering-foundations/solution-loading-data?u=76281980&t=14)** So that is overwrite.
>
> **[0:16](https://www.linkedin.com/learning/data-engineering-foundations/solution-loading-data?u=76281980&t=16)** Then the data frame function that you would have to use to load the data frame back to the database is write.
>
> **[0:22](https://www.linkedin.com/learning/data-engineering-foundations/solution-loading-data?u=76281980&t=22)** You'd have to write the data frame back to the database and then the right parameters to the transform function is the data frame that we have read above.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-foundations/solution-loading-data?u=76281980&t=31)** So that is movies_data frame.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-foundations/solution-loading-data?u=76281980&t=34)** And then the second parameter, or the second argument is the user_dataframe.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-foundations/solution-loading-data?u=76281980&t=39)** Then to load the ratings data frame, you would have to call the loading function and then pause the ratings on the aggregated data that you have just returned above, so that is ratings_df.
>
> **[0:51](https://www.linkedin.com/learning/data-engineering-foundations/solution-loading-data?u=76281980&t=51)** So this is the solution to the challenge.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-foundations/solution-loading-data?u=76281980&t=55)** Run the script, and you would have a new table in your database.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3)
> **Code Identifiers:** movies_data (1), user_dataframe (1), ratings_df (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Scheduling ETL pipeline using Airflow
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=0)** - [Instructor] It's time to put everything together and schedule the jobs that we have defined so far.
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=5)** As discussed, we'll have to use a scheduling tool for this, and the most commonly used scheduling tool is Apache Airflow.
>
> **[0:12](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=12)** We'll be using the code written so far, and then we'll define a directed acyclic graph using Apache Airflow.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=20)** So first of all, let's set up Airflow on our machine.
>
> **[0:24](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=24)** So, I am first creating a directory called Airflow, where all the configuration file and database would reside.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=31)** So mkdir airflow, that's the command.
>
> **[0:35](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=35)** Now, the next step is to set the AIRFLOW_HOME variable.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=39)** So AIRFLOW_HOME, export the path to this variable that is actually required by the Airflow configuration file.
>
> **[0:48](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=48)** Chapter_4, and the airflow directory.
>
> **[0:53](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=53)** This is the home that we have set.
>
> **[0:56](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=56)** Now, the next step is to actually install Apache Airflow.
>
> **[1:02](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=62)** So sudo pip install apache-airflow.
>
> **[1:07](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=67)** Hit Enter.
>
> **[1:09](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=69)** Now, this is going to take a few seconds, close to a minute.
>
> **[1:13](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=73)** I already have it installed.
>
> **[1:15](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=75)** And the next step is to initialize the database.
>
> **[1:19](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=79)** So the command for that is airflow db init.
>
> **[1:24](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=84)** Hit Enter, and this is going to set up some configuration file, web server file inside the Airflow directory, as you can see over here.
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=92)** Go to the Airflow directory and you see logs.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=95)** You have Airflow configuration, airflow.db, unittest dot configuration and web server_config.py.
>
> **[1:43](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=103)** So, once the initialization is done, now we are going to create an admin user.
>
> **[1:48](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=108)** And for that, we can use this command over here from the documentation.
>
> **[1:52](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=112)** Copy and paste it and change it to your credentials.
>
> **[1:58](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=118)** So email is example@[example.com](https://example.com).
>
> **[2:04](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=124)** Role is admin, that is fine.
>
> **[2:06](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=126)** Last name is Tyagi.
>
> **[2:09](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=129)** You can change it to your last name, first name and then change the username as well.
>
> **[2:16](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=136)** Hit enter.
>
> **[2:17](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=137)** It's going to ask me to set the password.
>
> **[2:21](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=141)** Set the password, confirm it, and admin user has been created.
>
> **[2:27](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=147)** All right.
>
> **[2:28](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=148)** Now the next step is to use the code that we have written so far.
>
> **[2:32](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=152)** So I've copied all of the functions, the extraction functions, the transformation functions, the loading function, all of the ETL pipeline, the entire ETL behavior is actually inside this transformation model that I'm going to be using inside my dags script, the Airflow script.
>
> **[2:49](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=169)** So one thing that you should be very clear about here is that Airflow python script is really just a configuration file.
>
> **[2:57](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=177)** There's no processing happening here.
>
> **[2:59](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=179)** Everything that is related to data processing is happening inside the transformation module.
>
> **[3:04](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=184)** Now the dags.py is all about a configuration file for our dag structure as code.
>
> **[3:12](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=192)** So first, I am importing Airflow over here.
>
> **[3:15](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=195)** Then, from the modules module, I am importing the dag class.
>
> **[3:20](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=200)** And Airflow offers a bunch of operators.
>
> **[3:23](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=203)** So, our ETL pipeline has been defined using Python.
>
> **[3:27](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=207)** So I'm using the Python operator.
>
> **[3:29](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=209)** If you have defined it in Bash or some other language, there are a bunch of operators that Airflow offers.
>
> **[3:34](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=214)** You can use them and learn about them from the documentation.
>
> **[3:38](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=218)** Then I'm using the daytime module.
>
> **[3:40](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=220)** And I have imported all the functions from my transformation module.
>
> **[3:44](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=224)** Now the next step is to wrap everything up.
>
> **[3:47](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=227)** So I haven't encapsulated the entire ETL behavior inside this function called ETL.
>
> **[3:52](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=232)** So first of all, I am extracting the movies data the users data, transforming it and then loading it back to the database.
>
> **[4:00](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=240)** That's my ETL function.
>
> **[4:02](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=242)** Every, all of the ETL behavior is inside this function itself.
>
> **[4:06](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=246)** Now I need to define the arguments for my directed acyclic graph, the dag using the default underscore augs.
>
> **[4:14](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=254)** That's basically just a dictionary.
>
> **[4:16](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=256)** So I'm setting the owner.
>
> **[4:17](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=257)** That's me, Harshit.
>
> **[4:19](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=259)** Start date depends on past, if it depends on the past runs.
>
> **[4:23](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=263)** Email to which all of the messaging would be done.
>
> **[4:27](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=267)** If anything fails and anything succeeds, the email on failure is true.
>
> **[4:31](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=271)** So if anything fails, an email would be sent to me.
>
> **[4:34](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=274)** Email on retry is false.
>
> **[4:36](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=276)** Retry is three.
>
> **[4:37](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=277)** Retry delays, so between any two consecutive retry times there'd be a 30 minutes delay that I've set.
>
> **[4:43](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=283)** You can change it to anything that you want.
>
> **[4:46](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=286)** And then I'm instantiating this dag using the dag class.
>
> **[4:50](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=290)** You have to provide the dag ID.
>
> **[4:52](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=292)** I'm calling it ETL_pippeline.
>
> **[4:54](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=294)** I'm setting the default args to this dictionary that I've defined above.
>
> **[4:58](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=298)** Scheduling interval is this a chron time expression, which is basically just a five letter string.
>
> **[5:06](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=306)** So the first letter is basically minute.
>
> **[5:09](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=309)** This is hour.
>
> **[5:10](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=310)** Then the third letter is for day of the month.
>
> **[5:14](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=314)** And this is for week, and this is for day of the week.
>
> **[5:18](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=318)** So the zero zero here means that I want to run all of these dag every zeroth minute of the zeroth hour every day.
>
> **[5:28](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=328)** So this is what I have defined my scheduling interval to be.
>
> **[5:33](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=333)** And then I'm defining my EDL task, which is basically just a Python operator that would actually run my task.
>
> **[5:41](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=341)** So calling the task ID, EDL_task, the Python callable is my ETL function that I've defined above and the dag that I'm going to be using is the dag that I've instantiated above.
>
> **[5:52](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=352)** And then I'm calling the ETL at the end.
>
> **[5:54](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=354)** So let's just save it.
>
> **[5:57](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=357)** Now, the next step is to move everything inside the Airflow, dag directory.
>
> **[6:02](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=362)** So first, create the dag directory.
>
> **[6:04](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=364)** Call it dags.
>
> **[6:05](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=365)** And you can only call it dags because the configuration file has this dags folder defined and the path has been set.
>
> **[6:15](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=375)** So everything needs to be inside this dags folder.
>
> **[6:19](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=379)** Move these files inside the dags folder.
>
> **[6:24](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=384)** And the transformation module that is basically where the processing is happening.
>
> **[6:31](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=391)** So my transformation model is being used inside dags.
>
> **[6:33](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=393)** So both of these files need to be inside this dags folder.
>
> **[6:38](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=398)** So once that is done, the next step is to start the web UI and the command for that is Airflow web server.
>
> **[6:47](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=407)** So this will basically start the server.
>
> **[6:50](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=410)** A flass level is done.
>
> **[6:51](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=411)** And you're given URL where you can actually look at it.
>
> **[6:54](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=414)** This is where the server is the running.
>
> **[6:58](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=418)** Copy it, paste it in your browser.
>
> **[7:01](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=421)** This is going to ask you for your username and password.
>
> **[7:03](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=423)** You're going to enter it.
>
> **[7:05](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=425)** But before that, let's quickly start the Airflow scheduler as well.
>
> **[7:10](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=430)** So here again you would have to first export your Airflow home.
>
> **[7:14](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=434)** We'll do that and then call Airflow scheduler because this is going to update or add our dag to the web UI.
>
> **[7:26](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=446)** So our scheduler is now running.
>
> **[7:28](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=448)** Add the username and password.
>
> **[7:30](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=450)** The username is Harshit.
>
> **[7:32](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=452)** And then password.
>
> **[7:35](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=455)** So once you have added the username and password, this is how the UI is going to be.
>
> **[7:40](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=460)** And then there are a bunch of dags that have been already defined by the Airflow team itself, the packet itself.
>
> **[7:48](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=468)** So there are bunch of sartorial dags that are there that you can look at and you can learn about them from the documentation.
>
> **[7:55](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=475)** Keep refreshing it.
>
> **[7:57](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=477)** The rdag is called ETL_pipeline.
>
> **[7:59](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=479)** It's going to pop up here soon.
>
> **[8:03](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=483)** So, as you can see, we have to keep refreshing.
>
> **[8:05](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=485)** So it has come up.
>
> **[8:06](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=486)** Our ETL_pipeline over here.
>
> **[8:08](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=488)** Owner is Harshit.
>
> **[8:10](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=490)** Scheduling interval is as we define.
>
> **[8:13](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=493)** Recent tasks, you can play it, pause it, delete it.
>
> **[8:16](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=496)** And you can also use this pause, unpause toggle button over here.
>
> **[8:21](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=501)** If you click on it, you can actually interpret it.
>
> **[8:24](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=504)** We only have one task.
>
> **[8:25](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=505)** If you have like many other tasks or you have like separate tasks to extract transform load it would show you the graph over here.
>
> **[8:33](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=513)** So this is probably how you can use, or you can create an end to end data pipeline using different tools, like Apache Spark, Apache Airflow, different databases like PostgreSQL, mySQL or Mongo DB.
>
> **[8:49](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=529)** So that's how you can go about creating an ETL pipeline end to end.
>
> **[8:55](https://www.linkedin.com/learning/data-engineering-foundations/scheduling-etl-pipeline-using-airflow?u=76281980&t=535)** And this would basically pave the way for to create further, more complex data pipelines.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), module (5), let (3), class. (2), this, (1)
> **CLI Commands:** apache (6), python (5), mkdir (1), sudo (1), pip (1)
> **Env Vars:** etl (10), airflow_home (2), edl (1), url (1)
> **Prerequisites:** set up (2), install (2), initialization (1)
> **Documentation:** the documentation (3)
> **UI Navigation:** go to (1), toggle (1), click on (1)
> **File Paths:** server_config.py (1), dags.py (1)
> **Code Identifiers:** server_config (1), mysql (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-foundations/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-foundations/next-steps?u=76281980&t=0)** - [Harshit] You have just learned a wide range of tools and concepts, from extracting data from various sources to transforming data frames, to loading it into databases, and even scheduling the task in the pipeline using Airflow.
>
> **[0:14](https://www.linkedin.com/learning/data-engineering-foundations/next-steps?u=76281980&t=14)** The journey has just begun.
>
> **[0:15](https://www.linkedin.com/learning/data-engineering-foundations/next-steps?u=76281980&t=15)** There are many more concepts and tools to master.
>
> **[0:18](https://www.linkedin.com/learning/data-engineering-foundations/next-steps?u=76281980&t=18)** With the skills learned here, you are well on your way to becoming a competent data engineer.
>
> **[0:24](https://www.linkedin.com/learning/data-engineering-foundations/next-steps?u=76281980&t=24)** Feel free to connect with me on LinkedIn or you can subscribe to my YouTube channel, Data Science with Harshit, where we discuss anything and everything about data.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-foundations/next-steps?u=76281980&t=34)** Thanks for watching and I'll catch you guys next time.

> [!info]- Semantic Content
>
> **Speakers:** - [harshit] (1)


## Resources

- Exercise files available

## Skills Covered

- Data Engineering

## Path Context

### In [[Develop Your Scala Skills for Data Engineering]]
**1 of 6** | [[Hands-On Introduction- Data Engineering]] →

### In [[Develop Your Rust Skills for Data Engineering]]
**1 of 6** | [[Hands-On Introduction- Data Engineering]] →

### In [[Introduction to Fundamental Skills for Data Work- Data Processing]]
**1 of 7** | [[Python For Data Science And Machine Learning Essential Training Part]] →

### In [[Explore a Career in Data Engineering]]
**1 of 7** | [[Hands-On Introduction- Data Engineering]] →

## Appears In

- [[Develop Your Scala Skills for Data Engineering]]
- [[Develop Your Rust Skills for Data Engineering]]
- [[Introduction to Fundamental Skills for Data Work- Data Processing]]
- [[Explore a Career in Data Engineering]]

## Related Courses

_Courses sharing skills:_

- [[Databricks Certified Data Engineer Associate Cert Prep]] — Data Engineering
- [[Big Data Analytics with Hadoop and Apache Spark]] — Data Engineering
- [[Transition from Data Science to Data Engineering]] — Data Engineering
- [[Introduction to Modern Data Engineering with Snowflake]] — Data Engineering
- [[Complete Guide to SQL for Data Engineering- from Beginner to Advanced]] — Data Engineering

---

[↑ Back to top](#)